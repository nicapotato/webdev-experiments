import { u as se, d as ae, r as x, g as ne, e as le, j as e, t as N } from "./index-CW6bEkcZ.js";
import { C as ce } from "./ChessBoardMultiplayer-Nyx8I4V0.js";
import { b as k, C as U } from "./chess-game-multiplayer-DB5exR2Z.js";
import { p as F, C as u, b as Y, B as j, c as ie, a as de } from "./checkers-game-multiplayer-CFO-YGq1.js";
import { g as xe } from "./player-utils-sDKa8flh.js";
import "./gin-DHzzR3IR.js";
function Se() {
  const C = se(), h = ae().roomId, [t, $] = x.useState(null), [b, W] = x.useState(false), [_, M] = x.useState(true), [y, K] = x.useState({ id: "", username: "" }), [E, V] = x.useState(null), [g, S] = x.useState(null), [R, P] = x.useState([]), [O, J] = x.useState(false), [d, Z] = x.useState(null), [f, Q] = x.useState(false), L = 360, X = L * 2 + 24 * 2, m = x.useRef(null), T = (r, a, s) => {
    const n = [], i = r.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : r.color === u.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [o, l] of i) {
      const c = a.row + 2 * o, p = a.col + 2 * l, w = a.row + o, v = a.col + l;
      if (c >= 0 && c < j && p >= 0 && p < j && !s[c][p]) {
        const D = s[w][v];
        D && D.color !== r.color && n.push({ row: c, col: p });
      }
    }
    return n;
  }, G = (r, a) => {
    for (let s = 0; s < j; s++) for (let n = 0; n < j; n++) {
      const i = r[s][n];
      if (i && i.color === a && T(i, { row: s, col: n }, r).length > 0) return true;
    }
    return false;
  }, I = (r, a, s) => {
    if (!r || r.type !== "checker") return [];
    const n = T(r, a, s), i = n.map((c) => ({ ...c, isCapture: true }));
    if (G(s, r.color) || n.length > 0) return i;
    const o = [], l = r.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : r.color === u.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [c, p] of l) {
      const w = a.row + c, v = a.col + p;
      w >= 0 && w < j && v >= 0 && v < j && !s[w][v] && o.push({ row: w, col: v });
    }
    return o;
  };
  x.useEffect(() => {
    const { playerId: r, username: a } = xe();
    K({ id: r, username: a });
  }, []), x.useEffect(() => {
    if (!h || !y.id) return;
    (async () => {
      try {
        M(true);
        const n = new ie(h, y.id, y.username);
        V(n), m.current = n, n.onGameState((i) => {
          const o = JSON.parse(JSON.stringify(i));
          $(o);
          const l = o.players.find((c) => c.id === y.id);
          Z(l || null), l && (l.color !== o.currentPlayer || o.status !== "playing") && (S(null), P([]));
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
    }, s = () => {
      m.current && m.current.disconnect();
    };
    return window.addEventListener("beforeunload", a), window.addEventListener("popstate", s), () => {
      window.removeEventListener("beforeunload", a), window.removeEventListener("popstate", s), m.current && (m.current.disconnect(), m.current = null);
    };
  }, [h, y]), x.useEffect(() => () => {
    m.current && (m.current.disconnect(), m.current = null);
  }, []);
  const ee = x.useCallback((r, a) => {
    if (!t || !E || !b || t.status !== "playing") return;
    const s = { row: r, col: a }, n = t.board[r][a];
    if (!g) {
      if (t.mustCapture && t.captureSequence.length > 0) {
        const l = t.captureSequence[t.captureSequence.length - 1].to;
        if (!F(s, l)) return;
      }
      if (n && n.color === (d == null ? void 0 : d.color) && (d == null ? void 0 : d.color) === t.currentPlayer) {
        S(s);
        const o = I(n, s, t.board);
        P(o);
      }
      return;
    }
    if (F(g, s)) {
      S(null), P([]);
      return;
    }
    if (n && d && n.color === d.color) {
      if (t.mustCapture && t.captureSequence.length > 0) {
        const c = t.captureSequence[t.captureSequence.length - 1].to;
        if (!F(s, c)) return;
      }
      S(s);
      const o = I(n, s, t.board);
      P(o);
      return;
    }
    if (R.some((o) => F(o, s))) {
      const o = [];
      if (Math.abs(r - g.row) === 2) {
        const c = (g.row + r) / 2, p = (g.col + a) / 2;
        o.push({ row: c, col: p });
      }
      const l = { from: g, to: s, ...o.length > 0 && { captures: o } };
      E.sendMove(l), S(null), P([]);
    } else S(null), P([]);
  }, [t, E, b, g, R, d]), A = x.useMemo(() => {
    var _a;
    if (!t || t.status !== "playing") return { forcedCapture: false, mandatoryPieceSquares: [], singleLegalMoveHighlight: false, comboContinuePiece: null };
    if ((_a = t.captureSequence) == null ? void 0 : _a.length) {
      const o = t.captureSequence[t.captureSequence.length - 1], l = { row: o.to.row, col: o.to.col };
      return { forcedCapture: true, mandatoryPieceSquares: [l], singleLegalMoveHighlight: R.length === 1, comboContinuePiece: l };
    }
    const r = t.board, a = t.currentPlayer, s = G(r, a), n = ne(r, s, (o, l, c) => !!(o && o.color === a), (o, l, c) => {
      const p = c[o][l];
      return p ? T(p, { row: o, col: l }, c) : [];
    }), i = le(r, (o, l, c) => !!(o && o.color === a), (o, l, c) => {
      const p = c[o][l];
      return p ? I(p, { row: o, col: l }, c) : [];
    });
    return { forcedCapture: s, mandatoryPieceSquares: n, singleLegalMoveHighlight: i === 1, comboContinuePiece: null };
  }, [t, R]), te = (d == null ? void 0 : d.color) === u.Red ? u.Black : u.Red, H = t != null && d != null && t.currentPlayer === te, q = t != null && d != null && t.currentPlayer === d.color, B = (r) => ({ height: `calc(100vh${f ? "" : " - 10px"})`, width: L, filter: r ? "brightness(1.2)" : "brightness(0.5)", boxShadow: r ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000" }), re = async () => {
    try {
      const r = `${window.location.origin}/console/games/multiplayer-games/${h}/checkers`;
      await navigator.clipboard.writeText(r), N.success("Shareable link copied to clipboard");
    } catch {
      N.error("Failed to copy shareable link");
    }
  }, oe = () => {
    const r = de();
    C(`/multiplayer/${r}/checkers`);
  };
  return _ ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-orange-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHECKERS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => Q((r) => !r), className: "bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": f, "aria-label": f ? "Hide sidebar" : "Show sidebar", children: f ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => C("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6", style: { height: "100vh", paddingTop: f ? 0 : 5, paddingBottom: f ? 0 : 5 }, children: [e.jsx("img", { src: (d == null ? void 0 : d.color) === u.Red ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (d == null ? void 0 : d.color) === u.Red ? "Black player" : "Red player", className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${H ? "border-yellow-300" : "border-gray-700"}`, style: B(H) }), e.jsx("div", { children: e.jsx(ce, { board: pe((t == null ? void 0 : t.board) || []), selectedSquare: g, possibleMoves: R, onSquareClick: ee, sideImagesWidth: X, isSidebarOpen: f, showGrid: O, currentPlayerColor: (d == null ? void 0 : d.color) === u.Red ? k.Black : k.White, forcedCapture: A.forcedCapture, mandatoryPieceSquares: A.mandatoryPieceSquares, singleLegalMoveHighlight: A.singleLegalMoveHighlight, comboContinuePiece: A.comboContinuePiece }) }), e.jsx("img", { src: (d == null ? void 0 : d.color) === u.Red ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (d == null ? void 0 : d.color) === u.Red ? "Red player" : "Black player", className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${q ? "border-yellow-300" : "border-gray-700"}`, style: B(q) })] }), f && e.jsxs("div", { className: "w-96 flex flex-col p-6 bg-black border-l-4 border-orange-600 overflow-y-auto", style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-orange-400", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHECKERS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", h, " | PLAYER: ", y.username, d && ` (${Y(d.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(t == null ? void 0 : t.currentPlayer) === (d == null ? void 0 : d.color) ? "bg-blue-400 border-blue-300" : "bg-orange-400 border-orange-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(t == null ? void 0 : t.currentPlayer) === u.Red ? "RED" : "BLACK", " ", "TO MOVE"] }), (t == null ? void 0 : t.status) === "finished" && e.jsx("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "GAME OVER!" }), (t == null ? void 0 : t.mustCapture) && e.jsx("div", { className: "px-4 py-2 bg-orange-600 border-2 border-orange-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "MUST CAPTURE!" }), (t == null ? void 0 : t.captureSequence) && t.captureSequence.length > 0 && e.jsx("div", { className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CONTINUE JUMPING!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    E && b && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || C("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!b) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (E == null ? void 0 : E.restartGame());
  }, disabled: !b, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx("button", { onClick: re, className: "flex-1 bg-orange-600 border-2 border-orange-400 hover:bg-orange-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "COPY SHAREABLE LINK" }), e.jsx("button", { onClick: oe, className: "flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" })] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${b ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: b ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !b && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsxs("div", { className: "flex flex-col gap-4 flex-1", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (t == null ? void 0 : t.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [t == null ? void 0 : t.players.map((r) => {
    const a = r.id === y.id, s = t && r.color === t.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${a ? "border-blue-300 bg-blue-800" : "border-orange-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: r.username }), a && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: Y(r.color) }), s && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, r.id);
  }), (!(t == null ? void 0 : t.players) || t.players.length === 0) && e.jsx("div", { className: "text-orange-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["RED: ", (t == null ? void 0 : t.capturedPieces.red) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (t == null ? void 0 : t.capturedPieces.red) || 0 }, (r, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u2656" }, a)), (!(t == null ? void 0 : t.capturedPieces.red) || t.capturedPieces.red === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] }), e.jsxs("div", { children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["BLACK: ", (t == null ? void 0 : t.capturedPieces.black) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (t == null ? void 0 : t.capturedPieces.black) || 0 }, (r, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u265C" }, a)), (!(t == null ? void 0 : t.capturedPieces.black) || t.capturedPieces.black === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "overflow-y-auto max-h-64", children: [t == null ? void 0 : t.moveHistory.slice(-12).map((r, a) => e.jsxs("div", { className: "mb-2 text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [r.player.username, ":", " ", r.moves.map((s, n) => `${String.fromCharCode(97 + s.from.col)}${8 - s.from.row}\u2192${String.fromCharCode(97 + s.to.col)}${8 - s.to.row}${s.captures ? "x" : ""}`).join(", ")] }, a)), (!(t == null ? void 0 : t.moveHistory) || t.moveHistory.length === 0) && e.jsx("div", { className: "text-orange-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-orange-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => J(!O), className: `px-3 py-2 border-2 font-bold transition-colors ${O ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: O ? "ON" : "OFF" })] }) })] })] })] })] })] });
}
function pe(C) {
  return C.map((z) => z.map((h) => h ? { type: U.Rook, color: h.color === u.Red ? k.White : k.Black, isKing: h.isKing } : { type: U.Empty, color: k.NoColor }));
}
export {
  Se as default
};
