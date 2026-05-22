import { isSnapshotOutdated } from "./dataManifest";
import type { DataManifest } from "./types";

type Props = {
  loading: boolean;
  error: string | null;
  manifest: DataManifest | null;
  fromCache: boolean;
  onReload: () => void;
};

export function OsrsMmgDataBanner({
  loading,
  error,
  manifest,
  fromCache,
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
  if (!manifest || !isSnapshotOutdated(manifest)) {
    return null;
  }

  return (
    <p className="osrs-mmg__banner osrs-mmg__banner--stale">
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
