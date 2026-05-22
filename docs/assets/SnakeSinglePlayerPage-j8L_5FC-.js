import { a as V, r as l, j as e } from "./index-9ArLGCF2.js";
import { B as y } from "./button-WsUIYdzT.js";
import { B as U } from "./badge-Dm6AeERe.js";
import { D as p, c as F, a as L, g as K, B as E, b as R, m as Y, d as q, i as Z, r as J, C as r, e as i, f as Q } from "./snake-game-multiplayer-CvBkv9C2.js";
import { S as X } from "./SnakePlayBackground-BG7w-96k.js";
import { c as S } from "./createLucideIcon-yvka9nAw.js";
import { R as ee } from "./rotate-ccw-B4KB-X-F.js";
import { G as se } from "./grid-3x3-CVbJTeHb.js";
import "./utils-CoKzjIo5.js";
import "./clsx-B-dksMZM.js";
import "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const te = [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]], ae = S("pause", te);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const le = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], M = S("play", le);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const re = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], ie = S("target", re);
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ne = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], _ = S("trophy", ne), n = "'Press Start 2P', monospace";
function ue() {
  const B = V(), [o, j] = l.useState({ body: F(), direction: p.Right, alive: true }), [g, C] = l.useState({ position: L() }), [t, c] = l.useState("waiting"), [v, P] = l.useState(0), [b, z] = l.useState(0), [k, D] = l.useState(150), [h, W] = l.useState(false), [d, $] = l.useState(false), O = l.useRef(null), x = l.useRef(null);
  l.useEffect(() => {
    const a = localStorage.getItem("snake-high-score");
    a && z(parseInt(a, 10));
  }, []);
  const T = l.useCallback(() => K(R, E, o.body), [o.body]), G = l.useCallback(() => {
    t === "playing" && j((a) => {
      const { newSnake: s, collided: m } = Y(a.body, a.direction, R, E);
      if (m) return c("gameOver"), { ...a, alive: false };
      if (q(s[0], g.position)) return P((f) => {
        const w = f + 10;
        return w > b && (z(w), localStorage.setItem("snake-high-score", w.toString())), w;
      }), C({ position: T() }), D((f) => Math.max(80, f - 5)), { ...a, body: s };
      {
        const f = [...s];
        return f.pop(), { ...a, body: f };
      }
    });
  }, [t, g.position, T, b]);
  l.useEffect(() => (t === "playing" ? x.current = setInterval(G, k) : x.current && (clearInterval(x.current), x.current = null), () => {
    x.current && clearInterval(x.current);
  }), [t, G, k]);
  const u = l.useCallback(() => {
    c("playing");
  }, []), H = l.useCallback(() => {
    t === "playing" ? c("paused") : t === "paused" && c("playing");
  }, [t]), N = l.useCallback(() => {
    j({ body: F(), direction: p.Right, alive: true }), C({ position: L() }), P(0), D(150), c("waiting");
  }, []), A = l.useCallback((a) => {
    if (t === "gameOver") return;
    let s = null;
    switch (a.key) {
      case "ArrowUp":
      case "w":
      case "W":
        a.preventDefault(), s = p.Up;
        break;
      case "ArrowDown":
      case "s":
      case "S":
        a.preventDefault(), s = p.Down;
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        a.preventDefault(), s = p.Left;
        break;
      case "ArrowRight":
      case "d":
      case "D":
        a.preventDefault(), s = p.Right;
        break;
      case " ":
        a.preventDefault(), t === "waiting" ? u() : t === "playing" ? c("paused") : t === "paused" && c("playing");
        break;
    }
    s !== null && Z(o.direction, s) && j((m) => ({ ...m, direction: s }));
  }, [o.direction, t, u]);
  l.useEffect(() => (window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A)), [A]);
  const I = l.useCallback(() => {
    const a = O.current;
    if (!a) return;
    const s = a.getContext("2d");
    if (!s) return;
    const m = { snakes: [{ id: "single-player", body: o.body, direction: o.direction, alive: o.alive, color: "#00ff00" }], food: { position: g.position }, boardWidth: R, boardHeight: E, status: "playing" };
    J(s, m, Q, h), t === "paused" ? (s.fillStyle = "rgba(0, 0, 0, 0.7)", s.fillRect(0, 0, r, i), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("PAUSED", r / 2, i / 2 - 20), s.fillText("Press SPACE to Resume", r / 2, i / 2 + 20)) : t === "gameOver" && (s.fillStyle = "rgba(0, 0, 0, 0.8)", s.fillRect(0, 0, r, i), s.fillStyle = "#ffffff", s.font = "24px Arial", s.textAlign = "center", s.fillText("GAME OVER", r / 2, i / 2 - 40), s.font = "16px Arial", s.fillText(`Final Score: ${v}`, r / 2, i / 2 - 10), s.fillText("Press R to Restart", r / 2, i / 2 + 20));
  }, [o, g, t, v, h]);
  return l.useEffect(() => {
    const a = () => {
      I(), requestAnimationFrame(a);
    };
    a();
  }, [I]), l.useEffect(() => {
    const a = (s) => {
      (s.key === "r" || s.key === "R") && t === "gameOver" && N();
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, [t, N]), e.jsxs("div", { className: "relative h-screen w-full flex flex-col overflow-hidden bg-black text-white", style: { fontFamily: n }, children: [e.jsx(X, {}), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex flex-wrap justify-end gap-2", children: [e.jsx("button", { type: "button", onClick: () => $((a) => !a), className: "bg-gray-700 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-4 py-2 transition-colors", style: { fontSize: "8px", fontFamily: n, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": d, "aria-label": d ? "Hide panel" : "Show panel", children: d ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { type: "button", onClick: () => B("/"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 transition-colors", style: { fontSize: "8px", fontFamily: n, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to games", children: "BACK" })] }), e.jsxs("div", { className: `relative z-10 flex flex-1 min-h-0 pt-14 ${d ? "lg:flex-row lg:items-stretch lg:gap-0" : "flex-col items-stretch"}`, children: [e.jsxs("div", { className: `flex min-h-0 flex-1 flex-col px-3 pb-3 ${d ? "lg:min-w-0 lg:flex-1" : ""}`, children: [e.jsx("div", { className: "mb-2 flex shrink-0 items-start justify-end gap-3 pr-1", children: e.jsxs("div", { className: "flex items-center gap-2 text-yellow-400", style: { fontSize: "10px", textShadow: "2px 2px 0 #000" }, children: [e.jsx(_, { className: "h-4 w-4 shrink-0 text-yellow-500" }), e.jsxs("span", { children: ["HIGH ", b] })] }) }), e.jsx("div", { className: "relative flex min-h-0 flex-1 items-center justify-center overflow-hidden", children: e.jsxs("div", { className: "relative mx-auto w-full max-w-full overflow-hidden rounded-lg border-4 border-yellow-400 bg-black/90", style: { boxShadow: "0 0 0 4px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(0,0,0,0.8)", width: `min(100%, calc((100vh - 8rem) * ${r} / ${i}))`, aspectRatio: `${r} / ${i}` }, children: [e.jsx("canvas", { ref: O, width: r, height: i, className: "block h-full w-full", style: { imageRendering: "pixelated" } }), t === "waiting" && e.jsxs("div", { className: "pointer-events-auto absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/70 px-4", children: [e.jsx("p", { className: "text-center text-yellow-300", style: { fontSize: "10px", textShadow: "2px 2px 0 #000" }, children: "READY" }), e.jsx("button", { type: "button", onClick: u, className: "border-4 border-yellow-400 bg-green-600 px-10 py-5 text-black transition-colors hover:bg-green-500", style: { fontSize: "14px", fontFamily: n, boxShadow: "0 0 0 4px #000, inset 0 0 0 2px #000" }, children: "START" }), e.jsx("p", { className: "text-center text-gray-400", style: { fontSize: "8px" }, children: "OR PRESS SPACE" })] })] }) })] }), d && e.jsx("aside", { className: "w-full shrink-0 overflow-y-auto border-t-4 border-yellow-400 bg-black p-4 lg:w-96 lg:border-l-4 lg:border-t-0", style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: e.jsxs("div", { className: "mb-4 border-4 border-yellow-400 bg-gray-900", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "border-b-4 border-yellow-400 bg-yellow-400 px-3 py-2", children: e.jsx("h2", { className: "font-bold text-black", style: { fontSize: "10px", fontFamily: n }, children: "SNAKE \u2014 SINGLE" }) }), e.jsxs("div", { className: "space-y-3 p-3", children: [e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [e.jsx(U, { variant: t === "playing" ? "default" : t === "paused" ? "secondary" : t === "gameOver" ? "destructive" : "outline", className: "shrink-0 text-xs", children: t === "playing" ? "PLAYING" : t === "paused" ? "PAUSED" : t === "gameOver" ? "GAME OVER" : "READY" }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [t === "waiting" && e.jsxs(y, { onClick: u, size: "sm", className: "border-2 border-yellow-400 bg-green-600 text-white hover:bg-green-500", style: { fontSize: "8px", fontFamily: n }, children: [e.jsx(M, { className: "mr-1 h-3 w-3" }), "START"] }), t === "playing" && e.jsxs(y, { onClick: H, variant: "secondary", size: "sm", style: { fontSize: "8px", fontFamily: n }, children: [e.jsx(ae, { className: "mr-1 h-3 w-3" }), "PAUSE"] }), t === "paused" && e.jsxs(y, { onClick: H, size: "sm", className: "border-2 border-yellow-400", style: { fontSize: "8px", fontFamily: n }, children: [e.jsx(M, { className: "mr-1 h-3 w-3" }), "RESUME"] }), t === "gameOver" && e.jsxs(y, { onClick: N, size: "sm", style: { fontSize: "8px", fontFamily: n }, children: [e.jsx(ee, { className: "mr-1 h-3 w-3" }), "RESTART"] })] })] }), e.jsx("div", { className: "border-2 border-gray-600 bg-black/80 p-3", style: { boxShadow: "0 0 0 2px #000" }, children: e.jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [e.jsxs("div", { className: "flex items-center gap-2 text-yellow-200", children: [e.jsx(se, { className: "h-3 w-3" }), e.jsx("span", { style: { fontSize: "8px" }, children: "GRID" })] }), e.jsx(y, { variant: h ? "default" : "outline", size: "sm", onClick: () => W(!h), className: "h-7 px-2", style: { fontSize: "8px", fontFamily: n }, children: h ? "ON" : "OFF" })] }) }), e.jsxs("div", { className: "border-2 border-gray-600 bg-black/80 p-3", style: { boxShadow: "0 0 0 2px #000" }, children: [e.jsx("div", { className: "mb-2 text-yellow-400", style: { fontSize: "8px" }, children: "STATS" }), e.jsxs("div", { className: "space-y-1", style: { fontSize: "8px" }, children: [e.jsxs("div", { className: "flex justify-between gap-2 text-gray-300", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(ie, { className: "h-3 w-3 text-green-400" }), "SCORE"] }), e.jsx("span", { className: "font-bold text-green-400", children: v })] }), e.jsxs("div", { className: "flex justify-between gap-2 text-gray-300", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(_, { className: "h-3 w-3 text-yellow-500" }), "HIGH"] }), e.jsx("span", { className: "font-bold text-yellow-400", children: b })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "LEN" }), e.jsx("span", { children: o.body.length })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "SPD" }), e.jsxs("span", { children: [Math.round((150 - k) / 7), "/10"] })] })] })] }), e.jsxs("div", { className: "border-2 border-gray-600 bg-black/80 p-3", style: { boxShadow: "0 0 0 2px #000" }, children: [e.jsx("div", { className: "mb-2 text-yellow-400", style: { fontSize: "8px" }, children: "HOW TO PLAY" }), e.jsxs("div", { className: "space-y-1 text-gray-300", style: { fontSize: "8px" }, children: [e.jsx("p", { children: "ARROWS / WASD \u2014 MOVE" }), e.jsx("p", { children: "EAT APPLES \u2014 GROW" }), e.jsx("p", { children: "WALLS WRAP" }), e.jsx("p", { children: "SPACE \u2014 PAUSE" }), e.jsx("p", { children: "R \u2014 RESTART (GAME OVER)" })] })] })] })] }) })] })] });
}
export {
  ue as default
};
