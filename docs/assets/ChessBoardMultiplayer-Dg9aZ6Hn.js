import { r as j, j as o, C as F, S as D, f as G, h as O } from "./index-Cyo_F1kd.js";
import { b as T, C as r, p as g } from "./chess-game-multiplayer-DB5exR2Z.js";
const Q = ({ board: h, selectedSquare: f, possibleMoves: d = [], onSquareClick: z, sideImagesWidth: b = 0, isSidebarOpen: y = true, showGrid: P = false, currentPlayerColor: R = null, forcedCapture: p = false, mandatoryPieceSquares: I = [], singleLegalMoveHighlight: S = false, comboContinuePiece: m = null }) => {
  const [x, N] = j.useState(64), H = () => {
    if (typeof window < "u") {
      const e = window.innerHeight * 0.98, t = y ? 384 : 0, s = b || 0, i = (window.innerWidth - t - s) * 0.98, l = Math.min(e, i);
      return Math.floor(l / 8);
    }
    return 64;
  };
  j.useEffect(() => {
    const e = () => {
      N(H());
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [y, b]);
  const $ = (e) => {
    if (!e || e.type === r.Empty) return {};
    const t = { [r.Pawn]: 0, [r.Knight]: 1, [r.Queen]: 2, [r.King]: 3, [r.Bishop]: 4, [r.Rook]: 5 }, s = O, i = s * D, l = s * G, a = x / s, c = (e.color === T.White ? 0 : 1) * s, n = (e.type === r.Rook && e.isKing ? F : t[e.type]) * s;
    return { backgroundImage: "url(/games/chess/chess-cat.png)", backgroundPosition: `${-c * a}px ${-n * a}px`, backgroundSize: `${i * a}px ${l * a}px`, backgroundRepeat: "no-repeat", imageRendering: "pixelated", width: "100%", height: "100%" };
  }, k = (e, t) => f && g(f, { row: e, col: t }), _ = (e, t) => d.some((s) => g(s, { row: e, col: t })), E = (e, t) => d.find((s) => g(s, { row: e, col: t })), q = (e, t) => I.some((s) => g(s, { row: e, col: t })), M = (e, t) => m && m.row === e && m.col === t, v = (e) => !e || e.type === r.Empty, B = (e, t) => {
    var _a;
    const s = (e + t) % 2 === 0, i = (_a = h[e]) == null ? void 0 : _a[t], l = _(e, t), a = k(e, t), u = E(e, t), c = l && (u == null ? void 0 : u.isCapture) === true, C = q(e, t);
    let n = "flex items-center justify-center cursor-pointer relative ";
    return s ? n += "bg-gray-300 " : n += "bg-gray-800 ", a ? M(e, t) ? n += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : n += "ring-4 ring-blue-500 ring-inset " : l ? S && d.length === 1 ? n += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : p && c ? n += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : n += "ring-2 ring-green-400 ring-inset " : C && i && !v(i) && !a && (n += "ring-2 ring-orange-400 ring-inset "), n;
  }, K = () => ({ width: `${x}px`, height: `${x}px` }), W = (e, t) => {
    var _a;
    const s = (_a = h[e]) == null ? void 0 : _a[t], i = _(e, t), l = E(e, t), a = i && (l == null ? void 0 : l.isCapture) === true, u = S && d.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : p && a ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", c = p && a ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
    return o.jsxs("div", { className: B(e, t), style: K(), onClick: () => z(e, t), children: [s && s.type !== r.Empty && o.jsx("div", { className: "absolute inset-0 z-10 select-none pointer-events-none", style: $(s) }), i && v(s) && o.jsx("div", { className: "absolute inset-0 flex items-center justify-center z-[5]", children: o.jsx("div", { className: u }) }), i && s && s.type !== r.Empty && o.jsx("div", { className: `absolute inset-0 rounded pointer-events-none z-[5] ${c}` }), P && o.jsxs("div", { className: "absolute bottom-0 right-0 text-xs text-gray-500 p-1", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [String.fromCharCode(97 + t), 8 - e] })] }, `${e}-${t}`);
  }, w = (e) => {
    const t = [];
    for (let s = 0; s < 8; s++) t.push(W(e, s));
    return o.jsx("div", { className: "flex", children: t }, e);
  }, L = () => {
    const e = [];
    if (R === T.Black) for (let s = 7; s >= 0; s--) e.push(w(s));
    else for (let s = 0; s < 8; s++) e.push(w(s));
    return e;
  };
  return o.jsx("div", { className: "h-full w-full flex justify-center items-center overflow-visible", children: o.jsx("div", { className: "border-8 border-gray-700 shadow-2xl", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)" }, children: o.jsx("div", { className: "flex flex-col", children: L() }) }) });
};
export {
  Q as C
};
