import { useCallback, useEffect, useState } from "react";

import {
  isLocalDuckdbMode,
  isRemoteDataEnabled,
  LOCAL_DUCKDB_URL,
  LOCAL_MANIFEST_URL,
  duckdbUrlFromManifest,
} from "./dataConfig";
import { fetchDuckdbBytes, readCachedDuckdb, writeCachedDuckdb } from "./dataCache";
import { fetchManifest, isManifestStale } from "./dataManifest";
import { initDuckdbWithBytes } from "./duckdbClient";
import type { DataManifest } from "./types";

type OsrsDataState = {
  ready: boolean;
  loading: boolean;
  error: string | null;
  manifest: DataManifest | null;
  fromCache: boolean;
  localMode: boolean;
};

export function useOsrsData(): OsrsDataState & { reload: () => void } {
  const [state, setState] = useState<OsrsDataState>({
    ready: false,
    loading: isLocalDuckdbMode() || isRemoteDataEnabled(),
    error: null,
    manifest: null,
    fromCache: false,
    localMode: isLocalDuckdbMode(),
  });
  const [reloadToken, setReloadToken] = useState(0);

  const reload = useCallback(() => {
    setReloadToken((n) => n + 1);
  }, []);

  useEffect(() => {
    if (!isLocalDuckdbMode() && !isRemoteDataEnabled()) {
      setState({
        ready: false,
        loading: false,
        error: null,
        manifest: null,
        fromCache: false,
        localMode: false,
      });
      return;
    }

    let cancelled = false;

    async function bootLocal(): Promise<void> {
      const res = await fetch(LOCAL_DUCKDB_URL, { cache: "no-cache" });
      if (!res.ok) {
        throw new Error(
          `Failed to load local DuckDB (${res.status}). Copy osrs-mmg.duckdb to public/games/osrs-mmg/`,
        );
      }
      const bytes = await res.arrayBuffer();
      const cacheKey =
        res.headers.get("etag") ??
        res.headers.get("last-modified") ??
        `${LOCAL_DUCKDB_URL}:${bytes.byteLength}`;

      let manifest: DataManifest | null = null;
      if (LOCAL_MANIFEST_URL) {
        const manifestRes = await fetch(LOCAL_MANIFEST_URL, { cache: "no-cache" });
        if (manifestRes.ok) {
          manifest = (await manifestRes.json()) as DataManifest;
        }
      }

      await initDuckdbWithBytes(bytes, cacheKey);
      if (!cancelled) {
        setState({
          ready: true,
          loading: false,
          error: null,
          manifest,
          fromCache: false,
          localMode: true,
        });
      }
    }

    async function bootRemote(): Promise<void> {
      const manifest = await fetchManifest();
      const cached = await readCachedDuckdb();
      const stale = isManifestStale(manifest, cached?.sha256 ?? null);

      let bytes: ArrayBuffer;
      let fromCache = false;
      if (!stale && cached) {
        bytes = cached.bytes;
        fromCache = true;
      } else {
        bytes = await fetchDuckdbBytes(duckdbUrlFromManifest(manifest));
        await writeCachedDuckdb({
          sha256: manifest.artifacts.database.sha256,
          bytes,
          fetchedAt: new Date().toISOString(),
        });
      }

      await initDuckdbWithBytes(bytes, manifest.artifacts.database.sha256);
      if (!cancelled) {
        setState({
          ready: true,
          loading: false,
          error: null,
          manifest,
          fromCache,
          localMode: false,
        });
      }
    }

    async function boot() {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        if (isLocalDuckdbMode()) {
          await bootLocal();
        } else {
          await bootRemote();
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            ready: false,
            loading: false,
            error: err instanceof Error ? err.message : String(err),
            manifest: null,
            fromCache: false,
            localMode: isLocalDuckdbMode(),
          });
        }
      }
    }

    void boot();
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  return { ...state, reload };
}
