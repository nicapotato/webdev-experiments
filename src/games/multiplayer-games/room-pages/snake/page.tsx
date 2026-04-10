import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Users,
  Wifi,
  RefreshCw,
  Play,
  Pause,
  Grid3X3,
} from "lucide-react";
import { toast } from "sonner";
import {
  SnakeGameClient,
  Direction,
  type GameState,
  generateRoomId,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CELL_SIZE,
  renderGame,
} from "@/games/multiplayer-games/snake/snake-game-multiplayer";
import { getCurrentPlayer } from "@/lib/player-utils";
import {
  allowMultiplayerJoin,
  useMultiplayerRoomGate,
} from "@/lib/multiplayer-join-gate";

export default function SnakeGamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const roomId = useMultiplayerRoomGate("snake");
  const roomPasswordFromNav = (
    location.state as { roomPassword?: string } | undefined
  )?.roomPassword;

  const requestedTickMs = useMemo(() => {
    const raw = searchParams.get("tickMs");
    if (!raw) return undefined;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) ? n : undefined;
  }, [searchParams]);

  // Game state
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: "", username: "" });
  const [gameClient, setGameClient] = useState<SnakeGameClient | null>(null);
  const [gameStatus, setGameStatus] = useState<
    "waiting" | "playing" | "finished"
  >("waiting");
  const [previousPlayerCount, setPreviousPlayerCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Use ref to hold game client for cleanup functions
  const gameClientRef = useRef<SnakeGameClient | null>(null);

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Game constants (imported from shared utilities)

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
        const client = new SnakeGameClient(
          roomId,
          currentUser.id,
          currentUser.username,
          requestedTickMs,
          roomPasswordFromNav,
        );
        setGameClient(client);
        gameClientRef.current = client;

        // Set up event handlers
        client.onGameState((newGameState) => {
          // Check if a player left
          const currentPlayerCount = newGameState.players.length;
          if (
            previousPlayerCount > currentPlayerCount &&
            previousPlayerCount > 1
          ) {
            const leftPlayerCount = previousPlayerCount - currentPlayerCount;
            toast.warning(
              `${leftPlayerCount} player${leftPlayerCount > 1 ? "s" : ""} left the room`,
            );
          }

          // Force a deep clone to ensure React detects the change
          const clonedGameState = JSON.parse(JSON.stringify(newGameState));
          setGameState(clonedGameState);
          setGameStatus(clonedGameState.status);
          setPreviousPlayerCount(currentPlayerCount);
        });

        client.onConnection((connected) => {
          setIsConnected(connected);
          if (connected) {
            allowMultiplayerJoin(roomId, "snake");
            toast.success("Connected to snake game!");
          } else {
            toast.error(
              "Disconnected from snake game. You can try refreshing the page to reconnect.",
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
  }, [roomId, currentUser.id, currentUser.username, requestedTickMs, roomPasswordFromNav]);

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

  // Handle keyboard input
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!gameClient || !isConnected || gameStatus !== "playing") return;

      let direction: Direction | null = null;

      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          direction = Direction.Up;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          direction = Direction.Down;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          direction = Direction.Left;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          direction = Direction.Right;
          break;
        default:
          return;
      }

      if (direction !== null) {
        event.preventDefault();
        gameClient.sendDirection(direction);
      }
    },
    [gameClient, isConnected, gameStatus],
  );

  // Set up keyboard listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  // Canvas rendering (using shared utility)
  const renderGameCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !gameState) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    renderGame(ctx, gameState, CELL_SIZE, showGrid);
  }, [gameState, showGrid]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      renderGameCanvas();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [renderGameCanvas]);

  // Create new room
  const createNewRoom = () => {
    const newRoomId = generateRoomId();
    navigate(`/multiplayer/${newRoomId}/snake`);
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen bg-black"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <div
          className="bg-gray-900 border-4 border-yellow-400 rounded-lg p-8"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent mx-auto mb-4"></div>
            <p
              className="text-yellow-300"
              style={{
                fontSize: "10px",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              CONNECTING TO SNAKE GAME...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-full flex flex-col text-white relative"
      style={{
        fontFamily: "'Press Start 2P', monospace",
      }}
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url('/art/${theme === "dark" ? "background-gold-dark-1.jpg" : "background-gold-light-1.jpg"}')`,
          backgroundRepeat: "repeat",
          // Make tiles smaller for a denser pattern
          backgroundSize: "160px 160px",
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Fixed positioned buttons */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-gray-700 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-4 py-2 text-xs transition-colors"
            style={{
              fontSize: "8px",
              fontFamily: "'Press Start 2P', monospace",
              boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
            }}
            aria-pressed={isSidebarOpen}
            aria-label={isSidebarOpen ? "Hide panel" : "Show panel"}
          >
            {isSidebarOpen ? "HIDE PANEL" : "SHOW PANEL"}
          </button>
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

        {/* Header */}
        <div className="flex items-center justify-between text-white p-6 flex-shrink-0 relative">
          <div className="relative z-20 flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (gameClient && isConnected) {
                    const confirmed = window.confirm(
                      "ARE YOU SURE YOU WANT TO LEAVE THE GAME? YOU WILL BE DISCONNECTED FROM THE ROOM.",
                    );
                    if (!confirmed) return;
                  }
                  navigate("/multiplayer");
                }}
                className="text-black bg-yellow-400 border-2 border-black hover:bg-yellow-500"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                }}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <div className="flex items-center gap-4">
                  <h1
                    className="text-xl font-bold text-yellow-400"
                    style={{
                      fontSize: "28px",
                      WebkitTextStroke: "2px #000",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    SNAKE MULTIPLAYER
                  </h1>
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-4 py-2 border-2 text-black ${
                        gameStatus === "playing"
                          ? "bg-green-400 border-green-400"
                          : gameStatus === "finished"
                            ? "bg-red-400 border-red-400"
                            : "bg-yellow-400 border-yellow-400"
                      }`}
                      style={{
                        fontSize: "12px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                      }}
                    >
                      {gameStatus === "playing"
                        ? "PLAYING"
                        : gameStatus === "finished"
                          ? "FINISHED"
                          : "WAITING"}
                    </div>
                    {gameStatus === "finished" && (
                      <Button
                        onClick={() => gameClient?.restartGame()}
                        disabled={!isConnected}
                        size="sm"
                        className="bg-green-600 border-2 border-green-400 hover:bg-green-500 px-3 py-2 text-xs text-white transition-colors"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                          boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        RESTART GAME
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <span
                    className="bg-black text-yellow-400 px-2 py-1 border border-yellow-400"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    ROOM: {roomId}
                  </span>
                  <span
                    className="bg-black text-yellow-400 px-2 py-1 border border-yellow-400"
                    style={{
                      fontSize: "8px",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    PLAYER: {currentUser.username}
                  </span>
                  {gameState?.tickMs != null && (
                    <span
                      className="bg-black text-green-400 px-2 py-1 border border-green-400"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                      title="Server tick interval (lower = faster)"
                    >
                      TICK: {gameState.tickMs}ms
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 relative">
          {/* Game Canvas */}
          <div className="flex-1 flex items-center justify-center bg-transparent p-4 relative z-10">
            <div
              className="border-4 border-yellow-400 rounded-lg overflow-hidden shadow-lg bg-black/90"
              style={{
                boxShadow:
                  "0 0 0 4px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(0,0,0,0.8)",
              }}
            >
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="block"
                style={{
                  width: "100%",
                  height: "100%",
                  imageRendering: "pixelated",
                }}
              />
            </div>
          </div>

          {/* Game Info Sidebar */}
          {isSidebarOpen && (
            <div className="w-80 p-4 overflow-y-auto space-y-4 relative">
              <div className="relative z-10">
                {/* Game Settings */}
                <div
                  className="bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
                >
                  <div className="bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400">
                    <h3
                      className="text-black font-bold"
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      GAME SETTINGS
                    </h3>
                    <p
                      className="text-black"
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      CUSTOMIZE YOUR GAME EXPERIENCE
                    </p>
                  </div>
                  <div className="p-4">
                    {gameState?.tickMs != null && (
                      <p
                        className="text-yellow-200/90 mb-4"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        SERVER TICK: {gameState.tickMs}ms
                      </p>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Grid3X3 className="h-4 w-4 text-yellow-400" />
                        <span
                          className="text-yellow-300 font-medium"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          SHOW GRID
                        </span>
                      </div>
                      <Button
                        variant={showGrid ? "default" : "outline"}
                        size="sm"
                        onClick={() => setShowGrid(!showGrid)}
                        className={`px-3 py-2 border-2 font-bold transition-colors ${
                          showGrid
                            ? "bg-green-400 border-green-400 text-black"
                            : "bg-gray-700 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        }`}
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                          boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                        }}
                      >
                        {showGrid ? "ON" : "OFF"}
                      </Button>
                    </div>
                    {/* Room actions */}
                    <div className="mt-4 grid grid-cols-1 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={createNewRoom}
                        className="w-full bg-purple-600 border-2 border-purple-400 hover:bg-purple-500 px-3 py-2 text-xs text-white transition-colors disabled:opacity-100"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                          boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        NEW ROOM
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Players */}
                <div
                  className="bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
                >
                  <div className="bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400">
                    <div className="flex items-center justify-between">
                      <h3
                        className="flex items-center gap-2 text-black font-bold"
                        style={{
                          fontSize: "10px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        <Users className="h-4 w-4" />
                        PLAYERS ({gameState?.players.length || 0}/2)
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Force a UI refresh to ensure players list is up to date
                          setRefreshTrigger((prev) => prev + 1);
                          toast.info("PLAYER LIST REFRESHED");
                        }}
                        className="bg-gray-700 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                          boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        REFRESH
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div
                      className="space-y-2"
                      key={`players-${refreshTrigger}`}
                    >
                      {gameState?.players.map((player, index) => {
                        const snake = gameState.snakes.find(
                          (s) => s.id === player.snakeId,
                        );
                        const isCurrentPlayer = player.id === currentUser.id;
                        return (
                          <div
                            key={player.id}
                            className="flex items-center justify-between p-3 bg-gray-800 border-2 border-yellow-400 rounded"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded border-2 border-white"
                                style={{
                                  backgroundColor: snake?.color || "#666",
                                  boxShadow: "0 0 0 1px #000",
                                }}
                              />
                              <span
                                className="font-medium text-yellow-300"
                                style={{
                                  fontSize: "8px",
                                  fontFamily: "'Press Start 2P', monospace",
                                }}
                              >
                                {player.username}
                              </span>
                              {isCurrentPlayer && (
                                <div
                                  className="border border-yellow-400 text-yellow-400 px-2 py-1"
                                  style={{
                                    fontSize: "6px",
                                    fontFamily: "'Press Start 2P', monospace",
                                  }}
                                >
                                  YOU
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Wifi
                                className="h-4 w-4 text-green-500"
                                aria-label="Connected"
                              />
                              {snake && (
                                <div
                                  className={`px-2 py-1 border-2 text-black ${snake.alive ? "bg-green-400 border-green-400" : "bg-red-400 border-red-400"}`}
                                  style={{
                                    fontSize: "6px",
                                    fontFamily: "'Press Start 2P', monospace",
                                  }}
                                >
                                  {snake.alive ? "ALIVE" : "DEAD"}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {(!gameState?.players ||
                        gameState.players.length === 0) && (
                        <p
                          className="text-yellow-300 text-center py-4"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          WAITING FOR PLAYERS...
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Game Status */}
                <div
                  className="bg-gray-900 border-4 border-yellow-400 rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
                >
                  <div className="bg-yellow-400 px-4 py-3 border-b-4 border-yellow-400">
                    <h3
                      className="text-black font-bold"
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Press Start 2P', monospace",
                      }}
                    >
                      GAME STATUS
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span
                          className="text-yellow-300"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          STATUS:
                        </span>
                        <div
                          className={`px-3 py-1 border-2 text-black ${
                            gameStatus === "playing"
                              ? "bg-green-400 border-green-400"
                              : gameStatus === "finished"
                                ? "bg-red-400 border-red-400"
                                : "bg-yellow-400 border-yellow-400"
                          }`}
                          style={{
                            fontSize: "6px",
                            fontFamily: "'Press Start 2P', monospace",
                            boxShadow: "0 0 0 1px #000",
                          }}
                        >
                          {gameStatus.toUpperCase()}
                        </div>
                      </div>
                      {gameState?.winner && (
                        <div className="flex justify-between items-center">
                          <span
                            className="text-yellow-300"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            WINNER:
                          </span>
                          <span
                            className="text-yellow-400 font-bold"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            {gameState.winner}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span
                          className="text-yellow-300"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          FOOD:
                        </span>
                        <span
                          className="text-yellow-400"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          {gameState?.food
                            ? `(${gameState.food.position.X}, ${gameState.food.position.Y})`
                            : "NONE"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
