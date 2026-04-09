import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  Play,
  Pause,
  RotateCcw,
  Trophy,
  Clock,
  Target,
  Grid3X3,
} from "lucide-react";
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

export default function SnakeSinglePlayerPage() {
  const navigate = useNavigate();

  // Game state
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

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastMoveTime = useRef<number>(0);

  // Game constants (imported from shared utilities)

  // Load high score on mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem("snake-high-score");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  // Generate random food position (using shared utility)
  const generateFoodPosition = useCallback((): Position => {
    return generateFood(BOARD_WIDTH, BOARD_HEIGHT, snake.body);
  }, [snake.body]);

  // Check collision with self (walls now wrap around)
  const checkCollision = useCallback(
    (head: Position, body: Position[]): boolean => {
      // Self collision
      return body.some(
        (segment) => segment.X === head.X && segment.Y === head.Y,
      );
    },
    [],
  );

  // Move snake (using shared utility)
  const moveSnakeLogic = useCallback(() => {
    if (gameStatus !== GameStatus.Playing) return;

    setSnake((prevSnake) => {
      const { newSnake, collided } = moveSnake(
        prevSnake.body,
        prevSnake.direction,
        BOARD_WIDTH,
        BOARD_HEIGHT,
      );

      // Check collision (only self collision now)
      if (collided) {
        setGameStatus(GameStatus.GameOver);
        return { ...prevSnake, alive: false };
      }

      // Check food collision
      if (checkFoodCollision(newSnake[0], food.position)) {
        // Grow snake (don't remove tail)
        setScore((prev) => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snake-high-score", newScore.toString());
          }
          return newScore;
        });
        setFood({ position: generateFoodPosition() });

        // Increase speed slightly
        setGameSpeed((prev) => Math.max(80, prev - 5));

        return { ...prevSnake, body: newSnake };
      } else {
        // Remove tail
        const newBody = [...newSnake];
        newBody.pop();
        return { ...prevSnake, body: newBody };
      }
    });
  }, [gameStatus, food.position, generateFoodPosition, highScore]);

  // Game loop
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

  // Handle keyboard input
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
          if (gameStatus === GameStatus.Playing) {
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
    [snake.direction, gameStatus],
  );

  // Set up keyboard listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  // Canvas rendering (using shared utility with single player adaptation)
  const renderGameCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Convert single player state to multiplayer-compatible format
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
      status:
        gameStatus === GameStatus.GameOver
          ? "finished"
          : gameStatus === GameStatus.Playing
            ? "playing"
            : gameStatus === GameStatus.Paused
              ? "playing"
              : ("waiting" as "waiting" | "playing" | "finished"),
    };

    renderGame(ctx, gameState, CELL_SIZE, showGrid);

    // Draw additional single player overlays
    if (gameStatus === GameStatus.Waiting) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = "#ffffff";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACE to Start", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    } else if (gameStatus === GameStatus.Paused) {
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

  // Animation loop
  useEffect(() => {
    const animate = () => {
      renderGameCanvas();
      requestAnimationFrame(animate);
    };
    animate();
  }, [renderGameCanvas]);

  // Start game
  const startGame = () => {
    setGameStatus(GameStatus.Playing);
  };

  // Pause/Resume game
  const togglePause = () => {
    if (gameStatus === GameStatus.Playing) {
      setGameStatus(GameStatus.Paused);
    } else if (gameStatus === GameStatus.Paused) {
      setGameStatus(GameStatus.Playing);
    }
  };

  // Restart game
  const restartGame = () => {
    setSnake({
      body: createInitialSnake(),
      direction: Direction.Right,
      alive: true,
    });
    setFood({ position: createInitialFood() });
    setScore(0);
    setGameSpeed(150);
    setGameStatus(GameStatus.Waiting);
  };

  // Handle restart key
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
  }, [gameStatus]);

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between bg-black text-white p-4 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-white hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Snake Game</h1>
            <p className="text-gray-300">Single Player Mode</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">High Score: {highScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Score: {score}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Game Canvas */}
        <div className="flex-1 flex items-center justify-center bg-black p-4">
          <div className="border border-white rounded-lg overflow-hidden shadow-lg">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="block"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "900px",
                maxHeight: "600px",
                imageRendering: "pixelated",
              }}
            />
          </div>
        </div>

        {/* Game Info Sidebar */}
        <div className="w-96 bg-gray-900 p-3 overflow-y-auto space-y-3">
          {/* Game Status & Controls */}
          <div className="flex items-center justify-between gap-2 mb-2">
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
              className="text-sm px-3 py-1 flex-shrink-0"
            >
              {gameStatus === GameStatus.Playing
                ? "Playing"
                : gameStatus === GameStatus.Paused
                  ? "Paused"
                  : gameStatus === GameStatus.GameOver
                    ? "Game Over"
                    : "Ready"}
            </Badge>
            <div className="flex gap-1">
              {gameStatus === GameStatus.Waiting && (
                <Button onClick={startGame} size="sm">
                  <Play className="h-3 w-3 mr-1" />
                  Start
                </Button>
              )}
              {gameStatus === GameStatus.Playing && (
                <Button onClick={togglePause} variant="secondary" size="sm">
                  <Pause className="h-3 w-3 mr-1" />
                  Pause
                </Button>
              )}
              {gameStatus === GameStatus.Paused && (
                <Button onClick={togglePause} size="sm">
                  <Play className="h-3 w-3 mr-1" />
                  Resume
                </Button>
              )}
              {gameStatus === GameStatus.GameOver && (
                <Button onClick={restartGame} size="sm">
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Restart
                </Button>
              )}
            </div>
          </div>

          {/* Game Settings */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Grid3X3 className="h-3 w-3" />
                <span className="text-xs font-medium">Show Grid</span>
              </div>
              <Button
                variant={showGrid ? "default" : "outline"}
                size="sm"
                onClick={() => setShowGrid(!showGrid)}
                className="h-6 px-2 text-xs"
              >
                {showGrid ? "ON" : "OFF"}
              </Button>
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-3">
            <div className="text-xs font-medium mb-2 text-gray-300">
              Game Stats
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Score:</span>
                <span className="font-bold text-green-400">{score}</span>
              </div>
              <div className="flex justify-between">
                <span>High Score:</span>
                <span className="font-bold text-yellow-400">{highScore}</span>
              </div>
              <div className="flex justify-between">
                <span>Length:</span>
                <span>{snake.body.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Speed:</span>
                <span>{Math.round((150 - gameSpeed) / 7)}/10</span>
              </div>
            </div>
          </Card>

          {/* Instructions */}
          <Card className="p-3">
            <div className="text-xs font-medium mb-2 text-gray-300">
              How to Play
            </div>
            <div className="text-xs space-y-1">
              <p>
                • <strong>Arrows/WASD</strong> to move
              </p>
              <p>
                • Eat <span className="text-red-400 font-bold">red food</span>{" "}
                to grow
              </p>
              <p>
                • <strong>Walls wrap around</strong>
              </p>
              <p>
                • Avoid your <strong>tail</strong>
              </p>
              <p>
                • <strong>SPACE</strong> to pause
              </p>
              <p>
                • <strong>R</strong> to restart
              </p>
            </div>
          </Card>

          {/* Quick Tips */}
          <Card className="p-3">
            <div className="text-xs font-medium mb-2 text-gray-300">Tips</div>
            <div className="text-xs space-y-1">
              <p>• Use wrap-around walls for shortcuts</p>
              <p>• Game speeds up as you eat</p>
              <p>• Fill the board for max score</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
