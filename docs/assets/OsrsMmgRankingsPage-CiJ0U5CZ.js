import { r as d, j as e, t as u, L as S } from "./index-DBmo_afS.js";
import { e as C, i as O, u as T, a as f, r as _, f as E, O as D, b as x, c as v, s as U, w as A, S as L } from "./useOsrsData-ClTRV6-t.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
function B({ onImported: t }) {
  const n = d.useRef(null);
  function p() {
    const o = C(), h = new Blob([JSON.stringify(o, null, 2)], { type: "application/json" }), i = URL.createObjectURL(h), m = document.createElement("a");
    m.href = i, m.download = "osrs-mmg-kph-backup.json", m.click(), URL.revokeObjectURL(i), u.success("KPH preferences exported");
  }
  function a() {
    var _a;
    (_a = n.current) == null ? void 0 : _a.click();
  }
  async function c(o) {
    var _a;
    const h = (_a = o.target.files) == null ? void 0 : _a[0];
    if (o.target.value = "", !!h) try {
      const i = await h.text(), m = JSON.parse(i);
      O(m), t(), u.success("KPH preferences imported");
    } catch (i) {
      u.error(i instanceof Error ? i.message : "Import failed");
    }
  }
  return e.jsxs("div", { className: "osrs-mmg__toolbar", children: [e.jsx("button", { type: "button", onClick: p, children: "Export kph" }), e.jsx("button", { type: "button", onClick: a, children: "Import kph" }), e.jsx("input", { ref: n, type: "file", accept: "application/json", hidden: true, onChange: c })] });
}
function k(t, n) {
  return t.profit_pk * n + t.profit_ph;
}
function j(t, n) {
  return [...t].sort((p, a) => {
    const c = n[p.method_id] ?? p.default_kph, o = n[a.method_id] ?? a.default_kph;
    return k(a, o) - k(p, c);
  });
}
function I() {
  return L.map((t, n) => ({ method_id: t.id, method_name: t.methodName, method_url: t.methodUrl, categories: [], intensity: "", is_members: null, default_kph: t.defaultKph, completions_unit_name: t.kphUnitName, profit_pk: t.outputTotalPk - t.inputTotalPk, profit_ph: t.outputTotalPh - t.inputTotalPh, profit_linear_approx: false, wiki_rank: n + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: t.outputTotalPk * t.defaultKph + t.outputTotalPh - (t.inputTotalPk * t.defaultKph + t.inputTotalPh) }));
}
function J() {
  const t = T(), [n, p] = d.useState([]), [a, c] = d.useState({}), [o, h] = d.useState({}), [i, m] = d.useState(0);
  d.useEffect(() => {
    if (!f()) {
      const s = _();
      h(s), c(s), p(I());
      return;
    }
    t.ready && E().then((s) => {
      const r = _();
      p(s), h(r), c(r);
    });
  }, [t.ready, i]);
  const b = d.useMemo(() => j(n, o), [n, o]), g = d.useMemo(() => n.some((s) => {
    const r = a[s.method_id] ?? s.default_kph, l = o[s.method_id] ?? s.default_kph;
    return r !== l;
  }), [n, a, o]);
  function R(s, r) {
    c((l) => ({ ...l, [s]: r }));
  }
  function y() {
    const s = { ...o };
    for (const r of n) {
      const l = a[r.method_id] ?? r.default_kph;
      s[r.method_id] = l, U(r.method_id, l);
    }
    h(s), A(s);
  }
  function K() {
    const s = _();
    c(s);
  }
  const M = d.useMemo(() => j(n, o).slice(0, 10), [n, o]);
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust completions per hour, then re-rank. Click a method for the full calculator." })] }), f() ? e.jsx(D, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, localMode: t.localMode, onReload: t.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsx(B, { onImported: () => m((s) => s + 1) }), e.jsxs("div", { className: "osrs-mmg__rerank-row", children: [e.jsx("button", { type: "button", disabled: !g, onClick: y, children: "Re-rank" }), e.jsx("button", { type: "button", onClick: K, children: "Reset draft kph" })] }), e.jsx("div", { className: "osrs-mmg__table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "#" }), e.jsx("th", { children: "Method" }), e.jsx("th", { children: "Wiki GP/h" }), e.jsx("th", { children: "Your kph" }), e.jsx("th", { children: "Adjusted GP/h" }), e.jsx("th", { children: "Members" })] }) }), e.jsx("tbody", { children: b.map((s, r) => {
    const l = a[s.method_id] ?? s.default_kph, N = k(s, l);
    return e.jsxs("tr", { children: [e.jsx("td", { children: r + 1 }), e.jsx("td", { children: e.jsx(S, { to: `/osrs-mmg/m/${s.method_id}`, children: s.method_name }) }), e.jsx("td", { children: s.wiki_hourly_profit_gp != null ? x(s.wiki_hourly_profit_gp) : "\u2014" }), e.jsxs("td", { children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: l, onChange: (P) => R(s.method_id, Number(P.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: s.completions_unit_name })] }), e.jsx("td", { children: x(N) }), e.jsx("td", { children: s.is_members ? "Yes" : s.is_members === false ? "No" : "\u2014" })] }, s.method_id);
  }) })] }) }), !f() || t.ready ? e.jsx(v, { mode: "topN", topMethods: M, topN: 10 }) : null] });
}
export {
  J as default
};
