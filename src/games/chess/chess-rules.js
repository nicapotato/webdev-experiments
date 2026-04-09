/** Pure helpers for local chess: attacks, castling rights, apply move. */

export function cloneBoard(board) {
  return board.map((row) => [...row]);
}

export const defaultCastlingRights = () => ({
  white: { kingSide: true, queenSide: true },
  black: { kingSide: true, queenSide: true },
});

function deepCopyRights(r) {
  return {
    white: { ...r.white },
    black: { ...r.black },
  };
}

export function updateCastlingRights(rights, from, to, piece, captured) {
  const r = deepCopyRights(rights);
  const c = piece.color;
  if (piece.type === "king") {
    r[c] = { kingSide: false, queenSide: false };
  }
  if (piece.type === "rook") {
    if (from.row === 7 && from.col === 7) r.white.kingSide = false;
    if (from.row === 7 && from.col === 0) r.white.queenSide = false;
    if (from.row === 0 && from.col === 7) r.black.kingSide = false;
    if (from.row === 0 && from.col === 0) r.black.queenSide = false;
  }
  if (captured?.type === "rook") {
    if (to.row === 7 && to.col === 7) r.white.kingSide = false;
    if (to.row === 7 && to.col === 0) r.white.queenSide = false;
    if (to.row === 0 && to.col === 7) r.black.kingSide = false;
    if (to.row === 0 && to.col === 0) r.black.queenSide = false;
  }
  return r;
}

function rookRayAttacks(board, sr, sc, tr, tc) {
  if (sr !== tr && sc !== tc) return false;
  if (sr === tr) {
    const step = tc > sc ? 1 : -1;
    for (let c = sc + step; c !== tc; c += step) {
      if (board[sr][c]) return false;
    }
    return true;
  }
  const step = tr > sr ? 1 : -1;
  for (let r = sr + step; r !== tr; r += step) {
    if (board[r][sc]) return false;
  }
  return true;
}

function bishopRayAttacks(board, sr, sc, tr, tc) {
  if (Math.abs(tr - sr) !== Math.abs(tc - sc) || sr === tr) return false;
  const dr = tr > sr ? 1 : -1;
  const dc = tc > sc ? 1 : -1;
  let r = sr + dr;
  let c = sc + dc;
  while (r !== tr || c !== tc) {
    if (board[r][c]) return false;
    r += dr;
    c += dc;
  }
  return true;
}

/** Can `piece` at (r,c) attack square (tr,tc)? King uses adjacent only (no castling as attack). */
export function pieceAttacksSquare(board, r, c, tr, tc) {
  const piece = board[r][c];
  if (!piece) return false;
  switch (piece.type) {
    case "pawn": {
      const dir = piece.color === "white" ? -1 : 1;
      return tr === r + dir && (tc === c - 1 || tc === c + 1);
    }
    case "knight": {
      const adr = Math.abs(tr - r);
      const adc = Math.abs(tc - c);
      return (adr === 2 && adc === 1) || (adr === 1 && adc === 2);
    }
    case "king":
      return Math.abs(tr - r) <= 1 && Math.abs(tc - c) <= 1 && (tr !== r || tc !== c);
    case "rook":
      return rookRayAttacks(board, r, c, tr, tc);
    case "bishop":
      return bishopRayAttacks(board, r, c, tr, tc);
    case "queen":
      return (
        rookRayAttacks(board, r, c, tr, tc) ||
        bishopRayAttacks(board, r, c, tr, tc)
      );
    default:
      return false;
  }
}

export function isSquareAttacked(board, tr, tc, byColor) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const p = board[row][col];
      if (p && p.color === byColor && pieceAttacksSquare(board, row, col, tr, tc)) {
        return true;
      }
    }
  }
  return false;
}

export function findKingSquare(board, color) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const p = board[row][col];
      if (p?.type === "king" && p.color === color) {
        return { row, col };
      }
    }
  }
  return null;
}

export function isKingInCheck(color, board) {
  const k = findKingSquare(board, color);
  if (!k) return false;
  const opp = color === "white" ? "black" : "white";
  return isSquareAttacked(board, k.row, k.col, opp);
}

export function applyMove(board, from, to, castlingRights) {
  const newBoard = cloneBoard(board);
  const piece = newBoard[from.row][from.col];
  const captured = newBoard[to.row][to.col];

  if (piece.type === "king" && Math.abs(to.col - from.col) === 2) {
    const kr = from.row;
    if (to.col > from.col) {
      newBoard[kr][7] = null;
      newBoard[kr][5] = { type: "rook", color: piece.color };
    } else {
      newBoard[kr][0] = null;
      newBoard[kr][3] = { type: "rook", color: piece.color };
    }
  }

  newBoard[to.row][to.col] = piece;
  newBoard[from.row][from.col] = null;

  const rights = updateCastlingRights(castlingRights, from, to, piece, captured);
  return { newBoard, captured, rights };
}
