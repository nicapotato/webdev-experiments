import { u as oe, d as ae, r as x, g as ne, h as le, j as e, t as N } from "./index-BBLpVi8g.js";
import { C as ce } from "./ChessBoardMultiplayer-DYmXEw6f.js";
import { b as k, C as U } from "./chess-game-multiplayer-Dq-vq7HR.js";
import { p as F, C as u, b as Y, B as j, c as ie, a as de } from "./checkers-game-multiplayer-CFO-YGq1.js";
import { g as xe, m as pe } from "./multiplayer-share-url-BDInfhC3.js";
import "./gin-DHzzR3IR.js";
function Pe() {
  const C = oe(), h = ae().roomId, [r, $] = x.useState(null), [b, W] = x.useState(false), [_, M] = x.useState(true), [y, K] = x.useState({ id: "", username: "" }), [E, V] = x.useState(null), [f, S] = x.useState(null), [R, P] = x.useState([]), [A, J] = x.useState(false), [d, Z] = x.useState(null), [g, Q] = x.useState(false), L = 360, X = L * 2 + 24 * 2, m = x.useRef(null), T = (t, a, o) => {
    const n = [], i = t.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : t.color === u.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [s, l] of i) {
      const c = a.row + 2 * s, p = a.col + 2 * l, w = a.row + s, v = a.col + l;
      if (c >= 0 && c < j && p >= 0 && p < j && !o[c][p]) {
        const D = o[w][v];
        D && D.color !== t.color && n.push({ row: c, col: p });
      }
    }
    return n;
  }, G = (t, a) => {
    for (let o = 0; o < j; o++) for (let n = 0; n < j; n++) {
      const i = t[o][n];
      if (i && i.color === a && T(i, { row: o, col: n }, t).length > 0) return true;
    }
    return false;
  }, I = (t, a, o) => {
    if (!t || t.type !== "checker") return [];
    const n = T(t, a, o), i = n.map((c) => ({ ...c, isCapture: true }));
    if (G(o, t.color) || n.length > 0) return i;
    const s = [], l = t.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : t.color === u.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [c, p] of l) {
      const w = a.row + c, v = a.col + p;
      w >= 0 && w < j && v >= 0 && v < j && !o[w][v] && s.push({ row: w, col: v });
    }
    return s;
  };
  x.useEffect(() => {
    const { playerId: t, username: a } = xe();
    K({ id: t, username: a });
  }, []), x.useEffect(() => {
    if (!h || !y.id) return;
    (async () => {
      try {
        M(true);
        const n = new ie(h, y.id, y.username);
        V(n), m.current = n, n.onGameState((i) => {
          const s = JSON.parse(JSON.stringify(i));
          $(s);
          const l = s.players.find((c) => c.id === y.id);
          Z(l || null), l && (l.color !== s.currentPlayer || s.status !== "playing") && (S(null), P([]));
        }), n.onConnection((i) => {
          W(i), i ? N.success("Connected to checkers game!") : N.error("Disconnected from checkers game. You can try refreshing the page to reconnect.");
        }), n.onError((i) => {
          console.error("Game error:", i), N.error(`Game error: ${i.message}`);
        }), await n.connect(), M(false);
      } catch (n) {
        console.error("Failed to initialize game:", n), N.error("Failed to connect to game"), M(false);
      }
    })();
    const a = (n) => {
      m.current && m.current.isConnected() && (n.preventDefault(), n.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), m.current && m.current.disconnect();
    }, o = () => {
      m.current && m.current.disconnect();
    };
    return window.addEventListener("beforeunload", a), window.addEventListener("popstate", o), () => {
      window.removeEventListener("beforeunload", a), window.removeEventListener("popstate", o), m.current && (m.current.disconnect(), m.current = null);
    };
  }, [h, y]), x.useEffect(() => () => {
    m.current && (m.current.disconnect(), m.current = null);
  }, []);
  const ee = x.useCallback((t, a) => {
    if (!r || !E || !b || r.status !== "playing") return;
    const o = { row: t, col: a }, n = r.board[t][a];
    if (!f) {
      if (r.mustCapture && r.captureSequence.length > 0) {
        const l = r.captureSequence[r.captureSequence.length - 1].to;
        if (!F(o, l)) return;
      }
      if (n && n.color === (d == null ? void 0 : d.color) && (d == null ? void 0 : d.color) === r.currentPlayer) {
        S(o);
        const s = I(n, o, r.board);
        P(s);
      }
      return;
    }
    if (F(f, o)) {
      S(null), P([]);
      return;
    }
    if (n && d && n.color === d.color) {
      if (r.mustCapture && r.captureSequence.length > 0) {
        const c = r.captureSequence[r.captureSequence.length - 1].to;
        if (!F(o, c)) return;
      }
      S(o);
      const s = I(n, o, r.board);
      P(s);
      return;
    }
    if (R.some((s) => F(s, o))) {
      const s = [];
      if (Math.abs(t - f.row) === 2) {
        const c = (f.row + t) / 2, p = (f.col + a) / 2;
        s.push({ row: c, col: p });
      }
      const l = { from: f, to: o, ...s.length > 0 && { captures: s } };
      E.sendMove(l), S(null), P([]);
    } else S(null), P([]);
  }, [r, E, b, f, R, d]), O = x.useMemo(() => {
    var _a;
    if (!r || r.status !== "playing") return { forcedCapture: false, mandatoryPieceSquares: [], singleLegalMoveHighlight: false, comboContinuePiece: null };
    if ((_a = r.captureSequence) == null ? void 0 : _a.length) {
      const s = r.captureSequence[r.captureSequence.length - 1], l = { row: s.to.row, col: s.to.col };
      return { forcedCapture: true, mandatoryPieceSquares: [l], singleLegalMoveHighlight: R.length === 1, comboContinuePiece: l };
    }
    const t = r.board, a = r.currentPlayer, o = G(t, a), n = ne(t, o, (s, l, c) => !!(s && s.color === a), (s, l, c) => {
      const p = c[s][l];
      return p ? T(p, { row: s, col: l }, c) : [];
    }), i = le(t, (s, l, c) => !!(s && s.color === a), (s, l, c) => {
      const p = c[s][l];
      return p ? I(p, { row: s, col: l }, c) : [];
    });
    return { forcedCapture: o, mandatoryPieceSquares: n, singleLegalMoveHighlight: i === 1, comboContinuePiece: null };
  }, [r, R]), re = (d == null ? void 0 : d.color) === u.Red ? u.Black : u.Red, H = r != null && d != null && r.currentPlayer === re, q = r != null && d != null && r.currentPlayer === d.color, B = (t) => ({ height: `calc(100vh${g ? "" : " - 10px"})`, width: L, filter: t ? "brightness(1.2)" : "brightness(0.5)", boxShadow: t ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000" }), te = async () => {
    try {
      await navigator.clipboard.writeText(pe(h, "checkers")), N.success("Shareable link copied to clipboard");
    } catch {
      N.error("Failed to copy shareable link");
    }
  }, se = () => {
    const t = de();
    C(`/multiplayer/${t}/checkers`);
  };
  return _ ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-orange-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHECKERS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => Q((t) => !t), className: "bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": g, "aria-label": g ? "Hide sidebar" : "Show sidebar", children: g ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => C("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6", style: { height: "100vh", paddingTop: g ? 0 : 5, paddingBottom: g ? 0 : 5 }, children: [e.jsx("img", { src: (d == null ? void 0 : d.color) === u.Red ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (d == null ? void 0 : d.color) === u.Red ? "Black player" : "Red player", className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${H ? "border-yellow-300" : "border-gray-700"}`, style: B(H) }), e.jsx("div", { children: e.jsx(ce, { board: me((r == null ? void 0 : r.board) || []), selectedSquare: f, possibleMoves: R, onSquareClick: ee, sideImagesWidth: X, isSidebarOpen: g, showGrid: A, currentPlayerColor: (d == null ? void 0 : d.color) === u.Red ? k.Black : k.White, forcedCapture: O.forcedCapture, mandatoryPieceSquares: O.mandatoryPieceSquares, singleLegalMoveHighlight: O.singleLegalMoveHighlight, comboContinuePiece: O.comboContinuePiece }) }), e.jsx("img", { src: (d == null ? void 0 : d.color) === u.Red ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (d == null ? void 0 : d.color) === u.Red ? "Red player" : "Black player", className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${q ? "border-yellow-300" : "border-gray-700"}`, style: B(q) })] }), g && e.jsxs("div", { className: "w-96 flex flex-col p-6 bg-black border-l-4 border-orange-600 overflow-y-auto", style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-orange-400", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHECKERS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", h, " | PLAYER: ", y.username, d && ` (${Y(d.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(r == null ? void 0 : r.currentPlayer) === (d == null ? void 0 : d.color) ? "bg-blue-400 border-blue-300" : "bg-orange-400 border-orange-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(r == null ? void 0 : r.currentPlayer) === u.Red ? "RED" : "BLACK", " ", "TO MOVE"] }), (r == null ? void 0 : r.status) === "finished" && e.jsxs("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: ["GAME OVER!", r.winner ? e.jsxs("span", { className: "block mt-1", children: [r.winner === "red" ? "RED" : r.winner === "black" ? "BLACK" : r.winner, " ", "WINS"] }) : null] }), (r == null ? void 0 : r.mustCapture) && e.jsx("div", { className: "px-4 py-2 bg-orange-600 border-2 border-orange-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "MUST CAPTURE!" }), (r == null ? void 0 : r.captureSequence) && r.captureSequence.length > 0 && e.jsx("div", { className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CONTINUE JUMPING!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    E && b && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || C("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!b) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (E == null ? void 0 : E.restartGame());
  }, disabled: !b, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { onClick: te, className: "flex-1 bg-orange-600 border-2 border-orange-400 hover:bg-orange-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "COPY SHAREABLE LINK" }), e.jsx("button", { onClick: se, className: "flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" })] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${b ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: b ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !b && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsxs("div", { className: "flex flex-col gap-4 flex-1", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (r == null ? void 0 : r.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [r == null ? void 0 : r.players.map((t) => {
    const a = t.id === y.id, o = r && t.color === r.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${a ? "border-blue-300 bg-blue-800" : "border-orange-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: t.username }), a && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: Y(t.color) }), o && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, t.id);
  }), (!(r == null ? void 0 : r.players) || r.players.length === 0) && e.jsx("div", { className: "text-orange-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["RED: ", (r == null ? void 0 : r.capturedPieces.red) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (r == null ? void 0 : r.capturedPieces.red) || 0 }, (t, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u2656" }, a)), (!(r == null ? void 0 : r.capturedPieces.red) || r.capturedPieces.red === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] }), e.jsxs("div", { children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["BLACK: ", (r == null ? void 0 : r.capturedPieces.black) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (r == null ? void 0 : r.capturedPieces.black) || 0 }, (t, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u265C" }, a)), (!(r == null ? void 0 : r.capturedPieces.black) || r.capturedPieces.black === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "overflow-y-auto max-h-64", children: [r == null ? void 0 : r.moveHistory.slice(-12).map((t, a) => e.jsxs("div", { className: "mb-2 text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [t.player.username, ":", " ", t.moves.map((o, n) => `${String.fromCharCode(97 + o.from.col)}${8 - o.from.row}\u2192${String.fromCharCode(97 + o.to.col)}${8 - o.to.row}${o.captures ? "x" : ""}`).join(", ")] }, a)), (!(r == null ? void 0 : r.moveHistory) || r.moveHistory.length === 0) && e.jsx("div", { className: "text-orange-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-orange-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => J(!A), className: `px-3 py-2 border-2 font-bold transition-colors ${A ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: A ? "ON" : "OFF" })] }) })] })] })] })] })] });
}
function me(C) {
  return C.map((z) => z.map((h) => h ? { type: U.Rook, color: h.color === u.Red ? k.White : k.Black, isKing: h.isKing } : { type: U.Empty, color: k.NoColor }));
}
export {
  Pe as default
};
