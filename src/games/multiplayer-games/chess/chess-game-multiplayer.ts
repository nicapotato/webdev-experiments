// Client utilities for chess multiplayer game

import { getGinHttpBase, getGinWsBase } from '@/env/gin'

export async function getChessWebSocketURL(
  roomId: string,
  userId: string,
  username: string,
): Promise<string> {
  const params = new URLSearchParams({
    userId,
    username: encodeURIComponent(username),
  });

  return `${getGinWsBase()}/api/chess/ws/${roomId}?${params.toString()}`;
}

// Active room info type
export interface ActiveChessRoomInfo {
  id: string;
  playerCount: number;
  status: string;
}

// Fetch active rooms from server
export async function getActiveChessRooms(): Promise<ActiveChessRoomInfo[]> {
  try {
    const response = await fetch(
      `${getGinHttpBase()}/api/chess/active-rooms`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch active rooms");
    }
    const data = await response.json();
    return data.rooms || [];
  } catch (error) {
    console.error("Error fetching active chess rooms:", error);
    return [];
  }
}

// Shared chess game utilities and types

// Position represents a square on the chess board
export interface ChessPosition {
  row: number;
  col: number;
}

// Piece types
export enum ChessPieceType {
  Empty = 0,
  Pawn = 1,
  Rook = 2,
  Knight = 3,
  Bishop = 4,
  Queen = 5,
  King = 6,
}

// Colors
export enum ChessColor {
  NoColor = 0,
  White = 1,
  Black = 2,
}

// Chess piece
export interface ChessPiece {
  type: ChessPieceType;
  color: ChessColor;
}

// Chess move
export interface ChessMove {
  from: ChessPosition;
  to: ChessPosition;
  promotion?: ChessPieceType;
}

// Castling rights
export interface ChessCastlingRights {
  whiteKingSide: boolean;
  whiteQueenSide: boolean;
  blackKingSide: boolean;
  blackQueenSide: boolean;
}

// Chess game state
export interface ChessGameState {
  id: string;
  players: ChessPlayer[];
  board: ChessPiece[][];
  currentPlayer: ChessColor;
  status: "waiting" | "playing" | "finished";
  winner?: string;
  castlingRights: ChessCastlingRights;
  enPassantTarget?: ChessPosition;
  halfMoveClock: number;
  fullMoveNumber: number;
  lastMove?: ChessMove;
  check: boolean;
  checkmate: boolean;
  stalemate: boolean;
  error?: string;
}

// Chess player
export interface ChessPlayer {
  id: string;
  username: string;
  color: ChessColor;
}

// Validate room ID format
export function validateChessRoomId(roomId: string): boolean {
  // Room ID should be alphanumeric with optional hyphens and underscores
  const roomIdRegex = /^[a-zA-Z0-9_-]+$/;
  return roomIdRegex.test(roomId) && roomId.length > 0 && roomId.length <= 50;
}

// Generate a random room ID
export function generateChessRoomId(): string {
  return `chess_${Math.random().toString(36).substr(2, 9)}`;
}

// Chess game constants
export const BOARD_SIZE = 8;

// Initialize board
export function initializeChessBoard(): ChessPiece[][] {
  const board: ChessPiece[][] = Array(BOARD_SIZE)
    .fill(null)
    .map(() =>
      Array(BOARD_SIZE).fill({
        type: ChessPieceType.Empty,
        color: ChessColor.NoColor,
      }),
    );

  // Place pawns
  for (let col = 0; col < BOARD_SIZE; col++) {
    board[1][col] = { type: ChessPieceType.Pawn, color: ChessColor.Black };
    board[6][col] = { type: ChessPieceType.Pawn, color: ChessColor.White };
  }

  // Place other pieces
  const pieceOrder = [
    ChessPieceType.Rook,
    ChessPieceType.Knight,
    ChessPieceType.Bishop,
    ChessPieceType.Queen,
    ChessPieceType.King,
    ChessPieceType.Bishop,
    ChessPieceType.Knight,
    ChessPieceType.Rook,
  ];

  for (let col = 0; col < BOARD_SIZE; col++) {
    board[0][col] = { type: pieceOrder[col], color: ChessColor.Black };
    board[7][col] = { type: pieceOrder[col], color: ChessColor.White };
  }

  return board;
}

