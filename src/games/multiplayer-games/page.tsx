import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Gamepad2,
  Users,
  RefreshCw,
  ChevronDown,
  Settings,
  Eye,
  EyeOff,
  Grid3X3,
  ArrowRight,
  Users2,
  Zap,
  Crown,
  Swords,
  Play,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  generateRoomId,
  validateRoomId,
  getActiveRooms,
  type ActiveRoomInfo,
} from "@/games/multiplayer-games/snake/snake-game-multiplayer";
import {
  generateChessRoomId,
  validateChessRoomId,
  getActiveChessRooms,
  type ActiveChessRoomInfo,
} from "@/games/multiplayer-games/chess/chess-game-multiplayer";
import {
  generateCheckersRoomId,
  validateCheckersRoomId,
  getActiveCheckersRooms,
  type ActiveCheckersRoomInfo,
} from "@/games/multiplayer-games/checkers/checkers-game-multiplayer";
import {
  generateFighterRoomId,
  validateFighterRoomId,
  getActiveFighterRooms,
  type ActiveFighterRoomInfo,
} from "@/games/multiplayer-games/fighter/fighter-game-multiplayer";
import { allowMultiplayerJoin } from "@/lib/multiplayer-join-gate";
import { cn } from "@/lib/utils";
import { verifyRoomJoinPassword } from "@/games/multiplayer-games/verify-room-join";

// Game configurations for the right panel and gallery
type GameKey = "snake" | "chess" | "checkers" | "fighter";
type GameConfig = {
  name: string;
  description: string;
  maxPlayers: number;
  styles: string[];
  icon: LucideIcon;
  color: string;
  details: string;
  image?: string;
  gradient?: string;
  emoji?: string;
};

const gameConfigs: Record<GameKey, GameConfig> = {
  snake: {
    name: "Snake",
    description: "Classic multiplayer snake game with real-time competition",
    maxPlayers: 8,
    styles: ["Classic", "Speed", "Maze"],
    icon: Zap,
    color: "bg-green-500",
    image: "/games/snake/multiplayer-snake.jpg",
    details:
      "Compete with 2-8 players in this fast-paced snake game. Last snake standing wins!",
  },
  chess: {
    name: "Chess",
    description: "Strategic board game for two players",
    maxPlayers: 2,
    styles: ["Standard", "Blitz", "Rapid"],
    icon: Crown,
    color: "bg-blue-500",
    image: "/games/chess/sample-screenshot.jpg",
    details:
      "Play the timeless game of chess with another player. Choose your time control and strategy.",
  },
  checkers: {
    name: "Checkers",
    description: "Classic checkers game with jumping mechanics",
    maxPlayers: 2,
    styles: ["Standard", "International"],
    icon: Grid3X3,
    color: "bg-orange-500",
    image: "/games/checkers/sample-screenshot.jpg",
    details:
      "Jump over your opponent's pieces to capture them. First to capture all pieces wins!",
  },
  fighter: {
    name: "Fighter",
    description: "Real-time fighting game with combos and special moves",
    maxPlayers: 2,
    styles: ["Arcade", "Street Fighter", "Mortal Kombat"],
    icon: Swords,
    color: "bg-red-500",
    // Match single player fighter variation style (gradient + emoji)
    gradient: "bg-gradient-to-br from-red-800 via-red-600 to-orange-600",
    emoji: "⚔️",
    details:
      "Battle it out in this fast-paced fighting game. Master combos and special moves to win!",
  },
};

export default function MultiplayerGameLobbyPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [roomIdInput, setRoomIdInput] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [activeRooms, setActiveRooms] = useState<ActiveRoomInfo[]>([]);
  const [activeChessRooms, setActiveChessRooms] = useState<
    ActiveChessRoomInfo[]
  >([]);
  const [activeCheckersRooms, setActiveCheckersRooms] = useState<
    ActiveCheckersRoomInfo[]
  >([]);
  const [activeFighterRooms, setActiveFighterRooms] = useState<
    ActiveFighterRoomInfo[]
  >([]);
  const [isLoadingRooms, setIsLoadingRooms] = useState(false);

  // Layout state
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(true);
  const [rightPanelWidth, setRightPanelWidth] = useState(480);
  const splitContainerRef = useRef<HTMLDivElement | null>(null);

  // Right panel state
  const [rightPanelMode, setRightPanelMode] = useState<"gallery" | "expanded">(
    "gallery",
  );
  const [selectedGameForDetails, setSelectedGameForDetails] =
    useState<GameKey | null>(null);

  // Game creation state
  const [gameType, setGameType] = useState("all");
  const [numPlayers, setNumPlayers] = useState("2");
  const [roomGameType, setRoomGameType] = useState("basic");
  const [snakeTickMs, setSnakeTickMs] = useState("50");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [additionalRules, setAdditionalRules] = useState("");
  const [passwordProtectRoom, setPasswordProtectRoom] = useState(false);
  const [createRoomPassword, setCreateRoomPassword] = useState("");
  /** `${game}:${roomId}` when that row is showing the password field */
  const [joinPromptKey, setJoinPromptKey] = useState<string | null>(null);
  const [joinPasswordDraft, setJoinPasswordDraft] = useState<
    Record<string, string>
  >({});
  /** After join-check API returns 403 — red border on that row’s password field */
  const [joinPasswordRejected, setJoinPasswordRejected] = useState<
    Record<string, boolean>
  >({});
  /** Row currently awaiting verifyRoomJoinPassword (disables JOIN) */
  const [joinVerifyKey, setJoinVerifyKey] = useState<string | null>(null);

  // Currently selected game config (for right panel background)
  const selectedConfig = selectedGameForDetails
    ? gameConfigs[selectedGameForDetails]
    : null;

  // Get appropriate game icon based on theme
  const getGameIconSrc = () => {
    // Dark mode uses light icon, light mode uses dark icon (they are inverted)
    return theme === "dark"
      ? "/games/game-icon-light.svg"
      : "/games/game-icon-dark.svg";
  };

  // Fetch active rooms
  const fetchActiveRooms = async () => {
    setIsLoadingRooms(true);
    try {
      const [snakeRooms, chessRooms, checkersRooms, fighterRooms] =
        await Promise.all([
          getActiveRooms(),
          getActiveChessRooms(),
          getActiveCheckersRooms(),
          getActiveFighterRooms(),
        ]);
      setActiveRooms(snakeRooms);
      setActiveChessRooms(chessRooms);
      setActiveCheckersRooms(checkersRooms);
      setActiveFighterRooms(fighterRooms);
    } catch (error) {
      console.error("Failed to fetch active rooms:", error);
      toast.error("Failed to load active rooms");
    } finally {
      setIsLoadingRooms(false);
    }
  };

  // Load active rooms on mount
  useEffect(() => {
    fetchActiveRooms();
  }, []);

  // Initialize right panel width to 50% of available space (clamped by min/max)
  useEffect(() => {
    const container = splitContainerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const halfWidth = containerWidth / 2;
      const maxWidth = containerWidth * 0.7;
      setRightPanelWidth(Math.max(380, Math.min(maxWidth, halfWidth)));
    }
  }, []);

  const joinRowKey = (game: GameKey, roomId: string) => `${game}:${roomId}`;

  const lobbyRows = useMemo(
    () => [
      ...activeRooms.map((room) => ({ game: "snake" as const, room })),
      ...activeChessRooms.map((room) => ({ game: "chess" as const, room })),
      ...activeCheckersRooms.map((room) => ({ game: "checkers" as const, room })),
      ...activeFighterRooms.map((room) => ({ game: "fighter" as const, room })),
    ],
    [activeRooms, activeChessRooms, activeCheckersRooms, activeFighterRooms],
  );

  const gameRowBadgeClass = (game: GameKey) => {
    switch (game) {
      case "snake":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200";
      case "chess":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200";
      case "checkers":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200";
      case "fighter":
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200";
      default:
        return "bg-secondary";
    }
  };

  // Join existing room (password comes from the row draft when protected)
  const joinRoom = (
    roomId?: string,
    gameType?: "snake" | "chess" | "checkers" | "fighter",
    roomPassword?: string,
  ) => {
    const targetRoomId = roomId || roomIdInput.trim();
    const targetGameType = gameType;

    if (!targetRoomId) {
      toast.error("Please enter a room ID");
      return;
    }

    if (!targetGameType) {
      toast.error("Game type is required");
      return;
    }

    let isValidRoomId = false;
    if (targetGameType === "snake") {
      isValidRoomId = validateRoomId(targetRoomId);
    } else if (targetGameType === "chess") {
      isValidRoomId = validateChessRoomId(targetRoomId);
    } else if (targetGameType === "checkers") {
      isValidRoomId = validateCheckersRoomId(targetRoomId);
    } else if (targetGameType === "fighter") {
      isValidRoomId = validateFighterRoomId(targetRoomId);
    }

    if (!isValidRoomId) {
      toast.error("Invalid room ID format");
      return;
    }

    const pw = roomPassword?.trim() || undefined;
    allowMultiplayerJoin(targetRoomId, targetGameType);
    navigate(`/multiplayer/${targetRoomId}/${targetGameType}`, {
      state: { roomPassword: pw },
    });
  };

  const handleLobbyJoinClick = async (
    game: GameKey,
    room: { id: string; passwordProtected?: boolean },
  ) => {
    const key = joinRowKey(game, room.id);
    const locked = !!room.passwordProtected;
    if (!locked) {
      setJoinPromptKey(null);
      setJoinPasswordRejected((prev) => ({ ...prev, [key]: false }));
      joinRoom(room.id, game, undefined);
      return;
    }
    if (joinPromptKey !== key) {
      setJoinPromptKey(key);
      setJoinPasswordRejected((prev) => ({ ...prev, [key]: false }));
      return;
    }
    const pw = (joinPasswordDraft[key] ?? "").trim();
    if (!pw) {
      toast.error("Enter the room password");
      return;
    }
    setJoinVerifyKey(key);
    setJoinPasswordRejected((prev) => ({ ...prev, [key]: false }));
    try {
      const result = await verifyRoomJoinPassword(game, room.id, pw);
      if (result === "wrong_password") {
        setJoinPasswordRejected((prev) => ({ ...prev, [key]: true }));
        toast.error("Wrong password");
        return;
      }
      if (result === "not_found") {
        toast.error("Room not found — try refreshing the list");
        return;
      }
      if (result === "error") {
        toast.error("Could not verify password");
        return;
      }
      joinRoom(room.id, game, pw);
    } finally {
      setJoinVerifyKey(null);
    }
  };

  // Handle game card click in gallery
  const handleGameCardClick = (gameType: GameKey) => {
    setSelectedGameForDetails(gameType);
    setRightPanelMode("expanded");
    // Reset game creation state
    setNumPlayers("2");
    setRoomGameType("basic");
    setSnakeTickMs("50");
    setSelectedStyle("");
    setAdditionalRules("");
    setPasswordProtectRoom(false);
    setCreateRoomPassword("");
  };

  // Handle browse games button
  const handleBrowseGames = () => {
    setRightPanelMode("gallery");
    setSelectedGameForDetails(null);
  };

  // Create new room
  const createRoom = async () => {
    if (!selectedGameForDetails) return;

    if (passwordProtectRoom && !createRoomPassword.trim()) {
      toast.error("Enter a room password");
      return;
    }

    const roomPasswordState = passwordProtectRoom
      ? createRoomPassword
      : undefined;

    setIsCreating(true);
    try {
      let newRoomId = "";
      if (selectedGameForDetails === "snake") {
        newRoomId = generateRoomId();
        allowMultiplayerJoin(newRoomId, "snake");
        navigate(
          `/multiplayer/${newRoomId}/snake?tickMs=${encodeURIComponent(snakeTickMs)}`,
          { state: { roomPassword: roomPasswordState } },
        );
        return;
      }
      if (selectedGameForDetails === "chess") {
        newRoomId = generateChessRoomId();
      } else if (selectedGameForDetails === "checkers") {
        newRoomId = generateCheckersRoomId();
      } else if (selectedGameForDetails === "fighter") {
        newRoomId = generateFighterRoomId();
      }
      allowMultiplayerJoin(newRoomId, selectedGameForDetails);
      navigate(`/multiplayer/${newRoomId}/${selectedGameForDetails}`, {
        state: { roomPassword: roomPasswordState },
      });
    } catch (error) {
      toast.error("Failed to create room");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1
                  className="uppercase text-4xl sm:text-5xl md:text-6xl font-black tracking-widest flex items-center gap-3"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  Multiplayer Games
                </h1>
                <p className="text-muted-foreground">
                  Create or join a multiplayer game
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="sm"
              >
                <Play className="h-4 w-4 mr-2" />
                Single Player Gallery
              </Button>
              <Button
                onClick={() => {
                  const newVisibility = !isRightPanelVisible;
                  setIsRightPanelVisible(newVisibility);
                  if (newVisibility) {
                    setRightPanelMode("gallery");
                    setSelectedGameForDetails(null);
                    const container = splitContainerRef.current;
                    if (container) {
                      const containerWidth = container.offsetWidth;
                      const maxWidth = containerWidth * 0.7;
                      const halfWidth = containerWidth / 2;
                      setRightPanelWidth(
                        Math.max(380, Math.min(maxWidth, halfWidth)),
                      );
                    }
                  }
                }}
                size="sm"
                className="px-4"
              >
                {isRightPanelVisible ? (
                  <EyeOff className="h-4 w-4 mr-2" />
                ) : (
                  <Eye className="h-4 w-4 mr-2" />
                )}
                Create Game
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="flex flex-1 overflow-hidden" ref={splitContainerRef}>
        {/* Left Container - Multiplayer Lobby */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="container mx-auto px-6 py-8 space-y-8 flex-1 overflow-y-auto">
            {/* Join Game Section */}
            <Card className="flex-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <img
                        src={getGameIconSrc()}
                        alt="Rooms"
                        width={20}
                        height={20}
                      />
                      Join Game (
                      {activeRooms.length +
                        activeChessRooms.length +
                        activeCheckersRooms.length +
                        activeFighterRooms.length}
                      )
                    </CardTitle>
                    <CardDescription>
                      Join an active game room with other players
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={fetchActiveRooms}
                    disabled={isLoadingRooms}
                  >
                    <RefreshCw
                      className={`h-4 w-4 mr-2 ${isLoadingRooms ? "animate-spin" : ""}`}
                    />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {lobbyRows.length === 0 ? (
                  <div className="text-center py-12">
                    <img
                      src={getGameIconSrc()}
                      alt="No active rooms"
                      width={64}
                      height={64}
                      className="mx-auto mb-4"
                    />
                    <p className="text-muted-foreground text-lg">
                      {isLoadingRooms
                        ? "Loading rooms..."
                        : "No active rooms available"}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Create a new game to get started!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {lobbyRows.map(({ game, room }) => {
                      const rowKey = joinRowKey(game, room.id);
                      const maxPlayers = gameConfigs[game].maxPlayers;
                      const locked = !!room.passwordProtected;
                      const promptOpen = joinPromptKey === rowKey;
                      const verifying = joinVerifyKey === rowKey;
                      const rejected = !!joinPasswordRejected[rowKey];
                      return (
                        <Card
                          key={rowKey}
                          className="border-border/80 shadow-sm overflow-hidden"
                        >
                          <CardContent className="p-4 sm:p-5">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-6">
                              <div className="min-w-0 flex-1 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                                <Badge
                                  variant="secondary"
                                  className={gameRowBadgeClass(game)}
                                >
                                  {gameConfigs[game].name}
                                </Badge>
                                {locked ? (
                                  <Badge
                                    variant="outline"
                                    className="gap-1 border-amber-500/60 text-amber-900 dark:text-amber-200 bg-amber-50/80 dark:bg-amber-950/40"
                                  >
                                    <Lock
                                      className="h-3.5 w-3.5 shrink-0"
                                      aria-hidden
                                    />
                                    Password
                                  </Badge>
                                ) : null}
                                <span className="font-mono font-medium text-sm sm:text-base break-all">
                                  {room.id}
                                </span>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground sm:ml-auto">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4 shrink-0" />
                                    <span>
                                      {room.playerCount}/{maxPlayers}
                                    </span>
                                  </div>
                                  <Badge
                                    variant={
                                      room.status === "waiting"
                                        ? "secondary"
                                        : "default"
                                    }
                                    className={
                                      room.status === "waiting"
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                                    }
                                  >
                                    {room.status}
                                  </Badge>
                                </div>
                              </div>

                              <div className="flex w-full shrink-0 flex-col gap-2 sm:min-w-[min(100%,320px)] lg:w-[min(100%,360px)]">
                                {locked && promptOpen ? (
                                  <div className="space-y-1.5">
                                    <Label
                                      htmlFor={`join-pw-${rowKey}`}
                                      className="text-xs text-muted-foreground"
                                    >
                                      Room password
                                    </Label>
                                    <Input
                                      id={`join-pw-${rowKey}`}
                                      type="password"
                                      name="room-password"
                                      autoComplete="off"
                                      autoCorrect="off"
                                      spellCheck={false}
                                      aria-invalid={rejected}
                                      value={joinPasswordDraft[rowKey] ?? ""}
                                      onChange={(e) => {
                                        const v = e.target.value;
                                        setJoinPasswordDraft((prev) => ({
                                          ...prev,
                                          [rowKey]: v,
                                        }));
                                        if (rejected) {
                                          setJoinPasswordRejected((prev) => ({
                                            ...prev,
                                            [rowKey]: false,
                                          }));
                                        }
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter" && !verifying) {
                                          e.preventDefault();
                                          void handleLobbyJoinClick(
                                            game,
                                            room,
                                          );
                                        }
                                      }}
                                      className={cn(
                                        "font-mono text-sm",
                                        rejected &&
                                          "border-red-500 border-2 ring-2 ring-red-500/35 focus-visible:ring-red-500/50",
                                      )}
                                      placeholder="••••••••"
                                    />
                                    <p className="text-[10px] text-muted-foreground leading-tight">
                                      Then tap JOIN.{" "}
                                      <button
                                        type="button"
                                        className="underline underline-offset-2 hover:text-foreground"
                                        onClick={() => {
                                          setJoinPromptKey(null);
                                          setJoinPasswordRejected((prev) => ({
                                            ...prev,
                                            [rowKey]: false,
                                          }));
                                          setJoinPasswordDraft((prev) => {
                                            const next = { ...prev };
                                            delete next[rowKey];
                                            return next;
                                          });
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </p>
                                  </div>
                                ) : null}

                                <button
                                  type="button"
                                  disabled={verifying}
                                  onClick={() =>
                                    void handleLobbyJoinClick(game, room)
                                  }
                                  style={{
                                    fontFamily: "'Press Start 2P', monospace",
                                  }}
                                  className="w-full py-3.5 px-5 uppercase tracking-[0.12em] text-[11px] sm:text-xs leading-relaxed bg-green-600 hover:bg-green-700 active:bg-green-800 text-white border-2 border-green-900/80 rounded-md shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.35)] hover:translate-y-px transition-all disabled:opacity-60 disabled:pointer-events-none"
                                >
                                  {verifying ? "…" : "JOIN"}
                                </button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resizable Divider */}
        {isRightPanelVisible && (
          <div
            className="w-1 bg-border cursor-col-resize hover:bg-accent transition-colors"
            onMouseDown={(e) => {
              const startX = e.clientX;
              const startWidth = rightPanelWidth;
              // Get the main container width for calculating 70% max width
              const mainContainer = e.currentTarget
                .parentElement as HTMLElement;
              const maxWidth = mainContainer
                ? mainContainer.offsetWidth * 0.7
                : 600;

              const handleMouseMove = (e: MouseEvent) => {
                const deltaX = startX - e.clientX;
                setRightPanelWidth(
                  Math.max(380, Math.min(maxWidth, startWidth + deltaX)),
                );
              };

              const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };

              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
          />
        )}

        {/* Right Container - Game Showcase */}
        {isRightPanelVisible && (
          <div
            className="relative bg-muted/30 border-l cq-right-panel"
            style={{ width: rightPanelWidth }}
          >
            {/* Background image/gradient when a card is selected (extended for average color effect) */}
            {rightPanelMode === "expanded" && selectedConfig && (
              <div
                className="absolute inset-x-0 top-0 h-full overflow-hidden"
                aria-hidden="true"
              >
                {selectedConfig.image ? (
                  <>
                    {/* Blurred background version for average color effect */}
                    <img
                      src={selectedConfig.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover pointer-events-none scale-110 blur-sm opacity-20"
                    />
                    {/* Main image overlay */}
                    <div className="absolute inset-0 top-0 h-1/2 overflow-hidden">
                      <img
                        src={selectedConfig.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                      />
                    </div>
                  </>
                ) : selectedConfig.gradient ? (
                  <div
                    className={`${selectedConfig.gradient} absolute inset-0`}
                  />
                ) : null}
              </div>
            )}

            {/* Top-right game name label in expanded mode */}
            {rightPanelMode === "expanded" && selectedConfig && (
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-black border border-white px-3 py-1 bg-white/80 backdrop-blur-sm rounded">
                  {selectedConfig.name}
                </h2>
              </div>
            )}
            <div className="relative z-10 h-full overflow-y-auto">
              {rightPanelMode === "gallery" ? (
                /* Gallery Mode */
                <div className="p-6 space-y-6">
                  <div className="text-left">
                    <h2
                      className="text-2xl sm:text-3xl font-extrabold uppercase mb-2"
                      style={{ fontFamily: "'Press Start 2P', monospace" }}
                    >
                      Choose a Game
                    </h2>
                    <p className="text-muted-foreground">
                      Select a game to create a multiplayer room
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 cq-gallery-grid">
                    {(
                      Object.entries(gameConfigs) as [GameKey, GameConfig][]
                    ).map(([gameType, config]) => {
                      return (
                        <article
                          key={gameType}
                          role="button"
                          tabIndex={0}
                          onClick={() => handleGameCardClick(gameType)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleGameCardClick(gameType);
                            }
                          }}
                          className="group relative rounded-xl overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur shadow-md ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/60 transition-all duration-300 cursor-pointer"
                        >
                          <div className="relative card-media aspect-[16/9] sm:aspect-[4/3]">
                            {config.image ? (
                              <img
                                src={config.image}
                                alt={`${config.name} image`}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                            ) : (
                              <div
                                className={`absolute inset-0 ${config.gradient ?? ""} flex items-center justify-center`}
                                aria-label={`${config.name} gradient`}
                              >
                                {config.emoji ? (
                                  <div className="text-white/90 text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                                    {config.emoji}
                                  </div>
                                ) : null}
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                              <h3
                                className="text-white text-2xl sm:text-3xl font-extrabold drop-shadow uppercase"
                                style={{
                                  fontFamily: "'Press Start 2P', monospace",
                                }}
                              >
                                {config.name}
                              </h3>
                              <div className="mt-2 flex items-center gap-2">
                                <Badge
                                  className="bg-white/20 text-white border-white/30"
                                  variant="outline"
                                >
                                  Max {config.maxPlayers} players
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Expanded Mode */
                selectedGameForDetails && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mix-blend-difference text-white"
                        onClick={handleBrowseGames}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Browse Games
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {(() => {
                        const config = gameConfigs[selectedGameForDetails];
                        return (
                          <>
                            <Card className="mt-16">
                              <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  <Settings className="h-5 w-5" />
                                  Game Settings
                                </CardTitle>
                                <CardDescription>
                                  Configure your game room parameters
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                  {config.details}
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                  <div className="space-y-2">
                                    <Label>Number of Players</Label>
                                    <Select
                                      value={numPlayers}
                                      onValueChange={setNumPlayers}
                                      disabled={
                                        selectedGameForDetails !== "snake"
                                      }
                                    >
                                      <SelectTrigger>
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="2">
                                          2 Players
                                        </SelectItem>
                                        {selectedGameForDetails === "snake" && (
                                          <>
                                            <SelectItem value="4">
                                              4 Players
                                            </SelectItem>
                                            <SelectItem value="6">
                                              6 Players
                                            </SelectItem>
                                            <SelectItem value="8">
                                              8 Players
                                            </SelectItem>
                                          </>
                                        )}
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div className="space-y-2">
                                    <Label>Game Style</Label>
                                    <Select
                                      value={selectedStyle}
                                      onValueChange={setSelectedStyle}
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select style" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {config.styles.map((style) => (
                                          <SelectItem
                                            key={style}
                                            value={style.toLowerCase()}
                                          >
                                            {style}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  {selectedGameForDetails === "snake" && (
                                    <div className="space-y-2">
                                      <Label>Snake Game Type</Label>
                                      <Select
                                        value={roomGameType}
                                        onValueChange={setRoomGameType}
                                      >
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="basic">
                                            Basic
                                          </SelectItem>
                                          <SelectItem value="advanced">
                                            Advanced
                                          </SelectItem>
                                          <SelectItem value="future-ideas">
                                            Future Ideas
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  )}

                                  {selectedGameForDetails === "snake" && (
                                    <div className="space-y-2">
                                      <Label>Game speed (server tick)</Label>
                                      <Select
                                        value={snakeTickMs}
                                        onValueChange={setSnakeTickMs}
                                      >
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="100">
                                            Slow — 100ms
                                          </SelectItem>
                                          <SelectItem value="50">
                                            Normal — 50ms
                                          </SelectItem>
                                          <SelectItem value="35">
                                            Fast — 35ms
                                          </SelectItem>
                                          <SelectItem value="25">
                                            Blitz — 25ms
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <p className="text-muted-foreground text-xs">
                                        Lower milliseconds = faster movement. Set
                                        when the room is created (host&apos;s first
                                        connection).
                                      </p>
                                    </div>
                                  )}

                                  <div className="space-y-2">
                                    <Label>Additional Rules</Label>
                                    <Input
                                      value={additionalRules}
                                      onChange={(e) =>
                                        setAdditionalRules(e.target.value)
                                      }
                                      placeholder="Custom rules (optional)"
                                    />
                                  </div>

                                  <div className="space-y-3 rounded-lg border p-4">
                                    <div className="flex items-center gap-2">
                                      <input
                                        type="checkbox"
                                        id="password-protect-room"
                                        checked={passwordProtectRoom}
                                        onChange={(e) =>
                                          setPasswordProtectRoom(e.target.checked)
                                        }
                                        className="h-4 w-4 rounded border"
                                      />
                                      <Label
                                        htmlFor="password-protect-room"
                                        className="cursor-pointer font-normal"
                                      >
                                        Password protect room
                                      </Label>
                                    </div>
                                    {passwordProtectRoom && (
                                      <div className="space-y-2">
                                        <Label htmlFor="create-room-pw">
                                          Room password
                                        </Label>
                                        <Input
                                          id="create-room-pw"
                                          type="password"
                                          autoComplete="new-password"
                                          value={createRoomPassword}
                                          onChange={(e) =>
                                            setCreateRoomPassword(
                                              e.target.value,
                                            )
                                          }
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <Button
                                  onClick={createRoom}
                                  disabled={isCreating}
                                  className="w-full"
                                  size="lg"
                                >
                                  {isCreating
                                    ? "Creating Room..."
                                    : `Create ${config.name} Room`}
                                </Button>
                              </CardContent>
                            </Card>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )
              )}
            </div>
            <style jsx>{`
              .cq-right-panel {
                container-type: inline-size;
              }
              @container (min-width: 640px) {
                .cq-gallery-grid {
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
}
