var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as a, j as e, t as k, L as oe } from "./index-N1w0gYNI.js";
import { u as Se, i as q, f as Re, a as we, r as ee, s as se, O as Me, p as Ce, b as Ee, c as Le, d as te, e as ne, g as Pe, S as le } from "./useOsrsData-CxOgbXY4.js";
import { e as De, a as Oe, i as Ae, b as Te, r as U, O as Ie, s as Ue, E as Fe, l as I, g as F, c as re, d as Be, f as We, n as V, m as Ke, h as Ge, M as Y, j as S, k as qe, o as Ve, p as ie, q as Ye, t as $e, u as ze, v as Je, w as Qe, x as Xe } from "./skillIconUrl-DBpzbTaR.js";
import { r as He, l as Ze, W as es } from "./womClient-DilnkhT5.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const ss = 100;
class ts {
  constructor() {
    __publicField(this, "stack", []);
  }
  push(t) {
    this.stack.push(t), this.stack.length > ss && this.stack.shift();
  }
  pop() {
    return this.stack.pop() ?? null;
  }
  clear() {
    this.stack = [];
  }
  get canUndo() {
    return this.stack.length > 0;
  }
}
function ns({ onImported: n }) {
  const t = a.useRef(null);
  function d() {
    const _ = De(), u = new Blob([JSON.stringify(_, null, 2)], { type: "application/json" }), m = URL.createObjectURL(u), c = document.createElement("a");
    c.href = m, c.download = "osrs-mmg-profiles-backup.json", c.click(), URL.revokeObjectURL(m), k.success("Profiles exported");
  }
  function j() {
    const _ = Oe(), u = new Blob([JSON.stringify(_, null, 2)], { type: "application/json" }), m = URL.createObjectURL(u), c = document.createElement("a");
    c.href = m, c.download = "osrs-mmg-active-profile.json", c.click(), URL.revokeObjectURL(m), k.success("Profile exported");
  }
  async function f(_) {
    var _a;
    const u = (_a = _.target.files) == null ? void 0 : _a[0];
    if (_.target.value = "", !!u) try {
      const m = await u.text(), c = JSON.parse(m);
      if (c.version === 2) Ae(c);
      else if (c.version === 1) Te(c);
      else throw new Error("Unsupported backup version");
      n(), k.success("Imported");
    } catch (m) {
      k.error(m instanceof Error ? m.message : "Import failed");
    }
  }
  return e.jsxs(e.Fragment, { children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: d, children: "Export all" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: j, children: "Export" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => {
    var _a;
    return (_a = t.current) == null ? void 0 : _a.click();
  }, children: "Import" }), e.jsx("input", { ref: t, type: "file", accept: "application/json", hidden: true, onChange: f })] });
}
function rs(n) {
  return new Date(n).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}
