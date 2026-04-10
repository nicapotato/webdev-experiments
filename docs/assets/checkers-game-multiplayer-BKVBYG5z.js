var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as c, a } from "./gin-DHzzR3IR.js";
async function i(r, e, t, o) {
  const n = new URLSearchParams({ userId: e, username: encodeURIComponent(t) });
  return o !== void 0 && o.length > 0 && n.set("password", o), `${a()}/api/checkers/ws/${r}?${n.toString()}`;
}
async function l() {
  try {
    const r = await fetch(`${c()}/api/checkers/active-rooms`);
    if (!r.ok) throw new Error("Failed to fetch active rooms");
    return (await r.json()).rooms || [];
  } catch (r) {
    return console.error("Error fetching active checkers rooms:", r), [];
  }
}
var h = ((r) => (r[r.NoColor = 0] = "NoColor", r[r.Red = 1] = "Red", r[r.Black = 2] = "Black", r))(h || {});
function m(r) {
  return /^[a-zA-Z0-9_-]+$/.test(r) && r.length > 0 && r.length <= 50;
}
function f() {
  return `checkers_${Math.random().toString(36).substr(2, 9)}`;
}
const u = 8;
function w(r, e) {
  return r.row === e.row && r.col === e.col;
}
function S(r) {
  switch (r) {
    case 1:
      return "Red";
    case 2:
      return "Black";
    default:
      return "None";
  }
}
class g {
  constructor(e, t, o, n) {
    __publicField(this, "ws", null);
    __publicField(this, "roomId");
    __publicField(this, "userId");
    __publicField(this, "username");
    __publicField(this, "roomPassword");
    __publicField(this, "reconnectAttempts", 0);
    __publicField(this, "maxReconnectAttempts", 5);
    __publicField(this, "reconnectInterval", 5e3);
    __publicField(this, "gameStateHandlers", []);
    __publicField(this, "connectionHandlers", []);
    __publicField(this, "errorHandlers", []);
    this.roomId = e, this.userId = t, this.username = o, this.roomPassword = n;
  }
  async connect() {
    return new Promise(async (e, t) => {
      try {
        const o = await i(this.roomId, this.userId, this.username, this.roomPassword);
        console.log("Connecting to checkers game:", o), this.ws = new WebSocket(o), this.ws.onopen = () => {
          console.log(`Connected to checkers game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), e();
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
          console.log(`Disconnected from checkers game ${this.roomId}:`, n.code, n.reason), this.notifyConnectionHandlers(false), n.code !== 1e3 && this.reconnectAttempts < this.maxReconnectAttempts && this.attemptReconnect();
        }, this.ws.onerror = (n) => {
          console.error("WebSocket error:", n), this.notifyErrorHandlers(new Error("WebSocket connection error")), t(n);
        };
      } catch (o) {
        console.error("Failed to create WebSocket connection:", o), t(o);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const e = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to checkers game ${this.roomId} in ${e}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((t) => {
        console.error("Reconnection failed:", t), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, e);
  }
  sendMove(e) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const t = { move: { from: { row: e.from.row, col: e.from.col }, to: { row: e.to.row, col: e.to.col }, ...e.captures && { captures: e.captures.map((o) => ({ row: o.row, col: o.col })) } } };
    try {
      this.ws.send(JSON.stringify(t));
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
    } catch (t) {
      console.error("Failed to send restart request:", t), this.notifyErrorHandlers(new Error("Failed to send restart request"));
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
    const t = this.gameStateHandlers.indexOf(e);
    t > -1 && this.gameStateHandlers.splice(t, 1);
  }
  onConnection(e) {
    this.connectionHandlers.push(e);
  }
  removeConnectionHandler(e) {
    const t = this.connectionHandlers.indexOf(e);
    t > -1 && this.connectionHandlers.splice(t, 1);
  }
  onError(e) {
    this.errorHandlers.push(e);
  }
  removeErrorHandler(e) {
    const t = this.errorHandlers.indexOf(e);
    t > -1 && this.errorHandlers.splice(t, 1);
  }
  notifyGameStateHandlers(e) {
    this.gameStateHandlers.forEach((t) => {
      try {
        t(e);
      } catch (o) {
        console.error("Error in game state handler:", o);
      }
    });
  }
  notifyConnectionHandlers(e) {
    this.connectionHandlers.forEach((t) => {
      try {
        t(e);
      } catch (o) {
        console.error("Error in connection handler:", o);
      }
    });
  }
  notifyErrorHandlers(e) {
    this.errorHandlers.forEach((t) => {
      try {
        t(e);
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
}
export {
  u as B,
  h as C,
  f as a,
  S as b,
  g as c,
  l as g,
  w as p,
  m as v
};
