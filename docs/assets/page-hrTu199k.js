import { u as oe, e as ae, r as x, h as ne, k as le, j as e, t as O } from "./index-LFiDea6O.js";
import { C as ce, c as ie } from "./turn-notification-sound-WDEkNEpE.js";
import { b as R, C as Y } from "./chess-game-multiplayer-XMnaIFi4.js";
import { p as A, C as u, b as W, B as N, c as de, a as xe } from "./checkers-game-multiplayer-BKVBYG5z.js";
import { g as pe } from "./player-utils-sDKa8flh.js";
import { u as me, a as ue } from "./multiplayer-join-gate-b-TEMnXU.js";
import "./gin-DHzzR3IR.js";
function Ne() {
  var _a;
  const j = oe(), F = ae(), h = me("checkers"), L = (_a = F.state) == null ? void 0 : _a.roomPassword, [t, $] = x.useState(null), [f, _] = x.useState(false), [K, T] = x.useState(true), [S, V] = x.useState({ id: "", username: "" }), [C, J] = x.useState(null), [b, P] = x.useState(null), [E, w] = x.useState([]), [k, Z] = x.useState(false), [i, Q] = x.useState(null), [g, X] = x.useState(false), G = 360, ee = G * 2 + 24 * 2, p = x.useRef(null), z = (r, a, o) => {
    const n = [], m = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (const [s, l] of m) {
      const c = a.row + 2 * s, d = a.col + 2 * l, y = a.row + s, v = a.col + l;
      if (c >= 0 && c < N && d >= 0 && d < N && !o[c][d]) {
        const U = o[y][v];
        U && U.color !== r.color && n.push({ row: c, col: d });
      }
    }
    return n;
  }, q = (r, a) => {
    for (let o = 0; o < N; o++) for (let n = 0; n < N; n++) {
      const m = r[o][n];
      if (m && m.color === a && z(m, { row: o, col: n }, r).length > 0) return true;
    }
    return false;
  }, I = (r, a, o) => {
    if (!r || r.type !== "checker") return [];
    const n = z(r, a, o), m = n.map((c) => ({ ...c, isCapture: true }));
    if (q(o, r.color) || n.length > 0) return m;
    const s = [], l = r.isKing ? [[-1, -1], [-1, 1], [1, -1], [1, 1]] : r.color === u.Red ? [[1, -1], [1, 1]] : [[-1, -1], [-1, 1]];
    for (const [c, d] of l) {
      const y = a.row + c, v = a.col + d;
      y >= 0 && y < N && v >= 0 && v < N && !o[y][v] && s.push({ row: y, col: v });
    }
    return s;
  };
  x.useEffect(() => {
    const { playerId: r, username: a } = pe();
    V({ id: r, username: a });
  }, []), x.useEffect(() => {
    if (!h || !S.id) return;
    (async () => {
      try {
        T(true);
        const n = new de(h, S.id, S.username, L);
        J(n), p.current = n;
        const m = ie();
        n.onGameState((s) => {
          const l = JSON.parse(JSON.stringify(s));
          $(l);
          const c = l.players.find((y) => y.id === S.id);
          Q(c || null), m({ status: l.status, serverCurrentPlayer: l.currentPlayer, myColor: c == null ? void 0 : c.color });
          const d = l.status === "playing" && l.mustCapture && l.captureSequence.length > 0 && c && c.color === l.currentPlayer;
          c && (c.color !== l.currentPlayer || l.status !== "playing") && !d && (P(null), w([]));
        }), n.onConnection((s) => {
          _(s), s ? (ue(h, "checkers"), O.success("Connected to checkers game!")) : O.error("Disconnected from checkers game. You can try refreshing the page to reconnect.");
        }), n.onError((s) => {
          console.error("Game error:", s), O.error(`Game error: ${s.message}`);
        }), await n.connect(), T(false);
      } catch (n) {
        console.error("Failed to initialize game:", n), O.error("Failed to connect to game"), T(false);
      }
    })();
    const a = (n) => {
      p.current && p.current.isConnected() && (n.preventDefault(), n.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), p.current && p.current.disconnect();
    }, o = () => {
      p.current && p.current.disconnect();
    };
    return window.addEventListener("beforeunload", a), window.addEventListener("popstate", o), () => {
      window.removeEventListener("beforeunload", a), window.removeEventListener("popstate", o), p.current && (p.current.disconnect(), p.current = null);
    };
  }, [h, S, L]), x.useEffect(() => () => {
    p.current && (p.current.disconnect(), p.current = null);
  }, []);
  const te = x.useCallback((r, a) => {
    if (!t || !C || !f || t.status !== "playing") return;
    const o = { row: r, col: a }, n = t.board[r][a];
    if (!b) {
      if (t.mustCapture && t.captureSequence.length > 0) {
        const l = t.captureSequence[t.captureSequence.length - 1].to;
        if (!A(o, l)) return;
      }
      if (n && n.color === (i == null ? void 0 : i.color) && (i == null ? void 0 : i.color) === t.currentPlayer) {
        P(o);
        const s = I(n, o, t.board);
        w(s);
      }
      return;
    }
    if (A(b, o)) {
      P(null), w([]);
      return;
    }
    if (n && i && n.color === i.color) {
      if (t.mustCapture && t.captureSequence.length > 0) {
        const c = t.captureSequence[t.captureSequence.length - 1].to;
        if (!A(o, c)) return;
      }
      P(o);
      const s = I(n, o, t.board);
      w(s);
      return;
    }
    if (E.some((s) => A(s, o))) {
      const s = [];
      if (Math.abs(r - b.row) === 2) {
        const c = (b.row + r) / 2, d = (b.col + a) / 2;
        s.push({ row: c, col: d });
      }
      const l = { from: b, to: o, ...s.length > 0 && { captures: s } };
      C.sendMove(l), P(null), w([]);
    } else P(null), w([]);
  }, [t, C, f, b, E, i]), M = x.useMemo(() => {
    var _a2;
    if (!t || t.status !== "playing") return { forcedCapture: false, mandatoryPieceSquares: [], singleLegalMoveHighlight: false, comboContinuePiece: null };
    if ((_a2 = t.captureSequence) == null ? void 0 : _a2.length) {
      const s = t.captureSequence[t.captureSequence.length - 1], l = { row: s.to.row, col: s.to.col };
      return { forcedCapture: true, mandatoryPieceSquares: [l], singleLegalMoveHighlight: E.length === 1, comboContinuePiece: l };
    }
    const r = t.board, a = t.currentPlayer, o = q(r, a), n = ne(r, o, (s, l, c) => !!(s && s.color === a), (s, l, c) => {
      const d = c[s][l];
      return d ? z(d, { row: s, col: l }, c) : [];
    }), m = le(r, (s, l, c) => !!(s && s.color === a), (s, l, c) => {
      const d = c[s][l];
      return d ? I(d, { row: s, col: l }, c) : [];
    });
    return { forcedCapture: o, mandatoryPieceSquares: n, singleLegalMoveHighlight: m === 1, comboContinuePiece: null };
  }, [t, E]), re = (i == null ? void 0 : i.color) === u.Red ? u.Black : u.Red, H = t != null && i != null && t.currentPlayer === re, B = t != null && i != null && t.currentPlayer === i.color, D = (r) => ({ height: `calc(100vh${g ? "" : " - 10px"})`, width: G, filter: r ? "brightness(1.2)" : "brightness(0.5)", boxShadow: r ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000", WebkitUserDrag: "none" }), se = () => {
    const r = xe();
    j(`/multiplayer/${r}/checkers`);
  };
  return K ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-orange-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHECKERS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => X((r) => !r), className: "bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": g, "aria-label": g ? "Hide sidebar" : "Show sidebar", children: g ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => j("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none", style: { height: "100vh", paddingTop: g ? 0 : 5, paddingBottom: g ? 0 : 5 }, children: [e.jsx("img", { src: (i == null ? void 0 : i.color) === u.Red ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (i == null ? void 0 : i.color) === u.Red ? "Black player" : "Red player", draggable: false, className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${H ? "border-yellow-300" : "border-gray-700"}`, style: D(H) }), e.jsx("div", { children: e.jsx(ce, { board: he((t == null ? void 0 : t.board) || []), selectedSquare: b, possibleMoves: E, onSquareClick: te, sideImagesWidth: ee, isSidebarOpen: g, showGrid: k, currentPlayerColor: (i == null ? void 0 : i.color) === u.Red ? R.Black : R.White, forcedCapture: M.forcedCapture, mandatoryPieceSquares: M.mandatoryPieceSquares, singleLegalMoveHighlight: M.singleLegalMoveHighlight, comboContinuePiece: M.comboContinuePiece }) }), e.jsx("img", { src: (i == null ? void 0 : i.color) === u.Red ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (i == null ? void 0 : i.color) === u.Red ? "Red player" : "Black player", draggable: false, className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${B ? "border-yellow-300" : "border-gray-700"}`, style: D(B) })] }), g && e.jsxs("div", { className: "w-96 flex flex-col p-6 bg-black border-l-4 border-orange-600 overflow-y-auto", style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-orange-400", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHECKERS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", h, " | PLAYER: ", S.username, i && ` (${W(i.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(t == null ? void 0 : t.currentPlayer) === (i == null ? void 0 : i.color) ? "bg-blue-400 border-blue-300" : "bg-orange-400 border-orange-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(t == null ? void 0 : t.currentPlayer) === u.Red ? "RED" : "BLACK", " ", "TO MOVE"] }), (t == null ? void 0 : t.status) === "finished" && e.jsxs("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: ["GAME OVER!", t.winner ? e.jsxs("span", { className: "block mt-1", children: [t.winner === "red" ? "RED" : t.winner === "black" ? "BLACK" : t.winner, " ", "WINS"] }) : null] }), (t == null ? void 0 : t.mustCapture) && e.jsx("div", { className: "px-4 py-2 bg-orange-600 border-2 border-orange-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "MUST CAPTURE!" }), (t == null ? void 0 : t.captureSequence) && t.captureSequence.length > 0 && e.jsx("div", { className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CONTINUE JUMPING!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    C && f && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || j("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!f) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (C == null ? void 0 : C.restartGame());
  }, disabled: !f, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsx("div", { className: "flex gap-2", children: e.jsx("button", { onClick: se, className: "w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" }) })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${f ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: f ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !f && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsxs("div", { className: "flex flex-col gap-4 flex-1", children: [e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (t == null ? void 0 : t.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [t == null ? void 0 : t.players.map((r) => {
    const a = r.id === S.id, o = t && r.color === t.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${a ? "border-blue-300 bg-blue-800" : "border-orange-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: r.username }), a && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-orange-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: W(r.color) }), o && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, r.id);
  }), (!(t == null ? void 0 : t.players) || t.players.length === 0) && e.jsx("div", { className: "text-orange-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["RED: ", (t == null ? void 0 : t.capturedPieces.red) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (t == null ? void 0 : t.capturedPieces.red) || 0 }, (r, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u2656" }, a)), (!(t == null ? void 0 : t.capturedPieces.red) || t.capturedPieces.red === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] }), e.jsxs("div", { children: [e.jsxs("h4", { className: "text-orange-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["BLACK: ", (t == null ? void 0 : t.capturedPieces.black) || 0] }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [Array.from({ length: (t == null ? void 0 : t.capturedPieces.black) || 0 }, (r, a) => e.jsx("div", { className: "text-lg", style: { fontSize: "14px", filter: "drop-shadow(1px 1px 0px #000)" }, children: "\u265C" }, a)), (!(t == null ? void 0 : t.capturedPieces.black) || t.capturedPieces.black === 0) && e.jsx("span", { className: "text-orange-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" })] })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "overflow-y-auto max-h-64", children: [t == null ? void 0 : t.moveHistory.slice(-12).map((r, a) => e.jsxs("div", { className: "mb-2 text-sm text-orange-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [r.player.username, ":", " ", r.moves.map((o, n) => `${String.fromCharCode(97 + o.from.col)}${8 - o.from.row}\u2192${String.fromCharCode(97 + o.to.col)}${8 - o.to.row}${o.captures ? "x" : ""}`).join(", ")] }, a)), (!(t == null ? void 0 : t.moveHistory) || t.moveHistory.length === 0) && e.jsx("div", { className: "text-orange-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" })] }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-orange-600 px-4 py-3 border-b-4 border-orange-600", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-orange-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => Z(!k), className: `px-3 py-2 border-2 font-bold transition-colors ${k ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-black"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: k ? "ON" : "OFF" })] }) })] })] })] })] })] });
}
function he(j) {
  return j.map((F) => F.map((h) => h ? { type: Y.Rook, color: h.color === u.Red ? R.White : R.Black, isKing: h.isKing } : { type: Y.Empty, color: R.NoColor }));
}
export {
  Ne as default
};
