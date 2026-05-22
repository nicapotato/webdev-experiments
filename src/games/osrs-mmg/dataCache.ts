const DB_NAME = "osrs-mmg-cache";
const STORE = "artifacts";
const DUCKDB_KEY = "duckdb";

type CachedArtifact = {
  sha256: string;
  bytes: ArrayBuffer;
  fetchedAt: string;
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB open failed"));
  });
}

export async function readCachedDuckdb(): Promise<CachedArtifact | null> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(DUCKDB_KEY);
    req.onsuccess = () => resolve((req.result as CachedArtifact | undefined) ?? null);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB read failed"));
  });
}

export async function writeCachedDuckdb(artifact: CachedArtifact): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(artifact, DUCKDB_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("IndexedDB write failed"));
  });
}

export async function fetchDuckdbBytes(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error(`Failed to download DuckDB (${res.status})`);
  }
  return res.arrayBuffer();
}
