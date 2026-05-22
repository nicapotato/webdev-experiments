import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { axisTick, OSRS_CHART_THEME, tooltipProps } from "./chartTheme";
import { fetchTopNComparison, fetchTrendSeries } from "./duckdbQueries";
import { formatGp } from "./mmgCalc";
import type { MethodRankRow, PeriodGranularity, TrendPoint } from "./types";

type Props = {
  mode: "single" | "topN";
  methodId?: string;
  methodName?: string;
  topMethods?: MethodRankRow[];
  topN?: number;
};

const PERIODS: PeriodGranularity[] = ["day", "week", "month", "quarter", "year"];
const EMPTY_TOP_METHODS: MethodRankRow[] = [];

export function OsrsMmgTrendsPanel({
  mode,
  methodId,
  methodName,
  topMethods = EMPTY_TOP_METHODS,
  topN = 10,
}: Props) {
  const [period, setPeriod] = useState<PeriodGranularity>("week");
  const [series, setSeries] = useState<TrendPoint[]>([]);
  const [comparison, setComparison] = useState<
    { method_id: string; method_name: string; period: string; profit: number }[]
  >([]);
  const [showVolume, setShowVolume] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        if (mode === "single" && methodId) {
          const data = await fetchTrendSeries(methodId, period);
          if (!cancelled) setSeries(data);
        } else if (mode === "topN") {
          const ids = topMethods.slice(0, topN).map((m) => m.method_id);
          const data = await fetchTopNComparison(ids, period);
          if (!cancelled) setComparison(data);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [mode, methodId, period, topN, mode === "topN" ? topMethods : null]);

  const comparisonChartData = useMemo(() => {
    const byPeriod = new Map<string, Record<string, number | string>>();
    for (const row of comparison) {
      const key = String(row.period);
      const entry = byPeriod.get(key) ?? { period: key };
      entry[row.method_name] = row.profit;
      byPeriod.set(key, entry);
    }
    return [...byPeriod.values()];
  }, [comparison]);

  const methodNames = useMemo(
    () => [...new Set(comparison.map((r) => r.method_name))],
    [comparison],
  );

  return (
    <section className="osrs-mmg__panel osrs-mmg__trends">
      <div className="osrs-mmg__trends-header">
        <h3>{mode === "single" ? `Trends · ${methodName ?? "Method"}` : "Top methods over time"}</h3>
        <div className="osrs-mmg__period-row">
          {PERIODS.map((p) => (
            <button
              key={p}
              type="button"
              className={p === period ? "is-active" : ""}
              onClick={() => setPeriod(p)}
            >
              {p}
            </button>
          ))}
          {mode === "single" ? (
            <label className="osrs-mmg__volume-toggle">
              <input
                type="checkbox"
                checked={showVolume}
                onChange={(e) => setShowVolume(e.target.checked)}
              />
              Item volume
            </label>
          ) : null}
        </div>
      </div>

      {loading ? <p className="osrs-mmg__muted">Loading chart…</p> : null}

      {mode === "single" && series.length > 0 ? (
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={series}>
            <CartesianGrid strokeDasharray="3 3" stroke={OSRS_CHART_THEME.grid} />
            <XAxis dataKey="period" tick={axisTick} stroke={OSRS_CHART_THEME.axis} />
            <YAxis
              yAxisId="profit"
              tick={axisTick}
              stroke={OSRS_CHART_THEME.axis}
              tickFormatter={(v) => `${Math.round(v / 1000)}k`}
            />
            {showVolume ? (
              <YAxis
                yAxisId="volume"
                orientation="right"
                tick={axisTick}
                stroke={OSRS_CHART_THEME.axis}
                tickFormatter={(v) => `${Math.round(v / 1000)}k`}
              />
            ) : null}
            <Tooltip formatter={(v: number) => formatGp(v)} {...tooltipProps} />
            <Area
              yAxisId="profit"
              dataKey="p75"
              stackId="band"
              fill={OSRS_CHART_THEME.bandP75}
              stroke="none"
              name="p75"
            />
            <Area
              yAxisId="profit"
              dataKey="p25"
              stackId="band"
              fill={OSRS_CHART_THEME.bandP25}
              stroke="none"
              name="p25"
            />
            <Line
              yAxisId="profit"
              type="monotone"
              dataKey="median_profit"
              stroke={OSRS_CHART_THEME.medianLine}
              name="Median GP/h"
            />
            {showVolume ? (
              <Line
                yAxisId="volume"
                type="monotone"
                dataKey="item_volume"
                stroke={OSRS_CHART_THEME.volumeLine}
                name="GE volume"
              />
            ) : null}
          </ComposedChart>
        </ResponsiveContainer>
      ) : null}

      {mode === "topN" && comparisonChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={comparisonChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={OSRS_CHART_THEME.grid} />
            <XAxis dataKey="period" tick={axisTick} stroke={OSRS_CHART_THEME.axis} />
            <YAxis
              tick={axisTick}
              stroke={OSRS_CHART_THEME.axis}
              tickFormatter={(v) => `${Math.round(v / 1000)}k`}
            />
            <Tooltip formatter={(v: number) => formatGp(v)} {...tooltipProps} />
            <Legend wrapperStyle={{ color: OSRS_CHART_THEME.axis }} />
            {methodNames.map((name, i) => (
              <Line
                key={name}
                type="monotone"
                dataKey={name}
                stroke={OSRS_CHART_THEME.colors[i % OSRS_CHART_THEME.colors.length]}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      ) : null}

      {!loading && mode === "single" && series.length === 0 ? (
        <p className="osrs-mmg__muted">No snapshot history yet for this method.</p>
      ) : null}
      {!loading && mode === "topN" && comparisonChartData.length === 0 ? (
        <p className="osrs-mmg__muted">Re-rank the table to pick top methods, or wait for more daily snapshots.</p>
      ) : null}
    </section>
  );
}
