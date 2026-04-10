// Client utilities for snake multiplayer game

import { getGinHttpBase, getGinWsBase } from "@/env/gin";
import {
  applySnakeTint,
  drawSpriteTile,
  getSegmentSpriteSpec,
  SNAKE_TILE_FOOD,
} from "./snake-sprite-draw";

export async function getSnakeWebSocketURL(
  roomId: string,
  userId: string,
  username: string,
  tickMs?: number,
  password?: string,
): Promise<string> {
  const params = new URLSearchParams({
    userId,
    username: encodeURIComponent(username),
  });
  if (tickMs !== undefined && Number.isFinite(tickMs)) {
    params.set("tickMs", String(Math.round(tickMs)));
  }
  if (password !== undefined && password.length > 0) {
    params.set("password", password);
  }

  return `${getGinWsBase()}/api/snake/ws/${roomId}?${params.toString()}`;
}

// Active room info type
export interface ActiveRoomInfo {
  id: string;
  playerCount: number;
  status: string;
  /** True when the host set a room password (join must supply it). */
  passwordProtected?: boolean;
}

// Fetch active rooms from server
export async function getActiveRooms(): Promise<ActiveRoomInfo[]> {
  try {
    const response = await fetch(
      `${getGinHttpBase()}/api/snake/active-rooms`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch active rooms");
    }
    const data = await response.json();
    return data.rooms || [];
  } catch (error) {
    console.error("Error fetching active rooms:", error);
    return [];
  }
}

// Shared game utilities and types for both single and multiplayer snake games

/** Resolve `public/` paths for any Vite `base` (e.g. GitHub project pages). */
function snakePublicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.replace(/^\//, "");
  return `${base}${p}`;
}

/** Card / promo art for hub and multiplayer lobby. */
export const SNAKE_PROMO_IMAGE = snakePublicAsset("games/snake/snake-promo.png");
/** Large repeating tile, faded behind the playfield (single + multiplayer). */
export const SNAKE_PLAY_BACKGROUND_TILE = snakePublicAsset(
  "games/snake/snake-background-1.png",
);
/** 3×3 sheet, 64×64 tiles (192×192) — single + multiplayer rendering. */
export const SNAKE_SPRITE_SHEET = snakePublicAsset(
  "games/snake/snake-spritesheet-ii.png",
);

let snakeSpriteSheetCache: HTMLImageElement | null = null;
let snakeSpriteSheetPromise: Promise<HTMLImageElement> | null = null;

/** Preload sheet; safe to call multiple times. */
export function loadSnakeSpriteSheet(): Promise<HTMLImageElement> {
  if (snakeSpriteSheetCache) return Promise.resolve(snakeSpriteSheetCache);
  if (!snakeSpriteSheetPromise) {
    snakeSpriteSheetPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        snakeSpriteSheetCache = img;
        resolve(img);
      };
      img.onerror = () =>
        reject(new Error("Failed to load snake sprite sheet"));
      img.src = SNAKE_SPRITE_SHEET;
    });
  }
  return snakeSpriteSheetPromise;
}

void loadSnakeSpriteSheet().catch(() => {
  /* fallback to rects until retry */
});

export function isSnakeSpriteSheetReady(): boolean {
  return snakeSpriteSheetCache !== null;
}

// Types for snake game
export interface Position {
  X: number;
  Y: number;
}

export interface Snake {
  id: string;
  body: Position[];
  direction: number;
  alive: boolean;
  color: string;
}

export interface Food {
  position: Position;
}

export interface Player {
  id: string;
  username: string;
  snakeId: string;
}

export interface GameState {
  id: string;
  players: Player[];
  snakes: Snake[];
  food: Food | null;
  status: "waiting" | "playing" | "finished";
  winner?: string;
  boardWidth: number;
  boardHeight: number;
  /** Server tick interval in ms (authoritative game speed). */
  tickMs?: number;
}

