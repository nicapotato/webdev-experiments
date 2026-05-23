var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as i, j as e, t as b, L as ve } from "./index-BpTeCU6g.js";
import { e as ye, a as Se, i as Ne, b as Re, u as Me, l as E, g as U, c as H, d as O, f as we, h as Pe, j as Ce, r as z, s as J, k as De, O as Le, M as A, p as Te, m as Ee, n as Oe, o as Q, q as Ae, t as Ue, v as w, w as Fe, x as X, y as Ie, z as Be, A as Ke, S as Z, B as qe, C as Ge } from "./useOsrsData-DBhZQpfm.js";
import { s as Ve } from "./skillIconUrl-C82-LoM1.js";
import "./clsx-B-dksMZM.js";
import "./tslib.es6-Xujj8YQZ.js";
const Ye = 100;
class $e {
  constructor() {
    __publicField(this, "stack", []);
  }
  push(n) {
    this.stack.push(n), this.stack.length > Ye && this.stack.shift();
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
function He({ onImported: t }) {
  const n = i.useRef(null);
  function l() {
    const h = ye(), p = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), m = URL.createObjectURL(p), d = document.createElement("a");
    d.href = m, d.download = "osrs-mmg-profiles-backup.json", d.click(), URL.revokeObjectURL(m), b.success("Profiles exported");
  }
  function c() {
    const h = Se(), p = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), m = URL.createObjectURL(p), d = document.createElement("a");
    d.href = m, d.download = "osrs-mmg-active-profile.json", d.click(), URL.revokeObjectURL(m), b.success("Profile exported");
  }
  async function u(h) {
    var _a;
    const p = (_a = h.target.files) == null ? void 0 : _a[0];
    if (h.target.value = "", !!p) try {
      const m = await p.text(), d = JSON.parse(m);
      if (d.version === 2) Ne(d);
      else if (d.version === 1) Re(d);
      else throw new Error("Unsupported backup version");
      t(), b.success("Imported");
    } catch (m) {
      b.error(m instanceof Error ? m.message : "Import failed");
    }
  }
  return e.jsxs(e.Fragment, { children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: l, children: "Export all" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: c, children: "Export" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => {
    var _a;
    return (_a = n.current) == null ? void 0 : _a.click();
  }, children: "Import" }), e.jsx("input", { ref: n, type: "file", accept: "application/json", hidden: true, onChange: u })] });
}
function ze(t) {
  return new Date(t).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}
