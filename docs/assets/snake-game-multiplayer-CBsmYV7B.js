var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { c as l } from "./grid-3x3-a_VJ9wWf.js";
import { g as h, a as f } from "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const m = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], E = l("arrow-left", m);
async function u(e, t, o, r, n) {
  const s = new URLSearchParams({ userId: t, username: encodeURIComponent(o) });
  return r !== void 0 && Number.isFinite(r) && s.set("tickMs", String(Math.round(r))), n !== void 0 && n.length > 0 && s.set("password", n), `${f()}/api/snake/ws/${e}?${s.toString()}`;
}
async function H() {
  try {
    const e = await fetch(`${h()}/api/snake/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active rooms:", e), [];
  }
}
function S(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function b() {
  return `snake_${Math.random().toString(36).substr(2, 9)}`;
}
var w = ((e) => (e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e))(w || {});
const p = 45, y = 30, c = 20, C = p * c, W = y * c;
function I() {
  return [{ X: 10, Y: 10 }];
}
function A() {
  return { X: 15, Y: 15 };
}
function R(e, t, o) {
  let r, n = 0;
  const s = 100;
  do
    r = { X: Math.floor(Math.random() * e), Y: Math.floor(Math.random() * t) }, n++;
  while (n < s && o.some((i) => i.X === r.X && i.Y === r.Y));
  return r;
}
function N(e, t, o, r) {
  const n = { ...e[0] };
  switch (t) {
    case 0:
      n.Y -= 1;
      break;
    case 1:
      n.Y += 1;
      break;
    case 2:
      n.X -= 1;
      break;
    case 3:
      n.X += 1;
      break;
  }
  n.X < 0 ? n.X = o - 1 : n.X >= o && (n.X = 0), n.Y < 0 ? n.Y = r - 1 : n.Y >= r && (n.Y = 0);
  const s = e.some((a) => a.X === n.X && a.Y === n.Y);
  return { newSnake: [n, ...e], collided: s };
}
function O(e, t) {
  return e.X === t.X && e.Y === t.Y;
}
function v(e, t) {
  return { 0: 1, 1: 0, 2: 3, 3: 2 }[e] !== t;
}
function X(e, t, o = c, r = true) {
  const n = t.boardWidth * o, s = t.boardHeight * o;
  if (e.fillStyle = "#000000", e.fillRect(0, 0, n, s), r) {
    e.strokeStyle = "#333333", e.lineWidth = 1;
    for (let i = 0; i <= t.boardWidth; i++) e.beginPath(), e.moveTo(i * o, 0), e.lineTo(i * o, s), e.stroke();
    for (let i = 0; i <= t.boardHeight; i++) e.beginPath(), e.moveTo(0, i * o), e.lineTo(n, i * o), e.stroke();
  }
  t.food && (e.fillStyle = "#ff0000", e.fillRect(t.food.position.X * o, t.food.position.Y * o, o, o)), t.snakes.forEach((i) => {
    i.alive && i.body.forEach((a, d) => {
      e.fillStyle = d === 0 ? i.color : i.color + "80", e.fillRect(a.X * o, a.Y * o, o, o), r || (e.strokeStyle = "#ffffff", e.lineWidth = 1, e.strokeRect(a.X * o, a.Y * o, o, o));
    });
  }), t.status === "waiting" ? (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, n, s), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Waiting for another player...", n / 2, s / 2)) : t.status === "finished" && (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, n, s), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Game Over!", n / 2, s / 2 - 20), t.winner && e.fillText(`Winner: ${t.winner}`, n / 2, s / 2 + 20));
}
class Y {
  constructor(t, o, r, n, s) {
    __publicField(this, "ws", null);
    __publicField(this, "roomId");
    __publicField(this, "userId");
    __publicField(this, "username");
    __publicField(this, "tickMs");
    __publicField(this, "roomPassword");
    __publicField(this, "reconnectAttempts", 0);
    __publicField(this, "maxReconnectAttempts", 5);
    __publicField(this, "reconnectInterval", 5e3);
    __publicField(this, "gameStateHandlers", []);
    __publicField(this, "connectionHandlers", []);
    __publicField(this, "errorHandlers", []);
    this.roomId = t, this.userId = o, this.username = r, this.tickMs = n, this.roomPassword = s;
  }
  async connect() {
    return new Promise(async (t, o) => {
      try {
        const r = await u(this.roomId, this.userId, this.username, this.tickMs, this.roomPassword);
        console.log("Connecting to snake game:", r), this.ws = new WebSocket(r), this.ws.onopen = () => {
          console.log(`Connected to snake game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), t();
        }, this.ws.onmessage = (n) => {
          try {
            const s = JSON.parse(n.data);
            this.notifyGameStateHandlers(s);
          } catch (s) {
            console.error("Failed to parse WebSocket message:", s);
          }
        }, this.ws.onclose = (n) => {
          console.log(`Disconnected from snake game ${this.roomId}:`, n.code, n.reason), this.notifyConnectionHandlers(false), n.code !== 1e3 && this.reconnectAttempts < this.maxReconnectAttempts && this.attemptReconnect();
        }, this.ws.onerror = (n) => {
          console.error("WebSocket error:", n), this.notifyErrorHandlers(new Error("WebSocket connection error")), o(n);
        };
      } catch (r) {
        console.error("Failed to create WebSocket connection:", r), o(r);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const t = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to snake game ${this.roomId} in ${t}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((o) => {
        console.error("Reconnection failed:", o), this.notifyErrorHandlers(new Error("Failed to reconnect"));
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
    } catch (n) {
      console.error("Failed to send direction:", n), this.notifyErrorHandlers(new Error("Failed to send direction"));
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
    } catch (o) {
      console.error("Failed to send restart request:", o), this.notifyErrorHandlers(new Error("Failed to send restart request"));
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
    const o = this.gameStateHandlers.indexOf(t);
    o > -1 && this.gameStateHandlers.splice(o, 1);
  }
  onConnection(t) {
    this.connectionHandlers.push(t);
  }
  removeConnectionHandler(t) {
    const o = this.connectionHandlers.indexOf(t);
    o > -1 && this.connectionHandlers.splice(o, 1);
  }
  onError(t) {
    this.errorHandlers.push(t);
  }
  removeErrorHandler(t) {
    const o = this.errorHandlers.indexOf(t);
    o > -1 && this.errorHandlers.splice(o, 1);
  }
  notifyGameStateHandlers(t) {
    this.gameStateHandlers.forEach((o) => {
      try {
        o(t);
      } catch (r) {
        console.error("Error in game state handler:", r);
      }
    });
  }
  notifyConnectionHandlers(t) {
    this.connectionHandlers.forEach((o) => {
      try {
        o(t);
      } catch (r) {
        console.error("Error in connection handler:", r);
      }
    });
  }
  notifyErrorHandlers(t) {
    this.errorHandlers.forEach((o) => {
      try {
        o(t);
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
  E as A,
  y as B,
  C,
  w as D,
  Y as S,
  A as a,
  p as b,
  I as c,
  O as d,
  W as e,
  c as f,
  R as g,
  H as h,
  v as i,
  b as j,
  N as m,
  X as r,
  S as v
};
