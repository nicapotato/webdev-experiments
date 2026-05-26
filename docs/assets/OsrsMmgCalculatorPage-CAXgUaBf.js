import { r as h, j as e, u as B, L as D } from "./index-CSXUHui8.js";
import { t as v, h as H, j as V, d as _, R as Y, C as Q, k as W, l as X, m as y, X as z, n as S, o as J, Y as G, e as Z, T as ee, q as U, L as se, v as te, w as I, x as re, y as oe, z as ne, A as ie, c as ae, u as le, i as N, S as L, B as ce, D as me, O as R, g as ue, E as de } from "./useOsrsData-BKPooMlN.js";
import { y as he, z as O } from "./skillIconUrl-DBpzbTaR.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const pe = "https://prices.runescape.wiki/api/v1/osrs", ge = "nicapotato-webdev-experiments (OSRS MMG calculator; static site)";
function fe(s) {
  const t = s.avgHighPrice, o = s.avgLowPrice;
  return t != null && o != null ? (t + o) / 2 : t ?? o ?? null;
}
function xe(s) {
  return Number(s.highPriceVolume ?? 0) + Number(s.lowPriceVolume ?? 0);
}
function je(s, t) {
  const o = s.getUTCFullYear(), m = s.getUTCMonth(), c = s.getUTCDate();
  switch (t) {
    case "day":
      return v(s);
    case "week": {
      const i = s.getUTCDay(), r = i === 0 ? -6 : 1 - i, l = new Date(Date.UTC(o, m, c + r));
      return v(l);
    }
    case "month":
      return v(new Date(Date.UTC(o, m, 1)));
    case "quarter":
      return v(new Date(Date.UTC(o, Math.floor(m / 3) * 3, 1)));
    case "year":
      return v(new Date(Date.UTC(o, 0, 1)));
  }
}
async function ye(s) {
  const t = `${pe}/timeseries?timestep=24h&id=${s}`, o = await fetch(t, { headers: { "User-Agent": ge } });
  if (!o.ok) throw new Error(`GE timeseries failed for item ${s} (${o.status})`);
  return (await o.json()).data ?? [];
}
function _e(s, t) {
  const o = /* @__PURE__ */ new Map();
  for (const c of s) {
    const i = new Date(c.timestamp * 1e3), r = je(i, t), l = o.get(r) ?? { prices: [], volume: 0 }, d = fe(c);
    d != null && l.prices.push(d), l.volume += xe(c), o.set(r, l);
  }
  const m = /* @__PURE__ */ new Map();
  for (const [c, i] of o) m.set(c, { price: i.prices.length ? i.prices[i.prices.length - 1] : null, volume: i.volume > 0 ? i.volume : null });
  return m;
}
async function ke(s, t) {
  const o = s.filter((i) => i.itemId > 0);
  if (!o.length) return [];
  const m = await Promise.all(o.map(async (i) => ({ line: i, series: await ye(i.itemId) }))), c = [];
  for (const { line: i, series: r } of m) {
    const l = _e(r, t);
    for (const [d, a] of l) c.push({ period: d, wikiSlug: i.wikiSlug, ioType: i.ioType, itemName: i.itemName, qtyPerCompletion: i.qtyPerCompletion, price: a.price, volume: a.volume });
  }
  return c.sort((i, r) => i.period.localeCompare(r.period)), c;
}
const b = "other", we = "Other";
function ve(s, t) {
  return `${t}:${s}`;
}
function be(s) {
  const t = s.top.map((o) => ({ key: o.lineKey, label: o.itemName, priceKey: `${o.lineKey}__price`, volumeKey: `${o.lineKey}__volume`, lines: [o] }));
  return s.other.length === 0 ? t : [...t, { key: b, label: we, priceKey: `${b}__price`, volumeKey: `${b}__volume`, lines: s.other }];
}
function Ne(s, t, o) {
  const m = new Set(t.map((a) => a.lineKey)), c = s.filter((a) => m.has(ve(a.wikiSlug, a.ioType)));
  let i = 0, r = false, l = 0, d = 0;
  for (const a of c) if (a.volume != null && (i += a.volume, r = true), a.price != null) {
    const p = a.qtyPerCompletion * o;
    p > 0 && (l += p * a.price, d += p);
  }
  return { price: d > 0 ? l / d : null, volume: r ? i : null };
}
function Se(s, t, o) {
  const m = be(t), c = /* @__PURE__ */ new Map();
  for (const r of s) {
    const l = c.get(r.period) ?? [];
    l.push(r), c.set(r.period, l);
  }
  return { chartData: [...c.keys()].sort().map((r) => {
    const l = c.get(r) ?? [], d = { period: r };
    for (const a of m) {
      if (a.key === b) {
        const u = Ne(l, a.lines, o);
        d[a.priceKey] = u.price, d[a.volumeKey] = u.volume;
        continue;
      }
      const p = a.lines[0], j = l.find((u) => u.wikiSlug === p.wikiSlug && u.ioType === p.ioType);
      d[a.priceKey] = (j == null ? void 0 : j.price) ?? null, d[a.volumeKey] = (j == null ? void 0 : j.volume) ?? null;
    }
    return d;
  }), series: m };
}
const Pe = ["day", "week", "month", "quarter", "year"];
function Ee(s, t) {
  return t === b ? y.otherSeries : y.colors[s % y.colors.length];
}
function F(s) {
  return s >= 1e6 ? `${(s / 1e6).toFixed(1)}M` : s >= 1e3 ? `${Math.round(s / 1e3)}k` : String(Math.round(s));
}
function Ke({ active: s, payload: t, label: o, period: m }) {
  if (!s || !(t == null ? void 0 : t.length) || o == null) return null;
  const c = t[0], r = String(c.dataKey ?? "").endsWith("__volume"), l = c.value;
  return l == null || !Number.isFinite(l) ? null : e.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: U.contentStyle, children: [e.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: ie(o, m) }), e.jsxs("p", { className: "osrs-mmg__chart-tooltip-value", style: { color: c.color }, children: [c.name, ": ", r ? F(l) : _(l)] })] });
}
function Ce({ methodId: s, guide: t, kph: o }) {
  const [m, c] = h.useState(false), [i, r] = h.useState("week"), [l, d] = h.useState(true), [a, p] = h.useState([]), [j, u] = h.useState(false), [w, P] = h.useState(null), [$, E] = h.useState(false), k = h.useMemo(() => H(t, o), [t, o]);
  h.useEffect(() => {
    if (!m) return;
    let n = false;
    async function g() {
      u(true), P(null);
      try {
        if (await re()) {
          const x = await oe(s, i);
          n || (p(x), E(false));
        } else {
          const x = await ne(s), q = await ke(x, i);
          n || (p(q), E(true));
        }
      } catch (f) {
        n || (p([]), P(f instanceof Error ? f.message : String(f)));
      } finally {
        n || u(false);
      }
    }
    return g(), () => {
      n = true;
    };
  }, [m, s, i]);
  const { chartData: K, series: C } = h.useMemo(() => Se(a, k, o), [a, k, o]), T = h.useMemo(() => [...K].sort((n, g) => V(String(n.period), String(g.period))), [K]), M = T.some((n) => C.some((g) => {
    const f = n[g.priceKey], x = n[g.volumeKey];
    return typeof f == "number" && Number.isFinite(f) || typeof x == "number" && Number.isFinite(x);
  }));
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown", children: [e.jsxs("div", { className: "osrs-mmg__trends-header", children: [e.jsx("h3", { children: "Item breakdown" }), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: m, onChange: (n) => c(n.target.checked) }), "Show item breakdown"] })] }), m ? e.jsxs(e.Fragment, { children: [e.jsxs("p", { className: "osrs-mmg__muted osrs-mmg__breakdown-intro", children: ["Top 5 items by |GP/h| at your current rate, plus Other for the rest. Solid lines are GE price; dashed lines are GE volume.", $ ? e.jsxs(e.Fragment, { children: [" ", "Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset."] }) : null] }), e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--compact", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "Qty/h" })] }) }), e.jsxs("tbody", { children: [k.top.map((n) => e.jsxs("tr", { children: [e.jsx("td", { children: n.itemName }), e.jsx("td", { children: _(n.gpPerHour) }), e.jsx("td", { children: n.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 }) })] }, n.lineKey)), k.other.length > 0 ? e.jsxs("tr", { children: [e.jsxs("td", { children: ["Other (", k.other.length, " items)"] }), e.jsx("td", { children: _(k.other.reduce((n, g) => n + g.gpPerHour, 0)) }), e.jsx("td", { children: "\u2014" })] }) : null] })] }), e.jsxs("div", { className: "osrs-mmg__period-row", children: [Pe.map((n) => e.jsx("button", { type: "button", className: n === i ? "is-active" : "", onClick: () => r(n), children: n }, n)), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: l, onChange: (n) => d(n.target.checked) }), "GE volume"] })] }), j ? e.jsx("p", { className: "osrs-mmg__muted", children: "Loading item charts\u2026" }) : null, w ? e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: w }) : null, !j && M ? e.jsx("div", { className: "osrs-mmg__chart", children: e.jsx(Y, { width: "100%", height: 420, children: e.jsxs(Q, { data: T, margin: W, children: [e.jsx(X, { strokeDasharray: "3 3", stroke: y.grid }), e.jsx(z, { dataKey: "period", tick: S, stroke: y.axis, ...J(i) }), e.jsx(G, { yAxisId: "price", tick: S, stroke: y.axis, tickFormatter: (n) => Z(n) }), l ? e.jsx(G, { yAxisId: "volume", orientation: "right", tick: S, stroke: y.axis, tickFormatter: F }) : null, e.jsx(ee, { content: (n) => e.jsx(Ke, { ...n, period: i }), ...U }), e.jsx(se, { ...te }), C.flatMap((n, g) => {
    const f = Ee(g, n.key), x = [e.jsx(I, { yAxisId: "price", type: "monotone", dataKey: n.priceKey, name: `${n.label} price`, stroke: f, connectNulls: true, dot: false }, n.priceKey)];
    return l && x.push(e.jsx(I, { yAxisId: "volume", type: "monotone", dataKey: n.volumeKey, name: `${n.label} volume`, stroke: f, strokeDasharray: "5 4", connectNulls: true, dot: false }, n.volumeKey)), x;
  })] }) }) }) : null, !j && !w && !M ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }) : null] }) : null] });
}
function Te({ skills: s }) {
  return s.length === 0 ? null : e.jsxs("section", { className: "osrs-mmg__skills", children: [e.jsx("h3", { children: "Skill requirements" }), e.jsx(ae, { skills: s })] });
}
function A({ title: s, lines: t }) {
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [e.jsx("h3", { children: s }), e.jsxs("table", { className: "osrs-mmg__table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Qty/h" }), e.jsx("th", { children: "Item" }), e.jsx("th", { children: "GP/h" })] }) }), e.jsx("tbody", { children: t.map((o) => e.jsxs("tr", { children: [e.jsxs("td", { children: [de(o.qtyPerHour), " \xD7"] }), e.jsx("td", { children: o.itemName }), e.jsx("td", { children: _(o.gpPerHour) })] }, o.wikiSlug)) })] })] });
}
function Re() {
  const { methodId: s } = B(), t = le(), [o, m] = h.useState(null), [c, i] = h.useState(null);
  h.useEffect(() => {
    if (s) {
      if (!N()) {
        const u = L.find((w) => w.id === s) ?? L[0] ?? null;
        m(u);
        return;
      }
      t.ready && ce(s).then((u) => {
        if (!u) throw new Error("Guide not found in dataset");
        m(u), i(null);
      }).catch((u) => i(u instanceof Error ? u.message : String(u)));
    }
  }, [s, t.ready]);
  const r = o, [l, d] = h.useState(1);
  h.useEffect(() => {
    r && d(he(r.id, r.defaultKph));
  }, [r]);
  const a = h.useMemo(() => r ? me(r, l) : null, [r, l]);
  function p(u) {
    !r || !Number.isFinite(u) || u < 0 || (d(u), O(r.id, u));
  }
  function j() {
    r && (d(r.defaultKph), O(r.id, r.defaultKph));
  }
  return N() && t.loading ? e.jsx("div", { className: "osrs-mmg", children: e.jsx(R, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, loadPhase: t.loadPhase, downloadProgress: t.downloadProgress, onReload: t.reload }) }) : c ? e.jsxs("div", { className: "osrs-mmg", children: [e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: c }), e.jsx(D, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !r || !a ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading guide\u2026" }) }) : e.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("p", { children: e.jsx(D, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), e.jsx("h1", { children: r.methodName }), e.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), N() ? e.jsx(R, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, loadPhase: t.loadPhase, downloadProgress: t.downloadProgress, onReload: t.reload }) : null, e.jsx(Te, { skills: r.skillRequirements }), e.jsxs("div", { className: "osrs-mmg__kph-row", children: [e.jsxs("label", { className: "osrs-mmg__field", children: [r.kphUnitName, e.jsx("input", { type: "number", min: 0, step: "any", value: l, onChange: (u) => p(Number(u.target.value)) })] }), e.jsx("button", { type: "button", onClick: j, children: "Reset" })] }), e.jsxs("section", { className: "osrs-mmg__summary", children: [e.jsxs("div", { children: [e.jsx("span", { children: "Profit" }), e.jsx("strong", { children: _(a.profit) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Inputs" }), e.jsx("strong", { children: _(a.inputTotal) })] }), e.jsxs("div", { children: [e.jsx("span", { children: "Outputs" }), e.jsx("strong", { children: _(a.outputTotal) })] })] }), e.jsxs("div", { className: "osrs-mmg__columns", children: [e.jsx(A, { title: "Inputs", lines: a.inputs }), e.jsx(A, { title: "Outputs", lines: a.outputs })] }), r.assumptionText ? e.jsx("p", { className: "osrs-mmg__assumption", children: r.assumptionText }) : null, N() && t.ready ? e.jsxs(e.Fragment, { children: [e.jsx(ue, { mode: "single", methodId: r.id, methodName: r.methodName }), e.jsx(Ce, { methodId: r.id, guide: r, kph: l })] }) : null] });
}
export {
  Re as default
};
