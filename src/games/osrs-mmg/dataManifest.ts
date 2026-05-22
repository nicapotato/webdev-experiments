import type { DataManifest } from "./types";
import { MANIFEST_URL } from "./dataConfig";

export async function fetchManifest(): Promise<DataManifest> {
  const res = await fetch(MANIFEST_URL, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error(`Failed to load manifest (${res.status})`);
  }
  return (await res.json()) as DataManifest;
}

export function isManifestStale(
  remote: DataManifest,
  cachedSha256: string | null,
): boolean {
  if (!cachedSha256) return true;
  return remote.artifacts.database.sha256 !== cachedSha256;
}
