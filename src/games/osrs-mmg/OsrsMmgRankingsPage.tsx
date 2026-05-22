import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { isLiveDataEnabled } from "./dataConfig";
import { fetchMethodRankings } from "./duckdbQueries";
import { readKphMap, setUserKph, writeKphMap } from "./kphPreferences";
import { formatGp } from "./mmgCalc";
import { OsrsMmgDataBanner } from "./OsrsMmgDataBanner";
import { OsrsMmgKphToolbar } from "./OsrsMmgKphToolbar";
import { OsrsMmgTrendsPanel } from "./OsrsMmgTrendsPanel";
import { profitAtKph, rankMethods } from "./rankMethods";
import { SAMPLE_GUIDES } from "./sampleGuides";
import type { MethodRankRow } from "./types";
import { useOsrsData } from "./useOsrsData";

function sampleToRankRows(): MethodRankRow[] {
  return SAMPLE_GUIDES.map((g, i) => ({
    method_id: g.id,
    method_name: g.methodName,
    method_url: g.methodUrl,
    categories: [],
    intensity: "",
    is_members: null,
    default_kph: g.defaultKph,
    completions_unit_name: g.kphUnitName,
    profit_pk: (g.outputTotalPk - g.inputTotalPk),
    profit_ph: g.outputTotalPh - g.inputTotalPh,
    profit_linear_approx: false,
    wiki_rank: i + 1,
    wiki_hourly_profit_gp: null,
    wiki_profit_gp: g.outputTotalPk * g.defaultKph + g.outputTotalPh - (g.inputTotalPk * g.defaultKph + g.inputTotalPh),
  }));
}

export default function OsrsMmgRankingsPage() {
  const data = useOsrsData();
  const [rows, setRows] = useState<MethodRankRow[]>([]);
  const [draftKph, setDraftKph] = useState<Record<string, number>>({});
  const [appliedKph, setAppliedKph] = useState<Record<string, number>>({});
  const [prefsVersion, setPrefsVersion] = useState(0);
  const [showTopN, setShowTopN] = useState(20);

  useEffect(() => {
    if (!isLiveDataEnabled()) {
      const map = readKphMap();
      setAppliedKph(map);
      setDraftKph(map);
      setRows(sampleToRankRows());
      return;
    }
    if (!data.ready) return;
    void fetchMethodRankings().then((loaded) => {
      const map = readKphMap();
      setRows(loaded);
      setAppliedKph(map);
      setDraftKph(map);
    });
  }, [data.ready, prefsVersion]);

  const ranked = useMemo(() => rankMethods(rows, appliedKph), [rows, appliedKph]);
  const visibleRanked = useMemo(() => ranked.slice(0, showTopN), [ranked, showTopN]);

  const hasDraftChanges = useMemo(() => {
    return rows.some((row) => {
      const draft = draftKph[row.method_id] ?? row.default_kph;
      const applied = appliedKph[row.method_id] ?? row.default_kph;
      return draft !== applied;
    });
  }, [rows, draftKph, appliedKph]);

  function onDraftKphChange(methodId: string, value: number) {
    setDraftKph((prev) => ({ ...prev, [methodId]: value }));
  }

  function onReRank() {
    const next = { ...appliedKph };
    for (const row of rows) {
      const draft = draftKph[row.method_id] ?? row.default_kph;
      next[row.method_id] = draft;
      setUserKph(row.method_id, draft);
    }
    setAppliedKph(next);
    writeKphMap(next);
  }

  function onResetDraft() {
    const map = readKphMap();
    setDraftKph(map);
  }

  const topForChart = useMemo(() => rankMethods(rows, appliedKph).slice(0, 10), [rows, appliedKph]);

  return (
    <div className="osrs-mmg">
      <header className="osrs-mmg__header">
        <h1>OSRS Money Maker Rankings</h1>
        <p>Adjust completions per hour, then re-rank. Click a method for the full calculator.</p>
      </header>

      {isLiveDataEnabled() ? (
        <OsrsMmgDataBanner
          loading={data.loading}
          error={data.error}
          manifest={data.manifest}
          fromCache={data.fromCache}
          onReload={data.reload}
        />
      ) : (
        <p className="osrs-mmg__banner">
          Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)
        </p>
      )}

      <OsrsMmgKphToolbar onImported={() => setPrefsVersion((n) => n + 1)} />

      <div className="osrs-mmg__rerank-row">
        <label className="osrs-mmg__topn-field">
          Show top
          <input
            className="osrs-mmg__topn-input"
            type="number"
            min={1}
            max={500}
            value={showTopN}
            onChange={(e) => {
              const next = Math.max(1, Math.min(500, Number(e.target.value) || 1));
              setShowTopN(next);
            }}
          />
        </label>
        <button type="button" disabled={!hasDraftChanges} onClick={onReRank}>
          Re-rank
        </button>
        <button type="button" onClick={onResetDraft}>
          Reset draft kph
        </button>
      </div>

      <div className="osrs-mmg__table-scroll">
        <table className="osrs-mmg__table osrs-mmg__table--rankings">
          <thead>
            <tr>
              <th>#</th>
              <th>Method</th>
              <th>Wiki GP/h</th>
              <th>Your kph</th>
              <th>Adjusted GP/h</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {visibleRanked.map((row, index) => {
              const kph = draftKph[row.method_id] ?? row.default_kph;
              const adjusted = profitAtKph(row, kph);
              return (
                <tr key={row.method_id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/osrs-mmg/m/${row.method_id}`}>{row.method_name}</Link>
                  </td>
                  <td>{row.wiki_hourly_profit_gp != null ? formatGp(row.wiki_hourly_profit_gp) : "—"}</td>
                  <td>
                    <input
                      className="osrs-mmg__kph-input"
                      type="number"
                      min={0}
                      step="any"
                      value={kph}
                      onChange={(e) => onDraftKphChange(row.method_id, Number(e.target.value))}
                    />
                    <span className="osrs-mmg__kph-unit">{row.completions_unit_name}</span>
                  </td>
                  <td>{formatGp(adjusted)}</td>
                  <td>{row.is_members ? "Yes" : row.is_members === false ? "No" : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {(isLiveDataEnabled() ? data.ready : true) ? (
        <OsrsMmgTrendsPanel mode="topN" topMethods={topForChart} topN={10} />
      ) : null}
    </div>
  );
}
