import { r as i, j as d } from "./index-DBmo_afS.js";
import { S as c, c as u, d as g } from "./utils-Bb6pTMKk.js";
const v = g("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90", outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), f = i.forwardRef(({ className: e, variant: t, size: r, asChild: o = false, ...s }, n) => {
  const a = o ? c : "button";
  return d.jsx(a, { className: u(v({ variant: t, size: r }), e), ref: n, ...s });
});
f.displayName = "Button";
export {
  f as B
};
