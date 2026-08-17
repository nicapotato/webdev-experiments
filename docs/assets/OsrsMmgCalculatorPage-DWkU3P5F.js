import { r as d, j as e, u as oe, L as B } from "./index-BmVL6oCJ.js";
import { t as v, l as ne, h as ae, j as J, d as w, e as le, k as ie, m as ce, n as me, o as b, R as ue, C as de, q as he, v as ge, X as pe, w as H, x as fe, Y as xe, T as _e, y as I, L as ye, z as je, c as ke, u as be, i as E, S as q, A as we, B as ve, O as V, g as Ne, D as Se } from "./useOsrsData-CrX3qDUz.js";
import { y as Ce, z as Y } from "./skillIconUrl-DBpzbTaR.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const Pe = "https://prices.runescape.wiki/api/v1/osrs", Te = "nicapotato-webdev-experiments (OSRS MMG calculator; static site)";
function Ee(t) {
  const r = t.avgHighPrice, n = t.avgLowPrice;
  return r != null && n != null ? (r + n) / 2 : r ?? n ?? null;
}
function Ke(t) {
  return Number(t.highPriceVolume ?? 0) + Number(t.lowPriceVolume ?? 0);
}
function Me(t, r) {
  const n = t.getUTCFullYear(), u = t.getUTCMonth(), c = t.getUTCDate();
  switch (r) {
    case "day":
      return v(t);
    case "week": {
      const o = t.getUTCDay(), s = o === 0 ? -6 : 1 - o, i = new Date(Date.UTC(n, u, c + s));
      return v(i);
    }
    case "month":
      return v(new Date(Date.UTC(n, u, 1)));
    case "quarter":
      return v(new Date(Date.UTC(n, Math.floor(u / 3) * 3, 1)));
    case "year":
      return v(new Date(Date.UTC(n, 0, 1)));
  }
}
async function Le(t) {
  const r = `${Pe}/timeseries?timestep=24h&id=${t}`, n = await fetch(r, { headers: { "User-Agent": Te } });
  if (!n.ok) throw new Error(`GE timeseries failed for item ${t} (${n.status})`);
  return (await n.json()).data ?? [];
}
function De(t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const c of t) {
    const o = new Date(c.timestamp * 1e3), s = Me(o, r), i = n.get(s) ?? { prices: [], volume: 0 }, l = Ee(c);
    l != null && i.prices.push(l), i.volume += Ke(c), n.set(s, i);
  }
  const u = /* @__PURE__ */ new Map();
  for (const [c, o] of n) u.set(c, { price: o.prices.length ? o.prices[o.prices.length - 1] : null, volume: o.volume > 0 ? o.volume : null });
  return u;
}
async function Ie(t, r) {
  const n = t.filter((o) => o.itemId > 0);
  if (!n.length) return [];
  const u = await Promise.all(n.map(async (o) => ({ line: o, series: await Le(o.itemId) }))), c = [];
  for (const { line: o, series: s } of u) {
    const i = De(s, r);
    for (const [l, m] of i) c.push({ period: l, wikiSlug: o.wikiSlug, ioType: o.ioType, itemName: o.itemName, qtyPerCompletion: o.qtyPerCompletion, price: m.price, volume: m.volume });
  }
  return c.sort((o, s) => o.period.localeCompare(s.period)), c;
}
const N = "other", Ge = "Other", Z = 10;
function Re(t, r) {
  return `${r}:${t}`;
}
function Oe(t, r = Z) {
  const n = t.slice(0, r).map((c) => ({ key: c.lineKey, label: c.itemName, priceKey: `${c.lineKey}__price`, volumeKey: `${c.lineKey}__volume`, lines: [c] })), u = t.slice(r);
  return u.length === 0 ? n : [...n, { key: N, label: `${Ge} (${u.length})`, priceKey: `${N}__price`, volumeKey: `${N}__volume`, lines: u }];
}
function Ae(t, r, n) {
  const u = new Set(r.map((m) => m.lineKey)), c = t.filter((m) => u.has(Re(m.wikiSlug, m.ioType)));
  let o = 0, s = false, i = 0, l = 0;
  for (const m of c) if (m.volume != null && (o += m.volume, s = true), m.price != null) {
    const g = m.qtyPerCompletion * n;
    g > 0 && (i += g * m.price, l += g);
  }
  return { price: l > 0 ? i / l : null, volume: s ? o : null };
}
function Ue(t, r, n, u = Z) {
  const c = Oe(r, u), o = /* @__PURE__ */ new Map();
  for (const i of t) {
    const l = o.get(i.period) ?? [];
    l.push(i), o.set(i.period, l);
  }
  return { chartData: [...o.keys()].sort().map((i) => {
    const l = o.get(i) ?? [], m = { period: i };
    for (const g of c) {
      if (g.key === N) {
        const p = Ae(l, g.lines, n);
        m[g.priceKey] = p.price, m[g.volumeKey] = p.volume;
        continue;
      }
      const _ = g.lines[0], h = l.find((p) => p.wikiSlug === _.wikiSlug && p.ioType === _.ioType);
      m[g.priceKey] = (h == null ? void 0 : h.price) ?? null, m[g.volumeKey] = (h == null ? void 0 : h.volume) ?? null;
    }
    return m;
  }), series: c };
}
const $e = 250;
function Q(t) {
  const [r, n] = d.useState(() => /* @__PURE__ */ new Set());
  d.useEffect(() => {
    n(/* @__PURE__ */ new Set());
  }, [t]);
  function u(s) {
    n((i) => {
      const l = new Set(i);
      return l.has(s) ? l.delete(s) : l.add(s), l;
    });
  }
  function c(s, i) {
    n((l) => i.every((g) => g === s ? !l.has(g) : l.has(g)) ? /* @__PURE__ */ new Set() : new Set(i.filter((g) => g !== s)));
  }
  function o() {
    n(/* @__PURE__ */ new Set());
  }
  return { hiddenKeys: r, toggle: u, isolate: c, showAll: o };
}
function Fe({ items: t, hiddenKeys: r, onToggle: n, onIsolate: u, onShowAll: c }) {
  const o = d.useRef(null), s = t.some((l) => r.has(l.key));
  d.useEffect(() => () => {
    o.current != null && window.clearTimeout(o.current);
  }, []);
  function i(l) {
    if (o.current != null) {
      window.clearTimeout(o.current), o.current = null, u(l);
      return;
    }
    o.current = window.setTimeout(() => {
      o.current = null, n(l);
    }, $e);
  }
  return t.length === 0 ? null : e.jsxs("div", { className: "osrs-mmg__chart-legend-wrap", children: [e.jsx("ul", { className: "osrs-mmg__chart-legend", children: t.map((l) => {
    const m = r.has(l.key);
    return e.jsx("li", { children: e.jsxs("button", { type: "button", className: m ? "osrs-mmg__chart-legend-item is-hidden" : "osrs-mmg__chart-legend-item", title: m ? "Click to show" : "Click to hide \xB7 double-click to isolate", onClick: () => i(l.key), children: [e.jsx("span", { className: l.dashed ? "osrs-mmg__chart-legend-swatch is-dashed" : "osrs-mmg__chart-legend-swatch", style: l.dashed ? { borderColor: l.color } : { background: l.color } }), l.label] }) }, l.key);
  }) }), s && c ? e.jsx("button", { type: "button", className: "osrs-mmg__chart-legend-reset", onClick: c, children: "Show all" }) : null] });
}
const Be = ["day", "week", "month", "quarter", "year"], He = [{ id: "output", label: "Output" }, { id: "input", label: "Input" }];
function G(t, r) {
  return r === N ? "#57606a" : b.colors[t % b.colors.length];
}
function X(t) {
  return t >= 1e6 ? `${(t / 1e6).toFixed(1)}M` : t >= 1e3 ? `${Math.round(t / 1e3)}k` : String(Math.round(t));
}
function qe({ active: t, payload: r, label: n, period: u, formatValue: c }) {
  if (!t || !(r == null ? void 0 : r.length) || n == null) return null;
  const o = r.map((s) => {
    const i = typeof s.value == "number" ? s.value : Number(s.value);
    return { key: String(s.dataKey ?? s.name ?? ""), name: String(s.name ?? ""), color: s.color, value: i };
  }).filter((s) => s.key && Number.isFinite(s.value)).sort((s, i) => i.value - s.value);
  return o.length === 0 ? null : e.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: I.contentStyle, children: [e.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: je(String(n), u) }), e.jsx("ul", { className: "osrs-mmg__chart-tooltip-list", children: o.map((s) => e.jsxs("li", { className: "osrs-mmg__chart-tooltip-value", style: { color: s.color }, children: [s.name, ": ", c(s.value)] }, s.key)) })] });
}
function z({ title: t, data: r, period: n, series: u, valueKey: c, yTickFormatter: o, formatValue: s, hiddenKeys: i, legendItems: l, onToggle: m, onIsolate: g, onShowAll: _, height: h }) {
  return e.jsxs("div", { className: "osrs-mmg__chart", children: [e.jsx("h4", { className: "osrs-mmg__chart-title", children: t }), e.jsx(ue, { width: "100%", height: h, children: e.jsxs(de, { data: r, margin: he, children: [e.jsx(ge, { strokeDasharray: "3 3", stroke: b.grid }), e.jsx(pe, { dataKey: "period", tick: H, stroke: b.axis, ...fe(n) }), e.jsx(xe, { tick: H, stroke: b.axis, tickFormatter: o }), e.jsx(_e, { shared: true, cursor: { stroke: b.axis, strokeDasharray: "3 3" }, content: ({ active: p, payload: k, label: y }) => e.jsx(qe, { active: p, payload: k, label: y, period: n, formatValue: s }), contentStyle: I.contentStyle, labelStyle: I.labelStyle }), u.map((p, k) => {
    const y = p[c];
    return e.jsx(ye, { type: "monotone", dataKey: y, name: p.label, stroke: G(k, p.key), connectNulls: true, dot: false, activeDot: { r: 4 }, hide: i.has(y), legendType: "none" }, y);
  })] }) }), e.jsx(Fe, { items: l, hiddenKeys: i, onToggle: m, onIsolate: g, onShowAll: _ })] });
}
function Ve({ methodId: t, guide: r, kph: n }) {
  const [u, c] = d.useState(false), [o, s] = d.useState("output"), [i, l] = d.useState("week"), [m, g] = d.useState(true), [_, h] = d.useState([]), [p, k] = d.useState(false), [y, R] = d.useState(null), [ee, O] = d.useState(false), S = Q(`${t}:${o}:price`), C = Q(`${t}:${o}:volume`), P = d.useMemo(() => ne(r, n, o), [r, n, o]);
  d.useEffect(() => {
    if (!u) return;
    let a = false;
    async function f() {
      k(true), R(null);
      try {
        if (await ie()) {
          const D = await ce(t, i);
          a || (h(D), O(false));
        } else {
          const D = await me(t), re = await Ie(D, i);
          a || (h(re), O(true));
        }
      } catch (x) {
        a || (h([]), R(x instanceof Error ? x.message : String(x)));
      } finally {
        a || k(false);
      }
    }
    return f(), () => {
      a = true;
    };
  }, [u, t, i]);
  const { chartData: A, series: j } = d.useMemo(() => Ue(_, P, n), [_, P, n]), T = d.useMemo(() => [...A].sort((a, f) => ae(String(a.period), String(f.period))), [A]), K = d.useMemo(() => j.map((a, f) => ({ key: a.priceKey, label: a.label, color: G(f, a.key) })), [j]), M = d.useMemo(() => j.map((a, f) => ({ key: a.volumeKey, label: a.label, color: G(f, a.key) })), [j]), se = d.useMemo(() => K.map((a) => a.key), [K]), te = d.useMemo(() => M.map((a) => a.key), [M]), U = T.some((a) => j.some((f) => {
    const x = a[f.priceKey];
    return typeof x == "number" && Number.isFinite(x);
  })), L = T.some((a) => j.some((f) => {
    const x = a[f.volumeKey];
    return typeof x == "number" && Number.isFinite(x);
  })), $ = U || L, F = o === "output" ? "output" : "input";
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown", children: [e.jsxs("div", { className: "osrs-mmg__trends-header", children: [e.jsx("h3", { children: "Item breakdown" }), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: u, onChange: (a) => c(a.target.checked) }), "Show item breakdown"] })] }), u ? e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "osrs-mmg__tabs", role: "tablist", "aria-label": "Item breakdown type", children: He.map((a) => e.jsx("button", { type: "button", role: "tab", "aria-selected": a.id === o, className: a.id === o ? "osrs-mmg__tab is-active" : "osrs-mmg__tab", onClick: () => s(a.id), children: a.label }, a.id)) }), e.jsxs("p", { className: "osrs-mmg__muted osrs-mmg__breakdown-intro", children: ["All ", F, " items, sorted by unit cost. Charts plot the top 10 plus Other. Hover a date to see every visible line. Click a legend item to hide it; double-click to isolate.", ee ? e.jsxs(e.Fragment, { children: [" ", "Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset."] }) : null] }), P.length === 0 ? e.jsxs("p", { className: "osrs-mmg__muted", children: ["No ", F, " items for this method."] }) : e.jsx("div", { className: "osrs-mmg__breakdown-table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--compact", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Item" }), e.jsx("th", { children: "Unit cost" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "Qty/h" })] }) }), e.jsx("tbody", { children: P.map((a) => e.jsxs("tr", { children: [e.jsx("td", { children: a.itemName }), e.jsx("td", { children: J(a) }), e.jsx("td", { children: w(a.gpPerHour) }), e.jsx("td", { children: a.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 }) })] }, a.lineKey)) })] }) }), e.jsxs("div", { className: "osrs-mmg__period-row", children: [Be.map((a) => e.jsx("button", { type: "button", className: a === i ? "is-active" : "", onClick: () => l(a), children: a }, a)), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: m, onChange: (a) => g(a.target.checked) }), "GE volume"] })] }), p ? e.jsx("p", { className: "osrs-mmg__muted", children: "Loading item charts\u2026" }) : null, y ? e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: y }) : null, !p && $ ? e.jsxs("div", { className: "osrs-mmg__chart-stack", children: [U ? e.jsx(z, { title: "GE price", data: T, period: i, series: j, valueKey: "priceKey", yTickFormatter: (a) => le(a), formatValue: w, hiddenKeys: S.hiddenKeys, legendItems: K, onToggle: S.toggle, onIsolate: (a) => S.isolate(a, se), onShowAll: S.showAll, height: 360 }) : e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }), m && L ? e.jsx(z, { title: "GE volume", data: T, period: i, series: j, valueKey: "volumeKey", yTickFormatter: X, formatValue: X, hiddenKeys: C.hiddenKeys, legendItems: M, onToggle: C.toggle, onIsolate: (a) => C.isolate(a, te), onShowAll: C.showAll, height: 300 }) : null, m && !L ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE volume history available for these items." }) : null] }) : null, !p && !y && !$ ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }) : null] }) : null] });
}
function Ye({ skills: t }) {
  return t.length === 0 ? null : e.jsxs("section", { className: "osrs-mmg__skills", children: [e.jsx("h3", { children: "Skill requirements" }), e.jsx(ke, { skills: t })] });
}
function W({ title: t, lines: r }) {
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [e.jsx("h3", { children: t }), e.jsxs("table", { className: "osrs-mmg__table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Qty/h" }), e.jsx("th", { children: "Item" }), e.jsx("th", { children: "Unit cost" }), e.jsx("th", { children: "GP/h" })] }) }), e.jsx("tbody", { children: r.map((n) => e.jsxs("tr", { children: [e.jsxs("td", { children: [Se(n.qtyPerHour), " \xD7"] }), e.jsx("td", { children: n.itemName }), e.jsx("td", { children: J(n) }), e.jsx("td", { children: w(n.gpPerHour) })] }, n.wikiSlug)) })] })] });
}
function Ze() {
  const { methodId: t } = oe(), r = be(), [n, u] = d.useState(null), [c, o] = d.useState(null);
  d.useEffect(() => {
    if (t) {
      if (!E()) {
        const h = q.find((p) => p.id === t) ?? q[0] ?? null;
        u(h);
        return;
      }
      r.ready && we(t).then((h) => {
        if (!h) throw new Error("Guide not found in dataset");
        u(h), o(null);
      }).catch((h) => o(h instanceof Error ? h.message : String(h)));
    }
  }, [t, r.ready]);
  const s = n, [i, l] = d.useState(1);
  d.useEffect(() => {
    s && l(Ce(s.id, s.defaultKph));
  }, [s]);
  const m = d.useMemo(() => s ? ve(s, i) : null, [s, i]);
  function g(h) {
    !s || !Number.isFinite(h) || h < 0 || (l(h), Y(s.id, h));
  }
  function _() {
    s && (l(s.defaultKph), Y(s.id, s.defaultKph));
  }
  return E() && r.loading ? e.jsx("div", { className: "osrs-mmg", children: e.jsx(V, { loading: r.loading, error: r.error, manifest: r.manifest, fromCache: r.fromCache, loadPhase: r.loadPhase, downloadProgress: r.downloadProgress, onReload: r.reload }) }) : c ? e.jsxs("div", { className: "osrs-mmg", children: [e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: c }), e.jsx(B, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !s || !m ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading guide\u2026" }) }) : e.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("p", { children: e.jsx(B, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), e.jsx("h1", { children: s.methodName }), e.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), E() ? e.jsx(V, { loading: r.loading, error: r.error, manifest: r.manifest, fromCache: r.fromCache, loadPhase: r.loadPhase, downloadProgress: r.downloadProgress, onReload: r.reload }) : null, e.jsx(Ye, { skills: s.skillRequirements }), e.jsxs("div", { className: "osrs-mmg__kph-row", children: [e.jsxs("label", { className: "osrs-mmg__field", children: [s.kphUnitName, e.jsx("input", { type: "number", min: 0, step: "any", value: i, onChange: (h) => g(Number(h.target.value)) })] }), e.jsx("button", { type: "button", onClick: _, children: "Reset" })] }), e.jsxs("section", { className: "osrs-mmg__summary", children: [e.jsxs("div", { children: [e.jsx("span", { children: "Profit" }), e.jsx("strong", { children: w(m.profit) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Inputs" }), e.jsx("strong", { children: w(m.inputTotal) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Outputs" }), e.jsx("strong", { children: w(m.outputTotal) })] })] }), e.jsxs("div", { className: "osrs-mmg__columns", children: [e.jsx(W, { title: "Inputs", lines: m.inputs }), e.jsx(W, { title: "Outputs", lines: m.outputs })] }), s.assumptionText ? e.jsx("p", { className: "osrs-mmg__assumption", children: s.assumptionText }) : null, E() && r.ready ? e.jsxs(e.Fragment, { children: [e.jsx(Ne, { mode: "single", methodId: s.id, methodName: s.methodName }), e.jsx(Ve, { methodId: s.id, guide: s, kph: i })] }) : null] });
}
export {
  Ze as default
};
