import { normalizeMethodCategories } from "./rankMethods";
import { toIsoDate } from "./periodFormat";
import { queryRows } from "./duckdbClient";
import type {
  BreakdownIoType,
  MethodItemMetricRow,
  MethodRankRow,
  MmgGuide,
  PeriodGranularity,
  SkillRequirement,
  TrendPoint,
} from "./types";

const PERIOD_SQL: Record<PeriodGranularity, string> = {
  day: "day",
  week: "week",
  month: "month",
  quarter: "quarter",
  year: "year",
};

export type TrendDateRange = {
  from: string;
  to: string;
};

function escapeSqlString(value: string): string {
  return value.replace(/'/g, "''");
}

function snapshotDateRangeClause(alias: string, range?: TrendDateRange): string {
  if (!range?.from || !range?.to) return "";
  const from = escapeSqlString(range.from);
  const to = escapeSqlString(range.to);
  return `
    AND ${alias}.scrape_timestamp >= TIMESTAMP '${from}'
    AND ${alias}.scrape_timestamp < TIMESTAMP '${to}' + INTERVAL 1 DAY
  `;
}

export async function fetchTrendDateBounds(methodIds?: string[]): Promise<{ min: string; max: string } | null> {
  const methodFilter =
    methodIds?.length ?
      `WHERE method_id IN (${methodIds.map((id) => `'${escapeSqlString(id)}'`).join(", ")})`
    : "";

  const rows = await queryRows<{ min_date: Date | string | null; max_date: Date | string | null }>(`
    SELECT
      min(scrape_timestamp)::DATE AS min_date,
      max(scrape_timestamp)::DATE AS max_date
    FROM snapshots
    ${methodFilter}
  `);

  const row = rows[0];
  if (!row?.min_date || !row?.max_date) return null;

  return {
    min: toIsoDate(row.min_date),
    max: toIsoDate(row.max_date),
  };
}

export async function fetchMethodRankings(): Promise<MethodRankRow[]> {
  const rows = await queryRows<Omit<MethodRankRow, "categories"> & { categories: unknown }>(`
    SELECT
      method_id,
      method_name,
      method_url,
      categories,
      intensity,
      is_members,
      default_kph,
      completions_unit_name,
      profit_pk,
      profit_ph,
      profit_linear_approx,
      wiki_rank,
      wiki_hourly_profit_gp,
      wiki_profit_gp
    FROM method_rankings
    ORDER BY wiki_rank NULLS LAST
  `);

  return rows.map((row) => ({
    ...row,
    categories: normalizeMethodCategories(row.categories),
  }));
}

export async function fetchMethodSkillsMap(): Promise<Record<string, SkillRequirement[]>> {
  const rows = await queryRows<{
    method_id: string;
    skill_key: string;
    requirement_text: string | null;
  }>(
    `SELECT method_id, skill_key, requirement_text
     FROM method_skills
     ORDER BY method_id, skill_key`,
  );

  const map: Record<string, SkillRequirement[]> = {};
  for (const row of rows) {
    const list = map[row.method_id] ?? [];
    list.push({
      skillKey: row.skill_key,
      requirementText: row.requirement_text ?? null,
    });
    map[row.method_id] = list;
  }
  return map;
}

export async function fetchGuide(methodId: string): Promise<MmgGuide | null> {
  const safeId = methodId.replace(/'/g, "''");
  const economics = await queryRows<{
    method_id: string;
    method_name: string;
    method_url: string;
    default_kph: number | null;
    completions_unit_name: string;
    assumption_text: string;
    input_total_pk: number | null;
    input_total_ph: number;
    output_total_pk: number | null;
    output_total_ph: number;
  }>(
    `SELECT * FROM guide_economics WHERE method_id = '${safeId}' LIMIT 1`,
  );
  if (!economics.length) return null;
  const row = economics[0];

  const lines = await queryRows<{
    io_type: string;
    wiki_slug: string;
    item_name: string;
    qty_per_completion: number;
    gp_per_completion: number | null;
  }>(
    `SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${safeId}'`,
  );

  const skills = await queryRows<{
    skill_key: string;
    requirement_text: string | null;
  }>(
    `SELECT skill_key, requirement_text
     FROM method_skills
     WHERE method_id = '${safeId}'
     ORDER BY skill_key`,
  );

  const mapLine = (line: (typeof lines)[number]) => ({
    itemName: line.item_name,
    wikiSlug: line.wiki_slug,
    qtyPerCompletion: line.qty_per_completion,
    gpPerCompletion: line.gp_per_completion ?? 0,
  });

  return {
    id: row.method_id,
    methodName: row.method_name,
    methodUrl: row.method_url,
    defaultKph: row.default_kph ?? 1,
    kphUnitName: row.completions_unit_name || "Completions per hour",
    assumptionText: row.assumption_text ?? "",
    inputTotalPk: row.input_total_pk ?? 0,
    inputTotalPh: row.input_total_ph ?? 0,
    outputTotalPk: row.output_total_pk ?? 0,
    outputTotalPh: row.output_total_ph ?? 0,
    inputs: lines.filter((l) => l.io_type === "input").map(mapLine),
    outputs: lines.filter((l) => l.io_type === "output").map(mapLine),
    skillRequirements: skills.map((skill) => ({
      skillKey: skill.skill_key,
      requirementText: skill.requirement_text ?? null,
    })),
  };
}

export async function fetchTrendSeries(
  methodId: string,
  period: PeriodGranularity,
  dateRange?: TrendDateRange,
): Promise<TrendPoint[]> {
  const trunc = PERIOD_SQL[period];
  const safeId = escapeSqlString(methodId);
  const dateFilter = snapshotDateRangeClause("snapshots", dateRange);
  const rows = await queryRows<{
    period: Date | string;
    mean_profit: number;
    median_profit: number;
    p25: number;
    p75: number;
  }>(
    `
    SELECT
      date_trunc('${trunc}', scrape_timestamp) AS period,
      avg(hourly_profit_gp) AS mean_profit,
      median(hourly_profit_gp) AS median_profit,
      quantile_cont(hourly_profit_gp, 0.25) AS p25,
      quantile_cont(hourly_profit_gp, 0.75) AS p75
    FROM snapshots
    WHERE method_id = '${safeId}' AND hourly_profit_gp IS NOT NULL
    ${dateFilter}
    GROUP BY 1
    ORDER BY 1
    `,
  );

  const volumeRows = await queryRows<{ period: Date | string; item_volume: number }>(
    `
    SELECT date_trunc('${trunc}', s.scrape_timestamp) AS period,
           sum(pm.value) AS item_volume
    FROM snapshots s
    JOIN io_lines io ON io.method_id = s.method_id
    JOIN price_metrics pm ON pm.item_id = io.item_id
      AND pm.metric = 'volume'
      AND date_trunc('day', pm.scrape_timestamp) = date_trunc('day', s.scrape_timestamp)
    WHERE s.method_id = '${safeId}'
    ${snapshotDateRangeClause("s", dateRange)}
    GROUP BY 1
    ORDER BY 1
    `,
  );

  const volumeByPeriod = new Map(
    volumeRows.map((r) => [toIsoDate(r.period), r.item_volume ?? 0]),
  );

  return rows.map((row) => {
    const periodKey = toIsoDate(row.period);
    return {
      period: periodKey,
      mean_profit: row.mean_profit ?? 0,
      median_profit: row.median_profit ?? 0,
      p25: row.p25 ?? 0,
      p75: row.p75 ?? 0,
      item_volume: volumeByPeriod.get(periodKey) ?? null,
    };
  });
}

export async function fetchTopNComparison(
  methodIds: string[],
  period: PeriodGranularity,
  dateRange?: TrendDateRange,
): Promise<{ method_id: string; method_name: string; period: string; profit: number }[]> {
  if (!methodIds.length) return [];
  const trunc = PERIOD_SQL[period];
  const safeIds = methodIds.map((id) => `'${escapeSqlString(id)}'`).join(", ");
  const dateFilter = snapshotDateRangeClause("s", dateRange);
  const rows = await queryRows<{
    method_id: string;
    method_name: string;
    period: Date | string;
    profit: number;
  }>(
    `
    SELECT s.method_id, m.method_name,
           date_trunc('${trunc}', s.scrape_timestamp) AS period,
           avg(s.hourly_profit_gp) AS profit
    FROM snapshots s
    JOIN methods m ON m.method_id = s.method_id
    WHERE s.method_id IN (${safeIds}) AND s.hourly_profit_gp IS NOT NULL
    ${dateFilter}
    GROUP BY 1, 2, 3
    ORDER BY 3, 4 DESC
    `,
  );

  return rows.map((row) => ({
    method_id: row.method_id,
    method_name: row.method_name,
    period: toIsoDate(row.period),
    profit: row.profit ?? 0,
  }));
}

export async function fetchMethodItemMetrics(
  methodId: string,
  period: PeriodGranularity,
  dateRange?: TrendDateRange,
): Promise<MethodItemMetricRow[]> {
  const trunc = PERIOD_SQL[period];
  const safeId = escapeSqlString(methodId);
  const dateFilter = snapshotDateRangeClause("pm", dateRange);
  const rows = await queryRows<{
    period: Date | string;
    wiki_slug: string;
    io_type: string;
    item_name: string;
    qty_per_completion: number;
    price: number | null;
    volume: number | null;
  }>(
    `
    SELECT
      date_trunc('${trunc}', pm.scrape_timestamp) AS period,
      io.wiki_slug,
      io.io_type,
      io.item_name,
      io.qty_per_completion,
      max(CASE WHEN pm.metric = 'price' THEN pm.value END) AS price,
      max(CASE WHEN pm.metric = 'volume' THEN pm.value END) AS volume
    FROM io_lines io
    JOIN price_metrics pm ON pm.item_id = io.item_id
    WHERE io.method_id = '${safeId}'
      AND io.item_id IS NOT NULL
      AND pm.metric IN ('price', 'volume')
      ${dateFilter}
    GROUP BY 1, 2, 3, 4, 5
    ORDER BY 1, 4
    `,
  );

  return rows.map((row) => ({
    period: toIsoDate(row.period),
    wikiSlug: row.wiki_slug,
    ioType: row.io_type as BreakdownIoType,
    itemName: row.item_name,
    qtyPerCompletion: row.qty_per_completion,
    price: row.price,
    volume: row.volume,
  }));
}
