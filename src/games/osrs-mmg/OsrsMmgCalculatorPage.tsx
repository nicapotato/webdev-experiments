import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { isLiveDataEnabled } from "./dataConfig";
import { fetchGuide } from "./duckdbQueries";
import { getUserKph, setUserKph } from "./kphPreferences";
import { calcAtKph, formatGp, formatQty } from "./mmgCalc";
import { OsrsMmgDataBanner } from "./OsrsMmgDataBanner";
import { OsrsMmgTrendsPanel } from "./OsrsMmgTrendsPanel";
import { SAMPLE_GUIDES } from "./sampleGuides";
import type { MmgGuide } from "./types";
import { useOsrsData } from "./useOsrsData";

function LineTable({
  title,
  lines,
}: {
  title: string;
  lines: ReturnType<typeof calcAtKph>["inputs"];
}) {
  return (
    <section className="osrs-mmg__panel">
      <h3>{title}</h3>
      <table className="osrs-mmg__table">
        <thead>
          <tr>
            <th>Qty/h</th>
            <th>Item</th>
            <th>GP/h</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.wikiSlug}>
              <td>{formatQty(line.qtyPerHour)} ×</td>
              <td>{line.itemName}</td>
              <td>{formatGp(line.gpPerHour)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function OsrsMmgCalculatorPage() {
  const { methodId } = useParams<{ methodId: string }>();
  const data = useOsrsData();
  const [guide, setGuide] = useState<MmgGuide | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!methodId) return;
    if (!isLiveDataEnabled()) {
      const sample = SAMPLE_GUIDES.find((g) => g.id === methodId) ?? SAMPLE_GUIDES[0] ?? null;
      setGuide(sample);
      return;
    }
    if (!data.ready) return;
    void fetchGuide(methodId)
      .then((loaded) => {
        if (!loaded) throw new Error("Guide not found in dataset");
        setGuide(loaded);
        setLoadError(null);
      })
      .catch((err) => setLoadError(err instanceof Error ? err.message : String(err)));
  }, [methodId, data.ready]);

  const activeGuide = guide;
  const [kph, setKph] = useState(1);

  useEffect(() => {
    if (!activeGuide) return;
    setKph(getUserKph(activeGuide.id, activeGuide.defaultKph));
  }, [activeGuide]);

  const result = useMemo(
    () => (activeGuide ? calcAtKph(activeGuide, kph) : null),
    [activeGuide, kph],
  );

  function onKphChange(next: number) {
    if (!activeGuide || !Number.isFinite(next) || next < 0) return;
    setKph(next);
    setUserKph(activeGuide.id, next);
  }

  function onResetKph() {
    if (!activeGuide) return;
    setKph(activeGuide.defaultKph);
    setUserKph(activeGuide.id, activeGuide.defaultKph);
  }

  if (isLiveDataEnabled() && data.loading) {
    return <div className="osrs-mmg"><p>Loading data…</p></div>;
  }

  if (loadError) {
    return (
      <div className="osrs-mmg">
        <p className="osrs-mmg__banner osrs-mmg__banner--error">{loadError}</p>
        <Link to="/osrs-mmg">Back to rankings</Link>
      </div>
    );
  }

  if (!activeGuide || !result) {
    return <div className="osrs-mmg"><p>Loading guide…</p></div>;
  }

  return (
    <div className="osrs-mmg">
      <header className="osrs-mmg__header">
        <p><Link to="/osrs-mmg">← Rankings</Link></p>
        <h1>{activeGuide.methodName}</h1>
        <p>Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget.</p>
      </header>

      {isLiveDataEnabled() ? (
        <OsrsMmgDataBanner
          loading={data.loading}
          error={data.error}
          manifest={data.manifest}
          fromCache={data.fromCache}
          localMode={data.localMode}
          onReload={data.reload}
        />
      ) : null}

      <div className="osrs-mmg__kph-row">
        <label className="osrs-mmg__field">
          {activeGuide.kphUnitName}
          <input
            type="number"
            min={0}
            step="any"
            value={kph}
            onChange={(event) => onKphChange(Number(event.target.value))}
          />
        </label>
        <button type="button" onClick={onResetKph}>
          Reset
        </button>
      </div>

      <section className="osrs-mmg__summary">
        <div>
          <span>Profit</span>
          <strong>{formatGp(result.profit)}</strong>
        </div>
        <div>
          <span>Inputs</span>
          <strong>{formatGp(result.inputTotal)}</strong>
        </div>
        <div>
          <span>Outputs</span>
          <strong>{formatGp(result.outputTotal)}</strong>
        </div>
      </section>

      <div className="osrs-mmg__columns">
        <LineTable title="Inputs" lines={result.inputs} />
        <LineTable title="Outputs" lines={result.outputs} />
      </div>

      {activeGuide.assumptionText ? (
        <p className="osrs-mmg__assumption">{activeGuide.assumptionText}</p>
      ) : null}

      {(isLiveDataEnabled() ? data.ready : false) ? (
        <OsrsMmgTrendsPanel mode="single" methodId={activeGuide.id} methodName={activeGuide.methodName} />
      ) : null}
    </div>
  );
}
