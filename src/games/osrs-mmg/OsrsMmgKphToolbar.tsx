import { useRef } from "react";
import { toast } from "sonner";

import { exportKphBackup, importKphBackup } from "./kphPreferences";
import type { KphPreferencesFile } from "./types";

type Props = {
  onImported: () => void;
};

export function OsrsMmgKphToolbar({ onImported }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  function onExport() {
    const payload = exportKphBackup();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "osrs-mmg-kph-backup.json";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("KPH preferences exported");
  }

  function onImportClick() {
    fileRef.current?.click();
  }

  async function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as KphPreferencesFile;
      importKphBackup(parsed);
      onImported();
      toast.success("KPH preferences imported");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Import failed");
    }
  }

  return (
    <div className="osrs-mmg__toolbar">
      <button type="button" onClick={onExport}>
        Export kph
      </button>
      <button type="button" onClick={onImportClick}>
        Import kph
      </button>
      <input ref={fileRef} type="file" accept="application/json" hidden onChange={onFileChange} />
    </div>
  );
}
