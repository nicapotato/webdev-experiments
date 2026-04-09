import { r as s, j as e } from "./index-Cyo_F1kd.js";
import { B as v } from "./button-DEm5cEaQ.js";
const m = ["The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once.", "Programming is the process of creating instructions that tell a computer how to perform a task.", "Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence."];
function D() {
  const [i, w] = s.useState(""), [h, k] = s.useState(() => m[0]), [n, u] = s.useState(0), [S, d] = s.useState([]), [c, g] = s.useState(null), [p, f] = s.useState(false), y = s.useRef(null), a = s.useMemo(() => h, [h]), b = s.useCallback((t) => {
    k(t), u(0), d([]), g(null), f(false);
  }, []);
  s.useEffect(() => {
    requestAnimationFrame(() => {
      var _a;
      return (_a = y.current) == null ? void 0 : _a.focus();
    });
  }, [a]);
  const N = s.useCallback((t) => {
    if (p) return;
    if (t.key === "Backspace") {
      if (t.preventDefault(), n === 0) return;
      u((r) => Math.max(0, r - 1)), d((r) => r.slice(0, -1));
      return;
    }
    if (t.key.length !== 1) return;
    t.preventDefault(), c === null && g(Date.now());
    const l = a[n];
    if (l === void 0) return;
    const x = t.key === l;
    d((r) => [...r, { correct: x }]);
    const o = n + 1;
    u(o), o >= a.length && f(true);
  }, [n, p, c, a]), j = c != null ? Math.max(0, (Date.now() - c) / 1e3) : 0, C = a.slice(0, n).split(/\s+/).filter(Boolean).length, T = j > 0 ? Math.round(C / j * 60) : 0;
  return e.jsx("div", { className: "min-h-[100svh] w-full px-4 py-6 bg-background text-foreground", children: e.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Client-only typing practice \u2014 pick a sample or paste your own text, then type. Backspace to undo a character." }), e.jsx("div", { className: "flex flex-wrap gap-2", children: m.map((t) => e.jsxs(v, { type: "button", variant: "outline", size: "sm", onClick: () => b(t), children: ["Sample ", m.indexOf(t) + 1] }, t.slice(0, 20))) }), e.jsx("textarea", { className: "w-full min-h-[88px] rounded-md border border-input bg-transparent px-3 py-2 text-sm", placeholder: "Paste custom text, then click Load", value: i, onChange: (t) => w(t.target.value) }), e.jsx(v, { type: "button", variant: "secondary", onClick: () => i.trim() && b(i.trim()), disabled: !i.trim(), children: "Load custom text" }), e.jsxs("div", { className: "flex gap-4 text-sm text-muted-foreground", children: [e.jsxs("span", { children: ["WPM (rough): ", T] }), e.jsxs("span", { children: ["Progress: ", n, " / ", a.length] }), p ? e.jsx("span", { className: "text-green-600 font-medium", children: "Complete" }) : null] }), e.jsxs("div", { ref: y, tabIndex: 0, role: "textbox", "aria-label": "Typing area", className: "typewriter-text rounded-lg border border-border p-4 min-h-[160px] text-lg leading-relaxed outline-none focus-visible:ring-1 focus-visible:ring-ring", onKeyDown: N, children: [a.split("").map((t, l) => {
    const x = l === n, o = S[l];
    let r = "text-muted-foreground";
    return o && (r = o.correct ? "text-green-600" : "text-red-600"), e.jsxs("span", { children: [x ? e.jsx("span", { className: "typewriter-caret align-middle", "aria-hidden": true }) : null, e.jsx("span", { className: r, children: t })] }, l);
  }), n >= a.length ? e.jsx("span", { className: "typewriter-caret align-middle", "aria-hidden": true }) : null] })] }) });
}
export {
  D as default
};
