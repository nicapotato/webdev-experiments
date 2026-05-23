import { r as R, j as a, C as G, S as O, o as Z, p as Q } from "./index-BpTeCU6g.js";
import { b as z, C as o, p as h } from "./chess-game-multiplayer-XMnaIFi4.js";
const Y = ({ board: d, selectedSquare: f, possibleMoves: c = [], onSquareClick: m, sideImagesWidth: u = 0, isSidebarOpen: E = true, showGrid: I = false, currentPlayerColor: H = null, forcedCapture: _ = false, mandatoryPieceSquares: $ = [], singleLegalMoveHighlight: w = false, comboContinuePiece: y = null, checkSquare: b = null }) => {
  const [S, M] = R.useState(64), k = () => {
    if (typeof window < "u") {
      const e = window.innerHeight * 0.98, s = E ? 384 : 0, t = u || 0, r = (window.innerWidth - s - t) * 0.98, l = Math.min(e, r);
      return Math.floor(l / 8);
    }
    return 64;
  };
  R.useEffect(() => {
    const e = () => {
      M(k());
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [E, u]);
  const q = (e) => {
    if (!e || e.type === o.Empty) return {};
    const s = { [o.Pawn]: 0, [o.Knight]: 1, [o.Queen]: 2, [o.King]: 3, [o.Bishop]: 4, [o.Rook]: 5 }, t = Q, r = t * O, l = t * Z, i = S / t, g = (e.color === z.White ? 0 : 1) * t, n = (e.type === o.Rook && e.isKing ? G : s[e.type]) * t;
    return { backgroundImage: "url(/games/chess/chess-cat.png)", backgroundPosition: `${-g * i}px ${-n * i}px`, backgroundSize: `${r * i}px ${l * i}px`, backgroundRepeat: "no-repeat", imageRendering: "pixelated", width: "100%", height: "100%" };
  }, B = (e, s) => f && h(f, { row: e, col: s }), C = (e, s) => c.some((t) => h(t, { row: e, col: s })), T = (e, s) => c.find((t) => h(t, { row: e, col: s })), L = (e, s) => $.some((t) => h(t, { row: e, col: s })), K = (e, s) => y && y.row === e && y.col === s, j = (e, s) => b && b.row === e && b.col === s, v = (e) => !e || e.type === o.Empty, W = (e, s) => {
    var _a;
    const t = (e + s) % 2 === 0, r = (_a = d[e]) == null ? void 0 : _a[s], l = C(e, s), i = B(e, s), x = T(e, s), g = l && (x == null ? void 0 : x.isCapture) === true, N = L(e, s);
    let n = "flex items-center justify-center cursor-pointer relative select-none ";
    return t ? n += "bg-gray-300 " : n += "bg-gray-800 ", i ? j(e, s) ? n += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] " : K(e, s) ? n += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : n += "ring-4 ring-blue-500 ring-inset " : l ? w && c.length === 1 ? n += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : _ && g ? n += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : n += "ring-2 ring-green-400 ring-inset " : N && r && !v(r) && !i ? n += "ring-2 ring-orange-400 ring-inset " : j(e, s) && r && !v(r) && !i && (n += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] "), n;
  }, F = () => ({ width: `${S}px`, height: `${S}px` }), A = (e, s) => {
    var _a;
    const t = (_a = d[e]) == null ? void 0 : _a[s], r = C(e, s), l = T(e, s), i = r && (l == null ? void 0 : l.isCapture) === true, x = w && c.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : _ && i ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", g = _ && i ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
    return a.jsxs("div", { className: W(e, s), style: F(), onClick: () => m(e, s), children: [t && t.type !== o.Empty && a.jsx("div", { className: "absolute inset-0 z-10 select-none pointer-events-none", style: q(t) }), r && v(t) && a.jsx("div", { className: "absolute inset-0 flex items-center justify-center z-[5]", children: a.jsx("div", { className: x }) }), r && t && t.type !== o.Empty && a.jsx("div", { className: `absolute inset-0 rounded pointer-events-none z-[5] ${g}` }), I && a.jsxs("div", { className: "absolute bottom-0 right-0 text-xs text-gray-500 p-1", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [String.fromCharCode(97 + s), 8 - e] })] }, `${e}-${s}`);
  }, P = (e) => {
    const s = [];
    for (let t = 0; t < 8; t++) s.push(A(e, t));
    return a.jsx("div", { className: "flex", children: s }, e);
  }, D = () => {
    const e = [];
    if (H === z.Black) for (let t = 7; t >= 0; t--) e.push(P(t));
    else for (let t = 0; t < 8; t++) e.push(P(t));
    return e;
  };
  return a.jsx("div", { className: "h-full w-full flex justify-center items-center overflow-visible select-none", children: a.jsx("div", { className: "border-8 border-gray-700 shadow-2xl select-none", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)" }, children: a.jsx("div", { className: "flex flex-col", children: D() }) }) });
}, U = "/audio/level-up.mp3";
let p = null;
function V() {
  typeof window > "u" || (p || (p = new Audio(U), p.preload = "auto"), p.currentTime = 0, p.play().catch(() => {
  }));
}
function ee() {
  let d;
  return (f) => {
    const { status: c, serverCurrentPlayer: m, myColor: u } = f;
    if (c !== "playing") {
      d = void 0;
      return;
    }
    u !== void 0 && m === u && d !== void 0 && d !== u && V(), d = m;
  };
}
export {
  Y as C,
  ee as c
};
