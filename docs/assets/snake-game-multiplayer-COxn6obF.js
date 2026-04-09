var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as d, a as f } from "./gin-DHzzR3IR.js";
async function h(e, t, n) {
  const r = new URLSearchParams({ userId: t, username: encodeURIComponent(n) });
  return `${f()}/api/snake/ws/${e}?${r.toString()}`;
}
async function y() {
  try {
    const e = await fetch(`${d()}/api/snake/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active rooms:", e), [];
  }
}
function E(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function g() {
  return `snake_${Math.random().toString(36).substr(2, 9)}`;
}
var m = ((e) => (e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e))(m || {});
const u = 45, p = 30, c = 20, H = u * c, k = p * c;
function S() {
  return [{ X: 10, Y: 10 }];
}
function b() {
  return { X: 15, Y: 15 };
}
function C(e, t, n) {
  let r, o = 0;
  const i = 100;
  do
    r = { X: Math.floor(Math.random() * e), Y: Math.floor(Math.random() * t) }, o++;
  while (o < i && n.some((s) => s.X === r.X && s.Y === r.Y));
  return r;
}
function W(e, t, n, r) {
  const o = { ...e[0] };
  switch (t) {
    case 0:
      o.Y -= 1;
      break;
    case 1:
      o.Y += 1;
      break;
    case 2:
      o.X -= 1;
      break;
    case 3:
      o.X += 1;
      break;
  }
  o.X < 0 ? o.X = n - 1 : o.X >= n && (o.X = 0), o.Y < 0 ? o.Y = r - 1 : o.Y >= r && (o.Y = 0);
  const i = e.some((a) => a.X === o.X && a.Y === o.Y);
  return { newSnake: [o, ...e], collided: i };
}
function I(e, t) {
  return e.X === t.X && e.Y === t.Y;
}
function R(e, t) {
  return { 0: 1, 1: 0, 2: 3, 3: 2 }[e] !== t;
}
function A(e, t, n = c, r = true) {
  const o = t.boardWidth * n, i = t.boardHeight * n;
  if (e.fillStyle = "#000000", e.fillRect(0, 0, o, i), r) {
    e.strokeStyle = "#333333", e.lineWidth = 1;
    for (let s = 0; s <= t.boardWidth; s++) e.beginPath(), e.moveTo(s * n, 0), e.lineTo(s * n, i), e.stroke();
    for (let s = 0; s <= t.boardHeight; s++) e.beginPath(), e.moveTo(0, s * n), e.lineTo(o, s * n), e.stroke();
  }
  t.food && (e.fillStyle = "#ff0000", e.fillRect(t.food.position.X * n, t.food.position.Y * n, n, n)), t.snakes.forEach((s) => {
    s.alive && s.body.forEach((a, l) => {
      e.fillStyle = l === 0 ? s.color : s.color + "80", e.fillRect(a.X * n, a.Y * n, n, n), r || (e.strokeStyle = "#ffffff", e.lineWidth = 1, e.strokeRect(a.X * n, a.Y * n, n, n));
    });
  }), t.status === "waiting" ? (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, o, i), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Waiting for another player...", o / 2, i / 2)) : t.status === "finished" && (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, o, i), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Game Over!", o / 2, i / 2 - 20), t.winner && e.fillText(`Winner: ${t.winner}`, o / 2, i / 2 + 20));
}
class O {
  constructor(t, n, r) {
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
    this.roomId = t, this.userId = n, this.username = r;
  }
  async connect() {
    return new Promise(async (t, n) => {
      try {
        const r = await h(this.roomId, this.userId, this.username);
        console.log("Connecting to snake game:", r), this.ws = new WebSocket(r), this.ws.onopen = () => {
          console.log(`Connected to snake game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), t();
        }, this.ws.onmessage = (o) => {
          try {
            const i = JSON.parse(o.data);
            this.notifyGameStateHandlers(i);
          } catch (i) {
            console.error("Failed to parse WebSocket message:", i);
          }
        }, this.ws.onclose = (o) => {
          console.log(`Disconnected from snake game ${this.roomId}:`, o.code, o.reason), this.notifyConnectionHandlers(false), o.code !== 1e3 && this.reconnectAttempts < this.maxReconnectAttempts && this.attemptReconnect();
        }, this.ws.onerror = (o) => {
          console.error("WebSocket error:", o), this.notifyErrorHandlers(new Error("WebSocket connection error")), n(o);
        };
      } catch (r) {
        console.error("Failed to create WebSocket connection:", r), n(r);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const t = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to snake game ${this.roomId} in ${t}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((n) => {
        console.error("Reconnection failed:", n), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, t);
  }
  sendDirection(t) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const r = { direction: { 0: "up", 1: "down", 2: "left", 3: "right" }[t] };
    try {
      this.ws.send(JSON.stringify(r));
    } catch (o) {
      console.error("Failed to send direction:", o), this.notifyErrorHandlers(new Error("Failed to send direction"));
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
    } catch (n) {
      console.error("Failed to send restart request:", n), this.notifyErrorHandlers(new Error("Failed to send restart request"));
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
    const n = this.gameStateHandlers.indexOf(t);
    n > -1 && this.gameStateHandlers.splice(n, 1);
  }
  onConnection(t) {
    this.connectionHandlers.push(t);
  }
  removeConnectionHandler(t) {
    const n = this.connectionHandlers.indexOf(t);
    n > -1 && this.connectionHandlers.splice(n, 1);
  }
  onError(t) {
    this.errorHandlers.push(t);
  }
  removeErrorHandler(t) {
    const n = this.errorHandlers.indexOf(t);
    n > -1 && this.errorHandlers.splice(n, 1);
  }
  notifyGameStateHandlers(t) {
    this.gameStateHandlers.forEach((n) => {
      try {
        n(t);
      } catch (r) {
        console.error("Error in game state handler:", r);
      }
    });
  }
  notifyConnectionHandlers(t) {
    this.connectionHandlers.forEach((n) => {
      try {
        n(t);
      } catch (r) {
        console.error("Error in connection handler:", r);
      }
    });
  }
  notifyErrorHandlers(t) {
    this.errorHandlers.forEach((n) => {
      try {
        n(t);
      } catch (r) {
        console.error("Error in error handler:", r);
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
  p as B,
  H as C,
  m as D,
  O as S,
  b as a,
  u as b,
  S as c,
  I as d,
  k as e,
  c as f,
  C as g,
  y as h,
  R as i,
  g as j,
  W as m,
  A as r,
  E as v
};
