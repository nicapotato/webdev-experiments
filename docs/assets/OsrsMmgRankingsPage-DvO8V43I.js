import { r as i, j as e, t as f, L as D } from "./index-9ArLGCF2.js";
import { e as U, i as A, u as L, a as _, r as k, f as B, b as I, O as G, c as V, d as g, g as w, s as F, w as H, S as R } from "./useOsrsData-BUZnjBGW.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
function J({ onImported: s }) {
  const n = i.useRef(null);
  function d() {
    const o = U(), h = new Blob([JSON.stringify(o, null, 2)], { type: "application/json" }), c = URL.createObjectURL(h), m = document.createElement("a");
    m.href = c, m.download = "osrs-mmg-kph-backup.json", m.click(), URL.revokeObjectURL(c), f.success("KPH preferences exported");
  }
  function l() {
    var _a;
    (_a = n.current) == null ? void 0 : _a.click();
  }
  async function p(o) {
    var _a;
    const h = (_a = o.target.files) == null ? void 0 : _a[0];
    if (o.target.value = "", !!h) try {
      const c = await h.text(), m = JSON.parse(c);
      A(m), s(), f.success("KPH preferences imported");
    } catch (c) {
      f.error(c instanceof Error ? c.message : "Import failed");
    }
  }
  return e.jsxs("div", { className: "osrs-mmg__toolbar", children: [e.jsx("button", { type: "button", onClick: d, children: "Export kph" }), e.jsx("button", { type: "button", onClick: l, children: "Import kph" }), e.jsx("input", { ref: n, type: "file", accept: "application/json", hidden: true, onChange: p })] });
}
function x(s, n) {
  return s.profit_pk * n + s.profit_ph;
}
function M(s, n) {
  return [...s].sort((d, l) => {
    const p = n[d.method_id] ?? d.default_kph, o = n[l.method_id] ?? l.default_kph;
    return x(l, o) - x(d, p);
  });
}
function Y() {
  return Object.fromEntries(R.map((s) => [s.id, s.skillRequirements]));
}
function q() {
  return R.map((s, n) => ({ method_id: s.id, method_name: s.methodName, method_url: s.methodUrl, categories: [], intensity: "", is_members: null, default_kph: s.defaultKph, completions_unit_name: s.kphUnitName, profit_pk: s.outputTotalPk - s.inputTotalPk, profit_ph: s.outputTotalPh - s.inputTotalPh, profit_linear_approx: false, wiki_rank: n + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: s.outputTotalPk * s.defaultKph + s.outputTotalPh - (s.inputTotalPk * s.defaultKph + s.inputTotalPh) }));
}
function X() {
  const s = L(), [n, d] = i.useState([]), [l, p] = i.useState({}), [o, h] = i.useState({}), [c, m] = i.useState(0), [u, S] = i.useState(20), [y, j] = i.useState({});
  i.useEffect(() => {
    if (!_()) {
      const t = k();
      h(t), p(t), d(q()), j(Y());
      return;
    }
    s.ready && Promise.all([B(), I()]).then(([t, a]) => {
      const r = k();
      d(t), j(a), h(r), p(r);
    });
  }, [s.ready, c]);
  const b = i.useMemo(() => M(n, o), [n, o]), N = i.useMemo(() => b.slice(0, u), [b, u]), K = i.useMemo(() => n.some((t) => {
    const a = l[t.method_id] ?? t.default_kph, r = o[t.method_id] ?? t.default_kph;
    return a !== r;
  }), [n, l, o]);
  function P(t, a) {
    p((r) => ({ ...r, [t]: a }));
  }
  function C() {
    const t = { ...o };
    for (const a of n) {
      const r = l[a.method_id] ?? a.default_kph;
      t[a.method_id] = r, F(a.method_id, r);
    }
    h(t), H(t);
  }
  function O() {
    const t = k();
    p(t);
  }
  const T = i.useMemo(() => M(n, o).slice(0, 10), [n, o]);
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust completions per hour, then re-rank. Click a method for the full calculator." })] }), _() ? e.jsx(G, { loading: s.loading, error: s.error, manifest: s.manifest, fromCache: s.fromCache, onReload: s.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsx(J, { onImported: () => m((t) => t + 1) }), e.jsxs("div", { className: "osrs-mmg__rerank-row", children: [e.jsxs("label", { className: "osrs-mmg__topn-field", children: ["Show top", e.jsx("input", { className: "osrs-mmg__topn-input", type: "number", min: 1, max: 500, value: u, onChange: (t) => {
    const a = Math.max(1, Math.min(500, Number(t.target.value) || 1));
    S(a);
  } })] }), e.jsx("button", { type: "button", disabled: !K, onClick: C, children: "Re-rank" }), e.jsx("button", { type: "button", onClick: O, children: "Reset draft kph" })] }), e.jsx("div", { className: "osrs-mmg__table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "#" }), e.jsx("th", { children: "Method" }), e.jsx("th", { children: "Skills" }), e.jsx("th", { children: "Wiki GP/h" }), e.jsx("th", { children: "Your kph" }), e.jsx("th", { children: "Adjusted GP/h" }), e.jsx("th", { children: "Members" })] }) }), e.jsx("tbody", { children: N.map((t, a) => {
    const r = l[t.method_id] ?? t.default_kph, E = x(t, r);
    return e.jsxs("tr", { children: [e.jsx("td", { children: a + 1 }), e.jsx("td", { children: e.jsx(D, { to: `/osrs-mmg/m/${t.method_id}`, children: t.method_name }) }), e.jsx("td", { children: e.jsx(V, { skills: y[t.method_id] ?? [], compact: true }) }), e.jsx("td", { children: t.wiki_hourly_profit_gp != null ? g(t.wiki_hourly_profit_gp) : "\u2014" }), e.jsxs("td", { children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: r, onChange: (v) => P(t.method_id, Number(v.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: t.completions_unit_name })] }), e.jsx("td", { children: g(E) }), e.jsx("td", { children: t.is_members ? "Yes" : t.is_members === false ? "No" : "\u2014" })] }, t.method_id);
  }) })] }) }), !_() || s.ready ? e.jsx(w, { mode: "topN", topMethods: T, topN: 10 }) : null] });
}
export {
  X as default
};
