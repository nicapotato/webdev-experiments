var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as a, a as c } from "./gin-DHzzR3IR.js";
async function i(e, t, r) {
  const o = new URLSearchParams({ userId: t, username: encodeURIComponent(r) });
  return `${c()}/api/chess/ws/${e}?${o.toString()}`;
}
async function m() {
  try {
    const e = await fetch(`${a()}/api/chess/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active chess rooms:", e), [];
  }
}
var l = ((e) => (e[e.Empty = 0] = "Empty", e[e.Pawn = 1] = "Pawn", e[e.Rook = 2] = "Rook", e[e.Knight = 3] = "Knight", e[e.Bishop = 4] = "Bishop", e[e.Queen = 5] = "Queen", e[e.King = 6] = "King", e))(l || {}), h = ((e) => (e[e.NoColor = 0] = "NoColor", e[e.White = 1] = "White", e[e.Black = 2] = "Black", e))(h || {});
function u(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function f() {
  return `chess_${Math.random().toString(36).substr(2, 9)}`;
}
function g(e) {
  var _a;
  return e.type === 0 ? "" : ((_a = { 6: { 1: "\u2654", 2: "\u265A" }, 5: { 1: "\u2655", 2: "\u265B" }, 2: { 1: "\u2656", 2: "\u265C" }, 4: { 1: "\u2657", 2: "\u265D" }, 3: { 1: "\u2658", 2: "\u265E" }, 1: { 1: "\u2659", 2: "\u265F" } }[e.type]) == null ? void 0 : _a[e.color]) || "";
}
function w(e, t) {
  return e.row === t.row && e.col === t.col;
}
function S(e) {
  switch (e) {
    case 1:
      return "White";
    case 2:
      return "Black";
    default:
      return "None";
  }
}
class E {
  constructor(t, r, o) {
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
    this.roomId = t, this.userId = r, this.username = o;
  }
  async connect() {
    return new Promise(async (t, r) => {
      try {
        const o = await i(this.roomId, this.userId, this.username);
        console.log("Connecting to chess game:", o), this.ws = new WebSocket(o), this.ws.onopen = () => {
          console.log(`Connected to chess game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), t();
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
    const t = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to chess game ${this.roomId} in ${t}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((r) => {
        console.error("Reconnection failed:", r), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, t);
  }
  sendMove(t) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const r = { move: { from: { row: t.from.row, col: t.from.col }, to: { row: t.to.row, col: t.to.col }, ...t.promotion && { promotion: this.getPieceTypeString(t.promotion) } } };
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
    const t = { action: "restart" };
    try {
      this.ws.send(JSON.stringify(t));
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
  onGameState(t) {
    this.gameStateHandlers.push(t);
  }
  removeGameStateHandler(t) {
    const r = this.gameStateHandlers.indexOf(t);
    r > -1 && this.gameStateHandlers.splice(r, 1);
  }
  onConnection(t) {
    this.connectionHandlers.push(t);
  }
  removeConnectionHandler(t) {
    const r = this.connectionHandlers.indexOf(t);
    r > -1 && this.connectionHandlers.splice(r, 1);
  }
  onError(t) {
    this.errorHandlers.push(t);
  }
  removeErrorHandler(t) {
    const r = this.errorHandlers.indexOf(t);
    r > -1 && this.errorHandlers.splice(r, 1);
  }
  notifyGameStateHandlers(t) {
    this.gameStateHandlers.forEach((r) => {
      try {
        r(t);
      } catch (o) {
        console.error("Error in game state handler:", o);
      }
    });
  }
  notifyConnectionHandlers(t) {
    this.connectionHandlers.forEach((r) => {
      try {
        r(t);
      } catch (o) {
        console.error("Error in connection handler:", o);
      }
    });
  }
  notifyErrorHandlers(t) {
    this.errorHandlers.forEach((r) => {
      try {
        r(t);
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
  getPieceTypeString(t) {
    switch (t) {
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
  l as C,
  f as a,
  h as b,
  S as c,
  g as d,
  E as e,
  m as g,
  w as p,
  u as v
};
