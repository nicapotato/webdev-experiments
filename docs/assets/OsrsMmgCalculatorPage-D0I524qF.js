import { r as h, j as e, u as q, L as D } from "./index-Cug6S6xf.js";
import { t as w, g as B, h as H, d as _, R as V, C as Y, j as Q, k as W, l as y, X, m as S, n as z, Y as G, o as J, T as Z, q as A, L as ee, v as se, w as I, x as te, y as re, z as ne, A as oe, c as ie, u as ae, i as N, S as L, B as le, D as ce, O as me, e as ue, E as de } from "./useOsrsData-D5ghwB46.js";
import { y as he, z as O } from "./skillIconUrl-DBpzbTaR.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const pe = "https://prices.runescape.wiki/api/v1/osrs", ge = "nicapotato-webdev-experiments (OSRS MMG calculator; static site)";
function fe(s) {
  const n = s.avgHighPrice, r = s.avgLowPrice;
  return n != null && r != null ? (n + r) / 2 : n ?? r ?? null;
}
function xe(s) {
  return Number(s.highPriceVolume ?? 0) + Number(s.lowPriceVolume ?? 0);
}
function je(s, n) {
  const r = s.getUTCFullYear(), m = s.getUTCMonth(), c = s.getUTCDate();
  switch (n) {
    case "day":
      return w(s);
    case "week": {
      const i = s.getUTCDay(), t = i === 0 ? -6 : 1 - i, l = new Date(Date.UTC(r, m, c + t));
      return w(l);
    }
    case "month":
      return w(new Date(Date.UTC(r, m, 1)));
    case "quarter":
      return w(new Date(Date.UTC(r, Math.floor(m / 3) * 3, 1)));
    case "year":
      return w(new Date(Date.UTC(r, 0, 1)));
  }
}
async function ye(s) {
  const n = `${pe}/timeseries?timestep=24h&id=${s}`, r = await fetch(n, { headers: { "User-Agent": ge } });
  if (!r.ok) throw new Error(`GE timeseries failed for item ${s} (${r.status})`);
  return (await r.json()).data ?? [];
}
function _e(s, n) {
  const r = /* @__PURE__ */ new Map();
  for (const c of s) {
    const i = new Date(c.timestamp * 1e3), t = je(i, n), l = r.get(t) ?? { prices: [], volume: 0 }, d = fe(c);
    d != null && l.prices.push(d), l.volume += xe(c), r.set(t, l);
  }
  const m = /* @__PURE__ */ new Map();
  for (const [c, i] of r) m.set(c, { price: i.prices.length ? i.prices[i.prices.length - 1] : null, volume: i.volume > 0 ? i.volume : null });
  return m;
}
async function ke(s, n) {
  const r = s.filter((i) => i.itemId > 0);
  if (!r.length) return [];
  const m = await Promise.all(r.map(async (i) => ({ line: i, series: await ye(i.itemId) }))), c = [];
  for (const { line: i, series: t } of m) {
    const l = _e(t, n);
    for (const [d, a] of l) c.push({ period: d, wikiSlug: i.wikiSlug, ioType: i.ioType, itemName: i.itemName, qtyPerCompletion: i.qtyPerCompletion, price: a.price, volume: a.volume });
  }
  return c.sort((i, t) => i.period.localeCompare(t.period)), c;
}
const b = "other", ve = "Other";
function we(s, n) {
  return `${n}:${s}`;
}
function be(s) {
  const n = s.top.map((r) => ({ key: r.lineKey, label: r.itemName, priceKey: `${r.lineKey}__price`, volumeKey: `${r.lineKey}__volume`, lines: [r] }));
  return s.other.length === 0 ? n : [...n, { key: b, label: ve, priceKey: `${b}__price`, volumeKey: `${b}__volume`, lines: s.other }];
}
function Ne(s, n, r) {
  const m = new Set(n.map((a) => a.lineKey)), c = s.filter((a) => m.has(we(a.wikiSlug, a.ioType)));
  let i = 0, t = false, l = 0, d = 0;
  for (const a of c) if (a.volume != null && (i += a.volume, t = true), a.price != null) {
    const p = a.qtyPerCompletion * r;
    p > 0 && (l += p * a.price, d += p);
  }
  return { price: d > 0 ? l / d : null, volume: t ? i : null };
}
function Se(s, n, r) {
  const m = be(n), c = /* @__PURE__ */ new Map();
  for (const t of s) {
    const l = c.get(t.period) ?? [];
    l.push(t), c.set(t.period, l);
  }
  return { chartData: [...c.keys()].sort().map((t) => {
    const l = c.get(t) ?? [], d = { period: t };
    for (const a of m) {
      if (a.key === b) {
        const u = Ne(l, a.lines, r);
        d[a.priceKey] = u.price, d[a.volumeKey] = u.volume;
        continue;
      }
      const p = a.lines[0], j = l.find((u) => u.wikiSlug === p.wikiSlug && u.ioType === p.ioType);
      d[a.priceKey] = (j == null ? void 0 : j.price) ?? null, d[a.volumeKey] = (j == null ? void 0 : j.volume) ?? null;
    }
    return d;
  }), series: m };
}
const Ee = ["day", "week", "month", "quarter", "year"];
function Ke(s, n) {
  return n === b ? y.otherSeries : y.colors[s % y.colors.length];
}
function U(s) {
  return s >= 1e6 ? `${(s / 1e6).toFixed(1)}M` : s >= 1e3 ? `${Math.round(s / 1e3)}k` : String(Math.round(s));
}
function Pe({ active: s, payload: n, label: r, period: m }) {
  if (!s || !(n == null ? void 0 : n.length) || r == null) return null;
  const c = n[0], t = String(c.dataKey ?? "").endsWith("__volume"), l = c.value;
  return l == null || !Number.isFinite(l) ? null : e.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: A.contentStyle, children: [e.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: oe(r, m) }), e.jsxs("p", { className: "osrs-mmg__chart-tooltip-value", style: { color: c.color }, children: [c.name, ": ", t ? U(l) : _(l)] })] });
}
function Ce({ methodId: s, guide: n, kph: r }) {
  const [m, c] = h.useState(false), [i, t] = h.useState("week"), [l, d] = h.useState(true), [a, p] = h.useState([]), [j, u] = h.useState(false), [v, E] = h.useState(null), [F, K] = h.useState(false), k = h.useMemo(() => B(n, r), [n, r]);
  h.useEffect(() => {
    if (!m) return;
    let o = false;
    async function g() {
      u(true), E(null);
      try {
        if (await te()) {
          const x = await re(s, i);
          o || (p(x), K(false));
        } else {
          const x = await ne(s), $ = await ke(x, i);
          o || (p($), K(true));
        }
      } catch (f) {
        o || (p([]), E(f instanceof Error ? f.message : String(f)));
      } finally {
        o || u(false);
      }
    }
    return g(), () => {
      o = true;
    };
  }, [m, s, i]);
  const { chartData: P, series: C } = h.useMemo(() => Se(a, k, r), [a, k, r]), T = h.useMemo(() => [...P].sort((o, g) => H(String(o.period), String(g.period))), [P]), M = T.some((o) => C.some((g) => {
    const f = o[g.priceKey], x = o[g.volumeKey];
    return typeof f == "number" && Number.isFinite(f) || typeof x == "number" && Number.isFinite(x);
  }));
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown", children: [e.jsxs("div", { className: "osrs-mmg__trends-header", children: [e.jsx("h3", { children: "Item breakdown" }), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: m, onChange: (o) => c(o.target.checked) }), "Show item breakdown"] })] }), m ? e.jsxs(e.Fragment, { children: [e.jsxs("p", { className: "osrs-mmg__muted osrs-mmg__breakdown-intro", children: ["Top 5 items by |GP/h| at your current rate, plus Other for the rest. Solid lines are GE price; dashed lines are GE volume.", F ? e.jsxs(e.Fragment, { children: [" ", "Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset."] }) : null] }), e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--compact", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "Qty/h" })] }) }), e.jsxs("tbody", { children: [k.top.map((o) => e.jsxs("tr", { children: [e.jsx("td", { children: o.itemName }), e.jsx("td", { children: _(o.gpPerHour) }), e.jsx("td", { children: o.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 }) })] }, o.lineKey)), k.other.length > 0 ? e.jsxs("tr", { children: [e.jsxs("td", { children: ["Other (", k.other.length, " items)"] }), e.jsx("td", { children: _(k.other.reduce((o, g) => o + g.gpPerHour, 0)) }), e.jsx("td", { children: "\u2014" })] }) : null] })] }), e.jsxs("div", { className: "osrs-mmg__period-row", children: [Ee.map((o) => e.jsx("button", { type: "button", className: o === i ? "is-active" : "", onClick: () => t(o), children: o }, o)), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: l, onChange: (o) => d(o.target.checked) }), "GE volume"] })] }), j ? e.jsx("p", { className: "osrs-mmg__muted", children: "Loading item charts\u2026" }) : null, v ? e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: v }) : null, !j && M ? e.jsx("div", { className: "osrs-mmg__chart", children: e.jsx(V, { width: "100%", height: 420, children: e.jsxs(Y, { data: T, margin: Q, children: [e.jsx(W, { strokeDasharray: "3 3", stroke: y.grid }), e.jsx(X, { dataKey: "period", tick: S, stroke: y.axis, ...z(i) }), e.jsx(G, { yAxisId: "price", tick: S, stroke: y.axis, tickFormatter: (o) => J(o) }), l ? e.jsx(G, { yAxisId: "volume", orientation: "right", tick: S, stroke: y.axis, tickFormatter: U }) : null, e.jsx(Z, { content: (o) => e.jsx(Pe, { ...o, period: i }), ...A }), e.jsx(ee, { ...se }), C.flatMap((o, g) => {
    const f = Ke(g, o.key), x = [e.jsx(I, { yAxisId: "price", type: "monotone", dataKey: o.priceKey, name: `${o.label} price`, stroke: f, connectNulls: true, dot: false }, o.priceKey)];
    return l && x.push(e.jsx(I, { yAxisId: "volume", type: "monotone", dataKey: o.volumeKey, name: `${o.label} volume`, stroke: f, strokeDasharray: "5 4", connectNulls: true, dot: false }, o.volumeKey)), x;
  })] }) }) }) : null, !j && !v && !M ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }) : null] }) : null] });
}
function Te({ skills: s }) {
  return s.length === 0 ? null : e.jsxs("section", { className: "osrs-mmg__skills", children: [e.jsx("h3", { children: "Skill requirements" }), e.jsx(ie, { skills: s })] });
}
function R({ title: s, lines: n }) {
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [e.jsx("h3", { children: s }), e.jsxs("table", { className: "osrs-mmg__table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Qty/h" }), e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" })] }) }), e.jsx("tbody", { children: n.map((r) => e.jsxs("tr", { children: [e.jsxs("td", { children: [de(r.qtyPerHour), " \xD7"] }), e.jsx("td", { children: r.itemName }), e.jsx("td", { children: _(r.gpPerHour) })] }, r.wikiSlug)) })] })] });
}
function Oe() {
  const { methodId: s } = q(), n = ae(), [r, m] = h.useState(null), [c, i] = h.useState(null);
  h.useEffect(() => {
    if (s) {
      if (!N()) {
        const u = L.find((v) => v.id === s) ?? L[0] ?? null;
        m(u);
        return;
      }
      n.ready && le(s).then((u) => {
        if (!u) throw new Error("Guide not found in dataset");
        m(u), i(null);
      }).catch((u) => i(u instanceof Error ? u.message : String(u)));
    }
  }, [s, n.ready]);
  const t = r, [l, d] = h.useState(1);
  h.useEffect(() => {
    t && d(he(t.id, t.defaultKph));
  }, [t]);
  const a = h.useMemo(() => t ? ce(t, l) : null, [t, l]);
  function p(u) {
    !t || !Number.isFinite(u) || u < 0 || (d(u), O(t.id, u));
  }
  function j() {
    t && (d(t.defaultKph), O(t.id, t.defaultKph));
  }
  return N() && n.loading ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading data\u2026" }) }) : c ? e.jsxs("div", { className: "osrs-mmg", children: [e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: c }), e.jsx(D, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !t || !a ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading guide\u2026" }) }) : e.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("p", { children: e.jsx(D, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), e.jsx("h1", { children: t.methodName }), e.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), N() ? e.jsx(me, { loading: n.loading, error: n.error, manifest: n.manifest, fromCache: n.fromCache, onReload: n.reload }) : null, e.jsx(Te, { skills: t.skillRequirements }), e.jsxs("div", { className: "osrs-mmg__kph-row", children: [e.jsxs("label", { className: "osrs-mmg__field", children: [t.kphUnitName, e.jsx("input", { type: "number", min: 0, step: "any", value: l, onChange: (u) => p(Number(u.target.value)) })] }), e.jsx("button", { type: "button", onClick: j, children: "Reset" })] }), e.jsxs("section", { className: "osrs-mmg__summary", children: [e.jsxs("div", { children: [e.jsx("span", { children: "Profit" }), e.jsx("strong", { children: _(a.profit) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Inputs" }), e.jsx("strong", { children: _(a.inputTotal) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Outputs" }), e.jsx("strong", { children: _(a.outputTotal) })] })] }), e.jsxs("div", { className: "osrs-mmg__columns", children: [e.jsx(R, { title: "Inputs", lines: a.inputs }), e.jsx(R, { title: "Outputs", lines: a.outputs })] }), t.assumptionText ? e.jsx("p", { className: "osrs-mmg__assumption", children: t.assumptionText }) : null, N() && n.ready ? e.jsxs(e.Fragment, { children: [e.jsx(ue, { mode: "single", methodId: t.id, methodName: t.methodName }), e.jsx(Ce, { methodId: t.id, guide: t, kph: l })] }) : null] });
}
export {
  Oe as default
};
