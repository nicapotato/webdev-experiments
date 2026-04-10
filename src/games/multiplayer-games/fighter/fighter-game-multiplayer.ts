// Client utilities for fighter multiplayer game

import { getGinHttpBase, getGinWsBase } from '@/env/gin'

export async function getFighterWebSocketURL(
  roomId: string,
  userId: string,
  username: string,
  password?: string,
): Promise<string> {
  const params = new URLSearchParams({
    userId,
    username: encodeURIComponent(username),
  });
  if (password !== undefined && password.length > 0) {
    params.set("password", password);
  }

  return `${getGinWsBase()}/api/fighter/ws/${roomId}?${params.toString()}`;
}

// Active room info type
export interface ActiveFighterRoomInfo {
  id: string;
  playerCount: number;
  status: string;
  passwordProtected?: boolean;
}

// Fetch active fighter rooms from server
export async function getActiveFighterRooms(): Promise<
  ActiveFighterRoomInfo[]
> {
  try {
    const response = await fetch(
      `${getGinHttpBase()}/api/fighter/active-rooms`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch active fighter rooms");
    }
    const data = await response.json();
    return data.rooms || [];
  } catch (error) {
    console.error("Error fetching active fighter rooms:", error);
    return [];
  }
}

// Validate room ID format
export function validateFighterRoomId(roomId: string): boolean {
  // Room ID should be alphanumeric with optional hyphens and underscores
  const roomIdRegex = /^[a-zA-Z0-9_-]+$/;
  return roomIdRegex.test(roomId) && roomId.length > 0 && roomId.length <= 50;
}

// Generate a random room ID
export function generateFighterRoomId(): string {
  return `fighter_${Math.random().toString(36).substr(2, 9)}`;
}

// Shared fighter game types and interfaces

// Position represents a 2D position
export interface Position {
  x: number;
  y: number;
}

// Velocity represents movement velocity
export interface Velocity {
  x: number;
  y: number;
}

// SpriteData represents sprite configuration
export interface SpriteData {
  imageSrc: string;
  framesMax: number;
}

// Sprites represents all sprite states for a fighter
export interface Sprites {
  idle: SpriteData;
  run: SpriteData;
  jump: SpriteData;
  fall: SpriteData;
  attack1: SpriteData;
  takeHit: SpriteData;
  death: SpriteData;
}

// AttackBox represents an attack collision area
export interface AttackBox {
  offset: Position;
  width: number;
  height: number;
}

// Sprite represents a game sprite with animation
export interface Sprite {
  id: string;
  position: Position;
  velocity: Velocity;
  width: number;
  height: number;
  color: string;
  health: number;
  maxHealth: number;
  attackBox: AttackBox;
  isAttacking: boolean;
  spriteState: string;
  framesCurrent: number;
  framesElapsed: number;
  dead: boolean;
  // Sprite configuration
  imageSrc: string;
  scale: number;
  framesMax: number;
  framesHold: number;
  offset: Position;
  sprites: Sprites;
}

// FighterGameState represents the current state of the fighter game
export interface FighterGameState {
  id: string;
  players: Player[];
  fighters: Sprite[];
  status: "waiting" | "playing" | "finished";
  winner?: string;
  canvasWidth: number;
  canvasHeight: number;
}

// Player represents a connected player
export interface Player {
  id: string;
  username: string;
  fighterId: string;
  input: InputAction;
}

// InputAction represents player input
export interface InputAction {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  attack1: boolean;
}

// Game constants
export const CANVAS_WIDTH = 1024;
export const CANVAS_HEIGHT = 576;
export const GRAVITY = 0.7;
export const GROUND_Y = 330;
export const GAME_SPEED = 16; // ~60 FPS

// Sprite image cache
const spriteImages: { [key: string]: HTMLImageElement } = {};

// Load sprite image
function loadSpriteImage(src: string): HTMLImageElement {
  if (!spriteImages[src]) {
    const img = new Image();
    img.src = src;
    spriteImages[src] = img;
  }
  return spriteImages[src];
}