function as({ profiles: n, activeProfile: t, hasUnsavedChanges: d, maxProfiles: j, onSelectProfile: f, onCreateProfile: _, onDeleteProfile: u }) {
  const [m, c] = a.useState(false), x = a.useRef(null);
  return a.useEffect(() => {
    if (!m) return;
    function o(g) {
      var _a;
      ((_a = x.current) == null ? void 0 : _a.contains(g.target)) || c(false);
    }
    return window.addEventListener("mousedown", o), () => window.removeEventListener("mousedown", o);
  }, [m]), e.jsxs("div", { className: "osrs-mmg__profile-menu", ref: x, children: [e.jsxs("button", { type: "button", className: "osrs-mmg__profile-trigger", "aria-expanded": m, onClick: () => c((o) => !o), children: [e.jsx("span", { className: "osrs-mmg__profile-trigger-name", children: t.name }), d ? e.jsx("span", { className: "osrs-mmg__unsaved-dot", "aria-label": "Unsaved changes" }) : null, e.jsx("span", { className: "osrs-mmg__profile-trigger-caret", "aria-hidden": true, children: "\u25BE" })] }), m ? e.jsxs("div", { className: "osrs-mmg__profile-dropdown", children: [e.jsxs("div", { className: "osrs-mmg__profile-dropdown-meta", children: [e.jsxs("span", { children: ["v", t.save_version] }), e.jsx("span", { children: rs(t.updated_at) })] }), e.jsx("div", { className: "osrs-mmg__profile-list", children: n.map((o) => e.jsxs("button", { type: "button", className: o.id === t.id ? "osrs-mmg__profile-option is-active" : "osrs-mmg__profile-option", onClick: () => {
    f(o.id), c(false);
  }, children: [e.jsx("span", { children: o.name }), e.jsxs("span", { className: "osrs-mmg__profile-option-meta", children: ["v", o.save_version] })] }, o.id)) }), e.jsxs("div", { className: "osrs-mmg__profile-dropdown-actions", children: [e.jsx("button", { type: "button", disabled: n.length >= j, onClick: _, children: "New" }), e.jsx("button", { type: "button", disabled: n.length <= 1, onClick: u, children: "Delete" })] })] }) : null] });
}
function ae(n, t) {
  return n.includes(t) ? n.filter((d) => d !== t) : [...n, t];
}
function os(n) {
  return n ? new Date(n).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }) : "unknown date";
}
function ls({ filters: n, womPlayer: t, methodTypeOptions: d, intensityOptions: j, onChange: f, onWomPlayerLoaded: _ }) {
  const [u, m] = a.useState(false), [c, x] = a.useState(""), [o, g] = a.useState(false), P = a.useRef(null), R = U(n);
  a.useEffect(() => {
    (t == null ? void 0 : t.displayName) && !c && x(t.displayName);
  }, [t, c]), a.useEffect(() => {
    if (!u) return;
    function l(p) {
      var _a;
      ((_a = P.current) == null ? void 0 : _a.contains(p.target)) || m(false);
    }
    return window.addEventListener("mousedown", l), () => window.removeEventListener("mousedown", l);
  }, [u]);
  function w(l, p) {
    const h = { ...n.skillLevels };
    !Number.isFinite(p) || p <= 0 ? delete h[l] : h[l] = Math.min(99, Math.max(1, Math.floor(p))), f({ ...n, skillLevels: h });
  }
  async function D(l) {
    const p = c.trim() || (t == null ? void 0 : t.username) || "";
    if (!p) {
      k.error("Enter a RuneScape name first");
      return;
    }
    g(true);
    try {
      const h = l === "refresh" ? await He(p) : await Ze(p);
      _(h.profile), x(h.profile.displayName), k.success(l === "refresh" ? "Character refreshed" : "Skill levels applied from WOM");
    } catch (h) {
      const B = h instanceof es || h instanceof Error ? h.message : "WOM lookup failed";
      k.error(B);
    } finally {
      g(false);
    }
  }
  return e.jsxs("div", { className: "osrs-mmg__filter-menu", ref: P, children: [e.jsxs("button", { type: "button", className: R || t ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", "aria-expanded": u, onClick: () => m((l) => !l), children: ["Filter", R || t ? " \u2022" : ""] }), u ? e.jsxs("div", { className: "osrs-mmg__filter-popout", children: [e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Character (Wise Old Man)" }), e.jsxs("label", { className: "osrs-mmg__field", children: ["RuneScape name", e.jsx("input", { className: "osrs-mmg__search-input", type: "text", maxLength: 12, placeholder: "Lookup skills from WOM", value: c, disabled: o, onChange: (l) => x(l.target.value) })] }), e.jsxs("div", { className: "osrs-mmg__filter-wom-actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: o || !c.trim(), onClick: () => void D("load"), children: o ? "Looking up\u2026" : "Lookup" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: o || !c.trim() && !t, onClick: () => void D("refresh"), children: "Refresh" }), e.jsx(oe, { className: "osrs-mmg__filter-link", to: "/osrs-mmg/c", children: "Character page" })] }), t ? e.jsxs("p", { className: "osrs-mmg__filter-hint", children: [t.displayName, " (", t.playerType, ") \u2014 snapshot", " ", os(t.snapshotCreatedAt ?? t.fetchedAt)] }) : null] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Method type" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: d.map((l) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: n.methodTypes.includes(l), onChange: () => f({ ...n, methodTypes: ae(n.methodTypes, l) }) }), e.jsx("span", { children: l })] }, l)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Intensity" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: j.map((l) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: n.intensities.includes(l), onChange: () => f({ ...n, intensities: ae(n.intensities, l) }) }), e.jsx("span", { children: l })] }, l)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Your skill levels" }), e.jsx("p", { className: "osrs-mmg__filter-hint", children: "Methods must meet every listed requirement at or below your level." }), e.jsx("div", { className: "osrs-mmg__filter-skills-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__filter-skills-table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Skill" }), e.jsx("th", { children: "Level" })] }) }), e.jsx("tbody", { children: Ie.map((l) => e.jsxs("tr", { children: [e.jsx("td", { children: e.jsxs("span", { className: "osrs-mmg__filter-skill-name", children: [e.jsx("img", { src: Ue(l), alt: "", width: 20, height: 20 }), l] }) }), e.jsx("td", { children: e.jsx("input", { className: "osrs-mmg__filter-level-input", type: "number", min: 1, max: 99, placeholder: "\u2014", value: n.skillLevels[l] ?? "", onChange: (p) => {
    const h = p.target.value.trim();
    w(l, h === "" ? 0 : Number(h));
  } }) })] }, l)) })] }) })] }), e.jsxs("div", { className: "osrs-mmg__filter-actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !R && !t, onClick: () => f(Fe), children: "Clear filters" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", onClick: () => m(false), children: "Done" })] })] }) : null] });
}
function is(n) {
  const t = {};
  for (const d of n.skills) d.level > 0 && (t[d.skillKey] = d.level);
  return t;
}
function cs() {
  return Object.fromEntries(le.map((n) => [n.id, n.skillRequirements]));
}
function ms() {
  const n = { marlin: ["Skilling", "Fishing"], tob: ["Combat", "High"], smithing: ["Skilling", "Smithing"], mokhaiotl: ["Combat", "Mid"] };
  return le.map((t, d) => ({ method_id: t.id, method_name: t.methodName, method_url: t.methodUrl, categories: n[t.id] ?? ["Skilling"], intensity: "", is_members: null, default_kph: t.defaultKph, completions_unit_name: t.kphUnitName, profit_pk: t.outputTotalPk - t.inputTotalPk, profit_ph: t.outputTotalPh - t.inputTotalPh, profit_linear_approx: false, wiki_rank: d + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: t.outputTotalPk * t.defaultKph + t.outputTotalPh - (t.inputTotalPk * t.defaultKph + t.inputTotalPh) }));
}
function ds() {
  const n = F(), t = ie(n);
  return { profile: n, savedDraft: S(t), draft: t };
}
function ks() {
  const n = Se(), t = a.useRef(new ts()), [d, j] = a.useState([]), [f, _] = a.useState(() => I()), [u, m] = a.useState(() => F()), [c, x] = a.useState(() => re()), [o, g] = a.useState(() => re()), [P, R] = a.useState(0), [w, D] = a.useState(20), [l, p] = a.useState(""), [h, B] = a.useState(false), [W, $] = a.useState({});
  function M() {
    _(I()), m(F());
  }
  function C(s = true) {
    const { profile: r, savedDraft: i, draft: y } = ds();
    m(r), x(i), g(y), s && t.current.clear();
  }
  a.useEffect(() => {
    function s() {
      const r = F().wom_player;
      g((i) => {
        var _a;
        return ((_a = i.wom_player) == null ? void 0 : _a.fetchedAt) === (r == null ? void 0 : r.fetchedAt) ? i : { ...i, wom_player: r };
      }), x((i) => {
        var _a;
        return ((_a = i.wom_player) == null ? void 0 : _a.fetchedAt) === (r == null ? void 0 : r.fetchedAt) ? i : { ...i, wom_player: r };
      });
    }
    return window.addEventListener("focus", s), () => window.removeEventListener("focus", s);
  }, []), a.useEffect(() => {
    if (!q()) {
      C(), j(ms()), $(cs()), M();
      return;
    }
    n.ready && Promise.all([Re(), we()]).then(([s, r]) => {
      C(), j(s), $(r), M();
    });
  }, [n.ready, P]), a.useEffect(() => {
    function s(r) {
      if (!r.altKey || r.key.toLowerCase() !== "z") return;
      r.preventDefault();
      const i = t.current.pop();
      i && g(S(i));
    }
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, []);
  const b = a.useMemo(() => Be(o), [o]), z = a.useMemo(() => ee(d, o.kph_by_method_id, b), [d, o.kph_by_method_id, b]), J = a.useMemo(() => new Map(z.map((s, r) => [s.method_id, r + 1])), [z]), N = l.trim().toLowerCase(), Q = a.useMemo(() => We(d), [d]), v = a.useMemo(() => V(o.rankings_filters), [o.rankings_filters]), E = a.useMemo(() => d.filter((s) => N && !s.method_name.toLowerCase().includes(N) ? false : Ke(s, W[s.method_id] ?? [], v)), [d, N, W, v]), O = a.useMemo(() => {
    const s = h ? E.filter((i) => !b.has(i.method_id)) : E, r = se(s, o.kph_by_method_id);
    return N || U(v) ? r : r.slice(0, w);
  }, [E, h, b, N, v, w, o.kph_by_method_id]), ce = a.useMemo(() => {
    if (!h) return J;
    const s = se(E.filter((r) => !b.has(r.method_id)), o.kph_by_method_id);
    return new Map(s.map((r, i) => [r.method_id, i + 1]));
  }, [h, E, b, o.kph_by_method_id, J]), A = a.useMemo(() => O.map((s) => s.method_id), [O]), X = A.length > 0 && A.every((s) => !b.has(s)), me = A.some((s) => !b.has(s)), L = a.useMemo(() => !Ge(o, c), [o, c]);
  function de() {
    t.current.push(S(o));
  }
  function T(s) {
    g((r) => (t.current.push(S(r)), s(r)));
  }
  function he(s, r) {
    g((i) => qe(i, s, r));
  }
  function ue() {
    de();
  }
  function _e(s, r) {
    T((i) => Qe(i, s, r));
  }
  function pe(s) {
    T((r) => Xe(r, A, s));
  }
  function fe() {
    g(S(c)), t.current.clear();
  }
  function ge() {
    const s = Ve(o), r = ie(s);
    x(r), g(S(r)), m(s), _(I()), t.current.clear(), k.success(`Saved v${s.save_version}`);
  }
  function H(s) {
    return L ? window.confirm(s) : true;
  }
  function ke(s) {
    s !== u.id && H("Discard unsaved changes and switch profile?") && (Ye(s), C(), M());
  }
  function xe() {
    if (f.length >= Y) {
      k.error(`Maximum of ${Y} profiles reached`);
      return;
    }
    const s = window.prompt("Profile name");
    (s == null ? void 0 : s.trim()) && H("Discard unsaved changes and create a new profile?") && ($e(s.trim()), C(), M(), k.success("Profile created"));
  }
  function be() {
    if (f.length <= 1) {
      k.error("At least one profile is required");
      return;
    }
    const s = L ? `Delete profile "${u.name}"? Unsaved changes will be lost.` : `Delete profile "${u.name}"?`;
    window.confirm(s) && (ze(u.id), C(), M(), k.success("Profile deleted"));
  }
  const je = a.useMemo(() => ee(d, o.kph_by_method_id, b).slice(0, 10), [d, o.kph_by_method_id, b]);
  function Ne(s) {
    T((r) => ({ ...r, rankings_filters: V(s) }));
  }
  function ve(s) {
    const r = Je(s);
    m(r), _(I()), x((i) => ({ ...i, wom_player: s })), T((i) => ({ ...i, wom_player: s, rankings_filters: { ...V(i.rankings_filters), skillLevels: is(s) } }));
  }
  const Z = N || U(v) ? O.length : null;
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header osrs-mmg__header--compact", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust kph, toggle methods, then Save. Click a method for the calculator." })] }), q() ? e.jsx(Me, { loading: n.loading, error: n.error, manifest: n.manifest, fromCache: n.fromCache, loadPhase: n.loadPhase, downloadProgress: n.downloadProgress, onReload: n.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsxs("div", { className: "osrs-mmg__controls", children: [e.jsx(as, { profiles: f, activeProfile: u, hasUnsavedChanges: L, maxProfiles: Y, onSelectProfile: ke, onCreateProfile: xe, onDeleteProfile: be }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: !L, onClick: ge, children: "Save" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !L, onClick: fe, children: "Discard" }), e.jsxs("div", { className: "osrs-mmg__controls-grow", children: [e.jsx("input", { className: "osrs-mmg__search-input", type: "search", value: l, placeholder: "Search methods\u2026", onChange: (s) => p(s.target.value) }), Z != null ? e.jsx("span", { className: "osrs-mmg__search-count", children: Z }) : null] }), e.jsxs("label", { className: "osrs-mmg__topn-field osrs-mmg__topn-field--compact", children: ["Top", e.jsx("input", { className: "osrs-mmg__topn-input", type: "number", min: 1, max: 500, value: w, disabled: N.length > 0 || U(v), onChange: (s) => {
    const r = Math.max(1, Math.min(500, Number(s.target.value) || 1));
    D(r);
  } })] }), e.jsx("button", { type: "button", className: h ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => B((s) => !s), children: "Re-rank" }), e.jsx(ls, { filters: v, womPlayer: o.wom_player, methodTypeOptions: Q.methodTypes, intensityOptions: Q.intensities, onChange: Ne, onWomPlayerLoaded: ve }), e.jsx(ns, { onImported: () => R((s) => s + 1) })] }), e.jsx("div", { className: "osrs-mmg__table-scroll osrs-mmg__table-scroll--wide", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { className: "osrs-mmg__rank-bulk-head osrs-mmg__toggle-cell", children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: X, ref: (s) => {
    s && (s.indeterminate = me && !X);
  }, onChange: (s) => pe(s.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: "Toggle all visible methods in rankings" })] }) }), e.jsx("th", { className: "osrs-mmg__rank-cell", children: "#" }), e.jsx("th", { className: "osrs-mmg__method-cell", children: "Method" }), e.jsx("th", { className: "osrs-mmg__type-cell", children: "Type" }), e.jsx("th", { className: "osrs-mmg__skills-cell", children: "Skills" }), e.jsx("th", { className: "osrs-mmg__wiki-gp-cell", children: "Wiki GP/h" }), e.jsx("th", { className: "osrs-mmg__kph-cell", children: "Your kph" }), e.jsx("th", { className: "osrs-mmg__adjusted-gp-cell", children: "Adjusted GP/h" }), e.jsx("th", { className: "osrs-mmg__members-cell", children: "Members" })] }) }), e.jsx("tbody", { children: O.map((s) => {
    const r = o.kph_by_method_id[s.method_id] ?? s.default_kph, i = Ce(s, r), y = b.has(s.method_id), ye = ce.get(s.method_id), K = h || !y ? ye : null;
    return e.jsxs("tr", { className: y ? "osrs-mmg__table-row--disabled" : void 0, children: [e.jsx("td", { className: "osrs-mmg__toggle-cell", children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: !y, onChange: (G) => _e(s.method_id, G.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: y ? "Excluded from rankings" : "Included in rankings" })] }) }), e.jsx("td", { className: "osrs-mmg__rank-cell", children: K ?? "\u2014" }), e.jsxs("td", { className: "osrs-mmg__method-cell", children: [K != null ? e.jsxs("span", { className: "osrs-mmg__method-rank", "aria-hidden": "true", children: [K, ".", " "] }) : null, e.jsx(oe, { to: `/osrs-mmg/m/${s.method_id}`, children: s.method_name })] }), e.jsx("td", { className: "osrs-mmg__type-cell", children: Ee(s.categories) }), e.jsx("td", { className: "osrs-mmg__skills-cell", children: e.jsx(Le, { skills: W[s.method_id] ?? [], compact: true }) }), e.jsx("td", { className: "osrs-mmg__wiki-gp-cell", children: s.wiki_hourly_profit_gp != null ? e.jsxs(e.Fragment, { children: [e.jsx("span", { className: "osrs-mmg__gp-full", children: te(s.wiki_hourly_profit_gp) }), e.jsxs("span", { className: "osrs-mmg__gp-compact", children: [ne(s.wiki_hourly_profit_gp), " gp"] })] }) : "\u2014" }), e.jsxs("td", { className: "osrs-mmg__kph-cell", children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: r, title: s.completions_unit_name, onFocus: ue, onChange: (G) => he(s.method_id, Number(G.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: s.completions_unit_name })] }), e.jsxs("td", { className: "osrs-mmg__adjusted-gp-cell", children: [e.jsx("span", { className: "osrs-mmg__gp-full", children: te(i) }), e.jsxs("span", { className: "osrs-mmg__gp-compact", children: [ne(i), " gp"] })] }), e.jsx("td", { className: "osrs-mmg__members-cell", children: s.is_members ? "Yes" : s.is_members === false ? "No" : "\u2014" })] }, s.method_id);
  }) })] }) }), !q() || n.ready ? e.jsx(Pe, { mode: "topN", topMethods: je, topN: 10 }) : null] });
}
export {
  ks as default
};
