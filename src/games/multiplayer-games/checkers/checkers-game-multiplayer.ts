// Client utilities for checkers multiplayer game

import { getGinHttpBase, getGinWsBase } from '@/env/gin'

export async function getCheckersWebSocketURL(
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

  return `${getGinWsBase()}/api/checkers/ws/${roomId}?${params.toString()}`;
}

// Active room info type
export interface ActiveCheckersRoomInfo {
  id: string;
  playerCount: number;
  status: string;
  passwordProtected?: boolean;
}

// Fetch active rooms from server
export async function getActiveCheckersRooms(): Promise<
  ActiveCheckersRoomInfo[]
> {
  try {
    const response = await fetch(
      `${getGinHttpBase()}/api/checkers/active-rooms`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch active rooms");
    }
    const data = await response.json();
    return data.rooms || [];
  } catch (error) {
    console.error("Error fetching active checkers rooms:", error);
    return [];
  }
}

// Shared checkers game utilities and types

// Position represents a square on the checkers board
export interface CheckersPosition {
  row: number;
  col: number;
}

// Colors
export enum CheckersColor {
  NoColor = 0,
  Red = 1,
  Black = 2,
}

// Checkers piece
export interface CheckersPiece {
  type: "checker";
  color: CheckersColor;
  isKing: boolean;
}

// Checkers move (can include multiple jumps)
export interface CheckersMove {
  from: CheckersPosition;
  to: CheckersPosition;
  captures?: CheckersPosition[];
}

// Checkers game state
export interface CheckersGameState {
  id: string;
  players: CheckersPlayer[];
  board: (CheckersPiece | null)[][];
  currentPlayer: CheckersColor;
  status: "waiting" | "playing" | "finished";
  winner?: string;
  capturedPieces: { red: number; black: number };
  moveHistory: CheckersMoveHistory[];
  mustCapture: boolean;
  captureSequence: CheckersMove[];
  error?: string;
}

// Checkers player
export interface CheckersPlayer {
  id: string;
  username: string;
  color: CheckersColor;
}

// Move history entry
export interface CheckersMoveHistory {
  player: CheckersPlayer;
  moves: CheckersMove[];
  timestamp: number;
}

// Validate room ID format
export function validateCheckersRoomId(roomId: string): boolean {
  // Room ID should be alphanumeric with optional hyphens and underscores
  const roomIdRegex = /^[a-zA-Z0-9_-]+$/;
  return roomIdRegex.test(roomId) && roomId.length > 0 && roomId.length <= 50;
}

// Generate a random room ID
export function generateCheckersRoomId(): string {
  return `checkers_${Math.random().toString(36).substr(2, 9)}`;
}

// Checkers game constants
export const BOARD_SIZE = 8;

// Initialize board
export function initializeCheckersBoard(): (CheckersPiece | null)[][] {
  const board: (CheckersPiece | null)[][] = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));

  // Initialize red pieces (top 3 rows, dark squares only)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if ((row + col) % 2 === 1) {
        board[row][col] = {
          type: "checker",
          color: CheckersColor.Red,
          isKing: false,
        };
      }
    }
  }

  // Initialize black pieces (bottom 3 rows, dark squares only)
  for (let row = 5; row < 8; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if ((row + col) % 2 === 1) {
        board[row][col] = {
          type: "checker",
          color: CheckersColor.Black,
          isKing: false,
        };
      }
    }
  }

  return board;
}

// Check if a position is valid
export function isValidCheckersPosition(pos: CheckersPosition): boolean {
  return (
    pos.row >= 0 && pos.row < BOARD_SIZE && pos.col >= 0 && pos.col < BOARD_SIZE
  );
}

// Check if two positions are equal
export function positionsEqual(
  pos1: CheckersPosition,
  pos2: CheckersPosition,
): boolean {
  return pos1.row === pos2.row && pos1.col === pos2.col;
}

// Get color name
export function getCheckersColorName(color: CheckersColor): string {
  switch (color) {
    case CheckersColor.Red:
      return "Red";
    case CheckersColor.Black:
      return "Black";
    default:
      return "None";
  }
}

// WebSocket client for checkers game
export class CheckersGameClient {
  private ws: WebSocket | null = null;
  private roomId: string;
  private userId: string;
  private username: string;
  private roomPassword?: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000; // 5 seconds
  private gameStateHandlers: ((gameState: CheckersGameState) => void)[] = [];
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
        const wsUrl = await getCheckersWebSocketURL(
          this.roomId,
          this.userId,
          this.username,
          this.roomPassword,
        );
        console.log("Connecting to checkers game:", wsUrl);

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log(
            `Connected to checkers game ${this.roomId} as ${this.username}`,
          );
          this.reconnectAttempts = 0;
          this.notifyConnectionHandlers(true);
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const gameState: CheckersGameState = JSON.parse(event.data);
            // Handle error messages
            if (gameState.error) {
              this.notifyErrorHandlers(new Error(gameState.error));
              return;
            }
            this.notifyGameStateHandlers(gameState);
          } catch (error) {
            console.error("Failed to parse WebSocket message:", error);
          }
        };

        this.ws.onclose = (event) => {
          console.log(
            `Disconnected from checkers game ${this.roomId}:`,
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
      `Attempting to reconnect to checkers game ${this.roomId} in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      this.connect().catch((error) => {
        console.error("Reconnection failed:", error);
        this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, delay);
  }

  // Send move
  sendMove(move: CheckersMove): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }

    const message = {
      move: {
        from: { row: move.from.row, col: move.from.col },
        to: { row: move.to.row, col: move.to.col },
        ...(move.captures && {
          captures: move.captures.map((c) => ({ row: c.row, col: c.col })),
        }),
      },
    };

    try {
      this.ws.send(JSON.stringify(message));
    } catch (error) {
      console.error("Failed to send move:", error);
      this.notifyErrorHandlers(new Error("Failed to send move"));
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
  onGameState(handler: (gameState: CheckersGameState) => void): void {
    this.gameStateHandlers.push(handler);
  }

  // Remove game state handler
  removeGameStateHandler(
    handler: (gameState: CheckersGameState) => void,
  ): void {
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
  private notifyGameStateHandlers(gameState: CheckersGameState): void {
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
