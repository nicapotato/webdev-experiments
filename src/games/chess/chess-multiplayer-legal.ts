/**
 * Legal move generation for multiplayer chess: adapts server state to the same
 * rules as single-player (chess-rules.js) plus en passant.
 */

import { cloneBoard, isKingInCheck, isSquareAttacked } from "./chess-rules.js";
import type {
  ChessCastlingRights,
  ChessGameState,
  ChessPiece,
  ChessPosition,
} from "@/games/multiplayer-games/chess/chess-game-multiplayer";
import {
  ChessColor,
  ChessPieceType,
} from "@/games/multiplayer-games/chess/chess-game-multiplayer";

type LocalPiece = { type: string; color: "white" | "black" };

type LocalRights = {
  white: { kingSide: boolean; queenSide: boolean };
  black: { kingSide: boolean; queenSide: boolean };
};

const PIECE_NAME: Record<ChessPieceType, string | null> = {
  [ChessPieceType.Empty]: null,
  [ChessPieceType.Pawn]: "pawn",
  [ChessPieceType.Rook]: "rook",
  [ChessPieceType.Knight]: "knight",
  [ChessPieceType.Bishop]: "bishop",
  [ChessPieceType.Queen]: "queen",
  [ChessPieceType.King]: "king",
};

export type ChessMoveHint = ChessPosition & { isCapture?: boolean };

export function serverBoardToLocal(
  board: ChessPiece[][],
): (LocalPiece | null)[][] {
  return board.map((row) =>
    row.map((p) => {
      const t = PIECE_NAME[p.type];
      if (!t) return null;
      return {
        type: t,
        color: p.color === ChessColor.White ? "white" : "black",
      };
    }),
  );
}

export function serverCastlingToLocal(cr: ChessCastlingRights): LocalRights {
  return {
    white: { kingSide: cr.whiteKingSide, queenSide: cr.whiteQueenSide },
    black: { kingSide: cr.blackKingSide, queenSide: cr.blackQueenSide },
  };
}

function getPawnPseudo(
  row: number,
  col: number,
  color: "white" | "black",
  board: (LocalPiece | null)[][],
  enPassantTarget: ChessPosition | null | undefined,
): ChessMoveHint[] {
  const moves: ChessMoveHint[] = [];
  const direction = color === "white" ? -1 : 1;
  const startRow = color === "white" ? 6 : 1;

  if (
    row + direction >= 0 &&
    row + direction < 8 &&
    !board[row + direction][col]
  ) {
    moves.push({ row: row + direction, col, isCapture: false });
    if (
      row === startRow &&
      !board[row + 2 * direction][col]
    ) {
      moves.push({ row: row + 2 * direction, col, isCapture: false });
    }
  }

  for (const colOffset of [-1, 1]) {
    const newCol = col + colOffset;
    if (
      newCol < 0 ||
      newCol >= 8 ||
      row + direction < 0 ||
      row + direction >= 8
    ) {
      continue;
    }
    const targetPiece = board[row + direction][newCol];
    if (targetPiece && targetPiece.color !== color) {
      moves.push({
        row: row + direction,
        col: newCol,
        isCapture: true,
      });
    }
  }

  if (enPassantTarget) {
    const tr = enPassantTarget.row;
    const tc = enPassantTarget.col;
    if (
      row + direction === tr &&
      (col + 1 === tc || col - 1 === tc) &&
      !board[tr][tc]
    ) {
      const victim = board[row][tc];
      if (victim && victim.type === "pawn" && victim.color !== color) {
        moves.push({ row: tr, col: tc, isCapture: true });
      }
    }
  }

  return moves;
}

