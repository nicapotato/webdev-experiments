import type { DataManifest } from "./types";

type Props = {
  loading: boolean;
  error: string | null;
  manifest: DataManifest | null;
  fromCache: boolean;
  localMode?: boolean;
  onReload: () => void;
};

export function OsrsMmgDataBanner({
  loading,
  error,
  manifest,
  fromCache,
  localMode = false,
  onReload,
}: Props) {
  if (loading) {
    return <p className="osrs-mmg__banner osrs-mmg__banner--loading">Loading OSRS data…</p>;
  }
  if (error) {
    return (
      <p className="osrs-mmg__banner osrs-mmg__banner--error">
        {error}{" "}
        <button type="button" onClick={onReload}>
          Retry
        </button>
      </p>
    );
  }
  if (!manifest) {
    if (localMode) {
      return (
        <p className="osrs-mmg__banner">
          Local DuckDB
          {" · "}
          <button type="button" onClick={onReload}>
            Reload
          </button>
        </p>
      );
    }
    return null;
  }

  return (
    <p className="osrs-mmg__banner">
      Data from {manifest.generated_at}
      {manifest.latest_snapshot_date ? ` · snapshot ${manifest.latest_snapshot_date}` : ""}
      {fromCache ? " · cached" : " · fresh download"}
      {" · "}
      <button type="button" onClick={onReload}>
        Refresh
      </button>
    </p>
  );
}
