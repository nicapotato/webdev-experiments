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

export function OsrsMmgTrendsPanel({
  mode,
  methodId,
  methodName,
  topMethods = [],
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
  }, [mode, methodId, period, topMethods, topN]);

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

      {loading ? <p>Loading chart…</p> : null}

      {mode === "single" && series.length > 0 ? (
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={series}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="period" tick={{ fontSize: 11 }} />
            <YAxis yAxisId="profit" tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
            {showVolume ? (
              <YAxis yAxisId="volume" orientation="right" tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
            ) : null}
            <Tooltip formatter={(v: number) => formatGp(v)} />
            <Area
              yAxisId="profit"
              dataKey="p75"
              stackId="band"
              fill="#1e3a5f"
              stroke="none"
              name="p75"
            />
            <Area
              yAxisId="profit"
              dataKey="p25"
              stackId="band"
              fill="#0f172a"
              stroke="none"
              name="p25"
            />
            <Line yAxisId="profit" type="monotone" dataKey="median_profit" stroke="#38bdf8" name="Median GP/h" />
            {showVolume ? (
              <Line yAxisId="volume" type="monotone" dataKey="item_volume" stroke="#fbbf24" name="GE volume" />
            ) : null}
          </ComposedChart>
        </ResponsiveContainer>
      ) : null}

      {mode === "topN" && comparisonChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={comparisonChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="period" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
            <Tooltip formatter={(v: number) => formatGp(v)} />
            <Legend />
            {methodNames.map((name, i) => (
              <Line key={name} type="monotone" dataKey={name} stroke={CHART_COLORS[i % CHART_COLORS.length]} />
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

const CHART_COLORS = ["#38bdf8", "#a78bfa", "#34d399", "#fb7185", "#fbbf24", "#94a3b8"];
