import React, { useState, useEffect } from "react";
import {
  ChessPieceType,
  ChessColor,
  positionsEqual,
} from "../../chess/chess-game-multiplayer";

const ChessBoardMultiplayer = ({
  board,
  selectedSquare,
  possibleMoves,
  onSquareClick,
  sideImagesWidth = 0,
  isSidebarOpen = true,
  showGrid = false,
  currentPlayerColor = null,
}) => {
  const [tileSize, setTileSize] = useState(64);

  // Calculate dynamic tile size based on viewport dimensions
  const getDynamicTileSize = () => {
    if (typeof window !== "undefined") {
      // Use almost the full viewport height for a tall board
      const availableHeight = window.innerHeight * 0.98;
      // Subtract sidebar only if it is open, and any side images width provided by parent
      const reservedSidebar = isSidebarOpen ? 384 : 0;
      const reservedSides = sideImagesWidth || 0;
      const availableWidth =
        (window.innerWidth - reservedSidebar - reservedSides) * 0.98;

      // Use the smaller of the two to maintain square proportions
      const maxSize = Math.min(availableHeight, availableWidth);
      return Math.floor(maxSize / 8);
    }
    return 64; // fallback
  };

  useEffect(() => {
    const updateTileSize = () => {
      setTileSize(getDynamicTileSize());
    };

    updateTileSize();
    window.addEventListener("resize", updateTileSize);

    return () => window.removeEventListener("resize", updateTileSize);
  }, [isSidebarOpen, sideImagesWidth]);

  const TILE_PX = tileSize;

  const getPieceStyles = (piece) => {
    if (!piece || piece.type === ChessPieceType.Empty) return {};

    // Sprite sheet details
    // 2 columns (0:white, 1:black), 6 rows: 0 pawn, 1 knight, 2 queen, 3 king, 4 bishop, 5 rook
    const rowIndex = {
      [ChessPieceType.Pawn]: 0,
      [ChessPieceType.Knight]: 1,
      [ChessPieceType.Queen]: 2,
      [ChessPieceType.King]: 3,
      [ChessPieceType.Bishop]: 4,
      [ChessPieceType.Rook]: 5,
    };

    const SPRITE_SIZE = 16; // px per sprite
    const SHEET_COLS = 2;
    const SHEET_ROWS = 8;
    const SHEET_WIDTH = SPRITE_SIZE * SHEET_COLS; // 32px
    const SHEET_HEIGHT = SPRITE_SIZE * SHEET_ROWS; // 96px

    const SCALE = tileSize / SPRITE_SIZE;

    const colIndex = piece.color === ChessColor.White ? 0 : 1;
    const x = colIndex * SPRITE_SIZE;
    const y = rowIndex[piece.type] * SPRITE_SIZE;

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
    return selectedSquare && positionsEqual(selectedSquare, { row, col });
  };

  const isPossibleMove = (row, col) => {
    return possibleMoves.some((move) => positionsEqual(move, { row, col }));
  };

  const getSquareClasses = (row, col) => {
    const isLight = (row + col) % 2 === 0;
    let classes = `flex items-center justify-center cursor-pointer relative `;

    if (isLight) {
      classes += "bg-gray-300 ";
    } else {
      classes += "bg-gray-800 ";
    }

    if (isSquareSelected(row, col)) {
      classes += "ring-4 ring-blue-500 ring-inset ";
    }

    if (isPossibleMove(row, col)) {
      classes += "ring-2 ring-green-400 ring-inset ";
    }

    return classes;
  };

  const getSquareStyles = () => ({
    width: `${tileSize}px`,
    height: `${tileSize}px`,
  });

  const renderSquare = (row, col) => {
    const piece = board[row]?.[col];
    const isPossible = isPossibleMove(row, col);

    return (
      <div
        key={`${row}-${col}`}
        className={getSquareClasses(row, col)}
        style={getSquareStyles()}
        onClick={() => onSquareClick(row, col)}
      >
        {/* Chess piece (fills entire tile) */}
        {piece && piece.type !== ChessPieceType.Empty && (
          <div
            className="absolute inset-0 z-10 select-none pointer-events-none"
            style={getPieceStyles(piece)}
          />
        )}

        {/* Possible move indicator */}
        {isPossible && piece && piece.type === ChessPieceType.Empty && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-green-500 rounded-full opacity-60"></div>
          </div>
        )}

        {/* Capture indicator */}
        {isPossible && piece && piece.type !== ChessPieceType.Empty && (
          <div className="absolute inset-0 border-4 border-red-500 rounded pointer-events-none"></div>
        )}

        {/* Grid coordinates (optional) */}
        {showGrid && (
          <div
            className="absolute bottom-0 right-0 text-xs text-gray-500 p-1"
            style={{
              fontSize: "8px",
              fontFamily: "'Press Start 2P', monospace",
            }}
          >
            {String.fromCharCode(97 + col)}
            {8 - row}
          </div>
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
    // If current player is black, render board from row 7 to row 0 (flipped)
    // If current player is white or null, render from row 0 to row 7 (normal)
    const isFlipped = currentPlayerColor === ChessColor.Black;

    if (isFlipped) {
      for (let row = 7; row >= 0; row--) {
        rows.push(renderRow(row));
      }
    } else {
      for (let row = 0; row < 8; row++) {
        rows.push(renderRow(row));
      }
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

export default ChessBoardMultiplayer;
