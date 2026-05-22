import { r, j as e, t as f, L as O } from "./index-CYwztDbo.js";
import { e as v, i as E, u as D, a as _, r as k, f as U, O as A, b, c as L, s as B, w as I, S as G } from "./useOsrsData-QV_MIW1W.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
function V({ onImported: s }) {
  const n = r.useRef(null);
  function c() {
    const a = v(), h = new Blob([JSON.stringify(a, null, 2)], { type: "application/json" }), l = URL.createObjectURL(h), m = document.createElement("a");
    m.href = l, m.download = "osrs-mmg-kph-backup.json", m.click(), URL.revokeObjectURL(l), f.success("KPH preferences exported");
  }
  function i() {
    var _a;
    (_a = n.current) == null ? void 0 : _a.click();
  }
  async function d(a) {
    var _a;
    const h = (_a = a.target.files) == null ? void 0 : _a[0];
    if (a.target.value = "", !!h) try {
      const l = await h.text(), m = JSON.parse(l);
      E(m), s(), f.success("KPH preferences imported");
    } catch (l) {
      f.error(l instanceof Error ? l.message : "Import failed");
    }
  }
  return e.jsxs("div", { className: "osrs-mmg__toolbar", children: [e.jsx("button", { type: "button", onClick: c, children: "Export kph" }), e.jsx("button", { type: "button", onClick: i, children: "Import kph" }), e.jsx("input", { ref: n, type: "file", accept: "application/json", hidden: true, onChange: d })] });
}
function x(s, n) {
  return s.profit_pk * n + s.profit_ph;
}
function g(s, n) {
  return [...s].sort((c, i) => {
    const d = n[c.method_id] ?? c.default_kph, a = n[i.method_id] ?? i.default_kph;
    return x(i, a) - x(c, d);
  });
}
function w() {
  return G.map((s, n) => ({ method_id: s.id, method_name: s.methodName, method_url: s.methodUrl, categories: [], intensity: "", is_members: null, default_kph: s.defaultKph, completions_unit_name: s.kphUnitName, profit_pk: s.outputTotalPk - s.inputTotalPk, profit_ph: s.outputTotalPh - s.inputTotalPh, profit_linear_approx: false, wiki_rank: n + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: s.outputTotalPk * s.defaultKph + s.outputTotalPh - (s.inputTotalPk * s.defaultKph + s.inputTotalPh) }));
}
function W() {
  const s = D(), [n, c] = r.useState([]), [i, d] = r.useState({}), [a, h] = r.useState({}), [l, m] = r.useState(0), [u, R] = r.useState(20);
  r.useEffect(() => {
    if (!_()) {
      const t = k();
      h(t), d(t), c(w());
      return;
    }
    s.ready && U().then((t) => {
      const o = k();
      c(t), h(o), d(o);
    });
  }, [s.ready, l]);
  const j = r.useMemo(() => g(n, a), [n, a]), N = r.useMemo(() => j.slice(0, u), [j, u]), y = r.useMemo(() => n.some((t) => {
    const o = i[t.method_id] ?? t.default_kph, p = a[t.method_id] ?? t.default_kph;
    return o !== p;
  }), [n, i, a]);
  function M(t, o) {
    d((p) => ({ ...p, [t]: o }));
  }
  function S() {
    const t = { ...a };
    for (const o of n) {
      const p = i[o.method_id] ?? o.default_kph;
      t[o.method_id] = p, B(o.method_id, p);
    }
    h(t), I(t);
  }
  function K() {
    const t = k();
    d(t);
  }
  const C = r.useMemo(() => g(n, a).slice(0, 10), [n, a]);
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust completions per hour, then re-rank. Click a method for the full calculator." })] }), _() ? e.jsx(A, { loading: s.loading, error: s.error, manifest: s.manifest, fromCache: s.fromCache, onReload: s.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsx(V, { onImported: () => m((t) => t + 1) }), e.jsxs("div", { className: "osrs-mmg__rerank-row", children: [e.jsxs("label", { className: "osrs-mmg__topn-field", children: ["Show top", e.jsx("input", { className: "osrs-mmg__topn-input", type: "number", min: 1, max: 500, value: u, onChange: (t) => {
    const o = Math.max(1, Math.min(500, Number(t.target.value) || 1));
    R(o);
  } })] }), e.jsx("button", { type: "button", disabled: !y, onClick: S, children: "Re-rank" }), e.jsx("button", { type: "button", onClick: K, children: "Reset draft kph" })] }), e.jsx("div", { className: "osrs-mmg__table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "#" }), e.jsx("th", { children: "Method" }), e.jsx("th", { children: "Wiki GP/h" }), e.jsx("th", { children: "Your kph" }), e.jsx("th", { children: "Adjusted GP/h" }), e.jsx("th", { children: "Members" })] }) }), e.jsx("tbody", { children: N.map((t, o) => {
    const p = i[t.method_id] ?? t.default_kph, P = x(t, p);
    return e.jsxs("tr", { children: [e.jsx("td", { children: o + 1 }), e.jsx("td", { children: e.jsx(O, { to: `/osrs-mmg/m/${t.method_id}`, children: t.method_name }) }), e.jsx("td", { children: t.wiki_hourly_profit_gp != null ? b(t.wiki_hourly_profit_gp) : "\u2014" }), e.jsxs("td", { children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: p, onChange: (T) => M(t.method_id, Number(T.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: t.completions_unit_name })] }), e.jsx("td", { children: b(P) }), e.jsx("td", { children: t.is_members ? "Yes" : t.is_members === false ? "No" : "\u2014" })] }, t.method_id);
  }) })] }) }), !_() || s.ready ? e.jsx(L, { mode: "topN", topMethods: C, topN: 10 }) : null] });
}
export {
  W as default
};
