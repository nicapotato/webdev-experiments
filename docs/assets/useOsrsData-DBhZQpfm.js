import { j as ut, c as ls, g as Bt, r as B, R as A } from "./index-BpTeCU6g.js";
import { s as p1 } from "./skillIconUrl-C82-LoM1.js";
import { c as mt } from "./clsx-B-dksMZM.js";
import { _ as gr, a as yt, b as Is, c as Un, d as ot } from "./tslib.es6-Xujj8YQZ.js";
const sf = "", td = "https://prod-public-mindtricks-data.s3.eu-west-2.amazonaws.com/prod/client/osrs-mmg".replace(/\/$/, "") ?? "", y1 = `${td}/manifest.json`, Fp = "osrs-mmg.duckdb";
function m1(e9) {
  return `${td}/${e9.artifacts.database.url}`;
}
function hi() {
  return sf.length > 0;
}
function cf() {
  return td.length > 0;
}
function OY() {
  return hi() || cf();
}
function Up(e9, t) {
  return e9.profit_pk * t + e9.profit_ph;
}
function xY(e9, t, r) {
  const n = (r == null ? void 0 : r.size) ? e9.filter((i) => !r.has(i.method_id)) : e9;
  return v1(n, t);
}
function v1(e9, t) {
  return [...e9].sort((r, n) => {
    const i = t[r.method_id] ?? r.default_kph, a = t[n.method_id] ?? n.default_kph;
    return Up(n, a) - Up(r, i);
  });
}
function bb(e9) {
  if (Array.isArray(e9)) return e9.map(String).filter(Boolean);
  if (e9 == null) return [];
  if (typeof e9 == "string") {
    let t = e9.trim();
    if (!t) return [];
    if (t.startsWith("[") && t.endsWith("]") && (t = t.slice(1, -1)), t.startsWith("[")) try {
      const r = JSON.parse(t.replace(/'/g, '"'));
      if (Array.isArray(r)) return r.map(String).filter(Boolean);
    } catch {
    }
    return t.split(",").map((r) => r.trim().replace(/^\[|\]$/g, "")).filter(Boolean);
  }
  return [String(e9)];
}
function AY(e9) {
  const t = bb(e9);
  return t.length ? t.join(", ") : "\u2014";
}
const zp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], vl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function ed(e9) {
  if (e9 instanceof Date) return Number.isNaN(e9.getTime()) ? null : e9;
  if (typeof e9 == "number" && Number.isFinite(e9)) return new Date(e9);
  const t = String(e9).trim();
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
function yn(e9) {
  const t = ed(e9);
  return t ? t.toISOString().slice(0, 10) : String(e9);
}
function Wp(e9) {
  return String(e9).slice(-2);
}
function g1(e9, t) {
  const r = ed(e9);
  if (!r) return String(e9);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
    case "week":
      return `${n}-${zp[i]}`;
    case "month":
      return `${zp[i]} '${Wp(a)}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} '${Wp(a)}`;
    case "year":
      return String(a);
  }
}
function Vp(e9, t) {
  const r = ed(e9);
  if (!r) return String(e9);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
      return `${n} ${vl[i]} ${a}`;
    case "week":
      return `Week of ${n} ${vl[i]} ${a}`;
    case "month":
      return `${vl[i]} ${a}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} ${a}`;
    case "year":
      return String(a);
  }
}
function qp(e9) {
  return { type: "category", scale: "point", tickFormatter: (t) => g1(t, e9), minTickGap: 56, interval: "preserveStartEnd", tickMargin: 10 };
}
function b1(e9, t) {
  return yn(e9).localeCompare(yn(t));
}
const _1 = new TextDecoder("utf-8"), uf = (e9) => _1.decode(e9), w1 = new TextEncoder(), rd = (e9) => w1.encode(e9), S1 = (e9) => typeof e9 == "number", _b = (e9) => typeof e9 == "boolean", re = (e9) => typeof e9 == "function", Ie = (e9) => e9 != null && Object(e9) === e9, Gn = (e9) => Ie(e9) && re(e9.then), Xo = (e9) => Ie(e9) && re(e9[Symbol.iterator]), ha = (e9) => Ie(e9) && re(e9[Symbol.asyncIterator]), lf = (e9) => Ie(e9) && Ie(e9.schema), wb = (e9) => Ie(e9) && "done" in e9 && "value" in e9, Sb = (e9) => Ie(e9) && re(e9.stat) && S1(e9.fd), Ob = (e9) => Ie(e9) && nd(e9.body), Su = (e9) => "_getDOMStream" in e9 && "_getNodeStream" in e9, O1 = (e9) => Ie(e9) && re(e9.abort) && re(e9.getWriter) && !Su(e9), nd = (e9) => Ie(e9) && re(e9.cancel) && re(e9.getReader) && !Su(e9), x1 = (e9) => Ie(e9) && re(e9.end) && re(e9.write) && _b(e9.writable) && !Su(e9), xb = (e9) => Ie(e9) && re(e9.read) && re(e9.pipe) && _b(e9.readable) && !Su(e9), A1 = (e9) => Ie(e9) && re(e9.clear) && re(e9.bytes) && re(e9.position) && re(e9.setPosition) && re(e9.capacity) && re(e9.getBufferIdentifier) && re(e9.createLong), id = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function P1(e9) {
  const t = e9[0] ? [e9[0]] : [];
  let r, n, i, a;
  for (let o, s, c = 0, u = 0, l = e9.length; ++c < l; ) {
    if (o = t[u], s = e9[c], !o || !s || o.buffer !== s.buffer || s.byteOffset < o.byteOffset) {
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
function Gp(e9, t, r = 0, n = t.byteLength) {
  const i = e9.byteLength, a = new Uint8Array(e9.buffer, e9.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
  return a.set(o, r), e9;
}
function Ar(e9, t) {
  const r = P1(e9), n = r.reduce((l, f) => l + f.byteLength, 0);
  let i, a, o, s = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const l = r.length; ++c < l; ) {
    if (i = r[c], a = i.subarray(0, Math.min(i.length, u - s)), u <= s + a.length) {
      a.length < i.length ? r[c] = i.subarray(a.length) : a.length === i.length && c++, o ? Gp(o, a, s) : o = a;
      break;
    }
    Gp(o || (o = new Uint8Array(u)), a, s), s += a.length;
  }
  return [o || new Uint8Array(0), r.slice(c), n - (o ? o.byteLength : 0)];
}
function Et(e9, t) {
  let r = wb(t) ? t.value : t;
  return r instanceof e9 ? e9 === Uint8Array ? new e9(r.buffer, r.byteOffset, r.byteLength) : r : r ? (typeof r == "string" && (r = rd(r)), r instanceof ArrayBuffer ? new e9(r) : r instanceof id ? new e9(r) : A1(r) ? Et(e9, r.bytes()) : ArrayBuffer.isView(r) ? r.byteLength <= 0 ? new e9(0) : new e9(r.buffer, r.byteOffset, r.byteLength / e9.BYTES_PER_ELEMENT) : e9.from(r)) : new e9(0);
}
const $a = (e9) => Et(Int32Array, e9), Hp = (e9) => Et(BigInt64Array, e9), vt = (e9) => Et(Uint8Array, e9), ff = (e9) => (e9.next(), e9);
function* T1(e9, t) {
  const r = function* (i) {
    yield i;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof id ? r(t) : Xo(t) ? t : r(t);
  return yield* ff(function* (i) {
    let a = null;
    do
      a = i.next(yield Et(e9, a));
    while (!a.done);
  }(n[Symbol.iterator]())), new e9();
}
const I1 = (e9) => T1(Uint8Array, e9);
function Ab(e9, t) {
  return gr(this, arguments, function* () {
    if (Gn(t)) return yield yt(yield yt(yield* Is(Un(Ab(e9, yield yt(t))))));
    const n = function(o) {
      return gr(this, arguments, function* () {
        yield yield yt(yield yt(o));
      });
    }, i = function(o) {
      return gr(this, arguments, function* () {
        yield yt(yield* Is(Un(ff(function* (s) {
          let c = null;
          do
            c = s.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, a = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof id ? n(t) : Xo(t) ? i(t) : ha(t) ? t : n(t);
    return yield yt(yield* Is(Un(ff(function(o) {
      return gr(this, arguments, function* () {
        let s = null;
        do
          s = yield yt(o.next(yield yield yt(Et(e9, s))));
        while (!s.done);
      });
    }(a[Symbol.asyncIterator]()))))), yield yt(new e9());
  });
}
const E1 = (e9) => Ab(Uint8Array, e9);
function Pb(e9, t, r) {
  if (e9 !== 0) {
    r = r.slice(0, t);
    for (let n = -1, i = r.length; ++n < i; ) r[n] += e9;
  }
  return r.subarray(0, t);
}
function $1(e9, t) {
  let r = 0;
  const n = e9.length;
  if (n !== t.length) return false;
  if (n > 0) do
    if (e9[r] !== t[r]) return false;
  while (++r < n);
  return true;
}
const Ve = { fromIterable(e9) {
  return fs(M1(e9));
}, fromAsyncIterable(e9) {
  return fs(D1(e9));
}, fromDOMStream(e9) {
  return fs(N1(e9));
}, fromNodeStream(e9) {
  return fs(j1(e9));
}, toDOMStream(e9, t) {
  throw new Error('"toDOMStream" not available in this environment');
}, toNodeStream(e9, t) {
  throw new Error('"toNodeStream" not available in this environment');
} }, fs = (e9) => (e9.next(), e9);
function* M1(e9) {
  let t, r = false, n = [], i, a, o, s = 0;
  function c() {
    return a === "peek" ? Ar(n, o)[0] : ([i, n, s] = Ar(n, o), i);
  }
  ({ cmd: a, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = I1(e9)[Symbol.iterator]();
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
function D1(e9) {
  return gr(this, arguments, function* () {
    let r, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Ar(i, s)[0] : ([a, i, c] = Ar(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = E1(e9)[Symbol.asyncIterator]();
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
function N1(e9) {
  return gr(this, arguments, function* () {
    let r = false, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Ar(i, s)[0] : ([a, i, c] = Ar(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = new C1(e9);
    try {
      do
        if ({ done: r, value: a } = Number.isNaN(s - c) ? yield yt(l.read()) : yield yt(l.read(s - c)), !r && a.byteLength > 0 && (i.push(vt(a)), c += a.byteLength), r || s <= c) do
          ({ cmd: o, size: s } = yield yield yt(u()));
        while (s < c);
      while (!r);
    } catch (f) {
      (n = true) && (yield yt(l.cancel(f)));
    } finally {
      n === false ? yield yt(l.cancel()) : e9.locked && l.releaseLock();
    }
    return yield yt(null);
  });
}
class C1 {
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
const gl = (e9, t) => {
  const r = (i) => n([t, i]);
  let n;
  return [t, r, new Promise((i) => (n = i) && e9.once(t, r))];
};
function j1(e9) {
  return gr(this, arguments, function* () {
    const r = [];
    let n = "error", i = false, a = null, o, s, c = 0, u = [], l;
    function f() {
      return o === "peek" ? Ar(u, s)[0] : ([l, u, c] = Ar(u, s), l);
    }
    if ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 }, e9.isTTY) return yield yield yt(new Uint8Array(0)), yield yt(null);
    try {
      r[0] = gl(e9, "end"), r[1] = gl(e9, "error");
      do {
        if (r[2] = gl(e9, "readable"), [n, a] = yield yt(Promise.race(r.map((d) => d[2]))), n === "error") break;
        if ((i = n === "end") || (Number.isFinite(s - c) ? (l = vt(e9.read(s - c)), l.byteLength < s - c && (l = vt(e9.read()))) : l = vt(e9.read()), l.byteLength > 0 && (u.push(l), c += l.byteLength)), i || s <= c) do
          ({ cmd: o, size: s } = yield yield yt(f()));
        while (s < c);
      } while (!i);
    } finally {
      yield yt(h(r, n === "error" ? a : null));
    }
    return yield yt(null);
    function h(d, y) {
      return l = u = null, new Promise((m, p) => {
        for (const [_, g] of d) e9.off(_, g);
        try {
          const _ = e9.destroy;
          _ && _.call(e9, y), y = void 0;
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
(function(e9) {
  e9[e9.V1 = 0] = "V1", e9[e9.V2 = 1] = "V2", e9[e9.V3 = 2] = "V3", e9[e9.V4 = 3] = "V4", e9[e9.V5 = 4] = "V5";
})(Kt || (Kt = {}));
var ye;
(function(e9) {
  e9[e9.Sparse = 0] = "Sparse", e9[e9.Dense = 1] = "Dense";
})(ye || (ye = {}));
var pe;
(function(e9) {
  e9[e9.HALF = 0] = "HALF", e9[e9.SINGLE = 1] = "SINGLE", e9[e9.DOUBLE = 2] = "DOUBLE";
})(pe || (pe = {}));
var Xe;
(function(e9) {
  e9[e9.DAY = 0] = "DAY", e9[e9.MILLISECOND = 1] = "MILLISECOND";
})(Xe || (Xe = {}));
var Q;
(function(e9) {
  e9[e9.SECOND = 0] = "SECOND", e9[e9.MILLISECOND = 1] = "MILLISECOND", e9[e9.MICROSECOND = 2] = "MICROSECOND", e9[e9.NANOSECOND = 3] = "NANOSECOND";
})(Q || (Q = {}));
var Pr;
(function(e9) {
  e9[e9.YEAR_MONTH = 0] = "YEAR_MONTH", e9[e9.DAY_TIME = 1] = "DAY_TIME", e9[e9.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Pr || (Pr = {}));
const bl = 2, yr = 4, Br = 4, Pt = 4, on = new Int32Array(2), Kp = new Float32Array(on.buffer), Yp = new Float64Array(on.buffer), hs = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var hf;
(function(e9) {
  e9[e9.UTF8_BYTES = 1] = "UTF8_BYTES", e9[e9.UTF16_STRING = 2] = "UTF16_STRING";
})(hf || (hf = {}));
let ji = class Tb {
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  static allocate(t) {
    return new Tb(new Uint8Array(t));
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
    return on[0] = this.readInt32(t), Kp[0];
  }
  readFloat64(t) {
    return on[hs ? 0 : 1] = this.readInt32(t), on[hs ? 1 : 0] = this.readInt32(t + 4), Yp[0];
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
    Kp[0] = r, this.writeInt32(t, on[0]);
  }
  writeFloat64(t, r) {
    Yp[0] = r, this.writeInt32(t, on[hs ? 0 : 1]), this.writeInt32(t + 4, on[hs ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + yr + Br) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let r = 0; r < Br; r++) t += String.fromCharCode(this.readInt8(this.position_ + yr + r));
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
    return r === hf.UTF8_BYTES ? i : this.text_decoder_.decode(i);
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
    if (t.length != Br) throw new Error("FlatBuffers: file identifier must be length " + Br);
    for (let r = 0; r < Br; r++) if (t.charCodeAt(r) != this.readInt8(this.position() + yr + r)) return false;
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
}, Ib = class Eb {
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false, this.string_maps = null, this.text_encoder = new TextEncoder();
    let r;
    t ? r = t : r = 1024, this.bb = ji.allocate(r), this.space = r;
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
      this.bb = Eb.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
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
    const n = r << 1, i = ji.allocate(n);
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
    const a = (n + i) * bl;
    this.addInt16(a);
    let o = 0;
    const s = this.space;
    t: for (r = 0; r < this.vtables.length; r++) {
      const c = this.bb.capacity() - this.vtables[r];
      if (a == this.bb.readInt16(c)) {
        for (let u = bl; u < a; u += bl) if (this.bb.readInt16(s + u) != this.bb.readInt16(c + u)) continue t;
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
      if (this.prep(this.minalign, yr + Br + i), a.length != Br) throw new TypeError("FlatBuffers: file identifier must be length " + Br);
      for (let o = Br - 1; o >= 0; o--) this.writeInt8(a.charCodeAt(o));
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
var Us;
(function(e9) {
  e9[e9.BUFFER = 0] = "BUFFER";
})(Us || (Us = {}));
var zs;
(function(e9) {
  e9[e9.LZ4_FRAME = 0] = "LZ4_FRAME", e9[e9.ZSTD = 1] = "ZSTD";
})(zs || (zs = {}));
class sn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBodyCompression(t, r) {
    return (r || new sn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, r) {
    return t.setPosition(t.position() + Pt), (r || new sn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : zs.LZ4_FRAME;
  }
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Us.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, r) {
    t.addFieldInt8(0, r, zs.LZ4_FRAME);
  }
  static addMethod(t, r) {
    t.addFieldInt8(1, r, Us.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, r, n) {
    return sn.startBodyCompression(t), sn.addCodec(t, r), sn.addMethod(t, n), sn.endBodyCompression(t);
  }
}
class $b {
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
let Mb = class {
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
}, Nr = class df {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsRecordBatch(t, r) {
    return (r || new df()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new df()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  nodes(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new Mb()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  buffers(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new $b()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  compression(t) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? (t || new sn()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
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
}, di = class pf {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryBatch(t, r) {
    return (r || new pf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new pf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  data(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new Nr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
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
var Bi;
(function(e9) {
  e9[e9.Little = 0] = "Little", e9[e9.Big = 1] = "Big";
})(Bi || (Bi = {}));
var Ws;
(function(e9) {
  e9[e9.DenseArray = 0] = "DenseArray";
})(Ws || (Ws = {}));
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
class kr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryEncoding(t, r) {
    return (r || new kr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, r) {
    return t.setPosition(t.position() + Pt), (r || new kr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Ws.DenseArray;
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
    t.addFieldInt16(3, r, Ws.DenseArray);
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
let Xp = class za {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBinary(t, r) {
    return (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return za.startBinary(t), za.endBinary(t);
  }
}, Jp = class Wa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBool(t, r) {
    return (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Wa.startBool(t), Wa.endBool(t);
  }
}, Es = class pi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDate(t, r) {
    return (r || new pi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, r) {
    return t.setPosition(t.position() + Pt), (r || new pi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return pi.startDate(t), pi.addUnit(t, r), pi.endDate(t);
  }
}, yi = class nn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDecimal(t, r) {
    return (r || new nn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, r) {
    return t.setPosition(t.position() + Pt), (r || new nn()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return nn.startDecimal(t), nn.addPrecision(t, r), nn.addScale(t, n), nn.addBitWidth(t, i), nn.endDecimal(t);
  }
}, $s = class mi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDuration(t, r) {
    return (r || new mi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, r) {
    return t.setPosition(t.position() + Pt), (r || new mi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return mi.startDuration(t), mi.addUnit(t, r), mi.endDuration(t);
  }
}, Ms = class vi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeBinary(t, r) {
    return (r || new vi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new vi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return vi.startFixedSizeBinary(t), vi.addByteWidth(t, r), vi.endFixedSizeBinary(t);
  }
}, Ds = class gi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeList(t, r) {
    return (r || new gi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new gi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return gi.startFixedSizeList(t), gi.addListSize(t, r), gi.endFixedSizeList(t);
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
let Qp = class Va {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeBinary(t, r) {
    return (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return Va.startLargeBinary(t), Va.endLargeBinary(t);
  }
}, Zp = class qa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeUtf8(t, r) {
    return (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return qa.startLargeUtf8(t), qa.endLargeUtf8(t);
  }
}, ty = class Ga {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsList(t, r) {
    return (r || new Ga()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ga()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Ga.startList(t), Ga.endList(t);
  }
}, Ns = class bi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMap(t, r) {
    return (r || new bi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, r) {
    return t.setPosition(t.position() + Pt), (r || new bi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return bi.startMap(t), bi.addKeysSorted(t, r), bi.endMap(t);
  }
}, ey = class Ha {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsNull(t, r) {
    return (r || new Ha()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ha()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Ha.startNull(t), Ha.endNull(t);
  }
};
class jn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsStruct_(t, r) {
    return (r || new jn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, r) {
    return t.setPosition(t.position() + Pt), (r || new jn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return jn.startStruct_(t), jn.endStruct_(t);
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
let ry = class Ka {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUtf8(t, r) {
    return (r || new Ka()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ka()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ka.startUtf8(t), Ka.endUtf8(t);
  }
};
var Ct;
(function(e9) {
  e9[e9.NONE = 0] = "NONE", e9[e9.Null = 1] = "Null", e9[e9.Int = 2] = "Int", e9[e9.FloatingPoint = 3] = "FloatingPoint", e9[e9.Binary = 4] = "Binary", e9[e9.Utf8 = 5] = "Utf8", e9[e9.Bool = 6] = "Bool", e9[e9.Decimal = 7] = "Decimal", e9[e9.Date = 8] = "Date", e9[e9.Time = 9] = "Time", e9[e9.Timestamp = 10] = "Timestamp", e9[e9.Interval = 11] = "Interval", e9[e9.List = 12] = "List", e9[e9.Struct_ = 13] = "Struct_", e9[e9.Union = 14] = "Union", e9[e9.FixedSizeBinary = 15] = "FixedSizeBinary", e9[e9.FixedSizeList = 16] = "FixedSizeList", e9[e9.Map = 17] = "Map", e9[e9.Duration = 18] = "Duration", e9[e9.LargeBinary = 19] = "LargeBinary", e9[e9.LargeUtf8 = 20] = "LargeUtf8", e9[e9.LargeList = 21] = "LargeList", e9[e9.RunEndEncoded = 22] = "RunEndEncoded";
})(Ct || (Ct = {}));
let ze = class Cs {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsField(t, r) {
    return (r || new Cs()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Cs()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return r ? (t || new kr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  children(t, r) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (r || new Cs()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
}, dr = class Dr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsSchema(t, r) {
    return (r || new Dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Bi.Little;
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
    t.addFieldInt16(0, r, Bi.Little);
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
    return Dr.startSchema(t), Dr.addEndianness(t, r), Dr.addFields(t, n), Dr.addCustomMetadata(t, i), Dr.addFeatures(t, a), Dr.endSchema(t);
  }
};
var _t;
(function(e9) {
  e9[e9.NONE = 0] = "NONE", e9[e9.Schema = 1] = "Schema", e9[e9.DictionaryBatch = 2] = "DictionaryBatch", e9[e9.RecordBatch = 3] = "RecordBatch", e9[e9.Tensor = 4] = "Tensor", e9[e9.SparseTensor = 5] = "SparseTensor";
})(_t || (_t = {}));
var x;
(function(e9) {
  e9[e9.NONE = 0] = "NONE", e9[e9.Null = 1] = "Null", e9[e9.Int = 2] = "Int", e9[e9.Float = 3] = "Float", e9[e9.Binary = 4] = "Binary", e9[e9.Utf8 = 5] = "Utf8", e9[e9.Bool = 6] = "Bool", e9[e9.Decimal = 7] = "Decimal", e9[e9.Date = 8] = "Date", e9[e9.Time = 9] = "Time", e9[e9.Timestamp = 10] = "Timestamp", e9[e9.Interval = 11] = "Interval", e9[e9.List = 12] = "List", e9[e9.Struct = 13] = "Struct", e9[e9.Union = 14] = "Union", e9[e9.FixedSizeBinary = 15] = "FixedSizeBinary", e9[e9.FixedSizeList = 16] = "FixedSizeList", e9[e9.Map = 17] = "Map", e9[e9.Duration = 18] = "Duration", e9[e9.LargeBinary = 19] = "LargeBinary", e9[e9.LargeUtf8 = 20] = "LargeUtf8", e9[e9.Dictionary = -1] = "Dictionary", e9[e9.Int8 = -2] = "Int8", e9[e9.Int16 = -3] = "Int16", e9[e9.Int32 = -4] = "Int32", e9[e9.Int64 = -5] = "Int64", e9[e9.Uint8 = -6] = "Uint8", e9[e9.Uint16 = -7] = "Uint16", e9[e9.Uint32 = -8] = "Uint32", e9[e9.Uint64 = -9] = "Uint64", e9[e9.Float16 = -10] = "Float16", e9[e9.Float32 = -11] = "Float32", e9[e9.Float64 = -12] = "Float64", e9[e9.DateDay = -13] = "DateDay", e9[e9.DateMillisecond = -14] = "DateMillisecond", e9[e9.TimestampSecond = -15] = "TimestampSecond", e9[e9.TimestampMillisecond = -16] = "TimestampMillisecond", e9[e9.TimestampMicrosecond = -17] = "TimestampMicrosecond", e9[e9.TimestampNanosecond = -18] = "TimestampNanosecond", e9[e9.TimeSecond = -19] = "TimeSecond", e9[e9.TimeMillisecond = -20] = "TimeMillisecond", e9[e9.TimeMicrosecond = -21] = "TimeMicrosecond", e9[e9.TimeNanosecond = -22] = "TimeNanosecond", e9[e9.DenseUnion = -23] = "DenseUnion", e9[e9.SparseUnion = -24] = "SparseUnion", e9[e9.IntervalDayTime = -25] = "IntervalDayTime", e9[e9.IntervalYearMonth = -26] = "IntervalYearMonth", e9[e9.DurationSecond = -27] = "DurationSecond", e9[e9.DurationMillisecond = -28] = "DurationMillisecond", e9[e9.DurationMicrosecond = -29] = "DurationMicrosecond", e9[e9.DurationNanosecond = -30] = "DurationNanosecond";
})(x || (x = {}));
var Cr;
(function(e9) {
  e9[e9.OFFSET = 0] = "OFFSET", e9[e9.DATA = 1] = "DATA", e9[e9.VALIDITY = 2] = "VALIDITY", e9[e9.TYPE = 3] = "TYPE";
})(Cr || (Cr = {}));
const B1 = void 0;
function ao(e9) {
  if (e9 === null) return "null";
  if (e9 === B1) return "undefined";
  switch (typeof e9) {
    case "number":
      return `${e9}`;
    case "bigint":
      return `${e9}`;
    case "string":
      return `"${e9}"`;
  }
  return typeof e9[Symbol.toPrimitive] == "function" ? e9[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e9) ? e9 instanceof BigInt64Array || e9 instanceof BigUint64Array ? `[${[...e9].map((t) => ao(t))}]` : `[${e9}]` : ArrayBuffer.isView(e9) ? `[${e9}]` : JSON.stringify(e9, (t, r) => typeof r == "bigint" ? `${r}` : r);
}
function Dt(e9) {
  if (typeof e9 == "bigint" && (e9 < Number.MIN_SAFE_INTEGER || e9 > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${e9} is not safe to convert to a number.`);
  return Number(e9);
}
function Db(e9, t) {
  return Dt(e9 / t) + Dt(e9 % t) / Dt(t);
}
const k1 = Symbol.for("isArrowBigNum");
function lr(e9, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Et(this.TypedArray, e9), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e9, ...t), this.constructor.prototype);
}
lr.prototype[k1] = true;
lr.prototype.toJSON = function() {
  return `"${so(this)}"`;
};
lr.prototype.valueOf = function(e9) {
  return Nb(this, e9);
};
lr.prototype.toString = function() {
  return so(this);
};
lr.prototype[Symbol.toPrimitive] = function(e9 = "default") {
  switch (e9) {
    case "number":
      return Nb(this);
    case "string":
      return so(this);
    case "default":
      return F1(this);
  }
  return so(this);
};
function Ti(...e9) {
  return lr.apply(this, e9);
}
function Ii(...e9) {
  return lr.apply(this, e9);
}
function oo(...e9) {
  return lr.apply(this, e9);
}
Object.setPrototypeOf(Ti.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ii.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(oo.prototype, Object.create(Uint32Array.prototype));
Object.assign(Ti.prototype, lr.prototype, { constructor: Ti, signed: true, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ii.prototype, lr.prototype, { constructor: Ii, signed: false, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(oo.prototype, lr.prototype, { constructor: oo, signed: true, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const R1 = BigInt(4294967296) * BigInt(4294967296), L1 = R1 - BigInt(1);
function Nb(e9, t) {
  const { buffer: r, byteOffset: n, byteLength: i, signed: a } = e9, o = new BigUint64Array(r, n, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (s) {
    for (const l of o) c |= (l ^ L1) * (BigInt(1) << BigInt(64 * u++));
    c *= BigInt(-1), c -= BigInt(1);
  } else for (const l of o) c |= l * (BigInt(1) << BigInt(64 * u++));
  if (typeof t == "number") {
    const l = BigInt(Math.pow(10, t)), f = c / l, h = c % l;
    return Dt(f) + Dt(h) / Dt(l);
  }
  return Dt(c);
}
function so(e9) {
  if (e9.byteLength === 8) return `${new e9.BigIntArray(e9.buffer, e9.byteOffset, 1)[0]}`;
  if (!e9.signed) return _l(e9);
  let t = new Uint16Array(e9.buffer, e9.byteOffset, e9.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0) return _l(e9);
  t = t.slice();
  let n = 1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a], s = ~o + n;
    t[a] = s, n &= o === 0 ? 1 : 0;
  }
  return `-${_l(t)}`;
}
function F1(e9) {
  return e9.byteLength === 8 ? new e9.BigIntArray(e9.buffer, e9.byteOffset, 1)[0] : so(e9);
}
function _l(e9) {
  let t = "";
  const r = new Uint32Array(2);
  let n = new Uint16Array(e9.buffer, e9.byteOffset, e9.byteLength / 2);
  const i = new Uint32Array((n = new Uint16Array(n).reverse()).buffer);
  let a = -1;
  const o = n.length - 1;
  do {
    for (r[0] = n[a = 0]; a < o; ) n[a++] = r[1] = r[0] / 10, r[0] = (r[0] - r[1] * 10 << 16) + n[a];
    n[a] = r[1] = r[0] / 10, r[0] = r[0] - r[1] * 10, t = `${r[0]}${t}`;
  } while (i[0] || i[1] || i[2] || i[3]);
  return t ?? "0";
}
class ad {
  static new(t, r) {
    switch (r) {
      case true:
        return new Ti(t);
      case false:
        return new Ii(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Ti(t);
    }
    return t.byteLength === 16 ? new oo(t) : new Ii(t);
  }
  static signed(t) {
    return new Ti(t);
  }
  static unsigned(t) {
    return new Ii(t);
  }
  static decimal(t) {
    return new oo(t);
  }
  constructor(t, r) {
    return ad.new(t, r);
  }
}
var Cb, jb, Bb, kb, Rb, Lb, Fb, Ub, zb, Wb, Vb, qb, Gb, Hb, Kb, Yb, Xb, Jb, Qb, Zb, t0, e0;
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
Cb = Symbol.toStringTag;
G[Cb] = ((e9) => (e9.children = null, e9.ArrayType = Array, e9.OffsetArrayType = Int32Array, e9[Symbol.toStringTag] = "DataType"))(G.prototype);
class mn extends G {
  constructor() {
    super(x.Null);
  }
  toString() {
    return "Null";
  }
}
jb = Symbol.toStringTag;
mn[jb] = ((e9) => e9[Symbol.toStringTag] = "Null")(mn.prototype);
class Hn extends G {
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
Bb = Symbol.toStringTag;
Hn[Bb] = ((e9) => (e9.isSigned = null, e9.bitWidth = null, e9[Symbol.toStringTag] = "Int"))(Hn.prototype);
class co extends Hn {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(co.prototype, "ArrayType", { value: Int32Array });
class Vs extends G {
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
kb = Symbol.toStringTag;
Vs[kb] = ((e9) => (e9.precision = null, e9[Symbol.toStringTag] = "Float"))(Vs.prototype);
class qs extends G {
  constructor() {
    super(x.Binary);
  }
  toString() {
    return "Binary";
  }
}
Rb = Symbol.toStringTag;
qs[Rb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Binary"))(qs.prototype);
class Gs extends G {
  constructor() {
    super(x.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Lb = Symbol.toStringTag;
Gs[Lb] = ((e9) => (e9.ArrayType = Uint8Array, e9.OffsetArrayType = BigInt64Array, e9[Symbol.toStringTag] = "LargeBinary"))(Gs.prototype);
class Hs extends G {
  constructor() {
    super(x.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
Fb = Symbol.toStringTag;
Hs[Fb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Utf8"))(Hs.prototype);
class Ks extends G {
  constructor() {
    super(x.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
Ub = Symbol.toStringTag;
Ks[Ub] = ((e9) => (e9.ArrayType = Uint8Array, e9.OffsetArrayType = BigInt64Array, e9[Symbol.toStringTag] = "LargeUtf8"))(Ks.prototype);
class Ys extends G {
  constructor() {
    super(x.Bool);
  }
  toString() {
    return "Bool";
  }
}
zb = Symbol.toStringTag;
Ys[zb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Bool"))(Ys.prototype);
let Xs = class extends G {
  constructor(t, r, n = 128) {
    super(x.Decimal), this.scale = t, this.precision = r, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
Wb = Symbol.toStringTag;
Xs[Wb] = ((e9) => (e9.scale = null, e9.precision = null, e9.ArrayType = Uint32Array, e9[Symbol.toStringTag] = "Decimal"))(Xs.prototype);
class Js extends G {
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
Vb = Symbol.toStringTag;
Js[Vb] = ((e9) => (e9.unit = null, e9[Symbol.toStringTag] = "Date"))(Js.prototype);
class Qs extends G {
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
qb = Symbol.toStringTag;
Qs[qb] = ((e9) => (e9.unit = null, e9.bitWidth = null, e9[Symbol.toStringTag] = "Time"))(Qs.prototype);
class Zs extends G {
  constructor(t, r) {
    super(x.Timestamp), this.unit = t, this.timezone = r;
  }
  toString() {
    return `Timestamp<${Q[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Gb = Symbol.toStringTag;
Zs[Gb] = ((e9) => (e9.unit = null, e9.timezone = null, e9.ArrayType = BigInt64Array, e9[Symbol.toStringTag] = "Timestamp"))(Zs.prototype);
class tc extends G {
  constructor(t) {
    super(x.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Pr[this.unit]}>`;
  }
}
Hb = Symbol.toStringTag;
tc[Hb] = ((e9) => (e9.unit = null, e9.ArrayType = Int32Array, e9[Symbol.toStringTag] = "Interval"))(tc.prototype);
class ec extends G {
  constructor(t) {
    super(x.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Q[this.unit]}>`;
  }
}
Kb = Symbol.toStringTag;
ec[Kb] = ((e9) => (e9.unit = null, e9.ArrayType = BigInt64Array, e9[Symbol.toStringTag] = "Duration"))(ec.prototype);
class rc extends G {
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
Yb = Symbol.toStringTag;
rc[Yb] = ((e9) => (e9.children = null, e9[Symbol.toStringTag] = "List"))(rc.prototype);
class ve extends G {
  constructor(t) {
    super(x.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Xb = Symbol.toStringTag;
ve[Xb] = ((e9) => (e9.children = null, e9[Symbol.toStringTag] = "Struct"))(ve.prototype);
class nc extends G {
  constructor(t, r, n) {
    super(x.Union), this.mode = t, this.children = n, this.typeIds = r = Int32Array.from(r), this.typeIdToChildIndex = r.reduce((i, a, o) => (i[a] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Jb = Symbol.toStringTag;
nc[Jb] = ((e9) => (e9.mode = null, e9.typeIds = null, e9.children = null, e9.typeIdToChildIndex = null, e9.ArrayType = Int8Array, e9[Symbol.toStringTag] = "Union"))(nc.prototype);
class ic extends G {
  constructor(t) {
    super(x.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Qb = Symbol.toStringTag;
ic[Qb] = ((e9) => (e9.byteWidth = null, e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "FixedSizeBinary"))(ic.prototype);
class ac extends G {
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
Zb = Symbol.toStringTag;
ac[Zb] = ((e9) => (e9.children = null, e9.listSize = null, e9[Symbol.toStringTag] = "FixedSizeList"))(ac.prototype);
class oc extends G {
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
t0 = Symbol.toStringTag;
oc[t0] = ((e9) => (e9.children = null, e9.keysSorted = null, e9[Symbol.toStringTag] = "Map_"))(oc.prototype);
const U1 = /* @__PURE__ */ ((e9) => () => ++e9)(-1);
class ki extends G {
  constructor(t, r, n, i) {
    super(x.Dictionary), this.indices = r, this.dictionary = t, this.isOrdered = i || false, this.id = n == null ? U1() : Dt(n);
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
e0 = Symbol.toStringTag;
ki[e0] = ((e9) => (e9.id = null, e9.indices = null, e9.isOrdered = null, e9.dictionary = null, e9[Symbol.toStringTag] = "Dictionary"))(ki.prototype);
function jr(e9) {
  const t = e9;
  switch (e9.typeId) {
    case x.Decimal:
      return e9.bitWidth / 32;
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
    return z1(this, t, r);
  }
  getVisitFnByTypeId(t, r = true) {
    return _i(this, t, r);
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
function z1(e9, t, r = true) {
  return typeof t == "number" ? _i(e9, t, r) : typeof t == "string" && t in x ? _i(e9, x[t], r) : t && t instanceof G ? _i(e9, ny(t), r) : (t == null ? void 0 : t.type) && t.type instanceof G ? _i(e9, ny(t.type), r) : _i(e9, x.NONE, r);
}
function _i(e9, t, r = true) {
  let n = null;
  switch (t) {
    case x.Null:
      n = e9.visitNull;
      break;
    case x.Bool:
      n = e9.visitBool;
      break;
    case x.Int:
      n = e9.visitInt;
      break;
    case x.Int8:
      n = e9.visitInt8 || e9.visitInt;
      break;
    case x.Int16:
      n = e9.visitInt16 || e9.visitInt;
      break;
    case x.Int32:
      n = e9.visitInt32 || e9.visitInt;
      break;
    case x.Int64:
      n = e9.visitInt64 || e9.visitInt;
      break;
    case x.Uint8:
      n = e9.visitUint8 || e9.visitInt;
      break;
    case x.Uint16:
      n = e9.visitUint16 || e9.visitInt;
      break;
    case x.Uint32:
      n = e9.visitUint32 || e9.visitInt;
      break;
    case x.Uint64:
      n = e9.visitUint64 || e9.visitInt;
      break;
    case x.Float:
      n = e9.visitFloat;
      break;
    case x.Float16:
      n = e9.visitFloat16 || e9.visitFloat;
      break;
    case x.Float32:
      n = e9.visitFloat32 || e9.visitFloat;
      break;
    case x.Float64:
      n = e9.visitFloat64 || e9.visitFloat;
      break;
    case x.Utf8:
      n = e9.visitUtf8;
      break;
    case x.LargeUtf8:
      n = e9.visitLargeUtf8;
      break;
    case x.Binary:
      n = e9.visitBinary;
      break;
    case x.LargeBinary:
      n = e9.visitLargeBinary;
      break;
    case x.FixedSizeBinary:
      n = e9.visitFixedSizeBinary;
      break;
    case x.Date:
      n = e9.visitDate;
      break;
    case x.DateDay:
      n = e9.visitDateDay || e9.visitDate;
      break;
    case x.DateMillisecond:
      n = e9.visitDateMillisecond || e9.visitDate;
      break;
    case x.Timestamp:
      n = e9.visitTimestamp;
      break;
    case x.TimestampSecond:
      n = e9.visitTimestampSecond || e9.visitTimestamp;
      break;
    case x.TimestampMillisecond:
      n = e9.visitTimestampMillisecond || e9.visitTimestamp;
      break;
    case x.TimestampMicrosecond:
      n = e9.visitTimestampMicrosecond || e9.visitTimestamp;
      break;
    case x.TimestampNanosecond:
      n = e9.visitTimestampNanosecond || e9.visitTimestamp;
      break;
    case x.Time:
      n = e9.visitTime;
      break;
    case x.TimeSecond:
      n = e9.visitTimeSecond || e9.visitTime;
      break;
    case x.TimeMillisecond:
      n = e9.visitTimeMillisecond || e9.visitTime;
      break;
    case x.TimeMicrosecond:
      n = e9.visitTimeMicrosecond || e9.visitTime;
      break;
    case x.TimeNanosecond:
      n = e9.visitTimeNanosecond || e9.visitTime;
      break;
    case x.Decimal:
      n = e9.visitDecimal;
      break;
    case x.List:
      n = e9.visitList;
      break;
    case x.Struct:
      n = e9.visitStruct;
      break;
    case x.Union:
      n = e9.visitUnion;
      break;
    case x.DenseUnion:
      n = e9.visitDenseUnion || e9.visitUnion;
      break;
    case x.SparseUnion:
      n = e9.visitSparseUnion || e9.visitUnion;
      break;
    case x.Dictionary:
      n = e9.visitDictionary;
      break;
    case x.Interval:
      n = e9.visitInterval;
      break;
    case x.IntervalDayTime:
      n = e9.visitIntervalDayTime || e9.visitInterval;
      break;
    case x.IntervalYearMonth:
      n = e9.visitIntervalYearMonth || e9.visitInterval;
      break;
    case x.Duration:
      n = e9.visitDuration;
      break;
    case x.DurationSecond:
      n = e9.visitDurationSecond || e9.visitDuration;
      break;
    case x.DurationMillisecond:
      n = e9.visitDurationMillisecond || e9.visitDuration;
      break;
    case x.DurationMicrosecond:
      n = e9.visitDurationMicrosecond || e9.visitDuration;
      break;
    case x.DurationNanosecond:
      n = e9.visitDurationNanosecond || e9.visitDuration;
      break;
    case x.FixedSizeList:
      n = e9.visitFixedSizeList;
      break;
    case x.Map:
      n = e9.visitMap;
      break;
  }
  if (typeof n == "function") return n;
  if (!r) return () => null;
  throw new Error(`Unrecognized type '${x[t]}'`);
}
function ny(e9) {
  switch (e9.typeId) {
    case x.Null:
      return x.Null;
    case x.Int: {
      const { bitWidth: t, isSigned: r } = e9;
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
      switch (e9.precision) {
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
      switch (e9.unit) {
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
      switch (e9.unit) {
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
      switch (e9.unit) {
        case Xe.DAY:
          return x.DateDay;
        case Xe.MILLISECOND:
          return x.DateMillisecond;
      }
      return x.Date;
    case x.Interval:
      switch (e9.unit) {
        case Pr.DAY_TIME:
          return x.IntervalDayTime;
        case Pr.YEAR_MONTH:
          return x.IntervalYearMonth;
      }
      return x.Interval;
    case x.Duration:
      switch (e9.unit) {
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
      switch (e9.mode) {
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
  throw new Error(`Unrecognized type '${x[e9.typeId]}'`);
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
const r0 = new Float64Array(1), si = new Uint32Array(r0.buffer);
function n0(e9) {
  const t = (e9 & 31744) >> 10, r = (e9 & 1023) / 1024, n = Math.pow(-1, (e9 & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (r ? Number.NaN : 1 / 0);
    case 0:
      return n * (r ? 6103515625e-14 * r : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + r);
}
function W1(e9) {
  if (e9 !== e9) return 32256;
  r0[0] = e9;
  const t = (si[1] & 2147483648) >> 16 & 65535;
  let r = si[1] & 2146435072, n = 0;
  return r >= 1089470464 ? si[0] > 0 ? r = 31744 : (r = (r & 2080374784) >> 16, n = (si[1] & 1048575) >> 10) : r <= 1056964608 ? (n = 1048576 + (si[1] & 1048575), n = 1048576 + (n << (r >> 20) - 998) >> 21, r = 0) : (r = r - 1056964608 >> 10, n = (si[1] & 1048575) + 512 >> 10), t | r | n & 65535;
}
class Z extends dt {
}
function nt(e9) {
  return (t, r, n) => {
    if (t.setValid(r, n != null)) return e9(t, r, n);
  };
}
const V1 = (e9, t, r) => {
  e9[t] = Math.floor(r / 864e5);
}, i0 = (e9, t, r, n) => {
  if (r + 1 < t.length) {
    const i = Dt(t[r]), a = Dt(t[r + 1]);
    e9.set(n.subarray(0, a - i), i);
  }
}, q1 = ({ offset: e9, values: t }, r, n) => {
  const i = e9 + r;
  n ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, Yr = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, od = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, a0 = ({ values: e9 }, t, r) => {
  e9[t] = W1(r);
}, G1 = (e9, t, r) => {
  switch (e9.type.precision) {
    case pe.HALF:
      return a0(e9, t, r);
    case pe.SINGLE:
    case pe.DOUBLE:
      return od(e9, t, r);
  }
}, o0 = ({ values: e9 }, t, r) => {
  V1(e9, t, r.valueOf());
}, s0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r);
}, H1 = ({ stride: e9, values: t }, r, n) => {
  t.set(n.subarray(0, e9), e9 * r);
}, c0 = ({ values: e9, valueOffsets: t }, r, n) => i0(e9, t, r, n), u0 = ({ values: e9, valueOffsets: t }, r, n) => i0(e9, t, r, rd(n)), K1 = (e9, t, r) => {
  e9.type.unit === Xe.DAY ? o0(e9, t, r) : s0(e9, t, r);
}, l0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r / 1e3);
}, f0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r);
}, h0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r * 1e3);
}, d0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r * 1e6);
}, Y1 = (e9, t, r) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return l0(e9, t, r);
    case Q.MILLISECOND:
      return f0(e9, t, r);
    case Q.MICROSECOND:
      return h0(e9, t, r);
    case Q.NANOSECOND:
      return d0(e9, t, r);
  }
}, p0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, y0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, m0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, v0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, X1 = (e9, t, r) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return p0(e9, t, r);
    case Q.MILLISECOND:
      return y0(e9, t, r);
    case Q.MICROSECOND:
      return m0(e9, t, r);
    case Q.NANOSECOND:
      return v0(e9, t, r);
  }
}, J1 = ({ values: e9, stride: t }, r, n) => {
  e9.set(n.subarray(0, t), t * r);
}, Q1 = (e9, t, r) => {
  const n = e9.children[0], i = e9.valueOffsets, a = Je.getVisitFn(n);
  if (Array.isArray(r)) for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r[++o]);
  else for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r.get(++o));
}, Z1 = (e9, t, r) => {
  const n = e9.children[0], { valueOffsets: i } = e9, a = Je.getVisitFn(n);
  let { [t]: o, [t + 1]: s } = i;
  const c = r instanceof Map ? r.entries() : Object.entries(r);
  for (const u of c) if (a(n, o, u), ++o >= s) break;
}, tx = (e9, t) => (r, n, i, a) => n && r(n, e9, t[a]), ex = (e9, t) => (r, n, i, a) => n && r(n, e9, t.get(a)), rx = (e9, t) => (r, n, i, a) => n && r(n, e9, t.get(i.name)), nx = (e9, t) => (r, n, i, a) => n && r(n, e9, t[i.name]), ix = (e9, t, r) => {
  const n = e9.type.children.map((a) => Je.getVisitFn(a.type)), i = r instanceof Map ? rx(t, r) : r instanceof xt ? ex(t, r) : Array.isArray(r) ? tx(t, r) : nx(t, r);
  e9.type.children.forEach((a, o) => i(n[o], e9.children[o], a, o));
}, ax = (e9, t, r) => {
  e9.type.mode === ye.Dense ? g0(e9, t, r) : b0(e9, t, r);
}, g0 = (e9, t, r) => {
  const n = e9.type.typeIdToChildIndex[e9.typeIds[t]], i = e9.children[n];
  Je.visit(i, e9.valueOffsets[t], r);
}, b0 = (e9, t, r) => {
  const n = e9.type.typeIdToChildIndex[e9.typeIds[t]], i = e9.children[n];
  Je.visit(i, t, r);
}, ox = (e9, t, r) => {
  var n;
  (n = e9.dictionary) === null || n === void 0 || n.set(e9.values[t], r);
}, sx = (e9, t, r) => {
  e9.type.unit === Pr.DAY_TIME ? _0(e9, t, r) : w0(e9, t, r);
}, _0 = ({ values: e9 }, t, r) => {
  e9.set(r.subarray(0, 2), 2 * t);
}, w0 = ({ values: e9 }, t, r) => {
  e9[t] = r[0] * 12 + r[1] % 12;
}, S0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, O0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, x0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, A0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, cx = (e9, t, r) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return S0(e9, t, r);
    case Q.MILLISECOND:
      return O0(e9, t, r);
    case Q.MICROSECOND:
      return x0(e9, t, r);
    case Q.NANOSECOND:
      return A0(e9, t, r);
  }
}, ux = (e9, t, r) => {
  const { stride: n } = e9, i = e9.children[0], a = Je.getVisitFn(i);
  if (Array.isArray(r)) for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r[o]);
  else for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r.get(o));
};
Z.prototype.visitBool = nt(q1);
Z.prototype.visitInt = nt(Yr);
Z.prototype.visitInt8 = nt(Yr);
Z.prototype.visitInt16 = nt(Yr);
Z.prototype.visitInt32 = nt(Yr);
Z.prototype.visitInt64 = nt(Yr);
Z.prototype.visitUint8 = nt(Yr);
Z.prototype.visitUint16 = nt(Yr);
Z.prototype.visitUint32 = nt(Yr);
Z.prototype.visitUint64 = nt(Yr);
Z.prototype.visitFloat = nt(G1);
Z.prototype.visitFloat16 = nt(a0);
Z.prototype.visitFloat32 = nt(od);
Z.prototype.visitFloat64 = nt(od);
Z.prototype.visitUtf8 = nt(u0);
Z.prototype.visitLargeUtf8 = nt(u0);
Z.prototype.visitBinary = nt(c0);
Z.prototype.visitLargeBinary = nt(c0);
Z.prototype.visitFixedSizeBinary = nt(H1);
Z.prototype.visitDate = nt(K1);
Z.prototype.visitDateDay = nt(o0);
Z.prototype.visitDateMillisecond = nt(s0);
Z.prototype.visitTimestamp = nt(Y1);
Z.prototype.visitTimestampSecond = nt(l0);
Z.prototype.visitTimestampMillisecond = nt(f0);
Z.prototype.visitTimestampMicrosecond = nt(h0);
Z.prototype.visitTimestampNanosecond = nt(d0);
Z.prototype.visitTime = nt(X1);
Z.prototype.visitTimeSecond = nt(p0);
Z.prototype.visitTimeMillisecond = nt(y0);
Z.prototype.visitTimeMicrosecond = nt(m0);
Z.prototype.visitTimeNanosecond = nt(v0);
Z.prototype.visitDecimal = nt(J1);
Z.prototype.visitList = nt(Q1);
Z.prototype.visitStruct = nt(ix);
Z.prototype.visitUnion = nt(ax);
Z.prototype.visitDenseUnion = nt(g0);
Z.prototype.visitSparseUnion = nt(b0);
Z.prototype.visitDictionary = nt(ox);
Z.prototype.visitInterval = nt(sx);
Z.prototype.visitIntervalDayTime = nt(_0);
Z.prototype.visitIntervalYearMonth = nt(w0);
Z.prototype.visitDuration = nt(cx);
Z.prototype.visitDurationSecond = nt(S0);
Z.prototype.visitDurationMillisecond = nt(O0);
Z.prototype.visitDurationMicrosecond = nt(x0);
Z.prototype.visitDurationNanosecond = nt(A0);
Z.prototype.visitFixedSizeList = nt(ux);
Z.prototype.visitMap = nt(Z1);
const Je = new Z(), rr = Symbol.for("parent"), Ei = Symbol.for("rowIndex");
class sd {
  constructor(t, r) {
    return this[rr] = t, this[Ei] = r, new Proxy(this, new fx());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ei], r = this[rr], n = r.type.children, i = {};
    for (let a = -1, o = n.length; ++a < o; ) i[n[a].name] = Ee.visit(r.children[a], t);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${ao(t)}: ${ao(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new lx(this[rr], this[Ei]);
  }
}
class lx {
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
Object.defineProperties(sd.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [rr]: { writable: true, enumerable: false, configurable: false, value: null }, [Ei]: { writable: true, enumerable: false, configurable: false, value: -1 } });
class fx {
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
      const i = Ee.visit(t[rr].children[n], t[Ei]);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[rr].type.children.findIndex((a) => a.name === r);
    return i !== -1 ? (Je.visit(t[rr].children[i], t[Ei], n), Reflect.set(t, r, n)) : Reflect.has(t, r) || typeof r == "symbol" ? Reflect.set(t, r, n) : false;
  }
}
class H extends dt {
}
function tt(e9) {
  return (t, r) => t.getValid(r) ? e9(t, r) : null;
}
const hx = (e9, t) => 864e5 * e9[t], dx = (e9, t) => null, P0 = (e9, t, r) => {
  if (r + 1 >= t.length) return null;
  const n = Dt(t[r]), i = Dt(t[r + 1]);
  return e9.subarray(n, i);
}, px = ({ offset: e9, values: t }, r) => {
  const n = e9 + r;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, T0 = ({ values: e9 }, t) => hx(e9, t), I0 = ({ values: e9 }, t) => Dt(e9[t]), _n = ({ stride: e9, values: t }, r) => t[e9 * r], yx = ({ stride: e9, values: t }, r) => n0(t[e9 * r]), E0 = ({ values: e9 }, t) => e9[t], mx = ({ stride: e9, values: t }, r) => t.subarray(e9 * r, e9 * (r + 1)), $0 = ({ values: e9, valueOffsets: t }, r) => P0(e9, t, r), M0 = ({ values: e9, valueOffsets: t }, r) => {
  const n = P0(e9, t, r);
  return n !== null ? uf(n) : null;
}, vx = ({ values: e9 }, t) => e9[t], gx = ({ type: e9, values: t }, r) => e9.precision !== pe.HALF ? t[r] : n0(t[r]), bx = (e9, t) => e9.type.unit === Xe.DAY ? T0(e9, t) : I0(e9, t), D0 = ({ values: e9 }, t) => 1e3 * Dt(e9[t]), N0 = ({ values: e9 }, t) => Dt(e9[t]), C0 = ({ values: e9 }, t) => Db(e9[t], BigInt(1e3)), j0 = ({ values: e9 }, t) => Db(e9[t], BigInt(1e6)), _x = (e9, t) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return D0(e9, t);
    case Q.MILLISECOND:
      return N0(e9, t);
    case Q.MICROSECOND:
      return C0(e9, t);
    case Q.NANOSECOND:
      return j0(e9, t);
  }
}, B0 = ({ values: e9 }, t) => e9[t], k0 = ({ values: e9 }, t) => e9[t], R0 = ({ values: e9 }, t) => e9[t], L0 = ({ values: e9 }, t) => e9[t], wx = (e9, t) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return B0(e9, t);
    case Q.MILLISECOND:
      return k0(e9, t);
    case Q.MICROSECOND:
      return R0(e9, t);
    case Q.NANOSECOND:
      return L0(e9, t);
  }
}, Sx = ({ values: e9, stride: t }, r) => ad.decimal(e9.subarray(t * r, t * (r + 1))), Ox = (e9, t) => {
  const { valueOffsets: r, stride: n, children: i } = e9, { [t * n]: a, [t * n + 1]: o } = r, c = i[0].slice(a, o - a);
  return new xt([c]);
}, xx = (e9, t) => {
  const { valueOffsets: r, children: n } = e9, { [t]: i, [t + 1]: a } = r, o = n[0];
  return new cd(o.slice(i, a - i));
}, Ax = (e9, t) => new sd(e9, t), Px = (e9, t) => e9.type.mode === ye.Dense ? F0(e9, t) : U0(e9, t), F0 = (e9, t) => {
  const r = e9.type.typeIdToChildIndex[e9.typeIds[t]], n = e9.children[r];
  return Ee.visit(n, e9.valueOffsets[t]);
}, U0 = (e9, t) => {
  const r = e9.type.typeIdToChildIndex[e9.typeIds[t]], n = e9.children[r];
  return Ee.visit(n, t);
}, Tx = (e9, t) => {
  var r;
  return (r = e9.dictionary) === null || r === void 0 ? void 0 : r.get(e9.values[t]);
}, Ix = (e9, t) => e9.type.unit === Pr.DAY_TIME ? z0(e9, t) : W0(e9, t), z0 = ({ values: e9 }, t) => e9.subarray(2 * t, 2 * (t + 1)), W0 = ({ values: e9 }, t) => {
  const r = e9[t], n = new Int32Array(2);
  return n[0] = Math.trunc(r / 12), n[1] = Math.trunc(r % 12), n;
}, V0 = ({ values: e9 }, t) => e9[t], q0 = ({ values: e9 }, t) => e9[t], G0 = ({ values: e9 }, t) => e9[t], H0 = ({ values: e9 }, t) => e9[t], Ex = (e9, t) => {
  switch (e9.type.unit) {
    case Q.SECOND:
      return V0(e9, t);
    case Q.MILLISECOND:
      return q0(e9, t);
    case Q.MICROSECOND:
      return G0(e9, t);
    case Q.NANOSECOND:
      return H0(e9, t);
  }
}, $x = (e9, t) => {
  const { stride: r, children: n } = e9, a = n[0].slice(t * r, r);
  return new xt([a]);
};
H.prototype.visitNull = tt(dx);
H.prototype.visitBool = tt(px);
H.prototype.visitInt = tt(vx);
H.prototype.visitInt8 = tt(_n);
H.prototype.visitInt16 = tt(_n);
H.prototype.visitInt32 = tt(_n);
H.prototype.visitInt64 = tt(E0);
H.prototype.visitUint8 = tt(_n);
H.prototype.visitUint16 = tt(_n);
H.prototype.visitUint32 = tt(_n);
H.prototype.visitUint64 = tt(E0);
H.prototype.visitFloat = tt(gx);
H.prototype.visitFloat16 = tt(yx);
H.prototype.visitFloat32 = tt(_n);
H.prototype.visitFloat64 = tt(_n);
H.prototype.visitUtf8 = tt(M0);
H.prototype.visitLargeUtf8 = tt(M0);
H.prototype.visitBinary = tt($0);
H.prototype.visitLargeBinary = tt($0);
H.prototype.visitFixedSizeBinary = tt(mx);
H.prototype.visitDate = tt(bx);
H.prototype.visitDateDay = tt(T0);
H.prototype.visitDateMillisecond = tt(I0);
H.prototype.visitTimestamp = tt(_x);
H.prototype.visitTimestampSecond = tt(D0);
H.prototype.visitTimestampMillisecond = tt(N0);
H.prototype.visitTimestampMicrosecond = tt(C0);
H.prototype.visitTimestampNanosecond = tt(j0);
H.prototype.visitTime = tt(wx);
H.prototype.visitTimeSecond = tt(B0);
H.prototype.visitTimeMillisecond = tt(k0);
H.prototype.visitTimeMicrosecond = tt(R0);
H.prototype.visitTimeNanosecond = tt(L0);
H.prototype.visitDecimal = tt(Sx);
H.prototype.visitList = tt(Ox);
H.prototype.visitStruct = tt(Ax);
H.prototype.visitUnion = tt(Px);
H.prototype.visitDenseUnion = tt(F0);
H.prototype.visitSparseUnion = tt(U0);
H.prototype.visitDictionary = tt(Tx);
H.prototype.visitInterval = tt(Ix);
H.prototype.visitIntervalDayTime = tt(z0);
H.prototype.visitIntervalYearMonth = tt(W0);
H.prototype.visitDuration = tt(Ex);
H.prototype.visitDurationSecond = tt(V0);
H.prototype.visitDurationMillisecond = tt(q0);
H.prototype.visitDurationMicrosecond = tt(G0);
H.prototype.visitDurationNanosecond = tt(H0);
H.prototype.visitFixedSizeList = tt($x);
H.prototype.visitMap = tt(xx);
const Ee = new H(), wi = Symbol.for("keys"), $i = Symbol.for("vals"), Si = Symbol.for("kKeysAsStrings"), yf = Symbol.for("_kKeysAsStrings");
class cd {
  constructor(t) {
    return this[wi] = new xt([t.children[0]]).memoize(), this[$i] = t.children[1], new Proxy(this, new Dx());
  }
  get [Si]() {
    return this[yf] || (this[yf] = Array.from(this[wi].toArray(), String));
  }
  [Symbol.iterator]() {
    return new Mx(this[wi], this[$i]);
  }
  get size() {
    return this[wi].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[wi], r = this[$i], n = {};
    for (let i = -1, a = t.length; ++i < a; ) n[t.get(i)] = Ee.visit(r, i);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${ao(t)}: ${ao(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Mx {
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
class Dx {
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
    return t[Si];
  }
  has(t, r) {
    return t[Si].includes(r);
  }
  getOwnPropertyDescriptor(t, r) {
    if (t[Si].indexOf(r) !== -1) return { writable: true, enumerable: true, configurable: true };
  }
  get(t, r) {
    if (Reflect.has(t, r)) return t[r];
    const n = t[Si].indexOf(r);
    if (n !== -1) {
      const i = Ee.visit(Reflect.get(t, $i), n);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[Si].indexOf(r);
    return i !== -1 ? (Je.visit(Reflect.get(t, $i), i, n), Reflect.set(t, r, n)) : Reflect.has(t, r) ? Reflect.set(t, r, n) : false;
  }
}
Object.defineProperties(cd.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [wi]: { writable: true, enumerable: false, configurable: false, value: null }, [$i]: { writable: true, enumerable: false, configurable: false, value: null }, [yf]: { writable: true, enumerable: false, configurable: false, value: null } });
let iy;
function K0(e9, t, r, n) {
  const { length: i = 0 } = e9;
  let a = typeof t != "number" ? 0 : t, o = typeof r != "number" ? i : r;
  return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (iy = a, a = o, o = iy), o > i && (o = i), n ? n(e9, a, o) : [a, o];
}
const ud = (e9, t) => e9 < 0 ? t + e9 : e9, ay = (e9) => e9 !== e9;
function da(e9) {
  if (typeof e9 !== "object" || e9 === null) return ay(e9) ? ay : (r) => r === e9;
  if (e9 instanceof Date) {
    const r = e9.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === r : false;
  }
  return ArrayBuffer.isView(e9) ? (r) => r ? $1(e9, r) : false : e9 instanceof Map ? Cx(e9) : Array.isArray(e9) ? Nx(e9) : e9 instanceof xt ? jx(e9) : Bx(e9, true);
}
function Nx(e9) {
  const t = [];
  for (let r = -1, n = e9.length; ++r < n; ) t[r] = da(e9[r]);
  return Ou(t);
}
function Cx(e9) {
  let t = -1;
  const r = [];
  for (const n of e9.values()) r[++t] = da(n);
  return Ou(r);
}
function jx(e9) {
  const t = [];
  for (let r = -1, n = e9.length; ++r < n; ) t[r] = da(e9.get(r));
  return Ou(t);
}
function Bx(e9, t = false) {
  const r = Object.keys(e9);
  if (!t && r.length === 0) return () => false;
  const n = [];
  for (let i = -1, a = r.length; ++i < a; ) n[i] = da(e9[r[i]]);
  return Ou(n, r);
}
function Ou(e9, t) {
  return (r) => {
    if (!r || typeof r != "object") return false;
    switch (r.constructor) {
      case Array:
        return kx(e9, r);
      case Map:
        return oy(e9, r, r.keys());
      case cd:
      case sd:
      case Object:
      case void 0:
        return oy(e9, r, t || Object.keys(r));
    }
    return r instanceof xt ? Rx(e9, r) : false;
  };
}
function kx(e9, t) {
  const r = e9.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e9[n](t[n])) return false;
  return true;
}
function Rx(e9, t) {
  const r = e9.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e9[n](t.get(n))) return false;
  return true;
}
function oy(e9, t, r) {
  const n = r[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const s = e9.length;
  let c = a.next(), u = n.next(), l = i.next();
  for (; o < s && !u.done && !l.done && !c.done && !(u.value !== l.value || !e9[o](c.value)); ++o, u = n.next(), l = i.next(), c = a.next()) ;
  return o === s && u.done && l.done && c.done ? true : (n.return && n.return(), i.return && i.return(), a.return && a.return(), false);
}
function Y0(e9, t, r, n) {
  return (r & 1 << n) !== 0;
}
function Lx(e9, t, r, n) {
  return (r & 1 << n) >> n;
}
function sc(e9, t, r) {
  const n = r.byteLength + 7 & -8;
  if (e9 > 0 || r.byteLength < n) {
    const i = new Uint8Array(n);
    return i.set(e9 % 8 === 0 ? r.subarray(e9 >> 3) : cc(new ld(r, e9, t, null, Y0)).subarray(0, n)), i;
  }
  return r;
}
function cc(e9) {
  const t = [];
  let r = 0, n = 0, i = 0;
  for (const o of e9) o && (i |= 1 << n), ++n === 8 && (t[r++] = i, i = n = 0);
  (r === 0 || n > 0) && (t[r++] = i);
  const a = new Uint8Array(t.length + 7 & -8);
  return a.set(t), a;
}
class ld {
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
function mf(e9, t, r) {
  if (r - t <= 0) return 0;
  if (r - t < 8) {
    let a = 0;
    for (const o of new ld(e9, t, r - t, e9, Lx)) a += o;
    return a;
  }
  const n = r >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return mf(e9, t, i) + mf(e9, n, r) + Fx(e9, i >> 3, n - i >> 3);
}
function Fx(e9, t, r) {
  let n = 0, i = Math.trunc(t);
  const a = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), o = r === void 0 ? e9.byteLength : i + r;
  for (; o - i >= 4; ) n += wl(a.getUint32(i)), i += 4;
  for (; o - i >= 2; ) n += wl(a.getUint16(i)), i += 2;
  for (; o - i >= 1; ) n += wl(a.getUint8(i)), i += 1;
  return n;
}
function wl(e9) {
  let t = Math.trunc(e9);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Ux = -1;
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
    return t <= Ux && (r = this.nullBitmap) && (this._nullCount = t = r.length === 0 ? 0 : this.length - mf(r, this.offset, this.offset + this.length)), t;
  }
  constructor(t, r, n, i, a, o = [], s) {
    this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(r || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
    let c;
    a instanceof Tt ? (this.stride = a.stride, this.values = a.values, this.typeIds = a.typeIds, this.nullBitmap = a.nullBitmap, this.valueOffsets = a.valueOffsets) : (this.stride = jr(t), a && ((c = a[0]) && (this.valueOffsets = c), (c = a[1]) && (this.values = c), (c = a[2]) && (this.nullBitmap = c), (c = a[3]) && (this.typeIds = c)));
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
      (!a || a.byteLength <= l) && (a = new Uint8Array((o + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (a.set(sc(o, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: a })) : Object.assign(this, { nullBitmap: a, _nullCount: 0 }));
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
    i[r >> 3] = (1 << r - (r & -8)) - 1, n > 0 && i.set(sc(this.offset, r, this.nullBitmap), 0);
    const a = this.buffers;
    return a[Cr.VALIDITY] = i, this.clone(this.type, 0, t, n + (t - r), a);
  }
  _sliceBuffers(t, r, n, i) {
    let a;
    const { buffers: o } = this;
    return (a = o[Cr.TYPE]) && (o[Cr.TYPE] = a.subarray(t, t + r)), (a = o[Cr.OFFSET]) && (o[Cr.OFFSET] = a.subarray(t, t + r + 1)) || (a = o[Cr.DATA]) && (o[Cr.DATA] = i === 6 ? a : a.subarray(n * t, n * (t + r))), o;
  }
  _sliceChildren(t, r, n) {
    return t.map((i) => i.slice(r, n));
  }
}
Tt.prototype.children = Object.freeze([]);
class Ja extends dt {
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
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = $a(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Hp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = $a(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Hp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDate(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTimestamp(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTime(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDecimal(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i } = t, a = vt(t.nullBitmap), o = $a(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
  visitStruct(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = vt(t.nullBitmap), { length: o = i.reduce((c, { length: u }) => Math.max(c, u), 0), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], i);
  }
  visitUnion(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = Et(r.ArrayType, t.typeIds), { ["length"]: o = a.length, ["nullCount"]: s = -1 } = t;
    if (G.isSparseUnion(r)) return new Tt(r, n, o, s, [void 0, void 0, void 0, a], i);
    const c = $a(t.valueOffsets);
    return new Tt(r, n, o, s, [c, void 0, void 0, a], i);
  }
  visitDictionary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.indices.ArrayType, t.data), { ["dictionary"]: o = new xt([new Ja().visit({ type: r.dictionary })]) } = t, { ["length"]: s = a.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [void 0, a, i], [], o);
  }
  visitInterval(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDuration(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ja().visit({ type: r.valueType }) } = t, a = vt(t.nullBitmap), { ["length"]: o = i.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], [i]);
  }
  visitMap(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ja().visit({ type: r.childType }) } = t, a = vt(t.nullBitmap), o = $a(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
}
const zx = new Ja();
function pt(e9) {
  return zx.visit(e9);
}
class sy {
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
function Wx(e9) {
  return e9.some((t) => t.nullable);
}
function X0(e9) {
  return e9.reduce((t, r) => t + r.nullCount, 0);
}
function J0(e9) {
  return e9.reduce((t, r, n) => (t[n + 1] = t[n] + r.length, t), new Uint32Array(e9.length + 1));
}
function Q0(e9, t, r, n) {
  const i = [];
  for (let a = -1, o = e9.length; ++a < o; ) {
    const s = e9[a], c = t[a], { length: u } = s;
    if (c >= n) break;
    if (r >= c + u) continue;
    if (c >= r && c + u <= n) {
      i.push(s);
      continue;
    }
    const l = Math.max(0, r - c), f = Math.min(n - c, u);
    i.push(s.slice(l, f - l));
  }
  return i.length === 0 && i.push(e9[0].slice(0, 0)), i;
}
function fd(e9, t, r, n) {
  let i = 0, a = 0, o = t.length - 1;
  do {
    if (i >= o - 1) return r < t[o] ? n(e9, i, r - t[i]) : null;
    a = i + Math.trunc((o - i) * 0.5), r < t[a] ? o = a : i = a;
  } while (i < o);
}
function hd(e9, t) {
  return e9.getValid(t);
}
function uc(e9) {
  function t(r, n, i) {
    return e9(r[n], i);
  }
  return function(r) {
    const n = this.data;
    return fd(n, this._offsets, r, t);
  };
}
function Z0(e9) {
  let t;
  function r(n, i, a) {
    return e9(n[i], a, t);
  }
  return function(n, i) {
    const a = this.data;
    t = i;
    const o = fd(a, this._offsets, n, r);
    return t = void 0, o;
  };
}
function t_(e9) {
  let t;
  function r(n, i, a) {
    let o = a, s = 0, c = 0;
    for (let u = i - 1, l = n.length; ++u < l; ) {
      const f = n[u];
      if (~(s = e9(f, t, o))) return c + s;
      o = 0, c += f.length;
    }
    return -1;
  }
  return function(n, i) {
    t = n;
    const a = this.data, o = typeof i != "number" ? r(a, 0, 0) : fd(a, this._offsets, i, r);
    return t = void 0, o;
  };
}
class K extends dt {
}
function Vx(e9, t) {
  return t === null && e9.length > 0 ? 0 : -1;
}
function qx(e9, t) {
  const { nullBitmap: r } = e9;
  if (!r || e9.nullCount <= 0) return -1;
  let n = 0;
  for (const i of new ld(r, e9.offset + (t || 0), e9.length, r, Y0)) {
    if (!i) return n;
    ++n;
  }
  return -1;
}
function at(e9, t, r) {
  if (t === void 0) return -1;
  if (t === null) switch (e9.typeId) {
    case x.Union:
      break;
    case x.Dictionary:
      break;
    default:
      return qx(e9, r);
  }
  const n = Ee.getVisitFn(e9), i = da(t);
  for (let a = (r || 0) - 1, o = e9.length; ++a < o; ) if (i(n(e9, a))) return a;
  return -1;
}
function e_(e9, t, r) {
  const n = Ee.getVisitFn(e9), i = da(t);
  for (let a = (r || 0) - 1, o = e9.length; ++a < o; ) if (i(n(e9, a))) return a;
  return -1;
}
K.prototype.visitNull = Vx;
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
K.prototype.visitDenseUnion = e_;
K.prototype.visitSparseUnion = e_;
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
const lc = new K();
class Y extends dt {
}
function et(e9) {
  const { type: t } = e9;
  if (e9.nullCount === 0 && e9.stride === 1 && (G.isInt(t) && t.bitWidth !== 64 || G.isTime(t) && t.bitWidth !== 64 || G.isFloat(t) && t.precision !== pe.HALF)) return new sy(e9.data.length, (n) => {
    const i = e9.data[n];
    return i.values.subarray(0, i.length)[Symbol.iterator]();
  });
  let r = 0;
  return new sy(e9.data.length, (n) => {
    const a = e9.data[n].length, o = e9.slice(r, r + a);
    return r += a, new Gx(o);
  });
}
class Gx {
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
const dd = new Y();
var r_;
const n_ = {}, i_ = {};
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
        const { get: s, set: c, indexOf: u } = n_[o.typeId], l = a[0];
        this.isValid = (f) => hd(l, f), this.get = (f) => s(l, f), this.set = (f, h) => c(l, f, h), this.indexOf = (f) => u(l, f), this._offsets = [0, l.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, i_[o.typeId]), this._offsets = J0(a);
        break;
    }
    this.data = a, this.type = o, this.stride = jr(o), this.numChildren = (i = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets.at(-1);
  }
  get byteLength() {
    return this.data.reduce((t, r) => t + r.byteLength, 0);
  }
  get nullable() {
    return Wx(this.data);
  }
  get nullCount() {
    return X0(this.data);
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
    return this.get(ud(t, this.length));
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
    return dd.visit(this);
  }
  concat(...t) {
    return new xt(this.data.concat(t.flatMap((r) => r.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(t, r) {
    return new xt(K0(this, t, r, ({ data: n, _offsets: i }, a, o) => Q0(n, i, a, o)));
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
      const t = new fc(this.data[0].dictionary), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return new fc(this);
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
r_ = Symbol.toStringTag;
xt[r_] = ((e9) => {
  e9.type = G.prototype, e9.data = [], e9.length = 0, e9.stride = 1, e9.numChildren = 0, e9._offsets = new Uint32Array([0]), e9[Symbol.isConcatSpreadable] = true;
  const t = Object.keys(x).map((r) => x[r]).filter((r) => typeof r == "number" && r !== x.NONE);
  for (const r of t) {
    const n = Ee.getVisitFnByTypeId(r), i = Je.getVisitFnByTypeId(r), a = lc.getVisitFnByTypeId(r);
    n_[r] = { get: n, set: i, indexOf: a }, i_[r] = Object.create(e9, { isValid: { value: uc(hd) }, get: { value: uc(Ee.getVisitFnByTypeId(r)) }, set: { value: Z0(Je.getVisitFnByTypeId(r)) }, indexOf: { value: t_(lc.getVisitFnByTypeId(r)) } });
  }
  return "Vector";
})(xt.prototype);
class fc extends xt {
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
    } }), Object.defineProperty(this, "slice", { value: (o, s) => new fc(i.call(this, o, s)) }), Object.defineProperty(this, "isMemoized", { value: true }), Object.defineProperty(this, "unmemoize", { value: () => new xt(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
  }
}
class vf {
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
    return n ? (r || new vf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, r) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (r || new vf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
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
    this.fields = t || [], this.metadata = r || /* @__PURE__ */ new Map(), n || (n = gf(this.fields)), this.dictionaries = n, this.metadataVersion = i;
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
    const r = t[0] instanceof At ? t[0] : Array.isArray(t[0]) ? new At(t[0]) : new At(t), n = [...this.fields], i = ds(ds(/* @__PURE__ */ new Map(), this.metadata), r.metadata), a = r.fields.filter((s) => {
      const c = n.findIndex((u) => u.name === s.name);
      return ~c ? (n[c] = s.clone({ metadata: ds(ds(/* @__PURE__ */ new Map(), n[c].metadata), s.metadata) })) && false : true;
    }), o = gf(a, /* @__PURE__ */ new Map());
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
function ds(e9, t) {
  return new Map([...e9 || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function gf(e9, t = /* @__PURE__ */ new Map()) {
  for (let r = -1, n = e9.length; ++r < n; ) {
    const a = e9[r].type;
    if (G.isDictionary(a)) {
      if (!t.has(a.id)) t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && gf(a.children, t);
  }
  return t;
}
var Hx = Ib, Kx = ji;
class uo {
  static decode(t) {
    t = new Kx(vt(t));
    const r = Ne.getRootAsFooter(t), n = At.decode(r.schema(), /* @__PURE__ */ new Map(), r.version());
    return new Yx(n, r);
  }
  static encode(t) {
    const r = new Hx(), n = At.encode(r, t.schema);
    Ne.startRecordBatchesVector(r, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse()) vn.encode(r, o);
    const i = r.endVector();
    Ne.startDictionariesVector(r, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse()) vn.encode(r, o);
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
class Yx extends uo {
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
      if (r) return vn.decode(r);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const r = this._footer.dictionaries(t);
      if (r) return vn.decode(r);
    }
    return null;
  }
}
class vn {
  static decode(t) {
    return new vn(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  static encode(t, r) {
    const { metaDataLength: n } = r, i = BigInt(r.offset), a = BigInt(r.bodyLength);
    return vf.createBlock(t, i, n, a);
  }
  constructor(t, r, n) {
    this.metaDataLength = t, this.offset = Dt(n), this.bodyLength = Dt(r);
  }
}
const zt = Object.freeze({ done: true, value: void 0 });
class cy {
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
class pd {
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
class Xx extends pd {
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
class js extends Xx {
  write(t) {
    if ((t = vt(t)).byteLength > 0) return super.write(t);
  }
  toString(t = false) {
    return t ? uf(this.toUint8Array(true)) : this.toUint8Array(false).then(uf);
  }
  toUint8Array(t = false) {
    return t ? Ar(this._values)[0] : ot(this, void 0, void 0, function* () {
      var r, n, i, a;
      const o = [];
      let s = 0;
      try {
        for (var c = true, u = Un(this), l; l = yield u.next(), r = l.done, !r; c = true) {
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
class hc {
  constructor(t) {
    t && (this.source = new Jx(Ve.fromIterable(t)));
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
    t instanceof Ri ? this.source = t.source : t instanceof js ? this.source = new $n(Ve.fromAsyncIterable(t)) : xb(t) ? this.source = new $n(Ve.fromNodeStream(t)) : nd(t) ? this.source = new $n(Ve.fromDOMStream(t)) : Ob(t) ? this.source = new $n(Ve.fromDOMStream(t.body)) : Xo(t) ? this.source = new $n(Ve.fromIterable(t)) : Gn(t) ? this.source = new $n(Ve.fromAsyncIterable(t)) : ha(t) && (this.source = new $n(Ve.fromAsyncIterable(t)));
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
class Jx {
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
class $n {
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
class uy extends hc {
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
class dc extends Ri {
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
const Qx = 65536;
function Oi(e9) {
  return e9 < 0 && (e9 = 4294967295 + e9 + 1), `0x${e9.toString(16)}`;
}
const Li = 8, yd = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
class a_ {
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
    return i = r[2] * n[3], a += i, i = r[3] * n[2] >>> 0, a += i, this.buffer[0] += a << 16, this.buffer[1] = a >>> 0 < i ? Qx : 0, this.buffer[1] += a >>> 16, this.buffer[1] += r[1] * n[3] + r[2] * n[2] + r[3] * n[1], this.buffer[1] += r[0] * n[3] + r[1] * n[2] + r[2] * n[1] + r[3] * n[0] << 16, this;
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
    return `${Oi(this.buffer[1])} ${Oi(this.buffer[0])}`;
  }
}
class It extends a_ {
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
      const o = Li < n - a ? Li : n - a, s = new It(new Uint32Array([Number.parseInt(t.slice(a, a + o), 10), 0])), c = new It(new Uint32Array([yd[o], 0]));
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
class Oe extends a_ {
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
      const s = Li < i - o ? Li : i - o, c = new Oe(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0])), u = new Oe(new Uint32Array([yd[s], 0]));
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
    return `${Oi(this.buffer[3])} ${Oi(this.buffer[2])} ${Oi(this.buffer[1])} ${Oi(this.buffer[0])}`;
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
      const s = Li < i - o ? Li : i - o, c = new pr(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0, 0, 0])), u = new pr(new Uint32Array([yd[s], 0, 0, 0]));
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
class o_ extends dt {
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
class Zx extends o_ {
  constructor(t, r, n, i, a) {
    super(new Uint8Array(0), r, n, i, a), this.sources = t;
  }
  readNullBitmap(t, r, { offset: n } = this.nextBufferRange()) {
    return r <= 0 ? new Uint8Array(0) : cc(this.sources[n]);
  }
  readOffsets(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.OffsetArrayType, this.sources[r]));
  }
  readTypeIds(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.ArrayType, this.sources[r]));
  }
  readData(t, { offset: r } = this.nextBufferRange()) {
    const { sources: n } = this;
    return G.isTimestamp(t) || (G.isInt(t) || G.isTime(t)) && t.bitWidth === 64 || G.isDuration(t) || G.isDate(t) && t.unit === Xe.MILLISECOND ? Et(Uint8Array, Oe.convertArray(n[r])) : G.isDecimal(t) ? Et(Uint8Array, pr.convertArray(n[r])) : G.isBinary(t) || G.isLargeBinary(t) || G.isFixedSizeBinary(t) ? tA(n[r]) : G.isBool(t) ? cc(n[r]) : G.isUtf8(t) || G.isLargeUtf8(t) ? rd(n[r].join("")) : Et(Uint8Array, Et(t.ArrayType, n[r].map((i) => +i)));
  }
}
function tA(e9) {
  const t = e9.join(""), r = new Uint8Array(t.length / 2);
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
function _e(e9, t) {
  return t instanceof e9.constructor;
}
function ti(e9, t) {
  return e9 === t || _e(e9, t);
}
function Xr(e9, t) {
  return e9 === t || _e(e9, t) && e9.bitWidth === t.bitWidth && e9.isSigned === t.isSigned;
}
function xu(e9, t) {
  return e9 === t || _e(e9, t) && e9.precision === t.precision;
}
function eA(e9, t) {
  return e9 === t || _e(e9, t) && e9.byteWidth === t.byteWidth;
}
function md(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function Jo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit && e9.timezone === t.timezone;
}
function Qo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit && e9.bitWidth === t.bitWidth;
}
function rA(e9, t) {
  return e9 === t || _e(e9, t) && e9.children.length === t.children.length && gn.compareManyFields(e9.children, t.children);
}
function nA(e9, t) {
  return e9 === t || _e(e9, t) && e9.children.length === t.children.length && gn.compareManyFields(e9.children, t.children);
}
function vd(e9, t) {
  return e9 === t || _e(e9, t) && e9.mode === t.mode && e9.typeIds.every((r, n) => r === t.typeIds[n]) && gn.compareManyFields(e9.children, t.children);
}
function iA(e9, t) {
  return e9 === t || _e(e9, t) && e9.id === t.id && e9.isOrdered === t.isOrdered && gn.visit(e9.indices, t.indices) && gn.visit(e9.dictionary, t.dictionary);
}
function gd(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function Zo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function aA(e9, t) {
  return e9 === t || _e(e9, t) && e9.listSize === t.listSize && e9.children.length === t.children.length && gn.compareManyFields(e9.children, t.children);
}
function oA(e9, t) {
  return e9 === t || _e(e9, t) && e9.keysSorted === t.keysSorted && e9.children.length === t.children.length && gn.compareManyFields(e9.children, t.children);
}
X.prototype.visitNull = ti;
X.prototype.visitBool = ti;
X.prototype.visitInt = Xr;
X.prototype.visitInt8 = Xr;
X.prototype.visitInt16 = Xr;
X.prototype.visitInt32 = Xr;
X.prototype.visitInt64 = Xr;
X.prototype.visitUint8 = Xr;
X.prototype.visitUint16 = Xr;
X.prototype.visitUint32 = Xr;
X.prototype.visitUint64 = Xr;
X.prototype.visitFloat = xu;
X.prototype.visitFloat16 = xu;
X.prototype.visitFloat32 = xu;
X.prototype.visitFloat64 = xu;
X.prototype.visitUtf8 = ti;
X.prototype.visitLargeUtf8 = ti;
X.prototype.visitBinary = ti;
X.prototype.visitLargeBinary = ti;
X.prototype.visitFixedSizeBinary = eA;
X.prototype.visitDate = md;
X.prototype.visitDateDay = md;
X.prototype.visitDateMillisecond = md;
X.prototype.visitTimestamp = Jo;
X.prototype.visitTimestampSecond = Jo;
X.prototype.visitTimestampMillisecond = Jo;
X.prototype.visitTimestampMicrosecond = Jo;
X.prototype.visitTimestampNanosecond = Jo;
X.prototype.visitTime = Qo;
X.prototype.visitTimeSecond = Qo;
X.prototype.visitTimeMillisecond = Qo;
X.prototype.visitTimeMicrosecond = Qo;
X.prototype.visitTimeNanosecond = Qo;
X.prototype.visitDecimal = ti;
X.prototype.visitList = rA;
X.prototype.visitStruct = nA;
X.prototype.visitUnion = vd;
X.prototype.visitDenseUnion = vd;
X.prototype.visitSparseUnion = vd;
X.prototype.visitDictionary = iA;
X.prototype.visitInterval = gd;
X.prototype.visitIntervalDayTime = gd;
X.prototype.visitIntervalYearMonth = gd;
X.prototype.visitDuration = Zo;
X.prototype.visitDurationSecond = Zo;
X.prototype.visitDurationMillisecond = Zo;
X.prototype.visitDurationMicrosecond = Zo;
X.prototype.visitDurationNanosecond = Zo;
X.prototype.visitFixedSizeList = aA;
X.prototype.visitMap = oA;
const gn = new X();
function bf(e9, t) {
  return gn.compareSchemas(e9, t);
}
function Sl(e9, t) {
  return sA(e9, t.map((r) => r.data.concat()));
}
function sA(e9, t) {
  const r = [...e9.fields], n = [], i = { numBatches: t.reduce((f, h) => Math.max(f, h.length), 0) };
  let a = 0, o = 0, s = -1;
  const c = t.length;
  let u, l = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < c; ) l[s] = u = t[s].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (l = cA(r, o, l, t, i), o > 0 && (n[a++] = pt({ type: new ve(r), length: o, nullCount: 0, children: l.slice() })));
  }
  return [e9 = e9.assign(r), n.map((f) => new Ae(e9, f))];
}
function cA(e9, t, r, n, i) {
  var a;
  const o = (t + 63 & -64) >> 3;
  for (let s = -1, c = n.length; ++s < c; ) {
    const u = r[s], l = u == null ? void 0 : u.length;
    if (l >= t) l === t ? r[s] = u : (r[s] = u.slice(0, t), i.numBatches = Math.max(i.numBatches, n[s].unshift(u.slice(t, l - t))));
    else {
      const f = e9[s];
      e9[s] = f.clone({ nullable: true }), r[s] = (a = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(t)) !== null && a !== void 0 ? a : pt({ type: f.type, length: t, nullCount: t, nullBitmap: new Uint8Array(o) });
    }
  }
  return r;
}
var s_;
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
            const u = Object.keys(c), l = u.map((d) => new xt([c[d]])), f = i ?? new At(u.map((d, y) => new Ft(String(d), l[y].type, l[y].nullable))), [, h] = Sl(f, l);
            return h.length === 0 ? [new Ae(c)] : h;
          }
        }
      }
      return [];
    }, s = t.flatMap((c) => o(c));
    if (i = (n = i ?? ((r = s[0]) === null || r === void 0 ? void 0 : r.schema)) !== null && n !== void 0 ? n : new At([]), !(i instanceof At)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of s) {
      if (!(c instanceof Ae)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!bf(i, c.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = s, this._offsets = a ?? J0(this.data);
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
    return this._nullCount === -1 && (this._nullCount = X0(this.data)), this._nullCount;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(ud(t, this.numRows));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  [Symbol.iterator]() {
    return this.batches.length > 0 ? dd.visit(new xt(this.data)) : new Array(0)[Symbol.iterator]();
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
    [t, r] = K0({ length: this.numRows }, t, r);
    const i = Q0(this.data, this._offsets, t, r);
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
      r || (r = new xt([pt({ type: new mn(), length: this.numRows })]));
      const a = n.fields.slice(), o = a[t].clone({ type: r.type }), s = this.schema.fields.map((c, u) => this.getChildAt(u));
      [a[t], s[t]] = [o, r], [n, i] = Sl(n, s);
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
    return new me(...Sl(a, o));
  }
}
s_ = Symbol.toStringTag;
me[s_] = ((e9) => (e9.schema = null, e9.batches = [], e9._offsets = new Uint32Array([0]), e9._nullCount = -1, e9[Symbol.isConcatSpreadable] = true, e9.isValid = uc(hd), e9.get = uc(Ee.getVisitFn(x.Struct)), e9.set = Z0(Je.getVisitFn(x.Struct)), e9.indexOf = t_(lc.getVisitFn(x.Struct)), "Table"))(me.prototype);
var c_;
let Ae = class Ya {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof At)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([, this.data = pt({ nullCount: 0, type: new ve(this.schema.fields), children: this.schema.fields.map((r) => pt({ type: r.type, nullCount: 0 })) })] = t, !(this.data instanceof Tt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = ly(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [r] = t, { fields: n, children: i, length: a } = Object.keys(r).reduce((c, u, l) => (c.children[l] = r[u], c.length = Math.max(c.length, r[u].length), c.fields[l] = Ft.new({ name: u, type: r[u].type, nullable: true }), c), { length: 0, fields: new Array(), children: new Array() }), o = new At(n), s = pt({ type: new ve(n), length: a, children: i, nullCount: 0 });
        [this.schema, this.data] = ly(o, s.children, a);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = u_(this.schema.fields, this.data.children));
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
    return this.get(ud(t, this.numRows));
  }
  set(t, r) {
    return Je.visit(this.data, t, r);
  }
  indexOf(t, r) {
    return lc.visit(this.data, t, r);
  }
  [Symbol.iterator]() {
    return dd.visit(new xt([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...t) {
    return new me(this.schema, [this, ...t]);
  }
  slice(t, r) {
    const [n] = new xt([this.data]).slice(t, r).data;
    return new Ya(this.schema, n);
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
      r || (r = new xt([pt({ type: new mn(), length: this.numRows })]));
      const a = n.fields.slice(), o = i.children.slice(), s = a[t].clone({ type: r.type });
      [a[t], o[t]] = [s, r.data[0]], n = new At(a, new Map(this.schema.metadata)), i = pt({ type: new ve(a), children: o });
    }
    return new Ya(n, i);
  }
  select(t) {
    const r = this.schema.select(t), n = new ve(r.fields), i = [];
    for (const a of t) {
      const o = this.schema.fields.findIndex((s) => s.name === a);
      ~o && (i[o] = this.data.children[o]);
    }
    return new Ya(r, pt({ type: n, length: this.numRows, children: i }));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = t.map((a) => this.data.children[a]).filter(Boolean), i = pt({ type: new ve(r.fields), length: this.numRows, children: n });
    return new Ya(r, i);
  }
};
c_ = Symbol.toStringTag;
Ae[c_] = ((e9) => (e9._nullCount = -1, e9[Symbol.isConcatSpreadable] = true, "RecordBatch"))(Ae.prototype);
function ly(e9, t, r = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...e9.fields], a = [...t], o = (r + 63 & -64) >> 3;
  for (const [s, c] of e9.fields.entries()) {
    const u = t[s];
    (!u || u.length !== r) && (i[s] = c.clone({ nullable: true }), a[s] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(r)) !== null && n !== void 0 ? n : pt({ type: c.type, length: r, nullCount: r, nullBitmap: new Uint8Array(o) }));
  }
  return [e9.assign(i), pt({ type: new ve(i), length: r, children: a })];
}
function u_(e9, t, r = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = e9 == null ? void 0 : e9.length) !== null && n !== void 0 ? n : 0) > 0 && (e9 == null ? void 0 : e9.length) === (t == null ? void 0 : t.length)) for (let a = -1, o = e9.length; ++a < o; ) {
    const { type: s } = e9[a], c = t[a];
    for (const u of [c, ...((i = c == null ? void 0 : c.dictionary) === null || i === void 0 ? void 0 : i.data) || []]) u_(s.children, u == null ? void 0 : u.children, r);
    if (G.isDictionary(s)) {
      const { id: u } = s;
      if (!r.has(u)) (c == null ? void 0 : c.dictionary) && r.set(u, c.dictionary);
      else if (r.get(u) !== c.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
  }
  return r;
}
class bd extends Ae {
  constructor(t) {
    const r = t.fields.map((i) => pt({ type: i.type })), n = pt({ type: new ve(t.fields), nullCount: 0, children: r });
    super(t, n);
  }
}
let rn = class hr {
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
class uA extends dt {
  visit(t, r) {
    return t == null || r == null ? void 0 : super.visit(t, r);
  }
  visitNull(t, r) {
    return ey.startNull(r), ey.endNull(r);
  }
  visitInt(t, r) {
    return Be.startInt(r), Be.addBitWidth(r, t.bitWidth), Be.addIsSigned(r, t.isSigned), Be.endInt(r);
  }
  visitFloat(t, r) {
    return mr.startFloatingPoint(r), mr.addPrecision(r, t.precision), mr.endFloatingPoint(r);
  }
  visitBinary(t, r) {
    return Xp.startBinary(r), Xp.endBinary(r);
  }
  visitLargeBinary(t, r) {
    return Qp.startLargeBinary(r), Qp.endLargeBinary(r);
  }
  visitBool(t, r) {
    return Jp.startBool(r), Jp.endBool(r);
  }
  visitUtf8(t, r) {
    return ry.startUtf8(r), ry.endUtf8(r);
  }
  visitLargeUtf8(t, r) {
    return Zp.startLargeUtf8(r), Zp.endLargeUtf8(r);
  }
  visitDecimal(t, r) {
    return yi.startDecimal(r), yi.addScale(r, t.scale), yi.addPrecision(r, t.precision), yi.addBitWidth(r, t.bitWidth), yi.endDecimal(r);
  }
  visitDate(t, r) {
    return Es.startDate(r), Es.addUnit(r, t.unit), Es.endDate(r);
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
    return $s.startDuration(r), $s.addUnit(r, t.unit), $s.endDuration(r);
  }
  visitList(t, r) {
    return ty.startList(r), ty.endList(r);
  }
  visitStruct(t, r) {
    return jn.startStruct_(r), jn.endStruct_(r);
  }
  visitUnion(t, r) {
    xe.startTypeIdsVector(r, t.typeIds.length);
    const n = xe.createTypeIdsVector(r, t.typeIds);
    return xe.startUnion(r), xe.addMode(r, t.mode), xe.addTypeIds(r, n), xe.endUnion(r);
  }
  visitDictionary(t, r) {
    const n = this.visit(t.indices, r);
    return kr.startDictionaryEncoding(r), kr.addId(r, BigInt(t.id)), kr.addIsOrdered(r, t.isOrdered), n !== void 0 && kr.addIndexType(r, n), kr.endDictionaryEncoding(r);
  }
  visitFixedSizeBinary(t, r) {
    return Ms.startFixedSizeBinary(r), Ms.addByteWidth(r, t.byteWidth), Ms.endFixedSizeBinary(r);
  }
  visitFixedSizeList(t, r) {
    return Ds.startFixedSizeList(r), Ds.addListSize(r, t.listSize), Ds.endFixedSizeList(r);
  }
  visitMap(t, r) {
    return Ns.startMap(r), Ns.addKeysSorted(r, t.keysSorted), Ns.endMap(r);
  }
}
const Ol = new uA();
function lA(e9, t = /* @__PURE__ */ new Map()) {
  return new At(hA(e9, t), Bs(e9.metadata), t);
}
function l_(e9) {
  return new Re(e9.count, f_(e9.columns), h_(e9.columns));
}
function fA(e9) {
  return new Tr(l_(e9.data), e9.id, e9.isDelta);
}
function hA(e9, t) {
  return (e9.fields || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function fy(e9, t) {
  return (e9.children || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function f_(e9) {
  return (e9 || []).reduce((t, r) => [...t, new bn(r.count, dA(r.VALIDITY)), ...f_(r.children)], []);
}
function h_(e9, t = []) {
  for (let r = -1, n = (e9 || []).length; ++r < n; ) {
    const i = e9[r];
    i.VALIDITY && t.push(new br(t.length, i.VALIDITY.length)), i.TYPE_ID && t.push(new br(t.length, i.TYPE_ID.length)), i.OFFSET && t.push(new br(t.length, i.OFFSET.length)), i.DATA && t.push(new br(t.length, i.DATA.length)), t = h_(i.children, t);
  }
  return t;
}
function dA(e9) {
  return (e9 || []).reduce((t, r) => t + +(r === 0), 0);
}
function pA(e9, t) {
  let r, n, i, a, o, s;
  return !t || !(a = e9.dictionary) ? (o = dy(e9, fy(e9, t)), i = new Ft(e9.name, o, e9.nullable, Bs(e9.metadata))) : t.has(r = a.id) ? (n = (n = a.indexType) ? hy(n) : new co(), s = new ki(t.get(r), n, r, a.isOrdered), i = new Ft(e9.name, s, e9.nullable, Bs(e9.metadata))) : (n = (n = a.indexType) ? hy(n) : new co(), t.set(r, o = dy(e9, fy(e9, t))), s = new ki(o, n, r, a.isOrdered), i = new Ft(e9.name, s, e9.nullable, Bs(e9.metadata))), i || null;
}
function Bs(e9 = []) {
  return new Map(e9.map(({ key: t, value: r }) => [t, r]));
}
function hy(e9) {
  return new Hn(e9.isSigned, e9.bitWidth);
}
function dy(e9, t) {
  const r = e9.type.name;
  switch (r) {
    case "NONE":
      return new mn();
    case "null":
      return new mn();
    case "binary":
      return new qs();
    case "largebinary":
      return new Gs();
    case "utf8":
      return new Hs();
    case "largeutf8":
      return new Ks();
    case "bool":
      return new Ys();
    case "list":
      return new rc((t || [])[0]);
    case "struct":
      return new ve(t || []);
    case "struct_":
      return new ve(t || []);
  }
  switch (r) {
    case "int": {
      const n = e9.type;
      return new Hn(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = e9.type;
      return new Vs(pe[n.precision]);
    }
    case "decimal": {
      const n = e9.type;
      return new Xs(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = e9.type;
      return new Js(Xe[n.unit]);
    }
    case "time": {
      const n = e9.type;
      return new Qs(Q[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = e9.type;
      return new Zs(Q[n.unit], n.timezone);
    }
    case "interval": {
      const n = e9.type;
      return new tc(Pr[n.unit]);
    }
    case "duration": {
      const n = e9.type;
      return new ec(Q[n.unit]);
    }
    case "union": {
      const n = e9.type, [i, ...a] = (n.mode + "").toLowerCase(), o = i.toUpperCase() + a.join("");
      return new nc(ye[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = e9.type;
      return new ic(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = e9.type;
      return new ac(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = e9.type;
      return new oc((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${r}"`);
}
var yA = Ib, mA = ji;
class ge {
  static fromJSON(t, r) {
    const n = new ge(0, Kt.V5, r);
    return n._createHeader = vA(t, r), n;
  }
  static decode(t) {
    t = new mA(vt(t));
    const r = rn.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), a = r.headerType(), o = new ge(n, i, a);
    return o._createHeader = gA(r, a), o;
  }
  static encode(t) {
    const r = new yA();
    let n = -1;
    return t.isSchema() ? n = At.encode(r, t.header()) : t.isRecordBatch() ? n = Re.encode(r, t.header()) : t.isDictionaryBatch() && (n = Tr.encode(r, t.header())), rn.startMessage(r), rn.addVersion(r, Kt.V5), rn.addHeader(r, n), rn.addHeaderType(r, t.headerType), rn.addBodyLength(r, BigInt(t.bodyLength)), rn.finishMessageBuffer(r, rn.endMessage(r)), r.asUint8Array();
  }
  static from(t, r = 0) {
    if (t instanceof At) return new ge(0, Kt.V5, _t.Schema, t);
    if (t instanceof Re) return new ge(r, Kt.V5, _t.RecordBatch, t);
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
class Re {
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
class bn {
  constructor(t, r) {
    this.length = Dt(t), this.nullCount = Dt(r);
  }
}
function vA(e9, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.fromJSON(e9);
      case _t.RecordBatch:
        return Re.fromJSON(e9);
      case _t.DictionaryBatch:
        return Tr.fromJSON(e9);
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
function gA(e9, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.decode(e9.header(new dr()), /* @__PURE__ */ new Map(), e9.version());
      case _t.RecordBatch:
        return Re.decode(e9.header(new Nr()), e9.version());
      case _t.DictionaryBatch:
        return Tr.decode(e9.header(new di()), e9.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
Ft.encode = EA;
Ft.decode = TA;
Ft.fromJSON = pA;
At.encode = IA;
At.decode = bA;
At.fromJSON = lA;
Re.encode = $A;
Re.decode = _A;
Re.fromJSON = l_;
Tr.encode = MA;
Tr.decode = wA;
Tr.fromJSON = fA;
bn.encode = DA;
bn.decode = OA;
br.encode = NA;
br.decode = SA;
function bA(e9, t = /* @__PURE__ */ new Map(), r = Kt.V5) {
  const n = PA(e9, t);
  return new At(n, ks(e9), t, r);
}
function _A(e9, t = Kt.V5) {
  if (e9.compression() !== null) throw new Error("Record batch compression not implemented");
  return new Re(e9.length(), xA(e9), AA(e9, t));
}
function wA(e9, t = Kt.V5) {
  return new Tr(Re.decode(e9.data(), t), e9.id(), e9.isDelta());
}
function SA(e9) {
  return new br(e9.offset(), e9.length());
}
function OA(e9) {
  return new bn(e9.length(), e9.nullCount());
}
function xA(e9) {
  const t = [];
  for (let r, n = -1, i = -1, a = e9.nodesLength(); ++n < a; ) (r = e9.nodes(n)) && (t[++i] = bn.decode(r));
  return t;
}
function AA(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.buffersLength(); ++i < o; ) (n = e9.buffers(i)) && (t < Kt.V4 && (n.bb_pos += 8 * (i + 1)), r[++a] = br.decode(n));
  return r;
}
function PA(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.fieldsLength(); ++i < o; ) (n = e9.fields(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function py(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.childrenLength(); ++i < o; ) (n = e9.children(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function TA(e9, t) {
  let r, n, i, a, o, s;
  return !t || !(s = e9.dictionary()) ? (i = my(e9, py(e9, t)), n = new Ft(e9.name(), i, e9.nullable(), ks(e9))) : t.has(r = Dt(s.id())) ? (a = (a = s.indexType()) ? yy(a) : new co(), o = new ki(t.get(r), a, r, s.isOrdered()), n = new Ft(e9.name(), o, e9.nullable(), ks(e9))) : (a = (a = s.indexType()) ? yy(a) : new co(), t.set(r, i = my(e9, py(e9, t))), o = new ki(i, a, r, s.isOrdered()), n = new Ft(e9.name(), o, e9.nullable(), ks(e9))), n || null;
}
function ks(e9) {
  const t = /* @__PURE__ */ new Map();
  if (e9) for (let r, n, i = -1, a = Math.trunc(e9.customMetadataLength()); ++i < a; ) (r = e9.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function yy(e9) {
  return new Hn(e9.isSigned(), e9.bitWidth());
}
function my(e9, t) {
  const r = e9.typeType();
  switch (r) {
    case Ct.NONE:
      return new mn();
    case Ct.Null:
      return new mn();
    case Ct.Binary:
      return new qs();
    case Ct.LargeBinary:
      return new Gs();
    case Ct.Utf8:
      return new Hs();
    case Ct.LargeUtf8:
      return new Ks();
    case Ct.Bool:
      return new Ys();
    case Ct.List:
      return new rc((t || [])[0]);
    case Ct.Struct_:
      return new ve(t || []);
  }
  switch (r) {
    case Ct.Int: {
      const n = e9.type(new Be());
      return new Hn(n.isSigned(), n.bitWidth());
    }
    case Ct.FloatingPoint: {
      const n = e9.type(new mr());
      return new Vs(n.precision());
    }
    case Ct.Decimal: {
      const n = e9.type(new yi());
      return new Xs(n.scale(), n.precision(), n.bitWidth());
    }
    case Ct.Date: {
      const n = e9.type(new Es());
      return new Js(n.unit());
    }
    case Ct.Time: {
      const n = e9.type(new qe());
      return new Qs(n.unit(), n.bitWidth());
    }
    case Ct.Timestamp: {
      const n = e9.type(new Ge());
      return new Zs(n.unit(), n.timezone());
    }
    case Ct.Interval: {
      const n = e9.type(new vr());
      return new tc(n.unit());
    }
    case Ct.Duration: {
      const n = e9.type(new $s());
      return new ec(n.unit());
    }
    case Ct.Union: {
      const n = e9.type(new xe());
      return new nc(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Ct.FixedSizeBinary: {
      const n = e9.type(new Ms());
      return new ic(n.byteWidth());
    }
    case Ct.FixedSizeList: {
      const n = e9.type(new Ds());
      return new ac(n.listSize(), (t || [])[0]);
    }
    case Ct.Map: {
      const n = e9.type(new Ns());
      return new oc((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Ct[r]}" (${r})`);
}
function IA(e9, t) {
  const r = t.fields.map((a) => Ft.encode(e9, a));
  dr.startFieldsVector(e9, r.length);
  const n = dr.createFieldsVector(e9, r), i = t.metadata && t.metadata.size > 0 ? dr.createCustomMetadataVector(e9, [...t.metadata].map(([a, o]) => {
    const s = e9.createString(`${a}`), c = e9.createString(`${o}`);
    return ne.startKeyValue(e9), ne.addKey(e9, s), ne.addValue(e9, c), ne.endKeyValue(e9);
  })) : -1;
  return dr.startSchema(e9), dr.addFields(e9, n), dr.addEndianness(e9, CA ? Bi.Little : Bi.Big), i !== -1 && dr.addCustomMetadata(e9, i), dr.endSchema(e9);
}
function EA(e9, t) {
  let r = -1, n = -1, i = -1;
  const a = t.type;
  let o = t.typeId;
  G.isDictionary(a) ? (o = a.dictionary.typeId, i = Ol.visit(a, e9), n = Ol.visit(a.dictionary, e9)) : n = Ol.visit(a, e9);
  const s = (a.children || []).map((l) => Ft.encode(e9, l)), c = ze.createChildrenVector(e9, s), u = t.metadata && t.metadata.size > 0 ? ze.createCustomMetadataVector(e9, [...t.metadata].map(([l, f]) => {
    const h = e9.createString(`${l}`), d = e9.createString(`${f}`);
    return ne.startKeyValue(e9), ne.addKey(e9, h), ne.addValue(e9, d), ne.endKeyValue(e9);
  })) : -1;
  return t.name && (r = e9.createString(t.name)), ze.startField(e9), ze.addType(e9, n), ze.addTypeType(e9, o), ze.addChildren(e9, c), ze.addNullable(e9, !!t.nullable), r !== -1 && ze.addName(e9, r), i !== -1 && ze.addDictionary(e9, i), u !== -1 && ze.addCustomMetadata(e9, u), ze.endField(e9);
}
function $A(e9, t) {
  const r = t.nodes || [], n = t.buffers || [];
  Nr.startNodesVector(e9, r.length);
  for (const o of r.slice().reverse()) bn.encode(e9, o);
  const i = e9.endVector();
  Nr.startBuffersVector(e9, n.length);
  for (const o of n.slice().reverse()) br.encode(e9, o);
  const a = e9.endVector();
  return Nr.startRecordBatch(e9), Nr.addLength(e9, BigInt(t.length)), Nr.addNodes(e9, i), Nr.addBuffers(e9, a), Nr.endRecordBatch(e9);
}
function MA(e9, t) {
  const r = Re.encode(e9, t.data);
  return di.startDictionaryBatch(e9), di.addId(e9, BigInt(t.id)), di.addIsDelta(e9, t.isDelta), di.addData(e9, r), di.endDictionaryBatch(e9);
}
function DA(e9, t) {
  return Mb.createFieldNode(e9, BigInt(t.length), BigInt(t.nullCount));
}
function NA(e9, t) {
  return $b.createBuffer(e9, BigInt(t.offset), BigInt(t.length));
}
const CA = (() => {
  const e9 = new ArrayBuffer(2);
  return new DataView(e9).setInt16(0, 256, true), new Int16Array(e9)[0] === 256;
})(), _d = (e9) => `Expected ${_t[e9]} Message in stream, but was null or length 0.`, wd = (e9) => `Header pointer of flatbuffer-encoded ${_t[e9]} Message is null or length 0.`, d_ = (e9, t) => `Expected to read ${e9} metadata bytes, but only read ${t}.`, p_ = (e9, t) => `Expected to read ${e9} bytes for message body, but only read ${t}.`;
class y_ {
  constructor(t) {
    this.source = t instanceof hc ? t : new hc(t);
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
    if (t != null && r.value.headerType !== t) throw new Error(_d(t));
    return r.value;
  }
  readMessageBody(t) {
    if (t <= 0) return new Uint8Array(0);
    const r = vt(this.source.read(t));
    if (r.byteLength < t) throw new Error(p_(t, r.byteLength));
    return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
  }
  readSchema(t = false) {
    const r = _t.Schema, n = this.readMessage(r), i = n == null ? void 0 : n.header();
    if (t && !i) throw new Error(wd(r));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(Au), r = t && new ji(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const r = this.source.read(t);
    if (!r) return zt;
    if (r.byteLength < t) throw new Error(d_(t, r.byteLength));
    return { done: false, value: ge.decode(r) };
  }
}
class jA {
  constructor(t, r) {
    this.source = t instanceof Ri ? t : Sb(t) ? new dc(t, r) : new Ri(t);
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
      if (t != null && r.value.headerType !== t) throw new Error(_d(t));
      return r.value;
    });
  }
  readMessageBody(t) {
    return ot(this, void 0, void 0, function* () {
      if (t <= 0) return new Uint8Array(0);
      const r = vt(yield this.source.read(t));
      if (r.byteLength < t) throw new Error(p_(t, r.byteLength));
      return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
    });
  }
  readSchema() {
    return ot(this, arguments, void 0, function* (t = false) {
      const r = _t.Schema, n = yield this.readMessage(r), i = n == null ? void 0 : n.header();
      if (t && !i) throw new Error(wd(r));
      return i;
    });
  }
  readMetadataLength() {
    return ot(this, void 0, void 0, function* () {
      const t = yield this.source.read(Au), r = t && new ji(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return ot(this, void 0, void 0, function* () {
      const r = yield this.source.read(t);
      if (!r) return zt;
      if (r.byteLength < t) throw new Error(d_(t, r.byteLength));
      return { done: false, value: ge.decode(r) };
    });
  }
}
class BA extends y_ {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = false, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof cy ? t : new cy(t);
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
    if (t != null && r.value.headerType !== t) throw new Error(_d(t));
    return r.value;
  }
  readSchema() {
    const t = _t.Schema, r = this.readMessage(t), n = r == null ? void 0 : r.header();
    if (!r || !n) throw new Error(wd(t));
    return n;
  }
}
const Au = 4, _f = "ARROW1", lo = new Uint8Array(_f.length);
for (let e9 = 0; e9 < _f.length; e9 += 1) lo[e9] = _f.codePointAt(e9);
function Sd(e9, t = 0) {
  for (let r = -1, n = lo.length; ++r < n; ) if (lo[r] !== e9[t + r]) return false;
  return true;
}
const ts = lo.length, m_ = ts + Au, kA = ts * 2 + Au;
class Ke extends pd {
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
    return Gn(r) ? r.then(() => this) : this;
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
    return t instanceof Ke ? t : lf(t) ? UA(t) : Sb(t) ? VA(t) : Gn(t) ? ot(this, void 0, void 0, function* () {
      return yield Ke.from(yield t);
    }) : Ob(t) || nd(t) || xb(t) || ha(t) ? WA(new Ri(t)) : zA(new hc(t));
  }
  static readAll(t) {
    return t instanceof Ke ? t.isSync() ? vy(t) : gy(t) : lf(t) || ArrayBuffer.isView(t) || Xo(t) || wb(t) ? vy(t) : gy(t);
  }
}
class pc extends Ke {
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
      yield yt(yield* Is(Un(this[Symbol.iterator]())));
    });
  }
}
class yc extends Ke {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return ot(this, void 0, void 0, function* () {
      var t, r, n, i;
      const a = new Array();
      try {
        for (var o = true, s = Un(this), c; c = yield s.next(), t = c.done, !t; o = true) {
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
class v_ extends pc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class RA extends yc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class g_ {
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
    return new o_(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class mc extends g_ {
  constructor(t, r) {
    super(r), this._reader = lf(t) ? new BA(this._handle = t) : new y_(this._handle = t);
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
    return this.closed || (this.autoDestroy = __(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new bd(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class vc extends g_ {
  constructor(t, r) {
    super(r), this._reader = new jA(this._handle = t);
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
      return this.closed || (this.autoDestroy = __(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new bd(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class b_ extends mc {
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
    super(t instanceof uy ? t : new uy(t), r);
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
    const { _handle: t } = this, r = t.size - m_, n = t.readInt32(r), i = t.readAt(r - n, n);
    return uo.decode(i);
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
class LA extends vc {
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
    super(t instanceof dc ? t : new dc(t, n), i);
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
      const r = t.size - m_, n = yield t.readInt32(r), i = yield t.readAt(r - n, n);
      return uo.decode(i);
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
class FA extends mc {
  constructor(t, r) {
    super(t, r);
  }
  _loadVectors(t, r, n) {
    return new Zx(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function __(e9, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e9.autoDestroy;
}
function* vy(e9) {
  const t = Ke.from(e9);
  try {
    if (!t.open({ autoDestroy: false }).closed) do
      yield t;
    while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function gy(e9) {
  return gr(this, arguments, function* () {
    const r = yield yt(Ke.from(e9));
    try {
      if (!(yield yt(r.open({ autoDestroy: false }))).closed) do
        yield yield yt(r);
      while (!(yield yt(r.reset().open())).closed);
    } finally {
      yield yt(r.cancel());
    }
  });
}
function UA(e9) {
  return new pc(new FA(e9));
}
function zA(e9) {
  const t = e9.peek(ts + 7 & -8);
  return t && t.byteLength >= 4 ? Sd(t) ? new v_(new b_(e9.read())) : new pc(new mc(e9)) : new pc(new mc(function* () {
  }()));
}
function WA(e9) {
  return ot(this, void 0, void 0, function* () {
    const t = yield e9.peek(ts + 7 & -8);
    return t && t.byteLength >= 4 ? Sd(t) ? new v_(new b_(yield e9.read())) : new yc(new vc(e9)) : new yc(new vc(function() {
      return gr(this, arguments, function* () {
      });
    }()));
  });
}
function VA(e9) {
  return ot(this, void 0, void 0, function* () {
    const { size: t } = yield e9.stat(), r = new dc(e9, t);
    return t >= kA && Sd(yield r.readAt(0, ts + 7 & -8)) ? new RA(new LA(r)) : new yc(new vc(r));
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
      if (G.isUnion(r)) this.nodes.push(new bn(n, 0));
      else {
        const { nullCount: i } = t;
        G.isNull(r) || cr.call(this, i <= 0 ? new Uint8Array(0) : sc(t.offset, n, t.nullBitmap)), this.nodes.push(new bn(n, i));
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
function cr(e9) {
  const t = e9.byteLength + 7 & -8;
  return this.buffers.push(e9), this.bufferRegions.push(new br(this._byteLength, t)), this._byteLength += t, this;
}
function qA(e9) {
  var t;
  const { type: r, length: n, typeIds: i, valueOffsets: a } = e9;
  if (cr.call(this, i), r.mode === ye.Sparse) return wf.call(this, e9);
  if (r.mode === ye.Dense) {
    if (e9.offset <= 0) return cr.call(this, a), wf.call(this, e9);
    {
      const o = new Int32Array(n), s = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let u, l, f = -1; ++f < n; ) (u = i[f]) !== void 0 && ((l = s[u]) === void 0 && (l = s[u] = a[f]), o[f] = a[f] - l, c[u] = ((t = c[u]) !== null && t !== void 0 ? t : 0) + 1);
      cr.call(this, o), this.visitMany(e9.children.map((u, l) => {
        const f = r.typeIds[l], h = s[f], d = c[f];
        return u.slice(h, Math.min(n, d));
      }));
    }
  }
  return this;
}
function GA(e9) {
  let t;
  return e9.nullCount >= e9.length ? cr.call(this, new Uint8Array(0)) : (t = e9.values) instanceof Uint8Array ? cr.call(this, sc(e9.offset, e9.length, t)) : cr.call(this, cc(e9.values));
}
function Jr(e9) {
  return cr.call(this, e9.values.subarray(0, e9.length * e9.stride));
}
function Pu(e9) {
  const { length: t, values: r, valueOffsets: n } = e9, i = Dt(n[0]), a = Dt(n[t]), o = Math.min(a - i, r.byteLength - i);
  return cr.call(this, Pb(-i, t + 1, n)), cr.call(this, r.subarray(i, i + o)), this;
}
function Od(e9) {
  const { length: t, valueOffsets: r } = e9;
  if (r) {
    const { [0]: n, [t]: i } = r;
    return cr.call(this, Pb(-n, t + 1, r)), this.visit(e9.children[0].slice(n, i - n));
  }
  return this.visit(e9.children[0]);
}
function wf(e9) {
  return this.visitMany(e9.type.children.map((t, r) => e9.children[r]).filter(Boolean))[0];
}
Wt.prototype.visitBool = GA;
Wt.prototype.visitInt = Jr;
Wt.prototype.visitFloat = Jr;
Wt.prototype.visitUtf8 = Pu;
Wt.prototype.visitLargeUtf8 = Pu;
Wt.prototype.visitBinary = Pu;
Wt.prototype.visitLargeBinary = Pu;
Wt.prototype.visitFixedSizeBinary = Jr;
Wt.prototype.visitDate = Jr;
Wt.prototype.visitTimestamp = Jr;
Wt.prototype.visitTime = Jr;
Wt.prototype.visitDecimal = Jr;
Wt.prototype.visitList = Od;
Wt.prototype.visitStruct = wf;
Wt.prototype.visitUnion = qA;
Wt.prototype.visitInterval = Jr;
Wt.prototype.visitDuration = Jr;
Wt.prototype.visitFixedSizeList = Od;
Wt.prototype.visitMap = Od;
class w_ extends pd {
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = false, this._sink = new js(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Ie(t) || (t = { autoDestroy: true, writeLegacyIpcFormat: false }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : true, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : false;
  }
  toString(t = false) {
    return this._sink.toString(t);
  }
  toUint8Array(t = false) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return Gn(t) ? t.then((r) => this.writeAll(r)) : ha(t) ? Td(this, t) : Pd(this, t);
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
    return t === this._sink || t instanceof js ? this._sink = t : (this._sink = new js(), t && O1(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && x1(t) && this.toNodeStream({ objectMode: false }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = false, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!r || !bf(r, this._schema)) && (r == null ? (this._position = 0, this._schema = null) : (this._started = true, this._schema = r, this._writeSchema(r))), this;
  }
  write(t) {
    let r = null;
    if (this._sink) {
      if (t == null) return this.finish() && void 0;
      if (t instanceof me && !(r = t.schema)) return this.finish() && void 0;
      if (t instanceof Ae && !(r = t.schema)) return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (r && !bf(r, this._schema)) {
      if (this._started && this._autoDestroy) return this.close();
      this.reset(this._sink, r);
    }
    t instanceof Ae ? t instanceof bd || this._writeRecordBatch(t) : t instanceof me ? this.writeAll(t.batches) : Xo(t) && this.writeAll(t);
  }
  _writeMessage(t, r = 8) {
    const n = r - 1, i = ge.encode(t), a = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, s = a + o + n & ~n, c = s - a - o;
    return t.headerType === _t.RecordBatch ? this._recordBatchBlocks.push(new vn(s, t.bodyLength, this._position)) : t.headerType === _t.DictionaryBatch && this._dictionaryBlocks.push(new vn(s, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(s - o)), a > 0 && this._write(i), this._writePadding(c);
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
    return this._write(lo);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: r, nodes: n, bufferRegions: i, buffers: a } = Wt.assemble(t), o = new Re(t.numRows, n, i), s = ge.from(o, r);
    return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(a);
  }
  _writeDictionaryBatch(t, r, n = false) {
    const { byteLength: i, nodes: a, bufferRegions: o, buffers: s } = Wt.assemble(new xt([t])), c = new Re(t.length, a, o), u = new Tr(c, r, n), l = ge.from(u, i);
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
class xd extends w_ {
  static writeAll(t, r) {
    const n = new xd(r);
    return Gn(t) ? t.then((i) => n.writeAll(i)) : ha(t) ? Td(n, t) : Pd(n, t);
  }
}
class Ad extends w_ {
  static writeAll(t) {
    const r = new Ad();
    return Gn(t) ? t.then((n) => r.writeAll(n)) : ha(t) ? Td(r, t) : Pd(r, t);
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
    const r = uo.encode(new uo(t, Kt.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(r)._write(Int32Array.of(r.byteLength))._writeMagic();
  }
}
function Pd(e9, t) {
  let r = t;
  t instanceof me && (r = t.batches, e9.reset(void 0, t.schema));
  for (const n of r) e9.write(n);
  return e9.finish();
}
function Td(e9, t) {
  return ot(this, void 0, void 0, function* () {
    var r, n, i, a, o, s, c;
    try {
      for (r = true, n = Un(t); i = yield n.next(), a = i.done, !a; r = true) {
        c = i.value, r = false;
        const u = c;
        e9.write(u);
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
    return e9.finish();
  });
}
function HA(e9, t = "stream") {
  return (t === "stream" ? xd : Ad).writeAll(e9).toUint8Array(true);
}
var KA = Object.create, S_ = Object.defineProperty, YA = Object.getOwnPropertyDescriptor, XA = Object.getOwnPropertyNames, JA = Object.getPrototypeOf, QA = Object.prototype.hasOwnProperty, ZA = (e9, t) => () => (t || e9((t = { exports: {} }).exports, t), t.exports), tP = (e9, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of XA(t)) !QA.call(e9, i) && i !== r && S_(e9, i, { get: () => t[i], enumerable: !(n = YA(t, i)) || n.enumerable });
  return e9;
}, eP = (e9, t, r) => (r = e9 != null ? KA(JA(e9)) : {}, tP(!e9 || !e9.__esModule ? S_(r, "default", { value: e9, enumerable: true }) : r, e9)), rP = ZA((e9, t) => {
  t.exports = Worker;
}), nP = ((e9) => (e9[e9.UNDEFINED = 0] = "UNDEFINED", e9[e9.AUTOMATIC = 1] = "AUTOMATIC", e9[e9.READ_ONLY = 2] = "READ_ONLY", e9[e9.READ_WRITE = 3] = "READ_WRITE", e9))(nP || {}), iP = ((e9) => (e9[e9.IDENTIFIER = 0] = "IDENTIFIER", e9[e9.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e9[e9.STRING_CONSTANT = 2] = "STRING_CONSTANT", e9[e9.OPERATOR = 3] = "OPERATOR", e9[e9.KEYWORD = 4] = "KEYWORD", e9[e9.COMMENT = 5] = "COMMENT", e9))(iP || {}), aP = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.DEBUG = 1] = "DEBUG", e9[e9.INFO = 2] = "INFO", e9[e9.WARNING = 3] = "WARNING", e9[e9.ERROR = 4] = "ERROR", e9))(aP || {}), oP = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.CONNECT = 1] = "CONNECT", e9[e9.DISCONNECT = 2] = "DISCONNECT", e9[e9.OPEN = 3] = "OPEN", e9[e9.QUERY = 4] = "QUERY", e9[e9.INSTANTIATE = 5] = "INSTANTIATE", e9))(oP || {}), sP = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.OK = 1] = "OK", e9[e9.ERROR = 2] = "ERROR", e9[e9.START = 3] = "START", e9[e9.RUN = 4] = "RUN", e9[e9.CAPTURE = 5] = "CAPTURE", e9))(sP || {}), cP = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.WEB_WORKER = 1] = "WEB_WORKER", e9[e9.NODE_WORKER = 2] = "NODE_WORKER", e9[e9.BINDINGS = 3] = "BINDINGS", e9[e9.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e9))(cP || {}), uP = class {
  log(e9) {
  }
}, lP = ((e9) => (e9[e9.SUCCESS = 0] = "SUCCESS", e9[e9.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", e9[e9.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", e9))(lP || {}), fP = class {
  constructor(e9, t) {
    this._bindings = e9, this._conn = t;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(e9) {
    return e9(this._bindings, this._conn);
  }
  async query(e9) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e9 });
    let t = await this._bindings.runQuery(this._conn, e9), r = Ke.from(t);
    return console.assert(r.isSync(), "Reader is not sync"), console.assert(r.isFile(), "Reader is not file"), new me(r);
  }
  async send(e9, t = false) {
    this._bindings.logger.log({ timestamp: /* @__PURE__ */ new Date(), level: 2, origin: 4, topic: 4, event: 4, value: e9 });
    let r = await this._bindings.startPendingQuery(this._conn, e9, t);
    for (; r == null; ) {
      if (this._bindings.isDetached()) {
        console.error("cannot send a message since the worker is not set!");
        return;
      }
      r = await this._bindings.pollPendingQuery(this._conn);
    }
    let n = new O_(this._bindings, this._conn, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
  async cancelSent() {
    return await this._bindings.cancelPendingQuery(this._conn);
  }
  async getTableNames(e9) {
    return await this._bindings.getTableNames(this._conn, e9);
  }
  async prepare(e9) {
    let t = await this._bindings.createPrepared(this._conn, e9);
    return new hP(this._bindings, this._conn, t);
  }
  async insertArrowTable(e9, t) {
    let r = HA(e9, "stream");
    await this.insertArrowFromIPCStream(r, t);
  }
  async insertArrowFromIPCStream(e9, t) {
    await this._bindings.insertArrowFromIPCStream(this._conn, e9, t);
  }
  async insertCSVFromPath(e9, t) {
    await this._bindings.insertCSVFromPath(this._conn, e9, t);
  }
  async insertJSONFromPath(e9, t) {
    await this._bindings.insertJSONFromPath(this._conn, e9, t);
  }
}, O_ = class {
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
}, hP = class {
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
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, t), n = new O_(this.bindings, this.connectionId, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, dP = ((e9) => (e9.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e9.CLOSE_PREPARED = "CLOSE_PREPARED", e9.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e9.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", e9.CONNECT = "CONNECT", e9.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e9.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e9.CREATE_PREPARED = "CREATE_PREPARED", e9.DISCONNECT = "DISCONNECT", e9.DROP_FILE = "DROP_FILE", e9.DROP_FILES = "DROP_FILES", e9.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e9.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e9.FLUSH_FILES = "FLUSH_FILES", e9.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e9.GET_TABLE_NAMES = "GET_TABLE_NAMES", e9.GET_VERSION = "GET_VERSION", e9.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e9.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e9.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e9.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e9.INSTANTIATE = "INSTANTIATE", e9.OPEN = "OPEN", e9.PING = "PING", e9.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e9.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e9.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e9.REGISTER_FILE_URL = "REGISTER_FILE_URL", e9.RESET = "RESET", e9.RUN_PREPARED = "RUN_PREPARED", e9.RUN_QUERY = "RUN_QUERY", e9.SEND_PREPARED = "SEND_PREPARED", e9.START_PENDING_QUERY = "START_PENDING_QUERY", e9.TOKENIZE = "TOKENIZE", e9))(dP || {}), pP = ((e9) => (e9.CONNECTION_INFO = "CONNECTION_INFO", e9.ERROR = "ERROR", e9.FEATURE_FLAGS = "FEATURE_FLAGS", e9.FILE_BUFFER = "FILE_BUFFER", e9.FILE_INFOS = "FILE_INFOS", e9.FILE_SIZE = "FILE_SIZE", e9.FILE_STATISTICS = "FILE_STATISTICS", e9.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e9.LOG = "LOG", e9.PROGRESS_UPDATE = "PROGRESS_UPDATE", e9.OK = "OK", e9.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e9.QUERY_PLAN = "QUERY_PLAN", e9.QUERY_RESULT = "QUERY_RESULT", e9.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e9.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e9.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e9.REGISTERED_FILE = "REGISTERED_FILE", e9.SCRIPT_TOKENS = "SCRIPT_TOKENS", e9.SUCCESS = "SUCCESS", e9.TABLE_NAMES = "TABLE_NAMES", e9.VERSION_STRING = "VERSION_STRING", e9))(pP || {}), gt = class {
  constructor(t, r) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = t, this.data = r, this.promise = new Promise((n, i) => {
      this.promiseResolver = n, this.promiseRejecter = i;
    });
  }
};
function Rs(e9) {
  switch (e9.typeId) {
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
      let t = e9;
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
      return { sqlType: "list", valueType: Rs(e9.valueType) };
    case x.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: e9.byteWidth };
    case x.Null:
      return { sqlType: "null" };
    case x.Utf8:
      return { sqlType: "utf8" };
    case x.Struct:
      return { sqlType: "struct", fields: e9.children.map((t) => Sf(t.name, t.type)) };
    case x.Map: {
      let t = e9;
      return { sqlType: "map", keyType: Rs(t.keyType), valueType: Rs(t.valueType) };
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
      return { sqlType: "timestamp", timezone: e9.timezone || void 0 };
    case x.TimestampSecond:
      return { sqlType: "timestamp[s]", timezone: e9.timezone || void 0 };
    case x.TimestampMicrosecond:
      return { sqlType: "timestamp[us]", timezone: e9.timezone || void 0 };
    case x.TimestampNanosecond:
      return { sqlType: "timestamp[ns]", timezone: e9.timezone || void 0 };
    case x.TimestampMillisecond:
      return { sqlType: "timestamp[ms]", timezone: e9.timezone || void 0 };
  }
  throw new Error("unsupported arrow type: ".concat(e9.toString()));
}
function Sf(e9, t) {
  let r = Rs(t);
  return r.name = e9, r;
}
var yP = /'(opfs:\/\/\S*?)'/g, mP = /(opfs:\/\/\S*?)/g;
function vP(e9) {
  return e9.search(mP) > -1;
}
function gP(e9) {
  return [...e9.matchAll(yP)].map((t) => t[1]);
}
var bP = new TextEncoder(), _P = class {
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
    return new fP(this, t);
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
    let n = bP.encode(r);
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
        a.push(Sf(o, s));
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
        a.push(Sf(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_JSON_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  shouldOPFSFileHandling() {
    var t, r;
    return vP((t = this.config.path) != null ? t : "") ? ((r = this.config.opfs) == null ? void 0 : r.fileHandling) == "auto" : false;
  }
  async registerOPFSFileFromSQL(t) {
    let r = gP(t), n = [];
    for (let i of r) try {
      await this.registerOPFSFileName(i), n.push(i);
    } catch (a) {
      throw console.error(a), new Error("File Not found:" + i);
    }
    return n;
  }
};
function wP() {
  let e9 = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e9.decode(t));
}
wP();
var SP = ((e9) => (e9[e9.BUFFER = 0] = "BUFFER", e9[e9.NODE_FS = 1] = "NODE_FS", e9[e9.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e9[e9.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e9[e9.HTTP = 4] = "HTTP", e9[e9.S3 = 5] = "S3", e9))(SP || {}), OP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), xP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), AP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), PP = () => (async (e9) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e9);
  } catch {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), TP = { version: "1.32.0" }, Id = TP.version.split(".");
Id[0];
Id[1];
Id[2];
var IP = () => typeof navigator > "u", xl = null, Al = null, Pl = null, Tl = null, Il = null;
async function EP() {
  return xl == null && (xl = typeof BigInt64Array < "u"), Al == null && (Al = await xP()), Pl == null && (Pl = await PP()), Tl == null && (Tl = await AP()), Il == null && (Il = await OP()), { bigInt64Array: xl, crossOriginIsolated: IP() || globalThis.crossOriginIsolated || false, wasmExceptions: Al, wasmSIMD: Tl, wasmThreads: Pl, wasmBulkMemory: Il };
}
async function $P(e9) {
  let t = await EP();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e9.coi) return { mainModule: e9.coi.mainModule, mainWorker: e9.coi.mainWorker, pthreadWorker: e9.coi.pthreadWorker };
    if (e9.eh) return { mainModule: e9.eh.mainModule, mainWorker: e9.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e9.mvp.mainModule, mainWorker: e9.mvp.mainWorker, pthreadWorker: null };
}
eP(rP());
const MP = "/assets/duckdb-mvp-BP0pRkMH.wasm", DP = "/assets/duckdb-browser-mvp.worker-C9hF7LGh.js", NP = "/assets/duckdb-eh-9ubY-jlA.wasm", CP = "/assets/duckdb-browser-eh.worker-hQa-dcAV.js", jP = { mvp: { mainModule: MP, mainWorker: DP }, eh: { mainModule: NP, mainWorker: CP } }, Ls = "mmg";
let El = null, $l = null, Fs = Promise.resolve(), Of = null;
async function x_() {
  return El || (El = (async () => {
    const e9 = await $P(jP), t = new Worker(e9.mainWorker, { type: "module" }), r = new uP(), n = new _P(r, t);
    return await n.instantiate(e9.mainModule, e9.pthreadWorker), n;
  })()), El;
}
async function A_() {
  return $l || ($l = await (await x_()).connect()), $l;
}
async function BP(e9) {
  return (await e9.query(`SELECT 1 FROM duckdb_databases() WHERE database_name = '${Ls}' LIMIT 1`)).toArray().length > 0;
}
async function kP(e9, t) {
  if (t && Of === t) return;
  const r = await x_(), n = await A_();
  await r.registerFileBuffer(Fp, new Uint8Array(e9)), await BP(n) && await n.query(`DETACH ${Ls}`), await n.query(`ATTACH '${Fp}' AS ${Ls} (READ_ONLY)`), await n.query(`USE ${Ls}`), Of = t;
}
async function by(e9, t) {
  const r = t ?? null;
  if (!(r && Of === r)) return Fs = Fs.then(() => kP(e9, r)), Fs;
}
async function Ur(e9) {
  return await Fs, (await (await A_()).query(e9)).toArray();
}
const Ed = { day: "day", week: "week", month: "month", quarter: "quarter", year: "year" };
function $d(e9) {
  return e9.replace(/'/g, "''");
}
function gc(e9, t) {
  return "";
}
async function DY() {
  return (await Ur(`
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
  `)).map((t) => ({ ...t, categories: bb(t.categories) }));
}
async function NY() {
  const e9 = await Ur(`SELECT method_id, skill_key, requirement_text
     FROM method_skills
     ORDER BY method_id, skill_key`), t = {};
  for (const r of e9) {
    const n = t[r.method_id] ?? [];
    n.push({ skillKey: r.skill_key, requirementText: r.requirement_text }), t[r.method_id] = n;
  }
  return t;
}
async function CY(e9) {
  const t = e9.replace(/'/g, "''"), r = await Ur(`SELECT * FROM guide_economics WHERE method_id = '${t}' LIMIT 1`);
  if (!r.length) return null;
  const n = r[0], i = await Ur(`SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${t}'`), a = await Ur(`SELECT skill_key, requirement_text
     FROM method_skills
     WHERE method_id = '${t}'
     ORDER BY skill_key`), o = (s) => ({ itemName: s.item_name, wikiSlug: s.wiki_slug, qtyPerCompletion: s.qty_per_completion, gpPerCompletion: s.gp_per_completion ?? 0 });
  return { id: n.method_id, methodName: n.method_name, methodUrl: n.method_url, defaultKph: n.default_kph ?? 1, kphUnitName: n.completions_unit_name || "Completions per hour", assumptionText: n.assumption_text ?? "", inputTotalPk: n.input_total_pk ?? 0, inputTotalPh: n.input_total_ph ?? 0, outputTotalPk: n.output_total_pk ?? 0, outputTotalPh: n.output_total_ph ?? 0, inputs: i.filter((s) => s.io_type === "input").map(o), outputs: i.filter((s) => s.io_type === "output").map(o), skillRequirements: a.map((s) => ({ skillKey: s.skill_key, requirementText: s.requirement_text })) };
}
async function RP(e9, t, r) {
  const n = Ed[t], i = $d(e9), a = gc(), o = await Ur(`
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
    `), s = await Ur(`
    SELECT date_trunc('${n}', s.scrape_timestamp) AS period,
           sum(pm.value) AS item_volume
    FROM snapshots s
    JOIN io_lines io ON io.method_id = s.method_id
    JOIN price_metrics pm ON pm.item_id = io.item_id
      AND pm.metric = 'volume'
      AND date_trunc('day', pm.scrape_timestamp) = date_trunc('day', s.scrape_timestamp)
    WHERE s.method_id = '${i}'
    ${gc()}
    GROUP BY 1
    ORDER BY 1
    `), c = new Map(s.map((u) => [yn(u.period), u.item_volume ?? 0]));
  return o.map((u) => {
    const l = yn(u.period);
    return { period: l, mean_profit: u.mean_profit ?? 0, median_profit: u.median_profit ?? 0, p25: u.p25 ?? 0, p75: u.p75 ?? 0, item_volume: c.get(l) ?? null };
  });
}
async function LP(e9, t, r) {
  if (!e9.length) return [];
  const n = Ed[t], i = e9.map((s) => `'${$d(s)}'`).join(", "), a = gc();
  return (await Ur(`
    SELECT s.method_id, m.method_name,
           date_trunc('${n}', s.scrape_timestamp) AS period,
           avg(s.hourly_profit_gp) AS profit
    FROM snapshots s
    JOIN methods m ON m.method_id = s.method_id
    WHERE s.method_id IN (${i}) AND s.hourly_profit_gp IS NOT NULL
    ${a}
    GROUP BY 1, 2, 3
    ORDER BY 3, 4 DESC
    `)).map((s) => ({ method_id: s.method_id, method_name: s.method_name, period: yn(s.period), profit: s.profit ?? 0 }));
}
async function jY(e9, t, r) {
  const n = Ed[t], i = $d(e9), a = gc();
  return (await Ur(`
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
    `)).map((s) => ({ period: yn(s.period), wikiSlug: s.wiki_slug, ioType: s.io_type, itemName: s.item_name, qtyPerCompletion: s.qty_per_completion, price: s.price, volume: s.volume }));
}
function FP(e9) {
  return { kph_by_method_id: { ...e9.kph_by_method_id }, disabled_method_ids: [...e9.disabled_method_ids] };
}
function BY(e9, t) {
  const r = [...e9.disabled_method_ids].sort().join("\0"), n = [...t.disabled_method_ids].sort().join("\0");
  if (r !== n) return false;
  const i = /* @__PURE__ */ new Set([...Object.keys(e9.kph_by_method_id), ...Object.keys(t.kph_by_method_id)]);
  for (const a of i) if ((e9.kph_by_method_id[a] ?? null) !== (t.kph_by_method_id[a] ?? null)) return false;
  return true;
}
function kY(e9) {
  return new Set(e9.disabled_method_ids);
}
function RY(e9, t, r) {
  const n = new Set(e9.disabled_method_ids);
  return r ? n.delete(t) : n.add(t), { ...e9, disabled_method_ids: [...n] };
}
function LY(e9, t, r) {
  const n = new Set(e9.disabled_method_ids);
  for (const i of t) r ? n.delete(i) : n.add(i);
  return { ...e9, disabled_method_ids: [...n] };
}
function FY(e9, t, r) {
  return { ...e9, kph_by_method_id: { ...e9.kph_by_method_id, [t]: r } };
}
function UP(e9) {
  return FP({ kph_by_method_id: e9.kph_by_method_id, disabled_method_ids: e9.disabled_method_ids });
}
const P_ = "osrs-mmg-profiles-v2", zP = "osrs-mmg-kph-v1", xf = 20;
function T_() {
  return crypto.randomUUID();
}
function I_(e9 = "Default") {
  const t = (/* @__PURE__ */ new Date()).toISOString();
  return { id: T_(), name: e9, save_version: 0, updated_at: t, kph_by_method_id: {}, disabled_method_ids: [] };
}
function E_() {
  const e9 = I_();
  return { version: 2, active_profile_id: e9.id, profiles: [e9] };
}
function WP() {
  const e9 = localStorage.getItem(zP);
  if (!e9) return null;
  try {
    const t = JSON.parse(e9);
    if (t.version !== 1 || typeof t.kph_by_method_id != "object") return null;
    const r = t.updated_at ?? (/* @__PURE__ */ new Date()).toISOString(), n = { id: T_(), name: "Default", save_version: 0, updated_at: r, kph_by_method_id: t.kph_by_method_id ?? {}, disabled_method_ids: t.disabled_method_ids ?? [] };
    return { version: 2, active_profile_id: n.id, profiles: [n] };
  } catch {
    return null;
  }
}
function VP(e9) {
  if (typeof e9.save_version == "number" && Number.isFinite(e9.save_version)) return e9.save_version;
  if (e9.version_name) {
    const t = Number.parseInt(e9.version_name.replace(/\D/g, ""), 10);
    if (Number.isFinite(t)) return t;
  }
  return 0;
}
function Md(e9) {
  const t = e9.profiles.slice(0, xf).map((n) => ({ id: n.id, name: n.name.trim() || "Untitled", save_version: VP(n), updated_at: n.updated_at, kph_by_method_id: n.kph_by_method_id ?? {}, disabled_method_ids: n.disabled_method_ids ?? [] }));
  return t.length === 0 ? E_() : { version: 2, active_profile_id: t.some((n) => n.id === e9.active_profile_id) ? e9.active_profile_id : t[0].id, profiles: t };
}
function Ir() {
  const e9 = localStorage.getItem(P_);
  if (e9) try {
    const n = JSON.parse(e9);
    if (n.version === 2 && Array.isArray(n.profiles)) return Md(n);
  } catch {
  }
  const r = WP() ?? E_();
  return pa(r), r;
}
function pa(e9) {
  localStorage.setItem(P_, JSON.stringify(Md(e9)));
}
function es(e9) {
  return e9.profiles.find((t) => t.id === e9.active_profile_id) ?? e9.profiles[0];
}
function UY() {
  return Ir().profiles;
}
function rs() {
  return es(Ir());
}
function zY(e9) {
  const t = Ir();
  if (!t.profiles.some((r) => r.id === e9)) throw new Error("Profile not found");
  return pa({ ...t, active_profile_id: e9 }), es(Ir());
}
function WY(e9) {
  const t = Ir();
  if (t.profiles.length >= xf) throw new Error(`Maximum of ${xf} profiles reached`);
  const r = I_(e9.trim() || `Profile ${t.profiles.length + 1}`), n = { ...t, active_profile_id: r.id, profiles: [...t.profiles, r] };
  return pa(n), r;
}
function VY(e9) {
  const t = Ir();
  if (t.profiles.length <= 1) throw new Error("At least one profile is required");
  const r = t.profiles.filter((i) => i.id !== e9), n = t.active_profile_id === e9 ? r[0].id : t.active_profile_id;
  return pa({ ...t, active_profile_id: n, profiles: r }), es(Ir());
}
function $_(e9, t, r) {
  let n = null;
  const i = e9.profiles.map((a) => a.id !== t ? a : (n = { ...a, ...r }, n));
  if (!n) throw new Error("Profile not found");
  return pa({ ...e9, profiles: i }), n;
}
function qY(e9) {
  const t = Ir(), r = es(t);
  return $_(t, r.id, { save_version: r.save_version + 1, updated_at: (/* @__PURE__ */ new Date()).toISOString(), kph_by_method_id: { ...e9.kph_by_method_id }, disabled_method_ids: [...e9.disabled_method_ids] });
}
function M_(e9) {
  const t = Ir(), r = es(t);
  return $_(t, r.id, { kph_by_method_id: { ...e9.kph_by_method_id }, disabled_method_ids: [...e9.disabled_method_ids] });
}
function GY(e9, t) {
  const r = rs().kph_by_method_id[e9];
  return r !== void 0 && Number.isFinite(r) ? r : t;
}
function HY(e9, t) {
  const r = rs();
  return M_({ kph_by_method_id: { ...r.kph_by_method_id, [e9]: t }, disabled_method_ids: r.disabled_method_ids });
}
function KY() {
  return Ir();
}
function YY() {
  const e9 = rs();
  return { version: 1, updated_at: e9.updated_at, kph_by_method_id: e9.kph_by_method_id, disabled_method_ids: e9.disabled_method_ids };
}
function XY(e9) {
  if (e9.version !== 2 || !Array.isArray(e9.profiles)) throw new Error("Invalid profiles backup file");
  const t = Md(e9);
  return pa(t), t;
}
function JY(e9, t = "import_wins") {
  if (e9.version !== 1 || typeof e9.kph_by_method_id != "object") throw new Error("Invalid kph backup file");
  const r = rs(), n = t === "import_wins" ? { ...r.kph_by_method_id, ...e9.kph_by_method_id } : { ...e9.kph_by_method_id, ...r.kph_by_method_id }, i = new Set(r.disabled_method_ids);
  for (const o of e9.disabled_method_ids ?? []) i.add(o);
  const a = { kph_by_method_id: n, disabled_method_ids: [...i] };
  return M_(a), a;
}
function QY() {
  return UP(rs());
}
function _y(e9, t) {
  return { ...e9, qtyPerHour: e9.qtyPerCompletion * t, gpPerHour: e9.gpPerCompletion * t };
}
function qP(e9, t) {
  return { kph: t, inputs: e9.inputs.map((r) => _y(r, t)), outputs: e9.outputs.map((r) => _y(r, t)), inputTotal: e9.inputTotalPk * t + e9.inputTotalPh, outputTotal: e9.outputTotalPk * t + e9.outputTotalPh, profit: (e9.outputTotalPk - e9.inputTotalPk) * t + (e9.outputTotalPh - e9.inputTotalPh) };
}
function wy(e9) {
  return `${Math.round(e9).toLocaleString("en-GB")} gp`;
}
function ZY(e9) {
  const t = Math.abs(e9);
  return t >= 1e6 ? `${(e9 / 1e6).toFixed(1)}M` : t >= 1e3 ? `${Math.round(e9 / 1e3)}k` : String(Math.round(e9));
}
function t7(e9) {
  const t = Math.abs(e9);
  return t >= 100 ? Math.round(e9).toLocaleString("en-GB") : t >= 1 ? e9.toFixed(2) : t >= 0.01 ? e9.toFixed(4) : e9.toPrecision(3);
}
function Sy(e9, t) {
  return { ...e9, ioType: t, lineKey: `${t}:${e9.wikiSlug}` };
}
function e7(e9, t, r = 5) {
  const n = qP(e9, t), a = [...[...n.inputs.map((o) => Sy(o, "input")), ...n.outputs.map((o) => Sy(o, "output"))]].sort((o, s) => Math.abs(s.gpPerHour) - Math.abs(o.gpPerHour));
  return { top: a.slice(0, r), other: a.slice(r) };
}
async function GP() {
  const e9 = await fetch(y1, { cache: "no-cache" });
  if (!e9.ok) throw new Error(`Failed to load manifest (${e9.status})`);
  return await e9.json();
}
function HP(e9, t) {
  return t ? e9.artifacts.database.sha256 !== t : true;
}
function KP(e9) {
  if (!(e9 == null ? void 0 : e9.latest_snapshot_date)) return true;
  const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return e9.latest_snapshot_date < t;
}
function r7({ loading: e9, error: t, manifest: r, fromCache: n, onReload: i }) {
  return e9 ? ut.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--loading", children: "Loading OSRS data\u2026" }) : t ? ut.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: [t, " ", ut.jsx("button", { type: "button", onClick: i, children: "Retry" })] }) : !r || !KP(r) ? null : ut.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--stale", children: ["Data from ", r.generated_at, r.latest_snapshot_date ? ` \xB7 snapshot ${r.latest_snapshot_date}` : "", n ? " \xB7 cached" : " \xB7 fresh download", " \xB7 ", ut.jsx("button", { type: "button", onClick: i, children: "Refresh" })] });
}
function n7({ skills: e9, compact: t = false }) {
  return e9.length === 0 ? t ? ut.jsx("span", { className: "osrs-mmg__muted", children: "\u2014" }) : null : ut.jsx("div", { className: t ? "osrs-mmg__skills-inline" : "osrs-mmg__skills-list", children: e9.map((r) => ut.jsxs("span", { className: t ? "osrs-mmg__skill-icon" : "osrs-mmg__skill-chip", title: `${r.skillKey} ${r.requirementText}`, children: [ut.jsx("img", { src: p1(r.skillKey), alt: r.skillKey, width: 20, height: 20 }), t ? ut.jsx("span", { className: "osrs-mmg__skill-level", children: r.requirementText }) : ut.jsxs("span", { children: [r.skillKey, " ", r.requirementText] })] }, r.skillKey)) });
}
var YP = Array.isArray, $e = YP, XP = typeof ls == "object" && ls && ls.Object === Object && ls, D_ = XP, JP = D_, QP = typeof self == "object" && self && self.Object === Object && self, ZP = JP || QP || Function("return this")(), $r = ZP, tT = $r, eT = tT.Symbol, ns = eT, Oy = ns, N_ = Object.prototype, rT = N_.hasOwnProperty, nT = N_.toString, Ma = Oy ? Oy.toStringTag : void 0;
function iT(e9) {
  var t = rT.call(e9, Ma), r = e9[Ma];
  try {
    e9[Ma] = void 0;
    var n = true;
  } catch {
  }
  var i = nT.call(e9);
  return n && (t ? e9[Ma] = r : delete e9[Ma]), i;
}
var aT = iT, oT = Object.prototype, sT = oT.toString;
function cT(e9) {
  return sT.call(e9);
}
var uT = cT, xy = ns, lT = aT, fT = uT, hT = "[object Null]", dT = "[object Undefined]", Ay = xy ? xy.toStringTag : void 0;
function pT(e9) {
  return e9 == null ? e9 === void 0 ? dT : hT : Ay && Ay in Object(e9) ? lT(e9) : fT(e9);
}
var Qr = pT;
function yT(e9) {
  return e9 != null && typeof e9 == "object";
}
var Zr = yT, mT = Qr, vT = Zr, gT = "[object Symbol]";
function bT(e9) {
  return typeof e9 == "symbol" || vT(e9) && mT(e9) == gT;
}
var ya = bT, _T = $e, wT = ya, ST = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, OT = /^\w*$/;
function xT(e9, t) {
  if (_T(e9)) return false;
  var r = typeof e9;
  return r == "number" || r == "symbol" || r == "boolean" || e9 == null || wT(e9) ? true : OT.test(e9) || !ST.test(e9) || t != null && e9 in Object(t);
}
var Dd = xT;
function AT(e9) {
  var t = typeof e9;
  return e9 != null && (t == "object" || t == "function");
}
var wn = AT;
const ma = Bt(wn);
var PT = Qr, TT = wn, IT = "[object AsyncFunction]", ET = "[object Function]", $T = "[object GeneratorFunction]", MT = "[object Proxy]";
function DT(e9) {
  if (!TT(e9)) return false;
  var t = PT(e9);
  return t == ET || t == $T || t == IT || t == MT;
}
var Nd = DT;
const lt = Bt(Nd);
var NT = $r, CT = NT["__core-js_shared__"], jT = CT, Ml = jT, Py = function() {
  var e9 = /[^.]+$/.exec(Ml && Ml.keys && Ml.keys.IE_PROTO || "");
  return e9 ? "Symbol(src)_1." + e9 : "";
}();
function BT(e9) {
  return !!Py && Py in e9;
}
var kT = BT, RT = Function.prototype, LT = RT.toString;
function FT(e9) {
  if (e9 != null) {
    try {
      return LT.call(e9);
    } catch {
    }
    try {
      return e9 + "";
    } catch {
    }
  }
  return "";
}
var C_ = FT, UT = Nd, zT = kT, WT = wn, VT = C_, qT = /[\\^$.*+?()[\]{}|]/g, GT = /^\[object .+?Constructor\]$/, HT = Function.prototype, KT = Object.prototype, YT = HT.toString, XT = KT.hasOwnProperty, JT = RegExp("^" + YT.call(XT).replace(qT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function QT(e9) {
  if (!WT(e9) || zT(e9)) return false;
  var t = UT(e9) ? JT : GT;
  return t.test(VT(e9));
}
var ZT = QT;
function tI(e9, t) {
  return e9 == null ? void 0 : e9[t];
}
var eI = tI, rI = ZT, nI = eI;
function iI(e9, t) {
  var r = nI(e9, t);
  return rI(r) ? r : void 0;
}
var ei = iI, aI = ei, oI = aI(Object, "create"), Tu = oI, Ty = Tu;
function sI() {
  this.__data__ = Ty ? Ty(null) : {}, this.size = 0;
}
var cI = sI;
function uI(e9) {
  var t = this.has(e9) && delete this.__data__[e9];
  return this.size -= t ? 1 : 0, t;
}
var lI = uI, fI = Tu, hI = "__lodash_hash_undefined__", dI = Object.prototype, pI = dI.hasOwnProperty;
function yI(e9) {
  var t = this.__data__;
  if (fI) {
    var r = t[e9];
    return r === hI ? void 0 : r;
  }
  return pI.call(t, e9) ? t[e9] : void 0;
}
var mI = yI, vI = Tu, gI = Object.prototype, bI = gI.hasOwnProperty;
function _I(e9) {
  var t = this.__data__;
  return vI ? t[e9] !== void 0 : bI.call(t, e9);
}
var wI = _I, SI = Tu, OI = "__lodash_hash_undefined__";
function xI(e9, t) {
  var r = this.__data__;
  return this.size += this.has(e9) ? 0 : 1, r[e9] = SI && t === void 0 ? OI : t, this;
}
var AI = xI, PI = cI, TI = lI, II = mI, EI = wI, $I = AI;
function va(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
va.prototype.clear = PI;
va.prototype.delete = TI;
va.prototype.get = II;
va.prototype.has = EI;
va.prototype.set = $I;
var MI = va;
function DI() {
  this.__data__ = [], this.size = 0;
}
var NI = DI;
function CI(e9, t) {
  return e9 === t || e9 !== e9 && t !== t;
}
var Cd = CI, jI = Cd;
function BI(e9, t) {
  for (var r = e9.length; r--; ) if (jI(e9[r][0], t)) return r;
  return -1;
}
var Iu = BI, kI = Iu, RI = Array.prototype, LI = RI.splice;
function FI(e9) {
  var t = this.__data__, r = kI(t, e9);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : LI.call(t, r, 1), --this.size, true;
}
var UI = FI, zI = Iu;
function WI(e9) {
  var t = this.__data__, r = zI(t, e9);
  return r < 0 ? void 0 : t[r][1];
}
var VI = WI, qI = Iu;
function GI(e9) {
  return qI(this.__data__, e9) > -1;
}
var HI = GI, KI = Iu;
function YI(e9, t) {
  var r = this.__data__, n = KI(r, e9);
  return n < 0 ? (++this.size, r.push([e9, t])) : r[n][1] = t, this;
}
var XI = YI, JI = NI, QI = UI, ZI = VI, tE = HI, eE = XI;
function ga(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
ga.prototype.clear = JI;
ga.prototype.delete = QI;
ga.prototype.get = ZI;
ga.prototype.has = tE;
ga.prototype.set = eE;
var Eu = ga, rE = ei, nE = $r, iE = rE(nE, "Map"), jd = iE, Iy = MI, aE = Eu, oE = jd;
function sE() {
  this.size = 0, this.__data__ = { hash: new Iy(), map: new (oE || aE)(), string: new Iy() };
}
var cE = sE;
function uE(e9) {
  var t = typeof e9;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e9 !== "__proto__" : e9 === null;
}
var lE = uE, fE = lE;
function hE(e9, t) {
  var r = e9.__data__;
  return fE(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var $u = hE, dE = $u;
function pE(e9) {
  var t = dE(this, e9).delete(e9);
  return this.size -= t ? 1 : 0, t;
}
var yE = pE, mE = $u;
function vE(e9) {
  return mE(this, e9).get(e9);
}
var gE = vE, bE = $u;
function _E(e9) {
  return bE(this, e9).has(e9);
}
var wE = _E, SE = $u;
function OE(e9, t) {
  var r = SE(this, e9), n = r.size;
  return r.set(e9, t), this.size += r.size == n ? 0 : 1, this;
}
var xE = OE, AE = cE, PE = yE, TE = gE, IE = wE, EE = xE;
function ba(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
ba.prototype.clear = AE;
ba.prototype.delete = PE;
ba.prototype.get = TE;
ba.prototype.has = IE;
ba.prototype.set = EE;
var Bd = ba, j_ = Bd, $E = "Expected a function";
function kd(e9, t) {
  if (typeof e9 != "function" || t != null && typeof t != "function") throw new TypeError($E);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e9.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (kd.Cache || j_)(), r;
}
kd.Cache = j_;
var B_ = kd;
const ME = Bt(B_);
var DE = B_, NE = 500;
function CE(e9) {
  var t = DE(e9, function(n) {
    return r.size === NE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jE = CE, BE = jE, kE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, RE = /\\(\\)?/g, LE = BE(function(e9) {
  var t = [];
  return e9.charCodeAt(0) === 46 && t.push(""), e9.replace(kE, function(r, n, i, a) {
    t.push(i ? a.replace(RE, "$1") : n || r);
  }), t;
}), FE = LE;
function UE(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length, i = Array(n); ++r < n; ) i[r] = t(e9[r], r, e9);
  return i;
}
var Rd = UE, Ey = ns, zE = Rd, WE = $e, VE = ya, $y = Ey ? Ey.prototype : void 0, My = $y ? $y.toString : void 0;
function k_(e9) {
  if (typeof e9 == "string") return e9;
  if (WE(e9)) return zE(e9, k_) + "";
  if (VE(e9)) return My ? My.call(e9) : "";
  var t = e9 + "";
  return t == "0" && 1 / e9 == -1 / 0 ? "-0" : t;
}
var qE = k_, GE = qE;
function HE(e9) {
  return e9 == null ? "" : GE(e9);
}
var R_ = HE, KE = $e, YE = Dd, XE = FE, JE = R_;
function QE(e9, t) {
  return KE(e9) ? e9 : YE(e9, t) ? [e9] : XE(JE(e9));
}
var L_ = QE, ZE = ya;
function t$(e9) {
  if (typeof e9 == "string" || ZE(e9)) return e9;
  var t = e9 + "";
  return t == "0" && 1 / e9 == -1 / 0 ? "-0" : t;
}
var Mu = t$, e$ = L_, r$ = Mu;
function n$(e9, t) {
  t = e$(t, e9);
  for (var r = 0, n = t.length; e9 != null && r < n; ) e9 = e9[r$(t[r++])];
  return r && r == n ? e9 : void 0;
}
var Ld = n$, i$ = Ld;
function a$(e9, t, r) {
  var n = e9 == null ? void 0 : i$(e9, t);
  return n === void 0 ? r : n;
}
var F_ = a$;
const Ye = Bt(F_);
function o$(e9) {
  return e9 == null;
}
var s$ = o$;
const st = Bt(s$);
var c$ = Qr, u$ = $e, l$ = Zr, f$ = "[object String]";
function h$(e9) {
  return typeof e9 == "string" || !u$(e9) && l$(e9) && c$(e9) == f$;
}
var d$ = h$;
const Kn = Bt(d$);
var U_ = { exports: {} }, $t = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Fd = Symbol.for("react.element"), Ud = Symbol.for("react.portal"), Du = Symbol.for("react.fragment"), Nu = Symbol.for("react.strict_mode"), Cu = Symbol.for("react.profiler"), ju = Symbol.for("react.provider"), Bu = Symbol.for("react.context"), p$ = Symbol.for("react.server_context"), ku = Symbol.for("react.forward_ref"), Ru = Symbol.for("react.suspense"), Lu = Symbol.for("react.suspense_list"), Fu = Symbol.for("react.memo"), Uu = Symbol.for("react.lazy"), y$ = Symbol.for("react.offscreen"), z_;
z_ = Symbol.for("react.module.reference");
function Ze(e9) {
  if (typeof e9 == "object" && e9 !== null) {
    var t = e9.$$typeof;
    switch (t) {
      case Fd:
        switch (e9 = e9.type, e9) {
          case Du:
          case Cu:
          case Nu:
          case Ru:
          case Lu:
            return e9;
          default:
            switch (e9 = e9 && e9.$$typeof, e9) {
              case p$:
              case Bu:
              case ku:
              case Uu:
              case Fu:
              case ju:
                return e9;
              default:
                return t;
            }
        }
      case Ud:
        return t;
    }
  }
}
$t.ContextConsumer = Bu;
$t.ContextProvider = ju;
$t.Element = Fd;
$t.ForwardRef = ku;
$t.Fragment = Du;
$t.Lazy = Uu;
$t.Memo = Fu;
$t.Portal = Ud;
$t.Profiler = Cu;
$t.StrictMode = Nu;
$t.Suspense = Ru;
$t.SuspenseList = Lu;
$t.isAsyncMode = function() {
  return false;
};
$t.isConcurrentMode = function() {
  return false;
};
$t.isContextConsumer = function(e9) {
  return Ze(e9) === Bu;
};
$t.isContextProvider = function(e9) {
  return Ze(e9) === ju;
};
$t.isElement = function(e9) {
  return typeof e9 == "object" && e9 !== null && e9.$$typeof === Fd;
};
$t.isForwardRef = function(e9) {
  return Ze(e9) === ku;
};
$t.isFragment = function(e9) {
  return Ze(e9) === Du;
};
$t.isLazy = function(e9) {
  return Ze(e9) === Uu;
};
$t.isMemo = function(e9) {
  return Ze(e9) === Fu;
};
$t.isPortal = function(e9) {
  return Ze(e9) === Ud;
};
$t.isProfiler = function(e9) {
  return Ze(e9) === Cu;
};
$t.isStrictMode = function(e9) {
  return Ze(e9) === Nu;
};
$t.isSuspense = function(e9) {
  return Ze(e9) === Ru;
};
$t.isSuspenseList = function(e9) {
  return Ze(e9) === Lu;
};
$t.isValidElementType = function(e9) {
  return typeof e9 == "string" || typeof e9 == "function" || e9 === Du || e9 === Cu || e9 === Nu || e9 === Ru || e9 === Lu || e9 === y$ || typeof e9 == "object" && e9 !== null && (e9.$$typeof === Uu || e9.$$typeof === Fu || e9.$$typeof === ju || e9.$$typeof === Bu || e9.$$typeof === ku || e9.$$typeof === z_ || e9.getModuleId !== void 0);
};
$t.typeOf = Ze;
U_.exports = $t;
var m$ = U_.exports, v$ = Qr, g$ = Zr, b$ = "[object Number]";
function _$(e9) {
  return typeof e9 == "number" || g$(e9) && v$(e9) == b$;
}
var W_ = _$;
const w$ = Bt(W_);
var S$ = W_;
function O$(e9) {
  return S$(e9) && e9 != +e9;
}
var x$ = O$;
const _a = Bt(x$);
var sr = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Bn = function(t) {
  return Kn(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return w$(t) && !_a(t);
}, A$ = function(t) {
  return st(t);
}, ie = function(t) {
  return L(t) || Kn(t);
}, P$ = 0, ri = function(t) {
  var r = ++P$;
  return "".concat(t || "").concat(r);
}, Yn = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && !Kn(t)) return n;
  var a;
  if (Bn(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return _a(a) && (a = n), i && a > r && (a = r), a;
}, un = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, T$ = function(t) {
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
function bc(e9, t, r) {
  return !e9 || !e9.length ? null : e9.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ye(n, t)) === r;
  });
}
var I$ = function(t) {
  if (!t || !t.length) return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++) u = t[f].cx || 0, l = t[f].cy || 0, n += u, i += l, a += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return { xmin: s, xmax: c, a: h, b: (i - h * n) / r };
}, E$ = function(t, r) {
  return L(t) && L(r) ? t - r : Kn(t) && Kn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Mi(e9, t) {
  for (var r in e9) if ({}.hasOwnProperty.call(e9, r) && (!{}.hasOwnProperty.call(t, r) || e9[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e9, n)) return false;
  return true;
}
function Af(e9) {
  "@babel/helpers - typeof";
  return Af = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Af(e9);
}
var $$ = ["viewBox", "children"], M$ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Dy = ["points", "pathLength"], Dl = { svg: $$, polygon: Dy, polyline: Dy }, zd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], _c = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (B.isValidElement(t) && (n = t.props), !ma(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    zd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, D$ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, fo = function(t, r, n) {
  if (!ma(t) || Af(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    zd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = D$(o, r, n));
  }), i;
}, N$ = ["children"], C$ = ["children"];
function Ny(e9, t) {
  if (e9 == null) return {};
  var r = j$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function j$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Pf(e9) {
  "@babel/helpers - typeof";
  return Pf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pf(e9);
}
var Cy = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, zr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, jy = null, Nl = null, Wd = function e(t) {
  if (t === jy && Array.isArray(Nl)) return Nl;
  var r = [];
  return B.Children.forEach(t, function(n) {
    st(n) || (m$.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Nl = r, jy = t, r;
};
function Te(e9, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return zr(i);
  }) : n = [zr(t)], Wd(e9).forEach(function(i) {
    var a = Ye(i, "type.displayName") || Ye(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function je(e9, t) {
  var r = Te(e9, t);
  return r && r[0];
}
var By = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, B$ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], k$ = function(t) {
  return t && t.type && Kn(t.type) && B$.indexOf(t.type) >= 0;
}, V_ = function(t) {
  return t && Pf(t) === "object" && "clipDot" in t;
}, R$ = function(t, r, n, i) {
  var a, o = (a = Dl == null ? void 0 : Dl[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !lt(t) && (i && o.includes(r) || M$.includes(r)) || n && zd.includes(r);
}, ct = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (B.isValidElement(t) && (i = t.props), !ma(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    R$((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Tf = function e2(t, r) {
  if (t === r) return true;
  var n = B.Children.count(t);
  if (n !== B.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return ky(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!ky(a, o)) return false;
  }
  return true;
}, ky = function(t, r) {
  if (st(t) && st(r)) return true;
  if (!st(t) && !st(r)) {
    var n = t.props || {}, i = n.children, a = Ny(n, N$), o = r.props || {}, s = o.children, c = Ny(o, C$);
    return i && s ? Mi(a, c) && Tf(i, s) : !i && !s ? Mi(a, c) : false;
  }
  return false;
}, Ry = function(t, r) {
  var n = [], i = {};
  return Wd(t).forEach(function(a, o) {
    if (k$(a)) n.push(a);
    else if (a) {
      var s = zr(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = true;
      }
    }
  }), n;
}, L$ = function(t) {
  var r = t && t.type;
  return r && Cy[r] ? Cy[r] : null;
}, F$ = function(t, r) {
  return Wd(r).indexOf(t);
}, U$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, If.apply(this, arguments);
}
function z$(e9, t) {
  if (e9 == null) return {};
  var r = W$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function W$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Ef(e9) {
  var t = e9.children, r = e9.width, n = e9.height, i = e9.viewBox, a = e9.className, o = e9.style, s = e9.title, c = e9.desc, u = z$(e9, U$), l = i || { width: r, height: n, x: 0, y: 0 }, f = mt("recharts-surface", a);
  return A.createElement("svg", If({}, ct(u, true, "svg"), { className: f, width: r, height: n, style: o, viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height) }), A.createElement("title", null, s), A.createElement("desc", null, c), t);
}
var V$ = ["children", "className"];
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, $f.apply(this, arguments);
}
function q$(e9, t) {
  if (e9 == null) return {};
  var r = G$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function G$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var St = A.forwardRef(function(e9, t) {
  var r = e9.children, n = e9.className, i = q$(e9, V$), a = mt("recharts-layer", n);
  return A.createElement("g", $f({ className: a }, ct(i, true), { ref: t }), r);
}), Wr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function H$(e9, t, r) {
  var n = -1, i = e9.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e9[n + t];
  return a;
}
var K$ = H$, Y$ = K$;
function X$(e9, t, r) {
  var n = e9.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e9 : Y$(e9, t, r);
}
var J$ = X$, Q$ = "\\ud800-\\udfff", Z$ = "\\u0300-\\u036f", tM = "\\ufe20-\\ufe2f", eM = "\\u20d0-\\u20ff", rM = Z$ + tM + eM, nM = "\\ufe0e\\ufe0f", iM = "\\u200d", aM = RegExp("[" + iM + Q$ + rM + nM + "]");
function oM(e9) {
  return aM.test(e9);
}
var q_ = oM;
function sM(e9) {
  return e9.split("");
}
var cM = sM, G_ = "\\ud800-\\udfff", uM = "\\u0300-\\u036f", lM = "\\ufe20-\\ufe2f", fM = "\\u20d0-\\u20ff", hM = uM + lM + fM, dM = "\\ufe0e\\ufe0f", pM = "[" + G_ + "]", Mf = "[" + hM + "]", Df = "\\ud83c[\\udffb-\\udfff]", yM = "(?:" + Mf + "|" + Df + ")", H_ = "[^" + G_ + "]", K_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", Y_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", mM = "\\u200d", X_ = yM + "?", J_ = "[" + dM + "]?", vM = "(?:" + mM + "(?:" + [H_, K_, Y_].join("|") + ")" + J_ + X_ + ")*", gM = J_ + X_ + vM, bM = "(?:" + [H_ + Mf + "?", Mf, K_, Y_, pM].join("|") + ")", _M = RegExp(Df + "(?=" + Df + ")|" + bM + gM, "g");
function wM(e9) {
  return e9.match(_M) || [];
}
var SM = wM, OM = cM, xM = q_, AM = SM;
function PM(e9) {
  return xM(e9) ? AM(e9) : OM(e9);
}
var TM = PM, IM = J$, EM = q_, $M = TM, MM = R_;
function DM(e9) {
  return function(t) {
    t = MM(t);
    var r = EM(t) ? $M(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? IM(r, 1).join("") : t.slice(1);
    return n[e9]() + i;
  };
}
var NM = DM, CM = NM, jM = CM("toUpperCase"), BM = jM;
const zu = Bt(BM);
function jt(e9) {
  return function() {
    return e9;
  };
}
const Q_ = Math.cos, wc = Math.sin, fr = Math.sqrt, Sc = Math.PI, Wu = 2 * Sc, Nf = Math.PI, Cf = 2 * Nf, Dn = 1e-6, kM = Cf - Dn;
function Z_(e9) {
  this._ += e9[0];
  for (let t = 1, r = e9.length; t < r; ++t) this._ += arguments[t] + e9[t];
}
function RM(e9) {
  let t = Math.floor(e9);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e9}`);
  if (t > 15) return Z_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class LM {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Z_ : RM(t);
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
    else if (h > Dn) if (!(Math.abs(f * c - u * l) > Dn) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, y = i - s, m = c * c + u * u, p = d * d + y * y, _ = Math.sqrt(m), g = Math.sqrt(h), w = a * Math.tan((Nf - Math.acos((m + h - p) / (2 * _ * g))) / 2), S = w / g, v = w / _;
      Math.abs(S - 1) > Dn && this._append`L${t + S * l},${r + S * f}`, this._append`A${a},${a},0,0,${+(f * d > l * y)},${this._x1 = t + v * c},${this._y1 = r + v * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Dn || Math.abs(this._y1 - l) > Dn) && this._append`L${u},${l}`, n && (h < 0 && (h = h % Cf + Cf), h > kM ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > Dn && this._append`A${n},${n},0,${+(h >= Nf)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Vd(e9) {
  let t = 3;
  return e9.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e9;
  }, () => new LM(t);
}
function qd(e9) {
  return typeof e9 == "object" && "length" in e9 ? e9 : Array.from(e9);
}
function tw(e9) {
  this._context = e9;
}
tw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t) {
  switch (e9 = +e9, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t) : this._context.moveTo(e9, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e9, t);
      break;
  }
} };
function Vu(e9) {
  return new tw(e9);
}
function ew(e9) {
  return e9[0];
}
function rw(e9) {
  return e9[1];
}
function nw(e9, t) {
  var r = jt(true), n = null, i = Vu, a = null, o = Vd(s);
  e9 = typeof e9 == "function" ? e9 : e9 === void 0 ? ew : jt(e9), t = typeof t == "function" ? t : t === void 0 ? rw : jt(t);
  function s(c) {
    var u, l = (c = qd(c)).length, f, h = false, d;
    for (n == null && (a = i(d = o())), u = 0; u <= l; ++u) !(u < l && r(f = c[u], u, c)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e9(f, u, c), +t(f, u, c));
    if (d) return a = null, d + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e9 = typeof c == "function" ? c : jt(+c), s) : e9;
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
function ps(e9, t, r) {
  var n = null, i = jt(true), a = null, o = Vu, s = null, c = Vd(u);
  e9 = typeof e9 == "function" ? e9 : e9 === void 0 ? ew : jt(+e9), t = typeof t == "function" ? t : jt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? rw : jt(+r);
  function u(f) {
    var h, d, y, m = (f = qd(f)).length, p, _ = false, g, w = new Array(m), S = new Array(m);
    for (a == null && (s = o(g = c())), h = 0; h <= m; ++h) {
      if (!(h < m && i(p = f[h], h, f)) === _) if (_ = !_) d = h, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y) s.point(w[y], S[y]);
        s.lineEnd(), s.areaEnd();
      }
      _ && (w[h] = +e9(p, h, f), S[h] = +t(p, h, f), s.point(n ? +n(p, h, f) : w[h], r ? +r(p, h, f) : S[h]));
    }
    if (g) return s = null, g + "" || null;
  }
  function l() {
    return nw().defined(i).curve(o).context(a);
  }
  return u.x = function(f) {
    return arguments.length ? (e9 = typeof f == "function" ? f : jt(+f), n = null, u) : e9;
  }, u.x0 = function(f) {
    return arguments.length ? (e9 = typeof f == "function" ? f : jt(+f), u) : e9;
  }, u.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : jt(+f), u) : n;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : jt(+f), r = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : jt(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : jt(+f), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e9).y(t);
  }, u.lineY1 = function() {
    return l().x(e9).y(r);
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
class iw {
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
function FM(e9) {
  return new iw(e9, true);
}
function UM(e9) {
  return new iw(e9, false);
}
const Gd = { draw(e9, t) {
  const r = fr(t / Sc);
  e9.moveTo(r, 0), e9.arc(0, 0, r, 0, Wu);
} }, zM = { draw(e9, t) {
  const r = fr(t / 5) / 2;
  e9.moveTo(-3 * r, -r), e9.lineTo(-r, -r), e9.lineTo(-r, -3 * r), e9.lineTo(r, -3 * r), e9.lineTo(r, -r), e9.lineTo(3 * r, -r), e9.lineTo(3 * r, r), e9.lineTo(r, r), e9.lineTo(r, 3 * r), e9.lineTo(-r, 3 * r), e9.lineTo(-r, r), e9.lineTo(-3 * r, r), e9.closePath();
} }, aw = fr(1 / 3), WM = aw * 2, VM = { draw(e9, t) {
  const r = fr(t / WM), n = r * aw;
  e9.moveTo(0, -r), e9.lineTo(n, 0), e9.lineTo(0, r), e9.lineTo(-n, 0), e9.closePath();
} }, qM = { draw(e9, t) {
  const r = fr(t), n = -r / 2;
  e9.rect(n, n, r, r);
} }, GM = 0.8908130915292852, ow = wc(Sc / 10) / wc(7 * Sc / 10), HM = wc(Wu / 10) * ow, KM = -Q_(Wu / 10) * ow, YM = { draw(e9, t) {
  const r = fr(t * GM), n = HM * r, i = KM * r;
  e9.moveTo(0, -r), e9.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = Wu * a / 5, s = Q_(o), c = wc(o);
    e9.lineTo(c * r, -s * r), e9.lineTo(s * n - c * i, c * n + s * i);
  }
  e9.closePath();
} }, Cl = fr(3), XM = { draw(e9, t) {
  const r = -fr(t / (Cl * 3));
  e9.moveTo(0, r * 2), e9.lineTo(-Cl * r, -r), e9.lineTo(Cl * r, -r), e9.closePath();
} }, Le = -0.5, Fe = fr(3) / 2, jf = 1 / fr(12), JM = (jf / 2 + 1) * 3, QM = { draw(e9, t) {
  const r = fr(t / JM), n = r / 2, i = r * jf, a = n, o = r * jf + r, s = -a, c = o;
  e9.moveTo(n, i), e9.lineTo(a, o), e9.lineTo(s, c), e9.lineTo(Le * n - Fe * i, Fe * n + Le * i), e9.lineTo(Le * a - Fe * o, Fe * a + Le * o), e9.lineTo(Le * s - Fe * c, Fe * s + Le * c), e9.lineTo(Le * n + Fe * i, Le * i - Fe * n), e9.lineTo(Le * a + Fe * o, Le * o - Fe * a), e9.lineTo(Le * s + Fe * c, Le * c - Fe * s), e9.closePath();
} };
function ZM(e9, t) {
  let r = null, n = Vd(i);
  e9 = typeof e9 == "function" ? e9 : jt(e9 || Gd), t = typeof t == "function" ? t : jt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e9.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e9 = typeof a == "function" ? a : jt(a), i) : e9;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : jt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Oc() {
}
function xc(e9, t, r) {
  e9._context.bezierCurveTo((2 * e9._x0 + e9._x1) / 3, (2 * e9._y0 + e9._y1) / 3, (e9._x0 + 2 * e9._x1) / 3, (e9._y0 + 2 * e9._y1) / 3, (e9._x0 + 4 * e9._x1 + t) / 6, (e9._y0 + 4 * e9._y1 + r) / 6);
}
function sw(e9) {
  this._context = e9;
}
sw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      xc(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t) {
  switch (e9 = +e9, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t) : this._context.moveTo(e9, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      xc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function tD(e9) {
  return new sw(e9);
}
function cw(e9) {
  this._context = e9;
}
cw.prototype = { areaStart: Oc, areaEnd: Oc, lineStart: function() {
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
}, point: function(e9, t) {
  switch (e9 = +e9, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e9, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e9, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e9, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e9) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      xc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function eD(e9) {
  return new cw(e9);
}
function uw(e9) {
  this._context = e9;
}
uw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t) {
  switch (e9 = +e9, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e9) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      xc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function rD(e9) {
  return new uw(e9);
}
function lw(e9) {
  this._context = e9;
}
lw.prototype = { areaStart: Oc, areaEnd: Oc, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e9, t) {
  e9 = +e9, t = +t, this._point ? this._context.lineTo(e9, t) : (this._point = 1, this._context.moveTo(e9, t));
} };
function nD(e9) {
  return new lw(e9);
}
function Ly(e9) {
  return e9 < 0 ? -1 : 1;
}
function Fy(e9, t, r) {
  var n = e9._x1 - e9._x0, i = t - e9._x1, a = (e9._y1 - e9._y0) / (n || i < 0 && -0), o = (r - e9._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (Ly(a) + Ly(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Uy(e9, t) {
  var r = e9._x1 - e9._x0;
  return r ? (3 * (e9._y1 - e9._y0) / r - t) / 2 : t;
}
function jl(e9, t, r) {
  var n = e9._x0, i = e9._y0, a = e9._x1, o = e9._y1, s = (a - n) / 3;
  e9._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Ac(e9) {
  this._context = e9;
}
Ac.prototype = { areaStart: function() {
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
      jl(this, this._t0, Uy(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e9, t) {
  var r = NaN;
  if (e9 = +e9, t = +t, !(e9 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e9, t) : this._context.moveTo(e9, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, jl(this, Uy(this, r = Fy(this, e9, t)), r);
        break;
      default:
        jl(this, this._t0, r = Fy(this, e9, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function fw(e9) {
  this._context = new hw(e9);
}
(fw.prototype = Object.create(Ac.prototype)).point = function(e9, t) {
  Ac.prototype.point.call(this, t, e9);
};
function hw(e9) {
  this._context = e9;
}
hw.prototype = { moveTo: function(e9, t) {
  this._context.moveTo(t, e9);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e9, t) {
  this._context.lineTo(t, e9);
}, bezierCurveTo: function(e9, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e9, n, r, a, i);
} };
function iD(e9) {
  return new Ac(e9);
}
function aD(e9) {
  return new fw(e9);
}
function dw(e9) {
  this._context = e9;
}
dw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e9 = this._x, t = this._y, r = e9.length;
  if (r) if (this._line ? this._context.lineTo(e9[0], t[0]) : this._context.moveTo(e9[0], t[0]), r === 2) this._context.lineTo(e9[1], t[1]);
  else for (var n = zy(e9), i = zy(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e9[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e9, t) {
  this._x.push(+e9), this._y.push(+t);
} };
function zy(e9) {
  var t, r = e9.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e9[0] + 2 * e9[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e9[t] + 2 * e9[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e9[r - 1] + e9[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e9[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e9[t + 1] - i[t + 1];
  return [i, a];
}
function oD(e9) {
  return new dw(e9);
}
function qu(e9, t) {
  this._context = e9, this._t = t;
}
qu.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e9, t) {
  switch (e9 = +e9, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e9, t) : this._context.moveTo(e9, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e9, t);
      else {
        var r = this._x * (1 - this._t) + e9 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e9, this._y = t;
} };
function sD(e9) {
  return new qu(e9, 0.5);
}
function cD(e9) {
  return new qu(e9, 0);
}
function uD(e9) {
  return new qu(e9, 1);
}
function Fi(e9, t) {
  if ((o = e9.length) > 1) for (var r = 1, n, i, a = e9[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e9[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Bf(e9) {
  for (var t = e9.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function lD(e9, t) {
  return e9[t];
}
function fD(e9) {
  const t = [];
  return t.key = e9, t;
}
function hD() {
  var e9 = jt([]), t = Bf, r = Fi, n = lD;
  function i(a) {
    var o = Array.from(e9.apply(this, arguments), fD), s, c = o.length, u = -1, l;
    for (const f of a) for (s = 0, ++u; s < c; ++s) (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = qd(t(o)); s < c; ++s) o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e9 = typeof a == "function" ? a : jt(Array.from(a)), i) : e9;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : jt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Bf : typeof a == "function" ? a : jt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Fi, i) : r;
  }, i;
}
function dD(e9, t) {
  if ((n = e9.length) > 0) {
    for (var r, n, i = 0, a = e9[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e9[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e9[r][i][1] /= o;
    }
    Fi(e9, t);
  }
}
function pD(e9, t) {
  if ((i = e9.length) > 0) {
    for (var r = 0, n = e9[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e9[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Fi(e9, t);
  }
}
function yD(e9, t) {
  if (!(!((o = e9.length) > 0) || !((a = (i = e9[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e9[t[s]], f = l[n][1] || 0, h = l[n - 1][1] || 0, d = (f - h) / 2, y = 0; y < s; ++y) {
          var m = e9[t[y]], p = m[n][1] || 0, _ = m[n - 1][1] || 0;
          d += p - _;
        }
        c += f, u += d * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= u / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, Fi(e9, t);
  }
}
function ho(e9) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e9);
}
var mD = ["type", "size", "sizeType"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, kf.apply(this, arguments);
}
function Wy(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vy(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wy(Object(r), true).forEach(function(n) {
      vD(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function vD(e9, t, r) {
  return t = gD(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function gD(e9) {
  var t = bD(e9, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function bD(e9, t) {
  if (ho(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function _D(e9, t) {
  if (e9 == null) return {};
  var r = wD(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function wD(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var pw = { symbolCircle: Gd, symbolCross: zM, symbolDiamond: VM, symbolSquare: qM, symbolStar: YM, symbolTriangle: XM, symbolWye: QM }, SD = Math.PI / 180, OD = function(t) {
  var r = "symbol".concat(zu(t));
  return pw[r] || Gd;
}, xD = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * SD;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, AD = function(t, r) {
  pw["symbol".concat(zu(t))] = r;
}, Gu = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = _D(t, mD), u = Vy(Vy({}, c), {}, { type: n, size: a, sizeType: s }), l = function() {
    var p = OD(n), _ = ZM().type(p).size(xD(a, s, n));
    return _();
  }, f = u.className, h = u.cx, d = u.cy, y = ct(u, true);
  return h === +h && d === +d && a === +a ? A.createElement("path", kf({}, y, { className: mt("recharts-symbols", f), transform: "translate(".concat(h, ", ").concat(d, ")"), d: l() })) : null;
};
Gu.registerSymbol = AD;
function Ui(e9) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e9);
}
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Rf.apply(this, arguments);
}
function qy(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PD(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qy(Object(r), true).forEach(function(n) {
      po(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : qy(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function TD(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ID(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, mw(n.key), n);
  }
}
function ED(e9, t, r) {
  return t && ID(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function $D(e9, t, r) {
  return t = Pc(t), MD(e9, yw() ? Reflect.construct(t, r || [], Pc(e9).constructor) : t.apply(e9, r));
}
function MD(e9, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return DD(e9);
}
function DD(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function yw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yw = function() {
    return !!e9;
  })();
}
function Pc(e9) {
  return Pc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pc(e9);
}
function ND(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Lf(e9, t);
}
function Lf(e9, t) {
  return Lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lf(e9, t);
}
function po(e9, t, r) {
  return t = mw(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function mw(e9) {
  var t = CD(e9, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function CD(e9, t) {
  if (Ui(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Ue = 32, Hd = function(e9) {
  function t() {
    return TD(this, t), $D(this, t, arguments);
  }
  return ND(t, e9), ED(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Ue / 2, o = Ue / 6, s = Ue / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return A.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Ue, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return A.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ue, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return A.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"), className: "recharts-legend-icon" });
    if (A.isValidElement(n.legendIcon)) {
      var u = PD({}, n);
      return delete u.legendIcon, A.cloneElement(n.legendIcon, u);
    }
    return A.createElement(Gu, { fill: c, cx: a, cy: a, size: Ue, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = { x: 0, y: 0, width: Ue, height: Ue }, f = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(d, y) {
      var m = d.formatter || c, p = mt(po(po({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", d.inactive));
      if (d.type === "none") return null;
      var _ = lt(d.value) ? null : d.value;
      Wr(!lt(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var g = d.inactive ? u : d.color;
      return A.createElement("li", Rf({ className: p, style: f, key: "legend-item-".concat(y) }, fo(n.props, d, y)), A.createElement(Ef, { width: o, height: o, viewBox: l, style: h }, n.renderIcon(d)), A.createElement("span", { className: "recharts-legend-item-text", style: { color: g } }, m ? m(_, d, y) : _));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return A.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(B.PureComponent);
po(Hd, "displayName", "Legend");
po(Hd, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var jD = Eu;
function BD() {
  this.__data__ = new jD(), this.size = 0;
}
var kD = BD;
function RD(e9) {
  var t = this.__data__, r = t.delete(e9);
  return this.size = t.size, r;
}
var LD = RD;
function FD(e9) {
  return this.__data__.get(e9);
}
var UD = FD;
function zD(e9) {
  return this.__data__.has(e9);
}
var WD = zD, VD = Eu, qD = jd, GD = Bd, HD = 200;
function KD(e9, t) {
  var r = this.__data__;
  if (r instanceof VD) {
    var n = r.__data__;
    if (!qD || n.length < HD - 1) return n.push([e9, t]), this.size = ++r.size, this;
    r = this.__data__ = new GD(n);
  }
  return r.set(e9, t), this.size = r.size, this;
}
var YD = KD, XD = Eu, JD = kD, QD = LD, ZD = UD, tN = WD, eN = YD;
function wa(e9) {
  var t = this.__data__ = new XD(e9);
  this.size = t.size;
}
wa.prototype.clear = JD;
wa.prototype.delete = QD;
wa.prototype.get = ZD;
wa.prototype.has = tN;
wa.prototype.set = eN;
var vw = wa, rN = "__lodash_hash_undefined__";
function nN(e9) {
  return this.__data__.set(e9, rN), this;
}
var iN = nN;
function aN(e9) {
  return this.__data__.has(e9);
}
var oN = aN, sN = Bd, cN = iN, uN = oN;
function Tc(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.__data__ = new sN(); ++t < r; ) this.add(e9[t]);
}
Tc.prototype.add = Tc.prototype.push = cN;
Tc.prototype.has = uN;
var gw = Tc;
function lN(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length; ++r < n; ) if (t(e9[r], r, e9)) return true;
  return false;
}
var bw = lN;
function fN(e9, t) {
  return e9.has(t);
}
var _w = fN, hN = gw, dN = bw, pN = _w, yN = 1, mN = 2;
function vN(e9, t, r, n, i, a) {
  var o = r & yN, s = e9.length, c = t.length;
  if (s != c && !(o && c > s)) return false;
  var u = a.get(e9), l = a.get(t);
  if (u && l) return u == t && l == e9;
  var f = -1, h = true, d = r & mN ? new hN() : void 0;
  for (a.set(e9, t), a.set(t, e9); ++f < s; ) {
    var y = e9[f], m = t[f];
    if (n) var p = o ? n(m, y, f, t, e9, a) : n(y, m, f, e9, t, a);
    if (p !== void 0) {
      if (p) continue;
      h = false;
      break;
    }
    if (d) {
      if (!dN(t, function(_, g) {
        if (!pN(d, g) && (y === _ || i(y, _, r, n, a))) return d.push(g);
      })) {
        h = false;
        break;
      }
    } else if (!(y === m || i(y, m, r, n, a))) {
      h = false;
      break;
    }
  }
  return a.delete(e9), a.delete(t), h;
}
var ww = vN, gN = $r, bN = gN.Uint8Array, _N = bN;
function wN(e9) {
  var t = -1, r = Array(e9.size);
  return e9.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var SN = wN;
function ON(e9) {
  var t = -1, r = Array(e9.size);
  return e9.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Kd = ON, Gy = ns, Hy = _N, xN = Cd, AN = ww, PN = SN, TN = Kd, IN = 1, EN = 2, $N = "[object Boolean]", MN = "[object Date]", DN = "[object Error]", NN = "[object Map]", CN = "[object Number]", jN = "[object RegExp]", BN = "[object Set]", kN = "[object String]", RN = "[object Symbol]", LN = "[object ArrayBuffer]", FN = "[object DataView]", Ky = Gy ? Gy.prototype : void 0, Bl = Ky ? Ky.valueOf : void 0;
function UN(e9, t, r, n, i, a, o) {
  switch (r) {
    case FN:
      if (e9.byteLength != t.byteLength || e9.byteOffset != t.byteOffset) return false;
      e9 = e9.buffer, t = t.buffer;
    case LN:
      return !(e9.byteLength != t.byteLength || !a(new Hy(e9), new Hy(t)));
    case $N:
    case MN:
    case CN:
      return xN(+e9, +t);
    case DN:
      return e9.name == t.name && e9.message == t.message;
    case jN:
    case kN:
      return e9 == t + "";
    case NN:
      var s = PN;
    case BN:
      var c = n & IN;
      if (s || (s = TN), e9.size != t.size && !c) return false;
      var u = o.get(e9);
      if (u) return u == t;
      n |= EN, o.set(e9, t);
      var l = AN(s(e9), s(t), n, i, a, o);
      return o.delete(e9), l;
    case RN:
      if (Bl) return Bl.call(e9) == Bl.call(t);
  }
  return false;
}
var zN = UN;
function WN(e9, t) {
  for (var r = -1, n = t.length, i = e9.length; ++r < n; ) e9[i + r] = t[r];
  return e9;
}
var Sw = WN, VN = Sw, qN = $e;
function GN(e9, t, r) {
  var n = t(e9);
  return qN(e9) ? n : VN(n, r(e9));
}
var HN = GN;
function KN(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length, i = 0, a = []; ++r < n; ) {
    var o = e9[r];
    t(o, r, e9) && (a[i++] = o);
  }
  return a;
}
var YN = KN;
function XN() {
  return [];
}
var JN = XN, QN = YN, ZN = JN, tC = Object.prototype, eC = tC.propertyIsEnumerable, Yy = Object.getOwnPropertySymbols, rC = Yy ? function(e9) {
  return e9 == null ? [] : (e9 = Object(e9), QN(Yy(e9), function(t) {
    return eC.call(e9, t);
  }));
} : ZN, nC = rC;
function iC(e9, t) {
  for (var r = -1, n = Array(e9); ++r < e9; ) n[r] = t(r);
  return n;
}
var aC = iC, oC = Qr, sC = Zr, cC = "[object Arguments]";
function uC(e9) {
  return sC(e9) && oC(e9) == cC;
}
var lC = uC, Xy = lC, fC = Zr, Ow = Object.prototype, hC = Ow.hasOwnProperty, dC = Ow.propertyIsEnumerable, pC = Xy(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xy : function(e9) {
  return fC(e9) && hC.call(e9, "callee") && !dC.call(e9, "callee");
}, Yd = pC, Ic = { exports: {} };
function yC() {
  return false;
}
var mC = yC;
Ic.exports;
(function(e9, t) {
  var r = $r, n = mC, i = t && !t.nodeType && t, a = i && true && e9 && !e9.nodeType && e9, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e9.exports = u;
})(Ic, Ic.exports);
var xw = Ic.exports, vC = 9007199254740991, gC = /^(?:0|[1-9]\d*)$/;
function bC(e9, t) {
  var r = typeof e9;
  return t = t ?? vC, !!t && (r == "number" || r != "symbol" && gC.test(e9)) && e9 > -1 && e9 % 1 == 0 && e9 < t;
}
var Xd = bC, _C = 9007199254740991;
function wC(e9) {
  return typeof e9 == "number" && e9 > -1 && e9 % 1 == 0 && e9 <= _C;
}
var Jd = wC, SC = Qr, OC = Jd, xC = Zr, AC = "[object Arguments]", PC = "[object Array]", TC = "[object Boolean]", IC = "[object Date]", EC = "[object Error]", $C = "[object Function]", MC = "[object Map]", DC = "[object Number]", NC = "[object Object]", CC = "[object RegExp]", jC = "[object Set]", BC = "[object String]", kC = "[object WeakMap]", RC = "[object ArrayBuffer]", LC = "[object DataView]", FC = "[object Float32Array]", UC = "[object Float64Array]", zC = "[object Int8Array]", WC = "[object Int16Array]", VC = "[object Int32Array]", qC = "[object Uint8Array]", GC = "[object Uint8ClampedArray]", HC = "[object Uint16Array]", KC = "[object Uint32Array]", Rt = {};
Rt[FC] = Rt[UC] = Rt[zC] = Rt[WC] = Rt[VC] = Rt[qC] = Rt[GC] = Rt[HC] = Rt[KC] = true;
Rt[AC] = Rt[PC] = Rt[RC] = Rt[TC] = Rt[LC] = Rt[IC] = Rt[EC] = Rt[$C] = Rt[MC] = Rt[DC] = Rt[NC] = Rt[CC] = Rt[jC] = Rt[BC] = Rt[kC] = false;
function YC(e9) {
  return xC(e9) && OC(e9.length) && !!Rt[SC(e9)];
}
var XC = YC;
function JC(e9) {
  return function(t) {
    return e9(t);
  };
}
var Aw = JC, Ec = { exports: {} };
Ec.exports;
(function(e9, t) {
  var r = D_, n = t && !t.nodeType && t, i = n && true && e9 && !e9.nodeType && e9, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e9.exports = s;
})(Ec, Ec.exports);
var QC = Ec.exports, ZC = XC, tj = Aw, Jy = QC, Qy = Jy && Jy.isTypedArray, ej = Qy ? tj(Qy) : ZC, Pw = ej, rj = aC, nj = Yd, ij = $e, aj = xw, oj = Xd, sj = Pw, cj = Object.prototype, uj = cj.hasOwnProperty;
function lj(e9, t) {
  var r = ij(e9), n = !r && nj(e9), i = !r && !n && aj(e9), a = !r && !n && !i && sj(e9), o = r || n || i || a, s = o ? rj(e9.length, String) : [], c = s.length;
  for (var u in e9) (t || uj.call(e9, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || oj(u, c))) && s.push(u);
  return s;
}
var fj = lj, hj = Object.prototype;
function dj(e9) {
  var t = e9 && e9.constructor, r = typeof t == "function" && t.prototype || hj;
  return e9 === r;
}
var pj = dj;
function yj(e9, t) {
  return function(r) {
    return e9(t(r));
  };
}
var Tw = yj, mj = Tw, vj = mj(Object.keys, Object), gj = vj, bj = pj, _j = gj, wj = Object.prototype, Sj = wj.hasOwnProperty;
function Oj(e9) {
  if (!bj(e9)) return _j(e9);
  var t = [];
  for (var r in Object(e9)) Sj.call(e9, r) && r != "constructor" && t.push(r);
  return t;
}
var xj = Oj, Aj = Nd, Pj = Jd;
function Tj(e9) {
  return e9 != null && Pj(e9.length) && !Aj(e9);
}
var is = Tj, Ij = fj, Ej = xj, $j = is;
function Mj(e9) {
  return $j(e9) ? Ij(e9) : Ej(e9);
}
var Hu = Mj, Dj = HN, Nj = nC, Cj = Hu;
function jj(e9) {
  return Dj(e9, Cj, Nj);
}
var Bj = jj, Zy = Bj, kj = 1, Rj = Object.prototype, Lj = Rj.hasOwnProperty;
function Fj(e9, t, r, n, i, a) {
  var o = r & kj, s = Zy(e9), c = s.length, u = Zy(t), l = u.length;
  if (c != l && !o) return false;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in t : Lj.call(t, h))) return false;
  }
  var d = a.get(e9), y = a.get(t);
  if (d && y) return d == t && y == e9;
  var m = true;
  a.set(e9, t), a.set(t, e9);
  for (var p = o; ++f < c; ) {
    h = s[f];
    var _ = e9[h], g = t[h];
    if (n) var w = o ? n(g, _, h, t, e9, a) : n(_, g, h, e9, t, a);
    if (!(w === void 0 ? _ === g || i(_, g, r, n, a) : w)) {
      m = false;
      break;
    }
    p || (p = h == "constructor");
  }
  if (m && !p) {
    var S = e9.constructor, v = t.constructor;
    S != v && "constructor" in e9 && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof v == "function" && v instanceof v) && (m = false);
  }
  return a.delete(e9), a.delete(t), m;
}
var Uj = Fj, zj = ei, Wj = $r, Vj = zj(Wj, "DataView"), qj = Vj, Gj = ei, Hj = $r, Kj = Gj(Hj, "Promise"), Yj = Kj, Xj = ei, Jj = $r, Qj = Xj(Jj, "Set"), Iw = Qj, Zj = ei, tB = $r, eB = Zj(tB, "WeakMap"), rB = eB, Ff = qj, Uf = jd, zf = Yj, Wf = Iw, Vf = rB, Ew = Qr, Sa = C_, tm = "[object Map]", nB = "[object Object]", em = "[object Promise]", rm = "[object Set]", nm = "[object WeakMap]", im = "[object DataView]", iB = Sa(Ff), aB = Sa(Uf), oB = Sa(zf), sB = Sa(Wf), cB = Sa(Vf), Nn = Ew;
(Ff && Nn(new Ff(new ArrayBuffer(1))) != im || Uf && Nn(new Uf()) != tm || zf && Nn(zf.resolve()) != em || Wf && Nn(new Wf()) != rm || Vf && Nn(new Vf()) != nm) && (Nn = function(e9) {
  var t = Ew(e9), r = t == nB ? e9.constructor : void 0, n = r ? Sa(r) : "";
  if (n) switch (n) {
    case iB:
      return im;
    case aB:
      return tm;
    case oB:
      return em;
    case sB:
      return rm;
    case cB:
      return nm;
  }
  return t;
});
var uB = Nn, kl = vw, lB = ww, fB = zN, hB = Uj, am = uB, om = $e, sm = xw, dB = Pw, pB = 1, cm = "[object Arguments]", um = "[object Array]", ys = "[object Object]", yB = Object.prototype, lm = yB.hasOwnProperty;
function mB(e9, t, r, n, i, a) {
  var o = om(e9), s = om(t), c = o ? um : am(e9), u = s ? um : am(t);
  c = c == cm ? ys : c, u = u == cm ? ys : u;
  var l = c == ys, f = u == ys, h = c == u;
  if (h && sm(e9)) {
    if (!sm(t)) return false;
    o = true, l = false;
  }
  if (h && !l) return a || (a = new kl()), o || dB(e9) ? lB(e9, t, r, n, i, a) : fB(e9, t, c, r, n, i, a);
  if (!(r & pB)) {
    var d = l && lm.call(e9, "__wrapped__"), y = f && lm.call(t, "__wrapped__");
    if (d || y) {
      var m = d ? e9.value() : e9, p = y ? t.value() : t;
      return a || (a = new kl()), i(m, p, r, n, a);
    }
  }
  return h ? (a || (a = new kl()), hB(e9, t, r, n, i, a)) : false;
}
var vB = mB, gB = vB, fm = Zr;
function $w(e9, t, r, n, i) {
  return e9 === t ? true : e9 == null || t == null || !fm(e9) && !fm(t) ? e9 !== e9 && t !== t : gB(e9, t, r, n, $w, i);
}
var Qd = $w, bB = vw, _B = Qd, wB = 1, SB = 2;
function OB(e9, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e9 == null) return !a;
  for (e9 = Object(e9); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e9[s[0]] : !(s[0] in e9)) return false;
  }
  for (; ++i < a; ) {
    s = r[i];
    var c = s[0], u = e9[c], l = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(c in e9)) return false;
    } else {
      var f = new bB();
      if (n) var h = n(u, l, c, e9, t, f);
      if (!(h === void 0 ? _B(l, u, wB | SB, n, f) : h)) return false;
    }
  }
  return true;
}
var xB = OB, AB = wn;
function PB(e9) {
  return e9 === e9 && !AB(e9);
}
var Mw = PB, TB = Mw, IB = Hu;
function EB(e9) {
  for (var t = IB(e9), r = t.length; r--; ) {
    var n = t[r], i = e9[n];
    t[r] = [n, i, TB(i)];
  }
  return t;
}
var $B = EB;
function MB(e9, t) {
  return function(r) {
    return r == null ? false : r[e9] === t && (t !== void 0 || e9 in Object(r));
  };
}
var Dw = MB, DB = xB, NB = $B, CB = Dw;
function jB(e9) {
  var t = NB(e9);
  return t.length == 1 && t[0][2] ? CB(t[0][0], t[0][1]) : function(r) {
    return r === e9 || DB(r, e9, t);
  };
}
var BB = jB;
function kB(e9, t) {
  return e9 != null && t in Object(e9);
}
var RB = kB, LB = L_, FB = Yd, UB = $e, zB = Xd, WB = Jd, VB = Mu;
function qB(e9, t, r) {
  t = LB(t, e9);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = VB(t[n]);
    if (!(a = e9 != null && r(e9, o))) break;
    e9 = e9[o];
  }
  return a || ++n != i ? a : (i = e9 == null ? 0 : e9.length, !!i && WB(i) && zB(o, i) && (UB(e9) || FB(e9)));
}
var GB = qB, HB = RB, KB = GB;
function YB(e9, t) {
  return e9 != null && KB(e9, t, HB);
}
var XB = YB, JB = Qd, QB = F_, ZB = XB, t2 = Dd, e22 = Mw, r2 = Dw, n2 = Mu, i2 = 1, a2 = 2;
function o2(e9, t) {
  return t2(e9) && e22(t) ? r2(n2(e9), t) : function(r) {
    var n = QB(r, e9);
    return n === void 0 && n === t ? ZB(r, e9) : JB(t, n, i2 | a2);
  };
}
var s2 = o2;
function c2(e9) {
  return e9;
}
var Oa = c2;
function u2(e9) {
  return function(t) {
    return t == null ? void 0 : t[e9];
  };
}
var l2 = u2, f2 = Ld;
function h2(e9) {
  return function(t) {
    return f2(t, e9);
  };
}
var d2 = h2, p2 = l2, y2 = d2, m2 = Dd, v2 = Mu;
function g2(e9) {
  return m2(e9) ? p2(v2(e9)) : y2(e9);
}
var b2 = g2, _2 = BB, w2 = s2, S2 = Oa, O2 = $e, x2 = b2;
function A2(e9) {
  return typeof e9 == "function" ? e9 : e9 == null ? S2 : typeof e9 == "object" ? O2(e9) ? w2(e9[0], e9[1]) : _2(e9) : x2(e9);
}
var Sn = A2;
function P2(e9, t, r, n) {
  for (var i = e9.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e9[a], a, e9)) return a;
  return -1;
}
var Nw = P2;
function T2(e9) {
  return e9 !== e9;
}
var I2 = T2;
function E2(e9, t, r) {
  for (var n = r - 1, i = e9.length; ++n < i; ) if (e9[n] === t) return n;
  return -1;
}
var $2 = E2, M2 = Nw, D2 = I2, N2 = $2;
function C2(e9, t, r) {
  return t === t ? N2(e9, t, r) : M2(e9, D2, r);
}
var j2 = C2, B2 = j2;
function k2(e9, t) {
  var r = e9 == null ? 0 : e9.length;
  return !!r && B2(e9, t, 0) > -1;
}
var R2 = k2;
function L2(e9, t, r) {
  for (var n = -1, i = e9 == null ? 0 : e9.length; ++n < i; ) if (r(t, e9[n])) return true;
  return false;
}
var F2 = L2;
function U2() {
}
var z2 = U2, Rl = Iw, W2 = z2, V2 = Kd, q2 = 1 / 0, G2 = Rl && 1 / V2(new Rl([, -0]))[1] == q2 ? function(e9) {
  return new Rl(e9);
} : W2, H2 = G2, K2 = gw, Y2 = R2, X2 = F2, J2 = _w, Q2 = H2, Z2 = Kd, tk = 200;
function ek(e9, t, r) {
  var n = -1, i = Y2, a = e9.length, o = true, s = [], c = s;
  if (r) o = false, i = X2;
  else if (a >= tk) {
    var u = t ? null : Q2(e9);
    if (u) return Z2(u);
    o = false, i = J2, c = new K2();
  } else c = t ? [] : s;
  t: for (; ++n < a; ) {
    var l = e9[n], f = t ? t(l) : l;
    if (l = r || l !== 0 ? l : 0, o && f === f) {
      for (var h = c.length; h--; ) if (c[h] === f) continue t;
      t && c.push(f), s.push(l);
    } else i(c, f, r) || (c !== s && c.push(f), s.push(l));
  }
  return s;
}
var rk = ek, nk = Sn, ik = rk;
function ak(e9, t) {
  return e9 && e9.length ? ik(e9, nk(t)) : [];
}
var ok = ak;
const hm = Bt(ok);
function Cw(e9, t, r) {
  return t === true ? hm(e9, r) : lt(t) ? hm(e9, t) : e9;
}
function zi(e9) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e9);
}
var sk = ["ref"];
function dm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mr(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dm(Object(r), true).forEach(function(n) {
      Ku(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function ck(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function pm(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, Bw(n.key), n);
  }
}
function uk(e9, t, r) {
  return t && pm(e9.prototype, t), r && pm(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function lk(e9, t, r) {
  return t = $c(t), fk(e9, jw() ? Reflect.construct(t, r || [], $c(e9).constructor) : t.apply(e9, r));
}
function fk(e9, t) {
  if (t && (zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return hk(e9);
}
function hk(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function jw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jw = function() {
    return !!e9;
  })();
}
function $c(e9) {
  return $c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $c(e9);
}
function dk(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && qf(e9, t);
}
function qf(e9, t) {
  return qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qf(e9, t);
}
function Ku(e9, t, r) {
  return t = Bw(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Bw(e9) {
  var t = pk(e9, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function pk(e9, t) {
  if (zi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function yk(e9, t) {
  if (e9 == null) return {};
  var r = mk(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function mk(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function vk(e9) {
  return e9.value;
}
function gk(e9, t) {
  if (A.isValidElement(e9)) return A.cloneElement(e9, t);
  if (typeof e9 == "function") return A.createElement(e9, t);
  t.ref;
  var r = yk(t, sk);
  return A.createElement(Hd, r);
}
var ym = 1, dn = function(e9) {
  function t() {
    var r;
    ck(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = lk(this, t, [].concat(i)), Ku(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return dk(t, e9), uk(t, [{ key: "componentDidMount", value: function() {
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
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > ym || Math.abs(i.height - this.lastBoundingBox.height) > ym) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
  } }, { key: "getBBoxSnapshot", value: function() {
    return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Mr({}, this.lastBoundingBox) : { width: 0, height: 0 };
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
    return Mr(Mr({}, f), h);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.content, o = i.width, s = i.height, c = i.wrapperStyle, u = i.payloadUniqBy, l = i.payload, f = Mr(Mr({ position: "absolute", width: o || "auto", height: s || "auto" }, this.getDefaultPosition(c)), c);
    return A.createElement("div", { className: "recharts-legend-wrapper", style: f, ref: function(d) {
      n.wrapperNode = d;
    } }, gk(a, Mr(Mr({}, this.props), {}, { payload: Cw(l, u, vk) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = Mr(Mr({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && L(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(B.PureComponent);
Ku(dn, "displayName", "Legend");
Ku(dn, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var mm = ns, bk = Yd, _k = $e, vm = mm ? mm.isConcatSpreadable : void 0;
function wk(e9) {
  return _k(e9) || bk(e9) || !!(vm && e9 && e9[vm]);
}
var Sk = wk, Ok = Sw, xk = Sk;
function kw(e9, t, r, n, i) {
  var a = -1, o = e9.length;
  for (r || (r = xk), i || (i = []); ++a < o; ) {
    var s = e9[a];
    t > 0 && r(s) ? t > 1 ? kw(s, t - 1, r, n, i) : Ok(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var Rw = kw;
function Ak(e9) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e9 ? s : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var Pk = Ak, Tk = Pk, Ik = Tk(), Ek = Ik, $k = Ek, Mk = Hu;
function Dk(e9, t) {
  return e9 && $k(e9, t, Mk);
}
var Lw = Dk, Nk = is;
function Ck(e9, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!Nk(r)) return e9(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var jk = Ck, Bk = Lw, kk = jk, Rk = kk(Bk), Zd = Rk, Lk = Zd, Fk = is;
function Uk(e9, t) {
  var r = -1, n = Fk(e9) ? Array(e9.length) : [];
  return Lk(e9, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Fw = Uk;
function zk(e9, t) {
  var r = e9.length;
  for (e9.sort(t); r--; ) e9[r] = e9[r].value;
  return e9;
}
var Wk = zk, gm = ya;
function Vk(e9, t) {
  if (e9 !== t) {
    var r = e9 !== void 0, n = e9 === null, i = e9 === e9, a = gm(e9), o = t !== void 0, s = t === null, c = t === t, u = gm(t);
    if (!s && !u && !a && e9 > t || a && o && c && !s && !u || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !u && e9 < t || u && r && i && !n && !a || s && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var qk = Vk, Gk = qk;
function Hk(e9, t, r) {
  for (var n = -1, i = e9.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = Gk(i[n], a[n]);
    if (c) {
      if (n >= s) return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e9.index - t.index;
}
var Kk = Hk, Ll = Rd, Yk = Ld, Xk = Sn, Jk = Fw, Qk = Wk, Zk = Aw, tR = Kk, eR = Oa, rR = $e;
function nR(e9, t, r) {
  t.length ? t = Ll(t, function(a) {
    return rR(a) ? function(o) {
      return Yk(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [eR];
  var n = -1;
  t = Ll(t, Zk(Xk));
  var i = Jk(e9, function(a, o, s) {
    var c = Ll(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return Qk(i, function(a, o) {
    return tR(a, o, r);
  });
}
var iR = nR;
function aR(e9, t, r) {
  switch (r.length) {
    case 0:
      return e9.call(t);
    case 1:
      return e9.call(t, r[0]);
    case 2:
      return e9.call(t, r[0], r[1]);
    case 3:
      return e9.call(t, r[0], r[1], r[2]);
  }
  return e9.apply(t, r);
}
var oR = aR, sR = oR, bm = Math.max;
function cR(e9, t, r) {
  return t = bm(t === void 0 ? e9.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = bm(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), sR(e9, this, s);
  };
}
var uR = cR;
function lR(e9) {
  return function() {
    return e9;
  };
}
var fR = lR, hR = ei, dR = function() {
  try {
    var e9 = hR(Object, "defineProperty");
    return e9({}, "", {}), e9;
  } catch {
  }
}(), Uw = dR, pR = fR, _m = Uw, yR = Oa, mR = _m ? function(e9, t) {
  return _m(e9, "toString", { configurable: true, enumerable: false, value: pR(t), writable: true });
} : yR, vR = mR, gR = 800, bR = 16, _R = Date.now;
function wR(e9) {
  var t = 0, r = 0;
  return function() {
    var n = _R(), i = bR - (n - r);
    if (r = n, i > 0) {
      if (++t >= gR) return arguments[0];
    } else t = 0;
    return e9.apply(void 0, arguments);
  };
}
var SR = wR, OR = vR, xR = SR, AR = xR(OR), PR = AR, TR = Oa, IR = uR, ER = PR;
function $R(e9, t) {
  return ER(IR(e9, t, TR), e9 + "");
}
var MR = $R, DR = Cd, NR = is, CR = Xd, jR = wn;
function BR(e9, t, r) {
  if (!jR(r)) return false;
  var n = typeof t;
  return (n == "number" ? NR(r) && CR(t, r.length) : n == "string" && t in r) ? DR(r[t], e9) : false;
}
var Yu = BR, kR = Rw, RR = iR, LR = MR, wm = Yu, FR = LR(function(e9, t) {
  if (e9 == null) return [];
  var r = t.length;
  return r > 1 && wm(e9, t[0], t[1]) ? t = [] : r > 2 && wm(t[0], t[1], t[2]) && (t = [t[0]]), RR(e9, kR(t, 1), []);
}), UR = FR;
const tp = Bt(UR);
function yo(e9) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e9);
}
function Gf() {
  return Gf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Gf.apply(this, arguments);
}
function zR(e9, t) {
  return GR(e9) || qR(e9, t) || VR(e9, t) || WR();
}
function WR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VR(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Sm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sm(e9, t);
  }
}
function Sm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function qR(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function GR(e9) {
  if (Array.isArray(e9)) return e9;
}
function Om(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fl(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), true).forEach(function(n) {
      HR(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function HR(e9, t, r) {
  return t = KR(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function KR(e9) {
  var t = YR(e9, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function YR(e9, t) {
  if (yo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function XR(e9) {
  return Array.isArray(e9) && ie(e9[0]) && ie(e9[1]) ? e9.join(" ~ ") : e9;
}
var JR = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, _ = t.accessibilityLayer, g = _ === void 0 ? false : _, w = function() {
    if (l && l.length) {
      var I = { padding: 0, margin: 0 }, j = (h ? tp(l, h) : l).map(function(N, M) {
        if (N.type === "none") return null;
        var C = Fl({ display: "block", paddingTop: 4, paddingBottom: 4, color: N.color || "#000" }, s), k = N.formatter || f || XR, F = N.value, U = N.name, q = F, rt = U;
        if (k && q != null && rt != null) {
          var W = k(F, U, N, M, l);
          if (Array.isArray(W)) {
            var it = zR(W, 2);
            q = it[0], rt = it[1];
          } else q = W;
        }
        return A.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: C }, ie(rt) ? A.createElement("span", { className: "recharts-tooltip-item-name" }, rt) : null, ie(rt) ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, A.createElement("span", { className: "recharts-tooltip-item-value" }, q), A.createElement("span", { className: "recharts-tooltip-item-unit" }, N.unit || ""));
      });
      return A.createElement("ul", { className: "recharts-tooltip-item-list", style: I }, j);
    }
    return null;
  }, S = Fl({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), v = Fl({ margin: 0 }, u), b = !st(m), O = b ? m : "", P = mt("recharts-default-tooltip", d), T = mt("recharts-tooltip-label", y);
  b && p && l !== void 0 && l !== null && (O = p(m, l));
  var $ = g ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement("div", Gf({ className: P, style: S }, $), A.createElement("p", { className: T, style: v }, A.isValidElement(O) ? O : "".concat(O)), w());
};
function mo(e9) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e9);
}
function ms(e9, t, r) {
  return t = QR(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function QR(e9) {
  var t = ZR(e9, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function ZR(e9, t) {
  if (mo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Da = "recharts-tooltip-wrapper", tL = { visibility: "hidden" };
function eL(e9) {
  var t = e9.coordinate, r = e9.translateX, n = e9.translateY;
  return mt(Da, ms(ms(ms(ms({}, "".concat(Da, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat(Da, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat(Da, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat(Da, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function xm(e9) {
  var t = e9.allowEscapeViewBox, r = e9.coordinate, n = e9.key, i = e9.offsetTopLeft, a = e9.position, o = e9.reverseDirection, s = e9.tooltipDimension, c = e9.viewBox, u = e9.viewBoxDimension;
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
function rL(e9) {
  var t = e9.translateX, r = e9.translateY, n = e9.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function nL(e9) {
  var t = e9.allowEscapeViewBox, r = e9.coordinate, n = e9.offsetTopLeft, i = e9.position, a = e9.reverseDirection, o = e9.tooltipBox, s = e9.useTranslate3d, c = e9.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = xm({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), f = xm({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), u = rL({ translateX: l, translateY: f, useTranslate3d: s })) : u = tL, { cssProperties: u, cssClasses: eL({ translateX: l, translateY: f, coordinate: r }) };
}
function Wi(e9) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e9);
}
function Am(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pm(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), true).forEach(function(n) {
      Kf(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function iL(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function aL(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, Ww(n.key), n);
  }
}
function oL(e9, t, r) {
  return t && aL(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function sL(e9, t, r) {
  return t = Mc(t), cL(e9, zw() ? Reflect.construct(t, r || [], Mc(e9).constructor) : t.apply(e9, r));
}
function cL(e9, t) {
  if (t && (Wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return uL(e9);
}
function uL(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function zw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zw = function() {
    return !!e9;
  })();
}
function Mc(e9) {
  return Mc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mc(e9);
}
function lL(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Hf(e9, t);
}
function Hf(e9, t) {
  return Hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hf(e9, t);
}
function Kf(e9, t, r) {
  return t = Ww(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Ww(e9) {
  var t = fL(e9, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function fL(e9, t) {
  if (Wi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Tm = 1, hL = function(e9) {
  function t() {
    var r;
    iL(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = sL(this, t, [].concat(i)), Kf(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), Kf(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0, y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return lL(t, e9), oL(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > Tm || Math.abs(n.height - this.state.lastBoundingBox.height) > Tm) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, m = i.reverseDirection, p = i.useTranslate3d, _ = i.viewBox, g = i.wrapperStyle, w = nL({ allowEscapeViewBox: o, coordinate: l, offsetTopLeft: d, position: y, reverseDirection: m, tooltipBox: this.state.lastBoundingBox, useTranslate3d: p, viewBox: _ }), S = w.cssClasses, v = w.cssProperties, b = Pm(Pm({ transition: h && a ? "transform ".concat(s, "ms ").concat(c) : void 0 }, v), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, g);
    return A.createElement("div", { tabIndex: -1, className: S, style: b, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(B.PureComponent), dL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, On = { isSsr: dL() };
function Vi(e9) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e9);
}
function Im(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Em(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Im(Object(r), true).forEach(function(n) {
      ep(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function pL(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function yL(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, qw(n.key), n);
  }
}
function mL(e9, t, r) {
  return t && yL(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function vL(e9, t, r) {
  return t = Dc(t), gL(e9, Vw() ? Reflect.construct(t, r || [], Dc(e9).constructor) : t.apply(e9, r));
}
function gL(e9, t) {
  if (t && (Vi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return bL(e9);
}
function bL(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function Vw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vw = function() {
    return !!e9;
  })();
}
function Dc(e9) {
  return Dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dc(e9);
}
function _L(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Yf(e9, t);
}
function Yf(e9, t) {
  return Yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Yf(e9, t);
}
function ep(e9, t, r) {
  return t = qw(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function qw(e9) {
  var t = wL(e9, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function wL(e9, t) {
  if (Vi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function SL(e9) {
  return e9.dataKey;
}
function OL(e9, t) {
  return A.isValidElement(e9) ? A.cloneElement(e9, t) : typeof e9 == "function" ? A.createElement(e9, t) : A.createElement(JR, t);
}
var nr = function(e9) {
  function t() {
    return pL(this, t), vL(this, t, arguments);
  }
  return _L(t, e9), mL(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, m = i.payloadUniqBy, p = i.position, _ = i.reverseDirection, g = i.useTranslate3d, w = i.viewBox, S = i.wrapperStyle, v = y ?? [];
    f && v.length && (v = Cw(y.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), m, SL));
    var b = v.length > 0;
    return A.createElement(hL, { allowEscapeViewBox: o, animationDuration: s, animationEasing: c, isAnimationActive: h, active: a, coordinate: l, hasPayload: b, offset: d, position: p, reverseDirection: _, useTranslate3d: g, viewBox: w, wrapperStyle: S }, OL(u, Em(Em({}, this.props), {}, { payload: v })));
  } }]);
}(B.PureComponent);
ep(nr, "displayName", "Tooltip");
ep(nr, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !On.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var xL = $r, AL = function() {
  return xL.Date.now();
}, PL = AL, TL = /\s/;
function IL(e9) {
  for (var t = e9.length; t-- && TL.test(e9.charAt(t)); ) ;
  return t;
}
var EL = IL, $L = EL, ML = /^\s+/;
function DL(e9) {
  return e9 && e9.slice(0, $L(e9) + 1).replace(ML, "");
}
var NL = DL, CL = NL, $m = wn, jL = ya, Mm = NaN, BL = /^[-+]0x[0-9a-f]+$/i, kL = /^0b[01]+$/i, RL = /^0o[0-7]+$/i, LL = parseInt;
function FL(e9) {
  if (typeof e9 == "number") return e9;
  if (jL(e9)) return Mm;
  if ($m(e9)) {
    var t = typeof e9.valueOf == "function" ? e9.valueOf() : e9;
    e9 = $m(t) ? t + "" : t;
  }
  if (typeof e9 != "string") return e9 === 0 ? e9 : +e9;
  e9 = CL(e9);
  var r = kL.test(e9);
  return r || RL.test(e9) ? LL(e9.slice(2), r ? 2 : 8) : BL.test(e9) ? Mm : +e9;
}
var Gw = FL, UL = wn, Ul = PL, Dm = Gw, zL = "Expected a function", WL = Math.max, VL = Math.min;
function qL(e9, t, r) {
  var n, i, a, o, s, c, u = 0, l = false, f = false, h = true;
  if (typeof e9 != "function") throw new TypeError(zL);
  t = Dm(t) || 0, UL(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? WL(Dm(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var O = n, P = i;
    return n = i = void 0, u = b, o = e9.apply(P, O), o;
  }
  function y(b) {
    return u = b, s = setTimeout(_, t), l ? d(b) : o;
  }
  function m(b) {
    var O = b - c, P = b - u, T = t - O;
    return f ? VL(T, a - P) : T;
  }
  function p(b) {
    var O = b - c, P = b - u;
    return c === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function _() {
    var b = Ul();
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
    return s === void 0 ? o : g(Ul());
  }
  function v() {
    var b = Ul(), O = p(b);
    if (n = arguments, i = this, c = b, O) {
      if (s === void 0) return y(c);
      if (f) return clearTimeout(s), s = setTimeout(_, t), d(c);
    }
    return s === void 0 && (s = setTimeout(_, t)), o;
  }
  return v.cancel = w, v.flush = S, v;
}
var GL = qL, HL = GL, KL = wn, YL = "Expected a function";
function XL(e9, t, r) {
  var n = true, i = true;
  if (typeof e9 != "function") throw new TypeError(YL);
  return KL(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), HL(e9, t, { leading: n, maxWait: t, trailing: i });
}
var JL = XL;
const Hw = Bt(JL);
function vo(e9) {
  "@babel/helpers - typeof";
  return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vo(e9);
}
function Nm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vs(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nm(Object(r), true).forEach(function(n) {
      QL(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function QL(e9, t, r) {
  return t = ZL(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function ZL(e9) {
  var t = tF(e9, "string");
  return vo(t) == "symbol" ? t : t + "";
}
function tF(e9, t) {
  if (vo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function eF(e9, t) {
  return aF(e9) || iF(e9, t) || nF(e9, t) || rF();
}
function rF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nF(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Cm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cm(e9, t);
  }
}
function Cm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function iF(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function aF(e9) {
  if (Array.isArray(e9)) return e9;
}
var jm = B.forwardRef(function(e9, t) {
  var r = e9.aspect, n = e9.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e9.width, o = a === void 0 ? "100%" : a, s = e9.height, c = s === void 0 ? "100%" : s, u = e9.minWidth, l = u === void 0 ? 0 : u, f = e9.minHeight, h = e9.maxHeight, d = e9.children, y = e9.debounce, m = y === void 0 ? 0 : y, p = e9.id, _ = e9.className, g = e9.onResize, w = e9.style, S = w === void 0 ? {} : w, v = B.useRef(null), b = B.useRef();
  b.current = g, B.useImperativeHandle(t, function() {
    return Object.defineProperty(v.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), v.current;
    }, configurable: true });
  });
  var O = B.useState({ containerWidth: i.width, containerHeight: i.height }), P = eF(O, 2), T = P[0], $ = P[1], E = B.useCallback(function(j, N) {
    $(function(M) {
      var C = Math.round(j), k = Math.round(N);
      return M.containerWidth === C && M.containerHeight === k ? M : { containerWidth: C, containerHeight: k };
    });
  }, []);
  B.useEffect(function() {
    var j = function(U) {
      var q, rt = U[0].contentRect, W = rt.width, it = rt.height;
      E(W, it), (q = b.current) === null || q === void 0 || q.call(b, W, it);
    };
    m > 0 && (j = Hw(j, m, { trailing: true, leading: false }));
    var N = new ResizeObserver(j), M = v.current.getBoundingClientRect(), C = M.width, k = M.height;
    return E(C, k), N.observe(v.current), function() {
      N.disconnect();
    };
  }, [E, m]);
  var I = B.useMemo(function() {
    var j = T.containerWidth, N = T.containerHeight;
    if (j < 0 || N < 0) return null;
    Wr(Bn(o) || Bn(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Wr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var M = Bn(o) ? j : o, C = Bn(c) ? N : c;
    r && r > 0 && (M ? C = M / r : C && (M = C * r), h && C > h && (C = h)), Wr(M > 0 || C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, M, C, o, c, l, f, r);
    var k = !Array.isArray(d) && zr(d.type).endsWith("Chart");
    return A.Children.map(d, function(F) {
      return A.isValidElement(F) ? B.cloneElement(F, vs({ width: M, height: C }, k ? { style: vs({ height: "100%", width: "100%", maxHeight: C, maxWidth: M }, F.props.style) } : {})) : F;
    });
  }, [r, d, c, h, f, l, T, o]);
  return A.createElement("div", { id: p ? "".concat(p) : void 0, className: mt("recharts-responsive-container", _), style: vs(vs({}, S), {}, { width: o, height: c, minWidth: l, minHeight: f, maxHeight: h }), ref: v }, I);
}), rp = function(t) {
  return null;
};
rp.displayName = "Cell";
function go(e9) {
  "@babel/helpers - typeof";
  return go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, go(e9);
}
function Bm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xf(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bm(Object(r), true).forEach(function(n) {
      oF(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function oF(e9, t, r) {
  return t = sF(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function sF(e9) {
  var t = cF(e9, "string");
  return go(t) == "symbol" ? t : t + "";
}
function cF(e9, t) {
  if (go(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var ci = { widthCache: {}, cacheCount: 0 }, uF = 2e3, lF = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, km = "recharts_measurement_span";
function fF(e9) {
  var t = Xf({}, e9);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Qa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || On.isSsr) return { width: 0, height: 0 };
  var n = fF(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (ci.widthCache[i]) return ci.widthCache[i];
  try {
    var a = document.getElementById(km);
    a || (a = document.createElement("span"), a.setAttribute("id", km), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Xf(Xf({}, lF), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = { width: s.width, height: s.height };
    return ci.widthCache[i] = c, ++ci.cacheCount > uF && (ci.cacheCount = 0, ci.widthCache = {}), c;
  } catch {
    return { width: 0, height: 0 };
  }
}, hF = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function bo(e9) {
  "@babel/helpers - typeof";
  return bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bo(e9);
}
function Nc(e9, t) {
  return mF(e9) || yF(e9, t) || pF(e9, t) || dF();
}
function dF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pF(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Rm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rm(e9, t);
  }
}
function Rm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function yF(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t === 0) {
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
function mF(e9) {
  if (Array.isArray(e9)) return e9;
}
function vF(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Lm(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, bF(n.key), n);
  }
}
function gF(e9, t, r) {
  return t && Lm(e9.prototype, t), r && Lm(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function bF(e9) {
  var t = _F(e9, "string");
  return bo(t) == "symbol" ? t : t + "";
}
function _F(e9, t) {
  if (bo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Fm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Um = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, wF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, SF = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Kw = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, OF = Object.keys(Kw), xi = "NaN";
function xF(e9, t) {
  return e9 * Kw[t];
}
var gs = function() {
  function e9(t, r) {
    vF(this, e9), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !wF.test(r) && (this.num = NaN, this.unit = ""), OF.includes(r) && (this.num = xF(t, r), this.unit = "px");
  }
  return gF(e9, [{ key: "add", value: function(r) {
    return this.unit !== r.unit ? new e9(NaN, "") : new e9(this.num + r.num, this.unit);
  } }, { key: "subtract", value: function(r) {
    return this.unit !== r.unit ? new e9(NaN, "") : new e9(this.num - r.num, this.unit);
  } }, { key: "multiply", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e9(NaN, "") : new e9(this.num * r.num, this.unit || r.unit);
  } }, { key: "divide", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e9(NaN, "") : new e9(this.num / r.num, this.unit || r.unit);
  } }, { key: "toString", value: function() {
    return "".concat(this.num).concat(this.unit);
  } }, { key: "isNaN", value: function() {
    return Number.isNaN(this.num);
  } }], [{ key: "parse", value: function(r) {
    var n, i = (n = SF.exec(r)) !== null && n !== void 0 ? n : [], a = Nc(i, 3), o = a[1], s = a[2];
    return new e9(parseFloat(o), s ?? "");
  } }]);
}();
function Yw(e9) {
  if (e9.includes(xi)) return xi;
  for (var t = e9; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Fm.exec(t)) !== null && r !== void 0 ? r : [], i = Nc(n, 4), a = i[1], o = i[2], s = i[3], c = gs.parse(a ?? ""), u = gs.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return xi;
    t = t.replace(Fm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, h = (f = Um.exec(t)) !== null && f !== void 0 ? f : [], d = Nc(h, 4), y = d[1], m = d[2], p = d[3], _ = gs.parse(y ?? ""), g = gs.parse(p ?? ""), w = m === "+" ? _.add(g) : _.subtract(g);
    if (w.isNaN()) return xi;
    t = t.replace(Um, w.toString());
  }
  return t;
}
var zm = /\(([^()]*)\)/;
function AF(e9) {
  for (var t = e9; t.includes("("); ) {
    var r = zm.exec(t), n = Nc(r, 2), i = n[1];
    t = t.replace(zm, Yw(i));
  }
  return t;
}
function PF(e9) {
  var t = e9.replace(/\s+/g, "");
  return t = AF(t), t = Yw(t), t;
}
function TF(e9) {
  try {
    return PF(e9);
  } catch {
    return xi;
  }
}
function zl(e9) {
  var t = TF(e9.slice(5, -1));
  return t === xi ? "" : t;
}
var IF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], EF = ["dx", "dy", "angle", "className", "breakAll"];
function Jf() {
  return Jf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Jf.apply(this, arguments);
}
function Wm(e9, t) {
  if (e9 == null) return {};
  var r = $F(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function $F(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Vm(e9, t) {
  return CF(e9) || NF(e9, t) || DF(e9, t) || MF();
}
function MF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DF(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return qm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qm(e9, t);
  }
}
function qm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function NF(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t === 0) {
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
function CF(e9) {
  if (Array.isArray(e9)) return e9;
}
var Xw = /[ \f\n\r\t\v\u2028\u2029]+/, Jw = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    st(r) || (n ? a = r.toString().split("") : a = r.toString().split(Xw));
    var o = a.map(function(c) {
      return { word: c, width: Qa(c, i).width };
    }), s = n ? 0 : Qa("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, jF = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = L(o), f = s, h = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(C, k) {
      var F = k.word, U = k.width, q = C[C.length - 1];
      if (q && (i == null || a || q.width + U + n < Number(i))) q.words.push(F), q.width += U + n;
      else {
        var rt = { words: [F], width: U };
        C.push(rt);
      }
      return C;
    }, []);
  }, d = h(r), y = function(M) {
    return M.reduce(function(C, k) {
      return C.width > k.width ? C : k;
    });
  };
  if (!l) return d;
  for (var m = "\u2026", p = function(M) {
    var C = f.slice(0, M), k = Jw({ breakAll: u, style: c, children: C + m }).wordsWithComputedWidth, F = h(k), U = F.length > o || y(F).width > Number(i);
    return [U, F];
  }, _ = 0, g = f.length - 1, w = 0, S; _ <= g && w <= f.length - 1; ) {
    var v = Math.floor((_ + g) / 2), b = v - 1, O = p(b), P = Vm(O, 2), T = P[0], $ = P[1], E = p(v), I = Vm(E, 1), j = I[0];
    if (!T && !j && (_ = v + 1), T && j && (g = v - 1), !T && j) {
      S = $;
      break;
    }
    w++;
  }
  return S || d;
}, Gm = function(t) {
  var r = st(t) ? [] : t.toString().split(Xw);
  return [{ words: r }];
}, BF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !On.isSsr) {
    var c, u, l = Jw({ breakAll: o, children: i, style: a });
    if (l) {
      var f = l.wordsWithComputedWidth, h = l.spaceWidth;
      c = f, u = h;
    } else return Gm(i);
    return jF({ breakAll: o, children: i, maxLines: s, style: a }, c, u, r, n);
  }
  return Gm(i);
}, Hm = "#808080", Cc = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? false : l, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, _ = p === void 0 ? Hm : p, g = Wm(t, IF), w = B.useMemo(function() {
    return BF({ breakAll: g.breakAll, children: g.children, maxLines: g.maxLines, scaleToFit: f, style: g.style, width: g.width });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), S = g.dx, v = g.dy, b = g.angle, O = g.className, P = g.breakAll, T = Wm(g, EF);
  if (!ie(n) || !ie(a)) return null;
  var $ = n + (L(S) ? S : 0), E = a + (L(v) ? v : 0), I;
  switch (m) {
    case "start":
      I = zl("calc(".concat(u, ")"));
      break;
    case "middle":
      I = zl("calc(".concat((w.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      I = zl("calc(".concat(w.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var N = w[0].width, M = g.width;
    j.push("scale(".concat((L(M) ? M / N : 1) / N, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat($, ", ").concat(E, ")")), j.length && (T.transform = j.join(" ")), A.createElement("text", Jf({}, ct(T, true), { x: $, y: E, className: mt("recharts-text", O), textAnchor: d, fill: _.includes("url") ? Hm : _ }), w.map(function(C, k) {
    var F = C.words.join(P ? "" : " ");
    return A.createElement("tspan", { x: $, dy: k === 0 ? I : s, key: "".concat(F, "-").concat(k) }, F);
  }));
};
function pn(e9, t) {
  return e9 == null || t == null ? NaN : e9 < t ? -1 : e9 > t ? 1 : e9 >= t ? 0 : NaN;
}
function kF(e9, t) {
  return e9 == null || t == null ? NaN : t < e9 ? -1 : t > e9 ? 1 : t >= e9 ? 0 : NaN;
}
function np(e9) {
  let t, r, n;
  e9.length !== 2 ? (t = pn, r = (s, c) => pn(e9(s), c), n = (s, c) => e9(s) - c) : (t = e9 === pn || e9 === kF ? e9 : RF, r = e9, n = e9);
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
function RF() {
  return 0;
}
function Qw(e9) {
  return e9 === null ? NaN : +e9;
}
function* LF(e9, t) {
  for (let r of e9) r != null && (r = +r) >= r && (yield r);
}
const FF = np(pn), as = FF.right;
np(Qw).center;
class Km extends Map {
  constructor(t, r = WF) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Ym(this, t));
  }
  has(t) {
    return super.has(Ym(this, t));
  }
  set(t, r) {
    return super.set(UF(this, t), r);
  }
  delete(t) {
    return super.delete(zF(this, t));
  }
}
function Ym({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) ? e9.get(n) : r;
}
function UF({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) ? e9.get(n) : (e9.set(n, r), r);
}
function zF({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) && (r = e9.get(n), e9.delete(n)), r;
}
function WF(e9) {
  return e9 !== null && typeof e9 == "object" ? e9.valueOf() : e9;
}
function VF(e9 = pn) {
  if (e9 === pn) return Zw;
  if (typeof e9 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e9(t, r);
    return n || n === 0 ? n : (e9(r, r) === 0) - (e9(t, t) === 0);
  };
}
function Zw(e9, t) {
  return (e9 == null || !(e9 >= e9)) - (t == null || !(t >= t)) || (e9 < t ? -1 : e9 > t ? 1 : 0);
}
const qF = Math.sqrt(50), GF = Math.sqrt(10), HF = Math.sqrt(2);
function jc(e9, t, r) {
  const n = (t - e9) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= qF ? 10 : a >= GF ? 5 : a >= HF ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e9 * u), c = Math.round(t * u), s / u < e9 && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e9 / u), c = Math.round(t / u), s * u < e9 && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? jc(e9, t, r * 2) : [s, c, u];
}
function Qf(e9, t, r) {
  if (t = +t, e9 = +e9, r = +r, !(r > 0)) return [];
  if (e9 === t) return [e9];
  const n = t < e9, [i, a, o] = n ? jc(t, e9, r) : jc(e9, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Zf(e9, t, r) {
  return t = +t, e9 = +e9, r = +r, jc(e9, t, r)[2];
}
function th(e9, t, r) {
  t = +t, e9 = +e9, r = +r;
  const n = t < e9, i = n ? Zf(t, e9, r) : Zf(e9, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xm(e9, t) {
  let r;
  for (const n of e9) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Jm(e9, t) {
  let r;
  for (const n of e9) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function tS(e9, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e9.length - 1, n)), !(r <= t && t <= n)) return e9;
  for (i = i === void 0 ? Zw : VF(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), h = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * f / c + h)), y = Math.min(n, Math.floor(t + (c - u) * f / c + h));
      tS(e9, t, d, y, i);
    }
    const a = e9[t];
    let o = r, s = n;
    for (Na(e9, r, t), i(e9[n], a) > 0 && Na(e9, r, n); o < s; ) {
      for (Na(e9, o, s), ++o, --s; i(e9[o], a) < 0; ) ++o;
      for (; i(e9[s], a) > 0; ) --s;
    }
    i(e9[r], a) === 0 ? Na(e9, r, s) : (++s, Na(e9, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e9;
}
function Na(e9, t, r) {
  const n = e9[t];
  e9[t] = e9[r], e9[r] = n;
}
function KF(e9, t, r) {
  if (e9 = Float64Array.from(LF(e9)), !(!(n = e9.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Jm(e9);
    if (t >= 1) return Xm(e9);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Xm(tS(e9, a).subarray(0, a + 1)), s = Jm(e9.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function YF(e9, t, r = Qw) {
  if (!(!(n = e9.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e9[0], 0, e9);
    if (t >= 1) return +r(e9[n - 1], n - 1, e9);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e9[a], a, e9), s = +r(e9[a + 1], a + 1, e9);
    return o + (s - o) * (i - a);
  }
}
function XF(e9, t, r) {
  e9 = +e9, t = +t, r = (i = arguments.length) < 2 ? (t = e9, e9 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e9) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e9 + n * r;
  return a;
}
function tr(e9, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e9);
      break;
    default:
      this.range(t).domain(e9);
      break;
  }
  return this;
}
function tn(e9, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e9 == "function" ? this.interpolator(e9) : this.range(e9);
      break;
    }
    default: {
      this.domain(e9), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const eh = Symbol("implicit");
function ip() {
  var e9 = new Km(), t = [], r = [], n = eh;
  function i(a) {
    let o = e9.get(a);
    if (o === void 0) {
      if (n !== eh) return n;
      e9.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e9 = new Km();
    for (const o of a) e9.has(o) || e9.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return ip(t, r).unknown(n);
  }, tr.apply(i, arguments), i;
}
function _o() {
  var e9 = ip().unknown(void 0), t = e9.domain, r = e9.range, n = 0, i = 1, a, o, s = false, c = 0, u = 0, l = 0.5;
  delete e9.unknown;
  function f() {
    var h = t().length, d = i < n, y = d ? i : n, m = d ? n : i;
    a = (m - y) / Math.max(1, h - c + u * 2), s && (a = Math.floor(a)), y += (m - y - a * (h - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = XF(h).map(function(_) {
      return y + a * _;
    });
    return r(d ? p.reverse() : p);
  }
  return e9.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e9.range = function(h) {
    return arguments.length ? ([n, i] = h, n = +n, i = +i, f()) : [n, i];
  }, e9.rangeRound = function(h) {
    return [n, i] = h, n = +n, i = +i, s = true, f();
  }, e9.bandwidth = function() {
    return o;
  }, e9.step = function() {
    return a;
  }, e9.round = function(h) {
    return arguments.length ? (s = !!h, f()) : s;
  }, e9.padding = function(h) {
    return arguments.length ? (c = Math.min(1, u = +h), f()) : c;
  }, e9.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e9.paddingOuter = function(h) {
    return arguments.length ? (u = +h, f()) : u;
  }, e9.align = function(h) {
    return arguments.length ? (l = Math.max(0, Math.min(1, h)), f()) : l;
  }, e9.copy = function() {
    return _o(t(), [n, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, tr.apply(f(), arguments);
}
function eS(e9) {
  var t = e9.copy;
  return e9.padding = e9.paddingOuter, delete e9.paddingInner, delete e9.paddingOuter, e9.copy = function() {
    return eS(t());
  }, e9;
}
function Za() {
  return eS(_o.apply(null, arguments).paddingInner(1));
}
function ap(e9, t, r) {
  e9.prototype = t.prototype = r, r.constructor = e9;
}
function rS(e9, t) {
  var r = Object.create(e9.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function os() {
}
var wo = 0.7, Bc = 1 / wo, Di = "\\s*([+-]?\\d+)\\s*", So = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", JF = /^#([0-9a-f]{3,8})$/, QF = new RegExp(`^rgb\\(${Di},${Di},${Di}\\)$`), ZF = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), tU = new RegExp(`^rgba\\(${Di},${Di},${Di},${So}\\)$`), eU = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${So}\\)$`), rU = new RegExp(`^hsl\\(${So},${Sr},${Sr}\\)$`), nU = new RegExp(`^hsla\\(${So},${Sr},${Sr},${So}\\)$`), Qm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
ap(os, Oo, { copy(e9) {
  return Object.assign(new this.constructor(), this, e9);
}, displayable() {
  return this.rgb().displayable();
}, hex: Zm, formatHex: Zm, formatHex8: iU, formatHsl: aU, formatRgb: tv, toString: tv });
function Zm() {
  return this.rgb().formatHex();
}
function iU() {
  return this.rgb().formatHex8();
}
function aU() {
  return nS(this).formatHsl();
}
function tv() {
  return this.rgb().formatRgb();
}
function Oo(e9) {
  var t, r;
  return e9 = (e9 + "").trim().toLowerCase(), (t = JF.exec(e9)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ev(t) : r === 3 ? new Pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? bs(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? bs(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = QF.exec(e9)) ? new Pe(t[1], t[2], t[3], 1) : (t = ZF.exec(e9)) ? new Pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tU.exec(e9)) ? bs(t[1], t[2], t[3], t[4]) : (t = eU.exec(e9)) ? bs(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rU.exec(e9)) ? iv(t[1], t[2] / 100, t[3] / 100, 1) : (t = nU.exec(e9)) ? iv(t[1], t[2] / 100, t[3] / 100, t[4]) : Qm.hasOwnProperty(e9) ? ev(Qm[e9]) : e9 === "transparent" ? new Pe(NaN, NaN, NaN, 0) : null;
}
function ev(e9) {
  return new Pe(e9 >> 16 & 255, e9 >> 8 & 255, e9 & 255, 1);
}
function bs(e9, t, r, n) {
  return n <= 0 && (e9 = t = r = NaN), new Pe(e9, t, r, n);
}
function oU(e9) {
  return e9 instanceof os || (e9 = Oo(e9)), e9 ? (e9 = e9.rgb(), new Pe(e9.r, e9.g, e9.b, e9.opacity)) : new Pe();
}
function rh(e9, t, r, n) {
  return arguments.length === 1 ? oU(e9) : new Pe(e9, t, r, n ?? 1);
}
function Pe(e9, t, r, n) {
  this.r = +e9, this.g = +t, this.b = +r, this.opacity = +n;
}
ap(Pe, rh, rS(os, { brighter(e9) {
  return e9 = e9 == null ? Bc : Math.pow(Bc, e9), new Pe(this.r * e9, this.g * e9, this.b * e9, this.opacity);
}, darker(e9) {
  return e9 = e9 == null ? wo : Math.pow(wo, e9), new Pe(this.r * e9, this.g * e9, this.b * e9, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Pe(zn(this.r), zn(this.g), zn(this.b), kc(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: rv, formatHex: rv, formatHex8: sU, formatRgb: nv, toString: nv }));
function rv() {
  return `#${kn(this.r)}${kn(this.g)}${kn(this.b)}`;
}
function sU() {
  return `#${kn(this.r)}${kn(this.g)}${kn(this.b)}${kn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nv() {
  const e9 = kc(this.opacity);
  return `${e9 === 1 ? "rgb(" : "rgba("}${zn(this.r)}, ${zn(this.g)}, ${zn(this.b)}${e9 === 1 ? ")" : `, ${e9})`}`;
}
function kc(e9) {
  return isNaN(e9) ? 1 : Math.max(0, Math.min(1, e9));
}
function zn(e9) {
  return Math.max(0, Math.min(255, Math.round(e9) || 0));
}
function kn(e9) {
  return e9 = zn(e9), (e9 < 16 ? "0" : "") + e9.toString(16);
}
function iv(e9, t, r, n) {
  return n <= 0 ? e9 = t = r = NaN : r <= 0 || r >= 1 ? e9 = t = NaN : t <= 0 && (e9 = NaN), new or(e9, t, r, n);
}
function nS(e9) {
  if (e9 instanceof or) return new or(e9.h, e9.s, e9.l, e9.opacity);
  if (e9 instanceof os || (e9 = Oo(e9)), !e9) return new or();
  if (e9 instanceof or) return e9;
  e9 = e9.rgb();
  var t = e9.r / 255, r = e9.g / 255, n = e9.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new or(o, s, c, e9.opacity);
}
function cU(e9, t, r, n) {
  return arguments.length === 1 ? nS(e9) : new or(e9, t, r, n ?? 1);
}
function or(e9, t, r, n) {
  this.h = +e9, this.s = +t, this.l = +r, this.opacity = +n;
}
ap(or, cU, rS(os, { brighter(e9) {
  return e9 = e9 == null ? Bc : Math.pow(Bc, e9), new or(this.h, this.s, this.l * e9, this.opacity);
}, darker(e9) {
  return e9 = e9 == null ? wo : Math.pow(wo, e9), new or(this.h, this.s, this.l * e9, this.opacity);
}, rgb() {
  var e9 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e9) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Pe(Wl(e9 >= 240 ? e9 - 240 : e9 + 120, i, n), Wl(e9, i, n), Wl(e9 < 120 ? e9 + 240 : e9 - 120, i, n), this.opacity);
}, clamp() {
  return new or(av(this.h), _s(this.s), _s(this.l), kc(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e9 = kc(this.opacity);
  return `${e9 === 1 ? "hsl(" : "hsla("}${av(this.h)}, ${_s(this.s) * 100}%, ${_s(this.l) * 100}%${e9 === 1 ? ")" : `, ${e9})`}`;
} }));
function av(e9) {
  return e9 = (e9 || 0) % 360, e9 < 0 ? e9 + 360 : e9;
}
function _s(e9) {
  return Math.max(0, Math.min(1, e9 || 0));
}
function Wl(e9, t, r) {
  return (e9 < 60 ? t + (r - t) * e9 / 60 : e9 < 180 ? r : e9 < 240 ? t + (r - t) * (240 - e9) / 60 : t) * 255;
}
const op = (e9) => () => e9;
function uU(e9, t) {
  return function(r) {
    return e9 + r * t;
  };
}
function lU(e9, t, r) {
  return e9 = Math.pow(e9, r), t = Math.pow(t, r) - e9, r = 1 / r, function(n) {
    return Math.pow(e9 + n * t, r);
  };
}
function fU(e9) {
  return (e9 = +e9) == 1 ? iS : function(t, r) {
    return r - t ? lU(t, r, e9) : op(isNaN(t) ? r : t);
  };
}
function iS(e9, t) {
  var r = t - e9;
  return r ? uU(e9, r) : op(isNaN(e9) ? t : e9);
}
const ov = function e3(t) {
  var r = fU(t);
  function n(i, a) {
    var o = r((i = rh(i)).r, (a = rh(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = iS(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e3, n;
}(1);
function hU(e9, t) {
  t || (t = []);
  var r = e9 ? Math.min(t.length, e9.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e9[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function dU(e9) {
  return ArrayBuffer.isView(e9) && !(e9 instanceof DataView);
}
function pU(e9, t) {
  var r = t ? t.length : 0, n = e9 ? Math.min(r, e9.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = xa(e9[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function yU(e9, t) {
  var r = /* @__PURE__ */ new Date();
  return e9 = +e9, t = +t, function(n) {
    return r.setTime(e9 * (1 - n) + t * n), r;
  };
}
function Rc(e9, t) {
  return e9 = +e9, t = +t, function(r) {
    return e9 * (1 - r) + t * r;
  };
}
function mU(e9, t) {
  var r = {}, n = {}, i;
  (e9 === null || typeof e9 != "object") && (e9 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e9 ? r[i] = xa(e9[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var nh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vl = new RegExp(nh.source, "g");
function vU(e9) {
  return function() {
    return e9;
  };
}
function gU(e9) {
  return function(t) {
    return e9(t) + "";
  };
}
function bU(e9, t) {
  var r = nh.lastIndex = Vl.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e9 = e9 + "", t = t + ""; (n = nh.exec(e9)) && (i = Vl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Rc(n, i) })), r = Vl.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? gU(c[0].x) : vU(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function xa(e9, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? op(t) : (r === "number" ? Rc : r === "string" ? (n = Oo(t)) ? (t = n, ov) : bU : t instanceof Oo ? ov : t instanceof Date ? yU : dU(t) ? hU : Array.isArray(t) ? pU : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? mU : Rc)(e9, t);
}
function sp(e9, t) {
  return e9 = +e9, t = +t, function(r) {
    return Math.round(e9 * (1 - r) + t * r);
  };
}
function _U(e9, t) {
  t === void 0 && (t = e9, e9 = xa);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e9(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function wU(e9) {
  return function() {
    return e9;
  };
}
function Lc(e9) {
  return +e9;
}
var sv = [0, 1];
function be(e9) {
  return e9;
}
function ih(e9, t) {
  return (t -= e9 = +e9) ? function(r) {
    return (r - e9) / t;
  } : wU(isNaN(t) ? NaN : 0.5);
}
function SU(e9, t) {
  var r;
  return e9 > t && (r = e9, e9 = t, t = r), function(n) {
    return Math.max(e9, Math.min(t, n));
  };
}
function OU(e9, t, r) {
  var n = e9[0], i = e9[1], a = t[0], o = t[1];
  return i < n ? (n = ih(i, n), a = r(o, a)) : (n = ih(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function xU(e9, t, r) {
  var n = Math.min(e9.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e9[n] < e9[0] && (e9 = e9.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = ih(e9[o], e9[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = as(e9, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function ss(e9, t) {
  return t.domain(e9.domain()).range(e9.range()).interpolate(e9.interpolate()).clamp(e9.clamp()).unknown(e9.unknown());
}
function Xu() {
  var e9 = sv, t = sv, r = xa, n, i, a, o = be, s, c, u;
  function l() {
    var h = Math.min(e9.length, t.length);
    return o !== be && (o = SU(e9[0], e9[h - 1])), s = h > 2 ? xU : OU, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(e9.map(n), t, r)))(n(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(t, e9.map(n), Rc)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e9 = Array.from(h, Lc), l()) : e9.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), l()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = sp, l();
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
function cp() {
  return Xu()(be, be);
}
function AU(e9) {
  return Math.abs(e9 = Math.round(e9)) >= 1e21 ? e9.toLocaleString("en").replace(/,/g, "") : e9.toString(10);
}
function Fc(e9, t) {
  if (!isFinite(e9) || e9 === 0) return null;
  var r = (e9 = t ? e9.toExponential(t - 1) : e9.toExponential()).indexOf("e"), n = e9.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e9.slice(r + 1)];
}
function qi(e9) {
  return e9 = Fc(Math.abs(e9)), e9 ? e9[1] : NaN;
}
function PU(e9, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e9[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); ) s = e9[o = (o + 1) % e9.length];
    return a.reverse().join(t);
  };
}
function TU(e9) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e9[+r];
    });
  };
}
var IU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xo(e9) {
  if (!(t = IU.exec(e9))) throw new Error("invalid format: " + e9);
  var t;
  return new up({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
xo.prototype = up.prototype;
function up(e9) {
  this.fill = e9.fill === void 0 ? " " : e9.fill + "", this.align = e9.align === void 0 ? ">" : e9.align + "", this.sign = e9.sign === void 0 ? "-" : e9.sign + "", this.symbol = e9.symbol === void 0 ? "" : e9.symbol + "", this.zero = !!e9.zero, this.width = e9.width === void 0 ? void 0 : +e9.width, this.comma = !!e9.comma, this.precision = e9.precision === void 0 ? void 0 : +e9.precision, this.trim = !!e9.trim, this.type = e9.type === void 0 ? "" : e9.type + "";
}
up.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function EU(e9) {
  t: for (var t = e9.length, r = 1, n = -1, i; r < t; ++r) switch (e9[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e9[r]) break t;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e9.slice(0, n) + e9.slice(i + 1) : e9;
}
var Uc;
function $U(e9, t) {
  var r = Fc(e9, t);
  if (!r) return Uc = void 0, e9.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Uc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Fc(e9, Math.max(0, t + a - 1))[0];
}
function cv(e9, t) {
  var r = Fc(e9, t);
  if (!r) return e9 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const uv = { "%": (e9, t) => (e9 * 100).toFixed(t), b: (e9) => Math.round(e9).toString(2), c: (e9) => e9 + "", d: AU, e: (e9, t) => e9.toExponential(t), f: (e9, t) => e9.toFixed(t), g: (e9, t) => e9.toPrecision(t), o: (e9) => Math.round(e9).toString(8), p: (e9, t) => cv(e9 * 100, t), r: cv, s: $U, X: (e9) => Math.round(e9).toString(16).toUpperCase(), x: (e9) => Math.round(e9).toString(16) };
function lv(e9) {
  return e9;
}
var fv = Array.prototype.map, hv = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function MU(e9) {
  var t = e9.grouping === void 0 || e9.thousands === void 0 ? lv : PU(fv.call(e9.grouping, Number), e9.thousands + ""), r = e9.currency === void 0 ? "" : e9.currency[0] + "", n = e9.currency === void 0 ? "" : e9.currency[1] + "", i = e9.decimal === void 0 ? "." : e9.decimal + "", a = e9.numerals === void 0 ? lv : TU(fv.call(e9.numerals, String)), o = e9.percent === void 0 ? "%" : e9.percent + "", s = e9.minus === void 0 ? "\u2212" : e9.minus + "", c = e9.nan === void 0 ? "NaN" : e9.nan + "";
  function u(f, h) {
    f = xo(f);
    var d = f.fill, y = f.align, m = f.sign, p = f.symbol, _ = f.zero, g = f.width, w = f.comma, S = f.precision, v = f.trim, b = f.type;
    b === "n" ? (w = true, b = "g") : uv[b] || (S === void 0 && (S = 12), v = true, b = "g"), (_ || d === "0" && y === "=") && (_ = true, d = "0", y = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), P = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), T = uv[b], $ = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function E(I) {
      var j = O, N = P, M, C, k;
      if (b === "c") N = T(I) + N, I = "";
      else {
        I = +I;
        var F = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? c : T(Math.abs(I), S), v && (I = EU(I)), F && +I == 0 && m !== "+" && (F = false), j = (F ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + j, N = (b === "s" && !isNaN(I) && Uc !== void 0 ? hv[8 + Uc / 3] : "") + N + (F && m === "(" ? ")" : ""), $) {
          for (M = -1, C = I.length; ++M < C; ) if (k = I.charCodeAt(M), 48 > k || k > 57) {
            N = (k === 46 ? i + I.slice(M + 1) : I.slice(M)) + N, I = I.slice(0, M);
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
    var d = Math.max(-8, Math.min(8, Math.floor(qi(h) / 3))) * 3, y = Math.pow(10, -d), m = u((f = xo(f), f.type = "f", f), { suffix: hv[8 + d / 3] });
    return function(p) {
      return m(y * p);
    };
  }
  return { format: u, formatPrefix: l };
}
var ws, lp, aS;
DU({ thousands: ",", grouping: [3], currency: ["$", ""] });
function DU(e9) {
  return ws = MU(e9), lp = ws.format, aS = ws.formatPrefix, ws;
}
function NU(e9) {
  return Math.max(0, -qi(Math.abs(e9)));
}
function CU(e9, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(qi(t) / 3))) * 3 - qi(Math.abs(e9)));
}
function jU(e9, t) {
  return e9 = Math.abs(e9), t = Math.abs(t) - e9, Math.max(0, qi(t) - qi(e9)) + 1;
}
function oS(e9, t, r, n) {
  var i = th(e9, t, r), a;
  switch (n = xo(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e9), Math.abs(t));
      return n.precision == null && !isNaN(a = CU(i, o)) && (n.precision = a), aS(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = jU(i, Math.max(Math.abs(e9), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = NU(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return lp(n);
}
function xn(e9) {
  var t = e9.domain;
  return e9.ticks = function(r) {
    var n = t();
    return Qf(n[0], n[n.length - 1], r ?? 10);
  }, e9.tickFormat = function(r, n) {
    var i = t();
    return oS(i[0], i[i.length - 1], r ?? 10, n);
  }, e9.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Zf(o, s, r), u === c) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      c = u;
    }
    return e9;
  }, e9;
}
function zc() {
  var e9 = cp();
  return e9.copy = function() {
    return ss(e9, zc());
  }, tr.apply(e9, arguments), xn(e9);
}
function sS(e9) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e9 = Array.from(n, Lc), r) : e9.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return sS(e9).unknown(t);
  }, e9 = arguments.length ? Array.from(e9, Lc) : [0, 1], xn(r);
}
function cS(e9, t) {
  e9 = e9.slice();
  var r = 0, n = e9.length - 1, i = e9[r], a = e9[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e9[r] = t.floor(i), e9[n] = t.ceil(a), e9;
}
function dv(e9) {
  return Math.log(e9);
}
function pv(e9) {
  return Math.exp(e9);
}
function BU(e9) {
  return -Math.log(-e9);
}
function kU(e9) {
  return -Math.exp(-e9);
}
function RU(e9) {
  return isFinite(e9) ? +("1e" + e9) : e9 < 0 ? 0 : e9;
}
function LU(e9) {
  return e9 === 10 ? RU : e9 === Math.E ? Math.exp : (t) => Math.pow(e9, t);
}
function FU(e9) {
  return e9 === Math.E ? Math.log : e9 === 10 && Math.log10 || e9 === 2 && Math.log2 || (e9 = Math.log(e9), (t) => Math.log(t) / e9);
}
function yv(e9) {
  return (t, r) => -e9(-t, r);
}
function fp(e9) {
  const t = e9(dv, pv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = FU(n), a = LU(n), r()[0] < 0 ? (i = yv(i), a = yv(a), e9(BU, kU)) : e9(dv, pv), t;
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
      _.length * 2 < p && (_ = Qf(u, l, p));
    } else _ = Qf(h, d, Math.min(d - h, p)).map(a);
    return f ? _.reverse() : _;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = xo(c)).precision == null && (c.trim = true), c = lp(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(cS(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function uS() {
  const e9 = fp(Xu()).domain([1, 10]);
  return e9.copy = () => ss(e9, uS()).base(e9.base()), tr.apply(e9, arguments), e9;
}
function mv(e9) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e9));
  };
}
function vv(e9) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e9;
  };
}
function hp(e9) {
  var t = 1, r = e9(mv(t), vv(t));
  return r.constant = function(n) {
    return arguments.length ? e9(mv(t = +n), vv(t)) : t;
  }, xn(r);
}
function lS() {
  var e9 = hp(Xu());
  return e9.copy = function() {
    return ss(e9, lS()).constant(e9.constant());
  }, tr.apply(e9, arguments);
}
function gv(e9) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e9) : Math.pow(t, e9);
  };
}
function UU(e9) {
  return e9 < 0 ? -Math.sqrt(-e9) : Math.sqrt(e9);
}
function zU(e9) {
  return e9 < 0 ? -e9 * e9 : e9 * e9;
}
function dp(e9) {
  var t = e9(be, be), r = 1;
  function n() {
    return r === 1 ? e9(be, be) : r === 0.5 ? e9(UU, zU) : e9(gv(r), gv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, xn(t);
}
function pp() {
  var e9 = dp(Xu());
  return e9.copy = function() {
    return ss(e9, pp()).exponent(e9.exponent());
  }, tr.apply(e9, arguments), e9;
}
function WU() {
  return pp.apply(null, arguments).exponent(0.5);
}
function bv(e9) {
  return Math.sign(e9) * e9 * e9;
}
function VU(e9) {
  return Math.sign(e9) * Math.sqrt(Math.abs(e9));
}
function fS() {
  var e9 = cp(), t = [0, 1], r = false, n;
  function i(a) {
    var o = VU(e9(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e9.invert(bv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e9.domain(a), i) : e9.domain();
  }, i.range = function(a) {
    return arguments.length ? (e9.range((t = Array.from(a, Lc)).map(bv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e9.clamp(a), i) : e9.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return fS(e9.domain(), t).round(r).clamp(e9.clamp()).unknown(n);
  }, tr.apply(i, arguments), xn(i);
}
function hS() {
  var e9 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = YF(e9, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[as(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e9[0], s < r.length ? r[s] : e9[e9.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e9.slice();
    e9 = [];
    for (let s of o) s != null && !isNaN(s = +s) && e9.push(s);
    return e9.sort(pn), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return hS().domain(e9).range(t).unknown(n);
  }, tr.apply(a, arguments);
}
function dS() {
  var e9 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[as(n, c, 0, r)] : a;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e9) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e9, t] = c, e9 = +e9, t = +t, s()) : [e9, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(c) {
    var u = i.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e9, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return dS().domain([e9, t]).range(i).unknown(a);
  }, tr.apply(xn(o), arguments);
}
function pS() {
  var e9 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[as(e9, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e9 = Array.from(a), n = Math.min(e9.length, t.length - 1), i) : e9.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e9.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e9[o - 1], e9[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return pS().domain(e9).range(t).unknown(r);
  }, tr.apply(i, arguments);
}
const ql = /* @__PURE__ */ new Date(), Gl = /* @__PURE__ */ new Date();
function oe(e9, t, r, n) {
  function i(a) {
    return e9(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e9(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e9(a = new Date(a - 1)), t(a, 1), e9(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const c = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e9(a);
    while (u < a && a < o);
    return c;
  }, i.filter = (a) => oe((o) => {
    if (o >= o) for (; e9(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o) if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --s >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (ql.setTime(+a), Gl.setTime(+o), e9(ql), e9(Gl), Math.floor(r(ql, Gl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Wc = oe(() => {
}, (e9, t) => {
  e9.setTime(+e9 + t);
}, (e9, t) => t - e9);
Wc.every = (e9) => (e9 = Math.floor(e9), !isFinite(e9) || !(e9 > 0) ? null : e9 > 1 ? oe((t) => {
  t.setTime(Math.floor(t / e9) * e9);
}, (t, r) => {
  t.setTime(+t + r * e9);
}, (t, r) => (r - t) / e9) : Wc);
Wc.range;
const Rr = 1e3, He = Rr * 60, Lr = He * 60, qr = Lr * 24, yp = qr * 7, _v = qr * 30, Hl = qr * 365, Rn = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds());
}, (e9, t) => {
  e9.setTime(+e9 + t * Rr);
}, (e9, t) => (t - e9) / Rr, (e9) => e9.getUTCSeconds());
Rn.range;
const mp = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds() - e9.getSeconds() * Rr);
}, (e9, t) => {
  e9.setTime(+e9 + t * He);
}, (e9, t) => (t - e9) / He, (e9) => e9.getMinutes());
mp.range;
const vp = oe((e9) => {
  e9.setUTCSeconds(0, 0);
}, (e9, t) => {
  e9.setTime(+e9 + t * He);
}, (e9, t) => (t - e9) / He, (e9) => e9.getUTCMinutes());
vp.range;
const gp = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds() - e9.getSeconds() * Rr - e9.getMinutes() * He);
}, (e9, t) => {
  e9.setTime(+e9 + t * Lr);
}, (e9, t) => (t - e9) / Lr, (e9) => e9.getHours());
gp.range;
const bp = oe((e9) => {
  e9.setUTCMinutes(0, 0, 0);
}, (e9, t) => {
  e9.setTime(+e9 + t * Lr);
}, (e9, t) => (t - e9) / Lr, (e9) => e9.getUTCHours());
bp.range;
const cs = oe((e9) => e9.setHours(0, 0, 0, 0), (e9, t) => e9.setDate(e9.getDate() + t), (e9, t) => (t - e9 - (t.getTimezoneOffset() - e9.getTimezoneOffset()) * He) / qr, (e9) => e9.getDate() - 1);
cs.range;
const Ju = oe((e9) => {
  e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCDate(e9.getUTCDate() + t);
}, (e9, t) => (t - e9) / qr, (e9) => e9.getUTCDate() - 1);
Ju.range;
const yS = oe((e9) => {
  e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCDate(e9.getUTCDate() + t);
}, (e9, t) => (t - e9) / qr, (e9) => Math.floor(e9 / qr));
yS.range;
function ni(e9) {
  return oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e9) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * He) / yp);
}
const Qu = ni(0), Vc = ni(1), qU = ni(2), GU = ni(3), Gi = ni(4), HU = ni(5), KU = ni(6);
Qu.range;
Vc.range;
qU.range;
GU.range;
Gi.range;
HU.range;
KU.range;
function ii(e9) {
  return oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e9) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / yp);
}
const Zu = ii(0), qc = ii(1), YU = ii(2), XU = ii(3), Hi = ii(4), JU = ii(5), QU = ii(6);
Zu.range;
qc.range;
YU.range;
XU.range;
Hi.range;
JU.range;
QU.range;
const _p = oe((e9) => {
  e9.setDate(1), e9.setHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setMonth(e9.getMonth() + t);
}, (e9, t) => t.getMonth() - e9.getMonth() + (t.getFullYear() - e9.getFullYear()) * 12, (e9) => e9.getMonth());
_p.range;
const wp = oe((e9) => {
  e9.setUTCDate(1), e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCMonth(e9.getUTCMonth() + t);
}, (e9, t) => t.getUTCMonth() - e9.getUTCMonth() + (t.getUTCFullYear() - e9.getUTCFullYear()) * 12, (e9) => e9.getUTCMonth());
wp.range;
const Gr = oe((e9) => {
  e9.setMonth(0, 1), e9.setHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setFullYear(e9.getFullYear() + t);
}, (e9, t) => t.getFullYear() - e9.getFullYear(), (e9) => e9.getFullYear());
Gr.every = (e9) => !isFinite(e9 = Math.floor(e9)) || !(e9 > 0) ? null : oe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e9) * e9), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e9);
});
Gr.range;
const Hr = oe((e9) => {
  e9.setUTCMonth(0, 1), e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCFullYear(e9.getUTCFullYear() + t);
}, (e9, t) => t.getUTCFullYear() - e9.getUTCFullYear(), (e9) => e9.getUTCFullYear());
Hr.every = (e9) => !isFinite(e9 = Math.floor(e9)) || !(e9 > 0) ? null : oe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e9) * e9), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e9);
});
Hr.range;
function mS(e9, t, r, n, i, a) {
  const o = [[Rn, 1, Rr], [Rn, 5, 5 * Rr], [Rn, 15, 15 * Rr], [Rn, 30, 30 * Rr], [a, 1, He], [a, 5, 5 * He], [a, 15, 15 * He], [a, 30, 30 * He], [i, 1, Lr], [i, 3, 3 * Lr], [i, 6, 6 * Lr], [i, 12, 12 * Lr], [n, 1, qr], [n, 2, 2 * qr], [r, 1, yp], [t, 1, _v], [t, 3, 3 * _v], [e9, 1, Hl]];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), y = d ? d.range(u, +l + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = np(([, , p]) => p).right(o, h);
    if (d === o.length) return e9.every(th(u / Hl, l / Hl, f));
    if (d === 0) return Wc.every(Math.max(th(u, l, f), 1));
    const [y, m] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(m);
  }
  return [s, c];
}
const [ZU, t3] = mS(Hr, wp, Zu, yS, bp, vp), [e32, r3] = mS(Gr, _p, Qu, cs, gp, mp);
function Kl(e9) {
  if (0 <= e9.y && e9.y < 100) {
    var t = new Date(-1, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L);
    return t.setFullYear(e9.y), t;
  }
  return new Date(e9.y, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L);
}
function Yl(e9) {
  if (0 <= e9.y && e9.y < 100) {
    var t = new Date(Date.UTC(-1, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L));
    return t.setUTCFullYear(e9.y), t;
  }
  return new Date(Date.UTC(e9.y, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L));
}
function Ca(e9, t, r) {
  return { y: e9, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function n3(e9) {
  var t = e9.dateTime, r = e9.date, n = e9.time, i = e9.periods, a = e9.days, o = e9.shortDays, s = e9.months, c = e9.shortMonths, u = ja(i), l = Ba(i), f = ja(a), h = Ba(a), d = ja(o), y = Ba(o), m = ja(s), p = Ba(s), _ = ja(c), g = Ba(c), w = { a: k, A: F, b: U, B: q, c: null, d: Pv, e: Pv, f: P3, g: B3, G: R3, H: O3, I: x3, j: A3, L: vS, m: T3, M: I3, p: rt, q: W, Q: Ev, s: $v, S: E3, u: $3, U: M3, V: D3, w: N3, W: C3, x: null, X: null, y: j3, Y: k3, Z: L3, "%": Iv }, S = { a: it, A: kt, b: Yt, B: Me, c: null, d: Tv, e: Tv, f: W3, g: Z3, G: e8, H: F3, I: U3, j: z3, L: bS, m: V3, M: q3, p: Tn, q: we, Q: Ev, s: $v, S: G3, u: H3, U: K3, V: Y3, w: X3, W: J3, x: null, X: null, y: Q3, Y: t8, Z: r8, "%": Iv }, v = { a: $, A: E, b: I, B: j, c: N, d: xv, e: xv, f: b3, g: Ov, G: Sv, H: Av, I: Av, j: y3, L: g3, m: p3, M: m3, p: T, q: d3, Q: w3, s: S3, S: v3, u: c3, U: u3, V: l3, w: s3, W: f3, x: M, X: C, y: Ov, Y: Sv, Z: h3, "%": _3 };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), S.x = b(r, S), S.X = b(n, S), S.c = b(t, S);
  function b(z, ft) {
    return function(ht) {
      var R = [], Vt = -1, bt = 0, Qt = z.length, Zt, Se, en;
      for (ht instanceof Date || (ht = /* @__PURE__ */ new Date(+ht)); ++Vt < Qt; ) z.charCodeAt(Vt) === 37 && (R.push(z.slice(bt, Vt)), (Se = wv[Zt = z.charAt(++Vt)]) != null ? Zt = z.charAt(++Vt) : Se = Zt === "e" ? " " : "0", (en = ft[Zt]) && (Zt = en(ht, Se)), R.push(Zt), bt = Vt + 1);
      return R.push(z.slice(bt, Vt)), R.join("");
    };
  }
  function O(z, ft) {
    return function(ht) {
      var R = Ca(1900, void 0, 1), Vt = P(R, z, ht += "", 0), bt, Qt;
      if (Vt != ht.length) return null;
      if ("Q" in R) return new Date(R.Q);
      if ("s" in R) return new Date(R.s * 1e3 + ("L" in R ? R.L : 0));
      if (ft && !("Z" in R) && (R.Z = 0), "p" in R && (R.H = R.H % 12 + R.p * 12), R.m === void 0 && (R.m = "q" in R ? R.q : 0), "V" in R) {
        if (R.V < 1 || R.V > 53) return null;
        "w" in R || (R.w = 1), "Z" in R ? (bt = Yl(Ca(R.y, 0, 1)), Qt = bt.getUTCDay(), bt = Qt > 4 || Qt === 0 ? qc.ceil(bt) : qc(bt), bt = Ju.offset(bt, (R.V - 1) * 7), R.y = bt.getUTCFullYear(), R.m = bt.getUTCMonth(), R.d = bt.getUTCDate() + (R.w + 6) % 7) : (bt = Kl(Ca(R.y, 0, 1)), Qt = bt.getDay(), bt = Qt > 4 || Qt === 0 ? Vc.ceil(bt) : Vc(bt), bt = cs.offset(bt, (R.V - 1) * 7), R.y = bt.getFullYear(), R.m = bt.getMonth(), R.d = bt.getDate() + (R.w + 6) % 7);
      } else ("W" in R || "U" in R) && ("w" in R || (R.w = "u" in R ? R.u % 7 : "W" in R ? 1 : 0), Qt = "Z" in R ? Yl(Ca(R.y, 0, 1)).getUTCDay() : Kl(Ca(R.y, 0, 1)).getDay(), R.m = 0, R.d = "W" in R ? (R.w + 6) % 7 + R.W * 7 - (Qt + 5) % 7 : R.w + R.U * 7 - (Qt + 6) % 7);
      return "Z" in R ? (R.H += R.Z / 100 | 0, R.M += R.Z % 100, Yl(R)) : Kl(R);
    };
  }
  function P(z, ft, ht, R) {
    for (var Vt = 0, bt = ft.length, Qt = ht.length, Zt, Se; Vt < bt; ) {
      if (R >= Qt) return -1;
      if (Zt = ft.charCodeAt(Vt++), Zt === 37) {
        if (Zt = ft.charAt(Vt++), Se = v[Zt in wv ? ft.charAt(Vt++) : Zt], !Se || (R = Se(z, ht, R)) < 0) return -1;
      } else if (Zt != ht.charCodeAt(R++)) return -1;
    }
    return R;
  }
  function T(z, ft, ht) {
    var R = u.exec(ft.slice(ht));
    return R ? (z.p = l.get(R[0].toLowerCase()), ht + R[0].length) : -1;
  }
  function $(z, ft, ht) {
    var R = d.exec(ft.slice(ht));
    return R ? (z.w = y.get(R[0].toLowerCase()), ht + R[0].length) : -1;
  }
  function E(z, ft, ht) {
    var R = f.exec(ft.slice(ht));
    return R ? (z.w = h.get(R[0].toLowerCase()), ht + R[0].length) : -1;
  }
  function I(z, ft, ht) {
    var R = _.exec(ft.slice(ht));
    return R ? (z.m = g.get(R[0].toLowerCase()), ht + R[0].length) : -1;
  }
  function j(z, ft, ht) {
    var R = m.exec(ft.slice(ht));
    return R ? (z.m = p.get(R[0].toLowerCase()), ht + R[0].length) : -1;
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
  function k(z) {
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
  function kt(z) {
    return a[z.getUTCDay()];
  }
  function Yt(z) {
    return c[z.getUTCMonth()];
  }
  function Me(z) {
    return s[z.getUTCMonth()];
  }
  function Tn(z) {
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
var wv = { "-": "", _: " ", 0: "0" }, ce = /^\s*\d+/, i3 = /^%/, a3 = /[\\^$*+?|[\]().{}]/g;
function wt(e9, t, r) {
  var n = e9 < 0 ? "-" : "", i = (n ? -e9 : e9) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function o3(e9) {
  return e9.replace(a3, "\\$&");
}
function ja(e9) {
  return new RegExp("^(?:" + e9.map(o3).join("|") + ")", "i");
}
function Ba(e9) {
  return new Map(e9.map((t, r) => [t.toLowerCase(), r]));
}
function s3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.w = +n[0], r + n[0].length) : -1;
}
function c3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.u = +n[0], r + n[0].length) : -1;
}
function u3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.U = +n[0], r + n[0].length) : -1;
}
function l3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.V = +n[0], r + n[0].length) : -1;
}
function f3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.W = +n[0], r + n[0].length) : -1;
}
function Sv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 4));
  return n ? (e9.y = +n[0], r + n[0].length) : -1;
}
function Ov(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function h3(e9, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e9.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function d3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function p3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.m = n[0] - 1, r + n[0].length) : -1;
}
function xv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.d = +n[0], r + n[0].length) : -1;
}
function y3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e9.m = 0, e9.d = +n[0], r + n[0].length) : -1;
}
function Av(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.H = +n[0], r + n[0].length) : -1;
}
function m3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.M = +n[0], r + n[0].length) : -1;
}
function v3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.S = +n[0], r + n[0].length) : -1;
}
function g3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e9.L = +n[0], r + n[0].length) : -1;
}
function b3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 6));
  return n ? (e9.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function _3(e9, t, r) {
  var n = i3.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function w3(e9, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e9.Q = +n[0], r + n[0].length) : -1;
}
function S3(e9, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e9.s = +n[0], r + n[0].length) : -1;
}
function Pv(e9, t) {
  return wt(e9.getDate(), t, 2);
}
function O3(e9, t) {
  return wt(e9.getHours(), t, 2);
}
function x3(e9, t) {
  return wt(e9.getHours() % 12 || 12, t, 2);
}
function A3(e9, t) {
  return wt(1 + cs.count(Gr(e9), e9), t, 3);
}
function vS(e9, t) {
  return wt(e9.getMilliseconds(), t, 3);
}
function P3(e9, t) {
  return vS(e9, t) + "000";
}
function T3(e9, t) {
  return wt(e9.getMonth() + 1, t, 2);
}
function I3(e9, t) {
  return wt(e9.getMinutes(), t, 2);
}
function E3(e9, t) {
  return wt(e9.getSeconds(), t, 2);
}
function $3(e9) {
  var t = e9.getDay();
  return t === 0 ? 7 : t;
}
function M3(e9, t) {
  return wt(Qu.count(Gr(e9) - 1, e9), t, 2);
}
function gS(e9) {
  var t = e9.getDay();
  return t >= 4 || t === 0 ? Gi(e9) : Gi.ceil(e9);
}
function D3(e9, t) {
  return e9 = gS(e9), wt(Gi.count(Gr(e9), e9) + (Gr(e9).getDay() === 4), t, 2);
}
function N3(e9) {
  return e9.getDay();
}
function C3(e9, t) {
  return wt(Vc.count(Gr(e9) - 1, e9), t, 2);
}
function j3(e9, t) {
  return wt(e9.getFullYear() % 100, t, 2);
}
function B3(e9, t) {
  return e9 = gS(e9), wt(e9.getFullYear() % 100, t, 2);
}
function k3(e9, t) {
  return wt(e9.getFullYear() % 1e4, t, 4);
}
function R3(e9, t) {
  var r = e9.getDay();
  return e9 = r >= 4 || r === 0 ? Gi(e9) : Gi.ceil(e9), wt(e9.getFullYear() % 1e4, t, 4);
}
function L3(e9) {
  var t = e9.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + wt(t / 60 | 0, "0", 2) + wt(t % 60, "0", 2);
}
function Tv(e9, t) {
  return wt(e9.getUTCDate(), t, 2);
}
function F3(e9, t) {
  return wt(e9.getUTCHours(), t, 2);
}
function U3(e9, t) {
  return wt(e9.getUTCHours() % 12 || 12, t, 2);
}
function z3(e9, t) {
  return wt(1 + Ju.count(Hr(e9), e9), t, 3);
}
function bS(e9, t) {
  return wt(e9.getUTCMilliseconds(), t, 3);
}
function W3(e9, t) {
  return bS(e9, t) + "000";
}
function V3(e9, t) {
  return wt(e9.getUTCMonth() + 1, t, 2);
}
function q3(e9, t) {
  return wt(e9.getUTCMinutes(), t, 2);
}
function G3(e9, t) {
  return wt(e9.getUTCSeconds(), t, 2);
}
function H3(e9) {
  var t = e9.getUTCDay();
  return t === 0 ? 7 : t;
}
function K3(e9, t) {
  return wt(Zu.count(Hr(e9) - 1, e9), t, 2);
}
function _S(e9) {
  var t = e9.getUTCDay();
  return t >= 4 || t === 0 ? Hi(e9) : Hi.ceil(e9);
}
function Y3(e9, t) {
  return e9 = _S(e9), wt(Hi.count(Hr(e9), e9) + (Hr(e9).getUTCDay() === 4), t, 2);
}
function X3(e9) {
  return e9.getUTCDay();
}
function J3(e9, t) {
  return wt(qc.count(Hr(e9) - 1, e9), t, 2);
}
function Q3(e9, t) {
  return wt(e9.getUTCFullYear() % 100, t, 2);
}
function Z3(e9, t) {
  return e9 = _S(e9), wt(e9.getUTCFullYear() % 100, t, 2);
}
function t8(e9, t) {
  return wt(e9.getUTCFullYear() % 1e4, t, 4);
}
function e8(e9, t) {
  var r = e9.getUTCDay();
  return e9 = r >= 4 || r === 0 ? Hi(e9) : Hi.ceil(e9), wt(e9.getUTCFullYear() % 1e4, t, 4);
}
function r8() {
  return "+0000";
}
function Iv() {
  return "%";
}
function Ev(e9) {
  return +e9;
}
function $v(e9) {
  return Math.floor(+e9 / 1e3);
}
var ui, wS, SS;
n8({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function n8(e9) {
  return ui = n3(e9), wS = ui.format, ui.parse, SS = ui.utcFormat, ui.utcParse, ui;
}
function i8(e9) {
  return new Date(e9);
}
function a8(e9) {
  return e9 instanceof Date ? +e9 : +/* @__PURE__ */ new Date(+e9);
}
function Sp(e9, t, r, n, i, a, o, s, c, u) {
  var l = cp(), f = l.invert, h = l.domain, d = u(".%L"), y = u(":%S"), m = u("%I:%M"), p = u("%I %p"), _ = u("%a %d"), g = u("%b %d"), w = u("%B"), S = u("%Y");
  function v(b) {
    return (c(b) < b ? d : s(b) < b ? y : o(b) < b ? m : a(b) < b ? p : n(b) < b ? i(b) < b ? _ : g : r(b) < b ? w : S)(b);
  }
  return l.invert = function(b) {
    return new Date(f(b));
  }, l.domain = function(b) {
    return arguments.length ? h(Array.from(b, a8)) : h().map(i8);
  }, l.ticks = function(b) {
    var O = h();
    return e9(O[0], O[O.length - 1], b ?? 10);
  }, l.tickFormat = function(b, O) {
    return O == null ? v : u(O);
  }, l.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(cS(O, b)) : l;
  }, l.copy = function() {
    return ss(l, Sp(e9, t, r, n, i, a, o, s, c, u));
  }, l;
}
function o8() {
  return tr.apply(Sp(e32, r3, Gr, _p, Qu, cs, gp, mp, Rn, wS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function s8() {
  return tr.apply(Sp(ZU, t3, Hr, wp, Zu, Ju, bp, vp, Rn, SS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function tl() {
  var e9 = 0, t = 1, r, n, i, a, o = be, s = false, c;
  function u(f) {
    return f == null || isNaN(f = +f) ? c : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, s ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e9, t] = f, r = a(e9 = +e9), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), u) : [e9, t];
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
  return u.range = l(xa), u.rangeRound = l(sp), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e9), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function An(e9, t) {
  return t.domain(e9.domain()).interpolator(e9.interpolator()).clamp(e9.clamp()).unknown(e9.unknown());
}
function OS() {
  var e9 = xn(tl()(be));
  return e9.copy = function() {
    return An(e9, OS());
  }, tn.apply(e9, arguments);
}
function xS() {
  var e9 = fp(tl()).domain([1, 10]);
  return e9.copy = function() {
    return An(e9, xS()).base(e9.base());
  }, tn.apply(e9, arguments);
}
function AS() {
  var e9 = hp(tl());
  return e9.copy = function() {
    return An(e9, AS()).constant(e9.constant());
  }, tn.apply(e9, arguments);
}
function Op() {
  var e9 = dp(tl());
  return e9.copy = function() {
    return An(e9, Op()).exponent(e9.exponent());
  }, tn.apply(e9, arguments);
}
function c8() {
  return Op.apply(null, arguments).exponent(0.5);
}
function PS() {
  var e9 = [], t = be;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((as(e9, n, 1) - 1) / (e9.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e9.slice();
    e9 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e9.push(i);
    return e9.sort(pn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e9.map((n, i) => t(i / (e9.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => KF(e9, a / n));
  }, r.copy = function() {
    return PS(t).domain(e9);
  }, tn.apply(r, arguments);
}
function el() {
  var e9 = 0, t = 0.5, r = 1, n = 1, i, a, o, s, c, u = be, l, f = false, h;
  function d(m) {
    return isNaN(m = +m) ? h : (m = 0.5 + ((m = +l(m)) - a) * (n * m < n * a ? s : c), u(f ? Math.max(0, Math.min(1, m)) : m));
  }
  d.domain = function(m) {
    return arguments.length ? ([e9, t, r] = m, i = l(e9 = +e9), a = l(t = +t), o = l(r = +r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d) : [e9, t, r];
  }, d.clamp = function(m) {
    return arguments.length ? (f = !!m, d) : f;
  }, d.interpolator = function(m) {
    return arguments.length ? (u = m, d) : u;
  };
  function y(m) {
    return function(p) {
      var _, g, w;
      return arguments.length ? ([_, g, w] = p, u = _U(m, [_, g, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = y(xa), d.rangeRound = y(sp), d.unknown = function(m) {
    return arguments.length ? (h = m, d) : h;
  }, function(m) {
    return l = m, i = m(e9), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function TS() {
  var e9 = xn(el()(be));
  return e9.copy = function() {
    return An(e9, TS());
  }, tn.apply(e9, arguments);
}
function IS() {
  var e9 = fp(el()).domain([0.1, 1, 10]);
  return e9.copy = function() {
    return An(e9, IS()).base(e9.base());
  }, tn.apply(e9, arguments);
}
function ES() {
  var e9 = hp(el());
  return e9.copy = function() {
    return An(e9, ES()).constant(e9.constant());
  }, tn.apply(e9, arguments);
}
function xp() {
  var e9 = dp(el());
  return e9.copy = function() {
    return An(e9, xp()).exponent(e9.exponent());
  }, tn.apply(e9, arguments);
}
function u8() {
  return xp.apply(null, arguments).exponent(0.5);
}
const Mv = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: _o, scaleDiverging: TS, scaleDivergingLog: IS, scaleDivergingPow: xp, scaleDivergingSqrt: u8, scaleDivergingSymlog: ES, scaleIdentity: sS, scaleImplicit: eh, scaleLinear: zc, scaleLog: uS, scaleOrdinal: ip, scalePoint: Za, scalePow: pp, scaleQuantile: hS, scaleQuantize: dS, scaleRadial: fS, scaleSequential: OS, scaleSequentialLog: xS, scaleSequentialPow: Op, scaleSequentialQuantile: PS, scaleSequentialSqrt: c8, scaleSequentialSymlog: AS, scaleSqrt: WU, scaleSymlog: lS, scaleThreshold: pS, scaleTime: o8, scaleUtc: s8, tickFormat: oS }, Symbol.toStringTag, { value: "Module" }));
var l8 = ya;
function f8(e9, t, r) {
  for (var n = -1, i = e9.length; ++n < i; ) {
    var a = e9[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !l8(o) : r(o, s))) var s = o, c = a;
  }
  return c;
}
var $S = f8;
function h8(e9, t) {
  return e9 > t;
}
var d8 = h8, p8 = $S, y8 = d8, m8 = Oa;
function v8(e9) {
  return e9 && e9.length ? p8(e9, m8, y8) : void 0;
}
var g8 = v8;
const ln = Bt(g8);
function b8(e9, t) {
  return e9 < t;
}
var _8 = b8, w8 = $S, S8 = _8, O8 = Oa;
function x8(e9) {
  return e9 && e9.length ? w8(e9, O8, S8) : void 0;
}
var A8 = x8;
const rl = Bt(A8);
var P8 = Rd, T8 = Sn, I8 = Fw, E8 = $e;
function $8(e9, t) {
  var r = E8(e9) ? P8 : I8;
  return r(e9, T8(t));
}
var M8 = $8, D8 = Rw, N8 = M8;
function C8(e9, t) {
  return D8(N8(e9, t), 1);
}
var j8 = C8;
const B8 = Bt(j8);
var k8 = Qd;
function R8(e9, t) {
  return k8(e9, t);
}
var L8 = R8;
const Xn = Bt(L8);
var Aa = 1e9, F8 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Pp, Ut = true, Qe = "[DecimalError] ", Wn = Qe + "Invalid argument: ", Ap = Qe + "Exponent out of range: ", Pa = Math.floor, Cn = Math.pow, U8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ke, se = 1e7, Lt = 7, MS = 9007199254740991, Gc = Pa(MS / Lt), V = {};
V.absoluteValue = V.abs = function() {
  var e9 = new this.constructor(this);
  return e9.s && (e9.s = 1), e9;
};
V.comparedTo = V.cmp = function(e9) {
  var t, r, n, i, a = this;
  if (e9 = new a.constructor(e9), a.s !== e9.s) return a.s || -e9.s;
  if (a.e !== e9.e) return a.e > e9.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e9.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e9.d[t]) return a.d[t] > e9.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
V.decimalPlaces = V.dp = function() {
  var e9 = this, t = e9.d.length - 1, r = (t - e9.e) * Lt;
  if (t = e9.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
V.dividedBy = V.div = function(e9) {
  return Vr(this, new this.constructor(e9));
};
V.dividedToIntegerBy = V.idiv = function(e9) {
  var t = this, r = t.constructor;
  return Nt(Vr(t, new r(e9), 0, 1), r.precision);
};
V.equals = V.eq = function(e9) {
  return !this.cmp(e9);
};
V.exponent = function() {
  return Jt(this);
};
V.greaterThan = V.gt = function(e9) {
  return this.cmp(e9) > 0;
};
V.greaterThanOrEqualTo = V.gte = function(e9) {
  return this.cmp(e9) >= 0;
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
V.lessThan = V.lt = function(e9) {
  return this.cmp(e9) < 0;
};
V.lessThanOrEqualTo = V.lte = function(e9) {
  return this.cmp(e9) < 1;
};
V.logarithm = V.log = function(e9) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e9 === void 0) e9 = new n(10);
  else if (e9 = new n(e9), e9.s < 1 || e9.eq(ke)) throw Error(Qe + "NaN");
  if (r.s < 1) throw Error(Qe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(ke) ? new n(0) : (Ut = false, t = Vr(Ao(r, a), Ao(e9, a), a), Ut = true, Nt(t, i));
};
V.minus = V.sub = function(e9) {
  var t = this;
  return e9 = new t.constructor(e9), t.s == e9.s ? CS(t, e9) : DS(t, (e9.s = -e9.s, e9));
};
V.modulo = V.mod = function(e9) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e9 = new n(e9), !e9.s) throw Error(Qe + "NaN");
  return r.s ? (Ut = false, t = Vr(r, e9, 0, 1).times(e9), Ut = true, r.minus(t)) : Nt(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return NS(this);
};
V.naturalLogarithm = V.ln = function() {
  return Ao(this);
};
V.negated = V.neg = function() {
  var e9 = new this.constructor(this);
  return e9.s = -e9.s || 0, e9;
};
V.plus = V.add = function(e9) {
  var t = this;
  return e9 = new t.constructor(e9), t.s == e9.s ? DS(t, e9) : CS(t, (e9.s = -e9.s, e9));
};
V.precision = V.sd = function(e9) {
  var t, r, n, i = this;
  if (e9 !== void 0 && e9 !== !!e9 && e9 !== 1 && e9 !== 0) throw Error(Wn + e9);
  if (t = Jt(i) + 1, n = i.d.length - 1, r = n * Lt + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e9 && t > r ? t : r;
};
V.squareRoot = V.sqrt = function() {
  var e9, t, r, n, i, a, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Qe + "NaN");
  }
  for (e9 = Jt(s), Ut = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = _r(s.d), (t.length + e9) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e9 = Pa((e9 + 1) / 2) - (e9 < 0 || e9 % 2), i == 1 / 0 ? t = "5e" + e9 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e9), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Vr(s, a, o + 2)).times(0.5), _r(a.d).slice(0, o) === (t = _r(n.d)).slice(0, o)) {
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
V.times = V.mul = function(e9) {
  var t, r, n, i, a, o, s, c, u, l = this, f = l.constructor, h = l.d, d = (e9 = new f(e9)).d;
  if (!l.s || !e9.s) return new f(0);
  for (e9.s *= l.s, r = l.e + e9.e, c = h.length, u = d.length, c < u && (a = h, h = d, d = a, o = c, c = u, u = o), a = [], o = c + u, n = o; n--; ) a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; ) s = a[i] + d[n] * h[i - n - 1] + t, a[i--] = s % se | 0, t = s / se | 0;
    a[i] = (a[i] + t) % se | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e9.d = a, e9.e = r, Ut ? Nt(e9, f.precision) : e9;
};
V.toDecimalPlaces = V.todp = function(e9, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e9 === void 0 ? r : (Er(e9, 0, Aa), t === void 0 ? t = n.rounding : Er(t, 0, 8), Nt(r, e9 + Jt(r) + 1, t));
};
V.toExponential = function(e9, t) {
  var r, n = this, i = n.constructor;
  return e9 === void 0 ? r = Jn(n, true) : (Er(e9, 0, Aa), t === void 0 ? t = i.rounding : Er(t, 0, 8), n = Nt(new i(n), e9 + 1, t), r = Jn(n, true, e9 + 1)), r;
};
V.toFixed = function(e9, t) {
  var r, n, i = this, a = i.constructor;
  return e9 === void 0 ? Jn(i) : (Er(e9, 0, Aa), t === void 0 ? t = a.rounding : Er(t, 0, 8), n = Nt(new a(i), e9 + Jt(i) + 1, t), r = Jn(n.abs(), false, e9 + Jt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
V.toInteger = V.toint = function() {
  var e9 = this, t = e9.constructor;
  return Nt(new t(e9), Jt(e9) + 1, t.rounding);
};
V.toNumber = function() {
  return +this;
};
V.toPower = V.pow = function(e9) {
  var t, r, n, i, a, o, s = this, c = s.constructor, u = 12, l = +(e9 = new c(e9));
  if (!e9.s) return new c(ke);
  if (s = new c(s), !s.s) {
    if (e9.s < 1) throw Error(Qe + "Infinity");
    return s;
  }
  if (s.eq(ke)) return s;
  if (n = c.precision, e9.eq(ke)) return Nt(s, n);
  if (t = e9.e, r = e9.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= MS) {
      for (i = new c(ke), t = Math.ceil(n / Lt + 4), Ut = false; r % 2 && (i = i.times(s), Nv(i.d, t)), r = Pa(r / 2), r !== 0; ) s = s.times(s), Nv(s.d, t);
      return Ut = true, e9.s < 0 ? new c(ke).div(i) : Nt(i, n);
    }
  } else if (a < 0) throw Error(Qe + "NaN");
  return a = a < 0 && e9.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ut = false, i = e9.times(Ao(s, n + u)), Ut = true, i = NS(i), i.s = a, i;
};
V.toPrecision = function(e9, t) {
  var r, n, i = this, a = i.constructor;
  return e9 === void 0 ? (r = Jt(i), n = Jn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Er(e9, 1, Aa), t === void 0 ? t = a.rounding : Er(t, 0, 8), i = Nt(new a(i), e9, t), r = Jt(i), n = Jn(i, e9 <= r || r <= a.toExpNeg, e9)), n;
};
V.toSignificantDigits = V.tosd = function(e9, t) {
  var r = this, n = r.constructor;
  return e9 === void 0 ? (e9 = n.precision, t = n.rounding) : (Er(e9, 1, Aa), t === void 0 ? t = n.rounding : Er(t, 0, 8)), Nt(new n(r), e9, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e9 = this, t = Jt(e9), r = e9.constructor;
  return Jn(e9, t <= r.toExpNeg || t >= r.toExpPos);
};
function DS(e9, t) {
  var r, n, i, a, o, s, c, u, l = e9.constructor, f = l.precision;
  if (!e9.s || !t.s) return t.s || (t = new l(e9)), Ut ? Nt(t, f) : t;
  if (c = e9.d, u = t.d, o = e9.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, s = u.length) : (n = u, i = o, s = c.length), o = Math.ceil(f / Lt), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, a = u.length, s - a < 0 && (a = s, n = u, u = c, c = n), r = 0; a; ) r = (c[--a] = c[a] + u[a] + r) / se | 0, c[a] %= se;
  for (r && (c.unshift(r), ++i), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = i, Ut ? Nt(t, f) : t;
}
function Er(e9, t, r) {
  if (e9 !== ~~e9 || e9 < t || e9 > r) throw Error(Wn + e9);
}
function _r(e9) {
  var t, r, n, i = e9.length - 1, a = "", o = e9[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e9[t] + "", r = Lt - n.length, r && (a += cn(r)), a += n;
    o = e9[t], n = o + "", r = Lt - n.length, r && (a += cn(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Vr = /* @__PURE__ */ function() {
  function e9(n, i) {
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
      for (l = se / (I[0] + 1) | 0, l > 1 && (I = e9(I, l), E = e9(E, l), O = I.length, v = E.length), S = O, m = E.slice(0, O), p = m.length; p < O; ) m[p++] = 0;
      P = I.slice(), P.unshift(0), b = I[0], I[1] >= se / 2 && ++b;
      do
        l = 0, s = t(I, m, O, p), s < 0 ? (_ = m[0], O != p && (_ = _ * se + (m[1] || 0)), l = _ / b | 0, l > 1 ? (l >= se && (l = se - 1), f = e9(I, l), h = f.length, p = m.length, s = t(f, m, h, p), s == 1 && (l--, r(f, O < h ? P : I, h))) : (l == 0 && (s = l = 1), f = I.slice()), h = f.length, h < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(I, m, O, p), s < 1 && (l++, r(m, O < p ? P : I, p))), p = m.length) : s === 0 && (l++, m = [0]), y[u++] = l, s && m[0] ? m[p++] = E[S] || 0 : (m = [E[S]], p = 1);
      while ((S++ < v || m[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), d.e = c, Nt(d, o ? a + Jt(d) + 1 : a);
  };
}();
function NS(e9, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e9.constructor, f = l.precision;
  if (Jt(e9) > 16) throw Error(Ap + Jt(e9));
  if (!e9.s) return new l(ke);
  for (Ut = false, s = f, o = new l(0.03125); e9.abs().gte(0.1); ) e9 = e9.times(o), u += 5;
  for (n = Math.log(Cn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(ke), l.precision = s; ; ) {
    if (i = Nt(i.times(e9), s), r = r.times(++c), o = a.plus(Vr(i, r, s)), _r(o.d).slice(0, s) === _r(a.d).slice(0, s)) {
      for (; u--; ) a = Nt(a.times(a), s);
      return l.precision = f, t == null ? (Ut = true, Nt(a, f)) : a;
    }
    a = o;
  }
}
function Jt(e9) {
  for (var t = e9.e * Lt, r = e9.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Xl(e9, t, r) {
  if (t > e9.LN10.sd()) throw Ut = true, r && (e9.precision = r), Error(Qe + "LN10 precision limit exceeded");
  return Nt(new e9(e9.LN10), t);
}
function cn(e9) {
  for (var t = ""; e9--; ) t += "0";
  return t;
}
function Ao(e9, t) {
  var r, n, i, a, o, s, c, u, l, f = 1, h = 10, d = e9, y = d.d, m = d.constructor, p = m.precision;
  if (d.s < 1) throw Error(Qe + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(ke)) return new m(0);
  if (t == null ? (Ut = false, u = p) : u = t, d.eq(10)) return t == null && (Ut = true), Xl(m, u);
  if (u += h, m.precision = u, r = _r(y), n = r.charAt(0), a = Jt(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e9), r = _r(d.d), n = r.charAt(0), f++;
    a = Jt(d), n > 1 ? (d = new m("0." + r), a++) : d = new m(n + "." + r.slice(1));
  } else return c = Xl(m, u + 2, p).times(a + ""), d = Ao(new m(n + "." + r.slice(1)), u - h).plus(c), m.precision = p, t == null ? (Ut = true, Nt(d, p)) : d;
  for (s = o = d = Vr(d.minus(ke), d.plus(ke), u), l = Nt(d.times(d), u), i = 3; ; ) {
    if (o = Nt(o.times(l), u), c = s.plus(Vr(o, new m(i), u)), _r(c.d).slice(0, u) === _r(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(Xl(m, u + 2, p).times(a + ""))), s = Vr(s, new m(f), u), m.precision = p, t == null ? (Ut = true, Nt(s, p)) : s;
    s = c, i += 2;
  }
}
function Dv(e9, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e9.e = Pa(r / Lt), e9.d = [], n = (r + 1) % Lt, r < 0 && (n += Lt), n < i) {
      for (n && e9.d.push(+t.slice(0, n)), i -= Lt; n < i; ) e9.d.push(+t.slice(n, n += Lt));
      t = t.slice(n), n = Lt - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e9.d.push(+t), Ut && (e9.e > Gc || e9.e < -Gc)) throw Error(Ap + r);
  } else e9.s = 0, e9.e = 0, e9.d = [0];
  return e9;
}
function Nt(e9, t, r) {
  var n, i, a, o, s, c, u, l, f = e9.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += Lt, i = t, u = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Lt), a = f.length, l >= a) return e9;
    for (u = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= Lt, i = n - Lt + o;
  }
  if (r !== void 0 && (a = Cn(10, o - i - 1), s = u / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e9.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? u / Cn(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e9.s < 0 ? 8 : 7))), t < 1 || !f[0]) return c ? (a = Jt(e9), f.length = 1, t = t - a - 1, f[0] = Cn(10, (Lt - t % Lt) % Lt), e9.e = Pa(-t / Lt) || 0) : (f.length = 1, f[0] = e9.e = e9.s = 0), e9;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = Cn(10, Lt - n), f[l] = i > 0 ? (u / Cn(10, o - i) % Cn(10, i) | 0) * a : 0), c) for (; ; ) if (l == 0) {
    (f[0] += a) == se && (f[0] = 1, ++e9.e);
    break;
  } else {
    if (f[l] += a, f[l] != se) break;
    f[l--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ut && (e9.e > Gc || e9.e < -Gc)) throw Error(Ap + Jt(e9));
  return e9;
}
function CS(e9, t) {
  var r, n, i, a, o, s, c, u, l, f, h = e9.constructor, d = h.precision;
  if (!e9.s || !t.s) return t.s ? t.s = -t.s : t = new h(e9), Ut ? Nt(t, d) : t;
  if (c = e9.d, f = t.d, n = t.e, u = e9.e, c = c.slice(), o = u - n, o) {
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
function Jn(e9, t, r) {
  var n, i = Jt(e9), a = _r(e9.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + cn(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + cn(-i - 1) + a, r && (n = r - o) > 0 && (a += cn(n))) : i >= o ? (a += cn(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + cn(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += cn(n))), e9.s < 0 ? "-" + a : a;
}
function Nv(e9, t) {
  if (e9.length > t) return e9.length = t, true;
}
function jS(e9) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Wn + a);
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
      return Dv(o, a.toString());
    } else if (typeof a != "string") throw Error(Wn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, U8.test(a)) Dv(o, a);
    else throw Error(Wn + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = jS, i.config = i.set = z8, e9 === void 0 && (e9 = {}), e9) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e9.hasOwnProperty(r = n[t++]) || (e9[r] = this[r]);
  return i.config(e9), i;
}
function z8(e9) {
  if (!e9 || typeof e9 != "object") throw Error(Qe + "Object expected");
  var t, r, n, i = ["precision", 1, Aa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e9[r = i[t]]) !== void 0) if (Pa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(Wn + r + ": " + n);
  if ((n = e9[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(Wn + r + ": " + n);
  return this;
}
var Pp = jS(F8);
ke = new Pp(1);
const Mt = Pp;
function W8(e9) {
  return H8(e9) || G8(e9) || q8(e9) || V8();
}
function V8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q8(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return ah(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ah(e9, t);
  }
}
function G8(e9) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e9)) return Array.from(e9);
}
function H8(e9) {
  if (Array.isArray(e9)) return ah(e9);
}
function ah(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var K8 = function(t) {
  return t;
}, BS = {}, kS = function(t) {
  return t === BS;
}, Cv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && kS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Y8 = function e4(t, r) {
  return t === 1 ? r : Cv(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== BS;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, Cv(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
      var l = i.map(function(f) {
        return kS(f) ? c.shift() : f;
      });
      return r.apply(void 0, W8(l).concat(c));
    }));
  });
}, nl = function(t) {
  return Y8(t.length, t);
}, oh = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, X8 = nl(function(e9, t) {
  return Array.isArray(t) ? t.map(e9) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e9);
}), J8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return K8;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, sh = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, RS = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Q8(e9) {
  var t;
  return e9 === 0 ? t = 1 : t = Math.floor(new Mt(e9).abs().log(10).toNumber()) + 1, t;
}
function Z8(e9, t, r) {
  for (var n = new Mt(e9), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var t6 = nl(function(e9, t, r) {
  var n = +e9, i = +t;
  return n + r * (i - n);
}), e6 = nl(function(e9, t, r) {
  var n = t - +e9;
  return n = n || 1 / 0, (r - e9) / n;
}), r6 = nl(function(e9, t, r) {
  var n = t - +e9;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e9) / n));
});
const il = { rangeStep: Z8, getDigitCount: Q8, interpolateNumber: t6, uninterpolateNumber: e6, uninterpolateTruncation: r6 };
function ch(e9) {
  return a6(e9) || i6(e9) || LS(e9) || n6();
}
function n6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i6(e9) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e9)) return Array.from(e9);
}
function a6(e9) {
  if (Array.isArray(e9)) return uh(e9);
}
function Po(e9, t) {
  return c6(e9) || s6(e9, t) || LS(e9, t) || o6();
}
function o6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LS(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return uh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e9, t);
  }
}
function uh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function s6(e9, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e9)))) {
    var r = [], n = true, i = false, a = void 0;
    try {
      for (var o = e9[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = true) ;
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
function c6(e9) {
  if (Array.isArray(e9)) return e9;
}
function FS(e9) {
  var t = Po(e9, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function US(e9, t, r) {
  if (e9.lte(0)) return new Mt(0);
  var n = il.getDigitCount(e9.toNumber()), i = new Mt(10).pow(n), a = e9.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Mt(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new Mt(Math.ceil(c));
}
function u6(e9, t, r) {
  var n = 1, i = new Mt(e9);
  if (!i.isint() && r) {
    var a = Math.abs(e9);
    a < 1 ? (n = new Mt(10).pow(il.getDigitCount(e9) - 1), i = new Mt(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Mt(Math.floor(e9)));
  } else e9 === 0 ? i = new Mt(Math.floor((t - 1) / 2)) : r || (i = new Mt(Math.floor(e9)));
  var o = Math.floor((t - 1) / 2), s = J8(X8(function(c) {
    return i.add(new Mt(c - o).mul(n)).toNumber();
  }), oh);
  return s(0, t);
}
function zS(e9, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e9) / (r - 1))) return { step: new Mt(0), tickMin: new Mt(0), tickMax: new Mt(0) };
  var a = US(new Mt(t).sub(e9).div(r - 1), n, i), o;
  e9 <= 0 && t >= 0 ? o = new Mt(0) : (o = new Mt(e9).add(t).div(2), o = o.sub(new Mt(o).mod(a)));
  var s = Math.ceil(o.sub(e9).div(a).toNumber()), c = Math.ceil(new Mt(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? zS(e9, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Mt(s).mul(a)), tickMax: o.add(new Mt(c).mul(a)) });
}
function l6(e9) {
  var t = Po(e9, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = FS([r, n]), c = Po(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(ch(oh(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ch(oh(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? sh(f) : f;
  }
  if (u === l) return u6(u, i, a);
  var h = zS(u, l, o, a), d = h.step, y = h.tickMin, m = h.tickMax, p = il.rangeStep(y, m.add(new Mt(0.1).mul(d)), d);
  return r > n ? sh(p) : p;
}
function f6(e9, t) {
  var r = Po(e9, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = FS([n, i]), s = Po(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) return [n, i];
  if (c === u) return [c];
  var l = Math.max(t, 2), f = US(new Mt(u).sub(c).div(l - 1), a, 0), h = [].concat(ch(il.rangeStep(new Mt(c), new Mt(u).sub(new Mt(0.99).mul(f)), f)), [u]);
  return n > i ? sh(h) : h;
}
var h6 = RS(l6), d6 = RS(f6), p6 = "Invariant failed";
function Qn(e9, t) {
  throw new Error(p6);
}
var y6 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Ki(e9) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e9);
}
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Hc.apply(this, arguments);
}
function m6(e9, t) {
  return _6(e9) || b6(e9, t) || g6(e9, t) || v6();
}
function v6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g6(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return jv(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jv(e9, t);
  }
}
function jv(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function b6(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function _6(e9) {
  if (Array.isArray(e9)) return e9;
}
function w6(e9, t) {
  if (e9 == null) return {};
  var r = S6(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function S6(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function O6(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function x6(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, qS(n.key), n);
  }
}
function A6(e9, t, r) {
  return t && x6(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function P6(e9, t, r) {
  return t = Kc(t), T6(e9, WS() ? Reflect.construct(t, r || [], Kc(e9).constructor) : t.apply(e9, r));
}
function T6(e9, t) {
  if (t && (Ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return I6(e9);
}
function I6(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function WS() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (WS = function() {
    return !!e9;
  })();
}
function Kc(e9) {
  return Kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kc(e9);
}
function E6(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && lh(e9, t);
}
function lh(e9, t) {
  return lh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, lh(e9, t);
}
function VS(e9, t, r) {
  return t = qS(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function qS(e9) {
  var t = $6(e9, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function $6(e9, t) {
  if (Ki(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Ta = function(e9) {
  function t() {
    return O6(this, t), P6(this, t, arguments);
  }
  return E6(t, e9), A6(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, h = w6(n, y6), d = ct(h, false);
    this.props.direction === "x" && l.type !== "number" && Qn();
    var y = c.map(function(m) {
      var p = u(m, s), _ = p.x, g = p.y, w = p.value, S = p.errorVal;
      if (!S) return null;
      var v = [], b, O;
      if (Array.isArray(S)) {
        var P = m6(S, 2);
        b = P[0], O = P[1];
      } else b = O = S;
      if (a === "vertical") {
        var T = l.scale, $ = g + i, E = $ + o, I = $ - o, j = T(w - b), N = T(w + O);
        v.push({ x1: N, y1: E, x2: N, y2: I }), v.push({ x1: j, y1: $, x2: N, y2: $ }), v.push({ x1: j, y1: E, x2: j, y2: I });
      } else if (a === "horizontal") {
        var M = f.scale, C = _ + i, k = C - o, F = C + o, U = M(w - b), q = M(w + O);
        v.push({ x1: k, y1: q, x2: F, y2: q }), v.push({ x1: C, y1: U, x2: C, y2: q }), v.push({ x1: k, y1: U, x2: F, y2: U });
      }
      return A.createElement(St, Hc({ className: "recharts-errorBar", key: "bar-".concat(v.map(function(rt) {
        return "".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2);
      })) }, d), v.map(function(rt) {
        return A.createElement("line", Hc({}, rt, { key: "line-".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2) }));
      }));
    });
    return A.createElement(St, { className: "recharts-errorBars" }, y);
  } }]);
}(A.Component);
VS(Ta, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
VS(Ta, "displayName", "ErrorBar");
function To(e9) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e9);
}
function Bv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mn(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(r), true).forEach(function(n) {
      M6(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function M6(e9, t, r) {
  return t = D6(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function D6(e9) {
  var t = N6(e9, "string");
  return To(t) == "symbol" ? t : t + "";
}
function N6(e9, t) {
  if (To(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var GS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = je(r, dn);
  if (!o) return null;
  var s = dn.defaultProps, c = s !== void 0 ? Mn(Mn({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var h = f.item, d = f.props, y = d.sectors || d.data || [];
    return l.concat(y.map(function(m) {
      return { type: o.props.iconType || h.props.legendType, value: m.name, color: m.fill, payload: m };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, h = f.type.defaultProps, d = h !== void 0 ? Mn(Mn({}, h), f.props) : {}, y = d.dataKey, m = d.name, p = d.legendType, _ = d.hide;
    return { inactive: _, dataKey: y, type: c.iconType || p || "square", color: Tp(f), value: m || y, payload: d };
  }), Mn(Mn(Mn({}, c), dn.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function Io(e9) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e9);
}
function kv(e9) {
  return k6(e9) || B6(e9) || j6(e9) || C6();
}
function C6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j6(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return fh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fh(e9, t);
  }
}
function B6(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function k6(e9) {
  if (Array.isArray(e9)) return fh(e9);
}
function fh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Rv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rv(Object(r), true).forEach(function(n) {
      Ni(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Ni(e9, t, r) {
  return t = R6(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function R6(e9) {
  var t = L6(e9, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function L6(e9, t) {
  if (Io(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function ae(e9, t, r) {
  return st(e9) || st(t) ? r : ie(t) ? Ye(e9, t, r) : lt(t) ? t(e9) : r;
}
function to(e9, t, r, n) {
  var i = B8(e9, function(s) {
    return ae(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [rl(a), ln(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !st(s);
  }) : i;
  return o.map(function(s) {
    return ie(s) || s instanceof Date ? s : "";
  });
}
var F6 = function(t) {
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
}, Tp = function(t) {
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
}, U6 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++) for (var l = a[s[c]].stackGroups, f = Object.keys(l), h = 0, d = f.length; h < d; h++) {
    var y = l[f[h]], m = y.items, p = y.cateAxisId, _ = m.filter(function(O) {
      return zr(O.type).indexOf("Bar") >= 0;
    });
    if (_ && _.length) {
      var g = _[0].type.defaultProps, w = g !== void 0 ? qt(qt({}, g), _[0].props) : _[0].props, S = w.barSize, v = w[p];
      o[v] || (o[v] = []);
      var b = st(S) ? r : S;
      o[v].push({ item: _[0], stackList: _.slice(1), barSize: st(b) ? void 0 : Yn(b, n, 0) });
    }
  }
  return o;
}, z6 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = Yn(r, i, 0, true), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = false, d = i / c, y = o.reduce(function(S, v) {
      return S + v.barSize || 0;
    }, 0);
    y += (c - 1) * u, y >= i && (y -= (c - 1) * u, u = 0), y >= i && d > 0 && (h = true, d *= 0.9, y = c * d);
    var m = (i - y) / 2 >> 0, p = { offset: m - u, size: 0 };
    l = o.reduce(function(S, v) {
      var b = { item: v.item, position: { offset: p.offset + p.size + u, size: h ? d : v.barSize } }, O = [].concat(kv(S), [b]);
      return p = O[O.length - 1].position, v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: p });
      }), O;
    }, f);
  } else {
    var _ = Yn(n, i, 0, true);
    i - 2 * _ - (c - 1) * u <= 0 && (u = 0);
    var g = (i - 2 * _ - (c - 1) * u) / c;
    g > 1 && (g >>= 0);
    var w = s === +s ? Math.min(g, s) : g;
    l = o.reduce(function(S, v, b) {
      var O = [].concat(kv(S), [{ item: v.item, position: { offset: _ + (g + u) * b + (g - w) / 2, size: w } }]);
      return v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: O[O.length - 1].position });
      }), O;
    }, f);
  }
  return l;
}, W6 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = GS({ children: a, legendWidth: c });
  if (u) {
    var l = i || {}, f = l.width, h = l.height, d = u.align, y = u.verticalAlign, m = u.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && d !== "center" && L(t[d])) return qt(qt({}, t), {}, Ni({}, d, t[d] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && d === "center") && y !== "middle" && L(t[y])) return qt(qt({}, t), {}, Ni({}, y, t[y] + (h || 0)));
  }
  return t;
}, V6 = function(t, r, n) {
  return st(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, HS = function(t, r, n, i, a) {
  var o = r.props.children, s = Te(o, Ta).filter(function(u) {
    return V6(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ae(l, n);
      if (st(f)) return u;
      var h = Array.isArray(f) ? [rl(f), ln(f)] : [f, f], d = c.reduce(function(y, m) {
        var p = ae(l, m, 0), _ = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), g = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(_, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], u[0]), Math.max(d[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, q6 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return HS(t, s, n, a, i);
  }).filter(function(s) {
    return !st(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, KS = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && HS(t, c, u, i) || to(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(c, u) {
    return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++) s[u[l]] || (s[u[l]] = true, c.push(u[l]));
    return c;
  }, []);
}, YS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, XS = function(t, r, n, i) {
  if (i) return t.map(function(c) {
    return c.coordinate;
  });
  var a, o, s = t.map(function(c) {
    return c.coordinate === r && (a = true), c.coordinate === n && (o = true), c.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, Fr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? sr(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var h = a ? a.indexOf(f) : f;
      return { coordinate: i(h) + u, value: f, offset: u };
    });
    return l.filter(function(f) {
      return !_a(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, h) {
    return { coordinate: i(f) + u, value: f, index: h, offset: u };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return { coordinate: i(f) + u, value: f, offset: u };
  }) : i.domain().map(function(f, h) {
    return { coordinate: i(f) + u, value: a ? a[f] : f, index: h, offset: u };
  });
}, Jl = /* @__PURE__ */ new WeakMap(), Ss = function(t, r) {
  if (typeof r != "function") return t;
  Jl.has(t) || Jl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Jl.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, G6 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: _o(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: zc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: Za(), realScaleType: "point" } : a === "category" ? { scale: _o(), realScaleType: "band" } : { scale: zc(), realScaleType: "linear" };
  if (Kn(i)) {
    var c = "scale".concat(zu(i));
    return { scale: (Mv[c] || Za)(), realScaleType: Mv[c] ? c : "point" };
  }
  return lt(i) ? { scale: i } : { scale: Za(), realScaleType: "point" };
}, Lv = 1e-4, H6 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Lv, o = Math.max(i[0], i[1]) + Lv, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, K6 = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, Y6 = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, X6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var c = _a(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
  }
}, J6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = _a(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, Q6 = { sign: X6, expand: dD, none: Fi, silhouette: pD, wiggle: yD, positive: J6 }, Z6 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = Q6[n], o = hD().keys(i).value(function(s, c) {
    return +ae(s, c, 0);
  }).order(Bf).offset(a);
  return o(t);
}, tz = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? qt(qt({}, h.type.defaultProps), h.props) : h.props, m = y.stackId, p = y.hide;
    if (p) return f;
    var _ = y[n], g = f[_] || { hasStack: false, stackGroups: {} };
    if (ie(m)) {
      var w = g.stackGroups[m] || { numericAxisId: n, cateAxisId: i, items: [] };
      w.items.push(h), g.hasStack = true, g.stackGroups[m] = w;
    } else g.stackGroups[ri("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
    return qt(qt({}, f), {}, Ni({}, _, g));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, h) {
    var d = u[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(m, p) {
        var _ = d.stackGroups[p];
        return qt(qt({}, m), {}, Ni({}, p, { numericAxisId: n, cateAxisId: i, items: _.items, stackedData: Z6(t, _.items, a) }));
      }, y);
    }
    return qt(qt({}, f), {}, Ni({}, h, d));
  }, l);
}, ez = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var l = h6(u, a, s);
    return t.domain([rl(l), ln(l)]), { niceTicks: l };
  }
  if (a && i === "number") {
    var f = t.domain(), h = d6(f, a, s);
    return { niceTicks: h };
  }
  return null;
};
function Yi(e9) {
  var t = e9.axis, r = e9.ticks, n = e9.bandSize, i = e9.entry, a = e9.index, o = e9.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !st(i[t.dataKey])) {
      var s = bc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = ae(i, st(o) ? t.dataKey : o);
  return st(c) ? null : t.scale(c);
}
var Fv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var c = ae(o, r.dataKey, r.domain[s]);
  return st(c) ? null : r.scale(c) - a / 2 + i;
}, rz = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, nz = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (ie(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, iz = function(t) {
  return t.reduce(function(r, n) {
    return [rl(n.concat([r[0]]).filter(L)), ln(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, JS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = iz(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Uv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, zv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, hh = function(t, r, n) {
  if (lt(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Uv.test(t[0])) {
    var a = +Uv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else lt(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (zv.test(t[1])) {
    var o = +zv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else lt(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Yc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = tp(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = a.length; s < c; s++) {
      var u = a[s], l = a[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Wv = function(t, r, n) {
  return !t || !t.length || Xn(t, Ye(n, "type.defaultProps.domain")) ? r : t;
}, QS = function(t, r) {
  var n = t.type.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return qt(qt({}, ct(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: Tp(t), value: ae(r, i), type: c, payload: r, chartType: u, hide: l });
};
function Eo(e9) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e9);
}
function Vv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(r), true).forEach(function(n) {
      az(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function az(e9, t, r) {
  return t = oz(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function oz(e9) {
  var t = sz(e9, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function sz(e9, t) {
  if (Eo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Xc = Math.PI / 180, cz = function(t) {
  return t * 180 / Math.PI;
}, le = function(t, r, n, i) {
  return { x: t + Math.cos(-Xc * i) * n, y: r + Math.sin(-Xc * i) * n };
}, uz = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, lz = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = uz({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: cz(u), angleInRadian: u };
}, fz = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, hz = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Gv = function(t, r) {
  var n = t.x, i = t.y, a = lz({ x: n, y: i }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u) return false;
  if (o === 0) return true;
  var l = fz(r), f = l.startAngle, h = l.endAngle, d = s, y;
  if (f <= h) {
    for (; d > h; ) d -= 360;
    for (; d < f; ) d += 360;
    y = d >= f && d <= h;
  } else {
    for (; d > f; ) d -= 360;
    for (; d < h; ) d += 360;
    y = d >= h && d <= f;
  }
  return y ? qv(qv({}, r), {}, { radius: o, angle: hz(d, r) }) : null;
};
function $o(e9) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e9);
}
var dz = ["offset"];
function pz(e9) {
  return gz(e9) || vz(e9) || mz(e9) || yz();
}
function yz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mz(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return dh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dh(e9, t);
  }
}
function vz(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function gz(e9) {
  if (Array.isArray(e9)) return dh(e9);
}
function dh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function bz(e9, t) {
  if (e9 == null) return {};
  var r = _z(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function _z(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Hv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hv(Object(r), true).forEach(function(n) {
      wz(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function wz(e9, t, r) {
  return t = Sz(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Sz(e9) {
  var t = Oz(e9, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function Oz(e9, t) {
  if ($o(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Mo.apply(this, arguments);
}
var xz = function(t) {
  var r = t.value, n = t.formatter, i = st(t.children) ? r : t.children;
  return lt(n) ? n(i) : i;
}, Az = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, Pz = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, h = c.outerRadius, d = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + h) / 2, _ = Az(d, y), g = _ >= 0 ? 1 : -1, w, S;
  i === "insideStart" ? (w = d + g * o, S = m) : i === "insideEnd" ? (w = y - g * o, S = !m) : i === "end" && (w = y + g * o, S = m), S = _ <= 0 ? S : !S;
  var v = le(u, l, p, w), b = le(u, l, p, w + (S ? 1 : -1) * 359), O = "M".concat(v.x, ",").concat(v.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), P = st(t.id) ? ri("recharts-radial-line-") : t.id;
  return A.createElement("text", Mo({}, n, { dominantBaseline: "central", className: mt("recharts-radial-bar-label", s) }), A.createElement("defs", null, A.createElement("path", { id: P, d: O })), A.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, Tz = function(t) {
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
}, Iz = function(t) {
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
  return a === "insideLeft" ? ee({ x: s + p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" }, O) : a === "insideRight" ? ee({ x: s + u - p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" }, O) : a === "insideTop" ? ee({ x: s + u / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, O) : a === "insideBottom" ? ee({ x: s + u / 2, y: c + l - h, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideTopLeft" ? ee({ x: s + p, y: c + h, textAnchor: g, verticalAnchor: y }, O) : a === "insideTopRight" ? ee({ x: s + u - p, y: c + h, textAnchor: _, verticalAnchor: y }, O) : a === "insideBottomLeft" ? ee({ x: s + p, y: c + l - h, textAnchor: g, verticalAnchor: d }, O) : a === "insideBottomRight" ? ee({ x: s + u - p, y: c + l - h, textAnchor: _, verticalAnchor: d }, O) : ma(a) && (L(a.x) || Bn(a.x)) && (L(a.y) || Bn(a.y)) ? ee({ x: s + Yn(a.x, u), y: c + Yn(a.y, l), textAnchor: "end", verticalAnchor: "end" }, O) : ee({ x: s + u / 2, y: c + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, Ez = function(t) {
  return "cx" in t && L(t.cx);
};
function he(e9) {
  var t = e9.offset, r = t === void 0 ? 5 : t, n = bz(e9, dz), i = ee({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, h = i.textBreakAll;
  if (!a || st(s) && st(c) && !B.isValidElement(u) && !lt(u)) return null;
  if (B.isValidElement(u)) return B.cloneElement(u, i);
  var d;
  if (lt(u)) {
    if (d = B.createElement(u, i), B.isValidElement(d)) return d;
  } else d = xz(i);
  var y = Ez(a), m = ct(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return Pz(i, d, m);
  var p = y ? Tz(i) : Iz(i);
  return A.createElement(Cc, Mo({ className: mt("recharts-label", f) }, m, p, { breakAll: h }), d);
}
he.displayName = "Label";
var ZS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, h = t.y, d = t.top, y = t.left, m = t.width, p = t.height, _ = t.clockWise, g = t.labelViewBox;
  if (g) return g;
  if (L(m) && L(p)) {
    if (L(f) && L(h)) return { x: f, y: h, width: m, height: p };
    if (L(d) && L(y)) return { x: d, y, width: m, height: p };
  }
  return L(f) && L(h) ? { x: f, y: h, width: 0, height: 0 } : L(r) && L(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: l || c || s || 0, clockWise: _ } : t.viewBox ? t.viewBox : {};
}, $z = function(t, r) {
  return t ? t === true ? A.createElement(he, { key: "label-implicit", viewBox: r }) : ie(t) ? A.createElement(he, { key: "label-implicit", viewBox: r, value: t }) : B.isValidElement(t) ? t.type === he ? B.cloneElement(t, { key: "label-implicit", viewBox: r }) : A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : lt(t) ? A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : ma(t) ? A.createElement(he, Mo({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, Mz = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = ZS(t), o = Te(i, he).map(function(c, u) {
    return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = $z(t.label, r || a);
  return [s].concat(pz(o));
};
he.parseViewBox = ZS;
he.renderCallByParent = Mz;
function Dz(e9) {
  var t = e9 == null ? 0 : e9.length;
  return t ? e9[t - 1] : void 0;
}
var Nz = Dz;
const Cz = Bt(Nz);
function Do(e9) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e9);
}
var jz = ["valueAccessor"], Bz = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function kz(e9) {
  return Uz(e9) || Fz(e9) || Lz(e9) || Rz();
}
function Rz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lz(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return ph(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ph(e9, t);
  }
}
function Fz(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function Uz(e9) {
  if (Array.isArray(e9)) return ph(e9);
}
function ph(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Jc.apply(this, arguments);
}
function Kv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kv(Object(r), true).forEach(function(n) {
      zz(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function zz(e9, t, r) {
  return t = Wz(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Wz(e9) {
  var t = Vz(e9, "string");
  return Do(t) == "symbol" ? t : t + "";
}
function Vz(e9, t) {
  if (Do(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Do(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Xv(e9, t) {
  if (e9 == null) return {};
  var r = qz(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function qz(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var Gz = function(t) {
  return Array.isArray(t.value) ? Cz(t.value) : t.value;
};
function Or(e9) {
  var t = e9.valueAccessor, r = t === void 0 ? Gz : t, n = Xv(e9, jz), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = Xv(n, Bz);
  return !i || !i.length ? null : A.createElement(St, { className: "recharts-label-list" }, i.map(function(l, f) {
    var h = st(a) ? r(l, f) : ae(l && l.payload, a), d = st(s) ? {} : { id: "".concat(s, "-").concat(f) };
    return A.createElement(he, Jc({}, ct(l, true), u, d, { parentViewBox: l.parentViewBox, value: h, textBreakAll: c, viewBox: he.parseViewBox(st(o) ? l : Yv(Yv({}, l), {}, { clockWise: o })), key: "label-".concat(f), index: f }));
  }));
}
Or.displayName = "LabelList";
function Hz(e9, t) {
  return e9 ? e9 === true ? A.createElement(Or, { key: "labelList-implicit", data: t }) : A.isValidElement(e9) || lt(e9) ? A.createElement(Or, { key: "labelList-implicit", data: t, content: e9 }) : ma(e9) ? A.createElement(Or, Jc({ data: t }, e9, { key: "labelList-implicit" })) : null : null;
}
function Kz(e9, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e9 || !e9.children && r && !e9.label) return null;
  var n = e9.children, i = Te(n, Or).map(function(o, s) {
    return B.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = Hz(e9.label, t);
  return [a].concat(kz(i));
}
Or.renderCallByParent = Kz;
function No(e9) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e9);
}
function yh() {
  return yh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, yh.apply(this, arguments);
}
function Jv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jv(Object(r), true).forEach(function(n) {
      Yz(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Jv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Yz(e9, t, r) {
  return t = Xz(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Xz(e9) {
  var t = Jz(e9, "string");
  return No(t) == "symbol" ? t : t + "";
}
function Jz(e9, t) {
  if (No(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (No(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Qz = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Os = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / Xc, h = u ? a : a + o * f, d = le(r, n, l, h), y = le(r, n, i, h), m = u ? a - o * f : a, p = le(r, n, l * Math.cos(f * Xc), m);
  return { center: d, circleTangency: y, lineTangency: p, theta: f };
}, tO = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = Qz(o, s), u = o + c, l = le(r, n, a, o), f = le(r, n, a, u), h = "M ".concat(l.x, ",").concat(l.y, `
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
}, Zz = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = sr(l - u), h = Os({ cx: r, cy: n, radius: a, angle: u, sign: f, cornerRadius: o, cornerIsExternal: c }), d = h.circleTangency, y = h.lineTangency, m = h.theta, p = Os({ cx: r, cy: n, radius: a, angle: l, sign: -f, cornerRadius: o, cornerIsExternal: c }), _ = p.circleTangency, g = p.lineTangency, w = p.theta, S = c ? Math.abs(u - l) : Math.abs(u - l) - m - w;
  if (S < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : tO({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: l });
  var v = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
  `);
  if (i > 0) {
    var b = Os({ cx: r, cy: n, radius: i, angle: u, sign: f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), O = b.circleTangency, P = b.lineTangency, T = b.theta, $ = Os({ cx: r, cy: n, radius: i, angle: l, sign: -f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), E = $.circleTangency, I = $.lineTangency, j = $.theta, N = c ? Math.abs(u - l) : Math.abs(u - l) - T - j;
    if (N < 0 && o === 0) return "".concat(v, "L").concat(r, ",").concat(n, "Z");
    v += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else v += "L".concat(r, ",").concat(n, "Z");
  return v;
}, t4 = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, eO = function(t) {
  var r = Qv(Qv({}, t4), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, h = r.className;
  if (o < a || l === f) return null;
  var d = mt("recharts-sector", h), y = o - a, m = Yn(s, y, 0, true), p;
  return m > 0 && Math.abs(l - f) < 360 ? p = Zz({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(m, y / 2), forceCornerRadius: c, cornerIsExternal: u, startAngle: l, endAngle: f }) : p = tO({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: f }), A.createElement("path", yh({}, ct(r, true), { className: d, d: p, role: "img" }));
};
function Co(e9) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e9);
}
function mh() {
  return mh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, mh.apply(this, arguments);
}
function Zv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zv(Object(r), true).forEach(function(n) {
      e42(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function e42(e9, t, r) {
  return t = r4(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function r4(e9) {
  var t = n4(e9, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function n4(e9, t) {
  if (Co(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var eg = { curveBasisClosed: eD, curveBasisOpen: rD, curveBasis: tD, curveBumpX: FM, curveBumpY: UM, curveLinearClosed: nD, curveLinear: Vu, curveMonotoneX: iD, curveMonotoneY: aD, curveNatural: oD, curveStep: sD, curveStepAfter: uD, curveStepBefore: cD }, xs = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ka = function(t) {
  return t.x;
}, Ra = function(t) {
  return t.y;
}, i4 = function(t, r) {
  if (lt(t)) return t;
  var n = "curve".concat(zu(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? eg["".concat(n).concat(r === "vertical" ? "Y" : "X")] : eg[n] || Vu;
}, a4 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? false : c, l = i4(n, s), f = u ? a.filter(function(m) {
    return xs(m);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = u ? o.filter(function(m) {
      return xs(m);
    }) : o, y = f.map(function(m, p) {
      return tg(tg({}, m), {}, { base: d[p] });
    });
    return s === "vertical" ? h = ps().y(Ra).x1(ka).x0(function(m) {
      return m.base.x;
    }) : h = ps().x(ka).y1(Ra).y0(function(m) {
      return m.base.y;
    }), h.defined(xs).curve(l), h(y);
  }
  return s === "vertical" && L(o) ? h = ps().y(Ra).x1(ka).x0(o) : L(o) ? h = ps().x(ka).y1(Ra).y0(o) : h = nw().x(ka).y(Ra), h.defined(xs).curve(l), h(f);
}, Vn = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? a4(t) : i;
  return B.createElement("path", mh({}, ct(t, false), _c(t), { className: mt("recharts-curve", r), d: o, ref: a }));
}, rO = { exports: {} }, o4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", s4 = o4, c4 = s4;
function nO() {
}
function iO() {
}
iO.resetWarningCache = nO;
var u4 = function() {
  function e9(n, i, a, o, s, c) {
    if (c !== c4) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e9.isRequired = e9;
  function t() {
    return e9;
  }
  var r = { array: e9, bigint: e9, bool: e9, func: e9, number: e9, object: e9, string: e9, symbol: e9, any: e9, arrayOf: t, element: e9, elementType: e9, instanceOf: t, node: e9, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: iO, resetWarningCache: nO };
  return r.PropTypes = r, r;
};
rO.exports = u4();
var l4 = rO.exports;
const Ot = Bt(l4), { getOwnPropertyNames: f4, getOwnPropertySymbols: h4 } = Object, { hasOwnProperty: d4 } = Object.prototype;
function Ql(e9, t) {
  return function(n, i, a) {
    return e9(n, i, a) && t(n, i, a);
  };
}
function As(e9) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e9(r, n, i);
    const { cache: a } = i, o = a.get(r), s = a.get(n);
    if (o && s) return o === n && s === r;
    a.set(r, n), a.set(n, r);
    const c = e9(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function p4(e9) {
  return e9 == null ? void 0 : e9[Symbol.toStringTag];
}
function rg(e9) {
  return f4(e9).concat(h4(e9));
}
const y4 = Object.hasOwn || ((e9, t) => d4.call(e9, t));
function ai(e9, t) {
  return e9 === t || !e9 && !t && e9 !== e9 && t !== t;
}
const m4 = "__v", v4 = "__o", g4 = "_owner", { getOwnPropertyDescriptor: ng, keys: ig } = Object;
function b4(e9, t) {
  return e9.byteLength === t.byteLength && Qc(new Uint8Array(e9), new Uint8Array(t));
}
function _4(e9, t, r) {
  let n = e9.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e9[n], t[n], n, n, e9, t, r)) return false;
  return true;
}
function w4(e9, t) {
  return e9.byteLength === t.byteLength && Qc(new Uint8Array(e9.buffer, e9.byteOffset, e9.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function S4(e9, t) {
  return ai(e9.getTime(), t.getTime());
}
function O4(e9, t) {
  return e9.name === t.name && e9.message === t.message && e9.cause === t.cause && e9.stack === t.stack;
}
function x4(e9, t) {
  return e9 === t;
}
function ag(e9, t, r) {
  const n = e9.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e9.entries();
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
      if (r.equals(h[0], d[0], c, f, e9, t, r) && r.equals(h[1], d[1], h[0], d[0], e9, t, r)) {
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
const A4 = ai;
function P4(e9, t, r) {
  const n = ig(e9);
  let i = n.length;
  if (ig(t).length !== i) return false;
  for (; i-- > 0; ) if (!aO(e9, t, r, n[i])) return false;
  return true;
}
function La(e9, t, r) {
  const n = rg(e9);
  let i = n.length;
  if (rg(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !aO(e9, t, r, a) || (o = ng(e9, a), s = ng(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function T4(e9, t) {
  return ai(e9.valueOf(), t.valueOf());
}
function I4(e9, t) {
  return e9.source === t.source && e9.flags === t.flags;
}
function og(e9, t, r) {
  const n = e9.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e9.values();
  let o, s;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.values();
    let u = false, l = 0;
    for (; (s = c.next()) && !s.done; ) {
      if (!i[l] && r.equals(o.value, s.value, o.value, s.value, e9, t, r)) {
        u = i[l] = true;
        break;
      }
      l++;
    }
    if (!u) return false;
  }
  return true;
}
function Qc(e9, t) {
  let r = e9.byteLength;
  if (t.byteLength !== r || e9.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e9[r] !== t[r]) return false;
  return true;
}
function E4(e9, t) {
  return e9.hostname === t.hostname && e9.pathname === t.pathname && e9.protocol === t.protocol && e9.port === t.port && e9.hash === t.hash && e9.username === t.username && e9.password === t.password;
}
function aO(e9, t, r, n) {
  return (n === g4 || n === v4 || n === m4) && (e9.$$typeof || t.$$typeof) ? true : y4(t, n) && r.equals(e9[n], t[n], n, n, e9, t, r);
}
const $4 = "[object ArrayBuffer]", M4 = "[object Arguments]", D4 = "[object Boolean]", N4 = "[object DataView]", C4 = "[object Date]", j4 = "[object Error]", B4 = "[object Map]", k4 = "[object Number]", R4 = "[object Object]", L4 = "[object RegExp]", F4 = "[object Set]", U4 = "[object String]", z4 = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, W4 = "[object URL]", V4 = Object.prototype.toString;
function q4({ areArrayBuffersEqual: e9, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: u, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: y }) {
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
    const v = V4.call(p);
    if (v === C4) return n(p, _, g);
    if (v === L4) return l(p, _, g);
    if (v === B4) return o(p, _, g);
    if (v === F4) return f(p, _, g);
    if (v === R4) return typeof p.then != "function" && typeof _.then != "function" && c(p, _, g);
    if (v === W4) return d(p, _, g);
    if (v === j4) return i(p, _, g);
    if (v === M4) return c(p, _, g);
    if (z4[v]) return h(p, _, g);
    if (v === $4) return e9(p, _, g);
    if (v === N4) return r(p, _, g);
    if (v === D4 || v === k4 || v === U4) return u(p, _, g);
    if (y) {
      let b = y[v];
      if (!b) {
        const O = p4(p);
        O && (b = y[O]);
      }
      if (b) return b(p, _, g);
    }
    return false;
  };
}
function G4({ circular: e9, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: b4, areArraysEqual: r ? La : _4, areDataViewsEqual: w4, areDatesEqual: S4, areErrorsEqual: O4, areFunctionsEqual: x4, areMapsEqual: r ? Ql(ag, La) : ag, areNumbersEqual: A4, areObjectsEqual: r ? La : P4, arePrimitiveWrappersEqual: T4, areRegExpsEqual: I4, areSetsEqual: r ? Ql(og, La) : og, areTypedArraysEqual: r ? Ql(Qc, La) : Qc, areUrlsEqual: E4, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e9) {
    const i = As(n.areArraysEqual), a = As(n.areMapsEqual), o = As(n.areObjectsEqual), s = As(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function H4(e9) {
  return function(t, r, n, i, a, o, s) {
    return e9(t, r, s);
  };
}
function K4({ circular: e9, comparator: t, createState: r, equals: n, strict: i }) {
  if (r) return function(s, c) {
    const { cache: u = e9 ? /* @__PURE__ */ new WeakMap() : void 0, meta: l } = r();
    return t(s, c, { cache: u, equals: n, meta: l, strict: i });
  };
  if (e9) return function(s, c) {
    return t(s, c, { cache: /* @__PURE__ */ new WeakMap(), equals: n, meta: void 0, strict: i });
  };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function(s, c) {
    return t(s, c, a);
  };
}
const Y4 = Pn();
Pn({ strict: true });
Pn({ circular: true });
Pn({ circular: true, strict: true });
Pn({ createInternalComparator: () => ai });
Pn({ strict: true, createInternalComparator: () => ai });
Pn({ circular: true, createInternalComparator: () => ai });
Pn({ circular: true, createInternalComparator: () => ai, strict: true });
function Pn(e9 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e9, a = G4(e9), o = q4(a), s = r ? r(o) : H4(o);
  return K4({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function X4(e9) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e9);
}
function sg(e9) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e9(a), r = -1) : X4(i);
  };
  requestAnimationFrame(n);
}
function vh(e9) {
  "@babel/helpers - typeof";
  return vh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vh(e9);
}
function J4(e9) {
  return eW(e9) || tW(e9) || Z4(e9) || Q4();
}
function Q4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z4(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return cg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cg(e9, t);
  }
}
function cg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function tW(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function eW(e9) {
  if (Array.isArray(e9)) return e9;
}
function rW() {
  var e9 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = J4(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          sg(i.bind(null, u), c);
          return;
        }
        i(c), sg(i.bind(null, u));
        return;
      }
      vh(a) === "object" && (e9 = a, t(e9)), typeof a == "function" && a();
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
function jo(e9) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e9);
}
function ug(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), true).forEach(function(n) {
      oO(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function oO(e9, t, r) {
  return t = nW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function nW(e9) {
  var t = iW(e9, "string");
  return jo(t) === "symbol" ? t : String(t);
}
function iW(e9, t) {
  if (jo(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (jo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var aW = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, oW = function(t) {
  return t;
}, sW = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, eo = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return lg(lg({}, n), {}, oO({}, i, t(i, r[i])));
  }, {});
}, fg = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(sW(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function cW(e9, t) {
  return fW(e9) || lW(e9, t) || sO(e9, t) || uW();
}
function uW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lW(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function fW(e9) {
  if (Array.isArray(e9)) return e9;
}
function hW(e9) {
  return yW(e9) || pW(e9) || sO(e9) || dW();
}
function dW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sO(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return gh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gh(e9, t);
  }
}
function pW(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function yW(e9) {
  if (Array.isArray(e9)) return gh(e9);
}
function gh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var Zc = 1e-4, cO = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, uO = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, hg = function(t, r) {
  return function(n) {
    var i = cO(t, r);
    return uO(i, n);
  };
}, mW = function(t, r) {
  return function(n) {
    var i = cO(t, r), a = [].concat(hW(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return uO(a, n);
  };
}, dg = function() {
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
        }), l = cW(u, 4);
        i = l[0], a = l[1], o = l[2], s = l[3];
      }
    }
  }
  var f = hg(i, o), h = hg(a, s), d = mW(i, o), y = function(_) {
    return _ > 1 ? 1 : _ < 0 ? 0 : _;
  }, m = function(_) {
    for (var g = _ > 1 ? 1 : _, w = g, S = 0; S < 8; ++S) {
      var v = f(w) - g, b = d(w);
      if (Math.abs(v - g) < Zc || b < Zc) return h(w);
      w = y(w - v / b);
    }
    return h(w);
  };
  return m.isStepper = false, m;
}, vW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, h) {
    var d = -(l - f) * n, y = h * a, m = h + (d - y) * s / 1e3, p = h * s / 1e3 + l;
    return Math.abs(p - f) < Zc && Math.abs(m) < Zc ? [f, 0] : [p, m];
  };
  return c.isStepper = true, c.dt = s, c;
}, gW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return dg(i);
    case "spring":
      return vW();
    default:
      if (i.split("(")[0] === "cubic-bezier") return dg(i);
  }
  return typeof i == "function" ? i : null;
};
function Bo(e9) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e9);
}
function pg(e9) {
  return wW(e9) || _W(e9) || lO(e9) || bW();
}
function bW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _W(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function wW(e9) {
  if (Array.isArray(e9)) return _h(e9);
}
function yg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ue(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), true).forEach(function(n) {
      bh(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function bh(e9, t, r) {
  return t = SW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function SW(e9) {
  var t = OW(e9, "string");
  return Bo(t) === "symbol" ? t : String(t);
}
function OW(e9, t) {
  if (Bo(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Bo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function xW(e9, t) {
  return TW(e9) || PW(e9, t) || lO(e9, t) || AW();
}
function AW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lO(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return _h(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _h(e9, t);
  }
}
function _h(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function PW(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function TW(e9) {
  if (Array.isArray(e9)) return e9;
}
var tu = function(t, r, n) {
  return t + (r - t) * n;
}, wh = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, IW = function e5(t, r, n) {
  var i = eo(function(a, o) {
    if (wh(o)) {
      var s = t(o.from, o.to, o.velocity), c = xW(s, 2), u = c[0], l = c[1];
      return ue(ue({}, o), {}, { from: u, velocity: l });
    }
    return o;
  }, r);
  return n < 1 ? eo(function(a, o) {
    return wh(o) ? ue(ue({}, o), {}, { velocity: tu(o.velocity, i[a].velocity, n), from: tu(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const EW = function(e9, t, r, n, i) {
  var a = aW(e9, t), o = a.reduce(function(p, _) {
    return ue(ue({}, p), {}, bh({}, _, [e9[_], t[_]]));
  }, {}), s = a.reduce(function(p, _) {
    return ue(ue({}, p), {}, bh({}, _, { from: e9[_], velocity: 0, to: t[_] }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, h = function() {
    return eo(function(_, g) {
      return g.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(wh).length;
  }, y = function(_) {
    u || (u = _);
    var g = _ - u, w = g / r.dt;
    s = IW(r, s, w), i(ue(ue(ue({}, e9), t), h())), u = _, d() || (c = requestAnimationFrame(f));
  }, m = function(_) {
    l || (l = _);
    var g = (_ - l) / n, w = eo(function(v, b) {
      return tu.apply(void 0, pg(b).concat([r(g)]));
    }, o);
    if (i(ue(ue(ue({}, e9), t), w)), g < 1) c = requestAnimationFrame(f);
    else {
      var S = eo(function(v, b) {
        return tu.apply(void 0, pg(b).concat([r(1)]));
      }, o);
      i(ue(ue(ue({}, e9), t), S));
    }
  };
  return f = r.isStepper ? y : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function Xi(e9) {
  "@babel/helpers - typeof";
  return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xi(e9);
}
var $W = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function MW(e9, t) {
  if (e9 == null) return {};
  var r = DW(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function DW(e9, t) {
  if (e9 == null) return {};
  var r = {}, n = Object.keys(e9), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e9[i]);
  return r;
}
function Zl(e9) {
  return BW(e9) || jW(e9) || CW(e9) || NW();
}
function NW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CW(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Sh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sh(e9, t);
  }
}
function jW(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function BW(e9) {
  if (Array.isArray(e9)) return Sh(e9);
}
function Sh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function mg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function er(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), true).forEach(function(n) {
      Xa(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Xa(e9, t, r) {
  return t = fO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function kW(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function RW(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, fO(n.key), n);
  }
}
function LW(e9, t, r) {
  return t && RW(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function fO(e9) {
  var t = FW(e9, "string");
  return Xi(t) === "symbol" ? t : String(t);
}
function FW(e9, t) {
  if (Xi(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Xi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function UW(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Oh(e9, t);
}
function Oh(e9, t) {
  return Oh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Oh(e9, t);
}
function zW(e9) {
  var t = WW();
  return function() {
    var n = eu(e9), i;
    if (t) {
      var a = eu(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return xh(this, i);
  };
}
function xh(e9, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ah(e9);
}
function Ah(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function WW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function eu(e9) {
  return eu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eu(e9);
}
var ur = function(e9) {
  UW(r, e9);
  var t = zW(r);
  function r(n, i) {
    var a;
    kW(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Ah(a)), a.changeStyle = a.changeStyle.bind(Ah(a)), !s || d <= 0) return a.state = { style: {} }, typeof h == "function" && (a.state = { style: l }), xh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (u) {
      if (typeof h == "function") return a.state = { style: u }, xh(a);
      a.state = { style: c ? Xa({}, c, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return LW(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, s = a.canBegin, c = a.attributeName, u = a.shouldReAnimate, l = a.to, f = a.from, h = this.state.style;
    if (s) {
      if (!o) {
        var d = { style: c ? Xa({}, c, l) : l };
        this.state && h && (c && h[c] !== l || !c && h !== l) && this.setState(d);
        return;
      }
      if (!(Y4(i.to, l) && i.canBegin && i.isActive)) {
        var y = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var m = y || u ? f : i.to;
        if (this.state && h) {
          var p = { style: c ? Xa({}, c, m) : m };
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
    var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, h = i.onAnimationStart, d = EW(o, s, gW(u), c, this.changeStyle), y = function() {
      a.stopJSAnimation = d();
    };
    this.manager.start([h, l, y, c, f]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, h = f === void 0 ? 0 : f, d = function(m, p, _) {
      if (_ === 0) return m;
      var g = p.duration, w = p.easing, S = w === void 0 ? "ease" : w, v = p.style, b = p.properties, O = p.onAnimationEnd, P = _ > 0 ? o[_ - 1] : p, T = b || Object.keys(v);
      if (typeof S == "function" || S === "spring") return [].concat(Zl(m), [a.runJSAnimation.bind(a, { from: P.style, to: v, duration: g, easing: S }), g]);
      var $ = fg(T, g, S), E = er(er(er({}, P.style), v), {}, { transition: $ });
      return [].concat(Zl(m), [E, g, O]).filter(oW);
    };
    return this.manager.start([c].concat(Zl(o.reduce(d, [l, Math.max(h, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = rW());
    var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof d == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (h.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var m = s ? Xa({}, s, c) : c, p = fg(Object.keys(m), o, u);
    y.start([l, a, er(er({}, m), {}, { transition: p }), o, f]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = MW(i, $W), u = B.Children.count(a), l = this.state.style;
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
function ko(e9) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e9);
}
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, ru.apply(this, arguments);
}
function VW(e9, t) {
  return KW(e9) || HW(e9, t) || GW(e9, t) || qW();
}
function qW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GW(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return vg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vg(e9, t);
  }
}
function vg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function HW(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function KW(e9) {
  if (Array.isArray(e9)) return e9;
}
function gg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), true).forEach(function(n) {
      YW(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function YW(e9, t, r) {
  return t = XW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function XW(e9) {
  var t = JW(e9, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function JW(e9, t) {
  if (ko(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var _g = function(t, r, n, i, a) {
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
}, QW = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), h = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= h;
  }
  return false;
}, ZW = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, Ip = function(t) {
  var r = bg(bg({}, ZW), t), n = B.useRef(), i = B.useState(-1), a = VW(i, 2), o = a[0], s = a[1];
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
    return A.createElement(ur, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, isActive: _, easing: y }, A.createElement("path", ru({}, ct(r, true), { className: w, d: _g(O, P, v, b, h), ref: n })));
  }) : A.createElement("path", ru({}, ct(r, true), { className: w, d: _g(c, u, l, f, h) }));
};
function Ph() {
  return Ph = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Ph.apply(this, arguments);
}
var al = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = mt("recharts-dot", a);
  return r === +r && n === +n && i === +i ? B.createElement("circle", Ph({}, ct(t, false), _c(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function Ro(e9) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e9);
}
var t5 = ["x", "y", "top", "left", "width", "height", "className"];
function Th() {
  return Th = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Th.apply(this, arguments);
}
function wg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function e52(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wg(Object(r), true).forEach(function(n) {
      r5(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function r5(e9, t, r) {
  return t = n5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function n5(e9) {
  var t = i5(e9, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function i5(e9, t) {
  if (Ro(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function a5(e9, t) {
  if (e9 == null) return {};
  var r = o5(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function o5(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var s5 = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, c5 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, h = t.height, d = h === void 0 ? 0 : h, y = t.className, m = a5(t, t5), p = e52({ x: n, y: a, top: s, left: u, width: f, height: d }, m);
  return !L(n) || !L(a) || !L(f) || !L(d) || !L(s) || !L(u) ? null : A.createElement("path", Th({}, ct(p, true), { className: mt("recharts-cross", y), d: s5(n, a, f, d, s, u) }));
}, u5 = Tw, l5 = u5(Object.getPrototypeOf, Object), f5 = l5, h5 = Qr, d5 = f5, p5 = Zr, y5 = "[object Object]", m5 = Function.prototype, v5 = Object.prototype, hO = m5.toString, g5 = v5.hasOwnProperty, b5 = hO.call(Object);
function _5(e9) {
  if (!p5(e9) || h5(e9) != y5) return false;
  var t = d5(e9);
  if (t === null) return true;
  var r = g5.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && hO.call(r) == b5;
}
var w5 = _5;
const S5 = Bt(w5);
var O5 = Qr, x5 = Zr, A5 = "[object Boolean]";
function P5(e9) {
  return e9 === true || e9 === false || x5(e9) && O5(e9) == A5;
}
var T5 = P5;
const I5 = Bt(T5);
function Lo(e9) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e9);
}
function nu() {
  return nu = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, nu.apply(this, arguments);
}
function E5(e9, t) {
  return N5(e9) || D5(e9, t) || M5(e9, t) || $5();
}
function $5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M5(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Sg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sg(e9, t);
  }
}
function Sg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function D5(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function N5(e9) {
  if (Array.isArray(e9)) return e9;
}
function Og(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Og(Object(r), true).forEach(function(n) {
      C5(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function C5(e9, t, r) {
  return t = j5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function j5(e9) {
  var t = B5(e9, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function B5(e9, t) {
  if (Lo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Ag = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, k5 = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, R5 = function(t) {
  var r = xg(xg({}, k5), t), n = B.useRef(), i = B.useState(-1), a = E5(i, 2), o = a[0], s = a[1];
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
    return A.createElement(ur, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, easing: y }, A.createElement("path", nu({}, ct(r, true), { className: g, d: Ag(O, P, S, v, b), ref: n })));
  }) : A.createElement("g", null, A.createElement("path", nu({}, ct(r, true), { className: g, d: Ag(c, u, l, f, h) })));
}, L5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Fo(e9) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e9);
}
function F5(e9, t) {
  if (e9 == null) return {};
  var r = U5(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function U5(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Pg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iu(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), true).forEach(function(n) {
      z5(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function z5(e9, t, r) {
  return t = W5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function W5(e9) {
  var t = V5(e9, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function V5(e9, t) {
  if (Fo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function q5(e9, t) {
  return iu(iu({}, t), e9);
}
function G5(e9, t) {
  return e9 === "symbols";
}
function Tg(e9) {
  var t = e9.shapeType, r = e9.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(Ip, r);
    case "trapezoid":
      return A.createElement(R5, r);
    case "sector":
      return A.createElement(eO, r);
    case "symbols":
      if (G5(t)) return A.createElement(Gu, r);
      break;
    default:
      return null;
  }
}
function H5(e9) {
  return B.isValidElement(e9) ? e9.props : e9;
}
function Ih(e9) {
  var t = e9.option, r = e9.shapeType, n = e9.propTransformer, i = n === void 0 ? q5 : n, a = e9.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e9.isActive, c = F5(e9, L5), u;
  if (B.isValidElement(t)) u = B.cloneElement(t, iu(iu({}, c), H5(t)));
  else if (lt(t)) u = t(c);
  else if (S5(t) && !I5(t)) {
    var l = i(t, c);
    u = A.createElement(Tg, { shapeType: r, elementProps: l });
  } else {
    var f = c;
    u = A.createElement(Tg, { shapeType: r, elementProps: f });
  }
  return s ? A.createElement(St, { className: o }, u) : u;
}
function ol(e9, t) {
  return t != null && "trapezoids" in e9.props;
}
function sl(e9, t) {
  return t != null && "sectors" in e9.props;
}
function Uo(e9, t) {
  return t != null && "points" in e9.props;
}
function K5(e9, t) {
  var r, n, i = e9.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e9.x === t.x, a = e9.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e9.y === t.y;
  return i && a;
}
function Y5(e9, t) {
  var r = e9.endAngle === t.endAngle, n = e9.startAngle === t.startAngle;
  return r && n;
}
function X5(e9, t) {
  var r = e9.x === t.x, n = e9.y === t.y, i = e9.z === t.z;
  return r && n && i;
}
function J5(e9, t) {
  var r;
  return ol(e9, t) ? r = K5 : sl(e9, t) ? r = Y5 : Uo(e9, t) && (r = X5), r;
}
function Q5(e9, t) {
  var r;
  return ol(e9, t) ? r = "trapezoids" : sl(e9, t) ? r = "sectors" : Uo(e9, t) && (r = "points"), r;
}
function Z5(e9, t) {
  if (ol(e9, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (sl(e9, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Uo(e9, t) ? t.payload : {};
}
function tV(e9) {
  var t = e9.activeTooltipItem, r = e9.graphicalItem, n = e9.itemData, i = Q5(r, t), a = Z5(r, t), o = n.filter(function(c, u) {
    var l = Xn(a, c), f = r.props[i].filter(function(y) {
      var m = J5(r, t);
      return m(y, t);
    }), h = r.props[i].indexOf(f[f.length - 1]), d = u === h;
    return l && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var eV = Math.ceil, rV = Math.max;
function nV(e9, t, r, n) {
  for (var i = -1, a = rV(eV((t - e9) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e9, e9 += r;
  return o;
}
var iV = nV, aV = Gw, Ig = 1 / 0, oV = 17976931348623157e292;
function sV(e9) {
  if (!e9) return e9 === 0 ? e9 : 0;
  if (e9 = aV(e9), e9 === Ig || e9 === -Ig) {
    var t = e9 < 0 ? -1 : 1;
    return t * oV;
  }
  return e9 === e9 ? e9 : 0;
}
var dO = sV, cV = iV, uV = Yu, tf = dO;
function lV(e9) {
  return function(t, r, n) {
    return n && typeof n != "number" && uV(t, r, n) && (r = n = void 0), t = tf(t), r === void 0 ? (r = t, t = 0) : r = tf(r), n = n === void 0 ? t < r ? 1 : -1 : tf(n), cV(t, r, n, e9);
  };
}
var fV = lV, hV = fV, dV = hV(), pV = dV;
const au = Bt(pV);
function zo(e9) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e9);
}
function Eg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $g(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), true).forEach(function(n) {
      pO(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function pO(e9, t, r) {
  return t = yV(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function yV(e9) {
  var t = mV(e9, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function mV(e9, t) {
  if (zo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var vV = ["Webkit", "Moz", "O", "ms"], gV = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = vV.reduce(function(a, o) {
    return $g($g({}, a), {}, pO({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Ji(e9) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e9);
}
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, ou.apply(this, arguments);
}
function Mg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ef(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), true).forEach(function(n) {
      Ce(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function bV(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Dg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, mO(n.key), n);
  }
}
function _V(e9, t, r) {
  return t && Dg(e9.prototype, t), r && Dg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function wV(e9, t, r) {
  return t = su(t), SV(e9, yO() ? Reflect.construct(t, r || [], su(e9).constructor) : t.apply(e9, r));
}
function SV(e9, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return OV(e9);
}
function OV(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function yO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yO = function() {
    return !!e9;
  })();
}
function su(e9) {
  return su = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, su(e9);
}
function xV(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Eh(e9, t);
}
function Eh(e9, t) {
  return Eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eh(e9, t);
}
function Ce(e9, t, r) {
  return t = mO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function mO(e9) {
  var t = AV(e9, "string");
  return Ji(t) == "symbol" ? t : t + "";
}
function AV(e9, t) {
  if (Ji(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var PV = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, u = Za().domain(au(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: l };
}, Ng = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Qi = function(e9) {
  function t(r) {
    var n;
    return bV(this, t), n = wV(this, t, [r]), Ce(n, "handleDrag", function(i) {
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
      var a = Ng(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return xV(t, e9), _V(t, [{ key: "componentWillUnmount", value: function() {
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
    var a = Ng(i) ? i.changedTouches[0] : i;
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
    var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, h = c.traveller, d = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, _ = Math.max(n, this.props.x), g = ef(ef({}, ct(this.props, false)), {}, { x: _, y: u, width: l, height: f }), w = d || "Min value: ".concat((a = y[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
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
    return A.createElement(St, { className: "recharts-brush-texts" }, A.createElement(Cc, ou({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(f, h) - d, y: o + s / 2 }, y), this.getTextOfTick(i)), A.createElement(Cc, ou({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(f, h) + c + d, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, m = h.isTextActive, p = h.isSlideMoving, _ = h.isTravellerMoving, g = h.isTravellerFocused;
    if (!i || !i.length || !L(s) || !L(c) || !L(u) || !L(l) || u <= 0 || l <= 0) return null;
    var w = mt("recharts-brush", a), S = A.Children.count(o) === 1, v = gV("userSelect", "none");
    return A.createElement(St, { className: w, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: v }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || _ || g || f) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
    return A.createElement(A.Fragment, null, A.createElement("rect", { x: i, y: a, width: o, height: s, fill: c, stroke: "none" }), A.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), A.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return A.isValidElement(n) ? a = A.cloneElement(n, i) : lt(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return ef({ prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? PV({ data: a, width: o, x: s, travellerWidth: c, startIndex: l, endIndex: f }) : { scale: null, scaleValues: null });
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
Ce(Qi, "displayName", "Brush");
Ce(Qi, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var TV = Zd;
function IV(e9, t) {
  var r;
  return TV(e9, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var EV = IV, $V = bw, MV = Sn, DV = EV, NV = $e, CV = Yu;
function jV(e9, t, r) {
  var n = NV(e9) ? $V : DV;
  return r && CV(e9, t, r) && (t = void 0), n(e9, MV(t));
}
var BV = jV;
const kV = Bt(BV);
var xr = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Cg = Uw;
function RV(e9, t, r) {
  t == "__proto__" && Cg ? Cg(e9, t, { configurable: true, enumerable: true, value: r, writable: true }) : e9[t] = r;
}
var LV = RV, FV = LV, UV = Lw, zV = Sn;
function WV(e9, t) {
  var r = {};
  return t = zV(t), UV(e9, function(n, i, a) {
    FV(r, i, t(n, i, a));
  }), r;
}
var VV = WV;
const qV = Bt(VV);
function GV(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length; ++r < n; ) if (!t(e9[r], r, e9)) return false;
  return true;
}
var HV = GV, KV = Zd;
function YV(e9, t) {
  var r = true;
  return KV(e9, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var XV = YV, JV = HV, QV = XV, ZV = Sn, tq = $e, eq = Yu;
function rq(e9, t, r) {
  var n = tq(e9) ? JV : QV;
  return r && eq(e9, t, r) && (t = void 0), n(e9, ZV(t));
}
var nq = rq;
const vO = Bt(nq);
var iq = ["x", "y"];
function Wo(e9) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e9);
}
function $h() {
  return $h = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, $h.apply(this, arguments);
}
function jg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fa(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jg(Object(r), true).forEach(function(n) {
      aq(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function aq(e9, t, r) {
  return t = oq(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function oq(e9) {
  var t = sq(e9, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function sq(e9, t) {
  if (Wo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function cq(e9, t) {
  if (e9 == null) return {};
  var r = uq(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function uq(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function lq(e9, t) {
  var r = e9.x, n = e9.y, i = cq(e9, iq), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), h = parseInt(f, 10);
  return Fa(Fa(Fa(Fa(Fa({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: l, width: h, name: t.name, radius: t.radius });
}
function Bg(e9) {
  return A.createElement(Ih, $h({ shapeType: "rectangle", propTransformer: lq, activeClassName: "recharts-active-bar" }, e9));
}
var fq = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || A$(n);
    return a ? t(n, i) : (a || Qn(), r);
  };
}, hq = ["value", "background"], gO;
function Zi(e9) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e9);
}
function dq(e9, t) {
  if (e9 == null) return {};
  var r = pq(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function pq(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function cu() {
  return cu = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, cu.apply(this, arguments);
}
function kg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xt(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kg(Object(r), true).forEach(function(n) {
      fn(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function yq(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, _O(n.key), n);
  }
}
function mq(e9, t, r) {
  return t && Rg(e9.prototype, t), r && Rg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function vq(e9, t, r) {
  return t = uu(t), gq(e9, bO() ? Reflect.construct(t, r || [], uu(e9).constructor) : t.apply(e9, r));
}
function gq(e9, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return bq(e9);
}
function bq(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function bO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bO = function() {
    return !!e9;
  })();
}
function uu(e9) {
  return uu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uu(e9);
}
function _q(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Mh(e9, t);
}
function Mh(e9, t) {
  return Mh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Mh(e9, t);
}
function fn(e9, t, r) {
  return t = _O(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function _O(e9) {
  var t = wq(e9, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function wq(e9, t) {
  if (Zi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Ia = function(e9) {
  function t() {
    var r;
    yq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = vq(this, t, [].concat(i)), fn(r, "state", { isAnimationFinished: false }), fn(r, "id", ri("recharts-bar-")), fn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), fn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return _q(t, e9), mq(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = ct(this.props, false);
    return n && n.map(function(f, h) {
      var d = h === c, y = d ? u : o, m = Xt(Xt(Xt({}, l), f), {}, { isActive: d, option: y, index: h, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return A.createElement(St, cu({ className: "recharts-bar-rectangle" }, fo(i.props, f, h), { key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(h) }), A.createElement(Bg, m));
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
    return a && i && i.length && (!o || !Xn(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = ct(this.props.background, false);
    return a.map(function(u, l) {
      u.value;
      var f = u.background, h = dq(u, hq);
      if (!f) return null;
      var d = Xt(Xt(Xt(Xt(Xt({}, h), {}, { fill: "#eee" }, f), c), fo(n.props, u, l)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: l, className: "recharts-bar-background-rectangle" });
      return A.createElement(Bg, cu({ key: "background-bar-".concat(l), option: n.props.background, isActive: l === s }, d));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Ta);
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
gO = Ia;
fn(Ia, "displayName", "Bar");
fn(Ia, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !On.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
fn(Ia, "getComposedData", function(e9) {
  var t = e9.props, r = e9.item, n = e9.barPosition, i = e9.bandSize, a = e9.xAxis, o = e9.yAxis, s = e9.xAxisTicks, c = e9.yAxisTicks, u = e9.stackedData, l = e9.dataStartIndex, f = e9.displayedData, h = e9.offset, d = K6(n, r);
  if (!d) return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Xt(Xt({}, m), r.props) : r.props, _ = p.dataKey, g = p.children, w = p.minPointSize, S = y === "horizontal" ? o : a, v = u ? S.scale.domain() : null, b = rz({ numericAxis: S }), O = Te(g, rp), P = f.map(function(T, $) {
    var E, I, j, N, M, C;
    u ? E = Y6(u[l + $], v) : (E = ae(T, _), Array.isArray(E) || (E = [b, E]));
    var k = fq(w, gO.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, U = [o.scale(E[0]), o.scale(E[1])], q = U[0], rt = U[1];
      I = Fv({ axis: a, ticks: s, bandSize: i, offset: d.offset, entry: T, index: $ }), j = (F = rt ?? q) !== null && F !== void 0 ? F : void 0, N = d.size;
      var W = q - rt;
      if (M = Number.isNaN(W) ? 0 : W, C = { x: I, y: o.y, width: N, height: o.height }, Math.abs(k) > 0 && Math.abs(M) < Math.abs(k)) {
        var it = sr(M || k) * (Math.abs(k) - Math.abs(M));
        j -= it, M += it;
      }
    } else {
      var kt = [a.scale(E[0]), a.scale(E[1])], Yt = kt[0], Me = kt[1];
      if (I = Yt, j = Fv({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: T, index: $ }), N = Me - Yt, M = d.size, C = { x: a.x, y: j, width: a.width, height: M }, Math.abs(k) > 0 && Math.abs(N) < Math.abs(k)) {
        var Tn = sr(N || k) * (Math.abs(k) - Math.abs(N));
        N += Tn;
      }
    }
    return Xt(Xt(Xt({}, T), {}, { x: I, y: j, width: N, height: M, value: u ? E : E[1], payload: T, background: C }, O && O[$] && O[$].props), {}, { tooltipPayload: [QS(r, T)], tooltipPosition: { x: I + N / 2, y: j + M / 2 } });
  });
  return Xt({ data: P, layout: y }, h);
});
function Vo(e9) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e9);
}
function Sq(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Lg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, wO(n.key), n);
  }
}
function Oq(e9, t, r) {
  return t && Lg(e9.prototype, t), r && Lg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function Fg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ir(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), true).forEach(function(n) {
      cl(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function cl(e9, t, r) {
  return t = wO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function wO(e9) {
  var t = xq(e9, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function xq(e9, t) {
  if (Vo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Aq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, h = !!je(u, Ia);
  return l.reduce(function(d, y) {
    var m = r[y], p = m.orientation, _ = m.domain, g = m.padding, w = g === void 0 ? {} : g, S = m.mirror, v = m.reversed, b = "".concat(p).concat(S ? "Mirror" : ""), O, P, T, $, E;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = _[1] - _[0], j = 1 / 0, N = m.categoricalDomain.sort(E$);
      if (N.forEach(function(kt, Yt) {
        Yt > 0 && (j = Math.min((kt || 0) - (N[Yt - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / I, C = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (O = M * C / 2), m.padding === "no-gap") {
          var k = Yn(t.barCategoryGap, M * C), F = M * C / 2;
          O = F - k - (F - k) / C * k;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : P = m.range, v && (P = [P[1], P[0]]);
    var U = G6(m, a, h), q = U.scale, rt = U.realScaleType;
    q.domain(_).range(P), H6(q);
    var W = ez(q, ir(ir({}, m), {}, { realScaleType: rt }));
    i === "xAxis" ? (E = p === "top" && !S || p === "bottom" && S, T = n.left, $ = f[b] - E * m.height) : i === "yAxis" && (E = p === "left" && !S || p === "right" && S, T = f[b] - E * m.width, $ = n.top);
    var it = ir(ir(ir({}, m), W), {}, { realScaleType: rt, x: T, y: $, scale: q, width: i === "xAxis" ? n.width : m.width, height: i === "yAxis" ? n.height : m.height });
    return it.bandSize = Yc(it, W), !m.hide && i === "xAxis" ? f[b] += (E ? -1 : 1) * it.height : m.hide || (f[b] += (E ? -1 : 1) * it.width), ir(ir({}, d), {}, cl({}, y, it));
  }, {});
}, SO = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, Pq = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return SO({ x: r, y: n }, { x: i, y: a });
}, OO = function() {
  function e9(t) {
    Sq(this, e9), this.scale = t;
  }
  return Oq(e9, [{ key: "domain", get: function() {
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
    return new e9(r);
  } }]);
}();
cl(OO, "EPS", 1e-4);
var Ep = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ir(ir({}, n), {}, cl({}, i, OO.create(t[i])));
  }, {});
  return ir(ir({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return qV(i, function(c, u) {
      return r[u].apply(c, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return vO(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function Tq(e9) {
  return (e9 % 180 + 180) % 180;
}
var Iq = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = Tq(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, Eq = Sn, $q = is, Mq = Hu;
function Dq(e9) {
  return function(t, r, n) {
    var i = Object(t);
    if (!$q(t)) {
      var a = Eq(r);
      t = Mq(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e9(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var Nq = Dq, Cq = dO;
function jq(e9) {
  var t = Cq(e9), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Bq = jq, kq = Nw, Rq = Sn, Lq = Bq, Fq = Math.max;
function Uq(e9, t, r) {
  var n = e9 == null ? 0 : e9.length;
  if (!n) return -1;
  var i = r == null ? 0 : Lq(r);
  return i < 0 && (i = Fq(n + i, 0)), kq(e9, Rq(t), i);
}
var zq = Uq, Wq = Nq, Vq = zq, qq = Wq(Vq), Gq = qq;
const Hq = Bt(Gq);
var Kq = ME(function(e9) {
  return { x: e9.left, y: e9.top, width: e9.width, height: e9.height };
}, function(e9) {
  return ["l", e9.left, "t", e9.top, "w", e9.width, "h", e9.height].join("");
}), $p = B.createContext(void 0), Mp = B.createContext(void 0), xO = B.createContext(void 0), AO = B.createContext({}), PO = B.createContext(void 0), TO = B.createContext(0), IO = B.createContext(0), Ug = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = Kq(a);
  return A.createElement($p.Provider, { value: n }, A.createElement(Mp.Provider, { value: i }, A.createElement(AO.Provider, { value: a }, A.createElement(xO.Provider, { value: l }, A.createElement(PO.Provider, { value: o }, A.createElement(TO.Provider, { value: u }, A.createElement(IO.Provider, { value: c }, s)))))));
}, Yq = function() {
  return B.useContext(PO);
}, EO = function(t) {
  var r = B.useContext($p);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Xq = function() {
  var t = B.useContext($p);
  return un(t);
}, Jq = function() {
  var t = B.useContext(Mp), r = Hq(t, function(n) {
    return vO(n.domain, Number.isFinite);
  });
  return r || un(t);
}, $O = function(t) {
  var r = B.useContext(Mp);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Qq = function() {
  var t = B.useContext(xO);
  return t;
}, Zq = function() {
  return B.useContext(AO);
}, Dp = function() {
  return B.useContext(IO);
}, Np = function() {
  return B.useContext(TO);
};
function ta(e9) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e9);
}
function tG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eG(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, DO(n.key), n);
  }
}
function rG(e9, t, r) {
  return t && eG(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function nG(e9, t, r) {
  return t = lu(t), iG(e9, MO() ? Reflect.construct(t, r || [], lu(e9).constructor) : t.apply(e9, r));
}
function iG(e9, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return aG(e9);
}
function aG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function MO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (MO = function() {
    return !!e9;
  })();
}
function lu(e9) {
  return lu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lu(e9);
}
function oG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Dh(e9, t);
}
function Dh(e9, t) {
  return Dh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dh(e9, t);
}
function zg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), true).forEach(function(n) {
      Cp(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Cp(e9, t, r) {
  return t = DO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function DO(e9) {
  var t = sG(e9, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function sG(e9, t) {
  if (ta(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function cG(e9, t) {
  return hG(e9) || fG(e9, t) || lG(e9, t) || uG();
}
function uG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lG(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Vg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vg(e9, t);
  }
}
function Vg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function fG(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function hG(e9) {
  if (Array.isArray(e9)) return e9;
}
function Nh() {
  return Nh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Nh.apply(this, arguments);
}
var dG = function(t, r) {
  var n;
  return A.isValidElement(t) ? n = A.cloneElement(t, r) : lt(t) ? n = t(r) : n = A.createElement("line", Nh({}, r, { className: "recharts-reference-line-line" })), n;
}, pG = function(t, r, n, i, a, o, s, c, u) {
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
    return xr(u, "discard") && kV(v, function(b) {
      return !t.isInRange(b);
    }) ? null : v;
  }
  return null;
};
function yG(e9) {
  var t = e9.x, r = e9.y, n = e9.segment, i = e9.xAxisId, a = e9.yAxisId, o = e9.shape, s = e9.className, c = e9.alwaysShow, u = Yq(), l = EO(i), f = $O(a), h = Qq();
  if (!u || !h) return null;
  Wr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = Ep({ x: l.scale, y: f.scale }), y = ie(t), m = ie(r), p = n && n.length === 2, _ = pG(d, y, m, p, h, e9.position, l.orientation, f.orientation, e9);
  if (!_) return null;
  var g = cG(_, 2), w = g[0], S = w.x, v = w.y, b = g[1], O = b.x, P = b.y, T = xr(e9, "hidden") ? "url(#".concat(u, ")") : void 0, $ = Wg(Wg({ clipPath: T }, ct(e9, true)), {}, { x1: S, y1: v, x2: O, y2: P });
  return A.createElement(St, { className: mt("recharts-reference-line", s) }, dG(o, $), he.renderCallByParent(e9, Pq({ x1: S, y1: v, x2: O, y2: P })));
}
var jp = function(e9) {
  function t() {
    return tG(this, t), nG(this, t, arguments);
  }
  return oG(t, e9), rG(t, [{ key: "render", value: function() {
    return A.createElement(yG, this.props);
  } }]);
}(A.Component);
Cp(jp, "displayName", "ReferenceLine");
Cp(jp, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Ch() {
  return Ch = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Ch.apply(this, arguments);
}
function ea(e9) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e9);
}
function qg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qg(Object(r), true).forEach(function(n) {
      ul(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function mG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vG(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, CO(n.key), n);
  }
}
function gG(e9, t, r) {
  return t && vG(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function bG(e9, t, r) {
  return t = fu(t), _G(e9, NO() ? Reflect.construct(t, r || [], fu(e9).constructor) : t.apply(e9, r));
}
function _G(e9, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wG(e9);
}
function wG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function NO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (NO = function() {
    return !!e9;
  })();
}
function fu(e9) {
  return fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fu(e9);
}
function SG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && jh(e9, t);
}
function jh(e9, t) {
  return jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jh(e9, t);
}
function ul(e9, t, r) {
  return t = CO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function CO(e9) {
  var t = OG(e9, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function OG(e9, t) {
  if (ea(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var xG = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Ep({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return xr(t, "discard") && !o.isInRange(s) ? null : s;
}, ll = function(e9) {
  function t() {
    return mG(this, t), bG(this, t, arguments);
  }
  return SG(t, e9), gG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = ie(i), l = ie(a);
    if (Wr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
    var f = xG(this.props);
    if (!f) return null;
    var h = f.x, d = f.y, y = this.props, m = y.shape, p = y.className, _ = xr(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, g = Gg(Gg({ clipPath: _ }, ct(this.props, true)), {}, { cx: h, cy: d });
    return A.createElement(St, { className: mt("recharts-reference-dot", p) }, t.renderDot(m, g), he.renderCallByParent(this.props, { x: h - o, y: d - o, width: 2 * o, height: 2 * o }));
  } }]);
}(A.Component);
ul(ll, "displayName", "ReferenceDot");
ul(ll, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
ul(ll, "renderDot", function(e9, t) {
  var r;
  return A.isValidElement(e9) ? r = A.cloneElement(e9, t) : lt(e9) ? r = e9(t) : r = A.createElement(al, Ch({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Bh() {
  return Bh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Bh.apply(this, arguments);
}
function ra(e9) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e9);
}
function Hg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), true).forEach(function(n) {
      fl(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function AG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function PG(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, BO(n.key), n);
  }
}
function TG(e9, t, r) {
  return t && PG(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function IG(e9, t, r) {
  return t = hu(t), EG(e9, jO() ? Reflect.construct(t, r || [], hu(e9).constructor) : t.apply(e9, r));
}
function EG(e9, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $G(e9);
}
function $G(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function jO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jO = function() {
    return !!e9;
  })();
}
function hu(e9) {
  return hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hu(e9);
}
function MG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && kh(e9, t);
}
function kh(e9, t) {
  return kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kh(e9, t);
}
function fl(e9, t, r) {
  return t = BO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function BO(e9) {
  var t = DG(e9, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function DG(e9, t) {
  if (ra(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var NG = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var h = Ep({ x: l.scale, y: f.scale }), d = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(c, { position: "start" }) : h.y.rangeMin }, y = { x: r ? h.x.apply(s, { position: "end" }) : h.x.rangeMax, y: i ? h.y.apply(u, { position: "end" }) : h.y.rangeMax };
  return xr(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : SO(d, y);
}, hl = function(e9) {
  function t() {
    return AG(this, t), IG(this, t, arguments);
  }
  return MG(t, e9), TG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
    Wr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var f = ie(i), h = ie(a), d = ie(o), y = ie(s), m = this.props.shape;
    if (!f && !h && !d && !y && !m) return null;
    var p = NG(f, h, d, y, this.props);
    if (!p && !m) return null;
    var _ = xr(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
    return A.createElement(St, { className: mt("recharts-reference-area", c) }, t.renderRect(m, Kg(Kg({ clipPath: _ }, ct(this.props, true)), p)), he.renderCallByParent(this.props, p));
  } }]);
}(A.Component);
fl(hl, "displayName", "ReferenceArea");
fl(hl, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
fl(hl, "renderRect", function(e9, t) {
  var r;
  return A.isValidElement(e9) ? r = A.cloneElement(e9, t) : lt(e9) ? r = e9(t) : r = A.createElement(Ip, Bh({}, t, { className: "recharts-reference-area-rect" })), r;
});
function kO(e9, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e9;
  for (var n = [], i = 0; i < e9.length; i += t) n.push(e9[i]);
  return n;
}
function CG(e9, t, r) {
  var n = { width: e9.width + t.width, height: e9.height + t.height };
  return Iq(n, r);
}
function jG(e9, t, r) {
  var n = r === "width", i = e9.x, a = e9.y, o = e9.width, s = e9.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function du(e9, t, r, n, i) {
  if (e9 * t < e9 * n || e9 * t > e9 * i) return false;
  var a = r();
  return e9 * (t - e9 * a / 2 - n) >= 0 && e9 * (t + e9 * a / 2 - i) <= 0;
}
function BG(e9, t) {
  return kO(e9, t + 1);
}
function kG(e9, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0) return { v: kO(n, u) };
    var m = c, p, _ = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, g = y.coordinate, w = c === 0 || du(e9, g, _, l, s);
    w || (c = 0, l = o, u += 1), w && (l = g + e9 * (_() / 2 + i), c += u);
  }, h; u <= a.length; ) if (h = f(), h) return h.v;
  return [];
}
function qo(e9) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e9);
}
function Yg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fe(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), true).forEach(function(n) {
      RG(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function RG(e9, t, r) {
  return t = LG(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function LG(e9) {
  var t = FG(e9, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function FG(e9, t) {
  if (qo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function UG(e9, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(h) {
    var d = a[h], y, m = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var p = e9 * (d.coordinate + e9 * m() / 2 - c);
      a[h] = d = fe(fe({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e9 : d.coordinate });
    } else a[h] = d = fe(fe({}, d), {}, { tickCoord: d.coordinate });
    var _ = du(e9, d.tickCoord, m, s, c);
    _ && (c = d.tickCoord - e9 * (m() / 2 + i), a[h] = fe(fe({}, d), {}, { isShow: true }));
  }, l = o - 1; l >= 0; l--) u(l);
  return a;
}
function zG(e9, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), h = e9 * (l.coordinate + e9 * f / 2 - u);
    o[s - 1] = l = fe(fe({}, l), {}, { tickCoord: h > 0 ? l.coordinate - h * e9 : l.coordinate });
    var d = du(e9, l.tickCoord, function() {
      return f;
    }, c, u);
    d && (u = l.tickCoord - e9 * (f / 2 + i), o[s - 1] = fe(fe({}, l), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, m = function(g) {
    var w = o[g], S, v = function() {
      return S === void 0 && (S = r(w, g)), S;
    };
    if (g === 0) {
      var b = e9 * (w.coordinate - e9 * v() / 2 - c);
      o[g] = w = fe(fe({}, w), {}, { tickCoord: b < 0 ? w.coordinate - b * e9 : w.coordinate });
    } else o[g] = w = fe(fe({}, w), {}, { tickCoord: w.coordinate });
    var O = du(e9, w.tickCoord, v, c, u);
    O && (c = w.tickCoord + e9 * (v() / 2 + i), o[g] = fe(fe({}, w), {}, { isShow: true }));
  }, p = 0; p < y; p++) m(p);
  return o;
}
function Bp(e9, t, r) {
  var n = e9.tick, i = e9.ticks, a = e9.viewBox, o = e9.minTickGap, s = e9.orientation, c = e9.interval, u = e9.tickFormatter, l = e9.unit, f = e9.angle;
  if (!i || !i.length || !n) return [];
  if (L(c) || On.isSsr) return BG(i, typeof c == "number" && L(c) ? c : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = l && d === "width" ? Qa(l, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = function(w, S) {
    var v = lt(u) ? u(w.value, S) : w.value;
    return d === "width" ? CG(Qa(v, { fontSize: t, letterSpacing: r }), y, f) : Qa(v, { fontSize: t, letterSpacing: r })[d];
  }, p = i.length >= 2 ? sr(i[1].coordinate - i[0].coordinate) : 1, _ = jG(a, p, d);
  return c === "equidistantPreserveStart" ? kG(p, _, m, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = zG(p, _, m, i, o, c === "preserveStartEnd") : h = UG(p, _, m, i, o), h.filter(function(g) {
    return g.isShow;
  }));
}
var WG = ["viewBox"], VG = ["viewBox"], qG = ["ticks"];
function na(e9) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e9);
}
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Ai.apply(this, arguments);
}
function Xg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function te(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xg(Object(r), true).forEach(function(n) {
      kp(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function rf(e9, t) {
  if (e9 == null) return {};
  var r = GG(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function GG(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function HG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Jg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, LO(n.key), n);
  }
}
function KG(e9, t, r) {
  return t && Jg(e9.prototype, t), r && Jg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function YG(e9, t, r) {
  return t = pu(t), XG(e9, RO() ? Reflect.construct(t, r || [], pu(e9).constructor) : t.apply(e9, r));
}
function XG(e9, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return JG(e9);
}
function JG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function RO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (RO = function() {
    return !!e9;
  })();
}
function pu(e9) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e9);
}
function QG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Rh(e9, t);
}
function Rh(e9, t) {
  return Rh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rh(e9, t);
}
function kp(e9, t, r) {
  return t = LO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function LO(e9) {
  var t = ZG(e9, "string");
  return na(t) == "symbol" ? t : t + "";
}
function ZG(e9, t) {
  if (na(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Ea = function(e9) {
  function t(r) {
    var n;
    return HG(this, t), n = YG(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return QG(t, e9), KG(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = rf(n, WG), s = this.props, c = s.viewBox, u = rf(s, VG);
    return !Mi(a, c) || !Mi(o, u) || !Mi(i, this.state);
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
    return A.createElement("line", Ai({}, f, { className: mt("recharts-cartesian-axis-line", Ye(l, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, h = s.unit, d = Bp(te(te({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = ct(this.props, false), _ = ct(l, false), g = te(te({}, p), {}, { fill: "none" }, ct(c, false)), w = d.map(function(S, v) {
      var b = o.getTickLineCoord(S), O = b.line, P = b.tick, T = te(te(te(te({ textAnchor: y, verticalAnchor: m }, p), {}, { stroke: "none", fill: u }, _), P), {}, { index: v, payload: S, visibleTicksCount: d.length, tickFormatter: f });
      return A.createElement(St, Ai({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord) }, fo(o.props, S, v)), c && A.createElement("line", Ai({}, g, O, { className: mt("recharts-cartesian-axis-tick-line", Ye(c, "className")) })), l && t.renderTickItem(l, T, "".concat(lt(f) ? f(S.value, v) : S.value).concat(h || "")));
    });
    return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
    if (l) return null;
    var f = this.props, h = f.ticks, d = rf(f, qG), y = h;
    return lt(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || s <= 0 || !y || !y.length ? null : A.createElement(St, { className: mt("recharts-cartesian-axis", u), ref: function(p) {
      n.layerReference = p;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), he.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = mt(i.className, "recharts-cartesian-axis-tick-value");
    return A.isValidElement(n) ? o = A.cloneElement(n, te(te({}, i), {}, { className: s })) : lt(n) ? o = n(te(te({}, i), {}, { className: s })) : o = A.createElement(Cc, Ai({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(B.Component);
kp(Ea, "displayName", "CartesianAxis");
kp(Ea, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var tH = ["x1", "y1", "x2", "y2", "key"], eH = ["offset"];
function Zn(e9) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e9);
}
function Qg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qg(Object(r), true).forEach(function(n) {
      rH(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function rH(e9, t, r) {
  return t = nH(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function nH(e9) {
  var t = iH(e9, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function iH(e9, t) {
  if (Zn(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Ln.apply(this, arguments);
}
function Zg(e9, t) {
  if (e9 == null) return {};
  var r = aH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function aH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var oH = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return A.createElement("rect", { x: i, y: a, ry: c, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function FO(e9, t) {
  var r;
  if (A.isValidElement(e9)) r = A.cloneElement(e9, t);
  else if (lt(e9)) r = e9(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Zg(t, tH), u = ct(c, false);
    u.offset;
    var l = Zg(u, eH);
    r = A.createElement("line", Ln({}, l, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function sH(e9) {
  var t = e9.x, r = e9.width, n = e9.horizontal, i = n === void 0 ? true : n, a = e9.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e9), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return FO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function cH(e9) {
  var t = e9.y, r = e9.height, n = e9.vertical, i = n === void 0 ? true : n, a = e9.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e9), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return FO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function uH(e9) {
  var t = e9.horizontalFill, r = e9.fillOpacity, n = e9.x, i = e9.y, a = e9.width, o = e9.height, s = e9.horizontalPoints, c = e9.horizontal, u = c === void 0 ? true : c;
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
function lH(e9) {
  var t = e9.vertical, r = t === void 0 ? true : t, n = e9.verticalFill, i = e9.fillOpacity, a = e9.x, o = e9.y, s = e9.width, c = e9.height, u = e9.verticalPoints;
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
var fH = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return XS(Bp(de(de(de({}, Ea.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, hH = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return XS(Bp(de(de(de({}, Ea.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, li = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function Lh(e9) {
  var t, r, n, i, a, o, s = Dp(), c = Np(), u = Zq(), l = de(de({}, e9), {}, { stroke: (t = e9.stroke) !== null && t !== void 0 ? t : li.stroke, fill: (r = e9.fill) !== null && r !== void 0 ? r : li.fill, horizontal: (n = e9.horizontal) !== null && n !== void 0 ? n : li.horizontal, horizontalFill: (i = e9.horizontalFill) !== null && i !== void 0 ? i : li.horizontalFill, vertical: (a = e9.vertical) !== null && a !== void 0 ? a : li.vertical, verticalFill: (o = e9.verticalFill) !== null && o !== void 0 ? o : li.verticalFill, x: L(e9.x) ? e9.x : u.left, y: L(e9.y) ? e9.y : u.top, width: L(e9.width) ? e9.width : u.width, height: L(e9.height) ? e9.height : u.height }), f = l.x, h = l.y, d = l.width, y = l.height, m = l.syncWithTicks, p = l.horizontalValues, _ = l.verticalValues, g = Xq(), w = Jq();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(f) || f !== +f || !L(h) || h !== +h) return null;
  var S = l.verticalCoordinatesGenerator || fH, v = l.horizontalCoordinatesGenerator || hH, b = l.horizontalPoints, O = l.verticalPoints;
  if ((!b || !b.length) && lt(v)) {
    var P = p && p.length, T = v({ yAxis: w ? de(de({}, w), {}, { ticks: P ? p : w.ticks }) : void 0, width: s, height: c, offset: u }, P ? true : m);
    Wr(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(T), "]")), Array.isArray(T) && (b = T);
  }
  if ((!O || !O.length) && lt(S)) {
    var $ = _ && _.length, E = S({ xAxis: g ? de(de({}, g), {}, { ticks: $ ? _ : g.ticks }) : void 0, width: s, height: c, offset: u }, $ ? true : m);
    Wr(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(E), "]")), Array.isArray(E) && (O = E);
  }
  return A.createElement("g", { className: "recharts-cartesian-grid" }, A.createElement(oH, { fill: l.fill, fillOpacity: l.fillOpacity, x: l.x, y: l.y, width: l.width, height: l.height, ry: l.ry }), A.createElement(sH, Ln({}, l, { offset: u, horizontalPoints: b, xAxis: g, yAxis: w })), A.createElement(cH, Ln({}, l, { offset: u, verticalPoints: O, xAxis: g, yAxis: w })), A.createElement(uH, Ln({}, l, { horizontalPoints: b })), A.createElement(lH, Ln({}, l, { verticalPoints: O })));
}
Lh.displayName = "CartesianGrid";
var dH = ["type", "layout", "connectNulls", "ref"], pH = ["key"];
function ia(e9) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e9);
}
function tb(e9, t) {
  if (e9 == null) return {};
  var r = yH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function yH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, ro.apply(this, arguments);
}
function eb(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eb(Object(r), true).forEach(function(n) {
      ar(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : eb(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function fi(e9) {
  return bH(e9) || gH(e9) || vH(e9) || mH();
}
function mH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vH(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Fh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fh(e9, t);
  }
}
function gH(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function bH(e9) {
  if (Array.isArray(e9)) return Fh(e9);
}
function Fh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function _H(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rb(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, zO(n.key), n);
  }
}
function wH(e9, t, r) {
  return t && rb(e9.prototype, t), r && rb(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function SH(e9, t, r) {
  return t = yu(t), OH(e9, UO() ? Reflect.construct(t, r || [], yu(e9).constructor) : t.apply(e9, r));
}
function OH(e9, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return xH(e9);
}
function xH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function UO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (UO = function() {
    return !!e9;
  })();
}
function yu(e9) {
  return yu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yu(e9);
}
function AH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Uh(e9, t);
}
function Uh(e9, t) {
  return Uh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Uh(e9, t);
}
function ar(e9, t, r) {
  return t = zO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function zO(e9) {
  var t = PH(e9, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function PH(e9, t) {
  if (ia(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var qn = function(e9) {
  function t() {
    var r;
    _H(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = SH(this, t, [].concat(i)), ar(r, "state", { isAnimationFinished: true, totalLength: 0 }), ar(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ar(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(_, g) {
        return _ + g;
      });
      if (!u) return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, h = s - o, d = [], y = 0, m = 0; y < c.length; m += c[y], ++y) if (m + c[y] > f) {
        d = [].concat(fi(c.slice(0, y)), [f - m]);
        break;
      }
      var p = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(fi(t.repeat(c, l)), fi(d), p).map(function(_) {
        return "".concat(_, "px");
      }).join(", ");
    }), ar(r, "id", ri("recharts-line-")), ar(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ar(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ar(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return AH(t, e9), wH(t, [{ key: "componentDidMount", value: function() {
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
    var a = this.props, o = a.points, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Ta);
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
    return A.createElement(St, ro({ className: "recharts-line-dots", key: "dots" }, y), d);
  } }, { key: "renderCurveStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
    s.ref;
    var f = tb(s, dH), h = De(De(De({}, ct(f, true)), {}, { fill: "none", className: "recharts-line-curve", clipPath: i ? "url(#clipPath-".concat(a, ")") : null, points: n }, o), {}, { type: c, layout: u, connectNulls: l });
    return A.createElement(Vn, ro({}, h, { pathRef: this.pathRef }));
  } }, { key: "renderCurveWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, _ = this.state, g = _.prevPoints, w = _.totalLength;
    return A.createElement(ur, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(S) {
      var v = S.t;
      if (g) {
        var b = g.length / s.length, O = s.map(function(I, j) {
          var N = Math.floor(j * b);
          if (g[N]) {
            var M = g[N], C = Ht(M.x, I.x), k = Ht(M.y, I.y);
            return De(De({}, I), {}, { x: C(v), y: k(v) });
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
    return s && o && o.length && (!u && l > 0 || !Xn(u, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.xAxis, l = i.yAxis, f = i.top, h = i.left, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var _ = this.state.isAnimationFinished, g = s.length === 1, w = mt("recharts-line", c), S = u && u.allowDataOverflow, v = l && l.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = V_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? h : h - d / 2, y: v ? f : f - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: h - C / 2, y: f - C / 2, width: d + C, height: y + C }))) : null, !g && this.renderCurve(b, O), this.renderErrorBar(b, O), (g || o) && this.renderDots(b, M, O), (!m || _) && Or.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }, { key: "repeat", value: function(n, i) {
    for (var a = n.length % 2 !== 0 ? [].concat(fi(n), [0]) : n, o = [], s = 0; s < i; ++s) o = [].concat(fi(o), fi(a));
    return o;
  } }, { key: "renderDotItem", value: function(n, i) {
    var a;
    if (A.isValidElement(n)) a = A.cloneElement(n, i);
    else if (lt(n)) a = n(i);
    else {
      var o = i.key, s = tb(i, pH), c = mt("recharts-line-dot", typeof n != "boolean" ? n.className : "");
      a = A.createElement(al, ro({ key: o }, s, { className: c }));
    }
    return a;
  } }]);
}(B.PureComponent);
ar(qn, "displayName", "Line");
ar(qn, "defaultProps", { xAxisId: 0, yAxisId: 0, connectNulls: false, activeDot: true, dot: true, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !On.isSsr, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: false, label: false });
ar(qn, "getComposedData", function(e9) {
  var t = e9.props, r = e9.xAxis, n = e9.yAxis, i = e9.xAxisTicks, a = e9.yAxisTicks, o = e9.dataKey, s = e9.bandSize, c = e9.displayedData, u = e9.offset, l = t.layout, f = c.map(function(h, d) {
    var y = ae(h, o);
    return l === "horizontal" ? { x: Yi({ axis: r, ticks: i, bandSize: s, entry: h, index: d }), y: st(y) ? null : n.scale(y), value: y, payload: h } : { x: st(y) ? null : r.scale(y), y: Yi({ axis: n, ticks: a, bandSize: s, entry: h, index: d }), value: y, payload: h };
  });
  return De({ points: f, layout: l }, u);
});
var TH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], IH = ["key"], WO;
function aa(e9) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e9);
}
function VO(e9, t) {
  if (e9 == null) return {};
  var r = EH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function EH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Fn.apply(this, arguments);
}
function nb(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function an(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nb(Object(r), true).forEach(function(n) {
      wr(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function $H(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ib(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, GO(n.key), n);
  }
}
function MH(e9, t, r) {
  return t && ib(e9.prototype, t), r && ib(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function DH(e9, t, r) {
  return t = mu(t), NH(e9, qO() ? Reflect.construct(t, r || [], mu(e9).constructor) : t.apply(e9, r));
}
function NH(e9, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return CH(e9);
}
function CH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function qO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qO = function() {
    return !!e9;
  })();
}
function mu(e9) {
  return mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mu(e9);
}
function jH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && zh(e9, t);
}
function zh(e9, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e9, t);
}
function wr(e9, t, r) {
  return t = GO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function GO(e9) {
  var t = BH(e9, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function BH(e9, t) {
  if (aa(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Kr = function(e9) {
  function t() {
    var r;
    $H(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = DH(this, t, [].concat(i)), wr(r, "state", { isAnimationFinished: true }), wr(r, "id", ri("recharts-area-")), wr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), lt(o) && o();
    }), wr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), lt(o) && o();
    }), r;
  }
  return jH(t, e9), MH(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var c = this.props, u = c.dot, l = c.points, f = c.dataKey, h = ct(this.props, false), d = ct(u, true), y = l.map(function(p, _) {
      var g = an(an(an({ key: "dot-".concat(_), r: 3 }, h), d), {}, { index: _, cx: p.x, cy: p.y, dataKey: f, value: p.value, payload: p.payload, points: l });
      return t.renderDotItem(u, g);
    }), m = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, Fn({ className: "recharts-area-dots" }, m), y);
  } }, { key: "renderHorizontalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].x, u = o[o.length - 1].x, l = n * Math.abs(c - u), f = ln(o.map(function(h) {
      return h.y || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(ln(a.map(function(h) {
      return h.y || 0;
    })), f)), L(f) ? A.createElement("rect", { x: c < u ? c : c - l, y: 0, width: l, height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1)) }) : null;
  } }, { key: "renderVerticalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].y, u = o[o.length - 1].y, l = n * Math.abs(c - u), f = ln(o.map(function(h) {
      return h.x || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(ln(a.map(function(h) {
      return h.x || 0;
    })), f)), L(f) ? A.createElement("rect", { x: 0, y: c < u ? c : c - l, width: f + (s ? parseInt("".concat(s), 10) : 1), height: Math.floor(l) }) : null;
  } }, { key: "renderClipRect", value: function(n) {
    var i = this.props.layout;
    return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
  } }, { key: "renderAreaStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.layout, u = s.type, l = s.stroke, f = s.connectNulls, h = s.isRange;
    s.ref;
    var d = VO(s, TH);
    return A.createElement(St, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, A.createElement(Vn, Fn({}, ct(d, true), { points: n, connectNulls: f, type: u, baseLine: i, layout: c, stroke: "none", className: "recharts-area-area" })), l !== "none" && A.createElement(Vn, Fn({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: n })), l !== "none" && h && A.createElement(Vn, Fn({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
    return A.createElement(ur, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(_) {
      var g = _.t;
      if (m) {
        var w = m.length / s.length, S = s.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (m[$]) {
            var E = m[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return an(an({}, P), {}, { x: I(g), y: j(g) });
          }
          return P;
        }), v;
        if (L(c) && typeof c == "number") {
          var b = Ht(p, c);
          v = b(g);
        } else if (st(c) || _a(c)) {
          var O = Ht(p, 0);
          v = O(g);
        } else v = c.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (p[$]) {
            var E = p[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return an(an({}, P), {}, { x: I(g), y: j(g) });
          }
          return P;
        });
        return a.renderAreaStatically(S, v, n, i);
      }
      return A.createElement(St, null, A.createElement("defs", null, A.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(g))), A.createElement(St, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, c, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, c = a.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, h = u.totalLength;
    return c && o && o.length && (!l && h > 0 || !Xn(l, o) || !Xn(f, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.top, l = i.left, f = i.xAxis, h = i.yAxis, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var _ = this.state.isAnimationFinished, g = s.length === 1, w = mt("recharts-area", c), S = f && f.allowDataOverflow, v = h && h.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = V_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? l : l - d / 2, y: v ? u : u - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: l - C / 2, y: u - C / 2, width: d + C, height: y + C }))) : null, g ? null : this.renderArea(b, O), (o || g) && this.renderDots(b, M, O), (!m || _) && Or.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(B.PureComponent);
WO = Kr;
wr(Kr, "displayName", "Area");
wr(Kr, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !On.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
wr(Kr, "getBaseValue", function(e9, t, r, n) {
  var i = e9.layout, a = e9.baseValue, o = t.props.baseValue, s = o ?? a;
  if (L(s) && typeof s == "number") return s;
  var c = i === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
wr(Kr, "getComposedData", function(e9) {
  var t = e9.props, r = e9.item, n = e9.xAxis, i = e9.yAxis, a = e9.xAxisTicks, o = e9.yAxisTicks, s = e9.bandSize, c = e9.dataKey, u = e9.stackedData, l = e9.dataStartIndex, f = e9.displayedData, h = e9.offset, d = t.layout, y = u && u.length, m = WO.getBaseValue(t, r, n, i), p = d === "horizontal", _ = false, g = f.map(function(S, v) {
    var b;
    y ? b = u[l + v] : (b = ae(S, c), Array.isArray(b) ? _ = true : b = [m, b]);
    var O = b[1] == null || y && ae(S, c) == null;
    return p ? { x: Yi({ axis: n, ticks: a, bandSize: s, entry: S, index: v }), y: O ? null : i.scale(b[1]), value: b, payload: S } : { x: O ? null : n.scale(b[1]), y: Yi({ axis: i, ticks: o, bandSize: s, entry: S, index: v }), value: b, payload: S };
  }), w;
  return y || _ ? w = g.map(function(S) {
    var v = Array.isArray(S.value) ? S.value[0] : null;
    return p ? { x: S.x, y: v != null && S.y != null ? i.scale(v) : null } : { x: v != null ? n.scale(v) : null, y: S.y };
  }) : w = p ? i.scale(m) : n.scale(m), an({ points: g, baseLine: w, layout: d, isRange: _ }, h);
});
wr(Kr, "renderDotItem", function(e9, t) {
  var r;
  if (A.isValidElement(e9)) r = A.cloneElement(e9, t);
  else if (lt(e9)) r = e9(t);
  else {
    var n = mt("recharts-area-dot", typeof e9 != "boolean" ? e9.className : ""), i = t.key, a = VO(t, IH);
    r = A.createElement(al, Fn({}, a, { key: i, className: n }));
  }
  return r;
});
function oa(e9) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e9);
}
function kH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function RH(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, YO(n.key), n);
  }
}
function LH(e9, t, r) {
  return t && RH(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function FH(e9, t, r) {
  return t = vu(t), UH(e9, HO() ? Reflect.construct(t, r || [], vu(e9).constructor) : t.apply(e9, r));
}
function UH(e9, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return zH(e9);
}
function zH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function HO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HO = function() {
    return !!e9;
  })();
}
function vu(e9) {
  return vu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vu(e9);
}
function WH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Wh(e9, t);
}
function Wh(e9, t) {
  return Wh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wh(e9, t);
}
function KO(e9, t, r) {
  return t = YO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function YO(e9) {
  var t = VH(e9, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function VH(e9, t) {
  if (oa(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var dl = function(e9) {
  function t() {
    return kH(this, t), FH(this, t, arguments);
  }
  return WH(t, e9), LH(t, [{ key: "render", value: function() {
    return null;
  } }]);
}(B.Component);
KO(dl, "displayName", "ZAxis");
KO(dl, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" });
var qH = ["option", "isActive"];
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, no.apply(this, arguments);
}
function GH(e9, t) {
  if (e9 == null) return {};
  var r = HH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function HH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function KH(e9) {
  var t = e9.option, r = e9.isActive, n = GH(e9, qH);
  return typeof t == "string" ? B.createElement(Ih, no({ option: B.createElement(Gu, no({ type: t }, n)), isActive: r, shapeType: "symbols" }, n)) : B.createElement(Ih, no({ option: t, isActive: r, shapeType: "symbols" }, n));
}
function sa(e9) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e9);
}
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, io.apply(this, arguments);
}
function ab(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ab(Object(r), true).forEach(function(n) {
      hn(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function YH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ob(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, JO(n.key), n);
  }
}
function XH(e9, t, r) {
  return t && ob(e9.prototype, t), r && ob(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function JH(e9, t, r) {
  return t = gu(t), QH(e9, XO() ? Reflect.construct(t, r || [], gu(e9).constructor) : t.apply(e9, r));
}
function QH(e9, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ZH(e9);
}
function ZH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function XO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XO = function() {
    return !!e9;
  })();
}
function gu(e9) {
  return gu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gu(e9);
}
function tK(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Vh(e9, t);
}
function Vh(e9, t) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vh(e9, t);
}
function hn(e9, t, r) {
  return t = JO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function JO(e9) {
  var t = eK(e9, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function eK(e9, t) {
  if (sa(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var pl = function(e9) {
  function t() {
    var r;
    YH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = JH(this, t, [].concat(i)), hn(r, "state", { isAnimationFinished: false }), hn(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true });
    }), hn(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false });
    }), hn(r, "id", ri("recharts-scatter-")), r;
  }
  return tK(t, e9), XH(t, [{ key: "renderSymbolsStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.activeShape, c = a.activeIndex, u = ct(this.props, false);
    return n.map(function(l, f) {
      var h = c === f, d = h ? s : o, y = We(We({}, u), l);
      return A.createElement(St, io({ className: "recharts-scatter-symbol", key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f) }, fo(i.props, l, f), { role: "img" }), A.createElement(KH, io({ option: d, isActive: h, key: "symbol-".concat(f) }, y)));
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
    return a && i && i.length && (!o || !Xn(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
  } }, { key: "renderErrorBar", value: function() {
    var n = this.props.isAnimationActive;
    if (n && !this.state.isAnimationFinished) return null;
    var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, c = i.children, u = Te(c, Ta);
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
      var h = I$(i), d = h.xmin, y = h.xmax, m = h.a, p = h.b, _ = function(S) {
        return m * S + p;
      };
      l = [{ x: d, y: _(d) }, { x: y, y: _(y) }];
    }
    var g = We(We(We({}, c), {}, { fill: "none", stroke: c && c.fill }, u), {}, { points: l });
    return A.isValidElement(a) ? f = A.cloneElement(a, g) : lt(a) ? f = a(g) : f = A.createElement(Vn, io({}, g, { type: s })), A.createElement(St, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, f);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, h = n.width, d = n.height, y = n.id, m = n.isAnimationActive;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, _ = mt("recharts-scatter", s), g = c && c.allowDataOverflow, w = u && u.allowDataOverflow, S = g || w, v = st(y) ? this.id : y;
    return A.createElement(St, { className: _, clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, g || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: g ? l : l - h / 2, y: w ? f : f - d / 2, width: g ? h : h * 2, height: w ? d : d * 2 }))) : null, o && this.renderLine(), this.renderErrorBar(), A.createElement(St, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!m || p) && Or.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }]);
}(B.PureComponent);
hn(pl, "displayName", "Scatter");
hn(pl, "defaultProps", { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: false, isAnimationActive: !On.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" });
hn(pl, "getComposedData", function(e9) {
  var t = e9.xAxis, r = e9.yAxis, n = e9.zAxis, i = e9.item, a = e9.displayedData, o = e9.xAxisTicks, s = e9.yAxisTicks, c = e9.offset, u = i.props.tooltipType, l = Te(i.props.children, rp), f = st(t.dataKey) ? i.props.dataKey : t.dataKey, h = st(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : dl.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = r.scale.bandwidth ? r.scale.bandwidth() : 0, g = a.map(function(w, S) {
    var v = ae(w, f), b = ae(w, h), O = !st(d) && ae(w, d) || "-", P = [{ name: st(t.dataKey) ? i.props.name : t.name || t.dataKey, unit: t.unit || "", value: v, payload: w, dataKey: f, type: u }, { name: st(r.dataKey) ? i.props.name : r.name || r.dataKey, unit: r.unit || "", value: b, payload: w, dataKey: h, type: u }];
    O !== "-" && P.push({ name: n.name || n.dataKey, unit: n.unit || "", value: O, payload: w, dataKey: d, type: u });
    var T = Yi({ axis: t, ticks: o, bandSize: p, entry: w, index: S, dataKey: f }), $ = Yi({ axis: r, ticks: s, bandSize: _, entry: w, index: S, dataKey: h }), E = O !== "-" ? n.scale(O) : m, I = Math.sqrt(Math.max(E, 0) / Math.PI);
    return We(We({}, w), {}, { cx: T, cy: $, x: T - I, y: $ - I, xAxis: t, yAxis: r, zAxis: n, width: 2 * I, height: 2 * I, size: E, node: { x: v, y: b, z: O }, tooltipPayload: P, tooltipPosition: { x: T, y: $ }, payload: w }, l && l[S] && l[S].props);
  });
  return We({ points: g }, c);
});
function ca(e9) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e9);
}
function rK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function nK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, t1(n.key), n);
  }
}
function iK(e9, t, r) {
  return t && nK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function aK(e9, t, r) {
  return t = bu(t), oK(e9, QO() ? Reflect.construct(t, r || [], bu(e9).constructor) : t.apply(e9, r));
}
function oK(e9, t) {
  if (t && (ca(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return sK(e9);
}
function sK(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function QO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QO = function() {
    return !!e9;
  })();
}
function bu(e9) {
  return bu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bu(e9);
}
function cK(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && qh(e9, t);
}
function qh(e9, t) {
  return qh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qh(e9, t);
}
function ZO(e9, t, r) {
  return t = t1(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function t1(e9) {
  var t = uK(e9, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function uK(e9, t) {
  if (ca(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function Gh() {
  return Gh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Gh.apply(this, arguments);
}
function lK(e9) {
  var t = e9.xAxisId, r = Dp(), n = Np(), i = EO(t);
  return i == null ? null : B.createElement(Ea, Gh({}, i, { className: mt("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Fr(o, true);
  } }));
}
var Go = function(e9) {
  function t() {
    return rK(this, t), aK(this, t, arguments);
  }
  return cK(t, e9), iK(t, [{ key: "render", value: function() {
    return B.createElement(lK, this.props);
  } }]);
}(B.Component);
ZO(Go, "displayName", "XAxis");
ZO(Go, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function ua(e9) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e9);
}
function fK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function hK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, n1(n.key), n);
  }
}
function dK(e9, t, r) {
  return t && hK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function pK(e9, t, r) {
  return t = _u(t), yK(e9, e1() ? Reflect.construct(t, r || [], _u(e9).constructor) : t.apply(e9, r));
}
function yK(e9, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return mK(e9);
}
function mK(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function e1() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (e1 = function() {
    return !!e9;
  })();
}
function _u(e9) {
  return _u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _u(e9);
}
function vK(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Hh(e9, t);
}
function Hh(e9, t) {
  return Hh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hh(e9, t);
}
function r1(e9, t, r) {
  return t = n1(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function n1(e9) {
  var t = gK(e9, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function gK(e9, t) {
  if (ua(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function Kh() {
  return Kh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Kh.apply(this, arguments);
}
var bK = function(t) {
  var r = t.yAxisId, n = Dp(), i = Np(), a = $O(r);
  return a == null ? null : B.createElement(Ea, Kh({}, a, { className: mt("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return Fr(s, true);
  } }));
}, Ci = function(e9) {
  function t() {
    return fK(this, t), pK(this, t, arguments);
  }
  return vK(t, e9), dK(t, [{ key: "render", value: function() {
    return B.createElement(bK, this.props);
  } }]);
}(B.Component);
r1(Ci, "displayName", "YAxis");
r1(Ci, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function sb(e9) {
  return OK(e9) || SK(e9) || wK(e9) || _K();
}
function _K() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wK(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Yh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yh(e9, t);
  }
}
function SK(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function OK(e9) {
  if (Array.isArray(e9)) return Yh(e9);
}
function Yh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var Xh = function(t, r, n, i, a) {
  var o = Te(t, jp), s = Te(t, ll), c = [].concat(sb(o), sb(s)), u = Te(t, hl), l = "".concat(i, "Id"), f = i[0], h = r;
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
}, i1 = { exports: {} };
(function(e9) {
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
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e9.exports = s;
})(i1);
var xK = i1.exports;
const AK = Bt(xK);
var nf = new AK(), af = "recharts.syncMouseEvents";
function Ho(e9) {
  "@babel/helpers - typeof";
  return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ho(e9);
}
function PK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function TK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, a1(n.key), n);
  }
}
function IK(e9, t, r) {
  return t && TK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function of(e9, t, r) {
  return t = a1(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function a1(e9) {
  var t = EK(e9, "string");
  return Ho(t) == "symbol" ? t : t + "";
}
function EK(e9, t) {
  if (Ho(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var $K = function() {
  function e9() {
    PK(this, e9), of(this, "activeIndex", 0), of(this, "coordinateList", []), of(this, "layout", "horizontal");
  }
  return IK(e9, [{ key: "setDetails", value: function(r) {
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
function MK(e9, t, r) {
  if (r === "number" && t === true && Array.isArray(e9)) {
    var n = e9 == null ? void 0 : e9[0], i = e9 == null ? void 0 : e9[1];
    if (n && i && L(n) && L(i)) return true;
  }
  return false;
}
function DK(e9, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e9 === "horizontal" ? t.x - i : r.left + 0.5, y: e9 === "horizontal" ? r.top + 0.5 : t.y - i, width: e9 === "horizontal" ? n : r.width - 1, height: e9 === "horizontal" ? r.height - 1 : n };
}
function o1(e9) {
  var t = e9.cx, r = e9.cy, n = e9.radius, i = e9.startAngle, a = e9.endAngle, o = le(t, r, n, i), s = le(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function NK(e9, t, r) {
  var n, i, a, o;
  if (e9 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e9 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e9 === "centric") {
    var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, h = le(s, c, u, f), d = le(s, c, l, f);
    n = h.x, i = h.y, a = d.x, o = d.y;
  } else return o1(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function Ko(e9) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e9);
}
function cb(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ps(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), true).forEach(function(n) {
      CK(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function CK(e9, t, r) {
  return t = jK(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function jK(e9) {
  var t = BK(e9, "string");
  return Ko(t) == "symbol" ? t : t + "";
}
function BK(e9, t) {
  if (Ko(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function kK(e9) {
  var t, r, n = e9.element, i = e9.tooltipEventType, a = e9.isActive, o = e9.activeCoordinate, s = e9.activePayload, c = e9.offset, u = e9.activeTooltipIndex, l = e9.tooltipAxisBandSize, f = e9.layout, h = e9.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
  var y, m = Vn;
  if (h === "ScatterChart") y = o, m = c5;
  else if (h === "BarChart") y = DK(f, o, c, l), m = Ip;
  else if (f === "radial") {
    var p = o1(o), _ = p.cx, g = p.cy, w = p.radius, S = p.startAngle, v = p.endAngle;
    y = { cx: _, cy: g, startAngle: S, endAngle: v, innerRadius: w, outerRadius: w }, m = eO;
  } else y = { points: NK(f, o, c) }, m = Vn;
  var b = Ps(Ps(Ps(Ps({ stroke: "#ccc", pointerEvents: "none" }, c), y), ct(d, false)), {}, { payload: s, payloadIndex: u, className: mt("recharts-tooltip-cursor", d.className) });
  return B.isValidElement(d) ? B.cloneElement(d, b) : B.createElement(m, b);
}
var RK = ["item"], LK = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function la(e9) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e9);
}
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Pi.apply(this, arguments);
}
function ub(e9, t) {
  return zK(e9) || UK(e9, t) || c1(e9, t) || FK();
}
function FK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UK(e9, t) {
  var r = e9 == null ? null : typeof Symbol < "u" && e9[Symbol.iterator] || e9["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = true, u = false;
    try {
      if (a = (r = r.call(e9)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = true) ;
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
function zK(e9) {
  if (Array.isArray(e9)) return e9;
}
function lb(e9, t) {
  if (e9 == null) return {};
  var r = WK(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function WK(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function VK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, u1(n.key), n);
  }
}
function GK(e9, t, r) {
  return t && qK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function HK(e9, t, r) {
  return t = wu(t), KK(e9, s1() ? Reflect.construct(t, r || [], wu(e9).constructor) : t.apply(e9, r));
}
function KK(e9, t) {
  if (t && (la(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return YK(e9);
}
function YK(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function s1() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (s1 = function() {
    return !!e9;
  })();
}
function wu(e9) {
  return wu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wu(e9);
}
function XK(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Jh(e9, t);
}
function Jh(e9, t) {
  return Jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Jh(e9, t);
}
function fa(e9) {
  return ZK(e9) || QK(e9) || c1(e9) || JK();
}
function JK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c1(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Qh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qh(e9, t);
  }
}
function QK(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function ZK(e9) {
  if (Array.isArray(e9)) return Qh(e9);
}
function Qh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function fb(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fb(Object(r), true).forEach(function(n) {
      J(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function J(e9, t, r) {
  return t = u1(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function u1(e9) {
  var t = tY(e9, "string");
  return la(t) == "symbol" ? t : t + "";
}
function tY(e9, t) {
  if (la(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var eY = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, rY = { width: "100%", height: "100%" }, l1 = { x: 0, y: 0 };
function Ts(e9) {
  return e9;
}
var nY = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, iY = function(t, r, n, i) {
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
  return l1;
}, yl = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(fa(s), fa(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function f1(e9) {
  return e9 === "number" ? [0, "auto"] : void 0;
}
var Zh = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = yl(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = f === void 0 ? s : f;
      h = bc(d, o.dataKey, i);
    } else h = f && f[n] || s[n];
    return h ? [].concat(fa(c), [QS(u, h)]) : c;
  }, []);
}, hb = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = nY(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = F6(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, h = Zh(t, r, l, f), d = iY(n, s, l, a);
    return { activeTooltipIndex: l, activeLabel: f, activePayload: h, activeCoordinate: d };
  }
  return null;
}, aY = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = t.stackOffset, d = YS(l, a);
  return n.reduce(function(y, m) {
    var p, _ = m.type.defaultProps !== void 0 ? D(D({}, m.type.defaultProps), m.props) : m.props, g = _.type, w = _.dataKey, S = _.allowDataOverflow, v = _.allowDuplicatedCategory, b = _.scale, O = _.ticks, P = _.includeHidden, T = _[o];
    if (y[T]) return y;
    var $ = yl(t.data, { graphicalItems: i.filter(function(W) {
      var it, kt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o];
      return kt === T;
    }), dataStartIndex: c, dataEndIndex: u }), E = $.length, I, j, N;
    MK(_.domain, S, g) && (I = hh(_.domain, null, S), d && (g === "number" || b !== "auto") && (N = to($, w, "category")));
    var M = f1(g);
    if (!I || I.length === 0) {
      var C, k = (C = _.domain) !== null && C !== void 0 ? C : M;
      if (w) {
        if (I = to($, w, g), g === "category" && d) {
          var F = T$(I);
          v && F ? (j = I, I = au(0, E)) : v || (I = Wv(k, I, m).reduce(function(W, it) {
            return W.indexOf(it) >= 0 ? W : [].concat(fa(W), [it]);
          }, []));
        } else if (g === "category") v ? I = I.filter(function(W) {
          return W !== "" && !st(W);
        }) : I = Wv(k, I, m).reduce(function(W, it) {
          return W.indexOf(it) >= 0 || it === "" || st(it) ? W : [].concat(fa(W), [it]);
        }, []);
        else if (g === "number") {
          var U = q6($, i.filter(function(W) {
            var it, kt, Yt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o], Me = "hide" in W.props ? W.props.hide : (kt = W.type.defaultProps) === null || kt === void 0 ? void 0 : kt.hide;
            return Yt === T && (P || !Me);
          }), w, a, l);
          U && (I = U);
        }
        d && (g === "number" || b !== "auto") && (N = to($, w, "category"));
      } else d ? I = au(0, E) : s && s[T] && s[T].hasStack && g === "number" ? I = h === "expand" ? [0, 1] : JS(s[T].stackGroups, c, u) : I = KS($, i.filter(function(W) {
        var it = o in W.props ? W.props[o] : W.type.defaultProps[o], kt = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return it === T && (P || !kt);
      }), g, l, true);
      if (g === "number") I = Xh(f, I, T, a, O), k && (I = hh(k, I, S));
      else if (g === "category" && k) {
        var q = k, rt = I.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        rt && (I = q);
      }
    }
    return D(D({}, y), {}, J({}, T, D(D({}, _), {}, { axisType: a, domain: I, categoricalDomain: N, duplicateDomain: j, originalDomain: (p = _.domain) !== null && p !== void 0 ? p : M, isCategorical: d, layout: l })));
  }, {});
}, oY = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = yl(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: u }), d = h.length, y = YS(l, a), m = -1;
  return n.reduce(function(p, _) {
    var g = _.type.defaultProps !== void 0 ? D(D({}, _.type.defaultProps), _.props) : _.props, w = g[o], S = f1("number");
    if (!p[w]) {
      m++;
      var v;
      return y ? v = au(0, d) : s && s[w] && s[w].hasStack ? (v = JS(s[w].stackGroups, c, u), v = Xh(f, v, w, a)) : (v = hh(S, KS(h, n.filter(function(b) {
        var O, P, T = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], $ = "hide" in b.props ? b.props.hide : (P = b.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return T === w && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), v = Xh(f, v, w, a)), D(D({}, p), {}, J({}, w, D(D({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ye(eY, "".concat(a, ".").concat(m % 2), null), domain: v, originalDomain: S, isCategorical: y, layout: l })));
    }
    return p;
  }, {});
}, sY = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), h = Te(l, a), d = {};
  return h && h.length ? d = aY(t, { axes: h, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u }) : o && o.length && (d = oY(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u })), d;
}, cY = function(t) {
  var r = un(t), n = Fr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: tp(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Yc(r, n) };
}, db = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = je(r, Qi), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, uY = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = zr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, pb = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, lY = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, h = n.margin || {}, d = je(f, Qi), y = je(f, dn), m = Object.keys(c).reduce(function(v, b) {
    var O = c[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, J({}, P, v[P] + O.width)) : v;
  }, { left: h.left || 0, right: h.right || 0 }), p = Object.keys(o).reduce(function(v, b) {
    var O = o[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, J({}, P, Ye(v, "".concat(P)) + O.height)) : v;
  }, { top: h.top || 0, bottom: h.bottom || 0 }), _ = D(D({}, p), m), g = _.bottom;
  d && (_.bottom += d.props.height || Qi.defaultProps.height), y && r && (_ = W6(_, i, n, r));
  var w = u - _.left - _.right, S = l - _.top - _.bottom;
  return D(D({ brushBottom: g }, _), {}, { width: Math.max(w, 0), height: Math.max(S, 0) });
}, fY = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, hY = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, h = function(_, g) {
    var w = g.graphicalItems, S = g.stackGroups, v = g.offset, b = g.updateId, O = g.dataStartIndex, P = g.dataEndIndex, T = _.barSize, $ = _.layout, E = _.barGap, I = _.barCategoryGap, j = _.maxBarSize, N = pb($), M = N.numericAxisName, C = N.cateAxisName, k = uY(w), F = [];
    return w.forEach(function(U, q) {
      var rt = yl(_.data, { graphicalItems: [U], dataStartIndex: O, dataEndIndex: P }), W = U.type.defaultProps !== void 0 ? D(D({}, U.type.defaultProps), U.props) : U.props, it = W.dataKey, kt = W.maxBarSize, Yt = W["".concat(M, "Id")], Me = W["".concat(C, "Id")], Tn = {}, we = c.reduce(function(In, En) {
        var ml = g["".concat(En.axisType, "Map")], Rp = W["".concat(En.axisType, "Id")];
        ml && ml[Rp] || En.axisType === "zAxis" || Qn();
        var Lp = ml[Rp];
        return D(D({}, In), {}, J(J({}, En.axisType, Lp), "".concat(En.axisType, "Ticks"), Fr(Lp)));
      }, Tn), z = we[C], ft = we["".concat(C, "Ticks")], ht = S && S[Yt] && S[Yt].hasStack && nz(U, S[Yt].stackGroups), R = zr(U.type).indexOf("Bar") >= 0, Vt = Yc(z, ft), bt = [], Qt = k && U6({ barSize: T, stackGroups: S, totalSize: fY(we, C) });
      if (R) {
        var Zt, Se, en = st(kt) ? j : kt, oi = (Zt = (Se = Yc(z, ft, true)) !== null && Se !== void 0 ? Se : en) !== null && Zt !== void 0 ? Zt : 0;
        bt = z6({ barGap: E, barCategoryGap: I, bandSize: oi !== Vt ? oi : Vt, sizeList: Qt[Me], maxBarSize: en }), oi !== Vt && (bt = bt.map(function(In) {
          return D(D({}, In), {}, { position: D(D({}, In.position), {}, { offset: In.position.offset - oi / 2 }) });
        }));
      }
      var us = U && U.type && U.type.getComposedData;
      us && F.push({ props: D(D({}, us(D(D({}, we), {}, { displayedData: rt, props: _, dataKey: it, item: U, bandSize: Vt, barPosition: bt, offset: v, stackedData: ht, layout: $, dataStartIndex: O, dataEndIndex: P }))), {}, J(J(J({ key: U.key || "item-".concat(q) }, M, we[M]), C, we[C]), "animationId", b)), childIndex: F$(U, _.children), item: U });
    }), F;
  }, d = function(_, g) {
    var w = _.props, S = _.dataStartIndex, v = _.dataEndIndex, b = _.updateId;
    if (!By({ props: w })) return null;
    var O = w.children, P = w.layout, T = w.stackOffset, $ = w.data, E = w.reverseStackOrder, I = pb(P), j = I.numericAxisName, N = I.cateAxisName, M = Te(O, n), C = tz($, M, "".concat(j, "Id"), "".concat(N, "Id"), T, E), k = c.reduce(function(W, it) {
      var kt = "".concat(it.axisType, "Map");
      return D(D({}, W), {}, J({}, kt, sY(w, D(D({}, it), {}, { graphicalItems: M, stackGroups: it.axisType === j && C, dataStartIndex: S, dataEndIndex: v }))));
    }, {}), F = lY(D(D({}, k), {}, { props: w, graphicalItems: M }), g == null ? void 0 : g.legendBBox);
    Object.keys(k).forEach(function(W) {
      k[W] = l(w, k[W], F, W.replace("Map", ""), r);
    });
    var U = k["".concat(N, "Map")], q = cY(U), rt = h(w, D(D({}, k), {}, { dataStartIndex: S, dataEndIndex: v, updateId: b, graphicalItems: M, stackGroups: C, offset: F }));
    return D(D({ formattedGraphicalItems: rt, graphicalItems: M, offset: F, stackGroups: C }, q), k);
  }, y = function(p) {
    function _(g) {
      var w, S, v;
      return VK(this, _), v = HK(this, _, [g]), J(v, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), J(v, "accessibilityManager", new $K()), J(v, "handleLegendBBoxUpdate", function(b) {
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
        var O = L$(b), P = Ye(v.props, "".concat(O));
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
        v.props.syncId !== void 0 && nf.emit(af, v.props.syncId, b, v.eventEmitterSymbol);
      }), J(v, "applySyncEvent", function(b) {
        var O = v.props, P = O.layout, T = O.syncMethod, $ = v.state.updateId, E = b.dataStartIndex, I = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0) v.setState(D({ dataStartIndex: E, dataEndIndex: I }, d({ props: v.props, dataStartIndex: E, dataEndIndex: I, updateId: $ }, v.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var j = b.chartX, N = b.chartY, M = b.activeTooltipIndex, C = v.state, k = C.offset, F = C.tooltipTicks;
          if (!k) return;
          if (typeof T == "function") M = T(F, b);
          else if (T === "value") {
            M = -1;
            for (var U = 0; U < F.length; U++) if (F[U].value === b.activeLabel) {
              M = U;
              break;
            }
          }
          var q = D(D({}, k), {}, { x: k.left, y: k.top }), rt = Math.min(j, q.x + q.width), W = Math.min(N, q.y + q.height), it = F[M] && F[M].value, kt = Zh(v.state, v.props.data, M), Yt = F[M] ? { x: P === "horizontal" ? F[M].coordinate : rt, y: P === "horizontal" ? W : F[M].coordinate } : l1;
          v.setState(D(D({}, b), {}, { activeLabel: it, activeCoordinate: Yt, activePayload: kt, activeTooltipIndex: M }));
        } else v.setState(b);
      }), J(v, "renderCursor", function(b) {
        var O, P = v.state, T = P.isTooltipActive, $ = P.activeCoordinate, E = P.activePayload, I = P.offset, j = P.activeTooltipIndex, N = P.tooltipAxisBandSize, M = v.getTooltipEventType(), C = (O = b.props.active) !== null && O !== void 0 ? O : T, k = v.props.layout, F = b.key || "_recharts-cursor";
        return A.createElement(kK, { key: F, activeCoordinate: $, activePayload: E, activeTooltipIndex: j, chartName: r, element: b, isActive: C, layout: k, offset: I, tooltipAxisBandSize: N, tooltipEventType: M });
      }), J(v, "renderPolarAxis", function(b, O, P) {
        var T = Ye(b, "type.axisType"), $ = Ye(v.state, "".concat(T, "Map")), E = b.type.defaultProps, I = E !== void 0 ? D(D({}, E), b.props) : b.props, j = $ && $[I["".concat(T, "Id")]];
        return B.cloneElement(b, D(D({}, j), {}, { className: mt(T, j.className), key: b.key || "".concat(O, "-").concat(P), ticks: Fr(j, true) }));
      }), J(v, "renderPolarGrid", function(b) {
        var O = b.props, P = O.radialLines, T = O.polarAngles, $ = O.polarRadius, E = v.state, I = E.radiusAxisMap, j = E.angleAxisMap, N = un(I), M = un(j), C = M.cx, k = M.cy, F = M.innerRadius, U = M.outerRadius;
        return B.cloneElement(b, { polarAngles: Array.isArray(T) ? T : Fr(M, true).map(function(q) {
          return q.coordinate;
        }), polarRadius: Array.isArray($) ? $ : Fr(N, true).map(function(q) {
          return q.coordinate;
        }), cx: C, cy: k, innerRadius: F, outerRadius: U, key: b.key || "polar-grid", radialLines: P });
      }), J(v, "renderLegend", function() {
        var b = v.state.formattedGraphicalItems, O = v.props, P = O.children, T = O.width, $ = O.height, E = v.props.margin || {}, I = T - (E.left || 0) - (E.right || 0), j = GS({ children: P, formattedGraphicalItems: b, legendWidth: I, legendContent: u });
        if (!j) return null;
        var N = j.item, M = lb(j, RK);
        return B.cloneElement(N, D(D({}, M), {}, { chartWidth: T, chartHeight: $, margin: E, onBBoxUpdate: v.handleLegendBBoxUpdate }));
      }), J(v, "renderTooltip", function() {
        var b, O = v.props, P = O.children, T = O.accessibilityLayer, $ = je(P, nr);
        if (!$) return null;
        var E = v.state, I = E.isTooltipActive, j = E.activeCoordinate, N = E.activePayload, M = E.activeLabel, C = E.offset, k = (b = $.props.active) !== null && b !== void 0 ? b : I;
        return B.cloneElement($, { viewBox: D(D({}, C), {}, { x: C.left, y: C.top }), active: k, label: M, payload: k ? N : [], coordinate: j, accessibilityLayer: T });
      }), J(v, "renderBrush", function(b) {
        var O = v.props, P = O.margin, T = O.data, $ = v.state, E = $.offset, I = $.dataStartIndex, j = $.dataEndIndex, N = $.updateId;
        return B.cloneElement(b, { key: b.key || "_recharts-brush", onChange: Ss(v.handleBrushChange, b.props.onChange), data: T, x: L(b.props.x) ? b.props.x : E.left, y: L(b.props.y) ? b.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0), width: L(b.props.width) ? b.props.width : E.width, startIndex: I, endIndex: j, updateId: "brush-".concat(N) });
      }), J(v, "renderReferenceElement", function(b, O, P) {
        if (!b) return null;
        var T = v, $ = T.clipPathId, E = v.state, I = E.xAxisMap, j = E.yAxisMap, N = E.offset, M = b.type.defaultProps || {}, C = b.props, k = C.xAxisId, F = k === void 0 ? M.xAxisId : k, U = C.yAxisId, q = U === void 0 ? M.yAxisId : U;
        return B.cloneElement(b, { key: b.key || "".concat(O, "-").concat(P), xAxis: I[F], yAxis: j[q], viewBox: { x: N.left, y: N.top, width: N.width, height: N.height }, clipPathId: $ });
      }), J(v, "renderActivePoints", function(b) {
        var O = b.item, P = b.activePoint, T = b.basePoint, $ = b.childIndex, E = b.isRange, I = [], j = O.props.key, N = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = N.activeDot, C = N.dataKey, k = D(D({ index: $, dataKey: C, cx: P.x, cy: P.y, r: 4, fill: Tp(O.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ct(M, false)), _c(M));
        return I.push(_.renderActiveDot(M, k, "".concat(j, "-activePoint-").concat($))), T ? I.push(_.renderActiveDot(M, D(D({}, k), {}, { cx: T.x, cy: T.y }), "".concat(j, "-basePoint-").concat($))) : E && I.push(null), I;
      }), J(v, "renderGraphicChild", function(b, O, P) {
        var T = v.filterFormatItem(b, O, P);
        if (!T) return null;
        var $ = v.getTooltipEventType(), E = v.state, I = E.isTooltipActive, j = E.tooltipAxis, N = E.activeTooltipIndex, M = E.activeLabel, C = v.props.children, k = je(C, nr), F = T.props, U = F.points, q = F.isRange, rt = F.baseLine, W = T.item.type.defaultProps !== void 0 ? D(D({}, T.item.type.defaultProps), T.item.props) : T.item.props, it = W.activeDot, kt = W.hide, Yt = W.activeBar, Me = W.activeShape, Tn = !!(!kt && I && k && (it || Yt || Me)), we = {};
        $ !== "axis" && k && k.props.trigger === "click" ? we = { onClick: Ss(v.handleItemMouseEnter, b.props.onClick) } : $ !== "axis" && (we = { onMouseLeave: Ss(v.handleItemMouseLeave, b.props.onMouseLeave), onMouseEnter: Ss(v.handleItemMouseEnter, b.props.onMouseEnter) });
        var z = B.cloneElement(b, D(D({}, T.props), we));
        function ft(En) {
          return typeof j.dataKey == "function" ? j.dataKey(En.payload) : null;
        }
        if (Tn) if (N >= 0) {
          var ht, R;
          if (j.dataKey && !j.allowDuplicatedCategory) {
            var Vt = typeof j.dataKey == "function" ? ft : "payload.".concat(j.dataKey.toString());
            ht = bc(U, Vt, M), R = q && rt && bc(rt, Vt, M);
          } else ht = U == null ? void 0 : U[N], R = q && rt && rt[N];
          if (Me || Yt) {
            var bt = b.props.activeIndex !== void 0 ? b.props.activeIndex : N;
            return [B.cloneElement(b, D(D(D({}, T.props), we), {}, { activeIndex: bt })), null, null];
          }
          if (!st(ht)) return [z].concat(fa(v.renderActivePoints({ item: T, activePoint: ht, basePoint: R, childIndex: N, isRange: q })));
        } else {
          var Qt, Zt = (Qt = v.getItemByXY(v.state.activeCoordinate)) !== null && Qt !== void 0 ? Qt : { graphicalItem: z }, Se = Zt.graphicalItem, en = Se.item, oi = en === void 0 ? b : en, us = Se.childIndex, In = D(D(D({}, T.props), we), {}, { activeIndex: us });
          return [B.cloneElement(oi, In), null, null];
        }
        return q ? [z, null, null] : [z, null];
      }), J(v, "renderCustomized", function(b, O, P) {
        return B.cloneElement(b, D(D({ key: "recharts-customized-".concat(P) }, v.props), v.state));
      }), J(v, "renderMap", { CartesianGrid: { handler: Ts, once: true }, ReferenceArea: { handler: v.renderReferenceElement }, ReferenceLine: { handler: Ts }, ReferenceDot: { handler: v.renderReferenceElement }, XAxis: { handler: Ts }, YAxis: { handler: Ts }, Brush: { handler: v.renderBrush, once: true }, Bar: { handler: v.renderGraphicChild }, Line: { handler: v.renderGraphicChild }, Area: { handler: v.renderGraphicChild }, Radar: { handler: v.renderGraphicChild }, RadialBar: { handler: v.renderGraphicChild }, Scatter: { handler: v.renderGraphicChild }, Pie: { handler: v.renderGraphicChild }, Funnel: { handler: v.renderGraphicChild }, Tooltip: { handler: v.renderCursor, once: true }, PolarGrid: { handler: v.renderPolarGrid, once: true }, PolarAngleAxis: { handler: v.renderPolarAxis }, PolarRadiusAxis: { handler: v.renderPolarAxis }, Customized: { handler: v.renderCustomized } }), v.clipPathId = "".concat((w = g.id) !== null && w !== void 0 ? w : ri("recharts"), "-clip"), v.throttleTriggeredAfterMouseMove = Hw(v.triggeredAfterMouseMove, (S = g.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), v.state = {}, v;
    }
    return XK(_, p), GK(_, [{ key: "componentDidMount", value: function() {
      var w, S;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var w = this.props, S = w.children, v = w.data, b = w.height, O = w.layout, P = je(S, nr);
      if (P) {
        var T = P.props.defaultIndex;
        if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
          var $ = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, E = Zh(this.state, v, T, $), I = this.state.tooltipTicks[T].coordinate, j = (this.state.offset.top + b) / 2, N = O === "horizontal", M = N ? { x: I, y: j } : { y: I, x: j }, C = this.state.formattedGraphicalItems.find(function(F) {
            var U = F.item;
            return U.type.name === "Scatter";
          });
          C && (M = D(D({}, M), C.props.points[T].tooltipPosition), E = C.props.points[T].tooltipPayload);
          var k = { activeTooltipIndex: T, isTooltipActive: true, activeLabel: $, activePayload: E, activeCoordinate: M };
          this.setState(k), this.renderCursor(P), this.accessibilityManager.setIndex(T);
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
      Tf([je(w.children, nr)], [je(this.props.children, nr)]) || this.displayDefaultTooltip();
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
      var S = this.container, v = S.getBoundingClientRect(), b = hF(v), O = { chartX: Math.round(w.pageX - b.left), chartY: Math.round(w.pageY - b.top) }, P = v.width / S.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, P);
      if (!T) return null;
      var $ = this.state, E = $.xAxisMap, I = $.yAxisMap, j = this.getTooltipEventType(), N = hb(this.state, this.props.data, this.props.layout, T);
      if (j !== "axis" && E && I) {
        var M = un(E).scale, C = un(I).scale, k = M && M.invert ? M.invert(O.chartX) : null, F = C && C.invert ? C.invert(O.chartY) : null;
        return D(D({}, O), {}, { xValue: k, yValue: F }, N);
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
        var N = un(I);
        return Gv({ x: O, y: P }, N);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var w = this.props.children, S = this.getTooltipEventType(), v = je(w, nr), b = {};
      v && S === "axis" && (v.props.trigger === "click" ? b = { onClick: this.handleClick } : b = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = _c(this.props, this.handleOuterEvent);
      return D(D({}, O), b);
    } }, { key: "addListener", value: function() {
      nf.on(af, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      nf.removeListener(af, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(w, S, v) {
      for (var b = this.state.formattedGraphicalItems, O = 0, P = b.length; O < P; O++) {
        var T = b[O];
        if (T.item === w || T.props.key === w.key || S === zr(T.item.type) && v === T.childIndex) return T;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var w = this.clipPathId, S = this.state.offset, v = S.left, b = S.top, O = S.height, P = S.width;
      return A.createElement("defs", null, A.createElement("clipPath", { id: w }, A.createElement("rect", { x: v, y: b, height: O, width: P })));
    } }, { key: "getXScales", value: function() {
      var w = this.state.xAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = ub(v, 2), O = b[0], P = b[1];
        return D(D({}, S), {}, J({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var w = this.state.yAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = ub(v, 2), O = b[0], P = b[1];
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
        var T = v[O], $ = T.props, E = T.item, I = E.type.defaultProps !== void 0 ? D(D({}, E.type.defaultProps), E.props) : E.props, j = zr(E.type);
        if (j === "Bar") {
          var N = ($.data || []).find(function(F) {
            return QW(w, F);
          });
          if (N) return { graphicalItem: T, payload: N };
        } else if (j === "RadialBar") {
          var M = ($.data || []).find(function(F) {
            return Gv(w, F);
          });
          if (M) return { graphicalItem: T, payload: M };
        } else if (ol(T, b) || sl(T, b) || Uo(T, b)) {
          var C = tV({ graphicalItem: T, activeTooltipItem: b, itemData: I.data }), k = I.activeIndex === void 0 ? C : I.activeIndex;
          return { graphicalItem: D(D({}, T), {}, { childIndex: k }), payload: Uo(T, b) ? I.data[C] : T.props.data[C] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var w = this;
      if (!By(this)) return null;
      var S = this.props, v = S.children, b = S.className, O = S.width, P = S.height, T = S.style, $ = S.compact, E = S.title, I = S.desc, j = lb(S, LK), N = ct(j, false);
      if ($) return A.createElement(Ug, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement(Ef, Pi({}, N, { width: O, height: P, title: E, desc: I }), this.renderClipPath(), Ry(v, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var M, C;
        N.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, N.role = (C = this.props.role) !== null && C !== void 0 ? C : "application", N.onKeyDown = function(F) {
          w.accessibilityManager.keyboardEvent(F);
        }, N.onFocus = function() {
          w.accessibilityManager.focus();
        };
      }
      var k = this.parseEventsOfWrapper();
      return A.createElement(Ug, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement("div", Pi({ className: mt("recharts-wrapper", b), style: D({ position: "relative", cursor: "default", width: O, height: P }, T) }, k, { ref: function(U) {
        w.container = U;
      } }), A.createElement(Ef, Pi({}, N, { width: O, height: P, title: E, desc: I, style: rY }), this.renderClipPath(), Ry(v, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(B.Component);
  J(y, "displayName", r), J(y, "defaultProps", D({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, f)), J(y, "getDerivedStateFromProps", function(p, _) {
    var g = p.dataKey, w = p.data, S = p.children, v = p.width, b = p.height, O = p.layout, P = p.stackOffset, T = p.margin, $ = _.dataStartIndex, E = _.dataEndIndex;
    if (_.updateId === void 0) {
      var I = db(p);
      return D(D(D({}, I), {}, { updateId: 0 }, d(D(D({ props: p }, I), {}, { updateId: 0 }), _)), {}, { prevDataKey: g, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (g !== _.prevDataKey || w !== _.prevData || v !== _.prevWidth || b !== _.prevHeight || O !== _.prevLayout || P !== _.prevStackOffset || !Mi(T, _.prevMargin)) {
      var j = db(p), N = { chartX: _.chartX, chartY: _.chartY, isTooltipActive: _.isTooltipActive }, M = D(D({}, hb(_, w, O)), {}, { updateId: _.updateId + 1 }), C = D(D(D({}, j), N), M);
      return D(D(D({}, C), d(D({ props: p }, C), _)), {}, { prevDataKey: g, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (!Tf(S, _.prevChildren)) {
      var k, F, U, q, rt = je(S, Qi), W = rt && (k = (F = rt.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && k !== void 0 ? k : $, it = rt && (U = (q = rt.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && U !== void 0 ? U : E, kt = W !== $ || it !== E, Yt = !st(w), Me = Yt && !kt ? _.updateId : _.updateId + 1;
      return D(D({ updateId: Me }, d(D(D({ props: p }, _), {}, { updateId: Me, dataStartIndex: W, dataEndIndex: it }), _)), {}, { prevChildren: S, dataStartIndex: W, dataEndIndex: it });
    }
    return null;
  }), J(y, "renderActiveDot", function(p, _, g) {
    var w;
    return B.isValidElement(p) ? w = B.cloneElement(p, _) : lt(p) ? w = p(_) : w = A.createElement(al, _), A.createElement(St, { className: "recharts-active-dot", key: g }, w);
  });
  var m = B.forwardRef(function(_, g) {
    return A.createElement(y, Pi({}, _, { ref: g }));
  });
  return m.displayName = y.displayName, m;
}, yb = hY({ chartName: "ComposedChart", GraphicalChild: [qn, Kr, Ia, pl], axisComponents: [{ axisType: "xAxis", AxisComp: Go }, { axisType: "yAxis", AxisComp: Ci }, { axisType: "zAxis", AxisComp: dl }], formatAxisMap: Aq });
const Gt = { grid: "#d0d7de", axis: "#57606a", legendText: "#1f2328", bandP75: "#dbeafe", bandP75Stroke: "#388bfd", bandP25: "#eff6ff", bandP25Stroke: "#54aeff", medianLine: "#0969da", volumeLine: "#bf8700", tooltip: { background: "#ffffff", border: "#d0d7de", text: "#1f2328" }, colors: ["#0969da", "#8250df", "#1a7f37", "#cf222e", "#bf8700", "#57606a"], otherSeries: "#57606a" }, Ua = { fill: Gt.axis, fontSize: 11 }, mb = { shared: false, contentStyle: { background: Gt.tooltip.background, border: `1px solid ${Gt.tooltip.border}`, borderRadius: "0.35rem", color: Gt.tooltip.text }, labelStyle: { color: Gt.tooltip.text } }, vb = { top: 8, right: 12, left: 4, bottom: 8 }, gb = { verticalAlign: "bottom", align: "center", layout: "horizontal", wrapperStyle: { color: Gt.legendText, width: "100%", left: 0, paddingTop: "10px" } }, dY = ["day", "week", "month", "quarter", "year"], pY = [];
function i7({ mode: e9, methodId: t, methodName: r, topMethods: n = pY, topN: i = 10 }) {
  const [a, o] = B.useState("week"), [s, c] = B.useState([]), [u, l] = B.useState([]), [f, h] = B.useState(false), [d, y] = B.useState(false);
  B.useEffect(() => {
    let g = false;
    async function w() {
      y(true);
      try {
        if (e9 === "single" && t) {
          const S = await RP(t, a);
          g || c(S);
        } else if (e9 === "topN") {
          const S = n.slice(0, i).map((b) => b.method_id), v = await LP(S, a);
          g || l(v);
        }
      } finally {
        g || y(false);
      }
    }
    return w(), () => {
      g = true;
    };
  }, [e9, t, a, i, e9 === "topN" ? n : null]);
  const m = B.useMemo(() => s.map((g) => ({ ...g, period: yn(g.period) })), [s]), p = B.useMemo(() => {
    const g = /* @__PURE__ */ new Map();
    for (const w of u) {
      const S = yn(w.period), v = g.get(S) ?? { period: S };
      v[w.method_name] = w.profit, g.set(S, v);
    }
    return [...g.values()].sort((w, S) => b1(String(w.period), String(S.period)));
  }, [u]), _ = B.useMemo(() => [...new Set(u.map((g) => g.method_name))], [u]);
  return ut.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends", children: [ut.jsxs("div", { className: "osrs-mmg__trends-header", children: [ut.jsx("h3", { children: e9 === "single" ? `Trends \xB7 ${r ?? "Method"}` : "Top methods over time" }), ut.jsxs("div", { className: "osrs-mmg__period-row", children: [dY.map((g) => ut.jsx("button", { type: "button", className: g === a ? "is-active" : "", onClick: () => o(g), children: g }, g)), e9 === "single" ? ut.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [ut.jsx("input", { type: "checkbox", checked: f, onChange: (g) => h(g.target.checked) }), "Item volume"] }) : null] })] }), d ? ut.jsx("p", { className: "osrs-mmg__muted", children: "Loading chart\u2026" }) : null, e9 === "single" && m.length > 0 ? ut.jsx("div", { className: "osrs-mmg__chart", children: ut.jsx(jm, { width: "100%", height: 340, children: ut.jsxs(yb, { data: m, margin: vb, children: [ut.jsx(Lh, { strokeDasharray: "3 3", stroke: Gt.grid }), ut.jsx(Go, { dataKey: "period", tick: Ua, stroke: Gt.axis, ...qp(a) }), ut.jsx(Ci, { yAxisId: "profit", tick: Ua, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), f ? ut.jsx(Ci, { yAxisId: "volume", orientation: "right", tick: Ua, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }) : null, ut.jsx(nr, { formatter: (g) => wy(g), labelFormatter: (g) => Vp(String(g), a), ...mb }), ut.jsx(dn, { ...gb }), ut.jsx(Kr, { yAxisId: "profit", dataKey: "p75", stackId: "band", fill: Gt.bandP75, stroke: Gt.bandP75Stroke, legendType: "line", name: "75th percentile" }), ut.jsx(Kr, { yAxisId: "profit", dataKey: "p25", stackId: "band", fill: Gt.bandP25, stroke: Gt.bandP25Stroke, legendType: "line", name: "25th percentile" }), ut.jsx(qn, { yAxisId: "profit", type: "monotone", dataKey: "median_profit", stroke: Gt.medianLine, name: "Median GP/h" }), f ? ut.jsx(qn, { yAxisId: "volume", type: "monotone", dataKey: "item_volume", stroke: Gt.volumeLine, name: "GE volume" }) : null] }) }) }) : null, e9 === "topN" && p.length > 0 ? ut.jsx("div", { className: "osrs-mmg__chart", children: ut.jsx(jm, { width: "100%", height: 400, children: ut.jsxs(yb, { data: p, margin: vb, children: [ut.jsx(Lh, { strokeDasharray: "3 3", stroke: Gt.grid }), ut.jsx(Go, { dataKey: "period", tick: Ua, stroke: Gt.axis, ...qp(a) }), ut.jsx(Ci, { tick: Ua, stroke: Gt.axis, tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), ut.jsx(nr, { formatter: (g) => wy(g), labelFormatter: (g) => Vp(String(g), a), ...mb }), ut.jsx(dn, { ...gb }), _.map((g, w) => ut.jsx(qn, { type: "monotone", dataKey: g, stroke: Gt.colors[w % Gt.colors.length] }, g))] }) }) }) : null, !d && e9 === "single" && s.length === 0 ? ut.jsx("p", { className: "osrs-mmg__muted", children: "No snapshot history yet for this method." }) : null, !d && e9 === "topN" && p.length === 0 ? ut.jsx("p", { className: "osrs-mmg__muted", children: "Re-rank the table to pick top methods, or wait for more daily snapshots." }) : null] });
}
const a7 = [{ id: "marlin", methodName: "Cuttingraw marlin", methodUrl: "/w/Money_making_guide/Cutting_raw_marlin", defaultKph: 11e3, kphUnitName: "Marlins per hour", assumptionText: "", inputTotalPk: 5015, inputTotalPh: 0, outputTotalPk: 5978, outputTotalPh: 0, inputs: [{ itemName: "Raw marlin", wikiSlug: "Raw_marlin", qtyPerCompletion: 1, gpPerCompletion: 5015 }], outputs: [{ itemName: "Fine fish offcuts", wikiSlug: "Fine_fish_offcuts", qtyPerCompletion: 1, gpPerCompletion: 671 }, { itemName: "Marlin scales", wikiSlug: "Marlin_scales", qtyPerCompletion: 3, gpPerCompletion: 5307 }], skillRequirements: [] }, { id: "tob", methodName: "Completing theTheatre of Blood(trio)", methodUrl: "/w/Money_making_guide/Theatre_of_Blood", defaultKph: 3, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes3kills per hour in trios with 0 deaths. Your actual profits may be higher or lower depending on your actual kc/hour, your group size, the number of deaths per raid and luck.3kills per hour requires minimal downtime, few mistakes and efficient strategies. The supply cost given is the average supply cost for each role (Mage, Melee Freeze, Ranger, Melee).", inputTotalPk: 306831, inputTotalPh: 0, outputTotalPk: 40403529699803e-7, outputTotalPh: 0, inputs: [{ itemName: "Super combat potion(4)", wikiSlug: "Super_combat_potion(4)", qtyPerCompletion: 1.5, gpPerCompletion: 20295 }, { itemName: "Divine super combat potion(4)", wikiSlug: "Divine_super_combat_potion(4)", qtyPerCompletion: 1, gpPerCompletion: 19559 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 0.5, gpPerCompletion: 1256 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 1, gpPerCompletion: 11174 }, { itemName: "Zulrah's scales", wikiSlug: "Zulrah's_scales", qtyPerCompletion: 27, gpPerCompletion: 4779 }, { itemName: "Dragon dart", wikiSlug: "Dragon_dart", qtyPerCompletion: 8, gpPerCompletion: 10904 }, { itemName: "Black chinchompa", wikiSlug: "Black_chinchompa", qtyPerCompletion: 7, gpPerCompletion: 20713 }, { itemName: "Ice Barrage", wikiSlug: "Ice_Barrage", qtyPerCompletion: 6, gpPerCompletion: 8496 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 11478 }, { itemName: "Spellbook Swap", wikiSlug: "Spellbook_Swap", qtyPerCompletion: 6, gpPerCompletion: 3756 }, { itemName: "Vengeance", wikiSlug: "Vengeance", qtyPerCompletion: 15, gpPerCompletion: 17310 }, { itemName: "Scythe of vitur", wikiSlug: "Scythe_of_vitur", qtyPerCompletion: 220, gpPerCompletion: 149193 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 8, gpPerCompletion: 23872 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 2, gpPerCompletion: 4046 }], outputs: [{ itemName: "Scythe of vitur (uncharged)", wikiSlug: "Scythe_of_vitur_(uncharged)", qtyPerCompletion: 0.0019278966647388, gpPerCompletion: 27976156256025e-7 }, { itemName: "Avernic defender hilt", wikiSlug: "Avernic_defender_hilt", qtyPerCompletion: 0.01542317331791, gpPerCompletion: 512047.58048968 }, { itemName: "Ghrazi rapier", wikiSlug: "Ghrazi_rapier", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 114430.00578369 }, { itemName: "Sanguinesti staff (uncharged)", wikiSlug: "Sanguinesti_staff_(uncharged)", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 74450.854058222 }, { itemName: "Justiciar faceguard", wikiSlug: "Justiciar_faceguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 48395.527279737 }, { itemName: "Justiciar chestguard", wikiSlug: "Justiciar_chestguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 44466.400616926 }, { itemName: "Justiciar legguards", wikiSlug: "Justiciar_legguards", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 47547.919799498 }, { itemName: "Runite ore", wikiSlug: "Runite_ore", qtyPerCompletion: 6.3558, gpPerCompletion: 65299.4892 }], skillRequirements: [{ skillKey: "Magic", requirementText: "94+" }, { skillKey: "Ranged", requirementText: "90+" }] }, { id: "smithing", methodName: "Smithing Oathplate armour fromCrushed infernal shaleandOathplate shards", methodUrl: "/w/Money_making_guide/Smithing_oathplate_armour", defaultKph: 4, kphUnitName: "Armour pieces per hour", assumptionText: "The profit rate assumes4pieces of armour made per hour with few mistakes made during the smithing process. The guide automatically picks the highest value piece for display and profit calculations.", inputTotalPk: 87685200, inputTotalPh: 0, outputTotalPk: 88809329, outputTotalPh: 0, inputs: [{ itemName: "Crushed infernal shale", wikiSlug: "Crushed_infernal_shale", qtyPerCompletion: 2520, gpPerCompletion: 806400 }, { itemName: "Oathplate shards", wikiSlug: "Oathplate_shards", qtyPerCompletion: 450, gpPerCompletion: 86878800 }], outputs: [{ itemName: "Oathplate legs", wikiSlug: "Oathplate_legs", qtyPerCompletion: 1, gpPerCompletion: 88809329 }], skillRequirements: [] }, { id: "mokhaiotl", methodName: "Killing TheDoom of Mokhaiotl(Delve 1-16)", methodUrl: "/w/Money_making_guide/Killing_the_Doom_of_Mokhaiotl_(Delve_1-16)", defaultKph: 2.5, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes2.5Delve 1-16 completions per hour, looting at the end of each run. Your completion speed may vary based on your performance, stats and equipment used. Scorching bow users can expect closer to 2 completions per hour. Supply cost assumes the use of aTwistedorScorching bow, the player is on the Arceuus spellbook using thralls until wave 6, constant use ofdeath charge, and using azaryte crossbowspecial attack every wave.", inputTotalPk: 344347, inputTotalPh: 154237, outputTotalPk: 72345276648025e-7, outputTotalPh: 0, inputs: [{ itemName: "Divine ranging potion(4)", wikiSlug: "Divine_ranging_potion(4)", qtyPerCompletion: 3, gpPerCompletion: 19041 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 6, gpPerCompletion: 15072 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 4, gpPerCompletion: 8092 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 5, gpPerCompletion: 55870 }, { itemName: "Saradomin brew(4)", wikiSlug: "Saradomin_brew(4)", qtyPerCompletion: 6, gpPerCompletion: 46536 }, { itemName: "Extended anti-venom+(4)", wikiSlug: "Extended_anti-venom+(4)", qtyPerCompletion: 2.5, gpPerCompletion: 47660 }, { itemName: "Death Charge", wikiSlug: "Death_Charge", qtyPerCompletion: 56, gpPerCompletion: 72464 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 13878 }, { itemName: "Superior Demonbane", wikiSlug: "Superior_Demonbane", qtyPerCompletion: 41, gpPerCompletion: 33538 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 40, gpPerCompletion: 119360 }, { itemName: "Ruby dragon bolts (e)", wikiSlug: "Ruby_dragon_bolts_(e)", qtyPerCompletion: 3.2, gpPerCompletion: 9104 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1, gpPerCompletion: 57969 }], outputs: [{ itemName: "Avernic treads", wikiSlug: "Avernic_treads", qtyPerCompletion: 0.021073503475464, gpPerCompletion: 36718848828421e-7 }, { itemName: "Eye of ayak (uncharged)", wikiSlug: "Eye_of_ayak_(uncharged)", qtyPerCompletion: 0.021573503475464, gpPerCompletion: 11296287039712e-7 }, { itemName: "Mokhaiotl cloth", wikiSlug: "Mokhaiotl_cloth", qtyPerCompletion: 0.021973503475464, gpPerCompletion: 12328797525538e-7 }, { itemName: "Demon tear", wikiSlug: "Demon_tear", qtyPerCompletion: 1479.7349128671, gpPerCompletion: 479434.11176894 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1.560204615624, gpPerCompletion: 88635.224213599 }, { itemName: "Aether catalyst", wikiSlug: "Aether_catalyst", qtyPerCompletion: 227.88871078774, gpPerCompletion: 81584.158462011 }, { itemName: "Dragon med helm", wikiSlug: "Dragon_med_helm", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 44168.58165062 }, { itemName: "Mystic earth staff", wikiSlug: "Mystic_earth_staff", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 18782.296325307 }], skillRequirements: [{ skillKey: "Magic", requirementText: "80+" }, { skillKey: "Ranged", requirementText: "90+" }] }], yY = "osrs-mmg-cache", Yo = "artifacts", h1 = "duckdb";
function d1() {
  return new Promise((e9, t) => {
    const r = indexedDB.open(yY, 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore(Yo);
    }, r.onsuccess = () => e9(r.result), r.onerror = () => t(r.error ?? new Error("IndexedDB open failed"));
  });
}
async function mY() {
  const e9 = await d1();
  return new Promise((t, r) => {
    const i = e9.transaction(Yo, "readonly").objectStore(Yo).get(h1);
    i.onsuccess = () => t(i.result ?? null), i.onerror = () => r(i.error ?? new Error("IndexedDB read failed"));
  });
}
async function vY(e9) {
  const t = await d1();
  return new Promise((r, n) => {
    const i = t.transaction(Yo, "readwrite");
    i.objectStore(Yo).put(e9, h1), i.oncomplete = () => r(), i.onerror = () => n(i.error ?? new Error("IndexedDB write failed"));
  });
}
async function gY(e9) {
  const t = await fetch(e9, { cache: "no-cache" });
  if (!t.ok) throw new Error(`Failed to download DuckDB (${t.status})`);
  return t.arrayBuffer();
}
function o7() {
  const [e9, t] = B.useState({ ready: false, loading: hi() || cf(), error: null, manifest: null, fromCache: false, localMode: hi() }), [r, n] = B.useState(0), i = B.useCallback(() => {
    n((a) => a + 1);
  }, []);
  return B.useEffect(() => {
    if (!hi() && !cf()) {
      t({ ready: false, loading: false, error: null, manifest: null, fromCache: false, localMode: false });
      return;
    }
    let a = false;
    async function o() {
      const u = await fetch(sf, { cache: "no-cache" });
      if (!u.ok) throw new Error(`Failed to load local DuckDB (${u.status}). Run: make import-osrs-db`);
      const l = await u.arrayBuffer(), f = u.headers.get("etag") ?? u.headers.get("last-modified") ?? `${sf}:${l.byteLength}`;
      let h = null;
      await by(l, f), a || t({ ready: true, loading: false, error: null, manifest: h, fromCache: false, localMode: true });
    }
    async function s() {
      const u = await GP(), l = await mY(), f = HP(u, (l == null ? void 0 : l.sha256) ?? null);
      let h, d = false;
      !f && l ? (h = l.bytes, d = true) : (h = await gY(m1(u)), await vY({ sha256: u.artifacts.database.sha256, bytes: h, fetchedAt: (/* @__PURE__ */ new Date()).toISOString() })), await by(h, u.artifacts.database.sha256), a || t({ ready: true, loading: false, error: null, manifest: u, fromCache: d, localMode: false });
    }
    async function c() {
      t((u) => ({ ...u, loading: true, error: null }));
      try {
        hi() ? await o() : await s();
      } catch (u) {
        a || t({ ready: false, loading: false, error: u instanceof Error ? u.message : String(u), manifest: null, fromCache: false, localMode: hi() });
      }
    }
    return c(), () => {
      a = true;
    };
  }, [r]), { ...e9, reload: i };
}
export {
  qP as $,
  VY as A,
  RY as B,
  LY as C,
  e7 as D,
  b1 as E,
  yb as F,
  vb as G,
  Lh as H,
  Gt as I,
  Ua as J,
  qp as K,
  ZY as L,
  xf as M,
  mb as N,
  r7 as O,
  dn as P,
  gb as Q,
  jm as R,
  a7 as S,
  nr as T,
  qn as U,
  jY as V,
  Vp as W,
  Go as X,
  Ci as Y,
  CY as Z,
  GY as _,
  YY as a,
  HY as a0,
  t7 as a1,
  JY as b,
  QY as c,
  OY as d,
  KY as e,
  DY as f,
  rs as g,
  NY as h,
  XY as i,
  kY as j,
  BY as k,
  UY as l,
  AY as m,
  n7 as n,
  wy as o,
  Up as p,
  i7 as q,
  xY as r,
  v1 as s,
  FY as t,
  o7 as u,
  FP as v,
  qY as w,
  UP as x,
  zY as y,
  WY as z
};
