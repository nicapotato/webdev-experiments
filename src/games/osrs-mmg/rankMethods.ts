import type { MethodRankRow } from "./types";

export function profitAtKph(row: Pick<MethodRankRow, "profit_pk" | "profit_ph">, kph: number): number {
  return row.profit_pk * kph + row.profit_ph;
}

export function rankMethods(
  rows: MethodRankRow[],
  kphByMethodId: Record<string, number>,
): MethodRankRow[] {
  return [...rows].sort((a, b) => {
    const kphA = kphByMethodId[a.method_id] ?? a.default_kph;
    const kphB = kphByMethodId[b.method_id] ?? b.default_kph;
    return profitAtKph(b, kphB) - profitAtKph(a, kphA);
  });
}
