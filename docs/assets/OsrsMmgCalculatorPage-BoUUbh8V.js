import { r as d, j as e, u as fe, L as z } from "./index-C6AelPZl.js";
import { t as k, d as _e, h as xe, e as je, g as ye, j as ve, k as w, R as be, C as ke, l as we, m as Ne, X as Se, n as Z, p as Te, Y as Ce, T as Pe, o as U, L as Ee, q as Ke, u as Me, i as K, S as ee, r as De, O as se, s as Le, b as Ie, v as Ge, c as Re } from "./useOsrsData-DaqV7jU3.js";
import { I as Oe, J as ie, K as le, t as N, L as ce, u as Ae, N as $e, v as Fe, w as Ue, P as te, Q as Be } from "./skillIconUrl-K4gzJBB6.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const He = "https://prices.runescape.wiki/api/v1/osrs", qe = "nicapotato-webdev-experiments (OSRS MMG calculator; static site)";
function Ve(o) {
  const t = o.avgHighPrice, n = o.avgLowPrice;
  return t != null && n != null ? (t + n) / 2 : t ?? n ?? null;
}
function Ye(o) {
  return Number(o.highPriceVolume ?? 0) + Number(o.lowPriceVolume ?? 0);
}
function Qe(o, t) {
  if (!t) return true;
  const n = k(new Date(o * 1e3));
  return n >= t.from && n <= t.to;
}
function We(o, t) {
  const n = o.getUTCFullYear(), c = o.getUTCMonth(), u = o.getUTCDate();
  switch (t) {
    case "day":
      return k(o);
    case "week": {
      const a = o.getUTCDay(), s = a === 0 ? -6 : 1 - a, i = new Date(Date.UTC(n, c, u + s));
      return k(i);
    }
    case "month":
      return k(new Date(Date.UTC(n, c, 1)));
    case "quarter":
      return k(new Date(Date.UTC(n, Math.floor(c / 3) * 3, 1)));
    case "year":
      return k(new Date(Date.UTC(n, 0, 1)));
  }
}
async function Xe(o) {
  const t = `${He}/timeseries?timestep=24h&id=${o}`, n = await fetch(t, { headers: { "User-Agent": qe } });
  if (!n.ok) throw new Error(`GE timeseries failed for item ${o} (${n.status})`);
  return (await n.json()).data ?? [];
}
function Je(o, t) {
  const n = /* @__PURE__ */ new Map();
  for (const u of o) {
    const a = new Date(u.timestamp * 1e3), s = We(a, t), i = n.get(s) ?? { prices: [], volume: 0 }, l = Ve(u);
    l != null && i.prices.push(l), i.volume += Ye(u), n.set(s, i);
  }
  const c = /* @__PURE__ */ new Map();
  for (const [u, a] of n) c.set(u, { price: a.prices.length ? a.prices[a.prices.length - 1] : null, volume: a.volume > 0 ? a.volume : null });
  return c;
}
async function ze(o, t, n) {
  const c = o.filter((s) => s.itemId > 0);
  if (!c.length) return [];
  const u = await Promise.all(c.map(async (s) => ({ line: s, series: await Xe(s.itemId) }))), a = [];
  for (const { line: s, series: i } of u) {
    const l = i.filter((h) => Qe(h.timestamp, n)), m = Je(l, t);
    for (const [h, x] of m) a.push({ period: h, wikiSlug: s.wikiSlug, ioType: s.ioType, itemName: s.itemName, qtyPerCompletion: s.qtyPerCompletion, price: x.price, volume: x.volume });
  }
  return a.sort((s, i) => s.period.localeCompare(i.period)), a;
}
const S = "other", Ze = "Other", me = 10;
function es(o, t) {
  return `${t}:${o}`;
}
function ss(o, t = me) {
  const n = o.slice(0, t).map((u) => ({ key: u.lineKey, label: u.itemName, priceKey: `${u.lineKey}__price`, volumeKey: `${u.lineKey}__volume`, lines: [u] })), c = o.slice(t);
  return c.length === 0 ? n : [...n, { key: S, label: `${Ze} (${c.length})`, priceKey: `${S}__price`, volumeKey: `${S}__volume`, lines: c }];
}
function ts(o, t, n) {
  const c = new Set(t.map((m) => m.lineKey)), u = o.filter((m) => c.has(es(m.wikiSlug, m.ioType)));
  let a = 0, s = false, i = 0, l = 0;
  for (const m of u) if (m.volume != null && (a += m.volume, s = true), m.price != null) {
    const h = m.qtyPerCompletion * n;
    h > 0 && (i += h * m.price, l += h);
  }
  return { price: l > 0 ? i / l : null, volume: s ? a : null };
}
function rs(o, t, n, c = me) {
  const u = ss(t, c), a = /* @__PURE__ */ new Map();
  for (const i of o) {
    const l = a.get(i.period) ?? [];
    l.push(i), a.set(i.period, l);
  }
  return { chartData: [...a.keys()].sort().map((i) => {
    const l = a.get(i) ?? [], m = { period: i };
    for (const h of u) {
      if (h.key === S) {
        const p = ts(l, h.lines, n);
        m[h.priceKey] = p.price, m[h.volumeKey] = p.volume;
        continue;
      }
      const x = h.lines[0], g = l.find((p) => p.wikiSlug === x.wikiSlug && p.ioType === x.ioType);
      m[h.priceKey] = (g == null ? void 0 : g.price) ?? null, m[h.volumeKey] = (g == null ? void 0 : g.volume) ?? null;
    }
    return m;
  }), series: u };
}
const os = 250;
function re(o) {
  const [t, n] = d.useState(() => /* @__PURE__ */ new Set());
  d.useEffect(() => {
    n(/* @__PURE__ */ new Set());
  }, [o]);
  function c(s) {
    n((i) => {
      const l = new Set(i);
      return l.has(s) ? l.delete(s) : l.add(s), l;
    });
  }
  function u(s, i) {
    n((l) => i.every((h) => h === s ? !l.has(h) : l.has(h)) ? /* @__PURE__ */ new Set() : new Set(i.filter((h) => h !== s)));
  }
  function a() {
    n(/* @__PURE__ */ new Set());
  }
  return { hiddenKeys: t, toggle: c, isolate: u, showAll: a };
}
function ns({ items: o, hiddenKeys: t, onToggle: n, onIsolate: c, onShowAll: u }) {
  const a = d.useRef(null), s = o.some((l) => t.has(l.key));
  d.useEffect(() => () => {
    a.current != null && window.clearTimeout(a.current);
  }, []);
  function i(l) {
    if (a.current != null) {
      window.clearTimeout(a.current), a.current = null, c(l);
      return;
    }
    a.current = window.setTimeout(() => {
      a.current = null, n(l);
    }, os);
  }
  return o.length === 0 ? null : e.jsxs("div", { className: "osrs-mmg__chart-legend-wrap", children: [e.jsx("ul", { className: "osrs-mmg__chart-legend", children: o.map((l) => {
    const m = t.has(l.key);
    return e.jsx("li", { children: e.jsxs("button", { type: "button", className: m ? "osrs-mmg__chart-legend-item is-hidden" : "osrs-mmg__chart-legend-item", title: m ? "Click to show" : "Click to hide \xB7 double-click to isolate", onClick: () => i(l.key), children: [e.jsx("span", { className: l.dashed ? "osrs-mmg__chart-legend-swatch is-dashed" : "osrs-mmg__chart-legend-swatch", style: l.dashed ? { borderColor: l.color } : { background: l.color } }), l.label] }) }, l.key);
  }) }), s && u ? e.jsx("button", { type: "button", className: "osrs-mmg__chart-legend-reset", onClick: u, children: "Show all" }) : null] });
}
const as = ["day", "week", "month", "quarter", "year"], is = [{ id: "output", label: "Output" }, { id: "input", label: "Input" }];
function B(o, t) {
  return t === S ? "#57606a" : w.colors[o % w.colors.length];
}
function oe(o) {
  return o >= 1e6 ? `${(o / 1e6).toFixed(1)}M` : o >= 1e3 ? `${Math.round(o / 1e3)}k` : String(Math.round(o));
}
function ls({ active: o, payload: t, label: n, period: c, formatValue: u }) {
  if (!o || !(t == null ? void 0 : t.length) || n == null) return null;
  const a = t.map((s) => {
    const i = typeof s.value == "number" ? s.value : Number(s.value);
    return { key: String(s.dataKey ?? s.name ?? ""), name: String(s.name ?? ""), color: s.color, value: i };
  }).filter((s) => s.key && Number.isFinite(s.value)).sort((s, i) => i.value - s.value);
  return a.length === 0 ? null : e.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: U.contentStyle, children: [e.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: Ke(String(n), c) }), e.jsx("ul", { className: "osrs-mmg__chart-tooltip-list", children: a.map((s) => e.jsxs("li", { className: "osrs-mmg__chart-tooltip-value", style: { color: s.color }, children: [s.name, ": ", u(s.value)] }, s.key)) })] });
}
function ne({ title: o, data: t, period: n, series: c, valueKey: u, yTickFormatter: a, formatValue: s, hiddenKeys: i, legendItems: l, onToggle: m, onIsolate: h, onShowAll: x, height: g }) {
  return e.jsxs("div", { className: "osrs-mmg__chart", children: [e.jsx("h4", { className: "osrs-mmg__chart-title", children: o }), e.jsx(be, { width: "100%", height: g, children: e.jsxs(ke, { data: t, margin: we, children: [e.jsx(Ne, { strokeDasharray: "3 3", stroke: w.grid }), e.jsx(Se, { dataKey: "period", tick: Z, stroke: w.axis, ...Te(n) }), e.jsx(Ce, { tick: Z, stroke: w.axis, tickFormatter: a }), e.jsx(Pe, { shared: true, cursor: { stroke: w.axis, strokeDasharray: "3 3" }, content: ({ active: p, payload: v, label: f }) => e.jsx(ls, { active: p, payload: v, label: f, period: n, formatValue: s }), contentStyle: U.contentStyle, labelStyle: U.labelStyle }), c.map((p, v) => {
    const f = p[u];
    return e.jsx(Ee, { type: "monotone", dataKey: f, name: p.label, stroke: B(v, p.key), connectNulls: true, dot: false, activeDot: { r: 4 }, hide: i.has(f), legendType: "none" }, f);
  })] }) }), e.jsx(ns, { items: l, hiddenKeys: i, onToggle: m, onIsolate: h, onShowAll: x })] });
}
function cs({ methodId: o, guide: t, kph: n }) {
  const [c, u] = d.useState(true), [a, s] = d.useState("output"), [i, l] = d.useState("week"), [m, h] = d.useState(true), [x, g] = d.useState(""), [p, v] = d.useState(""), [f, M] = d.useState(null), [H, D] = d.useState([]), [L, q] = d.useState(false), [I, V] = d.useState(null), [ue, Y] = d.useState(false), T = re(`${o}:${a}:price`), C = re(`${o}:${a}:volume`), P = d.useMemo(() => Oe(t, n, a), [t, n, a]), de = d.useMemo(() => {
    const r = ie(t, n);
    return a === "input" ? r.inputTotal : r.outputTotal;
  }, [t, n, a]), G = d.useMemo(() => {
    const r = x || (f == null ? void 0 : f.min), _ = p || (f == null ? void 0 : f.max);
    if (!(!r || !_ || r > _) && !(f && r === f.min && _ === f.max)) return { from: r, to: _ };
  }, [x, p, f]);
  d.useEffect(() => {
    g(""), v(""), M(null);
  }, [o]), d.useEffect(() => {
    if (!c) return;
    let r = false;
    async function _() {
      q(true), V(null);
      try {
        if (await xe()) {
          const [$, b] = await Promise.all([je(o, i, G), f ? Promise.resolve(f) : ye(o)]);
          r || (D($), Y(false), b && M(b));
        } else {
          const $ = await ve(o), b = await ze($, i, G);
          if (!r && (D(b), Y(true), !f && b.length > 0)) {
            const F = [...new Set(b.map((pe) => pe.period))].sort();
            M({ min: F[0], max: F[F.length - 1] });
          }
        }
      } catch (j) {
        r || (D([]), V(j instanceof Error ? j.message : String(j)));
      } finally {
        r || q(false);
      }
    }
    return _(), () => {
      r = true;
    };
  }, [c, o, i, G]);
  const { chartData: Q, series: y } = d.useMemo(() => rs(H, P, n), [H, P, n]), E = d.useMemo(() => [...Q].sort((r, _) => _e(String(r.period), String(_.period))), [Q]), R = d.useMemo(() => y.map((r, _) => ({ key: r.priceKey, label: r.label, color: B(_, r.key) })), [y]), O = d.useMemo(() => y.map((r, _) => ({ key: r.volumeKey, label: r.label, color: B(_, r.key) })), [y]), he = d.useMemo(() => R.map((r) => r.key), [R]), ge = d.useMemo(() => O.map((r) => r.key), [O]), W = E.some((r) => y.some((_) => {
    const j = r[_.priceKey];
    return typeof j == "number" && Number.isFinite(j);
  })), A = E.some((r) => y.some((_) => {
    const j = r[_.volumeKey];
    return typeof j == "number" && Number.isFinite(j);
  })), X = W || A, J = a === "output" ? "output" : "input";
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends osrs-mmg__item-breakdown", children: [e.jsxs("div", { className: "osrs-mmg__trends-header", children: [e.jsx("h3", { children: "Item breakdown" }), e.jsxs("div", { className: "osrs-mmg__breakdown-toggles", children: [e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: c, onChange: (r) => u(r.target.checked) }), "Show item breakdown"] }), e.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [e.jsx("input", { type: "checkbox", checked: m, onChange: (r) => h(r.target.checked) }), "GE volume"] })] })] }), c ? e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "osrs-mmg__tabs", role: "tablist", "aria-label": "Item breakdown type", children: is.map((r) => e.jsx("button", { type: "button", role: "tab", "aria-selected": r.id === a, className: r.id === a ? "osrs-mmg__tab is-active" : "osrs-mmg__tab", onClick: () => s(r.id), children: r.label }, r.id)) }), e.jsxs("p", { className: "osrs-mmg__muted osrs-mmg__breakdown-intro", children: ["All ", J, " items, sorted by unit cost. Charts plot the top 10 plus Other. Hover a date to see every visible line. Click a legend item to hide it; double-click to isolate.", ue ? e.jsxs(e.Fragment, { children: [" ", "Charts use live GE timeseries (~1 year). Full history back to 2020 is in the Kaggle dataset."] }) : null] }), P.length === 0 ? e.jsxs("p", { className: "osrs-mmg__muted", children: ["No ", J, " items for this method."] }) : e.jsx("div", { className: "osrs-mmg__breakdown-table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--compact", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Item" }), e.jsx("th", { children: "Unit cost" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "%" }), e.jsx("th", { children: "Qty/h" })] }) }), e.jsx("tbody", { children: P.map((r) => e.jsxs("tr", { children: [e.jsx("td", { children: r.itemName }), e.jsx("td", { children: le(r) }), e.jsx("td", { children: N(r.gpPerHour) }), e.jsx("td", { children: ce(r.gpPerHour, de) }), e.jsx("td", { children: r.qtyPerHour.toLocaleString("en-GB", { maximumFractionDigits: 2 }) })] }, r.lineKey)) })] }) }), e.jsxs("div", { className: "osrs-mmg__period-row", children: [as.map((r) => e.jsx("button", { type: "button", className: r === i ? "is-active" : "", onClick: () => l(r), children: r }, r)), e.jsxs("div", { className: "osrs-mmg__date-range", children: [e.jsxs("label", { className: "osrs-mmg__field", children: ["From", e.jsx("input", { type: "date", min: f == null ? void 0 : f.min, max: p || (f == null ? void 0 : f.max), value: x || (f == null ? void 0 : f.min) || "", onChange: (r) => g(r.target.value) })] }), e.jsxs("label", { className: "osrs-mmg__field", children: ["To", e.jsx("input", { type: "date", min: x || (f == null ? void 0 : f.min), max: f == null ? void 0 : f.max, value: p || (f == null ? void 0 : f.max) || "", onChange: (r) => v(r.target.value) })] })] })] }), L ? e.jsx("p", { className: "osrs-mmg__muted", children: "Loading item charts\u2026" }) : null, I ? e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: I }) : null, !L && X ? e.jsxs("div", { className: "osrs-mmg__chart-stack", children: [W ? e.jsx(ne, { title: "GE price", data: E, period: i, series: y, valueKey: "priceKey", yTickFormatter: (r) => Ae(r), formatValue: N, hiddenKeys: T.hiddenKeys, legendItems: R, onToggle: T.toggle, onIsolate: (r) => T.isolate(r, he), onShowAll: T.showAll, height: 360 }) : e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }), m && A ? e.jsx(ne, { title: "GE volume", data: E, period: i, series: y, valueKey: "volumeKey", yTickFormatter: oe, formatValue: oe, hiddenKeys: C.hiddenKeys, legendItems: O, onToggle: C.toggle, onIsolate: (r) => C.isolate(r, ge), onShowAll: C.showAll, height: 300 }) : null, m && !A ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE volume history available for these items." }) : null] }) : null, !L && !I && !X ? e.jsx("p", { className: "osrs-mmg__muted", children: "No GE price history available for these items." }) : null] }) : null] });
}
function ae({ title: o, lines: t, sideTotal: n }) {
  return e.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__panel--lines", children: [e.jsx("h3", { children: o }), e.jsxs("table", { className: "osrs-mmg__table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Qty/h" }), e.jsx("th", { children: "Item" }), e.jsx("th", { children: "Unit cost" }), e.jsx("th", { children: "GP/h" }), e.jsx("th", { children: "%" })] }) }), e.jsx("tbody", { children: t.map((c) => e.jsxs("tr", { children: [e.jsxs("td", { children: [Be(c.qtyPerHour), " \xD7"] }), e.jsx("td", { children: c.itemName }), e.jsx("td", { children: le(c) }), e.jsx("td", { children: N(c.gpPerHour) }), e.jsx("td", { children: ce(c.gpPerHour, n) })] }, c.wikiSlug)) })] })] });
}
function ps() {
  const { methodId: o } = fe(), t = Me(), [n, c] = d.useState(null), [u, a] = d.useState(null);
  d.useEffect(() => {
    if (o) {
      if (!K()) {
        const g = ee.find((p) => p.id === o) ?? ee[0] ?? null;
        c(g);
        return;
      }
      t.ready && De(o).then((g) => {
        if (!g) throw new Error("Guide not found in dataset");
        c(g), a(null);
      }).catch((g) => a(g instanceof Error ? g.message : String(g)));
    }
  }, [o, t.ready]);
  const s = n, [i, l] = d.useState(1);
  d.useEffect(() => {
    s && l($e(s.id, s.defaultKph));
  }, [s]);
  const m = d.useMemo(() => s ? ie(s, i) : null, [s, i]);
  function h(g) {
    !s || !Number.isFinite(g) || g < 0 || (l(g), te(s.id, g));
  }
  function x() {
    s && (l(s.defaultKph), te(s.id, s.defaultKph));
  }
  return K() && t.loading ? e.jsx("div", { className: "osrs-mmg", children: e.jsx(se, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, loadPhase: t.loadPhase, downloadProgress: t.downloadProgress, onReload: t.reload }) }) : u ? e.jsxs("div", { className: "osrs-mmg", children: [e.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: u }), e.jsx(z, { to: "/osrs-mmg", children: "Back to rankings" })] }) : !s || !m ? e.jsx("div", { className: "osrs-mmg", children: e.jsx("p", { children: "Loading guide\u2026" }) }) : e.jsxs("div", { className: "osrs-mmg osrs-mmg--calculator", children: [e.jsxs("header", { className: "osrs-mmg__header", children: [e.jsx("p", { children: e.jsx(z, { to: "/osrs-mmg", children: "\u2190 Rankings" }) }), e.jsx("h1", { children: Le(s.methodName) }), e.jsx("p", { children: "Adjust completions per hour using the same math as the OSRS Wiki mmgkc gadget." })] }), K() ? e.jsx(se, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, loadPhase: t.loadPhase, downloadProgress: t.downloadProgress, onReload: t.reload }) : null, e.jsxs("div", { className: "osrs-mmg__kph-row", children: [e.jsxs("div", { className: "osrs-mmg__kph-controls", children: [e.jsxs("label", { className: "osrs-mmg__field", children: [s.kphUnitName, e.jsx("input", { type: "number", min: 0, step: "any", value: i, onChange: (g) => h(Number(g.target.value)) })] }), e.jsx("button", { type: "button", onClick: x, children: "Reset" })] }), e.jsxs("div", { className: "osrs-mmg__field osrs-mmg__kph-skills", children: [e.jsx("span", { children: "Skill requirements" }), e.jsx(Ie, { skills: s.skillRequirements, compact: true })] })] }), e.jsxs("section", { className: "osrs-mmg__summary", children: [e.jsxs("div", { className: m.profit >= 0 ? "osrs-mmg__metric osrs-mmg__metric--profit-up" : "osrs-mmg__metric osrs-mmg__metric--profit-down", children: [e.jsx("span", { children: "Profit" }), e.jsx("strong", { children: N(m.profit) })] }), e.jsxs("div", { className: "osrs-mmg__metric osrs-mmg__metric--inputs", children: [e.jsx("span", { children: "Inputs" }), e.jsx("strong", { children: N(m.inputTotal) })] }), e.jsxs("div", { className: "osrs-mmg__metric osrs-mmg__metric--outputs", children: [e.jsx("span", { children: "Outputs" }), e.jsx("strong", { children: N(m.outputTotal) })] }), e.jsxs("div", { className: `osrs-mmg__metric osrs-mmg__metric--margin-${Ue(m.margin)}`, children: [e.jsx("span", { children: "Margin" }), e.jsx("strong", { children: Fe(m.margin) })] })] }), e.jsxs("div", { className: "osrs-mmg__columns", children: [e.jsx(ae, { title: "Inputs", lines: m.inputs, sideTotal: m.inputTotal }), e.jsx(ae, { title: "Outputs", lines: m.outputs, sideTotal: m.outputTotal })] }), s.assumptionText ? e.jsx("p", { className: "osrs-mmg__assumption", children: Ge(s.assumptionText).map((g, p) => g.metric ? e.jsx("strong", { className: "osrs-mmg__assumption-metric", children: g.text }, p) : e.jsx("span", { children: g.text }, p)) }) : null, K() && t.ready ? e.jsxs(e.Fragment, { children: [e.jsx(Re, { mode: "single", methodId: s.id, methodName: s.methodName }), e.jsx(cs, { methodId: s.id, guide: s, kph: i })] }) : null] });
}
export {
  ps as default
};
