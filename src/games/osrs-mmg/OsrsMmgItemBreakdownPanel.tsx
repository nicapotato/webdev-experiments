import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { axisTick, chartMargin, legendProps, OSRS_CHART_THEME, tooltipProps } from "./chartTheme";
import {
  fetchMethodIoLines,
  fetchMethodItemMetrics,
  hasPriceMetricsData,
} from "./duckdbQueries";
import { fetchMethodItemMetricsFromGeApi } from "./gePricesApi";
import { buildItemBreakdownChartData, OTHER_SERIES_KEY, type BreakdownSeries } from "./itemBreakdown";
import { formatGp, formatGpCompact, rankItemBreakdown } from "./mmgCalc";
import { comparePeriodKeys, formatPeriodTooltipLabel, periodXAxisProps } from "./periodFormat";
import type { MmgGuide, PeriodGranularity } from "./types";

type Props = {
  methodId: string;
  guide: MmgGuide;
  kph: number;
};

const PERIODS: PeriodGranularity[] = ["day", "week", "month", "quarter", "year"];

function seriesColor(index: number, seriesKey: string): string {
  if (seriesKey === OTHER_SERIES_KEY) {
    return OSRS_CHART_THEME.otherSeries;
  }
  return OSRS_CHART_THEME.colors[index % OSRS_CHART_THEME.colors.length];
}

