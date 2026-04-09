import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Wifi,
  WifiOff,
  Copy,
  RefreshCw,
  Play,
  Pause,
  Grid3X3,
  Crown,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import ChessBoardMultiplayer from "./ChessBoardMultiplayer";
import {
  ChessGameClient,
  ChessPosition,
  ChessMove,
  ChessPieceType,
  ChessColor,
  type ChessGameState,
  type ChessPlayer,
  generateChessRoomId,
  getChessPieceSymbol,
  getChessColorName,
  positionsEqual,
} from "@/games/multiplayer-games/chess/chess-game-multiplayer";
import {
  getLegalMovesForSquare,
  findKingSquareForSide,
  type ChessMoveHint,
} from "@/games/chess/chess-multiplayer-legal";
import { getCurrentPlayer } from "@/lib/player-utils";

export default function ChessGamePage() {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId as string;

  // Game state
  const [gameState, setGameState] = useState<ChessGameState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: "", username: "" });
  const [gameClient, setGameClient] = useState<ChessGameClient | null>(null);
  const [selectedSquare, setSelectedSquare] = useState<ChessPosition | null>(
    null,
  );
  const [possibleMoves, setPossibleMoves] = useState<ChessMoveHint[]>([]);
  const [promotionSquare, setPromotionSquare] = useState<ChessPosition | null>(
    null,
  );
  const [showGrid, setShowGrid] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<ChessPlayer | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const SIDE_IMAGE_WIDTH = 360; // px (approx width reservation for each tall image)
  const SIDE_IMAGE_GAP = 24; // px total gaps between images and board
  const TOTAL_SIDE_IMAGES_WIDTH = SIDE_IMAGE_WIDTH * 2 + SIDE_IMAGE_GAP * 2;

  // Use ref to hold game client for cleanup functions
  const gameClientRef = useRef<ChessGameClient | null>(null);

  const checkSquare = useMemo(() => {
    if (!gameState?.check || gameState.status !== "playing") return null;
    return findKingSquareForSide(gameState, gameState.currentPlayer);
  }, [gameState]);

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
        const client = new ChessGameClient(
          roomId,
          currentUser.id,
          currentUser.username,
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
            (p: ChessPlayer) => p.id === currentUser.id,
          );
          setCurrentPlayer(player || null);

          // Clear selection if it's not the player's turn or game is finished
          if (
            player &&
            (player.color !== clonedGameState.currentPlayer ||
              clonedGameState.status !== "playing")
          ) {
            setSelectedSquare(null);
            setPossibleMoves([]);
          }
        });

        client.onConnection((connected) => {
          setIsConnected(connected);
          if (connected) {
            toast.success("Connected to chess game!");
          } else {
            toast.error(
              "Disconnected from chess game. You can try refreshing the page to reconnect.",
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
  }, [roomId, currentUser]);

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

      const clickedPos: ChessPosition = { row, col };
      const clickedPiece = gameState.board[row][col];

      // If promoting, handle promotion selection
      if (promotionSquare) {
        if (positionsEqual(clickedPos, promotionSquare)) {
          // Cancel promotion
          setPromotionSquare(null);
        }
        return;
      }

      // If no square is selected
      if (!selectedSquare) {
        // Select piece if it belongs to current player
        if (
          clickedPiece.type !== ChessPieceType.Empty &&
          currentPlayer &&
          clickedPiece.color === currentPlayer.color &&
          currentPlayer.color === gameState.currentPlayer
        ) {
          setSelectedSquare(clickedPos);
          setPossibleMoves(
            getLegalMovesForSquare(gameState, clickedPos.row, clickedPos.col),
          );
        }
        return;
      }

      // If clicking on the same square, deselect
      if (positionsEqual(selectedSquare, clickedPos)) {
        setSelectedSquare(null);
        setPossibleMoves([]);
        return;
      }

      // If clicking on own piece, select it instead
      if (
        clickedPiece.type !== ChessPieceType.Empty &&
        currentPlayer &&
        clickedPiece.color === currentPlayer.color
      ) {
        setSelectedSquare(clickedPos);
        setPossibleMoves(
          getLegalMovesForSquare(gameState, clickedPos.row, clickedPos.col),
        );
        return;
      }

      // Check if this is a valid move
      const isPossibleMove = possibleMoves.some((move) =>
        positionsEqual(move, clickedPos),
      );

      if (isPossibleMove) {
        const move: ChessMove = {
          from: selectedSquare,
          to: clickedPos,
        };

        // Check for pawn promotion
        const selectedPiece =
          gameState.board[selectedSquare.row][selectedSquare.col];
        if (
          selectedPiece.type === ChessPieceType.Pawn &&
          ((selectedPiece.color === ChessColor.White && clickedPos.row === 0) ||
            (selectedPiece.color === ChessColor.Black && clickedPos.row === 7))
        ) {
          // Show promotion dialog
          setPromotionSquare(clickedPos);
          return;
        }

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
      promotionSquare,
    ],
  );

  // Handle pawn promotion
  const handlePromotion = useCallback(
    (pieceType: ChessPieceType) => {
      if (!selectedSquare || !promotionSquare || !gameClient) return;

      const move: ChessMove = {
        from: selectedSquare,
        to: promotionSquare,
        promotion: pieceType,
      };

      gameClient.sendMove(move);
      setSelectedSquare(null);
      setPossibleMoves([]);
      setPromotionSquare(null);
    },
    [selectedSquare, promotionSquare, gameClient],
  );

  // Copy shareable link to clipboard
  const copyRoomId = async () => {
    try {
      const shareableLink = `${window.location.origin}/console/learning/games/multiplayer-games/${roomId}/chess`;
      await navigator.clipboard.writeText(shareableLink);
      toast.success("Shareable link copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy shareable link");
    }
  };

  // Create new room
  const createNewRoom = () => {
    const newRoomId = generateChessRoomId();
    navigate(`/multiplayer/${newRoomId}/chess`);
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen bg-black"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <div
          className="bg-gray-900 border-4 border-gray-400 rounded-lg p-8"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent mx-auto mb-4"></div>
            <p
              className="text-gray-300"
              style={{
                fontSize: "10px",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              CONNECTING TO CHESS GAME...
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
          className="bg-gray-700 border-2 border-gray-400 hover:bg-gray-600 text-white px-4 py-2 text-xs transition-colors"
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
        {/* Chess Area: Side images flanking the board */}
        <div
          className="flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6"
          style={{
            height: "100vh",
            paddingTop: isSidebarOpen ? 0 : 5,
            paddingBottom: isSidebarOpen ? 0 : 5,
          }}
        >
          {/* Left side: Opponent's portrait */}
          <img
            src={
              currentPlayer?.color === ChessColor.Black
                ? "/games/chess/light-cat.jpg"
                : "/games/chess/dark-cat.jpg"
            }
            alt={
              currentPlayer?.color === ChessColor.Black
                ? "White player"
                : "Black player"
            }
            className={`object-cover object-center border-4 ${gameState?.currentPlayer === (currentPlayer?.color === ChessColor.Black ? ChessColor.White : ChessColor.Black) ? "border-yellow-400" : "border-gray-700"}`}
            style={{
              height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
              width: SIDE_IMAGE_WIDTH,
              boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
            }}
          />

          {/* Chess Board */}
          <div>
            <ChessBoardMultiplayer
              board={gameState?.board || []}
              selectedSquare={selectedSquare}
              possibleMoves={possibleMoves}
              onSquareClick={handleSquareClick}
              sideImagesWidth={TOTAL_SIDE_IMAGES_WIDTH}
              isSidebarOpen={isSidebarOpen}
              showGrid={showGrid}
              currentPlayerColor={currentPlayer?.color as any}
              checkSquare={checkSquare}
            />
          </div>

          {/* Right side: Current player's portrait */}
          <img
            src={
              currentPlayer?.color === ChessColor.Black
                ? "/games/chess/dark-cat.jpg"
                : "/games/chess/light-cat.jpg"
            }
            alt={
              currentPlayer?.color === ChessColor.Black
                ? "Black player"
                : "White player"
            }
            className={`object-cover object-center border-4 ${gameState?.currentPlayer === currentPlayer?.color ? "border-yellow-400" : "border-gray-700"}`}
            style={{
              height: `calc(100vh${isSidebarOpen ? "" : " - 10px"})`,
              width: SIDE_IMAGE_WIDTH,
              boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
            }}
          />
        </div>

        {/* Right Panel - Secondary info using remaining space */}
        <div
          className={`w-96 flex flex-col p-6 bg-black border-l-4 border-gray-400 overflow-y-auto ${isSidebarOpen ? "" : "hidden"}`}
          style={{ boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }}
        >
          {/* Title */}
          <div className="mb-6">
            <h1
              className="text-lg mb-2 text-white"
              style={{
                fontSize: "14px",
                textShadow: "2px 2px 0px #000",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              CHESS MULTIPLAYER
            </h1>
            <p
              className="text-xs text-gray-300"
              style={{
                fontSize: "8px",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              ROOM: {roomId} | PLAYER: {currentUser.username}
              {currentPlayer && ` (${getChessColorName(currentPlayer.color)})`}
            </p>
          </div>

          {/* Game Status and Controls */}
          <div className="mb-6">
            <div className="flex flex-col gap-3 mb-4">
              <div
                className={`px-4 py-2 text-center text-xs border-2 text-black ${gameState?.currentPlayer === currentPlayer?.color ? "bg-blue-400 border-blue-300" : "bg-gray-400 border-gray-300"}`}
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                {gameState?.currentPlayer === ChessColor.White
                  ? "WHITE"
                  : "BLACK"}{" "}
                TO MOVE
              </div>
              {gameState?.check && (
                <div
                  className="px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  CHECK!
                </div>
              )}
              {gameState?.checkmate && (
                <div
                  className="px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  CHECKMATE!
                </div>
              )}
              {gameState?.stalemate && (
                <div
                  className="px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                  }}
                >
                  STALEMATE!
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
                  fontSize: "10px",
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
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                RESTART GAME
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={copyRoomId}
                className="flex-1 bg-gray-600 border-2 border-gray-400 hover:bg-gray-500 px-3 py-2 text-xs text-white transition-colors"
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                COPY SHAREABLE LINK
              </button>
              <button
                onClick={createNewRoom}
                className="flex-1 bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors"
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
              className="bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
            >
              <div className="bg-gray-400 px-4 py-3 border-b-4 border-gray-400">
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
                        className={`p-3 border-2 ${isCurrentPlayer ? "border-blue-300 bg-blue-800" : "border-gray-400 bg-gray-700"} rounded`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-sm text-gray-200"
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
                            className="text-sm text-gray-300"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            {getChessColorName(player.color)}
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
                  {(!gameState?.players || gameState.players.length === 0) && (
                    <div
                      className="text-gray-400 text-center py-4"
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

              {/* Captured Pieces */}
              <div
                className="bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-gray-400 px-4 py-3 border-b-4 border-gray-400">
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
                      className="text-gray-300 mb-2 font-bold"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      WHITE:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {/* Placeholder - would be populated from game state */}
                      <span
                        className="text-gray-500"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        NONE
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4
                      className="text-gray-300 mb-2 font-bold"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      BLACK:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {/* Placeholder - would be populated from game state */}
                      <span
                        className="text-gray-500"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        NONE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Move History */}
              <div
                className="bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden flex-1"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-gray-400 px-4 py-3 border-b-4 border-gray-400">
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
                    {/* Placeholder - would be populated from game state */}
                    <div
                      className="text-gray-400 italic"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      NO MOVES YET
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Settings */}
              <div
                className="bg-gray-900 border-4 border-gray-400 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-gray-400 px-4 py-3 border-b-4 border-gray-400">
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
                      className="text-gray-300 font-bold"
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
                          : "bg-gray-600 border-gray-400 text-gray-300 hover:bg-gray-500"
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

          {/* Pawn Promotion Dialog */}
          {promotionSquare && (
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
                  CHOOSE PROMOTION PIECE
                </h3>
                <div className="flex gap-4 justify-center">
                  {[
                    ChessPieceType.Queen,
                    ChessPieceType.Rook,
                    ChessPieceType.Bishop,
                    ChessPieceType.Knight,
                  ].map((pieceType) => (
                    <button
                      key={pieceType}
                      onClick={() => handlePromotion(pieceType)}
                      className="w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors"
                      style={{
                        fontSize: "20px",
                        filter: "drop-shadow(1px 1px 0px #000)",
                        boxShadow: "inset 0 0 0 1px #000",
                      }}
                    >
                      {getChessPieceSymbol({
                        type: pieceType,
                        color: currentPlayer?.color || ChessColor.White,
                      })}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
