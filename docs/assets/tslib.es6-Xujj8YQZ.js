var w = function() {
  return w = Object.assign || function(o) {
    for (var r, t = 1, i = arguments.length; t < i; t++) {
      r = arguments[t];
      for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (o[e] = r[e]);
    }
    return o;
  }, w.apply(this, arguments);
};
function S(n, o) {
  var r = {};
  for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && o.indexOf(t) < 0 && (r[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, t = Object.getOwnPropertySymbols(n); i < t.length; i++) o.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[i]) && (r[t[i]] = n[t[i]]);
  return r;
}
function g(n, o, r, t) {
  function i(e) {
    return e instanceof r ? e : new r(function(a) {
      a(e);
    });
  }
  return new (r || (r = Promise))(function(e, a) {
    function f(s) {
      try {
        y(t.next(s));
      } catch (p) {
        a(p);
      }
    }
    function c(s) {
      try {
        y(t.throw(s));
      } catch (p) {
        a(p);
      }
    }
    function y(s) {
      s.done ? e(s.value) : i(s.value).then(f, c);
    }
    y((t = t.apply(n, o || [])).next());
  });
}
function d(n) {
  var o = typeof Symbol == "function" && Symbol.iterator, r = o && n[o], t = 0;
  if (r) return r.call(n);
  if (n && typeof n.length == "number") return { next: function() {
    return n && t >= n.length && (n = void 0), { value: n && n[t++], done: !n };
  } };
  throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function O(n, o, r) {
  if (r || arguments.length === 2) for (var t = 0, i = o.length, e; t < i; t++) (e || !(t in o)) && (e || (e = Array.prototype.slice.call(o, 0, t)), e[t] = o[t]);
  return n.concat(e || Array.prototype.slice.call(o));
}
function b(n) {
  return this instanceof b ? (this.v = n, this) : new b(n);
}
function j(n, o, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = r.apply(n, o || []), i, e = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), f("next"), f("throw"), f("return", a), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(u) {
    return function(l) {
      return Promise.resolve(l).then(u, p);
    };
  }
  function f(u, l) {
    t[u] && (i[u] = function(h) {
      return new Promise(function(v, _) {
        e.push([u, h, v, _]) > 1 || c(u, h);
      });
    }, l && (i[u] = l(i[u])));
  }
  function c(u, l) {
    try {
      y(t[u](l));
    } catch (h) {
      m(e[0][3], h);
    }
  }
  function y(u) {
    u.value instanceof b ? Promise.resolve(u.value.v).then(s, p) : m(e[0][2], u);
  }
  function s(u) {
    c("next", u);
  }
  function p(u) {
    c("throw", u);
  }
  function m(u, l) {
    u(l), e.shift(), e.length && c(e[0][0], e[0][1]);
  }
}
function x(n) {
  var o, r;
  return o = {}, t("next"), t("throw", function(i) {
    throw i;
  }), t("return"), o[Symbol.iterator] = function() {
    return this;
  }, o;
  function t(i, e) {
    o[i] = n[i] ? function(a) {
      return (r = !r) ? { value: b(n[i](a)), done: false } : e ? e(a) : a;
    } : e;
  }
}
function I(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var o = n[Symbol.asyncIterator], r;
  return o ? o.call(n) : (n = typeof d == "function" ? d(n) : n[Symbol.iterator](), r = {}, t("next"), t("throw"), t("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function t(e) {
    r[e] = n[e] && function(a) {
      return new Promise(function(f, c) {
        a = n[e](a), i(f, c, a.done, a.value);
      });
    };
  }
  function i(e, a, f, c) {
    Promise.resolve(c).then(function(y) {
      e({ value: y, done: f });
    }, a);
  }
}
export {
  j as _,
  b as a,
  x as b,
  I as c,
  g as d,
  w as e,
  S as f,
  O as g
};
