import { r as a } from "./index-CE6kdDhP.js";
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
const A = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
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
const L = (e) => {
  for (const t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return true;
  return false;
}, b = a.createContext({}), W = () => a.useContext(b), M = a.forwardRef(({ color: e, size: t, strokeWidth: o, absoluteStrokeWidth: r, className: n = "", children: s, iconNode: x, ...d }, C) => {
  const { size: c = 24, strokeWidth: l = 2, absoluteStrokeWidth: f = false, color: k = "currentColor", className: m = "" } = W() ?? {}, w = r ?? f ? Number(o ?? l) * 24 / Number(t ?? c) : o ?? l;
  return a.createElement("svg", { ref: C, ...i, width: t ?? c ?? i.width, height: t ?? c ?? i.height, stroke: e ?? k, strokeWidth: w, className: u("lucide", m, n), ...!s && !L(d) && { "aria-hidden": "true" }, ...d }, [...x.map(([y, g]) => a.createElement(y, g)), ...Array.isArray(s) ? s : [s]]);
});
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p = (e, t) => {
  const o = a.forwardRef(({ className: r, ...n }, s) => a.createElement(M, { ref: s, iconNode: t, className: u(`lucide-${A(h(e))}`, `lucide-${e}`, r), ...n }));
  return o.displayName = h(e), o;
};
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const S = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], E = p("arrow-left", S);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], N = p("grid-3x3", _);
export {
  E as A,
  N as G,
  p as c
};
