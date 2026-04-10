import { u as B, r as i, j as e } from "./index-BxzNaUpi.js";
import { B as f } from "./button-D7fQsbb7.js";
import { B as W, P as L, C as j } from "./play-jBUQ5OQh.js";
import { D as h, c as T, a as _, g as V, B as N, b as S, m as U, d as $, i as q, r as K, C as r, e as n, A as X, f as Y } from "./snake-game-multiplayer-CBsmYV7B.js";
import { c as k, G as Z } from "./grid-3x3-a_VJ9wWf.js";
import { R as J } from "./rotate-ccw-BKk_z6q4.js";
import "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Q = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], ee = k("pause", Q);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const se = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], ae = k("target", se);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const te = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], ie = k("trophy", te);
function fe() {
  const F = B(), [l, w] = i.useState({ body: T(), direction: h.Right, alive: true }), [p, A] = i.useState({ position: _() }), [a, o] = i.useState("waiting"), [u, R] = i.useState(0), [g, C] = i.useState(0), [v, E] = i.useState(150), [m, M] = i.useState(false), P = i.useRef(null), d = i.useRef(null);
  i.useRef(0), i.useEffect(() => {
    const t = localStorage.getItem("snake-high-score");
    t && C(parseInt(t, 10));
  }, []);
  const D = i.useCallback(() => V(S, N, l.body), [l.body]);
  i.useCallback((t, s) => s.some((c) => c.X === t.X && c.Y === t.Y), []);
  const G = i.useCallback(() => {
    a === "playing" && w((t) => {
      const { newSnake: s, collided: c } = U(t.body, t.direction, S, N);
      if (c) return o("gameOver"), { ...t, alive: false };
      if ($(s[0], p.position)) return R((x) => {
        const y = x + 10;
        return y > g && (C(y), localStorage.setItem("snake-high-score", y.toString())), y;
      }), A({ position: D() }), E((x) => Math.max(80, x - 5)), { ...t, body: s };
      {
        const x = [...s];
        return x.pop(), { ...t, body: x };
      }
    });
  }, [a, p.position, D, g]);
  i.useEffect(() => (a === "playing" ? d.current = setInterval(G, v) : d.current && (clearInterval(d.current), d.current = null), () => {
    d.current && clearInterval(d.current);
  }), [a, G, v]);
  const b = i.useCallback((t) => {
    if (a === "gameOver") return;
    let s = null;
    switch (t.key) {
      case "ArrowUp":
      case "w":
      case "W":
        t.preventDefault(), s = h.Up;
        break;
      case "ArrowDown":
      case "s":
      case "S":
        t.preventDefault(), s = h.Down;
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        t.preventDefault(), s = h.Left;
        break;
      case "ArrowRight":
      case "d":
      case "D":
        t.preventDefault(), s = h.Right;
        break;
      case " ":
        t.preventDefault(), a === "playing" ? o("paused") : a === "paused" && o("playing");
        break;
    }
    s !== null && q(l.direction, s) && w((c) => ({ ...c, direction: s }));
  }, [l.direction, a]);
  i.useEffect(() => (window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b)), [b]);
  const H = i.useCallback(() => {
    const t = P.current;
    if (!t) return;
    const s = t.getContext("2d");
    if (!s) return;
    const c = { snakes: [{ id: "single-player", body: l.body, direction: l.direction, alive: l.alive, color: "#00ff00" }], food: { position: p.position }, boardWidth: S, boardHeight: N, status: a === "gameOver" ? "finished" : a === "playing" || a === "paused" ? "playing" : "waiting" };
    K(s, c, Y, m), a === "waiting" ? (s.fillStyle = "rgba(0, 0, 0, 0.7)", s.fillRect(0, 0, r, n), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("Press SPACE to Start", r / 2, n / 2)) : a === "paused" ? (s.fillStyle = "rgba(0, 0, 0, 0.7)", s.fillRect(0, 0, r, n), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("PAUSED", r / 2, n / 2 - 20), s.fillText("Press SPACE to Resume", r / 2, n / 2 + 20)) : a === "gameOver" && (s.fillStyle = "rgba(0, 0, 0, 0.8)", s.fillRect(0, 0, r, n), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("GAME OVER", r / 2, n / 2 - 40), s.font = "16px Arial", s.fillText(`Final Score: ${u}`, r / 2, n / 2 - 10), s.fillText("Press R to Restart", r / 2, n / 2 + 20));
  }, [l, p, a, u, m]);
  i.useEffect(() => {
    const t = () => {
      H(), requestAnimationFrame(t);
    };
    t();
  }, [H]);
  const z = () => {
    o("playing");
  }, I = () => {
    a === "playing" ? o("paused") : a === "paused" && o("playing");
  }, O = () => {
    w({ body: T(), direction: h.Right, alive: true }), A({ position: _() }), R(0), E(150), o("waiting");
  };
  return i.useEffect(() => {
    const t = (s) => {
      (s.key === "r" || s.key === "R") && a === "gameOver" && O();
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [a]), e.jsxs("div", { className: "h-screen w-full flex flex-col", children: [e.jsxs("div", { className: "flex items-center justify-between bg-black text-white p-4 border-b border-gray-700 flex-shrink-0", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(f, { variant: "ghost", size: "sm", onClick: () => F("/"), className: "text-white hover:bg-gray-800", children: e.jsx(X, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold", children: "Snake Game" }), e.jsx("p", { className: "text-gray-300", children: "Single Player Mode" })] })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ie, { className: "h-4 w-4 text-yellow-500" }), e.jsxs("span", { className: "text-sm font-medium", children: ["High Score: ", g] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ae, { className: "h-4 w-4 text-green-500" }), e.jsxs("span", { className: "text-sm font-medium", children: ["Score: ", u] })] })] })] }), e.jsxs("div", { className: "flex flex-1", children: [e.jsx("div", { className: "flex-1 flex items-center justify-center bg-black p-4", children: e.jsx("div", { className: "border border-white rounded-lg overflow-hidden shadow-lg", children: e.jsx("canvas", { ref: P, width: r, height: n, className: "block", style: { width: "100%", height: "100%", maxWidth: "900px", maxHeight: "600px", imageRendering: "pixelated" } }) }) }), e.jsxs("div", { className: "w-96 bg-gray-900 p-3 overflow-y-auto space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", children: [e.jsx(W, { variant: a === "playing" ? "default" : a === "paused" ? "secondary" : a === "gameOver" ? "destructive" : "outline", className: "text-sm px-3 py-1 flex-shrink-0", children: a === "playing" ? "Playing" : a === "paused" ? "Paused" : a === "gameOver" ? "Game Over" : "Ready" }), e.jsxs("div", { className: "flex gap-1", children: [a === "waiting" && e.jsxs(f, { onClick: z, size: "sm", children: [e.jsx(L, { className: "h-3 w-3 mr-1" }), "Start"] }), a === "playing" && e.jsxs(f, { onClick: I, variant: "secondary", size: "sm", children: [e.jsx(ee, { className: "h-3 w-3 mr-1" }), "Pause"] }), a === "paused" && e.jsxs(f, { onClick: I, size: "sm", children: [e.jsx(L, { className: "h-3 w-3 mr-1" }), "Resume"] }), a === "gameOver" && e.jsxs(f, { onClick: O, size: "sm", children: [e.jsx(J, { className: "h-3 w-3 mr-1" }), "Restart"] })] })] }), e.jsx(j, { className: "p-3", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Z, { className: "h-3 w-3" }), e.jsx("span", { className: "text-xs font-medium", children: "Show Grid" })] }), e.jsx(f, { variant: m ? "default" : "outline", size: "sm", onClick: () => M(!m), className: "h-6 px-2 text-xs", children: m ? "ON" : "OFF" })] }) }), e.jsxs(j, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "Game Stats" }), e.jsxs("div", { className: "space-y-1 text-xs", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Score:" }), e.jsx("span", { className: "font-bold text-green-400", children: u })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "High Score:" }), e.jsx("span", { className: "font-bold text-yellow-400", children: g })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Length:" }), e.jsx("span", { children: l.body.length })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Speed:" }), e.jsxs("span", { children: [Math.round((150 - v) / 7), "/10"] })] })] })] }), e.jsxs(j, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "How to Play" }), e.jsxs("div", { className: "text-xs space-y-1", children: [e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Arrows/WASD" }), " to move"] }), e.jsxs("p", { children: ["\u2022 Eat ", e.jsx("span", { className: "text-red-400 font-bold", children: "red food" }), " ", "to grow"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Walls wrap around" })] }), e.jsxs("p", { children: ["\u2022 Avoid your ", e.jsx("strong", { children: "tail" })] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "SPACE" }), " to pause"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "R" }), " to restart"] })] })] }), e.jsxs(j, { className: "p-3", children: [e.jsx("div", { className: "text-xs font-medium mb-2 text-gray-300", children: "Tips" }), e.jsxs("div", { className: "text-xs space-y-1", children: [e.jsx("p", { children: "\u2022 Use wrap-around walls for shortcuts" }), e.jsx("p", { children: "\u2022 Game speeds up as you eat" }), e.jsx("p", { children: "\u2022 Fill the board for max score" })] })] })] })] })] });
}
export {
  fe as default
};
