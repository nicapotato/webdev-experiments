var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as a, j as e, t as k, L as re } from "./index-BwsnQWqq.js";
import { u as ye, i as G, f as Ne, a as Se, r as Z, s as ee, O as Re, p as we, b as Me, c as Ce, d as se, e as Ee, S as ae } from "./useOsrsData-CmmHtFpF.js";
import { e as Le, a as De, i as Pe, b as Oe, r as U, O as Ae, s as Te, E as Ie, l as I, g as F, c as te, d as Ue, f as Fe, n as q, m as Be, h as We, M as V, j as S, k as Ke, o as Ge, p as oe, q as qe, t as Ve, u as Ye, v as $e, w as ze, x as Je } from "./skillIconUrl-DBpzbTaR.js";
import { r as Qe, l as Xe, W as He } from "./womClient-DilnkhT5.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const Ze = 100;
class es {
  constructor() {
    __publicField(this, "stack", []);
  }
  push(t) {
    this.stack.push(t), this.stack.length > Ze && this.stack.shift();
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
function ss({ onImported: n }) {
  const t = a.useRef(null);
  function d() {
    const p = Le(), u = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), m = URL.createObjectURL(u), l = document.createElement("a");
    l.href = m, l.download = "osrs-mmg-profiles-backup.json", l.click(), URL.revokeObjectURL(m), k.success("Profiles exported");
  }
  function j() {
    const p = De(), u = new Blob([JSON.stringify(p, null, 2)], { type: "application/json" }), m = URL.createObjectURL(u), l = document.createElement("a");
    l.href = m, l.download = "osrs-mmg-active-profile.json", l.click(), URL.revokeObjectURL(m), k.success("Profile exported");
  }
  async function _(p) {
    var _a;
    const u = (_a = p.target.files) == null ? void 0 : _a[0];
    if (p.target.value = "", !!u) try {
      const m = await u.text(), l = JSON.parse(m);
      if (l.version === 2) Pe(l);
      else if (l.version === 1) Oe(l);
      else throw new Error("Unsupported backup version");
      n(), k.success("Imported");
    } catch (m) {
      k.error(m instanceof Error ? m.message : "Import failed");
    }
  }
  return e.jsxs(e.Fragment, { children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: d, children: "Export all" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: j, children: "Export" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => {
    var _a;
    return (_a = t.current) == null ? void 0 : _a.click();
  }, children: "Import" }), e.jsx("input", { ref: t, type: "file", accept: "application/json", hidden: true, onChange: _ })] });
}
function ts(n) {
  return new Date(n).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}