function formatVolume(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}k`;
  return String(Math.round(value));
}

function BreakdownTooltip({
  active,
  payload,
  label,
  period,
}: {
  active?: boolean;
  payload?: { dataKey?: string; name?: string; value?: number; color?: string }[];
  label?: string;
  period: PeriodGranularity;
}) {
  if (!active || !payload?.length || label == null) return null;

  const entry = payload[0];
  const dataKey = String(entry.dataKey ?? "");
  const isVolume = dataKey.endsWith("__volume");
  const value = entry.value;
  if (value == null || !Number.isFinite(value)) return null;

  return (
    <div className="osrs-mmg__chart-tooltip" style={tooltipProps.contentStyle}>
      <p className="osrs-mmg__chart-tooltip-label">
        {formatPeriodTooltipLabel(label, period)}
      </p>
      <p className="osrs-mmg__chart-tooltip-value" style={{ color: entry.color }}>
        {entry.name}: {isVolume ? formatVolume(value) : formatGp(value)}
      </p>
    </div>
  );
}

export function OsrsMmgItemBreakdownPanel({ methodId, guide, kph }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [period, setPeriod] = useState<PeriodGranularity>("week");
  const [showVolume, setShowVolume] = useState(true);
  const [rows, setRows] = useState<Awaited<ReturnType<typeof fetchMethodItemMetrics>>>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [usingLiveGe, setUsingLiveGe] = useState(false);

  const rank = useMemo(() => rankItemBreakdown(guide, kph), [guide, kph]);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    async function load() {
      setLoading(true);
      setLoadError(null);
      try {
        const bundledPrices = await hasPriceMetricsData();
        if (bundledPrices) {
          const data = await fetchMethodItemMetrics(methodId, period);
          if (!cancelled) {
            setRows(data);
            setUsingLiveGe(false);
          }
        } else {
          const ioLines = await fetchMethodIoLines(methodId);
          const data = await fetchMethodItemMetricsFromGeApi(ioLines, period);
          if (!cancelled) {
            setRows(data);
            setUsingLiveGe(true);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setRows([]);
          setLoadError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [enabled, methodId, period]);

  const { chartData, series } = useMemo(
    () => buildItemBreakdownChartData(rows, rank, kph),
    [rows, rank, kph],
  );

  const sortedChartData = useMemo(
    () => [...chartData].sort((a, b) => comparePeriodKeys(String(a.period), String(b.period))),
    [chartData],
  );

  const hasChartData = sortedChartData.some((point) =>
    series.some((entry) => {
      const price = point[entry.priceKey];
      const volume = point[entry.volumeKey];
      return (typeof price === "number" && Number.isFinite(price))
        || (typeof volume === "number" && Number.isFinite(volume));
    }),
  );

  return (
    <section className="osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown">
      <div className="osrs-mmg__trends-header">
        <h3>Item breakdown</h3>
        <label className="osrs-mmg__volume-toggle">
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          Show item breakdown
        </label>
      </div>

      {enabled ? (
        <>
          <p className="osrs-mmg__muted osrs-mmg__breakdown-intro">
            Top 5 items by |GP/h| at your current rate, plus Other for the rest. Solid lines are GE price; dashed lines are GE volume.
            {usingLiveGe ? (
              <>
                {" "}
                Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset.
              </>
            ) : null}
          </p>

          <table className="osrs-mmg__table osrs-mmg__table--compact">
            <thead>
              <tr>
                <th>Item</th>
                <th>GP/h</th>
                <th>Qty/h</th>
              </tr>
            </thead>
            <tbody>
              {rank.top.map((line) => (
                <tr key={line.lineKey}>
                  <td>{line.itemName}</td>
                  <td>{formatGp(line.gpPerHour)}</td>
                  <td>{line.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 })}</td>
                </tr>
              ))}
              {rank.other.length > 0 ? (
                <tr>
                  <td>Other ({rank.other.length} items)</td>
                  <td>{formatGp(rank.other.reduce((sum, line) => sum + line.gpPerHour, 0))}</td>
                  <td>—</td>
                </tr>
              ) : null}
            </tbody>
          </table>

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
            <label className="osrs-mmg__volume-toggle">
              <input
                type="checkbox"
                checked={showVolume}
                onChange={(e) => setShowVolume(e.target.checked)}
              />
              GE volume
            </label>
          </div>

          {loading ? <p className="osrs-mmg__muted">Loading item charts…</p> : null}
          {loadError ? <p className="osrs-mmg__banner osrs-mmg__banner--error">{loadError}</p> : null}

          {!loading && hasChartData ? (
            <div className="osrs-mmg__chart">
              <ResponsiveContainer width="100%" height={420}>
                <ComposedChart data={sortedChartData} margin={chartMargin}>
                  <CartesianGrid strokeDasharray="3 3" stroke={OSRS_CHART_THEME.grid} />
                  <XAxis
                    dataKey="period"
                    tick={axisTick}
                    stroke={OSRS_CHART_THEME.axis}
                    {...periodXAxisProps(period)}
                  />
                  <YAxis
                    yAxisId="price"
                    tick={axisTick}
                    stroke={OSRS_CHART_THEME.axis}
                    tickFormatter={(v) => formatGpCompact(v)}
                  />
                  {showVolume ? (
                    <YAxis
                      yAxisId="volume"
                      orientation="right"
                      tick={axisTick}
                      stroke={OSRS_CHART_THEME.axis}
                      tickFormatter={formatVolume}
                    />
                  ) : null}
                  <Tooltip
                    content={(props) => <BreakdownTooltip {...props} period={period} />}
                    {...tooltipProps}
                  />
                  <Legend {...legendProps} />
                  {series.flatMap((entry: BreakdownSeries, index: number) => {
                    const color = seriesColor(index, entry.key);
                    const lines = [
                      <Line
                        key={entry.priceKey}
                        yAxisId="price"
                        type="monotone"
                        dataKey={entry.priceKey}
                        name={`${entry.label} price`}
                        stroke={color}
                        connectNulls
                        dot={false}
                      />,
                    ];
                    if (showVolume) {
                      lines.push(
                        <Line
                          key={entry.volumeKey}
                          yAxisId="volume"
                          type="monotone"
                          dataKey={entry.volumeKey}
                          name={`${entry.label} volume`}
                          stroke={color}
                          strokeDasharray="5 4"
                          connectNulls
                          dot={false}
                        />,
                      );
                    }
                    return lines;
                  })}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          ) : null}

          {!loading && !loadError && !hasChartData ? (
            <p className="osrs-mmg__muted">No GE price history available for these items.</p>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
