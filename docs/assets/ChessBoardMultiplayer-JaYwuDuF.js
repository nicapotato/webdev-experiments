import { r as z, j as o, C as G, S as O, l as Z, m as A } from "./index-CZZOmvhJ.js";
import { b as P, C as a, p as u } from "./chess-game-multiplayer-XMnaIFi4.js";
const J = ({ board: _, selectedSquare: b, possibleMoves: c = [], onSquareClick: R, sideImagesWidth: y = 0, isSidebarOpen: S = true, showGrid: I = false, currentPlayerColor: N = null, forcedCapture: p = false, mandatoryPieceSquares: H = [], singleLegalMoveHighlight: E = false, comboContinuePiece: x = null, checkSquare: m = null }) => {
  const [h, $] = z.useState(64), k = () => {
    if (typeof window < "u") {
      const e = window.innerHeight * 0.98, s = S ? 384 : 0, t = y || 0, r = (window.innerWidth - s - t) * 0.98, l = Math.min(e, r);
      return Math.floor(l / 8);
    }
    return 64;
  };
  z.useEffect(() => {
    const e = () => {
      $(k());
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [S, y]);
  const M = (e) => {
    if (!e || e.type === a.Empty) return {};
    const s = { [a.Pawn]: 0, [a.Knight]: 1, [a.Queen]: 2, [a.King]: 3, [a.Bishop]: 4, [a.Rook]: 5 }, t = A, r = t * O, l = t * Z, i = h / t, d = (e.color === P.White ? 0 : 1) * t, n = (e.type === a.Rook && e.isKing ? G : s[e.type]) * t;
    return { backgroundImage: "url(/games/chess/chess-cat.png)", backgroundPosition: `${-d * i}px ${-n * i}px`, backgroundSize: `${r * i}px ${l * i}px`, backgroundRepeat: "no-repeat", imageRendering: "pixelated", width: "100%", height: "100%" };
  }, q = (e, s) => b && u(b, { row: e, col: s }), v = (e, s) => c.some((t) => u(t, { row: e, col: s })), w = (e, s) => c.find((t) => u(t, { row: e, col: s })), B = (e, s) => H.some((t) => u(t, { row: e, col: s })), K = (e, s) => x && x.row === e && x.col === s, C = (e, s) => m && m.row === e && m.col === s, f = (e) => !e || e.type === a.Empty, W = (e, s) => {
    var _a;
    const t = (e + s) % 2 === 0, r = (_a = _[e]) == null ? void 0 : _a[s], l = v(e, s), i = q(e, s), g = w(e, s), d = l && (g == null ? void 0 : g.isCapture) === true, T = B(e, s);
    let n = "flex items-center justify-center cursor-pointer relative select-none ";
    return t ? n += "bg-gray-300 " : n += "bg-gray-800 ", i ? C(e, s) ? n += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] " : K(e, s) ? n += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : n += "ring-4 ring-blue-500 ring-inset " : l ? E && c.length === 1 ? n += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : p && d ? n += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : n += "ring-2 ring-green-400 ring-inset " : T && r && !f(r) && !i ? n += "ring-2 ring-orange-400 ring-inset " : C(e, s) && r && !f(r) && !i && (n += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] "), n;
  }, L = () => ({ width: `${h}px`, height: `${h}px` }), F = (e, s) => {
    var _a;
    const t = (_a = _[e]) == null ? void 0 : _a[s], r = v(e, s), l = w(e, s), i = r && (l == null ? void 0 : l.isCapture) === true, g = E && c.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : p && i ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", d = p && i ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
    return o.jsxs("div", { className: W(e, s), style: L(), onClick: () => R(e, s), children: [t && t.type !== a.Empty && o.jsx("div", { className: "absolute inset-0 z-10 select-none pointer-events-none", style: M(t) }), r && f(t) && o.jsx("div", { className: "absolute inset-0 flex items-center justify-center z-[5]", children: o.jsx("div", { className: g }) }), r && t && t.type !== a.Empty && o.jsx("div", { className: `absolute inset-0 rounded pointer-events-none z-[5] ${d}` }), I && o.jsxs("div", { className: "absolute bottom-0 right-0 text-xs text-gray-500 p-1", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [String.fromCharCode(97 + s), 8 - e] })] }, `${e}-${s}`);
  }, j = (e) => {
    const s = [];
    for (let t = 0; t < 8; t++) s.push(F(e, t));
    return o.jsx("div", { className: "flex", children: s }, e);
  }, D = () => {
    const e = [];
    if (N === P.Black) for (let t = 7; t >= 0; t--) e.push(j(t));
    else for (let t = 0; t < 8; t++) e.push(j(t));
    return e;
  };
  return o.jsx("div", { className: "h-full w-full flex justify-center items-center overflow-visible select-none", children: o.jsx("div", { className: "border-8 border-gray-700 shadow-2xl select-none", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)" }, children: o.jsx("div", { className: "flex flex-col", children: D() }) }) });
};
export {
  J as C
};
