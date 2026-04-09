import React, { useState, useEffect } from "react";
import {
  SPRITE_SIZE_PX,
  SHEET_COLS,
  SHEET_ROWS,
  CHECKER_KING_SPRITE_ROW,
} from "../checkers/checkers-sprite";

const ChessBoard = ({
  board,
  selectedSquare,
  possibleMoves = [],
  onSquareClick,
  sideImagesWidth = 0,
  isSidebarOpen = true,
  forcedCapture = false,
  mandatoryPieceSquares = [],
  singleLegalMoveHighlight = false,
  /** During multi-jump: keep orange emphasis on the only movable checker (even when selected). */
  comboContinuePiece = null,
  /** Chess: square of king in check (red highlight). */
  checkSquare = null,
}) => {
  const [tileSize, setTileSize] = useState(64);

  const getDynamicTileSize = () => {
    if (typeof window !== "undefined") {
      const availableHeight = window.innerHeight * 0.98;
      const reservedSidebar = isSidebarOpen ? 384 : 0;
      const reservedSides = sideImagesWidth || 0;
      const availableWidth =
        (window.innerWidth - reservedSidebar - reservedSides) * 0.98;

      const maxSize = Math.min(availableHeight, availableWidth);
      return Math.floor(maxSize / 8);
    }
    return 64;
  };

  useEffect(() => {
    const updateTileSize = () => {
      setTileSize(getDynamicTileSize());
    };

    updateTileSize();
    window.addEventListener("resize", updateTileSize);

    return () => window.removeEventListener("resize", updateTileSize);
  }, [isSidebarOpen, sideImagesWidth]);

  const getPieceStyles = (piece) => {
    if (!piece) return {};

    const rowIndex = {
      pawn: 0,
      knight: 1,
      queen: 2,
      king: 3,
      bishop: 4,
      rook: 5,
    };

    const SPRITE_SIZE = SPRITE_SIZE_PX;
    const SHEET_WIDTH = SPRITE_SIZE * SHEET_COLS;
    const SHEET_HEIGHT = SPRITE_SIZE * SHEET_ROWS;

    const SCALE = tileSize / SPRITE_SIZE;

    const colIndex = piece.color === "white" ? 0 : 1;
    const x = colIndex * SPRITE_SIZE;
    let row =
      piece.type === "rook" && piece.isKing
        ? CHECKER_KING_SPRITE_ROW
        : rowIndex[piece.type];
    const y = row * SPRITE_SIZE;

    return {
      backgroundImage: "url(/games/chess/chess-cat.png)",
      backgroundPosition: `${-x * SCALE}px ${-y * SCALE}px`,
      backgroundSize: `${SHEET_WIDTH * SCALE}px ${SHEET_HEIGHT * SCALE}px`,
      backgroundRepeat: "no-repeat",
      imageRendering: "pixelated",
      width: "100%",
      height: "100%",
    };
  };

  const isSquareSelected = (row, col) => {
    return (
      selectedSquare && selectedSquare.row === row && selectedSquare.col === col
    );
  };

  const isPossibleMove = (row, col) => {
    return possibleMoves.some((move) => move.row === row && move.col === col);
  };

  const getMoveMeta = (row, col) =>
    possibleMoves.find((m) => m.row === row && m.col === col);

  const isMandatoryPiece = (row, col) =>
    mandatoryPieceSquares.some((s) => s.row === row && s.col === col);

  const isComboContinueSquare = (row, col) =>
    comboContinuePiece &&
    comboContinuePiece.row === row &&
    comboContinuePiece.col === col;

  const isCheckSquare = (row, col) =>
    checkSquare &&
    checkSquare.row === row &&
    checkSquare.col === col;

  const getSquareClasses = (row, col) => {
    const isLight = (row + col) % 2 === 0;
    const piece = board[row][col];
    const isPossible = isPossibleMove(row, col);
    const selected = isSquareSelected(row, col);
    const moveMeta = getMoveMeta(row, col);
    const isCaptureMove = isPossible && moveMeta?.isCapture === true;
    const mandatory = isMandatoryPiece(row, col);

    let classes = `flex items-center justify-center cursor-pointer relative `;

    if (isLight) {
      classes += "bg-gray-300 ";
    } else {
      classes += "bg-gray-800 ";
    }

    if (selected) {
      if (isCheckSquare(row, col)) {
        classes +=
          "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] ";
      } else if (isComboContinueSquare(row, col)) {
        classes +=
          "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] ";
      } else {
        classes += "ring-4 ring-blue-500 ring-inset ";
      }
    } else if (isPossible) {
      if (singleLegalMoveHighlight && possibleMoves.length === 1) {
        classes +=
          "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse ";
      } else if (forcedCapture && isCaptureMove) {
        classes +=
          "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse ";
      } else {
        classes += "ring-2 ring-green-400 ring-inset ";
      }
    } else if (mandatory && piece && !selected) {
      classes += "ring-2 ring-orange-400 ring-inset ";
    } else if (isCheckSquare(row, col) && piece && !selected) {
      classes +=
        "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] ";
    }

    return classes;
  };

  const getSquareStyles = () => ({
    width: `${tileSize}px`,
    height: `${tileSize}px`,
  });

  const renderSquare = (row, col) => {
    const piece = board[row][col];
    const isPossible = isPossibleMove(row, col);
    const moveMeta = getMoveMeta(row, col);
    const isCaptureMove = isPossible && moveMeta?.isCapture === true;

    const dotClass =
      singleLegalMoveHighlight && possibleMoves.length === 1
        ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse"
        : forcedCapture && isCaptureMove
          ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]"
          : "w-4 h-4 bg-green-500 rounded-full opacity-60";

    const captureBorderClass =
      forcedCapture && isCaptureMove
        ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]"
        : "border-4 border-red-500";

    return (
      <div
        key={`${row}-${col}`}
        className={getSquareClasses(row, col)}
        style={getSquareStyles()}
        onClick={() => onSquareClick(row, col)}
      >
        {piece && (
          <div
            className="absolute inset-0 z-10 select-none pointer-events-none"
            style={getPieceStyles(piece)}
          />
        )}

        {isPossible && !piece && (
          <div className="absolute inset-0 flex items-center justify-center z-[5]">
            <div className={dotClass} />
          </div>
        )}

        {isPossible && piece && (
          <div
            className={`absolute inset-0 rounded pointer-events-none z-[5] ${captureBorderClass}`}
          />
        )}
      </div>
    );
  };

  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      squares.push(renderSquare(row, col));
    }
    return (
      <div key={row} className="flex">
        {squares}
      </div>
    );
  };

  const renderBoard = () => {
    const rows = [];
    for (let row = 0; row < 8; row++) {
      rows.push(renderRow(row));
    }
    return rows;
  };

  return (
    <div className="h-full w-full flex justify-center items-center overflow-visible">
      <div
        className="border-8 border-gray-700 shadow-2xl"
        style={{ boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)" }}
      >
        <div className="flex flex-col">{renderBoard()}</div>
      </div>
    </div>
  );
};

export default ChessBoard;