// Canvas rendering utilities for fighter game
export function renderFighterGame(
  ctx: CanvasRenderingContext2D,
  gameState: FighterGameState,
  showGrid: boolean = false,
): void {
  // Clear canvas
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Draw background
  const backgroundImg = loadSpriteImage(
    "/games/fighting-game/img/background.png",
  );
  if (backgroundImg.complete) {
    ctx.drawImage(backgroundImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  // Draw shop
  const shopImg = loadSpriteImage("/games/fighting-game/img/shop.png");
  if (shopImg.complete) {
    ctx.drawImage(shopImg, 600, 128, 354, 354); // shop.png is 354x354 at 2.75x scale
  }

  // Draw overlay
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Draw grid (optional)
  if (showGrid) {
    ctx.strokeStyle = "#333333";
    ctx.lineWidth = 1;

    for (let x = 0; x <= CANVAS_WIDTH; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, CANVAS_HEIGHT);
      ctx.stroke();
    }

    for (let y = 0; y <= CANVAS_HEIGHT; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(CANVAS_WIDTH, y);
      ctx.stroke();
    }
  }

  // Draw fighters
  gameState.fighters.forEach((fighter) => {
    if (fighter.dead || !fighter.position) return;

    const img = loadSpriteImage(fighter.imageSrc);
    if (img.complete && fighter.framesMax > 0) {
      // Draw sprite with animation
      const spriteWidth = img.width / fighter.framesMax;
      const spriteHeight = img.height;

      ctx.drawImage(
        img,
        fighter.framesCurrent * spriteWidth, // source x
        0, // source y
        spriteWidth, // source width
        spriteHeight, // source height
        fighter.position.x - (fighter.offset?.x || 0), // destination x
        fighter.position.y - (fighter.offset?.y || 0), // destination y
        spriteWidth * (fighter.scale || 1), // destination width
        spriteHeight * (fighter.scale || 1), // destination height
      );
    } else {
      // Fallback: draw colored rectangle if image not loaded
      ctx.fillStyle = fighter.color || "#ff0000";
      ctx.fillRect(
        fighter.position.x,
        fighter.position.y,
        fighter.width || 50,
        fighter.height || 150,
      );
    }

    // Draw health bar above fighter
    const barWidth = 50;
    const barHeight = 5;
    const barX = fighter.position.x + ((fighter.width || 50) - barWidth) / 2;
    const barY = fighter.position.y - 15;

    // Background
    ctx.fillStyle = "#333333";
    ctx.fillRect(barX, barY, barWidth, barHeight);

    // Health
    ctx.fillStyle = "#00ff00";
    const healthWidth =
      ((fighter.health || 0) / (fighter.maxHealth || 100)) * barWidth;
    ctx.fillRect(barX, barY, healthWidth, barHeight);

    // Border
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;
    ctx.strokeRect(barX, barY, barWidth, barHeight);

    // Draw attack box when attacking (for debugging)
    if (
      fighter.isAttacking &&
      fighter.framesCurrent >= 3 &&
      fighter.attackBox
    ) {
      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        fighter.position.x + (fighter.attackBox.offset?.x || 0),
        fighter.position.y + (fighter.attackBox.offset?.y || 0),
        fighter.attackBox.width || 0,
        fighter.attackBox.height || 0,
      );
    }
  });

  // Draw game status overlay
  if (gameState.status === "waiting") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "Waiting for another player...",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
    );
  } else if (gameState.status === "finished") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillStyle = "#ffffff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Game Over!`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
    if (gameState.winner) {
      ctx.fillText(
        `Winner: ${gameState.winner}`,
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2 + 20,
      );
    }
    ctx.font = "12px Arial";
    ctx.fillStyle = "#cccccc";
    ctx.fillText(
      "PLAY AGAIN in the bar above",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2 + 52,
    );
  }
}

// WebSocket client for fighter game
export class FighterGameClient {
  private ws: WebSocket | null = null;
  private roomId: string;
  private userId: string;
  private username: string;
  private roomPassword?: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000; // 5 seconds
  private gameStateHandlers: ((gameState: FighterGameState) => void)[] = [];
  private connectionHandlers: ((connected: boolean) => void)[] = [];
  private errorHandlers: ((error: Error) => void)[] = [];

  constructor(
    roomId: string,
    userId: string,
    username: string,
    roomPassword?: string,
  ) {
    this.roomId = roomId;
    this.userId = userId;
    this.username = username;
    this.roomPassword = roomPassword;
  }

  // Connect to the WebSocket
  async connect(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const wsUrl = await getFighterWebSocketURL(
          this.roomId,
          this.userId,
          this.username,
          this.roomPassword,
        );
        console.log("Connecting to fighter game:", wsUrl);

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log(
            `Connected to fighter game ${this.roomId} as ${this.username}`,
          );
          this.reconnectAttempts = 0;
          this.notifyConnectionHandlers(true);
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const gameState: FighterGameState = JSON.parse(event.data);
            this.notifyGameStateHandlers(gameState);
          } catch (error) {
            console.error("Failed to parse WebSocket message:", error);
          }
        };

        this.ws.onclose = (event) => {
          console.log(
            `Disconnected from fighter game ${this.roomId}:`,
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
      `Attempting to reconnect to fighter game ${this.roomId} in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      this.connect().catch((error) => {
        console.error("Reconnection failed:", error);
        this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, delay);
  }

  // Send input update
  sendInput(input: InputAction): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }

    const message = {
      input: input,
    };

    try {
      this.ws.send(JSON.stringify(message));
    } catch (error) {
      console.error("Failed to send input:", error);
      this.notifyErrorHandlers(new Error("Failed to send input"));
    }
  }

  /** Ask the server to reset the match (same room, both players must still be connected). */
  sendRestart(): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    try {
      this.ws.send(JSON.stringify({ action: "restart" }));
    } catch (error) {
      console.error("Failed to send restart:", error);
      this.notifyErrorHandlers(new Error("Failed to send restart"));
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
  onGameState(handler: (gameState: FighterGameState) => void): void {
    this.gameStateHandlers.push(handler);
  }

  // Remove game state handler
  removeGameStateHandler(handler: (gameState: FighterGameState) => void): void {
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
  private notifyGameStateHandlers(gameState: FighterGameState): void {
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
