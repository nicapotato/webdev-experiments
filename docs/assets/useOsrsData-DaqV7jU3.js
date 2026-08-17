import { j as H, c as os, g as Bt, r as B, R as A } from "./index-C6AelPZl.js";
import { R as r1, s as n1, t as As } from "./skillIconUrl-K4gzJBB6.js";
import { c as mt } from "./clsx-B-dksMZM.js";
import { _ as br, a as yt, b as Ps, c as Fn, d as st } from "./tslib.es6-Xujj8YQZ.js";
const of = "", Jh = "https://prod-public-mindtricks-data.s3.eu-west-2.amazonaws.com/prod/client/osrs-mmg".replace(/\/$/, "") ?? "", Bp = `${Jh}/manifest.json`, Rp = "osrs-mmg.duckdb";
function i1(e9) {
  return `${Jh}/${e9.artifacts.database.url}`;
}
function $n() {
  return of.length > 0;
}
function Ts() {
  return Jh.length > 0;
}
function s7() {
  return $n() || Ts();
}
const kp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ml = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Qh(e9) {
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
function Vr(e9) {
  const t = Qh(e9);
  return t ? t.toISOString().slice(0, 10) : String(e9);
}
function Lp(e9) {
  return String(e9).slice(-2);
}
function a1(e9, t) {
  const r = Qh(e9);
  if (!r) return String(e9);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
    case "week":
      return `${n}-${kp[i]}`;
    case "month":
      return `${kp[i]} '${Lp(a)}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} '${Lp(a)}`;
    case "year":
      return String(a);
  }
}
function hb(e9, t) {
  const r = Qh(e9);
  if (!r) return String(e9);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
      return `${n} ${ml[i]} ${a}`;
    case "week":
      return `Week of ${n} ${ml[i]} ${a}`;
    case "month":
      return `${ml[i]} ${a}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} ${a}`;
    case "year":
      return String(a);
  }
}
function Fp(e9) {
  return { type: "category", scale: "point", tickFormatter: (t) => a1(t, e9), minTickGap: 56, interval: "preserveStartEnd", tickMargin: 10 };
}
function o1(e9, t) {
  return Vr(e9).localeCompare(Vr(t));
}
const s1 = new TextDecoder("utf-8"), sf = (e9) => s1.decode(e9), c1 = new TextEncoder(), Zh = (e9) => c1.encode(e9), u1 = (e9) => typeof e9 == "number", db = (e9) => typeof e9 == "boolean", re = (e9) => typeof e9 == "function", Ie = (e9) => e9 != null && Object(e9) === e9, qn = (e9) => Ie(e9) && re(e9.then), Ko = (e9) => Ie(e9) && re(e9[Symbol.iterator]), fa = (e9) => Ie(e9) && re(e9[Symbol.asyncIterator]), cf = (e9) => Ie(e9) && Ie(e9.schema), pb = (e9) => Ie(e9) && "done" in e9 && "value" in e9, yb = (e9) => Ie(e9) && re(e9.stat) && u1(e9.fd), mb = (e9) => Ie(e9) && td(e9.body), wu = (e9) => "_getDOMStream" in e9 && "_getNodeStream" in e9, l1 = (e9) => Ie(e9) && re(e9.abort) && re(e9.getWriter) && !wu(e9), td = (e9) => Ie(e9) && re(e9.cancel) && re(e9.getReader) && !wu(e9), f1 = (e9) => Ie(e9) && re(e9.end) && re(e9.write) && db(e9.writable) && !wu(e9), vb = (e9) => Ie(e9) && re(e9.read) && re(e9.pipe) && db(e9.readable) && !wu(e9), h1 = (e9) => Ie(e9) && re(e9.clear) && re(e9.bytes) && re(e9.position) && re(e9.setPosition) && re(e9.capacity) && re(e9.getBufferIdentifier) && re(e9.createLong), ed = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function d1(e9) {
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
function Up(e9, t, r = 0, n = t.byteLength) {
  const i = e9.byteLength, a = new Uint8Array(e9.buffer, e9.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
  return a.set(o, r), e9;
}
function Pr(e9, t) {
  const r = d1(e9), n = r.reduce((l, f) => l + f.byteLength, 0);
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
function Et(e9, t) {
  let r = pb(t) ? t.value : t;
  return r instanceof e9 ? e9 === Uint8Array ? new e9(r.buffer, r.byteOffset, r.byteLength) : r : r ? (typeof r == "string" && (r = Zh(r)), r instanceof ArrayBuffer ? new e9(r) : r instanceof ed ? new e9(r) : h1(r) ? Et(e9, r.bytes()) : ArrayBuffer.isView(r) ? r.byteLength <= 0 ? new e9(0) : new e9(r.buffer, r.byteOffset, r.byteLength / e9.BYTES_PER_ELEMENT) : e9.from(r)) : new e9(0);
}
const Ia = (e9) => Et(Int32Array, e9), zp = (e9) => Et(BigInt64Array, e9), vt = (e9) => Et(Uint8Array, e9), uf = (e9) => (e9.next(), e9);
function* p1(e9, t) {
  const r = function* (i) {
    yield i;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof ed ? r(t) : Ko(t) ? t : r(t);
  return yield* uf(function* (i) {
    let a = null;
    do
      a = i.next(yield Et(e9, a));
    while (!a.done);
  }(n[Symbol.iterator]())), new e9();
}
const y1 = (e9) => p1(Uint8Array, e9);
function gb(e9, t) {
  return br(this, arguments, function* () {
    if (qn(t)) return yield yt(yield yt(yield* Ps(Fn(gb(e9, yield yt(t))))));
    const n = function(o) {
      return br(this, arguments, function* () {
        yield yield yt(yield yt(o));
      });
    }, i = function(o) {
      return br(this, arguments, function* () {
        yield yt(yield* Ps(Fn(uf(function* (s) {
          let c = null;
          do
            c = s.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, a = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof ed ? n(t) : Ko(t) ? i(t) : fa(t) ? t : n(t);
    return yield yt(yield* Ps(Fn(uf(function(o) {
      return br(this, arguments, function* () {
        let s = null;
        do
          s = yield yt(o.next(yield yield yt(Et(e9, s))));
        while (!s.done);
      });
    }(a[Symbol.asyncIterator]()))))), yield yt(new e9());
  });
}
const m1 = (e9) => gb(Uint8Array, e9);
function bb(e9, t, r) {
  if (e9 !== 0) {
    r = r.slice(0, t);
    for (let n = -1, i = r.length; ++n < i; ) r[n] += e9;
  }
  return r.subarray(0, t);
}
function v1(e9, t) {
  let r = 0;
  const n = e9.length;
  if (n !== t.length) return false;
  if (n > 0) do
    if (e9[r] !== t[r]) return false;
  while (++r < n);
  return true;
}
const Ve = { fromIterable(e9) {
  return ss(g1(e9));
}, fromAsyncIterable(e9) {
  return ss(b1(e9));
}, fromDOMStream(e9) {
  return ss(_1(e9));
}, fromNodeStream(e9) {
  return ss(S1(e9));
}, toDOMStream(e9, t) {
  throw new Error('"toDOMStream" not available in this environment');
}, toNodeStream(e9, t) {
  throw new Error('"toNodeStream" not available in this environment');
} }, ss = (e9) => (e9.next(), e9);
function* g1(e9) {
  let t, r = false, n = [], i, a, o, s = 0;
  function c() {
    return a === "peek" ? Pr(n, o)[0] : ([i, n, s] = Pr(n, o), i);
  }
  ({ cmd: a, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = y1(e9)[Symbol.iterator]();
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
function b1(e9) {
  return br(this, arguments, function* () {
    let r, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Pr(i, s)[0] : ([a, i, c] = Pr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = m1(e9)[Symbol.asyncIterator]();
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
function _1(e9) {
  return br(this, arguments, function* () {
    let r = false, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Pr(i, s)[0] : ([a, i, c] = Pr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = new w1(e9);
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
class w1 {
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
    return st(this, void 0, void 0, function* () {
      const { reader: r, source: n } = this;
      r && (yield r.cancel(t).catch(() => {
      })), n && n.locked && this.releaseLock();
    });
  }
  read(t) {
    return st(this, void 0, void 0, function* () {
      if (t === 0) return { done: this.reader == null, value: new Uint8Array(0) };
      const r = yield this.reader.read();
      return !r.done && (r.value = vt(r)), r;
    });
  }
}
const vl = (e9, t) => {
  const r = (i) => n([t, i]);
  let n;
  return [t, r, new Promise((i) => (n = i) && e9.once(t, r))];
};
function S1(e9) {
  return br(this, arguments, function* () {
    const r = [];
    let n = "error", i = false, a = null, o, s, c = 0, u = [], l;
    function f() {
      return o === "peek" ? Pr(u, s)[0] : ([l, u, c] = Pr(u, s), l);
    }
    if ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 }, e9.isTTY) return yield yield yt(new Uint8Array(0)), yield yt(null);
    try {
      r[0] = vl(e9, "end"), r[1] = vl(e9, "error");
      do {
        if (r[2] = vl(e9, "readable"), [n, a] = yield yt(Promise.race(r.map((d) => d[2]))), n === "error") break;
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
        for (const [g, _] of d) e9.off(g, _);
        try {
          const g = e9.destroy;
          g && g.call(e9, y), y = void 0;
        } catch (g) {
          y = g || y;
        } finally {
          y != null ? p(y) : m();
        }
      });
    }
  });
}
var Ht;
(function(e9) {
  e9[e9.V1 = 0] = "V1", e9[e9.V2 = 1] = "V2", e9[e9.V3 = 2] = "V3", e9[e9.V4 = 3] = "V4", e9[e9.V5 = 4] = "V5";
})(Ht || (Ht = {}));
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
var Z;
(function(e9) {
  e9[e9.SECOND = 0] = "SECOND", e9[e9.MILLISECOND = 1] = "MILLISECOND", e9[e9.MICROSECOND = 2] = "MICROSECOND", e9[e9.NANOSECOND = 3] = "NANOSECOND";
})(Z || (Z = {}));
var Tr;
(function(e9) {
  e9[e9.YEAR_MONTH = 0] = "YEAR_MONTH", e9[e9.DAY_TIME = 1] = "DAY_TIME", e9[e9.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Tr || (Tr = {}));
const gl = 2, mr = 4, Br = 4, Pt = 4, on = new Int32Array(2), Wp = new Float32Array(on.buffer), Vp = new Float64Array(on.buffer), cs = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var lf;
(function(e9) {
  e9[e9.UTF8_BYTES = 1] = "UTF8_BYTES", e9[e9.UTF16_STRING = 2] = "UTF16_STRING";
})(lf || (lf = {}));
let Ni = class _b {
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  static allocate(t) {
    return new _b(new Uint8Array(t));
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
    return on[0] = this.readInt32(t), Wp[0];
  }
  readFloat64(t) {
    return on[cs ? 0 : 1] = this.readInt32(t), on[cs ? 1 : 0] = this.readInt32(t + 4), Vp[0];
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
    Wp[0] = r, this.writeInt32(t, on[0]);
  }
  writeFloat64(t, r) {
    Vp[0] = r, this.writeInt32(t, on[cs ? 0 : 1]), this.writeInt32(t + 4, on[cs ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + mr + Br) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let r = 0; r < Br; r++) t += String.fromCharCode(this.readInt8(this.position_ + mr + r));
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
    t += mr;
    const i = this.bytes_.subarray(t, t + n);
    return r === lf.UTF8_BYTES ? i : this.text_decoder_.decode(i);
  }
  __union_with_string(t, r) {
    return typeof t == "string" ? this.__string(r) : this.__union(t, r);
  }
  __indirect(t) {
    return t + this.readInt32(t);
  }
  __vector(t) {
    return t + this.readInt32(t) + mr;
  }
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != Br) throw new Error("FlatBuffers: file identifier must be length " + Br);
    for (let r = 0; r < Br; r++) if (t.charCodeAt(r) != this.readInt8(this.position() + mr + r)) return false;
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
}, wb = class Sb {
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false, this.string_maps = null, this.text_encoder = new TextEncoder();
    let r;
    t ? r = t : r = 1024, this.bb = Ni.allocate(r), this.space = r;
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
      this.bb = Sb.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
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
    const n = r << 1, i = Ni.allocate(n);
    return i.setPosition(n - r), i.bytes().set(t.bytes(), n - r), i;
  }
  addOffset(t) {
    this.prep(mr, 0), this.writeInt32(this.offset() - t + mr);
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
    const a = (n + i) * gl;
    this.addInt16(a);
    let o = 0;
    const s = this.space;
    t: for (r = 0; r < this.vtables.length; r++) {
      const c = this.bb.capacity() - this.vtables[r];
      if (a == this.bb.readInt16(c)) {
        for (let u = gl; u < a; u += gl) if (this.bb.readInt16(s + u) != this.bb.readInt16(c + u)) continue t;
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
      if (this.prep(this.minalign, mr + Br + i), a.length != Br) throw new TypeError("FlatBuffers: file identifier must be length " + Br);
      for (let o = Br - 1; o >= 0; o--) this.writeInt8(a.charCodeAt(o));
    }
    this.prep(this.minalign, mr + i), this.addOffset(t), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  finishSizePrefixed(t, r) {
    this.finish(t, r, true);
  }
  requiredField(t, r) {
    const n = this.bb.capacity() - t, i = n - this.bb.readInt32(n);
    if (!(r < this.bb.readInt16(i) && this.bb.readInt16(i + r) != 0)) throw new TypeError("FlatBuffers: field " + r + " must be set");
  }
  startVector(t, r, n) {
    this.notNested(), this.vector_num_elems = r, this.prep(mr, t * r), this.prep(n, t * r);
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
class Ob {
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
let xb = class {
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
}, Nr = class ff {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsRecordBatch(t, r) {
    return (r || new ff()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new ff()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  nodes(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new xb()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  buffers(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new Ob()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
}, hi = class hf {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryBatch(t, r) {
    return (r || new hf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new hf()).__init(t.readInt32(t.position()) + t.position(), t);
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
var Ci;
(function(e9) {
  e9[e9.Little = 0] = "Little", e9[e9.Big = 1] = "Big";
})(Ci || (Ci = {}));
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
class Rr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryEncoding(t, r) {
    return (r || new Rr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Rr()).__init(t.readInt32(t.position()) + t.position(), t);
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
let qp = class La {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBinary(t, r) {
    return (r || new La()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new La()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return La.startBinary(t), La.endBinary(t);
  }
}, Gp = class Fa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBool(t, r) {
    return (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return Fa.startBool(t), Fa.endBool(t);
  }
}, Is = class di {
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
}, pi = class nn {
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
}, Es = class yi {
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.MILLISECOND;
  }
  static startDuration(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Z.MILLISECOND);
  }
  static endDuration(t) {
    return t.endObject();
  }
  static createDuration(t, r) {
    return yi.startDuration(t), yi.addUnit(t, r), yi.endDuration(t);
  }
}, $s = class mi {
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
}, Ms = class vi {
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
class vr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFloatingPoint(t, r) {
    return (r || new vr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, r) {
    return t.setPosition(t.position() + Pt), (r || new vr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return vr.startFloatingPoint(t), vr.addPrecision(t, r), vr.endFloatingPoint(t);
  }
}
class gr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsInterval(t, r) {
    return (r || new gr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, r) {
    return t.setPosition(t.position() + Pt), (r || new gr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Tr.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Tr.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, r) {
    return gr.startInterval(t), gr.addUnit(t, r), gr.endInterval(t);
  }
}
let Hp = class Ua {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeBinary(t, r) {
    return (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return Ua.startLargeBinary(t), Ua.endLargeBinary(t);
  }
}, Kp = class za {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeUtf8(t, r) {
    return (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return za.startLargeUtf8(t), za.endLargeUtf8(t);
  }
}, Yp = class Wa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsList(t, r) {
    return (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Wa.startList(t), Wa.endList(t);
  }
}, Ds = class gi {
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
}, Xp = class Va {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsNull(t, r) {
    return (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Va()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return Va.startNull(t), Va.endNull(t);
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Z.MILLISECOND);
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Z.SECOND;
  }
  timezone(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? this.bb.__string(this.bb_pos + r, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Z.SECOND);
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
let Jp = class qa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUtf8(t, r) {
    return (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new qa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return qa.startUtf8(t), qa.endUtf8(t);
  }
};
var Ct;
(function(e9) {
  e9[e9.NONE = 0] = "NONE", e9[e9.Null = 1] = "Null", e9[e9.Int = 2] = "Int", e9[e9.FloatingPoint = 3] = "FloatingPoint", e9[e9.Binary = 4] = "Binary", e9[e9.Utf8 = 5] = "Utf8", e9[e9.Bool = 6] = "Bool", e9[e9.Decimal = 7] = "Decimal", e9[e9.Date = 8] = "Date", e9[e9.Time = 9] = "Time", e9[e9.Timestamp = 10] = "Timestamp", e9[e9.Interval = 11] = "Interval", e9[e9.List = 12] = "List", e9[e9.Struct_ = 13] = "Struct_", e9[e9.Union = 14] = "Union", e9[e9.FixedSizeBinary = 15] = "FixedSizeBinary", e9[e9.FixedSizeList = 16] = "FixedSizeList", e9[e9.Map = 17] = "Map", e9[e9.Duration = 18] = "Duration", e9[e9.LargeBinary = 19] = "LargeBinary", e9[e9.LargeUtf8 = 20] = "LargeUtf8", e9[e9.LargeList = 21] = "LargeList", e9[e9.RunEndEncoded = 22] = "RunEndEncoded";
})(Ct || (Ct = {}));
let ze = class Ns {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsField(t, r) {
    return (r || new Ns()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ns()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return r ? (t || new Rr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  children(t, r) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (r || new Ns()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
}, pr = class Dr {
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Ci.Little;
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
    t.addFieldInt16(0, r, Ci.Little);
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
const O1 = void 0;
function ro(e9) {
  if (e9 === null) return "null";
  if (e9 === O1) return "undefined";
  switch (typeof e9) {
    case "number":
      return `${e9}`;
    case "bigint":
      return `${e9}`;
    case "string":
      return `"${e9}"`;
  }
  return typeof e9[Symbol.toPrimitive] == "function" ? e9[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e9) ? e9 instanceof BigInt64Array || e9 instanceof BigUint64Array ? `[${[...e9].map((t) => ro(t))}]` : `[${e9}]` : ArrayBuffer.isView(e9) ? `[${e9}]` : JSON.stringify(e9, (t, r) => typeof r == "bigint" ? `${r}` : r);
}
function Dt(e9) {
  if (typeof e9 == "bigint" && (e9 < Number.MIN_SAFE_INTEGER || e9 > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${e9} is not safe to convert to a number.`);
  return Number(e9);
}
function Ab(e9, t) {
  return Dt(e9 / t) + Dt(e9 % t) / Dt(t);
}
const x1 = Symbol.for("isArrowBigNum");
function fr(e9, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Et(this.TypedArray, e9), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e9, ...t), this.constructor.prototype);
}
fr.prototype[x1] = true;
fr.prototype.toJSON = function() {
  return `"${io(this)}"`;
};
fr.prototype.valueOf = function(e9) {
  return Pb(this, e9);
};
fr.prototype.toString = function() {
  return io(this);
};
fr.prototype[Symbol.toPrimitive] = function(e9 = "default") {
  switch (e9) {
    case "number":
      return Pb(this);
    case "string":
      return io(this);
    case "default":
      return T1(this);
  }
  return io(this);
};
function Pi(...e9) {
  return fr.apply(this, e9);
}
function Ti(...e9) {
  return fr.apply(this, e9);
}
function no(...e9) {
  return fr.apply(this, e9);
}
Object.setPrototypeOf(Pi.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ti.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(no.prototype, Object.create(Uint32Array.prototype));
Object.assign(Pi.prototype, fr.prototype, { constructor: Pi, signed: true, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ti.prototype, fr.prototype, { constructor: Ti, signed: false, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(no.prototype, fr.prototype, { constructor: no, signed: true, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const A1 = BigInt(4294967296) * BigInt(4294967296), P1 = A1 - BigInt(1);
function Pb(e9, t) {
  const { buffer: r, byteOffset: n, byteLength: i, signed: a } = e9, o = new BigUint64Array(r, n, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (s) {
    for (const l of o) c |= (l ^ P1) * (BigInt(1) << BigInt(64 * u++));
    c *= BigInt(-1), c -= BigInt(1);
  } else for (const l of o) c |= l * (BigInt(1) << BigInt(64 * u++));
  if (typeof t == "number") {
    const l = BigInt(Math.pow(10, t)), f = c / l, h = c % l;
    return Dt(f) + Dt(h) / Dt(l);
  }
  return Dt(c);
}
function io(e9) {
  if (e9.byteLength === 8) return `${new e9.BigIntArray(e9.buffer, e9.byteOffset, 1)[0]}`;
  if (!e9.signed) return bl(e9);
  let t = new Uint16Array(e9.buffer, e9.byteOffset, e9.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0) return bl(e9);
  t = t.slice();
  let n = 1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a], s = ~o + n;
    t[a] = s, n &= o === 0 ? 1 : 0;
  }
  return `-${bl(t)}`;
}
function T1(e9) {
  return e9.byteLength === 8 ? new e9.BigIntArray(e9.buffer, e9.byteOffset, 1)[0] : io(e9);
}
function bl(e9) {
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
class rd {
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
    return t.byteLength === 16 ? new no(t) : new Ti(t);
  }
  static signed(t) {
    return new Pi(t);
  }
  static unsigned(t) {
    return new Ti(t);
  }
  static decimal(t) {
    return new no(t);
  }
  constructor(t, r) {
    return rd.new(t, r);
  }
}
var Tb, Ib, Eb, $b, Mb, Db, Nb, Cb, jb, Bb, Rb, kb, Lb, Fb, Ub, zb, Wb, Vb, qb, Gb, Hb, Kb;
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
Tb = Symbol.toStringTag;
G[Tb] = ((e9) => (e9.children = null, e9.ArrayType = Array, e9.OffsetArrayType = Int32Array, e9[Symbol.toStringTag] = "DataType"))(G.prototype);
class pn extends G {
  constructor() {
    super(x.Null);
  }
  toString() {
    return "Null";
  }
}
Ib = Symbol.toStringTag;
pn[Ib] = ((e9) => e9[Symbol.toStringTag] = "Null")(pn.prototype);
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
Eb = Symbol.toStringTag;
Gn[Eb] = ((e9) => (e9.isSigned = null, e9.bitWidth = null, e9[Symbol.toStringTag] = "Int"))(Gn.prototype);
class ao extends Gn {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(ao.prototype, "ArrayType", { value: Int32Array });
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
$b = Symbol.toStringTag;
Vs[$b] = ((e9) => (e9.precision = null, e9[Symbol.toStringTag] = "Float"))(Vs.prototype);
class qs extends G {
  constructor() {
    super(x.Binary);
  }
  toString() {
    return "Binary";
  }
}
Mb = Symbol.toStringTag;
qs[Mb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Binary"))(qs.prototype);
class Gs extends G {
  constructor() {
    super(x.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Db = Symbol.toStringTag;
Gs[Db] = ((e9) => (e9.ArrayType = Uint8Array, e9.OffsetArrayType = BigInt64Array, e9[Symbol.toStringTag] = "LargeBinary"))(Gs.prototype);
class Hs extends G {
  constructor() {
    super(x.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
Nb = Symbol.toStringTag;
Hs[Nb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Utf8"))(Hs.prototype);
class Ks extends G {
  constructor() {
    super(x.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
Cb = Symbol.toStringTag;
Ks[Cb] = ((e9) => (e9.ArrayType = Uint8Array, e9.OffsetArrayType = BigInt64Array, e9[Symbol.toStringTag] = "LargeUtf8"))(Ks.prototype);
class Ys extends G {
  constructor() {
    super(x.Bool);
  }
  toString() {
    return "Bool";
  }
}
jb = Symbol.toStringTag;
Ys[jb] = ((e9) => (e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "Bool"))(Ys.prototype);
let Xs = class extends G {
  constructor(t, r, n = 128) {
    super(x.Decimal), this.scale = t, this.precision = r, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
Bb = Symbol.toStringTag;
Xs[Bb] = ((e9) => (e9.scale = null, e9.precision = null, e9.ArrayType = Uint32Array, e9[Symbol.toStringTag] = "Decimal"))(Xs.prototype);
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
Rb = Symbol.toStringTag;
Js[Rb] = ((e9) => (e9.unit = null, e9[Symbol.toStringTag] = "Date"))(Js.prototype);
class Qs extends G {
  constructor(t, r) {
    super(x.Time), this.unit = t, this.bitWidth = r;
  }
  toString() {
    return `Time${this.bitWidth}<${Z[this.unit]}>`;
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
kb = Symbol.toStringTag;
Qs[kb] = ((e9) => (e9.unit = null, e9.bitWidth = null, e9[Symbol.toStringTag] = "Time"))(Qs.prototype);
class Zs extends G {
  constructor(t, r) {
    super(x.Timestamp), this.unit = t, this.timezone = r;
  }
  toString() {
    return `Timestamp<${Z[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Lb = Symbol.toStringTag;
Zs[Lb] = ((e9) => (e9.unit = null, e9.timezone = null, e9.ArrayType = BigInt64Array, e9[Symbol.toStringTag] = "Timestamp"))(Zs.prototype);
class tc extends G {
  constructor(t) {
    super(x.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Tr[this.unit]}>`;
  }
}
Fb = Symbol.toStringTag;
tc[Fb] = ((e9) => (e9.unit = null, e9.ArrayType = Int32Array, e9[Symbol.toStringTag] = "Interval"))(tc.prototype);
class ec extends G {
  constructor(t) {
    super(x.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Z[this.unit]}>`;
  }
}
Ub = Symbol.toStringTag;
ec[Ub] = ((e9) => (e9.unit = null, e9.ArrayType = BigInt64Array, e9[Symbol.toStringTag] = "Duration"))(ec.prototype);
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
zb = Symbol.toStringTag;
rc[zb] = ((e9) => (e9.children = null, e9[Symbol.toStringTag] = "List"))(rc.prototype);
class ve extends G {
  constructor(t) {
    super(x.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Wb = Symbol.toStringTag;
ve[Wb] = ((e9) => (e9.children = null, e9[Symbol.toStringTag] = "Struct"))(ve.prototype);
class nc extends G {
  constructor(t, r, n) {
    super(x.Union), this.mode = t, this.children = n, this.typeIds = r = Int32Array.from(r), this.typeIdToChildIndex = r.reduce((i, a, o) => (i[a] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Vb = Symbol.toStringTag;
nc[Vb] = ((e9) => (e9.mode = null, e9.typeIds = null, e9.children = null, e9.typeIdToChildIndex = null, e9.ArrayType = Int8Array, e9[Symbol.toStringTag] = "Union"))(nc.prototype);
class ic extends G {
  constructor(t) {
    super(x.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
qb = Symbol.toStringTag;
ic[qb] = ((e9) => (e9.byteWidth = null, e9.ArrayType = Uint8Array, e9[Symbol.toStringTag] = "FixedSizeBinary"))(ic.prototype);
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
Gb = Symbol.toStringTag;
ac[Gb] = ((e9) => (e9.children = null, e9.listSize = null, e9[Symbol.toStringTag] = "FixedSizeList"))(ac.prototype);
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
Hb = Symbol.toStringTag;
oc[Hb] = ((e9) => (e9.children = null, e9.keysSorted = null, e9[Symbol.toStringTag] = "Map_"))(oc.prototype);
const I1 = /* @__PURE__ */ ((e9) => () => ++e9)(-1);
class ji extends G {
  constructor(t, r, n, i) {
    super(x.Dictionary), this.indices = r, this.dictionary = t, this.isOrdered = i || false, this.id = n == null ? I1() : Dt(n);
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
Kb = Symbol.toStringTag;
ji[Kb] = ((e9) => (e9.id = null, e9.indices = null, e9.isOrdered = null, e9.dictionary = null, e9[Symbol.toStringTag] = "Dictionary"))(ji.prototype);
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
    return E1(this, t, r);
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
function E1(e9, t, r = true) {
  return typeof t == "number" ? bi(e9, t, r) : typeof t == "string" && t in x ? bi(e9, x[t], r) : t && t instanceof G ? bi(e9, Qp(t), r) : (t == null ? void 0 : t.type) && t.type instanceof G ? bi(e9, Qp(t.type), r) : bi(e9, x.NONE, r);
}
function bi(e9, t, r = true) {
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
function Qp(e9) {
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
        case Z.SECOND:
          return x.TimeSecond;
        case Z.MILLISECOND:
          return x.TimeMillisecond;
        case Z.MICROSECOND:
          return x.TimeMicrosecond;
        case Z.NANOSECOND:
          return x.TimeNanosecond;
      }
      return x.Time;
    case x.Timestamp:
      switch (e9.unit) {
        case Z.SECOND:
          return x.TimestampSecond;
        case Z.MILLISECOND:
          return x.TimestampMillisecond;
        case Z.MICROSECOND:
          return x.TimestampMicrosecond;
        case Z.NANOSECOND:
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
        case Tr.DAY_TIME:
          return x.IntervalDayTime;
        case Tr.YEAR_MONTH:
          return x.IntervalYearMonth;
      }
      return x.Interval;
    case x.Duration:
      switch (e9.unit) {
        case Z.SECOND:
          return x.DurationSecond;
        case Z.MILLISECOND:
          return x.DurationMillisecond;
        case Z.MICROSECOND:
          return x.DurationMicrosecond;
        case Z.NANOSECOND:
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
const Yb = new Float64Array(1), si = new Uint32Array(Yb.buffer);
function Xb(e9) {
  const t = (e9 & 31744) >> 10, r = (e9 & 1023) / 1024, n = Math.pow(-1, (e9 & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (r ? Number.NaN : 1 / 0);
    case 0:
      return n * (r ? 6103515625e-14 * r : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + r);
}
function $1(e9) {
  if (e9 !== e9) return 32256;
  Yb[0] = e9;
  const t = (si[1] & 2147483648) >> 16 & 65535;
  let r = si[1] & 2146435072, n = 0;
  return r >= 1089470464 ? si[0] > 0 ? r = 31744 : (r = (r & 2080374784) >> 16, n = (si[1] & 1048575) >> 10) : r <= 1056964608 ? (n = 1048576 + (si[1] & 1048575), n = 1048576 + (n << (r >> 20) - 998) >> 21, r = 0) : (r = r - 1056964608 >> 10, n = (si[1] & 1048575) + 512 >> 10), t | r | n & 65535;
}
class tt extends dt {
}
function it(e9) {
  return (t, r, n) => {
    if (t.setValid(r, n != null)) return e9(t, r, n);
  };
}
const M1 = (e9, t, r) => {
  e9[t] = Math.floor(r / 864e5);
}, Jb = (e9, t, r, n) => {
  if (r + 1 < t.length) {
    const i = Dt(t[r]), a = Dt(t[r + 1]);
    e9.set(n.subarray(0, a - i), i);
  }
}, D1 = ({ offset: e9, values: t }, r, n) => {
  const i = e9 + r;
  n ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, Yr = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, nd = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, Qb = ({ values: e9 }, t, r) => {
  e9[t] = $1(r);
}, N1 = (e9, t, r) => {
  switch (e9.type.precision) {
    case pe.HALF:
      return Qb(e9, t, r);
    case pe.SINGLE:
    case pe.DOUBLE:
      return nd(e9, t, r);
  }
}, Zb = ({ values: e9 }, t, r) => {
  M1(e9, t, r.valueOf());
}, t0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r);
}, C1 = ({ stride: e9, values: t }, r, n) => {
  t.set(n.subarray(0, e9), e9 * r);
}, e0 = ({ values: e9, valueOffsets: t }, r, n) => Jb(e9, t, r, n), r0 = ({ values: e9, valueOffsets: t }, r, n) => Jb(e9, t, r, Zh(n)), j1 = (e9, t, r) => {
  e9.type.unit === Xe.DAY ? Zb(e9, t, r) : t0(e9, t, r);
}, n0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r / 1e3);
}, i0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r);
}, a0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r * 1e3);
}, o0 = ({ values: e9 }, t, r) => {
  e9[t] = BigInt(r * 1e6);
}, B1 = (e9, t, r) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return n0(e9, t, r);
    case Z.MILLISECOND:
      return i0(e9, t, r);
    case Z.MICROSECOND:
      return a0(e9, t, r);
    case Z.NANOSECOND:
      return o0(e9, t, r);
  }
}, s0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, c0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, u0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, l0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, R1 = (e9, t, r) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return s0(e9, t, r);
    case Z.MILLISECOND:
      return c0(e9, t, r);
    case Z.MICROSECOND:
      return u0(e9, t, r);
    case Z.NANOSECOND:
      return l0(e9, t, r);
  }
}, k1 = ({ values: e9, stride: t }, r, n) => {
  e9.set(n.subarray(0, t), t * r);
}, L1 = (e9, t, r) => {
  const n = e9.children[0], i = e9.valueOffsets, a = Je.getVisitFn(n);
  if (Array.isArray(r)) for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r[++o]);
  else for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r.get(++o));
}, F1 = (e9, t, r) => {
  const n = e9.children[0], { valueOffsets: i } = e9, a = Je.getVisitFn(n);
  let { [t]: o, [t + 1]: s } = i;
  const c = r instanceof Map ? r.entries() : Object.entries(r);
  for (const u of c) if (a(n, o, u), ++o >= s) break;
}, U1 = (e9, t) => (r, n, i, a) => n && r(n, e9, t[a]), z1 = (e9, t) => (r, n, i, a) => n && r(n, e9, t.get(a)), W1 = (e9, t) => (r, n, i, a) => n && r(n, e9, t.get(i.name)), V1 = (e9, t) => (r, n, i, a) => n && r(n, e9, t[i.name]), q1 = (e9, t, r) => {
  const n = e9.type.children.map((a) => Je.getVisitFn(a.type)), i = r instanceof Map ? W1(t, r) : r instanceof xt ? z1(t, r) : Array.isArray(r) ? U1(t, r) : V1(t, r);
  e9.type.children.forEach((a, o) => i(n[o], e9.children[o], a, o));
}, G1 = (e9, t, r) => {
  e9.type.mode === ye.Dense ? f0(e9, t, r) : h0(e9, t, r);
}, f0 = (e9, t, r) => {
  const n = e9.type.typeIdToChildIndex[e9.typeIds[t]], i = e9.children[n];
  Je.visit(i, e9.valueOffsets[t], r);
}, h0 = (e9, t, r) => {
  const n = e9.type.typeIdToChildIndex[e9.typeIds[t]], i = e9.children[n];
  Je.visit(i, t, r);
}, H1 = (e9, t, r) => {
  var n;
  (n = e9.dictionary) === null || n === void 0 || n.set(e9.values[t], r);
}, K1 = (e9, t, r) => {
  e9.type.unit === Tr.DAY_TIME ? d0(e9, t, r) : p0(e9, t, r);
}, d0 = ({ values: e9 }, t, r) => {
  e9.set(r.subarray(0, 2), 2 * t);
}, p0 = ({ values: e9 }, t, r) => {
  e9[t] = r[0] * 12 + r[1] % 12;
}, y0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, m0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, v0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, g0 = ({ values: e9 }, t, r) => {
  e9[t] = r;
}, Y1 = (e9, t, r) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return y0(e9, t, r);
    case Z.MILLISECOND:
      return m0(e9, t, r);
    case Z.MICROSECOND:
      return v0(e9, t, r);
    case Z.NANOSECOND:
      return g0(e9, t, r);
  }
}, X1 = (e9, t, r) => {
  const { stride: n } = e9, i = e9.children[0], a = Je.getVisitFn(i);
  if (Array.isArray(r)) for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r[o]);
  else for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r.get(o));
};
tt.prototype.visitBool = it(D1);
tt.prototype.visitInt = it(Yr);
tt.prototype.visitInt8 = it(Yr);
tt.prototype.visitInt16 = it(Yr);
tt.prototype.visitInt32 = it(Yr);
tt.prototype.visitInt64 = it(Yr);
tt.prototype.visitUint8 = it(Yr);
tt.prototype.visitUint16 = it(Yr);
tt.prototype.visitUint32 = it(Yr);
tt.prototype.visitUint64 = it(Yr);
tt.prototype.visitFloat = it(N1);
tt.prototype.visitFloat16 = it(Qb);
tt.prototype.visitFloat32 = it(nd);
tt.prototype.visitFloat64 = it(nd);
tt.prototype.visitUtf8 = it(r0);
tt.prototype.visitLargeUtf8 = it(r0);
tt.prototype.visitBinary = it(e0);
tt.prototype.visitLargeBinary = it(e0);
tt.prototype.visitFixedSizeBinary = it(C1);
tt.prototype.visitDate = it(j1);
tt.prototype.visitDateDay = it(Zb);
tt.prototype.visitDateMillisecond = it(t0);
tt.prototype.visitTimestamp = it(B1);
tt.prototype.visitTimestampSecond = it(n0);
tt.prototype.visitTimestampMillisecond = it(i0);
tt.prototype.visitTimestampMicrosecond = it(a0);
tt.prototype.visitTimestampNanosecond = it(o0);
tt.prototype.visitTime = it(R1);
tt.prototype.visitTimeSecond = it(s0);
tt.prototype.visitTimeMillisecond = it(c0);
tt.prototype.visitTimeMicrosecond = it(u0);
tt.prototype.visitTimeNanosecond = it(l0);
tt.prototype.visitDecimal = it(k1);
tt.prototype.visitList = it(L1);
tt.prototype.visitStruct = it(q1);
tt.prototype.visitUnion = it(G1);
tt.prototype.visitDenseUnion = it(f0);
tt.prototype.visitSparseUnion = it(h0);
tt.prototype.visitDictionary = it(H1);
tt.prototype.visitInterval = it(K1);
tt.prototype.visitIntervalDayTime = it(d0);
tt.prototype.visitIntervalYearMonth = it(p0);
tt.prototype.visitDuration = it(Y1);
tt.prototype.visitDurationSecond = it(y0);
tt.prototype.visitDurationMillisecond = it(m0);
tt.prototype.visitDurationMicrosecond = it(v0);
tt.prototype.visitDurationNanosecond = it(g0);
tt.prototype.visitFixedSizeList = it(X1);
tt.prototype.visitMap = it(F1);
const Je = new tt(), rr = Symbol.for("parent"), Ii = Symbol.for("rowIndex");
class id {
  constructor(t, r) {
    return this[rr] = t, this[Ii] = r, new Proxy(this, new Q1());
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
    return `{${[...this].map(([t, r]) => `${ro(t)}: ${ro(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new J1(this[rr], this[Ii]);
  }
}
class J1 {
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
Object.defineProperties(id.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [rr]: { writable: true, enumerable: false, configurable: false, value: null }, [Ii]: { writable: true, enumerable: false, configurable: false, value: -1 } });
class Q1 {
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
class K extends dt {
}
function et(e9) {
  return (t, r) => t.getValid(r) ? e9(t, r) : null;
}
const Z1 = (e9, t) => 864e5 * e9[t], tx = (e9, t) => null, b0 = (e9, t, r) => {
  if (r + 1 >= t.length) return null;
  const n = Dt(t[r]), i = Dt(t[r + 1]);
  return e9.subarray(n, i);
}, ex = ({ offset: e9, values: t }, r) => {
  const n = e9 + r;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, _0 = ({ values: e9 }, t) => Z1(e9, t), w0 = ({ values: e9 }, t) => Dt(e9[t]), gn = ({ stride: e9, values: t }, r) => t[e9 * r], rx = ({ stride: e9, values: t }, r) => Xb(t[e9 * r]), S0 = ({ values: e9 }, t) => e9[t], nx = ({ stride: e9, values: t }, r) => t.subarray(e9 * r, e9 * (r + 1)), O0 = ({ values: e9, valueOffsets: t }, r) => b0(e9, t, r), x0 = ({ values: e9, valueOffsets: t }, r) => {
  const n = b0(e9, t, r);
  return n !== null ? sf(n) : null;
}, ix = ({ values: e9 }, t) => e9[t], ax = ({ type: e9, values: t }, r) => e9.precision !== pe.HALF ? t[r] : Xb(t[r]), ox = (e9, t) => e9.type.unit === Xe.DAY ? _0(e9, t) : w0(e9, t), A0 = ({ values: e9 }, t) => 1e3 * Dt(e9[t]), P0 = ({ values: e9 }, t) => Dt(e9[t]), T0 = ({ values: e9 }, t) => Ab(e9[t], BigInt(1e3)), I0 = ({ values: e9 }, t) => Ab(e9[t], BigInt(1e6)), sx = (e9, t) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return A0(e9, t);
    case Z.MILLISECOND:
      return P0(e9, t);
    case Z.MICROSECOND:
      return T0(e9, t);
    case Z.NANOSECOND:
      return I0(e9, t);
  }
}, E0 = ({ values: e9 }, t) => e9[t], $0 = ({ values: e9 }, t) => e9[t], M0 = ({ values: e9 }, t) => e9[t], D0 = ({ values: e9 }, t) => e9[t], cx = (e9, t) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return E0(e9, t);
    case Z.MILLISECOND:
      return $0(e9, t);
    case Z.MICROSECOND:
      return M0(e9, t);
    case Z.NANOSECOND:
      return D0(e9, t);
  }
}, ux = ({ values: e9, stride: t }, r) => rd.decimal(e9.subarray(t * r, t * (r + 1))), lx = (e9, t) => {
  const { valueOffsets: r, stride: n, children: i } = e9, { [t * n]: a, [t * n + 1]: o } = r, c = i[0].slice(a, o - a);
  return new xt([c]);
}, fx = (e9, t) => {
  const { valueOffsets: r, children: n } = e9, { [t]: i, [t + 1]: a } = r, o = n[0];
  return new ad(o.slice(i, a - i));
}, hx = (e9, t) => new id(e9, t), dx = (e9, t) => e9.type.mode === ye.Dense ? N0(e9, t) : C0(e9, t), N0 = (e9, t) => {
  const r = e9.type.typeIdToChildIndex[e9.typeIds[t]], n = e9.children[r];
  return Ee.visit(n, e9.valueOffsets[t]);
}, C0 = (e9, t) => {
  const r = e9.type.typeIdToChildIndex[e9.typeIds[t]], n = e9.children[r];
  return Ee.visit(n, t);
}, px = (e9, t) => {
  var r;
  return (r = e9.dictionary) === null || r === void 0 ? void 0 : r.get(e9.values[t]);
}, yx = (e9, t) => e9.type.unit === Tr.DAY_TIME ? j0(e9, t) : B0(e9, t), j0 = ({ values: e9 }, t) => e9.subarray(2 * t, 2 * (t + 1)), B0 = ({ values: e9 }, t) => {
  const r = e9[t], n = new Int32Array(2);
  return n[0] = Math.trunc(r / 12), n[1] = Math.trunc(r % 12), n;
}, R0 = ({ values: e9 }, t) => e9[t], k0 = ({ values: e9 }, t) => e9[t], L0 = ({ values: e9 }, t) => e9[t], F0 = ({ values: e9 }, t) => e9[t], mx = (e9, t) => {
  switch (e9.type.unit) {
    case Z.SECOND:
      return R0(e9, t);
    case Z.MILLISECOND:
      return k0(e9, t);
    case Z.MICROSECOND:
      return L0(e9, t);
    case Z.NANOSECOND:
      return F0(e9, t);
  }
}, vx = (e9, t) => {
  const { stride: r, children: n } = e9, a = n[0].slice(t * r, r);
  return new xt([a]);
};
K.prototype.visitNull = et(tx);
K.prototype.visitBool = et(ex);
K.prototype.visitInt = et(ix);
K.prototype.visitInt8 = et(gn);
K.prototype.visitInt16 = et(gn);
K.prototype.visitInt32 = et(gn);
K.prototype.visitInt64 = et(S0);
K.prototype.visitUint8 = et(gn);
K.prototype.visitUint16 = et(gn);
K.prototype.visitUint32 = et(gn);
K.prototype.visitUint64 = et(S0);
K.prototype.visitFloat = et(ax);
K.prototype.visitFloat16 = et(rx);
K.prototype.visitFloat32 = et(gn);
K.prototype.visitFloat64 = et(gn);
K.prototype.visitUtf8 = et(x0);
K.prototype.visitLargeUtf8 = et(x0);
K.prototype.visitBinary = et(O0);
K.prototype.visitLargeBinary = et(O0);
K.prototype.visitFixedSizeBinary = et(nx);
K.prototype.visitDate = et(ox);
K.prototype.visitDateDay = et(_0);
K.prototype.visitDateMillisecond = et(w0);
K.prototype.visitTimestamp = et(sx);
K.prototype.visitTimestampSecond = et(A0);
K.prototype.visitTimestampMillisecond = et(P0);
K.prototype.visitTimestampMicrosecond = et(T0);
K.prototype.visitTimestampNanosecond = et(I0);
K.prototype.visitTime = et(cx);
K.prototype.visitTimeSecond = et(E0);
K.prototype.visitTimeMillisecond = et($0);
K.prototype.visitTimeMicrosecond = et(M0);
K.prototype.visitTimeNanosecond = et(D0);
K.prototype.visitDecimal = et(ux);
K.prototype.visitList = et(lx);
K.prototype.visitStruct = et(hx);
K.prototype.visitUnion = et(dx);
K.prototype.visitDenseUnion = et(N0);
K.prototype.visitSparseUnion = et(C0);
K.prototype.visitDictionary = et(px);
K.prototype.visitInterval = et(yx);
K.prototype.visitIntervalDayTime = et(j0);
K.prototype.visitIntervalYearMonth = et(B0);
K.prototype.visitDuration = et(mx);
K.prototype.visitDurationSecond = et(R0);
K.prototype.visitDurationMillisecond = et(k0);
K.prototype.visitDurationMicrosecond = et(L0);
K.prototype.visitDurationNanosecond = et(F0);
K.prototype.visitFixedSizeList = et(vx);
K.prototype.visitMap = et(fx);
const Ee = new K(), _i = Symbol.for("keys"), Ei = Symbol.for("vals"), wi = Symbol.for("kKeysAsStrings"), df = Symbol.for("_kKeysAsStrings");
class ad {
  constructor(t) {
    return this[_i] = new xt([t.children[0]]).memoize(), this[Ei] = t.children[1], new Proxy(this, new bx());
  }
  get [wi]() {
    return this[df] || (this[df] = Array.from(this[_i].toArray(), String));
  }
  [Symbol.iterator]() {
    return new gx(this[_i], this[Ei]);
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
    return `{${[...this].map(([t, r]) => `${ro(t)}: ${ro(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class gx {
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
class bx {
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
Object.defineProperties(ad.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [_i]: { writable: true, enumerable: false, configurable: false, value: null }, [Ei]: { writable: true, enumerable: false, configurable: false, value: null }, [df]: { writable: true, enumerable: false, configurable: false, value: null } });
let Zp;
function U0(e9, t, r, n) {
  const { length: i = 0 } = e9;
  let a = typeof t != "number" ? 0 : t, o = typeof r != "number" ? i : r;
  return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (Zp = a, a = o, o = Zp), o > i && (o = i), n ? n(e9, a, o) : [a, o];
}
const od = (e9, t) => e9 < 0 ? t + e9 : e9, ty = (e9) => e9 !== e9;
function ha(e9) {
  if (typeof e9 !== "object" || e9 === null) return ty(e9) ? ty : (r) => r === e9;
  if (e9 instanceof Date) {
    const r = e9.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === r : false;
  }
  return ArrayBuffer.isView(e9) ? (r) => r ? v1(e9, r) : false : e9 instanceof Map ? wx(e9) : Array.isArray(e9) ? _x(e9) : e9 instanceof xt ? Sx(e9) : Ox(e9, true);
}
function _x(e9) {
  const t = [];
  for (let r = -1, n = e9.length; ++r < n; ) t[r] = ha(e9[r]);
  return Su(t);
}
function wx(e9) {
  let t = -1;
  const r = [];
  for (const n of e9.values()) r[++t] = ha(n);
  return Su(r);
}
function Sx(e9) {
  const t = [];
  for (let r = -1, n = e9.length; ++r < n; ) t[r] = ha(e9.get(r));
  return Su(t);
}
function Ox(e9, t = false) {
  const r = Object.keys(e9);
  if (!t && r.length === 0) return () => false;
  const n = [];
  for (let i = -1, a = r.length; ++i < a; ) n[i] = ha(e9[r[i]]);
  return Su(n, r);
}
function Su(e9, t) {
  return (r) => {
    if (!r || typeof r != "object") return false;
    switch (r.constructor) {
      case Array:
        return xx(e9, r);
      case Map:
        return ey(e9, r, r.keys());
      case ad:
      case id:
      case Object:
      case void 0:
        return ey(e9, r, t || Object.keys(r));
    }
    return r instanceof xt ? Ax(e9, r) : false;
  };
}
function xx(e9, t) {
  const r = e9.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e9[n](t[n])) return false;
  return true;
}
function Ax(e9, t) {
  const r = e9.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e9[n](t.get(n))) return false;
  return true;
}
function ey(e9, t, r) {
  const n = r[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const s = e9.length;
  let c = a.next(), u = n.next(), l = i.next();
  for (; o < s && !u.done && !l.done && !c.done && !(u.value !== l.value || !e9[o](c.value)); ++o, u = n.next(), l = i.next(), c = a.next()) ;
  return o === s && u.done && l.done && c.done ? true : (n.return && n.return(), i.return && i.return(), a.return && a.return(), false);
}
function z0(e9, t, r, n) {
  return (r & 1 << n) !== 0;
}
function Px(e9, t, r, n) {
  return (r & 1 << n) >> n;
}
function sc(e9, t, r) {
  const n = r.byteLength + 7 & -8;
  if (e9 > 0 || r.byteLength < n) {
    const i = new Uint8Array(n);
    return i.set(e9 % 8 === 0 ? r.subarray(e9 >> 3) : cc(new sd(r, e9, t, null, z0)).subarray(0, n)), i;
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
class sd {
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
function pf(e9, t, r) {
  if (r - t <= 0) return 0;
  if (r - t < 8) {
    let a = 0;
    for (const o of new sd(e9, t, r - t, e9, Px)) a += o;
    return a;
  }
  const n = r >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return pf(e9, t, i) + pf(e9, n, r) + Tx(e9, i >> 3, n - i >> 3);
}
function Tx(e9, t, r) {
  let n = 0, i = Math.trunc(t);
  const a = new DataView(e9.buffer, e9.byteOffset, e9.byteLength), o = r === void 0 ? e9.byteLength : i + r;
  for (; o - i >= 4; ) n += _l(a.getUint32(i)), i += 4;
  for (; o - i >= 2; ) n += _l(a.getUint16(i)), i += 2;
  for (; o - i >= 1; ) n += _l(a.getUint8(i)), i += 1;
  return n;
}
function _l(e9) {
  let t = Math.trunc(e9);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Ix = -1;
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
    return t <= Ix && (r = this.nullBitmap) && (this._nullCount = t = r.length === 0 ? 0 : this.length - pf(r, this.offset, this.offset + this.length)), t;
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
class Ka extends dt {
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
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.indices.ArrayType, t.data), { ["dictionary"]: o = new xt([new Ka().visit({ type: r.dictionary })]) } = t, { ["length"]: s = a.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
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
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ka().visit({ type: r.valueType }) } = t, a = vt(t.nullBitmap), { ["length"]: o = i.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], [i]);
  }
  visitMap(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ka().visit({ type: r.childType }) } = t, a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
}
const Ex = new Ka();
function pt(e9) {
  return Ex.visit(e9);
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
function $x(e9) {
  return e9.some((t) => t.nullable);
}
function W0(e9) {
  return e9.reduce((t, r) => t + r.nullCount, 0);
}
function V0(e9) {
  return e9.reduce((t, r, n) => (t[n + 1] = t[n] + r.length, t), new Uint32Array(e9.length + 1));
}
function q0(e9, t, r, n) {
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
function cd(e9, t, r, n) {
  let i = 0, a = 0, o = t.length - 1;
  do {
    if (i >= o - 1) return r < t[o] ? n(e9, i, r - t[i]) : null;
    a = i + Math.trunc((o - i) * 0.5), r < t[a] ? o = a : i = a;
  } while (i < o);
}
function ud(e9, t) {
  return e9.getValid(t);
}
function uc(e9) {
  function t(r, n, i) {
    return e9(r[n], i);
  }
  return function(r) {
    const n = this.data;
    return cd(n, this._offsets, r, t);
  };
}
function G0(e9) {
  let t;
  function r(n, i, a) {
    return e9(n[i], a, t);
  }
  return function(n, i) {
    const a = this.data;
    t = i;
    const o = cd(a, this._offsets, n, r);
    return t = void 0, o;
  };
}
function H0(e9) {
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
    const a = this.data, o = typeof i != "number" ? r(a, 0, 0) : cd(a, this._offsets, i, r);
    return t = void 0, o;
  };
}
class Y extends dt {
}
function Mx(e9, t) {
  return t === null && e9.length > 0 ? 0 : -1;
}
function Dx(e9, t) {
  const { nullBitmap: r } = e9;
  if (!r || e9.nullCount <= 0) return -1;
  let n = 0;
  for (const i of new sd(r, e9.offset + (t || 0), e9.length, r, z0)) {
    if (!i) return n;
    ++n;
  }
  return -1;
}
function ot(e9, t, r) {
  if (t === void 0) return -1;
  if (t === null) switch (e9.typeId) {
    case x.Union:
      break;
    case x.Dictionary:
      break;
    default:
      return Dx(e9, r);
  }
  const n = Ee.getVisitFn(e9), i = ha(t);
  for (let a = (r || 0) - 1, o = e9.length; ++a < o; ) if (i(n(e9, a))) return a;
  return -1;
}
function K0(e9, t, r) {
  const n = Ee.getVisitFn(e9), i = ha(t);
  for (let a = (r || 0) - 1, o = e9.length; ++a < o; ) if (i(n(e9, a))) return a;
  return -1;
}
Y.prototype.visitNull = Mx;
Y.prototype.visitBool = ot;
Y.prototype.visitInt = ot;
Y.prototype.visitInt8 = ot;
Y.prototype.visitInt16 = ot;
Y.prototype.visitInt32 = ot;
Y.prototype.visitInt64 = ot;
Y.prototype.visitUint8 = ot;
Y.prototype.visitUint16 = ot;
Y.prototype.visitUint32 = ot;
Y.prototype.visitUint64 = ot;
Y.prototype.visitFloat = ot;
Y.prototype.visitFloat16 = ot;
Y.prototype.visitFloat32 = ot;
Y.prototype.visitFloat64 = ot;
Y.prototype.visitUtf8 = ot;
Y.prototype.visitLargeUtf8 = ot;
Y.prototype.visitBinary = ot;
Y.prototype.visitLargeBinary = ot;
Y.prototype.visitFixedSizeBinary = ot;
Y.prototype.visitDate = ot;
Y.prototype.visitDateDay = ot;
Y.prototype.visitDateMillisecond = ot;
Y.prototype.visitTimestamp = ot;
Y.prototype.visitTimestampSecond = ot;
Y.prototype.visitTimestampMillisecond = ot;
Y.prototype.visitTimestampMicrosecond = ot;
Y.prototype.visitTimestampNanosecond = ot;
Y.prototype.visitTime = ot;
Y.prototype.visitTimeSecond = ot;
Y.prototype.visitTimeMillisecond = ot;
Y.prototype.visitTimeMicrosecond = ot;
Y.prototype.visitTimeNanosecond = ot;
Y.prototype.visitDecimal = ot;
Y.prototype.visitList = ot;
Y.prototype.visitStruct = ot;
Y.prototype.visitUnion = ot;
Y.prototype.visitDenseUnion = K0;
Y.prototype.visitSparseUnion = K0;
Y.prototype.visitDictionary = ot;
Y.prototype.visitInterval = ot;
Y.prototype.visitIntervalDayTime = ot;
Y.prototype.visitIntervalYearMonth = ot;
Y.prototype.visitDuration = ot;
Y.prototype.visitDurationSecond = ot;
Y.prototype.visitDurationMillisecond = ot;
Y.prototype.visitDurationMicrosecond = ot;
Y.prototype.visitDurationNanosecond = ot;
Y.prototype.visitFixedSizeList = ot;
Y.prototype.visitMap = ot;
const lc = new Y();
class X extends dt {
}
function rt(e9) {
  const { type: t } = e9;
  if (e9.nullCount === 0 && e9.stride === 1 && (G.isInt(t) && t.bitWidth !== 64 || G.isTime(t) && t.bitWidth !== 64 || G.isFloat(t) && t.precision !== pe.HALF)) return new ry(e9.data.length, (n) => {
    const i = e9.data[n];
    return i.values.subarray(0, i.length)[Symbol.iterator]();
  });
  let r = 0;
  return new ry(e9.data.length, (n) => {
    const a = e9.data[n].length, o = e9.slice(r, r + a);
    return r += a, new Nx(o);
  });
}
class Nx {
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
X.prototype.visitNull = rt;
X.prototype.visitBool = rt;
X.prototype.visitInt = rt;
X.prototype.visitInt8 = rt;
X.prototype.visitInt16 = rt;
X.prototype.visitInt32 = rt;
X.prototype.visitInt64 = rt;
X.prototype.visitUint8 = rt;
X.prototype.visitUint16 = rt;
X.prototype.visitUint32 = rt;
X.prototype.visitUint64 = rt;
X.prototype.visitFloat = rt;
X.prototype.visitFloat16 = rt;
X.prototype.visitFloat32 = rt;
X.prototype.visitFloat64 = rt;
X.prototype.visitUtf8 = rt;
X.prototype.visitLargeUtf8 = rt;
X.prototype.visitBinary = rt;
X.prototype.visitLargeBinary = rt;
X.prototype.visitFixedSizeBinary = rt;
X.prototype.visitDate = rt;
X.prototype.visitDateDay = rt;
X.prototype.visitDateMillisecond = rt;
X.prototype.visitTimestamp = rt;
X.prototype.visitTimestampSecond = rt;
X.prototype.visitTimestampMillisecond = rt;
X.prototype.visitTimestampMicrosecond = rt;
X.prototype.visitTimestampNanosecond = rt;
X.prototype.visitTime = rt;
X.prototype.visitTimeSecond = rt;
X.prototype.visitTimeMillisecond = rt;
X.prototype.visitTimeMicrosecond = rt;
X.prototype.visitTimeNanosecond = rt;
X.prototype.visitDecimal = rt;
X.prototype.visitList = rt;
X.prototype.visitStruct = rt;
X.prototype.visitUnion = rt;
X.prototype.visitDenseUnion = rt;
X.prototype.visitSparseUnion = rt;
X.prototype.visitDictionary = rt;
X.prototype.visitInterval = rt;
X.prototype.visitIntervalDayTime = rt;
X.prototype.visitIntervalYearMonth = rt;
X.prototype.visitDuration = rt;
X.prototype.visitDurationSecond = rt;
X.prototype.visitDurationMillisecond = rt;
X.prototype.visitDurationMicrosecond = rt;
X.prototype.visitDurationNanosecond = rt;
X.prototype.visitFixedSizeList = rt;
X.prototype.visitMap = rt;
const ld = new X();
var Y0;
const X0 = {}, J0 = {};
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
        const { get: s, set: c, indexOf: u } = X0[o.typeId], l = a[0];
        this.isValid = (f) => ud(l, f), this.get = (f) => s(l, f), this.set = (f, h) => c(l, f, h), this.indexOf = (f) => u(l, f), this._offsets = [0, l.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, J0[o.typeId]), this._offsets = V0(a);
        break;
    }
    this.data = a, this.type = o, this.stride = jr(o), this.numChildren = (i = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets.at(-1);
  }
  get byteLength() {
    return this.data.reduce((t, r) => t + r.byteLength, 0);
  }
  get nullable() {
    return $x(this.data);
  }
  get nullCount() {
    return W0(this.data);
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
    return this.get(od(t, this.length));
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
    return ld.visit(this);
  }
  concat(...t) {
    return new xt(this.data.concat(t.flatMap((r) => r.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(t, r) {
    return new xt(U0(this, t, r, ({ data: n, _offsets: i }, a, o) => q0(n, i, a, o)));
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
Y0 = Symbol.toStringTag;
xt[Y0] = ((e9) => {
  e9.type = G.prototype, e9.data = [], e9.length = 0, e9.stride = 1, e9.numChildren = 0, e9._offsets = new Uint32Array([0]), e9[Symbol.isConcatSpreadable] = true;
  const t = Object.keys(x).map((r) => x[r]).filter((r) => typeof r == "number" && r !== x.NONE);
  for (const r of t) {
    const n = Ee.getVisitFnByTypeId(r), i = Je.getVisitFnByTypeId(r), a = lc.getVisitFnByTypeId(r);
    X0[r] = { get: n, set: i, indexOf: a }, J0[r] = Object.create(e9, { isValid: { value: uc(ud) }, get: { value: uc(Ee.getVisitFnByTypeId(r)) }, set: { value: G0(Je.getVisitFnByTypeId(r)) }, indexOf: { value: H0(lc.getVisitFnByTypeId(r)) } });
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
class yf {
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Ht.V1;
  }
  schema(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new pr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  dictionaries(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new yf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, r) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (r || new yf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
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
    t.addFieldInt16(0, r, Ht.V1);
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
  constructor(t = [], r, n, i = Ht.V5) {
    this.fields = t || [], this.metadata = r || /* @__PURE__ */ new Map(), n || (n = mf(this.fields)), this.dictionaries = n, this.metadataVersion = i;
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
    }), o = mf(a, /* @__PURE__ */ new Map());
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
function us(e9, t) {
  return new Map([...e9 || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function mf(e9, t = /* @__PURE__ */ new Map()) {
  for (let r = -1, n = e9.length; ++r < n; ) {
    const a = e9[r].type;
    if (G.isDictionary(a)) {
      if (!t.has(a.id)) t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && mf(a.children, t);
  }
  return t;
}
var Cx = wb, jx = Ni;
class oo {
  static decode(t) {
    t = new jx(vt(t));
    const r = Ne.getRootAsFooter(t), n = At.decode(r.schema(), /* @__PURE__ */ new Map(), r.version());
    return new Bx(n, r);
  }
  static encode(t) {
    const r = new Cx(), n = At.encode(r, t.schema);
    Ne.startRecordBatchesVector(r, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse()) yn.encode(r, o);
    const i = r.endVector();
    Ne.startDictionariesVector(r, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse()) yn.encode(r, o);
    const a = r.endVector();
    return Ne.startFooter(r), Ne.addSchema(r, n), Ne.addVersion(r, Ht.V5), Ne.addRecordBatches(r, i), Ne.addDictionaries(r, a), Ne.finishFooterBuffer(r, Ne.endFooter(r)), r.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  constructor(t, r = Ht.V5, n, i) {
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
class Bx extends oo {
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
      if (r) return yn.decode(r);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const r = this._footer.dictionaries(t);
      if (r) return yn.decode(r);
    }
    return null;
  }
}
class yn {
  static decode(t) {
    return new yn(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  static encode(t, r) {
    const { metaDataLength: n } = r, i = BigInt(r.offset), a = BigInt(r.bodyLength);
    return yf.createBlock(t, i, n, a);
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
class fd {
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
class Rx extends fd {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return st(this, void 0, void 0, function* () {
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
    return st(this, void 0, void 0, function* () {
      return yield this.abort(t), zt;
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.close(), zt;
    });
  }
  read(t) {
    return st(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return st(this, void 0, void 0, function* () {
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
class Cs extends Rx {
  write(t) {
    if ((t = vt(t)).byteLength > 0) return super.write(t);
  }
  toString(t = false) {
    return t ? sf(this.toUint8Array(true)) : this.toUint8Array(false).then(sf);
  }
  toUint8Array(t = false) {
    return t ? Pr(this._values)[0] : st(this, void 0, void 0, function* () {
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
      return Pr(o, s)[0];
    });
  }
}
class hc {
  constructor(t) {
    t && (this.source = new kx(Ve.fromIterable(t)));
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
class Bi {
  constructor(t) {
    t instanceof Bi ? this.source = t.source : t instanceof Cs ? this.source = new In(Ve.fromAsyncIterable(t)) : vb(t) ? this.source = new In(Ve.fromNodeStream(t)) : td(t) ? this.source = new In(Ve.fromDOMStream(t)) : mb(t) ? this.source = new In(Ve.fromDOMStream(t.body)) : Ko(t) ? this.source = new In(Ve.fromIterable(t)) : qn(t) ? this.source = new In(Ve.fromAsyncIterable(t)) : fa(t) && (this.source = new In(Ve.fromAsyncIterable(t)));
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
class kx {
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
class In {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  cancel(t) {
    return st(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return st(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return st(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t) {
    return st(this, arguments, void 0, function* (r, n = "read") {
      return yield this.source.next({ cmd: n, size: r });
    });
  }
  throw(t) {
    return st(this, void 0, void 0, function* () {
      const r = this.source.throw && (yield this.source.throw(t)) || zt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      const r = this.source.return && (yield this.source.return(t)) || zt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
}
class iy extends hc {
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
class dc extends Bi {
  constructor(t, r) {
    super(), this.position = 0, this._handle = t, typeof r == "number" ? this.size = r : this._pending = st(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return st(this, void 0, void 0, function* () {
      const { buffer: r, byteOffset: n } = yield this.readAt(t, 4);
      return new DataView(r, n).getInt32(0, true);
    });
  }
  seek(t) {
    return st(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return st(this, void 0, void 0, function* () {
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
    return st(this, void 0, void 0, function* () {
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
    return st(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.close(), { done: true, value: t };
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.close(), { done: true, value: t };
    });
  }
}
const Lx = 65536;
function Si(e9) {
  return e9 < 0 && (e9 = 4294967295 + e9 + 1), `0x${e9.toString(16)}`;
}
const Ri = 8, hd = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
class Q0 {
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
    return i = r[2] * n[3], a += i, i = r[3] * n[2] >>> 0, a += i, this.buffer[0] += a << 16, this.buffer[1] = a >>> 0 < i ? Lx : 0, this.buffer[1] += a >>> 16, this.buffer[1] += r[1] * n[3] + r[2] * n[2] + r[3] * n[1], this.buffer[1] += r[0] * n[3] + r[1] * n[2] + r[2] * n[1] + r[3] * n[0] << 16, this;
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
class It extends Q0 {
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
      const o = Ri < n - a ? Ri : n - a, s = new It(new Uint32Array([Number.parseInt(t.slice(a, a + o), 10), 0])), c = new It(new Uint32Array([hd[o], 0]));
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
class Oe extends Q0 {
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
      const s = Ri < i - o ? Ri : i - o, c = new Oe(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0])), u = new Oe(new Uint32Array([hd[s], 0]));
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
class yr {
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
    return new yr(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new yr(new Uint32Array(t.buffer)).plus(r);
  }
  static from(t, r = new Uint32Array(4)) {
    return yr.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(4)) {
    return yr.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(4)) {
    const n = t.startsWith("-"), i = t.length, a = new yr(r);
    for (let o = n ? 1 : 0; o < i; ) {
      const s = Ri < i - o ? Ri : i - o, c = new yr(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0, 0, 0])), u = new yr(new Uint32Array([hd[s], 0, 0, 0]));
      a.times(u), a.plus(c), o += s;
    }
    return n ? a.negate() : a;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 4);
    for (let n = -1, i = t.length; ++n < i; ) yr.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 4 * 4 * n, 4));
    return r;
  }
}
class Z0 extends dt {
  constructor(t, r, n, i, a = Ht.V5) {
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
    return this.metadataVersion < Ht.V5 && this.readNullBitmap(t, n), t.mode === ye.Sparse ? this.visitSparseUnion(t, { length: r, nullCount: n }) : this.visitDenseUnion(t, { length: r, nullCount: n });
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
class Fx extends Z0 {
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
    return G.isTimestamp(t) || (G.isInt(t) || G.isTime(t)) && t.bitWidth === 64 || G.isDuration(t) || G.isDate(t) && t.unit === Xe.MILLISECOND ? Et(Uint8Array, Oe.convertArray(n[r])) : G.isDecimal(t) ? Et(Uint8Array, yr.convertArray(n[r])) : G.isBinary(t) || G.isLargeBinary(t) || G.isFixedSizeBinary(t) ? Ux(n[r]) : G.isBool(t) ? cc(n[r]) : G.isUtf8(t) || G.isLargeUtf8(t) ? Zh(n[r].join("")) : Et(Uint8Array, Et(t.ArrayType, n[r].map((i) => +i)));
  }
}
function Ux(e9) {
  const t = e9.join(""), r = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2) r[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return r;
}
class J extends dt {
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
function Ou(e9, t) {
  return e9 === t || _e(e9, t) && e9.precision === t.precision;
}
function zx(e9, t) {
  return e9 === t || _e(e9, t) && e9.byteWidth === t.byteWidth;
}
function dd(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function Yo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit && e9.timezone === t.timezone;
}
function Xo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit && e9.bitWidth === t.bitWidth;
}
function Wx(e9, t) {
  return e9 === t || _e(e9, t) && e9.children.length === t.children.length && mn.compareManyFields(e9.children, t.children);
}
function Vx(e9, t) {
  return e9 === t || _e(e9, t) && e9.children.length === t.children.length && mn.compareManyFields(e9.children, t.children);
}
function pd(e9, t) {
  return e9 === t || _e(e9, t) && e9.mode === t.mode && e9.typeIds.every((r, n) => r === t.typeIds[n]) && mn.compareManyFields(e9.children, t.children);
}
function qx(e9, t) {
  return e9 === t || _e(e9, t) && e9.id === t.id && e9.isOrdered === t.isOrdered && mn.visit(e9.indices, t.indices) && mn.visit(e9.dictionary, t.dictionary);
}
function yd(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function Jo(e9, t) {
  return e9 === t || _e(e9, t) && e9.unit === t.unit;
}
function Gx(e9, t) {
  return e9 === t || _e(e9, t) && e9.listSize === t.listSize && e9.children.length === t.children.length && mn.compareManyFields(e9.children, t.children);
}
function Hx(e9, t) {
  return e9 === t || _e(e9, t) && e9.keysSorted === t.keysSorted && e9.children.length === t.children.length && mn.compareManyFields(e9.children, t.children);
}
J.prototype.visitNull = ti;
J.prototype.visitBool = ti;
J.prototype.visitInt = Xr;
J.prototype.visitInt8 = Xr;
J.prototype.visitInt16 = Xr;
J.prototype.visitInt32 = Xr;
J.prototype.visitInt64 = Xr;
J.prototype.visitUint8 = Xr;
J.prototype.visitUint16 = Xr;
J.prototype.visitUint32 = Xr;
J.prototype.visitUint64 = Xr;
J.prototype.visitFloat = Ou;
J.prototype.visitFloat16 = Ou;
J.prototype.visitFloat32 = Ou;
J.prototype.visitFloat64 = Ou;
J.prototype.visitUtf8 = ti;
J.prototype.visitLargeUtf8 = ti;
J.prototype.visitBinary = ti;
J.prototype.visitLargeBinary = ti;
J.prototype.visitFixedSizeBinary = zx;
J.prototype.visitDate = dd;
J.prototype.visitDateDay = dd;
J.prototype.visitDateMillisecond = dd;
J.prototype.visitTimestamp = Yo;
J.prototype.visitTimestampSecond = Yo;
J.prototype.visitTimestampMillisecond = Yo;
J.prototype.visitTimestampMicrosecond = Yo;
J.prototype.visitTimestampNanosecond = Yo;
J.prototype.visitTime = Xo;
J.prototype.visitTimeSecond = Xo;
J.prototype.visitTimeMillisecond = Xo;
J.prototype.visitTimeMicrosecond = Xo;
J.prototype.visitTimeNanosecond = Xo;
J.prototype.visitDecimal = ti;
J.prototype.visitList = Wx;
J.prototype.visitStruct = Vx;
J.prototype.visitUnion = pd;
J.prototype.visitDenseUnion = pd;
J.prototype.visitSparseUnion = pd;
J.prototype.visitDictionary = qx;
J.prototype.visitInterval = yd;
J.prototype.visitIntervalDayTime = yd;
J.prototype.visitIntervalYearMonth = yd;
J.prototype.visitDuration = Jo;
J.prototype.visitDurationSecond = Jo;
J.prototype.visitDurationMillisecond = Jo;
J.prototype.visitDurationMicrosecond = Jo;
J.prototype.visitDurationNanosecond = Jo;
J.prototype.visitFixedSizeList = Gx;
J.prototype.visitMap = Hx;
const mn = new J();
function vf(e9, t) {
  return mn.compareSchemas(e9, t);
}
function wl(e9, t) {
  return Kx(e9, t.map((r) => r.data.concat()));
}
function Kx(e9, t) {
  const r = [...e9.fields], n = [], i = { numBatches: t.reduce((f, h) => Math.max(f, h.length), 0) };
  let a = 0, o = 0, s = -1;
  const c = t.length;
  let u, l = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < c; ) l[s] = u = t[s].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (l = Yx(r, o, l, t, i), o > 0 && (n[a++] = pt({ type: new ve(r), length: o, nullCount: 0, children: l.slice() })));
  }
  return [e9 = e9.assign(r), n.map((f) => new Ae(e9, f))];
}
function Yx(e9, t, r, n, i) {
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
var t_;
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
            const u = Object.keys(c), l = u.map((d) => new xt([c[d]])), f = i ?? new At(u.map((d, y) => new Ft(String(d), l[y].type, l[y].nullable))), [, h] = wl(f, l);
            return h.length === 0 ? [new Ae(c)] : h;
          }
        }
      }
      return [];
    }, s = t.flatMap((c) => o(c));
    if (i = (n = i ?? ((r = s[0]) === null || r === void 0 ? void 0 : r.schema)) !== null && n !== void 0 ? n : new At([]), !(i instanceof At)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of s) {
      if (!(c instanceof Ae)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!vf(i, c.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = s, this._offsets = a ?? V0(this.data);
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
    return this._nullCount === -1 && (this._nullCount = W0(this.data)), this._nullCount;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(od(t, this.numRows));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  [Symbol.iterator]() {
    return this.batches.length > 0 ? ld.visit(new xt(this.data)) : new Array(0)[Symbol.iterator]();
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
    [t, r] = U0({ length: this.numRows }, t, r);
    const i = q0(this.data, this._offsets, t, r);
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
      r || (r = new xt([pt({ type: new pn(), length: this.numRows })]));
      const a = n.fields.slice(), o = a[t].clone({ type: r.type }), s = this.schema.fields.map((c, u) => this.getChildAt(u));
      [a[t], s[t]] = [o, r], [n, i] = wl(n, s);
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
    return new me(...wl(a, o));
  }
}
t_ = Symbol.toStringTag;
me[t_] = ((e9) => (e9.schema = null, e9.batches = [], e9._offsets = new Uint32Array([0]), e9._nullCount = -1, e9[Symbol.isConcatSpreadable] = true, e9.isValid = uc(ud), e9.get = uc(Ee.getVisitFn(x.Struct)), e9.set = G0(Je.getVisitFn(x.Struct)), e9.indexOf = H0(lc.getVisitFn(x.Struct)), "Table"))(me.prototype);
var e_;
let Ae = class Ga {
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
    return this._dictionaries || (this._dictionaries = r_(this.schema.fields, this.data.children));
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
    return this.get(od(t, this.numRows));
  }
  set(t, r) {
    return Je.visit(this.data, t, r);
  }
  indexOf(t, r) {
    return lc.visit(this.data, t, r);
  }
  [Symbol.iterator]() {
    return ld.visit(new xt([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...t) {
    return new me(this.schema, [this, ...t]);
  }
  slice(t, r) {
    const [n] = new xt([this.data]).slice(t, r).data;
    return new Ga(this.schema, n);
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
      r || (r = new xt([pt({ type: new pn(), length: this.numRows })]));
      const a = n.fields.slice(), o = i.children.slice(), s = a[t].clone({ type: r.type });
      [a[t], o[t]] = [s, r.data[0]], n = new At(a, new Map(this.schema.metadata)), i = pt({ type: new ve(a), children: o });
    }
    return new Ga(n, i);
  }
  select(t) {
    const r = this.schema.select(t), n = new ve(r.fields), i = [];
    for (const a of t) {
      const o = this.schema.fields.findIndex((s) => s.name === a);
      ~o && (i[o] = this.data.children[o]);
    }
    return new Ga(r, pt({ type: n, length: this.numRows, children: i }));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = t.map((a) => this.data.children[a]).filter(Boolean), i = pt({ type: new ve(r.fields), length: this.numRows, children: n });
    return new Ga(r, i);
  }
};
e_ = Symbol.toStringTag;
Ae[e_] = ((e9) => (e9._nullCount = -1, e9[Symbol.isConcatSpreadable] = true, "RecordBatch"))(Ae.prototype);
function ay(e9, t, r = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...e9.fields], a = [...t], o = (r + 63 & -64) >> 3;
  for (const [s, c] of e9.fields.entries()) {
    const u = t[s];
    (!u || u.length !== r) && (i[s] = c.clone({ nullable: true }), a[s] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(r)) !== null && n !== void 0 ? n : pt({ type: c.type, length: r, nullCount: r, nullBitmap: new Uint8Array(o) }));
  }
  return [e9.assign(i), pt({ type: new ve(i), length: r, children: a })];
}
function r_(e9, t, r = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = e9 == null ? void 0 : e9.length) !== null && n !== void 0 ? n : 0) > 0 && (e9 == null ? void 0 : e9.length) === (t == null ? void 0 : t.length)) for (let a = -1, o = e9.length; ++a < o; ) {
    const { type: s } = e9[a], c = t[a];
    for (const u of [c, ...((i = c == null ? void 0 : c.dictionary) === null || i === void 0 ? void 0 : i.data) || []]) r_(s.children, u == null ? void 0 : u.children, r);
    if (G.isDictionary(s)) {
      const { id: u } = s;
      if (!r.has(u)) (c == null ? void 0 : c.dictionary) && r.set(u, c.dictionary);
      else if (r.get(u) !== c.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
  }
  return r;
}
class md extends Ae {
  constructor(t) {
    const r = t.fields.map((i) => pt({ type: i.type })), n = pt({ type: new ve(t.fields), nullCount: 0, children: r });
    super(t, n);
  }
}
let rn = class dr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMessage(t, r) {
    return (r || new dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, r) {
    return t.setPosition(t.position() + Pt), (r || new dr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ht.V1;
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
    t.addFieldInt16(0, r, Ht.V1);
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
    return dr.startMessage(t), dr.addVersion(t, r), dr.addHeaderType(t, n), dr.addHeader(t, i), dr.addBodyLength(t, a), dr.addCustomMetadata(t, o), dr.endMessage(t);
  }
};
class Xx extends dt {
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
    return vr.startFloatingPoint(r), vr.addPrecision(r, t.precision), vr.endFloatingPoint(r);
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
    return Is.startDate(r), Is.addUnit(r, t.unit), Is.endDate(r);
  }
  visitTime(t, r) {
    return qe.startTime(r), qe.addUnit(r, t.unit), qe.addBitWidth(r, t.bitWidth), qe.endTime(r);
  }
  visitTimestamp(t, r) {
    const n = t.timezone && r.createString(t.timezone) || void 0;
    return Ge.startTimestamp(r), Ge.addUnit(r, t.unit), n !== void 0 && Ge.addTimezone(r, n), Ge.endTimestamp(r);
  }
  visitInterval(t, r) {
    return gr.startInterval(r), gr.addUnit(r, t.unit), gr.endInterval(r);
  }
  visitDuration(t, r) {
    return Es.startDuration(r), Es.addUnit(r, t.unit), Es.endDuration(r);
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
    return Rr.startDictionaryEncoding(r), Rr.addId(r, BigInt(t.id)), Rr.addIsOrdered(r, t.isOrdered), n !== void 0 && Rr.addIndexType(r, n), Rr.endDictionaryEncoding(r);
  }
  visitFixedSizeBinary(t, r) {
    return $s.startFixedSizeBinary(r), $s.addByteWidth(r, t.byteWidth), $s.endFixedSizeBinary(r);
  }
  visitFixedSizeList(t, r) {
    return Ms.startFixedSizeList(r), Ms.addListSize(r, t.listSize), Ms.endFixedSizeList(r);
  }
  visitMap(t, r) {
    return Ds.startMap(r), Ds.addKeysSorted(r, t.keysSorted), Ds.endMap(r);
  }
}
const Sl = new Xx();
function Jx(e9, t = /* @__PURE__ */ new Map()) {
  return new At(Zx(e9, t), js(e9.metadata), t);
}
function n_(e9) {
  return new ke(e9.count, i_(e9.columns), a_(e9.columns));
}
function Qx(e9) {
  return new Ir(n_(e9.data), e9.id, e9.isDelta);
}
function Zx(e9, t) {
  return (e9.fields || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function oy(e9, t) {
  return (e9.children || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function i_(e9) {
  return (e9 || []).reduce((t, r) => [...t, new vn(r.count, tA(r.VALIDITY)), ...i_(r.children)], []);
}
function a_(e9, t = []) {
  for (let r = -1, n = (e9 || []).length; ++r < n; ) {
    const i = e9[r];
    i.VALIDITY && t.push(new _r(t.length, i.VALIDITY.length)), i.TYPE_ID && t.push(new _r(t.length, i.TYPE_ID.length)), i.OFFSET && t.push(new _r(t.length, i.OFFSET.length)), i.DATA && t.push(new _r(t.length, i.DATA.length)), t = a_(i.children, t);
  }
  return t;
}
function tA(e9) {
  return (e9 || []).reduce((t, r) => t + +(r === 0), 0);
}
function eA(e9, t) {
  let r, n, i, a, o, s;
  return !t || !(a = e9.dictionary) ? (o = cy(e9, oy(e9, t)), i = new Ft(e9.name, o, e9.nullable, js(e9.metadata))) : t.has(r = a.id) ? (n = (n = a.indexType) ? sy(n) : new ao(), s = new ji(t.get(r), n, r, a.isOrdered), i = new Ft(e9.name, s, e9.nullable, js(e9.metadata))) : (n = (n = a.indexType) ? sy(n) : new ao(), t.set(r, o = cy(e9, oy(e9, t))), s = new ji(o, n, r, a.isOrdered), i = new Ft(e9.name, s, e9.nullable, js(e9.metadata))), i || null;
}
function js(e9 = []) {
  return new Map(e9.map(({ key: t, value: r }) => [t, r]));
}
function sy(e9) {
  return new Gn(e9.isSigned, e9.bitWidth);
}
function cy(e9, t) {
  const r = e9.type.name;
  switch (r) {
    case "NONE":
      return new pn();
    case "null":
      return new pn();
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
      return new Gn(n.isSigned, n.bitWidth);
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
      return new Qs(Z[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = e9.type;
      return new Zs(Z[n.unit], n.timezone);
    }
    case "interval": {
      const n = e9.type;
      return new tc(Tr[n.unit]);
    }
    case "duration": {
      const n = e9.type;
      return new ec(Z[n.unit]);
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
var rA = wb, nA = Ni;
class ge {
  static fromJSON(t, r) {
    const n = new ge(0, Ht.V5, r);
    return n._createHeader = iA(t, r), n;
  }
  static decode(t) {
    t = new nA(vt(t));
    const r = rn.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), a = r.headerType(), o = new ge(n, i, a);
    return o._createHeader = aA(r, a), o;
  }
  static encode(t) {
    const r = new rA();
    let n = -1;
    return t.isSchema() ? n = At.encode(r, t.header()) : t.isRecordBatch() ? n = ke.encode(r, t.header()) : t.isDictionaryBatch() && (n = Ir.encode(r, t.header())), rn.startMessage(r), rn.addVersion(r, Ht.V5), rn.addHeader(r, n), rn.addHeaderType(r, t.headerType), rn.addBodyLength(r, BigInt(t.bodyLength)), rn.finishMessageBuffer(r, rn.endMessage(r)), r.asUint8Array();
  }
  static from(t, r = 0) {
    if (t instanceof At) return new ge(0, Ht.V5, _t.Schema, t);
    if (t instanceof ke) return new ge(r, Ht.V5, _t.RecordBatch, t);
    if (t instanceof Ir) return new ge(r, Ht.V5, _t.DictionaryBatch, t);
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
class Ir {
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
class _r {
  constructor(t, r) {
    this.offset = Dt(t), this.length = Dt(r);
  }
}
class vn {
  constructor(t, r) {
    this.length = Dt(t), this.nullCount = Dt(r);
  }
}
function iA(e9, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.fromJSON(e9);
      case _t.RecordBatch:
        return ke.fromJSON(e9);
      case _t.DictionaryBatch:
        return Ir.fromJSON(e9);
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
function aA(e9, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.decode(e9.header(new pr()), /* @__PURE__ */ new Map(), e9.version());
      case _t.RecordBatch:
        return ke.decode(e9.header(new Nr()), e9.version());
      case _t.DictionaryBatch:
        return Ir.decode(e9.header(new hi()), e9.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
Ft.encode = mA;
Ft.decode = pA;
Ft.fromJSON = eA;
At.encode = yA;
At.decode = oA;
At.fromJSON = Jx;
ke.encode = vA;
ke.decode = sA;
ke.fromJSON = n_;
Ir.encode = gA;
Ir.decode = cA;
Ir.fromJSON = Qx;
vn.encode = bA;
vn.decode = lA;
_r.encode = _A;
_r.decode = uA;
function oA(e9, t = /* @__PURE__ */ new Map(), r = Ht.V5) {
  const n = dA(e9, t);
  return new At(n, Bs(e9), t, r);
}
function sA(e9, t = Ht.V5) {
  if (e9.compression() !== null) throw new Error("Record batch compression not implemented");
  return new ke(e9.length(), fA(e9), hA(e9, t));
}
function cA(e9, t = Ht.V5) {
  return new Ir(ke.decode(e9.data(), t), e9.id(), e9.isDelta());
}
function uA(e9) {
  return new _r(e9.offset(), e9.length());
}
function lA(e9) {
  return new vn(e9.length(), e9.nullCount());
}
function fA(e9) {
  const t = [];
  for (let r, n = -1, i = -1, a = e9.nodesLength(); ++n < a; ) (r = e9.nodes(n)) && (t[++i] = vn.decode(r));
  return t;
}
function hA(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.buffersLength(); ++i < o; ) (n = e9.buffers(i)) && (t < Ht.V4 && (n.bb_pos += 8 * (i + 1)), r[++a] = _r.decode(n));
  return r;
}
function dA(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.fieldsLength(); ++i < o; ) (n = e9.fields(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function uy(e9, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e9.childrenLength(); ++i < o; ) (n = e9.children(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function pA(e9, t) {
  let r, n, i, a, o, s;
  return !t || !(s = e9.dictionary()) ? (i = fy(e9, uy(e9, t)), n = new Ft(e9.name(), i, e9.nullable(), Bs(e9))) : t.has(r = Dt(s.id())) ? (a = (a = s.indexType()) ? ly(a) : new ao(), o = new ji(t.get(r), a, r, s.isOrdered()), n = new Ft(e9.name(), o, e9.nullable(), Bs(e9))) : (a = (a = s.indexType()) ? ly(a) : new ao(), t.set(r, i = fy(e9, uy(e9, t))), o = new ji(i, a, r, s.isOrdered()), n = new Ft(e9.name(), o, e9.nullable(), Bs(e9))), n || null;
}
function Bs(e9) {
  const t = /* @__PURE__ */ new Map();
  if (e9) for (let r, n, i = -1, a = Math.trunc(e9.customMetadataLength()); ++i < a; ) (r = e9.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function ly(e9) {
  return new Gn(e9.isSigned(), e9.bitWidth());
}
function fy(e9, t) {
  const r = e9.typeType();
  switch (r) {
    case Ct.NONE:
      return new pn();
    case Ct.Null:
      return new pn();
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
      return new Gn(n.isSigned(), n.bitWidth());
    }
    case Ct.FloatingPoint: {
      const n = e9.type(new vr());
      return new Vs(n.precision());
    }
    case Ct.Decimal: {
      const n = e9.type(new pi());
      return new Xs(n.scale(), n.precision(), n.bitWidth());
    }
    case Ct.Date: {
      const n = e9.type(new Is());
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
      const n = e9.type(new gr());
      return new tc(n.unit());
    }
    case Ct.Duration: {
      const n = e9.type(new Es());
      return new ec(n.unit());
    }
    case Ct.Union: {
      const n = e9.type(new xe());
      return new nc(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Ct.FixedSizeBinary: {
      const n = e9.type(new $s());
      return new ic(n.byteWidth());
    }
    case Ct.FixedSizeList: {
      const n = e9.type(new Ms());
      return new ac(n.listSize(), (t || [])[0]);
    }
    case Ct.Map: {
      const n = e9.type(new Ds());
      return new oc((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Ct[r]}" (${r})`);
}
function yA(e9, t) {
  const r = t.fields.map((a) => Ft.encode(e9, a));
  pr.startFieldsVector(e9, r.length);
  const n = pr.createFieldsVector(e9, r), i = t.metadata && t.metadata.size > 0 ? pr.createCustomMetadataVector(e9, [...t.metadata].map(([a, o]) => {
    const s = e9.createString(`${a}`), c = e9.createString(`${o}`);
    return ne.startKeyValue(e9), ne.addKey(e9, s), ne.addValue(e9, c), ne.endKeyValue(e9);
  })) : -1;
  return pr.startSchema(e9), pr.addFields(e9, n), pr.addEndianness(e9, wA ? Ci.Little : Ci.Big), i !== -1 && pr.addCustomMetadata(e9, i), pr.endSchema(e9);
}
function mA(e9, t) {
  let r = -1, n = -1, i = -1;
  const a = t.type;
  let o = t.typeId;
  G.isDictionary(a) ? (o = a.dictionary.typeId, i = Sl.visit(a, e9), n = Sl.visit(a.dictionary, e9)) : n = Sl.visit(a, e9);
  const s = (a.children || []).map((l) => Ft.encode(e9, l)), c = ze.createChildrenVector(e9, s), u = t.metadata && t.metadata.size > 0 ? ze.createCustomMetadataVector(e9, [...t.metadata].map(([l, f]) => {
    const h = e9.createString(`${l}`), d = e9.createString(`${f}`);
    return ne.startKeyValue(e9), ne.addKey(e9, h), ne.addValue(e9, d), ne.endKeyValue(e9);
  })) : -1;
  return t.name && (r = e9.createString(t.name)), ze.startField(e9), ze.addType(e9, n), ze.addTypeType(e9, o), ze.addChildren(e9, c), ze.addNullable(e9, !!t.nullable), r !== -1 && ze.addName(e9, r), i !== -1 && ze.addDictionary(e9, i), u !== -1 && ze.addCustomMetadata(e9, u), ze.endField(e9);
}
function vA(e9, t) {
  const r = t.nodes || [], n = t.buffers || [];
  Nr.startNodesVector(e9, r.length);
  for (const o of r.slice().reverse()) vn.encode(e9, o);
  const i = e9.endVector();
  Nr.startBuffersVector(e9, n.length);
  for (const o of n.slice().reverse()) _r.encode(e9, o);
  const a = e9.endVector();
  return Nr.startRecordBatch(e9), Nr.addLength(e9, BigInt(t.length)), Nr.addNodes(e9, i), Nr.addBuffers(e9, a), Nr.endRecordBatch(e9);
}
function gA(e9, t) {
  const r = ke.encode(e9, t.data);
  return hi.startDictionaryBatch(e9), hi.addId(e9, BigInt(t.id)), hi.addIsDelta(e9, t.isDelta), hi.addData(e9, r), hi.endDictionaryBatch(e9);
}
function bA(e9, t) {
  return xb.createFieldNode(e9, BigInt(t.length), BigInt(t.nullCount));
}
function _A(e9, t) {
  return Ob.createBuffer(e9, BigInt(t.offset), BigInt(t.length));
}
const wA = (() => {
  const e9 = new ArrayBuffer(2);
  return new DataView(e9).setInt16(0, 256, true), new Int16Array(e9)[0] === 256;
})(), vd = (e9) => `Expected ${_t[e9]} Message in stream, but was null or length 0.`, gd = (e9) => `Header pointer of flatbuffer-encoded ${_t[e9]} Message is null or length 0.`, o_ = (e9, t) => `Expected to read ${e9} metadata bytes, but only read ${t}.`, s_ = (e9, t) => `Expected to read ${e9} bytes for message body, but only read ${t}.`;
class c_ {
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
    if (t != null && r.value.headerType !== t) throw new Error(vd(t));
    return r.value;
  }
  readMessageBody(t) {
    if (t <= 0) return new Uint8Array(0);
    const r = vt(this.source.read(t));
    if (r.byteLength < t) throw new Error(s_(t, r.byteLength));
    return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
  }
  readSchema(t = false) {
    const r = _t.Schema, n = this.readMessage(r), i = n == null ? void 0 : n.header();
    if (t && !i) throw new Error(gd(r));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(xu), r = t && new Ni(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const r = this.source.read(t);
    if (!r) return zt;
    if (r.byteLength < t) throw new Error(o_(t, r.byteLength));
    return { done: false, value: ge.decode(r) };
  }
}
class SA {
  constructor(t, r) {
    this.source = t instanceof Bi ? t : yb(t) ? new dc(t, r) : new Bi(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return st(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? zt : t;
    });
  }
  throw(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return st(this, void 0, void 0, function* () {
      let r;
      if ((r = yield this.next()).done) return null;
      if (t != null && r.value.headerType !== t) throw new Error(vd(t));
      return r.value;
    });
  }
  readMessageBody(t) {
    return st(this, void 0, void 0, function* () {
      if (t <= 0) return new Uint8Array(0);
      const r = vt(yield this.source.read(t));
      if (r.byteLength < t) throw new Error(s_(t, r.byteLength));
      return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
    });
  }
  readSchema() {
    return st(this, arguments, void 0, function* (t = false) {
      const r = _t.Schema, n = yield this.readMessage(r), i = n == null ? void 0 : n.header();
      if (t && !i) throw new Error(gd(r));
      return i;
    });
  }
  readMetadataLength() {
    return st(this, void 0, void 0, function* () {
      const t = yield this.source.read(xu), r = t && new Ni(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return st(this, void 0, void 0, function* () {
      const r = yield this.source.read(t);
      if (!r) return zt;
      if (r.byteLength < t) throw new Error(o_(t, r.byteLength));
      return { done: false, value: ge.decode(r) };
    });
  }
}
class OA extends c_ {
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
    if (t != null && r.value.headerType !== t) throw new Error(vd(t));
    return r.value;
  }
  readSchema() {
    const t = _t.Schema, r = this.readMessage(t), n = r == null ? void 0 : r.header();
    if (!r || !n) throw new Error(gd(t));
    return n;
  }
}
const xu = 4, gf = "ARROW1", so = new Uint8Array(gf.length);
for (let e9 = 0; e9 < gf.length; e9 += 1) so[e9] = gf.codePointAt(e9);
function bd(e9, t = 0) {
  for (let r = -1, n = so.length; ++r < n; ) if (so[r] !== e9[t + r]) return false;
  return true;
}
const Qo = so.length, u_ = Qo + xu, xA = Qo * 2 + xu;
class Ke extends fd {
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
    return t instanceof Ke ? t : cf(t) ? IA(t) : yb(t) ? MA(t) : qn(t) ? st(this, void 0, void 0, function* () {
      return yield Ke.from(yield t);
    }) : mb(t) || td(t) || vb(t) || fa(t) ? $A(new Bi(t)) : EA(new hc(t));
  }
  static readAll(t) {
    return t instanceof Ke ? t.isSync() ? hy(t) : dy(t) : cf(t) || ArrayBuffer.isView(t) || Ko(t) || pb(t) ? hy(t) : dy(t);
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
    return br(this, arguments, function* () {
      yield yt(yield* Ps(Fn(this[Symbol.iterator]())));
    });
  }
}
class yc extends Ke {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return st(this, void 0, void 0, function* () {
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
class l_ extends pc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class AA extends yc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class f_ {
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
    return new Z0(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class mc extends f_ {
  constructor(t, r) {
    super(r), this._reader = cf(t) ? new OA(this._handle = t) : new c_(this._handle = t);
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
    return this.closed || (this.autoDestroy = d_(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new md(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class vc extends f_ {
  constructor(t, r) {
    super(r), this._reader = new SA(this._handle = t);
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
    return st(this, void 0, void 0, function* () {
      !this.closed && (this.closed = true) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return st(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = d_(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return st(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.throw(t) : zt;
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.return(t) : zt;
    });
  }
  next() {
    return st(this, void 0, void 0, function* () {
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new md(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return st(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class h_ extends mc {
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
    const { _handle: t } = this, r = t.size - u_, n = t.readInt32(r), i = t.readAt(r - n, n);
    return oo.decode(i);
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
class PA extends vc {
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
    return st(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const n of this._footer.dictionaryBatches()) n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield r.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    return st(this, void 0, void 0, function* () {
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
    return st(this, void 0, void 0, function* () {
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
    return st(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const r = t.size - u_, n = yield t.readInt32(r), i = yield t.readAt(r - n, n);
      return oo.decode(i);
    });
  }
  _readNextMessageAndValidate(t) {
    return st(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const r = this._footer.getRecordBatch(this._recordBatchIndex);
        if (r && (yield this._handle.seek(r.offset))) return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class TA extends mc {
  constructor(t, r) {
    super(t, r);
  }
  _loadVectors(t, r, n) {
    return new Fx(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function d_(e9, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e9.autoDestroy;
}
function* hy(e9) {
  const t = Ke.from(e9);
  try {
    if (!t.open({ autoDestroy: false }).closed) do
      yield t;
    while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function dy(e9) {
  return br(this, arguments, function* () {
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
function IA(e9) {
  return new pc(new TA(e9));
}
function EA(e9) {
  const t = e9.peek(Qo + 7 & -8);
  return t && t.byteLength >= 4 ? bd(t) ? new l_(new h_(e9.read())) : new pc(new mc(e9)) : new pc(new mc(function* () {
  }()));
}
function $A(e9) {
  return st(this, void 0, void 0, function* () {
    const t = yield e9.peek(Qo + 7 & -8);
    return t && t.byteLength >= 4 ? bd(t) ? new l_(new h_(yield e9.read())) : new yc(new vc(e9)) : new yc(new vc(function() {
      return br(this, arguments, function* () {
      });
    }()));
  });
}
function MA(e9) {
  return st(this, void 0, void 0, function* () {
    const { size: t } = yield e9.stat(), r = new dc(e9, t);
    return t >= xA && bd(yield r.readAt(0, Qo + 7 & -8)) ? new AA(new PA(r)) : new yc(new vc(r));
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
      if (G.isUnion(r)) this.nodes.push(new vn(n, 0));
      else {
        const { nullCount: i } = t;
        G.isNull(r) || cr.call(this, i <= 0 ? new Uint8Array(0) : sc(t.offset, n, t.nullBitmap)), this.nodes.push(new vn(n, i));
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
  return this.buffers.push(e9), this.bufferRegions.push(new _r(this._byteLength, t)), this._byteLength += t, this;
}
function DA(e9) {
  var t;
  const { type: r, length: n, typeIds: i, valueOffsets: a } = e9;
  if (cr.call(this, i), r.mode === ye.Sparse) return bf.call(this, e9);
  if (r.mode === ye.Dense) {
    if (e9.offset <= 0) return cr.call(this, a), bf.call(this, e9);
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
function NA(e9) {
  let t;
  return e9.nullCount >= e9.length ? cr.call(this, new Uint8Array(0)) : (t = e9.values) instanceof Uint8Array ? cr.call(this, sc(e9.offset, e9.length, t)) : cr.call(this, cc(e9.values));
}
function Jr(e9) {
  return cr.call(this, e9.values.subarray(0, e9.length * e9.stride));
}
function Au(e9) {
  const { length: t, values: r, valueOffsets: n } = e9, i = Dt(n[0]), a = Dt(n[t]), o = Math.min(a - i, r.byteLength - i);
  return cr.call(this, bb(-i, t + 1, n)), cr.call(this, r.subarray(i, i + o)), this;
}
function _d(e9) {
  const { length: t, valueOffsets: r } = e9;
  if (r) {
    const { [0]: n, [t]: i } = r;
    return cr.call(this, bb(-n, t + 1, r)), this.visit(e9.children[0].slice(n, i - n));
  }
  return this.visit(e9.children[0]);
}
function bf(e9) {
  return this.visitMany(e9.type.children.map((t, r) => e9.children[r]).filter(Boolean))[0];
}
Wt.prototype.visitBool = NA;
Wt.prototype.visitInt = Jr;
Wt.prototype.visitFloat = Jr;
Wt.prototype.visitUtf8 = Au;
Wt.prototype.visitLargeUtf8 = Au;
Wt.prototype.visitBinary = Au;
Wt.prototype.visitLargeBinary = Au;
Wt.prototype.visitFixedSizeBinary = Jr;
Wt.prototype.visitDate = Jr;
Wt.prototype.visitTimestamp = Jr;
Wt.prototype.visitTime = Jr;
Wt.prototype.visitDecimal = Jr;
Wt.prototype.visitList = _d;
Wt.prototype.visitStruct = bf;
Wt.prototype.visitUnion = DA;
Wt.prototype.visitInterval = Jr;
Wt.prototype.visitDuration = Jr;
Wt.prototype.visitFixedSizeList = _d;
Wt.prototype.visitMap = _d;
class p_ extends fd {
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = false, this._sink = new Cs(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Ie(t) || (t = { autoDestroy: true, writeLegacyIpcFormat: false }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : true, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : false;
  }
  toString(t = false) {
    return this._sink.toString(t);
  }
  toUint8Array(t = false) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return qn(t) ? t.then((r) => this.writeAll(r)) : fa(t) ? xd(this, t) : Od(this, t);
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
    return t === this._sink || t instanceof Cs ? this._sink = t : (this._sink = new Cs(), t && l1(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && f1(t) && this.toNodeStream({ objectMode: false }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = false, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!r || !vf(r, this._schema)) && (r == null ? (this._position = 0, this._schema = null) : (this._started = true, this._schema = r, this._writeSchema(r))), this;
  }
  write(t) {
    let r = null;
    if (this._sink) {
      if (t == null) return this.finish() && void 0;
      if (t instanceof me && !(r = t.schema)) return this.finish() && void 0;
      if (t instanceof Ae && !(r = t.schema)) return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (r && !vf(r, this._schema)) {
      if (this._started && this._autoDestroy) return this.close();
      this.reset(this._sink, r);
    }
    t instanceof Ae ? t instanceof md || this._writeRecordBatch(t) : t instanceof me ? this.writeAll(t.batches) : Ko(t) && this.writeAll(t);
  }
  _writeMessage(t, r = 8) {
    const n = r - 1, i = ge.encode(t), a = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, s = a + o + n & ~n, c = s - a - o;
    return t.headerType === _t.RecordBatch ? this._recordBatchBlocks.push(new yn(s, t.bodyLength, this._position)) : t.headerType === _t.DictionaryBatch && this._dictionaryBlocks.push(new yn(s, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(s - o)), a > 0 && this._write(i), this._writePadding(c);
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
    return this._write(so);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: r, nodes: n, bufferRegions: i, buffers: a } = Wt.assemble(t), o = new ke(t.numRows, n, i), s = ge.from(o, r);
    return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(a);
  }
  _writeDictionaryBatch(t, r, n = false) {
    const { byteLength: i, nodes: a, bufferRegions: o, buffers: s } = Wt.assemble(new xt([t])), c = new ke(t.length, a, o), u = new Ir(c, r, n), l = ge.from(u, i);
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
class wd extends p_ {
  static writeAll(t, r) {
    const n = new wd(r);
    return qn(t) ? t.then((i) => n.writeAll(i)) : fa(t) ? xd(n, t) : Od(n, t);
  }
}
class Sd extends p_ {
  static writeAll(t) {
    const r = new Sd();
    return qn(t) ? t.then((n) => r.writeAll(n)) : fa(t) ? xd(r, t) : Od(r, t);
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
    const r = oo.encode(new oo(t, Ht.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(r)._write(Int32Array.of(r.byteLength))._writeMagic();
  }
}
function Od(e9, t) {
  let r = t;
  t instanceof me && (r = t.batches, e9.reset(void 0, t.schema));
  for (const n of r) e9.write(n);
  return e9.finish();
}
function xd(e9, t) {
  return st(this, void 0, void 0, function* () {
    var r, n, i, a, o, s, c;
    try {
      for (r = true, n = Fn(t); i = yield n.next(), a = i.done, !a; r = true) {
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
function CA(e9, t = "stream") {
  return (t === "stream" ? wd : Sd).writeAll(e9).toUint8Array(true);
}
var jA = Object.create, y_ = Object.defineProperty, BA = Object.getOwnPropertyDescriptor, RA = Object.getOwnPropertyNames, kA = Object.getPrototypeOf, LA = Object.prototype.hasOwnProperty, FA = (e9, t) => () => (t || e9((t = { exports: {} }).exports, t), t.exports), UA = (e9, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of RA(t)) !LA.call(e9, i) && i !== r && y_(e9, i, { get: () => t[i], enumerable: !(n = BA(t, i)) || n.enumerable });
  return e9;
}, zA = (e9, t, r) => (r = e9 != null ? jA(kA(e9)) : {}, UA(!e9 || !e9.__esModule ? y_(r, "default", { value: e9, enumerable: true }) : r, e9)), WA = FA((e9, t) => {
  t.exports = Worker;
}), VA = ((e9) => (e9[e9.UNDEFINED = 0] = "UNDEFINED", e9[e9.AUTOMATIC = 1] = "AUTOMATIC", e9[e9.READ_ONLY = 2] = "READ_ONLY", e9[e9.READ_WRITE = 3] = "READ_WRITE", e9))(VA || {}), qA = ((e9) => (e9[e9.IDENTIFIER = 0] = "IDENTIFIER", e9[e9.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e9[e9.STRING_CONSTANT = 2] = "STRING_CONSTANT", e9[e9.OPERATOR = 3] = "OPERATOR", e9[e9.KEYWORD = 4] = "KEYWORD", e9[e9.COMMENT = 5] = "COMMENT", e9))(qA || {}), GA = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.DEBUG = 1] = "DEBUG", e9[e9.INFO = 2] = "INFO", e9[e9.WARNING = 3] = "WARNING", e9[e9.ERROR = 4] = "ERROR", e9))(GA || {}), HA = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.CONNECT = 1] = "CONNECT", e9[e9.DISCONNECT = 2] = "DISCONNECT", e9[e9.OPEN = 3] = "OPEN", e9[e9.QUERY = 4] = "QUERY", e9[e9.INSTANTIATE = 5] = "INSTANTIATE", e9))(HA || {}), KA = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.OK = 1] = "OK", e9[e9.ERROR = 2] = "ERROR", e9[e9.START = 3] = "START", e9[e9.RUN = 4] = "RUN", e9[e9.CAPTURE = 5] = "CAPTURE", e9))(KA || {}), YA = ((e9) => (e9[e9.NONE = 0] = "NONE", e9[e9.WEB_WORKER = 1] = "WEB_WORKER", e9[e9.NODE_WORKER = 2] = "NODE_WORKER", e9[e9.BINDINGS = 3] = "BINDINGS", e9[e9.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e9))(YA || {}), XA = class {
  log(e9) {
  }
}, JA = ((e9) => (e9[e9.SUCCESS = 0] = "SUCCESS", e9[e9.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", e9[e9.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", e9))(JA || {}), QA = class {
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
    let n = new m_(this._bindings, this._conn, r), i = await Ke.from(n);
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
    return new ZA(this._bindings, this._conn, t);
  }
  async insertArrowTable(e9, t) {
    let r = CA(e9, "stream");
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
}, m_ = class {
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
}, ZA = class {
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
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, t), n = new m_(this.bindings, this.connectionId, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, tP = ((e9) => (e9.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e9.CLOSE_PREPARED = "CLOSE_PREPARED", e9.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e9.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", e9.CONNECT = "CONNECT", e9.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e9.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e9.CREATE_PREPARED = "CREATE_PREPARED", e9.DISCONNECT = "DISCONNECT", e9.DROP_FILE = "DROP_FILE", e9.DROP_FILES = "DROP_FILES", e9.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e9.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e9.FLUSH_FILES = "FLUSH_FILES", e9.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e9.GET_TABLE_NAMES = "GET_TABLE_NAMES", e9.GET_VERSION = "GET_VERSION", e9.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e9.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e9.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e9.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e9.INSTANTIATE = "INSTANTIATE", e9.OPEN = "OPEN", e9.PING = "PING", e9.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e9.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e9.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e9.REGISTER_FILE_URL = "REGISTER_FILE_URL", e9.RESET = "RESET", e9.RUN_PREPARED = "RUN_PREPARED", e9.RUN_QUERY = "RUN_QUERY", e9.SEND_PREPARED = "SEND_PREPARED", e9.START_PENDING_QUERY = "START_PENDING_QUERY", e9.TOKENIZE = "TOKENIZE", e9))(tP || {}), eP = ((e9) => (e9.CONNECTION_INFO = "CONNECTION_INFO", e9.ERROR = "ERROR", e9.FEATURE_FLAGS = "FEATURE_FLAGS", e9.FILE_BUFFER = "FILE_BUFFER", e9.FILE_INFOS = "FILE_INFOS", e9.FILE_SIZE = "FILE_SIZE", e9.FILE_STATISTICS = "FILE_STATISTICS", e9.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e9.LOG = "LOG", e9.PROGRESS_UPDATE = "PROGRESS_UPDATE", e9.OK = "OK", e9.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e9.QUERY_PLAN = "QUERY_PLAN", e9.QUERY_RESULT = "QUERY_RESULT", e9.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e9.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e9.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e9.REGISTERED_FILE = "REGISTERED_FILE", e9.SCRIPT_TOKENS = "SCRIPT_TOKENS", e9.SUCCESS = "SUCCESS", e9.TABLE_NAMES = "TABLE_NAMES", e9.VERSION_STRING = "VERSION_STRING", e9))(eP || {}), gt = class {
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
      return { sqlType: "struct", fields: e9.children.map((t) => _f(t.name, t.type)) };
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
function _f(e9, t) {
  let r = Rs(t);
  return r.name = e9, r;
}
var rP = /'(opfs:\/\/\S*?)'/g, nP = /(opfs:\/\/\S*?)/g;
function iP(e9) {
  return e9.search(nP) > -1;
}
function aP(e9) {
  return [...e9.matchAll(rP)].map((t) => t[1]);
}
var oP = new TextEncoder(), sP = class {
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
    return new QA(this, t);
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
    let n = oP.encode(r);
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
        a.push(_f(o, s));
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
        a.push(_f(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_JSON_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  shouldOPFSFileHandling() {
    var t, r;
    return iP((t = this.config.path) != null ? t : "") ? ((r = this.config.opfs) == null ? void 0 : r.fileHandling) == "auto" : false;
  }
  async registerOPFSFileFromSQL(t) {
    let r = aP(t), n = [];
    for (let i of r) try {
      await this.registerOPFSFileName(i), n.push(i);
    } catch (a) {
      throw console.error(a), new Error("File Not found:" + i);
    }
    return n;
  }
};
function cP() {
  let e9 = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e9.decode(t));
}
cP();
var uP = ((e9) => (e9[e9.BUFFER = 0] = "BUFFER", e9[e9.NODE_FS = 1] = "NODE_FS", e9[e9.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e9[e9.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e9[e9.HTTP = 4] = "HTTP", e9[e9.S3 = 5] = "S3", e9))(uP || {}), lP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), fP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), hP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), dP = () => (async (e9) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e9);
  } catch {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), pP = { version: "1.32.0" }, Ad = pP.version.split(".");
Ad[0];
Ad[1];
Ad[2];
var yP = () => typeof navigator > "u", Ol = null, xl = null, Al = null, Pl = null, Tl = null;
async function mP() {
  return Ol == null && (Ol = typeof BigInt64Array < "u"), xl == null && (xl = await fP()), Al == null && (Al = await dP()), Pl == null && (Pl = await hP()), Tl == null && (Tl = await lP()), { bigInt64Array: Ol, crossOriginIsolated: yP() || globalThis.crossOriginIsolated || false, wasmExceptions: xl, wasmSIMD: Pl, wasmThreads: Al, wasmBulkMemory: Tl };
}
async function vP(e9) {
  let t = await mP();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e9.coi) return { mainModule: e9.coi.mainModule, mainWorker: e9.coi.mainWorker, pthreadWorker: e9.coi.pthreadWorker };
    if (e9.eh) return { mainModule: e9.eh.mainModule, mainWorker: e9.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e9.mvp.mainModule, mainWorker: e9.mvp.mainWorker, pthreadWorker: null };
}
zA(WA());
const gP = "/assets/duckdb-mvp-BP0pRkMH.wasm", bP = "/assets/duckdb-browser-mvp.worker-C9hF7LGh.js", _P = "/assets/duckdb-eh-9ubY-jlA.wasm", wP = "/assets/duckdb-browser-eh.worker-hQa-dcAV.js", SP = { mvp: { mainModule: gP, mainWorker: bP }, eh: { mainModule: _P, mainWorker: wP } }, ks = "mmg";
let Il = null, El = null, Ls = Promise.resolve(), wf = null;
async function v_() {
  return Il || (Il = (async () => {
    const e9 = await vP(SP), t = new Worker(e9.mainWorker, { type: "module" }), r = new XA(), n = new sP(r, t);
    return await n.instantiate(e9.mainModule, e9.pthreadWorker), n;
  })()), Il;
}
async function g_() {
  return El || (El = await (await v_()).connect()), El;
}
async function OP(e9) {
  return (await e9.query(`SELECT 1 FROM duckdb_databases() WHERE database_name = '${ks}' LIMIT 1`)).toArray().length > 0;
}
async function xP(e9, t) {
  if (t && wf === t) return;
  const r = await v_(), n = await g_();
  await r.registerFileBuffer(Rp, new Uint8Array(e9)), await OP(n) && await n.query(`DETACH ${ks}`), await n.query(`ATTACH '${Rp}' AS ${ks} (READ_ONLY)`), await n.query(`USE ${ks}`), wf = t;
}
async function py(e9, t) {
  const r = t ?? null;
  if (!(r && wf === r)) return Ls = Ls.then(() => xP(e9, r)), Ls;
}
async function ur(e9) {
  return await Ls, (await (await g_()).query(e9)).toArray();
}
const Pd = { day: "day", week: "week", month: "month", quarter: "quarter", year: "year" };
function Hn(e9) {
  return e9.replace(/'/g, "''");
}
function Td(e9, t) {
  if (!(t == null ? void 0 : t.from) || !(t == null ? void 0 : t.to)) return "";
  const r = Hn(t.from), n = Hn(t.to);
  return `
    AND ${e9}.scrape_timestamp >= TIMESTAMP '${r}'
    AND ${e9}.scrape_timestamp < TIMESTAMP '${n}' + INTERVAL 1 DAY
  `;
}
async function p7(e9) {
  const t = Hn(e9), n = (await ur(`
    SELECT
      min(pm.scrape_timestamp)::DATE AS min_date,
      max(pm.scrape_timestamp)::DATE AS max_date
    FROM io_lines io
    JOIN price_metrics pm ON pm.item_id = io.item_id
    WHERE io.method_id = '${t}'
      AND io.item_id IS NOT NULL
      AND pm.metric IN ('price', 'volume')
  `))[0];
  return !(n == null ? void 0 : n.min_date) || !(n == null ? void 0 : n.max_date) ? null : { min: Vr(n.min_date), max: Vr(n.max_date) };
}
async function y7() {
  return (await ur(`
    SELECT
      mr.method_id,
      mr.method_name,
      mr.method_url,
      mr.categories,
      mr.intensity,
      mr.is_members,
      mr.default_kph,
      mr.completions_unit_name,
      g.input_total_pk,
      g.input_total_ph,
      g.output_total_pk,
      g.output_total_ph,
      mr.profit_pk,
      mr.profit_ph,
      mr.profit_linear_approx,
      mr.wiki_rank,
      mr.wiki_hourly_profit_gp,
      mr.wiki_profit_gp
    FROM method_rankings mr
    LEFT JOIN guide_economics g ON g.method_id = mr.method_id
    ORDER BY mr.wiki_rank NULLS LAST
  `)).map((t) => ({ ...t, categories: r1(t.categories) }));
}
async function m7() {
  const e9 = await ur(`SELECT method_id, skill_key, requirement_text
     FROM method_skills
     ORDER BY method_id, skill_key`), t = {};
  for (const r of e9) {
    const n = t[r.method_id] ?? [];
    n.push({ skillKey: r.skill_key, requirementText: r.requirement_text ?? null }), t[r.method_id] = n;
  }
  return t;
}
async function v7(e9) {
  const t = e9.replace(/'/g, "''"), r = await ur(`SELECT * FROM guide_economics WHERE method_id = '${t}' LIMIT 1`);
  if (!r.length) return null;
  const n = r[0], i = await ur(`SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${t}'`), a = await ur(`SELECT skill_key, requirement_text
     FROM method_skills
     WHERE method_id = '${t}'
     ORDER BY skill_key`), o = (s) => ({ itemName: s.item_name, wikiSlug: s.wiki_slug, qtyPerCompletion: s.qty_per_completion, gpPerCompletion: s.gp_per_completion ?? 0 });
  return { id: n.method_id, methodName: n.method_name, methodUrl: n.method_url, defaultKph: n.default_kph ?? 1, kphUnitName: n.completions_unit_name || "Completions per hour", assumptionText: n.assumption_text ?? "", inputTotalPk: n.input_total_pk ?? 0, inputTotalPh: n.input_total_ph ?? 0, outputTotalPk: n.output_total_pk ?? 0, outputTotalPh: n.output_total_ph ?? 0, inputs: i.filter((s) => s.io_type === "input").map(o), outputs: i.filter((s) => s.io_type === "output").map(o), skillRequirements: a.map((s) => ({ skillKey: s.skill_key, requirementText: s.requirement_text ?? null })) };
}
async function AP(e9, t, r) {
  const n = Pd[t], i = Hn(e9), a = Td("snapshots", r);
  return (await ur(`
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
    `)).map((s) => ({ period: Vr(s.period), mean_profit: s.mean_profit ?? 0, median_profit: s.median_profit ?? 0, p25: s.p25 ?? 0, p75: s.p75 ?? 0 }));
}
async function PP(e9, t, r) {
  if (!e9.length) return [];
  const n = Pd[t], i = e9.map((s) => `'${Hn(s)}'`).join(", "), a = Td("s", r);
  return (await ur(`
    SELECT s.method_id, m.method_name,
           date_trunc('${n}', s.scrape_timestamp) AS period,
           avg(s.hourly_profit_gp) AS profit
    FROM snapshots s
    JOIN methods m ON m.method_id = s.method_id
    WHERE s.method_id IN (${i}) AND s.hourly_profit_gp IS NOT NULL
    ${a}
    GROUP BY 1, 2, 3
    ORDER BY 3, 4 DESC
    `)).map((s) => ({ method_id: s.method_id, method_name: s.method_name, period: Vr(s.period), profit: s.profit ?? 0 }));
}
async function g7() {
  var _a2;
  return (((_a2 = (await ur("SELECT count(*)::INTEGER AS row_count FROM price_metrics"))[0]) == null ? void 0 : _a2.row_count) ?? 0) > 0;
}
async function b7(e9) {
  const t = Hn(e9);
  return (await ur(`SELECT wiki_slug, io_type, item_name, qty_per_completion, item_id
     FROM io_lines
     WHERE method_id = '${t}' AND item_id IS NOT NULL
     ORDER BY io_type, item_name`)).map((n) => ({ wikiSlug: n.wiki_slug, ioType: n.io_type, itemName: n.item_name, qtyPerCompletion: n.qty_per_completion, itemId: n.item_id ?? 0 }));
}
async function _7(e9, t, r) {
  const n = Pd[t], i = Hn(e9), a = Td("pm", r);
  return (await ur(`
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
    `)).map((s) => ({ period: Vr(s.period), wikiSlug: s.wiki_slug, ioType: s.io_type, itemName: s.item_name, qtyPerCompletion: s.qty_per_completion, price: s.price, volume: s.volume }));
}
async function TP() {
  const e9 = await fetch(Bp, { cache: "no-cache" });
  if (!e9.ok) throw new Error(`Failed to load manifest (${e9.status}) from ${Bp}`);
  return await e9.json();
}
function IP(e9, t) {
  return t ? e9.artifacts.database.sha256 !== t : true;
}
function EP(e9) {
  if (!(e9 == null ? void 0 : e9.latest_snapshot_date)) return true;
  const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return e9.latest_snapshot_date < t;
}
function yy(e9) {
  return e9 < 1024 ? `${e9} B` : e9 < 1024 * 1024 ? `${(e9 / 1024).toFixed(1)} KB` : `${(e9 / (1024 * 1024)).toFixed(1)} MB`;
}
function my(e9, t) {
  switch (e9) {
    case "manifest":
      return "Checking for updates\u2026";
    case "cache":
      return "Reading cached database\u2026";
    case "download":
      return "Downloading database\u2026";
    case "open":
      return t ? "Opening cached database\u2026" : "Opening database\u2026";
    default:
      return "Loading OSRS data\u2026";
  }
}
function w7({ loading: e9, error: t, manifest: r, fromCache: n, loadPhase: i, downloadProgress: a, onReload: o }) {
  if (e9) {
    const s = (a == null ? void 0 : a.total) ? Math.min(100, Math.round(a.loaded / a.total * 100)) : null;
    return H.jsxs("div", { className: "osrs-mmg__banner osrs-mmg__banner--loading", role: "status", "aria-live": "polite", children: [H.jsxs("div", { className: "osrs-mmg__load-status", children: [H.jsx("span", { children: my(i, n) }), a ? H.jsxs("span", { className: "osrs-mmg__load-bytes", children: [yy(a.loaded), a.total ? ` / ${yy(a.total)}` : "", s != null ? ` (${s}%)` : ""] }) : null] }), i === "download" || i === "open" ? H.jsx("div", { className: "osrs-mmg__progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": s ?? void 0, "aria-label": my(i, n), children: H.jsx("div", { className: s != null ? "osrs-mmg__progress-bar" : "osrs-mmg__progress-bar osrs-mmg__progress-bar--indeterminate", style: s != null ? { width: `${s}%` } : void 0 }) }) : null] });
  }
  return t ? H.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: [t, " ", H.jsx("button", { type: "button", onClick: o, children: "Retry" })] }) : !r || !EP(r) ? null : H.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--stale", children: ["Data from ", r.generated_at, r.latest_snapshot_date ? ` \xB7 snapshot ${r.latest_snapshot_date}` : "", n ? " \xB7 cached" : " \xB7 fresh download", " \xB7 ", H.jsx("button", { type: "button", onClick: o, children: "Refresh" })] });
}
function S7({ skills: e9, compact: t = false }) {
  return e9.length === 0 ? t ? H.jsx("span", { className: "osrs-mmg__muted", children: "\u2014" }) : null : H.jsx("div", { className: t ? "osrs-mmg__skills-inline" : "osrs-mmg__skills-list", children: e9.map((r) => {
    var _a2, _b2;
    return H.jsxs("span", { className: t ? "osrs-mmg__skill-icon" : "osrs-mmg__skill-chip", title: `${r.skillKey} ${r.requirementText}`, children: [H.jsx("img", { src: n1(r.skillKey), alt: r.skillKey, width: 20, height: 20 }), t ? H.jsx("span", { className: "osrs-mmg__skill-level", children: ((_a2 = r.requirementText) == null ? void 0 : _a2.trim()) || "\u2014" }) : H.jsxs("span", { children: [r.skillKey, " ", ((_b2 = r.requirementText) == null ? void 0 : _b2.trim()) || "\u2014"] })] }, r.skillKey);
  }) });
}
var $P = Array.isArray, $e = $P, MP = typeof os == "object" && os && os.Object === Object && os, b_ = MP, DP = b_, NP = typeof self == "object" && self && self.Object === Object && self, CP = DP || NP || Function("return this")(), $r = CP, jP = $r, BP = jP.Symbol, Zo = BP, vy = Zo, __ = Object.prototype, RP = __.hasOwnProperty, kP = __.toString, Ea = vy ? vy.toStringTag : void 0;
function LP(e9) {
  var t = RP.call(e9, Ea), r = e9[Ea];
  try {
    e9[Ea] = void 0;
    var n = true;
  } catch {
  }
  var i = kP.call(e9);
  return n && (t ? e9[Ea] = r : delete e9[Ea]), i;
}
var FP = LP, UP = Object.prototype, zP = UP.toString;
function WP(e9) {
  return zP.call(e9);
}
var VP = WP, gy = Zo, qP = FP, GP = VP, HP = "[object Null]", KP = "[object Undefined]", by = gy ? gy.toStringTag : void 0;
function YP(e9) {
  return e9 == null ? e9 === void 0 ? KP : HP : by && by in Object(e9) ? qP(e9) : GP(e9);
}
var Qr = YP;
function XP(e9) {
  return e9 != null && typeof e9 == "object";
}
var Zr = XP, JP = Qr, QP = Zr, ZP = "[object Symbol]";
function tT(e9) {
  return typeof e9 == "symbol" || QP(e9) && JP(e9) == ZP;
}
var da = tT, eT = $e, rT = da, nT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, iT = /^\w*$/;
function aT(e9, t) {
  if (eT(e9)) return false;
  var r = typeof e9;
  return r == "number" || r == "symbol" || r == "boolean" || e9 == null || rT(e9) ? true : iT.test(e9) || !nT.test(e9) || t != null && e9 in Object(t);
}
var Id = aT;
function oT(e9) {
  var t = typeof e9;
  return e9 != null && (t == "object" || t == "function");
}
var bn = oT;
const pa = Bt(bn);
var sT = Qr, cT = bn, uT = "[object AsyncFunction]", lT = "[object Function]", fT = "[object GeneratorFunction]", hT = "[object Proxy]";
function dT(e9) {
  if (!cT(e9)) return false;
  var t = sT(e9);
  return t == lT || t == fT || t == uT || t == hT;
}
var Ed = dT;
const lt = Bt(Ed);
var pT = $r, yT = pT["__core-js_shared__"], mT = yT, $l = mT, _y = function() {
  var e9 = /[^.]+$/.exec($l && $l.keys && $l.keys.IE_PROTO || "");
  return e9 ? "Symbol(src)_1." + e9 : "";
}();
function vT(e9) {
  return !!_y && _y in e9;
}
var gT = vT, bT = Function.prototype, _T = bT.toString;
function wT(e9) {
  if (e9 != null) {
    try {
      return _T.call(e9);
    } catch {
    }
    try {
      return e9 + "";
    } catch {
    }
  }
  return "";
}
var w_ = wT, ST = Ed, OT = gT, xT = bn, AT = w_, PT = /[\\^$.*+?()[\]{}|]/g, TT = /^\[object .+?Constructor\]$/, IT = Function.prototype, ET = Object.prototype, $T = IT.toString, MT = ET.hasOwnProperty, DT = RegExp("^" + $T.call(MT).replace(PT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function NT(e9) {
  if (!xT(e9) || OT(e9)) return false;
  var t = ST(e9) ? DT : TT;
  return t.test(AT(e9));
}
var CT = NT;
function jT(e9, t) {
  return e9 == null ? void 0 : e9[t];
}
var BT = jT, RT = CT, kT = BT;
function LT(e9, t) {
  var r = kT(e9, t);
  return RT(r) ? r : void 0;
}
var ei = LT, FT = ei, UT = FT(Object, "create"), Pu = UT, wy = Pu;
function zT() {
  this.__data__ = wy ? wy(null) : {}, this.size = 0;
}
var WT = zT;
function VT(e9) {
  var t = this.has(e9) && delete this.__data__[e9];
  return this.size -= t ? 1 : 0, t;
}
var qT = VT, GT = Pu, HT = "__lodash_hash_undefined__", KT = Object.prototype, YT = KT.hasOwnProperty;
function XT(e9) {
  var t = this.__data__;
  if (GT) {
    var r = t[e9];
    return r === HT ? void 0 : r;
  }
  return YT.call(t, e9) ? t[e9] : void 0;
}
var JT = XT, QT = Pu, ZT = Object.prototype, tI = ZT.hasOwnProperty;
function eI(e9) {
  var t = this.__data__;
  return QT ? t[e9] !== void 0 : tI.call(t, e9);
}
var rI = eI, nI = Pu, iI = "__lodash_hash_undefined__";
function aI(e9, t) {
  var r = this.__data__;
  return this.size += this.has(e9) ? 0 : 1, r[e9] = nI && t === void 0 ? iI : t, this;
}
var oI = aI, sI = WT, cI = qT, uI = JT, lI = rI, fI = oI;
function ya(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = sI;
ya.prototype.delete = cI;
ya.prototype.get = uI;
ya.prototype.has = lI;
ya.prototype.set = fI;
var hI = ya;
function dI() {
  this.__data__ = [], this.size = 0;
}
var pI = dI;
function yI(e9, t) {
  return e9 === t || e9 !== e9 && t !== t;
}
var $d = yI, mI = $d;
function vI(e9, t) {
  for (var r = e9.length; r--; ) if (mI(e9[r][0], t)) return r;
  return -1;
}
var Tu = vI, gI = Tu, bI = Array.prototype, _I = bI.splice;
function wI(e9) {
  var t = this.__data__, r = gI(t, e9);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : _I.call(t, r, 1), --this.size, true;
}
var SI = wI, OI = Tu;
function xI(e9) {
  var t = this.__data__, r = OI(t, e9);
  return r < 0 ? void 0 : t[r][1];
}
var AI = xI, PI = Tu;
function TI(e9) {
  return PI(this.__data__, e9) > -1;
}
var II = TI, EI = Tu;
function $I(e9, t) {
  var r = this.__data__, n = EI(r, e9);
  return n < 0 ? (++this.size, r.push([e9, t])) : r[n][1] = t, this;
}
var MI = $I, DI = pI, NI = SI, CI = AI, jI = II, BI = MI;
function ma(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
ma.prototype.clear = DI;
ma.prototype.delete = NI;
ma.prototype.get = CI;
ma.prototype.has = jI;
ma.prototype.set = BI;
var Iu = ma, RI = ei, kI = $r, LI = RI(kI, "Map"), Md = LI, Sy = hI, FI = Iu, UI = Md;
function zI() {
  this.size = 0, this.__data__ = { hash: new Sy(), map: new (UI || FI)(), string: new Sy() };
}
var WI = zI;
function VI(e9) {
  var t = typeof e9;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e9 !== "__proto__" : e9 === null;
}
var qI = VI, GI = qI;
function HI(e9, t) {
  var r = e9.__data__;
  return GI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Eu = HI, KI = Eu;
function YI(e9) {
  var t = KI(this, e9).delete(e9);
  return this.size -= t ? 1 : 0, t;
}
var XI = YI, JI = Eu;
function QI(e9) {
  return JI(this, e9).get(e9);
}
var ZI = QI, tE = Eu;
function eE(e9) {
  return tE(this, e9).has(e9);
}
var rE = eE, nE = Eu;
function iE(e9, t) {
  var r = nE(this, e9), n = r.size;
  return r.set(e9, t), this.size += r.size == n ? 0 : 1, this;
}
var aE = iE, oE = WI, sE = XI, cE = ZI, uE = rE, lE = aE;
function va(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.clear(); ++t < r; ) {
    var n = e9[t];
    this.set(n[0], n[1]);
  }
}
va.prototype.clear = oE;
va.prototype.delete = sE;
va.prototype.get = cE;
va.prototype.has = uE;
va.prototype.set = lE;
var Dd = va, S_ = Dd, fE = "Expected a function";
function Nd(e9, t) {
  if (typeof e9 != "function" || t != null && typeof t != "function") throw new TypeError(fE);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e9.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Nd.Cache || S_)(), r;
}
Nd.Cache = S_;
var O_ = Nd;
const hE = Bt(O_);
var dE = O_, pE = 500;
function yE(e9) {
  var t = dE(e9, function(n) {
    return r.size === pE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var mE = yE, vE = mE, gE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bE = /\\(\\)?/g, _E = vE(function(e9) {
  var t = [];
  return e9.charCodeAt(0) === 46 && t.push(""), e9.replace(gE, function(r, n, i, a) {
    t.push(i ? a.replace(bE, "$1") : n || r);
  }), t;
}), wE = _E;
function SE(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length, i = Array(n); ++r < n; ) i[r] = t(e9[r], r, e9);
  return i;
}
var Cd = SE, Oy = Zo, OE = Cd, xE = $e, AE = da, xy = Oy ? Oy.prototype : void 0, Ay = xy ? xy.toString : void 0;
function x_(e9) {
  if (typeof e9 == "string") return e9;
  if (xE(e9)) return OE(e9, x_) + "";
  if (AE(e9)) return Ay ? Ay.call(e9) : "";
  var t = e9 + "";
  return t == "0" && 1 / e9 == -1 / 0 ? "-0" : t;
}
var PE = x_, TE = PE;
function IE(e9) {
  return e9 == null ? "" : TE(e9);
}
var A_ = IE, EE = $e, $E = Id, ME = wE, DE = A_;
function NE(e9, t) {
  return EE(e9) ? e9 : $E(e9, t) ? [e9] : ME(DE(e9));
}
var P_ = NE, CE = da;
function jE(e9) {
  if (typeof e9 == "string" || CE(e9)) return e9;
  var t = e9 + "";
  return t == "0" && 1 / e9 == -1 / 0 ? "-0" : t;
}
var $u = jE, BE = P_, RE = $u;
function kE(e9, t) {
  t = BE(t, e9);
  for (var r = 0, n = t.length; e9 != null && r < n; ) e9 = e9[RE(t[r++])];
  return r && r == n ? e9 : void 0;
}
var jd = kE, LE = jd;
function FE(e9, t, r) {
  var n = e9 == null ? void 0 : LE(e9, t);
  return n === void 0 ? r : n;
}
var T_ = FE;
const Ye = Bt(T_);
function UE(e9) {
  return e9 == null;
}
var zE = UE;
const ct = Bt(zE);
var WE = Qr, VE = $e, qE = Zr, GE = "[object String]";
function HE(e9) {
  return typeof e9 == "string" || !VE(e9) && qE(e9) && WE(e9) == GE;
}
var KE = HE;
const Kn = Bt(KE);
var I_ = { exports: {} }, $t = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Bd = Symbol.for("react.element"), Rd = Symbol.for("react.portal"), Mu = Symbol.for("react.fragment"), Du = Symbol.for("react.strict_mode"), Nu = Symbol.for("react.profiler"), Cu = Symbol.for("react.provider"), ju = Symbol.for("react.context"), YE = Symbol.for("react.server_context"), Bu = Symbol.for("react.forward_ref"), Ru = Symbol.for("react.suspense"), ku = Symbol.for("react.suspense_list"), Lu = Symbol.for("react.memo"), Fu = Symbol.for("react.lazy"), XE = Symbol.for("react.offscreen"), E_;
E_ = Symbol.for("react.module.reference");
function Ze(e9) {
  if (typeof e9 == "object" && e9 !== null) {
    var t = e9.$$typeof;
    switch (t) {
      case Bd:
        switch (e9 = e9.type, e9) {
          case Mu:
          case Nu:
          case Du:
          case Ru:
          case ku:
            return e9;
          default:
            switch (e9 = e9 && e9.$$typeof, e9) {
              case YE:
              case ju:
              case Bu:
              case Fu:
              case Lu:
              case Cu:
                return e9;
              default:
                return t;
            }
        }
      case Rd:
        return t;
    }
  }
}
$t.ContextConsumer = ju;
$t.ContextProvider = Cu;
$t.Element = Bd;
$t.ForwardRef = Bu;
$t.Fragment = Mu;
$t.Lazy = Fu;
$t.Memo = Lu;
$t.Portal = Rd;
$t.Profiler = Nu;
$t.StrictMode = Du;
$t.Suspense = Ru;
$t.SuspenseList = ku;
$t.isAsyncMode = function() {
  return false;
};
$t.isConcurrentMode = function() {
  return false;
};
$t.isContextConsumer = function(e9) {
  return Ze(e9) === ju;
};
$t.isContextProvider = function(e9) {
  return Ze(e9) === Cu;
};
$t.isElement = function(e9) {
  return typeof e9 == "object" && e9 !== null && e9.$$typeof === Bd;
};
$t.isForwardRef = function(e9) {
  return Ze(e9) === Bu;
};
$t.isFragment = function(e9) {
  return Ze(e9) === Mu;
};
$t.isLazy = function(e9) {
  return Ze(e9) === Fu;
};
$t.isMemo = function(e9) {
  return Ze(e9) === Lu;
};
$t.isPortal = function(e9) {
  return Ze(e9) === Rd;
};
$t.isProfiler = function(e9) {
  return Ze(e9) === Nu;
};
$t.isStrictMode = function(e9) {
  return Ze(e9) === Du;
};
$t.isSuspense = function(e9) {
  return Ze(e9) === Ru;
};
$t.isSuspenseList = function(e9) {
  return Ze(e9) === ku;
};
$t.isValidElementType = function(e9) {
  return typeof e9 == "string" || typeof e9 == "function" || e9 === Mu || e9 === Nu || e9 === Du || e9 === Ru || e9 === ku || e9 === XE || typeof e9 == "object" && e9 !== null && (e9.$$typeof === Fu || e9.$$typeof === Lu || e9.$$typeof === Cu || e9.$$typeof === ju || e9.$$typeof === Bu || e9.$$typeof === E_ || e9.getModuleId !== void 0);
};
$t.typeOf = Ze;
I_.exports = $t;
var JE = I_.exports, QE = Qr, ZE = Zr, t$ = "[object Number]";
function e$(e9) {
  return typeof e9 == "number" || ZE(e9) && QE(e9) == t$;
}
var $_ = e$;
const r$ = Bt($_);
var n$ = $_;
function i$(e9) {
  return n$(e9) && e9 != +e9;
}
var a$ = i$;
const ga = Bt(a$);
var sr = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, jn = function(t) {
  return Kn(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return r$(t) && !ga(t);
}, o$ = function(t) {
  return ct(t);
}, ie = function(t) {
  return L(t) || Kn(t);
}, s$ = 0, ri = function(t) {
  var r = ++s$;
  return "".concat(t || "").concat(r);
}, Yn = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && !Kn(t)) return n;
  var a;
  if (jn(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return ga(a) && (a = n), i && a > r && (a = r), a;
}, un = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, c$ = function(t) {
  if (!Array.isArray(t)) return false;
  for (var r = t.length, n = {}, i = 0; i < r; i++) if (!n[t[i]]) n[t[i]] = true;
  else return true;
  return false;
}, Gt = function(t, r) {
  return L(t) && L(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function gc(e9, t, r) {
  return !e9 || !e9.length ? null : e9.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ye(n, t)) === r;
  });
}
var u$ = function(t) {
  if (!t || !t.length) return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++) u = t[f].cx || 0, l = t[f].cy || 0, n += u, i += l, a += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return { xmin: s, xmax: c, a: h, b: (i - h * n) / r };
}, l$ = function(t, r) {
  return L(t) && L(r) ? t - r : Kn(t) && Kn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function $i(e9, t) {
  for (var r in e9) if ({}.hasOwnProperty.call(e9, r) && (!{}.hasOwnProperty.call(t, r) || e9[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e9, n)) return false;
  return true;
}
function Sf(e9) {
  "@babel/helpers - typeof";
  return Sf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sf(e9);
}
var f$ = ["viewBox", "children"], h$ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Py = ["points", "pathLength"], Ml = { svg: f$, polygon: Py, polyline: Py }, kd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], bc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (B.isValidElement(t) && (n = t.props), !pa(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    kd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, d$ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, co = function(t, r, n) {
  if (!pa(t) || Sf(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    kd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = d$(o, r, n));
  }), i;
}, p$ = ["children"], y$ = ["children"];
function Ty(e9, t) {
  if (e9 == null) return {};
  var r = m$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function m$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Of(e9) {
  "@babel/helpers - typeof";
  return Of = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Of(e9);
}
var Iy = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, Ur = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Ey = null, Dl = null, Ld = function e(t) {
  if (t === Ey && Array.isArray(Dl)) return Dl;
  var r = [];
  return B.Children.forEach(t, function(n) {
    ct(n) || (JE.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Dl = r, Ey = t, r;
};
function Te(e9, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Ur(i);
  }) : n = [Ur(t)], Ld(e9).forEach(function(i) {
    var a = Ye(i, "type.displayName") || Ye(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function je(e9, t) {
  var r = Te(e9, t);
  return r && r[0];
}
var $y = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, v$ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], g$ = function(t) {
  return t && t.type && Kn(t.type) && v$.indexOf(t.type) >= 0;
}, M_ = function(t) {
  return t && Of(t) === "object" && "clipDot" in t;
}, b$ = function(t, r, n, i) {
  var a, o = (a = Ml == null ? void 0 : Ml[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !lt(t) && (i && o.includes(r) || h$.includes(r)) || n && kd.includes(r);
}, ut = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (B.isValidElement(t) && (i = t.props), !pa(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    b$((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, xf = function e2(t, r) {
  if (t === r) return true;
  var n = B.Children.count(t);
  if (n !== B.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return My(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!My(a, o)) return false;
  }
  return true;
}, My = function(t, r) {
  if (ct(t) && ct(r)) return true;
  if (!ct(t) && !ct(r)) {
    var n = t.props || {}, i = n.children, a = Ty(n, p$), o = r.props || {}, s = o.children, c = Ty(o, y$);
    return i && s ? $i(a, c) && xf(i, s) : !i && !s ? $i(a, c) : false;
  }
  return false;
}, Dy = function(t, r) {
  var n = [], i = {};
  return Ld(t).forEach(function(a, o) {
    if (g$(a)) n.push(a);
    else if (a) {
      var s = Ur(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = true;
      }
    }
  }), n;
}, _$ = function(t) {
  var r = t && t.type;
  return r && Iy[r] ? Iy[r] : null;
}, w$ = function(t, r) {
  return Ld(r).indexOf(t);
}, S$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Af() {
  return Af = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Af.apply(this, arguments);
}
function O$(e9, t) {
  if (e9 == null) return {};
  var r = x$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function x$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Pf(e9) {
  var t = e9.children, r = e9.width, n = e9.height, i = e9.viewBox, a = e9.className, o = e9.style, s = e9.title, c = e9.desc, u = O$(e9, S$), l = i || { width: r, height: n, x: 0, y: 0 }, f = mt("recharts-surface", a);
  return A.createElement("svg", Af({}, ut(u, true, "svg"), { className: f, width: r, height: n, style: o, viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height) }), A.createElement("title", null, s), A.createElement("desc", null, c), t);
}
var A$ = ["children", "className"];
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Tf.apply(this, arguments);
}
function P$(e9, t) {
  if (e9 == null) return {};
  var r = T$(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function T$(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var St = A.forwardRef(function(e9, t) {
  var r = e9.children, n = e9.className, i = P$(e9, A$), a = mt("recharts-layer", n);
  return A.createElement("g", Tf({ className: a }, ut(i, true), { ref: t }), r);
}), zr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function I$(e9, t, r) {
  var n = -1, i = e9.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e9[n + t];
  return a;
}
var E$ = I$, $$ = E$;
function M$(e9, t, r) {
  var n = e9.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e9 : $$(e9, t, r);
}
var D$ = M$, N$ = "\\ud800-\\udfff", C$ = "\\u0300-\\u036f", j$ = "\\ufe20-\\ufe2f", B$ = "\\u20d0-\\u20ff", R$ = C$ + j$ + B$, k$ = "\\ufe0e\\ufe0f", L$ = "\\u200d", F$ = RegExp("[" + L$ + N$ + R$ + k$ + "]");
function U$(e9) {
  return F$.test(e9);
}
var D_ = U$;
function z$(e9) {
  return e9.split("");
}
var W$ = z$, N_ = "\\ud800-\\udfff", V$ = "\\u0300-\\u036f", q$ = "\\ufe20-\\ufe2f", G$ = "\\u20d0-\\u20ff", H$ = V$ + q$ + G$, K$ = "\\ufe0e\\ufe0f", Y$ = "[" + N_ + "]", If = "[" + H$ + "]", Ef = "\\ud83c[\\udffb-\\udfff]", X$ = "(?:" + If + "|" + Ef + ")", C_ = "[^" + N_ + "]", j_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", B_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", J$ = "\\u200d", R_ = X$ + "?", k_ = "[" + K$ + "]?", Q$ = "(?:" + J$ + "(?:" + [C_, j_, B_].join("|") + ")" + k_ + R_ + ")*", Z$ = k_ + R_ + Q$, tM = "(?:" + [C_ + If + "?", If, j_, B_, Y$].join("|") + ")", eM = RegExp(Ef + "(?=" + Ef + ")|" + tM + Z$, "g");
function rM(e9) {
  return e9.match(eM) || [];
}
var nM = rM, iM = W$, aM = D_, oM = nM;
function sM(e9) {
  return aM(e9) ? oM(e9) : iM(e9);
}
var cM = sM, uM = D$, lM = D_, fM = cM, hM = A_;
function dM(e9) {
  return function(t) {
    t = hM(t);
    var r = lM(t) ? fM(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? uM(r, 1).join("") : t.slice(1);
    return n[e9]() + i;
  };
}
var pM = dM, yM = pM, mM = yM("toUpperCase"), vM = mM;
const Uu = Bt(vM);
function jt(e9) {
  return function() {
    return e9;
  };
}
const L_ = Math.cos, _c = Math.sin, hr = Math.sqrt, wc = Math.PI, zu = 2 * wc, $f = Math.PI, Mf = 2 * $f, Mn = 1e-6, gM = Mf - Mn;
function F_(e9) {
  this._ += e9[0];
  for (let t = 1, r = e9.length; t < r; ++t) this._ += arguments[t] + e9[t];
}
function bM(e9) {
  let t = Math.floor(e9);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e9}`);
  if (t > 15) return F_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class _M {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? F_ : bM(t);
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
      let d = n - o, y = i - s, m = c * c + u * u, p = d * d + y * y, g = Math.sqrt(m), _ = Math.sqrt(h), w = a * Math.tan(($f - Math.acos((m + h - p) / (2 * g * _))) / 2), S = w / _, v = w / g;
      Math.abs(S - 1) > Mn && this._append`L${t + S * l},${r + S * f}`, this._append`A${a},${a},0,0,${+(f * d > l * y)},${this._x1 = t + v * c},${this._y1 = r + v * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Mn || Math.abs(this._y1 - l) > Mn) && this._append`L${u},${l}`, n && (h < 0 && (h = h % Mf + Mf), h > gM ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > Mn && this._append`A${n},${n},0,${+(h >= $f)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Fd(e9) {
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
  }, () => new _M(t);
}
function Ud(e9) {
  return typeof e9 == "object" && "length" in e9 ? e9 : Array.from(e9);
}
function U_(e9) {
  this._context = e9;
}
U_.prototype = { areaStart: function() {
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
function Wu(e9) {
  return new U_(e9);
}
function z_(e9) {
  return e9[0];
}
function W_(e9) {
  return e9[1];
}
function V_(e9, t) {
  var r = jt(true), n = null, i = Wu, a = null, o = Fd(s);
  e9 = typeof e9 == "function" ? e9 : e9 === void 0 ? z_ : jt(e9), t = typeof t == "function" ? t : t === void 0 ? W_ : jt(t);
  function s(c) {
    var u, l = (c = Ud(c)).length, f, h = false, d;
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
function ls(e9, t, r) {
  var n = null, i = jt(true), a = null, o = Wu, s = null, c = Fd(u);
  e9 = typeof e9 == "function" ? e9 : e9 === void 0 ? z_ : jt(+e9), t = typeof t == "function" ? t : jt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? W_ : jt(+r);
  function u(f) {
    var h, d, y, m = (f = Ud(f)).length, p, g = false, _, w = new Array(m), S = new Array(m);
    for (a == null && (s = o(_ = c())), h = 0; h <= m; ++h) {
      if (!(h < m && i(p = f[h], h, f)) === g) if (g = !g) d = h, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y) s.point(w[y], S[y]);
        s.lineEnd(), s.areaEnd();
      }
      g && (w[h] = +e9(p, h, f), S[h] = +t(p, h, f), s.point(n ? +n(p, h, f) : w[h], r ? +r(p, h, f) : S[h]));
    }
    if (_) return s = null, _ + "" || null;
  }
  function l() {
    return V_().defined(i).curve(o).context(a);
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
class q_ {
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
function wM(e9) {
  return new q_(e9, true);
}
function SM(e9) {
  return new q_(e9, false);
}
const zd = { draw(e9, t) {
  const r = hr(t / wc);
  e9.moveTo(r, 0), e9.arc(0, 0, r, 0, zu);
} }, OM = { draw(e9, t) {
  const r = hr(t / 5) / 2;
  e9.moveTo(-3 * r, -r), e9.lineTo(-r, -r), e9.lineTo(-r, -3 * r), e9.lineTo(r, -3 * r), e9.lineTo(r, -r), e9.lineTo(3 * r, -r), e9.lineTo(3 * r, r), e9.lineTo(r, r), e9.lineTo(r, 3 * r), e9.lineTo(-r, 3 * r), e9.lineTo(-r, r), e9.lineTo(-3 * r, r), e9.closePath();
} }, G_ = hr(1 / 3), xM = G_ * 2, AM = { draw(e9, t) {
  const r = hr(t / xM), n = r * G_;
  e9.moveTo(0, -r), e9.lineTo(n, 0), e9.lineTo(0, r), e9.lineTo(-n, 0), e9.closePath();
} }, PM = { draw(e9, t) {
  const r = hr(t), n = -r / 2;
  e9.rect(n, n, r, r);
} }, TM = 0.8908130915292852, H_ = _c(wc / 10) / _c(7 * wc / 10), IM = _c(zu / 10) * H_, EM = -L_(zu / 10) * H_, $M = { draw(e9, t) {
  const r = hr(t * TM), n = IM * r, i = EM * r;
  e9.moveTo(0, -r), e9.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = zu * a / 5, s = L_(o), c = _c(o);
    e9.lineTo(c * r, -s * r), e9.lineTo(s * n - c * i, c * n + s * i);
  }
  e9.closePath();
} }, Nl = hr(3), MM = { draw(e9, t) {
  const r = -hr(t / (Nl * 3));
  e9.moveTo(0, r * 2), e9.lineTo(-Nl * r, -r), e9.lineTo(Nl * r, -r), e9.closePath();
} }, Le = -0.5, Fe = hr(3) / 2, Df = 1 / hr(12), DM = (Df / 2 + 1) * 3, NM = { draw(e9, t) {
  const r = hr(t / DM), n = r / 2, i = r * Df, a = n, o = r * Df + r, s = -a, c = o;
  e9.moveTo(n, i), e9.lineTo(a, o), e9.lineTo(s, c), e9.lineTo(Le * n - Fe * i, Fe * n + Le * i), e9.lineTo(Le * a - Fe * o, Fe * a + Le * o), e9.lineTo(Le * s - Fe * c, Fe * s + Le * c), e9.lineTo(Le * n + Fe * i, Le * i - Fe * n), e9.lineTo(Le * a + Fe * o, Le * o - Fe * a), e9.lineTo(Le * s + Fe * c, Le * c - Fe * s), e9.closePath();
} };
function CM(e9, t) {
  let r = null, n = Fd(i);
  e9 = typeof e9 == "function" ? e9 : jt(e9 || zd), t = typeof t == "function" ? t : jt(t === void 0 ? 64 : +t);
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
function Sc() {
}
function Oc(e9, t, r) {
  e9._context.bezierCurveTo((2 * e9._x0 + e9._x1) / 3, (2 * e9._y0 + e9._y1) / 3, (e9._x0 + 2 * e9._x1) / 3, (e9._y0 + 2 * e9._y1) / 3, (e9._x0 + 4 * e9._x1 + t) / 6, (e9._y0 + 4 * e9._y1 + r) / 6);
}
function K_(e9) {
  this._context = e9;
}
K_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      Oc(this, this._x1, this._y1);
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
      Oc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function jM(e9) {
  return new K_(e9);
}
function Y_(e9) {
  this._context = e9;
}
Y_.prototype = { areaStart: Sc, areaEnd: Sc, lineStart: function() {
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
      Oc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function BM(e9) {
  return new Y_(e9);
}
function X_(e9) {
  this._context = e9;
}
X_.prototype = { areaStart: function() {
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
      Oc(this, e9, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t;
} };
function RM(e9) {
  return new X_(e9);
}
function J_(e9) {
  this._context = e9;
}
J_.prototype = { areaStart: Sc, areaEnd: Sc, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e9, t) {
  e9 = +e9, t = +t, this._point ? this._context.lineTo(e9, t) : (this._point = 1, this._context.moveTo(e9, t));
} };
function kM(e9) {
  return new J_(e9);
}
function Ny(e9) {
  return e9 < 0 ? -1 : 1;
}
function Cy(e9, t, r) {
  var n = e9._x1 - e9._x0, i = t - e9._x1, a = (e9._y1 - e9._y0) / (n || i < 0 && -0), o = (r - e9._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (Ny(a) + Ny(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function jy(e9, t) {
  var r = e9._x1 - e9._x0;
  return r ? (3 * (e9._y1 - e9._y0) / r - t) / 2 : t;
}
function Cl(e9, t, r) {
  var n = e9._x0, i = e9._y0, a = e9._x1, o = e9._y1, s = (a - n) / 3;
  e9._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function xc(e9) {
  this._context = e9;
}
xc.prototype = { areaStart: function() {
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
      Cl(this, this._t0, jy(this, this._t0));
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
        this._point = 3, Cl(this, jy(this, r = Cy(this, e9, t)), r);
        break;
      default:
        Cl(this, this._t0, r = Cy(this, e9, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e9, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function Q_(e9) {
  this._context = new Z_(e9);
}
(Q_.prototype = Object.create(xc.prototype)).point = function(e9, t) {
  xc.prototype.point.call(this, t, e9);
};
function Z_(e9) {
  this._context = e9;
}
Z_.prototype = { moveTo: function(e9, t) {
  this._context.moveTo(t, e9);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e9, t) {
  this._context.lineTo(t, e9);
}, bezierCurveTo: function(e9, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e9, n, r, a, i);
} };
function LM(e9) {
  return new xc(e9);
}
function FM(e9) {
  return new Q_(e9);
}
function tw(e9) {
  this._context = e9;
}
tw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e9 = this._x, t = this._y, r = e9.length;
  if (r) if (this._line ? this._context.lineTo(e9[0], t[0]) : this._context.moveTo(e9[0], t[0]), r === 2) this._context.lineTo(e9[1], t[1]);
  else for (var n = By(e9), i = By(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e9[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e9, t) {
  this._x.push(+e9), this._y.push(+t);
} };
function By(e9) {
  var t, r = e9.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e9[0] + 2 * e9[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e9[t] + 2 * e9[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e9[r - 1] + e9[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e9[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e9[t + 1] - i[t + 1];
  return [i, a];
}
function UM(e9) {
  return new tw(e9);
}
function Vu(e9, t) {
  this._context = e9, this._t = t;
}
Vu.prototype = { areaStart: function() {
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
function zM(e9) {
  return new Vu(e9, 0.5);
}
function WM(e9) {
  return new Vu(e9, 0);
}
function VM(e9) {
  return new Vu(e9, 1);
}
function ki(e9, t) {
  if ((o = e9.length) > 1) for (var r = 1, n, i, a = e9[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e9[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Nf(e9) {
  for (var t = e9.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function qM(e9, t) {
  return e9[t];
}
function GM(e9) {
  const t = [];
  return t.key = e9, t;
}
function HM() {
  var e9 = jt([]), t = Nf, r = ki, n = qM;
  function i(a) {
    var o = Array.from(e9.apply(this, arguments), GM), s, c = o.length, u = -1, l;
    for (const f of a) for (s = 0, ++u; s < c; ++s) (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = Ud(t(o)); s < c; ++s) o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e9 = typeof a == "function" ? a : jt(Array.from(a)), i) : e9;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : jt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Nf : typeof a == "function" ? a : jt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? ki, i) : r;
  }, i;
}
function KM(e9, t) {
  if ((n = e9.length) > 0) {
    for (var r, n, i = 0, a = e9[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e9[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e9[r][i][1] /= o;
    }
    ki(e9, t);
  }
}
function YM(e9, t) {
  if ((i = e9.length) > 0) {
    for (var r = 0, n = e9[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e9[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    ki(e9, t);
  }
}
function XM(e9, t) {
  if (!(!((o = e9.length) > 0) || !((a = (i = e9[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e9[t[s]], f = l[n][1] || 0, h = l[n - 1][1] || 0, d = (f - h) / 2, y = 0; y < s; ++y) {
          var m = e9[t[y]], p = m[n][1] || 0, g = m[n - 1][1] || 0;
          d += p - g;
        }
        c += f, u += d * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= u / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, ki(e9, t);
  }
}
function uo(e9) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e9);
}
var JM = ["type", "size", "sizeType"];
function Cf() {
  return Cf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Cf.apply(this, arguments);
}
function Ry(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ky(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ry(Object(r), true).forEach(function(n) {
      QM(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function QM(e9, t, r) {
  return t = ZM(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function ZM(e9) {
  var t = tD(e9, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function tD(e9, t) {
  if (uo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function eD(e9, t) {
  if (e9 == null) return {};
  var r = rD(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function rD(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var ew = { symbolCircle: zd, symbolCross: OM, symbolDiamond: AM, symbolSquare: PM, symbolStar: $M, symbolTriangle: MM, symbolWye: NM }, nD = Math.PI / 180, iD = function(t) {
  var r = "symbol".concat(Uu(t));
  return ew[r] || zd;
}, aD = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * nD;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, oD = function(t, r) {
  ew["symbol".concat(Uu(t))] = r;
}, qu = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = eD(t, JM), u = ky(ky({}, c), {}, { type: n, size: a, sizeType: s }), l = function() {
    var p = iD(n), g = CM().type(p).size(aD(a, s, n));
    return g();
  }, f = u.className, h = u.cx, d = u.cy, y = ut(u, true);
  return h === +h && d === +d && a === +a ? A.createElement("path", Cf({}, y, { className: mt("recharts-symbols", f), transform: "translate(".concat(h, ", ").concat(d, ")"), d: l() })) : null;
};
qu.registerSymbol = oD;
function Li(e9) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e9);
}
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, jf.apply(this, arguments);
}
function Ly(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sD(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ly(Object(r), true).forEach(function(n) {
      lo(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Ly(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function cD(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function uD(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, nw(n.key), n);
  }
}
function lD(e9, t, r) {
  return t && uD(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function fD(e9, t, r) {
  return t = Ac(t), hD(e9, rw() ? Reflect.construct(t, r || [], Ac(e9).constructor) : t.apply(e9, r));
}
function hD(e9, t) {
  if (t && (Li(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return dD(e9);
}
function dD(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function rw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rw = function() {
    return !!e9;
  })();
}
function Ac(e9) {
  return Ac = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ac(e9);
}
function pD(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Bf(e9, t);
}
function Bf(e9, t) {
  return Bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bf(e9, t);
}
function lo(e9, t, r) {
  return t = nw(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function nw(e9) {
  var t = yD(e9, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function yD(e9, t) {
  if (Li(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Ue = 32, Wd = function(e9) {
  function t() {
    return cD(this, t), fD(this, t, arguments);
  }
  return pD(t, e9), lD(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Ue / 2, o = Ue / 6, s = Ue / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return A.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Ue, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return A.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ue, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return A.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"), className: "recharts-legend-icon" });
    if (A.isValidElement(n.legendIcon)) {
      var u = sD({}, n);
      return delete u.legendIcon, A.cloneElement(n.legendIcon, u);
    }
    return A.createElement(qu, { fill: c, cx: a, cy: a, size: Ue, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = { x: 0, y: 0, width: Ue, height: Ue }, f = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(d, y) {
      var m = d.formatter || c, p = mt(lo(lo({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", d.inactive));
      if (d.type === "none") return null;
      var g = lt(d.value) ? null : d.value;
      zr(!lt(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var _ = d.inactive ? u : d.color;
      return A.createElement("li", jf({ className: p, style: f, key: "legend-item-".concat(y) }, co(n.props, d, y)), A.createElement(Pf, { width: o, height: o, viewBox: l, style: h }, n.renderIcon(d)), A.createElement("span", { className: "recharts-legend-item-text", style: { color: _ } }, m ? m(g, d, y) : g));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return A.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(B.PureComponent);
lo(Wd, "displayName", "Legend");
lo(Wd, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var mD = Iu;
function vD() {
  this.__data__ = new mD(), this.size = 0;
}
var gD = vD;
function bD(e9) {
  var t = this.__data__, r = t.delete(e9);
  return this.size = t.size, r;
}
var _D = bD;
function wD(e9) {
  return this.__data__.get(e9);
}
var SD = wD;
function OD(e9) {
  return this.__data__.has(e9);
}
var xD = OD, AD = Iu, PD = Md, TD = Dd, ID = 200;
function ED(e9, t) {
  var r = this.__data__;
  if (r instanceof AD) {
    var n = r.__data__;
    if (!PD || n.length < ID - 1) return n.push([e9, t]), this.size = ++r.size, this;
    r = this.__data__ = new TD(n);
  }
  return r.set(e9, t), this.size = r.size, this;
}
var $D = ED, MD = Iu, DD = gD, ND = _D, CD = SD, jD = xD, BD = $D;
function ba(e9) {
  var t = this.__data__ = new MD(e9);
  this.size = t.size;
}
ba.prototype.clear = DD;
ba.prototype.delete = ND;
ba.prototype.get = CD;
ba.prototype.has = jD;
ba.prototype.set = BD;
var iw = ba, RD = "__lodash_hash_undefined__";
function kD(e9) {
  return this.__data__.set(e9, RD), this;
}
var LD = kD;
function FD(e9) {
  return this.__data__.has(e9);
}
var UD = FD, zD = Dd, WD = LD, VD = UD;
function Pc(e9) {
  var t = -1, r = e9 == null ? 0 : e9.length;
  for (this.__data__ = new zD(); ++t < r; ) this.add(e9[t]);
}
Pc.prototype.add = Pc.prototype.push = WD;
Pc.prototype.has = VD;
var aw = Pc;
function qD(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length; ++r < n; ) if (t(e9[r], r, e9)) return true;
  return false;
}
var ow = qD;
function GD(e9, t) {
  return e9.has(t);
}
var sw = GD, HD = aw, KD = ow, YD = sw, XD = 1, JD = 2;
function QD(e9, t, r, n, i, a) {
  var o = r & XD, s = e9.length, c = t.length;
  if (s != c && !(o && c > s)) return false;
  var u = a.get(e9), l = a.get(t);
  if (u && l) return u == t && l == e9;
  var f = -1, h = true, d = r & JD ? new HD() : void 0;
  for (a.set(e9, t), a.set(t, e9); ++f < s; ) {
    var y = e9[f], m = t[f];
    if (n) var p = o ? n(m, y, f, t, e9, a) : n(y, m, f, e9, t, a);
    if (p !== void 0) {
      if (p) continue;
      h = false;
      break;
    }
    if (d) {
      if (!KD(t, function(g, _) {
        if (!YD(d, _) && (y === g || i(y, g, r, n, a))) return d.push(_);
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
var cw = QD, ZD = $r, tN = ZD.Uint8Array, eN = tN;
function rN(e9) {
  var t = -1, r = Array(e9.size);
  return e9.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var nN = rN;
function iN(e9) {
  var t = -1, r = Array(e9.size);
  return e9.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Vd = iN, Fy = Zo, Uy = eN, aN = $d, oN = cw, sN = nN, cN = Vd, uN = 1, lN = 2, fN = "[object Boolean]", hN = "[object Date]", dN = "[object Error]", pN = "[object Map]", yN = "[object Number]", mN = "[object RegExp]", vN = "[object Set]", gN = "[object String]", bN = "[object Symbol]", _N = "[object ArrayBuffer]", wN = "[object DataView]", zy = Fy ? Fy.prototype : void 0, jl = zy ? zy.valueOf : void 0;
function SN(e9, t, r, n, i, a, o) {
  switch (r) {
    case wN:
      if (e9.byteLength != t.byteLength || e9.byteOffset != t.byteOffset) return false;
      e9 = e9.buffer, t = t.buffer;
    case _N:
      return !(e9.byteLength != t.byteLength || !a(new Uy(e9), new Uy(t)));
    case fN:
    case hN:
    case yN:
      return aN(+e9, +t);
    case dN:
      return e9.name == t.name && e9.message == t.message;
    case mN:
    case gN:
      return e9 == t + "";
    case pN:
      var s = sN;
    case vN:
      var c = n & uN;
      if (s || (s = cN), e9.size != t.size && !c) return false;
      var u = o.get(e9);
      if (u) return u == t;
      n |= lN, o.set(e9, t);
      var l = oN(s(e9), s(t), n, i, a, o);
      return o.delete(e9), l;
    case bN:
      if (jl) return jl.call(e9) == jl.call(t);
  }
  return false;
}
var ON = SN;
function xN(e9, t) {
  for (var r = -1, n = t.length, i = e9.length; ++r < n; ) e9[i + r] = t[r];
  return e9;
}
var uw = xN, AN = uw, PN = $e;
function TN(e9, t, r) {
  var n = t(e9);
  return PN(e9) ? n : AN(n, r(e9));
}
var IN = TN;
function EN(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length, i = 0, a = []; ++r < n; ) {
    var o = e9[r];
    t(o, r, e9) && (a[i++] = o);
  }
  return a;
}
var $N = EN;
function MN() {
  return [];
}
var DN = MN, NN = $N, CN = DN, jN = Object.prototype, BN = jN.propertyIsEnumerable, Wy = Object.getOwnPropertySymbols, RN = Wy ? function(e9) {
  return e9 == null ? [] : (e9 = Object(e9), NN(Wy(e9), function(t) {
    return BN.call(e9, t);
  }));
} : CN, kN = RN;
function LN(e9, t) {
  for (var r = -1, n = Array(e9); ++r < e9; ) n[r] = t(r);
  return n;
}
var FN = LN, UN = Qr, zN = Zr, WN = "[object Arguments]";
function VN(e9) {
  return zN(e9) && UN(e9) == WN;
}
var qN = VN, Vy = qN, GN = Zr, lw = Object.prototype, HN = lw.hasOwnProperty, KN = lw.propertyIsEnumerable, YN = Vy(/* @__PURE__ */ function() {
  return arguments;
}()) ? Vy : function(e9) {
  return GN(e9) && HN.call(e9, "callee") && !KN.call(e9, "callee");
}, qd = YN, Tc = { exports: {} };
function XN() {
  return false;
}
var JN = XN;
Tc.exports;
(function(e9, t) {
  var r = $r, n = JN, i = t && !t.nodeType && t, a = i && true && e9 && !e9.nodeType && e9, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e9.exports = u;
})(Tc, Tc.exports);
var fw = Tc.exports, QN = 9007199254740991, ZN = /^(?:0|[1-9]\d*)$/;
function tC(e9, t) {
  var r = typeof e9;
  return t = t ?? QN, !!t && (r == "number" || r != "symbol" && ZN.test(e9)) && e9 > -1 && e9 % 1 == 0 && e9 < t;
}
var Gd = tC, eC = 9007199254740991;
function rC(e9) {
  return typeof e9 == "number" && e9 > -1 && e9 % 1 == 0 && e9 <= eC;
}
var Hd = rC, nC = Qr, iC = Hd, aC = Zr, oC = "[object Arguments]", sC = "[object Array]", cC = "[object Boolean]", uC = "[object Date]", lC = "[object Error]", fC = "[object Function]", hC = "[object Map]", dC = "[object Number]", pC = "[object Object]", yC = "[object RegExp]", mC = "[object Set]", vC = "[object String]", gC = "[object WeakMap]", bC = "[object ArrayBuffer]", _C = "[object DataView]", wC = "[object Float32Array]", SC = "[object Float64Array]", OC = "[object Int8Array]", xC = "[object Int16Array]", AC = "[object Int32Array]", PC = "[object Uint8Array]", TC = "[object Uint8ClampedArray]", IC = "[object Uint16Array]", EC = "[object Uint32Array]", kt = {};
kt[wC] = kt[SC] = kt[OC] = kt[xC] = kt[AC] = kt[PC] = kt[TC] = kt[IC] = kt[EC] = true;
kt[oC] = kt[sC] = kt[bC] = kt[cC] = kt[_C] = kt[uC] = kt[lC] = kt[fC] = kt[hC] = kt[dC] = kt[pC] = kt[yC] = kt[mC] = kt[vC] = kt[gC] = false;
function $C(e9) {
  return aC(e9) && iC(e9.length) && !!kt[nC(e9)];
}
var MC = $C;
function DC(e9) {
  return function(t) {
    return e9(t);
  };
}
var hw = DC, Ic = { exports: {} };
Ic.exports;
(function(e9, t) {
  var r = b_, n = t && !t.nodeType && t, i = n && true && e9 && !e9.nodeType && e9, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e9.exports = s;
})(Ic, Ic.exports);
var NC = Ic.exports, CC = MC, jC = hw, qy = NC, Gy = qy && qy.isTypedArray, BC = Gy ? jC(Gy) : CC, dw = BC, RC = FN, kC = qd, LC = $e, FC = fw, UC = Gd, zC = dw, WC = Object.prototype, VC = WC.hasOwnProperty;
function qC(e9, t) {
  var r = LC(e9), n = !r && kC(e9), i = !r && !n && FC(e9), a = !r && !n && !i && zC(e9), o = r || n || i || a, s = o ? RC(e9.length, String) : [], c = s.length;
  for (var u in e9) (t || VC.call(e9, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || UC(u, c))) && s.push(u);
  return s;
}
var GC = qC, HC = Object.prototype;
function KC(e9) {
  var t = e9 && e9.constructor, r = typeof t == "function" && t.prototype || HC;
  return e9 === r;
}
var YC = KC;
function XC(e9, t) {
  return function(r) {
    return e9(t(r));
  };
}
var pw = XC, JC = pw, QC = JC(Object.keys, Object), ZC = QC, tj = YC, ej = ZC, rj = Object.prototype, nj = rj.hasOwnProperty;
function ij(e9) {
  if (!tj(e9)) return ej(e9);
  var t = [];
  for (var r in Object(e9)) nj.call(e9, r) && r != "constructor" && t.push(r);
  return t;
}
var aj = ij, oj = Ed, sj = Hd;
function cj(e9) {
  return e9 != null && sj(e9.length) && !oj(e9);
}
var ts = cj, uj = GC, lj = aj, fj = ts;
function hj(e9) {
  return fj(e9) ? uj(e9) : lj(e9);
}
var Gu = hj, dj = IN, pj = kN, yj = Gu;
function mj(e9) {
  return dj(e9, yj, pj);
}
var vj = mj, Hy = vj, gj = 1, bj = Object.prototype, _j = bj.hasOwnProperty;
function wj(e9, t, r, n, i, a) {
  var o = r & gj, s = Hy(e9), c = s.length, u = Hy(t), l = u.length;
  if (c != l && !o) return false;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in t : _j.call(t, h))) return false;
  }
  var d = a.get(e9), y = a.get(t);
  if (d && y) return d == t && y == e9;
  var m = true;
  a.set(e9, t), a.set(t, e9);
  for (var p = o; ++f < c; ) {
    h = s[f];
    var g = e9[h], _ = t[h];
    if (n) var w = o ? n(_, g, h, t, e9, a) : n(g, _, h, e9, t, a);
    if (!(w === void 0 ? g === _ || i(g, _, r, n, a) : w)) {
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
var Sj = wj, Oj = ei, xj = $r, Aj = Oj(xj, "DataView"), Pj = Aj, Tj = ei, Ij = $r, Ej = Tj(Ij, "Promise"), $j = Ej, Mj = ei, Dj = $r, Nj = Mj(Dj, "Set"), yw = Nj, Cj = ei, jj = $r, Bj = Cj(jj, "WeakMap"), Rj = Bj, Rf = Pj, kf = Md, Lf = $j, Ff = yw, Uf = Rj, mw = Qr, _a = w_, Ky = "[object Map]", kj = "[object Object]", Yy = "[object Promise]", Xy = "[object Set]", Jy = "[object WeakMap]", Qy = "[object DataView]", Lj = _a(Rf), Fj = _a(kf), Uj = _a(Lf), zj = _a(Ff), Wj = _a(Uf), Dn = mw;
(Rf && Dn(new Rf(new ArrayBuffer(1))) != Qy || kf && Dn(new kf()) != Ky || Lf && Dn(Lf.resolve()) != Yy || Ff && Dn(new Ff()) != Xy || Uf && Dn(new Uf()) != Jy) && (Dn = function(e9) {
  var t = mw(e9), r = t == kj ? e9.constructor : void 0, n = r ? _a(r) : "";
  if (n) switch (n) {
    case Lj:
      return Qy;
    case Fj:
      return Ky;
    case Uj:
      return Yy;
    case zj:
      return Xy;
    case Wj:
      return Jy;
  }
  return t;
});
var Vj = Dn, Bl = iw, qj = cw, Gj = ON, Hj = Sj, Zy = Vj, tm = $e, em = fw, Kj = dw, Yj = 1, rm = "[object Arguments]", nm = "[object Array]", fs = "[object Object]", Xj = Object.prototype, im = Xj.hasOwnProperty;
function Jj(e9, t, r, n, i, a) {
  var o = tm(e9), s = tm(t), c = o ? nm : Zy(e9), u = s ? nm : Zy(t);
  c = c == rm ? fs : c, u = u == rm ? fs : u;
  var l = c == fs, f = u == fs, h = c == u;
  if (h && em(e9)) {
    if (!em(t)) return false;
    o = true, l = false;
  }
  if (h && !l) return a || (a = new Bl()), o || Kj(e9) ? qj(e9, t, r, n, i, a) : Gj(e9, t, c, r, n, i, a);
  if (!(r & Yj)) {
    var d = l && im.call(e9, "__wrapped__"), y = f && im.call(t, "__wrapped__");
    if (d || y) {
      var m = d ? e9.value() : e9, p = y ? t.value() : t;
      return a || (a = new Bl()), i(m, p, r, n, a);
    }
  }
  return h ? (a || (a = new Bl()), Hj(e9, t, r, n, i, a)) : false;
}
var Qj = Jj, Zj = Qj, am = Zr;
function vw(e9, t, r, n, i) {
  return e9 === t ? true : e9 == null || t == null || !am(e9) && !am(t) ? e9 !== e9 && t !== t : Zj(e9, t, r, n, vw, i);
}
var Kd = vw, t2 = iw, e22 = Kd, r2 = 1, n2 = 2;
function i2(e9, t, r, n) {
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
      var f = new t2();
      if (n) var h = n(u, l, c, e9, t, f);
      if (!(h === void 0 ? e22(l, u, r2 | n2, n, f) : h)) return false;
    }
  }
  return true;
}
var a2 = i2, o2 = bn;
function s2(e9) {
  return e9 === e9 && !o2(e9);
}
var gw = s2, c2 = gw, u2 = Gu;
function l2(e9) {
  for (var t = u2(e9), r = t.length; r--; ) {
    var n = t[r], i = e9[n];
    t[r] = [n, i, c2(i)];
  }
  return t;
}
var f2 = l2;
function h2(e9, t) {
  return function(r) {
    return r == null ? false : r[e9] === t && (t !== void 0 || e9 in Object(r));
  };
}
var bw = h2, d2 = a2, p2 = f2, y2 = bw;
function m2(e9) {
  var t = p2(e9);
  return t.length == 1 && t[0][2] ? y2(t[0][0], t[0][1]) : function(r) {
    return r === e9 || d2(r, e9, t);
  };
}
var v2 = m2;
function g2(e9, t) {
  return e9 != null && t in Object(e9);
}
var b2 = g2, _2 = P_, w2 = qd, S2 = $e, O2 = Gd, x2 = Hd, A2 = $u;
function P2(e9, t, r) {
  t = _2(t, e9);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = A2(t[n]);
    if (!(a = e9 != null && r(e9, o))) break;
    e9 = e9[o];
  }
  return a || ++n != i ? a : (i = e9 == null ? 0 : e9.length, !!i && x2(i) && O2(o, i) && (S2(e9) || w2(e9)));
}
var T2 = P2, I2 = b2, E2 = T2;
function $2(e9, t) {
  return e9 != null && E2(e9, t, I2);
}
var M2 = $2, D2 = Kd, N2 = T_, C2 = M2, j2 = Id, B2 = gw, R2 = bw, k2 = $u, L2 = 1, F2 = 2;
function U2(e9, t) {
  return j2(e9) && B2(t) ? R2(k2(e9), t) : function(r) {
    var n = N2(r, e9);
    return n === void 0 && n === t ? C2(r, e9) : D2(t, n, L2 | F2);
  };
}
var z2 = U2;
function W2(e9) {
  return e9;
}
var wa = W2;
function V2(e9) {
  return function(t) {
    return t == null ? void 0 : t[e9];
  };
}
var q2 = V2, G2 = jd;
function H2(e9) {
  return function(t) {
    return G2(t, e9);
  };
}
var K2 = H2, Y2 = q2, X2 = K2, J2 = Id, Q2 = $u;
function Z2(e9) {
  return J2(e9) ? Y2(Q2(e9)) : X2(e9);
}
var tB = Z2, eB = v2, rB = z2, nB = wa, iB = $e, aB = tB;
function oB(e9) {
  return typeof e9 == "function" ? e9 : e9 == null ? nB : typeof e9 == "object" ? iB(e9) ? rB(e9[0], e9[1]) : eB(e9) : aB(e9);
}
var _n = oB;
function sB(e9, t, r, n) {
  for (var i = e9.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e9[a], a, e9)) return a;
  return -1;
}
var _w = sB;
function cB(e9) {
  return e9 !== e9;
}
var uB = cB;
function lB(e9, t, r) {
  for (var n = r - 1, i = e9.length; ++n < i; ) if (e9[n] === t) return n;
  return -1;
}
var fB = lB, hB = _w, dB = uB, pB = fB;
function yB(e9, t, r) {
  return t === t ? pB(e9, t, r) : hB(e9, dB, r);
}
var mB = yB, vB = mB;
function gB(e9, t) {
  var r = e9 == null ? 0 : e9.length;
  return !!r && vB(e9, t, 0) > -1;
}
var bB = gB;
function _B(e9, t, r) {
  for (var n = -1, i = e9 == null ? 0 : e9.length; ++n < i; ) if (r(t, e9[n])) return true;
  return false;
}
var wB = _B;
function SB() {
}
var OB = SB, Rl = yw, xB = OB, AB = Vd, PB = 1 / 0, TB = Rl && 1 / AB(new Rl([, -0]))[1] == PB ? function(e9) {
  return new Rl(e9);
} : xB, IB = TB, EB = aw, $B = bB, MB = wB, DB = sw, NB = IB, CB = Vd, jB = 200;
function BB(e9, t, r) {
  var n = -1, i = $B, a = e9.length, o = true, s = [], c = s;
  if (r) o = false, i = MB;
  else if (a >= jB) {
    var u = t ? null : NB(e9);
    if (u) return CB(u);
    o = false, i = DB, c = new EB();
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
var RB = BB, kB = _n, LB = RB;
function FB(e9, t) {
  return e9 && e9.length ? LB(e9, kB(t)) : [];
}
var UB = FB;
const om = Bt(UB);
function ww(e9, t, r) {
  return t === true ? om(e9, r) : lt(t) ? om(e9, t) : e9;
}
function Fi(e9) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e9);
}
var zB = ["ref"];
function sm(e9, t) {
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
    t % 2 ? sm(Object(r), true).forEach(function(n) {
      Hu(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function WB(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cm(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, Ow(n.key), n);
  }
}
function VB(e9, t, r) {
  return t && cm(e9.prototype, t), r && cm(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function qB(e9, t, r) {
  return t = Ec(t), GB(e9, Sw() ? Reflect.construct(t, r || [], Ec(e9).constructor) : t.apply(e9, r));
}
function GB(e9, t) {
  if (t && (Fi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return HB(e9);
}
function HB(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function Sw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Sw = function() {
    return !!e9;
  })();
}
function Ec(e9) {
  return Ec = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ec(e9);
}
function KB(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && zf(e9, t);
}
function zf(e9, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zf(e9, t);
}
function Hu(e9, t, r) {
  return t = Ow(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Ow(e9) {
  var t = YB(e9, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function YB(e9, t) {
  if (Fi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function XB(e9, t) {
  if (e9 == null) return {};
  var r = JB(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function JB(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function QB(e9) {
  return e9.value;
}
function ZB(e9, t) {
  if (A.isValidElement(e9)) return A.cloneElement(e9, t);
  if (typeof e9 == "function") return A.createElement(e9, t);
  t.ref;
  var r = XB(t, zB);
  return A.createElement(Wd, r);
}
var um = 1, Un = function(e9) {
  function t() {
    var r;
    WB(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = qB(this, t, [].concat(i)), Hu(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return KB(t, e9), VB(t, [{ key: "componentDidMount", value: function() {
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
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > um || Math.abs(i.height - this.lastBoundingBox.height) > um) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
    } }, ZB(a, Mr(Mr({}, this.props), {}, { payload: ww(l, u, QB) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = Mr(Mr({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && L(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(B.PureComponent);
Hu(Un, "displayName", "Legend");
Hu(Un, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var lm = Zo, tR = qd, eR = $e, fm = lm ? lm.isConcatSpreadable : void 0;
function rR(e9) {
  return eR(e9) || tR(e9) || !!(fm && e9 && e9[fm]);
}
var nR = rR, iR = uw, aR = nR;
function xw(e9, t, r, n, i) {
  var a = -1, o = e9.length;
  for (r || (r = aR), i || (i = []); ++a < o; ) {
    var s = e9[a];
    t > 0 && r(s) ? t > 1 ? xw(s, t - 1, r, n, i) : iR(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var Aw = xw;
function oR(e9) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e9 ? s : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var sR = oR, cR = sR, uR = cR(), lR = uR, fR = lR, hR = Gu;
function dR(e9, t) {
  return e9 && fR(e9, t, hR);
}
var Pw = dR, pR = ts;
function yR(e9, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!pR(r)) return e9(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var mR = yR, vR = Pw, gR = mR, bR = gR(vR), Yd = bR, _R = Yd, wR = ts;
function SR(e9, t) {
  var r = -1, n = wR(e9) ? Array(e9.length) : [];
  return _R(e9, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Tw = SR;
function OR(e9, t) {
  var r = e9.length;
  for (e9.sort(t); r--; ) e9[r] = e9[r].value;
  return e9;
}
var xR = OR, hm = da;
function AR(e9, t) {
  if (e9 !== t) {
    var r = e9 !== void 0, n = e9 === null, i = e9 === e9, a = hm(e9), o = t !== void 0, s = t === null, c = t === t, u = hm(t);
    if (!s && !u && !a && e9 > t || a && o && c && !s && !u || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !u && e9 < t || u && r && i && !n && !a || s && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var PR = AR, TR = PR;
function IR(e9, t, r) {
  for (var n = -1, i = e9.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = TR(i[n], a[n]);
    if (c) {
      if (n >= s) return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e9.index - t.index;
}
var ER = IR, kl = Cd, $R = jd, MR = _n, DR = Tw, NR = xR, CR = hw, jR = ER, BR = wa, RR = $e;
function kR(e9, t, r) {
  t.length ? t = kl(t, function(a) {
    return RR(a) ? function(o) {
      return $R(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [BR];
  var n = -1;
  t = kl(t, CR(MR));
  var i = DR(e9, function(a, o, s) {
    var c = kl(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return NR(i, function(a, o) {
    return jR(a, o, r);
  });
}
var LR = kR;
function FR(e9, t, r) {
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
var UR = FR, zR = UR, dm = Math.max;
function WR(e9, t, r) {
  return t = dm(t === void 0 ? e9.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = dm(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), zR(e9, this, s);
  };
}
var VR = WR;
function qR(e9) {
  return function() {
    return e9;
  };
}
var GR = qR, HR = ei, KR = function() {
  try {
    var e9 = HR(Object, "defineProperty");
    return e9({}, "", {}), e9;
  } catch {
  }
}(), Iw = KR, YR = GR, pm = Iw, XR = wa, JR = pm ? function(e9, t) {
  return pm(e9, "toString", { configurable: true, enumerable: false, value: YR(t), writable: true });
} : XR, QR = JR, ZR = 800, tk = 16, ek = Date.now;
function rk(e9) {
  var t = 0, r = 0;
  return function() {
    var n = ek(), i = tk - (n - r);
    if (r = n, i > 0) {
      if (++t >= ZR) return arguments[0];
    } else t = 0;
    return e9.apply(void 0, arguments);
  };
}
var nk = rk, ik = QR, ak = nk, ok = ak(ik), sk = ok, ck = wa, uk = VR, lk = sk;
function fk(e9, t) {
  return lk(uk(e9, t, ck), e9 + "");
}
var hk = fk, dk = $d, pk = ts, yk = Gd, mk = bn;
function vk(e9, t, r) {
  if (!mk(r)) return false;
  var n = typeof t;
  return (n == "number" ? pk(r) && yk(t, r.length) : n == "string" && t in r) ? dk(r[t], e9) : false;
}
var Ku = vk, gk = Aw, bk = LR, _k = hk, ym = Ku, wk = _k(function(e9, t) {
  if (e9 == null) return [];
  var r = t.length;
  return r > 1 && ym(e9, t[0], t[1]) ? t = [] : r > 2 && ym(t[0], t[1], t[2]) && (t = [t[0]]), bk(e9, gk(t, 1), []);
}), Sk = wk;
const Xd = Bt(Sk);
function fo(e9) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e9);
}
function Wf() {
  return Wf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Wf.apply(this, arguments);
}
function Ok(e9, t) {
  return Tk(e9) || Pk(e9, t) || Ak(e9, t) || xk();
}
function xk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ak(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return mm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mm(e9, t);
  }
}
function mm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Pk(e9, t) {
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
function Tk(e9) {
  if (Array.isArray(e9)) return e9;
}
function vm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ll(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), true).forEach(function(n) {
      Ik(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Ik(e9, t, r) {
  return t = Ek(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Ek(e9) {
  var t = $k(e9, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function $k(e9, t) {
  if (fo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Mk(e9) {
  return Array.isArray(e9) && ie(e9[0]) && ie(e9[1]) ? e9.join(" ~ ") : e9;
}
var Dk = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, g = t.accessibilityLayer, _ = g === void 0 ? false : g, w = function() {
    if (l && l.length) {
      var I = { padding: 0, margin: 0 }, j = (h ? Xd(l, h) : l).map(function(N, M) {
        if (N.type === "none") return null;
        var C = Ll({ display: "block", paddingTop: 4, paddingBottom: 4, color: N.color || "#000" }, s), R = N.formatter || f || Mk, F = N.value, U = N.name, q = F, nt = U;
        if (R && q != null && nt != null) {
          var W = R(F, U, N, M, l);
          if (Array.isArray(W)) {
            var at = Ok(W, 2);
            q = at[0], nt = at[1];
          } else q = W;
        }
        return A.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: C }, ie(nt) ? A.createElement("span", { className: "recharts-tooltip-item-name" }, nt) : null, ie(nt) ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, A.createElement("span", { className: "recharts-tooltip-item-value" }, q), A.createElement("span", { className: "recharts-tooltip-item-unit" }, N.unit || ""));
      });
      return A.createElement("ul", { className: "recharts-tooltip-item-list", style: I }, j);
    }
    return null;
  }, S = Ll({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), v = Ll({ margin: 0 }, u), b = !ct(m), O = b ? m : "", P = mt("recharts-default-tooltip", d), T = mt("recharts-tooltip-label", y);
  b && p && l !== void 0 && l !== null && (O = p(m, l));
  var $ = _ ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement("div", Wf({ className: P, style: S }, $), A.createElement("p", { className: T, style: v }, A.isValidElement(O) ? O : "".concat(O)), w());
};
function ho(e9) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e9);
}
function hs(e9, t, r) {
  return t = Nk(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Nk(e9) {
  var t = Ck(e9, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function Ck(e9, t) {
  if (ho(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var $a = "recharts-tooltip-wrapper", jk = { visibility: "hidden" };
function Bk(e9) {
  var t = e9.coordinate, r = e9.translateX, n = e9.translateY;
  return mt($a, hs(hs(hs(hs({}, "".concat($a, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat($a, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat($a, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat($a, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function gm(e9) {
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
function Rk(e9) {
  var t = e9.translateX, r = e9.translateY, n = e9.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function kk(e9) {
  var t = e9.allowEscapeViewBox, r = e9.coordinate, n = e9.offsetTopLeft, i = e9.position, a = e9.reverseDirection, o = e9.tooltipBox, s = e9.useTranslate3d, c = e9.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = gm({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), f = gm({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), u = Rk({ translateX: l, translateY: f, useTranslate3d: s })) : u = jk, { cssProperties: u, cssClasses: Bk({ translateX: l, translateY: f, coordinate: r }) };
}
function Ui(e9) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e9);
}
function bm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _m(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), true).forEach(function(n) {
      qf(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Lk(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fk(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, $w(n.key), n);
  }
}
function Uk(e9, t, r) {
  return t && Fk(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function zk(e9, t, r) {
  return t = $c(t), Wk(e9, Ew() ? Reflect.construct(t, r || [], $c(e9).constructor) : t.apply(e9, r));
}
function Wk(e9, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Vk(e9);
}
function Vk(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function Ew() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ew = function() {
    return !!e9;
  })();
}
function $c(e9) {
  return $c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $c(e9);
}
function qk(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Vf(e9, t);
}
function Vf(e9, t) {
  return Vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vf(e9, t);
}
function qf(e9, t, r) {
  return t = $w(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function $w(e9) {
  var t = Gk(e9, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function Gk(e9, t) {
  if (Ui(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var wm = 1, Hk = function(e9) {
  function t() {
    var r;
    Lk(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = zk(this, t, [].concat(i)), qf(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), qf(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0, y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return qk(t, e9), Uk(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > wm || Math.abs(n.height - this.state.lastBoundingBox.height) > wm) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, m = i.reverseDirection, p = i.useTranslate3d, g = i.viewBox, _ = i.wrapperStyle, w = kk({ allowEscapeViewBox: o, coordinate: l, offsetTopLeft: d, position: y, reverseDirection: m, tooltipBox: this.state.lastBoundingBox, useTranslate3d: p, viewBox: g }), S = w.cssClasses, v = w.cssProperties, b = _m(_m({ transition: h && a ? "transform ".concat(s, "ms ").concat(c) : void 0 }, v), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, _);
    return A.createElement("div", { tabIndex: -1, className: S, style: b, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(B.PureComponent), Kk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wn = { isSsr: Kk() };
function zi(e9) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e9);
}
function Sm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Om(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), true).forEach(function(n) {
      Jd(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Yk(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Xk(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, Dw(n.key), n);
  }
}
function Jk(e9, t, r) {
  return t && Xk(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function Qk(e9, t, r) {
  return t = Mc(t), Zk(e9, Mw() ? Reflect.construct(t, r || [], Mc(e9).constructor) : t.apply(e9, r));
}
function Zk(e9, t) {
  if (t && (zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tL(e9);
}
function tL(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function Mw() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mw = function() {
    return !!e9;
  })();
}
function Mc(e9) {
  return Mc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mc(e9);
}
function eL(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Gf(e9, t);
}
function Gf(e9, t) {
  return Gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gf(e9, t);
}
function Jd(e9, t, r) {
  return t = Dw(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function Dw(e9) {
  var t = rL(e9, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function rL(e9, t) {
  if (zi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function nL(e9) {
  return e9.dataKey;
}
function iL(e9, t) {
  return A.isValidElement(e9) ? A.cloneElement(e9, t) : typeof e9 == "function" ? A.createElement(e9, t) : A.createElement(Dk, t);
}
var nr = function(e9) {
  function t() {
    return Yk(this, t), Qk(this, t, arguments);
  }
  return eL(t, e9), Jk(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, m = i.payloadUniqBy, p = i.position, g = i.reverseDirection, _ = i.useTranslate3d, w = i.viewBox, S = i.wrapperStyle, v = y ?? [];
    f && v.length && (v = ww(y.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), m, nL));
    var b = v.length > 0;
    return A.createElement(Hk, { allowEscapeViewBox: o, animationDuration: s, animationEasing: c, isAnimationActive: h, active: a, coordinate: l, hasPayload: b, offset: d, position: p, reverseDirection: g, useTranslate3d: _, viewBox: w, wrapperStyle: S }, iL(u, Om(Om({}, this.props), {}, { payload: v })));
  } }]);
}(B.PureComponent);
Jd(nr, "displayName", "Tooltip");
Jd(nr, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !wn.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var aL = $r, oL = function() {
  return aL.Date.now();
}, sL = oL, cL = /\s/;
function uL(e9) {
  for (var t = e9.length; t-- && cL.test(e9.charAt(t)); ) ;
  return t;
}
var lL = uL, fL = lL, hL = /^\s+/;
function dL(e9) {
  return e9 && e9.slice(0, fL(e9) + 1).replace(hL, "");
}
var pL = dL, yL = pL, xm = bn, mL = da, Am = NaN, vL = /^[-+]0x[0-9a-f]+$/i, gL = /^0b[01]+$/i, bL = /^0o[0-7]+$/i, _L = parseInt;
function wL(e9) {
  if (typeof e9 == "number") return e9;
  if (mL(e9)) return Am;
  if (xm(e9)) {
    var t = typeof e9.valueOf == "function" ? e9.valueOf() : e9;
    e9 = xm(t) ? t + "" : t;
  }
  if (typeof e9 != "string") return e9 === 0 ? e9 : +e9;
  e9 = yL(e9);
  var r = gL.test(e9);
  return r || bL.test(e9) ? _L(e9.slice(2), r ? 2 : 8) : vL.test(e9) ? Am : +e9;
}
var Nw = wL, SL = bn, Fl = sL, Pm = Nw, OL = "Expected a function", xL = Math.max, AL = Math.min;
function PL(e9, t, r) {
  var n, i, a, o, s, c, u = 0, l = false, f = false, h = true;
  if (typeof e9 != "function") throw new TypeError(OL);
  t = Pm(t) || 0, SL(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? xL(Pm(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var O = n, P = i;
    return n = i = void 0, u = b, o = e9.apply(P, O), o;
  }
  function y(b) {
    return u = b, s = setTimeout(g, t), l ? d(b) : o;
  }
  function m(b) {
    var O = b - c, P = b - u, T = t - O;
    return f ? AL(T, a - P) : T;
  }
  function p(b) {
    var O = b - c, P = b - u;
    return c === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function g() {
    var b = Fl();
    if (p(b)) return _(b);
    s = setTimeout(g, m(b));
  }
  function _(b) {
    return s = void 0, h && n ? d(b) : (n = i = void 0, o);
  }
  function w() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function S() {
    return s === void 0 ? o : _(Fl());
  }
  function v() {
    var b = Fl(), O = p(b);
    if (n = arguments, i = this, c = b, O) {
      if (s === void 0) return y(c);
      if (f) return clearTimeout(s), s = setTimeout(g, t), d(c);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return v.cancel = w, v.flush = S, v;
}
var TL = PL, IL = TL, EL = bn, $L = "Expected a function";
function ML(e9, t, r) {
  var n = true, i = true;
  if (typeof e9 != "function") throw new TypeError($L);
  return EL(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), IL(e9, t, { leading: n, maxWait: t, trailing: i });
}
var DL = ML;
const Cw = Bt(DL);
function po(e9) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e9);
}
function Tm(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ds(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tm(Object(r), true).forEach(function(n) {
      NL(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function NL(e9, t, r) {
  return t = CL(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function CL(e9) {
  var t = jL(e9, "string");
  return po(t) == "symbol" ? t : t + "";
}
function jL(e9, t) {
  if (po(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function BL(e9, t) {
  return FL(e9) || LL(e9, t) || kL(e9, t) || RL();
}
function RL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kL(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Im(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Im(e9, t);
  }
}
function Im(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function LL(e9, t) {
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
function FL(e9) {
  if (Array.isArray(e9)) return e9;
}
var Em = B.forwardRef(function(e9, t) {
  var r = e9.aspect, n = e9.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e9.width, o = a === void 0 ? "100%" : a, s = e9.height, c = s === void 0 ? "100%" : s, u = e9.minWidth, l = u === void 0 ? 0 : u, f = e9.minHeight, h = e9.maxHeight, d = e9.children, y = e9.debounce, m = y === void 0 ? 0 : y, p = e9.id, g = e9.className, _ = e9.onResize, w = e9.style, S = w === void 0 ? {} : w, v = B.useRef(null), b = B.useRef();
  b.current = _, B.useImperativeHandle(t, function() {
    return Object.defineProperty(v.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), v.current;
    }, configurable: true });
  });
  var O = B.useState({ containerWidth: i.width, containerHeight: i.height }), P = BL(O, 2), T = P[0], $ = P[1], E = B.useCallback(function(j, N) {
    $(function(M) {
      var C = Math.round(j), R = Math.round(N);
      return M.containerWidth === C && M.containerHeight === R ? M : { containerWidth: C, containerHeight: R };
    });
  }, []);
  B.useEffect(function() {
    var j = function(U) {
      var q, nt = U[0].contentRect, W = nt.width, at = nt.height;
      E(W, at), (q = b.current) === null || q === void 0 || q.call(b, W, at);
    };
    m > 0 && (j = Cw(j, m, { trailing: true, leading: false }));
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
  return A.createElement("div", { id: p ? "".concat(p) : void 0, className: mt("recharts-responsive-container", g), style: ds(ds({}, S), {}, { width: o, height: c, minWidth: l, minHeight: f, maxHeight: h }), ref: v }, I);
}), Qd = function(t) {
  return null;
};
Qd.displayName = "Cell";
function yo(e9) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e9);
}
function $m(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hf(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), true).forEach(function(n) {
      UL(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function UL(e9, t, r) {
  return t = zL(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function zL(e9) {
  var t = WL(e9, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function WL(e9, t) {
  if (yo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var ci = { widthCache: {}, cacheCount: 0 }, VL = 2e3, qL = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Mm = "recharts_measurement_span";
function GL(e9) {
  var t = Hf({}, e9);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Ya = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || wn.isSsr) return { width: 0, height: 0 };
  var n = GL(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (ci.widthCache[i]) return ci.widthCache[i];
  try {
    var a = document.getElementById(Mm);
    a || (a = document.createElement("span"), a.setAttribute("id", Mm), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Hf(Hf({}, qL), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = { width: s.width, height: s.height };
    return ci.widthCache[i] = c, ++ci.cacheCount > VL && (ci.cacheCount = 0, ci.widthCache = {}), c;
  } catch {
    return { width: 0, height: 0 };
  }
}, HL = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function mo(e9) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e9);
}
function Dc(e9, t) {
  return JL(e9) || XL(e9, t) || YL(e9, t) || KL();
}
function KL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YL(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Dm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dm(e9, t);
  }
}
function Dm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function XL(e9, t) {
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
function JL(e9) {
  if (Array.isArray(e9)) return e9;
}
function QL(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Nm(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, tF(n.key), n);
  }
}
function ZL(e9, t, r) {
  return t && Nm(e9.prototype, t), r && Nm(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function tF(e9) {
  var t = eF(e9, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function eF(e9, t) {
  if (mo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Cm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, jm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, rF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, nF = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, jw = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, iF = Object.keys(jw), Oi = "NaN";
function aF(e9, t) {
  return e9 * jw[t];
}
var ps = function() {
  function e9(t, r) {
    QL(this, e9), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !rF.test(r) && (this.num = NaN, this.unit = ""), iF.includes(r) && (this.num = aF(t, r), this.unit = "px");
  }
  return ZL(e9, [{ key: "add", value: function(r) {
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
    var n, i = (n = nF.exec(r)) !== null && n !== void 0 ? n : [], a = Dc(i, 3), o = a[1], s = a[2];
    return new e9(parseFloat(o), s ?? "");
  } }]);
}();
function Bw(e9) {
  if (e9.includes(Oi)) return Oi;
  for (var t = e9; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Cm.exec(t)) !== null && r !== void 0 ? r : [], i = Dc(n, 4), a = i[1], o = i[2], s = i[3], c = ps.parse(a ?? ""), u = ps.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return Oi;
    t = t.replace(Cm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, h = (f = jm.exec(t)) !== null && f !== void 0 ? f : [], d = Dc(h, 4), y = d[1], m = d[2], p = d[3], g = ps.parse(y ?? ""), _ = ps.parse(p ?? ""), w = m === "+" ? g.add(_) : g.subtract(_);
    if (w.isNaN()) return Oi;
    t = t.replace(jm, w.toString());
  }
  return t;
}
var Bm = /\(([^()]*)\)/;
function oF(e9) {
  for (var t = e9; t.includes("("); ) {
    var r = Bm.exec(t), n = Dc(r, 2), i = n[1];
    t = t.replace(Bm, Bw(i));
  }
  return t;
}
function sF(e9) {
  var t = e9.replace(/\s+/g, "");
  return t = oF(t), t = Bw(t), t;
}
function cF(e9) {
  try {
    return sF(e9);
  } catch {
    return Oi;
  }
}
function Ul(e9) {
  var t = cF(e9.slice(5, -1));
  return t === Oi ? "" : t;
}
var uF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], lF = ["dx", "dy", "angle", "className", "breakAll"];
function Kf() {
  return Kf = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Kf.apply(this, arguments);
}
function Rm(e9, t) {
  if (e9 == null) return {};
  var r = fF(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function fF(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function km(e9, t) {
  return yF(e9) || pF(e9, t) || dF(e9, t) || hF();
}
function hF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dF(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Lm(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lm(e9, t);
  }
}
function Lm(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function pF(e9, t) {
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
function yF(e9) {
  if (Array.isArray(e9)) return e9;
}
var Rw = /[ \f\n\r\t\v\u2028\u2029]+/, kw = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    ct(r) || (n ? a = r.toString().split("") : a = r.toString().split(Rw));
    var o = a.map(function(c) {
      return { word: c, width: Ya(c, i).width };
    }), s = n ? 0 : Ya("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, mF = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = L(o), f = s, h = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(C, R) {
      var F = R.word, U = R.width, q = C[C.length - 1];
      if (q && (i == null || a || q.width + U + n < Number(i))) q.words.push(F), q.width += U + n;
      else {
        var nt = { words: [F], width: U };
        C.push(nt);
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
    var C = f.slice(0, M), R = kw({ breakAll: u, style: c, children: C + m }).wordsWithComputedWidth, F = h(R), U = F.length > o || y(F).width > Number(i);
    return [U, F];
  }, g = 0, _ = f.length - 1, w = 0, S; g <= _ && w <= f.length - 1; ) {
    var v = Math.floor((g + _) / 2), b = v - 1, O = p(b), P = km(O, 2), T = P[0], $ = P[1], E = p(v), I = km(E, 1), j = I[0];
    if (!T && !j && (g = v + 1), T && j && (_ = v - 1), !T && j) {
      S = $;
      break;
    }
    w++;
  }
  return S || d;
}, Fm = function(t) {
  var r = ct(t) ? [] : t.toString().split(Rw);
  return [{ words: r }];
}, vF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !wn.isSsr) {
    var c, u, l = kw({ breakAll: o, children: i, style: a });
    if (l) {
      var f = l.wordsWithComputedWidth, h = l.spaceWidth;
      c = f, u = h;
    } else return Fm(i);
    return mF({ breakAll: o, children: i, maxLines: s, style: a }, c, u, r, n);
  }
  return Fm(i);
}, Um = "#808080", Nc = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? false : l, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, g = p === void 0 ? Um : p, _ = Rm(t, uF), w = B.useMemo(function() {
    return vF({ breakAll: _.breakAll, children: _.children, maxLines: _.maxLines, scaleToFit: f, style: _.style, width: _.width });
  }, [_.breakAll, _.children, _.maxLines, f, _.style, _.width]), S = _.dx, v = _.dy, b = _.angle, O = _.className, P = _.breakAll, T = Rm(_, lF);
  if (!ie(n) || !ie(a)) return null;
  var $ = n + (L(S) ? S : 0), E = a + (L(v) ? v : 0), I;
  switch (m) {
    case "start":
      I = Ul("calc(".concat(u, ")"));
      break;
    case "middle":
      I = Ul("calc(".concat((w.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      I = Ul("calc(".concat(w.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var N = w[0].width, M = _.width;
    j.push("scale(".concat((L(M) ? M / N : 1) / N, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat($, ", ").concat(E, ")")), j.length && (T.transform = j.join(" ")), A.createElement("text", Kf({}, ut(T, true), { x: $, y: E, className: mt("recharts-text", O), textAnchor: d, fill: g.includes("url") ? Um : g }), w.map(function(C, R) {
    var F = C.words.join(P ? "" : " ");
    return A.createElement("tspan", { x: $, dy: R === 0 ? I : s, key: "".concat(F, "-").concat(R) }, F);
  }));
};
function dn(e9, t) {
  return e9 == null || t == null ? NaN : e9 < t ? -1 : e9 > t ? 1 : e9 >= t ? 0 : NaN;
}
function gF(e9, t) {
  return e9 == null || t == null ? NaN : t < e9 ? -1 : t > e9 ? 1 : t >= e9 ? 0 : NaN;
}
function Zd(e9) {
  let t, r, n;
  e9.length !== 2 ? (t = dn, r = (s, c) => dn(e9(s), c), n = (s, c) => e9(s) - c) : (t = e9 === dn || e9 === gF ? e9 : bF, r = e9, n = e9);
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
function bF() {
  return 0;
}
function Lw(e9) {
  return e9 === null ? NaN : +e9;
}
function* _F(e9, t) {
  for (let r of e9) r != null && (r = +r) >= r && (yield r);
}
const wF = Zd(dn), es = wF.right;
Zd(Lw).center;
class zm extends Map {
  constructor(t, r = xF) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Wm(this, t));
  }
  has(t) {
    return super.has(Wm(this, t));
  }
  set(t, r) {
    return super.set(SF(this, t), r);
  }
  delete(t) {
    return super.delete(OF(this, t));
  }
}
function Wm({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) ? e9.get(n) : r;
}
function SF({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) ? e9.get(n) : (e9.set(n, r), r);
}
function OF({ _intern: e9, _key: t }, r) {
  const n = t(r);
  return e9.has(n) && (r = e9.get(n), e9.delete(n)), r;
}
function xF(e9) {
  return e9 !== null && typeof e9 == "object" ? e9.valueOf() : e9;
}
function AF(e9 = dn) {
  if (e9 === dn) return Fw;
  if (typeof e9 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e9(t, r);
    return n || n === 0 ? n : (e9(r, r) === 0) - (e9(t, t) === 0);
  };
}
function Fw(e9, t) {
  return (e9 == null || !(e9 >= e9)) - (t == null || !(t >= t)) || (e9 < t ? -1 : e9 > t ? 1 : 0);
}
const PF = Math.sqrt(50), TF = Math.sqrt(10), IF = Math.sqrt(2);
function Cc(e9, t, r) {
  const n = (t - e9) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= PF ? 10 : a >= TF ? 5 : a >= IF ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e9 * u), c = Math.round(t * u), s / u < e9 && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e9 / u), c = Math.round(t / u), s * u < e9 && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? Cc(e9, t, r * 2) : [s, c, u];
}
function Yf(e9, t, r) {
  if (t = +t, e9 = +e9, r = +r, !(r > 0)) return [];
  if (e9 === t) return [e9];
  const n = t < e9, [i, a, o] = n ? Cc(t, e9, r) : Cc(e9, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Xf(e9, t, r) {
  return t = +t, e9 = +e9, r = +r, Cc(e9, t, r)[2];
}
function Jf(e9, t, r) {
  t = +t, e9 = +e9, r = +r;
  const n = t < e9, i = n ? Xf(t, e9, r) : Xf(e9, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Vm(e9, t) {
  let r;
  for (const n of e9) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function qm(e9, t) {
  let r;
  for (const n of e9) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Uw(e9, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e9.length - 1, n)), !(r <= t && t <= n)) return e9;
  for (i = i === void 0 ? Fw : AF(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), h = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * f / c + h)), y = Math.min(n, Math.floor(t + (c - u) * f / c + h));
      Uw(e9, t, d, y, i);
    }
    const a = e9[t];
    let o = r, s = n;
    for (Ma(e9, r, t), i(e9[n], a) > 0 && Ma(e9, r, n); o < s; ) {
      for (Ma(e9, o, s), ++o, --s; i(e9[o], a) < 0; ) ++o;
      for (; i(e9[s], a) > 0; ) --s;
    }
    i(e9[r], a) === 0 ? Ma(e9, r, s) : (++s, Ma(e9, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e9;
}
function Ma(e9, t, r) {
  const n = e9[t];
  e9[t] = e9[r], e9[r] = n;
}
function EF(e9, t, r) {
  if (e9 = Float64Array.from(_F(e9)), !(!(n = e9.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return qm(e9);
    if (t >= 1) return Vm(e9);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Vm(Uw(e9, a).subarray(0, a + 1)), s = qm(e9.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function $F(e9, t, r = Lw) {
  if (!(!(n = e9.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e9[0], 0, e9);
    if (t >= 1) return +r(e9[n - 1], n - 1, e9);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e9[a], a, e9), s = +r(e9[a + 1], a + 1, e9);
    return o + (s - o) * (i - a);
  }
}
function MF(e9, t, r) {
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
const Qf = Symbol("implicit");
function tp() {
  var e9 = new zm(), t = [], r = [], n = Qf;
  function i(a) {
    let o = e9.get(a);
    if (o === void 0) {
      if (n !== Qf) return n;
      e9.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e9 = new zm();
    for (const o of a) e9.has(o) || e9.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return tp(t, r).unknown(n);
  }, tr.apply(i, arguments), i;
}
function vo() {
  var e9 = tp().unknown(void 0), t = e9.domain, r = e9.range, n = 0, i = 1, a, o, s = false, c = 0, u = 0, l = 0.5;
  delete e9.unknown;
  function f() {
    var h = t().length, d = i < n, y = d ? i : n, m = d ? n : i;
    a = (m - y) / Math.max(1, h - c + u * 2), s && (a = Math.floor(a)), y += (m - y - a * (h - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = MF(h).map(function(g) {
      return y + a * g;
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
    return vo(t(), [n, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, tr.apply(f(), arguments);
}
function zw(e9) {
  var t = e9.copy;
  return e9.padding = e9.paddingOuter, delete e9.paddingInner, delete e9.paddingOuter, e9.copy = function() {
    return zw(t());
  }, e9;
}
function Xa() {
  return zw(vo.apply(null, arguments).paddingInner(1));
}
function ep(e9, t, r) {
  e9.prototype = t.prototype = r, r.constructor = e9;
}
function Ww(e9, t) {
  var r = Object.create(e9.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function rs() {
}
var go = 0.7, jc = 1 / go, Mi = "\\s*([+-]?\\d+)\\s*", bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Or = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", DF = /^#([0-9a-f]{3,8})$/, NF = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`), CF = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`), jF = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${bo}\\)$`), BF = new RegExp(`^rgba\\(${Or},${Or},${Or},${bo}\\)$`), RF = new RegExp(`^hsl\\(${bo},${Or},${Or}\\)$`), kF = new RegExp(`^hsla\\(${bo},${Or},${Or},${bo}\\)$`), Gm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
ep(rs, _o, { copy(e9) {
  return Object.assign(new this.constructor(), this, e9);
}, displayable() {
  return this.rgb().displayable();
}, hex: Hm, formatHex: Hm, formatHex8: LF, formatHsl: FF, formatRgb: Km, toString: Km });
function Hm() {
  return this.rgb().formatHex();
}
function LF() {
  return this.rgb().formatHex8();
}
function FF() {
  return Vw(this).formatHsl();
}
function Km() {
  return this.rgb().formatRgb();
}
function _o(e9) {
  var t, r;
  return e9 = (e9 + "").trim().toLowerCase(), (t = DF.exec(e9)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ym(t) : r === 3 ? new Pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ys(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ys(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = NF.exec(e9)) ? new Pe(t[1], t[2], t[3], 1) : (t = CF.exec(e9)) ? new Pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = jF.exec(e9)) ? ys(t[1], t[2], t[3], t[4]) : (t = BF.exec(e9)) ? ys(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = RF.exec(e9)) ? Qm(t[1], t[2] / 100, t[3] / 100, 1) : (t = kF.exec(e9)) ? Qm(t[1], t[2] / 100, t[3] / 100, t[4]) : Gm.hasOwnProperty(e9) ? Ym(Gm[e9]) : e9 === "transparent" ? new Pe(NaN, NaN, NaN, 0) : null;
}
function Ym(e9) {
  return new Pe(e9 >> 16 & 255, e9 >> 8 & 255, e9 & 255, 1);
}
function ys(e9, t, r, n) {
  return n <= 0 && (e9 = t = r = NaN), new Pe(e9, t, r, n);
}
function UF(e9) {
  return e9 instanceof rs || (e9 = _o(e9)), e9 ? (e9 = e9.rgb(), new Pe(e9.r, e9.g, e9.b, e9.opacity)) : new Pe();
}
function Zf(e9, t, r, n) {
  return arguments.length === 1 ? UF(e9) : new Pe(e9, t, r, n ?? 1);
}
function Pe(e9, t, r, n) {
  this.r = +e9, this.g = +t, this.b = +r, this.opacity = +n;
}
ep(Pe, Zf, Ww(rs, { brighter(e9) {
  return e9 = e9 == null ? jc : Math.pow(jc, e9), new Pe(this.r * e9, this.g * e9, this.b * e9, this.opacity);
}, darker(e9) {
  return e9 = e9 == null ? go : Math.pow(go, e9), new Pe(this.r * e9, this.g * e9, this.b * e9, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Pe(zn(this.r), zn(this.g), zn(this.b), Bc(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Xm, formatHex: Xm, formatHex8: zF, formatRgb: Jm, toString: Jm }));
function Xm() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}`;
}
function zF() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}${Bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jm() {
  const e9 = Bc(this.opacity);
  return `${e9 === 1 ? "rgb(" : "rgba("}${zn(this.r)}, ${zn(this.g)}, ${zn(this.b)}${e9 === 1 ? ")" : `, ${e9})`}`;
}
function Bc(e9) {
  return isNaN(e9) ? 1 : Math.max(0, Math.min(1, e9));
}
function zn(e9) {
  return Math.max(0, Math.min(255, Math.round(e9) || 0));
}
function Bn(e9) {
  return e9 = zn(e9), (e9 < 16 ? "0" : "") + e9.toString(16);
}
function Qm(e9, t, r, n) {
  return n <= 0 ? e9 = t = r = NaN : r <= 0 || r >= 1 ? e9 = t = NaN : t <= 0 && (e9 = NaN), new or(e9, t, r, n);
}
function Vw(e9) {
  if (e9 instanceof or) return new or(e9.h, e9.s, e9.l, e9.opacity);
  if (e9 instanceof rs || (e9 = _o(e9)), !e9) return new or();
  if (e9 instanceof or) return e9;
  e9 = e9.rgb();
  var t = e9.r / 255, r = e9.g / 255, n = e9.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new or(o, s, c, e9.opacity);
}
function WF(e9, t, r, n) {
  return arguments.length === 1 ? Vw(e9) : new or(e9, t, r, n ?? 1);
}
function or(e9, t, r, n) {
  this.h = +e9, this.s = +t, this.l = +r, this.opacity = +n;
}
ep(or, WF, Ww(rs, { brighter(e9) {
  return e9 = e9 == null ? jc : Math.pow(jc, e9), new or(this.h, this.s, this.l * e9, this.opacity);
}, darker(e9) {
  return e9 = e9 == null ? go : Math.pow(go, e9), new or(this.h, this.s, this.l * e9, this.opacity);
}, rgb() {
  var e9 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e9) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Pe(zl(e9 >= 240 ? e9 - 240 : e9 + 120, i, n), zl(e9, i, n), zl(e9 < 120 ? e9 + 240 : e9 - 120, i, n), this.opacity);
}, clamp() {
  return new or(Zm(this.h), ms(this.s), ms(this.l), Bc(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e9 = Bc(this.opacity);
  return `${e9 === 1 ? "hsl(" : "hsla("}${Zm(this.h)}, ${ms(this.s) * 100}%, ${ms(this.l) * 100}%${e9 === 1 ? ")" : `, ${e9})`}`;
} }));
function Zm(e9) {
  return e9 = (e9 || 0) % 360, e9 < 0 ? e9 + 360 : e9;
}
function ms(e9) {
  return Math.max(0, Math.min(1, e9 || 0));
}
function zl(e9, t, r) {
  return (e9 < 60 ? t + (r - t) * e9 / 60 : e9 < 180 ? r : e9 < 240 ? t + (r - t) * (240 - e9) / 60 : t) * 255;
}
const rp = (e9) => () => e9;
function VF(e9, t) {
  return function(r) {
    return e9 + r * t;
  };
}
function qF(e9, t, r) {
  return e9 = Math.pow(e9, r), t = Math.pow(t, r) - e9, r = 1 / r, function(n) {
    return Math.pow(e9 + n * t, r);
  };
}
function GF(e9) {
  return (e9 = +e9) == 1 ? qw : function(t, r) {
    return r - t ? qF(t, r, e9) : rp(isNaN(t) ? r : t);
  };
}
function qw(e9, t) {
  var r = t - e9;
  return r ? VF(e9, r) : rp(isNaN(e9) ? t : e9);
}
const tv = function e3(t) {
  var r = GF(t);
  function n(i, a) {
    var o = r((i = Zf(i)).r, (a = Zf(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = qw(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e3, n;
}(1);
function HF(e9, t) {
  t || (t = []);
  var r = e9 ? Math.min(t.length, e9.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e9[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function KF(e9) {
  return ArrayBuffer.isView(e9) && !(e9 instanceof DataView);
}
function YF(e9, t) {
  var r = t ? t.length : 0, n = e9 ? Math.min(r, e9.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Sa(e9[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function XF(e9, t) {
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
function JF(e9, t) {
  var r = {}, n = {}, i;
  (e9 === null || typeof e9 != "object") && (e9 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e9 ? r[i] = Sa(e9[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var th = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wl = new RegExp(th.source, "g");
function QF(e9) {
  return function() {
    return e9;
  };
}
function ZF(e9) {
  return function(t) {
    return e9(t) + "";
  };
}
function tU(e9, t) {
  var r = th.lastIndex = Wl.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e9 = e9 + "", t = t + ""; (n = th.exec(e9)) && (i = Wl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Rc(n, i) })), r = Wl.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ZF(c[0].x) : QF(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Sa(e9, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? rp(t) : (r === "number" ? Rc : r === "string" ? (n = _o(t)) ? (t = n, tv) : tU : t instanceof _o ? tv : t instanceof Date ? XF : KF(t) ? HF : Array.isArray(t) ? YF : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? JF : Rc)(e9, t);
}
function np(e9, t) {
  return e9 = +e9, t = +t, function(r) {
    return Math.round(e9 * (1 - r) + t * r);
  };
}
function eU(e9, t) {
  t === void 0 && (t = e9, e9 = Sa);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e9(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function rU(e9) {
  return function() {
    return e9;
  };
}
function kc(e9) {
  return +e9;
}
var ev = [0, 1];
function be(e9) {
  return e9;
}
function eh(e9, t) {
  return (t -= e9 = +e9) ? function(r) {
    return (r - e9) / t;
  } : rU(isNaN(t) ? NaN : 0.5);
}
function nU(e9, t) {
  var r;
  return e9 > t && (r = e9, e9 = t, t = r), function(n) {
    return Math.max(e9, Math.min(t, n));
  };
}
function iU(e9, t, r) {
  var n = e9[0], i = e9[1], a = t[0], o = t[1];
  return i < n ? (n = eh(i, n), a = r(o, a)) : (n = eh(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function aU(e9, t, r) {
  var n = Math.min(e9.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e9[n] < e9[0] && (e9 = e9.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = eh(e9[o], e9[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = es(e9, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function ns(e9, t) {
  return t.domain(e9.domain()).range(e9.range()).interpolate(e9.interpolate()).clamp(e9.clamp()).unknown(e9.unknown());
}
function Yu() {
  var e9 = ev, t = ev, r = Sa, n, i, a, o = be, s, c, u;
  function l() {
    var h = Math.min(e9.length, t.length);
    return o !== be && (o = nU(e9[0], e9[h - 1])), s = h > 2 ? aU : iU, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(e9.map(n), t, r)))(n(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(t, e9.map(n), Rc)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e9 = Array.from(h, kc), l()) : e9.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), l()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = np, l();
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
function ip() {
  return Yu()(be, be);
}
function oU(e9) {
  return Math.abs(e9 = Math.round(e9)) >= 1e21 ? e9.toLocaleString("en").replace(/,/g, "") : e9.toString(10);
}
function Lc(e9, t) {
  if (!isFinite(e9) || e9 === 0) return null;
  var r = (e9 = t ? e9.toExponential(t - 1) : e9.toExponential()).indexOf("e"), n = e9.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e9.slice(r + 1)];
}
function Wi(e9) {
  return e9 = Lc(Math.abs(e9)), e9 ? e9[1] : NaN;
}
function sU(e9, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e9[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); ) s = e9[o = (o + 1) % e9.length];
    return a.reverse().join(t);
  };
}
function cU(e9) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e9[+r];
    });
  };
}
var uU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wo(e9) {
  if (!(t = uU.exec(e9))) throw new Error("invalid format: " + e9);
  var t;
  return new ap({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
wo.prototype = ap.prototype;
function ap(e9) {
  this.fill = e9.fill === void 0 ? " " : e9.fill + "", this.align = e9.align === void 0 ? ">" : e9.align + "", this.sign = e9.sign === void 0 ? "-" : e9.sign + "", this.symbol = e9.symbol === void 0 ? "" : e9.symbol + "", this.zero = !!e9.zero, this.width = e9.width === void 0 ? void 0 : +e9.width, this.comma = !!e9.comma, this.precision = e9.precision === void 0 ? void 0 : +e9.precision, this.trim = !!e9.trim, this.type = e9.type === void 0 ? "" : e9.type + "";
}
ap.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function lU(e9) {
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
var Fc;
function fU(e9, t) {
  var r = Lc(e9, t);
  if (!r) return Fc = void 0, e9.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Fc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Lc(e9, Math.max(0, t + a - 1))[0];
}
function rv(e9, t) {
  var r = Lc(e9, t);
  if (!r) return e9 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const nv = { "%": (e9, t) => (e9 * 100).toFixed(t), b: (e9) => Math.round(e9).toString(2), c: (e9) => e9 + "", d: oU, e: (e9, t) => e9.toExponential(t), f: (e9, t) => e9.toFixed(t), g: (e9, t) => e9.toPrecision(t), o: (e9) => Math.round(e9).toString(8), p: (e9, t) => rv(e9 * 100, t), r: rv, s: fU, X: (e9) => Math.round(e9).toString(16).toUpperCase(), x: (e9) => Math.round(e9).toString(16) };
function iv(e9) {
  return e9;
}
var av = Array.prototype.map, ov = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hU(e9) {
  var t = e9.grouping === void 0 || e9.thousands === void 0 ? iv : sU(av.call(e9.grouping, Number), e9.thousands + ""), r = e9.currency === void 0 ? "" : e9.currency[0] + "", n = e9.currency === void 0 ? "" : e9.currency[1] + "", i = e9.decimal === void 0 ? "." : e9.decimal + "", a = e9.numerals === void 0 ? iv : cU(av.call(e9.numerals, String)), o = e9.percent === void 0 ? "%" : e9.percent + "", s = e9.minus === void 0 ? "\u2212" : e9.minus + "", c = e9.nan === void 0 ? "NaN" : e9.nan + "";
  function u(f, h) {
    f = wo(f);
    var d = f.fill, y = f.align, m = f.sign, p = f.symbol, g = f.zero, _ = f.width, w = f.comma, S = f.precision, v = f.trim, b = f.type;
    b === "n" ? (w = true, b = "g") : nv[b] || (S === void 0 && (S = 12), v = true, b = "g"), (g || d === "0" && y === "=") && (g = true, d = "0", y = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), P = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), T = nv[b], $ = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function E(I) {
      var j = O, N = P, M, C, R;
      if (b === "c") N = T(I) + N, I = "";
      else {
        I = +I;
        var F = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? c : T(Math.abs(I), S), v && (I = lU(I)), F && +I == 0 && m !== "+" && (F = false), j = (F ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + j, N = (b === "s" && !isNaN(I) && Fc !== void 0 ? ov[8 + Fc / 3] : "") + N + (F && m === "(" ? ")" : ""), $) {
          for (M = -1, C = I.length; ++M < C; ) if (R = I.charCodeAt(M), 48 > R || R > 57) {
            N = (R === 46 ? i + I.slice(M + 1) : I.slice(M)) + N, I = I.slice(0, M);
            break;
          }
        }
      }
      w && !g && (I = t(I, 1 / 0));
      var U = j.length + I.length + N.length, q = U < _ ? new Array(_ - U + 1).join(d) : "";
      switch (w && g && (I = t(q + I, q.length ? _ - N.length : 1 / 0), q = ""), y) {
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
    var d = Math.max(-8, Math.min(8, Math.floor(Wi(h) / 3))) * 3, y = Math.pow(10, -d), m = u((f = wo(f), f.type = "f", f), { suffix: ov[8 + d / 3] });
    return function(p) {
      return m(y * p);
    };
  }
  return { format: u, formatPrefix: l };
}
var vs, op, Gw;
dU({ thousands: ",", grouping: [3], currency: ["$", ""] });
function dU(e9) {
  return vs = hU(e9), op = vs.format, Gw = vs.formatPrefix, vs;
}
function pU(e9) {
  return Math.max(0, -Wi(Math.abs(e9)));
}
function yU(e9, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Wi(t) / 3))) * 3 - Wi(Math.abs(e9)));
}
function mU(e9, t) {
  return e9 = Math.abs(e9), t = Math.abs(t) - e9, Math.max(0, Wi(t) - Wi(e9)) + 1;
}
function Hw(e9, t, r, n) {
  var i = Jf(e9, t, r), a;
  switch (n = wo(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e9), Math.abs(t));
      return n.precision == null && !isNaN(a = yU(i, o)) && (n.precision = a), Gw(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = mU(i, Math.max(Math.abs(e9), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = pU(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return op(n);
}
function Sn(e9) {
  var t = e9.domain;
  return e9.ticks = function(r) {
    var n = t();
    return Yf(n[0], n[n.length - 1], r ?? 10);
  }, e9.tickFormat = function(r, n) {
    var i = t();
    return Hw(i[0], i[i.length - 1], r ?? 10, n);
  }, e9.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Xf(o, s, r), u === c) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      c = u;
    }
    return e9;
  }, e9;
}
function Uc() {
  var e9 = ip();
  return e9.copy = function() {
    return ns(e9, Uc());
  }, tr.apply(e9, arguments), Sn(e9);
}
function Kw(e9) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e9 = Array.from(n, kc), r) : e9.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Kw(e9).unknown(t);
  }, e9 = arguments.length ? Array.from(e9, kc) : [0, 1], Sn(r);
}
function Yw(e9, t) {
  e9 = e9.slice();
  var r = 0, n = e9.length - 1, i = e9[r], a = e9[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e9[r] = t.floor(i), e9[n] = t.ceil(a), e9;
}
function sv(e9) {
  return Math.log(e9);
}
function cv(e9) {
  return Math.exp(e9);
}
function vU(e9) {
  return -Math.log(-e9);
}
function gU(e9) {
  return -Math.exp(-e9);
}
function bU(e9) {
  return isFinite(e9) ? +("1e" + e9) : e9 < 0 ? 0 : e9;
}
function _U(e9) {
  return e9 === 10 ? bU : e9 === Math.E ? Math.exp : (t) => Math.pow(e9, t);
}
function wU(e9) {
  return e9 === Math.E ? Math.log : e9 === 10 && Math.log10 || e9 === 2 && Math.log2 || (e9 = Math.log(e9), (t) => Math.log(t) / e9);
}
function uv(e9) {
  return (t, r) => -e9(-t, r);
}
function sp(e9) {
  const t = e9(sv, cv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = wU(n), a = _U(n), r()[0] < 0 ? (i = uv(i), a = uv(a), e9(vU, gU)) : e9(sv, cv), t;
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
    let g = [];
    if (!(n % 1) && d - h < p) {
      if (h = Math.floor(h), d = Math.ceil(d), u > 0) {
        for (; h <= d; ++h) for (y = 1; y < n; ++y) if (m = h < 0 ? y / a(-h) : y * a(h), !(m < u)) {
          if (m > l) break;
          g.push(m);
        }
      } else for (; h <= d; ++h) for (y = n - 1; y >= 1; --y) if (m = h > 0 ? y / a(-h) : y * a(h), !(m < u)) {
        if (m > l) break;
        g.push(m);
      }
      g.length * 2 < p && (g = Yf(u, l, p));
    } else g = Yf(h, d, Math.min(d - h, p)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = wo(c)).precision == null && (c.trim = true), c = op(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(Yw(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function Xw() {
  const e9 = sp(Yu()).domain([1, 10]);
  return e9.copy = () => ns(e9, Xw()).base(e9.base()), tr.apply(e9, arguments), e9;
}
function lv(e9) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e9));
  };
}
function fv(e9) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e9;
  };
}
function cp(e9) {
  var t = 1, r = e9(lv(t), fv(t));
  return r.constant = function(n) {
    return arguments.length ? e9(lv(t = +n), fv(t)) : t;
  }, Sn(r);
}
function Jw() {
  var e9 = cp(Yu());
  return e9.copy = function() {
    return ns(e9, Jw()).constant(e9.constant());
  }, tr.apply(e9, arguments);
}
function hv(e9) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e9) : Math.pow(t, e9);
  };
}
function SU(e9) {
  return e9 < 0 ? -Math.sqrt(-e9) : Math.sqrt(e9);
}
function OU(e9) {
  return e9 < 0 ? -e9 * e9 : e9 * e9;
}
function up(e9) {
  var t = e9(be, be), r = 1;
  function n() {
    return r === 1 ? e9(be, be) : r === 0.5 ? e9(SU, OU) : e9(hv(r), hv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Sn(t);
}
function lp() {
  var e9 = up(Yu());
  return e9.copy = function() {
    return ns(e9, lp()).exponent(e9.exponent());
  }, tr.apply(e9, arguments), e9;
}
function xU() {
  return lp.apply(null, arguments).exponent(0.5);
}
function dv(e9) {
  return Math.sign(e9) * e9 * e9;
}
function AU(e9) {
  return Math.sign(e9) * Math.sqrt(Math.abs(e9));
}
function Qw() {
  var e9 = ip(), t = [0, 1], r = false, n;
  function i(a) {
    var o = AU(e9(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e9.invert(dv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e9.domain(a), i) : e9.domain();
  }, i.range = function(a) {
    return arguments.length ? (e9.range((t = Array.from(a, kc)).map(dv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e9.clamp(a), i) : e9.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Qw(e9.domain(), t).round(r).clamp(e9.clamp()).unknown(n);
  }, tr.apply(i, arguments), Sn(i);
}
function Zw() {
  var e9 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = $F(e9, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[es(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e9[0], s < r.length ? r[s] : e9[e9.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e9.slice();
    e9 = [];
    for (let s of o) s != null && !isNaN(s = +s) && e9.push(s);
    return e9.sort(dn), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Zw().domain(e9).range(t).unknown(n);
  }, tr.apply(a, arguments);
}
function tS() {
  var e9 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[es(n, c, 0, r)] : a;
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
    return tS().domain([e9, t]).range(i).unknown(a);
  }, tr.apply(Sn(o), arguments);
}
function eS() {
  var e9 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[es(e9, a, 0, n)] : r;
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
    return eS().domain(e9).range(t).unknown(r);
  }, tr.apply(i, arguments);
}
const Vl = /* @__PURE__ */ new Date(), ql = /* @__PURE__ */ new Date();
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
  }), r && (i.count = (a, o) => (Vl.setTime(+a), ql.setTime(+o), e9(Vl), e9(ql), Math.floor(r(Vl, ql))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const zc = oe(() => {
}, (e9, t) => {
  e9.setTime(+e9 + t);
}, (e9, t) => t - e9);
zc.every = (e9) => (e9 = Math.floor(e9), !isFinite(e9) || !(e9 > 0) ? null : e9 > 1 ? oe((t) => {
  t.setTime(Math.floor(t / e9) * e9);
}, (t, r) => {
  t.setTime(+t + r * e9);
}, (t, r) => (r - t) / e9) : zc);
zc.range;
const kr = 1e3, He = kr * 60, Lr = He * 60, qr = Lr * 24, fp = qr * 7, pv = qr * 30, Gl = qr * 365, Rn = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds());
}, (e9, t) => {
  e9.setTime(+e9 + t * kr);
}, (e9, t) => (t - e9) / kr, (e9) => e9.getUTCSeconds());
Rn.range;
const hp = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds() - e9.getSeconds() * kr);
}, (e9, t) => {
  e9.setTime(+e9 + t * He);
}, (e9, t) => (t - e9) / He, (e9) => e9.getMinutes());
hp.range;
const dp = oe((e9) => {
  e9.setUTCSeconds(0, 0);
}, (e9, t) => {
  e9.setTime(+e9 + t * He);
}, (e9, t) => (t - e9) / He, (e9) => e9.getUTCMinutes());
dp.range;
const pp = oe((e9) => {
  e9.setTime(e9 - e9.getMilliseconds() - e9.getSeconds() * kr - e9.getMinutes() * He);
}, (e9, t) => {
  e9.setTime(+e9 + t * Lr);
}, (e9, t) => (t - e9) / Lr, (e9) => e9.getHours());
pp.range;
const yp = oe((e9) => {
  e9.setUTCMinutes(0, 0, 0);
}, (e9, t) => {
  e9.setTime(+e9 + t * Lr);
}, (e9, t) => (t - e9) / Lr, (e9) => e9.getUTCHours());
yp.range;
const is = oe((e9) => e9.setHours(0, 0, 0, 0), (e9, t) => e9.setDate(e9.getDate() + t), (e9, t) => (t - e9 - (t.getTimezoneOffset() - e9.getTimezoneOffset()) * He) / qr, (e9) => e9.getDate() - 1);
is.range;
const Xu = oe((e9) => {
  e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCDate(e9.getUTCDate() + t);
}, (e9, t) => (t - e9) / qr, (e9) => e9.getUTCDate() - 1);
Xu.range;
const rS = oe((e9) => {
  e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCDate(e9.getUTCDate() + t);
}, (e9, t) => (t - e9) / qr, (e9) => Math.floor(e9 / qr));
rS.range;
function ni(e9) {
  return oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e9) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * He) / fp);
}
const Ju = ni(0), Wc = ni(1), PU = ni(2), TU = ni(3), Vi = ni(4), IU = ni(5), EU = ni(6);
Ju.range;
Wc.range;
PU.range;
TU.range;
Vi.range;
IU.range;
EU.range;
function ii(e9) {
  return oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e9) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / fp);
}
const Qu = ii(0), Vc = ii(1), $U = ii(2), MU = ii(3), qi = ii(4), DU = ii(5), NU = ii(6);
Qu.range;
Vc.range;
$U.range;
MU.range;
qi.range;
DU.range;
NU.range;
const mp = oe((e9) => {
  e9.setDate(1), e9.setHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setMonth(e9.getMonth() + t);
}, (e9, t) => t.getMonth() - e9.getMonth() + (t.getFullYear() - e9.getFullYear()) * 12, (e9) => e9.getMonth());
mp.range;
const vp = oe((e9) => {
  e9.setUTCDate(1), e9.setUTCHours(0, 0, 0, 0);
}, (e9, t) => {
  e9.setUTCMonth(e9.getUTCMonth() + t);
}, (e9, t) => t.getUTCMonth() - e9.getUTCMonth() + (t.getUTCFullYear() - e9.getUTCFullYear()) * 12, (e9) => e9.getUTCMonth());
vp.range;
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
function nS(e9, t, r, n, i, a) {
  const o = [[Rn, 1, kr], [Rn, 5, 5 * kr], [Rn, 15, 15 * kr], [Rn, 30, 30 * kr], [a, 1, He], [a, 5, 5 * He], [a, 15, 15 * He], [a, 30, 30 * He], [i, 1, Lr], [i, 3, 3 * Lr], [i, 6, 6 * Lr], [i, 12, 12 * Lr], [n, 1, qr], [n, 2, 2 * qr], [r, 1, fp], [t, 1, pv], [t, 3, 3 * pv], [e9, 1, Gl]];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), y = d ? d.range(u, +l + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = Zd(([, , p]) => p).right(o, h);
    if (d === o.length) return e9.every(Jf(u / Gl, l / Gl, f));
    if (d === 0) return zc.every(Math.max(Jf(u, l, f), 1));
    const [y, m] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(m);
  }
  return [s, c];
}
const [CU, jU] = nS(Hr, vp, Qu, rS, yp, dp), [BU, RU] = nS(Gr, mp, Ju, is, pp, hp);
function Hl(e9) {
  if (0 <= e9.y && e9.y < 100) {
    var t = new Date(-1, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L);
    return t.setFullYear(e9.y), t;
  }
  return new Date(e9.y, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L);
}
function Kl(e9) {
  if (0 <= e9.y && e9.y < 100) {
    var t = new Date(Date.UTC(-1, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L));
    return t.setUTCFullYear(e9.y), t;
  }
  return new Date(Date.UTC(e9.y, e9.m, e9.d, e9.H, e9.M, e9.S, e9.L));
}
function Da(e9, t, r) {
  return { y: e9, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function kU(e9) {
  var t = e9.dateTime, r = e9.date, n = e9.time, i = e9.periods, a = e9.days, o = e9.shortDays, s = e9.months, c = e9.shortMonths, u = Na(i), l = Ca(i), f = Na(a), h = Ca(a), d = Na(o), y = Ca(o), m = Na(s), p = Ca(s), g = Na(c), _ = Ca(c), w = { a: R, A: F, b: U, B: q, c: null, d: _v, e: _v, f: s3, g: v3, G: b3, H: i3, I: a3, j: o3, L: iS, m: c3, M: u3, p: nt, q: W, Q: Ov, s: xv, S: l3, u: f3, U: h3, V: d3, w: p3, W: y3, x: null, X: null, y: m3, Y: g3, Z: _3, "%": Sv }, S = { a: at, A: Rt, b: Kt, B: Me, c: null, d: wv, e: wv, f: x3, g: C3, G: B3, H: w3, I: S3, j: O3, L: oS, m: A3, M: P3, p: An, q: we, Q: Ov, s: xv, S: T3, u: I3, U: E3, V: $3, w: M3, W: D3, x: null, X: null, y: N3, Y: j3, Z: R3, "%": Sv }, v = { a: $, A: E, b: I, B: j, c: N, d: gv, e: gv, f: t3, g: vv, G: mv, H: bv, I: bv, j: XU, L: ZU, m: YU, M: JU, p: T, q: KU, Q: r3, s: n3, S: QU, u: WU, U: VU, V: qU, w: zU, W: GU, x: M, X: C, y: vv, Y: mv, Z: HU, "%": e32 };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), S.x = b(r, S), S.X = b(n, S), S.c = b(t, S);
  function b(z, ft) {
    return function(ht) {
      var k = [], Vt = -1, bt = 0, Jt = z.length, Qt, Se, en;
      for (ht instanceof Date || (ht = /* @__PURE__ */ new Date(+ht)); ++Vt < Jt; ) z.charCodeAt(Vt) === 37 && (k.push(z.slice(bt, Vt)), (Se = yv[Qt = z.charAt(++Vt)]) != null ? Qt = z.charAt(++Vt) : Se = Qt === "e" ? " " : "0", (en = ft[Qt]) && (Qt = en(ht, Se)), k.push(Qt), bt = Vt + 1);
      return k.push(z.slice(bt, Vt)), k.join("");
    };
  }
  function O(z, ft) {
    return function(ht) {
      var k = Da(1900, void 0, 1), Vt = P(k, z, ht += "", 0), bt, Jt;
      if (Vt != ht.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (ft && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (bt = Kl(Da(k.y, 0, 1)), Jt = bt.getUTCDay(), bt = Jt > 4 || Jt === 0 ? Vc.ceil(bt) : Vc(bt), bt = Xu.offset(bt, (k.V - 1) * 7), k.y = bt.getUTCFullYear(), k.m = bt.getUTCMonth(), k.d = bt.getUTCDate() + (k.w + 6) % 7) : (bt = Hl(Da(k.y, 0, 1)), Jt = bt.getDay(), bt = Jt > 4 || Jt === 0 ? Wc.ceil(bt) : Wc(bt), bt = is.offset(bt, (k.V - 1) * 7), k.y = bt.getFullYear(), k.m = bt.getMonth(), k.d = bt.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Jt = "Z" in k ? Kl(Da(k.y, 0, 1)).getUTCDay() : Hl(Da(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Jt + 5) % 7 : k.w + k.U * 7 - (Jt + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Kl(k)) : Hl(k);
    };
  }
  function P(z, ft, ht, k) {
    for (var Vt = 0, bt = ft.length, Jt = ht.length, Qt, Se; Vt < bt; ) {
      if (k >= Jt) return -1;
      if (Qt = ft.charCodeAt(Vt++), Qt === 37) {
        if (Qt = ft.charAt(Vt++), Se = v[Qt in yv ? ft.charAt(Vt++) : Qt], !Se || (k = Se(z, ht, k)) < 0) return -1;
      } else if (Qt != ht.charCodeAt(k++)) return -1;
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
    var k = g.exec(ft.slice(ht));
    return k ? (z.m = _.get(k[0].toLowerCase()), ht + k[0].length) : -1;
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
  function nt(z) {
    return i[+(z.getHours() >= 12)];
  }
  function W(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function at(z) {
    return o[z.getUTCDay()];
  }
  function Rt(z) {
    return a[z.getUTCDay()];
  }
  function Kt(z) {
    return c[z.getUTCMonth()];
  }
  function Me(z) {
    return s[z.getUTCMonth()];
  }
  function An(z) {
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
var yv = { "-": "", _: " ", 0: "0" }, ce = /^\s*\d+/, LU = /^%/, FU = /[\\^$*+?|[\]().{}]/g;
function wt(e9, t, r) {
  var n = e9 < 0 ? "-" : "", i = (n ? -e9 : e9) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function UU(e9) {
  return e9.replace(FU, "\\$&");
}
function Na(e9) {
  return new RegExp("^(?:" + e9.map(UU).join("|") + ")", "i");
}
function Ca(e9) {
  return new Map(e9.map((t, r) => [t.toLowerCase(), r]));
}
function zU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.w = +n[0], r + n[0].length) : -1;
}
function WU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.u = +n[0], r + n[0].length) : -1;
}
function VU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.U = +n[0], r + n[0].length) : -1;
}
function qU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.V = +n[0], r + n[0].length) : -1;
}
function GU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.W = +n[0], r + n[0].length) : -1;
}
function mv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 4));
  return n ? (e9.y = +n[0], r + n[0].length) : -1;
}
function vv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function HU(e9, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e9.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function KU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e9.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function YU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.m = n[0] - 1, r + n[0].length) : -1;
}
function gv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.d = +n[0], r + n[0].length) : -1;
}
function XU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e9.m = 0, e9.d = +n[0], r + n[0].length) : -1;
}
function bv(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.H = +n[0], r + n[0].length) : -1;
}
function JU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.M = +n[0], r + n[0].length) : -1;
}
function QU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e9.S = +n[0], r + n[0].length) : -1;
}
function ZU(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e9.L = +n[0], r + n[0].length) : -1;
}
function t3(e9, t, r) {
  var n = ce.exec(t.slice(r, r + 6));
  return n ? (e9.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function e32(e9, t, r) {
  var n = LU.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function r3(e9, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e9.Q = +n[0], r + n[0].length) : -1;
}
function n3(e9, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e9.s = +n[0], r + n[0].length) : -1;
}
function _v(e9, t) {
  return wt(e9.getDate(), t, 2);
}
function i3(e9, t) {
  return wt(e9.getHours(), t, 2);
}
function a3(e9, t) {
  return wt(e9.getHours() % 12 || 12, t, 2);
}
function o3(e9, t) {
  return wt(1 + is.count(Gr(e9), e9), t, 3);
}
function iS(e9, t) {
  return wt(e9.getMilliseconds(), t, 3);
}
function s3(e9, t) {
  return iS(e9, t) + "000";
}
function c3(e9, t) {
  return wt(e9.getMonth() + 1, t, 2);
}
function u3(e9, t) {
  return wt(e9.getMinutes(), t, 2);
}
function l3(e9, t) {
  return wt(e9.getSeconds(), t, 2);
}
function f3(e9) {
  var t = e9.getDay();
  return t === 0 ? 7 : t;
}
function h3(e9, t) {
  return wt(Ju.count(Gr(e9) - 1, e9), t, 2);
}
function aS(e9) {
  var t = e9.getDay();
  return t >= 4 || t === 0 ? Vi(e9) : Vi.ceil(e9);
}
function d3(e9, t) {
  return e9 = aS(e9), wt(Vi.count(Gr(e9), e9) + (Gr(e9).getDay() === 4), t, 2);
}
function p3(e9) {
  return e9.getDay();
}
function y3(e9, t) {
  return wt(Wc.count(Gr(e9) - 1, e9), t, 2);
}
function m3(e9, t) {
  return wt(e9.getFullYear() % 100, t, 2);
}
function v3(e9, t) {
  return e9 = aS(e9), wt(e9.getFullYear() % 100, t, 2);
}
function g3(e9, t) {
  return wt(e9.getFullYear() % 1e4, t, 4);
}
function b3(e9, t) {
  var r = e9.getDay();
  return e9 = r >= 4 || r === 0 ? Vi(e9) : Vi.ceil(e9), wt(e9.getFullYear() % 1e4, t, 4);
}
function _3(e9) {
  var t = e9.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + wt(t / 60 | 0, "0", 2) + wt(t % 60, "0", 2);
}
function wv(e9, t) {
  return wt(e9.getUTCDate(), t, 2);
}
function w3(e9, t) {
  return wt(e9.getUTCHours(), t, 2);
}
function S3(e9, t) {
  return wt(e9.getUTCHours() % 12 || 12, t, 2);
}
function O3(e9, t) {
  return wt(1 + Xu.count(Hr(e9), e9), t, 3);
}
function oS(e9, t) {
  return wt(e9.getUTCMilliseconds(), t, 3);
}
function x3(e9, t) {
  return oS(e9, t) + "000";
}
function A3(e9, t) {
  return wt(e9.getUTCMonth() + 1, t, 2);
}
function P3(e9, t) {
  return wt(e9.getUTCMinutes(), t, 2);
}
function T3(e9, t) {
  return wt(e9.getUTCSeconds(), t, 2);
}
function I3(e9) {
  var t = e9.getUTCDay();
  return t === 0 ? 7 : t;
}
function E3(e9, t) {
  return wt(Qu.count(Hr(e9) - 1, e9), t, 2);
}
function sS(e9) {
  var t = e9.getUTCDay();
  return t >= 4 || t === 0 ? qi(e9) : qi.ceil(e9);
}
function $3(e9, t) {
  return e9 = sS(e9), wt(qi.count(Hr(e9), e9) + (Hr(e9).getUTCDay() === 4), t, 2);
}
function M3(e9) {
  return e9.getUTCDay();
}
function D3(e9, t) {
  return wt(Vc.count(Hr(e9) - 1, e9), t, 2);
}
function N3(e9, t) {
  return wt(e9.getUTCFullYear() % 100, t, 2);
}
function C3(e9, t) {
  return e9 = sS(e9), wt(e9.getUTCFullYear() % 100, t, 2);
}
function j3(e9, t) {
  return wt(e9.getUTCFullYear() % 1e4, t, 4);
}
function B3(e9, t) {
  var r = e9.getUTCDay();
  return e9 = r >= 4 || r === 0 ? qi(e9) : qi.ceil(e9), wt(e9.getUTCFullYear() % 1e4, t, 4);
}
function R3() {
  return "+0000";
}
function Sv() {
  return "%";
}
function Ov(e9) {
  return +e9;
}
function xv(e9) {
  return Math.floor(+e9 / 1e3);
}
var ui, cS, uS;
k3({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function k3(e9) {
  return ui = kU(e9), cS = ui.format, ui.parse, uS = ui.utcFormat, ui.utcParse, ui;
}
function L3(e9) {
  return new Date(e9);
}
function F3(e9) {
  return e9 instanceof Date ? +e9 : +/* @__PURE__ */ new Date(+e9);
}
function gp(e9, t, r, n, i, a, o, s, c, u) {
  var l = ip(), f = l.invert, h = l.domain, d = u(".%L"), y = u(":%S"), m = u("%I:%M"), p = u("%I %p"), g = u("%a %d"), _ = u("%b %d"), w = u("%B"), S = u("%Y");
  function v(b) {
    return (c(b) < b ? d : s(b) < b ? y : o(b) < b ? m : a(b) < b ? p : n(b) < b ? i(b) < b ? g : _ : r(b) < b ? w : S)(b);
  }
  return l.invert = function(b) {
    return new Date(f(b));
  }, l.domain = function(b) {
    return arguments.length ? h(Array.from(b, F3)) : h().map(L3);
  }, l.ticks = function(b) {
    var O = h();
    return e9(O[0], O[O.length - 1], b ?? 10);
  }, l.tickFormat = function(b, O) {
    return O == null ? v : u(O);
  }, l.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(Yw(O, b)) : l;
  }, l.copy = function() {
    return ns(l, gp(e9, t, r, n, i, a, o, s, c, u));
  }, l;
}
function U3() {
  return tr.apply(gp(BU, RU, Gr, mp, Ju, is, pp, hp, Rn, cS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function z3() {
  return tr.apply(gp(CU, jU, Hr, vp, Qu, Xu, yp, dp, Rn, uS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Zu() {
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
  return u.range = l(Sa), u.rangeRound = l(np), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e9), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function On(e9, t) {
  return t.domain(e9.domain()).interpolator(e9.interpolator()).clamp(e9.clamp()).unknown(e9.unknown());
}
function lS() {
  var e9 = Sn(Zu()(be));
  return e9.copy = function() {
    return On(e9, lS());
  }, tn.apply(e9, arguments);
}
function fS() {
  var e9 = sp(Zu()).domain([1, 10]);
  return e9.copy = function() {
    return On(e9, fS()).base(e9.base());
  }, tn.apply(e9, arguments);
}
function hS() {
  var e9 = cp(Zu());
  return e9.copy = function() {
    return On(e9, hS()).constant(e9.constant());
  }, tn.apply(e9, arguments);
}
function bp() {
  var e9 = up(Zu());
  return e9.copy = function() {
    return On(e9, bp()).exponent(e9.exponent());
  }, tn.apply(e9, arguments);
}
function W3() {
  return bp.apply(null, arguments).exponent(0.5);
}
function dS() {
  var e9 = [], t = be;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((es(e9, n, 1) - 1) / (e9.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e9.slice();
    e9 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e9.push(i);
    return e9.sort(dn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e9.map((n, i) => t(i / (e9.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => EF(e9, a / n));
  }, r.copy = function() {
    return dS(t).domain(e9);
  }, tn.apply(r, arguments);
}
function tl() {
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
      var g, _, w;
      return arguments.length ? ([g, _, w] = p, u = eU(m, [g, _, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = y(Sa), d.rangeRound = y(np), d.unknown = function(m) {
    return arguments.length ? (h = m, d) : h;
  }, function(m) {
    return l = m, i = m(e9), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function pS() {
  var e9 = Sn(tl()(be));
  return e9.copy = function() {
    return On(e9, pS());
  }, tn.apply(e9, arguments);
}
function yS() {
  var e9 = sp(tl()).domain([0.1, 1, 10]);
  return e9.copy = function() {
    return On(e9, yS()).base(e9.base());
  }, tn.apply(e9, arguments);
}
function mS() {
  var e9 = cp(tl());
  return e9.copy = function() {
    return On(e9, mS()).constant(e9.constant());
  }, tn.apply(e9, arguments);
}
function _p() {
  var e9 = up(tl());
  return e9.copy = function() {
    return On(e9, _p()).exponent(e9.exponent());
  }, tn.apply(e9, arguments);
}
function V3() {
  return _p.apply(null, arguments).exponent(0.5);
}
const Av = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: vo, scaleDiverging: pS, scaleDivergingLog: yS, scaleDivergingPow: _p, scaleDivergingSqrt: V3, scaleDivergingSymlog: mS, scaleIdentity: Kw, scaleImplicit: Qf, scaleLinear: Uc, scaleLog: Xw, scaleOrdinal: tp, scalePoint: Xa, scalePow: lp, scaleQuantile: Zw, scaleQuantize: tS, scaleRadial: Qw, scaleSequential: lS, scaleSequentialLog: fS, scaleSequentialPow: bp, scaleSequentialQuantile: dS, scaleSequentialSqrt: W3, scaleSequentialSymlog: hS, scaleSqrt: xU, scaleSymlog: Jw, scaleThreshold: eS, scaleTime: U3, scaleUtc: z3, tickFormat: Hw }, Symbol.toStringTag, { value: "Module" }));
var q3 = da;
function G3(e9, t, r) {
  for (var n = -1, i = e9.length; ++n < i; ) {
    var a = e9[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !q3(o) : r(o, s))) var s = o, c = a;
  }
  return c;
}
var vS = G3;
function H3(e9, t) {
  return e9 > t;
}
var K3 = H3, Y3 = vS, X3 = K3, J3 = wa;
function Q3(e9) {
  return e9 && e9.length ? Y3(e9, J3, X3) : void 0;
}
var Z3 = Q3;
const ln = Bt(Z3);
function t8(e9, t) {
  return e9 < t;
}
var e8 = t8, r8 = vS, n8 = e8, i8 = wa;
function a8(e9) {
  return e9 && e9.length ? r8(e9, i8, n8) : void 0;
}
var o8 = a8;
const el = Bt(o8);
var s8 = Cd, c8 = _n, u8 = Tw, l8 = $e;
function f8(e9, t) {
  var r = l8(e9) ? s8 : u8;
  return r(e9, c8(t));
}
var h8 = f8, d8 = Aw, p8 = h8;
function y8(e9, t) {
  return d8(p8(e9, t), 1);
}
var m8 = y8;
const v8 = Bt(m8);
var g8 = Kd;
function b8(e9, t) {
  return g8(e9, t);
}
var _8 = b8;
const Xn = Bt(_8);
var Oa = 1e9, w8 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Sp, Ut = true, Qe = "[DecimalError] ", Wn = Qe + "Invalid argument: ", wp = Qe + "Exponent out of range: ", xa = Math.floor, Nn = Math.pow, S8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Re, se = 1e7, Lt = 7, gS = 9007199254740991, qc = xa(gS / Lt), V = {};
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
  return Wr(this, new this.constructor(e9));
};
V.dividedToIntegerBy = V.idiv = function(e9) {
  var t = this, r = t.constructor;
  return Nt(Wr(t, new r(e9), 0, 1), r.precision);
};
V.equals = V.eq = function(e9) {
  return !this.cmp(e9);
};
V.exponent = function() {
  return Xt(this);
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
  else if (e9 = new n(e9), e9.s < 1 || e9.eq(Re)) throw Error(Qe + "NaN");
  if (r.s < 1) throw Error(Qe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Re) ? new n(0) : (Ut = false, t = Wr(So(r, a), So(e9, a), a), Ut = true, Nt(t, i));
};
V.minus = V.sub = function(e9) {
  var t = this;
  return e9 = new t.constructor(e9), t.s == e9.s ? wS(t, e9) : bS(t, (e9.s = -e9.s, e9));
};
V.modulo = V.mod = function(e9) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e9 = new n(e9), !e9.s) throw Error(Qe + "NaN");
  return r.s ? (Ut = false, t = Wr(r, e9, 0, 1).times(e9), Ut = true, r.minus(t)) : Nt(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return _S(this);
};
V.naturalLogarithm = V.ln = function() {
  return So(this);
};
V.negated = V.neg = function() {
  var e9 = new this.constructor(this);
  return e9.s = -e9.s || 0, e9;
};
V.plus = V.add = function(e9) {
  var t = this;
  return e9 = new t.constructor(e9), t.s == e9.s ? bS(t, e9) : wS(t, (e9.s = -e9.s, e9));
};
V.precision = V.sd = function(e9) {
  var t, r, n, i = this;
  if (e9 !== void 0 && e9 !== !!e9 && e9 !== 1 && e9 !== 0) throw Error(Wn + e9);
  if (t = Xt(i) + 1, n = i.d.length - 1, r = n * Lt + 1, n = i.d[n], n) {
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
  for (e9 = Xt(s), Ut = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = wr(s.d), (t.length + e9) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e9 = xa((e9 + 1) / 2) - (e9 < 0 || e9 % 2), i == 1 / 0 ? t = "5e" + e9 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e9), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Wr(s, a, o + 2)).times(0.5), wr(a.d).slice(0, o) === (t = wr(n.d)).slice(0, o)) {
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
  return r = new n(r), e9 === void 0 ? r : (Er(e9, 0, Oa), t === void 0 ? t = n.rounding : Er(t, 0, 8), Nt(r, e9 + Xt(r) + 1, t));
};
V.toExponential = function(e9, t) {
  var r, n = this, i = n.constructor;
  return e9 === void 0 ? r = Jn(n, true) : (Er(e9, 0, Oa), t === void 0 ? t = i.rounding : Er(t, 0, 8), n = Nt(new i(n), e9 + 1, t), r = Jn(n, true, e9 + 1)), r;
};
V.toFixed = function(e9, t) {
  var r, n, i = this, a = i.constructor;
  return e9 === void 0 ? Jn(i) : (Er(e9, 0, Oa), t === void 0 ? t = a.rounding : Er(t, 0, 8), n = Nt(new a(i), e9 + Xt(i) + 1, t), r = Jn(n.abs(), false, e9 + Xt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
V.toInteger = V.toint = function() {
  var e9 = this, t = e9.constructor;
  return Nt(new t(e9), Xt(e9) + 1, t.rounding);
};
V.toNumber = function() {
  return +this;
};
V.toPower = V.pow = function(e9) {
  var t, r, n, i, a, o, s = this, c = s.constructor, u = 12, l = +(e9 = new c(e9));
  if (!e9.s) return new c(Re);
  if (s = new c(s), !s.s) {
    if (e9.s < 1) throw Error(Qe + "Infinity");
    return s;
  }
  if (s.eq(Re)) return s;
  if (n = c.precision, e9.eq(Re)) return Nt(s, n);
  if (t = e9.e, r = e9.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= gS) {
      for (i = new c(Re), t = Math.ceil(n / Lt + 4), Ut = false; r % 2 && (i = i.times(s), Tv(i.d, t)), r = xa(r / 2), r !== 0; ) s = s.times(s), Tv(s.d, t);
      return Ut = true, e9.s < 0 ? new c(Re).div(i) : Nt(i, n);
    }
  } else if (a < 0) throw Error(Qe + "NaN");
  return a = a < 0 && e9.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ut = false, i = e9.times(So(s, n + u)), Ut = true, i = _S(i), i.s = a, i;
};
V.toPrecision = function(e9, t) {
  var r, n, i = this, a = i.constructor;
  return e9 === void 0 ? (r = Xt(i), n = Jn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Er(e9, 1, Oa), t === void 0 ? t = a.rounding : Er(t, 0, 8), i = Nt(new a(i), e9, t), r = Xt(i), n = Jn(i, e9 <= r || r <= a.toExpNeg, e9)), n;
};
V.toSignificantDigits = V.tosd = function(e9, t) {
  var r = this, n = r.constructor;
  return e9 === void 0 ? (e9 = n.precision, t = n.rounding) : (Er(e9, 1, Oa), t === void 0 ? t = n.rounding : Er(t, 0, 8)), Nt(new n(r), e9, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e9 = this, t = Xt(e9), r = e9.constructor;
  return Jn(e9, t <= r.toExpNeg || t >= r.toExpPos);
};
function bS(e9, t) {
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
function wr(e9) {
  var t, r, n, i = e9.length - 1, a = "", o = e9[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e9[t] + "", r = Lt - n.length, r && (a += cn(r)), a += n;
    o = e9[t], n = o + "", r = Lt - n.length, r && (a += cn(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Wr = /* @__PURE__ */ function() {
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
    var s, c, u, l, f, h, d, y, m, p, g, _, w, S, v, b, O, P, T = n.constructor, $ = n.s == i.s ? 1 : -1, E = n.d, I = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(Qe + "Division by zero");
    for (c = n.e - i.e, O = I.length, v = E.length, d = new T($), y = d.d = [], u = 0; I[u] == (E[u] || 0); ) ++u;
    if (I[u] > (E[u] || 0) && --c, a == null ? _ = a = T.precision : o ? _ = a + (Xt(n) - Xt(i)) + 1 : _ = a, _ < 0) return new T(0);
    if (_ = _ / Lt + 2 | 0, u = 0, O == 1) for (l = 0, I = I[0], _++; (u < v || l) && _--; u++) w = l * se + (E[u] || 0), y[u] = w / I | 0, l = w % I | 0;
    else {
      for (l = se / (I[0] + 1) | 0, l > 1 && (I = e9(I, l), E = e9(E, l), O = I.length, v = E.length), S = O, m = E.slice(0, O), p = m.length; p < O; ) m[p++] = 0;
      P = I.slice(), P.unshift(0), b = I[0], I[1] >= se / 2 && ++b;
      do
        l = 0, s = t(I, m, O, p), s < 0 ? (g = m[0], O != p && (g = g * se + (m[1] || 0)), l = g / b | 0, l > 1 ? (l >= se && (l = se - 1), f = e9(I, l), h = f.length, p = m.length, s = t(f, m, h, p), s == 1 && (l--, r(f, O < h ? P : I, h))) : (l == 0 && (s = l = 1), f = I.slice()), h = f.length, h < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(I, m, O, p), s < 1 && (l++, r(m, O < p ? P : I, p))), p = m.length) : s === 0 && (l++, m = [0]), y[u++] = l, s && m[0] ? m[p++] = E[S] || 0 : (m = [E[S]], p = 1);
      while ((S++ < v || m[0] !== void 0) && _--);
    }
    return y[0] || y.shift(), d.e = c, Nt(d, o ? a + Xt(d) + 1 : a);
  };
}();
function _S(e9, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e9.constructor, f = l.precision;
  if (Xt(e9) > 16) throw Error(wp + Xt(e9));
  if (!e9.s) return new l(Re);
  for (Ut = false, s = f, o = new l(0.03125); e9.abs().gte(0.1); ) e9 = e9.times(o), u += 5;
  for (n = Math.log(Nn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(Re), l.precision = s; ; ) {
    if (i = Nt(i.times(e9), s), r = r.times(++c), o = a.plus(Wr(i, r, s)), wr(o.d).slice(0, s) === wr(a.d).slice(0, s)) {
      for (; u--; ) a = Nt(a.times(a), s);
      return l.precision = f, t == null ? (Ut = true, Nt(a, f)) : a;
    }
    a = o;
  }
}
function Xt(e9) {
  for (var t = e9.e * Lt, r = e9.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Yl(e9, t, r) {
  if (t > e9.LN10.sd()) throw Ut = true, r && (e9.precision = r), Error(Qe + "LN10 precision limit exceeded");
  return Nt(new e9(e9.LN10), t);
}
function cn(e9) {
  for (var t = ""; e9--; ) t += "0";
  return t;
}
function So(e9, t) {
  var r, n, i, a, o, s, c, u, l, f = 1, h = 10, d = e9, y = d.d, m = d.constructor, p = m.precision;
  if (d.s < 1) throw Error(Qe + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Re)) return new m(0);
  if (t == null ? (Ut = false, u = p) : u = t, d.eq(10)) return t == null && (Ut = true), Yl(m, u);
  if (u += h, m.precision = u, r = wr(y), n = r.charAt(0), a = Xt(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e9), r = wr(d.d), n = r.charAt(0), f++;
    a = Xt(d), n > 1 ? (d = new m("0." + r), a++) : d = new m(n + "." + r.slice(1));
  } else return c = Yl(m, u + 2, p).times(a + ""), d = So(new m(n + "." + r.slice(1)), u - h).plus(c), m.precision = p, t == null ? (Ut = true, Nt(d, p)) : d;
  for (s = o = d = Wr(d.minus(Re), d.plus(Re), u), l = Nt(d.times(d), u), i = 3; ; ) {
    if (o = Nt(o.times(l), u), c = s.plus(Wr(o, new m(i), u)), wr(c.d).slice(0, u) === wr(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(Yl(m, u + 2, p).times(a + ""))), s = Wr(s, new m(f), u), m.precision = p, t == null ? (Ut = true, Nt(s, p)) : s;
    s = c, i += 2;
  }
}
function Pv(e9, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e9.e = xa(r / Lt), e9.d = [], n = (r + 1) % Lt, r < 0 && (n += Lt), n < i) {
      for (n && e9.d.push(+t.slice(0, n)), i -= Lt; n < i; ) e9.d.push(+t.slice(n, n += Lt));
      t = t.slice(n), n = Lt - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e9.d.push(+t), Ut && (e9.e > qc || e9.e < -qc)) throw Error(wp + r);
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
  if (r !== void 0 && (a = Nn(10, o - i - 1), s = u / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e9.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? u / Nn(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e9.s < 0 ? 8 : 7))), t < 1 || !f[0]) return c ? (a = Xt(e9), f.length = 1, t = t - a - 1, f[0] = Nn(10, (Lt - t % Lt) % Lt), e9.e = xa(-t / Lt) || 0) : (f.length = 1, f[0] = e9.e = e9.s = 0), e9;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = Nn(10, Lt - n), f[l] = i > 0 ? (u / Nn(10, o - i) % Nn(10, i) | 0) * a : 0), c) for (; ; ) if (l == 0) {
    (f[0] += a) == se && (f[0] = 1, ++e9.e);
    break;
  } else {
    if (f[l] += a, f[l] != se) break;
    f[l--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ut && (e9.e > qc || e9.e < -qc)) throw Error(wp + Xt(e9));
  return e9;
}
function wS(e9, t) {
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
  var n, i = Xt(e9), a = wr(e9.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + cn(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + cn(-i - 1) + a, r && (n = r - o) > 0 && (a += cn(n))) : i >= o ? (a += cn(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + cn(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += cn(n))), e9.s < 0 ? "-" + a : a;
}
function Tv(e9, t) {
  if (e9.length > t) return e9.length = t, true;
}
function SS(e9) {
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
      return Pv(o, a.toString());
    } else if (typeof a != "string") throw Error(Wn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, S8.test(a)) Pv(o, a);
    else throw Error(Wn + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = SS, i.config = i.set = O8, e9 === void 0 && (e9 = {}), e9) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e9.hasOwnProperty(r = n[t++]) || (e9[r] = this[r]);
  return i.config(e9), i;
}
function O8(e9) {
  if (!e9 || typeof e9 != "object") throw Error(Qe + "Object expected");
  var t, r, n, i = ["precision", 1, Oa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e9[r = i[t]]) !== void 0) if (xa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(Wn + r + ": " + n);
  if ((n = e9[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(Wn + r + ": " + n);
  return this;
}
var Sp = SS(w8);
Re = new Sp(1);
const Mt = Sp;
function x8(e9) {
  return I8(e9) || T8(e9) || P8(e9) || A8();
}
function A8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P8(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return rh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rh(e9, t);
  }
}
function T8(e9) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e9)) return Array.from(e9);
}
function I8(e9) {
  if (Array.isArray(e9)) return rh(e9);
}
function rh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var E8 = function(t) {
  return t;
}, OS = {}, xS = function(t) {
  return t === OS;
}, Iv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && xS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, $8 = function e4(t, r) {
  return t === 1 ? r : Iv(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== OS;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, Iv(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
      var l = i.map(function(f) {
        return xS(f) ? c.shift() : f;
      });
      return r.apply(void 0, x8(l).concat(c));
    }));
  });
}, rl = function(t) {
  return $8(t.length, t);
}, nh = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, M8 = rl(function(e9, t) {
  return Array.isArray(t) ? t.map(e9) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e9);
}), D8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return E8;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, ih = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, AS = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function N8(e9) {
  var t;
  return e9 === 0 ? t = 1 : t = Math.floor(new Mt(e9).abs().log(10).toNumber()) + 1, t;
}
function C8(e9, t, r) {
  for (var n = new Mt(e9), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var j8 = rl(function(e9, t, r) {
  var n = +e9, i = +t;
  return n + r * (i - n);
}), B8 = rl(function(e9, t, r) {
  var n = t - +e9;
  return n = n || 1 / 0, (r - e9) / n;
}), R8 = rl(function(e9, t, r) {
  var n = t - +e9;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e9) / n));
});
const nl = { rangeStep: C8, getDigitCount: N8, interpolateNumber: j8, uninterpolateNumber: B8, uninterpolateTruncation: R8 };
function ah(e9) {
  return F8(e9) || L8(e9) || PS(e9) || k8();
}
function k8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L8(e9) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e9)) return Array.from(e9);
}
function F8(e9) {
  if (Array.isArray(e9)) return oh(e9);
}
function Oo(e9, t) {
  return W8(e9) || z8(e9, t) || PS(e9, t) || U8();
}
function U8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PS(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return oh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oh(e9, t);
  }
}
function oh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function z8(e9, t) {
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
function W8(e9) {
  if (Array.isArray(e9)) return e9;
}
function TS(e9) {
  var t = Oo(e9, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function IS(e9, t, r) {
  if (e9.lte(0)) return new Mt(0);
  var n = nl.getDigitCount(e9.toNumber()), i = new Mt(10).pow(n), a = e9.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Mt(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new Mt(Math.ceil(c));
}
function V8(e9, t, r) {
  var n = 1, i = new Mt(e9);
  if (!i.isint() && r) {
    var a = Math.abs(e9);
    a < 1 ? (n = new Mt(10).pow(nl.getDigitCount(e9) - 1), i = new Mt(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Mt(Math.floor(e9)));
  } else e9 === 0 ? i = new Mt(Math.floor((t - 1) / 2)) : r || (i = new Mt(Math.floor(e9)));
  var o = Math.floor((t - 1) / 2), s = D8(M8(function(c) {
    return i.add(new Mt(c - o).mul(n)).toNumber();
  }), nh);
  return s(0, t);
}
function ES(e9, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e9) / (r - 1))) return { step: new Mt(0), tickMin: new Mt(0), tickMax: new Mt(0) };
  var a = IS(new Mt(t).sub(e9).div(r - 1), n, i), o;
  e9 <= 0 && t >= 0 ? o = new Mt(0) : (o = new Mt(e9).add(t).div(2), o = o.sub(new Mt(o).mod(a)));
  var s = Math.ceil(o.sub(e9).div(a).toNumber()), c = Math.ceil(new Mt(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? ES(e9, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Mt(s).mul(a)), tickMax: o.add(new Mt(c).mul(a)) });
}
function q8(e9) {
  var t = Oo(e9, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = TS([r, n]), c = Oo(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(ah(nh(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ah(nh(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? ih(f) : f;
  }
  if (u === l) return V8(u, i, a);
  var h = ES(u, l, o, a), d = h.step, y = h.tickMin, m = h.tickMax, p = nl.rangeStep(y, m.add(new Mt(0.1).mul(d)), d);
  return r > n ? ih(p) : p;
}
function G8(e9, t) {
  var r = Oo(e9, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = TS([n, i]), s = Oo(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) return [n, i];
  if (c === u) return [c];
  var l = Math.max(t, 2), f = IS(new Mt(u).sub(c).div(l - 1), a, 0), h = [].concat(ah(nl.rangeStep(new Mt(c), new Mt(u).sub(new Mt(0.99).mul(f)), f)), [u]);
  return n > i ? ih(h) : h;
}
var H8 = AS(q8), K8 = AS(G8), Y8 = "Invariant failed";
function Qn(e9, t) {
  throw new Error(Y8);
}
var X8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Gi(e9) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e9);
}
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Gc.apply(this, arguments);
}
function J8(e9, t) {
  return e6(e9) || t6(e9, t) || Z8(e9, t) || Q8();
}
function Q8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z8(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Ev(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ev(e9, t);
  }
}
function Ev(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function t6(e9, t) {
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
function e6(e9) {
  if (Array.isArray(e9)) return e9;
}
function r6(e9, t) {
  if (e9 == null) return {};
  var r = n6(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function n6(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function i6(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function a6(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, DS(n.key), n);
  }
}
function o6(e9, t, r) {
  return t && a6(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function s6(e9, t, r) {
  return t = Hc(t), c6(e9, $S() ? Reflect.construct(t, r || [], Hc(e9).constructor) : t.apply(e9, r));
}
function c6(e9, t) {
  if (t && (Gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return u6(e9);
}
function u6(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function $S() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($S = function() {
    return !!e9;
  })();
}
function Hc(e9) {
  return Hc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hc(e9);
}
function l6(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && sh(e9, t);
}
function sh(e9, t) {
  return sh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sh(e9, t);
}
function MS(e9, t, r) {
  return t = DS(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function DS(e9) {
  var t = f6(e9, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function f6(e9, t) {
  if (Gi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Aa = function(e9) {
  function t() {
    return i6(this, t), s6(this, t, arguments);
  }
  return l6(t, e9), o6(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, h = r6(n, X8), d = ut(h, false);
    this.props.direction === "x" && l.type !== "number" && Qn();
    var y = c.map(function(m) {
      var p = u(m, s), g = p.x, _ = p.y, w = p.value, S = p.errorVal;
      if (!S) return null;
      var v = [], b, O;
      if (Array.isArray(S)) {
        var P = J8(S, 2);
        b = P[0], O = P[1];
      } else b = O = S;
      if (a === "vertical") {
        var T = l.scale, $ = _ + i, E = $ + o, I = $ - o, j = T(w - b), N = T(w + O);
        v.push({ x1: N, y1: E, x2: N, y2: I }), v.push({ x1: j, y1: $, x2: N, y2: $ }), v.push({ x1: j, y1: E, x2: j, y2: I });
      } else if (a === "horizontal") {
        var M = f.scale, C = g + i, R = C - o, F = C + o, U = M(w - b), q = M(w + O);
        v.push({ x1: R, y1: q, x2: F, y2: q }), v.push({ x1: C, y1: U, x2: C, y2: q }), v.push({ x1: R, y1: U, x2: F, y2: U });
      }
      return A.createElement(St, Gc({ className: "recharts-errorBar", key: "bar-".concat(v.map(function(nt) {
        return "".concat(nt.x1, "-").concat(nt.x2, "-").concat(nt.y1, "-").concat(nt.y2);
      })) }, d), v.map(function(nt) {
        return A.createElement("line", Gc({}, nt, { key: "line-".concat(nt.x1, "-").concat(nt.x2, "-").concat(nt.y1, "-").concat(nt.y2) }));
      }));
    });
    return A.createElement(St, { className: "recharts-errorBars" }, y);
  } }]);
}(A.Component);
MS(Aa, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
MS(Aa, "displayName", "ErrorBar");
function xo(e9) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xo(e9);
}
function $v(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function En(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(r), true).forEach(function(n) {
      h6(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function h6(e9, t, r) {
  return t = d6(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function d6(e9) {
  var t = p6(e9, "string");
  return xo(t) == "symbol" ? t : t + "";
}
function p6(e9, t) {
  if (xo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var NS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = je(r, Un);
  if (!o) return null;
  var s = Un.defaultProps, c = s !== void 0 ? En(En({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var h = f.item, d = f.props, y = d.sectors || d.data || [];
    return l.concat(y.map(function(m) {
      return { type: o.props.iconType || h.props.legendType, value: m.name, color: m.fill, payload: m };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, h = f.type.defaultProps, d = h !== void 0 ? En(En({}, h), f.props) : {}, y = d.dataKey, m = d.name, p = d.legendType, g = d.hide;
    return { inactive: g, dataKey: y, type: c.iconType || p || "square", color: Op(f), value: m || y, payload: d };
  }), En(En(En({}, c), Un.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function Ao(e9) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e9);
}
function Mv(e9) {
  return g6(e9) || v6(e9) || m6(e9) || y6();
}
function y6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m6(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return ch(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ch(e9, t);
  }
}
function v6(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function g6(e9) {
  if (Array.isArray(e9)) return ch(e9);
}
function ch(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Dv(e9, t) {
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
    t % 2 ? Dv(Object(r), true).forEach(function(n) {
      Di(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Di(e9, t, r) {
  return t = b6(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function b6(e9) {
  var t = _6(e9, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function _6(e9, t) {
  if (Ao(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function ae(e9, t, r) {
  return ct(e9) || ct(t) ? r : ie(t) ? Ye(e9, t, r) : lt(t) ? t(e9) : r;
}
function Ja(e9, t, r, n) {
  var i = v8(e9, function(s) {
    return ae(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [el(a), ln(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !ct(s);
  }) : i;
  return o.map(function(s) {
    return ie(s) || s instanceof Date ? s : "";
  });
}
var w6 = function(t) {
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
      var g = [Math.min(f, (d + f) / 2), Math.max(f, (d + f) / 2)];
      if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
        o = i[u].index;
        break;
      }
    } else {
      var _ = Math.min(l, h), w = Math.max(l, h);
      if (t > (_ + f) / 2 && t <= (w + f) / 2) {
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
}, Op = function(t) {
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
}, S6 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++) for (var l = a[s[c]].stackGroups, f = Object.keys(l), h = 0, d = f.length; h < d; h++) {
    var y = l[f[h]], m = y.items, p = y.cateAxisId, g = m.filter(function(O) {
      return Ur(O.type).indexOf("Bar") >= 0;
    });
    if (g && g.length) {
      var _ = g[0].type.defaultProps, w = _ !== void 0 ? qt(qt({}, _), g[0].props) : g[0].props, S = w.barSize, v = w[p];
      o[v] || (o[v] = []);
      var b = ct(S) ? r : S;
      o[v].push({ item: g[0], stackList: g.slice(1), barSize: ct(b) ? void 0 : Yn(b, n, 0) });
    }
  }
  return o;
}, O6 = function(t) {
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
      var b = { item: v.item, position: { offset: p.offset + p.size + u, size: h ? d : v.barSize } }, O = [].concat(Mv(S), [b]);
      return p = O[O.length - 1].position, v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: p });
      }), O;
    }, f);
  } else {
    var g = Yn(n, i, 0, true);
    i - 2 * g - (c - 1) * u <= 0 && (u = 0);
    var _ = (i - 2 * g - (c - 1) * u) / c;
    _ > 1 && (_ >>= 0);
    var w = s === +s ? Math.min(_, s) : _;
    l = o.reduce(function(S, v, b) {
      var O = [].concat(Mv(S), [{ item: v.item, position: { offset: g + (_ + u) * b + (_ - w) / 2, size: w } }]);
      return v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: O[O.length - 1].position });
      }), O;
    }, f);
  }
  return l;
}, x6 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = NS({ children: a, legendWidth: c });
  if (u) {
    var l = i || {}, f = l.width, h = l.height, d = u.align, y = u.verticalAlign, m = u.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && d !== "center" && L(t[d])) return qt(qt({}, t), {}, Di({}, d, t[d] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && d === "center") && y !== "middle" && L(t[y])) return qt(qt({}, t), {}, Di({}, y, t[y] + (h || 0)));
  }
  return t;
}, A6 = function(t, r, n) {
  return ct(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, CS = function(t, r, n, i, a) {
  var o = r.props.children, s = Te(o, Aa).filter(function(u) {
    return A6(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ae(l, n);
      if (ct(f)) return u;
      var h = Array.isArray(f) ? [el(f), ln(f)] : [f, f], d = c.reduce(function(y, m) {
        var p = ae(l, m, 0), g = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), _ = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(g, y[0]), Math.max(_, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], u[0]), Math.max(d[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, P6 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return CS(t, s, n, a, i);
  }).filter(function(s) {
    return !ct(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, jS = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && CS(t, c, u, i) || Ja(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(c, u) {
    return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++) s[u[l]] || (s[u[l]] = true, c.push(u[l]));
    return c;
  }, []);
}, BS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, RS = function(t, r, n, i) {
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
}, Xl = /* @__PURE__ */ new WeakMap(), gs = function(t, r) {
  if (typeof r != "function") return t;
  Xl.has(t) || Xl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Xl.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, T6 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: vo(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: Uc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: Xa(), realScaleType: "point" } : a === "category" ? { scale: vo(), realScaleType: "band" } : { scale: Uc(), realScaleType: "linear" };
  if (Kn(i)) {
    var c = "scale".concat(Uu(i));
    return { scale: (Av[c] || Xa)(), realScaleType: Av[c] ? c : "point" };
  }
  return lt(i) ? { scale: i } : { scale: Xa(), realScaleType: "point" };
}, Nv = 1e-4, I6 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Nv, o = Math.max(i[0], i[1]) + Nv, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, E6 = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, $6 = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, M6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var c = ga(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
  }
}, D6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = ga(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, N6 = { sign: M6, expand: KM, none: ki, silhouette: YM, wiggle: XM, positive: D6 }, C6 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = N6[n], o = HM().keys(i).value(function(s, c) {
    return +ae(s, c, 0);
  }).order(Nf).offset(a);
  return o(t);
}, j6 = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? qt(qt({}, h.type.defaultProps), h.props) : h.props, m = y.stackId, p = y.hide;
    if (p) return f;
    var g = y[n], _ = f[g] || { hasStack: false, stackGroups: {} };
    if (ie(m)) {
      var w = _.stackGroups[m] || { numericAxisId: n, cateAxisId: i, items: [] };
      w.items.push(h), _.hasStack = true, _.stackGroups[m] = w;
    } else _.stackGroups[ri("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
    return qt(qt({}, f), {}, Di({}, g, _));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, h) {
    var d = u[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(m, p) {
        var g = d.stackGroups[p];
        return qt(qt({}, m), {}, Di({}, p, { numericAxisId: n, cateAxisId: i, items: g.items, stackedData: C6(t, g.items, a) }));
      }, y);
    }
    return qt(qt({}, f), {}, Di({}, h, d));
  }, l);
}, B6 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var l = H8(u, a, s);
    return t.domain([el(l), ln(l)]), { niceTicks: l };
  }
  if (a && i === "number") {
    var f = t.domain(), h = K8(f, a, s);
    return { niceTicks: h };
  }
  return null;
};
function Hi(e9) {
  var t = e9.axis, r = e9.ticks, n = e9.bandSize, i = e9.entry, a = e9.index, o = e9.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ct(i[t.dataKey])) {
      var s = gc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = ae(i, ct(o) ? t.dataKey : o);
  return ct(c) ? null : t.scale(c);
}
var Cv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var c = ae(o, r.dataKey, r.domain[s]);
  return ct(c) ? null : r.scale(c) - a / 2 + i;
}, R6 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, k6 = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (ie(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, L6 = function(t) {
  return t.reduce(function(r, n) {
    return [el(n.concat([r[0]]).filter(L)), ln(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, kS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = L6(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, jv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Bv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, uh = function(t, r, n) {
  if (lt(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (jv.test(t[0])) {
    var a = +jv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else lt(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Bv.test(t[1])) {
    var o = +Bv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else lt(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Kc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Xd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = a.length; s < c; s++) {
      var u = a[s], l = a[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Rv = function(t, r, n) {
  return !t || !t.length || Xn(t, Ye(n, "type.defaultProps.domain")) ? r : t;
}, LS = function(t, r) {
  var n = t.type.defaultProps ? qt(qt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return qt(qt({}, ut(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: Op(t), value: ae(r, i), type: c, payload: r, chartType: u, hide: l });
};
function Po(e9) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e9);
}
function kv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kv(Object(r), true).forEach(function(n) {
      F6(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function F6(e9, t, r) {
  return t = U6(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function U6(e9) {
  var t = z6(e9, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function z6(e9, t) {
  if (Po(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Yc = Math.PI / 180, W6 = function(t) {
  return t * 180 / Math.PI;
}, le = function(t, r, n, i) {
  return { x: t + Math.cos(-Yc * i) * n, y: r + Math.sin(-Yc * i) * n };
}, V6 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, q6 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = V6({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: W6(u), angleInRadian: u };
}, G6 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, H6 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Fv = function(t, r) {
  var n = t.x, i = t.y, a = q6({ x: n, y: i }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u) return false;
  if (o === 0) return true;
  var l = G6(r), f = l.startAngle, h = l.endAngle, d = s, y;
  if (f <= h) {
    for (; d > h; ) d -= 360;
    for (; d < f; ) d += 360;
    y = d >= f && d <= h;
  } else {
    for (; d > f; ) d -= 360;
    for (; d < h; ) d += 360;
    y = d >= h && d <= f;
  }
  return y ? Lv(Lv({}, r), {}, { radius: o, angle: H6(d, r) }) : null;
};
function To(e9) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e9);
}
var K6 = ["offset"];
function Y6(e9) {
  return Z6(e9) || Q6(e9) || J6(e9) || X6();
}
function X6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J6(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return lh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lh(e9, t);
  }
}
function Q6(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function Z6(e9) {
  if (Array.isArray(e9)) return lh(e9);
}
function lh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function t4(e9, t) {
  if (e9 == null) return {};
  var r = e42(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function e42(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Uv(e9, t) {
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
    t % 2 ? Uv(Object(r), true).forEach(function(n) {
      r4(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function r4(e9, t, r) {
  return t = n4(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function n4(e9) {
  var t = i4(e9, "string");
  return To(t) == "symbol" ? t : t + "";
}
function i4(e9, t) {
  if (To(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Io.apply(this, arguments);
}
var a4 = function(t) {
  var r = t.value, n = t.formatter, i = ct(t.children) ? r : t.children;
  return lt(n) ? n(i) : i;
}, o4 = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, s4 = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, h = c.outerRadius, d = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + h) / 2, g = o4(d, y), _ = g >= 0 ? 1 : -1, w, S;
  i === "insideStart" ? (w = d + _ * o, S = m) : i === "insideEnd" ? (w = y - _ * o, S = !m) : i === "end" && (w = y + _ * o, S = m), S = g <= 0 ? S : !S;
  var v = le(u, l, p, w), b = le(u, l, p, w + (S ? 1 : -1) * 359), O = "M".concat(v.x, ",").concat(v.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), P = ct(t.id) ? ri("recharts-radial-line-") : t.id;
  return A.createElement("text", Io({}, n, { dominantBaseline: "central", className: mt("recharts-radial-bar-label", s) }), A.createElement("defs", null, A.createElement("path", { id: P, d: O })), A.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, c4 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, c = a.innerRadius, u = a.outerRadius, l = a.startAngle, f = a.endAngle, h = (l + f) / 2;
  if (i === "outside") {
    var d = le(o, s, u + n, h), y = d.x, m = d.y;
    return { x: y, y: m, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
  var p = (c + u) / 2, g = le(o, s, p, h), _ = g.x, w = g.y;
  return { x: _, y: w, textAnchor: "middle", verticalAnchor: "middle" };
}, u4 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, c = o.y, u = o.width, l = o.height, f = l >= 0 ? 1 : -1, h = f * i, d = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", m = u >= 0 ? 1 : -1, p = m * i, g = m > 0 ? "end" : "start", _ = m > 0 ? "start" : "end";
  if (a === "top") {
    var w = { x: s + u / 2, y: c - f * i, textAnchor: "middle", verticalAnchor: d };
    return te(te({}, w), n ? { height: Math.max(c - n.y, 0), width: u } : {});
  }
  if (a === "bottom") {
    var S = { x: s + u / 2, y: c + l + h, textAnchor: "middle", verticalAnchor: y };
    return te(te({}, S), n ? { height: Math.max(n.y + n.height - (c + l), 0), width: u } : {});
  }
  if (a === "left") {
    var v = { x: s - p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" };
    return te(te({}, v), n ? { width: Math.max(v.x - n.x, 0), height: l } : {});
  }
  if (a === "right") {
    var b = { x: s + u + p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" };
    return te(te({}, b), n ? { width: Math.max(n.x + n.width - b.x, 0), height: l } : {});
  }
  var O = n ? { width: u, height: l } : {};
  return a === "insideLeft" ? te({ x: s + p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" }, O) : a === "insideRight" ? te({ x: s + u - p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" }, O) : a === "insideTop" ? te({ x: s + u / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, O) : a === "insideBottom" ? te({ x: s + u / 2, y: c + l - h, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideTopLeft" ? te({ x: s + p, y: c + h, textAnchor: _, verticalAnchor: y }, O) : a === "insideTopRight" ? te({ x: s + u - p, y: c + h, textAnchor: g, verticalAnchor: y }, O) : a === "insideBottomLeft" ? te({ x: s + p, y: c + l - h, textAnchor: _, verticalAnchor: d }, O) : a === "insideBottomRight" ? te({ x: s + u - p, y: c + l - h, textAnchor: g, verticalAnchor: d }, O) : pa(a) && (L(a.x) || jn(a.x)) && (L(a.y) || jn(a.y)) ? te({ x: s + Yn(a.x, u), y: c + Yn(a.y, l), textAnchor: "end", verticalAnchor: "end" }, O) : te({ x: s + u / 2, y: c + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, l4 = function(t) {
  return "cx" in t && L(t.cx);
};
function he(e9) {
  var t = e9.offset, r = t === void 0 ? 5 : t, n = t4(e9, K6), i = te({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, h = i.textBreakAll;
  if (!a || ct(s) && ct(c) && !B.isValidElement(u) && !lt(u)) return null;
  if (B.isValidElement(u)) return B.cloneElement(u, i);
  var d;
  if (lt(u)) {
    if (d = B.createElement(u, i), B.isValidElement(d)) return d;
  } else d = a4(i);
  var y = l4(a), m = ut(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return s4(i, d, m);
  var p = y ? c4(i) : u4(i);
  return A.createElement(Nc, Io({ className: mt("recharts-label", f) }, m, p, { breakAll: h }), d);
}
he.displayName = "Label";
var FS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, h = t.y, d = t.top, y = t.left, m = t.width, p = t.height, g = t.clockWise, _ = t.labelViewBox;
  if (_) return _;
  if (L(m) && L(p)) {
    if (L(f) && L(h)) return { x: f, y: h, width: m, height: p };
    if (L(d) && L(y)) return { x: d, y, width: m, height: p };
  }
  return L(f) && L(h) ? { x: f, y: h, width: 0, height: 0 } : L(r) && L(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: l || c || s || 0, clockWise: g } : t.viewBox ? t.viewBox : {};
}, f4 = function(t, r) {
  return t ? t === true ? A.createElement(he, { key: "label-implicit", viewBox: r }) : ie(t) ? A.createElement(he, { key: "label-implicit", viewBox: r, value: t }) : B.isValidElement(t) ? t.type === he ? B.cloneElement(t, { key: "label-implicit", viewBox: r }) : A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : lt(t) ? A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : pa(t) ? A.createElement(he, Io({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, h4 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = FS(t), o = Te(i, he).map(function(c, u) {
    return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = f4(t.label, r || a);
  return [s].concat(Y6(o));
};
he.parseViewBox = FS;
he.renderCallByParent = h4;
function d4(e9) {
  var t = e9 == null ? 0 : e9.length;
  return t ? e9[t - 1] : void 0;
}
var p4 = d4;
const y4 = Bt(p4);
function Eo(e9) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e9);
}
var m4 = ["valueAccessor"], v4 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function g4(e9) {
  return S4(e9) || w4(e9) || _4(e9) || b4();
}
function b4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _4(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return fh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fh(e9, t);
  }
}
function w4(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function S4(e9) {
  if (Array.isArray(e9)) return fh(e9);
}
function fh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Xc.apply(this, arguments);
}
function zv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zv(Object(r), true).forEach(function(n) {
      O4(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function O4(e9, t, r) {
  return t = x4(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function x4(e9) {
  var t = A4(e9, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function A4(e9, t) {
  if (Eo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function Vv(e9, t) {
  if (e9 == null) return {};
  var r = P4(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function P4(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var T4 = function(t) {
  return Array.isArray(t.value) ? y4(t.value) : t.value;
};
function xr(e9) {
  var t = e9.valueAccessor, r = t === void 0 ? T4 : t, n = Vv(e9, m4), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = Vv(n, v4);
  return !i || !i.length ? null : A.createElement(St, { className: "recharts-label-list" }, i.map(function(l, f) {
    var h = ct(a) ? r(l, f) : ae(l && l.payload, a), d = ct(s) ? {} : { id: "".concat(s, "-").concat(f) };
    return A.createElement(he, Xc({}, ut(l, true), u, d, { parentViewBox: l.parentViewBox, value: h, textBreakAll: c, viewBox: he.parseViewBox(ct(o) ? l : Wv(Wv({}, l), {}, { clockWise: o })), key: "label-".concat(f), index: f }));
  }));
}
xr.displayName = "LabelList";
function I4(e9, t) {
  return e9 ? e9 === true ? A.createElement(xr, { key: "labelList-implicit", data: t }) : A.isValidElement(e9) || lt(e9) ? A.createElement(xr, { key: "labelList-implicit", data: t, content: e9 }) : pa(e9) ? A.createElement(xr, Xc({ data: t }, e9, { key: "labelList-implicit" })) : null : null;
}
function E4(e9, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e9 || !e9.children && r && !e9.label) return null;
  var n = e9.children, i = Te(n, xr).map(function(o, s) {
    return B.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = I4(e9.label, t);
  return [a].concat(g4(i));
}
xr.renderCallByParent = E4;
function $o(e9) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e9);
}
function hh() {
  return hh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, hh.apply(this, arguments);
}
function qv(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(r), true).forEach(function(n) {
      $4(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function $4(e9, t, r) {
  return t = M4(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function M4(e9) {
  var t = D4(e9, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function D4(e9, t) {
  if ($o(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var N4 = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, bs = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / Yc, h = u ? a : a + o * f, d = le(r, n, l, h), y = le(r, n, i, h), m = u ? a - o * f : a, p = le(r, n, l * Math.cos(f * Yc), m);
  return { center: d, circleTangency: y, lineTangency: p, theta: f };
}, US = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = N4(o, s), u = o + c, l = le(r, n, a, o), f = le(r, n, a, u), h = "M ".concat(l.x, ",").concat(l.y, `
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
}, C4 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = sr(l - u), h = bs({ cx: r, cy: n, radius: a, angle: u, sign: f, cornerRadius: o, cornerIsExternal: c }), d = h.circleTangency, y = h.lineTangency, m = h.theta, p = bs({ cx: r, cy: n, radius: a, angle: l, sign: -f, cornerRadius: o, cornerIsExternal: c }), g = p.circleTangency, _ = p.lineTangency, w = p.theta, S = c ? Math.abs(u - l) : Math.abs(u - l) - m - w;
  if (S < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : US({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: l });
  var v = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, `
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
}, j4 = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, zS = function(t) {
  var r = Gv(Gv({}, j4), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, h = r.className;
  if (o < a || l === f) return null;
  var d = mt("recharts-sector", h), y = o - a, m = Yn(s, y, 0, true), p;
  return m > 0 && Math.abs(l - f) < 360 ? p = C4({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(m, y / 2), forceCornerRadius: c, cornerIsExternal: u, startAngle: l, endAngle: f }) : p = US({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: f }), A.createElement("path", hh({}, ut(r, true), { className: d, d: p, role: "img" }));
};
function Mo(e9) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e9);
}
function dh() {
  return dh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, dh.apply(this, arguments);
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
function Kv(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hv(Object(r), true).forEach(function(n) {
      B4(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function B4(e9, t, r) {
  return t = R4(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function R4(e9) {
  var t = k4(e9, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function k4(e9, t) {
  if (Mo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Yv = { curveBasisClosed: BM, curveBasisOpen: RM, curveBasis: jM, curveBumpX: wM, curveBumpY: SM, curveLinearClosed: kM, curveLinear: Wu, curveMonotoneX: LM, curveMonotoneY: FM, curveNatural: UM, curveStep: zM, curveStepAfter: VM, curveStepBefore: WM }, _s = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ja = function(t) {
  return t.x;
}, Ba = function(t) {
  return t.y;
}, L4 = function(t, r) {
  if (lt(t)) return t;
  var n = "curve".concat(Uu(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Yv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Yv[n] || Wu;
}, F4 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? false : c, l = L4(n, s), f = u ? a.filter(function(m) {
    return _s(m);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = u ? o.filter(function(m) {
      return _s(m);
    }) : o, y = f.map(function(m, p) {
      return Kv(Kv({}, m), {}, { base: d[p] });
    });
    return s === "vertical" ? h = ls().y(Ba).x1(ja).x0(function(m) {
      return m.base.x;
    }) : h = ls().x(ja).y1(Ba).y0(function(m) {
      return m.base.y;
    }), h.defined(_s).curve(l), h(y);
  }
  return s === "vertical" && L(o) ? h = ls().y(Ba).x1(ja).x0(o) : L(o) ? h = ls().x(ja).y1(Ba).y0(o) : h = V_().x(ja).y(Ba), h.defined(_s).curve(l), h(f);
}, Vn = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? F4(t) : i;
  return B.createElement("path", dh({}, ut(t, false), bc(t), { className: mt("recharts-curve", r), d: o, ref: a }));
}, WS = { exports: {} }, U4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", z4 = U4, W4 = z4;
function VS() {
}
function qS() {
}
qS.resetWarningCache = VS;
var V4 = function() {
  function e9(n, i, a, o, s, c) {
    if (c !== W4) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e9.isRequired = e9;
  function t() {
    return e9;
  }
  var r = { array: e9, bigint: e9, bool: e9, func: e9, number: e9, object: e9, string: e9, symbol: e9, any: e9, arrayOf: t, element: e9, elementType: e9, instanceOf: t, node: e9, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: qS, resetWarningCache: VS };
  return r.PropTypes = r, r;
};
WS.exports = V4();
var q4 = WS.exports;
const Ot = Bt(q4), { getOwnPropertyNames: G4, getOwnPropertySymbols: H4 } = Object, { hasOwnProperty: K4 } = Object.prototype;
function Jl(e9, t) {
  return function(n, i, a) {
    return e9(n, i, a) && t(n, i, a);
  };
}
function ws(e9) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e9(r, n, i);
    const { cache: a } = i, o = a.get(r), s = a.get(n);
    if (o && s) return o === n && s === r;
    a.set(r, n), a.set(n, r);
    const c = e9(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Y4(e9) {
  return e9 == null ? void 0 : e9[Symbol.toStringTag];
}
function Xv(e9) {
  return G4(e9).concat(H4(e9));
}
const X4 = Object.hasOwn || ((e9, t) => K4.call(e9, t));
function ai(e9, t) {
  return e9 === t || !e9 && !t && e9 !== e9 && t !== t;
}
const J4 = "__v", Q4 = "__o", Z4 = "_owner", { getOwnPropertyDescriptor: Jv, keys: Qv } = Object;
function tz(e9, t) {
  return e9.byteLength === t.byteLength && Jc(new Uint8Array(e9), new Uint8Array(t));
}
function ez(e9, t, r) {
  let n = e9.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e9[n], t[n], n, n, e9, t, r)) return false;
  return true;
}
function rz(e9, t) {
  return e9.byteLength === t.byteLength && Jc(new Uint8Array(e9.buffer, e9.byteOffset, e9.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function nz(e9, t) {
  return ai(e9.getTime(), t.getTime());
}
function iz(e9, t) {
  return e9.name === t.name && e9.message === t.message && e9.cause === t.cause && e9.stack === t.stack;
}
function az(e9, t) {
  return e9 === t;
}
function Zv(e9, t, r) {
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
const oz = ai;
function sz(e9, t, r) {
  const n = Qv(e9);
  let i = n.length;
  if (Qv(t).length !== i) return false;
  for (; i-- > 0; ) if (!GS(e9, t, r, n[i])) return false;
  return true;
}
function Ra(e9, t, r) {
  const n = Xv(e9);
  let i = n.length;
  if (Xv(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !GS(e9, t, r, a) || (o = Jv(e9, a), s = Jv(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function cz(e9, t) {
  return ai(e9.valueOf(), t.valueOf());
}
function uz(e9, t) {
  return e9.source === t.source && e9.flags === t.flags;
}
function tg(e9, t, r) {
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
function Jc(e9, t) {
  let r = e9.byteLength;
  if (t.byteLength !== r || e9.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e9[r] !== t[r]) return false;
  return true;
}
function lz(e9, t) {
  return e9.hostname === t.hostname && e9.pathname === t.pathname && e9.protocol === t.protocol && e9.port === t.port && e9.hash === t.hash && e9.username === t.username && e9.password === t.password;
}
function GS(e9, t, r, n) {
  return (n === Z4 || n === Q4 || n === J4) && (e9.$$typeof || t.$$typeof) ? true : X4(t, n) && r.equals(e9[n], t[n], n, n, e9, t, r);
}
const fz = "[object ArrayBuffer]", hz = "[object Arguments]", dz = "[object Boolean]", pz = "[object DataView]", yz = "[object Date]", mz = "[object Error]", vz = "[object Map]", gz = "[object Number]", bz = "[object Object]", _z = "[object RegExp]", wz = "[object Set]", Sz = "[object String]", Oz = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, xz = "[object URL]", Az = Object.prototype.toString;
function Pz({ areArrayBuffersEqual: e9, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: u, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: y }) {
  return function(p, g, _) {
    if (p === g) return true;
    if (p == null || g == null) return false;
    const w = typeof p;
    if (w !== typeof g) return false;
    if (w !== "object") return w === "number" ? s(p, g, _) : w === "function" ? a(p, g, _) : false;
    const S = p.constructor;
    if (S !== g.constructor) return false;
    if (S === Object) return c(p, g, _);
    if (Array.isArray(p)) return t(p, g, _);
    if (S === Date) return n(p, g, _);
    if (S === RegExp) return l(p, g, _);
    if (S === Map) return o(p, g, _);
    if (S === Set) return f(p, g, _);
    const v = Az.call(p);
    if (v === yz) return n(p, g, _);
    if (v === _z) return l(p, g, _);
    if (v === vz) return o(p, g, _);
    if (v === wz) return f(p, g, _);
    if (v === bz) return typeof p.then != "function" && typeof g.then != "function" && c(p, g, _);
    if (v === xz) return d(p, g, _);
    if (v === mz) return i(p, g, _);
    if (v === hz) return c(p, g, _);
    if (Oz[v]) return h(p, g, _);
    if (v === fz) return e9(p, g, _);
    if (v === pz) return r(p, g, _);
    if (v === dz || v === gz || v === Sz) return u(p, g, _);
    if (y) {
      let b = y[v];
      if (!b) {
        const O = Y4(p);
        O && (b = y[O]);
      }
      if (b) return b(p, g, _);
    }
    return false;
  };
}
function Tz({ circular: e9, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: tz, areArraysEqual: r ? Ra : ez, areDataViewsEqual: rz, areDatesEqual: nz, areErrorsEqual: iz, areFunctionsEqual: az, areMapsEqual: r ? Jl(Zv, Ra) : Zv, areNumbersEqual: oz, areObjectsEqual: r ? Ra : sz, arePrimitiveWrappersEqual: cz, areRegExpsEqual: uz, areSetsEqual: r ? Jl(tg, Ra) : tg, areTypedArraysEqual: r ? Jl(Jc, Ra) : Jc, areUrlsEqual: lz, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e9) {
    const i = ws(n.areArraysEqual), a = ws(n.areMapsEqual), o = ws(n.areObjectsEqual), s = ws(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function Iz(e9) {
  return function(t, r, n, i, a, o, s) {
    return e9(t, r, s);
  };
}
function Ez({ circular: e9, comparator: t, createState: r, equals: n, strict: i }) {
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
const $z = xn();
xn({ strict: true });
xn({ circular: true });
xn({ circular: true, strict: true });
xn({ createInternalComparator: () => ai });
xn({ strict: true, createInternalComparator: () => ai });
xn({ circular: true, createInternalComparator: () => ai });
xn({ circular: true, createInternalComparator: () => ai, strict: true });
function xn(e9 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e9, a = Tz(e9), o = Pz(a), s = r ? r(o) : Iz(o);
  return Ez({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function Mz(e9) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e9);
}
function eg(e9) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e9(a), r = -1) : Mz(i);
  };
  requestAnimationFrame(n);
}
function ph(e9) {
  "@babel/helpers - typeof";
  return ph = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ph(e9);
}
function Dz(e9) {
  return Bz(e9) || jz(e9) || Cz(e9) || Nz();
}
function Nz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cz(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return rg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rg(e9, t);
  }
}
function rg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function jz(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function Bz(e9) {
  if (Array.isArray(e9)) return e9;
}
function Rz() {
  var e9 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = Dz(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          eg(i.bind(null, u), c);
          return;
        }
        i(c), eg(i.bind(null, u));
        return;
      }
      ph(a) === "object" && (e9 = a, t(e9)), typeof a == "function" && a();
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
function Do(e9) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e9);
}
function ng(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ig(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ng(Object(r), true).forEach(function(n) {
      HS(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function HS(e9, t, r) {
  return t = kz(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function kz(e9) {
  var t = Lz(e9, "string");
  return Do(t) === "symbol" ? t : String(t);
}
function Lz(e9, t) {
  if (Do(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Do(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Fz = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Uz = function(t) {
  return t;
}, zz = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Qa = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return ig(ig({}, n), {}, HS({}, i, t(i, r[i])));
  }, {});
}, ag = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(zz(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function Wz(e9, t) {
  return Gz(e9) || qz(e9, t) || KS(e9, t) || Vz();
}
function Vz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qz(e9, t) {
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
function Gz(e9) {
  if (Array.isArray(e9)) return e9;
}
function Hz(e9) {
  return Xz(e9) || Yz(e9) || KS(e9) || Kz();
}
function Kz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KS(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return yh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yh(e9, t);
  }
}
function Yz(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function Xz(e9) {
  if (Array.isArray(e9)) return yh(e9);
}
function yh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var Qc = 1e-4, YS = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, XS = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, og = function(t, r) {
  return function(n) {
    var i = YS(t, r);
    return XS(i, n);
  };
}, Jz = function(t, r) {
  return function(n) {
    var i = YS(t, r), a = [].concat(Hz(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return XS(a, n);
  };
}, sg = function() {
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
        }), l = Wz(u, 4);
        i = l[0], a = l[1], o = l[2], s = l[3];
      }
    }
  }
  var f = og(i, o), h = og(a, s), d = Jz(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, m = function(g) {
    for (var _ = g > 1 ? 1 : g, w = _, S = 0; S < 8; ++S) {
      var v = f(w) - _, b = d(w);
      if (Math.abs(v - _) < Qc || b < Qc) return h(w);
      w = y(w - v / b);
    }
    return h(w);
  };
  return m.isStepper = false, m;
}, Qz = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, h) {
    var d = -(l - f) * n, y = h * a, m = h + (d - y) * s / 1e3, p = h * s / 1e3 + l;
    return Math.abs(p - f) < Qc && Math.abs(m) < Qc ? [f, 0] : [p, m];
  };
  return c.isStepper = true, c.dt = s, c;
}, Zz = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return sg(i);
    case "spring":
      return Qz();
    default:
      if (i.split("(")[0] === "cubic-bezier") return sg(i);
  }
  return typeof i == "function" ? i : null;
};
function No(e9) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e9);
}
function cg(e9) {
  return rW(e9) || eW(e9) || JS(e9) || tW();
}
function tW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eW(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function rW(e9) {
  if (Array.isArray(e9)) return vh(e9);
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
function ue(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), true).forEach(function(n) {
      mh(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function mh(e9, t, r) {
  return t = nW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function nW(e9) {
  var t = iW(e9, "string");
  return No(t) === "symbol" ? t : String(t);
}
function iW(e9, t) {
  if (No(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (No(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function aW(e9, t) {
  return cW(e9) || sW(e9, t) || JS(e9, t) || oW();
}
function oW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JS(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return vh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vh(e9, t);
  }
}
function vh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function sW(e9, t) {
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
function cW(e9) {
  if (Array.isArray(e9)) return e9;
}
var Zc = function(t, r, n) {
  return t + (r - t) * n;
}, gh = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, uW = function e5(t, r, n) {
  var i = Qa(function(a, o) {
    if (gh(o)) {
      var s = t(o.from, o.to, o.velocity), c = aW(s, 2), u = c[0], l = c[1];
      return ue(ue({}, o), {}, { from: u, velocity: l });
    }
    return o;
  }, r);
  return n < 1 ? Qa(function(a, o) {
    return gh(o) ? ue(ue({}, o), {}, { velocity: Zc(o.velocity, i[a].velocity, n), from: Zc(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const lW = function(e9, t, r, n, i) {
  var a = Fz(e9, t), o = a.reduce(function(p, g) {
    return ue(ue({}, p), {}, mh({}, g, [e9[g], t[g]]));
  }, {}), s = a.reduce(function(p, g) {
    return ue(ue({}, p), {}, mh({}, g, { from: e9[g], velocity: 0, to: t[g] }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, h = function() {
    return Qa(function(g, _) {
      return _.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(gh).length;
  }, y = function(g) {
    u || (u = g);
    var _ = g - u, w = _ / r.dt;
    s = uW(r, s, w), i(ue(ue(ue({}, e9), t), h())), u = g, d() || (c = requestAnimationFrame(f));
  }, m = function(g) {
    l || (l = g);
    var _ = (g - l) / n, w = Qa(function(v, b) {
      return Zc.apply(void 0, cg(b).concat([r(_)]));
    }, o);
    if (i(ue(ue(ue({}, e9), t), w)), _ < 1) c = requestAnimationFrame(f);
    else {
      var S = Qa(function(v, b) {
        return Zc.apply(void 0, cg(b).concat([r(1)]));
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
function Ki(e9) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e9);
}
var fW = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function hW(e9, t) {
  if (e9 == null) return {};
  var r = dW(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function dW(e9, t) {
  if (e9 == null) return {};
  var r = {}, n = Object.keys(e9), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e9[i]);
  return r;
}
function Ql(e9) {
  return vW(e9) || mW(e9) || yW(e9) || pW();
}
function pW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yW(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return bh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bh(e9, t);
  }
}
function mW(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function vW(e9) {
  if (Array.isArray(e9)) return bh(e9);
}
function bh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function lg(e9, t) {
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
    t % 2 ? lg(Object(r), true).forEach(function(n) {
      Ha(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Ha(e9, t, r) {
  return t = QS(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function gW(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function bW(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, QS(n.key), n);
  }
}
function _W(e9, t, r) {
  return t && bW(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function QS(e9) {
  var t = wW(e9, "string");
  return Ki(t) === "symbol" ? t : String(t);
}
function wW(e9, t) {
  if (Ki(e9) !== "object" || e9 === null) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ki(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function SW(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && _h(e9, t);
}
function _h(e9, t) {
  return _h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _h(e9, t);
}
function OW(e9) {
  var t = xW();
  return function() {
    var n = tu(e9), i;
    if (t) {
      var a = tu(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return wh(this, i);
  };
}
function wh(e9, t) {
  if (t && (Ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Sh(e9);
}
function Sh(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function xW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function tu(e9) {
  return tu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tu(e9);
}
var lr = function(e9) {
  SW(r, e9);
  var t = OW(r);
  function r(n, i) {
    var a;
    gW(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Sh(a)), a.changeStyle = a.changeStyle.bind(Sh(a)), !s || d <= 0) return a.state = { style: {} }, typeof h == "function" && (a.state = { style: l }), wh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (u) {
      if (typeof h == "function") return a.state = { style: u }, wh(a);
      a.state = { style: c ? Ha({}, c, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return _W(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, s = a.canBegin, c = a.attributeName, u = a.shouldReAnimate, l = a.to, f = a.from, h = this.state.style;
    if (s) {
      if (!o) {
        var d = { style: c ? Ha({}, c, l) : l };
        this.state && h && (c && h[c] !== l || !c && h !== l) && this.setState(d);
        return;
      }
      if (!($z(i.to, l) && i.canBegin && i.isActive)) {
        var y = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var m = y || u ? f : i.to;
        if (this.state && h) {
          var p = { style: c ? Ha({}, c, m) : m };
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
    var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, h = i.onAnimationStart, d = lW(o, s, Zz(u), c, this.changeStyle), y = function() {
      a.stopJSAnimation = d();
    };
    this.manager.start([h, l, y, c, f]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, h = f === void 0 ? 0 : f, d = function(m, p, g) {
      if (g === 0) return m;
      var _ = p.duration, w = p.easing, S = w === void 0 ? "ease" : w, v = p.style, b = p.properties, O = p.onAnimationEnd, P = g > 0 ? o[g - 1] : p, T = b || Object.keys(v);
      if (typeof S == "function" || S === "spring") return [].concat(Ql(m), [a.runJSAnimation.bind(a, { from: P.style, to: v, duration: _, easing: S }), _]);
      var $ = ag(T, _, S), E = er(er(er({}, P.style), v), {}, { transition: $ });
      return [].concat(Ql(m), [E, _, O]).filter(Uz);
    };
    return this.manager.start([c].concat(Ql(o.reduce(d, [l, Math.max(h, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = Rz());
    var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof d == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (h.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var m = s ? Ha({}, s, c) : c, p = ag(Object.keys(m), o, u);
    y.start([l, a, er(er({}, m), {}, { transition: p }), o, f]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = hW(i, fW), u = B.Children.count(a), l = this.state.style;
    if (typeof a == "function") return a(l);
    if (!s || u === 0 || o <= 0) return a;
    var f = function(d) {
      var y = d.props, m = y.style, p = m === void 0 ? {} : m, g = y.className, _ = B.cloneElement(d, er(er({}, c), {}, { style: er(er({}, p), l), className: g }));
      return _;
    };
    return u === 1 ? f(B.Children.only(a)) : A.createElement("div", null, B.Children.map(a, function(h) {
      return f(h);
    }));
  } }]), r;
}(B.PureComponent);
lr.displayName = "Animate";
lr.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: true, canBegin: true, steps: [], onAnimationEnd: function() {
}, onAnimationStart: function() {
} };
lr.propTypes = { from: Ot.oneOfType([Ot.object, Ot.string]), to: Ot.oneOfType([Ot.object, Ot.string]), attributeName: Ot.string, duration: Ot.number, begin: Ot.number, easing: Ot.oneOfType([Ot.string, Ot.func]), steps: Ot.arrayOf(Ot.shape({ duration: Ot.number.isRequired, style: Ot.object.isRequired, easing: Ot.oneOfType([Ot.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ot.func]), properties: Ot.arrayOf("string"), onAnimationEnd: Ot.func })), children: Ot.oneOfType([Ot.node, Ot.func]), isActive: Ot.bool, canBegin: Ot.bool, onAnimationEnd: Ot.func, shouldReAnimate: Ot.bool, onAnimationStart: Ot.func, onAnimationReStart: Ot.func };
function Co(e9) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e9);
}
function eu() {
  return eu = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, eu.apply(this, arguments);
}
function AW(e9, t) {
  return EW(e9) || IW(e9, t) || TW(e9, t) || PW();
}
function PW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TW(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return fg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fg(e9, t);
  }
}
function fg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function IW(e9, t) {
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
function EW(e9) {
  if (Array.isArray(e9)) return e9;
}
function hg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hg(Object(r), true).forEach(function(n) {
      $W(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function $W(e9, t, r) {
  return t = MW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function MW(e9) {
  var t = DW(e9, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function DW(e9, t) {
  if (Co(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var pg = function(t, r, n, i, a) {
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
}, NW = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), h = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= h;
  }
  return false;
}, CW = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, xp = function(t) {
  var r = dg(dg({}, CW), t), n = B.useRef(), i = B.useState(-1), a = AW(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var S = n.current.getTotalLength();
      S && s(S);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.width, f = r.height, h = r.radius, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, g = r.isAnimationActive, _ = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || l === 0 || f === 0) return null;
  var w = mt("recharts-rectangle", d);
  return _ ? A.createElement(lr, { canBegin: o > 0, from: { width: l, height: f, x: c, y: u }, to: { width: l, height: f, x: c, y: u }, duration: m, animationEasing: y, isActive: _ }, function(S) {
    var v = S.width, b = S.height, O = S.x, P = S.y;
    return A.createElement(lr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, isActive: g, easing: y }, A.createElement("path", eu({}, ut(r, true), { className: w, d: pg(O, P, v, b, h), ref: n })));
  }) : A.createElement("path", eu({}, ut(r, true), { className: w, d: pg(c, u, l, f, h) }));
};
function Oh() {
  return Oh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Oh.apply(this, arguments);
}
var il = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = mt("recharts-dot", a);
  return r === +r && n === +n && i === +i ? B.createElement("circle", Oh({}, ut(t, false), bc(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function jo(e9) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e9);
}
var jW = ["x", "y", "top", "left", "width", "height", "className"];
function xh() {
  return xh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, xh.apply(this, arguments);
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
function BW(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), true).forEach(function(n) {
      RW(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function RW(e9, t, r) {
  return t = kW(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function kW(e9) {
  var t = LW(e9, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function LW(e9, t) {
  if (jo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function FW(e9, t) {
  if (e9 == null) return {};
  var r = UW(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function UW(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var zW = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, WW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, h = t.height, d = h === void 0 ? 0 : h, y = t.className, m = FW(t, jW), p = BW({ x: n, y: a, top: s, left: u, width: f, height: d }, m);
  return !L(n) || !L(a) || !L(f) || !L(d) || !L(s) || !L(u) ? null : A.createElement("path", xh({}, ut(p, true), { className: mt("recharts-cross", y), d: zW(n, a, f, d, s, u) }));
}, VW = pw, qW = VW(Object.getPrototypeOf, Object), GW = qW, HW = Qr, KW = GW, YW = Zr, XW = "[object Object]", JW = Function.prototype, QW = Object.prototype, ZS = JW.toString, ZW = QW.hasOwnProperty, t5 = ZS.call(Object);
function e52(e9) {
  if (!YW(e9) || HW(e9) != XW) return false;
  var t = KW(e9);
  if (t === null) return true;
  var r = ZW.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && ZS.call(r) == t5;
}
var r5 = e52;
const n5 = Bt(r5);
var i5 = Qr, a5 = Zr, o5 = "[object Boolean]";
function s5(e9) {
  return e9 === true || e9 === false || a5(e9) && i5(e9) == o5;
}
var c5 = s5;
const u5 = Bt(c5);
function Bo(e9) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e9);
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
function l5(e9, t) {
  return p5(e9) || d5(e9, t) || h5(e9, t) || f5();
}
function f5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h5(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return mg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mg(e9, t);
  }
}
function mg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function d5(e9, t) {
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
function p5(e9) {
  if (Array.isArray(e9)) return e9;
}
function vg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), true).forEach(function(n) {
      y5(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function y5(e9, t, r) {
  return t = m5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function m5(e9) {
  var t = v5(e9, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function v5(e9, t) {
  if (Bo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var bg = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, g5 = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, b5 = function(t) {
  var r = gg(gg({}, g5), t), n = B.useRef(), i = B.useState(-1), a = l5(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var w = n.current.getTotalLength();
      w && s(w);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.upperWidth, f = r.lowerWidth, h = r.height, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, g = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || h !== +h || l === 0 && f === 0 || h === 0) return null;
  var _ = mt("recharts-trapezoid", d);
  return g ? A.createElement(lr, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: h, x: c, y: u }, to: { upperWidth: l, lowerWidth: f, height: h, x: c, y: u }, duration: m, animationEasing: y, isActive: g }, function(w) {
    var S = w.upperWidth, v = w.lowerWidth, b = w.height, O = w.x, P = w.y;
    return A.createElement(lr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, easing: y }, A.createElement("path", ru({}, ut(r, true), { className: _, d: bg(O, P, S, v, b), ref: n })));
  }) : A.createElement("g", null, A.createElement("path", ru({}, ut(r, true), { className: _, d: bg(c, u, l, f, h) })));
}, _5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Ro(e9) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e9);
}
function w5(e9, t) {
  if (e9 == null) return {};
  var r = S5(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function S5(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function _g(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nu(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _g(Object(r), true).forEach(function(n) {
      O5(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function O5(e9, t, r) {
  return t = x5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function x5(e9) {
  var t = A5(e9, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function A5(e9, t) {
  if (Ro(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function P5(e9, t) {
  return nu(nu({}, t), e9);
}
function T5(e9, t) {
  return e9 === "symbols";
}
function wg(e9) {
  var t = e9.shapeType, r = e9.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(xp, r);
    case "trapezoid":
      return A.createElement(b5, r);
    case "sector":
      return A.createElement(zS, r);
    case "symbols":
      if (T5(t)) return A.createElement(qu, r);
      break;
    default:
      return null;
  }
}
function I5(e9) {
  return B.isValidElement(e9) ? e9.props : e9;
}
function Ah(e9) {
  var t = e9.option, r = e9.shapeType, n = e9.propTransformer, i = n === void 0 ? P5 : n, a = e9.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e9.isActive, c = w5(e9, _5), u;
  if (B.isValidElement(t)) u = B.cloneElement(t, nu(nu({}, c), I5(t)));
  else if (lt(t)) u = t(c);
  else if (n5(t) && !u5(t)) {
    var l = i(t, c);
    u = A.createElement(wg, { shapeType: r, elementProps: l });
  } else {
    var f = c;
    u = A.createElement(wg, { shapeType: r, elementProps: f });
  }
  return s ? A.createElement(St, { className: o }, u) : u;
}
function al(e9, t) {
  return t != null && "trapezoids" in e9.props;
}
function ol(e9, t) {
  return t != null && "sectors" in e9.props;
}
function ko(e9, t) {
  return t != null && "points" in e9.props;
}
function E5(e9, t) {
  var r, n, i = e9.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e9.x === t.x, a = e9.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e9.y === t.y;
  return i && a;
}
function $5(e9, t) {
  var r = e9.endAngle === t.endAngle, n = e9.startAngle === t.startAngle;
  return r && n;
}
function M5(e9, t) {
  var r = e9.x === t.x, n = e9.y === t.y, i = e9.z === t.z;
  return r && n && i;
}
function D5(e9, t) {
  var r;
  return al(e9, t) ? r = E5 : ol(e9, t) ? r = $5 : ko(e9, t) && (r = M5), r;
}
function N5(e9, t) {
  var r;
  return al(e9, t) ? r = "trapezoids" : ol(e9, t) ? r = "sectors" : ko(e9, t) && (r = "points"), r;
}
function C5(e9, t) {
  if (al(e9, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (ol(e9, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return ko(e9, t) ? t.payload : {};
}
function j5(e9) {
  var t = e9.activeTooltipItem, r = e9.graphicalItem, n = e9.itemData, i = N5(r, t), a = C5(r, t), o = n.filter(function(c, u) {
    var l = Xn(a, c), f = r.props[i].filter(function(y) {
      var m = D5(r, t);
      return m(y, t);
    }), h = r.props[i].indexOf(f[f.length - 1]), d = u === h;
    return l && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var B5 = Math.ceil, R5 = Math.max;
function k5(e9, t, r, n) {
  for (var i = -1, a = R5(B5((t - e9) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e9, e9 += r;
  return o;
}
var L5 = k5, F5 = Nw, Sg = 1 / 0, U5 = 17976931348623157e292;
function z5(e9) {
  if (!e9) return e9 === 0 ? e9 : 0;
  if (e9 = F5(e9), e9 === Sg || e9 === -Sg) {
    var t = e9 < 0 ? -1 : 1;
    return t * U5;
  }
  return e9 === e9 ? e9 : 0;
}
var tO = z5, W5 = L5, V5 = Ku, Zl = tO;
function q5(e9) {
  return function(t, r, n) {
    return n && typeof n != "number" && V5(t, r, n) && (r = n = void 0), t = Zl(t), r === void 0 ? (r = t, t = 0) : r = Zl(r), n = n === void 0 ? t < r ? 1 : -1 : Zl(n), W5(t, r, n, e9);
  };
}
var G5 = q5, H5 = G5, K5 = H5(), Y5 = K5;
const iu = Bt(Y5);
function Lo(e9) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e9);
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
      eO(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function eO(e9, t, r) {
  return t = X5(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function X5(e9) {
  var t = J5(e9, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function J5(e9, t) {
  if (Lo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Q5 = ["Webkit", "Moz", "O", "ms"], Z5 = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = Q5.reduce(function(a, o) {
    return xg(xg({}, a), {}, eO({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Yi(e9) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e9);
}
function au() {
  return au = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, au.apply(this, arguments);
}
function Ag(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tf(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ag(Object(r), true).forEach(function(n) {
      Ce(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function tV(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Pg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, nO(n.key), n);
  }
}
function eV(e9, t, r) {
  return t && Pg(e9.prototype, t), r && Pg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function rV(e9, t, r) {
  return t = ou(t), nV(e9, rO() ? Reflect.construct(t, r || [], ou(e9).constructor) : t.apply(e9, r));
}
function nV(e9, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iV(e9);
}
function iV(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function rO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rO = function() {
    return !!e9;
  })();
}
function ou(e9) {
  return ou = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ou(e9);
}
function aV(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Ph(e9, t);
}
function Ph(e9, t) {
  return Ph = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ph(e9, t);
}
function Ce(e9, t, r) {
  return t = nO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function nO(e9) {
  var t = oV(e9, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function oV(e9, t) {
  if (Yi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var sV = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, u = Xa().domain(iu(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: l };
}, Tg = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Xi = function(e9) {
  function t(r) {
    var n;
    return tV(this, t), n = rV(this, t, [r]), Ce(n, "handleDrag", function(i) {
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
      var a = Tg(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return aV(t, e9), eV(t, [{ key: "componentWillUnmount", value: function() {
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
    var a = Tg(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, c = i.startX, u = this.state[o], l = this.props, f = l.x, h = l.width, d = l.travellerWidth, y = l.onChange, m = l.gap, p = l.data, g = { startX: this.state.startX, endX: this.state.endX }, _ = n.pageX - a;
    _ > 0 ? _ = Math.min(_, f + h - d - u) : _ < 0 && (_ = Math.max(_, f - u)), g[o] = u + _;
    var w = this.getIndex(g), S = w.startIndex, v = w.endIndex, b = function() {
      var P = p.length - 1;
      return o === "startX" && (s > c ? S % m === 0 : v % m === 0) || s < c && v === P || o === "endX" && (s > c ? v % m === 0 : S % m === 0) || s > c && v === P;
    };
    this.setState(Ce(Ce({}, o, u + _), "brushMoveStartX", n.pageX), function() {
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
    var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, h = c.traveller, d = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, g = Math.max(n, this.props.x), _ = tf(tf({}, ut(this.props, false)), {}, { x: g, y: u, width: l, height: f }), w = d || "Min value: ".concat((a = y[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
    return A.createElement(St, { tabIndex: 0, role: "slider", "aria-label": w, "aria-valuenow": n, className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[i], onTouchStart: this.travellerDragStartHandlers[i], onKeyDown: function(v) {
      ["ArrowLeft", "ArrowRight"].includes(v.key) && (v.preventDefault(), v.stopPropagation(), s.handleTravellerMoveKeyboard(v.key === "ArrowRight" ? 1 : -1, i));
    }, onFocus: function() {
      s.setState({ isTravellerFocused: true });
    }, onBlur: function() {
      s.setState({ isTravellerFocused: false });
    }, style: { cursor: "col-resize" } }, t.renderTraveller(h, _));
  } }, { key: "renderSlide", value: function(n, i) {
    var a = this.props, o = a.y, s = a.height, c = a.stroke, u = a.travellerWidth, l = Math.min(n, i) + u, f = Math.max(Math.abs(i - n) - u, 0);
    return A.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: c, fillOpacity: 0.2, x: l, y: o, width: f, height: s });
  } }, { key: "renderText", value: function() {
    var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, c = n.travellerWidth, u = n.stroke, l = this.state, f = l.startX, h = l.endX, d = 5, y = { pointerEvents: "none", fill: u };
    return A.createElement(St, { className: "recharts-brush-texts" }, A.createElement(Nc, au({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(f, h) - d, y: o + s / 2 }, y), this.getTextOfTick(i)), A.createElement(Nc, au({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(f, h) + c + d, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, m = h.isTextActive, p = h.isSlideMoving, g = h.isTravellerMoving, _ = h.isTravellerFocused;
    if (!i || !i.length || !L(s) || !L(c) || !L(u) || !L(l) || u <= 0 || l <= 0) return null;
    var w = mt("recharts-brush", a), S = A.Children.count(o) === 1, v = Z5("userSelect", "none");
    return A.createElement(St, { className: w, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: v }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || g || _ || f) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
    return A.createElement(A.Fragment, null, A.createElement("rect", { x: i, y: a, width: o, height: s, fill: c, stroke: "none" }), A.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), A.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return A.isValidElement(n) ? a = A.cloneElement(n, i) : lt(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return tf({ prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? sV({ data: a, width: o, x: s, travellerWidth: c, startIndex: l, endIndex: f }) : { scale: null, scaleValues: null });
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
Ce(Xi, "displayName", "Brush");
Ce(Xi, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var cV = Yd;
function uV(e9, t) {
  var r;
  return cV(e9, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var lV = uV, fV = ow, hV = _n, dV = lV, pV = $e, yV = Ku;
function mV(e9, t, r) {
  var n = pV(e9) ? fV : dV;
  return r && yV(e9, t, r) && (t = void 0), n(e9, hV(t));
}
var vV = mV;
const gV = Bt(vV);
var Ar = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Ig = Iw;
function bV(e9, t, r) {
  t == "__proto__" && Ig ? Ig(e9, t, { configurable: true, enumerable: true, value: r, writable: true }) : e9[t] = r;
}
var _V = bV, wV = _V, SV = Pw, OV = _n;
function xV(e9, t) {
  var r = {};
  return t = OV(t), SV(e9, function(n, i, a) {
    wV(r, i, t(n, i, a));
  }), r;
}
var AV = xV;
const PV = Bt(AV);
function TV(e9, t) {
  for (var r = -1, n = e9 == null ? 0 : e9.length; ++r < n; ) if (!t(e9[r], r, e9)) return false;
  return true;
}
var IV = TV, EV = Yd;
function $V(e9, t) {
  var r = true;
  return EV(e9, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var MV = $V, DV = IV, NV = MV, CV = _n, jV = $e, BV = Ku;
function RV(e9, t, r) {
  var n = jV(e9) ? DV : NV;
  return r && BV(e9, t, r) && (t = void 0), n(e9, CV(t));
}
var kV = RV;
const iO = Bt(kV);
var LV = ["x", "y"];
function Fo(e9) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e9);
}
function Th() {
  return Th = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Th.apply(this, arguments);
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
function ka(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), true).forEach(function(n) {
      FV(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function FV(e9, t, r) {
  return t = UV(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function UV(e9) {
  var t = zV(e9, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function zV(e9, t) {
  if (Fo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function WV(e9, t) {
  if (e9 == null) return {};
  var r = VV(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function VV(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function qV(e9, t) {
  var r = e9.x, n = e9.y, i = WV(e9, LV), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), h = parseInt(f, 10);
  return ka(ka(ka(ka(ka({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: l, width: h, name: t.name, radius: t.radius });
}
function $g(e9) {
  return A.createElement(Ah, Th({ shapeType: "rectangle", propTransformer: qV, activeClassName: "recharts-active-bar" }, e9));
}
var GV = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || o$(n);
    return a ? t(n, i) : (a || Qn(), r);
  };
}, HV = ["value", "background"], aO;
function Ji(e9) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e9);
}
function KV(e9, t) {
  if (e9 == null) return {};
  var r = YV(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function YV(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, su.apply(this, arguments);
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
function Yt(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), true).forEach(function(n) {
      fn(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function XV(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Dg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, sO(n.key), n);
  }
}
function JV(e9, t, r) {
  return t && Dg(e9.prototype, t), r && Dg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function QV(e9, t, r) {
  return t = cu(t), ZV(e9, oO() ? Reflect.construct(t, r || [], cu(e9).constructor) : t.apply(e9, r));
}
function ZV(e9, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tq(e9);
}
function tq(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function oO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oO = function() {
    return !!e9;
  })();
}
function cu(e9) {
  return cu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cu(e9);
}
function eq(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Ih(e9, t);
}
function Ih(e9, t) {
  return Ih = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ih(e9, t);
}
function fn(e9, t, r) {
  return t = sO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function sO(e9) {
  var t = rq(e9, "string");
  return Ji(t) == "symbol" ? t : t + "";
}
function rq(e9, t) {
  if (Ji(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var Pa = function(e9) {
  function t() {
    var r;
    XV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = QV(this, t, [].concat(i)), fn(r, "state", { isAnimationFinished: false }), fn(r, "id", ri("recharts-bar-")), fn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), fn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return eq(t, e9), JV(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = ut(this.props, false);
    return n && n.map(function(f, h) {
      var d = h === c, y = d ? u : o, m = Yt(Yt(Yt({}, l), f), {}, { isActive: d, option: y, index: h, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return A.createElement(St, su({ className: "recharts-bar-rectangle" }, co(i.props, f, h), { key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(h) }), A.createElement($g, m));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, c = i.animationBegin, u = i.animationDuration, l = i.animationEasing, f = i.animationId, h = this.state.prevData;
    return A.createElement(lr, { begin: c, duration: u, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(f), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(d) {
      var y = d.t, m = a.map(function(p, g) {
        var _ = h && h[g];
        if (_) {
          var w = Gt(_.x, p.x), S = Gt(_.y, p.y), v = Gt(_.width, p.width), b = Gt(_.height, p.height);
          return Yt(Yt({}, p), {}, { x: w(y), y: S(y), width: v(y), height: b(y) });
        }
        if (o === "horizontal") {
          var O = Gt(0, p.height), P = O(y);
          return Yt(Yt({}, p), {}, { y: p.y + p.height - P, height: P });
        }
        var T = Gt(0, p.width), $ = T(y);
        return Yt(Yt({}, p), {}, { width: $ });
      });
      return A.createElement(St, null, n.renderRectanglesStatically(m));
    });
  } }, { key: "renderRectangles", value: function() {
    var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
    return a && i && i.length && (!o || !Xn(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = ut(this.props.background, false);
    return a.map(function(u, l) {
      u.value;
      var f = u.background, h = KV(u, HV);
      if (!f) return null;
      var d = Yt(Yt(Yt(Yt(Yt({}, h), {}, { fill: "#eee" }, f), c), co(n.props, u, l)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: l, className: "recharts-bar-background-rectangle" });
      return A.createElement($g, su({ key: "background-bar-".concat(l), option: n.props.background, isActive: l === s }, d));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Aa);
    if (!f) return null;
    var h = u === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(p, g) {
      var _ = Array.isArray(p.value) ? p.value[1] : p.value;
      return { x: p.x, y: p.y, value: _, errorVal: ae(p, g) };
    }, y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, y, f.map(function(m) {
      return A.cloneElement(m, { key: "error-bar-".concat(i, "-").concat(m.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, offset: h, dataPointFormatter: d });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, h = n.height, d = n.isAnimationActive, y = n.background, m = n.id;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, g = mt("recharts-bar", o), _ = s && s.allowDataOverflow, w = c && c.allowDataOverflow, S = _ || w, v = ct(m) ? this.id : m;
    return A.createElement(St, { className: g }, _ || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? u : u - f / 2, y: w ? l : l - h / 2, width: _ ? f : f * 2, height: w ? h : h * 2 }))) : null, A.createElement(St, { className: "recharts-bar-rectangles", clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, v), (!d || p) && xr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
}(B.PureComponent);
aO = Pa;
fn(Pa, "displayName", "Bar");
fn(Pa, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
fn(Pa, "getComposedData", function(e9) {
  var t = e9.props, r = e9.item, n = e9.barPosition, i = e9.bandSize, a = e9.xAxis, o = e9.yAxis, s = e9.xAxisTicks, c = e9.yAxisTicks, u = e9.stackedData, l = e9.dataStartIndex, f = e9.displayedData, h = e9.offset, d = E6(n, r);
  if (!d) return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Yt(Yt({}, m), r.props) : r.props, g = p.dataKey, _ = p.children, w = p.minPointSize, S = y === "horizontal" ? o : a, v = u ? S.scale.domain() : null, b = R6({ numericAxis: S }), O = Te(_, Qd), P = f.map(function(T, $) {
    var E, I, j, N, M, C;
    u ? E = $6(u[l + $], v) : (E = ae(T, g), Array.isArray(E) || (E = [b, E]));
    var R = GV(w, aO.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, U = [o.scale(E[0]), o.scale(E[1])], q = U[0], nt = U[1];
      I = Cv({ axis: a, ticks: s, bandSize: i, offset: d.offset, entry: T, index: $ }), j = (F = nt ?? q) !== null && F !== void 0 ? F : void 0, N = d.size;
      var W = q - nt;
      if (M = Number.isNaN(W) ? 0 : W, C = { x: I, y: o.y, width: N, height: o.height }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var at = sr(M || R) * (Math.abs(R) - Math.abs(M));
        j -= at, M += at;
      }
    } else {
      var Rt = [a.scale(E[0]), a.scale(E[1])], Kt = Rt[0], Me = Rt[1];
      if (I = Kt, j = Cv({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: T, index: $ }), N = Me - Kt, M = d.size, C = { x: a.x, y: j, width: a.width, height: M }, Math.abs(R) > 0 && Math.abs(N) < Math.abs(R)) {
        var An = sr(N || R) * (Math.abs(R) - Math.abs(N));
        N += An;
      }
    }
    return Yt(Yt(Yt({}, T), {}, { x: I, y: j, width: N, height: M, value: u ? E : E[1], payload: T, background: C }, O && O[$] && O[$].props), {}, { tooltipPayload: [LS(r, T)], tooltipPosition: { x: I + N / 2, y: j + M / 2 } });
  });
  return Yt({ data: P, layout: y }, h);
});
function Uo(e9) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e9);
}
function nq(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ng(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, cO(n.key), n);
  }
}
function iq(e9, t, r) {
  return t && Ng(e9.prototype, t), r && Ng(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function Cg(e9, t) {
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
    t % 2 ? Cg(Object(r), true).forEach(function(n) {
      sl(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function sl(e9, t, r) {
  return t = cO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function cO(e9) {
  var t = aq(e9, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function aq(e9, t) {
  if (Uo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var oq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, h = !!je(u, Pa);
  return l.reduce(function(d, y) {
    var m = r[y], p = m.orientation, g = m.domain, _ = m.padding, w = _ === void 0 ? {} : _, S = m.mirror, v = m.reversed, b = "".concat(p).concat(S ? "Mirror" : ""), O, P, T, $, E;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = g[1] - g[0], j = 1 / 0, N = m.categoricalDomain.sort(l$);
      if (N.forEach(function(Rt, Kt) {
        Kt > 0 && (j = Math.min((Rt || 0) - (N[Kt - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / I, C = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (O = M * C / 2), m.padding === "no-gap") {
          var R = Yn(t.barCategoryGap, M * C), F = M * C / 2;
          O = F - R - (F - R) / C * R;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : P = m.range, v && (P = [P[1], P[0]]);
    var U = T6(m, a, h), q = U.scale, nt = U.realScaleType;
    q.domain(g).range(P), I6(q);
    var W = B6(q, ir(ir({}, m), {}, { realScaleType: nt }));
    i === "xAxis" ? (E = p === "top" && !S || p === "bottom" && S, T = n.left, $ = f[b] - E * m.height) : i === "yAxis" && (E = p === "left" && !S || p === "right" && S, T = f[b] - E * m.width, $ = n.top);
    var at = ir(ir(ir({}, m), W), {}, { realScaleType: nt, x: T, y: $, scale: q, width: i === "xAxis" ? n.width : m.width, height: i === "yAxis" ? n.height : m.height });
    return at.bandSize = Kc(at, W), !m.hide && i === "xAxis" ? f[b] += (E ? -1 : 1) * at.height : m.hide || (f[b] += (E ? -1 : 1) * at.width), ir(ir({}, d), {}, sl({}, y, at));
  }, {});
}, uO = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, sq = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return uO({ x: r, y: n }, { x: i, y: a });
}, lO = function() {
  function e9(t) {
    nq(this, e9), this.scale = t;
  }
  return iq(e9, [{ key: "domain", get: function() {
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
sl(lO, "EPS", 1e-4);
var Ap = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ir(ir({}, n), {}, sl({}, i, lO.create(t[i])));
  }, {});
  return ir(ir({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return PV(i, function(c, u) {
      return r[u].apply(c, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return iO(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function cq(e9) {
  return (e9 % 180 + 180) % 180;
}
var uq = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = cq(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, lq = _n, fq = ts, hq = Gu;
function dq(e9) {
  return function(t, r, n) {
    var i = Object(t);
    if (!fq(t)) {
      var a = lq(r);
      t = hq(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e9(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var pq = dq, yq = tO;
function mq(e9) {
  var t = yq(e9), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var vq = mq, gq = _w, bq = _n, _q = vq, wq = Math.max;
function Sq(e9, t, r) {
  var n = e9 == null ? 0 : e9.length;
  if (!n) return -1;
  var i = r == null ? 0 : _q(r);
  return i < 0 && (i = wq(n + i, 0)), gq(e9, bq(t), i);
}
var Oq = Sq, xq = pq, Aq = Oq, Pq = xq(Aq), Tq = Pq;
const Iq = Bt(Tq);
var Eq = hE(function(e9) {
  return { x: e9.left, y: e9.top, width: e9.width, height: e9.height };
}, function(e9) {
  return ["l", e9.left, "t", e9.top, "w", e9.width, "h", e9.height].join("");
}), Pp = B.createContext(void 0), Tp = B.createContext(void 0), fO = B.createContext(void 0), hO = B.createContext({}), dO = B.createContext(void 0), pO = B.createContext(0), yO = B.createContext(0), jg = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = Eq(a);
  return A.createElement(Pp.Provider, { value: n }, A.createElement(Tp.Provider, { value: i }, A.createElement(hO.Provider, { value: a }, A.createElement(fO.Provider, { value: l }, A.createElement(dO.Provider, { value: o }, A.createElement(pO.Provider, { value: u }, A.createElement(yO.Provider, { value: c }, s)))))));
}, $q = function() {
  return B.useContext(dO);
}, mO = function(t) {
  var r = B.useContext(Pp);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Mq = function() {
  var t = B.useContext(Pp);
  return un(t);
}, Dq = function() {
  var t = B.useContext(Tp), r = Iq(t, function(n) {
    return iO(n.domain, Number.isFinite);
  });
  return r || un(t);
}, vO = function(t) {
  var r = B.useContext(Tp);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Nq = function() {
  var t = B.useContext(fO);
  return t;
}, Cq = function() {
  return B.useContext(hO);
}, Ip = function() {
  return B.useContext(yO);
}, Ep = function() {
  return B.useContext(pO);
};
function Qi(e9) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e9);
}
function jq(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Bq(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, bO(n.key), n);
  }
}
function Rq(e9, t, r) {
  return t && Bq(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function kq(e9, t, r) {
  return t = uu(t), Lq(e9, gO() ? Reflect.construct(t, r || [], uu(e9).constructor) : t.apply(e9, r));
}
function Lq(e9, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Fq(e9);
}
function Fq(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function gO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gO = function() {
    return !!e9;
  })();
}
function uu(e9) {
  return uu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uu(e9);
}
function Uq(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Eh(e9, t);
}
function Eh(e9, t) {
  return Eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eh(e9, t);
}
function Bg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bg(Object(r), true).forEach(function(n) {
      $p(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Bg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function $p(e9, t, r) {
  return t = bO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function bO(e9) {
  var t = zq(e9, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function zq(e9, t) {
  if (Qi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function Wq(e9, t) {
  return Hq(e9) || Gq(e9, t) || qq(e9, t) || Vq();
}
function Vq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qq(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return kg(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kg(e9, t);
  }
}
function kg(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function Gq(e9, t) {
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
function Hq(e9) {
  if (Array.isArray(e9)) return e9;
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
var Kq = function(t, r) {
  var n;
  return A.isValidElement(t) ? n = A.cloneElement(t, r) : lt(t) ? n = t(r) : n = A.createElement("line", $h({}, r, { className: "recharts-reference-line-line" })), n;
}, Yq = function(t, r, n, i, a, o, s, c, u) {
  var l = a.x, f = a.y, h = a.width, d = a.height;
  if (n) {
    var y = u.y, m = t.y.apply(y, { position: o });
    if (Ar(u, "discard") && !t.y.isInRange(m)) return null;
    var p = [{ x: l + h, y: m }, { x: l, y: m }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var g = u.x, _ = t.x.apply(g, { position: o });
    if (Ar(u, "discard") && !t.x.isInRange(_)) return null;
    var w = [{ x: _, y: f + d }, { x: _, y: f }];
    return s === "top" ? w.reverse() : w;
  }
  if (i) {
    var S = u.segment, v = S.map(function(b) {
      return t.apply(b, { position: o });
    });
    return Ar(u, "discard") && gV(v, function(b) {
      return !t.isInRange(b);
    }) ? null : v;
  }
  return null;
};
function Xq(e9) {
  var t = e9.x, r = e9.y, n = e9.segment, i = e9.xAxisId, a = e9.yAxisId, o = e9.shape, s = e9.className, c = e9.alwaysShow, u = $q(), l = mO(i), f = vO(a), h = Nq();
  if (!u || !h) return null;
  zr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = Ap({ x: l.scale, y: f.scale }), y = ie(t), m = ie(r), p = n && n.length === 2, g = Yq(d, y, m, p, h, e9.position, l.orientation, f.orientation, e9);
  if (!g) return null;
  var _ = Wq(g, 2), w = _[0], S = w.x, v = w.y, b = _[1], O = b.x, P = b.y, T = Ar(e9, "hidden") ? "url(#".concat(u, ")") : void 0, $ = Rg(Rg({ clipPath: T }, ut(e9, true)), {}, { x1: S, y1: v, x2: O, y2: P });
  return A.createElement(St, { className: mt("recharts-reference-line", s) }, Kq(o, $), he.renderCallByParent(e9, sq({ x1: S, y1: v, x2: O, y2: P })));
}
var Mp = function(e9) {
  function t() {
    return jq(this, t), kq(this, t, arguments);
  }
  return Uq(t, e9), Rq(t, [{ key: "render", value: function() {
    return A.createElement(Xq, this.props);
  } }]);
}(A.Component);
$p(Mp, "displayName", "ReferenceLine");
$p(Mp, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Mh() {
  return Mh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Mh.apply(this, arguments);
}
function Zi(e9) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e9);
}
function Lg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), true).forEach(function(n) {
      cl(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Jq(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qq(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, wO(n.key), n);
  }
}
function Zq(e9, t, r) {
  return t && Qq(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function tG(e9, t, r) {
  return t = lu(t), eG(e9, _O() ? Reflect.construct(t, r || [], lu(e9).constructor) : t.apply(e9, r));
}
function eG(e9, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rG(e9);
}
function rG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function _O() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_O = function() {
    return !!e9;
  })();
}
function lu(e9) {
  return lu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lu(e9);
}
function nG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Dh(e9, t);
}
function Dh(e9, t) {
  return Dh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dh(e9, t);
}
function cl(e9, t, r) {
  return t = wO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function wO(e9) {
  var t = iG(e9, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function iG(e9, t) {
  if (Zi(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var aG = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Ap({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return Ar(t, "discard") && !o.isInRange(s) ? null : s;
}, ul = function(e9) {
  function t() {
    return Jq(this, t), tG(this, t, arguments);
  }
  return nG(t, e9), Zq(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = ie(i), l = ie(a);
    if (zr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
    var f = aG(this.props);
    if (!f) return null;
    var h = f.x, d = f.y, y = this.props, m = y.shape, p = y.className, g = Ar(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, _ = Fg(Fg({ clipPath: g }, ut(this.props, true)), {}, { cx: h, cy: d });
    return A.createElement(St, { className: mt("recharts-reference-dot", p) }, t.renderDot(m, _), he.renderCallByParent(this.props, { x: h - o, y: d - o, width: 2 * o, height: 2 * o }));
  } }]);
}(A.Component);
cl(ul, "displayName", "ReferenceDot");
cl(ul, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
cl(ul, "renderDot", function(e9, t) {
  var r;
  return A.isValidElement(e9) ? r = A.cloneElement(e9, t) : lt(e9) ? r = e9(t) : r = A.createElement(il, Mh({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Nh() {
  return Nh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Nh.apply(this, arguments);
}
function ta(e9) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e9);
}
function Ug(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zg(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), true).forEach(function(n) {
      ll(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function oG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sG(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, OO(n.key), n);
  }
}
function cG(e9, t, r) {
  return t && sG(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function uG(e9, t, r) {
  return t = fu(t), lG(e9, SO() ? Reflect.construct(t, r || [], fu(e9).constructor) : t.apply(e9, r));
}
function lG(e9, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return fG(e9);
}
function fG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function SO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (SO = function() {
    return !!e9;
  })();
}
function fu(e9) {
  return fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fu(e9);
}
function hG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Ch(e9, t);
}
function Ch(e9, t) {
  return Ch = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ch(e9, t);
}
function ll(e9, t, r) {
  return t = OO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function OO(e9) {
  var t = dG(e9, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function dG(e9, t) {
  if (ta(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var pG = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var h = Ap({ x: l.scale, y: f.scale }), d = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(c, { position: "start" }) : h.y.rangeMin }, y = { x: r ? h.x.apply(s, { position: "end" }) : h.x.rangeMax, y: i ? h.y.apply(u, { position: "end" }) : h.y.rangeMax };
  return Ar(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : uO(d, y);
}, fl = function(e9) {
  function t() {
    return oG(this, t), uG(this, t, arguments);
  }
  return hG(t, e9), cG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
    zr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var f = ie(i), h = ie(a), d = ie(o), y = ie(s), m = this.props.shape;
    if (!f && !h && !d && !y && !m) return null;
    var p = pG(f, h, d, y, this.props);
    if (!p && !m) return null;
    var g = Ar(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
    return A.createElement(St, { className: mt("recharts-reference-area", c) }, t.renderRect(m, zg(zg({ clipPath: g }, ut(this.props, true)), p)), he.renderCallByParent(this.props, p));
  } }]);
}(A.Component);
ll(fl, "displayName", "ReferenceArea");
ll(fl, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
ll(fl, "renderRect", function(e9, t) {
  var r;
  return A.isValidElement(e9) ? r = A.cloneElement(e9, t) : lt(e9) ? r = e9(t) : r = A.createElement(xp, Nh({}, t, { className: "recharts-reference-area-rect" })), r;
});
function xO(e9, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e9;
  for (var n = [], i = 0; i < e9.length; i += t) n.push(e9[i]);
  return n;
}
function yG(e9, t, r) {
  var n = { width: e9.width + t.width, height: e9.height + t.height };
  return uq(n, r);
}
function mG(e9, t, r) {
  var n = r === "width", i = e9.x, a = e9.y, o = e9.width, s = e9.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function hu(e9, t, r, n, i) {
  if (e9 * t < e9 * n || e9 * t > e9 * i) return false;
  var a = r();
  return e9 * (t - e9 * a / 2 - n) >= 0 && e9 * (t + e9 * a / 2 - i) <= 0;
}
function vG(e9, t) {
  return xO(e9, t + 1);
}
function gG(e9, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0) return { v: xO(n, u) };
    var m = c, p, g = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, _ = y.coordinate, w = c === 0 || hu(e9, _, g, l, s);
    w || (c = 0, l = o, u += 1), w && (l = _ + e9 * (g() / 2 + i), c += u);
  }, h; u <= a.length; ) if (h = f(), h) return h.v;
  return [];
}
function zo(e9) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e9);
}
function Wg(e9, t) {
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
    t % 2 ? Wg(Object(r), true).forEach(function(n) {
      bG(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function bG(e9, t, r) {
  return t = _G(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function _G(e9) {
  var t = wG(e9, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function wG(e9, t) {
  if (zo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function SG(e9, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(h) {
    var d = a[h], y, m = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var p = e9 * (d.coordinate + e9 * m() / 2 - c);
      a[h] = d = fe(fe({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e9 : d.coordinate });
    } else a[h] = d = fe(fe({}, d), {}, { tickCoord: d.coordinate });
    var g = hu(e9, d.tickCoord, m, s, c);
    g && (c = d.tickCoord - e9 * (m() / 2 + i), a[h] = fe(fe({}, d), {}, { isShow: true }));
  }, l = o - 1; l >= 0; l--) u(l);
  return a;
}
function OG(e9, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), h = e9 * (l.coordinate + e9 * f / 2 - u);
    o[s - 1] = l = fe(fe({}, l), {}, { tickCoord: h > 0 ? l.coordinate - h * e9 : l.coordinate });
    var d = hu(e9, l.tickCoord, function() {
      return f;
    }, c, u);
    d && (u = l.tickCoord - e9 * (f / 2 + i), o[s - 1] = fe(fe({}, l), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, m = function(_) {
    var w = o[_], S, v = function() {
      return S === void 0 && (S = r(w, _)), S;
    };
    if (_ === 0) {
      var b = e9 * (w.coordinate - e9 * v() / 2 - c);
      o[_] = w = fe(fe({}, w), {}, { tickCoord: b < 0 ? w.coordinate - b * e9 : w.coordinate });
    } else o[_] = w = fe(fe({}, w), {}, { tickCoord: w.coordinate });
    var O = hu(e9, w.tickCoord, v, c, u);
    O && (c = w.tickCoord + e9 * (v() / 2 + i), o[_] = fe(fe({}, w), {}, { isShow: true }));
  }, p = 0; p < y; p++) m(p);
  return o;
}
function Dp(e9, t, r) {
  var n = e9.tick, i = e9.ticks, a = e9.viewBox, o = e9.minTickGap, s = e9.orientation, c = e9.interval, u = e9.tickFormatter, l = e9.unit, f = e9.angle;
  if (!i || !i.length || !n) return [];
  if (L(c) || wn.isSsr) return vG(i, typeof c == "number" && L(c) ? c : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = l && d === "width" ? Ya(l, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = function(w, S) {
    var v = lt(u) ? u(w.value, S) : w.value;
    return d === "width" ? yG(Ya(v, { fontSize: t, letterSpacing: r }), y, f) : Ya(v, { fontSize: t, letterSpacing: r })[d];
  }, p = i.length >= 2 ? sr(i[1].coordinate - i[0].coordinate) : 1, g = mG(a, p, d);
  return c === "equidistantPreserveStart" ? gG(p, g, m, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = OG(p, g, m, i, o, c === "preserveStartEnd") : h = SG(p, g, m, i, o), h.filter(function(_) {
    return _.isShow;
  }));
}
var xG = ["viewBox"], AG = ["viewBox"], PG = ["ticks"];
function ea(e9) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e9);
}
function xi() {
  return xi = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, xi.apply(this, arguments);
}
function Vg(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zt(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), true).forEach(function(n) {
      Np(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function ef(e9, t) {
  if (e9 == null) return {};
  var r = TG(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function TG(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function IG(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, PO(n.key), n);
  }
}
function EG(e9, t, r) {
  return t && qg(e9.prototype, t), r && qg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function $G(e9, t, r) {
  return t = du(t), MG(e9, AO() ? Reflect.construct(t, r || [], du(e9).constructor) : t.apply(e9, r));
}
function MG(e9, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return DG(e9);
}
function DG(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function AO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (AO = function() {
    return !!e9;
  })();
}
function du(e9) {
  return du = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, du(e9);
}
function NG(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && jh(e9, t);
}
function jh(e9, t) {
  return jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jh(e9, t);
}
function Np(e9, t, r) {
  return t = PO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function PO(e9) {
  var t = CG(e9, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function CG(e9, t) {
  if (ea(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Ta = function(e9) {
  function t(r) {
    var n;
    return IG(this, t), n = $G(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return NG(t, e9), EG(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = ef(n, xG), s = this.props, c = s.viewBox, u = ef(s, AG);
    return !$i(a, c) || !$i(o, u) || !$i(i, this.state);
  } }, { key: "componentDidMount", value: function() {
    var n = this.layerReference;
    if (n) {
      var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      i && this.setState({ fontSize: window.getComputedStyle(i).fontSize, letterSpacing: window.getComputedStyle(i).letterSpacing });
    }
  } }, { key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.x, o = i.y, s = i.width, c = i.height, u = i.orientation, l = i.tickSize, f = i.mirror, h = i.tickMargin, d, y, m, p, g, _, w = f ? -1 : 1, S = n.tickSize || l, v = L(n.tickCoord) ? n.tickCoord : n.coordinate;
    switch (u) {
      case "top":
        d = y = n.coordinate, p = o + +!f * c, m = p - w * S, _ = m - w * h, g = v;
        break;
      case "left":
        m = p = n.coordinate, y = a + +!f * s, d = y - w * S, g = d - w * h, _ = v;
        break;
      case "right":
        m = p = n.coordinate, y = a + +f * s, d = y + w * S, g = d + w * h, _ = v;
        break;
      default:
        d = y = n.coordinate, p = o + +f * c, m = p + w * S, _ = m + w * h, g = v;
        break;
    }
    return { line: { x1: d, y1: m, x2: y, y2: p }, tick: { x: g, y: _ } };
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
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = Zt(Zt(Zt({}, ut(this.props, false)), ut(l, false)), {}, { fill: "none" });
    if (c === "top" || c === "bottom") {
      var h = +(c === "top" && !u || c === "bottom" && u);
      f = Zt(Zt({}, f), {}, { x1: i, y1: a + h * s, x2: i + o, y2: a + h * s });
    } else {
      var d = +(c === "left" && !u || c === "right" && u);
      f = Zt(Zt({}, f), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + s });
    }
    return A.createElement("line", xi({}, f, { className: mt("recharts-cartesian-axis-line", Ye(l, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, h = s.unit, d = Dp(Zt(Zt({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = ut(this.props, false), g = ut(l, false), _ = Zt(Zt({}, p), {}, { fill: "none" }, ut(c, false)), w = d.map(function(S, v) {
      var b = o.getTickLineCoord(S), O = b.line, P = b.tick, T = Zt(Zt(Zt(Zt({ textAnchor: y, verticalAnchor: m }, p), {}, { stroke: "none", fill: u }, g), P), {}, { index: v, payload: S, visibleTicksCount: d.length, tickFormatter: f });
      return A.createElement(St, xi({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord) }, co(o.props, S, v)), c && A.createElement("line", xi({}, _, O, { className: mt("recharts-cartesian-axis-tick-line", Ye(c, "className")) })), l && t.renderTickItem(l, T, "".concat(lt(f) ? f(S.value, v) : S.value).concat(h || "")));
    });
    return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
    if (l) return null;
    var f = this.props, h = f.ticks, d = ef(f, PG), y = h;
    return lt(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || s <= 0 || !y || !y.length ? null : A.createElement(St, { className: mt("recharts-cartesian-axis", u), ref: function(p) {
      n.layerReference = p;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), he.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = mt(i.className, "recharts-cartesian-axis-tick-value");
    return A.isValidElement(n) ? o = A.cloneElement(n, Zt(Zt({}, i), {}, { className: s })) : lt(n) ? o = n(Zt(Zt({}, i), {}, { className: s })) : o = A.createElement(Nc, xi({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(B.Component);
Np(Ta, "displayName", "CartesianAxis");
Np(Ta, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var jG = ["x1", "y1", "x2", "y2", "key"], BG = ["offset"];
function Zn(e9) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e9);
}
function Gg(e9, t) {
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
    t % 2 ? Gg(Object(r), true).forEach(function(n) {
      RG(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function RG(e9, t, r) {
  return t = kG(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function kG(e9) {
  var t = LG(e9, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function LG(e9, t) {
  if (Zn(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, kn.apply(this, arguments);
}
function Hg(e9, t) {
  if (e9 == null) return {};
  var r = FG(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function FG(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
var UG = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return A.createElement("rect", { x: i, y: a, ry: c, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function TO(e9, t) {
  var r;
  if (A.isValidElement(e9)) r = A.cloneElement(e9, t);
  else if (lt(e9)) r = e9(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Hg(t, jG), u = ut(c, false);
    u.offset;
    var l = Hg(u, BG);
    r = A.createElement("line", kn({}, l, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function zG(e9) {
  var t = e9.x, r = e9.width, n = e9.horizontal, i = n === void 0 ? true : n, a = e9.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e9), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return TO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function WG(e9) {
  var t = e9.y, r = e9.height, n = e9.vertical, i = n === void 0 ? true : n, a = e9.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e9), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return TO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function VG(e9) {
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
function qG(e9) {
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
var GG = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return RS(Dp(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, HG = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return RS(Dp(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, li = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function Bh(e9) {
  var t, r, n, i, a, o, s = Ip(), c = Ep(), u = Cq(), l = de(de({}, e9), {}, { stroke: (t = e9.stroke) !== null && t !== void 0 ? t : li.stroke, fill: (r = e9.fill) !== null && r !== void 0 ? r : li.fill, horizontal: (n = e9.horizontal) !== null && n !== void 0 ? n : li.horizontal, horizontalFill: (i = e9.horizontalFill) !== null && i !== void 0 ? i : li.horizontalFill, vertical: (a = e9.vertical) !== null && a !== void 0 ? a : li.vertical, verticalFill: (o = e9.verticalFill) !== null && o !== void 0 ? o : li.verticalFill, x: L(e9.x) ? e9.x : u.left, y: L(e9.y) ? e9.y : u.top, width: L(e9.width) ? e9.width : u.width, height: L(e9.height) ? e9.height : u.height }), f = l.x, h = l.y, d = l.width, y = l.height, m = l.syncWithTicks, p = l.horizontalValues, g = l.verticalValues, _ = Mq(), w = Dq();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(f) || f !== +f || !L(h) || h !== +h) return null;
  var S = l.verticalCoordinatesGenerator || GG, v = l.horizontalCoordinatesGenerator || HG, b = l.horizontalPoints, O = l.verticalPoints;
  if ((!b || !b.length) && lt(v)) {
    var P = p && p.length, T = v({ yAxis: w ? de(de({}, w), {}, { ticks: P ? p : w.ticks }) : void 0, width: s, height: c, offset: u }, P ? true : m);
    zr(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(T), "]")), Array.isArray(T) && (b = T);
  }
  if ((!O || !O.length) && lt(S)) {
    var $ = g && g.length, E = S({ xAxis: _ ? de(de({}, _), {}, { ticks: $ ? g : _.ticks }) : void 0, width: s, height: c, offset: u }, $ ? true : m);
    zr(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(E), "]")), Array.isArray(E) && (O = E);
  }
  return A.createElement("g", { className: "recharts-cartesian-grid" }, A.createElement(UG, { fill: l.fill, fillOpacity: l.fillOpacity, x: l.x, y: l.y, width: l.width, height: l.height, ry: l.ry }), A.createElement(zG, kn({}, l, { offset: u, horizontalPoints: b, xAxis: _, yAxis: w })), A.createElement(WG, kn({}, l, { offset: u, verticalPoints: O, xAxis: _, yAxis: w })), A.createElement(VG, kn({}, l, { horizontalPoints: b })), A.createElement(qG, kn({}, l, { verticalPoints: O })));
}
Bh.displayName = "CartesianGrid";
var KG = ["type", "layout", "connectNulls", "ref"], YG = ["key"];
function ra(e9) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e9);
}
function Kg(e9, t) {
  if (e9 == null) return {};
  var r = XG(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function XG(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Za.apply(this, arguments);
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
function De(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), true).forEach(function(n) {
      ar(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function fi(e9) {
  return tH(e9) || ZG(e9) || QG(e9) || JG();
}
function JG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QG(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Rh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rh(e9, t);
  }
}
function ZG(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function tH(e9) {
  if (Array.isArray(e9)) return Rh(e9);
}
function Rh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
function eH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Xg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, EO(n.key), n);
  }
}
function rH(e9, t, r) {
  return t && Xg(e9.prototype, t), r && Xg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function nH(e9, t, r) {
  return t = pu(t), iH(e9, IO() ? Reflect.construct(t, r || [], pu(e9).constructor) : t.apply(e9, r));
}
function iH(e9, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return aH(e9);
}
function aH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function IO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (IO = function() {
    return !!e9;
  })();
}
function pu(e9) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e9);
}
function oH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && kh(e9, t);
}
function kh(e9, t) {
  return kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kh(e9, t);
}
function ar(e9, t, r) {
  return t = EO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function EO(e9) {
  var t = sH(e9, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function sH(e9, t) {
  if (ra(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var na = function(e9) {
  function t() {
    var r;
    eH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = nH(this, t, [].concat(i)), ar(r, "state", { isAnimationFinished: true, totalLength: 0 }), ar(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ar(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(g, _) {
        return g + _;
      });
      if (!u) return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, h = s - o, d = [], y = 0, m = 0; y < c.length; m += c[y], ++y) if (m + c[y] > f) {
        d = [].concat(fi(c.slice(0, y)), [f - m]);
        break;
      }
      var p = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(fi(t.repeat(c, l)), fi(d), p).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), ar(r, "id", ri("recharts-line-")), ar(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ar(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ar(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return oH(t, e9), rH(t, [{ key: "componentDidMount", value: function() {
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
    var s = this.props, c = s.dot, u = s.points, l = s.dataKey, f = ut(this.props, false), h = ut(c, true), d = u.map(function(m, p) {
      var g = De(De(De({ key: "dot-".concat(p), r: 3 }, f), h), {}, { index: p, cx: m.x, cy: m.y, value: m.value, dataKey: l, payload: m.payload, points: u });
      return t.renderDotItem(c, g);
    }), y = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, Za({ className: "recharts-line-dots", key: "dots" }, y), d);
  } }, { key: "renderCurveStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
    s.ref;
    var f = Kg(s, KG), h = De(De(De({}, ut(f, true)), {}, { fill: "none", className: "recharts-line-curve", clipPath: i ? "url(#clipPath-".concat(a, ")") : null, points: n }, o), {}, { type: c, layout: u, connectNulls: l });
    return A.createElement(Vn, Za({}, h, { pathRef: this.pathRef }));
  } }, { key: "renderCurveWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, g = this.state, _ = g.prevPoints, w = g.totalLength;
    return A.createElement(lr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(S) {
      var v = S.t;
      if (_) {
        var b = _.length / s.length, O = s.map(function(I, j) {
          var N = Math.floor(j * b);
          if (_[N]) {
            var M = _[N], C = Gt(M.x, I.x), R = Gt(M.y, I.y);
            return De(De({}, I), {}, { x: C(v), y: R(v) });
          }
          if (y) {
            var F = Gt(m * 2, I.x), U = Gt(p / 2, I.y);
            return De(De({}, I), {}, { x: F(v), y: U(v) });
          }
          return De(De({}, I), {}, { x: I.x, y: I.y });
        });
        return a.renderCurveStatically(O, n, i);
      }
      var P = Gt(0, w), T = P(v), $;
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
    var g = this.state.isAnimationFinished, _ = s.length === 1, w = mt("recharts-line", c), S = u && u.allowDataOverflow, v = l && l.allowDataOverflow, b = S || v, O = ct(p) ? this.id : p, P = (n = ut(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = M_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? h : h - d / 2, y: v ? f : f - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: h - C / 2, y: f - C / 2, width: d + C, height: y + C }))) : null, !_ && this.renderCurve(b, O), this.renderErrorBar(b, O), (_ || o) && this.renderDots(b, M, O), (!m || g) && xr.renderCallByParent(this.props, s));
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
      var o = i.key, s = Kg(i, YG), c = mt("recharts-line-dot", typeof n != "boolean" ? n.className : "");
      a = A.createElement(il, Za({ key: o }, s, { className: c }));
    }
    return a;
  } }]);
}(B.PureComponent);
ar(na, "displayName", "Line");
ar(na, "defaultProps", { xAxisId: 0, yAxisId: 0, connectNulls: false, activeDot: true, dot: true, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !wn.isSsr, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: false, label: false });
ar(na, "getComposedData", function(e9) {
  var t = e9.props, r = e9.xAxis, n = e9.yAxis, i = e9.xAxisTicks, a = e9.yAxisTicks, o = e9.dataKey, s = e9.bandSize, c = e9.displayedData, u = e9.offset, l = t.layout, f = c.map(function(h, d) {
    var y = ae(h, o);
    return l === "horizontal" ? { x: Hi({ axis: r, ticks: i, bandSize: s, entry: h, index: d }), y: ct(y) ? null : n.scale(y), value: y, payload: h } : { x: ct(y) ? null : r.scale(y), y: Hi({ axis: n, ticks: a, bandSize: s, entry: h, index: d }), value: y, payload: h };
  });
  return De({ points: f, layout: l }, u);
});
var cH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], uH = ["key"], $O;
function ia(e9) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e9);
}
function MO(e9, t) {
  if (e9 == null) return {};
  var r = lH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function lH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
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
function Jg(e9, t) {
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
    t % 2 ? Jg(Object(r), true).forEach(function(n) {
      Sr(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function fH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qg(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, NO(n.key), n);
  }
}
function hH(e9, t, r) {
  return t && Qg(e9.prototype, t), r && Qg(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function dH(e9, t, r) {
  return t = yu(t), pH(e9, DO() ? Reflect.construct(t, r || [], yu(e9).constructor) : t.apply(e9, r));
}
function pH(e9, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yH(e9);
}
function yH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function DO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DO = function() {
    return !!e9;
  })();
}
function yu(e9) {
  return yu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yu(e9);
}
function mH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Lh(e9, t);
}
function Lh(e9, t) {
  return Lh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lh(e9, t);
}
function Sr(e9, t, r) {
  return t = NO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function NO(e9) {
  var t = vH(e9, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function vH(e9, t) {
  if (ia(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var Kr = function(e9) {
  function t() {
    var r;
    fH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = dH(this, t, [].concat(i)), Sr(r, "state", { isAnimationFinished: true }), Sr(r, "id", ri("recharts-area-")), Sr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), lt(o) && o();
    }), Sr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), lt(o) && o();
    }), r;
  }
  return mH(t, e9), hH(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var c = this.props, u = c.dot, l = c.points, f = c.dataKey, h = ut(this.props, false), d = ut(u, true), y = l.map(function(p, g) {
      var _ = an(an(an({ key: "dot-".concat(g), r: 3 }, h), d), {}, { index: g, cx: p.x, cy: p.y, dataKey: f, value: p.value, payload: p.payload, points: l });
      return t.renderDotItem(u, _);
    }), m = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, Ln({ className: "recharts-area-dots" }, m), y);
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
    var d = MO(s, cH);
    return A.createElement(St, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, A.createElement(Vn, Ln({}, ut(d, true), { points: n, connectNulls: f, type: u, baseLine: i, layout: c, stroke: "none", className: "recharts-area-area" })), l !== "none" && A.createElement(Vn, Ln({}, ut(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: n })), l !== "none" && h && A.createElement(Vn, Ln({}, ut(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
    return A.createElement(lr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(g) {
      var _ = g.t;
      if (m) {
        var w = m.length / s.length, S = s.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (m[$]) {
            var E = m[$], I = Gt(E.x, P.x), j = Gt(E.y, P.y);
            return an(an({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        }), v;
        if (L(c) && typeof c == "number") {
          var b = Gt(p, c);
          v = b(_);
        } else if (ct(c) || ga(c)) {
          var O = Gt(p, 0);
          v = O(_);
        } else v = c.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (p[$]) {
            var E = p[$], I = Gt(E.x, P.x), j = Gt(E.y, P.y);
            return an(an({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        });
        return a.renderAreaStatically(S, v, n, i);
      }
      return A.createElement(St, null, A.createElement("defs", null, A.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(_))), A.createElement(St, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, c, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, c = a.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, h = u.totalLength;
    return c && o && o.length && (!l && h > 0 || !Xn(l, o) || !Xn(f, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.top, l = i.left, f = i.xAxis, h = i.yAxis, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var g = this.state.isAnimationFinished, _ = s.length === 1, w = mt("recharts-area", c), S = f && f.allowDataOverflow, v = h && h.allowDataOverflow, b = S || v, O = ct(p) ? this.id : p, P = (n = ut(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = M_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? l : l - d / 2, y: v ? u : u - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: l - C / 2, y: u - C / 2, width: d + C, height: y + C }))) : null, _ ? null : this.renderArea(b, O), (o || _) && this.renderDots(b, M, O), (!m || g) && xr.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(B.PureComponent);
$O = Kr;
Sr(Kr, "displayName", "Area");
Sr(Kr, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
Sr(Kr, "getBaseValue", function(e9, t, r, n) {
  var i = e9.layout, a = e9.baseValue, o = t.props.baseValue, s = o ?? a;
  if (L(s) && typeof s == "number") return s;
  var c = i === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
Sr(Kr, "getComposedData", function(e9) {
  var t = e9.props, r = e9.item, n = e9.xAxis, i = e9.yAxis, a = e9.xAxisTicks, o = e9.yAxisTicks, s = e9.bandSize, c = e9.dataKey, u = e9.stackedData, l = e9.dataStartIndex, f = e9.displayedData, h = e9.offset, d = t.layout, y = u && u.length, m = $O.getBaseValue(t, r, n, i), p = d === "horizontal", g = false, _ = f.map(function(S, v) {
    var b;
    y ? b = u[l + v] : (b = ae(S, c), Array.isArray(b) ? g = true : b = [m, b]);
    var O = b[1] == null || y && ae(S, c) == null;
    return p ? { x: Hi({ axis: n, ticks: a, bandSize: s, entry: S, index: v }), y: O ? null : i.scale(b[1]), value: b, payload: S } : { x: O ? null : n.scale(b[1]), y: Hi({ axis: i, ticks: o, bandSize: s, entry: S, index: v }), value: b, payload: S };
  }), w;
  return y || g ? w = _.map(function(S) {
    var v = Array.isArray(S.value) ? S.value[0] : null;
    return p ? { x: S.x, y: v != null && S.y != null ? i.scale(v) : null } : { x: v != null ? n.scale(v) : null, y: S.y };
  }) : w = p ? i.scale(m) : n.scale(m), an({ points: _, baseLine: w, layout: d, isRange: g }, h);
});
Sr(Kr, "renderDotItem", function(e9, t) {
  var r;
  if (A.isValidElement(e9)) r = A.cloneElement(e9, t);
  else if (lt(e9)) r = e9(t);
  else {
    var n = mt("recharts-area-dot", typeof e9 != "boolean" ? e9.className : ""), i = t.key, a = MO(t, uH);
    r = A.createElement(il, Ln({}, a, { key: i, className: n }));
  }
  return r;
});
function aa(e9) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e9);
}
function gH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function bH(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, BO(n.key), n);
  }
}
function _H(e9, t, r) {
  return t && bH(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function wH(e9, t, r) {
  return t = mu(t), SH(e9, CO() ? Reflect.construct(t, r || [], mu(e9).constructor) : t.apply(e9, r));
}
function SH(e9, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return OH(e9);
}
function OH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function CO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (CO = function() {
    return !!e9;
  })();
}
function mu(e9) {
  return mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mu(e9);
}
function xH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Fh(e9, t);
}
function Fh(e9, t) {
  return Fh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fh(e9, t);
}
function jO(e9, t, r) {
  return t = BO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function BO(e9) {
  var t = AH(e9, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function AH(e9, t) {
  if (aa(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var hl = function(e9) {
  function t() {
    return gH(this, t), wH(this, t, arguments);
  }
  return xH(t, e9), _H(t, [{ key: "render", value: function() {
    return null;
  } }]);
}(B.Component);
jO(hl, "displayName", "ZAxis");
jO(hl, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" });
var PH = ["option", "isActive"];
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, to.apply(this, arguments);
}
function TH(e9, t) {
  if (e9 == null) return {};
  var r = IH(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function IH(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function EH(e9) {
  var t = e9.option, r = e9.isActive, n = TH(e9, PH);
  return typeof t == "string" ? B.createElement(Ah, to({ option: B.createElement(qu, to({ type: t }, n)), isActive: r, shapeType: "symbols" }, n)) : B.createElement(Ah, to({ option: t, isActive: r, shapeType: "symbols" }, n));
}
function oa(e9) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e9);
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, eo.apply(this, arguments);
}
function Zg(e9, t) {
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
    t % 2 ? Zg(Object(r), true).forEach(function(n) {
      hn(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function $H(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tb(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, kO(n.key), n);
  }
}
function MH(e9, t, r) {
  return t && tb(e9.prototype, t), r && tb(e9, r), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function DH(e9, t, r) {
  return t = vu(t), NH(e9, RO() ? Reflect.construct(t, r || [], vu(e9).constructor) : t.apply(e9, r));
}
function NH(e9, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return CH(e9);
}
function CH(e9) {
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
function vu(e9) {
  return vu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vu(e9);
}
function jH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Uh(e9, t);
}
function Uh(e9, t) {
  return Uh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Uh(e9, t);
}
function hn(e9, t, r) {
  return t = kO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function kO(e9) {
  var t = BH(e9, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function BH(e9, t) {
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
    var r;
    $H(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = DH(this, t, [].concat(i)), hn(r, "state", { isAnimationFinished: false }), hn(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true });
    }), hn(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false });
    }), hn(r, "id", ri("recharts-scatter-")), r;
  }
  return jH(t, e9), MH(t, [{ key: "renderSymbolsStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.activeShape, c = a.activeIndex, u = ut(this.props, false);
    return n.map(function(l, f) {
      var h = c === f, d = h ? s : o, y = We(We({}, u), l);
      return A.createElement(St, eo({ className: "recharts-scatter-symbol", key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f) }, co(i.props, l, f), { role: "img" }), A.createElement(EH, eo({ option: d, isActive: h, key: "symbol-".concat(f) }, y)));
    });
  } }, { key: "renderSymbolsWithAnimation", value: function() {
    var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, u = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
    return A.createElement(lr, { begin: s, duration: c, isActive: o, easing: u, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(l), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var d = h.t, y = a.map(function(m, p) {
        var g = f && f[p];
        if (g) {
          var _ = Gt(g.cx, m.cx), w = Gt(g.cy, m.cy), S = Gt(g.size, m.size);
          return We(We({}, m), {}, { cx: _(d), cy: w(d), size: S(d) });
        }
        var v = Gt(0, m.size);
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
    var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, c = i.children, u = Te(c, Aa);
    return u ? u.map(function(l, f) {
      var h = l.props, d = h.direction, y = h.dataKey;
      return A.cloneElement(l, { key: "".concat(d, "-").concat(y, "-").concat(a[f]), data: a, xAxis: o, yAxis: s, layout: d === "x" ? "vertical" : "horizontal", dataPointFormatter: function(p, g) {
        return { x: p.cx, y: p.cy, value: d === "x" ? +p.node.x : +p.node.y, errorVal: ae(p, g) };
      } });
    }) : null;
  } }, { key: "renderLine", value: function() {
    var n = this.props, i = n.points, a = n.line, o = n.lineType, s = n.lineJointType, c = ut(this.props, false), u = ut(a, false), l, f;
    if (o === "joint") l = i.map(function(w) {
      return { x: w.cx, y: w.cy };
    });
    else if (o === "fitting") {
      var h = u$(i), d = h.xmin, y = h.xmax, m = h.a, p = h.b, g = function(S) {
        return m * S + p;
      };
      l = [{ x: d, y: g(d) }, { x: y, y: g(y) }];
    }
    var _ = We(We(We({}, c), {}, { fill: "none", stroke: c && c.fill }, u), {}, { points: l });
    return A.isValidElement(a) ? f = A.cloneElement(a, _) : lt(a) ? f = a(_) : f = A.createElement(Vn, eo({}, _, { type: s })), A.createElement(St, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, f);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, h = n.width, d = n.height, y = n.id, m = n.isAnimationActive;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, g = mt("recharts-scatter", s), _ = c && c.allowDataOverflow, w = u && u.allowDataOverflow, S = _ || w, v = ct(y) ? this.id : y;
    return A.createElement(St, { className: g, clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, _ || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? l : l - h / 2, y: w ? f : f - d / 2, width: _ ? h : h * 2, height: w ? d : d * 2 }))) : null, o && this.renderLine(), this.renderErrorBar(), A.createElement(St, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!m || p) && xr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }]);
}(B.PureComponent);
hn(dl, "displayName", "Scatter");
hn(dl, "defaultProps", { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" });
hn(dl, "getComposedData", function(e9) {
  var t = e9.xAxis, r = e9.yAxis, n = e9.zAxis, i = e9.item, a = e9.displayedData, o = e9.xAxisTicks, s = e9.yAxisTicks, c = e9.offset, u = i.props.tooltipType, l = Te(i.props.children, Qd), f = ct(t.dataKey) ? i.props.dataKey : t.dataKey, h = ct(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : hl.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, _ = a.map(function(w, S) {
    var v = ae(w, f), b = ae(w, h), O = !ct(d) && ae(w, d) || "-", P = [{ name: ct(t.dataKey) ? i.props.name : t.name || t.dataKey, unit: t.unit || "", value: v, payload: w, dataKey: f, type: u }, { name: ct(r.dataKey) ? i.props.name : r.name || r.dataKey, unit: r.unit || "", value: b, payload: w, dataKey: h, type: u }];
    O !== "-" && P.push({ name: n.name || n.dataKey, unit: n.unit || "", value: O, payload: w, dataKey: d, type: u });
    var T = Hi({ axis: t, ticks: o, bandSize: p, entry: w, index: S, dataKey: f }), $ = Hi({ axis: r, ticks: s, bandSize: g, entry: w, index: S, dataKey: h }), E = O !== "-" ? n.scale(O) : m, I = Math.sqrt(Math.max(E, 0) / Math.PI);
    return We(We({}, w), {}, { cx: T, cy: $, x: T - I, y: $ - I, xAxis: t, yAxis: r, zAxis: n, width: 2 * I, height: 2 * I, size: E, node: { x: v, y: b, z: O }, tooltipPayload: P, tooltipPosition: { x: T, y: $ }, payload: w }, l && l[S] && l[S].props);
  });
  return We({ points: _ }, c);
});
function sa(e9) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e9);
}
function RH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function kH(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, UO(n.key), n);
  }
}
function LH(e9, t, r) {
  return t && kH(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function FH(e9, t, r) {
  return t = gu(t), UH(e9, LO() ? Reflect.construct(t, r || [], gu(e9).constructor) : t.apply(e9, r));
}
function UH(e9, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return zH(e9);
}
function zH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function LO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LO = function() {
    return !!e9;
  })();
}
function gu(e9) {
  return gu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gu(e9);
}
function WH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && zh(e9, t);
}
function zh(e9, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e9, t);
}
function FO(e9, t, r) {
  return t = UO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function UO(e9) {
  var t = VH(e9, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function VH(e9, t) {
  if (sa(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function Wh() {
  return Wh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, Wh.apply(this, arguments);
}
function qH(e9) {
  var t = e9.xAxisId, r = Ip(), n = Ep(), i = mO(t);
  return i == null ? null : B.createElement(Ta, Wh({}, i, { className: mt("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Fr(o, true);
  } }));
}
var Wo = function(e9) {
  function t() {
    return RH(this, t), FH(this, t, arguments);
  }
  return WH(t, e9), LH(t, [{ key: "render", value: function() {
    return B.createElement(qH, this.props);
  } }]);
}(B.Component);
FO(Wo, "displayName", "XAxis");
FO(Wo, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function ca(e9) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e9);
}
function GH(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function HH(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, VO(n.key), n);
  }
}
function KH(e9, t, r) {
  return t && HH(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function YH(e9, t, r) {
  return t = bu(t), XH(e9, zO() ? Reflect.construct(t, r || [], bu(e9).constructor) : t.apply(e9, r));
}
function XH(e9, t) {
  if (t && (ca(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return JH(e9);
}
function JH(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function zO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zO = function() {
    return !!e9;
  })();
}
function bu(e9) {
  return bu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bu(e9);
}
function QH(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Vh(e9, t);
}
function Vh(e9, t) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vh(e9, t);
}
function WO(e9, t, r) {
  return t = VO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function VO(e9) {
  var t = ZH(e9, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function ZH(e9, t) {
  if (ca(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
function qh() {
  return qh = Object.assign ? Object.assign.bind() : function(e9) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e9[n] = r[n]);
    }
    return e9;
  }, qh.apply(this, arguments);
}
var tK = function(t) {
  var r = t.yAxisId, n = Ip(), i = Ep(), a = vO(r);
  return a == null ? null : B.createElement(Ta, qh({}, a, { className: mt("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return Fr(s, true);
  } }));
}, Vo = function(e9) {
  function t() {
    return GH(this, t), YH(this, t, arguments);
  }
  return QH(t, e9), KH(t, [{ key: "render", value: function() {
    return B.createElement(tK, this.props);
  } }]);
}(B.Component);
WO(Vo, "displayName", "YAxis");
WO(Vo, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function eb(e9) {
  return iK(e9) || nK(e9) || rK(e9) || eK();
}
function eK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rK(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Gh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gh(e9, t);
  }
}
function nK(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function iK(e9) {
  if (Array.isArray(e9)) return Gh(e9);
}
function Gh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
}
var Hh = function(t, r, n, i, a) {
  var o = Te(t, Mp), s = Te(t, ul), c = [].concat(eb(o), eb(s)), u = Te(t, fl), l = "".concat(i, "Id"), f = i[0], h = r;
  if (c.length && (h = c.reduce(function(m, p) {
    if (p.props[l] === n && Ar(p.props, "extendDomain") && L(p.props[f])) {
      var g = p.props[f];
      return [Math.min(m[0], g), Math.max(m[1], g)];
    }
    return m;
  }, h)), u.length) {
    var d = "".concat(f, "1"), y = "".concat(f, "2");
    h = u.reduce(function(m, p) {
      if (p.props[l] === n && Ar(p.props, "extendDomain") && L(p.props[d]) && L(p.props[y])) {
        var g = p.props[d], _ = p.props[y];
        return [Math.min(m[0], g, _), Math.max(m[1], g, _)];
      }
      return m;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(m, p) {
    return L(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, h)), h;
}, qO = { exports: {} };
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
    var p = this._events[m], g = arguments.length, _, w;
    if (p.fn) {
      switch (p.once && this.removeListener(u, p.fn, void 0, true), g) {
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
      for (w = 1, _ = new Array(g - 1); w < g; w++) _[w - 1] = arguments[w];
      p.fn.apply(p.context, _);
    } else {
      var S = p.length, v;
      for (w = 0; w < S; w++) switch (p[w].once && this.removeListener(u, p[w].fn, void 0, true), g) {
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
          if (!_) for (v = 1, _ = new Array(g - 1); v < g; v++) _[v - 1] = arguments[v];
          p[w].fn.apply(p[w].context, _);
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
      for (var m = 0, p = [], g = y.length; m < g; m++) (y[m].fn !== l || h && !y[m].once || f && y[m].context !== f) && p.push(y[m]);
      p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var l;
    return u ? (l = r ? r + u : u, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e9.exports = s;
})(qO);
var aK = qO.exports;
const oK = Bt(aK);
var rf = new oK(), nf = "recharts.syncMouseEvents";
function qo(e9) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e9);
}
function sK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, GO(n.key), n);
  }
}
function uK(e9, t, r) {
  return t && cK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function af(e9, t, r) {
  return t = GO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function GO(e9) {
  var t = lK(e9, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function lK(e9, t) {
  if (qo(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e9);
}
var fK = function() {
  function e9() {
    sK(this, e9), af(this, "activeIndex", 0), af(this, "coordinateList", []), af(this, "layout", "horizontal");
  }
  return uK(e9, [{ key: "setDetails", value: function(r) {
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
function hK(e9, t, r) {
  if (r === "number" && t === true && Array.isArray(e9)) {
    var n = e9 == null ? void 0 : e9[0], i = e9 == null ? void 0 : e9[1];
    if (n && i && L(n) && L(i)) return true;
  }
  return false;
}
function dK(e9, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e9 === "horizontal" ? t.x - i : r.left + 0.5, y: e9 === "horizontal" ? r.top + 0.5 : t.y - i, width: e9 === "horizontal" ? n : r.width - 1, height: e9 === "horizontal" ? r.height - 1 : n };
}
function HO(e9) {
  var t = e9.cx, r = e9.cy, n = e9.radius, i = e9.startAngle, a = e9.endAngle, o = le(t, r, n, i), s = le(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function pK(e9, t, r) {
  var n, i, a, o;
  if (e9 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e9 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e9 === "centric") {
    var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, h = le(s, c, u, f), d = le(s, c, l, f);
    n = h.x, i = h.y, a = d.x, o = d.y;
  } else return HO(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function Go(e9) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e9);
}
function rb(e9, t) {
  var r = Object.keys(e9);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e9);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e9, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ss(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rb(Object(r), true).forEach(function(n) {
      yK(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : rb(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function yK(e9, t, r) {
  return t = mK(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function mK(e9) {
  var t = vK(e9, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function vK(e9, t) {
  if (Go(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
function gK(e9) {
  var t, r, n = e9.element, i = e9.tooltipEventType, a = e9.isActive, o = e9.activeCoordinate, s = e9.activePayload, c = e9.offset, u = e9.activeTooltipIndex, l = e9.tooltipAxisBandSize, f = e9.layout, h = e9.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
  var y, m = Vn;
  if (h === "ScatterChart") y = o, m = WW;
  else if (h === "BarChart") y = dK(f, o, c, l), m = xp;
  else if (f === "radial") {
    var p = HO(o), g = p.cx, _ = p.cy, w = p.radius, S = p.startAngle, v = p.endAngle;
    y = { cx: g, cy: _, startAngle: S, endAngle: v, innerRadius: w, outerRadius: w }, m = zS;
  } else y = { points: pK(f, o, c) }, m = Vn;
  var b = Ss(Ss(Ss(Ss({ stroke: "#ccc", pointerEvents: "none" }, c), y), ut(d, false)), {}, { payload: s, payloadIndex: u, className: mt("recharts-tooltip-cursor", d.className) });
  return B.isValidElement(d) ? B.cloneElement(d, b) : B.createElement(m, b);
}
var bK = ["item"], _K = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ua(e9) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e9);
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
function nb(e9, t) {
  return OK(e9) || SK(e9, t) || YO(e9, t) || wK();
}
function wK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SK(e9, t) {
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
function OK(e9) {
  if (Array.isArray(e9)) return e9;
}
function ib(e9, t) {
  if (e9 == null) return {};
  var r = xK(e9, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e9);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e9, n) && (r[n] = e9[n]);
  }
  return r;
}
function xK(e9, t) {
  if (e9 == null) return {};
  var r = {};
  for (var n in e9) if (Object.prototype.hasOwnProperty.call(e9, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e9[n];
  }
  return r;
}
function AK(e9, t) {
  if (!(e9 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function PK(e9, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e9, XO(n.key), n);
  }
}
function TK(e9, t, r) {
  return t && PK(e9.prototype, t), Object.defineProperty(e9, "prototype", { writable: false }), e9;
}
function IK(e9, t, r) {
  return t = _u(t), EK(e9, KO() ? Reflect.construct(t, r || [], _u(e9).constructor) : t.apply(e9, r));
}
function EK(e9, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $K(e9);
}
function $K(e9) {
  if (e9 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e9;
}
function KO() {
  try {
    var e9 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KO = function() {
    return !!e9;
  })();
}
function _u(e9) {
  return _u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _u(e9);
}
function MK(e9, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e9.prototype = Object.create(t && t.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t && Kh(e9, t);
}
function Kh(e9, t) {
  return Kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Kh(e9, t);
}
function la(e9) {
  return CK(e9) || NK(e9) || YO(e9) || DK();
}
function DK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YO(e9, t) {
  if (e9) {
    if (typeof e9 == "string") return Yh(e9, t);
    var r = Object.prototype.toString.call(e9).slice(8, -1);
    if (r === "Object" && e9.constructor && (r = e9.constructor.name), r === "Map" || r === "Set") return Array.from(e9);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yh(e9, t);
  }
}
function NK(e9) {
  if (typeof Symbol < "u" && e9[Symbol.iterator] != null || e9["@@iterator"] != null) return Array.from(e9);
}
function CK(e9) {
  if (Array.isArray(e9)) return Yh(e9);
}
function Yh(e9, t) {
  (t == null || t > e9.length) && (t = e9.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e9[r];
  return n;
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
function D(e9) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ab(Object(r), true).forEach(function(n) {
      Q(e9, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e9, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e9, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e9;
}
function Q(e9, t, r) {
  return t = XO(t), t in e9 ? Object.defineProperty(e9, t, { value: r, enumerable: true, configurable: true, writable: true }) : e9[t] = r, e9;
}
function XO(e9) {
  var t = jK(e9, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function jK(e9, t) {
  if (ua(e9) != "object" || !e9) return e9;
  var r = e9[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e9, t);
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e9);
}
var BK = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, RK = { width: "100%", height: "100%" }, JO = { x: 0, y: 0 };
function Os(e9) {
  return e9;
}
var kK = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, LK = function(t, r, n, i) {
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
  return JO;
}, pl = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(la(s), la(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function QO(e9) {
  return e9 === "number" ? [0, "auto"] : void 0;
}
var Xh = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = pl(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = f === void 0 ? s : f;
      h = gc(d, o.dataKey, i);
    } else h = f && f[n] || s[n];
    return h ? [].concat(la(c), [LS(u, h)]) : c;
  }, []);
}, ob = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = kK(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = w6(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, h = Xh(t, r, l, f), d = LK(n, s, l, a);
    return { activeTooltipIndex: l, activeLabel: f, activePayload: h, activeCoordinate: d };
  }
  return null;
}, FK = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = t.stackOffset, d = BS(l, a);
  return n.reduce(function(y, m) {
    var p, g = m.type.defaultProps !== void 0 ? D(D({}, m.type.defaultProps), m.props) : m.props, _ = g.type, w = g.dataKey, S = g.allowDataOverflow, v = g.allowDuplicatedCategory, b = g.scale, O = g.ticks, P = g.includeHidden, T = g[o];
    if (y[T]) return y;
    var $ = pl(t.data, { graphicalItems: i.filter(function(W) {
      var at, Rt = o in W.props ? W.props[o] : (at = W.type.defaultProps) === null || at === void 0 ? void 0 : at[o];
      return Rt === T;
    }), dataStartIndex: c, dataEndIndex: u }), E = $.length, I, j, N;
    hK(g.domain, S, _) && (I = uh(g.domain, null, S), d && (_ === "number" || b !== "auto") && (N = Ja($, w, "category")));
    var M = QO(_);
    if (!I || I.length === 0) {
      var C, R = (C = g.domain) !== null && C !== void 0 ? C : M;
      if (w) {
        if (I = Ja($, w, _), _ === "category" && d) {
          var F = c$(I);
          v && F ? (j = I, I = iu(0, E)) : v || (I = Rv(R, I, m).reduce(function(W, at) {
            return W.indexOf(at) >= 0 ? W : [].concat(la(W), [at]);
          }, []));
        } else if (_ === "category") v ? I = I.filter(function(W) {
          return W !== "" && !ct(W);
        }) : I = Rv(R, I, m).reduce(function(W, at) {
          return W.indexOf(at) >= 0 || at === "" || ct(at) ? W : [].concat(la(W), [at]);
        }, []);
        else if (_ === "number") {
          var U = P6($, i.filter(function(W) {
            var at, Rt, Kt = o in W.props ? W.props[o] : (at = W.type.defaultProps) === null || at === void 0 ? void 0 : at[o], Me = "hide" in W.props ? W.props.hide : (Rt = W.type.defaultProps) === null || Rt === void 0 ? void 0 : Rt.hide;
            return Kt === T && (P || !Me);
          }), w, a, l);
          U && (I = U);
        }
        d && (_ === "number" || b !== "auto") && (N = Ja($, w, "category"));
      } else d ? I = iu(0, E) : s && s[T] && s[T].hasStack && _ === "number" ? I = h === "expand" ? [0, 1] : kS(s[T].stackGroups, c, u) : I = jS($, i.filter(function(W) {
        var at = o in W.props ? W.props[o] : W.type.defaultProps[o], Rt = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return at === T && (P || !Rt);
      }), _, l, true);
      if (_ === "number") I = Hh(f, I, T, a, O), R && (I = uh(R, I, S));
      else if (_ === "category" && R) {
        var q = R, nt = I.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        nt && (I = q);
      }
    }
    return D(D({}, y), {}, Q({}, T, D(D({}, g), {}, { axisType: a, domain: I, categoricalDomain: N, duplicateDomain: j, originalDomain: (p = g.domain) !== null && p !== void 0 ? p : M, isCategorical: d, layout: l })));
  }, {});
}, UK = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = pl(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: u }), d = h.length, y = BS(l, a), m = -1;
  return n.reduce(function(p, g) {
    var _ = g.type.defaultProps !== void 0 ? D(D({}, g.type.defaultProps), g.props) : g.props, w = _[o], S = QO("number");
    if (!p[w]) {
      m++;
      var v;
      return y ? v = iu(0, d) : s && s[w] && s[w].hasStack ? (v = kS(s[w].stackGroups, c, u), v = Hh(f, v, w, a)) : (v = uh(S, jS(h, n.filter(function(b) {
        var O, P, T = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], $ = "hide" in b.props ? b.props.hide : (P = b.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return T === w && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), v = Hh(f, v, w, a)), D(D({}, p), {}, Q({}, w, D(D({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ye(BK, "".concat(a, ".").concat(m % 2), null), domain: v, originalDomain: S, isCategorical: y, layout: l })));
    }
    return p;
  }, {});
}, zK = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), h = Te(l, a), d = {};
  return h && h.length ? d = FK(t, { axes: h, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u }) : o && o.length && (d = UK(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u })), d;
}, WK = function(t) {
  var r = un(t), n = Fr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: Xd(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Kc(r, n) };
}, sb = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = je(r, Xi), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, VK = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = Ur(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, cb = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, qK = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, h = n.margin || {}, d = je(f, Xi), y = je(f, Un), m = Object.keys(c).reduce(function(v, b) {
    var O = c[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, Q({}, P, v[P] + O.width)) : v;
  }, { left: h.left || 0, right: h.right || 0 }), p = Object.keys(o).reduce(function(v, b) {
    var O = o[b], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, Q({}, P, Ye(v, "".concat(P)) + O.height)) : v;
  }, { top: h.top || 0, bottom: h.bottom || 0 }), g = D(D({}, p), m), _ = g.bottom;
  d && (g.bottom += d.props.height || Xi.defaultProps.height), y && r && (g = x6(g, i, n, r));
  var w = u - g.left - g.right, S = l - g.top - g.bottom;
  return D(D({ brushBottom: _ }, g), {}, { width: Math.max(w, 0), height: Math.max(S, 0) });
}, GK = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, HK = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, h = function(g, _) {
    var w = _.graphicalItems, S = _.stackGroups, v = _.offset, b = _.updateId, O = _.dataStartIndex, P = _.dataEndIndex, T = g.barSize, $ = g.layout, E = g.barGap, I = g.barCategoryGap, j = g.maxBarSize, N = cb($), M = N.numericAxisName, C = N.cateAxisName, R = VK(w), F = [];
    return w.forEach(function(U, q) {
      var nt = pl(g.data, { graphicalItems: [U], dataStartIndex: O, dataEndIndex: P }), W = U.type.defaultProps !== void 0 ? D(D({}, U.type.defaultProps), U.props) : U.props, at = W.dataKey, Rt = W.maxBarSize, Kt = W["".concat(M, "Id")], Me = W["".concat(C, "Id")], An = {}, we = c.reduce(function(Pn, Tn) {
        var yl = _["".concat(Tn.axisType, "Map")], Cp = W["".concat(Tn.axisType, "Id")];
        yl && yl[Cp] || Tn.axisType === "zAxis" || Qn();
        var jp = yl[Cp];
        return D(D({}, Pn), {}, Q(Q({}, Tn.axisType, jp), "".concat(Tn.axisType, "Ticks"), Fr(jp)));
      }, An), z = we[C], ft = we["".concat(C, "Ticks")], ht = S && S[Kt] && S[Kt].hasStack && k6(U, S[Kt].stackGroups), k = Ur(U.type).indexOf("Bar") >= 0, Vt = Kc(z, ft), bt = [], Jt = R && S6({ barSize: T, stackGroups: S, totalSize: GK(we, C) });
      if (k) {
        var Qt, Se, en = ct(Rt) ? j : Rt, oi = (Qt = (Se = Kc(z, ft, true)) !== null && Se !== void 0 ? Se : en) !== null && Qt !== void 0 ? Qt : 0;
        bt = O6({ barGap: E, barCategoryGap: I, bandSize: oi !== Vt ? oi : Vt, sizeList: Jt[Me], maxBarSize: en }), oi !== Vt && (bt = bt.map(function(Pn) {
          return D(D({}, Pn), {}, { position: D(D({}, Pn.position), {}, { offset: Pn.position.offset - oi / 2 }) });
        }));
      }
      var as = U && U.type && U.type.getComposedData;
      as && F.push({ props: D(D({}, as(D(D({}, we), {}, { displayedData: nt, props: g, dataKey: at, item: U, bandSize: Vt, barPosition: bt, offset: v, stackedData: ht, layout: $, dataStartIndex: O, dataEndIndex: P }))), {}, Q(Q(Q({ key: U.key || "item-".concat(q) }, M, we[M]), C, we[C]), "animationId", b)), childIndex: w$(U, g.children), item: U });
    }), F;
  }, d = function(g, _) {
    var w = g.props, S = g.dataStartIndex, v = g.dataEndIndex, b = g.updateId;
    if (!$y({ props: w })) return null;
    var O = w.children, P = w.layout, T = w.stackOffset, $ = w.data, E = w.reverseStackOrder, I = cb(P), j = I.numericAxisName, N = I.cateAxisName, M = Te(O, n), C = j6($, M, "".concat(j, "Id"), "".concat(N, "Id"), T, E), R = c.reduce(function(W, at) {
      var Rt = "".concat(at.axisType, "Map");
      return D(D({}, W), {}, Q({}, Rt, zK(w, D(D({}, at), {}, { graphicalItems: M, stackGroups: at.axisType === j && C, dataStartIndex: S, dataEndIndex: v }))));
    }, {}), F = qK(D(D({}, R), {}, { props: w, graphicalItems: M }), _ == null ? void 0 : _.legendBBox);
    Object.keys(R).forEach(function(W) {
      R[W] = l(w, R[W], F, W.replace("Map", ""), r);
    });
    var U = R["".concat(N, "Map")], q = WK(U), nt = h(w, D(D({}, R), {}, { dataStartIndex: S, dataEndIndex: v, updateId: b, graphicalItems: M, stackGroups: C, offset: F }));
    return D(D({ formattedGraphicalItems: nt, graphicalItems: M, offset: F, stackGroups: C }, q), R);
  }, y = function(p) {
    function g(_) {
      var w, S, v;
      return AK(this, g), v = IK(this, g, [_]), Q(v, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Q(v, "accessibilityManager", new fK()), Q(v, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = v.state, P = O.dataStartIndex, T = O.dataEndIndex, $ = O.updateId;
          v.setState(D({ legendBBox: b }, d({ props: v.props, dataStartIndex: P, dataEndIndex: T, updateId: $ }, D(D({}, v.state), {}, { legendBBox: b }))));
        }
      }), Q(v, "handleReceiveSyncEvent", function(b, O, P) {
        if (v.props.syncId === b) {
          if (P === v.eventEmitterSymbol && typeof v.props.syncMethod != "function") return;
          v.applySyncEvent(O);
        }
      }), Q(v, "handleBrushChange", function(b) {
        var O = b.startIndex, P = b.endIndex;
        if (O !== v.state.dataStartIndex || P !== v.state.dataEndIndex) {
          var T = v.state.updateId;
          v.setState(function() {
            return D({ dataStartIndex: O, dataEndIndex: P }, d({ props: v.props, dataStartIndex: O, dataEndIndex: P, updateId: T }, v.state));
          }), v.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: P });
        }
      }), Q(v, "handleMouseEnter", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onMouseEnter;
          lt(T) && T(P, b);
        }
      }), Q(v, "triggeredAfterMouseMove", function(b) {
        var O = v.getMouseInfo(b), P = O ? D(D({}, O), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        v.setState(P), v.triggerSyncEvent(P);
        var T = v.props.onMouseMove;
        lt(T) && T(P, b);
      }), Q(v, "handleItemMouseEnter", function(b) {
        v.setState(function() {
          return { isTooltipActive: true, activeItem: b, activePayload: b.tooltipPayload, activeCoordinate: b.tooltipPosition || { x: b.cx, y: b.cy } };
        });
      }), Q(v, "handleItemMouseLeave", function() {
        v.setState(function() {
          return { isTooltipActive: false };
        });
      }), Q(v, "handleMouseMove", function(b) {
        b.persist(), v.throttleTriggeredAfterMouseMove(b);
      }), Q(v, "handleMouseLeave", function(b) {
        v.throttleTriggeredAfterMouseMove.cancel();
        var O = { isTooltipActive: false };
        v.setState(O), v.triggerSyncEvent(O);
        var P = v.props.onMouseLeave;
        lt(P) && P(O, b);
      }), Q(v, "handleOuterEvent", function(b) {
        var O = _$(b), P = Ye(v.props, "".concat(O));
        if (O && lt(P)) {
          var T, $;
          /.*touch.*/i.test(O) ? $ = v.getMouseInfo(b.changedTouches[0]) : $ = v.getMouseInfo(b), P((T = $) !== null && T !== void 0 ? T : {}, b);
        }
      }), Q(v, "handleClick", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onClick;
          lt(T) && T(P, b);
        }
      }), Q(v, "handleMouseDown", function(b) {
        var O = v.props.onMouseDown;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), Q(v, "handleMouseUp", function(b) {
        var O = v.props.onMouseUp;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), Q(v, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), Q(v, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.handleMouseDown(b.changedTouches[0]);
      }), Q(v, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && v.handleMouseUp(b.changedTouches[0]);
      }), Q(v, "handleDoubleClick", function(b) {
        var O = v.props.onDoubleClick;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), Q(v, "handleContextMenu", function(b) {
        var O = v.props.onContextMenu;
        if (lt(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), Q(v, "triggerSyncEvent", function(b) {
        v.props.syncId !== void 0 && rf.emit(nf, v.props.syncId, b, v.eventEmitterSymbol);
      }), Q(v, "applySyncEvent", function(b) {
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
          var q = D(D({}, R), {}, { x: R.left, y: R.top }), nt = Math.min(j, q.x + q.width), W = Math.min(N, q.y + q.height), at = F[M] && F[M].value, Rt = Xh(v.state, v.props.data, M), Kt = F[M] ? { x: P === "horizontal" ? F[M].coordinate : nt, y: P === "horizontal" ? W : F[M].coordinate } : JO;
          v.setState(D(D({}, b), {}, { activeLabel: at, activeCoordinate: Kt, activePayload: Rt, activeTooltipIndex: M }));
        } else v.setState(b);
      }), Q(v, "renderCursor", function(b) {
        var O, P = v.state, T = P.isTooltipActive, $ = P.activeCoordinate, E = P.activePayload, I = P.offset, j = P.activeTooltipIndex, N = P.tooltipAxisBandSize, M = v.getTooltipEventType(), C = (O = b.props.active) !== null && O !== void 0 ? O : T, R = v.props.layout, F = b.key || "_recharts-cursor";
        return A.createElement(gK, { key: F, activeCoordinate: $, activePayload: E, activeTooltipIndex: j, chartName: r, element: b, isActive: C, layout: R, offset: I, tooltipAxisBandSize: N, tooltipEventType: M });
      }), Q(v, "renderPolarAxis", function(b, O, P) {
        var T = Ye(b, "type.axisType"), $ = Ye(v.state, "".concat(T, "Map")), E = b.type.defaultProps, I = E !== void 0 ? D(D({}, E), b.props) : b.props, j = $ && $[I["".concat(T, "Id")]];
        return B.cloneElement(b, D(D({}, j), {}, { className: mt(T, j.className), key: b.key || "".concat(O, "-").concat(P), ticks: Fr(j, true) }));
      }), Q(v, "renderPolarGrid", function(b) {
        var O = b.props, P = O.radialLines, T = O.polarAngles, $ = O.polarRadius, E = v.state, I = E.radiusAxisMap, j = E.angleAxisMap, N = un(I), M = un(j), C = M.cx, R = M.cy, F = M.innerRadius, U = M.outerRadius;
        return B.cloneElement(b, { polarAngles: Array.isArray(T) ? T : Fr(M, true).map(function(q) {
          return q.coordinate;
        }), polarRadius: Array.isArray($) ? $ : Fr(N, true).map(function(q) {
          return q.coordinate;
        }), cx: C, cy: R, innerRadius: F, outerRadius: U, key: b.key || "polar-grid", radialLines: P });
      }), Q(v, "renderLegend", function() {
        var b = v.state.formattedGraphicalItems, O = v.props, P = O.children, T = O.width, $ = O.height, E = v.props.margin || {}, I = T - (E.left || 0) - (E.right || 0), j = NS({ children: P, formattedGraphicalItems: b, legendWidth: I, legendContent: u });
        if (!j) return null;
        var N = j.item, M = ib(j, bK);
        return B.cloneElement(N, D(D({}, M), {}, { chartWidth: T, chartHeight: $, margin: E, onBBoxUpdate: v.handleLegendBBoxUpdate }));
      }), Q(v, "renderTooltip", function() {
        var b, O = v.props, P = O.children, T = O.accessibilityLayer, $ = je(P, nr);
        if (!$) return null;
        var E = v.state, I = E.isTooltipActive, j = E.activeCoordinate, N = E.activePayload, M = E.activeLabel, C = E.offset, R = (b = $.props.active) !== null && b !== void 0 ? b : I;
        return B.cloneElement($, { viewBox: D(D({}, C), {}, { x: C.left, y: C.top }), active: R, label: M, payload: R ? N : [], coordinate: j, accessibilityLayer: T });
      }), Q(v, "renderBrush", function(b) {
        var O = v.props, P = O.margin, T = O.data, $ = v.state, E = $.offset, I = $.dataStartIndex, j = $.dataEndIndex, N = $.updateId;
        return B.cloneElement(b, { key: b.key || "_recharts-brush", onChange: gs(v.handleBrushChange, b.props.onChange), data: T, x: L(b.props.x) ? b.props.x : E.left, y: L(b.props.y) ? b.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0), width: L(b.props.width) ? b.props.width : E.width, startIndex: I, endIndex: j, updateId: "brush-".concat(N) });
      }), Q(v, "renderReferenceElement", function(b, O, P) {
        if (!b) return null;
        var T = v, $ = T.clipPathId, E = v.state, I = E.xAxisMap, j = E.yAxisMap, N = E.offset, M = b.type.defaultProps || {}, C = b.props, R = C.xAxisId, F = R === void 0 ? M.xAxisId : R, U = C.yAxisId, q = U === void 0 ? M.yAxisId : U;
        return B.cloneElement(b, { key: b.key || "".concat(O, "-").concat(P), xAxis: I[F], yAxis: j[q], viewBox: { x: N.left, y: N.top, width: N.width, height: N.height }, clipPathId: $ });
      }), Q(v, "renderActivePoints", function(b) {
        var O = b.item, P = b.activePoint, T = b.basePoint, $ = b.childIndex, E = b.isRange, I = [], j = O.props.key, N = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = N.activeDot, C = N.dataKey, R = D(D({ index: $, dataKey: C, cx: P.x, cy: P.y, r: 4, fill: Op(O.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ut(M, false)), bc(M));
        return I.push(g.renderActiveDot(M, R, "".concat(j, "-activePoint-").concat($))), T ? I.push(g.renderActiveDot(M, D(D({}, R), {}, { cx: T.x, cy: T.y }), "".concat(j, "-basePoint-").concat($))) : E && I.push(null), I;
      }), Q(v, "renderGraphicChild", function(b, O, P) {
        var T = v.filterFormatItem(b, O, P);
        if (!T) return null;
        var $ = v.getTooltipEventType(), E = v.state, I = E.isTooltipActive, j = E.tooltipAxis, N = E.activeTooltipIndex, M = E.activeLabel, C = v.props.children, R = je(C, nr), F = T.props, U = F.points, q = F.isRange, nt = F.baseLine, W = T.item.type.defaultProps !== void 0 ? D(D({}, T.item.type.defaultProps), T.item.props) : T.item.props, at = W.activeDot, Rt = W.hide, Kt = W.activeBar, Me = W.activeShape, An = !!(!Rt && I && R && (at || Kt || Me)), we = {};
        $ !== "axis" && R && R.props.trigger === "click" ? we = { onClick: gs(v.handleItemMouseEnter, b.props.onClick) } : $ !== "axis" && (we = { onMouseLeave: gs(v.handleItemMouseLeave, b.props.onMouseLeave), onMouseEnter: gs(v.handleItemMouseEnter, b.props.onMouseEnter) });
        var z = B.cloneElement(b, D(D({}, T.props), we));
        function ft(Tn) {
          return typeof j.dataKey == "function" ? j.dataKey(Tn.payload) : null;
        }
        if (An) if (N >= 0) {
          var ht, k;
          if (j.dataKey && !j.allowDuplicatedCategory) {
            var Vt = typeof j.dataKey == "function" ? ft : "payload.".concat(j.dataKey.toString());
            ht = gc(U, Vt, M), k = q && nt && gc(nt, Vt, M);
          } else ht = U == null ? void 0 : U[N], k = q && nt && nt[N];
          if (Me || Kt) {
            var bt = b.props.activeIndex !== void 0 ? b.props.activeIndex : N;
            return [B.cloneElement(b, D(D(D({}, T.props), we), {}, { activeIndex: bt })), null, null];
          }
          if (!ct(ht)) return [z].concat(la(v.renderActivePoints({ item: T, activePoint: ht, basePoint: k, childIndex: N, isRange: q })));
        } else {
          var Jt, Qt = (Jt = v.getItemByXY(v.state.activeCoordinate)) !== null && Jt !== void 0 ? Jt : { graphicalItem: z }, Se = Qt.graphicalItem, en = Se.item, oi = en === void 0 ? b : en, as = Se.childIndex, Pn = D(D(D({}, T.props), we), {}, { activeIndex: as });
          return [B.cloneElement(oi, Pn), null, null];
        }
        return q ? [z, null, null] : [z, null];
      }), Q(v, "renderCustomized", function(b, O, P) {
        return B.cloneElement(b, D(D({ key: "recharts-customized-".concat(P) }, v.props), v.state));
      }), Q(v, "renderMap", { CartesianGrid: { handler: Os, once: true }, ReferenceArea: { handler: v.renderReferenceElement }, ReferenceLine: { handler: Os }, ReferenceDot: { handler: v.renderReferenceElement }, XAxis: { handler: Os }, YAxis: { handler: Os }, Brush: { handler: v.renderBrush, once: true }, Bar: { handler: v.renderGraphicChild }, Line: { handler: v.renderGraphicChild }, Area: { handler: v.renderGraphicChild }, Radar: { handler: v.renderGraphicChild }, RadialBar: { handler: v.renderGraphicChild }, Scatter: { handler: v.renderGraphicChild }, Pie: { handler: v.renderGraphicChild }, Funnel: { handler: v.renderGraphicChild }, Tooltip: { handler: v.renderCursor, once: true }, PolarGrid: { handler: v.renderPolarGrid, once: true }, PolarAngleAxis: { handler: v.renderPolarAxis }, PolarRadiusAxis: { handler: v.renderPolarAxis }, Customized: { handler: v.renderCustomized } }), v.clipPathId = "".concat((w = _.id) !== null && w !== void 0 ? w : ri("recharts"), "-clip"), v.throttleTriggeredAfterMouseMove = Cw(v.triggeredAfterMouseMove, (S = _.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), v.state = {}, v;
    }
    return MK(g, p), TK(g, [{ key: "componentDidMount", value: function() {
      var w, S;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var w = this.props, S = w.children, v = w.data, b = w.height, O = w.layout, P = je(S, nr);
      if (P) {
        var T = P.props.defaultIndex;
        if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
          var $ = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, E = Xh(this.state, v, T, $), I = this.state.tooltipTicks[T].coordinate, j = (this.state.offset.top + b) / 2, N = O === "horizontal", M = N ? { x: I, y: j } : { y: I, x: j }, C = this.state.formattedGraphicalItems.find(function(F) {
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
      xf([je(w.children, nr)], [je(this.props.children, nr)]) || this.displayDefaultTooltip();
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
      var S = this.container, v = S.getBoundingClientRect(), b = HL(v), O = { chartX: Math.round(w.pageX - b.left), chartY: Math.round(w.pageY - b.top) }, P = v.width / S.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, P);
      if (!T) return null;
      var $ = this.state, E = $.xAxisMap, I = $.yAxisMap, j = this.getTooltipEventType(), N = ob(this.state, this.props.data, this.props.layout, T);
      if (j !== "axis" && E && I) {
        var M = un(E).scale, C = un(I).scale, R = M && M.invert ? M.invert(O.chartX) : null, F = C && C.invert ? C.invert(O.chartY) : null;
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
        var N = un(I);
        return Fv({ x: O, y: P }, N);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var w = this.props.children, S = this.getTooltipEventType(), v = je(w, nr), b = {};
      v && S === "axis" && (v.props.trigger === "click" ? b = { onClick: this.handleClick } : b = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = bc(this.props, this.handleOuterEvent);
      return D(D({}, O), b);
    } }, { key: "addListener", value: function() {
      rf.on(nf, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      rf.removeListener(nf, this.handleReceiveSyncEvent);
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
        var b = nb(v, 2), O = b[0], P = b[1];
        return D(D({}, S), {}, Q({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var w = this.state.yAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = nb(v, 2), O = b[0], P = b[1];
        return D(D({}, S), {}, Q({}, O, P.scale));
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
            return NW(w, F);
          });
          if (N) return { graphicalItem: T, payload: N };
        } else if (j === "RadialBar") {
          var M = ($.data || []).find(function(F) {
            return Fv(w, F);
          });
          if (M) return { graphicalItem: T, payload: M };
        } else if (al(T, b) || ol(T, b) || ko(T, b)) {
          var C = j5({ graphicalItem: T, activeTooltipItem: b, itemData: I.data }), R = I.activeIndex === void 0 ? C : I.activeIndex;
          return { graphicalItem: D(D({}, T), {}, { childIndex: R }), payload: ko(T, b) ? I.data[C] : T.props.data[C] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var w = this;
      if (!$y(this)) return null;
      var S = this.props, v = S.children, b = S.className, O = S.width, P = S.height, T = S.style, $ = S.compact, E = S.title, I = S.desc, j = ib(S, _K), N = ut(j, false);
      if ($) return A.createElement(jg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement(Pf, Ai({}, N, { width: O, height: P, title: E, desc: I }), this.renderClipPath(), Dy(v, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var M, C;
        N.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, N.role = (C = this.props.role) !== null && C !== void 0 ? C : "application", N.onKeyDown = function(F) {
          w.accessibilityManager.keyboardEvent(F);
        }, N.onFocus = function() {
          w.accessibilityManager.focus();
        };
      }
      var R = this.parseEventsOfWrapper();
      return A.createElement(jg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement("div", Ai({ className: mt("recharts-wrapper", b), style: D({ position: "relative", cursor: "default", width: O, height: P }, T) }, R, { ref: function(U) {
        w.container = U;
      } }), A.createElement(Pf, Ai({}, N, { width: O, height: P, title: E, desc: I, style: RK }), this.renderClipPath(), Dy(v, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(B.Component);
  Q(y, "displayName", r), Q(y, "defaultProps", D({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, f)), Q(y, "getDerivedStateFromProps", function(p, g) {
    var _ = p.dataKey, w = p.data, S = p.children, v = p.width, b = p.height, O = p.layout, P = p.stackOffset, T = p.margin, $ = g.dataStartIndex, E = g.dataEndIndex;
    if (g.updateId === void 0) {
      var I = sb(p);
      return D(D(D({}, I), {}, { updateId: 0 }, d(D(D({ props: p }, I), {}, { updateId: 0 }), g)), {}, { prevDataKey: _, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (_ !== g.prevDataKey || w !== g.prevData || v !== g.prevWidth || b !== g.prevHeight || O !== g.prevLayout || P !== g.prevStackOffset || !$i(T, g.prevMargin)) {
      var j = sb(p), N = { chartX: g.chartX, chartY: g.chartY, isTooltipActive: g.isTooltipActive }, M = D(D({}, ob(g, w, O)), {}, { updateId: g.updateId + 1 }), C = D(D(D({}, j), N), M);
      return D(D(D({}, C), d(D({ props: p }, C), g)), {}, { prevDataKey: _, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (!xf(S, g.prevChildren)) {
      var R, F, U, q, nt = je(S, Xi), W = nt && (R = (F = nt.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && R !== void 0 ? R : $, at = nt && (U = (q = nt.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && U !== void 0 ? U : E, Rt = W !== $ || at !== E, Kt = !ct(w), Me = Kt && !Rt ? g.updateId : g.updateId + 1;
      return D(D({ updateId: Me }, d(D(D({ props: p }, g), {}, { updateId: Me, dataStartIndex: W, dataEndIndex: at }), g)), {}, { prevChildren: S, dataStartIndex: W, dataEndIndex: at });
    }
    return null;
  }), Q(y, "renderActiveDot", function(p, g, _) {
    var w;
    return B.isValidElement(p) ? w = B.cloneElement(p, g) : lt(p) ? w = p(g) : w = A.createElement(il, g), A.createElement(St, { className: "recharts-active-dot", key: _ }, w);
  });
  var m = B.forwardRef(function(g, _) {
    return A.createElement(y, Ai({}, g, { ref: _ }));
  });
  return m.displayName = y.displayName, m;
}, ub = HK({ chartName: "ComposedChart", GraphicalChild: [na, Kr, Pa, dl], axisComponents: [{ axisType: "xAxis", AxisComp: Wo }, { axisType: "yAxis", AxisComp: Vo }, { axisType: "zAxis", AxisComp: hl }], formatAxisMap: oq });
const ee = { grid: "#d0d7de", axis: "#57606a", legendText: "#1f2328", percentileBand: "rgba(207, 34, 46, 0.28)", medianLine: "#0d1117", tooltip: { background: "#ffffff", border: "#d0d7de", text: "#1f2328" }, colors: ["#0969da", "#8250df", "#1a7f37", "#cf222e", "#bf8700", "#57606a", "#0550ae", "#a40e26", "#116329", "#6639ba", "#9a6700", "#24292f", "#218bff", "#db61a2", "#3fb950", "#f85149", "#d29922", "#39d353", "#bc4c00", "#1b7c83", "#6e7781", "#8b5cf6"] }, xs = { fill: ee.axis, fontSize: 11 }, Fs = { shared: false, contentStyle: { background: ee.tooltip.background, border: `1px solid ${ee.tooltip.border}`, borderRadius: "0.35rem", color: ee.tooltip.text }, labelStyle: { color: ee.tooltip.text } }, lb = { top: 8, right: 12, left: 4, bottom: 8 }, KK = { verticalAlign: "bottom", align: "center", layout: "horizontal", wrapperStyle: { color: ee.legendText, width: "100%", left: 0, paddingTop: "10px" } }, YK = /(\d+(?:\.\d+)?(?:\s*-\s*\d+(?:\.\d+)?)?\+?)/g;
function ZO(e9) {
  return e9.replace(/([A-Za-z])(\d)/g, "$1 $2").replace(/(\d)([A-Za-z])/g, "$1 $2").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([a-z])(and|or|from|of|with)(?=\s|[A-Z]|$)/g, "$1 $2").replace(/(\S)(\()/g, "$1 $2").replace(/[ \t]+/g, " ").trim();
}
function O7(e9) {
  const t = ZO(e9), r = [];
  let n = 0;
  for (const i of t.matchAll(YK)) {
    const a = i.index ?? 0;
    a > n && r.push({ text: t.slice(n, a), metric: false }), r.push({ text: i[0], metric: true }), n = a + i[0].length;
  }
  return n < t.length && r.push({ text: t.slice(n), metric: false }), r;
}
const XK = ["day", "week", "month", "quarter", "year"], JK = [];
function QK({ active: e9, payload: t, label: r, period: n }) {
  var _a2;
  if (!e9 || !(t == null ? void 0 : t.length) || r == null) return null;
  const i = (_a2 = t[0]) == null ? void 0 : _a2.payload;
  if (!i) return null;
  const a = Number(i.median_profit), o = Number(i.p25), s = Number(i.p75);
  return H.jsxs("div", { className: "osrs-mmg__chart-tooltip", style: Fs.contentStyle, children: [H.jsx("p", { className: "osrs-mmg__chart-tooltip-label", children: hb(String(r), n) }), H.jsxs("ul", { className: "osrs-mmg__chart-tooltip-list", children: [Number.isFinite(a) ? H.jsxs("li", { className: "osrs-mmg__chart-tooltip-value", children: ["Median: ", As(a)] }) : null, Number.isFinite(o) ? H.jsxs("li", { className: "osrs-mmg__chart-tooltip-value", children: ["25th: ", As(o)] }) : null, Number.isFinite(s) ? H.jsxs("li", { className: "osrs-mmg__chart-tooltip-value", children: ["75th: ", As(s)] }) : null] })] });
}
function x7({ mode: e9, methodId: t, methodName: r, topMethods: n = JK, topN: i = 10 }) {
  const [a, o] = B.useState("week"), [s, c] = B.useState([]), [u, l] = B.useState([]), [f, h] = B.useState(false);
  B.useEffect(() => {
    let p = false;
    async function g() {
      h(true);
      try {
        if (e9 === "single" && t) {
          const _ = await AP(t, a);
          p || c(_);
        } else if (e9 === "topN") {
          const _ = n.slice(0, i).map((S) => S.method_id), w = await PP(_, a);
          p || l(w);
        }
      } finally {
        p || h(false);
      }
    }
    return g(), () => {
      p = true;
    };
  }, [e9, t, a, i, e9 === "topN" ? n : null]);
  const d = B.useMemo(() => s.map((p) => ({ ...p, period: Vr(p.period), bandBase: p.p25, bandSpan: Math.max(0, p.p75 - p.p25) })), [s]), y = B.useMemo(() => {
    const p = /* @__PURE__ */ new Map();
    for (const g of u) {
      const _ = Vr(g.period), w = p.get(_) ?? { period: _ };
      w[g.method_name] = g.profit, p.set(_, w);
    }
    return [...p.values()].sort((g, _) => o1(String(g.period), String(_.period)));
  }, [u]), m = B.useMemo(() => [...new Set(u.map((p) => p.method_name))], [u]);
  return H.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends", children: [H.jsxs("div", { className: "osrs-mmg__trends-header", children: [H.jsx("h3", { children: e9 === "single" ? `Trends \xB7 ${ZO(r ?? "Method")}` : "Top methods over time" }), H.jsx("div", { className: "osrs-mmg__period-row", children: XK.map((p) => H.jsx("button", { type: "button", className: p === a ? "is-active" : "", onClick: () => o(p), children: p }, p)) })] }), f ? H.jsx("p", { className: "osrs-mmg__muted", children: "Loading chart\u2026" }) : null, e9 === "single" && d.length > 0 ? H.jsx("div", { className: "osrs-mmg__chart", children: H.jsx(Em, { width: "100%", height: 340, children: H.jsxs(ub, { data: d, margin: lb, children: [H.jsx(Bh, { strokeDasharray: "3 3", stroke: ee.grid }), H.jsx(Wo, { dataKey: "period", tick: xs, stroke: ee.axis, ...Fp(a) }), H.jsx(Vo, { tick: xs, stroke: ee.axis, tickFormatter: (p) => `${Math.round(p / 1e3)}k` }), H.jsx(nr, { shared: true, cursor: { stroke: ee.axis, strokeDasharray: "3 3" }, content: ({ active: p, payload: g, label: _ }) => H.jsx(QK, { active: p, payload: g, label: _, period: a }), contentStyle: Fs.contentStyle, labelStyle: Fs.labelStyle }), H.jsx(Un, { ...KK }), H.jsx(Kr, { type: "monotone", dataKey: "bandBase", stackId: "percentile", stroke: "none", fill: "transparent", legendType: "none", tooltipType: "none", isAnimationActive: false }), H.jsx(Kr, { type: "monotone", dataKey: "bandSpan", stackId: "percentile", stroke: "none", fill: ee.percentileBand, name: "p25\u2013p75", isAnimationActive: false }), H.jsx(na, { type: "monotone", dataKey: "median_profit", stroke: ee.medianLine, strokeWidth: 2, dot: false, name: "Median GP/h" })] }) }) }) : null, e9 === "topN" && y.length > 0 ? H.jsxs("div", { className: "osrs-mmg__chart", children: [H.jsx(Em, { width: "100%", height: 340, children: H.jsxs(ub, { data: y, margin: lb, children: [H.jsx(Bh, { strokeDasharray: "3 3", stroke: ee.grid }), H.jsx(Wo, { dataKey: "period", tick: xs, stroke: ee.axis, ...Fp(a) }), H.jsx(Vo, { tick: xs, stroke: ee.axis, tickFormatter: (p) => `${Math.round(p / 1e3)}k` }), H.jsx(nr, { formatter: (p) => As(p), labelFormatter: (p) => hb(String(p), a), ...Fs }), m.map((p, g) => H.jsx(na, { type: "monotone", dataKey: p, stroke: ee.colors[g % ee.colors.length], legendType: "none" }, p))] }) }), H.jsx("div", { className: "osrs-mmg__chart-legend-wrap", children: H.jsx("ul", { className: "osrs-mmg__chart-legend", children: m.map((p, g) => H.jsx("li", { children: H.jsxs("span", { className: "osrs-mmg__chart-legend-item", children: [H.jsx("span", { className: "osrs-mmg__chart-legend-swatch", style: { background: ee.colors[g % ee.colors.length] } }), p] }) }, p)) }) })] }) : null, !f && e9 === "single" && s.length === 0 ? H.jsx("p", { className: "osrs-mmg__muted", children: "No snapshot history yet for this method." }) : null, !f && e9 === "topN" && y.length === 0 ? H.jsx("p", { className: "osrs-mmg__muted", children: "Re-rank the table to pick top methods, or wait for more daily snapshots." }) : null] });
}
const A7 = [{ id: "marlin", methodName: "Cuttingraw marlin", methodUrl: "/w/Money_making_guide/Cutting_raw_marlin", defaultKph: 11e3, kphUnitName: "Marlins per hour", assumptionText: "", inputTotalPk: 5015, inputTotalPh: 0, outputTotalPk: 5978, outputTotalPh: 0, inputs: [{ itemName: "Raw marlin", wikiSlug: "Raw_marlin", qtyPerCompletion: 1, gpPerCompletion: 5015 }], outputs: [{ itemName: "Fine fish offcuts", wikiSlug: "Fine_fish_offcuts", qtyPerCompletion: 1, gpPerCompletion: 671 }, { itemName: "Marlin scales", wikiSlug: "Marlin_scales", qtyPerCompletion: 3, gpPerCompletion: 5307 }], skillRequirements: [] }, { id: "tob", methodName: "Completing theTheatre of Blood(trio)", methodUrl: "/w/Money_making_guide/Theatre_of_Blood", defaultKph: 3, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes3kills per hour in trios with 0 deaths. Your actual profits may be higher or lower depending on your actual kc/hour, your group size, the number of deaths per raid and luck.3kills per hour requires minimal downtime, few mistakes and efficient strategies. The supply cost given is the average supply cost for each role (Mage, Melee Freeze, Ranger, Melee).", inputTotalPk: 306831, inputTotalPh: 0, outputTotalPk: 40403529699803e-7, outputTotalPh: 0, inputs: [{ itemName: "Super combat potion(4)", wikiSlug: "Super_combat_potion(4)", qtyPerCompletion: 1.5, gpPerCompletion: 20295 }, { itemName: "Divine super combat potion(4)", wikiSlug: "Divine_super_combat_potion(4)", qtyPerCompletion: 1, gpPerCompletion: 19559 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 0.5, gpPerCompletion: 1256 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 1, gpPerCompletion: 11174 }, { itemName: "Zulrah's scales", wikiSlug: "Zulrah's_scales", qtyPerCompletion: 27, gpPerCompletion: 4779 }, { itemName: "Dragon dart", wikiSlug: "Dragon_dart", qtyPerCompletion: 8, gpPerCompletion: 10904 }, { itemName: "Black chinchompa", wikiSlug: "Black_chinchompa", qtyPerCompletion: 7, gpPerCompletion: 20713 }, { itemName: "Ice Barrage", wikiSlug: "Ice_Barrage", qtyPerCompletion: 6, gpPerCompletion: 8496 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 11478 }, { itemName: "Spellbook Swap", wikiSlug: "Spellbook_Swap", qtyPerCompletion: 6, gpPerCompletion: 3756 }, { itemName: "Vengeance", wikiSlug: "Vengeance", qtyPerCompletion: 15, gpPerCompletion: 17310 }, { itemName: "Scythe of vitur", wikiSlug: "Scythe_of_vitur", qtyPerCompletion: 220, gpPerCompletion: 149193 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 8, gpPerCompletion: 23872 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 2, gpPerCompletion: 4046 }], outputs: [{ itemName: "Scythe of vitur (uncharged)", wikiSlug: "Scythe_of_vitur_(uncharged)", qtyPerCompletion: 0.0019278966647388, gpPerCompletion: 27976156256025e-7 }, { itemName: "Avernic defender hilt", wikiSlug: "Avernic_defender_hilt", qtyPerCompletion: 0.01542317331791, gpPerCompletion: 512047.58048968 }, { itemName: "Ghrazi rapier", wikiSlug: "Ghrazi_rapier", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 114430.00578369 }, { itemName: "Sanguinesti staff (uncharged)", wikiSlug: "Sanguinesti_staff_(uncharged)", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 74450.854058222 }, { itemName: "Justiciar faceguard", wikiSlug: "Justiciar_faceguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 48395.527279737 }, { itemName: "Justiciar chestguard", wikiSlug: "Justiciar_chestguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 44466.400616926 }, { itemName: "Justiciar legguards", wikiSlug: "Justiciar_legguards", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 47547.919799498 }, { itemName: "Runite ore", wikiSlug: "Runite_ore", qtyPerCompletion: 6.3558, gpPerCompletion: 65299.4892 }], skillRequirements: [{ skillKey: "Magic", requirementText: "94+" }, { skillKey: "Ranged", requirementText: "90+" }] }, { id: "smithing", methodName: "Smithing Oathplate armour fromCrushed infernal shaleandOathplate shards", methodUrl: "/w/Money_making_guide/Smithing_oathplate_armour", defaultKph: 4, kphUnitName: "Armour pieces per hour", assumptionText: "The profit rate assumes4pieces of armour made per hour with few mistakes made during the smithing process. The guide automatically picks the highest value piece for display and profit calculations.", inputTotalPk: 87685200, inputTotalPh: 0, outputTotalPk: 88809329, outputTotalPh: 0, inputs: [{ itemName: "Crushed infernal shale", wikiSlug: "Crushed_infernal_shale", qtyPerCompletion: 2520, gpPerCompletion: 806400 }, { itemName: "Oathplate shards", wikiSlug: "Oathplate_shards", qtyPerCompletion: 450, gpPerCompletion: 86878800 }], outputs: [{ itemName: "Oathplate legs", wikiSlug: "Oathplate_legs", qtyPerCompletion: 1, gpPerCompletion: 88809329 }], skillRequirements: [] }, { id: "mokhaiotl", methodName: "Killing TheDoom of Mokhaiotl(Delve 1-16)", methodUrl: "/w/Money_making_guide/Killing_the_Doom_of_Mokhaiotl_(Delve_1-16)", defaultKph: 2.5, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes2.5Delve 1-16 completions per hour, looting at the end of each run. Your completion speed may vary based on your performance, stats and equipment used. Scorching bow users can expect closer to 2 completions per hour. Supply cost assumes the use of aTwistedorScorching bow, the player is on the Arceuus spellbook using thralls until wave 6, constant use ofdeath charge, and using azaryte crossbowspecial attack every wave.", inputTotalPk: 344347, inputTotalPh: 154237, outputTotalPk: 72345276648025e-7, outputTotalPh: 0, inputs: [{ itemName: "Divine ranging potion(4)", wikiSlug: "Divine_ranging_potion(4)", qtyPerCompletion: 3, gpPerCompletion: 19041 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 6, gpPerCompletion: 15072 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 4, gpPerCompletion: 8092 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 5, gpPerCompletion: 55870 }, { itemName: "Saradomin brew(4)", wikiSlug: "Saradomin_brew(4)", qtyPerCompletion: 6, gpPerCompletion: 46536 }, { itemName: "Extended anti-venom+(4)", wikiSlug: "Extended_anti-venom+(4)", qtyPerCompletion: 2.5, gpPerCompletion: 47660 }, { itemName: "Death Charge", wikiSlug: "Death_Charge", qtyPerCompletion: 56, gpPerCompletion: 72464 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 13878 }, { itemName: "Superior Demonbane", wikiSlug: "Superior_Demonbane", qtyPerCompletion: 41, gpPerCompletion: 33538 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 40, gpPerCompletion: 119360 }, { itemName: "Ruby dragon bolts (e)", wikiSlug: "Ruby_dragon_bolts_(e)", qtyPerCompletion: 3.2, gpPerCompletion: 9104 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1, gpPerCompletion: 57969 }], outputs: [{ itemName: "Avernic treads", wikiSlug: "Avernic_treads", qtyPerCompletion: 0.021073503475464, gpPerCompletion: 36718848828421e-7 }, { itemName: "Eye of ayak (uncharged)", wikiSlug: "Eye_of_ayak_(uncharged)", qtyPerCompletion: 0.021573503475464, gpPerCompletion: 11296287039712e-7 }, { itemName: "Mokhaiotl cloth", wikiSlug: "Mokhaiotl_cloth", qtyPerCompletion: 0.021973503475464, gpPerCompletion: 12328797525538e-7 }, { itemName: "Demon tear", wikiSlug: "Demon_tear", qtyPerCompletion: 1479.7349128671, gpPerCompletion: 479434.11176894 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1.560204615624, gpPerCompletion: 88635.224213599 }, { itemName: "Aether catalyst", wikiSlug: "Aether_catalyst", qtyPerCompletion: 227.88871078774, gpPerCompletion: 81584.158462011 }, { itemName: "Dragon med helm", wikiSlug: "Dragon_med_helm", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 44168.58165062 }, { itemName: "Mystic earth staff", wikiSlug: "Mystic_earth_staff", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 18782.296325307 }], skillRequirements: [{ skillKey: "Magic", requirementText: "80+" }, { skillKey: "Ranged", requirementText: "90+" }] }], ZK = "osrs-mmg-cache", Ho = "artifacts", t1 = "duckdb";
function e1() {
  return new Promise((e9, t) => {
    const r = indexedDB.open(ZK, 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore(Ho);
    }, r.onsuccess = () => e9(r.result), r.onerror = () => t(r.error ?? new Error("IndexedDB open failed"));
  });
}
async function t7() {
  const e9 = await e1();
  return new Promise((t, r) => {
    const i = e9.transaction(Ho, "readonly").objectStore(Ho).get(t1);
    i.onsuccess = () => t(i.result ?? null), i.onerror = () => r(i.error ?? new Error("IndexedDB read failed"));
  });
}
async function e7(e9) {
  const t = await e1();
  return new Promise((r, n) => {
    const i = t.transaction(Ho, "readwrite");
    i.objectStore(Ho).put(e9, t1), i.oncomplete = () => r(), i.onerror = () => n(i.error ?? new Error("IndexedDB write failed"));
  });
}
async function r7(e9, t) {
  const r = await fetch(e9, { cache: "no-cache" });
  if (!r.ok) throw new Error(`Failed to download DuckDB (${r.status})`);
  const n = r.headers.get("content-length"), i = n ? Number(n) : null;
  if (!r.body || !t) return r.arrayBuffer();
  const a = r.body.getReader(), o = [];
  let s = 0;
  for (; ; ) {
    const { done: l, value: f } = await a.read();
    if (l) break;
    o.push(f), s += f.length, t({ loaded: s, total: i });
  }
  const c = new Uint8Array(s);
  let u = 0;
  for (const l of o) c.set(l, u), u += l.length;
  return c.buffer;
}
async function fb(e9, t) {
  return r7(e9, t);
}
function P7() {
  const [e9, t] = B.useState({ ready: false, loading: $n() || Ts(), error: null, manifest: null, fromCache: false, localMode: $n(), loadPhase: $n() || Ts() ? "manifest" : null, downloadProgress: null }), [r, n] = B.useState(0), i = B.useCallback(() => {
    n((a) => a + 1);
  }, []);
  return B.useEffect(() => {
    if (!$n() && !Ts()) {
      t({ ready: false, loading: false, error: null, manifest: null, fromCache: false, localMode: false, loadPhase: null, downloadProgress: null });
      return;
    }
    let a = false;
    async function o() {
      t((h) => ({ ...h, loadPhase: "download", downloadProgress: { loaded: 0, total: null } }));
      const u = await fb(of, (h) => {
        a || t((d) => ({ ...d, downloadProgress: h }));
      }), l = `${of}:${u.byteLength}`;
      let f = null;
      t((h) => ({ ...h, loadPhase: "open", downloadProgress: null })), await py(u, l), a || t({ ready: true, loading: false, error: null, manifest: f, fromCache: false, localMode: true, loadPhase: null, downloadProgress: null });
    }
    async function s() {
      t((y) => ({ ...y, loadPhase: "manifest", downloadProgress: null }));
      const u = await TP();
      t((y) => ({ ...y, loadPhase: "cache" }));
      const l = await t7(), f = IP(u, (l == null ? void 0 : l.sha256) ?? null);
      let h, d = false;
      !f && l ? (h = l.bytes, d = true, t((y) => ({ ...y, loadPhase: "open", downloadProgress: null }))) : (t((y) => ({ ...y, loadPhase: "download", downloadProgress: { loaded: 0, total: null } })), h = await fb(i1(u), (y) => {
        a || t((m) => ({ ...m, downloadProgress: y }));
      }), await e7({ sha256: u.artifacts.database.sha256, bytes: h, fetchedAt: (/* @__PURE__ */ new Date()).toISOString() }), t((y) => ({ ...y, loadPhase: "open", downloadProgress: null }))), await py(h, u.artifacts.database.sha256), a || t({ ready: true, loading: false, error: null, manifest: u, fromCache: d, localMode: false, loadPhase: null, downloadProgress: null });
    }
    async function c() {
      t((u) => ({ ...u, loading: true, error: null, loadPhase: "manifest", downloadProgress: null }));
      try {
        $n() ? await o() : await s();
      } catch (u) {
        a || t({ ready: false, loading: false, error: u instanceof Error ? u.message : String(u), manifest: null, fromCache: false, localMode: $n(), loadPhase: null, downloadProgress: null });
      }
    }
    return c(), () => {
      a = true;
    };
  }, [r]), { ...e9, reload: i };
}
export {
  ub as C,
  na as L,
  w7 as O,
  Em as R,
  A7 as S,
  nr as T,
  Wo as X,
  Vo as Y,
  m7 as a,
  S7 as b,
  x7 as c,
  o1 as d,
  _7 as e,
  y7 as f,
  p7 as g,
  g7 as h,
  s7 as i,
  b7 as j,
  ee as k,
  lb as l,
  Bh as m,
  xs as n,
  Fs as o,
  Fp as p,
  hb as q,
  v7 as r,
  ZO as s,
  Vr as t,
  P7 as u,
  O7 as v
};
