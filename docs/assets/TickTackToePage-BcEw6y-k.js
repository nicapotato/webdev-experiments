import { r as w, j as u } from "./index-CFCoourc.js";
import { B as v } from "./button-D1H9CCKv.js";
import "./utils-Cfc2KNsw.js";
import "./clsx-B-dksMZM.js";
const S = [[{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }], [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }], [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }], [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }], [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }], [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }], [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }], [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }]];
function k() {
  return Array.from({ length: 3 }, () => Array(3).fill(null));
}
function d(n = "X") {
  return { board: k(), currentPlayer: n, gameStatus: "playing", winningLine: null };
}
function h(n) {
  for (const e of S) {
    const [t, r, c] = e, o = n[t.row][t.col];
    if (o && o === n[r.row][r.col] && o === n[c.row][c.col]) return e;
  }
  return null;
}
function p(n) {
  const e = h(n);
  return e ? n[e[0].row][e[0].col] === "X" ? "x_wins" : "o_wins" : n.every((t) => t.every((r) => r !== null)) ? "draw" : "playing";
}
function m(n) {
  const e = [];
  for (let t = 0; t < 3; t++) for (let r = 0; r < 3; r++) n[t][r] === null && e.push({ row: t, col: r });
  return e;
}
function x(n, e, t) {
  if (n.gameStatus !== "playing" || n.board[e][t] !== null) return null;
  const r = n.board.map((l) => [...l]);
  r[e][t] = n.currentPlayer;
  const c = h(r), o = p(r);
  return { board: r, currentPlayer: n.currentPlayer === "X" ? "O" : "X", gameStatus: o, winningLine: c };
}
function C(n, e) {
  const t = p(n);
  return t === "playing" || t === "draw" ? 0 : t === "x_wins" && e === "X" || t === "o_wins" && e === "O" ? 10 : -10;
}
function g(n, e, t, r) {
  if (p(n) !== "playing") return C(n, r);
  const l = t ? r : "X";
  if (t) {
    let s = -1 / 0;
    for (const { row: a, col: y } of m(n)) n[a][y] = l, s = Math.max(s, g(n, e + 1, false, r)), n[a][y] = null;
    return s;
  }
  let i = 1 / 0;
  for (const { row: s, col: a } of m(n)) n[s][a] = l, i = Math.min(i, g(n, e + 1, true, r)), n[s][a] = null;
  return i;
}
function P(n, e) {
  const t = m(n);
  if (t.length === 0) return null;
  let r = -1 / 0, c = null;
  for (const o of t) {
    n[o.row][o.col] = e;
    const l = g(n, 0, false, e);
    n[o.row][o.col] = null, l > r && (r = l, c = o);
  }
  return c;
}
function j(n, e, t) {
  return n ? n.some((r) => r.row === e && r.col === t) : false;
}
const f = "X", b = "O";
function N(n) {
  switch (n.gameStatus) {
    case "x_wins":
      return "You win!";
    case "o_wins":
      return "Computer wins.";
    case "draw":
      return "Draw \u2014 no winner.";
    default:
      return n.currentPlayer === f ? "Your turn (X)" : "Computer is thinking\u2026";
  }
}
function T() {
  const [n, e] = w.useState(() => d(f)), t = w.useCallback(() => {
    e(d(f));
  }, []), r = w.useCallback((o, l) => {
    if (n.gameStatus !== "playing" || n.currentPlayer !== f) return;
    const i = x(n, o, l);
    i && e(i);
  }, [n]);
  w.useEffect(() => {
    if (n.gameStatus !== "playing" || n.currentPlayer !== b) return;
    const o = window.setTimeout(() => {
      const l = P(n.board, b);
      if (!l) return;
      const i = x(n, l.row, l.col);
      i && e(i);
    }, 400);
    return () => window.clearTimeout(o);
  }, [n]);
  const c = n.gameStatus === "playing" && n.currentPlayer === f;
  return u.jsx("div", { className: "min-h-[100svh] w-full px-4 py-6 bg-background text-foreground flex flex-col items-center", children: u.jsxs("div", { className: "max-w-md w-full space-y-6 text-center", children: [u.jsx("p", { className: "text-sm text-muted-foreground", children: "Single-player tick-tack-toe. You are X; the computer plays O and cannot be beaten if you slip up." }), u.jsx("p", { className: "text-lg font-medium", "aria-live": "polite", children: N(n) }), u.jsx("div", { className: "inline-grid grid-cols-3 gap-2 mx-auto", role: "grid", "aria-label": "Tick-tack-toe board", children: n.board.map((o, l) => o.map((i, s) => {
    const a = j(n.winningLine, l, s);
    return u.jsx("button", { type: "button", role: "gridcell", "aria-label": `Row ${l + 1}, column ${s + 1}${i ? `, ${i}` : ", empty"}`, disabled: !c || i !== null, onClick: () => r(l, s), className: ["size-24 sm:size-28 rounded-lg border-2 text-4xl font-bold transition-colors", "border-border bg-card hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-100", i === "X" ? "text-blue-600" : "", i === "O" ? "text-rose-600" : "", a ? "ring-2 ring-amber-500 bg-amber-500/10" : "", !i && c ? "cursor-pointer" : ""].filter(Boolean).join(" "), children: i ?? "" }, `${l}-${s}`);
  })) }), u.jsx(v, { type: "button", variant: "secondary", onClick: t, children: "New game" })] }) });
}
export {
  T as default
};
