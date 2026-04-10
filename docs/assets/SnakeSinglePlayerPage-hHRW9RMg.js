import { r, j as e, u as W } from "./index-CZZOmvhJ.js";
import { B as h } from "./button-qo_KCcUR.js";
import { c as u } from "./utils-CqPFCyuf.js";
import { B as V } from "./badge-Cju3upr0.js";
import { D as p, c as _, a as F, g as U, B as C, b as R, m as $, d as q, i as K, r as X, C as c, e as o, A as Y, f as Z } from "./snake-game-multiplayer-BzWLKIQD.js";
import { c as b } from "./createLucideIcon-BFFgSLy4.js";
import { R as J } from "./rotate-ccw-CcjX7UQ6.js";
import { G as Q } from "./grid-3x3-Bw_y8kav.js";
import "./gin-DHzzR3IR.js";
const y = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("rounded-xl border bg-card text-card-foreground shadow-sm", l), ...i }));
y.displayName = "Card";
const ee = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("flex flex-col space-y-1.5 p-6", l), ...i }));
ee.displayName = "CardHeader";
const se = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("font-semibold leading-none tracking-tight", l), ...i }));
se.displayName = "CardTitle";
const ae = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("text-sm text-muted-foreground", l), ...i }));
ae.displayName = "CardDescription";
const te = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("p-6 pt-0", l), ...i }));
te.displayName = "CardContent";
const re = r.forwardRef(({ className: l, ...i }, n) => e.jsx("div", { ref: n, className: u("flex items-center p-6 pt-0", l), ...i }));
re.displayName = "CardFooter";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ie = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], ne = b("pause", ie);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const le = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], M = b("play", le);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ce = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], oe = b("target", ce);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const de = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], xe = b("trophy", de);
function ve() {
  const l = W(), [i, n] = r.useState({ body: _(), direction: p.Right, alive: true }), [j, A] = r.useState({ position: F() }), [a, x] = r.useState("waiting"), [w, E] = r.useState(0), [v, D] = r.useState(0), [k, H] = r.useState(150), [g, z] = r.useState(false), P = r.useRef(null), f = r.useRef(null);
  r.useRef(0), r.useEffect(() => {
    const t = localStorage.getItem("snake-high-score");
    t && D(parseInt(t, 10));
  }, []);
  const G = r.useCallback(() => U(R, C, i.body), [i.body]);
  r.useCallback((t, s) => s.some((d) => d.X === t.X && d.Y === t.Y), []);
  const T = r.useCallback(() => {
    a === "playing" && n((t) => {
      const { newSnake: s, collided: d } = $(t.body, t.direction, R, C);
      if (d) return x("gameOver"), { ...t, alive: false };
      if (q(s[0], j.position)) return E((m) => {
        const N = m + 10;
        return N > v && (D(N), localStorage.setItem("snake-high-score", N.toString())), N;
      }), A({ position: G() }), H((m) => Math.max(80, m - 5)), { ...t, body: s };
      {
        const m = [...s];
        return m.pop(), { ...t, body: m };
      }
    });
  }, [a, j.position, G, v]);
  r.useEffect(() => (a === "playing" ? f.current = setInterval(T, k) : f.current && (clearInterval(f.current), f.current = null), () => {
    f.current && clearInterval(f.current);
  }), [a, T, k]);
  const S = r.useCallback((t) => {
    if (a === "gameOver") return;
    let s = null;
    switch (t.key) {
      case "ArrowUp":
      case "w":
      case "W":
        t.preventDefault(), s = p.Up;
        break;
      case "ArrowDown":
      case "s":
      case "S":
        t.preventDefault(), s = p.Down;
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        t.preventDefault(), s = p.Left;
        break;
      case "ArrowRight":
      case "d":
      case "D":
        t.preventDefault(), s = p.Right;
        break;
      case " ":
        t.preventDefault(), a === "playing" ? x("paused") : a === "paused" && x("playing");
        break;
    }
    s !== null && K(i.direction, s) && n((d) => ({ ...d, direction: s }));
  }, [i.direction, a]);
  r.useEffect(() => (window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S)), [S]);
  const I = r.useCallback(() => {
    const t = P.current;
    if (!t) return;
    const s = t.getContext("2d");
    if (!s) return;
    const d = { snakes: [{ id: "single-player", body: i.body, direction: i.direction, alive: i.alive, color: "#00ff00" }], food: { position: j.position }, boardWidth: R, boardHeight: C, status: a === "gameOver" ? "finished" : a === "playing" || a === "paused" ? "playing" : "waiting" };
    X(s, d, Z, g), a === "waiting" ? (s.fillStyle = "rgba(0, 0, 0, 0.7)", s.fillRect(0, 0, c, o), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("Press SPACE to Start", c / 2, o / 2)) : a === "paused" ? (s.fillStyle = "rgba(0, 0, 0, 0.7)", s.fillRect(0, 0, c, o), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("PAUSED", c / 2, o / 2 - 20), s.fillText("Press SPACE to Resume", c / 2, o / 2 + 20)) : a === "gameOver" && (s.fillStyle = "rgba(0, 0, 0, 0.8)", s.fillRect(0, 0, c, o), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("GAME OVER", c / 2, o / 2 - 40), s.font = "16px Arial", s.fillText(`Final Score: ${w}`, c / 2, o / 2 - 10), s.fillText("Press R to Restart", c / 2, o / 2 + 20));
  }, [i, j, a, w, g]);
  r.useEffect(() => {
    const t = () => {
      I(), requestAnimationFrame(t);
    };
    t();
  }, [I]);
  const B = () => {
    x("playing");
  }, O = () => {
    a === "playing" ? x("paused") : a === "paused" && x("playing");
  }, L = () => {
    n({ body: _(), direction: p.Right, alive: true }), A({ position: F() }), E(0), H(150), x("waiting");
  };
  return r.useEffect(() => {
    const t = (s) => {
      (s.key === "r" || s.key === "R") && a === "gameOver" && L();
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [a]), e.jsxs("div", { className: "h-screen w-full flex flex-col", children: [e.jsxs("div", { className: "flex items-center justify-between bg-black text-white p-4 border-b border-gray-700 flex-shrink-0", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(h, { variant: "ghost", size: "sm", onClick: () => l("/"), className: "text-white hover:bg-gray-800", children: e.jsx(Y, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold", children: "Snake Game" }), e.jsx("p", { className: "text-gray-300", children: "Single Player Mode" })] })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(xe, { className: "h-4 w-4 text-yellow-500" }), e.jsxs("span", { className: "text-sm font-medium", children: ["High Score: ", v] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(oe, { className: "h-4 w-4 text-green-500" }), e.jsxs("span", { className: "text-sm font-medium", children: ["Score: ", w] })] })] })] }), e.jsxs("div", { className: "flex flex-1", children: [e.jsx("div", { className: "flex-1 flex items-center justify-center bg-black p-4", children: e.jsx("div", { className: "border border-white rounded-lg overflow-hidden shadow-lg", children: e.jsx("canvas", { ref: P, width: c, height: o, className: "block", style: { width: "100%", height: "100%", maxWidth: "900px", maxHeight: "600px", imageRendering: "pixelated" } }) }) }), e.jsxs("div", { className: "w-96 bg-gray-900 p-3 overflow-y-auto space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", children: [e.jsx(V, { variant: a === "playing" ? "default" : a === "paused" ? "secondary" : a === "gameOver" ? "destructive" : "outline", className: "text-sm px-3 py-1 flex-shrink-0", children: a === "playing" ? "Playing" : a === "paused" ? "Paused" : a === "gameOver" ? "Game Over" : "Ready" }), e.jsxs("div", { className: "flex gap-1", children: [a === "waiting" && e.jsxs(h, { onClick: B, size: "sm", children: [e.jsx(M, { className: "h-3 w-3 mr-1" }), "Start"] }), a === "playing" && e.jsxs(h, { onClick: O, variant: "secondary", size: "sm", children: [e.jsx(ne, { className: "h-3 w-3 mr-1" }), "Pause"] }), a === "paused" && e.jsxs(h, { onClick: O, size: "sm", children: [e.jsx(M, { className: "h-3 w-3 mr-1" }), "Resume"] }), a === "gameOver" && e.jsxs(h, { onClick: L, size: "sm", children: [e.jsx(J, { className: "h-3 w-3 mr-1" }), "Restart"] })] })] }), e.jsx(y, { className: "p-3", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Q, { className: "h-3 w-3" }), e.jsx("span", { className: "text-xs font-medium", children: "Show Grid" })] }), e.jsx(h, { variant: g ? "default" : "outline", size: "sm", onClick: () => z(!g), className: "h-6 px-2 text-xs", children: g ? "ON" : "OFF" })] }) }), e.jsxs(y, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "Game Stats" }), e.jsxs("div", { className: "space-y-1 text-xs", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Score:" }), e.jsx("span", { className: "font-bold text-green-400", children: w })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "High Score:" }), e.jsx("span", { className: "font-bold text-yellow-400", children: v })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Length:" }), e.jsx("span", { children: i.body.length })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Speed:" }), e.jsxs("span", { children: [Math.round((150 - k) / 7), "/10"] })] })] })] }), e.jsxs(y, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "How to Play" }), e.jsxs("div", { className: "text-xs space-y-1", children: [e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Arrows/WASD" }), " to move"] }), e.jsxs("p", { children: ["\u2022 Eat ", e.jsx("span", { className: "text-red-400 font-bold", children: "red food" }), " ", "to grow"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Walls wrap around" })] }), e.jsxs("p", { children: ["\u2022 Avoid your ", e.jsx("strong", { children: "tail" })] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "SPACE" }), " to pause"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "R" }), " to restart"] })] })] }), e.jsxs(y, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "Tips" }), e.jsxs("div", { className: "text-xs space-y-1", children: [e.jsx("p", { children: "\u2022 Use wrap-around walls for shortcuts" }), e.jsx("p", { children: "\u2022 Game speeds up as you eat" }), e.jsx("p", { children: "\u2022 Fill the board for max score" })] })] })] })] })] });
}
export {
  ve as default
};
