var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as N, a as T } from "./gin-DHzzR3IR.js";
const m = 64, I = 3, y = 0, C = 1, _ = 2, g = 3, O = 4, R = 8;
function P(e) {
  const t = e % I, n = Math.floor(e / I), r = t * m, o = n * m;
  return { sx: r, sy: o, sw: m, sh: m };
}
function E(e, t, n, r) {
  let o = t.X - e.X, s = t.Y - e.Y;
  return o > n / 2 ? o -= n : o < -n / 2 && (o += n), s > r / 2 ? s -= r : s < -r / 2 && (s += r), { dx: o, dy: s };
}
const v = Math.PI;
function A(e, t) {
  let n = 0;
  e === 1 && t === 0 ? n = Math.PI / 2 : e === -1 && t === 0 ? n = 3 * Math.PI / 2 : e === 0 && t === 1 ? n = 0 : e === 0 && t === -1 && (n = Math.PI);
  const r = e === 0 && t !== 0;
  return n + v + (r ? Math.PI : 0);
}
function X(e, t) {
  const n = (s, a) => `${s},${a}`, r = /* @__PURE__ */ new Set([n(e.dx, e.dy), n(t.dx, t.dy)]), o = [[[0, -1], [1, 0]], [[1, 0], [0, 1]], [[0, 1], [-1, 0]], [[-1, 0], [0, -1]]];
  for (let s = 0; s < 4; s++) {
    const a = new Set(o[s].map(([i, c]) => n(i, c)));
    if (r.size === 2 && [...r].every((i) => a.has(i))) return s * Math.PI / 2;
  }
  return 0;
}
function Y(e, t, n, r, o, s) {
  const a = e.length;
  if (a === 0) return { tileIndex: y, rotation: 0 };
  const i = (s == null ? void 0 : s.food) ?? null;
  if (t === 0) {
    let l = 0, f = 0;
    if (a >= 2) {
      const d = E(e[0], e[1], r, o);
      l = d.dx, f = d.dy;
    } else {
      const d = n;
      l = d === 3 ? 1 : d === 2 ? -1 : 0, f = d === 1 ? 1 : d === 0 ? -1 : 0;
    }
    return { tileIndex: i !== null && e[0].X === i.X && e[0].Y === i.Y ? C : y, rotation: A(l, f) };
  }
  if (t === a - 1) {
    const l = E(e[a - 1], e[a - 2], r, o);
    return { tileIndex: O, rotation: A(l.dx, l.dy) };
  }
  const c = E(e[t], e[t - 1], r, o), h = E(e[t], e[t + 1], r, o);
  return c.dx === -h.dx && c.dy === -h.dy ? c.dx === 0 ? { tileIndex: g, rotation: Math.PI / 2 } : { tileIndex: g, rotation: 0 } : { tileIndex: _, rotation: X(c, h) };
}
function H(e, t, n, r, o, s, a) {
  const { sx: i, sy: c, sw: h, sh: l } = P(s), f = n + o / 2, u = r + o / 2;
  e.save(), e.translate(f, u), e.rotate(a), e.drawImage(t, i, c, h, l, -o / 2, -o / 2, o, o), e.restore();
}
function L(e, t, n, r, o) {
  e.save(), e.globalCompositeOperation = "multiply", e.fillStyle = o, e.globalAlpha = 0.45, e.fillRect(t, n, r, r), e.restore();
}
async function W(e, t, n, r, o) {
  const s = new URLSearchParams({ userId: t, username: encodeURIComponent(n) });
  return r !== void 0 && Number.isFinite(r) && s.set("tickMs", String(Math.round(r))), o !== void 0 && o.length > 0 && s.set("password", o), `${T()}/api/snake/ws/${e}?${s.toString()}`;
}
async function U() {
  try {
    const e = await fetch(`${N()}/api/snake/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active rooms:", e), [];
  }
}
function S(e) {
  const t = "/", n = e.replace(/^\//, "");
  return `${t}${n}`;
}
const B = S("games/snake/snake-promo.png"), J = S("games/snake/snake-background-1.png"), M = S("games/snake/snake-spritesheet-ii.png");
let p = null, w = null;
function G() {
  return p ? Promise.resolve(p) : (w || (w = new Promise((e, t) => {
    const n = new Image();
    n.onload = () => {
      p = n, e(n);
    }, n.onerror = () => t(new Error("Failed to load snake sprite sheet")), n.src = M;
  })), w);
}
G().catch(() => {
});
function V(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function q() {
  return `snake_${Math.random().toString(36).substr(2, 9)}`;
}
var $ = ((e) => (e[e.Up = 0] = "Up", e[e.Down = 1] = "Down", e[e.Left = 2] = "Left", e[e.Right = 3] = "Right", e))($ || {});
const b = 32, F = 21, k = 24, Z = b * k, j = F * k;
function Q() {
  return [{ X: 12, Y: 10 }, { X: 11, Y: 10 }, { X: 10, Y: 10 }];
}
function x() {
  return { X: 20, Y: 10 };
}
function z(e, t, n) {
  let r, o = 0;
  const s = 100;
  do
    r = { X: Math.floor(Math.random() * e), Y: Math.floor(Math.random() * t) }, o++;
  while (o < s && n.some((a) => a.X === r.X && a.Y === r.Y));
  return r;
}
function ee(e, t, n, r) {
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
  const s = e.some((i) => i.X === o.X && i.Y === o.Y);
  return { newSnake: [o, ...e], collided: s };
}
function te(e, t) {
  return e.X === t.X && e.Y === t.Y;
}
function ne(e, t) {
  return { 0: 1, 1: 0, 2: 3, 3: 2 }[e] !== t;
}
function oe(e, t, n = k, r = true) {
  const o = t.boardWidth * n, s = t.boardHeight * n;
  if (e.fillStyle = "#000000", e.fillRect(0, 0, o, s), r) {
    e.strokeStyle = "#333333", e.lineWidth = 1;
    for (let i = 0; i <= t.boardWidth; i++) e.beginPath(), e.moveTo(i * n, 0), e.lineTo(i * n, s), e.stroke();
    for (let i = 0; i <= t.boardHeight; i++) e.beginPath(), e.moveTo(0, i * n), e.lineTo(o, i * n), e.stroke();
  }
  const a = p;
  if (t.food) {
    const i = t.food.position.X * n, c = t.food.position.Y * n;
    a ? H(e, a, i, c, n, R, 0) : (e.fillStyle = "#ff0000", e.fillRect(i, c, n, n));
  }
  t.snakes.forEach((i) => {
    i.alive && i.body.forEach((c, h) => {
      var _a;
      const l = c.X * n, f = c.Y * n;
      if (a) {
        const u = Y(i.body, h, i.direction, t.boardWidth, t.boardHeight, { food: ((_a = t.food) == null ? void 0 : _a.position) ?? null });
        H(e, a, l, f, n, u.tileIndex, u.rotation), L(e, l, f, n, i.color);
      } else e.fillStyle = h === 0 ? i.color : i.color + "80", e.fillRect(l, f, n, n), r || (e.strokeStyle = "#ffffff", e.lineWidth = 1, e.strokeRect(l, f, n, n));
    });
  }), t.status === "waiting" ? (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, o, s), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Waiting for another player...", o / 2, s / 2)) : t.status === "finished" && (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, o, s), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Game Over!", o / 2, s / 2 - 20), t.winner && e.fillText(`Winner: ${t.winner}`, o / 2, s / 2 + 20));
}
class re {
  constructor(t, n, r, o, s) {
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
    this.roomId = t, this.userId = n, this.username = r, this.tickMs = o, this.roomPassword = s;
  }
  async connect() {
    return new Promise(async (t, n) => {
      try {
        const r = await W(this.roomId, this.userId, this.username, this.tickMs, this.roomPassword);
        console.log("Connecting to snake game:", r), this.ws = new WebSocket(r), this.ws.onopen = () => {
          console.log(`Connected to snake game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), t();
        }, this.ws.onmessage = (o) => {
          try {
            const s = JSON.parse(o.data);
            this.notifyGameStateHandlers(s);
          } catch (s) {
            console.error("Failed to parse WebSocket message:", s);
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
  F as B,
  Z as C,
  $ as D,
  B as S,
  x as a,
  b,
  Q as c,
  te as d,
  j as e,
  k as f,
  z as g,
  U as h,
  ne as i,
  q as j,
  re as k,
  J as l,
  ee as m,
  oe as r,
  V as v
};
