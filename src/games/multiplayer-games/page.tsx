import { Fragment, useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Lock } from "lucide-react";
import { toast } from "sonner";
import {
  generateRoomId,
  validateRoomId,
  getActiveRooms,
  SNAKE_PROMO_IMAGE,
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
import { FloatingBackButton } from "@/components/FloatingBackButton";
import { MultiplayerLobbyPixelActions } from "@/components/MultiplayerLobbyPixelActions";

type GameKey = "snake" | "chess" | "checkers" | "fighter";

type GameConfig = {
  name: string;
  maxPlayers: number;
  styles: string[];
  details: string;
  image?: string;
  gradient?: string;
  emoji?: string;
};

const gameConfigs: Record<GameKey, GameConfig> = {
  snake: {
    name: "Snake",
    maxPlayers: 8,
    styles: ["Classic", "Speed", "Maze"],
    image: SNAKE_PROMO_IMAGE,
    details:
      "Compete with 2-8 players in this fast-paced snake game. Last snake standing wins!",
  },
  chess: {
    name: "Chess",
    maxPlayers: 2,
    styles: ["Standard", "Blitz", "Rapid"],
    image: "/games/chess/sample-screenshot.jpg",
    details:
      "Play the timeless game of chess with another player. Choose your time control and strategy.",
  },
  checkers: {
    name: "Checkers",
    maxPlayers: 2,
    styles: ["Standard", "International"],
    image: "/games/checkers/sample-screenshot.jpg",
    details:
      "Jump over your opponent's pieces to capture them. First to capture all pieces wins!",
  },
  fighter: {
    name: "Fighter",
    maxPlayers: 2,
    styles: ["Arcade", "Street Fighter", "Mortal Kombat"],
    gradient: "bg-gradient-to-br from-neutral-950 via-neutral-900 to-black",
    emoji: "⚔️",
    details:
      "Battle it out in this fast-paced fighting game. Master combos and special moves to win!",
  },
};

const GAME_ORDER: GameKey[] = ["snake", "chess", "checkers", "fighter"];

/** Matches hub card palette order: Snake, Chess, Checkers, Fighter */
const GAME_HUB_CARD_CLASSES = [
  "hub-card--c0",
  "hub-card--c1",
  "hub-card--c2",
  "hub-card--c3",
] as const;

function parseSelectGames(value: string | null): Set<GameKey> {
  if (!value?.trim()) return new Set();
  const out = new Set<GameKey>();
  for (const part of value.split(",")) {
    const k = part.trim().toLowerCase();
    if (
      k === "snake" ||
      k === "chess" ||
      k === "checkers" ||
      k === "fighter"
    ) {
      out.add(k as GameKey);
    }
  }
  return out;
}

function formatTimeSinceLastRefresh(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  if (totalSec < 60) return `${totalSec}s`;
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  if (s === 0) return `${m} min`;
  return `${m} min ${s}s`;
}

export default function MultiplayerGameLobbyPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectKey = searchParams.get("select") ?? "";
  const selectedFilterGames = useMemo(
    () => parseSelectGames(selectKey),
    [selectKey],
  );
  const { theme, resolvedTheme } = useTheme();
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

  /** Set only after choosing a game in the create-game modal. */
  const [selectedGameForCreate, setSelectedGameForCreate] =
    useState<GameKey | null>(null);
  const [createGameModalOpen, setCreateGameModalOpen] = useState(false);

  const [numPlayers, setNumPlayers] = useState("2");
  const [roomGameType, setRoomGameType] = useState("basic");
  const [snakeTickMs, setSnakeTickMs] = useState(50);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [additionalRules, setAdditionalRules] = useState("");
  const [passwordProtectRoom, setPasswordProtectRoom] = useState(false);
  const [createRoomPassword, setCreateRoomPassword] = useState("");
  const [joinPromptKey, setJoinPromptKey] = useState<string | null>(null);
  const [joinPasswordDraft, setJoinPasswordDraft] = useState<
    Record<string, string>
  >({});
  const [joinPasswordRejected, setJoinPasswordRejected] = useState<
    Record<string, boolean>
  >({});
  const [joinVerifyKey, setJoinVerifyKey] = useState<string | null>(null);

  /** All | Open (no password) | Password-protected */
  const [passwordFilter, setPasswordFilter] = useState<
    "all" | "open" | "password"
  >("all");

  /** Wall-clock tick so “time since last refresh” updates every second. */
  const [refreshTick, setRefreshTick] = useState(0);
  const [lastRefreshAt, setLastRefreshAt] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRefreshTick((n) => n + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const getGameIconSrc = () => {
    return theme === "dark"
      ? "/games/game-icon-light.svg"
      : "/games/game-icon-dark.svg";
  };

  /** White asset on dark lobby; dark asset on light panel so it stays visible. */
  const emptyLobbyIconSrc =
    resolvedTheme === "light"
      ? "/games/game-icon-dark.svg"
      : "/games/game-icon-light.svg";

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
      setLastRefreshAt(Date.now());
    } catch (error) {
      console.error("Failed to fetch active rooms:", error);
      toast.error("Failed to load active rooms");
    } finally {
      setIsLoadingRooms(false);
    }
  };

  useEffect(() => {
    fetchActiveRooms();
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

  const filteredLobbyRows = useMemo(() => {
    if (selectedFilterGames.size === 0) return lobbyRows;
    return lobbyRows.filter(({ game }) => selectedFilterGames.has(game));
  }, [lobbyRows, selectedFilterGames]);

  const displayRows = useMemo(() => {
    return filteredLobbyRows.filter(({ room }) => {
      const locked = !!room.passwordProtected;
      if (passwordFilter === "all") return true;
      if (passwordFilter === "open") return !locked;
      return locked;
    });
  }, [filteredLobbyRows, passwordFilter]);

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

  const joinRoom = (
    roomId: string,
    gameType: GameKey,
    roomPassword?: string,
  ) => {
    let isValidRoomId = false;
    if (gameType === "snake") {
      isValidRoomId = validateRoomId(roomId);
    } else if (gameType === "chess") {
      isValidRoomId = validateChessRoomId(roomId);
    } else if (gameType === "checkers") {
      isValidRoomId = validateCheckersRoomId(roomId);
    } else if (gameType === "fighter") {
      isValidRoomId = validateFighterRoomId(roomId);
    }

    if (!isValidRoomId) {
      toast.error("Invalid room ID format");
      return;
    }

    const pw = roomPassword?.trim() || undefined;
    allowMultiplayerJoin(roomId, gameType);
    navigate(`/multiplayer/${roomId}/${gameType}`, {
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

  const toggleFilterGame = (game: GameKey) => {
    const next = new Set(selectedFilterGames);
    if (next.has(game)) next.delete(game);
    else next.add(game);
    const params = new URLSearchParams(searchParams);
    if (next.size === 0) params.delete("select");
    else params.set("select", [...next].sort().join(","));
    setSearchParams(params, { replace: true });
  };

  const resetCreateFormDefaults = () => {
    setNumPlayers("2");
    setRoomGameType("basic");
    setSnakeTickMs(50);
    setSelectedStyle("");
    setAdditionalRules("");
    setPasswordProtectRoom(false);
    setCreateRoomPassword("");
  };

  const pickGameInCreateModal = (game: GameKey) => {
    resetCreateFormDefaults();
    setSelectedGameForCreate(game);
    setCreateGameModalOpen(false);
  };

  const handleCloseCreatePanel = () => {
    setSelectedGameForCreate(null);
  };

  const createRoom = async () => {
    if (!selectedGameForCreate) return;

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
      if (selectedGameForCreate === "snake") {
        newRoomId = generateRoomId();
        allowMultiplayerJoin(newRoomId, "snake");
        navigate(
          `/multiplayer/${newRoomId}/snake?tickMs=${encodeURIComponent(String(snakeTickMs))}`,
          { state: { roomPassword: roomPasswordState } },
        );
        return;
      }
      if (selectedGameForCreate === "chess") {
        newRoomId = generateChessRoomId();
      } else if (selectedGameForCreate === "checkers") {
        newRoomId = generateCheckersRoomId();
      } else if (selectedGameForCreate === "fighter") {
        newRoomId = generateFighterRoomId();
      }
      allowMultiplayerJoin(newRoomId, selectedGameForCreate);
      navigate(`/multiplayer/${newRoomId}/${selectedGameForCreate}`, {
        state: { roomPassword: roomPasswordState },
      });
    } catch (error) {
      toast.error("Failed to create room");
    } finally {
      setIsCreating(false);
    }
  };

  const totalRoomCount =
    activeRooms.length +
    activeChessRooms.length +
    activeCheckersRooms.length +
    activeFighterRooms.length;

  const refreshAgeMs = useMemo(() => {
    void refreshTick;
    if (lastRefreshAt == null) return null;
    return Date.now() - lastRefreshAt;
  }, [lastRefreshAt, refreshTick]);

  const refreshToneClass =
    refreshAgeMs == null
      ? "multiplayer-lobby__pixel-refresh--fresh"
      : refreshAgeMs >= 300_000
        ? "multiplayer-lobby__pixel-refresh--very-stale"
        : refreshAgeMs >= 60_000
          ? "multiplayer-lobby__pixel-refresh--stale"
          : "multiplayer-lobby__pixel-refresh--fresh";

  const anyLobbyFilterActive =
    selectedFilterGames.size > 0 || passwordFilter !== "all";

  return (
    <div className="app-root app-root--home hub-page min-h-full">
      <FloatingBackButton to="/" label="Back to hub" />

      <div className="hub hub--multiplayer-wide pb-8">
        <header className="hub__header">
          <div className="flex flex-wrap items-start justify-between gap-4 gap-y-2 mb-0">
            <div className="min-w-0 flex-1 max-w-[min(100%,28rem)]">
              <h1 className="hub__title--pixel">MULTIPLAYER</h1>
            </div>
            <Link
              to="/"
              className="multiplayer-lobby__nav-link shrink-0 self-start text-right max-sm:w-full max-sm:text-left"
            >
              SINGLE PLAYER GALLERY →
            </Link>
          </div>
          <p className="multiplayer-lobby__lede">
            Tap a game card or use the table filters. Use{" "}
            <strong>CREATE GAME</strong> to host (pick the game in the dialog
            first).
          </p>
        </header>

        <section className="mb-8" aria-labelledby="pick-game-heading">
          <h2
            id="pick-game-heading"
            className="hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]"
          >
            CHOOSE A GAME
          </h2>
          <div className="multiplayer-lobby__game-grid">
            {GAME_ORDER.map((gameKey, i) => {
              const config = gameConfigs[gameKey];
              const selected = selectedFilterGames.has(gameKey);
              return (
                <button
                  key={gameKey}
                  type="button"
                  onClick={() => toggleFilterGame(gameKey)}
                  className={cn(
                    "hub-card multiplayer-lobby__game-card text-left",
                    GAME_HUB_CARD_CLASSES[i],
                    selected && "multiplayer-lobby__game-card--selected",
                  )}
                >
                  <div className="multiplayer-lobby__game-card-inner">
                    {config.image ? (
                      <img
                        src={config.image}
                        alt=""
                        className="multiplayer-lobby__game-card-bg"
                      />
                    ) : config.gradient ? (
                      <div
                        className={cn(
                          "multiplayer-lobby__game-card-bg flex items-center justify-center",
                          config.gradient,
                        )}
                        aria-hidden
                      >
                        {config.emoji ? (
                          <span className="multiplayer-lobby__game-card-emoji">
                            {config.emoji}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <div
                      className="multiplayer-lobby__game-card-scrim"
                      aria-hidden
                    />
                    <div
                      className="multiplayer-lobby__game-card-banner multiplayer-lobby__game-card-banner--black"
                      aria-hidden
                    />
                    <div className="multiplayer-lobby__game-card-labels">
                      <span className="multiplayer-lobby__game-card-title">
                        {config.name}
                      </span>
                      <span className="multiplayer-lobby__game-card-meta">
                        MAX {config.maxPlayers} PLAYERS
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {selectedGameForCreate ? (
          <section
            className="multiplayer-lobby__panel mb-8"
            aria-labelledby="create-room-heading"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <button
                type="button"
                onClick={handleCloseCreatePanel}
                className="multiplayer-lobby__ghost-link inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
                <span>CLOSE CREATE</span>
              </button>
            </div>

            <h2
              id="create-room-heading"
              className="hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]"
            >
              CREATE — {gameConfigs[selectedGameForCreate].name.toUpperCase()}
            </h2>

            {(() => {
              const config = gameConfigs[selectedGameForCreate];
              return (
                <div className="space-y-4">
                  <p className="multiplayer-lobby__body-text !mb-0">
                    {config.details}
                  </p>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="multiplayer-lobby__label">
                        Number of players
                      </Label>
                      <Select
                        value={numPlayers}
                        onValueChange={setNumPlayers}
                        disabled={selectedGameForCreate !== "snake"}
                      >
                        <SelectTrigger className="multiplayer-lobby__input">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 Players</SelectItem>
                          {selectedGameForCreate === "snake" && (
                            <>
                              <SelectItem value="4">4 Players</SelectItem>
                              <SelectItem value="6">6 Players</SelectItem>
                              <SelectItem value="8">8 Players</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="multiplayer-lobby__label">
                        Game style
                      </Label>
                      <Select
                        value={selectedStyle}
                        onValueChange={setSelectedStyle}
                      >
                        <SelectTrigger className="multiplayer-lobby__input">
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

                    {selectedGameForCreate === "snake" ? (
                      <>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:col-span-2 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label className="multiplayer-lobby__label">
                              Snake game type
                            </Label>
                            <Select
                              value={roomGameType}
                              onValueChange={setRoomGameType}
                            >
                              <SelectTrigger className="multiplayer-lobby__input">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="future-ideas">
                                  Future Ideas
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex flex-col justify-end gap-1 pb-0.5">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <Label
                                className="multiplayer-lobby__label !mb-0"
                                htmlFor="snake-tick-ms"
                              >
                                Game speed (tick)
                              </Label>
                              <span className="multiplayer-lobby__tick-value">
                                {snakeTickMs} ms
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1.5 sm:col-span-2">
                          <input
                            id="snake-tick-ms"
                            type="range"
                            min={10}
                            max={400}
                            step={10}
                            value={snakeTickMs}
                            onChange={(e) =>
                              setSnakeTickMs(Number(e.target.value))
                            }
                            className="multiplayer-lobby__range w-full"
                          />
                          <p className="multiplayer-lobby__hint !mt-0">
                            Lower ms = faster movement. Set when the room is
                            created (host&apos;s first connection).
                          </p>
                        </div>
                      </>
                    ) : null}

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label className="multiplayer-lobby__label">
                        Additional rules
                      </Label>
                      <Input
                        value={additionalRules}
                        onChange={(e) => setAdditionalRules(e.target.value)}
                        placeholder="Custom rules (optional)"
                        className="multiplayer-lobby__input"
                      />
                    </div>

                    <div className="multiplayer-lobby__password-box space-y-2 sm:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 sm:grid sm:grid-cols-[auto_1fr] sm:items-end sm:gap-x-4">
                        <div className="flex items-center gap-2 min-w-0">
                          <input
                            type="checkbox"
                            id="password-protect-room"
                            checked={passwordProtectRoom}
                            onChange={(e) =>
                              setPasswordProtectRoom(e.target.checked)
                            }
                            className="multiplayer-lobby__checkbox"
                          />
                          <Label
                            htmlFor="password-protect-room"
                            className="multiplayer-lobby__label !mb-0 cursor-pointer font-normal"
                          >
                            Password protect room
                          </Label>
                        </div>
                        {passwordProtectRoom ? (
                          <div className="space-y-1.5 w-full min-w-0 sm:max-w-md">
                            <Label
                              htmlFor="create-room-pw"
                              className="multiplayer-lobby__label sr-only sm:not-sr-only"
                            >
                              Room password
                            </Label>
                            <Input
                              id="create-room-pw"
                              type="password"
                              autoComplete="new-password"
                              value={createRoomPassword}
                              onChange={(e) =>
                                setCreateRoomPassword(e.target.value)
                              }
                              className="multiplayer-lobby__input"
                              placeholder="Room password"
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => void createRoom()}
                    disabled={isCreating}
                    className="multiplayer-lobby__cta-primary w-full disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isCreating
                      ? "CREATING…"
                      : `CREATE ${config.name.toUpperCase()} ROOM`}
                  </button>
                </div>
              );
            })()}
          </section>
        ) : null}

        <section
          className="multiplayer-lobby__panel"
          aria-labelledby="join-game-heading"
        >
          <MultiplayerLobbyPixelActions
            joinSuffix={` (${displayRows.length}${
              anyLobbyFilterActive && totalRoomCount !== displayRows.length
                ? ` / ${totalRoomCount}`
                : ""
            })`}
            iconSrc={getGameIconSrc()}
            onCreateClick={() => setCreateGameModalOpen(true)}
            onRefreshClick={fetchActiveRooms}
            isRefreshing={isLoadingRooms}
            refreshTimeText={
              lastRefreshAt == null
                ? "—"
                : formatTimeSinceLastRefresh(refreshAgeMs ?? 0)
            }
            refreshToneClass={refreshToneClass}
            className="mb-4"
          />

          <div
            className="multiplayer-lobby__catalog-toolbar mb-4"
            aria-labelledby="lobby-filters-heading"
          >
            <p id="lobby-filters-heading" className="sr-only">
              Lobby filters
            </p>
            <div className="multiplayer-lobby__catalog-toolbar-row">
              <div className="multiplayer-lobby__filter-group">
                <span className="multiplayer-lobby__filter-label">Game</span>
                <div
                  className="multiplayer-lobby__filter-toggles"
                  role="group"
                  aria-label="Filter by game"
                >
                  {GAME_ORDER.map((gameKey) => {
                    const on = selectedFilterGames.has(gameKey);
                    return (
                      <button
                        key={gameKey}
                        type="button"
                        className={cn(
                          "multiplayer-lobby__filter-chip",
                          on && "multiplayer-lobby__filter-chip--active",
                        )}
                        aria-pressed={on}
                        onClick={() => toggleFilterGame(gameKey)}
                      >
                        {gameConfigs[gameKey].name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="multiplayer-lobby__filter-group">
                <span className="multiplayer-lobby__filter-label">Access</span>
                <div
                  className="multiplayer-lobby__filter-toggles"
                  role="group"
                  aria-label="Filter by password"
                >
                  {(
                    [
                      ["all", "All"],
                      ["open", "Open"],
                      ["password", "Password"],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      className={cn(
                        "multiplayer-lobby__filter-chip",
                        passwordFilter === key &&
                          "multiplayer-lobby__filter-chip--active",
                      )}
                      aria-pressed={passwordFilter === key}
                      onClick={() => setPasswordFilter(key)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {lobbyRows.length === 0 ? (
            <div className="multiplayer-lobby__empty-state">
              <img
                src={emptyLobbyIconSrc}
                alt=""
                width={80}
                height={80}
                className="multiplayer-lobby__empty-state-icon"
              />
              {isLoadingRooms ? (
                <p className="multiplayer-lobby__empty-state-title">
                  LOADING ROOMS…
                </p>
              ) : (
                <>
                  <p className="multiplayer-lobby__empty-state-title">
                    NO ACTIVE ROOMS
                  </p>
                  <p className="multiplayer-lobby__empty-state-hint">
                    Use CREATE GAME to host, or wait for another player to open
                    a room.
                  </p>
                </>
              )}
            </div>
          ) : filteredLobbyRows.length === 0 ? (
            <div className="text-center py-12 px-2">
              <p className="multiplayer-lobby__body-text text-base">
                No rooms match the game filter.
              </p>
              <p className="multiplayer-lobby__hint mt-2">
                Toggle games in the filter bar above, or clear all game toggles
                to list every room ({totalRoomCount} total).
              </p>
            </div>
          ) : displayRows.length === 0 ? (
            <div className="text-center py-12 px-2">
              <p className="multiplayer-lobby__body-text text-base">
                No rooms match the access filter.
              </p>
              <p className="multiplayer-lobby__hint mt-2">
                Set Access to All, or switch Open / Password to match listed
                rooms ({filteredLobbyRows.length} in current game selection).
              </p>
            </div>
          ) : (
            <div className="multiplayer-lobby__table-scroll">
              <table className="multiplayer-lobby__table">
                <thead>
                  <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Password</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">Players</th>
                    <th scope="col">Status</th>
                    <th scope="col">Join</th>
                  </tr>
                </thead>
                <tbody>
                  {displayRows.map(({ game, room }) => {
                    const rowKey = joinRowKey(game, room.id);
                    const maxPlayers = gameConfigs[game].maxPlayers;
                    const locked = !!room.passwordProtected;
                    const promptOpen = joinPromptKey === rowKey;
                    const verifying = joinVerifyKey === rowKey;
                    const rejected = !!joinPasswordRejected[rowKey];
                    return (
                      <Fragment key={rowKey}>
                        <tr
                          className={cn(
                            locked
                              ? "multiplayer-lobby__tr--password"
                              : "multiplayer-lobby__tr--open",
                          )}
                        >
                          <td>
                            <Badge
                              variant="secondary"
                              className={gameRowBadgeClass(game)}
                            >
                              {gameConfigs[game].name}
                            </Badge>
                          </td>
                          <td>
                            {locked ? (
                              <Badge
                                variant="outline"
                                className="multiplayer-lobby__password-badge gap-1"
                              >
                                <Lock
                                  className="h-3.5 w-3.5 shrink-0"
                                  aria-hidden
                                />
                                Yes
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="multiplayer-lobby__open-badge"
                              >
                                No
                              </Badge>
                            )}
                          </td>
                          <td className="multiplayer-lobby__cell-mono">
                            {room.id}
                          </td>
                          <td>
                            <span className="inline-flex items-center gap-1 multiplayer-lobby__muted">
                              <Users className="h-4 w-4 shrink-0" aria-hidden />
                              {room.playerCount}/{maxPlayers}
                            </span>
                          </td>
                          <td>
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
                          </td>
                          <td className="multiplayer-lobby__cell-join">
                            <button
                              type="button"
                              disabled={verifying}
                              onClick={() =>
                                void handleLobbyJoinClick(game, room)
                              }
                              className="multiplayer-lobby__cta-join w-full min-w-[5.5rem] disabled:opacity-60 disabled:pointer-events-none"
                            >
                              {verifying ? "…" : "JOIN"}
                            </button>
                          </td>
                        </tr>
                        {locked && promptOpen ? (
                          <tr className="multiplayer-lobby__tr-pw">
                            <td colSpan={6}>
                              <div className="multiplayer-lobby__pw-row-inner">
                                <Label
                                  htmlFor={`join-pw-${rowKey}`}
                                  className="multiplayer-lobby__label"
                                >
                                  Room password
                                </Label>
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
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
                                        void handleLobbyJoinClick(game, room);
                                      }
                                    }}
                                    className={cn(
                                      "multiplayer-lobby__input font-mono text-sm max-w-md",
                                      rejected &&
                                        "border-red-500 border-2 ring-2 ring-red-500/35 focus-visible:ring-red-500/50",
                                    )}
                                    placeholder="••••••••"
                                  />
                                  <button
                                    type="button"
                                    className="multiplayer-lobby__ghost-link shrink-0 text-sm"
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
                                </div>
                                <p className="multiplayer-lobby__hint !mb-0 mt-1 text-sm">
                                  Then tap JOIN in the row above.
                                </p>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {createGameModalOpen ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75"
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-game-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setCreateGameModalOpen(false);
            }}
          >
            <div
              className="multiplayer-lobby__panel max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                id="create-game-modal-title"
                className="hub__subtitle--pixel mb-4 !text-[clamp(0.42rem,1.55vw,0.55rem)]"
              >
                PICK A GAME TO CREATE
              </h2>
              <p className="multiplayer-lobby__body-text mb-4">
                Choose which game you are hosting. Room options appear on the
                next screen.
              </p>
              <div className="grid gap-2">
                {GAME_ORDER.map((gameKey) => (
                  <button
                    key={gameKey}
                    type="button"
                    onClick={() => pickGameInCreateModal(gameKey)}
                    className="multiplayer-lobby__cta-primary w-full"
                  >
                    {gameConfigs[gameKey].name.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="multiplayer-lobby__ghost-link mt-4 w-full text-center"
                onClick={() => setCreateGameModalOpen(false)}
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