function getSliding(
  row: number,
  col: number,
  color: "white" | "black",
  board: (LocalPiece | null)[][],
  directions: number[][],
): ChessMoveHint[] {
  const moves: ChessMoveHint[] = [];
  for (const [dRow, dCol] of directions) {
    for (let i = 1; i < 8; i++) {
      const newRow = row + dRow * i;
      const newCol = col + dCol * i;
      if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break;
      const targetPiece = board[newRow][newCol];
      if (!targetPiece) {
        moves.push({ row: newRow, col: newCol, isCapture: false });
      } else {
        if (targetPiece.color !== color) {
          moves.push({ row: newRow, col: newCol, isCapture: true });
        }
        break;
      }
    }
  }
  return moves;
}

function getKnightPseudo(
  row: number,
  col: number,
  color: "white" | "black",
  board: (LocalPiece | null)[][],
): ChessMoveHint[] {
  const deltas = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const moves: ChessMoveHint[] = [];
  for (const [dRow, dCol] of deltas) {
    const newRow = row + dRow;
    const newCol = col + dCol;
    if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) continue;
    const targetPiece = board[newRow][newCol];
    if (!targetPiece) {
      moves.push({ row: newRow, col: newCol, isCapture: false });
    } else if (targetPiece.color !== color) {
      moves.push({ row: newRow, col: newCol, isCapture: true });
    }
  }
  return moves;
}

function getKingPseudo(
  row: number,
  col: number,
  color: "white" | "black",
  board: (LocalPiece | null)[][],
  castlingRights: LocalRights,
): ChessMoveHint[] {
  const moves: ChessMoveHint[] = [];
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (const [dRow, dCol] of dirs) {
    const newRow = row + dRow;
    const newCol = col + dCol;
    if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) continue;
    const targetPiece = board[newRow][newCol];
    if (!targetPiece) {
      moves.push({ row: newRow, col: newCol, isCapture: false });
    } else if (targetPiece.color !== color) {
      moves.push({ row: newRow, col: newCol, isCapture: true });
    }
  }

  const opp = color === "white" ? "black" : "white";
  if (color === "white" && row === 7 && col === 4) {
    if (
      castlingRights.white.kingSide &&
      board[7][7]?.type === "rook" &&
      board[7][7]?.color === "white" &&
      !board[7][5] &&
      !board[7][6]
    ) {
      if (
        !isKingInCheck("white", board) &&
        !isSquareAttacked(board, 7, 5, opp) &&
        !isSquareAttacked(board, 7, 6, opp)
      ) {
        moves.push({ row: 7, col: 6, isCapture: false });
      }
    }
    if (
      castlingRights.white.queenSide &&
      board[7][0]?.type === "rook" &&
      board[7][0]?.color === "white" &&
      !board[7][1] &&
      !board[7][2] &&
      !board[7][3]
    ) {
      if (
        !isKingInCheck("white", board) &&
        !isSquareAttacked(board, 7, 3, opp) &&
        !isSquareAttacked(board, 7, 2, opp)
      ) {
        moves.push({ row: 7, col: 2, isCapture: false });
      }
    }
  }
  if (color === "black" && row === 0 && col === 4) {
    if (
      castlingRights.black.kingSide &&
      board[0][7]?.type === "rook" &&
      board[0][7]?.color === "black" &&
      !board[0][5] &&
      !board[0][6]
    ) {
      if (
        !isKingInCheck("black", board) &&
        !isSquareAttacked(board, 0, 5, opp) &&
        !isSquareAttacked(board, 0, 6, opp)
      ) {
        moves.push({ row: 0, col: 6, isCapture: false });
      }
    }
    if (
      castlingRights.black.queenSide &&
      board[0][0]?.type === "rook" &&
      board[0][0]?.color === "black" &&
      !board[0][1] &&
      !board[0][2] &&
      !board[0][3]
    ) {
      if (
        !isKingInCheck("black", board) &&
        !isSquareAttacked(board, 0, 3, opp) &&
        !isSquareAttacked(board, 0, 2, opp)
      ) {
        moves.push({ row: 0, col: 2, isCapture: false });
      }
    }
  }

  return moves;
}

