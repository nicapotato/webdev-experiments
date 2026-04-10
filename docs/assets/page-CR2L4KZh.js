import { e as W, i as R, f as E, u as Z, d as ee, r as m, j as t, t as A } from "./index-BBLpVi8g.js";
import { C as te } from "./ChessBoardMultiplayer-DYmXEw6f.js";
import { C as b, b as w, p as G, c as H, d as se, e as re, a as oe } from "./chess-game-multiplayer-Dq-vq7HR.js";
import { g as ne, m as ae } from "./multiplayer-share-url-BDInfhC3.js";
import "./gin-DHzzR3IR.js";
const le = { [b.Empty]: null, [b.Pawn]: "pawn", [b.Rook]: "rook", [b.Knight]: "knight", [b.Bishop]: "bishop", [b.Queen]: "queen", [b.King]: "king" };
function ie(o) {
  return o.map((n) => n.map((r) => {
    const e = le[r.type];
    return e ? { type: e, color: r.color === w.White ? "white" : "black" } : null;
  }));
}
function ce(o) {
  return { white: { kingSide: o.whiteKingSide, queenSide: o.whiteQueenSide }, black: { kingSide: o.blackKingSide, queenSide: o.blackQueenSide } };
}
function de(o, n, r, e, c) {
  const s = [], a = r === "white" ? -1 : 1, p = r === "white" ? 6 : 1;
  o + a >= 0 && o + a < 8 && !e[o + a][n] && (s.push({ row: o + a, col: n, isCapture: false }), o === p && !e[o + 2 * a][n] && s.push({ row: o + 2 * a, col: n, isCapture: false }));
  for (const l of [-1, 1]) {
    const i = n + l;
    if (i < 0 || i >= 8 || o + a < 0 || o + a >= 8) continue;
    const d = e[o + a][i];
    d && d.color !== r && s.push({ row: o + a, col: i, isCapture: true });
  }
  if (c) {
    const l = c.row, i = c.col;
    if (o + a === l && (n + 1 === i || n - 1 === i) && !e[l][i]) {
      const d = e[o][i];
      d && d.type === "pawn" && d.color !== r && s.push({ row: l, col: i, isCapture: true });
    }
  }
  return s;
}
function B(o, n, r, e, c) {
  const s = [];
  for (const [a, p] of c) for (let l = 1; l < 8; l++) {
    const i = o + a * l, d = n + p * l;
    if (i < 0 || i >= 8 || d < 0 || d >= 8) break;
    const h = e[i][d];
    if (!h) s.push({ row: i, col: d, isCapture: false });
    else {
      h.color !== r && s.push({ row: i, col: d, isCapture: true });
      break;
    }
  }
  return s;
}
function xe(o, n, r, e) {
  const c = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]], s = [];
  for (const [a, p] of c) {
    const l = o + a, i = n + p;
    if (l < 0 || l >= 8 || i < 0 || i >= 8) continue;
    const d = e[l][i];
    d ? d.color !== r && s.push({ row: l, col: i, isCapture: true }) : s.push({ row: l, col: i, isCapture: false });
  }
  return s;
}
function pe(o, n, r, e, c) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const s = [], a = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (const [l, i] of a) {
    const d = o + l, h = n + i;
    if (d < 0 || d >= 8 || h < 0 || h >= 8) continue;
    const T = e[d][h];
    T ? T.color !== r && s.push({ row: d, col: h, isCapture: true }) : s.push({ row: d, col: h, isCapture: false });
  }
  const p = r === "white" ? "black" : "white";
  return r === "white" && o === 7 && n === 4 && (c.white.kingSide && ((_a = e[7][7]) == null ? void 0 : _a.type) === "rook" && ((_b = e[7][7]) == null ? void 0 : _b.color) === "white" && !e[7][5] && !e[7][6] && !R("white", e) && !E(e, 7, 5, p) && !E(e, 7, 6, p) && s.push({ row: 7, col: 6, isCapture: false }), c.white.queenSide && ((_c = e[7][0]) == null ? void 0 : _c.type) === "rook" && ((_d = e[7][0]) == null ? void 0 : _d.color) === "white" && !e[7][1] && !e[7][2] && !e[7][3] && !R("white", e) && !E(e, 7, 3, p) && !E(e, 7, 2, p) && s.push({ row: 7, col: 2, isCapture: false })), r === "black" && o === 0 && n === 4 && (c.black.kingSide && ((_e = e[0][7]) == null ? void 0 : _e.type) === "rook" && ((_f = e[0][7]) == null ? void 0 : _f.color) === "black" && !e[0][5] && !e[0][6] && !R("black", e) && !E(e, 0, 5, p) && !E(e, 0, 6, p) && s.push({ row: 0, col: 6, isCapture: false }), c.black.queenSide && ((_g = e[0][0]) == null ? void 0 : _g.type) === "rook" && ((_h = e[0][0]) == null ? void 0 : _h.color) === "black" && !e[0][1] && !e[0][2] && !e[0][3] && !R("black", e) && !E(e, 0, 3, p) && !E(e, 0, 2, p) && s.push({ row: 0, col: 2, isCapture: false })), s;
}
function ue(o, n, r, e, c) {
  const s = r[o][n];
  if (!s) return [];
  const a = s.color;
  switch (s.type) {
    case "pawn":
      return de(o, n, a, r, c);
    case "rook":
      return B(o, n, a, r, [[0, 1], [0, -1], [1, 0], [-1, 0]]);
    case "knight":
      return xe(o, n, a, r);
    case "bishop":
      return B(o, n, a, r, [[1, 1], [1, -1], [-1, 1], [-1, -1]]);
    case "queen":
      return B(o, n, a, r, [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]);
    case "king":
      return pe(o, n, a, r, e);
    default:
      return [];
  }
}
function me(o, n, r, e, c) {
  const s = W(o), a = s[n.row][n.col];
  if (!a) return { newBoard: s };
  let p = s[r.row][r.col];
  if (a.type === "pawn" && c && r.row === c.row && r.col === c.col && !p && (p = s[n.row][r.col], s[n.row][r.col] = null), a.type === "king" && Math.abs(r.col - n.col) === 2) {
    const l = n.row;
    r.col > n.col ? (s[l][5] = s[l][7], s[l][7] = null) : (s[l][3] = s[l][0], s[l][0] = null);
  }
  return s[r.row][r.col] = a, s[n.row][n.col] = null, a.type === "pawn" && (r.row === 0 || r.row === 7) && (s[r.row][r.col] = { type: "queen", color: a.color }), { newBoard: s };
}
function q(o, n, r) {
  const e = ie(o.board), c = ce(o.castlingRights), s = e[n][r];
  if (!s) return [];
  const a = ue(n, r, e, c, o.enPassantTarget), p = s.color;
  return a.filter((l) => {
    const { newBoard: i } = me(e, { row: n, col: r }, l, c, o.enPassantTarget);
    let d = i;
    return s.type === "pawn" && (l.row === 0 || l.row === 7) && (d = W(i), d[l.row][l.col] = { type: "queen", color: s.color }), !R(p, d);
  });
}
function he(o, n) {
  const r = o.board, e = n;
  for (let c = 0; c < 8; c++) for (let s = 0; s < 8; s++) {
    const a = r[c][s];
    if (a.type === b.King && a.color === e) return { row: c, col: s };
  }
  return null;
}
function Pe() {
  const o = Z(), r = ee().roomId, [e, c] = m.useState(null), [s, a] = m.useState(false), [p, l] = m.useState(true), [i, d] = m.useState({ id: "", username: "" }), [h, T] = m.useState(null), [P, C] = m.useState(null), [z, k] = m.useState([]), [O, M] = m.useState(null), [I, D] = m.useState(false), [f, Y] = m.useState(null), [N, K] = m.useState(false), L = 360, U = L * 2 + 24 * 2, g = m.useRef(null), $ = m.useMemo(() => !(e == null ? void 0 : e.check) || e.status !== "playing" ? null : he(e, e.currentPlayer), [e]);
  m.useEffect(() => {
    const { playerId: x, username: S } = ne();
    d({ id: x, username: S });
  }, []), m.useEffect(() => {
    if (!r || !i.id) return;
    (async () => {
      try {
        l(true);
        const y = new re(r, i.id, i.username);
        T(y), g.current = y, y.onGameState((v) => {
          const j = JSON.parse(JSON.stringify(v));
          c(j);
          const F = j.players.find((X) => X.id === i.id);
          Y(F || null), F && (F.color !== j.currentPlayer || j.status !== "playing") && (C(null), k([]));
        }), y.onConnection((v) => {
          a(v), v ? A.success("Connected to chess game!") : A.error("Disconnected from chess game. You can try refreshing the page to reconnect.");
        }), y.onError((v) => {
          console.error("Game error:", v), A.error(`Game error: ${v.message}`);
        }), await y.connect(), l(false);
      } catch (y) {
        console.error("Failed to initialize game:", y), A.error("Failed to connect to game"), l(false);
      }
    })();
    const S = (y) => {
      g.current && g.current.isConnected() && (y.preventDefault(), y.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), g.current && g.current.disconnect();
    }, u = () => {
      g.current && g.current.disconnect();
    };
    return window.addEventListener("beforeunload", S), window.addEventListener("popstate", u), () => {
      window.removeEventListener("beforeunload", S), window.removeEventListener("popstate", u), g.current && (g.current.disconnect(), g.current = null);
    };
  }, [r, i]), m.useEffect(() => () => {
    g.current && (g.current.disconnect(), g.current = null);
  }, []);
  const _ = m.useCallback((x, S) => {
    if (!e || !h || !s || e.status !== "playing") return;
    const u = { row: x, col: S }, y = e.board[x][S];
    if (O) {
      G(u, O) && M(null);
      return;
    }
    if (!P) {
      y.type !== b.Empty && f && y.color === f.color && f.color === e.currentPlayer && (C(u), k(q(e, u.row, u.col)));
      return;
    }
    if (G(P, u)) {
      C(null), k([]);
      return;
    }
    if (y.type !== b.Empty && f && y.color === f.color) {
      C(u), k(q(e, u.row, u.col));
      return;
    }
    if (z.some((j) => G(j, u))) {
      const j = { from: P, to: u }, F = e.board[P.row][P.col];
      if (F.type === b.Pawn && (F.color === w.White && u.row === 0 || F.color === w.Black && u.row === 7)) {
        M(u);
        return;
      }
      h.sendMove(j), C(null), k([]);
    } else C(null), k([]);
  }, [e, h, s, P, z, f, O]), V = m.useCallback((x) => {
    if (!P || !O || !h) return;
    const S = { from: P, to: O, promotion: x };
    h.sendMove(S), C(null), k([]), M(null);
  }, [P, O, h]), Q = async () => {
    try {
      await navigator.clipboard.writeText(ae(r, "chess")), A.success("Shareable link copied to clipboard");
    } catch {
      A.error("Failed to copy shareable link");
    }
  }, J = () => {
    const x = oe();
    o(`/multiplayer/${x}/chess`);
  };
  return p ? t.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: t.jsx("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: t.jsxs("div", { className: "text-center", children: [t.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent mx-auto mb-4" }), t.jsx("p", { className: "text-gray-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHESS GAME..." })] }) }) }) : t.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [t.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), t.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [t.jsx("button", { onClick: () => K((x) => !x), className: "bg-gray-700 border-2 border-gray-400 hover:bg-gray-600 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": N, "aria-label": N ? "Hide sidebar" : "Show sidebar", children: N ? "HIDE PANEL" : "SHOW PANEL" }), t.jsx("button", { onClick: () => o("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), t.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [t.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6", style: { height: "100vh", paddingTop: N ? 0 : 5, paddingBottom: N ? 0 : 5 }, children: [t.jsx("img", { src: (f == null ? void 0 : f.color) === w.Black ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (f == null ? void 0 : f.color) === w.Black ? "White player" : "Black player", className: `object-cover object-center border-4 ${(e == null ? void 0 : e.currentPlayer) === ((f == null ? void 0 : f.color) === w.Black ? w.White : w.Black) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${N ? "" : " - 10px"})`, width: L, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } }), t.jsx("div", { children: t.jsx(te, { board: (e == null ? void 0 : e.board) || [], selectedSquare: P, possibleMoves: z, onSquareClick: _, sideImagesWidth: U, isSidebarOpen: N, showGrid: I, currentPlayerColor: f == null ? void 0 : f.color, checkSquare: $ }) }), t.jsx("img", { src: (f == null ? void 0 : f.color) === w.Black ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (f == null ? void 0 : f.color) === w.Black ? "Black player" : "White player", className: `object-cover object-center border-4 ${(e == null ? void 0 : e.currentPlayer) === (f == null ? void 0 : f.color) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${N ? "" : " - 10px"})`, width: L, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" } })] }), t.jsxs("div", { className: `w-96 flex flex-col p-6 bg-black border-l-4 border-gray-400 overflow-y-auto ${N ? "" : "hidden"}`, style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [t.jsxs("div", { className: "mb-6", children: [t.jsx("h1", { className: "text-lg mb-2 text-white", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHESS MULTIPLAYER" }), t.jsxs("p", { className: "text-xs text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", r, " | PLAYER: ", i.username, f && ` (${H(f.color)})`] })] }), t.jsxs("div", { className: "mb-6", children: [t.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [t.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(e == null ? void 0 : e.currentPlayer) === (f == null ? void 0 : f.color) ? "bg-blue-400 border-blue-300" : "bg-gray-400 border-gray-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(e == null ? void 0 : e.currentPlayer) === w.White ? "WHITE" : "BLACK", " ", "TO MOVE"] }), (e == null ? void 0 : e.check) && t.jsx("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECK!" }), (e == null ? void 0 : e.checkmate) && t.jsx("div", { className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECKMATE!" }), (e == null ? void 0 : e.stalemate) && t.jsx("div", { className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "STALEMATE!" })] }), t.jsxs("div", { className: "flex gap-2 mb-4", children: [t.jsx("button", { onClick: () => {
    h && s && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || o("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), t.jsx("button", { onClick: () => {
    if (!s) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (h == null ? void 0 : h.restartGame());
  }, disabled: !s, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), t.jsxs("div", { className: "flex gap-2", children: [t.jsx("button", { onClick: Q, className: "flex-1 bg-gray-600 border-2 border-gray-400 hover:bg-gray-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "COPY SHAREABLE LINK" }), t.jsx("button", { onClick: J, className: "flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" })] })] }), t.jsxs("div", { className: "mb-6", children: [t.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${s ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: s ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !s && t.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), t.jsx("div", { className: "flex flex-col gap-4 flex-1", children: t.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [t.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: t.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (e == null ? void 0 : e.players.length) || 0, "/2)"] }) }), t.jsx("div", { className: "p-4", children: t.jsxs("div", { className: "space-y-2", children: [e == null ? void 0 : e.players.map((x) => {
    const S = x.id === i.id, u = e && x.color === e.currentPlayer;
    return t.jsxs("div", { className: `p-3 border-2 ${S ? "border-blue-300 bg-blue-800" : "border-gray-400 bg-gray-700"} rounded`, children: [t.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [t.jsx("span", { className: "text-sm text-gray-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: x.username }), S && t.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsx("span", { className: "text-sm text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: H(x.color) }), u && t.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, x.id);
  }), (!(e == null ? void 0 : e.players) || e.players.length === 0) && t.jsx("div", { className: "text-gray-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) }), t.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [t.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: t.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), t.jsxs("div", { className: "p-4", children: [t.jsxs("div", { className: "mb-4", children: [t.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WHITE:" }), t.jsx("div", { className: "flex flex-wrap gap-1", children: t.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] }), t.jsxs("div", { children: [t.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "BLACK:" }), t.jsx("div", { className: "flex flex-wrap gap-1", children: t.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] })] })] }), t.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [t.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: t.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), t.jsx("div", { className: "p-4", children: t.jsx("div", { className: "overflow-y-auto max-h-64", children: t.jsx("div", { className: "text-gray-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" }) }) })] }), t.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [t.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: t.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), t.jsx("div", { className: "p-4", children: t.jsxs("div", { className: "flex items-center justify-between", children: [t.jsx("span", { className: "text-gray-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), t.jsx("button", { onClick: () => D(!I), className: `px-3 py-2 border-2 font-bold transition-colors ${I ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-gray-400 text-gray-300 hover:bg-gray-500"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: I ? "ON" : "OFF" })] }) })] })] }) }), O && t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50", children: t.jsxs("div", { className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)" }, children: [t.jsx("h3", { className: "text-sm font-bold mb-6 text-center text-green-400", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "2px 2px 0px #000" }, children: "CHOOSE PROMOTION PIECE" }), t.jsx("div", { className: "flex gap-4 justify-center", children: [b.Queen, b.Rook, b.Bishop, b.Knight].map((x) => t.jsx("button", { onClick: () => V(x), className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors", style: { fontSize: "20px", filter: "drop-shadow(1px 1px 0px #000)", boxShadow: "inset 0 0 0 1px #000" }, children: se({ type: x, color: (f == null ? void 0 : f.color) || w.White }) }, x)) })] }) })] })] })] });
}
export {
  Pe as default
};