function Je({ profiles: t, activeProfile: n, hasUnsavedChanges: l, maxProfiles: c, onSelectProfile: u, onCreateProfile: h, onDeleteProfile: p }) {
  const [m, d] = i.useState(false), a = i.useRef(null);
  return i.useEffect(() => {
    if (!m) return;
    function r(f) {
      var _a;
      ((_a = a.current) == null ? void 0 : _a.contains(f.target)) || d(false);
    }
    return window.addEventListener("mousedown", r), () => window.removeEventListener("mousedown", r);
  }, [m]), e.jsxs("div", { className: "osrs-mmg__profile-menu", ref: a, children: [e.jsxs("button", { type: "button", className: "osrs-mmg__profile-trigger", "aria-expanded": m, onClick: () => d((r) => !r), children: [e.jsx("span", { className: "osrs-mmg__profile-trigger-name", children: n.name }), l ? e.jsx("span", { className: "osrs-mmg__unsaved-dot", "aria-label": "Unsaved changes" }) : null, e.jsx("span", { className: "osrs-mmg__profile-trigger-caret", "aria-hidden": true, children: "\u25BE" })] }), m ? e.jsxs("div", { className: "osrs-mmg__profile-dropdown", children: [e.jsxs("div", { className: "osrs-mmg__profile-dropdown-meta", children: [e.jsxs("span", { children: ["v", n.save_version] }), e.jsx("span", { children: ze(n.updated_at) })] }), e.jsx("div", { className: "osrs-mmg__profile-list", children: t.map((r) => e.jsxs("button", { type: "button", className: r.id === n.id ? "osrs-mmg__profile-option is-active" : "osrs-mmg__profile-option", onClick: () => {
    u(r.id), d(false);
  }, children: [e.jsx("span", { children: r.name }), e.jsxs("span", { className: "osrs-mmg__profile-option-meta", children: ["v", r.save_version] })] }, r.id)) }), e.jsxs("div", { className: "osrs-mmg__profile-dropdown-actions", children: [e.jsx("button", { type: "button", disabled: t.length >= c, onClick: h, children: "New" }), e.jsx("button", { type: "button", disabled: t.length <= 1, onClick: p, children: "Delete" })] })] }) : null] });
}
function Qe(t) {
  const n = t.trim().match(/(\d+)/);
  return n ? Number(n[1]) : 0;
}
const We = ["Attack", "Strength", "Defence", "Ranged", "Prayer", "Magic", "Runecraft", "Construction", "Hitpoints", "Agility", "Herblore", "Thieving", "Crafting", "Fletching", "Slayer", "Hunter", "Mining", "Smithing", "Fishing", "Cooking", "Firemaking", "Woodcutting", "Farming", "Sailing"], ee = { skillLevels: {}, methodTypes: [], intensities: [] };
function se(t) {
  var _a;
  return ((_a = t.categories[0]) == null ? void 0 : _a.trim()) ?? "";
}
function D(t) {
  return t.methodTypes.length > 0 || t.intensities.length > 0 ? true : Object.values(t.skillLevels).some((n) => n > 0);
}
function Xe(t, n) {
  if (!Object.values(n).some((c) => c > 0)) return true;
  for (const c of t) {
    const u = Qe(c.requirementText);
    if (u <= 0) continue;
    if ((n[c.skillKey] ?? 0) < u) return false;
  }
  return true;
}
function Ze(t, n, l) {
  if (l.methodTypes.length > 0) {
    const c = se(t);
    if (!c || !l.methodTypes.includes(c)) return false;
  }
  if (l.intensities.length > 0) {
    const c = t.intensity.trim();
    if (!c || !l.intensities.includes(c)) return false;
  }
  return Xe(n, l.skillLevels);
}
function es(t) {
  const n = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  for (const c of t) {
    const u = se(c);
    u && n.add(u);
    const h = c.intensity.trim();
    h && l.add(h);
  }
  return { methodTypes: [...n].sort(), intensities: [...l].sort() };
}
function W(t, n) {
  return t.includes(n) ? t.filter((l) => l !== n) : [...t, n];
}
function ss({ filters: t, methodTypeOptions: n, intensityOptions: l, onChange: c }) {
  const [u, h] = i.useState(false), p = i.useRef(null), m = D(t);
  i.useEffect(() => {
    if (!u) return;
    function a(r) {
      var _a;
      ((_a = p.current) == null ? void 0 : _a.contains(r.target)) || h(false);
    }
    return window.addEventListener("mousedown", a), () => window.removeEventListener("mousedown", a);
  }, [u]);
  function d(a, r) {
    const f = { ...t.skillLevels };
    !Number.isFinite(r) || r <= 0 ? delete f[a] : f[a] = Math.min(99, Math.max(1, Math.floor(r))), c({ ...t, skillLevels: f });
  }
  return e.jsxs("div", { className: "osrs-mmg__filter-menu", ref: p, children: [e.jsxs("button", { type: "button", className: m ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", "aria-expanded": u, onClick: () => h((a) => !a), children: ["Filter", m ? " \u2022" : ""] }), u ? e.jsxs("div", { className: "osrs-mmg__filter-popout", children: [e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Method type" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: n.map((a) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: t.methodTypes.includes(a), onChange: () => c({ ...t, methodTypes: W(t.methodTypes, a) }) }), e.jsx("span", { children: a })] }, a)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Intensity" }), e.jsx("div", { className: "osrs-mmg__filter-checks", children: l.map((a) => e.jsxs("label", { className: "osrs-mmg__filter-check", children: [e.jsx("input", { type: "checkbox", checked: t.intensities.includes(a), onChange: () => c({ ...t, intensities: W(t.intensities, a) }) }), e.jsx("span", { children: a })] }, a)) })] }), e.jsxs("div", { className: "osrs-mmg__filter-section", children: [e.jsx("h3", { children: "Your skill levels" }), e.jsx("p", { className: "osrs-mmg__filter-hint", children: "Methods must meet every listed requirement at or below your level." }), e.jsx("div", { className: "osrs-mmg__filter-skills-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__filter-skills-table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Skill" }), e.jsx("th", { children: "Level" })] }) }), e.jsx("tbody", { children: We.map((a) => e.jsxs("tr", { children: [e.jsx("td", { children: e.jsxs("span", { className: "osrs-mmg__filter-skill-name", children: [e.jsx("img", { src: Ve(a), alt: "", width: 20, height: 20 }), a] }) }), e.jsx("td", { children: e.jsx("input", { className: "osrs-mmg__filter-level-input", type: "number", min: 1, max: 99, placeholder: "\u2014", value: t.skillLevels[a] ?? "", onChange: (r) => {
    const f = r.target.value.trim();
    d(a, f === "" ? 0 : Number(f));
  } }) })] }, a)) })] }) })] }), e.jsxs("div", { className: "osrs-mmg__filter-actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !m, onClick: () => c(ee), children: "Clear filters" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", onClick: () => h(false), children: "Done" })] })] }) : null] });
}
function ts() {
  return Object.fromEntries(Z.map((t) => [t.id, t.skillRequirements]));
}
function ns() {
  const t = { marlin: ["Skilling", "Fishing"], tob: ["Combat", "High"], smithing: ["Skilling", "Smithing"], mokhaiotl: ["Combat", "Mid"] };
  return Z.map((n, l) => ({ method_id: n.id, method_name: n.methodName, method_url: n.methodUrl, categories: t[n.id] ?? ["Skilling"], intensity: "", is_members: null, default_kph: n.defaultKph, completions_unit_name: n.kphUnitName, profit_pk: n.outputTotalPk - n.inputTotalPk, profit_ph: n.outputTotalPh - n.inputTotalPh, profit_linear_approx: false, wiki_rank: l + 1, wiki_hourly_profit_gp: null, wiki_profit_gp: n.outputTotalPk * n.defaultKph + n.outputTotalPh - (n.inputTotalPk * n.defaultKph + n.inputTotalPh) }));
}
function rs() {
  const t = U(), n = X(t);
  return { profile: t, savedDraft: w(n), draft: n };
}
function ms() {
  const t = Me(), n = i.useRef(new $e()), [l, c] = i.useState([]), [u, h] = i.useState(() => E()), [p, m] = i.useState(() => U()), [d, a] = i.useState(() => H()), [r, f] = i.useState(() => H()), [te, ne] = i.useState(0), [S, re] = i.useState(20), [F, oe] = i.useState(""), [g, ie] = i.useState(false), [j, ae] = i.useState(ee), [L, I] = i.useState({});
  function N() {
    h(E()), m(U());
  }
  function R(s = true) {
    const { profile: o, savedDraft: _, draft: y } = rs();
    m(o), a(_), f(y), s && n.current.clear();
  }
  i.useEffect(() => {
    if (!O()) {
      R(), c(ns()), I(ts()), N();
      return;
    }
    t.ready && Promise.all([we(), Pe()]).then(([s, o]) => {
      R(), c(s), I(o), N();
    });
  }, [t.ready, te]), i.useEffect(() => {
    function s(o) {
      if (!o.altKey || o.key.toLowerCase() !== "z") return;
      o.preventDefault();
      const _ = n.current.pop();
      _ && f(_);
    }
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, []);
  const k = i.useMemo(() => Ce(r), [r]), B = i.useMemo(() => z(l, r.kph_by_method_id, k), [l, r.kph_by_method_id, k]), K = i.useMemo(() => new Map(B.map((s, o) => [s.method_id, o + 1])), [B]), x = F.trim().toLowerCase(), q = i.useMemo(() => es(l), [l]), v = i.useMemo(() => l.filter((s) => x && !s.method_name.toLowerCase().includes(x) ? false : Ze(s, L[s.method_id] ?? [], j)), [l, x, L, j]), P = i.useMemo(() => {
    const s = g ? v.filter((_) => !k.has(_.method_id)) : v, o = J(s, r.kph_by_method_id);
    return x || g ? o : o.slice(0, S);
  }, [v, g, k, x, S, r.kph_by_method_id]), le = i.useMemo(() => {
    if (!g) return K;
    const s = J(v.filter((o) => !k.has(o.method_id)), r.kph_by_method_id);
    return new Map(s.map((o, _) => [o.method_id, _ + 1]));
  }, [g, v, k, r.kph_by_method_id, K]), C = i.useMemo(() => x || g || D(j) ? P.map((s) => s.method_id) : v.slice(0, S).map((s) => s.method_id), [x, g, j, P, v, S]), G = C.length > 0 && C.every((s) => !k.has(s)), ce = C.some((s) => !k.has(s)), M = i.useMemo(() => !De(r, d), [r, d]);
  function me() {
    n.current.push(w(r));
  }
  function V(s) {
    f((o) => (n.current.push(w(o)), s(o)));
  }
  function de(s, o) {
    f((_) => Ue(_, s, o));
  }
  function he() {
    me();
  }
  function ue(s, o) {
    V((_) => qe(_, s, o));
  }
  function pe(s) {
    V((o) => Ge(o, C, s));
  }
  function fe() {
    f(w(d)), n.current.clear();
  }
  function _e() {
    const s = Fe(r), o = X(s);
    a(o), f(w(o)), m(s), h(E()), n.current.clear(), b.success(`Saved v${s.save_version}`);
  }
  function Y(s) {
    return M ? window.confirm(s) : true;
  }
  function ge(s) {
    s !== p.id && Y("Discard unsaved changes and switch profile?") && (Ie(s), R(), N());
  }
  function ke() {
    if (u.length >= A) {
      b.error(`Maximum of ${A} profiles reached`);
      return;
    }
    const s = window.prompt("Profile name");
    (s == null ? void 0 : s.trim()) && Y("Discard unsaved changes and create a new profile?") && (Be(s.trim()), R(), N(), b.success("Profile created"));
  }
  function xe() {
    if (u.length <= 1) {
      b.error("At least one profile is required");
      return;
    }
    const s = M ? `Delete profile "${p.name}"? Unsaved changes will be lost.` : `Delete profile "${p.name}"?`;
    window.confirm(s) && (Ke(p.id), R(), N(), b.success("Profile deleted"));
  }
  const be = i.useMemo(() => z(l, r.kph_by_method_id, k).slice(0, 10), [l, r.kph_by_method_id, k]), $ = x || g || D(j) ? P.length : null;
  return e.jsxs("div", { className: "osrs-mmg", children: [e.jsxs("header", { className: "osrs-mmg__header osrs-mmg__header--compact", children: [e.jsx("h1", { children: "OSRS Money Maker Rankings" }), e.jsx("p", { children: "Adjust kph, toggle methods, then Save. Click a method for the calculator." })] }), O() ? e.jsx(Le, { loading: t.loading, error: t.error, manifest: t.manifest, fromCache: t.fromCache, onReload: t.reload }) : e.jsx("p", { className: "osrs-mmg__banner", children: "Offline sample data (set VITE_OSRS_DUCKDB_URL or VITE_OSRS_DATA_BASE for live data)" }), e.jsxs("div", { className: "osrs-mmg__controls", children: [e.jsx(Je, { profiles: u, activeProfile: p, hasUnsavedChanges: M, maxProfiles: A, onSelectProfile: ge, onCreateProfile: ke, onDeleteProfile: xe }), e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: !M, onClick: _e, children: "Save" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !M, onClick: fe, children: "Discard" }), e.jsxs("div", { className: "osrs-mmg__controls-grow", children: [e.jsx("input", { className: "osrs-mmg__search-input", type: "search", value: F, placeholder: "Search methods\u2026", onChange: (s) => oe(s.target.value) }), $ != null ? e.jsx("span", { className: "osrs-mmg__search-count", children: $ }) : null] }), e.jsxs("label", { className: "osrs-mmg__topn-field osrs-mmg__topn-field--compact", children: ["Top", e.jsx("input", { className: "osrs-mmg__topn-input", type: "number", min: 1, max: 500, value: S, disabled: x.length > 0 || g || D(j), onChange: (s) => {
    const o = Math.max(1, Math.min(500, Number(s.target.value) || 1));
    re(o);
  } })] }), e.jsx("button", { type: "button", className: g ? "osrs-mmg__btn osrs-mmg__btn--active" : "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => ie((s) => !s), children: "Re-rank" }), e.jsx(ss, { filters: j, methodTypeOptions: q.methodTypes, intensityOptions: q.intensities, onChange: ae }), e.jsx(He, { onImported: () => ne((s) => s + 1) })] }), e.jsx("div", { className: "osrs-mmg__table-scroll osrs-mmg__table-scroll--wide", children: e.jsxs("table", { className: "osrs-mmg__table osrs-mmg__table--rankings", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { className: "osrs-mmg__rank-bulk-head", children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: G, ref: (s) => {
    s && (s.indeterminate = ce && !G);
  }, onChange: (s) => pe(s.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: "Toggle all visible methods in rankings" })] }) }), e.jsx("th", { children: "#" }), e.jsx("th", { children: "Method" }), e.jsx("th", { children: "Type" }), e.jsx("th", { children: "Skills" }), e.jsx("th", { children: "Wiki GP/h" }), e.jsx("th", { children: "Your kph" }), e.jsx("th", { children: "Adjusted GP/h" }), e.jsx("th", { children: "Members" })] }) }), e.jsx("tbody", { children: P.map((s) => {
    const o = r.kph_by_method_id[s.method_id] ?? s.default_kph, _ = Te(s, o), y = k.has(s.method_id), je = le.get(s.method_id);
    return e.jsxs("tr", { className: y ? "osrs-mmg__table-row--disabled" : void 0, children: [e.jsx("td", { children: e.jsxs("label", { className: "osrs-mmg__rank-toggle", children: [e.jsx("input", { type: "checkbox", checked: !y, onChange: (T) => ue(s.method_id, T.target.checked) }), e.jsx("span", { className: "osrs-mmg__sr-only", children: y ? "Excluded from rankings" : "Included in rankings" })] }) }), e.jsx("td", { children: g || !y ? je : "\u2014" }), e.jsx("td", { children: e.jsx(ve, { to: `/osrs-mmg/m/${s.method_id}`, children: s.method_name }) }), e.jsx("td", { className: "osrs-mmg__type-cell", children: Ee(s.categories) }), e.jsx("td", { children: e.jsx(Oe, { skills: L[s.method_id] ?? [], compact: true }) }), e.jsx("td", { children: s.wiki_hourly_profit_gp != null ? Q(s.wiki_hourly_profit_gp) : "\u2014" }), e.jsxs("td", { children: [e.jsx("input", { className: "osrs-mmg__kph-input", type: "number", min: 0, step: "any", value: o, onFocus: he, onChange: (T) => de(s.method_id, Number(T.target.value)) }), e.jsx("span", { className: "osrs-mmg__kph-unit", children: s.completions_unit_name })] }), e.jsx("td", { children: Q(_) }), e.jsx("td", { children: s.is_members ? "Yes" : s.is_members === false ? "No" : "\u2014" })] }, s.method_id);
  }) })] }) }), !O() || t.ready ? e.jsx(Ae, { mode: "topN", topMethods: be, topN: 10 }) : null] });
}
export {
  ms as default
};
