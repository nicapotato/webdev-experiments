import React, { useState } from "react";
import ChessBoard from "./ChessBoard";
import {
  applyMove,
  cloneBoard,
  defaultCastlingRights,
  findKingSquare,
  isKingInCheck,
  isSquareAttacked,
} from "./chess-rules";

const ChessPage = () => {
  const [gameState, setGameState] = useState({
    board: initializeBoard(),
    currentPlayer: "white",
    selectedSquare: null,
    possibleMoves: [],
    gameStatus: "playing", // 'playing', 'check', 'checkmate', 'stalemate'
    capturedPieces: { white: [], black: [] },
    moveHistory: [],
    pendingPromotion: null, // { row, col, color }
    castlingRights: defaultCastlingRights(),
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const SIDE_IMAGE_WIDTH = 360; // px (approx width reservation for each tall image)
  const SIDE_IMAGE_GAP = 24; // px total gaps between images and board
  const TOTAL_SIDE_IMAGES_WIDTH = SIDE_IMAGE_WIDTH * 2 + SIDE_IMAGE_GAP * 2;

  const sidePortraitStyle = (isActive) => ({
    height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
    width: SIDE_IMAGE_WIDTH,
    filter: isActive ? "brightness(1.2)" : "brightness(0.5)",
    boxShadow: isActive
      ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)"
      : "0 0 0 2px #000, inset 0 0 0 1px #000",
  });

  function initializeBoard() {
    const board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Initialize pawns
    for (let i = 0; i < 8; i++) {
      board[1][i] = { type: "pawn", color: "black" };
      board[6][i] = { type: "pawn", color: "white" };
    }

    // Initialize other pieces
    const pieceOrder = [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ];

    for (let i = 0; i < 8; i++) {
      board[0][i] = { type: pieceOrder[i], color: "black" };
      board[7][i] = { type: pieceOrder[i], color: "white" };
    }

    return board;
  }

  const handleSquareClick = (row, col) => {
    if (
      gameState.gameStatus === "checkmate" ||
      gameState.gameStatus === "stalemate"
    ) {
      return;
    }

    const clickedPiece = gameState.board[row][col];
    const selectedPiece = gameState.selectedSquare
      ? gameState.board[gameState.selectedSquare.row][
          gameState.selectedSquare.col
        ]
      : null;

    if (!gameState.selectedSquare && !clickedPiece) {
      return;
    }

    if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
      const moves = getLegalMoves(
        row,
        col,
        gameState.board,
        gameState.castlingRights,
      );
      setGameState((prev) => ({
        ...prev,
        selectedSquare: { row, col },
        possibleMoves: moves,
      }));
      return;
    }

    if (
      gameState.selectedSquare &&
      gameState.possibleMoves.some(
        (move) => move.row === row && move.col === col,
      )
    ) {
      const from = gameState.selectedSquare;
      const { newBoard, captured: capturedPiece, rights: newRights } =
        applyMove(gameState.board, from, { row, col }, gameState.castlingRights);

      if (
        selectedPiece.type === "pawn" &&
        ((selectedPiece.color === "white" && row === 0) ||
          (selectedPiece.color === "black" && row === 7))
      ) {
        setGameState((prev) => ({
          ...prev,
          board: newBoard,
          castlingRights: newRights,
          selectedSquare: null,
          possibleMoves: [],
          pendingPromotion: {
            row,
            col,
            color: selectedPiece.color,
            from,
          },
        }));
        return;
      }

      const newCapturedPieces = { ...gameState.capturedPieces };
      if (capturedPiece) {
        newCapturedPieces[capturedPiece.color].push(capturedPiece);
      }

      const nextPlayer =
        gameState.currentPlayer === "white" ? "black" : "white";
      const isInCheck = isKingInCheck(nextPlayer, newBoard);
      const hasValidMoves = hasAnyValidMoves(nextPlayer, newBoard, newRights);

      let newGameStatus = "playing";
      if (isInCheck) {
        newGameStatus = !hasValidMoves ? "checkmate" : "check";
      } else if (!hasValidMoves) {
        newGameStatus = "stalemate";
      }

      setGameState((prev) => ({
        ...prev,
        board: newBoard,
        castlingRights: newRights,
        currentPlayer: prev.currentPlayer === "white" ? "black" : "white",
        selectedSquare: null,
        possibleMoves: [],
        gameStatus: newGameStatus,
        capturedPieces: newCapturedPieces,
        moveHistory: [
          ...prev.moveHistory,
          {
            from: prev.selectedSquare,
            to: { row, col },
            piece: selectedPiece,
            captured: capturedPiece,
          },
        ],
      }));
      return;
    }

    setGameState((prev) => ({
      ...prev,
      selectedSquare: null,
      possibleMoves: [],
    }));
  };

  const getPseudoLegalMoves = (row, col, board, castlingRights) => {
    const piece = board[row][col];
    if (!piece) return [];

    const moves = [];

    switch (piece.type) {
      case "pawn":
        moves.push(...getPawnMoves(row, col, piece.color, board));
        break;
      case "rook":
        moves.push(...getRookMoves(row, col, piece.color, board));
        break;
      case "knight":
        moves.push(...getKnightMoves(row, col, piece.color, board));
        break;
      case "bishop":
        moves.push(...getBishopMoves(row, col, piece.color, board));
        break;
      case "queen":
        moves.push(...getQueenMoves(row, col, piece.color, board));
        break;
      case "king":
        moves.push(
          ...getKingMoves(row, col, piece.color, board, castlingRights),
        );
        break;
    }

    return moves;
  };

  const getLegalMoves = (row, col, board, castlingRights) => {
    const piece = board[row][col];
    if (!piece) return [];
    const pseudo = getPseudoLegalMoves(row, col, board, castlingRights);
    const color = piece.color;
    return pseudo.filter((to) => {
      const { newBoard } = applyMove(
        board,
        { row, col },
        to,
        castlingRights,
      );
      let testBoard = newBoard;
      if (
        piece.type === "pawn" &&
        (to.row === 0 || to.row === 7)
      ) {
        testBoard = cloneBoard(newBoard);
        testBoard[to.row][to.col] = { type: "queen", color: piece.color };
      }
      return !isKingInCheck(color, testBoard);
    });
  };

  const getPawnMoves = (row, col, color, board) => {
    const moves = [];
    const direction = color === "white" ? -1 : 1;
    const startRow = color === "white" ? 6 : 1;

    // Forward move
    if (
      row + direction >= 0 &&
      row + direction < 8 &&
      !board[row + direction][col]
    ) {
      moves.push({ row: row + direction, col });

      // Double move from starting position
      if (row === startRow && !board[row + 2 * direction][col]) {
        moves.push({ row: row + 2 * direction, col });
      }
    }

    // Diagonal captures
    for (const colOffset of [-1, 1]) {
      const newCol = col + colOffset;
      if (
        newCol >= 0 &&
        newCol < 8 &&
        row + direction >= 0 &&
        row + direction < 8
      ) {
        const targetPiece = board[row + direction][newCol];
        if (targetPiece && targetPiece.color !== color) {
          moves.push({ row: row + direction, col: newCol });
        }
      }
    }

    return moves;
  };

  const getRookMoves = (row, col, color, board) => {
    const moves = [];
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (const [dRow, dCol] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = row + dRow * i;
        const newCol = col + dCol * i;

        if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break;

        const targetPiece = board[newRow][newCol];
        if (!targetPiece) {
          moves.push({ row: newRow, col: newCol });
        } else {
          if (targetPiece.color !== color) {
            moves.push({ row: newRow, col: newCol });
          }
          break;
        }
      }
    }

    return moves;
  };

  const getKnightMoves = (row, col, color, board) => {
    const moves = [];
    const knightMoves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (const [dRow, dCol] of knightMoves) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const targetPiece = board[newRow][newCol];
        if (!targetPiece || targetPiece.color !== color) {
          moves.push({ row: newRow, col: newCol });
        }
      }
    }

    return moves;
  };

  const getBishopMoves = (row, col, color, board) => {
    const moves = [];
    const directions = [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];

    for (const [dRow, dCol] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = row + dRow * i;
        const newCol = col + dCol * i;

        if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break;

        const targetPiece = board[newRow][newCol];
        if (!targetPiece) {
          moves.push({ row: newRow, col: newCol });
        } else {
          if (targetPiece.color !== color) {
            moves.push({ row: newRow, col: newCol });
          }
          break;
        }
      }
    }

    return moves;
  };

  const getQueenMoves = (row, col, color, board) => {
    return [
      ...getRookMoves(row, col, color, board),
      ...getBishopMoves(row, col, color, board),
    ];
  };

  const getKingMoves = (row, col, color, board, castlingRights) => {
    const moves = [];
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        const targetPiece = board[newRow][newCol];
        if (!targetPiece || targetPiece.color !== color) {
          moves.push({ row: newRow, col: newCol });
        }
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
          moves.push({ row: 7, col: 6 });
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
          moves.push({ row: 7, col: 2 });
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
          moves.push({ row: 0, col: 6 });
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
          moves.push({ row: 0, col: 2 });
        }
      }
    }

    return moves;
  };

  const hasAnyValidMoves = (color, board, castlingRights) => {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.color === color) {
          const moves = getLegalMoves(row, col, board, castlingRights);
          if (moves.length > 0) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const promotePawn = (pieceType) => {
    if (!gameState.pendingPromotion) return;

    const { row, col, color, from } = gameState.pendingPromotion;
    const newBoard = gameState.board.map((r) => [...r]);
    newBoard[row][col] = { type: pieceType, color };

    const nextPlayer = color === "white" ? "black" : "white";
    const isInCheck = isKingInCheck(nextPlayer, newBoard);
    const hasValidMoves = hasAnyValidMoves(
      nextPlayer,
      newBoard,
      gameState.castlingRights,
    );

    let newGameStatus = "playing";
    if (isInCheck) {
      newGameStatus = !hasValidMoves ? "checkmate" : "check";
    } else if (!hasValidMoves) {
      newGameStatus = "stalemate";
    }

    setGameState((prev) => ({
      ...prev,
      board: newBoard,
      currentPlayer: prev.currentPlayer === "white" ? "black" : "white",
      gameStatus: newGameStatus,
      pendingPromotion: null,
      moveHistory: [
        ...prev.moveHistory,
        {
          from,
          to: { row, col },
          piece: { type: pieceType, color },
          captured: null,
          promotion: true,
        },
      ],
    }));
  };

  const resetGame = () => {
    setGameState({
      board: initializeBoard(),
      currentPlayer: "white",
      selectedSquare: null,
      possibleMoves: [],
      gameStatus: "playing",
      capturedPieces: { white: [], black: [] },
      moveHistory: [],
      pendingPromotion: null,
      castlingRights: defaultCastlingRights(),
    });
  };

  const checkSquare =
    gameState.gameStatus === "check" ||
    gameState.gameStatus === "checkmate"
      ? findKingSquare(gameState.board, gameState.currentPlayer)
      : null;

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex flex-col"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {/* Preload chess sprites */}
      <img
        src="/games/chess/chess-cat.png"
        alt="chess sprites"
        className="hidden"
        width={32}
        height={144}
      />

      {/* Sidebar Toggle Button (always visible) */}
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-[100] bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-xs"
        style={{
          fontSize: "10px",
          fontFamily: "'Press Start 2P', monospace",
          boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
        }}
        aria-pressed={isSidebarOpen}
        aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
      >
        {isSidebarOpen ? "Hide Panel" : "Show Panel"}
      </button>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chess Area: Side images flanking the board */}
        <div
          className="flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6"
          style={{
            height: "100vh",
            paddingTop: isSidebarOpen ? 0 : 5,
            paddingBottom: isSidebarOpen ? 0 : 5,
          }}
        >
          {/* Left: Dark piece portrait (Black) */}
          <img
            src="/games/chess/dark-cat.jpg"
            alt="Black player"
            className={`object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${gameState.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`}
            style={sidePortraitStyle(gameState.currentPlayer === "black")}
          />

          {/* Chess Board */}
          <div>
            <ChessBoard
              board={gameState.board}
              selectedSquare={gameState.selectedSquare}
              possibleMoves={gameState.possibleMoves}
              onSquareClick={handleSquareClick}
              sideImagesWidth={TOTAL_SIDE_IMAGES_WIDTH}
              isSidebarOpen={isSidebarOpen}
              checkSquare={checkSquare}
            />
          </div>

          {/* Right: Light piece portrait (White) */}
          <img
            src="/games/chess/light-cat.jpg"
            alt="White player"
            className={`object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${gameState.currentPlayer === "white" ? "border-yellow-300" : "border-gray-700"}`}
            style={sidePortraitStyle(gameState.currentPlayer === "white")}
          />
        </div>

        {/* Right Panel - Secondary info using remaining space */}
        {isSidebarOpen && (
          <div className="w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto">
            {/* Title */}
            <div className="mb-6">
              <h1
                className="text-lg mb-2 text-green-400"
                style={{ fontSize: "16px", textShadow: "2px 2px 0px #000" }}
              >
                Chess Game
              </h1>
            </div>

            {/* Game Status and Controls */}
            <div className="mb-6">
              <div className="flex flex-col gap-3 mb-4">
                <div
                  className={`px-4 py-2 text-center text-xs border-2 ${gameState.currentPlayer === "white" ? "bg-blue-600 border-blue-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`}
                  style={{ fontSize: "10px" }}
                >
                  {gameState.currentPlayer === "white" ? "White" : "Black"} to
                  move
                </div>
                {gameState.gameStatus === "check" && (
                  <div
                    className="px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Check!
                  </div>
                )}
                {gameState.gameStatus === "checkmate" && (
                  <div
                    className="px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Checkmate!
                  </div>
                )}
                {gameState.gameStatus === "stalemate" && (
                  <div
                    className="px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Stalemate!
                  </div>
                )}
              </div>

              <button
                onClick={resetGame}
                className="w-full bg-green-600 border-2 border-green-400 hover:bg-green-500 px-6 py-3 text-xs text-white transition-colors"
                style={{
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                New Game
              </button>
            </div>

            {/* Game Information Panels */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="bg-gray-700 p-4 border-2 border-gray-600">
                <h3
                  className="text-xs mb-3 text-green-400"
                  style={{
                    fontSize: "10px",
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  Captured Pieces
                </h3>

                <div className="mb-4">
                  <h4
                    className="text-xs text-gray-300 mb-2"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    White:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {gameState.capturedPieces.white.map((piece, index) => (
                      <div
                        key={index}
                        className="text-lg"
                        style={{
                          fontSize: "14px",
                          filter: "drop-shadow(1px 1px 0px #000)",
                        }}
                      >
                        {getPieceSymbol(piece)}
                      </div>
                    ))}
                    {gameState.capturedPieces.white.length === 0 && (
                      <span
                        className="text-gray-500 text-xs"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        None
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h4
                    className="text-xs text-gray-300 mb-2"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    Black:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {gameState.capturedPieces.black.map((piece, index) => (
                      <div
                        key={index}
                        className="text-lg"
                        style={{
                          fontSize: "14px",
                          filter: "drop-shadow(1px 1px 0px #000)",
                        }}
                      >
                        {getPieceSymbol(piece)}
                      </div>
                    ))}
                    {gameState.capturedPieces.black.length === 0 && (
                      <span
                        className="text-gray-500 text-xs"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        None
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-4 border-2 border-gray-600 flex-1">
                <h3
                  className="text-xs mb-3 text-green-400"
                  style={{
                    fontSize: "10px",
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  Move History
                </h3>
                <div className="overflow-y-auto max-h-64">
                  {gameState.moveHistory.slice(-12).map((move, index) => (
                    <div
                      key={index}
                      className="mb-2 text-xs text-gray-200"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      {move.piece.color} {move.piece.type}:{" "}
                      {String.fromCharCode(97 + move.from.col)}
                      {8 - move.from.row} →{" "}
                      {String.fromCharCode(97 + move.to.col)}
                      {8 - move.to.row}
                      {move.captured && ` (x${move.captured.type})`}
                      {move.promotion && ` (=${move.piece.type})`}
                    </div>
                  ))}
                  {gameState.moveHistory.length === 0 && (
                    <div
                      className="text-gray-500 italic text-xs"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      No moves yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pawn Promotion Dialog */}
      {gameState.pendingPromotion && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            className="bg-gray-800 p-8 border-4 border-gray-600 rounded-lg"
            style={{
              boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)",
            }}
          >
            <h3
              className="text-sm font-bold mb-6 text-center text-green-400"
              style={{
                fontSize: "10px",
                fontFamily: "'Press Start 2P', monospace",
                textShadow: "2px 2px 0px #000",
              }}
            >
              Choose promotion piece
            </h3>
            <div className="flex gap-4 justify-center">
              {["queen", "rook", "bishop", "knight"].map((pieceType) => (
                <button
                  key={pieceType}
                  onClick={() => promotePawn(pieceType)}
                  className="w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors"
                  style={{
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000",
                  }}
                >
                  {getPieceSymbol({
                    type: pieceType,
                    color: gameState.pendingPromotion.color,
                  })}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getPieceSymbol = (piece) => {
  const symbols = {
    king: { white: "♔", black: "♚" },
    queen: { white: "♕", black: "♛" },
    rook: { white: "♖", black: "♜" },
    bishop: { white: "♗", black: "♝" },
    knight: { white: "♘", black: "♞" },
    pawn: { white: "♙", black: "♟" },
  };

  return symbols[piece.type][piece.color];
};

export default ChessPage;
