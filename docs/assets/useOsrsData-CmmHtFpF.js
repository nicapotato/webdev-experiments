import { j as ut, c as os, g as Bt, r as B, R as A } from "./index-BwsnQWqq.js";
import { s as n1 } from "./skillIconUrl-DBpzbTaR.js";
import { c as mt } from "./clsx-B-dksMZM.js";
import { _ as gr, a as yt, b as xs, c as Fn, d as ot } from "./tslib.es6-Xujj8YQZ.js";
const rf = "", Yh = "https://prod-public-mindtricks-data.s3.eu-west-2.amazonaws.com/prod/client/osrs-mmg".replace(/\/$/, "") ?? "", Cp = `${Yh}/manifest.json`, jp = "osrs-mmg.duckdb";
function i1(e7) {
  return `${Yh}/${e7.artifacts.database.url}`;
}
function fi() {
  return rf.length > 0;
}
function nf() {
  return Yh.length > 0;
}
function oY() {
  return fi() || nf();
}
function Bp(e7, t) {
  return e7.profit_pk * t + e7.profit_ph;
}
function sY(e7, t, r) {
  const n = (r == null ? void 0 : r.size) ? e7.filter((i) => !r.has(i.method_id)) : e7;
  return a1(n, t);
}
function a1(e7, t) {
  return [...e7].sort((r, n) => {
    const i = t[r.method_id] ?? r.default_kph, a = t[n.method_id] ?? n.default_kph;
    return Bp(n, a) - Bp(r, i);
  });
}
function pb(e7) {
  if (Array.isArray(e7)) return e7.map(String).filter(Boolean);
  if (e7 == null) return [];
  if (typeof e7 == "string") {
    let t = e7.trim();
    if (!t) return [];
    if (t.startsWith("[") && t.endsWith("]") && (t = t.slice(1, -1)), t.startsWith("[")) try {
      const r = JSON.parse(t.replace(/'/g, '"'));
      if (Array.isArray(r)) return r.map(String).filter(Boolean);
    } catch {
    }
    return t.split(",").map((r) => r.trim().replace(/^\[|\]$/g, "")).filter(Boolean);
  }
  return [String(e7)];
}
function cY(e7) {
  const t = pb(e7);
  return t.length ? t.join(", ") : "\u2014";
}
const Rp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Xh(e7) {
  if (e7 instanceof Date) return Number.isNaN(e7.getTime()) ? null : e7;
  if (typeof e7 == "number" && Number.isFinite(e7)) return new Date(e7);
  const t = String(e7).trim();
  if (!t) return null;
  const r = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (r) return new Date(Date.UTC(Number(r[1]), Number(r[2]) - 1, Number(r[3])));
  const n = t.match(/^(\d{10,13})$/);
  if (n) {
    const a = Number(n[1]);
    return new Date(a < 1e12 ? a * 1e3 : a);
  }
  const i = new Date(t);
  return Number.isNaN(i.getTime()) ? null : i;
}
function pn(e7) {
  const t = Xh(e7);
  return t ? t.toISOString().slice(0, 10) : String(e7);
}
function kp(e7) {
  return String(e7).slice(-2);
}
function o1(e7, t) {
  const r = Xh(e7);
  if (!r) return String(e7);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
    case "week":
      return `${n}-${Rp[i]}`;
    case "month":
      return `${Rp[i]} '${kp(a)}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} '${kp(a)}`;
    case "year":
      return String(a);
  }
}
function Lp(e7, t) {
  const r = Xh(e7);
  if (!r) return String(e7);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
      return `${n} ${dl[i]} ${a}`;
    case "week":
      return `Week of ${n} ${dl[i]} ${a}`;
    case "month":
      return `${dl[i]} ${a}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} ${a}`;
    case "year":
      return String(a);
  }
}
function Fp(e7) {
  return { type: "category", scale: "point", tickFormatter: (t) => o1(t, e7), minTickGap: 56, interval: "preserveStartEnd", tickMargin: 10 };
}
function s1(e7, t) {
  return pn(e7).localeCompare(pn(t));
}
const c1 = new TextDecoder("utf-8"), af = (e7) => c1.decode(e7), u1 = new TextEncoder(), Jh = (e7) => u1.encode(e7), l1 = (e7) => typeof e7 == "number", yb = (e7) => typeof e7 == "boolean", re = (e7) => typeof e7 == "function", Ie = (e7) => e7 != null && Object(e7) === e7, qn = (e7) => Ie(e7) && re(e7.then), Ko = (e7) => Ie(e7) && re(e7[Symbol.iterator]), fa = (e7) => Ie(e7) && re(e7[Symbol.asyncIterator]), of = (e7) => Ie(e7) && Ie(e7.schema), mb = (e7) => Ie(e7) && "done" in e7 && "value" in e7, vb = (e7) => Ie(e7) && re(e7.stat) && l1(e7.fd), gb = (e7) => Ie(e7) && Qh(e7.body), gu = (e7) => "_getDOMStream" in e7 && "_getNodeStream" in e7, f1 = (e7) => Ie(e7) && re(e7.abort) && re(e7.getWriter) && !gu(e7), Qh = (e7) => Ie(e7) && re(e7.cancel) && re(e7.getReader) && !gu(e7), h1 = (e7) => Ie(e7) && re(e7.end) && re(e7.write) && yb(e7.writable) && !gu(e7), bb = (e7) => Ie(e7) && re(e7.read) && re(e7.pipe) && yb(e7.readable) && !gu(e7), d1 = (e7) => Ie(e7) && re(e7.clear) && re(e7.bytes) && re(e7.position) && re(e7.setPosition) && re(e7.capacity) && re(e7.getBufferIdentifier) && re(e7.createLong), Zh = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function p1(e7) {
  const t = e7[0] ? [e7[0]] : [];
  let r, n, i, a;
  for (let o, s, c = 0, u = 0, l = e7.length; ++c < l; ) {
    if (o = t[u], s = e7[c], !o || !s || o.buffer !== s.buffer || s.byteOffset < o.byteOffset) {
      s && (t[++u] = s);
      continue;
    }
    if ({ byteOffset: r, byteLength: i } = o, { byteOffset: n, byteLength: a } = s, r + i < n || n + a < r) {
      s && (t[++u] = s);
      continue;
    }
    t[u] = new Uint8Array(o.buffer, r, n - r + a);
  }
  return t;
}
function Up(e7, t, r = 0, n = t.byteLength) {
  const i = e7.byteLength, a = new Uint8Array(e7.buffer, e7.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
  return a.set(o, r), e7;
}
function Ar(e7, t) {
  const r = p1(e7), n = r.reduce((l, f) => l + f.byteLength, 0);
  let i, a, o, s = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const l = r.length; ++c < l; ) {
    if (i = r[c], a = i.subarray(0, Math.min(i.length, u - s)), u <= s + a.length) {
      a.length < i.length ? r[c] = i.subarray(a.length) : a.length === i.length && c++, o ? Up(o, a, s) : o = a;
      break;
    }
    Up(o || (o = new Uint8Array(u)), a, s), s += a.length;
  }
  return [o || new Uint8Array(0), r.slice(c), n - (o ? o.byteLength : 0)];
}
function Et(e7, t) {
  let r = mb(t) ? t.value : t;
  return r instanceof e7 ? e7 === Uint8Array ? new e7(r.buffer, r.byteOffset, r.byteLength) : r : r ? (typeof r == "string" && (r = Jh(r)), r instanceof ArrayBuffer ? new e7(r) : r instanceof Zh ? new e7(r) : d1(r) ? Et(e7, r.bytes()) : ArrayBuffer.isView(r) ? r.byteLength <= 0 ? new e7(0) : new e7(r.buffer, r.byteOffset, r.byteLength / e7.BYTES_PER_ELEMENT) : e7.from(r)) : new e7(0);
}
const Ia = (e7) => Et(Int32Array, e7), zp = (e7) => Et(BigInt64Array, e7), vt = (e7) => Et(Uint8Array, e7), sf = (e7) => (e7.next(), e7);
function* y1(e7, t) {
  const r = function* (i) {
    yield i;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Zh ? r(t) : Ko(t) ? t : r(t);
  return yield* sf(function* (i) {
    let a = null;
    do
      a = i.next(yield Et(e7, a));
    while (!a.done);
  }(n[Symbol.iterator]())), new e7();
}
const m1 = (e7) => y1(Uint8Array, e7);
function _b(e7, t) {
  return gr(this, arguments, function* () {
    if (qn(t)) return yield yt(yield yt(yield* xs(Fn(_b(e7, yield yt(t))))));
    const n = function(o) {
      return gr(this, arguments, function* () {
        yield yield yt(yield yt(o));
      });
    }, i = function(o) {
      return gr(this, arguments, function* () {
        yield yt(yield* xs(Fn(sf(function* (s) {
          let c = null;
          do
            c = s.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, a = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Zh ? n(t) : Ko(t) ? i(t) : fa(t) ? t : n(t);
    return yield yt(yield* xs(Fn(sf(function(o) {
      return gr(this, arguments, function* () {
        let s = null;
        do
          s = yield yt(o.next(yield yield yt(Et(e7, s))));
        while (!s.done);
      });
    }(a[Symbol.asyncIterator]()))))), yield yt(new e7());
  });
}
const v1 = (e7) => _b(Uint8Array, e7);
function wb(e7, t, r) {
  if (e7 !== 0) {
    r = r.slice(0, t);
    for (let n = -1, i = r.length; ++n < i; ) r[n] += e7;
  }
  return r.subarray(0, t);
}
function g1(e7, t) {
  let r = 0;
  const n = e7.length;
  if (n !== t.length) return false;
  if (n > 0) do
    if (e7[r] !== t[r]) return false;
  while (++r < n);
  return true;
}
const Ve = { fromIterable(e7) {
  return ss(b1(e7));
}, fromAsyncIterable(e7) {
  return ss(_1(e7));
}, fromDOMStream(e7) {
  return ss(w1(e7));
}, fromNodeStream(e7) {
  return ss(O1(e7));
}, toDOMStream(e7, t) {
  throw new Error('"toDOMStream" not available in this environment');
}, toNodeStream(e7, t) {
  throw new Error('"toNodeStream" not available in this environment');
} }, ss = (e7) => (e7.next(), e7);
function* b1(e7) {
  let t, r = false, n = [], i, a, o, s = 0;
  function c() {
    return a === "peek" ? Ar(n, o)[0] : ([i, n, s] = Ar(n, o), i);
  }
  ({ cmd: a, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = m1(e7)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: i } = Number.isNaN(o - s) ? u.next() : u.next(o - s), !t && i.byteLength > 0 && (n.push(i), s += i.byteLength), t || o <= s) do
        ({ cmd: a, size: o } = yield c());
      while (o < s);
    while (!t);
  } catch (l) {
    (r = true) && typeof u.throw == "function" && u.throw(l);
  } finally {
    r === false && typeof u.return == "function" && u.return(null);
  }
  return null;
}
function _1(e7) {
  return gr(this, arguments, function* () {
    let r, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Ar(i, s)[0] : ([a, i, c] = Ar(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = v1(e7)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: r, value: a } = Number.isNaN(s - c) ? yield yt(l.next()) : yield yt(l.next(s - c)), !r && a.byteLength > 0 && (i.push(a), c += a.byteLength), r || s <= c) do
          ({ cmd: o, size: s } = yield yield yt(u()));
        while (s < c);
      while (!r);
    } catch (f) {
      (n = true) && typeof l.throw == "function" && (yield yt(l.throw(f)));
    } finally {
      n === false && typeof l.return == "function" && (yield yt(l.return(new Uint8Array(0))));
    }
    return yield yt(null);
  });
}
function w1(e7) {
  return gr(this, arguments, function* () {
    let r = false, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Ar(i, s)[0] : ([a, i, c] = Ar(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = new S1(e7);
    try {
      do
        if ({ done: r, value: a } = Number.isNaN(s - c) ? yield yt(l.read()) : yield yt(l.read(s - c)), !r && a.byteLength > 0 && (i.push(vt(a)), c += a.byteLength), r || s <= c) do
          ({ cmd: o, size: s } = yield yield yt(u()));
        while (s < c);
      while (!r);
    } catch (f) {
      (n = true) && (yield yt(l.cancel(f)));
    } finally {
      n === false ? yield yt(l.cancel()) : e7.locked && l.releaseLock();
    }
    return yield yt(null);
  });
}
class S1 {
  constructor(t) {
    this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(t) {
    return ot(this, void 0, void 0, function* () {
      const { reader: r, source: n } = this;
      r && (yield r.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return ot(this, void 0, void 0, function* () {
      if (t === 0) return { done: this.reader == null, value: new Uint8Array(0) };
      const r = yield this.reader.read();
      return !r.done && (r.value = vt(r)), r;
    });
  }
}
const pl = (e7, t) => {
  const r = (i) => n([t, i]);
  let n;
  return [t, r, new Promise((i) => (n = i) && e7.once(t, r))];
};
function O1(e7) {
  return gr(this, arguments, function* () {
    const r = [];
    let n = "error", i = false, a = null, o, s, c = 0, u = [], l;
    function f() {
      return o === "peek" ? Ar(u, s)[0] : ([l, u, c] = Ar(u, s), l);
    }
    if ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 }, e7.isTTY) return yield yield yt(new Uint8Array(0)), yield yt(null);
    try {
      r[0] = pl(e7, "end"), r[1] = pl(e7, "error");
      do {
        if (r[2] = pl(e7, "readable"), [n, a] = yield yt(Promise.race(r.map((d) => d[2]))), n === "error") break;
        if ((i = n === "end") || (Number.isFinite(s - c) ? (l = vt(e7.read(s - c)), l.byteLength < s - c && (l = vt(e7.read()))) : l = vt(e7.read()), l.byteLength > 0 && (u.push(l), c += l.byteLength)), i || s <= c) do
          ({ cmd: o, size: s } = yield yield yt(f()));
        while (s < c);
      } while (!i);
    } finally {
      yield yt(h(r, n === "error" ? a : null));
    }
    return yield yt(null);
    function h(d, y) {
      return l = u = null, new Promise((m, p) => {
        for (const [_, g] of d) e7.off(_, g);
        try {
          const _ = e7.destroy;
          _ && _.call(e7, y), y = void 0;
        } catch (_) {
          y = _ || y;
        } finally {
          y != null ? p(y) : m();
        }
      });
    }
  });
}
var Kt;
(function(e7) {
  e7[e7.V1 = 0] = "V1", e7[e7.V2 = 1] = "V2", e7[e7.V3 = 2] = "V3", e7[e7.V4 = 3] = "V4", e7[e7.V5 = 4] = "V5";
})(Kt || (Kt = {}));
var ye;
(function(e7) {
  e7[e7.Sparse = 0] = "Sparse", e7[e7.Dense = 1] = "Dense";
})(ye || (ye = {}));
var pe;
(function(e7) {
  e7[e7.HALF = 0] = "HALF", e7[e7.SINGLE = 1] = "SINGLE", e7[e7.DOUBLE = 2] = "DOUBLE";
})(pe || (pe = {}));
var Xe;
(function(e7) {
  e7[e7.DAY = 0] = "DAY", e7[e7.MILLISECOND = 1] = "MILLISECOND";
})(Xe || (Xe = {}));
var Q;
(function(e7) {
  e7[e7.SECOND = 0] = "SECOND", e7[e7.MILLISECOND = 1] = "MILLISECOND", e7[e7.MICROSECOND = 2] = "MICROSECOND", e7[e7.NANOSECOND = 3] = "NANOSECOND";
})(Q || (Q = {}));
var Pr;
(function(e7) {
  e7[e7.YEAR_MONTH = 0] = "YEAR_MONTH", e7[e7.DAY_TIME = 1] = "DAY_TIME", e7[e7.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Pr || (Pr = {}));
const yl = 2, yr = 4, jr = 4, Pt = 4, an = new Int32Array(2), Wp = new Float32Array(an.buffer), Vp = new Float64Array(an.buffer), cs = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var cf;
(function(e7) {
  e7[e7.UTF8_BYTES = 1] = "UTF8_BYTES", e7[e7.UTF16_STRING = 2] = "UTF16_STRING";
})(cf || (cf = {}));
let Ci = class Sb {
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  static allocate(t) {
    return new Sb(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  bytes() {
    return this.bytes_;
  }
  position() {
    return this.position_;
  }
  setPosition(t) {
    this.position_ = t;
  }
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return BigInt.asIntN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readUint64(t) {
    return BigInt.asUintN(64, BigInt(this.readUint32(t)) + (BigInt(this.readUint32(t + 4)) << BigInt(32)));
  }
  readFloat32(t) {
    return an[0] = this.readInt32(t), Wp[0];
  }
  readFloat64(t) {
    return an[cs ? 0 : 1] = this.readInt32(t), an[cs ? 1 : 0] = this.readInt32(t + 4), Vp[0];
  }
  writeInt8(t, r) {
    this.bytes_[t] = r;
  }
  writeUint8(t, r) {
    this.bytes_[t] = r;
  }
  writeInt16(t, r) {
    this.bytes_[t] = r, this.bytes_[t + 1] = r >> 8;
  }
  writeUint16(t, r) {
    this.bytes_[t] = r, this.bytes_[t + 1] = r >> 8;
  }
  writeInt32(t, r) {
    this.bytes_[t] = r, this.bytes_[t + 1] = r >> 8, this.bytes_[t + 2] = r >> 16, this.bytes_[t + 3] = r >> 24;
  }
  writeUint32(t, r) {
    this.bytes_[t] = r, this.bytes_[t + 1] = r >> 8, this.bytes_[t + 2] = r >> 16, this.bytes_[t + 3] = r >> 24;
  }
  writeInt64(t, r) {
    this.writeInt32(t, Number(BigInt.asIntN(32, r))), this.writeInt32(t + 4, Number(BigInt.asIntN(32, r >> BigInt(32))));
  }
  writeUint64(t, r) {
    this.writeUint32(t, Number(BigInt.asUintN(32, r))), this.writeUint32(t + 4, Number(BigInt.asUintN(32, r >> BigInt(32))));
  }
  writeFloat32(t, r) {
    Wp[0] = r, this.writeInt32(t, an[0]);
  }
  writeFloat64(t, r) {
    Vp[0] = r, this.writeInt32(t, an[cs ? 0 : 1]), this.writeInt32(t + 4, an[cs ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + yr + jr) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let r = 0; r < jr; r++) t += String.fromCharCode(this.readInt8(this.position_ + yr + r));
    return t;
  }
  __offset(t, r) {
    const n = t - this.readInt32(t);
    return r < this.readInt16(n) ? this.readInt16(n + r) : 0;
  }
  __union(t, r) {
    return t.bb_pos = r + this.readInt32(r), t.bb = this, t;
  }
  __string(t, r) {
    t += this.readInt32(t);
    const n = this.readInt32(t);
    t += yr;
    const i = this.bytes_.subarray(t, t + n);
    return r === cf.UTF8_BYTES ? i : this.text_decoder_.decode(i);
  }
  __union_with_string(t, r) {
    return typeof t == "string" ? this.__string(r) : this.__union(t, r);
  }
  __indirect(t) {
    return t + this.readInt32(t);
  }
  __vector(t) {
    return t + this.readInt32(t) + yr;
  }
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != jr) throw new Error("FlatBuffers: file identifier must be length " + jr);
    for (let r = 0; r < jr; r++) if (t.charCodeAt(r) != this.readInt8(this.position() + yr + r)) return false;
    return true;
  }
  createScalarList(t, r) {
    const n = [];
    for (let i = 0; i < r; ++i) {
      const a = t(i);
      a !== null && n.push(a);
    }
    return n;
  }
  createObjList(t, r) {
    const n = [];
    for (let i = 0; i < r; ++i) {
      const a = t(i);
      a !== null && n.push(a.unpack());
    }
    return n;
  }
}, Ob = class xb {
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false, this.string_maps = null, this.text_encoder = new TextEncoder();
    let r;
    t ? r = t : r = 1024, this.bb = Ci.allocate(r), this.space = r;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false, this.string_maps = null;
  }
  forceDefaults(t) {
    this.force_defaults = t;
  }
  dataBuffer() {
    return this.bb;
  }
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  prep(t, r) {
    t > this.minalign && (this.minalign = t);
    const n = ~(this.bb.capacity() - this.space + r) + 1 & t - 1;
    for (; this.space < n + t + r; ) {
      const i = this.bb.capacity();
      this.bb = xb.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
    }
    this.pad(n);
  }
  pad(t) {
    for (let r = 0; r < t; r++) this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, r, n) {
    (this.force_defaults || r != n) && (this.addInt8(r), this.slot(t));
  }
  addFieldInt16(t, r, n) {
    (this.force_defaults || r != n) && (this.addInt16(r), this.slot(t));
  }
  addFieldInt32(t, r, n) {
    (this.force_defaults || r != n) && (this.addInt32(r), this.slot(t));
  }
  addFieldInt64(t, r, n) {
    (this.force_defaults || r !== n) && (this.addInt64(r), this.slot(t));
  }
  addFieldFloat32(t, r, n) {
    (this.force_defaults || r != n) && (this.addFloat32(r), this.slot(t));
  }
  addFieldFloat64(t, r, n) {
    (this.force_defaults || r != n) && (this.addFloat64(r), this.slot(t));
  }
  addFieldOffset(t, r, n) {
    (this.force_defaults || r != n) && (this.addOffset(r), this.slot(t));
  }
  addFieldStruct(t, r, n) {
    r != n && (this.nested(r), this.slot(t));
  }
  nested(t) {
    if (t != this.offset()) throw new TypeError("FlatBuffers: struct must be serialized inline.");
  }
  notNested() {
    if (this.isNested) throw new TypeError("FlatBuffers: object serialization must not be nested.");
  }
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  offset() {
    return this.bb.capacity() - this.space;
  }
  static growByteBuffer(t) {
    const r = t.capacity();
    if (r & 3221225472) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const n = r << 1, i = Ci.allocate(n);
    return i.setPosition(n - r), i.bytes().set(t.bytes(), n - r), i;
  }
  addOffset(t) {
    this.prep(yr, 0), this.writeInt32(this.offset() - t + yr);
  }
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let r = 0; r < t; r++) this.vtable[r] = 0;
    this.isNested = true, this.object_start = this.offset();
  }
  endObject() {
    if (this.vtable == null || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let r = this.vtable_in_use - 1;
    for (; r >= 0 && this.vtable[r] == 0; r--) ;
    const n = r + 1;
    for (; r >= 0; r--) this.addInt16(this.vtable[r] != 0 ? t - this.vtable[r] : 0);
    const i = 2;
    this.addInt16(t - this.object_start);
    const a = (n + i) * yl;
    this.addInt16(a);
    let o = 0;
    const s = this.space;
    t: for (r = 0; r < this.vtables.length; r++) {
      const c = this.bb.capacity() - this.vtables[r];
      if (a == this.bb.readInt16(c)) {
        for (let u = yl; u < a; u += yl) if (this.bb.readInt16(s + u) != this.bb.readInt16(c + u)) continue t;
        o = this.vtables[r];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = false, t;
  }
  finish(t, r, n) {
    const i = n ? Pt : 0;
    if (r) {
      const a = r;
      if (this.prep(this.minalign, yr + jr + i), a.length != jr) throw new TypeError("FlatBuffers: file identifier must be length " + jr);
      for (let o = jr - 1; o >= 0; o--) this.writeInt8(a.charCodeAt(o));
    }
    this.prep(this.minalign, yr + i), this.addOffset(t), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  finishSizePrefixed(t, r) {
    this.finish(t, r, true);
  }
  requiredField(t, r) {
    const n = this.bb.capacity() - t, i = n - this.bb.readInt32(n);
    if (!(r < this.bb.readInt16(i) && this.bb.readInt16(i + r) != 0)) throw new TypeError("FlatBuffers: field " + r + " must be set");
  }
  startVector(t, r, n) {
    this.notNested(), this.vector_num_elems = r, this.prep(yr, t * r), this.prep(n, t * r);
  }
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  createSharedString(t) {
    if (!t) return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t)) return this.string_maps.get(t);
    const r = this.createString(t);
    return this.string_maps.set(t, r), r;
  }
  createString(t) {
    if (t == null) return 0;
    let r;
    return t instanceof Uint8Array ? r = t : r = this.text_encoder.encode(t), this.addInt8(0), this.startVector(1, r.length, 1), this.bb.setPosition(this.space -= r.length), this.bb.bytes().set(r, this.space), this.endVector();
  }
  createByteVector(t) {
    return t == null ? 0 : (this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length), this.bb.bytes().set(t, this.space), this.endVector());
  }
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  createObjectOffsetList(t) {
    const r = [];
    for (let n = 0; n < t.length; ++n) {
      const i = t[n];
      if (i !== null) r.push(this.createObjectOffset(i));
      else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return r;
  }
  createStructOffsetList(t, r) {
    return r(this, t.length), this.createObjectOffsetList(t.slice().reverse()), this.endVector();
  }
};
var Rs;
(function(e7) {
  e7[e7.BUFFER = 0] = "BUFFER";
})(Rs || (Rs = {}));
var ks;
(function(e7) {
  e7[e7.LZ4_FRAME = 0] = "LZ4_FRAME", e7[e7.ZSTD = 1] = "ZSTD";
})(ks || (ks = {}));
class on {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBodyCompression(t, r) {
    return (r || new on()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, r) {
    return t.setPosition(t.position() + Pt), (r || new on()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : ks.LZ4_FRAME;
  }
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Rs.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, r) {
    t.addFieldInt8(0, r, ks.LZ4_FRAME);
  }
  static addMethod(t, r) {
    t.addFieldInt8(1, r, Rs.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, r, n) {
    return on.startBodyCompression(t), on.addCodec(t, r), on.addMethod(t, n), on.endBodyCompression(t);
  }
}
class Ab {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, r, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(r ?? 0)), t.offset();
  }
}
let Pb = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(t, r, n) {
    return t.prep(8, 16), t.writeInt64(BigInt(n ?? 0)), t.writeInt64(BigInt(r ?? 0)), t.offset();
  }
}, Dr = class uf {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsRecordBatch(t, r) {
    return (r || new uf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new uf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  nodes(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new Pb()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  buffers(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new Ab()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  compression(t) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? (t || new on()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, r) {
    t.addFieldInt64(0, r, BigInt("0"));
  }
  static addNodes(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static startNodesVector(t, r) {
    t.startVector(16, r, 8);
  }
  static addBuffers(t, r) {
    t.addFieldOffset(2, r, 0);
  }
  static startBuffersVector(t, r) {
    t.startVector(16, r, 8);
  }
  static addCompression(t, r) {
    t.addFieldOffset(3, r, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, hi = class lf {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryBatch(t, r) {
    return (r || new lf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new lf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new Dr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, r) {
    t.addFieldInt64(0, r, BigInt("0"));
  }
  static addData(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static addIsDelta(t, r) {
    t.addFieldInt8(2, +r, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var ji;
(function(e7) {
  e7[e7.Little = 0] = "Little", e7[e7.Big = 1] = "Big";
})(ji || (ji = {}));
var Ls;
(function(e7) {
  e7[e7.DenseArray = 0] = "DenseArray";
})(Ls || (Ls = {}));
class Be {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsInt(t, r) {
    return (r || new Be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Be()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, r) {
    t.addFieldInt32(0, r, 0);
  }
  static addIsSigned(t, r) {
    t.addFieldInt8(1, +r, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, r, n) {
    return Be.startInt(t), Be.addBitWidth(t, r), Be.addIsSigned(t, n), Be.endInt(t);
  }
}
class Br {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryEncoding(t, r) {
    return (r || new Br()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Br()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  indexType(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new Be()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ls.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, r) {
    t.addFieldInt64(0, r, BigInt("0"));
  }
  static addIndexType(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static addIsOrdered(t, r) {
    t.addFieldInt8(2, +r, 0);
  }
  static addDictionaryKind(t, r) {
    t.addFieldInt16(3, r, Ls.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsKeyValue(t, r) {
    return (r || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, r) {
    return t.setPosition(t.position() + Pt), (r || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const r = this.bb.__offset(this.bb_pos, 4);
    return r ? this.bb.__string(this.bb_pos + r, t) : null;
  }
  value(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? this.bb.__string(this.bb_pos + r, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, r) {
    t.addFieldOffset(0, r, 0);
  }
  static addValue(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, r, n) {
    return ne.startKeyValue(t), ne.addKey(t, r), ne.addValue(t, n), ne.endKeyValue(t);
  }
}
let qp = class Fa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBinary(t, r) {
    return (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return Fa.startBinary(t), Fa.endBinary(t);
  }
}, Gp = class Ua {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBool(t, r) {
    return (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Ua.startBool(t), Ua.endBool(t);
  }
}, As = class di {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDate(t, r) {
    return (r || new di()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, r) {
    return t.setPosition(t.position() + Pt), (r || new di()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Xe.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Xe.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, r) {
    return di.startDate(t), di.addUnit(t, r), di.endDate(t);
  }
}, pi = class rn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDecimal(t, r) {
    return (r || new rn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, r) {
    return t.setPosition(t.position() + Pt), (r || new rn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, r) {
    t.addFieldInt32(0, r, 0);
  }
  static addScale(t, r) {
    t.addFieldInt32(1, r, 0);
  }
  static addBitWidth(t, r) {
    t.addFieldInt32(2, r, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, r, n, i) {
    return rn.startDecimal(t), rn.addPrecision(t, r), rn.addScale(t, n), rn.addBitWidth(t, i), rn.endDecimal(t);
  }
}, Ps = class yi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDuration(t, r) {
    return (r || new yi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, r) {
    return t.setPosition(t.position() + Pt), (r || new yi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Q.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Q.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, r) {
    return yi.startDuration(t), yi.addUnit(t, r), yi.endDuration(t);
  }
}, Ts = class mi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeBinary(t, r) {
    return (r || new mi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new mi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, r) {
    t.addFieldInt32(0, r, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, r) {
    return mi.startFixedSizeBinary(t), mi.addByteWidth(t, r), mi.endFixedSizeBinary(t);
  }
}, Is = class vi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeList(t, r) {
    return (r || new vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, r) {
    t.addFieldInt32(0, r, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, r) {
    return vi.startFixedSizeList(t), vi.addListSize(t, r), vi.endFixedSizeList(t);
  }
};
class mr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFloatingPoint(t, r) {
    return (r || new mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, r) {
    return t.setPosition(t.position() + Pt), (r || new mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : pe.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, r) {
    t.addFieldInt16(0, r, pe.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, r) {
    return mr.startFloatingPoint(t), mr.addPrecision(t, r), mr.endFloatingPoint(t);
  }
}
class vr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsInterval(t, r) {
    return (r || new vr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, r) {
    return t.setPosition(t.position() + Pt), (r || new vr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Pr.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Pr.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, r) {
    return vr.startInterval(t), vr.addUnit(t, r), vr.endInterval(t);
  }
}
let Hp = class za {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeBinary(t, r) {
    return (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return za.startLargeBinary(t), za.endLargeBinary(t);
  }
}, Kp = class Wa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeUtf8(t, r) {
    return (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return Wa.startLargeUtf8(t), Wa.endLargeUtf8(t);
  }
}, Yp = class Va {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsList(t, r) {
    return (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Va.startList(t), Va.endList(t);
  }
}, Es = class gi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMap(t, r) {
    return (r || new gi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, r) {
    return t.setPosition(t.position() + Pt), (r || new gi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, r) {
    t.addFieldInt8(0, +r, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, r) {
    return gi.startMap(t), gi.addKeysSorted(t, r), gi.endMap(t);
  }
}, Xp = class qa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsNull(t, r) {
    return (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, r) {
    return t.setPosition(t.position() + Pt), (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return qa.startNull(t), qa.endNull(t);
  }
};
class Cn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsStruct_(t, r) {
    return (r || new Cn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Cn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return Cn.startStruct_(t), Cn.endStruct_(t);
  }
}
class qe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsTime(t, r) {
    return (r || new qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, r) {
    return t.setPosition(t.position() + Pt), (r || new qe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Q.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Q.MILLISECOND);
  }
  static addBitWidth(t, r) {
    t.addFieldInt32(1, r, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, r, n) {
    return qe.startTime(t), qe.addUnit(t, r), qe.addBitWidth(t, n), qe.endTime(t);
  }
}
class Ge {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsTimestamp(t, r) {
    return (r || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ge()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Q.SECOND;
  }
  timezone(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? this.bb.__string(this.bb_pos + r, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Q.SECOND);
  }
  static addTimezone(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, r, n) {
    return Ge.startTimestamp(t), Ge.addUnit(t, r), Ge.addTimezone(t, n), Ge.endTimestamp(t);
  }
}
class xe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUnion(t, r) {
    return (r || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, r) {
    return t.setPosition(t.position() + Pt), (r || new xe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ye.Sparse;
  }
  typeIds(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? this.bb.readInt32(this.bb.__vector(this.bb_pos + r) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, r) {
    t.addFieldInt16(0, r, ye.Sparse);
  }
  static addTypeIds(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static createTypeIdsVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addInt32(r[n]);
    return t.endVector();
  }
  static startTypeIdsVector(t, r) {
    t.startVector(4, r, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, r, n) {
    return xe.startUnion(t), xe.addMode(t, r), xe.addTypeIds(t, n), xe.endUnion(t);
  }
}
let Jp = class Ga {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUtf8(t, r) {
    return (r || new Ga()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ga()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ga.startUtf8(t), Ga.endUtf8(t);
  }
};
var Ct;
(function(e7) {
  e7[e7.NONE = 0] = "NONE", e7[e7.Null = 1] = "Null", e7[e7.Int = 2] = "Int", e7[e7.FloatingPoint = 3] = "FloatingPoint", e7[e7.Binary = 4] = "Binary", e7[e7.Utf8 = 5] = "Utf8", e7[e7.Bool = 6] = "Bool", e7[e7.Decimal = 7] = "Decimal", e7[e7.Date = 8] = "Date", e7[e7.Time = 9] = "Time", e7[e7.Timestamp = 10] = "Timestamp", e7[e7.Interval = 11] = "Interval", e7[e7.List = 12] = "List", e7[e7.Struct_ = 13] = "Struct_", e7[e7.Union = 14] = "Union", e7[e7.FixedSizeBinary = 15] = "FixedSizeBinary", e7[e7.FixedSizeList = 16] = "FixedSizeList", e7[e7.Map = 17] = "Map", e7[e7.Duration = 18] = "Duration", e7[e7.LargeBinary = 19] = "LargeBinary", e7[e7.LargeUtf8 = 20] = "LargeUtf8", e7[e7.LargeList = 21] = "LargeList", e7[e7.RunEndEncoded = 22] = "RunEndEncoded";
})(Ct || (Ct = {}));
let ze = class $s {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsField(t, r) {
    return (r || new $s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, r) {
    return t.setPosition(t.position() + Pt), (r || new $s()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const r = this.bb.__offset(this.bb_pos, 4);
    return r ? this.bb.__string(this.bb_pos + r, t) : null;
  }
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : Ct.NONE;
  }
  type(t) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? this.bb.__union(t, this.bb_pos + r) : null;
  }
  dictionary(t) {
    const r = this.bb.__offset(this.bb_pos, 12);
    return r ? (t || new Br()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  children(t, r) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (r || new $s()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 16);
    return n ? (r || new ne()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, r) {
    t.addFieldOffset(0, r, 0);
  }
  static addNullable(t, r) {
    t.addFieldInt8(1, +r, 0);
  }
  static addTypeType(t, r) {
    t.addFieldInt8(2, r, Ct.NONE);
  }
  static addType(t, r) {
    t.addFieldOffset(3, r, 0);
  }
  static addDictionary(t, r) {
    t.addFieldOffset(4, r, 0);
  }
  static addChildren(t, r) {
    t.addFieldOffset(5, r, 0);
  }
  static createChildrenVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startChildrenVector(t, r) {
    t.startVector(4, r, 4);
  }
  static addCustomMetadata(t, r) {
    t.addFieldOffset(6, r, 0);
  }
  static createCustomMetadataVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, r) {
    t.startVector(4, r, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, dr = class Mr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsSchema(t, r) {
    return (r || new Mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : ji.Little;
  }
  fields(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new ze()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new ne()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  features(t) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? this.bb.readInt64(this.bb.__vector(this.bb_pos + r) + t * 8) : BigInt(0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, r) {
    t.addFieldInt16(0, r, ji.Little);
  }
  static addFields(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static createFieldsVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startFieldsVector(t, r) {
    t.startVector(4, r, 4);
  }
  static addCustomMetadata(t, r) {
    t.addFieldOffset(2, r, 0);
  }
  static createCustomMetadataVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, r) {
    t.startVector(4, r, 4);
  }
  static addFeatures(t, r) {
    t.addFieldOffset(3, r, 0);
  }
  static createFeaturesVector(t, r) {
    t.startVector(8, r.length, 8);
    for (let n = r.length - 1; n >= 0; n--) t.addInt64(r[n]);
    return t.endVector();
  }
  static startFeaturesVector(t, r) {
    t.startVector(8, r, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, r) {
    t.finish(r);
  }
  static finishSizePrefixedSchemaBuffer(t, r) {
    t.finish(r, void 0, true);
  }
  static createSchema(t, r, n, i, a) {
    return Mr.startSchema(t), Mr.addEndianness(t, r), Mr.addFields(t, n), Mr.addCustomMetadata(t, i), Mr.addFeatures(t, a), Mr.endSchema(t);
  }
};
var _t;
(function(e7) {
  e7[e7.NONE = 0] = "NONE", e7[e7.Schema = 1] = "Schema", e7[e7.DictionaryBatch = 2] = "DictionaryBatch", e7[e7.RecordBatch = 3] = "RecordBatch", e7[e7.Tensor = 4] = "Tensor", e7[e7.SparseTensor = 5] = "SparseTensor";
})(_t || (_t = {}));
var x;
(function(e7) {
  e7[e7.NONE = 0] = "NONE", e7[e7.Null = 1] = "Null", e7[e7.Int = 2] = "Int", e7[e7.Float = 3] = "Float", e7[e7.Binary = 4] = "Binary", e7[e7.Utf8 = 5] = "Utf8", e7[e7.Bool = 6] = "Bool", e7[e7.Decimal = 7] = "Decimal", e7[e7.Date = 8] = "Date", e7[e7.Time = 9] = "Time", e7[e7.Timestamp = 10] = "Timestamp", e7[e7.Interval = 11] = "Interval", e7[e7.List = 12] = "List", e7[e7.Struct = 13] = "Struct", e7[e7.Union = 14] = "Union", e7[e7.FixedSizeBinary = 15] = "FixedSizeBinary", e7[e7.FixedSizeList = 16] = "FixedSizeList", e7[e7.Map = 17] = "Map", e7[e7.Duration = 18] = "Duration", e7[e7.LargeBinary = 19] = "LargeBinary", e7[e7.LargeUtf8 = 20] = "LargeUtf8", e7[e7.Dictionary = -1] = "Dictionary", e7[e7.Int8 = -2] = "Int8", e7[e7.Int16 = -3] = "Int16", e7[e7.Int32 = -4] = "Int32", e7[e7.Int64 = -5] = "Int64", e7[e7.Uint8 = -6] = "Uint8", e7[e7.Uint16 = -7] = "Uint16", e7[e7.Uint32 = -8] = "Uint32", e7[e7.Uint64 = -9] = "Uint64", e7[e7.Float16 = -10] = "Float16", e7[e7.Float32 = -11] = "Float32", e7[e7.Float64 = -12] = "Float64", e7[e7.DateDay = -13] = "DateDay", e7[e7.DateMillisecond = -14] = "DateMillisecond", e7[e7.TimestampSecond = -15] = "TimestampSecond", e7[e7.TimestampMillisecond = -16] = "TimestampMillisecond", e7[e7.TimestampMicrosecond = -17] = "TimestampMicrosecond", e7[e7.TimestampNanosecond = -18] = "TimestampNanosecond", e7[e7.TimeSecond = -19] = "TimeSecond", e7[e7.TimeMillisecond = -20] = "TimeMillisecond", e7[e7.TimeMicrosecond = -21] = "TimeMicrosecond", e7[e7.TimeNanosecond = -22] = "TimeNanosecond", e7[e7.DenseUnion = -23] = "DenseUnion", e7[e7.SparseUnion = -24] = "SparseUnion", e7[e7.IntervalDayTime = -25] = "IntervalDayTime", e7[e7.IntervalYearMonth = -26] = "IntervalYearMonth", e7[e7.DurationSecond = -27] = "DurationSecond", e7[e7.DurationMillisecond = -28] = "DurationMillisecond", e7[e7.DurationMicrosecond = -29] = "DurationMicrosecond", e7[e7.DurationNanosecond = -30] = "DurationNanosecond";
})(x || (x = {}));
var Nr;
(function(e7) {
  e7[e7.OFFSET = 0] = "OFFSET", e7[e7.DATA = 1] = "DATA", e7[e7.VALIDITY = 2] = "VALIDITY", e7[e7.TYPE = 3] = "TYPE";
})(Nr || (Nr = {}));
const x1 = void 0;
function no(e7) {
  if (e7 === null) return "null";
  if (e7 === x1) return "undefined";
  switch (typeof e7) {
    case "number":
      return `${e7}`;
    case "bigint":
      return `${e7}`;
    case "string":
      return `"${e7}"`;
  }
  return typeof e7[Symbol.toPrimitive] == "function" ? e7[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e7) ? e7 instanceof BigInt64Array || e7 instanceof BigUint64Array ? `[${[...e7].map((t) => no(t))}]` : `[${e7}]` : ArrayBuffer.isView(e7) ? `[${e7}]` : JSON.stringify(e7, (t, r) => typeof r == "bigint" ? `${r}` : r);
}
function Dt(e7) {
  if (typeof e7 == "bigint" && (e7 < Number.MIN_SAFE_INTEGER || e7 > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${e7} is not safe to convert to a number.`);
  return Number(e7);
}
function Tb(e7, t) {
  return Dt(e7 / t) + Dt(e7 % t) / Dt(t);
}
const A1 = Symbol.for("isArrowBigNum");
function lr(e7, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Et(this.TypedArray, e7), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e7, ...t), this.constructor.prototype);
}
lr.prototype[A1] = true;
lr.prototype.toJSON = function() {
  return `"${ao(this)}"`;
};
lr.prototype.valueOf = function(e7) {
  return Ib(this, e7);
};
lr.prototype.toString = function() {
  return ao(this);
};
lr.prototype[Symbol.toPrimitive] = function(e7 = "default") {
  switch (e7) {
    case "number":
      return Ib(this);
    case "string":
      return ao(this);
    case "default":
      return I1(this);
  }
  return ao(this);
};
function Pi(...e7) {
  return lr.apply(this, e7);
}
function Ti(...e7) {
  return lr.apply(this, e7);
}
function io(...e7) {
  return lr.apply(this, e7);
}
Object.setPrototypeOf(Pi.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ti.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(io.prototype, Object.create(Uint32Array.prototype));
Object.assign(Pi.prototype, lr.prototype, { constructor: Pi, signed: true, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ti.prototype, lr.prototype, { constructor: Ti, signed: false, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(io.prototype, lr.prototype, { constructor: io, signed: true, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const P1 = BigInt(4294967296) * BigInt(4294967296), T1 = P1 - BigInt(1);
function Ib(e7, t) {
  const { buffer: r, byteOffset: n, byteLength: i, signed: a } = e7, o = new BigUint64Array(r, n, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (s) {
    for (const l of o) c |= (l ^ T1) * (BigInt(1) << BigInt(64 * u++));
    c *= BigInt(-1), c -= BigInt(1);
  } else for (const l of o) c |= l * (BigInt(1) << BigInt(64 * u++));
  if (typeof t == "number") {
    const l = BigInt(Math.pow(10, t)), f = c / l, h = c % l;
    return Dt(f) + Dt(h) / Dt(l);
  }
  return Dt(c);
}
function ao(e7) {
  if (e7.byteLength === 8) return `${new e7.BigIntArray(e7.buffer, e7.byteOffset, 1)[0]}`;
  if (!e7.signed) return ml(e7);
  let t = new Uint16Array(e7.buffer, e7.byteOffset, e7.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0) return ml(e7);
  t = t.slice();
  let n = 1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a], s = ~o + n;
    t[a] = s, n &= o === 0 ? 1 : 0;
  }
  return `-${ml(t)}`;
}
function I1(e7) {
  return e7.byteLength === 8 ? new e7.BigIntArray(e7.buffer, e7.byteOffset, 1)[0] : ao(e7);
}
function ml(e7) {
  let t = "";
  const r = new Uint32Array(2);
  let n = new Uint16Array(e7.buffer, e7.byteOffset, e7.byteLength / 2);
  const i = new Uint32Array((n = new Uint16Array(n).reverse()).buffer);
  let a = -1;
  const o = n.length - 1;
  do {
    for (r[0] = n[a = 0]; a < o; ) n[a++] = r[1] = r[0] / 10, r[0] = (r[0] - r[1] * 10 << 16) + n[a];
    n[a] = r[1] = r[0] / 10, r[0] = r[0] - r[1] * 10, t = `${r[0]}${t}`;
  } while (i[0] || i[1] || i[2] || i[3]);
  return t ?? "0";
}
class td {
  static new(t, r) {
    switch (r) {
      case true:
        return new Pi(t);
      case false:
        return new Ti(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Pi(t);
    }
    return t.byteLength === 16 ? new io(t) : new Ti(t);
  }
  static signed(t) {
    return new Pi(t);
  }
  static unsigned(t) {
    return new Ti(t);
  }
  static decimal(t) {
    return new io(t);
  }
  constructor(t, r) {
    return td.new(t, r);
  }
}
var Eb, $b, Mb, Db, Nb, Cb, jb, Bb, Rb, kb, Lb, Fb, Ub, zb, Wb, Vb, qb, Gb, Hb, Kb, Yb, Xb;
class G {
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === x.Null;
  }
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === x.Int;
  }
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === x.Float;
  }
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === x.Binary;
  }
  static isLargeBinary(t) {
    return (t == null ? void 0 : t.typeId) === x.LargeBinary;
  }
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === x.Utf8;
  }
  static isLargeUtf8(t) {
    return (t == null ? void 0 : t.typeId) === x.LargeUtf8;
  }
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === x.Bool;
  }
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === x.Decimal;
  }
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === x.Date;
  }
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === x.Time;
  }
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === x.Timestamp;
  }
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === x.Interval;
  }
  static isDuration(t) {
    return (t == null ? void 0 : t.typeId) === x.Duration;
  }
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === x.List;
  }
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === x.Struct;
  }
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === x.Union;
  }
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === x.FixedSizeBinary;
  }
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === x.FixedSizeList;
  }
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === x.Map;
  }
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === x.Dictionary;
  }
  static isDenseUnion(t) {
    return G.isUnion(t) && t.mode === ye.Dense;
  }
  static isSparseUnion(t) {
    return G.isUnion(t) && t.mode === ye.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
Eb = Symbol.toStringTag;
G[Eb] = ((e7) => (e7.children = null, e7.ArrayType = Array, e7.OffsetArrayType = Int32Array, e7[Symbol.toStringTag] = "DataType"))(G.prototype);
class yn extends G {
  constructor() {
    super(x.Null);
  }
  toString() {
    return "Null";
  }
}
$b = Symbol.toStringTag;
yn[$b] = ((e7) => e7[Symbol.toStringTag] = "Null")(yn.prototype);
class Gn extends G {
  constructor(t, r) {
    super(x.Int), this.isSigned = t, this.bitWidth = r;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? BigInt64Array : BigUint64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
Mb = Symbol.toStringTag;
Gn[Mb] = ((e7) => (e7.isSigned = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Int"))(Gn.prototype);
class oo extends Gn {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(oo.prototype, "ArrayType", { value: Int32Array });
class Fs extends G {
  constructor(t) {
    super(x.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case pe.HALF:
        return Uint16Array;
      case pe.SINGLE:
        return Float32Array;
      case pe.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
Db = Symbol.toStringTag;
Fs[Db] = ((e7) => (e7.precision = null, e7[Symbol.toStringTag] = "Float"))(Fs.prototype);
class Us extends G {
  constructor() {
    super(x.Binary);
  }
  toString() {
    return "Binary";
  }
}
Nb = Symbol.toStringTag;
Us[Nb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Binary"))(Us.prototype);
class zs extends G {
  constructor() {
    super(x.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Cb = Symbol.toStringTag;
zs[Cb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeBinary"))(zs.prototype);
class Ws extends G {
  constructor() {
    super(x.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
jb = Symbol.toStringTag;
Ws[jb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Utf8"))(Ws.prototype);
class Vs extends G {
  constructor() {
    super(x.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
Bb = Symbol.toStringTag;
Vs[Bb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeUtf8"))(Vs.prototype);
class qs extends G {
  constructor() {
    super(x.Bool);
  }
  toString() {
    return "Bool";
  }
}
Rb = Symbol.toStringTag;
qs[Rb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Bool"))(qs.prototype);
let Gs = class extends G {
  constructor(t, r, n = 128) {
    super(x.Decimal), this.scale = t, this.precision = r, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
kb = Symbol.toStringTag;
Gs[kb] = ((e7) => (e7.scale = null, e7.precision = null, e7.ArrayType = Uint32Array, e7[Symbol.toStringTag] = "Decimal"))(Gs.prototype);
class Hs extends G {
  constructor(t) {
    super(x.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${Xe[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === Xe.DAY ? Int32Array : BigInt64Array;
  }
}
Lb = Symbol.toStringTag;
Hs[Lb] = ((e7) => (e7.unit = null, e7[Symbol.toStringTag] = "Date"))(Hs.prototype);
class Ks extends G {
  constructor(t, r) {
    super(x.Time), this.unit = t, this.bitWidth = r;
  }
  toString() {
    return `Time${this.bitWidth}<${Q[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return BigInt64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
Fb = Symbol.toStringTag;
Ks[Fb] = ((e7) => (e7.unit = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Time"))(Ks.prototype);
class Ys extends G {
  constructor(t, r) {
    super(x.Timestamp), this.unit = t, this.timezone = r;
  }
  toString() {
    return `Timestamp<${Q[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Ub = Symbol.toStringTag;
Ys[Ub] = ((e7) => (e7.unit = null, e7.timezone = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Timestamp"))(Ys.prototype);
class Xs extends G {
  constructor(t) {
    super(x.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Pr[this.unit]}>`;
  }
}
zb = Symbol.toStringTag;
Xs[zb] = ((e7) => (e7.unit = null, e7.ArrayType = Int32Array, e7[Symbol.toStringTag] = "Interval"))(Xs.prototype);
class Js extends G {
  constructor(t) {
    super(x.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Q[this.unit]}>`;
  }
}
Wb = Symbol.toStringTag;
Js[Wb] = ((e7) => (e7.unit = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Duration"))(Js.prototype);
class Qs extends G {
  constructor(t) {
    super(x.List), this.children = [t];
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
}
Vb = Symbol.toStringTag;
Qs[Vb] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "List"))(Qs.prototype);
class ve extends G {
  constructor(t) {
    super(x.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
qb = Symbol.toStringTag;
ve[qb] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "Struct"))(ve.prototype);
class Zs extends G {
  constructor(t, r, n) {
    super(x.Union), this.mode = t, this.children = n, this.typeIds = r = Int32Array.from(r), this.typeIdToChildIndex = r.reduce((i, a, o) => (i[a] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Gb = Symbol.toStringTag;
Zs[Gb] = ((e7) => (e7.mode = null, e7.typeIds = null, e7.children = null, e7.typeIdToChildIndex = null, e7.ArrayType = Int8Array, e7[Symbol.toStringTag] = "Union"))(Zs.prototype);
class tc extends G {
  constructor(t) {
    super(x.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Hb = Symbol.toStringTag;
tc[Hb] = ((e7) => (e7.byteWidth = null, e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "FixedSizeBinary"))(tc.prototype);
class ec extends G {
  constructor(t, r) {
    super(x.FixedSizeList), this.listSize = t, this.children = [r];
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
}
Kb = Symbol.toStringTag;
ec[Kb] = ((e7) => (e7.children = null, e7.listSize = null, e7[Symbol.toStringTag] = "FixedSizeList"))(ec.prototype);
class rc extends G {
  constructor(t, r = false) {
    var n, i, a;
    if (super(x.Map), this.children = [t], this.keysSorted = r, t && (t.name = "entries", !((n = t == null ? void 0 : t.type) === null || n === void 0) && n.children)) {
      const o = (i = t == null ? void 0 : t.type) === null || i === void 0 ? void 0 : i.children[0];
      o && (o.name = "key");
      const s = (a = t == null ? void 0 : t.type) === null || a === void 0 ? void 0 : a.children[1];
      s && (s.name = "value");
    }
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Yb = Symbol.toStringTag;
rc[Yb] = ((e7) => (e7.children = null, e7.keysSorted = null, e7[Symbol.toStringTag] = "Map_"))(rc.prototype);
const E1 = /* @__PURE__ */ ((e7) => () => ++e7)(-1);
class Bi extends G {
  constructor(t, r, n, i) {
    super(x.Dictionary), this.indices = r, this.dictionary = t, this.isOrdered = i || false, this.id = n == null ? E1() : Dt(n);
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
Xb = Symbol.toStringTag;
Bi[Xb] = ((e7) => (e7.id = null, e7.indices = null, e7.isOrdered = null, e7.dictionary = null, e7[Symbol.toStringTag] = "Dictionary"))(Bi.prototype);
function Cr(e7) {
  const t = e7;
  switch (e7.typeId) {
    case x.Decimal:
      return e7.bitWidth / 32;
    case x.Interval:
      return 1 + t.unit;
    case x.FixedSizeList:
      return t.listSize;
    case x.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class dt {
  visitMany(t, ...r) {
    return t.map((n, i) => this.visit(n, ...r.map((a) => a[i])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], false).apply(this, t);
  }
  getVisitFn(t, r = true) {
    return $1(this, t, r);
  }
  getVisitFnByTypeId(t, r = true) {
    return bi(this, t, r);
  }
  visitNull(t, ...r) {
    return null;
  }
  visitBool(t, ...r) {
    return null;
  }
  visitInt(t, ...r) {
    return null;
  }
  visitFloat(t, ...r) {
    return null;
  }
  visitUtf8(t, ...r) {
    return null;
  }
  visitLargeUtf8(t, ...r) {
    return null;
  }
  visitBinary(t, ...r) {
    return null;
  }
  visitLargeBinary(t, ...r) {
    return null;
  }
  visitFixedSizeBinary(t, ...r) {
    return null;
  }
  visitDate(t, ...r) {
    return null;
  }
  visitTimestamp(t, ...r) {
    return null;
  }
  visitTime(t, ...r) {
    return null;
  }
  visitDecimal(t, ...r) {
    return null;
  }
  visitList(t, ...r) {
    return null;
  }
  visitStruct(t, ...r) {
    return null;
  }
  visitUnion(t, ...r) {
    return null;
  }
  visitDictionary(t, ...r) {
    return null;
  }
  visitInterval(t, ...r) {
    return null;
  }
  visitDuration(t, ...r) {
    return null;
  }
  visitFixedSizeList(t, ...r) {
    return null;
  }
  visitMap(t, ...r) {
    return null;
  }
}
function $1(e7, t, r = true) {
  return typeof t == "number" ? bi(e7, t, r) : typeof t == "string" && t in x ? bi(e7, x[t], r) : t && t instanceof G ? bi(e7, Qp(t), r) : (t == null ? void 0 : t.type) && t.type instanceof G ? bi(e7, Qp(t.type), r) : bi(e7, x.NONE, r);
}
function bi(e7, t, r = true) {
  let n = null;
  switch (t) {
    case x.Null:
      n = e7.visitNull;
      break;
    case x.Bool:
      n = e7.visitBool;
      break;
    case x.Int:
      n = e7.visitInt;
      break;
    case x.Int8:
      n = e7.visitInt8 || e7.visitInt;
      break;
    case x.Int16:
      n = e7.visitInt16 || e7.visitInt;
      break;
    case x.Int32:
      n = e7.visitInt32 || e7.visitInt;
      break;
    case x.Int64:
      n = e7.visitInt64 || e7.visitInt;
      break;
    case x.Uint8:
      n = e7.visitUint8 || e7.visitInt;
      break;
    case x.Uint16:
      n = e7.visitUint16 || e7.visitInt;
      break;
    case x.Uint32:
      n = e7.visitUint32 || e7.visitInt;
      break;
    case x.Uint64:
      n = e7.visitUint64 || e7.visitInt;
      break;
    case x.Float:
      n = e7.visitFloat;
      break;
    case x.Float16:
      n = e7.visitFloat16 || e7.visitFloat;
      break;
    case x.Float32:
      n = e7.visitFloat32 || e7.visitFloat;
      break;
    case x.Float64:
      n = e7.visitFloat64 || e7.visitFloat;
      break;
    case x.Utf8:
      n = e7.visitUtf8;
      break;
    case x.LargeUtf8:
      n = e7.visitLargeUtf8;
      break;
    case x.Binary:
      n = e7.visitBinary;
      break;
    case x.LargeBinary:
      n = e7.visitLargeBinary;
      break;
    case x.FixedSizeBinary:
      n = e7.visitFixedSizeBinary;
      break;
    case x.Date:
      n = e7.visitDate;
      break;
    case x.DateDay:
      n = e7.visitDateDay || e7.visitDate;
      break;
    case x.DateMillisecond:
      n = e7.visitDateMillisecond || e7.visitDate;
      break;
    case x.Timestamp:
      n = e7.visitTimestamp;
      break;
    case x.TimestampSecond:
      n = e7.visitTimestampSecond || e7.visitTimestamp;
      break;
    case x.TimestampMillisecond:
      n = e7.visitTimestampMillisecond || e7.visitTimestamp;
      break;
    case x.TimestampMicrosecond:
      n = e7.visitTimestampMicrosecond || e7.visitTimestamp;
      break;
    case x.TimestampNanosecond:
      n = e7.visitTimestampNanosecond || e7.visitTimestamp;
      break;
    case x.Time:
      n = e7.visitTime;
      break;
    case x.TimeSecond:
      n = e7.visitTimeSecond || e7.visitTime;
      break;
    case x.TimeMillisecond:
      n = e7.visitTimeMillisecond || e7.visitTime;
      break;
    case x.TimeMicrosecond:
      n = e7.visitTimeMicrosecond || e7.visitTime;
      break;
    case x.TimeNanosecond:
      n = e7.visitTimeNanosecond || e7.visitTime;
      break;
    case x.Decimal:
      n = e7.visitDecimal;
      break;
    case x.List:
      n = e7.visitList;
      break;
    case x.Struct:
      n = e7.visitStruct;
      break;
    case x.Union:
      n = e7.visitUnion;
      break;
    case x.DenseUnion:
      n = e7.visitDenseUnion || e7.visitUnion;
      break;
    case x.SparseUnion:
      n = e7.visitSparseUnion || e7.visitUnion;
      break;
    case x.Dictionary:
      n = e7.visitDictionary;
      break;
    case x.Interval:
      n = e7.visitInterval;
      break;
    case x.IntervalDayTime:
      n = e7.visitIntervalDayTime || e7.visitInterval;
      break;
    case x.IntervalYearMonth:
      n = e7.visitIntervalYearMonth || e7.visitInterval;
      break;
    case x.Duration:
      n = e7.visitDuration;
      break;
    case x.DurationSecond:
      n = e7.visitDurationSecond || e7.visitDuration;
      break;
    case x.DurationMillisecond:
      n = e7.visitDurationMillisecond || e7.visitDuration;
      break;
    case x.DurationMicrosecond:
      n = e7.visitDurationMicrosecond || e7.visitDuration;
      break;
    case x.DurationNanosecond:
      n = e7.visitDurationNanosecond || e7.visitDuration;
      break;
    case x.FixedSizeList:
      n = e7.visitFixedSizeList;
      break;
    case x.Map:
      n = e7.visitMap;
      break;
  }
  if (typeof n == "function") return n;
  if (!r) return () => null;
  throw new Error(`Unrecognized type '${x[t]}'`);
}
function Qp(e7) {
  switch (e7.typeId) {
    case x.Null:
      return x.Null;
    case x.Int: {
      const { bitWidth: t, isSigned: r } = e7;
      switch (t) {
        case 8:
          return r ? x.Int8 : x.Uint8;
        case 16:
          return r ? x.Int16 : x.Uint16;
        case 32:
          return r ? x.Int32 : x.Uint32;
        case 64:
          return r ? x.Int64 : x.Uint64;
      }
      return x.Int;
    }
    case x.Float:
      switch (e7.precision) {
        case pe.HALF:
          return x.Float16;
        case pe.SINGLE:
          return x.Float32;
        case pe.DOUBLE:
          return x.Float64;
      }
      return x.Float;
    case x.Binary:
      return x.Binary;
    case x.LargeBinary:
      return x.LargeBinary;
    case x.Utf8:
      return x.Utf8;
    case x.LargeUtf8:
      return x.LargeUtf8;
    case x.Bool:
      return x.Bool;
    case x.Decimal:
      return x.Decimal;
    case x.Time:
      switch (e7.unit) {
        case Q.SECOND:
          return x.TimeSecond;
        case Q.MILLISECOND:
          return x.TimeMillisecond;
        case Q.MICROSECOND:
          return x.TimeMicrosecond;
        case Q.NANOSECOND:
          return x.TimeNanosecond;
      }
      return x.Time;
    case x.Timestamp:
      switch (e7.unit) {
        case Q.SECOND:
          return x.TimestampSecond;
        case Q.MILLISECOND:
          return x.TimestampMillisecond;
        case Q.MICROSECOND:
          return x.TimestampMicrosecond;
        case Q.NANOSECOND:
          return x.TimestampNanosecond;
      }
      return x.Timestamp;
    case x.Date:
      switch (e7.unit) {
        case Xe.DAY:
          return x.DateDay;
        case Xe.MILLISECOND:
          return x.DateMillisecond;
      }
      return x.Date;
    case x.Interval:
      switch (e7.unit) {
        case Pr.DAY_TIME:
          return x.IntervalDayTime;
        case Pr.YEAR_MONTH:
          return x.IntervalYearMonth;
      }
      return x.Interval;
    case x.Duration:
      switch (e7.unit) {
        case Q.SECOND:
          return x.DurationSecond;
        case Q.MILLISECOND:
          return x.DurationMillisecond;
        case Q.MICROSECOND:
          return x.DurationMicrosecond;
        case Q.NANOSECOND:
          return x.DurationNanosecond;
      }
      return x.Duration;
    case x.Map:
      return x.Map;
    case x.List:
      return x.List;
    case x.Struct:
      return x.Struct;
    case x.Union:
      switch (e7.mode) {
        case ye.Dense:
          return x.DenseUnion;
        case ye.Sparse:
          return x.SparseUnion;
      }
      return x.Union;
    case x.FixedSizeBinary:
      return x.FixedSizeBinary;
    case x.FixedSizeList:
      return x.FixedSizeList;
    case x.Dictionary:
      return x.Dictionary;
  }
  throw new Error(`Unrecognized type '${x[e7.typeId]}'`);
}
dt.prototype.visitInt8 = null;
dt.prototype.visitInt16 = null;
dt.prototype.visitInt32 = null;
dt.prototype.visitInt64 = null;
dt.prototype.visitUint8 = null;
dt.prototype.visitUint16 = null;
dt.prototype.visitUint32 = null;
dt.prototype.visitUint64 = null;
dt.prototype.visitFloat16 = null;
dt.prototype.visitFloat32 = null;
dt.prototype.visitFloat64 = null;
dt.prototype.visitDateDay = null;
dt.prototype.visitDateMillisecond = null;
dt.prototype.visitTimestampSecond = null;
dt.prototype.visitTimestampMillisecond = null;
dt.prototype.visitTimestampMicrosecond = null;
dt.prototype.visitTimestampNanosecond = null;
dt.prototype.visitTimeSecond = null;
dt.prototype.visitTimeMillisecond = null;
dt.prototype.visitTimeMicrosecond = null;
dt.prototype.visitTimeNanosecond = null;
dt.prototype.visitDenseUnion = null;
dt.prototype.visitSparseUnion = null;
dt.prototype.visitIntervalDayTime = null;
dt.prototype.visitIntervalYearMonth = null;
dt.prototype.visitDuration = null;
dt.prototype.visitDurationSecond = null;
dt.prototype.visitDurationMillisecond = null;
dt.prototype.visitDurationMicrosecond = null;
dt.prototype.visitDurationNanosecond = null;
const Jb = new Float64Array(1), oi = new Uint32Array(Jb.buffer);
function Qb(e7) {
  const t = (e7 & 31744) >> 10, r = (e7 & 1023) / 1024, n = Math.pow(-1, (e7 & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (r ? Number.NaN : 1 / 0);
    case 0:
      return n * (r ? 6103515625e-14 * r : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + r);
}
function M1(e7) {
  if (e7 !== e7) return 32256;
  Jb[0] = e7;
  const t = (oi[1] & 2147483648) >> 16 & 65535;
  let r = oi[1] & 2146435072, n = 0;
  return r >= 1089470464 ? oi[0] > 0 ? r = 31744 : (r = (r & 2080374784) >> 16, n = (oi[1] & 1048575) >> 10) : r <= 1056964608 ? (n = 1048576 + (oi[1] & 1048575), n = 1048576 + (n << (r >> 20) - 998) >> 21, r = 0) : (r = r - 1056964608 >> 10, n = (oi[1] & 1048575) + 512 >> 10), t | r | n & 65535;
}
class Z extends dt {
}
function nt(e7) {
  return (t, r, n) => {
    if (t.setValid(r, n != null)) return e7(t, r, n);
  };
}
const D1 = (e7, t, r) => {
  e7[t] = Math.floor(r / 864e5);
}, Zb = (e7, t, r, n) => {
  if (r + 1 < t.length) {
    const i = Dt(t[r]), a = Dt(t[r + 1]);
    e7.set(n.subarray(0, a - i), i);
  }
}, N1 = ({ offset: e7, values: t }, r, n) => {
  const i = e7 + r;
  n ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, Kr = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, ed = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, t0 = ({ values: e7 }, t, r) => {
  e7[t] = M1(r);
}, C1 = (e7, t, r) => {
  switch (e7.type.precision) {
    case pe.HALF:
      return t0(e7, t, r);
    case pe.SINGLE:
    case pe.DOUBLE:
      return ed(e7, t, r);
  }
}, e0 = ({ values: e7 }, t, r) => {
  D1(e7, t, r.valueOf());
}, r0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, j1 = ({ stride: e7, values: t }, r, n) => {
  t.set(n.subarray(0, e7), e7 * r);
}, n0 = ({ values: e7, valueOffsets: t }, r, n) => Zb(e7, t, r, n), i0 = ({ values: e7, valueOffsets: t }, r, n) => Zb(e7, t, r, Jh(n)), B1 = (e7, t, r) => {
  e7.type.unit === Xe.DAY ? e0(e7, t, r) : r0(e7, t, r);
}, a0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r / 1e3);
}, o0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, s0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e3);
}, c0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e6);
}, R1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return a0(e7, t, r);
    case Q.MILLISECOND:
      return o0(e7, t, r);
    case Q.MICROSECOND:
      return s0(e7, t, r);
    case Q.NANOSECOND:
      return c0(e7, t, r);
  }
}, u0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, l0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, f0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, h0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, k1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return u0(e7, t, r);
    case Q.MILLISECOND:
      return l0(e7, t, r);
    case Q.MICROSECOND:
      return f0(e7, t, r);
    case Q.NANOSECOND:
      return h0(e7, t, r);
  }
}, L1 = ({ values: e7, stride: t }, r, n) => {
  e7.set(n.subarray(0, t), t * r);
}, F1 = (e7, t, r) => {
  const n = e7.children[0], i = e7.valueOffsets, a = Je.getVisitFn(n);
  if (Array.isArray(r)) for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r[++o]);
  else for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r.get(++o));
}, U1 = (e7, t, r) => {
  const n = e7.children[0], { valueOffsets: i } = e7, a = Je.getVisitFn(n);
  let { [t]: o, [t + 1]: s } = i;
  const c = r instanceof Map ? r.entries() : Object.entries(r);
  for (const u of c) if (a(n, o, u), ++o >= s) break;
}, z1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[a]), W1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(a)), V1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(i.name)), q1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[i.name]), G1 = (e7, t, r) => {
  const n = e7.type.children.map((a) => Je.getVisitFn(a.type)), i = r instanceof Map ? V1(t, r) : r instanceof xt ? W1(t, r) : Array.isArray(r) ? z1(t, r) : q1(t, r);
  e7.type.children.forEach((a, o) => i(n[o], e7.children[o], a, o));
}, H1 = (e7, t, r) => {
  e7.type.mode === ye.Dense ? d0(e7, t, r) : p0(e7, t, r);
}, d0 = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Je.visit(i, e7.valueOffsets[t], r);
}, p0 = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Je.visit(i, t, r);
}, K1 = (e7, t, r) => {
  var n;
  (n = e7.dictionary) === null || n === void 0 || n.set(e7.values[t], r);
}, Y1 = (e7, t, r) => {
  e7.type.unit === Pr.DAY_TIME ? y0(e7, t, r) : m0(e7, t, r);
}, y0 = ({ values: e7 }, t, r) => {
  e7.set(r.subarray(0, 2), 2 * t);
}, m0 = ({ values: e7 }, t, r) => {
  e7[t] = r[0] * 12 + r[1] % 12;
}, v0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, g0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, b0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, _0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, X1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return v0(e7, t, r);
    case Q.MILLISECOND:
      return g0(e7, t, r);
    case Q.MICROSECOND:
      return b0(e7, t, r);
    case Q.NANOSECOND:
      return _0(e7, t, r);
  }
}, J1 = (e7, t, r) => {
  const { stride: n } = e7, i = e7.children[0], a = Je.getVisitFn(i);
  if (Array.isArray(r)) for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r[o]);
  else for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r.get(o));
};
Z.prototype.visitBool = nt(N1);
Z.prototype.visitInt = nt(Kr);
Z.prototype.visitInt8 = nt(Kr);
Z.prototype.visitInt16 = nt(Kr);
Z.prototype.visitInt32 = nt(Kr);
Z.prototype.visitInt64 = nt(Kr);
Z.prototype.visitUint8 = nt(Kr);
Z.prototype.visitUint16 = nt(Kr);
Z.prototype.visitUint32 = nt(Kr);
Z.prototype.visitUint64 = nt(Kr);
Z.prototype.visitFloat = nt(C1);
Z.prototype.visitFloat16 = nt(t0);
Z.prototype.visitFloat32 = nt(ed);
Z.prototype.visitFloat64 = nt(ed);
Z.prototype.visitUtf8 = nt(i0);
Z.prototype.visitLargeUtf8 = nt(i0);
Z.prototype.visitBinary = nt(n0);
Z.prototype.visitLargeBinary = nt(n0);
Z.prototype.visitFixedSizeBinary = nt(j1);
Z.prototype.visitDate = nt(B1);
Z.prototype.visitDateDay = nt(e0);
Z.prototype.visitDateMillisecond = nt(r0);
Z.prototype.visitTimestamp = nt(R1);
Z.prototype.visitTimestampSecond = nt(a0);
Z.prototype.visitTimestampMillisecond = nt(o0);
Z.prototype.visitTimestampMicrosecond = nt(s0);
Z.prototype.visitTimestampNanosecond = nt(c0);
Z.prototype.visitTime = nt(k1);
Z.prototype.visitTimeSecond = nt(u0);
Z.prototype.visitTimeMillisecond = nt(l0);
Z.prototype.visitTimeMicrosecond = nt(f0);
Z.prototype.visitTimeNanosecond = nt(h0);
Z.prototype.visitDecimal = nt(L1);
Z.prototype.visitList = nt(F1);
Z.prototype.visitStruct = nt(G1);
Z.prototype.visitUnion = nt(H1);
Z.prototype.visitDenseUnion = nt(d0);
Z.prototype.visitSparseUnion = nt(p0);
Z.prototype.visitDictionary = nt(K1);
Z.prototype.visitInterval = nt(Y1);
Z.prototype.visitIntervalDayTime = nt(y0);
Z.prototype.visitIntervalYearMonth = nt(m0);
Z.prototype.visitDuration = nt(X1);
Z.prototype.visitDurationSecond = nt(v0);
Z.prototype.visitDurationMillisecond = nt(g0);
Z.prototype.visitDurationMicrosecond = nt(b0);
Z.prototype.visitDurationNanosecond = nt(_0);
Z.prototype.visitFixedSizeList = nt(J1);
Z.prototype.visitMap = nt(U1);
const Je = new Z(), rr = Symbol.for("parent"), Ii = Symbol.for("rowIndex");
class rd {
  constructor(t, r) {
    return this[rr] = t, this[Ii] = r, new Proxy(this, new Z1());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ii], r = this[rr], n = r.type.children, i = {};
    for (let a = -1, o = n.length; ++a < o; ) i[n[a].name] = Ee.visit(r.children[a], t);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${no(t)}: ${no(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new Q1(this[rr], this[Ii]);
  }
}
class Q1 {
  constructor(t, r) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = r, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, { done: false, value: [this.childFields[t].name, Ee.visit(this.children[t], this.rowIndex)] }) : { done: true, value: null };
  }
}
Object.defineProperties(rd.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [rr]: { writable: true, enumerable: false, configurable: false, value: null }, [Ii]: { writable: true, enumerable: false, configurable: false, value: -1 } });
class Z1 {
  isExtensible() {
    return false;
  }
  deleteProperty() {
    return false;
  }
  preventExtensions() {
    return true;
  }
  ownKeys(t) {
    return t[rr].type.children.map((r) => r.name);
  }
  has(t, r) {
    return t[rr].type.children.findIndex((n) => n.name === r) !== -1;
  }
  getOwnPropertyDescriptor(t, r) {
    if (t[rr].type.children.findIndex((n) => n.name === r) !== -1) return { writable: true, enumerable: true, configurable: true };
  }
  get(t, r) {
    if (Reflect.has(t, r)) return t[r];
    const n = t[rr].type.children.findIndex((i) => i.name === r);
    if (n !== -1) {
      const i = Ee.visit(t[rr].children[n], t[Ii]);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[rr].type.children.findIndex((a) => a.name === r);
    return i !== -1 ? (Je.visit(t[rr].children[i], t[Ii], n), Reflect.set(t, r, n)) : Reflect.has(t, r) || typeof r == "symbol" ? Reflect.set(t, r, n) : false;
  }
}
class H extends dt {
}
function tt(e7) {
  return (t, r) => t.getValid(r) ? e7(t, r) : null;
}
const tx = (e7, t) => 864e5 * e7[t], ex = (e7, t) => null, w0 = (e7, t, r) => {
  if (r + 1 >= t.length) return null;
  const n = Dt(t[r]), i = Dt(t[r + 1]);
  return e7.subarray(n, i);
}, rx = ({ offset: e7, values: t }, r) => {
  const n = e7 + r;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, S0 = ({ values: e7 }, t) => tx(e7, t), O0 = ({ values: e7 }, t) => Dt(e7[t]), bn = ({ stride: e7, values: t }, r) => t[e7 * r], nx = ({ stride: e7, values: t }, r) => Qb(t[e7 * r]), x0 = ({ values: e7 }, t) => e7[t], ix = ({ stride: e7, values: t }, r) => t.subarray(e7 * r, e7 * (r + 1)), A0 = ({ values: e7, valueOffsets: t }, r) => w0(e7, t, r), P0 = ({ values: e7, valueOffsets: t }, r) => {
  const n = w0(e7, t, r);
  return n !== null ? af(n) : null;
}, ax = ({ values: e7 }, t) => e7[t], ox = ({ type: e7, values: t }, r) => e7.precision !== pe.HALF ? t[r] : Qb(t[r]), sx = (e7, t) => e7.type.unit === Xe.DAY ? S0(e7, t) : O0(e7, t), T0 = ({ values: e7 }, t) => 1e3 * Dt(e7[t]), I0 = ({ values: e7 }, t) => Dt(e7[t]), E0 = ({ values: e7 }, t) => Tb(e7[t], BigInt(1e3)), $0 = ({ values: e7 }, t) => Tb(e7[t], BigInt(1e6)), cx = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return T0(e7, t);
    case Q.MILLISECOND:
      return I0(e7, t);
    case Q.MICROSECOND:
      return E0(e7, t);
    case Q.NANOSECOND:
      return $0(e7, t);
  }
}, M0 = ({ values: e7 }, t) => e7[t], D0 = ({ values: e7 }, t) => e7[t], N0 = ({ values: e7 }, t) => e7[t], C0 = ({ values: e7 }, t) => e7[t], ux = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return M0(e7, t);
    case Q.MILLISECOND:
      return D0(e7, t);
    case Q.MICROSECOND:
      return N0(e7, t);
    case Q.NANOSECOND:
      return C0(e7, t);
  }
}, lx = ({ values: e7, stride: t }, r) => td.decimal(e7.subarray(t * r, t * (r + 1))), fx = (e7, t) => {
  const { valueOffsets: r, stride: n, children: i } = e7, { [t * n]: a, [t * n + 1]: o } = r, c = i[0].slice(a, o - a);
  return new xt([c]);
}, hx = (e7, t) => {
  const { valueOffsets: r, children: n } = e7, { [t]: i, [t + 1]: a } = r, o = n[0];
  return new nd(o.slice(i, a - i));
}, dx = (e7, t) => new rd(e7, t), px = (e7, t) => e7.type.mode === ye.Dense ? j0(e7, t) : B0(e7, t), j0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ee.visit(n, e7.valueOffsets[t]);
}, B0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ee.visit(n, t);
}, yx = (e7, t) => {
  var r;
  return (r = e7.dictionary) === null || r === void 0 ? void 0 : r.get(e7.values[t]);
}, mx = (e7, t) => e7.type.unit === Pr.DAY_TIME ? R0(e7, t) : k0(e7, t), R0 = ({ values: e7 }, t) => e7.subarray(2 * t, 2 * (t + 1)), k0 = ({ values: e7 }, t) => {
  const r = e7[t], n = new Int32Array(2);
  return n[0] = Math.trunc(r / 12), n[1] = Math.trunc(r % 12), n;
}, L0 = ({ values: e7 }, t) => e7[t], F0 = ({ values: e7 }, t) => e7[t], U0 = ({ values: e7 }, t) => e7[t], z0 = ({ values: e7 }, t) => e7[t], vx = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return L0(e7, t);
    case Q.MILLISECOND:
      return F0(e7, t);
    case Q.MICROSECOND:
      return U0(e7, t);
    case Q.NANOSECOND:
      return z0(e7, t);
  }
}, gx = (e7, t) => {
  const { stride: r, children: n } = e7, a = n[0].slice(t * r, r);
  return new xt([a]);
};
H.prototype.visitNull = tt(ex);
H.prototype.visitBool = tt(rx);
H.prototype.visitInt = tt(ax);
H.prototype.visitInt8 = tt(bn);
H.prototype.visitInt16 = tt(bn);
H.prototype.visitInt32 = tt(bn);
H.prototype.visitInt64 = tt(x0);
H.prototype.visitUint8 = tt(bn);
H.prototype.visitUint16 = tt(bn);
H.prototype.visitUint32 = tt(bn);
H.prototype.visitUint64 = tt(x0);
H.prototype.visitFloat = tt(ox);
H.prototype.visitFloat16 = tt(nx);
H.prototype.visitFloat32 = tt(bn);
H.prototype.visitFloat64 = tt(bn);
H.prototype.visitUtf8 = tt(P0);
H.prototype.visitLargeUtf8 = tt(P0);
H.prototype.visitBinary = tt(A0);
H.prototype.visitLargeBinary = tt(A0);
H.prototype.visitFixedSizeBinary = tt(ix);
H.prototype.visitDate = tt(sx);
H.prototype.visitDateDay = tt(S0);
H.prototype.visitDateMillisecond = tt(O0);
H.prototype.visitTimestamp = tt(cx);
H.prototype.visitTimestampSecond = tt(T0);
H.prototype.visitTimestampMillisecond = tt(I0);
H.prototype.visitTimestampMicrosecond = tt(E0);
H.prototype.visitTimestampNanosecond = tt($0);
H.prototype.visitTime = tt(ux);
H.prototype.visitTimeSecond = tt(M0);
H.prototype.visitTimeMillisecond = tt(D0);
H.prototype.visitTimeMicrosecond = tt(N0);
H.prototype.visitTimeNanosecond = tt(C0);
H.prototype.visitDecimal = tt(lx);
H.prototype.visitList = tt(fx);
H.prototype.visitStruct = tt(dx);
H.prototype.visitUnion = tt(px);
H.prototype.visitDenseUnion = tt(j0);
H.prototype.visitSparseUnion = tt(B0);
H.prototype.visitDictionary = tt(yx);
H.prototype.visitInterval = tt(mx);
H.prototype.visitIntervalDayTime = tt(R0);
H.prototype.visitIntervalYearMonth = tt(k0);
H.prototype.visitDuration = tt(vx);
H.prototype.visitDurationSecond = tt(L0);
H.prototype.visitDurationMillisecond = tt(F0);
H.prototype.visitDurationMicrosecond = tt(U0);
H.prototype.visitDurationNanosecond = tt(z0);
H.prototype.visitFixedSizeList = tt(gx);
H.prototype.visitMap = tt(hx);
const Ee = new H(), _i = Symbol.for("keys"), Ei = Symbol.for("vals"), wi = Symbol.for("kKeysAsStrings"), ff = Symbol.for("_kKeysAsStrings");
class nd {
  constructor(t) {
    return this[_i] = new xt([t.children[0]]).memoize(), this[Ei] = t.children[1], new Proxy(this, new _x());
  }
  get [wi]() {
    return this[ff] || (this[ff] = Array.from(this[_i].toArray(), String));
  }
  [Symbol.iterator]() {
    return new bx(this[_i], this[Ei]);
  }
  get size() {
    return this[_i].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[_i], r = this[Ei], n = {};
    for (let i = -1, a = t.length; ++i < a; ) n[t.get(i)] = Ee.visit(r, i);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${no(t)}: ${no(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class bx {
  constructor(t, r) {
    this.keys = t, this.vals = r, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: true, value: null } : (this.keyIndex++, { done: false, value: [this.keys.get(t), Ee.visit(this.vals, t)] });
  }
}
class _x {
  isExtensible() {
    return false;
  }
  deleteProperty() {
    return false;
  }
  preventExtensions() {
    return true;
  }
  ownKeys(t) {
    return t[wi];
  }
  has(t, r) {
    return t[wi].includes(r);
  }
  getOwnPropertyDescriptor(t, r) {
    if (t[wi].indexOf(r) !== -1) return { writable: true, enumerable: true, configurable: true };
  }
  get(t, r) {
    if (Reflect.has(t, r)) return t[r];
    const n = t[wi].indexOf(r);
    if (n !== -1) {
      const i = Ee.visit(Reflect.get(t, Ei), n);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[wi].indexOf(r);
    return i !== -1 ? (Je.visit(Reflect.get(t, Ei), i, n), Reflect.set(t, r, n)) : Reflect.has(t, r) ? Reflect.set(t, r, n) : false;
  }
}
Object.defineProperties(nd.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [_i]: { writable: true, enumerable: false, configurable: false, value: null }, [Ei]: { writable: true, enumerable: false, configurable: false, value: null }, [ff]: { writable: true, enumerable: false, configurable: false, value: null } });
let Zp;
function W0(e7, t, r, n) {
  const { length: i = 0 } = e7;
  let a = typeof t != "number" ? 0 : t, o = typeof r != "number" ? i : r;
  return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (Zp = a, a = o, o = Zp), o > i && (o = i), n ? n(e7, a, o) : [a, o];
}
const id = (e7, t) => e7 < 0 ? t + e7 : e7, ty = (e7) => e7 !== e7;
function ha(e7) {
  if (typeof e7 !== "object" || e7 === null) return ty(e7) ? ty : (r) => r === e7;
  if (e7 instanceof Date) {
    const r = e7.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === r : false;
  }
  return ArrayBuffer.isView(e7) ? (r) => r ? g1(e7, r) : false : e7 instanceof Map ? Sx(e7) : Array.isArray(e7) ? wx(e7) : e7 instanceof xt ? Ox(e7) : xx(e7, true);
}
function wx(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = ha(e7[r]);
  return bu(t);
}
function Sx(e7) {
  let t = -1;
  const r = [];
  for (const n of e7.values()) r[++t] = ha(n);
  return bu(r);
}
function Ox(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = ha(e7.get(r));
  return bu(t);
}
function xx(e7, t = false) {
  const r = Object.keys(e7);
  if (!t && r.length === 0) return () => false;
  const n = [];
  for (let i = -1, a = r.length; ++i < a; ) n[i] = ha(e7[r[i]]);
  return bu(n, r);
}
function bu(e7, t) {
  return (r) => {
    if (!r || typeof r != "object") return false;
    switch (r.constructor) {
      case Array:
        return Ax(e7, r);
      case Map:
        return ey(e7, r, r.keys());
      case nd:
      case rd:
      case Object:
      case void 0:
        return ey(e7, r, t || Object.keys(r));
    }
    return r instanceof xt ? Px(e7, r) : false;
  };
}
function Ax(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t[n])) return false;
  return true;
}
function Px(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t.get(n))) return false;
  return true;
}
function ey(e7, t, r) {
  const n = r[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const s = e7.length;
  let c = a.next(), u = n.next(), l = i.next();
  for (; o < s && !u.done && !l.done && !c.done && !(u.value !== l.value || !e7[o](c.value)); ++o, u = n.next(), l = i.next(), c = a.next()) ;
  return o === s && u.done && l.done && c.done ? true : (n.return && n.return(), i.return && i.return(), a.return && a.return(), false);
}
function V0(e7, t, r, n) {
  return (r & 1 << n) !== 0;
}
function Tx(e7, t, r, n) {
  return (r & 1 << n) >> n;
}
function nc(e7, t, r) {
  const n = r.byteLength + 7 & -8;
  if (e7 > 0 || r.byteLength < n) {
    const i = new Uint8Array(n);
    return i.set(e7 % 8 === 0 ? r.subarray(e7 >> 3) : ic(new ad(r, e7, t, null, V0)).subarray(0, n)), i;
  }
  return r;
}
function ic(e7) {
  const t = [];
  let r = 0, n = 0, i = 0;
  for (const o of e7) o && (i |= 1 << n), ++n === 8 && (t[r++] = i, i = n = 0);
  (r === 0 || n > 0) && (t[r++] = i);
  const a = new Uint8Array(t.length + 7 & -8);
  return a.set(t), a;
}
class ad {
  constructor(t, r, n, i, a) {
    this.bytes = t, this.length = n, this.context = i, this.get = a, this.bit = r % 8, this.byteIndex = r >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), { value: this.get(this.context, this.index++, this.byte, this.bit++) }) : { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function hf(e7, t, r) {
  if (r - t <= 0) return 0;
  if (r - t < 8) {
    let a = 0;
    for (const o of new ad(e7, t, r - t, e7, Tx)) a += o;
    return a;
  }
  const n = r >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return hf(e7, t, i) + hf(e7, n, r) + Ix(e7, i >> 3, n - i >> 3);
}
function Ix(e7, t, r) {
  let n = 0, i = Math.trunc(t);
  const a = new DataView(e7.buffer, e7.byteOffset, e7.byteLength), o = r === void 0 ? e7.byteLength : i + r;
  for (; o - i >= 4; ) n += vl(a.getUint32(i)), i += 4;
  for (; o - i >= 2; ) n += vl(a.getUint16(i)), i += 2;
  for (; o - i >= 1; ) n += vl(a.getUint8(i)), i += 1;
  return n;
}
function vl(e7) {
  let t = Math.trunc(e7);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Ex = -1;
class Tt {
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get nullable() {
    if (this._nullCount !== 0) {
      const { type: t } = this;
      return G.isSparseUnion(t) ? this.children.some((r) => r.nullable) : G.isDenseUnion(t) ? this.children.some((r) => r.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return true;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: r, values: n, nullBitmap: i, typeIds: a } = this;
    return r && (t += r.byteLength), n && (t += n.byteLength), i && (t += i.byteLength), a && (t += a.byteLength), this.children.reduce((o, s) => o + s.byteLength, t);
  }
  get nullCount() {
    if (G.isUnion(this.type)) return this.children.reduce((n, i) => n + i.nullCount, 0);
    let t = this._nullCount, r;
    return t <= Ex && (r = this.nullBitmap) && (this._nullCount = t = r.length === 0 ? 0 : this.length - hf(r, this.offset, this.offset + this.length)), t;
  }
  constructor(t, r, n, i, a, o = [], s) {
    this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(r || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
    let c;
    a instanceof Tt ? (this.stride = a.stride, this.values = a.values, this.typeIds = a.typeIds, this.nullBitmap = a.nullBitmap, this.valueOffsets = a.valueOffsets) : (this.stride = Cr(t), a && ((c = a[0]) && (this.valueOffsets = c), (c = a[1]) && (this.values = c), (c = a[2]) && (this.nullBitmap = c), (c = a[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: r } = this;
    if (G.isUnion(r)) {
      const n = r, i = this.children[n.typeIdToChildIndex[this.typeIds[t]]], a = n.mode === ye.Dense ? this.valueOffsets[t] : t;
      return i.getValid(a);
    }
    if (this.nullable && this.nullCount > 0) {
      const n = this.offset + t;
      return (this.nullBitmap[n >> 3] & 1 << n % 8) !== 0;
    }
    return true;
  }
  setValid(t, r) {
    let n;
    const { type: i } = this;
    if (G.isUnion(i)) {
      const a = i, o = this.children[a.typeIdToChildIndex[this.typeIds[t]]], s = a.mode === ye.Dense ? this.valueOffsets[t] : t;
      n = o.getValid(s), o.setValid(s, r);
    } else {
      let { nullBitmap: a } = this;
      const { offset: o, length: s } = this, c = o + t, u = 1 << c % 8, l = c >> 3;
      (!a || a.byteLength <= l) && (a = new Uint8Array((o + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (a.set(nc(o, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: a })) : Object.assign(this, { nullBitmap: a, _nullCount: 0 }));
      const f = a[l];
      n = (f & u) !== 0, a[l] = r ? f | u : f & ~u;
    }
    return n !== !!r && (this._nullCount = this.nullCount + (r ? -1 : 1)), r;
  }
  clone(t = this.type, r = this.offset, n = this.length, i = this._nullCount, a = this, o = this.children) {
    return new Tt(t, r, n, i, a, o, this.dictionary);
  }
  slice(t, r) {
    const { stride: n, typeId: i, children: a } = this, o = +(this._nullCount === 0) - 1, s = i === 16 ? n : 1, c = this._sliceBuffers(t, r, n, i);
    return this.clone(this.type, this.offset + t, r, o, c, a.length === 0 || this.valueOffsets ? a : this._sliceChildren(a, s * t, s * r));
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === x.Null) return this.clone(this.type, 0, t, 0);
    const { length: r, nullCount: n } = this, i = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, r >> 3);
    i[r >> 3] = (1 << r - (r & -8)) - 1, n > 0 && i.set(nc(this.offset, r, this.nullBitmap), 0);
    const a = this.buffers;
    return a[Nr.VALIDITY] = i, this.clone(this.type, 0, t, n + (t - r), a);
  }
  _sliceBuffers(t, r, n, i) {
    let a;
    const { buffers: o } = this;
    return (a = o[Nr.TYPE]) && (o[Nr.TYPE] = a.subarray(t, t + r)), (a = o[Nr.OFFSET]) && (o[Nr.OFFSET] = a.subarray(t, t + r + 1)) || (a = o[Nr.DATA]) && (o[Nr.DATA] = i === 6 ? a : a.subarray(n * t, n * (t + r))), o;
  }
  _sliceChildren(t, r, n) {
    return t.map((i) => i.slice(r, n));
  }
}
Tt.prototype.children = Object.freeze([]);
class Ya extends dt {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["length"]: i = 0 } = t;
    return new Tt(r, n, i, i);
  }
  visitBool(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length >> 3, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitInt(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitFloat(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitUtf8(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = zp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = zp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDate(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTimestamp(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTime(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDecimal(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i } = t, a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
  visitStruct(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = vt(t.nullBitmap), { length: o = i.reduce((c, { length: u }) => Math.max(c, u), 0), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], i);
  }
  visitUnion(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = Et(r.ArrayType, t.typeIds), { ["length"]: o = a.length, ["nullCount"]: s = -1 } = t;
    if (G.isSparseUnion(r)) return new Tt(r, n, o, s, [void 0, void 0, void 0, a], i);
    const c = Ia(t.valueOffsets);
    return new Tt(r, n, o, s, [c, void 0, void 0, a], i);
  }
  visitDictionary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.indices.ArrayType, t.data), { ["dictionary"]: o = new xt([new Ya().visit({ type: r.dictionary })]) } = t, { ["length"]: s = a.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [void 0, a, i], [], o);
  }
  visitInterval(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDuration(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ya().visit({ type: r.valueType }) } = t, a = vt(t.nullBitmap), { ["length"]: o = i.length / Cr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], [i]);
  }
  visitMap(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ya().visit({ type: r.childType }) } = t, a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
}
const $x = new Ya();
function pt(e7) {
  return $x.visit(e7);
}
class ry {
  constructor(t = 0, r) {
    this.numChunks = t, this.getChunkIterator = r, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const t = this.chunkIterator.next();
      if (!t.done) return t;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function Mx(e7) {
  return e7.some((t) => t.nullable);
}
function q0(e7) {
  return e7.reduce((t, r) => t + r.nullCount, 0);
}
function G0(e7) {
  return e7.reduce((t, r, n) => (t[n + 1] = t[n] + r.length, t), new Uint32Array(e7.length + 1));
}
function H0(e7, t, r, n) {
  const i = [];
  for (let a = -1, o = e7.length; ++a < o; ) {
    const s = e7[a], c = t[a], { length: u } = s;
    if (c >= n) break;
    if (r >= c + u) continue;
    if (c >= r && c + u <= n) {
      i.push(s);
      continue;
    }
    const l = Math.max(0, r - c), f = Math.min(n - c, u);
    i.push(s.slice(l, f - l));
  }
  return i.length === 0 && i.push(e7[0].slice(0, 0)), i;
}
function od(e7, t, r, n) {
  let i = 0, a = 0, o = t.length - 1;
  do {
    if (i >= o - 1) return r < t[o] ? n(e7, i, r - t[i]) : null;
    a = i + Math.trunc((o - i) * 0.5), r < t[a] ? o = a : i = a;
  } while (i < o);
}
function sd(e7, t) {
  return e7.getValid(t);
}
function ac(e7) {
  function t(r, n, i) {
    return e7(r[n], i);
  }
  return function(r) {
    const n = this.data;
    return od(n, this._offsets, r, t);
  };
}
function K0(e7) {
  let t;
  function r(n, i, a) {
    return e7(n[i], a, t);
  }
  return function(n, i) {
    const a = this.data;
    t = i;
    const o = od(a, this._offsets, n, r);
    return t = void 0, o;
  };
}
function Y0(e7) {
  let t;
  function r(n, i, a) {
    let o = a, s = 0, c = 0;
    for (let u = i - 1, l = n.length; ++u < l; ) {
      const f = n[u];
      if (~(s = e7(f, t, o))) return c + s;
      o = 0, c += f.length;
    }
    return -1;
  }
  return function(n, i) {
    t = n;
    const a = this.data, o = typeof i != "number" ? r(a, 0, 0) : od(a, this._offsets, i, r);
    return t = void 0, o;
  };
}
class K extends dt {
}
function Dx(e7, t) {
  return t === null && e7.length > 0 ? 0 : -1;
}
function Nx(e7, t) {
  const { nullBitmap: r } = e7;
  if (!r || e7.nullCount <= 0) return -1;
  let n = 0;
  for (const i of new ad(r, e7.offset + (t || 0), e7.length, r, V0)) {
    if (!i) return n;
    ++n;
  }
  return -1;
}
function at(e7, t, r) {
  if (t === void 0) return -1;
  if (t === null) switch (e7.typeId) {
    case x.Union:
      break;
    case x.Dictionary:
      break;
    default:
      return Nx(e7, r);
  }
  const n = Ee.getVisitFn(e7), i = ha(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
function X0(e7, t, r) {
  const n = Ee.getVisitFn(e7), i = ha(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
K.prototype.visitNull = Dx;
K.prototype.visitBool = at;
K.prototype.visitInt = at;
K.prototype.visitInt8 = at;
K.prototype.visitInt16 = at;
K.prototype.visitInt32 = at;
K.prototype.visitInt64 = at;
K.prototype.visitUint8 = at;
K.prototype.visitUint16 = at;
K.prototype.visitUint32 = at;
K.prototype.visitUint64 = at;
K.prototype.visitFloat = at;
K.prototype.visitFloat16 = at;
K.prototype.visitFloat32 = at;
K.prototype.visitFloat64 = at;
K.prototype.visitUtf8 = at;
K.prototype.visitLargeUtf8 = at;
K.prototype.visitBinary = at;
K.prototype.visitLargeBinary = at;
K.prototype.visitFixedSizeBinary = at;
K.prototype.visitDate = at;
K.prototype.visitDateDay = at;
K.prototype.visitDateMillisecond = at;
K.prototype.visitTimestamp = at;
K.prototype.visitTimestampSecond = at;
K.prototype.visitTimestampMillisecond = at;
K.prototype.visitTimestampMicrosecond = at;
K.prototype.visitTimestampNanosecond = at;
K.prototype.visitTime = at;
K.prototype.visitTimeSecond = at;
K.prototype.visitTimeMillisecond = at;
K.prototype.visitTimeMicrosecond = at;
K.prototype.visitTimeNanosecond = at;
K.prototype.visitDecimal = at;
K.prototype.visitList = at;
K.prototype.visitStruct = at;
K.prototype.visitUnion = at;
K.prototype.visitDenseUnion = X0;
K.prototype.visitSparseUnion = X0;
K.prototype.visitDictionary = at;
K.prototype.visitInterval = at;
K.prototype.visitIntervalDayTime = at;
K.prototype.visitIntervalYearMonth = at;
K.prototype.visitDuration = at;
K.prototype.visitDurationSecond = at;
K.prototype.visitDurationMillisecond = at;
K.prototype.visitDurationMicrosecond = at;
K.prototype.visitDurationNanosecond = at;
K.prototype.visitFixedSizeList = at;
K.prototype.visitMap = at;
const oc = new K();
class Y extends dt {
}
function et(e7) {
  const { type: t } = e7;
  if (e7.nullCount === 0 && e7.stride === 1 && (G.isInt(t) && t.bitWidth !== 64 || G.isTime(t) && t.bitWidth !== 64 || G.isFloat(t) && t.precision !== pe.HALF)) return new ry(e7.data.length, (n) => {
    const i = e7.data[n];
    return i.values.subarray(0, i.length)[Symbol.iterator]();
  });
  let r = 0;
  return new ry(e7.data.length, (n) => {
    const a = e7.data[n].length, o = e7.slice(r, r + a);
    return r += a, new Cx(o);
  });
}
class Cx {
  constructor(t) {
    this.vector = t, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? { value: this.vector.get(this.index++) } : { done: true, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
Y.prototype.visitNull = et;
Y.prototype.visitBool = et;
Y.prototype.visitInt = et;
Y.prototype.visitInt8 = et;
Y.prototype.visitInt16 = et;
Y.prototype.visitInt32 = et;
Y.prototype.visitInt64 = et;
Y.prototype.visitUint8 = et;
Y.prototype.visitUint16 = et;
Y.prototype.visitUint32 = et;
Y.prototype.visitUint64 = et;
Y.prototype.visitFloat = et;
Y.prototype.visitFloat16 = et;
Y.prototype.visitFloat32 = et;
Y.prototype.visitFloat64 = et;
Y.prototype.visitUtf8 = et;
Y.prototype.visitLargeUtf8 = et;
Y.prototype.visitBinary = et;
Y.prototype.visitLargeBinary = et;
Y.prototype.visitFixedSizeBinary = et;
Y.prototype.visitDate = et;
Y.prototype.visitDateDay = et;
Y.prototype.visitDateMillisecond = et;
Y.prototype.visitTimestamp = et;
Y.prototype.visitTimestampSecond = et;
Y.prototype.visitTimestampMillisecond = et;
Y.prototype.visitTimestampMicrosecond = et;
Y.prototype.visitTimestampNanosecond = et;
Y.prototype.visitTime = et;
Y.prototype.visitTimeSecond = et;
Y.prototype.visitTimeMillisecond = et;
Y.prototype.visitTimeMicrosecond = et;
Y.prototype.visitTimeNanosecond = et;
Y.prototype.visitDecimal = et;
Y.prototype.visitList = et;
Y.prototype.visitStruct = et;
Y.prototype.visitUnion = et;
Y.prototype.visitDenseUnion = et;
Y.prototype.visitSparseUnion = et;
Y.prototype.visitDictionary = et;
Y.prototype.visitInterval = et;
Y.prototype.visitIntervalDayTime = et;
Y.prototype.visitIntervalYearMonth = et;
Y.prototype.visitDuration = et;
Y.prototype.visitDurationSecond = et;
Y.prototype.visitDurationMillisecond = et;
Y.prototype.visitDurationMicrosecond = et;
Y.prototype.visitDurationNanosecond = et;
Y.prototype.visitFixedSizeList = et;
Y.prototype.visitMap = et;
const cd = new Y();
var J0;
const Q0 = {}, Z0 = {};
class xt {
  constructor(t) {
    var r, n, i;
    const a = t[0] instanceof xt ? t.flatMap((s) => s.data) : t;
    if (a.length === 0 || a.some((s) => !(s instanceof Tt))) throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (r = a[0]) === null || r === void 0 ? void 0 : r.type;
    switch (a.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: s, set: c, indexOf: u } = Q0[o.typeId], l = a[0];
        this.isValid = (f) => sd(l, f), this.get = (f) => s(l, f), this.set = (f, h) => c(l, f, h), this.indexOf = (f) => u(l, f), this._offsets = [0, l.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, Z0[o.typeId]), this._offsets = G0(a);
        break;
    }
    this.data = a, this.type = o, this.stride = Cr(o), this.numChildren = (i = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets.at(-1);
  }
  get byteLength() {
    return this.data.reduce((t, r) => t + r.byteLength, 0);
  }
  get nullable() {
    return Mx(this.data);
  }
  get nullCount() {
    return q0(this.data);
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  get VectorName() {
    return `${x[this.type.typeId]}Vector`;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(id(t, this.length));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  includes(t, r) {
    return this.indexOf(t, r) > -1;
  }
  [Symbol.iterator]() {
    return cd.visit(this);
  }
  concat(...t) {
    return new xt(this.data.concat(t.flatMap((r) => r.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(t, r) {
    return new xt(W0(this, t, r, ({ data: n, _offsets: i }, a, o) => H0(n, i, a, o)));
  }
  toJSON() {
    return [...this];
  }
  toArray() {
    const { type: t, data: r, length: n, stride: i, ArrayType: a } = this;
    switch (t.typeId) {
      case x.Int:
      case x.Float:
      case x.Decimal:
      case x.Time:
      case x.Timestamp:
        switch (r.length) {
          case 0:
            return new a();
          case 1:
            return r[0].values.subarray(0, n * i);
          default:
            return r.reduce((o, { values: s, length: c }) => (o.array.set(s.subarray(0, c * i), o.offset), o.offset += c * i, o), { array: new a(n * i), offset: 0 }).array;
        }
    }
    return [...this];
  }
  toString() {
    return `[${[...this].join(",")}]`;
  }
  getChild(t) {
    var r;
    return this.getChildAt((r = this.type.children) === null || r === void 0 ? void 0 : r.findIndex((n) => n.name === t));
  }
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new xt(this.data.map(({ children: r }) => r[t])) : null;
  }
  get isMemoized() {
    return G.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : false;
  }
  memoize() {
    if (G.isDictionary(this.type)) {
      const t = new sc(this.data[0].dictionary), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return new sc(this);
  }
  unmemoize() {
    if (G.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return this;
  }
}
J0 = Symbol.toStringTag;
xt[J0] = ((e7) => {
  e7.type = G.prototype, e7.data = [], e7.length = 0, e7.stride = 1, e7.numChildren = 0, e7._offsets = new Uint32Array([0]), e7[Symbol.isConcatSpreadable] = true;
  const t = Object.keys(x).map((r) => x[r]).filter((r) => typeof r == "number" && r !== x.NONE);
  for (const r of t) {
    const n = Ee.getVisitFnByTypeId(r), i = Je.getVisitFnByTypeId(r), a = oc.getVisitFnByTypeId(r);
    Q0[r] = { get: n, set: i, indexOf: a }, Z0[r] = Object.create(e7, { isValid: { value: ac(sd) }, get: { value: ac(Ee.getVisitFnByTypeId(r)) }, set: { value: K0(Je.getVisitFnByTypeId(r)) }, indexOf: { value: Y0(oc.getVisitFnByTypeId(r)) } });
  }
  return "Vector";
})(xt.prototype);
class sc extends xt {
  constructor(t) {
    super(t.data);
    const r = this.get, n = this.set, i = this.slice, a = new Array(this.length);
    Object.defineProperty(this, "get", { value(o) {
      const s = a[o];
      if (s !== void 0) return s;
      const c = r.call(this, o);
      return a[o] = c, c;
    } }), Object.defineProperty(this, "set", { value(o, s) {
      n.call(this, o, s), a[o] = s;
    } }), Object.defineProperty(this, "slice", { value: (o, s) => new sc(i.call(this, o, s)) }), Object.defineProperty(this, "isMemoized", { value: true }), Object.defineProperty(this, "unmemoize", { value: () => new xt(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
  }
}
class df {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(t, r, n, i) {
    return t.prep(8, 24), t.writeInt64(BigInt(i ?? 0)), t.pad(4), t.writeInt32(n), t.writeInt64(BigInt(r ?? 0)), t.offset();
  }
}
class Ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFooter(t, r) {
    return (r || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Kt.V1;
  }
  schema(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new dr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  dictionaries(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new df()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, r) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (r || new df()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (r || new ne()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, r) {
    t.addFieldInt16(0, r, Kt.V1);
  }
  static addSchema(t, r) {
    t.addFieldOffset(1, r, 0);
  }
  static addDictionaries(t, r) {
    t.addFieldOffset(2, r, 0);
  }
  static startDictionariesVector(t, r) {
    t.startVector(24, r, 8);
  }
  static addRecordBatches(t, r) {
    t.addFieldOffset(3, r, 0);
  }
  static startRecordBatchesVector(t, r) {
    t.startVector(24, r, 8);
  }
  static addCustomMetadata(t, r) {
    t.addFieldOffset(4, r, 0);
  }
  static createCustomMetadataVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, r) {
    t.startVector(4, r, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, r) {
    t.finish(r);
  }
  static finishSizePrefixedFooterBuffer(t, r) {
    t.finish(r, void 0, true);
  }
}
class At {
  constructor(t = [], r, n, i = Kt.V5) {
    this.fields = t || [], this.metadata = r || /* @__PURE__ */ new Map(), n || (n = pf(this.fields)), this.dictionaries = n, this.metadataVersion = i;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, r) => `${r}: ${t}`).join(", ")} }>`;
  }
  select(t) {
    const r = new Set(t), n = this.fields.filter((i) => r.has(i.name));
    return new At(n, this.metadata);
  }
  selectAt(t) {
    const r = t.map((n) => this.fields[n]).filter(Boolean);
    return new At(r, this.metadata);
  }
  assign(...t) {
    const r = t[0] instanceof At ? t[0] : Array.isArray(t[0]) ? new At(t[0]) : new At(t), n = [...this.fields], i = us(us(/* @__PURE__ */ new Map(), this.metadata), r.metadata), a = r.fields.filter((s) => {
      const c = n.findIndex((u) => u.name === s.name);
      return ~c ? (n[c] = s.clone({ metadata: us(us(/* @__PURE__ */ new Map(), n[c].metadata), s.metadata) })) && false : true;
    }), o = pf(a, /* @__PURE__ */ new Map());
    return new At([...n, ...a], i, new Map([...this.dictionaries, ...o]));
  }
}
At.prototype.fields = null;
At.prototype.metadata = null;
At.prototype.dictionaries = null;
class Ft {
  static new(...t) {
    let [r, n, i, a] = t;
    return t[0] && typeof t[0] == "object" && ({ name: r } = t[0], n === void 0 && (n = t[0].type), i === void 0 && (i = t[0].nullable), a === void 0 && (a = t[0].metadata)), new Ft(`${r}`, n, i, a);
  }
  constructor(t, r, n = false, i) {
    this.name = t, this.type = r, this.nullable = n, this.metadata = i || /* @__PURE__ */ new Map();
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [r, n, i, a] = t;
    return !t[0] || typeof t[0] != "object" ? [r = this.name, n = this.type, i = this.nullable, a = this.metadata] = t : { name: r = this.name, type: n = this.type, nullable: i = this.nullable, metadata: a = this.metadata } = t[0], Ft.new(r, n, i, a);
  }
}
Ft.prototype.type = null;
Ft.prototype.name = null;
Ft.prototype.nullable = null;
Ft.prototype.metadata = null;
function us(e7, t) {
  return new Map([...e7 || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function pf(e7, t = /* @__PURE__ */ new Map()) {
  for (let r = -1, n = e7.length; ++r < n; ) {
    const a = e7[r].type;
    if (G.isDictionary(a)) {
      if (!t.has(a.id)) t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && pf(a.children, t);
  }
  return t;
}
var jx = Ob, Bx = Ci;
class so {
  static decode(t) {
    t = new Bx(vt(t));
    const r = Ne.getRootAsFooter(t), n = At.decode(r.schema(), /* @__PURE__ */ new Map(), r.version());
    return new Rx(n, r);
  }
  static encode(t) {
    const r = new jx(), n = At.encode(r, t.schema);
    Ne.startRecordBatchesVector(r, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse()) mn.encode(r, o);
    const i = r.endVector();
    Ne.startDictionariesVector(r, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse()) mn.encode(r, o);
    const a = r.endVector();
    return Ne.startFooter(r), Ne.addSchema(r, n), Ne.addVersion(r, Kt.V5), Ne.addRecordBatches(r, i), Ne.addDictionaries(r, a), Ne.finishFooterBuffer(r, Ne.endFooter(r)), r.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, r = Kt.V5, n, i) {
    this.schema = t, this.version = r, n && (this._recordBatches = n), i && (this._dictionaryBatches = i);
  }
  *recordBatches() {
    for (let t, r = -1, n = this.numRecordBatches; ++r < n; ) (t = this.getRecordBatch(r)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, r = -1, n = this.numDictionaries; ++r < n; ) (t = this.getDictionaryBatch(r)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class Rx extends so {
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  constructor(t, r) {
    super(t, r.version()), this._footer = r;
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const r = this._footer.recordBatches(t);
      if (r) return mn.decode(r);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const r = this._footer.dictionaries(t);
      if (r) return mn.decode(r);
    }
    return null;
  }
}
class mn {
  static decode(t) {
    return new mn(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  static encode(t, r) {
    const { metaDataLength: n } = r, i = BigInt(r.offset), a = BigInt(r.bodyLength);
    return df.createBlock(t, i, n, a);
  }
  constructor(t, r, n) {
    this.metaDataLength = t, this.offset = Dt(n), this.bodyLength = Dt(r);
  }
}
const zt = Object.freeze({ done: true, value: void 0 });
class ny {
  constructor(t) {
    this._json = t;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}
class ud {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, r) {
    return this._getNodeStream().pipe(t, r);
  }
  pipeTo(t, r) {
    return this._getDOMStream().pipeTo(t, r);
  }
  pipeThrough(t, r) {
    return this._getDOMStream().pipeThrough(t, r);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class kx extends ud {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return ot(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  write(t) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({ done: false, value: t }));
  }
  abort(t) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: t } : this.resolvers.shift().reject({ done: true, value: t }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: t } = this;
      for (; t.length > 0; ) t.shift().resolve(zt);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return Ve.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return Ve.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.abort(t), zt;
    });
  }
  return(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.close(), zt;
    });
  }
  read(t) {
    return ot(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return ot(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: false, value: this._values.shift() }) : this._error ? Promise.reject({ done: true, value: this._error.error }) : this._closedPromiseResolve ? new Promise((r, n) => {
      this.resolvers.push({ resolve: r, reject: n });
    }) : Promise.resolve(zt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve) return true;
    throw new Error("AsyncQueue is closed");
  }
}
class Ms extends kx {
  write(t) {
    if ((t = vt(t)).byteLength > 0) return super.write(t);
  }
  toString(t = false) {
    return t ? af(this.toUint8Array(true)) : this.toUint8Array(false).then(af);
  }
  toUint8Array(t = false) {
    return t ? Ar(this._values)[0] : ot(this, void 0, void 0, function* () {
      var r, n, i, a;
      const o = [];
      let s = 0;
      try {
        for (var c = true, u = Fn(this), l; l = yield u.next(), r = l.done, !r; c = true) {
          a = l.value, c = false;
          const f = a;
          o.push(f), s += f.byteLength;
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          !c && !r && (i = u.return) && (yield i.call(u));
        } finally {
          if (n) throw n.error;
        }
      }
      return Ar(o, s)[0];
    });
  }
}
class cc {
  constructor(t) {
    t && (this.source = new Lx(Ve.fromIterable(t)));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Ri {
  constructor(t) {
    t instanceof Ri ? this.source = t.source : t instanceof Ms ? this.source = new En(Ve.fromAsyncIterable(t)) : bb(t) ? this.source = new En(Ve.fromNodeStream(t)) : Qh(t) ? this.source = new En(Ve.fromDOMStream(t)) : gb(t) ? this.source = new En(Ve.fromDOMStream(t.body)) : Ko(t) ? this.source = new En(Ve.fromIterable(t)) : qn(t) ? this.source = new En(Ve.fromAsyncIterable(t)) : fa(t) && (this.source = new En(Ve.fromAsyncIterable(t)));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(t) {
    return this.source.cancel(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Lx {
  constructor(t) {
    this.source = t;
  }
  cancel(t) {
    this.return(t);
  }
  peek(t) {
    return this.next(t, "peek").value;
  }
  read(t) {
    return this.next(t, "read").value;
  }
  next(t, r = "read") {
    return this.source.next({ cmd: r, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || zt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || zt);
  }
}
class En {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  cancel(t) {
    return ot(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return ot(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return ot(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return ot(this, arguments, void 0, function* (r, n = "read") {
      return yield this.source.next({ cmd: n, size: r });
    });
  }
  throw(t) {
    return ot(this, void 0, void 0, function* () {
      const r = this.source.throw && (yield this.source.throw(t)) || zt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
  return(t) {
    return ot(this, void 0, void 0, function* () {
      const r = this.source.return && (yield this.source.return(t)) || zt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
}
class iy extends cc {
  constructor(t, r) {
    super(), this.position = 0, this.buffer = vt(t), this.size = r === void 0 ? this.buffer.byteLength : r;
  }
  readInt32(t) {
    const { buffer: r, byteOffset: n } = this.readAt(t, 4);
    return new DataView(r, n).getInt32(0, true);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: r, size: n, position: i } = this;
    return r && i < n ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(n, i + Math.min(n - i, t)), r.subarray(i, this.position)) : null;
  }
  readAt(t, r) {
    const n = this.buffer, i = Math.min(this.size, t + r);
    return n ? n.subarray(t, i) : new Uint8Array(r);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(t) {
    return this.close(), { done: true, value: t };
  }
  return(t) {
    return this.close(), { done: true, value: t };
  }
}
class uc extends Ri {
  constructor(t, r) {
    super(), this.position = 0, this._handle = t, typeof r == "number" ? this.size = r : this._pending = ot(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return ot(this, void 0, void 0, function* () {
      const { buffer: r, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(r, n).getInt32(0, true);
    });
  }
  seek(t) {
    return ot(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return ot(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: r, size: n, position: i } = this;
      if (r && i < n) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let a = i, o = 0, s = 0;
        const c = Math.min(n, a + Math.min(n - a, t)), u = new Uint8Array(Math.max(0, (this.position = c) - a));
        for (; (a += s) < c && (o += s) < u.byteLength; ) ({ bytesRead: s } = yield r.read(u, o, u.byteLength - o, a));
        return u;
      }
      return null;
    });
  }
  readAt(t, r) {
    return ot(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: n, size: i } = this;
      if (n && t + r < i) {
        const a = Math.min(i, t + r), o = new Uint8Array(a - t);
        return (yield n.read(o, 0, r, t)).buffer;
      }
      return new Uint8Array(r);
    });
  }
  close() {
    return ot(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.close(), { done: true, value: t };
    });
  }
  return(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.close(), { done: true, value: t };
    });
  }
}
const Fx = 65536;
function Si(e7) {
  return e7 < 0 && (e7 = 4294967295 + e7 + 1), `0x${e7.toString(16)}`;
}
const ki = 8, ld = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
class t_ {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(t) {
    const r = new Uint32Array([this.buffer[1] >>> 16, this.buffer[1] & 65535, this.buffer[0] >>> 16, this.buffer[0] & 65535]), n = new Uint32Array([t.buffer[1] >>> 16, t.buffer[1] & 65535, t.buffer[0] >>> 16, t.buffer[0] & 65535]);
    let i = r[3] * n[3];
    this.buffer[0] = i & 65535;
    let a = i >>> 16;
    return i = r[2] * n[3], a += i, i = r[3] * n[2] >>> 0, a += i, this.buffer[0] += a << 16, this.buffer[1] = a >>> 0 < i ? Fx : 0, this.buffer[1] += a >>> 16, this.buffer[1] += r[1] * n[3] + r[2] * n[2] + r[3] * n[1], this.buffer[1] += r[0] * n[3] + r[1] * n[2] + r[2] * n[1] + r[3] * n[0] << 16, this;
  }
  _plus(t) {
    const r = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], r < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = r;
  }
  lessThan(t) {
    return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0];
  }
  equals(t) {
    return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
  }
  greaterThan(t) {
    return t.lessThan(this);
  }
  hex() {
    return `${Si(this.buffer[1])} ${Si(this.buffer[0])}`;
  }
}
class It extends t_ {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  static from(t, r = new Uint32Array(2)) {
    return It.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(2)) {
    return It.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(2)) {
    const n = t.length, i = new It(r);
    for (let a = 0; a < n; ) {
      const o = ki < n - a ? ki : n - a, s = new It(new Uint32Array([Number.parseInt(t.slice(a, a + o), 10), 0])), c = new It(new Uint32Array([ld[o], 0]));
      i.times(c), i.plus(s), a += o;
    }
    return i;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 2);
    for (let n = -1, i = t.length; ++n < i; ) It.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 2 * n * 4, 2));
    return r;
  }
  static multiply(t, r) {
    return new It(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new It(new Uint32Array(t.buffer)).plus(r);
  }
}
class Oe extends t_ {
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
  }
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  lessThan(t) {
    const r = this.buffer[1] << 0, n = t.buffer[1] << 0;
    return r < n || r === n && this.buffer[0] < t.buffer[0];
  }
  static from(t, r = new Uint32Array(2)) {
    return Oe.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(2)) {
    return Oe.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(2)) {
    const n = t.startsWith("-"), i = t.length, a = new Oe(r);
    for (let o = n ? 1 : 0; o < i; ) {
      const s = ki < i - o ? ki : i - o, c = new Oe(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0])), u = new Oe(new Uint32Array([ld[s], 0]));
      a.times(u), a.plus(c), o += s;
    }
    return n ? a.negate() : a;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 2);
    for (let n = -1, i = t.length; ++n < i; ) Oe.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 2 * n * 4, 2));
    return r;
  }
  static multiply(t, r) {
    return new Oe(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new Oe(new Uint32Array(t.buffer)).plus(r);
  }
}
class pr {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new Oe(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Oe(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const r = new It(new Uint32Array([this.buffer[3], 0])), n = new It(new Uint32Array([this.buffer[2], 0])), i = new It(new Uint32Array([this.buffer[1], 0])), a = new It(new Uint32Array([this.buffer[0], 0])), o = new It(new Uint32Array([t.buffer[3], 0])), s = new It(new Uint32Array([t.buffer[2], 0])), c = new It(new Uint32Array([t.buffer[1], 0])), u = new It(new Uint32Array([t.buffer[0], 0]));
    let l = It.multiply(a, u);
    this.buffer[0] = l.low();
    const f = new It(new Uint32Array([l.high(), 0]));
    return l = It.multiply(i, u), f.plus(l), l = It.multiply(a, c), f.plus(l), this.buffer[1] = f.low(), this.buffer[3] = f.lessThan(l) ? 1 : 0, this.buffer[2] = f.high(), new It(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(It.multiply(n, u)).plus(It.multiply(i, c)).plus(It.multiply(a, s)), this.buffer[3] += It.multiply(r, u).plus(It.multiply(n, c)).plus(It.multiply(i, s)).plus(It.multiply(a, o)).low(), this;
  }
  plus(t) {
    const r = new Uint32Array(4);
    return r[3] = this.buffer[3] + t.buffer[3] >>> 0, r[2] = this.buffer[2] + t.buffer[2] >>> 0, r[1] = this.buffer[1] + t.buffer[1] >>> 0, r[0] = this.buffer[0] + t.buffer[0] >>> 0, r[0] < this.buffer[0] >>> 0 && ++r[1], r[1] < this.buffer[1] >>> 0 && ++r[2], r[2] < this.buffer[2] >>> 0 && ++r[3], this.buffer[3] = r[3], this.buffer[2] = r[2], this.buffer[1] = r[1], this.buffer[0] = r[0], this;
  }
  hex() {
    return `${Si(this.buffer[3])} ${Si(this.buffer[2])} ${Si(this.buffer[1])} ${Si(this.buffer[0])}`;
  }
  static multiply(t, r) {
    return new pr(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new pr(new Uint32Array(t.buffer)).plus(r);
  }
  static from(t, r = new Uint32Array(4)) {
    return pr.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(4)) {
    return pr.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(4)) {
    const n = t.startsWith("-"), i = t.length, a = new pr(r);
    for (let o = n ? 1 : 0; o < i; ) {
      const s = ki < i - o ? ki : i - o, c = new pr(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0, 0, 0])), u = new pr(new Uint32Array([ld[s], 0, 0, 0]));
      a.times(u), a.plus(c), o += s;
    }
    return n ? a.negate() : a;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 4);
    for (let n = -1, i = t.length; ++n < i; ) pr.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 4 * 4 * n, 4));
    return r;
  }
}
class e_ extends dt {
  constructor(t, r, n, i, a = Kt.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = r, this.buffers = n, this.dictionaries = i, this.metadataVersion = a;
  }
  visit(t) {
    return super.visit(t instanceof Ft ? t.type : t);
  }
  visitNull(t, { length: r } = this.nextFieldNode()) {
    return pt({ type: t, length: r });
  }
  visitBool(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return this.metadataVersion < Kt.V5 && this.readNullBitmap(t, n), t.mode === ye.Sparse ? this.visitSparseUnion(t, { length: r, nullCount: n }) : this.visitDenseUnion(t, { length: r, nullCount: n });
  }
  visitDenseUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDuration(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return pt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, r, n = this.nextBufferRange()) {
    return r > 0 && this.readData(t, n) || new Uint8Array(0);
  }
  readOffsets(t, r) {
    return this.readData(t, r);
  }
  readTypeIds(t, r) {
    return this.readData(t, r);
  }
  readData(t, { length: r, offset: n } = this.nextBufferRange()) {
    return this.bytes.subarray(n, n + r);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class Ux extends e_ {
  constructor(t, r, n, i, a) {
    super(new Uint8Array(0), r, n, i, a), this.sources = t;
  }
  readNullBitmap(t, r, { offset: n } = this.nextBufferRange()) {
    return r <= 0 ? new Uint8Array(0) : ic(this.sources[n]);
  }
  readOffsets(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.OffsetArrayType, this.sources[r]));
  }
  readTypeIds(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.ArrayType, this.sources[r]));
  }
  readData(t, { offset: r } = this.nextBufferRange()) {
    const { sources: n } = this;
    return G.isTimestamp(t) || (G.isInt(t) || G.isTime(t)) && t.bitWidth === 64 || G.isDuration(t) || G.isDate(t) && t.unit === Xe.MILLISECOND ? Et(Uint8Array, Oe.convertArray(n[r])) : G.isDecimal(t) ? Et(Uint8Array, pr.convertArray(n[r])) : G.isBinary(t) || G.isLargeBinary(t) || G.isFixedSizeBinary(t) ? zx(n[r]) : G.isBool(t) ? ic(n[r]) : G.isUtf8(t) || G.isLargeUtf8(t) ? Jh(n[r].join("")) : Et(Uint8Array, Et(t.ArrayType, n[r].map((i) => +i)));
  }
}
function zx(e7) {
  const t = e7.join(""), r = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2) r[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return r;
}
class X extends dt {
  compareSchemas(t, r) {
    return t === r || r instanceof t.constructor && this.compareManyFields(t.fields, r.fields);
  }
  compareManyFields(t, r) {
    return t === r || Array.isArray(t) && Array.isArray(r) && t.length === r.length && t.every((n, i) => this.compareFields(n, r[i]));
  }
  compareFields(t, r) {
    return t === r || r instanceof t.constructor && t.name === r.name && t.nullable === r.nullable && this.visit(t.type, r.type);
  }
}
function _e(e7, t) {
  return t instanceof e7.constructor;
}
function Zn(e7, t) {
  return e7 === t || _e(e7, t);
}
function Yr(e7, t) {
  return e7 === t || _e(e7, t) && e7.bitWidth === t.bitWidth && e7.isSigned === t.isSigned;
}
function _u(e7, t) {
  return e7 === t || _e(e7, t) && e7.precision === t.precision;
}
function Wx(e7, t) {
  return e7 === t || _e(e7, t) && e7.byteWidth === t.byteWidth;
}
function fd(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Yo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit && e7.timezone === t.timezone;
}
function Xo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit && e7.bitWidth === t.bitWidth;
}
function Vx(e7, t) {
  return e7 === t || _e(e7, t) && e7.children.length === t.children.length && vn.compareManyFields(e7.children, t.children);
}
function qx(e7, t) {
  return e7 === t || _e(e7, t) && e7.children.length === t.children.length && vn.compareManyFields(e7.children, t.children);
}
function hd(e7, t) {
  return e7 === t || _e(e7, t) && e7.mode === t.mode && e7.typeIds.every((r, n) => r === t.typeIds[n]) && vn.compareManyFields(e7.children, t.children);
}
function Gx(e7, t) {
  return e7 === t || _e(e7, t) && e7.id === t.id && e7.isOrdered === t.isOrdered && vn.visit(e7.indices, t.indices) && vn.visit(e7.dictionary, t.dictionary);
}
function dd(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Jo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Hx(e7, t) {
  return e7 === t || _e(e7, t) && e7.listSize === t.listSize && e7.children.length === t.children.length && vn.compareManyFields(e7.children, t.children);
}
function Kx(e7, t) {
  return e7 === t || _e(e7, t) && e7.keysSorted === t.keysSorted && e7.children.length === t.children.length && vn.compareManyFields(e7.children, t.children);
}
X.prototype.visitNull = Zn;
X.prototype.visitBool = Zn;
X.prototype.visitInt = Yr;
X.prototype.visitInt8 = Yr;
X.prototype.visitInt16 = Yr;
X.prototype.visitInt32 = Yr;
X.prototype.visitInt64 = Yr;
X.prototype.visitUint8 = Yr;
X.prototype.visitUint16 = Yr;
X.prototype.visitUint32 = Yr;
X.prototype.visitUint64 = Yr;
X.prototype.visitFloat = _u;
X.prototype.visitFloat16 = _u;
X.prototype.visitFloat32 = _u;
X.prototype.visitFloat64 = _u;
X.prototype.visitUtf8 = Zn;
X.prototype.visitLargeUtf8 = Zn;
X.prototype.visitBinary = Zn;
X.prototype.visitLargeBinary = Zn;
X.prototype.visitFixedSizeBinary = Wx;
X.prototype.visitDate = fd;
X.prototype.visitDateDay = fd;
X.prototype.visitDateMillisecond = fd;
X.prototype.visitTimestamp = Yo;
X.prototype.visitTimestampSecond = Yo;
X.prototype.visitTimestampMillisecond = Yo;
X.prototype.visitTimestampMicrosecond = Yo;
X.prototype.visitTimestampNanosecond = Yo;
X.prototype.visitTime = Xo;
X.prototype.visitTimeSecond = Xo;
X.prototype.visitTimeMillisecond = Xo;
X.prototype.visitTimeMicrosecond = Xo;
X.prototype.visitTimeNanosecond = Xo;
X.prototype.visitDecimal = Zn;
X.prototype.visitList = Vx;
X.prototype.visitStruct = qx;
X.prototype.visitUnion = hd;
X.prototype.visitDenseUnion = hd;
X.prototype.visitSparseUnion = hd;
X.prototype.visitDictionary = Gx;
X.prototype.visitInterval = dd;
X.prototype.visitIntervalDayTime = dd;
X.prototype.visitIntervalYearMonth = dd;
X.prototype.visitDuration = Jo;
X.prototype.visitDurationSecond = Jo;
X.prototype.visitDurationMillisecond = Jo;
X.prototype.visitDurationMicrosecond = Jo;
X.prototype.visitDurationNanosecond = Jo;
X.prototype.visitFixedSizeList = Hx;
X.prototype.visitMap = Kx;
const vn = new X();
function yf(e7, t) {
  return vn.compareSchemas(e7, t);
}
function gl(e7, t) {
  return Yx(e7, t.map((r) => r.data.concat()));
}
function Yx(e7, t) {
  const r = [...e7.fields], n = [], i = { numBatches: t.reduce((f, h) => Math.max(f, h.length), 0) };
  let a = 0, o = 0, s = -1;
  const c = t.length;
  let u, l = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < c; ) l[s] = u = t[s].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (l = Xx(r, o, l, t, i), o > 0 && (n[a++] = pt({ type: new ve(r), length: o, nullCount: 0, children: l.slice() })));
  }
  return [e7 = e7.assign(r), n.map((f) => new Ae(e7, f))];
}
function Xx(e7, t, r, n, i) {
  var a;
  const o = (t + 63 & -64) >> 3;
  for (let s = -1, c = n.length; ++s < c; ) {
    const u = r[s], l = u == null ? void 0 : u.length;
    if (l >= t) l === t ? r[s] = u : (r[s] = u.slice(0, t), i.numBatches = Math.max(i.numBatches, n[s].unshift(u.slice(t, l - t))));
    else {
      const f = e7[s];
      e7[s] = f.clone({ nullable: true }), r[s] = (a = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(t)) !== null && a !== void 0 ? a : pt({ type: f.type, length: t, nullCount: t, nullBitmap: new Uint8Array(o) });
    }
  }
  return r;
}
var r_;
class me {
  constructor(...t) {
    var r, n;
    if (t.length === 0) return this.batches = [], this.schema = new At([]), this._offsets = [0], this;
    let i, a;
    t[0] instanceof At && (i = t.shift()), t.at(-1) instanceof Uint32Array && (a = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof Ae) return [c];
        if (c instanceof me) return c.batches;
        if (c instanceof Tt) {
          if (c.type instanceof ve) return [new Ae(new At(c.type.children), c)];
        } else {
          if (Array.isArray(c)) return c.flatMap((u) => o(u));
          if (typeof c[Symbol.iterator] == "function") return [...c].flatMap((u) => o(u));
          if (typeof c == "object") {
            const u = Object.keys(c), l = u.map((d) => new xt([c[d]])), f = i ?? new At(u.map((d, y) => new Ft(String(d), l[y].type, l[y].nullable))), [, h] = gl(f, l);
            return h.length === 0 ? [new Ae(c)] : h;
          }
        }
      }
      return [];
    }, s = t.flatMap((c) => o(c));
    if (i = (n = i ?? ((r = s[0]) === null || r === void 0 ? void 0 : r.schema)) !== null && n !== void 0 ? n : new At([]), !(i instanceof At)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of s) {
      if (!(c instanceof Ae)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!yf(i, c.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = s, this._offsets = a ?? G0(this.data);
  }
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.reduce((t, r) => t + r.length, 0);
  }
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = q0(this.data)), this._nullCount;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(id(t, this.numRows));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  [Symbol.iterator]() {
    return this.batches.length > 0 ? cd.visit(new xt(this.data)) : new Array(0)[Symbol.iterator]();
  }
  toArray() {
    return [...this];
  }
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  concat(...t) {
    const r = this.schema, n = this.data.concat(t.flatMap(({ data: i }) => i));
    return new me(r, n.map((i) => new Ae(r, i)));
  }
  slice(t, r) {
    const n = this.schema;
    [t, r] = W0({ length: this.numRows }, t, r);
    const i = H0(this.data, this._offsets, t, r);
    return new me(n, i.map((a) => new Ae(n, a)));
  }
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((r) => r.name === t));
  }
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const r = this.data.map((n) => n.children[t]);
      if (r.length === 0) {
        const { type: n } = this.schema.fields[t], i = pt({ type: n, length: 0, nullCount: 0 });
        r.push(i._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new xt(r);
    }
    return null;
  }
  setChild(t, r) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((i) => i.name === t), r);
  }
  setChildAt(t, r) {
    let n = this.schema, i = [...this.batches];
    if (t > -1 && t < this.numCols) {
      r || (r = new xt([pt({ type: new yn(), length: this.numRows })]));
      const a = n.fields.slice(), o = a[t].clone({ type: r.type }), s = this.schema.fields.map((c, u) => this.getChildAt(u));
      [a[t], s[t]] = [o, r], [n, i] = gl(n, s);
    }
    return new me(n, i);
  }
  select(t) {
    const r = this.schema.fields.reduce((n, i, a) => n.set(i.name, a), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((n) => r.get(n)).filter((n) => n > -1));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = this.batches.map((i) => i.selectAt(t));
    return new me(r, n);
  }
  assign(t) {
    const r = this.schema.fields, [n, i] = t.schema.fields.reduce((s, c, u) => {
      const [l, f] = s, h = r.findIndex((d) => d.name === c.name);
      return ~h ? f[h] = u : l.push(u), s;
    }, [[], []]), a = this.schema.assign(t.schema), o = [...r.map((s, c) => [c, i[c]]).map(([s, c]) => c === void 0 ? this.getChildAt(s) : t.getChildAt(c)), ...n.map((s) => t.getChildAt(s))].filter(Boolean);
    return new me(...gl(a, o));
  }
}
r_ = Symbol.toStringTag;
me[r_] = ((e7) => (e7.schema = null, e7.batches = [], e7._offsets = new Uint32Array([0]), e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, e7.isValid = ac(sd), e7.get = ac(Ee.getVisitFn(x.Struct)), e7.set = K0(Je.getVisitFn(x.Struct)), e7.indexOf = Y0(oc.getVisitFn(x.Struct)), "Table"))(me.prototype);
var n_;
let Ae = class Ha {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof At)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([, this.data = pt({ nullCount: 0, type: new ve(this.schema.fields), children: this.schema.fields.map((r) => pt({ type: r.type, nullCount: 0 })) })] = t, !(this.data instanceof Tt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = ay(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [r] = t, { fields: n, children: i, length: a } = Object.keys(r).reduce((c, u, l) => (c.children[l] = r[u], c.length = Math.max(c.length, r[u].length), c.fields[l] = Ft.new({ name: u, type: r[u].type, nullable: true }), c), { length: 0, fields: new Array(), children: new Array() }), o = new At(n), s = pt({ type: new ve(n), length: a, children: i, nullCount: 0 });
        [this.schema, this.data] = ay(o, s.children, a);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = i_(this.schema.fields, this.data.children));
  }
  get numCols() {
    return this.schema.fields.length;
  }
  get numRows() {
    return this.data.length;
  }
  get nullCount() {
    return this.data.nullCount;
  }
  isValid(t) {
    return this.data.getValid(t);
  }
  get(t) {
    return Ee.visit(this.data, t);
  }
  at(t) {
    return this.get(id(t, this.numRows));
  }
  set(t, r) {
    return Je.visit(this.data, t, r);
  }
  indexOf(t, r) {
    return oc.visit(this.data, t, r);
  }
  [Symbol.iterator]() {
    return cd.visit(new xt([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...t) {
    return new me(this.schema, [this, ...t]);
  }
  slice(t, r) {
    const [n] = new xt([this.data]).slice(t, r).data;
    return new Ha(this.schema, n);
  }
  getChild(t) {
    var r;
    return this.getChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex((n) => n.name === t));
  }
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new xt([this.data.children[t]]) : null;
  }
  setChild(t, r) {
    var n;
    return this.setChildAt((n = this.schema.fields) === null || n === void 0 ? void 0 : n.findIndex((i) => i.name === t), r);
  }
  setChildAt(t, r) {
    let n = this.schema, i = this.data;
    if (t > -1 && t < this.numCols) {
      r || (r = new xt([pt({ type: new yn(), length: this.numRows })]));
      const a = n.fields.slice(), o = i.children.slice(), s = a[t].clone({ type: r.type });
      [a[t], o[t]] = [s, r.data[0]], n = new At(a, new Map(this.schema.metadata)), i = pt({ type: new ve(a), children: o });
    }
    return new Ha(n, i);
  }
  select(t) {
    const r = this.schema.select(t), n = new ve(r.fields), i = [];
    for (const a of t) {
      const o = this.schema.fields.findIndex((s) => s.name === a);
      ~o && (i[o] = this.data.children[o]);
    }
    return new Ha(r, pt({ type: n, length: this.numRows, children: i }));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = t.map((a) => this.data.children[a]).filter(Boolean), i = pt({ type: new ve(r.fields), length: this.numRows, children: n });
    return new Ha(r, i);
  }
};
n_ = Symbol.toStringTag;
Ae[n_] = ((e7) => (e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, "RecordBatch"))(Ae.prototype);
function ay(e7, t, r = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...e7.fields], a = [...t], o = (r + 63 & -64) >> 3;
  for (const [s, c] of e7.fields.entries()) {
    const u = t[s];
    (!u || u.length !== r) && (i[s] = c.clone({ nullable: true }), a[s] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(r)) !== null && n !== void 0 ? n : pt({ type: c.type, length: r, nullCount: r, nullBitmap: new Uint8Array(o) }));
  }
  return [e7.assign(i), pt({ type: new ve(i), length: r, children: a })];
}
function i_(e7, t, r = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = e7 == null ? void 0 : e7.length) !== null && n !== void 0 ? n : 0) > 0 && (e7 == null ? void 0 : e7.length) === (t == null ? void 0 : t.length)) for (let a = -1, o = e7.length; ++a < o; ) {
    const { type: s } = e7[a], c = t[a];
    for (const u of [c, ...((i = c == null ? void 0 : c.dictionary) === null || i === void 0 ? void 0 : i.data) || []]) i_(s.children, u == null ? void 0 : u.children, r);
    if (G.isDictionary(s)) {
      const { id: u } = s;
      if (!r.has(u)) (c == null ? void 0 : c.dictionary) && r.set(u, c.dictionary);
      else if (r.get(u) !== c.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
  }
  return r;
}
class pd extends Ae {
  constructor(t) {
    const r = t.fields.map((i) => pt({ type: i.type })), n = pt({ type: new ve(t.fields), nullCount: 0, children: r });
    super(t, n);
  }
}
let en = class hr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMessage(t, r) {
    return (r || new hr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, r) {
    return t.setPosition(t.position() + Pt), (r || new hr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Kt.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : _t.NONE;
  }
  header(t) {
    const r = this.bb.__offset(this.bb_pos, 8);
    return r ? this.bb.__union(t, this.bb_pos + r) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (r || new ne()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, r) {
    t.addFieldInt16(0, r, Kt.V1);
  }
  static addHeaderType(t, r) {
    t.addFieldInt8(1, r, _t.NONE);
  }
  static addHeader(t, r) {
    t.addFieldOffset(2, r, 0);
  }
  static addBodyLength(t, r) {
    t.addFieldInt64(3, r, BigInt("0"));
  }
  static addCustomMetadata(t, r) {
    t.addFieldOffset(4, r, 0);
  }
  static createCustomMetadataVector(t, r) {
    t.startVector(4, r.length, 4);
    for (let n = r.length - 1; n >= 0; n--) t.addOffset(r[n]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, r) {
    t.startVector(4, r, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, r) {
    t.finish(r);
  }
  static finishSizePrefixedMessageBuffer(t, r) {
    t.finish(r, void 0, true);
  }
  static createMessage(t, r, n, i, a, o) {
    return hr.startMessage(t), hr.addVersion(t, r), hr.addHeaderType(t, n), hr.addHeader(t, i), hr.addBodyLength(t, a), hr.addCustomMetadata(t, o), hr.endMessage(t);
  }
};
class Jx extends dt {
  visit(t, r) {
    return t == null || r == null ? void 0 : super.visit(t, r);
  }
  visitNull(t, r) {
    return Xp.startNull(r), Xp.endNull(r);
  }
  visitInt(t, r) {
    return Be.startInt(r), Be.addBitWidth(r, t.bitWidth), Be.addIsSigned(r, t.isSigned), Be.endInt(r);
  }
  visitFloat(t, r) {
    return mr.startFloatingPoint(r), mr.addPrecision(r, t.precision), mr.endFloatingPoint(r);
  }
  visitBinary(t, r) {
    return qp.startBinary(r), qp.endBinary(r);
  }
  visitLargeBinary(t, r) {
    return Hp.startLargeBinary(r), Hp.endLargeBinary(r);
  }
  visitBool(t, r) {
    return Gp.startBool(r), Gp.endBool(r);
  }
  visitUtf8(t, r) {
    return Jp.startUtf8(r), Jp.endUtf8(r);
  }
  visitLargeUtf8(t, r) {
    return Kp.startLargeUtf8(r), Kp.endLargeUtf8(r);
  }
  visitDecimal(t, r) {
    return pi.startDecimal(r), pi.addScale(r, t.scale), pi.addPrecision(r, t.precision), pi.addBitWidth(r, t.bitWidth), pi.endDecimal(r);
  }
  visitDate(t, r) {
    return As.startDate(r), As.addUnit(r, t.unit), As.endDate(r);
  }
  visitTime(t, r) {
    return qe.startTime(r), qe.addUnit(r, t.unit), qe.addBitWidth(r, t.bitWidth), qe.endTime(r);
  }
  visitTimestamp(t, r) {
    const n = t.timezone && r.createString(t.timezone) || void 0;
    return Ge.startTimestamp(r), Ge.addUnit(r, t.unit), n !== void 0 && Ge.addTimezone(r, n), Ge.endTimestamp(r);
  }
  visitInterval(t, r) {
    return vr.startInterval(r), vr.addUnit(r, t.unit), vr.endInterval(r);
  }
  visitDuration(t, r) {
    return Ps.startDuration(r), Ps.addUnit(r, t.unit), Ps.endDuration(r);
  }
  visitList(t, r) {
    return Yp.startList(r), Yp.endList(r);
  }
  visitStruct(t, r) {
    return Cn.startStruct_(r), Cn.endStruct_(r);
  }
  visitUnion(t, r) {
    xe.startTypeIdsVector(r, t.typeIds.length);
    const n = xe.createTypeIdsVector(r, t.typeIds);
    return xe.startUnion(r), xe.addMode(r, t.mode), xe.addTypeIds(r, n), xe.endUnion(r);
  }
  visitDictionary(t, r) {
    const n = this.visit(t.indices, r);
    return Br.startDictionaryEncoding(r), Br.addId(r, BigInt(t.id)), Br.addIsOrdered(r, t.isOrdered), n !== void 0 && Br.addIndexType(r, n), Br.endDictionaryEncoding(r);
  }
  visitFixedSizeBinary(t, r) {
    return Ts.startFixedSizeBinary(r), Ts.addByteWidth(r, t.byteWidth), Ts.endFixedSizeBinary(r);
  }
  visitFixedSizeList(t, r) {
    return Is.startFixedSizeList(r), Is.addListSize(r, t.listSize), Is.endFixedSizeList(r);
  }
  visitMap(t, r) {
    return Es.startMap(r), Es.addKeysSorted(r, t.keysSorted), Es.endMap(r);
  }
}
const bl = new Jx();
function Qx(e7, t = /* @__PURE__ */ new Map()) {
  return new At(tA(e7, t), Ds(e7.metadata), t);
}
function a_(e7) {
  return new ke(e7.count, o_(e7.columns), s_(e7.columns));
}
function Zx(e7) {
  return new Tr(a_(e7.data), e7.id, e7.isDelta);
}
function tA(e7, t) {
  return (e7.fields || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function oy(e7, t) {
  return (e7.children || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function o_(e7) {
  return (e7 || []).reduce((t, r) => [...t, new gn(r.count, eA(r.VALIDITY)), ...o_(r.children)], []);
}
function s_(e7, t = []) {
  for (let r = -1, n = (e7 || []).length; ++r < n; ) {
    const i = e7[r];
    i.VALIDITY && t.push(new br(t.length, i.VALIDITY.length)), i.TYPE_ID && t.push(new br(t.length, i.TYPE_ID.length)), i.OFFSET && t.push(new br(t.length, i.OFFSET.length)), i.DATA && t.push(new br(t.length, i.DATA.length)), t = s_(i.children, t);
  }
  return t;
}
function eA(e7) {
  return (e7 || []).reduce((t, r) => t + +(r === 0), 0);
}
function rA(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(a = e7.dictionary) ? (o = cy(e7, oy(e7, t)), i = new Ft(e7.name, o, e7.nullable, Ds(e7.metadata))) : t.has(r = a.id) ? (n = (n = a.indexType) ? sy(n) : new oo(), s = new Bi(t.get(r), n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Ds(e7.metadata))) : (n = (n = a.indexType) ? sy(n) : new oo(), t.set(r, o = cy(e7, oy(e7, t))), s = new Bi(o, n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Ds(e7.metadata))), i || null;
}
function Ds(e7 = []) {
  return new Map(e7.map(({ key: t, value: r }) => [t, r]));
}
function sy(e7) {
  return new Gn(e7.isSigned, e7.bitWidth);
}
function cy(e7, t) {
  const r = e7.type.name;
  switch (r) {
    case "NONE":
      return new yn();
    case "null":
      return new yn();
    case "binary":
      return new Us();
    case "largebinary":
      return new zs();
    case "utf8":
      return new Ws();
    case "largeutf8":
      return new Vs();
    case "bool":
      return new qs();
    case "list":
      return new Qs((t || [])[0]);
    case "struct":
      return new ve(t || []);
    case "struct_":
      return new ve(t || []);
  }
  switch (r) {
    case "int": {
      const n = e7.type;
      return new Gn(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = e7.type;
      return new Fs(pe[n.precision]);
    }
    case "decimal": {
      const n = e7.type;
      return new Gs(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = e7.type;
      return new Hs(Xe[n.unit]);
    }
    case "time": {
      const n = e7.type;
      return new Ks(Q[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = e7.type;
      return new Ys(Q[n.unit], n.timezone);
    }
    case "interval": {
      const n = e7.type;
      return new Xs(Pr[n.unit]);
    }
    case "duration": {
      const n = e7.type;
      return new Js(Q[n.unit]);
    }
    case "union": {
      const n = e7.type, [i, ...a] = (n.mode + "").toLowerCase(), o = i.toUpperCase() + a.join("");
      return new Zs(ye[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = e7.type;
      return new tc(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = e7.type;
      return new ec(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = e7.type;
      return new rc((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${r}"`);
}
var nA = Ob, iA = Ci;
class ge {
  static fromJSON(t, r) {
    const n = new ge(0, Kt.V5, r);
    return n._createHeader = aA(t, r), n;
  }
  static decode(t) {
    t = new iA(vt(t));
    const r = en.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), a = r.headerType(), o = new ge(n, i, a);
    return o._createHeader = oA(r, a), o;
  }
  static encode(t) {
    const r = new nA();
    let n = -1;
    return t.isSchema() ? n = At.encode(r, t.header()) : t.isRecordBatch() ? n = ke.encode(r, t.header()) : t.isDictionaryBatch() && (n = Tr.encode(r, t.header())), en.startMessage(r), en.addVersion(r, Kt.V5), en.addHeader(r, n), en.addHeaderType(r, t.headerType), en.addBodyLength(r, BigInt(t.bodyLength)), en.finishMessageBuffer(r, en.endMessage(r)), r.asUint8Array();
  }
  static from(t, r = 0) {
    if (t instanceof At) return new ge(0, Kt.V5, _t.Schema, t);
    if (t instanceof ke) return new ge(r, Kt.V5, _t.RecordBatch, t);
    if (t instanceof Tr) return new ge(r, Kt.V5, _t.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === _t.Schema;
  }
  isRecordBatch() {
    return this.headerType === _t.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === _t.DictionaryBatch;
  }
  constructor(t, r, n, i) {
    this._version = r, this._headerType = n, this.body = new Uint8Array(0), i && (this._createHeader = () => i), this._bodyLength = Dt(t);
  }
}
class ke {
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
  constructor(t, r, n) {
    this._nodes = r, this._buffers = n, this._length = Dt(t);
  }
}
class Tr {
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
  constructor(t, r, n = false) {
    this._data = t, this._isDelta = n, this._id = Dt(r);
  }
}
class br {
  constructor(t, r) {
    this.offset = Dt(t), this.length = Dt(r);
  }
}
class gn {
  constructor(t, r) {
    this.length = Dt(t), this.nullCount = Dt(r);
  }
}
function aA(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.fromJSON(e7);
      case _t.RecordBatch:
        return ke.fromJSON(e7);
      case _t.DictionaryBatch:
        return Tr.fromJSON(e7);
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
function oA(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.decode(e7.header(new dr()), /* @__PURE__ */ new Map(), e7.version());
      case _t.RecordBatch:
        return ke.decode(e7.header(new Dr()), e7.version());
      case _t.DictionaryBatch:
        return Tr.decode(e7.header(new hi()), e7.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
Ft.encode = vA;
Ft.decode = yA;
Ft.fromJSON = rA;
At.encode = mA;
At.decode = sA;
At.fromJSON = Qx;
ke.encode = gA;
ke.decode = cA;
ke.fromJSON = a_;
Tr.encode = bA;
Tr.decode = uA;
Tr.fromJSON = Zx;
gn.encode = _A;
gn.decode = fA;
br.encode = wA;
br.decode = lA;
function sA(e7, t = /* @__PURE__ */ new Map(), r = Kt.V5) {
  const n = pA(e7, t);
  return new At(n, Ns(e7), t, r);
}
function cA(e7, t = Kt.V5) {
  if (e7.compression() !== null) throw new Error("Record batch compression not implemented");
  return new ke(e7.length(), hA(e7), dA(e7, t));
}
function uA(e7, t = Kt.V5) {
  return new Tr(ke.decode(e7.data(), t), e7.id(), e7.isDelta());
}
function lA(e7) {
  return new br(e7.offset(), e7.length());
}
function fA(e7) {
  return new gn(e7.length(), e7.nullCount());
}
function hA(e7) {
  const t = [];
  for (let r, n = -1, i = -1, a = e7.nodesLength(); ++n < a; ) (r = e7.nodes(n)) && (t[++i] = gn.decode(r));
  return t;
}
function dA(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.buffersLength(); ++i < o; ) (n = e7.buffers(i)) && (t < Kt.V4 && (n.bb_pos += 8 * (i + 1)), r[++a] = br.decode(n));
  return r;
}
function pA(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.fieldsLength(); ++i < o; ) (n = e7.fields(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function uy(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.childrenLength(); ++i < o; ) (n = e7.children(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function yA(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(s = e7.dictionary()) ? (i = fy(e7, uy(e7, t)), n = new Ft(e7.name(), i, e7.nullable(), Ns(e7))) : t.has(r = Dt(s.id())) ? (a = (a = s.indexType()) ? ly(a) : new oo(), o = new Bi(t.get(r), a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), Ns(e7))) : (a = (a = s.indexType()) ? ly(a) : new oo(), t.set(r, i = fy(e7, uy(e7, t))), o = new Bi(i, a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), Ns(e7))), n || null;
}
function Ns(e7) {
  const t = /* @__PURE__ */ new Map();
  if (e7) for (let r, n, i = -1, a = Math.trunc(e7.customMetadataLength()); ++i < a; ) (r = e7.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function ly(e7) {
  return new Gn(e7.isSigned(), e7.bitWidth());
}
function fy(e7, t) {
  const r = e7.typeType();
  switch (r) {
    case Ct.NONE:
      return new yn();
    case Ct.Null:
      return new yn();
    case Ct.Binary:
      return new Us();
    case Ct.LargeBinary:
      return new zs();
    case Ct.Utf8:
      return new Ws();
    case Ct.LargeUtf8:
      return new Vs();
    case Ct.Bool:
      return new qs();
    case Ct.List:
      return new Qs((t || [])[0]);
    case Ct.Struct_:
      return new ve(t || []);
  }
  switch (r) {
    case Ct.Int: {
      const n = e7.type(new Be());
      return new Gn(n.isSigned(), n.bitWidth());
    }
    case Ct.FloatingPoint: {
      const n = e7.type(new mr());
      return new Fs(n.precision());
    }
    case Ct.Decimal: {
      const n = e7.type(new pi());
      return new Gs(n.scale(), n.precision(), n.bitWidth());
    }
    case Ct.Date: {
      const n = e7.type(new As());
      return new Hs(n.unit());
    }
    case Ct.Time: {
      const n = e7.type(new qe());
      return new Ks(n.unit(), n.bitWidth());
    }
    case Ct.Timestamp: {
      const n = e7.type(new Ge());
      return new Ys(n.unit(), n.timezone());
    }
    case Ct.Interval: {
      const n = e7.type(new vr());
      return new Xs(n.unit());
    }
    case Ct.Duration: {
      const n = e7.type(new Ps());
      return new Js(n.unit());
    }
    case Ct.Union: {
      const n = e7.type(new xe());
      return new Zs(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Ct.FixedSizeBinary: {
      const n = e7.type(new Ts());
      return new tc(n.byteWidth());
    }
    case Ct.FixedSizeList: {
      const n = e7.type(new Is());
      return new ec(n.listSize(), (t || [])[0]);
    }
    case Ct.Map: {
      const n = e7.type(new Es());
      return new rc((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Ct[r]}" (${r})`);
}
function mA(e7, t) {
  const r = t.fields.map((a) => Ft.encode(e7, a));
  dr.startFieldsVector(e7, r.length);
  const n = dr.createFieldsVector(e7, r), i = t.metadata && t.metadata.size > 0 ? dr.createCustomMetadataVector(e7, [...t.metadata].map(([a, o]) => {
    const s = e7.createString(`${a}`), c = e7.createString(`${o}`);
    return ne.startKeyValue(e7), ne.addKey(e7, s), ne.addValue(e7, c), ne.endKeyValue(e7);
  })) : -1;
  return dr.startSchema(e7), dr.addFields(e7, n), dr.addEndianness(e7, SA ? ji.Little : ji.Big), i !== -1 && dr.addCustomMetadata(e7, i), dr.endSchema(e7);
}
function vA(e7, t) {
  let r = -1, n = -1, i = -1;
  const a = t.type;
  let o = t.typeId;
  G.isDictionary(a) ? (o = a.dictionary.typeId, i = bl.visit(a, e7), n = bl.visit(a.dictionary, e7)) : n = bl.visit(a, e7);
  const s = (a.children || []).map((l) => Ft.encode(e7, l)), c = ze.createChildrenVector(e7, s), u = t.metadata && t.metadata.size > 0 ? ze.createCustomMetadataVector(e7, [...t.metadata].map(([l, f]) => {
    const h = e7.createString(`${l}`), d = e7.createString(`${f}`);
    return ne.startKeyValue(e7), ne.addKey(e7, h), ne.addValue(e7, d), ne.endKeyValue(e7);
  })) : -1;
  return t.name && (r = e7.createString(t.name)), ze.startField(e7), ze.addType(e7, n), ze.addTypeType(e7, o), ze.addChildren(e7, c), ze.addNullable(e7, !!t.nullable), r !== -1 && ze.addName(e7, r), i !== -1 && ze.addDictionary(e7, i), u !== -1 && ze.addCustomMetadata(e7, u), ze.endField(e7);
}
function gA(e7, t) {
  const r = t.nodes || [], n = t.buffers || [];
  Dr.startNodesVector(e7, r.length);
  for (const o of r.slice().reverse()) gn.encode(e7, o);
  const i = e7.endVector();
  Dr.startBuffersVector(e7, n.length);
  for (const o of n.slice().reverse()) br.encode(e7, o);
  const a = e7.endVector();
  return Dr.startRecordBatch(e7), Dr.addLength(e7, BigInt(t.length)), Dr.addNodes(e7, i), Dr.addBuffers(e7, a), Dr.endRecordBatch(e7);
}
function bA(e7, t) {
  const r = ke.encode(e7, t.data);
  return hi.startDictionaryBatch(e7), hi.addId(e7, BigInt(t.id)), hi.addIsDelta(e7, t.isDelta), hi.addData(e7, r), hi.endDictionaryBatch(e7);
}
function _A(e7, t) {
  return Pb.createFieldNode(e7, BigInt(t.length), BigInt(t.nullCount));
}
function wA(e7, t) {
  return Ab.createBuffer(e7, BigInt(t.offset), BigInt(t.length));
}
const SA = (() => {
  const e7 = new ArrayBuffer(2);
  return new DataView(e7).setInt16(0, 256, true), new Int16Array(e7)[0] === 256;
})(), yd = (e7) => `Expected ${_t[e7]} Message in stream, but was null or length 0.`, md = (e7) => `Header pointer of flatbuffer-encoded ${_t[e7]} Message is null or length 0.`, c_ = (e7, t) => `Expected to read ${e7} metadata bytes, but only read ${t}.`, u_ = (e7, t) => `Expected to read ${e7} bytes for message body, but only read ${t}.`;
class l_ {
  constructor(t) {
    this.source = t instanceof cc ? t : new cc(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? zt : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let r;
    if ((r = this.next()).done) return null;
    if (t != null && r.value.headerType !== t) throw new Error(yd(t));
    return r.value;
  }
  readMessageBody(t) {
    if (t <= 0) return new Uint8Array(0);
    const r = vt(this.source.read(t));
    if (r.byteLength < t) throw new Error(u_(t, r.byteLength));
    return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
  }
  readSchema(t = false) {
    const r = _t.Schema, n = this.readMessage(r), i = n == null ? void 0 : n.header();
    if (t && !i) throw new Error(md(r));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(wu), r = t && new Ci(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const r = this.source.read(t);
    if (!r) return zt;
    if (r.byteLength < t) throw new Error(c_(t, r.byteLength));
    return { done: false, value: ge.decode(r) };
  }
}
class OA {
  constructor(t, r) {
    this.source = t instanceof Ri ? t : vb(t) ? new uc(t, r) : new Ri(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return ot(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? zt : t;
    });
  }
  throw(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return ot(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.next()).done) return null;
      if (t != null && r.value.headerType !== t) throw new Error(yd(t));
      return r.value;
    });
  }
  readMessageBody(t) {
    return ot(this, void 0, void 0, function* () {
      if (t <= 0) return new Uint8Array(0);
      const r = vt(yield this.source.read(t));
      if (r.byteLength < t) throw new Error(u_(t, r.byteLength));
      return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
    });
  }
  readSchema() {
    return ot(this, arguments, void 0, function* (t = false) {
      const r = _t.Schema, n = yield this.readMessage(r), i = n == null ? void 0 : n.header();
      if (t && !i) throw new Error(md(r));
      return i;
    });
  }
  readMetadataLength() {
    return ot(this, void 0, void 0, function* () {
      const t = yield this.source.read(wu), r = t && new Ci(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return ot(this, void 0, void 0, function* () {
      const r = yield this.source.read(t);
      if (!r) return zt;
      if (r.byteLength < t) throw new Error(c_(t, r.byteLength));
      return { done: false, value: ge.decode(r) };
    });
  }
}
class xA extends l_ {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = false, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof ny ? t : new ny(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema) return this._schema = true, { done: false, value: ge.fromJSON(t.schema, _t.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const r = t.dictionaries[this._dictionaryIndex++];
      return this._body = r.data.columns, { done: false, value: ge.fromJSON(r, _t.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const r = t.batches[this._batchIndex++];
      return this._body = r.columns, { done: false, value: ge.fromJSON(r, _t.RecordBatch) };
    }
    return this._body = [], zt;
  }
  readMessageBody(t) {
    return r(this._body);
    function r(n) {
      return (n || []).reduce((i, a) => [...i, ...a.VALIDITY && [a.VALIDITY] || [], ...a.TYPE_ID && [a.TYPE_ID] || [], ...a.OFFSET && [a.OFFSET] || [], ...a.DATA && [a.DATA] || [], ...r(a.children)], []);
    }
  }
  readMessage(t) {
    let r;
    if ((r = this.next()).done) return null;
    if (t != null && r.value.headerType !== t) throw new Error(yd(t));
    return r.value;
  }
  readSchema() {
    const t = _t.Schema, r = this.readMessage(t), n = r == null ? void 0 : r.header();
    if (!r || !n) throw new Error(md(t));
    return n;
  }
}
const wu = 4, mf = "ARROW1", co = new Uint8Array(mf.length);
for (let e7 = 0; e7 < mf.length; e7 += 1) co[e7] = mf.codePointAt(e7);
function vd(e7, t = 0) {
  for (let r = -1, n = co.length; ++r < n; ) if (co[r] !== e7[t + r]) return false;
  return true;
}
const Qo = co.length, f_ = Qo + wu, AA = Qo * 2 + wu;
class Ke extends ud {
  constructor(t) {
    super(), this._impl = t;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(t) {
    return this._impl.throw(t);
  }
  return(t) {
    return this._impl.return(t);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(t) {
    return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(t) {
    const r = this._impl.open(t);
    return qn(r) ? r.then(() => this) : this;
  }
  readRecordBatch(t) {
    return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return Ve.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return Ve.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
  }
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  static from(t) {
    return t instanceof Ke ? t : of(t) ? EA(t) : vb(t) ? DA(t) : qn(t) ? ot(this, void 0, void 0, function* () {
      return yield Ke.from(yield t);
    }) : gb(t) || Qh(t) || bb(t) || fa(t) ? MA(new Ri(t)) : $A(new cc(t));
  }
  static readAll(t) {
    return t instanceof Ke ? t.isSync() ? hy(t) : dy(t) : of(t) || ArrayBuffer.isView(t) || Ko(t) || mb(t) ? hy(t) : dy(t);
  }
}
class lc extends Ke {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return gr(this, arguments, function* () {
      yield yt(yield* xs(Fn(this[Symbol.iterator]())));
    });
  }
}
class fc extends Ke {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return ot(this, void 0, void 0, function* () {
      var t, r, n, i;
      const a = new Array();
      try {
        for (var o = true, s = Fn(this), c; c = yield s.next(), t = c.done, !t; o = true) {
          i = c.value, o = false;
          const u = i;
          a.push(u);
        }
      } catch (u) {
        r = { error: u };
      } finally {
        try {
          !o && !t && (n = s.return) && (yield n.call(s));
        } finally {
          if (r) throw r.error;
        }
      }
      return a;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class h_ extends lc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class PA extends fc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class d_ {
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  constructor(t = /* @__PURE__ */ new Map()) {
    this.closed = false, this.autoDestroy = true, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t;
  }
  isSync() {
    return false;
  }
  isAsync() {
    return false;
  }
  isFile() {
    return false;
  }
  isStream() {
    return false;
  }
  reset(t) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = /* @__PURE__ */ new Map(), this;
  }
  _loadRecordBatch(t, r) {
    const n = this._loadVectors(t, r, this.schema.fields), i = pt({ type: new ve(this.schema.fields), length: t.length, children: n });
    return new Ae(this.schema, i);
  }
  _loadDictionaryBatch(t, r) {
    const { id: n, isDelta: i } = t, { dictionaries: a, schema: o } = this, s = a.get(n), c = o.dictionaries.get(n), u = this._loadVectors(t.data, r, [c]);
    return (s && i ? s.concat(new xt(u)) : new xt(u)).memoize();
  }
  _loadVectors(t, r, n) {
    return new e_(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class hc extends d_ {
  constructor(t, r) {
    super(r), this._reader = of(t) ? new xA(this._handle = t) : new l_(this._handle = t);
  }
  isSync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    !this.closed && (this.closed = true) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
  }
  open(t) {
    return this.closed || (this.autoDestroy = y_(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = true) ? this.reset()._reader.throw(t) : zt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = true) ? this.reset()._reader.return(t) : zt;
  }
  next() {
    if (this.closed) return zt;
    let t;
    const { _reader: r } = this;
    for (; t = this._readNextMessageAndValidate(); ) if (t.isSchema()) this.reset(t.header());
    else if (t.isRecordBatch()) {
      this._recordBatchIndex++;
      const n = t.header(), i = r.readMessageBody(t.bodyLength);
      return { done: false, value: this._loadRecordBatch(n, i) };
    } else if (t.isDictionaryBatch()) {
      this._dictionaryIndex++;
      const n = t.header(), i = r.readMessageBody(t.bodyLength), a = this._loadDictionaryBatch(n, i);
      this.dictionaries.set(n.id, a);
    }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new pd(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class dc extends d_ {
  constructor(t, r) {
    super(r), this._reader = new OA(this._handle = t);
  }
  isAsync() {
    return true;
  }
  isStream() {
    return true;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return ot(this, void 0, void 0, function* () {
      !this.closed && (this.closed = true) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return ot(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = y_(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return ot(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.throw(t) : zt;
    });
  }
  return(t) {
    return ot(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.return(t) : zt;
    });
  }
  next() {
    return ot(this, void 0, void 0, function* () {
      if (this.closed) return zt;
      let t;
      const { _reader: r } = this;
      for (; t = yield this._readNextMessageAndValidate(); ) if (t.isSchema()) yield this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const n = t.header(), i = yield r.readMessageBody(t.bodyLength);
        return { done: false, value: this._loadRecordBatch(n, i) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const n = t.header(), i = yield r.readMessageBody(t.bodyLength), a = this._loadDictionaryBatch(n, i);
        this.dictionaries.set(n.id, a);
      }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new pd(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class p_ extends hc {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, r) {
    super(t instanceof iy ? t : new iy(t), r);
  }
  isSync() {
    return true;
  }
  isFile() {
    return true;
  }
  open(t) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const r of this._footer.dictionaryBatches()) r && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var r;
    if (this.closed) return null;
    this._footer || this.open();
    const n = (r = this._footer) === null || r === void 0 ? void 0 : r.getRecordBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const i = this._reader.readMessage(_t.RecordBatch);
      if (i == null ? void 0 : i.isRecordBatch()) {
        const a = i.header(), o = this._reader.readMessageBody(i.bodyLength);
        return this._loadRecordBatch(a, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var r;
    const n = (r = this._footer) === null || r === void 0 ? void 0 : r.getDictionaryBatch(t);
    if (n && this._handle.seek(n.offset)) {
      const i = this._reader.readMessage(_t.DictionaryBatch);
      if (i == null ? void 0 : i.isDictionaryBatch()) {
        const a = i.header(), o = this._reader.readMessageBody(i.bodyLength), s = this._loadDictionaryBatch(a, o);
        this.dictionaries.set(a.id, s);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, r = t.size - f_, n = t.readInt32(r), i = t.readAt(r - n, n);
    return so.decode(i);
  }
  _readNextMessageAndValidate(t) {
    var r;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const n = (r = this._footer) === null || r === void 0 ? void 0 : r.getRecordBatch(this._recordBatchIndex);
      if (n && this._handle.seek(n.offset)) return this._reader.readMessage(t);
    }
    return null;
  }
}
class TA extends dc {
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  constructor(t, ...r) {
    const n = typeof r[0] != "number" ? r.shift() : void 0, i = r[0] instanceof Map ? r.shift() : void 0;
    super(t instanceof uc ? t : new uc(t, n), i);
  }
  isFile() {
    return true;
  }
  isAsync() {
    return true;
  }
  open(t) {
    const r = Object.create(null, { open: { get: () => super.open } });
    return ot(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches()) n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield r.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return ot(this, void 0, void 0, function* () {
      var r;
      if (this.closed) return null;
      this._footer || (yield this.open());
      const n = (r = this._footer) === null || r === void 0 ? void 0 : r.getRecordBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const i = yield this._reader.readMessage(_t.RecordBatch);
        if (i == null ? void 0 : i.isRecordBatch()) {
          const a = i.header(), o = yield this._reader.readMessageBody(i.bodyLength);
          return this._loadRecordBatch(a, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    return ot(this, void 0, void 0, function* () {
      var r;
      const n = (r = this._footer) === null || r === void 0 ? void 0 : r.getDictionaryBatch(t);
      if (n && (yield this._handle.seek(n.offset))) {
        const i = yield this._reader.readMessage(_t.DictionaryBatch);
        if (i == null ? void 0 : i.isDictionaryBatch()) {
          const a = i.header(), o = yield this._reader.readMessageBody(i.bodyLength), s = this._loadDictionaryBatch(a, o);
          this.dictionaries.set(a.id, s);
        }
      }
    });
  }
  _readFooter() {
    return ot(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const r = t.size - f_, n = yield t.readInt32(r), i = yield t.readAt(r - n, n);
      return so.decode(i);
    });
  }
  _readNextMessageAndValidate(t) {
    return ot(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const r = this._footer.getRecordBatch(this._recordBatchIndex);
        if (r && (yield this._handle.seek(r.offset))) return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class IA extends hc {
  constructor(t, r) {
    super(t, r);
  }
  _loadVectors(t, r, n) {
    return new Ux(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function y_(e7, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e7.autoDestroy;
}
function* hy(e7) {
  const t = Ke.from(e7);
  try {
    if (!t.open({ autoDestroy: false }).closed) do
      yield t;
    while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function dy(e7) {
  return gr(this, arguments, function* () {
    const r = yield yt(Ke.from(e7));
    try {
      if (!(yield yt(r.open({ autoDestroy: false }))).closed) do
        yield yield yt(r);
      while (!(yield yt(r.reset().open())).closed);
    } finally {
      yield yt(r.cancel());
    }
  });
}
function EA(e7) {
  return new lc(new IA(e7));
}
function $A(e7) {
  const t = e7.peek(Qo + 7 & -8);
  return t && t.byteLength >= 4 ? vd(t) ? new h_(new p_(e7.read())) : new lc(new hc(e7)) : new lc(new hc(function* () {
  }()));
}
function MA(e7) {
  return ot(this, void 0, void 0, function* () {
    const t = yield e7.peek(Qo + 7 & -8);
    return t && t.byteLength >= 4 ? vd(t) ? new h_(new p_(yield e7.read())) : new fc(new dc(e7)) : new fc(new dc(function() {
      return gr(this, arguments, function* () {
      });
    }()));
  });
}
function DA(e7) {
  return ot(this, void 0, void 0, function* () {
    const { size: t } = yield e7.stat(), r = new uc(e7, t);
    return t >= AA && vd(yield r.readAt(0, Qo + 7 & -8)) ? new PA(new TA(r)) : new fc(new dc(r));
  });
}
class Wt extends dt {
  static assemble(...t) {
    const r = (i) => i.flatMap((a) => Array.isArray(a) ? r(a) : a instanceof Ae ? a.data.children : a.data), n = new Wt();
    return n.visitMany(r(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof xt) return this.visitMany(t.data), this;
    const { type: r } = t;
    if (!G.isDictionary(r)) {
      const { length: n } = t;
      if (n > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (G.isUnion(r)) this.nodes.push(new gn(n, 0));
      else {
        const { nullCount: i } = t;
        G.isNull(r) || cr.call(this, i <= 0 ? new Uint8Array(0) : nc(t.offset, n, t.nullBitmap)), this.nodes.push(new gn(n, i));
      }
    }
    return super.visit(t);
  }
  visitNull(t) {
    return this;
  }
  visitDictionary(t) {
    return this.visit(t.clone(t.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function cr(e7) {
  const t = e7.byteLength + 7 & -8;
  return this.buffers.push(e7), this.bufferRegions.push(new br(this._byteLength, t)), this._byteLength += t, this;
}
function NA(e7) {
  var t;
  const { type: r, length: n, typeIds: i, valueOffsets: a } = e7;
  if (cr.call(this, i), r.mode === ye.Sparse) return vf.call(this, e7);
  if (r.mode === ye.Dense) {
    if (e7.offset <= 0) return cr.call(this, a), vf.call(this, e7);
    {
      const o = new Int32Array(n), s = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let u, l, f = -1; ++f < n; ) (u = i[f]) !== void 0 && ((l = s[u]) === void 0 && (l = s[u] = a[f]), o[f] = a[f] - l, c[u] = ((t = c[u]) !== null && t !== void 0 ? t : 0) + 1);
      cr.call(this, o), this.visitMany(e7.children.map((u, l) => {
        const f = r.typeIds[l], h = s[f], d = c[f];
        return u.slice(h, Math.min(n, d));
      }));
    }
  }
  return this;
}
function CA(e7) {
  let t;
  return e7.nullCount >= e7.length ? cr.call(this, new Uint8Array(0)) : (t = e7.values) instanceof Uint8Array ? cr.call(this, nc(e7.offset, e7.length, t)) : cr.call(this, ic(e7.values));
}
function Xr(e7) {
  return cr.call(this, e7.values.subarray(0, e7.length * e7.stride));
}
function Su(e7) {
  const { length: t, values: r, valueOffsets: n } = e7, i = Dt(n[0]), a = Dt(n[t]), o = Math.min(a - i, r.byteLength - i);
  return cr.call(this, wb(-i, t + 1, n)), cr.call(this, r.subarray(i, i + o)), this;
}
function gd(e7) {
  const { length: t, valueOffsets: r } = e7;
  if (r) {
    const { [0]: n, [t]: i } = r;
    return cr.call(this, wb(-n, t + 1, r)), this.visit(e7.children[0].slice(n, i - n));
  }
  return this.visit(e7.children[0]);
}
function vf(e7) {
  return this.visitMany(e7.type.children.map((t, r) => e7.children[r]).filter(Boolean))[0];
}
Wt.prototype.visitBool = CA;
Wt.prototype.visitInt = Xr;
Wt.prototype.visitFloat = Xr;
Wt.prototype.visitUtf8 = Su;
Wt.prototype.visitLargeUtf8 = Su;
Wt.prototype.visitBinary = Su;
Wt.prototype.visitLargeBinary = Su;
Wt.prototype.visitFixedSizeBinary = Xr;
Wt.prototype.visitDate = Xr;
Wt.prototype.visitTimestamp = Xr;
Wt.prototype.visitTime = Xr;
Wt.prototype.visitDecimal = Xr;
Wt.prototype.visitList = gd;
Wt.prototype.visitStruct = vf;
Wt.prototype.visitUnion = NA;
Wt.prototype.visitInterval = Xr;
Wt.prototype.visitDuration = Xr;
Wt.prototype.visitFixedSizeList = gd;
Wt.prototype.visitMap = gd;
class m_ extends ud {
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = false, this._sink = new Ms(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Ie(t) || (t = { autoDestroy: true, writeLegacyIpcFormat: false }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : true, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : false;
  }
  toString(t = false) {
    return this._sink.toString(t);
  }
  toUint8Array(t = false) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return qn(t) ? t.then((r) => this.writeAll(r)) : fa(t) ? Sd(this, t) : wd(this, t);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(t) {
    return this._sink.toDOMStream(t);
  }
  toNodeStream(t) {
    return this._sink.toNodeStream(t);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(t) {
    return this.reset()._sink.abort(t);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(t = this._sink, r = null) {
    return t === this._sink || t instanceof Ms ? this._sink = t : (this._sink = new Ms(), t && f1(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && h1(t) && this.toNodeStream({ objectMode: false }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = false, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!r || !yf(r, this._schema)) && (r == null ? (this._position = 0, this._schema = null) : (this._started = true, this._schema = r, this._writeSchema(r))), this;
  }
  write(t) {
    let r = null;
    if (this._sink) {
      if (t == null) return this.finish() && void 0;
      if (t instanceof me && !(r = t.schema)) return this.finish() && void 0;
      if (t instanceof Ae && !(r = t.schema)) return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (r && !yf(r, this._schema)) {
      if (this._started && this._autoDestroy) return this.close();
      this.reset(this._sink, r);
    }
    t instanceof Ae ? t instanceof pd || this._writeRecordBatch(t) : t instanceof me ? this.writeAll(t.batches) : Ko(t) && this.writeAll(t);
  }
  _writeMessage(t, r = 8) {
    const n = r - 1, i = ge.encode(t), a = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, s = a + o + n & ~n, c = s - a - o;
    return t.headerType === _t.RecordBatch ? this._recordBatchBlocks.push(new mn(s, t.bodyLength, this._position)) : t.headerType === _t.DictionaryBatch && this._dictionaryBlocks.push(new mn(s, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(s - o)), a > 0 && this._write(i), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const r = vt(t);
      r && r.byteLength > 0 && (this._sink.write(r), this._position += r.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(ge.from(t));
  }
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(co);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: r, nodes: n, bufferRegions: i, buffers: a } = Wt.assemble(t), o = new ke(t.numRows, n, i), s = ge.from(o, r);
    return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(a);
  }
  _writeDictionaryBatch(t, r, n = false) {
    const { byteLength: i, nodes: a, bufferRegions: o, buffers: s } = Wt.assemble(new xt([t])), c = new ke(t.length, a, o), u = new Tr(c, r, n), l = ge.from(u, i);
    return this._writeMessage(l)._writeBodyBuffers(s);
  }
  _writeBodyBuffers(t) {
    let r, n, i;
    for (let a = -1, o = t.length; ++a < o; ) (r = t[a]) && (n = r.byteLength) > 0 && (this._write(r), (i = (n + 7 & -8) - n) > 0 && this._writePadding(i));
    return this;
  }
  _writeDictionaries(t) {
    var r, n;
    for (const [i, a] of t.dictionaries) {
      const o = (r = a == null ? void 0 : a.data) !== null && r !== void 0 ? r : [], s = this._seenDictionaries.get(i), c = (n = this._dictionaryDeltaOffsets.get(i)) !== null && n !== void 0 ? n : 0;
      if (!s || s.data[0] !== o[0]) for (const [u, l] of o.entries()) this._writeDictionaryBatch(l, i, u > 0);
      else if (c < o.length) for (const u of o.slice(c)) this._writeDictionaryBatch(u, i, true);
      this._seenDictionaries.set(i, a), this._dictionaryDeltaOffsets.set(i, o.length);
    }
    return this;
  }
}
class bd extends m_ {
  static writeAll(t, r) {
    const n = new bd(r);
    return qn(t) ? t.then((i) => n.writeAll(i)) : fa(t) ? Sd(n, t) : wd(n, t);
  }
}
class _d extends m_ {
  static writeAll(t) {
    const r = new _d();
    return qn(t) ? t.then((n) => r.writeAll(n)) : fa(t) ? Sd(r, t) : wd(r, t);
  }
  constructor() {
    super(), this._autoDestroy = true;
  }
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeDictionaryBatch(t, r, n = false) {
    if (!n && this._seenDictionaries.has(r)) throw new Error("The Arrow File format does not support replacement dictionaries. ");
    return super._writeDictionaryBatch(t, r, n);
  }
  _writeFooter(t) {
    const r = so.encode(new so(t, Kt.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(r)._write(Int32Array.of(r.byteLength))._writeMagic();
  }
}
function wd(e7, t) {
  let r = t;
  t instanceof me && (r = t.batches, e7.reset(void 0, t.schema));
  for (const n of r) e7.write(n);
  return e7.finish();
}
function Sd(e7, t) {
  return ot(this, void 0, void 0, function* () {
    var r, n, i, a, o, s, c;
    try {
      for (r = true, n = Fn(t); i = yield n.next(), a = i.done, !a; r = true) {
        c = i.value, r = false;
        const u = c;
        e7.write(u);
      }
    } catch (u) {
      o = { error: u };
    } finally {
      try {
        !r && !a && (s = n.return) && (yield s.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    return e7.finish();
  });
}
function jA(e7, t = "stream") {
  return (t === "stream" ? bd : _d).writeAll(e7).toUint8Array(true);
}
var BA = Object.create, v_ = Object.defineProperty, RA = Object.getOwnPropertyDescriptor, kA = Object.getOwnPropertyNames, LA = Object.getPrototypeOf, FA = Object.prototype.hasOwnProperty, UA = (e7, t) => () => (t || e7((t = { exports: {} }).exports, t), t.exports), zA = (e7, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of kA(t)) !FA.call(e7, i) && i !== r && v_(e7, i, { get: () => t[i], enumerable: !(n = RA(t, i)) || n.enumerable });
  return e7;
}, WA = (e7, t, r) => (r = e7 != null ? BA(LA(e7)) : {}, zA(!e7 || !e7.__esModule ? v_(r, "default", { value: e7, enumerable: true }) : r, e7)), VA = UA((e7, t) => {
  t.exports = Worker;
}), qA = ((e7) => (e7[e7.UNDEFINED = 0] = "UNDEFINED", e7[e7.AUTOMATIC = 1] = "AUTOMATIC", e7[e7.READ_ONLY = 2] = "READ_ONLY", e7[e7.READ_WRITE = 3] = "READ_WRITE", e7))(qA || {}), GA = ((e7) => (e7[e7.IDENTIFIER = 0] = "IDENTIFIER", e7[e7.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e7[e7.STRING_CONSTANT = 2] = "STRING_CONSTANT", e7[e7.OPERATOR = 3] = "OPERATOR", e7[e7.KEYWORD = 4] = "KEYWORD", e7[e7.COMMENT = 5] = "COMMENT", e7))(GA || {}), HA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.DEBUG = 1] = "DEBUG", e7[e7.INFO = 2] = "INFO", e7[e7.WARNING = 3] = "WARNING", e7[e7.ERROR = 4] = "ERROR", e7))(HA || {}), KA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.CONNECT = 1] = "CONNECT", e7[e7.DISCONNECT = 2] = "DISCONNECT", e7[e7.OPEN = 3] = "OPEN", e7[e7.QUERY = 4] = "QUERY", e7[e7.INSTANTIATE = 5] = "INSTANTIATE", e7))(KA || {}), YA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.OK = 1] = "OK", e7[e7.ERROR = 2] = "ERROR", e7[e7.START = 3] = "START", e7[e7.RUN = 4] = "RUN", e7[e7.CAPTURE = 5] = "CAPTURE", e7))(YA || {}), XA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.WEB_WORKER = 1] = "WEB_WORKER", e7[e7.NODE_WORKER = 2] = "NODE_WORKER", e7[e7.BINDINGS = 3] = "BINDINGS", e7[e7.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e7))(XA || {}), JA = class {
  log(e7) {
  }
}, QA = ((e7) => (e7[e7.SUCCESS = 0] = "SUCCESS", e7[e7.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", e7[e7.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", e7))(QA || {}), ZA = class {
  constructor(e7, t) {
    this._bindings = e7, this._conn = t;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(e7) {
    return e7(this._bindings, this._conn);
  }
  async query(e7) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e7 });
    let t = await this._bindings.runQuery(this._conn, e7), r = Ke.from(t);
    return console.assert(r.isSync(), "Reader is not sync"), console.assert(r.isFile(), "Reader is not file"), new me(r);
  }
  async send(e7, t = false) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e7 });
    let r = await this._bindings.startPendingQuery(this._conn, e7, t);
    for (; r == null; ) {
      if (this._bindings.isDetached()) {
        console.error("cannot send a message since the worker is not set!");
        return;
      }
      r = await this._bindings.pollPendingQuery(this._conn);
    }
    let n = new g_(this._bindings, this._conn, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(e7) {
    return await this._bindings.getTableNames(this._conn, e7);
  }
  async prepare(e7) {
    let t = await this._bindings.createPrepared(this._conn, e7);
    return new tP(this._bindings, this._conn, t);
  }
  async insertArrowTable(e7, t) {
    let r = jA(e7, "stream");
    await this.insertArrowFromIPCStream(r, t);
  }
  async insertArrowFromIPCStream(e7, t) {
    await this._bindings.insertArrowFromIPCStream(this._conn, e7, t);
  }
  async insertCSVFromPath(e7, t) {
    await this._bindings.insertCSVFromPath(this._conn, e7, t);
  }
  async insertJSONFromPath(e7, t) {
    await this._bindings.insertJSONFromPath(this._conn, e7, t);
  }
}, g_ = class {
  constructor(t, r, n) {
    this.db = t, this.conn = r, this.header = n, this._first = true, this._depleted = false, this._inFlight = null;
  }
  async next() {
    if (this._first) return this._first = false, { done: false, value: this.header };
    if (this._depleted) return { done: true, value: null };
    let t = null;
    for (this._inFlight != null && (t = await this._inFlight, this._inFlight = null); t == null; ) t = await this.db.fetchQueryResults(this.conn);
    return this._depleted = t.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: t };
  }
  [Symbol.asyncIterator]() {
    return this;
  }
}, tP = class {
  constructor(t, r, n) {
    this.bindings = t, this.connectionId = r, this.statementId = n;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...t) {
    let r = await this.bindings.runPrepared(this.connectionId, this.statementId, t), n = Ke.from(r);
    return console.assert(n.isSync()), console.assert(n.isFile()), new me(n);
  }
  async send(...t) {
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, t), n = new g_(this.bindings, this.connectionId, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, eP = ((e7) => (e7.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e7.CLOSE_PREPARED = "CLOSE_PREPARED", e7.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e7.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", e7.CONNECT = "CONNECT", e7.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e7.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e7.CREATE_PREPARED = "CREATE_PREPARED", e7.DISCONNECT = "DISCONNECT", e7.DROP_FILE = "DROP_FILE", e7.DROP_FILES = "DROP_FILES", e7.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e7.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e7.FLUSH_FILES = "FLUSH_FILES", e7.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e7.GET_TABLE_NAMES = "GET_TABLE_NAMES", e7.GET_VERSION = "GET_VERSION", e7.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e7.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e7.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e7.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e7.INSTANTIATE = "INSTANTIATE", e7.OPEN = "OPEN", e7.PING = "PING", e7.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e7.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e7.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e7.REGISTER_FILE_URL = "REGISTER_FILE_URL", e7.RESET = "RESET", e7.RUN_PREPARED = "RUN_PREPARED", e7.RUN_QUERY = "RUN_QUERY", e7.SEND_PREPARED = "SEND_PREPARED", e7.START_PENDING_QUERY = "START_PENDING_QUERY", e7.TOKENIZE = "TOKENIZE", e7))(eP || {}), rP = ((e7) => (e7.CONNECTION_INFO = "CONNECTION_INFO", e7.ERROR = "ERROR", e7.FEATURE_FLAGS = "FEATURE_FLAGS", e7.FILE_BUFFER = "FILE_BUFFER", e7.FILE_INFOS = "FILE_INFOS", e7.FILE_SIZE = "FILE_SIZE", e7.FILE_STATISTICS = "FILE_STATISTICS", e7.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e7.LOG = "LOG", e7.PROGRESS_UPDATE = "PROGRESS_UPDATE", e7.OK = "OK", e7.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e7.QUERY_PLAN = "QUERY_PLAN", e7.QUERY_RESULT = "QUERY_RESULT", e7.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e7.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e7.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e7.REGISTERED_FILE = "REGISTERED_FILE", e7.SCRIPT_TOKENS = "SCRIPT_TOKENS", e7.SUCCESS = "SUCCESS", e7.TABLE_NAMES = "TABLE_NAMES", e7.VERSION_STRING = "VERSION_STRING", e7))(rP || {}), gt = class {
  constructor(t, r) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = t, this.data = r, this.promise = new Promise((n, i) => {
      this.promiseResolver = n, this.promiseRejecter = i;
    });
  }
};
function Cs(e7) {
  switch (e7.typeId) {
    case x.Binary:
      return { sqlType: "binary" };
    case x.Bool:
      return { sqlType: "bool" };
    case x.Date:
      return { sqlType: "date" };
    case x.DateDay:
      return { sqlType: "date32[d]" };
    case x.DateMillisecond:
      return { sqlType: "date64[ms]" };
    case x.Decimal: {
      let t = e7;
      return { sqlType: "decimal", precision: t.precision, scale: t.scale };
    }
    case x.Float:
      return { sqlType: "float" };
    case x.Float16:
      return { sqlType: "float16" };
    case x.Float32:
      return { sqlType: "float32" };
    case x.Float64:
      return { sqlType: "float64" };
    case x.Int:
      return { sqlType: "int32" };
    case x.Int16:
      return { sqlType: "int16" };
    case x.Int32:
      return { sqlType: "int32" };
    case x.Int64:
      return { sqlType: "int64" };
    case x.Uint16:
      return { sqlType: "uint16" };
    case x.Uint32:
      return { sqlType: "uint32" };
    case x.Uint64:
      return { sqlType: "uint64" };
    case x.Uint8:
      return { sqlType: "uint8" };
    case x.IntervalDayTime:
      return { sqlType: "interval[dt]" };
    case x.IntervalYearMonth:
      return { sqlType: "interval[m]" };
    case x.List:
      return { sqlType: "list", valueType: Cs(e7.valueType) };
    case x.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: e7.byteWidth };
    case x.Null:
      return { sqlType: "null" };
    case x.Utf8:
      return { sqlType: "utf8" };
    case x.Struct:
      return { sqlType: "struct", fields: e7.children.map((t) => gf(t.name, t.type)) };
    case x.Map: {
      let t = e7;
      return { sqlType: "map", keyType: Cs(t.keyType), valueType: Cs(t.valueType) };
    }
    case x.Time:
      return { sqlType: "time[s]" };
    case x.TimeMicrosecond:
      return { sqlType: "time[us]" };
    case x.TimeMillisecond:
      return { sqlType: "time[ms]" };
    case x.TimeNanosecond:
      return { sqlType: "time[ns]" };
    case x.TimeSecond:
      return { sqlType: "time[s]" };
    case x.Timestamp:
      return { sqlType: "timestamp", timezone: e7.timezone || void 0 };
    case x.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: e7.timezone || void 0 };
    case x.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: e7.timezone || void 0 };
    case x.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: e7.timezone || void 0 };
    case x.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: e7.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(e7.toString()));
}
function gf(e7, t) {
  let r = Cs(t);
  return r.name = e7, r;
}
var nP = /'(opfs:\/\/\S*?)'/g, iP = /(opfs:\/\/\S*?)/g;
function aP(e7) {
  return e7.search(iP) > -1;
}
function oP(e7) {
  return [...e7.matchAll(nP)].map((t) => t[1]);
}
var sP = new TextEncoder(), cP = class {
  constructor(t, r = null) {
    this._onInstantiationProgress = [], this._onExecutionProgress = [], this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    }, this._nextMessageId = 0, this._pendingRequests = /* @__PURE__ */ new Map(), this._config = {}, this._logger = t, this._onMessageHandler = this.onMessage.bind(this), this._onErrorHandler = this.onError.bind(this), this._onCloseHandler = this.onClose.bind(this), r != null && this.attach(r);
  }
  get logger() {
    return this._logger;
  }
  get config() {
    return this._config;
  }
  attach(t) {
    this._worker = t, this._worker.addEventListener("message", this._onMessageHandler), this._worker.addEventListener("error", this._onErrorHandler), this._worker.addEventListener("close", this._onCloseHandler), this._workerShutdownPromise = new Promise((r, n) => {
      this._workerShutdownResolver = r;
    });
  }
  detach() {
    this._worker && (this._worker.removeEventListener("message", this._onMessageHandler), this._worker.removeEventListener("error", this._onErrorHandler), this._worker.removeEventListener("close", this._onCloseHandler), this._worker = null, this._workerShutdownResolver(null), this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async terminate() {
    this._worker && (this._worker.terminate(), this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async postTask(t, r = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!:" + t.type + "," + t.data);
      return;
    }
    let n = this._nextMessageId++;
    return this._pendingRequests.set(n, t), this._worker.postMessage({ messageId: n, type: t.type, data: t.data }, r), await t.promise;
  }
  onMessage(t) {
    var r;
    let n = t.data;
    switch (n.type) {
      case "PROGRESS_UPDATE": {
        for (let a of this._onExecutionProgress) a(n.data);
        return;
      }
      case "LOG": {
        this._logger.log(n.data);
        return;
      }
      case "INSTANTIATE_PROGRESS": {
        for (let a of this._onInstantiationProgress) a(n.data);
        return;
      }
    }
    let i = this._pendingRequests.get(n.requestId);
    if (!i) {
      console.warn("unassociated response: [".concat(n.requestId, ", ").concat(n.type.toString(), "]"));
      return;
    }
    if (this._pendingRequests.delete(n.requestId), n.type == "ERROR") {
      let a = new Error(n.data.message);
      a.name = n.data.name, (r = Object.getOwnPropertyDescriptor(a, "stack")) != null && r.writable && (a.stack = n.data.stack), i.promiseRejecter(a);
      return;
    }
    switch (i.type) {
      case "CLOSE_PREPARED":
      case "COLLECT_FILE_STATISTICS":
      case "REGISTER_OPFS_FILE_NAME":
      case "COPY_FILE_TO_PATH":
      case "DISCONNECT":
      case "DROP_FILE":
      case "DROP_FILES":
      case "FLUSH_FILES":
      case "INSERT_ARROW_FROM_IPC_STREAM":
      case "IMPORT_CSV_FROM_PATH":
      case "IMPORT_JSON_FROM_PATH":
      case "OPEN":
      case "PING":
      case "REGISTER_FILE_BUFFER":
      case "REGISTER_FILE_HANDLE":
      case "REGISTER_FILE_URL":
      case "RESET":
        if (n.type == "OK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "INSTANTIATE":
        if (this._onInstantiationProgress = [], n.type == "OK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GLOB_FILE_INFOS":
        if (n.type == "FILE_INFOS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_VERSION":
        if (n.type == "VERSION_STRING") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_FEATURE_FLAGS":
        if (n.type == "FEATURE_FLAGS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "GET_TABLE_NAMES":
        if (n.type == "TABLE_NAMES") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "TOKENIZE":
        if (n.type == "SCRIPT_TOKENS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "COPY_FILE_TO_BUFFER":
        if (n.type == "FILE_BUFFER") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "EXPORT_FILE_STATISTICS":
        if (n.type == "FILE_STATISTICS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CONNECT":
        if (n.type == "CONNECTION_INFO") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "RUN_PREPARED":
      case "RUN_QUERY":
        if (n.type == "QUERY_RESULT") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "SEND_PREPARED":
        if (n.type == "QUERY_RESULT_HEADER") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "START_PENDING_QUERY":
        if (n.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "POLL_PENDING_QUERY":
        if (n.type == "QUERY_RESULT_HEADER_OR_NULL") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CANCEL_PENDING_QUERY":
        if (this._onInstantiationProgress = [], n.type == "SUCCESS") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "FETCH_QUERY_RESULTS":
        if (n.type == "QUERY_RESULT_CHUNK") {
          i.promiseResolver(n.data);
          return;
        }
        break;
      case "CREATE_PREPARED":
        if (n.type == "PREPARED_STATEMENT_ID") {
          i.promiseResolver(n.data);
          return;
        }
        break;
    }
    i.promiseRejecter(new Error("unexpected response type: ".concat(n.type.toString())));
  }
  onError(t) {
    console.error(t), console.error("error in duckdb worker: ".concat(t.message)), this._pendingRequests.clear();
  }
  onClose() {
    if (this._workerShutdownResolver(null), this._pendingRequests.size != 0) {
      console.warn("worker terminated with ".concat(this._pendingRequests.size, " pending requests"));
      return;
    }
    this._pendingRequests.clear();
  }
  isDetached() {
    return !this._worker;
  }
  async reset() {
    let t = new gt("RESET", null);
    return await this.postTask(t);
  }
  async ping() {
    let t = new gt("PING", null);
    await this.postTask(t);
  }
  async dropFile(t) {
    let r = new gt("DROP_FILE", t);
    return await this.postTask(r);
  }
  async dropFiles(t) {
    let r = new gt("DROP_FILES", t);
    return await this.postTask(r);
  }
  async flushFiles() {
    let t = new gt("FLUSH_FILES", null);
    return await this.postTask(t);
  }
  async instantiate(t, r = null, n = (i) => {
  }) {
    this._onInstantiationProgress.push(n);
    let i = new gt("INSTANTIATE", [t, r]);
    return await this.postTask(i);
  }
  async getVersion() {
    let t = new gt("GET_VERSION", null);
    return await this.postTask(t);
  }
  async getFeatureFlags() {
    let t = new gt("GET_FEATURE_FLAGS", null);
    return await this.postTask(t);
  }
  async open(t) {
    this._config = t;
    let r = new gt("OPEN", t);
    await this.postTask(r);
  }
  async tokenize(t) {
    let r = new gt("TOKENIZE", t);
    return await this.postTask(r);
  }
  async connectInternal() {
    let t = new gt("CONNECT", null);
    return await this.postTask(t);
  }
  async connect() {
    let t = await this.connectInternal();
    return new ZA(this, t);
  }
  async disconnect(t) {
    let r = new gt("DISCONNECT", t);
    await this.postTask(r);
  }
  async runQuery(t, r) {
    if (this.shouldOPFSFileHandling()) {
      let n = await this.registerOPFSFileFromSQL(r);
      try {
        return await this._runQueryAsync(t, r);
      } finally {
        n.length > 0 && await this.dropFiles(n);
      }
    } else return await this._runQueryAsync(t, r);
  }
  async _runQueryAsync(t, r) {
    let n = new gt("RUN_QUERY", [t, r]);
    return await this.postTask(n);
  }
  async startPendingQuery(t, r, n = false) {
    if (this.shouldOPFSFileHandling()) {
      let i = await this.registerOPFSFileFromSQL(r);
      try {
        return await this._startPendingQueryAsync(t, r, n);
      } finally {
        i.length > 0 && await this.dropFiles(i);
      }
    } else return await this._startPendingQueryAsync(t, r, n);
  }
  async _startPendingQueryAsync(t, r, n = false) {
    let i = new gt("START_PENDING_QUERY", [t, r, n]);
    return await this.postTask(i);
  }
  async pollPendingQuery(t) {
    let r = new gt("POLL_PENDING_QUERY", t);
    return await this.postTask(r);
  }
  async cancelPendingQuery(t) {
    let r = new gt("CANCEL_PENDING_QUERY", t);
    return await this.postTask(r);
  }
  async fetchQueryResults(t) {
    let r = new gt("FETCH_QUERY_RESULTS", t);
    return await this.postTask(r);
  }
  async getTableNames(t, r) {
    let n = new gt("GET_TABLE_NAMES", [t, r]);
    return await this.postTask(n);
  }
  async createPrepared(t, r) {
    let n = new gt("CREATE_PREPARED", [t, r]);
    return await this.postTask(n);
  }
  async closePrepared(t, r) {
    let n = new gt("CLOSE_PREPARED", [t, r]);
    await this.postTask(n);
  }
  async runPrepared(t, r, n) {
    let i = new gt("RUN_PREPARED", [t, r, n]);
    return await this.postTask(i);
  }
  async sendPrepared(t, r, n) {
    let i = new gt("SEND_PREPARED", [t, r, n]);
    return await this.postTask(i);
  }
  async globFiles(t) {
    let r = new gt("GLOB_FILE_INFOS", t);
    return await this.postTask(r);
  }
  async registerFileText(t, r) {
    let n = sP.encode(r);
    await this.registerFileBuffer(t, n);
  }
  async registerFileURL(t, r, n, i) {
    r === void 0 && (r = t);
    let a = new gt("REGISTER_FILE_URL", [t, r, n, i]);
    await this.postTask(a);
  }
  async registerEmptyFileBuffer(t) {
  }
  async registerFileBuffer(t, r) {
    let n = new gt("REGISTER_FILE_BUFFER", [t, r]);
    await this.postTask(n, [r.buffer]);
  }
  async registerFileHandle(t, r, n, i) {
    let a = new gt("REGISTER_FILE_HANDLE", [t, r, n, i]);
    await this.postTask(a, []);
  }
  async registerOPFSFileName(t) {
    let r = new gt("REGISTER_OPFS_FILE_NAME", [t]);
    await this.postTask(r, []);
  }
  async collectFileStatistics(t, r) {
    let n = new gt("COLLECT_FILE_STATISTICS", [t, r]);
    await this.postTask(n, []);
  }
  async exportFileStatistics(t) {
    let r = new gt("EXPORT_FILE_STATISTICS", t);
    return await this.postTask(r, []);
  }
  async copyFileToBuffer(t) {
    let r = new gt("COPY_FILE_TO_BUFFER", t);
    return await this.postTask(r);
  }
  async copyFileToPath(t, r) {
    let n = new gt("COPY_FILE_TO_PATH", [t, r]);
    await this.postTask(n);
  }
  async insertArrowFromIPCStream(t, r, n) {
    if (r.length == 0) return;
    let i = new gt("INSERT_ARROW_FROM_IPC_STREAM", [t, r, n]);
    await this.postTask(i, [r.buffer]);
  }
  async insertCSVFromPath(t, r, n) {
    if (n.columns !== void 0) {
      let a = [];
      for (let o in n.columns) {
        let s = n.columns[o];
        a.push(gf(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_CSV_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  async insertJSONFromPath(t, r, n) {
    if (n.columns !== void 0) {
      let a = [];
      for (let o in n.columns) {
        let s = n.columns[o];
        a.push(gf(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_JSON_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  shouldOPFSFileHandling() {
    var t, r;
    return aP((t = this.config.path) != null ? t : "") ? ((r = this.config.opfs) == null ? void 0 : r.fileHandling) == "auto" : false;
  }
  async registerOPFSFileFromSQL(t) {
    let r = oP(t), n = [];
    for (let i of r) try {
      await this.registerOPFSFileName(i), n.push(i);
    } catch (a) {
      throw console.error(a), new Error("File Not found:" + i);
    }
    return n;
  }
};
function uP() {
  let e7 = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e7.decode(t));
}
uP();
var lP = ((e7) => (e7[e7.BUFFER = 0] = "BUFFER", e7[e7.NODE_FS = 1] = "NODE_FS", e7[e7.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e7[e7.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e7[e7.HTTP = 4] = "HTTP", e7[e7.S3 = 5] = "S3", e7))(lP || {}), fP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), hP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), dP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), pP = () => (async (e7) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e7);
  } catch {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), yP = { version: "1.32.0" }, Od = yP.version.split(".");
Od[0];
Od[1];
Od[2];
var mP = () => typeof navigator > "u", _l = null, wl = null, Sl = null, Ol = null, xl = null;
async function vP() {
  return _l == null && (_l = typeof BigInt64Array < "u"), wl == null && (wl = await hP()), Sl == null && (Sl = await pP()), Ol == null && (Ol = await dP()), xl == null && (xl = await fP()), { bigInt64Array: _l, crossOriginIsolated: mP() || globalThis.crossOriginIsolated || false, wasmExceptions: wl, wasmSIMD: Ol, wasmThreads: Sl, wasmBulkMemory: xl };
}
async function gP(e7) {
  let t = await vP();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e7.coi) return { mainModule: e7.coi.mainModule, mainWorker: e7.coi.mainWorker, pthreadWorker: e7.coi.pthreadWorker };
    if (e7.eh) return { mainModule: e7.eh.mainModule, mainWorker: e7.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e7.mvp.mainModule, mainWorker: e7.mvp.mainWorker, pthreadWorker: null };
}
WA(VA());
const bP = "/assets/duckdb-mvp-BP0pRkMH.wasm", _P = "/assets/duckdb-browser-mvp.worker-C9hF7LGh.js", wP = "/assets/duckdb-eh-9ubY-jlA.wasm", SP = "/assets/duckdb-browser-eh.worker-hQa-dcAV.js", OP = { mvp: { mainModule: bP, mainWorker: _P }, eh: { mainModule: wP, mainWorker: SP } }, js = "mmg";
let Al = null, Pl = null, Bs = Promise.resolve(), bf = null;
async function b_() {
  return Al || (Al = (async () => {
    const e7 = await gP(OP), t = new Worker(e7.mainWorker, { type: "module" }), r = new JA(), n = new cP(r, t);
    return await n.instantiate(e7.mainModule, e7.pthreadWorker), n;
  })()), Al;
}
async function __() {
  return Pl || (Pl = await (await b_()).connect()), Pl;
}
async function xP(e7) {
  return (await e7.query(`SELECT 1 FROM duckdb_databases() WHERE database_name = '${js}' LIMIT 1`)).toArray().length > 0;
}
async function AP(e7, t) {
  if (t && bf === t) return;
  const r = await b_(), n = await __();
  await r.registerFileBuffer(jp, new Uint8Array(e7)), await xP(n) && await n.query(`DETACH ${js}`), await n.query(`ATTACH '${jp}' AS ${js} (READ_ONLY)`), await n.query(`USE ${js}`), bf = t;
}
async function py(e7, t) {
  const r = t ?? null;
  if (!(r && bf === r)) return Bs = Bs.then(() => AP(e7, r)), Bs;
}
async function Fr(e7) {
  return await Bs, (await (await __()).query(e7)).toArray();
}
const xd = { day: "day", week: "week", month: "month", quarter: "quarter", year: "year" };
function Ad(e7) {
  return e7.replace(/'/g, "''");
}
function pc(e7, t) {
  return "";
}
async function yY() {
  return (await Fr(`
    SELECT
      method_id,
      method_name,
      method_url,
      categories,
      intensity,
      is_members,
      default_kph,
      completions_unit_name,
      profit_pk,
      profit_ph,
      profit_linear_approx,
      wiki_rank,
      wiki_hourly_profit_gp,
      wiki_profit_gp
    FROM method_rankings
    ORDER BY wiki_rank NULLS LAST
  `)).map((t) => ({ ...t, categories: pb(t.categories) }));
}
async function mY() {
  const e7 = await Fr(`SELECT method_id, skill_key, requirement_text
     FROM method_skills
     ORDER BY method_id, skill_key`), t = {};
  for (const r of e7) {
    const n = t[r.method_id] ?? [];
    n.push({ skillKey: r.skill_key, requirementText: r.requirement_text ?? null }), t[r.method_id] = n;
  }
  return t;
}
async function vY(e7) {
  const t = e7.replace(/'/g, "''"), r = await Fr(`SELECT * FROM guide_economics WHERE method_id = '${t}' LIMIT 1`);
  if (!r.length) return null;
  const n = r[0], i = await Fr(`SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${t}'`), a = await Fr(`SELECT skill_key, requirement_text
     FROM method_skills
     WHERE method_id = '${t}'
     ORDER BY skill_key`), o = (s) => ({ itemName: s.item_name, wikiSlug: s.wiki_slug, qtyPerCompletion: s.qty_per_completion, gpPerCompletion: s.gp_per_completion ?? 0 });
  return { id: n.method_id, methodName: n.method_name, methodUrl: n.method_url, defaultKph: n.default_kph ?? 1, kphUnitName: n.completions_unit_name || "Completions per hour", assumptionText: n.assumption_text ?? "", inputTotalPk: n.input_total_pk ?? 0, inputTotalPh: n.input_total_ph ?? 0, outputTotalPk: n.output_total_pk ?? 0, outputTotalPh: n.output_total_ph ?? 0, inputs: i.filter((s) => s.io_type === "input").map(o), outputs: i.filter((s) => s.io_type === "output").map(o), skillRequirements: a.map((s) => ({ skillKey: s.skill_key, requirementText: s.requirement_text ?? null })) };
}
async function PP(e7, t, r) {
  const n = xd[t], i = Ad(e7), a = pc(), o = await Fr(`
    SELECT
      date_trunc('${n}', scrape_timestamp) AS period,
      avg(hourly_profit_gp) AS mean_profit,
      median(hourly_profit_gp) AS median_profit,
      quantile_cont(hourly_profit_gp, 0.25) AS p25,
      quantile_cont(hourly_profit_gp, 0.75) AS p75
    FROM snapshots
    WHERE method_id = '${i}' AND hourly_profit_gp IS NOT NULL
    ${a}
    GROUP BY 1
    ORDER BY 1
    `), s = await Fr(`
    SELECT date_trunc('${n}', s.scrape_timestamp) AS period,
           sum(pm.value) AS item_volume
    FROM snapshots s
    JOIN io_lines io ON io.method_id = s.method_id
    JOIN price_metrics pm ON pm.item_id = io.item_id
      AND pm.metric = 'volume'
      AND date_trunc('day', pm.scrape_timestamp) = date_trunc('day', s.scrape_timestamp)
    WHERE s.method_id = '${i}'
    ${pc()}
    GROUP BY 1
    ORDER BY 1
    `), c = new Map(s.map((u) => [pn(u.period), u.item_volume ?? 0]));
  return o.map((u) => {
    const l = pn(u.period);
    return { period: l, mean_profit: u.mean_profit ?? 0, median_profit: u.median_profit ?? 0, p25: u.p25 ?? 0, p75: u.p75 ?? 0, item_volume: c.get(l) ?? null };
  });
}
async function TP(e7, t, r) {
  if (!e7.length) return [];
  const n = xd[t], i = e7.map((s) => `'${Ad(s)}'`).join(", "), a = pc();
  return (await Fr(`
    SELECT s.method_id, m.method_name,
           date_trunc('${n}', s.scrape_timestamp) AS period,
           avg(s.hourly_profit_gp) AS profit
    FROM snapshots s
    JOIN methods m ON m.method_id = s.method_id
    WHERE s.method_id IN (${i}) AND s.hourly_profit_gp IS NOT NULL
    ${a}
    GROUP BY 1, 2, 3
    ORDER BY 3, 4 DESC
    `)).map((s) => ({ method_id: s.method_id, method_name: s.method_name, period: pn(s.period), profit: s.profit ?? 0 }));
}
async function gY(e7, t, r) {
  const n = xd[t], i = Ad(e7), a = pc();
  return (await Fr(`
    SELECT
      date_trunc('${n}', pm.scrape_timestamp) AS period,
      io.wiki_slug,
      io.io_type,
      io.item_name,
      io.qty_per_completion,
      max(CASE WHEN pm.metric = 'price' THEN pm.value END) AS price,
      max(CASE WHEN pm.metric = 'volume' THEN pm.value END) AS volume
    FROM io_lines io
    JOIN price_metrics pm ON pm.item_id = io.item_id
    WHERE io.method_id = '${i}'
      AND io.item_id IS NOT NULL
      AND pm.metric IN ('price', 'volume')
      ${a}
    GROUP BY 1, 2, 3, 4, 5
    ORDER BY 1, 4
    `)).map((s) => ({ period: pn(s.period), wikiSlug: s.wiki_slug, ioType: s.io_type, itemName: s.item_name, qtyPerCompletion: s.qty_per_completion, price: s.price, volume: s.volume }));
}
function yy(e7, t) {
  return { ...e7, qtyPerHour: e7.qtyPerCompletion * t, gpPerHour: e7.gpPerCompletion * t };
}
function IP(e7, t) {
  return { kph: t, inputs: e7.inputs.map((r) => yy(r, t)), outputs: e7.outputs.map((r) => yy(r, t)), inputTotal: e7.inputTotalPk * t + e7.inputTotalPh, outputTotal: e7.outputTotalPk * t + e7.outputTotalPh, profit: (e7.outputTotalPk - e7.inputTotalPk) * t + (e7.outputTotalPh - e7.inputTotalPh) };
}
function my(e7) {
  return `${Math.round(e7).toLocaleString("en-GB")} gp`;
}
function bY(e7) {
  const t = Math.abs(e7);
  return t >= 1e6 ? `${(e7 / 1e6).toFixed(1)}M` : t >= 1e3 ? `${Math.round(e7 / 1e3)}k` : String(Math.round(e7));
}
function _Y(e7) {
  const t = Math.abs(e7);
  return t >= 100 ? Math.round(e7).toLocaleString("en-GB") : t >= 1 ? e7.toFixed(2) : t >= 0.01 ? e7.toFixed(4) : e7.toPrecision(3);
}
function vy(e7, t) {
  return { ...e7, ioType: t, lineKey: `${t}:${e7.wikiSlug}` };
}
function wY(e7, t, r = 5) {
  const n = IP(e7, t), a = [...[...n.inputs.map((o) => vy(o, "input")), ...n.outputs.map((o) => vy(o, "output"))]].sort((o, s) => Math.abs(s.gpPerHour) - Math.abs(o.gpPerHour));
  return { top: a.slice(0, r), other: a.slice(r) };
}
async function EP() {
  const e7 = await fetch(Cp, { cache: "no-cache" });
  if (!e7.ok) throw new Error(`Failed to load manifest (${e7.status}) from ${Cp}`);
  return await e7.json();
}
function $P(e7, t) {
  return t ? e7.artifacts.database.sha256 !== t : true;
}
function MP(e7) {
  if (!(e7 == null ? void 0 : e7.latest_snapshot_date)) return true;
  const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return e7.latest_snapshot_date < t;
}
function SY({ loading: e7, error: t, manifest: r, fromCache: n, onReload: i }) {
  return e7 ? ut.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--loading", children: "Loading OSRS data\u2026" }) : t ? ut.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: [t, " ", ut.jsx("button", { type: "button", onClick: i, children: "Retry" })] }) : !r || !MP(r) ? null : ut.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--stale", children: ["Data from ", r.generated_at, r.latest_snapshot_date ? ` \xB7 snapshot ${r.latest_snapshot_date}` : "", n ? " \xB7 cached" : " \xB7 fresh download", " \xB7 ", ut.jsx("button", { type: "button", onClick: i, children: "Refresh" })] });
}
function OY({ skills: e7, compact: t = false }) {
  return e7.length === 0 ? t ? ut.jsx("span", { className: "osrs-mmg__muted", children: "\u2014" }) : null : ut.jsx("div", { className: t ? "osrs-mmg__skills-inline" : "osrs-mmg__skills-list", children: e7.map((r) => ut.jsxs("span", { className: t ? "osrs-mmg__skill-icon" : "osrs-mmg__skill-chip", title: `${r.skillKey} ${r.requirementText}`, children: [ut.jsx("img", { src: n1(r.skillKey), alt: r.skillKey, width: 20, height: 20 }), t ? ut.jsx("span", { className: "osrs-mmg__skill-level", children: r.requirementText }) : ut.jsxs("span", { children: [r.skillKey, " ", r.requirementText] })] }, r.skillKey)) });
}
var DP = Array.isArray, $e = DP, NP = typeof os == "object" && os && os.Object === Object && os, w_ = NP, CP = w_, jP = typeof self == "object" && self && self.Object === Object && self, BP = CP || jP || Function("return this")(), Er = BP, RP = Er, kP = RP.Symbol, Zo = kP, gy = Zo, S_ = Object.prototype, LP = S_.hasOwnProperty, FP = S_.toString, Ea = gy ? gy.toStringTag : void 0;
function UP(e7) {
  var t = LP.call(e7, Ea), r = e7[Ea];
  try {
    e7[Ea] = void 0;
    var n = true;
  } catch {
  }
  var i = FP.call(e7);
  return n && (t ? e7[Ea] = r : delete e7[Ea]), i;
}
var zP = UP, WP = Object.prototype, VP = WP.toString;
function qP(e7) {
  return VP.call(e7);
}
var GP = qP, by = Zo, HP = zP, KP = GP, YP = "[object Null]", XP = "[object Undefined]", _y = by ? by.toStringTag : void 0;
function JP(e7) {
  return e7 == null ? e7 === void 0 ? XP : YP : _y && _y in Object(e7) ? HP(e7) : KP(e7);
}
var Jr = JP;
function QP(e7) {
  return e7 != null && typeof e7 == "object";
}
var Qr = QP, ZP = Jr, tT = Qr, eT = "[object Symbol]";
function rT(e7) {
  return typeof e7 == "symbol" || tT(e7) && ZP(e7) == eT;
}
var da = rT, nT = $e, iT = da, aT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oT = /^\w*$/;
function sT(e7, t) {
  if (nT(e7)) return false;
  var r = typeof e7;
  return r == "number" || r == "symbol" || r == "boolean" || e7 == null || iT(e7) ? true : oT.test(e7) || !aT.test(e7) || t != null && e7 in Object(t);
}
var Pd = sT;
function cT(e7) {
  var t = typeof e7;
  return e7 != null && (t == "object" || t == "function");
}
var _n = cT;
const pa = Bt(_n);
var uT = Jr, lT = _n, fT = "[object AsyncFunction]", hT = "[object Function]", dT = "[object GeneratorFunction]", pT = "[object Proxy]";
function yT(e7) {
  if (!lT(e7)) return false;
  var t = uT(e7);
  return t == hT || t == dT || t == fT || t == pT;
}
var Td = yT;
const lt = Bt(Td);
var mT = Er, vT = mT["__core-js_shared__"], gT = vT, Tl = gT, wy = function() {
  var e7 = /[^.]+$/.exec(Tl && Tl.keys && Tl.keys.IE_PROTO || "");
  return e7 ? "Symbol(src)_1." + e7 : "";
}();
function bT(e7) {
  return !!wy && wy in e7;
}
var _T = bT, wT = Function.prototype, ST = wT.toString;
function OT(e7) {
  if (e7 != null) {
    try {
      return ST.call(e7);
    } catch {
    }
    try {
      return e7 + "";
    } catch {
    }
  }
  return "";
}
var O_ = OT, xT = Td, AT = _T, PT = _n, TT = O_, IT = /[\\^$.*+?()[\]{}|]/g, ET = /^\[object .+?Constructor\]$/, $T = Function.prototype, MT = Object.prototype, DT = $T.toString, NT = MT.hasOwnProperty, CT = RegExp("^" + DT.call(NT).replace(IT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function jT(e7) {
  if (!PT(e7) || AT(e7)) return false;
  var t = xT(e7) ? CT : ET;
  return t.test(TT(e7));
}
var BT = jT;
function RT(e7, t) {
  return e7 == null ? void 0 : e7[t];
}
var kT = RT, LT = BT, FT = kT;
function UT(e7, t) {
  var r = FT(e7, t);
  return LT(r) ? r : void 0;
}
var ti = UT, zT = ti, WT = zT(Object, "create"), Ou = WT, Sy = Ou;
function VT() {
  this.__data__ = Sy ? Sy(null) : {}, this.size = 0;
}
var qT = VT;
function GT(e7) {
  var t = this.has(e7) && delete this.__data__[e7];
  return this.size -= t ? 1 : 0, t;
}
var HT = GT, KT = Ou, YT = "__lodash_hash_undefined__", XT = Object.prototype, JT = XT.hasOwnProperty;
function QT(e7) {
  var t = this.__data__;
  if (KT) {
    var r = t[e7];
    return r === YT ? void 0 : r;
  }
  return JT.call(t, e7) ? t[e7] : void 0;
}
var ZT = QT, tI = Ou, eI = Object.prototype, rI = eI.hasOwnProperty;
function nI(e7) {
  var t = this.__data__;
  return tI ? t[e7] !== void 0 : rI.call(t, e7);
}
var iI = nI, aI = Ou, oI = "__lodash_hash_undefined__";
function sI(e7, t) {
  var r = this.__data__;
  return this.size += this.has(e7) ? 0 : 1, r[e7] = aI && t === void 0 ? oI : t, this;
}
var cI = sI, uI = qT, lI = HT, fI = ZT, hI = iI, dI = cI;
function ya(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = uI;
ya.prototype.delete = lI;
ya.prototype.get = fI;
ya.prototype.has = hI;
ya.prototype.set = dI;
var pI = ya;
function yI() {
  this.__data__ = [], this.size = 0;
}
var mI = yI;
function vI(e7, t) {
  return e7 === t || e7 !== e7 && t !== t;
}
var Id = vI, gI = Id;
function bI(e7, t) {
  for (var r = e7.length; r--; ) if (gI(e7[r][0], t)) return r;
  return -1;
}
var xu = bI, _I = xu, wI = Array.prototype, SI = wI.splice;
function OI(e7) {
  var t = this.__data__, r = _I(t, e7);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : SI.call(t, r, 1), --this.size, true;
}
var xI = OI, AI = xu;
function PI(e7) {
  var t = this.__data__, r = AI(t, e7);
  return r < 0 ? void 0 : t[r][1];
}
var TI = PI, II = xu;
function EI(e7) {
  return II(this.__data__, e7) > -1;
}
var $I = EI, MI = xu;
function DI(e7, t) {
  var r = this.__data__, n = MI(r, e7);
  return n < 0 ? (++this.size, r.push([e7, t])) : r[n][1] = t, this;
}
var NI = DI, CI = mI, jI = xI, BI = TI, RI = $I, kI = NI;
function ma(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
ma.prototype.clear = CI;
ma.prototype.delete = jI;
ma.prototype.get = BI;
ma.prototype.has = RI;
ma.prototype.set = kI;
var Au = ma, LI = ti, FI = Er, UI = LI(FI, "Map"), Ed = UI, Oy = pI, zI = Au, WI = Ed;
function VI() {
  this.size = 0, this.__data__ = { hash: new Oy(), map: new (WI || zI)(), string: new Oy() };
}
var qI = VI;
function GI(e7) {
  var t = typeof e7;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e7 !== "__proto__" : e7 === null;
}
var HI = GI, KI = HI;
function YI(e7, t) {
  var r = e7.__data__;
  return KI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Pu = YI, XI = Pu;
function JI(e7) {
  var t = XI(this, e7).delete(e7);
  return this.size -= t ? 1 : 0, t;
}
var QI = JI, ZI = Pu;
function tE(e7) {
  return ZI(this, e7).get(e7);
}
var eE = tE, rE = Pu;
function nE(e7) {
  return rE(this, e7).has(e7);
}
var iE = nE, aE = Pu;
function oE(e7, t) {
  var r = aE(this, e7), n = r.size;
  return r.set(e7, t), this.size += r.size == n ? 0 : 1, this;
}
var sE = oE, cE = qI, uE = QI, lE = eE, fE = iE, hE = sE;
function va(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
va.prototype.clear = cE;
va.prototype.delete = uE;
va.prototype.get = lE;
va.prototype.has = fE;
va.prototype.set = hE;
var $d = va, x_ = $d, dE = "Expected a function";
function Md(e7, t) {
  if (typeof e7 != "function" || t != null && typeof t != "function") throw new TypeError(dE);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e7.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Md.Cache || x_)(), r;
}
Md.Cache = x_;
var A_ = Md;
const pE = Bt(A_);
var yE = A_, mE = 500;
function vE(e7) {
  var t = yE(e7, function(n) {
    return r.size === mE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var gE = vE, bE = gE, _E = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wE = /\\(\\)?/g, SE = bE(function(e7) {
  var t = [];
  return e7.charCodeAt(0) === 46 && t.push(""), e7.replace(_E, function(r, n, i, a) {
    t.push(i ? a.replace(wE, "$1") : n || r);
  }), t;
}), OE = SE;
function xE(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = Array(n); ++r < n; ) i[r] = t(e7[r], r, e7);
  return i;
}
var Dd = xE, xy = Zo, AE = Dd, PE = $e, TE = da, Ay = xy ? xy.prototype : void 0, Py = Ay ? Ay.toString : void 0;
function P_(e7) {
  if (typeof e7 == "string") return e7;
  if (PE(e7)) return AE(e7, P_) + "";
  if (TE(e7)) return Py ? Py.call(e7) : "";
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var IE = P_, EE = IE;
function $E(e7) {
  return e7 == null ? "" : EE(e7);
}
var T_ = $E, ME = $e, DE = Pd, NE = OE, CE = T_;
function jE(e7, t) {
  return ME(e7) ? e7 : DE(e7, t) ? [e7] : NE(CE(e7));
}
var I_ = jE, BE = da;
function RE(e7) {
  if (typeof e7 == "string" || BE(e7)) return e7;
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var Tu = RE, kE = I_, LE = Tu;
function FE(e7, t) {
  t = kE(t, e7);
  for (var r = 0, n = t.length; e7 != null && r < n; ) e7 = e7[LE(t[r++])];
  return r && r == n ? e7 : void 0;
}
var Nd = FE, UE = Nd;
function zE(e7, t, r) {
  var n = e7 == null ? void 0 : UE(e7, t);
  return n === void 0 ? r : n;
}
var E_ = zE;
const Ye = Bt(E_);
function WE(e7) {
  return e7 == null;
}
var VE = WE;
const st = Bt(VE);
var qE = Jr, GE = $e, HE = Qr, KE = "[object String]";
function YE(e7) {
  return typeof e7 == "string" || !GE(e7) && HE(e7) && qE(e7) == KE;
}
var XE = YE;
const Hn = Bt(XE);
var $_ = { exports: {} }, $t = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Cd = Symbol.for("react.element"), jd = Symbol.for("react.portal"), Iu = Symbol.for("react.fragment"), Eu = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), Mu = Symbol.for("react.provider"), Du = Symbol.for("react.context"), JE = Symbol.for("react.server_context"), Nu = Symbol.for("react.forward_ref"), Cu = Symbol.for("react.suspense"), ju = Symbol.for("react.suspense_list"), Bu = Symbol.for("react.memo"), Ru = Symbol.for("react.lazy"), QE = Symbol.for("react.offscreen"), M_;
M_ = Symbol.for("react.module.reference");
function Ze(e7) {
  if (typeof e7 == "object" && e7 !== null) {
    var t = e7.$$typeof;
    switch (t) {
      case Cd:
        switch (e7 = e7.type, e7) {
          case Iu:
          case $u:
          case Eu:
          case Cu:
          case ju:
            return e7;
          default:
            switch (e7 = e7 && e7.$$typeof, e7) {
              case JE:
              case Du:
              case Nu:
              case Ru:
              case Bu:
              case Mu:
                return e7;
              default:
                return t;
            }
        }
      case jd:
        return t;
    }
  }
}
$t.ContextConsumer = Du;
$t.ContextProvider = Mu;
$t.Element = Cd;
$t.ForwardRef = Nu;
$t.Fragment = Iu;
$t.Lazy = Ru;
$t.Memo = Bu;
$t.Portal = jd;
$t.Profiler = $u;
$t.StrictMode = Eu;
$t.Suspense = Cu;
$t.SuspenseList = ju;
$t.isAsyncMode = function() {
  return false;
};
$t.isConcurrentMode = function() {
  return false;
};
$t.isContextConsumer = function(e7) {
  return Ze(e7) === Du;
};
$t.isContextProvider = function(e7) {
  return Ze(e7) === Mu;
};
$t.isElement = function(e7) {
  return typeof e7 == "object" && e7 !== null && e7.$$typeof === Cd;
};
$t.isForwardRef = function(e7) {
  return Ze(e7) === Nu;
};
$t.isFragment = function(e7) {
  return Ze(e7) === Iu;
};
$t.isLazy = function(e7) {
  return Ze(e7) === Ru;
};
$t.isMemo = function(e7) {
  return Ze(e7) === Bu;
};
$t.isPortal = function(e7) {
  return Ze(e7) === jd;
};
$t.isProfiler = function(e7) {
  return Ze(e7) === $u;
};
$t.isStrictMode = function(e7) {
  return Ze(e7) === Eu;
};
$t.isSuspense = function(e7) {
  return Ze(e7) === Cu;
};
$t.isSuspenseList = function(e7) {
  return Ze(e7) === ju;
};
$t.isValidElementType = function(e7) {
  return typeof e7 == "string" || typeof e7 == "function" || e7 === Iu || e7 === $u || e7 === Eu || e7 === Cu || e7 === ju || e7 === QE || typeof e7 == "object" && e7 !== null && (e7.$$typeof === Ru || e7.$$typeof === Bu || e7.$$typeof === Mu || e7.$$typeof === Du || e7.$$typeof === Nu || e7.$$typeof === M_ || e7.getModuleId !== void 0);
};
$t.typeOf = Ze;
$_.exports = $t;
var ZE = $_.exports, t$ = Jr, e$ = Qr, r$ = "[object Number]";
function n$(e7) {
  return typeof e7 == "number" || e$(e7) && t$(e7) == r$;
}
var D_ = n$;
const i$ = Bt(D_);
var a$ = D_;
function o$(e7) {
  return a$(e7) && e7 != +e7;
}
var s$ = o$;
const ga = Bt(s$);
var sr = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, jn = function(t) {
  return Hn(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return i$(t) && !ga(t);
}, c$ = function(t) {
  return st(t);
}, ie = function(t) {
  return L(t) || Hn(t);
}, u$ = 0, ei = function(t) {
  var r = ++u$;
  return "".concat(t || "").concat(r);
}, Kn = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && !Hn(t)) return n;
  var a;
  if (jn(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return ga(a) && (a = n), i && a > r && (a = r), a;
}, cn = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, l$ = function(t) {
  if (!Array.isArray(t)) return false;
  for (var r = t.length, n = {}, i = 0; i < r; i++) if (!n[t[i]]) n[t[i]] = true;
  else return true;
  return false;
}, Ht = function(t, r) {
  return L(t) && L(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function yc(e7, t, r) {
  return !e7 || !e7.length ? null : e7.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ye(n, t)) === r;
  });
}
var f$ = function(t) {
  if (!t || !t.length) return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++) u = t[f].cx || 0, l = t[f].cy || 0, n += u, i += l, a += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return { xmin: s, xmax: c, a: h, b: (i - h * n) / r };
}, h$ = function(t, r) {
  return L(t) && L(r) ? t - r : Hn(t) && Hn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function $i(e7, t) {
  for (var r in e7) if ({}.hasOwnProperty.call(e7, r) && (!{}.hasOwnProperty.call(t, r) || e7[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e7, n)) return false;
  return true;
}
function _f(e7) {
  "@babel/helpers - typeof";
  return _f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _f(e7);
}
var d$ = ["viewBox", "children"], p$ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Ty = ["points", "pathLength"], Il = { svg: d$, polygon: Ty, polyline: Ty }, Bd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], mc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (B.isValidElement(t) && (n = t.props), !pa(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Bd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, y$ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, uo = function(t, r, n) {
  if (!pa(t) || _f(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Bd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = y$(o, r, n));
  }), i;
}, m$ = ["children"], v$ = ["children"];
function Iy(e7, t) {
  if (e7 == null) return {};
  var r = g$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function g$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function wf(e7) {
  "@babel/helpers - typeof";
  return wf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wf(e7);
}
var Ey = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, Ur = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, $y = null, El = null, Rd = function e(t) {
  if (t === $y && Array.isArray(El)) return El;
  var r = [];
  return B.Children.forEach(t, function(n) {
    st(n) || (ZE.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), El = r, $y = t, r;
};
function Te(e7, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Ur(i);
  }) : n = [Ur(t)], Rd(e7).forEach(function(i) {
    var a = Ye(i, "type.displayName") || Ye(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function je(e7, t) {
  var r = Te(e7, t);
  return r && r[0];
}
var My = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, b$ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], _$ = function(t) {
  return t && t.type && Hn(t.type) && b$.indexOf(t.type) >= 0;
}, N_ = function(t) {
  return t && wf(t) === "object" && "clipDot" in t;
}, w$ = function(t, r, n, i) {
  var a, o = (a = Il == null ? void 0 : Il[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !lt(t) && (i && o.includes(r) || p$.includes(r)) || n && Bd.includes(r);
}, ct = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (B.isValidElement(t) && (i = t.props), !pa(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    w$((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Sf = function e2(t, r) {
  if (t === r) return true;
  var n = B.Children.count(t);
  if (n !== B.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return Dy(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!Dy(a, o)) return false;
  }
  return true;
}, Dy = function(t, r) {
  if (st(t) && st(r)) return true;
  if (!st(t) && !st(r)) {
    var n = t.props || {}, i = n.children, a = Iy(n, m$), o = r.props || {}, s = o.children, c = Iy(o, v$);
    return i && s ? $i(a, c) && Sf(i, s) : !i && !s ? $i(a, c) : false;
  }
  return false;
}, Ny = function(t, r) {
  var n = [], i = {};
  return Rd(t).forEach(function(a, o) {
    if (_$(a)) n.push(a);
    else if (a) {
      var s = Ur(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = true;
      }
    }
  }), n;
}, S$ = function(t) {
  var r = t && t.type;
  return r && Ey[r] ? Ey[r] : null;
}, O$ = function(t, r) {
  return Rd(r).indexOf(t);
}, x$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Of.apply(this, arguments);
}
function A$(e7, t) {
  if (e7 == null) return {};
  var r = P$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function P$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function xf(e7) {
  var t = e7.children, r = e7.width, n = e7.height, i = e7.viewBox, a = e7.className, o = e7.style, s = e7.title, c = e7.desc, u = A$(e7, x$), l = i || { width: r, height: n, x: 0, y: 0 }, f = mt("recharts-surface", a);
  return A.createElement("svg", Of({}, ct(u, true, "svg"), { className: f, width: r, height: n, style: o, viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height) }), A.createElement("title", null, s), A.createElement("desc", null, c), t);
}
var T$ = ["children", "className"];
function Af() {
  return Af = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Af.apply(this, arguments);
}
function I$(e7, t) {
  if (e7 == null) return {};
  var r = E$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function E$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var St = A.forwardRef(function(e7, t) {
  var r = e7.children, n = e7.className, i = I$(e7, T$), a = mt("recharts-layer", n);
  return A.createElement("g", Af({ className: a }, ct(i, true), { ref: t }), r);
}), zr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function $$(e7, t, r) {
  var n = -1, i = e7.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e7[n + t];
  return a;
}
var M$ = $$, D$ = M$;
function N$(e7, t, r) {
  var n = e7.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e7 : D$(e7, t, r);
}
var C$ = N$, j$ = "\\ud800-\\udfff", B$ = "\\u0300-\\u036f", R$ = "\\ufe20-\\ufe2f", k$ = "\\u20d0-\\u20ff", L$ = B$ + R$ + k$, F$ = "\\ufe0e\\ufe0f", U$ = "\\u200d", z$ = RegExp("[" + U$ + j$ + L$ + F$ + "]");
function W$(e7) {
  return z$.test(e7);
}
var C_ = W$;
function V$(e7) {
  return e7.split("");
}
var q$ = V$, j_ = "\\ud800-\\udfff", G$ = "\\u0300-\\u036f", H$ = "\\ufe20-\\ufe2f", K$ = "\\u20d0-\\u20ff", Y$ = G$ + H$ + K$, X$ = "\\ufe0e\\ufe0f", J$ = "[" + j_ + "]", Pf = "[" + Y$ + "]", Tf = "\\ud83c[\\udffb-\\udfff]", Q$ = "(?:" + Pf + "|" + Tf + ")", B_ = "[^" + j_ + "]", R_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", k_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", Z$ = "\\u200d", L_ = Q$ + "?", F_ = "[" + X$ + "]?", tM = "(?:" + Z$ + "(?:" + [B_, R_, k_].join("|") + ")" + F_ + L_ + ")*", eM = F_ + L_ + tM, rM = "(?:" + [B_ + Pf + "?", Pf, R_, k_, J$].join("|") + ")", nM = RegExp(Tf + "(?=" + Tf + ")|" + rM + eM, "g");
function iM(e7) {
  return e7.match(nM) || [];
}
var aM = iM, oM = q$, sM = C_, cM = aM;
function uM(e7) {
  return sM(e7) ? cM(e7) : oM(e7);
}
var lM = uM, fM = C$, hM = C_, dM = lM, pM = T_;
function yM(e7) {
  return function(t) {
    t = pM(t);
    var r = hM(t) ? dM(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? fM(r, 1).join("") : t.slice(1);
    return n[e7]() + i;
  };
}
var mM = yM, vM = mM, gM = vM("toUpperCase"), bM = gM;
const ku = Bt(bM);
function jt(e7) {
  return function() {
    return e7;
  };
}
const U_ = Math.cos, vc = Math.sin, fr = Math.sqrt, gc = Math.PI, Lu = 2 * gc, If = Math.PI, Ef = 2 * If, Mn = 1e-6, _M = Ef - Mn;
function z_(e7) {
  this._ += e7[0];
  for (let t = 1, r = e7.length; t < r; ++t) this._ += arguments[t] + e7[t];
}
function wM(e7) {
  let t = Math.floor(e7);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e7}`);
  if (t > 15) return z_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class SM {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? z_ : wM(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = n - t, u = i - r, l = o - t, f = s - r, h = l * l + f * f;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (h > Mn) if (!(Math.abs(f * c - u * l) > Mn) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, y = i - s, m = c * c + u * u, p = d * d + y * y, _ = Math.sqrt(m), g = Math.sqrt(h), w = a * Math.tan((If - Math.acos((m + h - p) / (2 * _ * g))) / 2), S = w / g, v = w / _;
      Math.abs(S - 1) > Mn && this._append`L${t + S * l},${r + S * f}`, this._append`A${a},${a},0,0,${+(f * d > l * y)},${this._x1 = t + v * c},${this._y1 = r + v * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Mn || Math.abs(this._y1 - l) > Mn) && this._append`L${u},${l}`, n && (h < 0 && (h = h % Ef + Ef), h > _M ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > Mn && this._append`A${n},${n},0,${+(h >= If)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function kd(e7) {
  let t = 3;
  return e7.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e7;
  }, () => new SM(t);
}
function Ld(e7) {
  return typeof e7 == "object" && "length" in e7 ? e7 : Array.from(e7);
}
function W_(e7) {
  this._context = e7;
}
W_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e7, t) {
  switch (e7 = +e7, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e7, t) : this._context.moveTo(e7, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e7, t);
      break;
  }
} };
function Fu(e7) {
  return new W_(e7);
}
function V_(e7) {
  return e7[0];
}
function q_(e7) {
  return e7[1];
}
function G_(e7, t) {
  var r = jt(true), n = null, i = Fu, a = null, o = kd(s);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? V_ : jt(e7), t = typeof t == "function" ? t : t === void 0 ? q_ : jt(t);
  function s(c) {
    var u, l = (c = Ld(c)).length, f, h = false, d;
    for (n == null && (a = i(d = o())), u = 0; u <= l; ++u) !(u < l && r(f = c[u], u, c)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e7(f, u, c), +t(f, u, c));
    if (d) return a = null, d + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e7 = typeof c == "function" ? c : jt(+c), s) : e7;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : jt(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : jt(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), s) : i;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), s) : n;
  }, s;
}
function ls(e7, t, r) {
  var n = null, i = jt(true), a = null, o = Fu, s = null, c = kd(u);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? V_ : jt(+e7), t = typeof t == "function" ? t : jt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? q_ : jt(+r);
  function u(f) {
    var h, d, y, m = (f = Ld(f)).length, p, _ = false, g, w = new Array(m), S = new Array(m);
    for (a == null && (s = o(g = c())), h = 0; h <= m; ++h) {
      if (!(h < m && i(p = f[h], h, f)) === _) if (_ = !_) d = h, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y) s.point(w[y], S[y]);
        s.lineEnd(), s.areaEnd();
      }
      _ && (w[h] = +e7(p, h, f), S[h] = +t(p, h, f), s.point(n ? +n(p, h, f) : w[h], r ? +r(p, h, f) : S[h]));
    }
    if (g) return s = null, g + "" || null;
  }
  function l() {
    return G_().defined(i).curve(o).context(a);
  }
  return u.x = function(f) {
    return arguments.length ? (e7 = typeof f == "function" ? f : jt(+f), n = null, u) : e7;
  }, u.x0 = function(f) {
    return arguments.length ? (e7 = typeof f == "function" ? f : jt(+f), u) : e7;
  }, u.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : jt(+f), u) : n;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : jt(+f), r = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : jt(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : jt(+f), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e7).y(t);
  }, u.lineY1 = function() {
    return l().x(e7).y(r);
  }, u.lineX1 = function() {
    return l().x(n).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : jt(!!f), u) : i;
  }, u.curve = function(f) {
    return arguments.length ? (o = f, a != null && (s = o(a)), u) : o;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? a = s = null : s = o(a = f), u) : a;
  }, u;
}
class H_ {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function OM(e7) {
  return new H_(e7, true);
}
function xM(e7) {
  return new H_(e7, false);
}
const Fd = { draw(e7, t) {
  const r = fr(t / gc);
  e7.moveTo(r, 0), e7.arc(0, 0, r, 0, Lu);
} }, AM = { draw(e7, t) {
  const r = fr(t / 5) / 2;
  e7.moveTo(-3 * r, -r), e7.lineTo(-r, -r), e7.lineTo(-r, -3 * r), e7.lineTo(r, -3 * r), e7.lineTo(r, -r), e7.lineTo(3 * r, -r), e7.lineTo(3 * r, r), e7.lineTo(r, r), e7.lineTo(r, 3 * r), e7.lineTo(-r, 3 * r), e7.lineTo(-r, r), e7.lineTo(-3 * r, r), e7.closePath();
} }, K_ = fr(1 / 3), PM = K_ * 2, TM = { draw(e7, t) {
  const r = fr(t / PM), n = r * K_;
  e7.moveTo(0, -r), e7.lineTo(n, 0), e7.lineTo(0, r), e7.lineTo(-n, 0), e7.closePath();
} }, IM = { draw(e7, t) {
  const r = fr(t), n = -r / 2;
  e7.rect(n, n, r, r);
} }, EM = 0.8908130915292852, Y_ = vc(gc / 10) / vc(7 * gc / 10), $M = vc(Lu / 10) * Y_, MM = -U_(Lu / 10) * Y_, DM = { draw(e7, t) {
  const r = fr(t * EM), n = $M * r, i = MM * r;
  e7.moveTo(0, -r), e7.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = Lu * a / 5, s = U_(o), c = vc(o);
    e7.lineTo(c * r, -s * r), e7.lineTo(s * n - c * i, c * n + s * i);
  }
  e7.closePath();
} }, $l = fr(3), NM = { draw(e7, t) {
  const r = -fr(t / ($l * 3));
  e7.moveTo(0, r * 2), e7.lineTo(-$l * r, -r), e7.lineTo($l * r, -r), e7.closePath();
} }, Le = -0.5, Fe = fr(3) / 2, $f = 1 / fr(12), CM = ($f / 2 + 1) * 3, jM = { draw(e7, t) {
  const r = fr(t / CM), n = r / 2, i = r * $f, a = n, o = r * $f + r, s = -a, c = o;
  e7.moveTo(n, i), e7.lineTo(a, o), e7.lineTo(s, c), e7.lineTo(Le * n - Fe * i, Fe * n + Le * i), e7.lineTo(Le * a - Fe * o, Fe * a + Le * o), e7.lineTo(Le * s - Fe * c, Fe * s + Le * c), e7.lineTo(Le * n + Fe * i, Le * i - Fe * n), e7.lineTo(Le * a + Fe * o, Le * o - Fe * a), e7.lineTo(Le * s + Fe * c, Le * c - Fe * s), e7.closePath();
} };
function BM(e7, t) {
  let r = null, n = kd(i);
  e7 = typeof e7 == "function" ? e7 : jt(e7 || Fd), t = typeof t == "function" ? t : jt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e7.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e7 = typeof a == "function" ? a : jt(a), i) : e7;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : jt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function bc() {
}
function _c(e7, t, r) {
  e7._context.bezierCurveTo((2 * e7._x0 + e7._x1) / 3, (2 * e7._y0 + e7._y1) / 3, (e7._x0 + 2 * e7._x1) / 3, (e7._y0 + 2 * e7._y1) / 3, (e7._x0 + 4 * e7._x1 + t) / 6, (e7._y0 + 4 * e7._y1 + r) / 6);
}
function X_(e7) {
  this._context = e7;
}
X_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      _c(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e7, t) {
  switch (e7 = +e7, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e7, t) : this._context.moveTo(e7, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      _c(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function RM(e7) {
  return new X_(e7);
}
function J_(e7) {
  this._context = e7;
}
J_.prototype = { areaStart: bc, areaEnd: bc, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e7, t) {
  switch (e7 = +e7, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e7, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e7, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e7, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e7) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      _c(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function kM(e7) {
  return new J_(e7);
}
function Q_(e7) {
  this._context = e7;
}
Q_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e7, t) {
  switch (e7 = +e7, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e7) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      _c(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function LM(e7) {
  return new Q_(e7);
}
function Z_(e7) {
  this._context = e7;
}
Z_.prototype = { areaStart: bc, areaEnd: bc, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e7, t) {
  e7 = +e7, t = +t, this._point ? this._context.lineTo(e7, t) : (this._point = 1, this._context.moveTo(e7, t));
} };
function FM(e7) {
  return new Z_(e7);
}
function Cy(e7) {
  return e7 < 0 ? -1 : 1;
}
function jy(e7, t, r) {
  var n = e7._x1 - e7._x0, i = t - e7._x1, a = (e7._y1 - e7._y0) / (n || i < 0 && -0), o = (r - e7._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (Cy(a) + Cy(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function By(e7, t) {
  var r = e7._x1 - e7._x0;
  return r ? (3 * (e7._y1 - e7._y0) / r - t) / 2 : t;
}
function Ml(e7, t, r) {
  var n = e7._x0, i = e7._y0, a = e7._x1, o = e7._y1, s = (a - n) / 3;
  e7._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function wc(e7) {
  this._context = e7;
}
wc.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      Ml(this, this._t0, By(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e7, t) {
  var r = NaN;
  if (e7 = +e7, t = +t, !(e7 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e7, t) : this._context.moveTo(e7, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, Ml(this, By(this, r = jy(this, e7, t)), r);
        break;
      default:
        Ml(this, this._t0, r = jy(this, e7, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function tw(e7) {
  this._context = new ew(e7);
}
(tw.prototype = Object.create(wc.prototype)).point = function(e7, t) {
  wc.prototype.point.call(this, t, e7);
};
function ew(e7) {
  this._context = e7;
}
ew.prototype = { moveTo: function(e7, t) {
  this._context.moveTo(t, e7);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e7, t) {
  this._context.lineTo(t, e7);
}, bezierCurveTo: function(e7, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e7, n, r, a, i);
} };
function UM(e7) {
  return new wc(e7);
}
function zM(e7) {
  return new tw(e7);
}
function rw(e7) {
  this._context = e7;
}
rw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e7 = this._x, t = this._y, r = e7.length;
  if (r) if (this._line ? this._context.lineTo(e7[0], t[0]) : this._context.moveTo(e7[0], t[0]), r === 2) this._context.lineTo(e7[1], t[1]);
  else for (var n = Ry(e7), i = Ry(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e7[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e7, t) {
  this._x.push(+e7), this._y.push(+t);
} };
function Ry(e7) {
  var t, r = e7.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e7[0] + 2 * e7[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e7[t] + 2 * e7[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e7[r - 1] + e7[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e7[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e7[t + 1] - i[t + 1];
  return [i, a];
}
function WM(e7) {
  return new rw(e7);
}
function Uu(e7, t) {
  this._context = e7, this._t = t;
}
Uu.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e7, t) {
  switch (e7 = +e7, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e7, t) : this._context.moveTo(e7, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e7, t);
      else {
        var r = this._x * (1 - this._t) + e7 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e7, this._y = t;
} };
function VM(e7) {
  return new Uu(e7, 0.5);
}
function qM(e7) {
  return new Uu(e7, 0);
}
function GM(e7) {
  return new Uu(e7, 1);
}
function Li(e7, t) {
  if ((o = e7.length) > 1) for (var r = 1, n, i, a = e7[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e7[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Mf(e7) {
  for (var t = e7.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function HM(e7, t) {
  return e7[t];
}
function KM(e7) {
  const t = [];
  return t.key = e7, t;
}
function YM() {
  var e7 = jt([]), t = Mf, r = Li, n = HM;
  function i(a) {
    var o = Array.from(e7.apply(this, arguments), KM), s, c = o.length, u = -1, l;
    for (const f of a) for (s = 0, ++u; s < c; ++s) (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = Ld(t(o)); s < c; ++s) o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e7 = typeof a == "function" ? a : jt(Array.from(a)), i) : e7;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : jt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Mf : typeof a == "function" ? a : jt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Li, i) : r;
  }, i;
}
function XM(e7, t) {
  if ((n = e7.length) > 0) {
    for (var r, n, i = 0, a = e7[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e7[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e7[r][i][1] /= o;
    }
    Li(e7, t);
  }
}
function JM(e7, t) {
  if ((i = e7.length) > 0) {
    for (var r = 0, n = e7[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e7[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Li(e7, t);
  }
}
function QM(e7, t) {
  if (!(!((o = e7.length) > 0) || !((a = (i = e7[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e7[t[s]], f = l[n][1] || 0, h = l[n - 1][1] || 0, d = (f - h) / 2, y = 0; y < s; ++y) {
          var m = e7[t[y]], p = m[n][1] || 0, _ = m[n - 1][1] || 0;
          d += p - _;
        }
        c += f, u += d * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= u / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, Li(e7, t);
  }
}
function lo(e7) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e7);
}
var ZM = ["type", "size", "sizeType"];
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Df.apply(this, arguments);
}
function ky(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ly(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ky(Object(r), true).forEach(function(n) {
      tD(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function tD(e7, t, r) {
  return t = eD(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function eD(e7) {
  var t = rD(e7, "string");
  return lo(t) == "symbol" ? t : t + "";
}
function rD(e7, t) {
  if (lo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function nD(e7, t) {
  if (e7 == null) return {};
  var r = iD(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function iD(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var nw = { symbolCircle: Fd, symbolCross: AM, symbolDiamond: TM, symbolSquare: IM, symbolStar: DM, symbolTriangle: NM, symbolWye: jM }, aD = Math.PI / 180, oD = function(t) {
  var r = "symbol".concat(ku(t));
  return nw[r] || Fd;
}, sD = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * aD;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, cD = function(t, r) {
  nw["symbol".concat(ku(t))] = r;
}, zu = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = nD(t, ZM), u = Ly(Ly({}, c), {}, { type: n, size: a, sizeType: s }), l = function() {
    var p = oD(n), _ = BM().type(p).size(sD(a, s, n));
    return _();
  }, f = u.className, h = u.cx, d = u.cy, y = ct(u, true);
  return h === +h && d === +d && a === +a ? A.createElement("path", Df({}, y, { className: mt("recharts-symbols", f), transform: "translate(".concat(h, ", ").concat(d, ")"), d: l() })) : null;
};
zu.registerSymbol = cD;
function Fi(e7) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e7);
}
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Nf.apply(this, arguments);
}
function Fy(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uD(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fy(Object(r), true).forEach(function(n) {
      fo(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function lD(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function fD(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, aw(n.key), n);
  }
}
function hD(e7, t, r) {
  return t && fD(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function dD(e7, t, r) {
  return t = Sc(t), pD(e7, iw() ? Reflect.construct(t, r || [], Sc(e7).constructor) : t.apply(e7, r));
}
function pD(e7, t) {
  if (t && (Fi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yD(e7);
}
function yD(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function iw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iw = function() {
    return !!e7;
  })();
}
function Sc(e7) {
  return Sc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sc(e7);
}
function mD(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Cf(e7, t);
}
function Cf(e7, t) {
  return Cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cf(e7, t);
}
function fo(e7, t, r) {
  return t = aw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function aw(e7) {
  var t = vD(e7, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function vD(e7, t) {
  if (Fi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Ue = 32, Ud = function(e7) {
  function t() {
    return lD(this, t), dD(this, t, arguments);
  }
  return mD(t, e7), hD(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Ue / 2, o = Ue / 6, s = Ue / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return A.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Ue, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return A.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ue, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return A.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"), className: "recharts-legend-icon" });
    if (A.isValidElement(n.legendIcon)) {
      var u = uD({}, n);
      return delete u.legendIcon, A.cloneElement(n.legendIcon, u);
    }
    return A.createElement(zu, { fill: c, cx: a, cy: a, size: Ue, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = { x: 0, y: 0, width: Ue, height: Ue }, f = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(d, y) {
      var m = d.formatter || c, p = mt(fo(fo({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", d.inactive));
      if (d.type === "none") return null;
      var _ = lt(d.value) ? null : d.value;
      zr(!lt(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var g = d.inactive ? u : d.color;
      return A.createElement("li", Nf({ className: p, style: f, key: "legend-item-".concat(y) }, uo(n.props, d, y)), A.createElement(xf, { width: o, height: o, viewBox: l, style: h }, n.renderIcon(d)), A.createElement("span", { className: "recharts-legend-item-text", style: { color: g } }, m ? m(_, d, y) : _));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return A.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(B.PureComponent);
fo(Ud, "displayName", "Legend");
fo(Ud, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var gD = Au;
function bD() {
  this.__data__ = new gD(), this.size = 0;
}
var _D = bD;
function wD(e7) {
  var t = this.__data__, r = t.delete(e7);
  return this.size = t.size, r;
}
var SD = wD;
function OD(e7) {
  return this.__data__.get(e7);
}
var xD = OD;
function AD(e7) {
  return this.__data__.has(e7);
}
var PD = AD, TD = Au, ID = Ed, ED = $d, $D = 200;
function MD(e7, t) {
  var r = this.__data__;
  if (r instanceof TD) {
    var n = r.__data__;
    if (!ID || n.length < $D - 1) return n.push([e7, t]), this.size = ++r.size, this;
    r = this.__data__ = new ED(n);
  }
  return r.set(e7, t), this.size = r.size, this;
}
var DD = MD, ND = Au, CD = _D, jD = SD, BD = xD, RD = PD, kD = DD;
function ba(e7) {
  var t = this.__data__ = new ND(e7);
  this.size = t.size;
}
ba.prototype.clear = CD;
ba.prototype.delete = jD;
ba.prototype.get = BD;
ba.prototype.has = RD;
ba.prototype.set = kD;
var ow = ba, LD = "__lodash_hash_undefined__";
function FD(e7) {
  return this.__data__.set(e7, LD), this;
}
var UD = FD;
function zD(e7) {
  return this.__data__.has(e7);
}
var WD = zD, VD = $d, qD = UD, GD = WD;
function Oc(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.__data__ = new VD(); ++t < r; ) this.add(e7[t]);
}
Oc.prototype.add = Oc.prototype.push = qD;
Oc.prototype.has = GD;
var sw = Oc;
function HD(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (t(e7[r], r, e7)) return true;
  return false;
}
var cw = HD;
function KD(e7, t) {
  return e7.has(t);
}
var uw = KD, YD = sw, XD = cw, JD = uw, QD = 1, ZD = 2;
function tN(e7, t, r, n, i, a) {
  var o = r & QD, s = e7.length, c = t.length;
  if (s != c && !(o && c > s)) return false;
  var u = a.get(e7), l = a.get(t);
  if (u && l) return u == t && l == e7;
  var f = -1, h = true, d = r & ZD ? new YD() : void 0;
  for (a.set(e7, t), a.set(t, e7); ++f < s; ) {
    var y = e7[f], m = t[f];
    if (n) var p = o ? n(m, y, f, t, e7, a) : n(y, m, f, e7, t, a);
    if (p !== void 0) {
      if (p) continue;
      h = false;
      break;
    }
    if (d) {
      if (!XD(t, function(_, g) {
        if (!JD(d, g) && (y === _ || i(y, _, r, n, a))) return d.push(g);
      })) {
        h = false;
        break;
      }
    } else if (!(y === m || i(y, m, r, n, a))) {
      h = false;
      break;
    }
  }
  return a.delete(e7), a.delete(t), h;
}
var lw = tN, eN = Er, rN = eN.Uint8Array, nN = rN;
function iN(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var aN = iN;
function oN(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var zd = oN, Uy = Zo, zy = nN, sN = Id, cN = lw, uN = aN, lN = zd, fN = 1, hN = 2, dN = "[object Boolean]", pN = "[object Date]", yN = "[object Error]", mN = "[object Map]", vN = "[object Number]", gN = "[object RegExp]", bN = "[object Set]", _N = "[object String]", wN = "[object Symbol]", SN = "[object ArrayBuffer]", ON = "[object DataView]", Wy = Uy ? Uy.prototype : void 0, Dl = Wy ? Wy.valueOf : void 0;
function xN(e7, t, r, n, i, a, o) {
  switch (r) {
    case ON:
      if (e7.byteLength != t.byteLength || e7.byteOffset != t.byteOffset) return false;
      e7 = e7.buffer, t = t.buffer;
    case SN:
      return !(e7.byteLength != t.byteLength || !a(new zy(e7), new zy(t)));
    case dN:
    case pN:
    case vN:
      return sN(+e7, +t);
    case yN:
      return e7.name == t.name && e7.message == t.message;
    case gN:
    case _N:
      return e7 == t + "";
    case mN:
      var s = uN;
    case bN:
      var c = n & fN;
      if (s || (s = lN), e7.size != t.size && !c) return false;
      var u = o.get(e7);
      if (u) return u == t;
      n |= hN, o.set(e7, t);
      var l = cN(s(e7), s(t), n, i, a, o);
      return o.delete(e7), l;
    case wN:
      if (Dl) return Dl.call(e7) == Dl.call(t);
  }
  return false;
}
var AN = xN;
function PN(e7, t) {
  for (var r = -1, n = t.length, i = e7.length; ++r < n; ) e7[i + r] = t[r];
  return e7;
}
var fw = PN, TN = fw, IN = $e;
function EN(e7, t, r) {
  var n = t(e7);
  return IN(e7) ? n : TN(n, r(e7));
}
var $N = EN;
function MN(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = 0, a = []; ++r < n; ) {
    var o = e7[r];
    t(o, r, e7) && (a[i++] = o);
  }
  return a;
}
var DN = MN;
function NN() {
  return [];
}
var CN = NN, jN = DN, BN = CN, RN = Object.prototype, kN = RN.propertyIsEnumerable, Vy = Object.getOwnPropertySymbols, LN = Vy ? function(e7) {
  return e7 == null ? [] : (e7 = Object(e7), jN(Vy(e7), function(t) {
    return kN.call(e7, t);
  }));
} : BN, FN = LN;
function UN(e7, t) {
  for (var r = -1, n = Array(e7); ++r < e7; ) n[r] = t(r);
  return n;
}
var zN = UN, WN = Jr, VN = Qr, qN = "[object Arguments]";
function GN(e7) {
  return VN(e7) && WN(e7) == qN;
}
var HN = GN, qy = HN, KN = Qr, hw = Object.prototype, YN = hw.hasOwnProperty, XN = hw.propertyIsEnumerable, JN = qy(/* @__PURE__ */ function() {
  return arguments;
}()) ? qy : function(e7) {
  return KN(e7) && YN.call(e7, "callee") && !XN.call(e7, "callee");
}, Wd = JN, xc = { exports: {} };
function QN() {
  return false;
}
var ZN = QN;
xc.exports;
(function(e7, t) {
  var r = Er, n = ZN, i = t && !t.nodeType && t, a = i && true && e7 && !e7.nodeType && e7, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e7.exports = u;
})(xc, xc.exports);
var dw = xc.exports, tC = 9007199254740991, eC = /^(?:0|[1-9]\d*)$/;
function rC(e7, t) {
  var r = typeof e7;
  return t = t ?? tC, !!t && (r == "number" || r != "symbol" && eC.test(e7)) && e7 > -1 && e7 % 1 == 0 && e7 < t;
}
var Vd = rC, nC = 9007199254740991;
function iC(e7) {
  return typeof e7 == "number" && e7 > -1 && e7 % 1 == 0 && e7 <= nC;
}
var qd = iC, aC = Jr, oC = qd, sC = Qr, cC = "[object Arguments]", uC = "[object Array]", lC = "[object Boolean]", fC = "[object Date]", hC = "[object Error]", dC = "[object Function]", pC = "[object Map]", yC = "[object Number]", mC = "[object Object]", vC = "[object RegExp]", gC = "[object Set]", bC = "[object String]", _C = "[object WeakMap]", wC = "[object ArrayBuffer]", SC = "[object DataView]", OC = "[object Float32Array]", xC = "[object Float64Array]", AC = "[object Int8Array]", PC = "[object Int16Array]", TC = "[object Int32Array]", IC = "[object Uint8Array]", EC = "[object Uint8ClampedArray]", $C = "[object Uint16Array]", MC = "[object Uint32Array]", kt = {};
kt[OC] = kt[xC] = kt[AC] = kt[PC] = kt[TC] = kt[IC] = kt[EC] = kt[$C] = kt[MC] = true;
kt[cC] = kt[uC] = kt[wC] = kt[lC] = kt[SC] = kt[fC] = kt[hC] = kt[dC] = kt[pC] = kt[yC] = kt[mC] = kt[vC] = kt[gC] = kt[bC] = kt[_C] = false;
function DC(e7) {
  return sC(e7) && oC(e7.length) && !!kt[aC(e7)];
}
var NC = DC;
function CC(e7) {
  return function(t) {
    return e7(t);
  };
}
var pw = CC, Ac = { exports: {} };
Ac.exports;
(function(e7, t) {
  var r = w_, n = t && !t.nodeType && t, i = n && true && e7 && !e7.nodeType && e7, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e7.exports = s;
})(Ac, Ac.exports);
var jC = Ac.exports, BC = NC, RC = pw, Gy = jC, Hy = Gy && Gy.isTypedArray, kC = Hy ? RC(Hy) : BC, yw = kC, LC = zN, FC = Wd, UC = $e, zC = dw, WC = Vd, VC = yw, qC = Object.prototype, GC = qC.hasOwnProperty;
function HC(e7, t) {
  var r = UC(e7), n = !r && FC(e7), i = !r && !n && zC(e7), a = !r && !n && !i && VC(e7), o = r || n || i || a, s = o ? LC(e7.length, String) : [], c = s.length;
  for (var u in e7) (t || GC.call(e7, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || WC(u, c))) && s.push(u);
  return s;
}
var KC = HC, YC = Object.prototype;
function XC(e7) {
  var t = e7 && e7.constructor, r = typeof t == "function" && t.prototype || YC;
  return e7 === r;
}
var JC = XC;
function QC(e7, t) {
  return function(r) {
    return e7(t(r));
  };
}
var mw = QC, ZC = mw, tj = ZC(Object.keys, Object), ej = tj, rj = JC, nj = ej, ij = Object.prototype, aj = ij.hasOwnProperty;
function oj(e7) {
  if (!rj(e7)) return nj(e7);
  var t = [];
  for (var r in Object(e7)) aj.call(e7, r) && r != "constructor" && t.push(r);
  return t;
}
var sj = oj, cj = Td, uj = qd;
function lj(e7) {
  return e7 != null && uj(e7.length) && !cj(e7);
}
var ts = lj, fj = KC, hj = sj, dj = ts;
function pj(e7) {
  return dj(e7) ? fj(e7) : hj(e7);
}
var Wu = pj, yj = $N, mj = FN, vj = Wu;
function gj(e7) {
  return yj(e7, vj, mj);
}
var bj = gj, Ky = bj, _j = 1, wj = Object.prototype, Sj = wj.hasOwnProperty;
function Oj(e7, t, r, n, i, a) {
  var o = r & _j, s = Ky(e7), c = s.length, u = Ky(t), l = u.length;
  if (c != l && !o) return false;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in t : Sj.call(t, h))) return false;
  }
  var d = a.get(e7), y = a.get(t);
  if (d && y) return d == t && y == e7;
  var m = true;
  a.set(e7, t), a.set(t, e7);
  for (var p = o; ++f < c; ) {
    h = s[f];
    var _ = e7[h], g = t[h];
    if (n) var w = o ? n(g, _, h, t, e7, a) : n(_, g, h, e7, t, a);
    if (!(w === void 0 ? _ === g || i(_, g, r, n, a) : w)) {
      m = false;
      break;
    }
    p || (p = h == "constructor");
  }
  if (m && !p) {
    var S = e7.constructor, v = t.constructor;
    S != v && "constructor" in e7 && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof v == "function" && v instanceof v) && (m = false);
  }
  return a.delete(e7), a.delete(t), m;
}
var xj = Oj, Aj = ti, Pj = Er, Tj = Aj(Pj, "DataView"), Ij = Tj, Ej = ti, $j = Er, Mj = Ej($j, "Promise"), Dj = Mj, Nj = ti, Cj = Er, jj = Nj(Cj, "Set"), vw = jj, Bj = ti, Rj = Er, kj = Bj(Rj, "WeakMap"), Lj = kj, jf = Ij, Bf = Ed, Rf = Dj, kf = vw, Lf = Lj, gw = Jr, _a = O_, Yy = "[object Map]", Fj = "[object Object]", Xy = "[object Promise]", Jy = "[object Set]", Qy = "[object WeakMap]", Zy = "[object DataView]", Uj = _a(jf), zj = _a(Bf), Wj = _a(Rf), Vj = _a(kf), qj = _a(Lf), Dn = gw;
(jf && Dn(new jf(new ArrayBuffer(1))) != Zy || Bf && Dn(new Bf()) != Yy || Rf && Dn(Rf.resolve()) != Xy || kf && Dn(new kf()) != Jy || Lf && Dn(new Lf()) != Qy) && (Dn = function(e7) {
  var t = gw(e7), r = t == Fj ? e7.constructor : void 0, n = r ? _a(r) : "";
  if (n) switch (n) {
    case Uj:
      return Zy;
    case zj:
      return Yy;
    case Wj:
      return Xy;
    case Vj:
      return Jy;
    case qj:
      return Qy;
  }
  return t;
});
var Gj = Dn, Nl = ow, Hj = lw, Kj = AN, Yj = xj, tm = Gj, em = $e, rm = dw, Xj = yw, Jj = 1, nm = "[object Arguments]", im = "[object Array]", fs = "[object Object]", Qj = Object.prototype, am = Qj.hasOwnProperty;
function Zj(e7, t, r, n, i, a) {
  var o = em(e7), s = em(t), c = o ? im : tm(e7), u = s ? im : tm(t);
  c = c == nm ? fs : c, u = u == nm ? fs : u;
  var l = c == fs, f = u == fs, h = c == u;
  if (h && rm(e7)) {
    if (!rm(t)) return false;
    o = true, l = false;
  }
  if (h && !l) return a || (a = new Nl()), o || Xj(e7) ? Hj(e7, t, r, n, i, a) : Kj(e7, t, c, r, n, i, a);
  if (!(r & Jj)) {
    var d = l && am.call(e7, "__wrapped__"), y = f && am.call(t, "__wrapped__");
    if (d || y) {
      var m = d ? e7.value() : e7, p = y ? t.value() : t;
      return a || (a = new Nl()), i(m, p, r, n, a);
    }
  }
  return h ? (a || (a = new Nl()), Yj(e7, t, r, n, i, a)) : false;
}
var tB = Zj, eB = tB, om = Qr;
function bw(e7, t, r, n, i) {
  return e7 === t ? true : e7 == null || t == null || !om(e7) && !om(t) ? e7 !== e7 && t !== t : eB(e7, t, r, n, bw, i);
}
var Gd = bw, rB = ow, nB = Gd, iB = 1, aB = 2;
function oB(e7, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e7 == null) return !a;
  for (e7 = Object(e7); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e7[s[0]] : !(s[0] in e7)) return false;
  }
  for (; ++i < a; ) {
    s = r[i];
    var c = s[0], u = e7[c], l = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(c in e7)) return false;
    } else {
      var f = new rB();
      if (n) var h = n(u, l, c, e7, t, f);
      if (!(h === void 0 ? nB(l, u, iB | aB, n, f) : h)) return false;
    }
  }
  return true;
}
var sB = oB, cB = _n;
function uB(e7) {
  return e7 === e7 && !cB(e7);
}
var _w = uB, lB = _w, fB = Wu;
function hB(e7) {
  for (var t = fB(e7), r = t.length; r--; ) {
    var n = t[r], i = e7[n];
    t[r] = [n, i, lB(i)];
  }
  return t;
}
var dB = hB;
function pB(e7, t) {
  return function(r) {
    return r == null ? false : r[e7] === t && (t !== void 0 || e7 in Object(r));
  };
}
var ww = pB, yB = sB, mB = dB, vB = ww;
function gB(e7) {
  var t = mB(e7);
  return t.length == 1 && t[0][2] ? vB(t[0][0], t[0][1]) : function(r) {
    return r === e7 || yB(r, e7, t);
  };
}
var bB = gB;
function _B(e7, t) {
  return e7 != null && t in Object(e7);
}
var wB = _B, SB = I_, OB = Wd, xB = $e, AB = Vd, PB = qd, TB = Tu;
function IB(e7, t, r) {
  t = SB(t, e7);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = TB(t[n]);
    if (!(a = e7 != null && r(e7, o))) break;
    e7 = e7[o];
  }
  return a || ++n != i ? a : (i = e7 == null ? 0 : e7.length, !!i && PB(i) && AB(o, i) && (xB(e7) || OB(e7)));
}
var EB = IB, $B = wB, MB = EB;
function DB(e7, t) {
  return e7 != null && MB(e7, t, $B);
}
var NB = DB, CB = Gd, jB = E_, BB = NB, RB = Pd, kB = _w, LB = ww, FB = Tu, UB = 1, zB = 2;
function WB(e7, t) {
  return RB(e7) && kB(t) ? LB(FB(e7), t) : function(r) {
    var n = jB(r, e7);
    return n === void 0 && n === t ? BB(r, e7) : CB(t, n, UB | zB);
  };
}
var VB = WB;
function qB(e7) {
  return e7;
}
var wa = qB;
function GB(e7) {
  return function(t) {
    return t == null ? void 0 : t[e7];
  };
}
var HB = GB, KB = Nd;
function YB(e7) {
  return function(t) {
    return KB(t, e7);
  };
}
var XB = YB, JB = HB, QB = XB, ZB = Pd, t2 = Tu;
function e22(e7) {
  return ZB(e7) ? JB(t2(e7)) : QB(e7);
}
var r2 = e22, n2 = bB, i2 = VB, a2 = wa, o2 = $e, s2 = r2;
function c2(e7) {
  return typeof e7 == "function" ? e7 : e7 == null ? a2 : typeof e7 == "object" ? o2(e7) ? i2(e7[0], e7[1]) : n2(e7) : s2(e7);
}
var wn = c2;
function u2(e7, t, r, n) {
  for (var i = e7.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e7[a], a, e7)) return a;
  return -1;
}
var Sw = u2;
function l2(e7) {
  return e7 !== e7;
}
var f2 = l2;
function h2(e7, t, r) {
  for (var n = r - 1, i = e7.length; ++n < i; ) if (e7[n] === t) return n;
  return -1;
}
var d2 = h2, p2 = Sw, y2 = f2, m2 = d2;
function v2(e7, t, r) {
  return t === t ? m2(e7, t, r) : p2(e7, y2, r);
}
var g2 = v2, b2 = g2;
function _2(e7, t) {
  var r = e7 == null ? 0 : e7.length;
  return !!r && b2(e7, t, 0) > -1;
}
var w2 = _2;
function S2(e7, t, r) {
  for (var n = -1, i = e7 == null ? 0 : e7.length; ++n < i; ) if (r(t, e7[n])) return true;
  return false;
}
var O2 = S2;
function x2() {
}
var A2 = x2, Cl = vw, P2 = A2, T2 = zd, I2 = 1 / 0, E2 = Cl && 1 / T2(new Cl([, -0]))[1] == I2 ? function(e7) {
  return new Cl(e7);
} : P2, $2 = E2, M2 = sw, D2 = w2, N2 = O2, C2 = uw, j2 = $2, B2 = zd, R2 = 200;
function k2(e7, t, r) {
  var n = -1, i = D2, a = e7.length, o = true, s = [], c = s;
  if (r) o = false, i = N2;
  else if (a >= R2) {
    var u = t ? null : j2(e7);
    if (u) return B2(u);
    o = false, i = C2, c = new M2();
  } else c = t ? [] : s;
  t: for (; ++n < a; ) {
    var l = e7[n], f = t ? t(l) : l;
    if (l = r || l !== 0 ? l : 0, o && f === f) {
      for (var h = c.length; h--; ) if (c[h] === f) continue t;
      t && c.push(f), s.push(l);
    } else i(c, f, r) || (c !== s && c.push(f), s.push(l));
  }
  return s;
}
var L2 = k2, F2 = wn, U2 = L2;
function z2(e7, t) {
  return e7 && e7.length ? U2(e7, F2(t)) : [];
}
var W2 = z2;
const sm = Bt(W2);
function Ow(e7, t, r) {
  return t === true ? sm(e7, r) : lt(t) ? sm(e7, t) : e7;
}
function Ui(e7) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e7);
}
var V2 = ["ref"];
function cm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $r(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cm(Object(r), true).forEach(function(n) {
      Vu(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function q2(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function um(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Aw(n.key), n);
  }
}
function G2(e7, t, r) {
  return t && um(e7.prototype, t), r && um(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function H2(e7, t, r) {
  return t = Pc(t), K2(e7, xw() ? Reflect.construct(t, r || [], Pc(e7).constructor) : t.apply(e7, r));
}
function K2(e7, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Y2(e7);
}
function Y2(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function xw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xw = function() {
    return !!e7;
  })();
}
function Pc(e7) {
  return Pc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pc(e7);
}
function X2(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ff(e7, t);
}
function Ff(e7, t) {
  return Ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ff(e7, t);
}
function Vu(e7, t, r) {
  return t = Aw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Aw(e7) {
  var t = J2(e7, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function J2(e7, t) {
  if (Ui(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Q2(e7, t) {
  if (e7 == null) return {};
  var r = Z2(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function Z2(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function tR(e7) {
  return e7.value;
}
function eR(e7, t) {
  if (A.isValidElement(e7)) return A.cloneElement(e7, t);
  if (typeof e7 == "function") return A.createElement(e7, t);
  t.ref;
  var r = Q2(t, V2);
  return A.createElement(Ud, r);
}
var lm = 1, hn = function(e7) {
  function t() {
    var r;
    q2(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = H2(this, t, [].concat(i)), Vu(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return X2(t, e7), G2(t, [{ key: "componentDidMount", value: function() {
    this.updateBBox();
  } }, { key: "componentDidUpdate", value: function() {
    this.updateBBox();
  } }, { key: "getBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
    }
    return null;
  } }, { key: "updateBBox", value: function() {
    var n = this.props.onBBoxUpdate, i = this.getBBox();
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > lm || Math.abs(i.height - this.lastBoundingBox.height) > lm) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
  } }, { key: "getBBoxSnapshot", value: function() {
    return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? $r({}, this.lastBoundingBox) : { width: 0, height: 0 };
  } }, { key: "getDefaultPosition", value: function(n) {
    var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, c = i.margin, u = i.chartWidth, l = i.chartHeight, f, h;
    if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null)) if (o === "center" && a === "vertical") {
      var d = this.getBBoxSnapshot();
      f = { left: ((u || 0) - d.width) / 2 };
    } else f = o === "right" ? { right: c && c.right || 0 } : { left: c && c.left || 0 };
    if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null)) if (s === "middle") {
      var y = this.getBBoxSnapshot();
      h = { top: ((l || 0) - y.height) / 2 };
    } else h = s === "bottom" ? { bottom: c && c.bottom || 0 } : { top: c && c.top || 0 };
    return $r($r({}, f), h);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.content, o = i.width, s = i.height, c = i.wrapperStyle, u = i.payloadUniqBy, l = i.payload, f = $r($r({ position: "absolute", width: o || "auto", height: s || "auto" }, this.getDefaultPosition(c)), c);
    return A.createElement("div", { className: "recharts-legend-wrapper", style: f, ref: function(d) {
      n.wrapperNode = d;
    } }, eR(a, $r($r({}, this.props), {}, { payload: Ow(l, u, tR) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = $r($r({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && L(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(B.PureComponent);
Vu(hn, "displayName", "Legend");
Vu(hn, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var fm = Zo, rR = Wd, nR = $e, hm = fm ? fm.isConcatSpreadable : void 0;
function iR(e7) {
  return nR(e7) || rR(e7) || !!(hm && e7 && e7[hm]);
}
var aR = iR, oR = fw, sR = aR;
function Pw(e7, t, r, n, i) {
  var a = -1, o = e7.length;
  for (r || (r = sR), i || (i = []); ++a < o; ) {
    var s = e7[a];
    t > 0 && r(s) ? t > 1 ? Pw(s, t - 1, r, n, i) : oR(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var Tw = Pw;
function cR(e7) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e7 ? s : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var uR = cR, lR = uR, fR = lR(), hR = fR, dR = hR, pR = Wu;
function yR(e7, t) {
  return e7 && dR(e7, t, pR);
}
var Iw = yR, mR = ts;
function vR(e7, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!mR(r)) return e7(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var gR = vR, bR = Iw, _R = gR, wR = _R(bR), Hd = wR, SR = Hd, OR = ts;
function xR(e7, t) {
  var r = -1, n = OR(e7) ? Array(e7.length) : [];
  return SR(e7, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Ew = xR;
function AR(e7, t) {
  var r = e7.length;
  for (e7.sort(t); r--; ) e7[r] = e7[r].value;
  return e7;
}
var PR = AR, dm = da;
function TR(e7, t) {
  if (e7 !== t) {
    var r = e7 !== void 0, n = e7 === null, i = e7 === e7, a = dm(e7), o = t !== void 0, s = t === null, c = t === t, u = dm(t);
    if (!s && !u && !a && e7 > t || a && o && c && !s && !u || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !u && e7 < t || u && r && i && !n && !a || s && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var IR = TR, ER = IR;
function $R(e7, t, r) {
  for (var n = -1, i = e7.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = ER(i[n], a[n]);
    if (c) {
      if (n >= s) return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e7.index - t.index;
}
var MR = $R, jl = Dd, DR = Nd, NR = wn, CR = Ew, jR = PR, BR = pw, RR = MR, kR = wa, LR = $e;
function FR(e7, t, r) {
  t.length ? t = jl(t, function(a) {
    return LR(a) ? function(o) {
      return DR(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [kR];
  var n = -1;
  t = jl(t, BR(NR));
  var i = CR(e7, function(a, o, s) {
    var c = jl(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return jR(i, function(a, o) {
    return RR(a, o, r);
  });
}
var UR = FR;
function zR(e7, t, r) {
  switch (r.length) {
    case 0:
      return e7.call(t);
    case 1:
      return e7.call(t, r[0]);
    case 2:
      return e7.call(t, r[0], r[1]);
    case 3:
      return e7.call(t, r[0], r[1], r[2]);
  }
  return e7.apply(t, r);
}
var WR = zR, VR = WR, pm = Math.max;
function qR(e7, t, r) {
  return t = pm(t === void 0 ? e7.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = pm(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), VR(e7, this, s);
  };
}
var GR = qR;
function HR(e7) {
  return function() {
    return e7;
  };
}
var KR = HR, YR = ti, XR = function() {
  try {
    var e7 = YR(Object, "defineProperty");
    return e7({}, "", {}), e7;
  } catch {
  }
}(), $w = XR, JR = KR, ym = $w, QR = wa, ZR = ym ? function(e7, t) {
  return ym(e7, "toString", { configurable: true, enumerable: false, value: JR(t), writable: true });
} : QR, tk = ZR, ek = 800, rk = 16, nk = Date.now;
function ik(e7) {
  var t = 0, r = 0;
  return function() {
    var n = nk(), i = rk - (n - r);
    if (r = n, i > 0) {
      if (++t >= ek) return arguments[0];
    } else t = 0;
    return e7.apply(void 0, arguments);
  };
}
var ak = ik, ok = tk, sk = ak, ck = sk(ok), uk = ck, lk = wa, fk = GR, hk = uk;
function dk(e7, t) {
  return hk(fk(e7, t, lk), e7 + "");
}
var pk = dk, yk = Id, mk = ts, vk = Vd, gk = _n;
function bk(e7, t, r) {
  if (!gk(r)) return false;
  var n = typeof t;
  return (n == "number" ? mk(r) && vk(t, r.length) : n == "string" && t in r) ? yk(r[t], e7) : false;
}
var qu = bk, _k = Tw, wk = UR, Sk = pk, mm = qu, Ok = Sk(function(e7, t) {
  if (e7 == null) return [];
  var r = t.length;
  return r > 1 && mm(e7, t[0], t[1]) ? t = [] : r > 2 && mm(t[0], t[1], t[2]) && (t = [t[0]]), wk(e7, _k(t, 1), []);
}), xk = Ok;
const Kd = Bt(xk);
function ho(e7) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e7);
}
function Uf() {
  return Uf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Uf.apply(this, arguments);
}
function Ak(e7, t) {
  return Ek(e7) || Ik(e7, t) || Tk(e7, t) || Pk();
}
function Pk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tk(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return vm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vm(e7, t);
  }
}
function vm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Ik(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Ek(e7) {
  if (Array.isArray(e7)) return e7;
}
function gm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bl(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), true).forEach(function(n) {
      $k(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function $k(e7, t, r) {
  return t = Mk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Mk(e7) {
  var t = Dk(e7, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function Dk(e7, t) {
  if (ho(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Nk(e7) {
  return Array.isArray(e7) && ie(e7[0]) && ie(e7[1]) ? e7.join(" ~ ") : e7;
}
var Ck = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, _ = t.accessibilityLayer, g = _ === void 0 ? false : _, w = function() {
    if (l && l.length) {
      var I = { padding: 0, margin: 0 }, j = (h ? Kd(l, h) : l).map(function(N, M) {
        if (N.type === "none") return null;
        var C = Bl({ display: "block", paddingTop: 4, paddingBottom: 4, color: N.color || "#000" }, s), R = N.formatter || f || Nk, F = N.value, U = N.name, q = F, rt = U;
        if (R && q != null && rt != null) {
          var W = R(F, U, N, M, l);
          if (Array.isArray(W)) {
            var it = Ak(W, 2);
            q = it[0], rt = it[1];
          } else q = W;
        }
        return A.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: C }, ie(rt) ? A.createElement("span", { className: "recharts-tooltip-item-name" }, rt) : null, ie(rt) ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, A.createElement("span", { className: "recharts-tooltip-item-value" }, q), A.createElement("span", { className: "recharts-tooltip-item-unit" }, N.unit || ""));
      });
      return A.createElement("ul", { className: "recharts-tooltip-item-list", style: I }, j);
    }
    return null;
  }, S = Bl({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), v = Bl({ margin: 0 }, u), b = !st(m), O = b ? m : "", P = mt("recharts-default-tooltip", d), T = mt("recharts-tooltip-label", y);
  b && p && l !== void 0 && l !== null && (O = p(m, l));
  var $ = g ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement("div", Uf({ className: P, style: S }, $), A.createElement("p", { className: T, style: v }, A.isValidElement(O) ? O : "".concat(O)), w());
};
function po(e7) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e7);
}
function hs(e7, t, r) {
  return t = jk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function jk(e7) {
  var t = Bk(e7, "string");
  return po(t) == "symbol" ? t : t + "";
}
function Bk(e7, t) {
  if (po(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var $a = "recharts-tooltip-wrapper", Rk = { visibility: "hidden" };
function kk(e7) {
  var t = e7.coordinate, r = e7.translateX, n = e7.translateY;
  return mt($a, hs(hs(hs(hs({}, "".concat($a, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat($a, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat($a, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat($a, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function bm(e7) {
  var t = e7.allowEscapeViewBox, r = e7.coordinate, n = e7.key, i = e7.offsetTopLeft, a = e7.position, o = e7.reverseDirection, s = e7.tooltipDimension, c = e7.viewBox, u = e7.viewBoxDimension;
  if (a && L(a[n])) return a[n];
  var l = r[n] - s - i, f = r[n] + i;
  if (t[n]) return o[n] ? l : f;
  if (o[n]) {
    var h = l, d = c[n];
    return h < d ? Math.max(f, c[n]) : Math.max(l, c[n]);
  }
  var y = f + s, m = c[n] + u;
  return y > m ? Math.max(l, c[n]) : Math.max(f, c[n]);
}
function Lk(e7) {
  var t = e7.translateX, r = e7.translateY, n = e7.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function Fk(e7) {
  var t = e7.allowEscapeViewBox, r = e7.coordinate, n = e7.offsetTopLeft, i = e7.position, a = e7.reverseDirection, o = e7.tooltipBox, s = e7.useTranslate3d, c = e7.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = bm({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), f = bm({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), u = Lk({ translateX: l, translateY: f, useTranslate3d: s })) : u = Rk, { cssProperties: u, cssClasses: kk({ translateX: l, translateY: f, coordinate: r }) };
}
function zi(e7) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e7);
}
function _m(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wm(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), true).forEach(function(n) {
      Wf(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Uk(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function zk(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Dw(n.key), n);
  }
}
function Wk(e7, t, r) {
  return t && zk(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Vk(e7, t, r) {
  return t = Tc(t), qk(e7, Mw() ? Reflect.construct(t, r || [], Tc(e7).constructor) : t.apply(e7, r));
}
function qk(e7, t) {
  if (t && (zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Gk(e7);
}
function Gk(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function Mw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mw = function() {
    return !!e7;
  })();
}
function Tc(e7) {
  return Tc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tc(e7);
}
function Hk(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && zf(e7, t);
}
function zf(e7, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zf(e7, t);
}
function Wf(e7, t, r) {
  return t = Dw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Dw(e7) {
  var t = Kk(e7, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function Kk(e7, t) {
  if (zi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Sm = 1, Yk = function(e7) {
  function t() {
    var r;
    Uk(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = Vk(this, t, [].concat(i)), Wf(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), Wf(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0, y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return Hk(t, e7), Wk(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > Sm || Math.abs(n.height - this.state.lastBoundingBox.height) > Sm) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, m = i.reverseDirection, p = i.useTranslate3d, _ = i.viewBox, g = i.wrapperStyle, w = Fk({ allowEscapeViewBox: o, coordinate: l, offsetTopLeft: d, position: y, reverseDirection: m, tooltipBox: this.state.lastBoundingBox, useTranslate3d: p, viewBox: _ }), S = w.cssClasses, v = w.cssProperties, b = wm(wm({ transition: h && a ? "transform ".concat(s, "ms ").concat(c) : void 0 }, v), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, g);
    return A.createElement("div", { tabIndex: -1, className: S, style: b, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(B.PureComponent), Xk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Sn = { isSsr: Xk() };
function Wi(e7) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e7);
}
function Om(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xm(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), true).forEach(function(n) {
      Yd(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Jk(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qk(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Cw(n.key), n);
  }
}
function Zk(e7, t, r) {
  return t && Qk(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function tL(e7, t, r) {
  return t = Ic(t), eL(e7, Nw() ? Reflect.construct(t, r || [], Ic(e7).constructor) : t.apply(e7, r));
}
function eL(e7, t) {
  if (t && (Wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rL(e7);
}
function rL(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function Nw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nw = function() {
    return !!e7;
  })();
}
function Ic(e7) {
  return Ic = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ic(e7);
}
function nL(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Vf(e7, t);
}
function Vf(e7, t) {
  return Vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vf(e7, t);
}
function Yd(e7, t, r) {
  return t = Cw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Cw(e7) {
  var t = iL(e7, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function iL(e7, t) {
  if (Wi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function aL(e7) {
  return e7.dataKey;
}
function oL(e7, t) {
  return A.isValidElement(e7) ? A.cloneElement(e7, t) : typeof e7 == "function" ? A.createElement(e7, t) : A.createElement(Ck, t);
}
var nr = function(e7) {
  function t() {
    return Jk(this, t), tL(this, t, arguments);
  }
  return nL(t, e7), Zk(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, m = i.payloadUniqBy, p = i.position, _ = i.reverseDirection, g = i.useTranslate3d, w = i.viewBox, S = i.wrapperStyle, v = y ?? [];
    f && v.length && (v = Ow(y.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), m, aL));
    var b = v.length > 0;
    return A.createElement(Yk, { allowEscapeViewBox: o, animationDuration: s, animationEasing: c, isAnimationActive: h, active: a, coordinate: l, hasPayload: b, offset: d, position: p, reverseDirection: _, useTranslate3d: g, viewBox: w, wrapperStyle: S }, oL(u, xm(xm({}, this.props), {}, { payload: v })));
  } }]);
}(B.PureComponent);
Yd(nr, "displayName", "Tooltip");
Yd(nr, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !Sn.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var sL = Er, cL = function() {
  return sL.Date.now();
}, uL = cL, lL = /\s/;
function fL(e7) {
  for (var t = e7.length; t-- && lL.test(e7.charAt(t)); ) ;
  return t;
}
var hL = fL, dL = hL, pL = /^\s+/;
function yL(e7) {
  return e7 && e7.slice(0, dL(e7) + 1).replace(pL, "");
}
var mL = yL, vL = mL, Am = _n, gL = da, Pm = NaN, bL = /^[-+]0x[0-9a-f]+$/i, _L = /^0b[01]+$/i, wL = /^0o[0-7]+$/i, SL = parseInt;
function OL(e7) {
  if (typeof e7 == "number") return e7;
  if (gL(e7)) return Pm;
  if (Am(e7)) {
    var t = typeof e7.valueOf == "function" ? e7.valueOf() : e7;
    e7 = Am(t) ? t + "" : t;
  }
  if (typeof e7 != "string") return e7 === 0 ? e7 : +e7;
  e7 = vL(e7);
  var r = _L.test(e7);
  return r || wL.test(e7) ? SL(e7.slice(2), r ? 2 : 8) : bL.test(e7) ? Pm : +e7;
}
var jw = OL, xL = _n, Rl = uL, Tm = jw, AL = "Expected a function", PL = Math.max, TL = Math.min;
function IL(e7, t, r) {
  var n, i, a, o, s, c, u = 0, l = false, f = false, h = true;
  if (typeof e7 != "function") throw new TypeError(AL);
  t = Tm(t) || 0, xL(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? PL(Tm(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var O = n, P = i;
    return n = i = void 0, u = b, o = e7.apply(P, O), o;
  }
  function y(b) {
    return u = b, s = setTimeout(_, t), l ? d(b) : o;
  }
  function m(b) {
    var O = b - c, P = b - u, T = t - O;
    return f ? TL(T, a - P) : T;
  }
  function p(b) {
    var O = b - c, P = b - u;
    return c === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function _() {
    var b = Rl();
    if (p(b)) return g(b);
    s = setTimeout(_, m(b));
  }
  function g(b) {
    return s = void 0, h && n ? d(b) : (n = i = void 0, o);
  }
  function w() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function S() {
    return s === void 0 ? o : g(Rl());
  }
  function v() {
    var b = Rl(), O = p(b);
    if (n = arguments, i = this, c = b, O) {
      if (s === void 0) return y(c);
      if (f) return clearTimeout(s), s = setTimeout(_, t), d(c);
    }
    return s === void 0 && (s = setTimeout(_, t)), o;
  }
  return v.cancel = w, v.flush = S, v;
}
var EL = IL, $L = EL, ML = _n, DL = "Expected a function";
function NL(e7, t, r) {
  var n = true, i = true;
  if (typeof e7 != "function") throw new TypeError(DL);
  return ML(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $L(e7, t, { leading: n, maxWait: t, trailing: i });
}
var CL = NL;
const Bw = Bt(CL);
function yo(e7) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e7);
}
function Im(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ds(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Im(Object(r), true).forEach(function(n) {
      jL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function jL(e7, t, r) {
  return t = BL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function BL(e7) {
  var t = RL(e7, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function RL(e7, t) {
  if (yo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function kL(e7, t) {
  return zL(e7) || UL(e7, t) || FL(e7, t) || LL();
}
function LL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FL(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Em(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Em(e7, t);
  }
}
function Em(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function UL(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function zL(e7) {
  if (Array.isArray(e7)) return e7;
}
var $m = B.forwardRef(function(e7, t) {
  var r = e7.aspect, n = e7.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e7.width, o = a === void 0 ? "100%" : a, s = e7.height, c = s === void 0 ? "100%" : s, u = e7.minWidth, l = u === void 0 ? 0 : u, f = e7.minHeight, h = e7.maxHeight, d = e7.children, y = e7.debounce, m = y === void 0 ? 0 : y, p = e7.id, _ = e7.className, g = e7.onResize, w = e7.style, S = w === void 0 ? {} : w, v = B.useRef(null), b = B.useRef();
  b.current = g, B.useImperativeHandle(t, function() {
    return Object.defineProperty(v.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), v.current;
    }, configurable: true });
  });
  var O = B.useState({ containerWidth: i.width, containerHeight: i.height }), P = kL(O, 2), T = P[0], $ = P[1], E = B.useCallback(function(j, N) {
    $(function(M) {
      var C = Math.round(j), R = Math.round(N);
      return M.containerWidth === C && M.containerHeight === R ? M : { containerWidth: C, containerHeight: R };
    });
  }, []);
  B.useEffect(function() {
    var j = function(U) {
      var q, rt = U[0].contentRect, W = rt.width, it = rt.height;
      E(W, it), (q = b.current) === null || q === void 0 || q.call(b, W, it);
    };
    m > 0 && (j = Bw(j, m, { trailing: true, leading: false }));
    var N = new ResizeObserver(j), M = v.current.getBoundingClientRect(), C = M.width, R = M.height;
    return E(C, R), N.observe(v.current), function() {
      N.disconnect();
    };
  }, [E, m]);
  var I = B.useMemo(function() {
    var j = T.containerWidth, N = T.containerHeight;
    if (j < 0 || N < 0) return null;
    zr(jn(o) || jn(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), zr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var M = jn(o) ? j : o, C = jn(c) ? N : c;
    r && r > 0 && (M ? C = M / r : C && (M = C * r), h && C > h && (C = h)), zr(M > 0 || C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, M, C, o, c, l, f, r);
    var R = !Array.isArray(d) && Ur(d.type).endsWith("Chart");
    return A.Children.map(d, function(F) {
      return A.isValidElement(F) ? B.cloneElement(F, ds({ width: M, height: C }, R ? { style: ds({ height: "100%", width: "100%", maxHeight: C, maxWidth: M }, F.props.style) } : {})) : F;
    });
  }, [r, d, c, h, f, l, T, o]);
  return A.createElement("div", { id: p ? "".concat(p) : void 0, className: mt("recharts-responsive-container", _), style: ds(ds({}, S), {}, { width: o, height: c, minWidth: l, minHeight: f, maxHeight: h }), ref: v }, I);
}), Xd = function(t) {
  return null;
};
Xd.displayName = "Cell";
function mo(e7) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e7);
}
function Mm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qf(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mm(Object(r), true).forEach(function(n) {
      WL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function WL(e7, t, r) {
  return t = VL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function VL(e7) {
  var t = qL(e7, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function qL(e7, t) {
  if (mo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var si = { widthCache: {}, cacheCount: 0 }, GL = 2e3, HL = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Dm = "recharts_measurement_span";
function KL(e7) {
  var t = qf({}, e7);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Xa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Sn.isSsr) return { width: 0, height: 0 };
  var n = KL(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (si.widthCache[i]) return si.widthCache[i];
  try {
    var a = document.getElementById(Dm);
    a || (a = document.createElement("span"), a.setAttribute("id", Dm), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = qf(qf({}, HL), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = { width: s.width, height: s.height };
    return si.widthCache[i] = c, ++si.cacheCount > GL && (si.cacheCount = 0, si.widthCache = {}), c;
  } catch {
    return { width: 0, height: 0 };
  }
}, YL = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function vo(e7) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e7);
}
function Ec(e7, t) {
  return ZL(e7) || QL(e7, t) || JL(e7, t) || XL();
}
function XL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JL(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Nm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nm(e7, t);
  }
}
function Nm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function QL(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t === 0) {
        if (Object(r) !== r) return;
        c = false;
      } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function ZL(e7) {
  if (Array.isArray(e7)) return e7;
}
function tF(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Cm(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, rF(n.key), n);
  }
}
function eF(e7, t, r) {
  return t && Cm(e7.prototype, t), r && Cm(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function rF(e7) {
  var t = nF(e7, "string");
  return vo(t) == "symbol" ? t : t + "";
}
function nF(e7, t) {
  if (vo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var jm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Bm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, iF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, aF = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Rw = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, oF = Object.keys(Rw), Oi = "NaN";
function sF(e7, t) {
  return e7 * Rw[t];
}
var ps = function() {
  function e7(t, r) {
    tF(this, e7), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !iF.test(r) && (this.num = NaN, this.unit = ""), oF.includes(r) && (this.num = sF(t, r), this.unit = "px");
  }
  return eF(e7, [{ key: "add", value: function(r) {
    return this.unit !== r.unit ? new e7(NaN, "") : new e7(this.num + r.num, this.unit);
  } }, { key: "subtract", value: function(r) {
    return this.unit !== r.unit ? new e7(NaN, "") : new e7(this.num - r.num, this.unit);
  } }, { key: "multiply", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e7(NaN, "") : new e7(this.num * r.num, this.unit || r.unit);
  } }, { key: "divide", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e7(NaN, "") : new e7(this.num / r.num, this.unit || r.unit);
  } }, { key: "toString", value: function() {
    return "".concat(this.num).concat(this.unit);
  } }, { key: "isNaN", value: function() {
    return Number.isNaN(this.num);
  } }], [{ key: "parse", value: function(r) {
    var n, i = (n = aF.exec(r)) !== null && n !== void 0 ? n : [], a = Ec(i, 3), o = a[1], s = a[2];
    return new e7(parseFloat(o), s ?? "");
  } }]);
}();
function kw(e7) {
  if (e7.includes(Oi)) return Oi;
  for (var t = e7; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = jm.exec(t)) !== null && r !== void 0 ? r : [], i = Ec(n, 4), a = i[1], o = i[2], s = i[3], c = ps.parse(a ?? ""), u = ps.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return Oi;
    t = t.replace(jm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, h = (f = Bm.exec(t)) !== null && f !== void 0 ? f : [], d = Ec(h, 4), y = d[1], m = d[2], p = d[3], _ = ps.parse(y ?? ""), g = ps.parse(p ?? ""), w = m === "+" ? _.add(g) : _.subtract(g);
    if (w.isNaN()) return Oi;
    t = t.replace(Bm, w.toString());
  }
  return t;
}
var Rm = /\(([^()]*)\)/;
function cF(e7) {
  for (var t = e7; t.includes("("); ) {
    var r = Rm.exec(t), n = Ec(r, 2), i = n[1];
    t = t.replace(Rm, kw(i));
  }
  return t;
}
function uF(e7) {
  var t = e7.replace(/\s+/g, "");
  return t = cF(t), t = kw(t), t;
}
function lF(e7) {
  try {
    return uF(e7);
  } catch {
    return Oi;
  }
}
function kl(e7) {
  var t = lF(e7.slice(5, -1));
  return t === Oi ? "" : t;
}
var fF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], hF = ["dx", "dy", "angle", "className", "breakAll"];
function Gf() {
  return Gf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Gf.apply(this, arguments);
}
function km(e7, t) {
  if (e7 == null) return {};
  var r = dF(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function dF(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Lm(e7, t) {
  return vF(e7) || mF(e7, t) || yF(e7, t) || pF();
}
function pF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yF(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Fm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fm(e7, t);
  }
}
function Fm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function mF(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t === 0) {
        if (Object(r) !== r) return;
        c = false;
      } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function vF(e7) {
  if (Array.isArray(e7)) return e7;
}
var Lw = /[ \f\n\r\t\v\u2028\u2029]+/, Fw = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    st(r) || (n ? a = r.toString().split("") : a = r.toString().split(Lw));
    var o = a.map(function(c) {
      return { word: c, width: Xa(c, i).width };
    }), s = n ? 0 : Xa("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, gF = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = L(o), f = s, h = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(C, R) {
      var F = R.word, U = R.width, q = C[C.length - 1];
      if (q && (i == null || a || q.width + U + n < Number(i))) q.words.push(F), q.width += U + n;
      else {
        var rt = { words: [F], width: U };
        C.push(rt);
      }
      return C;
    }, []);
  }, d = h(r), y = function(M) {
    return M.reduce(function(C, R) {
      return C.width > R.width ? C : R;
    });
  };
  if (!l) return d;
  for (var m = "\u2026", p = function(M) {
    var C = f.slice(0, M), R = Fw({ breakAll: u, style: c, children: C + m }).wordsWithComputedWidth, F = h(R), U = F.length > o || y(F).width > Number(i);
    return [U, F];
  }, _ = 0, g = f.length - 1, w = 0, S; _ <= g && w <= f.length - 1; ) {
    var v = Math.floor((_ + g) / 2), b = v - 1, O = p(b), P = Lm(O, 2), T = P[0], $ = P[1], E = p(v), I = Lm(E, 1), j = I[0];
    if (!T && !j && (_ = v + 1), T && j && (g = v - 1), !T && j) {
      S = $;
      break;
    }
    w++;
  }
  return S || d;
}, Um = function(t) {
  var r = st(t) ? [] : t.toString().split(Lw);
  return [{ words: r }];
}, bF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Sn.isSsr) {
    var c, u, l = Fw({ breakAll: o, children: i, style: a });
    if (l) {
      var f = l.wordsWithComputedWidth, h = l.spaceWidth;
      c = f, u = h;
    } else return Um(i);
    return gF({ breakAll: o, children: i, maxLines: s, style: a }, c, u, r, n);
  }
  return Um(i);
}, zm = "#808080", $c = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? false : l, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, _ = p === void 0 ? zm : p, g = km(t, fF), w = B.useMemo(function() {
    return bF({ breakAll: g.breakAll, children: g.children, maxLines: g.maxLines, scaleToFit: f, style: g.style, width: g.width });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), S = g.dx, v = g.dy, b = g.angle, O = g.className, P = g.breakAll, T = km(g, hF);
  if (!ie(n) || !ie(a)) return null;
  var $ = n + (L(S) ? S : 0), E = a + (L(v) ? v : 0), I;
  switch (m) {
    case "start":
      I = kl("calc(".concat(u, ")"));
      break;
    case "middle":
      I = kl("calc(".concat((w.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      I = kl("calc(".concat(w.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var N = w[0].width, M = g.width;
    j.push("scale(".concat((L(M) ? M / N : 1) / N, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat($, ", ").concat(E, ")")), j.length && (T.transform = j.join(" ")), A.createElement("text", Gf({}, ct(T, true), { x: $, y: E, className: mt("recharts-text", O), textAnchor: d, fill: _.includes("url") ? zm : _ }), w.map(function(C, R) {
    var F = C.words.join(P ? "" : " ");
    return A.createElement("tspan", { x: $, dy: R === 0 ? I : s, key: "".concat(F, "-").concat(R) }, F);
  }));
};
function dn(e7, t) {
  return e7 == null || t == null ? NaN : e7 < t ? -1 : e7 > t ? 1 : e7 >= t ? 0 : NaN;
}
function _F(e7, t) {
  return e7 == null || t == null ? NaN : t < e7 ? -1 : t > e7 ? 1 : t >= e7 ? 0 : NaN;
}
function Jd(e7) {
  let t, r, n;
  e7.length !== 2 ? (t = dn, r = (s, c) => dn(e7(s), c), n = (s, c) => e7(s) - c) : (t = e7 === dn || e7 === _F ? e7 : wF, r = e7, n = e7);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function wF() {
  return 0;
}
function Uw(e7) {
  return e7 === null ? NaN : +e7;
}
function* SF(e7, t) {
  for (let r of e7) r != null && (r = +r) >= r && (yield r);
}
const OF = Jd(dn), es = OF.right;
Jd(Uw).center;
class Wm extends Map {
  constructor(t, r = PF) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Vm(this, t));
  }
  has(t) {
    return super.has(Vm(this, t));
  }
  set(t, r) {
    return super.set(xF(this, t), r);
  }
  delete(t) {
    return super.delete(AF(this, t));
  }
}
function Vm({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : r;
}
function xF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : (e7.set(n, r), r);
}
function AF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) && (r = e7.get(n), e7.delete(n)), r;
}
function PF(e7) {
  return e7 !== null && typeof e7 == "object" ? e7.valueOf() : e7;
}
function TF(e7 = dn) {
  if (e7 === dn) return zw;
  if (typeof e7 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e7(t, r);
    return n || n === 0 ? n : (e7(r, r) === 0) - (e7(t, t) === 0);
  };
}
function zw(e7, t) {
  return (e7 == null || !(e7 >= e7)) - (t == null || !(t >= t)) || (e7 < t ? -1 : e7 > t ? 1 : 0);
}
const IF = Math.sqrt(50), EF = Math.sqrt(10), $F = Math.sqrt(2);
function Mc(e7, t, r) {
  const n = (t - e7) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= IF ? 10 : a >= EF ? 5 : a >= $F ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e7 * u), c = Math.round(t * u), s / u < e7 && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e7 / u), c = Math.round(t / u), s * u < e7 && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? Mc(e7, t, r * 2) : [s, c, u];
}
function Hf(e7, t, r) {
  if (t = +t, e7 = +e7, r = +r, !(r > 0)) return [];
  if (e7 === t) return [e7];
  const n = t < e7, [i, a, o] = n ? Mc(t, e7, r) : Mc(e7, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Kf(e7, t, r) {
  return t = +t, e7 = +e7, r = +r, Mc(e7, t, r)[2];
}
function Yf(e7, t, r) {
  t = +t, e7 = +e7, r = +r;
  const n = t < e7, i = n ? Kf(t, e7, r) : Kf(e7, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function qm(e7, t) {
  let r;
  for (const n of e7) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Gm(e7, t) {
  let r;
  for (const n of e7) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ww(e7, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e7.length - 1, n)), !(r <= t && t <= n)) return e7;
  for (i = i === void 0 ? zw : TF(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), h = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * f / c + h)), y = Math.min(n, Math.floor(t + (c - u) * f / c + h));
      Ww(e7, t, d, y, i);
    }
    const a = e7[t];
    let o = r, s = n;
    for (Ma(e7, r, t), i(e7[n], a) > 0 && Ma(e7, r, n); o < s; ) {
      for (Ma(e7, o, s), ++o, --s; i(e7[o], a) < 0; ) ++o;
      for (; i(e7[s], a) > 0; ) --s;
    }
    i(e7[r], a) === 0 ? Ma(e7, r, s) : (++s, Ma(e7, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e7;
}
function Ma(e7, t, r) {
  const n = e7[t];
  e7[t] = e7[r], e7[r] = n;
}
function MF(e7, t, r) {
  if (e7 = Float64Array.from(SF(e7)), !(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Gm(e7);
    if (t >= 1) return qm(e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = qm(Ww(e7, a).subarray(0, a + 1)), s = Gm(e7.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function DF(e7, t, r = Uw) {
  if (!(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e7[0], 0, e7);
    if (t >= 1) return +r(e7[n - 1], n - 1, e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e7[a], a, e7), s = +r(e7[a + 1], a + 1, e7);
    return o + (s - o) * (i - a);
  }
}
function NF(e7, t, r) {
  e7 = +e7, t = +t, r = (i = arguments.length) < 2 ? (t = e7, e7 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e7) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e7 + n * r;
  return a;
}
function tr(e7, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e7);
      break;
    default:
      this.range(t).domain(e7);
      break;
  }
  return this;
}
function Zr(e7, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e7 == "function" ? this.interpolator(e7) : this.range(e7);
      break;
    }
    default: {
      this.domain(e7), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Xf = Symbol("implicit");
function Qd() {
  var e7 = new Wm(), t = [], r = [], n = Xf;
  function i(a) {
    let o = e7.get(a);
    if (o === void 0) {
      if (n !== Xf) return n;
      e7.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e7 = new Wm();
    for (const o of a) e7.has(o) || e7.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Qd(t, r).unknown(n);
  }, tr.apply(i, arguments), i;
}
function go() {
  var e7 = Qd().unknown(void 0), t = e7.domain, r = e7.range, n = 0, i = 1, a, o, s = false, c = 0, u = 0, l = 0.5;
  delete e7.unknown;
  function f() {
    var h = t().length, d = i < n, y = d ? i : n, m = d ? n : i;
    a = (m - y) / Math.max(1, h - c + u * 2), s && (a = Math.floor(a)), y += (m - y - a * (h - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = NF(h).map(function(_) {
      return y + a * _;
    });
    return r(d ? p.reverse() : p);
  }
  return e7.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e7.range = function(h) {
    return arguments.length ? ([n, i] = h, n = +n, i = +i, f()) : [n, i];
  }, e7.rangeRound = function(h) {
    return [n, i] = h, n = +n, i = +i, s = true, f();
  }, e7.bandwidth = function() {
    return o;
  }, e7.step = function() {
    return a;
  }, e7.round = function(h) {
    return arguments.length ? (s = !!h, f()) : s;
  }, e7.padding = function(h) {
    return arguments.length ? (c = Math.min(1, u = +h), f()) : c;
  }, e7.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e7.paddingOuter = function(h) {
    return arguments.length ? (u = +h, f()) : u;
  }, e7.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, e7.copy = function() {
    return go(t(), [n, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, tr.apply(f(), arguments);
}
function Vw(e7) {
  var t = e7.copy;
  return e7.padding = e7.paddingOuter, delete e7.paddingInner, delete e7.paddingOuter, e7.copy = function() {
    return Vw(t());
  }, e7;
}
function Ja() {
  return Vw(go.apply(null, arguments).paddingInner(1));
}
function Zd(e7, t, r) {
  e7.prototype = t.prototype = r, r.constructor = e7;
}
function qw(e7, t) {
  var r = Object.create(e7.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function rs() {
}
var bo = 0.7, Dc = 1 / bo, Mi = "\\s*([+-]?\\d+)\\s*", _o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", CF = /^#([0-9a-f]{3,8})$/, jF = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`), BF = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), RF = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${_o}\\)$`), kF = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${_o}\\)$`), LF = new RegExp(`^hsl\\(${_o},${Sr},${Sr}\\)$`), FF = new RegExp(`^hsla\\(${_o},${Sr},${Sr},${_o}\\)$`), Hm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Zd(rs, wo, { copy(e7) {
  return Object.assign(new this.constructor(), this, e7);
}, displayable() {
  return this.rgb().displayable();
}, hex: Km, formatHex: Km, formatHex8: UF, formatHsl: zF, formatRgb: Ym, toString: Ym });
function Km() {
  return this.rgb().formatHex();
}
function UF() {
  return this.rgb().formatHex8();
}
function zF() {
  return Gw(this).formatHsl();
}
function Ym() {
  return this.rgb().formatRgb();
}
function wo(e7) {
  var t, r;
  return e7 = (e7 + "").trim().toLowerCase(), (t = CF.exec(e7)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Xm(t) : r === 3 ? new Pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ys(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ys(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = jF.exec(e7)) ? new Pe(t[1], t[2], t[3], 1) : (t = BF.exec(e7)) ? new Pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = RF.exec(e7)) ? ys(t[1], t[2], t[3], t[4]) : (t = kF.exec(e7)) ? ys(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = LF.exec(e7)) ? Zm(t[1], t[2] / 100, t[3] / 100, 1) : (t = FF.exec(e7)) ? Zm(t[1], t[2] / 100, t[3] / 100, t[4]) : Hm.hasOwnProperty(e7) ? Xm(Hm[e7]) : e7 === "transparent" ? new Pe(NaN, NaN, NaN, 0) : null;
}
function Xm(e7) {
  return new Pe(e7 >> 16 & 255, e7 >> 8 & 255, e7 & 255, 1);
}
function ys(e7, t, r, n) {
  return n <= 0 && (e7 = t = r = NaN), new Pe(e7, t, r, n);
}
function WF(e7) {
  return e7 instanceof rs || (e7 = wo(e7)), e7 ? (e7 = e7.rgb(), new Pe(e7.r, e7.g, e7.b, e7.opacity)) : new Pe();
}
function Jf(e7, t, r, n) {
  return arguments.length === 1 ? WF(e7) : new Pe(e7, t, r, n ?? 1);
}
function Pe(e7, t, r, n) {
  this.r = +e7, this.g = +t, this.b = +r, this.opacity = +n;
}
Zd(Pe, Jf, qw(rs, { brighter(e7) {
  return e7 = e7 == null ? Dc : Math.pow(Dc, e7), new Pe(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? bo : Math.pow(bo, e7), new Pe(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Pe(Un(this.r), Un(this.g), Un(this.b), Nc(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Jm, formatHex: Jm, formatHex8: VF, formatRgb: Qm, toString: Qm }));
function Jm() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}`;
}
function VF() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}${Bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Qm() {
  const e7 = Nc(this.opacity);
  return `${e7 === 1 ? "rgb(" : "rgba("}${Un(this.r)}, ${Un(this.g)}, ${Un(this.b)}${e7 === 1 ? ")" : `, ${e7})`}`;
}
function Nc(e7) {
  return isNaN(e7) ? 1 : Math.max(0, Math.min(1, e7));
}
function Un(e7) {
  return Math.max(0, Math.min(255, Math.round(e7) || 0));
}
function Bn(e7) {
  return e7 = Un(e7), (e7 < 16 ? "0" : "") + e7.toString(16);
}
function Zm(e7, t, r, n) {
  return n <= 0 ? e7 = t = r = NaN : r <= 0 || r >= 1 ? e7 = t = NaN : t <= 0 && (e7 = NaN), new or(e7, t, r, n);
}
function Gw(e7) {
  if (e7 instanceof or) return new or(e7.h, e7.s, e7.l, e7.opacity);
  if (e7 instanceof rs || (e7 = wo(e7)), !e7) return new or();
  if (e7 instanceof or) return e7;
  e7 = e7.rgb();
  var t = e7.r / 255, r = e7.g / 255, n = e7.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new or(o, s, c, e7.opacity);
}
function qF(e7, t, r, n) {
  return arguments.length === 1 ? Gw(e7) : new or(e7, t, r, n ?? 1);
}
function or(e7, t, r, n) {
  this.h = +e7, this.s = +t, this.l = +r, this.opacity = +n;
}
Zd(or, qF, qw(rs, { brighter(e7) {
  return e7 = e7 == null ? Dc : Math.pow(Dc, e7), new or(this.h, this.s, this.l * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? bo : Math.pow(bo, e7), new or(this.h, this.s, this.l * e7, this.opacity);
}, rgb() {
  var e7 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e7) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Pe(Ll(e7 >= 240 ? e7 - 240 : e7 + 120, i, n), Ll(e7, i, n), Ll(e7 < 120 ? e7 + 240 : e7 - 120, i, n), this.opacity);
}, clamp() {
  return new or(tv(this.h), ms(this.s), ms(this.l), Nc(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e7 = Nc(this.opacity);
  return `${e7 === 1 ? "hsl(" : "hsla("}${tv(this.h)}, ${ms(this.s) * 100}%, ${ms(this.l) * 100}%${e7 === 1 ? ")" : `, ${e7})`}`;
} }));
function tv(e7) {
  return e7 = (e7 || 0) % 360, e7 < 0 ? e7 + 360 : e7;
}
function ms(e7) {
  return Math.max(0, Math.min(1, e7 || 0));
}
function Ll(e7, t, r) {
  return (e7 < 60 ? t + (r - t) * e7 / 60 : e7 < 180 ? r : e7 < 240 ? t + (r - t) * (240 - e7) / 60 : t) * 255;
}
const tp = (e7) => () => e7;
function GF(e7, t) {
  return function(r) {
    return e7 + r * t;
  };
}
function HF(e7, t, r) {
  return e7 = Math.pow(e7, r), t = Math.pow(t, r) - e7, r = 1 / r, function(n) {
    return Math.pow(e7 + n * t, r);
  };
}
function KF(e7) {
  return (e7 = +e7) == 1 ? Hw : function(t, r) {
    return r - t ? HF(t, r, e7) : tp(isNaN(t) ? r : t);
  };
}
function Hw(e7, t) {
  var r = t - e7;
  return r ? GF(e7, r) : tp(isNaN(e7) ? t : e7);
}
const ev = function e3(t) {
  var r = KF(t);
  function n(i, a) {
    var o = r((i = Jf(i)).r, (a = Jf(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = Hw(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e3, n;
}(1);
function YF(e7, t) {
  t || (t = []);
  var r = e7 ? Math.min(t.length, e7.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e7[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function XF(e7) {
  return ArrayBuffer.isView(e7) && !(e7 instanceof DataView);
}
function JF(e7, t) {
  var r = t ? t.length : 0, n = e7 ? Math.min(r, e7.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Sa(e7[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function QF(e7, t) {
  var r = /* @__PURE__ */ new Date();
  return e7 = +e7, t = +t, function(n) {
    return r.setTime(e7 * (1 - n) + t * n), r;
  };
}
function Cc(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return e7 * (1 - r) + t * r;
  };
}
function ZF(e7, t) {
  var r = {}, n = {}, i;
  (e7 === null || typeof e7 != "object") && (e7 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e7 ? r[i] = Sa(e7[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Qf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fl = new RegExp(Qf.source, "g");
function tU(e7) {
  return function() {
    return e7;
  };
}
function eU(e7) {
  return function(t) {
    return e7(t) + "";
  };
}
function rU(e7, t) {
  var r = Qf.lastIndex = Fl.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e7 = e7 + "", t = t + ""; (n = Qf.exec(e7)) && (i = Fl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Cc(n, i) })), r = Fl.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? eU(c[0].x) : tU(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Sa(e7, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? tp(t) : (r === "number" ? Cc : r === "string" ? (n = wo(t)) ? (t = n, ev) : rU : t instanceof wo ? ev : t instanceof Date ? QF : XF(t) ? YF : Array.isArray(t) ? JF : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ZF : Cc)(e7, t);
}
function ep(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return Math.round(e7 * (1 - r) + t * r);
  };
}
function nU(e7, t) {
  t === void 0 && (t = e7, e7 = Sa);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e7(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function iU(e7) {
  return function() {
    return e7;
  };
}
function jc(e7) {
  return +e7;
}
var rv = [0, 1];
function be(e7) {
  return e7;
}
function Zf(e7, t) {
  return (t -= e7 = +e7) ? function(r) {
    return (r - e7) / t;
  } : iU(isNaN(t) ? NaN : 0.5);
}
function aU(e7, t) {
  var r;
  return e7 > t && (r = e7, e7 = t, t = r), function(n) {
    return Math.max(e7, Math.min(t, n));
  };
}
function oU(e7, t, r) {
  var n = e7[0], i = e7[1], a = t[0], o = t[1];
  return i < n ? (n = Zf(i, n), a = r(o, a)) : (n = Zf(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function sU(e7, t, r) {
  var n = Math.min(e7.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e7[n] < e7[0] && (e7 = e7.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = Zf(e7[o], e7[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = es(e7, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function ns(e7, t) {
  return t.domain(e7.domain()).range(e7.range()).interpolate(e7.interpolate()).clamp(e7.clamp()).unknown(e7.unknown());
}
function Gu() {
  var e7 = rv, t = rv, r = Sa, n, i, a, o = be, s, c, u;
  function l() {
    var h = Math.min(e7.length, t.length);
    return o !== be && (o = aU(e7[0], e7[h - 1])), s = h > 2 ? sU : oU, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(e7.map(n), t, r)))(n(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(t, e7.map(n), Cc)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e7 = Array.from(h, jc), l()) : e7.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), l()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = ep, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? true : be, l()) : o !== be;
  }, f.interpolate = function(h) {
    return arguments.length ? (r = h, l()) : r;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, d) {
    return n = h, i = d, l();
  };
}
function rp() {
  return Gu()(be, be);
}
function cU(e7) {
  return Math.abs(e7 = Math.round(e7)) >= 1e21 ? e7.toLocaleString("en").replace(/,/g, "") : e7.toString(10);
}
function Bc(e7, t) {
  if (!isFinite(e7) || e7 === 0) return null;
  var r = (e7 = t ? e7.toExponential(t - 1) : e7.toExponential()).indexOf("e"), n = e7.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e7.slice(r + 1)];
}
function Vi(e7) {
  return e7 = Bc(Math.abs(e7)), e7 ? e7[1] : NaN;
}
function uU(e7, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e7[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); ) s = e7[o = (o + 1) % e7.length];
    return a.reverse().join(t);
  };
}
function lU(e7) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e7[+r];
    });
  };
}
var fU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function So(e7) {
  if (!(t = fU.exec(e7))) throw new Error("invalid format: " + e7);
  var t;
  return new np({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
So.prototype = np.prototype;
function np(e7) {
  this.fill = e7.fill === void 0 ? " " : e7.fill + "", this.align = e7.align === void 0 ? ">" : e7.align + "", this.sign = e7.sign === void 0 ? "-" : e7.sign + "", this.symbol = e7.symbol === void 0 ? "" : e7.symbol + "", this.zero = !!e7.zero, this.width = e7.width === void 0 ? void 0 : +e7.width, this.comma = !!e7.comma, this.precision = e7.precision === void 0 ? void 0 : +e7.precision, this.trim = !!e7.trim, this.type = e7.type === void 0 ? "" : e7.type + "";
}
np.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hU(e7) {
  t: for (var t = e7.length, r = 1, n = -1, i; r < t; ++r) switch (e7[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e7[r]) break t;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e7.slice(0, n) + e7.slice(i + 1) : e7;
}
var Rc;
function dU(e7, t) {
  var r = Bc(e7, t);
  if (!r) return Rc = void 0, e7.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Rc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Bc(e7, Math.max(0, t + a - 1))[0];
}
function nv(e7, t) {
  var r = Bc(e7, t);
  if (!r) return e7 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const iv = { "%": (e7, t) => (e7 * 100).toFixed(t), b: (e7) => Math.round(e7).toString(2), c: (e7) => e7 + "", d: cU, e: (e7, t) => e7.toExponential(t), f: (e7, t) => e7.toFixed(t), g: (e7, t) => e7.toPrecision(t), o: (e7) => Math.round(e7).toString(8), p: (e7, t) => nv(e7 * 100, t), r: nv, s: dU, X: (e7) => Math.round(e7).toString(16).toUpperCase(), x: (e7) => Math.round(e7).toString(16) };
function av(e7) {
  return e7;
}
var ov = Array.prototype.map, sv = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function pU(e7) {
  var t = e7.grouping === void 0 || e7.thousands === void 0 ? av : uU(ov.call(e7.grouping, Number), e7.thousands + ""), r = e7.currency === void 0 ? "" : e7.currency[0] + "", n = e7.currency === void 0 ? "" : e7.currency[1] + "", i = e7.decimal === void 0 ? "." : e7.decimal + "", a = e7.numerals === void 0 ? av : lU(ov.call(e7.numerals, String)), o = e7.percent === void 0 ? "%" : e7.percent + "", s = e7.minus === void 0 ? "\u2212" : e7.minus + "", c = e7.nan === void 0 ? "NaN" : e7.nan + "";
  function u(f, h) {
    f = So(f);
    var d = f.fill, y = f.align, m = f.sign, p = f.symbol, _ = f.zero, g = f.width, w = f.comma, S = f.precision, v = f.trim, b = f.type;
    b === "n" ? (w = true, b = "g") : iv[b] || (S === void 0 && (S = 12), v = true, b = "g"), (_ || d === "0" && y === "=") && (_ = true, d = "0", y = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), P = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), T = iv[b], $ = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function E(I) {
      var j = O, N = P, M, C, R;
      if (b === "c") N = T(I) + N, I = "";
      else {
        I = +I;
        var F = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? c : T(Math.abs(I), S), v && (I = hU(I)), F && +I == 0 && m !== "+" && (F = false), j = (F ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + j, N = (b === "s" && !isNaN(I) && Rc !== void 0 ? sv[8 + Rc / 3] : "") + N + (F && m === "(" ? ")" : ""), $) {
          for (M = -1, C = I.length; ++M < C; ) if (R = I.charCodeAt(M), 48 > R || R > 57) {
            N = (R === 46 ? i + I.slice(M + 1) : I.slice(M)) + N, I = I.slice(0, M);
            break;
          }
        }
      }
      w && !_ && (I = t(I, 1 / 0));
      var U = j.length + I.length + N.length, q = U < g ? new Array(g - U + 1).join(d) : "";
      switch (w && _ && (I = t(q + I, q.length ? g - N.length : 1 / 0), q = ""), y) {
        case "<":
          I = j + I + N + q;
          break;
        case "=":
          I = j + q + I + N;
          break;
        case "^":
          I = q.slice(0, U = q.length >> 1) + j + I + N + q.slice(U);
          break;
        default:
          I = q + j + I + N;
          break;
      }
      return a(I);
    }
    return E.toString = function() {
      return f + "";
    }, E;
  }
  function l(f, h) {
    var d = Math.max(-8, Math.min(8, Math.floor(Vi(h) / 3))) * 3, y = Math.pow(10, -d), m = u((f = So(f), f.type = "f", f), { suffix: sv[8 + d / 3] });
    return function(p) {
      return m(y * p);
    };
  }
  return { format: u, formatPrefix: l };
}
var vs, ip, Kw;
yU({ thousands: ",", grouping: [3], currency: ["$", ""] });
function yU(e7) {
  return vs = pU(e7), ip = vs.format, Kw = vs.formatPrefix, vs;
}
function mU(e7) {
  return Math.max(0, -Vi(Math.abs(e7)));
}
function vU(e7, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vi(t) / 3))) * 3 - Vi(Math.abs(e7)));
}
function gU(e7, t) {
  return e7 = Math.abs(e7), t = Math.abs(t) - e7, Math.max(0, Vi(t) - Vi(e7)) + 1;
}
function Yw(e7, t, r, n) {
  var i = Yf(e7, t, r), a;
  switch (n = So(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e7), Math.abs(t));
      return n.precision == null && !isNaN(a = vU(i, o)) && (n.precision = a), Kw(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = gU(i, Math.max(Math.abs(e7), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = mU(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return ip(n);
}
function On(e7) {
  var t = e7.domain;
  return e7.ticks = function(r) {
    var n = t();
    return Hf(n[0], n[n.length - 1], r ?? 10);
  }, e7.tickFormat = function(r, n) {
    var i = t();
    return Yw(i[0], i[i.length - 1], r ?? 10, n);
  }, e7.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Kf(o, s, r), u === c) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      c = u;
    }
    return e7;
  }, e7;
}
function kc() {
  var e7 = rp();
  return e7.copy = function() {
    return ns(e7, kc());
  }, tr.apply(e7, arguments), On(e7);
}
function Xw(e7) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e7 = Array.from(n, jc), r) : e7.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Xw(e7).unknown(t);
  }, e7 = arguments.length ? Array.from(e7, jc) : [0, 1], On(r);
}
function Jw(e7, t) {
  e7 = e7.slice();
  var r = 0, n = e7.length - 1, i = e7[r], a = e7[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e7[r] = t.floor(i), e7[n] = t.ceil(a), e7;
}
function cv(e7) {
  return Math.log(e7);
}
function uv(e7) {
  return Math.exp(e7);
}
function bU(e7) {
  return -Math.log(-e7);
}
function _U(e7) {
  return -Math.exp(-e7);
}
function wU(e7) {
  return isFinite(e7) ? +("1e" + e7) : e7 < 0 ? 0 : e7;
}
function SU(e7) {
  return e7 === 10 ? wU : e7 === Math.E ? Math.exp : (t) => Math.pow(e7, t);
}
function OU(e7) {
  return e7 === Math.E ? Math.log : e7 === 10 && Math.log10 || e7 === 2 && Math.log2 || (e7 = Math.log(e7), (t) => Math.log(t) / e7);
}
function lv(e7) {
  return (t, r) => -e7(-t, r);
}
function ap(e7) {
  const t = e7(cv, uv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = OU(n), a = SU(n), r()[0] < 0 ? (i = lv(i), a = lv(a), e7(bU, _U)) : e7(cv, uv), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let u = c[0], l = c[c.length - 1];
    const f = l < u;
    f && ([u, l] = [l, u]);
    let h = i(u), d = i(l), y, m;
    const p = s == null ? 10 : +s;
    let _ = [];
    if (!(n % 1) && d - h < p) {
      if (h = Math.floor(h), d = Math.ceil(d), u > 0) {
        for (; h <= d; ++h) for (y = 1; y < n; ++y) if (m = h < 0 ? y / a(-h) : y * a(h), !(m < u)) {
          if (m > l) break;
          _.push(m);
        }
      } else for (; h <= d; ++h) for (y = n - 1; y >= 1; --y) if (m = h > 0 ? y / a(-h) : y * a(h), !(m < u)) {
        if (m > l) break;
        _.push(m);
      }
      _.length * 2 < p && (_ = Hf(u, l, p));
    } else _ = Hf(h, d, Math.min(d - h, p)).map(a);
    return f ? _.reverse() : _;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = So(c)).precision == null && (c.trim = true), c = ip(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(Jw(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function Qw() {
  const e7 = ap(Gu()).domain([1, 10]);
  return e7.copy = () => ns(e7, Qw()).base(e7.base()), tr.apply(e7, arguments), e7;
}
function fv(e7) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e7));
  };
}
function hv(e7) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e7;
  };
}
function op(e7) {
  var t = 1, r = e7(fv(t), hv(t));
  return r.constant = function(n) {
    return arguments.length ? e7(fv(t = +n), hv(t)) : t;
  }, On(r);
}
function Zw() {
  var e7 = op(Gu());
  return e7.copy = function() {
    return ns(e7, Zw()).constant(e7.constant());
  }, tr.apply(e7, arguments);
}
function dv(e7) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e7) : Math.pow(t, e7);
  };
}
function xU(e7) {
  return e7 < 0 ? -Math.sqrt(-e7) : Math.sqrt(e7);
}
function AU(e7) {
  return e7 < 0 ? -e7 * e7 : e7 * e7;
}
function sp(e7) {
  var t = e7(be, be), r = 1;
  function n() {
    return r === 1 ? e7(be, be) : r === 0.5 ? e7(xU, AU) : e7(dv(r), dv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, On(t);
}
function cp() {
  var e7 = sp(Gu());
  return e7.copy = function() {
    return ns(e7, cp()).exponent(e7.exponent());
  }, tr.apply(e7, arguments), e7;
}
function PU() {
  return cp.apply(null, arguments).exponent(0.5);
}
function pv(e7) {
  return Math.sign(e7) * e7 * e7;
}
function TU(e7) {
  return Math.sign(e7) * Math.sqrt(Math.abs(e7));
}
function tS() {
  var e7 = rp(), t = [0, 1], r = false, n;
  function i(a) {
    var o = TU(e7(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e7.invert(pv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e7.domain(a), i) : e7.domain();
  }, i.range = function(a) {
    return arguments.length ? (e7.range((t = Array.from(a, jc)).map(pv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e7.clamp(a), i) : e7.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return tS(e7.domain(), t).round(r).clamp(e7.clamp()).unknown(n);
  }, tr.apply(i, arguments), On(i);
}
function eS() {
  var e7 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = DF(e7, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[es(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e7[0], s < r.length ? r[s] : e7[e7.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e7.slice();
    e7 = [];
    for (let s of o) s != null && !isNaN(s = +s) && e7.push(s);
    return e7.sort(dn), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return eS().domain(e7).range(t).unknown(n);
  }, tr.apply(a, arguments);
}
function rS() {
  var e7 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[es(n, c, 0, r)] : a;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e7) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e7, t] = c, e7 = +e7, t = +t, s()) : [e7, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(c) {
    var u = i.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e7, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return rS().domain([e7, t]).range(i).unknown(a);
  }, tr.apply(On(o), arguments);
}
function nS() {
  var e7 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[es(e7, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e7 = Array.from(a), n = Math.min(e7.length, t.length - 1), i) : e7.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e7.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e7[o - 1], e7[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return nS().domain(e7).range(t).unknown(r);
  }, tr.apply(i, arguments);
}
const Ul = /* @__PURE__ */ new Date(), zl = /* @__PURE__ */ new Date();
function oe(e7, t, r, n) {
  function i(a) {
    return e7(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e7(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e7(a = new Date(a - 1)), t(a, 1), e7(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const c = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e7(a);
    while (u < a && a < o);
    return c;
  }, i.filter = (a) => oe((o) => {
    if (o >= o) for (; e7(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o) if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --s >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (Ul.setTime(+a), zl.setTime(+o), e7(Ul), e7(zl), Math.floor(r(Ul, zl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Lc = oe(() => {
}, (e7, t) => {
  e7.setTime(+e7 + t);
}, (e7, t) => t - e7);
Lc.every = (e7) => (e7 = Math.floor(e7), !isFinite(e7) || !(e7 > 0) ? null : e7 > 1 ? oe((t) => {
  t.setTime(Math.floor(t / e7) * e7);
}, (t, r) => {
  t.setTime(+t + r * e7);
}, (t, r) => (r - t) / e7) : Lc);
Lc.range;
const Rr = 1e3, He = Rr * 60, kr = He * 60, Vr = kr * 24, up = Vr * 7, yv = Vr * 30, Wl = Vr * 365, Rn = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds());
}, (e7, t) => {
  e7.setTime(+e7 + t * Rr);
}, (e7, t) => (t - e7) / Rr, (e7) => e7.getUTCSeconds());
Rn.range;
const lp = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * Rr);
}, (e7, t) => {
  e7.setTime(+e7 + t * He);
}, (e7, t) => (t - e7) / He, (e7) => e7.getMinutes());
lp.range;
const fp = oe((e7) => {
  e7.setUTCSeconds(0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * He);
}, (e7, t) => (t - e7) / He, (e7) => e7.getUTCMinutes());
fp.range;
const hp = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * Rr - e7.getMinutes() * He);
}, (e7, t) => {
  e7.setTime(+e7 + t * kr);
}, (e7, t) => (t - e7) / kr, (e7) => e7.getHours());
hp.range;
const dp = oe((e7) => {
  e7.setUTCMinutes(0, 0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * kr);
}, (e7, t) => (t - e7) / kr, (e7) => e7.getUTCHours());
dp.range;
const is = oe((e7) => e7.setHours(0, 0, 0, 0), (e7, t) => e7.setDate(e7.getDate() + t), (e7, t) => (t - e7 - (t.getTimezoneOffset() - e7.getTimezoneOffset()) * He) / Vr, (e7) => e7.getDate() - 1);
is.range;
const Hu = oe((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / Vr, (e7) => e7.getUTCDate() - 1);
Hu.range;
const iS = oe((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / Vr, (e7) => Math.floor(e7 / Vr));
iS.range;
function ri(e7) {
  return oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e7) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * He) / up);
}
const Ku = ri(0), Fc = ri(1), IU = ri(2), EU = ri(3), qi = ri(4), $U = ri(5), MU = ri(6);
Ku.range;
Fc.range;
IU.range;
EU.range;
qi.range;
$U.range;
MU.range;
function ni(e7) {
  return oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e7) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / up);
}
const Yu = ni(0), Uc = ni(1), DU = ni(2), NU = ni(3), Gi = ni(4), CU = ni(5), jU = ni(6);
Yu.range;
Uc.range;
DU.range;
NU.range;
Gi.range;
CU.range;
jU.range;
const pp = oe((e7) => {
  e7.setDate(1), e7.setHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setMonth(e7.getMonth() + t);
}, (e7, t) => t.getMonth() - e7.getMonth() + (t.getFullYear() - e7.getFullYear()) * 12, (e7) => e7.getMonth());
pp.range;
const yp = oe((e7) => {
  e7.setUTCDate(1), e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCMonth(e7.getUTCMonth() + t);
}, (e7, t) => t.getUTCMonth() - e7.getUTCMonth() + (t.getUTCFullYear() - e7.getUTCFullYear()) * 12, (e7) => e7.getUTCMonth());
yp.range;
const qr = oe((e7) => {
  e7.setMonth(0, 1), e7.setHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setFullYear(e7.getFullYear() + t);
}, (e7, t) => t.getFullYear() - e7.getFullYear(), (e7) => e7.getFullYear());
qr.every = (e7) => !isFinite(e7 = Math.floor(e7)) || !(e7 > 0) ? null : oe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e7) * e7), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e7);
});
qr.range;
const Gr = oe((e7) => {
  e7.setUTCMonth(0, 1), e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCFullYear(e7.getUTCFullYear() + t);
}, (e7, t) => t.getUTCFullYear() - e7.getUTCFullYear(), (e7) => e7.getUTCFullYear());
Gr.every = (e7) => !isFinite(e7 = Math.floor(e7)) || !(e7 > 0) ? null : oe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e7) * e7), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e7);
});
Gr.range;
function aS(e7, t, r, n, i, a) {
  const o = [[Rn, 1, Rr], [Rn, 5, 5 * Rr], [Rn, 15, 15 * Rr], [Rn, 30, 30 * Rr], [a, 1, He], [a, 5, 5 * He], [a, 15, 15 * He], [a, 30, 30 * He], [i, 1, kr], [i, 3, 3 * kr], [i, 6, 6 * kr], [i, 12, 12 * kr], [n, 1, Vr], [n, 2, 2 * Vr], [r, 1, up], [t, 1, yv], [t, 3, 3 * yv], [e7, 1, Wl]];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), y = d ? d.range(u, +l + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = Jd(([, , p]) => p).right(o, h);
    if (d === o.length) return e7.every(Yf(u / Wl, l / Wl, f));
    if (d === 0) return Lc.every(Math.max(Yf(u, l, f), 1));
    const [y, m] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(m);
  }
  return [s, c];
}
const [BU, RU] = aS(Gr, yp, Yu, iS, dp, fp), [kU, LU] = aS(qr, pp, Ku, is, hp, lp);
function Vl(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
    return t.setFullYear(e7.y), t;
  }
  return new Date(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
}
function ql(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(Date.UTC(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
    return t.setUTCFullYear(e7.y), t;
  }
  return new Date(Date.UTC(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
}
function Da(e7, t, r) {
  return { y: e7, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function FU(e7) {
  var t = e7.dateTime, r = e7.date, n = e7.time, i = e7.periods, a = e7.days, o = e7.shortDays, s = e7.months, c = e7.shortMonths, u = Na(i), l = Ca(i), f = Na(a), h = Ca(a), d = Na(o), y = Ca(o), m = Na(s), p = Ca(s), _ = Na(c), g = Ca(c), w = { a: R, A: F, b: U, B: q, c: null, d: wv, e: wv, f: u3, g: b3, G: w3, H: o3, I: s3, j: c3, L: oS, m: l3, M: f3, p: rt, q: W, Q: xv, s: Av, S: h3, u: d3, U: p3, V: y3, w: m3, W: v3, x: null, X: null, y: g3, Y: _3, Z: S3, "%": Ov }, S = { a: it, A: Rt, b: Yt, B: Me, c: null, d: Sv, e: Sv, f: P3, g: B3, G: k3, H: O3, I: x3, j: A3, L: cS, m: T3, M: I3, p: Pn, q: we, Q: xv, s: Av, S: E3, u: $3, U: M3, V: D3, w: N3, W: C3, x: null, X: null, y: j3, Y: R3, Z: L3, "%": Ov }, v = { a: $, A: E, b: I, B: j, c: N, d: bv, e: bv, f: r3, g: gv, G: vv, H: _v, I: _v, j: QU, L: e32, m: JU, M: ZU, p: T, q: XU, Q: i3, s: a3, S: t3, u: qU, U: GU, V: HU, w: VU, W: KU, x: M, X: C, y: gv, Y: vv, Z: YU, "%": n3 };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), S.x = b(r, S), S.X = b(n, S), S.c = b(t, S);
  function b(z, ft) {
    return function(ht) {
      var k = [], Vt = -1, bt = 0, Qt = z.length, Zt, Se, tn;
      for (ht instanceof Date || (ht = /* @__PURE__ */ new Date(+ht)); ++Vt < Qt; ) z.charCodeAt(Vt) === 37 && (k.push(z.slice(bt, Vt)), (Se = mv[Zt = z.charAt(++Vt)]) != null ? Zt = z.charAt(++Vt) : Se = Zt === "e" ? " " : "0", (tn = ft[Zt]) && (Zt = tn(ht, Se)), k.push(Zt), bt = Vt + 1);
      return k.push(z.slice(bt, Vt)), k.join("");
    };
  }
  function O(z, ft) {
    return function(ht) {
      var k = Da(1900, void 0, 1), Vt = P(k, z, ht += "", 0), bt, Qt;
      if (Vt != ht.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (ft && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (bt = ql(Da(k.y, 0, 1)), Qt = bt.getUTCDay(), bt = Qt > 4 || Qt === 0 ? Uc.ceil(bt) : Uc(bt), bt = Hu.offset(bt, (k.V - 1) * 7), k.y = bt.getUTCFullYear(), k.m = bt.getUTCMonth(), k.d = bt.getUTCDate() + (k.w + 6) % 7) : (bt = Vl(Da(k.y, 0, 1)), Qt = bt.getDay(), bt = Qt > 4 || Qt === 0 ? Fc.ceil(bt) : Fc(bt), bt = is.offset(bt, (k.V - 1) * 7), k.y = bt.getFullYear(), k.m = bt.getMonth(), k.d = bt.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Qt = "Z" in k ? ql(Da(k.y, 0, 1)).getUTCDay() : Vl(Da(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Qt + 5) % 7 : k.w + k.U * 7 - (Qt + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, ql(k)) : Vl(k);
    };
  }
  function P(z, ft, ht, k) {
    for (var Vt = 0, bt = ft.length, Qt = ht.length, Zt, Se; Vt < bt; ) {
      if (k >= Qt) return -1;
      if (Zt = ft.charCodeAt(Vt++), Zt === 37) {
        if (Zt = ft.charAt(Vt++), Se = v[Zt in mv ? ft.charAt(Vt++) : Zt], !Se || (k = Se(z, ht, k)) < 0) return -1;
      } else if (Zt != ht.charCodeAt(k++)) return -1;
    }
    return k;
  }
  function T(z, ft, ht) {
    var k = u.exec(ft.slice(ht));
    return k ? (z.p = l.get(k[0].toLowerCase()), ht + k[0].length) : -1;
  }
  function $(z, ft, ht) {
    var k = d.exec(ft.slice(ht));
    return k ? (z.w = y.get(k[0].toLowerCase()), ht + k[0].length) : -1;
  }
  function E(z, ft, ht) {
    var k = f.exec(ft.slice(ht));
    return k ? (z.w = h.get(k[0].toLowerCase()), ht + k[0].length) : -1;
  }
  function I(z, ft, ht) {
    var k = _.exec(ft.slice(ht));
    return k ? (z.m = g.get(k[0].toLowerCase()), ht + k[0].length) : -1;
  }
  function j(z, ft, ht) {
    var k = m.exec(ft.slice(ht));
    return k ? (z.m = p.get(k[0].toLowerCase()), ht + k[0].length) : -1;
  }
  function N(z, ft, ht) {
    return P(z, t, ft, ht);
  }
  function M(z, ft, ht) {
    return P(z, r, ft, ht);
  }
  function C(z, ft, ht) {
    return P(z, n, ft, ht);
  }
  function R(z) {
    return o[z.getDay()];
  }
  function F(z) {
    return a[z.getDay()];
  }
  function U(z) {
    return c[z.getMonth()];
  }
  function q(z) {
    return s[z.getMonth()];
  }
  function rt(z) {
    return i[+(z.getHours() >= 12)];
  }
  function W(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function it(z) {
    return o[z.getUTCDay()];
  }
  function Rt(z) {
    return a[z.getUTCDay()];
  }
  function Yt(z) {
    return c[z.getUTCMonth()];
  }
  function Me(z) {
    return s[z.getUTCMonth()];
  }
  function Pn(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function we(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return { format: function(z) {
    var ft = b(z += "", w);
    return ft.toString = function() {
      return z;
    }, ft;
  }, parse: function(z) {
    var ft = O(z += "", false);
    return ft.toString = function() {
      return z;
    }, ft;
  }, utcFormat: function(z) {
    var ft = b(z += "", S);
    return ft.toString = function() {
      return z;
    }, ft;
  }, utcParse: function(z) {
    var ft = O(z += "", true);
    return ft.toString = function() {
      return z;
    }, ft;
  } };
}
var mv = { "-": "", _: " ", 0: "0" }, ce = /^\s*\d+/, UU = /^%/, zU = /[\\^$*+?|[\]().{}]/g;
function wt(e7, t, r) {
  var n = e7 < 0 ? "-" : "", i = (n ? -e7 : e7) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function WU(e7) {
  return e7.replace(zU, "\\$&");
}
function Na(e7) {
  return new RegExp("^(?:" + e7.map(WU).join("|") + ")", "i");
}
function Ca(e7) {
  return new Map(e7.map((t, r) => [t.toLowerCase(), r]));
}
function VU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.w = +n[0], r + n[0].length) : -1;
}
function qU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.u = +n[0], r + n[0].length) : -1;
}
function GU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.U = +n[0], r + n[0].length) : -1;
}
function HU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.V = +n[0], r + n[0].length) : -1;
}
function KU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.W = +n[0], r + n[0].length) : -1;
}
function vv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 4));
  return n ? (e7.y = +n[0], r + n[0].length) : -1;
}
function gv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function YU(e7, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e7.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function XU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function JU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.m = n[0] - 1, r + n[0].length) : -1;
}
function bv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.d = +n[0], r + n[0].length) : -1;
}
function QU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e7.m = 0, e7.d = +n[0], r + n[0].length) : -1;
}
function _v(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.H = +n[0], r + n[0].length) : -1;
}
function ZU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.M = +n[0], r + n[0].length) : -1;
}
function t3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.S = +n[0], r + n[0].length) : -1;
}
function e32(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e7.L = +n[0], r + n[0].length) : -1;
}
function r3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 6));
  return n ? (e7.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function n3(e7, t, r) {
  var n = UU.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function i3(e7, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e7.Q = +n[0], r + n[0].length) : -1;
}
function a3(e7, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e7.s = +n[0], r + n[0].length) : -1;
}
function wv(e7, t) {
  return wt(e7.getDate(), t, 2);
}
function o3(e7, t) {
  return wt(e7.getHours(), t, 2);
}
function s3(e7, t) {
  return wt(e7.getHours() % 12 || 12, t, 2);
}
function c3(e7, t) {
  return wt(1 + is.count(qr(e7), e7), t, 3);
}
function oS(e7, t) {
  return wt(e7.getMilliseconds(), t, 3);
}
function u3(e7, t) {
  return oS(e7, t) + "000";
}
function l3(e7, t) {
  return wt(e7.getMonth() + 1, t, 2);
}
function f3(e7, t) {
  return wt(e7.getMinutes(), t, 2);
}
function h3(e7, t) {
  return wt(e7.getSeconds(), t, 2);
}
function d3(e7) {
  var t = e7.getDay();
  return t === 0 ? 7 : t;
}
function p3(e7, t) {
  return wt(Ku.count(qr(e7) - 1, e7), t, 2);
}
function sS(e7) {
  var t = e7.getDay();
  return t >= 4 || t === 0 ? qi(e7) : qi.ceil(e7);
}
function y3(e7, t) {
  return e7 = sS(e7), wt(qi.count(qr(e7), e7) + (qr(e7).getDay() === 4), t, 2);
}
function m3(e7) {
  return e7.getDay();
}
function v3(e7, t) {
  return wt(Fc.count(qr(e7) - 1, e7), t, 2);
}
function g3(e7, t) {
  return wt(e7.getFullYear() % 100, t, 2);
}
function b3(e7, t) {
  return e7 = sS(e7), wt(e7.getFullYear() % 100, t, 2);
}
function _3(e7, t) {
  return wt(e7.getFullYear() % 1e4, t, 4);
}
function w3(e7, t) {
  var r = e7.getDay();
  return e7 = r >= 4 || r === 0 ? qi(e7) : qi.ceil(e7), wt(e7.getFullYear() % 1e4, t, 4);
}
function S3(e7) {
  var t = e7.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + wt(t / 60 | 0, "0", 2) + wt(t % 60, "0", 2);
}
function Sv(e7, t) {
  return wt(e7.getUTCDate(), t, 2);
}
function O3(e7, t) {
  return wt(e7.getUTCHours(), t, 2);
}
function x3(e7, t) {
  return wt(e7.getUTCHours() % 12 || 12, t, 2);
}
function A3(e7, t) {
  return wt(1 + Hu.count(Gr(e7), e7), t, 3);
}
function cS(e7, t) {
  return wt(e7.getUTCMilliseconds(), t, 3);
}
function P3(e7, t) {
  return cS(e7, t) + "000";
}
function T3(e7, t) {
  return wt(e7.getUTCMonth() + 1, t, 2);
}
function I3(e7, t) {
  return wt(e7.getUTCMinutes(), t, 2);
}
function E3(e7, t) {
  return wt(e7.getUTCSeconds(), t, 2);
}
function $3(e7) {
  var t = e7.getUTCDay();
  return t === 0 ? 7 : t;
}
function M3(e7, t) {
  return wt(Yu.count(Gr(e7) - 1, e7), t, 2);
}
function uS(e7) {
  var t = e7.getUTCDay();
  return t >= 4 || t === 0 ? Gi(e7) : Gi.ceil(e7);
}
function D3(e7, t) {
  return e7 = uS(e7), wt(Gi.count(Gr(e7), e7) + (Gr(e7).getUTCDay() === 4), t, 2);
}
function N3(e7) {
  return e7.getUTCDay();
}
function C3(e7, t) {
  return wt(Uc.count(Gr(e7) - 1, e7), t, 2);
}
function j3(e7, t) {
  return wt(e7.getUTCFullYear() % 100, t, 2);
}
function B3(e7, t) {
  return e7 = uS(e7), wt(e7.getUTCFullYear() % 100, t, 2);
}
function R3(e7, t) {
  return wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function k3(e7, t) {
  var r = e7.getUTCDay();
  return e7 = r >= 4 || r === 0 ? Gi(e7) : Gi.ceil(e7), wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function L3() {
  return "+0000";
}
function Ov() {
  return "%";
}
function xv(e7) {
  return +e7;
}
function Av(e7) {
  return Math.floor(+e7 / 1e3);
}
var ci, lS, fS;
F3({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function F3(e7) {
  return ci = FU(e7), lS = ci.format, ci.parse, fS = ci.utcFormat, ci.utcParse, ci;
}
function U3(e7) {
  return new Date(e7);
}
function z3(e7) {
  return e7 instanceof Date ? +e7 : +/* @__PURE__ */ new Date(+e7);
}
function mp(e7, t, r, n, i, a, o, s, c, u) {
  var l = rp(), f = l.invert, h = l.domain, d = u(".%L"), y = u(":%S"), m = u("%I:%M"), p = u("%I %p"), _ = u("%a %d"), g = u("%b %d"), w = u("%B"), S = u("%Y");
  function v(b) {
    return (c(b) < b ? d : s(b) < b ? y : o(b) < b ? m : a(b) < b ? p : n(b) < b ? i(b) < b ? _ : g : r(b) < b ? w : S)(b);
  }
  return l.invert = function(b) {
    return new Date(f(b));
  }, l.domain = function(b) {
    return arguments.length ? h(Array.from(b, z3)) : h().map(U3);
  }, l.ticks = function(b) {
    var O = h();
    return e7(O[0], O[O.length - 1], b ?? 10);
  }, l.tickFormat = function(b, O) {
    return O == null ? v : u(O);
  }, l.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(Jw(O, b)) : l;
  }, l.copy = function() {
    return ns(l, mp(e7, t, r, n, i, a, o, s, c, u));
  }, l;
}
function W3() {
  return tr.apply(mp(kU, LU, qr, pp, Ku, is, hp, lp, Rn, lS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function V3() {
  return tr.apply(mp(BU, RU, Gr, yp, Yu, Hu, dp, fp, Rn, fS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Xu() {
  var e7 = 0, t = 1, r, n, i, a, o = be, s = false, c;
  function u(f) {
    return f == null || isNaN(f = +f) ? c : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, s ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e7, t] = f, r = a(e7 = +e7), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), u) : [e7, t];
  }, u.clamp = function(f) {
    return arguments.length ? (s = !!f, u) : s;
  }, u.interpolator = function(f) {
    return arguments.length ? (o = f, u) : o;
  };
  function l(f) {
    return function(h) {
      var d, y;
      return arguments.length ? ([d, y] = h, o = f(d, y), u) : [o(0), o(1)];
    };
  }
  return u.range = l(Sa), u.rangeRound = l(ep), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e7), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function xn(e7, t) {
  return t.domain(e7.domain()).interpolator(e7.interpolator()).clamp(e7.clamp()).unknown(e7.unknown());
}
function hS() {
  var e7 = On(Xu()(be));
  return e7.copy = function() {
    return xn(e7, hS());
  }, Zr.apply(e7, arguments);
}
function dS() {
  var e7 = ap(Xu()).domain([1, 10]);
  return e7.copy = function() {
    return xn(e7, dS()).base(e7.base());
  }, Zr.apply(e7, arguments);
}
function pS() {
  var e7 = op(Xu());
  return e7.copy = function() {
    return xn(e7, pS()).constant(e7.constant());
  }, Zr.apply(e7, arguments);
}
function vp() {
  var e7 = sp(Xu());
  return e7.copy = function() {
    return xn(e7, vp()).exponent(e7.exponent());
  }, Zr.apply(e7, arguments);
}
function q3() {
  return vp.apply(null, arguments).exponent(0.5);
}
function yS() {
  var e7 = [], t = be;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((es(e7, n, 1) - 1) / (e7.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e7.slice();
    e7 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e7.push(i);
    return e7.sort(dn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e7.map((n, i) => t(i / (e7.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => MF(e7, a / n));
  }, r.copy = function() {
    return yS(t).domain(e7);
  }, Zr.apply(r, arguments);
}
function Ju() {
  var e7 = 0, t = 0.5, r = 1, n = 1, i, a, o, s, c, u = be, l, f = false, h;
  function d(m) {
    return isNaN(m = +m) ? h : (m = 0.5 + ((m = +l(m)) - a) * (n * m < n * a ? s : c), u(f ? Math.max(0, Math.min(1, m)) : m));
  }
  d.domain = function(m) {
    return arguments.length ? ([e7, t, r] = m, i = l(e7 = +e7), a = l(t = +t), o = l(r = +r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d) : [e7, t, r];
  }, d.clamp = function(m) {
    return arguments.length ? (f = !!m, d) : f;
  }, d.interpolator = function(m) {
    return arguments.length ? (u = m, d) : u;
  };
  function y(m) {
    return function(p) {
      var _, g, w;
      return arguments.length ? ([_, g, w] = p, u = nU(m, [_, g, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = y(Sa), d.rangeRound = y(ep), d.unknown = function(m) {
    return arguments.length ? (h = m, d) : h;
  }, function(m) {
    return l = m, i = m(e7), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function mS() {
  var e7 = On(Ju()(be));
  return e7.copy = function() {
    return xn(e7, mS());
  }, Zr.apply(e7, arguments);
}
function vS() {
  var e7 = ap(Ju()).domain([0.1, 1, 10]);
  return e7.copy = function() {
    return xn(e7, vS()).base(e7.base());
  }, Zr.apply(e7, arguments);
}
function gS() {
  var e7 = op(Ju());
  return e7.copy = function() {
    return xn(e7, gS()).constant(e7.constant());
  }, Zr.apply(e7, arguments);
}
function gp() {
  var e7 = sp(Ju());
  return e7.copy = function() {
    return xn(e7, gp()).exponent(e7.exponent());
  }, Zr.apply(e7, arguments);
}
function G3() {
  return gp.apply(null, arguments).exponent(0.5);
}
const Pv = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: go, scaleDiverging: mS, scaleDivergingLog: vS, scaleDivergingPow: gp, scaleDivergingSqrt: G3, scaleDivergingSymlog: gS, scaleIdentity: Xw, scaleImplicit: Xf, scaleLinear: kc, scaleLog: Qw, scaleOrdinal: Qd, scalePoint: Ja, scalePow: cp, scaleQuantile: eS, scaleQuantize: rS, scaleRadial: tS, scaleSequential: hS, scaleSequentialLog: dS, scaleSequentialPow: vp, scaleSequentialQuantile: yS, scaleSequentialSqrt: q3, scaleSequentialSymlog: pS, scaleSqrt: PU, scaleSymlog: Zw, scaleThreshold: nS, scaleTime: W3, scaleUtc: V3, tickFormat: Yw }, Symbol.toStringTag, { value: "Module" }));
var H3 = da;
function K3(e7, t, r) {
  for (var n = -1, i = e7.length; ++n < i; ) {
    var a = e7[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !H3(o) : r(o, s))) var s = o, c = a;
  }
  return c;
}
var bS = K3;
function Y3(e7, t) {
  return e7 > t;
}
var X3 = Y3, J3 = bS, Q3 = X3, Z3 = wa;
function t8(e7) {
  return e7 && e7.length ? J3(e7, Z3, Q3) : void 0;
}
var e8 = t8;
const un = Bt(e8);
function r8(e7, t) {
  return e7 < t;
}
var n8 = r8, i8 = bS, a8 = n8, o8 = wa;
function s8(e7) {
  return e7 && e7.length ? i8(e7, o8, a8) : void 0;
}
var c8 = s8;
const Qu = Bt(c8);
var u8 = Dd, l8 = wn, f8 = Ew, h8 = $e;
function d8(e7, t) {
  var r = h8(e7) ? u8 : f8;
  return r(e7, l8(t));
}
var p8 = d8, y8 = Tw, m8 = p8;
function v8(e7, t) {
  return y8(m8(e7, t), 1);
}
var g8 = v8;
const b8 = Bt(g8);
var _8 = Gd;
function w8(e7, t) {
  return _8(e7, t);
}
var S8 = w8;
const Yn = Bt(S8);
var Oa = 1e9, O8 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, _p, Ut = true, Qe = "[DecimalError] ", zn = Qe + "Invalid argument: ", bp = Qe + "Exponent out of range: ", xa = Math.floor, Nn = Math.pow, x8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Re, se = 1e7, Lt = 7, _S = 9007199254740991, zc = xa(_S / Lt), V = {};
V.absoluteValue = V.abs = function() {
  var e7 = new this.constructor(this);
  return e7.s && (e7.s = 1), e7;
};
V.comparedTo = V.cmp = function(e7) {
  var t, r, n, i, a = this;
  if (e7 = new a.constructor(e7), a.s !== e7.s) return a.s || -e7.s;
  if (a.e !== e7.e) return a.e > e7.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e7.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e7.d[t]) return a.d[t] > e7.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
V.decimalPlaces = V.dp = function() {
  var e7 = this, t = e7.d.length - 1, r = (t - e7.e) * Lt;
  if (t = e7.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
V.dividedBy = V.div = function(e7) {
  return Wr(this, new this.constructor(e7));
};
V.dividedToIntegerBy = V.idiv = function(e7) {
  var t = this, r = t.constructor;
  return Nt(Wr(t, new r(e7), 0, 1), r.precision);
};
V.equals = V.eq = function(e7) {
  return !this.cmp(e7);
};
V.exponent = function() {
  return Jt(this);
};
V.greaterThan = V.gt = function(e7) {
  return this.cmp(e7) > 0;
};
V.greaterThanOrEqualTo = V.gte = function(e7) {
  return this.cmp(e7) >= 0;
};
V.isInteger = V.isint = function() {
  return this.e > this.d.length - 2;
};
V.isNegative = V.isneg = function() {
  return this.s < 0;
};
V.isPositive = V.ispos = function() {
  return this.s > 0;
};
V.isZero = function() {
  return this.s === 0;
};
V.lessThan = V.lt = function(e7) {
  return this.cmp(e7) < 0;
};
V.lessThanOrEqualTo = V.lte = function(e7) {
  return this.cmp(e7) < 1;
};
V.logarithm = V.log = function(e7) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e7 === void 0) e7 = new n(10);
  else if (e7 = new n(e7), e7.s < 1 || e7.eq(Re)) throw Error(Qe + "NaN");
  if (r.s < 1) throw Error(Qe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Re) ? new n(0) : (Ut = false, t = Wr(Oo(r, a), Oo(e7, a), a), Ut = true, Nt(t, i));
};
V.minus = V.sub = function(e7) {
  var t = this;
  return e7 = new t.constructor(e7), t.s == e7.s ? OS(t, e7) : wS(t, (e7.s = -e7.s, e7));
};
V.modulo = V.mod = function(e7) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e7 = new n(e7), !e7.s) throw Error(Qe + "NaN");
  return r.s ? (Ut = false, t = Wr(r, e7, 0, 1).times(e7), Ut = true, r.minus(t)) : Nt(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return SS(this);
};
V.naturalLogarithm = V.ln = function() {
  return Oo(this);
};
V.negated = V.neg = function() {
  var e7 = new this.constructor(this);
  return e7.s = -e7.s || 0, e7;
};
V.plus = V.add = function(e7) {
  var t = this;
  return e7 = new t.constructor(e7), t.s == e7.s ? wS(t, e7) : OS(t, (e7.s = -e7.s, e7));
};
V.precision = V.sd = function(e7) {
  var t, r, n, i = this;
  if (e7 !== void 0 && e7 !== !!e7 && e7 !== 1 && e7 !== 0) throw Error(zn + e7);
  if (t = Jt(i) + 1, n = i.d.length - 1, r = n * Lt + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e7 && t > r ? t : r;
};
V.squareRoot = V.sqrt = function() {
  var e7, t, r, n, i, a, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Qe + "NaN");
  }
  for (e7 = Jt(s), Ut = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = _r(s.d), (t.length + e7) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e7 = xa((e7 + 1) / 2) - (e7 < 0 || e7 % 2), i == 1 / 0 ? t = "5e" + e7 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e7), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Wr(s, a, o + 2)).times(0.5), _r(a.d).slice(0, o) === (t = _r(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (Nt(a, r + 1, 0), a.times(a).eq(s)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return Ut = true, Nt(n, r);
};
V.times = V.mul = function(e7) {
  var t, r, n, i, a, o, s, c, u, l = this, f = l.constructor, h = l.d, d = (e7 = new f(e7)).d;
  if (!l.s || !e7.s) return new f(0);
  for (e7.s *= l.s, r = l.e + e7.e, c = h.length, u = d.length, c < u && (a = h, h = d, d = a, o = c, c = u, u = o), a = [], o = c + u, n = o; n--; ) a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; ) s = a[i] + d[n] * h[i - n - 1] + t, a[i--] = s % se | 0, t = s / se | 0;
    a[i] = (a[i] + t) % se | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e7.d = a, e7.e = r, Ut ? Nt(e7, f.precision) : e7;
};
V.toDecimalPlaces = V.todp = function(e7, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e7 === void 0 ? r : (Ir(e7, 0, Oa), t === void 0 ? t = n.rounding : Ir(t, 0, 8), Nt(r, e7 + Jt(r) + 1, t));
};
V.toExponential = function(e7, t) {
  var r, n = this, i = n.constructor;
  return e7 === void 0 ? r = Xn(n, true) : (Ir(e7, 0, Oa), t === void 0 ? t = i.rounding : Ir(t, 0, 8), n = Nt(new i(n), e7 + 1, t), r = Xn(n, true, e7 + 1)), r;
};
V.toFixed = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? Xn(i) : (Ir(e7, 0, Oa), t === void 0 ? t = a.rounding : Ir(t, 0, 8), n = Nt(new a(i), e7 + Jt(i) + 1, t), r = Xn(n.abs(), false, e7 + Jt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
V.toInteger = V.toint = function() {
  var e7 = this, t = e7.constructor;
  return Nt(new t(e7), Jt(e7) + 1, t.rounding);
};
V.toNumber = function() {
  return +this;
};
V.toPower = V.pow = function(e7) {
  var t, r, n, i, a, o, s = this, c = s.constructor, u = 12, l = +(e7 = new c(e7));
  if (!e7.s) return new c(Re);
  if (s = new c(s), !s.s) {
    if (e7.s < 1) throw Error(Qe + "Infinity");
    return s;
  }
  if (s.eq(Re)) return s;
  if (n = c.precision, e7.eq(Re)) return Nt(s, n);
  if (t = e7.e, r = e7.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= _S) {
      for (i = new c(Re), t = Math.ceil(n / Lt + 4), Ut = false; r % 2 && (i = i.times(s), Iv(i.d, t)), r = xa(r / 2), r !== 0; ) s = s.times(s), Iv(s.d, t);
      return Ut = true, e7.s < 0 ? new c(Re).div(i) : Nt(i, n);
    }
  } else if (a < 0) throw Error(Qe + "NaN");
  return a = a < 0 && e7.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ut = false, i = e7.times(Oo(s, n + u)), Ut = true, i = SS(i), i.s = a, i;
};
V.toPrecision = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? (r = Jt(i), n = Xn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Ir(e7, 1, Oa), t === void 0 ? t = a.rounding : Ir(t, 0, 8), i = Nt(new a(i), e7, t), r = Jt(i), n = Xn(i, e7 <= r || r <= a.toExpNeg, e7)), n;
};
V.toSignificantDigits = V.tosd = function(e7, t) {
  var r = this, n = r.constructor;
  return e7 === void 0 ? (e7 = n.precision, t = n.rounding) : (Ir(e7, 1, Oa), t === void 0 ? t = n.rounding : Ir(t, 0, 8)), Nt(new n(r), e7, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e7 = this, t = Jt(e7), r = e7.constructor;
  return Xn(e7, t <= r.toExpNeg || t >= r.toExpPos);
};
function wS(e7, t) {
  var r, n, i, a, o, s, c, u, l = e7.constructor, f = l.precision;
  if (!e7.s || !t.s) return t.s || (t = new l(e7)), Ut ? Nt(t, f) : t;
  if (c = e7.d, u = t.d, o = e7.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, s = u.length) : (n = u, i = o, s = c.length), o = Math.ceil(f / Lt), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, a = u.length, s - a < 0 && (a = s, n = u, u = c, c = n), r = 0; a; ) r = (c[--a] = c[a] + u[a] + r) / se | 0, c[a] %= se;
  for (r && (c.unshift(r), ++i), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = i, Ut ? Nt(t, f) : t;
}
function Ir(e7, t, r) {
  if (e7 !== ~~e7 || e7 < t || e7 > r) throw Error(zn + e7);
}
function _r(e7) {
  var t, r, n, i = e7.length - 1, a = "", o = e7[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e7[t] + "", r = Lt - n.length, r && (a += sn(r)), a += n;
    o = e7[t], n = o + "", r = Lt - n.length, r && (a += sn(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Wr = /* @__PURE__ */ function() {
  function e7(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; ) a = n[s] * i + o, n[s] = a % se | 0, o = a / se | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, c;
    if (a != o) c = a > o ? 1 : -1;
    else for (s = c = 0; s < a; s++) if (n[s] != i[s]) {
      c = n[s] > i[s] ? 1 : -1;
      break;
    }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * se + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, c, u, l, f, h, d, y, m, p, _, g, w, S, v, b, O, P, T = n.constructor, $ = n.s == i.s ? 1 : -1, E = n.d, I = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(Qe + "Division by zero");
    for (c = n.e - i.e, O = I.length, v = E.length, d = new T($), y = d.d = [], u = 0; I[u] == (E[u] || 0); ) ++u;
    if (I[u] > (E[u] || 0) && --c, a == null ? g = a = T.precision : o ? g = a + (Jt(n) - Jt(i)) + 1 : g = a, g < 0) return new T(0);
    if (g = g / Lt + 2 | 0, u = 0, O == 1) for (l = 0, I = I[0], g++; (u < v || l) && g--; u++) w = l * se + (E[u] || 0), y[u] = w / I | 0, l = w % I | 0;
    else {
      for (l = se / (I[0] + 1) | 0, l > 1 && (I = e7(I, l), E = e7(E, l), O = I.length, v = E.length), S = O, m = E.slice(0, O), p = m.length; p < O; ) m[p++] = 0;
      P = I.slice(), P.unshift(0), b = I[0], I[1] >= se / 2 && ++b;
      do
        l = 0, s = t(I, m, O, p), s < 0 ? (_ = m[0], O != p && (_ = _ * se + (m[1] || 0)), l = _ / b | 0, l > 1 ? (l >= se && (l = se - 1), f = e7(I, l), h = f.length, p = m.length, s = t(f, m, h, p), s == 1 && (l--, r(f, O < h ? P : I, h))) : (l == 0 && (s = l = 1), f = I.slice()), h = f.length, h < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(I, m, O, p), s < 1 && (l++, r(m, O < p ? P : I, p))), p = m.length) : s === 0 && (l++, m = [0]), y[u++] = l, s && m[0] ? m[p++] = E[S] || 0 : (m = [E[S]], p = 1);
      while ((S++ < v || m[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), d.e = c, Nt(d, o ? a + Jt(d) + 1 : a);
  };
}();
function SS(e7, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e7.constructor, f = l.precision;
  if (Jt(e7) > 16) throw Error(bp + Jt(e7));
  if (!e7.s) return new l(Re);
  for (Ut = false, s = f, o = new l(0.03125); e7.abs().gte(0.1); ) e7 = e7.times(o), u += 5;
  for (n = Math.log(Nn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(Re), l.precision = s; ; ) {
    if (i = Nt(i.times(e7), s), r = r.times(++c), o = a.plus(Wr(i, r, s)), _r(o.d).slice(0, s) === _r(a.d).slice(0, s)) {
      for (; u--; ) a = Nt(a.times(a), s);
      return l.precision = f, t == null ? (Ut = true, Nt(a, f)) : a;
    }
    a = o;
  }
}
function Jt(e7) {
  for (var t = e7.e * Lt, r = e7.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Gl(e7, t, r) {
  if (t > e7.LN10.sd()) throw Ut = true, r && (e7.precision = r), Error(Qe + "LN10 precision limit exceeded");
  return Nt(new e7(e7.LN10), t);
}
function sn(e7) {
  for (var t = ""; e7--; ) t += "0";
  return t;
}
function Oo(e7, t) {
  var r, n, i, a, o, s, c, u, l, f = 1, h = 10, d = e7, y = d.d, m = d.constructor, p = m.precision;
  if (d.s < 1) throw Error(Qe + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Re)) return new m(0);
  if (t == null ? (Ut = false, u = p) : u = t, d.eq(10)) return t == null && (Ut = true), Gl(m, u);
  if (u += h, m.precision = u, r = _r(y), n = r.charAt(0), a = Jt(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e7), r = _r(d.d), n = r.charAt(0), f++;
    a = Jt(d), n > 1 ? (d = new m("0." + r), a++) : d = new m(n + "." + r.slice(1));
  } else return c = Gl(m, u + 2, p).times(a + ""), d = Oo(new m(n + "." + r.slice(1)), u - h).plus(c), m.precision = p, t == null ? (Ut = true, Nt(d, p)) : d;
  for (s = o = d = Wr(d.minus(Re), d.plus(Re), u), l = Nt(d.times(d), u), i = 3; ; ) {
    if (o = Nt(o.times(l), u), c = s.plus(Wr(o, new m(i), u)), _r(c.d).slice(0, u) === _r(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(Gl(m, u + 2, p).times(a + ""))), s = Wr(s, new m(f), u), m.precision = p, t == null ? (Ut = true, Nt(s, p)) : s;
    s = c, i += 2;
  }
}
function Tv(e7, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e7.e = xa(r / Lt), e7.d = [], n = (r + 1) % Lt, r < 0 && (n += Lt), n < i) {
      for (n && e7.d.push(+t.slice(0, n)), i -= Lt; n < i; ) e7.d.push(+t.slice(n, n += Lt));
      t = t.slice(n), n = Lt - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e7.d.push(+t), Ut && (e7.e > zc || e7.e < -zc)) throw Error(bp + r);
  } else e7.s = 0, e7.e = 0, e7.d = [0];
  return e7;
}
function Nt(e7, t, r) {
  var n, i, a, o, s, c, u, l, f = e7.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += Lt, i = t, u = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Lt), a = f.length, l >= a) return e7;
    for (u = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= Lt, i = n - Lt + o;
  }
  if (r !== void 0 && (a = Nn(10, o - i - 1), s = u / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e7.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? u / Nn(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e7.s < 0 ? 8 : 7))), t < 1 || !f[0]) return c ? (a = Jt(e7), f.length = 1, t = t - a - 1, f[0] = Nn(10, (Lt - t % Lt) % Lt), e7.e = xa(-t / Lt) || 0) : (f.length = 1, f[0] = e7.e = e7.s = 0), e7;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = Nn(10, Lt - n), f[l] = i > 0 ? (u / Nn(10, o - i) % Nn(10, i) | 0) * a : 0), c) for (; ; ) if (l == 0) {
    (f[0] += a) == se && (f[0] = 1, ++e7.e);
    break;
  } else {
    if (f[l] += a, f[l] != se) break;
    f[l--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ut && (e7.e > zc || e7.e < -zc)) throw Error(bp + Jt(e7));
  return e7;
}
function OS(e7, t) {
  var r, n, i, a, o, s, c, u, l, f, h = e7.constructor, d = h.precision;
  if (!e7.s || !t.s) return t.s ? t.s = -t.s : t = new h(e7), Ut ? Nt(t, d) : t;
  if (c = e7.d, f = t.d, n = t.e, u = e7.e, c = c.slice(), o = u - n, o) {
    for (l = o < 0, l ? (r = c, o = -o, s = f.length) : (r = f, n = u, s = c.length), i = Math.max(Math.ceil(d / Lt), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, s = f.length, l = i < s, l && (s = i), i = 0; i < s; i++) if (c[i] != f[i]) {
      l = c[i] < f[i];
      break;
    }
    o = 0;
  }
  for (l && (r = c, c = f, f = r, t.s = -t.s), s = c.length, i = f.length - s; i > 0; --i) c[s++] = 0;
  for (i = f.length; i > o; ) {
    if (c[--i] < f[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = se - 1;
      --c[a], c[i] += se;
    }
    c[i] -= f[i];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Ut ? Nt(t, d) : t) : new h(0);
}
function Xn(e7, t, r) {
  var n, i = Jt(e7), a = _r(e7.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + sn(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + sn(-i - 1) + a, r && (n = r - o) > 0 && (a += sn(n))) : i >= o ? (a += sn(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + sn(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += sn(n))), e7.s < 0 ? "-" + a : a;
}
function Iv(e7, t) {
  if (e7.length > t) return e7.length = t, true;
}
function xS(e7) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(zn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Tv(o, a.toString());
    } else if (typeof a != "string") throw Error(zn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, x8.test(a)) Tv(o, a);
    else throw Error(zn + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = xS, i.config = i.set = A8, e7 === void 0 && (e7 = {}), e7) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e7.hasOwnProperty(r = n[t++]) || (e7[r] = this[r]);
  return i.config(e7), i;
}
function A8(e7) {
  if (!e7 || typeof e7 != "object") throw Error(Qe + "Object expected");
  var t, r, n, i = ["precision", 1, Oa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e7[r = i[t]]) !== void 0) if (xa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(zn + r + ": " + n);
  if ((n = e7[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(zn + r + ": " + n);
  return this;
}
var _p = xS(O8);
Re = new _p(1);
const Mt = _p;
function P8(e7) {
  return $8(e7) || E8(e7) || I8(e7) || T8();
}
function T8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I8(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return th(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return th(e7, t);
  }
}
function E8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function $8(e7) {
  if (Array.isArray(e7)) return th(e7);
}
function th(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var M8 = function(t) {
  return t;
}, AS = {}, PS = function(t) {
  return t === AS;
}, Ev = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && PS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, D8 = function e4(t, r) {
  return t === 1 ? r : Ev(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== AS;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, Ev(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
      var l = i.map(function(f) {
        return PS(f) ? c.shift() : f;
      });
      return r.apply(void 0, P8(l).concat(c));
    }));
  });
}, Zu = function(t) {
  return D8(t.length, t);
}, eh = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, N8 = Zu(function(e7, t) {
  return Array.isArray(t) ? t.map(e7) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e7);
}), C8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return M8;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, rh = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, TS = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function j8(e7) {
  var t;
  return e7 === 0 ? t = 1 : t = Math.floor(new Mt(e7).abs().log(10).toNumber()) + 1, t;
}
function B8(e7, t, r) {
  for (var n = new Mt(e7), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var R8 = Zu(function(e7, t, r) {
  var n = +e7, i = +t;
  return n + r * (i - n);
}), k8 = Zu(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, (r - e7) / n;
}), L8 = Zu(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e7) / n));
});
const tl = { rangeStep: B8, getDigitCount: j8, interpolateNumber: R8, uninterpolateNumber: k8, uninterpolateTruncation: L8 };
function nh(e7) {
  return z8(e7) || U8(e7) || IS(e7) || F8();
}
function F8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function z8(e7) {
  if (Array.isArray(e7)) return ih(e7);
}
function xo(e7, t) {
  return q8(e7) || V8(e7, t) || IS(e7, t) || W8();
}
function W8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ih(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ih(e7, t);
  }
}
function ih(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function V8(e7, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e7)))) {
    var r = [], n = true, i = false, a = void 0;
    try {
      for (var o = e7[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = true) ;
    } catch (c) {
      i = true, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function q8(e7) {
  if (Array.isArray(e7)) return e7;
}
function ES(e7) {
  var t = xo(e7, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function $S(e7, t, r) {
  if (e7.lte(0)) return new Mt(0);
  var n = tl.getDigitCount(e7.toNumber()), i = new Mt(10).pow(n), a = e7.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Mt(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new Mt(Math.ceil(c));
}
function G8(e7, t, r) {
  var n = 1, i = new Mt(e7);
  if (!i.isint() && r) {
    var a = Math.abs(e7);
    a < 1 ? (n = new Mt(10).pow(tl.getDigitCount(e7) - 1), i = new Mt(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Mt(Math.floor(e7)));
  } else e7 === 0 ? i = new Mt(Math.floor((t - 1) / 2)) : r || (i = new Mt(Math.floor(e7)));
  var o = Math.floor((t - 1) / 2), s = C8(N8(function(c) {
    return i.add(new Mt(c - o).mul(n)).toNumber();
  }), eh);
  return s(0, t);
}
function MS(e7, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e7) / (r - 1))) return { step: new Mt(0), tickMin: new Mt(0), tickMax: new Mt(0) };
  var a = $S(new Mt(t).sub(e7).div(r - 1), n, i), o;
  e7 <= 0 && t >= 0 ? o = new Mt(0) : (o = new Mt(e7).add(t).div(2), o = o.sub(new Mt(o).mod(a)));
  var s = Math.ceil(o.sub(e7).div(a).toNumber()), c = Math.ceil(new Mt(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? MS(e7, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Mt(s).mul(a)), tickMax: o.add(new Mt(c).mul(a)) });
}
function H8(e7) {
  var t = xo(e7, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = ES([r, n]), c = xo(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(nh(eh(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(nh(eh(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? rh(f) : f;
  }
  if (u === l) return G8(u, i, a);
  var h = MS(u, l, o, a), d = h.step, y = h.tickMin, m = h.tickMax, p = tl.rangeStep(y, m.add(new Mt(0.1).mul(d)), d);
  return r > n ? rh(p) : p;
}
function K8(e7, t) {
  var r = xo(e7, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = ES([n, i]), s = xo(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) return [n, i];
  if (c === u) return [c];
  var l = Math.max(t, 2), f = $S(new Mt(u).sub(c).div(l - 1), a, 0), h = [].concat(nh(tl.rangeStep(new Mt(c), new Mt(u).sub(new Mt(0.99).mul(f)), f)), [u]);
  return n > i ? rh(h) : h;
}
var Y8 = TS(H8), X8 = TS(K8), J8 = "Invariant failed";
function Jn(e7, t) {
  throw new Error(J8);
}
var Q8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Hi(e7) {
  "@babel/helpers - typeof";
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e7);
}
function Wc() {
  return Wc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Wc.apply(this, arguments);
}
function Z8(e7, t) {
  return n6(e7) || r6(e7, t) || e6(e7, t) || t6();
}
function t6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return $v(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $v(e7, t);
  }
}
function $v(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function r6(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function n6(e7) {
  if (Array.isArray(e7)) return e7;
}
function i6(e7, t) {
  if (e7 == null) return {};
  var r = a6(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function a6(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function o6(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function s6(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, CS(n.key), n);
  }
}
function c6(e7, t, r) {
  return t && s6(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function u6(e7, t, r) {
  return t = Vc(t), l6(e7, DS() ? Reflect.construct(t, r || [], Vc(e7).constructor) : t.apply(e7, r));
}
function l6(e7, t) {
  if (t && (Hi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return f6(e7);
}
function f6(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function DS() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DS = function() {
    return !!e7;
  })();
}
function Vc(e7) {
  return Vc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vc(e7);
}
function h6(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && ah(e7, t);
}
function ah(e7, t) {
  return ah = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ah(e7, t);
}
function NS(e7, t, r) {
  return t = CS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function CS(e7) {
  var t = d6(e7, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function d6(e7, t) {
  if (Hi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Aa = function(e7) {
  function t() {
    return o6(this, t), u6(this, t, arguments);
  }
  return h6(t, e7), c6(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, h = i6(n, Q8), d = ct(h, false);
    this.props.direction === "x" && l.type !== "number" && Jn();
    var y = c.map(function(m) {
      var p = u(m, s), _ = p.x, g = p.y, w = p.value, S = p.errorVal;
      if (!S) return null;
      var v = [], b, O;
      if (Array.isArray(S)) {
        var P = Z8(S, 2);
        b = P[0], O = P[1];
      } else b = O = S;
      if (a === "vertical") {
        var T = l.scale, $ = g + i, E = $ + o, I = $ - o, j = T(w - b), N = T(w + O);
        v.push({ x1: N, y1: E, x2: N, y2: I }), v.push({ x1: j, y1: $, x2: N, y2: $ }), v.push({ x1: j, y1: E, x2: j, y2: I });
      } else if (a === "horizontal") {
        var M = f.scale, C = _ + i, R = C - o, F = C + o, U = M(w - b), q = M(w + O);
        v.push({ x1: R, y1: q, x2: F, y2: q }), v.push({ x1: C, y1: U, x2: C, y2: q }), v.push({ x1: R, y1: U, x2: F, y2: U });
      }
      return A.createElement(St, Wc({ className: "recharts-errorBar", key: "bar-".concat(v.map(function(rt) {
        return "".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2);
      })) }, d), v.map(function(rt) {
        return A.createElement("line", Wc({}, rt, { key: "line-".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2) }));
      }));
    });
    return A.createElement(St, { className: "recharts-errorBars" }, y);
  } }]);
}(A.Component);
NS(Aa, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
NS(Aa, "displayName", "ErrorBar");
function Ao(e7) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e7);
}
function Mv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $n(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mv(Object(r), true).forEach(function(n) {
      p6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function p6(e7, t, r) {
  return t = y6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function y6(e7) {
  var t = m6(e7, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function m6(e7, t) {
  if (Ao(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var jS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = je(r, hn);
  if (!o) return null;
  var s = hn.defaultProps, c = s !== void 0 ? $n($n({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var h = f.item, d = f.props, y = d.sectors || d.data || [];
    return l.concat(y.map(function(m) {
      return { type: o.props.iconType || h.props.legendType, value: m.name, color: m.fill, payload: m };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, h = f.type.defaultProps, d = h !== void 0 ? $n($n({}, h), f.props) : {}, y = d.dataKey, m = d.name, p = d.legendType, _ = d.hide;
    return { inactive: _, dataKey: y, type: c.iconType || p || "square", color: wp(f), value: m || y, payload: d };
  }), $n($n($n({}, c), hn.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function Po(e7) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e7);
}
function Dv(e7) {
  return _6(e7) || b6(e7) || g6(e7) || v6();
}
function v6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return oh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oh(e7, t);
  }
}
function b6(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function _6(e7) {
  if (Array.isArray(e7)) return oh(e7);
}
function oh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Nv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nv(Object(r), true).forEach(function(n) {
      Di(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Di(e7, t, r) {
  return t = w6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function w6(e7) {
  var t = S6(e7, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function S6(e7, t) {
  if (Po(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function ae(e7, t, r) {
  return st(e7) || st(t) ? r : ie(t) ? Ye(e7, t, r) : lt(t) ? t(e7) : r;
}
function Qa(e7, t, r, n) {
  var i = b8(e7, function(s) {
    return ae(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [Qu(a), un(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !st(s);
  }) : i;
  return o.map(function(s) {
    return ie(s) || s instanceof Date ? s : "";
  });
}
var O6 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1) return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6) for (var c = a.range, u = 0; u < s; u++) {
    var l = u > 0 ? i[u - 1].coordinate : i[s - 1].coordinate, f = i[u].coordinate, h = u >= s - 1 ? i[0].coordinate : i[u + 1].coordinate, d = void 0;
    if (sr(f - l) !== sr(h - f)) {
      var y = [];
      if (sr(h - f) === sr(c[1] - c[0])) {
        d = h;
        var m = f + c[1] - c[0];
        y[0] = Math.min(m, (m + l) / 2), y[1] = Math.max(m, (m + l) / 2);
      } else {
        d = l;
        var p = h + c[1] - c[0];
        y[0] = Math.min(f, (p + f) / 2), y[1] = Math.max(f, (p + f) / 2);
      }
      var _ = [Math.min(f, (d + f) / 2), Math.max(f, (d + f) / 2)];
      if (t > _[0] && t <= _[1] || t >= y[0] && t <= y[1]) {
        o = i[u].index;
        break;
      }
    } else {
      var g = Math.min(l, h), w = Math.max(l, h);
      if (t > (g + f) / 2 && t <= (w + f) / 2) {
        o = i[u].index;
        break;
      }
    }
  }
  else for (var S = 0; S < s; S++) if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
    o = n[S].index;
    break;
  }
  return o;
}, wp = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, c;
  switch (i) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : s;
      break;
    default:
      c = s;
      break;
  }
  return c;
}, x6 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++) for (var l = a[s[c]].stackGroups, f = Object.keys(l), h = 0, d = f.length; h < d; h++) {
    var y = l[f[h]], m = y.items, p = y.cateAxisId, _ = m.filter(function(O) {
      return Ur(O.type).indexOf("Bar") >= 0;
    });
    if (_ && _.length) {
      var g = _[0].type.defaultProps, w = g !== void 0 ? qt(qt({}, g), _[0].props) : _[0].props, S = w.barSize, v = w[p];
      o[v] || (o[v] = []);
      var b = st(S) ? r : S;
      o[v].push({ item: _[0], stackList: _.slice(1), barSize: st(b) ? void 0 : Kn(b, n, 0) });
    }
  }
  return o;
}, A6 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = Kn(r, i, 0, true), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = false, d = i / c, y = o.reduce(function(S, v) {
      return S + v.barSize || 0;
    }, 0);
    y += (c - 1) * u, y >= i && (y -= (c - 1) * u, u = 0), y >= i && d > 0 && (h = true, d *= 0.9, y = c * d);
    var m = (i - y) / 2 >> 0, p = { offset: m - u, size: 0 };
    l = o.reduce(function(S, v) {
      var b = { item: v.item, position: { offset: p.offset + p.size + u, size: h ? d : v.barSize } }, O = [].concat(Dv(S), [b]);
      return p = O[O.length - 1].position, v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: p });
      }), O;
    }, f);
  } else {
    var _ = Kn(n, i, 0, true);
    i - 2 * _ - (c - 1) * u <= 0 && (u = 0);
    var g = (i - 2 * _ - (c - 1) * u) / c;
    g > 1 && (g >>= 0);
    var w = s === +s ? Math.min(g, s) : g;
    l = o.reduce(function(S, v, b) {
      var O = [].concat(Dv(S), [{ item: v.item, position: { offset: _ + (g + u) * b + (g - w) / 2, size: w } }]);
      return v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: O[O.length - 1].position });
      }), O;
    }, f);
  }
  return l;
}, P6 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = jS({ children: a, legendWidth: c });
  if (u) {
    var l = i || {}, f = l.width, h = l.height, d = u.align, y = u.verticalAlign, m = u.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && d !== "center" && L(t[d])) return qt(qt({}, t), {}, Di({}, d, t[d] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && d === "center") && y !== "middle" && L(t[y])) return qt(qt({}, t), {}, Di({}, y, t[y] + (h || 0)));
  }
  return t;
}, T6 = function(t, r, n) {
  return st(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, BS = function(t, r, n, i, a) {
  var o = r.props.children, s = Te(o, Aa).filter(function(u) {
    return T6(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ae(l, n);
      if (st(f)) return u;
      var h = Array.isArray(f) ? [Qu(f), un(f)] : [f, f], d = c.reduce(function(y, m) {
        var p = ae(l, m, 0), _ = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), g = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(_, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], u[0]), Math.max(d[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, I6 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return BS(t, s, n, a, i);
  }).filter(function(s) {
    return !st(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, RS = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && BS(t, c, u, i) || Qa(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(c, u) {
    return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++) s[u[l]] || (s[u[l]] = true, c.push(u[l]));
    return c;
  }, []);
}, kS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, LS = function(t, r, n, i) {
  if (i) return t.map(function(c) {
    return c.coordinate;
  });
  var a, o, s = t.map(function(c) {
    return c.coordinate === r && (a = true), c.coordinate === n && (o = true), c.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, Lr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? sr(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var h = a ? a.indexOf(f) : f;
      return { coordinate: i(h) + u, value: f, offset: u };
    });
    return l.filter(function(f) {
      return !ga(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, h) {
    return { coordinate: i(f) + u, value: f, index: h, offset: u };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return { coordinate: i(f) + u, value: f, offset: u };
  }) : i.domain().map(function(f, h) {
    return { coordinate: i(f) + u, value: a ? a[f] : f, index: h, offset: u };
  });
}, Hl = /* @__PURE__ */ new WeakMap(), gs = function(t, r) {
  if (typeof r != "function") return t;
  Hl.has(t) || Hl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Hl.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, E6 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: go(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: kc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: Ja(), realScaleType: "point" } : a === "category" ? { scale: go(), realScaleType: "band" } : { scale: kc(), realScaleType: "linear" };
  if (Hn(i)) {
    var c = "scale".concat(ku(i));
    return { scale: (Pv[c] || Ja)(), realScaleType: Pv[c] ? c : "point" };
  }
  return lt(i) ? { scale: i } : { scale: Ja(), realScaleType: "point" };
}, Cv = 1e-4, $6 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Cv, o = Math.max(i[0], i[1]) + Cv, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, M6 = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, D6 = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, N6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var c = ga(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
  }
}, C6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = ga(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, j6 = { sign: N6, expand: XM, none: Li, silhouette: JM, wiggle: QM, positive: C6 }, B6 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = j6[n], o = YM().keys(i).value(function(s, c) {
    return +ae(s, c, 0);
  }).order(Mf).offset(a);
  return o(t);
}, R6 = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? qt(qt({}, h.type.defaultProps), h.props) : h.props, m = y.stackId, p = y.hide;
    if (p) return f;
    var _ = y[n], g = f[_] || { hasStack: false, stackGroups: {} };
    if (ie(m)) {
      var w = g.stackGroups[m] || { numericAxisId: n, cateAxisId: i, items: [] };
      w.items.push(h), g.hasStack = true, g.stackGroups[m] = w;
    } else g.stackGroups[ei("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
    return qt(qt({}, f), {}, Di({}, _, g));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, h) {
    var d = u[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(m, p) {
        var _ = d.stackGroups[p];
        return qt(qt({}, m), {}, Di({}, p, { numericAxisId: n, cateAxisId: i, items: _.items, stackedData: B6(t, _.items, a) }));
      }, y);
    }
    return qt(qt({}, f), {}, Di({}, h, d));
  }, l);
}, k6 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var l = Y8(u, a, s);
    return t.domain([Qu(l), un(l)]), { niceTicks: l };
  }
  if (a && i === "number") {
    var f = t.domain(), h = X8(f, a, s);
    return { niceTicks: h };
  }
  return null;
};
function Ki(e7) {
  var t = e7.axis, r = e7.ticks, n = e7.bandSize, i = e7.entry, a = e7.index, o = e7.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !st(i[t.dataKey])) {
      var s = yc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = ae(i, st(o) ? t.dataKey : o);
  return st(c) ? null : t.scale(c);
}
var jv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var c = ae(o, r.dataKey, r.domain[s]);
  return st(c) ? null : r.scale(c) - a / 2 + i;
}, L6 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, F6 = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (ie(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, U6 = function(t) {
  return t.reduce(function(r, n) {
    return [Qu(n.concat([r[0]]).filter(L)), un(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, FS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = U6(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Bv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Rv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, sh = function(t, r, n) {
  if (lt(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Bv.test(t[0])) {
    var a = +Bv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else lt(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Rv.test(t[1])) {
    var o = +Rv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else lt(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, qc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Kd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = a.length; s < c; s++) {
      var u = a[s], l = a[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, kv = function(t, r, n) {
  return !t || !t.length || Yn(t, Ye(n, "type.defaultProps.domain")) ? r : t;
}, US = function(t, r) {
  var n = t.type.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return qt(qt({}, ct(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: wp(t), value: ae(r, i), type: c, payload: r, chartType: u, hide: l });
};
function To(e7) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e7);
}
function Lv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lv(Object(r), true).forEach(function(n) {
      z6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function z6(e7, t, r) {
  return t = W6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function W6(e7) {
  var t = V6(e7, "string");
  return To(t) == "symbol" ? t : t + "";
}
function V6(e7, t) {
  if (To(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Gc = Math.PI / 180, q6 = function(t) {
  return t * 180 / Math.PI;
}, le = function(t, r, n, i) {
  return { x: t + Math.cos(-Gc * i) * n, y: r + Math.sin(-Gc * i) * n };
}, G6 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, H6 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = G6({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: q6(u), angleInRadian: u };
}, K6 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, Y6 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Uv = function(t, r) {
  var n = t.x, i = t.y, a = H6({ x: n, y: i }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u) return false;
  if (o === 0) return true;
  var l = K6(r), f = l.startAngle, h = l.endAngle, d = s, y;
  if (f <= h) {
    for (; d > h; ) d -= 360;
    for (; d < f; ) d += 360;
    y = d >= f && d <= h;
  } else {
    for (; d > f; ) d -= 360;
    for (; d < h; ) d += 360;
    y = d >= h && d <= f;
  }
  return y ? Fv(Fv({}, r), {}, { radius: o, angle: Y6(d, r) }) : null;
};
function Io(e7) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e7);
}
var X6 = ["offset"];
function J6(e7) {
  return ez(e7) || tz(e7) || Z6(e7) || Q6();
}
function Q6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ch(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ch(e7, t);
  }
}
function tz(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function ez(e7) {
  if (Array.isArray(e7)) return ch(e7);
}
function ch(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function rz(e7, t) {
  if (e7 == null) return {};
  var r = nz(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function nz(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function zv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zv(Object(r), true).forEach(function(n) {
      iz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function iz(e7, t, r) {
  return t = az(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function az(e7) {
  var t = oz(e7, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function oz(e7, t) {
  if (Io(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Eo.apply(this, arguments);
}
var sz = function(t) {
  var r = t.value, n = t.formatter, i = st(t.children) ? r : t.children;
  return lt(n) ? n(i) : i;
}, cz = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, uz = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, h = c.outerRadius, d = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + h) / 2, _ = cz(d, y), g = _ >= 0 ? 1 : -1, w, S;
  i === "insideStart" ? (w = d + g * o, S = m) : i === "insideEnd" ? (w = y - g * o, S = !m) : i === "end" && (w = y + g * o, S = m), S = _ <= 0 ? S : !S;
  var v = le(u, l, p, w), b = le(u, l, p, w + (S ? 1 : -1) * 359), O = "M".concat(v.x, ",").concat(v.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), P = st(t.id) ? ei("recharts-radial-line-") : t.id;
  return A.createElement("text", Eo({}, n, { dominantBaseline: "central", className: mt("recharts-radial-bar-label", s) }), A.createElement("defs", null, A.createElement("path", { id: P, d: O })), A.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, lz = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, c = a.innerRadius, u = a.outerRadius, l = a.startAngle, f = a.endAngle, h = (l + f) / 2;
  if (i === "outside") {
    var d = le(o, s, u + n, h), y = d.x, m = d.y;
    return { x: y, y: m, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
  var p = (c + u) / 2, _ = le(o, s, p, h), g = _.x, w = _.y;
  return { x: g, y: w, textAnchor: "middle", verticalAnchor: "middle" };
}, fz = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, c = o.y, u = o.width, l = o.height, f = l >= 0 ? 1 : -1, h = f * i, d = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", m = u >= 0 ? 1 : -1, p = m * i, _ = m > 0 ? "end" : "start", g = m > 0 ? "start" : "end";
  if (a === "top") {
    var w = { x: s + u / 2, y: c - f * i, textAnchor: "middle", verticalAnchor: d };
    return ee(ee({}, w), n ? { height: Math.max(c - n.y, 0), width: u } : {});
  }
  if (a === "bottom") {
    var S = { x: s + u / 2, y: c + l + h, textAnchor: "middle", verticalAnchor: y };
    return ee(ee({}, S), n ? { height: Math.max(n.y + n.height - (c + l), 0), width: u } : {});
  }
  if (a === "left") {
    var v = { x: s - p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" };
    return ee(ee({}, v), n ? { width: Math.max(v.x - n.x, 0), height: l } : {});
  }
  if (a === "right") {
    var b = { x: s + u + p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" };
    return ee(ee({}, b), n ? { width: Math.max(n.x + n.width - b.x, 0), height: l } : {});
  }
  var O = n ? { width: u, height: l } : {};
  return a === "insideLeft" ? ee({ x: s + p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" }, O) : a === "insideRight" ? ee({ x: s + u - p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" }, O) : a === "insideTop" ? ee({ x: s + u / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, O) : a === "insideBottom" ? ee({ x: s + u / 2, y: c + l - h, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideTopLeft" ? ee({ x: s + p, y: c + h, textAnchor: g, verticalAnchor: y }, O) : a === "insideTopRight" ? ee({ x: s + u - p, y: c + h, textAnchor: _, verticalAnchor: y }, O) : a === "insideBottomLeft" ? ee({ x: s + p, y: c + l - h, textAnchor: g, verticalAnchor: d }, O) : a === "insideBottomRight" ? ee({ x: s + u - p, y: c + l - h, textAnchor: _, verticalAnchor: d }, O) : pa(a) && (L(a.x) || jn(a.x)) && (L(a.y) || jn(a.y)) ? ee({ x: s + Kn(a.x, u), y: c + Kn(a.y, l), textAnchor: "end", verticalAnchor: "end" }, O) : ee({ x: s + u / 2, y: c + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, hz = function(t) {
  return "cx" in t && L(t.cx);
};
function he(e7) {
  var t = e7.offset, r = t === void 0 ? 5 : t, n = rz(e7, X6), i = ee({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, h = i.textBreakAll;
  if (!a || st(s) && st(c) && !B.isValidElement(u) && !lt(u)) return null;
  if (B.isValidElement(u)) return B.cloneElement(u, i);
  var d;
  if (lt(u)) {
    if (d = B.createElement(u, i), B.isValidElement(d)) return d;
  } else d = sz(i);
  var y = hz(a), m = ct(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return uz(i, d, m);
  var p = y ? lz(i) : fz(i);
  return A.createElement($c, Eo({ className: mt("recharts-label", f) }, m, p, { breakAll: h }), d);
}
he.displayName = "Label";
var zS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, h = t.y, d = t.top, y = t.left, m = t.width, p = t.height, _ = t.clockWise, g = t.labelViewBox;
  if (g) return g;
  if (L(m) && L(p)) {
    if (L(f) && L(h)) return { x: f, y: h, width: m, height: p };
    if (L(d) && L(y)) return { x: d, y, width: m, height: p };
  }
  return L(f) && L(h) ? { x: f, y: h, width: 0, height: 0 } : L(r) && L(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: l || c || s || 0, clockWise: _ } : t.viewBox ? t.viewBox : {};
}, dz = function(t, r) {
  return t ? t === true ? A.createElement(he, { key: "label-implicit", viewBox: r }) : ie(t) ? A.createElement(he, { key: "label-implicit", viewBox: r, value: t }) : B.isValidElement(t) ? t.type === he ? B.cloneElement(t, { key: "label-implicit", viewBox: r }) : A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : lt(t) ? A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : pa(t) ? A.createElement(he, Eo({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, pz = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = zS(t), o = Te(i, he).map(function(c, u) {
    return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = dz(t.label, r || a);
  return [s].concat(J6(o));
};
he.parseViewBox = zS;
he.renderCallByParent = pz;
function yz(e7) {
  var t = e7 == null ? 0 : e7.length;
  return t ? e7[t - 1] : void 0;
}
var mz = yz;
const vz = Bt(mz);
function $o(e7) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e7);
}
var gz = ["valueAccessor"], bz = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function _z(e7) {
  return xz(e7) || Oz(e7) || Sz(e7) || wz();
}
function wz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sz(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return uh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e7, t);
  }
}
function Oz(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function xz(e7) {
  if (Array.isArray(e7)) return uh(e7);
}
function uh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Hc.apply(this, arguments);
}
function Wv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wv(Object(r), true).forEach(function(n) {
      Az(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Az(e7, t, r) {
  return t = Pz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Pz(e7) {
  var t = Tz(e7, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function Tz(e7, t) {
  if ($o(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function qv(e7, t) {
  if (e7 == null) return {};
  var r = Iz(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function Iz(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var Ez = function(t) {
  return Array.isArray(t.value) ? vz(t.value) : t.value;
};
function Or(e7) {
  var t = e7.valueAccessor, r = t === void 0 ? Ez : t, n = qv(e7, gz), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = qv(n, bz);
  return !i || !i.length ? null : A.createElement(St, { className: "recharts-label-list" }, i.map(function(l, f) {
    var h = st(a) ? r(l, f) : ae(l && l.payload, a), d = st(s) ? {} : { id: "".concat(s, "-").concat(f) };
    return A.createElement(he, Hc({}, ct(l, true), u, d, { parentViewBox: l.parentViewBox, value: h, textBreakAll: c, viewBox: he.parseViewBox(st(o) ? l : Vv(Vv({}, l), {}, { clockWise: o })), key: "label-".concat(f), index: f }));
  }));
}
Or.displayName = "LabelList";
function $z(e7, t) {
  return e7 ? e7 === true ? A.createElement(Or, { key: "labelList-implicit", data: t }) : A.isValidElement(e7) || lt(e7) ? A.createElement(Or, { key: "labelList-implicit", data: t, content: e7 }) : pa(e7) ? A.createElement(Or, Hc({ data: t }, e7, { key: "labelList-implicit" })) : null : null;
}
function Mz(e7, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e7 || !e7.children && r && !e7.label) return null;
  var n = e7.children, i = Te(n, Or).map(function(o, s) {
    return B.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = $z(e7.label, t);
  return [a].concat(_z(i));
}
Or.renderCallByParent = Mz;
function Mo(e7) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e7);
}
function lh() {
  return lh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, lh.apply(this, arguments);
}
function Gv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gv(Object(r), true).forEach(function(n) {
      Dz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Gv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Dz(e7, t, r) {
  return t = Nz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Nz(e7) {
  var t = Cz(e7, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function Cz(e7, t) {
  if (Mo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var jz = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, bs = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / Gc, h = u ? a : a + o * f, d = le(r, n, l, h), y = le(r, n, i, h), m = u ? a - o * f : a, p = le(r, n, l * Math.cos(f * Gc), m);
  return { center: d, circleTangency: y, lineTangency: p, theta: f };
}, WS = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = jz(o, s), u = o + c, l = le(r, n, a, o), f = le(r, n, a, u), h = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > u), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var d = le(r, n, i, o), y = le(r, n, i, u);
    h += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= u), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, Bz = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = sr(l - u), h = bs({ cx: r, cy: n, radius: a, angle: u, sign: f, cornerRadius: o, cornerIsExternal: c }), d = h.circleTangency, y = h.lineTangency, m = h.theta, p = bs({ cx: r, cy: n, radius: a, angle: l, sign: -f, cornerRadius: o, cornerIsExternal: c }), _ = p.circleTangency, g = p.lineTangency, w = p.theta, S = c ? Math.abs(u - l) : Math.abs(u - l) - m - w;
  if (S < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : WS({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: l });
  var v = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
  `);
  if (i > 0) {
    var b = bs({ cx: r, cy: n, radius: i, angle: u, sign: f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), O = b.circleTangency, P = b.lineTangency, T = b.theta, $ = bs({ cx: r, cy: n, radius: i, angle: l, sign: -f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), E = $.circleTangency, I = $.lineTangency, j = $.theta, N = c ? Math.abs(u - l) : Math.abs(u - l) - T - j;
    if (N < 0 && o === 0) return "".concat(v, "L").concat(r, ",").concat(n, "Z");
    v += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else v += "L".concat(r, ",").concat(n, "Z");
  return v;
}, Rz = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, VS = function(t) {
  var r = Hv(Hv({}, Rz), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, h = r.className;
  if (o < a || l === f) return null;
  var d = mt("recharts-sector", h), y = o - a, m = Kn(s, y, 0, true), p;
  return m > 0 && Math.abs(l - f) < 360 ? p = Bz({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(m, y / 2), forceCornerRadius: c, cornerIsExternal: u, startAngle: l, endAngle: f }) : p = WS({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: f }), A.createElement("path", lh({}, ct(r, true), { className: d, d: p, role: "img" }));
};
function Do(e7) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e7);
}
function fh() {
  return fh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, fh.apply(this, arguments);
}
function Kv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kv(Object(r), true).forEach(function(n) {
      kz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function kz(e7, t, r) {
  return t = Lz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Lz(e7) {
  var t = Fz(e7, "string");
  return Do(t) == "symbol" ? t : t + "";
}
function Fz(e7, t) {
  if (Do(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Do(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Xv = { curveBasisClosed: kM, curveBasisOpen: LM, curveBasis: RM, curveBumpX: OM, curveBumpY: xM, curveLinearClosed: FM, curveLinear: Fu, curveMonotoneX: UM, curveMonotoneY: zM, curveNatural: WM, curveStep: VM, curveStepAfter: GM, curveStepBefore: qM }, _s = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ja = function(t) {
  return t.x;
}, Ba = function(t) {
  return t.y;
}, Uz = function(t, r) {
  if (lt(t)) return t;
  var n = "curve".concat(ku(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Xv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Xv[n] || Fu;
}, zz = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? false : c, l = Uz(n, s), f = u ? a.filter(function(m) {
    return _s(m);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = u ? o.filter(function(m) {
      return _s(m);
    }) : o, y = f.map(function(m, p) {
      return Yv(Yv({}, m), {}, { base: d[p] });
    });
    return s === "vertical" ? h = ls().y(Ba).x1(ja).x0(function(m) {
      return m.base.x;
    }) : h = ls().x(ja).y1(Ba).y0(function(m) {
      return m.base.y;
    }), h.defined(_s).curve(l), h(y);
  }
  return s === "vertical" && L(o) ? h = ls().y(Ba).x1(ja).x0(o) : L(o) ? h = ls().x(ja).y1(Ba).y0(o) : h = G_().x(ja).y(Ba), h.defined(_s).curve(l), h(f);
}, Wn = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? zz(t) : i;
  return B.createElement("path", fh({}, ct(t, false), mc(t), { className: mt("recharts-curve", r), d: o, ref: a }));
}, qS = { exports: {} }, Wz = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Vz = Wz, qz = Vz;
function GS() {
}
function HS() {
}
HS.resetWarningCache = GS;
var Gz = function() {
  function e7(n, i, a, o, s, c) {
    if (c !== qz) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e7.isRequired = e7;
  function t() {
    return e7;
  }
  var r = { array: e7, bigint: e7, bool: e7, func: e7, number: e7, object: e7, string: e7, symbol: e7, any: e7, arrayOf: t, element: e7, elementType: e7, instanceOf: t, node: e7, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: HS, resetWarningCache: GS };
  return r.PropTypes = r, r;
};
qS.exports = Gz();
var Hz = qS.exports;
const Ot = Bt(Hz), { getOwnPropertyNames: Kz, getOwnPropertySymbols: Yz } = Object, { hasOwnProperty: Xz } = Object.prototype;
function Kl(e7, t) {
  return function(n, i, a) {
    return e7(n, i, a) && t(n, i, a);
  };
}
function ws(e7) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e7(r, n, i);
    const { cache: a } = i, o = a.get(r), s = a.get(n);
    if (o && s) return o === n && s === r;
    a.set(r, n), a.set(n, r);
    const c = e7(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Jz(e7) {
  return e7 == null ? void 0 : e7[Symbol.toStringTag];
}
function Jv(e7) {
  return Kz(e7).concat(Yz(e7));
}
const Qz = Object.hasOwn || ((e7, t) => Xz.call(e7, t));
function ii(e7, t) {
  return e7 === t || !e7 && !t && e7 !== e7 && t !== t;
}
const Zz = "__v", t4 = "__o", e42 = "_owner", { getOwnPropertyDescriptor: Qv, keys: Zv } = Object;
function r4(e7, t) {
  return e7.byteLength === t.byteLength && Kc(new Uint8Array(e7), new Uint8Array(t));
}
function n4(e7, t, r) {
  let n = e7.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e7[n], t[n], n, n, e7, t, r)) return false;
  return true;
}
function i4(e7, t) {
  return e7.byteLength === t.byteLength && Kc(new Uint8Array(e7.buffer, e7.byteOffset, e7.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function a4(e7, t) {
  return ii(e7.getTime(), t.getTime());
}
function o4(e7, t) {
  return e7.name === t.name && e7.message === t.message && e7.cause === t.cause && e7.stack === t.stack;
}
function s4(e7, t) {
  return e7 === t;
}
function tg(e7, t, r) {
  const n = e7.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e7.entries();
  let o, s, c = 0;
  for (; (o = a.next()) && !o.done; ) {
    const u = t.entries();
    let l = false, f = 0;
    for (; (s = u.next()) && !s.done; ) {
      if (i[f]) {
        f++;
        continue;
      }
      const h = o.value, d = s.value;
      if (r.equals(h[0], d[0], c, f, e7, t, r) && r.equals(h[1], d[1], h[0], d[0], e7, t, r)) {
        l = i[f] = true;
        break;
      }
      f++;
    }
    if (!l) return false;
    c++;
  }
  return true;
}
const c4 = ii;
function u4(e7, t, r) {
  const n = Zv(e7);
  let i = n.length;
  if (Zv(t).length !== i) return false;
  for (; i-- > 0; ) if (!KS(e7, t, r, n[i])) return false;
  return true;
}
function Ra(e7, t, r) {
  const n = Jv(e7);
  let i = n.length;
  if (Jv(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !KS(e7, t, r, a) || (o = Qv(e7, a), s = Qv(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function l4(e7, t) {
  return ii(e7.valueOf(), t.valueOf());
}
function f4(e7, t) {
  return e7.source === t.source && e7.flags === t.flags;
}
function eg(e7, t, r) {
  const n = e7.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e7.values();
  let o, s;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.values();
    let u = false, l = 0;
    for (; (s = c.next()) && !s.done; ) {
      if (!i[l] && r.equals(o.value, s.value, o.value, s.value, e7, t, r)) {
        u = i[l] = true;
        break;
      }
      l++;
    }
    if (!u) return false;
  }
  return true;
}
function Kc(e7, t) {
  let r = e7.byteLength;
  if (t.byteLength !== r || e7.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e7[r] !== t[r]) return false;
  return true;
}
function h4(e7, t) {
  return e7.hostname === t.hostname && e7.pathname === t.pathname && e7.protocol === t.protocol && e7.port === t.port && e7.hash === t.hash && e7.username === t.username && e7.password === t.password;
}
function KS(e7, t, r, n) {
  return (n === e42 || n === t4 || n === Zz) && (e7.$$typeof || t.$$typeof) ? true : Qz(t, n) && r.equals(e7[n], t[n], n, n, e7, t, r);
}
const d4 = "[object ArrayBuffer]", p4 = "[object Arguments]", y4 = "[object Boolean]", m4 = "[object DataView]", v4 = "[object Date]", g4 = "[object Error]", b4 = "[object Map]", _4 = "[object Number]", w4 = "[object Object]", S4 = "[object RegExp]", O4 = "[object Set]", x4 = "[object String]", A4 = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, P4 = "[object URL]", T4 = Object.prototype.toString;
function I4({ areArrayBuffersEqual: e7, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: u, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: y }) {
  return function(p, _, g) {
    if (p === _) return true;
    if (p == null || _ == null) return false;
    const w = typeof p;
    if (w !== typeof _) return false;
    if (w !== "object") return w === "number" ? s(p, _, g) : w === "function" ? a(p, _, g) : false;
    const S = p.constructor;
    if (S !== _.constructor) return false;
    if (S === Object) return c(p, _, g);
    if (Array.isArray(p)) return t(p, _, g);
    if (S === Date) return n(p, _, g);
    if (S === RegExp) return l(p, _, g);
    if (S === Map) return o(p, _, g);
    if (S === Set) return f(p, _, g);
    const v = T4.call(p);
    if (v === v4) return n(p, _, g);
    if (v === S4) return l(p, _, g);
    if (v === b4) return o(p, _, g);
    if (v === O4) return f(p, _, g);
    if (v === w4) return typeof p.then != "function" && typeof _.then != "function" && c(p, _, g);
    if (v === P4) return d(p, _, g);
    if (v === g4) return i(p, _, g);
    if (v === p4) return c(p, _, g);
    if (A4[v]) return h(p, _, g);
    if (v === d4) return e7(p, _, g);
    if (v === m4) return r(p, _, g);
    if (v === y4 || v === _4 || v === x4) return u(p, _, g);
    if (y) {
      let b = y[v];
      if (!b) {
        const O = Jz(p);
        O && (b = y[O]);
      }
      if (b) return b(p, _, g);
    }
    return false;
  };
}
function E4({ circular: e7, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: r4, areArraysEqual: r ? Ra : n4, areDataViewsEqual: i4, areDatesEqual: a4, areErrorsEqual: o4, areFunctionsEqual: s4, areMapsEqual: r ? Kl(tg, Ra) : tg, areNumbersEqual: c4, areObjectsEqual: r ? Ra : u4, arePrimitiveWrappersEqual: l4, areRegExpsEqual: f4, areSetsEqual: r ? Kl(eg, Ra) : eg, areTypedArraysEqual: r ? Kl(Kc, Ra) : Kc, areUrlsEqual: h4, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e7) {
    const i = ws(n.areArraysEqual), a = ws(n.areMapsEqual), o = ws(n.areObjectsEqual), s = ws(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function $4(e7) {
  return function(t, r, n, i, a, o, s) {
    return e7(t, r, s);
  };
}
function M4({ circular: e7, comparator: t, createState: r, equals: n, strict: i }) {
  if (r) return function(s, c) {
    const { cache: u = e7 ? /* @__PURE__ */ new WeakMap() : void 0, meta: l } = r();
    return t(s, c, { cache: u, equals: n, meta: l, strict: i });
  };
  if (e7) return function(s, c) {
    return t(s, c, { cache: /* @__PURE__ */ new WeakMap(), equals: n, meta: void 0, strict: i });
  };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function(s, c) {
    return t(s, c, a);
  };
}
const D4 = An();
An({ strict: true });
An({ circular: true });
An({ circular: true, strict: true });
An({ createInternalComparator: () => ii });
An({ strict: true, createInternalComparator: () => ii });
An({ circular: true, createInternalComparator: () => ii });
An({ circular: true, createInternalComparator: () => ii, strict: true });
function An(e7 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e7, a = E4(e7), o = I4(a), s = r ? r(o) : $4(o);
  return M4({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function N4(e7) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e7);
}
function rg(e7) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e7(a), r = -1) : N4(i);
  };
  requestAnimationFrame(n);
}
function hh(e7) {
  "@babel/helpers - typeof";
  return hh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hh(e7);
}
function C4(e7) {
  return k4(e7) || R4(e7) || B4(e7) || j4();
}
function j4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B4(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ng(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ng(e7, t);
  }
}
function ng(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function R4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function k4(e7) {
  if (Array.isArray(e7)) return e7;
}
function L4() {
  var e7 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = C4(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          rg(i.bind(null, u), c);
          return;
        }
        i(c), rg(i.bind(null, u));
        return;
      }
      hh(a) === "object" && (e7 = a, t(e7)), typeof a == "function" && a();
    }
  };
  return { stop: function() {
    r = true;
  }, start: function(a) {
    r = false, n(a);
  }, subscribe: function(a) {
    return t = a, function() {
      t = function() {
        return null;
      };
    };
  } };
}
function No(e7) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e7);
}
function ig(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ag(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), true).forEach(function(n) {
      YS(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function YS(e7, t, r) {
  return t = F4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function F4(e7) {
  var t = U4(e7, "string");
  return No(t) === "symbol" ? t : String(t);
}
function U4(e7, t) {
  if (No(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (No(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var z4 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, W4 = function(t) {
  return t;
}, V4 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Za = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return ag(ag({}, n), {}, YS({}, i, t(i, r[i])));
  }, {});
}, og = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(V4(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function q4(e7, t) {
  return K4(e7) || H4(e7, t) || XS(e7, t) || G4();
}
function G4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H4(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function K4(e7) {
  if (Array.isArray(e7)) return e7;
}
function Y4(e7) {
  return Q4(e7) || J4(e7) || XS(e7) || X4();
}
function X4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return dh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dh(e7, t);
  }
}
function J4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function Q4(e7) {
  if (Array.isArray(e7)) return dh(e7);
}
function dh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var Yc = 1e-4, JS = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, QS = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, sg = function(t, r) {
  return function(n) {
    var i = JS(t, r);
    return QS(i, n);
  };
}, Z4 = function(t, r) {
  return function(n) {
    var i = JS(t, r), a = [].concat(Y4(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return QS(a, n);
  };
}, cg = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      i = 0, a = 0, o = 1, s = 1;
      break;
    case "ease":
      i = 0.25, a = 0.1, o = 0.25, s = 1;
      break;
    case "ease-in":
      i = 0.42, a = 0, o = 1, s = 1;
      break;
    case "ease-out":
      i = 0.42, a = 0, o = 0.58, s = 1;
      break;
    case "ease-in-out":
      i = 0, a = 0, o = 0.58, s = 1;
      break;
    default: {
      var c = r[0].split("(");
      if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
        var u = c[1].split(")")[0].split(",").map(function(p) {
          return parseFloat(p);
        }), l = q4(u, 4);
        i = l[0], a = l[1], o = l[2], s = l[3];
      }
    }
  }
  var f = sg(i, o), h = sg(a, s), d = Z4(i, o), y = function(_) {
    return _ > 1 ? 1 : _ < 0 ? 0 : _;
  }, m = function(_) {
    for (var g = _ > 1 ? 1 : _, w = g, S = 0; S < 8; ++S) {
      var v = f(w) - g, b = d(w);
      if (Math.abs(v - g) < Yc || b < Yc) return h(w);
      w = y(w - v / b);
    }
    return h(w);
  };
  return m.isStepper = false, m;
}, tW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, h) {
    var d = -(l - f) * n, y = h * a, m = h + (d - y) * s / 1e3, p = h * s / 1e3 + l;
    return Math.abs(p - f) < Yc && Math.abs(m) < Yc ? [f, 0] : [p, m];
  };
  return c.isStepper = true, c.dt = s, c;
}, eW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return cg(i);
    case "spring":
      return tW();
    default:
      if (i.split("(")[0] === "cubic-bezier") return cg(i);
  }
  return typeof i == "function" ? i : null;
};
function Co(e7) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e7);
}
function ug(e7) {
  return iW(e7) || nW(e7) || ZS(e7) || rW();
}
function rW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nW(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function iW(e7) {
  if (Array.isArray(e7)) return yh(e7);
}
function lg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ue(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), true).forEach(function(n) {
      ph(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function ph(e7, t, r) {
  return t = aW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function aW(e7) {
  var t = oW(e7, "string");
  return Co(t) === "symbol" ? t : String(t);
}
function oW(e7, t) {
  if (Co(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Co(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function sW(e7, t) {
  return lW(e7) || uW(e7, t) || ZS(e7, t) || cW();
}
function cW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return yh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yh(e7, t);
  }
}
function yh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function uW(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function lW(e7) {
  if (Array.isArray(e7)) return e7;
}
var Xc = function(t, r, n) {
  return t + (r - t) * n;
}, mh = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, fW = function e5(t, r, n) {
  var i = Za(function(a, o) {
    if (mh(o)) {
      var s = t(o.from, o.to, o.velocity), c = sW(s, 2), u = c[0], l = c[1];
      return ue(ue({}, o), {}, { from: u, velocity: l });
    }
    return o;
  }, r);
  return n < 1 ? Za(function(a, o) {
    return mh(o) ? ue(ue({}, o), {}, { velocity: Xc(o.velocity, i[a].velocity, n), from: Xc(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const hW = function(e7, t, r, n, i) {
  var a = z4(e7, t), o = a.reduce(function(p, _) {
    return ue(ue({}, p), {}, ph({}, _, [e7[_], t[_]]));
  }, {}), s = a.reduce(function(p, _) {
    return ue(ue({}, p), {}, ph({}, _, { from: e7[_], velocity: 0, to: t[_] }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, h = function() {
    return Za(function(_, g) {
      return g.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(mh).length;
  }, y = function(_) {
    u || (u = _);
    var g = _ - u, w = g / r.dt;
    s = fW(r, s, w), i(ue(ue(ue({}, e7), t), h())), u = _, d() || (c = requestAnimationFrame(f));
  }, m = function(_) {
    l || (l = _);
    var g = (_ - l) / n, w = Za(function(v, b) {
      return Xc.apply(void 0, ug(b).concat([r(g)]));
    }, o);
    if (i(ue(ue(ue({}, e7), t), w)), g < 1) c = requestAnimationFrame(f);
    else {
      var S = Za(function(v, b) {
        return Xc.apply(void 0, ug(b).concat([r(1)]));
      }, o);
      i(ue(ue(ue({}, e7), t), S));
    }
  };
  return f = r.isStepper ? y : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function Yi(e7) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e7);
}
var dW = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function pW(e7, t) {
  if (e7 == null) return {};
  var r = yW(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function yW(e7, t) {
  if (e7 == null) return {};
  var r = {}, n = Object.keys(e7), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e7[i]);
  return r;
}
function Yl(e7) {
  return bW(e7) || gW(e7) || vW(e7) || mW();
}
function mW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vW(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return vh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vh(e7, t);
  }
}
function gW(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function bW(e7) {
  if (Array.isArray(e7)) return vh(e7);
}
function vh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function fg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function er(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), true).forEach(function(n) {
      Ka(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ka(e7, t, r) {
  return t = tO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function _W(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wW(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, tO(n.key), n);
  }
}
function SW(e7, t, r) {
  return t && wW(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function tO(e7) {
  var t = OW(e7, "string");
  return Yi(t) === "symbol" ? t : String(t);
}
function OW(e7, t) {
  if (Yi(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Yi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function xW(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && gh(e7, t);
}
function gh(e7, t) {
  return gh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, gh(e7, t);
}
function AW(e7) {
  var t = PW();
  return function() {
    var n = Jc(e7), i;
    if (t) {
      var a = Jc(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return bh(this, i);
  };
}
function bh(e7, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _h(e7);
}
function _h(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function PW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Jc(e7) {
  return Jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jc(e7);
}
var ur = function(e7) {
  xW(r, e7);
  var t = AW(r);
  function r(n, i) {
    var a;
    _W(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(_h(a)), a.changeStyle = a.changeStyle.bind(_h(a)), !s || d <= 0) return a.state = { style: {} }, typeof h == "function" && (a.state = { style: l }), bh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (u) {
      if (typeof h == "function") return a.state = { style: u }, bh(a);
      a.state = { style: c ? Ka({}, c, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return SW(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, s = a.canBegin, c = a.attributeName, u = a.shouldReAnimate, l = a.to, f = a.from, h = this.state.style;
    if (s) {
      if (!o) {
        var d = { style: c ? Ka({}, c, l) : l };
        this.state && h && (c && h[c] !== l || !c && h !== l) && this.setState(d);
        return;
      }
      if (!(D4(i.to, l) && i.canBegin && i.isActive)) {
        var y = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var m = y || u ? f : i.to;
        if (this.state && h) {
          var p = { style: c ? Ka({}, c, m) : m };
          (c && h[c] !== m || !c && h !== m) && this.setState(p);
        }
        this.runAnimation(er(er({}, this.props), {}, { from: m, begin: 0 }));
      }
    }
  } }, { key: "componentWillUnmount", value: function() {
    this.mounted = false;
    var i = this.props.onAnimationEnd;
    this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
  } }, { key: "handleStyleChange", value: function(i) {
    this.changeStyle(i);
  } }, { key: "changeStyle", value: function(i) {
    this.mounted && this.setState({ style: i });
  } }, { key: "runJSAnimation", value: function(i) {
    var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, h = i.onAnimationStart, d = hW(o, s, eW(u), c, this.changeStyle), y = function() {
      a.stopJSAnimation = d();
    };
    this.manager.start([h, l, y, c, f]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, h = f === void 0 ? 0 : f, d = function(m, p, _) {
      if (_ === 0) return m;
      var g = p.duration, w = p.easing, S = w === void 0 ? "ease" : w, v = p.style, b = p.properties, O = p.onAnimationEnd, P = _ > 0 ? o[_ - 1] : p, T = b || Object.keys(v);
      if (typeof S == "function" || S === "spring") return [].concat(Yl(m), [a.runJSAnimation.bind(a, { from: P.style, to: v, duration: g, easing: S }), g]);
      var $ = og(T, g, S), E = er(er(er({}, P.style), v), {}, { transition: $ });
      return [].concat(Yl(m), [E, g, O]).filter(W4);
    };
    return this.manager.start([c].concat(Yl(o.reduce(d, [l, Math.max(h, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = L4());
    var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof d == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (h.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var m = s ? Ka({}, s, c) : c, p = og(Object.keys(m), o, u);
    y.start([l, a, er(er({}, m), {}, { transition: p }), o, f]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = pW(i, dW), u = B.Children.count(a), l = this.state.style;
    if (typeof a == "function") return a(l);
    if (!s || u === 0 || o <= 0) return a;
    var f = function(d) {
      var y = d.props, m = y.style, p = m === void 0 ? {} : m, _ = y.className, g = B.cloneElement(d, er(er({}, c), {}, { style: er(er({}, p), l), className: _ }));
      return g;
    };
    return u === 1 ? f(B.Children.only(a)) : A.createElement("div", null, B.Children.map(a, function(h) {
      return f(h);
    }));
  } }]), r;
}(B.PureComponent);
ur.displayName = "Animate";
ur.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: true, canBegin: true, steps: [], onAnimationEnd: function() {
}, onAnimationStart: function() {
} };
ur.propTypes = { from: Ot.oneOfType([Ot.object, Ot.string]), to: Ot.oneOfType([Ot.object, Ot.string]), attributeName: Ot.string, duration: Ot.number, begin: Ot.number, easing: Ot.oneOfType([Ot.string, Ot.func]), steps: Ot.arrayOf(Ot.shape({ duration: Ot.number.isRequired, style: Ot.object.isRequired, easing: Ot.oneOfType([Ot.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ot.func]), properties: Ot.arrayOf("string"), onAnimationEnd: Ot.func })), children: Ot.oneOfType([Ot.node, Ot.func]), isActive: Ot.bool, canBegin: Ot.bool, onAnimationEnd: Ot.func, shouldReAnimate: Ot.bool, onAnimationStart: Ot.func, onAnimationReStart: Ot.func };
function jo(e7) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e7);
}
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Qc.apply(this, arguments);
}
function TW(e7, t) {
  return MW(e7) || $W(e7, t) || EW(e7, t) || IW();
}
function IW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EW(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return hg(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hg(e7, t);
  }
}
function hg(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function $W(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function MW(e7) {
  if (Array.isArray(e7)) return e7;
}
function dg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(r), true).forEach(function(n) {
      DW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function DW(e7, t, r) {
  return t = NW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function NW(e7) {
  var t = CW(e7, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function CW(e7, t) {
  if (jo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var yg = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, u = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], h = 0, d = 4; h < d; h++) f[h] = a[h] > o ? o : a[h];
    l = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(u, ",").concat(t + c * f[0], ",").concat(r)), l += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(u, `,
        `).concat(t + n, ",").concat(r + s * f[1])), l += "L ".concat(t + n, ",").concat(r + i - s * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(u, `,
        `).concat(t + n - c * f[2], ",").concat(r + i)), l += "L ".concat(t + c * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(u, `,
        `).concat(t, ",").concat(r + i - s * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + i - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n - c * y, ",").concat(r + i, `
            L `).concat(t + c * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t, ",").concat(r + i - s * y, " Z");
  } else l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, jW = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), h = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= h;
  }
  return false;
}, BW = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, Sp = function(t) {
  var r = pg(pg({}, BW), t), n = B.useRef(), i = B.useState(-1), a = TW(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var S = n.current.getTotalLength();
      S && s(S);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.width, f = r.height, h = r.radius, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, _ = r.isAnimationActive, g = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || l === 0 || f === 0) return null;
  var w = mt("recharts-rectangle", d);
  return g ? A.createElement(ur, { canBegin: o > 0, from: { width: l, height: f, x: c, y: u }, to: { width: l, height: f, x: c, y: u }, duration: m, animationEasing: y, isActive: g }, function(S) {
    var v = S.width, b = S.height, O = S.x, P = S.y;
    return A.createElement(ur, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, isActive: _, easing: y }, A.createElement("path", Qc({}, ct(r, true), { className: w, d: yg(O, P, v, b, h), ref: n })));
  }) : A.createElement("path", Qc({}, ct(r, true), { className: w, d: yg(c, u, l, f, h) }));
};
function wh() {
  return wh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, wh.apply(this, arguments);
}
var el = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = mt("recharts-dot", a);
  return r === +r && n === +n && i === +i ? B.createElement("circle", wh({}, ct(t, false), mc(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function Bo(e7) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e7);
}
var RW = ["x", "y", "top", "left", "width", "height", "className"];
function Sh() {
  return Sh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Sh.apply(this, arguments);
}
function mg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kW(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), true).forEach(function(n) {
      LW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function LW(e7, t, r) {
  return t = FW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function FW(e7) {
  var t = UW(e7, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function UW(e7, t) {
  if (Bo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function zW(e7, t) {
  if (e7 == null) return {};
  var r = WW(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function WW(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var VW = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, qW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, h = t.height, d = h === void 0 ? 0 : h, y = t.className, m = zW(t, RW), p = kW({ x: n, y: a, top: s, left: u, width: f, height: d }, m);
  return !L(n) || !L(a) || !L(f) || !L(d) || !L(s) || !L(u) ? null : A.createElement("path", Sh({}, ct(p, true), { className: mt("recharts-cross", y), d: VW(n, a, f, d, s, u) }));
}, GW = mw, HW = GW(Object.getPrototypeOf, Object), KW = HW, YW = Jr, XW = KW, JW = Qr, QW = "[object Object]", ZW = Function.prototype, t5 = Object.prototype, eO = ZW.toString, e52 = t5.hasOwnProperty, r5 = eO.call(Object);
function n5(e7) {
  if (!JW(e7) || YW(e7) != QW) return false;
  var t = XW(e7);
  if (t === null) return true;
  var r = e52.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && eO.call(r) == r5;
}
var i5 = n5;
const a5 = Bt(i5);
var o5 = Jr, s5 = Qr, c5 = "[object Boolean]";
function u5(e7) {
  return e7 === true || e7 === false || s5(e7) && o5(e7) == c5;
}
var l5 = u5;
const f5 = Bt(l5);
function Ro(e7) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e7);
}
function Zc() {
  return Zc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Zc.apply(this, arguments);
}
function h5(e7, t) {
  return m5(e7) || y5(e7, t) || p5(e7, t) || d5();
}
function d5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p5(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return vg(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vg(e7, t);
  }
}
function vg(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function y5(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function m5(e7) {
  if (Array.isArray(e7)) return e7;
}
function gg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), true).forEach(function(n) {
      v5(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function v5(e7, t, r) {
  return t = g5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function g5(e7) {
  var t = b5(e7, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function b5(e7, t) {
  if (Ro(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var _g = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, _5 = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, w5 = function(t) {
  var r = bg(bg({}, _5), t), n = B.useRef(), i = B.useState(-1), a = h5(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var w = n.current.getTotalLength();
      w && s(w);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.upperWidth, f = r.lowerWidth, h = r.height, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, _ = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || h !== +h || l === 0 && f === 0 || h === 0) return null;
  var g = mt("recharts-trapezoid", d);
  return _ ? A.createElement(ur, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: h, x: c, y: u }, to: { upperWidth: l, lowerWidth: f, height: h, x: c, y: u }, duration: m, animationEasing: y, isActive: _ }, function(w) {
    var S = w.upperWidth, v = w.lowerWidth, b = w.height, O = w.x, P = w.y;
    return A.createElement(ur, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, easing: y }, A.createElement("path", Zc({}, ct(r, true), { className: g, d: _g(O, P, S, v, b), ref: n })));
  }) : A.createElement("g", null, A.createElement("path", Zc({}, ct(r, true), { className: g, d: _g(c, u, l, f, h) })));
}, S5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function ko(e7) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e7);
}
function O5(e7, t) {
  if (e7 == null) return {};
  var r = x5(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function x5(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function wg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tu(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wg(Object(r), true).forEach(function(n) {
      A5(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function A5(e7, t, r) {
  return t = P5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function P5(e7) {
  var t = T5(e7, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function T5(e7, t) {
  if (ko(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function I5(e7, t) {
  return tu(tu({}, t), e7);
}
function E5(e7, t) {
  return e7 === "symbols";
}
function Sg(e7) {
  var t = e7.shapeType, r = e7.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(Sp, r);
    case "trapezoid":
      return A.createElement(w5, r);
    case "sector":
      return A.createElement(VS, r);
    case "symbols":
      if (E5(t)) return A.createElement(zu, r);
      break;
    default:
      return null;
  }
}
function $5(e7) {
  return B.isValidElement(e7) ? e7.props : e7;
}
function Oh(e7) {
  var t = e7.option, r = e7.shapeType, n = e7.propTransformer, i = n === void 0 ? I5 : n, a = e7.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e7.isActive, c = O5(e7, S5), u;
  if (B.isValidElement(t)) u = B.cloneElement(t, tu(tu({}, c), $5(t)));
  else if (lt(t)) u = t(c);
  else if (a5(t) && !f5(t)) {
    var l = i(t, c);
    u = A.createElement(Sg, { shapeType: r, elementProps: l });
  } else {
    var f = c;
    u = A.createElement(Sg, { shapeType: r, elementProps: f });
  }
  return s ? A.createElement(St, { className: o }, u) : u;
}
function rl(e7, t) {
  return t != null && "trapezoids" in e7.props;
}
function nl(e7, t) {
  return t != null && "sectors" in e7.props;
}
function Lo(e7, t) {
  return t != null && "points" in e7.props;
}
function M5(e7, t) {
  var r, n, i = e7.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e7.x === t.x, a = e7.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e7.y === t.y;
  return i && a;
}
function D5(e7, t) {
  var r = e7.endAngle === t.endAngle, n = e7.startAngle === t.startAngle;
  return r && n;
}
function N5(e7, t) {
  var r = e7.x === t.x, n = e7.y === t.y, i = e7.z === t.z;
  return r && n && i;
}
function C5(e7, t) {
  var r;
  return rl(e7, t) ? r = M5 : nl(e7, t) ? r = D5 : Lo(e7, t) && (r = N5), r;
}
function j5(e7, t) {
  var r;
  return rl(e7, t) ? r = "trapezoids" : nl(e7, t) ? r = "sectors" : Lo(e7, t) && (r = "points"), r;
}
function B5(e7, t) {
  if (rl(e7, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (nl(e7, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Lo(e7, t) ? t.payload : {};
}
function R5(e7) {
  var t = e7.activeTooltipItem, r = e7.graphicalItem, n = e7.itemData, i = j5(r, t), a = B5(r, t), o = n.filter(function(c, u) {
    var l = Yn(a, c), f = r.props[i].filter(function(y) {
      var m = C5(r, t);
      return m(y, t);
    }), h = r.props[i].indexOf(f[f.length - 1]), d = u === h;
    return l && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var k5 = Math.ceil, L5 = Math.max;
function F5(e7, t, r, n) {
  for (var i = -1, a = L5(k5((t - e7) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e7, e7 += r;
  return o;
}
var U5 = F5, z5 = jw, Og = 1 / 0, W5 = 17976931348623157e292;
function V5(e7) {
  if (!e7) return e7 === 0 ? e7 : 0;
  if (e7 = z5(e7), e7 === Og || e7 === -Og) {
    var t = e7 < 0 ? -1 : 1;
    return t * W5;
  }
  return e7 === e7 ? e7 : 0;
}
var rO = V5, q5 = U5, G5 = qu, Xl = rO;
function H5(e7) {
  return function(t, r, n) {
    return n && typeof n != "number" && G5(t, r, n) && (r = n = void 0), t = Xl(t), r === void 0 ? (r = t, t = 0) : r = Xl(r), n = n === void 0 ? t < r ? 1 : -1 : Xl(n), q5(t, r, n, e7);
  };
}
var K5 = H5, Y5 = K5, X5 = Y5(), J5 = X5;
const eu = Bt(J5);
function Fo(e7) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e7);
}
function xg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ag(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xg(Object(r), true).forEach(function(n) {
      nO(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function nO(e7, t, r) {
  return t = Q5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Q5(e7) {
  var t = Z5(e7, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function Z5(e7, t) {
  if (Fo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var tV = ["Webkit", "Moz", "O", "ms"], eV = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = tV.reduce(function(a, o) {
    return Ag(Ag({}, a), {}, nO({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Xi(e7) {
  "@babel/helpers - typeof";
  return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xi(e7);
}
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, ru.apply(this, arguments);
}
function Pg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jl(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), true).forEach(function(n) {
      Ce(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function rV(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Tg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, aO(n.key), n);
  }
}
function nV(e7, t, r) {
  return t && Tg(e7.prototype, t), r && Tg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function iV(e7, t, r) {
  return t = nu(t), aV(e7, iO() ? Reflect.construct(t, r || [], nu(e7).constructor) : t.apply(e7, r));
}
function aV(e7, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return oV(e7);
}
function oV(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function iO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iO = function() {
    return !!e7;
  })();
}
function nu(e7) {
  return nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nu(e7);
}
function sV(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && xh(e7, t);
}
function xh(e7, t) {
  return xh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, xh(e7, t);
}
function Ce(e7, t, r) {
  return t = aO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function aO(e7) {
  var t = cV(e7, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function cV(e7, t) {
  if (Xi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var uV = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, u = Ja().domain(eu(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: l };
}, Ig = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Ji = function(e7) {
  function t(r) {
    var n;
    return rV(this, t), n = iV(this, t, [r]), Ce(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ce(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ce(n, "handleDragEnd", function() {
      n.setState({ isTravellerMoving: false, isSlideMoving: false }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null ? void 0 : o({ endIndex: a, startIndex: s });
      }), n.detachDragEndListener();
    }), Ce(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ce(n, "handleEnterSlideOrTraveller", function() {
      n.setState({ isTextActive: true });
    }), Ce(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({ isTextActive: false });
    }), Ce(n, "handleSlideDragStart", function(i) {
      var a = Ig(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return sV(t, e7), nV(t, [{ key: "componentWillUnmount", value: function() {
    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
  } }, { key: "getIndex", value: function(n) {
    var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, c = s.gap, u = s.data, l = u.length - 1, f = Math.min(i, a), h = Math.max(i, a), d = t.getIndexInRange(o, f), y = t.getIndexInRange(o, h);
    return { startIndex: d - d % c, endIndex: y === l ? l : y - y % c };
  } }, { key: "getTextOfTick", value: function(n) {
    var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, c = ae(a[n], s, n);
    return lt(o) ? o(c, n) : c;
  } }, { key: "attachDragEndListener", value: function() {
    window.addEventListener("mouseup", this.handleDragEnd, true), window.addEventListener("touchend", this.handleDragEnd, true), window.addEventListener("mousemove", this.handleDrag, true);
  } }, { key: "detachDragEndListener", value: function() {
    window.removeEventListener("mouseup", this.handleDragEnd, true), window.removeEventListener("touchend", this.handleDragEnd, true), window.removeEventListener("mousemove", this.handleDrag, true);
  } }, { key: "handleSlideDrag", value: function(n) {
    var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, c = this.props, u = c.x, l = c.width, f = c.travellerWidth, h = c.startIndex, d = c.endIndex, y = c.onChange, m = n.pageX - a;
    m > 0 ? m = Math.min(m, u + l - f - s, u + l - f - o) : m < 0 && (m = Math.max(m, u - o, u - s));
    var p = this.getIndex({ startX: o + m, endX: s + m });
    (p.startIndex !== h || p.endIndex !== d) && y && y(p), this.setState({ startX: o + m, endX: s + m, slideMoveStartX: n.pageX });
  } }, { key: "handleTravellerDragStart", value: function(n, i) {
    var a = Ig(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, c = i.startX, u = this.state[o], l = this.props, f = l.x, h = l.width, d = l.travellerWidth, y = l.onChange, m = l.gap, p = l.data, _ = { startX: this.state.startX, endX: this.state.endX }, g = n.pageX - a;
    g > 0 ? g = Math.min(g, f + h - d - u) : g < 0 && (g = Math.max(g, f - u)), _[o] = u + g;
    var w = this.getIndex(_), S = w.startIndex, v = w.endIndex, b = function() {
      var P = p.length - 1;
      return o === "startX" && (s > c ? S % m === 0 : v % m === 0) || s < c && v === P || o === "endX" && (s > c ? v % m === 0 : S % m === 0) || s > c && v === P;
    };
    this.setState(Ce(Ce({}, o, u + g), "brushMoveStartX", n.pageX), function() {
      y && b() && y(w);
    });
  } }, { key: "handleTravellerMoveKeyboard", value: function(n, i) {
    var a = this, o = this.state, s = o.scaleValues, c = o.startX, u = o.endX, l = this.state[i], f = s.indexOf(l);
    if (f !== -1) {
      var h = f + n;
      if (!(h === -1 || h >= s.length)) {
        var d = s[h];
        i === "startX" && d >= u || i === "endX" && d <= c || this.setState(Ce({}, i, d), function() {
          a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
        });
      }
    }
  } }, { key: "renderBackground", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.fill, u = n.stroke;
    return A.createElement("rect", { stroke: u, fill: c, x: i, y: a, width: o, height: s });
  } }, { key: "renderPanorama", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.data, u = n.children, l = n.padding, f = B.Children.only(u);
    return f ? A.cloneElement(f, { x: i, y: a, width: o, height: s, margin: l, compact: true, data: c }) : null;
  } }, { key: "renderTravellerLayer", value: function(n, i) {
    var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, h = c.traveller, d = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, _ = Math.max(n, this.props.x), g = Jl(Jl({}, ct(this.props, false)), {}, { x: _, y: u, width: l, height: f }), w = d || "Min value: ".concat((a = y[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
    return A.createElement(St, { tabIndex: 0, role: "slider", "aria-label": w, "aria-valuenow": n, className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[i], onTouchStart: this.travellerDragStartHandlers[i], onKeyDown: function(v) {
      ["ArrowLeft", "ArrowRight"].includes(v.key) && (v.preventDefault(), v.stopPropagation(), s.handleTravellerMoveKeyboard(v.key === "ArrowRight" ? 1 : -1, i));
    }, onFocus: function() {
      s.setState({ isTravellerFocused: true });
    }, onBlur: function() {
      s.setState({ isTravellerFocused: false });
    }, style: { cursor: "col-resize" } }, t.renderTraveller(h, g));
  } }, { key: "renderSlide", value: function(n, i) {
    var a = this.props, o = a.y, s = a.height, c = a.stroke, u = a.travellerWidth, l = Math.min(n, i) + u, f = Math.max(Math.abs(i - n) - u, 0);
    return A.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: c, fillOpacity: 0.2, x: l, y: o, width: f, height: s });
  } }, { key: "renderText", value: function() {
    var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, c = n.travellerWidth, u = n.stroke, l = this.state, f = l.startX, h = l.endX, d = 5, y = { pointerEvents: "none", fill: u };
    return A.createElement(St, { className: "recharts-brush-texts" }, A.createElement($c, ru({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(f, h) - d, y: o + s / 2 }, y), this.getTextOfTick(i)), A.createElement($c, ru({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(f, h) + c + d, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, m = h.isTextActive, p = h.isSlideMoving, _ = h.isTravellerMoving, g = h.isTravellerFocused;
    if (!i || !i.length || !L(s) || !L(c) || !L(u) || !L(l) || u <= 0 || l <= 0) return null;
    var w = mt("recharts-brush", a), S = A.Children.count(o) === 1, v = eV("userSelect", "none");
    return A.createElement(St, { className: w, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: v }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || _ || g || f) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
    return A.createElement(A.Fragment, null, A.createElement("rect", { x: i, y: a, width: o, height: s, fill: c, stroke: "none" }), A.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), A.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return A.isValidElement(n) ? a = A.cloneElement(n, i) : lt(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return Jl({ prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? uV({ data: a, width: o, x: s, travellerWidth: c, startIndex: l, endIndex: f }) : { scale: null, scaleValues: null });
    if (i.scale && (o !== i.prevWidth || s !== i.prevX || c !== i.prevTravellerWidth)) {
      i.scale.range([s, s + o - c]);
      var h = i.scale.domain().map(function(d) {
        return i.scale(d);
      });
      return { prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o, startX: i.scale(n.startIndex), endX: i.scale(n.endIndex), scaleValues: h };
    }
    return null;
  } }, { key: "getIndexInRange", value: function(n, i) {
    for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
      var c = Math.floor((o + s) / 2);
      n[c] > i ? s = c : o = c;
    }
    return i >= n[s] ? s : o;
  } }]);
}(B.PureComponent);
Ce(Ji, "displayName", "Brush");
Ce(Ji, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var lV = Hd;
function fV(e7, t) {
  var r;
  return lV(e7, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var hV = fV, dV = cw, pV = wn, yV = hV, mV = $e, vV = qu;
function gV(e7, t, r) {
  var n = mV(e7) ? dV : yV;
  return r && vV(e7, t, r) && (t = void 0), n(e7, pV(t));
}
var bV = gV;
const _V = Bt(bV);
var xr = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Eg = $w;
function wV(e7, t, r) {
  t == "__proto__" && Eg ? Eg(e7, t, { configurable: true, enumerable: true, value: r, writable: true }) : e7[t] = r;
}
var SV = wV, OV = SV, xV = Iw, AV = wn;
function PV(e7, t) {
  var r = {};
  return t = AV(t), xV(e7, function(n, i, a) {
    OV(r, i, t(n, i, a));
  }), r;
}
var TV = PV;
const IV = Bt(TV);
function EV(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (!t(e7[r], r, e7)) return false;
  return true;
}
var $V = EV, MV = Hd;
function DV(e7, t) {
  var r = true;
  return MV(e7, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var NV = DV, CV = $V, jV = NV, BV = wn, RV = $e, kV = qu;
function LV(e7, t, r) {
  var n = RV(e7) ? CV : jV;
  return r && kV(e7, t, r) && (t = void 0), n(e7, BV(t));
}
var FV = LV;
const oO = Bt(FV);
var UV = ["x", "y"];
function Uo(e7) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e7);
}
function Ah() {
  return Ah = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ah.apply(this, arguments);
}
function $g(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ka(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), true).forEach(function(n) {
      zV(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function zV(e7, t, r) {
  return t = WV(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function WV(e7) {
  var t = VV(e7, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function VV(e7, t) {
  if (Uo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function qV(e7, t) {
  if (e7 == null) return {};
  var r = GV(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function GV(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function HV(e7, t) {
  var r = e7.x, n = e7.y, i = qV(e7, UV), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), h = parseInt(f, 10);
  return ka(ka(ka(ka(ka({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: l, width: h, name: t.name, radius: t.radius });
}
function Mg(e7) {
  return A.createElement(Oh, Ah({ shapeType: "rectangle", propTransformer: HV, activeClassName: "recharts-active-bar" }, e7));
}
var KV = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || c$(n);
    return a ? t(n, i) : (a || Jn(), r);
  };
}, YV = ["value", "background"], sO;
function Qi(e7) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e7);
}
function XV(e7, t) {
  if (e7 == null) return {};
  var r = JV(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function JV(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, iu.apply(this, arguments);
}
function Dg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xt(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), true).forEach(function(n) {
      ln(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function QV(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ng(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, uO(n.key), n);
  }
}
function ZV(e7, t, r) {
  return t && Ng(e7.prototype, t), r && Ng(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function tq(e7, t, r) {
  return t = au(t), eq(e7, cO() ? Reflect.construct(t, r || [], au(e7).constructor) : t.apply(e7, r));
}
function eq(e7, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rq(e7);
}
function rq(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function cO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cO = function() {
    return !!e7;
  })();
}
function au(e7) {
  return au = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, au(e7);
}
function nq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ph(e7, t);
}
function Ph(e7, t) {
  return Ph = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ph(e7, t);
}
function ln(e7, t, r) {
  return t = uO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function uO(e7) {
  var t = iq(e7, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function iq(e7, t) {
  if (Qi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Pa = function(e7) {
  function t() {
    var r;
    QV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = tq(this, t, [].concat(i)), ln(r, "state", { isAnimationFinished: false }), ln(r, "id", ei("recharts-bar-")), ln(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), ln(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return nq(t, e7), ZV(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = ct(this.props, false);
    return n && n.map(function(f, h) {
      var d = h === c, y = d ? u : o, m = Xt(Xt(Xt({}, l), f), {}, { isActive: d, option: y, index: h, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return A.createElement(St, iu({ className: "recharts-bar-rectangle" }, uo(i.props, f, h), { key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(h) }), A.createElement(Mg, m));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, c = i.animationBegin, u = i.animationDuration, l = i.animationEasing, f = i.animationId, h = this.state.prevData;
    return A.createElement(ur, { begin: c, duration: u, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(f), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(d) {
      var y = d.t, m = a.map(function(p, _) {
        var g = h && h[_];
        if (g) {
          var w = Ht(g.x, p.x), S = Ht(g.y, p.y), v = Ht(g.width, p.width), b = Ht(g.height, p.height);
          return Xt(Xt({}, p), {}, { x: w(y), y: S(y), width: v(y), height: b(y) });
        }
        if (o === "horizontal") {
          var O = Ht(0, p.height), P = O(y);
          return Xt(Xt({}, p), {}, { y: p.y + p.height - P, height: P });
        }
        var T = Ht(0, p.width), $ = T(y);
        return Xt(Xt({}, p), {}, { width: $ });
      });
      return A.createElement(St, null, n.renderRectanglesStatically(m));
    });
  } }, { key: "renderRectangles", value: function() {
    var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
    return a && i && i.length && (!o || !Yn(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = ct(this.props.background, false);
    return a.map(function(u, l) {
      u.value;
      var f = u.background, h = XV(u, YV);
      if (!f) return null;
      var d = Xt(Xt(Xt(Xt(Xt({}, h), {}, { fill: "#eee" }, f), c), uo(n.props, u, l)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: l, className: "recharts-bar-background-rectangle" });
      return A.createElement(Mg, iu({ key: "background-bar-".concat(l), option: n.props.background, isActive: l === s }, d));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Aa);
    if (!f) return null;
    var h = u === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(p, _) {
      var g = Array.isArray(p.value) ? p.value[1] : p.value;
      return { x: p.x, y: p.y, value: g, errorVal: ae(p, _) };
    }, y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, y, f.map(function(m) {
      return A.cloneElement(m, { key: "error-bar-".concat(i, "-").concat(m.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, offset: h, dataPointFormatter: d });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, h = n.height, d = n.isAnimationActive, y = n.background, m = n.id;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, _ = mt("recharts-bar", o), g = s && s.allowDataOverflow, w = c && c.allowDataOverflow, S = g || w, v = st(m) ? this.id : m;
    return A.createElement(St, { className: _ }, g || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: g ? u : u - f / 2, y: w ? l : l - h / 2, width: g ? f : f * 2, height: w ? h : h * 2 }))) : null, A.createElement(St, { className: "recharts-bar-rectangles", clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, v), (!d || p) && Or.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
}(B.PureComponent);
sO = Pa;
ln(Pa, "displayName", "Bar");
ln(Pa, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !Sn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
ln(Pa, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.barPosition, i = e7.bandSize, a = e7.xAxis, o = e7.yAxis, s = e7.xAxisTicks, c = e7.yAxisTicks, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = M6(n, r);
  if (!d) return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Xt(Xt({}, m), r.props) : r.props, _ = p.dataKey, g = p.children, w = p.minPointSize, S = y === "horizontal" ? o : a, v = u ? S.scale.domain() : null, b = L6({ numericAxis: S }), O = Te(g, Xd), P = f.map(function(T, $) {
    var E, I, j, N, M, C;
    u ? E = D6(u[l + $], v) : (E = ae(T, _), Array.isArray(E) || (E = [b, E]));
    var R = KV(w, sO.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, U = [o.scale(E[0]), o.scale(E[1])], q = U[0], rt = U[1];
      I = jv({ axis: a, ticks: s, bandSize: i, offset: d.offset, entry: T, index: $ }), j = (F = rt ?? q) !== null && F !== void 0 ? F : void 0, N = d.size;
      var W = q - rt;
      if (M = Number.isNaN(W) ? 0 : W, C = { x: I, y: o.y, width: N, height: o.height }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var it = sr(M || R) * (Math.abs(R) - Math.abs(M));
        j -= it, M += it;
      }
    } else {
      var Rt = [a.scale(E[0]), a.scale(E[1])], Yt = Rt[0], Me = Rt[1];
      if (I = Yt, j = jv({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: T, index: $ }), N = Me - Yt, M = d.size, C = { x: a.x, y: j, width: a.width, height: M }, Math.abs(R) > 0 && Math.abs(N) < Math.abs(R)) {
        var Pn = sr(N || R) * (Math.abs(R) - Math.abs(N));
        N += Pn;
      }
    }
    return Xt(Xt(Xt({}, T), {}, { x: I, y: j, width: N, height: M, value: u ? E : E[1], payload: T, background: C }, O && O[$] && O[$].props), {}, { tooltipPayload: [US(r, T)], tooltipPosition: { x: I + N / 2, y: j + M / 2 } });
  });
  return Xt({ data: P, layout: y }, h);
});
function zo(e7) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e7);
}
function aq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Cg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, lO(n.key), n);
  }
}
function oq(e7, t, r) {
  return t && Cg(e7.prototype, t), r && Cg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function jg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ir(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jg(Object(r), true).forEach(function(n) {
      il(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function il(e7, t, r) {
  return t = lO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function lO(e7) {
  var t = sq(e7, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function sq(e7, t) {
  if (zo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var cq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, h = !!je(u, Pa);
  return l.reduce(function(d, y) {
    var m = r[y], p = m.orientation, _ = m.domain, g = m.padding, w = g === void 0 ? {} : g, S = m.mirror, v = m.reversed, b = "".concat(p).concat(S ? "Mirror" : ""), O, P, T, $, E;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = _[1] - _[0], j = 1 / 0, N = m.categoricalDomain.sort(h$);
      if (N.forEach(function(Rt, Yt) {
        Yt > 0 && (j = Math.min((Rt || 0) - (N[Yt - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / I, C = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (O = M * C / 2), m.padding === "no-gap") {
          var R = Kn(t.barCategoryGap, M * C), F = M * C / 2;
          O = F - R - (F - R) / C * R;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : P = m.range, v && (P = [P[1], P[0]]);
    var U = E6(m, a, h), q = U.scale, rt = U.realScaleType;
    q.domain(_).range(P), $6(q);
    var W = k6(q, ir(ir({}, m), {}, { realScaleType: rt }));
    i === "xAxis" ? (E = p === "top" && !S || p === "bottom" && S, T = n.left, $ = f[b] - E * m.height) : i === "yAxis" && (E = p === "left" && !S || p === "right" && S, T = f[b] - E * m.width, $ = n.top);
    var it = ir(ir(ir({}, m), W), {}, { realScaleType: rt, x: T, y: $, scale: q, width: i === "xAxis" ? n.width : m.width, height: i === "yAxis" ? n.height : m.height });
    return it.bandSize = qc(it, W), !m.hide && i === "xAxis" ? f[b] += (E ? -1 : 1) * it.height : m.hide || (f[b] += (E ? -1 : 1) * it.width), ir(ir({}, d), {}, il({}, y, it));
  }, {});
}, fO = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, uq = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return fO({ x: r, y: n }, { x: i, y: a });
}, hO = function() {
  function e7(t) {
    aq(this, e7), this.scale = t;
  }
  return oq(e7, [{ key: "domain", get: function() {
    return this.scale.domain;
  } }, { key: "range", get: function() {
    return this.scale.range;
  } }, { key: "rangeMin", get: function() {
    return this.range()[0];
  } }, { key: "rangeMax", get: function() {
    return this.range()[1];
  } }, { key: "bandwidth", get: function() {
    return this.scale.bandwidth;
  } }, { key: "apply", value: function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
    if (r !== void 0) {
      if (a) switch (a) {
        case "start":
          return this.scale(r);
        case "middle": {
          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + o;
        }
        case "end": {
          var s = this.bandwidth ? this.bandwidth() : 0;
          return this.scale(r) + s;
        }
        default:
          return this.scale(r);
      }
      if (i) {
        var c = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(r) + c;
      }
      return this.scale(r);
    }
  } }, { key: "isInRange", value: function(r) {
    var n = this.range(), i = n[0], a = n[n.length - 1];
    return i <= a ? r >= i && r <= a : r >= a && r <= i;
  } }], [{ key: "create", value: function(r) {
    return new e7(r);
  } }]);
}();
il(hO, "EPS", 1e-4);
var Op = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ir(ir({}, n), {}, il({}, i, hO.create(t[i])));
  }, {});
  return ir(ir({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return IV(i, function(c, u) {
      return r[u].apply(c, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return oO(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function lq(e7) {
  return (e7 % 180 + 180) % 180;
}
var fq = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = lq(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, hq = wn, dq = ts, pq = Wu;
function yq(e7) {
  return function(t, r, n) {
    var i = Object(t);
    if (!dq(t)) {
      var a = hq(r);
      t = pq(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e7(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var mq = yq, vq = rO;
function gq(e7) {
  var t = vq(e7), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var bq = gq, _q = Sw, wq = wn, Sq = bq, Oq = Math.max;
function xq(e7, t, r) {
  var n = e7 == null ? 0 : e7.length;
  if (!n) return -1;
  var i = r == null ? 0 : Sq(r);
  return i < 0 && (i = Oq(n + i, 0)), _q(e7, wq(t), i);
}
var Aq = xq, Pq = mq, Tq = Aq, Iq = Pq(Tq), Eq = Iq;
const $q = Bt(Eq);
var Mq = pE(function(e7) {
  return { x: e7.left, y: e7.top, width: e7.width, height: e7.height };
}, function(e7) {
  return ["l", e7.left, "t", e7.top, "w", e7.width, "h", e7.height].join("");
}), xp = B.createContext(void 0), Ap = B.createContext(void 0), dO = B.createContext(void 0), pO = B.createContext({}), yO = B.createContext(void 0), mO = B.createContext(0), vO = B.createContext(0), Bg = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = Mq(a);
  return A.createElement(xp.Provider, { value: n }, A.createElement(Ap.Provider, { value: i }, A.createElement(pO.Provider, { value: a }, A.createElement(dO.Provider, { value: l }, A.createElement(yO.Provider, { value: o }, A.createElement(mO.Provider, { value: u }, A.createElement(vO.Provider, { value: c }, s)))))));
}, Dq = function() {
  return B.useContext(yO);
}, gO = function(t) {
  var r = B.useContext(xp);
  r == null && Jn();
  var n = r[t];
  return n == null && Jn(), n;
}, Nq = function() {
  var t = B.useContext(xp);
  return cn(t);
}, Cq = function() {
  var t = B.useContext(Ap), r = $q(t, function(n) {
    return oO(n.domain, Number.isFinite);
  });
  return r || cn(t);
}, bO = function(t) {
  var r = B.useContext(Ap);
  r == null && Jn();
  var n = r[t];
  return n == null && Jn(), n;
}, jq = function() {
  var t = B.useContext(dO);
  return t;
}, Bq = function() {
  return B.useContext(pO);
}, Pp = function() {
  return B.useContext(vO);
}, Tp = function() {
  return B.useContext(mO);
};
function Zi(e7) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e7);
}
function Rq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function kq(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, wO(n.key), n);
  }
}
function Lq(e7, t, r) {
  return t && kq(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Fq(e7, t, r) {
  return t = ou(t), Uq(e7, _O() ? Reflect.construct(t, r || [], ou(e7).constructor) : t.apply(e7, r));
}
function Uq(e7, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return zq(e7);
}
function zq(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function _O() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_O = function() {
    return !!e7;
  })();
}
function ou(e7) {
  return ou = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ou(e7);
}
function Wq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Th(e7, t);
}
function Th(e7, t) {
  return Th = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Th(e7, t);
}
function Rg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(r), true).forEach(function(n) {
      Ip(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ip(e7, t, r) {
  return t = wO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function wO(e7) {
  var t = Vq(e7, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function Vq(e7, t) {
  if (Zi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function qq(e7, t) {
  return Yq(e7) || Kq(e7, t) || Hq(e7, t) || Gq();
}
function Gq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hq(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Lg(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lg(e7, t);
  }
}
function Lg(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Kq(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Yq(e7) {
  if (Array.isArray(e7)) return e7;
}
function Ih() {
  return Ih = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ih.apply(this, arguments);
}
var Xq = function(t, r) {
  var n;
  return A.isValidElement(t) ? n = A.cloneElement(t, r) : lt(t) ? n = t(r) : n = A.createElement("line", Ih({}, r, { className: "recharts-reference-line-line" })), n;
}, Jq = function(t, r, n, i, a, o, s, c, u) {
  var l = a.x, f = a.y, h = a.width, d = a.height;
  if (n) {
    var y = u.y, m = t.y.apply(y, { position: o });
    if (xr(u, "discard") && !t.y.isInRange(m)) return null;
    var p = [{ x: l + h, y: m }, { x: l, y: m }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var _ = u.x, g = t.x.apply(_, { position: o });
    if (xr(u, "discard") && !t.x.isInRange(g)) return null;
    var w = [{ x: g, y: f + d }, { x: g, y: f }];
    return s === "top" ? w.reverse() : w;
  }
  if (i) {
    var S = u.segment, v = S.map(function(b) {
      return t.apply(b, { position: o });
    });
    return xr(u, "discard") && _V(v, function(b) {
      return !t.isInRange(b);
    }) ? null : v;
  }
  return null;
};
function Qq(e7) {
  var t = e7.x, r = e7.y, n = e7.segment, i = e7.xAxisId, a = e7.yAxisId, o = e7.shape, s = e7.className, c = e7.alwaysShow, u = Dq(), l = gO(i), f = bO(a), h = jq();
  if (!u || !h) return null;
  zr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = Op({ x: l.scale, y: f.scale }), y = ie(t), m = ie(r), p = n && n.length === 2, _ = Jq(d, y, m, p, h, e7.position, l.orientation, f.orientation, e7);
  if (!_) return null;
  var g = qq(_, 2), w = g[0], S = w.x, v = w.y, b = g[1], O = b.x, P = b.y, T = xr(e7, "hidden") ? "url(#".concat(u, ")") : void 0, $ = kg(kg({ clipPath: T }, ct(e7, true)), {}, { x1: S, y1: v, x2: O, y2: P });
  return A.createElement(St, { className: mt("recharts-reference-line", s) }, Xq(o, $), he.renderCallByParent(e7, uq({ x1: S, y1: v, x2: O, y2: P })));
}
var Ep = function(e7) {
  function t() {
    return Rq(this, t), Fq(this, t, arguments);
  }
  return Wq(t, e7), Lq(t, [{ key: "render", value: function() {
    return A.createElement(Qq, this.props);
  } }]);
}(A.Component);
Ip(Ep, "displayName", "ReferenceLine");
Ip(Ep, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Eh() {
  return Eh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Eh.apply(this, arguments);
}
function ta(e7) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e7);
}
function Fg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ug(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), true).forEach(function(n) {
      al(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Zq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, OO(n.key), n);
  }
}
function eG(e7, t, r) {
  return t && tG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function rG(e7, t, r) {
  return t = su(t), nG(e7, SO() ? Reflect.construct(t, r || [], su(e7).constructor) : t.apply(e7, r));
}
function nG(e7, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iG(e7);
}
function iG(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function SO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (SO = function() {
    return !!e7;
  })();
}
function su(e7) {
  return su = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, su(e7);
}
function aG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && $h(e7, t);
}
function $h(e7, t) {
  return $h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $h(e7, t);
}
function al(e7, t, r) {
  return t = OO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function OO(e7) {
  var t = oG(e7, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function oG(e7, t) {
  if (ta(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var sG = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Op({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return xr(t, "discard") && !o.isInRange(s) ? null : s;
}, ol = function(e7) {
  function t() {
    return Zq(this, t), rG(this, t, arguments);
  }
  return aG(t, e7), eG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = ie(i), l = ie(a);
    if (zr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
    var f = sG(this.props);
    if (!f) return null;
    var h = f.x, d = f.y, y = this.props, m = y.shape, p = y.className, _ = xr(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, g = Ug(Ug({ clipPath: _ }, ct(this.props, true)), {}, { cx: h, cy: d });
    return A.createElement(St, { className: mt("recharts-reference-dot", p) }, t.renderDot(m, g), he.renderCallByParent(this.props, { x: h - o, y: d - o, width: 2 * o, height: 2 * o }));
  } }]);
}(A.Component);
al(ol, "displayName", "ReferenceDot");
al(ol, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
al(ol, "renderDot", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : lt(e7) ? r = e7(t) : r = A.createElement(el, Eh({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Mh() {
  return Mh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Mh.apply(this, arguments);
}
function ea(e7) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e7);
}
function zg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), true).forEach(function(n) {
      sl(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function cG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function uG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, AO(n.key), n);
  }
}
function lG(e7, t, r) {
  return t && uG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function fG(e7, t, r) {
  return t = cu(t), hG(e7, xO() ? Reflect.construct(t, r || [], cu(e7).constructor) : t.apply(e7, r));
}
function hG(e7, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return dG(e7);
}
function dG(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function xO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xO = function() {
    return !!e7;
  })();
}
function cu(e7) {
  return cu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cu(e7);
}
function pG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Dh(e7, t);
}
function Dh(e7, t) {
  return Dh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dh(e7, t);
}
function sl(e7, t, r) {
  return t = AO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function AO(e7) {
  var t = yG(e7, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function yG(e7, t) {
  if (ea(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var mG = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var h = Op({ x: l.scale, y: f.scale }), d = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(c, { position: "start" }) : h.y.rangeMin }, y = { x: r ? h.x.apply(s, { position: "end" }) : h.x.rangeMax, y: i ? h.y.apply(u, { position: "end" }) : h.y.rangeMax };
  return xr(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : fO(d, y);
}, cl = function(e7) {
  function t() {
    return cG(this, t), fG(this, t, arguments);
  }
  return pG(t, e7), lG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
    zr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var f = ie(i), h = ie(a), d = ie(o), y = ie(s), m = this.props.shape;
    if (!f && !h && !d && !y && !m) return null;
    var p = mG(f, h, d, y, this.props);
    if (!p && !m) return null;
    var _ = xr(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
    return A.createElement(St, { className: mt("recharts-reference-area", c) }, t.renderRect(m, Wg(Wg({ clipPath: _ }, ct(this.props, true)), p)), he.renderCallByParent(this.props, p));
  } }]);
}(A.Component);
sl(cl, "displayName", "ReferenceArea");
sl(cl, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
sl(cl, "renderRect", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : lt(e7) ? r = e7(t) : r = A.createElement(Sp, Mh({}, t, { className: "recharts-reference-area-rect" })), r;
});
function PO(e7, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e7;
  for (var n = [], i = 0; i < e7.length; i += t) n.push(e7[i]);
  return n;
}
function vG(e7, t, r) {
  var n = { width: e7.width + t.width, height: e7.height + t.height };
  return fq(n, r);
}
function gG(e7, t, r) {
  var n = r === "width", i = e7.x, a = e7.y, o = e7.width, s = e7.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function uu(e7, t, r, n, i) {
  if (e7 * t < e7 * n || e7 * t > e7 * i) return false;
  var a = r();
  return e7 * (t - e7 * a / 2 - n) >= 0 && e7 * (t + e7 * a / 2 - i) <= 0;
}
function bG(e7, t) {
  return PO(e7, t + 1);
}
function _G(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0) return { v: PO(n, u) };
    var m = c, p, _ = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, g = y.coordinate, w = c === 0 || uu(e7, g, _, l, s);
    w || (c = 0, l = o, u += 1), w && (l = g + e7 * (_() / 2 + i), c += u);
  }, h; u <= a.length; ) if (h = f(), h) return h.v;
  return [];
}
function Wo(e7) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e7);
}
function Vg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fe(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), true).forEach(function(n) {
      wG(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function wG(e7, t, r) {
  return t = SG(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function SG(e7) {
  var t = OG(e7, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function OG(e7, t) {
  if (Wo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function xG(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(h) {
    var d = a[h], y, m = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var p = e7 * (d.coordinate + e7 * m() / 2 - c);
      a[h] = d = fe(fe({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e7 : d.coordinate });
    } else a[h] = d = fe(fe({}, d), {}, { tickCoord: d.coordinate });
    var _ = uu(e7, d.tickCoord, m, s, c);
    _ && (c = d.tickCoord - e7 * (m() / 2 + i), a[h] = fe(fe({}, d), {}, { isShow: true }));
  }, l = o - 1; l >= 0; l--) u(l);
  return a;
}
function AG(e7, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), h = e7 * (l.coordinate + e7 * f / 2 - u);
    o[s - 1] = l = fe(fe({}, l), {}, { tickCoord: h > 0 ? l.coordinate - h * e7 : l.coordinate });
    var d = uu(e7, l.tickCoord, function() {
      return f;
    }, c, u);
    d && (u = l.tickCoord - e7 * (f / 2 + i), o[s - 1] = fe(fe({}, l), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, m = function(g) {
    var w = o[g], S, v = function() {
      return S === void 0 && (S = r(w, g)), S;
    };
    if (g === 0) {
      var b = e7 * (w.coordinate - e7 * v() / 2 - c);
      o[g] = w = fe(fe({}, w), {}, { tickCoord: b < 0 ? w.coordinate - b * e7 : w.coordinate });
    } else o[g] = w = fe(fe({}, w), {}, { tickCoord: w.coordinate });
    var O = uu(e7, w.tickCoord, v, c, u);
    O && (c = w.tickCoord + e7 * (v() / 2 + i), o[g] = fe(fe({}, w), {}, { isShow: true }));
  }, p = 0; p < y; p++) m(p);
  return o;
}
function $p(e7, t, r) {
  var n = e7.tick, i = e7.ticks, a = e7.viewBox, o = e7.minTickGap, s = e7.orientation, c = e7.interval, u = e7.tickFormatter, l = e7.unit, f = e7.angle;
  if (!i || !i.length || !n) return [];
  if (L(c) || Sn.isSsr) return bG(i, typeof c == "number" && L(c) ? c : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = l && d === "width" ? Xa(l, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = function(w, S) {
    var v = lt(u) ? u(w.value, S) : w.value;
    return d === "width" ? vG(Xa(v, { fontSize: t, letterSpacing: r }), y, f) : Xa(v, { fontSize: t, letterSpacing: r })[d];
  }, p = i.length >= 2 ? sr(i[1].coordinate - i[0].coordinate) : 1, _ = gG(a, p, d);
  return c === "equidistantPreserveStart" ? _G(p, _, m, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = AG(p, _, m, i, o, c === "preserveStartEnd") : h = xG(p, _, m, i, o), h.filter(function(g) {
    return g.isShow;
  }));
}
var PG = ["viewBox"], TG = ["viewBox"], IG = ["ticks"];
function ra(e7) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e7);
}
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, xi.apply(this, arguments);
}
function qg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function te(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qg(Object(r), true).forEach(function(n) {
      Mp(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ql(e7, t) {
  if (e7 == null) return {};
  var r = EG(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function EG(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function $G(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Gg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, IO(n.key), n);
  }
}
function MG(e7, t, r) {
  return t && Gg(e7.prototype, t), r && Gg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function DG(e7, t, r) {
  return t = lu(t), NG(e7, TO() ? Reflect.construct(t, r || [], lu(e7).constructor) : t.apply(e7, r));
}
function NG(e7, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return CG(e7);
}
function CG(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function TO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (TO = function() {
    return !!e7;
  })();
}
function lu(e7) {
  return lu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lu(e7);
}
function jG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Nh(e7, t);
}
function Nh(e7, t) {
  return Nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nh(e7, t);
}
function Mp(e7, t, r) {
  return t = IO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function IO(e7) {
  var t = BG(e7, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function BG(e7, t) {
  if (ra(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Ta = function(e7) {
  function t(r) {
    var n;
    return $G(this, t), n = DG(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return jG(t, e7), MG(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = Ql(n, PG), s = this.props, c = s.viewBox, u = Ql(s, TG);
    return !$i(a, c) || !$i(o, u) || !$i(i, this.state);
  } }, { key: "componentDidMount", value: function() {
    var n = this.layerReference;
    if (n) {
      var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      i && this.setState({ fontSize: window.getComputedStyle(i).fontSize, letterSpacing: window.getComputedStyle(i).letterSpacing });
    }
  } }, { key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.x, o = i.y, s = i.width, c = i.height, u = i.orientation, l = i.tickSize, f = i.mirror, h = i.tickMargin, d, y, m, p, _, g, w = f ? -1 : 1, S = n.tickSize || l, v = L(n.tickCoord) ? n.tickCoord : n.coordinate;
    switch (u) {
      case "top":
        d = y = n.coordinate, p = o + +!f * c, m = p - w * S, g = m - w * h, _ = v;
        break;
      case "left":
        m = p = n.coordinate, y = a + +!f * s, d = y - w * S, _ = d - w * h, g = v;
        break;
      case "right":
        m = p = n.coordinate, y = a + +f * s, d = y + w * S, _ = d + w * h, g = v;
        break;
      default:
        d = y = n.coordinate, p = o + +f * c, m = p + w * S, g = m + w * h, _ = v;
        break;
    }
    return { line: { x1: d, y1: m, x2: y, y2: p }, tick: { x: _, y: g } };
  } }, { key: "getTickTextAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o;
    switch (i) {
      case "left":
        o = a ? "start" : "end";
        break;
      case "right":
        o = a ? "end" : "start";
        break;
      default:
        o = "middle";
        break;
    }
    return o;
  } }, { key: "getTickVerticalAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o = "end";
    switch (i) {
      case "left":
      case "right":
        o = "middle";
        break;
      case "top":
        o = a ? "start" : "end";
        break;
      default:
        o = a ? "end" : "start";
        break;
    }
    return o;
  } }, { key: "renderAxisLine", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = te(te(te({}, ct(this.props, false)), ct(l, false)), {}, { fill: "none" });
    if (c === "top" || c === "bottom") {
      var h = +(c === "top" && !u || c === "bottom" && u);
      f = te(te({}, f), {}, { x1: i, y1: a + h * s, x2: i + o, y2: a + h * s });
    } else {
      var d = +(c === "left" && !u || c === "right" && u);
      f = te(te({}, f), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + s });
    }
    return A.createElement("line", xi({}, f, { className: mt("recharts-cartesian-axis-line", Ye(l, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, h = s.unit, d = $p(te(te({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = ct(this.props, false), _ = ct(l, false), g = te(te({}, p), {}, { fill: "none" }, ct(c, false)), w = d.map(function(S, v) {
      var b = o.getTickLineCoord(S), O = b.line, P = b.tick, T = te(te(te(te({ textAnchor: y, verticalAnchor: m }, p), {}, { stroke: "none", fill: u }, _), P), {}, { index: v, payload: S, visibleTicksCount: d.length, tickFormatter: f });
      return A.createElement(St, xi({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord) }, uo(o.props, S, v)), c && A.createElement("line", xi({}, g, O, { className: mt("recharts-cartesian-axis-tick-line", Ye(c, "className")) })), l && t.renderTickItem(l, T, "".concat(lt(f) ? f(S.value, v) : S.value).concat(h || "")));
    });
    return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
    if (l) return null;
    var f = this.props, h = f.ticks, d = Ql(f, IG), y = h;
    return lt(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || s <= 0 || !y || !y.length ? null : A.createElement(St, { className: mt("recharts-cartesian-axis", u), ref: function(p) {
      n.layerReference = p;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), he.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = mt(i.className, "recharts-cartesian-axis-tick-value");
    return A.isValidElement(n) ? o = A.cloneElement(n, te(te({}, i), {}, { className: s })) : lt(n) ? o = n(te(te({}, i), {}, { className: s })) : o = A.createElement($c, xi({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(B.Component);
Mp(Ta, "displayName", "CartesianAxis");
Mp(Ta, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var RG = ["x1", "y1", "x2", "y2", "key"], kG = ["offset"];
function Qn(e7) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e7);
}
function Hg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), true).forEach(function(n) {
      LG(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function LG(e7, t, r) {
  return t = FG(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function FG(e7) {
  var t = UG(e7, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function UG(e7, t) {
  if (Qn(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, kn.apply(this, arguments);
}
function Kg(e7, t) {
  if (e7 == null) return {};
  var r = zG(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function zG(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var WG = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return A.createElement("rect", { x: i, y: a, ry: c, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function EO(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (lt(e7)) r = e7(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Kg(t, RG), u = ct(c, false);
    u.offset;
    var l = Kg(u, kG);
    r = A.createElement("line", kn({}, l, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function VG(e7) {
  var t = e7.x, r = e7.width, n = e7.horizontal, i = n === void 0 ? true : n, a = e7.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e7), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return EO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function qG(e7) {
  var t = e7.y, r = e7.height, n = e7.vertical, i = n === void 0 ? true : n, a = e7.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e7), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return EO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function GG(e7) {
  var t = e7.horizontalFill, r = e7.fillOpacity, n = e7.x, i = e7.y, a = e7.width, o = e7.height, s = e7.horizontalPoints, c = e7.horizontal, u = c === void 0 ? true : c;
  if (!u || !t || !t.length) return null;
  var l = s.map(function(h) {
    return Math.round(h + i - i);
  }).sort(function(h, d) {
    return h - d;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(h, d) {
    var y = !l[d + 1], m = y ? i + o - h : l[d + 1] - h;
    if (m <= 0) return null;
    var p = d % t.length;
    return A.createElement("rect", { key: "react-".concat(d), y: h, x: n, height: m, width: a, stroke: "none", fill: t[p], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return A.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, f);
}
function HG(e7) {
  var t = e7.vertical, r = t === void 0 ? true : t, n = e7.verticalFill, i = e7.fillOpacity, a = e7.x, o = e7.y, s = e7.width, c = e7.height, u = e7.verticalPoints;
  if (!r || !n || !n.length) return null;
  var l = u.map(function(h) {
    return Math.round(h + a - a);
  }).sort(function(h, d) {
    return h - d;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(h, d) {
    var y = !l[d + 1], m = y ? a + s - h : l[d + 1] - h;
    if (m <= 0) return null;
    var p = d % n.length;
    return A.createElement("rect", { key: "react-".concat(d), x: h, y: o, width: m, height: c, stroke: "none", fill: n[p], fillOpacity: i, className: "recharts-cartesian-grid-bg" });
  });
  return A.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, f);
}
var KG = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return LS($p(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Lr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, YG = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return LS($p(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Lr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, ui = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function Ch(e7) {
  var t, r, n, i, a, o, s = Pp(), c = Tp(), u = Bq(), l = de(de({}, e7), {}, { stroke: (t = e7.stroke) !== null && t !== void 0 ? t : ui.stroke, fill: (r = e7.fill) !== null && r !== void 0 ? r : ui.fill, horizontal: (n = e7.horizontal) !== null && n !== void 0 ? n : ui.horizontal, horizontalFill: (i = e7.horizontalFill) !== null && i !== void 0 ? i : ui.horizontalFill, vertical: (a = e7.vertical) !== null && a !== void 0 ? a : ui.vertical, verticalFill: (o = e7.verticalFill) !== null && o !== void 0 ? o : ui.verticalFill, x: L(e7.x) ? e7.x : u.left, y: L(e7.y) ? e7.y : u.top, width: L(e7.width) ? e7.width : u.width, height: L(e7.height) ? e7.height : u.height }), f = l.x, h = l.y, d = l.width, y = l.height, m = l.syncWithTicks, p = l.horizontalValues, _ = l.verticalValues, g = Nq(), w = Cq();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(f) || f !== +f || !L(h) || h !== +h) return null;
  var S = l.verticalCoordinatesGenerator || KG, v = l.horizontalCoordinatesGenerator || YG, b = l.horizontalPoints, O = l.verticalPoints;
  if ((!b || !b.length) && lt(v)) {
    var P = p && p.length, T = v({ yAxis: w ? de(de({}, w), {}, { ticks: P ? p : w.ticks }) : void 0, width: s, height: c, offset: u }, P ? true : m);
    zr(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Qn(T), "]")), Array.isArray(T) && (b = T);
  }
  if ((!O || !O.length) && lt(S)) {
    var $ = _ && _.length, E = S({ xAxis: g ? de(de({}, g), {}, { ticks: $ ? _ : g.ticks }) : void 0, width: s, height: c, offset: u }, $ ? true : m);
    zr(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Qn(E), "]")), Array.isArray(E) && (O = E);
  }
  return A.createElement("g", { className: "recharts-cartesian-grid" }, A.createElement(WG, { fill: l.fill, fillOpacity: l.fillOpacity, x: l.x, y: l.y, width: l.width, height: l.height, ry: l.ry }), A.createElement(VG, kn({}, l, { offset: u, horizontalPoints: b, xAxis: g, yAxis: w })), A.createElement(qG, kn({}, l, { offset: u, verticalPoints: O, xAxis: g, yAxis: w })), A.createElement(GG, kn({}, l, { horizontalPoints: b })), A.createElement(HG, kn({}, l, { verticalPoints: O })));
}
Ch.displayName = "CartesianGrid";
var XG = ["type", "layout", "connectNulls", "ref"], JG = ["key"];
function na(e7) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e7);
}
function Yg(e7, t) {
  if (e7 == null) return {};
  var r = QG(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function QG(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, to.apply(this, arguments);
}
function Xg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xg(Object(r), true).forEach(function(n) {
      ar(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function li(e7) {
  return rH(e7) || eH(e7) || tH(e7) || ZG();
}
function ZG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tH(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return jh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jh(e7, t);
  }
}
function eH(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function rH(e7) {
  if (Array.isArray(e7)) return jh(e7);
}
function jh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function nH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Jg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, MO(n.key), n);
  }
}
function iH(e7, t, r) {
  return t && Jg(e7.prototype, t), r && Jg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function aH(e7, t, r) {
  return t = fu(t), oH(e7, $O() ? Reflect.construct(t, r || [], fu(e7).constructor) : t.apply(e7, r));
}
function oH(e7, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return sH(e7);
}
function sH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function $O() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($O = function() {
    return !!e7;
  })();
}
function fu(e7) {
  return fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fu(e7);
}
function cH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Bh(e7, t);
}
function Bh(e7, t) {
  return Bh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bh(e7, t);
}
function ar(e7, t, r) {
  return t = MO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function MO(e7) {
  var t = uH(e7, "string");
  return na(t) == "symbol" ? t : t + "";
}
function uH(e7, t) {
  if (na(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Vn = function(e7) {
  function t() {
    var r;
    nH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = aH(this, t, [].concat(i)), ar(r, "state", { isAnimationFinished: true, totalLength: 0 }), ar(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ar(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(_, g) {
        return _ + g;
      });
      if (!u) return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, h = s - o, d = [], y = 0, m = 0; y < c.length; m += c[y], ++y) if (m + c[y] > f) {
        d = [].concat(li(c.slice(0, y)), [f - m]);
        break;
      }
      var p = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(li(t.repeat(c, l)), li(d), p).map(function(_) {
        return "".concat(_, "px");
      }).join(", ");
    }), ar(r, "id", ei("recharts-line-")), ar(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ar(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ar(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return cH(t, e7), iH(t, [{ key: "componentDidMount", value: function() {
    if (this.props.isAnimationActive) {
      var n = this.getTotalLength();
      this.setState({ totalLength: n });
    }
  } }, { key: "componentDidUpdate", value: function() {
    if (this.props.isAnimationActive) {
      var n = this.getTotalLength();
      n !== this.state.totalLength && this.setState({ totalLength: n });
    }
  } }, { key: "getTotalLength", value: function() {
    var n = this.mainCurve;
    try {
      return n && n.getTotalLength && n.getTotalLength() || 0;
    } catch {
      return 0;
    }
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.points, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Aa);
    if (!f) return null;
    var h = function(m, p) {
      return { x: m.x, y: m.y, value: m.value, errorVal: ae(m.payload, p) };
    }, d = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, d, f.map(function(y) {
      return A.cloneElement(y, { key: "bar-".concat(y.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, dataPointFormatter: h });
    }));
  } }, { key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive;
    if (o && !this.state.isAnimationFinished) return null;
    var s = this.props, c = s.dot, u = s.points, l = s.dataKey, f = ct(this.props, false), h = ct(c, true), d = u.map(function(m, p) {
      var _ = De(De(De({ key: "dot-".concat(p), r: 3 }, f), h), {}, { index: p, cx: m.x, cy: m.y, value: m.value, dataKey: l, payload: m.payload, points: u });
      return t.renderDotItem(c, _);
    }), y = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, to({ className: "recharts-line-dots", key: "dots" }, y), d);
  } }, { key: "renderCurveStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
    s.ref;
    var f = Yg(s, XG), h = De(De(De({}, ct(f, true)), {}, { fill: "none", className: "recharts-line-curve", clipPath: i ? "url(#clipPath-".concat(a, ")") : null, points: n }, o), {}, { type: c, layout: u, connectNulls: l });
    return A.createElement(Wn, to({}, h, { pathRef: this.pathRef }));
  } }, { key: "renderCurveWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, _ = this.state, g = _.prevPoints, w = _.totalLength;
    return A.createElement(ur, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(S) {
      var v = S.t;
      if (g) {
        var b = g.length / s.length, O = s.map(function(I, j) {
          var N = Math.floor(j * b);
          if (g[N]) {
            var M = g[N], C = Ht(M.x, I.x), R = Ht(M.y, I.y);
            return De(De({}, I), {}, { x: C(v), y: R(v) });
          }
          if (y) {
            var F = Ht(m * 2, I.x), U = Ht(p / 2, I.y);
            return De(De({}, I), {}, { x: F(v), y: U(v) });
          }
          return De(De({}, I), {}, { x: I.x, y: I.y });
        });
        return a.renderCurveStatically(O, n, i);
      }
      var P = Ht(0, w), T = P(v), $;
      if (c) {
        var E = "".concat(c).split(/[,\s]+/gim).map(function(I) {
          return parseFloat(I);
        });
        $ = a.getStrokeDasharray(T, w, E);
      } else $ = a.generateSimpleStrokeDasharray(w, T);
      return a.renderCurveStatically(s, n, i, { strokeDasharray: $ });
    });
  } }, { key: "renderCurve", value: function(n, i) {
    var a = this.props, o = a.points, s = a.isAnimationActive, c = this.state, u = c.prevPoints, l = c.totalLength;
    return s && o && o.length && (!u && l > 0 || !Yn(u, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.xAxis, l = i.yAxis, f = i.top, h = i.left, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var _ = this.state.isAnimationFinished, g = s.length === 1, w = mt("recharts-line", c), S = u && u.allowDataOverflow, v = l && l.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = N_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? h : h - d / 2, y: v ? f : f - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: h - C / 2, y: f - C / 2, width: d + C, height: y + C }))) : null, !g && this.renderCurve(b, O), this.renderErrorBar(b, O), (g || o) && this.renderDots(b, M, O), (!m || _) && Or.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }, { key: "repeat", value: function(n, i) {
    for (var a = n.length % 2 !== 0 ? [].concat(li(n), [0]) : n, o = [], s = 0; s < i; ++s) o = [].concat(li(o), li(a));
    return o;
  } }, { key: "renderDotItem", value: function(n, i) {
    var a;
    if (A.isValidElement(n)) a = A.cloneElement(n, i);
    else if (lt(n)) a = n(i);
    else {
      var o = i.key, s = Yg(i, JG), c = mt("recharts-line-dot", typeof n != "boolean" ? n.className : "");
      a = A.createElement(el, to({ key: o }, s, { className: c }));
    }
    return a;
  } }]);
}(B.PureComponent);
ar(Vn, "displayName", "Line");
ar(Vn, "defaultProps", { xAxisId: 0, yAxisId: 0, connectNulls: false, activeDot: true, dot: true, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !Sn.isSsr, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: false, label: false });
ar(Vn, "getComposedData", function(e7) {
  var t = e7.props, r = e7.xAxis, n = e7.yAxis, i = e7.xAxisTicks, a = e7.yAxisTicks, o = e7.dataKey, s = e7.bandSize, c = e7.displayedData, u = e7.offset, l = t.layout, f = c.map(function(h, d) {
    var y = ae(h, o);
    return l === "horizontal" ? { x: Ki({ axis: r, ticks: i, bandSize: s, entry: h, index: d }), y: st(y) ? null : n.scale(y), value: y, payload: h } : { x: st(y) ? null : r.scale(y), y: Ki({ axis: n, ticks: a, bandSize: s, entry: h, index: d }), value: y, payload: h };
  });
  return De({ points: f, layout: l }, u);
});
var lH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], fH = ["key"], DO;
function ia(e7) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e7);
}
function NO(e7, t) {
  if (e7 == null) return {};
  var r = hH(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function hH(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ln.apply(this, arguments);
}
function Qg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qg(Object(r), true).forEach(function(n) {
      wr(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function dH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Zg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, jO(n.key), n);
  }
}
function pH(e7, t, r) {
  return t && Zg(e7.prototype, t), r && Zg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function yH(e7, t, r) {
  return t = hu(t), mH(e7, CO() ? Reflect.construct(t, r || [], hu(e7).constructor) : t.apply(e7, r));
}
function mH(e7, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vH(e7);
}
function vH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function CO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (CO = function() {
    return !!e7;
  })();
}
function hu(e7) {
  return hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hu(e7);
}
function gH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Rh(e7, t);
}
function Rh(e7, t) {
  return Rh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rh(e7, t);
}
function wr(e7, t, r) {
  return t = jO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function jO(e7) {
  var t = bH(e7, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function bH(e7, t) {
  if (ia(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Hr = function(e7) {
  function t() {
    var r;
    dH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = yH(this, t, [].concat(i)), wr(r, "state", { isAnimationFinished: true }), wr(r, "id", ei("recharts-area-")), wr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), lt(o) && o();
    }), wr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), lt(o) && o();
    }), r;
  }
  return gH(t, e7), pH(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var c = this.props, u = c.dot, l = c.points, f = c.dataKey, h = ct(this.props, false), d = ct(u, true), y = l.map(function(p, _) {
      var g = nn(nn(nn({ key: "dot-".concat(_), r: 3 }, h), d), {}, { index: _, cx: p.x, cy: p.y, dataKey: f, value: p.value, payload: p.payload, points: l });
      return t.renderDotItem(u, g);
    }), m = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, Ln({ className: "recharts-area-dots" }, m), y);
  } }, { key: "renderHorizontalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].x, u = o[o.length - 1].x, l = n * Math.abs(c - u), f = un(o.map(function(h) {
      return h.y || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(un(a.map(function(h) {
      return h.y || 0;
    })), f)), L(f) ? A.createElement("rect", { x: c < u ? c : c - l, y: 0, width: l, height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1)) }) : null;
  } }, { key: "renderVerticalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].y, u = o[o.length - 1].y, l = n * Math.abs(c - u), f = un(o.map(function(h) {
      return h.x || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(un(a.map(function(h) {
      return h.x || 0;
    })), f)), L(f) ? A.createElement("rect", { x: 0, y: c < u ? c : c - l, width: f + (s ? parseInt("".concat(s), 10) : 1), height: Math.floor(l) }) : null;
  } }, { key: "renderClipRect", value: function(n) {
    var i = this.props.layout;
    return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
  } }, { key: "renderAreaStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.layout, u = s.type, l = s.stroke, f = s.connectNulls, h = s.isRange;
    s.ref;
    var d = NO(s, lH);
    return A.createElement(St, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, A.createElement(Wn, Ln({}, ct(d, true), { points: n, connectNulls: f, type: u, baseLine: i, layout: c, stroke: "none", className: "recharts-area-area" })), l !== "none" && A.createElement(Wn, Ln({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: n })), l !== "none" && h && A.createElement(Wn, Ln({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
    return A.createElement(ur, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(_) {
      var g = _.t;
      if (m) {
        var w = m.length / s.length, S = s.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (m[$]) {
            var E = m[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return nn(nn({}, P), {}, { x: I(g), y: j(g) });
          }
          return P;
        }), v;
        if (L(c) && typeof c == "number") {
          var b = Ht(p, c);
          v = b(g);
        } else if (st(c) || ga(c)) {
          var O = Ht(p, 0);
          v = O(g);
        } else v = c.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (p[$]) {
            var E = p[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return nn(nn({}, P), {}, { x: I(g), y: j(g) });
          }
          return P;
        });
        return a.renderAreaStatically(S, v, n, i);
      }
      return A.createElement(St, null, A.createElement("defs", null, A.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(g))), A.createElement(St, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, c, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, c = a.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, h = u.totalLength;
    return c && o && o.length && (!l && h > 0 || !Yn(l, o) || !Yn(f, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.top, l = i.left, f = i.xAxis, h = i.yAxis, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var _ = this.state.isAnimationFinished, g = s.length === 1, w = mt("recharts-area", c), S = f && f.allowDataOverflow, v = h && h.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = N_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? l : l - d / 2, y: v ? u : u - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: l - C / 2, y: u - C / 2, width: d + C, height: y + C }))) : null, g ? null : this.renderArea(b, O), (o || g) && this.renderDots(b, M, O), (!m || _) && Or.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(B.PureComponent);
DO = Hr;
wr(Hr, "displayName", "Area");
wr(Hr, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !Sn.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
wr(Hr, "getBaseValue", function(e7, t, r, n) {
  var i = e7.layout, a = e7.baseValue, o = t.props.baseValue, s = o ?? a;
  if (L(s) && typeof s == "number") return s;
  var c = i === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
wr(Hr, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.xAxis, i = e7.yAxis, a = e7.xAxisTicks, o = e7.yAxisTicks, s = e7.bandSize, c = e7.dataKey, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = t.layout, y = u && u.length, m = DO.getBaseValue(t, r, n, i), p = d === "horizontal", _ = false, g = f.map(function(S, v) {
    var b;
    y ? b = u[l + v] : (b = ae(S, c), Array.isArray(b) ? _ = true : b = [m, b]);
    var O = b[1] == null || y && ae(S, c) == null;
    return p ? { x: Ki({ axis: n, ticks: a, bandSize: s, entry: S, index: v }), y: O ? null : i.scale(b[1]), value: b, payload: S } : { x: O ? null : n.scale(b[1]), y: Ki({ axis: i, ticks: o, bandSize: s, entry: S, index: v }), value: b, payload: S };
  }), w;
  return y || _ ? w = g.map(function(S) {
    var v = Array.isArray(S.value) ? S.value[0] : null;
    return p ? { x: S.x, y: v != null && S.y != null ? i.scale(v) : null } : { x: v != null ? n.scale(v) : null, y: S.y };
  }) : w = p ? i.scale(m) : n.scale(m), nn({ points: g, baseLine: w, layout: d, isRange: _ }, h);
});
wr(Hr, "renderDotItem", function(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (lt(e7)) r = e7(t);
  else {
    var n = mt("recharts-area-dot", typeof e7 != "boolean" ? e7.className : ""), i = t.key, a = NO(t, fH);
    r = A.createElement(el, Ln({}, a, { key: i, className: n }));
  }
  return r;
});
function aa(e7) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e7);
}
function _H(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, kO(n.key), n);
  }
}
function SH(e7, t, r) {
  return t && wH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function OH(e7, t, r) {
  return t = du(t), xH(e7, BO() ? Reflect.construct(t, r || [], du(e7).constructor) : t.apply(e7, r));
}
function xH(e7, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AH(e7);
}
function AH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function BO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BO = function() {
    return !!e7;
  })();
}
function du(e7) {
  return du = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, du(e7);
}
function PH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && kh(e7, t);
}
function kh(e7, t) {
  return kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kh(e7, t);
}
function RO(e7, t, r) {
  return t = kO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function kO(e7) {
  var t = TH(e7, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function TH(e7, t) {
  if (aa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var ul = function(e7) {
  function t() {
    return _H(this, t), OH(this, t, arguments);
  }
  return PH(t, e7), SH(t, [{ key: "render", value: function() {
    return null;
  } }]);
}(B.Component);
RO(ul, "displayName", "ZAxis");
RO(ul, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" });
var IH = ["option", "isActive"];
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, eo.apply(this, arguments);
}
function EH(e7, t) {
  if (e7 == null) return {};
  var r = $H(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function $H(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function MH(e7) {
  var t = e7.option, r = e7.isActive, n = EH(e7, IH);
  return typeof t == "string" ? B.createElement(Oh, eo({ option: B.createElement(zu, eo({ type: t }, n)), isActive: r, shapeType: "symbols" }, n)) : B.createElement(Oh, eo({ option: t, isActive: r, shapeType: "symbols" }, n));
}
function oa(e7) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e7);
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, ro.apply(this, arguments);
}
function tb(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), true).forEach(function(n) {
      fn(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function DH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eb(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, FO(n.key), n);
  }
}
function NH(e7, t, r) {
  return t && eb(e7.prototype, t), r && eb(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function CH(e7, t, r) {
  return t = pu(t), jH(e7, LO() ? Reflect.construct(t, r || [], pu(e7).constructor) : t.apply(e7, r));
}
function jH(e7, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return BH(e7);
}
function BH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function LO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LO = function() {
    return !!e7;
  })();
}
function pu(e7) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e7);
}
function RH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Lh(e7, t);
}
function Lh(e7, t) {
  return Lh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lh(e7, t);
}
function fn(e7, t, r) {
  return t = FO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function FO(e7) {
  var t = kH(e7, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function kH(e7, t) {
  if (oa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var ll = function(e7) {
  function t() {
    var r;
    DH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = CH(this, t, [].concat(i)), fn(r, "state", { isAnimationFinished: false }), fn(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true });
    }), fn(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false });
    }), fn(r, "id", ei("recharts-scatter-")), r;
  }
  return RH(t, e7), NH(t, [{ key: "renderSymbolsStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.activeShape, c = a.activeIndex, u = ct(this.props, false);
    return n.map(function(l, f) {
      var h = c === f, d = h ? s : o, y = We(We({}, u), l);
      return A.createElement(St, ro({ className: "recharts-scatter-symbol", key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f) }, uo(i.props, l, f), { role: "img" }), A.createElement(MH, ro({ option: d, isActive: h, key: "symbol-".concat(f) }, y)));
    });
  } }, { key: "renderSymbolsWithAnimation", value: function() {
    var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, u = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
    return A.createElement(ur, { begin: s, duration: c, isActive: o, easing: u, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(l), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var d = h.t, y = a.map(function(m, p) {
        var _ = f && f[p];
        if (_) {
          var g = Ht(_.cx, m.cx), w = Ht(_.cy, m.cy), S = Ht(_.size, m.size);
          return We(We({}, m), {}, { cx: g(d), cy: w(d), size: S(d) });
        }
        var v = Ht(0, m.size);
        return We(We({}, m), {}, { size: v(d) });
      });
      return A.createElement(St, null, n.renderSymbolsStatically(y));
    });
  } }, { key: "renderSymbols", value: function() {
    var n = this.props, i = n.points, a = n.isAnimationActive, o = this.state.prevPoints;
    return a && i && i.length && (!o || !Yn(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
  } }, { key: "renderErrorBar", value: function() {
    var n = this.props.isAnimationActive;
    if (n && !this.state.isAnimationFinished) return null;
    var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, c = i.children, u = Te(c, Aa);
    return u ? u.map(function(l, f) {
      var h = l.props, d = h.direction, y = h.dataKey;
      return A.cloneElement(l, { key: "".concat(d, "-").concat(y, "-").concat(a[f]), data: a, xAxis: o, yAxis: s, layout: d === "x" ? "vertical" : "horizontal", dataPointFormatter: function(p, _) {
        return { x: p.cx, y: p.cy, value: d === "x" ? +p.node.x : +p.node.y, errorVal: ae(p, _) };
      } });
    }) : null;
  } }, { key: "renderLine", value: function() {
    var n = this.props, i = n.points, a = n.line, o = n.lineType, s = n.lineJointType, c = ct(this.props, false), u = ct(a, false), l, f;
    if (o === "joint") l = i.map(function(w) {
      return { x: w.cx, y: w.cy };
    });
    else if (o === "fitting") {
      var h = f$(i), d = h.xmin, y = h.xmax, m = h.a, p = h.b, _ = function(S) {
        return m * S + p;
      };
      l = [{ x: d, y: _(d) }, { x: y, y: _(y) }];
    }
    var g = We(We(We({}, c), {}, { fill: "none", stroke: c && c.fill }, u), {}, { points: l });
    return A.isValidElement(a) ? f = A.cloneElement(a, g) : lt(a) ? f = a(g) : f = A.createElement(Wn, ro({}, g, { type: s })), A.createElement(St, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, f);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, h = n.width, d = n.height, y = n.id, m = n.isAnimationActive;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, _ = mt("recharts-scatter", s), g = c && c.allowDataOverflow, w = u && u.allowDataOverflow, S = g || w, v = st(y) ? this.id : y;
    return A.createElement(St, { className: _, clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, g || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: g ? l : l - h / 2, y: w ? f : f - d / 2, width: g ? h : h * 2, height: w ? d : d * 2 }))) : null, o && this.renderLine(), this.renderErrorBar(), A.createElement(St, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!m || p) && Or.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }]);
}(B.PureComponent);
fn(ll, "displayName", "Scatter");
fn(ll, "defaultProps", { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: false, isAnimationActive: !Sn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" });
fn(ll, "getComposedData", function(e7) {
  var t = e7.xAxis, r = e7.yAxis, n = e7.zAxis, i = e7.item, a = e7.displayedData, o = e7.xAxisTicks, s = e7.yAxisTicks, c = e7.offset, u = i.props.tooltipType, l = Te(i.props.children, Xd), f = st(t.dataKey) ? i.props.dataKey : t.dataKey, h = st(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : ul.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = r.scale.bandwidth ? r.scale.bandwidth() : 0, g = a.map(function(w, S) {
    var v = ae(w, f), b = ae(w, h), O = !st(d) && ae(w, d) || "-", P = [{ name: st(t.dataKey) ? i.props.name : t.name || t.dataKey, unit: t.unit || "", value: v, payload: w, dataKey: f, type: u }, { name: st(r.dataKey) ? i.props.name : r.name || r.dataKey, unit: r.unit || "", value: b, payload: w, dataKey: h, type: u }];
    O !== "-" && P.push({ name: n.name || n.dataKey, unit: n.unit || "", value: O, payload: w, dataKey: d, type: u });
    var T = Ki({ axis: t, ticks: o, bandSize: p, entry: w, index: S, dataKey: f }), $ = Ki({ axis: r, ticks: s, bandSize: _, entry: w, index: S, dataKey: h }), E = O !== "-" ? n.scale(O) : m, I = Math.sqrt(Math.max(E, 0) / Math.PI);
    return We(We({}, w), {}, { cx: T, cy: $, x: T - I, y: $ - I, xAxis: t, yAxis: r, zAxis: n, width: 2 * I, height: 2 * I, size: E, node: { x: v, y: b, z: O }, tooltipPayload: P, tooltipPosition: { x: T, y: $ }, payload: w }, l && l[S] && l[S].props);
  });
  return We({ points: g }, c);
});
function sa(e7) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e7);
}
function LH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function FH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, WO(n.key), n);
  }
}
function UH(e7, t, r) {
  return t && FH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function zH(e7, t, r) {
  return t = yu(t), WH(e7, UO() ? Reflect.construct(t, r || [], yu(e7).constructor) : t.apply(e7, r));
}
function WH(e7, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return VH(e7);
}
function VH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function UO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UO = function() {
    return !!e7;
  })();
}
function yu(e7) {
  return yu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yu(e7);
}
function qH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Fh(e7, t);
}
function Fh(e7, t) {
  return Fh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fh(e7, t);
}
function zO(e7, t, r) {
  return t = WO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function WO(e7) {
  var t = GH(e7, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function GH(e7, t) {
  if (sa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Uh() {
  return Uh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Uh.apply(this, arguments);
}
function HH(e7) {
  var t = e7.xAxisId, r = Pp(), n = Tp(), i = gO(t);
  return i == null ? null : B.createElement(Ta, Uh({}, i, { className: mt("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Lr(o, true);
  } }));
}
var Vo = function(e7) {
  function t() {
    return LH(this, t), zH(this, t, arguments);
  }
  return qH(t, e7), UH(t, [{ key: "render", value: function() {
    return B.createElement(HH, this.props);
  } }]);
}(B.Component);
zO(Vo, "displayName", "XAxis");
zO(Vo, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function ca(e7) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e7);
}
function KH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function YH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, GO(n.key), n);
  }
}
function XH(e7, t, r) {
  return t && YH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function JH(e7, t, r) {
  return t = mu(t), QH(e7, VO() ? Reflect.construct(t, r || [], mu(e7).constructor) : t.apply(e7, r));
}
function QH(e7, t) {
  if (t && (ca(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ZH(e7);
}
function ZH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function VO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (VO = function() {
    return !!e7;
  })();
}
function mu(e7) {
  return mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mu(e7);
}
function tK(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && zh(e7, t);
}
function zh(e7, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e7, t);
}
function qO(e7, t, r) {
  return t = GO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function GO(e7) {
  var t = eK(e7, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function eK(e7, t) {
  if (ca(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Wh() {
  return Wh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Wh.apply(this, arguments);
}
var rK = function(t) {
  var r = t.yAxisId, n = Pp(), i = Tp(), a = bO(r);
  return a == null ? null : B.createElement(Ta, Wh({}, a, { className: mt("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return Lr(s, true);
  } }));
}, Ni = function(e7) {
  function t() {
    return KH(this, t), JH(this, t, arguments);
  }
  return tK(t, e7), XH(t, [{ key: "render", value: function() {
    return B.createElement(rK, this.props);
  } }]);
}(B.Component);
qO(Ni, "displayName", "YAxis");
qO(Ni, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function rb(e7) {
  return oK(e7) || aK(e7) || iK(e7) || nK();
}
function nK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iK(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Vh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vh(e7, t);
  }
}
function aK(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function oK(e7) {
  if (Array.isArray(e7)) return Vh(e7);
}
function Vh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var qh = function(t, r, n, i, a) {
  var o = Te(t, Ep), s = Te(t, ol), c = [].concat(rb(o), rb(s)), u = Te(t, cl), l = "".concat(i, "Id"), f = i[0], h = r;
  if (c.length && (h = c.reduce(function(m, p) {
    if (p.props[l] === n && xr(p.props, "extendDomain") && L(p.props[f])) {
      var _ = p.props[f];
      return [Math.min(m[0], _), Math.max(m[1], _)];
    }
    return m;
  }, h)), u.length) {
    var d = "".concat(f, "1"), y = "".concat(f, "2");
    h = u.reduce(function(m, p) {
      if (p.props[l] === n && xr(p.props, "extendDomain") && L(p.props[d]) && L(p.props[y])) {
        var _ = p.props[d], g = p.props[y];
        return [Math.min(m[0], _, g), Math.max(m[1], _, g)];
      }
      return m;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(m, p) {
    return L(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, h)), h;
}, HO = { exports: {} };
(function(e7) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
  function i(c, u, l) {
    this.fn = c, this.context = u, this.once = l || false;
  }
  function a(c, u, l, f, h) {
    if (typeof l != "function") throw new TypeError("The listener must be a function");
    var d = new i(l, f || c, h), y = r ? r + u : u;
    return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], d] : c._events[y].push(d) : (c._events[y] = d, c._eventsCount++), c;
  }
  function o(c, u) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[u];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var u = [], l, f;
    if (this._eventsCount === 0) return u;
    for (f in l = this._events) t.call(l, f) && u.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
  }, s.prototype.listeners = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var h = 0, d = f.length, y = new Array(d); h < d; h++) y[h] = f[h].fn;
    return y;
  }, s.prototype.listenerCount = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, s.prototype.emit = function(u, l, f, h, d, y) {
    var m = r ? r + u : u;
    if (!this._events[m]) return false;
    var p = this._events[m], _ = arguments.length, g, w;
    if (p.fn) {
      switch (p.once && this.removeListener(u, p.fn, void 0, true), _) {
        case 1:
          return p.fn.call(p.context), true;
        case 2:
          return p.fn.call(p.context, l), true;
        case 3:
          return p.fn.call(p.context, l, f), true;
        case 4:
          return p.fn.call(p.context, l, f, h), true;
        case 5:
          return p.fn.call(p.context, l, f, h, d), true;
        case 6:
          return p.fn.call(p.context, l, f, h, d, y), true;
      }
      for (w = 1, g = new Array(_ - 1); w < _; w++) g[w - 1] = arguments[w];
      p.fn.apply(p.context, g);
    } else {
      var S = p.length, v;
      for (w = 0; w < S; w++) switch (p[w].once && this.removeListener(u, p[w].fn, void 0, true), _) {
        case 1:
          p[w].fn.call(p[w].context);
          break;
        case 2:
          p[w].fn.call(p[w].context, l);
          break;
        case 3:
          p[w].fn.call(p[w].context, l, f);
          break;
        case 4:
          p[w].fn.call(p[w].context, l, f, h);
          break;
        default:
          if (!g) for (v = 1, g = new Array(_ - 1); v < _; v++) g[v - 1] = arguments[v];
          p[w].fn.apply(p[w].context, g);
      }
    }
    return true;
  }, s.prototype.on = function(u, l, f) {
    return a(this, u, l, f, false);
  }, s.prototype.once = function(u, l, f) {
    return a(this, u, l, f, true);
  }, s.prototype.removeListener = function(u, l, f, h) {
    var d = r ? r + u : u;
    if (!this._events[d]) return this;
    if (!l) return o(this, d), this;
    var y = this._events[d];
    if (y.fn) y.fn === l && (!h || y.once) && (!f || y.context === f) && o(this, d);
    else {
      for (var m = 0, p = [], _ = y.length; m < _; m++) (y[m].fn !== l || h && !y[m].once || f && y[m].context !== f) && p.push(y[m]);
      p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var l;
    return u ? (l = r ? r + u : u, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e7.exports = s;
})(HO);
var sK = HO.exports;
const cK = Bt(sK);
var Zl = new cK(), tf = "recharts.syncMouseEvents";
function qo(e7) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e7);
}
function uK(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function lK(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, KO(n.key), n);
  }
}
function fK(e7, t, r) {
  return t && lK(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function ef(e7, t, r) {
  return t = KO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function KO(e7) {
  var t = hK(e7, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function hK(e7, t) {
  if (qo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var dK = function() {
  function e7() {
    uK(this, e7), ef(this, "activeIndex", 0), ef(this, "coordinateList", []), ef(this, "layout", "horizontal");
  }
  return fK(e7, [{ key: "setDetails", value: function(r) {
    var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, c = r.layout, u = c === void 0 ? null : c, l = r.offset, f = l === void 0 ? null : l, h = r.mouseHandlerCallback, d = h === void 0 ? null : h;
    this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = u ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = d ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
  } }, { key: "focus", value: function() {
    this.spoofMouse();
  } }, { key: "keyboardEvent", value: function(r) {
    if (this.coordinateList.length !== 0) switch (r.key) {
      case "ArrowRight": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
        break;
      }
      case "ArrowLeft": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
        break;
      }
    }
  } }, { key: "setIndex", value: function(r) {
    this.activeIndex = r;
  } }, { key: "spoofMouse", value: function() {
    var r, n;
    if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
      var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, c = this.coordinateList[this.activeIndex].coordinate, u = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = a + c + u, h = o + this.offset.top + s / 2 + l;
      this.mouseHandlerCallback({ pageX: f, pageY: h });
    }
  } }]);
}();
function pK(e7, t, r) {
  if (r === "number" && t === true && Array.isArray(e7)) {
    var n = e7 == null ? void 0 : e7[0], i = e7 == null ? void 0 : e7[1];
    if (n && i && L(n) && L(i)) return true;
  }
  return false;
}
function yK(e7, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e7 === "horizontal" ? t.x - i : r.left + 0.5, y: e7 === "horizontal" ? r.top + 0.5 : t.y - i, width: e7 === "horizontal" ? n : r.width - 1, height: e7 === "horizontal" ? r.height - 1 : n };
}
function YO(e7) {
  var t = e7.cx, r = e7.cy, n = e7.radius, i = e7.startAngle, a = e7.endAngle, o = le(t, r, n, i), s = le(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function mK(e7, t, r) {
  var n, i, a, o;
  if (e7 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e7 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e7 === "centric") {
    var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, h = le(s, c, u, f), d = le(s, c, l, f);
    n = h.x, i = h.y, a = d.x, o = d.y;
  } else return YO(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function Go(e7) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e7);
}
function nb(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ss(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nb(Object(r), true).forEach(function(n) {
      vK(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function vK(e7, t, r) {
  return t = gK(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function gK(e7) {
  var t = bK(e7, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function bK(e7, t) {
  if (Go(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function _K(e7) {
  var t, r, n = e7.element, i = e7.tooltipEventType, a = e7.isActive, o = e7.activeCoordinate, s = e7.activePayload, c = e7.offset, u = e7.activeTooltipIndex, l = e7.tooltipAxisBandSize, f = e7.layout, h = e7.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
  var y, m = Wn;
  if (h === "ScatterChart") y = o, m = qW;
  else if (h === "BarChart") y = yK(f, o, c, l), m = Sp;
  else if (f === "radial") {
    var p = YO(o), _ = p.cx, g = p.cy, w = p.radius, S = p.startAngle, v = p.endAngle;
    y = { cx: _, cy: g, startAngle: S, endAngle: v, innerRadius: w, outerRadius: w }, m = VS;
  } else y = { points: mK(f, o, c) }, m = Wn;
  var b = Ss(Ss(Ss(Ss({ stroke: "#ccc", pointerEvents: "none" }, c), y), ct(d, false)), {}, { payload: s, payloadIndex: u, className: mt("recharts-tooltip-cursor", d.className) });
  return B.isValidElement(d) ? B.cloneElement(d, b) : B.createElement(m, b);
}
var wK = ["item"], SK = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ua(e7) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e7);
}
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ai.apply(this, arguments);
}
function ib(e7, t) {
  return AK(e7) || xK(e7, t) || JO(e7, t) || OK();
}
function OK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xK(e7, t) {
  var r = e7 == null ? null : typeof Symbol < "u" && e7[Symbol.iterator] || e7["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e7)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
    } catch (l) {
      u = true, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function AK(e7) {
  if (Array.isArray(e7)) return e7;
}
function ab(e7, t) {
  if (e7 == null) return {};
  var r = PK(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function PK(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function TK(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function IK(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, QO(n.key), n);
  }
}
function EK(e7, t, r) {
  return t && IK(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function $K(e7, t, r) {
  return t = vu(t), MK(e7, XO() ? Reflect.construct(t, r || [], vu(e7).constructor) : t.apply(e7, r));
}
function MK(e7, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return DK(e7);
}
function DK(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function XO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XO = function() {
    return !!e7;
  })();
}
function vu(e7) {
  return vu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vu(e7);
}
function NK(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Gh(e7, t);
}
function Gh(e7, t) {
  return Gh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gh(e7, t);
}
function la(e7) {
  return BK(e7) || jK(e7) || JO(e7) || CK();
}
function CK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JO(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Hh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hh(e7, t);
  }
}
function jK(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function BK(e7) {
  if (Array.isArray(e7)) return Hh(e7);
}
function Hh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function ob(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ob(Object(r), true).forEach(function(n) {
      J(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : ob(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function J(e7, t, r) {
  return t = QO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function QO(e7) {
  var t = RK(e7, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function RK(e7, t) {
  if (ua(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var kK = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, LK = { width: "100%", height: "100%" }, ZO = { x: 0, y: 0 };
function Os(e7) {
  return e7;
}
var FK = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, UK = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal") return { x: a.coordinate, y: i.y };
    if (t === "vertical") return { x: i.x, y: a.coordinate };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return D(D(D({}, i), le(i.cx, i.cy, s, o)), {}, { angle: o, radius: s });
    }
    var c = a.coordinate, u = i.angle;
    return D(D(D({}, i), le(i.cx, i.cy, c, u)), {}, { angle: u, radius: c });
  }
  return ZO;
}, fl = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(la(s), la(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function t1(e7) {
  return e7 === "number" ? [0, "auto"] : void 0;
}
var Kh = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = fl(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = f === void 0 ? s : f;
      h = yc(d, o.dataKey, i);
    } else h = f && f[n] || s[n];
    return h ? [].concat(la(c), [US(u, h)]) : c;
  }, []);
}, sb = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = FK(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = O6(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, h = Kh(t, r, l, f), d = UK(n, s, l, a);
    return { activeTooltipIndex: l, activeLabel: f, activePayload: h, activeCoordinate: d };
  }
  return null;
}, zK = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = t.stackOffset, d = kS(l, a);
  return n.reduce(function(y, m) {
    var p, _ = m.type.defaultProps !== void 0 ? D(D({}, m.type.defaultProps), m.props) : m.props, g = _.type, w = _.dataKey, S = _.allowDataOverflow, v = _.allowDuplicatedCategory, b = _.scale, O = _.ticks, P = _.includeHidden, T = _[o];
    if (y[T]) return y;
    var $ = fl(t.data, { graphicalItems: i.filter(function(W) {
      var it, Rt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o];
      return Rt === T;
    }), dataStartIndex: c, dataEndIndex: u }), E = $.length, I, j, N;
    pK(_.domain, S, g) && (I = sh(_.domain, null, S), d && (g === "number" || b !== "auto") && (N = Qa($, w, "category")));
    var M = t1(g);
    if (!I || I.length === 0) {
      var C, R = (C = _.domain) !== null && C !== void 0 ? C : M;
      if (w) {
        if (I = Qa($, w, g), g === "category" && d) {
          var F = l$(I);
          v && F ? (j = I, I = eu(0, E)) : v || (I = kv(R, I, m).reduce(function(W, it) {
            return W.indexOf(it) >= 0 ? W : [].concat(la(W), [it]);
          }, []));
        } else if (g === "category") v ? I = I.filter(function(W) {
          return W !== "" && !st(W);
        }) : I = kv(R, I, m).reduce(function(W, it) {
          return W.indexOf(it) >= 0 || it === "" || st(it) ? W : [].concat(la(W), [it]);
        }, []);
        else if (g === "number") {
          var U = I6($, i.filter(function(W) {
            var it, Rt, Yt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o], Me = "hide" in W.props ? W.props.hide : (Rt = W.type.defaultProps) === null || Rt === void 0 ? void 0 : Rt.hide;
            return Yt === T && (P || !Me);
          }), w, a, l);
          U && (I = U);
        }
        d && (g === "number" || b !== "auto") && (N = Qa($, w, "category"));
      } else d ? I = eu(0, E) : s && s[T] && s[T].hasStack && g === "number" ? I = h === "expand" ? [0, 1] : FS(s[T].stackGroups, c, u) : I = RS($, i.filter(function(W) {
        var it = o in W.props ? W.props[o] : W.type.defaultProps[o], Rt = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return it === T && (P || !Rt);
      }), g, l, true);
      if (g === "number") I = qh(f, I, T, a, O), R && (I = sh(R, I, S));
      else if (g === "category" && R) {
        var q = R, rt = I.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        rt && (I = q);
      }
    }
    return D(D({}, y), {}, J({}, T, D(D({}, _), {}, { axisType: a, domain: I, categoricalDomain: N, duplicateDomain: j, originalDomain: (p = _.domain) !== null && p !== void 0 ? p : M, isCategorical: d, layout: l })));
  }, {});
}, WK = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = fl(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: u }), d = h.length, y = kS(l, a), m = -1;
  return n.reduce(function(p, _) {
    var g = _.type.defaultProps !== void 0 ? D(D({}, _.type.defaultProps), _.props) : _.props, w = g[o], S = t1("number");
    if (!p[w]) {
      m++;
      var v;
      return y ? v = eu(0, d) : s && s[w] && s[w].hasStack ? (v = FS(s[w].stackGroups, c, u), v = qh(f, v, w, a)) : (v = sh(S, RS(h, n.filter(function(b) {
        var O, P, T = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], $ = "hide" in b.props ? b.props.hide : (P = b.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return T === w && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), v = qh(f, v, w, a)), D(D({}, p), {}, J({}, w, D(D({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ye(kK, "".concat(a, ".").concat(m % 2), null), domain: v, originalDomain: S, isCategorical: y, layout: l })));
    }
    return p;
  }, {});
}, VK = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), h = Te(l, a), d = {};
  return h && h.length ? d = zK(t, { axes: h, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u }) : o && o.length && (d = WK(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u })), d;
}, qK = function(t) {
  var r = cn(t), n = Lr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: Kd(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: qc(r, n) };
}, cb = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = je(r, Ji), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, GK = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = Ur(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, ub = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, HK = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, h = n.margin || {}, d = je(f, Ji), y = je(f, hn), m = Object.keys(c).reduce(function(v, b) {
    var O = c[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, J({}, P, v[P] + O.width)) : v;
  }, { left: h.left || 0, right: h.right || 0 }), p = Object.keys(o).reduce(function(v, b) {
    var O = o[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, J({}, P, Ye(v, "".concat(P)) + O.height)) : v;
  }, { top: h.top || 0, bottom: h.bottom || 0 }), _ = D(D({}, p), m), g = _.bottom;
  d && (_.bottom += d.props.height || Ji.defaultProps.height), y && r && (_ = P6(_, i, n, r));
  var w = u - _.left - _.right, S = l - _.top - _.bottom;
  return D(D({ brushBottom: g }, _), {}, { width: Math.max(w, 0), height: Math.max(S, 0) });
}, KK = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, YK = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, h = function(_, g) {
    var w = g.graphicalItems, S = g.stackGroups, v = g.offset, b = g.updateId, O = g.dataStartIndex, P = g.dataEndIndex, T = _.barSize, $ = _.layout, E = _.barGap, I = _.barCategoryGap, j = _.maxBarSize, N = ub($), M = N.numericAxisName, C = N.cateAxisName, R = GK(w), F = [];
    return w.forEach(function(U, q) {
      var rt = fl(_.data, { graphicalItems: [U], dataStartIndex: O, dataEndIndex: P }), W = U.type.defaultProps !== void 0 ? D(D({}, U.type.defaultProps), U.props) : U.props, it = W.dataKey, Rt = W.maxBarSize, Yt = W["".concat(M, "Id")], Me = W["".concat(C, "Id")], Pn = {}, we = c.reduce(function(Tn, In) {
        var hl = g["".concat(In.axisType, "Map")], Dp = W["".concat(In.axisType, "Id")];
        hl && hl[Dp] || In.axisType === "zAxis" || Jn();
        var Np = hl[Dp];
        return D(D({}, Tn), {}, J(J({}, In.axisType, Np), "".concat(In.axisType, "Ticks"), Lr(Np)));
      }, Pn), z = we[C], ft = we["".concat(C, "Ticks")], ht = S && S[Yt] && S[Yt].hasStack && F6(U, S[Yt].stackGroups), k = Ur(U.type).indexOf("Bar") >= 0, Vt = qc(z, ft), bt = [], Qt = R && x6({ barSize: T, stackGroups: S, totalSize: KK(we, C) });
      if (k) {
        var Zt, Se, tn = st(Rt) ? j : Rt, ai = (Zt = (Se = qc(z, ft, true)) !== null && Se !== void 0 ? Se : tn) !== null && Zt !== void 0 ? Zt : 0;
        bt = A6({ barGap: E, barCategoryGap: I, bandSize: ai !== Vt ? ai : Vt, sizeList: Qt[Me], maxBarSize: tn }), ai !== Vt && (bt = bt.map(function(Tn) {
          return D(D({}, Tn), {}, { position: D(D({}, Tn.position), {}, { offset: Tn.position.offset - ai / 2 }) });
        }));
      }
      var as = U && U.type && U.type.getComposedData;
      as && F.push({ props: D(D({}, as(D(D({}, we), {}, { displayedData: rt, props: _, dataKey: it, item: U, bandSize: Vt, barPosition: bt, offset: v, stackedData: ht, layout: $, dataStartIndex: O, dataEndIndex: P }))), {}, J(J(J({ key: U.key || "item-".concat(q) }, M, we[M]), C, we[C]), "animationId", b)), childIndex: O$(U, _.children), item: U });
    }), F;
  }, d = function(_, g) {
    var w = _.props, S = _.dataStartIndex, v = _.dataEndIndex, b = _.updateId;
    if (!My({ props: w })) return null;
    var O = w.children, P = w.layout, T = w.stackOffset, $ = w.data, E = w.reverseStackOrder, I = ub(P), j = I.numericAxisName, N = I.cateAxisName, M = Te(O, n), C = R6($, M, "".concat(j, "Id"), "".concat(N, "Id"), T, E), R = c.reduce(function(W, it) {
      var Rt = "".concat(it.axisType, "Map");
      return D(D({}, W), {}, J({}, Rt, VK(w, D(D({}, it), {}, { graphicalItems: M, stackGroups: it.axisType === j && C, dataStartIndex: S, dataEndIndex: v }))));
    }, {}), F = HK(D(D({}, R), {}, { props: w, graphicalItems: M }), g == null ? void 0 : g.legendBBox);
    Object.keys(R).forEach(function(W) {
      R[W] = l(w, R[W], F, W.replace("Map", ""), r);
    });
    var U = R["".concat(N, "Map")], q = qK(U), rt = h(w, D(D({}, R), {}, { dataStartIndex: S, dataEndIndex: v, updateId: b, graphicalItems: M, stackGroups: C, offset: F }));
    return D(D({ formattedGraphicalItems: rt, graphicalItems: M, offset: F, stackGroups: C }, q), R);
  }, y = function(p) {
    function _(g) {
      var w, S, v;
      return TK(this, _), v = $K(this, _, [g]), J(v, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), J(v, "accessibilityManager", new dK()), J(v, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = v.state, P = O.dataStartIndex, T = O.dataEndIndex, $ = O.updateId;
          v.setState(D({ legendBBox: b }, d({ props: v.props, dataStartIndex: P, dataEndIndex: T, updateId: $ }, D(D({}, v.state), {}, { legendBBox: b }))));
        }
      }), J(v, "handleReceiveSyncEvent", function(b, O, P) {
        if (v.props.syncId === b) {
          if (P === v.eventEmitterSymbol && typeof v.props.syncMethod != "function") return;
          v.applySyncEvent(O);
        }
      }), J(v, "handleBrushChange", function(b) {
        var O = b.startIndex, P = b.endIndex;
        if (O !== v.state.dataStartIndex || P !== v.state.dataEndIndex) {
          var T = v.state.updateId;
          v.setState(function() {
            return D({ dataStartIndex: O, dataEndIndex: P }, d({ props: v.props, dataStartIndex: O, dataEndIndex: P, updateId: T }, v.state));
          }), v.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: P });
        }
      }), J(v, "handleMouseEnter", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onMouseEnter;
          lt(T) && T(P, b);
        }
      }), J(v, "triggeredAfterMouseMove", function(b) {
        var O = v.getMouseInfo(b), P = O ? D(D({}, O), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        v.setState(P), v.triggerSyncEvent(P);
        var T = v.props.onMouseMove;
        lt(T) && T(P, b);
      }), J(v, "handleItemMouseEnter", function(b) {
        v.setState(function() {
          return { isTooltipActive: true, activeItem: b, activePayload: b.tooltipPayload, activeCoordinate: b.tooltipPosition || { x: b.cx, y: b.cy } };
        });
      }), J(v, "handleItemMouseLeave", function() {
        v.setState(function() {
          return { isTooltipActive: false };
        });
      }), J(v, "handleMouseMove", function(b) {
        b.persist(), v.throttleTriggeredAfterMouseMove(b);
      }), J(v, "handleMouseLeave", function(b) {
        v.throttleTriggeredAfterMouseMove.cancel();
        var O = { isTooltipActive: false };
        v.setState(O), v.triggerSyncEvent(O);
        var P = v.props.onMouseLeave;
        lt(P) && P(O, b);
      }), J(v, "handleOuterEvent", function(b) {
        var O = S$(b), P = Ye(v.props, "".concat(O));
        if (O && lt(P)) {
          var T, $;
          /.*touch.*/i.test(O) ? $ = v.getMouseInfo(b.changedTouches[0]) : $ = v.getMouseInfo(b), P((T = $) !== null && T !== void 0 ? T : {}, b);
        }
      }), J(v, "handleClick", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onClick;
          lt(T) && T(P, b);
        }
      }), J(v, "handleMouseDown", function(b) {
        var O = v.props.onMouseDown;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "handleMouseUp", function(b) {
        var O = v.props.onMouseUp;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), J(v, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.handleMouseDown(b.changedTouches[0]);
      }), J(v, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.handleMouseUp(b.changedTouches[0]);
      }), J(v, "handleDoubleClick", function(b) {
        var O = v.props.onDoubleClick;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "handleContextMenu", function(b) {
        var O = v.props.onContextMenu;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "triggerSyncEvent", function(b) {
        v.props.syncId !== void 0 && Zl.emit(tf, v.props.syncId, b, v.eventEmitterSymbol);
      }), J(v, "applySyncEvent", function(b) {
        var O = v.props, P = O.layout, T = O.syncMethod, $ = v.state.updateId, E = b.dataStartIndex, I = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0) v.setState(D({ dataStartIndex: E, dataEndIndex: I }, d({ props: v.props, dataStartIndex: E, dataEndIndex: I, updateId: $ }, v.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var j = b.chartX, N = b.chartY, M = b.activeTooltipIndex, C = v.state, R = C.offset, F = C.tooltipTicks;
          if (!R) return;
          if (typeof T == "function") M = T(F, b);
          else if (T === "value") {
            M = -1;
            for (var U = 0; U < F.length; U++) if (F[U].value === b.activeLabel) {
              M = U;
              break;
            }
          }
          var q = D(D({}, R), {}, { x: R.left, y: R.top }), rt = Math.min(j, q.x + q.width), W = Math.min(N, q.y + q.height), it = F[M] && F[M].value, Rt = Kh(v.state, v.props.data, M), Yt = F[M] ? { x: P === "horizontal" ? F[M].coordinate : rt, y: P === "horizontal" ? W : F[M].coordinate } : ZO;
          v.setState(D(D({}, b), {}, { activeLabel: it, activeCoordinate: Yt, activePayload: Rt, activeTooltipIndex: M }));
        } else v.setState(b);
      }), J(v, "renderCursor", function(b) {
        var O, P = v.state, T = P.isTooltipActive, $ = P.activeCoordinate, E = P.activePayload, I = P.offset, j = P.activeTooltipIndex, N = P.tooltipAxisBandSize, M = v.getTooltipEventType(), C = (O = b.props.active) !== null && O !== void 0 ? O : T, R = v.props.layout, F = b.key || "_recharts-cursor";
        return A.createElement(_K, { key: F, activeCoordinate: $, activePayload: E, activeTooltipIndex: j, chartName: r, element: b, isActive: C, layout: R, offset: I, tooltipAxisBandSize: N, tooltipEventType: M });
      }), J(v, "renderPolarAxis", function(b, O, P) {
        var T = Ye(b, "type.axisType"), $ = Ye(v.state, "".concat(T, "Map")), E = b.type.defaultProps, I = E !== void 0 ? D(D({}, E), b.props) : b.props, j = $ && $[I["".concat(T, "Id")]];
        return B.cloneElement(b, D(D({}, j), {}, { className: mt(T, j.className), key: b.key || "".concat(O, "-").concat(P), ticks: Lr(j, true) }));
      }), J(v, "renderPolarGrid", function(b) {
        var O = b.props, P = O.radialLines, T = O.polarAngles, $ = O.polarRadius, E = v.state, I = E.radiusAxisMap, j = E.angleAxisMap, N = cn(I), M = cn(j), C = M.cx, R = M.cy, F = M.innerRadius, U = M.outerRadius;
        return B.cloneElement(b, { polarAngles: Array.isArray(T) ? T : Lr(M, true).map(function(q) {
          return q.coordinate;
        }), polarRadius: Array.isArray($) ? $ : Lr(N, true).map(function(q) {
          return q.coordinate;
        }), cx: C, cy: R, innerRadius: F, outerRadius: U, key: b.key || "polar-grid", radialLines: P });
      }), J(v, "renderLegend", function() {
        var b = v.state.formattedGraphicalItems, O = v.props, P = O.children, T = O.width, $ = O.height, E = v.props.margin || {}, I = T - (E.left || 0) - (E.right || 0), j = jS({ children: P, formattedGraphicalItems: b, legendWidth: I, legendContent: u });
        if (!j) return null;
        var N = j.item, M = ab(j, wK);
        return B.cloneElement(N, D(D({}, M), {}, { chartWidth: T, chartHeight: $, margin: E, onBBoxUpdate: v.handleLegendBBoxUpdate }));
      }), J(v, "renderTooltip", function() {
        var b, O = v.props, P = O.children, T = O.accessibilityLayer, $ = je(P, nr);
        if (!$) return null;
        var E = v.state, I = E.isTooltipActive, j = E.activeCoordinate, N = E.activePayload, M = E.activeLabel, C = E.offset, R = (b = $.props.active) !== null && b !== void 0 ? b : I;
        return B.cloneElement($, { viewBox: D(D({}, C), {}, { x: C.left, y: C.top }), active: R, label: M, payload: R ? N : [], coordinate: j, accessibilityLayer: T });
      }), J(v, "renderBrush", function(b) {
        var O = v.props, P = O.margin, T = O.data, $ = v.state, E = $.offset, I = $.dataStartIndex, j = $.dataEndIndex, N = $.updateId;
        return B.cloneElement(b, { key: b.key || "_recharts-brush", onChange: gs(v.handleBrushChange, b.props.onChange), data: T, x: L(b.props.x) ? b.props.x : E.left, y: L(b.props.y) ? b.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0), width: L(b.props.width) ? b.props.width : E.width, startIndex: I, endIndex: j, updateId: "brush-".concat(N) });
      }), J(v, "renderReferenceElement", function(b, O, P) {
        if (!b) return null;
        var T = v, $ = T.clipPathId, E = v.state, I = E.xAxisMap, j = E.yAxisMap, N = E.offset, M = b.type.defaultProps || {}, C = b.props, R = C.xAxisId, F = R === void 0 ? M.xAxisId : R, U = C.yAxisId, q = U === void 0 ? M.yAxisId : U;
        return B.cloneElement(b, { key: b.key || "".concat(O, "-").concat(P), xAxis: I[F], yAxis: j[q], viewBox: { x: N.left, y: N.top, width: N.width, height: N.height }, clipPathId: $ });
      }), J(v, "renderActivePoints", function(b) {
        var O = b.item, P = b.activePoint, T = b.basePoint, $ = b.childIndex, E = b.isRange, I = [], j = O.props.key, N = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = N.activeDot, C = N.dataKey, R = D(D({ index: $, dataKey: C, cx: P.x, cy: P.y, r: 4, fill: wp(O.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ct(M, false)), mc(M));
        return I.push(_.renderActiveDot(M, R, "".concat(j, "-activePoint-").concat($))), T ? I.push(_.renderActiveDot(M, D(D({}, R), {}, { cx: T.x, cy: T.y }), "".concat(j, "-basePoint-").concat($))) : E && I.push(null), I;
      }), J(v, "renderGraphicChild", function(b, O, P) {
        var T = v.filterFormatItem(b, O, P);
        if (!T) return null;
        var $ = v.getTooltipEventType(), E = v.state, I = E.isTooltipActive, j = E.tooltipAxis, N = E.activeTooltipIndex, M = E.activeLabel, C = v.props.children, R = je(C, nr), F = T.props, U = F.points, q = F.isRange, rt = F.baseLine, W = T.item.type.defaultProps !== void 0 ? D(D({}, T.item.type.defaultProps), T.item.props) : T.item.props, it = W.activeDot, Rt = W.hide, Yt = W.activeBar, Me = W.activeShape, Pn = !!(!Rt && I && R && (it || Yt || Me)), we = {};
        $ !== "axis" && R && R.props.trigger === "click" ? we = { onClick: gs(v.handleItemMouseEnter, b.props.onClick) } : $ !== "axis" && (we = { onMouseLeave: gs(v.handleItemMouseLeave, b.props.onMouseLeave), onMouseEnter: gs(v.handleItemMouseEnter, b.props.onMouseEnter) });
        var z = B.cloneElement(b, D(D({}, T.props), we));
        function ft(In) {
          return typeof j.dataKey == "function" ? j.dataKey(In.payload) : null;
        }
        if (Pn) if (N >= 0) {
          var ht, k;
          if (j.dataKey && !j.allowDuplicatedCategory) {
            var Vt = typeof j.dataKey == "function" ? ft : "payload.".concat(j.dataKey.toString());
            ht = yc(U, Vt, M), k = q && rt && yc(rt, Vt, M);
          } else ht = U == null ? void 0 : U[N], k = q && rt && rt[N];
          if (Me || Yt) {
            var bt = b.props.activeIndex !== void 0 ? b.props.activeIndex : N;
            return [B.cloneElement(b, D(D(D({}, T.props), we), {}, { activeIndex: bt })), null, null];
          }
          if (!st(ht)) return [z].concat(la(v.renderActivePoints({ item: T, activePoint: ht, basePoint: k, childIndex: N, isRange: q })));
        } else {
          var Qt, Zt = (Qt = v.getItemByXY(v.state.activeCoordinate)) !== null && Qt !== void 0 ? Qt : { graphicalItem: z }, Se = Zt.graphicalItem, tn = Se.item, ai = tn === void 0 ? b : tn, as = Se.childIndex, Tn = D(D(D({}, T.props), we), {}, { activeIndex: as });
          return [B.cloneElement(ai, Tn), null, null];
        }
        return q ? [z, null, null] : [z, null];
      }), J(v, "renderCustomized", function(b, O, P) {
        return B.cloneElement(b, D(D({ key: "recharts-customized-".concat(P) }, v.props), v.state));
      }), J(v, "renderMap", { CartesianGrid: { handler: Os, once: true }, ReferenceArea: { handler: v.renderReferenceElement }, ReferenceLine: { handler: Os }, ReferenceDot: { handler: v.renderReferenceElement }, XAxis: { handler: Os }, YAxis: { handler: Os }, Brush: { handler: v.renderBrush, once: true }, Bar: { handler: v.renderGraphicChild }, Line: { handler: v.renderGraphicChild }, Area: { handler: v.renderGraphicChild }, Radar: { handler: v.renderGraphicChild }, RadialBar: { handler: v.renderGraphicChild }, Scatter: { handler: v.renderGraphicChild }, Pie: { handler: v.renderGraphicChild }, Funnel: { handler: v.renderGraphicChild }, Tooltip: { handler: v.renderCursor, once: true }, PolarGrid: { handler: v.renderPolarGrid, once: true }, PolarAngleAxis: { handler: v.renderPolarAxis }, PolarRadiusAxis: { handler: v.renderPolarAxis }, Customized: { handler: v.renderCustomized } }), v.clipPathId = "".concat((w = g.id) !== null && w !== void 0 ? w : ei("recharts"), "-clip"), v.throttleTriggeredAfterMouseMove = Bw(v.triggeredAfterMouseMove, (S = g.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), v.state = {}, v;
    }
    return NK(_, p), EK(_, [{ key: "componentDidMount", value: function() {
      var w, S;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var w = this.props, S = w.children, v = w.data, b = w.height, O = w.layout, P = je(S, nr);
      if (P) {
        var T = P.props.defaultIndex;
        if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
          var $ = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, E = Kh(this.state, v, T, $), I = this.state.tooltipTicks[T].coordinate, j = (this.state.offset.top + b) / 2, N = O === "horizontal", M = N ? { x: I, y: j } : { y: I, x: j }, C = this.state.formattedGraphicalItems.find(function(F) {
            var U = F.item;
            return U.type.name === "Scatter";
          });
          C && (M = D(D({}, M), C.props.points[T].tooltipPosition), E = C.props.points[T].tooltipPayload);
          var R = { activeTooltipIndex: T, isTooltipActive: true, activeLabel: $, activePayload: E, activeCoordinate: M };
          this.setState(R), this.renderCursor(P), this.accessibilityManager.setIndex(T);
        }
      }
    } }, { key: "getSnapshotBeforeUpdate", value: function(w, S) {
      if (!this.props.accessibilityLayer) return null;
      if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== w.margin) {
        var v, b;
        this.accessibilityManager.setDetails({ offset: { left: (v = this.props.margin.left) !== null && v !== void 0 ? v : 0, top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0 } });
      }
      return null;
    } }, { key: "componentDidUpdate", value: function(w) {
      Sf([je(w.children, nr)], [je(this.props.children, nr)]) || this.displayDefaultTooltip();
    } }, { key: "componentWillUnmount", value: function() {
      this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
    } }, { key: "getTooltipEventType", value: function() {
      var w = je(this.props.children, nr);
      if (w && typeof w.props.shared == "boolean") {
        var S = w.props.shared ? "axis" : "item";
        return s.indexOf(S) >= 0 ? S : a;
      }
      return a;
    } }, { key: "getMouseInfo", value: function(w) {
      if (!this.container) return null;
      var S = this.container, v = S.getBoundingClientRect(), b = YL(v), O = { chartX: Math.round(w.pageX - b.left), chartY: Math.round(w.pageY - b.top) }, P = v.width / S.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, P);
      if (!T) return null;
      var $ = this.state, E = $.xAxisMap, I = $.yAxisMap, j = this.getTooltipEventType(), N = sb(this.state, this.props.data, this.props.layout, T);
      if (j !== "axis" && E && I) {
        var M = cn(E).scale, C = cn(I).scale, R = M && M.invert ? M.invert(O.chartX) : null, F = C && C.invert ? C.invert(O.chartY) : null;
        return D(D({}, O), {}, { xValue: R, yValue: F }, N);
      }
      return N ? D(D({}, O), N) : null;
    } }, { key: "inRange", value: function(w, S) {
      var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = w / v, P = S / v;
      if (b === "horizontal" || b === "vertical") {
        var T = this.state.offset, $ = O >= T.left && O <= T.left + T.width && P >= T.top && P <= T.top + T.height;
        return $ ? { x: O, y: P } : null;
      }
      var E = this.state, I = E.angleAxisMap, j = E.radiusAxisMap;
      if (I && j) {
        var N = cn(I);
        return Uv({ x: O, y: P }, N);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var w = this.props.children, S = this.getTooltipEventType(), v = je(w, nr), b = {};
      v && S === "axis" && (v.props.trigger === "click" ? b = { onClick: this.handleClick } : b = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = mc(this.props, this.handleOuterEvent);
      return D(D({}, O), b);
    } }, { key: "addListener", value: function() {
      Zl.on(tf, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      Zl.removeListener(tf, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(w, S, v) {
      for (var b = this.state.formattedGraphicalItems, O = 0, P = b.length; O < P; O++) {
        var T = b[O];
        if (T.item === w || T.props.key === w.key || S === Ur(T.item.type) && v === T.childIndex) return T;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var w = this.clipPathId, S = this.state.offset, v = S.left, b = S.top, O = S.height, P = S.width;
      return A.createElement("defs", null, A.createElement("clipPath", { id: w }, A.createElement("rect", { x: v, y: b, height: O, width: P })));
    } }, { key: "getXScales", value: function() {
      var w = this.state.xAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = ib(v, 2), O = b[0], P = b[1];
        return D(D({}, S), {}, J({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var w = this.state.yAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = ib(v, 2), O = b[0], P = b[1];
        return D(D({}, S), {}, J({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getXScaleByAxisId", value: function(w) {
      var S;
      return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
    } }, { key: "getYScaleByAxisId", value: function(w) {
      var S;
      return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
    } }, { key: "getItemByXY", value: function(w) {
      var S = this.state, v = S.formattedGraphicalItems, b = S.activeItem;
      if (v && v.length) for (var O = 0, P = v.length; O < P; O++) {
        var T = v[O], $ = T.props, E = T.item, I = E.type.defaultProps !== void 0 ? D(D({}, E.type.defaultProps), E.props) : E.props, j = Ur(E.type);
        if (j === "Bar") {
          var N = ($.data || []).find(function(F) {
            return jW(w, F);
          });
          if (N) return { graphicalItem: T, payload: N };
        } else if (j === "RadialBar") {
          var M = ($.data || []).find(function(F) {
            return Uv(w, F);
          });
          if (M) return { graphicalItem: T, payload: M };
        } else if (rl(T, b) || nl(T, b) || Lo(T, b)) {
          var C = R5({ graphicalItem: T, activeTooltipItem: b, itemData: I.data }), R = I.activeIndex === void 0 ? C : I.activeIndex;
          return { graphicalItem: D(D({}, T), {}, { childIndex: R }), payload: Lo(T, b) ? I.data[C] : T.props.data[C] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var w = this;
      if (!My(this)) return null;
      var S = this.props, v = S.children, b = S.className, O = S.width, P = S.height, T = S.style, $ = S.compact, E = S.title, I = S.desc, j = ab(S, SK), N = ct(j, false);
      if ($) return A.createElement(Bg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement(xf, Ai({}, N, { width: O, height: P, title: E, desc: I }), this.renderClipPath(), Ny(v, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var M, C;
        N.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, N.role = (C = this.props.role) !== null && C !== void 0 ? C : "application", N.onKeyDown = function(F) {
          w.accessibilityManager.keyboardEvent(F);
        }, N.onFocus = function() {
          w.accessibilityManager.focus();
        };
      }
      var R = this.parseEventsOfWrapper();
      return A.createElement(Bg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement("div", Ai({ className: mt("recharts-wrapper", b), style: D({ position: "relative", cursor: "default", width: O, height: P }, T) }, R, { ref: function(U) {
        w.container = U;
      } }), A.createElement(xf, Ai({}, N, { width: O, height: P, title: E, desc: I, style: LK }), this.renderClipPath(), Ny(v, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(B.Component);
  J(y, "displayName", r), J(y, "defaultProps", D({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, f)), J(y, "getDerivedStateFromProps", function(p, _) {
    var g = p.dataKey, w = p.data, S = p.children, v = p.width, b = p.height, O = p.layout, P = p.stackOffset, T = p.margin, $ = _.dataStartIndex, E = _.dataEndIndex;
    if (_.updateId === void 0) {
      var I = cb(p);
      return D(D(D({}, I), {}, { updateId: 0 }, d(D(D({ props: p }, I), {}, { updateId: 0 }), _)), {}, { prevDataKey: g, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (g !== _.prevDataKey || w !== _.prevData || v !== _.prevWidth || b !== _.prevHeight || O !== _.prevLayout || P !== _.prevStackOffset || !$i(T, _.prevMargin)) {
      var j = cb(p), N = { chartX: _.chartX, chartY: _.chartY, isTooltipActive: _.isTooltipActive }, M = D(D({}, sb(_, w, O)), {}, { updateId: _.updateId + 1 }), C = D(D(D({}, j), N), M);
      return D(D(D({}, C), d(D({ props: p }, C), _)), {}, { prevDataKey: g, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (!Sf(S, _.prevChildren)) {
      var R, F, U, q, rt = je(S, Ji), W = rt && (R = (F = rt.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && R !== void 0 ? R : $, it = rt && (U = (q = rt.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && U !== void 0 ? U : E, Rt = W !== $ || it !== E, Yt = !st(w), Me = Yt && !Rt ? _.updateId : _.updateId + 1;
      return D(D({ updateId: Me }, d(D(D({ props: p }, _), {}, { updateId: Me, dataStartIndex: W, dataEndIndex: it }), _)), {}, { prevChildren: S, dataStartIndex: W, dataEndIndex: it });
    }
    return null;
  }), J(y, "renderActiveDot", function(p, _, g) {
    var w;
    return B.isValidElement(p) ? w = B.cloneElement(p, _) : lt(p) ? w = p(_) : w = A.createElement(el, _), A.createElement(St, { className: "recharts-active-dot", key: g }, w);
  });
  var m = B.forwardRef(function(_, g) {
    return A.createElement(y, Ai({}, _, { ref: g }));
  });
  return m.displayName = y.displayName, m;
}, lb = YK({ chartName: "ComposedChart", GraphicalChild: [Vn, Hr, Pa, ll], axisComponents: [{ axisType: "xAxis", AxisComp: Vo }, { axisType: "yAxis", AxisComp: Ni }, { axisType: "zAxis", AxisComp: ul }], formatAxisMap: cq });
const Gt = { grid: "#d0d7de", axis: "#57606a", legendText: "#1f2328", bandP75: "#dbeafe", bandP75Stroke: "#388bfd", bandP25: "#eff6ff", bandP25Stroke: "#54aeff", medianLine: "#0969da", volumeLine: "#bf8700", tooltip: { background: "#ffffff", border: "#d0d7de", text: "#1f2328" }, colors: ["#0969da", "#8250df", "#1a7f37", "#cf222e", "#bf8700", "#57606a"], otherSeries: "#57606a" }, La = { fill: Gt.axis, fontSize: 11 }, fb = { shared: false, contentStyle: { background: Gt.tooltip.background, border: `1px solid ${Gt.tooltip.border}`, borderRadius: "0.35rem", color: Gt.tooltip.text }, labelStyle: { color: Gt.tooltip.text } }, hb = { top: 8, right: 12, left: 4, bottom: 8 }, db = { verticalAlign: "bottom", align: "center", layout: "horizontal", wrapperStyle: { color: Gt.legendText, width: "100%", left: 0, paddingTop: "10px" } }, XK = ["day", "week", "month", "quarter", "year"], JK = [];
function xY({ mode: e7, methodId: t, methodName: r, topMethods: n = JK, topN: i = 10 }) {
  const [a, o] = B.useState("week"), [s, c] = B.useState([]), [u, l] = B.useState([]), [f, h] = B.useState(false), [d, y] = B.useState(false);
  B.useEffect(() => {
    let g = false;
    async function w() {
      y(true);
      try {
        if (e7 === "single" && t) {
          const S = await PP(t, a);
          g || c(S);
        } else if (e7 === "topN") {
          const S = n.slice(0, i).map((b) => b.method_id), v = await TP(S, a);
          g || l(v);
        }
      } finally {
        g || y(false);
      }
    }
    return w(), () => {
      g = true;
    };
  }, [e7, t, a, i, e7 === "topN" ? n : null]);
  const m = B.useMemo(() => s.map((g) => ({ ...g, period: pn(g.period) })), [s]), p = B.useMemo(() => {
    const g = /* @__PURE__ */ new Map();
    for (const w of u) {
      const S = pn(w.period), v = g.get(S) ?? { period: S };
      v[w.method_name] = w.profit, g.set(S, v);
    }
    return [...g.values()].sort((w, S) => s1(String(w.period), String(S.period)));
  }, [u]), _ = B.useMemo(() => [...new Set(u.map((g) => g.method_name))], [u]);
  return ut.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends", children: [ut.jsxs("div", { className: "osrs-mmg__trends-header", children: [ut.jsx("h3", { children: e7 === "single" ? `Trends \xB7 ${r ?? "Method"}` : "Top methods over time" }), ut.jsxs("div", { className: "osrs-mmg__period-row", children: [XK.map((g) => ut.jsx("button", { type: "button", className: g === a ? "is-active" : "", onClick: () => o(g), children: g }, g)), e7 === "single" ? ut.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [ut.jsx("input", { type: "checkbox", checked: f, onChange: (g) => h(g.target.checked) }), "Item volume"] }) : null] })] }), d ? ut.jsx("p", { className: "osrs-mmg__muted", children: "Loading chart\u2026" }) : null, e7 === "single" && m.length > 0 ? ut.jsx("div", { className: "osrs-mmg__chart", children: ut.jsx($m, { width: "100%", height: 340, children: ut.jsxs(lb, { data: m, margin: hb, children: [ut.jsx(Ch, { strokeDasharray: "3 3", stroke: Gt.grid }), ut.jsx(Vo, { dataKey: "period", tick: La, stroke: Gt.axis, ...Fp(a) }), ut.jsx(Ni, { yAxisId: "profit", tick: La, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), f ? ut.jsx(Ni, { yAxisId: "volume", orientation: "right", tick: La, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }) : null, ut.jsx(nr, { formatter: (g) => my(g), labelFormatter: (g) => Lp(String(g), a), ...fb }), ut.jsx(hn, { ...db }), ut.jsx(Hr, { yAxisId: "profit", dataKey: "p75", stackId: "band", fill: Gt.bandP75, stroke: Gt.bandP75Stroke, legendType: "line", name: "75th percentile" }), ut.jsx(Hr, { yAxisId: "profit", dataKey: "p25", stackId: "band", fill: Gt.bandP25, stroke: Gt.bandP25Stroke, legendType: "line", name: "25th percentile" }), ut.jsx(Vn, { yAxisId: "profit", type: "monotone", dataKey: "median_profit", stroke: Gt.medianLine, name: "Median GP/h" }), f ? ut.jsx(Vn, { yAxisId: "volume", type: "monotone", dataKey: "item_volume", stroke: Gt.volumeLine, name: "GE volume" }) : null] }) }) }) : null, e7 === "topN" && p.length > 0 ? ut.jsx("div", { className: "osrs-mmg__chart", children: ut.jsx($m, { width: "100%", height: 400, children: ut.jsxs(lb, { data: p, margin: hb, children: [ut.jsx(Ch, { strokeDasharray: "3 3", stroke: Gt.grid }), ut.jsx(Vo, { dataKey: "period", tick: La, stroke: Gt.axis, ...Fp(a) }), ut.jsx(Ni, { tick: La, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), ut.jsx(nr, { formatter: (g) => my(g), labelFormatter: (g) => Lp(String(g), a), ...fb }), ut.jsx(hn, { ...db }), _.map((g, w) => ut.jsx(Vn, { type: "monotone", dataKey: g, stroke: Gt.colors[w % Gt.colors.length] }, g))] }) }) }) : null, !d && e7 === "single" && s.length === 0 ? ut.jsx("p", { className: "osrs-mmg__muted", children: "No snapshot history yet for this method." }) : null, !d && e7 === "topN" && p.length === 0 ? ut.jsx("p", { className: "osrs-mmg__muted", children: "Re-rank the table to pick top methods, or wait for more daily snapshots." }) : null] });
}
const AY = [{ id: "marlin", methodName: "Cuttingraw marlin", methodUrl: "/w/Money_making_guide/Cutting_raw_marlin", defaultKph: 11e3, kphUnitName: "Marlins per hour", assumptionText: "", inputTotalPk: 5015, inputTotalPh: 0, outputTotalPk: 5978, outputTotalPh: 0, inputs: [{ itemName: "Raw marlin", wikiSlug: "Raw_marlin", qtyPerCompletion: 1, gpPerCompletion: 5015 }], outputs: [{ itemName: "Fine fish offcuts", wikiSlug: "Fine_fish_offcuts", qtyPerCompletion: 1, gpPerCompletion: 671 }, { itemName: "Marlin scales", wikiSlug: "Marlin_scales", qtyPerCompletion: 3, gpPerCompletion: 5307 }], skillRequirements: [] }, { id: "tob", methodName: "Completing theTheatre of Blood(trio)", methodUrl: "/w/Money_making_guide/Theatre_of_Blood", defaultKph: 3, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes3kills per hour in trios with 0 deaths. Your actual profits may be higher or lower depending on your actual kc/hour, your group size, the number of deaths per raid and luck.3kills per hour requires minimal downtime, few mistakes and efficient strategies. The supply cost given is the average supply cost for each role (Mage, Melee Freeze, Ranger, Melee).", inputTotalPk: 306831, inputTotalPh: 0, outputTotalPk: 40403529699803e-7, outputTotalPh: 0, inputs: [{ itemName: "Super combat potion(4)", wikiSlug: "Super_combat_potion(4)", qtyPerCompletion: 1.5, gpPerCompletion: 20295 }, { itemName: "Divine super combat potion(4)", wikiSlug: "Divine_super_combat_potion(4)", qtyPerCompletion: 1, gpPerCompletion: 19559 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 0.5, gpPerCompletion: 1256 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 1, gpPerCompletion: 11174 }, { itemName: "Zulrah's scales", wikiSlug: "Zulrah's_scales", qtyPerCompletion: 27, gpPerCompletion: 4779 }, { itemName: "Dragon dart", wikiSlug: "Dragon_dart", qtyPerCompletion: 8, gpPerCompletion: 10904 }, { itemName: "Black chinchompa", wikiSlug: "Black_chinchompa", qtyPerCompletion: 7, gpPerCompletion: 20713 }, { itemName: "Ice Barrage", wikiSlug: "Ice_Barrage", qtyPerCompletion: 6, gpPerCompletion: 8496 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 11478 }, { itemName: "Spellbook Swap", wikiSlug: "Spellbook_Swap", qtyPerCompletion: 6, gpPerCompletion: 3756 }, { itemName: "Vengeance", wikiSlug: "Vengeance", qtyPerCompletion: 15, gpPerCompletion: 17310 }, { itemName: "Scythe of vitur", wikiSlug: "Scythe_of_vitur", qtyPerCompletion: 220, gpPerCompletion: 149193 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 8, gpPerCompletion: 23872 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 2, gpPerCompletion: 4046 }], outputs: [{ itemName: "Scythe of vitur (uncharged)", wikiSlug: "Scythe_of_vitur_(uncharged)", qtyPerCompletion: 0.0019278966647388, gpPerCompletion: 27976156256025e-7 }, { itemName: "Avernic defender hilt", wikiSlug: "Avernic_defender_hilt", qtyPerCompletion: 0.01542317331791, gpPerCompletion: 512047.58048968 }, { itemName: "Ghrazi rapier", wikiSlug: "Ghrazi_rapier", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 114430.00578369 }, { itemName: "Sanguinesti staff (uncharged)", wikiSlug: "Sanguinesti_staff_(uncharged)", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 74450.854058222 }, { itemName: "Justiciar faceguard", wikiSlug: "Justiciar_faceguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 48395.527279737 }, { itemName: "Justiciar chestguard", wikiSlug: "Justiciar_chestguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 44466.400616926 }, { itemName: "Justiciar legguards", wikiSlug: "Justiciar_legguards", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 47547.919799498 }, { itemName: "Runite ore", wikiSlug: "Runite_ore", qtyPerCompletion: 6.3558, gpPerCompletion: 65299.4892 }], skillRequirements: [{ skillKey: "Magic", requirementText: "94+" }, { skillKey: "Ranged", requirementText: "90+" }] }, { id: "smithing", methodName: "Smithing Oathplate armour fromCrushed infernal shaleandOathplate shards", methodUrl: "/w/Money_making_guide/Smithing_oathplate_armour", defaultKph: 4, kphUnitName: "Armour pieces per hour", assumptionText: "The profit rate assumes4pieces of armour made per hour with few mistakes made during the smithing process. The guide automatically picks the highest value piece for display and profit calculations.", inputTotalPk: 87685200, inputTotalPh: 0, outputTotalPk: 88809329, outputTotalPh: 0, inputs: [{ itemName: "Crushed infernal shale", wikiSlug: "Crushed_infernal_shale", qtyPerCompletion: 2520, gpPerCompletion: 806400 }, { itemName: "Oathplate shards", wikiSlug: "Oathplate_shards", qtyPerCompletion: 450, gpPerCompletion: 86878800 }], outputs: [{ itemName: "Oathplate legs", wikiSlug: "Oathplate_legs", qtyPerCompletion: 1, gpPerCompletion: 88809329 }], skillRequirements: [] }, { id: "mokhaiotl", methodName: "Killing TheDoom of Mokhaiotl(Delve 1-16)", methodUrl: "/w/Money_making_guide/Killing_the_Doom_of_Mokhaiotl_(Delve_1-16)", defaultKph: 2.5, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes2.5Delve 1-16 completions per hour, looting at the end of each run. Your completion speed may vary based on your performance, stats and equipment used. Scorching bow users can expect closer to 2 completions per hour. Supply cost assumes the use of aTwistedorScorching bow, the player is on the Arceuus spellbook using thralls until wave 6, constant use ofdeath charge, and using azaryte crossbowspecial attack every wave.", inputTotalPk: 344347, inputTotalPh: 154237, outputTotalPk: 72345276648025e-7, outputTotalPh: 0, inputs: [{ itemName: "Divine ranging potion(4)", wikiSlug: "Divine_ranging_potion(4)", qtyPerCompletion: 3, gpPerCompletion: 19041 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 6, gpPerCompletion: 15072 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 4, gpPerCompletion: 8092 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 5, gpPerCompletion: 55870 }, { itemName: "Saradomin brew(4)", wikiSlug: "Saradomin_brew(4)", qtyPerCompletion: 6, gpPerCompletion: 46536 }, { itemName: "Extended anti-venom+(4)", wikiSlug: "Extended_anti-venom+(4)", qtyPerCompletion: 2.5, gpPerCompletion: 47660 }, { itemName: "Death Charge", wikiSlug: "Death_Charge", qtyPerCompletion: 56, gpPerCompletion: 72464 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 13878 }, { itemName: "Superior Demonbane", wikiSlug: "Superior_Demonbane", qtyPerCompletion: 41, gpPerCompletion: 33538 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 40, gpPerCompletion: 119360 }, { itemName: "Ruby dragon bolts (e)", wikiSlug: "Ruby_dragon_bolts_(e)", qtyPerCompletion: 3.2, gpPerCompletion: 9104 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1, gpPerCompletion: 57969 }], outputs: [{ itemName: "Avernic treads", wikiSlug: "Avernic_treads", qtyPerCompletion: 0.021073503475464, gpPerCompletion: 36718848828421e-7 }, { itemName: "Eye of ayak (uncharged)", wikiSlug: "Eye_of_ayak_(uncharged)", qtyPerCompletion: 0.021573503475464, gpPerCompletion: 11296287039712e-7 }, { itemName: "Mokhaiotl cloth", wikiSlug: "Mokhaiotl_cloth", qtyPerCompletion: 0.021973503475464, gpPerCompletion: 12328797525538e-7 }, { itemName: "Demon tear", wikiSlug: "Demon_tear", qtyPerCompletion: 1479.7349128671, gpPerCompletion: 479434.11176894 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1.560204615624, gpPerCompletion: 88635.224213599 }, { itemName: "Aether catalyst", wikiSlug: "Aether_catalyst", qtyPerCompletion: 227.88871078774, gpPerCompletion: 81584.158462011 }, { itemName: "Dragon med helm", wikiSlug: "Dragon_med_helm", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 44168.58165062 }, { itemName: "Mystic earth staff", wikiSlug: "Mystic_earth_staff", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 18782.296325307 }], skillRequirements: [{ skillKey: "Magic", requirementText: "80+" }, { skillKey: "Ranged", requirementText: "90+" }] }], QK = "osrs-mmg-cache", Ho = "artifacts", e1 = "duckdb";
function r1() {
  return new Promise((e7, t) => {
    const r = indexedDB.open(QK, 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore(Ho);
    }, r.onsuccess = () => e7(r.result), r.onerror = () => t(r.error ?? new Error("IndexedDB open failed"));
  });
}
async function ZK() {
  const e7 = await r1();
  return new Promise((t, r) => {
    const i = e7.transaction(Ho, "readonly").objectStore(Ho).get(e1);
    i.onsuccess = () => t(i.result ?? null), i.onerror = () => r(i.error ?? new Error("IndexedDB read failed"));
  });
}
async function tY(e7) {
  const t = await r1();
  return new Promise((r, n) => {
    const i = t.transaction(Ho, "readwrite");
    i.objectStore(Ho).put(e7, e1), i.oncomplete = () => r(), i.onerror = () => n(i.error ?? new Error("IndexedDB write failed"));
  });
}
async function eY(e7) {
  const t = await fetch(e7, { cache: "no-cache" });
  if (!t.ok) throw new Error(`Failed to download DuckDB (${t.status})`);
  return t.arrayBuffer();
}
function PY() {
  const [e7, t] = B.useState({ ready: false, loading: fi() || nf(), error: null, manifest: null, fromCache: false, localMode: fi() }), [r, n] = B.useState(0), i = B.useCallback(() => {
    n((a) => a + 1);
  }, []);
  return B.useEffect(() => {
    if (!fi() && !nf()) {
      t({ ready: false, loading: false, error: null, manifest: null, fromCache: false, localMode: false });
      return;
    }
    let a = false;
    async function o() {
      const u = await fetch(rf, { cache: "no-cache" });
      if (!u.ok) throw new Error(`Failed to load local DuckDB (${u.status}). Run: make import-osrs-db`);
      const l = await u.arrayBuffer(), f = u.headers.get("etag") ?? u.headers.get("last-modified") ?? `${rf}:${l.byteLength}`;
      let h = null;
      await py(l, f), a || t({ ready: true, loading: false, error: null, manifest: h, fromCache: false, localMode: true });
    }
    async function s() {
      const u = await EP(), l = await ZK(), f = $P(u, (l == null ? void 0 : l.sha256) ?? null);
      let h, d = false;
      !f && l ? (h = l.bytes, d = true) : (h = await eY(i1(u)), await tY({ sha256: u.artifacts.database.sha256, bytes: h, fetchedAt: (/* @__PURE__ */ new Date()).toISOString() })), await py(h, u.artifacts.database.sha256), a || t({ ready: true, loading: false, error: null, manifest: u, fromCache: d, localMode: false });
    }
    async function c() {
      t((u) => ({ ...u, loading: true, error: null }));
      try {
        fi() ? await o() : await s();
      } catch (u) {
        a || t({ ready: false, loading: false, error: u instanceof Error ? u.message : String(u), manifest: null, fromCache: false, localMode: fi() });
      }
    }
    return c(), () => {
      a = true;
    };
  }, [r]), { ...e7, reload: i };
}
export {
  _Y as A,
  lb as C,
  hn as L,
  SY as O,
  $m as R,
  AY as S,
  nr as T,
  Vo as X,
  Ni as Y,
  mY as a,
  cY as b,
  OY as c,
  my as d,
  xY as e,
  yY as f,
  wY as g,
  s1 as h,
  oY as i,
  hb as j,
  Ch as k,
  Gt as l,
  La as m,
  Fp as n,
  bY as o,
  Bp as p,
  db as q,
  sY as r,
  a1 as s,
  fb as t,
  PY as u,
  Vn as v,
  gY as w,
  Lp as x,
  vY as y,
  IP as z
};
