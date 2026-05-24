import { r as d, j as e, u as G, L as P } from "./index-Cmvkr_0Y.js";
import { g as D, h as A, d as y, R as F, C as H, j as $, k as q, l as _, X as B, m as N, n as V, Y as C, o as U, T as Q, t as T, L as X, q as Y, v as M, w as z, x as W, c as J, u as Z, i as b, S as I, y as ee, z as se, O as te, e as re, A as ne } from "./useOsrsData-Bsp0D7cx.js";
import { y as oe, z as O } from "./skillIconUrl-DBpzbTaR.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const v = "other", ie = "Other";
function ae(r, n) {
  return `${n}:${r}`;
}
function le(r) {
  const n = r.top.map((i) => ({ key: i.lineKey, label: i.itemName, priceKey: `${i.lineKey}__price`, volumeKey: `${i.lineKey}__volume`, lines: [i] }));
  return r.other.length === 0 ? n : [...n, { key: v, label: ie, priceKey: `${v}__price`, volumeKey: `${v}__volume`, lines: r.other }];
}
function ce(r, n, i) {
  const u = new Set(n.map((o) => o.lineKey)), c = r.filter((o) => u.has(ae(o.wikiSlug, o.ioType)));
  let h = 0, s = false, l = 0, m = 0;
  for (const o of c) if (o.volume != null && (h += o.volume, s = true), o.price != null) {
    const p = o.qtyPerCompletion * i;
    p > 0 && (l += p * o.price, m += p);
  }
  return { price: m > 0 ? l / m : null, volume: s ? h : null };
}
function me(r, n, i) {
  const u = le(n), c = /* @__PURE__ */ new Map();
  for (const s of r) {
    const l = c.get(s.period) ?? [];
    l.push(s), c.set(s.period, l);
  }
  return { chartData: [...c.keys()].sort().map((s) => {
    const l = c.get(s) ?? [], m = { period: s };
    for (const o of u) {
      if (o.key === v) {
        const a = ce(l, o.lines, i);
        m[o.priceKey] = a.price, m[o.volumeKey] = a.volume;
        continue;
      }
      const p = o.lines[0], g = l.find((a) => a.wikiSlug === p.wikiSlug && a.ioType === p.ioType);
      m[o.priceKey] = (g == null ? void 0 : g.price) ?? null, m[o.volumeKey] = (g == null ? void 0 : g.volume) ?? null;
    }
    return m;
  }), series: u };
}
const de = ["day", "week", "month", "quarter", "year"];
function ue(r, n) {
  return n === v ? _.otherSeries : _.colors[r % _.colors.length];
}
function L(r) {
  return r >= 1e6 ? `${(r / 1e6).toFixed(1)}M` : r >= 1e3 ? `${Math.round(r / 1e3)}k` : String(Math.round(r));
}
function he({ active: r, payload: n, label: i, period: u }) {
  if (!r || !(n == null ? void 0 : n.length) || i == null) return null;
  const c = n[0], s = String(c.dataKey ?? "").endsWith("__volume"), l = c.value;
  return l == null || !Number.isFinite(l) ? null : e.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: T.contentStyle, children: [e.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: W(i, u) }), e.jsxs("p", { className: "osrs-mmg__chart-tooltip-value", style: { color: c.color }, children: [c.name, ": ", s ? L(l) : y(l)] })] });
}
function pe({ methodId: r, guide: n, kph: i }) {
  const [u, c] = d.useState(false), [h, s] = d.useState("week"), [l, m] = d.useState(true), [o, p] = d.useState([]), [g, a] = d.useState(false), j = d.useMemo(() => D(n, i), [n, i]);
  d.useEffect(() => {
    if (!u) return;
    let t = false;
    async function x() {
      a(true);
      try {
        const f = await z(r, h);
        t || p(f);
      } finally {
        t || a(false);
      }
    }
    return x(), () => {
      t = true;
    };
  }, [u, r, h]);
  const { chartData: S, series: K } = d.useMemo(() => me(o, j, i), [o, j, i]), w = d.useMemo(() => [...S].sort((t, x) => A(String(t.period), String(x.period))), [S]), E = w.some((t) => K.some((x) => {
    const f = t[x.priceKey], k = t[x.volumeKey];
    return typeof f == "number" && Number.isFinite(f) || typeof k == "number" && Number.isFinite(k);
  }));
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown", children: [e.jsxs("div", { className: "osrs-mmg__trends-header", children: [e.jsx("h3", { children: "Item breakdown" }), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: u, onChange: (t) => c(t.target.checked) }), "Show item breakdown"] })] }), u ? e.jsxs(e.Fragment, { children: [e.jsx("p", { className: "osrs-mmg__muted osrs-mmg__breakdown-intro", children: "Top 5 items by |GP/h| at your current rate, plus Other for the rest. Solid lines are GE price; dashed lines are GE volume." }), e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--compact", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "Qty/h" })] }) }), e.jsxs("tbody", { children: [j.top.map((t) => e.jsxs("tr", { children: [e.jsx("td", { children: t.itemName }), e.jsx("td", { children: y(t.gpPerHour) }), e.jsx("td", { children: t.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 }) })] }, t.lineKey)), j.other.length > 0 ? e.jsxs("tr", { children: [e.jsxs("td", { children: ["Other (", j.other.length, " items)"] }), e.jsx("td", { children: y(j.other.reduce((t, x) => t + x.gpPerHour, 0)) }), e.jsx("td", { children: "\u2014" })] }) : null] })] }), e.jsxs("div", { className: "osrs-mmg__period-row", children: [de.map((t) => e.jsx("button", { type: "button", className: t === h ? "is-active" : "", onClick: () => s(t), children: t }, t)), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: l, onChange: (t) => m(t.target.checked) }), "GE volume"] })] }), g ? e.jsx("p", { className: "osrs-mmg__muted", children: "Loading item charts\u2026" }) : null, !g && E ? e.jsx("div", { className: "osrs-mmg__chart", children: e.jsx(F, { width: "100%", height: 420, children: e.jsxs(H, { data: w, margin: $, children: [e.jsx(q, { strokeDasharray: "3 3", stroke: _.grid }), e.jsx(B, { dataKey: "period", tick: N, stroke: _.axis, ...V(h) }), e.jsx(C, { yAxisId: "price", tick: N, stroke: _.axis, tickFormatter: (t) => U(t) }), l ? e.jsx(C, { yAxisId: "volume", orientation: "right", tick: N, stroke: _.axis, tickFormatter: L }) : null, e.jsx(Q, { content: (t) => e.jsx(he, { ...t, period: h }), ...T }), e.jsx(X, { ...Y }), K.flatMap((t, x) => {
    const f = ue(x, t.key), k = [e.jsx(M, { yAxisId: "price", type: "monotone", dataKey: t.priceKey, name: `${t.label} price`, stroke: f, connectNulls: true, dot: false }, t.priceKey)];
    return l && k.push(e.jsx(M, { yAxisId: "volume", type: "monotone", dataKey: t.volumeKey, name: `${t.label} volume`, stroke: f, strokeDasharray: "5 4", connectNulls: true, dot: false }, t.volumeKey)), k;
  })] }) }) }) : null, !g && !E ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history yet for these items." }) : null] }) : null] });
}
function xe({ skills: r }) {
  return r.length === 0 ? null : e.jsxs("section", { className: "osrs-mmg__skills", children: [e.jsx("h3", { children: "Skill requirements" }), e.jsx(J, { skills: r })] });
}
function R({ title: r, lines: n }) {
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [e.jsx("h3", { children: r }), e.jsxs("table", { className: "osrs-mmg__table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Qty/h" }), e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" })] }) }), e.jsx("tbody", { children: n.map((i) => e.jsxs("tr", { children: [e.jsxs("td", { children: [ne(i.qtyPerHour), " \xD7"] }), e.jsx("td", { children: i.itemName }), e.jsx("td", { children: y(i.gpPerHour) })] }, i.wikiSlug)) })] })] });
}
function ke() {
  const { methodId: r } = G(), n = Z(), [i, u] = d.useState(null), [c, h] = d.useState(null);
  d.useEffect(() => {
    if (r) {
      if (!b()) {
        const a = I.find((j) => j.id === r) ?? I[0] ?? null;
        u(a);
        return;
      }
      n.ready && ee(r).then((a) => {
        if (!a) throw new Error("Guide not found in dataset");
        u(a), h(null);
      }).catch((a) => h(a instanceof Error ? a.message : String(a)));
    }
  }, [r, n.ready]);
  const s = i, [l, m] = d.useState(1);
  d.useEffect(() => {
    s && m(oe(s.id, s.defaultKph));
  }, [s]);
  const o = d.useMemo(() => s ? se(s, l) : null, [s, l]);
  function p(a) {
    !s || !Number.isFinite(a) || a < 0 || (m(a), O(s.id, a));
  }
  function g() {
    s && (m(s.defaultKph), O(s.id, s.defaultKph));
  }
  return b() && n.loading ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading data\u2026" }) }) : c ? e.jsxs("div", { className: "osrs-mmg", children: [e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: c }), e.jsx(P, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !s || !o ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading guide\u2026" }) }) : e.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("p", { children: e.jsx(P, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), e.jsx("h1", { children: s.methodName }), e.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), b() ? e.jsx(te, { loading: n.loading, error: n.error, manifest: n.manifest, fromCache: n.fromCache, onReload: n.reload }) : null, e.jsx(xe, { skills: s.skillRequirements }), e.jsxs("div", { className: "osrs-mmg__kph-row", children: [e.jsxs("label", { className: "osrs-mmg__field", children: [s.kphUnitName, e.jsx("input", { type: "number", min: 0, step: "any", value: l, onChange: (a) => p(Number(a.target.value)) })] }), e.jsx("button", { type: "button", onClick: g, children: "Reset" })] }), e.jsxs("section", { className: "osrs-mmg__summary", children: [e.jsxs("div", { children: [e.jsx("span", { children: "Profit" }), e.jsx("strong", { children: y(o.profit) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Inputs" }), e.jsx("strong", { children: y(o.inputTotal) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Outputs" }), e.jsx("strong", { children: y(o.outputTotal) })] })] }), e.jsxs("div", { className: "osrs-mmg__columns", children: [e.jsx(R, { title: "Inputs", lines: o.inputs }), e.jsx(R, { title: "Outputs", lines: o.outputs })] }), s.assumptionText ? e.jsx("p", { className: "osrs-mmg__assumption", children: s.assumptionText }) : null, b() && n.ready ? e.jsxs(e.Fragment, { children: [e.jsx(re, { mode: "single", methodId: s.id, methodName: s.methodName }), e.jsx(pe, { methodId: s.id, guide: s, kph: l })] }) : null] });
}
export {
  ke as default
};
