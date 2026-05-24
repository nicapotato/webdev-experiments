function b(e) {
  if (!e) return 0;
  const t = e.trim().match(/(\d+)/);
  return t ? Number(t[1]) : 0;
}
const D = ["Attack", "Strength", "Defence", "Ranged", "Prayer", "Magic", "Runecraft", "Construction", "Hitpoints", "Agility", "Herblore", "Thieving", "Crafting", "Fletching", "Slayer", "Hunter", "Mining", "Smithing", "Fishing", "Cooking", "Firemaking", "Woodcutting", "Farming", "Sailing"], S = { skillLevels: {}, methodTypes: [], intensities: [] };
function m(e) {
  var _a;
  return ((_a = e.categories[0]) == null ? void 0 : _a.trim()) ?? "";
}
function F(e) {
  return e.methodTypes.length > 0 || e.intensities.length > 0 ? true : Object.values(e.skillLevels).some((t) => t > 0);
}
function w(e, t) {
  if (!Object.values(t).some((n) => n > 0)) return true;
  for (const n of e) {
    const r = b(n.requirementText);
    if (r <= 0) continue;
    if ((t[n.skillKey] ?? 0) < r) return false;
  }
  return true;
}
function N(e, t, i) {
  if (i.methodTypes.length > 0) {
    const n = m(e);
    if (!n || !i.methodTypes.includes(n)) return false;
  }
  if (i.intensities.length > 0) {
    const n = e.intensity.trim();
    if (!n || !i.intensities.includes(n)) return false;
  }
  return w(t, i.skillLevels);
}
function d(e) {
  if (!e || typeof e != "object") return S;
  const t = e, i = {};
  if (t.skillLevels && typeof t.skillLevels == "object") for (const [n, r] of Object.entries(t.skillLevels)) {
    const s = Number(r);
    Number.isFinite(s) && s > 0 && (i[n] = Math.min(99, Math.floor(s)));
  }
  return { skillLevels: i, methodTypes: Array.isArray(t.methodTypes) ? t.methodTypes.map(String) : [], intensities: Array.isArray(t.intensities) ? t.intensities.map(String) : [] };
}
function A(e, t) {
  if (e.methodTypes.slice().sort().join("\0") !== t.methodTypes.slice().sort().join("\0") || e.intensities.slice().sort().join("\0") !== t.intensities.slice().sort().join("\0")) return false;
  const i = /* @__PURE__ */ new Set([...Object.keys(e.skillLevels), ...Object.keys(t.skillLevels)]);
  for (const n of i) if ((e.skillLevels[n] ?? null) !== (t.skillLevels[n] ?? null)) return false;
  return true;
}
function K(e) {
  const t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  for (const n of e) {
    const r = m(n);
    r && t.add(r);
    const s = n.intensity.trim();
    s && i.add(s);
  }
  return { methodTypes: [...t].sort(), intensities: [...i].sort() };
}
function P(e) {
  return { kph_by_method_id: { ...e.kph_by_method_id }, disabled_method_ids: [...e.disabled_method_ids], rankings_filters: d(e.rankings_filters), wom_player: e.wom_player ? { ...e.wom_player, skills: [...e.wom_player.skills] } : null };
}
function I(e, t) {
  return e === t ? true : !e || !t ? !e && !t : e.username === t.username && e.fetchedAt === t.fetchedAt;
}
function M(e, t) {
  const i = [...e.disabled_method_ids].sort().join("\0"), n = [...t.disabled_method_ids].sort().join("\0");
  if (i !== n) return false;
  const r = /* @__PURE__ */ new Set([...Object.keys(e.kph_by_method_id), ...Object.keys(t.kph_by_method_id)]);
  for (const s of r) if ((e.kph_by_method_id[s] ?? null) !== (t.kph_by_method_id[s] ?? null)) return false;
  return I(e.wom_player, t.wom_player) ? A(d(e.rankings_filters), d(t.rankings_filters)) : false;
}
function q(e) {
  return new Set(e.disabled_method_ids);
}
function x(e, t, i) {
  const n = new Set(e.disabled_method_ids);
  return i ? n.delete(t) : n.add(t), { ...e, disabled_method_ids: [...n] };
}
function C(e, t, i) {
  const n = new Set(e.disabled_method_ids);
  for (const r of t) i ? n.delete(r) : n.add(r);
  return { ...e, disabled_method_ids: [...n] };
}
function U(e, t, i) {
  return { ...e, kph_by_method_id: { ...e.kph_by_method_id, [t]: i } };
}
function L(e) {
  return P({ kph_by_method_id: e.kph_by_method_id, disabled_method_ids: e.disabled_method_ids, rankings_filters: e.rankings_filters, wom_player: e.wom_player });
}
const p = "osrs-mmg-profiles-v2", R = "osrs-mmg-kph-v1", c = 20;
function h() {
  return crypto.randomUUID();
}
function E(e) {
  if (!e || typeof e != "object") return null;
  const t = e;
  return !t.username || !Array.isArray(t.skills) ? null : t;
}
function y(e = "Default") {
  const t = (/* @__PURE__ */ new Date()).toISOString();
  return { id: h(), name: e, save_version: 0, updated_at: t, kph_by_method_id: {}, disabled_method_ids: [], rankings_filters: d(null), wom_player: null };
}
function k() {
  const e = y();
  return { version: 2, active_profile_id: e.id, profiles: [e] };
}
function O() {
  const e = localStorage.getItem(R);
  if (!e) return null;
  try {
    const t = JSON.parse(e);
    if (t.version !== 1 || typeof t.kph_by_method_id != "object") return null;
    const i = t.updated_at ?? (/* @__PURE__ */ new Date()).toISOString(), n = { id: h(), name: "Default", save_version: 0, updated_at: i, kph_by_method_id: t.kph_by_method_id ?? {}, disabled_method_ids: t.disabled_method_ids ?? [], rankings_filters: d(null), wom_player: null };
    return { version: 2, active_profile_id: n.id, profiles: [n] };
  } catch {
    return null;
  }
}
function T(e) {
  if (typeof e.save_version == "number" && Number.isFinite(e.save_version)) return e.save_version;
  if (e.version_name) {
    const t = Number.parseInt(e.version_name.replace(/\D/g, ""), 10);
    if (Number.isFinite(t)) return t;
  }
  return 0;
}
function u(e) {
  const t = e.profiles.slice(0, c).map((n) => ({ id: n.id, name: n.name.trim() || "Untitled", save_version: T(n), updated_at: n.updated_at, kph_by_method_id: n.kph_by_method_id ?? {}, disabled_method_ids: n.disabled_method_ids ?? [], rankings_filters: d(n.rankings_filters), wom_player: E(n.wom_player) }));
  return t.length === 0 ? k() : { version: 2, active_profile_id: t.some((n) => n.id === e.active_profile_id) ? e.active_profile_id : t[0].id, profiles: t };
}
function o() {
  const e = localStorage.getItem(p);
  if (e) try {
    const n = JSON.parse(e);
    if (n.version === 2 && Array.isArray(n.profiles)) return u(n);
  } catch {
  }
  const i = O() ?? k();
  return a(i), i;
}
function a(e) {
  localStorage.setItem(p, JSON.stringify(u(e)));
}
function l(e) {
  return e.profiles.find((t) => t.id === e.active_profile_id) ?? e.profiles[0];
}
function B() {
  return o().profiles;
}
function _() {
  return l(o());
}
function G(e) {
  const t = o();
  if (!t.profiles.some((i) => i.id === e)) throw new Error("Profile not found");
  return a({ ...t, active_profile_id: e }), l(o());
}
function Y(e) {
  const t = o();
  if (t.profiles.length >= c) throw new Error(`Maximum of ${c} profiles reached`);
  const i = y(e.trim() || `Profile ${t.profiles.length + 1}`), n = { ...t, active_profile_id: i.id, profiles: [...t.profiles, i] };
  return a(n), i;
}
function z(e) {
  const t = o();
  if (t.profiles.length <= 1) throw new Error("At least one profile is required");
  const i = t.profiles.filter((r) => r.id !== e), n = t.active_profile_id === e ? i[0].id : t.active_profile_id;
  return a({ ...t, active_profile_id: n, profiles: i }), l(o());
}
function f(e, t, i) {
  let n = null;
  const r = e.profiles.map((s) => s.id !== t ? s : (n = { ...s, ...i }, n));
  if (!n) throw new Error("Profile not found");
  return a({ ...e, profiles: r }), n;
}
function $(e) {
  const t = o(), i = l(t);
  return f(t, i.id, { save_version: i.save_version + 1, updated_at: (/* @__PURE__ */ new Date()).toISOString(), kph_by_method_id: { ...e.kph_by_method_id }, disabled_method_ids: [...e.disabled_method_ids], rankings_filters: d(e.rankings_filters), wom_player: e.wom_player });
}
function g(e) {
  const t = o(), i = l(t);
  return f(t, i.id, { kph_by_method_id: { ...e.kph_by_method_id }, disabled_method_ids: [...e.disabled_method_ids], rankings_filters: d(e.rankings_filters), wom_player: e.wom_player });
}
function H(e) {
  const t = o(), i = l(t);
  return f(t, i.id, { wom_player: e, updated_at: (/* @__PURE__ */ new Date()).toISOString() });
}
function J(e, t) {
  const i = _().kph_by_method_id[e];
  return i !== void 0 && Number.isFinite(i) ? i : t;
}
function W(e, t) {
  const i = _();
  return g({ kph_by_method_id: { ...i.kph_by_method_id, [e]: t }, disabled_method_ids: i.disabled_method_ids, rankings_filters: i.rankings_filters, wom_player: i.wom_player });
}
function V() {
  return o();
}
function X() {
  const e = _();
  return { version: 1, updated_at: e.updated_at, kph_by_method_id: e.kph_by_method_id, disabled_method_ids: e.disabled_method_ids };
}
function Q(e) {
  if (e.version !== 2 || !Array.isArray(e.profiles)) throw new Error("Invalid profiles backup file");
  const t = u(e);
  return a(t), t;
}
function Z(e, t = "import_wins") {
  if (e.version !== 1 || typeof e.kph_by_method_id != "object") throw new Error("Invalid kph backup file");
  const i = _(), n = t === "import_wins" ? { ...i.kph_by_method_id, ...e.kph_by_method_id } : { ...e.kph_by_method_id, ...i.kph_by_method_id }, r = new Set(i.disabled_method_ids);
  for (const v of e.disabled_method_ids ?? []) r.add(v);
  const s = { kph_by_method_id: n, disabled_method_ids: [...r], rankings_filters: i.rankings_filters, wom_player: i.wom_player };
  return g(s), s;
}
function ee() {
  return L(_());
}
const j = { sailing: "sailing.png" };
function te(e) {
  const t = e.toLowerCase().replace(/\s+/g, "-");
  return `/osrs-assets/${j[t] ?? `${t}-icon.png`}`;
}
export {
  S as E,
  c as M,
  D as O,
  X as a,
  Z as b,
  ee as c,
  q as d,
  V as e,
  K as f,
  _ as g,
  M as h,
  Q as i,
  P as j,
  U as k,
  B as l,
  N as m,
  d as n,
  $ as o,
  L as p,
  G as q,
  F as r,
  te as s,
  Y as t,
  z as u,
  H as v,
  x as w,
  C as x,
  J as y,
  W as z
};
