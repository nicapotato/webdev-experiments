import { u as _, d as V, r, j as e, t as u } from "./index-BxzNaUpi.js";
import { B as k } from "./button-D7fQsbb7.js";
import { S as q, C as E, b as R, F as Q, r as X } from "./fighter-game-multiplayer-Dszk70ou.js";
import { g as Z } from "./player-utils-sDKa8flh.js";
import { u as ee, a as se } from "./multiplayer-join-gate-r0pFxZYF.js";
import { W as te } from "./wifi-Ci88SGMf.js";
import { c as re, G as ae } from "./grid-3x3-a_VJ9wWf.js";
import { R as ne } from "./rotate-ccw-BKk_z6q4.js";
import { R as oe, U as le } from "./users-BvO0pGSn.js";
import "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ie = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], de = re("wifi-off", ie);
function Se() {
  var _a;
  const G = _(), I = V(), h = ee("fighter"), A = (_a = I.state) == null ? void 0 : _a.roomPassword, [l, L] = r.useState(null), [m, D] = r.useState(false), [T, w] = r.useState(true), [c, O] = r.useState({ id: "", username: "" }), [x, U] = r.useState(null), [f, H] = r.useState("waiting"), [S, M] = r.useState(0), [ce, Y] = r.useState(0), [y, W] = r.useState(false), [b, $] = r.useState(false), [i, a] = r.useState({ a: { pressed: false }, d: { pressed: false }, w: { pressed: false }, s: { pressed: false }, " ": { pressed: false }, ArrowLeft: { pressed: false }, ArrowRight: { pressed: false }, ArrowUp: { pressed: false }, ArrowDown: { pressed: false } }), o = r.useRef(null), F = r.useRef(null), N = r.useRef(null);
  r.useEffect(() => {
    const { playerId: t, username: s } = Z();
    O({ id: t, username: s });
  }, []), r.useEffect(() => {
    if (!h || !c.id) return;
    (async () => {
      try {
        w(true);
        const n = new Q(h, c.id, c.username, A);
        U(n), o.current = n, n.onGameState((p) => {
          const v = p.players.length;
          if (S > v && S > 1) {
            const C = S - v;
            u.warning(`${C} player${C > 1 ? "s" : ""} left the room`);
          }
          const z = JSON.parse(JSON.stringify(p));
          L(z), H(z.status), M(v);
        }), n.onConnection((p) => {
          D(p), p ? (se(h, "fighter"), u.success("Connected to fighter game!")) : u.error("Disconnected from fighter game. You can try refreshing the page to reconnect.");
        }), n.onError((p) => {
          console.error("Game error:", p), u.error(`Game error: ${p.message}`);
        }), await n.connect(), w(false);
      } catch (n) {
        console.error("Failed to initialize game:", n), u.error("Failed to connect to game"), w(false);
      }
    })();
    const s = (n) => {
      o.current && o.current.isConnected() && (n.preventDefault(), n.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), o.current && o.current.disconnect();
    }, d = () => {
      o.current && o.current.disconnect();
    };
    return window.addEventListener("beforeunload", s), window.addEventListener("popstate", d), () => {
      window.removeEventListener("beforeunload", s), window.removeEventListener("popstate", d), o.current && (o.current.disconnect(), o.current = null);
    };
  }, [h, c, A]), r.useEffect(() => () => {
    o.current && (o.current.disconnect(), o.current = null);
  }, []);
  const j = r.useCallback((t) => {
    if (!(!x || !m)) switch (t.key) {
      case "a":
      case "A":
        t.preventDefault(), a((s) => ({ ...s, a: { pressed: true } }));
        break;
      case "d":
      case "D":
        t.preventDefault(), a((s) => ({ ...s, d: { pressed: true } }));
        break;
      case "w":
      case "W":
        t.preventDefault(), a((s) => ({ ...s, w: { pressed: true } }));
        break;
      case "s":
      case "S":
        t.preventDefault(), a((s) => ({ ...s, s: { pressed: true } }));
        break;
      case " ":
        t.preventDefault(), a((s) => ({ ...s, " ": { pressed: true } }));
        break;
      case "ArrowLeft":
        t.preventDefault(), a((s) => ({ ...s, ArrowLeft: { pressed: true } }));
        break;
      case "ArrowRight":
        t.preventDefault(), a((s) => ({ ...s, ArrowRight: { pressed: true } }));
        break;
      case "ArrowUp":
        t.preventDefault(), a((s) => ({ ...s, ArrowUp: { pressed: true } }));
        break;
      case "ArrowDown":
        t.preventDefault(), a((s) => ({ ...s, ArrowDown: { pressed: true } }));
        break;
    }
  }, [x, m]), P = r.useCallback((t) => {
    switch (t.key) {
      case "a":
      case "A":
        a((s) => ({ ...s, a: { pressed: false } }));
        break;
      case "d":
      case "D":
        a((s) => ({ ...s, d: { pressed: false } }));
        break;
      case "w":
      case "W":
        a((s) => ({ ...s, w: { pressed: false } }));
        break;
      case "s":
      case "S":
        a((s) => ({ ...s, s: { pressed: false } }));
        break;
      case " ":
        a((s) => ({ ...s, " ": { pressed: false } }));
        break;
      case "ArrowLeft":
        a((s) => ({ ...s, ArrowLeft: { pressed: false } }));
        break;
      case "ArrowRight":
        a((s) => ({ ...s, ArrowRight: { pressed: false } }));
        break;
      case "ArrowUp":
        a((s) => ({ ...s, ArrowUp: { pressed: false } }));
        break;
      case "ArrowDown":
        a((s) => ({ ...s, ArrowDown: { pressed: false } }));
        break;
    }
  }, []);
  r.useEffect(() => (window.addEventListener("keydown", j), window.addEventListener("keyup", P), () => {
    window.removeEventListener("keydown", j), window.removeEventListener("keyup", P);
  }), [j, P]), r.useEffect(() => {
    if (!x || !m) return;
    const t = l == null ? void 0 : l.players.find((n) => n.id === c.id), s = l == null ? void 0 : l.fighters.find((n) => n.id === (t == null ? void 0 : t.fighterId));
    let d;
    s && (l == null ? void 0 : l.fighters.indexOf(s)) === 0 ? d = { left: i.a.pressed, right: i.d.pressed, up: i.w.pressed, down: i.s.pressed, attack1: i[" "].pressed } : d = { left: i.ArrowLeft.pressed, right: i.ArrowRight.pressed, up: i.ArrowUp.pressed, down: i.ArrowDown.pressed, attack1: i.ArrowDown.pressed }, x.sendInput(d);
  }, [i, x, m, l, c.id]), r.useEffect(() => {
    if (!l) return;
    const t = F.current;
    if (!t) return;
    const s = t.getContext("2d");
    if (!s) return;
    const d = () => {
      X(s, l, y), N.current = requestAnimationFrame(d);
    };
    return d(), () => {
      N.current && cancelAnimationFrame(N.current);
    };
  }, [l, y]);
  const K = r.useCallback(() => {
    (x == null ? void 0 : x.isConnected()) && x.sendRestart();
  }, [x]), J = () => {
    Y((t) => t + 1);
  };
  if (T) return e.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [e.jsx(q, { className: "h-8 w-8 text-red-500" }), e.jsx("h2", { className: "text-xl font-bold text-red-500", style: { fontSize: "12px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO FIGHTER GAME..." })] }), e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent mx-auto mb-4" }), e.jsxs("p", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["JOINING ROOM ", h] })] }) }) });
  const B = l == null ? void 0 : l.players.find((t) => t.id === c.id), g = l == null ? void 0 : l.fighters.find((t) => t.id === (B == null ? void 0 : B.fighterId));
  return e.jsxs("div", { className: "flex min-h-screen flex-col bg-black text-white", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsxs("div", { className: "fixed top-4 right-4 z-100 flex gap-2", children: [e.jsx("button", { onClick: () => $(!b), className: "bg-gray-700 border-2 border-red-500 hover:bg-red-500 hover:text-black text-red-400 px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": b, "aria-label": b ? "Hide panel" : "Show panel", children: b ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => G("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: `flex min-h-0 flex-1 flex-col pt-16 sm:pt-[4.5rem] ${b ? "lg:flex-row lg:items-stretch lg:gap-4 lg:px-4 lg:pb-4" : "items-center justify-center px-3 pb-6 sm:px-4"}`, children: [e.jsx("div", { className: `flex min-h-0 w-full min-w-0 flex-col items-center justify-center ${b ? "lg:flex-1 lg:py-2" : "flex-1"}`, children: e.jsxs("div", { className: "flex w-full max-w-[min(1024px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-lg border-4 border-red-500 bg-gray-900", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "border-b-4 border-red-500 bg-red-500 px-3 py-3 sm:px-4", children: e.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [e.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4", children: [e.jsx("h3", { className: "text-black font-bold shrink-0", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "GAME ARENA" }), e.jsxs("p", { className: "text-black/90 break-all", style: { fontSize: "7px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM ", h] })] }), e.jsxs("div", { className: "flex flex-wrap items-center gap-2 lg:gap-3", children: [e.jsxs("div", { className: "flex items-center gap-1.5", children: [m ? e.jsx(te, { className: "h-4 w-4 text-black shrink-0" }) : e.jsx(de, { className: "h-4 w-4 text-black shrink-0" }), e.jsx("span", { className: "text-black font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: m ? "CONNECTED" : "DISCONNECTED" })] }), e.jsx("div", { className: `px-3 py-1.5 border-2 text-black ${f === "playing" ? "bg-green-400 border-black" : f === "waiting" ? "bg-yellow-400 border-black" : f === "finished" ? "bg-red-300 border-black" : "bg-gray-300 border-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: f === "playing" ? "PLAYING" : f === "waiting" ? "WAITING" : f === "finished" ? "FINISHED" : "\u2014" }), f === "finished" && e.jsxs(k, { type: "button", variant: "outline", size: "sm", onClick: K, disabled: !m, className: "border-2 border-black bg-yellow-400 px-2 py-1.5 font-bold text-black hover:bg-yellow-300 disabled:opacity-50", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Play again in this room", children: [e.jsx(ne, { className: "mr-1.5 inline h-3.5 w-3.5" }), "PLAY AGAIN"] }), e.jsx(k, { type: "button", variant: "outline", size: "sm", onClick: J, className: "bg-gray-800 border-2 border-black text-white hover:bg-gray-700 px-2 py-1.5", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, "aria-label": "Refresh view", children: e.jsx(oe, { className: "h-4 w-4" }) }), e.jsxs(k, { variant: y ? "default" : "outline", size: "sm", onClick: () => W(!y), className: `px-3 py-2 border-2 font-bold transition-colors ${y ? "bg-green-400 border-black text-black" : "bg-gray-800 border-black text-white hover:bg-gray-700"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(ae, { className: "h-4 w-4 mr-2" }), "GRID"] })] })] }) }), e.jsx("div", { className: "w-full bg-black", children: e.jsx("div", { className: "relative w-full", style: { aspectRatio: `${E} / ${R}`, maxHeight: "min(576px, calc(100svh - 12rem), calc(100vh - 12rem))" }, children: e.jsx("canvas", { ref: F, width: E, height: R, className: "absolute inset-0 block h-full w-full max-h-full max-w-full", style: { imageRendering: "pixelated" } }) }) })] }) }), b && e.jsxs("div", { className: "mx-auto w-full max-w-lg shrink-0 space-y-4 px-3 pb-4 lg:mx-0 lg:w-80 lg:max-w-sm lg:overflow-y-auto lg:px-0 lg:pb-0", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsxs("h3", { className: "flex items-center gap-2 text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: [e.jsx(le, { className: "h-4 w-4" }), "PLAYERS (", (l == null ? void 0 : l.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4 space-y-3", children: l == null ? void 0 : l.players.map((t) => {
    const s = l.fighters.find((d) => d.id === t.fighterId);
    return e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-800 border-2 border-red-500 rounded", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-white", style: { backgroundColor: (s == null ? void 0 : s.color) || "#666", boxShadow: "0 0 0 1px #000" } }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: t.username }), e.jsxs("p", { className: "text-sm text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: ["HP: ", (s == null ? void 0 : s.health) || 0, "/", (s == null ? void 0 : s.maxHealth) || 100] })] })] }), t.id === c.id && e.jsx("div", { className: "border border-red-500 text-red-500 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }, t.id);
  }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CONTROLS" }) }), e.jsxs("div", { className: "p-4 space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium mb-2 text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "PLAYER 1" }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "A" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LEFT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "D" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "RIGHT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "W" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "JUMP" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SPACE" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACK" })] })] })] }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium mb-2 text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "PLAYER 2" }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2190" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LEFT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2192" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "RIGHT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2191" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "JUMP" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2193" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACK" })] })] })] })] }), e.jsx("p", { className: "text-xs text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LAST FIGHTER STANDING WINS!" })] })] }), g && e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "YOUR FIGHTER" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "HEALTH:" }), e.jsxs("span", { className: "text-red-400 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: [g.health, "/100"] })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "STATUS:" }), e.jsx("span", { className: "text-red-400 font-bold capitalize", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: g.spriteState })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACKING:" }), e.jsx("span", { className: "text-red-400 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: g.isAttacking ? "YES" : "NO" })] })] }) })] })] })] })] });
}
export {
  Se as default
};
