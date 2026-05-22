export type IoLine = {
  itemName: string;
  wikiSlug: string;
  qtyPerCompletion: number;
  gpPerCompletion: number;
};

export type SkillRequirement = {
  skillKey: string;
  requirementText: string;
};

export type MmgGuide = {
  id: string;
  methodName: string;
  methodUrl: string;
  defaultKph: number;
  kphUnitName: string;
  assumptionText: string;
  inputTotalPk: number;
  inputTotalPh: number;
  outputTotalPk: number;
  outputTotalPh: number;
  inputs: IoLine[];
  outputs: IoLine[];
  skillRequirements: SkillRequirement[];
};

export type IoLineAtKph = IoLine & {
  qtyPerHour: number;
  gpPerHour: number;
};

export type MmgCalcResult = {
  kph: number;
  inputs: IoLineAtKph[];
  outputs: IoLineAtKph[];
  inputTotal: number;
  outputTotal: number;
  profit: number;
};

export type DataManifest = {
  version: string;
  generated_at: string;
  latest_snapshot_date: string | null;
  method_count: number;
  artifacts: {
    database: {
      url: string;
      bytes: number;
      sha256: string;
    };
  };
};

export type MethodRankRow = {
  method_id: string;
  method_name: string;
  method_url: string;
  categories: string[];
  intensity: string;
  is_members: boolean | null;
  default_kph: number;
  completions_unit_name: string;
  profit_pk: number;
  profit_ph: number;
  profit_linear_approx: boolean | null;
  wiki_rank: number | null;
  wiki_hourly_profit_gp: number | null;
  wiki_profit_gp: number | null;
};

export type PeriodGranularity = "day" | "week" | "month" | "quarter" | "year";

export type TrendPoint = {
  period: string;
  mean_profit: number;
  median_profit: number;
  p25: number;
  p75: number;
  item_volume: number | null;
};

export type KphPreferencesFile = {
  version: 1;
  updated_at: string;
  kph_by_method_id: Record<string, number>;
};
