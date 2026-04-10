import { r as s } from "./index-BxzNaUpi.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const u = (...e) => e.filter((t, o, r) => !!t && t.trim() !== "" && r.indexOf(t) === o).join(" ").trim();
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const y = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const v = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, o, r) => r ? r.toUpperCase() : o.toLowerCase());
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const h = (e) => {
  const t = v(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var i = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const A = (e) => {
  for (const t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return true;
  return false;
}, b = s.createContext({}), L = () => s.useContext(b), W = s.forwardRef(({ color: e, size: t, strokeWidth: o, absoluteStrokeWidth: r, className: n = "", children: a, iconNode: p, ...d }, x) => {
  const { size: c = 24, strokeWidth: l = 2, absoluteStrokeWidth: C = false, color: m = "currentColor", className: f = "" } = L() ?? {}, k = r ?? C ? Number(o ?? l) * 24 / Number(t ?? c) : o ?? l;
  return s.createElement("svg", { ref: x, ...i, width: t ?? c ?? i.width, height: t ?? c ?? i.height, stroke: e ?? m, strokeWidth: k, className: u("lucide", f, n), ...!a && !A(d) && { "aria-hidden": "true" }, ...d }, [...p.map(([w, g]) => s.createElement(w, g)), ...Array.isArray(a) ? a : [a]]);
});
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const S = (e, t) => {
  const o = s.forwardRef(({ className: r, ...n }, a) => s.createElement(W, { ref: a, iconNode: t, className: u(`lucide-${y(h(e))}`, `lucide-${e}`, r), ...n }));
  return o.displayName = h(e), o;
};
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const E = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], $ = S("grid-3x3", E);
export {
  $ as G,
  S as c
};
