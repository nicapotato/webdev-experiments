import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { axisTick, chartMargin, OSRS_CHART_THEME, tooltipProps } from "./chartTheme";
import {
  fetchMethodIoLines,
  fetchMethodItemMetrics,
  hasPriceMetricsData,
} from "./duckdbQueries";
import { fetchMethodItemMetricsFromGeApi } from "./gePricesApi";
import { buildItemBreakdownChartData, type BreakdownSeries } from "./itemBreakdown";
import { formatGp, formatGpCompact, formatUnitCost, listBreakdownLines } from "./mmgCalc";
import { OsrsMmgChartLegend, useChartLegendVisibility, type ChartLegendItem } from "./OsrsMmgChartLegend";
import { comparePeriodKeys, formatPeriodTooltipLabel, periodXAxisProps } from "./periodFormat";
import type { BreakdownIoType, MmgGuide, PeriodGranularity } from "./types";

type Props = {
  methodId: string;
  guide: MmgGuide;
  kph: number;
};

const PERIODS: PeriodGranularity[] = ["day", "week", "month", "quarter", "year"];
const IO_TABS: { id: BreakdownIoType; label: string }[] = [
  { id: "output", label: "Output" },
  { id: "input", label: "Input" },
];

function seriesColor(index: number): string {
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
  payload?: { dataKey?: unknown; name?: unknown; value?: unknown; color?: string }[];
  label?: unknown;
  period: PeriodGranularity;
}) {
  if (!active || !payload?.length || label == null) return null;

  const entry = payload[0];
  const dataKey = String(entry.dataKey ?? "");
  const isVolume = dataKey.endsWith("__volume");
  const value = typeof entry.value === "number" ? entry.value : Number(entry.value);
  if (!Number.isFinite(value)) return null;

  return (
    <div className="osrs-mmg__chart-tooltip" style={tooltipProps.contentStyle}>
      <p className="osrs-mmg__chart-tooltip-label">
        {formatPeriodTooltipLabel(String(label), period)}
      </p>
      <p className="osrs-mmg__chart-tooltip-value" style={{ color: entry.color }}>
        {String(entry.name ?? "")}: {isVolume ? formatVolume(value) : formatGp(value)}
      </p>
    </div>
  );
}

export function OsrsMmgItemBreakdownPanel({ methodId, guide, kph }: Props) {
  const [enabled, setEnabled] = useState(false);
  const [ioType, setIoType] = useState<BreakdownIoType>("output");
  const [period, setPeriod] = useState<PeriodGranularity>("week");
  const [showVolume, setShowVolume] = useState(true);
  const [rows, setRows] = useState<Awaited<ReturnType<typeof fetchMethodItemMetrics>>>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [usingLiveGe, setUsingLiveGe] = useState(false);
  const legend = useChartLegendVisibility(`${methodId}:${ioType}:${showVolume}`);

  const lines = useMemo(
    () => listBreakdownLines(guide, kph, ioType),
    [guide, kph, ioType],
  );

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
    () => buildItemBreakdownChartData(rows, lines),
    [rows, lines],
  );

  const sortedChartData = useMemo(
    () => [...chartData].sort((a, b) => comparePeriodKeys(String(a.period), String(b.period))),
    [chartData],
  );

  const legendItems = useMemo(
    () =>
      series.flatMap((entry: BreakdownSeries, index: number) => {
        const color = seriesColor(index);
        const items: ChartLegendItem[] = [
          { key: entry.priceKey, label: `${entry.label} price`, color },
        ];
        if (showVolume) {
          items.push({
            key: entry.volumeKey,
            label: `${entry.label} volume`,
            color,
            dashed: true,
          });
        }
        return items;
      }),
    [series, showVolume],
  );

  const legendKeys = useMemo(() => legendItems.map((item) => item.key), [legendItems]);

  const hasChartData = sortedChartData.some((point) =>
    series.some((entry) => {
      const price = point[entry.priceKey];
      const volume = point[entry.volumeKey];
      return (typeof price === "number" && Number.isFinite(price))
        || (typeof volume === "number" && Number.isFinite(volume));
    }),
  );

  const tabLabel = ioType === "output" ? "output" : "input";

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
          <div className="osrs-mmg__tabs" role="tablist" aria-label="Item breakdown type">
            {IO_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === ioType}
                className={tab.id === ioType ? "osrs-mmg__tab is-active" : "osrs-mmg__tab"}
                onClick={() => setIoType(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="osrs-mmg__muted osrs-mmg__breakdown-intro">
            All {tabLabel} items at your current rate. Solid lines are GE price; dashed lines are GE volume.
            Click a legend item to hide it; double-click to isolate.
            {usingLiveGe ? (
              <>
                {" "}
                Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset.
              </>
            ) : null}
          </p>

          {lines.length === 0 ? (
            <p className="osrs-mmg__muted">No {tabLabel} items for this method.</p>
          ) : (
            <div className="osrs-mmg__breakdown-table-scroll">
              <table className="osrs-mmg__table osrs-mmg__table--compact">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Unit cost</th>
                    <th>GP/h</th>
                    <th>Qty/h</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.map((line) => (
                    <tr key={line.lineKey}>
                      <td>{line.itemName}</td>
                      <td>{formatUnitCost(line)}</td>
                      <td>{formatGp(line.gpPerHour)}</td>
                      <td>{line.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

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
                    content={({ active, payload, label }) => (
                      <BreakdownTooltip
                        active={active}
                        payload={payload}
                        label={label}
                        period={period}
                      />
                    )}
                    {...tooltipProps}
                  />
                  {series.flatMap((entry: BreakdownSeries, index: number) => {
                    const color = seriesColor(index);
                    const linesForSeries = [
                      <Line
                        key={entry.priceKey}
                        yAxisId="price"
                        type="monotone"
                        dataKey={entry.priceKey}
                        name={`${entry.label} price`}
                        stroke={color}
                        connectNulls
                        dot={false}
                        hide={legend.hiddenKeys.has(entry.priceKey)}
                        legendType="none"
                      />,
                    ];
                    if (showVolume) {
                      linesForSeries.push(
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
                          hide={legend.hiddenKeys.has(entry.volumeKey)}
                          legendType="none"
                        />,
                      );
                    }
                    return linesForSeries;
                  })}
                </ComposedChart>
              </ResponsiveContainer>
              <OsrsMmgChartLegend
                items={legendItems}
                hiddenKeys={legend.hiddenKeys}
                onToggle={legend.toggle}
                onIsolate={(key) => legend.isolate(key, legendKeys)}
                onShowAll={legend.showAll}
              />
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
