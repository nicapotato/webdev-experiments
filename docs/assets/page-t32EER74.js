import { u as $, d as B, r as t, j as e, t as m } from "./index-CKwZm0UE.js";
import { B as S } from "./button-Ch2qmtdg.js";
import { S as C, C as J, b as _, F as V, r as q } from "./fighter-game-multiplayer-DmaeNXXY.js";
import { g as Q } from "./player-utils-sDKa8flh.js";
import { c as X, A as Z, G as ee } from "./grid-3x3-C0jISuKE.js";
import { W as se, C as re } from "./wifi-vut-xjJk.js";
import { R as te, U as ae } from "./users-KZPYZR51.js";
import "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ne = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], oe = X("wifi-off", ne);
function ye() {
  const A = $(), f = B().roomId, [d, I] = t.useState(null), [h, R] = t.useState(false), [G, w] = t.useState(true), [c, L] = t.useState({ id: "", username: "" }), [y, T] = t.useState(null), [b, D] = t.useState("waiting"), [N, O] = t.useState(0), [ie, H] = t.useState(0), [u, U] = t.useState(false), [p, M] = t.useState(false), [i, a] = t.useState({ a: { pressed: false }, d: { pressed: false }, w: { pressed: false }, s: { pressed: false }, " ": { pressed: false }, ArrowLeft: { pressed: false }, ArrowRight: { pressed: false }, ArrowUp: { pressed: false }, ArrowDown: { pressed: false } }), o = t.useRef(null), F = t.useRef(null), j = t.useRef(null);
  t.useEffect(() => {
    const { playerId: r, username: s } = Q();
    L({ id: r, username: s });
  }, []), t.useEffect(() => {
    if (!f || !c.id) return;
    (async () => {
      try {
        w(true);
        const n = new V(f, c.id, c.username);
        T(n), o.current = n, n.onGameState((x) => {
          const k = x.players.length;
          if (N > k && N > 1) {
            const E = N - k;
            m.warning(`${E} player${E > 1 ? "s" : ""} left the room`);
          }
          const z = JSON.parse(JSON.stringify(x));
          I(z), D(z.status), O(k);
        }), n.onConnection((x) => {
          R(x), x ? m.success("Connected to fighter game!") : m.error("Disconnected from fighter game. You can try refreshing the page to reconnect.");
        }), n.onError((x) => {
          console.error("Game error:", x), m.error(`Game error: ${x.message}`);
        }), await n.connect(), w(false);
      } catch (n) {
        console.error("Failed to initialize game:", n), m.error("Failed to connect to game"), w(false);
      }
    })();
    const s = (n) => {
      o.current && o.current.isConnected() && (n.preventDefault(), n.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), o.current && o.current.disconnect();
    }, l = () => {
      o.current && o.current.disconnect();
    };
    return window.addEventListener("beforeunload", s), window.addEventListener("popstate", l), () => {
      window.removeEventListener("beforeunload", s), window.removeEventListener("popstate", l), o.current && (o.current.disconnect(), o.current = null);
    };
  }, [f, c]), t.useEffect(() => () => {
    o.current && (o.current.disconnect(), o.current = null);
  }, []);
  const P = t.useCallback((r) => {
    if (!(!y || !h)) switch (r.key) {
      case "a":
      case "A":
        r.preventDefault(), a((s) => ({ ...s, a: { pressed: true } }));
        break;
      case "d":
      case "D":
        r.preventDefault(), a((s) => ({ ...s, d: { pressed: true } }));
        break;
      case "w":
      case "W":
        r.preventDefault(), a((s) => ({ ...s, w: { pressed: true } }));
        break;
      case "s":
      case "S":
        r.preventDefault(), a((s) => ({ ...s, s: { pressed: true } }));
        break;
      case " ":
        r.preventDefault(), a((s) => ({ ...s, " ": { pressed: true } }));
        break;
      case "ArrowLeft":
        r.preventDefault(), a((s) => ({ ...s, ArrowLeft: { pressed: true } }));
        break;
      case "ArrowRight":
        r.preventDefault(), a((s) => ({ ...s, ArrowRight: { pressed: true } }));
        break;
      case "ArrowUp":
        r.preventDefault(), a((s) => ({ ...s, ArrowUp: { pressed: true } }));
        break;
      case "ArrowDown":
        r.preventDefault(), a((s) => ({ ...s, ArrowDown: { pressed: true } }));
        break;
    }
  }, [y, h]), v = t.useCallback((r) => {
    switch (r.key) {
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
  t.useEffect(() => (window.addEventListener("keydown", P), window.addEventListener("keyup", v), () => {
    window.removeEventListener("keydown", P), window.removeEventListener("keyup", v);
  }), [P, v]), t.useEffect(() => {
    if (!y || !h) return;
    const r = d == null ? void 0 : d.players.find((n) => n.id === c.id), s = d == null ? void 0 : d.fighters.find((n) => n.id === (r == null ? void 0 : r.fighterId));
    let l;
    s && (d == null ? void 0 : d.fighters.indexOf(s)) === 0 ? l = { left: i.a.pressed, right: i.d.pressed, up: i.w.pressed, down: i.s.pressed, attack1: i[" "].pressed } : l = { left: i.ArrowLeft.pressed, right: i.ArrowRight.pressed, up: i.ArrowUp.pressed, down: i.ArrowDown.pressed, attack1: i.ArrowDown.pressed }, y.sendInput(l);
  }, [i, y, h, d, c.id]), t.useEffect(() => {
    if (!d) return;
    const r = F.current;
    if (!r) return;
    const s = r.getContext("2d");
    if (!s) return;
    const l = () => {
      q(s, d, u), j.current = requestAnimationFrame(l);
    };
    return l(), () => {
      j.current && cancelAnimationFrame(j.current);
    };
  }, [d, u]);
  const W = async () => {
    try {
      const r = `${window.location.origin}/console/learning/games/multiplayer-games/${f}/fighter`;
      await navigator.clipboard.writeText(r), m.success("Shareable link copied to clipboard!");
    } catch {
      m.error("Failed to copy shareable link");
    }
  }, Y = () => {
    H((r) => r + 1);
  };
  if (G) return e.jsx("div", { className: "min-h-screen bg-black flex items-center justify-center", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [e.jsx(C, { className: "h-8 w-8 text-red-500" }), e.jsx("h2", { className: "text-xl font-bold text-red-500", style: { fontSize: "12px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO FIGHTER GAME..." })] }), e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent mx-auto mb-4" }), e.jsxs("p", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["JOINING ROOM ", f] })] }) }) });
  const K = d == null ? void 0 : d.players.find((r) => r.id === c.id), g = d == null ? void 0 : d.fighters.find((r) => r.id === (K == null ? void 0 : K.fighterId));
  return e.jsxs("div", { className: "min-h-screen bg-black text-white", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => M(!p), className: "bg-gray-700 border-2 border-red-500 hover:bg-red-500 hover:text-black text-red-400 px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": p, "aria-label": p ? "Hide panel" : "Show panel", children: p ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => A("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsx("div", { className: "border-b-4 border-red-500 bg-black", style: { boxShadow: "0 4px 8px rgba(0,0,0,0.8)" }, children: e.jsx("div", { className: "container mx-auto px-6 py-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(S, { variant: "ghost", size: "sm", onClick: () => A("/multiplayer"), className: "text-white hover:bg-gray-800 border-2 border-red-500", style: { fontFamily: "'Press Start 2P', monospace", fontSize: "8px" }, children: e.jsx(Z, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsxs("h1", { className: "text-xl font-bold flex items-center gap-3 text-red-500", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx(C, { className: "h-6 w-6" }), "FIGHTER GAME"] }), e.jsxs("p", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", f] })] })] }), e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [h ? e.jsx(se, { className: "h-4 w-4 text-green-500" }) : e.jsx(oe, { className: "h-4 w-4 text-red-500" }), e.jsx("span", { className: "text-sm font-medium text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: h ? "CONNECTED" : "DISCONNECTED" })] }), e.jsx("div", { className: `px-4 py-2 border-2 text-black ${b === "playing" ? "bg-green-400 border-green-400" : b === "waiting" ? "bg-yellow-400 border-yellow-400" : b === "finished" ? "bg-red-400 border-red-400" : "bg-gray-400 border-gray-400"}`, style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: b === "playing" ? "PLAYING" : b === "waiting" ? "WAITING" : b === "finished" ? "FINISHED" : "UNKNOWN" }), e.jsxs(S, { variant: "outline", size: "sm", onClick: W, className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(re, { className: "h-4 w-4 mr-2" }), "COPY SHAREABLE LINK"] }), e.jsx(S, { variant: "outline", size: "sm", onClick: Y, className: "bg-gray-700 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-black px-3 py-2", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: e.jsx(te, { className: "h-4 w-4" }) })] })] }) }) }), e.jsx("div", { className: "container mx-auto px-6 py-8", children: e.jsxs("div", { className: `grid gap-6 ${p ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"}`, children: [e.jsx("div", { className: p ? "lg:col-span-3" : "", children: e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-6 py-4 border-b-4 border-red-500", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "GAME ARENA" }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsxs(S, { variant: u ? "default" : "outline", size: "sm", onClick: () => U(!u), className: `px-3 py-2 border-2 font-bold transition-colors ${u ? "bg-green-400 border-green-400 text-black" : "bg-gray-700 border-red-500 text-red-400 hover:bg-red-500 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(ee, { className: "h-4 w-4 mr-2" }), "GRID"] }) })] }) }), e.jsx("div", { className: "p-6 flex justify-center", children: e.jsx("div", { className: "border-4 border-red-500 rounded-lg overflow-hidden bg-black", style: { boxShadow: "0 0 0 4px #000, inset 0 0 0 2px #000" }, children: e.jsx("canvas", { ref: F, width: _, height: J, className: "block", style: { width: "100%", height: "100%", maxWidth: "1024px", maxHeight: "576px", imageRendering: "pixelated" } }) }) })] }) }), p && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsxs("h3", { className: "flex items-center gap-2 text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: [e.jsx(ae, { className: "h-4 w-4" }), "PLAYERS (", (d == null ? void 0 : d.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4 space-y-3", children: d == null ? void 0 : d.players.map((r) => {
    const s = d.fighters.find((l) => l.id === r.fighterId);
    return e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-800 border-2 border-red-500 rounded", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-white", style: { backgroundColor: (s == null ? void 0 : s.color) || "#666", boxShadow: "0 0 0 1px #000" } }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: r.username }), e.jsxs("p", { className: "text-sm text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: ["HP: ", (s == null ? void 0 : s.health) || 0, "/", (s == null ? void 0 : s.maxHealth) || 100] })] })] }), r.id === c.id && e.jsx("div", { className: "border border-red-500 text-red-500 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }, r.id);
  }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CONTROLS" }) }), e.jsxs("div", { className: "p-4 space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium mb-2 text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "PLAYER 1" }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "A" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LEFT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "D" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "RIGHT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "W" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "JUMP" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SPACE" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACK" })] })] })] }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium mb-2 text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "PLAYER 2" }), e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2190" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LEFT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2192" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "RIGHT" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2191" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "JUMP" })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("kbd", { className: "bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "\u2193" }), e.jsx("span", { className: "text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACK" })] })] })] })] }), e.jsx("p", { className: "text-xs text-red-400", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "LAST FIGHTER STANDING WINS!" })] })] }), g && e.jsxs("div", { className: "bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-red-500 px-4 py-3 border-b-4 border-red-500", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "YOUR FIGHTER" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "HEALTH:" }), e.jsxs("span", { className: "text-red-400 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: [g.health, "/100"] })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "STATUS:" }), e.jsx("span", { className: "text-red-400 font-bold capitalize", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: g.spriteState })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { className: "text-red-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "ATTACKING:" }), e.jsx("span", { className: "text-red-400 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: g.isAttacking ? "YES" : "NO" })] })] }) })] })] })] }) })] });
}
export {
  ye as default
};
