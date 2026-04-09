import { u as B, d as V, z as K, r as t, j as e, t as c } from "./index-CE6kdDhP.js";
import { B as f } from "./button-DoKDxYAf.js";
import { r as _, e as J, C as X, S as Z, D as u, f as q, j as Q } from "./snake-game-multiplayer-COxn6obF.js";
import { g as ee } from "./player-utils-sDKa8flh.js";
import { A as se, G as te } from "./grid-3x3-DPN8fQzc.js";
import { R as P, U as re } from "./users-Bfb7UK6w.js";
import { C as ae, W as oe } from "./wifi-qXXkt-ft.js";
import "./gin-DHzzR3IR.js";
function fe() {
  const g = B(), R = V(), { theme: F } = K(), y = R.roomId, [a, z] = t.useState(null), [b, O] = t.useState(false), [I, w] = t.useState(true), [m, L] = t.useState({ id: "", username: "" }), [x, T] = t.useState(null), [l, G] = t.useState("waiting"), [S, U] = t.useState(0), [D, Y] = t.useState(0), [p, M] = t.useState(false), [h, H] = t.useState(true), o = t.useRef(null), E = t.useRef(null), N = t.useRef(null);
  t.useEffect(() => {
    const { playerId: s, username: r } = ee();
    L({ id: s, username: r });
  }, []), t.useEffect(() => {
    if (!y || !m.id) return;
    (async () => {
      try {
        w(true);
        const n = new Z(y, m.id, m.username);
        T(n), o.current = n, n.onGameState((i) => {
          const j = i.players.length;
          if (S > j && S > 1) {
            const C = S - j;
            c.warning(`${C} player${C > 1 ? "s" : ""} left the room`);
          }
          const A = JSON.parse(JSON.stringify(i));
          z(A), G(A.status), U(j);
        }), n.onConnection((i) => {
          O(i), i ? c.success("Connected to snake game!") : c.error("Disconnected from snake game. You can try refreshing the page to reconnect.");
        }), n.onError((i) => {
          console.error("Game error:", i), c.error(`Game error: ${i.message}`);
        }), await n.connect(), w(false);
      } catch (n) {
        console.error("Failed to initialize game:", n), c.error("Failed to connect to game"), w(false);
      }
    })();
    const r = (n) => {
      o.current && o.current.isConnected() && (n.preventDefault(), n.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), o.current && o.current.disconnect();
    }, d = () => {
      o.current && o.current.disconnect();
    };
    return window.addEventListener("beforeunload", r), window.addEventListener("popstate", d), () => {
      window.removeEventListener("beforeunload", r), window.removeEventListener("popstate", d), o.current && (o.current.disconnect(), o.current = null);
    };
  }, [y, m]), t.useEffect(() => () => {
    o.current && (o.current.disconnect(), o.current = null);
  }, []);
  const v = t.useCallback((s) => {
    if (!x || !b || l !== "playing") return;
    let r = null;
    switch (s.key) {
      case "ArrowUp":
      case "w":
      case "W":
        r = u.Up;
        break;
      case "ArrowDown":
      case "s":
      case "S":
        r = u.Down;
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        r = u.Left;
        break;
      case "ArrowRight":
      case "d":
      case "D":
        r = u.Right;
        break;
      default:
        return;
    }
    r !== null && (s.preventDefault(), x.sendDirection(r));
  }, [x, b, l]);
  t.useEffect(() => (window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v)), [v]);
  const k = t.useCallback(() => {
    const s = E.current;
    if (!s || !a) return;
    const r = s.getContext("2d");
    r && _(r, a, q, p);
  }, [a, p]);
  t.useEffect(() => {
    const s = () => {
      k(), N.current = requestAnimationFrame(s);
    };
    return s(), () => {
      N.current && cancelAnimationFrame(N.current);
    };
  }, [k]);
  const W = async () => {
    try {
      const s = `${window.location.origin}/console/learning/games/multiplayer-games/${y}/snake`;
      await navigator.clipboard.writeText(s), c.success("Shareable link copied to clipboard");
    } catch {
      c.error("Failed to copy shareable link");
    }
  }, $ = () => {
    const s = Q();
    g(`/multiplayer/${s}/snake`);
  };
  return I ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-yellow-400 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-yellow-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO SNAKE GAME..." })] }) }) }) : e.jsxs("div", { className: "h-screen w-full flex flex-col text-white relative", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("div", { className: "absolute inset-0 opacity-35", style: { backgroundImage: `url('/art/${F === "dark" ? "background-gold-dark-1.jpg" : "background-gold-light-1.jpg"}')`, backgroundRepeat: "repeat", backgroundSize: "160px 160px" } }), e.jsxs("div", { className: "relative z-10 h-full flex flex-col", children: [e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => H(!h), className: "bg-gray-700 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": h, "aria-label": h ? "Hide panel" : "Show panel", children: h ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => {
    x && b && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || g("/multiplayer");
  }, className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsx("div", { className: "flex items-center justify-between text-white p-6 flex-shrink-0 relative", children: e.jsx("div", { className: "relative z-20 flex items-center justify-between w-full", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(f, { variant: "ghost", size: "sm", onClick: () => {
    x && b && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || g("/multiplayer");
  }, className: "text-black bg-yellow-400 border-2 border-black hover:bg-yellow-500", style: { fontFamily: "'Press Start 2P', monospace", fontSize: "8px" }, children: e.jsx(se, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("h1", { className: "text-xl font-bold text-yellow-400", style: { fontSize: "28px", WebkitTextStroke: "2px #000", fontFamily: "'Press Start 2P', monospace" }, children: "SNAKE MULTIPLAYER" }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: `px-4 py-2 border-2 text-black ${l === "playing" ? "bg-green-400 border-green-400" : l === "finished" ? "bg-red-400 border-red-400" : "bg-yellow-400 border-yellow-400"}`, style: { fontSize: "12px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: l === "playing" ? "PLAYING" : l === "finished" ? "FINISHED" : "WAITING" }), l === "finished" && e.jsxs(f, { onClick: () => x == null ? void 0 : x.restartGame(), disabled: !b, size: "sm", className: "bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(P, { className: "h-4 w-4 mr-2" }), "RESTART GAME"] })] })] }), e.jsxs("div", { className: "flex gap-2 mt-2", children: [e.jsxs("span", { className: "bg-black text-yellow-400 px-2 py-1 border border-yellow-400", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", y] }), e.jsxs("span", { className: "bg-black text-yellow-400 px-2 py-1 border border-yellow-400", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["PLAYER: ", m.username] })] })] })] }) }) }), e.jsxs("div", { className: "flex flex-1 relative", children: [e.jsx("div", { className: "flex-1 flex items-center justify-center bg-transparent p-4 relative z-10", children: e.jsx("div", { className: "border-4 border-yellow-400 rounded-lg overflow-hidden shadow-lg bg-black/90", style: { boxShadow: "0 0 0 4px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(0,0,0,0.8)" }, children: e.jsx("canvas", { ref: E, width: X, height: J, className: "block", style: { width: "100%", height: "100%", imageRendering: "pixelated" } }) }) }), h && e.jsx("div", { className: "w-80 p-4 overflow-y-auto space-y-4 relative", children: e.jsxs("div", { className: "relative z-10", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsxs("div", { className: "bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400", children: [e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "GAME SETTINGS" }), e.jsx("p", { className: "text-black", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "CUSTOMIZE YOUR GAME EXPERIENCE" })] }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(te, { className: "h-4 w-4 text-yellow-400" }), e.jsx("span", { className: "text-yellow-300 font-medium", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" })] }), e.jsx(f, { variant: p ? "default" : "outline", size: "sm", onClick: () => M(!p), className: `px-3 py-2 border-2 font-bold transition-colors ${p ? "bg-green-400 border-green-400 text-black" : "bg-gray-700 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: p ? "ON" : "OFF" })] }), e.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-2", children: [e.jsxs(f, { variant: "outline", size: "sm", onClick: W, className: "w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-100", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(ae, { className: "h-4 w-4 mr-2" }), "COPY SHAREABLE LINK"] }), e.jsxs(f, { variant: "outline", size: "sm", onClick: $, className: "w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-100", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(P, { className: "h-4 w-4 mr-2" }), "NEW ROOM"] })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("h3", { className: "flex items-center gap-2 text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx(re, { className: "h-4 w-4" }), "PLAYERS (", (a == null ? void 0 : a.players.length) || 0, "/2)"] }), e.jsxs(f, { variant: "outline", size: "sm", onClick: () => {
    Y((s) => s + 1), c.info("PLAYER LIST REFRESHED");
  }, className: "bg-gray-700 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [e.jsx(P, { className: "h-4 w-4 mr-2" }), "REFRESH"] })] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [a == null ? void 0 : a.players.map((s, r) => {
    const d = a.snakes.find((i) => i.id === s.snakeId), n = s.id === m.id;
    return e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-800 border-2 border-yellow-400 rounded", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "w-4 h-4 rounded border-2 border-white", style: { backgroundColor: (d == null ? void 0 : d.color) || "#666", boxShadow: "0 0 0 1px #000" } }), e.jsx("span", { className: "font-medium text-yellow-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: s.username }), n && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(oe, { className: "h-4 w-4 text-green-500", "aria-label": "Connected" }), d && e.jsx("div", { className: `px-2 py-1 border-2 text-black ${d.alive ? "bg-green-400 border-green-400" : "bg-red-400 border-red-400"}`, style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: d.alive ? "ALIVE" : "DEAD" })] })] }, s.id);
  }), (!(a == null ? void 0 : a.players) || a.players.length === 0) && e.jsx("p", { className: "text-yellow-300 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }, `players-${D}`) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "GAME STATUS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-yellow-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "STATUS:" }), e.jsx("div", { className: `px-3 py-1 border-2 text-black ${l === "playing" ? "bg-green-400 border-green-400" : l === "finished" ? "bg-red-400 border-red-400" : "bg-yellow-400 border-yellow-400"}`, style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 1px #000" }, children: l.toUpperCase() })] }), (a == null ? void 0 : a.winner) && e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-yellow-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WINNER:" }), e.jsx("span", { className: "text-yellow-400 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: a.winner })] }), e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-yellow-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "FOOD:" }), e.jsx("span", { className: "text-yellow-400", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: (a == null ? void 0 : a.food) ? `(${a.food.position.X}, ${a.food.position.Y})` : "NONE" })] })] }) })] })] }) })] })] })] });
}
export {
  fe as default
};
