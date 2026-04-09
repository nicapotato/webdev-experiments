var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as c, a as i } from "./gin-DHzzR3IR.js";
async function l(t, e, r) {
  const o = new URLSearchParams({ userId: e, username: encodeURIComponent(r) });
  return `${i()}/api/chess/ws/${t}?${o.toString()}`;
}
async function u() {
  try {
    const t = await fetch(`${c()}/api/chess/active-rooms`);
    if (!t.ok) throw new Error("Failed to fetch active rooms");
    return (await t.json()).rooms || [];
  } catch (t) {
    return console.error("Error fetching active chess rooms:", t), [];
  }
}
var h = ((t) => (t[t.Empty = 0] = "Empty", t[t.Pawn = 1] = "Pawn", t[t.Rook = 2] = "Rook", t[t.Knight = 3] = "Knight", t[t.Bishop = 4] = "Bishop", t[t.Queen = 5] = "Queen", t[t.King = 6] = "King", t))(h || {}), d = ((t) => (t[t.NoColor = 0] = "NoColor", t[t.White = 1] = "White", t[t.Black = 2] = "Black", t))(d || {});
function f(t) {
  return /^[a-zA-Z0-9_-]+$/.test(t) && t.length > 0 && t.length <= 50;
}
function g() {
  return `chess_${Math.random().toString(36).substr(2, 9)}`;
}
const a = 8;
function w(t) {
  var _a;
  return t.type === 0 ? "" : ((_a = { 6: { 1: "\u2654", 2: "\u265A" }, 5: { 1: "\u2655", 2: "\u265B" }, 2: { 1: "\u2656", 2: "\u265C" }, 4: { 1: "\u2657", 2: "\u265D" }, 3: { 1: "\u2658", 2: "\u265E" }, 1: { 1: "\u2659", 2: "\u265F" } }[t.type]) == null ? void 0 : _a[t.color]) || "";
}
function S(t) {
  return t.row >= 0 && t.row < a && t.col >= 0 && t.col < a;
}
function E(t, e) {
  return t.row === e.row && t.col === e.col;
}
function H(t) {
  switch (t) {
    case 1:
      return "White";
    case 2:
      return "Black";
    default:
      return "None";
  }
}
class y {
  constructor(e, r, o) {
    __publicField(this, "ws", null);
    __publicField(this, "roomId");
    __publicField(this, "userId");
    __publicField(this, "username");
    __publicField(this, "reconnectAttempts", 0);
    __publicField(this, "maxReconnectAttempts", 5);
    __publicField(this, "reconnectInterval", 5e3);
    __publicField(this, "gameStateHandlers", []);
    __publicField(this, "connectionHandlers", []);
    __publicField(this, "errorHandlers", []);
    this.roomId = e, this.userId = r, this.username = o;
  }
  async connect() {
    return new Promise(async (e, r) => {
      try {
        const o = await l(this.roomId, this.userId, this.username);
        console.log("Connecting to chess game:", o), this.ws = new WebSocket(o), this.ws.onopen = () => {
          console.log(`Connected to chess game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), e();
        }, this.ws.onmessage = (n) => {
          try {
            const s = JSON.parse(n.data);
            if (s.error) {
              this.notifyErrorHandlers(new Error(s.error));
              return;
            }
            this.notifyGameStateHandlers(s);
          } catch (s) {
            console.error("Failed to parse WebSocket message:", s);
          }
        }, this.ws.onclose = (n) => {
          console.log(`Disconnected from chess game ${this.roomId}:`, n.code, n.reason), this.notifyConnectionHandlers(false), n.code !== 1e3 && this.reconnectAttempts < this.maxReconnectAttempts && this.attemptReconnect();
        }, this.ws.onerror = (n) => {
          console.error("WebSocket error:", n), this.notifyErrorHandlers(new Error("WebSocket connection error")), r(n);
        };
      } catch (o) {
        console.error("Failed to create WebSocket connection:", o), r(o);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const e = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to chess game ${this.roomId} in ${e}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((r) => {
        console.error("Reconnection failed:", r), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, e);
  }
  sendMove(e) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const r = { move: { from: { row: e.from.row, col: e.from.col }, to: { row: e.to.row, col: e.to.col }, ...e.promotion && { promotion: this.getPieceTypeString(e.promotion) } } };
    try {
      this.ws.send(JSON.stringify(r));
    } catch (o) {
      console.error("Failed to send move:", o), this.notifyErrorHandlers(new Error("Failed to send move"));
    }
  }
  restartGame() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const e = { action: "restart" };
    try {
      this.ws.send(JSON.stringify(e));
    } catch (r) {
      console.error("Failed to send restart request:", r), this.notifyErrorHandlers(new Error("Failed to send restart request"));
    }
  }
  disconnect() {
    this.ws && (this.ws.close(1e3, "Client disconnecting"), this.ws = null), this.notifyConnectionHandlers(false);
  }
  isConnected() {
    var _a;
    return ((_a = this.ws) == null ? void 0 : _a.readyState) === WebSocket.OPEN;
  }
  onGameState(e) {
    this.gameStateHandlers.push(e);
  }
  removeGameStateHandler(e) {
    const r = this.gameStateHandlers.indexOf(e);
    r > -1 && this.gameStateHandlers.splice(r, 1);
  }
  onConnection(e) {
    this.connectionHandlers.push(e);
  }
  removeConnectionHandler(e) {
    const r = this.connectionHandlers.indexOf(e);
    r > -1 && this.connectionHandlers.splice(r, 1);
  }
  onError(e) {
    this.errorHandlers.push(e);
  }
  removeErrorHandler(e) {
    const r = this.errorHandlers.indexOf(e);
    r > -1 && this.errorHandlers.splice(r, 1);
  }
  notifyGameStateHandlers(e) {
    this.gameStateHandlers.forEach((r) => {
      try {
        r(e);
      } catch (o) {
        console.error("Error in game state handler:", o);
      }
    });
  }
  notifyConnectionHandlers(e) {
    this.connectionHandlers.forEach((r) => {
      try {
        r(e);
      } catch (o) {
        console.error("Error in connection handler:", o);
      }
    });
  }
  notifyErrorHandlers(e) {
    this.errorHandlers.forEach((r) => {
      try {
        r(e);
      } catch (o) {
        console.error("Error in error handler:", o);
      }
    });
  }
  getConnectionState() {
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
  getPieceTypeString(e) {
    switch (e) {
      case 5:
        return "queen";
      case 2:
        return "rook";
      case 4:
        return "bishop";
      case 3:
        return "knight";
      default:
        return "queen";
    }
  }
}
export {
  a as B,
  h as C,
  g as a,
  d as b,
  H as c,
  w as d,
  y as e,
  u as g,
  S as i,
  E as p,
  f as v
};
