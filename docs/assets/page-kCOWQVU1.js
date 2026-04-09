import { u as J, d as Z, r as i, j as e, t as w } from "./index-CE6kdDhP.js";
import { C as Q } from "./ChessBoardMultiplayer-BZFSEMr_.js";
import { b as I } from "./chess-game-multiplayer-DB5exR2Z.js";
import { p as E, C as b, b as z, B as C, c as X, a as ee } from "./checkers-game-multiplayer-CFO-YGq1.js";
import { g as re } from "./player-utils-sDKa8flh.js";
import "./gin-DHzzR3IR.js";
function de() {
  const N = J(), f = Z().roomId, [r, M] = i.useState(null), [u, G] = i.useState(false), [L, R] = i.useState(true), [y, D] = i.useState({ id: "", username: "" }), [v, B] = i.useState(null), [g, S] = i.useState(null), [k, P] = i.useState([]), [j, H] = i.useState(false), [l, U] = i.useState(null), [h, $] = i.useState(false), O = 360, Y = O * 2 + 24 * 2, d = i.useRef(null), F = (t, s, o) => {
    if (!t || t.type !== "checker") return [];
    const a = [], p = t.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : t.color === b.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [n, x] of p) {
      const c = s.row + 2 * n, m = s.col + 2 * x, K = s.row + n, V = s.col + x;
      if (c >= 0 && c < C && m >= 0 && m < C && !o[c][m]) {
        const T = o[K][V];
        T && T.color !== t.color && a.push({ row: c, col: m });
      }
    }
    if (a.length === 0) for (const [n, x] of p) {
      const c = s.row + n, m = s.col + x;
      c >= 0 && c < C && m >= 0 && m < C && !o[c][m] && a.push({ row: c, col: m });
    }
    return a;
  };
  i.useEffect(() => {
    const { playerId: t, username: s } = re();
    D({ id: t, username: s });
  }, []), i.useEffect(() => {
    if (!f || !y.id) return;
    (async () => {
      try {
        R(true);
        const a = new X(f, y.id, y.username);
        B(a), d.current = a, a.onGameState((p) => {
          const n = JSON.parse(JSON.stringify(p));
          M(n);
          const x = n.players.find((c) => c.id === y.id);
          U(x || null), x && (x.color !== n.currentPlayer || n.status !== "playing") && (S(null), P([]));
        }), a.onConnection((p) => {
          G(p), p ? w.success("Connected to checkers game!") : w.error("Disconnected from checkers game. You can try refreshing the page to reconnect.");
        }), a.onError((p) => {
          console.error("Game error:", p), w.error(`Game error: ${p.message}`);
        }), await a.connect(), R(false);
      } catch (a) {
        console.error("Failed to initialize game:", a), w.error("Failed to connect to game"), R(false);
      }
    })();
    const s = (a) => {
      d.current && d.current.isConnected() && (a.preventDefault(), a.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), d.current && d.current.disconnect();
    }, o = () => {
      d.current && d.current.disconnect();
    };
    return window.addEventListener("beforeunload", s), window.addEventListener("popstate", o), () => {
      window.removeEventListener("beforeunload", s), window.removeEventListener("popstate", o), d.current && (d.current.disconnect(), d.current = null);
    };
  }, [f, y]), i.useEffect(() => () => {
    d.current && (d.current.disconnect(), d.current = null);
  }, []);
  const q = i.useCallback((t, s) => {
    if (!r || !v || !u || r.status !== "playing") return;
    const o = { row: t, col: s }, a = r.board[t][s];
    if (!g) {
      if (r.mustCapture && r.captureSequence.length > 0) {
        const x = r.captureSequence[r.captureSequence.length - 1].to;
        if (!E(o, x)) return;
      }
      if (a && a.color === (l == null ? void 0 : l.color) && (l == null ? void 0 : l.color) === r.currentPlayer) {
        S(o);
        const n = F(a, o, r.board);
        P(n);
      }
      return;
    }
    if (E(g, o)) {
      S(null), P([]);
      return;
    }
    if (a && l && a.color === l.color) {
      if (r.mustCapture && r.captureSequence.length > 0) {
        const c = r.captureSequence[r.captureSequence.length - 1].to;
        if (!E(o, c)) return;
      }
      S(o);
      const n = F(a, o, r.board);
      P(n);
      return;
    }
    if (k.some((n) => E(n, o))) {
      const n = [];
      if (Math.abs(t - g.row) === 2) {
        const c = (g.row + t) / 2, m = (g.col + s) / 2;
        n.push({ row: c, col: m });
      }
      const x = { from: g, to: o, ...n.length > 0 && { captures: n } };
      v.sendMove(x), S(null), P([]);
    } else S(null), P([]);
  }, [r, v, u, g, k, l]), W = async () => {
    try {
      const t = `${window.location.origin}/console/games/multiplayer-games/${f}/checkers`;
      await navigator.clipboard.writeText(t), w.success("Shareable link copied to clipboard");
    } catch {
      w.error("Failed to copy shareable link");
    }
  }, _ = () => {
    const t = ee();
    N(`/multiplayer/${t}/checkers`);
  };
  return L ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-orange-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHECKERS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 128 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => $((t) => !t), className: "bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": h, "aria-label": h ? "Hide sidebar" : "Show sidebar", children: h ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => N("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6", style: { height: "100vh", paddingTop: h ? 0 : 5, paddingBottom: h ? 0 : 5 }, children: [e.jsx("img", { src: (l == null ? void 0 : l.color) === b.Red ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (l == null ? void 0 : l.color) === b.Red ? "Black player" : "Red player", className: `object-cover object-center border-4 ${(r == null ? void 0 : r.currentPlayer) === ((l == null ? void 0 : l.color) === b.Red ? b.Black : b.Red) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${h ? "" : " - 10px"})`, width: O, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } }), e.jsx("div", { children: e.jsx(Q, { board: te((r == null ? void 0 : r.board) || []), selectedSquare: g, possibleMoves: k, onSquareClick: q, sideImagesWidth: Y, isSidebarOpen: h, showGrid: j, currentPlayerColor: (l == null ? void 0 : l.color) === b.Red ? I.Black : I.White }) }), e.jsx("img", { src: (l == null ? void 0 : l.color) === b.Red ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (l == null ? void 0 : l.color) === b.Red ? "Red player" : "Black player", className: `object-cover object-center border-4 ${(r == null ? void 0 : r.currentPlayer) === (l == null ? void 0 : l.color) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${h ? "" : " - 10px"})`, width: O, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } })] }), h && e.jsxs("div", { className: "w-96 flex flex-col p-6 bg-black border-l-4 border-orange-600 overflow-y-auto", style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-orange-400", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHECKERS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", f, " | PLAYER: ", y.username, l && ` (${z(l.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(r == null ? void 0 : r.currentPlayer) === (l == null ? void 0 : l.color) ? "bg-blue-400 border-blue-300" : "bg-orange-400 border-orange-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(r == null ? void 0 : r.currentPlayer) === b.Red ? "RED" : "BLACK", " ", "TO MOVE"] }), (r == null ? void 0 : r.status) === "finished" && e.jsx("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "GAME OVER!" }), (r == null ? void 0 : r.mustCapture) && e.jsx("div", { className: "px-4 py-2 bg-orange-600 border-2 border-orange-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "MUST CAPTURE!" }), (r == null ? void 0 : r.captureSequence) && r.captureSequence.length > 0 && e.jsx("div", { className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CONTINUE JUMPING!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    v && u && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || N("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!u) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (v == null ? void 0 : v.restartGame());
  }, disabled: !u, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { onClick: W, className: "flex-1 bg-orange-600 border-2 border-orange-400 hover:bg-orange-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "COPY SHAREABLE LINK" }), e.jsx("button", { onClick: _, className: "flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" })] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${u ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: u ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !u && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsxs("div", { className: "flex flex-col gap-4 flex-1", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (r == null ? void 0 : r.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [r == null ? void 0 : r.players.map((t) => {
    const s = t.id === y.id, o = r && t.color === r.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${s ? "border-blue-300 bg-blue-800" : "border-orange-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: t.username }), s && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: z(t.color) }), o && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, t.id);
  }), (!(r == null ? void 0 : r.players) || r.players.length === 0) && e.jsx("div", { className: "text-orange-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["RED: ", (r == null ? void 0 : r.capturedPieces.red) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (r == null ? void 0 : r.capturedPieces.red) || 0 }, (t, s) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u2656" }, s)), (!(r == null ? void 0 : r.capturedPieces.red) || r.capturedPieces.red === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] }), e.jsxs("div", { children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["BLACK: ", (r == null ? void 0 : r.capturedPieces.black) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (r == null ? void 0 : r.capturedPieces.black) || 0 }, (t, s) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u265C" }, s)), (!(r == null ? void 0 : r.capturedPieces.black) || r.capturedPieces.black === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "overflow-y-auto max-h-64", children: [r == null ? void 0 : r.moveHistory.slice(-12).map((t, s) => e.jsxs("div", { className: "mb-2 text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [t.player.username, ":", " ", t.moves.map((o, a) => `${String.fromCharCode(97 + o.from.col)}${8 - o.from.row}\u2192${String.fromCharCode(97 + o.to.col)}${8 - o.to.row}${o.captures ? "x" : ""}`).join(", ")] }, s)), (!(r == null ? void 0 : r.moveHistory) || r.moveHistory.length === 0) && e.jsx("div", { className: "text-orange-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-orange-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => H(!j), className: `px-3 py-2 border-2 font-bold transition-colors ${j ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: j ? "ON" : "OFF" })] }) })] })] })] })] })] });
}
function te(N) {
  return N.map((A) => A.map((f) => f ? { type: 2, color: f.color === 1 ? 1 : 2 } : { type: 0, color: 0 }));
}
export {
  de as default
};
