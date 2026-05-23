import { useEffect, useRef, useState } from "react";

import { skillIconUrl } from "./skillIconUrl";
import {
  EMPTY_RANKINGS_FILTERS,
  OSRS_SKILL_KEYS,
  rankingsFiltersActive,
  type RankingsFilters,
} from "./rankingsFilters";

type Props = {
  filters: RankingsFilters;
  methodTypeOptions: string[];
  intensityOptions: string[];
  onChange: (filters: RankingsFilters) => void;
};

function toggleValue(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function OsrsMmgRankingsFilter({
  filters,
  methodTypeOptions,
  intensityOptions,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = rankingsFiltersActive(filters);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  function setSkillLevel(skillKey: string, value: number) {
    const nextLevels = { ...filters.skillLevels };
    if (!Number.isFinite(value) || value <= 0) {
      delete nextLevels[skillKey];
    } else {
      nextLevels[skillKey] = Math.min(99, Math.max(1, Math.floor(value)));
    }
    onChange({ ...filters, skillLevels: nextLevels });
  }

  return (
    <div className="osrs-mmg__filter-menu" ref={rootRef}>
      <button
        type="button"
        className={active ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Filter{active ? " •" : ""}
      </button>

      {open ? (
        <div className="osrs-mmg__filter-popout">
          <div className="osrs-mmg__filter-section">
            <h3>Method type</h3>
            <div className="osrs-mmg__filter-checks">
              {methodTypeOptions.map((option) => (
                <label key={option} className="osrs-mmg__filter-check">
                  <input
                    type="checkbox"
                    checked={filters.methodTypes.includes(option)}
                    onChange={() =>
                      onChange({
                        ...filters,
                        methodTypes: toggleValue(filters.methodTypes, option),
                      })
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="osrs-mmg__filter-section">
            <h3>Intensity</h3>
            <div className="osrs-mmg__filter-checks">
              {intensityOptions.map((option) => (
                <label key={option} className="osrs-mmg__filter-check">
                  <input
                    type="checkbox"
                    checked={filters.intensities.includes(option)}
                    onChange={() =>
                      onChange({
                        ...filters,
                        intensities: toggleValue(filters.intensities, option),
                      })
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="osrs-mmg__filter-section">
            <h3>Your skill levels</h3>
            <p className="osrs-mmg__filter-hint">
              Methods must meet every listed requirement at or below your level.
            </p>
            <div className="osrs-mmg__filter-skills-scroll">
              <table className="osrs-mmg__table osrs-mmg__filter-skills-table">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {OSRS_SKILL_KEYS.map((skillKey) => (
                    <tr key={skillKey}>
                      <td>
                        <span className="osrs-mmg__filter-skill-name">
                          <img src={skillIconUrl(skillKey)} alt="" width={20} height={20} />
                          {skillKey}
                        </span>
                      </td>
                      <td>
                        <input
                          className="osrs-mmg__filter-level-input"
                          type="number"
                          min={1}
                          max={99}
                          placeholder="—"
                          value={filters.skillLevels[skillKey] ?? ""}
                          onChange={(e) => {
                            const raw = e.target.value.trim();
                            setSkillLevel(skillKey, raw === "" ? 0 : Number(raw));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="osrs-mmg__filter-actions">
            <button
              type="button"
              className="osrs-mmg__btn osrs-mmg__btn--ghost"
              disabled={!active}
              onClick={() => onChange(EMPTY_RANKINGS_FILTERS)}
            >
              Clear filters
            </button>
            <button type="button" className="osrs-mmg__btn" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
