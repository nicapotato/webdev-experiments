import type {
  ItemBreakdownChartPoint,
  MethodItemMetricRow,
  RankedBreakdownLine,
} from "./types";

export type BreakdownSeries = {
  key: string;
  label: string;
  priceKey: string;
  volumeKey: string;
  lines: RankedBreakdownLine[];
};

export function buildBreakdownSeries(lines: RankedBreakdownLine[]): BreakdownSeries[] {
  return lines.map((line) => ({
    key: line.lineKey,
    label: line.itemName,
    priceKey: `${line.lineKey}__price`,
    volumeKey: `${line.lineKey}__volume`,
    lines: [line],
  }));
}

export function buildItemBreakdownChartData(
  rows: MethodItemMetricRow[],
  lines: RankedBreakdownLine[],
): { chartData: ItemBreakdownChartPoint[]; series: BreakdownSeries[] } {
  const series = buildBreakdownSeries(lines);
  const byPeriod = new Map<string, MethodItemMetricRow[]>();

  for (const row of rows) {
    const bucket = byPeriod.get(row.period) ?? [];
    bucket.push(row);
    byPeriod.set(row.period, bucket);
  }

  const chartData: ItemBreakdownChartPoint[] = [...byPeriod.keys()]
    .sort()
    .map((period) => {
      const periodRows = byPeriod.get(period) ?? [];
      const point: ItemBreakdownChartPoint = { period };

      for (const entry of series) {
        const line = entry.lines[0];
        const row = periodRows.find(
          (candidate) =>
            candidate.wikiSlug === line.wikiSlug && candidate.ioType === line.ioType,
        );
        point[entry.priceKey] = row?.price ?? null;
        point[entry.volumeKey] = row?.volume ?? null;
      }

      return point;
    });

  return { chartData, series };
}