// Validate room ID format
export function validateRoomId(roomId: string): boolean {
  // Room ID should be alphanumeric with optional hyphens and underscores
  const roomIdRegex = /^[a-zA-Z0-9_-]+$/;
  return roomIdRegex.test(roomId) && roomId.length > 0 && roomId.length <= 50;
}

// Generate a random room ID
export function generateRoomId(): string {
  return `snake_${Math.random().toString(36).substr(2, 9)}`;
}

// Direction constants (matching Go backend)
export enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

// Game constants (~30% fewer cells vs 45×30 so the full board fits typical viewports)
export const BOARD_WIDTH = 32;
export const BOARD_HEIGHT = 21;
/** Pixel size per cell — slightly larger than before to keep sprites readable on the smaller grid. */
export const CELL_SIZE = 24;
export const CANVAS_WIDTH = BOARD_WIDTH * CELL_SIZE;
export const CANVAS_HEIGHT = BOARD_HEIGHT * CELL_SIZE;
export const GAME_SPEED = 150; // milliseconds

// Game utilities
/** Head at index 0, facing right (matches `Direction.Right`). */
export function createInitialSnake(): Position[] {
  return [
    { X: 12, Y: 10 },
    { X: 11, Y: 10 },
    { X: 10, Y: 10 },
  ];
}

export function createInitialFood(): Position {
  return { X: 20, Y: 10 };
}

export function generateFood(
  boardWidth: number,
  boardHeight: number,
  occupiedPositions: Position[],
): Position {
  let newPosition: Position;
  let attempts = 0;
  const maxAttempts = 100;

  do {
    newPosition = {
      X: Math.floor(Math.random() * boardWidth),
      Y: Math.floor(Math.random() * boardHeight),
    };
    attempts++;
  } while (
    attempts < maxAttempts &&
    occupiedPositions.some(
      (pos) => pos.X === newPosition.X && pos.Y === newPosition.Y,
    )
  );

  return newPosition;
}

export function moveSnake(
  snake: Position[],
  direction: Direction,
  boardWidth: number,
  boardHeight: number,
): { newSnake: Position[]; collided: boolean } {
  const head = { ...snake[0] };

  // Move head based on direction
  switch (direction) {
    case Direction.Up:
      head.Y -= 1;
      break;
    case Direction.Down:
      head.Y += 1;
      break;
    case Direction.Left:
      head.X -= 1;
      break;
    case Direction.Right:
      head.X += 1;
      break;
  }

  // Wrap around walls
  if (head.X < 0) head.X = boardWidth - 1;
  else if (head.X >= boardWidth) head.X = 0;
  if (head.Y < 0) head.Y = boardHeight - 1;
  else if (head.Y >= boardHeight) head.Y = 0;

  // Check self collision
  const collided = snake.some(
    (segment) => segment.X === head.X && segment.Y === head.Y,
  );

  const newSnake = [head, ...snake];

  return { newSnake, collided };
}

export function checkFoodCollision(
  snakeHead: Position,
  food: Position,
): boolean {
  return snakeHead.X === food.X && snakeHead.Y === food.Y;
}

export function isValidDirectionChange(
  currentDirection: Direction,
  newDirection: Direction,
): boolean {
  // Prevent reverse direction
  const opposites = {
    [Direction.Up]: Direction.Down,
    [Direction.Down]: Direction.Up,
    [Direction.Left]: Direction.Right,
    [Direction.Right]: Direction.Left,
  };
  return opposites[currentDirection] !== newDirection;
}

