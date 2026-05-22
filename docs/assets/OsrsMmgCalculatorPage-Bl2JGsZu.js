import { j as s, u as v, r as l, L as x } from "./index-9ArLGCF2.js";
import { c as b, u as S, a as o, S as g, h as y, j as E, k as O, O as K, d as m, g as L, s as p, l as P } from "./useOsrsData-BUZnjBGW.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
function R({ skills: t }) {
  return t.length === 0 ? null : s.jsxs("section", { className: "osrs-mmg__skills", children: [s.jsx("h3", { children: "Skill requirements" }), s.jsx(b, { skills: t })] });
}
function f({ title: t, lines: n }) {
  return s.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [s.jsx("h3", { children: t }), s.jsxs("table", { className: "osrs-mmg__table", children: [s.jsx("thead", { children: s.jsxs("tr", { children: [s.jsx("th", { children: "Qty/h" }), s.jsx("th", { children: "Item" }), s.jsx("th", { children: "GP/h" })] }) }), s.jsx("tbody", { children: n.map((a) => s.jsxs("tr", { children: [s.jsxs("td", { children: [P(a.qtyPerHour), " \xD7"] }), s.jsx("td", { children: a.itemName }), s.jsx("td", { children: m(a.gpPerHour) })] }, a.wikiSlug)) })] })] });
}
function T() {
  const { methodId: t } = v(), n = S(), [a, u] = l.useState(null), [h, j] = l.useState(null);
  l.useEffect(() => {
    if (t) {
      if (!o()) {
        const r = g.find((k) => k.id === t) ?? g[0] ?? null;
        u(r);
        return;
      }
      n.ready && y(t).then((r) => {
        if (!r) throw new Error("Guide not found in dataset");
        u(r), j(null);
      }).catch((r) => j(r instanceof Error ? r.message : String(r)));
    }
  }, [t, n.ready]);
  const e = a, [d, c] = l.useState(1);
  l.useEffect(() => {
    e && c(E(e.id, e.defaultKph));
  }, [e]);
  const i = l.useMemo(() => e ? O(e, d) : null, [e, d]);
  function _(r) {
    !e || !Number.isFinite(r) || r < 0 || (c(r), p(e.id, r));
  }
  function N() {
    e && (c(e.defaultKph), p(e.id, e.defaultKph));
  }
  return o() && n.loading ? s.jsx("div", { className: "osrs-mmg", children: s.jsx("p", { children: "Loading data\u2026" }) }) : h ? s.jsxs("div", { className: "osrs-mmg", children: [s.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: h }), s.jsx(x, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !e || !i ? s.jsx("div", { className: "osrs-mmg", children: s.jsx("p", { children: "Loading guide\u2026" }) }) : s.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [s.jsxs("header", { className: "osrs-mmg__header", children: [s.jsx("p", { children: s.jsx(x, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), s.jsx("h1", { children: e.methodName }), s.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), o() ? s.jsx(K, { loading: n.loading, error: n.error, manifest: n.manifest, fromCache: n.fromCache, onReload: n.reload }) : null, s.jsx(R, { skills: e.skillRequirements }), s.jsxs("div", { className: "osrs-mmg__kph-row", children: [s.jsxs("label", { className: "osrs-mmg__field", children: [e.kphUnitName, s.jsx("input", { type: "number", min: 0, step: "any", value: d, onChange: (r) => _(Number(r.target.value)) })] }), s.jsx("button", { type: "button", onClick: N, children: "Reset" })] }), s.jsxs("section", { className: "osrs-mmg__summary", children: [s.jsxs("div", { children: [s.jsx("span", { children: "Profit" }), s.jsx("strong", { children: m(i.profit) })] }), s.jsxs("div", { children: [s.jsx("span", { children: "Inputs" }), s.jsx("strong", { children: m(i.inputTotal) })] }), s.jsxs("div", { children: [s.jsx("span", { children: "Outputs" }), s.jsx("strong", { children: m(i.outputTotal) })] })] }), s.jsxs("div", { className: "osrs-mmg__columns", children: [s.jsx(f, { title: "Inputs", lines: i.inputs }), s.jsx(f, { title: "Outputs", lines: i.outputs })] }), e.assumptionText ? s.jsx("p", { className: "osrs-mmg__assumption", children: e.assumptionText }) : null, o() && n.ready ? s.jsx(L, { mode: "single", methodId: e.id, methodName: e.methodName }) : null] });
}
export {
  T as default
};
