import { j as yt, c as ns, g as Bt, r as B, R as A } from "./index-DBmo_afS.js";
import { c as mt } from "./clsx-B-dksMZM.js";
import { _ as vr, a as pt, b as ws, c as Bn, d as ot } from "./tslib.es6-Xujj8YQZ.js";
const Ql = "", Gh = "https://prod-public-mindtricks-data.s3.eu-west-2.amazonaws.com/dev/client/osrs-mmg".replace(/\/$/, "") ?? "", WO = `${Gh}/manifest.json`, Tp = "osrs-mmg.duckdb";
function VO(e7) {
  return `${Gh}/${e7.artifacts.database.url}`;
}
function ci() {
  return Ql.length > 0;
}
function Zl() {
  return Gh.length > 0;
}
function LK() {
  return ci() || Zl();
}
const GO = new TextDecoder("utf-8"), tf = (e7) => GO.decode(e7), qO = new TextEncoder(), qh = (e7) => qO.encode(e7), HO = (e7) => typeof e7 == "number", Qg = (e7) => typeof e7 == "boolean", ee = (e7) => typeof e7 == "function", Te = (e7) => e7 != null && Object(e7) === e7, zn = (e7) => Te(e7) && ee(e7.then), Go = (e7) => Te(e7) && ee(e7[Symbol.iterator]), ua = (e7) => Te(e7) && ee(e7[Symbol.asyncIterator]), ef = (e7) => Te(e7) && Te(e7.schema), Zg = (e7) => Te(e7) && "done" in e7 && "value" in e7, tb = (e7) => Te(e7) && ee(e7.stat) && HO(e7.fd), eb = (e7) => Te(e7) && Hh(e7.body), du = (e7) => "_getDOMStream" in e7 && "_getNodeStream" in e7, KO = (e7) => Te(e7) && ee(e7.abort) && ee(e7.getWriter) && !du(e7), Hh = (e7) => Te(e7) && ee(e7.cancel) && ee(e7.getReader) && !du(e7), YO = (e7) => Te(e7) && ee(e7.end) && ee(e7.write) && Qg(e7.writable) && !du(e7), rb = (e7) => Te(e7) && ee(e7.read) && ee(e7.pipe) && Qg(e7.readable) && !du(e7), XO = (e7) => Te(e7) && ee(e7.clear) && ee(e7.bytes) && ee(e7.position) && ee(e7.setPosition) && ee(e7.capacity) && ee(e7.getBufferIdentifier) && ee(e7.createLong), Kh = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function JO(e7) {
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
function Ip(e7, t, r = 0, n = t.byteLength) {
  const i = e7.byteLength, a = new Uint8Array(e7.buffer, e7.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(n, i));
  return a.set(o, r), e7;
}
function xr(e7, t) {
  const r = JO(e7), n = r.reduce((l, f) => l + f.byteLength, 0);
  let i, a, o, s = 0, c = -1;
  const u = Math.min(t || Number.POSITIVE_INFINITY, n);
  for (const l = r.length; ++c < l; ) {
    if (i = r[c], a = i.subarray(0, Math.min(i.length, u - s)), u <= s + a.length) {
      a.length < i.length ? r[c] = i.subarray(a.length) : a.length === i.length && c++, o ? Ip(o, a, s) : o = a;
      break;
    }
    Ip(o || (o = new Uint8Array(u)), a, s), s += a.length;
  }
  return [o || new Uint8Array(0), r.slice(c), n - (o ? o.byteLength : 0)];
}
function Et(e7, t) {
  let r = Zg(t) ? t.value : t;
  return r instanceof e7 ? e7 === Uint8Array ? new e7(r.buffer, r.byteOffset, r.byteLength) : r : r ? (typeof r == "string" && (r = qh(r)), r instanceof ArrayBuffer ? new e7(r) : r instanceof Kh ? new e7(r) : XO(r) ? Et(e7, r.bytes()) : ArrayBuffer.isView(r) ? r.byteLength <= 0 ? new e7(0) : new e7(r.buffer, r.byteOffset, r.byteLength / e7.BYTES_PER_ELEMENT) : e7.from(r)) : new e7(0);
}
const Pa = (e7) => Et(Int32Array, e7), Ep = (e7) => Et(BigInt64Array, e7), vt = (e7) => Et(Uint8Array, e7), rf = (e7) => (e7.next(), e7);
function* QO(e7, t) {
  const r = function* (i) {
    yield i;
  }, n = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Kh ? r(t) : Go(t) ? t : r(t);
  return yield* rf(function* (i) {
    let a = null;
    do
      a = i.next(yield Et(e7, a));
    while (!a.done);
  }(n[Symbol.iterator]())), new e7();
}
const ZO = (e7) => QO(Uint8Array, e7);
function nb(e7, t) {
  return vr(this, arguments, function* () {
    if (zn(t)) return yield pt(yield pt(yield* ws(Bn(nb(e7, yield pt(t))))));
    const n = function(o) {
      return vr(this, arguments, function* () {
        yield yield pt(yield pt(o));
      });
    }, i = function(o) {
      return vr(this, arguments, function* () {
        yield pt(yield* ws(Bn(rf(function* (s) {
          let c = null;
          do
            c = s.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, a = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Kh ? n(t) : Go(t) ? i(t) : ua(t) ? t : n(t);
    return yield pt(yield* ws(Bn(rf(function(o) {
      return vr(this, arguments, function* () {
        let s = null;
        do
          s = yield pt(o.next(yield yield pt(Et(e7, s))));
        while (!s.done);
      });
    }(a[Symbol.asyncIterator]()))))), yield pt(new e7());
  });
}
const t1 = (e7) => nb(Uint8Array, e7);
function ib(e7, t, r) {
  if (e7 !== 0) {
    r = r.slice(0, t);
    for (let n = -1, i = r.length; ++n < i; ) r[n] += e7;
  }
  return r.subarray(0, t);
}
function e1(e7, t) {
  let r = 0;
  const n = e7.length;
  if (n !== t.length) return false;
  if (n > 0) do
    if (e7[r] !== t[r]) return false;
  while (++r < n);
  return true;
}
const We = { fromIterable(e7) {
  return is(r1(e7));
}, fromAsyncIterable(e7) {
  return is(n1(e7));
}, fromDOMStream(e7) {
  return is(i1(e7));
}, fromNodeStream(e7) {
  return is(o1(e7));
}, toDOMStream(e7, t) {
  throw new Error('"toDOMStream" not available in this environment');
}, toNodeStream(e7, t) {
  throw new Error('"toNodeStream" not available in this environment');
} }, is = (e7) => (e7.next(), e7);
function* r1(e7) {
  let t, r = false, n = [], i, a, o, s = 0;
  function c() {
    return a === "peek" ? xr(n, o)[0] : ([i, n, s] = xr(n, o), i);
  }
  ({ cmd: a, size: o } = (yield null) || { cmd: "read", size: 0 });
  const u = ZO(e7)[Symbol.iterator]();
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
function n1(e7) {
  return vr(this, arguments, function* () {
    let r, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? xr(i, s)[0] : ([a, i, c] = xr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield pt(null)) || { cmd: "read", size: 0 });
    const l = t1(e7)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: r, value: a } = Number.isNaN(s - c) ? yield pt(l.next()) : yield pt(l.next(s - c)), !r && a.byteLength > 0 && (i.push(a), c += a.byteLength), r || s <= c) do
          ({ cmd: o, size: s } = yield yield pt(u()));
        while (s < c);
      while (!r);
    } catch (f) {
      (n = true) && typeof l.throw == "function" && (yield pt(l.throw(f)));
    } finally {
      n === false && typeof l.return == "function" && (yield pt(l.return(new Uint8Array(0))));
    }
    return yield pt(null);
  });
}
function i1(e7) {
  return vr(this, arguments, function* () {
    let r = false, n = false, i = [], a, o, s, c = 0;
    function u() {
      return o === "peek" ? xr(i, s)[0] : ([a, i, c] = xr(i, s), a);
    }
    ({ cmd: o, size: s } = (yield yield pt(null)) || { cmd: "read", size: 0 });
    const l = new a1(e7);
    try {
      do
        if ({ done: r, value: a } = Number.isNaN(s - c) ? yield pt(l.read()) : yield pt(l.read(s - c)), !r && a.byteLength > 0 && (i.push(vt(a)), c += a.byteLength), r || s <= c) do
          ({ cmd: o, size: s } = yield yield pt(u()));
        while (s < c);
      while (!r);
    } catch (f) {
      (n = true) && (yield pt(l.cancel(f)));
    } finally {
      n === false ? yield pt(l.cancel()) : e7.locked && l.releaseLock();
    }
    return yield pt(null);
  });
}
class a1 {
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
const ul = (e7, t) => {
  const r = (i) => n([t, i]);
  let n;
  return [t, r, new Promise((i) => (n = i) && e7.once(t, r))];
};
function o1(e7) {
  return vr(this, arguments, function* () {
    const r = [];
    let n = "error", i = false, a = null, o, s, c = 0, u = [], l;
    function f() {
      return o === "peek" ? xr(u, s)[0] : ([l, u, c] = xr(u, s), l);
    }
    if ({ cmd: o, size: s } = (yield yield pt(null)) || { cmd: "read", size: 0 }, e7.isTTY) return yield yield pt(new Uint8Array(0)), yield pt(null);
    try {
      r[0] = ul(e7, "end"), r[1] = ul(e7, "error");
      do {
        if (r[2] = ul(e7, "readable"), [n, a] = yield pt(Promise.race(r.map((d) => d[2]))), n === "error") break;
        if ((i = n === "end") || (Number.isFinite(s - c) ? (l = vt(e7.read(s - c)), l.byteLength < s - c && (l = vt(e7.read()))) : l = vt(e7.read()), l.byteLength > 0 && (u.push(l), c += l.byteLength)), i || s <= c) do
          ({ cmd: o, size: s } = yield yield pt(f()));
        while (s < c);
      } while (!i);
    } finally {
      yield pt(h(r, n === "error" ? a : null));
    }
    return yield pt(null);
    function h(d, y) {
      return l = u = null, new Promise((m, p) => {
        for (const [g, _] of d) e7.off(g, _);
        try {
          const g = e7.destroy;
          g && g.call(e7, y), y = void 0;
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
(function(e7) {
  e7[e7.V1 = 0] = "V1", e7[e7.V2 = 1] = "V2", e7[e7.V3 = 2] = "V3", e7[e7.V4 = 3] = "V4", e7[e7.V5 = 4] = "V5";
})(Ht || (Ht = {}));
var pe;
(function(e7) {
  e7[e7.Sparse = 0] = "Sparse", e7[e7.Dense = 1] = "Dense";
})(pe || (pe = {}));
var de;
(function(e7) {
  e7[e7.HALF = 0] = "HALF", e7[e7.SINGLE = 1] = "SINGLE", e7[e7.DOUBLE = 2] = "DOUBLE";
})(de || (de = {}));
var Ye;
(function(e7) {
  e7[e7.DAY = 0] = "DAY", e7[e7.MILLISECOND = 1] = "MILLISECOND";
})(Ye || (Ye = {}));
var Q;
(function(e7) {
  e7[e7.SECOND = 0] = "SECOND", e7[e7.MILLISECOND = 1] = "MILLISECOND", e7[e7.MICROSECOND = 2] = "MICROSECOND", e7[e7.NANOSECOND = 3] = "NANOSECOND";
})(Q || (Q = {}));
var Ar;
(function(e7) {
  e7[e7.YEAR_MONTH = 0] = "YEAR_MONTH", e7[e7.DAY_TIME = 1] = "DAY_TIME", e7[e7.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Ar || (Ar = {}));
const ll = 2, pr = 4, Cr = 4, Pt = 4, rn = new Int32Array(2), $p = new Float32Array(rn.buffer), Dp = new Float64Array(rn.buffer), as = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
var nf;
(function(e7) {
  e7[e7.UTF8_BYTES = 1] = "UTF8_BYTES", e7[e7.UTF16_STRING = 2] = "UTF16_STRING";
})(nf || (nf = {}));
let Di = class ab {
  constructor(t) {
    this.bytes_ = t, this.position_ = 0, this.text_decoder_ = new TextDecoder();
  }
  static allocate(t) {
    return new ab(new Uint8Array(t));
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
    return rn[0] = this.readInt32(t), $p[0];
  }
  readFloat64(t) {
    return rn[as ? 0 : 1] = this.readInt32(t), rn[as ? 1 : 0] = this.readInt32(t + 4), Dp[0];
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
    $p[0] = r, this.writeInt32(t, rn[0]);
  }
  writeFloat64(t, r) {
    Dp[0] = r, this.writeInt32(t, rn[as ? 0 : 1]), this.writeInt32(t + 4, rn[as ? 1 : 0]);
  }
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + pr + Cr) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let r = 0; r < Cr; r++) t += String.fromCharCode(this.readInt8(this.position_ + pr + r));
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
    t += pr;
    const i = this.bytes_.subarray(t, t + n);
    return r === nf.UTF8_BYTES ? i : this.text_decoder_.decode(i);
  }
  __union_with_string(t, r) {
    return typeof t == "string" ? this.__string(r) : this.__union(t, r);
  }
  __indirect(t) {
    return t + this.readInt32(t);
  }
  __vector(t) {
    return t + this.readInt32(t) + pr;
  }
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != Cr) throw new Error("FlatBuffers: file identifier must be length " + Cr);
    for (let r = 0; r < Cr; r++) if (t.charCodeAt(r) != this.readInt8(this.position() + pr + r)) return false;
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
}, ob = class sb {
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false, this.string_maps = null, this.text_encoder = new TextEncoder();
    let r;
    t ? r = t : r = 1024, this.bb = Di.allocate(r), this.space = r;
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
      this.bb = sb.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
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
    const n = r << 1, i = Di.allocate(n);
    return i.setPosition(n - r), i.bytes().set(t.bytes(), n - r), i;
  }
  addOffset(t) {
    this.prep(pr, 0), this.writeInt32(this.offset() - t + pr);
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
    const a = (n + i) * ll;
    this.addInt16(a);
    let o = 0;
    const s = this.space;
    t: for (r = 0; r < this.vtables.length; r++) {
      const c = this.bb.capacity() - this.vtables[r];
      if (a == this.bb.readInt16(c)) {
        for (let u = ll; u < a; u += ll) if (this.bb.readInt16(s + u) != this.bb.readInt16(c + u)) continue t;
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
      if (this.prep(this.minalign, pr + Cr + i), a.length != Cr) throw new TypeError("FlatBuffers: file identifier must be length " + Cr);
      for (let o = Cr - 1; o >= 0; o--) this.writeInt8(a.charCodeAt(o));
    }
    this.prep(this.minalign, pr + i), this.addOffset(t), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  finishSizePrefixed(t, r) {
    this.finish(t, r, true);
  }
  requiredField(t, r) {
    const n = this.bb.capacity() - t, i = n - this.bb.readInt32(n);
    if (!(r < this.bb.readInt16(i) && this.bb.readInt16(i + r) != 0)) throw new TypeError("FlatBuffers: field " + r + " must be set");
  }
  startVector(t, r, n) {
    this.notNested(), this.vector_num_elems = r, this.prep(pr, t * r), this.prep(n, t * r);
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
var Ns;
(function(e7) {
  e7[e7.BUFFER = 0] = "BUFFER";
})(Ns || (Ns = {}));
var Cs;
(function(e7) {
  e7[e7.LZ4_FRAME = 0] = "LZ4_FRAME", e7[e7.ZSTD = 1] = "ZSTD";
})(Cs || (Cs = {}));
class nn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBodyCompression(t, r) {
    return (r || new nn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, r) {
    return t.setPosition(t.position() + Pt), (r || new nn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : Cs.LZ4_FRAME;
  }
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Ns.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, r) {
    t.addFieldInt8(0, r, Cs.LZ4_FRAME);
  }
  static addMethod(t, r) {
    t.addFieldInt8(1, r, Ns.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, r, n) {
    return nn.startBodyCompression(t), nn.addCodec(t, r), nn.addMethod(t, n), nn.endBodyCompression(t);
  }
}
class cb {
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
let ub = class {
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
}, Dr = class af {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsRecordBatch(t, r) {
    return (r || new af()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new af()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  nodes(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new ub()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  buffers(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new cb()).__init(this.bb.__vector(this.bb_pos + n) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  compression(t) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? (t || new nn()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
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
}, ui = class of {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryBatch(t, r) {
    return (r || new of()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, r) {
    return t.setPosition(t.position() + Pt), (r || new of()).__init(t.readInt32(t.position()) + t.position(), t);
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
var Mi;
(function(e7) {
  e7[e7.Little = 0] = "Little", e7[e7.Big = 1] = "Big";
})(Mi || (Mi = {}));
var js;
(function(e7) {
  e7[e7.DenseArray = 0] = "DenseArray";
})(js || (js = {}));
class je {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsInt(t, r) {
    return (r || new je()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, r) {
    return t.setPosition(t.position() + Pt), (r || new je()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return je.startInt(t), je.addBitWidth(t, r), je.addIsSigned(t, n), je.endInt(t);
  }
}
class jr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDictionaryEncoding(t, r) {
    return (r || new jr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, r) {
    return t.setPosition(t.position() + Pt), (r || new jr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : BigInt("0");
  }
  indexType(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new je()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : false;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : js.DenseArray;
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
    t.addFieldInt16(3, r, js.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class re {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsKeyValue(t, r) {
    return (r || new re()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, r) {
    return t.setPosition(t.position() + Pt), (r || new re()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return re.startKeyValue(t), re.addKey(t, r), re.addValue(t, n), re.endKeyValue(t);
  }
}
let Mp = class Ra {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBinary(t, r) {
    return (r || new Ra()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ra()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return Ra.startBinary(t), Ra.endBinary(t);
  }
}, Np = class ka {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsBool(t, r) {
    return (r || new ka()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, r) {
    return t.setPosition(t.position() + Pt), (r || new ka()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return ka.startBool(t), ka.endBool(t);
  }
}, Ss = class li {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDate(t, r) {
    return (r || new li()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, r) {
    return t.setPosition(t.position() + Pt), (r || new li()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ye.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Ye.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, r) {
    return li.startDate(t), li.addUnit(t, r), li.endDate(t);
  }
}, fi = class tn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDecimal(t, r) {
    return (r || new tn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, r) {
    return t.setPosition(t.position() + Pt), (r || new tn()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return tn.startDecimal(t), tn.addPrecision(t, r), tn.addScale(t, n), tn.addBitWidth(t, i), tn.endDecimal(t);
  }
}, Os = class hi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsDuration(t, r) {
    return (r || new hi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDuration(t, r) {
    return t.setPosition(t.position() + Pt), (r || new hi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return hi.startDuration(t), hi.addUnit(t, r), hi.endDuration(t);
  }
}, xs = class di {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeBinary(t, r) {
    return (r || new di()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new di()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return di.startFixedSizeBinary(t), di.addByteWidth(t, r), di.endFixedSizeBinary(t);
  }
}, As = class pi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFixedSizeList(t, r) {
    return (r || new pi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new pi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return pi.startFixedSizeList(t), pi.addListSize(t, r), pi.endFixedSizeList(t);
  }
};
class yr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFloatingPoint(t, r) {
    return (r || new yr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, r) {
    return t.setPosition(t.position() + Pt), (r || new yr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : de.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, r) {
    t.addFieldInt16(0, r, de.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, r) {
    return yr.startFloatingPoint(t), yr.addPrecision(t, r), yr.endFloatingPoint(t);
  }
}
class mr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsInterval(t, r) {
    return (r || new mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, r) {
    return t.setPosition(t.position() + Pt), (r || new mr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ar.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, r) {
    t.addFieldInt16(0, r, Ar.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, r) {
    return mr.startInterval(t), mr.addUnit(t, r), mr.endInterval(t);
  }
}
let Cp = class La {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeBinary(t, r) {
    return (r || new La()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeBinary(t, r) {
    return t.setPosition(t.position() + Pt), (r || new La()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeBinary(t) {
    t.startObject(0);
  }
  static endLargeBinary(t) {
    return t.endObject();
  }
  static createLargeBinary(t) {
    return La.startLargeBinary(t), La.endLargeBinary(t);
  }
}, jp = class Fa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsLargeUtf8(t, r) {
    return (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsLargeUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Fa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startLargeUtf8(t) {
    t.startObject(0);
  }
  static endLargeUtf8(t) {
    return t.endObject();
  }
  static createLargeUtf8(t) {
    return Fa.startLargeUtf8(t), Fa.endLargeUtf8(t);
  }
}, Bp = class Ua {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsList(t, r) {
    return (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ua()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Ua.startList(t), Ua.endList(t);
  }
}, Ps = class yi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMap(t, r) {
    return (r || new yi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, r) {
    return t.setPosition(t.position() + Pt), (r || new yi()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return yi.startMap(t), yi.addKeysSorted(t, r), yi.endMap(t);
  }
}, Rp = class za {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsNull(t, r) {
    return (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, r) {
    return t.setPosition(t.position() + Pt), (r || new za()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return za.startNull(t), za.endNull(t);
  }
};
class $n {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsStruct_(t, r) {
    return (r || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, r) {
    return t.setPosition(t.position() + Pt), (r || new $n()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return $n.startStruct_(t), $n.endStruct_(t);
  }
}
class Ve {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsTime(t, r) {
    return (r || new Ve()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ve()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return Ve.startTime(t), Ve.addUnit(t, r), Ve.addBitWidth(t, n), Ve.endTime(t);
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
class Oe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUnion(t, r) {
    return (r || new Oe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Oe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : pe.Sparse;
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
    t.addFieldInt16(0, r, pe.Sparse);
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
    return Oe.startUnion(t), Oe.addMode(t, r), Oe.addTypeIds(t, n), Oe.endUnion(t);
  }
}
let kp = class Wa {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsUtf8(t, r) {
    return (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Wa()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Wa.startUtf8(t), Wa.endUtf8(t);
  }
};
var Ct;
(function(e7) {
  e7[e7.NONE = 0] = "NONE", e7[e7.Null = 1] = "Null", e7[e7.Int = 2] = "Int", e7[e7.FloatingPoint = 3] = "FloatingPoint", e7[e7.Binary = 4] = "Binary", e7[e7.Utf8 = 5] = "Utf8", e7[e7.Bool = 6] = "Bool", e7[e7.Decimal = 7] = "Decimal", e7[e7.Date = 8] = "Date", e7[e7.Time = 9] = "Time", e7[e7.Timestamp = 10] = "Timestamp", e7[e7.Interval = 11] = "Interval", e7[e7.List = 12] = "List", e7[e7.Struct_ = 13] = "Struct_", e7[e7.Union = 14] = "Union", e7[e7.FixedSizeBinary = 15] = "FixedSizeBinary", e7[e7.FixedSizeList = 16] = "FixedSizeList", e7[e7.Map = 17] = "Map", e7[e7.Duration = 18] = "Duration", e7[e7.LargeBinary = 19] = "LargeBinary", e7[e7.LargeUtf8 = 20] = "LargeUtf8", e7[e7.LargeList = 21] = "LargeList", e7[e7.RunEndEncoded = 22] = "RunEndEncoded";
})(Ct || (Ct = {}));
let Ue = class Ts {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsField(t, r) {
    return (r || new Ts()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Ts()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return r ? (t || new jr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  children(t, r) {
    const n = this.bb.__offset(this.bb_pos, 14);
    return n ? (r || new Ts()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 16);
    return n ? (r || new re()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
}, hr = class $r {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsSchema(t, r) {
    return (r || new $r()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, r) {
    return t.setPosition(t.position() + Pt), (r || new $r()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Mi.Little;
  }
  fields(t, r) {
    const n = this.bb.__offset(this.bb_pos, 6);
    return n ? (r || new Ue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new re()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    t.addFieldInt16(0, r, Mi.Little);
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
    return $r.startSchema(t), $r.addEndianness(t, r), $r.addFields(t, n), $r.addCustomMetadata(t, i), $r.addFeatures(t, a), $r.endSchema(t);
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
var Mr;
(function(e7) {
  e7[e7.OFFSET = 0] = "OFFSET", e7[e7.DATA = 1] = "DATA", e7[e7.VALIDITY = 2] = "VALIDITY", e7[e7.TYPE = 3] = "TYPE";
})(Mr || (Mr = {}));
const s1 = void 0;
function to(e7) {
  if (e7 === null) return "null";
  if (e7 === s1) return "undefined";
  switch (typeof e7) {
    case "number":
      return `${e7}`;
    case "bigint":
      return `${e7}`;
    case "string":
      return `"${e7}"`;
  }
  return typeof e7[Symbol.toPrimitive] == "function" ? e7[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e7) ? e7 instanceof BigInt64Array || e7 instanceof BigUint64Array ? `[${[...e7].map((t) => to(t))}]` : `[${e7}]` : ArrayBuffer.isView(e7) ? `[${e7}]` : JSON.stringify(e7, (t, r) => typeof r == "bigint" ? `${r}` : r);
}
function Mt(e7) {
  if (typeof e7 == "bigint" && (e7 < Number.MIN_SAFE_INTEGER || e7 > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${e7} is not safe to convert to a number.`);
  return Number(e7);
}
function lb(e7, t) {
  return Mt(e7 / t) + Mt(e7 % t) / Mt(t);
}
const c1 = Symbol.for("isArrowBigNum");
function ur(e7, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Et(this.TypedArray, e7), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e7, ...t), this.constructor.prototype);
}
ur.prototype[c1] = true;
ur.prototype.toJSON = function() {
  return `"${ro(this)}"`;
};
ur.prototype.valueOf = function(e7) {
  return fb(this, e7);
};
ur.prototype.toString = function() {
  return ro(this);
};
ur.prototype[Symbol.toPrimitive] = function(e7 = "default") {
  switch (e7) {
    case "number":
      return fb(this);
    case "string":
      return ro(this);
    case "default":
      return f1(this);
  }
  return ro(this);
};
function Oi(...e7) {
  return ur.apply(this, e7);
}
function xi(...e7) {
  return ur.apply(this, e7);
}
function eo(...e7) {
  return ur.apply(this, e7);
}
Object.setPrototypeOf(Oi.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(xi.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(eo.prototype, Object.create(Uint32Array.prototype));
Object.assign(Oi.prototype, ur.prototype, { constructor: Oi, signed: true, TypedArray: Int32Array, BigIntArray: BigInt64Array });
Object.assign(xi.prototype, ur.prototype, { constructor: xi, signed: false, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
Object.assign(eo.prototype, ur.prototype, { constructor: eo, signed: true, TypedArray: Uint32Array, BigIntArray: BigUint64Array });
const u1 = BigInt(4294967296) * BigInt(4294967296), l1 = u1 - BigInt(1);
function fb(e7, t) {
  const { buffer: r, byteOffset: n, byteLength: i, signed: a } = e7, o = new BigUint64Array(r, n, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63);
  let c = BigInt(0), u = 0;
  if (s) {
    for (const l of o) c |= (l ^ l1) * (BigInt(1) << BigInt(64 * u++));
    c *= BigInt(-1), c -= BigInt(1);
  } else for (const l of o) c |= l * (BigInt(1) << BigInt(64 * u++));
  if (typeof t == "number") {
    const l = BigInt(Math.pow(10, t)), f = c / l, h = c % l;
    return Mt(f) + Mt(h) / Mt(l);
  }
  return Mt(c);
}
function ro(e7) {
  if (e7.byteLength === 8) return `${new e7.BigIntArray(e7.buffer, e7.byteOffset, 1)[0]}`;
  if (!e7.signed) return fl(e7);
  let t = new Uint16Array(e7.buffer, e7.byteOffset, e7.byteLength / 2);
  if (new Int16Array([t.at(-1)])[0] >= 0) return fl(e7);
  t = t.slice();
  let n = 1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a], s = ~o + n;
    t[a] = s, n &= o === 0 ? 1 : 0;
  }
  return `-${fl(t)}`;
}
function f1(e7) {
  return e7.byteLength === 8 ? new e7.BigIntArray(e7.buffer, e7.byteOffset, 1)[0] : ro(e7);
}
function fl(e7) {
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
class Yh {
  static new(t, r) {
    switch (r) {
      case true:
        return new Oi(t);
      case false:
        return new xi(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case BigInt64Array:
        return new Oi(t);
    }
    return t.byteLength === 16 ? new eo(t) : new xi(t);
  }
  static signed(t) {
    return new Oi(t);
  }
  static unsigned(t) {
    return new xi(t);
  }
  static decimal(t) {
    return new eo(t);
  }
  constructor(t, r) {
    return Yh.new(t, r);
  }
}
var hb, db, pb, yb, mb, vb, gb, bb, _b, wb, Sb, Ob, xb, Ab, Pb, Tb, Ib, Eb, $b, Db, Mb, Nb;
class q {
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
    return q.isUnion(t) && t.mode === pe.Dense;
  }
  static isSparseUnion(t) {
    return q.isUnion(t) && t.mode === pe.Sparse;
  }
  constructor(t) {
    this.typeId = t;
  }
}
hb = Symbol.toStringTag;
q[hb] = ((e7) => (e7.children = null, e7.ArrayType = Array, e7.OffsetArrayType = Int32Array, e7[Symbol.toStringTag] = "DataType"))(q.prototype);
class fn extends q {
  constructor() {
    super(x.Null);
  }
  toString() {
    return "Null";
  }
}
db = Symbol.toStringTag;
fn[db] = ((e7) => e7[Symbol.toStringTag] = "Null")(fn.prototype);
class Wn extends q {
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
pb = Symbol.toStringTag;
Wn[pb] = ((e7) => (e7.isSigned = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Int"))(Wn.prototype);
class no extends Wn {
  constructor() {
    super(true, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty(no.prototype, "ArrayType", { value: Int32Array });
class Bs extends q {
  constructor(t) {
    super(x.Float), this.precision = t;
  }
  get ArrayType() {
    switch (this.precision) {
      case de.HALF:
        return Uint16Array;
      case de.SINGLE:
        return Float32Array;
      case de.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
yb = Symbol.toStringTag;
Bs[yb] = ((e7) => (e7.precision = null, e7[Symbol.toStringTag] = "Float"))(Bs.prototype);
class Rs extends q {
  constructor() {
    super(x.Binary);
  }
  toString() {
    return "Binary";
  }
}
mb = Symbol.toStringTag;
Rs[mb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Binary"))(Rs.prototype);
class ks extends q {
  constructor() {
    super(x.LargeBinary);
  }
  toString() {
    return "LargeBinary";
  }
}
vb = Symbol.toStringTag;
ks[vb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeBinary"))(ks.prototype);
class Ls extends q {
  constructor() {
    super(x.Utf8);
  }
  toString() {
    return "Utf8";
  }
}
gb = Symbol.toStringTag;
Ls[gb] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Utf8"))(Ls.prototype);
class Fs extends q {
  constructor() {
    super(x.LargeUtf8);
  }
  toString() {
    return "LargeUtf8";
  }
}
bb = Symbol.toStringTag;
Fs[bb] = ((e7) => (e7.ArrayType = Uint8Array, e7.OffsetArrayType = BigInt64Array, e7[Symbol.toStringTag] = "LargeUtf8"))(Fs.prototype);
class Us extends q {
  constructor() {
    super(x.Bool);
  }
  toString() {
    return "Bool";
  }
}
_b = Symbol.toStringTag;
Us[_b] = ((e7) => (e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "Bool"))(Us.prototype);
let zs = class extends q {
  constructor(t, r, n = 128) {
    super(x.Decimal), this.scale = t, this.precision = r, this.bitWidth = n;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
wb = Symbol.toStringTag;
zs[wb] = ((e7) => (e7.scale = null, e7.precision = null, e7.ArrayType = Uint32Array, e7[Symbol.toStringTag] = "Decimal"))(zs.prototype);
class Ws extends q {
  constructor(t) {
    super(x.Date), this.unit = t;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${Ye[this.unit]}>`;
  }
  get ArrayType() {
    return this.unit === Ye.DAY ? Int32Array : BigInt64Array;
  }
}
Sb = Symbol.toStringTag;
Ws[Sb] = ((e7) => (e7.unit = null, e7[Symbol.toStringTag] = "Date"))(Ws.prototype);
class Vs extends q {
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
Ob = Symbol.toStringTag;
Vs[Ob] = ((e7) => (e7.unit = null, e7.bitWidth = null, e7[Symbol.toStringTag] = "Time"))(Vs.prototype);
class Gs extends q {
  constructor(t, r) {
    super(x.Timestamp), this.unit = t, this.timezone = r;
  }
  toString() {
    return `Timestamp<${Q[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
xb = Symbol.toStringTag;
Gs[xb] = ((e7) => (e7.unit = null, e7.timezone = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Timestamp"))(Gs.prototype);
class qs extends q {
  constructor(t) {
    super(x.Interval), this.unit = t;
  }
  toString() {
    return `Interval<${Ar[this.unit]}>`;
  }
}
Ab = Symbol.toStringTag;
qs[Ab] = ((e7) => (e7.unit = null, e7.ArrayType = Int32Array, e7[Symbol.toStringTag] = "Interval"))(qs.prototype);
class Hs extends q {
  constructor(t) {
    super(x.Duration), this.unit = t;
  }
  toString() {
    return `Duration<${Q[this.unit]}>`;
  }
}
Pb = Symbol.toStringTag;
Hs[Pb] = ((e7) => (e7.unit = null, e7.ArrayType = BigInt64Array, e7[Symbol.toStringTag] = "Duration"))(Hs.prototype);
class Ks extends q {
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
Tb = Symbol.toStringTag;
Ks[Tb] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "List"))(Ks.prototype);
class me extends q {
  constructor(t) {
    super(x.Struct), this.children = t;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Ib = Symbol.toStringTag;
me[Ib] = ((e7) => (e7.children = null, e7[Symbol.toStringTag] = "Struct"))(me.prototype);
class Ys extends q {
  constructor(t, r, n) {
    super(x.Union), this.mode = t, this.children = n, this.typeIds = r = Int32Array.from(r), this.typeIdToChildIndex = r.reduce((i, a, o) => (i[a] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Eb = Symbol.toStringTag;
Ys[Eb] = ((e7) => (e7.mode = null, e7.typeIds = null, e7.children = null, e7.typeIdToChildIndex = null, e7.ArrayType = Int8Array, e7[Symbol.toStringTag] = "Union"))(Ys.prototype);
class Xs extends q {
  constructor(t) {
    super(x.FixedSizeBinary), this.byteWidth = t;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
}
$b = Symbol.toStringTag;
Xs[$b] = ((e7) => (e7.byteWidth = null, e7.ArrayType = Uint8Array, e7[Symbol.toStringTag] = "FixedSizeBinary"))(Xs.prototype);
class Js extends q {
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
Db = Symbol.toStringTag;
Js[Db] = ((e7) => (e7.children = null, e7.listSize = null, e7[Symbol.toStringTag] = "FixedSizeList"))(Js.prototype);
class Qs extends q {
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
Mb = Symbol.toStringTag;
Qs[Mb] = ((e7) => (e7.children = null, e7.keysSorted = null, e7[Symbol.toStringTag] = "Map_"))(Qs.prototype);
const h1 = /* @__PURE__ */ ((e7) => () => ++e7)(-1);
class Ni extends q {
  constructor(t, r, n, i) {
    super(x.Dictionary), this.indices = r, this.dictionary = t, this.isOrdered = i || false, this.id = n == null ? h1() : Mt(n);
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
Nb = Symbol.toStringTag;
Ni[Nb] = ((e7) => (e7.id = null, e7.indices = null, e7.isOrdered = null, e7.dictionary = null, e7[Symbol.toStringTag] = "Dictionary"))(Ni.prototype);
function Nr(e7) {
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
class ht {
  visitMany(t, ...r) {
    return t.map((n, i) => this.visit(n, ...r.map((a) => a[i])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], false).apply(this, t);
  }
  getVisitFn(t, r = true) {
    return d1(this, t, r);
  }
  getVisitFnByTypeId(t, r = true) {
    return mi(this, t, r);
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
function d1(e7, t, r = true) {
  return typeof t == "number" ? mi(e7, t, r) : typeof t == "string" && t in x ? mi(e7, x[t], r) : t && t instanceof q ? mi(e7, Lp(t), r) : (t == null ? void 0 : t.type) && t.type instanceof q ? mi(e7, Lp(t.type), r) : mi(e7, x.NONE, r);
}
function mi(e7, t, r = true) {
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
function Lp(e7) {
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
        case de.HALF:
          return x.Float16;
        case de.SINGLE:
          return x.Float32;
        case de.DOUBLE:
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
        case Ye.DAY:
          return x.DateDay;
        case Ye.MILLISECOND:
          return x.DateMillisecond;
      }
      return x.Date;
    case x.Interval:
      switch (e7.unit) {
        case Ar.DAY_TIME:
          return x.IntervalDayTime;
        case Ar.YEAR_MONTH:
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
        case pe.Dense:
          return x.DenseUnion;
        case pe.Sparse:
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
ht.prototype.visitInt8 = null;
ht.prototype.visitInt16 = null;
ht.prototype.visitInt32 = null;
ht.prototype.visitInt64 = null;
ht.prototype.visitUint8 = null;
ht.prototype.visitUint16 = null;
ht.prototype.visitUint32 = null;
ht.prototype.visitUint64 = null;
ht.prototype.visitFloat16 = null;
ht.prototype.visitFloat32 = null;
ht.prototype.visitFloat64 = null;
ht.prototype.visitDateDay = null;
ht.prototype.visitDateMillisecond = null;
ht.prototype.visitTimestampSecond = null;
ht.prototype.visitTimestampMillisecond = null;
ht.prototype.visitTimestampMicrosecond = null;
ht.prototype.visitTimestampNanosecond = null;
ht.prototype.visitTimeSecond = null;
ht.prototype.visitTimeMillisecond = null;
ht.prototype.visitTimeMicrosecond = null;
ht.prototype.visitTimeNanosecond = null;
ht.prototype.visitDenseUnion = null;
ht.prototype.visitSparseUnion = null;
ht.prototype.visitIntervalDayTime = null;
ht.prototype.visitIntervalYearMonth = null;
ht.prototype.visitDuration = null;
ht.prototype.visitDurationSecond = null;
ht.prototype.visitDurationMillisecond = null;
ht.prototype.visitDurationMicrosecond = null;
ht.prototype.visitDurationNanosecond = null;
const Cb = new Float64Array(1), ni = new Uint32Array(Cb.buffer);
function jb(e7) {
  const t = (e7 & 31744) >> 10, r = (e7 & 1023) / 1024, n = Math.pow(-1, (e7 & 32768) >> 15);
  switch (t) {
    case 31:
      return n * (r ? Number.NaN : 1 / 0);
    case 0:
      return n * (r ? 6103515625e-14 * r : 0);
  }
  return n * Math.pow(2, t - 15) * (1 + r);
}
function p1(e7) {
  if (e7 !== e7) return 32256;
  Cb[0] = e7;
  const t = (ni[1] & 2147483648) >> 16 & 65535;
  let r = ni[1] & 2146435072, n = 0;
  return r >= 1089470464 ? ni[0] > 0 ? r = 31744 : (r = (r & 2080374784) >> 16, n = (ni[1] & 1048575) >> 10) : r <= 1056964608 ? (n = 1048576 + (ni[1] & 1048575), n = 1048576 + (n << (r >> 20) - 998) >> 21, r = 0) : (r = r - 1056964608 >> 10, n = (ni[1] & 1048575) + 512 >> 10), t | r | n & 65535;
}
class Z extends ht {
}
function nt(e7) {
  return (t, r, n) => {
    if (t.setValid(r, n != null)) return e7(t, r, n);
  };
}
const y1 = (e7, t, r) => {
  e7[t] = Math.floor(r / 864e5);
}, Bb = (e7, t, r, n) => {
  if (r + 1 < t.length) {
    const i = Mt(t[r]), a = Mt(t[r + 1]);
    e7.set(n.subarray(0, a - i), i);
  }
}, m1 = ({ offset: e7, values: t }, r, n) => {
  const i = e7 + r;
  n ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, qr = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Xh = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Rb = ({ values: e7 }, t, r) => {
  e7[t] = p1(r);
}, v1 = (e7, t, r) => {
  switch (e7.type.precision) {
    case de.HALF:
      return Rb(e7, t, r);
    case de.SINGLE:
    case de.DOUBLE:
      return Xh(e7, t, r);
  }
}, kb = ({ values: e7 }, t, r) => {
  y1(e7, t, r.valueOf());
}, Lb = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, g1 = ({ stride: e7, values: t }, r, n) => {
  t.set(n.subarray(0, e7), e7 * r);
}, Fb = ({ values: e7, valueOffsets: t }, r, n) => Bb(e7, t, r, n), Ub = ({ values: e7, valueOffsets: t }, r, n) => Bb(e7, t, r, qh(n)), b1 = (e7, t, r) => {
  e7.type.unit === Ye.DAY ? kb(e7, t, r) : Lb(e7, t, r);
}, zb = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r / 1e3);
}, Wb = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r);
}, Vb = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e3);
}, Gb = ({ values: e7 }, t, r) => {
  e7[t] = BigInt(r * 1e6);
}, _1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return zb(e7, t, r);
    case Q.MILLISECOND:
      return Wb(e7, t, r);
    case Q.MICROSECOND:
      return Vb(e7, t, r);
    case Q.NANOSECOND:
      return Gb(e7, t, r);
  }
}, qb = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Hb = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Kb = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, Yb = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, w1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return qb(e7, t, r);
    case Q.MILLISECOND:
      return Hb(e7, t, r);
    case Q.MICROSECOND:
      return Kb(e7, t, r);
    case Q.NANOSECOND:
      return Yb(e7, t, r);
  }
}, S1 = ({ values: e7, stride: t }, r, n) => {
  e7.set(n.subarray(0, t), t * r);
}, O1 = (e7, t, r) => {
  const n = e7.children[0], i = e7.valueOffsets, a = Xe.getVisitFn(n);
  if (Array.isArray(r)) for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r[++o]);
  else for (let o = -1, s = i[t], c = i[t + 1]; s < c; ) a(n, s++, r.get(++o));
}, x1 = (e7, t, r) => {
  const n = e7.children[0], { valueOffsets: i } = e7, a = Xe.getVisitFn(n);
  let { [t]: o, [t + 1]: s } = i;
  const c = r instanceof Map ? r.entries() : Object.entries(r);
  for (const u of c) if (a(n, o, u), ++o >= s) break;
}, A1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[a]), P1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(a)), T1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t.get(i.name)), I1 = (e7, t) => (r, n, i, a) => n && r(n, e7, t[i.name]), E1 = (e7, t, r) => {
  const n = e7.type.children.map((a) => Xe.getVisitFn(a.type)), i = r instanceof Map ? T1(t, r) : r instanceof xt ? P1(t, r) : Array.isArray(r) ? A1(t, r) : I1(t, r);
  e7.type.children.forEach((a, o) => i(n[o], e7.children[o], a, o));
}, $1 = (e7, t, r) => {
  e7.type.mode === pe.Dense ? Xb(e7, t, r) : Jb(e7, t, r);
}, Xb = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Xe.visit(i, e7.valueOffsets[t], r);
}, Jb = (e7, t, r) => {
  const n = e7.type.typeIdToChildIndex[e7.typeIds[t]], i = e7.children[n];
  Xe.visit(i, t, r);
}, D1 = (e7, t, r) => {
  var n;
  (n = e7.dictionary) === null || n === void 0 || n.set(e7.values[t], r);
}, M1 = (e7, t, r) => {
  e7.type.unit === Ar.DAY_TIME ? Qb(e7, t, r) : Zb(e7, t, r);
}, Qb = ({ values: e7 }, t, r) => {
  e7.set(r.subarray(0, 2), 2 * t);
}, Zb = ({ values: e7 }, t, r) => {
  e7[t] = r[0] * 12 + r[1] % 12;
}, t0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, e0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, r0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, n0 = ({ values: e7 }, t, r) => {
  e7[t] = r;
}, N1 = (e7, t, r) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return t0(e7, t, r);
    case Q.MILLISECOND:
      return e0(e7, t, r);
    case Q.MICROSECOND:
      return r0(e7, t, r);
    case Q.NANOSECOND:
      return n0(e7, t, r);
  }
}, C1 = (e7, t, r) => {
  const { stride: n } = e7, i = e7.children[0], a = Xe.getVisitFn(i);
  if (Array.isArray(r)) for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r[o]);
  else for (let o = -1, s = t * n; ++o < n; ) a(i, s + o, r.get(o));
};
Z.prototype.visitBool = nt(m1);
Z.prototype.visitInt = nt(qr);
Z.prototype.visitInt8 = nt(qr);
Z.prototype.visitInt16 = nt(qr);
Z.prototype.visitInt32 = nt(qr);
Z.prototype.visitInt64 = nt(qr);
Z.prototype.visitUint8 = nt(qr);
Z.prototype.visitUint16 = nt(qr);
Z.prototype.visitUint32 = nt(qr);
Z.prototype.visitUint64 = nt(qr);
Z.prototype.visitFloat = nt(v1);
Z.prototype.visitFloat16 = nt(Rb);
Z.prototype.visitFloat32 = nt(Xh);
Z.prototype.visitFloat64 = nt(Xh);
Z.prototype.visitUtf8 = nt(Ub);
Z.prototype.visitLargeUtf8 = nt(Ub);
Z.prototype.visitBinary = nt(Fb);
Z.prototype.visitLargeBinary = nt(Fb);
Z.prototype.visitFixedSizeBinary = nt(g1);
Z.prototype.visitDate = nt(b1);
Z.prototype.visitDateDay = nt(kb);
Z.prototype.visitDateMillisecond = nt(Lb);
Z.prototype.visitTimestamp = nt(_1);
Z.prototype.visitTimestampSecond = nt(zb);
Z.prototype.visitTimestampMillisecond = nt(Wb);
Z.prototype.visitTimestampMicrosecond = nt(Vb);
Z.prototype.visitTimestampNanosecond = nt(Gb);
Z.prototype.visitTime = nt(w1);
Z.prototype.visitTimeSecond = nt(qb);
Z.prototype.visitTimeMillisecond = nt(Hb);
Z.prototype.visitTimeMicrosecond = nt(Kb);
Z.prototype.visitTimeNanosecond = nt(Yb);
Z.prototype.visitDecimal = nt(S1);
Z.prototype.visitList = nt(O1);
Z.prototype.visitStruct = nt(E1);
Z.prototype.visitUnion = nt($1);
Z.prototype.visitDenseUnion = nt(Xb);
Z.prototype.visitSparseUnion = nt(Jb);
Z.prototype.visitDictionary = nt(D1);
Z.prototype.visitInterval = nt(M1);
Z.prototype.visitIntervalDayTime = nt(Qb);
Z.prototype.visitIntervalYearMonth = nt(Zb);
Z.prototype.visitDuration = nt(N1);
Z.prototype.visitDurationSecond = nt(t0);
Z.prototype.visitDurationMillisecond = nt(e0);
Z.prototype.visitDurationMicrosecond = nt(r0);
Z.prototype.visitDurationNanosecond = nt(n0);
Z.prototype.visitFixedSizeList = nt(C1);
Z.prototype.visitMap = nt(x1);
const Xe = new Z(), er = Symbol.for("parent"), Ai = Symbol.for("rowIndex");
class Jh {
  constructor(t, r) {
    return this[er] = t, this[Ai] = r, new Proxy(this, new B1());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Ai], r = this[er], n = r.type.children, i = {};
    for (let a = -1, o = n.length; ++a < o; ) i[n[a].name] = Ie.visit(r.children[a], t);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${to(t)}: ${to(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new j1(this[er], this[Ai]);
  }
}
class j1 {
  constructor(t, r) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = r, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, { done: false, value: [this.childFields[t].name, Ie.visit(this.children[t], this.rowIndex)] }) : { done: true, value: null };
  }
}
Object.defineProperties(Jh.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [er]: { writable: true, enumerable: false, configurable: false, value: null }, [Ai]: { writable: true, enumerable: false, configurable: false, value: -1 } });
class B1 {
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
    return t[er].type.children.map((r) => r.name);
  }
  has(t, r) {
    return t[er].type.children.findIndex((n) => n.name === r) !== -1;
  }
  getOwnPropertyDescriptor(t, r) {
    if (t[er].type.children.findIndex((n) => n.name === r) !== -1) return { writable: true, enumerable: true, configurable: true };
  }
  get(t, r) {
    if (Reflect.has(t, r)) return t[r];
    const n = t[er].type.children.findIndex((i) => i.name === r);
    if (n !== -1) {
      const i = Ie.visit(t[er].children[n], t[Ai]);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[er].type.children.findIndex((a) => a.name === r);
    return i !== -1 ? (Xe.visit(t[er].children[i], t[Ai], n), Reflect.set(t, r, n)) : Reflect.has(t, r) || typeof r == "symbol" ? Reflect.set(t, r, n) : false;
  }
}
class H extends ht {
}
function tt(e7) {
  return (t, r) => t.getValid(r) ? e7(t, r) : null;
}
const R1 = (e7, t) => 864e5 * e7[t], k1 = (e7, t) => null, i0 = (e7, t, r) => {
  if (r + 1 >= t.length) return null;
  const n = Mt(t[r]), i = Mt(t[r + 1]);
  return e7.subarray(n, i);
}, L1 = ({ offset: e7, values: t }, r) => {
  const n = e7 + r;
  return (t[n >> 3] & 1 << n % 8) !== 0;
}, a0 = ({ values: e7 }, t) => R1(e7, t), o0 = ({ values: e7 }, t) => Mt(e7[t]), yn = ({ stride: e7, values: t }, r) => t[e7 * r], F1 = ({ stride: e7, values: t }, r) => jb(t[e7 * r]), s0 = ({ values: e7 }, t) => e7[t], U1 = ({ stride: e7, values: t }, r) => t.subarray(e7 * r, e7 * (r + 1)), c0 = ({ values: e7, valueOffsets: t }, r) => i0(e7, t, r), u0 = ({ values: e7, valueOffsets: t }, r) => {
  const n = i0(e7, t, r);
  return n !== null ? tf(n) : null;
}, z1 = ({ values: e7 }, t) => e7[t], W1 = ({ type: e7, values: t }, r) => e7.precision !== de.HALF ? t[r] : jb(t[r]), V1 = (e7, t) => e7.type.unit === Ye.DAY ? a0(e7, t) : o0(e7, t), l0 = ({ values: e7 }, t) => 1e3 * Mt(e7[t]), f0 = ({ values: e7 }, t) => Mt(e7[t]), h0 = ({ values: e7 }, t) => lb(e7[t], BigInt(1e3)), d0 = ({ values: e7 }, t) => lb(e7[t], BigInt(1e6)), G1 = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return l0(e7, t);
    case Q.MILLISECOND:
      return f0(e7, t);
    case Q.MICROSECOND:
      return h0(e7, t);
    case Q.NANOSECOND:
      return d0(e7, t);
  }
}, p0 = ({ values: e7 }, t) => e7[t], y0 = ({ values: e7 }, t) => e7[t], m0 = ({ values: e7 }, t) => e7[t], v0 = ({ values: e7 }, t) => e7[t], q1 = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return p0(e7, t);
    case Q.MILLISECOND:
      return y0(e7, t);
    case Q.MICROSECOND:
      return m0(e7, t);
    case Q.NANOSECOND:
      return v0(e7, t);
  }
}, H1 = ({ values: e7, stride: t }, r) => Yh.decimal(e7.subarray(t * r, t * (r + 1))), K1 = (e7, t) => {
  const { valueOffsets: r, stride: n, children: i } = e7, { [t * n]: a, [t * n + 1]: o } = r, c = i[0].slice(a, o - a);
  return new xt([c]);
}, Y1 = (e7, t) => {
  const { valueOffsets: r, children: n } = e7, { [t]: i, [t + 1]: a } = r, o = n[0];
  return new Qh(o.slice(i, a - i));
}, X1 = (e7, t) => new Jh(e7, t), J1 = (e7, t) => e7.type.mode === pe.Dense ? g0(e7, t) : b0(e7, t), g0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ie.visit(n, e7.valueOffsets[t]);
}, b0 = (e7, t) => {
  const r = e7.type.typeIdToChildIndex[e7.typeIds[t]], n = e7.children[r];
  return Ie.visit(n, t);
}, Q1 = (e7, t) => {
  var r;
  return (r = e7.dictionary) === null || r === void 0 ? void 0 : r.get(e7.values[t]);
}, Z1 = (e7, t) => e7.type.unit === Ar.DAY_TIME ? _0(e7, t) : w0(e7, t), _0 = ({ values: e7 }, t) => e7.subarray(2 * t, 2 * (t + 1)), w0 = ({ values: e7 }, t) => {
  const r = e7[t], n = new Int32Array(2);
  return n[0] = Math.trunc(r / 12), n[1] = Math.trunc(r % 12), n;
}, S0 = ({ values: e7 }, t) => e7[t], O0 = ({ values: e7 }, t) => e7[t], x0 = ({ values: e7 }, t) => e7[t], A0 = ({ values: e7 }, t) => e7[t], tx = (e7, t) => {
  switch (e7.type.unit) {
    case Q.SECOND:
      return S0(e7, t);
    case Q.MILLISECOND:
      return O0(e7, t);
    case Q.MICROSECOND:
      return x0(e7, t);
    case Q.NANOSECOND:
      return A0(e7, t);
  }
}, ex = (e7, t) => {
  const { stride: r, children: n } = e7, a = n[0].slice(t * r, r);
  return new xt([a]);
};
H.prototype.visitNull = tt(k1);
H.prototype.visitBool = tt(L1);
H.prototype.visitInt = tt(z1);
H.prototype.visitInt8 = tt(yn);
H.prototype.visitInt16 = tt(yn);
H.prototype.visitInt32 = tt(yn);
H.prototype.visitInt64 = tt(s0);
H.prototype.visitUint8 = tt(yn);
H.prototype.visitUint16 = tt(yn);
H.prototype.visitUint32 = tt(yn);
H.prototype.visitUint64 = tt(s0);
H.prototype.visitFloat = tt(W1);
H.prototype.visitFloat16 = tt(F1);
H.prototype.visitFloat32 = tt(yn);
H.prototype.visitFloat64 = tt(yn);
H.prototype.visitUtf8 = tt(u0);
H.prototype.visitLargeUtf8 = tt(u0);
H.prototype.visitBinary = tt(c0);
H.prototype.visitLargeBinary = tt(c0);
H.prototype.visitFixedSizeBinary = tt(U1);
H.prototype.visitDate = tt(V1);
H.prototype.visitDateDay = tt(a0);
H.prototype.visitDateMillisecond = tt(o0);
H.prototype.visitTimestamp = tt(G1);
H.prototype.visitTimestampSecond = tt(l0);
H.prototype.visitTimestampMillisecond = tt(f0);
H.prototype.visitTimestampMicrosecond = tt(h0);
H.prototype.visitTimestampNanosecond = tt(d0);
H.prototype.visitTime = tt(q1);
H.prototype.visitTimeSecond = tt(p0);
H.prototype.visitTimeMillisecond = tt(y0);
H.prototype.visitTimeMicrosecond = tt(m0);
H.prototype.visitTimeNanosecond = tt(v0);
H.prototype.visitDecimal = tt(H1);
H.prototype.visitList = tt(K1);
H.prototype.visitStruct = tt(X1);
H.prototype.visitUnion = tt(J1);
H.prototype.visitDenseUnion = tt(g0);
H.prototype.visitSparseUnion = tt(b0);
H.prototype.visitDictionary = tt(Q1);
H.prototype.visitInterval = tt(Z1);
H.prototype.visitIntervalDayTime = tt(_0);
H.prototype.visitIntervalYearMonth = tt(w0);
H.prototype.visitDuration = tt(tx);
H.prototype.visitDurationSecond = tt(S0);
H.prototype.visitDurationMillisecond = tt(O0);
H.prototype.visitDurationMicrosecond = tt(x0);
H.prototype.visitDurationNanosecond = tt(A0);
H.prototype.visitFixedSizeList = tt(ex);
H.prototype.visitMap = tt(Y1);
const Ie = new H(), vi = Symbol.for("keys"), Pi = Symbol.for("vals"), gi = Symbol.for("kKeysAsStrings"), sf = Symbol.for("_kKeysAsStrings");
class Qh {
  constructor(t) {
    return this[vi] = new xt([t.children[0]]).memoize(), this[Pi] = t.children[1], new Proxy(this, new nx());
  }
  get [gi]() {
    return this[sf] || (this[sf] = Array.from(this[vi].toArray(), String));
  }
  [Symbol.iterator]() {
    return new rx(this[vi], this[Pi]);
  }
  get size() {
    return this[vi].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[vi], r = this[Pi], n = {};
    for (let i = -1, a = t.length; ++i < a; ) n[t.get(i)] = Ie.visit(r, i);
    return n;
  }
  toString() {
    return `{${[...this].map(([t, r]) => `${to(t)}: ${to(r)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class rx {
  constructor(t, r) {
    this.keys = t, this.vals = r, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: true, value: null } : (this.keyIndex++, { done: false, value: [this.keys.get(t), Ie.visit(this.vals, t)] });
  }
}
class nx {
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
    return t[gi];
  }
  has(t, r) {
    return t[gi].includes(r);
  }
  getOwnPropertyDescriptor(t, r) {
    if (t[gi].indexOf(r) !== -1) return { writable: true, enumerable: true, configurable: true };
  }
  get(t, r) {
    if (Reflect.has(t, r)) return t[r];
    const n = t[gi].indexOf(r);
    if (n !== -1) {
      const i = Ie.visit(Reflect.get(t, Pi), n);
      return Reflect.set(t, r, i), i;
    }
  }
  set(t, r, n) {
    const i = t[gi].indexOf(r);
    return i !== -1 ? (Xe.visit(Reflect.get(t, Pi), i, n), Reflect.set(t, r, n)) : Reflect.has(t, r) ? Reflect.set(t, r, n) : false;
  }
}
Object.defineProperties(Qh.prototype, { [Symbol.toStringTag]: { enumerable: false, configurable: false, value: "Row" }, [vi]: { writable: true, enumerable: false, configurable: false, value: null }, [Pi]: { writable: true, enumerable: false, configurable: false, value: null }, [sf]: { writable: true, enumerable: false, configurable: false, value: null } });
let Fp;
function P0(e7, t, r, n) {
  const { length: i = 0 } = e7;
  let a = typeof t != "number" ? 0 : t, o = typeof r != "number" ? i : r;
  return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (Fp = a, a = o, o = Fp), o > i && (o = i), n ? n(e7, a, o) : [a, o];
}
const Zh = (e7, t) => e7 < 0 ? t + e7 : e7, Up = (e7) => e7 !== e7;
function la(e7) {
  if (typeof e7 !== "object" || e7 === null) return Up(e7) ? Up : (r) => r === e7;
  if (e7 instanceof Date) {
    const r = e7.valueOf();
    return (n) => n instanceof Date ? n.valueOf() === r : false;
  }
  return ArrayBuffer.isView(e7) ? (r) => r ? e1(e7, r) : false : e7 instanceof Map ? ax(e7) : Array.isArray(e7) ? ix(e7) : e7 instanceof xt ? ox(e7) : sx(e7, true);
}
function ix(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = la(e7[r]);
  return pu(t);
}
function ax(e7) {
  let t = -1;
  const r = [];
  for (const n of e7.values()) r[++t] = la(n);
  return pu(r);
}
function ox(e7) {
  const t = [];
  for (let r = -1, n = e7.length; ++r < n; ) t[r] = la(e7.get(r));
  return pu(t);
}
function sx(e7, t = false) {
  const r = Object.keys(e7);
  if (!t && r.length === 0) return () => false;
  const n = [];
  for (let i = -1, a = r.length; ++i < a; ) n[i] = la(e7[r[i]]);
  return pu(n, r);
}
function pu(e7, t) {
  return (r) => {
    if (!r || typeof r != "object") return false;
    switch (r.constructor) {
      case Array:
        return cx(e7, r);
      case Map:
        return zp(e7, r, r.keys());
      case Qh:
      case Jh:
      case Object:
      case void 0:
        return zp(e7, r, t || Object.keys(r));
    }
    return r instanceof xt ? ux(e7, r) : false;
  };
}
function cx(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t[n])) return false;
  return true;
}
function ux(e7, t) {
  const r = e7.length;
  if (t.length !== r) return false;
  for (let n = -1; ++n < r; ) if (!e7[n](t.get(n))) return false;
  return true;
}
function zp(e7, t, r) {
  const n = r[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const s = e7.length;
  let c = a.next(), u = n.next(), l = i.next();
  for (; o < s && !u.done && !l.done && !c.done && !(u.value !== l.value || !e7[o](c.value)); ++o, u = n.next(), l = i.next(), c = a.next()) ;
  return o === s && u.done && l.done && c.done ? true : (n.return && n.return(), i.return && i.return(), a.return && a.return(), false);
}
function T0(e7, t, r, n) {
  return (r & 1 << n) !== 0;
}
function lx(e7, t, r, n) {
  return (r & 1 << n) >> n;
}
function Zs(e7, t, r) {
  const n = r.byteLength + 7 & -8;
  if (e7 > 0 || r.byteLength < n) {
    const i = new Uint8Array(n);
    return i.set(e7 % 8 === 0 ? r.subarray(e7 >> 3) : tc(new td(r, e7, t, null, T0)).subarray(0, n)), i;
  }
  return r;
}
function tc(e7) {
  const t = [];
  let r = 0, n = 0, i = 0;
  for (const o of e7) o && (i |= 1 << n), ++n === 8 && (t[r++] = i, i = n = 0);
  (r === 0 || n > 0) && (t[r++] = i);
  const a = new Uint8Array(t.length + 7 & -8);
  return a.set(t), a;
}
class td {
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
function cf(e7, t, r) {
  if (r - t <= 0) return 0;
  if (r - t < 8) {
    let a = 0;
    for (const o of new td(e7, t, r - t, e7, lx)) a += o;
    return a;
  }
  const n = r >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return cf(e7, t, i) + cf(e7, n, r) + fx(e7, i >> 3, n - i >> 3);
}
function fx(e7, t, r) {
  let n = 0, i = Math.trunc(t);
  const a = new DataView(e7.buffer, e7.byteOffset, e7.byteLength), o = r === void 0 ? e7.byteLength : i + r;
  for (; o - i >= 4; ) n += hl(a.getUint32(i)), i += 4;
  for (; o - i >= 2; ) n += hl(a.getUint16(i)), i += 2;
  for (; o - i >= 1; ) n += hl(a.getUint8(i)), i += 1;
  return n;
}
function hl(e7) {
  let t = Math.trunc(e7);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const hx = -1;
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
      return q.isSparseUnion(t) ? this.children.some((r) => r.nullable) : q.isDenseUnion(t) ? this.children.some((r) => r.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
    }
    return true;
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: r, values: n, nullBitmap: i, typeIds: a } = this;
    return r && (t += r.byteLength), n && (t += n.byteLength), i && (t += i.byteLength), a && (t += a.byteLength), this.children.reduce((o, s) => o + s.byteLength, t);
  }
  get nullCount() {
    if (q.isUnion(this.type)) return this.children.reduce((n, i) => n + i.nullCount, 0);
    let t = this._nullCount, r;
    return t <= hx && (r = this.nullBitmap) && (this._nullCount = t = r.length === 0 ? 0 : this.length - cf(r, this.offset, this.offset + this.length)), t;
  }
  constructor(t, r, n, i, a, o = [], s) {
    this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(r || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
    let c;
    a instanceof Tt ? (this.stride = a.stride, this.values = a.values, this.typeIds = a.typeIds, this.nullBitmap = a.nullBitmap, this.valueOffsets = a.valueOffsets) : (this.stride = Nr(t), a && ((c = a[0]) && (this.valueOffsets = c), (c = a[1]) && (this.values = c), (c = a[2]) && (this.nullBitmap = c), (c = a[3]) && (this.typeIds = c)));
  }
  getValid(t) {
    const { type: r } = this;
    if (q.isUnion(r)) {
      const n = r, i = this.children[n.typeIdToChildIndex[this.typeIds[t]]], a = n.mode === pe.Dense ? this.valueOffsets[t] : t;
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
    if (q.isUnion(i)) {
      const a = i, o = this.children[a.typeIdToChildIndex[this.typeIds[t]]], s = a.mode === pe.Dense ? this.valueOffsets[t] : t;
      n = o.getValid(s), o.setValid(s, r);
    } else {
      let { nullBitmap: a } = this;
      const { offset: o, length: s } = this, c = o + t, u = 1 << c % 8, l = c >> 3;
      (!a || a.byteLength <= l) && (a = new Uint8Array((o + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (a.set(Zs(o, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: a })) : Object.assign(this, { nullBitmap: a, _nullCount: 0 }));
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
    i[r >> 3] = (1 << r - (r & -8)) - 1, n > 0 && i.set(Zs(this.offset, r, this.nullBitmap), 0);
    const a = this.buffers;
    return a[Mr.VALIDITY] = i, this.clone(this.type, 0, t, n + (t - r), a);
  }
  _sliceBuffers(t, r, n, i) {
    let a;
    const { buffers: o } = this;
    return (a = o[Mr.TYPE]) && (o[Mr.TYPE] = a.subarray(t, t + r)), (a = o[Mr.OFFSET]) && (o[Mr.OFFSET] = a.subarray(t, t + r + 1)) || (a = o[Mr.DATA]) && (o[Mr.DATA] = i === 6 ? a : a.subarray(n * t, n * (t + r))), o;
  }
  _sliceChildren(t, r, n) {
    return t.map((i) => i.slice(r, n));
  }
}
Tt.prototype.children = Object.freeze([]);
class qa extends ht {
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
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Pa(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeUtf8(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Ep(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Pa(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitLargeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.data), a = vt(t.nullBitmap), o = Ep(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, i, a]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDate(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTimestamp(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitTime(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDecimal(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i } = t, a = vt(t.nullBitmap), o = Pa(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
  visitStruct(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = vt(t.nullBitmap), { length: o = i.reduce((c, { length: u }) => Math.max(c, u), 0), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], i);
  }
  visitUnion(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["children"]: i = [] } = t, a = Et(r.ArrayType, t.typeIds), { ["length"]: o = a.length, ["nullCount"]: s = -1 } = t;
    if (q.isSparseUnion(r)) return new Tt(r, n, o, s, [void 0, void 0, void 0, a], i);
    const c = Pa(t.valueOffsets);
    return new Tt(r, n, o, s, [c, void 0, void 0, a], i);
  }
  visitDictionary(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.indices.ArrayType, t.data), { ["dictionary"]: o = new xt([new qa().visit({ type: r.dictionary })]) } = t, { ["length"]: s = a.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [void 0, a, i], [], o);
  }
  visitInterval(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitDuration(t) {
    const { ["type"]: r, ["offset"]: n = 0 } = t, i = vt(t.nullBitmap), a = Et(r.ArrayType, t.data), { ["length"]: o = a.length, ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, a, i]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new qa().visit({ type: r.valueType }) } = t, a = vt(t.nullBitmap), { ["length"]: o = i.length / Nr(r), ["nullCount"]: s = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, o, s, [void 0, void 0, a], [i]);
  }
  visitMap(t) {
    const { ["type"]: r, ["offset"]: n = 0, ["child"]: i = new qa().visit({ type: r.childType }) } = t, a = vt(t.nullBitmap), o = Pa(t.valueOffsets), { ["length"]: s = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new Tt(r, n, s, c, [o, void 0, a], [i]);
  }
}
const dx = new qa();
function dt(e7) {
  return dx.visit(e7);
}
class Wp {
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
function px(e7) {
  return e7.some((t) => t.nullable);
}
function I0(e7) {
  return e7.reduce((t, r) => t + r.nullCount, 0);
}
function E0(e7) {
  return e7.reduce((t, r, n) => (t[n + 1] = t[n] + r.length, t), new Uint32Array(e7.length + 1));
}
function $0(e7, t, r, n) {
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
function ed(e7, t, r, n) {
  let i = 0, a = 0, o = t.length - 1;
  do {
    if (i >= o - 1) return r < t[o] ? n(e7, i, r - t[i]) : null;
    a = i + Math.trunc((o - i) * 0.5), r < t[a] ? o = a : i = a;
  } while (i < o);
}
function rd(e7, t) {
  return e7.getValid(t);
}
function ec(e7) {
  function t(r, n, i) {
    return e7(r[n], i);
  }
  return function(r) {
    const n = this.data;
    return ed(n, this._offsets, r, t);
  };
}
function D0(e7) {
  let t;
  function r(n, i, a) {
    return e7(n[i], a, t);
  }
  return function(n, i) {
    const a = this.data;
    t = i;
    const o = ed(a, this._offsets, n, r);
    return t = void 0, o;
  };
}
function M0(e7) {
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
    const a = this.data, o = typeof i != "number" ? r(a, 0, 0) : ed(a, this._offsets, i, r);
    return t = void 0, o;
  };
}
class K extends ht {
}
function yx(e7, t) {
  return t === null && e7.length > 0 ? 0 : -1;
}
function mx(e7, t) {
  const { nullBitmap: r } = e7;
  if (!r || e7.nullCount <= 0) return -1;
  let n = 0;
  for (const i of new td(r, e7.offset + (t || 0), e7.length, r, T0)) {
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
      return mx(e7, r);
  }
  const n = Ie.getVisitFn(e7), i = la(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
function N0(e7, t, r) {
  const n = Ie.getVisitFn(e7), i = la(t);
  for (let a = (r || 0) - 1, o = e7.length; ++a < o; ) if (i(n(e7, a))) return a;
  return -1;
}
K.prototype.visitNull = yx;
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
K.prototype.visitDenseUnion = N0;
K.prototype.visitSparseUnion = N0;
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
const rc = new K();
class Y extends ht {
}
function et(e7) {
  const { type: t } = e7;
  if (e7.nullCount === 0 && e7.stride === 1 && (q.isInt(t) && t.bitWidth !== 64 || q.isTime(t) && t.bitWidth !== 64 || q.isFloat(t) && t.precision !== de.HALF)) return new Wp(e7.data.length, (n) => {
    const i = e7.data[n];
    return i.values.subarray(0, i.length)[Symbol.iterator]();
  });
  let r = 0;
  return new Wp(e7.data.length, (n) => {
    const a = e7.data[n].length, o = e7.slice(r, r + a);
    return r += a, new vx(o);
  });
}
class vx {
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
const nd = new Y();
var C0;
const j0 = {}, B0 = {};
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
        const { get: s, set: c, indexOf: u } = j0[o.typeId], l = a[0];
        this.isValid = (f) => rd(l, f), this.get = (f) => s(l, f), this.set = (f, h) => c(l, f, h), this.indexOf = (f) => u(l, f), this._offsets = [0, l.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, B0[o.typeId]), this._offsets = E0(a);
        break;
    }
    this.data = a, this.type = o, this.stride = Nr(o), this.numChildren = (i = (n = o.children) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets.at(-1);
  }
  get byteLength() {
    return this.data.reduce((t, r) => t + r.byteLength, 0);
  }
  get nullable() {
    return px(this.data);
  }
  get nullCount() {
    return I0(this.data);
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
    return this.get(Zh(t, this.length));
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
    return nd.visit(this);
  }
  concat(...t) {
    return new xt(this.data.concat(t.flatMap((r) => r.data).flat(Number.POSITIVE_INFINITY)));
  }
  slice(t, r) {
    return new xt(P0(this, t, r, ({ data: n, _offsets: i }, a, o) => $0(n, i, a, o)));
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
    return q.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : false;
  }
  memoize() {
    if (q.isDictionary(this.type)) {
      const t = new nc(this.data[0].dictionary), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return new nc(this);
  }
  unmemoize() {
    if (q.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), r = this.data.map((n) => {
        const i = n.clone();
        return i.dictionary = t, i;
      });
      return new xt(r);
    }
    return this;
  }
}
C0 = Symbol.toStringTag;
xt[C0] = ((e7) => {
  e7.type = q.prototype, e7.data = [], e7.length = 0, e7.stride = 1, e7.numChildren = 0, e7._offsets = new Uint32Array([0]), e7[Symbol.isConcatSpreadable] = true;
  const t = Object.keys(x).map((r) => x[r]).filter((r) => typeof r == "number" && r !== x.NONE);
  for (const r of t) {
    const n = Ie.getVisitFnByTypeId(r), i = Xe.getVisitFnByTypeId(r), a = rc.getVisitFnByTypeId(r);
    j0[r] = { get: n, set: i, indexOf: a }, B0[r] = Object.create(e7, { isValid: { value: ec(rd) }, get: { value: ec(Ie.getVisitFnByTypeId(r)) }, set: { value: D0(Xe.getVisitFnByTypeId(r)) }, indexOf: { value: M0(rc.getVisitFnByTypeId(r)) } });
  }
  return "Vector";
})(xt.prototype);
class nc extends xt {
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
    } }), Object.defineProperty(this, "slice", { value: (o, s) => new nc(i.call(this, o, s)) }), Object.defineProperty(this, "isMemoized", { value: true }), Object.defineProperty(this, "unmemoize", { value: () => new xt(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
  }
}
class uf {
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
class Me {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsFooter(t, r) {
    return (r || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, r) {
    return t.setPosition(t.position() + Pt), (r || new Me()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ht.V1;
  }
  schema(t) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (t || new hr()).__init(this.bb.__indirect(this.bb_pos + r), this.bb) : null;
  }
  dictionaries(t, r) {
    const n = this.bb.__offset(this.bb_pos, 8);
    return n ? (r || new uf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, r) {
    const n = this.bb.__offset(this.bb_pos, 10);
    return n ? (r || new uf()).__init(this.bb.__vector(this.bb_pos + n) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, r) {
    const n = this.bb.__offset(this.bb_pos, 12);
    return n ? (r || new re()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    this.fields = t || [], this.metadata = r || /* @__PURE__ */ new Map(), n || (n = lf(this.fields)), this.dictionaries = n, this.metadataVersion = i;
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
    const r = t[0] instanceof At ? t[0] : Array.isArray(t[0]) ? new At(t[0]) : new At(t), n = [...this.fields], i = os(os(/* @__PURE__ */ new Map(), this.metadata), r.metadata), a = r.fields.filter((s) => {
      const c = n.findIndex((u) => u.name === s.name);
      return ~c ? (n[c] = s.clone({ metadata: os(os(/* @__PURE__ */ new Map(), n[c].metadata), s.metadata) })) && false : true;
    }), o = lf(a, /* @__PURE__ */ new Map());
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
function os(e7, t) {
  return new Map([...e7 || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function lf(e7, t = /* @__PURE__ */ new Map()) {
  for (let r = -1, n = e7.length; ++r < n; ) {
    const a = e7[r].type;
    if (q.isDictionary(a)) {
      if (!t.has(a.id)) t.set(a.id, a.dictionary);
      else if (t.get(a.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    a.children && a.children.length > 0 && lf(a.children, t);
  }
  return t;
}
var gx = ob, bx = Di;
class io {
  static decode(t) {
    t = new bx(vt(t));
    const r = Me.getRootAsFooter(t), n = At.decode(r.schema(), /* @__PURE__ */ new Map(), r.version());
    return new _x(n, r);
  }
  static encode(t) {
    const r = new gx(), n = At.encode(r, t.schema);
    Me.startRecordBatchesVector(r, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse()) hn.encode(r, o);
    const i = r.endVector();
    Me.startDictionariesVector(r, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse()) hn.encode(r, o);
    const a = r.endVector();
    return Me.startFooter(r), Me.addSchema(r, n), Me.addVersion(r, Ht.V5), Me.addRecordBatches(r, i), Me.addDictionaries(r, a), Me.finishFooterBuffer(r, Me.endFooter(r)), r.asUint8Array();
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
class _x extends io {
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
      if (r) return hn.decode(r);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const r = this._footer.dictionaries(t);
      if (r) return hn.decode(r);
    }
    return null;
  }
}
class hn {
  static decode(t) {
    return new hn(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  static encode(t, r) {
    const { metaDataLength: n } = r, i = BigInt(r.offset), a = BigInt(r.bodyLength);
    return uf.createBlock(t, i, n, a);
  }
  constructor(t, r, n) {
    this.metaDataLength = t, this.offset = Mt(n), this.bodyLength = Mt(r);
  }
}
const zt = Object.freeze({ done: true, value: void 0 });
class Vp {
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
class id {
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
class wx extends id {
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
    return We.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return We.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
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
class Is extends wx {
  write(t) {
    if ((t = vt(t)).byteLength > 0) return super.write(t);
  }
  toString(t = false) {
    return t ? tf(this.toUint8Array(true)) : this.toUint8Array(false).then(tf);
  }
  toUint8Array(t = false) {
    return t ? xr(this._values)[0] : ot(this, void 0, void 0, function* () {
      var r, n, i, a;
      const o = [];
      let s = 0;
      try {
        for (var c = true, u = Bn(this), l; l = yield u.next(), r = l.done, !r; c = true) {
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
      return xr(o, s)[0];
    });
  }
}
class ic {
  constructor(t) {
    t && (this.source = new Sx(We.fromIterable(t)));
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
class Ci {
  constructor(t) {
    t instanceof Ci ? this.source = t.source : t instanceof Is ? this.source = new An(We.fromAsyncIterable(t)) : rb(t) ? this.source = new An(We.fromNodeStream(t)) : Hh(t) ? this.source = new An(We.fromDOMStream(t)) : eb(t) ? this.source = new An(We.fromDOMStream(t.body)) : Go(t) ? this.source = new An(We.fromIterable(t)) : zn(t) ? this.source = new An(We.fromAsyncIterable(t)) : ua(t) && (this.source = new An(We.fromAsyncIterable(t)));
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
class Sx {
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
class An {
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
class Gp extends ic {
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
class ac extends Ci {
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
const Ox = 65536;
function bi(e7) {
  return e7 < 0 && (e7 = 4294967295 + e7 + 1), `0x${e7.toString(16)}`;
}
const ji = 8, ad = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
class R0 {
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
    return i = r[2] * n[3], a += i, i = r[3] * n[2] >>> 0, a += i, this.buffer[0] += a << 16, this.buffer[1] = a >>> 0 < i ? Ox : 0, this.buffer[1] += a >>> 16, this.buffer[1] += r[1] * n[3] + r[2] * n[2] + r[3] * n[1], this.buffer[1] += r[0] * n[3] + r[1] * n[2] + r[2] * n[1] + r[3] * n[0] << 16, this;
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
    return `${bi(this.buffer[1])} ${bi(this.buffer[0])}`;
  }
}
class It extends R0 {
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
      const o = ji < n - a ? ji : n - a, s = new It(new Uint32Array([Number.parseInt(t.slice(a, a + o), 10), 0])), c = new It(new Uint32Array([ad[o], 0]));
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
class Se extends R0 {
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
    return Se.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(2)) {
    return Se.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(2)) {
    const n = t.startsWith("-"), i = t.length, a = new Se(r);
    for (let o = n ? 1 : 0; o < i; ) {
      const s = ji < i - o ? ji : i - o, c = new Se(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0])), u = new Se(new Uint32Array([ad[s], 0]));
      a.times(u), a.plus(c), o += s;
    }
    return n ? a.negate() : a;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 2);
    for (let n = -1, i = t.length; ++n < i; ) Se.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 2 * n * 4, 2));
    return r;
  }
  static multiply(t, r) {
    return new Se(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new Se(new Uint32Array(t.buffer)).plus(r);
  }
}
class dr {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new Se(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Se(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
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
    return `${bi(this.buffer[3])} ${bi(this.buffer[2])} ${bi(this.buffer[1])} ${bi(this.buffer[0])}`;
  }
  static multiply(t, r) {
    return new dr(new Uint32Array(t.buffer)).times(r);
  }
  static add(t, r) {
    return new dr(new Uint32Array(t.buffer)).plus(r);
  }
  static from(t, r = new Uint32Array(4)) {
    return dr.fromString(typeof t == "string" ? t : t.toString(), r);
  }
  static fromNumber(t, r = new Uint32Array(4)) {
    return dr.fromString(t.toString(), r);
  }
  static fromString(t, r = new Uint32Array(4)) {
    const n = t.startsWith("-"), i = t.length, a = new dr(r);
    for (let o = n ? 1 : 0; o < i; ) {
      const s = ji < i - o ? ji : i - o, c = new dr(new Uint32Array([Number.parseInt(t.slice(o, o + s), 10), 0, 0, 0])), u = new dr(new Uint32Array([ad[s], 0, 0, 0]));
      a.times(u), a.plus(c), o += s;
    }
    return n ? a.negate() : a;
  }
  static convertArray(t) {
    const r = new Uint32Array(t.length * 4);
    for (let n = -1, i = t.length; ++n < i; ) dr.from(t[n], new Uint32Array(r.buffer, r.byteOffset + 4 * 4 * n, 4));
    return r;
  }
}
class k0 extends ht {
  constructor(t, r, n, i, a = Ht.V5) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = r, this.buffers = n, this.dictionaries = i, this.metadataVersion = a;
  }
  visit(t) {
    return super.visit(t instanceof Ft ? t.type : t);
  }
  visitNull(t, { length: r } = this.nextFieldNode()) {
    return dt({ type: t, length: r });
  }
  visitBool(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitInt(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFloat(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitUtf8(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeUtf8(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitLargeBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDate(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTimestamp(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitTime(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDecimal(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitList(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), children: this.visitMany(t.children) });
  }
  visitUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return this.metadataVersion < Ht.V5 && this.readNullBitmap(t, n), t.mode === pe.Sparse ? this.visitSparseUnion(t, { length: r, nullCount: n }) : this.visitDenseUnion(t, { length: r, nullCount: n });
  }
  visitDenseUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitDuration(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: r, nullCount: n } = this.nextFieldNode()) {
    return dt({ type: t, length: r, nullCount: n, nullBitmap: this.readNullBitmap(t, n), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
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
class xx extends k0 {
  constructor(t, r, n, i, a) {
    super(new Uint8Array(0), r, n, i, a), this.sources = t;
  }
  readNullBitmap(t, r, { offset: n } = this.nextBufferRange()) {
    return r <= 0 ? new Uint8Array(0) : tc(this.sources[n]);
  }
  readOffsets(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.OffsetArrayType, this.sources[r]));
  }
  readTypeIds(t, { offset: r } = this.nextBufferRange()) {
    return Et(Uint8Array, Et(t.ArrayType, this.sources[r]));
  }
  readData(t, { offset: r } = this.nextBufferRange()) {
    const { sources: n } = this;
    return q.isTimestamp(t) || (q.isInt(t) || q.isTime(t)) && t.bitWidth === 64 || q.isDuration(t) || q.isDate(t) && t.unit === Ye.MILLISECOND ? Et(Uint8Array, Se.convertArray(n[r])) : q.isDecimal(t) ? Et(Uint8Array, dr.convertArray(n[r])) : q.isBinary(t) || q.isLargeBinary(t) || q.isFixedSizeBinary(t) ? Ax(n[r]) : q.isBool(t) ? tc(n[r]) : q.isUtf8(t) || q.isLargeUtf8(t) ? qh(n[r].join("")) : Et(Uint8Array, Et(t.ArrayType, n[r].map((i) => +i)));
  }
}
function Ax(e7) {
  const t = e7.join(""), r = new Uint8Array(t.length / 2);
  for (let n = 0; n < t.length; n += 2) r[n >> 1] = Number.parseInt(t.slice(n, n + 2), 16);
  return r;
}
class X extends ht {
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
function be(e7, t) {
  return t instanceof e7.constructor;
}
function Xn(e7, t) {
  return e7 === t || be(e7, t);
}
function Hr(e7, t) {
  return e7 === t || be(e7, t) && e7.bitWidth === t.bitWidth && e7.isSigned === t.isSigned;
}
function yu(e7, t) {
  return e7 === t || be(e7, t) && e7.precision === t.precision;
}
function Px(e7, t) {
  return e7 === t || be(e7, t) && e7.byteWidth === t.byteWidth;
}
function od(e7, t) {
  return e7 === t || be(e7, t) && e7.unit === t.unit;
}
function qo(e7, t) {
  return e7 === t || be(e7, t) && e7.unit === t.unit && e7.timezone === t.timezone;
}
function Ho(e7, t) {
  return e7 === t || be(e7, t) && e7.unit === t.unit && e7.bitWidth === t.bitWidth;
}
function Tx(e7, t) {
  return e7 === t || be(e7, t) && e7.children.length === t.children.length && dn.compareManyFields(e7.children, t.children);
}
function Ix(e7, t) {
  return e7 === t || be(e7, t) && e7.children.length === t.children.length && dn.compareManyFields(e7.children, t.children);
}
function sd(e7, t) {
  return e7 === t || be(e7, t) && e7.mode === t.mode && e7.typeIds.every((r, n) => r === t.typeIds[n]) && dn.compareManyFields(e7.children, t.children);
}
function Ex(e7, t) {
  return e7 === t || be(e7, t) && e7.id === t.id && e7.isOrdered === t.isOrdered && dn.visit(e7.indices, t.indices) && dn.visit(e7.dictionary, t.dictionary);
}
function cd(e7, t) {
  return e7 === t || be(e7, t) && e7.unit === t.unit;
}
function Ko(e7, t) {
  return e7 === t || be(e7, t) && e7.unit === t.unit;
}
function $x(e7, t) {
  return e7 === t || be(e7, t) && e7.listSize === t.listSize && e7.children.length === t.children.length && dn.compareManyFields(e7.children, t.children);
}
function Dx(e7, t) {
  return e7 === t || be(e7, t) && e7.keysSorted === t.keysSorted && e7.children.length === t.children.length && dn.compareManyFields(e7.children, t.children);
}
X.prototype.visitNull = Xn;
X.prototype.visitBool = Xn;
X.prototype.visitInt = Hr;
X.prototype.visitInt8 = Hr;
X.prototype.visitInt16 = Hr;
X.prototype.visitInt32 = Hr;
X.prototype.visitInt64 = Hr;
X.prototype.visitUint8 = Hr;
X.prototype.visitUint16 = Hr;
X.prototype.visitUint32 = Hr;
X.prototype.visitUint64 = Hr;
X.prototype.visitFloat = yu;
X.prototype.visitFloat16 = yu;
X.prototype.visitFloat32 = yu;
X.prototype.visitFloat64 = yu;
X.prototype.visitUtf8 = Xn;
X.prototype.visitLargeUtf8 = Xn;
X.prototype.visitBinary = Xn;
X.prototype.visitLargeBinary = Xn;
X.prototype.visitFixedSizeBinary = Px;
X.prototype.visitDate = od;
X.prototype.visitDateDay = od;
X.prototype.visitDateMillisecond = od;
X.prototype.visitTimestamp = qo;
X.prototype.visitTimestampSecond = qo;
X.prototype.visitTimestampMillisecond = qo;
X.prototype.visitTimestampMicrosecond = qo;
X.prototype.visitTimestampNanosecond = qo;
X.prototype.visitTime = Ho;
X.prototype.visitTimeSecond = Ho;
X.prototype.visitTimeMillisecond = Ho;
X.prototype.visitTimeMicrosecond = Ho;
X.prototype.visitTimeNanosecond = Ho;
X.prototype.visitDecimal = Xn;
X.prototype.visitList = Tx;
X.prototype.visitStruct = Ix;
X.prototype.visitUnion = sd;
X.prototype.visitDenseUnion = sd;
X.prototype.visitSparseUnion = sd;
X.prototype.visitDictionary = Ex;
X.prototype.visitInterval = cd;
X.prototype.visitIntervalDayTime = cd;
X.prototype.visitIntervalYearMonth = cd;
X.prototype.visitDuration = Ko;
X.prototype.visitDurationSecond = Ko;
X.prototype.visitDurationMillisecond = Ko;
X.prototype.visitDurationMicrosecond = Ko;
X.prototype.visitDurationNanosecond = Ko;
X.prototype.visitFixedSizeList = $x;
X.prototype.visitMap = Dx;
const dn = new X();
function ff(e7, t) {
  return dn.compareSchemas(e7, t);
}
function dl(e7, t) {
  return Mx(e7, t.map((r) => r.data.concat()));
}
function Mx(e7, t) {
  const r = [...e7.fields], n = [], i = { numBatches: t.reduce((f, h) => Math.max(f, h.length), 0) };
  let a = 0, o = 0, s = -1;
  const c = t.length;
  let u, l = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < c; ) l[s] = u = t[s].shift(), o = Math.min(o, u ? u.length : o);
    Number.isFinite(o) && (l = Nx(r, o, l, t, i), o > 0 && (n[a++] = dt({ type: new me(r), length: o, nullCount: 0, children: l.slice() })));
  }
  return [e7 = e7.assign(r), n.map((f) => new xe(e7, f))];
}
function Nx(e7, t, r, n, i) {
  var a;
  const o = (t + 63 & -64) >> 3;
  for (let s = -1, c = n.length; ++s < c; ) {
    const u = r[s], l = u == null ? void 0 : u.length;
    if (l >= t) l === t ? r[s] = u : (r[s] = u.slice(0, t), i.numBatches = Math.max(i.numBatches, n[s].unshift(u.slice(t, l - t))));
    else {
      const f = e7[s];
      e7[s] = f.clone({ nullable: true }), r[s] = (a = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(t)) !== null && a !== void 0 ? a : dt({ type: f.type, length: t, nullCount: t, nullBitmap: new Uint8Array(o) });
    }
  }
  return r;
}
var L0;
class ye {
  constructor(...t) {
    var r, n;
    if (t.length === 0) return this.batches = [], this.schema = new At([]), this._offsets = [0], this;
    let i, a;
    t[0] instanceof At && (i = t.shift()), t.at(-1) instanceof Uint32Array && (a = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof xe) return [c];
        if (c instanceof ye) return c.batches;
        if (c instanceof Tt) {
          if (c.type instanceof me) return [new xe(new At(c.type.children), c)];
        } else {
          if (Array.isArray(c)) return c.flatMap((u) => o(u));
          if (typeof c[Symbol.iterator] == "function") return [...c].flatMap((u) => o(u));
          if (typeof c == "object") {
            const u = Object.keys(c), l = u.map((d) => new xt([c[d]])), f = i ?? new At(u.map((d, y) => new Ft(String(d), l[y].type, l[y].nullable))), [, h] = dl(f, l);
            return h.length === 0 ? [new xe(c)] : h;
          }
        }
      }
      return [];
    }, s = t.flatMap((c) => o(c));
    if (i = (n = i ?? ((r = s[0]) === null || r === void 0 ? void 0 : r.schema)) !== null && n !== void 0 ? n : new At([]), !(i instanceof At)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of s) {
      if (!(c instanceof xe)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!ff(i, c.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = s, this._offsets = a ?? E0(this.data);
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
    return this._nullCount === -1 && (this._nullCount = I0(this.data)), this._nullCount;
  }
  isValid(t) {
    return false;
  }
  get(t) {
    return null;
  }
  at(t) {
    return this.get(Zh(t, this.numRows));
  }
  set(t, r) {
  }
  indexOf(t, r) {
    return -1;
  }
  [Symbol.iterator]() {
    return this.batches.length > 0 ? nd.visit(new xt(this.data)) : new Array(0)[Symbol.iterator]();
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
    return new ye(r, n.map((i) => new xe(r, i)));
  }
  slice(t, r) {
    const n = this.schema;
    [t, r] = P0({ length: this.numRows }, t, r);
    const i = $0(this.data, this._offsets, t, r);
    return new ye(n, i.map((a) => new xe(n, a)));
  }
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((r) => r.name === t));
  }
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const r = this.data.map((n) => n.children[t]);
      if (r.length === 0) {
        const { type: n } = this.schema.fields[t], i = dt({ type: n, length: 0, nullCount: 0 });
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
      r || (r = new xt([dt({ type: new fn(), length: this.numRows })]));
      const a = n.fields.slice(), o = a[t].clone({ type: r.type }), s = this.schema.fields.map((c, u) => this.getChildAt(u));
      [a[t], s[t]] = [o, r], [n, i] = dl(n, s);
    }
    return new ye(n, i);
  }
  select(t) {
    const r = this.schema.fields.reduce((n, i, a) => n.set(i.name, a), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((n) => r.get(n)).filter((n) => n > -1));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = this.batches.map((i) => i.selectAt(t));
    return new ye(r, n);
  }
  assign(t) {
    const r = this.schema.fields, [n, i] = t.schema.fields.reduce((s, c, u) => {
      const [l, f] = s, h = r.findIndex((d) => d.name === c.name);
      return ~h ? f[h] = u : l.push(u), s;
    }, [[], []]), a = this.schema.assign(t.schema), o = [...r.map((s, c) => [c, i[c]]).map(([s, c]) => c === void 0 ? this.getChildAt(s) : t.getChildAt(c)), ...n.map((s) => t.getChildAt(s))].filter(Boolean);
    return new ye(...dl(a, o));
  }
}
L0 = Symbol.toStringTag;
ye[L0] = ((e7) => (e7.schema = null, e7.batches = [], e7._offsets = new Uint32Array([0]), e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, e7.isValid = ec(rd), e7.get = ec(Ie.getVisitFn(x.Struct)), e7.set = D0(Xe.getVisitFn(x.Struct)), e7.indexOf = M0(rc.getVisitFn(x.Struct)), "Table"))(ye.prototype);
var F0;
let xe = class Va {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof At)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([, this.data = dt({ nullCount: 0, type: new me(this.schema.fields), children: this.schema.fields.map((r) => dt({ type: r.type, nullCount: 0 })) })] = t, !(this.data instanceof Tt)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = qp(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [r] = t, { fields: n, children: i, length: a } = Object.keys(r).reduce((c, u, l) => (c.children[l] = r[u], c.length = Math.max(c.length, r[u].length), c.fields[l] = Ft.new({ name: u, type: r[u].type, nullable: true }), c), { length: 0, fields: new Array(), children: new Array() }), o = new At(n), s = dt({ type: new me(n), length: a, children: i, nullCount: 0 });
        [this.schema, this.data] = qp(o, s.children, a);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = U0(this.schema.fields, this.data.children));
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
    return Ie.visit(this.data, t);
  }
  at(t) {
    return this.get(Zh(t, this.numRows));
  }
  set(t, r) {
    return Xe.visit(this.data, t, r);
  }
  indexOf(t, r) {
    return rc.visit(this.data, t, r);
  }
  [Symbol.iterator]() {
    return nd.visit(new xt([this.data]));
  }
  toArray() {
    return [...this];
  }
  concat(...t) {
    return new ye(this.schema, [this, ...t]);
  }
  slice(t, r) {
    const [n] = new xt([this.data]).slice(t, r).data;
    return new Va(this.schema, n);
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
      r || (r = new xt([dt({ type: new fn(), length: this.numRows })]));
      const a = n.fields.slice(), o = i.children.slice(), s = a[t].clone({ type: r.type });
      [a[t], o[t]] = [s, r.data[0]], n = new At(a, new Map(this.schema.metadata)), i = dt({ type: new me(a), children: o });
    }
    return new Va(n, i);
  }
  select(t) {
    const r = this.schema.select(t), n = new me(r.fields), i = [];
    for (const a of t) {
      const o = this.schema.fields.findIndex((s) => s.name === a);
      ~o && (i[o] = this.data.children[o]);
    }
    return new Va(r, dt({ type: n, length: this.numRows, children: i }));
  }
  selectAt(t) {
    const r = this.schema.selectAt(t), n = t.map((a) => this.data.children[a]).filter(Boolean), i = dt({ type: new me(r.fields), length: this.numRows, children: n });
    return new Va(r, i);
  }
};
F0 = Symbol.toStringTag;
xe[F0] = ((e7) => (e7._nullCount = -1, e7[Symbol.isConcatSpreadable] = true, "RecordBatch"))(xe.prototype);
function qp(e7, t, r = t.reduce((n, i) => Math.max(n, i.length), 0)) {
  var n;
  const i = [...e7.fields], a = [...t], o = (r + 63 & -64) >> 3;
  for (const [s, c] of e7.fields.entries()) {
    const u = t[s];
    (!u || u.length !== r) && (i[s] = c.clone({ nullable: true }), a[s] = (n = u == null ? void 0 : u._changeLengthAndBackfillNullBitmap(r)) !== null && n !== void 0 ? n : dt({ type: c.type, length: r, nullCount: r, nullBitmap: new Uint8Array(o) }));
  }
  return [e7.assign(i), dt({ type: new me(i), length: r, children: a })];
}
function U0(e7, t, r = /* @__PURE__ */ new Map()) {
  var n, i;
  if (((n = e7 == null ? void 0 : e7.length) !== null && n !== void 0 ? n : 0) > 0 && (e7 == null ? void 0 : e7.length) === (t == null ? void 0 : t.length)) for (let a = -1, o = e7.length; ++a < o; ) {
    const { type: s } = e7[a], c = t[a];
    for (const u of [c, ...((i = c == null ? void 0 : c.dictionary) === null || i === void 0 ? void 0 : i.data) || []]) U0(s.children, u == null ? void 0 : u.children, r);
    if (q.isDictionary(s)) {
      const { id: u } = s;
      if (!r.has(u)) (c == null ? void 0 : c.dictionary) && r.set(u, c.dictionary);
      else if (r.get(u) !== c.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
  }
  return r;
}
class ud extends xe {
  constructor(t) {
    const r = t.fields.map((i) => dt({ type: i.type })), n = dt({ type: new me(t.fields), nullCount: 0, children: r });
    super(t, n);
  }
}
let Zr = class fr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, r) {
    return this.bb_pos = t, this.bb = r, this;
  }
  static getRootAsMessage(t, r) {
    return (r || new fr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, r) {
    return t.setPosition(t.position() + Pt), (r || new fr()).__init(t.readInt32(t.position()) + t.position(), t);
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
    return n ? (r || new re()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + t * 4), this.bb) : null;
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
    return fr.startMessage(t), fr.addVersion(t, r), fr.addHeaderType(t, n), fr.addHeader(t, i), fr.addBodyLength(t, a), fr.addCustomMetadata(t, o), fr.endMessage(t);
  }
};
class Cx extends ht {
  visit(t, r) {
    return t == null || r == null ? void 0 : super.visit(t, r);
  }
  visitNull(t, r) {
    return Rp.startNull(r), Rp.endNull(r);
  }
  visitInt(t, r) {
    return je.startInt(r), je.addBitWidth(r, t.bitWidth), je.addIsSigned(r, t.isSigned), je.endInt(r);
  }
  visitFloat(t, r) {
    return yr.startFloatingPoint(r), yr.addPrecision(r, t.precision), yr.endFloatingPoint(r);
  }
  visitBinary(t, r) {
    return Mp.startBinary(r), Mp.endBinary(r);
  }
  visitLargeBinary(t, r) {
    return Cp.startLargeBinary(r), Cp.endLargeBinary(r);
  }
  visitBool(t, r) {
    return Np.startBool(r), Np.endBool(r);
  }
  visitUtf8(t, r) {
    return kp.startUtf8(r), kp.endUtf8(r);
  }
  visitLargeUtf8(t, r) {
    return jp.startLargeUtf8(r), jp.endLargeUtf8(r);
  }
  visitDecimal(t, r) {
    return fi.startDecimal(r), fi.addScale(r, t.scale), fi.addPrecision(r, t.precision), fi.addBitWidth(r, t.bitWidth), fi.endDecimal(r);
  }
  visitDate(t, r) {
    return Ss.startDate(r), Ss.addUnit(r, t.unit), Ss.endDate(r);
  }
  visitTime(t, r) {
    return Ve.startTime(r), Ve.addUnit(r, t.unit), Ve.addBitWidth(r, t.bitWidth), Ve.endTime(r);
  }
  visitTimestamp(t, r) {
    const n = t.timezone && r.createString(t.timezone) || void 0;
    return Ge.startTimestamp(r), Ge.addUnit(r, t.unit), n !== void 0 && Ge.addTimezone(r, n), Ge.endTimestamp(r);
  }
  visitInterval(t, r) {
    return mr.startInterval(r), mr.addUnit(r, t.unit), mr.endInterval(r);
  }
  visitDuration(t, r) {
    return Os.startDuration(r), Os.addUnit(r, t.unit), Os.endDuration(r);
  }
  visitList(t, r) {
    return Bp.startList(r), Bp.endList(r);
  }
  visitStruct(t, r) {
    return $n.startStruct_(r), $n.endStruct_(r);
  }
  visitUnion(t, r) {
    Oe.startTypeIdsVector(r, t.typeIds.length);
    const n = Oe.createTypeIdsVector(r, t.typeIds);
    return Oe.startUnion(r), Oe.addMode(r, t.mode), Oe.addTypeIds(r, n), Oe.endUnion(r);
  }
  visitDictionary(t, r) {
    const n = this.visit(t.indices, r);
    return jr.startDictionaryEncoding(r), jr.addId(r, BigInt(t.id)), jr.addIsOrdered(r, t.isOrdered), n !== void 0 && jr.addIndexType(r, n), jr.endDictionaryEncoding(r);
  }
  visitFixedSizeBinary(t, r) {
    return xs.startFixedSizeBinary(r), xs.addByteWidth(r, t.byteWidth), xs.endFixedSizeBinary(r);
  }
  visitFixedSizeList(t, r) {
    return As.startFixedSizeList(r), As.addListSize(r, t.listSize), As.endFixedSizeList(r);
  }
  visitMap(t, r) {
    return Ps.startMap(r), Ps.addKeysSorted(r, t.keysSorted), Ps.endMap(r);
  }
}
const pl = new Cx();
function jx(e7, t = /* @__PURE__ */ new Map()) {
  return new At(Rx(e7, t), Es(e7.metadata), t);
}
function z0(e7) {
  return new Re(e7.count, W0(e7.columns), V0(e7.columns));
}
function Bx(e7) {
  return new Pr(z0(e7.data), e7.id, e7.isDelta);
}
function Rx(e7, t) {
  return (e7.fields || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function Hp(e7, t) {
  return (e7.children || []).filter(Boolean).map((r) => Ft.fromJSON(r, t));
}
function W0(e7) {
  return (e7 || []).reduce((t, r) => [...t, new pn(r.count, kx(r.VALIDITY)), ...W0(r.children)], []);
}
function V0(e7, t = []) {
  for (let r = -1, n = (e7 || []).length; ++r < n; ) {
    const i = e7[r];
    i.VALIDITY && t.push(new gr(t.length, i.VALIDITY.length)), i.TYPE_ID && t.push(new gr(t.length, i.TYPE_ID.length)), i.OFFSET && t.push(new gr(t.length, i.OFFSET.length)), i.DATA && t.push(new gr(t.length, i.DATA.length)), t = V0(i.children, t);
  }
  return t;
}
function kx(e7) {
  return (e7 || []).reduce((t, r) => t + +(r === 0), 0);
}
function Lx(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(a = e7.dictionary) ? (o = Yp(e7, Hp(e7, t)), i = new Ft(e7.name, o, e7.nullable, Es(e7.metadata))) : t.has(r = a.id) ? (n = (n = a.indexType) ? Kp(n) : new no(), s = new Ni(t.get(r), n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Es(e7.metadata))) : (n = (n = a.indexType) ? Kp(n) : new no(), t.set(r, o = Yp(e7, Hp(e7, t))), s = new Ni(o, n, r, a.isOrdered), i = new Ft(e7.name, s, e7.nullable, Es(e7.metadata))), i || null;
}
function Es(e7 = []) {
  return new Map(e7.map(({ key: t, value: r }) => [t, r]));
}
function Kp(e7) {
  return new Wn(e7.isSigned, e7.bitWidth);
}
function Yp(e7, t) {
  const r = e7.type.name;
  switch (r) {
    case "NONE":
      return new fn();
    case "null":
      return new fn();
    case "binary":
      return new Rs();
    case "largebinary":
      return new ks();
    case "utf8":
      return new Ls();
    case "largeutf8":
      return new Fs();
    case "bool":
      return new Us();
    case "list":
      return new Ks((t || [])[0]);
    case "struct":
      return new me(t || []);
    case "struct_":
      return new me(t || []);
  }
  switch (r) {
    case "int": {
      const n = e7.type;
      return new Wn(n.isSigned, n.bitWidth);
    }
    case "floatingpoint": {
      const n = e7.type;
      return new Bs(de[n.precision]);
    }
    case "decimal": {
      const n = e7.type;
      return new zs(n.scale, n.precision, n.bitWidth);
    }
    case "date": {
      const n = e7.type;
      return new Ws(Ye[n.unit]);
    }
    case "time": {
      const n = e7.type;
      return new Vs(Q[n.unit], n.bitWidth);
    }
    case "timestamp": {
      const n = e7.type;
      return new Gs(Q[n.unit], n.timezone);
    }
    case "interval": {
      const n = e7.type;
      return new qs(Ar[n.unit]);
    }
    case "duration": {
      const n = e7.type;
      return new Hs(Q[n.unit]);
    }
    case "union": {
      const n = e7.type, [i, ...a] = (n.mode + "").toLowerCase(), o = i.toUpperCase() + a.join("");
      return new Ys(pe[o], n.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const n = e7.type;
      return new Xs(n.byteWidth);
    }
    case "fixedsizelist": {
      const n = e7.type;
      return new Js(n.listSize, (t || [])[0]);
    }
    case "map": {
      const n = e7.type;
      return new Qs((t || [])[0], n.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${r}"`);
}
var Fx = ob, Ux = Di;
class ve {
  static fromJSON(t, r) {
    const n = new ve(0, Ht.V5, r);
    return n._createHeader = zx(t, r), n;
  }
  static decode(t) {
    t = new Ux(vt(t));
    const r = Zr.getRootAsMessage(t), n = r.bodyLength(), i = r.version(), a = r.headerType(), o = new ve(n, i, a);
    return o._createHeader = Wx(r, a), o;
  }
  static encode(t) {
    const r = new Fx();
    let n = -1;
    return t.isSchema() ? n = At.encode(r, t.header()) : t.isRecordBatch() ? n = Re.encode(r, t.header()) : t.isDictionaryBatch() && (n = Pr.encode(r, t.header())), Zr.startMessage(r), Zr.addVersion(r, Ht.V5), Zr.addHeader(r, n), Zr.addHeaderType(r, t.headerType), Zr.addBodyLength(r, BigInt(t.bodyLength)), Zr.finishMessageBuffer(r, Zr.endMessage(r)), r.asUint8Array();
  }
  static from(t, r = 0) {
    if (t instanceof At) return new ve(0, Ht.V5, _t.Schema, t);
    if (t instanceof Re) return new ve(r, Ht.V5, _t.RecordBatch, t);
    if (t instanceof Pr) return new ve(r, Ht.V5, _t.DictionaryBatch, t);
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
    this._version = r, this._headerType = n, this.body = new Uint8Array(0), i && (this._createHeader = () => i), this._bodyLength = Mt(t);
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
    this._nodes = r, this._buffers = n, this._length = Mt(t);
  }
}
class Pr {
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
    this._data = t, this._isDelta = n, this._id = Mt(r);
  }
}
class gr {
  constructor(t, r) {
    this.offset = Mt(t), this.length = Mt(r);
  }
}
class pn {
  constructor(t, r) {
    this.length = Mt(t), this.nullCount = Mt(r);
  }
}
function zx(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.fromJSON(e7);
      case _t.RecordBatch:
        return Re.fromJSON(e7);
      case _t.DictionaryBatch:
        return Pr.fromJSON(e7);
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
function Wx(e7, t) {
  return () => {
    switch (t) {
      case _t.Schema:
        return At.decode(e7.header(new hr()), /* @__PURE__ */ new Map(), e7.version());
      case _t.RecordBatch:
        return Re.decode(e7.header(new Dr()), e7.version());
      case _t.DictionaryBatch:
        return Pr.decode(e7.header(new ui()), e7.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${_t[t]}, type: ${t} }`);
  };
}
Ft.encode = tA;
Ft.decode = Qx;
Ft.fromJSON = Lx;
At.encode = Zx;
At.decode = Vx;
At.fromJSON = jx;
Re.encode = eA;
Re.decode = Gx;
Re.fromJSON = z0;
Pr.encode = rA;
Pr.decode = qx;
Pr.fromJSON = Bx;
pn.encode = nA;
pn.decode = Kx;
gr.encode = iA;
gr.decode = Hx;
function Vx(e7, t = /* @__PURE__ */ new Map(), r = Ht.V5) {
  const n = Jx(e7, t);
  return new At(n, $s(e7), t, r);
}
function Gx(e7, t = Ht.V5) {
  if (e7.compression() !== null) throw new Error("Record batch compression not implemented");
  return new Re(e7.length(), Yx(e7), Xx(e7, t));
}
function qx(e7, t = Ht.V5) {
  return new Pr(Re.decode(e7.data(), t), e7.id(), e7.isDelta());
}
function Hx(e7) {
  return new gr(e7.offset(), e7.length());
}
function Kx(e7) {
  return new pn(e7.length(), e7.nullCount());
}
function Yx(e7) {
  const t = [];
  for (let r, n = -1, i = -1, a = e7.nodesLength(); ++n < a; ) (r = e7.nodes(n)) && (t[++i] = pn.decode(r));
  return t;
}
function Xx(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.buffersLength(); ++i < o; ) (n = e7.buffers(i)) && (t < Ht.V4 && (n.bb_pos += 8 * (i + 1)), r[++a] = gr.decode(n));
  return r;
}
function Jx(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.fieldsLength(); ++i < o; ) (n = e7.fields(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function Xp(e7, t) {
  const r = [];
  for (let n, i = -1, a = -1, o = e7.childrenLength(); ++i < o; ) (n = e7.children(i)) && (r[++a] = Ft.decode(n, t));
  return r;
}
function Qx(e7, t) {
  let r, n, i, a, o, s;
  return !t || !(s = e7.dictionary()) ? (i = Qp(e7, Xp(e7, t)), n = new Ft(e7.name(), i, e7.nullable(), $s(e7))) : t.has(r = Mt(s.id())) ? (a = (a = s.indexType()) ? Jp(a) : new no(), o = new Ni(t.get(r), a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), $s(e7))) : (a = (a = s.indexType()) ? Jp(a) : new no(), t.set(r, i = Qp(e7, Xp(e7, t))), o = new Ni(i, a, r, s.isOrdered()), n = new Ft(e7.name(), o, e7.nullable(), $s(e7))), n || null;
}
function $s(e7) {
  const t = /* @__PURE__ */ new Map();
  if (e7) for (let r, n, i = -1, a = Math.trunc(e7.customMetadataLength()); ++i < a; ) (r = e7.customMetadata(i)) && (n = r.key()) != null && t.set(n, r.value());
  return t;
}
function Jp(e7) {
  return new Wn(e7.isSigned(), e7.bitWidth());
}
function Qp(e7, t) {
  const r = e7.typeType();
  switch (r) {
    case Ct.NONE:
      return new fn();
    case Ct.Null:
      return new fn();
    case Ct.Binary:
      return new Rs();
    case Ct.LargeBinary:
      return new ks();
    case Ct.Utf8:
      return new Ls();
    case Ct.LargeUtf8:
      return new Fs();
    case Ct.Bool:
      return new Us();
    case Ct.List:
      return new Ks((t || [])[0]);
    case Ct.Struct_:
      return new me(t || []);
  }
  switch (r) {
    case Ct.Int: {
      const n = e7.type(new je());
      return new Wn(n.isSigned(), n.bitWidth());
    }
    case Ct.FloatingPoint: {
      const n = e7.type(new yr());
      return new Bs(n.precision());
    }
    case Ct.Decimal: {
      const n = e7.type(new fi());
      return new zs(n.scale(), n.precision(), n.bitWidth());
    }
    case Ct.Date: {
      const n = e7.type(new Ss());
      return new Ws(n.unit());
    }
    case Ct.Time: {
      const n = e7.type(new Ve());
      return new Vs(n.unit(), n.bitWidth());
    }
    case Ct.Timestamp: {
      const n = e7.type(new Ge());
      return new Gs(n.unit(), n.timezone());
    }
    case Ct.Interval: {
      const n = e7.type(new mr());
      return new qs(n.unit());
    }
    case Ct.Duration: {
      const n = e7.type(new Os());
      return new Hs(n.unit());
    }
    case Ct.Union: {
      const n = e7.type(new Oe());
      return new Ys(n.mode(), n.typeIdsArray() || [], t || []);
    }
    case Ct.FixedSizeBinary: {
      const n = e7.type(new xs());
      return new Xs(n.byteWidth());
    }
    case Ct.FixedSizeList: {
      const n = e7.type(new As());
      return new Js(n.listSize(), (t || [])[0]);
    }
    case Ct.Map: {
      const n = e7.type(new Ps());
      return new Qs((t || [])[0], n.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Ct[r]}" (${r})`);
}
function Zx(e7, t) {
  const r = t.fields.map((a) => Ft.encode(e7, a));
  hr.startFieldsVector(e7, r.length);
  const n = hr.createFieldsVector(e7, r), i = t.metadata && t.metadata.size > 0 ? hr.createCustomMetadataVector(e7, [...t.metadata].map(([a, o]) => {
    const s = e7.createString(`${a}`), c = e7.createString(`${o}`);
    return re.startKeyValue(e7), re.addKey(e7, s), re.addValue(e7, c), re.endKeyValue(e7);
  })) : -1;
  return hr.startSchema(e7), hr.addFields(e7, n), hr.addEndianness(e7, aA ? Mi.Little : Mi.Big), i !== -1 && hr.addCustomMetadata(e7, i), hr.endSchema(e7);
}
function tA(e7, t) {
  let r = -1, n = -1, i = -1;
  const a = t.type;
  let o = t.typeId;
  q.isDictionary(a) ? (o = a.dictionary.typeId, i = pl.visit(a, e7), n = pl.visit(a.dictionary, e7)) : n = pl.visit(a, e7);
  const s = (a.children || []).map((l) => Ft.encode(e7, l)), c = Ue.createChildrenVector(e7, s), u = t.metadata && t.metadata.size > 0 ? Ue.createCustomMetadataVector(e7, [...t.metadata].map(([l, f]) => {
    const h = e7.createString(`${l}`), d = e7.createString(`${f}`);
    return re.startKeyValue(e7), re.addKey(e7, h), re.addValue(e7, d), re.endKeyValue(e7);
  })) : -1;
  return t.name && (r = e7.createString(t.name)), Ue.startField(e7), Ue.addType(e7, n), Ue.addTypeType(e7, o), Ue.addChildren(e7, c), Ue.addNullable(e7, !!t.nullable), r !== -1 && Ue.addName(e7, r), i !== -1 && Ue.addDictionary(e7, i), u !== -1 && Ue.addCustomMetadata(e7, u), Ue.endField(e7);
}
function eA(e7, t) {
  const r = t.nodes || [], n = t.buffers || [];
  Dr.startNodesVector(e7, r.length);
  for (const o of r.slice().reverse()) pn.encode(e7, o);
  const i = e7.endVector();
  Dr.startBuffersVector(e7, n.length);
  for (const o of n.slice().reverse()) gr.encode(e7, o);
  const a = e7.endVector();
  return Dr.startRecordBatch(e7), Dr.addLength(e7, BigInt(t.length)), Dr.addNodes(e7, i), Dr.addBuffers(e7, a), Dr.endRecordBatch(e7);
}
function rA(e7, t) {
  const r = Re.encode(e7, t.data);
  return ui.startDictionaryBatch(e7), ui.addId(e7, BigInt(t.id)), ui.addIsDelta(e7, t.isDelta), ui.addData(e7, r), ui.endDictionaryBatch(e7);
}
function nA(e7, t) {
  return ub.createFieldNode(e7, BigInt(t.length), BigInt(t.nullCount));
}
function iA(e7, t) {
  return cb.createBuffer(e7, BigInt(t.offset), BigInt(t.length));
}
const aA = (() => {
  const e7 = new ArrayBuffer(2);
  return new DataView(e7).setInt16(0, 256, true), new Int16Array(e7)[0] === 256;
})(), ld = (e7) => `Expected ${_t[e7]} Message in stream, but was null or length 0.`, fd = (e7) => `Header pointer of flatbuffer-encoded ${_t[e7]} Message is null or length 0.`, G0 = (e7, t) => `Expected to read ${e7} metadata bytes, but only read ${t}.`, q0 = (e7, t) => `Expected to read ${e7} bytes for message body, but only read ${t}.`;
class H0 {
  constructor(t) {
    this.source = t instanceof ic ? t : new ic(t);
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
    if (t != null && r.value.headerType !== t) throw new Error(ld(t));
    return r.value;
  }
  readMessageBody(t) {
    if (t <= 0) return new Uint8Array(0);
    const r = vt(this.source.read(t));
    if (r.byteLength < t) throw new Error(q0(t, r.byteLength));
    return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
  }
  readSchema(t = false) {
    const r = _t.Schema, n = this.readMessage(r), i = n == null ? void 0 : n.header();
    if (t && !i) throw new Error(fd(r));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(mu), r = t && new Di(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
    return { done: n === 0, value: n };
  }
  readMetadata(t) {
    const r = this.source.read(t);
    if (!r) return zt;
    if (r.byteLength < t) throw new Error(G0(t, r.byteLength));
    return { done: false, value: ve.decode(r) };
  }
}
class oA {
  constructor(t, r) {
    this.source = t instanceof Ci ? t : tb(t) ? new ac(t, r) : new Ci(t);
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
      if (t != null && r.value.headerType !== t) throw new Error(ld(t));
      return r.value;
    });
  }
  readMessageBody(t) {
    return ot(this, void 0, void 0, function* () {
      if (t <= 0) return new Uint8Array(0);
      const r = vt(yield this.source.read(t));
      if (r.byteLength < t) throw new Error(q0(t, r.byteLength));
      return r.byteOffset % 8 === 0 && r.byteOffset + r.byteLength <= r.buffer.byteLength ? r : r.slice();
    });
  }
  readSchema() {
    return ot(this, arguments, void 0, function* (t = false) {
      const r = _t.Schema, n = yield this.readMessage(r), i = n == null ? void 0 : n.header();
      if (t && !i) throw new Error(fd(r));
      return i;
    });
  }
  readMetadataLength() {
    return ot(this, void 0, void 0, function* () {
      const t = yield this.source.read(mu), r = t && new Di(t), n = (r == null ? void 0 : r.readInt32(0)) || 0;
      return { done: n === 0, value: n };
    });
  }
  readMetadata(t) {
    return ot(this, void 0, void 0, function* () {
      const r = yield this.source.read(t);
      if (!r) return zt;
      if (r.byteLength < t) throw new Error(G0(t, r.byteLength));
      return { done: false, value: ve.decode(r) };
    });
  }
}
class sA extends H0 {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = false, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Vp ? t : new Vp(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema) return this._schema = true, { done: false, value: ve.fromJSON(t.schema, _t.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const r = t.dictionaries[this._dictionaryIndex++];
      return this._body = r.data.columns, { done: false, value: ve.fromJSON(r, _t.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const r = t.batches[this._batchIndex++];
      return this._body = r.columns, { done: false, value: ve.fromJSON(r, _t.RecordBatch) };
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
    if (t != null && r.value.headerType !== t) throw new Error(ld(t));
    return r.value;
  }
  readSchema() {
    const t = _t.Schema, r = this.readMessage(t), n = r == null ? void 0 : r.header();
    if (!r || !n) throw new Error(fd(t));
    return n;
  }
}
const mu = 4, hf = "ARROW1", ao = new Uint8Array(hf.length);
for (let e7 = 0; e7 < hf.length; e7 += 1) ao[e7] = hf.codePointAt(e7);
function hd(e7, t = 0) {
  for (let r = -1, n = ao.length; ++r < n; ) if (ao[r] !== e7[t + r]) return false;
  return true;
}
const Yo = ao.length, K0 = Yo + mu, cA = Yo * 2 + mu;
class He extends id {
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
    return zn(r) ? r.then(() => this) : this;
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
    return We.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return We.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
  }
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  static from(t) {
    return t instanceof He ? t : ef(t) ? hA(t) : tb(t) ? yA(t) : zn(t) ? ot(this, void 0, void 0, function* () {
      return yield He.from(yield t);
    }) : eb(t) || Hh(t) || rb(t) || ua(t) ? pA(new Ci(t)) : dA(new ic(t));
  }
  static readAll(t) {
    return t instanceof He ? t.isSync() ? Zp(t) : ty(t) : ef(t) || ArrayBuffer.isView(t) || Go(t) || Zg(t) ? Zp(t) : ty(t);
  }
}
class oc extends He {
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
    return vr(this, arguments, function* () {
      yield pt(yield* ws(Bn(this[Symbol.iterator]())));
    });
  }
}
class sc extends He {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return ot(this, void 0, void 0, function* () {
      var t, r, n, i;
      const a = new Array();
      try {
        for (var o = true, s = Bn(this), c; c = yield s.next(), t = c.done, !t; o = true) {
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
class Y0 extends oc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class uA extends sc {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class X0 {
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
    const n = this._loadVectors(t, r, this.schema.fields), i = dt({ type: new me(this.schema.fields), length: t.length, children: n });
    return new xe(this.schema, i);
  }
  _loadDictionaryBatch(t, r) {
    const { id: n, isDelta: i } = t, { dictionaries: a, schema: o } = this, s = a.get(n), c = o.dictionaries.get(n), u = this._loadVectors(t.data, r, [c]);
    return (s && i ? s.concat(new xt(u)) : new xt(u)).memoize();
  }
  _loadVectors(t, r, n) {
    return new k0(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
class cc extends X0 {
  constructor(t, r) {
    super(r), this._reader = ef(t) ? new sA(this._handle = t) : new H0(this._handle = t);
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
    return this.closed || (this.autoDestroy = Q0(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
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
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new ud(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class uc extends X0 {
  constructor(t, r) {
    super(r), this._reader = new oA(this._handle = t);
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
      return this.closed || (this.autoDestroy = Q0(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
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
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: false, value: new ud(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return ot(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class J0 extends cc {
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
    super(t instanceof Gp ? t : new Gp(t), r);
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
    const { _handle: t } = this, r = t.size - K0, n = t.readInt32(r), i = t.readAt(r - n, n);
    return io.decode(i);
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
class lA extends uc {
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
    super(t instanceof ac ? t : new ac(t, n), i);
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
      const r = t.size - K0, n = yield t.readInt32(r), i = yield t.readAt(r - n, n);
      return io.decode(i);
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
class fA extends cc {
  constructor(t, r) {
    super(t, r);
  }
  _loadVectors(t, r, n) {
    return new xx(r, t.nodes, t.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(n);
  }
}
function Q0(e7, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e7.autoDestroy;
}
function* Zp(e7) {
  const t = He.from(e7);
  try {
    if (!t.open({ autoDestroy: false }).closed) do
      yield t;
    while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function ty(e7) {
  return vr(this, arguments, function* () {
    const r = yield pt(He.from(e7));
    try {
      if (!(yield pt(r.open({ autoDestroy: false }))).closed) do
        yield yield pt(r);
      while (!(yield pt(r.reset().open())).closed);
    } finally {
      yield pt(r.cancel());
    }
  });
}
function hA(e7) {
  return new oc(new fA(e7));
}
function dA(e7) {
  const t = e7.peek(Yo + 7 & -8);
  return t && t.byteLength >= 4 ? hd(t) ? new Y0(new J0(e7.read())) : new oc(new cc(e7)) : new oc(new cc(function* () {
  }()));
}
function pA(e7) {
  return ot(this, void 0, void 0, function* () {
    const t = yield e7.peek(Yo + 7 & -8);
    return t && t.byteLength >= 4 ? hd(t) ? new Y0(new J0(yield e7.read())) : new sc(new uc(e7)) : new sc(new uc(function() {
      return vr(this, arguments, function* () {
      });
    }()));
  });
}
function yA(e7) {
  return ot(this, void 0, void 0, function* () {
    const { size: t } = yield e7.stat(), r = new ac(e7, t);
    return t >= cA && hd(yield r.readAt(0, Yo + 7 & -8)) ? new uA(new lA(r)) : new sc(new uc(r));
  });
}
class Wt extends ht {
  static assemble(...t) {
    const r = (i) => i.flatMap((a) => Array.isArray(a) ? r(a) : a instanceof xe ? a.data.children : a.data), n = new Wt();
    return n.visitMany(r(t)), n;
  }
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  visit(t) {
    if (t instanceof xt) return this.visitMany(t.data), this;
    const { type: r } = t;
    if (!q.isDictionary(r)) {
      const { length: n } = t;
      if (n > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      if (q.isUnion(r)) this.nodes.push(new pn(n, 0));
      else {
        const { nullCount: i } = t;
        q.isNull(r) || sr.call(this, i <= 0 ? new Uint8Array(0) : Zs(t.offset, n, t.nullBitmap)), this.nodes.push(new pn(n, i));
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
function sr(e7) {
  const t = e7.byteLength + 7 & -8;
  return this.buffers.push(e7), this.bufferRegions.push(new gr(this._byteLength, t)), this._byteLength += t, this;
}
function mA(e7) {
  var t;
  const { type: r, length: n, typeIds: i, valueOffsets: a } = e7;
  if (sr.call(this, i), r.mode === pe.Sparse) return df.call(this, e7);
  if (r.mode === pe.Dense) {
    if (e7.offset <= 0) return sr.call(this, a), df.call(this, e7);
    {
      const o = new Int32Array(n), s = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ Object.create(null);
      for (let u, l, f = -1; ++f < n; ) (u = i[f]) !== void 0 && ((l = s[u]) === void 0 && (l = s[u] = a[f]), o[f] = a[f] - l, c[u] = ((t = c[u]) !== null && t !== void 0 ? t : 0) + 1);
      sr.call(this, o), this.visitMany(e7.children.map((u, l) => {
        const f = r.typeIds[l], h = s[f], d = c[f];
        return u.slice(h, Math.min(n, d));
      }));
    }
  }
  return this;
}
function vA(e7) {
  let t;
  return e7.nullCount >= e7.length ? sr.call(this, new Uint8Array(0)) : (t = e7.values) instanceof Uint8Array ? sr.call(this, Zs(e7.offset, e7.length, t)) : sr.call(this, tc(e7.values));
}
function Kr(e7) {
  return sr.call(this, e7.values.subarray(0, e7.length * e7.stride));
}
function vu(e7) {
  const { length: t, values: r, valueOffsets: n } = e7, i = Mt(n[0]), a = Mt(n[t]), o = Math.min(a - i, r.byteLength - i);
  return sr.call(this, ib(-i, t + 1, n)), sr.call(this, r.subarray(i, i + o)), this;
}
function dd(e7) {
  const { length: t, valueOffsets: r } = e7;
  if (r) {
    const { [0]: n, [t]: i } = r;
    return sr.call(this, ib(-n, t + 1, r)), this.visit(e7.children[0].slice(n, i - n));
  }
  return this.visit(e7.children[0]);
}
function df(e7) {
  return this.visitMany(e7.type.children.map((t, r) => e7.children[r]).filter(Boolean))[0];
}
Wt.prototype.visitBool = vA;
Wt.prototype.visitInt = Kr;
Wt.prototype.visitFloat = Kr;
Wt.prototype.visitUtf8 = vu;
Wt.prototype.visitLargeUtf8 = vu;
Wt.prototype.visitBinary = vu;
Wt.prototype.visitLargeBinary = vu;
Wt.prototype.visitFixedSizeBinary = Kr;
Wt.prototype.visitDate = Kr;
Wt.prototype.visitTimestamp = Kr;
Wt.prototype.visitTime = Kr;
Wt.prototype.visitDecimal = Kr;
Wt.prototype.visitList = dd;
Wt.prototype.visitStruct = df;
Wt.prototype.visitUnion = mA;
Wt.prototype.visitInterval = Kr;
Wt.prototype.visitDuration = Kr;
Wt.prototype.visitFixedSizeList = dd;
Wt.prototype.visitMap = dd;
class Z0 extends id {
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  static throughDOM(t, r) {
    throw new Error('"throughDOM" not available in this environment');
  }
  constructor(t) {
    super(), this._position = 0, this._started = false, this._sink = new Is(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Te(t) || (t = { autoDestroy: true, writeLegacyIpcFormat: false }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : true, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : false;
  }
  toString(t = false) {
    return this._sink.toString(t);
  }
  toUint8Array(t = false) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return zn(t) ? t.then((r) => this.writeAll(r)) : ua(t) ? vd(this, t) : md(this, t);
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
    return t === this._sink || t instanceof Is ? this._sink = t : (this._sink = new Is(), t && KO(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && YO(t) && this.toNodeStream({ objectMode: false }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = false, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._seenDictionaries = /* @__PURE__ */ new Map(), this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!r || !ff(r, this._schema)) && (r == null ? (this._position = 0, this._schema = null) : (this._started = true, this._schema = r, this._writeSchema(r))), this;
  }
  write(t) {
    let r = null;
    if (this._sink) {
      if (t == null) return this.finish() && void 0;
      if (t instanceof ye && !(r = t.schema)) return this.finish() && void 0;
      if (t instanceof xe && !(r = t.schema)) return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (r && !ff(r, this._schema)) {
      if (this._started && this._autoDestroy) return this.close();
      this.reset(this._sink, r);
    }
    t instanceof xe ? t instanceof ud || this._writeRecordBatch(t) : t instanceof ye ? this.writeAll(t.batches) : Go(t) && this.writeAll(t);
  }
  _writeMessage(t, r = 8) {
    const n = r - 1, i = ve.encode(t), a = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, s = a + o + n & ~n, c = s - a - o;
    return t.headerType === _t.RecordBatch ? this._recordBatchBlocks.push(new hn(s, t.bodyLength, this._position)) : t.headerType === _t.DictionaryBatch && this._dictionaryBlocks.push(new hn(s, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(s - o)), a > 0 && this._write(i), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const r = vt(t);
      r && r.byteLength > 0 && (this._sink.write(r), this._position += r.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(ve.from(t));
  }
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(ao);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: r, nodes: n, bufferRegions: i, buffers: a } = Wt.assemble(t), o = new Re(t.numRows, n, i), s = ve.from(o, r);
    return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(a);
  }
  _writeDictionaryBatch(t, r, n = false) {
    const { byteLength: i, nodes: a, bufferRegions: o, buffers: s } = Wt.assemble(new xt([t])), c = new Re(t.length, a, o), u = new Pr(c, r, n), l = ve.from(u, i);
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
class pd extends Z0 {
  static writeAll(t, r) {
    const n = new pd(r);
    return zn(t) ? t.then((i) => n.writeAll(i)) : ua(t) ? vd(n, t) : md(n, t);
  }
}
class yd extends Z0 {
  static writeAll(t) {
    const r = new yd();
    return zn(t) ? t.then((n) => r.writeAll(n)) : ua(t) ? vd(r, t) : md(r, t);
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
    const r = io.encode(new io(t, Ht.V5, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(r)._write(Int32Array.of(r.byteLength))._writeMagic();
  }
}
function md(e7, t) {
  let r = t;
  t instanceof ye && (r = t.batches, e7.reset(void 0, t.schema));
  for (const n of r) e7.write(n);
  return e7.finish();
}
function vd(e7, t) {
  return ot(this, void 0, void 0, function* () {
    var r, n, i, a, o, s, c;
    try {
      for (r = true, n = Bn(t); i = yield n.next(), a = i.done, !a; r = true) {
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
function gA(e7, t = "stream") {
  return (t === "stream" ? pd : yd).writeAll(e7).toUint8Array(true);
}
var bA = Object.create, t_ = Object.defineProperty, _A = Object.getOwnPropertyDescriptor, wA = Object.getOwnPropertyNames, SA = Object.getPrototypeOf, OA = Object.prototype.hasOwnProperty, xA = (e7, t) => () => (t || e7((t = { exports: {} }).exports, t), t.exports), AA = (e7, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of wA(t)) !OA.call(e7, i) && i !== r && t_(e7, i, { get: () => t[i], enumerable: !(n = _A(t, i)) || n.enumerable });
  return e7;
}, PA = (e7, t, r) => (r = e7 != null ? bA(SA(e7)) : {}, AA(!e7 || !e7.__esModule ? t_(r, "default", { value: e7, enumerable: true }) : r, e7)), TA = xA((e7, t) => {
  t.exports = Worker;
}), IA = ((e7) => (e7[e7.UNDEFINED = 0] = "UNDEFINED", e7[e7.AUTOMATIC = 1] = "AUTOMATIC", e7[e7.READ_ONLY = 2] = "READ_ONLY", e7[e7.READ_WRITE = 3] = "READ_WRITE", e7))(IA || {}), EA = ((e7) => (e7[e7.IDENTIFIER = 0] = "IDENTIFIER", e7[e7.NUMERIC_CONSTANT = 1] = "NUMERIC_CONSTANT", e7[e7.STRING_CONSTANT = 2] = "STRING_CONSTANT", e7[e7.OPERATOR = 3] = "OPERATOR", e7[e7.KEYWORD = 4] = "KEYWORD", e7[e7.COMMENT = 5] = "COMMENT", e7))(EA || {}), $A = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.DEBUG = 1] = "DEBUG", e7[e7.INFO = 2] = "INFO", e7[e7.WARNING = 3] = "WARNING", e7[e7.ERROR = 4] = "ERROR", e7))($A || {}), DA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.CONNECT = 1] = "CONNECT", e7[e7.DISCONNECT = 2] = "DISCONNECT", e7[e7.OPEN = 3] = "OPEN", e7[e7.QUERY = 4] = "QUERY", e7[e7.INSTANTIATE = 5] = "INSTANTIATE", e7))(DA || {}), MA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.OK = 1] = "OK", e7[e7.ERROR = 2] = "ERROR", e7[e7.START = 3] = "START", e7[e7.RUN = 4] = "RUN", e7[e7.CAPTURE = 5] = "CAPTURE", e7))(MA || {}), NA = ((e7) => (e7[e7.NONE = 0] = "NONE", e7[e7.WEB_WORKER = 1] = "WEB_WORKER", e7[e7.NODE_WORKER = 2] = "NODE_WORKER", e7[e7.BINDINGS = 3] = "BINDINGS", e7[e7.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB", e7))(NA || {}), CA = class {
  constructor(e7 = 2) {
    this.level = e7;
  }
  log(e7) {
    e7.level >= this.level && console.log(e7);
  }
}, jA = ((e7) => (e7[e7.SUCCESS = 0] = "SUCCESS", e7[e7.MAX_ARROW_ERROR = 255] = "MAX_ARROW_ERROR", e7[e7.DUCKDB_WASM_RETRY = 256] = "DUCKDB_WASM_RETRY", e7))(jA || {}), BA = class {
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
    let t = await this._bindings.runQuery(this._conn, e7), r = He.from(t);
    return console.assert(r.isSync(), "Reader is not sync"), console.assert(r.isFile(), "Reader is not file"), new ye(r);
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
    let n = new e_(this._bindings, this._conn, r), i = await He.from(n);
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
    return new RA(this._bindings, this._conn, t);
  }
  async insertArrowTable(e7, t) {
    let r = gA(e7, "stream");
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
}, e_ = class {
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
}, RA = class {
  constructor(t, r, n) {
    this.bindings = t, this.connectionId = r, this.statementId = n;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...t) {
    let r = await this.bindings.runPrepared(this.connectionId, this.statementId, t), n = He.from(r);
    return console.assert(n.isSync()), console.assert(n.isFile()), new ye(n);
  }
  async send(...t) {
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, t), n = new e_(this.bindings, this.connectionId, r), i = await He.from(n);
    return console.assert(i.isAsync()), console.assert(i.isStream()), i;
  }
}, kA = ((e7) => (e7.CANCEL_PENDING_QUERY = "CANCEL_PENDING_QUERY", e7.CLOSE_PREPARED = "CLOSE_PREPARED", e7.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", e7.REGISTER_OPFS_FILE_NAME = "REGISTER_OPFS_FILE_NAME", e7.CONNECT = "CONNECT", e7.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", e7.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", e7.CREATE_PREPARED = "CREATE_PREPARED", e7.DISCONNECT = "DISCONNECT", e7.DROP_FILE = "DROP_FILE", e7.DROP_FILES = "DROP_FILES", e7.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", e7.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", e7.FLUSH_FILES = "FLUSH_FILES", e7.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", e7.GET_TABLE_NAMES = "GET_TABLE_NAMES", e7.GET_VERSION = "GET_VERSION", e7.GLOB_FILE_INFOS = "GLOB_FILE_INFOS", e7.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", e7.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", e7.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", e7.INSTANTIATE = "INSTANTIATE", e7.OPEN = "OPEN", e7.PING = "PING", e7.POLL_PENDING_QUERY = "POLL_PENDING_QUERY", e7.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", e7.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", e7.REGISTER_FILE_URL = "REGISTER_FILE_URL", e7.RESET = "RESET", e7.RUN_PREPARED = "RUN_PREPARED", e7.RUN_QUERY = "RUN_QUERY", e7.SEND_PREPARED = "SEND_PREPARED", e7.START_PENDING_QUERY = "START_PENDING_QUERY", e7.TOKENIZE = "TOKENIZE", e7))(kA || {}), LA = ((e7) => (e7.CONNECTION_INFO = "CONNECTION_INFO", e7.ERROR = "ERROR", e7.FEATURE_FLAGS = "FEATURE_FLAGS", e7.FILE_BUFFER = "FILE_BUFFER", e7.FILE_INFOS = "FILE_INFOS", e7.FILE_SIZE = "FILE_SIZE", e7.FILE_STATISTICS = "FILE_STATISTICS", e7.INSTANTIATE_PROGRESS = "INSTANTIATE_PROGRESS", e7.LOG = "LOG", e7.PROGRESS_UPDATE = "PROGRESS_UPDATE", e7.OK = "OK", e7.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", e7.QUERY_PLAN = "QUERY_PLAN", e7.QUERY_RESULT = "QUERY_RESULT", e7.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", e7.QUERY_RESULT_HEADER = "QUERY_RESULT_HEADER", e7.QUERY_RESULT_HEADER_OR_NULL = "QUERY_RESULT_HEADER_OR_NULL", e7.REGISTERED_FILE = "REGISTERED_FILE", e7.SCRIPT_TOKENS = "SCRIPT_TOKENS", e7.SUCCESS = "SUCCESS", e7.TABLE_NAMES = "TABLE_NAMES", e7.VERSION_STRING = "VERSION_STRING", e7))(LA || {}), gt = class {
  constructor(t, r) {
    this.promiseResolver = () => {
    }, this.promiseRejecter = () => {
    }, this.type = t, this.data = r, this.promise = new Promise((n, i) => {
      this.promiseResolver = n, this.promiseRejecter = i;
    });
  }
};
function Ds(e7) {
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
      return { sqlType: "list", valueType: Ds(e7.valueType) };
    case x.FixedSizeBinary:
      return { sqlType: "fixedsizebinary", byteWidth: e7.byteWidth };
    case x.Null:
      return { sqlType: "null" };
    case x.Utf8:
      return { sqlType: "utf8" };
    case x.Struct:
      return { sqlType: "struct", fields: e7.children.map((t) => pf(t.name, t.type)) };
    case x.Map: {
      let t = e7;
      return { sqlType: "map", keyType: Ds(t.keyType), valueType: Ds(t.valueType) };
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
function pf(e7, t) {
  let r = Ds(t);
  return r.name = e7, r;
}
var FA = /'(opfs:\/\/\S*?)'/g, UA = /(opfs:\/\/\S*?)/g;
function zA(e7) {
  return e7.search(UA) > -1;
}
function WA(e7) {
  return [...e7.matchAll(FA)].map((t) => t[1]);
}
var VA = new TextEncoder(), GA = class {
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
    return new BA(this, t);
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
    let n = VA.encode(r);
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
        a.push(pf(o, s));
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
        a.push(pf(o, s));
      }
      n.columnsFlat = a, delete n.columns;
    }
    let i = new gt("IMPORT_JSON_FROM_PATH", [t, r, n]);
    await this.postTask(i);
  }
  shouldOPFSFileHandling() {
    var t, r;
    return zA((t = this.config.path) != null ? t : "") ? ((r = this.config.opfs) == null ? void 0 : r.fileHandling) == "auto" : false;
  }
  async registerOPFSFileFromSQL(t) {
    let r = WA(t), n = [];
    for (let i of r) try {
      await this.registerOPFSFileName(i), n.push(i);
    } catch (a) {
      throw console.error(a), new Error("File Not found:" + i);
    }
    return n;
  }
};
function qA() {
  let e7 = new TextDecoder();
  return (t) => (typeof SharedArrayBuffer < "u" && t.buffer instanceof SharedArrayBuffer && (t = new Uint8Array(t)), e7.decode(t));
}
qA();
var HA = ((e7) => (e7[e7.BUFFER = 0] = "BUFFER", e7[e7.NODE_FS = 1] = "NODE_FS", e7[e7.BROWSER_FILEREADER = 2] = "BROWSER_FILEREADER", e7[e7.BROWSER_FSACCESS = 3] = "BROWSER_FSACCESS", e7[e7.HTTP = 4] = "HTTP", e7[e7.S3 = 5] = "S3", e7))(HA || {}), KA = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), YA = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), XA = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), JA = () => (async (e7) => {
  try {
    return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e7);
  } catch {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), QA = { version: "1.32.0" }, gd = QA.version.split(".");
gd[0];
gd[1];
gd[2];
var ZA = () => typeof navigator > "u", yl = null, ml = null, vl = null, gl = null, bl = null;
async function tP() {
  return yl == null && (yl = typeof BigInt64Array < "u"), ml == null && (ml = await YA()), vl == null && (vl = await JA()), gl == null && (gl = await XA()), bl == null && (bl = await KA()), { bigInt64Array: yl, crossOriginIsolated: ZA() || globalThis.crossOriginIsolated || false, wasmExceptions: ml, wasmSIMD: gl, wasmThreads: vl, wasmBulkMemory: bl };
}
async function eP(e7) {
  let t = await tP();
  if (t.wasmExceptions) {
    if (t.wasmSIMD && t.wasmThreads && t.crossOriginIsolated && e7.coi) return { mainModule: e7.coi.mainModule, mainWorker: e7.coi.mainWorker, pthreadWorker: e7.coi.pthreadWorker };
    if (e7.eh) return { mainModule: e7.eh.mainModule, mainWorker: e7.eh.mainWorker, pthreadWorker: null };
  }
  return { mainModule: e7.mvp.mainModule, mainWorker: e7.mvp.mainWorker, pthreadWorker: null };
}
PA(TA());
const rP = "/assets/duckdb-mvp-BP0pRkMH.wasm", nP = "/assets/duckdb-browser-mvp.worker-C9hF7LGh.js", iP = "/assets/duckdb-eh-9ubY-jlA.wasm", aP = "/assets/duckdb-browser-eh.worker-hQa-dcAV.js", oP = { mvp: { mainModule: rP, mainWorker: nP }, eh: { mainModule: iP, mainWorker: aP } }, Ms = "mmg";
let _l = null, wl = null, Sl = Promise.resolve(), yf = null;
async function r_() {
  return _l || (_l = (async () => {
    const e7 = await eP(oP), t = new Worker(e7.mainWorker), r = new CA(), n = new GA(r, t);
    return await n.instantiate(e7.mainModule, e7.pthreadWorker), n;
  })()), _l;
}
async function n_() {
  return wl || (wl = await (await r_()).connect()), wl;
}
async function sP(e7) {
  return (await e7.query(`SELECT 1 FROM duckdb_databases() WHERE database_name = '${Ms}' LIMIT 1`)).toArray().length > 0;
}
async function cP(e7, t) {
  if (t && yf === t) return;
  const r = await r_(), n = await n_();
  await r.registerFileBuffer(Tp, new Uint8Array(e7)), await sP(n) && await n.query(`DETACH ${Ms}`), await n.query(`ATTACH '${Tp}' AS ${Ms} (READ_ONLY)`), await n.query(`USE ${Ms}`), yf = t;
}
async function ey(e7, t) {
  const r = t ?? null;
  if (!(r && yf === r)) return Sl = Sl.then(() => cP(e7, r)), Sl;
}
async function Bi(e7) {
  return (await (await n_()).query(e7)).toArray();
}
const i_ = { day: "day", week: "week", month: "month", quarter: "quarter", year: "year" };
async function qK() {
  return Bi(`
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
  `);
}
async function HK(e7) {
  const t = e7.replace(/'/g, "''"), r = await Bi(`SELECT * FROM guide_economics WHERE method_id = '${t}' LIMIT 1`);
  if (!r.length) return null;
  const n = r[0], i = await Bi(`SELECT io_type, wiki_slug, item_name, qty_per_completion, gp_per_completion
     FROM guide_lines WHERE method_id = '${t}'`), a = (o) => ({ itemName: o.item_name, wikiSlug: o.wiki_slug, qtyPerCompletion: o.qty_per_completion, gpPerCompletion: o.gp_per_completion ?? 0 });
  return { id: n.method_id, methodName: n.method_name, methodUrl: n.method_url, defaultKph: n.default_kph ?? 1, kphUnitName: n.completions_unit_name || "Completions per hour", assumptionText: n.assumption_text ?? "", inputTotalPk: n.input_total_pk ?? 0, inputTotalPh: n.input_total_ph ?? 0, outputTotalPk: n.output_total_pk ?? 0, outputTotalPh: n.output_total_ph ?? 0, inputs: i.filter((o) => o.io_type === "input").map(a), outputs: i.filter((o) => o.io_type === "output").map(a) };
}
async function uP(e7, t) {
  const r = i_[t], n = e7.replace(/'/g, "''"), i = await Bi(`
    SELECT
      date_trunc('${r}', scrape_timestamp) AS period,
      avg(hourly_profit_gp) AS mean_profit,
      median(hourly_profit_gp) AS median_profit,
      quantile_cont(hourly_profit_gp, 0.25) AS p25,
      quantile_cont(hourly_profit_gp, 0.75) AS p75
    FROM snapshots
    WHERE method_id = '${n}' AND hourly_profit_gp IS NOT NULL
    GROUP BY 1
    ORDER BY 1
    `), a = await Bi(`
    SELECT date_trunc('${r}', s.scrape_timestamp) AS period,
           sum(pm.value) AS item_volume
    FROM snapshots s
    JOIN io_lines io ON io.method_id = s.method_id
    JOIN price_metrics pm ON pm.item_id = io.item_id
      AND pm.metric = 'volume'
      AND date_trunc('day', pm.scrape_timestamp) = date_trunc('day', s.scrape_timestamp)
    WHERE s.method_id = '${n}'
    GROUP BY 1
    ORDER BY 1
    `), o = new Map(a.map((s) => [String(s.period), s.item_volume ?? 0]));
  return i.map((s) => ({ period: String(s.period), mean_profit: s.mean_profit ?? 0, median_profit: s.median_profit ?? 0, p25: s.p25 ?? 0, p75: s.p75 ?? 0, item_volume: o.get(String(s.period)) ?? null }));
}
async function lP(e7, t) {
  if (!e7.length) return [];
  const r = i_[t], n = e7.map((i) => `'${i.replace(/'/g, "''")}'`).join(", ");
  return Bi(`
    SELECT s.method_id, m.method_name,
           date_trunc('${r}', s.scrape_timestamp) AS period,
           avg(s.hourly_profit_gp) AS profit
    FROM snapshots s
    JOIN methods m ON m.method_id = s.method_id
    WHERE s.method_id IN (${n}) AND s.hourly_profit_gp IS NOT NULL
    GROUP BY 1, 2, 3
    ORDER BY 3, 4 DESC
    `);
}
const a_ = "osrs-mmg-kph-v1";
function gu() {
  const e7 = localStorage.getItem(a_);
  if (!e7) return {};
  try {
    return JSON.parse(e7).kph_by_method_id ?? {};
  } catch {
    return {};
  }
}
function o_(e7) {
  const t = { version: 1, updated_at: (/* @__PURE__ */ new Date()).toISOString(), kph_by_method_id: e7 };
  localStorage.setItem(a_, JSON.stringify(t));
}
function KK(e7, t) {
  const n = gu()[e7];
  return n !== void 0 && Number.isFinite(n) ? n : t;
}
function YK(e7, t) {
  const r = gu();
  r[e7] = t, o_(r);
}
function XK() {
  return { version: 1, updated_at: (/* @__PURE__ */ new Date()).toISOString(), kph_by_method_id: gu() };
}
function JK(e7, t = "import_wins") {
  if (e7.version !== 1 || typeof e7.kph_by_method_id != "object") throw new Error("Invalid kph backup file");
  const r = gu(), n = t === "import_wins" ? { ...r, ...e7.kph_by_method_id } : { ...e7.kph_by_method_id, ...r };
  return o_(n), n;
}
function ry(e7, t) {
  return { ...e7, qtyPerHour: e7.qtyPerCompletion * t, gpPerHour: e7.gpPerCompletion * t };
}
function QK(e7, t) {
  return { kph: t, inputs: e7.inputs.map((r) => ry(r, t)), outputs: e7.outputs.map((r) => ry(r, t)), inputTotal: e7.inputTotalPk * t + e7.inputTotalPh, outputTotal: e7.outputTotalPk * t + e7.outputTotalPh, profit: (e7.outputTotalPk - e7.inputTotalPk) * t + (e7.outputTotalPh - e7.inputTotalPh) };
}
function ny(e7) {
  return `${Math.round(e7).toLocaleString("en-GB")} gp`;
}
function ZK(e7) {
  const t = Math.abs(e7);
  return t >= 100 ? Math.round(e7).toLocaleString("en-GB") : t >= 1 ? e7.toFixed(2) : t >= 0.01 ? e7.toFixed(4) : e7.toPrecision(3);
}
function tY({ loading: e7, error: t, manifest: r, fromCache: n, localMode: i = false, onReload: a }) {
  return e7 ? yt.jsx("p", { className: "osrs-mmg__banner osrs-mmg__banner--loading", children: "Loading OSRS data\u2026" }) : t ? yt.jsxs("p", { className: "osrs-mmg__banner osrs-mmg__banner--error", children: [t, " ", yt.jsx("button", { type: "button", onClick: a, children: "Retry" })] }) : r ? yt.jsxs("p", { className: "osrs-mmg__banner", children: ["Data from ", r.generated_at, r.latest_snapshot_date ? ` \xB7 snapshot ${r.latest_snapshot_date}` : "", n ? " \xB7 cached" : " \xB7 fresh download", " \xB7 ", yt.jsx("button", { type: "button", onClick: a, children: "Refresh" })] }) : i ? yt.jsxs("p", { className: "osrs-mmg__banner", children: ["Local DuckDB", " \xB7 ", yt.jsx("button", { type: "button", onClick: a, children: "Reload" })] }) : null;
}
var fP = Array.isArray, Ee = fP, hP = typeof ns == "object" && ns && ns.Object === Object && ns, s_ = hP, dP = s_, pP = typeof self == "object" && self && self.Object === Object && self, yP = dP || pP || Function("return this")(), Ir = yP, mP = Ir, vP = mP.Symbol, Xo = vP, iy = Xo, c_ = Object.prototype, gP = c_.hasOwnProperty, bP = c_.toString, Ta = iy ? iy.toStringTag : void 0;
function _P(e7) {
  var t = gP.call(e7, Ta), r = e7[Ta];
  try {
    e7[Ta] = void 0;
    var n = true;
  } catch {
  }
  var i = bP.call(e7);
  return n && (t ? e7[Ta] = r : delete e7[Ta]), i;
}
var wP = _P, SP = Object.prototype, OP = SP.toString;
function xP(e7) {
  return OP.call(e7);
}
var AP = xP, ay = Xo, PP = wP, TP = AP, IP = "[object Null]", EP = "[object Undefined]", oy = ay ? ay.toStringTag : void 0;
function $P(e7) {
  return e7 == null ? e7 === void 0 ? EP : IP : oy && oy in Object(e7) ? PP(e7) : TP(e7);
}
var Yr = $P;
function DP(e7) {
  return e7 != null && typeof e7 == "object";
}
var Xr = DP, MP = Yr, NP = Xr, CP = "[object Symbol]";
function jP(e7) {
  return typeof e7 == "symbol" || NP(e7) && MP(e7) == CP;
}
var fa = jP, BP = Ee, RP = fa, kP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, LP = /^\w*$/;
function FP(e7, t) {
  if (BP(e7)) return false;
  var r = typeof e7;
  return r == "number" || r == "symbol" || r == "boolean" || e7 == null || RP(e7) ? true : LP.test(e7) || !kP.test(e7) || t != null && e7 in Object(t);
}
var bd = FP;
function UP(e7) {
  var t = typeof e7;
  return e7 != null && (t == "object" || t == "function");
}
var mn = UP;
const ha = Bt(mn);
var zP = Yr, WP = mn, VP = "[object AsyncFunction]", GP = "[object Function]", qP = "[object GeneratorFunction]", HP = "[object Proxy]";
function KP(e7) {
  if (!WP(e7)) return false;
  var t = zP(e7);
  return t == GP || t == qP || t == VP || t == HP;
}
var _d = KP;
const ut = Bt(_d);
var YP = Ir, XP = YP["__core-js_shared__"], JP = XP, Ol = JP, sy = function() {
  var e7 = /[^.]+$/.exec(Ol && Ol.keys && Ol.keys.IE_PROTO || "");
  return e7 ? "Symbol(src)_1." + e7 : "";
}();
function QP(e7) {
  return !!sy && sy in e7;
}
var ZP = QP, tT = Function.prototype, eT = tT.toString;
function rT(e7) {
  if (e7 != null) {
    try {
      return eT.call(e7);
    } catch {
    }
    try {
      return e7 + "";
    } catch {
    }
  }
  return "";
}
var u_ = rT, nT = _d, iT = ZP, aT = mn, oT = u_, sT = /[\\^$.*+?()[\]{}|]/g, cT = /^\[object .+?Constructor\]$/, uT = Function.prototype, lT = Object.prototype, fT = uT.toString, hT = lT.hasOwnProperty, dT = RegExp("^" + fT.call(hT).replace(sT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function pT(e7) {
  if (!aT(e7) || iT(e7)) return false;
  var t = nT(e7) ? dT : cT;
  return t.test(oT(e7));
}
var yT = pT;
function mT(e7, t) {
  return e7 == null ? void 0 : e7[t];
}
var vT = mT, gT = yT, bT = vT;
function _T(e7, t) {
  var r = bT(e7, t);
  return gT(r) ? r : void 0;
}
var Jn = _T, wT = Jn, ST = wT(Object, "create"), bu = ST, cy = bu;
function OT() {
  this.__data__ = cy ? cy(null) : {}, this.size = 0;
}
var xT = OT;
function AT(e7) {
  var t = this.has(e7) && delete this.__data__[e7];
  return this.size -= t ? 1 : 0, t;
}
var PT = AT, TT = bu, IT = "__lodash_hash_undefined__", ET = Object.prototype, $T = ET.hasOwnProperty;
function DT(e7) {
  var t = this.__data__;
  if (TT) {
    var r = t[e7];
    return r === IT ? void 0 : r;
  }
  return $T.call(t, e7) ? t[e7] : void 0;
}
var MT = DT, NT = bu, CT = Object.prototype, jT = CT.hasOwnProperty;
function BT(e7) {
  var t = this.__data__;
  return NT ? t[e7] !== void 0 : jT.call(t, e7);
}
var RT = BT, kT = bu, LT = "__lodash_hash_undefined__";
function FT(e7, t) {
  var r = this.__data__;
  return this.size += this.has(e7) ? 0 : 1, r[e7] = kT && t === void 0 ? LT : t, this;
}
var UT = FT, zT = xT, WT = PT, VT = MT, GT = RT, qT = UT;
function da(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
da.prototype.clear = zT;
da.prototype.delete = WT;
da.prototype.get = VT;
da.prototype.has = GT;
da.prototype.set = qT;
var HT = da;
function KT() {
  this.__data__ = [], this.size = 0;
}
var YT = KT;
function XT(e7, t) {
  return e7 === t || e7 !== e7 && t !== t;
}
var wd = XT, JT = wd;
function QT(e7, t) {
  for (var r = e7.length; r--; ) if (JT(e7[r][0], t)) return r;
  return -1;
}
var _u = QT, ZT = _u, tI = Array.prototype, eI = tI.splice;
function rI(e7) {
  var t = this.__data__, r = ZT(t, e7);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : eI.call(t, r, 1), --this.size, true;
}
var nI = rI, iI = _u;
function aI(e7) {
  var t = this.__data__, r = iI(t, e7);
  return r < 0 ? void 0 : t[r][1];
}
var oI = aI, sI = _u;
function cI(e7) {
  return sI(this.__data__, e7) > -1;
}
var uI = cI, lI = _u;
function fI(e7, t) {
  var r = this.__data__, n = lI(r, e7);
  return n < 0 ? (++this.size, r.push([e7, t])) : r[n][1] = t, this;
}
var hI = fI, dI = YT, pI = nI, yI = oI, mI = uI, vI = hI;
function pa(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
pa.prototype.clear = dI;
pa.prototype.delete = pI;
pa.prototype.get = yI;
pa.prototype.has = mI;
pa.prototype.set = vI;
var wu = pa, gI = Jn, bI = Ir, _I = gI(bI, "Map"), Sd = _I, uy = HT, wI = wu, SI = Sd;
function OI() {
  this.size = 0, this.__data__ = { hash: new uy(), map: new (SI || wI)(), string: new uy() };
}
var xI = OI;
function AI(e7) {
  var t = typeof e7;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e7 !== "__proto__" : e7 === null;
}
var PI = AI, TI = PI;
function II(e7, t) {
  var r = e7.__data__;
  return TI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Su = II, EI = Su;
function $I(e7) {
  var t = EI(this, e7).delete(e7);
  return this.size -= t ? 1 : 0, t;
}
var DI = $I, MI = Su;
function NI(e7) {
  return MI(this, e7).get(e7);
}
var CI = NI, jI = Su;
function BI(e7) {
  return jI(this, e7).has(e7);
}
var RI = BI, kI = Su;
function LI(e7, t) {
  var r = kI(this, e7), n = r.size;
  return r.set(e7, t), this.size += r.size == n ? 0 : 1, this;
}
var FI = LI, UI = xI, zI = DI, WI = CI, VI = RI, GI = FI;
function ya(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.clear(); ++t < r; ) {
    var n = e7[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = UI;
ya.prototype.delete = zI;
ya.prototype.get = WI;
ya.prototype.has = VI;
ya.prototype.set = GI;
var Od = ya, l_ = Od, qI = "Expected a function";
function xd(e7, t) {
  if (typeof e7 != "function" || t != null && typeof t != "function") throw new TypeError(qI);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e7.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (xd.Cache || l_)(), r;
}
xd.Cache = l_;
var f_ = xd;
const HI = Bt(f_);
var KI = f_, YI = 500;
function XI(e7) {
  var t = KI(e7, function(n) {
    return r.size === YI && r.clear(), n;
  }), r = t.cache;
  return t;
}
var JI = XI, QI = JI, ZI = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tE = /\\(\\)?/g, eE = QI(function(e7) {
  var t = [];
  return e7.charCodeAt(0) === 46 && t.push(""), e7.replace(ZI, function(r, n, i, a) {
    t.push(i ? a.replace(tE, "$1") : n || r);
  }), t;
}), rE = eE;
function nE(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = Array(n); ++r < n; ) i[r] = t(e7[r], r, e7);
  return i;
}
var Ad = nE, ly = Xo, iE = Ad, aE = Ee, oE = fa, fy = ly ? ly.prototype : void 0, hy = fy ? fy.toString : void 0;
function h_(e7) {
  if (typeof e7 == "string") return e7;
  if (aE(e7)) return iE(e7, h_) + "";
  if (oE(e7)) return hy ? hy.call(e7) : "";
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var sE = h_, cE = sE;
function uE(e7) {
  return e7 == null ? "" : cE(e7);
}
var d_ = uE, lE = Ee, fE = bd, hE = rE, dE = d_;
function pE(e7, t) {
  return lE(e7) ? e7 : fE(e7, t) ? [e7] : hE(dE(e7));
}
var p_ = pE, yE = fa;
function mE(e7) {
  if (typeof e7 == "string" || yE(e7)) return e7;
  var t = e7 + "";
  return t == "0" && 1 / e7 == -1 / 0 ? "-0" : t;
}
var Ou = mE, vE = p_, gE = Ou;
function bE(e7, t) {
  t = vE(t, e7);
  for (var r = 0, n = t.length; e7 != null && r < n; ) e7 = e7[gE(t[r++])];
  return r && r == n ? e7 : void 0;
}
var Pd = bE, _E = Pd;
function wE(e7, t, r) {
  var n = e7 == null ? void 0 : _E(e7, t);
  return n === void 0 ? r : n;
}
var y_ = wE;
const Ke = Bt(y_);
function SE(e7) {
  return e7 == null;
}
var OE = SE;
const st = Bt(OE);
var xE = Yr, AE = Ee, PE = Xr, TE = "[object String]";
function IE(e7) {
  return typeof e7 == "string" || !AE(e7) && PE(e7) && xE(e7) == TE;
}
var EE = IE;
const Vn = Bt(EE);
var m_ = { exports: {} }, $t = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Td = Symbol.for("react.element"), Id = Symbol.for("react.portal"), xu = Symbol.for("react.fragment"), Au = Symbol.for("react.strict_mode"), Pu = Symbol.for("react.profiler"), Tu = Symbol.for("react.provider"), Iu = Symbol.for("react.context"), $E = Symbol.for("react.server_context"), Eu = Symbol.for("react.forward_ref"), $u = Symbol.for("react.suspense"), Du = Symbol.for("react.suspense_list"), Mu = Symbol.for("react.memo"), Nu = Symbol.for("react.lazy"), DE = Symbol.for("react.offscreen"), v_;
v_ = Symbol.for("react.module.reference");
function Qe(e7) {
  if (typeof e7 == "object" && e7 !== null) {
    var t = e7.$$typeof;
    switch (t) {
      case Td:
        switch (e7 = e7.type, e7) {
          case xu:
          case Pu:
          case Au:
          case $u:
          case Du:
            return e7;
          default:
            switch (e7 = e7 && e7.$$typeof, e7) {
              case $E:
              case Iu:
              case Eu:
              case Nu:
              case Mu:
              case Tu:
                return e7;
              default:
                return t;
            }
        }
      case Id:
        return t;
    }
  }
}
$t.ContextConsumer = Iu;
$t.ContextProvider = Tu;
$t.Element = Td;
$t.ForwardRef = Eu;
$t.Fragment = xu;
$t.Lazy = Nu;
$t.Memo = Mu;
$t.Portal = Id;
$t.Profiler = Pu;
$t.StrictMode = Au;
$t.Suspense = $u;
$t.SuspenseList = Du;
$t.isAsyncMode = function() {
  return false;
};
$t.isConcurrentMode = function() {
  return false;
};
$t.isContextConsumer = function(e7) {
  return Qe(e7) === Iu;
};
$t.isContextProvider = function(e7) {
  return Qe(e7) === Tu;
};
$t.isElement = function(e7) {
  return typeof e7 == "object" && e7 !== null && e7.$$typeof === Td;
};
$t.isForwardRef = function(e7) {
  return Qe(e7) === Eu;
};
$t.isFragment = function(e7) {
  return Qe(e7) === xu;
};
$t.isLazy = function(e7) {
  return Qe(e7) === Nu;
};
$t.isMemo = function(e7) {
  return Qe(e7) === Mu;
};
$t.isPortal = function(e7) {
  return Qe(e7) === Id;
};
$t.isProfiler = function(e7) {
  return Qe(e7) === Pu;
};
$t.isStrictMode = function(e7) {
  return Qe(e7) === Au;
};
$t.isSuspense = function(e7) {
  return Qe(e7) === $u;
};
$t.isSuspenseList = function(e7) {
  return Qe(e7) === Du;
};
$t.isValidElementType = function(e7) {
  return typeof e7 == "string" || typeof e7 == "function" || e7 === xu || e7 === Pu || e7 === Au || e7 === $u || e7 === Du || e7 === DE || typeof e7 == "object" && e7 !== null && (e7.$$typeof === Nu || e7.$$typeof === Mu || e7.$$typeof === Tu || e7.$$typeof === Iu || e7.$$typeof === Eu || e7.$$typeof === v_ || e7.getModuleId !== void 0);
};
$t.typeOf = Qe;
m_.exports = $t;
var ME = m_.exports, NE = Yr, CE = Xr, jE = "[object Number]";
function BE(e7) {
  return typeof e7 == "number" || CE(e7) && NE(e7) == jE;
}
var g_ = BE;
const RE = Bt(g_);
var kE = g_;
function LE(e7) {
  return kE(e7) && e7 != +e7;
}
var FE = LE;
const ma = Bt(FE);
var or = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Dn = function(t) {
  return Vn(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return RE(t) && !ma(t);
}, UE = function(t) {
  return st(t);
}, ne = function(t) {
  return L(t) || Vn(t);
}, zE = 0, Qn = function(t) {
  var r = ++zE;
  return "".concat(t || "").concat(r);
}, Gn = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!L(t) && !Vn(t)) return n;
  var a;
  if (Dn(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return ma(a) && (a = n), i && a > r && (a = r), a;
}, on = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, WE = function(t) {
  if (!Array.isArray(t)) return false;
  for (var r = t.length, n = {}, i = 0; i < r; i++) if (!n[t[i]]) n[t[i]] = true;
  else return true;
  return false;
}, qt = function(t, r) {
  return L(t) && L(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function lc(e7, t, r) {
  return !e7 || !e7.length ? null : e7.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ke(n, t)) === r;
  });
}
var VE = function(t) {
  if (!t || !t.length) return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++) u = t[f].cx || 0, l = t[f].cy || 0, n += u, i += l, a += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return { xmin: s, xmax: c, a: h, b: (i - h * n) / r };
}, GE = function(t, r) {
  return L(t) && L(r) ? t - r : Vn(t) && Vn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Ti(e7, t) {
  for (var r in e7) if ({}.hasOwnProperty.call(e7, r) && (!{}.hasOwnProperty.call(t, r) || e7[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e7, n)) return false;
  return true;
}
function mf(e7) {
  "@babel/helpers - typeof";
  return mf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mf(e7);
}
var qE = ["viewBox", "children"], HE = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], dy = ["points", "pathLength"], xl = { svg: qE, polygon: dy, polyline: dy }, Ed = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], fc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (B.isValidElement(t) && (n = t.props), !ha(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Ed.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, KE = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, oo = function(t, r, n) {
  if (!ha(t) || mf(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Ed.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = KE(o, r, n));
  }), i;
}, YE = ["children"], XE = ["children"];
function py(e7, t) {
  if (e7 == null) return {};
  var r = JE(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function JE(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function vf(e7) {
  "@babel/helpers - typeof";
  return vf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vf(e7);
}
var yy = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, Lr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, my = null, Al = null, $d = function e(t) {
  if (t === my && Array.isArray(Al)) return Al;
  var r = [];
  return B.Children.forEach(t, function(n) {
    st(n) || (ME.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Al = r, my = t, r;
};
function Pe(e7, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Lr(i);
  }) : n = [Lr(t)], $d(e7).forEach(function(i) {
    var a = Ke(i, "type.displayName") || Ke(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Ce(e7, t) {
  var r = Pe(e7, t);
  return r && r[0];
}
var vy = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, QE = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], ZE = function(t) {
  return t && t.type && Vn(t.type) && QE.indexOf(t.type) >= 0;
}, b_ = function(t) {
  return t && vf(t) === "object" && "clipDot" in t;
}, t$ = function(t, r, n, i) {
  var a, o = (a = xl == null ? void 0 : xl[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !ut(t) && (i && o.includes(r) || HE.includes(r)) || n && Ed.includes(r);
}, ct = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (B.isValidElement(t) && (i = t.props), !ha(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    t$((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, gf = function e2(t, r) {
  if (t === r) return true;
  var n = B.Children.count(t);
  if (n !== B.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return gy(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!gy(a, o)) return false;
  }
  return true;
}, gy = function(t, r) {
  if (st(t) && st(r)) return true;
  if (!st(t) && !st(r)) {
    var n = t.props || {}, i = n.children, a = py(n, YE), o = r.props || {}, s = o.children, c = py(o, XE);
    return i && s ? Ti(a, c) && gf(i, s) : !i && !s ? Ti(a, c) : false;
  }
  return false;
}, by = function(t, r) {
  var n = [], i = {};
  return $d(t).forEach(function(a, o) {
    if (ZE(a)) n.push(a);
    else if (a) {
      var s = Lr(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = true;
      }
    }
  }), n;
}, e$ = function(t) {
  var r = t && t.type;
  return r && yy[r] ? yy[r] : null;
}, r$ = function(t, r) {
  return $d(r).indexOf(t);
}, n$ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, bf.apply(this, arguments);
}
function i$(e7, t) {
  if (e7 == null) return {};
  var r = a$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function a$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function _f(e7) {
  var t = e7.children, r = e7.width, n = e7.height, i = e7.viewBox, a = e7.className, o = e7.style, s = e7.title, c = e7.desc, u = i$(e7, n$), l = i || { width: r, height: n, x: 0, y: 0 }, f = mt("recharts-surface", a);
  return A.createElement("svg", bf({}, ct(u, true, "svg"), { className: f, width: r, height: n, style: o, viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height) }), A.createElement("title", null, s), A.createElement("desc", null, c), t);
}
var o$ = ["children", "className"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, wf.apply(this, arguments);
}
function s$(e7, t) {
  if (e7 == null) return {};
  var r = c$(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function c$(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var St = A.forwardRef(function(e7, t) {
  var r = e7.children, n = e7.className, i = s$(e7, o$), a = mt("recharts-layer", n);
  return A.createElement("g", wf({ className: a }, ct(i, true), { ref: t }), r);
}), Fr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function u$(e7, t, r) {
  var n = -1, i = e7.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e7[n + t];
  return a;
}
var l$ = u$, f$ = l$;
function h$(e7, t, r) {
  var n = e7.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e7 : f$(e7, t, r);
}
var d$ = h$, p$ = "\\ud800-\\udfff", y$ = "\\u0300-\\u036f", m$ = "\\ufe20-\\ufe2f", v$ = "\\u20d0-\\u20ff", g$ = y$ + m$ + v$, b$ = "\\ufe0e\\ufe0f", _$ = "\\u200d", w$ = RegExp("[" + _$ + p$ + g$ + b$ + "]");
function S$(e7) {
  return w$.test(e7);
}
var __ = S$;
function O$(e7) {
  return e7.split("");
}
var x$ = O$, w_ = "\\ud800-\\udfff", A$ = "\\u0300-\\u036f", P$ = "\\ufe20-\\ufe2f", T$ = "\\u20d0-\\u20ff", I$ = A$ + P$ + T$, E$ = "\\ufe0e\\ufe0f", $$ = "[" + w_ + "]", Sf = "[" + I$ + "]", Of = "\\ud83c[\\udffb-\\udfff]", D$ = "(?:" + Sf + "|" + Of + ")", S_ = "[^" + w_ + "]", O_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", x_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", M$ = "\\u200d", A_ = D$ + "?", P_ = "[" + E$ + "]?", N$ = "(?:" + M$ + "(?:" + [S_, O_, x_].join("|") + ")" + P_ + A_ + ")*", C$ = P_ + A_ + N$, j$ = "(?:" + [S_ + Sf + "?", Sf, O_, x_, $$].join("|") + ")", B$ = RegExp(Of + "(?=" + Of + ")|" + j$ + C$, "g");
function R$(e7) {
  return e7.match(B$) || [];
}
var k$ = R$, L$ = x$, F$ = __, U$ = k$;
function z$(e7) {
  return F$(e7) ? U$(e7) : L$(e7);
}
var W$ = z$, V$ = d$, G$ = __, q$ = W$, H$ = d_;
function K$(e7) {
  return function(t) {
    t = H$(t);
    var r = G$(t) ? q$(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? V$(r, 1).join("") : t.slice(1);
    return n[e7]() + i;
  };
}
var Y$ = K$, X$ = Y$, J$ = X$("toUpperCase"), Q$ = J$;
const Cu = Bt(Q$);
function jt(e7) {
  return function() {
    return e7;
  };
}
const T_ = Math.cos, hc = Math.sin, lr = Math.sqrt, dc = Math.PI, ju = 2 * dc, xf = Math.PI, Af = 2 * xf, Tn = 1e-6, Z$ = Af - Tn;
function I_(e7) {
  this._ += e7[0];
  for (let t = 1, r = e7.length; t < r; ++t) this._ += arguments[t] + e7[t];
}
function tD(e7) {
  let t = Math.floor(e7);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e7}`);
  if (t > 15) return I_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class eD {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? I_ : tD(t);
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
    else if (h > Tn) if (!(Math.abs(f * c - u * l) > Tn) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, y = i - s, m = c * c + u * u, p = d * d + y * y, g = Math.sqrt(m), _ = Math.sqrt(h), w = a * Math.tan((xf - Math.acos((m + h - p) / (2 * g * _))) / 2), S = w / _, v = w / g;
      Math.abs(S - 1) > Tn && this._append`L${t + S * l},${r + S * f}`, this._append`A${a},${a},0,0,${+(f * d > l * y)},${this._x1 = t + v * c},${this._y1 = r + v * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Tn || Math.abs(this._y1 - l) > Tn) && this._append`L${u},${l}`, n && (h < 0 && (h = h % Af + Af), h > Z$ ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > Tn && this._append`A${n},${n},0,${+(h >= xf)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Dd(e7) {
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
  }, () => new eD(t);
}
function Md(e7) {
  return typeof e7 == "object" && "length" in e7 ? e7 : Array.from(e7);
}
function E_(e7) {
  this._context = e7;
}
E_.prototype = { areaStart: function() {
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
function Bu(e7) {
  return new E_(e7);
}
function $_(e7) {
  return e7[0];
}
function D_(e7) {
  return e7[1];
}
function M_(e7, t) {
  var r = jt(true), n = null, i = Bu, a = null, o = Dd(s);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? $_ : jt(e7), t = typeof t == "function" ? t : t === void 0 ? D_ : jt(t);
  function s(c) {
    var u, l = (c = Md(c)).length, f, h = false, d;
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
function ss(e7, t, r) {
  var n = null, i = jt(true), a = null, o = Bu, s = null, c = Dd(u);
  e7 = typeof e7 == "function" ? e7 : e7 === void 0 ? $_ : jt(+e7), t = typeof t == "function" ? t : jt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? D_ : jt(+r);
  function u(f) {
    var h, d, y, m = (f = Md(f)).length, p, g = false, _, w = new Array(m), S = new Array(m);
    for (a == null && (s = o(_ = c())), h = 0; h <= m; ++h) {
      if (!(h < m && i(p = f[h], h, f)) === g) if (g = !g) d = h, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y) s.point(w[y], S[y]);
        s.lineEnd(), s.areaEnd();
      }
      g && (w[h] = +e7(p, h, f), S[h] = +t(p, h, f), s.point(n ? +n(p, h, f) : w[h], r ? +r(p, h, f) : S[h]));
    }
    if (_) return s = null, _ + "" || null;
  }
  function l() {
    return M_().defined(i).curve(o).context(a);
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
class N_ {
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
function rD(e7) {
  return new N_(e7, true);
}
function nD(e7) {
  return new N_(e7, false);
}
const Nd = { draw(e7, t) {
  const r = lr(t / dc);
  e7.moveTo(r, 0), e7.arc(0, 0, r, 0, ju);
} }, iD = { draw(e7, t) {
  const r = lr(t / 5) / 2;
  e7.moveTo(-3 * r, -r), e7.lineTo(-r, -r), e7.lineTo(-r, -3 * r), e7.lineTo(r, -3 * r), e7.lineTo(r, -r), e7.lineTo(3 * r, -r), e7.lineTo(3 * r, r), e7.lineTo(r, r), e7.lineTo(r, 3 * r), e7.lineTo(-r, 3 * r), e7.lineTo(-r, r), e7.lineTo(-3 * r, r), e7.closePath();
} }, C_ = lr(1 / 3), aD = C_ * 2, oD = { draw(e7, t) {
  const r = lr(t / aD), n = r * C_;
  e7.moveTo(0, -r), e7.lineTo(n, 0), e7.lineTo(0, r), e7.lineTo(-n, 0), e7.closePath();
} }, sD = { draw(e7, t) {
  const r = lr(t), n = -r / 2;
  e7.rect(n, n, r, r);
} }, cD = 0.8908130915292852, j_ = hc(dc / 10) / hc(7 * dc / 10), uD = hc(ju / 10) * j_, lD = -T_(ju / 10) * j_, fD = { draw(e7, t) {
  const r = lr(t * cD), n = uD * r, i = lD * r;
  e7.moveTo(0, -r), e7.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = ju * a / 5, s = T_(o), c = hc(o);
    e7.lineTo(c * r, -s * r), e7.lineTo(s * n - c * i, c * n + s * i);
  }
  e7.closePath();
} }, Pl = lr(3), hD = { draw(e7, t) {
  const r = -lr(t / (Pl * 3));
  e7.moveTo(0, r * 2), e7.lineTo(-Pl * r, -r), e7.lineTo(Pl * r, -r), e7.closePath();
} }, ke = -0.5, Le = lr(3) / 2, Pf = 1 / lr(12), dD = (Pf / 2 + 1) * 3, pD = { draw(e7, t) {
  const r = lr(t / dD), n = r / 2, i = r * Pf, a = n, o = r * Pf + r, s = -a, c = o;
  e7.moveTo(n, i), e7.lineTo(a, o), e7.lineTo(s, c), e7.lineTo(ke * n - Le * i, Le * n + ke * i), e7.lineTo(ke * a - Le * o, Le * a + ke * o), e7.lineTo(ke * s - Le * c, Le * s + ke * c), e7.lineTo(ke * n + Le * i, ke * i - Le * n), e7.lineTo(ke * a + Le * o, ke * o - Le * a), e7.lineTo(ke * s + Le * c, ke * c - Le * s), e7.closePath();
} };
function yD(e7, t) {
  let r = null, n = Dd(i);
  e7 = typeof e7 == "function" ? e7 : jt(e7 || Nd), t = typeof t == "function" ? t : jt(t === void 0 ? 64 : +t);
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
function pc() {
}
function yc(e7, t, r) {
  e7._context.bezierCurveTo((2 * e7._x0 + e7._x1) / 3, (2 * e7._y0 + e7._y1) / 3, (e7._x0 + 2 * e7._x1) / 3, (e7._y0 + 2 * e7._y1) / 3, (e7._x0 + 4 * e7._x1 + t) / 6, (e7._y0 + 4 * e7._y1 + r) / 6);
}
function B_(e7) {
  this._context = e7;
}
B_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      yc(this, this._x1, this._y1);
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
      yc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function mD(e7) {
  return new B_(e7);
}
function R_(e7) {
  this._context = e7;
}
R_.prototype = { areaStart: pc, areaEnd: pc, lineStart: function() {
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
      yc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function vD(e7) {
  return new R_(e7);
}
function k_(e7) {
  this._context = e7;
}
k_.prototype = { areaStart: function() {
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
      yc(this, e7, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t;
} };
function gD(e7) {
  return new k_(e7);
}
function L_(e7) {
  this._context = e7;
}
L_.prototype = { areaStart: pc, areaEnd: pc, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e7, t) {
  e7 = +e7, t = +t, this._point ? this._context.lineTo(e7, t) : (this._point = 1, this._context.moveTo(e7, t));
} };
function bD(e7) {
  return new L_(e7);
}
function _y(e7) {
  return e7 < 0 ? -1 : 1;
}
function wy(e7, t, r) {
  var n = e7._x1 - e7._x0, i = t - e7._x1, a = (e7._y1 - e7._y0) / (n || i < 0 && -0), o = (r - e7._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (_y(a) + _y(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Sy(e7, t) {
  var r = e7._x1 - e7._x0;
  return r ? (3 * (e7._y1 - e7._y0) / r - t) / 2 : t;
}
function Tl(e7, t, r) {
  var n = e7._x0, i = e7._y0, a = e7._x1, o = e7._y1, s = (a - n) / 3;
  e7._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function mc(e7) {
  this._context = e7;
}
mc.prototype = { areaStart: function() {
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
      Tl(this, this._t0, Sy(this, this._t0));
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
        this._point = 3, Tl(this, Sy(this, r = wy(this, e7, t)), r);
        break;
      default:
        Tl(this, this._t0, r = wy(this, e7, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e7, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function F_(e7) {
  this._context = new U_(e7);
}
(F_.prototype = Object.create(mc.prototype)).point = function(e7, t) {
  mc.prototype.point.call(this, t, e7);
};
function U_(e7) {
  this._context = e7;
}
U_.prototype = { moveTo: function(e7, t) {
  this._context.moveTo(t, e7);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e7, t) {
  this._context.lineTo(t, e7);
}, bezierCurveTo: function(e7, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e7, n, r, a, i);
} };
function _D(e7) {
  return new mc(e7);
}
function wD(e7) {
  return new F_(e7);
}
function z_(e7) {
  this._context = e7;
}
z_.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e7 = this._x, t = this._y, r = e7.length;
  if (r) if (this._line ? this._context.lineTo(e7[0], t[0]) : this._context.moveTo(e7[0], t[0]), r === 2) this._context.lineTo(e7[1], t[1]);
  else for (var n = Oy(e7), i = Oy(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e7[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e7, t) {
  this._x.push(+e7), this._y.push(+t);
} };
function Oy(e7) {
  var t, r = e7.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e7[0] + 2 * e7[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e7[t] + 2 * e7[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e7[r - 1] + e7[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e7[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e7[t + 1] - i[t + 1];
  return [i, a];
}
function SD(e7) {
  return new z_(e7);
}
function Ru(e7, t) {
  this._context = e7, this._t = t;
}
Ru.prototype = { areaStart: function() {
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
function OD(e7) {
  return new Ru(e7, 0.5);
}
function xD(e7) {
  return new Ru(e7, 0);
}
function AD(e7) {
  return new Ru(e7, 1);
}
function Ri(e7, t) {
  if ((o = e7.length) > 1) for (var r = 1, n, i, a = e7[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e7[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Tf(e7) {
  for (var t = e7.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function PD(e7, t) {
  return e7[t];
}
function TD(e7) {
  const t = [];
  return t.key = e7, t;
}
function ID() {
  var e7 = jt([]), t = Tf, r = Ri, n = PD;
  function i(a) {
    var o = Array.from(e7.apply(this, arguments), TD), s, c = o.length, u = -1, l;
    for (const f of a) for (s = 0, ++u; s < c; ++s) (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = Md(t(o)); s < c; ++s) o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e7 = typeof a == "function" ? a : jt(Array.from(a)), i) : e7;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : jt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Tf : typeof a == "function" ? a : jt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Ri, i) : r;
  }, i;
}
function ED(e7, t) {
  if ((n = e7.length) > 0) {
    for (var r, n, i = 0, a = e7[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e7[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e7[r][i][1] /= o;
    }
    Ri(e7, t);
  }
}
function $D(e7, t) {
  if ((i = e7.length) > 0) {
    for (var r = 0, n = e7[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e7[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Ri(e7, t);
  }
}
function DD(e7, t) {
  if (!(!((o = e7.length) > 0) || !((a = (i = e7[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e7[t[s]], f = l[n][1] || 0, h = l[n - 1][1] || 0, d = (f - h) / 2, y = 0; y < s; ++y) {
          var m = e7[t[y]], p = m[n][1] || 0, g = m[n - 1][1] || 0;
          d += p - g;
        }
        c += f, u += d * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= u / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, Ri(e7, t);
  }
}
function so(e7) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e7);
}
var MD = ["type", "size", "sizeType"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, If.apply(this, arguments);
}
function xy(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ay(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xy(Object(r), true).forEach(function(n) {
      ND(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function ND(e7, t, r) {
  return t = CD(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function CD(e7) {
  var t = jD(e7, "string");
  return so(t) == "symbol" ? t : t + "";
}
function jD(e7, t) {
  if (so(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (so(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function BD(e7, t) {
  if (e7 == null) return {};
  var r = RD(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function RD(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var W_ = { symbolCircle: Nd, symbolCross: iD, symbolDiamond: oD, symbolSquare: sD, symbolStar: fD, symbolTriangle: hD, symbolWye: pD }, kD = Math.PI / 180, LD = function(t) {
  var r = "symbol".concat(Cu(t));
  return W_[r] || Nd;
}, FD = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * kD;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, UD = function(t, r) {
  W_["symbol".concat(Cu(t))] = r;
}, ku = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = BD(t, MD), u = Ay(Ay({}, c), {}, { type: n, size: a, sizeType: s }), l = function() {
    var p = LD(n), g = yD().type(p).size(FD(a, s, n));
    return g();
  }, f = u.className, h = u.cx, d = u.cy, y = ct(u, true);
  return h === +h && d === +d && a === +a ? A.createElement("path", If({}, y, { className: mt("recharts-symbols", f), transform: "translate(".concat(h, ", ").concat(d, ")"), d: l() })) : null;
};
ku.registerSymbol = UD;
function ki(e7) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e7);
}
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ef.apply(this, arguments);
}
function Py(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zD(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Py(Object(r), true).forEach(function(n) {
      co(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Py(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function WD(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function VD(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, G_(n.key), n);
  }
}
function GD(e7, t, r) {
  return t && VD(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function qD(e7, t, r) {
  return t = vc(t), HD(e7, V_() ? Reflect.construct(t, r || [], vc(e7).constructor) : t.apply(e7, r));
}
function HD(e7, t) {
  if (t && (ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return KD(e7);
}
function KD(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function V_() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V_ = function() {
    return !!e7;
  })();
}
function vc(e7) {
  return vc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vc(e7);
}
function YD(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && $f(e7, t);
}
function $f(e7, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $f(e7, t);
}
function co(e7, t, r) {
  return t = G_(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function G_(e7) {
  var t = XD(e7, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function XD(e7, t) {
  if (ki(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Fe = 32, Cd = function(e7) {
  function t() {
    return WD(this, t), qD(this, t, arguments);
  }
  return YD(t, e7), GD(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Fe / 2, o = Fe / 6, s = Fe / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return A.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Fe, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return A.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Fe, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return A.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(Fe / 8, "h").concat(Fe, "v").concat(Fe * 3 / 4, "h").concat(-Fe, "z"), className: "recharts-legend-icon" });
    if (A.isValidElement(n.legendIcon)) {
      var u = zD({}, n);
      return delete u.legendIcon, A.cloneElement(n.legendIcon, u);
    }
    return A.createElement(ku, { fill: c, cx: a, cy: a, size: Fe, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = { x: 0, y: 0, width: Fe, height: Fe }, f = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(d, y) {
      var m = d.formatter || c, p = mt(co(co({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", d.inactive));
      if (d.type === "none") return null;
      var g = ut(d.value) ? null : d.value;
      Fr(!ut(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var _ = d.inactive ? u : d.color;
      return A.createElement("li", Ef({ className: p, style: f, key: "legend-item-".concat(y) }, oo(n.props, d, y)), A.createElement(_f, { width: o, height: o, viewBox: l, style: h }, n.renderIcon(d)), A.createElement("span", { className: "recharts-legend-item-text", style: { color: _ } }, m ? m(g, d, y) : g));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return A.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(B.PureComponent);
co(Cd, "displayName", "Legend");
co(Cd, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var JD = wu;
function QD() {
  this.__data__ = new JD(), this.size = 0;
}
var ZD = QD;
function tM(e7) {
  var t = this.__data__, r = t.delete(e7);
  return this.size = t.size, r;
}
var eM = tM;
function rM(e7) {
  return this.__data__.get(e7);
}
var nM = rM;
function iM(e7) {
  return this.__data__.has(e7);
}
var aM = iM, oM = wu, sM = Sd, cM = Od, uM = 200;
function lM(e7, t) {
  var r = this.__data__;
  if (r instanceof oM) {
    var n = r.__data__;
    if (!sM || n.length < uM - 1) return n.push([e7, t]), this.size = ++r.size, this;
    r = this.__data__ = new cM(n);
  }
  return r.set(e7, t), this.size = r.size, this;
}
var fM = lM, hM = wu, dM = ZD, pM = eM, yM = nM, mM = aM, vM = fM;
function va(e7) {
  var t = this.__data__ = new hM(e7);
  this.size = t.size;
}
va.prototype.clear = dM;
va.prototype.delete = pM;
va.prototype.get = yM;
va.prototype.has = mM;
va.prototype.set = vM;
var q_ = va, gM = "__lodash_hash_undefined__";
function bM(e7) {
  return this.__data__.set(e7, gM), this;
}
var _M = bM;
function wM(e7) {
  return this.__data__.has(e7);
}
var SM = wM, OM = Od, xM = _M, AM = SM;
function gc(e7) {
  var t = -1, r = e7 == null ? 0 : e7.length;
  for (this.__data__ = new OM(); ++t < r; ) this.add(e7[t]);
}
gc.prototype.add = gc.prototype.push = xM;
gc.prototype.has = AM;
var H_ = gc;
function PM(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (t(e7[r], r, e7)) return true;
  return false;
}
var K_ = PM;
function TM(e7, t) {
  return e7.has(t);
}
var Y_ = TM, IM = H_, EM = K_, $M = Y_, DM = 1, MM = 2;
function NM(e7, t, r, n, i, a) {
  var o = r & DM, s = e7.length, c = t.length;
  if (s != c && !(o && c > s)) return false;
  var u = a.get(e7), l = a.get(t);
  if (u && l) return u == t && l == e7;
  var f = -1, h = true, d = r & MM ? new IM() : void 0;
  for (a.set(e7, t), a.set(t, e7); ++f < s; ) {
    var y = e7[f], m = t[f];
    if (n) var p = o ? n(m, y, f, t, e7, a) : n(y, m, f, e7, t, a);
    if (p !== void 0) {
      if (p) continue;
      h = false;
      break;
    }
    if (d) {
      if (!EM(t, function(g, _) {
        if (!$M(d, _) && (y === g || i(y, g, r, n, a))) return d.push(_);
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
var X_ = NM, CM = Ir, jM = CM.Uint8Array, BM = jM;
function RM(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var kM = RM;
function LM(e7) {
  var t = -1, r = Array(e7.size);
  return e7.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var jd = LM, Ty = Xo, Iy = BM, FM = wd, UM = X_, zM = kM, WM = jd, VM = 1, GM = 2, qM = "[object Boolean]", HM = "[object Date]", KM = "[object Error]", YM = "[object Map]", XM = "[object Number]", JM = "[object RegExp]", QM = "[object Set]", ZM = "[object String]", tN = "[object Symbol]", eN = "[object ArrayBuffer]", rN = "[object DataView]", Ey = Ty ? Ty.prototype : void 0, Il = Ey ? Ey.valueOf : void 0;
function nN(e7, t, r, n, i, a, o) {
  switch (r) {
    case rN:
      if (e7.byteLength != t.byteLength || e7.byteOffset != t.byteOffset) return false;
      e7 = e7.buffer, t = t.buffer;
    case eN:
      return !(e7.byteLength != t.byteLength || !a(new Iy(e7), new Iy(t)));
    case qM:
    case HM:
    case XM:
      return FM(+e7, +t);
    case KM:
      return e7.name == t.name && e7.message == t.message;
    case JM:
    case ZM:
      return e7 == t + "";
    case YM:
      var s = zM;
    case QM:
      var c = n & VM;
      if (s || (s = WM), e7.size != t.size && !c) return false;
      var u = o.get(e7);
      if (u) return u == t;
      n |= GM, o.set(e7, t);
      var l = UM(s(e7), s(t), n, i, a, o);
      return o.delete(e7), l;
    case tN:
      if (Il) return Il.call(e7) == Il.call(t);
  }
  return false;
}
var iN = nN;
function aN(e7, t) {
  for (var r = -1, n = t.length, i = e7.length; ++r < n; ) e7[i + r] = t[r];
  return e7;
}
var J_ = aN, oN = J_, sN = Ee;
function cN(e7, t, r) {
  var n = t(e7);
  return sN(e7) ? n : oN(n, r(e7));
}
var uN = cN;
function lN(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length, i = 0, a = []; ++r < n; ) {
    var o = e7[r];
    t(o, r, e7) && (a[i++] = o);
  }
  return a;
}
var fN = lN;
function hN() {
  return [];
}
var dN = hN, pN = fN, yN = dN, mN = Object.prototype, vN = mN.propertyIsEnumerable, $y = Object.getOwnPropertySymbols, gN = $y ? function(e7) {
  return e7 == null ? [] : (e7 = Object(e7), pN($y(e7), function(t) {
    return vN.call(e7, t);
  }));
} : yN, bN = gN;
function _N(e7, t) {
  for (var r = -1, n = Array(e7); ++r < e7; ) n[r] = t(r);
  return n;
}
var wN = _N, SN = Yr, ON = Xr, xN = "[object Arguments]";
function AN(e7) {
  return ON(e7) && SN(e7) == xN;
}
var PN = AN, Dy = PN, TN = Xr, Q_ = Object.prototype, IN = Q_.hasOwnProperty, EN = Q_.propertyIsEnumerable, $N = Dy(/* @__PURE__ */ function() {
  return arguments;
}()) ? Dy : function(e7) {
  return TN(e7) && IN.call(e7, "callee") && !EN.call(e7, "callee");
}, Bd = $N, bc = { exports: {} };
function DN() {
  return false;
}
var MN = DN;
bc.exports;
(function(e7, t) {
  var r = Ir, n = MN, i = t && !t.nodeType && t, a = i && true && e7 && !e7.nodeType && e7, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e7.exports = u;
})(bc, bc.exports);
var Z_ = bc.exports, NN = 9007199254740991, CN = /^(?:0|[1-9]\d*)$/;
function jN(e7, t) {
  var r = typeof e7;
  return t = t ?? NN, !!t && (r == "number" || r != "symbol" && CN.test(e7)) && e7 > -1 && e7 % 1 == 0 && e7 < t;
}
var Rd = jN, BN = 9007199254740991;
function RN(e7) {
  return typeof e7 == "number" && e7 > -1 && e7 % 1 == 0 && e7 <= BN;
}
var kd = RN, kN = Yr, LN = kd, FN = Xr, UN = "[object Arguments]", zN = "[object Array]", WN = "[object Boolean]", VN = "[object Date]", GN = "[object Error]", qN = "[object Function]", HN = "[object Map]", KN = "[object Number]", YN = "[object Object]", XN = "[object RegExp]", JN = "[object Set]", QN = "[object String]", ZN = "[object WeakMap]", tC = "[object ArrayBuffer]", eC = "[object DataView]", rC = "[object Float32Array]", nC = "[object Float64Array]", iC = "[object Int8Array]", aC = "[object Int16Array]", oC = "[object Int32Array]", sC = "[object Uint8Array]", cC = "[object Uint8ClampedArray]", uC = "[object Uint16Array]", lC = "[object Uint32Array]", kt = {};
kt[rC] = kt[nC] = kt[iC] = kt[aC] = kt[oC] = kt[sC] = kt[cC] = kt[uC] = kt[lC] = true;
kt[UN] = kt[zN] = kt[tC] = kt[WN] = kt[eC] = kt[VN] = kt[GN] = kt[qN] = kt[HN] = kt[KN] = kt[YN] = kt[XN] = kt[JN] = kt[QN] = kt[ZN] = false;
function fC(e7) {
  return FN(e7) && LN(e7.length) && !!kt[kN(e7)];
}
var hC = fC;
function dC(e7) {
  return function(t) {
    return e7(t);
  };
}
var tw = dC, _c = { exports: {} };
_c.exports;
(function(e7, t) {
  var r = s_, n = t && !t.nodeType && t, i = n && true && e7 && !e7.nodeType && e7, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e7.exports = s;
})(_c, _c.exports);
var pC = _c.exports, yC = hC, mC = tw, My = pC, Ny = My && My.isTypedArray, vC = Ny ? mC(Ny) : yC, ew = vC, gC = wN, bC = Bd, _C = Ee, wC = Z_, SC = Rd, OC = ew, xC = Object.prototype, AC = xC.hasOwnProperty;
function PC(e7, t) {
  var r = _C(e7), n = !r && bC(e7), i = !r && !n && wC(e7), a = !r && !n && !i && OC(e7), o = r || n || i || a, s = o ? gC(e7.length, String) : [], c = s.length;
  for (var u in e7) (t || AC.call(e7, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || SC(u, c))) && s.push(u);
  return s;
}
var TC = PC, IC = Object.prototype;
function EC(e7) {
  var t = e7 && e7.constructor, r = typeof t == "function" && t.prototype || IC;
  return e7 === r;
}
var $C = EC;
function DC(e7, t) {
  return function(r) {
    return e7(t(r));
  };
}
var rw = DC, MC = rw, NC = MC(Object.keys, Object), CC = NC, jC = $C, BC = CC, RC = Object.prototype, kC = RC.hasOwnProperty;
function LC(e7) {
  if (!jC(e7)) return BC(e7);
  var t = [];
  for (var r in Object(e7)) kC.call(e7, r) && r != "constructor" && t.push(r);
  return t;
}
var FC = LC, UC = _d, zC = kd;
function WC(e7) {
  return e7 != null && zC(e7.length) && !UC(e7);
}
var Jo = WC, VC = TC, GC = FC, qC = Jo;
function HC(e7) {
  return qC(e7) ? VC(e7) : GC(e7);
}
var Lu = HC, KC = uN, YC = bN, XC = Lu;
function JC(e7) {
  return KC(e7, XC, YC);
}
var QC = JC, Cy = QC, ZC = 1, tj = Object.prototype, ej = tj.hasOwnProperty;
function rj(e7, t, r, n, i, a) {
  var o = r & ZC, s = Cy(e7), c = s.length, u = Cy(t), l = u.length;
  if (c != l && !o) return false;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in t : ej.call(t, h))) return false;
  }
  var d = a.get(e7), y = a.get(t);
  if (d && y) return d == t && y == e7;
  var m = true;
  a.set(e7, t), a.set(t, e7);
  for (var p = o; ++f < c; ) {
    h = s[f];
    var g = e7[h], _ = t[h];
    if (n) var w = o ? n(_, g, h, t, e7, a) : n(g, _, h, e7, t, a);
    if (!(w === void 0 ? g === _ || i(g, _, r, n, a) : w)) {
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
var nj = rj, ij = Jn, aj = Ir, oj = ij(aj, "DataView"), sj = oj, cj = Jn, uj = Ir, lj = cj(uj, "Promise"), fj = lj, hj = Jn, dj = Ir, pj = hj(dj, "Set"), nw = pj, yj = Jn, mj = Ir, vj = yj(mj, "WeakMap"), gj = vj, Df = sj, Mf = Sd, Nf = fj, Cf = nw, jf = gj, iw = Yr, ga = u_, jy = "[object Map]", bj = "[object Object]", By = "[object Promise]", Ry = "[object Set]", ky = "[object WeakMap]", Ly = "[object DataView]", _j = ga(Df), wj = ga(Mf), Sj = ga(Nf), Oj = ga(Cf), xj = ga(jf), In = iw;
(Df && In(new Df(new ArrayBuffer(1))) != Ly || Mf && In(new Mf()) != jy || Nf && In(Nf.resolve()) != By || Cf && In(new Cf()) != Ry || jf && In(new jf()) != ky) && (In = function(e7) {
  var t = iw(e7), r = t == bj ? e7.constructor : void 0, n = r ? ga(r) : "";
  if (n) switch (n) {
    case _j:
      return Ly;
    case wj:
      return jy;
    case Sj:
      return By;
    case Oj:
      return Ry;
    case xj:
      return ky;
  }
  return t;
});
var Aj = In, El = q_, Pj = X_, Tj = iN, Ij = nj, Fy = Aj, Uy = Ee, zy = Z_, Ej = ew, $j = 1, Wy = "[object Arguments]", Vy = "[object Array]", cs = "[object Object]", Dj = Object.prototype, Gy = Dj.hasOwnProperty;
function Mj(e7, t, r, n, i, a) {
  var o = Uy(e7), s = Uy(t), c = o ? Vy : Fy(e7), u = s ? Vy : Fy(t);
  c = c == Wy ? cs : c, u = u == Wy ? cs : u;
  var l = c == cs, f = u == cs, h = c == u;
  if (h && zy(e7)) {
    if (!zy(t)) return false;
    o = true, l = false;
  }
  if (h && !l) return a || (a = new El()), o || Ej(e7) ? Pj(e7, t, r, n, i, a) : Tj(e7, t, c, r, n, i, a);
  if (!(r & $j)) {
    var d = l && Gy.call(e7, "__wrapped__"), y = f && Gy.call(t, "__wrapped__");
    if (d || y) {
      var m = d ? e7.value() : e7, p = y ? t.value() : t;
      return a || (a = new El()), i(m, p, r, n, a);
    }
  }
  return h ? (a || (a = new El()), Ij(e7, t, r, n, i, a)) : false;
}
var Nj = Mj, Cj = Nj, qy = Xr;
function aw(e7, t, r, n, i) {
  return e7 === t ? true : e7 == null || t == null || !qy(e7) && !qy(t) ? e7 !== e7 && t !== t : Cj(e7, t, r, n, aw, i);
}
var Ld = aw, jj = q_, Bj = Ld, Rj = 1, kj = 2;
function Lj(e7, t, r, n) {
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
      var f = new jj();
      if (n) var h = n(u, l, c, e7, t, f);
      if (!(h === void 0 ? Bj(l, u, Rj | kj, n, f) : h)) return false;
    }
  }
  return true;
}
var Fj = Lj, Uj = mn;
function zj(e7) {
  return e7 === e7 && !Uj(e7);
}
var ow = zj, Wj = ow, Vj = Lu;
function Gj(e7) {
  for (var t = Vj(e7), r = t.length; r--; ) {
    var n = t[r], i = e7[n];
    t[r] = [n, i, Wj(i)];
  }
  return t;
}
var qj = Gj;
function Hj(e7, t) {
  return function(r) {
    return r == null ? false : r[e7] === t && (t !== void 0 || e7 in Object(r));
  };
}
var sw = Hj, Kj = Fj, Yj = qj, Xj = sw;
function Jj(e7) {
  var t = Yj(e7);
  return t.length == 1 && t[0][2] ? Xj(t[0][0], t[0][1]) : function(r) {
    return r === e7 || Kj(r, e7, t);
  };
}
var Qj = Jj;
function Zj(e7, t) {
  return e7 != null && t in Object(e7);
}
var tB = Zj, eB = p_, rB = Bd, nB = Ee, iB = Rd, aB = kd, oB = Ou;
function sB(e7, t, r) {
  t = eB(t, e7);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = oB(t[n]);
    if (!(a = e7 != null && r(e7, o))) break;
    e7 = e7[o];
  }
  return a || ++n != i ? a : (i = e7 == null ? 0 : e7.length, !!i && aB(i) && iB(o, i) && (nB(e7) || rB(e7)));
}
var cB = sB, uB = tB, lB = cB;
function fB(e7, t) {
  return e7 != null && lB(e7, t, uB);
}
var hB = fB, dB = Ld, pB = y_, yB = hB, mB = bd, vB = ow, gB = sw, bB = Ou, _B = 1, wB = 2;
function SB(e7, t) {
  return mB(e7) && vB(t) ? gB(bB(e7), t) : function(r) {
    var n = pB(r, e7);
    return n === void 0 && n === t ? yB(r, e7) : dB(t, n, _B | wB);
  };
}
var OB = SB;
function xB(e7) {
  return e7;
}
var ba = xB;
function AB(e7) {
  return function(t) {
    return t == null ? void 0 : t[e7];
  };
}
var PB = AB, TB = Pd;
function IB(e7) {
  return function(t) {
    return TB(t, e7);
  };
}
var EB = IB, $B = PB, DB = EB, MB = bd, NB = Ou;
function CB(e7) {
  return MB(e7) ? $B(NB(e7)) : DB(e7);
}
var jB = CB, BB = Qj, RB = OB, kB = ba, LB = Ee, FB = jB;
function UB(e7) {
  return typeof e7 == "function" ? e7 : e7 == null ? kB : typeof e7 == "object" ? LB(e7) ? RB(e7[0], e7[1]) : BB(e7) : FB(e7);
}
var vn = UB;
function zB(e7, t, r, n) {
  for (var i = e7.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e7[a], a, e7)) return a;
  return -1;
}
var cw = zB;
function WB(e7) {
  return e7 !== e7;
}
var VB = WB;
function GB(e7, t, r) {
  for (var n = r - 1, i = e7.length; ++n < i; ) if (e7[n] === t) return n;
  return -1;
}
var qB = GB, HB = cw, KB = VB, YB = qB;
function XB(e7, t, r) {
  return t === t ? YB(e7, t, r) : HB(e7, KB, r);
}
var JB = XB, QB = JB;
function ZB(e7, t) {
  var r = e7 == null ? 0 : e7.length;
  return !!r && QB(e7, t, 0) > -1;
}
var t2 = ZB;
function e22(e7, t, r) {
  for (var n = -1, i = e7 == null ? 0 : e7.length; ++n < i; ) if (r(t, e7[n])) return true;
  return false;
}
var r2 = e22;
function n2() {
}
var i2 = n2, $l = nw, a2 = i2, o2 = jd, s2 = 1 / 0, c2 = $l && 1 / o2(new $l([, -0]))[1] == s2 ? function(e7) {
  return new $l(e7);
} : a2, u2 = c2, l2 = H_, f2 = t2, h2 = r2, d2 = Y_, p2 = u2, y2 = jd, m2 = 200;
function v2(e7, t, r) {
  var n = -1, i = f2, a = e7.length, o = true, s = [], c = s;
  if (r) o = false, i = h2;
  else if (a >= m2) {
    var u = t ? null : p2(e7);
    if (u) return y2(u);
    o = false, i = d2, c = new l2();
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
var g2 = v2, b2 = vn, _2 = g2;
function w2(e7, t) {
  return e7 && e7.length ? _2(e7, b2(t)) : [];
}
var S2 = w2;
const Hy = Bt(S2);
function uw(e7, t, r) {
  return t === true ? Hy(e7, r) : ut(t) ? Hy(e7, t) : e7;
}
function Li(e7) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e7);
}
var O2 = ["ref"];
function Ky(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Er(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ky(Object(r), true).forEach(function(n) {
      Fu(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function x2(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Yy(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, fw(n.key), n);
  }
}
function A2(e7, t, r) {
  return t && Yy(e7.prototype, t), r && Yy(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function P2(e7, t, r) {
  return t = wc(t), T2(e7, lw() ? Reflect.construct(t, r || [], wc(e7).constructor) : t.apply(e7, r));
}
function T2(e7, t) {
  if (t && (Li(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return I2(e7);
}
function I2(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function lw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lw = function() {
    return !!e7;
  })();
}
function wc(e7) {
  return wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wc(e7);
}
function E2(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Bf(e7, t);
}
function Bf(e7, t) {
  return Bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bf(e7, t);
}
function Fu(e7, t, r) {
  return t = fw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function fw(e7) {
  var t = $2(e7, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function $2(e7, t) {
  if (Li(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function D2(e7, t) {
  if (e7 == null) return {};
  var r = M2(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function M2(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function N2(e7) {
  return e7.value;
}
function C2(e7, t) {
  if (A.isValidElement(e7)) return A.cloneElement(e7, t);
  if (typeof e7 == "function") return A.createElement(e7, t);
  t.ref;
  var r = D2(t, O2);
  return A.createElement(Cd, r);
}
var Xy = 1, Rn = function(e7) {
  function t() {
    var r;
    x2(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = P2(this, t, [].concat(i)), Fu(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return E2(t, e7), A2(t, [{ key: "componentDidMount", value: function() {
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
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > Xy || Math.abs(i.height - this.lastBoundingBox.height) > Xy) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
  } }, { key: "getBBoxSnapshot", value: function() {
    return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Er({}, this.lastBoundingBox) : { width: 0, height: 0 };
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
    return Er(Er({}, f), h);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.content, o = i.width, s = i.height, c = i.wrapperStyle, u = i.payloadUniqBy, l = i.payload, f = Er(Er({ position: "absolute", width: o || "auto", height: s || "auto" }, this.getDefaultPosition(c)), c);
    return A.createElement("div", { className: "recharts-legend-wrapper", style: f, ref: function(d) {
      n.wrapperNode = d;
    } }, C2(a, Er(Er({}, this.props), {}, { payload: uw(l, u, N2) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = Er(Er({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && L(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(B.PureComponent);
Fu(Rn, "displayName", "Legend");
Fu(Rn, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var Jy = Xo, j2 = Bd, B2 = Ee, Qy = Jy ? Jy.isConcatSpreadable : void 0;
function R2(e7) {
  return B2(e7) || j2(e7) || !!(Qy && e7 && e7[Qy]);
}
var k2 = R2, L2 = J_, F2 = k2;
function hw(e7, t, r, n, i) {
  var a = -1, o = e7.length;
  for (r || (r = F2), i || (i = []); ++a < o; ) {
    var s = e7[a];
    t > 0 && r(s) ? t > 1 ? hw(s, t - 1, r, n, i) : L2(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var dw = hw;
function U2(e7) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e7 ? s : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var z2 = U2, W2 = z2, V2 = W2(), G2 = V2, q2 = G2, H2 = Lu;
function K2(e7, t) {
  return e7 && q2(e7, t, H2);
}
var pw = K2, Y2 = Jo;
function X2(e7, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!Y2(r)) return e7(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var J2 = X2, Q2 = pw, Z2 = J2, tR = Z2(Q2), Fd = tR, eR = Fd, rR = Jo;
function nR(e7, t) {
  var r = -1, n = rR(e7) ? Array(e7.length) : [];
  return eR(e7, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var yw = nR;
function iR(e7, t) {
  var r = e7.length;
  for (e7.sort(t); r--; ) e7[r] = e7[r].value;
  return e7;
}
var aR = iR, Zy = fa;
function oR(e7, t) {
  if (e7 !== t) {
    var r = e7 !== void 0, n = e7 === null, i = e7 === e7, a = Zy(e7), o = t !== void 0, s = t === null, c = t === t, u = Zy(t);
    if (!s && !u && !a && e7 > t || a && o && c && !s && !u || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !u && e7 < t || u && r && i && !n && !a || s && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var sR = oR, cR = sR;
function uR(e7, t, r) {
  for (var n = -1, i = e7.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = cR(i[n], a[n]);
    if (c) {
      if (n >= s) return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e7.index - t.index;
}
var lR = uR, Dl = Ad, fR = Pd, hR = vn, dR = yw, pR = aR, yR = tw, mR = lR, vR = ba, gR = Ee;
function bR(e7, t, r) {
  t.length ? t = Dl(t, function(a) {
    return gR(a) ? function(o) {
      return fR(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [vR];
  var n = -1;
  t = Dl(t, yR(hR));
  var i = dR(e7, function(a, o, s) {
    var c = Dl(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return pR(i, function(a, o) {
    return mR(a, o, r);
  });
}
var _R = bR;
function wR(e7, t, r) {
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
var SR = wR, OR = SR, tm = Math.max;
function xR(e7, t, r) {
  return t = tm(t === void 0 ? e7.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = tm(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), OR(e7, this, s);
  };
}
var AR = xR;
function PR(e7) {
  return function() {
    return e7;
  };
}
var TR = PR, IR = Jn, ER = function() {
  try {
    var e7 = IR(Object, "defineProperty");
    return e7({}, "", {}), e7;
  } catch {
  }
}(), mw = ER, $R = TR, em = mw, DR = ba, MR = em ? function(e7, t) {
  return em(e7, "toString", { configurable: true, enumerable: false, value: $R(t), writable: true });
} : DR, NR = MR, CR = 800, jR = 16, BR = Date.now;
function RR(e7) {
  var t = 0, r = 0;
  return function() {
    var n = BR(), i = jR - (n - r);
    if (r = n, i > 0) {
      if (++t >= CR) return arguments[0];
    } else t = 0;
    return e7.apply(void 0, arguments);
  };
}
var kR = RR, LR = NR, FR = kR, UR = FR(LR), zR = UR, WR = ba, VR = AR, GR = zR;
function qR(e7, t) {
  return GR(VR(e7, t, WR), e7 + "");
}
var HR = qR, KR = wd, YR = Jo, XR = Rd, JR = mn;
function QR(e7, t, r) {
  if (!JR(r)) return false;
  var n = typeof t;
  return (n == "number" ? YR(r) && XR(t, r.length) : n == "string" && t in r) ? KR(r[t], e7) : false;
}
var Uu = QR, ZR = dw, tk = _R, ek = HR, rm = Uu, rk = ek(function(e7, t) {
  if (e7 == null) return [];
  var r = t.length;
  return r > 1 && rm(e7, t[0], t[1]) ? t = [] : r > 2 && rm(t[0], t[1], t[2]) && (t = [t[0]]), tk(e7, ZR(t, 1), []);
}), nk = rk;
const Ud = Bt(nk);
function uo(e7) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e7);
}
function Rf() {
  return Rf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Rf.apply(this, arguments);
}
function ik(e7, t) {
  return ck(e7) || sk(e7, t) || ok(e7, t) || ak();
}
function ak() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ok(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return nm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nm(e7, t);
  }
}
function nm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function sk(e7, t) {
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
function ck(e7) {
  if (Array.isArray(e7)) return e7;
}
function im(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ml(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? im(Object(r), true).forEach(function(n) {
      uk(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function uk(e7, t, r) {
  return t = lk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function lk(e7) {
  var t = fk(e7, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function fk(e7, t) {
  if (uo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function hk(e7) {
  return Array.isArray(e7) && ne(e7[0]) && ne(e7[1]) ? e7.join(" ~ ") : e7;
}
var dk = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, g = t.accessibilityLayer, _ = g === void 0 ? false : g, w = function() {
    if (l && l.length) {
      var I = { padding: 0, margin: 0 }, j = (h ? Ud(l, h) : l).map(function(N, D) {
        if (N.type === "none") return null;
        var C = Ml({ display: "block", paddingTop: 4, paddingBottom: 4, color: N.color || "#000" }, s), R = N.formatter || f || hk, F = N.value, U = N.name, G = F, rt = U;
        if (R && G != null && rt != null) {
          var W = R(F, U, N, D, l);
          if (Array.isArray(W)) {
            var it = ik(W, 2);
            G = it[0], rt = it[1];
          } else G = W;
        }
        return A.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(D), style: C }, ne(rt) ? A.createElement("span", { className: "recharts-tooltip-item-name" }, rt) : null, ne(rt) ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, A.createElement("span", { className: "recharts-tooltip-item-value" }, G), A.createElement("span", { className: "recharts-tooltip-item-unit" }, N.unit || ""));
      });
      return A.createElement("ul", { className: "recharts-tooltip-item-list", style: I }, j);
    }
    return null;
  }, S = Ml({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), v = Ml({ margin: 0 }, u), b = !st(m), O = b ? m : "", P = mt("recharts-default-tooltip", d), T = mt("recharts-tooltip-label", y);
  b && p && l !== void 0 && l !== null && (O = p(m, l));
  var $ = _ ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement("div", Rf({ className: P, style: S }, $), A.createElement("p", { className: T, style: v }, A.isValidElement(O) ? O : "".concat(O)), w());
};
function lo(e7) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e7);
}
function us(e7, t, r) {
  return t = pk(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function pk(e7) {
  var t = yk(e7, "string");
  return lo(t) == "symbol" ? t : t + "";
}
function yk(e7, t) {
  if (lo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Ia = "recharts-tooltip-wrapper", mk = { visibility: "hidden" };
function vk(e7) {
  var t = e7.coordinate, r = e7.translateX, n = e7.translateY;
  return mt(Ia, us(us(us(us({}, "".concat(Ia, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat(Ia, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat(Ia, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat(Ia, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function am(e7) {
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
function gk(e7) {
  var t = e7.translateX, r = e7.translateY, n = e7.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function bk(e7) {
  var t = e7.allowEscapeViewBox, r = e7.coordinate, n = e7.offsetTopLeft, i = e7.position, a = e7.reverseDirection, o = e7.tooltipBox, s = e7.useTranslate3d, c = e7.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = am({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), f = am({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), u = gk({ translateX: l, translateY: f, useTranslate3d: s })) : u = mk, { cssProperties: u, cssClasses: vk({ translateX: l, translateY: f, coordinate: r }) };
}
function Fi(e7) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e7);
}
function om(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sm(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? om(Object(r), true).forEach(function(n) {
      Lf(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : om(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function _k(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wk(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, gw(n.key), n);
  }
}
function Sk(e7, t, r) {
  return t && wk(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Ok(e7, t, r) {
  return t = Sc(t), xk(e7, vw() ? Reflect.construct(t, r || [], Sc(e7).constructor) : t.apply(e7, r));
}
function xk(e7, t) {
  if (t && (Fi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ak(e7);
}
function Ak(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function vw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vw = function() {
    return !!e7;
  })();
}
function Sc(e7) {
  return Sc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sc(e7);
}
function Pk(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && kf(e7, t);
}
function kf(e7, t) {
  return kf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kf(e7, t);
}
function Lf(e7, t, r) {
  return t = gw(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function gw(e7) {
  var t = Tk(e7, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function Tk(e7, t) {
  if (Fi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var cm = 1, Ik = function(e7) {
  function t() {
    var r;
    _k(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = Ok(this, t, [].concat(i)), Lf(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), Lf(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0, y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return Pk(t, e7), Sk(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > cm || Math.abs(n.height - this.state.lastBoundingBox.height) > cm) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, m = i.reverseDirection, p = i.useTranslate3d, g = i.viewBox, _ = i.wrapperStyle, w = bk({ allowEscapeViewBox: o, coordinate: l, offsetTopLeft: d, position: y, reverseDirection: m, tooltipBox: this.state.lastBoundingBox, useTranslate3d: p, viewBox: g }), S = w.cssClasses, v = w.cssProperties, b = sm(sm({ transition: h && a ? "transform ".concat(s, "ms ").concat(c) : void 0 }, v), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, _);
    return A.createElement("div", { tabIndex: -1, className: S, style: b, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(B.PureComponent), Ek = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, gn = { isSsr: Ek() };
function Ui(e7) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e7);
}
function um(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lm(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? um(Object(r), true).forEach(function(n) {
      zd(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function $k(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Dk(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, _w(n.key), n);
  }
}
function Mk(e7, t, r) {
  return t && Dk(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Nk(e7, t, r) {
  return t = Oc(t), Ck(e7, bw() ? Reflect.construct(t, r || [], Oc(e7).constructor) : t.apply(e7, r));
}
function Ck(e7, t) {
  if (t && (Ui(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return jk(e7);
}
function jk(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function bw() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bw = function() {
    return !!e7;
  })();
}
function Oc(e7) {
  return Oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oc(e7);
}
function Bk(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ff(e7, t);
}
function Ff(e7, t) {
  return Ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ff(e7, t);
}
function zd(e7, t, r) {
  return t = _w(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function _w(e7) {
  var t = Rk(e7, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function Rk(e7, t) {
  if (Ui(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function kk(e7) {
  return e7.dataKey;
}
function Lk(e7, t) {
  return A.isValidElement(e7) ? A.cloneElement(e7, t) : typeof e7 == "function" ? A.createElement(e7, t) : A.createElement(dk, t);
}
var rr = function(e7) {
  function t() {
    return $k(this, t), Nk(this, t, arguments);
  }
  return Bk(t, e7), Mk(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, m = i.payloadUniqBy, p = i.position, g = i.reverseDirection, _ = i.useTranslate3d, w = i.viewBox, S = i.wrapperStyle, v = y ?? [];
    f && v.length && (v = uw(y.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), m, kk));
    var b = v.length > 0;
    return A.createElement(Ik, { allowEscapeViewBox: o, animationDuration: s, animationEasing: c, isAnimationActive: h, active: a, coordinate: l, hasPayload: b, offset: d, position: p, reverseDirection: g, useTranslate3d: _, viewBox: w, wrapperStyle: S }, Lk(u, lm(lm({}, this.props), {}, { payload: v })));
  } }]);
}(B.PureComponent);
zd(rr, "displayName", "Tooltip");
zd(rr, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !gn.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var Fk = Ir, Uk = function() {
  return Fk.Date.now();
}, zk = Uk, Wk = /\s/;
function Vk(e7) {
  for (var t = e7.length; t-- && Wk.test(e7.charAt(t)); ) ;
  return t;
}
var Gk = Vk, qk = Gk, Hk = /^\s+/;
function Kk(e7) {
  return e7 && e7.slice(0, qk(e7) + 1).replace(Hk, "");
}
var Yk = Kk, Xk = Yk, fm = mn, Jk = fa, hm = NaN, Qk = /^[-+]0x[0-9a-f]+$/i, Zk = /^0b[01]+$/i, tL = /^0o[0-7]+$/i, eL = parseInt;
function rL(e7) {
  if (typeof e7 == "number") return e7;
  if (Jk(e7)) return hm;
  if (fm(e7)) {
    var t = typeof e7.valueOf == "function" ? e7.valueOf() : e7;
    e7 = fm(t) ? t + "" : t;
  }
  if (typeof e7 != "string") return e7 === 0 ? e7 : +e7;
  e7 = Xk(e7);
  var r = Zk.test(e7);
  return r || tL.test(e7) ? eL(e7.slice(2), r ? 2 : 8) : Qk.test(e7) ? hm : +e7;
}
var ww = rL, nL = mn, Nl = zk, dm = ww, iL = "Expected a function", aL = Math.max, oL = Math.min;
function sL(e7, t, r) {
  var n, i, a, o, s, c, u = 0, l = false, f = false, h = true;
  if (typeof e7 != "function") throw new TypeError(iL);
  t = dm(t) || 0, nL(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? aL(dm(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var O = n, P = i;
    return n = i = void 0, u = b, o = e7.apply(P, O), o;
  }
  function y(b) {
    return u = b, s = setTimeout(g, t), l ? d(b) : o;
  }
  function m(b) {
    var O = b - c, P = b - u, T = t - O;
    return f ? oL(T, a - P) : T;
  }
  function p(b) {
    var O = b - c, P = b - u;
    return c === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function g() {
    var b = Nl();
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
    return s === void 0 ? o : _(Nl());
  }
  function v() {
    var b = Nl(), O = p(b);
    if (n = arguments, i = this, c = b, O) {
      if (s === void 0) return y(c);
      if (f) return clearTimeout(s), s = setTimeout(g, t), d(c);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return v.cancel = w, v.flush = S, v;
}
var cL = sL, uL = cL, lL = mn, fL = "Expected a function";
function hL(e7, t, r) {
  var n = true, i = true;
  if (typeof e7 != "function") throw new TypeError(fL);
  return lL(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), uL(e7, t, { leading: n, maxWait: t, trailing: i });
}
var dL = hL;
const Sw = Bt(dL);
function fo(e7) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e7);
}
function pm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ls(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), true).forEach(function(n) {
      pL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function pL(e7, t, r) {
  return t = yL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function yL(e7) {
  var t = mL(e7, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function mL(e7, t) {
  if (fo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function vL(e7, t) {
  return wL(e7) || _L(e7, t) || bL(e7, t) || gL();
}
function gL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bL(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ym(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ym(e7, t);
  }
}
function ym(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function _L(e7, t) {
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
function wL(e7) {
  if (Array.isArray(e7)) return e7;
}
var mm = B.forwardRef(function(e7, t) {
  var r = e7.aspect, n = e7.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e7.width, o = a === void 0 ? "100%" : a, s = e7.height, c = s === void 0 ? "100%" : s, u = e7.minWidth, l = u === void 0 ? 0 : u, f = e7.minHeight, h = e7.maxHeight, d = e7.children, y = e7.debounce, m = y === void 0 ? 0 : y, p = e7.id, g = e7.className, _ = e7.onResize, w = e7.style, S = w === void 0 ? {} : w, v = B.useRef(null), b = B.useRef();
  b.current = _, B.useImperativeHandle(t, function() {
    return Object.defineProperty(v.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), v.current;
    }, configurable: true });
  });
  var O = B.useState({ containerWidth: i.width, containerHeight: i.height }), P = vL(O, 2), T = P[0], $ = P[1], E = B.useCallback(function(j, N) {
    $(function(D) {
      var C = Math.round(j), R = Math.round(N);
      return D.containerWidth === C && D.containerHeight === R ? D : { containerWidth: C, containerHeight: R };
    });
  }, []);
  B.useEffect(function() {
    var j = function(U) {
      var G, rt = U[0].contentRect, W = rt.width, it = rt.height;
      E(W, it), (G = b.current) === null || G === void 0 || G.call(b, W, it);
    };
    m > 0 && (j = Sw(j, m, { trailing: true, leading: false }));
    var N = new ResizeObserver(j), D = v.current.getBoundingClientRect(), C = D.width, R = D.height;
    return E(C, R), N.observe(v.current), function() {
      N.disconnect();
    };
  }, [E, m]);
  var I = B.useMemo(function() {
    var j = T.containerWidth, N = T.containerHeight;
    if (j < 0 || N < 0) return null;
    Fr(Dn(o) || Dn(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Fr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var D = Dn(o) ? j : o, C = Dn(c) ? N : c;
    r && r > 0 && (D ? C = D / r : C && (D = C * r), h && C > h && (C = h)), Fr(D > 0 || C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, D, C, o, c, l, f, r);
    var R = !Array.isArray(d) && Lr(d.type).endsWith("Chart");
    return A.Children.map(d, function(F) {
      return A.isValidElement(F) ? B.cloneElement(F, ls({ width: D, height: C }, R ? { style: ls({ height: "100%", width: "100%", maxHeight: C, maxWidth: D }, F.props.style) } : {})) : F;
    });
  }, [r, d, c, h, f, l, T, o]);
  return A.createElement("div", { id: p ? "".concat(p) : void 0, className: mt("recharts-responsive-container", g), style: ls(ls({}, S), {}, { width: o, height: c, minWidth: l, minHeight: f, maxHeight: h }), ref: v }, I);
}), Wd = function(t) {
  return null;
};
Wd.displayName = "Cell";
function ho(e7) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e7);
}
function vm(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uf(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), true).forEach(function(n) {
      SL(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function SL(e7, t, r) {
  return t = OL(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function OL(e7) {
  var t = xL(e7, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function xL(e7, t) {
  if (ho(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var ii = { widthCache: {}, cacheCount: 0 }, AL = 2e3, PL = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, gm = "recharts_measurement_span";
function TL(e7) {
  var t = Uf({}, e7);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Ha = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || gn.isSsr) return { width: 0, height: 0 };
  var n = TL(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (ii.widthCache[i]) return ii.widthCache[i];
  try {
    var a = document.getElementById(gm);
    a || (a = document.createElement("span"), a.setAttribute("id", gm), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Uf(Uf({}, PL), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = { width: s.width, height: s.height };
    return ii.widthCache[i] = c, ++ii.cacheCount > AL && (ii.cacheCount = 0, ii.widthCache = {}), c;
  } catch {
    return { width: 0, height: 0 };
  }
}, IL = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function po(e7) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e7);
}
function xc(e7, t) {
  return ML(e7) || DL(e7, t) || $L(e7, t) || EL();
}
function EL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $L(e7, t) {
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
function DL(e7, t) {
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
function ML(e7) {
  if (Array.isArray(e7)) return e7;
}
function NL(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _m(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, jL(n.key), n);
  }
}
function CL(e7, t, r) {
  return t && _m(e7.prototype, t), r && _m(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function jL(e7) {
  var t = BL(e7, "string");
  return po(t) == "symbol" ? t : t + "";
}
function BL(e7, t) {
  if (po(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var wm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Sm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, RL = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, kL = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Ow = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, LL = Object.keys(Ow), _i = "NaN";
function FL(e7, t) {
  return e7 * Ow[t];
}
var fs = function() {
  function e7(t, r) {
    NL(this, e7), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !RL.test(r) && (this.num = NaN, this.unit = ""), LL.includes(r) && (this.num = FL(t, r), this.unit = "px");
  }
  return CL(e7, [{ key: "add", value: function(r) {
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
    var n, i = (n = kL.exec(r)) !== null && n !== void 0 ? n : [], a = xc(i, 3), o = a[1], s = a[2];
    return new e7(parseFloat(o), s ?? "");
  } }]);
}();
function xw(e7) {
  if (e7.includes(_i)) return _i;
  for (var t = e7; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = wm.exec(t)) !== null && r !== void 0 ? r : [], i = xc(n, 4), a = i[1], o = i[2], s = i[3], c = fs.parse(a ?? ""), u = fs.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN()) return _i;
    t = t.replace(wm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, h = (f = Sm.exec(t)) !== null && f !== void 0 ? f : [], d = xc(h, 4), y = d[1], m = d[2], p = d[3], g = fs.parse(y ?? ""), _ = fs.parse(p ?? ""), w = m === "+" ? g.add(_) : g.subtract(_);
    if (w.isNaN()) return _i;
    t = t.replace(Sm, w.toString());
  }
  return t;
}
var Om = /\(([^()]*)\)/;
function UL(e7) {
  for (var t = e7; t.includes("("); ) {
    var r = Om.exec(t), n = xc(r, 2), i = n[1];
    t = t.replace(Om, xw(i));
  }
  return t;
}
function zL(e7) {
  var t = e7.replace(/\s+/g, "");
  return t = UL(t), t = xw(t), t;
}
function WL(e7) {
  try {
    return zL(e7);
  } catch {
    return _i;
  }
}
function Cl(e7) {
  var t = WL(e7.slice(5, -1));
  return t === _i ? "" : t;
}
var VL = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], GL = ["dx", "dy", "angle", "className", "breakAll"];
function zf() {
  return zf = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, zf.apply(this, arguments);
}
function xm(e7, t) {
  if (e7 == null) return {};
  var r = qL(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function qL(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Am(e7, t) {
  return XL(e7) || YL(e7, t) || KL(e7, t) || HL();
}
function HL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KL(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Pm(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pm(e7, t);
  }
}
function Pm(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function YL(e7, t) {
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
function XL(e7) {
  if (Array.isArray(e7)) return e7;
}
var Aw = /[ \f\n\r\t\v\u2028\u2029]+/, Pw = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    st(r) || (n ? a = r.toString().split("") : a = r.toString().split(Aw));
    var o = a.map(function(c) {
      return { word: c, width: Ha(c, i).width };
    }), s = n ? 0 : Ha("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, JL = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = L(o), f = s, h = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return D.reduce(function(C, R) {
      var F = R.word, U = R.width, G = C[C.length - 1];
      if (G && (i == null || a || G.width + U + n < Number(i))) G.words.push(F), G.width += U + n;
      else {
        var rt = { words: [F], width: U };
        C.push(rt);
      }
      return C;
    }, []);
  }, d = h(r), y = function(D) {
    return D.reduce(function(C, R) {
      return C.width > R.width ? C : R;
    });
  };
  if (!l) return d;
  for (var m = "\u2026", p = function(D) {
    var C = f.slice(0, D), R = Pw({ breakAll: u, style: c, children: C + m }).wordsWithComputedWidth, F = h(R), U = F.length > o || y(F).width > Number(i);
    return [U, F];
  }, g = 0, _ = f.length - 1, w = 0, S; g <= _ && w <= f.length - 1; ) {
    var v = Math.floor((g + _) / 2), b = v - 1, O = p(b), P = Am(O, 2), T = P[0], $ = P[1], E = p(v), I = Am(E, 1), j = I[0];
    if (!T && !j && (g = v + 1), T && j && (_ = v - 1), !T && j) {
      S = $;
      break;
    }
    w++;
  }
  return S || d;
}, Tm = function(t) {
  var r = st(t) ? [] : t.toString().split(Aw);
  return [{ words: r }];
}, QL = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !gn.isSsr) {
    var c, u, l = Pw({ breakAll: o, children: i, style: a });
    if (l) {
      var f = l.wordsWithComputedWidth, h = l.spaceWidth;
      c = f, u = h;
    } else return Tm(i);
    return JL({ breakAll: o, children: i, maxLines: s, style: a }, c, u, r, n);
  }
  return Tm(i);
}, Im = "#808080", Ac = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? false : l, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, g = p === void 0 ? Im : p, _ = xm(t, VL), w = B.useMemo(function() {
    return QL({ breakAll: _.breakAll, children: _.children, maxLines: _.maxLines, scaleToFit: f, style: _.style, width: _.width });
  }, [_.breakAll, _.children, _.maxLines, f, _.style, _.width]), S = _.dx, v = _.dy, b = _.angle, O = _.className, P = _.breakAll, T = xm(_, GL);
  if (!ne(n) || !ne(a)) return null;
  var $ = n + (L(S) ? S : 0), E = a + (L(v) ? v : 0), I;
  switch (m) {
    case "start":
      I = Cl("calc(".concat(u, ")"));
      break;
    case "middle":
      I = Cl("calc(".concat((w.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      I = Cl("calc(".concat(w.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var N = w[0].width, D = _.width;
    j.push("scale(".concat((L(D) ? D / N : 1) / N, ")"));
  }
  return b && j.push("rotate(".concat(b, ", ").concat($, ", ").concat(E, ")")), j.length && (T.transform = j.join(" ")), A.createElement("text", zf({}, ct(T, true), { x: $, y: E, className: mt("recharts-text", O), textAnchor: d, fill: g.includes("url") ? Im : g }), w.map(function(C, R) {
    var F = C.words.join(P ? "" : " ");
    return A.createElement("tspan", { x: $, dy: R === 0 ? I : s, key: "".concat(F, "-").concat(R) }, F);
  }));
};
function ln(e7, t) {
  return e7 == null || t == null ? NaN : e7 < t ? -1 : e7 > t ? 1 : e7 >= t ? 0 : NaN;
}
function ZL(e7, t) {
  return e7 == null || t == null ? NaN : t < e7 ? -1 : t > e7 ? 1 : t >= e7 ? 0 : NaN;
}
function Vd(e7) {
  let t, r, n;
  e7.length !== 2 ? (t = ln, r = (s, c) => ln(e7(s), c), n = (s, c) => e7(s) - c) : (t = e7 === ln || e7 === ZL ? e7 : tF, r = e7, n = e7);
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
function tF() {
  return 0;
}
function Tw(e7) {
  return e7 === null ? NaN : +e7;
}
function* eF(e7, t) {
  for (let r of e7) r != null && (r = +r) >= r && (yield r);
}
const rF = Vd(ln), Qo = rF.right;
Vd(Tw).center;
class Em extends Map {
  constructor(t, r = aF) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get($m(this, t));
  }
  has(t) {
    return super.has($m(this, t));
  }
  set(t, r) {
    return super.set(nF(this, t), r);
  }
  delete(t) {
    return super.delete(iF(this, t));
  }
}
function $m({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : r;
}
function nF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) ? e7.get(n) : (e7.set(n, r), r);
}
function iF({ _intern: e7, _key: t }, r) {
  const n = t(r);
  return e7.has(n) && (r = e7.get(n), e7.delete(n)), r;
}
function aF(e7) {
  return e7 !== null && typeof e7 == "object" ? e7.valueOf() : e7;
}
function oF(e7 = ln) {
  if (e7 === ln) return Iw;
  if (typeof e7 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e7(t, r);
    return n || n === 0 ? n : (e7(r, r) === 0) - (e7(t, t) === 0);
  };
}
function Iw(e7, t) {
  return (e7 == null || !(e7 >= e7)) - (t == null || !(t >= t)) || (e7 < t ? -1 : e7 > t ? 1 : 0);
}
const sF = Math.sqrt(50), cF = Math.sqrt(10), uF = Math.sqrt(2);
function Pc(e7, t, r) {
  const n = (t - e7) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= sF ? 10 : a >= cF ? 5 : a >= uF ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e7 * u), c = Math.round(t * u), s / u < e7 && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e7 / u), c = Math.round(t / u), s * u < e7 && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? Pc(e7, t, r * 2) : [s, c, u];
}
function Wf(e7, t, r) {
  if (t = +t, e7 = +e7, r = +r, !(r > 0)) return [];
  if (e7 === t) return [e7];
  const n = t < e7, [i, a, o] = n ? Pc(t, e7, r) : Pc(e7, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Vf(e7, t, r) {
  return t = +t, e7 = +e7, r = +r, Pc(e7, t, r)[2];
}
function Gf(e7, t, r) {
  t = +t, e7 = +e7, r = +r;
  const n = t < e7, i = n ? Vf(t, e7, r) : Vf(e7, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Dm(e7, t) {
  let r;
  for (const n of e7) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Mm(e7, t) {
  let r;
  for (const n of e7) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ew(e7, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e7.length - 1, n)), !(r <= t && t <= n)) return e7;
  for (i = i === void 0 ? Iw : oF(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), h = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - u * f / c + h)), y = Math.min(n, Math.floor(t + (c - u) * f / c + h));
      Ew(e7, t, d, y, i);
    }
    const a = e7[t];
    let o = r, s = n;
    for (Ea(e7, r, t), i(e7[n], a) > 0 && Ea(e7, r, n); o < s; ) {
      for (Ea(e7, o, s), ++o, --s; i(e7[o], a) < 0; ) ++o;
      for (; i(e7[s], a) > 0; ) --s;
    }
    i(e7[r], a) === 0 ? Ea(e7, r, s) : (++s, Ea(e7, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e7;
}
function Ea(e7, t, r) {
  const n = e7[t];
  e7[t] = e7[r], e7[r] = n;
}
function lF(e7, t, r) {
  if (e7 = Float64Array.from(eF(e7)), !(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Mm(e7);
    if (t >= 1) return Dm(e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Dm(Ew(e7, a).subarray(0, a + 1)), s = Mm(e7.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function fF(e7, t, r = Tw) {
  if (!(!(n = e7.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e7[0], 0, e7);
    if (t >= 1) return +r(e7[n - 1], n - 1, e7);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e7[a], a, e7), s = +r(e7[a + 1], a + 1, e7);
    return o + (s - o) * (i - a);
  }
}
function hF(e7, t, r) {
  e7 = +e7, t = +t, r = (i = arguments.length) < 2 ? (t = e7, e7 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e7) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e7 + n * r;
  return a;
}
function Ze(e7, t) {
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
function Jr(e7, t) {
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
const qf = Symbol("implicit");
function Gd() {
  var e7 = new Em(), t = [], r = [], n = qf;
  function i(a) {
    let o = e7.get(a);
    if (o === void 0) {
      if (n !== qf) return n;
      e7.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e7 = new Em();
    for (const o of a) e7.has(o) || e7.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Gd(t, r).unknown(n);
  }, Ze.apply(i, arguments), i;
}
function yo() {
  var e7 = Gd().unknown(void 0), t = e7.domain, r = e7.range, n = 0, i = 1, a, o, s = false, c = 0, u = 0, l = 0.5;
  delete e7.unknown;
  function f() {
    var h = t().length, d = i < n, y = d ? i : n, m = d ? n : i;
    a = (m - y) / Math.max(1, h - c + u * 2), s && (a = Math.floor(a)), y += (m - y - a * (h - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = hF(h).map(function(g) {
      return y + a * g;
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
    return yo(t(), [n, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, Ze.apply(f(), arguments);
}
function $w(e7) {
  var t = e7.copy;
  return e7.padding = e7.paddingOuter, delete e7.paddingInner, delete e7.paddingOuter, e7.copy = function() {
    return $w(t());
  }, e7;
}
function Ka() {
  return $w(yo.apply(null, arguments).paddingInner(1));
}
function qd(e7, t, r) {
  e7.prototype = t.prototype = r, r.constructor = e7;
}
function Dw(e7, t) {
  var r = Object.create(e7.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Zo() {
}
var mo = 0.7, Tc = 1 / mo, Ii = "\\s*([+-]?\\d+)\\s*", vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", dF = /^#([0-9a-f]{3,8})$/, pF = new RegExp(`^rgb\\(${Ii},${Ii},${Ii}\\)$`), yF = new RegExp(`^rgb\\(${wr},${wr},${wr}\\)$`), mF = new RegExp(`^rgba\\(${Ii},${Ii},${Ii},${vo}\\)$`), vF = new RegExp(`^rgba\\(${wr},${wr},${wr},${vo}\\)$`), gF = new RegExp(`^hsl\\(${vo},${wr},${wr}\\)$`), bF = new RegExp(`^hsla\\(${vo},${wr},${wr},${vo}\\)$`), Nm = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
qd(Zo, go, { copy(e7) {
  return Object.assign(new this.constructor(), this, e7);
}, displayable() {
  return this.rgb().displayable();
}, hex: Cm, formatHex: Cm, formatHex8: _F, formatHsl: wF, formatRgb: jm, toString: jm });
function Cm() {
  return this.rgb().formatHex();
}
function _F() {
  return this.rgb().formatHex8();
}
function wF() {
  return Mw(this).formatHsl();
}
function jm() {
  return this.rgb().formatRgb();
}
function go(e7) {
  var t, r;
  return e7 = (e7 + "").trim().toLowerCase(), (t = dF.exec(e7)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Bm(t) : r === 3 ? new Ae(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? hs(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? hs(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pF.exec(e7)) ? new Ae(t[1], t[2], t[3], 1) : (t = yF.exec(e7)) ? new Ae(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = mF.exec(e7)) ? hs(t[1], t[2], t[3], t[4]) : (t = vF.exec(e7)) ? hs(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = gF.exec(e7)) ? Lm(t[1], t[2] / 100, t[3] / 100, 1) : (t = bF.exec(e7)) ? Lm(t[1], t[2] / 100, t[3] / 100, t[4]) : Nm.hasOwnProperty(e7) ? Bm(Nm[e7]) : e7 === "transparent" ? new Ae(NaN, NaN, NaN, 0) : null;
}
function Bm(e7) {
  return new Ae(e7 >> 16 & 255, e7 >> 8 & 255, e7 & 255, 1);
}
function hs(e7, t, r, n) {
  return n <= 0 && (e7 = t = r = NaN), new Ae(e7, t, r, n);
}
function SF(e7) {
  return e7 instanceof Zo || (e7 = go(e7)), e7 ? (e7 = e7.rgb(), new Ae(e7.r, e7.g, e7.b, e7.opacity)) : new Ae();
}
function Hf(e7, t, r, n) {
  return arguments.length === 1 ? SF(e7) : new Ae(e7, t, r, n ?? 1);
}
function Ae(e7, t, r, n) {
  this.r = +e7, this.g = +t, this.b = +r, this.opacity = +n;
}
qd(Ae, Hf, Dw(Zo, { brighter(e7) {
  return e7 = e7 == null ? Tc : Math.pow(Tc, e7), new Ae(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? mo : Math.pow(mo, e7), new Ae(this.r * e7, this.g * e7, this.b * e7, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Ae(kn(this.r), kn(this.g), kn(this.b), Ic(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Rm, formatHex: Rm, formatHex8: OF, formatRgb: km, toString: km }));
function Rm() {
  return `#${Mn(this.r)}${Mn(this.g)}${Mn(this.b)}`;
}
function OF() {
  return `#${Mn(this.r)}${Mn(this.g)}${Mn(this.b)}${Mn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function km() {
  const e7 = Ic(this.opacity);
  return `${e7 === 1 ? "rgb(" : "rgba("}${kn(this.r)}, ${kn(this.g)}, ${kn(this.b)}${e7 === 1 ? ")" : `, ${e7})`}`;
}
function Ic(e7) {
  return isNaN(e7) ? 1 : Math.max(0, Math.min(1, e7));
}
function kn(e7) {
  return Math.max(0, Math.min(255, Math.round(e7) || 0));
}
function Mn(e7) {
  return e7 = kn(e7), (e7 < 16 ? "0" : "") + e7.toString(16);
}
function Lm(e7, t, r, n) {
  return n <= 0 ? e7 = t = r = NaN : r <= 0 || r >= 1 ? e7 = t = NaN : t <= 0 && (e7 = NaN), new ar(e7, t, r, n);
}
function Mw(e7) {
  if (e7 instanceof ar) return new ar(e7.h, e7.s, e7.l, e7.opacity);
  if (e7 instanceof Zo || (e7 = go(e7)), !e7) return new ar();
  if (e7 instanceof ar) return e7;
  e7 = e7.rgb();
  var t = e7.r / 255, r = e7.g / 255, n = e7.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new ar(o, s, c, e7.opacity);
}
function xF(e7, t, r, n) {
  return arguments.length === 1 ? Mw(e7) : new ar(e7, t, r, n ?? 1);
}
function ar(e7, t, r, n) {
  this.h = +e7, this.s = +t, this.l = +r, this.opacity = +n;
}
qd(ar, xF, Dw(Zo, { brighter(e7) {
  return e7 = e7 == null ? Tc : Math.pow(Tc, e7), new ar(this.h, this.s, this.l * e7, this.opacity);
}, darker(e7) {
  return e7 = e7 == null ? mo : Math.pow(mo, e7), new ar(this.h, this.s, this.l * e7, this.opacity);
}, rgb() {
  var e7 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e7) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Ae(jl(e7 >= 240 ? e7 - 240 : e7 + 120, i, n), jl(e7, i, n), jl(e7 < 120 ? e7 + 240 : e7 - 120, i, n), this.opacity);
}, clamp() {
  return new ar(Fm(this.h), ds(this.s), ds(this.l), Ic(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e7 = Ic(this.opacity);
  return `${e7 === 1 ? "hsl(" : "hsla("}${Fm(this.h)}, ${ds(this.s) * 100}%, ${ds(this.l) * 100}%${e7 === 1 ? ")" : `, ${e7})`}`;
} }));
function Fm(e7) {
  return e7 = (e7 || 0) % 360, e7 < 0 ? e7 + 360 : e7;
}
function ds(e7) {
  return Math.max(0, Math.min(1, e7 || 0));
}
function jl(e7, t, r) {
  return (e7 < 60 ? t + (r - t) * e7 / 60 : e7 < 180 ? r : e7 < 240 ? t + (r - t) * (240 - e7) / 60 : t) * 255;
}
const Hd = (e7) => () => e7;
function AF(e7, t) {
  return function(r) {
    return e7 + r * t;
  };
}
function PF(e7, t, r) {
  return e7 = Math.pow(e7, r), t = Math.pow(t, r) - e7, r = 1 / r, function(n) {
    return Math.pow(e7 + n * t, r);
  };
}
function TF(e7) {
  return (e7 = +e7) == 1 ? Nw : function(t, r) {
    return r - t ? PF(t, r, e7) : Hd(isNaN(t) ? r : t);
  };
}
function Nw(e7, t) {
  var r = t - e7;
  return r ? AF(e7, r) : Hd(isNaN(e7) ? t : e7);
}
const Um = function e3(t) {
  var r = TF(t);
  function n(i, a) {
    var o = r((i = Hf(i)).r, (a = Hf(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = Nw(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e3, n;
}(1);
function IF(e7, t) {
  t || (t = []);
  var r = e7 ? Math.min(t.length, e7.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e7[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function EF(e7) {
  return ArrayBuffer.isView(e7) && !(e7 instanceof DataView);
}
function $F(e7, t) {
  var r = t ? t.length : 0, n = e7 ? Math.min(r, e7.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = _a(e7[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function DF(e7, t) {
  var r = /* @__PURE__ */ new Date();
  return e7 = +e7, t = +t, function(n) {
    return r.setTime(e7 * (1 - n) + t * n), r;
  };
}
function Ec(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return e7 * (1 - r) + t * r;
  };
}
function MF(e7, t) {
  var r = {}, n = {}, i;
  (e7 === null || typeof e7 != "object") && (e7 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e7 ? r[i] = _a(e7[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Kf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bl = new RegExp(Kf.source, "g");
function NF(e7) {
  return function() {
    return e7;
  };
}
function CF(e7) {
  return function(t) {
    return e7(t) + "";
  };
}
function jF(e7, t) {
  var r = Kf.lastIndex = Bl.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e7 = e7 + "", t = t + ""; (n = Kf.exec(e7)) && (i = Bl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Ec(n, i) })), r = Bl.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? CF(c[0].x) : NF(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function _a(e7, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Hd(t) : (r === "number" ? Ec : r === "string" ? (n = go(t)) ? (t = n, Um) : jF : t instanceof go ? Um : t instanceof Date ? DF : EF(t) ? IF : Array.isArray(t) ? $F : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? MF : Ec)(e7, t);
}
function Kd(e7, t) {
  return e7 = +e7, t = +t, function(r) {
    return Math.round(e7 * (1 - r) + t * r);
  };
}
function BF(e7, t) {
  t === void 0 && (t = e7, e7 = _a);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e7(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function RF(e7) {
  return function() {
    return e7;
  };
}
function $c(e7) {
  return +e7;
}
var zm = [0, 1];
function ge(e7) {
  return e7;
}
function Yf(e7, t) {
  return (t -= e7 = +e7) ? function(r) {
    return (r - e7) / t;
  } : RF(isNaN(t) ? NaN : 0.5);
}
function kF(e7, t) {
  var r;
  return e7 > t && (r = e7, e7 = t, t = r), function(n) {
    return Math.max(e7, Math.min(t, n));
  };
}
function LF(e7, t, r) {
  var n = e7[0], i = e7[1], a = t[0], o = t[1];
  return i < n ? (n = Yf(i, n), a = r(o, a)) : (n = Yf(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function FF(e7, t, r) {
  var n = Math.min(e7.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e7[n] < e7[0] && (e7 = e7.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = Yf(e7[o], e7[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = Qo(e7, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function ts(e7, t) {
  return t.domain(e7.domain()).range(e7.range()).interpolate(e7.interpolate()).clamp(e7.clamp()).unknown(e7.unknown());
}
function zu() {
  var e7 = zm, t = zm, r = _a, n, i, a, o = ge, s, c, u;
  function l() {
    var h = Math.min(e7.length, t.length);
    return o !== ge && (o = kF(e7[0], e7[h - 1])), s = h > 2 ? FF : LF, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(e7.map(n), t, r)))(n(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(t, e7.map(n), Ec)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e7 = Array.from(h, $c), l()) : e7.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), l()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), r = Kd, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? true : ge, l()) : o !== ge;
  }, f.interpolate = function(h) {
    return arguments.length ? (r = h, l()) : r;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, d) {
    return n = h, i = d, l();
  };
}
function Yd() {
  return zu()(ge, ge);
}
function UF(e7) {
  return Math.abs(e7 = Math.round(e7)) >= 1e21 ? e7.toLocaleString("en").replace(/,/g, "") : e7.toString(10);
}
function Dc(e7, t) {
  if (!isFinite(e7) || e7 === 0) return null;
  var r = (e7 = t ? e7.toExponential(t - 1) : e7.toExponential()).indexOf("e"), n = e7.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e7.slice(r + 1)];
}
function zi(e7) {
  return e7 = Dc(Math.abs(e7)), e7 ? e7[1] : NaN;
}
function zF(e7, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e7[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); ) s = e7[o = (o + 1) % e7.length];
    return a.reverse().join(t);
  };
}
function WF(e7) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e7[+r];
    });
  };
}
var VF = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bo(e7) {
  if (!(t = VF.exec(e7))) throw new Error("invalid format: " + e7);
  var t;
  return new Xd({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
bo.prototype = Xd.prototype;
function Xd(e7) {
  this.fill = e7.fill === void 0 ? " " : e7.fill + "", this.align = e7.align === void 0 ? ">" : e7.align + "", this.sign = e7.sign === void 0 ? "-" : e7.sign + "", this.symbol = e7.symbol === void 0 ? "" : e7.symbol + "", this.zero = !!e7.zero, this.width = e7.width === void 0 ? void 0 : +e7.width, this.comma = !!e7.comma, this.precision = e7.precision === void 0 ? void 0 : +e7.precision, this.trim = !!e7.trim, this.type = e7.type === void 0 ? "" : e7.type + "";
}
Xd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function GF(e7) {
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
var Mc;
function qF(e7, t) {
  var r = Dc(e7, t);
  if (!r) return Mc = void 0, e7.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Mc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Dc(e7, Math.max(0, t + a - 1))[0];
}
function Wm(e7, t) {
  var r = Dc(e7, t);
  if (!r) return e7 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Vm = { "%": (e7, t) => (e7 * 100).toFixed(t), b: (e7) => Math.round(e7).toString(2), c: (e7) => e7 + "", d: UF, e: (e7, t) => e7.toExponential(t), f: (e7, t) => e7.toFixed(t), g: (e7, t) => e7.toPrecision(t), o: (e7) => Math.round(e7).toString(8), p: (e7, t) => Wm(e7 * 100, t), r: Wm, s: qF, X: (e7) => Math.round(e7).toString(16).toUpperCase(), x: (e7) => Math.round(e7).toString(16) };
function Gm(e7) {
  return e7;
}
var qm = Array.prototype.map, Hm = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function HF(e7) {
  var t = e7.grouping === void 0 || e7.thousands === void 0 ? Gm : zF(qm.call(e7.grouping, Number), e7.thousands + ""), r = e7.currency === void 0 ? "" : e7.currency[0] + "", n = e7.currency === void 0 ? "" : e7.currency[1] + "", i = e7.decimal === void 0 ? "." : e7.decimal + "", a = e7.numerals === void 0 ? Gm : WF(qm.call(e7.numerals, String)), o = e7.percent === void 0 ? "%" : e7.percent + "", s = e7.minus === void 0 ? "\u2212" : e7.minus + "", c = e7.nan === void 0 ? "NaN" : e7.nan + "";
  function u(f, h) {
    f = bo(f);
    var d = f.fill, y = f.align, m = f.sign, p = f.symbol, g = f.zero, _ = f.width, w = f.comma, S = f.precision, v = f.trim, b = f.type;
    b === "n" ? (w = true, b = "g") : Vm[b] || (S === void 0 && (S = 12), v = true, b = "g"), (g || d === "0" && y === "=") && (g = true, d = "0", y = "=");
    var O = (h && h.prefix !== void 0 ? h.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), P = (p === "$" ? n : /[%p]/.test(b) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""), T = Vm[b], $ = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function E(I) {
      var j = O, N = P, D, C, R;
      if (b === "c") N = T(I) + N, I = "";
      else {
        I = +I;
        var F = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? c : T(Math.abs(I), S), v && (I = GF(I)), F && +I == 0 && m !== "+" && (F = false), j = (F ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + j, N = (b === "s" && !isNaN(I) && Mc !== void 0 ? Hm[8 + Mc / 3] : "") + N + (F && m === "(" ? ")" : ""), $) {
          for (D = -1, C = I.length; ++D < C; ) if (R = I.charCodeAt(D), 48 > R || R > 57) {
            N = (R === 46 ? i + I.slice(D + 1) : I.slice(D)) + N, I = I.slice(0, D);
            break;
          }
        }
      }
      w && !g && (I = t(I, 1 / 0));
      var U = j.length + I.length + N.length, G = U < _ ? new Array(_ - U + 1).join(d) : "";
      switch (w && g && (I = t(G + I, G.length ? _ - N.length : 1 / 0), G = ""), y) {
        case "<":
          I = j + I + N + G;
          break;
        case "=":
          I = j + G + I + N;
          break;
        case "^":
          I = G.slice(0, U = G.length >> 1) + j + I + N + G.slice(U);
          break;
        default:
          I = G + j + I + N;
          break;
      }
      return a(I);
    }
    return E.toString = function() {
      return f + "";
    }, E;
  }
  function l(f, h) {
    var d = Math.max(-8, Math.min(8, Math.floor(zi(h) / 3))) * 3, y = Math.pow(10, -d), m = u((f = bo(f), f.type = "f", f), { suffix: Hm[8 + d / 3] });
    return function(p) {
      return m(y * p);
    };
  }
  return { format: u, formatPrefix: l };
}
var ps, Jd, Cw;
KF({ thousands: ",", grouping: [3], currency: ["$", ""] });
function KF(e7) {
  return ps = HF(e7), Jd = ps.format, Cw = ps.formatPrefix, ps;
}
function YF(e7) {
  return Math.max(0, -zi(Math.abs(e7)));
}
function XF(e7, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zi(t) / 3))) * 3 - zi(Math.abs(e7)));
}
function JF(e7, t) {
  return e7 = Math.abs(e7), t = Math.abs(t) - e7, Math.max(0, zi(t) - zi(e7)) + 1;
}
function jw(e7, t, r, n) {
  var i = Gf(e7, t, r), a;
  switch (n = bo(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e7), Math.abs(t));
      return n.precision == null && !isNaN(a = XF(i, o)) && (n.precision = a), Cw(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = JF(i, Math.max(Math.abs(e7), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = YF(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Jd(n);
}
function bn(e7) {
  var t = e7.domain;
  return e7.ticks = function(r) {
    var n = t();
    return Wf(n[0], n[n.length - 1], r ?? 10);
  }, e7.tickFormat = function(r, n) {
    var i = t();
    return jw(i[0], i[i.length - 1], r ?? 10, n);
  }, e7.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Vf(o, s, r), u === c) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      c = u;
    }
    return e7;
  }, e7;
}
function Nc() {
  var e7 = Yd();
  return e7.copy = function() {
    return ts(e7, Nc());
  }, Ze.apply(e7, arguments), bn(e7);
}
function Bw(e7) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e7 = Array.from(n, $c), r) : e7.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Bw(e7).unknown(t);
  }, e7 = arguments.length ? Array.from(e7, $c) : [0, 1], bn(r);
}
function Rw(e7, t) {
  e7 = e7.slice();
  var r = 0, n = e7.length - 1, i = e7[r], a = e7[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e7[r] = t.floor(i), e7[n] = t.ceil(a), e7;
}
function Km(e7) {
  return Math.log(e7);
}
function Ym(e7) {
  return Math.exp(e7);
}
function QF(e7) {
  return -Math.log(-e7);
}
function ZF(e7) {
  return -Math.exp(-e7);
}
function tU(e7) {
  return isFinite(e7) ? +("1e" + e7) : e7 < 0 ? 0 : e7;
}
function eU(e7) {
  return e7 === 10 ? tU : e7 === Math.E ? Math.exp : (t) => Math.pow(e7, t);
}
function rU(e7) {
  return e7 === Math.E ? Math.log : e7 === 10 && Math.log10 || e7 === 2 && Math.log2 || (e7 = Math.log(e7), (t) => Math.log(t) / e7);
}
function Xm(e7) {
  return (t, r) => -e7(-t, r);
}
function Qd(e7) {
  const t = e7(Km, Ym), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = rU(n), a = eU(n), r()[0] < 0 ? (i = Xm(i), a = Xm(a), e7(QF, ZF)) : e7(Km, Ym), t;
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
      g.length * 2 < p && (g = Wf(u, l, p));
    } else g = Wf(h, d, Math.min(d - h, p)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = bo(c)).precision == null && (c.trim = true), c = Jd(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(Rw(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function kw() {
  const e7 = Qd(zu()).domain([1, 10]);
  return e7.copy = () => ts(e7, kw()).base(e7.base()), Ze.apply(e7, arguments), e7;
}
function Jm(e7) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e7));
  };
}
function Qm(e7) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e7;
  };
}
function Zd(e7) {
  var t = 1, r = e7(Jm(t), Qm(t));
  return r.constant = function(n) {
    return arguments.length ? e7(Jm(t = +n), Qm(t)) : t;
  }, bn(r);
}
function Lw() {
  var e7 = Zd(zu());
  return e7.copy = function() {
    return ts(e7, Lw()).constant(e7.constant());
  }, Ze.apply(e7, arguments);
}
function Zm(e7) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e7) : Math.pow(t, e7);
  };
}
function nU(e7) {
  return e7 < 0 ? -Math.sqrt(-e7) : Math.sqrt(e7);
}
function iU(e7) {
  return e7 < 0 ? -e7 * e7 : e7 * e7;
}
function tp(e7) {
  var t = e7(ge, ge), r = 1;
  function n() {
    return r === 1 ? e7(ge, ge) : r === 0.5 ? e7(nU, iU) : e7(Zm(r), Zm(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, bn(t);
}
function ep() {
  var e7 = tp(zu());
  return e7.copy = function() {
    return ts(e7, ep()).exponent(e7.exponent());
  }, Ze.apply(e7, arguments), e7;
}
function aU() {
  return ep.apply(null, arguments).exponent(0.5);
}
function tv(e7) {
  return Math.sign(e7) * e7 * e7;
}
function oU(e7) {
  return Math.sign(e7) * Math.sqrt(Math.abs(e7));
}
function Fw() {
  var e7 = Yd(), t = [0, 1], r = false, n;
  function i(a) {
    var o = oU(e7(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e7.invert(tv(a));
  }, i.domain = function(a) {
    return arguments.length ? (e7.domain(a), i) : e7.domain();
  }, i.range = function(a) {
    return arguments.length ? (e7.range((t = Array.from(a, $c)).map(tv)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e7.clamp(a), i) : e7.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Fw(e7.domain(), t).round(r).clamp(e7.clamp()).unknown(n);
  }, Ze.apply(i, arguments), bn(i);
}
function Uw() {
  var e7 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = fF(e7, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Qo(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e7[0], s < r.length ? r[s] : e7[e7.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e7.slice();
    e7 = [];
    for (let s of o) s != null && !isNaN(s = +s) && e7.push(s);
    return e7.sort(ln), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Uw().domain(e7).range(t).unknown(n);
  }, Ze.apply(a, arguments);
}
function zw() {
  var e7 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[Qo(n, c, 0, r)] : a;
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
    return zw().domain([e7, t]).range(i).unknown(a);
  }, Ze.apply(bn(o), arguments);
}
function Ww() {
  var e7 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Qo(e7, a, 0, n)] : r;
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
    return Ww().domain(e7).range(t).unknown(r);
  }, Ze.apply(i, arguments);
}
const Rl = /* @__PURE__ */ new Date(), kl = /* @__PURE__ */ new Date();
function ae(e7, t, r, n) {
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
  }, i.filter = (a) => ae((o) => {
    if (o >= o) for (; e7(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o) if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --s >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (Rl.setTime(+a), kl.setTime(+o), e7(Rl), e7(kl), Math.floor(r(Rl, kl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Cc = ae(() => {
}, (e7, t) => {
  e7.setTime(+e7 + t);
}, (e7, t) => t - e7);
Cc.every = (e7) => (e7 = Math.floor(e7), !isFinite(e7) || !(e7 > 0) ? null : e7 > 1 ? ae((t) => {
  t.setTime(Math.floor(t / e7) * e7);
}, (t, r) => {
  t.setTime(+t + r * e7);
}, (t, r) => (r - t) / e7) : Cc);
Cc.range;
const Br = 1e3, qe = Br * 60, Rr = qe * 60, zr = Rr * 24, rp = zr * 7, ev = zr * 30, Ll = zr * 365, Nn = ae((e7) => {
  e7.setTime(e7 - e7.getMilliseconds());
}, (e7, t) => {
  e7.setTime(+e7 + t * Br);
}, (e7, t) => (t - e7) / Br, (e7) => e7.getUTCSeconds());
Nn.range;
const np = ae((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * Br);
}, (e7, t) => {
  e7.setTime(+e7 + t * qe);
}, (e7, t) => (t - e7) / qe, (e7) => e7.getMinutes());
np.range;
const ip = ae((e7) => {
  e7.setUTCSeconds(0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * qe);
}, (e7, t) => (t - e7) / qe, (e7) => e7.getUTCMinutes());
ip.range;
const ap = ae((e7) => {
  e7.setTime(e7 - e7.getMilliseconds() - e7.getSeconds() * Br - e7.getMinutes() * qe);
}, (e7, t) => {
  e7.setTime(+e7 + t * Rr);
}, (e7, t) => (t - e7) / Rr, (e7) => e7.getHours());
ap.range;
const op = ae((e7) => {
  e7.setUTCMinutes(0, 0, 0);
}, (e7, t) => {
  e7.setTime(+e7 + t * Rr);
}, (e7, t) => (t - e7) / Rr, (e7) => e7.getUTCHours());
op.range;
const es = ae((e7) => e7.setHours(0, 0, 0, 0), (e7, t) => e7.setDate(e7.getDate() + t), (e7, t) => (t - e7 - (t.getTimezoneOffset() - e7.getTimezoneOffset()) * qe) / zr, (e7) => e7.getDate() - 1);
es.range;
const Wu = ae((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / zr, (e7) => e7.getUTCDate() - 1);
Wu.range;
const Vw = ae((e7) => {
  e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCDate(e7.getUTCDate() + t);
}, (e7, t) => (t - e7) / zr, (e7) => Math.floor(e7 / zr));
Vw.range;
function Zn(e7) {
  return ae((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e7) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * qe) / rp);
}
const Vu = Zn(0), jc = Zn(1), sU = Zn(2), cU = Zn(3), Wi = Zn(4), uU = Zn(5), lU = Zn(6);
Vu.range;
jc.range;
sU.range;
cU.range;
Wi.range;
uU.range;
lU.range;
function ti(e7) {
  return ae((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e7) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / rp);
}
const Gu = ti(0), Bc = ti(1), fU = ti(2), hU = ti(3), Vi = ti(4), dU = ti(5), pU = ti(6);
Gu.range;
Bc.range;
fU.range;
hU.range;
Vi.range;
dU.range;
pU.range;
const sp = ae((e7) => {
  e7.setDate(1), e7.setHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setMonth(e7.getMonth() + t);
}, (e7, t) => t.getMonth() - e7.getMonth() + (t.getFullYear() - e7.getFullYear()) * 12, (e7) => e7.getMonth());
sp.range;
const cp = ae((e7) => {
  e7.setUTCDate(1), e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCMonth(e7.getUTCMonth() + t);
}, (e7, t) => t.getUTCMonth() - e7.getUTCMonth() + (t.getUTCFullYear() - e7.getUTCFullYear()) * 12, (e7) => e7.getUTCMonth());
cp.range;
const Wr = ae((e7) => {
  e7.setMonth(0, 1), e7.setHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setFullYear(e7.getFullYear() + t);
}, (e7, t) => t.getFullYear() - e7.getFullYear(), (e7) => e7.getFullYear());
Wr.every = (e7) => !isFinite(e7 = Math.floor(e7)) || !(e7 > 0) ? null : ae((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e7) * e7), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e7);
});
Wr.range;
const Vr = ae((e7) => {
  e7.setUTCMonth(0, 1), e7.setUTCHours(0, 0, 0, 0);
}, (e7, t) => {
  e7.setUTCFullYear(e7.getUTCFullYear() + t);
}, (e7, t) => t.getUTCFullYear() - e7.getUTCFullYear(), (e7) => e7.getUTCFullYear());
Vr.every = (e7) => !isFinite(e7 = Math.floor(e7)) || !(e7 > 0) ? null : ae((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e7) * e7), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e7);
});
Vr.range;
function Gw(e7, t, r, n, i, a) {
  const o = [[Nn, 1, Br], [Nn, 5, 5 * Br], [Nn, 15, 15 * Br], [Nn, 30, 30 * Br], [a, 1, qe], [a, 5, 5 * qe], [a, 15, 15 * qe], [a, 30, 30 * qe], [i, 1, Rr], [i, 3, 3 * Rr], [i, 6, 6 * Rr], [i, 12, 12 * Rr], [n, 1, zr], [n, 2, 2 * zr], [r, 1, rp], [t, 1, ev], [t, 3, 3 * ev], [e7, 1, Ll]];
  function s(u, l, f) {
    const h = l < u;
    h && ([u, l] = [l, u]);
    const d = f && typeof f.range == "function" ? f : c(u, l, f), y = d ? d.range(u, +l + 1) : [];
    return h ? y.reverse() : y;
  }
  function c(u, l, f) {
    const h = Math.abs(l - u) / f, d = Vd(([, , p]) => p).right(o, h);
    if (d === o.length) return e7.every(Gf(u / Ll, l / Ll, f));
    if (d === 0) return Cc.every(Math.max(Gf(u, l, f), 1));
    const [y, m] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(m);
  }
  return [s, c];
}
const [yU, mU] = Gw(Vr, cp, Gu, Vw, op, ip), [vU, gU] = Gw(Wr, sp, Vu, es, ap, np);
function Fl(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
    return t.setFullYear(e7.y), t;
  }
  return new Date(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L);
}
function Ul(e7) {
  if (0 <= e7.y && e7.y < 100) {
    var t = new Date(Date.UTC(-1, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
    return t.setUTCFullYear(e7.y), t;
  }
  return new Date(Date.UTC(e7.y, e7.m, e7.d, e7.H, e7.M, e7.S, e7.L));
}
function $a(e7, t, r) {
  return { y: e7, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function bU(e7) {
  var t = e7.dateTime, r = e7.date, n = e7.time, i = e7.periods, a = e7.days, o = e7.shortDays, s = e7.months, c = e7.shortMonths, u = Da(i), l = Ma(i), f = Da(a), h = Ma(a), d = Da(o), y = Ma(o), m = Da(s), p = Ma(s), g = Da(c), _ = Ma(c), w = { a: R, A: F, b: U, B: G, c: null, d: sv, e: sv, f: zU, g: QU, G: t3, H: LU, I: FU, j: UU, L: qw, m: WU, M: VU, p: rt, q: W, Q: lv, s: fv, S: GU, u: qU, U: HU, V: KU, w: YU, W: XU, x: null, X: null, y: JU, Y: ZU, Z: e32, "%": uv }, S = { a: it, A: Rt, b: Kt, B: $e, c: null, d: cv, e: cv, f: a3, g: y3, G: v3, H: r3, I: n3, j: i3, L: Kw, m: o3, M: s3, p: Sn, q: _e, Q: lv, s: fv, S: c3, u: u3, U: l3, V: f3, w: h3, W: d3, x: null, X: null, y: p3, Y: m3, Z: g3, "%": uv }, v = { a: $, A: E, b: I, B: j, c: N, d: av, e: av, f: jU, g: iv, G: nv, H: ov, I: ov, j: DU, L: CU, m: $U, M: MU, p: T, q: EU, Q: RU, s: kU, S: NU, u: xU, U: AU, V: PU, w: OU, W: TU, x: D, X: C, y: iv, Y: nv, Z: IU, "%": BU };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), S.x = b(r, S), S.X = b(n, S), S.c = b(t, S);
  function b(z, lt) {
    return function(ft) {
      var k = [], Vt = -1, bt = 0, Jt = z.length, Qt, we, Qr;
      for (ft instanceof Date || (ft = /* @__PURE__ */ new Date(+ft)); ++Vt < Jt; ) z.charCodeAt(Vt) === 37 && (k.push(z.slice(bt, Vt)), (we = rv[Qt = z.charAt(++Vt)]) != null ? Qt = z.charAt(++Vt) : we = Qt === "e" ? " " : "0", (Qr = lt[Qt]) && (Qt = Qr(ft, we)), k.push(Qt), bt = Vt + 1);
      return k.push(z.slice(bt, Vt)), k.join("");
    };
  }
  function O(z, lt) {
    return function(ft) {
      var k = $a(1900, void 0, 1), Vt = P(k, z, ft += "", 0), bt, Jt;
      if (Vt != ft.length) return null;
      if ("Q" in k) return new Date(k.Q);
      if ("s" in k) return new Date(k.s * 1e3 + ("L" in k ? k.L : 0));
      if (lt && !("Z" in k) && (k.Z = 0), "p" in k && (k.H = k.H % 12 + k.p * 12), k.m === void 0 && (k.m = "q" in k ? k.q : 0), "V" in k) {
        if (k.V < 1 || k.V > 53) return null;
        "w" in k || (k.w = 1), "Z" in k ? (bt = Ul($a(k.y, 0, 1)), Jt = bt.getUTCDay(), bt = Jt > 4 || Jt === 0 ? Bc.ceil(bt) : Bc(bt), bt = Wu.offset(bt, (k.V - 1) * 7), k.y = bt.getUTCFullYear(), k.m = bt.getUTCMonth(), k.d = bt.getUTCDate() + (k.w + 6) % 7) : (bt = Fl($a(k.y, 0, 1)), Jt = bt.getDay(), bt = Jt > 4 || Jt === 0 ? jc.ceil(bt) : jc(bt), bt = es.offset(bt, (k.V - 1) * 7), k.y = bt.getFullYear(), k.m = bt.getMonth(), k.d = bt.getDate() + (k.w + 6) % 7);
      } else ("W" in k || "U" in k) && ("w" in k || (k.w = "u" in k ? k.u % 7 : "W" in k ? 1 : 0), Jt = "Z" in k ? Ul($a(k.y, 0, 1)).getUTCDay() : Fl($a(k.y, 0, 1)).getDay(), k.m = 0, k.d = "W" in k ? (k.w + 6) % 7 + k.W * 7 - (Jt + 5) % 7 : k.w + k.U * 7 - (Jt + 6) % 7);
      return "Z" in k ? (k.H += k.Z / 100 | 0, k.M += k.Z % 100, Ul(k)) : Fl(k);
    };
  }
  function P(z, lt, ft, k) {
    for (var Vt = 0, bt = lt.length, Jt = ft.length, Qt, we; Vt < bt; ) {
      if (k >= Jt) return -1;
      if (Qt = lt.charCodeAt(Vt++), Qt === 37) {
        if (Qt = lt.charAt(Vt++), we = v[Qt in rv ? lt.charAt(Vt++) : Qt], !we || (k = we(z, ft, k)) < 0) return -1;
      } else if (Qt != ft.charCodeAt(k++)) return -1;
    }
    return k;
  }
  function T(z, lt, ft) {
    var k = u.exec(lt.slice(ft));
    return k ? (z.p = l.get(k[0].toLowerCase()), ft + k[0].length) : -1;
  }
  function $(z, lt, ft) {
    var k = d.exec(lt.slice(ft));
    return k ? (z.w = y.get(k[0].toLowerCase()), ft + k[0].length) : -1;
  }
  function E(z, lt, ft) {
    var k = f.exec(lt.slice(ft));
    return k ? (z.w = h.get(k[0].toLowerCase()), ft + k[0].length) : -1;
  }
  function I(z, lt, ft) {
    var k = g.exec(lt.slice(ft));
    return k ? (z.m = _.get(k[0].toLowerCase()), ft + k[0].length) : -1;
  }
  function j(z, lt, ft) {
    var k = m.exec(lt.slice(ft));
    return k ? (z.m = p.get(k[0].toLowerCase()), ft + k[0].length) : -1;
  }
  function N(z, lt, ft) {
    return P(z, t, lt, ft);
  }
  function D(z, lt, ft) {
    return P(z, r, lt, ft);
  }
  function C(z, lt, ft) {
    return P(z, n, lt, ft);
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
  function G(z) {
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
  function Kt(z) {
    return c[z.getUTCMonth()];
  }
  function $e(z) {
    return s[z.getUTCMonth()];
  }
  function Sn(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function _e(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return { format: function(z) {
    var lt = b(z += "", w);
    return lt.toString = function() {
      return z;
    }, lt;
  }, parse: function(z) {
    var lt = O(z += "", false);
    return lt.toString = function() {
      return z;
    }, lt;
  }, utcFormat: function(z) {
    var lt = b(z += "", S);
    return lt.toString = function() {
      return z;
    }, lt;
  }, utcParse: function(z) {
    var lt = O(z += "", true);
    return lt.toString = function() {
      return z;
    }, lt;
  } };
}
var rv = { "-": "", _: " ", 0: "0" }, se = /^\s*\d+/, _U = /^%/, wU = /[\\^$*+?|[\]().{}]/g;
function wt(e7, t, r) {
  var n = e7 < 0 ? "-" : "", i = (n ? -e7 : e7) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function SU(e7) {
  return e7.replace(wU, "\\$&");
}
function Da(e7) {
  return new RegExp("^(?:" + e7.map(SU).join("|") + ")", "i");
}
function Ma(e7) {
  return new Map(e7.map((t, r) => [t.toLowerCase(), r]));
}
function OU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 1));
  return n ? (e7.w = +n[0], r + n[0].length) : -1;
}
function xU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 1));
  return n ? (e7.u = +n[0], r + n[0].length) : -1;
}
function AU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.U = +n[0], r + n[0].length) : -1;
}
function PU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.V = +n[0], r + n[0].length) : -1;
}
function TU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.W = +n[0], r + n[0].length) : -1;
}
function nv(e7, t, r) {
  var n = se.exec(t.slice(r, r + 4));
  return n ? (e7.y = +n[0], r + n[0].length) : -1;
}
function iv(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function IU(e7, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e7.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function EU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 1));
  return n ? (e7.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function $U(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.m = n[0] - 1, r + n[0].length) : -1;
}
function av(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.d = +n[0], r + n[0].length) : -1;
}
function DU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 3));
  return n ? (e7.m = 0, e7.d = +n[0], r + n[0].length) : -1;
}
function ov(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.H = +n[0], r + n[0].length) : -1;
}
function MU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.M = +n[0], r + n[0].length) : -1;
}
function NU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 2));
  return n ? (e7.S = +n[0], r + n[0].length) : -1;
}
function CU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 3));
  return n ? (e7.L = +n[0], r + n[0].length) : -1;
}
function jU(e7, t, r) {
  var n = se.exec(t.slice(r, r + 6));
  return n ? (e7.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function BU(e7, t, r) {
  var n = _U.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function RU(e7, t, r) {
  var n = se.exec(t.slice(r));
  return n ? (e7.Q = +n[0], r + n[0].length) : -1;
}
function kU(e7, t, r) {
  var n = se.exec(t.slice(r));
  return n ? (e7.s = +n[0], r + n[0].length) : -1;
}
function sv(e7, t) {
  return wt(e7.getDate(), t, 2);
}
function LU(e7, t) {
  return wt(e7.getHours(), t, 2);
}
function FU(e7, t) {
  return wt(e7.getHours() % 12 || 12, t, 2);
}
function UU(e7, t) {
  return wt(1 + es.count(Wr(e7), e7), t, 3);
}
function qw(e7, t) {
  return wt(e7.getMilliseconds(), t, 3);
}
function zU(e7, t) {
  return qw(e7, t) + "000";
}
function WU(e7, t) {
  return wt(e7.getMonth() + 1, t, 2);
}
function VU(e7, t) {
  return wt(e7.getMinutes(), t, 2);
}
function GU(e7, t) {
  return wt(e7.getSeconds(), t, 2);
}
function qU(e7) {
  var t = e7.getDay();
  return t === 0 ? 7 : t;
}
function HU(e7, t) {
  return wt(Vu.count(Wr(e7) - 1, e7), t, 2);
}
function Hw(e7) {
  var t = e7.getDay();
  return t >= 4 || t === 0 ? Wi(e7) : Wi.ceil(e7);
}
function KU(e7, t) {
  return e7 = Hw(e7), wt(Wi.count(Wr(e7), e7) + (Wr(e7).getDay() === 4), t, 2);
}
function YU(e7) {
  return e7.getDay();
}
function XU(e7, t) {
  return wt(jc.count(Wr(e7) - 1, e7), t, 2);
}
function JU(e7, t) {
  return wt(e7.getFullYear() % 100, t, 2);
}
function QU(e7, t) {
  return e7 = Hw(e7), wt(e7.getFullYear() % 100, t, 2);
}
function ZU(e7, t) {
  return wt(e7.getFullYear() % 1e4, t, 4);
}
function t3(e7, t) {
  var r = e7.getDay();
  return e7 = r >= 4 || r === 0 ? Wi(e7) : Wi.ceil(e7), wt(e7.getFullYear() % 1e4, t, 4);
}
function e32(e7) {
  var t = e7.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + wt(t / 60 | 0, "0", 2) + wt(t % 60, "0", 2);
}
function cv(e7, t) {
  return wt(e7.getUTCDate(), t, 2);
}
function r3(e7, t) {
  return wt(e7.getUTCHours(), t, 2);
}
function n3(e7, t) {
  return wt(e7.getUTCHours() % 12 || 12, t, 2);
}
function i3(e7, t) {
  return wt(1 + Wu.count(Vr(e7), e7), t, 3);
}
function Kw(e7, t) {
  return wt(e7.getUTCMilliseconds(), t, 3);
}
function a3(e7, t) {
  return Kw(e7, t) + "000";
}
function o3(e7, t) {
  return wt(e7.getUTCMonth() + 1, t, 2);
}
function s3(e7, t) {
  return wt(e7.getUTCMinutes(), t, 2);
}
function c3(e7, t) {
  return wt(e7.getUTCSeconds(), t, 2);
}
function u3(e7) {
  var t = e7.getUTCDay();
  return t === 0 ? 7 : t;
}
function l3(e7, t) {
  return wt(Gu.count(Vr(e7) - 1, e7), t, 2);
}
function Yw(e7) {
  var t = e7.getUTCDay();
  return t >= 4 || t === 0 ? Vi(e7) : Vi.ceil(e7);
}
function f3(e7, t) {
  return e7 = Yw(e7), wt(Vi.count(Vr(e7), e7) + (Vr(e7).getUTCDay() === 4), t, 2);
}
function h3(e7) {
  return e7.getUTCDay();
}
function d3(e7, t) {
  return wt(Bc.count(Vr(e7) - 1, e7), t, 2);
}
function p3(e7, t) {
  return wt(e7.getUTCFullYear() % 100, t, 2);
}
function y3(e7, t) {
  return e7 = Yw(e7), wt(e7.getUTCFullYear() % 100, t, 2);
}
function m3(e7, t) {
  return wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function v3(e7, t) {
  var r = e7.getUTCDay();
  return e7 = r >= 4 || r === 0 ? Vi(e7) : Vi.ceil(e7), wt(e7.getUTCFullYear() % 1e4, t, 4);
}
function g3() {
  return "+0000";
}
function uv() {
  return "%";
}
function lv(e7) {
  return +e7;
}
function fv(e7) {
  return Math.floor(+e7 / 1e3);
}
var ai, Xw, Jw;
b3({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function b3(e7) {
  return ai = bU(e7), Xw = ai.format, ai.parse, Jw = ai.utcFormat, ai.utcParse, ai;
}
function _3(e7) {
  return new Date(e7);
}
function w3(e7) {
  return e7 instanceof Date ? +e7 : +/* @__PURE__ */ new Date(+e7);
}
function up(e7, t, r, n, i, a, o, s, c, u) {
  var l = Yd(), f = l.invert, h = l.domain, d = u(".%L"), y = u(":%S"), m = u("%I:%M"), p = u("%I %p"), g = u("%a %d"), _ = u("%b %d"), w = u("%B"), S = u("%Y");
  function v(b) {
    return (c(b) < b ? d : s(b) < b ? y : o(b) < b ? m : a(b) < b ? p : n(b) < b ? i(b) < b ? g : _ : r(b) < b ? w : S)(b);
  }
  return l.invert = function(b) {
    return new Date(f(b));
  }, l.domain = function(b) {
    return arguments.length ? h(Array.from(b, w3)) : h().map(_3);
  }, l.ticks = function(b) {
    var O = h();
    return e7(O[0], O[O.length - 1], b ?? 10);
  }, l.tickFormat = function(b, O) {
    return O == null ? v : u(O);
  }, l.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(Rw(O, b)) : l;
  }, l.copy = function() {
    return ts(l, up(e7, t, r, n, i, a, o, s, c, u));
  }, l;
}
function S3() {
  return Ze.apply(up(vU, gU, Wr, sp, Vu, es, ap, np, Nn, Xw).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function O3() {
  return Ze.apply(up(yU, mU, Vr, cp, Gu, Wu, op, ip, Nn, Jw).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function qu() {
  var e7 = 0, t = 1, r, n, i, a, o = ge, s = false, c;
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
  return u.range = l(_a), u.rangeRound = l(Kd), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e7), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function _n(e7, t) {
  return t.domain(e7.domain()).interpolator(e7.interpolator()).clamp(e7.clamp()).unknown(e7.unknown());
}
function Qw() {
  var e7 = bn(qu()(ge));
  return e7.copy = function() {
    return _n(e7, Qw());
  }, Jr.apply(e7, arguments);
}
function Zw() {
  var e7 = Qd(qu()).domain([1, 10]);
  return e7.copy = function() {
    return _n(e7, Zw()).base(e7.base());
  }, Jr.apply(e7, arguments);
}
function tS() {
  var e7 = Zd(qu());
  return e7.copy = function() {
    return _n(e7, tS()).constant(e7.constant());
  }, Jr.apply(e7, arguments);
}
function lp() {
  var e7 = tp(qu());
  return e7.copy = function() {
    return _n(e7, lp()).exponent(e7.exponent());
  }, Jr.apply(e7, arguments);
}
function x3() {
  return lp.apply(null, arguments).exponent(0.5);
}
function eS() {
  var e7 = [], t = ge;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Qo(e7, n, 1) - 1) / (e7.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e7.slice();
    e7 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e7.push(i);
    return e7.sort(ln), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e7.map((n, i) => t(i / (e7.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => lF(e7, a / n));
  }, r.copy = function() {
    return eS(t).domain(e7);
  }, Jr.apply(r, arguments);
}
function Hu() {
  var e7 = 0, t = 0.5, r = 1, n = 1, i, a, o, s, c, u = ge, l, f = false, h;
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
      var g, _, w;
      return arguments.length ? ([g, _, w] = p, u = BF(m, [g, _, w]), d) : [u(0), u(0.5), u(1)];
    };
  }
  return d.range = y(_a), d.rangeRound = y(Kd), d.unknown = function(m) {
    return arguments.length ? (h = m, d) : h;
  }, function(m) {
    return l = m, i = m(e7), a = m(t), o = m(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function rS() {
  var e7 = bn(Hu()(ge));
  return e7.copy = function() {
    return _n(e7, rS());
  }, Jr.apply(e7, arguments);
}
function nS() {
  var e7 = Qd(Hu()).domain([0.1, 1, 10]);
  return e7.copy = function() {
    return _n(e7, nS()).base(e7.base());
  }, Jr.apply(e7, arguments);
}
function iS() {
  var e7 = Zd(Hu());
  return e7.copy = function() {
    return _n(e7, iS()).constant(e7.constant());
  }, Jr.apply(e7, arguments);
}
function fp() {
  var e7 = tp(Hu());
  return e7.copy = function() {
    return _n(e7, fp()).exponent(e7.exponent());
  }, Jr.apply(e7, arguments);
}
function A3() {
  return fp.apply(null, arguments).exponent(0.5);
}
const hv = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: yo, scaleDiverging: rS, scaleDivergingLog: nS, scaleDivergingPow: fp, scaleDivergingSqrt: A3, scaleDivergingSymlog: iS, scaleIdentity: Bw, scaleImplicit: qf, scaleLinear: Nc, scaleLog: kw, scaleOrdinal: Gd, scalePoint: Ka, scalePow: ep, scaleQuantile: Uw, scaleQuantize: zw, scaleRadial: Fw, scaleSequential: Qw, scaleSequentialLog: Zw, scaleSequentialPow: lp, scaleSequentialQuantile: eS, scaleSequentialSqrt: x3, scaleSequentialSymlog: tS, scaleSqrt: aU, scaleSymlog: Lw, scaleThreshold: Ww, scaleTime: S3, scaleUtc: O3, tickFormat: jw }, Symbol.toStringTag, { value: "Module" }));
var P3 = fa;
function T3(e7, t, r) {
  for (var n = -1, i = e7.length; ++n < i; ) {
    var a = e7[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !P3(o) : r(o, s))) var s = o, c = a;
  }
  return c;
}
var aS = T3;
function I3(e7, t) {
  return e7 > t;
}
var E3 = I3, $3 = aS, D3 = E3, M3 = ba;
function N3(e7) {
  return e7 && e7.length ? $3(e7, M3, D3) : void 0;
}
var C3 = N3;
const sn = Bt(C3);
function j3(e7, t) {
  return e7 < t;
}
var B3 = j3, R3 = aS, k3 = B3, L3 = ba;
function F3(e7) {
  return e7 && e7.length ? R3(e7, L3, k3) : void 0;
}
var U3 = F3;
const Ku = Bt(U3);
var z3 = Ad, W3 = vn, V3 = yw, G3 = Ee;
function q3(e7, t) {
  var r = G3(e7) ? z3 : V3;
  return r(e7, W3(t));
}
var H3 = q3, K3 = dw, Y3 = H3;
function X3(e7, t) {
  return K3(Y3(e7, t), 1);
}
var J3 = X3;
const Q3 = Bt(J3);
var Z3 = Ld;
function t8(e7, t) {
  return Z3(e7, t);
}
var e8 = t8;
const qn = Bt(e8);
var wa = 1e9, r8 = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, dp, Ut = true, Je = "[DecimalError] ", Ln = Je + "Invalid argument: ", hp = Je + "Exponent out of range: ", Sa = Math.floor, En = Math.pow, n8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Be, oe = 1e7, Lt = 7, oS = 9007199254740991, Rc = Sa(oS / Lt), V = {};
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
  return Ur(this, new this.constructor(e7));
};
V.dividedToIntegerBy = V.idiv = function(e7) {
  var t = this, r = t.constructor;
  return Nt(Ur(t, new r(e7), 0, 1), r.precision);
};
V.equals = V.eq = function(e7) {
  return !this.cmp(e7);
};
V.exponent = function() {
  return Xt(this);
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
  else if (e7 = new n(e7), e7.s < 1 || e7.eq(Be)) throw Error(Je + "NaN");
  if (r.s < 1) throw Error(Je + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Be) ? new n(0) : (Ut = false, t = Ur(_o(r, a), _o(e7, a), a), Ut = true, Nt(t, i));
};
V.minus = V.sub = function(e7) {
  var t = this;
  return e7 = new t.constructor(e7), t.s == e7.s ? uS(t, e7) : sS(t, (e7.s = -e7.s, e7));
};
V.modulo = V.mod = function(e7) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e7 = new n(e7), !e7.s) throw Error(Je + "NaN");
  return r.s ? (Ut = false, t = Ur(r, e7, 0, 1).times(e7), Ut = true, r.minus(t)) : Nt(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return cS(this);
};
V.naturalLogarithm = V.ln = function() {
  return _o(this);
};
V.negated = V.neg = function() {
  var e7 = new this.constructor(this);
  return e7.s = -e7.s || 0, e7;
};
V.plus = V.add = function(e7) {
  var t = this;
  return e7 = new t.constructor(e7), t.s == e7.s ? sS(t, e7) : uS(t, (e7.s = -e7.s, e7));
};
V.precision = V.sd = function(e7) {
  var t, r, n, i = this;
  if (e7 !== void 0 && e7 !== !!e7 && e7 !== 1 && e7 !== 0) throw Error(Ln + e7);
  if (t = Xt(i) + 1, n = i.d.length - 1, r = n * Lt + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e7 && t > r ? t : r;
};
V.squareRoot = V.sqrt = function() {
  var e7, t, r, n, i, a, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Je + "NaN");
  }
  for (e7 = Xt(s), Ut = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = br(s.d), (t.length + e7) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e7 = Sa((e7 + 1) / 2) - (e7 < 0 || e7 % 2), i == 1 / 0 ? t = "5e" + e7 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e7), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Ur(s, a, o + 2)).times(0.5), br(a.d).slice(0, o) === (t = br(n.d)).slice(0, o)) {
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
    for (t = 0, i = c + n; i > n; ) s = a[i] + d[n] * h[i - n - 1] + t, a[i--] = s % oe | 0, t = s / oe | 0;
    a[i] = (a[i] + t) % oe | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e7.d = a, e7.e = r, Ut ? Nt(e7, f.precision) : e7;
};
V.toDecimalPlaces = V.todp = function(e7, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e7 === void 0 ? r : (Tr(e7, 0, wa), t === void 0 ? t = n.rounding : Tr(t, 0, 8), Nt(r, e7 + Xt(r) + 1, t));
};
V.toExponential = function(e7, t) {
  var r, n = this, i = n.constructor;
  return e7 === void 0 ? r = Hn(n, true) : (Tr(e7, 0, wa), t === void 0 ? t = i.rounding : Tr(t, 0, 8), n = Nt(new i(n), e7 + 1, t), r = Hn(n, true, e7 + 1)), r;
};
V.toFixed = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? Hn(i) : (Tr(e7, 0, wa), t === void 0 ? t = a.rounding : Tr(t, 0, 8), n = Nt(new a(i), e7 + Xt(i) + 1, t), r = Hn(n.abs(), false, e7 + Xt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
V.toInteger = V.toint = function() {
  var e7 = this, t = e7.constructor;
  return Nt(new t(e7), Xt(e7) + 1, t.rounding);
};
V.toNumber = function() {
  return +this;
};
V.toPower = V.pow = function(e7) {
  var t, r, n, i, a, o, s = this, c = s.constructor, u = 12, l = +(e7 = new c(e7));
  if (!e7.s) return new c(Be);
  if (s = new c(s), !s.s) {
    if (e7.s < 1) throw Error(Je + "Infinity");
    return s;
  }
  if (s.eq(Be)) return s;
  if (n = c.precision, e7.eq(Be)) return Nt(s, n);
  if (t = e7.e, r = e7.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= oS) {
      for (i = new c(Be), t = Math.ceil(n / Lt + 4), Ut = false; r % 2 && (i = i.times(s), pv(i.d, t)), r = Sa(r / 2), r !== 0; ) s = s.times(s), pv(s.d, t);
      return Ut = true, e7.s < 0 ? new c(Be).div(i) : Nt(i, n);
    }
  } else if (a < 0) throw Error(Je + "NaN");
  return a = a < 0 && e7.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ut = false, i = e7.times(_o(s, n + u)), Ut = true, i = cS(i), i.s = a, i;
};
V.toPrecision = function(e7, t) {
  var r, n, i = this, a = i.constructor;
  return e7 === void 0 ? (r = Xt(i), n = Hn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Tr(e7, 1, wa), t === void 0 ? t = a.rounding : Tr(t, 0, 8), i = Nt(new a(i), e7, t), r = Xt(i), n = Hn(i, e7 <= r || r <= a.toExpNeg, e7)), n;
};
V.toSignificantDigits = V.tosd = function(e7, t) {
  var r = this, n = r.constructor;
  return e7 === void 0 ? (e7 = n.precision, t = n.rounding) : (Tr(e7, 1, wa), t === void 0 ? t = n.rounding : Tr(t, 0, 8)), Nt(new n(r), e7, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e7 = this, t = Xt(e7), r = e7.constructor;
  return Hn(e7, t <= r.toExpNeg || t >= r.toExpPos);
};
function sS(e7, t) {
  var r, n, i, a, o, s, c, u, l = e7.constructor, f = l.precision;
  if (!e7.s || !t.s) return t.s || (t = new l(e7)), Ut ? Nt(t, f) : t;
  if (c = e7.d, u = t.d, o = e7.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, s = u.length) : (n = u, i = o, s = c.length), o = Math.ceil(f / Lt), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, a = u.length, s - a < 0 && (a = s, n = u, u = c, c = n), r = 0; a; ) r = (c[--a] = c[a] + u[a] + r) / oe | 0, c[a] %= oe;
  for (r && (c.unshift(r), ++i), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = i, Ut ? Nt(t, f) : t;
}
function Tr(e7, t, r) {
  if (e7 !== ~~e7 || e7 < t || e7 > r) throw Error(Ln + e7);
}
function br(e7) {
  var t, r, n, i = e7.length - 1, a = "", o = e7[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e7[t] + "", r = Lt - n.length, r && (a += an(r)), a += n;
    o = e7[t], n = o + "", r = Lt - n.length, r && (a += an(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Ur = /* @__PURE__ */ function() {
  function e7(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; ) a = n[s] * i + o, n[s] = a % oe | 0, o = a / oe | 0;
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
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * oe + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, c, u, l, f, h, d, y, m, p, g, _, w, S, v, b, O, P, T = n.constructor, $ = n.s == i.s ? 1 : -1, E = n.d, I = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(Je + "Division by zero");
    for (c = n.e - i.e, O = I.length, v = E.length, d = new T($), y = d.d = [], u = 0; I[u] == (E[u] || 0); ) ++u;
    if (I[u] > (E[u] || 0) && --c, a == null ? _ = a = T.precision : o ? _ = a + (Xt(n) - Xt(i)) + 1 : _ = a, _ < 0) return new T(0);
    if (_ = _ / Lt + 2 | 0, u = 0, O == 1) for (l = 0, I = I[0], _++; (u < v || l) && _--; u++) w = l * oe + (E[u] || 0), y[u] = w / I | 0, l = w % I | 0;
    else {
      for (l = oe / (I[0] + 1) | 0, l > 1 && (I = e7(I, l), E = e7(E, l), O = I.length, v = E.length), S = O, m = E.slice(0, O), p = m.length; p < O; ) m[p++] = 0;
      P = I.slice(), P.unshift(0), b = I[0], I[1] >= oe / 2 && ++b;
      do
        l = 0, s = t(I, m, O, p), s < 0 ? (g = m[0], O != p && (g = g * oe + (m[1] || 0)), l = g / b | 0, l > 1 ? (l >= oe && (l = oe - 1), f = e7(I, l), h = f.length, p = m.length, s = t(f, m, h, p), s == 1 && (l--, r(f, O < h ? P : I, h))) : (l == 0 && (s = l = 1), f = I.slice()), h = f.length, h < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(I, m, O, p), s < 1 && (l++, r(m, O < p ? P : I, p))), p = m.length) : s === 0 && (l++, m = [0]), y[u++] = l, s && m[0] ? m[p++] = E[S] || 0 : (m = [E[S]], p = 1);
      while ((S++ < v || m[0] !== void 0) && _--);
    }
    return y[0] || y.shift(), d.e = c, Nt(d, o ? a + Xt(d) + 1 : a);
  };
}();
function cS(e7, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e7.constructor, f = l.precision;
  if (Xt(e7) > 16) throw Error(hp + Xt(e7));
  if (!e7.s) return new l(Be);
  for (Ut = false, s = f, o = new l(0.03125); e7.abs().gte(0.1); ) e7 = e7.times(o), u += 5;
  for (n = Math.log(En(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(Be), l.precision = s; ; ) {
    if (i = Nt(i.times(e7), s), r = r.times(++c), o = a.plus(Ur(i, r, s)), br(o.d).slice(0, s) === br(a.d).slice(0, s)) {
      for (; u--; ) a = Nt(a.times(a), s);
      return l.precision = f, t == null ? (Ut = true, Nt(a, f)) : a;
    }
    a = o;
  }
}
function Xt(e7) {
  for (var t = e7.e * Lt, r = e7.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function zl(e7, t, r) {
  if (t > e7.LN10.sd()) throw Ut = true, r && (e7.precision = r), Error(Je + "LN10 precision limit exceeded");
  return Nt(new e7(e7.LN10), t);
}
function an(e7) {
  for (var t = ""; e7--; ) t += "0";
  return t;
}
function _o(e7, t) {
  var r, n, i, a, o, s, c, u, l, f = 1, h = 10, d = e7, y = d.d, m = d.constructor, p = m.precision;
  if (d.s < 1) throw Error(Je + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Be)) return new m(0);
  if (t == null ? (Ut = false, u = p) : u = t, d.eq(10)) return t == null && (Ut = true), zl(m, u);
  if (u += h, m.precision = u, r = br(y), n = r.charAt(0), a = Xt(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) d = d.times(e7), r = br(d.d), n = r.charAt(0), f++;
    a = Xt(d), n > 1 ? (d = new m("0." + r), a++) : d = new m(n + "." + r.slice(1));
  } else return c = zl(m, u + 2, p).times(a + ""), d = _o(new m(n + "." + r.slice(1)), u - h).plus(c), m.precision = p, t == null ? (Ut = true, Nt(d, p)) : d;
  for (s = o = d = Ur(d.minus(Be), d.plus(Be), u), l = Nt(d.times(d), u), i = 3; ; ) {
    if (o = Nt(o.times(l), u), c = s.plus(Ur(o, new m(i), u)), br(c.d).slice(0, u) === br(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(zl(m, u + 2, p).times(a + ""))), s = Ur(s, new m(f), u), m.precision = p, t == null ? (Ut = true, Nt(s, p)) : s;
    s = c, i += 2;
  }
}
function dv(e7, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e7.e = Sa(r / Lt), e7.d = [], n = (r + 1) % Lt, r < 0 && (n += Lt), n < i) {
      for (n && e7.d.push(+t.slice(0, n)), i -= Lt; n < i; ) e7.d.push(+t.slice(n, n += Lt));
      t = t.slice(n), n = Lt - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e7.d.push(+t), Ut && (e7.e > Rc || e7.e < -Rc)) throw Error(hp + r);
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
  if (r !== void 0 && (a = En(10, o - i - 1), s = u / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e7.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? u / En(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e7.s < 0 ? 8 : 7))), t < 1 || !f[0]) return c ? (a = Xt(e7), f.length = 1, t = t - a - 1, f[0] = En(10, (Lt - t % Lt) % Lt), e7.e = Sa(-t / Lt) || 0) : (f.length = 1, f[0] = e7.e = e7.s = 0), e7;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = En(10, Lt - n), f[l] = i > 0 ? (u / En(10, o - i) % En(10, i) | 0) * a : 0), c) for (; ; ) if (l == 0) {
    (f[0] += a) == oe && (f[0] = 1, ++e7.e);
    break;
  } else {
    if (f[l] += a, f[l] != oe) break;
    f[l--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ut && (e7.e > Rc || e7.e < -Rc)) throw Error(hp + Xt(e7));
  return e7;
}
function uS(e7, t) {
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
      for (a = i; a && c[--a] === 0; ) c[a] = oe - 1;
      --c[a], c[i] += oe;
    }
    c[i] -= f[i];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Ut ? Nt(t, d) : t) : new h(0);
}
function Hn(e7, t, r) {
  var n, i = Xt(e7), a = br(e7.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + an(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + an(-i - 1) + a, r && (n = r - o) > 0 && (a += an(n))) : i >= o ? (a += an(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + an(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += an(n))), e7.s < 0 ? "-" + a : a;
}
function pv(e7, t) {
  if (e7.length > t) return e7.length = t, true;
}
function lS(e7) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Ln + a);
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
      return dv(o, a.toString());
    } else if (typeof a != "string") throw Error(Ln + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, n8.test(a)) dv(o, a);
    else throw Error(Ln + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = lS, i.config = i.set = i8, e7 === void 0 && (e7 = {}), e7) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e7.hasOwnProperty(r = n[t++]) || (e7[r] = this[r]);
  return i.config(e7), i;
}
function i8(e7) {
  if (!e7 || typeof e7 != "object") throw Error(Je + "Object expected");
  var t, r, n, i = ["precision", 1, wa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e7[r = i[t]]) !== void 0) if (Sa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(Ln + r + ": " + n);
  if ((n = e7[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(Ln + r + ": " + n);
  return this;
}
var dp = lS(r8);
Be = new dp(1);
const Dt = dp;
function a8(e7) {
  return u8(e7) || c8(e7) || s8(e7) || o8();
}
function o8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s8(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Xf(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xf(e7, t);
  }
}
function c8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function u8(e7) {
  if (Array.isArray(e7)) return Xf(e7);
}
function Xf(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var l8 = function(t) {
  return t;
}, fS = {}, hS = function(t) {
  return t === fS;
}, yv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && hS(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, f8 = function e4(t, r) {
  return t === 1 ? r : yv(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== fS;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, yv(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++) c[u] = arguments[u];
      var l = i.map(function(f) {
        return hS(f) ? c.shift() : f;
      });
      return r.apply(void 0, a8(l).concat(c));
    }));
  });
}, Yu = function(t) {
  return f8(t.length, t);
}, Jf = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, h8 = Yu(function(e7, t) {
  return Array.isArray(t) ? t.map(e7) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e7);
}), d8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return l8;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, Qf = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, dS = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function p8(e7) {
  var t;
  return e7 === 0 ? t = 1 : t = Math.floor(new Dt(e7).abs().log(10).toNumber()) + 1, t;
}
function y8(e7, t, r) {
  for (var n = new Dt(e7), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var m8 = Yu(function(e7, t, r) {
  var n = +e7, i = +t;
  return n + r * (i - n);
}), v8 = Yu(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, (r - e7) / n;
}), g8 = Yu(function(e7, t, r) {
  var n = t - +e7;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e7) / n));
});
const Xu = { rangeStep: y8, getDigitCount: p8, interpolateNumber: m8, uninterpolateNumber: v8, uninterpolateTruncation: g8 };
function Zf(e7) {
  return w8(e7) || _8(e7) || pS(e7) || b8();
}
function b8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _8(e7) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e7)) return Array.from(e7);
}
function w8(e7) {
  if (Array.isArray(e7)) return th(e7);
}
function wo(e7, t) {
  return x8(e7) || O8(e7, t) || pS(e7, t) || S8();
}
function S8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return th(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return th(e7, t);
  }
}
function th(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function O8(e7, t) {
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
function x8(e7) {
  if (Array.isArray(e7)) return e7;
}
function yS(e7) {
  var t = wo(e7, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function mS(e7, t, r) {
  if (e7.lte(0)) return new Dt(0);
  var n = Xu.getDigitCount(e7.toNumber()), i = new Dt(10).pow(n), a = e7.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Dt(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new Dt(Math.ceil(c));
}
function A8(e7, t, r) {
  var n = 1, i = new Dt(e7);
  if (!i.isint() && r) {
    var a = Math.abs(e7);
    a < 1 ? (n = new Dt(10).pow(Xu.getDigitCount(e7) - 1), i = new Dt(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Dt(Math.floor(e7)));
  } else e7 === 0 ? i = new Dt(Math.floor((t - 1) / 2)) : r || (i = new Dt(Math.floor(e7)));
  var o = Math.floor((t - 1) / 2), s = d8(h8(function(c) {
    return i.add(new Dt(c - o).mul(n)).toNumber();
  }), Jf);
  return s(0, t);
}
function vS(e7, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e7) / (r - 1))) return { step: new Dt(0), tickMin: new Dt(0), tickMax: new Dt(0) };
  var a = mS(new Dt(t).sub(e7).div(r - 1), n, i), o;
  e7 <= 0 && t >= 0 ? o = new Dt(0) : (o = new Dt(e7).add(t).div(2), o = o.sub(new Dt(o).mod(a)));
  var s = Math.ceil(o.sub(e7).div(a).toNumber()), c = Math.ceil(new Dt(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? vS(e7, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Dt(s).mul(a)), tickMax: o.add(new Dt(c).mul(a)) });
}
function P8(e7) {
  var t = wo(e7, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = yS([r, n]), c = wo(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(Zf(Jf(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Zf(Jf(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? Qf(f) : f;
  }
  if (u === l) return A8(u, i, a);
  var h = vS(u, l, o, a), d = h.step, y = h.tickMin, m = h.tickMax, p = Xu.rangeStep(y, m.add(new Dt(0.1).mul(d)), d);
  return r > n ? Qf(p) : p;
}
function T8(e7, t) {
  var r = wo(e7, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = yS([n, i]), s = wo(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) return [n, i];
  if (c === u) return [c];
  var l = Math.max(t, 2), f = mS(new Dt(u).sub(c).div(l - 1), a, 0), h = [].concat(Zf(Xu.rangeStep(new Dt(c), new Dt(u).sub(new Dt(0.99).mul(f)), f)), [u]);
  return n > i ? Qf(h) : h;
}
var I8 = dS(P8), E8 = dS(T8), $8 = "Invariant failed";
function Kn(e7, t) {
  throw new Error($8);
}
var D8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Gi(e7) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e7);
}
function kc() {
  return kc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, kc.apply(this, arguments);
}
function M8(e7, t) {
  return B8(e7) || j8(e7, t) || C8(e7, t) || N8();
}
function N8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C8(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return mv(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mv(e7, t);
  }
}
function mv(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function j8(e7, t) {
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
function B8(e7) {
  if (Array.isArray(e7)) return e7;
}
function R8(e7, t) {
  if (e7 == null) return {};
  var r = k8(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function k8(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function L8(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function F8(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, _S(n.key), n);
  }
}
function U8(e7, t, r) {
  return t && F8(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function z8(e7, t, r) {
  return t = Lc(t), W8(e7, gS() ? Reflect.construct(t, r || [], Lc(e7).constructor) : t.apply(e7, r));
}
function W8(e7, t) {
  if (t && (Gi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return V8(e7);
}
function V8(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function gS() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gS = function() {
    return !!e7;
  })();
}
function Lc(e7) {
  return Lc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lc(e7);
}
function G8(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && eh(e7, t);
}
function eh(e7, t) {
  return eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, eh(e7, t);
}
function bS(e7, t, r) {
  return t = _S(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function _S(e7) {
  var t = q8(e7, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function q8(e7, t) {
  if (Gi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Oa = function(e7) {
  function t() {
    return L8(this, t), z8(this, t, arguments);
  }
  return G8(t, e7), U8(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, h = R8(n, D8), d = ct(h, false);
    this.props.direction === "x" && l.type !== "number" && Kn();
    var y = c.map(function(m) {
      var p = u(m, s), g = p.x, _ = p.y, w = p.value, S = p.errorVal;
      if (!S) return null;
      var v = [], b, O;
      if (Array.isArray(S)) {
        var P = M8(S, 2);
        b = P[0], O = P[1];
      } else b = O = S;
      if (a === "vertical") {
        var T = l.scale, $ = _ + i, E = $ + o, I = $ - o, j = T(w - b), N = T(w + O);
        v.push({ x1: N, y1: E, x2: N, y2: I }), v.push({ x1: j, y1: $, x2: N, y2: $ }), v.push({ x1: j, y1: E, x2: j, y2: I });
      } else if (a === "horizontal") {
        var D = f.scale, C = g + i, R = C - o, F = C + o, U = D(w - b), G = D(w + O);
        v.push({ x1: R, y1: G, x2: F, y2: G }), v.push({ x1: C, y1: U, x2: C, y2: G }), v.push({ x1: R, y1: U, x2: F, y2: U });
      }
      return A.createElement(St, kc({ className: "recharts-errorBar", key: "bar-".concat(v.map(function(rt) {
        return "".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2);
      })) }, d), v.map(function(rt) {
        return A.createElement("line", kc({}, rt, { key: "line-".concat(rt.x1, "-").concat(rt.x2, "-").concat(rt.y1, "-").concat(rt.y2) }));
      }));
    });
    return A.createElement(St, { className: "recharts-errorBars" }, y);
  } }]);
}(A.Component);
bS(Oa, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
bS(Oa, "displayName", "ErrorBar");
function So(e7) {
  "@babel/helpers - typeof";
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, So(e7);
}
function vv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pn(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vv(Object(r), true).forEach(function(n) {
      H8(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function H8(e7, t, r) {
  return t = K8(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function K8(e7) {
  var t = Y8(e7, "string");
  return So(t) == "symbol" ? t : t + "";
}
function Y8(e7, t) {
  if (So(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (So(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var wS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Ce(r, Rn);
  if (!o) return null;
  var s = Rn.defaultProps, c = s !== void 0 ? Pn(Pn({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var h = f.item, d = f.props, y = d.sectors || d.data || [];
    return l.concat(y.map(function(m) {
      return { type: o.props.iconType || h.props.legendType, value: m.name, color: m.fill, payload: m };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, h = f.type.defaultProps, d = h !== void 0 ? Pn(Pn({}, h), f.props) : {}, y = d.dataKey, m = d.name, p = d.legendType, g = d.hide;
    return { inactive: g, dataKey: y, type: c.iconType || p || "square", color: pp(f), value: m || y, payload: d };
  }), Pn(Pn(Pn({}, c), Rn.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function Oo(e7) {
  "@babel/helpers - typeof";
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e7);
}
function gv(e7) {
  return Z8(e7) || Q8(e7) || J8(e7) || X8();
}
function X8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J8(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return rh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rh(e7, t);
  }
}
function Q8(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function Z8(e7) {
  if (Array.isArray(e7)) return rh(e7);
}
function rh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function bv(e7, t) {
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
    t % 2 ? bv(Object(r), true).forEach(function(n) {
      Ei(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ei(e7, t, r) {
  return t = t6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function t6(e7) {
  var t = e6(e7, "string");
  return Oo(t) == "symbol" ? t : t + "";
}
function e6(e7, t) {
  if (Oo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function ie(e7, t, r) {
  return st(e7) || st(t) ? r : ne(t) ? Ke(e7, t, r) : ut(t) ? t(e7) : r;
}
function Ya(e7, t, r, n) {
  var i = Q3(e7, function(s) {
    return ie(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [Ku(a), sn(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !st(s);
  }) : i;
  return o.map(function(s) {
    return ne(s) || s instanceof Date ? s : "";
  });
}
var r6 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1) return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6) for (var c = a.range, u = 0; u < s; u++) {
    var l = u > 0 ? i[u - 1].coordinate : i[s - 1].coordinate, f = i[u].coordinate, h = u >= s - 1 ? i[0].coordinate : i[u + 1].coordinate, d = void 0;
    if (or(f - l) !== or(h - f)) {
      var y = [];
      if (or(h - f) === or(c[1] - c[0])) {
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
}, pp = function(t) {
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
}, n6 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++) for (var l = a[s[c]].stackGroups, f = Object.keys(l), h = 0, d = f.length; h < d; h++) {
    var y = l[f[h]], m = y.items, p = y.cateAxisId, g = m.filter(function(O) {
      return Lr(O.type).indexOf("Bar") >= 0;
    });
    if (g && g.length) {
      var _ = g[0].type.defaultProps, w = _ !== void 0 ? Gt(Gt({}, _), g[0].props) : g[0].props, S = w.barSize, v = w[p];
      o[v] || (o[v] = []);
      var b = st(S) ? r : S;
      o[v].push({ item: g[0], stackList: g.slice(1), barSize: st(b) ? void 0 : Gn(b, n, 0) });
    }
  }
  return o;
}, i6 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = Gn(r, i, 0, true), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = false, d = i / c, y = o.reduce(function(S, v) {
      return S + v.barSize || 0;
    }, 0);
    y += (c - 1) * u, y >= i && (y -= (c - 1) * u, u = 0), y >= i && d > 0 && (h = true, d *= 0.9, y = c * d);
    var m = (i - y) / 2 >> 0, p = { offset: m - u, size: 0 };
    l = o.reduce(function(S, v) {
      var b = { item: v.item, position: { offset: p.offset + p.size + u, size: h ? d : v.barSize } }, O = [].concat(gv(S), [b]);
      return p = O[O.length - 1].position, v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: p });
      }), O;
    }, f);
  } else {
    var g = Gn(n, i, 0, true);
    i - 2 * g - (c - 1) * u <= 0 && (u = 0);
    var _ = (i - 2 * g - (c - 1) * u) / c;
    _ > 1 && (_ >>= 0);
    var w = s === +s ? Math.min(_, s) : _;
    l = o.reduce(function(S, v, b) {
      var O = [].concat(gv(S), [{ item: v.item, position: { offset: g + (_ + u) * b + (_ - w) / 2, size: w } }]);
      return v.stackList && v.stackList.length && v.stackList.forEach(function(P) {
        O.push({ item: P, position: O[O.length - 1].position });
      }), O;
    }, f);
  }
  return l;
}, a6 = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = wS({ children: a, legendWidth: c });
  if (u) {
    var l = i || {}, f = l.width, h = l.height, d = u.align, y = u.verticalAlign, m = u.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && d !== "center" && L(t[d])) return Gt(Gt({}, t), {}, Ei({}, d, t[d] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && d === "center") && y !== "middle" && L(t[y])) return Gt(Gt({}, t), {}, Ei({}, y, t[y] + (h || 0)));
  }
  return t;
}, o6 = function(t, r, n) {
  return st(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, SS = function(t, r, n, i, a) {
  var o = r.props.children, s = Pe(o, Oa).filter(function(u) {
    return o6(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ie(l, n);
      if (st(f)) return u;
      var h = Array.isArray(f) ? [Ku(f), sn(f)] : [f, f], d = c.reduce(function(y, m) {
        var p = ie(l, m, 0), g = h[0] - Math.abs(Array.isArray(p) ? p[0] : p), _ = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(g, y[0]), Math.max(_, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], u[0]), Math.max(d[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, s6 = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return SS(t, s, n, a, i);
  }).filter(function(s) {
    return !st(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, OS = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && SS(t, c, u, i) || Ya(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(c, u) {
    return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++) s[u[l]] || (s[u[l]] = true, c.push(u[l]));
    return c;
  }, []);
}, xS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, AS = function(t, r, n, i) {
  if (i) return t.map(function(c) {
    return c.coordinate;
  });
  var a, o, s = t.map(function(c) {
    return c.coordinate === r && (a = true), c.coordinate === n && (o = true), c.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, kr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? or(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var h = a ? a.indexOf(f) : f;
      return { coordinate: i(h) + u, value: f, offset: u };
    });
    return l.filter(function(f) {
      return !ma(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, h) {
    return { coordinate: i(f) + u, value: f, index: h, offset: u };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return { coordinate: i(f) + u, value: f, offset: u };
  }) : i.domain().map(function(f, h) {
    return { coordinate: i(f) + u, value: a ? a[f] : f, index: h, offset: u };
  });
}, Wl = /* @__PURE__ */ new WeakMap(), ys = function(t, r) {
  if (typeof r != "function") return t;
  Wl.has(t) || Wl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Wl.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, c6 = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: yo(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: Nc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: Ka(), realScaleType: "point" } : a === "category" ? { scale: yo(), realScaleType: "band" } : { scale: Nc(), realScaleType: "linear" };
  if (Vn(i)) {
    var c = "scale".concat(Cu(i));
    return { scale: (hv[c] || Ka)(), realScaleType: hv[c] ? c : "point" };
  }
  return ut(i) ? { scale: i } : { scale: Ka(), realScaleType: "point" };
}, _v = 1e-4, u6 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - _v, o = Math.max(i[0], i[1]) + _v, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, l6 = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, f6 = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, h6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var c = ma(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
  }
}, d6 = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = ma(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, p6 = { sign: h6, expand: ED, none: Ri, silhouette: $D, wiggle: DD, positive: d6 }, y6 = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = p6[n], o = ID().keys(i).value(function(s, c) {
    return +ie(s, c, 0);
  }).order(Tf).offset(a);
  return o(t);
}, m6 = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? Gt(Gt({}, h.type.defaultProps), h.props) : h.props, m = y.stackId, p = y.hide;
    if (p) return f;
    var g = y[n], _ = f[g] || { hasStack: false, stackGroups: {} };
    if (ne(m)) {
      var w = _.stackGroups[m] || { numericAxisId: n, cateAxisId: i, items: [] };
      w.items.push(h), _.hasStack = true, _.stackGroups[m] = w;
    } else _.stackGroups[Qn("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
    return Gt(Gt({}, f), {}, Ei({}, g, _));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, h) {
    var d = u[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(m, p) {
        var g = d.stackGroups[p];
        return Gt(Gt({}, m), {}, Ei({}, p, { numericAxisId: n, cateAxisId: i, items: g.items, stackedData: y6(t, g.items, a) }));
      }, y);
    }
    return Gt(Gt({}, f), {}, Ei({}, h, d));
  }, l);
}, v6 = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var l = I8(u, a, s);
    return t.domain([Ku(l), sn(l)]), { niceTicks: l };
  }
  if (a && i === "number") {
    var f = t.domain(), h = E8(f, a, s);
    return { niceTicks: h };
  }
  return null;
};
function qi(e7) {
  var t = e7.axis, r = e7.ticks, n = e7.bandSize, i = e7.entry, a = e7.index, o = e7.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !st(i[t.dataKey])) {
      var s = lc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = ie(i, st(o) ? t.dataKey : o);
  return st(c) ? null : t.scale(c);
}
var wv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var c = ie(o, r.dataKey, r.domain[s]);
  return st(c) ? null : r.scale(c) - a / 2 + i;
}, g6 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, b6 = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Gt(Gt({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (ne(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, _6 = function(t) {
  return t.reduce(function(r, n) {
    return [Ku(n.concat([r[0]]).filter(L)), sn(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, PS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = _6(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Sv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ov = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, nh = function(t, r, n) {
  if (ut(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Sv.test(t[0])) {
    var a = +Sv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else ut(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Ov.test(t[1])) {
    var o = +Ov.exec(t[1])[1];
    i[1] = r[1] + o;
  } else ut(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Fc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Ud(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = a.length; s < c; s++) {
      var u = a[s], l = a[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, xv = function(t, r, n) {
  return !t || !t.length || qn(t, Ke(n, "type.defaultProps.domain")) ? r : t;
}, TS = function(t, r) {
  var n = t.type.defaultProps ? Gt(Gt({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return Gt(Gt({}, ct(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: pp(t), value: ie(r, i), type: c, payload: r, chartType: u, hide: l });
};
function xo(e7) {
  "@babel/helpers - typeof";
  return xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xo(e7);
}
function Av(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Av(Object(r), true).forEach(function(n) {
      w6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function w6(e7, t, r) {
  return t = S6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function S6(e7) {
  var t = O6(e7, "string");
  return xo(t) == "symbol" ? t : t + "";
}
function O6(e7, t) {
  if (xo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (xo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Uc = Math.PI / 180, x6 = function(t) {
  return t * 180 / Math.PI;
}, ue = function(t, r, n, i) {
  return { x: t + Math.cos(-Uc * i) * n, y: r + Math.sin(-Uc * i) * n };
}, A6 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, P6 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = A6({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: x6(u), angleInRadian: u };
}, T6 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, I6 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Tv = function(t, r) {
  var n = t.x, i = t.y, a = P6({ x: n, y: i }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u) return false;
  if (o === 0) return true;
  var l = T6(r), f = l.startAngle, h = l.endAngle, d = s, y;
  if (f <= h) {
    for (; d > h; ) d -= 360;
    for (; d < f; ) d += 360;
    y = d >= f && d <= h;
  } else {
    for (; d > f; ) d -= 360;
    for (; d < h; ) d += 360;
    y = d >= h && d <= f;
  }
  return y ? Pv(Pv({}, r), {}, { radius: o, angle: I6(d, r) }) : null;
};
function Ao(e7) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e7);
}
var E6 = ["offset"];
function $6(e7) {
  return C6(e7) || N6(e7) || M6(e7) || D6();
}
function D6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M6(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ih(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ih(e7, t);
  }
}
function N6(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function C6(e7) {
  if (Array.isArray(e7)) return ih(e7);
}
function ih(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function j6(e7, t) {
  if (e7 == null) return {};
  var r = B6(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function B6(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Iv(e7, t) {
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
    t % 2 ? Iv(Object(r), true).forEach(function(n) {
      R6(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function R6(e7, t, r) {
  return t = k6(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function k6(e7) {
  var t = L6(e7, "string");
  return Ao(t) == "symbol" ? t : t + "";
}
function L6(e7, t) {
  if (Ao(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Po.apply(this, arguments);
}
var F6 = function(t) {
  var r = t.value, n = t.formatter, i = st(t.children) ? r : t.children;
  return ut(n) ? n(i) : i;
}, U6 = function(t, r) {
  var n = or(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, z6 = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, h = c.outerRadius, d = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + h) / 2, g = U6(d, y), _ = g >= 0 ? 1 : -1, w, S;
  i === "insideStart" ? (w = d + _ * o, S = m) : i === "insideEnd" ? (w = y - _ * o, S = !m) : i === "end" && (w = y + _ * o, S = m), S = g <= 0 ? S : !S;
  var v = ue(u, l, p, w), b = ue(u, l, p, w + (S ? 1 : -1) * 359), O = "M".concat(v.x, ",").concat(v.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), P = st(t.id) ? Qn("recharts-radial-line-") : t.id;
  return A.createElement("text", Po({}, n, { dominantBaseline: "central", className: mt("recharts-radial-bar-label", s) }), A.createElement("defs", null, A.createElement("path", { id: P, d: O })), A.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, W6 = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, c = a.innerRadius, u = a.outerRadius, l = a.startAngle, f = a.endAngle, h = (l + f) / 2;
  if (i === "outside") {
    var d = ue(o, s, u + n, h), y = d.x, m = d.y;
    return { x: y, y: m, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
  var p = (c + u) / 2, g = ue(o, s, p, h), _ = g.x, w = g.y;
  return { x: _, y: w, textAnchor: "middle", verticalAnchor: "middle" };
}, V6 = function(t) {
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
  return a === "insideLeft" ? te({ x: s + p, y: c + l / 2, textAnchor: _, verticalAnchor: "middle" }, O) : a === "insideRight" ? te({ x: s + u - p, y: c + l / 2, textAnchor: g, verticalAnchor: "middle" }, O) : a === "insideTop" ? te({ x: s + u / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, O) : a === "insideBottom" ? te({ x: s + u / 2, y: c + l - h, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideTopLeft" ? te({ x: s + p, y: c + h, textAnchor: _, verticalAnchor: y }, O) : a === "insideTopRight" ? te({ x: s + u - p, y: c + h, textAnchor: g, verticalAnchor: y }, O) : a === "insideBottomLeft" ? te({ x: s + p, y: c + l - h, textAnchor: _, verticalAnchor: d }, O) : a === "insideBottomRight" ? te({ x: s + u - p, y: c + l - h, textAnchor: g, verticalAnchor: d }, O) : ha(a) && (L(a.x) || Dn(a.x)) && (L(a.y) || Dn(a.y)) ? te({ x: s + Gn(a.x, u), y: c + Gn(a.y, l), textAnchor: "end", verticalAnchor: "end" }, O) : te({ x: s + u / 2, y: c + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, G6 = function(t) {
  return "cx" in t && L(t.cx);
};
function fe(e7) {
  var t = e7.offset, r = t === void 0 ? 5 : t, n = j6(e7, E6), i = te({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, h = i.textBreakAll;
  if (!a || st(s) && st(c) && !B.isValidElement(u) && !ut(u)) return null;
  if (B.isValidElement(u)) return B.cloneElement(u, i);
  var d;
  if (ut(u)) {
    if (d = B.createElement(u, i), B.isValidElement(d)) return d;
  } else d = F6(i);
  var y = G6(a), m = ct(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return z6(i, d, m);
  var p = y ? W6(i) : V6(i);
  return A.createElement(Ac, Po({ className: mt("recharts-label", f) }, m, p, { breakAll: h }), d);
}
fe.displayName = "Label";
var IS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, h = t.y, d = t.top, y = t.left, m = t.width, p = t.height, g = t.clockWise, _ = t.labelViewBox;
  if (_) return _;
  if (L(m) && L(p)) {
    if (L(f) && L(h)) return { x: f, y: h, width: m, height: p };
    if (L(d) && L(y)) return { x: d, y, width: m, height: p };
  }
  return L(f) && L(h) ? { x: f, y: h, width: 0, height: 0 } : L(r) && L(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: l || c || s || 0, clockWise: g } : t.viewBox ? t.viewBox : {};
}, q6 = function(t, r) {
  return t ? t === true ? A.createElement(fe, { key: "label-implicit", viewBox: r }) : ne(t) ? A.createElement(fe, { key: "label-implicit", viewBox: r, value: t }) : B.isValidElement(t) ? t.type === fe ? B.cloneElement(t, { key: "label-implicit", viewBox: r }) : A.createElement(fe, { key: "label-implicit", content: t, viewBox: r }) : ut(t) ? A.createElement(fe, { key: "label-implicit", content: t, viewBox: r }) : ha(t) ? A.createElement(fe, Po({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, H6 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = IS(t), o = Pe(i, fe).map(function(c, u) {
    return B.cloneElement(c, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = q6(t.label, r || a);
  return [s].concat($6(o));
};
fe.parseViewBox = IS;
fe.renderCallByParent = H6;
function K6(e7) {
  var t = e7 == null ? 0 : e7.length;
  return t ? e7[t - 1] : void 0;
}
var Y6 = K6;
const X6 = Bt(Y6);
function To(e7) {
  "@babel/helpers - typeof";
  return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, To(e7);
}
var J6 = ["valueAccessor"], Q6 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function Z6(e7) {
  return nz(e7) || rz(e7) || ez(e7) || tz();
}
function tz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ez(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return ah(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ah(e7, t);
  }
}
function rz(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function nz(e7) {
  if (Array.isArray(e7)) return ah(e7);
}
function ah(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function zc() {
  return zc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, zc.apply(this, arguments);
}
function Ev(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $v(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ev(Object(r), true).forEach(function(n) {
      iz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Ev(Object(r)).forEach(function(n) {
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
  return To(t) == "symbol" ? t : t + "";
}
function oz(e7, t) {
  if (To(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (To(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Dv(e7, t) {
  if (e7 == null) return {};
  var r = sz(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function sz(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var cz = function(t) {
  return Array.isArray(t.value) ? X6(t.value) : t.value;
};
function Sr(e7) {
  var t = e7.valueAccessor, r = t === void 0 ? cz : t, n = Dv(e7, J6), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = Dv(n, Q6);
  return !i || !i.length ? null : A.createElement(St, { className: "recharts-label-list" }, i.map(function(l, f) {
    var h = st(a) ? r(l, f) : ie(l && l.payload, a), d = st(s) ? {} : { id: "".concat(s, "-").concat(f) };
    return A.createElement(fe, zc({}, ct(l, true), u, d, { parentViewBox: l.parentViewBox, value: h, textBreakAll: c, viewBox: fe.parseViewBox(st(o) ? l : $v($v({}, l), {}, { clockWise: o })), key: "label-".concat(f), index: f }));
  }));
}
Sr.displayName = "LabelList";
function uz(e7, t) {
  return e7 ? e7 === true ? A.createElement(Sr, { key: "labelList-implicit", data: t }) : A.isValidElement(e7) || ut(e7) ? A.createElement(Sr, { key: "labelList-implicit", data: t, content: e7 }) : ha(e7) ? A.createElement(Sr, zc({ data: t }, e7, { key: "labelList-implicit" })) : null : null;
}
function lz(e7, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e7 || !e7.children && r && !e7.label) return null;
  var n = e7.children, i = Pe(n, Sr).map(function(o, s) {
    return B.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = uz(e7.label, t);
  return [a].concat(Z6(i));
}
Sr.renderCallByParent = lz;
function Io(e7) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e7);
}
function oh() {
  return oh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, oh.apply(this, arguments);
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
function Nv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mv(Object(r), true).forEach(function(n) {
      fz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function fz(e7, t, r) {
  return t = hz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function hz(e7) {
  var t = dz(e7, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function dz(e7, t) {
  if (Io(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var pz = function(t, r) {
  var n = or(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, ms = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / Uc, h = u ? a : a + o * f, d = ue(r, n, l, h), y = ue(r, n, i, h), m = u ? a - o * f : a, p = ue(r, n, l * Math.cos(f * Uc), m);
  return { center: d, circleTangency: y, lineTangency: p, theta: f };
}, ES = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = pz(o, s), u = o + c, l = ue(r, n, a, o), f = ue(r, n, a, u), h = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > u), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var d = ue(r, n, i, o), y = ue(r, n, i, u);
    h += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= u), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, yz = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = or(l - u), h = ms({ cx: r, cy: n, radius: a, angle: u, sign: f, cornerRadius: o, cornerIsExternal: c }), d = h.circleTangency, y = h.lineTangency, m = h.theta, p = ms({ cx: r, cy: n, radius: a, angle: l, sign: -f, cornerRadius: o, cornerIsExternal: c }), g = p.circleTangency, _ = p.lineTangency, w = p.theta, S = c ? Math.abs(u - l) : Math.abs(u - l) - m - w;
  if (S < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : ES({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: l });
  var v = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, `
  `);
  if (i > 0) {
    var b = ms({ cx: r, cy: n, radius: i, angle: u, sign: f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), O = b.circleTangency, P = b.lineTangency, T = b.theta, $ = ms({ cx: r, cy: n, radius: i, angle: l, sign: -f, isExternal: true, cornerRadius: o, cornerIsExternal: c }), E = $.circleTangency, I = $.lineTangency, j = $.theta, N = c ? Math.abs(u - l) : Math.abs(u - l) - T - j;
    if (N < 0 && o === 0) return "".concat(v, "L").concat(r, ",").concat(n, "Z");
    v += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else v += "L".concat(r, ",").concat(n, "Z");
  return v;
}, mz = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, $S = function(t) {
  var r = Nv(Nv({}, mz), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, h = r.className;
  if (o < a || l === f) return null;
  var d = mt("recharts-sector", h), y = o - a, m = Gn(s, y, 0, true), p;
  return m > 0 && Math.abs(l - f) < 360 ? p = yz({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(m, y / 2), forceCornerRadius: c, cornerIsExternal: u, startAngle: l, endAngle: f }) : p = ES({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: f }), A.createElement("path", oh({}, ct(r, true), { className: d, d: p, role: "img" }));
};
function Eo(e7) {
  "@babel/helpers - typeof";
  return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Eo(e7);
}
function sh() {
  return sh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, sh.apply(this, arguments);
}
function Cv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cv(Object(r), true).forEach(function(n) {
      vz(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Cv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function vz(e7, t, r) {
  return t = gz(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function gz(e7) {
  var t = bz(e7, "string");
  return Eo(t) == "symbol" ? t : t + "";
}
function bz(e7, t) {
  if (Eo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var Bv = { curveBasisClosed: vD, curveBasisOpen: gD, curveBasis: mD, curveBumpX: rD, curveBumpY: nD, curveLinearClosed: bD, curveLinear: Bu, curveMonotoneX: _D, curveMonotoneY: wD, curveNatural: SD, curveStep: OD, curveStepAfter: AD, curveStepBefore: xD }, vs = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Na = function(t) {
  return t.x;
}, Ca = function(t) {
  return t.y;
}, _z = function(t, r) {
  if (ut(t)) return t;
  var n = "curve".concat(Cu(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Bv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Bv[n] || Bu;
}, wz = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? false : c, l = _z(n, s), f = u ? a.filter(function(m) {
    return vs(m);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = u ? o.filter(function(m) {
      return vs(m);
    }) : o, y = f.map(function(m, p) {
      return jv(jv({}, m), {}, { base: d[p] });
    });
    return s === "vertical" ? h = ss().y(Ca).x1(Na).x0(function(m) {
      return m.base.x;
    }) : h = ss().x(Na).y1(Ca).y0(function(m) {
      return m.base.y;
    }), h.defined(vs).curve(l), h(y);
  }
  return s === "vertical" && L(o) ? h = ss().y(Ca).x1(Na).x0(o) : L(o) ? h = ss().x(Na).y1(Ca).y0(o) : h = M_().x(Na).y(Ca), h.defined(vs).curve(l), h(f);
}, Fn = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? wz(t) : i;
  return B.createElement("path", sh({}, ct(t, false), fc(t), { className: mt("recharts-curve", r), d: o, ref: a }));
}, DS = { exports: {} }, Sz = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Oz = Sz, xz = Oz;
function MS() {
}
function NS() {
}
NS.resetWarningCache = MS;
var Az = function() {
  function e7(n, i, a, o, s, c) {
    if (c !== xz) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e7.isRequired = e7;
  function t() {
    return e7;
  }
  var r = { array: e7, bigint: e7, bool: e7, func: e7, number: e7, object: e7, string: e7, symbol: e7, any: e7, arrayOf: t, element: e7, elementType: e7, instanceOf: t, node: e7, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: NS, resetWarningCache: MS };
  return r.PropTypes = r, r;
};
DS.exports = Az();
var Pz = DS.exports;
const Ot = Bt(Pz), { getOwnPropertyNames: Tz, getOwnPropertySymbols: Iz } = Object, { hasOwnProperty: Ez } = Object.prototype;
function Vl(e7, t) {
  return function(n, i, a) {
    return e7(n, i, a) && t(n, i, a);
  };
}
function gs(e7) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e7(r, n, i);
    const { cache: a } = i, o = a.get(r), s = a.get(n);
    if (o && s) return o === n && s === r;
    a.set(r, n), a.set(n, r);
    const c = e7(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function $z(e7) {
  return e7 == null ? void 0 : e7[Symbol.toStringTag];
}
function Rv(e7) {
  return Tz(e7).concat(Iz(e7));
}
const Dz = Object.hasOwn || ((e7, t) => Ez.call(e7, t));
function ei(e7, t) {
  return e7 === t || !e7 && !t && e7 !== e7 && t !== t;
}
const Mz = "__v", Nz = "__o", Cz = "_owner", { getOwnPropertyDescriptor: kv, keys: Lv } = Object;
function jz(e7, t) {
  return e7.byteLength === t.byteLength && Wc(new Uint8Array(e7), new Uint8Array(t));
}
function Bz(e7, t, r) {
  let n = e7.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e7[n], t[n], n, n, e7, t, r)) return false;
  return true;
}
function Rz(e7, t) {
  return e7.byteLength === t.byteLength && Wc(new Uint8Array(e7.buffer, e7.byteOffset, e7.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function kz(e7, t) {
  return ei(e7.getTime(), t.getTime());
}
function Lz(e7, t) {
  return e7.name === t.name && e7.message === t.message && e7.cause === t.cause && e7.stack === t.stack;
}
function Fz(e7, t) {
  return e7 === t;
}
function Fv(e7, t, r) {
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
const Uz = ei;
function zz(e7, t, r) {
  const n = Lv(e7);
  let i = n.length;
  if (Lv(t).length !== i) return false;
  for (; i-- > 0; ) if (!CS(e7, t, r, n[i])) return false;
  return true;
}
function ja(e7, t, r) {
  const n = Rv(e7);
  let i = n.length;
  if (Rv(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !CS(e7, t, r, a) || (o = kv(e7, a), s = kv(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function Wz(e7, t) {
  return ei(e7.valueOf(), t.valueOf());
}
function Vz(e7, t) {
  return e7.source === t.source && e7.flags === t.flags;
}
function Uv(e7, t, r) {
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
function Wc(e7, t) {
  let r = e7.byteLength;
  if (t.byteLength !== r || e7.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e7[r] !== t[r]) return false;
  return true;
}
function Gz(e7, t) {
  return e7.hostname === t.hostname && e7.pathname === t.pathname && e7.protocol === t.protocol && e7.port === t.port && e7.hash === t.hash && e7.username === t.username && e7.password === t.password;
}
function CS(e7, t, r, n) {
  return (n === Cz || n === Nz || n === Mz) && (e7.$$typeof || t.$$typeof) ? true : Dz(t, n) && r.equals(e7[n], t[n], n, n, e7, t, r);
}
const qz = "[object ArrayBuffer]", Hz = "[object Arguments]", Kz = "[object Boolean]", Yz = "[object DataView]", Xz = "[object Date]", Jz = "[object Error]", Qz = "[object Map]", Zz = "[object Number]", t4 = "[object Object]", e42 = "[object RegExp]", r4 = "[object Set]", n4 = "[object String]", i4 = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, a4 = "[object URL]", o4 = Object.prototype.toString;
function s4({ areArrayBuffersEqual: e7, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: u, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: h, areUrlsEqual: d, unknownTagComparators: y }) {
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
    const v = o4.call(p);
    if (v === Xz) return n(p, g, _);
    if (v === e42) return l(p, g, _);
    if (v === Qz) return o(p, g, _);
    if (v === r4) return f(p, g, _);
    if (v === t4) return typeof p.then != "function" && typeof g.then != "function" && c(p, g, _);
    if (v === a4) return d(p, g, _);
    if (v === Jz) return i(p, g, _);
    if (v === Hz) return c(p, g, _);
    if (i4[v]) return h(p, g, _);
    if (v === qz) return e7(p, g, _);
    if (v === Yz) return r(p, g, _);
    if (v === Kz || v === Zz || v === n4) return u(p, g, _);
    if (y) {
      let b = y[v];
      if (!b) {
        const O = $z(p);
        O && (b = y[O]);
      }
      if (b) return b(p, g, _);
    }
    return false;
  };
}
function c4({ circular: e7, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: jz, areArraysEqual: r ? ja : Bz, areDataViewsEqual: Rz, areDatesEqual: kz, areErrorsEqual: Lz, areFunctionsEqual: Fz, areMapsEqual: r ? Vl(Fv, ja) : Fv, areNumbersEqual: Uz, areObjectsEqual: r ? ja : zz, arePrimitiveWrappersEqual: Wz, areRegExpsEqual: Vz, areSetsEqual: r ? Vl(Uv, ja) : Uv, areTypedArraysEqual: r ? Vl(Wc, ja) : Wc, areUrlsEqual: Gz, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e7) {
    const i = gs(n.areArraysEqual), a = gs(n.areMapsEqual), o = gs(n.areObjectsEqual), s = gs(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function u4(e7) {
  return function(t, r, n, i, a, o, s) {
    return e7(t, r, s);
  };
}
function l4({ circular: e7, comparator: t, createState: r, equals: n, strict: i }) {
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
const f4 = wn();
wn({ strict: true });
wn({ circular: true });
wn({ circular: true, strict: true });
wn({ createInternalComparator: () => ei });
wn({ strict: true, createInternalComparator: () => ei });
wn({ circular: true, createInternalComparator: () => ei });
wn({ circular: true, createInternalComparator: () => ei, strict: true });
function wn(e7 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e7, a = c4(e7), o = s4(a), s = r ? r(o) : u4(o);
  return l4({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function h4(e7) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e7);
}
function zv(e7) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e7(a), r = -1) : h4(i);
  };
  requestAnimationFrame(n);
}
function ch(e7) {
  "@babel/helpers - typeof";
  return ch = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ch(e7);
}
function d4(e7) {
  return v4(e7) || m4(e7) || y4(e7) || p4();
}
function p4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y4(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Wv(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wv(e7, t);
  }
}
function Wv(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function m4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function v4(e7) {
  if (Array.isArray(e7)) return e7;
}
function g4() {
  var e7 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = d4(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          zv(i.bind(null, u), c);
          return;
        }
        i(c), zv(i.bind(null, u));
        return;
      }
      ch(a) === "object" && (e7 = a, t(e7)), typeof a == "function" && a();
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
function $o(e7) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e7);
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
function Gv(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vv(Object(r), true).forEach(function(n) {
      jS(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function jS(e7, t, r) {
  return t = b4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function b4(e7) {
  var t = _4(e7, "string");
  return $o(t) === "symbol" ? t : String(t);
}
function _4(e7, t) {
  if ($o(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if ($o(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var w4 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, S4 = function(t) {
  return t;
}, O4 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Xa = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Gv(Gv({}, n), {}, jS({}, i, t(i, r[i])));
  }, {});
}, qv = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(O4(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function x4(e7, t) {
  return T4(e7) || P4(e7, t) || BS(e7, t) || A4();
}
function A4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P4(e7, t) {
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
function T4(e7) {
  if (Array.isArray(e7)) return e7;
}
function I4(e7) {
  return D4(e7) || $4(e7) || BS(e7) || E4();
}
function E4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return uh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e7, t);
  }
}
function $4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function D4(e7) {
  if (Array.isArray(e7)) return uh(e7);
}
function uh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var Vc = 1e-4, RS = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, kS = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Hv = function(t, r) {
  return function(n) {
    var i = RS(t, r);
    return kS(i, n);
  };
}, M4 = function(t, r) {
  return function(n) {
    var i = RS(t, r), a = [].concat(I4(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return kS(a, n);
  };
}, Kv = function() {
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
        }), l = x4(u, 4);
        i = l[0], a = l[1], o = l[2], s = l[3];
      }
    }
  }
  var f = Hv(i, o), h = Hv(a, s), d = M4(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, m = function(g) {
    for (var _ = g > 1 ? 1 : g, w = _, S = 0; S < 8; ++S) {
      var v = f(w) - _, b = d(w);
      if (Math.abs(v - _) < Vc || b < Vc) return h(w);
      w = y(w - v / b);
    }
    return h(w);
  };
  return m.isStepper = false, m;
}, N4 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, h) {
    var d = -(l - f) * n, y = h * a, m = h + (d - y) * s / 1e3, p = h * s / 1e3 + l;
    return Math.abs(p - f) < Vc && Math.abs(m) < Vc ? [f, 0] : [p, m];
  };
  return c.isStepper = true, c.dt = s, c;
}, C4 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Kv(i);
    case "spring":
      return N4();
    default:
      if (i.split("(")[0] === "cubic-bezier") return Kv(i);
  }
  return typeof i == "function" ? i : null;
};
function Do(e7) {
  "@babel/helpers - typeof";
  return Do = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Do(e7);
}
function Yv(e7) {
  return R4(e7) || B4(e7) || LS(e7) || j4();
}
function j4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B4(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function R4(e7) {
  if (Array.isArray(e7)) return fh(e7);
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
function ce(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xv(Object(r), true).forEach(function(n) {
      lh(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function lh(e7, t, r) {
  return t = k4(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function k4(e7) {
  var t = L4(e7, "string");
  return Do(t) === "symbol" ? t : String(t);
}
function L4(e7, t) {
  if (Do(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Do(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function F4(e7, t) {
  return W4(e7) || z4(e7, t) || LS(e7, t) || U4();
}
function U4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LS(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return fh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fh(e7, t);
  }
}
function fh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function z4(e7, t) {
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
function W4(e7) {
  if (Array.isArray(e7)) return e7;
}
var Gc = function(t, r, n) {
  return t + (r - t) * n;
}, hh = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, V4 = function e5(t, r, n) {
  var i = Xa(function(a, o) {
    if (hh(o)) {
      var s = t(o.from, o.to, o.velocity), c = F4(s, 2), u = c[0], l = c[1];
      return ce(ce({}, o), {}, { from: u, velocity: l });
    }
    return o;
  }, r);
  return n < 1 ? Xa(function(a, o) {
    return hh(o) ? ce(ce({}, o), {}, { velocity: Gc(o.velocity, i[a].velocity, n), from: Gc(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const G4 = function(e7, t, r, n, i) {
  var a = w4(e7, t), o = a.reduce(function(p, g) {
    return ce(ce({}, p), {}, lh({}, g, [e7[g], t[g]]));
  }, {}), s = a.reduce(function(p, g) {
    return ce(ce({}, p), {}, lh({}, g, { from: e7[g], velocity: 0, to: t[g] }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, h = function() {
    return Xa(function(g, _) {
      return _.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(hh).length;
  }, y = function(g) {
    u || (u = g);
    var _ = g - u, w = _ / r.dt;
    s = V4(r, s, w), i(ce(ce(ce({}, e7), t), h())), u = g, d() || (c = requestAnimationFrame(f));
  }, m = function(g) {
    l || (l = g);
    var _ = (g - l) / n, w = Xa(function(v, b) {
      return Gc.apply(void 0, Yv(b).concat([r(_)]));
    }, o);
    if (i(ce(ce(ce({}, e7), t), w)), _ < 1) c = requestAnimationFrame(f);
    else {
      var S = Xa(function(v, b) {
        return Gc.apply(void 0, Yv(b).concat([r(1)]));
      }, o);
      i(ce(ce(ce({}, e7), t), S));
    }
  };
  return f = r.isStepper ? y : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function Hi(e7) {
  "@babel/helpers - typeof";
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e7);
}
var q4 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function H4(e7, t) {
  if (e7 == null) return {};
  var r = K4(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function K4(e7, t) {
  if (e7 == null) return {};
  var r = {}, n = Object.keys(e7), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e7[i]);
  return r;
}
function Gl(e7) {
  return Q4(e7) || J4(e7) || X4(e7) || Y4();
}
function Y4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X4(e7, t) {
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
function Jv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tr(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jv(Object(r), true).forEach(function(n) {
      Ga(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Jv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Ga(e7, t, r) {
  return t = FS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function Z4(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tW(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, FS(n.key), n);
  }
}
function eW(e7, t, r) {
  return t && tW(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function FS(e7) {
  var t = rW(e7, "string");
  return Hi(t) === "symbol" ? t : String(t);
}
function rW(e7, t) {
  if (Hi(e7) !== "object" || e7 === null) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Hi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function nW(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && ph(e7, t);
}
function ph(e7, t) {
  return ph = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ph(e7, t);
}
function iW(e7) {
  var t = aW();
  return function() {
    var n = qc(e7), i;
    if (t) {
      var a = qc(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return yh(this, i);
  };
}
function yh(e7, t) {
  if (t && (Hi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return mh(e7);
}
function mh(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function aW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function qc(e7) {
  return qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qc(e7);
}
var cr = function(e7) {
  nW(r, e7);
  var t = iW(r);
  function r(n, i) {
    var a;
    Z4(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(mh(a)), a.changeStyle = a.changeStyle.bind(mh(a)), !s || d <= 0) return a.state = { style: {} }, typeof h == "function" && (a.state = { style: l }), yh(a);
    if (f && f.length) a.state = { style: f[0].style };
    else if (u) {
      if (typeof h == "function") return a.state = { style: u }, yh(a);
      a.state = { style: c ? Ga({}, c, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return eW(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, s = a.canBegin, c = a.attributeName, u = a.shouldReAnimate, l = a.to, f = a.from, h = this.state.style;
    if (s) {
      if (!o) {
        var d = { style: c ? Ga({}, c, l) : l };
        this.state && h && (c && h[c] !== l || !c && h !== l) && this.setState(d);
        return;
      }
      if (!(f4(i.to, l) && i.canBegin && i.isActive)) {
        var y = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var m = y || u ? f : i.to;
        if (this.state && h) {
          var p = { style: c ? Ga({}, c, m) : m };
          (c && h[c] !== m || !c && h !== m) && this.setState(p);
        }
        this.runAnimation(tr(tr({}, this.props), {}, { from: m, begin: 0 }));
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
    var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, h = i.onAnimationStart, d = G4(o, s, C4(u), c, this.changeStyle), y = function() {
      a.stopJSAnimation = d();
    };
    this.manager.start([h, l, y, c, f]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, h = f === void 0 ? 0 : f, d = function(m, p, g) {
      if (g === 0) return m;
      var _ = p.duration, w = p.easing, S = w === void 0 ? "ease" : w, v = p.style, b = p.properties, O = p.onAnimationEnd, P = g > 0 ? o[g - 1] : p, T = b || Object.keys(v);
      if (typeof S == "function" || S === "spring") return [].concat(Gl(m), [a.runJSAnimation.bind(a, { from: P.style, to: v, duration: _, easing: S }), _]);
      var $ = qv(T, _, S), E = tr(tr(tr({}, P.style), v), {}, { transition: $ });
      return [].concat(Gl(m), [E, _, O]).filter(S4);
    };
    return this.manager.start([c].concat(Gl(o.reduce(d, [l, Math.max(h, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = g4());
    var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof d == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (h.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var m = s ? Ga({}, s, c) : c, p = qv(Object.keys(m), o, u);
    y.start([l, a, tr(tr({}, m), {}, { transition: p }), o, f]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = H4(i, q4), u = B.Children.count(a), l = this.state.style;
    if (typeof a == "function") return a(l);
    if (!s || u === 0 || o <= 0) return a;
    var f = function(d) {
      var y = d.props, m = y.style, p = m === void 0 ? {} : m, g = y.className, _ = B.cloneElement(d, tr(tr({}, c), {}, { style: tr(tr({}, p), l), className: g }));
      return _;
    };
    return u === 1 ? f(B.Children.only(a)) : A.createElement("div", null, B.Children.map(a, function(h) {
      return f(h);
    }));
  } }]), r;
}(B.PureComponent);
cr.displayName = "Animate";
cr.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: true, canBegin: true, steps: [], onAnimationEnd: function() {
}, onAnimationStart: function() {
} };
cr.propTypes = { from: Ot.oneOfType([Ot.object, Ot.string]), to: Ot.oneOfType([Ot.object, Ot.string]), attributeName: Ot.string, duration: Ot.number, begin: Ot.number, easing: Ot.oneOfType([Ot.string, Ot.func]), steps: Ot.arrayOf(Ot.shape({ duration: Ot.number.isRequired, style: Ot.object.isRequired, easing: Ot.oneOfType([Ot.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ot.func]), properties: Ot.arrayOf("string"), onAnimationEnd: Ot.func })), children: Ot.oneOfType([Ot.node, Ot.func]), isActive: Ot.bool, canBegin: Ot.bool, onAnimationEnd: Ot.func, shouldReAnimate: Ot.bool, onAnimationStart: Ot.func, onAnimationReStart: Ot.func };
function Mo(e7) {
  "@babel/helpers - typeof";
  return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mo(e7);
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
function oW(e7, t) {
  return lW(e7) || uW(e7, t) || cW(e7, t) || sW();
}
function sW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cW(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Qv(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qv(e7, t);
  }
}
function Qv(e7, t) {
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
function Zv(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zv(Object(r), true).forEach(function(n) {
      fW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function fW(e7, t, r) {
  return t = hW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function hW(e7) {
  var t = dW(e7, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function dW(e7, t) {
  if (Mo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var eg = function(t, r, n, i, a) {
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
}, pW = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), h = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= h;
  }
  return false;
}, yW = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, yp = function(t) {
  var r = tg(tg({}, yW), t), n = B.useRef(), i = B.useState(-1), a = oW(i, 2), o = a[0], s = a[1];
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
  return _ ? A.createElement(cr, { canBegin: o > 0, from: { width: l, height: f, x: c, y: u }, to: { width: l, height: f, x: c, y: u }, duration: m, animationEasing: y, isActive: _ }, function(S) {
    var v = S.width, b = S.height, O = S.x, P = S.y;
    return A.createElement(cr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, isActive: g, easing: y }, A.createElement("path", Hc({}, ct(r, true), { className: w, d: eg(O, P, v, b, h), ref: n })));
  }) : A.createElement("path", Hc({}, ct(r, true), { className: w, d: eg(c, u, l, f, h) }));
};
function vh() {
  return vh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, vh.apply(this, arguments);
}
var Ju = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = mt("recharts-dot", a);
  return r === +r && n === +n && i === +i ? B.createElement("circle", vh({}, ct(t, false), fc(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function No(e7) {
  "@babel/helpers - typeof";
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e7);
}
var mW = ["x", "y", "top", "left", "width", "height", "className"];
function gh() {
  return gh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, gh.apply(this, arguments);
}
function rg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vW(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(r), true).forEach(function(n) {
      gW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function gW(e7, t, r) {
  return t = bW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function bW(e7) {
  var t = _W(e7, "string");
  return No(t) == "symbol" ? t : t + "";
}
function _W(e7, t) {
  if (No(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (No(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function wW(e7, t) {
  if (e7 == null) return {};
  var r = SW(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function SW(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var OW = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, xW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, h = t.height, d = h === void 0 ? 0 : h, y = t.className, m = wW(t, mW), p = vW({ x: n, y: a, top: s, left: u, width: f, height: d }, m);
  return !L(n) || !L(a) || !L(f) || !L(d) || !L(s) || !L(u) ? null : A.createElement("path", gh({}, ct(p, true), { className: mt("recharts-cross", y), d: OW(n, a, f, d, s, u) }));
}, AW = rw, PW = AW(Object.getPrototypeOf, Object), TW = PW, IW = Yr, EW = TW, $W = Xr, DW = "[object Object]", MW = Function.prototype, NW = Object.prototype, US = MW.toString, CW = NW.hasOwnProperty, jW = US.call(Object);
function BW(e7) {
  if (!$W(e7) || IW(e7) != DW) return false;
  var t = EW(e7);
  if (t === null) return true;
  var r = CW.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && US.call(r) == jW;
}
var RW = BW;
const kW = Bt(RW);
var LW = Yr, FW = Xr, UW = "[object Boolean]";
function zW(e7) {
  return e7 === true || e7 === false || FW(e7) && LW(e7) == UW;
}
var WW = zW;
const VW = Bt(WW);
function Co(e7) {
  "@babel/helpers - typeof";
  return Co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Co(e7);
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
function GW(e7, t) {
  return YW(e7) || KW(e7, t) || HW(e7, t) || qW();
}
function qW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HW(e7, t) {
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
function KW(e7, t) {
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
function YW(e7) {
  if (Array.isArray(e7)) return e7;
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
      XW(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function XW(e7, t, r) {
  return t = JW(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function JW(e7) {
  var t = QW(e7, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function QW(e7, t) {
  if (Co(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var og = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, ZW = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, t5 = function(t) {
  var r = ag(ag({}, ZW), t), n = B.useRef(), i = B.useState(-1), a = GW(i, 2), o = a[0], s = a[1];
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
  return g ? A.createElement(cr, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: h, x: c, y: u }, to: { upperWidth: l, lowerWidth: f, height: h, x: c, y: u }, duration: m, animationEasing: y, isActive: g }, function(w) {
    var S = w.upperWidth, v = w.lowerWidth, b = w.height, O = w.x, P = w.y;
    return A.createElement(cr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: p, duration: m, easing: y }, A.createElement("path", Kc({}, ct(r, true), { className: _, d: og(O, P, S, v, b), ref: n })));
  }) : A.createElement("g", null, A.createElement("path", Kc({}, ct(r, true), { className: _, d: og(c, u, l, f, h) })));
}, e52 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function jo(e7) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e7);
}
function r5(e7, t) {
  if (e7 == null) return {};
  var r = n5(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function n5(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function sg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yc(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), true).forEach(function(n) {
      i5(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function i5(e7, t, r) {
  return t = a5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function a5(e7) {
  var t = o5(e7, "string");
  return jo(t) == "symbol" ? t : t + "";
}
function o5(e7, t) {
  if (jo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (jo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function s5(e7, t) {
  return Yc(Yc({}, t), e7);
}
function c5(e7, t) {
  return e7 === "symbols";
}
function cg(e7) {
  var t = e7.shapeType, r = e7.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(yp, r);
    case "trapezoid":
      return A.createElement(t5, r);
    case "sector":
      return A.createElement($S, r);
    case "symbols":
      if (c5(t)) return A.createElement(ku, r);
      break;
    default:
      return null;
  }
}
function u5(e7) {
  return B.isValidElement(e7) ? e7.props : e7;
}
function bh(e7) {
  var t = e7.option, r = e7.shapeType, n = e7.propTransformer, i = n === void 0 ? s5 : n, a = e7.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e7.isActive, c = r5(e7, e52), u;
  if (B.isValidElement(t)) u = B.cloneElement(t, Yc(Yc({}, c), u5(t)));
  else if (ut(t)) u = t(c);
  else if (kW(t) && !VW(t)) {
    var l = i(t, c);
    u = A.createElement(cg, { shapeType: r, elementProps: l });
  } else {
    var f = c;
    u = A.createElement(cg, { shapeType: r, elementProps: f });
  }
  return s ? A.createElement(St, { className: o }, u) : u;
}
function Qu(e7, t) {
  return t != null && "trapezoids" in e7.props;
}
function Zu(e7, t) {
  return t != null && "sectors" in e7.props;
}
function Bo(e7, t) {
  return t != null && "points" in e7.props;
}
function l5(e7, t) {
  var r, n, i = e7.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e7.x === t.x, a = e7.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e7.y === t.y;
  return i && a;
}
function f5(e7, t) {
  var r = e7.endAngle === t.endAngle, n = e7.startAngle === t.startAngle;
  return r && n;
}
function h5(e7, t) {
  var r = e7.x === t.x, n = e7.y === t.y, i = e7.z === t.z;
  return r && n && i;
}
function d5(e7, t) {
  var r;
  return Qu(e7, t) ? r = l5 : Zu(e7, t) ? r = f5 : Bo(e7, t) && (r = h5), r;
}
function p5(e7, t) {
  var r;
  return Qu(e7, t) ? r = "trapezoids" : Zu(e7, t) ? r = "sectors" : Bo(e7, t) && (r = "points"), r;
}
function y5(e7, t) {
  if (Qu(e7, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Zu(e7, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Bo(e7, t) ? t.payload : {};
}
function m5(e7) {
  var t = e7.activeTooltipItem, r = e7.graphicalItem, n = e7.itemData, i = p5(r, t), a = y5(r, t), o = n.filter(function(c, u) {
    var l = qn(a, c), f = r.props[i].filter(function(y) {
      var m = d5(r, t);
      return m(y, t);
    }), h = r.props[i].indexOf(f[f.length - 1]), d = u === h;
    return l && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var v5 = Math.ceil, g5 = Math.max;
function b5(e7, t, r, n) {
  for (var i = -1, a = g5(v5((t - e7) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e7, e7 += r;
  return o;
}
var _5 = b5, w5 = ww, ug = 1 / 0, S5 = 17976931348623157e292;
function O5(e7) {
  if (!e7) return e7 === 0 ? e7 : 0;
  if (e7 = w5(e7), e7 === ug || e7 === -ug) {
    var t = e7 < 0 ? -1 : 1;
    return t * S5;
  }
  return e7 === e7 ? e7 : 0;
}
var zS = O5, x5 = _5, A5 = Uu, ql = zS;
function P5(e7) {
  return function(t, r, n) {
    return n && typeof n != "number" && A5(t, r, n) && (r = n = void 0), t = ql(t), r === void 0 ? (r = t, t = 0) : r = ql(r), n = n === void 0 ? t < r ? 1 : -1 : ql(n), x5(t, r, n, e7);
  };
}
var T5 = P5, I5 = T5, E5 = I5(), $5 = E5;
const Xc = Bt($5);
function Ro(e7) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e7);
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
function fg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), true).forEach(function(n) {
      WS(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function WS(e7, t, r) {
  return t = D5(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function D5(e7) {
  var t = M5(e7, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function M5(e7, t) {
  if (Ro(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var N5 = ["Webkit", "Moz", "O", "ms"], C5 = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = N5.reduce(function(a, o) {
    return fg(fg({}, a), {}, WS({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Ki(e7) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e7);
}
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Jc.apply(this, arguments);
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
function Hl(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hg(Object(r), true).forEach(function(n) {
      Ne(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function j5(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function dg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, GS(n.key), n);
  }
}
function B5(e7, t, r) {
  return t && dg(e7.prototype, t), r && dg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function R5(e7, t, r) {
  return t = Qc(t), k5(e7, VS() ? Reflect.construct(t, r || [], Qc(e7).constructor) : t.apply(e7, r));
}
function k5(e7, t) {
  if (t && (Ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return L5(e7);
}
function L5(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function VS() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (VS = function() {
    return !!e7;
  })();
}
function Qc(e7) {
  return Qc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qc(e7);
}
function F5(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && _h(e7, t);
}
function _h(e7, t) {
  return _h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _h(e7, t);
}
function Ne(e7, t, r) {
  return t = GS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function GS(e7) {
  var t = U5(e7, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function U5(e7, t) {
  if (Ki(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var z5 = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, u = Ka().domain(Xc(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: l };
}, pg = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Yi = function(e7) {
  function t(r) {
    var n;
    return j5(this, t), n = R5(this, t, [r]), Ne(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ne(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ne(n, "handleDragEnd", function() {
      n.setState({ isTravellerMoving: false, isSlideMoving: false }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null ? void 0 : o({ endIndex: a, startIndex: s });
      }), n.detachDragEndListener();
    }), Ne(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ne(n, "handleEnterSlideOrTraveller", function() {
      n.setState({ isTextActive: true });
    }), Ne(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({ isTextActive: false });
    }), Ne(n, "handleSlideDragStart", function(i) {
      var a = pg(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return F5(t, e7), B5(t, [{ key: "componentWillUnmount", value: function() {
    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
  } }, { key: "getIndex", value: function(n) {
    var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, c = s.gap, u = s.data, l = u.length - 1, f = Math.min(i, a), h = Math.max(i, a), d = t.getIndexInRange(o, f), y = t.getIndexInRange(o, h);
    return { startIndex: d - d % c, endIndex: y === l ? l : y - y % c };
  } }, { key: "getTextOfTick", value: function(n) {
    var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, c = ie(a[n], s, n);
    return ut(o) ? o(c, n) : c;
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
    var a = pg(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, c = i.startX, u = this.state[o], l = this.props, f = l.x, h = l.width, d = l.travellerWidth, y = l.onChange, m = l.gap, p = l.data, g = { startX: this.state.startX, endX: this.state.endX }, _ = n.pageX - a;
    _ > 0 ? _ = Math.min(_, f + h - d - u) : _ < 0 && (_ = Math.max(_, f - u)), g[o] = u + _;
    var w = this.getIndex(g), S = w.startIndex, v = w.endIndex, b = function() {
      var P = p.length - 1;
      return o === "startX" && (s > c ? S % m === 0 : v % m === 0) || s < c && v === P || o === "endX" && (s > c ? v % m === 0 : S % m === 0) || s > c && v === P;
    };
    this.setState(Ne(Ne({}, o, u + _), "brushMoveStartX", n.pageX), function() {
      y && b() && y(w);
    });
  } }, { key: "handleTravellerMoveKeyboard", value: function(n, i) {
    var a = this, o = this.state, s = o.scaleValues, c = o.startX, u = o.endX, l = this.state[i], f = s.indexOf(l);
    if (f !== -1) {
      var h = f + n;
      if (!(h === -1 || h >= s.length)) {
        var d = s[h];
        i === "startX" && d >= u || i === "endX" && d <= c || this.setState(Ne({}, i, d), function() {
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
    var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, h = c.traveller, d = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, g = Math.max(n, this.props.x), _ = Hl(Hl({}, ct(this.props, false)), {}, { x: g, y: u, width: l, height: f }), w = d || "Min value: ".concat((a = y[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
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
    return A.createElement(St, { className: "recharts-brush-texts" }, A.createElement(Ac, Jc({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(f, h) - d, y: o + s / 2 }, y), this.getTextOfTick(i)), A.createElement(Ac, Jc({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(f, h) + c + d, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, m = h.isTextActive, p = h.isSlideMoving, g = h.isTravellerMoving, _ = h.isTravellerFocused;
    if (!i || !i.length || !L(s) || !L(c) || !L(u) || !L(l) || u <= 0 || l <= 0) return null;
    var w = mt("recharts-brush", a), S = A.Children.count(o) === 1, v = C5("userSelect", "none");
    return A.createElement(St, { className: w, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: v }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || g || _ || f) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
    return A.createElement(A.Fragment, null, A.createElement("rect", { x: i, y: a, width: o, height: s, fill: c, stroke: "none" }), A.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), A.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return A.isValidElement(n) ? a = A.cloneElement(n, i) : ut(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return Hl({ prevData: a, prevTravellerWidth: c, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? z5({ data: a, width: o, x: s, travellerWidth: c, startIndex: l, endIndex: f }) : { scale: null, scaleValues: null });
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
Ne(Yi, "displayName", "Brush");
Ne(Yi, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var W5 = Fd;
function V5(e7, t) {
  var r;
  return W5(e7, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var G5 = V5, q5 = K_, H5 = vn, K5 = G5, Y5 = Ee, X5 = Uu;
function J5(e7, t, r) {
  var n = Y5(e7) ? q5 : K5;
  return r && X5(e7, t, r) && (t = void 0), n(e7, H5(t));
}
var Q5 = J5;
const Z5 = Bt(Q5);
var Or = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, yg = mw;
function tV(e7, t, r) {
  t == "__proto__" && yg ? yg(e7, t, { configurable: true, enumerable: true, value: r, writable: true }) : e7[t] = r;
}
var eV = tV, rV = eV, nV = pw, iV = vn;
function aV(e7, t) {
  var r = {};
  return t = iV(t), nV(e7, function(n, i, a) {
    rV(r, i, t(n, i, a));
  }), r;
}
var oV = aV;
const sV = Bt(oV);
function cV(e7, t) {
  for (var r = -1, n = e7 == null ? 0 : e7.length; ++r < n; ) if (!t(e7[r], r, e7)) return false;
  return true;
}
var uV = cV, lV = Fd;
function fV(e7, t) {
  var r = true;
  return lV(e7, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var hV = fV, dV = uV, pV = hV, yV = vn, mV = Ee, vV = Uu;
function gV(e7, t, r) {
  var n = mV(e7) ? dV : pV;
  return r && vV(e7, t, r) && (t = void 0), n(e7, yV(t));
}
var bV = gV;
const qS = Bt(bV);
var _V = ["x", "y"];
function ko(e7) {
  "@babel/helpers - typeof";
  return ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ko(e7);
}
function wh() {
  return wh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, wh.apply(this, arguments);
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
function Ba(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), true).forEach(function(n) {
      wV(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function wV(e7, t, r) {
  return t = SV(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function SV(e7) {
  var t = OV(e7, "string");
  return ko(t) == "symbol" ? t : t + "";
}
function OV(e7, t) {
  if (ko(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function xV(e7, t) {
  if (e7 == null) return {};
  var r = AV(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function AV(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function PV(e7, t) {
  var r = e7.x, n = e7.y, i = xV(e7, _V), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), h = parseInt(f, 10);
  return Ba(Ba(Ba(Ba(Ba({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: l, width: h, name: t.name, radius: t.radius });
}
function vg(e7) {
  return A.createElement(bh, wh({ shapeType: "rectangle", propTransformer: PV, activeClassName: "recharts-active-bar" }, e7));
}
var TV = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || UE(n);
    return a ? t(n, i) : (a || Kn(), r);
  };
}, IV = ["value", "background"], HS;
function Xi(e7) {
  "@babel/helpers - typeof";
  return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xi(e7);
}
function EV(e7, t) {
  if (e7 == null) return {};
  var r = $V(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function $V(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
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
function Yt(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), true).forEach(function(n) {
      cn(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function DV(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function bg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, YS(n.key), n);
  }
}
function MV(e7, t, r) {
  return t && bg(e7.prototype, t), r && bg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function NV(e7, t, r) {
  return t = tu(t), CV(e7, KS() ? Reflect.construct(t, r || [], tu(e7).constructor) : t.apply(e7, r));
}
function CV(e7, t) {
  if (t && (Xi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return jV(e7);
}
function jV(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function KS() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KS = function() {
    return !!e7;
  })();
}
function tu(e7) {
  return tu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tu(e7);
}
function BV(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Sh(e7, t);
}
function Sh(e7, t) {
  return Sh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sh(e7, t);
}
function cn(e7, t, r) {
  return t = YS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function YS(e7) {
  var t = RV(e7, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function RV(e7, t) {
  if (Xi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var xa = function(e7) {
  function t() {
    var r;
    DV(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = NV(this, t, [].concat(i)), cn(r, "state", { isAnimationFinished: false }), cn(r, "id", Qn("recharts-bar-")), cn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), cn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return BV(t, e7), MV(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = ct(this.props, false);
    return n && n.map(function(f, h) {
      var d = h === c, y = d ? u : o, m = Yt(Yt(Yt({}, l), f), {}, { isActive: d, option: y, index: h, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return A.createElement(St, Zc({ className: "recharts-bar-rectangle" }, oo(i.props, f, h), { key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(h) }), A.createElement(vg, m));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, c = i.animationBegin, u = i.animationDuration, l = i.animationEasing, f = i.animationId, h = this.state.prevData;
    return A.createElement(cr, { begin: c, duration: u, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(f), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(d) {
      var y = d.t, m = a.map(function(p, g) {
        var _ = h && h[g];
        if (_) {
          var w = qt(_.x, p.x), S = qt(_.y, p.y), v = qt(_.width, p.width), b = qt(_.height, p.height);
          return Yt(Yt({}, p), {}, { x: w(y), y: S(y), width: v(y), height: b(y) });
        }
        if (o === "horizontal") {
          var O = qt(0, p.height), P = O(y);
          return Yt(Yt({}, p), {}, { y: p.y + p.height - P, height: P });
        }
        var T = qt(0, p.width), $ = T(y);
        return Yt(Yt({}, p), {}, { width: $ });
      });
      return A.createElement(St, null, n.renderRectanglesStatically(m));
    });
  } }, { key: "renderRectangles", value: function() {
    var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
    return a && i && i.length && (!o || !qn(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = ct(this.props.background, false);
    return a.map(function(u, l) {
      u.value;
      var f = u.background, h = EV(u, IV);
      if (!f) return null;
      var d = Yt(Yt(Yt(Yt(Yt({}, h), {}, { fill: "#eee" }, f), c), oo(n.props, u, l)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: l, className: "recharts-bar-background-rectangle" });
      return A.createElement(vg, Zc({ key: "background-bar-".concat(l), option: n.props.background, isActive: l === s }, d));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Pe(l, Oa);
    if (!f) return null;
    var h = u === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(p, g) {
      var _ = Array.isArray(p.value) ? p.value[1] : p.value;
      return { x: p.x, y: p.y, value: _, errorVal: ie(p, g) };
    }, y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, y, f.map(function(m) {
      return A.cloneElement(m, { key: "error-bar-".concat(i, "-").concat(m.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, offset: h, dataPointFormatter: d });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, h = n.height, d = n.isAnimationActive, y = n.background, m = n.id;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, g = mt("recharts-bar", o), _ = s && s.allowDataOverflow, w = c && c.allowDataOverflow, S = _ || w, v = st(m) ? this.id : m;
    return A.createElement(St, { className: g }, _ || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? u : u - f / 2, y: w ? l : l - h / 2, width: _ ? f : f * 2, height: w ? h : h * 2 }))) : null, A.createElement(St, { className: "recharts-bar-rectangles", clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, v), (!d || p) && Sr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
}(B.PureComponent);
HS = xa;
cn(xa, "displayName", "Bar");
cn(xa, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !gn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
cn(xa, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.barPosition, i = e7.bandSize, a = e7.xAxis, o = e7.yAxis, s = e7.xAxisTicks, c = e7.yAxisTicks, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = l6(n, r);
  if (!d) return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Yt(Yt({}, m), r.props) : r.props, g = p.dataKey, _ = p.children, w = p.minPointSize, S = y === "horizontal" ? o : a, v = u ? S.scale.domain() : null, b = g6({ numericAxis: S }), O = Pe(_, Wd), P = f.map(function(T, $) {
    var E, I, j, N, D, C;
    u ? E = f6(u[l + $], v) : (E = ie(T, g), Array.isArray(E) || (E = [b, E]));
    var R = TV(w, HS.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, U = [o.scale(E[0]), o.scale(E[1])], G = U[0], rt = U[1];
      I = wv({ axis: a, ticks: s, bandSize: i, offset: d.offset, entry: T, index: $ }), j = (F = rt ?? G) !== null && F !== void 0 ? F : void 0, N = d.size;
      var W = G - rt;
      if (D = Number.isNaN(W) ? 0 : W, C = { x: I, y: o.y, width: N, height: o.height }, Math.abs(R) > 0 && Math.abs(D) < Math.abs(R)) {
        var it = or(D || R) * (Math.abs(R) - Math.abs(D));
        j -= it, D += it;
      }
    } else {
      var Rt = [a.scale(E[0]), a.scale(E[1])], Kt = Rt[0], $e = Rt[1];
      if (I = Kt, j = wv({ axis: o, ticks: c, bandSize: i, offset: d.offset, entry: T, index: $ }), N = $e - Kt, D = d.size, C = { x: a.x, y: j, width: a.width, height: D }, Math.abs(R) > 0 && Math.abs(N) < Math.abs(R)) {
        var Sn = or(N || R) * (Math.abs(R) - Math.abs(N));
        N += Sn;
      }
    }
    return Yt(Yt(Yt({}, T), {}, { x: I, y: j, width: N, height: D, value: u ? E : E[1], payload: T, background: C }, O && O[$] && O[$].props), {}, { tooltipPayload: [TS(r, T)], tooltipPosition: { x: I + N / 2, y: j + D / 2 } });
  });
  return Yt({ data: P, layout: y }, h);
});
function Lo(e7) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e7);
}
function kV(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _g(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, XS(n.key), n);
  }
}
function LV(e7, t, r) {
  return t && _g(e7.prototype, t), r && _g(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
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
function nr(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wg(Object(r), true).forEach(function(n) {
      tl(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function tl(e7, t, r) {
  return t = XS(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function XS(e7) {
  var t = FV(e7, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function FV(e7, t) {
  if (Lo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var UV = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, h = !!Ce(u, xa);
  return l.reduce(function(d, y) {
    var m = r[y], p = m.orientation, g = m.domain, _ = m.padding, w = _ === void 0 ? {} : _, S = m.mirror, v = m.reversed, b = "".concat(p).concat(S ? "Mirror" : ""), O, P, T, $, E;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = g[1] - g[0], j = 1 / 0, N = m.categoricalDomain.sort(GE);
      if (N.forEach(function(Rt, Kt) {
        Kt > 0 && (j = Math.min((Rt || 0) - (N[Kt - 1] || 0), j));
      }), Number.isFinite(j)) {
        var D = j / I, C = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (O = D * C / 2), m.padding === "no-gap") {
          var R = Gn(t.barCategoryGap, D * C), F = D * C / 2;
          O = F - R - (F - R) / C * R;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : P = m.range, v && (P = [P[1], P[0]]);
    var U = c6(m, a, h), G = U.scale, rt = U.realScaleType;
    G.domain(g).range(P), u6(G);
    var W = v6(G, nr(nr({}, m), {}, { realScaleType: rt }));
    i === "xAxis" ? (E = p === "top" && !S || p === "bottom" && S, T = n.left, $ = f[b] - E * m.height) : i === "yAxis" && (E = p === "left" && !S || p === "right" && S, T = f[b] - E * m.width, $ = n.top);
    var it = nr(nr(nr({}, m), W), {}, { realScaleType: rt, x: T, y: $, scale: G, width: i === "xAxis" ? n.width : m.width, height: i === "yAxis" ? n.height : m.height });
    return it.bandSize = Fc(it, W), !m.hide && i === "xAxis" ? f[b] += (E ? -1 : 1) * it.height : m.hide || (f[b] += (E ? -1 : 1) * it.width), nr(nr({}, d), {}, tl({}, y, it));
  }, {});
}, JS = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, zV = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return JS({ x: r, y: n }, { x: i, y: a });
}, QS = function() {
  function e7(t) {
    kV(this, e7), this.scale = t;
  }
  return LV(e7, [{ key: "domain", get: function() {
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
tl(QS, "EPS", 1e-4);
var mp = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return nr(nr({}, n), {}, tl({}, i, QS.create(t[i])));
  }, {});
  return nr(nr({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return sV(i, function(c, u) {
      return r[u].apply(c, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return qS(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function WV(e7) {
  return (e7 % 180 + 180) % 180;
}
var VV = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = WV(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, GV = vn, qV = Jo, HV = Lu;
function KV(e7) {
  return function(t, r, n) {
    var i = Object(t);
    if (!qV(t)) {
      var a = GV(r);
      t = HV(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e7(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var YV = KV, XV = zS;
function JV(e7) {
  var t = XV(e7), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var QV = JV, ZV = cw, tG = vn, eG = QV, rG = Math.max;
function nG(e7, t, r) {
  var n = e7 == null ? 0 : e7.length;
  if (!n) return -1;
  var i = r == null ? 0 : eG(r);
  return i < 0 && (i = rG(n + i, 0)), ZV(e7, tG(t), i);
}
var iG = nG, aG = YV, oG = iG, sG = aG(oG), cG = sG;
const uG = Bt(cG);
var lG = HI(function(e7) {
  return { x: e7.left, y: e7.top, width: e7.width, height: e7.height };
}, function(e7) {
  return ["l", e7.left, "t", e7.top, "w", e7.width, "h", e7.height].join("");
}), vp = B.createContext(void 0), gp = B.createContext(void 0), ZS = B.createContext(void 0), tO = B.createContext({}), eO = B.createContext(void 0), rO = B.createContext(0), nO = B.createContext(0), Sg = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = lG(a);
  return A.createElement(vp.Provider, { value: n }, A.createElement(gp.Provider, { value: i }, A.createElement(tO.Provider, { value: a }, A.createElement(ZS.Provider, { value: l }, A.createElement(eO.Provider, { value: o }, A.createElement(rO.Provider, { value: u }, A.createElement(nO.Provider, { value: c }, s)))))));
}, fG = function() {
  return B.useContext(eO);
}, iO = function(t) {
  var r = B.useContext(vp);
  r == null && Kn();
  var n = r[t];
  return n == null && Kn(), n;
}, hG = function() {
  var t = B.useContext(vp);
  return on(t);
}, dG = function() {
  var t = B.useContext(gp), r = uG(t, function(n) {
    return qS(n.domain, Number.isFinite);
  });
  return r || on(t);
}, aO = function(t) {
  var r = B.useContext(gp);
  r == null && Kn();
  var n = r[t];
  return n == null && Kn(), n;
}, pG = function() {
  var t = B.useContext(ZS);
  return t;
}, yG = function() {
  return B.useContext(tO);
}, bp = function() {
  return B.useContext(nO);
}, _p = function() {
  return B.useContext(rO);
};
function Ji(e7) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e7);
}
function mG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, sO(n.key), n);
  }
}
function gG(e7, t, r) {
  return t && vG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function bG(e7, t, r) {
  return t = eu(t), _G(e7, oO() ? Reflect.construct(t, r || [], eu(e7).constructor) : t.apply(e7, r));
}
function _G(e7, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wG(e7);
}
function wG(e7) {
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
function eu(e7) {
  return eu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eu(e7);
}
function SG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Oh(e7, t);
}
function Oh(e7, t) {
  return Oh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Oh(e7, t);
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
function xg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Og(Object(r), true).forEach(function(n) {
      wp(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function wp(e7, t, r) {
  return t = sO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function sO(e7) {
  var t = OG(e7, "string");
  return Ji(t) == "symbol" ? t : t + "";
}
function OG(e7, t) {
  if (Ji(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function xG(e7, t) {
  return IG(e7) || TG(e7, t) || PG(e7, t) || AG();
}
function AG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PG(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Ag(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ag(e7, t);
  }
}
function Ag(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function TG(e7, t) {
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
function IG(e7) {
  if (Array.isArray(e7)) return e7;
}
function xh() {
  return xh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, xh.apply(this, arguments);
}
var EG = function(t, r) {
  var n;
  return A.isValidElement(t) ? n = A.cloneElement(t, r) : ut(t) ? n = t(r) : n = A.createElement("line", xh({}, r, { className: "recharts-reference-line-line" })), n;
}, $G = function(t, r, n, i, a, o, s, c, u) {
  var l = a.x, f = a.y, h = a.width, d = a.height;
  if (n) {
    var y = u.y, m = t.y.apply(y, { position: o });
    if (Or(u, "discard") && !t.y.isInRange(m)) return null;
    var p = [{ x: l + h, y: m }, { x: l, y: m }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var g = u.x, _ = t.x.apply(g, { position: o });
    if (Or(u, "discard") && !t.x.isInRange(_)) return null;
    var w = [{ x: _, y: f + d }, { x: _, y: f }];
    return s === "top" ? w.reverse() : w;
  }
  if (i) {
    var S = u.segment, v = S.map(function(b) {
      return t.apply(b, { position: o });
    });
    return Or(u, "discard") && Z5(v, function(b) {
      return !t.isInRange(b);
    }) ? null : v;
  }
  return null;
};
function DG(e7) {
  var t = e7.x, r = e7.y, n = e7.segment, i = e7.xAxisId, a = e7.yAxisId, o = e7.shape, s = e7.className, c = e7.alwaysShow, u = fG(), l = iO(i), f = aO(a), h = pG();
  if (!u || !h) return null;
  Fr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = mp({ x: l.scale, y: f.scale }), y = ne(t), m = ne(r), p = n && n.length === 2, g = $G(d, y, m, p, h, e7.position, l.orientation, f.orientation, e7);
  if (!g) return null;
  var _ = xG(g, 2), w = _[0], S = w.x, v = w.y, b = _[1], O = b.x, P = b.y, T = Or(e7, "hidden") ? "url(#".concat(u, ")") : void 0, $ = xg(xg({ clipPath: T }, ct(e7, true)), {}, { x1: S, y1: v, x2: O, y2: P });
  return A.createElement(St, { className: mt("recharts-reference-line", s) }, EG(o, $), fe.renderCallByParent(e7, zV({ x1: S, y1: v, x2: O, y2: P })));
}
var Sp = function(e7) {
  function t() {
    return mG(this, t), bG(this, t, arguments);
  }
  return SG(t, e7), gG(t, [{ key: "render", value: function() {
    return A.createElement(DG, this.props);
  } }]);
}(A.Component);
wp(Sp, "displayName", "ReferenceLine");
wp(Sp, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Ah() {
  return Ah = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ah.apply(this, arguments);
}
function Qi(e7) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e7);
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
      el(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function MG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function NG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, uO(n.key), n);
  }
}
function CG(e7, t, r) {
  return t && NG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function jG(e7, t, r) {
  return t = ru(t), BG(e7, cO() ? Reflect.construct(t, r || [], ru(e7).constructor) : t.apply(e7, r));
}
function BG(e7, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return RG(e7);
}
function RG(e7) {
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
function ru(e7) {
  return ru = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ru(e7);
}
function kG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ph(e7, t);
}
function Ph(e7, t) {
  return Ph = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ph(e7, t);
}
function el(e7, t, r) {
  return t = uO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function uO(e7) {
  var t = LG(e7, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function LG(e7, t) {
  if (Qi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var FG = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = mp({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return Or(t, "discard") && !o.isInRange(s) ? null : s;
}, rl = function(e7) {
  function t() {
    return MG(this, t), jG(this, t, arguments);
  }
  return kG(t, e7), CG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = ne(i), l = ne(a);
    if (Fr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
    var f = FG(this.props);
    if (!f) return null;
    var h = f.x, d = f.y, y = this.props, m = y.shape, p = y.className, g = Or(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, _ = Tg(Tg({ clipPath: g }, ct(this.props, true)), {}, { cx: h, cy: d });
    return A.createElement(St, { className: mt("recharts-reference-dot", p) }, t.renderDot(m, _), fe.renderCallByParent(this.props, { x: h - o, y: d - o, width: 2 * o, height: 2 * o }));
  } }]);
}(A.Component);
el(rl, "displayName", "ReferenceDot");
el(rl, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
el(rl, "renderDot", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : ut(e7) ? r = e7(t) : r = A.createElement(Ju, Ah({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Th() {
  return Th = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Th.apply(this, arguments);
}
function Zi(e7) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e7);
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
function Eg(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), true).forEach(function(n) {
      nl(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function UG(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function zG(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, fO(n.key), n);
  }
}
function WG(e7, t, r) {
  return t && zG(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function VG(e7, t, r) {
  return t = nu(t), GG(e7, lO() ? Reflect.construct(t, r || [], nu(e7).constructor) : t.apply(e7, r));
}
function GG(e7, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return qG(e7);
}
function qG(e7) {
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
function nu(e7) {
  return nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nu(e7);
}
function HG(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ih(e7, t);
}
function Ih(e7, t) {
  return Ih = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ih(e7, t);
}
function nl(e7, t, r) {
  return t = fO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function fO(e7) {
  var t = KG(e7, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function KG(e7, t) {
  if (Zi(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var YG = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var h = mp({ x: l.scale, y: f.scale }), d = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(c, { position: "start" }) : h.y.rangeMin }, y = { x: r ? h.x.apply(s, { position: "end" }) : h.x.rangeMax, y: i ? h.y.apply(u, { position: "end" }) : h.y.rangeMax };
  return Or(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : JS(d, y);
}, il = function(e7) {
  function t() {
    return UG(this, t), VG(this, t, arguments);
  }
  return HG(t, e7), WG(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
    Fr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var f = ne(i), h = ne(a), d = ne(o), y = ne(s), m = this.props.shape;
    if (!f && !h && !d && !y && !m) return null;
    var p = YG(f, h, d, y, this.props);
    if (!p && !m) return null;
    var g = Or(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
    return A.createElement(St, { className: mt("recharts-reference-area", c) }, t.renderRect(m, Eg(Eg({ clipPath: g }, ct(this.props, true)), p)), fe.renderCallByParent(this.props, p));
  } }]);
}(A.Component);
nl(il, "displayName", "ReferenceArea");
nl(il, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
nl(il, "renderRect", function(e7, t) {
  var r;
  return A.isValidElement(e7) ? r = A.cloneElement(e7, t) : ut(e7) ? r = e7(t) : r = A.createElement(yp, Th({}, t, { className: "recharts-reference-area-rect" })), r;
});
function hO(e7, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e7;
  for (var n = [], i = 0; i < e7.length; i += t) n.push(e7[i]);
  return n;
}
function XG(e7, t, r) {
  var n = { width: e7.width + t.width, height: e7.height + t.height };
  return VV(n, r);
}
function JG(e7, t, r) {
  var n = r === "width", i = e7.x, a = e7.y, o = e7.width, s = e7.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function iu(e7, t, r, n, i) {
  if (e7 * t < e7 * n || e7 * t > e7 * i) return false;
  var a = r();
  return e7 * (t - e7 * a / 2 - n) >= 0 && e7 * (t + e7 * a / 2 - i) <= 0;
}
function QG(e7, t) {
  return hO(e7, t + 1);
}
function ZG(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0) return { v: hO(n, u) };
    var m = c, p, g = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, _ = y.coordinate, w = c === 0 || iu(e7, _, g, l, s);
    w || (c = 0, l = o, u += 1), w && (l = _ + e7 * (g() / 2 + i), c += u);
  }, h; u <= a.length; ) if (h = f(), h) return h.v;
  return [];
}
function Fo(e7) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e7);
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
function le(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), true).forEach(function(n) {
      tq(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function tq(e7, t, r) {
  return t = eq(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function eq(e7) {
  var t = rq(e7, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function rq(e7, t) {
  if (Fo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function nq(e7, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(h) {
    var d = a[h], y, m = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var p = e7 * (d.coordinate + e7 * m() / 2 - c);
      a[h] = d = le(le({}, d), {}, { tickCoord: p > 0 ? d.coordinate - p * e7 : d.coordinate });
    } else a[h] = d = le(le({}, d), {}, { tickCoord: d.coordinate });
    var g = iu(e7, d.tickCoord, m, s, c);
    g && (c = d.tickCoord - e7 * (m() / 2 + i), a[h] = le(le({}, d), {}, { isShow: true }));
  }, l = o - 1; l >= 0; l--) u(l);
  return a;
}
function iq(e7, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), h = e7 * (l.coordinate + e7 * f / 2 - u);
    o[s - 1] = l = le(le({}, l), {}, { tickCoord: h > 0 ? l.coordinate - h * e7 : l.coordinate });
    var d = iu(e7, l.tickCoord, function() {
      return f;
    }, c, u);
    d && (u = l.tickCoord - e7 * (f / 2 + i), o[s - 1] = le(le({}, l), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, m = function(_) {
    var w = o[_], S, v = function() {
      return S === void 0 && (S = r(w, _)), S;
    };
    if (_ === 0) {
      var b = e7 * (w.coordinate - e7 * v() / 2 - c);
      o[_] = w = le(le({}, w), {}, { tickCoord: b < 0 ? w.coordinate - b * e7 : w.coordinate });
    } else o[_] = w = le(le({}, w), {}, { tickCoord: w.coordinate });
    var O = iu(e7, w.tickCoord, v, c, u);
    O && (c = w.tickCoord + e7 * (v() / 2 + i), o[_] = le(le({}, w), {}, { isShow: true }));
  }, p = 0; p < y; p++) m(p);
  return o;
}
function Op(e7, t, r) {
  var n = e7.tick, i = e7.ticks, a = e7.viewBox, o = e7.minTickGap, s = e7.orientation, c = e7.interval, u = e7.tickFormatter, l = e7.unit, f = e7.angle;
  if (!i || !i.length || !n) return [];
  if (L(c) || gn.isSsr) return QG(i, typeof c == "number" && L(c) ? c : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = l && d === "width" ? Ha(l, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = function(w, S) {
    var v = ut(u) ? u(w.value, S) : w.value;
    return d === "width" ? XG(Ha(v, { fontSize: t, letterSpacing: r }), y, f) : Ha(v, { fontSize: t, letterSpacing: r })[d];
  }, p = i.length >= 2 ? or(i[1].coordinate - i[0].coordinate) : 1, g = JG(a, p, d);
  return c === "equidistantPreserveStart" ? ZG(p, g, m, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = iq(p, g, m, i, o, c === "preserveStartEnd") : h = nq(p, g, m, i, o), h.filter(function(_) {
    return _.isShow;
  }));
}
var aq = ["viewBox"], oq = ["viewBox"], sq = ["ticks"];
function ta(e7) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e7);
}
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, wi.apply(this, arguments);
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
function Zt(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), true).forEach(function(n) {
      xp(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function Kl(e7, t) {
  if (e7 == null) return {};
  var r = cq(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function cq(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function uq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Mg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, pO(n.key), n);
  }
}
function lq(e7, t, r) {
  return t && Mg(e7.prototype, t), r && Mg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function fq(e7, t, r) {
  return t = au(t), hq(e7, dO() ? Reflect.construct(t, r || [], au(e7).constructor) : t.apply(e7, r));
}
function hq(e7, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return dq(e7);
}
function dq(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function dO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (dO = function() {
    return !!e7;
  })();
}
function au(e7) {
  return au = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, au(e7);
}
function pq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Eh(e7, t);
}
function Eh(e7, t) {
  return Eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eh(e7, t);
}
function xp(e7, t, r) {
  return t = pO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function pO(e7) {
  var t = yq(e7, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function yq(e7, t) {
  if (ta(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Aa = function(e7) {
  function t(r) {
    var n;
    return uq(this, t), n = fq(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return pq(t, e7), lq(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = Kl(n, aq), s = this.props, c = s.viewBox, u = Kl(s, oq);
    return !Ti(a, c) || !Ti(o, u) || !Ti(i, this.state);
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
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = Zt(Zt(Zt({}, ct(this.props, false)), ct(l, false)), {}, { fill: "none" });
    if (c === "top" || c === "bottom") {
      var h = +(c === "top" && !u || c === "bottom" && u);
      f = Zt(Zt({}, f), {}, { x1: i, y1: a + h * s, x2: i + o, y2: a + h * s });
    } else {
      var d = +(c === "left" && !u || c === "right" && u);
      f = Zt(Zt({}, f), {}, { x1: i + d * o, y1: a, x2: i + d * o, y2: a + s });
    }
    return A.createElement("line", wi({}, f, { className: mt("recharts-cartesian-axis-line", Ke(l, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, h = s.unit, d = Op(Zt(Zt({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = ct(this.props, false), g = ct(l, false), _ = Zt(Zt({}, p), {}, { fill: "none" }, ct(c, false)), w = d.map(function(S, v) {
      var b = o.getTickLineCoord(S), O = b.line, P = b.tick, T = Zt(Zt(Zt(Zt({ textAnchor: y, verticalAnchor: m }, p), {}, { stroke: "none", fill: u }, g), P), {}, { index: v, payload: S, visibleTicksCount: d.length, tickFormatter: f });
      return A.createElement(St, wi({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord) }, oo(o.props, S, v)), c && A.createElement("line", wi({}, _, O, { className: mt("recharts-cartesian-axis-tick-line", Ke(c, "className")) })), l && t.renderTickItem(l, T, "".concat(ut(f) ? f(S.value, v) : S.value).concat(h || "")));
    });
    return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
    if (l) return null;
    var f = this.props, h = f.ticks, d = Kl(f, sq), y = h;
    return ut(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || s <= 0 || !y || !y.length ? null : A.createElement(St, { className: mt("recharts-cartesian-axis", u), ref: function(p) {
      n.layerReference = p;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), fe.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = mt(i.className, "recharts-cartesian-axis-tick-value");
    return A.isValidElement(n) ? o = A.cloneElement(n, Zt(Zt({}, i), {}, { className: s })) : ut(n) ? o = n(Zt(Zt({}, i), {}, { className: s })) : o = A.createElement(Ac, wi({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(B.Component);
xp(Aa, "displayName", "CartesianAxis");
xp(Aa, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var mq = ["x1", "y1", "x2", "y2", "key"], vq = ["offset"];
function Yn(e7) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e7);
}
function Ng(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), true).forEach(function(n) {
      gq(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function gq(e7, t, r) {
  return t = bq(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function bq(e7) {
  var t = _q(e7, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function _q(e7, t) {
  if (Yn(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Cn.apply(this, arguments);
}
function Cg(e7, t) {
  if (e7 == null) return {};
  var r = wq(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function wq(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
var Sq = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return A.createElement("rect", { x: i, y: a, ry: c, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function yO(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (ut(e7)) r = e7(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Cg(t, mq), u = ct(c, false);
    u.offset;
    var l = Cg(u, vq);
    r = A.createElement("line", Cn({}, l, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function Oq(e7) {
  var t = e7.x, r = e7.width, n = e7.horizontal, i = n === void 0 ? true : n, a = e7.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = he(he({}, e7), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return yO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function xq(e7) {
  var t = e7.y, r = e7.height, n = e7.vertical, i = n === void 0 ? true : n, a = e7.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, c) {
    var u = he(he({}, e7), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return yO(i, u);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function Aq(e7) {
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
function Pq(e7) {
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
var Tq = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return AS(Op(he(he(he({}, Aa.defaultProps), n), {}, { ticks: kr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, Iq = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return AS(Op(he(he(he({}, Aa.defaultProps), n), {}, { ticks: kr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, oi = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function $h(e7) {
  var t, r, n, i, a, o, s = bp(), c = _p(), u = yG(), l = he(he({}, e7), {}, { stroke: (t = e7.stroke) !== null && t !== void 0 ? t : oi.stroke, fill: (r = e7.fill) !== null && r !== void 0 ? r : oi.fill, horizontal: (n = e7.horizontal) !== null && n !== void 0 ? n : oi.horizontal, horizontalFill: (i = e7.horizontalFill) !== null && i !== void 0 ? i : oi.horizontalFill, vertical: (a = e7.vertical) !== null && a !== void 0 ? a : oi.vertical, verticalFill: (o = e7.verticalFill) !== null && o !== void 0 ? o : oi.verticalFill, x: L(e7.x) ? e7.x : u.left, y: L(e7.y) ? e7.y : u.top, width: L(e7.width) ? e7.width : u.width, height: L(e7.height) ? e7.height : u.height }), f = l.x, h = l.y, d = l.width, y = l.height, m = l.syncWithTicks, p = l.horizontalValues, g = l.verticalValues, _ = hG(), w = dG();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(f) || f !== +f || !L(h) || h !== +h) return null;
  var S = l.verticalCoordinatesGenerator || Tq, v = l.horizontalCoordinatesGenerator || Iq, b = l.horizontalPoints, O = l.verticalPoints;
  if ((!b || !b.length) && ut(v)) {
    var P = p && p.length, T = v({ yAxis: w ? he(he({}, w), {}, { ticks: P ? p : w.ticks }) : void 0, width: s, height: c, offset: u }, P ? true : m);
    Fr(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Yn(T), "]")), Array.isArray(T) && (b = T);
  }
  if ((!O || !O.length) && ut(S)) {
    var $ = g && g.length, E = S({ xAxis: _ ? he(he({}, _), {}, { ticks: $ ? g : _.ticks }) : void 0, width: s, height: c, offset: u }, $ ? true : m);
    Fr(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Yn(E), "]")), Array.isArray(E) && (O = E);
  }
  return A.createElement("g", { className: "recharts-cartesian-grid" }, A.createElement(Sq, { fill: l.fill, fillOpacity: l.fillOpacity, x: l.x, y: l.y, width: l.width, height: l.height, ry: l.ry }), A.createElement(Oq, Cn({}, l, { offset: u, horizontalPoints: b, xAxis: _, yAxis: w })), A.createElement(xq, Cn({}, l, { offset: u, verticalPoints: O, xAxis: _, yAxis: w })), A.createElement(Aq, Cn({}, l, { horizontalPoints: b })), A.createElement(Pq, Cn({}, l, { verticalPoints: O })));
}
$h.displayName = "CartesianGrid";
var Eq = ["type", "layout", "connectNulls", "ref"], $q = ["key"];
function ea(e7) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e7);
}
function jg(e7, t) {
  if (e7 == null) return {};
  var r = Dq(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function Dq(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function Ja() {
  return Ja = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Ja.apply(this, arguments);
}
function Bg(e7, t) {
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
    t % 2 ? Bg(Object(r), true).forEach(function(n) {
      ir(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Bg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function si(e7) {
  return jq(e7) || Cq(e7) || Nq(e7) || Mq();
}
function Mq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nq(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Dh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dh(e7, t);
  }
}
function Cq(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function jq(e7) {
  if (Array.isArray(e7)) return Dh(e7);
}
function Dh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
function Bq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, vO(n.key), n);
  }
}
function Rq(e7, t, r) {
  return t && Rg(e7.prototype, t), r && Rg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function kq(e7, t, r) {
  return t = ou(t), Lq(e7, mO() ? Reflect.construct(t, r || [], ou(e7).constructor) : t.apply(e7, r));
}
function Lq(e7, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Fq(e7);
}
function Fq(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function mO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mO = function() {
    return !!e7;
  })();
}
function ou(e7) {
  return ou = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ou(e7);
}
function Uq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Mh(e7, t);
}
function Mh(e7, t) {
  return Mh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Mh(e7, t);
}
function ir(e7, t, r) {
  return t = vO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function vO(e7) {
  var t = zq(e7, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function zq(e7, t) {
  if (ea(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Un = function(e7) {
  function t() {
    var r;
    Bq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = kq(this, t, [].concat(i)), ir(r, "state", { isAnimationFinished: true, totalLength: 0 }), ir(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ir(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(g, _) {
        return g + _;
      });
      if (!u) return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, h = s - o, d = [], y = 0, m = 0; y < c.length; m += c[y], ++y) if (m + c[y] > f) {
        d = [].concat(si(c.slice(0, y)), [f - m]);
        break;
      }
      var p = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(si(t.repeat(c, l)), si(d), p).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), ir(r, "id", Qn("recharts-line-")), ir(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ir(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ir(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return Uq(t, e7), Rq(t, [{ key: "componentDidMount", value: function() {
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
    var a = this.props, o = a.points, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Pe(l, Oa);
    if (!f) return null;
    var h = function(m, p) {
      return { x: m.x, y: m.y, value: m.value, errorVal: ie(m.payload, p) };
    }, d = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return A.createElement(St, d, f.map(function(y) {
      return A.cloneElement(y, { key: "bar-".concat(y.props.dataKey), data: o, xAxis: s, yAxis: c, layout: u, dataPointFormatter: h });
    }));
  } }, { key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive;
    if (o && !this.state.isAnimationFinished) return null;
    var s = this.props, c = s.dot, u = s.points, l = s.dataKey, f = ct(this.props, false), h = ct(c, true), d = u.map(function(m, p) {
      var g = De(De(De({ key: "dot-".concat(p), r: 3 }, f), h), {}, { index: p, cx: m.x, cy: m.y, value: m.value, dataKey: l, payload: m.payload, points: u });
      return t.renderDotItem(c, g);
    }), y = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, Ja({ className: "recharts-line-dots", key: "dots" }, y), d);
  } }, { key: "renderCurveStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
    s.ref;
    var f = jg(s, Eq), h = De(De(De({}, ct(f, true)), {}, { fill: "none", className: "recharts-line-curve", clipPath: i ? "url(#clipPath-".concat(a, ")") : null, points: n }, o), {}, { type: c, layout: u, connectNulls: l });
    return A.createElement(Fn, Ja({}, h, { pathRef: this.pathRef }));
  } }, { key: "renderCurveWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, g = this.state, _ = g.prevPoints, w = g.totalLength;
    return A.createElement(cr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "line-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(S) {
      var v = S.t;
      if (_) {
        var b = _.length / s.length, O = s.map(function(I, j) {
          var N = Math.floor(j * b);
          if (_[N]) {
            var D = _[N], C = qt(D.x, I.x), R = qt(D.y, I.y);
            return De(De({}, I), {}, { x: C(v), y: R(v) });
          }
          if (y) {
            var F = qt(m * 2, I.x), U = qt(p / 2, I.y);
            return De(De({}, I), {}, { x: F(v), y: U(v) });
          }
          return De(De({}, I), {}, { x: I.x, y: I.y });
        });
        return a.renderCurveStatically(O, n, i);
      }
      var P = qt(0, w), T = P(v), $;
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
    return s && o && o.length && (!u && l > 0 || !qn(u, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.xAxis, l = i.yAxis, f = i.top, h = i.left, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var g = this.state.isAnimationFinished, _ = s.length === 1, w = mt("recharts-line", c), S = u && u.allowDataOverflow, v = l && l.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = b_(o) ? o : {}, N = j.clipDot, D = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? h : h - d / 2, y: v ? f : f - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !D && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: h - C / 2, y: f - C / 2, width: d + C, height: y + C }))) : null, !_ && this.renderCurve(b, O), this.renderErrorBar(b, O), (_ || o) && this.renderDots(b, D, O), (!m || g) && Sr.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }, { key: "repeat", value: function(n, i) {
    for (var a = n.length % 2 !== 0 ? [].concat(si(n), [0]) : n, o = [], s = 0; s < i; ++s) o = [].concat(si(o), si(a));
    return o;
  } }, { key: "renderDotItem", value: function(n, i) {
    var a;
    if (A.isValidElement(n)) a = A.cloneElement(n, i);
    else if (ut(n)) a = n(i);
    else {
      var o = i.key, s = jg(i, $q), c = mt("recharts-line-dot", typeof n != "boolean" ? n.className : "");
      a = A.createElement(Ju, Ja({ key: o }, s, { className: c }));
    }
    return a;
  } }]);
}(B.PureComponent);
ir(Un, "displayName", "Line");
ir(Un, "defaultProps", { xAxisId: 0, yAxisId: 0, connectNulls: false, activeDot: true, dot: true, legendType: "line", stroke: "#3182bd", strokeWidth: 1, fill: "#fff", points: [], isAnimationActive: !gn.isSsr, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", hide: false, label: false });
ir(Un, "getComposedData", function(e7) {
  var t = e7.props, r = e7.xAxis, n = e7.yAxis, i = e7.xAxisTicks, a = e7.yAxisTicks, o = e7.dataKey, s = e7.bandSize, c = e7.displayedData, u = e7.offset, l = t.layout, f = c.map(function(h, d) {
    var y = ie(h, o);
    return l === "horizontal" ? { x: qi({ axis: r, ticks: i, bandSize: s, entry: h, index: d }), y: st(y) ? null : n.scale(y), value: y, payload: h } : { x: st(y) ? null : r.scale(y), y: qi({ axis: n, ticks: a, bandSize: s, entry: h, index: d }), value: y, payload: h };
  });
  return De({ points: f, layout: l }, u);
});
var Wq = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], Vq = ["key"], gO;
function ra(e7) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e7);
}
function bO(e7, t) {
  if (e7 == null) return {};
  var r = Gq(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function Gq(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, jn.apply(this, arguments);
}
function kg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function en(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kg(Object(r), true).forEach(function(n) {
      _r(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function qq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Lg(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, wO(n.key), n);
  }
}
function Hq(e7, t, r) {
  return t && Lg(e7.prototype, t), r && Lg(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Kq(e7, t, r) {
  return t = su(t), Yq(e7, _O() ? Reflect.construct(t, r || [], su(e7).constructor) : t.apply(e7, r));
}
function Yq(e7, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Xq(e7);
}
function Xq(e7) {
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
function su(e7) {
  return su = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, su(e7);
}
function Jq(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Nh(e7, t);
}
function Nh(e7, t) {
  return Nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nh(e7, t);
}
function _r(e7, t, r) {
  return t = wO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function wO(e7) {
  var t = Qq(e7, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function Qq(e7, t) {
  if (ra(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var Gr = function(e7) {
  function t() {
    var r;
    qq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = Kq(this, t, [].concat(i)), _r(r, "state", { isAnimationFinished: true }), _r(r, "id", Qn("recharts-area-")), _r(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), ut(o) && o();
    }), _r(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), ut(o) && o();
    }), r;
  }
  return Jq(t, e7), Hq(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var c = this.props, u = c.dot, l = c.points, f = c.dataKey, h = ct(this.props, false), d = ct(u, true), y = l.map(function(p, g) {
      var _ = en(en(en({ key: "dot-".concat(g), r: 3 }, h), d), {}, { index: g, cx: p.x, cy: p.y, dataKey: f, value: p.value, payload: p.payload, points: l });
      return t.renderDotItem(u, _);
    }), m = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return A.createElement(St, jn({ className: "recharts-area-dots" }, m), y);
  } }, { key: "renderHorizontalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].x, u = o[o.length - 1].x, l = n * Math.abs(c - u), f = sn(o.map(function(h) {
      return h.y || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(sn(a.map(function(h) {
      return h.y || 0;
    })), f)), L(f) ? A.createElement("rect", { x: c < u ? c : c - l, y: 0, width: l, height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1)) }) : null;
  } }, { key: "renderVerticalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, c = o[0].y, u = o[o.length - 1].y, l = n * Math.abs(c - u), f = sn(o.map(function(h) {
      return h.x || 0;
    }));
    return L(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(sn(a.map(function(h) {
      return h.x || 0;
    })), f)), L(f) ? A.createElement("rect", { x: 0, y: c < u ? c : c - l, width: f + (s ? parseInt("".concat(s), 10) : 1), height: Math.floor(l) }) : null;
  } }, { key: "renderClipRect", value: function(n) {
    var i = this.props.layout;
    return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
  } }, { key: "renderAreaStatically", value: function(n, i, a, o) {
    var s = this.props, c = s.layout, u = s.type, l = s.stroke, f = s.connectNulls, h = s.isRange;
    s.ref;
    var d = bO(s, Wq);
    return A.createElement(St, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, A.createElement(Fn, jn({}, ct(d, true), { points: n, connectNulls: f, type: u, baseLine: i, layout: c, stroke: "none", className: "recharts-area-area" })), l !== "none" && A.createElement(Fn, jn({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: n })), l !== "none" && h && A.createElement(Fn, jn({}, ct(this.props, false), { className: "recharts-area-curve", layout: c, type: u, connectNulls: f, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, h = o.animationEasing, d = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
    return A.createElement(cr, { begin: l, duration: f, isActive: u, easing: h, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(d), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(g) {
      var _ = g.t;
      if (m) {
        var w = m.length / s.length, S = s.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (m[$]) {
            var E = m[$], I = qt(E.x, P.x), j = qt(E.y, P.y);
            return en(en({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        }), v;
        if (L(c) && typeof c == "number") {
          var b = qt(p, c);
          v = b(_);
        } else if (st(c) || ma(c)) {
          var O = qt(p, 0);
          v = O(_);
        } else v = c.map(function(P, T) {
          var $ = Math.floor(T * w);
          if (p[$]) {
            var E = p[$], I = qt(E.x, P.x), j = qt(E.y, P.y);
            return en(en({}, P), {}, { x: I(_), y: j(_) });
          }
          return P;
        });
        return a.renderAreaStatically(S, v, n, i);
      }
      return A.createElement(St, null, A.createElement("defs", null, A.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(_))), A.createElement(St, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, c, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, c = a.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, h = u.totalLength;
    return c && o && o.length && (!l && h > 0 || !qn(l, o) || !qn(f, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, c = i.className, u = i.top, l = i.left, f = i.xAxis, h = i.yAxis, d = i.width, y = i.height, m = i.isAnimationActive, p = i.id;
    if (a || !s || !s.length) return null;
    var g = this.state.isAnimationFinished, _ = s.length === 1, w = mt("recharts-area", c), S = f && f.allowDataOverflow, v = h && h.allowDataOverflow, b = S || v, O = st(p) ? this.id : p, P = (n = ct(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, T = P.r, $ = T === void 0 ? 3 : T, E = P.strokeWidth, I = E === void 0 ? 2 : E, j = b_(o) ? o : {}, N = j.clipDot, D = N === void 0 ? true : N, C = $ * 2 + I;
    return A.createElement(St, { className: w }, S || v ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(O) }, A.createElement("rect", { x: S ? l : l - d / 2, y: v ? u : u - y / 2, width: S ? d : d * 2, height: v ? y : y * 2 })), !D && A.createElement("clipPath", { id: "clipPath-dots-".concat(O) }, A.createElement("rect", { x: l - C / 2, y: u - C / 2, width: d + C, height: y + C }))) : null, _ ? null : this.renderArea(b, O), (o || _) && this.renderDots(b, D, O), (!m || g) && Sr.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(B.PureComponent);
gO = Gr;
_r(Gr, "displayName", "Area");
_r(Gr, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !gn.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
_r(Gr, "getBaseValue", function(e7, t, r, n) {
  var i = e7.layout, a = e7.baseValue, o = t.props.baseValue, s = o ?? a;
  if (L(s) && typeof s == "number") return s;
  var c = i === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
_r(Gr, "getComposedData", function(e7) {
  var t = e7.props, r = e7.item, n = e7.xAxis, i = e7.yAxis, a = e7.xAxisTicks, o = e7.yAxisTicks, s = e7.bandSize, c = e7.dataKey, u = e7.stackedData, l = e7.dataStartIndex, f = e7.displayedData, h = e7.offset, d = t.layout, y = u && u.length, m = gO.getBaseValue(t, r, n, i), p = d === "horizontal", g = false, _ = f.map(function(S, v) {
    var b;
    y ? b = u[l + v] : (b = ie(S, c), Array.isArray(b) ? g = true : b = [m, b]);
    var O = b[1] == null || y && ie(S, c) == null;
    return p ? { x: qi({ axis: n, ticks: a, bandSize: s, entry: S, index: v }), y: O ? null : i.scale(b[1]), value: b, payload: S } : { x: O ? null : n.scale(b[1]), y: qi({ axis: i, ticks: o, bandSize: s, entry: S, index: v }), value: b, payload: S };
  }), w;
  return y || g ? w = _.map(function(S) {
    var v = Array.isArray(S.value) ? S.value[0] : null;
    return p ? { x: S.x, y: v != null && S.y != null ? i.scale(v) : null } : { x: v != null ? n.scale(v) : null, y: S.y };
  }) : w = p ? i.scale(m) : n.scale(m), en({ points: _, baseLine: w, layout: d, isRange: g }, h);
});
_r(Gr, "renderDotItem", function(e7, t) {
  var r;
  if (A.isValidElement(e7)) r = A.cloneElement(e7, t);
  else if (ut(e7)) r = e7(t);
  else {
    var n = mt("recharts-area-dot", typeof e7 != "boolean" ? e7.className : ""), i = t.key, a = bO(t, Vq);
    r = A.createElement(Ju, jn({}, a, { key: i, className: n }));
  }
  return r;
});
function na(e7) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e7);
}
function Zq(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, xO(n.key), n);
  }
}
function eH(e7, t, r) {
  return t && tH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function rH(e7, t, r) {
  return t = cu(t), nH(e7, SO() ? Reflect.construct(t, r || [], cu(e7).constructor) : t.apply(e7, r));
}
function nH(e7, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iH(e7);
}
function iH(e7) {
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
function cu(e7) {
  return cu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cu(e7);
}
function aH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Ch(e7, t);
}
function Ch(e7, t) {
  return Ch = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ch(e7, t);
}
function OO(e7, t, r) {
  return t = xO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function xO(e7) {
  var t = oH(e7, "string");
  return na(t) == "symbol" ? t : t + "";
}
function oH(e7, t) {
  if (na(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var al = function(e7) {
  function t() {
    return Zq(this, t), rH(this, t, arguments);
  }
  return aH(t, e7), eH(t, [{ key: "render", value: function() {
    return null;
  } }]);
}(B.Component);
OO(al, "displayName", "ZAxis");
OO(al, "defaultProps", { zAxisId: 0, range: [64, 64], scale: "auto", type: "number" });
var sH = ["option", "isActive"];
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Qa.apply(this, arguments);
}
function cH(e7, t) {
  if (e7 == null) return {};
  var r = uH(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function uH(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function lH(e7) {
  var t = e7.option, r = e7.isActive, n = cH(e7, sH);
  return typeof t == "string" ? B.createElement(bh, Qa({ option: B.createElement(ku, Qa({ type: t }, n)), isActive: r, shapeType: "symbols" }, n)) : B.createElement(bh, Qa({ option: t, isActive: r, shapeType: "symbols" }, n));
}
function ia(e7) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e7);
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Za.apply(this, arguments);
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
function ze(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fg(Object(r), true).forEach(function(n) {
      un(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function fH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ug(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, PO(n.key), n);
  }
}
function hH(e7, t, r) {
  return t && Ug(e7.prototype, t), r && Ug(e7, r), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function dH(e7, t, r) {
  return t = uu(t), pH(e7, AO() ? Reflect.construct(t, r || [], uu(e7).constructor) : t.apply(e7, r));
}
function pH(e7, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yH(e7);
}
function yH(e7) {
  if (e7 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e7;
}
function AO() {
  try {
    var e7 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (AO = function() {
    return !!e7;
  })();
}
function uu(e7) {
  return uu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uu(e7);
}
function mH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && jh(e7, t);
}
function jh(e7, t) {
  return jh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jh(e7, t);
}
function un(e7, t, r) {
  return t = PO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function PO(e7) {
  var t = vH(e7, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function vH(e7, t) {
  if (ia(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var ol = function(e7) {
  function t() {
    var r;
    fH(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = dH(this, t, [].concat(i)), un(r, "state", { isAnimationFinished: false }), un(r, "handleAnimationEnd", function() {
      r.setState({ isAnimationFinished: true });
    }), un(r, "handleAnimationStart", function() {
      r.setState({ isAnimationFinished: false });
    }), un(r, "id", Qn("recharts-scatter-")), r;
  }
  return mH(t, e7), hH(t, [{ key: "renderSymbolsStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.activeShape, c = a.activeIndex, u = ct(this.props, false);
    return n.map(function(l, f) {
      var h = c === f, d = h ? s : o, y = ze(ze({}, u), l);
      return A.createElement(St, Za({ className: "recharts-scatter-symbol", key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f) }, oo(i.props, l, f), { role: "img" }), A.createElement(lH, Za({ option: d, isActive: h, key: "symbol-".concat(f) }, y)));
    });
  } }, { key: "renderSymbolsWithAnimation", value: function() {
    var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, u = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
    return A.createElement(cr, { begin: s, duration: c, isActive: o, easing: u, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(l), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var d = h.t, y = a.map(function(m, p) {
        var g = f && f[p];
        if (g) {
          var _ = qt(g.cx, m.cx), w = qt(g.cy, m.cy), S = qt(g.size, m.size);
          return ze(ze({}, m), {}, { cx: _(d), cy: w(d), size: S(d) });
        }
        var v = qt(0, m.size);
        return ze(ze({}, m), {}, { size: v(d) });
      });
      return A.createElement(St, null, n.renderSymbolsStatically(y));
    });
  } }, { key: "renderSymbols", value: function() {
    var n = this.props, i = n.points, a = n.isAnimationActive, o = this.state.prevPoints;
    return a && i && i.length && (!o || !qn(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
  } }, { key: "renderErrorBar", value: function() {
    var n = this.props.isAnimationActive;
    if (n && !this.state.isAnimationFinished) return null;
    var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, c = i.children, u = Pe(c, Oa);
    return u ? u.map(function(l, f) {
      var h = l.props, d = h.direction, y = h.dataKey;
      return A.cloneElement(l, { key: "".concat(d, "-").concat(y, "-").concat(a[f]), data: a, xAxis: o, yAxis: s, layout: d === "x" ? "vertical" : "horizontal", dataPointFormatter: function(p, g) {
        return { x: p.cx, y: p.cy, value: d === "x" ? +p.node.x : +p.node.y, errorVal: ie(p, g) };
      } });
    }) : null;
  } }, { key: "renderLine", value: function() {
    var n = this.props, i = n.points, a = n.line, o = n.lineType, s = n.lineJointType, c = ct(this.props, false), u = ct(a, false), l, f;
    if (o === "joint") l = i.map(function(w) {
      return { x: w.cx, y: w.cy };
    });
    else if (o === "fitting") {
      var h = VE(i), d = h.xmin, y = h.xmax, m = h.a, p = h.b, g = function(S) {
        return m * S + p;
      };
      l = [{ x: d, y: g(d) }, { x: y, y: g(y) }];
    }
    var _ = ze(ze(ze({}, c), {}, { fill: "none", stroke: c && c.fill }, u), {}, { points: l });
    return A.isValidElement(a) ? f = A.cloneElement(a, _) : ut(a) ? f = a(_) : f = A.createElement(Fn, Za({}, _, { type: s })), A.createElement(St, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, f);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, h = n.width, d = n.height, y = n.id, m = n.isAnimationActive;
    if (i || !a || !a.length) return null;
    var p = this.state.isAnimationFinished, g = mt("recharts-scatter", s), _ = c && c.allowDataOverflow, w = u && u.allowDataOverflow, S = _ || w, v = st(y) ? this.id : y;
    return A.createElement(St, { className: g, clipPath: S ? "url(#clipPath-".concat(v, ")") : null }, _ || w ? A.createElement("defs", null, A.createElement("clipPath", { id: "clipPath-".concat(v) }, A.createElement("rect", { x: _ ? l : l - h / 2, y: w ? f : f - d / 2, width: _ ? h : h * 2, height: w ? d : d * 2 }))) : null, o && this.renderLine(), this.renderErrorBar(), A.createElement(St, { key: "recharts-scatter-symbols" }, this.renderSymbols()), (!m || p) && Sr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints } : n.points !== i.curPoints ? { curPoints: n.points } : null;
  } }]);
}(B.PureComponent);
un(ol, "displayName", "Scatter");
un(ol, "defaultProps", { xAxisId: 0, yAxisId: 0, zAxisId: 0, legendType: "circle", lineType: "joint", lineJointType: "linear", data: [], shape: "circle", hide: false, isAnimationActive: !gn.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "linear" });
un(ol, "getComposedData", function(e7) {
  var t = e7.xAxis, r = e7.yAxis, n = e7.zAxis, i = e7.item, a = e7.displayedData, o = e7.xAxisTicks, s = e7.yAxisTicks, c = e7.offset, u = i.props.tooltipType, l = Pe(i.props.children, Wd), f = st(t.dataKey) ? i.props.dataKey : t.dataKey, h = st(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : al.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, _ = a.map(function(w, S) {
    var v = ie(w, f), b = ie(w, h), O = !st(d) && ie(w, d) || "-", P = [{ name: st(t.dataKey) ? i.props.name : t.name || t.dataKey, unit: t.unit || "", value: v, payload: w, dataKey: f, type: u }, { name: st(r.dataKey) ? i.props.name : r.name || r.dataKey, unit: r.unit || "", value: b, payload: w, dataKey: h, type: u }];
    O !== "-" && P.push({ name: n.name || n.dataKey, unit: n.unit || "", value: O, payload: w, dataKey: d, type: u });
    var T = qi({ axis: t, ticks: o, bandSize: p, entry: w, index: S, dataKey: f }), $ = qi({ axis: r, ticks: s, bandSize: g, entry: w, index: S, dataKey: h }), E = O !== "-" ? n.scale(O) : m, I = Math.sqrt(Math.max(E, 0) / Math.PI);
    return ze(ze({}, w), {}, { cx: T, cy: $, x: T - I, y: $ - I, xAxis: t, yAxis: r, zAxis: n, width: 2 * I, height: 2 * I, size: E, node: { x: v, y: b, z: O }, tooltipPayload: P, tooltipPosition: { x: T, y: $ }, payload: w }, l && l[S] && l[S].props);
  });
  return ze({ points: _ }, c);
});
function aa(e7) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e7);
}
function gH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function bH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, EO(n.key), n);
  }
}
function _H(e7, t, r) {
  return t && bH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function wH(e7, t, r) {
  return t = lu(t), SH(e7, TO() ? Reflect.construct(t, r || [], lu(e7).constructor) : t.apply(e7, r));
}
function SH(e7, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return OH(e7);
}
function OH(e7) {
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
function xH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && Bh(e7, t);
}
function Bh(e7, t) {
  return Bh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bh(e7, t);
}
function IO(e7, t, r) {
  return t = EO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function EO(e7) {
  var t = AH(e7, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function AH(e7, t) {
  if (aa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Rh() {
  return Rh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Rh.apply(this, arguments);
}
function PH(e7) {
  var t = e7.xAxisId, r = bp(), n = _p(), i = iO(t);
  return i == null ? null : B.createElement(Aa, Rh({}, i, { className: mt("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return kr(o, true);
  } }));
}
var Uo = function(e7) {
  function t() {
    return gH(this, t), wH(this, t, arguments);
  }
  return xH(t, e7), _H(t, [{ key: "render", value: function() {
    return B.createElement(PH, this.props);
  } }]);
}(B.Component);
IO(Uo, "displayName", "XAxis");
IO(Uo, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function oa(e7) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e7);
}
function TH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function IH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, MO(n.key), n);
  }
}
function EH(e7, t, r) {
  return t && IH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function $H(e7, t, r) {
  return t = fu(t), DH(e7, $O() ? Reflect.construct(t, r || [], fu(e7).constructor) : t.apply(e7, r));
}
function DH(e7, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return MH(e7);
}
function MH(e7) {
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
function NH(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && kh(e7, t);
}
function kh(e7, t) {
  return kh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kh(e7, t);
}
function DO(e7, t, r) {
  return t = MO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function MO(e7) {
  var t = CH(e7, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function CH(e7, t) {
  if (oa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
function Lh() {
  return Lh = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Lh.apply(this, arguments);
}
var jH = function(t) {
  var r = t.yAxisId, n = bp(), i = _p(), a = aO(r);
  return a == null ? null : B.createElement(Aa, Lh({}, a, { className: mt("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return kr(s, true);
  } }));
}, $i = function(e7) {
  function t() {
    return TH(this, t), $H(this, t, arguments);
  }
  return NH(t, e7), EH(t, [{ key: "render", value: function() {
    return B.createElement(jH, this.props);
  } }]);
}(B.Component);
DO($i, "displayName", "YAxis");
DO($i, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function zg(e7) {
  return LH(e7) || kH(e7) || RH(e7) || BH();
}
function BH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RH(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Fh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fh(e7, t);
  }
}
function kH(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function LH(e7) {
  if (Array.isArray(e7)) return Fh(e7);
}
function Fh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
}
var Uh = function(t, r, n, i, a) {
  var o = Pe(t, Sp), s = Pe(t, rl), c = [].concat(zg(o), zg(s)), u = Pe(t, il), l = "".concat(i, "Id"), f = i[0], h = r;
  if (c.length && (h = c.reduce(function(m, p) {
    if (p.props[l] === n && Or(p.props, "extendDomain") && L(p.props[f])) {
      var g = p.props[f];
      return [Math.min(m[0], g), Math.max(m[1], g)];
    }
    return m;
  }, h)), u.length) {
    var d = "".concat(f, "1"), y = "".concat(f, "2");
    h = u.reduce(function(m, p) {
      if (p.props[l] === n && Or(p.props, "extendDomain") && L(p.props[d]) && L(p.props[y])) {
        var g = p.props[d], _ = p.props[y];
        return [Math.min(m[0], g, _), Math.max(m[1], g, _)];
      }
      return m;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(m, p) {
    return L(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, h)), h;
}, NO = { exports: {} };
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
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e7.exports = s;
})(NO);
var FH = NO.exports;
const UH = Bt(FH);
var Yl = new UH(), Xl = "recharts.syncMouseEvents";
function zo(e7) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e7);
}
function zH(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function WH(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, CO(n.key), n);
  }
}
function VH(e7, t, r) {
  return t && WH(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function Jl(e7, t, r) {
  return t = CO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function CO(e7) {
  var t = GH(e7, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function GH(e7, t) {
  if (zo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e7);
}
var qH = function() {
  function e7() {
    zH(this, e7), Jl(this, "activeIndex", 0), Jl(this, "coordinateList", []), Jl(this, "layout", "horizontal");
  }
  return VH(e7, [{ key: "setDetails", value: function(r) {
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
function HH(e7, t, r) {
  if (r === "number" && t === true && Array.isArray(e7)) {
    var n = e7 == null ? void 0 : e7[0], i = e7 == null ? void 0 : e7[1];
    if (n && i && L(n) && L(i)) return true;
  }
  return false;
}
function KH(e7, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e7 === "horizontal" ? t.x - i : r.left + 0.5, y: e7 === "horizontal" ? r.top + 0.5 : t.y - i, width: e7 === "horizontal" ? n : r.width - 1, height: e7 === "horizontal" ? r.height - 1 : n };
}
function jO(e7) {
  var t = e7.cx, r = e7.cy, n = e7.radius, i = e7.startAngle, a = e7.endAngle, o = ue(t, r, n, i), s = ue(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function YH(e7, t, r) {
  var n, i, a, o;
  if (e7 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e7 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e7 === "centric") {
    var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, h = ue(s, c, u, f), d = ue(s, c, l, f);
    n = h.x, i = h.y, a = d.x, o = d.y;
  } else return jO(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function Wo(e7) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e7);
}
function Wg(e7, t) {
  var r = Object.keys(e7);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e7);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e7, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bs(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(r), true).forEach(function(n) {
      XH(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : Wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function XH(e7, t, r) {
  return t = JH(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function JH(e7) {
  var t = QH(e7, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function QH(e7, t) {
  if (Wo(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (Wo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
function ZH(e7) {
  var t, r, n = e7.element, i = e7.tooltipEventType, a = e7.isActive, o = e7.activeCoordinate, s = e7.activePayload, c = e7.offset, u = e7.activeTooltipIndex, l = e7.tooltipAxisBandSize, f = e7.layout, h = e7.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
  var y, m = Fn;
  if (h === "ScatterChart") y = o, m = xW;
  else if (h === "BarChart") y = KH(f, o, c, l), m = yp;
  else if (f === "radial") {
    var p = jO(o), g = p.cx, _ = p.cy, w = p.radius, S = p.startAngle, v = p.endAngle;
    y = { cx: g, cy: _, startAngle: S, endAngle: v, innerRadius: w, outerRadius: w }, m = $S;
  } else y = { points: YH(f, o, c) }, m = Fn;
  var b = bs(bs(bs(bs({ stroke: "#ccc", pointerEvents: "none" }, c), y), ct(d, false)), {}, { payload: s, payloadIndex: u, className: mt("recharts-tooltip-cursor", d.className) });
  return B.isValidElement(d) ? B.cloneElement(d, b) : B.createElement(m, b);
}
var tK = ["item"], eK = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function sa(e7) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e7);
}
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e7[n] = r[n]);
    }
    return e7;
  }, Si.apply(this, arguments);
}
function Vg(e7, t) {
  return iK(e7) || nK(e7, t) || RO(e7, t) || rK();
}
function rK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nK(e7, t) {
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
function iK(e7) {
  if (Array.isArray(e7)) return e7;
}
function Gg(e7, t) {
  if (e7 == null) return {};
  var r = aK(e7, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e7);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e7, n) && (r[n] = e7[n]);
  }
  return r;
}
function aK(e7, t) {
  if (e7 == null) return {};
  var r = {};
  for (var n in e7) if (Object.prototype.hasOwnProperty.call(e7, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e7[n];
  }
  return r;
}
function oK(e7, t) {
  if (!(e7 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sK(e7, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e7, kO(n.key), n);
  }
}
function cK(e7, t, r) {
  return t && sK(e7.prototype, t), Object.defineProperty(e7, "prototype", { writable: false }), e7;
}
function uK(e7, t, r) {
  return t = hu(t), lK(e7, BO() ? Reflect.construct(t, r || [], hu(e7).constructor) : t.apply(e7, r));
}
function lK(e7, t) {
  if (t && (sa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return fK(e7);
}
function fK(e7) {
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
function hu(e7) {
  return hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hu(e7);
}
function hK(e7, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e7.prototype = Object.create(t && t.prototype, { constructor: { value: e7, writable: true, configurable: true } }), Object.defineProperty(e7, "prototype", { writable: false }), t && zh(e7, t);
}
function zh(e7, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e7, t);
}
function ca(e7) {
  return yK(e7) || pK(e7) || RO(e7) || dK();
}
function dK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RO(e7, t) {
  if (e7) {
    if (typeof e7 == "string") return Wh(e7, t);
    var r = Object.prototype.toString.call(e7).slice(8, -1);
    if (r === "Object" && e7.constructor && (r = e7.constructor.name), r === "Map" || r === "Set") return Array.from(e7);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wh(e7, t);
  }
}
function pK(e7) {
  if (typeof Symbol < "u" && e7[Symbol.iterator] != null || e7["@@iterator"] != null) return Array.from(e7);
}
function yK(e7) {
  if (Array.isArray(e7)) return Wh(e7);
}
function Wh(e7, t) {
  (t == null || t > e7.length) && (t = e7.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e7[r];
  return n;
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
function M(e7) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qg(Object(r), true).forEach(function(n) {
      J(e7, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e7, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e7, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e7;
}
function J(e7, t, r) {
  return t = kO(t), t in e7 ? Object.defineProperty(e7, t, { value: r, enumerable: true, configurable: true, writable: true }) : e7[t] = r, e7;
}
function kO(e7) {
  var t = mK(e7, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function mK(e7, t) {
  if (sa(e7) != "object" || !e7) return e7;
  var r = e7[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e7, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e7);
}
var vK = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, gK = { width: "100%", height: "100%" }, LO = { x: 0, y: 0 };
function _s(e7) {
  return e7;
}
var bK = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, _K = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal") return { x: a.coordinate, y: i.y };
    if (t === "vertical") return { x: i.x, y: a.coordinate };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return M(M(M({}, i), ue(i.cx, i.cy, s, o)), {}, { angle: o, radius: s });
    }
    var c = a.coordinate, u = i.angle;
    return M(M(M({}, i), ue(i.cx, i.cy, c, u)), {}, { angle: u, radius: c });
  }
  return LO;
}, sl = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(ca(s), ca(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function FO(e7) {
  return e7 === "number" ? [0, "auto"] : void 0;
}
var Vh = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = sl(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = f === void 0 ? s : f;
      h = lc(d, o.dataKey, i);
    } else h = f && f[n] || s[n];
    return h ? [].concat(ca(c), [TS(u, h)]) : c;
  }, []);
}, Hg = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = bK(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = r6(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, h = Vh(t, r, l, f), d = _K(n, s, l, a);
    return { activeTooltipIndex: l, activeLabel: f, activePayload: h, activeCoordinate: d };
  }
  return null;
}, wK = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = t.stackOffset, d = xS(l, a);
  return n.reduce(function(y, m) {
    var p, g = m.type.defaultProps !== void 0 ? M(M({}, m.type.defaultProps), m.props) : m.props, _ = g.type, w = g.dataKey, S = g.allowDataOverflow, v = g.allowDuplicatedCategory, b = g.scale, O = g.ticks, P = g.includeHidden, T = g[o];
    if (y[T]) return y;
    var $ = sl(t.data, { graphicalItems: i.filter(function(W) {
      var it, Rt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o];
      return Rt === T;
    }), dataStartIndex: c, dataEndIndex: u }), E = $.length, I, j, N;
    HH(g.domain, S, _) && (I = nh(g.domain, null, S), d && (_ === "number" || b !== "auto") && (N = Ya($, w, "category")));
    var D = FO(_);
    if (!I || I.length === 0) {
      var C, R = (C = g.domain) !== null && C !== void 0 ? C : D;
      if (w) {
        if (I = Ya($, w, _), _ === "category" && d) {
          var F = WE(I);
          v && F ? (j = I, I = Xc(0, E)) : v || (I = xv(R, I, m).reduce(function(W, it) {
            return W.indexOf(it) >= 0 ? W : [].concat(ca(W), [it]);
          }, []));
        } else if (_ === "category") v ? I = I.filter(function(W) {
          return W !== "" && !st(W);
        }) : I = xv(R, I, m).reduce(function(W, it) {
          return W.indexOf(it) >= 0 || it === "" || st(it) ? W : [].concat(ca(W), [it]);
        }, []);
        else if (_ === "number") {
          var U = s6($, i.filter(function(W) {
            var it, Rt, Kt = o in W.props ? W.props[o] : (it = W.type.defaultProps) === null || it === void 0 ? void 0 : it[o], $e = "hide" in W.props ? W.props.hide : (Rt = W.type.defaultProps) === null || Rt === void 0 ? void 0 : Rt.hide;
            return Kt === T && (P || !$e);
          }), w, a, l);
          U && (I = U);
        }
        d && (_ === "number" || b !== "auto") && (N = Ya($, w, "category"));
      } else d ? I = Xc(0, E) : s && s[T] && s[T].hasStack && _ === "number" ? I = h === "expand" ? [0, 1] : PS(s[T].stackGroups, c, u) : I = OS($, i.filter(function(W) {
        var it = o in W.props ? W.props[o] : W.type.defaultProps[o], Rt = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return it === T && (P || !Rt);
      }), _, l, true);
      if (_ === "number") I = Uh(f, I, T, a, O), R && (I = nh(R, I, S));
      else if (_ === "category" && R) {
        var G = R, rt = I.every(function(W) {
          return G.indexOf(W) >= 0;
        });
        rt && (I = G);
      }
    }
    return M(M({}, y), {}, J({}, T, M(M({}, g), {}, { axisType: a, domain: I, categoricalDomain: N, duplicateDomain: j, originalDomain: (p = g.domain) !== null && p !== void 0 ? p : D, isCategorical: d, layout: l })));
  }, {});
}, SK = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, h = sl(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: u }), d = h.length, y = xS(l, a), m = -1;
  return n.reduce(function(p, g) {
    var _ = g.type.defaultProps !== void 0 ? M(M({}, g.type.defaultProps), g.props) : g.props, w = _[o], S = FO("number");
    if (!p[w]) {
      m++;
      var v;
      return y ? v = Xc(0, d) : s && s[w] && s[w].hasStack ? (v = PS(s[w].stackGroups, c, u), v = Uh(f, v, w, a)) : (v = nh(S, OS(h, n.filter(function(b) {
        var O, P, T = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], $ = "hide" in b.props ? b.props.hide : (P = b.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return T === w && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), v = Uh(f, v, w, a)), M(M({}, p), {}, J({}, w, M(M({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ke(vK, "".concat(a, ".").concat(m % 2), null), domain: v, originalDomain: S, isCategorical: y, layout: l })));
    }
    return p;
  }, {});
}, OK = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), h = Pe(l, a), d = {};
  return h && h.length ? d = wK(t, { axes: h, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u }) : o && o.length && (d = SK(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: f, stackGroups: s, dataStartIndex: c, dataEndIndex: u })), d;
}, xK = function(t) {
  var r = on(t), n = kr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: Ud(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Fc(r, n) };
}, Kg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Ce(r, Yi), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, AK = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = Lr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Yg = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, PK = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, h = n.margin || {}, d = Ce(f, Yi), y = Ce(f, Rn), m = Object.keys(c).reduce(function(v, b) {
    var O = c[b], P = O.orientation;
    return !O.mirror && !O.hide ? M(M({}, v), {}, J({}, P, v[P] + O.width)) : v;
  }, { left: h.left || 0, right: h.right || 0 }), p = Object.keys(o).reduce(function(v, b) {
    var O = o[b], P = O.orientation;
    return !O.mirror && !O.hide ? M(M({}, v), {}, J({}, P, Ke(v, "".concat(P)) + O.height)) : v;
  }, { top: h.top || 0, bottom: h.bottom || 0 }), g = M(M({}, p), m), _ = g.bottom;
  d && (g.bottom += d.props.height || Yi.defaultProps.height), y && r && (g = a6(g, i, n, r));
  var w = u - g.left - g.right, S = l - g.top - g.bottom;
  return M(M({ brushBottom: _ }, g), {}, { width: Math.max(w, 0), height: Math.max(S, 0) });
}, TK = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, IK = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, h = function(g, _) {
    var w = _.graphicalItems, S = _.stackGroups, v = _.offset, b = _.updateId, O = _.dataStartIndex, P = _.dataEndIndex, T = g.barSize, $ = g.layout, E = g.barGap, I = g.barCategoryGap, j = g.maxBarSize, N = Yg($), D = N.numericAxisName, C = N.cateAxisName, R = AK(w), F = [];
    return w.forEach(function(U, G) {
      var rt = sl(g.data, { graphicalItems: [U], dataStartIndex: O, dataEndIndex: P }), W = U.type.defaultProps !== void 0 ? M(M({}, U.type.defaultProps), U.props) : U.props, it = W.dataKey, Rt = W.maxBarSize, Kt = W["".concat(D, "Id")], $e = W["".concat(C, "Id")], Sn = {}, _e = c.reduce(function(On, xn) {
        var cl = _["".concat(xn.axisType, "Map")], Ap = W["".concat(xn.axisType, "Id")];
        cl && cl[Ap] || xn.axisType === "zAxis" || Kn();
        var Pp = cl[Ap];
        return M(M({}, On), {}, J(J({}, xn.axisType, Pp), "".concat(xn.axisType, "Ticks"), kr(Pp)));
      }, Sn), z = _e[C], lt = _e["".concat(C, "Ticks")], ft = S && S[Kt] && S[Kt].hasStack && b6(U, S[Kt].stackGroups), k = Lr(U.type).indexOf("Bar") >= 0, Vt = Fc(z, lt), bt = [], Jt = R && n6({ barSize: T, stackGroups: S, totalSize: TK(_e, C) });
      if (k) {
        var Qt, we, Qr = st(Rt) ? j : Rt, ri = (Qt = (we = Fc(z, lt, true)) !== null && we !== void 0 ? we : Qr) !== null && Qt !== void 0 ? Qt : 0;
        bt = i6({ barGap: E, barCategoryGap: I, bandSize: ri !== Vt ? ri : Vt, sizeList: Jt[$e], maxBarSize: Qr }), ri !== Vt && (bt = bt.map(function(On) {
          return M(M({}, On), {}, { position: M(M({}, On.position), {}, { offset: On.position.offset - ri / 2 }) });
        }));
      }
      var rs = U && U.type && U.type.getComposedData;
      rs && F.push({ props: M(M({}, rs(M(M({}, _e), {}, { displayedData: rt, props: g, dataKey: it, item: U, bandSize: Vt, barPosition: bt, offset: v, stackedData: ft, layout: $, dataStartIndex: O, dataEndIndex: P }))), {}, J(J(J({ key: U.key || "item-".concat(G) }, D, _e[D]), C, _e[C]), "animationId", b)), childIndex: r$(U, g.children), item: U });
    }), F;
  }, d = function(g, _) {
    var w = g.props, S = g.dataStartIndex, v = g.dataEndIndex, b = g.updateId;
    if (!vy({ props: w })) return null;
    var O = w.children, P = w.layout, T = w.stackOffset, $ = w.data, E = w.reverseStackOrder, I = Yg(P), j = I.numericAxisName, N = I.cateAxisName, D = Pe(O, n), C = m6($, D, "".concat(j, "Id"), "".concat(N, "Id"), T, E), R = c.reduce(function(W, it) {
      var Rt = "".concat(it.axisType, "Map");
      return M(M({}, W), {}, J({}, Rt, OK(w, M(M({}, it), {}, { graphicalItems: D, stackGroups: it.axisType === j && C, dataStartIndex: S, dataEndIndex: v }))));
    }, {}), F = PK(M(M({}, R), {}, { props: w, graphicalItems: D }), _ == null ? void 0 : _.legendBBox);
    Object.keys(R).forEach(function(W) {
      R[W] = l(w, R[W], F, W.replace("Map", ""), r);
    });
    var U = R["".concat(N, "Map")], G = xK(U), rt = h(w, M(M({}, R), {}, { dataStartIndex: S, dataEndIndex: v, updateId: b, graphicalItems: D, stackGroups: C, offset: F }));
    return M(M({ formattedGraphicalItems: rt, graphicalItems: D, offset: F, stackGroups: C }, G), R);
  }, y = function(p) {
    function g(_) {
      var w, S, v;
      return oK(this, g), v = uK(this, g, [_]), J(v, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), J(v, "accessibilityManager", new qH()), J(v, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = v.state, P = O.dataStartIndex, T = O.dataEndIndex, $ = O.updateId;
          v.setState(M({ legendBBox: b }, d({ props: v.props, dataStartIndex: P, dataEndIndex: T, updateId: $ }, M(M({}, v.state), {}, { legendBBox: b }))));
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
            return M({ dataStartIndex: O, dataEndIndex: P }, d({ props: v.props, dataStartIndex: O, dataEndIndex: P, updateId: T }, v.state));
          }), v.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: P });
        }
      }), J(v, "handleMouseEnter", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = M(M({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onMouseEnter;
          ut(T) && T(P, b);
        }
      }), J(v, "triggeredAfterMouseMove", function(b) {
        var O = v.getMouseInfo(b), P = O ? M(M({}, O), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        v.setState(P), v.triggerSyncEvent(P);
        var T = v.props.onMouseMove;
        ut(T) && T(P, b);
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
        ut(P) && P(O, b);
      }), J(v, "handleOuterEvent", function(b) {
        var O = e$(b), P = Ke(v.props, "".concat(O));
        if (O && ut(P)) {
          var T, $;
          /.*touch.*/i.test(O) ? $ = v.getMouseInfo(b.changedTouches[0]) : $ = v.getMouseInfo(b), P((T = $) !== null && T !== void 0 ? T : {}, b);
        }
      }), J(v, "handleClick", function(b) {
        var O = v.getMouseInfo(b);
        if (O) {
          var P = M(M({}, O), {}, { isTooltipActive: true });
          v.setState(P), v.triggerSyncEvent(P);
          var T = v.props.onClick;
          ut(T) && T(P, b);
        }
      }), J(v, "handleMouseDown", function(b) {
        var O = v.props.onMouseDown;
        if (ut(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "handleMouseUp", function(b) {
        var O = v.props.onMouseUp;
        if (ut(O)) {
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
        if (ut(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "handleContextMenu", function(b) {
        var O = v.props.onContextMenu;
        if (ut(O)) {
          var P = v.getMouseInfo(b);
          O(P, b);
        }
      }), J(v, "triggerSyncEvent", function(b) {
        v.props.syncId !== void 0 && Yl.emit(Xl, v.props.syncId, b, v.eventEmitterSymbol);
      }), J(v, "applySyncEvent", function(b) {
        var O = v.props, P = O.layout, T = O.syncMethod, $ = v.state.updateId, E = b.dataStartIndex, I = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0) v.setState(M({ dataStartIndex: E, dataEndIndex: I }, d({ props: v.props, dataStartIndex: E, dataEndIndex: I, updateId: $ }, v.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var j = b.chartX, N = b.chartY, D = b.activeTooltipIndex, C = v.state, R = C.offset, F = C.tooltipTicks;
          if (!R) return;
          if (typeof T == "function") D = T(F, b);
          else if (T === "value") {
            D = -1;
            for (var U = 0; U < F.length; U++) if (F[U].value === b.activeLabel) {
              D = U;
              break;
            }
          }
          var G = M(M({}, R), {}, { x: R.left, y: R.top }), rt = Math.min(j, G.x + G.width), W = Math.min(N, G.y + G.height), it = F[D] && F[D].value, Rt = Vh(v.state, v.props.data, D), Kt = F[D] ? { x: P === "horizontal" ? F[D].coordinate : rt, y: P === "horizontal" ? W : F[D].coordinate } : LO;
          v.setState(M(M({}, b), {}, { activeLabel: it, activeCoordinate: Kt, activePayload: Rt, activeTooltipIndex: D }));
        } else v.setState(b);
      }), J(v, "renderCursor", function(b) {
        var O, P = v.state, T = P.isTooltipActive, $ = P.activeCoordinate, E = P.activePayload, I = P.offset, j = P.activeTooltipIndex, N = P.tooltipAxisBandSize, D = v.getTooltipEventType(), C = (O = b.props.active) !== null && O !== void 0 ? O : T, R = v.props.layout, F = b.key || "_recharts-cursor";
        return A.createElement(ZH, { key: F, activeCoordinate: $, activePayload: E, activeTooltipIndex: j, chartName: r, element: b, isActive: C, layout: R, offset: I, tooltipAxisBandSize: N, tooltipEventType: D });
      }), J(v, "renderPolarAxis", function(b, O, P) {
        var T = Ke(b, "type.axisType"), $ = Ke(v.state, "".concat(T, "Map")), E = b.type.defaultProps, I = E !== void 0 ? M(M({}, E), b.props) : b.props, j = $ && $[I["".concat(T, "Id")]];
        return B.cloneElement(b, M(M({}, j), {}, { className: mt(T, j.className), key: b.key || "".concat(O, "-").concat(P), ticks: kr(j, true) }));
      }), J(v, "renderPolarGrid", function(b) {
        var O = b.props, P = O.radialLines, T = O.polarAngles, $ = O.polarRadius, E = v.state, I = E.radiusAxisMap, j = E.angleAxisMap, N = on(I), D = on(j), C = D.cx, R = D.cy, F = D.innerRadius, U = D.outerRadius;
        return B.cloneElement(b, { polarAngles: Array.isArray(T) ? T : kr(D, true).map(function(G) {
          return G.coordinate;
        }), polarRadius: Array.isArray($) ? $ : kr(N, true).map(function(G) {
          return G.coordinate;
        }), cx: C, cy: R, innerRadius: F, outerRadius: U, key: b.key || "polar-grid", radialLines: P });
      }), J(v, "renderLegend", function() {
        var b = v.state.formattedGraphicalItems, O = v.props, P = O.children, T = O.width, $ = O.height, E = v.props.margin || {}, I = T - (E.left || 0) - (E.right || 0), j = wS({ children: P, formattedGraphicalItems: b, legendWidth: I, legendContent: u });
        if (!j) return null;
        var N = j.item, D = Gg(j, tK);
        return B.cloneElement(N, M(M({}, D), {}, { chartWidth: T, chartHeight: $, margin: E, onBBoxUpdate: v.handleLegendBBoxUpdate }));
      }), J(v, "renderTooltip", function() {
        var b, O = v.props, P = O.children, T = O.accessibilityLayer, $ = Ce(P, rr);
        if (!$) return null;
        var E = v.state, I = E.isTooltipActive, j = E.activeCoordinate, N = E.activePayload, D = E.activeLabel, C = E.offset, R = (b = $.props.active) !== null && b !== void 0 ? b : I;
        return B.cloneElement($, { viewBox: M(M({}, C), {}, { x: C.left, y: C.top }), active: R, label: D, payload: R ? N : [], coordinate: j, accessibilityLayer: T });
      }), J(v, "renderBrush", function(b) {
        var O = v.props, P = O.margin, T = O.data, $ = v.state, E = $.offset, I = $.dataStartIndex, j = $.dataEndIndex, N = $.updateId;
        return B.cloneElement(b, { key: b.key || "_recharts-brush", onChange: ys(v.handleBrushChange, b.props.onChange), data: T, x: L(b.props.x) ? b.props.x : E.left, y: L(b.props.y) ? b.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0), width: L(b.props.width) ? b.props.width : E.width, startIndex: I, endIndex: j, updateId: "brush-".concat(N) });
      }), J(v, "renderReferenceElement", function(b, O, P) {
        if (!b) return null;
        var T = v, $ = T.clipPathId, E = v.state, I = E.xAxisMap, j = E.yAxisMap, N = E.offset, D = b.type.defaultProps || {}, C = b.props, R = C.xAxisId, F = R === void 0 ? D.xAxisId : R, U = C.yAxisId, G = U === void 0 ? D.yAxisId : U;
        return B.cloneElement(b, { key: b.key || "".concat(O, "-").concat(P), xAxis: I[F], yAxis: j[G], viewBox: { x: N.left, y: N.top, width: N.width, height: N.height }, clipPathId: $ });
      }), J(v, "renderActivePoints", function(b) {
        var O = b.item, P = b.activePoint, T = b.basePoint, $ = b.childIndex, E = b.isRange, I = [], j = O.props.key, N = O.item.type.defaultProps !== void 0 ? M(M({}, O.item.type.defaultProps), O.item.props) : O.item.props, D = N.activeDot, C = N.dataKey, R = M(M({ index: $, dataKey: C, cx: P.x, cy: P.y, r: 4, fill: pp(O.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ct(D, false)), fc(D));
        return I.push(g.renderActiveDot(D, R, "".concat(j, "-activePoint-").concat($))), T ? I.push(g.renderActiveDot(D, M(M({}, R), {}, { cx: T.x, cy: T.y }), "".concat(j, "-basePoint-").concat($))) : E && I.push(null), I;
      }), J(v, "renderGraphicChild", function(b, O, P) {
        var T = v.filterFormatItem(b, O, P);
        if (!T) return null;
        var $ = v.getTooltipEventType(), E = v.state, I = E.isTooltipActive, j = E.tooltipAxis, N = E.activeTooltipIndex, D = E.activeLabel, C = v.props.children, R = Ce(C, rr), F = T.props, U = F.points, G = F.isRange, rt = F.baseLine, W = T.item.type.defaultProps !== void 0 ? M(M({}, T.item.type.defaultProps), T.item.props) : T.item.props, it = W.activeDot, Rt = W.hide, Kt = W.activeBar, $e = W.activeShape, Sn = !!(!Rt && I && R && (it || Kt || $e)), _e = {};
        $ !== "axis" && R && R.props.trigger === "click" ? _e = { onClick: ys(v.handleItemMouseEnter, b.props.onClick) } : $ !== "axis" && (_e = { onMouseLeave: ys(v.handleItemMouseLeave, b.props.onMouseLeave), onMouseEnter: ys(v.handleItemMouseEnter, b.props.onMouseEnter) });
        var z = B.cloneElement(b, M(M({}, T.props), _e));
        function lt(xn) {
          return typeof j.dataKey == "function" ? j.dataKey(xn.payload) : null;
        }
        if (Sn) if (N >= 0) {
          var ft, k;
          if (j.dataKey && !j.allowDuplicatedCategory) {
            var Vt = typeof j.dataKey == "function" ? lt : "payload.".concat(j.dataKey.toString());
            ft = lc(U, Vt, D), k = G && rt && lc(rt, Vt, D);
          } else ft = U == null ? void 0 : U[N], k = G && rt && rt[N];
          if ($e || Kt) {
            var bt = b.props.activeIndex !== void 0 ? b.props.activeIndex : N;
            return [B.cloneElement(b, M(M(M({}, T.props), _e), {}, { activeIndex: bt })), null, null];
          }
          if (!st(ft)) return [z].concat(ca(v.renderActivePoints({ item: T, activePoint: ft, basePoint: k, childIndex: N, isRange: G })));
        } else {
          var Jt, Qt = (Jt = v.getItemByXY(v.state.activeCoordinate)) !== null && Jt !== void 0 ? Jt : { graphicalItem: z }, we = Qt.graphicalItem, Qr = we.item, ri = Qr === void 0 ? b : Qr, rs = we.childIndex, On = M(M(M({}, T.props), _e), {}, { activeIndex: rs });
          return [B.cloneElement(ri, On), null, null];
        }
        return G ? [z, null, null] : [z, null];
      }), J(v, "renderCustomized", function(b, O, P) {
        return B.cloneElement(b, M(M({ key: "recharts-customized-".concat(P) }, v.props), v.state));
      }), J(v, "renderMap", { CartesianGrid: { handler: _s, once: true }, ReferenceArea: { handler: v.renderReferenceElement }, ReferenceLine: { handler: _s }, ReferenceDot: { handler: v.renderReferenceElement }, XAxis: { handler: _s }, YAxis: { handler: _s }, Brush: { handler: v.renderBrush, once: true }, Bar: { handler: v.renderGraphicChild }, Line: { handler: v.renderGraphicChild }, Area: { handler: v.renderGraphicChild }, Radar: { handler: v.renderGraphicChild }, RadialBar: { handler: v.renderGraphicChild }, Scatter: { handler: v.renderGraphicChild }, Pie: { handler: v.renderGraphicChild }, Funnel: { handler: v.renderGraphicChild }, Tooltip: { handler: v.renderCursor, once: true }, PolarGrid: { handler: v.renderPolarGrid, once: true }, PolarAngleAxis: { handler: v.renderPolarAxis }, PolarRadiusAxis: { handler: v.renderPolarAxis }, Customized: { handler: v.renderCustomized } }), v.clipPathId = "".concat((w = _.id) !== null && w !== void 0 ? w : Qn("recharts"), "-clip"), v.throttleTriggeredAfterMouseMove = Sw(v.triggeredAfterMouseMove, (S = _.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), v.state = {}, v;
    }
    return hK(g, p), cK(g, [{ key: "componentDidMount", value: function() {
      var w, S;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var w = this.props, S = w.children, v = w.data, b = w.height, O = w.layout, P = Ce(S, rr);
      if (P) {
        var T = P.props.defaultIndex;
        if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
          var $ = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, E = Vh(this.state, v, T, $), I = this.state.tooltipTicks[T].coordinate, j = (this.state.offset.top + b) / 2, N = O === "horizontal", D = N ? { x: I, y: j } : { y: I, x: j }, C = this.state.formattedGraphicalItems.find(function(F) {
            var U = F.item;
            return U.type.name === "Scatter";
          });
          C && (D = M(M({}, D), C.props.points[T].tooltipPosition), E = C.props.points[T].tooltipPayload);
          var R = { activeTooltipIndex: T, isTooltipActive: true, activeLabel: $, activePayload: E, activeCoordinate: D };
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
      gf([Ce(w.children, rr)], [Ce(this.props.children, rr)]) || this.displayDefaultTooltip();
    } }, { key: "componentWillUnmount", value: function() {
      this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
    } }, { key: "getTooltipEventType", value: function() {
      var w = Ce(this.props.children, rr);
      if (w && typeof w.props.shared == "boolean") {
        var S = w.props.shared ? "axis" : "item";
        return s.indexOf(S) >= 0 ? S : a;
      }
      return a;
    } }, { key: "getMouseInfo", value: function(w) {
      if (!this.container) return null;
      var S = this.container, v = S.getBoundingClientRect(), b = IL(v), O = { chartX: Math.round(w.pageX - b.left), chartY: Math.round(w.pageY - b.top) }, P = v.width / S.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, P);
      if (!T) return null;
      var $ = this.state, E = $.xAxisMap, I = $.yAxisMap, j = this.getTooltipEventType(), N = Hg(this.state, this.props.data, this.props.layout, T);
      if (j !== "axis" && E && I) {
        var D = on(E).scale, C = on(I).scale, R = D && D.invert ? D.invert(O.chartX) : null, F = C && C.invert ? C.invert(O.chartY) : null;
        return M(M({}, O), {}, { xValue: R, yValue: F }, N);
      }
      return N ? M(M({}, O), N) : null;
    } }, { key: "inRange", value: function(w, S) {
      var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = w / v, P = S / v;
      if (b === "horizontal" || b === "vertical") {
        var T = this.state.offset, $ = O >= T.left && O <= T.left + T.width && P >= T.top && P <= T.top + T.height;
        return $ ? { x: O, y: P } : null;
      }
      var E = this.state, I = E.angleAxisMap, j = E.radiusAxisMap;
      if (I && j) {
        var N = on(I);
        return Tv({ x: O, y: P }, N);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var w = this.props.children, S = this.getTooltipEventType(), v = Ce(w, rr), b = {};
      v && S === "axis" && (v.props.trigger === "click" ? b = { onClick: this.handleClick } : b = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = fc(this.props, this.handleOuterEvent);
      return M(M({}, O), b);
    } }, { key: "addListener", value: function() {
      Yl.on(Xl, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      Yl.removeListener(Xl, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(w, S, v) {
      for (var b = this.state.formattedGraphicalItems, O = 0, P = b.length; O < P; O++) {
        var T = b[O];
        if (T.item === w || T.props.key === w.key || S === Lr(T.item.type) && v === T.childIndex) return T;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var w = this.clipPathId, S = this.state.offset, v = S.left, b = S.top, O = S.height, P = S.width;
      return A.createElement("defs", null, A.createElement("clipPath", { id: w }, A.createElement("rect", { x: v, y: b, height: O, width: P })));
    } }, { key: "getXScales", value: function() {
      var w = this.state.xAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = Vg(v, 2), O = b[0], P = b[1];
        return M(M({}, S), {}, J({}, O, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var w = this.state.yAxisMap;
      return w ? Object.entries(w).reduce(function(S, v) {
        var b = Vg(v, 2), O = b[0], P = b[1];
        return M(M({}, S), {}, J({}, O, P.scale));
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
        var T = v[O], $ = T.props, E = T.item, I = E.type.defaultProps !== void 0 ? M(M({}, E.type.defaultProps), E.props) : E.props, j = Lr(E.type);
        if (j === "Bar") {
          var N = ($.data || []).find(function(F) {
            return pW(w, F);
          });
          if (N) return { graphicalItem: T, payload: N };
        } else if (j === "RadialBar") {
          var D = ($.data || []).find(function(F) {
            return Tv(w, F);
          });
          if (D) return { graphicalItem: T, payload: D };
        } else if (Qu(T, b) || Zu(T, b) || Bo(T, b)) {
          var C = m5({ graphicalItem: T, activeTooltipItem: b, itemData: I.data }), R = I.activeIndex === void 0 ? C : I.activeIndex;
          return { graphicalItem: M(M({}, T), {}, { childIndex: R }), payload: Bo(T, b) ? I.data[C] : T.props.data[C] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var w = this;
      if (!vy(this)) return null;
      var S = this.props, v = S.children, b = S.className, O = S.width, P = S.height, T = S.style, $ = S.compact, E = S.title, I = S.desc, j = Gg(S, eK), N = ct(j, false);
      if ($) return A.createElement(Sg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement(_f, Si({}, N, { width: O, height: P, title: E, desc: I }), this.renderClipPath(), by(v, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var D, C;
        N.tabIndex = (D = this.props.tabIndex) !== null && D !== void 0 ? D : 0, N.role = (C = this.props.role) !== null && C !== void 0 ? C : "application", N.onKeyDown = function(F) {
          w.accessibilityManager.keyboardEvent(F);
        }, N.onFocus = function() {
          w.accessibilityManager.focus();
        };
      }
      var R = this.parseEventsOfWrapper();
      return A.createElement(Sg, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, A.createElement("div", Si({ className: mt("recharts-wrapper", b), style: M({ position: "relative", cursor: "default", width: O, height: P }, T) }, R, { ref: function(U) {
        w.container = U;
      } }), A.createElement(_f, Si({}, N, { width: O, height: P, title: E, desc: I, style: gK }), this.renderClipPath(), by(v, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(B.Component);
  J(y, "displayName", r), J(y, "defaultProps", M({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, f)), J(y, "getDerivedStateFromProps", function(p, g) {
    var _ = p.dataKey, w = p.data, S = p.children, v = p.width, b = p.height, O = p.layout, P = p.stackOffset, T = p.margin, $ = g.dataStartIndex, E = g.dataEndIndex;
    if (g.updateId === void 0) {
      var I = Kg(p);
      return M(M(M({}, I), {}, { updateId: 0 }, d(M(M({ props: p }, I), {}, { updateId: 0 }), g)), {}, { prevDataKey: _, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (_ !== g.prevDataKey || w !== g.prevData || v !== g.prevWidth || b !== g.prevHeight || O !== g.prevLayout || P !== g.prevStackOffset || !Ti(T, g.prevMargin)) {
      var j = Kg(p), N = { chartX: g.chartX, chartY: g.chartY, isTooltipActive: g.isTooltipActive }, D = M(M({}, Hg(g, w, O)), {}, { updateId: g.updateId + 1 }), C = M(M(M({}, j), N), D);
      return M(M(M({}, C), d(M({ props: p }, C), g)), {}, { prevDataKey: _, prevData: w, prevWidth: v, prevHeight: b, prevLayout: O, prevStackOffset: P, prevMargin: T, prevChildren: S });
    }
    if (!gf(S, g.prevChildren)) {
      var R, F, U, G, rt = Ce(S, Yi), W = rt && (R = (F = rt.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && R !== void 0 ? R : $, it = rt && (U = (G = rt.props) === null || G === void 0 ? void 0 : G.endIndex) !== null && U !== void 0 ? U : E, Rt = W !== $ || it !== E, Kt = !st(w), $e = Kt && !Rt ? g.updateId : g.updateId + 1;
      return M(M({ updateId: $e }, d(M(M({ props: p }, g), {}, { updateId: $e, dataStartIndex: W, dataEndIndex: it }), g)), {}, { prevChildren: S, dataStartIndex: W, dataEndIndex: it });
    }
    return null;
  }), J(y, "renderActiveDot", function(p, g, _) {
    var w;
    return B.isValidElement(p) ? w = B.cloneElement(p, g) : ut(p) ? w = p(g) : w = A.createElement(Ju, g), A.createElement(St, { className: "recharts-active-dot", key: _ }, w);
  });
  var m = B.forwardRef(function(g, _) {
    return A.createElement(y, Si({}, g, { ref: _ }));
  });
  return m.displayName = y.displayName, m;
}, Xg = IK({ chartName: "ComposedChart", GraphicalChild: [Un, Gr, xa, ol], axisComponents: [{ axisType: "xAxis", AxisComp: Uo }, { axisType: "yAxis", AxisComp: $i }, { axisType: "zAxis", AxisComp: al }], formatAxisMap: UV });
const EK = ["day", "week", "month", "quarter", "year"];
function eY({ mode: e7, methodId: t, methodName: r, topMethods: n = [], topN: i = 10 }) {
  const [a, o] = B.useState("week"), [s, c] = B.useState([]), [u, l] = B.useState([]), [f, h] = B.useState(false), [d, y] = B.useState(false);
  B.useEffect(() => {
    let g = false;
    async function _() {
      y(true);
      try {
        if (e7 === "single" && t) {
          const w = await uP(t, a);
          g || c(w);
        } else if (e7 === "topN") {
          const w = n.slice(0, i).map((v) => v.method_id), S = await lP(w, a);
          g || l(S);
        }
      } finally {
        g || y(false);
      }
    }
    return _(), () => {
      g = true;
    };
  }, [e7, t, a, n, i]);
  const m = B.useMemo(() => {
    const g = /* @__PURE__ */ new Map();
    for (const _ of u) {
      const w = String(_.period), S = g.get(w) ?? { period: w };
      S[_.method_name] = _.profit, g.set(w, S);
    }
    return [...g.values()];
  }, [u]), p = B.useMemo(() => [...new Set(u.map((g) => g.method_name))], [u]);
  return yt.jsxs("section", { className: "osrs-mmg__panel osrs-mmg__trends", children: [yt.jsxs("div", { className: "osrs-mmg__trends-header", children: [yt.jsx("h3", { children: e7 === "single" ? `Trends \xB7 ${r ?? "Method"}` : "Top methods over time" }), yt.jsxs("div", { className: "osrs-mmg__period-row", children: [EK.map((g) => yt.jsx("button", { type: "button", className: g === a ? "is-active" : "", onClick: () => o(g), children: g }, g)), e7 === "single" ? yt.jsxs("label", { className: "osrs-mmg__volume-toggle", children: [yt.jsx("input", { type: "checkbox", checked: f, onChange: (g) => h(g.target.checked) }), "Item volume"] }) : null] })] }), d ? yt.jsx("p", { children: "Loading chart\u2026" }) : null, e7 === "single" && s.length > 0 ? yt.jsx(mm, { width: "100%", height: 280, children: yt.jsxs(Xg, { data: s, children: [yt.jsx($h, { strokeDasharray: "3 3", stroke: "#334155" }), yt.jsx(Uo, { dataKey: "period", tick: { fontSize: 11 } }), yt.jsx($i, { yAxisId: "profit", tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), f ? yt.jsx($i, { yAxisId: "volume", orientation: "right", tickFormatter: (g) => `${Math.round(g / 1e3)}k` }) : null, yt.jsx(rr, { formatter: (g) => ny(g) }), yt.jsx(Gr, { yAxisId: "profit", dataKey: "p75", stackId: "band", fill: "#1e3a5f", stroke: "none", name: "p75" }), yt.jsx(Gr, { yAxisId: "profit", dataKey: "p25", stackId: "band", fill: "#0f172a", stroke: "none", name: "p25" }), yt.jsx(Un, { yAxisId: "profit", type: "monotone", dataKey: "median_profit", stroke: "#38bdf8", name: "Median GP/h" }), f ? yt.jsx(Un, { yAxisId: "volume", type: "monotone", dataKey: "item_volume", stroke: "#fbbf24", name: "GE volume" }) : null] }) }) : null, e7 === "topN" && m.length > 0 ? yt.jsx(mm, { width: "100%", height: 320, children: yt.jsxs(Xg, { data: m, children: [yt.jsx($h, { strokeDasharray: "3 3", stroke: "#334155" }), yt.jsx(Uo, { dataKey: "period", tick: { fontSize: 11 } }), yt.jsx($i, { tickFormatter: (g) => `${Math.round(g / 1e3)}k` }), yt.jsx(rr, { formatter: (g) => ny(g) }), yt.jsx(Rn, {}), p.map((g, _) => yt.jsx(Un, { type: "monotone", dataKey: g, stroke: Jg[_ % Jg.length] }, g))] }) }) : null, !d && e7 === "single" && s.length === 0 ? yt.jsx("p", { className: "osrs-mmg__muted", children: "No snapshot history yet for this method." }) : null, !d && e7 === "topN" && m.length === 0 ? yt.jsx("p", { className: "osrs-mmg__muted", children: "Re-rank the table to pick top methods, or wait for more daily snapshots." }) : null] });
}
const Jg = ["#38bdf8", "#a78bfa", "#34d399", "#fb7185", "#fbbf24", "#94a3b8"], rY = [{ id: "marlin", methodName: "Cuttingraw marlin", methodUrl: "/w/Money_making_guide/Cutting_raw_marlin", defaultKph: 11e3, kphUnitName: "Marlins per hour", assumptionText: "", inputTotalPk: 5015, inputTotalPh: 0, outputTotalPk: 5978, outputTotalPh: 0, inputs: [{ itemName: "Raw marlin", wikiSlug: "Raw_marlin", qtyPerCompletion: 1, gpPerCompletion: 5015 }], outputs: [{ itemName: "Fine fish offcuts", wikiSlug: "Fine_fish_offcuts", qtyPerCompletion: 1, gpPerCompletion: 671 }, { itemName: "Marlin scales", wikiSlug: "Marlin_scales", qtyPerCompletion: 3, gpPerCompletion: 5307 }] }, { id: "tob", methodName: "Completing theTheatre of Blood(trio)", methodUrl: "/w/Money_making_guide/Theatre_of_Blood", defaultKph: 3, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes3kills per hour in trios with 0 deaths. Your actual profits may be higher or lower depending on your actual kc/hour, your group size, the number of deaths per raid and luck.3kills per hour requires minimal downtime, few mistakes and efficient strategies. The supply cost given is the average supply cost for each role (Mage, Melee Freeze, Ranger, Melee).", inputTotalPk: 306831, inputTotalPh: 0, outputTotalPk: 40403529699803e-7, outputTotalPh: 0, inputs: [{ itemName: "Super combat potion(4)", wikiSlug: "Super_combat_potion(4)", qtyPerCompletion: 1.5, gpPerCompletion: 20295 }, { itemName: "Divine super combat potion(4)", wikiSlug: "Divine_super_combat_potion(4)", qtyPerCompletion: 1, gpPerCompletion: 19559 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 0.5, gpPerCompletion: 1256 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 1, gpPerCompletion: 11174 }, { itemName: "Zulrah's scales", wikiSlug: "Zulrah's_scales", qtyPerCompletion: 27, gpPerCompletion: 4779 }, { itemName: "Dragon dart", wikiSlug: "Dragon_dart", qtyPerCompletion: 8, gpPerCompletion: 10904 }, { itemName: "Black chinchompa", wikiSlug: "Black_chinchompa", qtyPerCompletion: 7, gpPerCompletion: 20713 }, { itemName: "Ice Barrage", wikiSlug: "Ice_Barrage", qtyPerCompletion: 6, gpPerCompletion: 8496 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 11478 }, { itemName: "Spellbook Swap", wikiSlug: "Spellbook_Swap", qtyPerCompletion: 6, gpPerCompletion: 3756 }, { itemName: "Vengeance", wikiSlug: "Vengeance", qtyPerCompletion: 15, gpPerCompletion: 17310 }, { itemName: "Scythe of vitur", wikiSlug: "Scythe_of_vitur", qtyPerCompletion: 220, gpPerCompletion: 149193 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 8, gpPerCompletion: 23872 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 2, gpPerCompletion: 4046 }], outputs: [{ itemName: "Scythe of vitur (uncharged)", wikiSlug: "Scythe_of_vitur_(uncharged)", qtyPerCompletion: 0.0019278966647388, gpPerCompletion: 27976156256025e-7 }, { itemName: "Avernic defender hilt", wikiSlug: "Avernic_defender_hilt", qtyPerCompletion: 0.01542317331791, gpPerCompletion: 512047.58048968 }, { itemName: "Ghrazi rapier", wikiSlug: "Ghrazi_rapier", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 114430.00578369 }, { itemName: "Sanguinesti staff (uncharged)", wikiSlug: "Sanguinesti_staff_(uncharged)", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 74450.854058222 }, { itemName: "Justiciar faceguard", wikiSlug: "Justiciar_faceguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 48395.527279737 }, { itemName: "Justiciar chestguard", wikiSlug: "Justiciar_chestguard", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 44466.400616926 }, { itemName: "Justiciar legguards", wikiSlug: "Justiciar_legguards", qtyPerCompletion: 0.0038557933294775, gpPerCompletion: 47547.919799498 }, { itemName: "Runite ore", wikiSlug: "Runite_ore", qtyPerCompletion: 6.3558, gpPerCompletion: 65299.4892 }] }, { id: "smithing", methodName: "Smithing Oathplate armour fromCrushed infernal shaleandOathplate shards", methodUrl: "/w/Money_making_guide/Smithing_oathplate_armour", defaultKph: 4, kphUnitName: "Armour pieces per hour", assumptionText: "The profit rate assumes4pieces of armour made per hour with few mistakes made during the smithing process. The guide automatically picks the highest value piece for display and profit calculations.", inputTotalPk: 87685200, inputTotalPh: 0, outputTotalPk: 88809329, outputTotalPh: 0, inputs: [{ itemName: "Crushed infernal shale", wikiSlug: "Crushed_infernal_shale", qtyPerCompletion: 2520, gpPerCompletion: 806400 }, { itemName: "Oathplate shards", wikiSlug: "Oathplate_shards", qtyPerCompletion: 450, gpPerCompletion: 86878800 }], outputs: [{ itemName: "Oathplate legs", wikiSlug: "Oathplate_legs", qtyPerCompletion: 1, gpPerCompletion: 88809329 }] }, { id: "mokhaiotl", methodName: "Killing TheDoom of Mokhaiotl(Delve 1-16)", methodUrl: "/w/Money_making_guide/Killing_the_Doom_of_Mokhaiotl_(Delve_1-16)", defaultKph: 2.5, kphUnitName: "Kills per hour", assumptionText: "The profit rate assumes2.5Delve 1-16 completions per hour, looting at the end of each run. Your completion speed may vary based on your performance, stats and equipment used. Scorching bow users can expect closer to 2 completions per hour. Supply cost assumes the use of aTwistedorScorching bow, the player is on the Arceuus spellbook using thralls until wave 6, constant use ofdeath charge, and using azaryte crossbowspecial attack every wave.", inputTotalPk: 344347, inputTotalPh: 154237, outputTotalPk: 72345276648025e-7, outputTotalPh: 0, inputs: [{ itemName: "Divine ranging potion(4)", wikiSlug: "Divine_ranging_potion(4)", qtyPerCompletion: 3, gpPerCompletion: 19041 }, { itemName: "Ranging potion(4)", wikiSlug: "Ranging_potion(4)", qtyPerCompletion: 6, gpPerCompletion: 15072 }, { itemName: "Anglerfish", wikiSlug: "Anglerfish", qtyPerCompletion: 4, gpPerCompletion: 8092 }, { itemName: "Super restore(4)", wikiSlug: "Super_restore(4)", qtyPerCompletion: 5, gpPerCompletion: 55870 }, { itemName: "Saradomin brew(4)", wikiSlug: "Saradomin_brew(4)", qtyPerCompletion: 6, gpPerCompletion: 46536 }, { itemName: "Extended anti-venom+(4)", wikiSlug: "Extended_anti-venom+(4)", qtyPerCompletion: 2.5, gpPerCompletion: 47660 }, { itemName: "Death Charge", wikiSlug: "Death_Charge", qtyPerCompletion: 56, gpPerCompletion: 72464 }, { itemName: "Resurrect Greater Ghost", wikiSlug: "Resurrect_Greater_Ghost", qtyPerCompletion: 6, gpPerCompletion: 13878 }, { itemName: "Superior Demonbane", wikiSlug: "Superior_Demonbane", qtyPerCompletion: 41, gpPerCompletion: 33538 }, { itemName: "Dragon arrow", wikiSlug: "Dragon_arrow", qtyPerCompletion: 40, gpPerCompletion: 119360 }, { itemName: "Ruby dragon bolts (e)", wikiSlug: "Ruby_dragon_bolts_(e)", qtyPerCompletion: 3.2, gpPerCompletion: 9104 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1, gpPerCompletion: 57969 }], outputs: [{ itemName: "Avernic treads", wikiSlug: "Avernic_treads", qtyPerCompletion: 0.021073503475464, gpPerCompletion: 36718848828421e-7 }, { itemName: "Eye of ayak (uncharged)", wikiSlug: "Eye_of_ayak_(uncharged)", qtyPerCompletion: 0.021573503475464, gpPerCompletion: 11296287039712e-7 }, { itemName: "Mokhaiotl cloth", wikiSlug: "Mokhaiotl_cloth", qtyPerCompletion: 0.021973503475464, gpPerCompletion: 12328797525538e-7 }, { itemName: "Demon tear", wikiSlug: "Demon_tear", qtyPerCompletion: 1479.7349128671, gpPerCompletion: 479434.11176894 }, { itemName: "Mokhaiotl waystone", wikiSlug: "Mokhaiotl_waystone", qtyPerCompletion: 1.560204615624, gpPerCompletion: 88635.224213599 }, { itemName: "Aether catalyst", wikiSlug: "Aether_catalyst", qtyPerCompletion: 227.88871078774, gpPerCompletion: 81584.158462011 }, { itemName: "Dragon med helm", wikiSlug: "Dragon_med_helm", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 44168.58165062 }, { itemName: "Mystic earth staff", wikiSlug: "Mystic_earth_staff", qtyPerCompletion: 0.76612401392181, gpPerCompletion: 18782.296325307 }] }], $K = "osrs-mmg-cache", Vo = "artifacts", UO = "duckdb";
function zO() {
  return new Promise((e7, t) => {
    const r = indexedDB.open($K, 1);
    r.onupgradeneeded = () => {
      r.result.createObjectStore(Vo);
    }, r.onsuccess = () => e7(r.result), r.onerror = () => t(r.error ?? new Error("IndexedDB open failed"));
  });
}
async function DK() {
  const e7 = await zO();
  return new Promise((t, r) => {
    const i = e7.transaction(Vo, "readonly").objectStore(Vo).get(UO);
    i.onsuccess = () => t(i.result ?? null), i.onerror = () => r(i.error ?? new Error("IndexedDB read failed"));
  });
}
async function MK(e7) {
  const t = await zO();
  return new Promise((r, n) => {
    const i = t.transaction(Vo, "readwrite");
    i.objectStore(Vo).put(e7, UO), i.oncomplete = () => r(), i.onerror = () => n(i.error ?? new Error("IndexedDB write failed"));
  });
}
async function NK(e7) {
  const t = await fetch(e7, { cache: "no-cache" });
  if (!t.ok) throw new Error(`Failed to download DuckDB (${t.status})`);
  return t.arrayBuffer();
}
async function CK() {
  const e7 = await fetch(WO, { cache: "no-cache" });
  if (!e7.ok) throw new Error(`Failed to load manifest (${e7.status})`);
  return await e7.json();
}
function jK(e7, t) {
  return t ? e7.artifacts.database.sha256 !== t : true;
}
function nY() {
  const [e7, t] = B.useState({ ready: false, loading: ci() || Zl(), error: null, manifest: null, fromCache: false, localMode: ci() }), [r, n] = B.useState(0), i = B.useCallback(() => {
    n((a) => a + 1);
  }, []);
  return B.useEffect(() => {
    if (!ci() && !Zl()) {
      t({ ready: false, loading: false, error: null, manifest: null, fromCache: false, localMode: false });
      return;
    }
    let a = false;
    async function o() {
      const u = await fetch(Ql, { cache: "no-cache" });
      if (!u.ok) throw new Error(`Failed to load local DuckDB (${u.status}). Run: make import-osrs-db`);
      const l = await u.arrayBuffer(), f = u.headers.get("etag") ?? u.headers.get("last-modified") ?? `${Ql}:${l.byteLength}`;
      let h = null;
      await ey(l, f), a || t({ ready: true, loading: false, error: null, manifest: h, fromCache: false, localMode: true });
    }
    async function s() {
      const u = await CK(), l = await DK(), f = jK(u, (l == null ? void 0 : l.sha256) ?? null);
      let h, d = false;
      !f && l ? (h = l.bytes, d = true) : (h = await NK(VO(u)), await MK({ sha256: u.artifacts.database.sha256, bytes: h, fetchedAt: (/* @__PURE__ */ new Date()).toISOString() })), await ey(h, u.artifacts.database.sha256), a || t({ ready: true, loading: false, error: null, manifest: u, fromCache: d, localMode: false });
    }
    async function c() {
      t((u) => ({ ...u, loading: true, error: null }));
      try {
        ci() ? await o() : await s();
      } catch (u) {
        a || t({ ready: false, loading: false, error: u instanceof Error ? u.message : String(u), manifest: null, fromCache: false, localMode: ci() });
      }
    }
    return c(), () => {
      a = true;
    };
  }, [r]), { ...e7, reload: i };
}
export {
  tY as O,
  rY as S,
  LK as a,
  ny as b,
  eY as c,
  HK as d,
  XK as e,
  qK as f,
  KK as g,
  QK as h,
  JK as i,
  ZK as j,
  gu as r,
  YK as s,
  nY as u,
  o_ as w
};
