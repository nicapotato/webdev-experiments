import { r as a, j as c, R as Te, b as Ct, d as Yn, e as jo, a as Ao, f as Oo, z as To, F as Io, L as ko, t as Ce } from "./index-DBmo_afS.js";
import { c as Y, a as Mo, b as je, u as q } from "./utils-Bb6pTMKk.js";
import { e as _e, f as Xn, g as Lo } from "./tslib.es6-Xujj8YQZ.js";
import { c as Et } from "./createLucideIcon-CuD0cZ8g.js";
import { B as it } from "./badge-D94zJSh3.js";
import { S as Do, h as $o, j as Fo, v as Wo } from "./snake-game-multiplayer-CvBkv9C2.js";
import { g as Bo, a as Vo, v as Ho } from "./chess-game-multiplayer-XMnaIFi4.js";
import { g as Uo, a as zo, v as Go } from "./checkers-game-multiplayer-BKVBYG5z.js";
import { g as Ko, a as Yo, v as Xo } from "./fighter-game-multiplayer-DyF09_Ov.js";
import { a as Lt } from "./multiplayer-join-gate-BfwlI12W.js";
import { g as Zo } from "./gin-DHzzR3IR.js";
import { R as qo, U as Jo } from "./users-Da_mof_q.js";
import { A as Qo } from "./arrow-left-4hoQOMV3.js";
import "./clsx-B-dksMZM.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const es = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ts = Et("check", es);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ns = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Zn = Et("chevron-down", ns);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rs = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], os = Et("chevron-up", rs);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ss = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], is = Et("lock", ss), ft = a.forwardRef(({ className: e, type: t, ...n }, r) => c.jsx("input", { type: t, className: Y("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ref: r, ...n }));
ft.displayName = "Input";
var as = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ls = as.reduce((e, t) => {
  const n = Mo(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), cs = "Label", qn = a.forwardRef((e, t) => c.jsx(ls.label, { ...e, ref: t, onMouseDown: (n) => {
  var _a2;
  n.target.closest("button, input, select, textarea") || ((_a2 = e.onMouseDown) == null ? void 0 : _a2.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
} }));
qn.displayName = cs;
var us = qn;
function Ee({ className: e, ...t }) {
  return c.jsx(us, { "data-slot": "label", className: Y("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e), ...t });
}
function Sn(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function K(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e == null ? void 0 : e(o), n === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function an(e, t = []) {
  let n = [];
  function r(s, l) {
    const i = a.createContext(l), u = n.length;
    n = [...n, l];
    const d = (m) => {
      var _a2;
      const { scope: g, children: h, ...x } = m, f = ((_a2 = g == null ? void 0 : g[e]) == null ? void 0 : _a2[u]) || i, y = a.useMemo(() => x, Object.values(x));
      return c.jsx(f.Provider, { value: y, children: h });
    };
    d.displayName = s + "Provider";
    function p(m, g) {
      var _a2;
      const h = ((_a2 = g == null ? void 0 : g[e]) == null ? void 0 : _a2[u]) || i, x = a.useContext(h);
      if (x) return x;
      if (l !== void 0) return l;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [d, p];
  }
  const o = () => {
    const s = n.map((l) => a.createContext(l));
    return function(i) {
      const u = (i == null ? void 0 : i[e]) || s;
      return a.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: u } }), [i, u]);
    };
  };
  return o.scopeName = e, [r, ds(o, ...t)];
}
function ds(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(s) {
      const l = r.reduce((i, { useScope: u, scopeName: d }) => {
        const m = u(s)[`__scope${d}`];
        return { ...i, ...m };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Cn(e) {
  const t = fs(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(ms);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function fs(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = gs(o), i = hs(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ps = Symbol("radix.slottable");
function ms(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ps;
}
function hs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function gs(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ys(e) {
  const t = e + "CollectionProvider", [n, r] = an(t), [o, s] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), l = (f) => {
    const { scope: y, children: w } = f, v = Te.useRef(null), b = Te.useRef(/* @__PURE__ */ new Map()).current;
    return c.jsx(o, { scope: y, itemMap: b, collectionRef: v, children: w });
  };
  l.displayName = t;
  const i = e + "CollectionSlot", u = Cn(i), d = Te.forwardRef((f, y) => {
    const { scope: w, children: v } = f, b = s(i, w), S = q(y, b.collectionRef);
    return c.jsx(u, { ref: S, children: v });
  });
  d.displayName = i;
  const p = e + "CollectionItemSlot", m = "data-radix-collection-item", g = Cn(p), h = Te.forwardRef((f, y) => {
    const { scope: w, children: v, ...b } = f, S = Te.useRef(null), R = q(y, S), N = s(p, w);
    return Te.useEffect(() => (N.itemMap.set(S, { ref: S, ...b }), () => void N.itemMap.delete(S))), c.jsx(g, { [m]: "", ref: R, children: v });
  });
  h.displayName = p;
  function x(f) {
    const y = s(e + "CollectionConsumer", f);
    return Te.useCallback(() => {
      const v = y.collectionRef.current;
      if (!v) return [];
      const b = Array.from(v.querySelectorAll(`[${m}]`));
      return Array.from(y.itemMap.values()).sort((N, E) => b.indexOf(N.ref.current) - b.indexOf(E.ref.current));
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: l, Slot: d, ItemSlot: h }, x, r];
}
var vs = a.createContext(void 0);
function bs(e) {
  const t = a.useContext(vs);
  return e || t || "ltr";
}
function xs(e) {
  const t = ws(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(Cs);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function ws(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = Rs(o), i = Es(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ss = Symbol("radix.slottable");
function Cs(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ss;
}
function Es(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Rs(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Jn = _s.reduce((e, t) => {
  const n = xs(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ns(e, t) {
  e && Ct.flushSync(() => e.dispatchEvent(t));
}
function Me(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => (...n) => {
    var _a2;
    return (_a2 = t.current) == null ? void 0 : _a2.call(t, ...n);
  }, []);
}
function Ps(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: true }), () => t.removeEventListener("keydown", r, { capture: true });
  }, [n, t]);
}
var js = "DismissableLayer", Zt = "dismissableLayer.update", As = "dismissableLayer.pointerDownOutside", Os = "dismissableLayer.focusOutside", En, Qn = a.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), er = a.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: l, onDismiss: i, ...u } = e, d = a.useContext(Qn), [p, m] = a.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = a.useState({}), x = q(t, (E) => m(E)), f = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = f.indexOf(y), v = p ? f.indexOf(p) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= w, R = ks((E) => {
    const A = E.target, D = [...d.branches].some((I) => I.contains(A));
    !S || D || (o == null ? void 0 : o(E), l == null ? void 0 : l(E), E.defaultPrevented || (i == null ? void 0 : i()));
  }, g), N = Ms((E) => {
    const A = E.target;
    [...d.branches].some((I) => I.contains(A)) || (s == null ? void 0 : s(E), l == null ? void 0 : l(E), E.defaultPrevented || (i == null ? void 0 : i()));
  }, g);
  return Ps((E) => {
    v === d.layers.size - 1 && (r == null ? void 0 : r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
  }, g), a.useEffect(() => {
    if (p) return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (En = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Rn(), () => {
      n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = En);
    };
  }, [p, g, n, d]), a.useEffect(() => () => {
    p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Rn());
  }, [p, d]), a.useEffect(() => {
    const E = () => h({});
    return document.addEventListener(Zt, E), () => document.removeEventListener(Zt, E);
  }, []), c.jsx(Jn.div, { ...u, ref: x, style: { pointerEvents: b ? S ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: K(e.onFocusCapture, N.onFocusCapture), onBlurCapture: K(e.onBlurCapture, N.onBlurCapture), onPointerDownCapture: K(e.onPointerDownCapture, R.onPointerDownCapture) });
});
er.displayName = js;
var Ts = "DismissableLayerBranch", Is = a.forwardRef((e, t) => {
  const n = a.useContext(Qn), r = a.useRef(null), o = q(t, r);
  return a.useEffect(() => {
    const s = r.current;
    if (s) return n.branches.add(s), () => {
      n.branches.delete(s);
    };
  }, [n.branches]), c.jsx(Jn.div, { ...e, ref: o });
});
Is.displayName = Ts;
function ks(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = a.useRef(false), o = a.useRef(() => {
  });
  return a.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let u = function() {
          tr(As, n, d, { discrete: true });
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: true })) : u();
      } else t.removeEventListener("click", o.current);
      r.current = false;
    }, l = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), { onPointerDownCapture: () => r.current = true };
}
function Ms(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Me(e), r = a.useRef(false);
  return a.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && tr(Os, n, { originalEvent: s }, { discrete: false });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), { onFocusCapture: () => r.current = true, onBlurCapture: () => r.current = false };
}
function Rn() {
  const e = new CustomEvent(Zt);
  document.dispatchEvent(e);
}
function tr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? Ns(o, s) : o.dispatchEvent(s);
}
var Dt = 0;
function Ls() {
  a.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _n()), document.body.insertAdjacentElement("beforeend", e[1] ?? _n()), Dt++, () => {
      Dt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dt--;
    };
  }, []);
}
function _n() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ds(e) {
  const t = $s(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(Ws);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function $s(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = Vs(o), i = Bs(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fs = Symbol("radix.slottable");
function Ws(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fs;
}
function Bs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Vs(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Hs = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Us = Hs.reduce((e, t) => {
  const n = Ds(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), $t = "focusScope.autoFocusOnMount", Ft = "focusScope.autoFocusOnUnmount", Nn = { bubbles: false, cancelable: true }, zs = "FocusScope", nr = a.forwardRef((e, t) => {
  const { loop: n = false, trapped: r = false, onMountAutoFocus: o, onUnmountAutoFocus: s, ...l } = e, [i, u] = a.useState(null), d = Me(o), p = Me(s), m = a.useRef(null), g = q(t, (f) => u(f)), h = a.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  a.useEffect(() => {
    if (r) {
      let f = function(b) {
        if (h.paused || !i) return;
        const S = b.target;
        i.contains(S) ? m.current = S : Re(m.current, { select: true });
      }, y = function(b) {
        if (h.paused || !i) return;
        const S = b.relatedTarget;
        S !== null && (i.contains(S) || Re(m.current, { select: true }));
      }, w = function(b) {
        if (document.activeElement === document.body) for (const R of b) R.removedNodes.length > 0 && Re(i);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", y);
      const v = new MutationObserver(w);
      return i && v.observe(i, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", y), v.disconnect();
      };
    }
  }, [r, i, h.paused]), a.useEffect(() => {
    if (i) {
      jn.add(h);
      const f = document.activeElement;
      if (!i.contains(f)) {
        const w = new CustomEvent($t, Nn);
        i.addEventListener($t, d), i.dispatchEvent(w), w.defaultPrevented || (Gs(qs(rr(i)), { select: true }), document.activeElement === f && Re(i));
      }
      return () => {
        i.removeEventListener($t, d), setTimeout(() => {
          const w = new CustomEvent(Ft, Nn);
          i.addEventListener(Ft, p), i.dispatchEvent(w), w.defaultPrevented || Re(f ?? document.body, { select: true }), i.removeEventListener(Ft, p), jn.remove(h);
        }, 0);
      };
    }
  }, [i, d, p, h]);
  const x = a.useCallback((f) => {
    if (!n && !r || h.paused) return;
    const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, w = document.activeElement;
    if (y && w) {
      const v = f.currentTarget, [b, S] = Ks(v);
      b && S ? !f.shiftKey && w === S ? (f.preventDefault(), n && Re(b, { select: true })) : f.shiftKey && w === b && (f.preventDefault(), n && Re(S, { select: true })) : w === v && f.preventDefault();
    }
  }, [n, r, h.paused]);
  return c.jsx(Us.div, { tabIndex: -1, ...l, ref: g, onKeyDown: x });
});
nr.displayName = zs;
function Gs(e, { select: t = false } = {}) {
  const n = document.activeElement;
  for (const r of e) if (Re(r, { select: t }), document.activeElement !== n) return;
}
function Ks(e) {
  const t = rr(e), n = Pn(t, e), r = Pn(t.reverse(), e);
  return [n, r];
}
function rr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const o = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pn(e, t) {
  for (const n of e) if (!Ys(n, { upTo: t })) return n;
}
function Ys(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (t !== void 0 && e === t) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}
function Xs(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Re(e, { select: t = false } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), e !== n && Xs(e) && t && e.select();
  }
}
var jn = Zs();
function Zs() {
  let e = [];
  return { add(t) {
    const n = e[0];
    t !== n && (n == null ? void 0 : n.pause()), e = An(e, t), e.unshift(t);
  }, remove(t) {
    var _a2;
    e = An(e, t), (_a2 = e[0]) == null ? void 0 : _a2.resume();
  } };
}
function An(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Q = (globalThis == null ? void 0 : globalThis.document) ? a.useLayoutEffect : () => {
}, Js = Yn[" useId ".trim().toString()] || (() => {
}), Qs = 0;
function ln(e) {
  const [t, n] = a.useState(Js());
  return Q(() => {
    n((r) => r ?? String(Qs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const ei = ["top", "right", "bottom", "left"], Ne = Math.min, ee = Math.max, vt = Math.round, at = Math.floor, de = (e) => ({ x: e, y: e }), ti = { left: "right", right: "left", bottom: "top", top: "bottom" };
function qt(e, t, n) {
  return ee(e, Ne(t, n));
}
function ye(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ve(e) {
  return e.split("-")[0];
}
function Ge(e) {
  return e.split("-")[1];
}
function cn(e) {
  return e === "x" ? "y" : "x";
}
function un(e) {
  return e === "y" ? "height" : "width";
}
function ue(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function dn(e) {
  return cn(ue(e));
}
function ni(e, t, n) {
  n === void 0 && (n = false);
  const r = Ge(e), o = dn(e), s = un(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = bt(l)), [l, bt(l)];
}
function ri(e) {
  const t = bt(e);
  return [Jt(e), t, Jt(t)];
}
function Jt(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const On = ["left", "right"], Tn = ["right", "left"], oi = ["top", "bottom"], si = ["bottom", "top"];
function ii(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Tn : On : t ? On : Tn;
    case "left":
    case "right":
      return t ? oi : si;
    default:
      return [];
  }
}
function ai(e, t, n, r) {
  const o = Ge(e);
  let s = ii(ve(e), n === "start", r);
  return o && (s = s.map((l) => l + "-" + o), t && (s = s.concat(s.map(Jt)))), s;
}
function bt(e) {
  const t = ve(e);
  return ti[t] + e.slice(t.length);
}
function li(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function or(e) {
  return typeof e != "number" ? li(e) : { top: e, right: e, bottom: e, left: e };
}
function xt(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function In(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = ue(t), l = dn(t), i = un(l), u = ve(t), d = s === "y", p = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
  let h;
  switch (u) {
    case "top":
      h = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: p, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: m };
      break;
    case "left":
      h = { x: r.x - o.width, y: m };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ge(t)) {
    case "start":
      h[l] -= g * (n && d ? -1 : 1);
      break;
    case "end":
      h[l] += g * (n && d ? -1 : 1);
      break;
  }
  return h;
}
async function ci(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: l, elements: i, strategy: u } = e, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: m = "floating", altBoundary: g = false, padding: h = 0 } = ye(t, e), x = or(h), y = i[g ? m === "floating" ? "reference" : "floating" : m], w = xt(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)), boundary: d, rootBoundary: p, strategy: u })), v = m === "floating" ? { x: r, y: o, width: l.floating.width, height: l.floating.height } : l.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || { x: 1, y: 1 } : { x: 1, y: 1 }, R = xt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: i, rect: v, offsetParent: b, strategy: u }) : v);
  return { top: (w.top - R.top + x.top) / S.y, bottom: (R.bottom - w.bottom + x.bottom) / S.y, left: (w.left - R.left + x.left) / S.x, right: (R.right - w.right + x.right) / S.x };
}
const ui = 50, di = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: l } = n, i = l.detectOverflow ? l : { ...l, detectOverflow: ci }, u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: e, floating: t, strategy: o }), { x: p, y: m } = In(d, r, u), g = r, h = 0;
  const x = {};
  for (let f = 0; f < s.length; f++) {
    const y = s[f];
    if (!y) continue;
    const { name: w, fn: v } = y, { x: b, y: S, data: R, reset: N } = await v({ x: p, y: m, initialPlacement: r, placement: g, strategy: o, middlewareData: x, rects: d, platform: i, elements: { reference: e, floating: t } });
    p = b ?? p, m = S ?? m, x[w] = { ...x[w], ...R }, N && h < ui && (h++, typeof N == "object" && (N.placement && (g = N.placement), N.rects && (d = N.rects === true ? await l.getElementRects({ reference: e, floating: t, strategy: o }) : N.rects), { x: p, y: m } = In(d, g, u)), f = -1);
  }
  return { x: p, y: m, placement: g, strategy: o, middlewareData: x };
}, fi = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: r, placement: o, rects: s, platform: l, elements: i, middlewareData: u } = t, { element: d, padding: p = 0 } = ye(e, t) || {};
  if (d == null) return {};
  const m = or(p), g = { x: n, y: r }, h = dn(o), x = un(h), f = await l.getDimensions(d), y = h === "y", w = y ? "top" : "left", v = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", S = s.reference[x] + s.reference[h] - g[h] - s.floating[x], R = g[h] - s.reference[h], N = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
  let E = N ? N[b] : 0;
  (!E || !await (l.isElement == null ? void 0 : l.isElement(N))) && (E = i.floating[b] || s.floating[x]);
  const A = S / 2 - R / 2, D = E / 2 - f[x] / 2 - 1, I = Ne(m[w], D), M = Ne(m[v], D), $ = I, F = E - f[x] - M, L = E / 2 - f[x] / 2 + A, H = qt($, L, F), O = !u.arrow && Ge(o) != null && L !== H && s.reference[x] / 2 - (L < $ ? I : M) - f[x] / 2 < 0, k = O ? L < $ ? L - $ : L - F : 0;
  return { [h]: g[h] + k, data: { [h]: H, centerOffset: L - H - k, ...O && { alignmentOffset: k } }, reset: O };
} }), pi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, r;
    const { placement: o, middlewareData: s, rects: l, initialPlacement: i, platform: u, elements: d } = t, { mainAxis: p = true, crossAxis: m = true, fallbackPlacements: g, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: x = "none", flipAlignment: f = true, ...y } = ye(e, t);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const w = ve(o), v = ue(i), b = ve(i) === i, S = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), R = g || (b || !f ? [bt(i)] : ri(i)), N = x !== "none";
    !g && N && R.push(...ai(i, f, x, S));
    const E = [i, ...R], A = await u.detectOverflow(t, y), D = [];
    let I = ((r = s.flip) == null ? void 0 : r.overflows) || [];
    if (p && D.push(A[w]), m) {
      const L = ni(o, l, S);
      D.push(A[L[0]], A[L[1]]);
    }
    if (I = [...I, { placement: o, overflows: D }], !D.every((L) => L <= 0)) {
      var M, $;
      const L = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, H = E[L];
      if (H && (!(m === "alignment" ? v !== ue(H) : false) || I.every((j) => ue(j.placement) === v ? j.overflows[0] > 0 : true))) return { data: { index: L, overflows: I }, reset: { placement: H } };
      let O = ($ = I.filter((k) => k.overflows[0] <= 0).sort((k, j) => k.overflows[1] - j.overflows[1])[0]) == null ? void 0 : $.placement;
      if (!O) switch (h) {
        case "bestFit": {
          var F;
          const k = (F = I.filter((j) => {
            if (N) {
              const W = ue(j.placement);
              return W === v || W === "y";
            }
            return true;
          }).map((j) => [j.placement, j.overflows.filter((W) => W > 0).reduce((W, X) => W + X, 0)]).sort((j, W) => j[1] - W[1])[0]) == null ? void 0 : F[0];
          k && (O = k);
          break;
        }
        case "initialPlacement":
          O = i;
          break;
      }
      if (o !== O) return { reset: { placement: O } };
    }
    return {};
  } };
};
function kn(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Mn(e) {
  return ei.some((t) => e[t] >= 0);
}
const mi = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n, platform: r } = t, { strategy: o = "referenceHidden", ...s } = ye(e, t);
    switch (o) {
      case "referenceHidden": {
        const l = await r.detectOverflow(t, { ...s, elementContext: "reference" }), i = kn(l, n.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: Mn(i) } };
      }
      case "escaped": {
        const l = await r.detectOverflow(t, { ...s, altBoundary: true }), i = kn(l, n.floating);
        return { data: { escapedOffsets: i, escaped: Mn(i) } };
      }
      default:
        return {};
    }
  } };
}, sr = /* @__PURE__ */ new Set(["left", "top"]);
async function hi(e, t) {
  const { placement: n, platform: r, elements: o } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = ve(n), i = Ge(n), u = ue(n) === "y", d = sr.has(l) ? -1 : 1, p = s && u ? -1 : 1, m = ye(t, e);
  let { mainAxis: g, crossAxis: h, alignmentAxis: x } = typeof m == "number" ? { mainAxis: m, crossAxis: 0, alignmentAxis: null } : { mainAxis: m.mainAxis || 0, crossAxis: m.crossAxis || 0, alignmentAxis: m.alignmentAxis };
  return i && typeof x == "number" && (h = i === "end" ? x * -1 : x), u ? { x: h * p, y: g * d } : { x: g * d, y: h * p };
}
const gi = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, r;
    const { x: o, y: s, placement: l, middlewareData: i } = t, u = await hi(t, e);
    return l === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : { x: o + u.x, y: s + u.y, data: { ...u, placement: l } };
  } };
}, yi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: o, platform: s } = t, { mainAxis: l = true, crossAxis: i = false, limiter: u = { fn: (w) => {
      let { x: v, y: b } = w;
      return { x: v, y: b };
    } }, ...d } = ye(e, t), p = { x: n, y: r }, m = await s.detectOverflow(t, d), g = ue(ve(o)), h = cn(g);
    let x = p[h], f = p[g];
    if (l) {
      const w = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = x + m[w], S = x - m[v];
      x = qt(b, x, S);
    }
    if (i) {
      const w = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", b = f + m[w], S = f - m[v];
      f = qt(b, f, S);
    }
    const y = u.fn({ ...t, [h]: x, [g]: f });
    return { ...y, data: { x: y.x - n, y: y.y - r, enabled: { [h]: l, [g]: i } } };
  } };
}, vi = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: o, rects: s, middlewareData: l } = t, { offset: i = 0, mainAxis: u = true, crossAxis: d = true } = ye(e, t), p = { x: n, y: r }, m = ue(o), g = cn(m);
    let h = p[g], x = p[m];
    const f = ye(i, t), y = typeof f == "number" ? { mainAxis: f, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...f };
    if (u) {
      const b = g === "y" ? "height" : "width", S = s.reference[g] - s.floating[b] + y.mainAxis, R = s.reference[g] + s.reference[b] - y.mainAxis;
      h < S ? h = S : h > R && (h = R);
    }
    if (d) {
      var w, v;
      const b = g === "y" ? "width" : "height", S = sr.has(ve(o)), R = s.reference[m] - s.floating[b] + (S && ((w = l.offset) == null ? void 0 : w[m]) || 0) + (S ? 0 : y.crossAxis), N = s.reference[m] + s.reference[b] + (S ? 0 : ((v = l.offset) == null ? void 0 : v[m]) || 0) - (S ? y.crossAxis : 0);
      x < R ? x = R : x > N && (x = N);
    }
    return { [g]: h, [m]: x };
  } };
}, bi = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, r;
    const { placement: o, rects: s, platform: l, elements: i } = t, { apply: u = () => {
    }, ...d } = ye(e, t), p = await l.detectOverflow(t, d), m = ve(o), g = Ge(o), h = ue(o) === "y", { width: x, height: f } = s.floating;
    let y, w;
    m === "top" || m === "bottom" ? (y = m, w = g === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = m, y = g === "end" ? "top" : "bottom");
    const v = f - p.top - p.bottom, b = x - p.left - p.right, S = Ne(f - p[y], v), R = Ne(x - p[w], b), N = !t.middlewareData.shift;
    let E = S, A = R;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = b), (r = t.middlewareData.shift) != null && r.enabled.y && (E = v), N && !g) {
      const I = ee(p.left, 0), M = ee(p.right, 0), $ = ee(p.top, 0), F = ee(p.bottom, 0);
      h ? A = x - 2 * (I !== 0 || M !== 0 ? I + M : ee(p.left, p.right)) : E = f - 2 * ($ !== 0 || F !== 0 ? $ + F : ee(p.top, p.bottom));
    }
    await u({ ...t, availableWidth: A, availableHeight: E });
    const D = await l.getDimensions(i.floating);
    return x !== D.width || f !== D.height ? { reset: { rects: true } } : {};
  } };
};
function Rt() {
  return typeof window < "u";
}
function Ke(e) {
  return ir(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(e) {
  var t;
  return (t = (ir(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ir(e) {
  return Rt() ? e instanceof Node || e instanceof te(e).Node : false;
}
function ae(e) {
  return Rt() ? e instanceof Element || e instanceof te(e).Element : false;
}
function be(e) {
  return Rt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : false;
}
function Ln(e) {
  return !Rt() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function et(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = le(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function xi(e) {
  return /^(table|td|th)$/.test(Ke(e));
}
function _t(e) {
  try {
    if (e.matches(":popover-open")) return true;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return false;
  }
}
const wi = /transform|translate|scale|rotate|perspective|filter/, Si = /paint|layout|strict|content/, Ie = (e) => !!e && e !== "none";
let Wt;
function fn(e) {
  const t = ae(e) ? le(e) : e;
  return Ie(t.transform) || Ie(t.translate) || Ie(t.scale) || Ie(t.rotate) || Ie(t.perspective) || !pn() && (Ie(t.backdropFilter) || Ie(t.filter)) || wi.test(t.willChange || "") || Si.test(t.contain || "");
}
function Ci(e) {
  let t = Pe(e);
  for (; be(t) && !ze(t); ) {
    if (fn(t)) return t;
    if (_t(t)) return null;
    t = Pe(t);
  }
  return null;
}
function pn() {
  return Wt == null && (Wt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Wt;
}
function ze(e) {
  return /^(html|body|#document)$/.test(Ke(e));
}
function le(e) {
  return te(e).getComputedStyle(e);
}
function Nt(e) {
  return ae(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Pe(e) {
  if (Ke(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ln(e) && e.host || fe(e);
  return Ln(t) ? t.host : t;
}
function ar(e) {
  const t = Pe(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : be(t) && et(t) ? t : ar(t);
}
function Qe(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = ar(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = te(o);
  if (s) {
    const i = Qt(l);
    return t.concat(l, l.visualViewport || [], et(o) ? o : [], i && n ? Qe(i) : []);
  } else return t.concat(o, Qe(o, [], n));
}
function Qt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lr(e) {
  const t = le(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = be(e), s = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, i = vt(n) !== s || vt(r) !== l;
  return i && (n = s, r = l), { width: n, height: r, $: i };
}
function mn(e) {
  return ae(e) ? e : e.contextElement;
}
function He(e) {
  const t = mn(e);
  if (!be(t)) return de(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: s } = lr(t);
  let l = (s ? vt(n.width) : n.width) / r, i = (s ? vt(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), { x: l, y: i };
}
const Ei = de(0);
function cr(e) {
  const t = te(e);
  return !pn() || !t.visualViewport ? Ei : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Ri(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== te(e) ? false : t;
}
function Le(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), s = mn(e);
  let l = de(1);
  t && (r ? ae(r) && (l = He(r)) : l = He(e));
  const i = Ri(s, n, r) ? cr(s) : de(0);
  let u = (o.left + i.x) / l.x, d = (o.top + i.y) / l.y, p = o.width / l.x, m = o.height / l.y;
  if (s) {
    const g = te(s), h = r && ae(r) ? te(r) : r;
    let x = g, f = Qt(x);
    for (; f && r && h !== x; ) {
      const y = He(f), w = f.getBoundingClientRect(), v = le(f), b = w.left + (f.clientLeft + parseFloat(v.paddingLeft)) * y.x, S = w.top + (f.clientTop + parseFloat(v.paddingTop)) * y.y;
      u *= y.x, d *= y.y, p *= y.x, m *= y.y, u += b, d += S, x = te(f), f = Qt(x);
    }
  }
  return xt({ width: p, height: m, x: u, y: d });
}
function Pt(e, t) {
  const n = Nt(e).scrollLeft;
  return t ? t.left + n : Le(fe(e)).left + n;
}
function ur(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Pt(e, n), o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function _i(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed", l = fe(r), i = t ? _t(t.floating) : false;
  if (r === l || i && s) return n;
  let u = { scrollLeft: 0, scrollTop: 0 }, d = de(1);
  const p = de(0), m = be(r);
  if ((m || !m && !s) && ((Ke(r) !== "body" || et(l)) && (u = Nt(r)), m)) {
    const h = Le(r);
    d = He(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const g = l && !m && !s ? ur(l, u) : de(0);
  return { width: n.width * d.x, height: n.height * d.y, x: n.x * d.x - u.scrollLeft * d.x + p.x + g.x, y: n.y * d.y - u.scrollTop * d.y + p.y + g.y };
}
function Ni(e) {
  return Array.from(e.getClientRects());
}
function Pi(e) {
  const t = fe(e), n = Nt(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Pt(e);
  const i = -n.scrollTop;
  return le(r).direction === "rtl" && (l += ee(t.clientWidth, r.clientWidth) - o), { width: o, height: s, x: l, y: i };
}
const Dn = 25;
function ji(e, t) {
  const n = te(e), r = fe(e), o = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, i = 0, u = 0;
  if (o) {
    s = o.width, l = o.height;
    const p = pn();
    (!p || p && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  const d = Pt(r);
  if (d <= 0) {
    const p = r.ownerDocument, m = p.body, g = getComputedStyle(m), h = p.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - h);
    x <= Dn && (s -= x);
  } else d <= Dn && (s += d);
  return { width: s, height: l, x: i, y: u };
}
function Ai(e, t) {
  const n = Le(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = be(e) ? He(e) : de(1), l = e.clientWidth * s.x, i = e.clientHeight * s.y, u = o * s.x, d = r * s.y;
  return { width: l, height: i, x: u, y: d };
}
function $n(e, t, n) {
  let r;
  if (t === "viewport") r = ji(e, n);
  else if (t === "document") r = Pi(fe(e));
  else if (ae(t)) r = Ai(t, n);
  else {
    const o = cr(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return xt(r);
}
function dr(e, t) {
  const n = Pe(e);
  return n === t || !ae(n) || ze(n) ? false : le(n).position === "fixed" || dr(n, t);
}
function Oi(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Qe(e, [], false).filter((i) => ae(i) && Ke(i) !== "body"), o = null;
  const s = le(e).position === "fixed";
  let l = s ? Pe(e) : e;
  for (; ae(l) && !ze(l); ) {
    const i = le(l), u = fn(l);
    !u && i.position === "fixed" && (o = null), (s ? !u && !o : !u && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || et(l) && !u && dr(e, l)) ? r = r.filter((p) => p !== l) : o = i, l = Pe(l);
  }
  return t.set(e, r), r;
}
function Ti(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [...n === "clippingAncestors" ? _t(t) ? [] : Oi(t, this._c) : [].concat(n), r], i = $n(t, l[0], o);
  let u = i.top, d = i.right, p = i.bottom, m = i.left;
  for (let g = 1; g < l.length; g++) {
    const h = $n(t, l[g], o);
    u = ee(h.top, u), d = Ne(h.right, d), p = Ne(h.bottom, p), m = ee(h.left, m);
  }
  return { width: d - m, height: p - u, x: m, y: u };
}
function Ii(e) {
  const { width: t, height: n } = lr(e);
  return { width: t, height: n };
}
function ki(e, t, n) {
  const r = be(t), o = fe(t), s = n === "fixed", l = Le(e, true, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const u = de(0);
  function d() {
    u.x = Pt(o);
  }
  if (r || !r && !s) if ((Ke(t) !== "body" || et(o)) && (i = Nt(t)), r) {
    const h = Le(t, true, s, t);
    u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
  } else o && d();
  s && !r && o && d();
  const p = o && !r && !s ? ur(o, i) : de(0), m = l.left + i.scrollLeft - u.x - p.x, g = l.top + i.scrollTop - u.y - p.y;
  return { x: m, y: g, width: l.width, height: l.height };
}
function Bt(e) {
  return le(e).position === "static";
}
function Fn(e, t) {
  if (!be(e) || le(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return fe(e) === n && (n = n.ownerDocument.body), n;
}
function fr(e, t) {
  const n = te(e);
  if (_t(e)) return n;
  if (!be(e)) {
    let o = Pe(e);
    for (; o && !ze(o); ) {
      if (ae(o) && !Bt(o)) return o;
      o = Pe(o);
    }
    return n;
  }
  let r = Fn(e, t);
  for (; r && xi(r) && Bt(r); ) r = Fn(r, t);
  return r && ze(r) && Bt(r) && !fn(r) ? n : r || Ci(e) || n;
}
const Mi = async function(e) {
  const t = this.getOffsetParent || fr, n = this.getDimensions, r = await n(e.floating);
  return { reference: ki(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function Li(e) {
  return le(e).direction === "rtl";
}
const Di = { convertOffsetParentRelativeRectToViewportRelativeRect: _i, getDocumentElement: fe, getClippingRect: Ti, getOffsetParent: fr, getElementRects: Mi, getClientRects: Ni, getDimensions: Ii, getScale: He, isElement: ae, isRTL: Li };
function pr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $i(e, t) {
  let n = null, r;
  const o = fe(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, u) {
    i === void 0 && (i = false), u === void 0 && (u = 1), s();
    const d = e.getBoundingClientRect(), { left: p, top: m, width: g, height: h } = d;
    if (i || t(), !g || !h) return;
    const x = at(m), f = at(o.clientWidth - (p + g)), y = at(o.clientHeight - (m + h)), w = at(p), b = { rootMargin: -x + "px " + -f + "px " + -y + "px " + -w + "px", threshold: ee(0, Ne(1, u)) || 1 };
    let S = true;
    function R(N) {
      const E = N[0].intersectionRatio;
      if (E !== u) {
        if (!S) return l();
        E ? l(false, E) : r = setTimeout(() => {
          l(false, 1e-7);
        }, 1e3);
      }
      E === 1 && !pr(d, e.getBoundingClientRect()) && l(), S = false;
    }
    try {
      n = new IntersectionObserver(R, { ...b, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(R, b);
    }
    n.observe(e);
  }
  return l(true), s;
}
function Fi(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: s = true, elementResize: l = typeof ResizeObserver == "function", layoutShift: i = typeof IntersectionObserver == "function", animationFrame: u = false } = r, d = mn(e), p = o || s ? [...d ? Qe(d) : [], ...t ? Qe(t) : []] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", n, { passive: true }), s && w.addEventListener("resize", n);
  });
  const m = d && i ? $i(d, n) : null;
  let g = -1, h = null;
  l && (h = new ResizeObserver((w) => {
    let [v] = w;
    v && v.target === d && h && t && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var b;
      (b = h) == null || b.observe(t);
    })), n();
  }), d && !u && h.observe(d), t && h.observe(t));
  let x, f = u ? Le(e) : null;
  u && y();
  function y() {
    const w = Le(e);
    f && !pr(f, w) && n(), f = w, x = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    p.forEach((v) => {
      o && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), m == null ? void 0 : m(), (w = h) == null || w.disconnect(), h = null, u && cancelAnimationFrame(x);
  };
}
const Wi = gi, Bi = yi, Vi = pi, Hi = bi, Ui = mi, Wn = fi, zi = vi, Gi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Di, ...n }, s = { ...o.platform, _c: r };
  return di(e, t, { ...o, platform: s });
};
var Ki = typeof document < "u", Yi = function() {
}, pt = Ki ? a.useLayoutEffect : Yi;
function wt(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (!wt(e[r], t[r])) return false;
      return true;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !wt(e[s], t[s])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function mr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(e, t) {
  const n = mr(e);
  return Math.round(t * n) / n;
}
function Vt(e) {
  const t = a.useRef(e);
  return pt(() => {
    t.current = e;
  }), t;
}
function Xi(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: s, floating: l } = {}, transform: i = true, whileElementsMounted: u, open: d } = e, [p, m] = a.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [g, h] = a.useState(r);
  wt(g, r) || h(r);
  const [x, f] = a.useState(null), [y, w] = a.useState(null), v = a.useCallback((j) => {
    j !== N.current && (N.current = j, f(j));
  }, []), b = a.useCallback((j) => {
    j !== E.current && (E.current = j, w(j));
  }, []), S = s || x, R = l || y, N = a.useRef(null), E = a.useRef(null), A = a.useRef(p), D = u != null, I = Vt(u), M = Vt(o), $ = Vt(d), F = a.useCallback(() => {
    if (!N.current || !E.current) return;
    const j = { placement: t, strategy: n, middleware: g };
    M.current && (j.platform = M.current), Gi(N.current, E.current, j).then((W) => {
      const X = { ...W, isPositioned: $.current !== false };
      L.current && !wt(A.current, X) && (A.current = X, Ct.flushSync(() => {
        m(X);
      }));
    });
  }, [g, t, n, M, $]);
  pt(() => {
    d === false && A.current.isPositioned && (A.current.isPositioned = false, m((j) => ({ ...j, isPositioned: false })));
  }, [d]);
  const L = a.useRef(false);
  pt(() => (L.current = true, () => {
    L.current = false;
  }), []), pt(() => {
    if (S && (N.current = S), R && (E.current = R), S && R) {
      if (I.current) return I.current(S, R, F);
      F();
    }
  }, [S, R, F, I, D]);
  const H = a.useMemo(() => ({ reference: N, floating: E, setReference: v, setFloating: b }), [v, b]), O = a.useMemo(() => ({ reference: S, floating: R }), [S, R]), k = a.useMemo(() => {
    const j = { position: n, left: 0, top: 0 };
    if (!O.floating) return j;
    const W = Bn(O.floating, p.x), X = Bn(O.floating, p.y);
    return i ? { ...j, transform: "translate(" + W + "px, " + X + "px)", ...mr(O.floating) >= 1.5 && { willChange: "transform" } } : { position: n, left: W, top: X };
  }, [n, i, O.floating, p.x, p.y]);
  return a.useMemo(() => ({ ...p, update: F, refs: H, elements: O, floatingStyles: k }), [p, F, H, O, k]);
}
const Zi = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
    return r && t(r) ? r.current != null ? Wn({ element: r.current, padding: o }).fn(n) : {} : r ? Wn({ element: r, padding: o }).fn(n) : {};
  } };
}, qi = (e, t) => {
  const n = Wi(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
}, Ji = (e, t) => {
  const n = Bi(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
}, Qi = (e, t) => ({ fn: zi(e).fn, options: [e, t] }), ea = (e, t) => {
  const n = Vi(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
}, ta = (e, t) => {
  const n = Hi(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
}, na = (e, t) => {
  const n = Ui(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
}, ra = (e, t) => {
  const n = Zi(e);
  return { name: n.name, fn: n.fn, options: [e, t] };
};
function oa(e) {
  const t = sa(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(aa);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function sa(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = ca(o), i = la(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ia = Symbol("radix.slottable");
function aa(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ia;
}
function la(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ca(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ua = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], da = ua.reduce((e, t) => {
  const n = oa(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), fa = "Arrow", hr = a.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return c.jsx(da.svg, { ...s, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
hr.displayName = fa;
var pa = hr;
function ma(e) {
  const t = ha(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(ya);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function ha(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = ba(o), i = va(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ga = Symbol("radix.slottable");
function ya(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ga;
}
function va(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ba(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var xa = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], gr = xa.reduce((e, t) => {
  const n = ma(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function wa(e) {
  const [t, n] = a.useState(void 0);
  return Q(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const s = o[0];
        let l, i;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, i = d.blockSize;
        } else l = e.offsetWidth, i = e.offsetHeight;
        n({ width: l, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var hn = "Popper", [yr, vr] = an(hn), [Sa, br] = yr(hn), xr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = a.useState(null);
  return c.jsx(Sa, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xr.displayName = hn;
var wr = "PopperAnchor", Sr = a.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, s = br(wr, n), l = a.useRef(null), i = q(t, l), u = a.useRef(null);
  return a.useEffect(() => {
    const d = u.current;
    u.current = (r == null ? void 0 : r.current) || l.current, d !== u.current && s.onAnchorChange(u.current);
  }), r ? null : c.jsx(gr.div, { ...o, ref: i });
});
Sr.displayName = wr;
var gn = "PopperContent", [Ca, Ea] = yr(gn), Cr = a.forwardRef((e, t) => {
  var _a2, _b, _c2, _d, _e2, _f;
  const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: l = 0, arrowPadding: i = 0, avoidCollisions: u = true, collisionBoundary: d = [], collisionPadding: p = 0, sticky: m = "partial", hideWhenDetached: g = false, updatePositionStrategy: h = "optimized", onPlaced: x, ...f } = e, y = br(gn, n), [w, v] = a.useState(null), b = q(t, (P) => v(P)), [S, R] = a.useState(null), N = wa(S), E = (N == null ? void 0 : N.width) ?? 0, A = (N == null ? void 0 : N.height) ?? 0, D = r + (s !== "center" ? "-" + s : ""), I = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, M = Array.isArray(d) ? d : [d], $ = M.length > 0, F = { padding: I, boundary: M.filter(_a), altBoundary: $ }, { refs: L, floatingStyles: H, placement: O, isPositioned: k, middlewareData: j } = Xi({ strategy: "fixed", placement: D, whileElementsMounted: (...P) => Fi(...P, { animationFrame: h === "always" }), elements: { reference: y.anchor }, middleware: [qi({ mainAxis: o + A, alignmentAxis: l }), u && Ji({ mainAxis: true, crossAxis: false, limiter: m === "partial" ? Qi() : void 0, ...F }), u && ea({ ...F }), ta({ ...F, apply: ({ elements: P, rects: U, availableWidth: z, availableHeight: B }) => {
    const { width: V, height: G } = U.reference, Z = P.floating.style;
    Z.setProperty("--radix-popper-available-width", `${z}px`), Z.setProperty("--radix-popper-available-height", `${B}px`), Z.setProperty("--radix-popper-anchor-width", `${V}px`), Z.setProperty("--radix-popper-anchor-height", `${G}px`);
  } }), S && ra({ element: S, padding: i }), Na({ arrowWidth: E, arrowHeight: A }), g && na({ strategy: "referenceHidden", ...F })] }), [W, X] = _r(O), ce = Me(x);
  Q(() => {
    k && (ce == null ? void 0 : ce());
  }, [k, ce]);
  const pe = (_a2 = j.arrow) == null ? void 0 : _a2.x, xe = (_b = j.arrow) == null ? void 0 : _b.y, oe = ((_c2 = j.arrow) == null ? void 0 : _c2.centerOffset) !== 0, [we, J] = a.useState();
  return Q(() => {
    w && J(window.getComputedStyle(w).zIndex);
  }, [w]), c.jsx("div", { ref: L.setFloating, "data-radix-popper-content-wrapper": "", style: { ...H, transform: k ? H.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: we, "--radix-popper-transform-origin": [(_d = j.transformOrigin) == null ? void 0 : _d.x, (_e2 = j.transformOrigin) == null ? void 0 : _e2.y].join(" "), ...((_f = j.hide) == null ? void 0 : _f.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: c.jsx(Ca, { scope: n, placedSide: W, onArrowChange: R, arrowX: pe, arrowY: xe, shouldHideArrow: oe, children: c.jsx(gr.div, { "data-side": W, "data-align": X, ...f, ref: b, style: { ...f.style, animation: k ? void 0 : "none" } }) }) });
});
Cr.displayName = gn;
var Er = "PopperArrow", Ra = { top: "bottom", right: "left", bottom: "top", left: "right" }, Rr = a.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ea(Er, r), l = Ra[s.placedSide];
  return c.jsx("span", { ref: s.onArrowChange, style: { position: "absolute", left: s.arrowX, top: s.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[s.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[s.placedSide], visibility: s.shouldHideArrow ? "hidden" : void 0 }, children: c.jsx(pa, { ...o, ref: n, style: { ...o.style, display: "block" } }) });
});
Rr.displayName = Er;
function _a(e) {
  return e !== null;
}
var Na = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a2, _b, _c2;
  const { placement: n, rects: r, middlewareData: o } = t, l = ((_a2 = o.arrow) == null ? void 0 : _a2.centerOffset) !== 0, i = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, p] = _r(n), m = { start: "0%", center: "50%", end: "100%" }[p], g = (((_b = o.arrow) == null ? void 0 : _b.x) ?? 0) + i / 2, h = (((_c2 = o.arrow) == null ? void 0 : _c2.y) ?? 0) + u / 2;
  let x = "", f = "";
  return d === "bottom" ? (x = l ? m : `${g}px`, f = `${-u}px`) : d === "top" ? (x = l ? m : `${g}px`, f = `${r.floating.height + u}px`) : d === "right" ? (x = `${-u}px`, f = l ? m : `${h}px`) : d === "left" && (x = `${r.floating.width + u}px`, f = l ? m : `${h}px`), { data: { x, y: f } };
} });
function _r(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Pa = xr, ja = Sr, Aa = Cr, Oa = Rr;
function Ta(e) {
  const t = Ia(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(Ma);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Ia(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = Da(o), i = La(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ka = Symbol("radix.slottable");
function Ma(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ka;
}
function La(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Da(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Fa = $a.reduce((e, t) => {
  const n = Ta(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Wa = "Portal", Nr = a.forwardRef((e, t) => {
  var _a2;
  const { container: n, ...r } = e, [o, s] = a.useState(false);
  Q(() => s(true), []);
  const l = n || o && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return l ? jo.createPortal(c.jsx(Fa.div, { ...r, ref: t }), l) : null;
});
Nr.displayName = Wa;
function Pr(e) {
  const t = Ba(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(Ha);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Ba(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = za(o), i = Ua(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Va = Symbol("radix.slottable");
function Ha(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Va;
}
function Ua(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function za(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ga = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ne = Ga.reduce((e, t) => {
  const n = Pr(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ka = Yn[" useInsertionEffect ".trim().toString()] || Q;
function Vn({ prop: e, defaultProp: t, onChange: n = () => {
}, caller: r }) {
  const [o, s, l] = Ya({ defaultProp: t, onChange: n }), i = e !== void 0, u = i ? e : o;
  {
    const p = a.useRef(e !== void 0);
    a.useEffect(() => {
      const m = p.current;
      m !== i && console.warn(`${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), p.current = i;
    }, [i, r]);
  }
  const d = a.useCallback((p) => {
    var _a2;
    if (i) {
      const m = Xa(p) ? p(e) : p;
      m !== e && ((_a2 = l.current) == null ? void 0 : _a2.call(l, m));
    } else s(p);
  }, [i, e, s, l]);
  return [u, d];
}
function Ya({ defaultProp: e, onChange: t }) {
  const [n, r] = a.useState(e), o = a.useRef(n), s = a.useRef(t);
  return Ka(() => {
    s.current = t;
  }, [t]), a.useEffect(() => {
    var _a2;
    o.current !== n && ((_a2 = s.current) == null ? void 0 : _a2.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Xa(e) {
  return typeof e == "function";
}
function Za(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function qa(e) {
  const t = Ja(e), n = a.forwardRef((r, o) => {
    const { children: s, ...l } = r, i = a.Children.toArray(s), u = i.find(el);
    if (u) {
      const d = u.props.children, p = i.map((m) => m === u ? a.Children.count(d) > 1 ? a.Children.only(null) : a.isValidElement(d) ? d.props.children : null : m);
      return c.jsx(t, { ...l, ref: o, children: a.isValidElement(d) ? a.cloneElement(d, void 0, p) : null });
    }
    return c.jsx(t, { ...l, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Ja(e) {
  const t = a.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (a.isValidElement(o)) {
      const l = nl(o), i = tl(s, o.props);
      return o.type !== a.Fragment && (i.ref = r ? je(r, l) : l), a.cloneElement(o, i);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Qa = Symbol("radix.slottable");
function el(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Qa;
}
function tl(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const u = s(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nl(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rl = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], ol = rl.reduce((e, t) => {
  const n = qa(`Primitive.${t}`), r = a.forwardRef((o, s) => {
    const { asChild: l, ...i } = o, u = l ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), c.jsx(u, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), jr = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }), sl = "VisuallyHidden", il = a.forwardRef((e, t) => c.jsx(ol.span, { ...e, ref: t, style: { ...jr, ...e.style } }));
il.displayName = sl;
var al = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = {}, Ht = 0, Ar = function(e) {
  return e && (e.host || Ar(e.parentNode));
}, ll = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n)) return n;
    var r = Ar(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cl = function(e, t, n, r) {
  var o = ll(t, Array.isArray(e) ? e : [e]);
  ct[n] || (ct[n] = /* @__PURE__ */ new WeakMap());
  var s = ct[n], l = [], i = /* @__PURE__ */ new Set(), u = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var p = function(m) {
    !m || u.has(m) || Array.prototype.forEach.call(m.children, function(g) {
      if (i.has(g)) p(g);
      else try {
        var h = g.getAttribute(r), x = h !== null && h !== "false", f = (We.get(g) || 0) + 1, y = (s.get(g) || 0) + 1;
        We.set(g, f), s.set(g, y), l.push(g), f === 1 && x && lt.set(g, true), y === 1 && g.setAttribute(n, "true"), x || g.setAttribute(r, "true");
      } catch (w) {
        console.error("aria-hidden: cannot operate on ", g, w);
      }
    });
  };
  return p(t), i.clear(), Ht++, function() {
    l.forEach(function(m) {
      var g = We.get(m) - 1, h = s.get(m) - 1;
      We.set(m, g), s.set(m, h), g || (lt.has(m) || m.removeAttribute(r), lt.delete(m)), h || m.removeAttribute(n);
    }), Ht--, Ht || (We = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = {});
  };
}, ul = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = al(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), cl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, mt = "right-scroll-bar-position", ht = "width-before-scroll-bar", dl = "with-scroll-bars-hidden", fl = "--removed-body-scroll-bar-size";
function Ut(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pl(e, t) {
  var n = a.useState(function() {
    return { value: e, callback: t, facade: { get current() {
      return n.value;
    }, set current(r) {
      var o = n.value;
      o !== r && (n.value = r, n.callback(r, o));
    } } };
  })[0];
  return n.callback = t, n.facade;
}
var ml = typeof window < "u" ? a.useLayoutEffect : a.useEffect, Hn = /* @__PURE__ */ new WeakMap();
function hl(e, t) {
  var n = pl(null, function(r) {
    return e.forEach(function(o) {
      return Ut(o, r);
    });
  });
  return ml(function() {
    var r = Hn.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), l = n.current;
      o.forEach(function(i) {
        s.has(i) || Ut(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Ut(i, l);
      });
    }
    Hn.set(n, e);
  }, [e]), n;
}
function gl(e) {
  return e;
}
function yl(e, t) {
  t === void 0 && (t = gl);
  var n = [], r = false, o = { read: function() {
    if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n.length ? n[n.length - 1] : e;
  }, useMedium: function(s) {
    var l = t(s, r);
    return n.push(l), function() {
      n = n.filter(function(i) {
        return i !== l;
      });
    };
  }, assignSyncMedium: function(s) {
    for (r = true; n.length; ) {
      var l = n;
      n = [], l.forEach(s);
    }
    n = { push: function(i) {
      return s(i);
    }, filter: function() {
      return n;
    } };
  }, assignMedium: function(s) {
    r = true;
    var l = [];
    if (n.length) {
      var i = n;
      n = [], i.forEach(s), l = n;
    }
    var u = function() {
      var p = l;
      l = [], p.forEach(s);
    }, d = function() {
      return Promise.resolve().then(u);
    };
    d(), n = { push: function(p) {
      l.push(p), d();
    }, filter: function(p) {
      return l = l.filter(p), n;
    } };
  } };
  return o;
}
function vl(e) {
  e === void 0 && (e = {});
  var t = yl(null);
  return t.options = _e({ async: true, ssr: false }, e), t;
}
var Or = function(e) {
  var t = e.sideCar, n = Xn(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return a.createElement(r, _e({}, n));
};
Or.isSideCarExport = true;
function bl(e, t) {
  return e.useMedium(t), Or;
}
var Tr = vl(), zt = function() {
}, jt = a.forwardRef(function(e, t) {
  var n = a.useRef(null), r = a.useState({ onScrollCapture: zt, onWheelCapture: zt, onTouchMoveCapture: zt }), o = r[0], s = r[1], l = e.forwardProps, i = e.children, u = e.className, d = e.removeScrollBar, p = e.enabled, m = e.shards, g = e.sideCar, h = e.noRelative, x = e.noIsolation, f = e.inert, y = e.allowPinchZoom, w = e.as, v = w === void 0 ? "div" : w, b = e.gapMode, S = Xn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, N = hl([n, t]), E = _e(_e({}, S), o);
  return a.createElement(a.Fragment, null, p && a.createElement(R, { sideCar: Tr, removeScrollBar: d, shards: m, noRelative: h, noIsolation: x, inert: f, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: b }), l ? a.cloneElement(a.Children.only(i), _e(_e({}, E), { ref: N })) : a.createElement(v, _e({}, E, { className: u, ref: N }), i));
});
jt.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
jt.classNames = { fullWidth: ht, zeroRight: mt };
var xl = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function wl() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xl();
  return t && e.setAttribute("nonce", t), e;
}
function Sl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var El = function() {
  var e = 0, t = null;
  return { add: function(n) {
    e == 0 && (t = wl()) && (Sl(t, n), Cl(t)), e++;
  }, remove: function() {
    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
  } };
}, Rl = function() {
  var e = El();
  return function(t, n) {
    a.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ir = function() {
  var e = Rl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, _l = { left: 0, top: 0, right: 0, gap: 0 }, Gt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Nl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gt(n), Gt(r), Gt(o)];
}, Pl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u") return _l;
  var t = Nl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
}, jl = Ir(), Ue = "data-scroll-locked", Al = function(e, t, n, r) {
  var o = e.left, s = e.top, l = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Ue, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(mt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ht, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(mt, " .").concat(mt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ht, " .").concat(ht, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ue, `] {
    `).concat(fl, ": ").concat(i, `px;
  }
`);
}, Un = function() {
  var e = parseInt(document.body.getAttribute(Ue) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ol = function() {
  a.useEffect(function() {
    return document.body.setAttribute(Ue, (Un() + 1).toString()), function() {
      var e = Un() - 1;
      e <= 0 ? document.body.removeAttribute(Ue) : document.body.setAttribute(Ue, e.toString());
    };
  }, []);
}, Tl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ol();
  var s = a.useMemo(function() {
    return Pl(o);
  }, [o]);
  return a.createElement(jl, { styles: Al(s, !t, o, n ? "" : "!important") });
}, en = false;
if (typeof window < "u") try {
  var ut = Object.defineProperty({}, "passive", { get: function() {
    return en = true, true;
  } });
  window.addEventListener("test", ut, ut), window.removeEventListener("test", ut, ut);
} catch {
  en = false;
}
var Be = en ? { passive: false } : false, Il = function(e) {
  return e.tagName === "TEXTAREA";
}, kr = function(e, t) {
  if (!(e instanceof Element)) return false;
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Il(e) && n[t] === "visible");
}, kl = function(e) {
  return kr(e, "overflowY");
}, Ml = function(e) {
  return kr(e, "overflowX");
}, zn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Mr(e, r);
    if (o) {
      var s = Lr(e, r), l = s[1], i = s[2];
      if (l > i) return true;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return false;
}, Ll = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [t, n, r];
}, Dl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [t, n, r];
}, Mr = function(e, t) {
  return e === "v" ? kl(t) : Ml(t);
}, Lr = function(e, t) {
  return e === "v" ? Ll(t) : Dl(t);
}, $l = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Fl = function(e, t, n, r, o) {
  var s = $l(e, window.getComputedStyle(t).direction), l = s * r, i = n.target, u = t.contains(i), d = false, p = l > 0, m = 0, g = 0;
  do {
    if (!i) break;
    var h = Lr(e, i), x = h[0], f = h[1], y = h[2], w = f - y - s * x;
    (x || w) && Mr(e, i) && (m += w, g += x);
    var v = i.parentNode;
    i = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (!u && i !== document.body || u && (t.contains(i) || t === i));
  return (p && Math.abs(m) < 1 || !p && Math.abs(g) < 1) && (d = true), d;
}, dt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Gn = function(e) {
  return [e.deltaX, e.deltaY];
}, Kn = function(e) {
  return e && "current" in e ? e.current : e;
}, Wl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Vl = 0, Ve = [];
function Hl(e) {
  var t = a.useRef([]), n = a.useRef([0, 0]), r = a.useRef(), o = a.useState(Vl++)[0], s = a.useState(Ir)[0], l = a.useRef(e);
  a.useEffect(function() {
    l.current = e;
  }, [e]), a.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var f = Lo([e.lockRef.current], (e.shards || []).map(Kn), true).filter(Boolean);
      return f.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), f.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = a.useCallback(function(f, y) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey) return !l.current.allowPinchZoom;
    var w = dt(f), v = n.current, b = "deltaX" in f ? f.deltaX : v[0] - w[0], S = "deltaY" in f ? f.deltaY : v[1] - w[1], R, N = f.target, E = Math.abs(b) > Math.abs(S) ? "h" : "v";
    if ("touches" in f && E === "h" && N.type === "range") return false;
    var A = window.getSelection(), D = A && A.anchorNode, I = D ? D === N || D.contains(N) : false;
    if (I) return false;
    var M = zn(E, N);
    if (!M) return true;
    if (M ? R = E : (R = E === "v" ? "h" : "v", M = zn(E, N)), !M) return false;
    if (!r.current && "changedTouches" in f && (b || S) && (r.current = R), !R) return true;
    var $ = r.current || R;
    return Fl($, y, f, $ === "h" ? b : S);
  }, []), u = a.useCallback(function(f) {
    var y = f;
    if (!(!Ve.length || Ve[Ve.length - 1] !== s)) {
      var w = "deltaY" in y ? Gn(y) : dt(y), v = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && Wl(R.delta, w);
      })[0];
      if (v && v.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!v) {
        var b = (l.current.shards || []).map(Kn).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), S = b.length > 0 ? i(y, b[0]) : !l.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), d = a.useCallback(function(f, y, w, v) {
    var b = { name: f, delta: y, target: w, should: v, shadowParent: Ul(w) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== b;
      });
    }, 1);
  }, []), p = a.useCallback(function(f) {
    n.current = dt(f), r.current = void 0;
  }, []), m = a.useCallback(function(f) {
    d(f.type, Gn(f), f.target, i(f, e.lockRef.current));
  }, []), g = a.useCallback(function(f) {
    d(f.type, dt(f), f.target, i(f, e.lockRef.current));
  }, []);
  a.useEffect(function() {
    return Ve.push(s), e.setCallbacks({ onScrollCapture: m, onWheelCapture: m, onTouchMoveCapture: g }), document.addEventListener("wheel", u, Be), document.addEventListener("touchmove", u, Be), document.addEventListener("touchstart", p, Be), function() {
      Ve = Ve.filter(function(f) {
        return f !== s;
      }), document.removeEventListener("wheel", u, Be), document.removeEventListener("touchmove", u, Be), document.removeEventListener("touchstart", p, Be);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return a.createElement(a.Fragment, null, x ? a.createElement(s, { styles: Bl(o) }) : null, h ? a.createElement(Tl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null);
}
function Ul(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zl = bl(Tr, Hl);
var Dr = a.forwardRef(function(e, t) {
  return a.createElement(jt, _e({}, e, { ref: t, sideCar: zl }));
});
Dr.classNames = jt.classNames;
var Gl = [" ", "Enter", "ArrowUp", "ArrowDown"], Kl = [" ", "Enter"], De = "Select", [At, Ot, Yl] = ys(De), [Ye] = an(De, [Yl, vr]), Tt = vr(), [Xl, Ae] = Ye(De), [Zl, ql] = Ye(De), $r = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: s, value: l, defaultValue: i, onValueChange: u, dir: d, name: p, autoComplete: m, disabled: g, required: h, form: x } = e, f = Tt(t), [y, w] = a.useState(null), [v, b] = a.useState(null), [S, R] = a.useState(false), N = bs(d), [E, A] = Vn({ prop: r, defaultProp: o ?? false, onChange: s, caller: De }), [D, I] = Vn({ prop: l, defaultProp: i, onChange: u, caller: De }), M = a.useRef(null), $ = y ? x || !!y.closest("form") : true, [F, L] = a.useState(/* @__PURE__ */ new Set()), H = Array.from(F).map((O) => O.props.value).join(";");
  return c.jsx(Pa, { ...f, children: c.jsxs(Xl, { required: h, scope: t, trigger: y, onTriggerChange: w, valueNode: v, onValueNodeChange: b, valueNodeHasChildren: S, onValueNodeHasChildrenChange: R, contentId: ln(), value: D, onValueChange: I, open: E, onOpenChange: A, dir: N, triggerPointerDownPosRef: M, disabled: g, children: [c.jsx(At.Provider, { scope: t, children: c.jsx(Zl, { scope: e.__scopeSelect, onNativeOptionAdd: a.useCallback((O) => {
    L((k) => new Set(k).add(O));
  }, []), onNativeOptionRemove: a.useCallback((O) => {
    L((k) => {
      const j = new Set(k);
      return j.delete(O), j;
    });
  }, []), children: n }) }), $ ? c.jsxs(lo, { "aria-hidden": true, required: h, tabIndex: -1, name: p, autoComplete: m, value: D, onChange: (O) => I(O.target.value), disabled: g, form: x, children: [D === void 0 ? c.jsx("option", { value: "" }) : null, Array.from(F)] }, H) : null] }) });
};
$r.displayName = De;
var Fr = "SelectTrigger", Wr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, disabled: r = false, ...o } = e, s = Tt(n), l = Ae(Fr, n), i = l.disabled || r, u = q(t, l.onTriggerChange), d = Ot(n), p = a.useRef("touch"), [m, g, h] = uo((f) => {
    const y = d().filter((b) => !b.disabled), w = y.find((b) => b.value === l.value), v = fo(y, f, w);
    v !== void 0 && l.onValueChange(v.value);
  }), x = (f) => {
    i || (l.onOpenChange(true), h()), f && (l.triggerPointerDownPosRef.current = { x: Math.round(f.pageX), y: Math.round(f.pageY) });
  };
  return c.jsx(ja, { asChild: true, ...s, children: c.jsx(ne.button, { type: "button", role: "combobox", "aria-controls": l.contentId, "aria-expanded": l.open, "aria-required": l.required, "aria-autocomplete": "none", dir: l.dir, "data-state": l.open ? "open" : "closed", disabled: i, "data-disabled": i ? "" : void 0, "data-placeholder": co(l.value) ? "" : void 0, ...o, ref: u, onClick: K(o.onClick, (f) => {
    f.currentTarget.focus(), p.current !== "mouse" && x(f);
  }), onPointerDown: K(o.onPointerDown, (f) => {
    p.current = f.pointerType;
    const y = f.target;
    y.hasPointerCapture(f.pointerId) && y.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === false && f.pointerType === "mouse" && (x(f), f.preventDefault());
  }), onKeyDown: K(o.onKeyDown, (f) => {
    const y = m.current !== "";
    !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && g(f.key), !(y && f.key === " ") && Gl.includes(f.key) && (x(), f.preventDefault());
  }) }) });
});
Wr.displayName = Fr;
var Br = "SelectValue", Vr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: s, placeholder: l = "", ...i } = e, u = Ae(Br, n), { onValueNodeHasChildrenChange: d } = u, p = s !== void 0, m = q(t, u.onValueNodeChange);
  return Q(() => {
    d(p);
  }, [d, p]), c.jsx(ne.span, { ...i, ref: m, style: { pointerEvents: "none" }, children: co(u.value) ? c.jsx(c.Fragment, { children: l }) : s });
});
Vr.displayName = Br;
var Jl = "SelectIcon", Hr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return c.jsx(ne.span, { "aria-hidden": true, ...o, ref: t, children: r || "\u25BC" });
});
Hr.displayName = Jl;
var Ql = "SelectPortal", Ur = (e) => c.jsx(Nr, { asChild: true, ...e });
Ur.displayName = Ql;
var $e = "SelectContent", zr = a.forwardRef((e, t) => {
  const n = Ae($e, e.__scopeSelect), [r, o] = a.useState();
  if (Q(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const s = r;
    return s ? Ct.createPortal(c.jsx(Gr, { scope: e.__scopeSelect, children: c.jsx(At.Slot, { scope: e.__scopeSelect, children: c.jsx("div", { children: e.children }) }) }), s) : null;
  }
  return c.jsx(Kr, { ...e, ref: t });
});
zr.displayName = $e;
var ie = 10, [Gr, Oe] = Ye($e), ec = "SelectContentImpl", tc = Pr("SelectContent.RemoveScroll"), Kr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, position: r = "item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: l, side: i, sideOffset: u, align: d, alignOffset: p, arrowPadding: m, collisionBoundary: g, collisionPadding: h, sticky: x, hideWhenDetached: f, avoidCollisions: y, ...w } = e, v = Ae($e, n), [b, S] = a.useState(null), [R, N] = a.useState(null), E = q(t, (P) => S(P)), [A, D] = a.useState(null), [I, M] = a.useState(null), $ = Ot(n), [F, L] = a.useState(false), H = a.useRef(false);
  a.useEffect(() => {
    if (b) return ul(b);
  }, [b]), Ls();
  const O = a.useCallback((P) => {
    const [U, ...z] = $().map((G) => G.ref.current), [B] = z.slice(-1), V = document.activeElement;
    for (const G of P) if (G === V || (G == null ? void 0 : G.scrollIntoView({ block: "nearest" }), G === U && R && (R.scrollTop = 0), G === B && R && (R.scrollTop = R.scrollHeight), G == null ? void 0 : G.focus(), document.activeElement !== V)) return;
  }, [$, R]), k = a.useCallback(() => O([A, b]), [O, A, b]);
  a.useEffect(() => {
    F && k();
  }, [F, k]);
  const { onOpenChange: j, triggerPointerDownPosRef: W } = v;
  a.useEffect(() => {
    if (b) {
      let P = { x: 0, y: 0 };
      const U = (B) => {
        var _a2, _b;
        P = { x: Math.abs(Math.round(B.pageX) - (((_a2 = W.current) == null ? void 0 : _a2.x) ?? 0)), y: Math.abs(Math.round(B.pageY) - (((_b = W.current) == null ? void 0 : _b.y) ?? 0)) };
      }, z = (B) => {
        P.x <= 10 && P.y <= 10 ? B.preventDefault() : b.contains(B.target) || j(false), document.removeEventListener("pointermove", U), W.current = null;
      };
      return W.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", z, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", z, { capture: true });
      };
    }
  }, [b, j, W]), a.useEffect(() => {
    const P = () => j(false);
    return window.addEventListener("blur", P), window.addEventListener("resize", P), () => {
      window.removeEventListener("blur", P), window.removeEventListener("resize", P);
    };
  }, [j]);
  const [X, ce] = uo((P) => {
    const U = $().filter((V) => !V.disabled), z = U.find((V) => V.ref.current === document.activeElement), B = fo(U, P, z);
    B && setTimeout(() => B.ref.current.focus());
  }), pe = a.useCallback((P, U, z) => {
    const B = !H.current && !z;
    (v.value !== void 0 && v.value === U || B) && (D(P), B && (H.current = true));
  }, [v.value]), xe = a.useCallback(() => b == null ? void 0 : b.focus(), [b]), oe = a.useCallback((P, U, z) => {
    const B = !H.current && !z;
    (v.value !== void 0 && v.value === U || B) && M(P);
  }, [v.value]), we = r === "popper" ? tn : Yr, J = we === tn ? { side: i, sideOffset: u, align: d, alignOffset: p, arrowPadding: m, collisionBoundary: g, collisionPadding: h, sticky: x, hideWhenDetached: f, avoidCollisions: y } : {};
  return c.jsx(Gr, { scope: n, content: b, viewport: R, onViewportChange: N, itemRefCallback: pe, selectedItem: A, onItemLeave: xe, itemTextRefCallback: oe, focusSelectedItem: k, selectedItemText: I, position: r, isPositioned: F, searchRef: X, children: c.jsx(Dr, { as: tc, allowPinchZoom: true, children: c.jsx(nr, { asChild: true, trapped: v.open, onMountAutoFocus: (P) => {
    P.preventDefault();
  }, onUnmountAutoFocus: K(o, (P) => {
    var _a2;
    (_a2 = v.trigger) == null ? void 0 : _a2.focus({ preventScroll: true }), P.preventDefault();
  }), children: c.jsx(er, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: (P) => P.preventDefault(), onDismiss: () => v.onOpenChange(false), children: c.jsx(we, { role: "listbox", id: v.contentId, "data-state": v.open ? "open" : "closed", dir: v.dir, onContextMenu: (P) => P.preventDefault(), ...w, ...J, onPlaced: () => L(true), ref: E, style: { display: "flex", flexDirection: "column", outline: "none", ...w.style }, onKeyDown: K(w.onKeyDown, (P) => {
    const U = P.ctrlKey || P.altKey || P.metaKey;
    if (P.key === "Tab" && P.preventDefault(), !U && P.key.length === 1 && ce(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
      let B = $().filter((V) => !V.disabled).map((V) => V.ref.current);
      if (["ArrowUp", "End"].includes(P.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
        const V = P.target, G = B.indexOf(V);
        B = B.slice(G + 1);
      }
      setTimeout(() => O(B)), P.preventDefault();
    }
  }) }) }) }) }) });
});
Kr.displayName = ec;
var nc = "SelectItemAlignedPosition", Yr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Ae($e, n), l = Oe($e, n), [i, u] = a.useState(null), [d, p] = a.useState(null), m = q(t, (E) => p(E)), g = Ot(n), h = a.useRef(false), x = a.useRef(true), { viewport: f, selectedItem: y, selectedItemText: w, focusSelectedItem: v } = l, b = a.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && f && y && w) {
      const E = s.trigger.getBoundingClientRect(), A = d.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), I = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const V = I.left - A.left, G = D.left - V, Z = E.left - G, me = E.width + Z, Xe = Math.max(me, A.width), Ze = window.innerWidth - ie, Fe = Sn(G, [ie, Math.max(ie, Ze - Xe)]);
        i.style.minWidth = me + "px", i.style.left = Fe + "px";
      } else {
        const V = A.right - I.right, G = window.innerWidth - D.right - V, Z = window.innerWidth - E.right - G, me = E.width + Z, Xe = Math.max(me, A.width), Ze = window.innerWidth - ie, Fe = Sn(G, [ie, Math.max(ie, Ze - Xe)]);
        i.style.minWidth = me + "px", i.style.right = Fe + "px";
      }
      const M = g(), $ = window.innerHeight - ie * 2, F = f.scrollHeight, L = window.getComputedStyle(d), H = parseInt(L.borderTopWidth, 10), O = parseInt(L.paddingTop, 10), k = parseInt(L.borderBottomWidth, 10), j = parseInt(L.paddingBottom, 10), W = H + O + F + j + k, X = Math.min(y.offsetHeight * 5, W), ce = window.getComputedStyle(f), pe = parseInt(ce.paddingTop, 10), xe = parseInt(ce.paddingBottom, 10), oe = E.top + E.height / 2 - ie, we = $ - oe, J = y.offsetHeight / 2, P = y.offsetTop + J, U = H + O + P, z = W - U;
      if (U <= oe) {
        const V = M.length > 0 && y === M[M.length - 1].ref.current;
        i.style.bottom = "0px";
        const G = d.clientHeight - f.offsetTop - f.offsetHeight, Z = Math.max(we, J + (V ? xe : 0) + G + k), me = U + Z;
        i.style.height = me + "px";
      } else {
        const V = M.length > 0 && y === M[0].ref.current;
        i.style.top = "0px";
        const Z = Math.max(oe, H + f.offsetTop + (V ? pe : 0) + J) + z;
        i.style.height = Z + "px", f.scrollTop = U - oe + f.offsetTop;
      }
      i.style.margin = `${ie}px 0`, i.style.minHeight = X + "px", i.style.maxHeight = $ + "px", r == null ? void 0 : r(), requestAnimationFrame(() => h.current = true);
    }
  }, [g, s.trigger, s.valueNode, i, d, f, y, w, s.dir, r]);
  Q(() => b(), [b]);
  const [S, R] = a.useState();
  Q(() => {
    d && R(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = a.useCallback((E) => {
    E && x.current === true && (b(), v == null ? void 0 : v(), x.current = false);
  }, [b, v]);
  return c.jsx(oc, { scope: n, contentWrapper: i, shouldExpandOnScrollRef: h, onScrollButtonChange: N, children: c.jsx("div", { ref: u, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: S }, children: c.jsx(ne.div, { ...o, ref: m, style: { boxSizing: "border-box", maxHeight: "100%", ...o.style } }) }) });
});
Yr.displayName = nc;
var rc = "SelectPopperPosition", tn = a.forwardRef((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = ie, ...s } = e, l = Tt(n);
  return c.jsx(Aa, { ...l, ...s, ref: t, align: r, collisionPadding: o, style: { boxSizing: "border-box", ...s.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
tn.displayName = rc;
var [oc, yn] = Ye($e, {}), nn = "SelectViewport", Xr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, nonce: r, ...o } = e, s = Oe(nn, n), l = yn(nn, n), i = q(t, s.onViewportChange), u = a.useRef(0);
  return c.jsxs(c.Fragment, { children: [c.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: r }), c.jsx(At.Slot, { scope: n, children: c.jsx(ne.div, { "data-radix-select-viewport": "", role: "presentation", ...o, ref: i, style: { position: "relative", flex: 1, overflow: "hidden auto", ...o.style }, onScroll: K(o.onScroll, (d) => {
    const p = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: g } = l;
    if ((g == null ? void 0 : g.current) && m) {
      const h = Math.abs(u.current - p.scrollTop);
      if (h > 0) {
        const x = window.innerHeight - ie * 2, f = parseFloat(m.style.minHeight), y = parseFloat(m.style.height), w = Math.max(f, y);
        if (w < x) {
          const v = w + h, b = Math.min(x, v), S = v - b;
          m.style.height = b + "px", m.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, m.style.justifyContent = "flex-end");
        }
      }
    }
    u.current = p.scrollTop;
  }) }) })] });
});
Xr.displayName = nn;
var Zr = "SelectGroup", [sc, ic] = Ye(Zr), ac = a.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ln();
  return c.jsx(sc, { scope: n, id: o, children: c.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
});
ac.displayName = Zr;
var qr = "SelectLabel", Jr = a.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ic(qr, n);
  return c.jsx(ne.div, { id: o.id, ...r, ref: t });
});
Jr.displayName = qr;
var St = "SelectItem", [lc, Qr] = Ye(St), eo = a.forwardRef((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = false, textValue: s, ...l } = e, i = Ae(St, n), u = Oe(St, n), d = i.value === r, [p, m] = a.useState(s ?? ""), [g, h] = a.useState(false), x = q(t, (v) => {
    var _a2;
    return (_a2 = u.itemRefCallback) == null ? void 0 : _a2.call(u, v, r, o);
  }), f = ln(), y = a.useRef("touch"), w = () => {
    o || (i.onValueChange(r), i.onOpenChange(false));
  };
  if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return c.jsx(lc, { scope: n, value: r, disabled: o, textId: f, isSelected: d, onItemTextChange: a.useCallback((v) => {
    m((b) => b || ((v == null ? void 0 : v.textContent) ?? "").trim());
  }, []), children: c.jsx(At.ItemSlot, { scope: n, value: r, disabled: o, textValue: p, children: c.jsx(ne.div, { role: "option", "aria-labelledby": f, "data-highlighted": g ? "" : void 0, "aria-selected": d && g, "data-state": d ? "checked" : "unchecked", "aria-disabled": o || void 0, "data-disabled": o ? "" : void 0, tabIndex: o ? void 0 : -1, ...l, ref: x, onFocus: K(l.onFocus, () => h(true)), onBlur: K(l.onBlur, () => h(false)), onClick: K(l.onClick, () => {
    y.current !== "mouse" && w();
  }), onPointerUp: K(l.onPointerUp, () => {
    y.current === "mouse" && w();
  }), onPointerDown: K(l.onPointerDown, (v) => {
    y.current = v.pointerType;
  }), onPointerMove: K(l.onPointerMove, (v) => {
    var _a2;
    y.current = v.pointerType, o ? (_a2 = u.onItemLeave) == null ? void 0 : _a2.call(u) : y.current === "mouse" && v.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: K(l.onPointerLeave, (v) => {
    var _a2;
    v.currentTarget === document.activeElement && ((_a2 = u.onItemLeave) == null ? void 0 : _a2.call(u));
  }), onKeyDown: K(l.onKeyDown, (v) => {
    var _a2;
    ((_a2 = u.searchRef) == null ? void 0 : _a2.current) !== "" && v.key === " " || (Kl.includes(v.key) && w(), v.key === " " && v.preventDefault());
  }) }) }) });
});
eo.displayName = St;
var Je = "SelectItemText", to = a.forwardRef((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...s } = e, l = Ae(Je, n), i = Oe(Je, n), u = Qr(Je, n), d = ql(Je, n), [p, m] = a.useState(null), g = q(t, (w) => m(w), u.onItemTextChange, (w) => {
    var _a2;
    return (_a2 = i.itemTextRefCallback) == null ? void 0 : _a2.call(i, w, u.value, u.disabled);
  }), h = p == null ? void 0 : p.textContent, x = a.useMemo(() => c.jsx("option", { value: u.value, disabled: u.disabled, children: h }, u.value), [u.disabled, u.value, h]), { onNativeOptionAdd: f, onNativeOptionRemove: y } = d;
  return Q(() => (f(x), () => y(x)), [f, y, x]), c.jsxs(c.Fragment, { children: [c.jsx(ne.span, { id: u.textId, ...s, ref: g }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? Ct.createPortal(s.children, l.valueNode) : null] });
});
to.displayName = Je;
var no = "SelectItemIndicator", ro = a.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Qr(no, n).isSelected ? c.jsx(ne.span, { "aria-hidden": true, ...r, ref: t }) : null;
});
ro.displayName = no;
var rn = "SelectScrollUpButton", oo = a.forwardRef((e, t) => {
  const n = Oe(rn, e.__scopeSelect), r = yn(rn, e.__scopeSelect), [o, s] = a.useState(false), l = q(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = u.scrollTop > 0;
        s(d);
      };
      const u = n.viewport;
      return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? c.jsx(io, { ...e, ref: l, onAutoScroll: () => {
    const { viewport: i, selectedItem: u } = n;
    i && u && (i.scrollTop = i.scrollTop - u.offsetHeight);
  } }) : null;
});
oo.displayName = rn;
var on = "SelectScrollDownButton", so = a.forwardRef((e, t) => {
  const n = Oe(on, e.__scopeSelect), r = yn(on, e.__scopeSelect), [o, s] = a.useState(false), l = q(t, r.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = u.scrollHeight - u.clientHeight, p = Math.ceil(u.scrollTop) < d;
        s(p);
      };
      const u = n.viewport;
      return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? c.jsx(io, { ...e, ref: l, onAutoScroll: () => {
    const { viewport: i, selectedItem: u } = n;
    i && u && (i.scrollTop = i.scrollTop + u.offsetHeight);
  } }) : null;
});
so.displayName = on;
var io = a.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Oe("SelectScrollButton", n), l = a.useRef(null), i = Ot(n), u = a.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return a.useEffect(() => () => u(), [u]), Q(() => {
    var _a2, _b;
    (_b = (_a2 = i().find((p) => p.ref.current === document.activeElement)) == null ? void 0 : _a2.ref.current) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
  }, [i]), c.jsx(ne.div, { "aria-hidden": true, ...o, ref: t, style: { flexShrink: 0, ...o.style }, onPointerDown: K(o.onPointerDown, () => {
    l.current === null && (l.current = window.setInterval(r, 50));
  }), onPointerMove: K(o.onPointerMove, () => {
    var _a2;
    (_a2 = s.onItemLeave) == null ? void 0 : _a2.call(s), l.current === null && (l.current = window.setInterval(r, 50));
  }), onPointerLeave: K(o.onPointerLeave, () => {
    u();
  }) });
}), cc = "SelectSeparator", ao = a.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return c.jsx(ne.div, { "aria-hidden": true, ...r, ref: t });
});
ao.displayName = cc;
var sn = "SelectArrow", uc = a.forwardRef((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Tt(n), s = Ae(sn, n), l = Oe(sn, n);
  return s.open && l.position === "popper" ? c.jsx(Oa, { ...o, ...r, ref: t }) : null;
});
uc.displayName = sn;
var dc = "SelectBubbleInput", lo = a.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
  const o = a.useRef(null), s = q(r, o), l = Za(t);
  return a.useEffect(() => {
    const i = o.current;
    if (!i) return;
    const u = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(u, "value").set;
    if (l !== t && p) {
      const m = new Event("change", { bubbles: true });
      p.call(i, t), i.dispatchEvent(m);
    }
  }, [l, t]), c.jsx(ne.select, { ...n, style: { ...jr, ...n.style }, ref: s, defaultValue: t });
});
lo.displayName = dc;
function co(e) {
  return e === "" || e === void 0;
}
function uo(e) {
  const t = Me(e), n = a.useRef(""), r = a.useRef(0), o = a.useCallback((l) => {
    const i = n.current + l;
    t(i), function u(d) {
      n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => u(""), 1e3));
    }(i);
  }, [t]), s = a.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return a.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function fo(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let l = fc(e, Math.max(s, 0));
  o.length === 1 && (l = l.filter((d) => d !== n));
  const u = l.find((d) => d.textValue.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function fc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var pc = $r, po = Wr, mc = Vr, hc = Hr, gc = Ur, mo = zr, yc = Xr, ho = Jr, go = eo, vc = to, bc = ro, yo = oo, vo = so, bo = ao;
const Kt = pc, Yt = mc, gt = a.forwardRef(({ className: e, children: t, ...n }, r) => c.jsxs(po, { ref: r, className: Y("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e), ...n, children: [t, c.jsx(hc, { asChild: true, children: c.jsx(Zn, { className: "h-4 w-4 opacity-50" }) })] }));
gt.displayName = po.displayName;
const xo = a.forwardRef(({ className: e, ...t }, n) => c.jsx(yo, { ref: n, className: Y("flex cursor-default items-center justify-center py-1", e), ...t, children: c.jsx(os, { className: "h-4 w-4" }) }));
xo.displayName = yo.displayName;
const wo = a.forwardRef(({ className: e, ...t }, n) => c.jsx(vo, { ref: n, className: Y("flex cursor-default items-center justify-center py-1", e), ...t, children: c.jsx(Zn, { className: "h-4 w-4" }) }));
wo.displayName = vo.displayName;
const yt = a.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => c.jsx(gc, { children: c.jsxs(mo, { ref: o, className: Y("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: n, ...r, children: [c.jsx(xo, {}), c.jsx(yc, { className: Y("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: t }), c.jsx(wo, {})] }) }));
yt.displayName = mo.displayName;
const xc = a.forwardRef(({ className: e, ...t }, n) => c.jsx(ho, { ref: n, className: Y("px-2 py-1.5 text-sm font-semibold", e), ...t }));
xc.displayName = ho.displayName;
const ge = a.forwardRef(({ className: e, children: t, ...n }, r) => c.jsxs(go, { ref: r, className: Y("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", e), ...n, children: [c.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: c.jsx(bc, { children: c.jsx(ts, { className: "h-4 w-4" }) }) }), c.jsx(vc, { children: t })] }));
ge.displayName = go.displayName;
const wc = a.forwardRef(({ className: e, ...t }, n) => c.jsx(bo, { ref: n, className: Y("-mx-1 my-1 h-px bg-muted", e), ...t }));
wc.displayName = bo.displayName;
async function Sc(e, t, n) {
  const r = new URLSearchParams();
  n.length > 0 && r.set("password", n);
  const o = `${Zo()}/api/${e}/room/${encodeURIComponent(t)}/join-check?${r.toString()}`;
  try {
    const s = await fetch(o, { method: "GET" });
    return s.status === 200 ? "ok" : s.status === 403 ? "wrong_password" : s.status === 404 ? "not_found" : "error";
  } catch {
    return "error";
  }
}
function Cc({ joinSuffix: e, iconSrc: t, onCreateClick: n, onRefreshClick: r, isRefreshing: o, refreshTimeText: s, refreshToneClass: l, className: i }) {
  return c.jsxs("div", { className: Y("multiplayer-lobby__pixel-action-row", i), children: [c.jsxs("h2", { id: "join-game-heading", className: "multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--join", children: [c.jsx("img", { src: t, alt: "", className: "multiplayer-lobby__pixel-action-icon" }), c.jsxs("span", { className: "multiplayer-lobby__pixel-action-label", children: ["JOIN GAME", e] })] }), c.jsxs("button", { type: "button", onClick: n, className: "multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--create", children: [c.jsx("span", { className: "multiplayer-lobby__pixel-action-plus", "aria-hidden": true, children: "+" }), c.jsx("span", { className: "multiplayer-lobby__pixel-action-label", children: "CREATE GAME" })] }), c.jsxs("button", { type: "button", onClick: r, disabled: o, className: Y("multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--refresh", l), "aria-label": s === "\u2014" ? "Refresh room list" : `Refresh room list. ${s} since last refresh.`, children: [c.jsx(qo, { className: Y("multiplayer-lobby__pixel-action-icon", o && "animate-spin"), "aria-hidden": true }), c.jsxs("span", { className: "multiplayer-lobby__pixel-action-refresh-inner", children: [c.jsx("span", { className: "multiplayer-lobby__pixel-action-refresh-word", children: "Refresh" }), c.jsx("span", { className: "multiplayer-lobby__pixel-action-refresh-time", "aria-live": "polite", children: s })] })] })] });
}
const ke = { snake: { name: "Snake", maxPlayers: 8, styles: ["Classic", "Speed", "Maze"], image: Do, details: "Compete with 2-8 players in this fast-paced snake game. Last snake standing wins!" }, chess: { name: "Chess", maxPlayers: 2, styles: ["Standard", "Blitz", "Rapid"], image: "/games/chess/sample-screenshot.jpg", details: "Play the timeless game of chess with another player. Choose your time control and strategy." }, checkers: { name: "Checkers", maxPlayers: 2, styles: ["Standard", "International"], image: "/games/checkers/sample-screenshot.jpg", details: "Jump over your opponent's pieces to capture them. First to capture all pieces wins!" }, fighter: { name: "Fighter", maxPlayers: 2, styles: ["Arcade", "Street Fighter", "Mortal Kombat"], gradient: "bg-gradient-to-br from-neutral-950 via-neutral-900 to-black", emoji: "\u2694\uFE0F", details: "Battle it out in this fast-paced fighting game. Master combos and special moves to win!" } }, Xt = ["snake", "chess", "checkers", "fighter"], Ec = ["hub-card--c0", "hub-card--c1", "hub-card--c2", "hub-card--c3"];
function Rc(e) {
  if (!(e == null ? void 0 : e.trim())) return /* @__PURE__ */ new Set();
  const t = /* @__PURE__ */ new Set();
  for (const n of e.split(",")) {
    const r = n.trim().toLowerCase();
    (r === "snake" || r === "chess" || r === "checkers" || r === "fighter") && t.add(r);
  }
  return t;
}
function _c(e) {
  const t = Math.floor(e / 1e3);
  if (t < 60) return `${t}s`;
  const n = Math.floor(t / 60), r = t % 60;
  return r === 0 ? `${n} min` : `${n} min ${r}s`;
}
function Bc() {
  const e = Ao(), [t, n] = Oo(), r = t.get("select") ?? "", o = a.useMemo(() => Rc(r), [r]), { theme: s, resolvedTheme: l } = To(), [i, u] = a.useState(false), [d, p] = a.useState([]), [m, g] = a.useState([]), [h, x] = a.useState([]), [f, y] = a.useState([]), [w, v] = a.useState(false), [b, S] = a.useState(null), [R, N] = a.useState(false), [E, A] = a.useState("2"), [D, I] = a.useState("basic"), [M, $] = a.useState(50), [F, L] = a.useState(""), [H, O] = a.useState(""), [k, j] = a.useState(false), [W, X] = a.useState(""), [ce, pe] = a.useState(null), [xe, oe] = a.useState({}), [we, J] = a.useState({}), [P, U] = a.useState(null), [z, B] = a.useState("all"), [V, G] = a.useState(0), [Z, me] = a.useState(null);
  a.useEffect(() => {
    const C = window.setInterval(() => {
      G((_) => _ + 1);
    }, 1e3);
    return () => window.clearInterval(C);
  }, []);
  const Xe = () => s === "dark" ? "/games/game-icon-light.svg" : "/games/game-icon-dark.svg", Ze = l === "light" ? "/games/game-icon-dark.svg" : "/games/game-icon-light.svg", Fe = async () => {
    v(true);
    try {
      const [C, _, T, re] = await Promise.all([$o(), Bo(), Uo(), Ko()]);
      p(C), g(_), x(T), y(re), me(Date.now());
    } catch (C) {
      console.error("Failed to fetch active rooms:", C), Ce.error("Failed to load active rooms");
    } finally {
      v(false);
    }
  };
  a.useEffect(() => {
    Fe();
  }, []);
  const vn = (C, _) => `${C}:${_}`, tt = a.useMemo(() => [...d.map((C) => ({ game: "snake", room: C })), ...m.map((C) => ({ game: "chess", room: C })), ...h.map((C) => ({ game: "checkers", room: C })), ...f.map((C) => ({ game: "fighter", room: C }))], [d, m, h, f]), nt = a.useMemo(() => o.size === 0 ? tt : tt.filter(({ game: C }) => o.has(C)), [tt, o]), rt = a.useMemo(() => nt.filter(({ room: C }) => {
    const _ = !!C.passwordProtected;
    return z === "all" ? true : z === "open" ? !_ : _;
  }), [nt, z]), So = (C) => {
    switch (C) {
      case "snake":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200";
      case "chess":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200";
      case "checkers":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200";
      case "fighter":
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200";
      default:
        return "bg-secondary";
    }
  }, bn = (C, _, T) => {
    let re = false;
    if (_ === "snake" ? re = Wo(C) : _ === "chess" ? re = Ho(C) : _ === "checkers" ? re = Go(C) : _ === "fighter" && (re = Xo(C)), !re) {
      Ce.error("Invalid room ID format");
      return;
    }
    const he = (T == null ? void 0 : T.trim()) || void 0;
    Lt(C, _), e(`/multiplayer/${C}/${_}`, { state: { roomPassword: he } });
  }, xn = async (C, _) => {
    const T = vn(C, _.id);
    if (!!!_.passwordProtected) {
      pe(null), J((se) => ({ ...se, [T]: false })), bn(_.id, C, void 0);
      return;
    }
    if (ce !== T) {
      pe(T), J((se) => ({ ...se, [T]: false }));
      return;
    }
    const he = (xe[T] ?? "").trim();
    if (!he) {
      Ce.error("Enter the room password");
      return;
    }
    U(T), J((se) => ({ ...se, [T]: false }));
    try {
      const se = await Sc(C, _.id, he);
      if (se === "wrong_password") {
        J((qe) => ({ ...qe, [T]: true })), Ce.error("Wrong password");
        return;
      }
      if (se === "not_found") {
        Ce.error("Room not found \u2014 try refreshing the list");
        return;
      }
      if (se === "error") {
        Ce.error("Could not verify password");
        return;
      }
      bn(_.id, C, he);
    } finally {
      U(null);
    }
  }, wn = (C) => {
    const _ = new Set(o);
    _.has(C) ? _.delete(C) : _.add(C);
    const T = new URLSearchParams(t);
    _.size === 0 ? T.delete("select") : T.set("select", [..._].sort().join(",")), n(T, { replace: true });
  }, Co = () => {
    A("2"), I("basic"), $(50), L(""), O(""), j(false), X("");
  }, Eo = (C) => {
    Co(), S(C), N(false);
  }, Ro = () => {
    S(null);
  }, _o = async () => {
    if (!b) return;
    if (k && !W.trim()) {
      Ce.error("Enter a room password");
      return;
    }
    const C = k ? W : void 0;
    u(true);
    try {
      let _ = "";
      if (b === "snake") {
        _ = Fo(), Lt(_, "snake"), e(`/multiplayer/${_}/snake?tickMs=${encodeURIComponent(String(M))}`, { state: { roomPassword: C } });
        return;
      }
      b === "chess" ? _ = Vo() : b === "checkers" ? _ = zo() : b === "fighter" && (_ = Yo()), Lt(_, b), e(`/multiplayer/${_}/${b}`, { state: { roomPassword: C } });
    } catch {
      Ce.error("Failed to create room");
    } finally {
      u(false);
    }
  }, It = d.length + m.length + h.length + f.length, ot = a.useMemo(() => Z == null ? null : Date.now() - Z, [Z, V]), No = ot == null ? "multiplayer-lobby__pixel-refresh--fresh" : ot >= 3e5 ? "multiplayer-lobby__pixel-refresh--very-stale" : ot >= 6e4 ? "multiplayer-lobby__pixel-refresh--stale" : "multiplayer-lobby__pixel-refresh--fresh", Po = o.size > 0 || z !== "all";
  return c.jsxs("div", { className: "app-root app-root--home hub-page min-h-full", children: [c.jsx(Io, { to: "/", label: "Back to hub" }), c.jsxs("div", { className: "hub hub--multiplayer-wide pb-8", children: [c.jsx("header", { className: "hub__header hub__header--multiplayer", children: c.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4 gap-y-2 mb-0", children: [c.jsx("div", { className: "min-w-0 flex-1 max-w-[min(100%,28rem)]", children: c.jsx("h1", { className: "hub__title--pixel", children: "MULTIPLAYER" }) }), c.jsx(ko, { to: "/", className: "multiplayer-lobby__nav-link shrink-0 self-start text-right max-sm:w-full max-sm:text-left", children: "SINGLE PLAYER GALLERY \u2192" })] }) }), b ? c.jsxs("section", { className: "multiplayer-lobby__panel mb-8", "aria-labelledby": "create-room-heading", children: [c.jsx("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: c.jsxs("button", { type: "button", onClick: Ro, className: "multiplayer-lobby__ghost-link inline-flex items-center gap-2", children: [c.jsx(Qo, { className: "h-4 w-4 shrink-0", "aria-hidden": true }), c.jsx("span", { children: "CLOSE CREATE" })] }) }), c.jsxs("h2", { id: "create-room-heading", className: "hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]", children: ["CREATE \u2014 ", ke[b].name.toUpperCase()] }), (() => {
    const C = ke[b];
    return c.jsxs("div", { className: "space-y-4", children: [c.jsx("p", { className: "multiplayer-lobby__body-text !mb-0", children: C.details }), c.jsxs("div", { className: "grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2", children: [c.jsxs("div", { className: "space-y-1.5", children: [c.jsx(Ee, { className: "multiplayer-lobby__label", children: "Number of players" }), c.jsxs(Kt, { value: E, onValueChange: A, disabled: b !== "snake", children: [c.jsx(gt, { className: "multiplayer-lobby__input", children: c.jsx(Yt, {}) }), c.jsxs(yt, { children: [c.jsx(ge, { value: "2", children: "2 Players" }), b === "snake" && c.jsxs(c.Fragment, { children: [c.jsx(ge, { value: "4", children: "4 Players" }), c.jsx(ge, { value: "6", children: "6 Players" }), c.jsx(ge, { value: "8", children: "8 Players" })] })] })] })] }), c.jsxs("div", { className: "space-y-1.5", children: [c.jsx(Ee, { className: "multiplayer-lobby__label", children: "Game style" }), c.jsxs(Kt, { value: F, onValueChange: L, children: [c.jsx(gt, { className: "multiplayer-lobby__input", children: c.jsx(Yt, { placeholder: "Select style" }) }), c.jsx(yt, { children: C.styles.map((_) => c.jsx(ge, { value: _.toLowerCase(), children: _ }, _)) })] })] }), b === "snake" ? c.jsxs(c.Fragment, { children: [c.jsxs("div", { className: "grid grid-cols-1 gap-x-4 gap-y-3 sm:col-span-2 sm:grid-cols-2", children: [c.jsxs("div", { className: "space-y-1.5", children: [c.jsx(Ee, { className: "multiplayer-lobby__label", children: "Snake game type" }), c.jsxs(Kt, { value: D, onValueChange: I, children: [c.jsx(gt, { className: "multiplayer-lobby__input", children: c.jsx(Yt, {}) }), c.jsxs(yt, { children: [c.jsx(ge, { value: "basic", children: "Basic" }), c.jsx(ge, { value: "advanced", children: "Advanced" }), c.jsx(ge, { value: "future-ideas", children: "Future Ideas" })] })] })] }), c.jsx("div", { className: "flex flex-col justify-end gap-1 pb-0.5", children: c.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [c.jsx(Ee, { className: "multiplayer-lobby__label !mb-0", htmlFor: "snake-tick-ms", children: "Game speed (tick)" }), c.jsxs("span", { className: "multiplayer-lobby__tick-value", children: [M, " ms"] })] }) })] }), c.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [c.jsx("input", { id: "snake-tick-ms", type: "range", min: 10, max: 400, step: 10, value: M, onChange: (_) => $(Number(_.target.value)), className: "multiplayer-lobby__range w-full" }), c.jsx("p", { className: "multiplayer-lobby__hint !mt-0", children: "Lower ms = faster movement. Set when the room is created (host's first connection)." })] })] }) : null, c.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [c.jsx(Ee, { className: "multiplayer-lobby__label", children: "Additional rules" }), c.jsx(ft, { value: H, onChange: (_) => O(_.target.value), placeholder: "Custom rules (optional)", className: "multiplayer-lobby__input" })] }), c.jsx("div", { className: "multiplayer-lobby__password-box space-y-2 sm:col-span-2", children: c.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-end sm:gap-x-4", children: [c.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [c.jsx("input", { type: "checkbox", id: "password-protect-room", checked: k, onChange: (_) => j(_.target.checked), className: "multiplayer-lobby__checkbox" }), c.jsx(Ee, { htmlFor: "password-protect-room", className: "multiplayer-lobby__label !mb-0 cursor-pointer font-normal", children: "Password protect room" })] }), k ? c.jsxs("div", { className: "space-y-1.5 w-full min-w-0 sm:max-w-md", children: [c.jsx(Ee, { htmlFor: "create-room-pw", className: "multiplayer-lobby__label sr-only sm:not-sr-only", children: "Room password" }), c.jsx(ft, { id: "create-room-pw", type: "password", autoComplete: "new-password", value: W, onChange: (_) => X(_.target.value), className: "multiplayer-lobby__input", placeholder: "Room password" })] }) : null] }) })] }), c.jsx("button", { type: "button", onClick: () => void _o(), disabled: i, className: "multiplayer-lobby__cta-primary w-full disabled:opacity-60 disabled:pointer-events-none", children: i ? "CREATING\u2026" : `CREATE ${C.name.toUpperCase()} ROOM` })] });
  })()] }) : null, c.jsxs("section", { className: "multiplayer-lobby__panel", "aria-labelledby": "join-game-heading", children: [c.jsx(Cc, { joinSuffix: ` (${rt.length}${Po && It !== rt.length ? ` / ${It}` : ""})`, iconSrc: Xe(), onCreateClick: () => N(true), onRefreshClick: Fe, isRefreshing: w, refreshTimeText: Z == null ? "\u2014" : _c(ot ?? 0), refreshToneClass: No, className: "mb-4" }), c.jsxs("div", { className: "multiplayer-lobby__catalog-toolbar mb-4", "aria-labelledby": "lobby-filters-heading", children: [c.jsx("p", { id: "lobby-filters-heading", className: "sr-only", children: "Lobby filters" }), c.jsxs("div", { className: "multiplayer-lobby__catalog-toolbar-row", children: [c.jsxs("div", { className: "multiplayer-lobby__filter-group", children: [c.jsx("span", { className: "multiplayer-lobby__filter-label", children: "Game" }), c.jsx("div", { className: "multiplayer-lobby__filter-toggles", role: "group", "aria-label": "Filter by game", children: Xt.map((C) => {
    const _ = o.has(C);
    return c.jsx("button", { type: "button", className: Y("multiplayer-lobby__filter-chip", _ && "multiplayer-lobby__filter-chip--active"), "aria-pressed": _, onClick: () => wn(C), children: ke[C].name }, C);
  }) })] }), c.jsxs("div", { className: "multiplayer-lobby__filter-group", children: [c.jsx("span", { className: "multiplayer-lobby__filter-label", children: "Access" }), c.jsx("div", { className: "multiplayer-lobby__filter-toggles", role: "group", "aria-label": "Filter by password", children: [["all", "All"], ["open", "Open"], ["password", "Password"]].map(([C, _]) => c.jsx("button", { type: "button", className: Y("multiplayer-lobby__filter-chip", z === C && "multiplayer-lobby__filter-chip--active"), "aria-pressed": z === C, onClick: () => B(C), children: _ }, C)) })] })] })] }), tt.length === 0 ? c.jsxs("div", { className: "multiplayer-lobby__empty-state", children: [c.jsx("img", { src: Ze, alt: "", width: 80, height: 80, className: "multiplayer-lobby__empty-state-icon" }), w ? c.jsx("p", { className: "multiplayer-lobby__empty-state-title", children: "LOADING ROOMS\u2026" }) : c.jsxs(c.Fragment, { children: [c.jsx("p", { className: "multiplayer-lobby__empty-state-title", children: "NO ACTIVE ROOMS" }), c.jsx("p", { className: "multiplayer-lobby__empty-state-hint", children: "Use CREATE GAME to host, or wait for another player to open a room." })] })] }) : nt.length === 0 ? c.jsxs("div", { className: "text-center py-12 px-2", children: [c.jsx("p", { className: "multiplayer-lobby__body-text text-base", children: "No rooms match the game filter." }), c.jsxs("p", { className: "multiplayer-lobby__hint mt-2", children: ["Toggle games in the filter bar above, or clear all game toggles to list every room (", It, " total)."] })] }) : rt.length === 0 ? c.jsxs("div", { className: "text-center py-12 px-2", children: [c.jsx("p", { className: "multiplayer-lobby__body-text text-base", children: "No rooms match the access filter." }), c.jsxs("p", { className: "multiplayer-lobby__hint mt-2", children: ["Set Access to All, or switch Open / Password to match listed rooms (", nt.length, " in current game selection)."] })] }) : c.jsx("div", { className: "multiplayer-lobby__table-scroll", children: c.jsxs("table", { className: "multiplayer-lobby__table", children: [c.jsx("thead", { children: c.jsxs("tr", { children: [c.jsx("th", { scope: "col", children: "Game" }), c.jsx("th", { scope: "col", children: "Password" }), c.jsx("th", { scope: "col", children: "Room ID" }), c.jsx("th", { scope: "col", children: "Players" }), c.jsx("th", { scope: "col", children: "Status" }), c.jsx("th", { scope: "col", children: "Join" })] }) }), c.jsx("tbody", { children: rt.map(({ game: C, room: _ }) => {
    const T = vn(C, _.id), re = ke[C].maxPlayers, he = !!_.passwordProtected, se = ce === T, qe = P === T, kt = !!we[T];
    return c.jsxs(a.Fragment, { children: [c.jsxs("tr", { className: Y(he ? "multiplayer-lobby__tr--password" : "multiplayer-lobby__tr--open"), children: [c.jsx("td", { children: c.jsx(it, { variant: "secondary", className: So(C), children: ke[C].name }) }), c.jsx("td", { children: he ? c.jsxs(it, { variant: "outline", className: "multiplayer-lobby__password-badge gap-1", children: [c.jsx(is, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true }), "Yes"] }) : c.jsx(it, { variant: "outline", className: "multiplayer-lobby__open-badge", children: "No" }) }), c.jsx("td", { className: "multiplayer-lobby__cell-mono", children: _.id }), c.jsx("td", { children: c.jsxs("span", { className: "inline-flex items-center gap-1 multiplayer-lobby__muted", children: [c.jsx(Jo, { className: "h-4 w-4 shrink-0", "aria-hidden": true }), _.playerCount, "/", re] }) }), c.jsx("td", { children: c.jsx(it, { variant: _.status === "waiting" ? "secondary" : "default", className: _.status === "waiting" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200", children: _.status }) }), c.jsx("td", { className: "multiplayer-lobby__cell-join", children: c.jsx("button", { type: "button", disabled: qe, onClick: () => void xn(C, _), className: "multiplayer-lobby__cta-join w-full min-w-[5.5rem] disabled:opacity-60 disabled:pointer-events-none", children: qe ? "\u2026" : "JOIN" }) })] }), he && se ? c.jsx("tr", { className: "multiplayer-lobby__tr-pw", children: c.jsx("td", { colSpan: 6, children: c.jsxs("div", { className: "multiplayer-lobby__pw-row-inner", children: [c.jsx(Ee, { htmlFor: `join-pw-${T}`, className: "multiplayer-lobby__label", children: "Room password" }), c.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3", children: [c.jsx(ft, { id: `join-pw-${T}`, type: "password", name: "room-password", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-invalid": kt, value: xe[T] ?? "", onChange: (Se) => {
      const st = Se.target.value;
      oe((Mt) => ({ ...Mt, [T]: st })), kt && J((Mt) => ({ ...Mt, [T]: false }));
    }, onKeyDown: (Se) => {
      Se.key === "Enter" && !qe && (Se.preventDefault(), xn(C, _));
    }, className: Y("multiplayer-lobby__input font-mono text-sm max-w-md", kt && "border-red-500 border-2 ring-2 ring-red-500/35 focus-visible:ring-red-500/50"), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), c.jsx("button", { type: "button", className: "multiplayer-lobby__ghost-link shrink-0 text-sm", onClick: () => {
      pe(null), J((Se) => ({ ...Se, [T]: false })), oe((Se) => {
        const st = { ...Se };
        return delete st[T], st;
      });
    }, children: "Cancel" })] }), c.jsx("p", { className: "multiplayer-lobby__hint !mb-0 mt-1 text-sm", children: "Then tap JOIN in the row above." })] }) }) }) : null] }, T);
  }) })] }) }), c.jsxs("div", { className: "mt-8 pt-6 border-t border-[rgba(45,53,64,0.85)]", children: [c.jsx("h2", { id: "pick-game-heading", className: "hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]", children: "CHOOSE A GAME" }), c.jsx("p", { className: "multiplayer-lobby__body-text !mb-4 !mt-0 text-sm", children: "Tap a card to filter the table above (same as the Game chips)." }), c.jsx("div", { className: "multiplayer-lobby__game-grid multiplayer-lobby__game-grid--compact", children: Xt.map((C, _) => {
    const T = ke[C], re = o.has(C);
    return c.jsx("button", { type: "button", onClick: () => wn(C), className: Y("hub-card multiplayer-lobby__game-card multiplayer-lobby__game-card--compact text-left", Ec[_], re && "multiplayer-lobby__game-card--selected"), children: c.jsxs("div", { className: "multiplayer-lobby__game-card-inner", children: [T.image ? c.jsx("img", { src: T.image, alt: "", className: "multiplayer-lobby__game-card-bg" }) : T.gradient ? c.jsx("div", { className: Y("multiplayer-lobby__game-card-bg flex items-center justify-center", T.gradient), "aria-hidden": true, children: T.emoji ? c.jsx("span", { className: "multiplayer-lobby__game-card-emoji multiplayer-lobby__game-card-emoji--compact", children: T.emoji }) : null }) : null, c.jsx("div", { className: "multiplayer-lobby__game-card-scrim", "aria-hidden": true }), c.jsx("div", { className: "multiplayer-lobby__game-card-banner multiplayer-lobby__game-card-banner--black", "aria-hidden": true }), c.jsxs("div", { className: "multiplayer-lobby__game-card-labels multiplayer-lobby__game-card-labels--compact", children: [c.jsx("span", { className: "multiplayer-lobby__game-card-title multiplayer-lobby__game-card-title--compact", children: T.name }), c.jsxs("span", { className: "multiplayer-lobby__game-card-meta multiplayer-lobby__game-card-meta--compact", children: ["MAX ", T.maxPlayers, " PLAYERS"] })] })] }) }, C);
  }) })] })] }), R ? c.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75", role: "dialog", "aria-modal": "true", "aria-labelledby": "create-game-modal-title", onClick: (C) => {
    C.target === C.currentTarget && N(false);
  }, children: c.jsxs("div", { className: "multiplayer-lobby__panel max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl", onClick: (C) => C.stopPropagation(), children: [c.jsx("h2", { id: "create-game-modal-title", className: "hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]", children: "PICK A GAME TO CREATE" }), c.jsx("p", { className: "multiplayer-lobby__body-text mb-4", children: "Choose which game you are hosting. Room options appear on the next screen." }), c.jsx("div", { className: "grid gap-2", children: Xt.map((C) => c.jsx("button", { type: "button", onClick: () => Eo(C), className: "multiplayer-lobby__cta-primary w-full", children: ke[C].name.toUpperCase() }, C)) }), c.jsx("button", { type: "button", className: "multiplayer-lobby__ghost-link mt-4 w-full text-center", onClick: () => N(false), children: "CANCEL" })] }) }) : null] })] });
}
export {
  Bc as default
};
