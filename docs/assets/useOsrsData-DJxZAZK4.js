import { j as H, c as os, g as Bt, r as B, R as A } from "./index-CFCoourc.js";
import { s as a1 } from "./skillIconUrl-DBpzbTaR.js";
import { c as mt } from "./clsx-B-dksMZM.js";
import { _ as br, a as yt, b as xs, c as Fn, d as st } from "./tslib.es6-Xujj8YQZ.js";
const af = "", Qh = "https://prod-public-mindtricks-data.s3.eu-west-2.amazonaws.com/prod/client/osrs-mmg".replace(/\/$/, "") ?? "", Bp = `${Qh}/manifest.json`, Rp = "osrs-mmg.duckdb";
function o1(e7) {
  return `${Qh}/${e7.artifacts.database.url}`;
}
function $n() {
  return af.length > 0;
}
function As() {
  return Qh.length > 0;
}
function fY() {
  return $n() || As();
}
function kp(e7, t) {
  return e7.profit_pk * t + e7.profit_ph;
}
function hY(e7, t, r) {
  const n = (r == null ? void 0 : r.size) ? e7.filter((i) => !r.has(i.method_id)) : e7;
  return s1(n, t);
}
function s1(e7, t) {
  return [...e7].sort((r, n) => {
    const i = t[r.method_id] ?? r.default_kph, a = t[n.method_id] ?? n.default_kph;
    return kp(n, a) - kp(r, i);
  });
}
function mb(e7) {
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
function dY(e7) {
  const t = mb(e7);
  return t.length ? t.join(", ") : "\u2014";
}
const Lp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], yl = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Zh(e7) {
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
function dn(e7) {
  const t = Zh(e7);
  return t ? t.toISOString().slice(0, 10) : String(e7);
}
function Fp(e7) {
  return String(e7).slice(-2);
}
function c1(e7, t) {
  const r = Zh(e7);
  if (!r) return String(e7);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
    case "week":
      return `${n}-${Lp[i]}`;
    case "month":
      return `${Lp[i]} '${Fp(a)}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} '${Fp(a)}`;
    case "year":
      return String(a);
  }
}
function Up(e7, t) {
  const r = Zh(e7);
  if (!r) return String(e7);
  const n = r.getUTCDate(), i = r.getUTCMonth(), a = r.getUTCFullYear();
  switch (t) {
    case "day":
      return `${n} ${yl[i]} ${a}`;
    case "week":
      return `Week of ${n} ${yl[i]} ${a}`;
    case "month":
      return `${yl[i]} ${a}`;
    case "quarter":
      return `Q${Math.floor(i / 3) + 1} ${a}`;
    case "year":
      return String(a);
  }
}
function zp(e7) {
  return { type: "category", scale: "point", tickFormatter: (t) => c1(t, e7), minTickGap: 56, interval: "preserveStartEnd", tickMargin: 10 };
}
function u1(e7, t) {
  return dn(e7).localeCompare(dn(t));
}
const l1 = new TextDecoder("utf-8"), of = (e7) => l1.decode(e7), f1 = new TextEncoder(), td = (e7) => f1.encode(e7), h1 = (e7) => typeof e7 == "number", vb = (e7) => typeof e7 == "boolean", re = (e7) => typeof e7 == "function", Ie = (e7) => e7 != null && Object(e7) === e7, Gn = (e7) => Ie(e7) && re(e7.then), Ko = (e7) => Ie(e7) && re(e7[Symbol.iterator]), fa = (e7) => Ie(e7) && re(e7[Symbol.asyncIterator]), sf = (e7) => Ie(e7) && Ie(e7.schema), gb = (e7) => Ie(e7) && "done" in e7 && "value" in e7, bb = (e7) => Ie(e7) && re(e7.stat) && h1(e7.fd), _b = (e7) => Ie(e7) && ed(e7.body), bu = (e7) => "_getDOMStream" in e7 && "_getNodeStream" in e7, d1 = (e7) => Ie(e7) && re(e7.abort) && re(e7.getWriter) && !bu(e7), ed = (e7) => Ie(e7) && re(e7.cancel) && re(e7.getReader) && !bu(e7), p1 = (e7) => Ie(e7) && re(e7.end) && re(e7.write) && vb(e7.writable) && !bu(e7), wb = (e7) => Ie(e7) && re(e7.read) && re(e7.pipe) && vb(e7.readable) && !bu(e7), y1 = (e7) => Ie(e7) && re(e7.clear) && re(e7.bytes) && re(e7.position) && re(e7.setPosition) && re(e7.capacity) && re(e7.getBufferIdentifier) && re(e7.createLong), rd = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function m1(e7) {
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
function Wp(e7, t, r = 0, n = t.byteLength) {
  const i = e7.byteLength, a = new Uint8Array(e7.buffer, e7.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
  return a.set(o, r), e7;
}
function Pr(e7, t) {
  const r = m1(e7), n = r.reduce((l, f) => l + f.byteLength, 0);
  let i, a, o, s = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const l = r.length; ++c < l; ) {
    if (i = r[c], a = i.subarray(0, Math.min(i.length, u - s)), u <= s + a.length) {
      a.length < i.length ? r[c] = i.subarray(a.length) : a.length === i.length && c++, o ? Wp(o, a, s) : o = a;
      break;
    }
    Wp(o || (o = new Uint8Array(u)), a, s), s += a.length;
  }
  return [o || new Uint8Array(0), r.slice(c), n - (o ? o.byteLength : 0)];
}
function Et(e7, t) {
  let r = gb(t) ? t.value : t;
  return r instanceof e7 ? e7 === Uint8Array ? new e7(r.buffer, r.byteOffset, r.byteLength) : r : r ? (typeof r == "string" && (r = td(r)), r instanceof ArrayBuffer ? new e7(r) : r instanceof rd ? new e7(r) : y1(r) ? Et(e7, r.bytes()) : ArrayBuffer.isView(r) ? r.byteLength <= 0 ? new e7(0) : new e7(r.buffer, r.byteOffset, r.byteLength / e7.BYTES_PER_ELEMENT) : e7.from(r)) : new e7(0);
}
const Ia = (e7) => Et(Int32Array, e7), Vp = (e7) => Et(BigInt64Array, e7), vt = (e7) => Et(Uint8Array, e7), cf = (e7) => (e7.next(), e7);
function* v1(e7, t) {
  const r = function* (i) {
    yield i;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof rd ? r(t) : Ko(t) ? t : r(t);
  return yield* cf(function* (i) {
    let a = null;
    do
      a = i.next(yield Et(e7, a));
    while (!a.done);
  }(n[Symbol.iterator]())), new e7();
}
const g1 = (e7) => v1(Uint8Array, e7);
function Sb(e7, t) {
  return br(this, arguments, function* () {
    if (Gn(t)) return yield yt(yield yt(yield* xs(Fn(Sb(e7, yield yt(t))))));
    const n = function(o) {
      return br(this, arguments, function* () {
        yield yield yt(yield yt(o));
      });
    }, i = function(o) {
      return br(this, arguments, function* () {
        yield yt(yield* xs(Fn(cf(function* (s) {
          let c = null;
          do
            c = s.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, a = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof rd ? n(t) : Ko(t) ? i(t) : fa(t) ? t : n(t);
    return yield yt(yield* xs(Fn(cf(function(o) {
      return br(this, arguments, function* () {
        let s = null;
        do
          s = yield yt(o.next(yield yield yt(Et(e7, s))));
        while (!s.done);
      });
    }(a[Symbol.asyncIterator]()))))), yield yt(new e7());
  });
}
const b1 = (e7) => Sb(Uint8Array, e7);
function Ob(e7, t, r) {
  if (e7 !== 0) {
    r = r.slice(0, t);
    for (let n = -1, i = r.length; ++n < i; ) r[n] += e7;
  }
  return r.subarray(0, t);
}
function _1(e7, t) {
  let r = 0;
  const n = e7.length;
  if (n !== t.length) return false;
  if (n > 0) do
    if (e7[r] !== t[r]) return false;
  while (++r < n);
  return true;
}
const Ve = { fromIterable(e7) {
  return ss(w1(e7));
}, fromAsyncIterable(e7) {
  return ss(S1(e7));
}, fromDOMStream(e7) {
  return ss(O1(e7));
}, fromNodeStream(e7) {
  return ss(A1(e7));
}, toDOMStream(e7, t) {
  throw new Error('"toDOMStream" not available in this environment');
}, toNodeStream(e7, t) {
  throw new Error('"toNodeStream" not available in this environment');
} }, ss = (e7) => (e7.next(), e7);
function* w1(e7) {
  let t, r = false, n = [], i, a, o, s = 0;
  function c() {
    return a === "peek" ? Pr(n, o)[0] : ([i, n, s] = Pr(n, o), i);
  }
  ({ cmd: a, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = g1(e7)[Symbol.iterator]();
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
function S1(e7) {
  return br(this, arguments, function* () {
    let r, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Pr(i, s)[0] : ([a, i, c] = Pr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = b1(e7)[Symbol.asyncIterator]();
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
function O1(e7) {
  return br(this, arguments, function* () {
    let r = false, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? Pr(i, s)[0] : ([a, i, c] = Pr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 });
    const l = new x1(e7);
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
class x1 {
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
const ml = (e7, t) => {
  const r = (i) => n([t, i]);
  let n;
  return [t, r, new Promise((i) => (n = i) && e7.once(t, r))];
};
function A1(e7) {
  return br(this, arguments, function* () {
    const r = [];
    let n = "error", i = false, a = null, o, s, c = 0, u = [], l;
    function f() {
      return o === "peek" ? Pr(u, s)[0] : ([l, u, c] = Pr(u, s), l);
    }
    if ({ cmd: o, size: s } = (yield yield yt(null)) || { cmd: "read", size: 0 }, e7.isTTY) return yield yield yt(new Uint8Array(0)), yield yt(null);
    try {
      r[0] = ml(e7, "end"), r[1] = ml(e7, "error");
      do {
        if (r[2] = ml(e7, "readable"), [n, a] = yield yt(Promise.race(r.map((d) => d[2]))), n === "error") break;
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
        for (const [b, _] of d) e7.off(b, _);
        try {
          const b = e7.destroy;
          b && b.call(e7, y), y = void 0;
        } catch (b) {
          y = b || y;
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
var Z;
(function(e7) {
  e7[e7.SECOND = 0] = "SECOND", e7[e7.MILLISECOND = 1] = "MILLISECOND", e7[e7.MICROSECOND = 2] = "MICROSECOND", e7[e7.NANOSECOND = 3] = "NANOSECOND";
})(Z || (Z = {}));
var Tr;
(function(e7) {
  e7[e7.YEAR_MONTH = 0] = "YEAR_MONTH", e7[e7.DAY_TIME = 1] = "DAY_TIME", e7[e7.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Tr || (Tr = {}));
const vl = 2, mr = 4, Br = 4, Pt = 4, an = new Int32Array(2), qp = new Float32Array(an.buffer), Gp = new Float64Array(an.buffer), cs = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var uf;
(function(e7) {
  e7[e7.UTF8_BYTES = 1] = "UTF8_BYTES", e7[e7.UTF16_STRING = 2] = "UTF16_STRING";
})(uf || (uf = {}));
let Ci = class xb {
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  static allocate(t) {
    return new xb(new Uint8Array(t));
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
    return an[0] = this.readInt32(t), qp[0];
  }
  readFloat64(t) {
    return an[cs ? 0 : 1] = this.readInt32(t), an[cs ? 1 : 0] = this.readInt32(t + 4), Gp[0];
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
    qp[0] = r, this.writeInt32(t, an[0]);
  }
  writeFloat64(t, r) {
    Gp[0] = r, this.writeInt32(t, an[cs ? 0 : 1]), this.writeInt32(t + 4, an[cs ? 1 : 0]);
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
    return r === uf.UTF8_BYTES ? i : this.text_decoder_.decode(i);
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
}, Ab = class Pb {
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
      this.bb = Pb.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
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
    const a = (n + i) * vl;
    this.addInt16(a);
    let o = 0;
    const s = this.space;
    t: for (r = 0; r < this.vtables.length; r++) {
      const c = this.bb.capacity() - this.vtables[r];
      if (a == this.bb.readInt16(c)) {
        for (let u = vl; u < a; u += vl) if (this.bb.readInt16(s + u) != this.bb.readInt16(c + u)) continue t;
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
var ks;
(function(e7) {
  e7[e7.BUFFER = 0] = "BUFFER";
})(ks || (ks = {}));
var Ls;
(function(e7) {
  e7[e7.LZ4_FRAME = 0] = "LZ4_FRAME", e7[e7.ZSTD = 1] = "ZSTD";
})(Ls || (Ls = {}));
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
    return t ? this.bb.readInt8(this.bb_pos + t) : Ls.LZ4_FRAME;
  }
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : ks.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, r) {
    t.addFieldInt8(0, r, Ls.LZ4_FRAME);
  }
  static addMethod(t, r) {
    t.addFieldInt8(1, r, ks.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, r, n) {
    return on.startBodyCompression(t), on.addCodec(t, r), on.addMethod(t, n), on.endBodyCompression(t);
  }
}
class Tb {
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
let Ib = class {
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
}, Nr = class lf {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsRecordBatch(t, r) {
    return (r || new lf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new lf()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  nodes(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new Ib()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  buffers(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new Tb()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
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
}, hi = class ff {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryBatch(t, r) {
    return (r || new ff()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new ff()).__init(t.readInt32(t.position()) + t.position(), t);
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
var ji;
(function(e7) {
  e7[e7.Little = 0] = "Little", e7[e7.Big = 1] = "Big";
})(ji || (ji = {}));
var Fs;
(function(e7) {
  e7[e7.DenseArray = 0] = "DenseArray";
})(Fs || (Fs = {}));
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
    return t ? this.bb.readInt16(this.bb_pos + t) : Fs.DenseArray;
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
    t.addFieldInt16(3, r, Fs.DenseArray);
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
let Hp = class Fa {
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
}, Kp = class Ua {
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
}, Ps = class di {
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
}, Ts = class yi {
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
}, Is = class mi {
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
}, Es = class vi {
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
let Yp = class za {
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
}, Xp = class Wa {
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
}, Jp = class Va {
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
}, $s = class gi {
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
}, Qp = class qa {
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
let Zp = class Ga {
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
let ze = class Ms {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsField(t, r) {
    return (r || new Ms()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ms()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return n ? (r || new Ms()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    return Dr.startSchema(t), Dr.addEndianness(t, r), Dr.addFields(t, n), Dr.addCustomMetadata(t, i), Dr.addFeatures(t, a), Dr.endSchema(t);
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
var Cr;
(function(e7) {
  e7[e7.OFFSET = 0] = "OFFSET", e7[e7.DATA = 1] = "DATA", e7[e7.VALIDITY = 2] = "VALIDITY", e7[e7.TYPE = 3] = "TYPE";
})(Cr || (Cr = {}));
const P1 = void 0;
function no(e7) {
  if (e7 === null) return "null";
  if (e7 === P1) return "undefined";
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
function Eb(e7, t) {
  return Dt(e7 / t) + Dt(e7 % t) / Dt(t);
}
const T1 = Symbol.for("isArrowBigNum");
function fr(e7, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Et(this.TypedArray, e7), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e7, ...t), this.constructor.prototype);
}
fr.prototype[T1] = true;
fr.prototype.toJSON = function() {
  return `"${ao(this)}"`;
};
fr.prototype.valueOf = function(e7) {
  return $b(this, e7);
};
fr.prototype.toString = function() {
  return ao(this);
};
fr.prototype[Symbol.toPrimitive] = function(e7 = "default") {
  switch (e7) {
    case "number":
      return $b(this);
    case "string":
      return ao(this);
    case "default":
      return $1(this);
  }
  return ao(this);
};
function Pi(...e7) {
  return fr.apply(this, e7);
}
function Ti(...e7) {
  return fr.apply(this, e7);
}
function io(...e7) {
  return fr.apply(this, e7);
}
Object.setPrototypeOf(Pi.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(Ti.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(io.prototype, Object.create(Uint32Array.prototype));
Object.assign(Pi.prototype, fr.prototype, { constructor: Pi, signed: true, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(Ti.prototype, fr.prototype, { constructor: Ti, signed: false, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(io.prototype, fr.prototype, { constructor: io, signed: true, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const I1 = BigInt(4294967296) * BigInt(4294967296), E1 = I1 - BigInt(1);
function $b(e7, t) {
  const { buffer: r, byteOffset: n, byteLength: i, signed: a } = e7, o = new BigUint64Array(r, n, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (s) {
    for (const l of o) c |= (l ^ E1) * (BigInt(1) << BigInt(64 * u++));
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
  if (!e7.signed) return gl(e7);
  let t = new Uint16Array(e7.buffer, e7.byteOffset, e7.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0) return gl(e7);
  t = t.slice();
  let n = 1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a], s = ~o + n;
    t[a] = s, n &= o === 0 ? 1 : 0;
  }
  return `-${gl(t)}`;
}
function $1(e7) {
  return e7.byteLength === 8 ? new e7.BigIntArray(e7.buffer, e7.byteOffset, 1)[0] : ao(e7);
}
function gl(e7) {
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
class nd {
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
    return nd.new(t, r);
  }
}
var Mb, Db, Nb, Cb, jb, Bb, Rb, kb, Lb, Fb, Ub, zb, Wb, Vb, qb, Gb, Hb, Kb, Yb, Xb, Jb, Qb;
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
Mb = Symbol.toStringTag;
G[Mb] = ((e7) => (e7.children = null, e7.ArrayType = Array, e7.OffsetArrayType = Int32Array, e7[Symbol.toStringTag] = "DataType"))(G.prototype);
class pn extends G {
  constructor() {
    super(x.Null);
  }
  toString() {
    return "Null";
  }
}
Db = Symbol.toStringTag;
pn[Db] = ((e7) => e7[Symbol.toStringTag] = "Null")(pn.prototype);
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
Nb = Symbol.toStringTag;
Hn[Nb] = ((e7) => (e7.isSigned = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Int"))(Hn.prototype);
class oo extends Hn {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(oo.prototype, "ArrayType", { value: Int32Array });
class Us extends G {
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
Cb = Symbol.toStringTag;
Us[Cb] = ((e7) => (e7.precision = null, e7[Symbol.toStringTag] = "Float"))(Us.prototype);
class zs extends G {
  constructor() {
    super(x.Binary);
  }
  toString() {
    return "Binary";
  }
}
jb = Symbol.toStringTag;
zs[jb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Binary"))(zs.prototype);
class Ws extends G {
  constructor() {
    super(x.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
Bb = Symbol.toStringTag;
Ws[Bb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeBinary"))(Ws.prototype);
class Vs extends G {
  constructor() {
    super(x.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
Rb = Symbol.toStringTag;
Vs[Rb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Utf8"))(Vs.prototype);
class qs extends G {
  constructor() {
    super(x.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
kb = Symbol.toStringTag;
qs[kb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeUtf8"))(qs.prototype);
class Gs extends G {
  constructor() {
    super(x.Bool);
  }
  toString() {
    return "Bool";
  }
}
Lb = Symbol.toStringTag;
Gs[Lb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Bool"))(Gs.prototype);
let Hs = class extends G {
  constructor(t, r, n = 128) {
    super(x.Decimal), this.scale = t, this.precision = r, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
Fb = Symbol.toStringTag;
Hs[Fb] = ((e7) => (e7.scale = null, e7.precision = null, e7.ArrayType = Uint32Array, e7[Symbol.toStringTag] = "Decimal"))(Hs.prototype);
class Ks extends G {
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
Ub = Symbol.toStringTag;
Ks[Ub] = ((e7) => (e7.unit = null, e7[Symbol.toStringTag] = "Date"))(Ks.prototype);
class Ys extends G {
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
zb = Symbol.toStringTag;
Ys[zb] = ((e7) => (e7.unit = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Time"))(Ys.prototype);
class Xs extends G {
  constructor(t, r) {
    super(x.Timestamp), this.unit = t, this.timezone = r;
  }
  toString() {
    return `Timestamp<${Z[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
Wb = Symbol.toStringTag;
Xs[Wb] = ((e7) => (e7.unit = null, e7.timezone = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Timestamp"))(Xs.prototype);
class Js extends G {
  constructor(t) {
    super(x.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Tr[this.unit]}>`;
  }
}
Vb = Symbol.toStringTag;
Js[Vb] = ((e7) => (e7.unit = null, e7.ArrayType = Int32Array, e7[Symbol.toStringTag] = "Interval"))(Js.prototype);
class Qs extends G {
  constructor(t) {
    super(x.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Z[this.unit]}>`;
  }
}
qb = Symbol.toStringTag;
Qs[qb] = ((e7) => (e7.unit = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Duration"))(Qs.prototype);
class Zs extends G {
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
Gb = Symbol.toStringTag;
Zs[Gb] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "List"))(Zs.prototype);
class ve extends G {
  constructor(t) {
    super(x.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Hb = Symbol.toStringTag;
ve[Hb] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "Struct"))(ve.prototype);
class tc extends G {
  constructor(t, r, n) {
    super(x.Union), this.mode = t, this.children = n, this.typeIds = r = Int32Array.from(r), this.typeIdToChildIndex = r.reduce((i, a, o) => (i[a] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Kb = Symbol.toStringTag;
tc[Kb] = ((e7) => (e7.mode = null, e7.typeIds = null, e7.children = null, e7.typeIdToChildIndex = null, e7.ArrayType = Int8Array, e7[Symbol.toStringTag] = "Union"))(tc.prototype);
class ec extends G {
  constructor(t) {
    super(x.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
Yb = Symbol.toStringTag;
ec[Yb] = ((e7) => (e7.byteWidth = null, e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "FixedSizeBinary"))(ec.prototype);
class rc extends G {
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
Xb = Symbol.toStringTag;
rc[Xb] = ((e7) => (e7.children = null, e7.listSize = null, e7[Symbol.toStringTag] = "FixedSizeList"))(rc.prototype);
class nc extends G {
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
Jb = Symbol.toStringTag;
nc[Jb] = ((e7) => (e7.children = null, e7.keysSorted = null, e7[Symbol.toStringTag] = "Map_"))(nc.prototype);
const M1 = /* @__PURE__ */ ((e7) => () => ++e7)(-1);
class Bi extends G {
  constructor(t, r, n, i) {
    super(x.Dictionary), this.indices = r, this.dictionary = t, this.isOrdered = i || false, this.id = n == null ? M1() : Dt(n);
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
Qb = Symbol.toStringTag;
Bi[Qb] = ((e7) => (e7.id = null, e7.indices = null, e7.isOrdered = null, e7.dictionary = null, e7[Symbol.toStringTag] = "Dictionary"))(Bi.prototype);
function jr(e7) {
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
    return D1(this, t, r);
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
function D1(e7, t, r = true) {
  return typeof t == "number" ? bi(e7, t, r) : typeof t == "string" && t in x ? bi(e7, x[t], r) : t && t instanceof G ? bi(e7, ty(t), r) : (t == null ? void 0 : t.type) && t.type instanceof G ? bi(e7, ty(t.type), r) : bi(e7, x.NONE, r);
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
function ty(e7) {
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
      switch (e7.unit) {
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
      switch (e7.unit) {
        case Xe.DAY:
          return x.DateDay;
        case Xe.MILLISECOND:
          return x.DateMillisecond;
      }
      return x.Date;
    case x.Interval:
      switch (e7.unit) {
        case Tr.DAY_TIME:
          return x.IntervalDayTime;
        case Tr.YEAR_MONTH:
          return x.IntervalYearMonth;
      }
      return x.Interval;
    case x.Duration:
      switch (e7.unit) {
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
const Zb = new Float64Array(1), si = new Uint32Array(Zb.buffer);
function t0(e7) {
  const t = (e7 & 31744) >> 10, r = (e7 & 1023) / 1024, n = Math.pow(-1, (e7 & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (r ? Number.NaN : 1 / 0);
    case 0:
      return n * (r ? 6103515625e-14 * r : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + r);
}
function N1(e7) {
  if (e7 !== e7) return 32256;
  Zb[0] = e7;
  const t = (si[1] & 2147483648) >> 16 & 65535;
  let r = si[1] & 2146435072, n = 0;
  return r >= 1089470464 ? si[0] > 0 ? r = 31744 : (r = (r & 2080374784) >> 16, n = (si[1] & 1048575) >> 10) : r <= 1056964608 ? (n = 1048576 + (si[1] & 1048575), n = 1048576 + (n << (r >> 20) - 998) >> 21, r = 0) : (r = r - 1056964608 >> 10, n = (si[1] & 1048575) + 512 >> 10), t | r | n & 65535;
}
class tt extends dt {
}
function it(e7) {
  return (t, r, n) => {
    if (t.setValid(r, n != null)) return e7(t, r, n);
  };
}
const C1 = (e7, t, r) => {
  e7[t] = Math.floor(r / 864e5);
}, e0 = (e7, t, r, n) => {
  if (r + 1 < t.length) {
    const i = Dt(t[r]), a = Dt(t[r + 1]);
    e7.set(n.subarray(0, a - i), i);
  }
}, j1 = ({ offset: e7, values: t }, r, n) => {
  const i = e7 + r;
  n ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, Kr = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, id = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, r0 = ({ values: e7 }, t, r) => {
  e7[t] = N1(r);
}, B1 = (e7, t, r) => {
  switch (e7.type.precision) {
    case pe.HALF:
      return r0(e7, t, r);
    case pe.SINGLE:
    case pe.DOUBLE:
      return id(e7, t, r);
  }
}, n0 = ({ values: e7 }, t, r) => {
  C1(e7, t, r.valueOf());
}, i0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, R1 = ({ stride: e7, values: t }, r, n) => {
  t.set(n.subarray(0, e7), e7 * r);
}, a0 = ({ values: e7, valueOffsets: t }, r, n) => e0(e7, t, r, n), o0 = ({ values: e7, valueOffsets: t }, r, n) => e0(e7, t, r, td(n)), k1 = (e7, t, r) => {
  e7.type.unit === Xe.DAY ? n0(e7, t, r) : i0(e7, t, r);
}, s0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r / 1e3);
}, c0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, u0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e3);
}, l0 = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e6);
}, L1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return s0(e7, t, r);
    case Z.MILLISECOND:
      return c0(e7, t, r);
    case Z.MICROSECOND:
      return u0(e7, t, r);
    case Z.NANOSECOND:
      return l0(e7, t, r);
  }
}, f0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, h0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, d0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, p0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, F1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return f0(e7, t, r);
    case Z.MILLISECOND:
      return h0(e7, t, r);
    case Z.MICROSECOND:
      return d0(e7, t, r);
    case Z.NANOSECOND:
      return p0(e7, t, r);
  }
}, U1 = ({ values: e7, stride: t }, r, n) => {
  e7.set(n.subarray(0, t), t * r);
}, z1 = (e7, t, r) => {
  const n = e7.children[0], i = e7.valueOffsets, a = Je.getVisitFn(n);
  if (Array.isArray(r)) for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r[++o]);
  else for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r.get(++o));
}, W1 = (e7, t, r) => {
  const n = e7.children[0], { valueOffsets: i } = e7, a = Je.getVisitFn(n);
  let { [t]: o, [t + 1]: s } = i;
  const c = r instanceof Map ? r.entries() : Object.entries(r);
  for (const u of c) if (a(n, o, u), ++o >= s) break;
}, V1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[a]), q1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(a)), G1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(i.name)), H1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[i.name]), K1 = (e7, t, r) => {
  const n = e7.type.children.map((a) => Je.getVisitFn(a.type)), i = r instanceof Map ? G1(t, r) : r instanceof xt ? q1(t, r) : Array.isArray(r) ? V1(t, r) : H1(t, r);
  e7.type.children.forEach((a, o) => i(n[o], e7.children[o], a, o));
}, Y1 = (e7, t, r) => {
  e7.type.mode === ye.Dense ? y0(e7, t, r) : m0(e7, t, r);
}, y0 = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Je.visit(i, e7.valueOffsets[t], r);
}, m0 = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Je.visit(i, t, r);
}, X1 = (e7, t, r) => {
  var n;
  (n = e7.dictionary) === null || n === void 0 || n.set(e7.values[t], r);
}, J1 = (e7, t, r) => {
  e7.type.unit === Tr.DAY_TIME ? v0(e7, t, r) : g0(e7, t, r);
}, v0 = ({ values: e7 }, t, r) => {
  e7.set(r.subarray(0, 2), 2 * t);
}, g0 = ({ values: e7 }, t, r) => {
  e7[t] = r[0] * 12 + r[1] % 12;
}, b0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, _0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, w0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, S0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Q1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return b0(e7, t, r);
    case Z.MILLISECOND:
      return _0(e7, t, r);
    case Z.MICROSECOND:
      return w0(e7, t, r);
    case Z.NANOSECOND:
      return S0(e7, t, r);
  }
}, Z1 = (e7, t, r) => {
  const { stride: n } = e7, i = e7.children[0], a = Je.getVisitFn(i);
  if (Array.isArray(r)) for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r[o]);
  else for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r.get(o));
};
tt.prototype.visitBool = it(j1);
tt.prototype.visitInt = it(Kr);
tt.prototype.visitInt8 = it(Kr);
tt.prototype.visitInt16 = it(Kr);
tt.prototype.visitInt32 = it(Kr);
tt.prototype.visitInt64 = it(Kr);
tt.prototype.visitUint8 = it(Kr);
tt.prototype.visitUint16 = it(Kr);
tt.prototype.visitUint32 = it(Kr);
tt.prototype.visitUint64 = it(Kr);
tt.prototype.visitFloat = it(B1);
tt.prototype.visitFloat16 = it(r0);
tt.prototype.visitFloat32 = it(id);
tt.prototype.visitFloat64 = it(id);
tt.prototype.visitUtf8 = it(o0);
tt.prototype.visitLargeUtf8 = it(o0);
tt.prototype.visitBinary = it(a0);
tt.prototype.visitLargeBinary = it(a0);
tt.prototype.visitFixedSizeBinary = it(R1);
tt.prototype.visitDate = it(k1);
tt.prototype.visitDateDay = it(n0);
tt.prototype.visitDateMillisecond = it(i0);
tt.prototype.visitTimestamp = it(L1);
tt.prototype.visitTimestampSecond = it(s0);
tt.prototype.visitTimestampMillisecond = it(c0);
tt.prototype.visitTimestampMicrosecond = it(u0);
tt.prototype.visitTimestampNanosecond = it(l0);
tt.prototype.visitTime = it(F1);
tt.prototype.visitTimeSecond = it(f0);
tt.prototype.visitTimeMillisecond = it(h0);
tt.prototype.visitTimeMicrosecond = it(d0);
tt.prototype.visitTimeNanosecond = it(p0);
tt.prototype.visitDecimal = it(U1);
tt.prototype.visitList = it(z1);
tt.prototype.visitStruct = it(K1);
tt.prototype.visitUnion = it(Y1);
tt.prototype.visitDenseUnion = it(y0);
tt.prototype.visitSparseUnion = it(m0);
tt.prototype.visitDictionary = it(X1);
tt.prototype.visitInterval = it(J1);
tt.prototype.visitIntervalDayTime = it(v0);
tt.prototype.visitIntervalYearMonth = it(g0);
tt.prototype.visitDuration = it(Q1);
tt.prototype.visitDurationSecond = it(b0);
tt.prototype.visitDurationMillisecond = it(_0);
tt.prototype.visitDurationMicrosecond = it(w0);
tt.prototype.visitDurationNanosecond = it(S0);
tt.prototype.visitFixedSizeList = it(Z1);
tt.prototype.visitMap = it(W1);
const Je = new tt(), rr = Symbol.for("parent"), Ii = Symbol.for("rowIndex");
class ad {
  constructor(t, r) {
    return this[rr] = t, this[Ii] = r, new Proxy(this, new ex());
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
    return new tx(this[rr], this[Ii]);
  }
}
class tx {
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
Object.defineProperties(ad.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [rr]: { writable: true, enumerable: false, configurable: false, value: null }, [Ii]: { writable: true, enumerable: false, configurable: false, value: -1 } });
class ex {
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
function et(e7) {
  return (t, r) => t.getValid(r) ? e7(t, r) : null;
}
const rx = (e7, t) => 864e5 * e7[t], nx = (e7, t) => null, O0 = (e7, t, r) => {
  if (r + 1 >= t.length) return null;
  const n = Dt(t[r]), i = Dt(t[r + 1]);
  return e7.subarray(n, i);
}, ix = ({ offset: e7, values: t }, r) => {
  const n = e7 + r;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, x0 = ({ values: e7 }, t) => rx(e7, t), A0 = ({ values: e7 }, t) => Dt(e7[t]), gn = ({ stride: e7, values: t }, r) => t[e7 * r], ax = ({ stride: e7, values: t }, r) => t0(t[e7 * r]), P0 = ({ values: e7 }, t) => e7[t], ox = ({ stride: e7, values: t }, r) => t.subarray(e7 * r, e7 * (r + 1)), T0 = ({ values: e7, valueOffsets: t }, r) => O0(e7, t, r), I0 = ({ values: e7, valueOffsets: t }, r) => {
  const n = O0(e7, t, r);
  return n !== null ? of(n) : null;
}, sx = ({ values: e7 }, t) => e7[t], cx = ({ type: e7, values: t }, r) => e7.precision !== pe.HALF ? t[r] : t0(t[r]), ux = (e7, t) => e7.type.unit === Xe.DAY ? x0(e7, t) : A0(e7, t), E0 = ({ values: e7 }, t) => 1e3 * Dt(e7[t]), $0 = ({ values: e7 }, t) => Dt(e7[t]), M0 = ({ values: e7 }, t) => Eb(e7[t], BigInt(1e3)), D0 = ({ values: e7 }, t) => Eb(e7[t], BigInt(1e6)), lx = (e7, t) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return E0(e7, t);
    case Z.MILLISECOND:
      return $0(e7, t);
    case Z.MICROSECOND:
      return M0(e7, t);
    case Z.NANOSECOND:
      return D0(e7, t);
  }
}, N0 = ({ values: e7 }, t) => e7[t], C0 = ({ values: e7 }, t) => e7[t], j0 = ({ values: e7 }, t) => e7[t], B0 = ({ values: e7 }, t) => e7[t], fx = (e7, t) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return N0(e7, t);
    case Z.MILLISECOND:
      return C0(e7, t);
    case Z.MICROSECOND:
      return j0(e7, t);
    case Z.NANOSECOND:
      return B0(e7, t);
  }
}, hx = ({ values: e7, stride: t }, r) => nd.decimal(e7.subarray(t * r, t * (r + 1))), dx = (e7, t) => {
  const { valueOffsets: r, stride: n, children: i } = e7, { [t * n]: a, [t * n + 1]: o } = r, c = i[0].slice(a, o - a);
  return new xt([c]);
}, px = (e7, t) => {
  const { valueOffsets: r, children: n } = e7, { [t]: i, [t + 1]: a } = r, o = n[0];
  return new od(o.slice(i, a - i));
}, yx = (e7, t) => new ad(e7, t), mx = (e7, t) => e7.type.mode === ye.Dense ? R0(e7, t) : k0(e7, t), R0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ee.visit(n, e7.valueOffsets[t]);
}, k0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ee.visit(n, t);
}, vx = (e7, t) => {
  var r;
  return (r = e7.dictionary) === null || r === void 0 ? void 0 : r.get(e7.values[t]);
}, gx = (e7, t) => e7.type.unit === Tr.DAY_TIME ? L0(e7, t) : F0(e7, t), L0 = ({ values: e7 }, t) => e7.subarray(2 * t, 2 * (t + 1)), F0 = ({ values: e7 }, t) => {
  const r = e7[t], n = new Int32Array(2);
  return n[0] = Math.trunc(r / 12), n[1] = Math.trunc(r % 12), n;
}, U0 = ({ values: e7 }, t) => e7[t], z0 = ({ values: e7 }, t) => e7[t], W0 = ({ values: e7 }, t) => e7[t], V0 = ({ values: e7 }, t) => e7[t], bx = (e7, t) => {
  switch (e7.type.unit) {
    case Z.SECOND:
      return U0(e7, t);
    case Z.MILLISECOND:
      return z0(e7, t);
    case Z.MICROSECOND:
      return W0(e7, t);
    case Z.NANOSECOND:
      return V0(e7, t);
  }
}, _x = (e7, t) => {
  const { stride: r, children: n } = e7, a = n[0].slice(t * r, r);
  return new xt([a]);
};
K.prototype.visitNull = et(nx);
K.prototype.visitBool = et(ix);
K.prototype.visitInt = et(sx);
K.prototype.visitInt8 = et(gn);
K.prototype.visitInt16 = et(gn);
K.prototype.visitInt32 = et(gn);
K.prototype.visitInt64 = et(P0);
K.prototype.visitUint8 = et(gn);
K.prototype.visitUint16 = et(gn);
K.prototype.visitUint32 = et(gn);
K.prototype.visitUint64 = et(P0);
K.prototype.visitFloat = et(cx);
K.prototype.visitFloat16 = et(ax);
K.prototype.visitFloat32 = et(gn);
K.prototype.visitFloat64 = et(gn);
K.prototype.visitUtf8 = et(I0);
K.prototype.visitLargeUtf8 = et(I0);
K.prototype.visitBinary = et(T0);
K.prototype.visitLargeBinary = et(T0);
K.prototype.visitFixedSizeBinary = et(ox);
K.prototype.visitDate = et(ux);
K.prototype.visitDateDay = et(x0);
K.prototype.visitDateMillisecond = et(A0);
K.prototype.visitTimestamp = et(lx);
K.prototype.visitTimestampSecond = et(E0);
K.prototype.visitTimestampMillisecond = et($0);
K.prototype.visitTimestampMicrosecond = et(M0);
K.prototype.visitTimestampNanosecond = et(D0);
K.prototype.visitTime = et(fx);
K.prototype.visitTimeSecond = et(N0);
K.prototype.visitTimeMillisecond = et(C0);
K.prototype.visitTimeMicrosecond = et(j0);
K.prototype.visitTimeNanosecond = et(B0);
K.prototype.visitDecimal = et(hx);
K.prototype.visitList = et(dx);
K.prototype.visitStruct = et(yx);
K.prototype.visitUnion = et(mx);
K.prototype.visitDenseUnion = et(R0);
K.prototype.visitSparseUnion = et(k0);
K.prototype.visitDictionary = et(vx);
K.prototype.visitInterval = et(gx);
K.prototype.visitIntervalDayTime = et(L0);
K.prototype.visitIntervalYearMonth = et(F0);
K.prototype.visitDuration = et(bx);
K.prototype.visitDurationSecond = et(U0);
K.prototype.visitDurationMillisecond = et(z0);
K.prototype.visitDurationMicrosecond = et(W0);
K.prototype.visitDurationNanosecond = et(V0);
K.prototype.visitFixedSizeList = et(_x);
K.prototype.visitMap = et(px);
const Ee = new K(), _i = Symbol.for("keys"), Ei = Symbol.for("vals"), wi = Symbol.for("kKeysAsStrings"), hf = Symbol.for("_kKeysAsStrings");
class od {
  constructor(t) {
    return this[_i] = new xt([t.children[0]]).memoize(), this[Ei] = t.children[1], new Proxy(this, new Sx());
  }
  get [wi]() {
    return this[hf] || (this[hf] = Array.from(this[_i].toArray(), String));
  }
  [Symbol.iterator]() {
    return new wx(this[_i], this[Ei]);
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
class wx {
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
class Sx {
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
Object.defineProperties(od.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [_i]: { writable: true, enumerable: false, configurable: false, value: null }, [Ei]: { writable: true, enumerable: false, configurable: false, value: null }, [hf]: { writable: true, enumerable: false, configurable: false, value: null } });
let ey;
function q0(e7, t, r, n) {
  const { length: i = 0 } = e7;
  let a = typeof t != "number" ? 0 : t, o = typeof r != "number" ? i : r;
  return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (ey = a, a = o, o = ey), o > i && (o = i), n ? n(e7, a, o) : [a, o];
}
const sd = (e7, t) => e7 < 0 ? t + e7 : e7, ry = (e7) => e7 !== e7;
function ha(e7) {
  if (typeof e7 !== "object" || e7 === null) return ry(e7) ? ry : (r) => r === e7;
  if (e7 instanceof Date) {
    const r = e7.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === r : false;
  }
  return ArrayBuffer.isView(e7) ? (r) => r ? _1(e7, r) : false : e7 instanceof Map ? xx(e7) : Array.isArray(e7) ? Ox(e7) : e7 instanceof xt ? Ax(e7) : Px(e7, true);
}
function Ox(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = ha(e7[r]);
  return _u(t);
}
function xx(e7) {
  let t = -1;
  const r = [];
  for (const n of e7.values()) r[++t] = ha(n);
  return _u(r);
}
function Ax(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = ha(e7.get(r));
  return _u(t);
}
function Px(e7, t = false) {
  const r = Object.keys(e7);
  if (!t && r.length === 0) return () => false;
  const n = [];
  for (let i = -1, a = r.length; ++i < a; ) n[i] = ha(e7[r[i]]);
  return _u(n, r);
}
function _u(e7, t) {
  return (r) => {
    if (!r || typeof r != "object") return false;
    switch (r.constructor) {
      case Array:
        return Tx(e7, r);
      case Map:
        return ny(e7, r, r.keys());
      case od:
      case ad:
      case Object:
      case void 0:
        return ny(e7, r, t || Object.keys(r));
    }
    return r instanceof xt ? Ix(e7, r) : false;
  };
}
function Tx(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t[n])) return false;
  return true;
}
function Ix(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t.get(n))) return false;
  return true;
}
function ny(e7, t, r) {
  const n = r[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const s = e7.length;
  let c = a.next(), u = n.next(), l = i.next();
  for (; o < s && !u.done && !l.done && !c.done && !(u.value !== l.value || !e7[o](c.value)); ++o, u = n.next(), l = i.next(), c = a.next()) ;
  return o === s && u.done && l.done && c.done ? true : (n.return && n.return(), i.return && i.return(), a.return && a.return(), false);
}
function G0(e7, t, r, n) {
  return (r & 1 << n) !== 0;
}
function Ex(e7, t, r, n) {
  return (r & 1 << n) >> n;
}
function ic(e7, t, r) {
  const n = r.byteLength + 7 & -8;
  if (e7 > 0 || r.byteLength < n) {
    const i = new Uint8Array(n);
    return i.set(e7 % 8 === 0 ? r.subarray(e7 >> 3) : ac(new cd(r, e7, t, null, G0)).subarray(0, n)), i;
  }
  return r;
}
function ac(e7) {
  const t = [];
  let r = 0, n = 0, i = 0;
  for (const o of e7) o && (i |= 1 << n), ++n === 8 && (t[r++] = i, i = n = 0);
  (r === 0 || n > 0) && (t[r++] = i);
  const a = new Uint8Array(t.length + 7 & -8);
  return a.set(t), a;
}
class cd {
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
function df(e7, t, r) {
  if (r - t <= 0) return 0;
  if (r - t < 8) {
    let a = 0;
    for (const o of new cd(e7, t, r - t, e7, Ex)) a += o;
    return a;
  }
  const n = r >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return df(e7, t, i) + df(e7, n, r) + $x(e7, i >> 3, n - i >> 3);
}
function $x(e7, t, r) {
  let n = 0, i = Math.trunc(t);
  const a = new DataView(e7.buffer, e7.byteOffset, e7.byteLength), o = r === void 0 ? e7.byteLength : i + r;
  for (; o - i >= 4; ) n += bl(a.getUint32(i)), i += 4;
  for (; o - i >= 2; ) n += bl(a.getUint16(i)), i += 2;
  for (; o - i >= 1; ) n += bl(a.getUint8(i)), i += 1;
  return n;
}
function bl(e7) {
  let t = Math.trunc(e7);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const Mx = -1;
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
    return t <= Mx && (r = this.nullBitmap) && (this._nullCount = t = r.length === 0 ? 0 : this.length - df(r, this.offset, this.offset + this.length)), t;
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
      (!a || a.byteLength <= l) && (a = new Uint8Array((o + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (a.set(ic(o, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: a })) : Object.assign(this, { nullBitmap: a, _nullCount: 0 }));
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
    i[r >> 3] = (1 << r - (r & -8)) - 1, n > 0 && i.set(ic(this.offset, r, this.nullBitmap), 0);
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
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Vp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Vp(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
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
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.indices.ArrayType, t.data), { ["dictionary"]: o = new xt([new Ya().visit({ type: r.dictionary })]) } = t, { ["length"]: s = a.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
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
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ya().visit({ type: r.valueType }) } = t, a = vt(t.nullBitmap), { ["length"]: o = i.length / jr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], [i]);
  }
  visitMap(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new Ya().visit({ type: r.childType }) } = t, a = vt(t.nullBitmap), o = Ia(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
}
const Dx = new Ya();
function pt(e7) {
  return Dx.visit(e7);
}
class iy {
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
function Nx(e7) {
  return e7.some((t) => t.nullable);
}
function H0(e7) {
  return e7.reduce((t, r) => t + r.nullCount, 0);
}
function K0(e7) {
  return e7.reduce((t, r, n) => (t[n + 1] = t[n] + r.length, t), new Uint32Array(e7.length + 1));
}
function Y0(e7, t, r, n) {
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
function ud(e7, t, r, n) {
  let i = 0, a = 0, o = t.length - 1;
  do {
    if (i >= o - 1) return r < t[o] ? n(e7, i, r - t[i]) : null;
    a = i + Math.trunc((o - i) * 0.5), r < t[a] ? o = a : i = a;
  } while (i < o);
}
function ld(e7, t) {
  return e7.getValid(t);
}
function oc(e7) {
  function t(r, n, i) {
    return e7(r[n], i);
  }
  return function(r) {
    const n = this.data;
    return ud(n, this._offsets, r, t);
  };
}
function X0(e7) {
  let t;
  function r(n, i, a) {
    return e7(n[i], a, t);
  }
  return function(n, i) {
    const a = this.data;
    t = i;
    const o = ud(a, this._offsets, n, r);
    return t = void 0, o;
  };
}
function J0(e7) {
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
    const a = this.data, o = typeof i != "number" ? r(a, 0, 0) : ud(a, this._offsets, i, r);
    return t = void 0, o;
  };
}
class Y extends dt {
}
function Cx(e7, t) {
  return t === null && e7.length > 0 ? 0 : -1;
}
function jx(e7, t) {
  const { nullBitmap: r } = e7;
  if (!r || e7.nullCount <= 0) return -1;
  let n = 0;
  for (const i of new cd(r, e7.offset + (t || 0), e7.length, r, G0)) {
    if (!i) return n;
    ++n;
  }
  return -1;
}
function ot(e7, t, r) {
  if (t === void 0) return -1;
  if (t === null) switch (e7.typeId) {
    case x.Union:
      break;
    case x.Dictionary:
      break;
    default:
      return jx(e7, r);
  }
  const n = Ee.getVisitFn(e7), i = ha(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
function Q0(e7, t, r) {
  const n = Ee.getVisitFn(e7), i = ha(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
Y.prototype.visitNull = Cx;
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
Y.prototype.visitDenseUnion = Q0;
Y.prototype.visitSparseUnion = Q0;
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
const sc = new Y();
class X extends dt {
}
function rt(e7) {
  const { type: t } = e7;
  if (e7.nullCount === 0 && e7.stride === 1 && (G.isInt(t) && t.bitWidth !== 64 || G.isTime(t) && t.bitWidth !== 64 || G.isFloat(t) && t.precision !== pe.HALF)) return new iy(e7.data.length, (n) => {
    const i = e7.data[n];
    return i.values.subarray(0, i.length)[Symbol.iterator]();
  });
  let r = 0;
  return new iy(e7.data.length, (n) => {
    const a = e7.data[n].length, o = e7.slice(r, r + a);
    return r += a, new Bx(o);
  });
}
class Bx {
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
const fd = new X();
var Z0;
const t_ = {}, e_ = {};
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
        const { get: s, set: c, indexOf: u } = t_[o.typeId], l = a[0];
        this.isValid = (f) => ld(l, f), this.get = (f) => s(l, f), this.set = (f, h) => c(l, f, h), this.indexOf = (f) => u(l, f), this._offsets = [0, l.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, e_[o.typeId]), this._offsets = K0(a);
        break;
    }
    this.data = a, this.type = o, this.stride = jr(o), this.numChildren = (i = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets.at(-1);
  }
  get byteLength() {
    return this.data.reduce((t, r) => t + r.byteLength, 0);
  }
  get nullable() {
    return Nx(this.data);
  }
  get nullCount() {
    return H0(this.data);
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
    return this.get(sd(t, this.length));
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
    return fd.visit(this);
  }
  concat(...t) {
    return new xt(this.data.concat(t.flatMap((r) => r.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(t, r) {
    return new xt(q0(this, t, r, ({ data: n, _offsets: i }, a, o) => Y0(n, i, a, o)));
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
      const t = new cc(this.data[0].dictionary), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return new cc(this);
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
Z0 = Symbol.toStringTag;
xt[Z0] = ((e7) => {
  e7.type = G.prototype, e7.data = [], e7.length = 0, e7.stride = 1, e7.numChildren = 0, e7._offsets = new Uint32Array([0]), e7[Symbol.isConcatSpreadable] = true;
  const t = Object.keys(x).map((r) => x[r]).filter((r) => typeof r == "number" && r !== x.NONE);
  for (const r of t) {
    const n = Ee.getVisitFnByTypeId(r), i = Je.getVisitFnByTypeId(r), a = sc.getVisitFnByTypeId(r);
    t_[r] = { get: n, set: i, indexOf: a }, e_[r] = Object.create(e7, { isValid: { value: oc(ld) }, get: { value: oc(Ee.getVisitFnByTypeId(r)) }, set: { value: X0(Je.getVisitFnByTypeId(r)) }, indexOf: { value: J0(sc.getVisitFnByTypeId(r)) } });
  }
  return "Vector";
})(xt.prototype);
class cc extends xt {
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
    } }), Object.defineProperty(this, "slice", { value: (o, s) => new cc(i.call(this, o, s)) }), Object.defineProperty(this, "isMemoized", { value: true }), Object.defineProperty(this, "unmemoize", { value: () => new xt(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
  }
}
class pf {
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
    return r ? (t || new pr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  dictionaries(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new pf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, r) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (r || new pf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
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
    this.fields = t || [], this.metadata = r || /* @__PURE__ */ new Map(), n || (n = yf(this.fields)), this.dictionaries = n, this.metadataVersion = i;
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
    }), o = yf(a, /* @__PURE__ */ new Map());
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
function yf(e7, t = /* @__PURE__ */ new Map()) {
  for (let r = -1, n = e7.length; ++r < n; ) {
    const a = e7[r].type;
    if (G.isDictionary(a)) {
      if (!t.has(a.id)) t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && yf(a.children, t);
  }
  return t;
}
var Rx = Ab, kx = Ci;
class so {
  static decode(t) {
    t = new kx(vt(t));
    const r = Ne.getRootAsFooter(t), n = At.decode(r.schema(), /* @__PURE__ */ new Map(), r.version());
    return new Lx(n, r);
  }
  static encode(t) {
    const r = new Rx(), n = At.encode(r, t.schema);
    Ne.startRecordBatchesVector(r, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse()) yn.encode(r, o);
    const i = r.endVector();
    Ne.startDictionariesVector(r, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse()) yn.encode(r, o);
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
class Lx extends so {
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
    return pf.createBlock(t, i, n, a);
  }
  constructor(t, r, n) {
    this.metaDataLength = t, this.offset = Dt(n), this.bodyLength = Dt(r);
  }
}
const Wt = Object.freeze({ done: true, value: void 0 });
class ay {
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
class hd {
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
class Fx extends hd {
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
      for (; t.length > 0; ) t.shift().resolve(Wt);
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
      return yield this.abort(t), Wt;
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return yield this.close(), Wt;
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
    }) : Promise.resolve(Wt);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve) return true;
    throw new Error("AsyncQueue is closed");
  }
}
class Ds extends Fx {
  write(t) {
    if ((t = vt(t)).byteLength > 0) return super.write(t);
  }
  toString(t = false) {
    return t ? of(this.toUint8Array(true)) : this.toUint8Array(false).then(of);
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
class uc {
  constructor(t) {
    t && (this.source = new Ux(Ve.fromIterable(t)));
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
    t instanceof Ri ? this.source = t.source : t instanceof Ds ? this.source = new In(Ve.fromAsyncIterable(t)) : wb(t) ? this.source = new In(Ve.fromNodeStream(t)) : ed(t) ? this.source = new In(Ve.fromDOMStream(t)) : _b(t) ? this.source = new In(Ve.fromDOMStream(t.body)) : Ko(t) ? this.source = new In(Ve.fromIterable(t)) : Gn(t) ? this.source = new In(Ve.fromAsyncIterable(t)) : fa(t) && (this.source = new In(Ve.fromAsyncIterable(t)));
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
class Ux {
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
    return Object.create(this.source.throw && this.source.throw(t) || Wt);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || Wt);
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
      const r = this.source.throw && (yield this.source.throw(t)) || Wt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      const r = this.source.return && (yield this.source.return(t)) || Wt;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(r);
    });
  }
}
class oy extends uc {
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
class lc extends Ri {
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
const zx = 65536;
function Si(e7) {
  return e7 < 0 && (e7 = 4294967295 + e7 + 1), `0x${e7.toString(16)}`;
}
const ki = 8, dd = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
class r_ {
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
    return i = r[2] * n[3], a += i, i = r[3] * n[2] >>> 0, a += i, this.buffer[0] += a << 16, this.buffer[1] = a >>> 0 < i ? zx : 0, this.buffer[1] += a >>> 16, this.buffer[1] += r[1] * n[3] + r[2] * n[2] + r[3] * n[1], this.buffer[1] += r[0] * n[3] + r[1] * n[2] + r[2] * n[1] + r[3] * n[0] << 16, this;
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
class It extends r_ {
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
      const o = ki < n - a ? ki : n - a, s = new It(new Uint32Array([Number.parseInt(t.slice(a, a + o), 10), 0])), c = new It(new Uint32Array([dd[o], 0]));
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
class Oe extends r_ {
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
      const s = ki < i - o ? ki : i - o, c = new Oe(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0])), u = new Oe(new Uint32Array([dd[s], 0]));
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
      const s = ki < i - o ? ki : i - o, c = new yr(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0, 0, 0])), u = new yr(new Uint32Array([dd[s], 0, 0, 0]));
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
class n_ extends dt {
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
class Wx extends n_ {
  constructor(t, r, n, i, a) {
    super(new Uint8Array(0), r, n, i, a), this.sources = t;
  }
  readNullBitmap(t, r, { offset: n } = this.nextBufferRange()) {
    return r <= 0 ? new Uint8Array(0) : ac(this.sources[n]);
  }
  readOffsets(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.OffsetArrayType, this.sources[r]));
  }
  readTypeIds(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.ArrayType, this.sources[r]));
  }
  readData(t, { offset: r } = this.nextBufferRange()) {
    const { sources: n } = this;
    return G.isTimestamp(t) || (G.isInt(t) || G.isTime(t)) && t.bitWidth === 64 || G.isDuration(t) || G.isDate(t) && t.unit === Xe.MILLISECOND ? Et(Uint8Array, Oe.convertArray(n[r])) : G.isDecimal(t) ? Et(Uint8Array, yr.convertArray(n[r])) : G.isBinary(t) || G.isLargeBinary(t) || G.isFixedSizeBinary(t) ? Vx(n[r]) : G.isBool(t) ? ac(n[r]) : G.isUtf8(t) || G.isLargeUtf8(t) ? td(n[r].join("")) : Et(Uint8Array, Et(t.ArrayType, n[r].map((i) => +i)));
  }
}
function Vx(e7) {
  const t = e7.join(""), r = new Uint8Array(t.length / 2);
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
function _e(e7, t) {
  return t instanceof e7.constructor;
}
function ti(e7, t) {
  return e7 === t || _e(e7, t);
}
function Yr(e7, t) {
  return e7 === t || _e(e7, t) && e7.bitWidth === t.bitWidth && e7.isSigned === t.isSigned;
}
function wu(e7, t) {
  return e7 === t || _e(e7, t) && e7.precision === t.precision;
}
function qx(e7, t) {
  return e7 === t || _e(e7, t) && e7.byteWidth === t.byteWidth;
}
function pd(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Yo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit && e7.timezone === t.timezone;
}
function Xo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit && e7.bitWidth === t.bitWidth;
}
function Gx(e7, t) {
  return e7 === t || _e(e7, t) && e7.children.length === t.children.length && mn.compareManyFields(e7.children, t.children);
}
function Hx(e7, t) {
  return e7 === t || _e(e7, t) && e7.children.length === t.children.length && mn.compareManyFields(e7.children, t.children);
}
function yd(e7, t) {
  return e7 === t || _e(e7, t) && e7.mode === t.mode && e7.typeIds.every((r, n) => r === t.typeIds[n]) && mn.compareManyFields(e7.children, t.children);
}
function Kx(e7, t) {
  return e7 === t || _e(e7, t) && e7.id === t.id && e7.isOrdered === t.isOrdered && mn.visit(e7.indices, t.indices) && mn.visit(e7.dictionary, t.dictionary);
}
function md(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Jo(e7, t) {
  return e7 === t || _e(e7, t) && e7.unit === t.unit;
}
function Yx(e7, t) {
  return e7 === t || _e(e7, t) && e7.listSize === t.listSize && e7.children.length === t.children.length && mn.compareManyFields(e7.children, t.children);
}
function Xx(e7, t) {
  return e7 === t || _e(e7, t) && e7.keysSorted === t.keysSorted && e7.children.length === t.children.length && mn.compareManyFields(e7.children, t.children);
}
J.prototype.visitNull = ti;
J.prototype.visitBool = ti;
J.prototype.visitInt = Yr;
J.prototype.visitInt8 = Yr;
J.prototype.visitInt16 = Yr;
J.prototype.visitInt32 = Yr;
J.prototype.visitInt64 = Yr;
J.prototype.visitUint8 = Yr;
J.prototype.visitUint16 = Yr;
J.prototype.visitUint32 = Yr;
J.prototype.visitUint64 = Yr;
J.prototype.visitFloat = wu;
J.prototype.visitFloat16 = wu;
J.prototype.visitFloat32 = wu;
J.prototype.visitFloat64 = wu;
J.prototype.visitUtf8 = ti;
J.prototype.visitLargeUtf8 = ti;
J.prototype.visitBinary = ti;
J.prototype.visitLargeBinary = ti;
J.prototype.visitFixedSizeBinary = qx;
J.prototype.visitDate = pd;
J.prototype.visitDateDay = pd;
J.prototype.visitDateMillisecond = pd;
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
J.prototype.visitList = Gx;
J.prototype.visitStruct = Hx;
J.prototype.visitUnion = yd;
J.prototype.visitDenseUnion = yd;
J.prototype.visitSparseUnion = yd;
J.prototype.visitDictionary = Kx;
J.prototype.visitInterval = md;
J.prototype.visitIntervalDayTime = md;
J.prototype.visitIntervalYearMonth = md;
J.prototype.visitDuration = Jo;
J.prototype.visitDurationSecond = Jo;
J.prototype.visitDurationMillisecond = Jo;
J.prototype.visitDurationMicrosecond = Jo;
J.prototype.visitDurationNanosecond = Jo;
J.prototype.visitFixedSizeList = Yx;
J.prototype.visitMap = Xx;
const mn = new J();
function mf(e7, t) {
  return mn.compareSchemas(e7, t);
}
function _l(e7, t) {
  return Jx(e7, t.map((r) => r.data.concat()));
}
function Jx(e7, t) {
  const r = [...e7.fields], n = [], i = { numBatches: t.reduce((f, h) => Math.max(f, h.length), 0) };
  let a = 0, o = 0, s = -1;
  const c = t.length;
  let u, l = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < c; ) l[s] = u = t[s].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (l = Qx(r, o, l, t, i), o > 0 && (n[a++] = pt({ type: new ve(r), length: o, nullCount: 0, children: l.slice() })));
  }
  return [e7 = e7.assign(r), n.map((f) => new Ae(e7, f))];
}
function Qx(e7, t, r, n, i) {
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
var i_;
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
            const u = Object.keys(c), l = u.map((d) => new xt([c[d]])), f = i ?? new At(u.map((d, y) => new Ft(String(d), l[y].type, l[y].nullable))), [, h] = _l(f, l);
            return h.length === 0 ? [new Ae(c)] : h;
          }
        }
      }
      return [];
    }, s = t.flatMap((c) => o(c));
    if (i = (n = i ?? ((r = s[0]) === null || r === void 0 ? void 0 : r.schema)) !== null && n !== void 0 ? n : new At([]), !(i instanceof At)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of s) {
      if (!(c instanceof Ae)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!mf(i, c.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = s, this._offsets = a ?? K0(this.data);
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
    return this._nullCount === -1 && (this._nullCount = H0(this.data)), this._nullCount;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(sd(t, this.numRows));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  [Symbol.iterator]() {
    return this.batches.length > 0 ? fd.visit(new xt(this.data)) : new Array(0)[Symbol.iterator]();
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
    [t, r] = q0({ length: this.numRows }, t, r);
    const i = Y0(this.data, this._offsets, t, r);
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
      [a[t], s[t]] = [o, r], [n, i] = _l(n, s);
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
    return new me(..._l(a, o));
  }
}
i_ = Symbol.toStringTag;
me[i_] = ((e7) => (e7.schema = null, e7.batches = [], e7._offsets = new Uint32Array([0]), e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, e7.isValid = oc(ld), e7.get = oc(Ee.getVisitFn(x.Struct)), e7.set = X0(Je.getVisitFn(x.Struct)), e7.indexOf = J0(sc.getVisitFn(x.Struct)), "Table"))(me.prototype);
var a_;
let Ae = class Ha {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof At)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([, this.data = pt({ nullCount: 0, type: new ve(this.schema.fields), children: this.schema.fields.map((r) => pt({ type: r.type, nullCount: 0 })) })] = t, !(this.data instanceof Tt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = sy(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [r] = t, { fields: n, children: i, length: a } = Object.keys(r).reduce((c, u, l) => (c.children[l] = r[u], c.length = Math.max(c.length, r[u].length), c.fields[l] = Ft.new({ name: u, type: r[u].type, nullable: true }), c), { length: 0, fields: new Array(), children: new Array() }), o = new At(n), s = pt({ type: new ve(n), length: a, children: i, nullCount: 0 });
        [this.schema, this.data] = sy(o, s.children, a);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = o_(this.schema.fields, this.data.children));
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
    return this.get(sd(t, this.numRows));
  }
  set(t, r) {
    return Je.visit(this.data, t, r);
  }
  indexOf(t, r) {
    return sc.visit(this.data, t, r);
  }
  [Symbol.iterator]() {
    return fd.visit(new xt([this.data]));
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
      r || (r = new xt([pt({ type: new pn(), length: this.numRows })]));
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
a_ = Symbol.toStringTag;
Ae[a_] = ((e7) => (e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, "RecordBatch"))(Ae.prototype);
function sy(e7, t, r = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...e7.fields], a = [...t], o = (r + 63 & -64) >> 3;
  for (const [s, c] of e7.fields.entries()) {
    const u = t[s];
    (!u || u.length !== r) && (i[s] = c.clone({ nullable: true }), a[s] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(r)) !== null && n !== void 0 ? n : pt({ type: c.type, length: r, nullCount: r, nullBitmap: new Uint8Array(o) }));
  }
  return [e7.assign(i), pt({ type: new ve(i), length: r, children: a })];
}
function o_(e7, t, r = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = e7 == null ? void 0 : e7.length) !== null && n !== void 0 ? n : 0) > 0 && (e7 == null ? void 0 : e7.length) === (t == null ? void 0 : t.length)) for (let a = -1, o = e7.length; ++a < o; ) {
    const { type: s } = e7[a], c = t[a];
    for (const u of [c, ...((i = c == null ? void 0 : c.dictionary) === null || i === void 0 ? void 0 : i.data) || []]) o_(s.children, u == null ? void 0 : u.children, r);
    if (G.isDictionary(s)) {
      const { id: u } = s;
      if (!r.has(u)) (c == null ? void 0 : c.dictionary) && r.set(u, c.dictionary);
      else if (r.get(u) !== c.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
  }
  return r;
}
class vd extends Ae {
  constructor(t) {
    const r = t.fields.map((i) => pt({ type: i.type })), n = pt({ type: new ve(t.fields), nullCount: 0, children: r });
    super(t, n);
  }
}
let en = class dr {
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
    return dr.startMessage(t), dr.addVersion(t, r), dr.addHeaderType(t, n), dr.addHeader(t, i), dr.addBodyLength(t, a), dr.addCustomMetadata(t, o), dr.endMessage(t);
  }
};
class Zx extends dt {
  visit(t, r) {
    return t == null || r == null ? void 0 : super.visit(t, r);
  }
  visitNull(t, r) {
    return Qp.startNull(r), Qp.endNull(r);
  }
  visitInt(t, r) {
    return Be.startInt(r), Be.addBitWidth(r, t.bitWidth), Be.addIsSigned(r, t.isSigned), Be.endInt(r);
  }
  visitFloat(t, r) {
    return vr.startFloatingPoint(r), vr.addPrecision(r, t.precision), vr.endFloatingPoint(r);
  }
  visitBinary(t, r) {
    return Hp.startBinary(r), Hp.endBinary(r);
  }
  visitLargeBinary(t, r) {
    return Yp.startLargeBinary(r), Yp.endLargeBinary(r);
  }
  visitBool(t, r) {
    return Kp.startBool(r), Kp.endBool(r);
  }
  visitUtf8(t, r) {
    return Zp.startUtf8(r), Zp.endUtf8(r);
  }
  visitLargeUtf8(t, r) {
    return Xp.startLargeUtf8(r), Xp.endLargeUtf8(r);
  }
  visitDecimal(t, r) {
    return pi.startDecimal(r), pi.addScale(r, t.scale), pi.addPrecision(r, t.precision), pi.addBitWidth(r, t.bitWidth), pi.endDecimal(r);
  }
  visitDate(t, r) {
    return Ps.startDate(r), Ps.addUnit(r, t.unit), Ps.endDate(r);
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
    return Ts.startDuration(r), Ts.addUnit(r, t.unit), Ts.endDuration(r);
  }
  visitList(t, r) {
    return Jp.startList(r), Jp.endList(r);
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
    return Is.startFixedSizeBinary(r), Is.addByteWidth(r, t.byteWidth), Is.endFixedSizeBinary(r);
  }
  visitFixedSizeList(t, r) {
    return Es.startFixedSizeList(r), Es.addListSize(r, t.listSize), Es.endFixedSizeList(r);
  }
  visitMap(t, r) {
    return $s.startMap(r), $s.addKeysSorted(r, t.keysSorted), $s.endMap(r);
  }
}
const wl = new Zx();
function tA(e7, t = /* @__PURE__ */ new Map()) {
  return new At(rA(e7, t), Ns(e7.metadata), t);
}
function s_(e7) {
  return new ke(e7.count, c_(e7.columns), u_(e7.columns));
}
function eA(e7) {
  return new Ir(s_(e7.data), e7.id, e7.isDelta);
}
function rA(e7, t) {
  return (e7.fields || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function cy(e7, t) {
  return (e7.children || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function c_(e7) {
  return (e7 || []).reduce((t, r) => [...t, new vn(r.count, nA(r.VALIDITY)), ...c_(r.children)], []);
}
function u_(e7, t = []) {
  for (let r = -1, n = (e7 || []).length; ++r < n; ) {
    const i = e7[r];
    i.VALIDITY && t.push(new _r(t.length, i.VALIDITY.length)), i.TYPE_ID && t.push(new _r(t.length, i.TYPE_ID.length)), i.OFFSET && t.push(new _r(t.length, i.OFFSET.length)), i.DATA && t.push(new _r(t.length, i.DATA.length)), t = u_(i.children, t);
  }
  return t;
}
function nA(e7) {
  return (e7 || []).reduce((t, r) => t + +(r === 0), 0);
}
function iA(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(a = e7.dictionary) ? (o = ly(e7, cy(e7, t)), i = new Ft(e7.name, o, e7.nullable, Ns(e7.metadata))) : t.has(r = a.id) ? (n = (n = a.indexType) ? uy(n) : new oo(), s = new Bi(t.get(r), n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Ns(e7.metadata))) : (n = (n = a.indexType) ? uy(n) : new oo(), t.set(r, o = ly(e7, cy(e7, t))), s = new Bi(o, n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Ns(e7.metadata))), i || null;
}
function Ns(e7 = []) {
  return new Map(e7.map(({ key: t, value: r }) => [t, r]));
}
function uy(e7) {
  return new Hn(e7.isSigned, e7.bitWidth);
}
function ly(e7, t) {
  const r = e7.type.name;
  switch (r) {
    case "NONE":
      return new pn();
    case "null":
      return new pn();
    case "binary":
      return new zs();
    case "largebinary":
      return new Ws();
    case "utf8":
      return new Vs();
    case "largeutf8":
      return new qs();
    case "bool":
      return new Gs();
    case "list":
      return new Zs((t || [])[0]);
    case "struct":
      return new ve(t || []);
    case "struct_":
      return new ve(t || []);
  }
  switch (r) {
    case "int": {
      const n = e7.type;
      return new Hn(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = e7.type;
      return new Us(pe[n.precision]);
    }
    case "decimal": {
      const n = e7.type;
      return new Hs(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = e7.type;
      return new Ks(Xe[n.unit]);
    }
    case "time": {
      const n = e7.type;
      return new Ys(Z[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = e7.type;
      return new Xs(Z[n.unit], n.timezone);
    }
    case "interval": {
      const n = e7.type;
      return new Js(Tr[n.unit]);
    }
    case "duration": {
      const n = e7.type;
      return new Qs(Z[n.unit]);
    }
    case "union": {
      const n = e7.type, [i, ...a] = (n.mode + "").toLowerCase(), o = i.toUpperCase() + a.join("");
      return new tc(ye[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = e7.type;
      return new ec(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = e7.type;
      return new rc(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = e7.type;
      return new nc((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${r}"`);
}
var aA = Ab, oA = Ci;
class ge {
  static fromJSON(t, r) {
    const n = new ge(0, Kt.V5, r);
    return n._createHeader = sA(t, r), n;
  }
  static decode(t) {
    t = new oA(vt(t));
    const r = en.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), a = r.headerType(), o = new ge(n, i, a);
    return o._createHeader = cA(r, a), o;
  }
  static encode(t) {
    const r = new aA();
    let n = -1;
    return t.isSchema() ? n = At.encode(r, t.header()) : t.isRecordBatch() ? n = ke.encode(r, t.header()) : t.isDictionaryBatch() && (n = Ir.encode(r, t.header())), en.startMessage(r), en.addVersion(r, Kt.V5), en.addHeader(r, n), en.addHeaderType(r, t.headerType), en.addBodyLength(r, BigInt(t.bodyLength)), en.finishMessageBuffer(r, en.endMessage(r)), r.asUint8Array();
  }
  static from(t, r = 0) {
    if (t instanceof At) return new ge(0, Kt.V5, _t.Schema, t);
    if (t instanceof ke) return new ge(r, Kt.V5, _t.RecordBatch, t);
    if (t instanceof Ir) return new ge(r, Kt.V5, _t.DictionaryBatch, t);
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
function sA(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.fromJSON(e7);
      case _t.RecordBatch:
        return ke.fromJSON(e7);
      case _t.DictionaryBatch:
        return Ir.fromJSON(e7);
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
function cA(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.decode(e7.header(new pr()), /* @__PURE__ */ new Map(), e7.version());
      case _t.RecordBatch:
        return ke.decode(e7.header(new Nr()), e7.version());
      case _t.DictionaryBatch:
        return Ir.decode(e7.header(new hi()), e7.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
Ft.encode = bA;
Ft.decode = vA;
Ft.fromJSON = iA;
At.encode = gA;
At.decode = uA;
At.fromJSON = tA;
ke.encode = _A;
ke.decode = lA;
ke.fromJSON = s_;
Ir.encode = wA;
Ir.decode = fA;
Ir.fromJSON = eA;
vn.encode = SA;
vn.decode = dA;
_r.encode = OA;
_r.decode = hA;
function uA(e7, t = /* @__PURE__ */ new Map(), r = Kt.V5) {
  const n = mA(e7, t);
  return new At(n, Cs(e7), t, r);
}
function lA(e7, t = Kt.V5) {
  if (e7.compression() !== null) throw new Error("Record batch compression not implemented");
  return new ke(e7.length(), pA(e7), yA(e7, t));
}
function fA(e7, t = Kt.V5) {
  return new Ir(ke.decode(e7.data(), t), e7.id(), e7.isDelta());
}
function hA(e7) {
  return new _r(e7.offset(), e7.length());
}
function dA(e7) {
  return new vn(e7.length(), e7.nullCount());
}
function pA(e7) {
  const t = [];
  for (let r, n = -1, i = -1, a = e7.nodesLength(); ++n < a; ) (r = e7.nodes(n)) && (t[++i] = vn.decode(r));
  return t;
}
function yA(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.buffersLength(); ++i < o; ) (n = e7.buffers(i)) && (t < Kt.V4 && (n.bb_pos += 8 * (i + 1)), r[++a] = _r.decode(n));
  return r;
}
function mA(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.fieldsLength(); ++i < o; ) (n = e7.fields(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function fy(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.childrenLength(); ++i < o; ) (n = e7.children(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function vA(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(s = e7.dictionary()) ? (i = dy(e7, fy(e7, t)), n = new Ft(e7.name(), i, e7.nullable(), Cs(e7))) : t.has(r = Dt(s.id())) ? (a = (a = s.indexType()) ? hy(a) : new oo(), o = new Bi(t.get(r), a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), Cs(e7))) : (a = (a = s.indexType()) ? hy(a) : new oo(), t.set(r, i = dy(e7, fy(e7, t))), o = new Bi(i, a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), Cs(e7))), n || null;
}
function Cs(e7) {
  const t = /* @__PURE__ */ new Map();
  if (e7) for (let r, n, i = -1, a = Math.trunc(e7.customMetadataLength()); ++i < a; ) (r = e7.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function hy(e7) {
  return new Hn(e7.isSigned(), e7.bitWidth());
}
function dy(e7, t) {
  const r = e7.typeType();
  switch (r) {
    case Ct.NONE:
      return new pn();
    case Ct.Null:
      return new pn();
    case Ct.Binary:
      return new zs();
    case Ct.LargeBinary:
      return new Ws();
    case Ct.Utf8:
      return new Vs();
    case Ct.LargeUtf8:
      return new qs();
    case Ct.Bool:
      return new Gs();
    case Ct.List:
      return new Zs((t || [])[0]);
    case Ct.Struct_:
      return new ve(t || []);
  }
  switch (r) {
    case Ct.Int: {
      const n = e7.type(new Be());
      return new Hn(n.isSigned(), n.bitWidth());
    }
    case Ct.FloatingPoint: {
      const n = e7.type(new vr());
      return new Us(n.precision());
    }
    case Ct.Decimal: {
      const n = e7.type(new pi());
      return new Hs(n.scale(), n.precision(), n.bitWidth());
    }
    case Ct.Date: {
      const n = e7.type(new Ps());
      return new Ks(n.unit());
    }
    case Ct.Time: {
      const n = e7.type(new qe());
      return new Ys(n.unit(), n.bitWidth());
    }
    case Ct.Timestamp: {
      const n = e7.type(new Ge());
      return new Xs(n.unit(), n.timezone());
    }
    case Ct.Interval: {
      const n = e7.type(new gr());
      return new Js(n.unit());
    }
    case Ct.Duration: {
      const n = e7.type(new Ts());
      return new Qs(n.unit());
    }
    case Ct.Union: {
      const n = e7.type(new xe());
      return new tc(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Ct.FixedSizeBinary: {
      const n = e7.type(new Is());
      return new ec(n.byteWidth());
    }
    case Ct.FixedSizeList: {
      const n = e7.type(new Es());
      return new rc(n.listSize(), (t || [])[0]);
    }
    case Ct.Map: {
      const n = e7.type(new $s());
      return new nc((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Ct[r]}" (${r})`);
}
function gA(e7, t) {
  const r = t.fields.map((a) => Ft.encode(e7, a));
  pr.startFieldsVector(e7, r.length);
  const n = pr.createFieldsVector(e7, r), i = t.metadata && t.metadata.size > 0 ? pr.createCustomMetadataVector(e7, [...t.metadata].map(([a, o]) => {
    const s = e7.createString(`${a}`), c = e7.createString(`${o}`);
    return ne.startKeyValue(e7), ne.addKey(e7, s), ne.addValue(e7, c), ne.endKeyValue(e7);
  })) : -1;
  return pr.startSchema(e7), pr.addFields(e7, n), pr.addEndianness(e7, xA ? ji.Little : ji.Big), i !== -1 && pr.addCustomMetadata(e7, i), pr.endSchema(e7);
}
function bA(e7, t) {
  let r = -1, n = -1, i = -1;
  const a = t.type;
  let o = t.typeId;
  G.isDictionary(a) ? (o = a.dictionary.typeId, i = wl.visit(a, e7), n = wl.visit(a.dictionary, e7)) : n = wl.visit(a, e7);
  const s = (a.children || []).map((l) => Ft.encode(e7, l)), c = ze.createChildrenVector(e7, s), u = t.metadata && t.metadata.size > 0 ? ze.createCustomMetadataVector(e7, [...t.metadata].map(([l, f]) => {
    const h = e7.createString(`${l}`), d = e7.createString(`${f}`);
    return ne.startKeyValue(e7), ne.addKey(e7, h), ne.addValue(e7, d), ne.endKeyValue(e7);
  })) : -1;
  return t.name && (r = e7.createString(t.name)), ze.startField(e7), ze.addType(e7, n), ze.addTypeType(e7, o), ze.addChildren(e7, c), ze.addNullable(e7, !!t.nullable), r !== -1 && ze.addName(e7, r), i !== -1 && ze.addDictionary(e7, i), u !== -1 && ze.addCustomMetadata(e7, u), ze.endField(e7);
}
function _A(e7, t) {
  const r = t.nodes || [], n = t.buffers || [];
  Nr.startNodesVector(e7, r.length);
  for (const o of r.slice().reverse()) vn.encode(e7, o);
  const i = e7.endVector();
  Nr.startBuffersVector(e7, n.length);
  for (const o of n.slice().reverse()) _r.encode(e7, o);
  const a = e7.endVector();
  return Nr.startRecordBatch(e7), Nr.addLength(e7, BigInt(t.length)), Nr.addNodes(e7, i), Nr.addBuffers(e7, a), Nr.endRecordBatch(e7);
}
function wA(e7, t) {
  const r = ke.encode(e7, t.data);
  return hi.startDictionaryBatch(e7), hi.addId(e7, BigInt(t.id)), hi.addIsDelta(e7, t.isDelta), hi.addData(e7, r), hi.endDictionaryBatch(e7);
}
function SA(e7, t) {
  return Ib.createFieldNode(e7, BigInt(t.length), BigInt(t.nullCount));
}
function OA(e7, t) {
  return Tb.createBuffer(e7, BigInt(t.offset), BigInt(t.length));
}
const xA = (() => {
  const e7 = new ArrayBuffer(2);
  return new DataView(e7).setInt16(0, 256, true), new Int16Array(e7)[0] === 256;
})(), gd = (e7) => `Expected ${_t[e7]} Message in stream, but was null or length 0.`, bd = (e7) => `Header pointer of flatbuffer-encoded ${_t[e7]} Message is null or length 0.`, l_ = (e7, t) => `Expected to read ${e7} metadata bytes, but only read ${t}.`, f_ = (e7, t) => `Expected to read ${e7} bytes for message body, but only read ${t}.`;
class h_ {
  constructor(t) {
    this.source = t instanceof uc ? t : new uc(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? Wt : t;
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
    if (t != null && r.value.headerType !== t) throw new Error(gd(t));
    return r.value;
  }
  readMessageBody(t) {
    if (t <= 0) return new Uint8Array(0);
    const r = vt(this.source.read(t));
    if (r.byteLength < t) throw new Error(f_(t, r.byteLength));
    return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
  }
  readSchema(t = false) {
    const r = _t.Schema, n = this.readMessage(r), i = n == null ? void 0 : n.header();
    if (t && !i) throw new Error(bd(r));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(Su), r = t && new Ci(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const r = this.source.read(t);
    if (!r) return Wt;
    if (r.byteLength < t) throw new Error(l_(t, r.byteLength));
    return { done: false, value: ge.decode(r) };
  }
}
class AA {
  constructor(t, r) {
    this.source = t instanceof Ri ? t : bb(t) ? new lc(t, r) : new Ri(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return st(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? Wt : t;
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
      if (t != null && r.value.headerType !== t) throw new Error(gd(t));
      return r.value;
    });
  }
  readMessageBody(t) {
    return st(this, void 0, void 0, function* () {
      if (t <= 0) return new Uint8Array(0);
      const r = vt(yield this.source.read(t));
      if (r.byteLength < t) throw new Error(f_(t, r.byteLength));
      return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
    });
  }
  readSchema() {
    return st(this, arguments, void 0, function* (t = false) {
      const r = _t.Schema, n = yield this.readMessage(r), i = n == null ? void 0 : n.header();
      if (t && !i) throw new Error(bd(r));
      return i;
    });
  }
  readMetadataLength() {
    return st(this, void 0, void 0, function* () {
      const t = yield this.source.read(Su), r = t && new Ci(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return st(this, void 0, void 0, function* () {
      const r = yield this.source.read(t);
      if (!r) return Wt;
      if (r.byteLength < t) throw new Error(l_(t, r.byteLength));
      return { done: false, value: ge.decode(r) };
    });
  }
}
class PA extends h_ {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = false, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof ay ? t : new ay(t);
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
    return this._body = [], Wt;
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
    if (t != null && r.value.headerType !== t) throw new Error(gd(t));
    return r.value;
  }
  readSchema() {
    const t = _t.Schema, r = this.readMessage(t), n = r == null ? void 0 : r.header();
    if (!r || !n) throw new Error(bd(t));
    return n;
  }
}
const Su = 4, vf = "ARROW1", co = new Uint8Array(vf.length);
for (let e7 = 0; e7 < vf.length; e7 += 1) co[e7] = vf.codePointAt(e7);
function _d(e7, t = 0) {
  for (let r = -1, n = co.length; ++r < n; ) if (co[r] !== e7[t + r]) return false;
  return true;
}
const Qo = co.length, d_ = Qo + Su, TA = Qo * 2 + Su;
class Ke extends hd {
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
    return t instanceof Ke ? t : sf(t) ? MA(t) : bb(t) ? CA(t) : Gn(t) ? st(this, void 0, void 0, function* () {
      return yield Ke.from(yield t);
    }) : _b(t) || ed(t) || wb(t) || fa(t) ? NA(new Ri(t)) : DA(new uc(t));
  }
  static readAll(t) {
    return t instanceof Ke ? t.isSync() ? py(t) : yy(t) : sf(t) || ArrayBuffer.isView(t) || Ko(t) || gb(t) ? py(t) : yy(t);
  }
}
class fc extends Ke {
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
      yield yt(yield* xs(Fn(this[Symbol.iterator]())));
    });
  }
}
class hc extends Ke {
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
class p_ extends fc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class IA extends hc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class y_ {
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
    return new n_(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class dc extends y_ {
  constructor(t, r) {
    super(r), this._reader = sf(t) ? new PA(this._handle = t) : new h_(this._handle = t);
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
    return this.closed || (this.autoDestroy = v_(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = true) ? this.reset()._reader.throw(t) : Wt;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = true) ? this.reset()._reader.return(t) : Wt;
  }
  next() {
    if (this.closed) return Wt;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new vd(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class pc extends y_ {
  constructor(t, r) {
    super(r), this._reader = new AA(this._handle = t);
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
      return this.closed || (this.autoDestroy = v_(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return st(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.throw(t) : Wt;
    });
  }
  return(t) {
    return st(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = true) ? yield this.reset()._reader.return(t) : Wt;
    });
  }
  next() {
    return st(this, void 0, void 0, function* () {
      if (this.closed) return Wt;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new vd(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return st(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class m_ extends dc {
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
    super(t instanceof oy ? t : new oy(t), r);
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
    const { _handle: t } = this, r = t.size - d_, n = t.readInt32(r), i = t.readAt(r - n, n);
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
class EA extends pc {
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
    super(t instanceof lc ? t : new lc(t, n), i);
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
      const r = t.size - d_, n = yield t.readInt32(r), i = yield t.readAt(r - n, n);
      return so.decode(i);
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
class $A extends dc {
  constructor(t, r) {
    super(t, r);
  }
  _loadVectors(t, r, n) {
    return new Wx(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function v_(e7, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e7.autoDestroy;
}
function* py(e7) {
  const t = Ke.from(e7);
  try {
    if (!t.open({ autoDestroy: false }).closed) do
      yield t;
    while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function yy(e7) {
  return br(this, arguments, function* () {
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
function MA(e7) {
  return new fc(new $A(e7));
}
function DA(e7) {
  const t = e7.peek(Qo + 7 & -8);
  return t && t.byteLength >= 4 ? _d(t) ? new p_(new m_(e7.read())) : new fc(new dc(e7)) : new fc(new dc(function* () {
  }()));
}
function NA(e7) {
  return st(this, void 0, void 0, function* () {
    const t = yield e7.peek(Qo + 7 & -8);
    return t && t.byteLength >= 4 ? _d(t) ? new p_(new m_(yield e7.read())) : new hc(new pc(e7)) : new hc(new pc(function() {
      return br(this, arguments, function* () {
      });
    }()));
  });
}
function CA(e7) {
  return st(this, void 0, void 0, function* () {
    const { size: t } = yield e7.stat(), r = new lc(e7, t);
    return t >= TA && _d(yield r.readAt(0, Qo + 7 & -8)) ? new IA(new EA(r)) : new hc(new pc(r));
  });
}
class Vt extends dt {
  static assemble(...t) {
    const r = (i) => i.flatMap((a) => Array.isArray(a) ? r(a) : a instanceof Ae ? a.data.children : a.data), n = new Vt();
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
        G.isNull(r) || cr.call(this, i <= 0 ? new Uint8Array(0) : ic(t.offset, n, t.nullBitmap)), this.nodes.push(new vn(n, i));
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
  return this.buffers.push(e7), this.bufferRegions.push(new _r(this._byteLength, t)), this._byteLength += t, this;
}
function jA(e7) {
  var t;
  const { type: r, length: n, typeIds: i, valueOffsets: a } = e7;
  if (cr.call(this, i), r.mode === ye.Sparse) return gf.call(this, e7);
  if (r.mode === ye.Dense) {
    if (e7.offset <= 0) return cr.call(this, a), gf.call(this, e7);
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
function BA(e7) {
  let t;
  return e7.nullCount >= e7.length ? cr.call(this, new Uint8Array(0)) : (t = e7.values) instanceof Uint8Array ? cr.call(this, ic(e7.offset, e7.length, t)) : cr.call(this, ac(e7.values));
}
function Xr(e7) {
  return cr.call(this, e7.values.subarray(0, e7.length * e7.stride));
}
function Ou(e7) {
  const { length: t, values: r, valueOffsets: n } = e7, i = Dt(n[0]), a = Dt(n[t]), o = Math.min(a - i, r.byteLength - i);
  return cr.call(this, Ob(-i, t + 1, n)), cr.call(this, r.subarray(i, i + o)), this;
}
function wd(e7) {
  const { length: t, valueOffsets: r } = e7;
  if (r) {
    const { [0]: n, [t]: i } = r;
    return cr.call(this, Ob(-n, t + 1, r)), this.visit(e7.children[0].slice(n, i - n));
  }
  return this.visit(e7.children[0]);
}
function gf(e7) {
  return this.visitMany(e7.type.children.map((t, r) => e7.children[r]).filter(Boolean))[0];
}
Vt.prototype.visitBool = BA;
Vt.prototype.visitInt = Xr;
Vt.prototype.visitFloat = Xr;
Vt.prototype.visitUtf8 = Ou;
Vt.prototype.visitLargeUtf8 = Ou;
Vt.prototype.visitBinary = Ou;
Vt.prototype.visitLargeBinary = Ou;
Vt.prototype.visitFixedSizeBinary = Xr;
Vt.prototype.visitDate = Xr;
Vt.prototype.visitTimestamp = Xr;
Vt.prototype.visitTime = Xr;
Vt.prototype.visitDecimal = Xr;
Vt.prototype.visitList = wd;
Vt.prototype.visitStruct = gf;
Vt.prototype.visitUnion = jA;
Vt.prototype.visitInterval = Xr;
Vt.prototype.visitDuration = Xr;
Vt.prototype.visitFixedSizeList = wd;
Vt.prototype.visitMap = wd;
class g_ extends hd {
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = false, this._sink = new Ds(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Ie(t) || (t = { autoDestroy: true, writeLegacyIpcFormat: false }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : true, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : false;
  }
  toString(t = false) {
    return this._sink.toString(t);
  }
  toUint8Array(t = false) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return Gn(t) ? t.then((r) => this.writeAll(r)) : fa(t) ? Ad(this, t) : xd(this, t);
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
    return t === this._sink || t instanceof Ds ? this._sink = t : (this._sink = new Ds(), t && d1(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && p1(t) && this.toNodeStream({ objectMode: false }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = false, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!r || !mf(r, this._schema)) && (r == null ? (this._position = 0, this._schema = null) : (this._started = true, this._schema = r, this._writeSchema(r))), this;
  }
  write(t) {
    let r = null;
    if (this._sink) {
      if (t == null) return this.finish() && void 0;
      if (t instanceof me && !(r = t.schema)) return this.finish() && void 0;
      if (t instanceof Ae && !(r = t.schema)) return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (r && !mf(r, this._schema)) {
      if (this._started && this._autoDestroy) return this.close();
      this.reset(this._sink, r);
    }
    t instanceof Ae ? t instanceof vd || this._writeRecordBatch(t) : t instanceof me ? this.writeAll(t.batches) : Ko(t) && this.writeAll(t);
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
    return this._write(co);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: r, nodes: n, bufferRegions: i, buffers: a } = Vt.assemble(t), o = new ke(t.numRows, n, i), s = ge.from(o, r);
    return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(a);
  }
  _writeDictionaryBatch(t, r, n = false) {
    const { byteLength: i, nodes: a, bufferRegions: o, buffers: s } = Vt.assemble(new xt([t])), c = new ke(t.length, a, o), u = new Ir(c, r, n), l = ge.from(u, i);
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
class Sd extends g_ {
  static writeAll(t, r) {
    const n = new Sd(r);
    return Gn(t) ? t.then((i) => n.writeAll(i)) : fa(t) ? Ad(n, t) : xd(n, t);
  }
}
class Od extends g_ {
  static writeAll(t) {
    const r = new Od();
    return Gn(t) ? t.then((n) => r.writeAll(n)) : fa(t) ? Ad(r, t) : xd(r, t);
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
function xd(e7, t) {
  let r = t;
  t instanceof me && (r = t.batches, e7.reset(void 0, t.schema));
  for (const n of r) e7.write(n);
  return e7.finish();
}
function Ad(e7, t) {
  return st(this, void 0, void 0, function* () {
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
function RA(e7, t = "stream") {
  return (t === "stream" ? Sd : Od).writeAll(e7).toUint8Array(true);
}
var kA = Object.create, b_ = Object.defineProperty, LA = Object.getOwnPropertyDescriptor, FA = Object.getOwnPropertyNames, UA = Object.getPrototypeOf, zA = Object.prototype.hasOwnProperty, WA = (e7, t) => () => (t || e7((t = { exports: {} }).exports, t), t.exports), VA = (e7, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of FA(t)) !zA.call(e7, i) && i !== r && b_(e7, i, { get: () => t[i], enumerable: !(n = LA(t, i)) || n.enumerable });
  return e7;
}, qA = (e7, t, r) => (r = e7 != null ? kA(UA(e7)) : {}, VA(!e7 || !e7.__esModule ? b_(r, "default", { value: e7, enumerable: true }) : r, e7)), GA = WA((e7, t) => {
  t.exports = Worker;
}), HA = ((e7) => (e7[e7.UNDEFINED = 0] = "UNDEFINED", e7[e7.AUTOMATIC = 1] = "AUTOMATIC", e7[e7.READ_ONLY = 2] = "READ_ONLY", e7[e7.READ_WRITE = 3] = "READ_WRITE", e7))(HA || {}), KA = ((e7) => (e7[e7.IDENTIFIER = 0] = "IDENTIFIER", e7[e7.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e7[e7.STRING_CONSTANT = 2] = "STRING_CONSTANT", e7[e7.OPERATOR = 3] = "OPERATOR", e7[e7.KEYWORD = 4] = "KEYWORD", e7[e7.COMMENT = 5] = "COMMENT", e7))(KA || {}), YA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.DEBUG = 1] = "DEBUG", e7[e7.INFO = 2] = "INFO", e7[e7.WARNING = 3] = "WARNING", e7[e7.ERROR = 4] = "ERROR", e7))(YA || {}), XA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.CONNECT = 1] = "CONNECT", e7[e7.DISCONNECT = 2] = "DISCONNECT", e7[e7.OPEN = 3] = "OPEN", e7[e7.QUERY = 4] = "QUERY", e7[e7.INSTANTIATE = 5] = "INSTANTIATE", e7))(XA || {}), JA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.OK = 1] = "OK", e7[e7.ERROR = 2] = "ERROR", e7[e7.START = 3] = "START", e7[e7.RUN = 4] = "RUN", e7[e7.CAPTURE = 5] = "CAPTURE", e7))(JA || {}), QA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.WEB_WORKER = 1] = "WEB_WORKER", e7[e7.NODE_WORKER = 2] = "NODE_WORKER", e7[e7.BINDINGS = 3] = "BINDINGS", e7[e7.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e7))(QA || {}), ZA = class {
  log(e7) {
  }
}, tP = ((e7) => (e7[e7.SUCCESS = 0] = "SUCCESS", e7[e7.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", e7[e7.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", e7))(tP || {}), eP = class {
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
    let n = new __(this._bindings, this._conn, r), i = await Ke.from(n);
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
    return new rP(this._bindings, this._conn, t);
  }
  async insertArrowTable(e7, t) {
    let r = RA(e7, "stream");
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
}, __ = class {
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
}, rP = class {
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
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, t), n = new __(this.bindings, this.connectionId, r), i = await Ke.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, nP = ((e7) => (e7.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e7.CLOSE_PREPARED = "CLOSE_PREPARED", e7.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e7.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", e7.CONNECT = "CONNECT", e7.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e7.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e7.CREATE_PREPARED = "CREATE_PREPARED", e7.DISCONNECT = "DISCONNECT", e7.DROP_FILE = "DROP_FILE", e7.DROP_FILES = "DROP_FILES", e7.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e7.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e7.FLUSH_FILES = "FLUSH_FILES", e7.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e7.GET_TABLE_NAMES = "GET_TABLE_NAMES", e7.GET_VERSION = "GET_VERSION", e7.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e7.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e7.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e7.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e7.INSTANTIATE = "INSTANTIATE", e7.OPEN = "OPEN", e7.PING = "PING", e7.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e7.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e7.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e7.REGISTER_FILE_URL = "REGISTER_FILE_URL", e7.RESET = "RESET", e7.RUN_PREPARED = "RUN_PREPARED", e7.RUN_QUERY = "RUN_QUERY", e7.SEND_PREPARED = "SEND_PREPARED", e7.START_PENDING_QUERY = "START_PENDING_QUERY", e7.TOKENIZE = "TOKENIZE", e7))(nP || {}), iP = ((e7) => (e7.CONNECTION_INFO = "CONNECTION_INFO", e7.ERROR = "ERROR", e7.FEATURE_FLAGS = "FEATURE_FLAGS", e7.FILE_BUFFER = "FILE_BUFFER", e7.FILE_INFOS = "FILE_INFOS", e7.FILE_SIZE = "FILE_SIZE", e7.FILE_STATISTICS = "FILE_STATISTICS", e7.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e7.LOG = "LOG", e7.PROGRESS_UPDATE = "PROGRESS_UPDATE", e7.OK = "OK", e7.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e7.QUERY_PLAN = "QUERY_PLAN", e7.QUERY_RESULT = "QUERY_RESULT", e7.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e7.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e7.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e7.REGISTERED_FILE = "REGISTERED_FILE", e7.SCRIPT_TOKENS = "SCRIPT_TOKENS", e7.SUCCESS = "SUCCESS", e7.TABLE_NAMES = "TABLE_NAMES", e7.VERSION_STRING = "VERSION_STRING", e7))(iP || {}), gt = class {
  constructor(t, r) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = t, this.data = r, this.promise = new Promise((n, i) => {
      this.promiseResolver = n, this.promiseRejecter = i;
    });
  }
};
function js(e7) {
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
      return { sqlType: "list", valueType: js(e7.valueType) };
    case x.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: e7.byteWidth };
    case x.Null:
      return { sqlType: "null" };
    case x.Utf8:
      return { sqlType: "utf8" };
    case x.Struct:
      return { sqlType: "struct", fields: e7.children.map((t) => bf(t.name, t.type)) };
    case x.Map: {
      let t = e7;
      return { sqlType: "map", keyType: js(t.keyType), valueType: js(t.valueType) };
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
function bf(e7, t) {
  let r = js(t);
  return r.name = e7, r;
}
var aP = /'(opfs:\/\/\S*?)'/g, oP = /(opfs:\/\/\S*?)/g;
function sP(e7) {
  return e7.search(oP) > -1;
}
function cP(e7) {
  return [...e7.matchAll(aP)].map((t) => t[1]);
}
var uP = new TextEncoder(), lP = class {
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
    return new eP(this, t);
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
    let n = uP.encode(r);
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
        a.push(bf(o, s));
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
        a.push(bf(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_JSON_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  shouldOPFSFileHandling() {
    var t, r;
    return sP((t = this.config.path) != null ? t : "") ? ((r = this.config.opfs) == null ? void 0 : r.fileHandling) == "auto" : false;
  }
  async registerOPFSFileFromSQL(t) {
    let r = cP(t), n = [];
    for (let i of r) try {
      await this.registerOPFSFileName(i), n.push(i);
    } catch (a) {
      throw console.error(a), new Error("File Not found:" + i);
    }
    return n;
  }
};
function fP() {
  let e7 = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e7.decode(t));
}
fP();
var hP = ((e7) => (e7[e7.BUFFER = 0] = "BUFFER", e7[e7.NODE_FS = 1] = "NODE_FS", e7[e7.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e7[e7.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e7[e7.HTTP = 4] = "HTTP", e7[e7.S3 = 5] = "S3", e7))(hP || {}), dP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), pP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), yP = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), mP = () => (async (e7) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e7);
  } catch {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), vP = { version: "1.32.0" }, Pd = vP.version.split(".");
Pd[0];
Pd[1];
Pd[2];
var gP = () => typeof navigator > "u", Sl = null, Ol = null, xl = null, Al = null, Pl = null;
async function bP() {
  return Sl == null && (Sl = typeof BigInt64Array < "u"), Ol == null && (Ol = await pP()), xl == null && (xl = await mP()), Al == null && (Al = await yP()), Pl == null && (Pl = await dP()), { bigInt64Array: Sl, crossOriginIsolated: gP() || globalThis.crossOriginIsolated || false, wasmExceptions: Ol, wasmSIMD: Al, wasmThreads: xl, wasmBulkMemory: Pl };
}
async function _P(e7) {
  let t = await bP();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e7.coi) return { mainModule: e7.coi.mainModule, mainWorker: e7.coi.mainWorker, pthreadWorker: e7.coi.pthreadWorker };
    if (e7.eh) return { mainModule: e7.eh.mainModule, mainWorker: e7.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e7.mvp.mainModule, mainWorker: e7.mvp.mainWorker, pthreadWorker: null };
}
qA(GA());
const wP = "/assets/duckdb-mvp-BP0pRkMH.wasm", SP = "/assets/duckdb-browser-mvp.worker-C9hF7LGh.js", OP = "/assets/duckdb-eh-9ubY-jlA.wasm", xP = "/assets/duckdb-browser-eh.worker-hQa-dcAV.js", AP = { mvp: { mainModule: wP, mainWorker: SP }, eh: { mainModule: OP, mainWorker: xP } }, Bs = "mmg";
let Tl = null, Il = null, Rs = Promise.resolve(), _f = null;
async function w_() {
  return Tl || (Tl = (async () => {
    const e7 = await _P(AP), t = new Worker(e7.mainWorker, { type: "module" }), r = new ZA(), n = new lP(r, t);
    return await n.instantiate(e7.mainModule, e7.pthreadWorker), n;
  })()), Tl;
}
async function S_() {
  return Il || (Il = await (await w_()).connect()), Il;
}
async function PP(e7) {
  return (await e7.query(`SELECT 1 FROM duckdb_databases() WHERE database_name = '${Bs}' LIMIT 1`)).toArray().length > 0;
}
async function TP(e7, t) {
  if (t && _f === t) return;
  const r = await w_(), n = await S_();
  await r.registerFileBuffer(Rp, new Uint8Array(e7)), await PP(n) && await n.query(`DETACH ${Bs}`), await n.query(`ATTACH '${Rp}' AS ${Bs} (READ_ONLY)`), await n.query(`USE ${Bs}`), _f = t;
}
async function my(e7, t) {
  const r = t ?? null;
  if (!(r && _f === r)) return Rs = Rs.then(() => TP(e7, r)), Rs;
}
async function ur(e7) {
  return await Rs, (await (await S_()).query(e7)).toArray();
}
const Td = { day: "day", week: "week", month: "month", quarter: "quarter", year: "year" };
function xu(e7) {
  return e7.replace(/'/g, "''");
}
function yc(e7, t) {
  return "";
}
async function _Y() {
  return (await ur(`
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
  `)).map((t) => ({ ...t, categories: mb(t.categories) }));
}
async function wY() {
  const e7 = await ur(`SELECT method_id, skill_key, requirement_text
     FROM method_skills
     ORDER BY method_id, skill_key`), t = {};
  for (const r of e7) {
    const n = t[r.method_id] ?? [];
    n.push({ skillKey: r.skill_key, requirementText: r.requirement_text ?? null }), t[r.method_id] = n;
  }
  return t;
}
async function SY(e7) {
  const t = e7.replace(/'/g, "''"), r = await ur(`SELECT * FROM guide_economics WHERE method_id = '${t}' LIMIT 1`);
  if (!r.length) return null;
  const n = r[0], i = await ur(`SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${t}'`), a = await ur(`SELECT skill_key, requirement_text
     FROM method_skills
     WHERE method_id = '${t}'
     ORDER BY skill_key`), o = (s) => ({ itemName: s.item_name, wikiSlug: s.wiki_slug, qtyPerCompletion: s.qty_per_completion, gpPerCompletion: s.gp_per_completion ?? 0 });
  return { id: n.method_id, methodName: n.method_name, methodUrl: n.method_url, defaultKph: n.default_kph ?? 1, kphUnitName: n.completions_unit_name || "Completions per hour", assumptionText: n.assumption_text ?? "", inputTotalPk: n.input_total_pk ?? 0, inputTotalPh: n.input_total_ph ?? 0, outputTotalPk: n.output_total_pk ?? 0, outputTotalPh: n.output_total_ph ?? 0, inputs: i.filter((s) => s.io_type === "input").map(o), outputs: i.filter((s) => s.io_type === "output").map(o), skillRequirements: a.map((s) => ({ skillKey: s.skill_key, requirementText: s.requirement_text ?? null })) };
}
async function IP(e7, t, r) {
  const n = Td[t], i = xu(e7), a = yc(), o = await ur(`
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
    `), s = await ur(`
    SELECT date_trunc('${n}', s.scrape_timestamp) AS period,
           sum(pm.value) AS item_volume
    FROM snapshots s
    JOIN io_lines io ON io.method_id = s.method_id
    JOIN price_metrics pm ON pm.item_id = io.item_id
      AND pm.metric = 'volume'
      AND date_trunc('day', pm.scrape_timestamp) = date_trunc('day', s.scrape_timestamp)
    WHERE s.method_id = '${i}'
    ${yc()}
    GROUP BY 1
    ORDER BY 1
    `), c = new Map(s.map((u) => [dn(u.period), u.item_volume ?? 0]));
  return o.map((u) => {
    const l = dn(u.period);
    return { period: l, mean_profit: u.mean_profit ?? 0, median_profit: u.median_profit ?? 0, p25: u.p25 ?? 0, p75: u.p75 ?? 0, item_volume: c.get(l) ?? null };
  });
}
async function EP(e7, t, r) {
  if (!e7.length) return [];
  const n = Td[t], i = e7.map((s) => `'${xu(s)}'`).join(", "), a = yc();
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
    `)).map((s) => ({ method_id: s.method_id, method_name: s.method_name, period: dn(s.period), profit: s.profit ?? 0 }));
}
async function $P() {
  var _a2;
  return (((_a2 = (await ur("SELECT count(*)::INTEGER AS row_count FROM price_metrics"))[0]) == null ? void 0 : _a2.row_count) ?? 0) > 0;
}
async function OY(e7) {
  const t = xu(e7);
  return (await ur(`SELECT wiki_slug, io_type, item_name, qty_per_completion, item_id
     FROM io_lines
     WHERE method_id = '${t}' AND item_id IS NOT NULL
     ORDER BY io_type, item_name`)).map((n) => ({ wikiSlug: n.wiki_slug, ioType: n.io_type, itemName: n.item_name, qtyPerCompletion: n.qty_per_completion, itemId: n.item_id ?? 0 }));
}
async function xY(e7, t, r) {
  const n = Td[t], i = xu(e7), a = yc();
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
    `)).map((s) => ({ period: dn(s.period), wikiSlug: s.wiki_slug, ioType: s.io_type, itemName: s.item_name, qtyPerCompletion: s.qty_per_completion, price: s.price, volume: s.volume }));
}
function vy(e7, t) {
  return { ...e7, qtyPerHour: e7.qtyPerCompletion * t, gpPerHour: e7.gpPerCompletion * t };
}
function MP(e7, t) {
  return { kph: t, inputs: e7.inputs.map((r) => vy(r, t)), outputs: e7.outputs.map((r) => vy(r, t)), inputTotal: e7.inputTotalPk * t + e7.inputTotalPh, outputTotal: e7.outputTotalPk * t + e7.outputTotalPh, profit: (e7.outputTotalPk - e7.inputTotalPk) * t + (e7.outputTotalPh - e7.inputTotalPh) };
}
function wf(e7) {
  return `${Math.round(e7).toLocaleString("en-GB")} gp`;
}
function AY(e7) {
  const t = Math.abs(e7);
  return t >= 1e6 ? `${(e7 / 1e6).toFixed(1)}M` : t >= 1e3 ? `${Math.round(e7 / 1e3)}k` : String(Math.round(e7));
}
function PY(e7) {
  const t = Math.abs(e7);
  return t >= 100 ? Math.round(e7).toLocaleString("en-GB") : t >= 1 ? e7.toFixed(2) : t >= 0.01 ? e7.toFixed(4) : e7.toPrecision(3);
}
function Sf(e7) {
  if (!Number.isFinite(e7.qtyPerCompletion) || e7.qtyPerCompletion === 0) return null;
  const t = e7.gpPerCompletion / e7.qtyPerCompletion;
  return Number.isFinite(t) ? t : null;
}
function TY(e7) {
  const t = Sf(e7);
  return t == null ? "\u2014" : wf(t);
}
function DP(e7, t) {
  return { ...e7, ioType: t, lineKey: `${t}:${e7.wikiSlug}` };
}
function IY(e7, t, r) {
  const n = MP(e7, t);
  return [...r === "input" ? n.inputs : n.outputs].map((a) => DP(a, r)).sort((a, o) => {
    const s = Sf(a), c = Sf(o);
    return s == null && c == null ? 0 : s == null ? 1 : c == null ? -1 : c - s;
  });
}
async function NP() {
  const e7 = await fetch(Bp, { cache: "no-cache" });
  if (!e7.ok) throw new Error(`Failed to load manifest (${e7.status}) from ${Bp}`);
  return await e7.json();
}
function CP(e7, t) {
  return t ? e7.artifacts.database.sha256 !== t : true;
}
function jP(e7) {
  if (!(e7 == null ? void 0 : e7.latest_snapshot_date)) return true;
  const t = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return e7.latest_snapshot_date < t;
}
function gy(e7) {
  return e7 < 1024 ? `${e7} B` : e7 < 1024 * 1024 ? `${(e7 / 1024).toFixed(1)} KB` : `${(e7 / (1024 * 1024)).toFixed(1)} MB`;
}
function by(e7, t) {
  switch (e7) {
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
function EY({ loading: e7, error: t, manifest: r, fromCache: n, loadPhase: i, downloadProgress: a, onReload: o }) {
  if (e7) {
    const s = (a == null ? void 0 : a.total) ? Math.min(100, Math.round(a.loaded / a.total * 100)) : null;
    return H.jsxs("div", { className: "osrs-mmg__banner osrs-mmg__banner--loading", role: "status", "aria-live": "polite", children: [H.jsxs("div", { className: "osrs-mmg__load-status", children: [H.jsx("span", { children: by(i, n) }), a ? H.jsxs("span", { className: "osrs-mmg__load-bytes", children: [gy(a.loaded), a.total ? ` / ${gy(a.total)}` : "", s != null ? ` (${s}%)` : ""] }) : null] }), i === "download" || i === "open" ? H.jsx("div", { className: "osrs-mmg__progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": s ?? void 0, "aria-label": by(i, n), children: H.jsx("div", { className: s != null ? "osrs-mmg__progress-bar" : "osrs-mmg__progress-bar osrs-mmg__progress-bar--indeterminate", style: s != null ? { width: `${s}%` } : void 0 }) }) : null] });
  }
  return t ? H.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: [t, " ", H.jsx("button", { type: "button", onClick: o, children: "Retry" })] }) : !r || !jP(r) ? null : H.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--stale", children: ["Data from ", r.generated_at, r.latest_snapshot_date ? ` \xB7 snapshot ${r.latest_snapshot_date}` : "", n ? " \xB7 cached" : " \xB7 fresh download", " \xB7 ", H.jsx("button", { type: "button", onClick: o, children: "Refresh" })] });
}
function $Y({ skills: e7, compact: t = false }) {
  return e7.length === 0 ? t ? H.jsx("span", { className: "osrs-mmg__muted", children: "\u2014" }) : null : H.jsx("div", { className: t ? "osrs-mmg__skills-inline" : "osrs-mmg__skills-list", children: e7.map((r) => H.jsxs("span", { className: t ? "osrs-mmg__skill-icon" : "osrs-mmg__skill-chip", title: `${r.skillKey} ${r.requirementText}`, children: [H.jsx("img", { src: a1(r.skillKey), alt: r.skillKey, width: 20, height: 20 }), t ? H.jsx("span", { className: "osrs-mmg__skill-level", children: r.requirementText }) : H.jsxs("span", { children: [r.skillKey, " ", r.requirementText] })] }, r.skillKey)) });
}
var BP = Array.isArray, $e = BP, RP = typeof os == "object" && os && os.Object === Object && os, O_ = RP, kP = O_, LP = typeof self == "object" && self && self.Object === Object && self, FP = kP || LP || Function("return this")(), $r = FP, UP = $r, zP = UP.Symbol, Zo = zP, _y = Zo, x_ = Object.prototype, WP = x_.hasOwnProperty, VP = x_.toString, Ea = _y ? _y.toStringTag : void 0;
function qP(e7) {
  var t = WP.call(e7, Ea), r = e7[Ea];
  try {
    e7[Ea] = void 0;
    var n = true;
  } catch {
  }
  var i = VP.call(e7);
  return n && (t ? e7[Ea] = r : delete e7[Ea]), i;
}
var GP = qP, HP = Object.prototype, KP = HP.toString;
function YP(e7) {
  return KP.call(e7);
}
var XP = YP, wy = Zo, JP = GP, QP = XP, ZP = "[object Null]", tT = "[object Undefined]", Sy = wy ? wy.toStringTag : void 0;
function eT(e7) {
  return e7 == null ? e7 === void 0 ? tT : ZP : Sy && Sy in Object(e7) ? JP(e7) : QP(e7);
}
var Jr = eT;
function rT(e7) {
  return e7 != null && typeof e7 == "object";
}
var Qr = rT, nT = Jr, iT = Qr, aT = "[object Symbol]";
function oT(e7) {
  return typeof e7 == "symbol" || iT(e7) && nT(e7) == aT;
}
var da = oT, sT = $e, cT = da, uT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lT = /^\w*$/;
function fT(e7, t) {
  if (sT(e7)) return false;
  var r = typeof e7;
  return r == "number" || r == "symbol" || r == "boolean" || e7 == null || cT(e7) ? true : lT.test(e7) || !uT.test(e7) || t != null && e7 in Object(t);
}
var Id = fT;
function hT(e7) {
  var t = typeof e7;
  return e7 != null && (t == "object" || t == "function");
}
var bn = hT;
const pa = Bt(bn);
var dT = Jr, pT = bn, yT = "[object AsyncFunction]", mT = "[object Function]", vT = "[object GeneratorFunction]", gT = "[object Proxy]";
function bT(e7) {
  if (!pT(e7)) return false;
  var t = dT(e7);
  return t == mT || t == vT || t == yT || t == gT;
}
var Ed = bT;
const lt = Bt(Ed);
var _T = $r, wT = _T["__core-js_shared__"], ST = wT, El = ST, Oy = function() {
  var e7 = /[^.]+$/.exec(El && El.keys && El.keys.IE_PROTO || "");
  return e7 ? "Symbol(src)_1." + e7 : "";
}();
function OT(e7) {
  return !!Oy && Oy in e7;
}
var xT = OT, AT = Function.prototype, PT = AT.toString;
function TT(e7) {
  if (e7 != null) {
    try {
      return PT.call(e7);
    } catch {
    }
    try {
      return e7 + "";
    } catch {
    }
  }
  return "";
}
var A_ = TT, IT = Ed, ET = xT, $T = bn, MT = A_, DT = /[\\^$.*+?()[\]{}|]/g, NT = /^\[object .+?Constructor\]$/, CT = Function.prototype, jT = Object.prototype, BT = CT.toString, RT = jT.hasOwnProperty, kT = RegExp("^" + BT.call(RT).replace(DT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function LT(e7) {
  if (!$T(e7) || ET(e7)) return false;
  var t = IT(e7) ? kT : NT;
  return t.test(MT(e7));
}
var FT = LT;
function UT(e7, t) {
  return e7 == null ? void 0 : e7[t];
}
var zT = UT, WT = FT, VT = zT;
function qT(e7, t) {
  var r = VT(e7, t);
  return WT(r) ? r : void 0;
}
var ei = qT, GT = ei, HT = GT(Object, "create"), Au = HT, xy = Au;
function KT() {
  this.__data__ = xy ? xy(null) : {}, this.size = 0;
}
var YT = KT;
function XT(e7) {
  var t = this.has(e7) && delete this.__data__[e7];
  return this.size -= t ? 1 : 0, t;
}
var JT = XT, QT = Au, ZT = "__lodash_hash_undefined__", tI = Object.prototype, eI = tI.hasOwnProperty;
function rI(e7) {
  var t = this.__data__;
  if (QT) {
    var r = t[e7];
    return r === ZT ? void 0 : r;
  }
  return eI.call(t, e7) ? t[e7] : void 0;
}
var nI = rI, iI = Au, aI = Object.prototype, oI = aI.hasOwnProperty;
function sI(e7) {
  var t = this.__data__;
  return iI ? t[e7] !== void 0 : oI.call(t, e7);
}
var cI = sI, uI = Au, lI = "__lodash_hash_undefined__";
function fI(e7, t) {
  var r = this.__data__;
  return this.size += this.has(e7) ? 0 : 1, r[e7] = uI && t === void 0 ? lI : t, this;
}
var hI = fI, dI = YT, pI = JT, yI = nI, mI = cI, vI = hI;
function ya(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = dI;
ya.prototype.delete = pI;
ya.prototype.get = yI;
ya.prototype.has = mI;
ya.prototype.set = vI;
var gI = ya;
function bI() {
  this.__data__ = [], this.size = 0;
}
var _I = bI;
function wI(e7, t) {
  return e7 === t || e7 !== e7 && t !== t;
}
var $d = wI, SI = $d;
function OI(e7, t) {
  for (var r = e7.length; r--; ) if (SI(e7[r][0], t)) return r;
  return -1;
}
var Pu = OI, xI = Pu, AI = Array.prototype, PI = AI.splice;
function TI(e7) {
  var t = this.__data__, r = xI(t, e7);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : PI.call(t, r, 1), --this.size, true;
}
var II = TI, EI = Pu;
function $I(e7) {
  var t = this.__data__, r = EI(t, e7);
  return r < 0 ? void 0 : t[r][1];
}
var MI = $I, DI = Pu;
function NI(e7) {
  return DI(this.__data__, e7) > -1;
}
var CI = NI, jI = Pu;
function BI(e7, t) {
  var r = this.__data__, n = jI(r, e7);
  return n < 0 ? (++this.size, r.push([e7, t])) : r[n][1] = t, this;
}
var RI = BI, kI = _I, LI = II, FI = MI, UI = CI, zI = RI;
function ma(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
ma.prototype.clear = kI;
ma.prototype.delete = LI;
ma.prototype.get = FI;
ma.prototype.has = UI;
ma.prototype.set = zI;
var Tu = ma, WI = ei, VI = $r, qI = WI(VI, "Map"), Md = qI, Ay = gI, GI = Tu, HI = Md;
function KI() {
  this.size = 0, this.__data__ = { hash: new Ay(), map: new (HI || GI)(), string: new Ay() };
}
var YI = KI;
function XI(e7) {
  var t = typeof e7;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e7 !== "__proto__" : e7 === null;
}
var JI = XI, QI = JI;
function ZI(e7, t) {
  var r = e7.__data__;
  return QI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Iu = ZI, tE = Iu;
function eE(e7) {
  var t = tE(this, e7).delete(e7);
  return this.size -= t ? 1 : 0, t;
}
var rE = eE, nE = Iu;
function iE(e7) {
  return nE(this, e7).get(e7);
}
var aE = iE, oE = Iu;
function sE(e7) {
  return oE(this, e7).has(e7);
}
var cE = sE, uE = Iu;
function lE(e7, t) {
  var r = uE(this, e7), n = r.size;
  return r.set(e7, t), this.size += r.size == n ? 0 : 1, this;
}
var fE = lE, hE = YI, dE = rE, pE = aE, yE = cE, mE = fE;
function va(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
va.prototype.clear = hE;
va.prototype.delete = dE;
va.prototype.get = pE;
va.prototype.has = yE;
va.prototype.set = mE;
var Dd = va, P_ = Dd, vE = "Expected a function";
function Nd(e7, t) {
  if (typeof e7 != "function" || t != null && typeof t != "function") throw new TypeError(vE);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e7.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Nd.Cache || P_)(), r;
}
Nd.Cache = P_;
var T_ = Nd;
const gE = Bt(T_);
var bE = T_, _E = 500;
function wE(e7) {
  var t = bE(e7, function(n) {
    return r.size === _E && r.clear(), n;
  }), r = t.cache;
  return t;
}
var SE = wE, OE = SE, xE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, AE = /\\(\\)?/g, PE = OE(function(e7) {
  var t = [];
  return e7.charCodeAt(0) === 46 && t.push(""), e7.replace(xE, function(r, n, i, a) {
    t.push(i ? a.replace(AE, "$1") : n || r);
  }), t;
}), TE = PE;
function IE(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = Array(n); ++r < n; ) i[r] = t(e7[r], r, e7);
  return i;
}
var Cd = IE, Py = Zo, EE = Cd, $E = $e, ME = da, Ty = Py ? Py.prototype : void 0, Iy = Ty ? Ty.toString : void 0;
function I_(e7) {
  if (typeof e7 == "string") return e7;
  if ($E(e7)) return EE(e7, I_) + "";
  if (ME(e7)) return Iy ? Iy.call(e7) : "";
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var DE = I_, NE = DE;
function CE(e7) {
  return e7 == null ? "" : NE(e7);
}
var E_ = CE, jE = $e, BE = Id, RE = TE, kE = E_;
function LE(e7, t) {
  return jE(e7) ? e7 : BE(e7, t) ? [e7] : RE(kE(e7));
}
var $_ = LE, FE = da;
function UE(e7) {
  if (typeof e7 == "string" || FE(e7)) return e7;
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var Eu = UE, zE = $_, WE = Eu;
function VE(e7, t) {
  t = zE(t, e7);
  for (var r = 0, n = t.length; e7 != null && r < n; ) e7 = e7[WE(t[r++])];
  return r && r == n ? e7 : void 0;
}
var jd = VE, qE = jd;
function GE(e7, t, r) {
  var n = e7 == null ? void 0 : qE(e7, t);
  return n === void 0 ? r : n;
}
var M_ = GE;
const Ye = Bt(M_);
function HE(e7) {
  return e7 == null;
}
var KE = HE;
const ct = Bt(KE);
var YE = Jr, XE = $e, JE = Qr, QE = "[object String]";
function ZE(e7) {
  return typeof e7 == "string" || !XE(e7) && JE(e7) && YE(e7) == QE;
}
var t$ = ZE;
const Kn = Bt(t$);
var D_ = { exports: {} }, $t = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Bd = Symbol.for("react.element"), Rd = Symbol.for("react.portal"), $u = Symbol.for("react.fragment"), Mu = Symbol.for("react.strict_mode"), Du = Symbol.for("react.profiler"), Nu = Symbol.for("react.provider"), Cu = Symbol.for("react.context"), e$ = Symbol.for("react.server_context"), ju = Symbol.for("react.forward_ref"), Bu = Symbol.for("react.suspense"), Ru = Symbol.for("react.suspense_list"), ku = Symbol.for("react.memo"), Lu = Symbol.for("react.lazy"), r$ = Symbol.for("react.offscreen"), N_;
N_ = Symbol.for("react.module.reference");
function Ze(e7) {
  if (typeof e7 == "object" && e7 !== null) {
    var t = e7.$$typeof;
    switch (t) {
      case Bd:
        switch (e7 = e7.type, e7) {
          case $u:
          case Du:
          case Mu:
          case Bu:
          case Ru:
            return e7;
          default:
            switch (e7 = e7 && e7.$$typeof, e7) {
              case e$:
              case Cu:
              case ju:
              case Lu:
              case ku:
              case Nu:
                return e7;
              default:
                return t;
            }
        }
      case Rd:
        return t;
    }
  }
}
$t.ContextConsumer = Cu;
$t.ContextProvider = Nu;
$t.Element = Bd;
$t.ForwardRef = ju;
$t.Fragment = $u;
$t.Lazy = Lu;
$t.Memo = ku;
$t.Portal = Rd;
$t.Profiler = Du;
$t.StrictMode = Mu;
$t.Suspense = Bu;
$t.SuspenseList = Ru;
$t.isAsyncMode = function() {
  return false;
};
$t.isConcurrentMode = function() {
  return false;
};
$t.isContextConsumer = function(e7) {
  return Ze(e7) === Cu;
};
$t.isContextProvider = function(e7) {
  return Ze(e7) === Nu;
};
$t.isElement = function(e7) {
  return typeof e7 == "object" && e7 !== null && e7.$$typeof === Bd;
};
$t.isForwardRef = function(e7) {
  return Ze(e7) === ju;
};
$t.isFragment = function(e7) {
  return Ze(e7) === $u;
};
$t.isLazy = function(e7) {
  return Ze(e7) === Lu;
};
$t.isMemo = function(e7) {
  return Ze(e7) === ku;
};
$t.isPortal = function(e7) {
  return Ze(e7) === Rd;
};
$t.isProfiler = function(e7) {
  return Ze(e7) === Du;
};
$t.isStrictMode = function(e7) {
  return Ze(e7) === Mu;
};
$t.isSuspense = function(e7) {
  return Ze(e7) === Bu;
};
$t.isSuspenseList = function(e7) {
  return Ze(e7) === Ru;
};
$t.isValidElementType = function(e7) {
  return typeof e7 == "string" || typeof e7 == "function" || e7 === $u || e7 === Du || e7 === Mu || e7 === Bu || e7 === Ru || e7 === r$ || typeof e7 == "object" && e7 !== null && (e7.$$typeof === Lu || e7.$$typeof === ku || e7.$$typeof === Nu || e7.$$typeof === Cu || e7.$$typeof === ju || e7.$$typeof === N_ || e7.getModuleId !== void 0);
};
$t.typeOf = Ze;
D_.exports = $t;
var n$ = D_.exports, i$ = Jr, a$ = Qr, o$ = "[object Number]";
function s$(e7) {
  return typeof e7 == "number" || a$(e7) && i$(e7) == o$;
}
var C_ = s$;
const c$ = Bt(C_);
var u$ = C_;
function l$(e7) {
  return u$(e7) && e7 != +e7;
}
var f$ = l$;
const ga = Bt(f$);
var sr = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, jn = function(t) {
  return Kn(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return c$(t) && !ga(t);
}, h$ = function(t) {
  return ct(t);
}, ie = function(t) {
  return L(t) || Kn(t);
}, d$ = 0, ri = function(t) {
  var r = ++d$;
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
}, cn = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, p$ = function(t) {
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
function mc(e7, t, r) {
  return !e7 || !e7.length ? null : e7.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ye(n, t)) === r;
  });
}
var y$ = function(t) {
  if (!t || !t.length) return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++) u = t[f].cx || 0, l = t[f].cy || 0, n += u, i += l, a += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return { xmin: s, xmax: c, a: h, b: (i - h * n) / r };
}, m$ = function(t, r) {
  return L(t) && L(r) ? t - r : Kn(t) && Kn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function $i(e7, t) {
  for (var r in e7) if ({}.hasOwnProperty.call(e7, r) && (!{}.hasOwnProperty.call(t, r) || e7[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e7, n)) return false;
  return true;
}
function Of(e7) {
  "@babel/helpers - typeof";
  return Of = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Of(e7);
}
var v$ = ["viewBox", "children"], g$ = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Ey = ["points", "pathLength"], $l = { svg: v$, polygon: Ey, polyline: Ey }, kd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], vc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (B.isValidElement(t) && (n = t.props), !pa(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    kd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, b$ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, uo = function(t, r, n) {
  if (!pa(t) || Of(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    kd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = b$(o, r, n));
  }), i;
}, _$ = ["children"], w$ = ["children"];
function $y(e7, t) {
  if (e7 == null) return {};
  var r = S$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function S$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function xf(e7) {
  "@babel/helpers - typeof";
  return xf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xf(e7);
}
var My = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, Ur = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Dy = null, Ml = null, Ld = function e(t) {
  if (t === Dy && Array.isArray(Ml)) return Ml;
  var r = [];
  return B.Children.forEach(t, function(n) {
    ct(n) || (n$.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Ml = r, Dy = t, r;
};
function Te(e7, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Ur(i);
  }) : n = [Ur(t)], Ld(e7).forEach(function(i) {
    var a = Ye(i, "type.displayName") || Ye(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function je(e7, t) {
  var r = Te(e7, t);
  return r && r[0];
}
var Ny = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, O$ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], x$ = function(t) {
  return t && t.type && Kn(t.type) && O$.indexOf(t.type) >= 0;
}, j_ = function(t) {
  return t && xf(t) === "object" && "clipDot" in t;
}, A$ = function(t, r, n, i) {
  var a, o = (a = $l == null ? void 0 : $l[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !lt(t) && (i && o.includes(r) || g$.includes(r)) || n && kd.includes(r);
}, ut = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (B.isValidElement(t) && (i = t.props), !pa(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    A$((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Af = function e2(t, r) {
  if (t === r) return true;
  var n = B.Children.count(t);
  if (n !== B.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return Cy(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!Cy(a, o)) return false;
  }
  return true;
}, Cy = function(t, r) {
  if (ct(t) && ct(r)) return true;
  if (!ct(t) && !ct(r)) {
    var n = t.props || {}, i = n.children, a = $y(n, _$), o = r.props || {}, s = o.children, c = $y(o, w$);
    return i && s ? $i(a, c) && Af(i, s) : !i && !s ? $i(a, c) : false;
  }
  return false;
}, jy = function(t, r) {
  var n = [], i = {};
  return Ld(t).forEach(function(a, o) {
    if (x$(a)) n.push(a);
    else if (a) {
      var s = Ur(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = true;
      }
    }
  }), n;
}, P$ = function(t) {
  var r = t && t.type;
  return r && My[r] ? My[r] : null;
}, T$ = function(t, r) {
  return Ld(r).indexOf(t);
}, I$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Pf.apply(this, arguments);
}
function E$(e7, t) {
  if (e7 == null) return {};
  var r = $$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function $$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Tf(e7) {
  var t = e7.children, r = e7.width, n = e7.height, i = e7.viewBox, a = e7.className, o = e7.style, s = e7.title, c = e7.desc, u = E$(e7, I$), l = i || { width: r, height: n, x: 0, y: 0 }, f = mt("recharts-surface", a);
  return A.createElement("svg", Pf({}, ut(u, true, "svg"), { className: f, width: r, height: n, style: o, viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height) }), A.createElement("title", null, s), A.createElement("desc", null, c), t);
}
var M$ = ["children", "className"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, If.apply(this, arguments);
}
function D$(e7, t) {
  if (e7 == null) return {};
  var r = N$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function N$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var St = A.forwardRef(function(e7, t) {
  var r = e7.children, n = e7.className, i = D$(e7, M$), a = mt("recharts-layer", n);
  return A.createElement("g", If({ className: a }, ut(i, true), { ref: t }), r);
}), zr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function C$(e7, t, r) {
  var n = -1, i = e7.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e7[n + t];
  return a;
}
var j$ = C$, B$ = j$;
function R$(e7, t, r) {
  var n = e7.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e7 : B$(e7, t, r);
}
var k$ = R$, L$ = "\\ud800-\\udfff", F$ = "\\u0300-\\u036f", U$ = "\\ufe20-\\ufe2f", z$ = "\\u20d0-\\u20ff", W$ = F$ + U$ + z$, V$ = "\\ufe0e\\ufe0f", q$ = "\\u200d", G$ = RegExp("[" + q$ + L$ + W$ + V$ + "]");
function H$(e7) {
  return G$.test(e7);
}
var B_ = H$;
function K$(e7) {
  return e7.split("");
}
var Y$ = K$, R_ = "\\ud800-\\udfff", X$ = "\\u0300-\\u036f", J$ = "\\ufe20-\\ufe2f", Q$ = "\\u20d0-\\u20ff", Z$ = X$ + J$ + Q$, tM = "\\ufe0e\\ufe0f", eM = "[" + R_ + "]", Ef = "[" + Z$ + "]", $f = "\\ud83c[\\udffb-\\udfff]", rM = "(?:" + Ef + "|" + $f + ")", k_ = "[^" + R_ + "]", L_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", F_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", nM = "\\u200d", U_ = rM + "?", z_ = "[" + tM + "]?", iM = "(?:" + nM + "(?:" + [k_, L_, F_].join("|") + ")" + z_ + U_ + ")*", aM = z_ + U_ + iM, oM = "(?:" + [k_ + Ef + "?", Ef, L_, F_, eM].join("|") + ")", sM = RegExp($f + "(?=" + $f + ")|" + oM + aM, "g");
function cM(e7) {
  return e7.match(sM) || [];
}
var uM = cM, lM = Y$, fM = B_, hM = uM;
function dM(e7) {
  return fM(e7) ? hM(e7) : lM(e7);
}
var pM = dM, yM = k$, mM = B_, vM = pM, gM = E_;
function bM(e7) {
  return function(t) {
    t = gM(t);
    var r = mM(t) ? vM(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? yM(r, 1).join("") : t.slice(1);
    return n[e7]() + i;
  };
}
var _M = bM, wM = _M, SM = wM("toUpperCase"), OM = SM;
const Fu = Bt(OM);
function jt(e7) {
  return function() {
    return e7;
  };
}
const W_ = Math.cos, gc = Math.sin, hr = Math.sqrt, bc = Math.PI, Uu = 2 * bc, Mf = Math.PI, Df = 2 * Mf, Mn = 1e-6, xM = Df - Mn;
function V_(e7) {
  this._ += e7[0];
  for (let t = 1, r = e7.length; t < r; ++t) this._ += arguments[t] + e7[t];
}
function AM(e7) {
  let t = Math.floor(e7);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e7}`);
  if (t > 15) return V_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class PM {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? V_ : AM(t);
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
      let d = n - o, y = i - s, m = c * c + u * u, p = d * d + y * y, b = Math.sqrt(m), _ = Math.sqrt(h), S = a * Math.tan((Mf - Math.acos((m + h - p) / (2 * b * _))) / 2), w = S / _, v = S / b;
      Math.abs(w - 1) > Mn && this._append`L${t + w * l},${r + w * f}`, this._append`A${a},${a},0,0,${+(f * d > l * y)},${this._x1 = t + v * c},${this._y1 = r + v * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Mn || Math.abs(this._y1 - l) > Mn) && this._append`L${u},${l}`, n && (h < 0 && (h = h % Df + Df), h > xM ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > Mn && this._append`A${n},${n},0,${+(h >= Mf)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Fd(e7) {
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
  }, () => new PM(t);
}
function Ud(e7) {
  return typeof e7 == "object" && "length" in e7 ? e7 : Array.from(e7);
}
function q_(e7) {
  this._context = e7;
}
q_.prototype = { areaStart: function() {
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
function zu(e7) {
  return new q_(e7);
}
function G_(e7) {
  return e7[0];
}
function H_(e7) {
  return e7[1];
}
function K_(e7, t) {
  var r = jt(true), n = null, i = zu, a = null, o = Fd(s);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? G_ : jt(e7), t = typeof t == "function" ? t : t === void 0 ? H_ : jt(t);
  function s(c) {
    var u, l = (c = Ud(c)).length, f, h = false, d;
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
  var n = null, i = jt(true), a = null, o = zu, s = null, c = Fd(u);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? G_ : jt(+e7), t = typeof t == "function" ? t : jt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? H_ : jt(+r);
  function u(f) {
    var h, d, y, m = (f = Ud(f)).length, p, b = false, _, S = new Array(m), w = new Array(m);
    for (a == null && (s = o(_ = c())), h = 0; h <= m; ++h) {
      if (!(h < m && i(p = f[h], h, f)) === b) if (b = !b) d = h, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y) s.point(S[y], w[y]);
        s.lineEnd(), s.areaEnd();
      }
      b && (S[h] = +e7(p, h, f), w[h] = +t(p, h, f), s.point(n ? +n(p, h, f) : S[h], r ? +r(p, h, f) : w[h]));
    }
    if (_) return s = null, _ + "" || null;
  }
  function l() {
    return K_().defined(i).curve(o).context(a);
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
class Y_ {
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
function TM(e7) {
  return new Y_(e7, true);
}
function IM(e7) {
  return new Y_(e7, false);
}
const zd = { draw(e7, t) {
  const r = hr(t / bc);
  e7.moveTo(r, 0), e7.arc(0, 0, r, 0, Uu);
} }, EM = { draw(e7, t) {
  const r = hr(t / 5) / 2;
  e7.moveTo(-3 * r, -r), e7.lineTo(-r, -r), e7.lineTo(-r, -3 * r), e7.lineTo(r, -3 * r), e7.lineTo(r, -r), e7.lineTo(3 * r, -r), e7.lineTo(3 * r, r), e7.lineTo(r, r), e7.lineTo(r, 3 * r), e7.lineTo(-r, 3 * r), e7.lineTo(-r, r), e7.lineTo(-3 * r, r), e7.closePath();
} }, X_ = hr(1 / 3), $M = X_ * 2, MM = { draw(e7, t) {
  const r = hr(t / $M), n = r * X_;
  e7.moveTo(0, -r), e7.lineTo(n, 0), e7.lineTo(0, r), e7.lineTo(-n, 0), e7.closePath();
} }, DM = { draw(e7, t) {
  const r = hr(t), n = -r / 2;
  e7.rect(n, n, r, r);
} }, NM = 0.8908130915292852, J_ = gc(bc / 10) / gc(7 * bc / 10), CM = gc(Uu / 10) * J_, jM = -W_(Uu / 10) * J_, BM = { draw(e7, t) {
  const r = hr(t * NM), n = CM * r, i = jM * r;
  e7.moveTo(0, -r), e7.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = Uu * a / 5, s = W_(o), c = gc(o);
    e7.lineTo(c * r, -s * r), e7.lineTo(s * n - c * i, c * n + s * i);
  }
  e7.closePath();
} }, Dl = hr(3), RM = { draw(e7, t) {
  const r = -hr(t / (Dl * 3));
  e7.moveTo(0, r * 2), e7.lineTo(-Dl * r, -r), e7.lineTo(Dl * r, -r), e7.closePath();
} }, Le = -0.5, Fe = hr(3) / 2, Nf = 1 / hr(12), kM = (Nf / 2 + 1) * 3, LM = { draw(e7, t) {
  const r = hr(t / kM), n = r / 2, i = r * Nf, a = n, o = r * Nf + r, s = -a, c = o;
  e7.moveTo(n, i), e7.lineTo(a, o), e7.lineTo(s, c), e7.lineTo(Le * n - Fe * i, Fe * n + Le * i), e7.lineTo(Le * a - Fe * o, Fe * a + Le * o), e7.lineTo(Le * s - Fe * c, Fe * s + Le * c), e7.lineTo(Le * n + Fe * i, Le * i - Fe * n), e7.lineTo(Le * a + Fe * o, Le * o - Fe * a), e7.lineTo(Le * s + Fe * c, Le * c - Fe * s), e7.closePath();
} };
function FM(e7, t) {
  let r = null, n = Fd(i);
  e7 = typeof e7 == "function" ? e7 : jt(e7 || zd), t = typeof t == "function" ? t : jt(t === void 0 ? 64 : +t);
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
function _c() {
}
function wc(e7, t, r) {
  e7._context.bezierCurveTo((2 * e7._x0 + e7._x1) / 3, (2 * e7._y0 + e7._y1) / 3, (e7._x0 + 2 * e7._x1) / 3, (e7._y0 + 2 * e7._y1) / 3, (e7._x0 + 4 * e7._x1 + t) / 6, (e7._y0 + 4 * e7._y1 + r) / 6);
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
  switch (this._point) {
    case 3:
      wc(this, this._x1, this._y1);
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
      wc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function UM(e7) {
  return new Q_(e7);
}
function Z_(e7) {
  this._context = e7;
}
Z_.prototype = { areaStart: _c, areaEnd: _c, lineStart: function() {
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
      wc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function zM(e7) {
  return new Z_(e7);
}
function tw(e7) {
  this._context = e7;
}
tw.prototype = { areaStart: function() {
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
      wc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function WM(e7) {
  return new tw(e7);
}
function ew(e7) {
  this._context = e7;
}
ew.prototype = { areaStart: _c, areaEnd: _c, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e7, t) {
  e7 = +e7, t = +t, this._point ? this._context.lineTo(e7, t) : (this._point = 1, this._context.moveTo(e7, t));
} };
function VM(e7) {
  return new ew(e7);
}
function By(e7) {
  return e7 < 0 ? -1 : 1;
}
function Ry(e7, t, r) {
  var n = e7._x1 - e7._x0, i = t - e7._x1, a = (e7._y1 - e7._y0) / (n || i < 0 && -0), o = (r - e7._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (By(a) + By(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function ky(e7, t) {
  var r = e7._x1 - e7._x0;
  return r ? (3 * (e7._y1 - e7._y0) / r - t) / 2 : t;
}
function Nl(e7, t, r) {
  var n = e7._x0, i = e7._y0, a = e7._x1, o = e7._y1, s = (a - n) / 3;
  e7._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Sc(e7) {
  this._context = e7;
}
Sc.prototype = { areaStart: function() {
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
      Nl(this, this._t0, ky(this, this._t0));
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
        this._point = 3, Nl(this, ky(this, r = Ry(this, e7, t)), r);
        break;
      default:
        Nl(this, this._t0, r = Ry(this, e7, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function rw(e7) {
  this._context = new nw(e7);
}
(rw.prototype = Object.create(Sc.prototype)).point = function(e7, t) {
  Sc.prototype.point.call(this, t, e7);
};
function nw(e7) {
  this._context = e7;
}
nw.prototype = { moveTo: function(e7, t) {
  this._context.moveTo(t, e7);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e7, t) {
  this._context.lineTo(t, e7);
}, bezierCurveTo: function(e7, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e7, n, r, a, i);
} };
function qM(e7) {
  return new Sc(e7);
}
function GM(e7) {
  return new rw(e7);
}
function iw(e7) {
  this._context = e7;
}
iw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e7 = this._x, t = this._y, r = e7.length;
  if (r) if (this._line ? this._context.lineTo(e7[0], t[0]) : this._context.moveTo(e7[0], t[0]), r === 2) this._context.lineTo(e7[1], t[1]);
  else for (var n = Ly(e7), i = Ly(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e7[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e7, t) {
  this._x.push(+e7), this._y.push(+t);
} };
function Ly(e7) {
  var t, r = e7.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e7[0] + 2 * e7[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e7[t] + 2 * e7[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e7[r - 1] + e7[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e7[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e7[t + 1] - i[t + 1];
  return [i, a];
}
function HM(e7) {
  return new iw(e7);
}
function Wu(e7, t) {
  this._context = e7, this._t = t;
}
Wu.prototype = { areaStart: function() {
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
function KM(e7) {
  return new Wu(e7, 0.5);
}
function YM(e7) {
  return new Wu(e7, 0);
}
function XM(e7) {
  return new Wu(e7, 1);
}
function Li(e7, t) {
  if ((o = e7.length) > 1) for (var r = 1, n, i, a = e7[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e7[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Cf(e7) {
  for (var t = e7.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function JM(e7, t) {
  return e7[t];
}
function QM(e7) {
  const t = [];
  return t.key = e7, t;
}
function ZM() {
  var e7 = jt([]), t = Cf, r = Li, n = JM;
  function i(a) {
    var o = Array.from(e7.apply(this, arguments), QM), s, c = o.length, u = -1, l;
    for (const f of a) for (s = 0, ++u; s < c; ++s) (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = Ud(t(o)); s < c; ++s) o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e7 = typeof a == "function" ? a : jt(Array.from(a)), i) : e7;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : jt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Cf : typeof a == "function" ? a : jt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Li, i) : r;
  }, i;
}
function tD(e7, t) {
  if ((n = e7.length) > 0) {
    for (var r, n, i = 0, a = e7[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e7[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e7[r][i][1] /= o;
    }
    Li(e7, t);
  }
}
function eD(e7, t) {
  if ((i = e7.length) > 0) {
    for (var r = 0, n = e7[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e7[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Li(e7, t);
  }
}
function rD(e7, t) {
  if (!(!((o = e7.length) > 0) || !((a = (i = e7[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e7[t[s]], f = l[n][1] || 0, h = l[n - 1][1] || 0, d = (f - h) / 2, y = 0; y < s; ++y) {
          var m = e7[t[y]], p = m[n][1] || 0, b = m[n - 1][1] || 0;
          d += p - b;
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
var nD = ["type", "size", "sizeType"];
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, jf.apply(this, arguments);
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
function Uy(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fy(Object(r), true).forEach(function(n) {
      iD(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function iD(e7, t, r) {
  return t = aD(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function aD(e7) {
  var t = oD(e7, "string");
  return lo(t) == "symbol" ? t : t + "";
}
function oD(e7, t) {
  if (lo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function sD(e7, t) {
  if (e7 == null) return {};
  var r = cD(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function cD(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var aw = { symbolCircle: zd, symbolCross: EM, symbolDiamond: MM, symbolSquare: DM, symbolStar: BM, symbolTriangle: RM, symbolWye: LM }, uD = Math.PI / 180, lD = function(t) {
  var r = "symbol".concat(Fu(t));
  return aw[r] || zd;
}, fD = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * uD;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, hD = function(t, r) {
  aw["symbol".concat(Fu(t))] = r;
}, Vu = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = sD(t, nD), u = Uy(Uy({}, c), {}, { type: n, size: a, sizeType: s }), l = function() {
    var p = lD(n), b = FM().type(p).size(fD(a, s, n));
    return b();
  }, f = u.className, h = u.cx, d = u.cy, y = ut(u, true);
  return h === +h && d === +d && a === +a ? A.createElement("path", jf({}, y, { className: mt("recharts-symbols", f), transform: "translate(".concat(h, ", ").concat(d, ")"), d: l() })) : null;
};
Vu.registerSymbol = hD;
function Fi(e7) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e7);
}
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Bf.apply(this, arguments);
}
function zy(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dD(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zy(Object(r), true).forEach(function(n) {
      fo(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : zy(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function pD(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function yD(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, sw(n.key), n);
  }
}
function mD(e7, t, r) {
  return t && yD(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function vD(e7, t, r) {
  return t = Oc(t), gD(e7, ow() ? Reflect.construct(t, r || [], Oc(e7).constructor) : t.apply(e7, r));
}
function gD(e7, t) {
  if (t && (Fi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return bD(e7);
}
function bD(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function ow() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ow = function() {
    return !!e7;
  })();
}
function Oc(e7) {
  return Oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oc(e7);
}
function _D(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Rf(e7, t);
}
function Rf(e7, t) {
  return Rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rf(e7, t);
}
function fo(e7, t, r) {
  return t = sw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function sw(e7) {
  var t = wD(e7, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function wD(e7, t) {
  if (Fi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Ue = 32, Wd = function(e7) {
  function t() {
    return pD(this, t), vD(this, t, arguments);
  }
  return _D(t, e7), mD(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Ue / 2, o = Ue / 6, s = Ue / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return A.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Ue, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return A.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ue, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return A.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"), className: "recharts-legend-icon" });
    if (A.isValidElement(n.legendIcon)) {
      var u = dD({}, n);
      return delete u.legendIcon, A.cloneElement(n.legendIcon, u);
    }
    return A.createElement(Vu, { fill: c, cx: a, cy: a, size: Ue, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = { x: 0, y: 0, width: Ue, height: Ue }, f = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(d, y) {
      var m = d.formatter || c, p = mt(fo(fo({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", d.inactive));
      if (d.type === "none") return null;
      var b = lt(d.value) ? null : d.value;
      zr(!lt(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var _ = d.inactive ? u : d.color;
      return A.createElement("li", Bf({ className: p, style: f, key: "legend-item-".concat(y) }, uo(n.props, d, y)), A.createElement(Tf, { width: o, height: o, viewBox: l, style: h }, n.renderIcon(d)), A.createElement("span", { className: "recharts-legend-item-text", style: { color: _ } }, m ? m(b, d, y) : b));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return A.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(B.PureComponent);
fo(Wd, "displayName", "Legend");
fo(Wd, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var SD = Tu;
function OD() {
  this.__data__ = new SD(), this.size = 0;
}
var xD = OD;
function AD(e7) {
  var t = this.__data__, r = t.delete(e7);
  return this.size = t.size, r;
}
var PD = AD;
function TD(e7) {
  return this.__data__.get(e7);
}
var ID = TD;
function ED(e7) {
  return this.__data__.has(e7);
}
var $D = ED, MD = Tu, DD = Md, ND = Dd, CD = 200;
function jD(e7, t) {
  var r = this.__data__;
  if (r instanceof MD) {
    var n = r.__data__;
    if (!DD || n.length < CD - 1) return n.push([e7, t]), this.size = ++r.size, this;
    r = this.__data__ = new ND(n);
  }
  return r.set(e7, t), this.size = r.size, this;
}
var BD = jD, RD = Tu, kD = xD, LD = PD, FD = ID, UD = $D, zD = BD;
function ba(e7) {
  var t = this.__data__ = new RD(e7);
  this.size = t.size;
}
ba.prototype.clear = kD;
ba.prototype.delete = LD;
ba.prototype.get = FD;
ba.prototype.has = UD;
ba.prototype.set = zD;
var cw = ba, WD = "__lodash_hash_undefined__";
function VD(e7) {
  return this.__data__.set(e7, WD), this;
}
var qD = VD;
function GD(e7) {
  return this.__data__.has(e7);
}
var HD = GD, KD = Dd, YD = qD, XD = HD;
function xc(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.__data__ = new KD(); ++t < r; ) this.add(e7[t]);
}
xc.prototype.add = xc.prototype.push = YD;
xc.prototype.has = XD;
var uw = xc;
function JD(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (t(e7[r], r, e7)) return true;
  return false;
}
var lw = JD;
function QD(e7, t) {
  return e7.has(t);
}
var fw = QD, ZD = uw, tN = lw, eN = fw, rN = 1, nN = 2;
function iN(e7, t, r, n, i, a) {
  var o = r & rN, s = e7.length, c = t.length;
  if (s != c && !(o && c > s)) return false;
  var u = a.get(e7), l = a.get(t);
  if (u && l) return u == t && l == e7;
  var f = -1, h = true, d = r & nN ? new ZD() : void 0;
  for (a.set(e7, t), a.set(t, e7); ++f < s; ) {
    var y = e7[f], m = t[f];
    if (n) var p = o ? n(m, y, f, t, e7, a) : n(y, m, f, e7, t, a);
    if (p !== void 0) {
      if (p) continue;
      h = false;
      break;
    }
    if (d) {
      if (!tN(t, function(b, _) {
        if (!eN(d, _) && (y === b || i(y, b, r, n, a))) return d.push(_);
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
var hw = iN, aN = $r, oN = aN.Uint8Array, sN = oN;
function cN(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var uN = cN;
function lN(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Vd = lN, Wy = Zo, Vy = sN, fN = $d, hN = hw, dN = uN, pN = Vd, yN = 1, mN = 2, vN = "[object Boolean]", gN = "[object Date]", bN = "[object Error]", _N = "[object Map]", wN = "[object Number]", SN = "[object RegExp]", ON = "[object Set]", xN = "[object String]", AN = "[object Symbol]", PN = "[object ArrayBuffer]", TN = "[object DataView]", qy = Wy ? Wy.prototype : void 0, Cl = qy ? qy.valueOf : void 0;
function IN(e7, t, r, n, i, a, o) {
  switch (r) {
    case TN:
      if (e7.byteLength != t.byteLength || e7.byteOffset != t.byteOffset) return false;
      e7 = e7.buffer, t = t.buffer;
    case PN:
      return !(e7.byteLength != t.byteLength || !a(new Vy(e7), new Vy(t)));
    case vN:
    case gN:
    case wN:
      return fN(+e7, +t);
    case bN:
      return e7.name == t.name && e7.message == t.message;
    case SN:
    case xN:
      return e7 == t + "";
    case _N:
      var s = dN;
    case ON:
      var c = n & yN;
      if (s || (s = pN), e7.size != t.size && !c) return false;
      var u = o.get(e7);
      if (u) return u == t;
      n |= mN, o.set(e7, t);
      var l = hN(s(e7), s(t), n, i, a, o);
      return o.delete(e7), l;
    case AN:
      if (Cl) return Cl.call(e7) == Cl.call(t);
  }
  return false;
}
var EN = IN;
function $N(e7, t) {
  for (var r = -1, n = t.length, i = e7.length; ++r < n; ) e7[i + r] = t[r];
  return e7;
}
var dw = $N, MN = dw, DN = $e;
function NN(e7, t, r) {
  var n = t(e7);
  return DN(e7) ? n : MN(n, r(e7));
}
var CN = NN;
function jN(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = 0, a = []; ++r < n; ) {
    var o = e7[r];
    t(o, r, e7) && (a[i++] = o);
  }
  return a;
}
var BN = jN;
function RN() {
  return [];
}
var kN = RN, LN = BN, FN = kN, UN = Object.prototype, zN = UN.propertyIsEnumerable, Gy = Object.getOwnPropertySymbols, WN = Gy ? function(e7) {
  return e7 == null ? [] : (e7 = Object(e7), LN(Gy(e7), function(t) {
    return zN.call(e7, t);
  }));
} : FN, VN = WN;
function qN(e7, t) {
  for (var r = -1, n = Array(e7); ++r < e7; ) n[r] = t(r);
  return n;
}
var GN = qN, HN = Jr, KN = Qr, YN = "[object Arguments]";
function XN(e7) {
  return KN(e7) && HN(e7) == YN;
}
var JN = XN, Hy = JN, QN = Qr, pw = Object.prototype, ZN = pw.hasOwnProperty, tC = pw.propertyIsEnumerable, eC = Hy(/* @__PURE__ */ function() {
  return arguments;
}()) ? Hy : function(e7) {
  return QN(e7) && ZN.call(e7, "callee") && !tC.call(e7, "callee");
}, qd = eC, Ac = { exports: {} };
function rC() {
  return false;
}
var nC = rC;
Ac.exports;
(function(e7, t) {
  var r = $r, n = nC, i = t && !t.nodeType && t, a = i && true && e7 && !e7.nodeType && e7, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e7.exports = u;
})(Ac, Ac.exports);
var yw = Ac.exports, iC = 9007199254740991, aC = /^(?:0|[1-9]\d*)$/;
function oC(e7, t) {
  var r = typeof e7;
  return t = t ?? iC, !!t && (r == "number" || r != "symbol" && aC.test(e7)) && e7 > -1 && e7 % 1 == 0 && e7 < t;
}
var Gd = oC, sC = 9007199254740991;
function cC(e7) {
  return typeof e7 == "number" && e7 > -1 && e7 % 1 == 0 && e7 <= sC;
}
var Hd = cC, uC = Jr, lC = Hd, fC = Qr, hC = "[object Arguments]", dC = "[object Array]", pC = "[object Boolean]", yC = "[object Date]", mC = "[object Error]", vC = "[object Function]", gC = "[object Map]", bC = "[object Number]", _C = "[object Object]", wC = "[object RegExp]", SC = "[object Set]", OC = "[object String]", xC = "[object WeakMap]", AC = "[object ArrayBuffer]", PC = "[object DataView]", TC = "[object Float32Array]", IC = "[object Float64Array]", EC = "[object Int8Array]", $C = "[object Int16Array]", MC = "[object Int32Array]", DC = "[object Uint8Array]", NC = "[object Uint8ClampedArray]", CC = "[object Uint16Array]", jC = "[object Uint32Array]", kt = {};
kt[TC] = kt[IC] = kt[EC] = kt[$C] = kt[MC] = kt[DC] = kt[NC] = kt[CC] = kt[jC] = true;
kt[hC] = kt[dC] = kt[AC] = kt[pC] = kt[PC] = kt[yC] = kt[mC] = kt[vC] = kt[gC] = kt[bC] = kt[_C] = kt[wC] = kt[SC] = kt[OC] = kt[xC] = false;
function BC(e7) {
  return fC(e7) && lC(e7.length) && !!kt[uC(e7)];
}
var RC = BC;
function kC(e7) {
  return function(t) {
    return e7(t);
  };
}
var mw = kC, Pc = { exports: {} };
Pc.exports;
(function(e7, t) {
  var r = O_, n = t && !t.nodeType && t, i = n && true && e7 && !e7.nodeType && e7, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e7.exports = s;
})(Pc, Pc.exports);
var LC = Pc.exports, FC = RC, UC = mw, Ky = LC, Yy = Ky && Ky.isTypedArray, zC = Yy ? UC(Yy) : FC, vw = zC, WC = GN, VC = qd, qC = $e, GC = yw, HC = Gd, KC = vw, YC = Object.prototype, XC = YC.hasOwnProperty;
function JC(e7, t) {
  var r = qC(e7), n = !r && VC(e7), i = !r && !n && GC(e7), a = !r && !n && !i && KC(e7), o = r || n || i || a, s = o ? WC(e7.length, String) : [], c = s.length;
  for (var u in e7) (t || XC.call(e7, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || HC(u, c))) && s.push(u);
  return s;
}
var QC = JC, ZC = Object.prototype;
function tj(e7) {
  var t = e7 && e7.constructor, r = typeof t == "function" && t.prototype || ZC;
  return e7 === r;
}
var ej = tj;
function rj(e7, t) {
  return function(r) {
    return e7(t(r));
  };
}
var gw = rj, nj = gw, ij = nj(Object.keys, Object), aj = ij, oj = ej, sj = aj, cj = Object.prototype, uj = cj.hasOwnProperty;
function lj(e7) {
  if (!oj(e7)) return sj(e7);
  var t = [];
  for (var r in Object(e7)) uj.call(e7, r) && r != "constructor" && t.push(r);
  return t;
}
var fj = lj, hj = Ed, dj = Hd;
function pj(e7) {
  return e7 != null && dj(e7.length) && !hj(e7);
}
var ts = pj, yj = QC, mj = fj, vj = ts;
function gj(e7) {
  return vj(e7) ? yj(e7) : mj(e7);
}
var qu = gj, bj = CN, _j = VN, wj = qu;
function Sj(e7) {
  return bj(e7, wj, _j);
}
var Oj = Sj, Xy = Oj, xj = 1, Aj = Object.prototype, Pj = Aj.hasOwnProperty;
function Tj(e7, t, r, n, i, a) {
  var o = r & xj, s = Xy(e7), c = s.length, u = Xy(t), l = u.length;
  if (c != l && !o) return false;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in t : Pj.call(t, h))) return false;
  }
  var d = a.get(e7), y = a.get(t);
  if (d && y) return d == t && y == e7;
  var m = true;
  a.set(e7, t), a.set(t, e7);
  for (var p = o; ++f < c; ) {
    h = s[f];
    var b = e7[h], _ = t[h];
    if (n) var S = o ? n(_, b, h, t, e7, a) : n(b, _, h, e7, t, a);
    if (!(S === void 0 ? b === _ || i(b, _, r, n, a) : S)) {
      m = false;
      break;
    }
    p || (p = h == "constructor");
  }
  if (m && !p) {
    var w = e7.constructor, v = t.constructor;
    w != v && "constructor" in e7 && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof v == "function" && v instanceof v) && (m = false);
  }
  return a.delete(e7), a.delete(t), m;
}
var Ij = Tj, Ej = ei, $j = $r, Mj = Ej($j, "DataView"), Dj = Mj, Nj = ei, Cj = $r, jj = Nj(Cj, "Promise"), Bj = jj, Rj = ei, kj = $r, Lj = Rj(kj, "Set"), bw = Lj, Fj = ei, Uj = $r, zj = Fj(Uj, "WeakMap"), Wj = zj, kf = Dj, Lf = Md, Ff = Bj, Uf = bw, zf = Wj, _w = Jr, _a = A_, Jy = "[object Map]", Vj = "[object Object]", Qy = "[object Promise]", Zy = "[object Set]", tm = "[object WeakMap]", em = "[object DataView]", qj = _a(kf), Gj = _a(Lf), Hj = _a(Ff), Kj = _a(Uf), Yj = _a(zf), Dn = _w;
(kf && Dn(new kf(new ArrayBuffer(1))) != em || Lf && Dn(new Lf()) != Jy || Ff && Dn(Ff.resolve()) != Qy || Uf && Dn(new Uf()) != Zy || zf && Dn(new zf()) != tm) && (Dn = function(e7) {
  var t = _w(e7), r = t == Vj ? e7.constructor : void 0, n = r ? _a(r) : "";
  if (n) switch (n) {
    case qj:
      return em;
    case Gj:
      return Jy;
    case Hj:
      return Qy;
    case Kj:
      return Zy;
    case Yj:
      return tm;
  }
  return t;
});
var Xj = Dn, jl = cw, Jj = hw, Qj = EN, Zj = Ij, rm = Xj, nm = $e, im = yw, tB = vw, eB = 1, am = "[object Arguments]", om = "[object Array]", fs = "[object Object]", rB = Object.prototype, sm = rB.hasOwnProperty;
function nB(e7, t, r, n, i, a) {
  var o = nm(e7), s = nm(t), c = o ? om : rm(e7), u = s ? om : rm(t);
  c = c == am ? fs : c, u = u == am ? fs : u;
  var l = c == fs, f = u == fs, h = c == u;
  if (h && im(e7)) {
    if (!im(t)) return false;
    o = true, l = false;
  }
  if (h && !l) return a || (a = new jl()), o || tB(e7) ? Jj(e7, t, r, n, i, a) : Qj(e7, t, c, r, n, i, a);
  if (!(r & eB)) {
    var d = l && sm.call(e7, "__wrapped__"), y = f && sm.call(t, "__wrapped__");
    if (d || y) {
      var m = d ? e7.value() : e7, p = y ? t.value() : t;
      return a || (a = new jl()), i(m, p, r, n, a);
    }
  }
  return h ? (a || (a = new jl()), Zj(e7, t, r, n, i, a)) : false;
}
var iB = nB, aB = iB, cm = Qr;
function ww(e7, t, r, n, i) {
  return e7 === t ? true : e7 == null || t == null || !cm(e7) && !cm(t) ? e7 !== e7 && t !== t : aB(e7, t, r, n, ww, i);
}
var Kd = ww, oB = cw, sB = Kd, cB = 1, uB = 2;
function lB(e7, t, r, n) {
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
      var f = new oB();
      if (n) var h = n(u, l, c, e7, t, f);
      if (!(h === void 0 ? sB(l, u, cB | uB, n, f) : h)) return false;
    }
  }
  return true;
}
var fB = lB, hB = bn;
function dB(e7) {
  return e7 === e7 && !hB(e7);
}
var Sw = dB, pB = Sw, yB = qu;
function mB(e7) {
  for (var t = yB(e7), r = t.length; r--; ) {
    var n = t[r], i = e7[n];
    t[r] = [n, i, pB(i)];
  }
  return t;
}
var vB = mB;
function gB(e7, t) {
  return function(r) {
    return r == null ? false : r[e7] === t && (t !== void 0 || e7 in Object(r));
  };
}
var Ow = gB, bB = fB, _B = vB, wB = Ow;
function SB(e7) {
  var t = _B(e7);
  return t.length == 1 && t[0][2] ? wB(t[0][0], t[0][1]) : function(r) {
    return r === e7 || bB(r, e7, t);
  };
}
var OB = SB;
function xB(e7, t) {
  return e7 != null && t in Object(e7);
}
var AB = xB, PB = $_, TB = qd, IB = $e, EB = Gd, $B = Hd, MB = Eu;
function DB(e7, t, r) {
  t = PB(t, e7);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = MB(t[n]);
    if (!(a = e7 != null && r(e7, o))) break;
    e7 = e7[o];
  }
  return a || ++n != i ? a : (i = e7 == null ? 0 : e7.length, !!i && $B(i) && EB(o, i) && (IB(e7) || TB(e7)));
}
var NB = DB, CB = AB, jB = NB;
function BB(e7, t) {
  return e7 != null && jB(e7, t, CB);
}
var RB = BB, kB = Kd, LB = M_, FB = RB, UB = Id, zB = Sw, WB = Ow, VB = Eu, qB = 1, GB = 2;
function HB(e7, t) {
  return UB(e7) && zB(t) ? WB(VB(e7), t) : function(r) {
    var n = LB(r, e7);
    return n === void 0 && n === t ? FB(r, e7) : kB(t, n, qB | GB);
  };
}
var KB = HB;
function YB(e7) {
  return e7;
}
var wa = YB;
function XB(e7) {
  return function(t) {
    return t == null ? void 0 : t[e7];
  };
}
var JB = XB, QB = jd;
function ZB(e7) {
  return function(t) {
    return QB(t, e7);
  };
}
var t2 = ZB, e22 = JB, r2 = t2, n2 = Id, i2 = Eu;
function a2(e7) {
  return n2(e7) ? e22(i2(e7)) : r2(e7);
}
var o2 = a2, s2 = OB, c2 = KB, u2 = wa, l2 = $e, f2 = o2;
function h2(e7) {
  return typeof e7 == "function" ? e7 : e7 == null ? u2 : typeof e7 == "object" ? l2(e7) ? c2(e7[0], e7[1]) : s2(e7) : f2(e7);
}
var _n = h2;
function d2(e7, t, r, n) {
  for (var i = e7.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e7[a], a, e7)) return a;
  return -1;
}
var xw = d2;
function p2(e7) {
  return e7 !== e7;
}
var y2 = p2;
function m2(e7, t, r) {
  for (var n = r - 1, i = e7.length; ++n < i; ) if (e7[n] === t) return n;
  return -1;
}
var v2 = m2, g2 = xw, b2 = y2, _2 = v2;
function w2(e7, t, r) {
  return t === t ? _2(e7, t, r) : g2(e7, b2, r);
}
var S2 = w2, O2 = S2;
function x2(e7, t) {
  var r = e7 == null ? 0 : e7.length;
  return !!r && O2(e7, t, 0) > -1;
}
var A2 = x2;
function P2(e7, t, r) {
  for (var n = -1, i = e7 == null ? 0 : e7.length; ++n < i; ) if (r(t, e7[n])) return true;
  return false;
}
var T2 = P2;
function I2() {
}
var E2 = I2, Bl = bw, $2 = E2, M2 = Vd, D2 = 1 / 0, N2 = Bl && 1 / M2(new Bl([, -0]))[1] == D2 ? function(e7) {
  return new Bl(e7);
} : $2, C2 = N2, j2 = uw, B2 = A2, R2 = T2, k2 = fw, L2 = C2, F2 = Vd, U2 = 200;
function z2(e7, t, r) {
  var n = -1, i = B2, a = e7.length, o = true, s = [], c = s;
  if (r) o = false, i = R2;
  else if (a >= U2) {
    var u = t ? null : L2(e7);
    if (u) return F2(u);
    o = false, i = k2, c = new j2();
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
var W2 = z2, V2 = _n, q2 = W2;
function G2(e7, t) {
  return e7 && e7.length ? q2(e7, V2(t)) : [];
}
var H2 = G2;
const um = Bt(H2);
function Aw(e7, t, r) {
  return t === true ? um(e7, r) : lt(t) ? um(e7, t) : e7;
}
function Ui(e7) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e7);
}
var K2 = ["ref"];
function lm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mr(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lm(Object(r), true).forEach(function(n) {
      Gu(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Y2(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function fm(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Tw(n.key), n);
  }
}
function X2(e7, t, r) {
  return t && fm(e7.prototype, t), r && fm(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function J2(e7, t, r) {
  return t = Tc(t), Q2(e7, Pw() ? Reflect.construct(t, r || [], Tc(e7).constructor) : t.apply(e7, r));
}
function Q2(e7, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Z2(e7);
}
function Z2(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function Pw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pw = function() {
    return !!e7;
  })();
}
function Tc(e7) {
  return Tc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tc(e7);
}
function tR(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Wf(e7, t);
}
function Wf(e7, t) {
  return Wf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wf(e7, t);
}
function Gu(e7, t, r) {
  return t = Tw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Tw(e7) {
  var t = eR(e7, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function eR(e7, t) {
  if (Ui(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function rR(e7, t) {
  if (e7 == null) return {};
  var r = nR(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function nR(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function iR(e7) {
  return e7.value;
}
function aR(e7, t) {
  if (A.isValidElement(e7)) return A.cloneElement(e7, t);
  if (typeof e7 == "function") return A.createElement(e7, t);
  t.ref;
  var r = rR(t, K2);
  return A.createElement(Wd, r);
}
var hm = 1, Un = function(e7) {
  function t() {
    var r;
    Y2(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = J2(this, t, [].concat(i)), Gu(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return tR(t, e7), X2(t, [{ key: "componentDidMount", value: function() {
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
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > hm || Math.abs(i.height - this.lastBoundingBox.height) > hm) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
    } }, aR(a, Mr(Mr({}, this.props), {}, { payload: Aw(l, u, iR) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = Mr(Mr({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && L(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(B.PureComponent);
Gu(Un, "displayName", "Legend");
Gu(Un, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var dm = Zo, oR = qd, sR = $e, pm = dm ? dm.isConcatSpreadable : void 0;
function cR(e7) {
  return sR(e7) || oR(e7) || !!(pm && e7 && e7[pm]);
}
var uR = cR, lR = dw, fR = uR;
function Iw(e7, t, r, n, i) {
  var a = -1, o = e7.length;
  for (r || (r = fR), i || (i = []); ++a < o; ) {
    var s = e7[a];
    t > 0 && r(s) ? t > 1 ? Iw(s, t - 1, r, n, i) : lR(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var Ew = Iw;
function hR(e7) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e7 ? s : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var dR = hR, pR = dR, yR = pR(), mR = yR, vR = mR, gR = qu;
function bR(e7, t) {
  return e7 && vR(e7, t, gR);
}
var $w = bR, _R = ts;
function wR(e7, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!_R(r)) return e7(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var SR = wR, OR = $w, xR = SR, AR = xR(OR), Yd = AR, PR = Yd, TR = ts;
function IR(e7, t) {
  var r = -1, n = TR(e7) ? Array(e7.length) : [];
  return PR(e7, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Mw = IR;
function ER(e7, t) {
  var r = e7.length;
  for (e7.sort(t); r--; ) e7[r] = e7[r].value;
  return e7;
}
var $R = ER, ym = da;
function MR(e7, t) {
  if (e7 !== t) {
    var r = e7 !== void 0, n = e7 === null, i = e7 === e7, a = ym(e7), o = t !== void 0, s = t === null, c = t === t, u = ym(t);
    if (!s && !u && !a && e7 > t || a && o && c && !s && !u || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !u && e7 < t || u && r && i && !n && !a || s && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var DR = MR, NR = DR;
function CR(e7, t, r) {
  for (var n = -1, i = e7.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = NR(i[n], a[n]);
    if (c) {
      if (n >= s) return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e7.index - t.index;
}
var jR = CR, Rl = Cd, BR = jd, RR = _n, kR = Mw, LR = $R, FR = mw, UR = jR, zR = wa, WR = $e;
function VR(e7, t, r) {
  t.length ? t = Rl(t, function(a) {
    return WR(a) ? function(o) {
      return BR(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [zR];
  var n = -1;
  t = Rl(t, FR(RR));
  var i = kR(e7, function(a, o, s) {
    var c = Rl(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return LR(i, function(a, o) {
    return UR(a, o, r);
  });
}
var qR = VR;
function GR(e7, t, r) {
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
var HR = GR, KR = HR, mm = Math.max;
function YR(e7, t, r) {
  return t = mm(t === void 0 ? e7.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = mm(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), KR(e7, this, s);
  };
}
var XR = YR;
function JR(e7) {
  return function() {
    return e7;
  };
}
var QR = JR, ZR = ei, tk = function() {
  try {
    var e7 = ZR(Object, "defineProperty");
    return e7({}, "", {}), e7;
  } catch {
  }
}(), Dw = tk, ek = QR, vm = Dw, rk = wa, nk = vm ? function(e7, t) {
  return vm(e7, "toString", { configurable: true, enumerable: false, value: ek(t), writable: true });
} : rk, ik = nk, ak = 800, ok = 16, sk = Date.now;
function ck(e7) {
  var t = 0, r = 0;
  return function() {
    var n = sk(), i = ok - (n - r);
    if (r = n, i > 0) {
      if (++t >= ak) return arguments[0];
    } else t = 0;
    return e7.apply(void 0, arguments);
  };
}
var uk = ck, lk = ik, fk = uk, hk = fk(lk), dk = hk, pk = wa, yk = XR, mk = dk;
function vk(e7, t) {
  return mk(yk(e7, t, pk), e7 + "");
}
var gk = vk, bk = $d, _k = ts, wk = Gd, Sk = bn;
function Ok(e7, t, r) {
  if (!Sk(r)) return false;
  var n = typeof t;
  return (n == "number" ? _k(r) && wk(t, r.length) : n == "string" && t in r) ? bk(r[t], e7) : false;
}
var Hu = Ok, xk = Ew, Ak = qR, Pk = gk, gm = Hu, Tk = Pk(function(e7, t) {
  if (e7 == null) return [];
  var r = t.length;
  return r > 1 && gm(e7, t[0], t[1]) ? t = [] : r > 2 && gm(t[0], t[1], t[2]) && (t = [t[0]]), Ak(e7, xk(t, 1), []);
}), Ik = Tk;
const Xd = Bt(Ik);
function ho(e7) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e7);
}
function Vf() {
  return Vf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Vf.apply(this, arguments);
}
function Ek(e7, t) {
  return Nk(e7) || Dk(e7, t) || Mk(e7, t) || $k();
}
function $k() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mk(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return bm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bm(e7, t);
  }
}
function bm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Dk(e7, t) {
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
function Nk(e7) {
  if (Array.isArray(e7)) return e7;
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
function kl(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), true).forEach(function(n) {
      Ck(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ck(e7, t, r) {
  return t = jk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function jk(e7) {
  var t = Bk(e7, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function Bk(e7, t) {
  if (ho(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Rk(e7) {
  return Array.isArray(e7) && ie(e7[0]) && ie(e7[1]) ? e7.join(" ~ ") : e7;
}
var kk = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, b = t.accessibilityLayer, _ = b === void 0 ? false : b, S = function() {
    if (l && l.length) {
      var I = { padding: 0, margin: 0 }, j = (h ? Xd(l, h) : l).map(function(N, M) {
        if (N.type === "none") return null;
        var C = kl({ display: "block", paddingTop: 4, paddingBottom: 4, color: N.color || "#000" }, s), R = N.formatter || f || Rk, F = N.value, U = N.name, q = F, nt = U;
        if (R && q != null && nt != null) {
          var W = R(F, U, N, M, l);
          if (Array.isArray(W)) {
            var at = Ek(W, 2);
            q = at[0], nt = at[1];
          } else q = W;
        }
        return A.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: C }, ie(nt) ? A.createElement("span", { className: "recharts-tooltip-item-name" }, nt) : null, ie(nt) ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, A.createElement("span", { className: "recharts-tooltip-item-value" }, q), A.createElement("span", { className: "recharts-tooltip-item-unit" }, N.unit || ""));
      });
      return A.createElement("ul", { className: "recharts-tooltip-item-list", style: I }, j);
    }
    return null;
  }, w = kl({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), v = kl({ margin: 0 }, u), g = !ct(m), O = g ? m : "", P = mt("recharts-default-tooltip", d), T = mt("recharts-tooltip-label", y);
  g && p && l !== void 0 && l !== null && (O = p(m, l));
  var $ = _ ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement("div", Vf({ className: P, style: w }, $), A.createElement("p", { className: T, style: v }, A.isValidElement(O) ? O : "".concat(O)), S());
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
  return t = Lk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Lk(e7) {
  var t = Fk(e7, "string");
  return po(t) == "symbol" ? t : t + "";
}
function Fk(e7, t) {
  if (po(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var $a = "recharts-tooltip-wrapper", Uk = { visibility: "hidden" };
function zk(e7) {
  var t = e7.coordinate, r = e7.translateX, n = e7.translateY;
  return mt($a, hs(hs(hs(hs({}, "".concat($a, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat($a, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat($a, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat($a, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function wm(e7) {
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
function Wk(e7) {
  var t = e7.translateX, r = e7.translateY, n = e7.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function Vk(e7) {
  var t = e7.allowEscapeViewBox, r = e7.coordinate, n = e7.offsetTopLeft, i = e7.position, a = e7.reverseDirection, o = e7.tooltipBox, s = e7.useTranslate3d, c = e7.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = wm({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), f = wm({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), u = Wk({ translateX: l, translateY: f, useTranslate3d: s })) : u = Uk, { cssProperties: u, cssClasses: zk({ translateX: l, translateY: f, coordinate: r }) };
}
function zi(e7) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e7);
}
function Sm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Om(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), true).forEach(function(n) {
      Gf(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function qk(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Gk(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Cw(n.key), n);
  }
}
function Hk(e7, t, r) {
  return t && Gk(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Kk(e7, t, r) {
  return t = Ic(t), Yk(e7, Nw() ? Reflect.construct(t, r || [], Ic(e7).constructor) : t.apply(e7, r));
}
function Yk(e7, t) {
  if (t && (zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Xk(e7);
}
function Xk(e7) {
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
function Jk(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && qf(e7, t);
}
function qf(e7, t) {
  return qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qf(e7, t);
}
function Gf(e7, t, r) {
  return t = Cw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Cw(e7) {
  var t = Qk(e7, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function Qk(e7, t) {
  if (zi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var xm = 1, Zk = function(e7) {
  function t() {
    var r;
    qk(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = Kk(this, t, [].concat(i)), Gf(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), Gf(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0, y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return Jk(t, e7), Hk(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > xm || Math.abs(n.height - this.state.lastBoundingBox.height) > xm) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, m = i.reverseDirection, p = i.useTranslate3d, b = i.viewBox, _ = i.wrapperStyle, S = Vk({ allowEscapeViewBox: o, coordinate: l, offsetTopLeft: d, position: y, reverseDirection: m, tooltipBox: this.state.lastBoundingBox, useTranslate3d: p, viewBox: b }), w = S.cssClasses, v = S.cssProperties, g = Om(Om({ transition: h && a ? "transform ".concat(s, "ms ").concat(c) : void 0 }, v), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, _);
    return A.createElement("div", { tabIndex: -1, className: w, style: g, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(B.PureComponent), tL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wn = { isSsr: tL() };
function Wi(e7) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e7);
}
function Am(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pm(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), true).forEach(function(n) {
      Jd(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function eL(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rL(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, Bw(n.key), n);
  }
}
function nL(e7, t, r) {
  return t && rL(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function iL(e7, t, r) {
  return t = Ec(t), aL(e7, jw() ? Reflect.construct(t, r || [], Ec(e7).constructor) : t.apply(e7, r));
}
function aL(e7, t) {
  if (t && (Wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return oL(e7);
}
function oL(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function jw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jw = function() {
    return !!e7;
  })();
}
function Ec(e7) {
  return Ec = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ec(e7);
}
function sL(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Hf(e7, t);
}
function Hf(e7, t) {
  return Hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hf(e7, t);
}
function Jd(e7, t, r) {
  return t = Bw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Bw(e7) {
  var t = cL(e7, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function cL(e7, t) {
  if (Wi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function uL(e7) {
  return e7.dataKey;
}
function lL(e7, t) {
  return A.isValidElement(e7) ? A.cloneElement(e7, t) : typeof e7 == "function" ? A.createElement(e7, t) : A.createElement(kk, t);
}
var nr = function(e7) {
  function t() {
    return eL(this, t), iL(this, t, arguments);
  }
  return sL(t, e7), nL(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, m = i.payloadUniqBy, p = i.position, b = i.reverseDirection, _ = i.useTranslate3d, S = i.viewBox, w = i.wrapperStyle, v = y ?? [];
    f && v.length && (v = Aw(y.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), m, uL));
    var g = v.length > 0;
    return A.createElement(Zk, { allowEscapeViewBox: o, animationDuration: s, animationEasing: c, isAnimationActive: h, active: a, coordinate: l, hasPayload: g, offset: d, position: p, reverseDirection: b, useTranslate3d: _, viewBox: S, wrapperStyle: w }, lL(u, Pm(Pm({}, this.props), {}, { payload: v })));
  } }]);
}(B.PureComponent);
Jd(nr, "displayName", "Tooltip");
Jd(nr, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !wn.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var fL = $r, hL = function() {
  return fL.Date.now();
}, dL = hL, pL = /\s/;
function yL(e7) {
  for (var t = e7.length; t-- && pL.test(e7.charAt(t)); ) ;
  return t;
}
var mL = yL, vL = mL, gL = /^\s+/;
function bL(e7) {
  return e7 && e7.slice(0, vL(e7) + 1).replace(gL, "");
}
var _L = bL, wL = _L, Tm = bn, SL = da, Im = NaN, OL = /^[-+]0x[0-9a-f]+$/i, xL = /^0b[01]+$/i, AL = /^0o[0-7]+$/i, PL = parseInt;
function TL(e7) {
  if (typeof e7 == "number") return e7;
  if (SL(e7)) return Im;
  if (Tm(e7)) {
    var t = typeof e7.valueOf == "function" ? e7.valueOf() : e7;
    e7 = Tm(t) ? t + "" : t;
  }
  if (typeof e7 != "string") return e7 === 0 ? e7 : +e7;
  e7 = wL(e7);
  var r = xL.test(e7);
  return r || AL.test(e7) ? PL(e7.slice(2), r ? 2 : 8) : OL.test(e7) ? Im : +e7;
}
var Rw = TL, IL = bn, Ll = dL, Em = Rw, EL = "Expected a function", $L = Math.max, ML = Math.min;
function DL(e7, t, r) {
  var n, i, a, o, s, c, u = 0, l = false, f = false, h = true;
  if (typeof e7 != "function") throw new TypeError(EL);
  t = Em(t) || 0, IL(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? $L(Em(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(g) {
    var O = n, P = i;
    return n = i = void 0, u = g, o = e7.apply(P, O), o;
  }
  function y(g) {
    return u = g, s = setTimeout(b, t), l ? d(g) : o;
  }
  function m(g) {
    var O = g - c, P = g - u, T = t - O;
    return f ? ML(T, a - P) : T;
  }
  function p(g) {
    var O = g - c, P = g - u;
    return c === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function b() {
    var g = Ll();
    if (p(g)) return _(g);
    s = setTimeout(b, m(g));
  }
  function _(g) {
    return s = void 0, h && n ? d(g) : (n = i = void 0, o);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function w() {
    return s === void 0 ? o : _(Ll());
  }
  function v() {
    var g = Ll(), O = p(g);
    if (n = arguments, i = this, c = g, O) {
      if (s === void 0) return y(c);
      if (f) return clearTimeout(s), s = setTimeout(b, t), d(c);
    }
    return s === void 0 && (s = setTimeout(b, t)), o;
  }
  return v.cancel = S, v.flush = w, v;
}
var NL = DL, CL = NL, jL = bn, BL = "Expected a function";
function RL(e7, t, r) {
  var n = true, i = true;
  if (typeof e7 != "function") throw new TypeError(BL);
  return jL(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), CL(e7, t, { leading: n, maxWait: t, trailing: i });
}
var kL = RL;
const kw = Bt(kL);
function yo(e7) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e7);
}
function $m(e7, t) {
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
    t % 2 ? $m(Object(r), true).forEach(function(n) {
      LL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function LL(e7, t, r) {
  return t = FL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function FL(e7) {
  var t = UL(e7, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function UL(e7, t) {
  if (yo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function zL(e7, t) {
  return GL(e7) || qL(e7, t) || VL(e7, t) || WL();
}
function WL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VL(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Mm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mm(e7, t);
  }
}
function Mm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function qL(e7, t) {
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
function GL(e7) {
  if (Array.isArray(e7)) return e7;
}
var Dm = B.forwardRef(function(e7, t) {
  var r = e7.aspect, n = e7.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e7.width, o = a === void 0 ? "100%" : a, s = e7.height, c = s === void 0 ? "100%" : s, u = e7.minWidth, l = u === void 0 ? 0 : u, f = e7.minHeight, h = e7.maxHeight, d = e7.children, y = e7.debounce, m = y === void 0 ? 0 : y, p = e7.id, b = e7.className, _ = e7.onResize, S = e7.style, w = S === void 0 ? {} : S, v = B.useRef(null), g = B.useRef();
  g.current = _, B.useImperativeHandle(t, function() {
    return Object.defineProperty(v.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), v.current;
    }, configurable: true });
  });
  var O = B.useState({ containerWidth: i.width, containerHeight: i.height }), P = zL(O, 2), T = P[0], $ = P[1], E = B.useCallback(function(j, N) {
    $(function(M) {
      var C = Math.round(j), R = Math.round(N);
      return M.containerWidth === C && M.containerHeight === R ? M : { containerWidth: C, containerHeight: R };
    });
  }, []);
  B.useEffect(function() {
    var j = function(U) {
      var q, nt = U[0].contentRect, W = nt.width, at = nt.height;
      E(W, at), (q = g.current) === null || q === void 0 || q.call(g, W, at);
    };
    m > 0 && (j = kw(j, m, { trailing: true, leading: false }));
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
  return A.createElement("div", { id: p ? "".concat(p) : void 0, className: mt("recharts-responsive-container", b), style: ds(ds({}, w), {}, { width: o, height: c, minWidth: l, minHeight: f, maxHeight: h }), ref: v }, I);
}), Qd = function(t) {
  return null;
};
Qd.displayName = "Cell";
function mo(e7) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e7);
}
function Nm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kf(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nm(Object(r), true).forEach(function(n) {
      HL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function HL(e7, t, r) {
  return t = KL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function KL(e7) {
  var t = YL(e7, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function YL(e7, t) {
  if (mo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var ci = { widthCache: {}, cacheCount: 0 }, XL = 2e3, JL = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Cm = "recharts_measurement_span";
function QL(e7) {
  var t = Kf({}, e7);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Xa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || wn.isSsr) return { width: 0, height: 0 };
  var n = QL(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (ci.widthCache[i]) return ci.widthCache[i];
  try {
    var a = document.getElementById(Cm);
    a || (a = document.createElement("span"), a.setAttribute("id", Cm), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Kf(Kf({}, JL), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = { width: s.width, height: s.height };
    return ci.widthCache[i] = c, ++ci.cacheCount > XL && (ci.cacheCount = 0, ci.widthCache = {}), c;
  } catch {
    return { width: 0, height: 0 };
  }
}, ZL = function(t) {
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
function $c(e7, t) {
  return nF(e7) || rF(e7, t) || eF(e7, t) || tF();
}
function tF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eF(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return jm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jm(e7, t);
  }
}
function jm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function rF(e7, t) {
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
function nF(e7) {
  if (Array.isArray(e7)) return e7;
}
function iF(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Bm(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, oF(n.key), n);
  }
}
function aF(e7, t, r) {
  return t && Bm(e7.prototype, t), r && Bm(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function oF(e7) {
  var t = sF(e7, "string");
  return vo(t) == "symbol" ? t : t + "";
}
function sF(e7, t) {
  if (vo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Rm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, km = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, cF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, uF = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Lw = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, lF = Object.keys(Lw), Oi = "NaN";
function fF(e7, t) {
  return e7 * Lw[t];
}
var ps = function() {
  function e7(t, r) {
    iF(this, e7), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !cF.test(r) && (this.num = NaN, this.unit = ""), lF.includes(r) && (this.num = fF(t, r), this.unit = "px");
  }
  return aF(e7, [{ key: "add", value: function(r) {
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
    var n, i = (n = uF.exec(r)) !== null && n !== void 0 ? n : [], a = $c(i, 3), o = a[1], s = a[2];
    return new e7(parseFloat(o), s ?? "");
  } }]);
}();
function Fw(e7) {
  if (e7.includes(Oi)) return Oi;
  for (var t = e7; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Rm.exec(t)) !== null && r !== void 0 ? r : [], i = $c(n, 4), a = i[1], o = i[2], s = i[3], c = ps.parse(a ?? ""), u = ps.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return Oi;
    t = t.replace(Rm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, h = (f = km.exec(t)) !== null && f !== void 0 ? f : [], d = $c(h, 4), y = d[1], m = d[2], p = d[3], b = ps.parse(y ?? ""), _ = ps.parse(p ?? ""), S = m === "+" ? b.add(_) : b.subtract(_);
    if (S.isNaN()) return Oi;
    t = t.replace(km, S.toString());
  }
  return t;
}
var Lm = /\(([^()]*)\)/;
function hF(e7) {
  for (var t = e7; t.includes("("); ) {
    var r = Lm.exec(t), n = $c(r, 2), i = n[1];
    t = t.replace(Lm, Fw(i));
  }
  return t;
}
function dF(e7) {
  var t = e7.replace(/\s+/g, "");
  return t = hF(t), t = Fw(t), t;
}
function pF(e7) {
  try {
    return dF(e7);
  } catch {
    return Oi;
  }
}
function Fl(e7) {
  var t = pF(e7.slice(5, -1));
  return t === Oi ? "" : t;
}
var yF = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], mF = ["dx", "dy", "angle", "className", "breakAll"];
function Yf() {
  return Yf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Yf.apply(this, arguments);
}
function Fm(e7, t) {
  if (e7 == null) return {};
  var r = vF(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function vF(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Um(e7, t) {
  return wF(e7) || _F(e7, t) || bF(e7, t) || gF();
}
function gF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bF(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return zm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zm(e7, t);
  }
}
function zm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function _F(e7, t) {
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
function wF(e7) {
  if (Array.isArray(e7)) return e7;
}
var Uw = /[ \f\n\r\t\v\u2028\u2029]+/, zw = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    ct(r) || (n ? a = r.toString().split("") : a = r.toString().split(Uw));
    var o = a.map(function(c) {
      return { word: c, width: Xa(c, i).width };
    }), s = n ? 0 : Xa("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, SF = function(t, r, n, i, a) {
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
    var C = f.slice(0, M), R = zw({ breakAll: u, style: c, children: C + m }).wordsWithComputedWidth, F = h(R), U = F.length > o || y(F).width > Number(i);
    return [U, F];
  }, b = 0, _ = f.length - 1, S = 0, w; b <= _ && S <= f.length - 1; ) {
    var v = Math.floor((b + _) / 2), g = v - 1, O = p(g), P = Um(O, 2), T = P[0], $ = P[1], E = p(v), I = Um(E, 1), j = I[0];
    if (!T && !j && (b = v + 1), T && j && (_ = v - 1), !T && j) {
      w = $;
      break;
    }
    S++;
  }
  return w || d;
}, Wm = function(t) {
  var r = ct(t) ? [] : t.toString().split(Uw);
  return [{ words: r }];
}, OF = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !wn.isSsr) {
    var c, u, l = zw({ breakAll: o, children: i, style: a });
    if (l) {
      var f = l.wordsWithComputedWidth, h = l.spaceWidth;
      c = f, u = h;
    } else return Wm(i);
    return SF({ breakAll: o, children: i, maxLines: s, style: a }, c, u, r, n);
  }
  return Wm(i);
}, Vm = "#808080", Mc = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? false : l, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, b = p === void 0 ? Vm : p, _ = Fm(t, yF), S = B.useMemo(function() {
    return OF({ breakAll: _.breakAll, children: _.children, maxLines: _.maxLines, scaleToFit: f, style: _.style, width: _.width });
  }, [_.breakAll, _.children, _.maxLines, f, _.style, _.width]), w = _.dx, v = _.dy, g = _.angle, O = _.className, P = _.breakAll, T = Fm(_, mF);
  if (!ie(n) || !ie(a)) return null;
  var $ = n + (L(w) ? w : 0), E = a + (L(v) ? v : 0), I;
  switch (m) {
    case "start":
      I = Fl("calc(".concat(u, ")"));
      break;
    case "middle":
      I = Fl("calc(".concat((S.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      I = Fl("calc(".concat(S.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var N = S[0].width, M = _.width;
    j.push("scale(".concat((L(M) ? M / N : 1) / N, ")"));
  }
  return g && j.push("rotate(".concat(g, ", ").concat($, ", ").concat(E, ")")), j.length && (T.transform = j.join(" ")), A.createElement("text", Yf({}, ut(T, true), { x: $, y: E, className: mt("recharts-text", O), textAnchor: d, fill: b.includes("url") ? Vm : b }), S.map(function(C, R) {
    var F = C.words.join(P ? "" : " ");
    return A.createElement("tspan", { x: $, dy: R === 0 ? I : s, key: "".concat(F, "-").concat(R) }, F);
  }));
};
function hn(e7, t) {
  return e7 == null || t == null ? NaN : e7 < t ? -1 : e7 > t ? 1 : e7 >= t ? 0 : NaN;
}
function xF(e7, t) {
  return e7 == null || t == null ? NaN : t < e7 ? -1 : t > e7 ? 1 : t >= e7 ? 0 : NaN;
}
function Zd(e7) {
  let t, r, n;
  e7.length !== 2 ? (t = hn, r = (s, c) => hn(e7(s), c), n = (s, c) => e7(s) - c) : (t = e7 === hn || e7 === xF ? e7 : AF, r = e7, n = e7);
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
function AF() {
  return 0;
}
function Ww(e7) {
  return e7 === null ? NaN : +e7;
}
function* PF(e7, t) {
  for (let r of e7) r != null && (r = +r) >= r && (yield r);
}
const TF = Zd(hn), es = TF.right;
Zd(Ww).center;
class qm extends Map {
  constructor(t, r = $F) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Gm(this, t));
  }
  has(t) {
    return super.has(Gm(this, t));
  }
  set(t, r) {
    return super.set(IF(this, t), r);
  }
  delete(t) {
    return super.delete(EF(this, t));
  }
}
function Gm({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : r;
}
function IF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : (e7.set(n, r), r);
}
function EF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) && (r = e7.get(n), e7.delete(n)), r;
}
function $F(e7) {
  return e7 !== null && typeof e7 == "object" ? e7.valueOf() : e7;
}
function MF(e7 = hn) {
  if (e7 === hn) return Vw;
  if (typeof e7 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e7(t, r);
    return n || n === 0 ? n : (e7(r, r) === 0) - (e7(t, t) === 0);
  };
}
function Vw(e7, t) {
  return (e7 == null || !(e7 >= e7)) - (t == null || !(t >= t)) || (e7 < t ? -1 : e7 > t ? 1 : 0);
}
const DF = Math.sqrt(50), NF = Math.sqrt(10), CF = Math.sqrt(2);
function Dc(e7, t, r) {
  const n = (t - e7) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= DF ? 10 : a >= NF ? 5 : a >= CF ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e7 * u), c = Math.round(t * u), s / u < e7 && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e7 / u), c = Math.round(t / u), s * u < e7 && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? Dc(e7, t, r * 2) : [s, c, u];
}
function Xf(e7, t, r) {
  if (t = +t, e7 = +e7, r = +r, !(r > 0)) return [];
  if (e7 === t) return [e7];
  const n = t < e7, [i, a, o] = n ? Dc(t, e7, r) : Dc(e7, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Jf(e7, t, r) {
  return t = +t, e7 = +e7, r = +r, Dc(e7, t, r)[2];
}
function Qf(e7, t, r) {
  t = +t, e7 = +e7, r = +r;
  const n = t < e7, i = n ? Jf(t, e7, r) : Jf(e7, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Hm(e7, t) {
  let r;
  for (const n of e7) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Km(e7, t) {
  let r;
  for (const n of e7) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function qw(e7, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e7.length - 1, n)), !(r <= t && t <= n)) return e7;
  for (i = i === void 0 ? Vw : MF(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), h = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * f / c + h)), y = Math.min(n, Math.floor(t + (c - u) * f / c + h));
      qw(e7, t, d, y, i);
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
function jF(e7, t, r) {
  if (e7 = Float64Array.from(PF(e7)), !(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Km(e7);
    if (t >= 1) return Hm(e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Hm(qw(e7, a).subarray(0, a + 1)), s = Km(e7.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function BF(e7, t, r = Ww) {
  if (!(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e7[0], 0, e7);
    if (t >= 1) return +r(e7[n - 1], n - 1, e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e7[a], a, e7), s = +r(e7[a + 1], a + 1, e7);
    return o + (s - o) * (i - a);
  }
}
function RF(e7, t, r) {
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
const Zf = Symbol("implicit");
function tp() {
  var e7 = new qm(), t = [], r = [], n = Zf;
  function i(a) {
    let o = e7.get(a);
    if (o === void 0) {
      if (n !== Zf) return n;
      e7.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e7 = new qm();
    for (const o of a) e7.has(o) || e7.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return tp(t, r).unknown(n);
  }, tr.apply(i, arguments), i;
}
function go() {
  var e7 = tp().unknown(void 0), t = e7.domain, r = e7.range, n = 0, i = 1, a, o, s = false, c = 0, u = 0, l = 0.5;
  delete e7.unknown;
  function f() {
    var h = t().length, d = i < n, y = d ? i : n, m = d ? n : i;
    a = (m - y) / Math.max(1, h - c + u * 2), s && (a = Math.floor(a)), y += (m - y - a * (h - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = RF(h).map(function(b) {
      return y + a * b;
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
function Gw(e7) {
  var t = e7.copy;
  return e7.padding = e7.paddingOuter, delete e7.paddingInner, delete e7.paddingOuter, e7.copy = function() {
    return Gw(t());
  }, e7;
}
function Ja() {
  return Gw(go.apply(null, arguments).paddingInner(1));
}
function ep(e7, t, r) {
  e7.prototype = t.prototype = r, r.constructor = e7;
}
function Hw(e7, t) {
  var r = Object.create(e7.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function rs() {
}
var bo = 0.7, Nc = 1 / bo, Mi = "\\s*([+-]?\\d+)\\s*", _o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Or = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kF = /^#([0-9a-f]{3,8})$/, LF = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`), FF = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`), UF = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${_o}\\)$`), zF = new RegExp(`^rgba\\(${Or},${Or},${Or},${_o}\\)$`), WF = new RegExp(`^hsl\\(${_o},${Or},${Or}\\)$`), VF = new RegExp(`^hsla\\(${_o},${Or},${Or},${_o}\\)$`), Ym = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
ep(rs, wo, { copy(e7) {
  return Object.assign(new this.constructor(), this, e7);
}, displayable() {
  return this.rgb().displayable();
}, hex: Xm, formatHex: Xm, formatHex8: qF, formatHsl: GF, formatRgb: Jm, toString: Jm });
function Xm() {
  return this.rgb().formatHex();
}
function qF() {
  return this.rgb().formatHex8();
}
function GF() {
  return Kw(this).formatHsl();
}
function Jm() {
  return this.rgb().formatRgb();
}
function wo(e7) {
  var t, r;
  return e7 = (e7 + "").trim().toLowerCase(), (t = kF.exec(e7)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Qm(t) : r === 3 ? new Pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ys(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ys(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = LF.exec(e7)) ? new Pe(t[1], t[2], t[3], 1) : (t = FF.exec(e7)) ? new Pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = UF.exec(e7)) ? ys(t[1], t[2], t[3], t[4]) : (t = zF.exec(e7)) ? ys(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = WF.exec(e7)) ? ev(t[1], t[2] / 100, t[3] / 100, 1) : (t = VF.exec(e7)) ? ev(t[1], t[2] / 100, t[3] / 100, t[4]) : Ym.hasOwnProperty(e7) ? Qm(Ym[e7]) : e7 === "transparent" ? new Pe(NaN, NaN, NaN, 0) : null;
}
function Qm(e7) {
  return new Pe(e7 >> 16 & 255, e7 >> 8 & 255, e7 & 255, 1);
}
function ys(e7, t, r, n) {
  return n <= 0 && (e7 = t = r = NaN), new Pe(e7, t, r, n);
}
function HF(e7) {
  return e7 instanceof rs || (e7 = wo(e7)), e7 ? (e7 = e7.rgb(), new Pe(e7.r, e7.g, e7.b, e7.opacity)) : new Pe();
}
function th(e7, t, r, n) {
  return arguments.length === 1 ? HF(e7) : new Pe(e7, t, r, n ?? 1);
}
function Pe(e7, t, r, n) {
  this.r = +e7, this.g = +t, this.b = +r, this.opacity = +n;
}
ep(Pe, th, Hw(rs, { brighter(e7) {
  return e7 = e7 == null ? Nc : Math.pow(Nc, e7), new Pe(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? bo : Math.pow(bo, e7), new Pe(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Pe(zn(this.r), zn(this.g), zn(this.b), Cc(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Zm, formatHex: Zm, formatHex8: KF, formatRgb: tv, toString: tv }));
function Zm() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}`;
}
function KF() {
  return `#${Bn(this.r)}${Bn(this.g)}${Bn(this.b)}${Bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function tv() {
  const e7 = Cc(this.opacity);
  return `${e7 === 1 ? "rgb(" : "rgba("}${zn(this.r)}, ${zn(this.g)}, ${zn(this.b)}${e7 === 1 ? ")" : `, ${e7})`}`;
}
function Cc(e7) {
  return isNaN(e7) ? 1 : Math.max(0, Math.min(1, e7));
}
function zn(e7) {
  return Math.max(0, Math.min(255, Math.round(e7) || 0));
}
function Bn(e7) {
  return e7 = zn(e7), (e7 < 16 ? "0" : "") + e7.toString(16);
}
function ev(e7, t, r, n) {
  return n <= 0 ? e7 = t = r = NaN : r <= 0 || r >= 1 ? e7 = t = NaN : t <= 0 && (e7 = NaN), new or(e7, t, r, n);
}
function Kw(e7) {
  if (e7 instanceof or) return new or(e7.h, e7.s, e7.l, e7.opacity);
  if (e7 instanceof rs || (e7 = wo(e7)), !e7) return new or();
  if (e7 instanceof or) return e7;
  e7 = e7.rgb();
  var t = e7.r / 255, r = e7.g / 255, n = e7.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new or(o, s, c, e7.opacity);
}
function YF(e7, t, r, n) {
  return arguments.length === 1 ? Kw(e7) : new or(e7, t, r, n ?? 1);
}
function or(e7, t, r, n) {
  this.h = +e7, this.s = +t, this.l = +r, this.opacity = +n;
}
ep(or, YF, Hw(rs, { brighter(e7) {
  return e7 = e7 == null ? Nc : Math.pow(Nc, e7), new or(this.h, this.s, this.l * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? bo : Math.pow(bo, e7), new or(this.h, this.s, this.l * e7, this.opacity);
}, rgb() {
  var e7 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e7) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Pe(Ul(e7 >= 240 ? e7 - 240 : e7 + 120, i, n), Ul(e7, i, n), Ul(e7 < 120 ? e7 + 240 : e7 - 120, i, n), this.opacity);
}, clamp() {
  return new or(rv(this.h), ms(this.s), ms(this.l), Cc(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e7 = Cc(this.opacity);
  return `${e7 === 1 ? "hsl(" : "hsla("}${rv(this.h)}, ${ms(this.s) * 100}%, ${ms(this.l) * 100}%${e7 === 1 ? ")" : `, ${e7})`}`;
} }));
function rv(e7) {
  return e7 = (e7 || 0) % 360, e7 < 0 ? e7 + 360 : e7;
}
function ms(e7) {
  return Math.max(0, Math.min(1, e7 || 0));
}
function Ul(e7, t, r) {
  return (e7 < 60 ? t + (r - t) * e7 / 60 : e7 < 180 ? r : e7 < 240 ? t + (r - t) * (240 - e7) / 60 : t) * 255;
}
const rp = (e7) => () => e7;
function XF(e7, t) {
  return function(r) {
    return e7 + r * t;
  };
}
function JF(e7, t, r) {
  return e7 = Math.pow(e7, r), t = Math.pow(t, r) - e7, r = 1 / r, function(n) {
    return Math.pow(e7 + n * t, r);
  };
}
function QF(e7) {
  return (e7 = +e7) == 1 ? Yw : function(t, r) {
    return r - t ? JF(t, r, e7) : rp(isNaN(t) ? r : t);
  };
}
function Yw(e7, t) {
  var r = t - e7;
  return r ? XF(e7, r) : rp(isNaN(e7) ? t : e7);
}
const nv = function e3(t) {
  var r = QF(t);
  function n(i, a) {
    var o = r((i = th(i)).r, (a = th(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = Yw(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e3, n;
}(1);
function ZF(e7, t) {
  t || (t = []);
  var r = e7 ? Math.min(t.length, e7.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e7[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function tU(e7) {
  return ArrayBuffer.isView(e7) && !(e7 instanceof DataView);
}
function eU(e7, t) {
  var r = t ? t.length : 0, n = e7 ? Math.min(r, e7.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Sa(e7[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function rU(e7, t) {
  var r = /* @__PURE__ */ new Date();
  return e7 = +e7, t = +t, function(n) {
    return r.setTime(e7 * (1 - n) + t * n), r;
  };
}
function jc(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return e7 * (1 - r) + t * r;
  };
}
function nU(e7, t) {
  var r = {}, n = {}, i;
  (e7 === null || typeof e7 != "object") && (e7 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e7 ? r[i] = Sa(e7[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var eh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zl = new RegExp(eh.source, "g");
function iU(e7) {
  return function() {
    return e7;
  };
}
function aU(e7) {
  return function(t) {
    return e7(t) + "";
  };
}
function oU(e7, t) {
  var r = eh.lastIndex = zl.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e7 = e7 + "", t = t + ""; (n = eh.exec(e7)) && (i = zl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: jc(n, i) })), r = zl.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? aU(c[0].x) : iU(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Sa(e7, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? rp(t) : (r === "number" ? jc : r === "string" ? (n = wo(t)) ? (t = n, nv) : oU : t instanceof wo ? nv : t instanceof Date ? rU : tU(t) ? ZF : Array.isArray(t) ? eU : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? nU : jc)(e7, t);
}
function np(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return Math.round(e7 * (1 - r) + t * r);
  };
}
function sU(e7, t) {
  t === void 0 && (t = e7, e7 = Sa);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e7(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function cU(e7) {
  return function() {
    return e7;
  };
}
function Bc(e7) {
  return +e7;
}
var iv = [0, 1];
function be(e7) {
  return e7;
}
function rh(e7, t) {
  return (t -= e7 = +e7) ? function(r) {
    return (r - e7) / t;
  } : cU(isNaN(t) ? NaN : 0.5);
}
function uU(e7, t) {
  var r;
  return e7 > t && (r = e7, e7 = t, t = r), function(n) {
    return Math.max(e7, Math.min(t, n));
  };
}
function lU(e7, t, r) {
  var n = e7[0], i = e7[1], a = t[0], o = t[1];
  return i < n ? (n = rh(i, n), a = r(o, a)) : (n = rh(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function fU(e7, t, r) {
  var n = Math.min(e7.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e7[n] < e7[0] && (e7 = e7.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = rh(e7[o], e7[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = es(e7, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function ns(e7, t) {
  return t.domain(e7.domain()).range(e7.range()).interpolate(e7.interpolate()).clamp(e7.clamp()).unknown(e7.unknown());
}
function Ku() {
  var e7 = iv, t = iv, r = Sa, n, i, a, o = be, s, c, u;
  function l() {
    var h = Math.min(e7.length, t.length);
    return o !== be && (o = uU(e7[0], e7[h - 1])), s = h > 2 ? fU : lU, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(e7.map(n), t, r)))(n(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(t, e7.map(n), jc)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e7 = Array.from(h, Bc), l()) : e7.slice();
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
  return Ku()(be, be);
}
function hU(e7) {
  return Math.abs(e7 = Math.round(e7)) >= 1e21 ? e7.toLocaleString("en").replace(/,/g, "") : e7.toString(10);
}
function Rc(e7, t) {
  if (!isFinite(e7) || e7 === 0) return null;
  var r = (e7 = t ? e7.toExponential(t - 1) : e7.toExponential()).indexOf("e"), n = e7.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e7.slice(r + 1)];
}
function Vi(e7) {
  return e7 = Rc(Math.abs(e7)), e7 ? e7[1] : NaN;
}
function dU(e7, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e7[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); ) s = e7[o = (o + 1) % e7.length];
    return a.reverse().join(t);
  };
}
function pU(e7) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e7[+r];
    });
  };
}
var yU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function So(e7) {
  if (!(t = yU.exec(e7))) throw new Error("invalid format: " + e7);
  var t;
  return new ap({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
So.prototype = ap.prototype;
function ap(e7) {
  this.fill = e7.fill === void 0 ? " " : e7.fill + "", this.align = e7.align === void 0 ? ">" : e7.align + "", this.sign = e7.sign === void 0 ? "-" : e7.sign + "", this.symbol = e7.symbol === void 0 ? "" : e7.symbol + "", this.zero = !!e7.zero, this.width = e7.width === void 0 ? void 0 : +e7.width, this.comma = !!e7.comma, this.precision = e7.precision === void 0 ? void 0 : +e7.precision, this.trim = !!e7.trim, this.type = e7.type === void 0 ? "" : e7.type + "";
}
ap.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function mU(e7) {
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
var kc;
function vU(e7, t) {
  var r = Rc(e7, t);
  if (!r) return kc = void 0, e7.toPrecision(t);
  var n = r[0], i = r[1], a = i - (kc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Rc(e7, Math.max(0, t + a - 1))[0];
}
function av(e7, t) {
  var r = Rc(e7, t);
  if (!r) return e7 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const ov = { "%": (e7, t) => (e7 * 100).toFixed(t), b: (e7) => Math.round(e7).toString(2), c: (e7) => e7 + "", d: hU, e: (e7, t) => e7.toExponential(t), f: (e7, t) => e7.toFixed(t), g: (e7, t) => e7.toPrecision(t), o: (e7) => Math.round(e7).toString(8), p: (e7, t) => av(e7 * 100, t), r: av, s: vU, X: (e7) => Math.round(e7).toString(16).toUpperCase(), x: (e7) => Math.round(e7).toString(16) };
function sv(e7) {
  return e7;
}
var cv = Array.prototype.map, uv = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function gU(e7) {
  var t = e7.grouping === void 0 || e7.thousands === void 0 ? sv : dU(cv.call(e7.grouping, Number), e7.thousands + ""), r = e7.currency === void 0 ? "" : e7.currency[0] + "", n = e7.currency === void 0 ? "" : e7.currency[1] + "", i = e7.decimal === void 0 ? "." : e7.decimal + "", a = e7.numerals === void 0 ? sv : pU(cv.call(e7.numerals, String)), o = e7.percent === void 0 ? "%" : e7.percent + "", s = e7.minus === void 0 ? "\u2212" : e7.minus + "", c = e7.nan === void 0 ? "NaN" : e7.nan + "";
  function u(f, h) {
    f = So(f);
    var d = f.fill, y = f.align, m = f.sign, p = f.symbol, b = f.zero, _ = f.width, S = f.comma, w = f.precision, v = f.trim, g = f.type;
    g === "n" ? (S = true, g = "g") : ov[g] || (w === void 0 && (w = 12), v = true, g = "g"), (b || d === "0" && y === "=") && (b = true, d = "0", y = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : ""), P = (p === "$" ? n : /[%p]/.test(g) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), T = ov[g], $ = /[defgprs%]/.test(g);
    w = w === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function E(I) {
      var j = O, N = P, M, C, R;
      if (g === "c") N = T(I) + N, I = "";
      else {
        I = +I;
        var F = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? c : T(Math.abs(I), w), v && (I = mU(I)), F && +I == 0 && m !== "+" && (F = false), j = (F ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + j, N = (g === "s" && !isNaN(I) && kc !== void 0 ? uv[8 + kc / 3] : "") + N + (F && m === "(" ? ")" : ""), $) {
          for (M = -1, C = I.length; ++M < C; ) if (R = I.charCodeAt(M), 48 > R || R > 57) {
            N = (R === 46 ? i + I.slice(M + 1) : I.slice(M)) + N, I = I.slice(0, M);
            break;
          }
        }
      }
      S && !b && (I = t(I, 1 / 0));
      var U = j.length + I.length + N.length, q = U < _ ? new Array(_ - U + 1).join(d) : "";
      switch (S && b && (I = t(q + I, q.length ? _ - N.length : 1 / 0), q = ""), y) {
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
    var d = Math.max(-8, Math.min(8, Math.floor(Vi(h) / 3))) * 3, y = Math.pow(10, -d), m = u((f = So(f), f.type = "f", f), { suffix: uv[8 + d / 3] });
    return function(p) {
      return m(y * p);
    };
  }
  return { format: u, formatPrefix: l };
}
var vs, op, Xw;
bU({ thousands: ",", grouping: [3], currency: ["$", ""] });
function bU(e7) {
  return vs = gU(e7), op = vs.format, Xw = vs.formatPrefix, vs;
}
function _U(e7) {
  return Math.max(0, -Vi(Math.abs(e7)));
}
function wU(e7, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vi(t) / 3))) * 3 - Vi(Math.abs(e7)));
}
function SU(e7, t) {
  return e7 = Math.abs(e7), t = Math.abs(t) - e7, Math.max(0, Vi(t) - Vi(e7)) + 1;
}
function Jw(e7, t, r, n) {
  var i = Qf(e7, t, r), a;
  switch (n = So(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e7), Math.abs(t));
      return n.precision == null && !isNaN(a = wU(i, o)) && (n.precision = a), Xw(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = SU(i, Math.max(Math.abs(e7), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = _U(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return op(n);
}
function Sn(e7) {
  var t = e7.domain;
  return e7.ticks = function(r) {
    var n = t();
    return Xf(n[0], n[n.length - 1], r ?? 10);
  }, e7.tickFormat = function(r, n) {
    var i = t();
    return Jw(i[0], i[i.length - 1], r ?? 10, n);
  }, e7.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Jf(o, s, r), u === c) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      c = u;
    }
    return e7;
  }, e7;
}
function Lc() {
  var e7 = ip();
  return e7.copy = function() {
    return ns(e7, Lc());
  }, tr.apply(e7, arguments), Sn(e7);
}
function Qw(e7) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e7 = Array.from(n, Bc), r) : e7.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Qw(e7).unknown(t);
  }, e7 = arguments.length ? Array.from(e7, Bc) : [0, 1], Sn(r);
}
function Zw(e7, t) {
  e7 = e7.slice();
  var r = 0, n = e7.length - 1, i = e7[r], a = e7[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e7[r] = t.floor(i), e7[n] = t.ceil(a), e7;
}
function lv(e7) {
  return Math.log(e7);
}
function fv(e7) {
  return Math.exp(e7);
}
function OU(e7) {
  return -Math.log(-e7);
}
function xU(e7) {
  return -Math.exp(-e7);
}
function AU(e7) {
  return isFinite(e7) ? +("1e" + e7) : e7 < 0 ? 0 : e7;
}
function PU(e7) {
  return e7 === 10 ? AU : e7 === Math.E ? Math.exp : (t) => Math.pow(e7, t);
}
function TU(e7) {
  return e7 === Math.E ? Math.log : e7 === 10 && Math.log10 || e7 === 2 && Math.log2 || (e7 = Math.log(e7), (t) => Math.log(t) / e7);
}
function hv(e7) {
  return (t, r) => -e7(-t, r);
}
function sp(e7) {
  const t = e7(lv, fv), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = TU(n), a = PU(n), r()[0] < 0 ? (i = hv(i), a = hv(a), e7(OU, xU)) : e7(lv, fv), t;
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
    let b = [];
    if (!(n % 1) && d - h < p) {
      if (h = Math.floor(h), d = Math.ceil(d), u > 0) {
        for (; h <= d; ++h) for (y = 1; y < n; ++y) if (m = h < 0 ? y / a(-h) : y * a(h), !(m < u)) {
          if (m > l) break;
          b.push(m);
        }
      } else for (; h <= d; ++h) for (y = n - 1; y >= 1; --y) if (m = h > 0 ? y / a(-h) : y * a(h), !(m < u)) {
        if (m > l) break;
        b.push(m);
      }
      b.length * 2 < p && (b = Xf(u, l, p));
    } else b = Xf(h, d, Math.min(d - h, p)).map(a);
    return f ? b.reverse() : b;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = So(c)).precision == null && (c.trim = true), c = op(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(Zw(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function tS() {
  const e7 = sp(Ku()).domain([1, 10]);
  return e7.copy = () => ns(e7, tS()).base(e7.base()), tr.apply(e7, arguments), e7;
}
function dv(e7) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e7));
  };
}
function pv(e7) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e7;
  };
}
function cp(e7) {
  var t = 1, r = e7(dv(t), pv(t));
  return r.constant = function(n) {
    return arguments.length ? e7(dv(t = +n), pv(t)) : t;
  }, Sn(r);
}
function eS() {
  var e7 = cp(Ku());
  return e7.copy = function() {
    return ns(e7, eS()).constant(e7.constant());
  }, tr.apply(e7, arguments);
}
function yv(e7) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e7) : Math.pow(t, e7);
  };
}
function IU(e7) {
  return e7 < 0 ? -Math.sqrt(-e7) : Math.sqrt(e7);
}
function EU(e7) {
  return e7 < 0 ? -e7 * e7 : e7 * e7;
}
function up(e7) {
  var t = e7(be, be), r = 1;
  function n() {
    return r === 1 ? e7(be, be) : r === 0.5 ? e7(IU, EU) : e7(yv(r), yv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Sn(t);
}
function lp() {
  var e7 = up(Ku());
  return e7.copy = function() {
    return ns(e7, lp()).exponent(e7.exponent());
  }, tr.apply(e7, arguments), e7;
}
function $U() {
  return lp.apply(null, arguments).exponent(0.5);
}
function mv(e7) {
  return Math.sign(e7) * e7 * e7;
}
function MU(e7) {
  return Math.sign(e7) * Math.sqrt(Math.abs(e7));
}
function rS() {
  var e7 = ip(), t = [0, 1], r = false, n;
  function i(a) {
    var o = MU(e7(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e7.invert(mv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e7.domain(a), i) : e7.domain();
  }, i.range = function(a) {
    return arguments.length ? (e7.range((t = Array.from(a, Bc)).map(mv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e7.clamp(a), i) : e7.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return rS(e7.domain(), t).round(r).clamp(e7.clamp()).unknown(n);
  }, tr.apply(i, arguments), Sn(i);
}
function nS() {
  var e7 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = BF(e7, o / s);
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
    return e7.sort(hn), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return nS().domain(e7).range(t).unknown(n);
  }, tr.apply(a, arguments);
}
function iS() {
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
    return iS().domain([e7, t]).range(i).unknown(a);
  }, tr.apply(Sn(o), arguments);
}
function aS() {
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
    return aS().domain(e7).range(t).unknown(r);
  }, tr.apply(i, arguments);
}
const Wl = /* @__PURE__ */ new Date(), Vl = /* @__PURE__ */ new Date();
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
  }), r && (i.count = (a, o) => (Wl.setTime(+a), Vl.setTime(+o), e7(Wl), e7(Vl), Math.floor(r(Wl, Vl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Fc = oe(() => {
}, (e7, t) => {
  e7.setTime(+e7 + t);
}, (e7, t) => t - e7);
Fc.every = (e7) => (e7 = Math.floor(e7), !isFinite(e7) || !(e7 > 0) ? null : e7 > 1 ? oe((t) => {
  t.setTime(Math.floor(t / e7) * e7);
}, (t, r) => {
  t.setTime(+t + r * e7);
}, (t, r) => (r - t) / e7) : Fc);
Fc.range;
const kr = 1e3, He = kr * 60, Lr = He * 60, Vr = Lr * 24, fp = Vr * 7, vv = Vr * 30, ql = Vr * 365, Rn = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds());
}, (e7, t) => {
  e7.setTime(+e7 + t * kr);
}, (e7, t) => (t - e7) / kr, (e7) => e7.getUTCSeconds());
Rn.range;
const hp = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * kr);
}, (e7, t) => {
  e7.setTime(+e7 + t * He);
}, (e7, t) => (t - e7) / He, (e7) => e7.getMinutes());
hp.range;
const dp = oe((e7) => {
  e7.setUTCSeconds(0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * He);
}, (e7, t) => (t - e7) / He, (e7) => e7.getUTCMinutes());
dp.range;
const pp = oe((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * kr - e7.getMinutes() * He);
}, (e7, t) => {
  e7.setTime(+e7 + t * Lr);
}, (e7, t) => (t - e7) / Lr, (e7) => e7.getHours());
pp.range;
const yp = oe((e7) => {
  e7.setUTCMinutes(0, 0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * Lr);
}, (e7, t) => (t - e7) / Lr, (e7) => e7.getUTCHours());
yp.range;
const is = oe((e7) => e7.setHours(0, 0, 0, 0), (e7, t) => e7.setDate(e7.getDate() + t), (e7, t) => (t - e7 - (t.getTimezoneOffset() - e7.getTimezoneOffset()) * He) / Vr, (e7) => e7.getDate() - 1);
is.range;
const Yu = oe((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / Vr, (e7) => e7.getUTCDate() - 1);
Yu.range;
const oS = oe((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / Vr, (e7) => Math.floor(e7 / Vr));
oS.range;
function ni(e7) {
  return oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e7) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * He) / fp);
}
const Xu = ni(0), Uc = ni(1), DU = ni(2), NU = ni(3), qi = ni(4), CU = ni(5), jU = ni(6);
Xu.range;
Uc.range;
DU.range;
NU.range;
qi.range;
CU.range;
jU.range;
function ii(e7) {
  return oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e7) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / fp);
}
const Ju = ii(0), zc = ii(1), BU = ii(2), RU = ii(3), Gi = ii(4), kU = ii(5), LU = ii(6);
Ju.range;
zc.range;
BU.range;
RU.range;
Gi.range;
kU.range;
LU.range;
const mp = oe((e7) => {
  e7.setDate(1), e7.setHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setMonth(e7.getMonth() + t);
}, (e7, t) => t.getMonth() - e7.getMonth() + (t.getFullYear() - e7.getFullYear()) * 12, (e7) => e7.getMonth());
mp.range;
const vp = oe((e7) => {
  e7.setUTCDate(1), e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCMonth(e7.getUTCMonth() + t);
}, (e7, t) => t.getUTCMonth() - e7.getUTCMonth() + (t.getUTCFullYear() - e7.getUTCFullYear()) * 12, (e7) => e7.getUTCMonth());
vp.range;
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
function sS(e7, t, r, n, i, a) {
  const o = [[Rn, 1, kr], [Rn, 5, 5 * kr], [Rn, 15, 15 * kr], [Rn, 30, 30 * kr], [a, 1, He], [a, 5, 5 * He], [a, 15, 15 * He], [a, 30, 30 * He], [i, 1, Lr], [i, 3, 3 * Lr], [i, 6, 6 * Lr], [i, 12, 12 * Lr], [n, 1, Vr], [n, 2, 2 * Vr], [r, 1, fp], [t, 1, vv], [t, 3, 3 * vv], [e7, 1, ql]];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), y = d ? d.range(u, +l + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = Zd(([, , p]) => p).right(o, h);
    if (d === o.length) return e7.every(Qf(u / ql, l / ql, f));
    if (d === 0) return Fc.every(Math.max(Qf(u, l, f), 1));
    const [y, m] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(m);
  }
  return [s, c];
}
const [FU, UU] = sS(Gr, vp, Ju, oS, yp, dp), [zU, WU] = sS(qr, mp, Xu, is, pp, hp);
function Gl(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
    return t.setFullYear(e7.y), t;
  }
  return new Date(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
}
function Hl(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(Date.UTC(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
    return t.setUTCFullYear(e7.y), t;
  }
  return new Date(Date.UTC(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
}
function Da(e7, t, r) {
  return { y: e7, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function VU(e7) {
  var t = e7.dateTime, r = e7.date, n = e7.time, i = e7.periods, a = e7.days, o = e7.shortDays, s = e7.months, c = e7.shortMonths, u = Na(i), l = Ca(i), f = Na(a), h = Ca(a), d = Na(o), y = Ca(o), m = Na(s), p = Ca(s), b = Na(c), _ = Ca(c), S = { a: R, A: F, b: U, B: q, c: null, d: Ov, e: Ov, f: d3, g: O3, G: A3, H: l3, I: f3, j: h3, L: cS, m: p3, M: y3, p: nt, q: W, Q: Pv, s: Tv, S: m3, u: v3, U: g3, V: b3, w: _3, W: w3, x: null, X: null, y: S3, Y: x3, Z: P3, "%": Av }, w = { a: at, A: Rt, b: Yt, B: Me, c: null, d: xv, e: xv, f: $3, g: F3, G: z3, H: T3, I: I3, j: E3, L: lS, m: M3, M: D3, p: An, q: we, Q: Pv, s: Tv, S: N3, u: C3, U: j3, V: B3, w: R3, W: k3, x: null, X: null, y: L3, Y: U3, Z: W3, "%": Av }, v = { a: $, A: E, b: I, B: j, c: N, d: wv, e: wv, f: o3, g: _v, G: bv, H: Sv, I: Sv, j: r3, L: a3, m: e32, M: n3, p: T, q: t3, Q: c3, s: u3, S: i3, u: YU, U: XU, V: JU, w: KU, W: QU, x: M, X: C, y: _v, Y: bv, Z: ZU, "%": s3 };
  S.x = g(r, S), S.X = g(n, S), S.c = g(t, S), w.x = g(r, w), w.X = g(n, w), w.c = g(t, w);
  function g(z, ft) {
    return function(ht) {
      var k = [], qt = -1, bt = 0, Qt = z.length, Zt, Se, tn;
      for (ht instanceof Date || (ht = /* @__PURE__ */ new Date(+ht)); ++qt < Qt; ) z.charCodeAt(qt) === 37 && (k.push(z.slice(bt, qt)), (Se = gv[Zt = z.charAt(++qt)]) != null ? Zt = z.charAt(++qt) : Se = Zt === "e" ? " " : "0", (tn = ft[Zt]) && (Zt = tn(ht, Se)), k.push(Zt), bt = qt + 1);
      return k.push(z.slice(bt, qt)), k.join("");
    };
  }
  function O(z, ft) {
    return function(ht) {
      var k = Da(1900, void 0, 1), qt = P(k, z, ht += "", 0), bt, Qt;
      if (qt != ht.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (ft && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (bt = Hl(Da(k.y, 0, 1)), Qt = bt.getUTCDay(), bt = Qt > 4 || Qt === 0 ? zc.ceil(bt) : zc(bt), bt = Yu.offset(bt, (k.V - 1) * 7), k.y = bt.getUTCFullYear(), k.m = bt.getUTCMonth(), k.d = bt.getUTCDate() + (k.w + 6) % 7) : (bt = Gl(Da(k.y, 0, 1)), Qt = bt.getDay(), bt = Qt > 4 || Qt === 0 ? Uc.ceil(bt) : Uc(bt), bt = is.offset(bt, (k.V - 1) * 7), k.y = bt.getFullYear(), k.m = bt.getMonth(), k.d = bt.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Qt = "Z" in k ? Hl(Da(k.y, 0, 1)).getUTCDay() : Gl(Da(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Qt + 5) % 7 : k.w + k.U * 7 - (Qt + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Hl(k)) : Gl(k);
    };
  }
  function P(z, ft, ht, k) {
    for (var qt = 0, bt = ft.length, Qt = ht.length, Zt, Se; qt < bt; ) {
      if (k >= Qt) return -1;
      if (Zt = ft.charCodeAt(qt++), Zt === 37) {
        if (Zt = ft.charAt(qt++), Se = v[Zt in gv ? ft.charAt(qt++) : Zt], !Se || (k = Se(z, ht, k)) < 0) return -1;
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
    var k = b.exec(ft.slice(ht));
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
  function Yt(z) {
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
    var ft = g(z += "", S);
    return ft.toString = function() {
      return z;
    }, ft;
  }, parse: function(z) {
    var ft = O(z += "", false);
    return ft.toString = function() {
      return z;
    }, ft;
  }, utcFormat: function(z) {
    var ft = g(z += "", w);
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
var gv = { "-": "", _: " ", 0: "0" }, ce = /^\s*\d+/, qU = /^%/, GU = /[\\^$*+?|[\]().{}]/g;
function wt(e7, t, r) {
  var n = e7 < 0 ? "-" : "", i = (n ? -e7 : e7) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function HU(e7) {
  return e7.replace(GU, "\\$&");
}
function Na(e7) {
  return new RegExp("^(?:" + e7.map(HU).join("|") + ")", "i");
}
function Ca(e7) {
  return new Map(e7.map((t, r) => [t.toLowerCase(), r]));
}
function KU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.w = +n[0], r + n[0].length) : -1;
}
function YU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.u = +n[0], r + n[0].length) : -1;
}
function XU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.U = +n[0], r + n[0].length) : -1;
}
function JU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.V = +n[0], r + n[0].length) : -1;
}
function QU(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.W = +n[0], r + n[0].length) : -1;
}
function bv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 4));
  return n ? (e7.y = +n[0], r + n[0].length) : -1;
}
function _v(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function ZU(e7, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e7.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function t3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e7.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function e32(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.m = n[0] - 1, r + n[0].length) : -1;
}
function wv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.d = +n[0], r + n[0].length) : -1;
}
function r3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e7.m = 0, e7.d = +n[0], r + n[0].length) : -1;
}
function Sv(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.H = +n[0], r + n[0].length) : -1;
}
function n3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.M = +n[0], r + n[0].length) : -1;
}
function i3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e7.S = +n[0], r + n[0].length) : -1;
}
function a3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e7.L = +n[0], r + n[0].length) : -1;
}
function o3(e7, t, r) {
  var n = ce.exec(t.slice(r, r + 6));
  return n ? (e7.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function s3(e7, t, r) {
  var n = qU.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function c3(e7, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e7.Q = +n[0], r + n[0].length) : -1;
}
function u3(e7, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e7.s = +n[0], r + n[0].length) : -1;
}
function Ov(e7, t) {
  return wt(e7.getDate(), t, 2);
}
function l3(e7, t) {
  return wt(e7.getHours(), t, 2);
}
function f3(e7, t) {
  return wt(e7.getHours() % 12 || 12, t, 2);
}
function h3(e7, t) {
  return wt(1 + is.count(qr(e7), e7), t, 3);
}
function cS(e7, t) {
  return wt(e7.getMilliseconds(), t, 3);
}
function d3(e7, t) {
  return cS(e7, t) + "000";
}
function p3(e7, t) {
  return wt(e7.getMonth() + 1, t, 2);
}
function y3(e7, t) {
  return wt(e7.getMinutes(), t, 2);
}
function m3(e7, t) {
  return wt(e7.getSeconds(), t, 2);
}
function v3(e7) {
  var t = e7.getDay();
  return t === 0 ? 7 : t;
}
function g3(e7, t) {
  return wt(Xu.count(qr(e7) - 1, e7), t, 2);
}
function uS(e7) {
  var t = e7.getDay();
  return t >= 4 || t === 0 ? qi(e7) : qi.ceil(e7);
}
function b3(e7, t) {
  return e7 = uS(e7), wt(qi.count(qr(e7), e7) + (qr(e7).getDay() === 4), t, 2);
}
function _3(e7) {
  return e7.getDay();
}
function w3(e7, t) {
  return wt(Uc.count(qr(e7) - 1, e7), t, 2);
}
function S3(e7, t) {
  return wt(e7.getFullYear() % 100, t, 2);
}
function O3(e7, t) {
  return e7 = uS(e7), wt(e7.getFullYear() % 100, t, 2);
}
function x3(e7, t) {
  return wt(e7.getFullYear() % 1e4, t, 4);
}
function A3(e7, t) {
  var r = e7.getDay();
  return e7 = r >= 4 || r === 0 ? qi(e7) : qi.ceil(e7), wt(e7.getFullYear() % 1e4, t, 4);
}
function P3(e7) {
  var t = e7.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + wt(t / 60 | 0, "0", 2) + wt(t % 60, "0", 2);
}
function xv(e7, t) {
  return wt(e7.getUTCDate(), t, 2);
}
function T3(e7, t) {
  return wt(e7.getUTCHours(), t, 2);
}
function I3(e7, t) {
  return wt(e7.getUTCHours() % 12 || 12, t, 2);
}
function E3(e7, t) {
  return wt(1 + Yu.count(Gr(e7), e7), t, 3);
}
function lS(e7, t) {
  return wt(e7.getUTCMilliseconds(), t, 3);
}
function $3(e7, t) {
  return lS(e7, t) + "000";
}
function M3(e7, t) {
  return wt(e7.getUTCMonth() + 1, t, 2);
}
function D3(e7, t) {
  return wt(e7.getUTCMinutes(), t, 2);
}
function N3(e7, t) {
  return wt(e7.getUTCSeconds(), t, 2);
}
function C3(e7) {
  var t = e7.getUTCDay();
  return t === 0 ? 7 : t;
}
function j3(e7, t) {
  return wt(Ju.count(Gr(e7) - 1, e7), t, 2);
}
function fS(e7) {
  var t = e7.getUTCDay();
  return t >= 4 || t === 0 ? Gi(e7) : Gi.ceil(e7);
}
function B3(e7, t) {
  return e7 = fS(e7), wt(Gi.count(Gr(e7), e7) + (Gr(e7).getUTCDay() === 4), t, 2);
}
function R3(e7) {
  return e7.getUTCDay();
}
function k3(e7, t) {
  return wt(zc.count(Gr(e7) - 1, e7), t, 2);
}
function L3(e7, t) {
  return wt(e7.getUTCFullYear() % 100, t, 2);
}
function F3(e7, t) {
  return e7 = fS(e7), wt(e7.getUTCFullYear() % 100, t, 2);
}
function U3(e7, t) {
  return wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function z3(e7, t) {
  var r = e7.getUTCDay();
  return e7 = r >= 4 || r === 0 ? Gi(e7) : Gi.ceil(e7), wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function W3() {
  return "+0000";
}
function Av() {
  return "%";
}
function Pv(e7) {
  return +e7;
}
function Tv(e7) {
  return Math.floor(+e7 / 1e3);
}
var ui, hS, dS;
V3({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function V3(e7) {
  return ui = VU(e7), hS = ui.format, ui.parse, dS = ui.utcFormat, ui.utcParse, ui;
}
function q3(e7) {
  return new Date(e7);
}
function G3(e7) {
  return e7 instanceof Date ? +e7 : +/* @__PURE__ */ new Date(+e7);
}
function gp(e7, t, r, n, i, a, o, s, c, u) {
  var l = ip(), f = l.invert, h = l.domain, d = u(".%L"), y = u(":%S"), m = u("%I:%M"), p = u("%I %p"), b = u("%a %d"), _ = u("%b %d"), S = u("%B"), w = u("%Y");
  function v(g) {
    return (c(g) < g ? d : s(g) < g ? y : o(g) < g ? m : a(g) < g ? p : n(g) < g ? i(g) < g ? b : _ : r(g) < g ? S : w)(g);
  }
  return l.invert = function(g) {
    return new Date(f(g));
  }, l.domain = function(g) {
    return arguments.length ? h(Array.from(g, G3)) : h().map(q3);
  }, l.ticks = function(g) {
    var O = h();
    return e7(O[0], O[O.length - 1], g ?? 10);
  }, l.tickFormat = function(g, O) {
    return O == null ? v : u(O);
  }, l.nice = function(g) {
    var O = h();
    return (!g || typeof g.range != "function") && (g = t(O[0], O[O.length - 1], g ?? 10)), g ? h(Zw(O, g)) : l;
  }, l.copy = function() {
    return ns(l, gp(e7, t, r, n, i, a, o, s, c, u));
  }, l;
}
function H3() {
  return tr.apply(gp(zU, WU, qr, mp, Xu, is, pp, hp, Rn, hS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function K3() {
  return tr.apply(gp(FU, UU, Gr, vp, Ju, Yu, yp, dp, Rn, dS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Qu() {
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
  return u.range = l(Sa), u.rangeRound = l(np), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e7), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function On(e7, t) {
  return t.domain(e7.domain()).interpolator(e7.interpolator()).clamp(e7.clamp()).unknown(e7.unknown());
}
function pS() {
  var e7 = Sn(Qu()(be));
  return e7.copy = function() {
    return On(e7, pS());
  }, Zr.apply(e7, arguments);
}
function yS() {
  var e7 = sp(Qu()).domain([1, 10]);
  return e7.copy = function() {
    return On(e7, yS()).base(e7.base());
  }, Zr.apply(e7, arguments);
}
function mS() {
  var e7 = cp(Qu());
  return e7.copy = function() {
    return On(e7, mS()).constant(e7.constant());
  }, Zr.apply(e7, arguments);
}
function bp() {
  var e7 = up(Qu());
  return e7.copy = function() {
    return On(e7, bp()).exponent(e7.exponent());
  }, Zr.apply(e7, arguments);
}
function Y3() {
  return bp.apply(null, arguments).exponent(0.5);
}
function vS() {
  var e7 = [], t = be;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((es(e7, n, 1) - 1) / (e7.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e7.slice();
    e7 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e7.push(i);
    return e7.sort(hn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e7.map((n, i) => t(i / (e7.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => jF(e7, a / n));
  }, r.copy = function() {
    return vS(t).domain(e7);
  }, Zr.apply(r, arguments);
}
function Zu() {
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
      var b, _, S;
      return arguments.length ? ([b, _, S] = p, u = sU(m, [b, _, S]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = y(Sa), d.rangeRound = y(np), d.unknown = function(m) {
    return arguments.length ? (h = m, d) : h;
  }, function(m) {
    return l = m, i = m(e7), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function gS() {
  var e7 = Sn(Zu()(be));
  return e7.copy = function() {
    return On(e7, gS());
  }, Zr.apply(e7, arguments);
}
function bS() {
  var e7 = sp(Zu()).domain([0.1, 1, 10]);
  return e7.copy = function() {
    return On(e7, bS()).base(e7.base());
  }, Zr.apply(e7, arguments);
}
function _S() {
  var e7 = cp(Zu());
  return e7.copy = function() {
    return On(e7, _S()).constant(e7.constant());
  }, Zr.apply(e7, arguments);
}
function _p() {
  var e7 = up(Zu());
  return e7.copy = function() {
    return On(e7, _p()).exponent(e7.exponent());
  }, Zr.apply(e7, arguments);
}
function X3() {
  return _p.apply(null, arguments).exponent(0.5);
}
const Iv = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: go, scaleDiverging: gS, scaleDivergingLog: bS, scaleDivergingPow: _p, scaleDivergingSqrt: X3, scaleDivergingSymlog: _S, scaleIdentity: Qw, scaleImplicit: Zf, scaleLinear: Lc, scaleLog: tS, scaleOrdinal: tp, scalePoint: Ja, scalePow: lp, scaleQuantile: nS, scaleQuantize: iS, scaleRadial: rS, scaleSequential: pS, scaleSequentialLog: yS, scaleSequentialPow: bp, scaleSequentialQuantile: vS, scaleSequentialSqrt: Y3, scaleSequentialSymlog: mS, scaleSqrt: $U, scaleSymlog: eS, scaleThreshold: aS, scaleTime: H3, scaleUtc: K3, tickFormat: Jw }, Symbol.toStringTag, { value: "Module" }));
var J3 = da;
function Q3(e7, t, r) {
  for (var n = -1, i = e7.length; ++n < i; ) {
    var a = e7[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !J3(o) : r(o, s))) var s = o, c = a;
  }
  return c;
}
var wS = Q3;
function Z3(e7, t) {
  return e7 > t;
}
var t8 = Z3, e8 = wS, r8 = t8, n8 = wa;
function i8(e7) {
  return e7 && e7.length ? e8(e7, n8, r8) : void 0;
}
var a8 = i8;
const un = Bt(a8);
function o8(e7, t) {
  return e7 < t;
}
var s8 = o8, c8 = wS, u8 = s8, l8 = wa;
function f8(e7) {
  return e7 && e7.length ? c8(e7, l8, u8) : void 0;
}
var h8 = f8;
const tl = Bt(h8);
var d8 = Cd, p8 = _n, y8 = Mw, m8 = $e;
function v8(e7, t) {
  var r = m8(e7) ? d8 : y8;
  return r(e7, p8(t));
}
var g8 = v8, b8 = Ew, _8 = g8;
function w8(e7, t) {
  return b8(_8(e7, t), 1);
}
var S8 = w8;
const O8 = Bt(S8);
var x8 = Kd;
function A8(e7, t) {
  return x8(e7, t);
}
var P8 = A8;
const Xn = Bt(P8);
var Oa = 1e9, T8 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Sp, Ut = true, Qe = "[DecimalError] ", Wn = Qe + "Invalid argument: ", wp = Qe + "Exponent out of range: ", xa = Math.floor, Nn = Math.pow, I8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Re, se = 1e7, Lt = 7, SS = 9007199254740991, Wc = xa(SS / Lt), V = {};
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
  return e7 = new t.constructor(e7), t.s == e7.s ? AS(t, e7) : OS(t, (e7.s = -e7.s, e7));
};
V.modulo = V.mod = function(e7) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e7 = new n(e7), !e7.s) throw Error(Qe + "NaN");
  return r.s ? (Ut = false, t = Wr(r, e7, 0, 1).times(e7), Ut = true, r.minus(t)) : Nt(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return xS(this);
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
  return e7 = new t.constructor(e7), t.s == e7.s ? OS(t, e7) : AS(t, (e7.s = -e7.s, e7));
};
V.precision = V.sd = function(e7) {
  var t, r, n, i = this;
  if (e7 !== void 0 && e7 !== !!e7 && e7 !== 1 && e7 !== 0) throw Error(Wn + e7);
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
  for (e7 = Jt(s), Ut = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = wr(s.d), (t.length + e7) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e7 = xa((e7 + 1) / 2) - (e7 < 0 || e7 % 2), i == 1 / 0 ? t = "5e" + e7 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e7), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Wr(s, a, o + 2)).times(0.5), wr(a.d).slice(0, o) === (t = wr(n.d)).slice(0, o)) {
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
  return r = new n(r), e7 === void 0 ? r : (Er(e7, 0, Oa), t === void 0 ? t = n.rounding : Er(t, 0, 8), Nt(r, e7 + Jt(r) + 1, t));
};
V.toExponential = function(e7, t) {
  var r, n = this, i = n.constructor;
  return e7 === void 0 ? r = Jn(n, true) : (Er(e7, 0, Oa), t === void 0 ? t = i.rounding : Er(t, 0, 8), n = Nt(new i(n), e7 + 1, t), r = Jn(n, true, e7 + 1)), r;
};
V.toFixed = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? Jn(i) : (Er(e7, 0, Oa), t === void 0 ? t = a.rounding : Er(t, 0, 8), n = Nt(new a(i), e7 + Jt(i) + 1, t), r = Jn(n.abs(), false, e7 + Jt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
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
    if ((r = l < 0 ? -l : l) <= SS) {
      for (i = new c(Re), t = Math.ceil(n / Lt + 4), Ut = false; r % 2 && (i = i.times(s), $v(i.d, t)), r = xa(r / 2), r !== 0; ) s = s.times(s), $v(s.d, t);
      return Ut = true, e7.s < 0 ? new c(Re).div(i) : Nt(i, n);
    }
  } else if (a < 0) throw Error(Qe + "NaN");
  return a = a < 0 && e7.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ut = false, i = e7.times(Oo(s, n + u)), Ut = true, i = xS(i), i.s = a, i;
};
V.toPrecision = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? (r = Jt(i), n = Jn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Er(e7, 1, Oa), t === void 0 ? t = a.rounding : Er(t, 0, 8), i = Nt(new a(i), e7, t), r = Jt(i), n = Jn(i, e7 <= r || r <= a.toExpNeg, e7)), n;
};
V.toSignificantDigits = V.tosd = function(e7, t) {
  var r = this, n = r.constructor;
  return e7 === void 0 ? (e7 = n.precision, t = n.rounding) : (Er(e7, 1, Oa), t === void 0 ? t = n.rounding : Er(t, 0, 8)), Nt(new n(r), e7, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e7 = this, t = Jt(e7), r = e7.constructor;
  return Jn(e7, t <= r.toExpNeg || t >= r.toExpPos);
};
function OS(e7, t) {
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
function Er(e7, t, r) {
  if (e7 !== ~~e7 || e7 < t || e7 > r) throw Error(Wn + e7);
}
function wr(e7) {
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
    var s, c, u, l, f, h, d, y, m, p, b, _, S, w, v, g, O, P, T = n.constructor, $ = n.s == i.s ? 1 : -1, E = n.d, I = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(Qe + "Division by zero");
    for (c = n.e - i.e, O = I.length, v = E.length, d = new T($), y = d.d = [], u = 0; I[u] == (E[u] || 0); ) ++u;
    if (I[u] > (E[u] || 0) && --c, a == null ? _ = a = T.precision : o ? _ = a + (Jt(n) - Jt(i)) + 1 : _ = a, _ < 0) return new T(0);
    if (_ = _ / Lt + 2 | 0, u = 0, O == 1) for (l = 0, I = I[0], _++; (u < v || l) && _--; u++) S = l * se + (E[u] || 0), y[u] = S / I | 0, l = S % I | 0;
    else {
      for (l = se / (I[0] + 1) | 0, l > 1 && (I = e7(I, l), E = e7(E, l), O = I.length, v = E.length), w = O, m = E.slice(0, O), p = m.length; p < O; ) m[p++] = 0;
      P = I.slice(), P.unshift(0), g = I[0], I[1] >= se / 2 && ++g;
      do
        l = 0, s = t(I, m, O, p), s < 0 ? (b = m[0], O != p && (b = b * se + (m[1] || 0)), l = b / g | 0, l > 1 ? (l >= se && (l = se - 1), f = e7(I, l), h = f.length, p = m.length, s = t(f, m, h, p), s == 1 && (l--, r(f, O < h ? P : I, h))) : (l == 0 && (s = l = 1), f = I.slice()), h = f.length, h < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(I, m, O, p), s < 1 && (l++, r(m, O < p ? P : I, p))), p = m.length) : s === 0 && (l++, m = [0]), y[u++] = l, s && m[0] ? m[p++] = E[w] || 0 : (m = [E[w]], p = 1);
      while ((w++ < v || m[0] !== void 0) && _--);
    }
    return y[0] || y.shift(), d.e = c, Nt(d, o ? a + Jt(d) + 1 : a);
  };
}();
function xS(e7, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e7.constructor, f = l.precision;
  if (Jt(e7) > 16) throw Error(wp + Jt(e7));
  if (!e7.s) return new l(Re);
  for (Ut = false, s = f, o = new l(0.03125); e7.abs().gte(0.1); ) e7 = e7.times(o), u += 5;
  for (n = Math.log(Nn(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(Re), l.precision = s; ; ) {
    if (i = Nt(i.times(e7), s), r = r.times(++c), o = a.plus(Wr(i, r, s)), wr(o.d).slice(0, s) === wr(a.d).slice(0, s)) {
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
function Kl(e7, t, r) {
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
  if (t == null ? (Ut = false, u = p) : u = t, d.eq(10)) return t == null && (Ut = true), Kl(m, u);
  if (u += h, m.precision = u, r = wr(y), n = r.charAt(0), a = Jt(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e7), r = wr(d.d), n = r.charAt(0), f++;
    a = Jt(d), n > 1 ? (d = new m("0." + r), a++) : d = new m(n + "." + r.slice(1));
  } else return c = Kl(m, u + 2, p).times(a + ""), d = Oo(new m(n + "." + r.slice(1)), u - h).plus(c), m.precision = p, t == null ? (Ut = true, Nt(d, p)) : d;
  for (s = o = d = Wr(d.minus(Re), d.plus(Re), u), l = Nt(d.times(d), u), i = 3; ; ) {
    if (o = Nt(o.times(l), u), c = s.plus(Wr(o, new m(i), u)), wr(c.d).slice(0, u) === wr(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(Kl(m, u + 2, p).times(a + ""))), s = Wr(s, new m(f), u), m.precision = p, t == null ? (Ut = true, Nt(s, p)) : s;
    s = c, i += 2;
  }
}
function Ev(e7, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e7.e = xa(r / Lt), e7.d = [], n = (r + 1) % Lt, r < 0 && (n += Lt), n < i) {
      for (n && e7.d.push(+t.slice(0, n)), i -= Lt; n < i; ) e7.d.push(+t.slice(n, n += Lt));
      t = t.slice(n), n = Lt - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e7.d.push(+t), Ut && (e7.e > Wc || e7.e < -Wc)) throw Error(wp + r);
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
  if (Ut && (e7.e > Wc || e7.e < -Wc)) throw Error(wp + Jt(e7));
  return e7;
}
function AS(e7, t) {
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
function Jn(e7, t, r) {
  var n, i = Jt(e7), a = wr(e7.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + sn(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + sn(-i - 1) + a, r && (n = r - o) > 0 && (a += sn(n))) : i >= o ? (a += sn(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + sn(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += sn(n))), e7.s < 0 ? "-" + a : a;
}
function $v(e7, t) {
  if (e7.length > t) return e7.length = t, true;
}
function PS(e7) {
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
      return Ev(o, a.toString());
    } else if (typeof a != "string") throw Error(Wn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, I8.test(a)) Ev(o, a);
    else throw Error(Wn + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = PS, i.config = i.set = E8, e7 === void 0 && (e7 = {}), e7) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e7.hasOwnProperty(r = n[t++]) || (e7[r] = this[r]);
  return i.config(e7), i;
}
function E8(e7) {
  if (!e7 || typeof e7 != "object") throw Error(Qe + "Object expected");
  var t, r, n, i = ["precision", 1, Oa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e7[r = i[t]]) !== void 0) if (xa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(Wn + r + ": " + n);
  if ((n = e7[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(Wn + r + ": " + n);
  return this;
}
var Sp = PS(T8);
Re = new Sp(1);
const Mt = Sp;
function $8(e7) {
  return C8(e7) || N8(e7) || D8(e7) || M8();
}
function M8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D8(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return nh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nh(e7, t);
  }
}
function N8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function C8(e7) {
  if (Array.isArray(e7)) return nh(e7);
}
function nh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var j8 = function(t) {
  return t;
}, TS = {}, IS = function(t) {
  return t === TS;
}, Mv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && IS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, B8 = function e4(t, r) {
  return t === 1 ? r : Mv(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== TS;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, Mv(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
      var l = i.map(function(f) {
        return IS(f) ? c.shift() : f;
      });
      return r.apply(void 0, $8(l).concat(c));
    }));
  });
}, el = function(t) {
  return B8(t.length, t);
}, ih = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, R8 = el(function(e7, t) {
  return Array.isArray(t) ? t.map(e7) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e7);
}), k8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return j8;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, ah = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, ES = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function L8(e7) {
  var t;
  return e7 === 0 ? t = 1 : t = Math.floor(new Mt(e7).abs().log(10).toNumber()) + 1, t;
}
function F8(e7, t, r) {
  for (var n = new Mt(e7), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var U8 = el(function(e7, t, r) {
  var n = +e7, i = +t;
  return n + r * (i - n);
}), z8 = el(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, (r - e7) / n;
}), W8 = el(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e7) / n));
});
const rl = { rangeStep: F8, getDigitCount: L8, interpolateNumber: U8, uninterpolateNumber: z8, uninterpolateTruncation: W8 };
function oh(e7) {
  return G8(e7) || q8(e7) || $S(e7) || V8();
}
function V8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function G8(e7) {
  if (Array.isArray(e7)) return sh(e7);
}
function xo(e7, t) {
  return Y8(e7) || K8(e7, t) || $S(e7, t) || H8();
}
function H8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $S(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return sh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sh(e7, t);
  }
}
function sh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function K8(e7, t) {
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
function Y8(e7) {
  if (Array.isArray(e7)) return e7;
}
function MS(e7) {
  var t = xo(e7, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function DS(e7, t, r) {
  if (e7.lte(0)) return new Mt(0);
  var n = rl.getDigitCount(e7.toNumber()), i = new Mt(10).pow(n), a = e7.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Mt(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new Mt(Math.ceil(c));
}
function X8(e7, t, r) {
  var n = 1, i = new Mt(e7);
  if (!i.isint() && r) {
    var a = Math.abs(e7);
    a < 1 ? (n = new Mt(10).pow(rl.getDigitCount(e7) - 1), i = new Mt(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Mt(Math.floor(e7)));
  } else e7 === 0 ? i = new Mt(Math.floor((t - 1) / 2)) : r || (i = new Mt(Math.floor(e7)));
  var o = Math.floor((t - 1) / 2), s = k8(R8(function(c) {
    return i.add(new Mt(c - o).mul(n)).toNumber();
  }), ih);
  return s(0, t);
}
function NS(e7, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e7) / (r - 1))) return { step: new Mt(0), tickMin: new Mt(0), tickMax: new Mt(0) };
  var a = DS(new Mt(t).sub(e7).div(r - 1), n, i), o;
  e7 <= 0 && t >= 0 ? o = new Mt(0) : (o = new Mt(e7).add(t).div(2), o = o.sub(new Mt(o).mod(a)));
  var s = Math.ceil(o.sub(e7).div(a).toNumber()), c = Math.ceil(new Mt(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? NS(e7, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Mt(s).mul(a)), tickMax: o.add(new Mt(c).mul(a)) });
}
function J8(e7) {
  var t = xo(e7, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = MS([r, n]), c = xo(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(oh(ih(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(oh(ih(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? ah(f) : f;
  }
  if (u === l) return X8(u, i, a);
  var h = NS(u, l, o, a), d = h.step, y = h.tickMin, m = h.tickMax, p = rl.rangeStep(y, m.add(new Mt(0.1).mul(d)), d);
  return r > n ? ah(p) : p;
}
function Q8(e7, t) {
  var r = xo(e7, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = MS([n, i]), s = xo(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) return [n, i];
  if (c === u) return [c];
  var l = Math.max(t, 2), f = DS(new Mt(u).sub(c).div(l - 1), a, 0), h = [].concat(oh(rl.rangeStep(new Mt(c), new Mt(u).sub(new Mt(0.99).mul(f)), f)), [u]);
  return n > i ? ah(h) : h;
}
var Z8 = ES(J8), t6 = ES(Q8), e6 = "Invariant failed";
function Qn(e7, t) {
  throw new Error(e6);
}
var r6 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Hi(e7) {
  "@babel/helpers - typeof";
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e7);
}
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Vc.apply(this, arguments);
}
function n6(e7, t) {
  return s6(e7) || o6(e7, t) || a6(e7, t) || i6();
}
function i6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Dv(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dv(e7, t);
  }
}
function Dv(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function o6(e7, t) {
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
function s6(e7) {
  if (Array.isArray(e7)) return e7;
}
function c6(e7, t) {
  if (e7 == null) return {};
  var r = u6(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function u6(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function l6(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function f6(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, BS(n.key), n);
  }
}
function h6(e7, t, r) {
  return t && f6(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function d6(e7, t, r) {
  return t = qc(t), p6(e7, CS() ? Reflect.construct(t, r || [], qc(e7).constructor) : t.apply(e7, r));
}
function p6(e7, t) {
  if (t && (Hi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return y6(e7);
}
function y6(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function CS() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (CS = function() {
    return !!e7;
  })();
}
function qc(e7) {
  return qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qc(e7);
}
function m6(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && ch(e7, t);
}
function ch(e7, t) {
  return ch = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ch(e7, t);
}
function jS(e7, t, r) {
  return t = BS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function BS(e7) {
  var t = v6(e7, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function v6(e7, t) {
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
    return l6(this, t), d6(this, t, arguments);
  }
  return m6(t, e7), h6(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, h = c6(n, r6), d = ut(h, false);
    this.props.direction === "x" && l.type !== "number" && Qn();
    var y = c.map(function(m) {
      var p = u(m, s), b = p.x, _ = p.y, S = p.value, w = p.errorVal;
      if (!w) return null;
      var v = [], g, O;
      if (Array.isArray(w)) {
        var P = n6(w, 2);
        g = P[0], O = P[1];
      } else g = O = w;
      if (a === "vertical") {
        var T = l.scale, $ = _ + i, E = $ + o, I = $ - o, j = T(S - g), N = T(S + O);
        v.push({ x1: N, y1: E, x2: N, y2: I }), v.push({ x1: j, y1: $, x2: N, y2: $ }), v.push({ x1: j, y1: E, x2: j, y2: I });
      } else if (a === "horizontal") {
        var M = f.scale, C = b + i, R = C - o, F = C + o, U = M(S - g), q = M(S + O);
        v.push({ x1: R, y1: q, x2: F, y2: q }), v.push({ x1: C, y1: U, x2: C, y2: q }), v.push({ x1: R, y1: U, x2: F, y2: U });
      }
      return A.createElement(St, Vc({ className: "recharts-errorBar", key: "bar-".concat(v.map(function(nt) {
        return "".concat(nt.x1, "-").concat(nt.x2, "-").concat(nt.y1, "-").concat(nt.y2);
      })) }, d), v.map(function(nt) {
        return A.createElement("line", Vc({}, nt, { key: "line-".concat(nt.x1, "-").concat(nt.x2, "-").concat(nt.y1, "-").concat(nt.y2) }));
      }));
    });
    return A.createElement(St, { className: "recharts-errorBars" }, y);
  } }]);
}(A.Component);
jS(Aa, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
jS(Aa, "displayName", "ErrorBar");
function Ao(e7) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e7);
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
function En(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nv(Object(r), true).forEach(function(n) {
      g6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function g6(e7, t, r) {
  return t = b6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function b6(e7) {
  var t = _6(e7, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function _6(e7, t) {
  if (Ao(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var RS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = je(r, Un);
  if (!o) return null;
  var s = Un.defaultProps, c = s !== void 0 ? En(En({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var h = f.item, d = f.props, y = d.sectors || d.data || [];
    return l.concat(y.map(function(m) {
      return { type: o.props.iconType || h.props.legendType, value: m.name, color: m.fill, payload: m };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, h = f.type.defaultProps, d = h !== void 0 ? En(En({}, h), f.props) : {}, y = d.dataKey, m = d.name, p = d.legendType, b = d.hide;
    return { inactive: b, dataKey: y, type: c.iconType || p || "square", color: Op(f), value: m || y, payload: d };
  }), En(En(En({}, c), Un.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function Po(e7) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e7);
}
function Cv(e7) {
  return x6(e7) || O6(e7) || S6(e7) || w6();
}
function w6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return uh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e7, t);
  }
}
function O6(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function x6(e7) {
  if (Array.isArray(e7)) return uh(e7);
}
function uh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function jv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gt(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jv(Object(r), true).forEach(function(n) {
      Di(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : jv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Di(e7, t, r) {
  return t = A6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function A6(e7) {
  var t = P6(e7, "string");
  return Po(t) == "symbol" ? t : t + "";
}
function P6(e7, t) {
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
  return ct(e7) || ct(t) ? r : ie(t) ? Ye(e7, t, r) : lt(t) ? t(e7) : r;
}
function Qa(e7, t, r, n) {
  var i = O8(e7, function(s) {
    return ae(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [tl(a), un(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !ct(s);
  }) : i;
  return o.map(function(s) {
    return ie(s) || s instanceof Date ? s : "";
  });
}
var T6 = function(t) {
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
      var b = [Math.min(f, (d + f) / 2), Math.max(f, (d + f) / 2)];
      if (t > b[0] && t <= b[1] || t >= y[0] && t <= y[1]) {
        o = i[u].index;
        break;
      }
    } else {
      var _ = Math.min(l, h), S = Math.max(l, h);
      if (t > (_ + f) / 2 && t <= (S + f) / 2) {
        o = i[u].index;
        break;
      }
    }
  }
  else for (var w = 0; w < s; w++) if (w === 0 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w > 0 && w < s - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w === s - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2) {
    o = n[w].index;
    break;
  }
  return o;
}, Op = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Gt(Gt({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, c;
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
}, I6 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++) for (var l = a[s[c]].stackGroups, f = Object.keys(l), h = 0, d = f.length; h < d; h++) {
    var y = l[f[h]], m = y.items, p = y.cateAxisId, b = m.filter(function(O) {
      return Ur(O.type).indexOf("Bar") >= 0;
    });
    if (b && b.length) {
      var _ = b[0].type.defaultProps, S = _ !== void 0 ? Gt(Gt({}, _), b[0].props) : b[0].props, w = S.barSize, v = S[p];
      o[v] || (o[v] = []);
      var g = ct(w) ? r : w;
      o[v].push({ item: b[0], stackList: b.slice(1), barSize: ct(g) ? void 0 : Yn(g, n, 0) });
    }
  }
  return o;
}, E6 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = Yn(r, i, 0, true), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = false, d = i / c, y = o.reduce(function(w, v) {
      return w + v.barSize || 0;
    }, 0);
    y += (c - 1) * u, y >= i && (y -= (c - 1) * u, u = 0), y >= i && d > 0 && (h = true, d *= 0.9, y = c * d);
    var m = (i - y) / 2 >> 0, p = { offset: m - u, size: 0 };
    l = o.reduce(function(w, v) {
      var g = { item: v.item, position: { offset: p.offset + p.size + u, size: h ? d : v.barSize } }, O = [].concat(Cv(w), [g]);
      return p = O[O.length - 1].position, v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: p });
      }), O;
    }, f);
  } else {
    var b = Yn(n, i, 0, true);
    i - 2 * b - (c - 1) * u <= 0 && (u = 0);
    var _ = (i - 2 * b - (c - 1) * u) / c;
    _ > 1 && (_ >>= 0);
    var S = s === +s ? Math.min(_, s) : _;
    l = o.reduce(function(w, v, g) {
      var O = [].concat(Cv(w), [{ item: v.item, position: { offset: b + (_ + u) * g + (_ - S) / 2, size: S } }]);
      return v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: O[O.length - 1].position });
      }), O;
    }, f);
  }
  return l;
}, $6 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = RS({ children: a, legendWidth: c });
  if (u) {
    var l = i || {}, f = l.width, h = l.height, d = u.align, y = u.verticalAlign, m = u.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && d !== "center" && L(t[d])) return Gt(Gt({}, t), {}, Di({}, d, t[d] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && d === "center") && y !== "middle" && L(t[y])) return Gt(Gt({}, t), {}, Di({}, y, t[y] + (h || 0)));
  }
  return t;
}, M6 = function(t, r, n) {
  return ct(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, kS = function(t, r, n, i, a) {
  var o = r.props.children, s = Te(o, Aa).filter(function(u) {
    return M6(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ae(l, n);
      if (ct(f)) return u;
      var h = Array.isArray(f) ? [tl(f), un(f)] : [f, f], d = c.reduce(function(y, m) {
        var p = ae(l, m, 0), b = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), _ = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(b, y[0]), Math.max(_, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], u[0]), Math.max(d[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, D6 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return kS(t, s, n, a, i);
  }).filter(function(s) {
    return !ct(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, LS = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && kS(t, c, u, i) || Qa(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(c, u) {
    return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++) s[u[l]] || (s[u[l]] = true, c.push(u[l]));
    return c;
  }, []);
}, FS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, US = function(t, r, n, i) {
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
}, Yl = /* @__PURE__ */ new WeakMap(), gs = function(t, r) {
  if (typeof r != "function") return t;
  Yl.has(t) || Yl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Yl.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, N6 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: go(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: Lc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: Ja(), realScaleType: "point" } : a === "category" ? { scale: go(), realScaleType: "band" } : { scale: Lc(), realScaleType: "linear" };
  if (Kn(i)) {
    var c = "scale".concat(Fu(i));
    return { scale: (Iv[c] || Ja)(), realScaleType: Iv[c] ? c : "point" };
  }
  return lt(i) ? { scale: i } : { scale: Ja(), realScaleType: "point" };
}, Bv = 1e-4, C6 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Bv, o = Math.max(i[0], i[1]) + Bv, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, j6 = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, B6 = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, R6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var c = ga(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
  }
}, k6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = ga(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, L6 = { sign: R6, expand: tD, none: Li, silhouette: eD, wiggle: rD, positive: k6 }, F6 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = L6[n], o = ZM().keys(i).value(function(s, c) {
    return +ae(s, c, 0);
  }).order(Cf).offset(a);
  return o(t);
}, U6 = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? Gt(Gt({}, h.type.defaultProps), h.props) : h.props, m = y.stackId, p = y.hide;
    if (p) return f;
    var b = y[n], _ = f[b] || { hasStack: false, stackGroups: {} };
    if (ie(m)) {
      var S = _.stackGroups[m] || { numericAxisId: n, cateAxisId: i, items: [] };
      S.items.push(h), _.hasStack = true, _.stackGroups[m] = S;
    } else _.stackGroups[ri("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
    return Gt(Gt({}, f), {}, Di({}, b, _));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, h) {
    var d = u[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(m, p) {
        var b = d.stackGroups[p];
        return Gt(Gt({}, m), {}, Di({}, p, { numericAxisId: n, cateAxisId: i, items: b.items, stackedData: F6(t, b.items, a) }));
      }, y);
    }
    return Gt(Gt({}, f), {}, Di({}, h, d));
  }, l);
}, z6 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var l = Z8(u, a, s);
    return t.domain([tl(l), un(l)]), { niceTicks: l };
  }
  if (a && i === "number") {
    var f = t.domain(), h = t6(f, a, s);
    return { niceTicks: h };
  }
  return null;
};
function Ki(e7) {
  var t = e7.axis, r = e7.ticks, n = e7.bandSize, i = e7.entry, a = e7.index, o = e7.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ct(i[t.dataKey])) {
      var s = mc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = ae(i, ct(o) ? t.dataKey : o);
  return ct(c) ? null : t.scale(c);
}
var Rv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var c = ae(o, r.dataKey, r.domain[s]);
  return ct(c) ? null : r.scale(c) - a / 2 + i;
}, W6 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, V6 = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Gt(Gt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (ie(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, q6 = function(t) {
  return t.reduce(function(r, n) {
    return [tl(n.concat([r[0]]).filter(L)), un(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, zS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = q6(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, kv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Lv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, lh = function(t, r, n) {
  if (lt(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (kv.test(t[0])) {
    var a = +kv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else lt(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Lv.test(t[1])) {
    var o = +Lv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else lt(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Gc = function(t, r, n) {
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
}, Fv = function(t, r, n) {
  return !t || !t.length || Xn(t, Ye(n, "type.defaultProps.domain")) ? r : t;
}, WS = function(t, r) {
  var n = t.type.defaultProps ? Gt(Gt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return Gt(Gt({}, ut(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: Op(t), value: ae(r, i), type: c, payload: r, chartType: u, hide: l });
};
function To(e7) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e7);
}
function Uv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), true).forEach(function(n) {
      G6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function G6(e7, t, r) {
  return t = H6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function H6(e7) {
  var t = K6(e7, "string");
  return To(t) == "symbol" ? t : t + "";
}
function K6(e7, t) {
  if (To(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Hc = Math.PI / 180, Y6 = function(t) {
  return t * 180 / Math.PI;
}, le = function(t, r, n, i) {
  return { x: t + Math.cos(-Hc * i) * n, y: r + Math.sin(-Hc * i) * n };
}, X6 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, J6 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = X6({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: Y6(u), angleInRadian: u };
}, Q6 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, Z6 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Wv = function(t, r) {
  var n = t.x, i = t.y, a = J6({ x: n, y: i }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u) return false;
  if (o === 0) return true;
  var l = Q6(r), f = l.startAngle, h = l.endAngle, d = s, y;
  if (f <= h) {
    for (; d > h; ) d -= 360;
    for (; d < f; ) d += 360;
    y = d >= f && d <= h;
  } else {
    for (; d > f; ) d -= 360;
    for (; d < h; ) d += 360;
    y = d >= h && d <= f;
  }
  return y ? zv(zv({}, r), {}, { radius: o, angle: Z6(d, r) }) : null;
};
function Io(e7) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e7);
}
var t4 = ["offset"];
function e42(e7) {
  return a4(e7) || i4(e7) || n4(e7) || r4();
}
function r4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n4(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return fh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fh(e7, t);
  }
}
function i4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function a4(e7) {
  if (Array.isArray(e7)) return fh(e7);
}
function fh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function o4(e7, t) {
  if (e7 == null) return {};
  var r = s4(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function s4(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Vv(e7, t) {
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
    t % 2 ? Vv(Object(r), true).forEach(function(n) {
      c4(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function c4(e7, t, r) {
  return t = u4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function u4(e7) {
  var t = l4(e7, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function l4(e7, t) {
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
var f4 = function(t) {
  var r = t.value, n = t.formatter, i = ct(t.children) ? r : t.children;
  return lt(n) ? n(i) : i;
}, h4 = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, d4 = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, h = c.outerRadius, d = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + h) / 2, b = h4(d, y), _ = b >= 0 ? 1 : -1, S, w;
  i === "insideStart" ? (S = d + _ * o, w = m) : i === "insideEnd" ? (S = y - _ * o, w = !m) : i === "end" && (S = y + _ * o, w = m), w = b <= 0 ? w : !w;
  var v = le(u, l, p, S), g = le(u, l, p, S + (w ? 1 : -1) * 359), O = "M".concat(v.x, ",").concat(v.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(g.x, ",").concat(g.y), P = ct(t.id) ? ri("recharts-radial-line-") : t.id;
  return A.createElement("text", Eo({}, n, { dominantBaseline: "central", className: mt("recharts-radial-bar-label", s) }), A.createElement("defs", null, A.createElement("path", { id: P, d: O })), A.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, p4 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, c = a.innerRadius, u = a.outerRadius, l = a.startAngle, f = a.endAngle, h = (l + f) / 2;
  if (i === "outside") {
    var d = le(o, s, u + n, h), y = d.x, m = d.y;
    return { x: y, y: m, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
  var p = (c + u) / 2, b = le(o, s, p, h), _ = b.x, S = b.y;
  return { x: _, y: S, textAnchor: "middle", verticalAnchor: "middle" };
}, y4 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, c = o.y, u = o.width, l = o.height, f = l >= 0 ? 1 : -1, h = f * i, d = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", m = u >= 0 ? 1 : -1, p = m * i, b = m > 0 ? "end" : "start", _ = m > 0 ? "start" : "end";
  if (a === "top") {
    var S = { x: s + u / 2, y: c - f * i, textAnchor: "middle", verticalAnchor: d };
    return ee(ee({}, S), n ? { height: Math.max(c - n.y, 0), width: u } : {});
  }
  if (a === "bottom") {
    var w = { x: s + u / 2, y: c + l + h, textAnchor: "middle", verticalAnchor: y };
    return ee(ee({}, w), n ? { height: Math.max(n.y + n.height - (c + l), 0), width: u } : {});
  }
  if (a === "left") {
    var v = { x: s - p, y: c + l / 2, textAnchor: b, verticalAnchor: "middle" };
    return ee(ee({}, v), n ? { width: Math.max(v.x - n.x, 0), height: l } : {});
  }
  if (a === "right") {
    var g = { x: s + u + p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" };
    return ee(ee({}, g), n ? { width: Math.max(n.x + n.width - g.x, 0), height: l } : {});
  }
  var O = n ? { width: u, height: l } : {};
  return a === "insideLeft" ? ee({ x: s + p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" }, O) : a === "insideRight" ? ee({ x: s + u - p, y: c + l / 2, textAnchor: b, verticalAnchor: "middle" }, O) : a === "insideTop" ? ee({ x: s + u / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, O) : a === "insideBottom" ? ee({ x: s + u / 2, y: c + l - h, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideTopLeft" ? ee({ x: s + p, y: c + h, textAnchor: _, verticalAnchor: y }, O) : a === "insideTopRight" ? ee({ x: s + u - p, y: c + h, textAnchor: b, verticalAnchor: y }, O) : a === "insideBottomLeft" ? ee({ x: s + p, y: c + l - h, textAnchor: _, verticalAnchor: d }, O) : a === "insideBottomRight" ? ee({ x: s + u - p, y: c + l - h, textAnchor: b, verticalAnchor: d }, O) : pa(a) && (L(a.x) || jn(a.x)) && (L(a.y) || jn(a.y)) ? ee({ x: s + Yn(a.x, u), y: c + Yn(a.y, l), textAnchor: "end", verticalAnchor: "end" }, O) : ee({ x: s + u / 2, y: c + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, m4 = function(t) {
  return "cx" in t && L(t.cx);
};
function he(e7) {
  var t = e7.offset, r = t === void 0 ? 5 : t, n = o4(e7, t4), i = ee({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, h = i.textBreakAll;
  if (!a || ct(s) && ct(c) && !B.isValidElement(u) && !lt(u)) return null;
  if (B.isValidElement(u)) return B.cloneElement(u, i);
  var d;
  if (lt(u)) {
    if (d = B.createElement(u, i), B.isValidElement(d)) return d;
  } else d = f4(i);
  var y = m4(a), m = ut(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return d4(i, d, m);
  var p = y ? p4(i) : y4(i);
  return A.createElement(Mc, Eo({ className: mt("recharts-label", f) }, m, p, { breakAll: h }), d);
}
he.displayName = "Label";
var VS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, h = t.y, d = t.top, y = t.left, m = t.width, p = t.height, b = t.clockWise, _ = t.labelViewBox;
  if (_) return _;
  if (L(m) && L(p)) {
    if (L(f) && L(h)) return { x: f, y: h, width: m, height: p };
    if (L(d) && L(y)) return { x: d, y, width: m, height: p };
  }
  return L(f) && L(h) ? { x: f, y: h, width: 0, height: 0 } : L(r) && L(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: l || c || s || 0, clockWise: b } : t.viewBox ? t.viewBox : {};
}, v4 = function(t, r) {
  return t ? t === true ? A.createElement(he, { key: "label-implicit", viewBox: r }) : ie(t) ? A.createElement(he, { key: "label-implicit", viewBox: r, value: t }) : B.isValidElement(t) ? t.type === he ? B.cloneElement(t, { key: "label-implicit", viewBox: r }) : A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : lt(t) ? A.createElement(he, { key: "label-implicit", content: t, viewBox: r }) : pa(t) ? A.createElement(he, Eo({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, g4 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = VS(t), o = Te(i, he).map(function(c, u) {
    return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = v4(t.label, r || a);
  return [s].concat(e42(o));
};
he.parseViewBox = VS;
he.renderCallByParent = g4;
function b4(e7) {
  var t = e7 == null ? 0 : e7.length;
  return t ? e7[t - 1] : void 0;
}
var _4 = b4;
const w4 = Bt(_4);
function $o(e7) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e7);
}
var S4 = ["valueAccessor"], O4 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function x4(e7) {
  return I4(e7) || T4(e7) || P4(e7) || A4();
}
function A4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P4(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return hh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hh(e7, t);
  }
}
function T4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function I4(e7) {
  if (Array.isArray(e7)) return hh(e7);
}
function hh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Kc.apply(this, arguments);
}
function qv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(r), true).forEach(function(n) {
      E4(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function E4(e7, t, r) {
  return t = $4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function $4(e7) {
  var t = M4(e7, "string");
  return $o(t) == "symbol" ? t : t + "";
}
function M4(e7, t) {
  if ($o(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if ($o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Hv(e7, t) {
  if (e7 == null) return {};
  var r = D4(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function D4(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var N4 = function(t) {
  return Array.isArray(t.value) ? w4(t.value) : t.value;
};
function xr(e7) {
  var t = e7.valueAccessor, r = t === void 0 ? N4 : t, n = Hv(e7, S4), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = Hv(n, O4);
  return !i || !i.length ? null : A.createElement(St, { className: "recharts-label-list" }, i.map(function(l, f) {
    var h = ct(a) ? r(l, f) : ae(l && l.payload, a), d = ct(s) ? {} : { id: "".concat(s, "-").concat(f) };
    return A.createElement(he, Kc({}, ut(l, true), u, d, { parentViewBox: l.parentViewBox, value: h, textBreakAll: c, viewBox: he.parseViewBox(ct(o) ? l : Gv(Gv({}, l), {}, { clockWise: o })), key: "label-".concat(f), index: f }));
  }));
}
xr.displayName = "LabelList";
function C4(e7, t) {
  return e7 ? e7 === true ? A.createElement(xr, { key: "labelList-implicit", data: t }) : A.isValidElement(e7) || lt(e7) ? A.createElement(xr, { key: "labelList-implicit", data: t, content: e7 }) : pa(e7) ? A.createElement(xr, Kc({ data: t }, e7, { key: "labelList-implicit" })) : null : null;
}
function j4(e7, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e7 || !e7.children && r && !e7.label) return null;
  var n = e7.children, i = Te(n, xr).map(function(o, s) {
    return B.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = C4(e7.label, t);
  return [a].concat(x4(i));
}
xr.renderCallByParent = j4;
function Mo(e7) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e7);
}
function dh() {
  return dh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, dh.apply(this, arguments);
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
      B4(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function B4(e7, t, r) {
  return t = R4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function R4(e7) {
  var t = k4(e7, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function k4(e7, t) {
  if (Mo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var L4 = function(t, r) {
  var n = sr(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, bs = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / Hc, h = u ? a : a + o * f, d = le(r, n, l, h), y = le(r, n, i, h), m = u ? a - o * f : a, p = le(r, n, l * Math.cos(f * Hc), m);
  return { center: d, circleTangency: y, lineTangency: p, theta: f };
}, qS = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = L4(o, s), u = o + c, l = le(r, n, a, o), f = le(r, n, a, u), h = "M ".concat(l.x, ",").concat(l.y, `
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
}, F4 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = sr(l - u), h = bs({ cx: r, cy: n, radius: a, angle: u, sign: f, cornerRadius: o, cornerIsExternal: c }), d = h.circleTangency, y = h.lineTangency, m = h.theta, p = bs({ cx: r, cy: n, radius: a, angle: l, sign: -f, cornerRadius: o, cornerIsExternal: c }), b = p.circleTangency, _ = p.lineTangency, S = p.theta, w = c ? Math.abs(u - l) : Math.abs(u - l) - m - S;
  if (w < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : qS({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: l });
  var v = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(w > 180), ",").concat(+(f < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, `
  `);
  if (i > 0) {
    var g = bs({ cx: r, cy: n, radius: i, angle: u, sign: f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), O = g.circleTangency, P = g.lineTangency, T = g.theta, $ = bs({ cx: r, cy: n, radius: i, angle: l, sign: -f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), E = $.circleTangency, I = $.lineTangency, j = $.theta, N = c ? Math.abs(u - l) : Math.abs(u - l) - T - j;
    if (N < 0 && o === 0) return "".concat(v, "L").concat(r, ",").concat(n, "Z");
    v += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else v += "L".concat(r, ",").concat(n, "Z");
  return v;
}, U4 = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, GS = function(t) {
  var r = Yv(Yv({}, U4), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, h = r.className;
  if (o < a || l === f) return null;
  var d = mt("recharts-sector", h), y = o - a, m = Yn(s, y, 0, true), p;
  return m > 0 && Math.abs(l - f) < 360 ? p = F4({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(m, y / 2), forceCornerRadius: c, cornerIsExternal: u, startAngle: l, endAngle: f }) : p = qS({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: f }), A.createElement("path", dh({}, ut(r, true), { className: d, d: p, role: "img" }));
};
function Do(e7) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e7);
}
function ph() {
  return ph = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, ph.apply(this, arguments);
}
function Xv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xv(Object(r), true).forEach(function(n) {
      z4(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function z4(e7, t, r) {
  return t = W4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function W4(e7) {
  var t = V4(e7, "string");
  return Do(t) == "symbol" ? t : t + "";
}
function V4(e7, t) {
  if (Do(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Do(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Qv = { curveBasisClosed: zM, curveBasisOpen: WM, curveBasis: UM, curveBumpX: TM, curveBumpY: IM, curveLinearClosed: VM, curveLinear: zu, curveMonotoneX: qM, curveMonotoneY: GM, curveNatural: HM, curveStep: KM, curveStepAfter: XM, curveStepBefore: YM }, _s = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ja = function(t) {
  return t.x;
}, Ba = function(t) {
  return t.y;
}, q4 = function(t, r) {
  if (lt(t)) return t;
  var n = "curve".concat(Fu(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Qv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Qv[n] || zu;
}, G4 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? false : c, l = q4(n, s), f = u ? a.filter(function(m) {
    return _s(m);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = u ? o.filter(function(m) {
      return _s(m);
    }) : o, y = f.map(function(m, p) {
      return Jv(Jv({}, m), {}, { base: d[p] });
    });
    return s === "vertical" ? h = ls().y(Ba).x1(ja).x0(function(m) {
      return m.base.x;
    }) : h = ls().x(ja).y1(Ba).y0(function(m) {
      return m.base.y;
    }), h.defined(_s).curve(l), h(y);
  }
  return s === "vertical" && L(o) ? h = ls().y(Ba).x1(ja).x0(o) : L(o) ? h = ls().x(ja).y1(Ba).y0(o) : h = K_().x(ja).y(Ba), h.defined(_s).curve(l), h(f);
}, Vn = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? G4(t) : i;
  return B.createElement("path", ph({}, ut(t, false), vc(t), { className: mt("recharts-curve", r), d: o, ref: a }));
}, HS = { exports: {} }, H4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", K4 = H4, Y4 = K4;
function KS() {
}
function YS() {
}
YS.resetWarningCache = KS;
var X4 = function() {
  function e7(n, i, a, o, s, c) {
    if (c !== Y4) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e7.isRequired = e7;
  function t() {
    return e7;
  }
  var r = { array: e7, bigint: e7, bool: e7, func: e7, number: e7, object: e7, string: e7, symbol: e7, any: e7, arrayOf: t, element: e7, elementType: e7, instanceOf: t, node: e7, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: YS, resetWarningCache: KS };
  return r.PropTypes = r, r;
};
HS.exports = X4();
var J4 = HS.exports;
const Ot = Bt(J4), { getOwnPropertyNames: Q4, getOwnPropertySymbols: Z4 } = Object, { hasOwnProperty: tz } = Object.prototype;
function Xl(e7, t) {
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
function ez(e7) {
  return e7 == null ? void 0 : e7[Symbol.toStringTag];
}
function Zv(e7) {
  return Q4(e7).concat(Z4(e7));
}
const rz = Object.hasOwn || ((e7, t) => tz.call(e7, t));
function ai(e7, t) {
  return e7 === t || !e7 && !t && e7 !== e7 && t !== t;
}
const nz = "__v", iz = "__o", az = "_owner", { getOwnPropertyDescriptor: tg, keys: eg } = Object;
function oz(e7, t) {
  return e7.byteLength === t.byteLength && Yc(new Uint8Array(e7), new Uint8Array(t));
}
function sz(e7, t, r) {
  let n = e7.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e7[n], t[n], n, n, e7, t, r)) return false;
  return true;
}
function cz(e7, t) {
  return e7.byteLength === t.byteLength && Yc(new Uint8Array(e7.buffer, e7.byteOffset, e7.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function uz(e7, t) {
  return ai(e7.getTime(), t.getTime());
}
function lz(e7, t) {
  return e7.name === t.name && e7.message === t.message && e7.cause === t.cause && e7.stack === t.stack;
}
function fz(e7, t) {
  return e7 === t;
}
function rg(e7, t, r) {
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
const hz = ai;
function dz(e7, t, r) {
  const n = eg(e7);
  let i = n.length;
  if (eg(t).length !== i) return false;
  for (; i-- > 0; ) if (!XS(e7, t, r, n[i])) return false;
  return true;
}
function Ra(e7, t, r) {
  const n = Zv(e7);
  let i = n.length;
  if (Zv(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !XS(e7, t, r, a) || (o = tg(e7, a), s = tg(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function pz(e7, t) {
  return ai(e7.valueOf(), t.valueOf());
}
function yz(e7, t) {
  return e7.source === t.source && e7.flags === t.flags;
}
function ng(e7, t, r) {
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
function Yc(e7, t) {
  let r = e7.byteLength;
  if (t.byteLength !== r || e7.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e7[r] !== t[r]) return false;
  return true;
}
function mz(e7, t) {
  return e7.hostname === t.hostname && e7.pathname === t.pathname && e7.protocol === t.protocol && e7.port === t.port && e7.hash === t.hash && e7.username === t.username && e7.password === t.password;
}
function XS(e7, t, r, n) {
  return (n === az || n === iz || n === nz) && (e7.$$typeof || t.$$typeof) ? true : rz(t, n) && r.equals(e7[n], t[n], n, n, e7, t, r);
}
const vz = "[object ArrayBuffer]", gz = "[object Arguments]", bz = "[object Boolean]", _z = "[object DataView]", wz = "[object Date]", Sz = "[object Error]", Oz = "[object Map]", xz = "[object Number]", Az = "[object Object]", Pz = "[object RegExp]", Tz = "[object Set]", Iz = "[object String]", Ez = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, $z = "[object URL]", Mz = Object.prototype.toString;
function Dz({ areArrayBuffersEqual: e7, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: u, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: y }) {
  return function(p, b, _) {
    if (p === b) return true;
    if (p == null || b == null) return false;
    const S = typeof p;
    if (S !== typeof b) return false;
    if (S !== "object") return S === "number" ? s(p, b, _) : S === "function" ? a(p, b, _) : false;
    const w = p.constructor;
    if (w !== b.constructor) return false;
    if (w === Object) return c(p, b, _);
    if (Array.isArray(p)) return t(p, b, _);
    if (w === Date) return n(p, b, _);
    if (w === RegExp) return l(p, b, _);
    if (w === Map) return o(p, b, _);
    if (w === Set) return f(p, b, _);
    const v = Mz.call(p);
    if (v === wz) return n(p, b, _);
    if (v === Pz) return l(p, b, _);
    if (v === Oz) return o(p, b, _);
    if (v === Tz) return f(p, b, _);
    if (v === Az) return typeof p.then != "function" && typeof b.then != "function" && c(p, b, _);
    if (v === $z) return d(p, b, _);
    if (v === Sz) return i(p, b, _);
    if (v === gz) return c(p, b, _);
    if (Ez[v]) return h(p, b, _);
    if (v === vz) return e7(p, b, _);
    if (v === _z) return r(p, b, _);
    if (v === bz || v === xz || v === Iz) return u(p, b, _);
    if (y) {
      let g = y[v];
      if (!g) {
        const O = ez(p);
        O && (g = y[O]);
      }
      if (g) return g(p, b, _);
    }
    return false;
  };
}
function Nz({ circular: e7, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: oz, areArraysEqual: r ? Ra : sz, areDataViewsEqual: cz, areDatesEqual: uz, areErrorsEqual: lz, areFunctionsEqual: fz, areMapsEqual: r ? Xl(rg, Ra) : rg, areNumbersEqual: hz, areObjectsEqual: r ? Ra : dz, arePrimitiveWrappersEqual: pz, areRegExpsEqual: yz, areSetsEqual: r ? Xl(ng, Ra) : ng, areTypedArraysEqual: r ? Xl(Yc, Ra) : Yc, areUrlsEqual: mz, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e7) {
    const i = ws(n.areArraysEqual), a = ws(n.areMapsEqual), o = ws(n.areObjectsEqual), s = ws(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function Cz(e7) {
  return function(t, r, n, i, a, o, s) {
    return e7(t, r, s);
  };
}
function jz({ circular: e7, comparator: t, createState: r, equals: n, strict: i }) {
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
const Bz = xn();
xn({ strict: true });
xn({ circular: true });
xn({ circular: true, strict: true });
xn({ createInternalComparator: () => ai });
xn({ strict: true, createInternalComparator: () => ai });
xn({ circular: true, createInternalComparator: () => ai });
xn({ circular: true, createInternalComparator: () => ai, strict: true });
function xn(e7 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e7, a = Nz(e7), o = Dz(a), s = r ? r(o) : Cz(o);
  return jz({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function Rz(e7) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e7);
}
function ig(e7) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e7(a), r = -1) : Rz(i);
  };
  requestAnimationFrame(n);
}
function yh(e7) {
  "@babel/helpers - typeof";
  return yh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yh(e7);
}
function kz(e7) {
  return zz(e7) || Uz(e7) || Fz(e7) || Lz();
}
function Lz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fz(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ag(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ag(e7, t);
  }
}
function ag(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Uz(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function zz(e7) {
  if (Array.isArray(e7)) return e7;
}
function Wz() {
  var e7 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = kz(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          ig(i.bind(null, u), c);
          return;
        }
        i(c), ig(i.bind(null, u));
        return;
      }
      yh(a) === "object" && (e7 = a, t(e7)), typeof a == "function" && a();
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
function og(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), true).forEach(function(n) {
      JS(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function JS(e7, t, r) {
  return t = Vz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Vz(e7) {
  var t = qz(e7, "string");
  return No(t) === "symbol" ? t : String(t);
}
function qz(e7, t) {
  if (No(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (No(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Gz = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Hz = function(t) {
  return t;
}, Kz = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Za = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return sg(sg({}, n), {}, JS({}, i, t(i, r[i])));
  }, {});
}, cg = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Kz(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function Yz(e7, t) {
  return Qz(e7) || Jz(e7, t) || QS(e7, t) || Xz();
}
function Xz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jz(e7, t) {
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
function Qz(e7) {
  if (Array.isArray(e7)) return e7;
}
function Zz(e7) {
  return rW(e7) || eW(e7) || QS(e7) || tW();
}
function tW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return mh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mh(e7, t);
  }
}
function eW(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function rW(e7) {
  if (Array.isArray(e7)) return mh(e7);
}
function mh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var Xc = 1e-4, ZS = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, tO = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, ug = function(t, r) {
  return function(n) {
    var i = ZS(t, r);
    return tO(i, n);
  };
}, nW = function(t, r) {
  return function(n) {
    var i = ZS(t, r), a = [].concat(Zz(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return tO(a, n);
  };
}, lg = function() {
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
        }), l = Yz(u, 4);
        i = l[0], a = l[1], o = l[2], s = l[3];
      }
    }
  }
  var f = ug(i, o), h = ug(a, s), d = nW(i, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, m = function(b) {
    for (var _ = b > 1 ? 1 : b, S = _, w = 0; w < 8; ++w) {
      var v = f(S) - _, g = d(S);
      if (Math.abs(v - _) < Xc || g < Xc) return h(S);
      S = y(S - v / g);
    }
    return h(S);
  };
  return m.isStepper = false, m;
}, iW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, h) {
    var d = -(l - f) * n, y = h * a, m = h + (d - y) * s / 1e3, p = h * s / 1e3 + l;
    return Math.abs(p - f) < Xc && Math.abs(m) < Xc ? [f, 0] : [p, m];
  };
  return c.isStepper = true, c.dt = s, c;
}, aW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return lg(i);
    case "spring":
      return iW();
    default:
      if (i.split("(")[0] === "cubic-bezier") return lg(i);
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
function fg(e7) {
  return cW(e7) || sW(e7) || eO(e7) || oW();
}
function oW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sW(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function cW(e7) {
  if (Array.isArray(e7)) return gh(e7);
}
function hg(e7, t) {
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
    t % 2 ? hg(Object(r), true).forEach(function(n) {
      vh(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function vh(e7, t, r) {
  return t = uW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function uW(e7) {
  var t = lW(e7, "string");
  return Co(t) === "symbol" ? t : String(t);
}
function lW(e7, t) {
  if (Co(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Co(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function fW(e7, t) {
  return pW(e7) || dW(e7, t) || eO(e7, t) || hW();
}
function hW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eO(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return gh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gh(e7, t);
  }
}
function gh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function dW(e7, t) {
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
function pW(e7) {
  if (Array.isArray(e7)) return e7;
}
var Jc = function(t, r, n) {
  return t + (r - t) * n;
}, bh = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, yW = function e5(t, r, n) {
  var i = Za(function(a, o) {
    if (bh(o)) {
      var s = t(o.from, o.to, o.velocity), c = fW(s, 2), u = c[0], l = c[1];
      return ue(ue({}, o), {}, { from: u, velocity: l });
    }
    return o;
  }, r);
  return n < 1 ? Za(function(a, o) {
    return bh(o) ? ue(ue({}, o), {}, { velocity: Jc(o.velocity, i[a].velocity, n), from: Jc(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const mW = function(e7, t, r, n, i) {
  var a = Gz(e7, t), o = a.reduce(function(p, b) {
    return ue(ue({}, p), {}, vh({}, b, [e7[b], t[b]]));
  }, {}), s = a.reduce(function(p, b) {
    return ue(ue({}, p), {}, vh({}, b, { from: e7[b], velocity: 0, to: t[b] }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, h = function() {
    return Za(function(b, _) {
      return _.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(bh).length;
  }, y = function(b) {
    u || (u = b);
    var _ = b - u, S = _ / r.dt;
    s = yW(r, s, S), i(ue(ue(ue({}, e7), t), h())), u = b, d() || (c = requestAnimationFrame(f));
  }, m = function(b) {
    l || (l = b);
    var _ = (b - l) / n, S = Za(function(v, g) {
      return Jc.apply(void 0, fg(g).concat([r(_)]));
    }, o);
    if (i(ue(ue(ue({}, e7), t), S)), _ < 1) c = requestAnimationFrame(f);
    else {
      var w = Za(function(v, g) {
        return Jc.apply(void 0, fg(g).concat([r(1)]));
      }, o);
      i(ue(ue(ue({}, e7), t), w));
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
var vW = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function gW(e7, t) {
  if (e7 == null) return {};
  var r = bW(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function bW(e7, t) {
  if (e7 == null) return {};
  var r = {}, n = Object.keys(e7), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e7[i]);
  return r;
}
function Jl(e7) {
  return OW(e7) || SW(e7) || wW(e7) || _W();
}
function _W() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wW(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return _h(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _h(e7, t);
  }
}
function SW(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function OW(e7) {
  if (Array.isArray(e7)) return _h(e7);
}
function _h(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
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
function er(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(r), true).forEach(function(n) {
      Ka(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ka(e7, t, r) {
  return t = rO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function xW(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function AW(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, rO(n.key), n);
  }
}
function PW(e7, t, r) {
  return t && AW(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function rO(e7) {
  var t = TW(e7, "string");
  return Yi(t) === "symbol" ? t : String(t);
}
function TW(e7, t) {
  if (Yi(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Yi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function IW(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && wh(e7, t);
}
function wh(e7, t) {
  return wh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, wh(e7, t);
}
function EW(e7) {
  var t = $W();
  return function() {
    var n = Qc(e7), i;
    if (t) {
      var a = Qc(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Sh(this, i);
  };
}
function Sh(e7, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Oh(e7);
}
function Oh(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function $W() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Qc(e7) {
  return Qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qc(e7);
}
var lr = function(e7) {
  IW(r, e7);
  var t = EW(r);
  function r(n, i) {
    var a;
    xW(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Oh(a)), a.changeStyle = a.changeStyle.bind(Oh(a)), !s || d <= 0) return a.state = { style: {} }, typeof h == "function" && (a.state = { style: l }), Sh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (u) {
      if (typeof h == "function") return a.state = { style: u }, Sh(a);
      a.state = { style: c ? Ka({}, c, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return PW(r, [{ key: "componentDidMount", value: function() {
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
      if (!(Bz(i.to, l) && i.canBegin && i.isActive)) {
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
    var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, h = i.onAnimationStart, d = mW(o, s, aW(u), c, this.changeStyle), y = function() {
      a.stopJSAnimation = d();
    };
    this.manager.start([h, l, y, c, f]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, h = f === void 0 ? 0 : f, d = function(m, p, b) {
      if (b === 0) return m;
      var _ = p.duration, S = p.easing, w = S === void 0 ? "ease" : S, v = p.style, g = p.properties, O = p.onAnimationEnd, P = b > 0 ? o[b - 1] : p, T = g || Object.keys(v);
      if (typeof w == "function" || w === "spring") return [].concat(Jl(m), [a.runJSAnimation.bind(a, { from: P.style, to: v, duration: _, easing: w }), _]);
      var $ = cg(T, _, w), E = er(er(er({}, P.style), v), {}, { transition: $ });
      return [].concat(Jl(m), [E, _, O]).filter(Hz);
    };
    return this.manager.start([c].concat(Jl(o.reduce(d, [l, Math.max(h, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = Wz());
    var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof d == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (h.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var m = s ? Ka({}, s, c) : c, p = cg(Object.keys(m), o, u);
    y.start([l, a, er(er({}, m), {}, { transition: p }), o, f]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = gW(i, vW), u = B.Children.count(a), l = this.state.style;
    if (typeof a == "function") return a(l);
    if (!s || u === 0 || o <= 0) return a;
    var f = function(d) {
      var y = d.props, m = y.style, p = m === void 0 ? {} : m, b = y.className, _ = B.cloneElement(d, er(er({}, c), {}, { style: er(er({}, p), l), className: b }));
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
function jo(e7) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e7);
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
function MW(e7, t) {
  return jW(e7) || CW(e7, t) || NW(e7, t) || DW();
}
function DW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NW(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return pg(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pg(e7, t);
  }
}
function pg(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function CW(e7, t) {
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
function jW(e7) {
  if (Array.isArray(e7)) return e7;
}
function yg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), true).forEach(function(n) {
      BW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function BW(e7, t, r) {
  return t = RW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function RW(e7) {
  var t = kW(e7, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function kW(e7, t) {
  if (jo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var vg = function(t, r, n, i, a) {
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
}, LW = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), h = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= h;
  }
  return false;
}, FW = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, xp = function(t) {
  var r = mg(mg({}, FW), t), n = B.useRef(), i = B.useState(-1), a = MW(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var w = n.current.getTotalLength();
      w && s(w);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.width, f = r.height, h = r.radius, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, b = r.isAnimationActive, _ = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || l === 0 || f === 0) return null;
  var S = mt("recharts-rectangle", d);
  return _ ? A.createElement(lr, { canBegin: o > 0, from: { width: l, height: f, x: c, y: u }, to: { width: l, height: f, x: c, y: u }, duration: m, animationEasing: y, isActive: _ }, function(w) {
    var v = w.width, g = w.height, O = w.x, P = w.y;
    return A.createElement(lr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, isActive: b, easing: y }, A.createElement("path", Zc({}, ut(r, true), { className: S, d: vg(O, P, v, g, h), ref: n })));
  }) : A.createElement("path", Zc({}, ut(r, true), { className: S, d: vg(c, u, l, f, h) }));
};
function xh() {
  return xh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, xh.apply(this, arguments);
}
var nl = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = mt("recharts-dot", a);
  return r === +r && n === +n && i === +i ? B.createElement("circle", xh({}, ut(t, false), vc(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function Bo(e7) {
  "@babel/helpers - typeof";
  return Bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bo(e7);
}
var UW = ["x", "y", "top", "left", "width", "height", "className"];
function Ah() {
  return Ah = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ah.apply(this, arguments);
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
function zW(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), true).forEach(function(n) {
      WW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function WW(e7, t, r) {
  return t = VW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function VW(e7) {
  var t = qW(e7, "string");
  return Bo(t) == "symbol" ? t : t + "";
}
function qW(e7, t) {
  if (Bo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Bo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function GW(e7, t) {
  if (e7 == null) return {};
  var r = HW(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function HW(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var KW = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, YW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, h = t.height, d = h === void 0 ? 0 : h, y = t.className, m = GW(t, UW), p = zW({ x: n, y: a, top: s, left: u, width: f, height: d }, m);
  return !L(n) || !L(a) || !L(f) || !L(d) || !L(s) || !L(u) ? null : A.createElement("path", Ah({}, ut(p, true), { className: mt("recharts-cross", y), d: KW(n, a, f, d, s, u) }));
}, XW = gw, JW = XW(Object.getPrototypeOf, Object), QW = JW, ZW = Jr, t5 = QW, e52 = Qr, r5 = "[object Object]", n5 = Function.prototype, i5 = Object.prototype, nO = n5.toString, a5 = i5.hasOwnProperty, o5 = nO.call(Object);
function s5(e7) {
  if (!e52(e7) || ZW(e7) != r5) return false;
  var t = t5(e7);
  if (t === null) return true;
  var r = a5.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && nO.call(r) == o5;
}
var c5 = s5;
const u5 = Bt(c5);
var l5 = Jr, f5 = Qr, h5 = "[object Boolean]";
function d5(e7) {
  return e7 === true || e7 === false || f5(e7) && l5(e7) == h5;
}
var p5 = d5;
const y5 = Bt(p5);
function Ro(e7) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e7);
}
function tu() {
  return tu = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, tu.apply(this, arguments);
}
function m5(e7, t) {
  return _5(e7) || b5(e7, t) || g5(e7, t) || v5();
}
function v5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g5(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return bg(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bg(e7, t);
  }
}
function bg(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function b5(e7, t) {
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
function _5(e7) {
  if (Array.isArray(e7)) return e7;
}
function _g(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _g(Object(r), true).forEach(function(n) {
      w5(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function w5(e7, t, r) {
  return t = S5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function S5(e7) {
  var t = O5(e7, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function O5(e7, t) {
  if (Ro(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Sg = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, x5 = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, A5 = function(t) {
  var r = wg(wg({}, x5), t), n = B.useRef(), i = B.useState(-1), a = m5(i, 2), o = a[0], s = a[1];
  B.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var S = n.current.getTotalLength();
      S && s(S);
    } catch {
    }
  }, []);
  var c = r.x, u = r.y, l = r.upperWidth, f = r.lowerWidth, h = r.height, d = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, b = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || h !== +h || l === 0 && f === 0 || h === 0) return null;
  var _ = mt("recharts-trapezoid", d);
  return b ? A.createElement(lr, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: h, x: c, y: u }, to: { upperWidth: l, lowerWidth: f, height: h, x: c, y: u }, duration: m, animationEasing: y, isActive: b }, function(S) {
    var w = S.upperWidth, v = S.lowerWidth, g = S.height, O = S.x, P = S.y;
    return A.createElement(lr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, easing: y }, A.createElement("path", tu({}, ut(r, true), { className: _, d: Sg(O, P, w, v, g), ref: n })));
  }) : A.createElement("g", null, A.createElement("path", tu({}, ut(r, true), { className: _, d: Sg(c, u, l, f, h) })));
}, P5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function ko(e7) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e7);
}
function T5(e7, t) {
  if (e7 == null) return {};
  var r = I5(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function I5(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Og(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eu(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Og(Object(r), true).forEach(function(n) {
      E5(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function E5(e7, t, r) {
  return t = $5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function $5(e7) {
  var t = M5(e7, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function M5(e7, t) {
  if (ko(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function D5(e7, t) {
  return eu(eu({}, t), e7);
}
function N5(e7, t) {
  return e7 === "symbols";
}
function xg(e7) {
  var t = e7.shapeType, r = e7.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(xp, r);
    case "trapezoid":
      return A.createElement(A5, r);
    case "sector":
      return A.createElement(GS, r);
    case "symbols":
      if (N5(t)) return A.createElement(Vu, r);
      break;
    default:
      return null;
  }
}
function C5(e7) {
  return B.isValidElement(e7) ? e7.props : e7;
}
function Ph(e7) {
  var t = e7.option, r = e7.shapeType, n = e7.propTransformer, i = n === void 0 ? D5 : n, a = e7.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e7.isActive, c = T5(e7, P5), u;
  if (B.isValidElement(t)) u = B.cloneElement(t, eu(eu({}, c), C5(t)));
  else if (lt(t)) u = t(c);
  else if (u5(t) && !y5(t)) {
    var l = i(t, c);
    u = A.createElement(xg, { shapeType: r, elementProps: l });
  } else {
    var f = c;
    u = A.createElement(xg, { shapeType: r, elementProps: f });
  }
  return s ? A.createElement(St, { className: o }, u) : u;
}
function il(e7, t) {
  return t != null && "trapezoids" in e7.props;
}
function al(e7, t) {
  return t != null && "sectors" in e7.props;
}
function Lo(e7, t) {
  return t != null && "points" in e7.props;
}
function j5(e7, t) {
  var r, n, i = e7.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e7.x === t.x, a = e7.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e7.y === t.y;
  return i && a;
}
function B5(e7, t) {
  var r = e7.endAngle === t.endAngle, n = e7.startAngle === t.startAngle;
  return r && n;
}
function R5(e7, t) {
  var r = e7.x === t.x, n = e7.y === t.y, i = e7.z === t.z;
  return r && n && i;
}
function k5(e7, t) {
  var r;
  return il(e7, t) ? r = j5 : al(e7, t) ? r = B5 : Lo(e7, t) && (r = R5), r;
}
function L5(e7, t) {
  var r;
  return il(e7, t) ? r = "trapezoids" : al(e7, t) ? r = "sectors" : Lo(e7, t) && (r = "points"), r;
}
function F5(e7, t) {
  if (il(e7, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (al(e7, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Lo(e7, t) ? t.payload : {};
}
function U5(e7) {
  var t = e7.activeTooltipItem, r = e7.graphicalItem, n = e7.itemData, i = L5(r, t), a = F5(r, t), o = n.filter(function(c, u) {
    var l = Xn(a, c), f = r.props[i].filter(function(y) {
      var m = k5(r, t);
      return m(y, t);
    }), h = r.props[i].indexOf(f[f.length - 1]), d = u === h;
    return l && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var z5 = Math.ceil, W5 = Math.max;
function V5(e7, t, r, n) {
  for (var i = -1, a = W5(z5((t - e7) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e7, e7 += r;
  return o;
}
var q5 = V5, G5 = Rw, Ag = 1 / 0, H5 = 17976931348623157e292;
function K5(e7) {
  if (!e7) return e7 === 0 ? e7 : 0;
  if (e7 = G5(e7), e7 === Ag || e7 === -Ag) {
    var t = e7 < 0 ? -1 : 1;
    return t * H5;
  }
  return e7 === e7 ? e7 : 0;
}
var iO = K5, Y5 = q5, X5 = Hu, Ql = iO;
function J5(e7) {
  return function(t, r, n) {
    return n && typeof n != "number" && X5(t, r, n) && (r = n = void 0), t = Ql(t), r === void 0 ? (r = t, t = 0) : r = Ql(r), n = n === void 0 ? t < r ? 1 : -1 : Ql(n), Y5(t, r, n, e7);
  };
}
var Q5 = J5, Z5 = Q5, tV = Z5(), eV = tV;
const ru = Bt(eV);
function Fo(e7) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e7);
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
function Tg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), true).forEach(function(n) {
      aO(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function aO(e7, t, r) {
  return t = rV(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function rV(e7) {
  var t = nV(e7, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function nV(e7, t) {
  if (Fo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var iV = ["Webkit", "Moz", "O", "ms"], aV = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = iV.reduce(function(a, o) {
    return Tg(Tg({}, a), {}, aO({}, o + n, r));
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
function nu() {
  return nu = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, nu.apply(this, arguments);
}
function Ig(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zl(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), true).forEach(function(n) {
      Ce(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function oV(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Eg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, sO(n.key), n);
  }
}
function sV(e7, t, r) {
  return t && Eg(e7.prototype, t), r && Eg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function cV(e7, t, r) {
  return t = iu(t), uV(e7, oO() ? Reflect.construct(t, r || [], iu(e7).constructor) : t.apply(e7, r));
}
function uV(e7, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return lV(e7);
}
function lV(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function oO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oO = function() {
    return !!e7;
  })();
}
function iu(e7) {
  return iu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, iu(e7);
}
function fV(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Th(e7, t);
}
function Th(e7, t) {
  return Th = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Th(e7, t);
}
function Ce(e7, t, r) {
  return t = sO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function sO(e7) {
  var t = hV(e7, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function hV(e7, t) {
  if (Xi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var dV = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, u = Ja().domain(ru(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: l };
}, $g = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Ji = function(e7) {
  function t(r) {
    var n;
    return oV(this, t), n = cV(this, t, [r]), Ce(n, "handleDrag", function(i) {
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
      var a = $g(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return fV(t, e7), sV(t, [{ key: "componentWillUnmount", value: function() {
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
    var a = $g(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, c = i.startX, u = this.state[o], l = this.props, f = l.x, h = l.width, d = l.travellerWidth, y = l.onChange, m = l.gap, p = l.data, b = { startX: this.state.startX, endX: this.state.endX }, _ = n.pageX - a;
    _ > 0 ? _ = Math.min(_, f + h - d - u) : _ < 0 && (_ = Math.max(_, f - u)), b[o] = u + _;
    var S = this.getIndex(b), w = S.startIndex, v = S.endIndex, g = function() {
      var P = p.length - 1;
      return o === "startX" && (s > c ? w % m === 0 : v % m === 0) || s < c && v === P || o === "endX" && (s > c ? v % m === 0 : w % m === 0) || s > c && v === P;
    };
    this.setState(Ce(Ce({}, o, u + _), "brushMoveStartX", n.pageX), function() {
      y && g() && y(S);
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
    var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, h = c.traveller, d = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, b = Math.max(n, this.props.x), _ = Zl(Zl({}, ut(this.props, false)), {}, { x: b, y: u, width: l, height: f }), S = d || "Min value: ".concat((a = y[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
    return A.createElement(St, { tabIndex: 0, role: "slider", "aria-label": S, "aria-valuenow": n, className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[i], onTouchStart: this.travellerDragStartHandlers[i], onKeyDown: function(v) {
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
    return A.createElement(St, { className: "recharts-brush-texts" }, A.createElement(Mc, nu({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(f, h) - d, y: o + s / 2 }, y), this.getTextOfTick(i)), A.createElement(Mc, nu({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(f, h) + c + d, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, m = h.isTextActive, p = h.isSlideMoving, b = h.isTravellerMoving, _ = h.isTravellerFocused;
    if (!i || !i.length || !L(s) || !L(c) || !L(u) || !L(l) || u <= 0 || l <= 0) return null;
    var S = mt("recharts-brush", a), w = A.Children.count(o) === 1, v = aV("userSelect", "none");
    return A.createElement(St, { className: S, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: v }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || b || _ || f) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
    return A.createElement(A.Fragment, null, A.createElement("rect", { x: i, y: a, width: o, height: s, fill: c, stroke: "none" }), A.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), A.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return A.isValidElement(n) ? a = A.cloneElement(n, i) : lt(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return Zl({ prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? dV({ data: a, width: o, x: s, travellerWidth: c, startIndex: l, endIndex: f }) : { scale: null, scaleValues: null });
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
var pV = Yd;
function yV(e7, t) {
  var r;
  return pV(e7, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var mV = yV, vV = lw, gV = _n, bV = mV, _V = $e, wV = Hu;
function SV(e7, t, r) {
  var n = _V(e7) ? vV : bV;
  return r && wV(e7, t, r) && (t = void 0), n(e7, gV(t));
}
var OV = SV;
const xV = Bt(OV);
var Ar = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Mg = Dw;
function AV(e7, t, r) {
  t == "__proto__" && Mg ? Mg(e7, t, { configurable: true, enumerable: true, value: r, writable: true }) : e7[t] = r;
}
var PV = AV, TV = PV, IV = $w, EV = _n;
function $V(e7, t) {
  var r = {};
  return t = EV(t), IV(e7, function(n, i, a) {
    TV(r, i, t(n, i, a));
  }), r;
}
var MV = $V;
const DV = Bt(MV);
function NV(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (!t(e7[r], r, e7)) return false;
  return true;
}
var CV = NV, jV = Yd;
function BV(e7, t) {
  var r = true;
  return jV(e7, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var RV = BV, kV = CV, LV = RV, FV = _n, UV = $e, zV = Hu;
function WV(e7, t, r) {
  var n = UV(e7) ? kV : LV;
  return r && zV(e7, t, r) && (t = void 0), n(e7, FV(t));
}
var VV = WV;
const cO = Bt(VV);
var qV = ["x", "y"];
function Uo(e7) {
  "@babel/helpers - typeof";
  return Uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Uo(e7);
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
function ka(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), true).forEach(function(n) {
      GV(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function GV(e7, t, r) {
  return t = HV(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function HV(e7) {
  var t = KV(e7, "string");
  return Uo(t) == "symbol" ? t : t + "";
}
function KV(e7, t) {
  if (Uo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function YV(e7, t) {
  if (e7 == null) return {};
  var r = XV(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function XV(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function JV(e7, t) {
  var r = e7.x, n = e7.y, i = YV(e7, qV), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), h = parseInt(f, 10);
  return ka(ka(ka(ka(ka({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: l, width: h, name: t.name, radius: t.radius });
}
function Ng(e7) {
  return A.createElement(Ph, Ih({ shapeType: "rectangle", propTransformer: JV, activeClassName: "recharts-active-bar" }, e7));
}
var QV = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || h$(n);
    return a ? t(n, i) : (a || Qn(), r);
  };
}, ZV = ["value", "background"], uO;
function Qi(e7) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e7);
}
function tq(e7, t) {
  if (e7 == null) return {};
  var r = eq(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function eq(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function au() {
  return au = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, au.apply(this, arguments);
}
function Cg(e7, t) {
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
    t % 2 ? Cg(Object(r), true).forEach(function(n) {
      ln(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function rq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, fO(n.key), n);
  }
}
function nq(e7, t, r) {
  return t && jg(e7.prototype, t), r && jg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function iq(e7, t, r) {
  return t = ou(t), aq(e7, lO() ? Reflect.construct(t, r || [], ou(e7).constructor) : t.apply(e7, r));
}
function aq(e7, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return oq(e7);
}
function oq(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function lO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lO = function() {
    return !!e7;
  })();
}
function ou(e7) {
  return ou = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ou(e7);
}
function sq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Eh(e7, t);
}
function Eh(e7, t) {
  return Eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eh(e7, t);
}
function ln(e7, t, r) {
  return t = fO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function fO(e7) {
  var t = cq(e7, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function cq(e7, t) {
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
    rq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = iq(this, t, [].concat(i)), ln(r, "state", { isAnimationFinished: false }), ln(r, "id", ri("recharts-bar-")), ln(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), ln(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return sq(t, e7), nq(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = ut(this.props, false);
    return n && n.map(function(f, h) {
      var d = h === c, y = d ? u : o, m = Xt(Xt(Xt({}, l), f), {}, { isActive: d, option: y, index: h, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return A.createElement(St, au({ className: "recharts-bar-rectangle" }, uo(i.props, f, h), { key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(h) }), A.createElement(Ng, m));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, c = i.animationBegin, u = i.animationDuration, l = i.animationEasing, f = i.animationId, h = this.state.prevData;
    return A.createElement(lr, { begin: c, duration: u, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(f), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(d) {
      var y = d.t, m = a.map(function(p, b) {
        var _ = h && h[b];
        if (_) {
          var S = Ht(_.x, p.x), w = Ht(_.y, p.y), v = Ht(_.width, p.width), g = Ht(_.height, p.height);
          return Xt(Xt({}, p), {}, { x: S(y), y: w(y), width: v(y), height: g(y) });
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
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = ut(this.props.background, false);
    return a.map(function(u, l) {
      u.value;
      var f = u.background, h = tq(u, ZV);
      if (!f) return null;
      var d = Xt(Xt(Xt(Xt(Xt({}, h), {}, { fill: "#eee" }, f), c), uo(n.props, u, l)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: l, className: "recharts-bar-background-rectangle" });
      return A.createElement(Ng, au({ key: "background-bar-".concat(l), option: n.props.background, isActive: l === s }, d));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Te(l, Aa);
    if (!f) return null;
    var h = u === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(p, b) {
      var _ = Array.isArray(p.value) ? p.value[1] : p.value;
      return { x: p.x, y: p.y, value: _, errorVal: ae(p, b) };
    }, y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, y, f.map(function(m) {
      return A.cloneElement(m, { key: "error-bar-".concat(i, "-").concat(m.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, offset: h, dataPointFormatter: d });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, h = n.height, d = n.isAnimationActive, y = n.background, m = n.id;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, b = mt("recharts-bar", o), _ = s && s.allowDataOverflow, S = c && c.allowDataOverflow, w = _ || S, v = ct(m) ? this.id : m;
    return A.createElement(St, { className: b }, _ || S ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? u : u - f / 2, y: S ? l : l - h / 2, width: _ ? f : f * 2, height: S ? h : h * 2 }))) : null, A.createElement(St, { className: "recharts-bar-rectangles", clipPath: w ? "url(#clipPath-".concat(v, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(w, v), (!d || p) && xr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
}(B.PureComponent);
uO = Pa;
ln(Pa, "displayName", "Bar");
ln(Pa, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
ln(Pa, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.barPosition, i = e7.bandSize, a = e7.xAxis, o = e7.yAxis, s = e7.xAxisTicks, c = e7.yAxisTicks, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = j6(n, r);
  if (!d) return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Xt(Xt({}, m), r.props) : r.props, b = p.dataKey, _ = p.children, S = p.minPointSize, w = y === "horizontal" ? o : a, v = u ? w.scale.domain() : null, g = W6({ numericAxis: w }), O = Te(_, Qd), P = f.map(function(T, $) {
    var E, I, j, N, M, C;
    u ? E = B6(u[l + $], v) : (E = ae(T, b), Array.isArray(E) || (E = [g, E]));
    var R = QV(S, uO.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, U = [o.scale(E[0]), o.scale(E[1])], q = U[0], nt = U[1];
      I = Rv({ axis: a, ticks: s, bandSize: i, offset: d.offset, entry: T, index: $ }), j = (F = nt ?? q) !== null && F !== void 0 ? F : void 0, N = d.size;
      var W = q - nt;
      if (M = Number.isNaN(W) ? 0 : W, C = { x: I, y: o.y, width: N, height: o.height }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var at = sr(M || R) * (Math.abs(R) - Math.abs(M));
        j -= at, M += at;
      }
    } else {
      var Rt = [a.scale(E[0]), a.scale(E[1])], Yt = Rt[0], Me = Rt[1];
      if (I = Yt, j = Rv({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: T, index: $ }), N = Me - Yt, M = d.size, C = { x: a.x, y: j, width: a.width, height: M }, Math.abs(R) > 0 && Math.abs(N) < Math.abs(R)) {
        var An = sr(N || R) * (Math.abs(R) - Math.abs(N));
        N += An;
      }
    }
    return Xt(Xt(Xt({}, T), {}, { x: I, y: j, width: N, height: M, value: u ? E : E[1], payload: T, background: C }, O && O[$] && O[$].props), {}, { tooltipPayload: [WS(r, T)], tooltipPosition: { x: I + N / 2, y: j + M / 2 } });
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
function uq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Bg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, hO(n.key), n);
  }
}
function lq(e7, t, r) {
  return t && Bg(e7.prototype, t), r && Bg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
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
function ir(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(r), true).forEach(function(n) {
      ol(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function ol(e7, t, r) {
  return t = hO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function hO(e7) {
  var t = fq(e7, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function fq(e7, t) {
  if (zo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var hq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, h = !!je(u, Pa);
  return l.reduce(function(d, y) {
    var m = r[y], p = m.orientation, b = m.domain, _ = m.padding, S = _ === void 0 ? {} : _, w = m.mirror, v = m.reversed, g = "".concat(p).concat(w ? "Mirror" : ""), O, P, T, $, E;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = b[1] - b[0], j = 1 / 0, N = m.categoricalDomain.sort(m$);
      if (N.forEach(function(Rt, Yt) {
        Yt > 0 && (j = Math.min((Rt || 0) - (N[Yt - 1] || 0), j));
      }), Number.isFinite(j)) {
        var M = j / I, C = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (O = M * C / 2), m.padding === "no-gap") {
          var R = Yn(t.barCategoryGap, M * C), F = M * C / 2;
          O = F - R - (F - R) / C * R;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (S.left || 0) + (O || 0), n.left + n.width - (S.right || 0) - (O || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + (O || 0), n.top + n.height - (S.bottom || 0) - (O || 0)] : P = m.range, v && (P = [P[1], P[0]]);
    var U = N6(m, a, h), q = U.scale, nt = U.realScaleType;
    q.domain(b).range(P), C6(q);
    var W = z6(q, ir(ir({}, m), {}, { realScaleType: nt }));
    i === "xAxis" ? (E = p === "top" && !w || p === "bottom" && w, T = n.left, $ = f[g] - E * m.height) : i === "yAxis" && (E = p === "left" && !w || p === "right" && w, T = f[g] - E * m.width, $ = n.top);
    var at = ir(ir(ir({}, m), W), {}, { realScaleType: nt, x: T, y: $, scale: q, width: i === "xAxis" ? n.width : m.width, height: i === "yAxis" ? n.height : m.height });
    return at.bandSize = Gc(at, W), !m.hide && i === "xAxis" ? f[g] += (E ? -1 : 1) * at.height : m.hide || (f[g] += (E ? -1 : 1) * at.width), ir(ir({}, d), {}, ol({}, y, at));
  }, {});
}, dO = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, dq = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return dO({ x: r, y: n }, { x: i, y: a });
}, pO = function() {
  function e7(t) {
    uq(this, e7), this.scale = t;
  }
  return lq(e7, [{ key: "domain", get: function() {
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
ol(pO, "EPS", 1e-4);
var Ap = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ir(ir({}, n), {}, ol({}, i, pO.create(t[i])));
  }, {});
  return ir(ir({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return DV(i, function(c, u) {
      return r[u].apply(c, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return cO(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function pq(e7) {
  return (e7 % 180 + 180) % 180;
}
var yq = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = pq(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, mq = _n, vq = ts, gq = qu;
function bq(e7) {
  return function(t, r, n) {
    var i = Object(t);
    if (!vq(t)) {
      var a = mq(r);
      t = gq(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e7(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var _q = bq, wq = iO;
function Sq(e7) {
  var t = wq(e7), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var Oq = Sq, xq = xw, Aq = _n, Pq = Oq, Tq = Math.max;
function Iq(e7, t, r) {
  var n = e7 == null ? 0 : e7.length;
  if (!n) return -1;
  var i = r == null ? 0 : Pq(r);
  return i < 0 && (i = Tq(n + i, 0)), xq(e7, Aq(t), i);
}
var Eq = Iq, $q = _q, Mq = Eq, Dq = $q(Mq), Nq = Dq;
const Cq = Bt(Nq);
var jq = gE(function(e7) {
  return { x: e7.left, y: e7.top, width: e7.width, height: e7.height };
}, function(e7) {
  return ["l", e7.left, "t", e7.top, "w", e7.width, "h", e7.height].join("");
}), Pp = B.createContext(void 0), Tp = B.createContext(void 0), yO = B.createContext(void 0), mO = B.createContext({}), vO = B.createContext(void 0), gO = B.createContext(0), bO = B.createContext(0), kg = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = jq(a);
  return A.createElement(Pp.Provider, { value: n }, A.createElement(Tp.Provider, { value: i }, A.createElement(mO.Provider, { value: a }, A.createElement(yO.Provider, { value: l }, A.createElement(vO.Provider, { value: o }, A.createElement(gO.Provider, { value: u }, A.createElement(bO.Provider, { value: c }, s)))))));
}, Bq = function() {
  return B.useContext(vO);
}, _O = function(t) {
  var r = B.useContext(Pp);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Rq = function() {
  var t = B.useContext(Pp);
  return cn(t);
}, kq = function() {
  var t = B.useContext(Tp), r = Cq(t, function(n) {
    return cO(n.domain, Number.isFinite);
  });
  return r || cn(t);
}, wO = function(t) {
  var r = B.useContext(Tp);
  r == null && Qn();
  var n = r[t];
  return n == null && Qn(), n;
}, Lq = function() {
  var t = B.useContext(yO);
  return t;
}, Fq = function() {
  return B.useContext(mO);
}, Ip = function() {
  return B.useContext(bO);
}, Ep = function() {
  return B.useContext(gO);
};
function Zi(e7) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e7);
}
function Uq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function zq(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, OO(n.key), n);
  }
}
function Wq(e7, t, r) {
  return t && zq(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Vq(e7, t, r) {
  return t = su(t), qq(e7, SO() ? Reflect.construct(t, r || [], su(e7).constructor) : t.apply(e7, r));
}
function qq(e7, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Gq(e7);
}
function Gq(e7) {
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
function Hq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && $h(e7, t);
}
function $h(e7, t) {
  return $h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $h(e7, t);
}
function Lg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), true).forEach(function(n) {
      $p(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function $p(e7, t, r) {
  return t = OO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function OO(e7) {
  var t = Kq(e7, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function Kq(e7, t) {
  if (Zi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Yq(e7, t) {
  return Zq(e7) || Qq(e7, t) || Jq(e7, t) || Xq();
}
function Xq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jq(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Ug(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ug(e7, t);
  }
}
function Ug(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Qq(e7, t) {
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
function Zq(e7) {
  if (Array.isArray(e7)) return e7;
}
function Mh() {
  return Mh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Mh.apply(this, arguments);
}
var tG = function(t, r) {
  var n;
  return A.isValidElement(t) ? n = A.cloneElement(t, r) : lt(t) ? n = t(r) : n = A.createElement("line", Mh({}, r, { className: "recharts-reference-line-line" })), n;
}, eG = function(t, r, n, i, a, o, s, c, u) {
  var l = a.x, f = a.y, h = a.width, d = a.height;
  if (n) {
    var y = u.y, m = t.y.apply(y, { position: o });
    if (Ar(u, "discard") && !t.y.isInRange(m)) return null;
    var p = [{ x: l + h, y: m }, { x: l, y: m }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var b = u.x, _ = t.x.apply(b, { position: o });
    if (Ar(u, "discard") && !t.x.isInRange(_)) return null;
    var S = [{ x: _, y: f + d }, { x: _, y: f }];
    return s === "top" ? S.reverse() : S;
  }
  if (i) {
    var w = u.segment, v = w.map(function(g) {
      return t.apply(g, { position: o });
    });
    return Ar(u, "discard") && xV(v, function(g) {
      return !t.isInRange(g);
    }) ? null : v;
  }
  return null;
};
function rG(e7) {
  var t = e7.x, r = e7.y, n = e7.segment, i = e7.xAxisId, a = e7.yAxisId, o = e7.shape, s = e7.className, c = e7.alwaysShow, u = Bq(), l = _O(i), f = wO(a), h = Lq();
  if (!u || !h) return null;
  zr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = Ap({ x: l.scale, y: f.scale }), y = ie(t), m = ie(r), p = n && n.length === 2, b = eG(d, y, m, p, h, e7.position, l.orientation, f.orientation, e7);
  if (!b) return null;
  var _ = Yq(b, 2), S = _[0], w = S.x, v = S.y, g = _[1], O = g.x, P = g.y, T = Ar(e7, "hidden") ? "url(#".concat(u, ")") : void 0, $ = Fg(Fg({ clipPath: T }, ut(e7, true)), {}, { x1: w, y1: v, x2: O, y2: P });
  return A.createElement(St, { className: mt("recharts-reference-line", s) }, tG(o, $), he.renderCallByParent(e7, dq({ x1: w, y1: v, x2: O, y2: P })));
}
var Mp = function(e7) {
  function t() {
    return Uq(this, t), Vq(this, t, arguments);
  }
  return Hq(t, e7), Wq(t, [{ key: "render", value: function() {
    return A.createElement(rG, this.props);
  } }]);
}(A.Component);
$p(Mp, "displayName", "ReferenceLine");
$p(Mp, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Dh() {
  return Dh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Dh.apply(this, arguments);
}
function ta(e7) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e7);
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
function nG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function iG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, AO(n.key), n);
  }
}
function aG(e7, t, r) {
  return t && iG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function oG(e7, t, r) {
  return t = cu(t), sG(e7, xO() ? Reflect.construct(t, r || [], cu(e7).constructor) : t.apply(e7, r));
}
function sG(e7, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return cG(e7);
}
function cG(e7) {
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
function uG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Nh(e7, t);
}
function Nh(e7, t) {
  return Nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nh(e7, t);
}
function sl(e7, t, r) {
  return t = AO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function AO(e7) {
  var t = lG(e7, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function lG(e7, t) {
  if (ta(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var fG = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Ap({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return Ar(t, "discard") && !o.isInRange(s) ? null : s;
}, cl = function(e7) {
  function t() {
    return nG(this, t), oG(this, t, arguments);
  }
  return uG(t, e7), aG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = ie(i), l = ie(a);
    if (zr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
    var f = fG(this.props);
    if (!f) return null;
    var h = f.x, d = f.y, y = this.props, m = y.shape, p = y.className, b = Ar(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, _ = Wg(Wg({ clipPath: b }, ut(this.props, true)), {}, { cx: h, cy: d });
    return A.createElement(St, { className: mt("recharts-reference-dot", p) }, t.renderDot(m, _), he.renderCallByParent(this.props, { x: h - o, y: d - o, width: 2 * o, height: 2 * o }));
  } }]);
}(A.Component);
sl(cl, "displayName", "ReferenceDot");
sl(cl, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
sl(cl, "renderDot", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : lt(e7) ? r = e7(t) : r = A.createElement(nl, Dh({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Ch() {
  return Ch = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ch.apply(this, arguments);
}
function ea(e7) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e7);
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
function qg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), true).forEach(function(n) {
      ul(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function hG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function dG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, TO(n.key), n);
  }
}
function pG(e7, t, r) {
  return t && dG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function yG(e7, t, r) {
  return t = uu(t), mG(e7, PO() ? Reflect.construct(t, r || [], uu(e7).constructor) : t.apply(e7, r));
}
function mG(e7, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vG(e7);
}
function vG(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function PO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (PO = function() {
    return !!e7;
  })();
}
function uu(e7) {
  return uu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uu(e7);
}
function gG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && jh(e7, t);
}
function jh(e7, t) {
  return jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jh(e7, t);
}
function ul(e7, t, r) {
  return t = TO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function TO(e7) {
  var t = bG(e7, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function bG(e7, t) {
  if (ea(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var _G = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var h = Ap({ x: l.scale, y: f.scale }), d = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(c, { position: "start" }) : h.y.rangeMin }, y = { x: r ? h.x.apply(s, { position: "end" }) : h.x.rangeMax, y: i ? h.y.apply(u, { position: "end" }) : h.y.rangeMax };
  return Ar(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : dO(d, y);
}, ll = function(e7) {
  function t() {
    return hG(this, t), yG(this, t, arguments);
  }
  return gG(t, e7), pG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
    zr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var f = ie(i), h = ie(a), d = ie(o), y = ie(s), m = this.props.shape;
    if (!f && !h && !d && !y && !m) return null;
    var p = _G(f, h, d, y, this.props);
    if (!p && !m) return null;
    var b = Ar(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
    return A.createElement(St, { className: mt("recharts-reference-area", c) }, t.renderRect(m, qg(qg({ clipPath: b }, ut(this.props, true)), p)), he.renderCallByParent(this.props, p));
  } }]);
}(A.Component);
ul(ll, "displayName", "ReferenceArea");
ul(ll, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
ul(ll, "renderRect", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : lt(e7) ? r = e7(t) : r = A.createElement(xp, Ch({}, t, { className: "recharts-reference-area-rect" })), r;
});
function IO(e7, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e7;
  for (var n = [], i = 0; i < e7.length; i += t) n.push(e7[i]);
  return n;
}
function wG(e7, t, r) {
  var n = { width: e7.width + t.width, height: e7.height + t.height };
  return yq(n, r);
}
function SG(e7, t, r) {
  var n = r === "width", i = e7.x, a = e7.y, o = e7.width, s = e7.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function lu(e7, t, r, n, i) {
  if (e7 * t < e7 * n || e7 * t > e7 * i) return false;
  var a = r();
  return e7 * (t - e7 * a / 2 - n) >= 0 && e7 * (t + e7 * a / 2 - i) <= 0;
}
function OG(e7, t) {
  return IO(e7, t + 1);
}
function xG(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0) return { v: IO(n, u) };
    var m = c, p, b = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, _ = y.coordinate, S = c === 0 || lu(e7, _, b, l, s);
    S || (c = 0, l = o, u += 1), S && (l = _ + e7 * (b() / 2 + i), c += u);
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
function Gg(e7, t) {
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
    t % 2 ? Gg(Object(r), true).forEach(function(n) {
      AG(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function AG(e7, t, r) {
  return t = PG(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function PG(e7) {
  var t = TG(e7, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function TG(e7, t) {
  if (Wo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function IG(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(h) {
    var d = a[h], y, m = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var p = e7 * (d.coordinate + e7 * m() / 2 - c);
      a[h] = d = fe(fe({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e7 : d.coordinate });
    } else a[h] = d = fe(fe({}, d), {}, { tickCoord: d.coordinate });
    var b = lu(e7, d.tickCoord, m, s, c);
    b && (c = d.tickCoord - e7 * (m() / 2 + i), a[h] = fe(fe({}, d), {}, { isShow: true }));
  }, l = o - 1; l >= 0; l--) u(l);
  return a;
}
function EG(e7, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), h = e7 * (l.coordinate + e7 * f / 2 - u);
    o[s - 1] = l = fe(fe({}, l), {}, { tickCoord: h > 0 ? l.coordinate - h * e7 : l.coordinate });
    var d = lu(e7, l.tickCoord, function() {
      return f;
    }, c, u);
    d && (u = l.tickCoord - e7 * (f / 2 + i), o[s - 1] = fe(fe({}, l), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, m = function(_) {
    var S = o[_], w, v = function() {
      return w === void 0 && (w = r(S, _)), w;
    };
    if (_ === 0) {
      var g = e7 * (S.coordinate - e7 * v() / 2 - c);
      o[_] = S = fe(fe({}, S), {}, { tickCoord: g < 0 ? S.coordinate - g * e7 : S.coordinate });
    } else o[_] = S = fe(fe({}, S), {}, { tickCoord: S.coordinate });
    var O = lu(e7, S.tickCoord, v, c, u);
    O && (c = S.tickCoord + e7 * (v() / 2 + i), o[_] = fe(fe({}, S), {}, { isShow: true }));
  }, p = 0; p < y; p++) m(p);
  return o;
}
function Dp(e7, t, r) {
  var n = e7.tick, i = e7.ticks, a = e7.viewBox, o = e7.minTickGap, s = e7.orientation, c = e7.interval, u = e7.tickFormatter, l = e7.unit, f = e7.angle;
  if (!i || !i.length || !n) return [];
  if (L(c) || wn.isSsr) return OG(i, typeof c == "number" && L(c) ? c : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = l && d === "width" ? Xa(l, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = function(S, w) {
    var v = lt(u) ? u(S.value, w) : S.value;
    return d === "width" ? wG(Xa(v, { fontSize: t, letterSpacing: r }), y, f) : Xa(v, { fontSize: t, letterSpacing: r })[d];
  }, p = i.length >= 2 ? sr(i[1].coordinate - i[0].coordinate) : 1, b = SG(a, p, d);
  return c === "equidistantPreserveStart" ? xG(p, b, m, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = EG(p, b, m, i, o, c === "preserveStartEnd") : h = IG(p, b, m, i, o), h.filter(function(_) {
    return _.isShow;
  }));
}
var $G = ["viewBox"], MG = ["viewBox"], DG = ["ticks"];
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
function te(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), true).forEach(function(n) {
      Np(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function tf(e7, t) {
  if (e7 == null) return {};
  var r = NG(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function NG(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function CG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Kg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, $O(n.key), n);
  }
}
function jG(e7, t, r) {
  return t && Kg(e7.prototype, t), r && Kg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function BG(e7, t, r) {
  return t = fu(t), RG(e7, EO() ? Reflect.construct(t, r || [], fu(e7).constructor) : t.apply(e7, r));
}
function RG(e7, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return kG(e7);
}
function kG(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function EO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (EO = function() {
    return !!e7;
  })();
}
function fu(e7) {
  return fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fu(e7);
}
function LG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Bh(e7, t);
}
function Bh(e7, t) {
  return Bh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bh(e7, t);
}
function Np(e7, t, r) {
  return t = $O(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function $O(e7) {
  var t = FG(e7, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function FG(e7, t) {
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
    return CG(this, t), n = BG(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return LG(t, e7), jG(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = tf(n, $G), s = this.props, c = s.viewBox, u = tf(s, MG);
    return !$i(a, c) || !$i(o, u) || !$i(i, this.state);
  } }, { key: "componentDidMount", value: function() {
    var n = this.layerReference;
    if (n) {
      var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      i && this.setState({ fontSize: window.getComputedStyle(i).fontSize, letterSpacing: window.getComputedStyle(i).letterSpacing });
    }
  } }, { key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.x, o = i.y, s = i.width, c = i.height, u = i.orientation, l = i.tickSize, f = i.mirror, h = i.tickMargin, d, y, m, p, b, _, S = f ? -1 : 1, w = n.tickSize || l, v = L(n.tickCoord) ? n.tickCoord : n.coordinate;
    switch (u) {
      case "top":
        d = y = n.coordinate, p = o + +!f * c, m = p - S * w, _ = m - S * h, b = v;
        break;
      case "left":
        m = p = n.coordinate, y = a + +!f * s, d = y - S * w, b = d - S * h, _ = v;
        break;
      case "right":
        m = p = n.coordinate, y = a + +f * s, d = y + S * w, b = d + S * h, _ = v;
        break;
      default:
        d = y = n.coordinate, p = o + +f * c, m = p + S * w, _ = m + S * h, b = v;
        break;
    }
    return { line: { x1: d, y1: m, x2: y, y2: p }, tick: { x: b, y: _ } };
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
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = te(te(te({}, ut(this.props, false)), ut(l, false)), {}, { fill: "none" });
    if (c === "top" || c === "bottom") {
      var h = +(c === "top" && !u || c === "bottom" && u);
      f = te(te({}, f), {}, { x1: i, y1: a + h * s, x2: i + o, y2: a + h * s });
    } else {
      var d = +(c === "left" && !u || c === "right" && u);
      f = te(te({}, f), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + s });
    }
    return A.createElement("line", xi({}, f, { className: mt("recharts-cartesian-axis-line", Ye(l, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, h = s.unit, d = Dp(te(te({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = ut(this.props, false), b = ut(l, false), _ = te(te({}, p), {}, { fill: "none" }, ut(c, false)), S = d.map(function(w, v) {
      var g = o.getTickLineCoord(w), O = g.line, P = g.tick, T = te(te(te(te({ textAnchor: y, verticalAnchor: m }, p), {}, { stroke: "none", fill: u }, b), P), {}, { index: v, payload: w, visibleTicksCount: d.length, tickFormatter: f });
      return A.createElement(St, xi({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(w.value, "-").concat(w.coordinate, "-").concat(w.tickCoord) }, uo(o.props, w, v)), c && A.createElement("line", xi({}, _, O, { className: mt("recharts-cartesian-axis-tick-line", Ye(c, "className")) })), l && t.renderTickItem(l, T, "".concat(lt(f) ? f(w.value, v) : w.value).concat(h || "")));
    });
    return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, S);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
    if (l) return null;
    var f = this.props, h = f.ticks, d = tf(f, DG), y = h;
    return lt(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || s <= 0 || !y || !y.length ? null : A.createElement(St, { className: mt("recharts-cartesian-axis", u), ref: function(p) {
      n.layerReference = p;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), he.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = mt(i.className, "recharts-cartesian-axis-tick-value");
    return A.isValidElement(n) ? o = A.cloneElement(n, te(te({}, i), {}, { className: s })) : lt(n) ? o = n(te(te({}, i), {}, { className: s })) : o = A.createElement(Mc, xi({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(B.Component);
Np(Ta, "displayName", "CartesianAxis");
Np(Ta, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var UG = ["x1", "y1", "x2", "y2", "key"], zG = ["offset"];
function Zn(e7) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e7);
}
function Yg(e7, t) {
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
    t % 2 ? Yg(Object(r), true).forEach(function(n) {
      WG(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function WG(e7, t, r) {
  return t = VG(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function VG(e7) {
  var t = qG(e7, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function qG(e7, t) {
  if (Zn(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Zn(n) != "object") return n;
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
function Xg(e7, t) {
  if (e7 == null) return {};
  var r = GG(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function GG(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var HG = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return A.createElement("rect", { x: i, y: a, ry: c, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function MO(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (lt(e7)) r = e7(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Xg(t, UG), u = ut(c, false);
    u.offset;
    var l = Xg(u, zG);
    r = A.createElement("line", kn({}, l, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function KG(e7) {
  var t = e7.x, r = e7.width, n = e7.horizontal, i = n === void 0 ? true : n, a = e7.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e7), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return MO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function YG(e7) {
  var t = e7.y, r = e7.height, n = e7.vertical, i = n === void 0 ? true : n, a = e7.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = de(de({}, e7), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return MO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function XG(e7) {
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
function JG(e7) {
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
var QG = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return US(Dp(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, ZG = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return US(Dp(de(de(de({}, Ta.defaultProps), n), {}, { ticks: Fr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, li = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function Rh(e7) {
  var t, r, n, i, a, o, s = Ip(), c = Ep(), u = Fq(), l = de(de({}, e7), {}, { stroke: (t = e7.stroke) !== null && t !== void 0 ? t : li.stroke, fill: (r = e7.fill) !== null && r !== void 0 ? r : li.fill, horizontal: (n = e7.horizontal) !== null && n !== void 0 ? n : li.horizontal, horizontalFill: (i = e7.horizontalFill) !== null && i !== void 0 ? i : li.horizontalFill, vertical: (a = e7.vertical) !== null && a !== void 0 ? a : li.vertical, verticalFill: (o = e7.verticalFill) !== null && o !== void 0 ? o : li.verticalFill, x: L(e7.x) ? e7.x : u.left, y: L(e7.y) ? e7.y : u.top, width: L(e7.width) ? e7.width : u.width, height: L(e7.height) ? e7.height : u.height }), f = l.x, h = l.y, d = l.width, y = l.height, m = l.syncWithTicks, p = l.horizontalValues, b = l.verticalValues, _ = Rq(), S = kq();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(f) || f !== +f || !L(h) || h !== +h) return null;
  var w = l.verticalCoordinatesGenerator || QG, v = l.horizontalCoordinatesGenerator || ZG, g = l.horizontalPoints, O = l.verticalPoints;
  if ((!g || !g.length) && lt(v)) {
    var P = p && p.length, T = v({ yAxis: S ? de(de({}, S), {}, { ticks: P ? p : S.ticks }) : void 0, width: s, height: c, offset: u }, P ? true : m);
    zr(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(T), "]")), Array.isArray(T) && (g = T);
  }
  if ((!O || !O.length) && lt(w)) {
    var $ = b && b.length, E = w({ xAxis: _ ? de(de({}, _), {}, { ticks: $ ? b : _.ticks }) : void 0, width: s, height: c, offset: u }, $ ? true : m);
    zr(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Zn(E), "]")), Array.isArray(E) && (O = E);
  }
  return A.createElement("g", { className: "recharts-cartesian-grid" }, A.createElement(HG, { fill: l.fill, fillOpacity: l.fillOpacity, x: l.x, y: l.y, width: l.width, height: l.height, ry: l.ry }), A.createElement(KG, kn({}, l, { offset: u, horizontalPoints: g, xAxis: _, yAxis: S })), A.createElement(YG, kn({}, l, { offset: u, verticalPoints: O, xAxis: _, yAxis: S })), A.createElement(XG, kn({}, l, { horizontalPoints: g })), A.createElement(JG, kn({}, l, { verticalPoints: O })));
}
Rh.displayName = "CartesianGrid";
var tH = ["type", "layout", "connectNulls", "ref"], eH = ["key"];
function na(e7) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e7);
}
function Jg(e7, t) {
  if (e7 == null) return {};
  var r = rH(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function rH(e7, t) {
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
function De(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qg(Object(r), true).forEach(function(n) {
      ar(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function fi(e7) {
  return oH(e7) || aH(e7) || iH(e7) || nH();
}
function nH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iH(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return kh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kh(e7, t);
  }
}
function aH(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function oH(e7) {
  if (Array.isArray(e7)) return kh(e7);
}
function kh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function sH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Zg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, NO(n.key), n);
  }
}
function cH(e7, t, r) {
  return t && Zg(e7.prototype, t), r && Zg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function uH(e7, t, r) {
  return t = hu(t), lH(e7, DO() ? Reflect.construct(t, r || [], hu(e7).constructor) : t.apply(e7, r));
}
function lH(e7, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return fH(e7);
}
function fH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function DO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (DO = function() {
    return !!e7;
  })();
}
function hu(e7) {
  return hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hu(e7);
}
function hH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Lh(e7, t);
}
function Lh(e7, t) {
  return Lh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lh(e7, t);
}
function ar(e7, t, r) {
  return t = NO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function NO(e7) {
  var t = dH(e7, "string");
  return na(t) == "symbol" ? t : t + "";
}
function dH(e7, t) {
  if (na(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var qn = function(e7) {
  function t() {
    var r;
    sH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = uH(this, t, [].concat(i)), ar(r, "state", { isAnimationFinished: true, totalLength: 0 }), ar(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ar(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(b, _) {
        return b + _;
      });
      if (!u) return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, h = s - o, d = [], y = 0, m = 0; y < c.length; m += c[y], ++y) if (m + c[y] > f) {
        d = [].concat(fi(c.slice(0, y)), [f - m]);
        break;
      }
      var p = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(fi(t.repeat(c, l)), fi(d), p).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), ar(r, "id", ri("recharts-line-")), ar(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ar(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ar(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return hH(t, e7), cH(t, [{ key: "componentDidMount", value: function() {
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
      var b = De(De(De({ key: "dot-".concat(p), r: 3 }, f), h), {}, { index: p, cx: m.x, cy: m.y, value: m.value, dataKey: l, payload: m.payload, points: u });
      return t.renderDotItem(c, b);
    }), y = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, to({ className: "recharts-line-dots", key: "dots" }, y), d);
  } }, { key: "renderCurveStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
    s.ref;
    var f = Jg(s, tH), h = De(De(De({}, ut(f, true)), {}, { fill: "none", className: "recharts-line-curve", clipPath: i ? "url(#clipPath-".concat(a, ")") : null, points: n }, o), {}, { type: c, layout: u, connectNulls: l });
    return A.createElement(Vn, to({}, h, { pathRef: this.pathRef }));
  } }, { key: "renderCurveWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, b = this.state, _ = b.prevPoints, S = b.totalLength;
    return A.createElement(lr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(w) {
      var v = w.t;
      if (_) {
        var g = _.length / s.length, O = s.map(function(I, j) {
          var N = Math.floor(j * g);
          if (_[N]) {
            var M = _[N], C = Ht(M.x, I.x), R = Ht(M.y, I.y);
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
      var P = Ht(0, S), T = P(v), $;
      if (c) {
        var E = "".concat(c).split(/[,\s]+/gim).map(function(I) {
          return parseFloat(I);
        });
        $ = a.getStrokeDasharray(T, S, E);
      } else $ = a.generateSimpleStrokeDasharray(S, T);
      return a.renderCurveStatically(s, n, i, { strokeDasharray: $ });
    });
  } }, { key: "renderCurve", value: function(n, i) {
    var a = this.props, o = a.points, s = a.isAnimationActive, c = this.state, u = c.prevPoints, l = c.totalLength;
    return s && o && o.length && (!u && l > 0 || !Xn(u, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.xAxis, l = i.yAxis, f = i.top, h = i.left, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var b = this.state.isAnimationFinished, _ = s.length === 1, S = mt("recharts-line", c), w = u && u.allowDataOverflow, v = l && l.allowDataOverflow, g = w || v, O = ct(p) ? this.id : p, P = (n = ut(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = j_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: S }, w || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: w ? h : h - d / 2, y: v ? f : f - y / 2, width: w ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: h - C / 2, y: f - C / 2, width: d + C, height: y + C }))) : null, !_ && this.renderCurve(g, O), this.renderErrorBar(g, O), (_ || o) && this.renderDots(g, M, O), (!m || b) && xr.renderCallByParent(this.props, s));
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
      var o = i.key, s = Jg(i, eH), c = mt("recharts-line-dot", typeof n != "boolean" ? n.className : "");
      a = A.createElement(nl, to({ key: o }, s, { className: c }));
    }
    return a;
  } }]);
}(B.PureComponent);
ar(qn, "displayName", "Line");
ar(qn, "defaultProps", { xAxisId: 0, yAxisId: 0, connectNulls: false, activeDot: true, dot: true, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !wn.isSsr, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: false, label: false });
ar(qn, "getComposedData", function(e7) {
  var t = e7.props, r = e7.xAxis, n = e7.yAxis, i = e7.xAxisTicks, a = e7.yAxisTicks, o = e7.dataKey, s = e7.bandSize, c = e7.displayedData, u = e7.offset, l = t.layout, f = c.map(function(h, d) {
    var y = ae(h, o);
    return l === "horizontal" ? { x: Ki({ axis: r, ticks: i, bandSize: s, entry: h, index: d }), y: ct(y) ? null : n.scale(y), value: y, payload: h } : { x: ct(y) ? null : r.scale(y), y: Ki({ axis: n, ticks: a, bandSize: s, entry: h, index: d }), value: y, payload: h };
  });
  return De({ points: f, layout: l }, u);
});
var pH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], yH = ["key"], CO;
function ia(e7) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e7);
}
function jO(e7, t) {
  if (e7 == null) return {};
  var r = mH(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function mH(e7, t) {
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
function nn(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), true).forEach(function(n) {
      Sr(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function vH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eb(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, RO(n.key), n);
  }
}
function gH(e7, t, r) {
  return t && eb(e7.prototype, t), r && eb(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function bH(e7, t, r) {
  return t = du(t), _H(e7, BO() ? Reflect.construct(t, r || [], du(e7).constructor) : t.apply(e7, r));
}
function _H(e7, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wH(e7);
}
function wH(e7) {
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
function SH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Fh(e7, t);
}
function Fh(e7, t) {
  return Fh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fh(e7, t);
}
function Sr(e7, t, r) {
  return t = RO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function RO(e7) {
  var t = OH(e7, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function OH(e7, t) {
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
    vH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = bH(this, t, [].concat(i)), Sr(r, "state", { isAnimationFinished: true }), Sr(r, "id", ri("recharts-area-")), Sr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), lt(o) && o();
    }), Sr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), lt(o) && o();
    }), r;
  }
  return SH(t, e7), gH(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var c = this.props, u = c.dot, l = c.points, f = c.dataKey, h = ut(this.props, false), d = ut(u, true), y = l.map(function(p, b) {
      var _ = nn(nn(nn({ key: "dot-".concat(b), r: 3 }, h), d), {}, { index: b, cx: p.x, cy: p.y, dataKey: f, value: p.value, payload: p.payload, points: l });
      return t.renderDotItem(u, _);
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
    var d = jO(s, pH);
    return A.createElement(St, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, A.createElement(Vn, Ln({}, ut(d, true), { points: n, connectNulls: f, type: u, baseLine: i, layout: c, stroke: "none", className: "recharts-area-area" })), l !== "none" && A.createElement(Vn, Ln({}, ut(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: n })), l !== "none" && h && A.createElement(Vn, Ln({}, ut(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
    return A.createElement(lr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(b) {
      var _ = b.t;
      if (m) {
        var S = m.length / s.length, w = s.map(function(P, T) {
          var $ = Math.floor(T * S);
          if (m[$]) {
            var E = m[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return nn(nn({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        }), v;
        if (L(c) && typeof c == "number") {
          var g = Ht(p, c);
          v = g(_);
        } else if (ct(c) || ga(c)) {
          var O = Ht(p, 0);
          v = O(_);
        } else v = c.map(function(P, T) {
          var $ = Math.floor(T * S);
          if (p[$]) {
            var E = p[$], I = Ht(E.x, P.x), j = Ht(E.y, P.y);
            return nn(nn({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        });
        return a.renderAreaStatically(w, v, n, i);
      }
      return A.createElement(St, null, A.createElement("defs", null, A.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(_))), A.createElement(St, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, c, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, c = a.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, h = u.totalLength;
    return c && o && o.length && (!l && h > 0 || !Xn(l, o) || !Xn(f, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.top, l = i.left, f = i.xAxis, h = i.yAxis, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var b = this.state.isAnimationFinished, _ = s.length === 1, S = mt("recharts-area", c), w = f && f.allowDataOverflow, v = h && h.allowDataOverflow, g = w || v, O = ct(p) ? this.id : p, P = (n = ut(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = j_(o) ? o : {}, N = j.clipDot, M = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: S }, w || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: w ? l : l - d / 2, y: v ? u : u - y / 2, width: w ? d : d * 2, height: v ? y : y * 2 })), !M && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: l - C / 2, y: u - C / 2, width: d + C, height: y + C }))) : null, _ ? null : this.renderArea(g, O), (o || _) && this.renderDots(g, M, O), (!m || b) && xr.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(B.PureComponent);
CO = Hr;
Sr(Hr, "displayName", "Area");
Sr(Hr, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
Sr(Hr, "getBaseValue", function(e7, t, r, n) {
  var i = e7.layout, a = e7.baseValue, o = t.props.baseValue, s = o ?? a;
  if (L(s) && typeof s == "number") return s;
  var c = i === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
Sr(Hr, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.xAxis, i = e7.yAxis, a = e7.xAxisTicks, o = e7.yAxisTicks, s = e7.bandSize, c = e7.dataKey, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = t.layout, y = u && u.length, m = CO.getBaseValue(t, r, n, i), p = d === "horizontal", b = false, _ = f.map(function(w, v) {
    var g;
    y ? g = u[l + v] : (g = ae(w, c), Array.isArray(g) ? b = true : g = [m, g]);
    var O = g[1] == null || y && ae(w, c) == null;
    return p ? { x: Ki({ axis: n, ticks: a, bandSize: s, entry: w, index: v }), y: O ? null : i.scale(g[1]), value: g, payload: w } : { x: O ? null : n.scale(g[1]), y: Ki({ axis: i, ticks: o, bandSize: s, entry: w, index: v }), value: g, payload: w };
  }), S;
  return y || b ? S = _.map(function(w) {
    var v = Array.isArray(w.value) ? w.value[0] : null;
    return p ? { x: w.x, y: v != null && w.y != null ? i.scale(v) : null } : { x: v != null ? n.scale(v) : null, y: w.y };
  }) : S = p ? i.scale(m) : n.scale(m), nn({ points: _, baseLine: S, layout: d, isRange: b }, h);
});
Sr(Hr, "renderDotItem", function(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (lt(e7)) r = e7(t);
  else {
    var n = mt("recharts-area-dot", typeof e7 != "boolean" ? e7.className : ""), i = t.key, a = jO(t, yH);
    r = A.createElement(nl, Ln({}, a, { key: i, className: n }));
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
function xH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function AH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, FO(n.key), n);
  }
}
function PH(e7, t, r) {
  return t && AH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function TH(e7, t, r) {
  return t = pu(t), IH(e7, kO() ? Reflect.construct(t, r || [], pu(e7).constructor) : t.apply(e7, r));
}
function IH(e7, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return EH(e7);
}
function EH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function kO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kO = function() {
    return !!e7;
  })();
}
function pu(e7) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e7);
}
function $H(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Uh(e7, t);
}
function Uh(e7, t) {
  return Uh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Uh(e7, t);
}
function LO(e7, t, r) {
  return t = FO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function FO(e7) {
  var t = MH(e7, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function MH(e7, t) {
  if (aa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var fl = function(e7) {
  function t() {
    return xH(this, t), TH(this, t, arguments);
  }
  return $H(t, e7), PH(t, [{ key: "render", value: function() {
    return null;
  } }]);
}(B.Component);
LO(fl, "displayName", "ZAxis");
LO(fl, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" });
var DH = ["option", "isActive"];
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, eo.apply(this, arguments);
}
function NH(e7, t) {
  if (e7 == null) return {};
  var r = CH(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function CH(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function jH(e7) {
  var t = e7.option, r = e7.isActive, n = NH(e7, DH);
  return typeof t == "string" ? B.createElement(Ph, eo({ option: B.createElement(Vu, eo({ type: t }, n)), isActive: r, shapeType: "symbols" }, n)) : B.createElement(Ph, eo({ option: t, isActive: r, shapeType: "symbols" }, n));
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
function rb(e7, t) {
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
    t % 2 ? rb(Object(r), true).forEach(function(n) {
      fn(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : rb(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function BH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function nb(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, zO(n.key), n);
  }
}
function RH(e7, t, r) {
  return t && nb(e7.prototype, t), r && nb(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function kH(e7, t, r) {
  return t = yu(t), LH(e7, UO() ? Reflect.construct(t, r || [], yu(e7).constructor) : t.apply(e7, r));
}
function LH(e7, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return FH(e7);
}
function FH(e7) {
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
function UH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && zh(e7, t);
}
function zh(e7, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e7, t);
}
function fn(e7, t, r) {
  return t = zO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function zO(e7) {
  var t = zH(e7, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function zH(e7, t) {
  if (oa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var hl = function(e7) {
  function t() {
    var r;
    BH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = kH(this, t, [].concat(i)), fn(r, "state", { isAnimationFinished: false }), fn(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true });
    }), fn(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false });
    }), fn(r, "id", ri("recharts-scatter-")), r;
  }
  return UH(t, e7), RH(t, [{ key: "renderSymbolsStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.activeShape, c = a.activeIndex, u = ut(this.props, false);
    return n.map(function(l, f) {
      var h = c === f, d = h ? s : o, y = We(We({}, u), l);
      return A.createElement(St, ro({ className: "recharts-scatter-symbol", key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f) }, uo(i.props, l, f), { role: "img" }), A.createElement(jH, ro({ option: d, isActive: h, key: "symbol-".concat(f) }, y)));
    });
  } }, { key: "renderSymbolsWithAnimation", value: function() {
    var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, u = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
    return A.createElement(lr, { begin: s, duration: c, isActive: o, easing: u, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(l), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var d = h.t, y = a.map(function(m, p) {
        var b = f && f[p];
        if (b) {
          var _ = Ht(b.cx, m.cx), S = Ht(b.cy, m.cy), w = Ht(b.size, m.size);
          return We(We({}, m), {}, { cx: _(d), cy: S(d), size: w(d) });
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
    var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, c = i.children, u = Te(c, Aa);
    return u ? u.map(function(l, f) {
      var h = l.props, d = h.direction, y = h.dataKey;
      return A.cloneElement(l, { key: "".concat(d, "-").concat(y, "-").concat(a[f]), data: a, xAxis: o, yAxis: s, layout: d === "x" ? "vertical" : "horizontal", dataPointFormatter: function(p, b) {
        return { x: p.cx, y: p.cy, value: d === "x" ? +p.node.x : +p.node.y, errorVal: ae(p, b) };
      } });
    }) : null;
  } }, { key: "renderLine", value: function() {
    var n = this.props, i = n.points, a = n.line, o = n.lineType, s = n.lineJointType, c = ut(this.props, false), u = ut(a, false), l, f;
    if (o === "joint") l = i.map(function(S) {
      return { x: S.cx, y: S.cy };
    });
    else if (o === "fitting") {
      var h = y$(i), d = h.xmin, y = h.xmax, m = h.a, p = h.b, b = function(w) {
        return m * w + p;
      };
      l = [{ x: d, y: b(d) }, { x: y, y: b(y) }];
    }
    var _ = We(We(We({}, c), {}, { fill: "none", stroke: c && c.fill }, u), {}, { points: l });
    return A.isValidElement(a) ? f = A.cloneElement(a, _) : lt(a) ? f = a(_) : f = A.createElement(Vn, ro({}, _, { type: s })), A.createElement(St, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, f);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, h = n.width, d = n.height, y = n.id, m = n.isAnimationActive;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, b = mt("recharts-scatter", s), _ = c && c.allowDataOverflow, S = u && u.allowDataOverflow, w = _ || S, v = ct(y) ? this.id : y;
    return A.createElement(St, { className: b, clipPath: w ? "url(#clipPath-".concat(v, ")") : null }, _ || S ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? l : l - h / 2, y: S ? f : f - d / 2, width: _ ? h : h * 2, height: S ? d : d * 2 }))) : null, o && this.renderLine(), this.renderErrorBar(), A.createElement(St, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!m || p) && xr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }]);
}(B.PureComponent);
fn(hl, "displayName", "Scatter");
fn(hl, "defaultProps", { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: false, isAnimationActive: !wn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" });
fn(hl, "getComposedData", function(e7) {
  var t = e7.xAxis, r = e7.yAxis, n = e7.zAxis, i = e7.item, a = e7.displayedData, o = e7.xAxisTicks, s = e7.yAxisTicks, c = e7.offset, u = i.props.tooltipType, l = Te(i.props.children, Qd), f = ct(t.dataKey) ? i.props.dataKey : t.dataKey, h = ct(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : fl.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, b = r.scale.bandwidth ? r.scale.bandwidth() : 0, _ = a.map(function(S, w) {
    var v = ae(S, f), g = ae(S, h), O = !ct(d) && ae(S, d) || "-", P = [{ name: ct(t.dataKey) ? i.props.name : t.name || t.dataKey, unit: t.unit || "", value: v, payload: S, dataKey: f, type: u }, { name: ct(r.dataKey) ? i.props.name : r.name || r.dataKey, unit: r.unit || "", value: g, payload: S, dataKey: h, type: u }];
    O !== "-" && P.push({ name: n.name || n.dataKey, unit: n.unit || "", value: O, payload: S, dataKey: d, type: u });
    var T = Ki({ axis: t, ticks: o, bandSize: p, entry: S, index: w, dataKey: f }), $ = Ki({ axis: r, ticks: s, bandSize: b, entry: S, index: w, dataKey: h }), E = O !== "-" ? n.scale(O) : m, I = Math.sqrt(Math.max(E, 0) / Math.PI);
    return We(We({}, S), {}, { cx: T, cy: $, x: T - I, y: $ - I, xAxis: t, yAxis: r, zAxis: n, width: 2 * I, height: 2 * I, size: E, node: { x: v, y: g, z: O }, tooltipPayload: P, tooltipPosition: { x: T, y: $ }, payload: S }, l && l[w] && l[w].props);
  });
  return We({ points: _ }, c);
});
function sa(e7) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e7);
}
function WH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function VH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, qO(n.key), n);
  }
}
function qH(e7, t, r) {
  return t && VH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function GH(e7, t, r) {
  return t = mu(t), HH(e7, WO() ? Reflect.construct(t, r || [], mu(e7).constructor) : t.apply(e7, r));
}
function HH(e7, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return KH(e7);
}
function KH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function WO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (WO = function() {
    return !!e7;
  })();
}
function mu(e7) {
  return mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mu(e7);
}
function YH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Wh(e7, t);
}
function Wh(e7, t) {
  return Wh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wh(e7, t);
}
function VO(e7, t, r) {
  return t = qO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function qO(e7) {
  var t = XH(e7, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function XH(e7, t) {
  if (sa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Vh() {
  return Vh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Vh.apply(this, arguments);
}
function JH(e7) {
  var t = e7.xAxisId, r = Ip(), n = Ep(), i = _O(t);
  return i == null ? null : B.createElement(Ta, Vh({}, i, { className: mt("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Fr(o, true);
  } }));
}
var Vo = function(e7) {
  function t() {
    return WH(this, t), GH(this, t, arguments);
  }
  return YH(t, e7), qH(t, [{ key: "render", value: function() {
    return B.createElement(JH, this.props);
  } }]);
}(B.Component);
VO(Vo, "displayName", "XAxis");
VO(Vo, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function ca(e7) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e7);
}
function QH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ZH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, KO(n.key), n);
  }
}
function tK(e7, t, r) {
  return t && ZH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function eK(e7, t, r) {
  return t = vu(t), rK(e7, GO() ? Reflect.construct(t, r || [], vu(e7).constructor) : t.apply(e7, r));
}
function rK(e7, t) {
  if (t && (ca(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return nK(e7);
}
function nK(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function GO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (GO = function() {
    return !!e7;
  })();
}
function vu(e7) {
  return vu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vu(e7);
}
function iK(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && qh(e7, t);
}
function qh(e7, t) {
  return qh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qh(e7, t);
}
function HO(e7, t, r) {
  return t = KO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function KO(e7) {
  var t = aK(e7, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function aK(e7, t) {
  if (ca(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Gh() {
  return Gh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Gh.apply(this, arguments);
}
var oK = function(t) {
  var r = t.yAxisId, n = Ip(), i = Ep(), a = wO(r);
  return a == null ? null : B.createElement(Ta, Gh({}, a, { className: mt("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return Fr(s, true);
  } }));
}, Ni = function(e7) {
  function t() {
    return QH(this, t), eK(this, t, arguments);
  }
  return iK(t, e7), tK(t, [{ key: "render", value: function() {
    return B.createElement(oK, this.props);
  } }]);
}(B.Component);
HO(Ni, "displayName", "YAxis");
HO(Ni, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function ib(e7) {
  return lK(e7) || uK(e7) || cK(e7) || sK();
}
function sK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cK(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Hh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hh(e7, t);
  }
}
function uK(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function lK(e7) {
  if (Array.isArray(e7)) return Hh(e7);
}
function Hh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var Kh = function(t, r, n, i, a) {
  var o = Te(t, Mp), s = Te(t, cl), c = [].concat(ib(o), ib(s)), u = Te(t, ll), l = "".concat(i, "Id"), f = i[0], h = r;
  if (c.length && (h = c.reduce(function(m, p) {
    if (p.props[l] === n && Ar(p.props, "extendDomain") && L(p.props[f])) {
      var b = p.props[f];
      return [Math.min(m[0], b), Math.max(m[1], b)];
    }
    return m;
  }, h)), u.length) {
    var d = "".concat(f, "1"), y = "".concat(f, "2");
    h = u.reduce(function(m, p) {
      if (p.props[l] === n && Ar(p.props, "extendDomain") && L(p.props[d]) && L(p.props[y])) {
        var b = p.props[d], _ = p.props[y];
        return [Math.min(m[0], b, _), Math.max(m[1], b, _)];
      }
      return m;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(m, p) {
    return L(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, h)), h;
}, YO = { exports: {} };
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
    var p = this._events[m], b = arguments.length, _, S;
    if (p.fn) {
      switch (p.once && this.removeListener(u, p.fn, void 0, true), b) {
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
      for (S = 1, _ = new Array(b - 1); S < b; S++) _[S - 1] = arguments[S];
      p.fn.apply(p.context, _);
    } else {
      var w = p.length, v;
      for (S = 0; S < w; S++) switch (p[S].once && this.removeListener(u, p[S].fn, void 0, true), b) {
        case 1:
          p[S].fn.call(p[S].context);
          break;
        case 2:
          p[S].fn.call(p[S].context, l);
          break;
        case 3:
          p[S].fn.call(p[S].context, l, f);
          break;
        case 4:
          p[S].fn.call(p[S].context, l, f, h);
          break;
        default:
          if (!_) for (v = 1, _ = new Array(b - 1); v < b; v++) _[v - 1] = arguments[v];
          p[S].fn.apply(p[S].context, _);
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
      for (var m = 0, p = [], b = y.length; m < b; m++) (y[m].fn !== l || h && !y[m].once || f && y[m].context !== f) && p.push(y[m]);
      p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var l;
    return u ? (l = r ? r + u : u, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e7.exports = s;
})(YO);
var fK = YO.exports;
const hK = Bt(fK);
var ef = new hK(), rf = "recharts.syncMouseEvents";
function qo(e7) {
  "@babel/helpers - typeof";
  return qo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qo(e7);
}
function dK(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function pK(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, XO(n.key), n);
  }
}
function yK(e7, t, r) {
  return t && pK(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function nf(e7, t, r) {
  return t = XO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function XO(e7) {
  var t = mK(e7, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function mK(e7, t) {
  if (qo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var vK = function() {
  function e7() {
    dK(this, e7), nf(this, "activeIndex", 0), nf(this, "coordinateList", []), nf(this, "layout", "horizontal");
  }
  return yK(e7, [{ key: "setDetails", value: function(r) {
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
function gK(e7, t, r) {
  if (r === "number" && t === true && Array.isArray(e7)) {
    var n = e7 == null ? void 0 : e7[0], i = e7 == null ? void 0 : e7[1];
    if (n && i && L(n) && L(i)) return true;
  }
  return false;
}
function bK(e7, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e7 === "horizontal" ? t.x - i : r.left + 0.5, y: e7 === "horizontal" ? r.top + 0.5 : t.y - i, width: e7 === "horizontal" ? n : r.width - 1, height: e7 === "horizontal" ? r.height - 1 : n };
}
function JO(e7) {
  var t = e7.cx, r = e7.cy, n = e7.radius, i = e7.startAngle, a = e7.endAngle, o = le(t, r, n, i), s = le(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function _K(e7, t, r) {
  var n, i, a, o;
  if (e7 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e7 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e7 === "centric") {
    var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, h = le(s, c, u, f), d = le(s, c, l, f);
    n = h.x, i = h.y, a = d.x, o = d.y;
  } else return JO(t);
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
function ab(e7, t) {
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
    t % 2 ? ab(Object(r), true).forEach(function(n) {
      wK(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function wK(e7, t, r) {
  return t = SK(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function SK(e7) {
  var t = OK(e7, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function OK(e7, t) {
  if (Go(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function xK(e7) {
  var t, r, n = e7.element, i = e7.tooltipEventType, a = e7.isActive, o = e7.activeCoordinate, s = e7.activePayload, c = e7.offset, u = e7.activeTooltipIndex, l = e7.tooltipAxisBandSize, f = e7.layout, h = e7.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
  var y, m = Vn;
  if (h === "ScatterChart") y = o, m = YW;
  else if (h === "BarChart") y = bK(f, o, c, l), m = xp;
  else if (f === "radial") {
    var p = JO(o), b = p.cx, _ = p.cy, S = p.radius, w = p.startAngle, v = p.endAngle;
    y = { cx: b, cy: _, startAngle: w, endAngle: v, innerRadius: S, outerRadius: S }, m = GS;
  } else y = { points: _K(f, o, c) }, m = Vn;
  var g = Ss(Ss(Ss(Ss({ stroke: "#ccc", pointerEvents: "none" }, c), y), ut(d, false)), {}, { payload: s, payloadIndex: u, className: mt("recharts-tooltip-cursor", d.className) });
  return B.isValidElement(d) ? B.cloneElement(d, g) : B.createElement(m, g);
}
var AK = ["item"], PK = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function ob(e7, t) {
  return EK(e7) || IK(e7, t) || ZO(e7, t) || TK();
}
function TK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IK(e7, t) {
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
function EK(e7) {
  if (Array.isArray(e7)) return e7;
}
function sb(e7, t) {
  if (e7 == null) return {};
  var r = $K(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function $K(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function MK(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function DK(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, t1(n.key), n);
  }
}
function NK(e7, t, r) {
  return t && DK(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function CK(e7, t, r) {
  return t = gu(t), jK(e7, QO() ? Reflect.construct(t, r || [], gu(e7).constructor) : t.apply(e7, r));
}
function jK(e7, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return BK(e7);
}
function BK(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function QO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QO = function() {
    return !!e7;
  })();
}
function gu(e7) {
  return gu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gu(e7);
}
function RK(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Yh(e7, t);
}
function Yh(e7, t) {
  return Yh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Yh(e7, t);
}
function la(e7) {
  return FK(e7) || LK(e7) || ZO(e7) || kK();
}
function kK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZO(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Xh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xh(e7, t);
  }
}
function LK(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function FK(e7) {
  if (Array.isArray(e7)) return Xh(e7);
}
function Xh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function cb(e7, t) {
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
    t % 2 ? cb(Object(r), true).forEach(function(n) {
      Q(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Q(e7, t, r) {
  return t = t1(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function t1(e7) {
  var t = UK(e7, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function UK(e7, t) {
  if (ua(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var zK = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, WK = { width: "100%", height: "100%" }, e1 = { x: 0, y: 0 };
function Os(e7) {
  return e7;
}
var VK = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, qK = function(t, r, n, i) {
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
  return e1;
}, dl = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(la(s), la(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function r1(e7) {
  return e7 === "number" ? [0, "auto"] : void 0;
}
var Jh = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = dl(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = f === void 0 ? s : f;
      h = mc(d, o.dataKey, i);
    } else h = f && f[n] || s[n];
    return h ? [].concat(la(c), [WS(u, h)]) : c;
  }, []);
}, ub = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = VK(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = T6(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, h = Jh(t, r, l, f), d = qK(n, s, l, a);
    return { activeTooltipIndex: l, activeLabel: f, activePayload: h, activeCoordinate: d };
  }
  return null;
}, GK = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = t.stackOffset, d = FS(l, a);
  return n.reduce(function(y, m) {
    var p, b = m.type.defaultProps !== void 0 ? D(D({}, m.type.defaultProps), m.props) : m.props, _ = b.type, S = b.dataKey, w = b.allowDataOverflow, v = b.allowDuplicatedCategory, g = b.scale, O = b.ticks, P = b.includeHidden, T = b[o];
    if (y[T]) return y;
    var $ = dl(t.data, { graphicalItems: i.filter(function(W) {
      var at, Rt = o in W.props ? W.props[o] : (at = W.type.defaultProps) === null || at === void 0 ? void 0 : at[o];
      return Rt === T;
    }), dataStartIndex: c, dataEndIndex: u }), E = $.length, I, j, N;
    gK(b.domain, w, _) && (I = lh(b.domain, null, w), d && (_ === "number" || g !== "auto") && (N = Qa($, S, "category")));
    var M = r1(_);
    if (!I || I.length === 0) {
      var C, R = (C = b.domain) !== null && C !== void 0 ? C : M;
      if (S) {
        if (I = Qa($, S, _), _ === "category" && d) {
          var F = p$(I);
          v && F ? (j = I, I = ru(0, E)) : v || (I = Fv(R, I, m).reduce(function(W, at) {
            return W.indexOf(at) >= 0 ? W : [].concat(la(W), [at]);
          }, []));
        } else if (_ === "category") v ? I = I.filter(function(W) {
          return W !== "" && !ct(W);
        }) : I = Fv(R, I, m).reduce(function(W, at) {
          return W.indexOf(at) >= 0 || at === "" || ct(at) ? W : [].concat(la(W), [at]);
        }, []);
        else if (_ === "number") {
          var U = D6($, i.filter(function(W) {
            var at, Rt, Yt = o in W.props ? W.props[o] : (at = W.type.defaultProps) === null || at === void 0 ? void 0 : at[o], Me = "hide" in W.props ? W.props.hide : (Rt = W.type.defaultProps) === null || Rt === void 0 ? void 0 : Rt.hide;
            return Yt === T && (P || !Me);
          }), S, a, l);
          U && (I = U);
        }
        d && (_ === "number" || g !== "auto") && (N = Qa($, S, "category"));
      } else d ? I = ru(0, E) : s && s[T] && s[T].hasStack && _ === "number" ? I = h === "expand" ? [0, 1] : zS(s[T].stackGroups, c, u) : I = LS($, i.filter(function(W) {
        var at = o in W.props ? W.props[o] : W.type.defaultProps[o], Rt = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return at === T && (P || !Rt);
      }), _, l, true);
      if (_ === "number") I = Kh(f, I, T, a, O), R && (I = lh(R, I, w));
      else if (_ === "category" && R) {
        var q = R, nt = I.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        nt && (I = q);
      }
    }
    return D(D({}, y), {}, Q({}, T, D(D({}, b), {}, { axisType: a, domain: I, categoricalDomain: N, duplicateDomain: j, originalDomain: (p = b.domain) !== null && p !== void 0 ? p : M, isCategorical: d, layout: l })));
  }, {});
}, HK = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = dl(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: u }), d = h.length, y = FS(l, a), m = -1;
  return n.reduce(function(p, b) {
    var _ = b.type.defaultProps !== void 0 ? D(D({}, b.type.defaultProps), b.props) : b.props, S = _[o], w = r1("number");
    if (!p[S]) {
      m++;
      var v;
      return y ? v = ru(0, d) : s && s[S] && s[S].hasStack ? (v = zS(s[S].stackGroups, c, u), v = Kh(f, v, S, a)) : (v = lh(w, LS(h, n.filter(function(g) {
        var O, P, T = o in g.props ? g.props[o] : (O = g.type.defaultProps) === null || O === void 0 ? void 0 : O[o], $ = "hide" in g.props ? g.props.hide : (P = g.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return T === S && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), v = Kh(f, v, S, a)), D(D({}, p), {}, Q({}, S, D(D({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ye(zK, "".concat(a, ".").concat(m % 2), null), domain: v, originalDomain: w, isCategorical: y, layout: l })));
    }
    return p;
  }, {});
}, KK = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), h = Te(l, a), d = {};
  return h && h.length ? d = GK(t, { axes: h, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u }) : o && o.length && (d = HK(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u })), d;
}, YK = function(t) {
  var r = cn(t), n = Fr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: Xd(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Gc(r, n) };
}, lb = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = je(r, Ji), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, XK = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = Ur(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, fb = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, JK = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, h = n.margin || {}, d = je(f, Ji), y = je(f, Un), m = Object.keys(c).reduce(function(v, g) {
    var O = c[g], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, Q({}, P, v[P] + O.width)) : v;
  }, { left: h.left || 0, right: h.right || 0 }), p = Object.keys(o).reduce(function(v, g) {
    var O = o[g], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, v), {}, Q({}, P, Ye(v, "".concat(P)) + O.height)) : v;
  }, { top: h.top || 0, bottom: h.bottom || 0 }), b = D(D({}, p), m), _ = b.bottom;
  d && (b.bottom += d.props.height || Ji.defaultProps.height), y && r && (b = $6(b, i, n, r));
  var S = u - b.left - b.right, w = l - b.top - b.bottom;
  return D(D({ brushBottom: _ }, b), {}, { width: Math.max(S, 0), height: Math.max(w, 0) });
}, QK = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, ZK = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, h = function(b, _) {
    var S = _.graphicalItems, w = _.stackGroups, v = _.offset, g = _.updateId, O = _.dataStartIndex, P = _.dataEndIndex, T = b.barSize, $ = b.layout, E = b.barGap, I = b.barCategoryGap, j = b.maxBarSize, N = fb($), M = N.numericAxisName, C = N.cateAxisName, R = XK(S), F = [];
    return S.forEach(function(U, q) {
      var nt = dl(b.data, { graphicalItems: [U], dataStartIndex: O, dataEndIndex: P }), W = U.type.defaultProps !== void 0 ? D(D({}, U.type.defaultProps), U.props) : U.props, at = W.dataKey, Rt = W.maxBarSize, Yt = W["".concat(M, "Id")], Me = W["".concat(C, "Id")], An = {}, we = c.reduce(function(Pn, Tn) {
        var pl = _["".concat(Tn.axisType, "Map")], Cp = W["".concat(Tn.axisType, "Id")];
        pl && pl[Cp] || Tn.axisType === "zAxis" || Qn();
        var jp = pl[Cp];
        return D(D({}, Pn), {}, Q(Q({}, Tn.axisType, jp), "".concat(Tn.axisType, "Ticks"), Fr(jp)));
      }, An), z = we[C], ft = we["".concat(C, "Ticks")], ht = w && w[Yt] && w[Yt].hasStack && V6(U, w[Yt].stackGroups), k = Ur(U.type).indexOf("Bar") >= 0, qt = Gc(z, ft), bt = [], Qt = R && I6({ barSize: T, stackGroups: w, totalSize: QK(we, C) });
      if (k) {
        var Zt, Se, tn = ct(Rt) ? j : Rt, oi = (Zt = (Se = Gc(z, ft, true)) !== null && Se !== void 0 ? Se : tn) !== null && Zt !== void 0 ? Zt : 0;
        bt = E6({ barGap: E, barCategoryGap: I, bandSize: oi !== qt ? oi : qt, sizeList: Qt[Me], maxBarSize: tn }), oi !== qt && (bt = bt.map(function(Pn) {
          return D(D({}, Pn), {}, { position: D(D({}, Pn.position), {}, { offset: Pn.position.offset - oi / 2 }) });
        }));
      }
      var as = U && U.type && U.type.getComposedData;
      as && F.push({ props: D(D({}, as(D(D({}, we), {}, { displayedData: nt, props: b, dataKey: at, item: U, bandSize: qt, barPosition: bt, offset: v, stackedData: ht, layout: $, dataStartIndex: O, dataEndIndex: P }))), {}, Q(Q(Q({ key: U.key || "item-".concat(q) }, M, we[M]), C, we[C]), "animationId", g)), childIndex: T$(U, b.children), item: U });
    }), F;
  }, d = function(b, _) {
    var S = b.props, w = b.dataStartIndex, v = b.dataEndIndex, g = b.updateId;
    if (!Ny({ props: S })) return null;
    var O = S.children, P = S.layout, T = S.stackOffset, $ = S.data, E = S.reverseStackOrder, I = fb(P), j = I.numericAxisName, N = I.cateAxisName, M = Te(O, n), C = U6($, M, "".concat(j, "Id"), "".concat(N, "Id"), T, E), R = c.reduce(function(W, at) {
      var Rt = "".concat(at.axisType, "Map");
      return D(D({}, W), {}, Q({}, Rt, KK(S, D(D({}, at), {}, { graphicalItems: M, stackGroups: at.axisType === j && C, dataStartIndex: w, dataEndIndex: v }))));
    }, {}), F = JK(D(D({}, R), {}, { props: S, graphicalItems: M }), _ == null ? void 0 : _.legendBBox);
    Object.keys(R).forEach(function(W) {
      R[W] = l(S, R[W], F, W.replace("Map", ""), r);
    });
    var U = R["".concat(N, "Map")], q = YK(U), nt = h(S, D(D({}, R), {}, { dataStartIndex: w, dataEndIndex: v, updateId: g, graphicalItems: M, stackGroups: C, offset: F }));
    return D(D({ formattedGraphicalItems: nt, graphicalItems: M, offset: F, stackGroups: C }, q), R);
  }, y = function(p) {
    function b(_) {
      var S, w, v;
      return MK(this, b), v = CK(this, b, [_]), Q(v, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Q(v, "accessibilityManager", new vK()), Q(v, "handleLegendBBoxUpdate", function(g) {
        if (g) {
          var O = v.state, P = O.dataStartIndex, T = O.dataEndIndex, $ = O.updateId;
          v.setState(D({ legendBBox: g }, d({ props: v.props, dataStartIndex: P, dataEndIndex: T, updateId: $ }, D(D({}, v.state), {}, { legendBBox: g }))));
        }
      }), Q(v, "handleReceiveSyncEvent", function(g, O, P) {
        if (v.props.syncId === g) {
          if (P === v.eventEmitterSymbol && typeof v.props.syncMethod != "function") return;
          v.applySyncEvent(O);
        }
      }), Q(v, "handleBrushChange", function(g) {
        var O = g.startIndex, P = g.endIndex;
        if (O !== v.state.dataStartIndex || P !== v.state.dataEndIndex) {
          var T = v.state.updateId;
          v.setState(function() {
            return D({ dataStartIndex: O, dataEndIndex: P }, d({ props: v.props, dataStartIndex: O, dataEndIndex: P, updateId: T }, v.state));
          }), v.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: P });
        }
      }), Q(v, "handleMouseEnter", function(g) {
        var O = v.getMouseInfo(g);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onMouseEnter;
          lt(T) && T(P, g);
        }
      }), Q(v, "triggeredAfterMouseMove", function(g) {
        var O = v.getMouseInfo(g), P = O ? D(D({}, O), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        v.setState(P), v.triggerSyncEvent(P);
        var T = v.props.onMouseMove;
        lt(T) && T(P, g);
      }), Q(v, "handleItemMouseEnter", function(g) {
        v.setState(function() {
          return { isTooltipActive: true, activeItem: g, activePayload: g.tooltipPayload, activeCoordinate: g.tooltipPosition || { x: g.cx, y: g.cy } };
        });
      }), Q(v, "handleItemMouseLeave", function() {
        v.setState(function() {
          return { isTooltipActive: false };
        });
      }), Q(v, "handleMouseMove", function(g) {
        g.persist(), v.throttleTriggeredAfterMouseMove(g);
      }), Q(v, "handleMouseLeave", function(g) {
        v.throttleTriggeredAfterMouseMove.cancel();
        var O = { isTooltipActive: false };
        v.setState(O), v.triggerSyncEvent(O);
        var P = v.props.onMouseLeave;
        lt(P) && P(O, g);
      }), Q(v, "handleOuterEvent", function(g) {
        var O = P$(g), P = Ye(v.props, "".concat(O));
        if (O && lt(P)) {
          var T, $;
          /.*touch.*/i.test(O) ? $ = v.getMouseInfo(g.changedTouches[0]) : $ = v.getMouseInfo(g), P((T = $) !== null && T !== void 0 ? T : {}, g);
        }
      }), Q(v, "handleClick", function(g) {
        var O = v.getMouseInfo(g);
        if (O) {
          var P = D(D({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onClick;
          lt(T) && T(P, g);
        }
      }), Q(v, "handleMouseDown", function(g) {
        var O = v.props.onMouseDown;
        if (lt(O)) {
          var P = v.getMouseInfo(g);
          O(P, g);
        }
      }), Q(v, "handleMouseUp", function(g) {
        var O = v.props.onMouseUp;
        if (lt(O)) {
          var P = v.getMouseInfo(g);
          O(P, g);
        }
      }), Q(v, "handleTouchMove", function(g) {
        g.changedTouches != null && g.changedTouches.length > 0 && v.throttleTriggeredAfterMouseMove(g.changedTouches[0]);
      }), Q(v, "handleTouchStart", function(g) {
        g.changedTouches != null && g.changedTouches.length > 0 && v.handleMouseDown(g.changedTouches[0]);
      }), Q(v, "handleTouchEnd", function(g) {
        g.changedTouches != null && g.changedTouches.length > 0 && v.handleMouseUp(g.changedTouches[0]);
      }), Q(v, "handleDoubleClick", function(g) {
        var O = v.props.onDoubleClick;
        if (lt(O)) {
          var P = v.getMouseInfo(g);
          O(P, g);
        }
      }), Q(v, "handleContextMenu", function(g) {
        var O = v.props.onContextMenu;
        if (lt(O)) {
          var P = v.getMouseInfo(g);
          O(P, g);
        }
      }), Q(v, "triggerSyncEvent", function(g) {
        v.props.syncId !== void 0 && ef.emit(rf, v.props.syncId, g, v.eventEmitterSymbol);
      }), Q(v, "applySyncEvent", function(g) {
        var O = v.props, P = O.layout, T = O.syncMethod, $ = v.state.updateId, E = g.dataStartIndex, I = g.dataEndIndex;
        if (g.dataStartIndex !== void 0 || g.dataEndIndex !== void 0) v.setState(D({ dataStartIndex: E, dataEndIndex: I }, d({ props: v.props, dataStartIndex: E, dataEndIndex: I, updateId: $ }, v.state)));
        else if (g.activeTooltipIndex !== void 0) {
          var j = g.chartX, N = g.chartY, M = g.activeTooltipIndex, C = v.state, R = C.offset, F = C.tooltipTicks;
          if (!R) return;
          if (typeof T == "function") M = T(F, g);
          else if (T === "value") {
            M = -1;
            for (var U = 0; U < F.length; U++) if (F[U].value === g.activeLabel) {
              M = U;
              break;
            }
          }
          var q = D(D({}, R), {}, { x: R.left, y: R.top }), nt = Math.min(j, q.x + q.width), W = Math.min(N, q.y + q.height), at = F[M] && F[M].value, Rt = Jh(v.state, v.props.data, M), Yt = F[M] ? { x: P === "horizontal" ? F[M].coordinate : nt, y: P === "horizontal" ? W : F[M].coordinate } : e1;
          v.setState(D(D({}, g), {}, { activeLabel: at, activeCoordinate: Yt, activePayload: Rt, activeTooltipIndex: M }));
        } else v.setState(g);
      }), Q(v, "renderCursor", function(g) {
        var O, P = v.state, T = P.isTooltipActive, $ = P.activeCoordinate, E = P.activePayload, I = P.offset, j = P.activeTooltipIndex, N = P.tooltipAxisBandSize, M = v.getTooltipEventType(), C = (O = g.props.active) !== null && O !== void 0 ? O : T, R = v.props.layout, F = g.key || "_recharts-cursor";
        return A.createElement(xK, { key: F, activeCoordinate: $, activePayload: E, activeTooltipIndex: j, chartName: r, element: g, isActive: C, layout: R, offset: I, tooltipAxisBandSize: N, tooltipEventType: M });
      }), Q(v, "renderPolarAxis", function(g, O, P) {
        var T = Ye(g, "type.axisType"), $ = Ye(v.state, "".concat(T, "Map")), E = g.type.defaultProps, I = E !== void 0 ? D(D({}, E), g.props) : g.props, j = $ && $[I["".concat(T, "Id")]];
        return B.cloneElement(g, D(D({}, j), {}, { className: mt(T, j.className), key: g.key || "".concat(O, "-").concat(P), ticks: Fr(j, true) }));
      }), Q(v, "renderPolarGrid", function(g) {
        var O = g.props, P = O.radialLines, T = O.polarAngles, $ = O.polarRadius, E = v.state, I = E.radiusAxisMap, j = E.angleAxisMap, N = cn(I), M = cn(j), C = M.cx, R = M.cy, F = M.innerRadius, U = M.outerRadius;
        return B.cloneElement(g, { polarAngles: Array.isArray(T) ? T : Fr(M, true).map(function(q) {
          return q.coordinate;
        }), polarRadius: Array.isArray($) ? $ : Fr(N, true).map(function(q) {
          return q.coordinate;
        }), cx: C, cy: R, innerRadius: F, outerRadius: U, key: g.key || "polar-grid", radialLines: P });
      }), Q(v, "renderLegend", function() {
        var g = v.state.formattedGraphicalItems, O = v.props, P = O.children, T = O.width, $ = O.height, E = v.props.margin || {}, I = T - (E.left || 0) - (E.right || 0), j = RS({ children: P, formattedGraphicalItems: g, legendWidth: I, legendContent: u });
        if (!j) return null;
        var N = j.item, M = sb(j, AK);
        return B.cloneElement(N, D(D({}, M), {}, { chartWidth: T, chartHeight: $, margin: E, onBBoxUpdate: v.handleLegendBBoxUpdate }));
      }), Q(v, "renderTooltip", function() {
        var g, O = v.props, P = O.children, T = O.accessibilityLayer, $ = je(P, nr);
        if (!$) return null;
        var E = v.state, I = E.isTooltipActive, j = E.activeCoordinate, N = E.activePayload, M = E.activeLabel, C = E.offset, R = (g = $.props.active) !== null && g !== void 0 ? g : I;
        return B.cloneElement($, { viewBox: D(D({}, C), {}, { x: C.left, y: C.top }), active: R, label: M, payload: R ? N : [], coordinate: j, accessibilityLayer: T });
      }), Q(v, "renderBrush", function(g) {
        var O = v.props, P = O.margin, T = O.data, $ = v.state, E = $.offset, I = $.dataStartIndex, j = $.dataEndIndex, N = $.updateId;
        return B.cloneElement(g, { key: g.key || "_recharts-brush", onChange: gs(v.handleBrushChange, g.props.onChange), data: T, x: L(g.props.x) ? g.props.x : E.left, y: L(g.props.y) ? g.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0), width: L(g.props.width) ? g.props.width : E.width, startIndex: I, endIndex: j, updateId: "brush-".concat(N) });
      }), Q(v, "renderReferenceElement", function(g, O, P) {
        if (!g) return null;
        var T = v, $ = T.clipPathId, E = v.state, I = E.xAxisMap, j = E.yAxisMap, N = E.offset, M = g.type.defaultProps || {}, C = g.props, R = C.xAxisId, F = R === void 0 ? M.xAxisId : R, U = C.yAxisId, q = U === void 0 ? M.yAxisId : U;
        return B.cloneElement(g, { key: g.key || "".concat(O, "-").concat(P), xAxis: I[F], yAxis: j[q], viewBox: { x: N.left, y: N.top, width: N.width, height: N.height }, clipPathId: $ });
      }), Q(v, "renderActivePoints", function(g) {
        var O = g.item, P = g.activePoint, T = g.basePoint, $ = g.childIndex, E = g.isRange, I = [], j = O.props.key, N = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = N.activeDot, C = N.dataKey, R = D(D({ index: $, dataKey: C, cx: P.x, cy: P.y, r: 4, fill: Op(O.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ut(M, false)), vc(M));
        return I.push(b.renderActiveDot(M, R, "".concat(j, "-activePoint-").concat($))), T ? I.push(b.renderActiveDot(M, D(D({}, R), {}, { cx: T.x, cy: T.y }), "".concat(j, "-basePoint-").concat($))) : E && I.push(null), I;
      }), Q(v, "renderGraphicChild", function(g, O, P) {
        var T = v.filterFormatItem(g, O, P);
        if (!T) return null;
        var $ = v.getTooltipEventType(), E = v.state, I = E.isTooltipActive, j = E.tooltipAxis, N = E.activeTooltipIndex, M = E.activeLabel, C = v.props.children, R = je(C, nr), F = T.props, U = F.points, q = F.isRange, nt = F.baseLine, W = T.item.type.defaultProps !== void 0 ? D(D({}, T.item.type.defaultProps), T.item.props) : T.item.props, at = W.activeDot, Rt = W.hide, Yt = W.activeBar, Me = W.activeShape, An = !!(!Rt && I && R && (at || Yt || Me)), we = {};
        $ !== "axis" && R && R.props.trigger === "click" ? we = { onClick: gs(v.handleItemMouseEnter, g.props.onClick) } : $ !== "axis" && (we = { onMouseLeave: gs(v.handleItemMouseLeave, g.props.onMouseLeave), onMouseEnter: gs(v.handleItemMouseEnter, g.props.onMouseEnter) });
        var z = B.cloneElement(g, D(D({}, T.props), we));
        function ft(Tn) {
          return typeof j.dataKey == "function" ? j.dataKey(Tn.payload) : null;
        }
        if (An) if (N >= 0) {
          var ht, k;
          if (j.dataKey && !j.allowDuplicatedCategory) {
            var qt = typeof j.dataKey == "function" ? ft : "payload.".concat(j.dataKey.toString());
            ht = mc(U, qt, M), k = q && nt && mc(nt, qt, M);
          } else ht = U == null ? void 0 : U[N], k = q && nt && nt[N];
          if (Me || Yt) {
            var bt = g.props.activeIndex !== void 0 ? g.props.activeIndex : N;
            return [B.cloneElement(g, D(D(D({}, T.props), we), {}, { activeIndex: bt })), null, null];
          }
          if (!ct(ht)) return [z].concat(la(v.renderActivePoints({ item: T, activePoint: ht, basePoint: k, childIndex: N, isRange: q })));
        } else {
          var Qt, Zt = (Qt = v.getItemByXY(v.state.activeCoordinate)) !== null && Qt !== void 0 ? Qt : { graphicalItem: z }, Se = Zt.graphicalItem, tn = Se.item, oi = tn === void 0 ? g : tn, as = Se.childIndex, Pn = D(D(D({}, T.props), we), {}, { activeIndex: as });
          return [B.cloneElement(oi, Pn), null, null];
        }
        return q ? [z, null, null] : [z, null];
      }), Q(v, "renderCustomized", function(g, O, P) {
        return B.cloneElement(g, D(D({ key: "recharts-customized-".concat(P) }, v.props), v.state));
      }), Q(v, "renderMap", { CartesianGrid: { handler: Os, once: true }, ReferenceArea: { handler: v.renderReferenceElement }, ReferenceLine: { handler: Os }, ReferenceDot: { handler: v.renderReferenceElement }, XAxis: { handler: Os }, YAxis: { handler: Os }, Brush: { handler: v.renderBrush, once: true }, Bar: { handler: v.renderGraphicChild }, Line: { handler: v.renderGraphicChild }, Area: { handler: v.renderGraphicChild }, Radar: { handler: v.renderGraphicChild }, RadialBar: { handler: v.renderGraphicChild }, Scatter: { handler: v.renderGraphicChild }, Pie: { handler: v.renderGraphicChild }, Funnel: { handler: v.renderGraphicChild }, Tooltip: { handler: v.renderCursor, once: true }, PolarGrid: { handler: v.renderPolarGrid, once: true }, PolarAngleAxis: { handler: v.renderPolarAxis }, PolarRadiusAxis: { handler: v.renderPolarAxis }, Customized: { handler: v.renderCustomized } }), v.clipPathId = "".concat((S = _.id) !== null && S !== void 0 ? S : ri("recharts"), "-clip"), v.throttleTriggeredAfterMouseMove = kw(v.triggeredAfterMouseMove, (w = _.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), v.state = {}, v;
    }
    return RK(b, p), NK(b, [{ key: "componentDidMount", value: function() {
      var S, w;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (S = this.props.margin.left) !== null && S !== void 0 ? S : 0, top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var S = this.props, w = S.children, v = S.data, g = S.height, O = S.layout, P = je(w, nr);
      if (P) {
        var T = P.props.defaultIndex;
        if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
          var $ = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, E = Jh(this.state, v, T, $), I = this.state.tooltipTicks[T].coordinate, j = (this.state.offset.top + g) / 2, N = O === "horizontal", M = N ? { x: I, y: j } : { y: I, x: j }, C = this.state.formattedGraphicalItems.find(function(F) {
            var U = F.item;
            return U.type.name === "Scatter";
          });
          C && (M = D(D({}, M), C.props.points[T].tooltipPosition), E = C.props.points[T].tooltipPayload);
          var R = { activeTooltipIndex: T, isTooltipActive: true, activeLabel: $, activePayload: E, activeCoordinate: M };
          this.setState(R), this.renderCursor(P), this.accessibilityManager.setIndex(T);
        }
      }
    } }, { key: "getSnapshotBeforeUpdate", value: function(S, w) {
      if (!this.props.accessibilityLayer) return null;
      if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== S.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== S.margin) {
        var v, g;
        this.accessibilityManager.setDetails({ offset: { left: (v = this.props.margin.left) !== null && v !== void 0 ? v : 0, top: (g = this.props.margin.top) !== null && g !== void 0 ? g : 0 } });
      }
      return null;
    } }, { key: "componentDidUpdate", value: function(S) {
      Af([je(S.children, nr)], [je(this.props.children, nr)]) || this.displayDefaultTooltip();
    } }, { key: "componentWillUnmount", value: function() {
      this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
    } }, { key: "getTooltipEventType", value: function() {
      var S = je(this.props.children, nr);
      if (S && typeof S.props.shared == "boolean") {
        var w = S.props.shared ? "axis" : "item";
        return s.indexOf(w) >= 0 ? w : a;
      }
      return a;
    } }, { key: "getMouseInfo", value: function(S) {
      if (!this.container) return null;
      var w = this.container, v = w.getBoundingClientRect(), g = ZL(v), O = { chartX: Math.round(S.pageX - g.left), chartY: Math.round(S.pageY - g.top) }, P = v.width / w.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, P);
      if (!T) return null;
      var $ = this.state, E = $.xAxisMap, I = $.yAxisMap, j = this.getTooltipEventType(), N = ub(this.state, this.props.data, this.props.layout, T);
      if (j !== "axis" && E && I) {
        var M = cn(E).scale, C = cn(I).scale, R = M && M.invert ? M.invert(O.chartX) : null, F = C && C.invert ? C.invert(O.chartY) : null;
        return D(D({}, O), {}, { xValue: R, yValue: F }, N);
      }
      return N ? D(D({}, O), N) : null;
    } }, { key: "inRange", value: function(S, w) {
      var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, g = this.props.layout, O = S / v, P = w / v;
      if (g === "horizontal" || g === "vertical") {
        var T = this.state.offset, $ = O >= T.left && O <= T.left + T.width && P >= T.top && P <= T.top + T.height;
        return $ ? { x: O, y: P } : null;
      }
      var E = this.state, I = E.angleAxisMap, j = E.radiusAxisMap;
      if (I && j) {
        var N = cn(I);
        return Wv({ x: O, y: P }, N);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var S = this.props.children, w = this.getTooltipEventType(), v = je(S, nr), g = {};
      v && w === "axis" && (v.props.trigger === "click" ? g = { onClick: this.handleClick } : g = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = vc(this.props, this.handleOuterEvent);
      return D(D({}, O), g);
    } }, { key: "addListener", value: function() {
      ef.on(rf, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      ef.removeListener(rf, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(S, w, v) {
      for (var g = this.state.formattedGraphicalItems, O = 0, P = g.length; O < P; O++) {
        var T = g[O];
        if (T.item === S || T.props.key === S.key || w === Ur(T.item.type) && v === T.childIndex) return T;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var S = this.clipPathId, w = this.state.offset, v = w.left, g = w.top, O = w.height, P = w.width;
      return A.createElement("defs", null, A.createElement("clipPath", { id: S }, A.createElement("rect", { x: v, y: g, height: O, width: P })));
    } }, { key: "getXScales", value: function() {
      var S = this.state.xAxisMap;
      return S ? Object.entries(S).reduce(function(w, v) {
        var g = ob(v, 2), O = g[0], P = g[1];
        return D(D({}, w), {}, Q({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var S = this.state.yAxisMap;
      return S ? Object.entries(S).reduce(function(w, v) {
        var g = ob(v, 2), O = g[0], P = g[1];
        return D(D({}, w), {}, Q({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getXScaleByAxisId", value: function(S) {
      var w;
      return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[S]) === null || w === void 0 ? void 0 : w.scale;
    } }, { key: "getYScaleByAxisId", value: function(S) {
      var w;
      return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[S]) === null || w === void 0 ? void 0 : w.scale;
    } }, { key: "getItemByXY", value: function(S) {
      var w = this.state, v = w.formattedGraphicalItems, g = w.activeItem;
      if (v && v.length) for (var O = 0, P = v.length; O < P; O++) {
        var T = v[O], $ = T.props, E = T.item, I = E.type.defaultProps !== void 0 ? D(D({}, E.type.defaultProps), E.props) : E.props, j = Ur(E.type);
        if (j === "Bar") {
          var N = ($.data || []).find(function(F) {
            return LW(S, F);
          });
          if (N) return { graphicalItem: T, payload: N };
        } else if (j === "RadialBar") {
          var M = ($.data || []).find(function(F) {
            return Wv(S, F);
          });
          if (M) return { graphicalItem: T, payload: M };
        } else if (il(T, g) || al(T, g) || Lo(T, g)) {
          var C = U5({ graphicalItem: T, activeTooltipItem: g, itemData: I.data }), R = I.activeIndex === void 0 ? C : I.activeIndex;
          return { graphicalItem: D(D({}, T), {}, { childIndex: R }), payload: Lo(T, g) ? I.data[C] : T.props.data[C] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var S = this;
      if (!Ny(this)) return null;
      var w = this.props, v = w.children, g = w.className, O = w.width, P = w.height, T = w.style, $ = w.compact, E = w.title, I = w.desc, j = sb(w, PK), N = ut(j, false);
      if ($) return A.createElement(kg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement(Tf, Ai({}, N, { width: O, height: P, title: E, desc: I }), this.renderClipPath(), jy(v, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var M, C;
        N.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, N.role = (C = this.props.role) !== null && C !== void 0 ? C : "application", N.onKeyDown = function(F) {
          S.accessibilityManager.keyboardEvent(F);
        }, N.onFocus = function() {
          S.accessibilityManager.focus();
        };
      }
      var R = this.parseEventsOfWrapper();
      return A.createElement(kg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement("div", Ai({ className: mt("recharts-wrapper", g), style: D({ position: "relative", cursor: "default", width: O, height: P }, T) }, R, { ref: function(U) {
        S.container = U;
      } }), A.createElement(Tf, Ai({}, N, { width: O, height: P, title: E, desc: I, style: WK }), this.renderClipPath(), jy(v, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(B.Component);
  Q(y, "displayName", r), Q(y, "defaultProps", D({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, f)), Q(y, "getDerivedStateFromProps", function(p, b) {
    var _ = p.dataKey, S = p.data, w = p.children, v = p.width, g = p.height, O = p.layout, P = p.stackOffset, T = p.margin, $ = b.dataStartIndex, E = b.dataEndIndex;
    if (b.updateId === void 0) {
      var I = lb(p);
      return D(D(D({}, I), {}, { updateId: 0 }, d(D(D({ props: p }, I), {}, { updateId: 0 }), b)), {}, { prevDataKey: _, prevData: S, prevWidth: v, prevHeight: g, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: w });
    }
    if (_ !== b.prevDataKey || S !== b.prevData || v !== b.prevWidth || g !== b.prevHeight || O !== b.prevLayout || P !== b.prevStackOffset || !$i(T, b.prevMargin)) {
      var j = lb(p), N = { chartX: b.chartX, chartY: b.chartY, isTooltipActive: b.isTooltipActive }, M = D(D({}, ub(b, S, O)), {}, { updateId: b.updateId + 1 }), C = D(D(D({}, j), N), M);
      return D(D(D({}, C), d(D({ props: p }, C), b)), {}, { prevDataKey: _, prevData: S, prevWidth: v, prevHeight: g, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: w });
    }
    if (!Af(w, b.prevChildren)) {
      var R, F, U, q, nt = je(w, Ji), W = nt && (R = (F = nt.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && R !== void 0 ? R : $, at = nt && (U = (q = nt.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && U !== void 0 ? U : E, Rt = W !== $ || at !== E, Yt = !ct(S), Me = Yt && !Rt ? b.updateId : b.updateId + 1;
      return D(D({ updateId: Me }, d(D(D({ props: p }, b), {}, { updateId: Me, dataStartIndex: W, dataEndIndex: at }), b)), {}, { prevChildren: w, dataStartIndex: W, dataEndIndex: at });
    }
    return null;
  }), Q(y, "renderActiveDot", function(p, b, _) {
    var S;
    return B.isValidElement(p) ? S = B.cloneElement(p, b) : lt(p) ? S = p(b) : S = A.createElement(nl, b), A.createElement(St, { className: "recharts-active-dot", key: _ }, S);
  });
  var m = B.forwardRef(function(b, _) {
    return A.createElement(y, Ai({}, b, { ref: _ }));
  });
  return m.displayName = y.displayName, m;
}, hb = ZK({ chartName: "ComposedChart", GraphicalChild: [qn, Hr, Pa, hl], axisComponents: [{ axisType: "xAxis", AxisComp: Vo }, { axisType: "yAxis", AxisComp: Ni }, { axisType: "zAxis", AxisComp: fl }], formatAxisMap: hq });
const zt = { grid: "#d0d7de", axis: "#57606a", legendText: "#1f2328", bandP75: "#dbeafe", bandP75Stroke: "#388bfd", bandP25: "#eff6ff", bandP25Stroke: "#54aeff", medianLine: "#0969da", volumeLine: "#bf8700", tooltip: { background: "#ffffff", border: "#d0d7de", text: "#1f2328" }, colors: ["#0969da", "#8250df", "#1a7f37", "#cf222e", "#bf8700", "#57606a", "#0550ae", "#a40e26", "#116329", "#6639ba", "#9a6700", "#24292f"] }, La = { fill: zt.axis, fontSize: 11 }, db = { shared: false, contentStyle: { background: zt.tooltip.background, border: `1px solid ${zt.tooltip.border}`, borderRadius: "0.35rem", color: zt.tooltip.text }, labelStyle: { color: zt.tooltip.text } }, pb = { top: 8, right: 12, left: 4, bottom: 8 }, tY = { verticalAlign: "bottom", align: "center", layout: "horizontal", wrapperStyle: { color: zt.legendText, width: "100%", left: 0, paddingTop: "10px" } }, eY = ["day", "week", "month", "quarter", "year"], rY = [];
function MY({ mode: e7, methodId: t, methodName: r, topMethods: n = rY, topN: i = 10 }) {
  const [a, o] = B.useState("week"), [s, c] = B.useState([]), [u, l] = B.useState([]), [f, h] = B.useState(false), [d, y] = B.useState(false), [m, p] = B.useState(false);
  B.useEffect(() => {
    let w = false;
    return $P().then((v) => {
      w || p(v);
    }), () => {
      w = true;
    };
  }, []), B.useEffect(() => {
    !m && f && h(false);
  }, [m, f]), B.useEffect(() => {
    let w = false;
    async function v() {
      y(true);
      try {
        if (e7 === "single" && t) {
          const g = await IP(t, a);
          w || c(g);
        } else if (e7 === "topN") {
          const g = n.slice(0, i).map((P) => P.method_id), O = await EP(g, a);
          w || l(O);
        }
      } finally {
        w || y(false);
      }
    }
    return v(), () => {
      w = true;
    };
  }, [e7, t, a, i, e7 === "topN" ? n : null]);
  const b = B.useMemo(() => s.map((w) => ({ ...w, period: dn(w.period) })), [s]), _ = B.useMemo(() => {
    const w = /* @__PURE__ */ new Map();
    for (const v of u) {
      const g = dn(v.period), O = w.get(g) ?? { period: g };
      O[v.method_name] = v.profit, w.set(g, O);
    }
    return [...w.values()].sort((v, g) => u1(String(v.period), String(g.period)));
  }, [u]), S = B.useMemo(() => [...new Set(u.map((w) => w.method_name))], [u]);
  return H.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends", children: [H.jsxs("div", { className: "osrs-mmg__trends-header", children: [H.jsx("h3", { children: e7 === "single" ? `Trends \xB7 ${r ?? "Method"}` : "Top methods over time" }), H.jsxs("div", { className: "osrs-mmg__period-row", children: [eY.map((w) => H.jsx("button", { type: "button", className: w === a ? "is-active" : "", onClick: () => o(w), children: w }, w)), e7 === "single" && m ? H.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [H.jsx("input", { type: "checkbox", checked: f, onChange: (w) => h(w.target.checked) }), "Item volume"] }) : null] })] }), d ? H.jsx("p", { className: "osrs-mmg__muted", children: "Loading chart\u2026" }) : null, e7 === "single" && b.length > 0 ? H.jsx("div", { className: "osrs-mmg__chart", children: H.jsx(Dm, { width: "100%", height: 340, children: H.jsxs(hb, { data: b, margin: pb, children: [H.jsx(Rh, { strokeDasharray: "3 3", stroke: zt.grid }), H.jsx(Vo, { dataKey: "period", tick: La, stroke: zt.axis, ...zp(a) }), H.jsx(Ni, { yAxisId: "profit", tick: La, stroke: zt.axis, tickFormatter: (w) => `${Math.round(w / 1e3)}k` }), f ? H.jsx(Ni, { yAxisId: "volume", orientation: "right", tick: La, stroke: zt.axis, tickFormatter: (w) => `${Math.round(w / 1e3)}k` }) : null, H.jsx(nr, { formatter: (w) => wf(w), labelFormatter: (w) => Up(String(w), a), ...db }), H.jsx(Un, { ...tY }), H.jsx(Hr, { yAxisId: "profit", dataKey: "p75", stackId: "band", fill: zt.bandP75, stroke: zt.bandP75Stroke, legendType: "line", name: "75th percentile" }), H.jsx(Hr, { yAxisId: "profit", dataKey: "p25", stackId: "band", fill: zt.bandP25, stroke: zt.bandP25Stroke, legendType: "line", name: "25th percentile" }), H.jsx(qn, { yAxisId: "profit", type: "monotone", dataKey: "median_profit", stroke: zt.medianLine, name: "Median GP/h" }), f ? H.jsx(qn, { yAxisId: "volume", type: "monotone", dataKey: "item_volume", stroke: zt.volumeLine, name: "GE volume" }) : null] }) }) }) : null, e7 === "topN" && _.length > 0 ? H.jsxs("div", { className: "osrs-mmg__chart", children: [H.jsx(Dm, { width: "100%", height: 340, children: H.jsxs(hb, { data: _, margin: pb, children: [H.jsx(Rh, { strokeDasharray: "3 3", stroke: zt.grid }), H.jsx(Vo, { dataKey: "period", tick: La, stroke: zt.axis, ...zp(a) }), H.jsx(Ni, { tick: La, stroke: zt.axis, tickFormatter: (w) => `${Math.round(w / 1e3)}k` }), H.jsx(nr, { formatter: (w) => wf(w), labelFormatter: (w) => Up(String(w), a), ...db }), S.map((w, v) => H.jsx(qn, { type: "monotone", dataKey: w, stroke: zt.colors[v % zt.colors.length], legendType: "none" }, w))] }) }), H.jsx("div", { className: "osrs-mmg__chart-legend-wrap", children: H.jsx("ul", { className: "osrs-mmg__chart-legend", children: S.map((w, v) => H.jsx("li", { children: H.jsxs("span", { className: "osrs-mmg__chart-legend-item", children: [H.jsx("span", { className: "osrs-mmg__chart-legend-swatch", style: { background: zt.colors[v % zt.colors.length] } }), w] }) }, w)) }) })] }) : null, !d && e7 === "single" && s.length === 0 ? H.jsx("p", { className: "osrs-mmg__muted", children: "No snapshot history yet for this method." }) : null, !d && e7 === "topN" && _.length === 0 ? H.jsx("p", { className: "osrs-mmg__muted", children: "Re-rank the table to pick top methods, or wait for more daily snapshots." }) : null] });
}
const DY = [{ id: "marlin", methodName: "Cuttingraw marlin", methodUrl: "/w/Money_making_guide/Cutting_raw_marlin", defaultKph: 11e3, kphUnitName: "Marlins per hour", assumptionText: "", inputTotalPk: 5015, inputTotalPh: 0, outputTotalPk: 5978, outputTotalPh: 0, inputs: [{ itemName: "Raw marlin", wikiSlug: "Raw_marlin", qtyPerCompletion: 1, gpPerCompletion: 5015 }], outputs: [{ itemName: "Fine fish offcuts", wikiSlug: "Fine_fish_offcuts", qtyPerCompletion: 1, gpPerCompletion: 671 }, { itemName: "Marlin scales", wikiSlug: "Marlin_scales", qtyPerCompletion: 3, gpPerCompletion: 5307 }], skillRequirements: [] }, { id: "tob", methodName: "Completing theTheatre of Blood(trio)", methodUrl: "/w/Money_making_guide/Theatre_of_Blood", defaultKph: 3, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes3kills per hour in trios with 0 deaths. Your actual profits may be higher or lower depending on your actual kc/hour, your group size, the number of deaths per raid and luck.3kills per hour requires minimal downtime, few mistakes and efficient strategies. The supply cost given is the average supply cost for each role (Mage, Melee Freeze, Ranger, Melee).", inputTotalPk: 306831, inputTotalPh: 0, outputTotalPk: 40403529699803e-7, outputTotalPh: 0, inputs: [{ itemName: "Super combat potion(4)", wikiSlug: "Super_combat_potion(4)", qtyPerCompletion: 1.5, gpPerCompletion: 20295 }, { itemName: "Divine super combat potion(4)", wikiSlug: "Divine_super_combat_potion(4)", qtyPerCompletion: 1, gpPerCompletion: 19559 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 0.5, gpPerCompletion: 1256 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 1, gpPerCompletion: 11174 }, { itemName: "Zulrah's scales", wikiSlug: "Zulrah's_scales", qtyPerCompletion: 27, gpPerCompletion: 4779 }, { itemName: "Dragon dart", wikiSlug: "Dragon_dart", qtyPerCompletion: 8, gpPerCompletion: 10904 }, { itemName: "Black chinchompa", wikiSlug: "Black_chinchompa", qtyPerCompletion: 7, gpPerCompletion: 20713 }, { itemName: "Ice Barrage", wikiSlug: "Ice_Barrage", qtyPerCompletion: 6, gpPerCompletion: 8496 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 11478 }, { itemName: "Spellbook Swap", wikiSlug: "Spellbook_Swap", qtyPerCompletion: 6, gpPerCompletion: 3756 }, { itemName: "Vengeance", wikiSlug: "Vengeance", qtyPerCompletion: 15, gpPerCompletion: 17310 }, { itemName: "Scythe of vitur", wikiSlug: "Scythe_of_vitur", qtyPerCompletion: 220, gpPerCompletion: 149193 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 8, gpPerCompletion: 23872 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 2, gpPerCompletion: 4046 }], outputs: [{ itemName: "Scythe of vitur (uncharged)", wikiSlug: "Scythe_of_vitur_(uncharged)", qtyPerCompletion: 0.0019278966647388, gpPerCompletion: 27976156256025e-7 }, { itemName: "Avernic defender hilt", wikiSlug: "Avernic_defender_hilt", qtyPerCompletion: 0.01542317331791, gpPerCompletion: 512047.58048968 }, { itemName: "Ghrazi rapier", wikiSlug: "Ghrazi_rapier", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 114430.00578369 }, { itemName: "Sanguinesti staff (uncharged)", wikiSlug: "Sanguinesti_staff_(uncharged)", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 74450.854058222 }, { itemName: "Justiciar faceguard", wikiSlug: "Justiciar_faceguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 48395.527279737 }, { itemName: "Justiciar chestguard", wikiSlug: "Justiciar_chestguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 44466.400616926 }, { itemName: "Justiciar legguards", wikiSlug: "Justiciar_legguards", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 47547.919799498 }, { itemName: "Runite ore", wikiSlug: "Runite_ore", qtyPerCompletion: 6.3558, gpPerCompletion: 65299.4892 }], skillRequirements: [{ skillKey: "Magic", requirementText: "94+" }, { skillKey: "Ranged", requirementText: "90+" }] }, { id: "smithing", methodName: "Smithing Oathplate armour fromCrushed infernal shaleandOathplate shards", methodUrl: "/w/Money_making_guide/Smithing_oathplate_armour", defaultKph: 4, kphUnitName: "Armour pieces per hour", assumptionText: "The profit rate assumes4pieces of armour made per hour with few mistakes made during the smithing process. The guide automatically picks the highest value piece for display and profit calculations.", inputTotalPk: 87685200, inputTotalPh: 0, outputTotalPk: 88809329, outputTotalPh: 0, inputs: [{ itemName: "Crushed infernal shale", wikiSlug: "Crushed_infernal_shale", qtyPerCompletion: 2520, gpPerCompletion: 806400 }, { itemName: "Oathplate shards", wikiSlug: "Oathplate_shards", qtyPerCompletion: 450, gpPerCompletion: 86878800 }], outputs: [{ itemName: "Oathplate legs", wikiSlug: "Oathplate_legs", qtyPerCompletion: 1, gpPerCompletion: 88809329 }], skillRequirements: [] }, { id: "mokhaiotl", methodName: "Killing TheDoom of Mokhaiotl(Delve 1-16)", methodUrl: "/w/Money_making_guide/Killing_the_Doom_of_Mokhaiotl_(Delve_1-16)", defaultKph: 2.5, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes2.5Delve 1-16 completions per hour, looting at the end of each run. Your completion speed may vary based on your performance, stats and equipment used. Scorching bow users can expect closer to 2 completions per hour. Supply cost assumes the use of aTwistedorScorching bow, the player is on the Arceuus spellbook using thralls until wave 6, constant use ofdeath charge, and using azaryte crossbowspecial attack every wave.", inputTotalPk: 344347, inputTotalPh: 154237, outputTotalPk: 72345276648025e-7, outputTotalPh: 0, inputs: [{ itemName: "Divine ranging potion(4)", wikiSlug: "Divine_ranging_potion(4)", qtyPerCompletion: 3, gpPerCompletion: 19041 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 6, gpPerCompletion: 15072 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 4, gpPerCompletion: 8092 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 5, gpPerCompletion: 55870 }, { itemName: "Saradomin brew(4)", wikiSlug: "Saradomin_brew(4)", qtyPerCompletion: 6, gpPerCompletion: 46536 }, { itemName: "Extended anti-venom+(4)", wikiSlug: "Extended_anti-venom+(4)", qtyPerCompletion: 2.5, gpPerCompletion: 47660 }, { itemName: "Death Charge", wikiSlug: "Death_Charge", qtyPerCompletion: 56, gpPerCompletion: 72464 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 13878 }, { itemName: "Superior Demonbane", wikiSlug: "Superior_Demonbane", qtyPerCompletion: 41, gpPerCompletion: 33538 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 40, gpPerCompletion: 119360 }, { itemName: "Ruby dragon bolts (e)", wikiSlug: "Ruby_dragon_bolts_(e)", qtyPerCompletion: 3.2, gpPerCompletion: 9104 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1, gpPerCompletion: 57969 }], outputs: [{ itemName: "Avernic treads", wikiSlug: "Avernic_treads", qtyPerCompletion: 0.021073503475464, gpPerCompletion: 36718848828421e-7 }, { itemName: "Eye of ayak (uncharged)", wikiSlug: "Eye_of_ayak_(uncharged)", qtyPerCompletion: 0.021573503475464, gpPerCompletion: 11296287039712e-7 }, { itemName: "Mokhaiotl cloth", wikiSlug: "Mokhaiotl_cloth", qtyPerCompletion: 0.021973503475464, gpPerCompletion: 12328797525538e-7 }, { itemName: "Demon tear", wikiSlug: "Demon_tear", qtyPerCompletion: 1479.7349128671, gpPerCompletion: 479434.11176894 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1.560204615624, gpPerCompletion: 88635.224213599 }, { itemName: "Aether catalyst", wikiSlug: "Aether_catalyst", qtyPerCompletion: 227.88871078774, gpPerCompletion: 81584.158462011 }, { itemName: "Dragon med helm", wikiSlug: "Dragon_med_helm", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 44168.58165062 }, { itemName: "Mystic earth staff", wikiSlug: "Mystic_earth_staff", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 18782.296325307 }], skillRequirements: [{ skillKey: "Magic", requirementText: "80+" }, { skillKey: "Ranged", requirementText: "90+" }] }], nY = "osrs-mmg-cache", Ho = "artifacts", n1 = "duckdb";
function i1() {
  return new Promise((e7, t) => {
    const r = indexedDB.open(nY, 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore(Ho);
    }, r.onsuccess = () => e7(r.result), r.onerror = () => t(r.error ?? new Error("IndexedDB open failed"));
  });
}
async function iY() {
  const e7 = await i1();
  return new Promise((t, r) => {
    const i = e7.transaction(Ho, "readonly").objectStore(Ho).get(n1);
    i.onsuccess = () => t(i.result ?? null), i.onerror = () => r(i.error ?? new Error("IndexedDB read failed"));
  });
}
async function aY(e7) {
  const t = await i1();
  return new Promise((r, n) => {
    const i = t.transaction(Ho, "readwrite");
    i.objectStore(Ho).put(e7, n1), i.oncomplete = () => r(), i.onerror = () => n(i.error ?? new Error("IndexedDB write failed"));
  });
}
async function oY(e7, t) {
  const r = await fetch(e7, { cache: "no-cache" });
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
async function yb(e7, t) {
  return oY(e7, t);
}
function NY() {
  const [e7, t] = B.useState({ ready: false, loading: $n() || As(), error: null, manifest: null, fromCache: false, localMode: $n(), loadPhase: $n() || As() ? "manifest" : null, downloadProgress: null }), [r, n] = B.useState(0), i = B.useCallback(() => {
    n((a) => a + 1);
  }, []);
  return B.useEffect(() => {
    if (!$n() && !As()) {
      t({ ready: false, loading: false, error: null, manifest: null, fromCache: false, localMode: false, loadPhase: null, downloadProgress: null });
      return;
    }
    let a = false;
    async function o() {
      t((h) => ({ ...h, loadPhase: "download", downloadProgress: { loaded: 0, total: null } }));
      const u = await yb(af, (h) => {
        a || t((d) => ({ ...d, downloadProgress: h }));
      }), l = `${af}:${u.byteLength}`;
      let f = null;
      t((h) => ({ ...h, loadPhase: "open", downloadProgress: null })), await my(u, l), a || t({ ready: true, loading: false, error: null, manifest: f, fromCache: false, localMode: true, loadPhase: null, downloadProgress: null });
    }
    async function s() {
      t((y) => ({ ...y, loadPhase: "manifest", downloadProgress: null }));
      const u = await NP();
      t((y) => ({ ...y, loadPhase: "cache" }));
      const l = await iY(), f = CP(u, (l == null ? void 0 : l.sha256) ?? null);
      let h, d = false;
      !f && l ? (h = l.bytes, d = true, t((y) => ({ ...y, loadPhase: "open", downloadProgress: null }))) : (t((y) => ({ ...y, loadPhase: "download", downloadProgress: { loaded: 0, total: null } })), h = await yb(o1(u), (y) => {
        a || t((m) => ({ ...m, downloadProgress: y }));
      }), await aY({ sha256: u.artifacts.database.sha256, bytes: h, fetchedAt: (/* @__PURE__ */ new Date()).toISOString() }), t((y) => ({ ...y, loadPhase: "open", downloadProgress: null }))), await my(h, u.artifacts.database.sha256), a || t({ ready: true, loading: false, error: null, manifest: u, fromCache: d, localMode: false, loadPhase: null, downloadProgress: null });
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
  }, [r]), { ...e7, reload: i };
}
export {
  SY as A,
  MP as B,
  hb as C,
  PY as D,
  qn as L,
  EY as O,
  Dm as R,
  DY as S,
  nr as T,
  Vo as X,
  Ni as Y,
  wY as a,
  dY as b,
  $Y as c,
  wf as d,
  AY as e,
  _Y as f,
  MY as g,
  u1 as h,
  fY as i,
  TY as j,
  $P as k,
  IY as l,
  xY as m,
  OY as n,
  zt as o,
  kp as p,
  pb as q,
  hY as r,
  s1 as s,
  dn as t,
  NY as u,
  Rh as v,
  La as w,
  zp as x,
  db as y,
  Up as z
};