function ns({ profiles: n, activeProfile: t, hasUnsavedChanges: d, maxProfiles: j, onSelectProfile: _, onCreateProfile: p, onDeleteProfile: u }) {
  const [m, l] = a.useState(false), x = a.useRef(null);
  return a.useEffect(() => {
    if (!m) return;
    function o(g) {
      var _a;
      ((_a = x.current) == null ? void 0 : _a.contains(g.target)) || l(false);
    }
    return window.addEventListener("mousedown", o), () => window.removeEventListener("mousedown", o);
  }, [m]), e.jsxs("div", { className: "osrs-mmg__profile-menu", ref: x, children: [e.jsxs("button", { type: "button", className: "osrs-mmg__profile-trigger", "aria-expanded": m, onClick: () => l((o) => !o), children: [e.jsx("span", { className: "osrs-mmg__profile-trigger-name", children: t.name }), d ? e.jsx("span", { className: "osrs-mmg__unsaved-dot", "aria-label": "Unsaved changes" }) : null, e.jsx("span", { className: "osrs-mmg__profile-trigger-caret", "aria-hidden": true, children: "\u25BE" })] }), m ? e.jsxs("div", { className: "osrs-mmg__profile-dropdown", children: [e.jsxs("div", { className: "osrs-mmg__profile-dropdown-meta", children: [e.jsxs("span", { children: ["v", t.save_version] }), e.jsx("span", { children: ts(t.updated_at) })] }), e.jsx("div", { className: "osrs-mmg__profile-list", children: n.map((o) => e.jsxs("button", { type: "button", className: o.id === t.id ? "osrs-mmg__profile-option is-active" : "osrs-mmg__profile-option", onClick: () => {
    _(o.id), l(false);
  }, children: [e.jsx("span", { children: o.name }), e.jsxs("span", { className: "osrs-mmg__profile-option-meta", children: ["v", o.save_version] })] }, o.id)) }), e.jsxs("div", { className: "osrs-mmg__profile-dropdown-actions", children: [e.jsx("button", { type: "button", disabled: n.length >= j, onClick: p, children: "New" }), e.jsx("button", { type: "button", disabled: n.length <= 1, onClick: u, children: "Delete" })] })] }) : null] });
}
function ne(n, t) {
  return n.includes(t) ? n.filter((d) => d !== t) : [...n, t];
}
function rs(n) {
  return n ? new Date(n).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }) : "unknown date";
}
function as({ filters: n, womPlayer: t, methodTypeOptions: d, intensityOptions: j, onChange: _, onWomPlayerLoaded: p }) {
  const [u, m] = a.useState(false), [l, x] = a.useState(""), [o, g] = a.useState(false), D = a.useRef(null), R = U(n);
  a.useEffect(() => {
    (t == null ? void 0 : t.displayName) && !l && x(t.displayName);
  }, [t, l]), a.useEffect(() => {
    if (!u) return;
    function i(f) {
      var _a;
      ((_a = D.current) == null ? void 0 : _a.contains(f.target)) || m(false);
    }
    return window.addEventListener("mousedown", i), () => window.removeEventListener("mousedown", i);
  }, [u]);
  function w(i, f) {
    const h = { ...n.skillLevels };
    !Number.isFinite(f) || f <= 0 ? delete h[i] : h[i] = Math.min(99, Math.max(1, Math.floor(f))), _({ ...n, skillLevels: h });
  }
  async function P(i) {
    const f = l.trim() || (t == null ? void 0 : t.username) || "";
    if (!f) {
      k.error("Enter a RuneScape name first");
      return;
    }
    g(true);
    try {
      const h = i === "refresh" ? await Qe(f) : await Xe(f);
      p(h.profile), x(h.profile.displayName), k.success(i === "refresh" ? "Character refreshed" : "Skill levels applied from WOM");
    } catch (h) {
      const B = h instanceof He || h instanceof Error ? h.message : "WOM lookup failed";
      k.error(B);
    } finally {
      g(false);
    }
  }
  return e.jsxs("div", { className: "osrs-mmg__filter-menu", ref: D, children: [e.jsxs("button", { type: "button", className: R || t ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", "aria-expanded": u, onClick: () => m((i) => !i), children: ["Filter", R || t ? " \u2022" : ""] }), u ? e.jsxs("div", { className: "osrs-mmg__filter-popout", children: [e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Character (Wise Old Man)" }), e.jsxs("label", { className: "osrs-mmg__field", children: ["RuneScape name", e.jsx("input", { className: "osrs-mmg__search-input", type: "text", maxLength: 12, placeholder: "Lookup skills from WOM", value: l, disabled: o, onChange: (i) => x(i.target.value) })] }), e.jsxs("div", { className: "osrs-mmg__filter-wom-actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: o || !l.trim(), onClick: () => void P("load"), children: o ? "Looking up\u2026" : "Lookup" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: o || !l.trim() && !t, onClick: () => void P("refresh"), children: "Refresh" }), e.jsx(re, { className: "osrs-mmg__filter-link", to: "/osrs-mmg/c", children: "Character page" })] }), t ? e.jsxs("p", { className: "osrs-mmg__filter-hint", children: [t.displayName, " (", t.playerType, ") \u2014 snapshot", " ", rs(t.snapshotCreatedAt ?? t.fetchedAt)] }) : null] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Method type" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: d.map((i) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: n.methodTypes.includes(i), onChange: () => _({ ...n, methodTypes: ne(n.methodTypes, i) }) }), e.jsx("span", { children: i })] }, i)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Intensity" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: j.map((i) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: n.intensities.includes(i), onChange: () => _({ ...n, intensities: ne(n.intensities, i) }) }), e.jsx("span", { children: i })] }, i)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Your skill levels" }), e.jsx("p", { className: "osrs-mmg__filter-hint", children: "Methods must meet every listed requirement at or below your level." }), e.jsx("div", { className: "osrs-mmg__filter-skills-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__filter-skills-table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Skill" }), e.jsx("th", { children: "Level" })] }) }), e.jsx("tbody", { children: Ae.map((i) => e.jsxs("tr", { children: [e.jsx("td", { children: e.jsxs("span", { className: "osrs-mmg__filter-skill-name", children: [e.jsx("img", { src: Te(i), alt: "", width: 20, height: 20 }), i] }) }), e.jsx("td", { children: e.jsx("input", { className: "osrs-mmg__filter-level-input", type: "number", min: 1, max: 99, placeholder: "\u2014", value: n.skillLevels[i] ?? "", onChange: (f) => {
    const h = f.target.value.trim();
    w(i, h === "" ? 0 : Number(h));
  } }) })] }, i)) })] }) })] }), e.jsxs("div", { className: "osrs-mmg__filter-actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !R && !t, onClick: () => _(Ie), children: "Clear filters" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", onClick: () => m(false), children: "Done" })] })] }) : null] });
}
function os(n) {
  const t = {};
  for (const d of n.skills) d.level > 0 && (t[d.skillKey] = d.level);
  return t;
}
function is() {
  return Object.fromEntries(ae.map((n) => [n.id, n.skillRequirements]));
}
function ls() {
  const n = { marlin: ["Skilling", "Fishing"], tob: ["Combat", "High"], smithing: ["Skilling", "Smithing"], mokhaiotl: ["Combat", "Mid"] };
  return ae.map((t, d) => ({ method_id: t.id, method_name: t.methodName, method_url: t.methodUrl, categories: n[t.id] ?? ["Skilling"], intensity: "", is_members: null, default_kph: t.defaultKph, completions_unit_name: t.kphUnitName, profit_pk: t.outputTotalPk - t.inputTotalPk, profit_ph: t.outputTotalPh - t.inputTotalPh, profit_linear_approx: false, wiki_rank: d + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: t.outputTotalPk * t.defaultKph + t.outputTotalPh - (t.inputTotalPk * t.defaultKph + t.inputTotalPh) }));
}
function cs() {
  const n = F(), t = oe(n);
  return { profile: n, savedDraft: S(t), draft: t };
}
function _s() {
  const n = ye(), t = a.useRef(new es()), [d, j] = a.useState([]), [_, p] = a.useState(() => I()), [u, m] = a.useState(() => F()), [l, x] = a.useState(() => te()), [o, g] = a.useState(() => te()), [D, R] = a.useState(0), [w, P] = a.useState(20), [i, f] = a.useState(""), [h, B] = a.useState(false), [W, Y] = a.useState({});
  function M() {
    p(I()), m(F());
  }
  function C(s = true) {
    const { profile: r, savedDraft: c, draft: N } = cs();
    m(r), x(c), g(N), s && t.current.clear();
  }
  a.useEffect(() => {
    function s() {
      const r = F().wom_player;
      g((c) => {
        var _a;
        return ((_a = c.wom_player) == null ? void 0 : _a.fetchedAt) === (r == null ? void 0 : r.fetchedAt) ? c : { ...c, wom_player: r };
      }), x((c) => {
        var _a;
        return ((_a = c.wom_player) == null ? void 0 : _a.fetchedAt) === (r == null ? void 0 : r.fetchedAt) ? c : { ...c, wom_player: r };
      });
    }
    return window.addEventListener("focus", s), () => window.removeEventListener("focus", s);
  }, []), a.useEffect(() => {
    if (!G()) {
      C(), j(ls()), Y(is()), M();
      return;
    }
    n.ready && Promise.all([Ne(), Se()]).then(([s, r]) => {
      C(), j(s), Y(r), M();
    });
  }, [n.ready, D]), a.useEffect(() => {
    function s(r) {
      if (!r.altKey || r.key.toLowerCase() !== "z") return;
      r.preventDefault();
      const c = t.current.pop();
      c && g(S(c));
    }
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, []);
  const b = a.useMemo(() => Ue(o), [o]), $ = a.useMemo(() => Z(d, o.kph_by_method_id, b), [d, o.kph_by_method_id, b]), z = a.useMemo(() => new Map($.map((s, r) => [s.method_id, r + 1])), [$]), v = i.trim().toLowerCase(), J = a.useMemo(() => Fe(d), [d]), y = a.useMemo(() => q(o.rankings_filters), [o.rankings_filters]), E = a.useMemo(() => d.filter((s) => v && !s.method_name.toLowerCase().includes(v) ? false : Be(s, W[s.method_id] ?? [], y)), [d, v, W, y]), O = a.useMemo(() => {
    const s = h ? E.filter((c) => !b.has(c.method_id)) : E, r = ee(s, o.kph_by_method_id);
    return v || U(y) ? r : r.slice(0, w);
  }, [E, h, b, v, y, w, o.kph_by_method_id]), ie = a.useMemo(() => {
    if (!h) return z;
    const s = ee(E.filter((r) => !b.has(r.method_id)), o.kph_by_method_id);
    return new Map(s.map((r, c) => [r.method_id, c + 1]));
  }, [h, E, b, o.kph_by_method_id, z]), A = a.useMemo(() => O.map((s) => s.method_id), [O]), Q = A.length > 0 && A.every((s) => !b.has(s)), le = A.some((s) => !b.has(s)), L = a.useMemo(() => !We(o, l), [o, l]);
  function ce() {
    t.current.push(S(o));
  }
  function T(s) {
    g((r) => (t.current.push(S(r)), s(r)));
  }
  function me(s, r) {
    g((c) => Ke(c, s, r));
  }
  function de() {
    ce();
  }
  function he(s, r) {
    T((c) => ze(c, s, r));
  }
  function ue(s) {
    T((r) => Je(r, A, s));
  }
  function pe() {
    g(S(l)), t.current.clear();
  }
  function fe() {
    const s = Ge(o), r = oe(s);
    x(r), g(S(r)), m(s), p(I()), t.current.clear(), k.success(`Saved v${s.save_version}`);
  }
  function X(s) {
    return L ? window.confirm(s) : true;
  }
  function _e(s) {
    s !== u.id && X("Discard unsaved changes and switch profile?") && (qe(s), C(), M());
  }
  function ge() {
    if (_.length >= V) {
      k.error(`Maximum of ${V} profiles reached`);
      return;
    }
    const s = window.prompt("Profile name");
    (s == null ? void 0 : s.trim()) && X("Discard unsaved changes and create a new profile?") && (Ve(s.trim()), C(), M(), k.success("Profile created"));
  }
  function ke() {
    if (_.length <= 1) {
      k.error("At least one profile is required");
      return;
    }
    const s = L ? `Delete profile "${u.name}"? Unsaved changes will be lost.` : `Delete profile "${u.name}"?`;
    window.confirm(s) && (Ye(u.id), C(), M(), k.success("Profile deleted"));
  }
  const xe = a.useMemo(() => Z(d, o.kph_by_method_id, b).slice(0, 10), [d, o.kph_by_method_id, b]);
  function be(s) {
    T((r) => ({ ...r, rankings_filters: q(s) }));
  }
  function je(s) {
    const r = $e(s);
    m(r), p(I()), x((c) => ({ ...c, wom_player: s })), T((c) => ({ ...c, wom_player: s, rankings_filters: { ...q(c.rankings_filters), skillLevels: os(s) } }));
  }
  const H = v || U(y) ? O.length : null;
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header osrs-mmg__header--compact", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust kph, toggle methods, then Save. Click a method for the calculator." })] }), G() ? e.jsx(Re, { loading: n.loading, error: n.error, manifest: n.manifest, fromCache: n.fromCache, onReload: n.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsxs("div", { className: "osrs-mmg__controls", children: [e.jsx(ns, { profiles: _, activeProfile: u, hasUnsavedChanges: L, maxProfiles: V, onSelectProfile: _e, onCreateProfile: ge, onDeleteProfile: ke }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: !L, onClick: fe, children: "Save" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !L, onClick: pe, children: "Discard" }), e.jsxs("div", { className: "osrs-mmg__controls-grow", children: [e.jsx("input", { className: "osrs-mmg__search-input", type: "search", value: i, placeholder: "Search methods\u2026", onChange: (s) => f(s.target.value) }), H != null ? e.jsx("span", { className: "osrs-mmg__search-count", children: H }) : null] }), e.jsxs("label", { className: "osrs-mmg__topn-field osrs-mmg__topn-field--compact", children: ["Top", e.jsx("input", { className: "osrs-mmg__topn-input", type: "number", min: 1, max: 500, value: w, disabled: v.length > 0 || U(y), onChange: (s) => {
    const r = Math.max(1, Math.min(500, Number(s.target.value) || 1));
    P(r);
  } })] }), e.jsx("button", { type: "button", className: h ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => B((s) => !s), children: "Re-rank" }), e.jsx(as, { filters: y, womPlayer: o.wom_player, methodTypeOptions: J.methodTypes, intensityOptions: J.intensities, onChange: be, onWomPlayerLoaded: je }), e.jsx(ss, { onImported: () => R((s) => s + 1) })] }), e.jsx("div", { className: "osrs-mmg__table-scroll osrs-mmg__table-scroll--wide", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { className: "osrs-mmg__rank-bulk-head", children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: Q, ref: (s) => {
    s && (s.indeterminate = le && !Q);
  }, onChange: (s) => ue(s.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: "Toggle all visible methods in rankings" })] }) }), e.jsx("th", { children: "#" }), e.jsx("th", { children: "Method" }), e.jsx("th", { children: "Type" }), e.jsx("th", { children: "Skills" }), e.jsx("th", { children: "Wiki GP/h" }), e.jsx("th", { children: "Your kph" }), e.jsx("th", { children: "Adjusted GP/h" }), e.jsx("th", { children: "Members" })] }) }), e.jsx("tbody", { children: O.map((s) => {
    const r = o.kph_by_method_id[s.method_id] ?? s.default_kph, c = we(s, r), N = b.has(s.method_id), ve = ie.get(s.method_id);
    return e.jsxs("tr", { className: N ? "osrs-mmg__table-row--disabled" : void 0, children: [e.jsx("td", { children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: !N, onChange: (K) => he(s.method_id, K.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: N ? "Excluded from rankings" : "Included in rankings" })] }) }), e.jsx("td", { children: h || !N ? ve : "\u2014" }), e.jsx("td", { children: e.jsx(re, { to: `/osrs-mmg/m/${s.method_id}`, children: s.method_name }) }), e.jsx("td", { className: "osrs-mmg__type-cell", children: Me(s.categories) }), e.jsx("td", { children: e.jsx(Ce, { skills: W[s.method_id] ?? [], compact: true }) }), e.jsx("td", { children: s.wiki_hourly_profit_gp != null ? se(s.wiki_hourly_profit_gp) : "\u2014" }), e.jsxs("td", { children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: r, onFocus: de, onChange: (K) => me(s.method_id, Number(K.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: s.completions_unit_name })] }), e.jsx("td", { children: se(c) }), e.jsx("td", { children: s.is_members ? "Yes" : s.is_members === false ? "No" : "\u2014" })] }, s.method_id);
  }) })] }) }), !G() || n.ready ? e.jsx(Ee, { mode: "topN", topMethods: xe, topN: 10 }) : null] });
}
export {
  _s as default
};
