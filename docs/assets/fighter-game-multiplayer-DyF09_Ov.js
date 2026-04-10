var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as u, a as w } from "./gin-DHzzR3IR.js";
async function H(e, o, n, r) {
  const s = new URLSearchParams({ userId: o, username: encodeURIComponent(n) });
  return r !== void 0 && r.length > 0 && s.set("password", r), `${w()}/api/fighter/ws/${e}?${s.toString()}`;
}
async function k() {
  try {
    const e = await fetch(`${u()}/api/fighter/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active fighter rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active fighter rooms:", e), [];
  }
}
function b(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function I() {
  return `fighter_${Math.random().toString(36).substr(2, 9)}`;
}
const i = 1024, a = 576, g = {};
function p(e) {
  if (!g[e]) {
    const o = new Image();
    o.src = e, g[e] = o;
  }
  return g[e];
}
function W(e, o, n = false) {
  e.fillStyle = "#000000", e.fillRect(0, 0, i, a);
  const r = p("/games/fighting-game/img/background.png");
  r.complete && e.drawImage(r, 0, 0, i, a);
  const s = p("/games/fighting-game/img/shop.png");
  if (s.complete && e.drawImage(s, 600, 128, 354, 354), e.fillStyle = "rgba(255, 255, 255, 0.15)", e.fillRect(0, 0, i, a), n) {
    e.strokeStyle = "#333333", e.lineWidth = 1;
    for (let t = 0; t <= i; t += 50) e.beginPath(), e.moveTo(t, 0), e.lineTo(t, a), e.stroke();
    for (let t = 0; t <= a; t += 50) e.beginPath(), e.moveTo(0, t), e.lineTo(i, t), e.stroke();
  }
  o.fighters.forEach((t) => {
    var _a, _b, _c, _d;
    if (t.dead || !t.position) return;
    const c = p(t.imageSrc);
    if (c.complete && t.framesMax > 0) {
      const m = c.width / t.framesMax, S = c.height;
      e.drawImage(c, t.framesCurrent * m, 0, m, S, t.position.x - (((_a = t.offset) == null ? void 0 : _a.x) || 0), t.position.y - (((_b = t.offset) == null ? void 0 : _b.y) || 0), m * (t.scale || 1), S * (t.scale || 1));
    } else e.fillStyle = t.color || "#ff0000", e.fillRect(t.position.x, t.position.y, t.width || 50, t.height || 150);
    const l = 50, d = 5, h = t.position.x + ((t.width || 50) - l) / 2, f = t.position.y - 15;
    e.fillStyle = "#333333", e.fillRect(h, f, l, d), e.fillStyle = "#00ff00";
    const y = (t.health || 0) / (t.maxHealth || 100) * l;
    e.fillRect(h, f, y, d), e.strokeStyle = "#ffffff", e.lineWidth = 1, e.strokeRect(h, f, l, d), t.isAttacking && t.framesCurrent >= 3 && t.attackBox && (e.strokeStyle = "#ff0000", e.lineWidth = 2, e.strokeRect(t.position.x + (((_c = t.attackBox.offset) == null ? void 0 : _c.x) || 0), t.position.y + (((_d = t.attackBox.offset) == null ? void 0 : _d.y) || 0), t.attackBox.width || 0, t.attackBox.height || 0));
  }), o.status === "waiting" ? (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, i, a), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Waiting for another player...", i / 2, a / 2)) : o.status === "finished" && (e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fillRect(0, 0, i, a), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Game Over!", i / 2, a / 2 - 20), o.winner && e.fillText(`Winner: ${o.winner}`, i / 2, a / 2 + 20), e.font = "12px Arial", e.fillStyle = "#cccccc", e.fillText("PLAY AGAIN in the bar above", i / 2, a / 2 + 52));
}
class C {
  constructor(o, n, r, s) {
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
    this.roomId = o, this.userId = n, this.username = r, this.roomPassword = s;
  }
  async connect() {
    return new Promise(async (o, n) => {
      try {
        const r = await H(this.roomId, this.userId, this.username, this.roomPassword);
        console.log("Connecting to fighter game:", r), this.ws = new WebSocket(r), this.ws.onopen = () => {
          console.log(`Connected to fighter game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), o();
        }, this.ws.onmessage = (s) => {
          try {
            const t = JSON.parse(s.data);
            this.notifyGameStateHandlers(t);
          } catch (t) {
            console.error("Failed to parse WebSocket message:", t);
          }
        }, this.ws.onclose = (s) => {
          console.log(`Disconnected from fighter game ${this.roomId}:`, s.code, s.reason), this.notifyConnectionHandlers(false), s.code !== 1e3 && this.reconnectAttempts < this.maxReconnectAttempts && this.attemptReconnect();
        }, this.ws.onerror = (s) => {
          console.error("WebSocket error:", s), this.notifyErrorHandlers(new Error("WebSocket connection error")), n(s);
        };
      } catch (r) {
        console.error("Failed to create WebSocket connection:", r), n(r);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const o = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to fighter game ${this.roomId} in ${o}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((n) => {
        console.error("Reconnection failed:", n), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, o);
  }
  sendInput(o) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const n = { input: o };
    try {
      this.ws.send(JSON.stringify(n));
    } catch (r) {
      console.error("Failed to send input:", r), this.notifyErrorHandlers(new Error("Failed to send input"));
    }
  }
  sendRestart() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    try {
      this.ws.send(JSON.stringify({ action: "restart" }));
    } catch (o) {
      console.error("Failed to send restart:", o), this.notifyErrorHandlers(new Error("Failed to send restart"));
    }
  }
  disconnect() {
    this.ws && (this.ws.close(1e3, "Client disconnecting"), this.ws = null), this.notifyConnectionHandlers(false);
  }
  isConnected() {
    var _a;
    return ((_a = this.ws) == null ? void 0 : _a.readyState) === WebSocket.OPEN;
  }
  onGameState(o) {
    this.gameStateHandlers.push(o);
  }
  removeGameStateHandler(o) {
    const n = this.gameStateHandlers.indexOf(o);
    n > -1 && this.gameStateHandlers.splice(n, 1);
  }
  onConnection(o) {
    this.connectionHandlers.push(o);
  }
  removeConnectionHandler(o) {
    const n = this.connectionHandlers.indexOf(o);
    n > -1 && this.connectionHandlers.splice(n, 1);
  }
  onError(o) {
    this.errorHandlers.push(o);
  }
  removeErrorHandler(o) {
    const n = this.errorHandlers.indexOf(o);
    n > -1 && this.errorHandlers.splice(n, 1);
  }
  notifyGameStateHandlers(o) {
    this.gameStateHandlers.forEach((n) => {
      try {
        n(o);
      } catch (r) {
        console.error("Error in game state handler:", r);
      }
    });
  }
  notifyConnectionHandlers(o) {
    this.connectionHandlers.forEach((n) => {
      try {
        n(o);
      } catch (r) {
        console.error("Error in connection handler:", r);
      }
    });
  }
  notifyErrorHandlers(o) {
    this.errorHandlers.forEach((n) => {
      try {
        n(o);
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
  i as C,
  C as F,
  I as a,
  a as b,
  k as g,
  W as r,
  b as v
};
