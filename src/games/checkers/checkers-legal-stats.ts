/** Shared helpers for checkers UI (forced-move hints). */

export type CheckersPosition = { row: number; col: number };

const BOARD_SIZE = 8;

export function countTotalLegalMoves<T>(
  board: (T | null)[][],
  isCurrentPlayerPiece: (piece: T, row: number, col: number) => boolean,
  getPossibleMoves: (
    row: number,
    col: number,
    board: (T | null)[][],
  ) => CheckersPosition[],
): number {
  let n = 0;
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const p = board[r][c];
      if (p && isCurrentPlayerPiece(p, r, c)) {
        n += getPossibleMoves(r, c, board).length;
      }
    }
  }
  return n;
}

export function getMandatoryCapturePiecePositions<T>(
  board: (T | null)[][],
  hasAnyCaptureForPlayer: boolean,
  isCurrentPlayerPiece: (piece: T, row: number, col: number) => boolean,
  getCaptureMoves: (
    row: number,
    col: number,
    board: (T | null)[][],
  ) => CheckersPosition[],
): CheckersPosition[] {
  if (!hasAnyCaptureForPlayer) return [];
  const out: CheckersPosition[] = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const p = board[r][c];
      if (
        p &&
        isCurrentPlayerPiece(p, r, c) &&
        getCaptureMoves(r, c, board).length > 0
      ) {
        out.push({ row: r, col: c });
      }
    }
  }
  return out;
}