// Get piece symbol for display
export function getChessPieceSymbol(piece: ChessPiece): string {
  if (piece.type === ChessPieceType.Empty) return "";

  const symbols = {
    [ChessPieceType.King]: { [ChessColor.White]: "♔", [ChessColor.Black]: "♚" },
    [ChessPieceType.Queen]: {
      [ChessColor.White]: "♕",
      [ChessColor.Black]: "♛",
    },
    [ChessPieceType.Rook]: { [ChessColor.White]: "♖", [ChessColor.Black]: "♜" },
    [ChessPieceType.Bishop]: {
      [ChessColor.White]: "♗",
      [ChessColor.Black]: "♝",
    },
    [ChessPieceType.Knight]: {
      [ChessColor.White]: "♘",
      [ChessColor.Black]: "♞",
    },
    [ChessPieceType.Pawn]: { [ChessColor.White]: "♙", [ChessColor.Black]: "♟" },
  };

  return symbols[piece.type]?.[piece.color] || "";
}

// Check if a position is valid
export function isValidChessPosition(pos: ChessPosition): boolean {
  return (
    pos.row >= 0 && pos.row < BOARD_SIZE && pos.col >= 0 && pos.col < BOARD_SIZE
  );
}

// Check if two positions are equal
export function positionsEqual(
  pos1: ChessPosition,
  pos2: ChessPosition,
): boolean {
  return pos1.row === pos2.row && pos1.col === pos2.col;
}

// Get color name
export function getChessColorName(color: ChessColor): string {
  switch (color) {
    case ChessColor.White:
      return "White";
    case ChessColor.Black:
      return "Black";
    default:
      return "None";
  }
}

// WebSocket client for chess game
export class ChessGameClient {
  private ws: WebSocket | null = null;
  private roomId: string;
  private userId: string;
  private username: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000; // 5 seconds
  private gameStateHandlers: ((gameState: ChessGameState) => void)[] = [];
  private connectionHandlers: ((connected: boolean) => void)[] = [];
  private errorHandlers: ((error: Error) => void)[] = [];

  constructor(roomId: string, userId: string, username: string) {
    this.roomId = roomId;
    this.userId = userId;
    this.username = username;
  }

  // Connect to the WebSocket
  async connect(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const wsUrl = await getChessWebSocketURL(
          this.roomId,
          this.userId,
          this.username,
        );
        console.log("Connecting to chess game:", wsUrl);

        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log(
            `Connected to chess game ${this.roomId} as ${this.username}`,
          );
          this.reconnectAttempts = 0;
          this.notifyConnectionHandlers(true);
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const gameState: ChessGameState = JSON.parse(event.data);
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
            `Disconnected from chess game ${this.roomId}:`,
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
      `Attempting to reconnect to chess game ${this.roomId} in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      this.connect().catch((error) => {
        console.error("Reconnection failed:", error);
        this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, delay);
  }

  // Send move
  sendMove(move: ChessMove): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected");
      this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }

    const message = {
      move: {
        from: { row: move.from.row, col: move.from.col },
        to: { row: move.to.row, col: move.to.col },
        ...(move.promotion && {
          promotion: this.getPieceTypeString(move.promotion),
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
  onGameState(handler: (gameState: ChessGameState) => void): void {
    this.gameStateHandlers.push(handler);
  }

  // Remove game state handler
  removeGameStateHandler(handler: (gameState: ChessGameState) => void): void {
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
  private notifyGameStateHandlers(gameState: ChessGameState): void {
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

  // Helper to convert piece type to string
  private getPieceTypeString(pieceType: ChessPieceType): string {
    switch (pieceType) {
      case ChessPieceType.Queen:
        return "queen";
      case ChessPieceType.Rook:
        return "rook";
      case ChessPieceType.Bishop:
        return "bishop";
      case ChessPieceType.Knight:
        return "knight";
      default:
        return "queen";
    }
  }
}
