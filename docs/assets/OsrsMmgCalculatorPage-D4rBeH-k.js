import { u as v, r as l, j as s, L as j } from "./index-vkHMXXJq.js";
import { u as k, a as o, S as x, d as y, g as E, h as S, O as K, b as d, c as L, s as g, j as O } from "./useOsrsData-DQ8S_G0o.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
function f({ title: n, lines: t }) {
  return s.jsxs("section", { className: "osrs-mmg__panel", children: [s.jsx("h3", { children: n }), s.jsxs("table", { className: "osrs-mmg__table", children: [s.jsx("thead", { children: s.jsxs("tr", { children: [s.jsx("th", { children: "Qty/h" }), s.jsx("th", { children: "Item" }), s.jsx("th", { children: "GP/h" })] }) }), s.jsx("tbody", { children: t.map((a) => s.jsxs("tr", { children: [s.jsxs("td", { children: [O(a.qtyPerHour), " \xD7"] }), s.jsx("td", { children: a.itemName }), s.jsx("td", { children: d(a.gpPerHour) })] }, a.wikiSlug)) })] })] });
}
function I() {
  const { methodId: n } = v(), t = k(), [a, h] = l.useState(null), [u, p] = l.useState(null);
  l.useEffect(() => {
    if (n) {
      if (!o()) {
        const r = x.find((b) => b.id === n) ?? x[0] ?? null;
        h(r);
        return;
      }
      t.ready && y(n).then((r) => {
        if (!r) throw new Error("Guide not found in dataset");
        h(r), p(null);
      }).catch((r) => p(r instanceof Error ? r.message : String(r)));
    }
  }, [n, t.ready]);
  const e = a, [m, c] = l.useState(1);
  l.useEffect(() => {
    e && c(E(e.id, e.defaultKph));
  }, [e]);
  const i = l.useMemo(() => e ? S(e, m) : null, [e, m]);
  function _(r) {
    !e || !Number.isFinite(r) || r < 0 || (c(r), g(e.id, r));
  }
  function N() {
    e && (c(e.defaultKph), g(e.id, e.defaultKph));
  }
  return o() && t.loading ? s.jsx("div", { className: "osrs-mmg", children: s.jsx("p", { children: "Loading data\u2026" }) }) : u ? s.jsxs("div", { className: "osrs-mmg", children: [s.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: u }), s.jsx(j, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !e || !i ? s.jsx("div", { className: "osrs-mmg", children: s.jsx("p", { children: "Loading guide\u2026" }) }) : s.jsxs("div", { className: "osrs-mmg", children: [s.jsxs("header", { className: "osrs-mmg__header", children: [s.jsx("p", { children: s.jsx(j, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), s.jsx("h1", { children: e.methodName }), s.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), o() ? s.jsx(K, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, localMode: t.localMode, onReload: t.reload }) : null, s.jsxs("div", { className: "osrs-mmg__kph-row", children: [s.jsxs("label", { className: "osrs-mmg__field", children: [e.kphUnitName, s.jsx("input", { type: "number", min: 0, step: "any", value: m, onChange: (r) => _(Number(r.target.value)) })] }), s.jsx("button", { type: "button", onClick: N, children: "Reset" })] }), s.jsxs("section", { className: "osrs-mmg__summary", children: [s.jsxs("div", { children: [s.jsx("span", { children: "Profit" }), s.jsx("strong", { children: d(i.profit) })] }), s.jsxs("div", { children: [s.jsx("span", { children: "Inputs" }), s.jsx("strong", { children: d(i.inputTotal) })] }), s.jsxs("div", { children: [s.jsx("span", { children: "Outputs" }), s.jsx("strong", { children: d(i.outputTotal) })] })] }), s.jsxs("div", { className: "osrs-mmg__columns", children: [s.jsx(f, { title: "Inputs", lines: i.inputs }), s.jsx(f, { title: "Outputs", lines: i.outputs })] }), e.assumptionText ? s.jsx("p", { className: "osrs-mmg__assumption", children: e.assumptionText }) : null, o() && t.ready ? s.jsx(L, { mode: "single", methodId: e.id, methodName: e.methodName }) : null] });
}
export {
  I as default
};
