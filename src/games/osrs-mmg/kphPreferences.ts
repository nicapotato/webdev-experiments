import type { KphPreferencesFile } from "./types";

const STORAGE_KEY = "osrs-mmg-kph-v1";

export function readKphMap(): Record<string, number> {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as KphPreferencesFile;
    return parsed.kph_by_method_id ?? {};
  } catch {
    return {};
  }
}

export function writeKphMap(map: Record<string, number>): void {
  const payload: KphPreferencesFile = {
    version: 1,
    updated_at: new Date().toISOString(),
    kph_by_method_id: map,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function getUserKph(methodId: string, defaultKph: number): number {
  const map = readKphMap();
  const value = map[methodId];
  return value !== undefined && Number.isFinite(value) ? value : defaultKph;
}

export function setUserKph(methodId: string, kph: number): void {
  const map = readKphMap();
  map[methodId] = kph;
  writeKphMap(map);
}

export function exportKphBackup(): KphPreferencesFile {
  return {
    version: 1,
    updated_at: new Date().toISOString(),
    kph_by_method_id: readKphMap(),
  };
}

export function importKphBackup(
  file: KphPreferencesFile,
  mergeStrategy: "import_wins" = "import_wins",
): Record<string, number> {
  if (file.version !== 1 || typeof file.kph_by_method_id !== "object") {
    throw new Error("Invalid kph backup file");
  }
  const current = readKphMap();
  const merged =
    mergeStrategy === "import_wins"
      ? { ...current, ...file.kph_by_method_id }
      : { ...file.kph_by_method_id, ...current };
  writeKphMap(merged);
  return merged;
}
