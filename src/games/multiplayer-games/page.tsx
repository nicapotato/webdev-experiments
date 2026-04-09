import { useState, useEffect, useRef } from "react";
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
  const [rightPanelWidth, setRightPanelWidth] = useState(400);
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
  const [selectedStyle, setSelectedStyle] = useState("");
  const [additionalRules, setAdditionalRules] = useState("");

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
      setRightPanelWidth(Math.max(300, Math.min(maxWidth, halfWidth)));
    }
  }, []);

  // Join existing room
  const joinRoom = (
    roomId?: string,
    gameType?: "snake" | "chess" | "checkers" | "fighter",
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

    navigate(
      `/multiplayer/${targetRoomId}/${targetGameType}`,
    );
  };

  // Handle game card click in gallery
  const handleGameCardClick = (gameType: GameKey) => {
    setSelectedGameForDetails(gameType);
    setRightPanelMode("expanded");
    // Reset game creation state
    setNumPlayers("2");
    setRoomGameType("basic");
    setSelectedStyle("");
    setAdditionalRules("");
  };

  // Handle browse games button
  const handleBrowseGames = () => {
    setRightPanelMode("gallery");
    setSelectedGameForDetails(null);
  };

  // Create new room
  const createRoom = async () => {
    if (!selectedGameForDetails) return;

    setIsCreating(true);
    try {
      let newRoomId = "";
      if (selectedGameForDetails === "snake") {
        newRoomId = generateRoomId();
      } else if (selectedGameForDetails === "chess") {
        newRoomId = generateChessRoomId();
      } else if (selectedGameForDetails === "checkers") {
        newRoomId = generateCheckersRoomId();
      } else if (selectedGameForDetails === "fighter") {
        newRoomId = generateFighterRoomId();
      }
      // TODO: Pass room configuration (numPlayers, roomGameType, additionalRules) to the room creation
      navigate(
        `/multiplayer/${newRoomId}/${selectedGameForDetails}`,
      );
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
                        Math.max(300, Math.min(maxWidth, halfWidth)),
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
                {activeRooms.length === 0 &&
                activeChessRooms.length === 0 &&
                activeCheckersRooms.length === 0 &&
                activeFighterRooms.length === 0 ? (
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
                    {/* Snake Rooms */}
                    {activeRooms.map((room) => (
                      <Card
                        key={`snake-${room.id}`}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => joinRoom(room.id, "snake")}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                              >
                                Snake
                              </Badge>
                              <span className="font-mono font-medium">
                                {room.id}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{room.playerCount}/2</span>
                              </div>
                              <Badge
                                variant={
                                  room.status === "waiting"
                                    ? "secondary"
                                    : "default"
                                }
                                className={
                                  room.status === "waiting"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {room.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    {/* Chess Rooms */}
                    {activeChessRooms.map((room) => (
                      <Card
                        key={`chess-${room.id}`}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => joinRoom(room.id, "chess")}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                Chess
                              </Badge>
                              <span className="font-mono font-medium">
                                {room.id}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{room.playerCount}/2</span>
                              </div>
                              <Badge
                                variant={
                                  room.status === "waiting"
                                    ? "secondary"
                                    : "default"
                                }
                                className={
                                  room.status === "waiting"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {room.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    {/* Checkers Rooms */}
                    {activeCheckersRooms.map((room) => (
                      <Card
                        key={`checkers-${room.id}`}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => joinRoom(room.id, "checkers")}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="secondary"
                                className="bg-orange-100 text-orange-800"
                              >
                                Checkers
                              </Badge>
                              <span className="font-mono font-medium">
                                {room.id}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{room.playerCount}/2</span>
                              </div>
                              <Badge
                                variant={
                                  room.status === "waiting"
                                    ? "secondary"
                                    : "default"
                                }
                                className={
                                  room.status === "waiting"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {room.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    {/* Fighter Rooms */}
                    {activeFighterRooms.map((room) => (
                      <Card
                        key={`fighter-${room.id}`}
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => joinRoom(room.id, "fighter")}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="secondary"
                                className="bg-red-100 text-red-800"
                              >
                                Fighter
                              </Badge>
                              <span className="font-mono font-medium">
                                {room.id}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{room.playerCount}/2</span>
                              </div>
                              <Badge
                                variant={
                                  room.status === "waiting"
                                    ? "secondary"
                                    : "default"
                                }
                                className={
                                  room.status === "waiting"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {room.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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
                  Math.max(300, Math.min(maxWidth, startWidth + deltaX)),
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
