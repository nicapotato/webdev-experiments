import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Trophy, Target, Grid3X3 } from "lucide-react";
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  CELL_SIZE,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  createInitialSnake,
  createInitialFood,
  generateFood,
  moveSnake,
  checkFoodCollision,
  isValidDirectionChange,
  renderGame,
  Direction,
  type Position,
} from "@/games/multiplayer-games/snake/snake-game-multiplayer";
import { SnakePlayBackground } from "@/games/snake/SnakePlayBackground";

interface Snake {
  body: Position[];
  direction: Direction;
  alive: boolean;
}

interface Food {
  position: Position;
}

enum GameStatus {
  Waiting = "waiting",
  Playing = "playing",
  Paused = "paused",
  GameOver = "gameOver",
}

const arcadeFont = "'Press Start 2P', monospace";

export default function SnakeSinglePlayerPage() {
  const navigate = useNavigate();

  const [snake, setSnake] = useState<Snake>({
    body: createInitialSnake(),
    direction: Direction.Right,
    alive: true,
  });
  const [food, setFood] = useState<Food>({ position: createInitialFood() });
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Waiting);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(150);
  const [showGrid, setShowGrid] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const savedHighScore = localStorage.getItem("snake-high-score");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  const generateFoodPosition = useCallback((): Position => {
    return generateFood(BOARD_WIDTH, BOARD_HEIGHT, snake.body);
  }, [snake.body]);

  const moveSnakeLogic = useCallback(() => {
    if (gameStatus !== GameStatus.Playing) return;

    setSnake((prevSnake) => {
      const { newSnake, collided } = moveSnake(
        prevSnake.body,
        prevSnake.direction,
        BOARD_WIDTH,
        BOARD_HEIGHT,
      );

      if (collided) {
        setGameStatus(GameStatus.GameOver);
        return { ...prevSnake, alive: false };
      }

      if (checkFoodCollision(newSnake[0], food.position)) {
        setScore((prev) => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snake-high-score", newScore.toString());
          }
          return newScore;
        });
        setFood({ position: generateFoodPosition() });

        setGameSpeed((prev) => Math.max(80, prev - 5));

        return { ...prevSnake, body: newSnake };
      } else {
        const newBody = [...newSnake];
        newBody.pop();
        return { ...prevSnake, body: newBody };
      }
    });
  }, [gameStatus, food.position, generateFoodPosition, highScore]);

  useEffect(() => {
    if (gameStatus === GameStatus.Playing) {
      gameLoopRef.current = setInterval(moveSnakeLogic, gameSpeed);
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameStatus, moveSnakeLogic, gameSpeed]);

  const startGame = useCallback(() => {
    setGameStatus(GameStatus.Playing);
  }, []);

  const togglePause = useCallback(() => {
    if (gameStatus === GameStatus.Playing) {
      setGameStatus(GameStatus.Paused);
    } else if (gameStatus === GameStatus.Paused) {
      setGameStatus(GameStatus.Playing);
    }
  }, [gameStatus]);

  const restartGame = useCallback(() => {
    setSnake({
      body: createInitialSnake(),
      direction: Direction.Right,
      alive: true,
    });
    setFood({ position: createInitialFood() });
    setScore(0);
    setGameSpeed(150);
    setGameStatus(GameStatus.Waiting);
  }, []);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameStatus === GameStatus.GameOver) return;

      let newDirection: Direction | null = null;

      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          newDirection = Direction.Up;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          newDirection = Direction.Down;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          event.preventDefault();
          newDirection = Direction.Left;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          event.preventDefault();
          newDirection = Direction.Right;
          break;
        case " ":
          event.preventDefault();
          if (gameStatus === GameStatus.Waiting) {
            startGame();
          } else if (gameStatus === GameStatus.Playing) {
            setGameStatus(GameStatus.Paused);
          } else if (gameStatus === GameStatus.Paused) {
            setGameStatus(GameStatus.Playing);
          }
          break;
      }

      if (
        newDirection !== null &&
        isValidDirectionChange(snake.direction, newDirection)
      ) {
        setSnake((prev) => ({ ...prev, direction: newDirection! }));
      }
    },
    [snake.direction, gameStatus, startGame],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  /** Always `"playing"` for renderGame so multiplayer waiting/finished overlays never draw. */
  const renderGameCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gameState = {
      snakes: [
        {
          id: "single-player",
          body: snake.body,
          direction: snake.direction,
          alive: snake.alive,
          color: "#00ff00",
        },
      ],
      food: { position: food.position },
      boardWidth: BOARD_WIDTH,
      boardHeight: BOARD_HEIGHT,
      status: "playing" as const,
    };

    renderGame(ctx, gameState, CELL_SIZE, showGrid);

    if (gameStatus === GameStatus.Paused) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = "#ffffff";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
      ctx.fillText(
        "Press SPACE to Resume",
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2 + 20,
      );
    } else if (gameStatus === GameStatus.GameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = "#ffffff";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40);
      ctx.font = "16px Arial";
      ctx.fillText(
        `Final Score: ${score}`,
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2 - 10,
      );
      ctx.fillText(
        "Press R to Restart",
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2 + 20,
      );
    }
  }, [snake, food, gameStatus, score, showGrid]);

  useEffect(() => {
    const animate = () => {
      renderGameCanvas();
      requestAnimationFrame(animate);
    };
    animate();
  }, [renderGameCanvas]);

  useEffect(() => {
    const handleRestartKey = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        if (gameStatus === GameStatus.GameOver) {
          restartGame();
        }
      }
    };

    window.addEventListener("keydown", handleRestartKey);
    return () => window.removeEventListener("keydown", handleRestartKey);
  }, [gameStatus, restartGame]);

  return (
    <div
      className="relative h-screen w-full flex flex-col overflow-hidden bg-black text-white"
      style={{ fontFamily: arcadeFont }}
    >
      <SnakePlayBackground />

      <div className="fixed top-4 right-4 z-[100] flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => setIsSidebarOpen((o) => !o)}
          className="bg-gray-700 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 px-4 py-2 transition-colors"
          style={{
            fontSize: "8px",
            fontFamily: arcadeFont,
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
          }}
          aria-pressed={isSidebarOpen}
          aria-label={isSidebarOpen ? "Hide panel" : "Show panel"}
        >
          {isSidebarOpen ? "HIDE PANEL" : "SHOW PANEL"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-red-600 border-2 border-red-400 hover:bg-red-500 text-white px-4 py-2 transition-colors"
          style={{
            fontSize: "8px",
            fontFamily: arcadeFont,
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000",
          }}
          aria-label="Back to games"
        >
          BACK
        </button>
      </div>

      <div
        className={`relative z-10 flex flex-1 min-h-0 pt-14 ${isSidebarOpen ? "lg:flex-row lg:items-stretch lg:gap-0" : "flex-col items-stretch"}`}
      >
        <div
          className={`flex min-h-0 flex-1 flex-col px-3 pb-3 ${isSidebarOpen ? "lg:min-w-0 lg:flex-1" : ""}`}
        >
          <div className="mb-2 flex shrink-0 items-start justify-end gap-3 pr-1">
            <div
              className="flex items-center gap-2 text-yellow-400"
              style={{ fontSize: "10px", textShadow: "2px 2px 0 #000" }}
            >
              <Trophy className="h-4 w-4 shrink-0 text-yellow-500" />
              <span>HIGH {highScore}</span>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
            <div
              className="relative mx-auto w-full max-w-full overflow-hidden rounded-lg border-4 border-yellow-400 bg-black/90"
              style={{
                boxShadow:
                  "0 0 0 4px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(0,0,0,0.8)",
                width: `min(100%, calc((100vh - 8rem) * ${CANVAS_WIDTH} / ${CANVAS_HEIGHT}))`,
                aspectRatio: `${CANVAS_WIDTH} / ${CANVAS_HEIGHT}`,
              }}
            >
              <canvas
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                className="block h-full w-full"
                style={{
                  imageRendering: "pixelated",
                }}
              />

              {gameStatus === GameStatus.Waiting && (
                <div className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/70 px-4">
                  <p
                    className="text-center text-yellow-300"
                    style={{ fontSize: "10px", textShadow: "2px 2px 0 #000" }}
                  >
                    READY
                  </p>
                  <button
                    type="button"
                    onClick={startGame}
                    className="border-4 border-yellow-400 bg-green-600 px-10 py-5 text-black transition-colors hover:bg-green-500"
                    style={{
                      fontSize: "14px",
                      fontFamily: arcadeFont,
                      boxShadow: "0 0 0 4px #000, inset 0 0 0 2px #000",
                    }}
                  >
                    START
                  </button>
                  <p
                    className="text-center text-gray-400"
                    style={{ fontSize: "8px" }}
                  >
                    OR PRESS SPACE
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <aside
            className="w-full shrink-0 overflow-y-auto border-t-4 border-yellow-400 bg-black p-4 lg:w-96 lg:border-l-4 lg:border-t-0"
            style={{ boxShadow: "inset 4px 0 8px rgba(0,0,0,0.5)" }}
          >
            <div
              className="mb-4 border-4 border-yellow-400 bg-gray-900"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
            >
              <div className="border-b-4 border-yellow-400 bg-yellow-400 px-3 py-2">
                <h2
                  className="font-bold text-black"
                  style={{ fontSize: "10px", fontFamily: arcadeFont }}
                >
                  SNAKE — SINGLE
                </h2>
              </div>

              <div className="space-y-3 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge
                    variant={
                      gameStatus === GameStatus.Playing
                        ? "default"
                        : gameStatus === GameStatus.Paused
                          ? "secondary"
                          : gameStatus === GameStatus.GameOver
                            ? "destructive"
                            : "outline"
                    }
                    className="shrink-0 text-xs"
                  >
                    {gameStatus === GameStatus.Playing
                      ? "PLAYING"
                      : gameStatus === GameStatus.Paused
                        ? "PAUSED"
                        : gameStatus === GameStatus.GameOver
                          ? "GAME OVER"
                          : "READY"}
                  </Badge>
                  <div className="flex flex-wrap gap-1">
                    {gameStatus === GameStatus.Waiting && (
                      <Button
                        onClick={startGame}
                        size="sm"
                        className="border-2 border-yellow-400 bg-green-600 text-white hover:bg-green-500"
                        style={{ fontSize: "8px", fontFamily: arcadeFont }}
                      >
                        <Play className="mr-1 h-3 w-3" />
                        START
                      </Button>
                    )}
                    {gameStatus === GameStatus.Playing && (
                      <Button
                        onClick={togglePause}
                        variant="secondary"
                        size="sm"
                        style={{ fontSize: "8px", fontFamily: arcadeFont }}
                      >
                        <Pause className="mr-1 h-3 w-3" />
                        PAUSE
                      </Button>
                    )}
                    {gameStatus === GameStatus.Paused && (
                      <Button
                        onClick={togglePause}
                        size="sm"
                        className="border-2 border-yellow-400"
                        style={{ fontSize: "8px", fontFamily: arcadeFont }}
                      >
                        <Play className="mr-1 h-3 w-3" />
                        RESUME
                      </Button>
                    )}
                    {gameStatus === GameStatus.GameOver && (
                      <Button
                        onClick={restartGame}
                        size="sm"
                        style={{ fontSize: "8px", fontFamily: arcadeFont }}
                      >
                        <RotateCcw className="mr-1 h-3 w-3" />
                        RESTART
                      </Button>
                    )}
                  </div>
                </div>

                <div
                  className="border-2 border-gray-600 bg-black/80 p-3"
                  style={{ boxShadow: "0 0 0 2px #000" }}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-yellow-200">
                      <Grid3X3 className="h-3 w-3" />
                      <span style={{ fontSize: "8px" }}>GRID</span>
                    </div>
                    <Button
                      variant={showGrid ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowGrid(!showGrid)}
                      className="h-7 px-2"
                      style={{ fontSize: "8px", fontFamily: arcadeFont }}
                    >
                      {showGrid ? "ON" : "OFF"}
                    </Button>
                  </div>
                </div>

                <div
                  className="border-2 border-gray-600 bg-black/80 p-3"
                  style={{ boxShadow: "0 0 0 2px #000" }}
                >
                  <div
                    className="mb-2 text-yellow-400"
                    style={{ fontSize: "8px" }}
                  >
                    STATS
                  </div>
                  <div className="space-y-1" style={{ fontSize: "8px" }}>
                    <div className="flex justify-between gap-2 text-gray-300">
                      <span className="flex items-center gap-1">
                        <Target className="h-3 w-3 text-green-400" />
                        SCORE
                      </span>
                      <span className="font-bold text-green-400">{score}</span>
                    </div>
                    <div className="flex justify-between gap-2 text-gray-300">
                      <span className="flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-yellow-500" />
                        HIGH
                      </span>
                      <span className="font-bold text-yellow-400">
                        {highScore}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>LEN</span>
                      <span>{snake.body.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SPD</span>
                      <span>{Math.round((150 - gameSpeed) / 7)}/10</span>
                    </div>
                  </div>
                </div>

                <div
                  className="border-2 border-gray-600 bg-black/80 p-3"
                  style={{ boxShadow: "0 0 0 2px #000" }}
                >
                  <div
                    className="mb-2 text-yellow-400"
                    style={{ fontSize: "8px" }}
                  >
                    HOW TO PLAY
                  </div>
                  <div className="space-y-1 text-gray-300" style={{ fontSize: "8px" }}>
                    <p>ARROWS / WASD — MOVE</p>
                    <p>EAT APPLES — GROW</p>
                    <p>WALLS WRAP</p>
                    <p>SPACE — PAUSE</p>
                    <p>R — RESTART (GAME OVER)</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
