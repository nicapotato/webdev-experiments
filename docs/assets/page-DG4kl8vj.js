import { i as D, k as T, l as C, a as ee, h as te, r as m, j as e, t as I } from "./index-N1w0gYNI.js";
import { C as se, c as re } from "./turn-notification-sound-zpkmzO5j.js";
import { C as y, b as S, p as G, c as q, d as oe, e as ne, a as ae } from "./chess-game-multiplayer-XMnaIFi4.js";
import { g as le } from "./player-utils-sDKa8flh.js";
import { u as ie, a as ce } from "./multiplayer-join-gate-dkRAmC4x.js";
import "./gin-DHzzR3IR.js";
const de = { [y.Empty]: null, [y.Pawn]: "pawn", [y.Rook]: "rook", [y.Knight]: "knight", [y.Bishop]: "bishop", [y.Queen]: "queen", [y.King]: "king" };
function xe(n) {
  return n.map((l) => l.map((o) => {
    const t = de[o.type];
    return t ? { type: t, color: o.color === S.White ? "white" : "black" } : null;
  }));
}
function pe(n) {
  return { white: { kingSide: n.whiteKingSide, queenSide: n.whiteQueenSide }, black: { kingSide: n.blackKingSide, queenSide: n.blackQueenSide } };
}
function ue(n, l, o, t, s) {
  const r = [], a = o === "white" ? -1 : 1, p = o === "white" ? 6 : 1;
  n + a >= 0 && n + a < 8 && !t[n + a][l] && (r.push({ row: n + a, col: l, isCapture: false }), n === p && !t[n + 2 * a][l] && r.push({ row: n + 2 * a, col: l, isCapture: false }));
  for (const i of [-1, 1]) {
    const d = l + i;
    if (d < 0 || d >= 8 || n + a < 0 || n + a >= 8) continue;
    const c = t[n + a][d];
    c && c.color !== o && r.push({ row: n + a, col: d, isCapture: true });
  }
  if (s) {
    const i = s.row, d = s.col;
    if (n + a === i && (l + 1 === d || l - 1 === d) && !t[i][d]) {
      const c = t[n][d];
      c && c.type === "pawn" && c.color !== o && r.push({ row: i, col: d, isCapture: true });
    }
  }
  return r;
}
function B(n, l, o, t, s) {
  const r = [];
  for (const [a, p] of s) for (let i = 1; i < 8; i++) {
    const d = n + a * i, c = l + p * i;
    if (d < 0 || d >= 8 || c < 0 || c >= 8) break;
    const N = t[d][c];
    if (!N) r.push({ row: d, col: c, isCapture: false });
    else {
      N.color !== o && r.push({ row: d, col: c, isCapture: true });
      break;
    }
  }
  return r;
}
function me(n, l, o, t) {
  const s = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]], r = [];
  for (const [a, p] of s) {
    const i = n + a, d = l + p;
    if (i < 0 || i >= 8 || d < 0 || d >= 8) continue;
    const c = t[i][d];
    c ? c.color !== o && r.push({ row: i, col: d, isCapture: true }) : r.push({ row: i, col: d, isCapture: false });
  }
  return r;
}
function fe(n, l, o, t, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const r = [], a = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for (const [i, d] of a) {
    const c = n + i, N = l + d;
    if (c < 0 || c >= 8 || N < 0 || N >= 8) continue;
    const w = t[c][N];
    w ? w.color !== o && r.push({ row: c, col: N, isCapture: true }) : r.push({ row: c, col: N, isCapture: false });
  }
  const p = o === "white" ? "black" : "white";
  return o === "white" && n === 7 && l === 4 && (s.white.kingSide && ((_a = t[7][7]) == null ? void 0 : _a.type) === "rook" && ((_b = t[7][7]) == null ? void 0 : _b.color) === "white" && !t[7][5] && !t[7][6] && !T("white", t) && !C(t, 7, 5, p) && !C(t, 7, 6, p) && r.push({ row: 7, col: 6, isCapture: false }), s.white.queenSide && ((_c = t[7][0]) == null ? void 0 : _c.type) === "rook" && ((_d = t[7][0]) == null ? void 0 : _d.color) === "white" && !t[7][1] && !t[7][2] && !t[7][3] && !T("white", t) && !C(t, 7, 3, p) && !C(t, 7, 2, p) && r.push({ row: 7, col: 2, isCapture: false })), o === "black" && n === 0 && l === 4 && (s.black.kingSide && ((_e = t[0][7]) == null ? void 0 : _e.type) === "rook" && ((_f = t[0][7]) == null ? void 0 : _f.color) === "black" && !t[0][5] && !t[0][6] && !T("black", t) && !C(t, 0, 5, p) && !C(t, 0, 6, p) && r.push({ row: 0, col: 6, isCapture: false }), s.black.queenSide && ((_g = t[0][0]) == null ? void 0 : _g.type) === "rook" && ((_h = t[0][0]) == null ? void 0 : _h.color) === "black" && !t[0][1] && !t[0][2] && !t[0][3] && !T("black", t) && !C(t, 0, 3, p) && !C(t, 0, 2, p) && r.push({ row: 0, col: 2, isCapture: false })), r;
}
function he(n, l, o, t, s) {
  const r = o[n][l];
  if (!r) return [];
  const a = r.color;
  switch (r.type) {
    case "pawn":
      return ue(n, l, a, o, s);
    case "rook":
      return B(n, l, a, o, [[0, 1], [0, -1], [1, 0], [-1, 0]]);
    case "knight":
      return me(n, l, a, o);
    case "bishop":
      return B(n, l, a, o, [[1, 1], [1, -1], [-1, 1], [-1, -1]]);
    case "queen":
      return B(n, l, a, o, [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]);
    case "king":
      return fe(n, l, a, o, t);
    default:
      return [];
  }
}
function ye(n, l, o, t, s) {
  const r = D(n), a = r[l.row][l.col];
  if (!a) return { newBoard: r };
  let p = r[o.row][o.col];
  if (a.type === "pawn" && s && o.row === s.row && o.col === s.col && !p && (p = r[l.row][o.col], r[l.row][o.col] = null), a.type === "king" && Math.abs(o.col - l.col) === 2) {
    const i = l.row;
    o.col > l.col ? (r[i][5] = r[i][7], r[i][7] = null) : (r[i][3] = r[i][0], r[i][0] = null);
  }
  return r[o.row][o.col] = a, r[l.row][l.col] = null, a.type === "pawn" && (o.row === 0 || o.row === 7) && (r[o.row][o.col] = { type: "queen", color: a.color }), { newBoard: r };
}
function H(n, l, o) {
  const t = xe(n.board), s = pe(n.castlingRights), r = t[l][o];
  if (!r) return [];
  const a = he(l, o, t, s, n.enPassantTarget), p = r.color;
  return a.filter((i) => {
    const { newBoard: d } = ye(t, { row: l, col: o }, i, s, n.enPassantTarget);
    let c = d;
    return r.type === "pawn" && (i.row === 0 || i.row === 7) && (c = D(d), c[i.row][i.col] = { type: "queen", color: r.color }), !T(p, c);
  });
}
function ge(n, l) {
  const o = n.board, t = l;
  for (let s = 0; s < 8; s++) for (let r = 0; r < 8; r++) {
    const a = o[s][r];
    if (a.type === y.King && a.color === t) return { row: s, col: r };
  }
  return null;
}
function Ee() {
  var _a;
  const n = ee(), l = te(), o = ie("chess"), t = (_a = l.state) == null ? void 0 : _a.roomPassword, [s, r] = m.useState(null), [a, p] = m.useState(false), [i, d] = m.useState(true), [c, N] = m.useState({ id: "", username: "" }), [w, U] = m.useState(null), [v, k] = m.useState(null), [M, O] = m.useState([]), [F, z] = m.useState(null), [R, Y] = m.useState(false), [f, K] = m.useState(null), [E, $] = m.useState(false), L = 360, _ = L * 2 + 24 * 2, g = m.useRef(null), V = m.useMemo(() => !(s == null ? void 0 : s.check) || s.status !== "playing" ? null : ge(s, s.currentPlayer), [s]);
  m.useEffect(() => {
    const { playerId: x, username: b } = le();
    N({ id: x, username: b });
  }, []), m.useEffect(() => {
    if (!o || !c.id) return;
    (async () => {
      try {
        d(true);
        const h = new ne(o, c.id, c.username, t);
        U(h), g.current = h;
        const W = re();
        h.onGameState((P) => {
          const j = JSON.parse(JSON.stringify(P));
          r(j);
          const A = j.players.find((Z) => Z.id === c.id);
          K(A || null), W({ status: j.status, serverCurrentPlayer: j.currentPlayer, myColor: A == null ? void 0 : A.color }), A && (A.color !== j.currentPlayer || j.status !== "playing") && (k(null), O([]));
        }), h.onConnection((P) => {
          p(P), P ? (ce(o, "chess"), I.success("Connected to chess game!")) : I.error("Disconnected from chess game. You can try refreshing the page to reconnect.");
        }), h.onError((P) => {
          console.error("Game error:", P), I.error(`Game error: ${P.message}`);
        }), await h.connect(), d(false);
      } catch (h) {
        console.error("Failed to initialize game:", h), I.error("Failed to connect to game"), d(false);
      }
    })();
    const b = (h) => {
      g.current && g.current.isConnected() && (h.preventDefault(), h.returnValue = "Are you sure you want to leave the game? You will be disconnected from the room."), g.current && g.current.disconnect();
    }, u = () => {
      g.current && g.current.disconnect();
    };
    return window.addEventListener("beforeunload", b), window.addEventListener("popstate", u), () => {
      window.removeEventListener("beforeunload", b), window.removeEventListener("popstate", u), g.current && (g.current.disconnect(), g.current = null);
    };
  }, [o, c, t]), m.useEffect(() => () => {
    g.current && (g.current.disconnect(), g.current = null);
  }, []);
  const Q = m.useCallback((x, b) => {
    if (!s || !w || !a || s.status !== "playing") return;
    const u = { row: x, col: b }, h = s.board[x][b];
    if (F) {
      G(u, F) && z(null);
      return;
    }
    if (!v) {
      h.type !== y.Empty && f && h.color === f.color && f.color === s.currentPlayer && (k(u), O(H(s, u.row, u.col)));
      return;
    }
    if (G(v, u)) {
      k(null), O([]);
      return;
    }
    if (h.type !== y.Empty && f && h.color === f.color) {
      k(u), O(H(s, u.row, u.col));
      return;
    }
    if (M.some((P) => G(P, u))) {
      const P = { from: v, to: u }, j = s.board[v.row][v.col];
      if (j.type === y.Pawn && (j.color === S.White && u.row === 0 || j.color === S.Black && u.row === 7)) {
        z(u);
        return;
      }
      w.sendMove(P), k(null), O([]);
    } else k(null), O([]);
  }, [s, w, a, v, M, f, F]), J = m.useCallback((x) => {
    if (!v || !F || !w) return;
    const b = { from: v, to: F, promotion: x };
    w.sendMove(b), k(null), O([]), z(null);
  }, [v, F, w]), X = () => {
    const x = ae();
    n(`/multiplayer/${x}/chess`);
  };
  return i ? e.jsx("div", { className: "flex items-center justify-center h-screen bg-black", style: { fontFamily: "'Press Start 2P', monospace" }, children: e.jsx("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg p-8", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent mx-auto mb-4" }), e.jsx("p", { className: "text-gray-300", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace" }, children: "CONNECTING TO CHESS GAME..." })] }) }) }) : e.jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", style: { fontFamily: "'Press Start 2P', monospace" }, children: [e.jsx("img", { src: "/games/chess/chess-cat.png", alt: "chess sprites", className: "hidden", width: 32, height: 144 }), e.jsxs("div", { className: "fixed top-4 right-4 z-[100] flex gap-2", children: [e.jsx("button", { onClick: () => $((x) => !x), className: "bg-gray-700 border-2 border-gray-400 hover:bg-gray-600 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-pressed": E, "aria-label": E ? "Hide sidebar" : "Show sidebar", children: E ? "HIDE PANEL" : "SHOW PANEL" }), e.jsx("button", { onClick: () => n("/multiplayer"), className: "bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, "aria-label": "Back to multiplayer games", children: "BACK TO MULTIPLAYER GAMES" })] }), e.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [e.jsxs("div", { className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none", style: { height: "100vh", paddingTop: E ? 0 : 5, paddingBottom: E ? 0 : 5 }, children: [e.jsx("img", { src: (f == null ? void 0 : f.color) === S.Black ? "/games/chess/light-cat.jpg" : "/games/chess/dark-cat.jpg", alt: (f == null ? void 0 : f.color) === S.Black ? "White player" : "Black player", draggable: false, className: `object-cover object-center border-4 ${(s == null ? void 0 : s.currentPlayer) === ((f == null ? void 0 : f.color) === S.Black ? S.White : S.Black) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${E ? "" : " - 10px"})`, width: L, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000", WebkitUserDrag: "none" } }), e.jsx("div", { children: e.jsx(se, { board: (s == null ? void 0 : s.board) || [], selectedSquare: v, possibleMoves: M, onSquareClick: Q, sideImagesWidth: _, isSidebarOpen: E, showGrid: R, currentPlayerColor: f == null ? void 0 : f.color, checkSquare: V }) }), e.jsx("img", { src: (f == null ? void 0 : f.color) === S.Black ? "/games/chess/dark-cat.jpg" : "/games/chess/light-cat.jpg", alt: (f == null ? void 0 : f.color) === S.Black ? "Black player" : "White player", draggable: false, className: `object-cover object-center border-4 ${(s == null ? void 0 : s.currentPlayer) === (f == null ? void 0 : f.color) ? "border-yellow-400" : "border-gray-700"}`, style: { height: `calc(100vh${E ? "" : " - 10px"})`, width: L, boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000", WebkitUserDrag: "none" } })] }), e.jsxs("div", { className: `w-96 flex flex-col p-6 bg-black border-l-4 border-gray-400 overflow-y-auto ${E ? "" : "hidden"}`, style: { boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }, children: [e.jsxs("div", { className: "mb-6", children: [e.jsx("h1", { className: "text-lg mb-2 text-white", style: { fontSize: "14px", textShadow: "2px 2px 0px #000", fontFamily: "'Press Start 2P', monospace" }, children: "CHESS MULTIPLAYER" }), e.jsxs("p", { className: "text-xs text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: ["ROOM: ", o, " | PLAYER: ", c.username, f && ` (${q(f.color)})`] })] }), e.jsxs("div", { className: "mb-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 mb-4", children: [e.jsxs("div", { className: `px-4 py-2 text-center text-xs border-2 text-black ${(s == null ? void 0 : s.currentPlayer) === (f == null ? void 0 : f.color) ? "bg-blue-400 border-blue-300" : "bg-gray-400 border-gray-300"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: [(s == null ? void 0 : s.currentPlayer) === S.White ? "WHITE" : "BLACK", " ", "TO MOVE"] }), (s == null ? void 0 : s.check) && e.jsx("div", { className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECK!" }), (s == null ? void 0 : s.checkmate) && e.jsx("div", { className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "CHECKMATE!" }), (s == null ? void 0 : s.stalemate) && e.jsx("div", { className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "STALEMATE!" })] }), e.jsxs("div", { className: "flex gap-2 mb-4", children: [e.jsx("button", { onClick: () => {
    w && a && !window.confirm("ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.") || n("/multiplayer");
  }, className: "flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "LEAVE GAME" }), e.jsx("button", { onClick: () => {
    if (!a) return;
    window.confirm("ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.") && (w == null ? void 0 : w.restartGame());
  }, disabled: !a, className: "flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RESTART GAME" })] }), e.jsx("div", { className: "flex gap-2", children: e.jsx("button", { onClick: X, className: "w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "NEW ROOM" }) })] }), e.jsxs("div", { className: "mb-6", children: [e.jsx("div", { className: `px-4 py-2 text-center text-xs border-2 ${a ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: a ? "\u{1F7E2} CONNECTED" : "\u{1F534} DISCONNECTED" }), !a && e.jsx("button", { onClick: () => window.location.reload(), className: "w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: "RECONNECT" })] }), e.jsx("div", { className: "flex flex-col gap-4 flex-1", children: e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsxs("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: ["PLAYERS (", (s == null ? void 0 : s.players.length) || 0, "/2)"] }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "space-y-2", children: [s == null ? void 0 : s.players.map((x) => {
    const b = x.id === c.id, u = s && x.color === s.currentPlayer;
    return e.jsxs("div", { className: `p-3 border-2 ${b ? "border-blue-300 bg-blue-800" : "border-gray-400 bg-gray-700"} rounded`, children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "text-sm text-gray-200", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: x.username }), b && e.jsx("div", { className: "border border-blue-300 text-blue-300 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "YOU" })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm text-gray-300", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: q(x.color) }), u && e.jsx("div", { className: "border border-yellow-400 text-yellow-400 px-2 py-1", style: { fontSize: "6px", fontFamily: "'Press Start 2P', monospace" }, children: "TURN" })] })] }, x.id);
  }), (!(s == null ? void 0 : s.players) || s.players.length === 0) && e.jsx("div", { className: "text-gray-400 text-center py-4", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WAITING FOR PLAYERS..." })] }) }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "CAPTURED PIECES" }) }), e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "mb-4", children: [e.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "WHITE:" }), e.jsx("div", { className: "flex flex-wrap gap-1", children: e.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "text-gray-300 mb-2 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "BLACK:" }), e.jsx("div", { className: "flex flex-wrap gap-1", children: e.jsx("span", { className: "text-gray-500", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NONE" }) })] })] })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden flex-1", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "MOVE HISTORY" }) }), e.jsx("div", { className: "p-4", children: e.jsx("div", { className: "overflow-y-auto max-h-64", children: e.jsx("div", { className: "text-gray-400 italic", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "NO MOVES YET" }) }) })] }), e.jsxs("div", { className: "bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden", style: { boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }, children: [e.jsx("div", { className: "bg-gray-400 px-4 py-3 border-b-4 border-gray-400", children: e.jsx("h3", { className: "text-black font-bold", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "1px 1px 0px #000" }, children: "SETTINGS" }) }), e.jsx("div", { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-gray-300 font-bold", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: "SHOW GRID" }), e.jsx("button", { onClick: () => Y(!R), className: `px-3 py-2 border-2 font-bold transition-colors ${R ? "bg-green-400 border-green-400 text-black" : "bg-gray-600 border-gray-400 text-gray-300 hover:bg-gray-500"}`, style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace", boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000" }, children: R ? "ON" : "OFF" })] }) })] })] }) }), F && e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50", children: e.jsxs("div", { className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)" }, children: [e.jsx("h3", { className: "text-sm font-bold mb-6 text-center text-green-400", style: { fontSize: "10px", fontFamily: "'Press Start 2P', monospace", textShadow: "2px 2px 0px #000" }, children: "CHOOSE PROMOTION PIECE" }), e.jsx("div", { className: "flex gap-4 justify-center", children: [y.Queen, y.Rook, y.Bishop, y.Knight].map((x) => e.jsx("button", { onClick: () => J(x), className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors", style: { fontSize: "20px", filter: "drop-shadow(1px 1px 0px #000)", boxShadow: "inset 0 0 0 1px #000" }, children: oe({ type: x, color: (f == null ? void 0 : f.color) || S.White }) }, x)) })] }) })] })] })] });
}
export {
  Ee as default
};
