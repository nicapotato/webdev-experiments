import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Wifi,
  WifiOff,
  RefreshCw,
  Play,
  Pause,
  Grid3X3,
  Crown,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import ChessBoardMultiplayer from "../chess/ChessBoardMultiplayer";
import {
  ChessColor,
  ChessPieceType,
} from "@/games/multiplayer-games/chess/chess-game-multiplayer";
import {
  countTotalLegalMoves,
  getMandatoryCapturePiecePositions,
} from "@/games/checkers/checkers-legal-stats";
import {
  CheckersGameClient,
  CheckersPosition,
  CheckersMove,
  CheckersColor,
  type CheckersGameState,
  type CheckersPlayer,
  type CheckersPiece,
  generateCheckersRoomId,
  getCheckersColorName,
  positionsEqual,
  isValidCheckersPosition,
  BOARD_SIZE,
} from "@/games/multiplayer-games/checkers/checkers-game-multiplayer";
import { getCurrentPlayer } from "@/lib/player-utils";
import {
  allowMultiplayerJoin,
  useMultiplayerRoomGate,
} from "@/lib/multiplayer-join-gate";

export default function CheckersGamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const roomId = useMultiplayerRoomGate("checkers");
  const roomPasswordFromNav = (
    location.state as { roomPassword?: string } | undefined
  )?.roomPassword;

  // Game state
  const [gameState, setGameState] = useState<CheckersGameState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: "", username: "" });
  const [gameClient, setGameClient] = useState<CheckersGameClient | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<CheckersPosition | null>(
    null,
  );
  const [possibleMoves, setPossibleMoves] = useState<CheckersPosition[]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<CheckersPlayer | null>(
    null,
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const SIDE_IMAGE_WIDTH = 360; // px (approx width reservation for each tall image)
  const SIDE_IMAGE_GAP = 24; // px total gaps between images and board
  const TOTAL_SIDE_IMAGES_WIDTH = SIDE_IMAGE_WIDTH * 2 + SIDE_IMAGE_GAP * 2;

  // Use ref to hold game client for cleanup functions
  const gameClientRef = useRef<CheckersGameClient | null>(null);

  const getCaptureMovesForPiece = (
    piece: CheckersPiece,
    position: CheckersPosition,
    board: (CheckersPiece | null)[][],
  ): CheckersPosition[] => {
    const moves: CheckersPosition[] = [];
    // Captures may be in any diagonal for men (American rules); non-capture steps stay forward-only elsewhere
    const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];

    for (const [dRow, dCol] of directions) {
      const jumpRow = position.row + 2 * dRow;
      const jumpCol = position.col + 2 * dCol;
      const middleRow = position.row + dRow;
      const middleCol = position.col + dCol;

      if (
        jumpRow >= 0 &&
        jumpRow < BOARD_SIZE &&
        jumpCol >= 0 &&
        jumpCol < BOARD_SIZE &&
        !board[jumpRow][jumpCol]
      ) {
        const middlePiece = board[middleRow][middleCol];
        if (middlePiece && middlePiece.color !== piece.color) {
          moves.push({ row: jumpRow, col: jumpCol });
        }
      }
    }

    return moves;
  };

  const hasAnyCaptureForPlayer = (
    board: (CheckersPiece | null)[][],
    color: CheckersColor,
  ): boolean => {
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const p = board[row][col];
        if (
          p &&
          p.color === color &&
          getCaptureMovesForPiece(p, { row, col }, board).length > 0
        ) {
          return true;
        }
      }
    }
    return false;
  };

  // Calculate possible moves for a piece (simplified for frontend display)
  const calculatePossibleMoves = (
    piece: CheckersPiece,
    position: CheckersPosition,
    board: (CheckersPiece | null)[][],
  ) => {
    if (!piece || piece.type !== "checker") return [];

    const captures = getCaptureMovesForPiece(piece, position, board);

    const asCaptures = captures.map((m) => ({ ...m, isCapture: true }));

    if (hasAnyCaptureForPlayer(board, piece.color)) {
      return asCaptures;
    }

    if (captures.length > 0) {
      return asCaptures;
    }

    const moves: CheckersPosition[] = [];
    const directions = piece.isKing
      ? [
          [-1, -1],
          [-1, 1],
          [1, -1],
          [1, 1],
        ]
      : piece.color === CheckersColor.Red
        ? [
            [1, -1],
            [1, 1],
          ]
        : [
            [-1, -1],
            [-1, 1],
          ];

    for (const [dRow, dCol] of directions) {
      const newRow = position.row + dRow;
      const newCol = position.col + dCol;

      if (
        newRow >= 0 &&
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        !board[newRow][newCol]
      ) {
        moves.push({ row: newRow, col: newCol });
      }
    }

    return moves;
  };

  // Generate consistent player info
  useEffect(() => {
    const { playerId, username } = getCurrentPlayer();
    setCurrentUser({ id: playerId, username });
  }, []);

  // Initialize game client
  useEffect(() => {
    if (!roomId || !currentUser.id) return;

    const initializeGame = async () => {
      try {
        setIsLoading(true);
        const client = new CheckersGameClient(
          roomId,
          currentUser.id,
          currentUser.username,
          roomPasswordFromNav,
        );
        setGameClient(client);
        gameClientRef.current = client;

        // Set up event handlers
        client.onGameState((newGameState) => {
          // Force a deep clone to ensure React detects the change
          const clonedGameState = JSON.parse(JSON.stringify(newGameState));
          setGameState(clonedGameState);

          // Find current player
          const player = clonedGameState.players.find(
            (p: CheckersPlayer) => p.id === currentUser.id,
          );
          setCurrentPlayer(player || null);

          const continuingMultiJump =
            clonedGameState.status === "playing" &&
            clonedGameState.mustCapture &&
            clonedGameState.captureSequence.length > 0 &&
            player &&
            player.color === clonedGameState.currentPlayer;

          // Clear selection if it's not the player's turn or game is finished
          if (
            player &&
            (player.color !== clonedGameState.currentPlayer ||
              clonedGameState.status !== "playing") &&
            !continuingMultiJump
          ) {
            setSelectedSquare(null);
            setPossibleMoves([]);
          }
        });

        client.onConnection((connected) => {
          setIsConnected(connected);
          if (connected) {
            allowMultiplayerJoin(roomId, "checkers");
            toast.success("Connected to checkers game!");
          } else {
            toast.error(
              "Disconnected from checkers game. You can try refreshing the page to reconnect.",
            );
          }
        });

        client.onError((error) => {
          console.error("Game error:", error);
          toast.error(`Game error: ${error.message}`);
        });

        // Connect to game
        await client.connect();
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to initialize game:", error);
        toast.error("Failed to connect to game");
        setIsLoading(false);
      }
    };

    initializeGame();

    // Handle page unload/browser close
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (gameClientRef.current && gameClientRef.current.isConnected()) {
        // Show confirmation dialog to prevent accidental navigation
        event.preventDefault();
        event.returnValue =
          "Are you sure you want to leave the game? You will be disconnected from the room.";
      }

      // Always disconnect the client
      if (gameClientRef.current) {
        gameClientRef.current.disconnect();
      }
    };

    // Handle browser navigation (back/forward buttons)
    const handlePopState = () => {
      if (gameClientRef.current) {
        gameClientRef.current.disconnect();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
      if (gameClientRef.current) {
        gameClientRef.current.disconnect();
        gameClientRef.current = null;
      }
    };
  }, [roomId, currentUser, roomPasswordFromNav]);

  // Cleanup effect for component unmount
  useEffect(() => {
    return () => {
      // Ensure client is disconnected when component unmounts
      if (gameClientRef.current) {
        gameClientRef.current.disconnect();
        gameClientRef.current = null;
      }
    };
  }, []);

  // Handle square click
  const handleSquareClick = useCallback(
    (row: number, col: number) => {
      if (
        !gameState ||
        !gameClient ||
        !isConnected ||
        gameState.status !== "playing"
      )
        return;

      const clickedPos: CheckersPosition = { row, col };
      const clickedPiece = gameState.board[row][col];

      // If no square is selected
      if (!selectedSquare) {
        // Check if player must continue capturing with a specific piece
        if (gameState.mustCapture && gameState.captureSequence.length > 0) {
          // Get the last move in the capture sequence
          const lastMove =
            gameState.captureSequence[gameState.captureSequence.length - 1];
          const requiredPiecePos = lastMove.to;

          // Only allow selecting the piece that must continue capturing
          if (!positionsEqual(clickedPos, requiredPiecePos)) {
            return; // Ignore click on other pieces
          }
        }

        // Select piece if it belongs to current player and it's their turn
        if (
          clickedPiece &&
          clickedPiece.color === currentPlayer?.color &&
          currentPlayer?.color === gameState.currentPlayer
        ) {
          setSelectedSquare(clickedPos);
          // Calculate possible moves based on piece type
          const moves = calculatePossibleMoves(
            clickedPiece,
            clickedPos,
            gameState.board,
          );
          setPossibleMoves(moves);
        }
        return;
      }

      // If clicking on the same square, deselect
      if (positionsEqual(selectedSquare, clickedPos)) {
        setSelectedSquare(null);
        setPossibleMoves([]);
        return;
      }

      // If clicking on own piece, check if we can select it
      if (
        clickedPiece &&
        currentPlayer &&
        clickedPiece.color === currentPlayer.color
      ) {
        // If must capture, only allow selecting the required piece
        if (gameState.mustCapture && gameState.captureSequence.length > 0) {
          const lastMove =
            gameState.captureSequence[gameState.captureSequence.length - 1];
          const requiredPiecePos = lastMove.to;

          if (!positionsEqual(clickedPos, requiredPiecePos)) {
            return; // Can't select other pieces during forced capture
          }
        }

        setSelectedSquare(clickedPos);
        // Calculate possible moves based on piece type
        const moves = calculatePossibleMoves(
          clickedPiece,
          clickedPos,
          gameState.board,
        );
        setPossibleMoves(moves);
        return;
      }

      // Check if this is a valid move
      const isPossibleMove = possibleMoves.some((move) =>
        positionsEqual(move, clickedPos),
      );

      if (isPossibleMove) {
        // Calculate captures for this move
        const captures: CheckersPosition[] = [];
        if (Math.abs(row - selectedSquare.row) === 2) {
          // This is a capture move
          const middleRow = (selectedSquare.row + row) / 2;
          const middleCol = (selectedSquare.col + col) / 2;
          captures.push({ row: middleRow, col: middleCol });
        }

        const move: CheckersMove = {
          from: selectedSquare,
          to: clickedPos,
          ...(captures.length > 0 && { captures }),
        };

        // Send the move
        gameClient.sendMove(move);
        setSelectedSquare(null);
        setPossibleMoves([]);
      } else {
        // Invalid move, deselect
        setSelectedSquare(null);
        setPossibleMoves([]);
      }
    },
    [
      gameState,
      gameClient,
      isConnected,
      selectedSquare,
      possibleMoves,
      currentPlayer,
    ],
  );

  const checkersForcedUi = useMemo(() => {
    if (!gameState || gameState.status !== "playing") {
      return {
        forcedCapture: false,
        mandatoryPieceSquares: [] as CheckersPosition[],
        singleLegalMoveHighlight: false,
        comboContinuePiece: null as CheckersPosition | null,
      };
    }

    if (gameState.captureSequence?.length) {
      const last =
        gameState.captureSequence[gameState.captureSequence.length - 1];
      const only = { row: last.to.row, col: last.to.col };
      return {
        forcedCapture: true,
        mandatoryPieceSquares: [only],
        singleLegalMoveHighlight: possibleMoves.length === 1,
        comboContinuePiece: only,
      };
    }

    const board = gameState.board;
    const cp = gameState.currentPlayer;

    const forcedCapture = hasAnyCaptureForPlayer(board, cp);
    const mandatoryPieceSquares = getMandatoryCapturePiecePositions(
      board,
      forcedCapture,
      (p, r, c) => !!(p && p.color === cp),
      (r, c, b) => {
        const piece = b[r][c];
        if (!piece) return [];
        return getCaptureMovesForPiece(piece, { row: r, col: c }, b);
      },
    );

    const totalLegal = countTotalLegalMoves(
      board,
      (p, r, c) => !!(p && p.color === cp),
      (r, c, b) => {
        const piece = b[r][c];
        if (!piece) return [];
        return calculatePossibleMoves(piece, { row: r, col: c }, b);
      },
    );

    return {
      forcedCapture,
      mandatoryPieceSquares,
      singleLegalMoveHighlight: totalLegal === 1,
      comboContinuePiece: null as CheckersPosition | null,
    };
  }, [gameState, possibleMoves]);

  const opponentColor =
    currentPlayer?.color === CheckersColor.Red
      ? CheckersColor.Black
      : CheckersColor.Red;
  const leftSideActive =
    gameState != null &&
    currentPlayer != null &&
    gameState.currentPlayer === opponentColor;
  const rightSideActive =
    gameState != null &&
    currentPlayer != null &&
    gameState.currentPlayer === currentPlayer.color;

  const sidePortraitStyle = (isActive: boolean) => ({
    height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
    width: SIDE_IMAGE_WIDTH,
    filter: isActive ? "brightness(1.2)" : "brightness(0.5)",
    boxShadow: isActive
      ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)"
      : "0 0 0 2px #000, inset 0 0 0 1px #000",
    WebkitUserDrag: "none",
  });

  // Create new room
  const createNewRoom = () => {
    const newRoomId = generateCheckersRoomId();
    navigate(`/multiplayer/${newRoomId}/checkers`);
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen bg-black"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <div
          className="bg-gray-900 border-4 border-orange-600 rounded-lg p-8"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mx-auto mb-4"></div>
            <p
              className="text-orange-300"
              style={{
                fontSize: "10px",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              CONNECTING TO CHECKERS GAME...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col"
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

      {/* Fixed positioned buttons */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="bg-gray-700 border-2 border-orange-600 hover:bg-orange-700 text-white px-4 py-2 text-xs transition-colors"
          style={{
            fontSize: "8px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
          }}
          aria-pressed={isSidebarOpen}
          aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
        >
          {isSidebarOpen ? "HIDE PANEL" : "SHOW PANEL"}
        </button>
        <button
          onClick={() => navigate("/multiplayer")}
          className="bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 text-xs transition-colors"
          style={{
            fontSize: "8px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
          }}
          aria-label="Back to multiplayer games"
        >
          BACK TO MULTIPLAYER GAMES
        </button>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Checkers Area: Side images flanking the board */}
        <div
          className="flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none"
          style={{
            height: "100vh",
            paddingTop: isSidebarOpen ? 0 : 5,
            paddingBottom: isSidebarOpen ? 0 : 5,
          }}
        >
          {/* Left side: Opponent's portrait */}
          <img
            src={
              currentPlayer?.color === CheckersColor.Red
                ? "/games/chess/dark-cat.jpg"
                : "/games/chess/light-cat.jpg"
            }
            alt={
              currentPlayer?.color === CheckersColor.Red
                ? "Black player"
                : "Red player"
            }
            draggable={false}
            className={`object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${leftSideActive ? "border-yellow-300" : "border-gray-700"}`}
            style={sidePortraitStyle(leftSideActive)}
          />

          {/* Checkers Board */}
          <div>
            <ChessBoardMultiplayer
              board={convertBoardForChessBoard(gameState?.board || [])}
              selectedSquare={selectedSquare}
              possibleMoves={possibleMoves}
              onSquareClick={handleSquareClick}
              sideImagesWidth={TOTAL_SIDE_IMAGES_WIDTH}
              isSidebarOpen={isSidebarOpen}
              showGrid={showGrid}
              currentPlayerColor={
                (currentPlayer?.color === CheckersColor.Red
                  ? ChessColor.Black
                  : ChessColor.White) as any
              }
              forcedCapture={checkersForcedUi.forcedCapture}
              mandatoryPieceSquares={checkersForcedUi.mandatoryPieceSquares}
              singleLegalMoveHighlight={
                checkersForcedUi.singleLegalMoveHighlight
              }
              comboContinuePiece={checkersForcedUi.comboContinuePiece}
            />
          </div>

          {/* Right side: Current player's portrait */}
          <img
            src={
              currentPlayer?.color === CheckersColor.Red
                ? "/games/chess/light-cat.jpg"
                : "/games/chess/dark-cat.jpg"
            }
            alt={
              currentPlayer?.color === CheckersColor.Red
                ? "Red player"
                : "Black player"
            }
            draggable={false}
            className={`object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${rightSideActive ? "border-yellow-300" : "border-gray-700"}`}
            style={sidePortraitStyle(rightSideActive)}
          />
        </div>

        {/* Right Panel - Secondary info using remaining space */}
        {isSidebarOpen && (
          <div
            className="w-96 flex flex-col p-6 bg-black border-l-4 border-orange-600 overflow-y-auto"
            style={{ boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }}
          >
            {/* Title */}
            <div className="mb-6">
              <h1
                className="text-lg mb-2 text-orange-400"
                style={{
                  fontSize: "14px",
                  textShadow: "2px 2px 0px #000",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                CHECKERS MULTIPLAYER
              </h1>
              <p
                className="text-xs text-orange-300"
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                ROOM: {roomId} | PLAYER: {currentUser.username}
                {currentPlayer &&
                  ` (${getCheckersColorName(currentPlayer.color)})`}
              </p>
            </div>

            {/* Game Status and Controls */}
            <div className="mb-6">
              <div className="flex flex-col gap-3 mb-4">
                <div
                  className={`px-4 py-2 text-center text-xs border-2 text-black ${gameState?.currentPlayer === currentPlayer?.color ? "bg-blue-400 border-blue-300" : "bg-orange-400 border-orange-300"}`}
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  {gameState?.currentPlayer === CheckersColor.Red
                    ? "RED"
                    : "BLACK"}{" "}
                  TO MOVE
                </div>
                {gameState?.status === "finished" && (
                  <div
                    className="px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                      boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                    }}
                  >
                    GAME OVER!
                    {gameState.winner ? (
                      <span className="block mt-1">
                        {gameState.winner === "red"
                          ? "RED"
                          : gameState.winner === "black"
                            ? "BLACK"
                            : gameState.winner}{" "}
                        WINS
                      </span>
                    ) : null}
                  </div>
                )}
                {gameState?.mustCapture && (
                  <div
                    className="px-4 py-2 bg-orange-600 border-2 border-orange-400 text-center text-xs text-white"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                      boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                    }}
                  >
                    MUST CAPTURE!
                  </div>
                )}
                {gameState?.captureSequence &&
                  gameState.captureSequence.length > 0 && (
                    <div
                      className="px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                      }}
                    >
                      CONTINUE JUMPING!
                    </div>
                  )}
              </div>

              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => {
                    if (gameClient && isConnected) {
                      const confirmed = window.confirm(
                        "ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.",
                      );
                      if (!confirmed) return;
                    }
                    navigate("/multiplayer");
                  }}
                  className="flex-1 bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  LEAVE GAME
                </button>
                <button
                  onClick={() => {
                    if (!isConnected) return;
                    const confirmed = window.confirm(
                      "ARE YOU SURE YOU WANT TO RESTART THE GAME? THIS WILL RESET THE BOARD FOR BOTH PLAYERS.",
                    );
                    if (confirmed) {
                      gameClient?.restartGame();
                    }
                  }}
                  disabled={!isConnected}
                  className="flex-1 bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-50"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  RESTART GAME
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={createNewRoom}
                  className="w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  NEW ROOM
                </button>
              </div>
            </div>

            {/* Connection Status */}
            <div className="mb-6">
              <div
                className={`px-4 py-2 text-center text-xs border-2 ${isConnected ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"}`}
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                {isConnected ? "🟢 CONNECTED" : "🔴 DISCONNECTED"}
              </div>
              {!isConnected && (
                <button
                  onClick={() => window.location.reload()}
                  className="w-full mt-2 bg-yellow-600 border-2 border-yellow-400 hover:bg-yellow-500 px-3 py-2 text-xs text-white transition-colors"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  RECONNECT
                </button>
              )}
            </div>

            {/* Game Information Panels */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Players Panel */}
              <div
                className="bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-orange-600 px-4 py-3 border-b-4 border-orange-600">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    PLAYERS ({gameState?.players.length || 0}/2)
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {gameState?.players.map((player) => {
                      const isCurrentPlayer = player.id === currentUser.id;
                      const isActivePlayer =
                        gameState && player.color === gameState.currentPlayer;
                      return (
                        <div
                          key={player.id}
                          className={`p-3 border-2 ${isCurrentPlayer ? "border-blue-300 bg-blue-800" : "border-orange-400 bg-gray-700"} rounded`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-sm text-orange-200"
                              style={{
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace",
                              }}
                            >
                              {player.username}
                            </span>
                            {isCurrentPlayer && (
                              <div
                                className="border border-blue-300 text-blue-300 px-2 py-1"
                                style={{
                                  fontSize: "6px",
                                  fontFamily: "'Press Start 2P', monospace",
                                }}
                              >
                                YOU
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-sm text-orange-300"
                              style={{
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace",
                              }}
                            >
                              {getCheckersColorName(player.color)}
                            </span>
                            {isActivePlayer && (
                              <div
                                className="border border-yellow-400 text-yellow-400 px-2 py-1"
                                style={{
                                  fontSize: "6px",
                                  fontFamily: "'Press Start 2P', monospace",
                                }}
                              >
                                TURN
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {(!gameState?.players ||
                      gameState.players.length === 0) && (
                      <div
                        className="text-orange-400 text-center py-4"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        WAITING FOR PLAYERS...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Captured Pieces */}
              <div
                className="bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-orange-600 px-4 py-3 border-b-4 border-orange-600">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    CAPTURED PIECES
                  </h3>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <h4
                      className="text-orange-300 mb-2 font-bold"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      RED: {gameState?.capturedPieces.red || 0}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {Array.from(
                        { length: gameState?.capturedPieces.red || 0 },
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
                      {(!gameState?.capturedPieces.red ||
                        gameState.capturedPieces.red === 0) && (
                        <span
                          className="text-orange-500"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          NONE
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4
                      className="text-orange-300 mb-2 font-bold"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      BLACK: {gameState?.capturedPieces.black || 0}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {Array.from(
                        { length: gameState?.capturedPieces.black || 0 },
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
                      {(!gameState?.capturedPieces.black ||
                        gameState.capturedPieces.black === 0) && (
                        <span
                          className="text-orange-500"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          NONE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Move History */}
              <div
                className="bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden flex-1"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-orange-600 px-4 py-3 border-b-4 border-orange-600">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    MOVE HISTORY
                  </h3>
                </div>
                <div className="p-4">
                  <div className="overflow-y-auto max-h-64">
                    {gameState?.moveHistory.slice(-12).map((move, index) => (
                      <div
                        key={index}
                        className="mb-2 text-sm text-orange-200"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        {move.player.username}:{" "}
                        {move.moves
                          .map(
                            (m, i) =>
                              `${String.fromCharCode(97 + m.from.col)}${8 - m.from.row}→${String.fromCharCode(97 + m.to.col)}${8 - m.to.row}${m.captures ? "x" : ""}`,
                          )
                          .join(", ")}
                      </div>
                    ))}
                    {(!gameState?.moveHistory ||
                      gameState.moveHistory.length === 0) && (
                      <div
                        className="text-orange-400 italic"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        NO MOVES YET
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Game Settings */}
              <div
                className="bg-gray-900 border-4 border-orange-600 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-orange-600 px-4 py-3 border-b-4 border-orange-600">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    SETTINGS
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-orange-300 font-bold"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      SHOW GRID
                    </span>
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`px-3 py-2 border-2 font-bold transition-colors ${
                        showGrid
                          ? "bg-green-400 border-green-400 text-black"
                          : "bg-gray-600 border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-black"
                      }`}
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                      }}
                    >
                      {showGrid ? "ON" : "OFF"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Convert checkers pieces to chess pieces for the board display
function convertBoardForChessBoard(
  checkersBoard: (CheckersPiece | null)[][],
) {
  return checkersBoard.map((row) =>
    row.map((piece) => {
      if (!piece) return { type: ChessPieceType.Empty, color: ChessColor.NoColor };
      return {
        type: ChessPieceType.Rook,
        color:
          piece.color === CheckersColor.Red ? ChessColor.White : ChessColor.Black,
        isKing: piece.isKing,
      };
    }),
  );
}
