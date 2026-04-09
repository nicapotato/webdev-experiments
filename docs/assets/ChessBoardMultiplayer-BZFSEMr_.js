import { r as g, j as r } from "./index-CE6kdDhP.js";
import { b as h, C as i, p as f } from "./chess-game-multiplayer-DB5exR2Z.js";
const _ = ({ board: m, selectedSquare: c, possibleMoves: y, onSquareClick: S, sideImagesWidth: d = 0, isSidebarOpen: u = true, showGrid: b = false, currentPlayerColor: v = null }) => {
  const [a, E] = g.useState(64), j = () => {
    if (typeof window < "u") {
      const e = window.innerHeight * 0.98, t = u ? 384 : 0, s = d || 0, n = (window.innerWidth - t - s) * 0.98, l = Math.min(e, n);
      return Math.floor(l / 8);
    }
    return 64;
  };
  g.useEffect(() => {
    const e = () => {
      E(j());
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, [u, d]);
  const w = (e) => {
    if (!e || e.type === i.Empty) return {};
    const t = { [i.Pawn]: 0, [i.Knight]: 1, [i.Queen]: 2, [i.King]: 3, [i.Bishop]: 4, [i.Rook]: 5 }, s = 16, n = 2, l = 8, P = s * n, $ = s * l, o = a / s, k = (e.color === h.White ? 0 : 1) * s, I = t[e.type] * s;
    return { backgroundImage: "url(/games/chess/chess-cat.png)", backgroundPosition: `${-k * o}px ${-I * o}px`, backgroundSize: `${P * o}px ${$ * o}px`, backgroundRepeat: "no-repeat", imageRendering: "pixelated", width: "100%", height: "100%" };
  }, C = (e, t) => c && f(c, { row: e, col: t }), p = (e, t) => y.some((s) => f(s, { row: e, col: t })), T = (e, t) => {
    const s = (e + t) % 2 === 0;
    let n = "flex items-center justify-center cursor-pointer relative ";
    return s ? n += "bg-gray-300 " : n += "bg-gray-800 ", C(e, t) && (n += "ring-4 ring-blue-500 ring-inset "), p(e, t) && (n += "ring-2 ring-green-400 ring-inset "), n;
  }, z = () => ({ width: `${a}px`, height: `${a}px` }), N = (e, t) => {
    var _a;
    const s = (_a = m[e]) == null ? void 0 : _a[t], n = p(e, t);
    return r.jsxs("div", { className: T(e, t), style: z(), onClick: () => S(e, t), children: [s && s.type !== i.Empty && r.jsx("div", { className: "absolute inset-0 z-10 select-none pointer-events-none", style: w(s) }), n && s && s.type === i.Empty && r.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: r.jsx("div", { className: "w-4 h-4 bg-green-500 rounded-full opacity-60" }) }), n && s && s.type !== i.Empty && r.jsx("div", { className: "absolute inset-0 border-4 border-red-500 rounded pointer-events-none" }), b && r.jsxs("div", { className: "absolute bottom-0 right-0 text-xs text-gray-500 p-1", style: { fontSize: "8px", fontFamily: "'Press Start 2P', monospace" }, children: [String.fromCharCode(97 + t), 8 - e] })] }, `${e}-${t}`);
  }, x = (e) => {
    const t = [];
    for (let s = 0; s < 8; s++) t.push(N(e, s));
    return r.jsx("div", { className: "flex", children: t }, e);
  }, H = () => {
    const e = [];
    if (v === h.Black) for (let s = 7; s >= 0; s--) e.push(x(s));
    else for (let s = 0; s < 8; s++) e.push(x(s));
    return e;
  };
  return r.jsx("div", { className: "h-full w-full flex justify-center items-center overflow-visible", children: r.jsx("div", { className: "border-8 border-gray-700 shadow-2xl", style: { boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)" }, children: r.jsx("div", { className: "flex flex-col", children: H() }) }) });
};
export {
  _ as C
};
