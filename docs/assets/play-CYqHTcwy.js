import { r as o, j as s } from "./index-CW6bEkcZ.js";
import { c as t, d } from "./button-mBHtT65A.js";
import { c as n } from "./grid-3x3-B6NevLXf.js";
const i = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("rounded-xl border bg-card text-card-foreground shadow-sm", r), ...e }));
i.displayName = "Card";
const c = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("flex flex-col space-y-1.5 p-6", r), ...e }));
c.displayName = "CardHeader";
const f = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("font-semibold leading-none tracking-tight", r), ...e }));
f.displayName = "CardTitle";
const l = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("text-sm text-muted-foreground", r), ...e }));
l.displayName = "CardDescription";
const m = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("p-6 pt-0", r), ...e }));
m.displayName = "CardContent";
const p = o.forwardRef(({ className: r, ...e }, a) => s.jsx("div", { ref: a, className: t("flex items-center p-6 pt-0", r), ...e }));
p.displayName = "CardFooter";
const u = d("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function b({ className: r, variant: e, ...a }) {
  return s.jsx("div", { className: t(u({ variant: e }), r), ...a });
}
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const x = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], C = n("play", x);
export {
  b as B,
  i as C,
  C as P,
  c as a,
  f as b,
  l as c,
  m as d
};
