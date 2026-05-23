var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as m, j as e, t as f } from "./index-BpTeCU6g.js";
import { s as R } from "./skillIconUrl-C82-LoM1.js";
const x = "osrs-character-profile-v1";
function L() {
  const t = localStorage.getItem(x);
  if (!t) return null;
  try {
    const r = JSON.parse(t);
    return !r.username || !Array.isArray(r.skills) ? null : r;
  } catch {
    return null;
  }
}
function S(t) {
  localStorage.setItem(x, JSON.stringify(t));
}
function A() {
  localStorage.removeItem(x);
}
function T(t) {
  if (!t || typeof t != "object") throw new Error("Invalid character JSON");
  const r = t;
  if (!r.username || !Array.isArray(r.skills)) throw new Error("Invalid character JSON \u2014 missing username or skills");
  return r;
}
const M = "https://api.wiseoldman.net/v2", I = ["attack", "strength", "defence", "ranged", "prayer", "magic", "runecrafting", "construction", "hitpoints", "agility", "herblore", "thieving", "crafting", "fletching", "slayer", "hunter", "mining", "smithing", "fishing", "cooking", "firemaking", "woodcutting", "farming", "sailing"], W = { attack: "Attack", strength: "Strength", defence: "Defence", ranged: "Ranged", prayer: "Prayer", magic: "Magic", runecrafting: "Runecraft", construction: "Construction", hitpoints: "Hitpoints", agility: "Agility", herblore: "Herblore", thieving: "Thieving", crafting: "Crafting", fletching: "Fletching", slayer: "Slayer", hunter: "Hunter", mining: "Mining", smithing: "Smithing", fishing: "Fishing", cooking: "Cooking", firemaking: "Firemaking", woodcutting: "Woodcutting", farming: "Farming", sailing: "Sailing" };
class p extends Error {
  constructor(r, a, s) {
    super(r);
    __publicField(this, "status");
    __publicField(this, "body");
    this.name = "WomApiError", this.status = a, this.body = s;
  }
}
function P() {
  return { Accept: "application/json" };
}
function b(t) {
  const r = t.trim();
  if (!r) throw new Error("Enter a RuneScape name (1\u201312 characters).");
  if (r.length > 12) throw new Error("RuneScape names are at most 12 characters.");
  return r;
}
function F(t) {
  return t === "regular" || t === "ironman" || t === "hardcore" || t === "ultimate" || t === "unknown" ? t : "unknown";
}
function U(t, r) {
  if (!r || typeof r != "object") return null;
  const a = r, s = Number(a.level), i = Number(a.experience), h = Number(a.rank);
  if (!Number.isFinite(s)) return null;
  const n = W[t];
  return n ? { skillKey: n, womMetric: t, level: s, experience: Number.isFinite(i) ? i : 0, rank: Number.isFinite(h) ? h : -1 } : null;
}
function k(t, r) {
  var _a;
  if (!t || typeof t != "object") throw new Error("Unexpected WOM response shape.");
  const a = t, s = a.latestSnapshot, h = (_a = s == null ? void 0 : s.data) == null ? void 0 : _a.skills, n = [];
  for (const d of I) {
    const u = U(d, h == null ? void 0 : h[d]);
    u && n.push(u);
  }
  return { username: String(a.username ?? r), displayName: String(a.displayName ?? a.username ?? r), playerType: F(a.type), combatLevel: typeof a.combatLevel == "number" ? a.combatLevel : null, fetchedAt: (/* @__PURE__ */ new Date()).toISOString(), snapshotCreatedAt: typeof (s == null ? void 0 : s.createdAt) == "string" ? s.createdAt : null, womUpdatedAt: typeof a.updatedAt == "string" ? a.updatedAt : null, skills: n };
}
async function N(t, r) {
  const a = b(t), s = `${M}/players/${encodeURIComponent(a)}`;
  let i;
  try {
    i = await fetch(s, { method: r, headers: P() });
  } catch (d) {
    const u = d instanceof TypeError ? "Network error \u2014 likely CORS blocked the request from this origin. Try from localhost or check browser console." : d instanceof Error ? d.message : "Network request failed.";
    throw new Error(u);
  }
  const h = await i.text();
  let n = null;
  if (h) try {
    n = JSON.parse(h);
  } catch {
    n = h;
  }
  if (!i.ok) {
    const d = n && typeof n == "object" && "message" in n ? String(n.message) : typeof n == "string" ? n : i.statusText;
    throw i.status === 404 && r === "GET" ? new p("Player not found on Wise Old Man. Try Refresh to track them first (POST).", i.status, n) : i.status === 429 ? new p("WOM rate limit hit \u2014 wait a minute and try again.", i.status, n) : new p(d || `WOM request failed (${i.status})`, i.status, n);
  }
  return { endpoint: r, status: i.status, raw: n };
}
async function J(t) {
  const r = await N(t, "GET");
  return { profile: k(r.raw, b(t)), meta: r };
}
async function G(t) {
  const r = await N(t, "POST");
  return { profile: k(r.raw, b(t)), meta: r };
}
function y(t) {
  return t ? new Date(t).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" }) : "\u2014";
}
function K(t) {
  return t.toLocaleString("en-GB");
}
function H() {
  const t = m.useRef(null), [r, a] = m.useState(""), [s, i] = m.useState(() => L()), [h, n] = m.useState(null), [d, u] = m.useState(false), [j, g] = m.useState(null), [_, C] = m.useState(false);
  m.useEffect(() => {
    s && !r && a(s.displayName);
  }, [s, r]);
  async function w(o) {
    u(true), g(null);
    try {
      const l = r.trim() || (s == null ? void 0 : s.username) || "", c = o === "refresh" ? await G(l) : await J(l);
      i(c.profile), n(c.meta), S(c.profile), a(c.profile.displayName), f.success(o === "refresh" ? "Character refreshed from WOM" : "Character loaded");
    } catch (l) {
      const c = l instanceof p || l instanceof Error ? l.message : "Request failed";
      g(c), l instanceof p && n({ endpoint: o === "refresh" ? "POST" : "GET", status: l.status, raw: l.body }), f.error(c);
    } finally {
      u(false);
    }
  }
  function O() {
    A(), i(null), n(null), g(null), f.success("Saved character cleared");
  }
  function v() {
    if (!s) return;
    const o = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" }), l = URL.createObjectURL(o), c = document.createElement("a");
    c.href = l, c.download = `osrs-character-${s.username.replace(/\s+/g, "-")}.json`, c.click(), URL.revokeObjectURL(l), f.success("Character exported");
  }
  async function E(o) {
    var _a;
    const l = (_a = o.target.files) == null ? void 0 : _a[0];
    if (o.target.value = "", !!l) try {
      const c = T(JSON.parse(await l.text()));
      i(c), n(null), g(null), S(c), a(c.displayName), f.success("Character imported");
    } catch (c) {
      f.error(c instanceof Error ? c.message : "Import failed");
    }
  }
  return e.jsxs("div", { className: "osrs-mmg osrs-character", children: [e.jsxs("header", { className: "osrs-mmg__header osrs-mmg__header--compact", children: [e.jsx("h1", { children: "OSRS Character" }), e.jsxs("p", { children: ["Load a player from", " ", e.jsx("a", { href: "https://wiseoldman.net", target: "_blank", rel: "noreferrer", children: "Wise Old Man" }), "."] })] }), e.jsxs("div", { className: "osrs-character__panel", children: [e.jsxs("label", { className: "osrs-mmg__field", children: ["RuneScape name", e.jsx("input", { className: "osrs-mmg__search-input", type: "text", maxLength: 12, placeholder: "e.g. Lynx Titan", value: r, disabled: d, onChange: (o) => a(o.target.value) })] }), e.jsxs("div", { className: "osrs-character__actions", children: [e.jsx("button", { type: "button", className: "osrs-mmg__btn", disabled: d || !r.trim(), onClick: () => void w("load"), children: d ? "Looking up\u2026" : "Lookup" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: d || !r.trim() && !s, onClick: () => void w("refresh"), title: "POST /players/:username \u2014 triggers WOM to update from hiscores", children: "Refresh" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !s, onClick: v, children: "Export" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", onClick: () => {
    var _a;
    return (_a = t.current) == null ? void 0 : _a.click();
  }, children: "Import" }), e.jsx("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !s, onClick: O, children: "Clear saved" }), e.jsxs("button", { type: "button", className: "osrs-mmg__btn osrs-mmg__btn--ghost", disabled: !h, onClick: () => C((o) => !o), children: [_ ? "Hide" : "Show", " raw JSON"] }), e.jsx("input", { ref: t, type: "file", accept: "application/json", hidden: true, onChange: (o) => void E(o) })] })] }), j ? e.jsx("p", { className: "osrs-character__error", children: j }) : null, s ? e.jsxs(e.Fragment, { children: [e.jsxs("dl", { className: "osrs-character__meta", children: [e.jsxs("div", { children: [e.jsx("dt", { children: "Display name" }), e.jsx("dd", { children: s.displayName })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "Account type" }), e.jsx("dd", { children: s.playerType })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "Combat level" }), e.jsx("dd", { children: s.combatLevel ?? "\u2014" })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "Loaded at" }), e.jsx("dd", { children: y(s.fetchedAt) })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "WOM updated" }), e.jsx("dd", { children: y(s.womUpdatedAt) })] }), e.jsxs("div", { children: [e.jsx("dt", { children: "Snapshot date" }), e.jsx("dd", { children: y(s.snapshotCreatedAt) })] })] }), e.jsx("div", { className: "osrs-mmg__table-scroll", children: e.jsxs("table", { className: "osrs-mmg__table osrs-character__skills-table", children: [e.jsx("thead", { children: e.jsxs("tr", { children: [e.jsx("th", { children: "Skill" }), e.jsx("th", { children: "Level" }), e.jsx("th", { children: "XP" }), e.jsx("th", { children: "Rank" })] }) }), e.jsx("tbody", { children: s.skills.map((o) => e.jsxs("tr", { children: [e.jsx("td", { children: e.jsxs("span", { className: "osrs-character__skill-cell", children: [e.jsx("img", { src: R(o.skillKey), alt: "", width: 20, height: 20 }), o.skillKey] }) }), e.jsx("td", { children: o.level }), e.jsx("td", { children: K(o.experience) }), e.jsx("td", { children: o.rank > 0 ? o.rank.toLocaleString("en-GB") : "\u2014" })] }, o.womMetric)) })] }) })] }) : e.jsx("p", { className: "osrs-character__empty", children: "No character loaded. Enter a name and click Lookup, or Refresh if WOM returns 404." }), _ && h ? e.jsx("pre", { className: "osrs-character__raw", children: JSON.stringify(h.raw, null, 2) }) : null] });
}
export {
  H as default
};
