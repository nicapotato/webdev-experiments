import React, { useState } from "react";
import ChessBoard from "../chess/ChessBoard";

const CheckersPage = () => {
  const [gameState, setGameState] = useState({
    board: initializeBoard(),
    currentPlayer: "red", // 'red' or 'black'
    selectedSquare: null,
    possibleMoves: [],
    gameStatus: "playing", // 'playing', 'red_wins', 'black_wins', 'draw'
    capturedPieces: { red: 0, black: 0 },
    moveHistory: [],
    mustCapture: false,
    captureSequence: [], // Track multiple captures in one turn
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const SIDE_IMAGE_WIDTH = 360; // px (approx width reservation for each tall image)
  const SIDE_IMAGE_GAP = 24; // px total gaps between images and board
  const TOTAL_SIDE_IMAGES_WIDTH = SIDE_IMAGE_WIDTH * 2 + SIDE_IMAGE_GAP * 2;

  function initializeBoard() {
    const board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Initialize red pieces (top 3 rows, dark squares only)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 1) {
          board[row][col] = { type: "checker", color: "red", isKing: false };
        }
      }
    }

    // Initialize black pieces (bottom 3 rows, dark squares only)
    for (let row = 5; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 1) {
          board[row][col] = { type: "checker", color: "black", isKing: false };
        }
      }
    }

    return board;
  }

  const handleSquareClick = (row, col) => {
    const clickedPiece = gameState.board[row][col];

    // If we're in a capture sequence, only allow continuing the sequence
    if (gameState.captureSequence.length > 0) {
      const lastMove =
        gameState.captureSequence[gameState.captureSequence.length - 1];
      if (lastMove.to.row !== row || lastMove.to.col !== col) {
        // Not continuing the capture sequence, invalid move
        return;
      }
    }

    // If no piece is selected and clicked square is empty or enemy piece, do nothing
    if (
      !gameState.selectedSquare &&
      (!clickedPiece || clickedPiece.color === gameState.currentPlayer)
    ) {
      // Select the piece if it belongs to current player
      if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
        const moves = getPossibleMoves(row, col, gameState.board);
        setGameState((prev) => ({
          ...prev,
          selectedSquare: { row, col },
          possibleMoves: moves,
        }));
      }
      return;
    }

    // If a piece is selected and clicking on a valid move
    if (
      gameState.selectedSquare &&
      gameState.possibleMoves.some(
        (move) => move.row === row && move.col === col,
      )
    ) {
      // Make the move
      const newBoard = gameState.board.map((row) => [...row]);
      const selectedPiece =
        newBoard[gameState.selectedSquare.row][gameState.selectedSquare.col];

      // Check if this is a capture move
      const isCapture = Math.abs(row - gameState.selectedSquare.row) === 2;

      if (isCapture) {
        // Remove the captured piece
        const capturedRow = (gameState.selectedSquare.row + row) / 2;
        const capturedCol = (gameState.selectedSquare.col + col) / 2;
        const capturedPiece = newBoard[capturedRow][capturedCol];
        newBoard[capturedRow][capturedCol] = null;

        // Update capture count
        const newCapturedPieces = { ...gameState.capturedPieces };
        newCapturedPieces[capturedPiece.color]++;

        // Move piece
        newBoard[row][col] = selectedPiece;
        newBoard[gameState.selectedSquare.row][gameState.selectedSquare.col] =
          null;

        // Check for king promotion
        const shouldPromote =
          (selectedPiece.color === "red" && row === 7) ||
          (selectedPiece.color === "black" && row === 0);
        if (shouldPromote && !selectedPiece.isKing) {
          newBoard[row][col] = { ...selectedPiece, isKing: true };
        }

        // Check if more captures are possible from this position
        const moreCaptures = getCaptureMoves(row, col, newBoard);
        if (moreCaptures.length > 0 && !gameState.captureSequence.length) {
          // Start a capture sequence
          const newCaptureSequence = [
            ...gameState.captureSequence,
            {
              from: gameState.selectedSquare,
              to: { row, col },
              captured: capturedPiece,
            },
          ];

          setGameState((prev) => ({
            ...prev,
            board: newBoard,
            selectedSquare: { row, col },
            possibleMoves: moreCaptures,
            capturedPieces: newCapturedPieces,
            captureSequence: newCaptureSequence,
          }));
          return;
        } else if (gameState.captureSequence.length > 0) {
          // Continue capture sequence
          const newCaptureSequence = [
            ...gameState.captureSequence,
            {
              from: gameState.selectedSquare,
              to: { row, col },
              captured: capturedPiece,
            },
          ];

          // Check if more captures are possible
          const moreCaptures = getCaptureMoves(row, col, newBoard);
          if (moreCaptures.length > 0) {
            setGameState((prev) => ({
              ...prev,
              board: newBoard,
              selectedSquare: { row, col },
              possibleMoves: moreCaptures,
              capturedPieces: newCapturedPieces,
              captureSequence: newCaptureSequence,
            }));
            return;
          } else {
            // End capture sequence
            const nextPlayer =
              gameState.currentPlayer === "red" ? "black" : "red";
            const gameStatus = checkGameEnd(newBoard, nextPlayer);

            setGameState((prev) => ({
              ...prev,
              board: newBoard,
              currentPlayer: nextPlayer,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus,
              capturedPieces: newCapturedPieces,
              captureSequence: [],
              moveHistory: [
                ...prev.moveHistory,
                {
                  piece: selectedPiece,
                  moves: newCaptureSequence,
                },
              ],
            }));
            return;
          }
        } else {
          // Single capture, end turn
          const nextPlayer =
            gameState.currentPlayer === "red" ? "black" : "red";
          const gameStatus = checkGameEnd(newBoard, nextPlayer);

          setGameState((prev) => ({
            ...prev,
            board: newBoard,
            currentPlayer: nextPlayer,
            selectedSquare: null,
            possibleMoves: [],
            gameStatus,
            capturedPieces: newCapturedPieces,
            captureSequence: [],
            moveHistory: [
              ...prev.moveHistory,
              {
                piece: selectedPiece,
                moves: [
                  {
                    from: gameState.selectedSquare,
                    to: { row, col },
                    captured: capturedPiece,
                  },
                ],
              },
            ],
          }));
          return;
        }
      } else {
        // Regular move (no capture)
        // Move piece
        newBoard[row][col] = selectedPiece;
        newBoard[gameState.selectedSquare.row][gameState.selectedSquare.col] =
          null;

        // Check for king promotion
        const shouldPromote =
          (selectedPiece.color === "red" && row === 7) ||
          (selectedPiece.color === "black" && row === 0);
        if (shouldPromote && !selectedPiece.isKing) {
          newBoard[row][col] = { ...selectedPiece, isKing: true };
        }

        const nextPlayer = gameState.currentPlayer === "red" ? "black" : "red";
        const gameStatus = checkGameEnd(newBoard, nextPlayer);

        setGameState((prev) => ({
          ...prev,
          board: newBoard,
          currentPlayer: nextPlayer,
          selectedSquare: null,
          possibleMoves: [],
          gameStatus,
          captureSequence: [],
          moveHistory: [
            ...prev.moveHistory,
            {
              piece: selectedPiece,
              moves: [
                {
                  from: prev.selectedSquare,
                  to: { row, col },
                  captured: null,
                },
              ],
            },
          ],
        }));
        return;
      }
    }

    // If clicking elsewhere, deselect
    setGameState((prev) => ({
      ...prev,
      selectedSquare: null,
      possibleMoves: [],
    }));
  };

  const getPossibleMoves = (row, col, board) => {
    const piece = board[row][col];
    if (!piece || piece.type !== "checker") return [];

    const moves = [];
    const captures = getCaptureMoves(row, col, board);

    // If captures are available, only show capture moves
    if (captures.length > 0) {
      return captures;
    }

    // Otherwise, show regular moves
    const directions = piece.isKing
      ? [
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ] // Kings can move in all diagonal directions
      : piece.color === "red"
        ? [
            [1, -1],
            [1, 1],
          ]
        : [
            [-1, -1],
            [-1, 1],
          ]; // Regular pieces move forward only

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (
        newRow >= 0 &&
        newRow < 8 &&
        newCol >= 0 &&
        newCol < 8 &&
        !board[newRow][newCol]
      ) {
        moves.push({ row: newRow, col: newCol });
      }
    }

    return moves;
  };

  const getCaptureMoves = (row, col, board) => {
    const piece = board[row][col];
    if (!piece || piece.type !== "checker") return [];

    const moves = [];
    const directions = piece.isKing
      ? [
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ]
      : piece.color === "red"
        ? [
            [1, -1],
            [1, 1],
          ]
        : [
            [-1, -1],
            [-1, 1],
          ];

    for (const [dRow, dCol] of directions) {
      const jumpRow = row + 2 * dRow;
      const jumpCol = col + 2 * dCol;
      const middleRow = row + dRow;
      const middleCol = col + dCol;

      if (
        jumpRow >= 0 &&
        jumpRow < 8 &&
        jumpCol >= 0 &&
        jumpCol < 8 &&
        !board[jumpRow][jumpCol]
      ) {
        const middlePiece = board[middleRow][middleCol];
        if (middlePiece && middlePiece.color !== piece.color) {
          moves.push({ row: jumpRow, col: jumpCol, isCapture: true });
        }
      }
    }

    return moves;
  };

  const checkGameEnd = (board, currentPlayer) => {
    // Check if current player has any pieces left
    let hasPieces = false;
    let hasMoves = false;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.color === currentPlayer) {
          hasPieces = true;
          const moves = getPossibleMoves(row, col, board);
          if (moves.length > 0) {
            hasMoves = true;
            break;
          }
        }
      }
      if (hasMoves) break;
    }

    if (!hasPieces) {
      return currentPlayer === "red" ? "black_wins" : "red_wins";
    }

    if (!hasMoves) {
      return currentPlayer === "red" ? "black_wins" : "red_wins";
    }

    return "playing";
  };

  const resetGame = () => {
    setGameState({
      board: initializeBoard(),
      currentPlayer: "red",
      selectedSquare: null,
      possibleMoves: [],
      gameStatus: "playing",
      capturedPieces: { red: 0, black: 0 },
      moveHistory: [],
      mustCapture: false,
      captureSequence: [],
    });
  };

  // Convert checkers pieces to chess pieces for the board display
  const convertBoardForChessBoard = (checkersBoard) => {
    return checkersBoard.map((row) =>
      row.map((piece) => {
        if (!piece) return null;
        // Use rook as checker piece
        return {
          type: "rook",
          color: piece.color === "red" ? "white" : "black", // Red checkers = white rooks, Black checkers = black rooks
          isKing: piece.isKing,
        };
      }),
    );
  };

  const chessBoard = convertBoardForChessBoard(gameState.board);

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
        height={128}
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
        {/* Checkers Area: Side images flanking the board */}
        <div
          className="flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6"
          style={{
            height: "100vh",
            paddingTop: isSidebarOpen ? 0 : 5,
            paddingBottom: isSidebarOpen ? 0 : 5,
          }}
        >
          {/* Left: Black checker portrait */}
          <img
            src="/games/chess/dark-cat.jpg"
            alt="Black player"
            className={`object-cover object-center border-4 ${gameState.currentPlayer === "black" ? "border-yellow-400" : "border-gray-700"}`}
            style={{
              height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
              width: SIDE_IMAGE_WIDTH,
              boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
            }}
          />

          {/* Checkers Board */}
          <div>
            <ChessBoard
              board={chessBoard}
              selectedSquare={gameState.selectedSquare}
              possibleMoves={gameState.possibleMoves}
              onSquareClick={handleSquareClick}
              sideImagesWidth={TOTAL_SIDE_IMAGES_WIDTH}
              isSidebarOpen={isSidebarOpen}
            />
          </div>

          {/* Right: Red checker portrait */}
          <img
            src="/games/chess/light-cat.jpg"
            alt="Red player"
            className={`object-cover object-center border-4 ${gameState.currentPlayer === "red" ? "border-yellow-400" : "border-gray-700"}`}
            style={{
              height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
              width: SIDE_IMAGE_WIDTH,
              boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
            }}
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
                Checkers Game
              </h1>
            </div>

            {/* Game Status and Controls */}
            <div className="mb-6">
              <div className="flex flex-col gap-3 mb-4">
                <div
                  className={`px-4 py-2 text-center text-xs border-2 ${gameState.currentPlayer === "red" ? "bg-red-600 border-red-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`}
                  style={{ fontSize: "10px" }}
                >
                  {gameState.currentPlayer === "red" ? "Red" : "Black"} to move
                </div>
                {gameState.gameStatus === "red_wins" && (
                  <div
                    className="px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Red Wins!
                  </div>
                )}
                {gameState.gameStatus === "black_wins" && (
                  <div
                    className="px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Black Wins!
                  </div>
                )}
                {gameState.gameStatus === "draw" && (
                  <div
                    className="px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Draw!
                  </div>
                )}
                {gameState.captureSequence.length > 0 && (
                  <div
                    className="px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white"
                    style={{ fontSize: "10px" }}
                  >
                    Continue jumping!
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
                    Red: {gameState.capturedPieces.red}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {Array.from(
                      { length: gameState.capturedPieces.red },
                      (_, i) => (
                        <div
                          key={i}
                          className="text-lg"
                          style={{
                            fontSize: "14px",
                            filter: "drop-shadow(1px 1px 0px #000)",
                          }}
                        >
                          ♖
                        </div>
                      ),
                    )}
                    {gameState.capturedPieces.red === 0 && (
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
                    Black: {gameState.capturedPieces.black}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {Array.from(
                      { length: gameState.capturedPieces.black },
                      (_, i) => (
                        <div
                          key={i}
                          className="text-lg"
                          style={{
                            fontSize: "14px",
                            filter: "drop-shadow(1px 1px 0px #000)",
                          }}
                        >
                          ♜
                        </div>
                      ),
                    )}
                    {gameState.capturedPieces.black === 0 && (
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
                      {move.piece.color}{" "}
                      {move.piece.isKing ? "King" : "Checker"}:{" "}
                      {move.moves
                        .map(
                          (m, i) =>
                            `${String.fromCharCode(97 + m.from.col)}${8 - m.from.row}→${String.fromCharCode(97 + m.to.col)}${8 - m.to.row}${m.captured ? "x" : ""}`,
                        )
                        .join(", ")}
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
    </div>
  );
};

export default CheckersPage;
