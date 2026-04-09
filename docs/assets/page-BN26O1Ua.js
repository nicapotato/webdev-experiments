import { u as se, d as oe, r as m, j as e, t as E } from "./index-Cyo_F1kd.js";
import { C as ae } from "./ChessBoardMultiplayer-Dg9aZ6Hn.js";
import { p as I, C as i, b as h, c as L, d as le, i as j, B, e as ne, a as ce } from "./chess-game-multiplayer-DB5exR2Z.js";
import { g as ie } from "./player-utils-sDKa8flh.js";
import "./gin-DHzzR3IR.js";
function fe() {
  const k = se(), C = oe().roomId, [l, H] = m.useState(null), [g, W] = m.useState(false), [D, R] = m.useState(true), [w, Y] = m.useState({ id: "", username: "" }), [u, U] = m.useState(null), [b, P] = m.useState(null), [F, v] = m.useState([]), [N, A] = m.useState(null), [O, $] = m.useState(false), [p, K] = m.useState(null), [f, _] = m.useState(false), T = 360, q = T * 2 + 24 * 2, y = m.useRef(null), z = (t, r, s) => {
    if (!t || t.type === i.Empty) return [];
    switch (t.type) {
      case i.Pawn:
        return V(t, r, s);
      case i.Rook:
        return M(t, r, s);
      case i.Knight:
        return Q(t, r, s);
      case i.Bishop:
        return G(t, r, s);
      case i.Queen:
        return J(t, r, s);
      case i.King:
        return Z(t, r, s);
      default:
        return [];
    }
  }, V = (t, r, s) => {
    const o = [], d = t.color === h.White ? -1 : 1, n = t.color === h.White ? 6 : 1, x = { row: r.row + d, col: r.col };
    if (j(x) && s[x.row][x.col].type === i.Empty && (o.push(x), r.row === n)) {
      const a = { row: r.row + 2 * d, col: r.col };
      j(a) && s[a.row][a.col].type === i.Empty && o.push(a);
    }
    for (const a of [-1, 1]) {
      const c = { row: r.row + d, col: r.col + a };
      if (j(c)) {
        const S = s[c.row][c.col];
        S.type !== i.Empty && S.color !== t.color && o.push(c);
      }
    }
    return o;
  }, M = (t, r, s) => {
    const o = [], d = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (const [n, x] of d) for (let a = 1; a < B; a++) {
      const c = { row: r.row + n * a, col: r.col + x * a };
      if (!j(c)) break;
      const S = s[c.row][c.col];
      if (S.type === i.Empty) o.push(c);
      else {
        S.color !== t.color && o.push(c);
        break;
      }
    }
    return o;
  }, Q = (t, r, s) => {
    const o = [], d = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    for (const [n, x] of d) {
      const a = { row: r.row + n, col: r.col + x };
      if (j(a)) {
        const c = s[a.row][a.col];
        (c.type === i.Empty || c.color !== t.color) && o.push(a);
      }
    }
    return o;
  }, G = (t, r, s) => {
    const o = [], d = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
    for (const [n, x] of d) for (let a = 1; a < B; a++) {
      const c = { row: r.row + n * a, col: r.col + x * a };
      if (!j(c)) break;
      const S = s[c.row][c.col];
      if (S.type === i.Empty) o.push(c);
      else {
        S.color !== t.color && o.push(c);
        break;
      }
    }
    return o;
  }, J = (t, r, s) => [...M(t, r, s), ...G(t, r, s)], Z = (t, r, s) => {
    const o = [], d = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (const [n, x] of d) {
      const a = { row: r.row + n, col: r.col + x };
      if (j(a)) {
        const c = s[a.row][a.col];
        (c.type === i.Empty || c.color !== t.color) && o.push(a);
      }
    }
    return o;
  };
  m.useEffect(() => {
    const { playerId: t, username: r } = ie();
    Y({ id: t, username: r });
  }, []), m.useEffect(() => {
    if (!C || !w.id) return;
    (async () => {
      try {
        R(true);
        const o = new ne(C, w.id, w.username);
        U(o), y.current = o, o.onGameState((d) => {
          const n = JSON.parse(JSON.stringify(d));
          H(n);
          const x = n.players.find((a) => a.id === w.id);
          K(x || null), x && (x.color !== n.currentPlayer || n.status !== "playing") && (P(null), v([]));
        }), o.onConnection((d) => {
          W(d), d ? E.success("Connected to chess game!") : E.error("Disconnected from chess game. You can try refreshing the page to reconnect.");
        }), o.onError((d) => {
          console.error("Game error:", d), E.error(`Game error: ${d.message}`);
        }), await o.connect(), R(false);
      } catch (o) {
        console.error("Failed to initialize game:", o), E.error("Failed to connect to game"), R(false);
      }
    })();
    const r = (o) => {
      y.current && y.current.isConnected() && (o.preventDefault(), o.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), y.current && y.current.disconnect();
    }, s = () => {
      y.current && y.current.disconnect();
    };
    return window.addEventListener("beforeunload", r), window.addEventListener("popstate", s), () => {
      window.removeEventListener("beforeunload", r), window.removeEventListener("popstate", s), y.current && (y.current.disconnect(), y.current = null);
    };
  }, [C, w]), m.useEffect(() => () => {
    y.current && (y.current.disconnect(), y.current = null);
  }, []);
  const X = m.useCallback((t, r) => {
    if (!l || !u || !g || l.status !== "playing") return;
    const s = { row: t, col: r }, o = l.board[t][r];
    if (N) {
      I(s, N) && A(null);
      return;
    }
    if (!b) {
      if (o.type !== i.Empty && p && o.color === p.color && p.color === l.currentPlayer) {
        P(s);
        const n = z(o, s, l.board);
        v(n);
      }
      return;
    }
    if (I(b, s)) {
      P(null), v([]);
      return;
    }
    if (o.type !== i.Empty && p && o.color === p.color) {
      P(s);
      const n = z(o, s, l.board);
      v(n);
      return;
    }
    if (F.some((n) => I(n, s))) {
      const n = { from: b, to: s }, x = l.board[b.row][b.col];
      if (x.type === i.Pawn && (x.color === h.White && s.row === 0 || x.color === h.Black && s.row === 7)) {
        A(s);
        return;
      }
      u.sendMove(n), P(null), v([]);
    } else P(null), v([]);
  }, [l, u, g, b, F, p, N]), ee = m.useCallback((t) => {
    if (!b || !N || !u) return;
    const r = { from: b, to: N, promotion: t };
    u.sendMove(r), P(null), v([]), A(null);
  }, [b, N, u]), te = async () => {
    try {
      const t = `${window.location.origin}/console/learning/games/multiplayer-games/${C}/chess`;
      await navigator.clipboard.writeText(t), E.success("Shareable link copied to clipboard");
    } catch {
      E.error("Failed to copy shareable link");
    }
  }, re = () => {
    const t = ce();
    k(`/multiplayer/${t}/chess`);
  };
  return D ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-gray-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHESS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => _((t) => !t), className: "bg-gray-700 border-2 border-gray-400 hover:bg-gray-600 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": f, "aria-label": f ? "Hide sidebar" : "Show sidebar", children: f ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => k("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6", style: { height: "100vh", paddingTop: f ? 0 : 5, paddingBottom: f ? 0 : 5 }, children: [e.jsx("img", { src: (p == null ? void 0 : p.color) === h.Black ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (p == null ? void 0 : p.color) === h.Black ? "White player" : "Black player", className: `object-cover object-center border-4 ${(l == null ? void 0 : l.currentPlayer) === ((p == null ? void 0 : p.color) === h.Black ? h.White : h.Black) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${f ? "" : " - 10px"})`, width: T, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } }), e.jsx("div", { children: e.jsx(ae, { board: (l == null ? void 0 : l.board) || [], selectedSquare: b, possibleMoves: F, onSquareClick: X, sideImagesWidth: q, isSidebarOpen: f, showGrid: O, currentPlayerColor: p == null ? void 0 : p.color }) }), e.jsx("img", { src: (p == null ? void 0 : p.color) === h.Black ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (p == null ? void 0 : p.color) === h.Black ? "Black player" : "White player", className: `object-cover object-center border-4 ${(l == null ? void 0 : l.currentPlayer) === (p == null ? void 0 : p.color) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${f ? "" : " - 10px"})`, width: T, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } })] }), e.jsxs("div", { className: `w-96 flex flex-col p-6 bg-black border-l-4 border-gray-400 overflow-y-auto ${f ? "" : "hidden"}`, style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-white", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHESS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", C, " | PLAYER: ", w.username, p && ` (${L(p.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(l == null ? void 0 : l.currentPlayer) === (p == null ? void 0 : p.color) ? "bg-blue-400 border-blue-300" : "bg-gray-400 border-gray-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(l == null ? void 0 : l.currentPlayer) === h.White ? "WHITE" : "BLACK", " ", "TO MOVE"] }), (l == null ? void 0 : l.check) && e.jsx("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECK!" }), (l == null ? void 0 : l.checkmate) && e.jsx("div", { className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECKMATE!" }), (l == null ? void 0 : l.stalemate) && e.jsx("div", { className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "STALEMATE!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    u && g && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || k("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!g) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (u == null ? void 0 : u.restartGame());
  }, disabled: !g, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { onClick: te, className: "flex-1 bg-gray-600 border-2 border-gray-400 hover:bg-gray-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "COPY SHAREABLE LINK" }), e.jsx("button", { onClick: re, className: "flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" })] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${g ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: g ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !g && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsx("div", { className: "flex flex-col gap-4 flex-1", children: e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (l == null ? void 0 : l.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [l == null ? void 0 : l.players.map((t) => {
    const r = t.id === w.id, s = l && t.color === l.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${r ? "border-blue-300 bg-blue-800" : "border-gray-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-gray-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: t.username }), r && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: L(t.color) }), s && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, t.id);
  }), (!(l == null ? void 0 : l.players) || l.players.length === 0) && e.jsx("div", { className: "text-gray-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WHITE:" }), e.jsx("div", { className: "flex flex-wrap gap-1", children: e.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "BLACK:" }), e.jsx("div", { className: "flex flex-wrap gap-1", children: e.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsx("div", { className: "overflow-y-auto max-h-64", children: e.jsx("div", { className: "text-gray-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" }) }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-gray-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => $(!O), className: `px-3 py-2 border-2 font-bold transition-colors ${O ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-gray-400 text-gray-300 hover:bg-gray-500"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: O ? "ON" : "OFF" })] }) })] })] }) }), N && e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50", children: e.jsxs("div", { className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)" }, children: [e.jsx("h3", { className: "text-sm font-bold mb-6 text-center text-green-400", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "2px 2px 0px #000" }, children: "CHOOSE PROMOTION PIECE" }), e.jsx("div", { className: "flex gap-4 justify-center", children: [i.Queen, i.Rook, i.Bishop, i.Knight].map((t) => e.jsx("button", { onClick: () => ee(t), className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors", style: { fontSize: "20px", filter: "drop-shadow(1px 1px 0px #000)", boxShadow: "inset 0 0 0 1px #000" }, children: le({ type: t, color: (p == null ? void 0 : p.color) || h.White }) }, t)) })] }) })] })] })] });
}
export {
  fe as default
};