// Canvas rendering utilities (single-player + multiplayer both use this).
export function renderGame(
  ctx: CanvasRenderingContext2D,
  gameState: {
    snakes: Snake[];
    food: Food | null;
    boardWidth: number;
    boardHeight: number;
    status: "waiting" | "playing" | "finished";
    winner?: string;
  },
  cellSize: number = CELL_SIZE,
  showGrid: boolean = true,
): void {
  const canvasWidth = gameState.boardWidth * cellSize;
  const canvasHeight = gameState.boardHeight * cellSize;

  // Clear canvas
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw grid (optional)
  if (showGrid) {
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 1;

    for (let x = 0; x <= gameState.boardWidth; x++) {
      ctx.beginPath();
      ctx.moveTo(x * cellSize, 0);
      ctx.lineTo(x * cellSize, canvasHeight);
      ctx.stroke();
    }

    for (let y = 0; y <= gameState.boardHeight; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * cellSize);
      ctx.lineTo(canvasWidth, y * cellSize);
      ctx.stroke();
    }
  }

  const sheet = snakeSpriteSheetCache;

  // Draw food (tile 8)
  if (gameState.food) {
    const fx = gameState.food.position.X * cellSize;
    const fy = gameState.food.position.Y * cellSize;
    if (sheet) {
      drawSpriteTile(ctx, sheet, fx, fy, cellSize, SNAKE_TILE_FOOD, 0);
    } else {
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(fx, fy, cellSize, cellSize);
    }
  }

  // Draw snakes (shared sprite pipeline)
  gameState.snakes.forEach((snake) => {
    if (!snake.alive) return;

    snake.body.forEach((segment, index) => {
      const x = segment.X * cellSize;
      const y = segment.Y * cellSize;
      if (sheet) {
        const spec = getSegmentSpriteSpec(
          snake.body,
          index,
          snake.direction,
          gameState.boardWidth,
          gameState.boardHeight,
          { food: gameState.food?.position ?? null },
        );
        drawSpriteTile(ctx, sheet, x, y, cellSize, spec.tileIndex, spec.rotation);
        applySnakeTint(ctx, x, y, cellSize, snake.color);
      } else {
        ctx.fillStyle = index === 0 ? snake.color : snake.color + "80";
        ctx.fillRect(x, y, cellSize, cellSize);
        if (!showGrid) {
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, cellSize, cellSize);
        }
      }
    });
  });

  // Draw game status overlay
  if (gameState.status === "waiting") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "Waiting for another player...",
      canvasWidth / 2,
      canvasHeight / 2,
    );
  } else if (gameState.status === "finished") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Game Over!`, canvasWidth / 2, canvasHeight / 2 - 20);
    if (gameState.winner) {
      ctx.fillText(
        `Winner: ${gameState.winner}`,
        canvasWidth / 2,
        canvasHeight / 2 + 20,
      );
    }
  }
}

// WebSocket client for snake game
export class SnakeGameClient {
  private ws: WebSocket | null = null;
  private roomId: string;
  private userId: string;
  private username: string;
  /** Sent on connect/reconnect; omitted for joiners who learn tickMs from game state. */
  private tickMs?: number;
  private roomPassword?: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000; // 5 seconds
  private gameStateHandlers: ((gameState: GameState) => void)[] = [];
  private connectionHandlers: ((connected: boolean) => void)[] = [];
  private errorHandlers: ((error: Error) => void)[] = [];

  constructor(
    roomId: string,
    userId: string,
    username: string,
    tickMs?: number,
    roomPassword?: string,
  ) {
    this.roomId = roomId;
    this.userId = userId;
    this.username = username;
    this.tickMs = tickMs;
    this.roomPassword = roomPassword;
  }

  // Connect to the WebSocket
  async connect(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const wsUrl = await getSnakeWebSocketURL(
          this.roomId,
          this.userId,
          this.username,
          this.tickMs,
          this.roomPassword,
        );
        console.log("Connecting to snake game:", wsUrl);

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log(
            `Connected to snake game ${this.roomId} as ${this.username}`,
          );
          this.reconnectAttempts = 0;
          this.notifyConnectionHandlers(true);
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const gameState: GameState = JSON.parse(event.data);
            this.notifyGameStateHandlers(gameState);
          } catch (error) {
            console.error("Failed to parse WebSocket message:", error);
          }
        };

        this.ws.onclose = (event) => {
          console.log(
            `Disconnected from snake game ${this.roomId}:`,
            event.code,
            event.reason,
          );
          this.notifyConnectionHandlers(false);

          // Attempt to reconnect if not intentionally closed
          if (
            event.code !== 1000 &&
            this.reconnectAttempts < this.maxReconnectAttempts
          ) {
            this.attemptReconnect();
          }
        };

        this.ws.onerror = (error) => {
          console.error("WebSocket error:", error);
          this.notifyErrorHandlers(new Error("WebSocket connection error"));
          reject(error);
        };
      } catch (error) {
        console.error("Failed to create WebSocket connection:", error);
        reject(error);
      }
    });
  }

  // Attempt to reconnect with exponential backoff
  private attemptReconnect(): void {
    this.reconnectAttempts++;
    const delay =
      this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);

    console.log(
      `Attempting to reconnect to snake game ${this.roomId} in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      this.connect().catch((error) => {
        console.error("Reconnection failed:", error);
        this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, delay);
  }

  // Send direction change
  sendDirection(direction: Direction): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }

    const directionMap = {
      [Direction.Up]: "up",
      [Direction.Down]: "down",
      [Direction.Left]: "left",
      [Direction.Right]: "right",
    };

    const message = {
      direction: directionMap[direction],
    };

    try {
      this.ws.send(JSON.stringify(message));
    } catch (error) {
      console.error("Failed to send direction:", error);
      this.notifyErrorHandlers(new Error("Failed to send direction"));
    }
  }

  // Send restart game request
  restartGame(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }

    const message = {
      action: "restart",
    };

    try {
      this.ws.send(JSON.stringify(message));
    } catch (error) {
      console.error("Failed to send restart request:", error);
      this.notifyErrorHandlers(new Error("Failed to send restart request"));
    }
  }

  // Disconnect from the game
  disconnect(): void {
    if (this.ws) {
      this.ws.close(1000, "Client disconnecting");
      this.ws = null;
    }
    this.notifyConnectionHandlers(false);
  }

  // Check if connected
  isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  // Add game state handler
  onGameState(handler: (gameState: GameState) => void): void {
    this.gameStateHandlers.push(handler);
  }

  // Remove game state handler
  removeGameStateHandler(handler: (gameState: GameState) => void): void {
    const index = this.gameStateHandlers.indexOf(handler);
    if (index > -1) {
      this.gameStateHandlers.splice(index, 1);
    }
  }

  // Add connection handler
  onConnection(handler: (connected: boolean) => void): void {
    this.connectionHandlers.push(handler);
  }

  // Remove connection handler
  removeConnectionHandler(handler: (connected: boolean) => void): void {
    const index = this.connectionHandlers.indexOf(handler);
    if (index > -1) {
      this.connectionHandlers.splice(index, 1);
    }
  }

  // Add error handler
  onError(handler: (error: Error) => void): void {
    this.errorHandlers.push(handler);
  }

  // Remove error handler
  removeErrorHandler(handler: (error: Error) => void): void {
    const index = this.errorHandlers.indexOf(handler);
    if (index > -1) {
      this.errorHandlers.splice(index, 1);
    }
  }

  // Notify game state handlers
  private notifyGameStateHandlers(gameState: GameState): void {
    this.gameStateHandlers.forEach((handler) => {
      try {
        handler(gameState);
      } catch (error) {
        console.error("Error in game state handler:", error);
      }
    });
  }

  // Notify connection handlers
  private notifyConnectionHandlers(connected: boolean): void {
    this.connectionHandlers.forEach((handler) => {
      try {
        handler(connected);
      } catch (error) {
        console.error("Error in connection handler:", error);
      }
    });
  }

  // Notify error handlers
  private notifyErrorHandlers(error: Error): void {
    this.errorHandlers.forEach((handler) => {
      try {
        handler(error);
      } catch (handlerError) {
        console.error("Error in error handler:", handlerError);
      }
    });
  }

  // Get connection state as string
  getConnectionState(): string {
    if (!this.ws) return "CLOSED";

    switch (this.ws.readyState) {
      case WebSocket.CONNECTING:
        return "CONNECTING";
      case WebSocket.OPEN:
        return "OPEN";
      case WebSocket.CLOSING:
        return "CLOSING";
      case WebSocket.CLOSED:
        return "CLOSED";
      default:
        return "UNKNOWN";
    }
  }
}