function getPseudoLegalForSquare(
  row: number,
  col: number,
  board: (LocalPiece | null)[][],
  castlingRights: LocalRights,
  enPassantTarget: ChessPosition | null | undefined,
): ChessMoveHint[] {
  const piece = board[row][col];
  if (!piece) return [];

  const color = piece.color;

  switch (piece.type) {
    case "pawn":
      return getPawnPseudo(row, col, color, board, enPassantTarget);
    case "rook":
      return getSliding(row, col, color, board, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]);
    case "knight":
      return getKnightPseudo(row, col, color, board);
    case "bishop":
      return getSliding(row, col, color, board, [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
    case "queen":
      return getSliding(row, col, color, board, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
    case "king":
      return getKingPseudo(row, col, color, board, castlingRights);
    default:
      return [];
  }
}

/**
 * Apply a move on a local board for legality testing (en passant + promotion default queen).
 */
function applyMoveForLegality(
  board: (LocalPiece | null)[][],
  from: ChessPosition,
  to: ChessPosition,
  castlingRights: LocalRights,
  enPassantTarget: ChessPosition | null | undefined,
): { newBoard: (LocalPiece | null)[][] } {
  const newBoard = cloneBoard(board) as (LocalPiece | null)[][];
  const piece = newBoard[from.row][from.col];
  if (!piece) return { newBoard };

  let captured = newBoard[to.row][to.col];

  if (
    piece.type === "pawn" &&
    enPassantTarget &&
    to.row === enPassantTarget.row &&
    to.col === enPassantTarget.col &&
    !captured
  ) {
    captured = newBoard[from.row][to.col];
    newBoard[from.row][to.col] = null;
  }

  if (piece.type === "king" && Math.abs(to.col - from.col) === 2) {
    const kr = from.row;
    if (to.col > from.col) {
      newBoard[kr][5] = newBoard[kr][7];
      newBoard[kr][7] = null;
    } else {
      newBoard[kr][3] = newBoard[kr][0];
      newBoard[kr][0] = null;
    }
  }

  newBoard[to.row][to.col] = piece;
  newBoard[from.row][from.col] = null;

  if (piece.type === "pawn" && (to.row === 0 || to.row === 7)) {
    newBoard[to.row][to.col] = { type: "queen", color: piece.color };
  }

  return { newBoard };
}

/**
 * Legal moves for a square using current game state (matches server rules).
 */
export function getLegalMovesForSquare(
  gameState: ChessGameState,
  row: number,
  col: number,
): ChessMoveHint[] {
  const board = serverBoardToLocal(gameState.board);
  const rights = serverCastlingToLocal(gameState.castlingRights);
  const piece = board[row][col];
  if (!piece) return [];

  const pseudo = getPseudoLegalForSquare(
    row,
    col,
    board,
    rights,
    gameState.enPassantTarget,
  );

  const color = piece.color;
  return pseudo.filter((to) => {
    const { newBoard } = applyMoveForLegality(
      board,
      { row, col },
      to,
      rights,
      gameState.enPassantTarget,
    );
    let testBoard = newBoard;
    if (
      piece.type === "pawn" &&
      (to.row === 0 || to.row === 7)
    ) {
      testBoard = cloneBoard(newBoard) as (LocalPiece | null)[][];
      testBoard[to.row][to.col] = { type: "queen", color: piece.color };
    }
    return !isKingInCheck(color, testBoard);
  });
}

export function findKingSquareForSide(
  gameState: ChessGameState,
  side: ChessColor,
): ChessPosition | null {
  const board = gameState.board;
  const c = side;
  for (let r = 0; r < 8; r++) {
    for (let ccol = 0; ccol < 8; ccol++) {
      const p = board[r][ccol];
      if (p.type === ChessPieceType.King && p.color === c) {
        return { row: r, col: ccol };
      }
    }
  }
  return null;
}
