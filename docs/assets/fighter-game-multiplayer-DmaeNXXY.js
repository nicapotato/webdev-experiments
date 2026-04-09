var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { c as u } from "./grid-3x3-C0jISuKE.js";
import { g as w, a as k } from "./gin-DHzzR3IR.js";
/**
* @license lucide-react v1.8.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const H = [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]], C = u("swords", H);
async function E(e, n, o) {
  const r = new URLSearchParams({ userId: n, username: encodeURIComponent(o) });
  return `${k()}/api/fighter/ws/${e}?${r.toString()}`;
}
async function W() {
  try {
    const e = await fetch(`${w()}/api/fighter/active-rooms`);
    if (!e.ok) throw new Error("Failed to fetch active fighter rooms");
    return (await e.json()).rooms || [];
  } catch (e) {
    return console.error("Error fetching active fighter rooms:", e), [];
  }
}
function R(e) {
  return /^[a-zA-Z0-9_-]+$/.test(e) && e.length > 0 && e.length <= 50;
}
function A() {
  return `fighter_${Math.random().toString(36).substr(2, 9)}`;
}
const i = 1024, a = 576, y = {};
function p(e) {
  if (!y[e]) {
    const n = new Image();
    n.src = e, y[e] = n;
  }
  return y[e];
}
function N(e, n, o = false) {
  e.fillStyle = "#000000", e.fillRect(0, 0, i, a);
  const r = p("/games/fighting-game/img/background.png");
  r.complete && e.drawImage(r, 0, 0, i, a);
  const s = p("/games/fighting-game/img/shop.png");
  if (s.complete && e.drawImage(s, 600, 128, 354, 354), e.fillStyle = "rgba(255, 255, 255, 0.15)", e.fillRect(0, 0, i, a), o) {
    e.strokeStyle = "#333333", e.lineWidth = 1;
    for (let t = 0; t <= i; t += 50) e.beginPath(), e.moveTo(t, 0), e.lineTo(t, a), e.stroke();
    for (let t = 0; t <= a; t += 50) e.beginPath(), e.moveTo(0, t), e.lineTo(i, t), e.stroke();
  }
  n.fighters.forEach((t) => {
    var _a, _b, _c, _d;
    if (t.dead || !t.position) return;
    const c = p(t.imageSrc);
    if (c.complete && t.framesMax > 0) {
      const m = c.width / t.framesMax, g = c.height;
      e.drawImage(c, t.framesCurrent * m, 0, m, g, t.position.x - (((_a = t.offset) == null ? void 0 : _a.x) || 0), t.position.y - (((_b = t.offset) == null ? void 0 : _b.y) || 0), m * (t.scale || 1), g * (t.scale || 1));
    } else e.fillStyle = t.color || "#ff0000", e.fillRect(t.position.x, t.position.y, t.width || 50, t.height || 150);
    const l = 50, d = 5, h = t.position.x + ((t.width || 50) - l) / 2, f = t.position.y - 15;
    e.fillStyle = "#333333", e.fillRect(h, f, l, d), e.fillStyle = "#00ff00";
    const S = (t.health || 0) / (t.maxHealth || 100) * l;
    e.fillRect(h, f, S, d), e.strokeStyle = "#ffffff", e.lineWidth = 1, e.strokeRect(h, f, l, d), t.isAttacking && t.framesCurrent >= 3 && t.attackBox && (e.strokeStyle = "#ff0000", e.lineWidth = 2, e.strokeRect(t.position.x + (((_c = t.attackBox.offset) == null ? void 0 : _c.x) || 0), t.position.y + (((_d = t.attackBox.offset) == null ? void 0 : _d.y) || 0), t.attackBox.width || 0, t.attackBox.height || 0));
  }), n.status === "waiting" ? (e.fillStyle = "rgba(0, 0, 0, 0.7)", e.fillRect(0, 0, i, a), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Waiting for another player...", i / 2, a / 2)) : n.status === "finished" && (e.fillStyle = "rgba(0, 0, 0, 0.8)", e.fillRect(0, 0, i, a), e.fillStyle = "#ffffff", e.font = "24px Arial", e.textAlign = "center", e.fillText("Game Over!", i / 2, a / 2 - 20), n.winner && e.fillText(`Winner: ${n.winner}`, i / 2, a / 2 + 20));
}
class O {
  constructor(n, o, r) {
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
    this.roomId = n, this.userId = o, this.username = r;
  }
  async connect() {
    return new Promise(async (n, o) => {
      try {
        const r = await E(this.roomId, this.userId, this.username);
        console.log("Connecting to fighter game:", r), this.ws = new WebSocket(r), this.ws.onopen = () => {
          console.log(`Connected to fighter game ${this.roomId} as ${this.username}`), this.reconnectAttempts = 0, this.notifyConnectionHandlers(true), n();
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
          console.error("WebSocket error:", s), this.notifyErrorHandlers(new Error("WebSocket connection error")), o(s);
        };
      } catch (r) {
        console.error("Failed to create WebSocket connection:", r), o(r);
      }
    });
  }
  attemptReconnect() {
    this.reconnectAttempts++;
    const n = this.reconnectInterval * Math.pow(2, this.reconnectAttempts - 1);
    console.log(`Attempting to reconnect to fighter game ${this.roomId} in ${n}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`), setTimeout(() => {
      this.connect().catch((o) => {
        console.error("Reconnection failed:", o), this.notifyErrorHandlers(new Error("Failed to reconnect"));
      });
    }, n);
  }
  sendInput(n) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.error("WebSocket is not connected"), this.notifyErrorHandlers(new Error("WebSocket is not connected"));
      return;
    }
    const o = { input: n };
    try {
      this.ws.send(JSON.stringify(o));
    } catch (r) {
      console.error("Failed to send input:", r), this.notifyErrorHandlers(new Error("Failed to send input"));
    }
  }
  disconnect() {
    this.ws && (this.ws.close(1e3, "Client disconnecting"), this.ws = null), this.notifyConnectionHandlers(false);
  }
  isConnected() {
    var _a;
    return ((_a = this.ws) == null ? void 0 : _a.readyState) === WebSocket.OPEN;
  }
  onGameState(n) {
    this.gameStateHandlers.push(n);
  }
  removeGameStateHandler(n) {
    const o = this.gameStateHandlers.indexOf(n);
    o > -1 && this.gameStateHandlers.splice(o, 1);
  }
  onConnection(n) {
    this.connectionHandlers.push(n);
  }
  removeConnectionHandler(n) {
    const o = this.connectionHandlers.indexOf(n);
    o > -1 && this.connectionHandlers.splice(o, 1);
  }
  onError(n) {
    this.errorHandlers.push(n);
  }
  removeErrorHandler(n) {
    const o = this.errorHandlers.indexOf(n);
    o > -1 && this.errorHandlers.splice(o, 1);
  }
  notifyGameStateHandlers(n) {
    this.gameStateHandlers.forEach((o) => {
      try {
        o(n);
      } catch (r) {
        console.error("Error in game state handler:", r);
      }
    });
  }
  notifyConnectionHandlers(n) {
    this.connectionHandlers.forEach((o) => {
      try {
        o(n);
      } catch (r) {
        console.error("Error in connection handler:", r);
      }
    });
  }
  notifyErrorHandlers(n) {
    this.errorHandlers.forEach((o) => {
      try {
        o(n);
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
  a as C,
  O as F,
  C as S,
  A as a,
  i as b,
  W as g,
  N as r,
  R as v
};
