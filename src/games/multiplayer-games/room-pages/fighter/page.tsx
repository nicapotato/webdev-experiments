import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  WifiOff,
  Copy,
  RefreshCw,
  Grid3X3,
  Swords,
} from "lucide-react";
import { toast } from "sonner";
import {
  FighterGameClient,
  type FighterGameState,
  type InputAction,
  generateFighterRoomId,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  renderFighterGame,
} from "@/games/multiplayer-games/fighter/fighter-game-multiplayer";
import { getCurrentPlayer } from "@/lib/player-utils";

export default function FighterGamePage() {
  const navigate = useNavigate();
  const params = useParams();
  const roomId = params.roomId as string;

  // Game state
  const [gameState, setGameState] = useState<FighterGameState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: "", username: "" });
  const [gameClient, setGameClient] = useState<FighterGameClient | null>(null);
  const [gameStatus, setGameStatus] = useState<
    "waiting" | "playing" | "finished"
  >("waiting");
  const [previousPlayerCount, setPreviousPlayerCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Input state
  const [keys, setKeys] = useState({
    // Player 1 controls (WASD + Space)
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
    " ": { pressed: false }, // space for attack
    // Player 2 controls (Arrow keys + Down arrow)
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    ArrowUp: { pressed: false },
    ArrowDown: { pressed: false },
  });

  // Use ref to hold game client for cleanup functions
  const gameClientRef = useRef<FighterGameClient | null>(null);

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

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
        const client = new FighterGameClient(
          roomId,
          currentUser.id,
          currentUser.username,
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
            toast.success("Connected to fighter game!");
          } else {
            toast.error(
              "Disconnected from fighter game. You can try refreshing the page to reconnect.",
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

  // Handle keyboard input
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!gameClient || !isConnected) return;

      switch (event.key) {
        // Player 1 controls (WASD + Space)
        case "a":
        case "A":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, a: { pressed: true } }));
          break;
        case "d":
        case "D":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, d: { pressed: true } }));
          break;
        case "w":
        case "W":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, w: { pressed: true } }));
          break;
        case "s":
        case "S":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, s: { pressed: true } }));
          break;
        case " ":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, " ": { pressed: true } }));
          break;
        // Player 2 controls (Arrow keys)
        case "ArrowLeft":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, ArrowLeft: { pressed: true } }));
          break;
        case "ArrowRight":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, ArrowRight: { pressed: true } }));
          break;
        case "ArrowUp":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, ArrowUp: { pressed: true } }));
          break;
        case "ArrowDown":
          event.preventDefault();
          setKeys((prev) => ({ ...prev, ArrowDown: { pressed: true } }));
          break;
      }
    },
    [gameClient, isConnected],
  );

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      // Player 1 controls (WASD + Space)
      case "a":
      case "A":
        setKeys((prev) => ({ ...prev, a: { pressed: false } }));
        break;
      case "d":
      case "D":
        setKeys((prev) => ({ ...prev, d: { pressed: false } }));
        break;
      case "w":
      case "W":
        setKeys((prev) => ({ ...prev, w: { pressed: false } }));
        break;
      case "s":
      case "S":
        setKeys((prev) => ({ ...prev, s: { pressed: false } }));
        break;
      case " ":
        setKeys((prev) => ({ ...prev, " ": { pressed: false } }));
        break;
      // Player 2 controls (Arrow keys)
      case "ArrowLeft":
        setKeys((prev) => ({ ...prev, ArrowLeft: { pressed: false } }));
        break;
      case "ArrowRight":
        setKeys((prev) => ({ ...prev, ArrowRight: { pressed: false } }));
        break;
      case "ArrowUp":
        setKeys((prev) => ({ ...prev, ArrowUp: { pressed: false } }));
        break;
      case "ArrowDown":
        setKeys((prev) => ({ ...prev, ArrowDown: { pressed: false } }));
        break;
    }
  }, []);

  // Set up keyboard listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Send input updates to server
  useEffect(() => {
    if (!gameClient || !isConnected) return;

    // Determine which player this client controls
    const currentPlayer = gameState?.players.find(
      (p) => p.id === currentUser.id,
    );
    const currentFighter = gameState?.fighters.find(
      (f) => f.id === currentPlayer?.fighterId,
    );

    let input: InputAction;

    if (currentFighter && gameState?.fighters.indexOf(currentFighter) === 0) {
      // Player 1 (Samurai Mack) - WASD + Space
      input = {
        left: keys.a.pressed,
        right: keys.d.pressed,
        up: keys.w.pressed,
        down: keys.s.pressed,
        attack1: keys[" "].pressed,
      };
    } else {
      // Player 2 (Kenji) - Arrow keys + Down arrow
      input = {
        left: keys.ArrowLeft.pressed,
        right: keys.ArrowRight.pressed,
        up: keys.ArrowUp.pressed,
        down: keys.ArrowDown.pressed,
        attack1: keys.ArrowDown.pressed, // Down arrow for attack
      };
    }

    gameClient.sendInput(input);
  }, [keys, gameClient, isConnected, gameState, currentUser.id]);

  // Canvas rendering
  useEffect(() => {
    if (!gameState) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      renderFighterGame(ctx, gameState, showGrid);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState, showGrid]);

  // Copy shareable link to clipboard
  const copyRoomId = async () => {
    try {
      const shareableLink = `${window.location.origin}/console/learning/games/multiplayer-games/${roomId}/fighter`;
      await navigator.clipboard.writeText(shareableLink);
      toast.success("Shareable link copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy shareable link");
    }
  };

  // Refresh game state
  const refreshGameState = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-black flex items-center justify-center"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <div
          className="bg-gray-900 border-4 border-red-500 rounded-lg p-8"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Swords className="h-8 w-8 text-red-500" />
              <h2
                className="text-xl font-bold text-red-500"
                style={{
                  fontSize: "12px",
                  textShadow: "2px 2px 0px #000",
                  fontFamily: "'Press Start 2P', monospace",
                }}
              >
                CONNECTING TO FIGHTER GAME...
              </h2>
            </div>
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent mx-auto mb-4"></div>
            <p
              className="text-red-300"
              style={{
                fontSize: "8px",
                fontFamily: "'Press Start 2P', monospace",
              }}
            >
              JOINING ROOM {roomId}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentPlayer = gameState?.players.find((p) => p.id === currentUser.id);
  const currentFighter = gameState?.fighters.find(
    (f) => f.id === currentPlayer?.fighterId,
  );

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {/* Fixed positioned buttons */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-700 border-2 border-red-500 hover:bg-red-500 hover:text-black text-red-400 px-4 py-2 text-xs transition-colors"
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

      {/* Header */}
      <div
        className="border-b-4 border-red-500 bg-black"
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/multiplayer")}
                className="text-white hover:bg-gray-800 border-2 border-red-500"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "8px",
                }}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1
                  className="text-xl font-bold flex items-center gap-3 text-red-500"
                  style={{
                    fontSize: "14px",
                    textShadow: "2px 2px 0px #000",
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  <Swords className="h-6 w-6" />
                  FIGHTER GAME
                </h1>
                <p
                  className="text-red-300"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  ROOM: {roomId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Connection Status */}
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <Wifi className="h-4 w-4 text-green-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-red-500" />
                )}
                <span
                  className="text-sm font-medium text-red-300"
                  style={{
                    fontSize: "8px",
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  {isConnected ? "CONNECTED" : "DISCONNECTED"}
                </span>
              </div>

              {/* Game Status */}
              <div
                className={`px-4 py-2 border-2 text-black ${
                  gameStatus === "playing"
                    ? "bg-green-400 border-green-400"
                    : gameStatus === "waiting"
                      ? "bg-yellow-400 border-yellow-400"
                      : gameStatus === "finished"
                        ? "bg-red-400 border-red-400"
                        : "bg-gray-400 border-gray-400"
                }`}
                style={{
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                {gameStatus === "playing"
                  ? "PLAYING"
                  : gameStatus === "waiting"
                    ? "WAITING"
                    : gameStatus === "finished"
                      ? "FINISHED"
                      : "UNKNOWN"}
              </div>

              {/* Copy Shareable Link */}
              <Button
                variant="outline"
                size="sm"
                onClick={copyRoomId}
                className="bg-red-600 border-2 border-red-400 hover:bg-red-500 px-3 py-2 text-xs text-white transition-colors"
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                <Copy className="h-4 w-4 mr-2" />
                COPY SHAREABLE LINK
              </Button>

              {/* Refresh */}
              <Button
                variant="outline"
                size="sm"
                onClick={refreshGameState}
                className="bg-gray-700 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-black px-3 py-2"
                style={{
                  fontSize: "8px",
                  fontFamily: "'Press Start 2P', monospace",
                  boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                }}
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div
          className={`grid gap-6 ${isSidebarOpen ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"}`}
        >
          {/* Game Canvas */}
          <div className={isSidebarOpen ? "lg:col-span-3" : ""}>
            <div
              className="bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
            >
              <div className="bg-red-500 px-6 py-4 border-b-4 border-red-500">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    GAME ARENA
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={showGrid ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowGrid(!showGrid)}
                      className={`px-3 py-2 border-2 font-bold transition-colors ${
                        showGrid
                          ? "bg-green-400 border-green-400 text-black"
                          : "bg-gray-700 border-red-500 text-red-400 hover:bg-red-500 hover:text-black"
                      }`}
                      style={{
                        fontSize: "8px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
                      }}
                    >
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      GRID
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 flex justify-center">
                <div
                  className="border-4 border-red-500 rounded-lg overflow-hidden bg-black"
                  style={{ boxShadow: "0 0 0 4px #000, inset 0 0 0 2px #000" }}
                >
                  <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="block"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "1024px",
                      maxHeight: "576px",
                      imageRendering: "pixelated",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Game Info Sidebar */}
          {isSidebarOpen && (
            <div className="space-y-4">
              {/* Players */}
              <div
                className="bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-red-500 px-4 py-3 border-b-4 border-red-500">
                  <h3
                    className="flex items-center gap-2 text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    <Users className="h-4 w-4" />
                    PLAYERS ({gameState?.players.length || 0}/2)
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {gameState?.players.map((player) => {
                    const fighter = gameState.fighters.find(
                      (f) => f.id === player.fighterId,
                    );
                    return (
                      <div
                        key={player.id}
                        className="flex items-center justify-between p-3 bg-gray-800 border-2 border-red-500 rounded"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full border-2 border-white"
                            style={{
                              backgroundColor: fighter?.color || "#666",
                              boxShadow: "0 0 0 1px #000",
                            }}
                          />
                          <div>
                            <p
                              className="font-medium text-red-300"
                              style={{
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace",
                              }}
                            >
                              {player.username}
                            </p>
                            <p
                              className="text-sm text-red-400"
                              style={{
                                fontSize: "6px",
                                fontFamily: "'Press Start 2P', monospace",
                              }}
                            >
                              HP: {fighter?.health || 0}/
                              {fighter?.maxHealth || 100}
                            </p>
                          </div>
                        </div>
                        {player.id === currentUser.id && (
                          <div
                            className="border border-red-500 text-red-500 px-2 py-1"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            YOU
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Controls */}
              <div
                className="bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
              >
                <div className="bg-red-500 px-4 py-3 border-b-4 border-red-500">
                  <h3
                    className="text-black font-bold"
                    style={{
                      fontSize: "10px",
                      fontFamily: "'Press Start 2P', monospace",
                      textShadow: "1px 1px 0px #000",
                    }}
                  >
                    CONTROLS
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p
                        className="font-medium mb-2 text-red-300"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        PLAYER 1
                      </p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            A
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            LEFT
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            D
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            RIGHT
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            W
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            JUMP
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            SPACE
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            ATTACK
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p
                        className="font-medium mb-2 text-red-300"
                        style={{
                          fontSize: "8px",
                          fontFamily: "'Press Start 2P', monospace",
                        }}
                      >
                        PLAYER 2
                      </p>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            ←
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            LEFT
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            →
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            RIGHT
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            ↑
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            JUMP
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <kbd
                            className="bg-red-800 border-2 border-red-600 px-2 py-1 text-red-300 text-xs"
                            style={{
                              fontSize: "8px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            ↓
                          </kbd>
                          <span
                            className="text-red-400"
                            style={{
                              fontSize: "6px",
                              fontFamily: "'Press Start 2P', monospace",
                            }}
                          >
                            ATTACK
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-xs text-red-400"
                    style={{
                      fontSize: "6px",
                      fontFamily: "'Press Start 2P', monospace",
                    }}
                  >
                    LAST FIGHTER STANDING WINS!
                  </p>
                </div>
              </div>

              {/* Your Fighter Status */}
              {currentFighter && (
                <div
                  className="bg-gray-900 border-4 border-red-500 rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
                >
                  <div className="bg-red-500 px-4 py-3 border-b-4 border-red-500">
                    <h3
                      className="text-black font-bold"
                      style={{
                        fontSize: "10px",
                        fontFamily: "'Press Start 2P', monospace",
                        textShadow: "1px 1px 0px #000",
                      }}
                    >
                      YOUR FIGHTER
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span
                          className="text-red-300"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          HEALTH:
                        </span>
                        <span
                          className="text-red-400 font-bold"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                            textShadow: "1px 1px 0px #000",
                          }}
                        >
                          {currentFighter.health}/100
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className="text-red-300"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          STATUS:
                        </span>
                        <span
                          className="text-red-400 font-bold capitalize"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                            textShadow: "1px 1px 0px #000",
                          }}
                        >
                          {currentFighter.spriteState}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className="text-red-300"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                          }}
                        >
                          ATTACKING:
                        </span>
                        <span
                          className="text-red-400 font-bold"
                          style={{
                            fontSize: "8px",
                            fontFamily: "'Press Start 2P', monospace",
                            textShadow: "1px 1px 0px #000",
                          }}
                        >
                          {currentFighter.isAttacking ? "YES" : "NO"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
