import { parseRequirementLevel } from "./skillLevels";
import type { MethodRankRow, SkillRequirement } from "./types";

export const OSRS_SKILL_KEYS = [
  "Attack",
  "Strength",
  "Defence",
  "Ranged",
  "Prayer",
  "Magic",
  "Runecraft",
  "Construction",
  "Hitpoints",
  "Agility",
  "Herblore",
  "Thieving",
  "Crafting",
  "Fletching",
  "Slayer",
  "Hunter",
  "Mining",
  "Smithing",
  "Fishing",
  "Cooking",
  "Firemaking",
  "Woodcutting",
  "Farming",
  "Sailing",
] as const;

export type RankingsFilters = {
  skillLevels: Record<string, number>;
  methodTypes: string[];
  intensities: string[];
};

export const EMPTY_RANKINGS_FILTERS: RankingsFilters = {
  skillLevels: {},
  methodTypes: [],
  intensities: [],
};

export function methodPrimaryType(row: MethodRankRow): string {
  return row.categories[0]?.trim() ?? "";
}

export function rankingsFiltersActive(filters: RankingsFilters): boolean {
  if (filters.methodTypes.length > 0 || filters.intensities.length > 0) return true;
  return Object.values(filters.skillLevels).some((level) => level > 0);
}

export function methodMeetsSkillLevels(
  skills: SkillRequirement[],
  skillLevels: Record<string, number>,
): boolean {
  const hasAnyLevel = Object.values(skillLevels).some((level) => level > 0);
  if (!hasAnyLevel) return true;

  for (const req of skills) {
    const required = parseRequirementLevel(req.requirementText);
    if (required <= 0) continue;
    const userLevel = skillLevels[req.skillKey] ?? 0;
    if (userLevel < required) return false;
  }
  return true;
}

export function methodMatchesRankingsFilters(
  row: MethodRankRow,
  skills: SkillRequirement[],
  filters: RankingsFilters,
): boolean {
  if (filters.methodTypes.length > 0) {
    const primaryType = methodPrimaryType(row);
    if (!primaryType || !filters.methodTypes.includes(primaryType)) return false;
  }

  if (filters.intensities.length > 0) {
    const intensity = row.intensity.trim();
    if (!intensity || !filters.intensities.includes(intensity)) return false;
  }

  return methodMeetsSkillLevels(skills, filters.skillLevels);
}

export function normalizeRankingsFilters(raw: unknown): RankingsFilters {
  if (!raw || typeof raw !== "object") return EMPTY_RANKINGS_FILTERS;
  const value = raw as Partial<RankingsFilters>;
  const skillLevels: Record<string, number> = {};
  if (value.skillLevels && typeof value.skillLevels === "object") {
    for (const [key, level] of Object.entries(value.skillLevels)) {
      const parsed = Number(level);
      if (Number.isFinite(parsed) && parsed > 0) {
        skillLevels[key] = Math.min(99, Math.floor(parsed));
      }
    }
  }
  return {
    skillLevels,
    methodTypes: Array.isArray(value.methodTypes) ? value.methodTypes.map(String) : [],
    intensities: Array.isArray(value.intensities) ? value.intensities.map(String) : [],
  };
}

export function rankingsFiltersEqual(a: RankingsFilters, b: RankingsFilters): boolean {
  if (a.methodTypes.slice().sort().join("\0") !== b.methodTypes.slice().sort().join("\0")) {
    return false;
  }
  if (a.intensities.slice().sort().join("\0") !== b.intensities.slice().sort().join("\0")) {
    return false;
  }
  const keys = new Set([...Object.keys(a.skillLevels), ...Object.keys(b.skillLevels)]);
  for (const key of keys) {
    if ((a.skillLevels[key] ?? null) !== (b.skillLevels[key] ?? null)) return false;
  }
  return true;
}

export function collectFilterOptions(rows: MethodRankRow[]): {
  methodTypes: string[];
  intensities: string[];
} {
  const methodTypes = new Set<string>();
  const intensities = new Set<string>();

  for (const row of rows) {
    const primaryType = methodPrimaryType(row);
    if (primaryType) methodTypes.add(primaryType);
    const intensity = row.intensity.trim();
    if (intensity) intensities.add(intensity);
  }

  return {
    methodTypes: [...methodTypes].sort(),
    intensities: [...intensities].sort(),
  };
}
