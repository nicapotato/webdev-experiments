const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SnakeSinglePlayerPage-BXwBqR1L.js","assets/button-D-kmfqC9.js","assets/utils-CO_k8hEn.js","assets/badge-C7BIJ3u4.js","assets/snake-game-multiplayer-HojqPLVm.js","assets/gin-DHzzR3IR.js","assets/SnakePlayBackground-kEsXwql9.js","assets/createLucideIcon-C6AFw-_j.js","assets/rotate-ccw-BYoUNIHK.js","assets/grid-3x3-6ExqiN75.js","assets/TypingPage-k3ZT7Hld.js","assets/page-C0pb9wzg.js","assets/chess-game-multiplayer-XMnaIFi4.js","assets/checkers-game-multiplayer-BKVBYG5z.js","assets/fighter-game-multiplayer-DyF09_Ov.js","assets/multiplayer-join-gate-DCBl9E8O.js","assets/users-917X1AQ7.js","assets/arrow-left-iac-O2xV.js","assets/page-CimH6JAu.js","assets/player-utils-sDKa8flh.js","assets/wifi-mvvv7C4K.js","assets/page-CckUpzDj.js","assets/ChessBoardMultiplayer-Bn89UPST.js","assets/page-CItU7HtB.js","assets/page-ByYcrNb6.js"])))=>i.map(i=>d[i]);
let e1, g0, wl, U, Pb, wa, od, v1, ly, b1, At, S0, Gt, i1, ja, S, u1, Ib, Fb, pv, v, x1, Lr, S1;
let __tla = (async () => {
  function j0(e, t) {
    for (var a = 0; a < t.length; a++) {
      const l = t[a];
      if (typeof l != "string" && !Array.isArray(l)) {
        for (const n in l) if (n !== "default" && !(n in e)) {
          const u = Object.getOwnPropertyDescriptor(l, n);
          u && Object.defineProperty(e, n, u.get ? u : {
            enumerable: true,
            get: () => l[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) l(n);
    new MutationObserver((n) => {
      for (const u of n) if (u.type === "childList") for (const i of u.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function a(n) {
      const u = {};
      return n.integrity && (u.integrity = n.integrity), n.referrerPolicy && (u.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? u.credentials = "include" : n.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function l(n) {
      if (n.ep) return;
      n.ep = true;
      const u = a(n);
      fetch(n.href, u);
    }
  })();
  function Jf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var $f = {
    exports: {}
  }, _i = {};
  var U0 = Symbol.for("react.transitional.element"), H0 = Symbol.for("react.fragment");
  function Wf(e, t, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), t.key !== void 0 && (l = "" + t.key), "key" in t) {
      a = {};
      for (var n in t) n !== "key" && (a[n] = t[n]);
    } else a = t;
    return t = a.ref, {
      $$typeof: U0,
      type: e,
      key: l,
      ref: t !== void 0 ? t : null,
      props: a
    };
  }
  _i.Fragment = H0;
  _i.jsx = Wf;
  _i.jsxs = Wf;
  $f.exports = _i;
  let Ff, X;
  S = $f.exports;
  Ff = {
    exports: {}
  };
  X = {};
  var Hs = Symbol.for("react.transitional.element"), B0 = Symbol.for("react.portal"), q0 = Symbol.for("react.fragment"), L0 = Symbol.for("react.strict_mode"), Y0 = Symbol.for("react.profiler"), G0 = Symbol.for("react.consumer"), X0 = Symbol.for("react.context"), Q0 = Symbol.for("react.forward_ref"), V0 = Symbol.for("react.suspense"), Z0 = Symbol.for("react.memo"), Pf = Symbol.for("react.lazy"), k0 = Symbol.for("react.activity"), ao = Symbol.iterator;
  function K0(e) {
    return e === null || typeof e != "object" ? null : (e = ao && e[ao] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var If = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ed = Object.assign, td = {};
  function Ql(e, t, a) {
    this.props = e, this.context = t, this.refs = td, this.updater = a || If;
  }
  Ql.prototype.isReactComponent = {};
  Ql.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Ql.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function ad() {
  }
  ad.prototype = Ql.prototype;
  function Bs(e, t, a) {
    this.props = e, this.context = t, this.refs = td, this.updater = a || If;
  }
  var qs = Bs.prototype = new ad();
  qs.constructor = Bs;
  ed(qs, Ql.prototype);
  qs.isPureReactComponent = true;
  var lo = Array.isArray;
  function Hc() {
  }
  var se = {
    H: null,
    A: null,
    T: null,
    S: null
  }, ld = Object.prototype.hasOwnProperty;
  function Ls(e, t, a) {
    var l = a.ref;
    return {
      $$typeof: Hs,
      type: e,
      key: t,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  function J0(e, t) {
    return Ls(e.type, t, e.props);
  }
  function Ys(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hs;
  }
  function $0(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(a) {
      return t[a];
    });
  }
  var no = /\/+/g;
  function Ji(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? $0("" + e.key) : t.toString(36);
  }
  function W0(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(Hc, Hc) : (e.status = "pending", e.then(function(t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        }, function(t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        })), e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function rl(e, t, a, l, n) {
    var u = typeof e;
    (u === "undefined" || u === "boolean") && (e = null);
    var i = false;
    if (e === null) i = true;
    else switch (u) {
      case "bigint":
      case "string":
      case "number":
        i = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hs:
          case B0:
            i = true;
            break;
          case Pf:
            return i = e._init, rl(i(e._payload), t, a, l, n);
        }
    }
    if (i) return n = n(e), i = l === "" ? "." + Ji(e, 0) : l, lo(n) ? (a = "", i != null && (a = i.replace(no, "$&/") + "/"), rl(n, t, a, "", function(o) {
      return o;
    })) : n != null && (Ys(n) && (n = J0(n, a + (n.key == null || e && e.key === n.key ? "" : ("" + n.key).replace(no, "$&/") + "/") + i)), t.push(n)), 1;
    i = 0;
    var c = l === "" ? "." : l + ":";
    if (lo(e)) for (var s = 0; s < e.length; s++) l = e[s], u = c + Ji(l, s), i += rl(l, t, a, u, n);
    else if (s = K0(e), typeof s == "function") for (e = s.call(e), s = 0; !(l = e.next()).done; ) l = l.value, u = c + Ji(l, s++), i += rl(l, t, a, u, n);
    else if (u === "object") {
      if (typeof e.then == "function") return rl(W0(e), t, a, l, n);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return i;
  }
  function ou(e, t, a) {
    if (e == null) return e;
    var l = [], n = 0;
    return rl(e, l, "", "", function(u) {
      return t.call(a, u, n++);
    }), l;
  }
  function F0(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(a) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = a);
      }, function(a) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = a);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var uo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, P0 = {
    map: ou,
    forEach: function(e, t, a) {
      ou(e, function() {
        t.apply(this, arguments);
      }, a);
    },
    count: function(e) {
      var t = 0;
      return ou(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return ou(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Ys(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  X.Activity = k0;
  X.Children = P0;
  X.Component = Ql;
  X.Fragment = q0;
  X.Profiler = Y0;
  X.PureComponent = Bs;
  X.StrictMode = L0;
  X.Suspense = V0;
  X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se;
  X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e) {
      return se.H.useMemoCache(e);
    }
  };
  X.cache = function(e) {
    return function() {
      return e.apply(null, arguments);
    };
  };
  X.cacheSignal = function() {
    return null;
  };
  X.cloneElement = function(e, t, a) {
    if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
    var l = ed({}, e.props), n = e.key;
    if (t != null) for (u in t.key !== void 0 && (n = "" + t.key), t) !ld.call(t, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && t.ref === void 0 || (l[u] = t[u]);
    var u = arguments.length - 2;
    if (u === 1) l.children = a;
    else if (1 < u) {
      for (var i = Array(u), c = 0; c < u; c++) i[c] = arguments[c + 2];
      l.children = i;
    }
    return Ls(e.type, n, l);
  };
  X.createContext = function(e) {
    return e = {
      $$typeof: X0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = e, e.Consumer = {
      $$typeof: G0,
      _context: e
    }, e;
  };
  X.createElement = function(e, t, a) {
    var l, n = {}, u = null;
    if (t != null) for (l in t.key !== void 0 && (u = "" + t.key), t) ld.call(t, l) && l !== "key" && l !== "__self" && l !== "__source" && (n[l] = t[l]);
    var i = arguments.length - 2;
    if (i === 1) n.children = a;
    else if (1 < i) {
      for (var c = Array(i), s = 0; s < i; s++) c[s] = arguments[s + 2];
      n.children = c;
    }
    if (e && e.defaultProps) for (l in i = e.defaultProps, i) n[l] === void 0 && (n[l] = i[l]);
    return Ls(e, u, n);
  };
  X.createRef = function() {
    return {
      current: null
    };
  };
  X.forwardRef = function(e) {
    return {
      $$typeof: Q0,
      render: e
    };
  };
  X.isValidElement = Ys;
  X.lazy = function(e) {
    return {
      $$typeof: Pf,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: F0
    };
  };
  X.memo = function(e, t) {
    return {
      $$typeof: Z0,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  X.startTransition = function(e) {
    var t = se.T, a = {};
    se.T = a;
    try {
      var l = e(), n = se.S;
      n !== null && n(a, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(Hc, uo);
    } catch (u) {
      uo(u);
    } finally {
      t !== null && a.types !== null && (t.types = a.types), se.T = t;
    }
  };
  X.unstable_useCacheRefresh = function() {
    return se.H.useCacheRefresh();
  };
  X.use = function(e) {
    return se.H.use(e);
  };
  X.useActionState = function(e, t, a) {
    return se.H.useActionState(e, t, a);
  };
  X.useCallback = function(e, t) {
    return se.H.useCallback(e, t);
  };
  X.useContext = function(e) {
    return se.H.useContext(e);
  };
  X.useDebugValue = function() {
  };
  X.useDeferredValue = function(e, t) {
    return se.H.useDeferredValue(e, t);
  };
  X.useEffect = function(e, t) {
    return se.H.useEffect(e, t);
  };
  X.useEffectEvent = function(e) {
    return se.H.useEffectEvent(e);
  };
  X.useId = function() {
    return se.H.useId();
  };
  X.useImperativeHandle = function(e, t, a) {
    return se.H.useImperativeHandle(e, t, a);
  };
  X.useInsertionEffect = function(e, t) {
    return se.H.useInsertionEffect(e, t);
  };
  X.useLayoutEffect = function(e, t) {
    return se.H.useLayoutEffect(e, t);
  };
  X.useMemo = function(e, t) {
    return se.H.useMemo(e, t);
  };
  X.useOptimistic = function(e, t) {
    return se.H.useOptimistic(e, t);
  };
  X.useReducer = function(e, t, a) {
    return se.H.useReducer(e, t, a);
  };
  X.useRef = function(e) {
    return se.H.useRef(e);
  };
  X.useState = function(e) {
    return se.H.useState(e);
  };
  X.useSyncExternalStore = function(e, t, a) {
    return se.H.useSyncExternalStore(e, t, a);
  };
  X.useTransition = function() {
    return se.H.useTransition();
  };
  X.version = "19.2.5";
  Ff.exports = X;
  v = Ff.exports;
  U = Jf(v);
  v1 = j0({
    __proto__: null,
    default: U
  }, [
    v
  ]);
  var nd = {
    exports: {}
  }, Ti = {}, ud = {
    exports: {}
  }, id = {};
  (function(e) {
    function t(z, j) {
      var q = z.length;
      z.push(j);
      e: for (; 0 < q; ) {
        var L = q - 1 >>> 1, Z = z[L];
        if (0 < n(Z, j)) z[L] = j, z[q] = Z, q = L;
        else break e;
      }
    }
    function a(z) {
      return z.length === 0 ? null : z[0];
    }
    function l(z) {
      if (z.length === 0) return null;
      var j = z[0], q = z.pop();
      if (q !== j) {
        z[0] = q;
        e: for (var L = 0, Z = z.length, Me = Z >>> 1; L < Me; ) {
          var ge = 2 * (L + 1) - 1, G = z[ge], k = ge + 1, I = z[k];
          if (0 > n(G, q)) k < Z && 0 > n(I, G) ? (z[L] = I, z[k] = q, L = k) : (z[L] = G, z[ge] = q, L = ge);
          else if (k < Z && 0 > n(I, q)) z[L] = I, z[k] = q, L = k;
          else break e;
        }
      }
      return j;
    }
    function n(z, j) {
      var q = z.sortIndex - j.sortIndex;
      return q !== 0 ? q : z.id - j.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      e.unstable_now = function() {
        return u.now();
      };
    } else {
      var i = Date, c = i.now();
      e.unstable_now = function() {
        return i.now() - c;
      };
    }
    var s = [], o = [], m = 1, r = null, d = 3, y = false, T = false, M = false, R = false, f = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
    function E(z) {
      for (var j = a(o); j !== null; ) {
        if (j.callback === null) l(o);
        else if (j.startTime <= z) l(o), j.sortIndex = j.expirationTime, t(s, j);
        else break;
        j = a(o);
      }
    }
    function D(z) {
      if (M = false, E(z), !T) if (a(s) !== null) T = true, x || (x = true, w());
      else {
        var j = a(o);
        j !== null && B(D, j.startTime - z);
      }
    }
    var x = false, _ = -1, C = 5, A = -1;
    function g() {
      return R ? true : !(e.unstable_now() - A < C);
    }
    function b() {
      if (R = false, x) {
        var z = e.unstable_now();
        A = z;
        var j = true;
        try {
          e: {
            T = false, M && (M = false, h(_), _ = -1), y = true;
            var q = d;
            try {
              t: {
                for (E(z), r = a(s); r !== null && !(r.expirationTime > z && g()); ) {
                  var L = r.callback;
                  if (typeof L == "function") {
                    r.callback = null, d = r.priorityLevel;
                    var Z = L(r.expirationTime <= z);
                    if (z = e.unstable_now(), typeof Z == "function") {
                      r.callback = Z, E(z), j = true;
                      break t;
                    }
                    r === a(s) && l(s), E(z);
                  } else l(s);
                  r = a(s);
                }
                if (r !== null) j = true;
                else {
                  var Me = a(o);
                  Me !== null && B(D, Me.startTime - z), j = false;
                }
              }
              break e;
            } finally {
              r = null, d = q, y = false;
            }
            j = void 0;
          }
        } finally {
          j ? w() : x = false;
        }
      }
    }
    var w;
    if (typeof p == "function") w = function() {
      p(b);
    };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), H = O.port2;
      O.port1.onmessage = b, w = function() {
        H.postMessage(null);
      };
    } else w = function() {
      f(b, 0);
    };
    function B(z, j) {
      _ = f(function() {
        z(e.unstable_now());
      }, j);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, e.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < z ? Math.floor(1e3 / z) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_next = function(z) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var q = d;
      d = j;
      try {
        return z();
      } finally {
        d = q;
      }
    }, e.unstable_requestPaint = function() {
      R = true;
    }, e.unstable_runWithPriority = function(z, j) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var q = d;
      d = z;
      try {
        return j();
      } finally {
        d = q;
      }
    }, e.unstable_scheduleCallback = function(z, j, q) {
      var L = e.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? L + q : L) : q = L, z) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = q + Z, z = {
        id: m++,
        callback: j,
        priorityLevel: z,
        startTime: q,
        expirationTime: Z,
        sortIndex: -1
      }, q > L ? (z.sortIndex = q, t(o, z), a(s) === null && z === a(o) && (M ? (h(_), _ = -1) : M = true, B(D, q - L))) : (z.sortIndex = Z, t(s, z), T || y || (T = true, x || (x = true, w()))), z;
    }, e.unstable_shouldYield = g, e.unstable_wrapCallback = function(z) {
      var j = d;
      return function() {
        var q = d;
        d = j;
        try {
          return z.apply(this, arguments);
        } finally {
          d = q;
        }
      };
    };
  })(id);
  ud.exports = id;
  var I0 = ud.exports, cd = {
    exports: {}
  }, Le = {};
  var ey = v;
  function sd(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function na() {
  }
  var qe = {
    d: {
      f: na,
      r: function() {
        throw Error(sd(522));
      },
      D: na,
      C: na,
      L: na,
      m: na,
      X: na,
      S: na,
      M: na
    },
    p: 0,
    findDOMNode: null
  }, ty = Symbol.for("react.portal");
  function ay(e, t, a) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ty,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: a
    };
  }
  var pn = ey.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function zi(e, t) {
    if (e === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = qe;
  Le.createPortal = function(e, t) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(sd(299));
    return ay(e, t, null, a);
  };
  Le.flushSync = function(e) {
    var t = pn.T, a = qe.p;
    try {
      if (pn.T = null, qe.p = 2, e) return e();
    } finally {
      pn.T = t, qe.p = a, qe.d.f();
    }
  };
  Le.preconnect = function(e, t) {
    typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, qe.d.C(e, t));
  };
  Le.prefetchDNS = function(e) {
    typeof e == "string" && qe.d.D(e);
  };
  Le.preinit = function(e, t) {
    if (typeof e == "string" && t && typeof t.as == "string") {
      var a = t.as, l = zi(a, t.crossOrigin), n = typeof t.integrity == "string" ? t.integrity : void 0, u = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      a === "style" ? qe.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u
      }) : a === "script" && qe.d.X(e, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0
      });
    }
  };
  Le.preinitModule = function(e, t) {
    if (typeof e == "string") if (typeof t == "object" && t !== null) {
      if (t.as == null || t.as === "script") {
        var a = zi(t.as, t.crossOrigin);
        qe.d.M(e, {
          crossOrigin: a,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0
        });
      }
    } else t == null && qe.d.M(e);
  };
  Le.preload = function(e, t) {
    if (typeof e == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
      var a = t.as, l = zi(a, t.crossOrigin);
      qe.d.L(e, a, {
        crossOrigin: l,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        type: typeof t.type == "string" ? t.type : void 0,
        fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
        referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
        imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
        imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        media: typeof t.media == "string" ? t.media : void 0
      });
    }
  };
  Le.preloadModule = function(e, t) {
    if (typeof e == "string") if (t) {
      var a = zi(t.as, t.crossOrigin);
      qe.d.m(e, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
        crossOrigin: a,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0
      });
    } else qe.d.m(e);
  };
  Le.requestFormReset = function(e) {
    qe.d.r(e);
  };
  Le.unstable_batchedUpdates = function(e, t) {
    return e(t);
  };
  Le.useFormState = function(e, t, a) {
    return pn.H.useFormState(e, t, a);
  };
  Le.useFormStatus = function() {
    return pn.H.useHostTransitionStatus();
  };
  Le.version = "19.2.5";
  function rd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd);
    } catch (e) {
      console.error(e);
    }
  }
  rd(), cd.exports = Le;
  od = cd.exports;
  ly = Jf(od);
  var _e = I0, fd = v, ny = od;
  function N(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function dd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Zn(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function hd(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function md(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function io(e) {
    if (Zn(e) !== e) throw Error(N(188));
  }
  function uy(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Zn(e), t === null) throw Error(N(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return io(n), e;
          if (u === l) return io(n), t;
          u = u.sibling;
        }
        throw Error(N(188));
      }
      if (a.return !== l.return) a = n, l = u;
      else {
        for (var i = false, c = n.child; c; ) {
          if (c === a) {
            i = true, a = n, l = u;
            break;
          }
          if (c === l) {
            i = true, l = n, a = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === a) {
              i = true, a = u, l = n;
              break;
            }
            if (c === l) {
              i = true, l = u, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(N(189));
        }
      }
      if (a.alternate !== l) throw Error(N(190));
    }
    if (a.tag !== 3) throw Error(N(188));
    return a.stateNode.current === a ? e : t;
  }
  function yd(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = yd(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var re = Object.assign, iy = Symbol.for("react.element"), fu = Symbol.for("react.transitional.element"), fn = Symbol.for("react.portal"), dl = Symbol.for("react.fragment"), pd = Symbol.for("react.strict_mode"), Bc = Symbol.for("react.profiler"), gd = Symbol.for("react.consumer"), Vt = Symbol.for("react.context"), Gs = Symbol.for("react.forward_ref"), qc = Symbol.for("react.suspense"), Lc = Symbol.for("react.suspense_list"), Xs = Symbol.for("react.memo"), ua = Symbol.for("react.lazy"), Yc = Symbol.for("react.activity"), cy = Symbol.for("react.memo_cache_sentinel"), co = Symbol.iterator;
  function tn(e) {
    return e === null || typeof e != "object" ? null : (e = co && e[co] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var sy = Symbol.for("react.client.reference");
  function Gc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === sy ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case dl:
        return "Fragment";
      case Bc:
        return "Profiler";
      case pd:
        return "StrictMode";
      case qc:
        return "Suspense";
      case Lc:
        return "SuspenseList";
      case Yc:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case fn:
        return "Portal";
      case Vt:
        return e.displayName || "Context";
      case gd:
        return (e._context.displayName || "Context") + ".Consumer";
      case Gs:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Xs:
        return t = e.displayName || null, t !== null ? t : Gc(e.type) || "Memo";
      case ua:
        t = e._payload, e = e._init;
        try {
          return Gc(e(t));
        } catch {
        }
    }
    return null;
  }
  var dn = Array.isArray, Y = fd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = ny.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, La = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Xc = [], hl = -1;
  function Dt(e) {
    return {
      current: e
    };
  }
  function Re(e) {
    0 > hl || (e.current = Xc[hl], Xc[hl] = null, hl--);
  }
  function ue(e, t) {
    hl++, Xc[hl] = e.current, e.current = t;
  }
  var wt = Dt(null), Nn = Dt(null), pa = Dt(null), ku = Dt(null);
  function Ku(e, t) {
    switch (ue(pa, t), ue(Nn, e), ue(wt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? yf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = yf(t), e = Bm(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    Re(wt), ue(wt, e);
  }
  function Ol() {
    Re(wt), Re(Nn), Re(pa);
  }
  function Qc(e) {
    e.memoizedState !== null && ue(ku, e);
    var t = wt.current, a = Bm(t, e.type);
    t !== a && (ue(Nn, e), ue(wt, a));
  }
  function Ju(e) {
    Nn.current === e && (Re(wt), Re(Nn)), ku.current === e && (Re(ku), Gn._currentValue = La);
  }
  var $i, so;
  function Ua(e) {
    if ($i === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      $i = t && t[1] || "", so = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + $i + e + so;
  }
  var Wi = false;
  function Fi(e, t) {
    if (!e || Wi) return "";
    Wi = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var r = function() {
                throw Error();
              };
              if (Object.defineProperty(r.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(r, []);
                } catch (y) {
                  var d = y;
                }
                Reflect.construct(e, [], r);
              } else {
                try {
                  r.call();
                } catch (y) {
                  d = y;
                }
                e.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                d = y;
              }
              (r = e()) && typeof r.catch == "function" && r.catch(function() {
              });
            }
          } catch (y) {
            if (y && d && typeof y.stack == "string") return [
              y.stack,
              d.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = l.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), o = c.split(`
`);
        for (n = l = 0; l < s.length && !s[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; n < o.length && !o[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (l === s.length || n === o.length) for (l = s.length - 1, n = o.length - 1; 1 <= l && 0 <= n && s[l] !== o[n]; ) n--;
        for (; 1 <= l && 0 <= n; l--, n--) if (s[l] !== o[n]) {
          if (l !== 1 || n !== 1) do
            if (l--, n--, 0 > n || s[l] !== o[n]) {
              var m = `
` + s[l].replace(" at new ", " at ");
              return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
            }
          while (1 <= l && 0 <= n);
          break;
        }
      }
    } finally {
      Wi = false, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ua(a) : "";
  }
  function ry(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ua(e.type);
      case 16:
        return Ua("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ua("Suspense Fallback") : Ua("Suspense");
      case 19:
        return Ua("SuspenseList");
      case 0:
      case 15:
        return Fi(e.type, false);
      case 11:
        return Fi(e.type.render, false);
      case 1:
        return Fi(e.type, true);
      case 31:
        return Ua("Activity");
      default:
        return "";
    }
  }
  function ro(e) {
    try {
      var t = "", a = null;
      do
        t += ry(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Vc = Object.prototype.hasOwnProperty, Qs = _e.unstable_scheduleCallback, Pi = _e.unstable_cancelCallback, oy = _e.unstable_shouldYield, fy = _e.unstable_requestPaint, tt = _e.unstable_now, dy = _e.unstable_getCurrentPriorityLevel, vd = _e.unstable_ImmediatePriority, bd = _e.unstable_UserBlockingPriority, $u = _e.unstable_NormalPriority, hy = _e.unstable_LowPriority, Sd = _e.unstable_IdlePriority, my = _e.log, yy = _e.unstable_setDisableYieldValue, kn = null, at = null;
  function fa(e) {
    if (typeof my == "function" && yy(e), at && typeof at.setStrictMode == "function") try {
      at.setStrictMode(kn, e);
    } catch {
    }
  }
  var lt = Math.clz32 ? Math.clz32 : vy, py = Math.log, gy = Math.LN2;
  function vy(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (py(e) / gy | 0) | 0;
  }
  var du = 256, hu = 262144, mu = 4194304;
  function Ha(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ai(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = Ha(l) : (i &= c, i !== 0 ? n = Ha(i) : a || (a = c & ~e, a !== 0 && (n = Ha(a))))) : (c = l & ~u, c !== 0 ? n = Ha(c) : i !== 0 ? n = Ha(i) : a || (a = l & ~e, a !== 0 && (n = Ha(a)))), n === 0 ? 0 : t !== 0 && t !== n && !(t & u) && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function Kn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function by(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xd() {
    var e = mu;
    return mu <<= 1, !(mu & 62914560) && (mu = 4194304), e;
  }
  function Ii(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Jn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Sy(e, t, a, l, n, u) {
    var i = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var c = e.entanglements, s = e.expirationTimes, o = e.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var m = 31 - lt(a), r = 1 << m;
      c[m] = 0, s[m] = -1;
      var d = o[m];
      if (d !== null) for (o[m] = null, m = 0; m < d.length; m++) {
        var y = d[m];
        y !== null && (y.lane &= -536870913);
      }
      a &= ~r;
    }
    l !== 0 && Ed(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
  }
  function Ed(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - lt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function _d(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - lt(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function Td(e, t) {
    var a = t & -t;
    return a = a & 42 ? 1 : Vs(a), a & (e.suspendedLanes | t) ? 0 : a;
  }
  function Vs(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Zs(e) {
    return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function zd() {
    var e = P.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Jm(e.type));
  }
  function oo(e, t) {
    var a = P.p;
    try {
      return P.p = e, t();
    } finally {
      P.p = a;
    }
  }
  var Ca = Math.random().toString(36).slice(2), we = "__reactFiber$" + Ca, Ke = "__reactProps$" + Ca, Vl = "__reactContainer$" + Ca, Zc = "__reactEvents$" + Ca, xy = "__reactListeners$" + Ca, Ey = "__reactHandles$" + Ca, fo = "__reactResources$" + Ca, $n = "__reactMarker$" + Ca;
  function ks(e) {
    delete e[we], delete e[Ke], delete e[Zc], delete e[xy], delete e[Ey];
  }
  function ml(e) {
    var t = e[we];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Vl] || a[we]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = Sf(e); e !== null; ) {
          if (a = e[we]) return a;
          e = Sf(e);
        }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Zl(e) {
    if (e = e[we] || e[Vl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function hn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(N(33));
  }
  function Tl(e) {
    var t = e[fo];
    return t || (t = e[fo] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ae(e) {
    e[$n] = true;
  }
  var Ad = /* @__PURE__ */ new Set(), Rd = {};
  function $a(e, t) {
    Dl(e, t), Dl(e + "Capture", t);
  }
  function Dl(e, t) {
    for (Rd[e] = t, e = 0; e < t.length; e++) Ad.add(t[e]);
  }
  var _y = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ho = {}, mo = {};
  function Ty(e) {
    return Vc.call(mo, e) ? true : Vc.call(ho, e) ? false : _y.test(e) ? mo[e] = true : (ho[e] = true, false);
  }
  function Mu(e, t, a) {
    if (Ty(t)) if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var l = t.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + a);
    }
  }
  function yu(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Ht(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function ot(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Md(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zy(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function kc(e) {
    if (!e._valueTracker) {
      var t = Md(e) ? "checked" : "value";
      e._valueTracker = zy(e, t, "" + e[t]);
    }
  }
  function Cd(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var a = t.getValue(), l = "";
    return e && (l = Md(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), true) : false;
  }
  function Wu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ay = /[\n"\\]/g;
  function ht(e) {
    return e.replace(Ay, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Kc(e, t, a, l, n, u, i, c) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? Jc(e, i, ot(t)) : a != null ? Jc(e, i, ot(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.name = "" + ot(c) : e.removeAttribute("name");
  }
  function Nd(e, t, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        kc(e);
        return;
      }
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, c || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = c ? e.checked : !!l, e.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), kc(e);
  }
  function Jc(e, t, a) {
    t === "number" && Wu(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function zl(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = true;
      for (a = 0; a < e.length; a++) n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = true);
    } else {
      for (a = "" + ot(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = true, l && (e[n].defaultSelected = true);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = true);
    }
  }
  function wd(e, t, a) {
    if (t != null && (t = "" + ot(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Od(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(N(92));
        if (dn(l)) {
          if (1 < l.length) throw Error(N(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = ot(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), kc(e);
  }
  function jl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ry = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function yo(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ry.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Dd(e, t, a) {
    if (t != null && typeof t != "object") throw Error(N(62));
    if (e = e.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && yo(e, n, l);
    } else for (var u in t) t.hasOwnProperty(u) && yo(e, u, t[u]);
  }
  function Ks(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var My = /* @__PURE__ */ new Map([
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ],
    [
      "crossOrigin",
      "crossorigin"
    ],
    [
      "accentHeight",
      "accent-height"
    ],
    [
      "alignmentBaseline",
      "alignment-baseline"
    ],
    [
      "arabicForm",
      "arabic-form"
    ],
    [
      "baselineShift",
      "baseline-shift"
    ],
    [
      "capHeight",
      "cap-height"
    ],
    [
      "clipPath",
      "clip-path"
    ],
    [
      "clipRule",
      "clip-rule"
    ],
    [
      "colorInterpolation",
      "color-interpolation"
    ],
    [
      "colorInterpolationFilters",
      "color-interpolation-filters"
    ],
    [
      "colorProfile",
      "color-profile"
    ],
    [
      "colorRendering",
      "color-rendering"
    ],
    [
      "dominantBaseline",
      "dominant-baseline"
    ],
    [
      "enableBackground",
      "enable-background"
    ],
    [
      "fillOpacity",
      "fill-opacity"
    ],
    [
      "fillRule",
      "fill-rule"
    ],
    [
      "floodColor",
      "flood-color"
    ],
    [
      "floodOpacity",
      "flood-opacity"
    ],
    [
      "fontFamily",
      "font-family"
    ],
    [
      "fontSize",
      "font-size"
    ],
    [
      "fontSizeAdjust",
      "font-size-adjust"
    ],
    [
      "fontStretch",
      "font-stretch"
    ],
    [
      "fontStyle",
      "font-style"
    ],
    [
      "fontVariant",
      "font-variant"
    ],
    [
      "fontWeight",
      "font-weight"
    ],
    [
      "glyphName",
      "glyph-name"
    ],
    [
      "glyphOrientationHorizontal",
      "glyph-orientation-horizontal"
    ],
    [
      "glyphOrientationVertical",
      "glyph-orientation-vertical"
    ],
    [
      "horizAdvX",
      "horiz-adv-x"
    ],
    [
      "horizOriginX",
      "horiz-origin-x"
    ],
    [
      "imageRendering",
      "image-rendering"
    ],
    [
      "letterSpacing",
      "letter-spacing"
    ],
    [
      "lightingColor",
      "lighting-color"
    ],
    [
      "markerEnd",
      "marker-end"
    ],
    [
      "markerMid",
      "marker-mid"
    ],
    [
      "markerStart",
      "marker-start"
    ],
    [
      "overlinePosition",
      "overline-position"
    ],
    [
      "overlineThickness",
      "overline-thickness"
    ],
    [
      "paintOrder",
      "paint-order"
    ],
    [
      "panose-1",
      "panose-1"
    ],
    [
      "pointerEvents",
      "pointer-events"
    ],
    [
      "renderingIntent",
      "rendering-intent"
    ],
    [
      "shapeRendering",
      "shape-rendering"
    ],
    [
      "stopColor",
      "stop-color"
    ],
    [
      "stopOpacity",
      "stop-opacity"
    ],
    [
      "strikethroughPosition",
      "strikethrough-position"
    ],
    [
      "strikethroughThickness",
      "strikethrough-thickness"
    ],
    [
      "strokeDasharray",
      "stroke-dasharray"
    ],
    [
      "strokeDashoffset",
      "stroke-dashoffset"
    ],
    [
      "strokeLinecap",
      "stroke-linecap"
    ],
    [
      "strokeLinejoin",
      "stroke-linejoin"
    ],
    [
      "strokeMiterlimit",
      "stroke-miterlimit"
    ],
    [
      "strokeOpacity",
      "stroke-opacity"
    ],
    [
      "strokeWidth",
      "stroke-width"
    ],
    [
      "textAnchor",
      "text-anchor"
    ],
    [
      "textDecoration",
      "text-decoration"
    ],
    [
      "textRendering",
      "text-rendering"
    ],
    [
      "transformOrigin",
      "transform-origin"
    ],
    [
      "underlinePosition",
      "underline-position"
    ],
    [
      "underlineThickness",
      "underline-thickness"
    ],
    [
      "unicodeBidi",
      "unicode-bidi"
    ],
    [
      "unicodeRange",
      "unicode-range"
    ],
    [
      "unitsPerEm",
      "units-per-em"
    ],
    [
      "vAlphabetic",
      "v-alphabetic"
    ],
    [
      "vHanging",
      "v-hanging"
    ],
    [
      "vIdeographic",
      "v-ideographic"
    ],
    [
      "vMathematical",
      "v-mathematical"
    ],
    [
      "vectorEffect",
      "vector-effect"
    ],
    [
      "vertAdvY",
      "vert-adv-y"
    ],
    [
      "vertOriginX",
      "vert-origin-x"
    ],
    [
      "vertOriginY",
      "vert-origin-y"
    ],
    [
      "wordSpacing",
      "word-spacing"
    ],
    [
      "writingMode",
      "writing-mode"
    ],
    [
      "xmlnsXlink",
      "xmlns:xlink"
    ],
    [
      "xHeight",
      "x-height"
    ]
  ]), Cy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(e) {
    return Cy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Zt() {
  }
  var $c = null;
  function Js(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yl = null, Al = null;
  function po(e) {
    var t = Zl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ke] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Kc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[Ke] || null;
                if (!n) throw Error(N(90));
                Kc(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && Cd(l);
          }
          break e;
        case "textarea":
          wd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && zl(e, !!a.multiple, t, false);
      }
    }
  }
  var ec = false;
  function jd(e, t, a) {
    if (ec) return e(t, a);
    ec = true;
    try {
      var l = e(t);
      return l;
    } finally {
      if (ec = false, (yl !== null || Al !== null) && (qi(), yl && (t = yl, e = Al, Al = yl = null, po(t), e))) for (t = 0; t < e.length; t++) po(e[t]);
    }
  }
  function wn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Ke] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(N(231, t, typeof a));
    return a;
  }
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wc = false;
  if (Wt) try {
    var an = {};
    Object.defineProperty(an, "passive", {
      get: function() {
        Wc = true;
      }
    }), window.addEventListener("test", an, an), window.removeEventListener("test", an, an);
  } catch {
    Wc = false;
  }
  var da = null, $s = null, Nu = null;
  function Ud() {
    if (Nu) return Nu;
    var e, t = $s, a = t.length, l, n = "value" in da ? da.value : da.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var i = a - e;
    for (l = 1; l <= i && t[a - l] === n[u - l]; l++) ;
    return Nu = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function wu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pu() {
    return true;
  }
  function go() {
    return false;
  }
  function Je(e) {
    function t(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in e) e.hasOwnProperty(c) && (a = e[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? pu : go, this.isPropagationStopped = go, this;
    }
    return re(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = pu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = pu);
      },
      persist: function() {
      },
      isPersistent: pu
    }), t;
  }
  var Wa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ri = Je(Wa), Wn = re({}, Wa, {
    view: 0,
    detail: 0
  }), Ny = Je(Wn), tc, ac, ln, Mi = re({}, Wn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ws,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ln && (ln && e.type === "mousemove" ? (tc = e.screenX - ln.screenX, ac = e.screenY - ln.screenY) : ac = tc = 0, ln = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ac;
    }
  }), vo = Je(Mi), wy = re({}, Mi, {
    dataTransfer: 0
  }), Oy = Je(wy), Dy = re({}, Wn, {
    relatedTarget: 0
  }), lc = Je(Dy), jy = re({}, Wa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uy = Je(jy), Hy = re({}, Wa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), By = Je(Hy), qy = re({}, Wa, {
    data: 0
  }), bo = Je(qy), Ly = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Yy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gy[e]) ? !!t[e] : false;
  }
  function Ws() {
    return Xy;
  }
  var Qy = re({}, Wn, {
    key: function(e) {
      if (e.key) {
        var t = Ly[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = wu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ws,
    charCode: function(e) {
      return e.type === "keypress" ? wu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? wu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Vy = Je(Qy), Zy = re({}, Mi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), So = Je(Zy), ky = re({}, Wn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ws
  }), Ky = Je(ky), Jy = re({}, Wa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = Je(Jy), Wy = re({}, Mi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = Je(Wy), Py = re({}, Wa, {
    newState: 0,
    oldState: 0
  }), Iy = Je(Py), ep = [
    9,
    13,
    27,
    32
  ], Fs = Wt && "CompositionEvent" in window, gn = null;
  Wt && "documentMode" in document && (gn = document.documentMode);
  var tp = Wt && "TextEvent" in window && !gn, Hd = Wt && (!Fs || gn && 8 < gn && 11 >= gn), xo = " ", Eo = false;
  function Bd(e, t) {
    switch (e) {
      case "keyup":
        return ep.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function qd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pl = false;
  function ap(e, t) {
    switch (e) {
      case "compositionend":
        return qd(t);
      case "keypress":
        return t.which !== 32 ? null : (Eo = true, xo);
      case "textInput":
        return e = t.data, e === xo && Eo ? null : e;
      default:
        return null;
    }
  }
  function lp(e, t) {
    if (pl) return e === "compositionend" || !Fs && Bd(e, t) ? (e = Ud(), Nu = $s = da = null, pl = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var np = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!np[e.type] : t === "textarea";
  }
  function Ld(e, t, a, l) {
    yl ? Al ? Al.push(l) : Al = [
      l
    ] : yl = l, t = mi(t, "onChange"), 0 < t.length && (a = new Ri("onChange", "change", null, a, l), e.push({
      event: a,
      listeners: t
    }));
  }
  var vn = null, On = null;
  function up(e) {
    jm(e, 0);
  }
  function Ci(e) {
    var t = hn(e);
    if (Cd(t)) return e;
  }
  function To(e, t) {
    if (e === "change") return t;
  }
  var Yd = false;
  if (Wt) {
    var nc;
    if (Wt) {
      var uc = "oninput" in document;
      if (!uc) {
        var zo = document.createElement("div");
        zo.setAttribute("oninput", "return;"), uc = typeof zo.oninput == "function";
      }
      nc = uc;
    } else nc = false;
    Yd = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    vn && (vn.detachEvent("onpropertychange", Gd), On = vn = null);
  }
  function Gd(e) {
    if (e.propertyName === "value" && Ci(On)) {
      var t = [];
      Ld(t, On, e, Js(e)), jd(up, t);
    }
  }
  function ip(e, t, a) {
    e === "focusin" ? (Ao(), vn = t, On = a, vn.attachEvent("onpropertychange", Gd)) : e === "focusout" && Ao();
  }
  function cp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(On);
  }
  function sp(e, t) {
    if (e === "click") return Ci(t);
  }
  function rp(e, t) {
    if (e === "input" || e === "change") return Ci(t);
  }
  function op(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : op;
  function Dn(e, t) {
    if (ut(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return false;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Vc.call(t, n) || !ut(e[n], t[n])) return false;
    }
    return true;
  }
  function Ro(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mo(e, t) {
    var a = Ro(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t) return {
          node: a,
          offset: t - e
        };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ro(a);
    }
  }
  function Xd(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Qd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Wu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Wu(e.document);
    }
    return t;
  }
  function Ps(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var fp = Wt && "documentMode" in document && 11 >= document.documentMode, gl = null, Fc = null, bn = null, Pc = false;
  function Co(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Pc || gl == null || gl !== Wu(l) || (l = gl, "selectionStart" in l && Ps(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), bn && Dn(bn, l) || (bn = l, l = mi(Fc, "onSelect"), 0 < l.length && (t = new Ri("onSelect", "select", null, t, a), e.push({
      event: t,
      listeners: l
    }), t.target = gl)));
  }
  function Da(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var vl = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionrun: Da("Transition", "TransitionRun"),
    transitionstart: Da("Transition", "TransitionStart"),
    transitioncancel: Da("Transition", "TransitionCancel"),
    transitionend: Da("Transition", "TransitionEnd")
  }, ic = {}, Vd = {};
  Wt && (Vd = document.createElement("div").style, "AnimationEvent" in window || (delete vl.animationend.animation, delete vl.animationiteration.animation, delete vl.animationstart.animation), "TransitionEvent" in window || delete vl.transitionend.transition);
  function Fa(e) {
    if (ic[e]) return ic[e];
    if (!vl[e]) return e;
    var t = vl[e], a;
    for (a in t) if (t.hasOwnProperty(a) && a in Vd) return ic[e] = t[a];
    return e;
  }
  var Zd = Fa("animationend"), kd = Fa("animationiteration"), Kd = Fa("animationstart"), dp = Fa("transitionrun"), hp = Fa("transitionstart"), mp = Fa("transitioncancel"), Jd = Fa("transitionend"), $d = /* @__PURE__ */ new Map(), Ic = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ic.push("scrollEnd");
  function Tt(e, t) {
    $d.set(e, t), $a(t, [
      e
    ]);
  }
  var Fu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, rt = [], bl = 0, Is = 0;
  function Ni() {
    for (var e = bl, t = Is = bl = 0; t < e; ) {
      var a = rt[t];
      rt[t++] = null;
      var l = rt[t];
      rt[t++] = null;
      var n = rt[t];
      rt[t++] = null;
      var u = rt[t];
      if (rt[t++] = null, l !== null && n !== null) {
        var i = l.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n;
      }
      u !== 0 && Wd(a, n, u);
    }
  }
  function wi(e, t, a, l) {
    rt[bl++] = e, rt[bl++] = t, rt[bl++] = a, rt[bl++] = l, Is |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function er(e, t, a, l) {
    return wi(e, t, a, l), Pu(e);
  }
  function Pa(e, t) {
    return wi(e, null, null, t), Pu(e);
  }
  function Wd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = false, u = e.return; u !== null; ) u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = true)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - lt(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [
      t
    ] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Pu(e) {
    if (50 < Mn) throw Mn = 0, Ss = null, Error(N(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sl = {};
  function yp(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ie(e, t, a, l) {
    return new yp(e, t, a, l);
  }
  function tr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Kt(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ie(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Fd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, a, l, n, u) {
    var i = 0;
    if (l = e, typeof e == "function") tr(e) && (i = 1);
    else if (typeof e == "string") i = Sg(e, a, wt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case Yc:
        return e = Ie(31, a, t, n), e.elementType = Yc, e.lanes = u, e;
      case dl:
        return Ya(a.children, n, u, t);
      case pd:
        i = 8, n |= 24;
        break;
      case Bc:
        return e = Ie(12, a, t, n | 2), e.elementType = Bc, e.lanes = u, e;
      case qc:
        return e = Ie(13, a, t, n), e.elementType = qc, e.lanes = u, e;
      case Lc:
        return e = Ie(19, a, t, n), e.elementType = Lc, e.lanes = u, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Vt:
            i = 10;
            break e;
          case gd:
            i = 9;
            break e;
          case Gs:
            i = 11;
            break e;
          case Xs:
            i = 14;
            break e;
          case ua:
            i = 16, l = null;
            break e;
        }
        i = 29, a = Error(N(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = Ie(i, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Ya(e, t, a, l) {
    return e = Ie(7, e, l, t), e.lanes = a, e;
  }
  function cc(e, t, a) {
    return e = Ie(6, e, null, t), e.lanes = a, e;
  }
  function Pd(e) {
    var t = Ie(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function sc(e, t, a) {
    return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var No = /* @__PURE__ */ new WeakMap();
  function mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = No.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: ro(t)
      }, No.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ro(t)
    };
  }
  var xl = [], El = 0, Iu = null, jn = 0, ft = [], dt = 0, za = null, Mt = 1, Ct = "";
  function Xt(e, t) {
    xl[El++] = jn, xl[El++] = Iu, Iu = e, jn = t;
  }
  function Id(e, t, a) {
    ft[dt++] = Mt, ft[dt++] = Ct, ft[dt++] = za, za = e;
    var l = Mt;
    e = Ct;
    var n = 32 - lt(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - lt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Mt = 1 << 32 - lt(t) + n | a << n | l, Ct = u + e;
    } else Mt = 1 << u | a << n | l, Ct = e;
  }
  function ar(e) {
    e.return !== null && (Xt(e, 1), Id(e, 1, 0));
  }
  function lr(e) {
    for (; e === Iu; ) Iu = xl[--El], xl[El] = null, jn = xl[--El], xl[El] = null;
    for (; e === za; ) za = ft[--dt], ft[dt] = null, Ct = ft[--dt], ft[dt] = null, Mt = ft[--dt], ft[dt] = null;
  }
  function eh(e, t) {
    ft[dt++] = Mt, ft[dt++] = Ct, ft[dt++] = za, Mt = t.id, Ct = t.overflow, za = e;
  }
  var Oe = null, ce = null, W = false, ga = null, yt = false, es = Error(N(519));
  function Aa(e) {
    var t = Error(N(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Un(mt(t, e)), es;
  }
  function wo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[we] = e, t[Ke] = l, a) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ln.length; a++) K(Ln[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), Nd(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Od(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === true || Hm(t.textContent, a) ? (l.popover != null && (K("beforetoggle", t), K("toggle", t)), l.onScroll != null && K("scroll", t), l.onScrollEnd != null && K("scrollend", t), l.onClick != null && (t.onclick = Zt), t = true) : t = false, t || Aa(e, true);
  }
  function Oo(e) {
    for (Oe = e.return; Oe; ) switch (Oe.tag) {
      case 5:
      case 31:
      case 13:
        yt = false;
        return;
      case 27:
      case 3:
        yt = true;
        return;
      default:
        Oe = Oe.return;
    }
  }
  function il(e) {
    if (e !== Oe) return false;
    if (!W) return Oo(e), W = true, false;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || zs(e.type, e.memoizedProps)), a = !a), a && ce && Aa(e), Oo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
      ce = bf(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
      ce = bf(e);
    } else t === 27 ? (t = ce, Na(e.type) ? (e = Cs, Cs = null, ce = e) : ce = t) : ce = Oe ? gt(e.stateNode.nextSibling) : null;
    return true;
  }
  function Va() {
    ce = Oe = null, W = false;
  }
  function rc() {
    var e = ga;
    return e !== null && (Ve === null ? Ve = e : Ve.push.apply(Ve, e), ga = null), e;
  }
  function Un(e) {
    ga === null ? ga = [
      e
    ] : ga.push(e);
  }
  var ts = Dt(null), Ia = null, kt = null;
  function ca(e, t, a) {
    ue(ts, t._currentValue), t._currentValue = a;
  }
  function Jt(e) {
    e._currentValue = ts.current, Re(ts);
  }
  function as(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function ls(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < t.length; s++) if (c.context === t[s]) {
            u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), as(u.return, a, e), l || (i = null);
            break e;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(N(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), as(i, a, e), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else for (i = n; i !== null; ) {
        if (i === e) {
          i = null;
          break;
        }
        if (n = i.sibling, n !== null) {
          n.return = i.return, i = n;
          break;
        }
        i = i.return;
      }
      n = i;
    }
  }
  function kl(e, t, a, l) {
    e = null;
    for (var n = t, u = false; n !== null; ) {
      if (!u) {
        if (n.flags & 524288) u = true;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(N(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ut(n.pendingProps.value, i.value) || (e !== null ? e.push(c) : e = [
            c
          ]);
        }
      } else if (n === ku.current) {
        if (i = n.alternate, i === null) throw Error(N(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Gn) : e = [
          Gn
        ]);
      }
      n = n.return;
    }
    e !== null && ls(t, e, a, l), t.flags |= 262144;
  }
  function ei(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ut(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Za(e) {
    Ia = e, kt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function De(e) {
    return th(Ia, e);
  }
  function gu(e, t) {
    return Ia === null && Za(e), th(e, t);
  }
  function th(e, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, kt === null) {
      if (e === null) throw Error(N(308));
      kt = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else kt = kt.next = t;
    return a;
  }
  var pp = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: false,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = true, e.forEach(function(a) {
        return a();
      });
    };
  }, gp = _e.unstable_scheduleCallback, vp = _e.unstable_NormalPriority, Se = {
    $$typeof: Vt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function nr() {
    return {
      controller: new pp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fn(e) {
    e.refCount--, e.refCount === 0 && gp(vp, function() {
      e.controller.abort();
    });
  }
  var Sn = null, ns = 0, Ul = 0, Rl = null;
  function bp(e, t) {
    if (Sn === null) {
      var a = Sn = [];
      ns = 0, Ul = Cr(), Rl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return ns++, t.then(Do, Do), t;
  }
  function Do() {
    if (--ns === 0 && Sn !== null) {
      Rl !== null && (Rl.status = "fulfilled");
      var e = Sn;
      Sn = null, Ul = 0, Rl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sp(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return e.then(function() {
      l.status = "fulfilled", l.value = t;
      for (var n = 0; n < a.length; n++) (0, a[n])(t);
    }, function(n) {
      for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++) (0, a[n])(void 0);
    }), l;
  }
  var jo = Y.S;
  Y.S = function(e, t) {
    ym = tt(), typeof t == "object" && t !== null && typeof t.then == "function" && bp(e, t), jo !== null && jo(e, t);
  };
  var Ga = Dt(null);
  function ur() {
    var e = Ga.current;
    return e !== null ? e : ne.pooledCache;
  }
  function Du(e, t) {
    t === null ? ue(Ga, Ga.current) : ue(Ga, t.pool);
  }
  function ah() {
    var e = ur();
    return e === null ? null : {
      parent: Se._currentValue,
      pool: e
    };
  }
  var Kl = Error(N(460)), ir = Error(N(474)), Oi = Error(N(542)), ti = {
    then: function() {
    }
  };
  function Uo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lh(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Zt, Zt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Bo(e), e;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (e = ne, e !== null && 100 < e.shellSuspendCounter) throw Error(N(482));
          e = t, e.status = "pending", e.then(function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = l;
            }
          }, function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = l;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Bo(e), e;
        }
        throw Xa = t, Kl;
    }
  }
  function Ba(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Xa = a, Kl) : a;
    }
  }
  var Xa = null;
  function Ho() {
    if (Xa === null) throw Error(N(459));
    var e = Xa;
    return Xa = null, e;
  }
  function Bo(e) {
    if (e === Kl || e === Oi) throw Error(N(483));
  }
  var Ml = null, Hn = 0;
  function vu(e) {
    var t = Hn;
    return Hn += 1, Ml === null && (Ml = []), lh(Ml, e, t);
  }
  function nn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function bu(e, t) {
    throw t.$$typeof === iy ? Error(N(525)) : (e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function nh(e) {
    function t(f, h) {
      if (e) {
        var p = f.deletions;
        p === null ? (f.deletions = [
          h
        ], f.flags |= 16) : p.push(h);
      }
    }
    function a(f, h) {
      if (!e) return null;
      for (; h !== null; ) t(f, h), h = h.sibling;
      return null;
    }
    function l(f) {
      for (var h = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
      return h;
    }
    function n(f, h) {
      return f = Kt(f, h), f.index = 0, f.sibling = null, f;
    }
    function u(f, h, p) {
      return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < h ? (f.flags |= 67108866, h) : p) : (f.flags |= 67108866, h)) : (f.flags |= 1048576, h);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 67108866), f;
    }
    function c(f, h, p, E) {
      return h === null || h.tag !== 6 ? (h = cc(p, f.mode, E), h.return = f, h) : (h = n(h, p), h.return = f, h);
    }
    function s(f, h, p, E) {
      var D = p.type;
      return D === dl ? m(f, h, p.props.children, E, p.key) : h !== null && (h.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ua && Ba(D) === h.type) ? (h = n(h, p.props), nn(h, p), h.return = f, h) : (h = Ou(p.type, p.key, p.props, null, f.mode, E), nn(h, p), h.return = f, h);
    }
    function o(f, h, p, E) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = sc(p, f.mode, E), h.return = f, h) : (h = n(h, p.children || []), h.return = f, h);
    }
    function m(f, h, p, E, D) {
      return h === null || h.tag !== 7 ? (h = Ya(p, f.mode, E, D), h.return = f, h) : (h = n(h, p), h.return = f, h);
    }
    function r(f, h, p) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = cc("" + h, f.mode, p), h.return = f, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case fu:
            return p = Ou(h.type, h.key, h.props, null, f.mode, p), nn(p, h), p.return = f, p;
          case fn:
            return h = sc(h, f.mode, p), h.return = f, h;
          case ua:
            return h = Ba(h), r(f, h, p);
        }
        if (dn(h) || tn(h)) return h = Ya(h, f.mode, p, null), h.return = f, h;
        if (typeof h.then == "function") return r(f, vu(h), p);
        if (h.$$typeof === Vt) return r(f, gu(f, h), p);
        bu(f, h);
      }
      return null;
    }
    function d(f, h, p, E) {
      var D = h !== null ? h.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return D !== null ? null : c(f, h, "" + p, E);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case fu:
            return p.key === D ? s(f, h, p, E) : null;
          case fn:
            return p.key === D ? o(f, h, p, E) : null;
          case ua:
            return p = Ba(p), d(f, h, p, E);
        }
        if (dn(p) || tn(p)) return D !== null ? null : m(f, h, p, E, null);
        if (typeof p.then == "function") return d(f, h, vu(p), E);
        if (p.$$typeof === Vt) return d(f, h, gu(f, p), E);
        bu(f, p);
      }
      return null;
    }
    function y(f, h, p, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return f = f.get(p) || null, c(h, f, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case fu:
            return f = f.get(E.key === null ? p : E.key) || null, s(h, f, E, D);
          case fn:
            return f = f.get(E.key === null ? p : E.key) || null, o(h, f, E, D);
          case ua:
            return E = Ba(E), y(f, h, p, E, D);
        }
        if (dn(E) || tn(E)) return f = f.get(p) || null, m(h, f, E, D, null);
        if (typeof E.then == "function") return y(f, h, p, vu(E), D);
        if (E.$$typeof === Vt) return y(f, h, p, gu(h, E), D);
        bu(h, E);
      }
      return null;
    }
    function T(f, h, p, E) {
      for (var D = null, x = null, _ = h, C = h = 0, A = null; _ !== null && C < p.length; C++) {
        _.index > C ? (A = _, _ = null) : A = _.sibling;
        var g = d(f, _, p[C], E);
        if (g === null) {
          _ === null && (_ = A);
          break;
        }
        e && _ && g.alternate === null && t(f, _), h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g, _ = A;
      }
      if (C === p.length) return a(f, _), W && Xt(f, C), D;
      if (_ === null) {
        for (; C < p.length; C++) _ = r(f, p[C], E), _ !== null && (h = u(_, h, C), x === null ? D = _ : x.sibling = _, x = _);
        return W && Xt(f, C), D;
      }
      for (_ = l(_); C < p.length; C++) A = y(_, f, C, p[C], E), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? C : A.key), h = u(A, h, C), x === null ? D = A : x.sibling = A, x = A);
      return e && _.forEach(function(b) {
        return t(f, b);
      }), W && Xt(f, C), D;
    }
    function M(f, h, p, E) {
      if (p == null) throw Error(N(151));
      for (var D = null, x = null, _ = h, C = h = 0, A = null, g = p.next(); _ !== null && !g.done; C++, g = p.next()) {
        _.index > C ? (A = _, _ = null) : A = _.sibling;
        var b = d(f, _, g.value, E);
        if (b === null) {
          _ === null && (_ = A);
          break;
        }
        e && _ && b.alternate === null && t(f, _), h = u(b, h, C), x === null ? D = b : x.sibling = b, x = b, _ = A;
      }
      if (g.done) return a(f, _), W && Xt(f, C), D;
      if (_ === null) {
        for (; !g.done; C++, g = p.next()) g = r(f, g.value, E), g !== null && (h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g);
        return W && Xt(f, C), D;
      }
      for (_ = l(_); !g.done; C++, g = p.next()) g = y(_, f, C, g.value, E), g !== null && (e && g.alternate !== null && _.delete(g.key === null ? C : g.key), h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g);
      return e && _.forEach(function(w) {
        return t(f, w);
      }), W && Xt(f, C), D;
    }
    function R(f, h, p, E) {
      if (typeof p == "object" && p !== null && p.type === dl && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case fu:
            e: {
              for (var D = p.key; h !== null; ) {
                if (h.key === D) {
                  if (D = p.type, D === dl) {
                    if (h.tag === 7) {
                      a(f, h.sibling), E = n(h, p.props.children), E.return = f, f = E;
                      break e;
                    }
                  } else if (h.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ua && Ba(D) === h.type) {
                    a(f, h.sibling), E = n(h, p.props), nn(E, p), E.return = f, f = E;
                    break e;
                  }
                  a(f, h);
                  break;
                } else t(f, h);
                h = h.sibling;
              }
              p.type === dl ? (E = Ya(p.props.children, f.mode, E, p.key), E.return = f, f = E) : (E = Ou(p.type, p.key, p.props, null, f.mode, E), nn(E, p), E.return = f, f = E);
            }
            return i(f);
          case fn:
            e: {
              for (D = p.key; h !== null; ) {
                if (h.key === D) if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                  a(f, h.sibling), E = n(h, p.children || []), E.return = f, f = E;
                  break e;
                } else {
                  a(f, h);
                  break;
                }
                else t(f, h);
                h = h.sibling;
              }
              E = sc(p, f.mode, E), E.return = f, f = E;
            }
            return i(f);
          case ua:
            return p = Ba(p), R(f, h, p, E);
        }
        if (dn(p)) return T(f, h, p, E);
        if (tn(p)) {
          if (D = tn(p), typeof D != "function") throw Error(N(150));
          return p = D.call(p), M(f, h, p, E);
        }
        if (typeof p.then == "function") return R(f, h, vu(p), E);
        if (p.$$typeof === Vt) return R(f, h, gu(f, p), E);
        bu(f, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, h !== null && h.tag === 6 ? (a(f, h.sibling), E = n(h, p), E.return = f, f = E) : (a(f, h), E = cc(p, f.mode, E), E.return = f, f = E), i(f)) : a(f, h);
    }
    return function(f, h, p, E) {
      try {
        Hn = 0;
        var D = R(f, h, p, E);
        return Ml = null, D;
      } catch (_) {
        if (_ === Kl || _ === Oi) throw _;
        var x = Ie(29, _, null, f.mode);
        return x.lanes = E, x.return = f, x;
      } finally {
      }
    };
  }
  var ka = nh(true), uh = nh(false), ia = false;
  function cr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function us(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function va(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ba(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, F & 2) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Pu(e), Wd(e, null, a), t;
    }
    return wi(e, l, t, a), Pu(e);
  }
  function xn(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _d(e, a);
    }
  }
  function oc(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, a = a.next;
        } while (a !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var is = false;
  function En() {
    if (is) {
      var e = Rl;
      if (e !== null) throw e;
    }
  }
  function _n(e, t, a, l) {
    is = false;
    var n = e.updateQueue;
    ia = false;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, o = s.next;
      s.next = null, i === null ? u = o : i.next = o, i = s;
      var m = e.alternate;
      m !== null && (m = m.updateQueue, c = m.lastBaseUpdate, c !== i && (c === null ? m.firstBaseUpdate = o : c.next = o, m.lastBaseUpdate = s));
    }
    if (u !== null) {
      var r = n.baseState;
      i = 0, m = o = s = null, c = u;
      do {
        var d = c.lane & -536870913, y = d !== c.lane;
        if (y ? ($ & d) === d : (l & d) === d) {
          d !== 0 && d === Ul && (is = true), m !== null && (m = m.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          e: {
            var T = e, M = c;
            d = t;
            var R = a;
            switch (M.tag) {
              case 1:
                if (T = M.payload, typeof T == "function") {
                  r = T.call(R, r, d);
                  break e;
                }
                r = T;
                break e;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = M.payload, d = typeof T == "function" ? T.call(R, r, d) : T, d == null) break e;
                r = re({}, r, d);
                break e;
              case 2:
                ia = true;
            }
          }
          d = c.callback, d !== null && (e.flags |= 64, y && (e.flags |= 8192), y = n.callbacks, y === null ? n.callbacks = [
            d
          ] : y.push(d));
        } else y = {
          lane: d,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, m === null ? (o = m = y, s = r) : m = m.next = y, i |= d;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          y = c, c = y.next, y.next = null, n.lastBaseUpdate = y, n.shared.pending = null;
        }
      } while (true);
      m === null && (s = r), n.baseState = s, n.firstBaseUpdate = o, n.lastBaseUpdate = m, u === null && (n.shared.lanes = 0), Ma |= i, e.lanes = i, e.memoizedState = r;
    }
  }
  function ih(e, t) {
    if (typeof e != "function") throw Error(N(191, e));
    e.call(t);
  }
  function ch(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) ih(a[e], t);
  }
  var Hl = Dt(null), ai = Dt(0);
  function qo(e, t) {
    e = ea, ue(ai, e), ue(Hl, t), ea = e | t.baseLanes;
  }
  function cs() {
    ue(ai, ea), ue(Hl, Hl.current);
  }
  function sr() {
    ea = ai.current, Re(Hl), Re(ai);
  }
  var it = Dt(null), pt = null;
  function sa(e) {
    var t = e.alternate;
    ue(ye, ye.current & 1), ue(it, e), pt === null && (t === null || Hl.current !== null || t.memoizedState !== null) && (pt = e);
  }
  function ss(e) {
    ue(ye, ye.current), ue(it, e), pt === null && (pt = e);
  }
  function sh(e) {
    e.tag === 22 ? (ue(ye, ye.current), ue(it, e), pt === null && (pt = e)) : ra();
  }
  function ra() {
    ue(ye, ye.current), ue(it, it.current);
  }
  function Pe(e) {
    Re(it), pt === e && (pt = null), Re(ye);
  }
  var ye = Dt(0);
  function li(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Rs(a) || Ms(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ft = 0, Q = null, le = null, ve = null, ni = false, Cl = false, Ka = false, ui = 0, Bn = 0, Nl = null, xp = 0;
  function he() {
    throw Error(N(321));
  }
  function rr(e, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < e.length; a++) if (!ut(e[a], t[a])) return false;
    return true;
  }
  function or(e, t, a, l, n, u) {
    return Ft = u, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Lh : xr, Ka = false, u = a(l, n), Ka = false, Cl && (u = oh(t, a, l, n)), rh(e), u;
  }
  function rh(e) {
    Y.H = qn;
    var t = le !== null && le.next !== null;
    if (Ft = 0, ve = le = Q = null, ni = false, Bn = 0, Nl = null, t) throw Error(N(300));
    e === null || xe || (e = e.dependencies, e !== null && ei(e) && (xe = true));
  }
  function oh(e, t, a, l) {
    Q = e;
    var n = 0;
    do {
      if (Cl && (Nl = null), Bn = 0, Cl = false, 25 <= n) throw Error(N(301));
      if (n += 1, ve = le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = Yh, u = t(a, l);
    } while (Cl);
    return u;
  }
  function Ep() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Pn(t) : t, e = e.useState()[0], (le !== null ? le.memoizedState : null) !== e && (Q.flags |= 1024), t;
  }
  function fr() {
    var e = ui !== 0;
    return ui = 0, e;
  }
  function dr(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function hr(e) {
    if (ni) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ni = false;
    }
    Ft = 0, ve = le = Q = null, Cl = false, Bn = ui = 0, Nl = null;
  }
  function Be() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ve === null ? Q.memoizedState = ve = e : ve = ve.next = e, ve;
  }
  function pe() {
    if (le === null) {
      var e = Q.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = le.next;
    var t = ve === null ? Q.memoizedState : ve.next;
    if (t !== null) ve = t, le = e;
    else {
      if (e === null) throw Q.alternate === null ? Error(N(467)) : Error(N(310));
      le = e, e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null
      }, ve === null ? Q.memoizedState = ve = e : ve = ve.next = e;
    }
    return ve;
  }
  function Di() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Pn(e) {
    var t = Bn;
    return Bn += 1, Nl === null && (Nl = []), e = lh(Nl, e, t), t = Q, (ve === null ? t.memoizedState : ve.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Lh : xr), e;
  }
  function ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pn(e);
      if (e.$$typeof === Vt) return De(e);
    }
    throw Error(N(438, String(e)));
  }
  function mr(e) {
    var t = null, a = Q.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = Q.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = {
      data: [],
      index: 0
    }), a === null && (a = Di(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = cy;
    return t.index++, a;
  }
  function Pt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ju(e) {
    var t = pe();
    return yr(t, le, e);
  }
  function yr(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(N(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, l.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var c = i = null, s = null, o = t, m = false;
      do {
        var r = o.lane & -536870913;
        if (r !== o.lane ? ($ & r) === r : (Ft & r) === r) {
          var d = o.revertLane;
          if (d === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }), r === Ul && (m = true);
          else if ((Ft & d) === d) {
            o = o.next, d === Ul && (m = true);
            continue;
          } else r = {
            lane: 0,
            revertLane: o.revertLane,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, s === null ? (c = s = r, i = u) : s = s.next = r, Q.lanes |= d, Ma |= d;
          r = o.action, Ka && a(u, r), u = o.hasEagerState ? o.eagerState : a(u, r);
        } else d = {
          lane: r,
          revertLane: o.revertLane,
          gesture: o.gesture,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null
        }, s === null ? (c = s = d, i = u) : s = s.next = d, Q.lanes |= r, Ma |= r;
        o = o.next;
      } while (o !== null && o !== t);
      if (s === null ? i = u : s.next = c, !ut(u, e.memoizedState) && (xe = true, m && (a = Rl, a !== null))) throw a;
      e.memoizedState = u, e.baseState = i, e.baseQueue = s, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [
      e.memoizedState,
      l.dispatch
    ];
  }
  function fc(e) {
    var t = pe(), a = t.queue;
    if (a === null) throw Error(N(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== n);
      ut(u, t.memoizedState) || (xe = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [
      u,
      l
    ];
  }
  function fh(e, t, a) {
    var l = Q, n = pe(), u = W;
    if (u) {
      if (a === void 0) throw Error(N(407));
      a = a();
    } else a = t();
    var i = !ut((le || n).memoizedState, a);
    if (i && (n.memoizedState = a, xe = true), n = n.queue, pr(mh.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
      if (l.flags |= 2048, Bl(9, {
        destroy: void 0
      }, hh.bind(null, l, n, a, t), null), ne === null) throw Error(N(349));
      u || Ft & 127 || dh(l, t, a);
    }
    return a;
  }
  function dh(e, t, a) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: a
    }, t = Q.updateQueue, t === null ? (t = Di(), Q.updateQueue = t, t.stores = [
      e
    ]) : (a = t.stores, a === null ? t.stores = [
      e
    ] : a.push(e));
  }
  function hh(e, t, a, l) {
    t.value = a, t.getSnapshot = l, yh(t) && ph(e);
  }
  function mh(e, t, a) {
    return a(function() {
      yh(t) && ph(e);
    });
  }
  function yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !ut(e, a);
    } catch {
      return true;
    }
  }
  function ph(e) {
    var t = Pa(e, 2);
    t !== null && ke(t, e, 2);
  }
  function rs(e) {
    var t = Be();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ka) {
        fa(true);
        try {
          a();
        } finally {
          fa(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pt,
      lastRenderedState: e
    }, t;
  }
  function gh(e, t, a, l) {
    return e.baseState = a, yr(e, le, typeof l == "function" ? l : Pt);
  }
  function _p(e, t, a, l, n) {
    if (Hi(e)) throw Error(N(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      Y.T !== null ? a(true) : u.isTransition = false, l(u), a = t.pending, a === null ? (u.next = t.pending = u, vh(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function vh(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var u = Y.T, i = {};
      Y.T = i;
      try {
        var c = a(n, l), s = Y.S;
        s !== null && s(i, c), Lo(e, t, c);
      } catch (o) {
        os(e, t, o);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), Y.T = u;
      }
    } else try {
      u = a(n, l), Lo(e, t, u);
    } catch (o) {
      os(e, t, o);
    }
  }
  function Lo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      Yo(e, t, l);
    }, function(l) {
      return os(e, t, l);
    }) : Yo(e, t, a);
  }
  function Yo(e, t, a) {
    t.status = "fulfilled", t.value = a, bh(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, vh(e, a)));
  }
  function os(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, bh(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function bh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sh(e, t) {
    return t;
  }
  function Go(e, t) {
    if (W) {
      var a = ne.formState;
      if (a !== null) {
        e: {
          var l = Q;
          if (W) {
            if (ce) {
              t: {
                for (var n = ce, u = yt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = gt(n.nextSibling), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                ce = gt(n.nextSibling), l = n.data === "F!";
                break e;
              }
            }
            Aa(l);
          }
          l = false;
        }
        l && (t = a[0]);
      }
    }
    return a = Be(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sh,
      lastRenderedState: t
    }, a.queue = l, a = Hh.bind(null, Q, l), l.dispatch = a, l = rs(false), u = Sr.bind(null, Q, false, l.queue), l = Be(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = _p.bind(null, Q, n, u, a), n.dispatch = a, l.memoizedState = e, [
      t,
      a,
      false
    ];
  }
  function Xo(e) {
    var t = pe();
    return xh(t, le, e);
  }
  function xh(e, t, a) {
    if (t = yr(e, t, Sh)[0], e = ju(Pt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = Pn(t);
    } catch (i) {
      throw i === Kl ? Oi : i;
    }
    else l = t;
    t = pe();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (Q.flags |= 2048, Bl(9, {
      destroy: void 0
    }, Tp.bind(null, n, a), null)), [
      l,
      u,
      e
    ];
  }
  function Tp(e, t) {
    e.action = t;
  }
  function Qo(e) {
    var t = pe(), a = le;
    if (a !== null) return xh(t, a, e);
    pe(), t = t.memoizedState, a = pe();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [
      t,
      l,
      false
    ];
  }
  function Bl(e, t, a, l) {
    return e = {
      tag: e,
      create: a,
      deps: l,
      inst: t,
      next: null
    }, t = Q.updateQueue, t === null && (t = Di(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Eh() {
    return pe().memoizedState;
  }
  function Uu(e, t, a, l) {
    var n = Be();
    Q.flags |= e, n.memoizedState = Bl(1 | t, {
      destroy: void 0
    }, a, l === void 0 ? null : l);
  }
  function Ui(e, t, a, l) {
    var n = pe();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    le !== null && l !== null && rr(l, le.memoizedState.deps) ? n.memoizedState = Bl(t, u, a, l) : (Q.flags |= e, n.memoizedState = Bl(1 | t, u, a, l));
  }
  function Vo(e, t) {
    Uu(8390656, 8, e, t);
  }
  function pr(e, t) {
    Ui(2048, 8, e, t);
  }
  function zp(e) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) t = Di(), Q.updateQueue = t, t.events = [
      e
    ];
    else {
      var a = t.events;
      a === null ? t.events = [
        e
      ] : a.push(e);
    }
  }
  function _h(e) {
    var t = pe().memoizedState;
    return zp({
      ref: t,
      nextImpl: e
    }), function() {
      if (F & 2) throw Error(N(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Th(e, t) {
    return Ui(4, 2, e, t);
  }
  function zh(e, t) {
    return Ui(4, 4, e, t);
  }
  function Ah(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Rh(e, t, a) {
    a = a != null ? a.concat([
      e
    ]) : null, Ui(4, 4, Ah.bind(null, t, e), a);
  }
  function gr() {
  }
  function Mh(e, t) {
    var a = pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && rr(t, l[1]) ? l[0] : (a.memoizedState = [
      e,
      t
    ], e);
  }
  function Ch(e, t) {
    var a = pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && rr(t, l[1])) return l[0];
    if (l = e(), Ka) {
      fa(true);
      try {
        e();
      } finally {
        fa(false);
      }
    }
    return a.memoizedState = [
      l,
      t
    ], l;
  }
  function vr(e, t, a) {
    return a === void 0 || Ft & 1073741824 && !($ & 261930) ? e.memoizedState = t : (e.memoizedState = a, e = gm(), Q.lanes |= e, Ma |= e, a);
  }
  function Nh(e, t, a, l) {
    return ut(a, t) ? a : Hl.current !== null ? (e = vr(e, a, l), ut(e, t) || (xe = true), e) : !(Ft & 42) || Ft & 1073741824 && !($ & 261930) ? (xe = true, e.memoizedState = a) : (e = gm(), Q.lanes |= e, Ma |= e, t);
  }
  function wh(e, t, a, l, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = Y.T, c = {};
    Y.T = c, Sr(e, false, t, a);
    try {
      var s = n(), o = Y.S;
      if (o !== null && o(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var m = Sp(s, l);
        Tn(e, t, m, nt(e));
      } else Tn(e, t, l, nt(e));
    } catch (r) {
      Tn(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: r
      }, nt());
    } finally {
      P.p = u, i !== null && c.types !== null && (i.types = c.types), Y.T = i;
    }
  }
  function Ap() {
  }
  function fs(e, t, a, l) {
    if (e.tag !== 5) throw Error(N(476));
    var n = Oh(e).queue;
    wh(e, n, t, La, a === null ? Ap : function() {
      return Dh(e), a(l);
    });
  }
  function Oh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: La,
      baseState: La,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pt,
        lastRenderedState: La
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pt,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Dh(e) {
    var t = Oh(e);
    t.next === null && (t = e.alternate.memoizedState), Tn(e, t.next.queue, {}, nt());
  }
  function br() {
    return De(Gn);
  }
  function jh() {
    return pe().memoizedState;
  }
  function Uh() {
    return pe().memoizedState;
  }
  function Rp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          e = va(a);
          var l = ba(t, e, a);
          l !== null && (ke(l, t, a), xn(l, t, a)), t = {
            cache: nr()
          }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Mp(e, t, a) {
    var l = nt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Hi(e) ? Bh(t, a) : (a = er(e, t, a, l), a !== null && (ke(a, e, l), qh(a, t, l)));
  }
  function Hh(e, t, a) {
    var l = nt();
    Tn(e, t, a, l);
  }
  function Tn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Hi(e)) Bh(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var i = t.lastRenderedState, c = u(i, a);
        if (n.hasEagerState = true, n.eagerState = c, ut(c, i)) return wi(e, t, n, 0), ne === null && Ni(), false;
      } catch {
      } finally {
      }
      if (a = er(e, t, n, l), a !== null) return ke(a, e, l), qh(a, t, l), true;
    }
    return false;
  }
  function Sr(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Cr(),
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Hi(e)) {
      if (t) throw Error(N(479));
    } else t = er(e, a, l, 2), t !== null && ke(t, e, 2);
  }
  function Hi(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q;
  }
  function Bh(e, t) {
    Cl = ni = true;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function qh(e, t, a) {
    if (a & 4194048) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _d(e, a);
    }
  }
  var qn = {
    readContext: De,
    use: ji,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useLayoutEffect: he,
    useInsertionEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useSyncExternalStore: he,
    useId: he,
    useHostTransitionStatus: he,
    useFormState: he,
    useActionState: he,
    useOptimistic: he,
    useMemoCache: he,
    useCacheRefresh: he
  };
  qn.useEffectEvent = he;
  var Lh = {
    readContext: De,
    use: ji,
    useCallback: function(e, t) {
      return Be().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: De,
    useEffect: Vo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([
        e
      ]) : null, Uu(4194308, 4, Ah.bind(null, t, e), a);
    },
    useLayoutEffect: function(e, t) {
      return Uu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Uu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Be();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ka) {
        fa(true);
        try {
          e();
        } finally {
          fa(false);
        }
      }
      return a.memoizedState = [
        l,
        t
      ], l;
    },
    useReducer: function(e, t, a) {
      var l = Be();
      if (a !== void 0) {
        var n = a(t);
        if (Ka) {
          fa(true);
          try {
            a(t);
          } finally {
            fa(false);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = Mp.bind(null, Q, e), [
        l.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = Be();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: function(e) {
      e = rs(e);
      var t = e.queue, a = Hh.bind(null, Q, t);
      return t.dispatch = a, [
        e.memoizedState,
        a
      ];
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = Be();
      return vr(a, e, t);
    },
    useTransition: function() {
      var e = rs(false);
      return e = wh.bind(null, Q, e.queue, true, false), Be().memoizedState = e, [
        false,
        e
      ];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Q, n = Be();
      if (W) {
        if (a === void 0) throw Error(N(407));
        a = a();
      } else {
        if (a = t(), ne === null) throw Error(N(349));
        $ & 127 || dh(l, t, a);
      }
      n.memoizedState = a;
      var u = {
        value: a,
        getSnapshot: t
      };
      return n.queue = u, Vo(mh.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, Bl(9, {
        destroy: void 0
      }, hh.bind(null, l, u, a, t), null), a;
    },
    useId: function() {
      var e = Be(), t = ne.identifierPrefix;
      if (W) {
        var a = Ct, l = Mt;
        a = (l & ~(1 << 32 - lt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = ui++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = xp++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: br,
    useFormState: Go,
    useActionState: Go,
    useOptimistic: function(e) {
      var t = Be();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Sr.bind(null, Q, true, a), a.dispatch = t, [
        e,
        t
      ];
    },
    useMemoCache: mr,
    useCacheRefresh: function() {
      return Be().memoizedState = Rp.bind(null, Q);
    },
    useEffectEvent: function(e) {
      var t = Be(), a = {
        impl: e
      };
      return t.memoizedState = a, function() {
        if (F & 2) throw Error(N(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, xr = {
    readContext: De,
    use: ji,
    useCallback: Mh,
    useContext: De,
    useEffect: pr,
    useImperativeHandle: Rh,
    useInsertionEffect: Th,
    useLayoutEffect: zh,
    useMemo: Ch,
    useReducer: ju,
    useRef: Eh,
    useState: function() {
      return ju(Pt);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = pe();
      return Nh(a, le.memoizedState, e, t);
    },
    useTransition: function() {
      var e = ju(Pt)[0], t = pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Pn(e),
        t
      ];
    },
    useSyncExternalStore: fh,
    useId: jh,
    useHostTransitionStatus: br,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: function(e, t) {
      var a = pe();
      return gh(a, le, e, t);
    },
    useMemoCache: mr,
    useCacheRefresh: Uh
  };
  xr.useEffectEvent = _h;
  var Yh = {
    readContext: De,
    use: ji,
    useCallback: Mh,
    useContext: De,
    useEffect: pr,
    useImperativeHandle: Rh,
    useInsertionEffect: Th,
    useLayoutEffect: zh,
    useMemo: Ch,
    useReducer: fc,
    useRef: Eh,
    useState: function() {
      return fc(Pt);
    },
    useDebugValue: gr,
    useDeferredValue: function(e, t) {
      var a = pe();
      return le === null ? vr(a, e, t) : Nh(a, le.memoizedState, e, t);
    },
    useTransition: function() {
      var e = fc(Pt)[0], t = pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Pn(e),
        t
      ];
    },
    useSyncExternalStore: fh,
    useId: jh,
    useHostTransitionStatus: br,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(e, t) {
      var a = pe();
      return le !== null ? gh(a, le, e, t) : (a.baseState = e, [
        e,
        a.queue.dispatch
      ]);
    },
    useMemoCache: mr,
    useCacheRefresh: Uh
  };
  Yh.useEffectEvent = _h;
  function dc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : re({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var ds = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = nt(), n = va(l);
      n.payload = t, a != null && (n.callback = a), t = ba(e, n, l), t !== null && (ke(t, e, l), xn(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = nt(), n = va(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = ba(e, n, l), t !== null && (ke(t, e, l), xn(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = nt(), l = va(a);
      l.tag = 2, t != null && (l.callback = t), t = ba(e, l, a), t !== null && (ke(t, e, a), xn(t, e, a));
    }
  };
  function Zo(e, t, a, l, n, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Dn(a, l) || !Dn(n, u) : true;
  }
  function ko(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && ds.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = re({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  function Gh(e) {
    Fu(e);
  }
  function Xh(e) {
    console.error(e);
  }
  function Qh(e) {
    Fu(e);
  }
  function ii(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, {
        componentStack: t.stack
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Ko(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function hs(e, t, a) {
    return a = va(a), a.tag = 3, a.payload = {
      element: null
    }, a.callback = function() {
      ii(e, t);
    }, a;
  }
  function Vh(e) {
    return e = va(e), e.tag = 3, e;
  }
  function Zh(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        Ko(t, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      Ko(t, a, l), typeof n != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([
        this
      ]) : Sa.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Cp(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && kl(t, a, n, true), a = it.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return pt === null ? fi() : a.alternate === null && me === 0 && (me = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === ti ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([
              l
            ]) : t.add(l), _c(e, l, n)), false;
          case 22:
            return a.flags |= 65536, l === ti ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                l
              ])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([
              l
            ]) : a.add(l)), _c(e, l, n)), false;
        }
        throw Error(N(435, a.tag));
      }
      return _c(e, l, n), fi(), false;
    }
    if (W) return t = it.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== es && (e = Error(N(422), {
      cause: l
    }), Un(mt(e, a)))) : (l !== es && (t = Error(N(423), {
      cause: l
    }), Un(mt(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = mt(l, a), n = hs(e.stateNode, l, n), oc(e, n), me !== 4 && (me = 2)), false;
    var u = Error(N(520), {
      cause: l
    });
    if (u = mt(u, a), Rn === null ? Rn = [
      u
    ] : Rn.push(u), me !== 4 && (me = 2), t === null) return true;
    l = mt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = hs(a.stateNode, l, e), oc(a, e), false;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sa === null || !Sa.has(u)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = Vh(n), Zh(n, e, a, l), oc(a, n), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var Er = Error(N(461)), xe = false;
  function Ne(e, t, a, l) {
    t.child = e === null ? uh(t, null, a, l) : ka(t, e.child, a, l);
  }
  function Jo(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l) c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return Za(t), l = or(e, t, a, i, u, n), c = fr(), e !== null && !xe ? (dr(e, t, n), It(e, t, n)) : (W && c && ar(t), t.flags |= 1, Ne(e, t, l, n), t.child);
  }
  function $o(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !tr(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, kh(e, t, u, l, n)) : (e = Ou(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !_r(e, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Dn, a(i, l) && e.ref === t.ref) return It(e, t, n);
    }
    return t.flags |= 1, e = Kt(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kh(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Dn(u, l) && e.ref === t.ref) if (xe = false, t.pendingProps = l = u, _r(e, n)) e.flags & 131072 && (xe = true);
      else return t.lanes = e.lanes, It(e, t, n);
    }
    return ms(e, t, a, l, n);
  }
  function Kh(e, t, a, l) {
    var n = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if (t.flags & 128) {
        if (u = u !== null ? u.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null; ) n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~u;
        } else l = 0, t.child = null;
        return Wo(e, t, u, a, l);
      }
      if (a & 536870912) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Du(t, u !== null ? u.cachePool : null), u !== null ? qo(t, u) : cs(), sh(t);
      else return l = t.lanes = 536870912, Wo(e, t, u !== null ? u.baseLanes | a : a, a, l);
    } else u !== null ? (Du(t, u.cachePool), qo(t, u), ra(), t.memoizedState = null) : (e !== null && Du(t, null), cs(), ra());
    return Ne(e, t, n, a), t.child;
  }
  function mn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Wo(e, t, a, l, n) {
    var u = ur();
    return u = u === null ? null : {
      parent: Se._currentValue,
      pool: u
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Du(t, null), cs(), sh(t), e !== null && kl(e, t, l, true), t.childLanes = n, null;
  }
  function Hu(e, t) {
    return t = ci({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Fo(e, t, a) {
    return ka(t, e.child, null, a), e = Hu(t, t.pendingProps), e.flags |= 2, Pe(t), t.memoizedState = null, e;
  }
  function Np(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (W) {
        if (l.mode === "hidden") return e = Hu(t, l), t.lanes = 536870912, mn(null, e);
        if (ss(t), (e = ce) ? (e = Lm(e, yt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? {
            id: Mt,
            overflow: Ct
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Pd(e), a.return = t, t.child = a, Oe = t, ce = null)) : e = null, e === null) throw Aa(t);
        return t.lanes = 536870912, null;
      }
      return Hu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ss(t), n) if (t.flags & 256) t.flags &= -257, t = Fo(e, t, a);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(N(558));
      else if (xe || kl(e, t, a, false), n = (a & e.childLanes) !== 0, xe || n) {
        if (l = ne, l !== null && (i = Td(l, a), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Pa(e, i), ke(l, e, i), Er;
        fi(), t = Fo(e, t, a);
      } else e = u.treeContext, ce = gt(i.nextSibling), Oe = t, W = true, ga = null, yt = false, e !== null && eh(t, e), t = Hu(t, l), t.flags |= 4096;
      return t;
    }
    return e = Kt(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Bu(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(N(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ms(e, t, a, l, n) {
    return Za(t), a = or(e, t, a, l, void 0, n), l = fr(), e !== null && !xe ? (dr(e, t, n), It(e, t, n)) : (W && l && ar(t), t.flags |= 1, Ne(e, t, a, n), t.child);
  }
  function Po(e, t, a, l, n, u) {
    return Za(t), t.updateQueue = null, a = oh(t, l, a, n), rh(e), l = fr(), e !== null && !xe ? (dr(e, t, u), It(e, t, u)) : (W && l && ar(t), t.flags |= 1, Ne(e, t, a, u), t.child);
  }
  function Io(e, t, a, l, n) {
    if (Za(t), t.stateNode === null) {
      var u = Sl, i = a.contextType;
      typeof i == "object" && i !== null && (u = De(i)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ds, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, cr(t), i = a.contextType, u.context = typeof i == "object" && i !== null ? De(i) : Sl, u.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (dc(t, a, i, l), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && ds.enqueueReplaceState(u, u.state, null), _n(t, l, u, n), En(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = true;
    } else if (e === null) {
      u = t.stateNode;
      var c = t.memoizedProps, s = Ja(a, c);
      u.props = s;
      var o = u.context, m = a.contextType;
      i = Sl, typeof m == "object" && m !== null && (i = De(m));
      var r = a.getDerivedStateFromProps;
      m = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, m || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || o !== i) && ko(t, u, l, i), ia = false;
      var d = t.memoizedState;
      u.state = d, _n(t, l, u, n), En(), o = t.memoizedState, c || d !== o || ia ? (typeof r == "function" && (dc(t, a, r, l), o = t.memoizedState), (s = ia || Zo(t, a, s, l, d, o, i)) ? (m || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = o), u.props = l, u.state = o, u.context = i, l = s) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = false);
    } else {
      u = t.stateNode, us(e, t), i = t.memoizedProps, m = Ja(a, i), u.props = m, r = t.pendingProps, d = u.context, o = a.contextType, s = Sl, typeof o == "object" && o !== null && (s = De(o)), c = a.getDerivedStateFromProps, (o = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || d !== s) && ko(t, u, l, s), ia = false, d = t.memoizedState, u.state = d, _n(t, l, u, n), En();
      var y = t.memoizedState;
      i !== r || d !== y || ia || e !== null && e.dependencies !== null && ei(e.dependencies) ? (typeof c == "function" && (dc(t, a, c, l), y = t.memoizedState), (m = ia || Zo(t, a, m, l, d, y, s) || e !== null && e.dependencies !== null && ei(e.dependencies)) ? (o || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, y, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, y, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = y), u.props = l, u.state = y, u.context = s, l = m) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), l = false);
    }
    return u = l, Bu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = ka(t, e.child, null, n), t.child = ka(t, null, a, n)) : Ne(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = It(e, t, n), e;
  }
  function ef(e, t, a, l) {
    return Va(), t.flags |= 256, Ne(e, t, a, l), t.child;
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(e) {
    return {
      baseLanes: e,
      cachePool: ah()
    };
  }
  function yc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= et), e;
  }
  function Jh(e, t, a) {
    var l = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (ye.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (W) {
        if (n ? sa(t) : ra(), (e = ce) ? (e = Lm(e, yt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? {
            id: Mt,
            overflow: Ct
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Pd(e), a.return = t, t.child = a, Oe = t, ce = null)) : e = null, e === null) throw Aa(t);
        return Ms(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = l.children;
      return l = l.fallback, n ? (ra(), n = t.mode, c = ci({
        mode: "hidden",
        children: c
      }, n), l = Ya(l, n, a, null), c.return = t, l.return = t, c.sibling = l, t.child = c, l = t.child, l.memoizedState = mc(a), l.childLanes = yc(e, i, a), t.memoizedState = hc, mn(null, l)) : (sa(t), ys(t, c));
    }
    var s = e.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) t.flags & 256 ? (sa(t), t.flags &= -257, t = pc(e, t, a)) : t.memoizedState !== null ? (ra(), t.child = e.child, t.flags |= 128, t = null) : (ra(), c = l.fallback, n = t.mode, l = ci({
        mode: "visible",
        children: l.children
      }, n), c = Ya(c, n, a, null), c.flags |= 2, l.return = t, c.return = t, l.sibling = c, t.child = l, ka(t, e.child, null, a), l = t.child, l.memoizedState = mc(a), l.childLanes = yc(e, i, a), t.memoizedState = hc, t = mn(null, l));
      else if (sa(t), Ms(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var o = i.dgst;
        i = o, l = Error(N(419)), l.stack = "", l.digest = i, Un({
          value: l,
          source: null,
          stack: null
        }), t = pc(e, t, a);
      } else if (xe || kl(e, t, a, false), i = (a & e.childLanes) !== 0, xe || i) {
        if (i = ne, i !== null && (l = Td(i, a), l !== 0 && l !== s.retryLane)) throw s.retryLane = l, Pa(e, l), ke(i, e, l), Er;
        Rs(c) || fi(), t = pc(e, t, a);
      } else Rs(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, ce = gt(c.nextSibling), Oe = t, W = true, ga = null, yt = false, e !== null && eh(t, e), t = ys(t, l.children), t.flags |= 4096);
      return t;
    }
    return n ? (ra(), c = l.fallback, n = t.mode, s = e.child, o = s.sibling, l = Kt(s, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = s.subtreeFlags & 65011712, o !== null ? c = Kt(o, c) : (c = Ya(c, n, a, null), c.flags |= 2), c.return = t, l.return = t, l.sibling = c, t.child = l, mn(null, l), l = t.child, c = e.child.memoizedState, c === null ? c = mc(a) : (n = c.cachePool, n !== null ? (s = Se._currentValue, n = n.parent !== s ? {
      parent: s,
      pool: s
    } : n) : n = ah(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), l.memoizedState = c, l.childLanes = yc(e, i, a), t.memoizedState = hc, mn(e.child, l)) : (sa(t), a = e.child, e = a.sibling, a = Kt(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [
      e
    ], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ys(e, t) {
    return t = ci({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function ci(e, t) {
    return e = Ie(22, e, null, t), e.lanes = 0, e;
  }
  function pc(e, t, a) {
    return ka(t, e.child, null, a), e = ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tf(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), as(e.return, t, a);
  }
  function gc(e, t, a, l, n, u) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = l, i.tail = a, i.tailMode = n, i.treeForkCount = u);
  }
  function $h(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var i = ye.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, ue(ye, i), Ne(e, t, l, a), l = W ? jn : 0, !c && e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && tf(e, a, t);
      else if (e.tag === 19) tf(e, a, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; ) e = a.alternate, e !== null && li(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), gc(t, false, n, a, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && li(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        gc(t, true, a, null, u, l);
        break;
      case "together":
        gc(t, false, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function It(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Ma |= t.lanes, !(a & t.childLanes)) if (e !== null) {
      if (kl(e, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (e = t.child, a = Kt(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; ) e = e.sibling, a = a.sibling = Kt(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function _r(e, t) {
    return e.lanes & t ? true : (e = e.dependencies, !!(e !== null && ei(e)));
  }
  function wp(e, t, a) {
    switch (t.tag) {
      case 3:
        Ku(t, t.stateNode.containerInfo), ca(t, Se, e.memoizedState.cache), Va();
        break;
      case 27:
      case 5:
        Qc(t);
        break;
      case 4:
        Ku(t, t.stateNode.containerInfo);
        break;
      case 10:
        ca(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, ss(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (sa(t), t.flags |= 128, null) : a & t.child.childLanes ? Jh(e, t, a) : (sa(t), e = It(e, t, a), e !== null ? e.sibling : null);
        sa(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (kl(e, t, a, false), l = (a & t.childLanes) !== 0), n) {
          if (l) return $h(e, t, a);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), ue(ye, ye.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Kh(e, t, a, t.pendingProps);
      case 24:
        ca(t, Se, e.memoizedState.cache);
    }
    return It(e, t, a);
  }
  function Wh(e, t, a) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) xe = true;
    else {
      if (!_r(e, a) && !(t.flags & 128)) return xe = false, wp(e, t, a);
      xe = !!(e.flags & 131072);
    }
    else xe = false, W && t.flags & 1048576 && Id(t, jn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Ba(t.elementType), t.type = e, typeof e == "function") tr(e) ? (l = Ja(e, l), t.tag = 1, t = Io(null, t, e, l, a)) : (t.tag = 0, t = ms(null, t, e, l, a));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Gs) {
                t.tag = 11, t = Jo(null, t, e, l, a);
                break e;
              } else if (n === Xs) {
                t.tag = 14, t = $o(null, t, e, l, a);
                break e;
              }
            }
            throw t = Gc(e) || e, Error(N(306, t, ""));
          }
        }
        return t;
      case 0:
        return ms(e, t, t.type, t.pendingProps, a);
      case 1:
        return l = t.type, n = Ja(l, t.pendingProps), Io(e, t, l, n, a);
      case 3:
        e: {
          if (Ku(t, t.stateNode.containerInfo), e === null) throw Error(N(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, us(e, t), _n(t, l, null, a);
          var i = t.memoizedState;
          if (l = i.cache, ca(t, Se, l), l !== u.cache && ls(t, [
            Se
          ], a, true), En(), l = i.element, u.isDehydrated) if (u = {
            element: l,
            isDehydrated: false,
            cache: i.cache
          }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = ef(e, t, l, a);
            break e;
          } else if (l !== n) {
            n = mt(Error(N(424)), t), Un(n), t = ef(e, t, l, a);
            break e;
          } else {
            switch (e = t.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (ce = gt(e.firstChild), Oe = t, W = true, ga = null, yt = true, a = uh(t, null, l, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Va(), l === n) {
              t = It(e, t, a);
              break e;
            }
            Ne(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Bu(e, t), e === null ? (a = Ef(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : W || (a = t.type, e = t.pendingProps, l = yi(pa.current).createElement(a), l[we] = t, l[Ke] = e, je(l, a, e), Ae(l), t.stateNode = l) : t.memoizedState = Ef(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Qc(t), e === null && W && (l = t.stateNode = Ym(t.type, t.pendingProps, pa.current), Oe = t, yt = true, n = ce, Na(t.type) ? (Cs = n, ce = gt(l.firstChild)) : ce = n), Ne(e, t, t.pendingProps.children, a), Bu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && W && ((n = l = ce) && (l = cg(l, t.type, t.pendingProps, yt), l !== null ? (t.stateNode = l, Oe = t, ce = gt(l.firstChild), yt = false, n = true) : n = false), n || Aa(t)), Qc(t), n = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = u.children, zs(n, u) ? l = null : i !== null && zs(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = or(e, t, Ep, null, null, a), Gn._currentValue = n), Bu(e, t), Ne(e, t, l, a), t.child;
      case 6:
        return e === null && W && ((e = a = ce) && (a = sg(a, t.pendingProps, yt), a !== null ? (t.stateNode = a, Oe = t, ce = null, e = true) : e = false), e || Aa(t)), null;
      case 13:
        return Jh(e, t, a);
      case 4:
        return Ku(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = ka(t, null, l, a) : Ne(e, t, l, a), t.child;
      case 11:
        return Jo(e, t, t.type, t.pendingProps, a);
      case 7:
        return Ne(e, t, t.pendingProps, a), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return l = t.pendingProps, ca(t, t.type, l.value), Ne(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, Za(t), n = De(n), l = l(n), t.flags |= 1, Ne(e, t, l, a), t.child;
      case 14:
        return $o(e, t, t.type, t.pendingProps, a);
      case 15:
        return kh(e, t, t.type, t.pendingProps, a);
      case 19:
        return $h(e, t, a);
      case 31:
        return Np(e, t, a);
      case 22:
        return Kh(e, t, a, t.pendingProps);
      case 24:
        return Za(t), l = De(Se), e === null ? (n = ur(), n === null && (n = ne, u = nr(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = {
          parent: l,
          cache: n
        }, cr(t), ca(t, Se, n)) : (e.lanes & a && (us(e, t), _n(t, null, null, a), En()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = {
          parent: l,
          cache: l
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ca(t, Se, l)) : (l = u.cache, ca(t, Se, l), l !== n.cache && ls(t, [
          Se
        ], a, true))), Ne(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(N(156, t.tag));
  }
  function Bt(e) {
    e.flags |= 4;
  }
  function vc(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
      else if (Sm()) e.flags |= 8192;
      else throw Xa = ti, ir;
    } else e.flags &= -16777217;
  }
  function af(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Qm(t)) if (Sm()) e.flags |= 8192;
    else throw Xa = ti, ir;
  }
  function Su(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xd() : 536870912, e.lanes |= t, ql |= t);
  }
  function un(e, t) {
    if (!W) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t) for (var n = e.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else for (n = e.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Op(e, t, a) {
    var l = t.pendingProps;
    switch (lr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ie(t), null;
      case 1:
        return ie(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jt(Se), Ol(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (il(t) ? Bt(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rc())), ie(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (Bt(t), u !== null ? (ie(t), af(t, u)) : (ie(t), vc(t, n, null, l, a))) : u ? u !== e.memoizedState ? (Bt(t), ie(t), af(t, u)) : (ie(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Bt(t), ie(t), vc(t, n, e, l, a)), null;
      case 27:
        if (Ju(t), a = pa.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Bt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(N(166));
            return ie(t), null;
          }
          e = wt.current, il(t) ? wo(t) : (e = Ym(n, l, a), t.stateNode = e, Bt(t));
        }
        return ie(t), null;
      case 5:
        if (Ju(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Bt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(N(166));
            return ie(t), null;
          }
          if (u = wt.current, il(t)) wo(t);
          else {
            var i = yi(pa.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof l.is == "string" ? i.createElement("select", {
                      is: l.is
                    }) : i.createElement("select"), l.multiple ? u.multiple = true : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? i.createElement(n, {
                      is: l.is
                    }) : i.createElement(n);
                }
            }
            u[we] = t, u[Ke] = l;
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = u;
            e: switch (je(u, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = true;
                break e;
              default:
                l = false;
            }
            l && Bt(t);
          }
        }
        return ie(t), vc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Bt(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(N(166));
          if (e = pa.current, il(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = Oe, n !== null) switch (n.tag) {
              case 27:
              case 5:
                l = n.memoizedProps;
            }
            e[we] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === true || Hm(e.nodeValue, a)), e || Aa(t, true);
          } else e = yi(e).createTextNode(l), e[we] = t, t.stateNode = e;
        }
        return ie(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = il(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(N(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(557));
              e[we] = t;
            } else Va(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ie(t), e = false;
          } else a = rc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = true;
          if (!e) return t.flags & 256 ? (Pe(t), t) : (Pe(t), null);
          if (t.flags & 128) throw Error(N(558));
        }
        return ie(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = il(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(N(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(N(317));
              n[we] = t;
            } else Va(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ie(t), n = false;
          } else n = rc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
          if (!n) return t.flags & 256 ? (Pe(t), t) : (Pe(t), null);
        }
        return Pe(t), t.flags & 128 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Su(t, t.updateQueue), ie(t), null);
      case 4:
        return Ol(), e === null && Nr(t.stateNode.containerInfo), ie(t), null;
      case 10:
        return Jt(t.type), ie(t), null;
      case 19:
        if (Re(ye), l = t.memoizedState, l === null) return ie(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null) if (n) un(l, false);
        else {
          if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (u = li(e), u !== null) {
              for (t.flags |= 128, un(l, false), e = u.updateQueue, t.updateQueue = e, Su(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; ) Fd(a, e), a = a.sibling;
              return ue(ye, ye.current & 1 | 2), W && Xt(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && tt() > ri && (t.flags |= 128, n = true, un(l, false), t.lanes = 4194304);
        }
        else {
          if (!n) if (e = li(u), e !== null) {
            if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, Su(t, e), un(l, true), l.tail === null && l.tailMode === "hidden" && !u.alternate && !W) return ie(t), null;
          } else 2 * tt() - l.renderingStartTime > ri && a !== 536870912 && (t.flags |= 128, n = true, un(l, false), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = tt(), e.sibling = null, a = ye.current, ue(ye, n ? a & 1 | 2 : a & 1), W && Xt(t, l.treeForkCount), e) : (ie(t), null);
      case 22:
      case 23:
        return Pe(t), sr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? a & 536870912 && !(t.flags & 128) && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), a = t.updateQueue, a !== null && Su(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && Re(Ga), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jt(Se), ie(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, t.tag));
  }
  function Dp(e, t) {
    switch (lr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Jt(Se), Ol(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ju(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Pe(t), t.alternate === null) throw Error(N(340));
          Va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Pe(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(N(340));
          Va();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Re(ye), null;
      case 4:
        return Ol(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return Pe(t), sr(), e !== null && Re(Ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Jt(Se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fh(e, t) {
    switch (lr(t), t.tag) {
      case 3:
        Jt(Se), Ol();
        break;
      case 26:
      case 27:
      case 5:
        Ju(t);
        break;
      case 4:
        Ol();
        break;
      case 31:
        t.memoizedState !== null && Pe(t);
        break;
      case 13:
        Pe(t);
        break;
      case 19:
        Re(ye);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        Pe(t), sr(), e !== null && Re(Ga);
        break;
      case 24:
        Jt(Se);
    }
  }
  function In(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var u = a.create, i = a.inst;
            l = u(), i.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      te(t, t.return, c);
    }
  }
  function Ra(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var i = l.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var s = a, o = c;
              try {
                o();
              } catch (m) {
                te(n, s, m);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (m) {
      te(t, t.return, m);
    }
  }
  function Ph(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        ch(t, a);
      } catch (l) {
        te(e, e.return, l);
      }
    }
  }
  function Ih(e, t, a) {
    a.props = Ja(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      te(e, t, l);
    }
  }
  function zn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      te(e, t, n);
    }
  }
  function Nt(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null) if (typeof l == "function") try {
      l();
    } catch (n) {
      te(e, t, n);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (n) {
      te(e, t, n);
    }
    else a.current = null;
  }
  function em(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      te(e, e.return, n);
    }
  }
  function bc(e, t, a) {
    try {
      var l = e.stateNode;
      tg(l, e.type, a, t), l[Ke] = t;
    } catch (n) {
      te(e, e.return, n);
    }
  }
  function tm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Na(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Na(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ps(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Zt));
    else if (l !== 4 && (l === 27 && Na(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (ps(e, t, a), e = e.sibling; e !== null; ) ps(e, t, a), e = e.sibling;
  }
  function si(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Na(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (si(e, t, a), e = e.sibling; e !== null; ) si(e, t, a), e = e.sibling;
  }
  function am(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      je(t, l, a), t[we] = e, t[Ke] = a;
    } catch (u) {
      te(e, e.return, u);
    }
  }
  var Qt = false, be = false, xc = false, lf = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function jp(e, t) {
    if (e = e.containerInfo, _s = bi, e = Qd(e), Ps(e)) {
      if ("selectionStart" in e) var a = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var n = l.anchorOffset, u = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, u.nodeType;
          } catch {
            a = null;
            break e;
          }
          var i = 0, c = -1, s = -1, o = 0, m = 0, r = e, d = null;
          t: for (; ; ) {
            for (var y; r !== a || n !== 0 && r.nodeType !== 3 || (c = i + n), r !== u || l !== 0 && r.nodeType !== 3 || (s = i + l), r.nodeType === 3 && (i += r.nodeValue.length), (y = r.firstChild) !== null; ) d = r, r = y;
            for (; ; ) {
              if (r === e) break t;
              if (d === a && ++o === n && (c = i), d === u && ++m === l && (s = i), (y = r.nextSibling) !== null) break;
              r = d, d = r.parentNode;
            }
            r = y;
          }
          a = c === -1 || s === -1 ? null : {
            start: c,
            end: s
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Ts = {
      focusedElem: e,
      selectionRange: a
    }, bi = false, ze = t; ze !== null; ) if (t = ze, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ze = e;
    else for (; ze !== null; ) {
      switch (t = ze, u = t.alternate, e = t.flags, t.tag) {
        case 0:
          if (e & 4 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++) n = e[a], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (e & 1024 && u !== null) {
            e = void 0, a = t, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
            try {
              var T = Ja(a.type, n);
              e = l.getSnapshotBeforeUpdate(T, u), l.__reactInternalSnapshotBeforeUpdate = e;
            } catch (M) {
              te(a, a.return, M);
            }
          }
          break;
        case 3:
          if (e & 1024) {
            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) As(e);
            else if (a === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                As(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if (e & 1024) throw Error(N(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ze = e;
        break;
      }
      ze = t.return;
    }
  }
  function lm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Lt(e, a), l & 4 && In(5, a);
        break;
      case 1:
        if (Lt(e, a), l & 4) if (e = a.stateNode, t === null) try {
          e.componentDidMount();
        } catch (i) {
          te(a, a.return, i);
        }
        else {
          var n = Ja(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            te(a, a.return, i);
          }
        }
        l & 64 && Ph(a), l & 512 && zn(a, a.return);
        break;
      case 3:
        if (Lt(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            ch(e, t);
          } catch (i) {
            te(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && l & 4 && am(a);
      case 26:
      case 5:
        Lt(e, a), t === null && l & 4 && em(a), l & 512 && zn(a, a.return);
        break;
      case 12:
        Lt(e, a);
        break;
      case 31:
        Lt(e, a), l & 4 && im(e, a);
        break;
      case 13:
        Lt(e, a), l & 4 && cm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Qp.bind(null, a), rg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Qt, !l) {
          t = t !== null && t.memoizedState !== null || be, n = Qt;
          var u = be;
          Qt = l, (be = t) && !u ? Yt(e, a, (a.subtreeFlags & 8772) !== 0) : Lt(e, a), Qt = n, be = u;
        }
        break;
      case 30:
        break;
      default:
        Lt(e, a);
    }
  }
  function nm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ks(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var fe = null, Qe = false;
  function qt(e, t, a) {
    for (a = a.child; a !== null; ) um(e, t, a), a = a.sibling;
  }
  function um(e, t, a) {
    if (at && typeof at.onCommitFiberUnmount == "function") try {
      at.onCommitFiberUnmount(kn, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        be || Nt(a, t), qt(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        be || Nt(a, t);
        var l = fe, n = Qe;
        Na(a.type) && (fe = a.stateNode, Qe = false), qt(e, t, a), Cn(a.stateNode), fe = l, Qe = n;
        break;
      case 5:
        be || Nt(a, t);
      case 6:
        if (l = fe, n = Qe, fe = null, qt(e, t, a), fe = l, Qe = n, fe !== null) if (Qe) try {
          (fe.nodeType === 9 ? fe.body : fe.nodeName === "HTML" ? fe.ownerDocument.body : fe).removeChild(a.stateNode);
        } catch (u) {
          te(a, t, u);
        }
        else try {
          fe.removeChild(a.stateNode);
        } catch (u) {
          te(a, t, u);
        }
        break;
      case 18:
        fe !== null && (Qe ? (e = fe, gf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Xl(e)) : gf(fe, a.stateNode));
        break;
      case 4:
        l = fe, n = Qe, fe = a.stateNode.containerInfo, Qe = true, qt(e, t, a), fe = l, Qe = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ra(2, a, t), be || Ra(4, a, t), qt(e, t, a);
        break;
      case 1:
        be || (Nt(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Ih(a, t, l)), qt(e, t, a);
        break;
      case 21:
        qt(e, t, a);
        break;
      case 22:
        be = (l = be) || a.memoizedState !== null, qt(e, t, a), be = l;
        break;
      default:
        qt(e, t, a);
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Xl(e);
      } catch (a) {
        te(t, t.return, a);
      }
    }
  }
  function cm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Xl(e);
    } catch (a) {
      te(t, t.return, a);
    }
  }
  function Up(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new lf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new lf()), t;
      default:
        throw Error(N(435, e.tag));
    }
  }
  function xu(e, t) {
    var a = Up(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = Vp.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Ye(e, t) {
    var a = t.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var n = a[l], u = e, i = t, c = i;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Na(c.type)) {
              fe = c.stateNode, Qe = false;
              break e;
            }
            break;
          case 5:
            fe = c.stateNode, Qe = false;
            break e;
          case 3:
          case 4:
            fe = c.stateNode.containerInfo, Qe = true;
            break e;
        }
        c = c.return;
      }
      if (fe === null) throw Error(N(160));
      um(u, i, n), fe = null, Qe = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) sm(t, e), t = t.sibling;
  }
  var _t = null;
  function sm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ye(t, e), Ge(e), l & 4 && (Ra(3, e, e.return), In(3, e), Ra(5, e, e.return));
        break;
      case 1:
        Ye(t, e), Ge(e), l & 512 && (be || a === null || Nt(a, a.return)), l & 64 && Qt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = _t;
        if (Ye(t, e), Ge(e), l & 512 && (be || a === null || Nt(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
              t: switch (l) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[$n] || u[we] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(u, n.querySelector("head > title"))), je(u, l, a), u[we] = e, Ae(u), l = u;
                  break e;
                case "link":
                  var i = Tf("link", "href", n).get(l + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(l), je(u, l, a), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = Tf("meta", "content", n).get(l + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(l), je(u, l, a), n.head.appendChild(u);
                  break;
                default:
                  throw Error(N(468, l));
              }
              u[we] = e, Ae(u), l = u;
            }
            e.stateNode = l;
          } else zf(n, e.type, e.stateNode);
          else e.stateNode = _f(n, l, e.memoizedProps);
          else u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? zf(n, e.type, e.stateNode) : _f(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && bc(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Ye(t, e), Ge(e), l & 512 && (be || a === null || Nt(a, a.return)), a !== null && l & 4 && bc(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Ye(t, e), Ge(e), l & 512 && (be || a === null || Nt(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            jl(n, "");
          } catch (T) {
            te(e, e.return, T);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, bc(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (xc = true);
        break;
      case 6:
        if (Ye(t, e), Ge(e), l & 4) {
          if (e.stateNode === null) throw Error(N(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (T) {
            te(e, e.return, T);
          }
        }
        break;
      case 3:
        if (Yu = null, n = _t, _t = pi(t.containerInfo), Ye(t, e), _t = n, Ge(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Xl(t.containerInfo);
        } catch (T) {
          te(e, e.return, T);
        }
        xc && (xc = false, rm(e));
        break;
      case 4:
        l = _t, _t = pi(e.stateNode.containerInfo), Ye(t, e), Ge(e), _t = l;
        break;
      case 12:
        Ye(t, e), Ge(e);
        break;
      case 31:
        Ye(t, e), Ge(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xu(e, l)));
        break;
      case 13:
        Ye(t, e), Ge(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Bi = tt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xu(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, o = Qt, m = be;
        if (Qt = o || n, be = m || s, Ye(t, e), be = m, Qt = o, Ge(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || s || Qt || be || qa(e)), a = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              s = a = t;
              try {
                if (u = s.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var r = s.memoizedProps.style, d = r != null && r.hasOwnProperty("display") ? r.display : null;
                  c.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                }
              } catch (T) {
                te(s, s.return, T);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              s = t;
              try {
                s.stateNode.nodeValue = n ? "" : s.memoizedProps;
              } catch (T) {
                te(s, s.return, T);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              s = t;
              try {
                var y = s.stateNode;
                n ? vf(y, true) : vf(s.stateNode, false);
              } catch (T) {
                te(s, s.return, T);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, xu(e, a))));
        break;
      case 19:
        Ye(t, e), Ge(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, xu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ye(t, e), Ge(e);
    }
  }
  function Ge(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (tm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(N(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = Sc(e);
            si(e, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (jl(i, ""), a.flags &= -33);
            var c = Sc(e);
            si(e, c, i);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, o = Sc(e);
            ps(e, o, s);
            break;
          default:
            throw Error(N(161));
        }
      } catch (m) {
        te(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rm(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      rm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Lt(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) lm(e, t.alternate, t), t = t.sibling;
  }
  function qa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ra(4, t, t.return), qa(t);
          break;
        case 1:
          Nt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Ih(t, t.return, a), qa(t);
          break;
        case 27:
          Cn(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), qa(t);
          break;
        case 22:
          t.memoizedState === null && qa(t);
          break;
        case 30:
          qa(t);
          break;
        default:
          qa(t);
      }
      e = e.sibling;
    }
  }
  function Yt(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Yt(n, u, a), In(4, u);
          break;
        case 1:
          if (Yt(n, u, a), l = u, n = l.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (o) {
            te(l, l.return, o);
          }
          if (l = u, n = l.updateQueue, n !== null) {
            var c = l.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) ih(s[n], c);
            } catch (o) {
              te(l, l.return, o);
            }
          }
          a && i & 64 && Ph(u), zn(u, u.return);
          break;
        case 27:
          am(u);
        case 26:
        case 5:
          Yt(n, u, a), a && l === null && i & 4 && em(u), zn(u, u.return);
          break;
        case 12:
          Yt(n, u, a);
          break;
        case 31:
          Yt(n, u, a), a && i & 4 && im(n, u);
          break;
        case 13:
          Yt(n, u, a), a && i & 4 && cm(n, u);
          break;
        case 22:
          u.memoizedState === null && Yt(n, u, a), zn(u, u.return);
          break;
        case 30:
          break;
        default:
          Yt(n, u, a);
      }
      t = t.sibling;
    }
  }
  function Tr(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Fn(a));
  }
  function zr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fn(e));
  }
  function Et(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) om(e, t, a, l), t = t.sibling;
  }
  function om(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Et(e, t, a, l), n & 2048 && In(9, t);
        break;
      case 1:
        Et(e, t, a, l);
        break;
      case 3:
        Et(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fn(e)));
        break;
      case 12:
        if (n & 2048) {
          Et(e, t, a, l), e = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (s) {
            te(t, t.return, s);
          }
        } else Et(e, t, a, l);
        break;
      case 31:
        Et(e, t, a, l);
        break;
      case 13:
        Et(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Et(e, t, a, l) : An(e, t) : u._visibility & 2 ? Et(e, t, a, l) : (u._visibility |= 2, ol(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Tr(i, t);
        break;
      case 24:
        Et(e, t, a, l), n & 2048 && zr(t.alternate, t);
        break;
      default:
        Et(e, t, a, l);
    }
  }
  function ol(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = e, i = t, c = a, s = l, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ol(u, i, c, s, n), In(8, i);
          break;
        case 23:
          break;
        case 22:
          var m = i.stateNode;
          i.memoizedState !== null ? m._visibility & 2 ? ol(u, i, c, s, n) : An(u, i) : (m._visibility |= 2, ol(u, i, c, s, n)), n && o & 2048 && Tr(i.alternate, i);
          break;
        case 24:
          ol(u, i, c, s, n), n && o & 2048 && zr(i.alternate, i);
          break;
        default:
          ol(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function An(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = e, l = t, n = l.flags;
      switch (l.tag) {
        case 22:
          An(a, l), n & 2048 && Tr(l.alternate, l);
          break;
        case 24:
          An(a, l), n & 2048 && zr(l.alternate, l);
          break;
        default:
          An(a, l);
      }
      t = t.sibling;
    }
  }
  var yn = 8192;
  function cl(e, t, a) {
    if (e.subtreeFlags & yn) for (e = e.child; e !== null; ) fm(e, t, a), e = e.sibling;
  }
  function fm(e, t, a) {
    switch (e.tag) {
      case 26:
        cl(e, t, a), e.flags & yn && e.memoizedState !== null && xg(a, _t, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        cl(e, t, a);
        break;
      case 3:
      case 4:
        var l = _t;
        _t = pi(e.stateNode.containerInfo), cl(e, t, a), _t = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = yn, yn = 16777216, cl(e, t, a), yn = l) : cl(e, t, a));
        break;
      default:
        cl(e, t, a);
    }
  }
  function dm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function cn(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        ze = l, mm(l, e);
      }
      dm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) hm(e), e = e.sibling;
  }
  function hm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        cn(e), e.flags & 2048 && Ra(9, e, e.return);
        break;
      case 3:
        cn(e);
        break;
      case 12:
        cn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : cn(e);
        break;
      default:
        cn(e);
    }
  }
  function qu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        ze = l, mm(l, e);
      }
      dm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ra(8, t, t.return), qu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, qu(t));
          break;
        default:
          qu(t);
      }
      e = e.sibling;
    }
  }
  function mm(e, t) {
    for (; ze !== null; ) {
      var a = ze;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ra(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Fn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ze = l;
      else e: for (a = e; ze !== null; ) {
        l = ze;
        var n = l.sibling, u = l.return;
        if (nm(l), l === a) {
          ze = null;
          break e;
        }
        if (n !== null) {
          n.return = u, ze = n;
          break e;
        }
        ze = u;
      }
    }
  }
  var Hp = {
    getCacheForType: function(e) {
      var t = De(Se), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return De(Se).controller.signal;
    }
  }, Bp = typeof WeakMap == "function" ? WeakMap : Map, F = 0, ne = null, J = null, $ = 0, ee = 0, Fe = null, ha = false, Jl = false, Ar = false, ea = 0, me = 0, Ma = 0, Qa = 0, Rr = 0, et = 0, ql = 0, Rn = null, Ve = null, gs = false, Bi = 0, ym = 0, ri = 1 / 0, oi = null, Sa = null, Ee = 0, xa = null, Ll = null, $t = 0, vs = 0, bs = null, pm = null, Mn = 0, Ss = null;
  function nt() {
    return F & 2 && $ !== 0 ? $ & -$ : Y.T !== null ? Cr() : zd();
  }
  function gm() {
    if (et === 0) if (!($ & 536870912) || W) {
      var e = hu;
      hu <<= 1, !(hu & 3932160) && (hu = 262144), et = e;
    } else et = 536870912;
    return e = it.current, e !== null && (e.flags |= 32), et;
  }
  function ke(e, t, a) {
    (e === ne && (ee === 2 || ee === 9) || e.cancelPendingCommit !== null) && (Yl(e, 0), ma(e, $, et, false)), Jn(e, a), (!(F & 2) || e !== ne) && (e === ne && (!(F & 2) && (Qa |= a), me === 4 && ma(e, $, et, false)), jt(e));
  }
  function vm(e, t, a) {
    if (F & 6) throw Error(N(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Kn(e, t), n = l ? Yp(e, t) : Ec(e, t, true), u = l;
    do {
      if (n === 0) {
        Jl && !l && ma(e, t, 0, false);
        break;
      } else {
        if (a = e.current.alternate, u && !qp(a)) {
          n = Ec(e, t, false), u = false;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var i = 0;
          else i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            e: {
              var c = e;
              n = Rn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Yl(c, i).flags |= 256), i = Ec(c, i, false), i !== 2) {
                if (Ar && !s) {
                  c.errorRecoveryDisabledLanes |= u, Qa |= u, n = 4;
                  break e;
                }
                u = Ve, Ve = n, u !== null && (Ve === null ? Ve = u : Ve.push.apply(Ve, u));
              }
              n = i;
            }
            if (u = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          Yl(e, 0), ma(e, t, 0, true);
          break;
        }
        e: {
          switch (l = e, u = n, u) {
            case 0:
            case 1:
              throw Error(N(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(l, t, et, !ha);
              break e;
            case 2:
              Ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((t & 62914560) === t && (n = Bi + 300 - tt(), 10 < n)) {
            if (ma(l, t, et, !ha), Ai(l, 0, true) !== 0) break e;
            $t = t, l.timeoutHandle = qm(nf.bind(null, l, a, Ve, oi, gs, t, et, Qa, ql, ha, u, "Throttled", -0, 0), n);
            break e;
          }
          nf(l, a, Ve, oi, gs, t, et, Qa, ql, ha, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    jt(e);
  }
  function nf(e, t, a, l, n, u, i, c, s, o, m, r, d, y) {
    if (e.timeoutHandle = -1, r = t.subtreeFlags, r & 8192 || (r & 16785408) === 16785408) {
      r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: Zt
      }, fm(t, u, r);
      var T = (u & 62914560) === u ? Bi - tt() : (u & 4194048) === u ? ym - tt() : 0;
      if (T = Eg(r, T), T !== null) {
        $t = u, e.cancelPendingCommit = T(cf.bind(null, e, t, u, a, l, n, i, c, s, m, r, null, d, y)), ma(e, u, i, !o);
        return;
      }
    }
    cf(e, t, u, a, l, n, i, c, s);
  }
  function qp(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
        var n = a[l], u = n.getSnapshot;
        n = n.value;
        try {
          if (!ut(u(), n)) return false;
        } catch {
          return false;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function ma(e, t, a, l) {
    t &= ~Rr, t &= ~Qa, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - lt(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && Ed(e, a, t);
  }
  function qi() {
    return F & 6 ? true : (eu(0), false);
  }
  function Mr() {
    if (J !== null) {
      if (ee === 0) var e = J.return;
      else e = J, kt = Ia = null, hr(e), Ml = null, Hn = 0, e = J;
      for (; e !== null; ) Fh(e.alternate, e), e = e.return;
      J = null;
    }
  }
  function Yl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, ng(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), $t = 0, Mr(), ne = e, J = a = Kt(e.current, null), $ = t, ee = 0, Fe = null, ha = false, Jl = Kn(e, t), Ar = false, ql = et = Rr = Qa = Ma = me = 0, Ve = Rn = null, gs = false, t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var n = 31 - lt(l), u = 1 << n;
      t |= e[n], l &= ~u;
    }
    return ea = t, Ni(), a;
  }
  function bm(e, t) {
    Q = null, Y.H = qn, t === Kl || t === Oi ? (t = Ho(), ee = 3) : t === ir ? (t = Ho(), ee = 4) : ee = t === Er ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Fe = t, J === null && (me = 1, ii(e, mt(t, e.current)));
  }
  function Sm() {
    var e = it.current;
    return e === null ? true : ($ & 4194048) === $ ? pt === null : ($ & 62914560) === $ || $ & 536870912 ? e === pt : false;
  }
  function xm() {
    var e = Y.H;
    return Y.H = qn, e === null ? qn : e;
  }
  function Em() {
    var e = Y.A;
    return Y.A = Hp, e;
  }
  function fi() {
    me = 4, ha || ($ & 4194048) !== $ && it.current !== null || (Jl = true), !(Ma & 134217727) && !(Qa & 134217727) || ne === null || ma(ne, $, et, false);
  }
  function Ec(e, t, a) {
    var l = F;
    F |= 2;
    var n = xm(), u = Em();
    (ne !== e || $ !== t) && (oi = null, Yl(e, t)), t = false;
    var i = me;
    e: do
      try {
        if (ee !== 0 && J !== null) {
          var c = J, s = Fe;
          switch (ee) {
            case 8:
              Mr(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = true);
              var o = ee;
              if (ee = 0, Fe = null, _l(e, c, s, o), a && Jl) {
                i = 0;
                break e;
              }
              break;
            default:
              o = ee, ee = 0, Fe = null, _l(e, c, s, o);
          }
        }
        Lp(), i = me;
        break;
      } catch (m) {
        bm(e, m);
      }
    while (true);
    return t && e.shellSuspendCounter++, kt = Ia = null, F = l, Y.H = n, Y.A = u, J === null && (ne = null, $ = 0, Ni()), i;
  }
  function Lp() {
    for (; J !== null; ) _m(J);
  }
  function Yp(e, t) {
    var a = F;
    F |= 2;
    var l = xm(), n = Em();
    ne !== e || $ !== t ? (oi = null, ri = tt() + 500, Yl(e, t)) : Jl = Kn(e, t);
    e: do
      try {
        if (ee !== 0 && J !== null) {
          t = J;
          var u = Fe;
          t: switch (ee) {
            case 1:
              ee = 0, Fe = null, _l(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Uo(u)) {
                ee = 0, Fe = null, uf(t);
                break;
              }
              t = function() {
                ee !== 2 && ee !== 9 || ne !== e || (ee = 7), jt(e);
              }, u.then(t, t);
              break e;
            case 3:
              ee = 7;
              break e;
            case 4:
              ee = 5;
              break e;
            case 7:
              Uo(u) ? (ee = 0, Fe = null, uf(t)) : (ee = 0, Fe = null, _l(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (i ? Qm(i) : c.stateNode.complete) {
                    ee = 0, Fe = null;
                    var s = c.sibling;
                    if (s !== null) J = s;
                    else {
                      var o = c.return;
                      o !== null ? (J = o, Li(o)) : J = null;
                    }
                    break t;
                  }
              }
              ee = 0, Fe = null, _l(e, t, u, 5);
              break;
            case 6:
              ee = 0, Fe = null, _l(e, t, u, 6);
              break;
            case 8:
              Mr(), me = 6;
              break e;
            default:
              throw Error(N(462));
          }
        }
        Gp();
        break;
      } catch (m) {
        bm(e, m);
      }
    while (true);
    return kt = Ia = null, Y.H = l, Y.A = n, F = a, J !== null ? 0 : (ne = null, $ = 0, Ni(), me);
  }
  function Gp() {
    for (; J !== null && !oy(); ) _m(J);
  }
  function _m(e) {
    var t = Wh(e.alternate, e, ea);
    e.memoizedProps = e.pendingProps, t === null ? Li(e) : J = t;
  }
  function uf(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Po(a, t, t.pendingProps, t.type, void 0, $);
        break;
      case 11:
        t = Po(a, t, t.pendingProps, t.type.render, t.ref, $);
        break;
      case 5:
        hr(t);
      default:
        Fh(a, t), t = J = Fd(t, ea), t = Wh(a, t, ea);
    }
    e.memoizedProps = e.pendingProps, t === null ? Li(e) : J = t;
  }
  function _l(e, t, a, l) {
    kt = Ia = null, hr(t), Ml = null, Hn = 0;
    var n = t.return;
    try {
      if (Cp(e, n, t, a, $)) {
        me = 1, ii(e, mt(a, e.current)), J = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw J = n, u;
      me = 1, ii(e, mt(a, e.current)), J = null;
      return;
    }
    t.flags & 32768 ? (W || l === 1 ? e = true : Jl || $ & 536870912 ? e = false : (ha = e = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = it.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Tm(t, e)) : Li(t);
  }
  function Li(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Tm(t, ha);
        return;
      }
      e = t.return;
      var a = Op(t.alternate, t, ea);
      if (a !== null) {
        J = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = e;
    } while (t !== null);
    me === 0 && (me = 5);
  }
  function Tm(e, t) {
    do {
      var a = Dp(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, J = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        J = e;
        return;
      }
      J = e = a;
    } while (e !== null);
    me = 6, J = null;
  }
  function cf(e, t, a, l, n, u, i, c, s) {
    e.cancelPendingCommit = null;
    do
      Yi();
    while (Ee !== 0);
    if (F & 6) throw Error(N(327));
    if (t !== null) {
      if (t === e.current) throw Error(N(177));
      if (u = t.lanes | t.childLanes, u |= Is, Sy(e, a, u, i, c, s), e === ne && (J = ne = null, $ = 0), Ll = t, xa = e, $t = a, vs = u, bs = n, pm = l, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Zp($u, function() {
        return Cm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, t.subtreeFlags & 13878 || l) {
        l = Y.T, Y.T = null, n = P.p, P.p = 2, i = F, F |= 4;
        try {
          jp(e, t, a);
        } finally {
          F = i, P.p = n, Y.T = l;
        }
      }
      Ee = 1, zm(), Am(), Rm();
    }
  }
  function zm() {
    if (Ee === 1) {
      Ee = 0;
      var e = xa, t = Ll, a = (t.flags & 13878) !== 0;
      if (t.subtreeFlags & 13878 || a) {
        a = Y.T, Y.T = null;
        var l = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          sm(t, e);
          var u = Ts, i = Qd(e.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Xd(c.ownerDocument.documentElement, c)) {
            if (s !== null && Ps(c)) {
              var o = s.start, m = s.end;
              if (m === void 0 && (m = o), "selectionStart" in c) c.selectionStart = o, c.selectionEnd = Math.min(m, c.value.length);
              else {
                var r = c.ownerDocument || document, d = r && r.defaultView || window;
                if (d.getSelection) {
                  var y = d.getSelection(), T = c.textContent.length, M = Math.min(s.start, T), R = s.end === void 0 ? M : Math.min(s.end, T);
                  !y.extend && M > R && (i = R, R = M, M = i);
                  var f = Mo(c, M), h = Mo(c, R);
                  if (f && h && (y.rangeCount !== 1 || y.anchorNode !== f.node || y.anchorOffset !== f.offset || y.focusNode !== h.node || y.focusOffset !== h.offset)) {
                    var p = r.createRange();
                    p.setStart(f.node, f.offset), y.removeAllRanges(), M > R ? (y.addRange(p), y.extend(h.node, h.offset)) : (p.setEnd(h.node, h.offset), y.addRange(p));
                  }
                }
              }
            }
            for (r = [], y = c; y = y.parentNode; ) y.nodeType === 1 && r.push({
              element: y,
              left: y.scrollLeft,
              top: y.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < r.length; c++) {
              var E = r[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          bi = !!_s, Ts = _s = null;
        } finally {
          F = n, P.p = l, Y.T = a;
        }
      }
      e.current = t, Ee = 2;
    }
  }
  function Am() {
    if (Ee === 2) {
      Ee = 0;
      var e = xa, t = Ll, a = (t.flags & 8772) !== 0;
      if (t.subtreeFlags & 8772 || a) {
        a = Y.T, Y.T = null;
        var l = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          lm(e, t.alternate, t);
        } finally {
          F = n, P.p = l, Y.T = a;
        }
      }
      Ee = 3;
    }
  }
  function Rm() {
    if (Ee === 4 || Ee === 3) {
      Ee = 0, fy();
      var e = xa, t = Ll, a = $t, l = pm;
      t.subtreeFlags & 10256 || t.flags & 10256 ? Ee = 5 : (Ee = 0, Ll = xa = null, Mm(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Sa = null), Zs(a), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
        at.onCommitFiberRoot(kn, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        t = Y.T, n = P.p, P.p = 2, Y.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < l.length; i++) {
            var c = l[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          Y.T = t, P.p = n;
        }
      }
      $t & 3 && Yi(), jt(e), n = e.pendingLanes, a & 261930 && n & 42 ? e === Ss ? Mn++ : (Mn = 0, Ss = e) : Mn = 0, eu(0);
    }
  }
  function Mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fn(t)));
  }
  function Yi() {
    return zm(), Am(), Rm(), Cm();
  }
  function Cm() {
    if (Ee !== 5) return false;
    var e = xa, t = vs;
    vs = 0;
    var a = Zs($t), l = Y.T, n = P.p;
    try {
      P.p = 32 > a ? 32 : a, Y.T = null, a = bs, bs = null;
      var u = xa, i = $t;
      if (Ee = 0, Ll = xa = null, $t = 0, F & 6) throw Error(N(331));
      var c = F;
      if (F |= 4, hm(u.current), om(u, u.current, i, a), F = c, eu(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
        at.onPostCommitFiberRoot(kn, u);
      } catch {
      }
      return true;
    } finally {
      P.p = n, Y.T = l, Mm(e, t);
    }
  }
  function sf(e, t, a) {
    t = mt(a, t), t = hs(e.stateNode, t, 2), e = ba(e, t, 2), e !== null && (Jn(e, 2), jt(e));
  }
  function te(e, t, a) {
    if (e.tag === 3) sf(e, e, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        sf(t, e, a);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Sa === null || !Sa.has(l))) {
          e = mt(a, e), a = Vh(2), l = ba(t, a, 2), l !== null && (Zh(a, l, t, e), Jn(l, 2), jt(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function _c(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Bp();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (Ar = true, n.add(a), e = Xp.bind(null, e, t, a), t.then(e, e));
  }
  function Xp(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ne === e && ($ & a) === a && (me === 4 || me === 3 && ($ & 62914560) === $ && 300 > tt() - Bi ? !(F & 2) && Yl(e, 0) : Rr |= a, ql === $ && (ql = 0)), jt(e);
  }
  function Nm(e, t) {
    t === 0 && (t = xd()), e = Pa(e, t), e !== null && (Jn(e, t), jt(e));
  }
  function Qp(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Nm(e, a);
  }
  function Vp(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(N(314));
    }
    l !== null && l.delete(t), Nm(e, a);
  }
  function Zp(e, t) {
    return Qs(e, t);
  }
  var di = null, fl = null, xs = false, hi = false, Tc = false, ya = 0;
  function jt(e) {
    e !== fl && e.next === null && (fl === null ? di = fl = e : fl = fl.next = e), hi = true, xs || (xs = true, Kp());
  }
  function eu(e, t) {
    if (!Tc && hi) {
      Tc = true;
      do
        for (var a = false, l = di; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - lt(42 | e) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = true, rf(l, u));
          } else u = $, u = Ai(l, l === ne ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), !(u & 3) || Kn(l, u) || (a = true, rf(l, u));
          l = l.next;
        }
      while (a);
      Tc = false;
    }
  }
  function kp() {
    wm();
  }
  function wm() {
    hi = xs = false;
    var e = 0;
    ya !== 0 && lg() && (e = ya);
    for (var t = tt(), a = null, l = di; l !== null; ) {
      var n = l.next, u = Om(l, t);
      u === 0 ? (l.next = null, a === null ? di = n : a.next = n, n === null && (fl = a)) : (a = l, (e !== 0 || u & 3) && (hi = true)), l = n;
    }
    Ee !== 0 && Ee !== 5 || eu(e), ya !== 0 && (ya = 0);
  }
  function Om(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - lt(u), c = 1 << i, s = n[i];
      s === -1 ? (!(c & a) || c & l) && (n[i] = by(c, t)) : s <= t && (e.expiredLanes |= c), u &= ~c;
    }
    if (t = ne, a = $, a = Ai(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (ee === 2 || ee === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Pi(l), e.callbackNode = null, e.callbackPriority = 0;
    if (!(a & 3) || Kn(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Pi(l), Zs(a)) {
        case 2:
        case 8:
          a = bd;
          break;
        case 32:
          a = $u;
          break;
        case 268435456:
          a = Sd;
          break;
        default:
          a = $u;
      }
      return l = Dm.bind(null, e), a = Qs(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Pi(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Dm(e, t) {
    if (Ee !== 0 && Ee !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Yi() && e.callbackNode !== a) return null;
    var l = $;
    return l = Ai(e, e === ne ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (vm(e, l, t), Om(e, tt()), e.callbackNode != null && e.callbackNode === a ? Dm.bind(null, e) : null);
  }
  function rf(e, t) {
    if (Yi()) return null;
    vm(e, t, true);
  }
  function Kp() {
    ug(function() {
      F & 6 ? Qs(vd, kp) : wm();
    });
  }
  function Cr() {
    if (ya === 0) {
      var e = Ul;
      e === 0 && (e = du, du <<= 1, !(du & 261888) && (du = 256)), ya = e;
    }
    return ya;
  }
  function of(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Cu("" + e);
  }
  function ff(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Jp(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = of((n[Ke] || null).action), i = l.submitter;
      i && (t = (t = i[Ke] || null) ? of(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new Ri("action", "action", null, l, n);
      e.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ya !== 0) {
                  var s = i ? ff(n, i) : new FormData(n);
                  fs(a, {
                    pending: true,
                    data: s,
                    method: n.method,
                    action: u
                  }, null, s);
                }
              } else typeof u == "function" && (c.preventDefault(), s = i ? ff(n, i) : new FormData(n), fs(a, {
                pending: true,
                data: s,
                method: n.method,
                action: u
              }, u, s));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var zc = 0; zc < Ic.length; zc++) {
    var Ac = Ic[zc], $p = Ac.toLowerCase(), Wp = Ac[0].toUpperCase() + Ac.slice(1);
    Tt($p, "on" + Wp);
  }
  Tt(Zd, "onAnimationEnd");
  Tt(kd, "onAnimationIteration");
  Tt(Kd, "onAnimationStart");
  Tt("dblclick", "onDoubleClick");
  Tt("focusin", "onFocus");
  Tt("focusout", "onBlur");
  Tt(dp, "onTransitionRun");
  Tt(hp, "onTransitionStart");
  Tt(mp, "onTransitionCancel");
  Tt(Jd, "onTransitionEnd");
  Dl("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Dl("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Dl("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Dl("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  $a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  $a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  $a("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  $a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  $a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  $a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));
  function jm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t) for (var i = l.length - 1; 0 <= i; i--) {
          var c = l[i], s = c.instance, o = c.currentTarget;
          if (c = c.listener, s !== u && n.isPropagationStopped()) break e;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (m) {
            Fu(m);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < l.length; i++) {
          if (c = l[i], s = c.instance, o = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break e;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (m) {
            Fu(m);
          }
          n.currentTarget = null, u = s;
        }
      }
    }
  }
  function K(e, t) {
    var a = t[Zc];
    a === void 0 && (a = t[Zc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Um(t, e, 2, false), a.add(l));
  }
  function Rc(e, t, a) {
    var l = 0;
    t && (l |= 4), Um(a, e, l, t);
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Nr(e) {
    if (!e[Eu]) {
      e[Eu] = true, Ad.forEach(function(a) {
        a !== "selectionchange" && (Fp.has(a) || Rc(a, false, e), Rc(a, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Eu] || (t[Eu] = true, Rc("selectionchange", false, t));
    }
  }
  function Um(e, t, a, l) {
    switch (Jm(t)) {
      case 2:
        var n = zg;
        break;
      case 8:
        n = Ag;
        break;
      default:
        n = jr;
    }
    a = n.bind(null, t, a, e), n = void 0, !Wc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: true,
      passive: n
    }) : e.addEventListener(t, a, true) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, false);
  }
  function Mc(e, t, a, l, n) {
    var u = l;
    if (!(t & 1) && !(t & 2) && l !== null) e: for (; ; ) {
      if (l === null) return;
      var i = l.tag;
      if (i === 3 || i === 4) {
        var c = l.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4) for (i = l.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = ml(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            l = u = i;
            continue e;
          }
          c = c.parentNode;
        }
      }
      l = l.return;
    }
    jd(function() {
      var o = u, m = Js(a), r = [];
      e: {
        var d = $d.get(e);
        if (d !== void 0) {
          var y = Ri, T = e;
          switch (e) {
            case "keypress":
              if (wu(a) === 0) break e;
            case "keydown":
            case "keyup":
              y = Vy;
              break;
            case "focusin":
              T = "focus", y = lc;
              break;
            case "focusout":
              T = "blur", y = lc;
              break;
            case "beforeblur":
            case "afterblur":
              y = lc;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Oy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Ky;
              break;
            case Zd:
            case kd:
            case Kd:
              y = Uy;
              break;
            case Jd:
              y = $y;
              break;
            case "scroll":
            case "scrollend":
              y = Ny;
              break;
            case "wheel":
              y = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = By;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = So;
              break;
            case "toggle":
            case "beforetoggle":
              y = Iy;
          }
          var M = (t & 4) !== 0, R = !M && (e === "scroll" || e === "scrollend"), f = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var h = o, p; h !== null; ) {
            var E = h;
            if (p = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || p === null || f === null || (E = wn(h, f), E != null && M.push(Yn(h, E, p))), R) break;
            h = h.return;
          }
          0 < M.length && (d = new y(d, T, null, a, m), r.push({
            event: d,
            listeners: M
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && a !== $c && (T = a.relatedTarget || a.fromElement) && (ml(T) || T[Vl])) break e;
          if ((y || d) && (d = m.window === m ? m : (d = m.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (T = a.relatedTarget || a.toElement, y = o, T = T ? ml(T) : null, T !== null && (R = Zn(T), M = T.tag, T !== R || M !== 5 && M !== 27 && M !== 6) && (T = null)) : (y = null, T = o), y !== T)) {
            if (M = vo, E = "onMouseLeave", f = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (M = So, E = "onPointerLeave", f = "onPointerEnter", h = "pointer"), R = y == null ? d : hn(y), p = T == null ? d : hn(T), d = new M(E, h + "leave", y, a, m), d.target = R, d.relatedTarget = p, E = null, ml(m) === o && (M = new M(f, h + "enter", T, a, m), M.target = p, M.relatedTarget = R, E = M), R = E, y && T) t: {
              for (M = Pp, f = y, h = T, p = 0, E = f; E; E = M(E)) p++;
              E = 0;
              for (var D = h; D; D = M(D)) E++;
              for (; 0 < p - E; ) f = M(f), p--;
              for (; 0 < E - p; ) h = M(h), E--;
              for (; p--; ) {
                if (f === h || h !== null && f === h.alternate) {
                  M = f;
                  break t;
                }
                f = M(f), h = M(h);
              }
              M = null;
            }
            else M = null;
            y !== null && df(r, d, y, M, false), T !== null && R !== null && df(r, R, T, M, true);
          }
        }
        e: {
          if (d = o ? hn(o) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file") var x = To;
          else if (_o(d)) if (Yd) x = rp;
          else {
            x = cp;
            var _ = ip;
          }
          else y = d.nodeName, !y || y.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? o && Ks(o.elementType) && (x = To) : x = sp;
          if (x && (x = x(e, o))) {
            Ld(r, x, a, m);
            break e;
          }
          _ && _(e, d, o), e === "focusout" && o && d.type === "number" && o.memoizedProps.value != null && Jc(d, "number", d.value);
        }
        switch (_ = o ? hn(o) : window, e) {
          case "focusin":
            (_o(_) || _.contentEditable === "true") && (gl = _, Fc = o, bn = null);
            break;
          case "focusout":
            bn = Fc = gl = null;
            break;
          case "mousedown":
            Pc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pc = false, Co(r, a, m);
            break;
          case "selectionchange":
            if (fp) break;
          case "keydown":
          case "keyup":
            Co(r, a, m);
        }
        var C;
        if (Fs) e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
        else pl ? Bd(e, a) && (A = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (A = "onCompositionStart");
        A && (Hd && a.locale !== "ko" && (pl || A !== "onCompositionStart" ? A === "onCompositionEnd" && pl && (C = Ud()) : (da = m, $s = "value" in da ? da.value : da.textContent, pl = true)), _ = mi(o, A), 0 < _.length && (A = new bo(A, e, null, a, m), r.push({
          event: A,
          listeners: _
        }), C ? A.data = C : (C = qd(a), C !== null && (A.data = C)))), (C = tp ? ap(e, a) : lp(e, a)) && (A = mi(o, "onBeforeInput"), 0 < A.length && (_ = new bo("onBeforeInput", "beforeinput", null, a, m), r.push({
          event: _,
          listeners: A
        }), _.data = C)), Jp(r, e, o, a, m);
      }
      jm(r, t);
    });
  }
  function Yn(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function mi(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = wn(e, a), n != null && l.unshift(Yn(e, n, u)), n = wn(e, t), n != null && l.push(Yn(e, n, u))), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Pp(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function df(e, t, a, l, n) {
    for (var u = t._reactName, i = []; a !== null && a !== l; ) {
      var c = a, s = c.alternate, o = c.stateNode;
      if (c = c.tag, s !== null && s === l) break;
      c !== 5 && c !== 26 && c !== 27 || o === null || (s = o, n ? (o = wn(a, u), o != null && i.unshift(Yn(a, o, s))) : n || (o = wn(a, u), o != null && i.push(Yn(a, o, s)))), a = a.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var Ip = /\r\n?/g, eg = /\u0000|\uFFFD/g;
  function hf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(eg, "");
  }
  function Hm(e, t) {
    return t = hf(t), hf(e) === t;
  }
  function ae(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || jl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && jl(e, "" + l);
        break;
      case "className":
        yu(e, "class", l);
        break;
      case "tabIndex":
        yu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        yu(e, a, l);
        break;
      case "style":
        Dd(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          yu(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Cu("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (a === "formAction" ? (t !== "input" && ae(e, t, "name", n.name, n, null), ae(e, t, "formEncType", n.formEncType, n, null), ae(e, t, "formMethod", n.formMethod, n, null), ae(e, t, "formTarget", n.formTarget, n, null)) : (ae(e, t, "encType", n.encType, n, null), ae(e, t, "method", n.method, n, null), ae(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Cu("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = Zt);
        break;
      case "onScroll":
        l != null && K("scroll", e);
        break;
      case "onScrollEnd":
        l != null && K("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(N(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(N(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Cu("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === true ? e.setAttribute(a, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        K("beforetoggle", e), K("toggle", e), Mu(e, "popover", l);
        break;
      case "xlinkActuate":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Mu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = My.get(a) || a, Mu(e, a, l));
    }
  }
  function Es(e, t, a, l, n, u) {
    switch (a) {
      case "style":
        Dd(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(N(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(N(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? jl(e, l) : (typeof l == "number" || typeof l == "bigint") && jl(e, "" + l);
        break;
      case "onScroll":
        l != null && K("scroll", e);
        break;
      case "onScrollEnd":
        l != null && K("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Zt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Rd.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[Ke] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
            typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
            break e;
          }
          a in e ? e[a] = l : l === true ? e.setAttribute(a, "") : Mu(e, a, l);
        }
    }
  }
  function je(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        K("error", e), K("load", e);
        var l = false, n = false, u;
        for (u in a) if (a.hasOwnProperty(u)) {
          var i = a[u];
          if (i != null) switch (u) {
            case "src":
              l = true;
              break;
            case "srcSet":
              n = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(N(137, t));
            default:
              ae(e, t, u, i, a, null);
          }
        }
        n && ae(e, t, "srcSet", a.srcSet, a, null), l && ae(e, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", e);
        var c = u = i = n = null, s = null, o = null;
        for (l in a) if (a.hasOwnProperty(l)) {
          var m = a[l];
          if (m != null) switch (l) {
            case "name":
              n = m;
              break;
            case "type":
              i = m;
              break;
            case "checked":
              s = m;
              break;
            case "defaultChecked":
              o = m;
              break;
            case "value":
              u = m;
              break;
            case "defaultValue":
              c = m;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m != null) throw Error(N(137, t));
              break;
            default:
              ae(e, t, l, m, a, null);
          }
        }
        Nd(e, u, c, s, o, i, n, false);
        return;
      case "select":
        K("invalid", e), l = i = u = null;
        for (n in a) if (a.hasOwnProperty(n) && (c = a[n], c != null)) switch (n) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            l = c;
          default:
            ae(e, t, n, c, a, null);
        }
        t = u, a = i, e.multiple = !!l, t != null ? zl(e, !!l, t, false) : a != null && zl(e, !!l, a, true);
        return;
      case "textarea":
        K("invalid", e), u = n = l = null;
        for (i in a) if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
          case "value":
            l = c;
            break;
          case "defaultValue":
            n = c;
            break;
          case "children":
            u = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(N(91));
            break;
          default:
            ae(e, t, i, c, a, null);
        }
        Od(e, l, n, u);
        return;
      case "option":
        for (s in a) if (a.hasOwnProperty(s) && (l = a[s], l != null)) switch (s) {
          case "selected":
            e.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            ae(e, t, s, l, a, null);
        }
        return;
      case "dialog":
        K("beforetoggle", e), K("toggle", e), K("cancel", e), K("close", e);
        break;
      case "iframe":
      case "object":
        K("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ln.length; l++) K(Ln[l], e);
        break;
      case "image":
        K("error", e), K("load", e);
        break;
      case "details":
        K("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", e), K("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (o in a) if (a.hasOwnProperty(o) && (l = a[o], l != null)) switch (o) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(N(137, t));
          default:
            ae(e, t, o, l, a, null);
        }
        return;
      default:
        if (Ks(t)) {
          for (m in a) a.hasOwnProperty(m) && (l = a[m], l !== void 0 && Es(e, t, m, l, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (l = a[c], l != null && ae(e, t, c, l, a, null));
  }
  function tg(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, s = null, o = null, m = null;
        for (y in a) {
          var r = a[y];
          if (a.hasOwnProperty(y) && r != null) switch (y) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = r;
            default:
              l.hasOwnProperty(y) || ae(e, t, y, null, l, r);
          }
        }
        for (var d in l) {
          var y = l[d];
          if (r = a[d], l.hasOwnProperty(d) && (y != null || r != null)) switch (d) {
            case "type":
              u = y;
              break;
            case "name":
              n = y;
              break;
            case "checked":
              o = y;
              break;
            case "defaultChecked":
              m = y;
              break;
            case "value":
              i = y;
              break;
            case "defaultValue":
              c = y;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (y != null) throw Error(N(137, t));
              break;
            default:
              y !== r && ae(e, t, d, y, l, r);
          }
        }
        Kc(e, i, c, s, o, m, u, n);
        return;
      case "select":
        y = i = c = d = null;
        for (u in a) if (s = a[u], a.hasOwnProperty(u) && s != null) switch (u) {
          case "value":
            break;
          case "multiple":
            y = s;
          default:
            l.hasOwnProperty(u) || ae(e, t, u, null, l, s);
        }
        for (n in l) if (u = l[n], s = a[n], l.hasOwnProperty(n) && (u != null || s != null)) switch (n) {
          case "value":
            d = u;
            break;
          case "defaultValue":
            c = u;
            break;
          case "multiple":
            i = u;
          default:
            u !== s && ae(e, t, n, u, l, s);
        }
        t = c, a = i, l = y, d != null ? zl(e, !!a, d, false) : !!l != !!a && (t != null ? zl(e, !!a, t, true) : zl(e, !!a, a ? [] : "", false));
        return;
      case "textarea":
        y = d = null;
        for (c in a) if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            ae(e, t, c, null, l, n);
        }
        for (i in l) if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            d = n;
            break;
          case "defaultValue":
            y = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(N(91));
            break;
          default:
            n !== u && ae(e, t, i, n, l, u);
        }
        wd(e, d, y);
        return;
      case "option":
        for (var T in a) if (d = a[T], a.hasOwnProperty(T) && d != null && !l.hasOwnProperty(T)) switch (T) {
          case "selected":
            e.selected = false;
            break;
          default:
            ae(e, t, T, null, l, d);
        }
        for (s in l) if (d = l[s], y = a[s], l.hasOwnProperty(s) && d !== y && (d != null || y != null)) switch (s) {
          case "selected":
            e.selected = d && typeof d != "function" && typeof d != "symbol";
            break;
          default:
            ae(e, t, s, d, l, y);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var M in a) d = a[M], a.hasOwnProperty(M) && d != null && !l.hasOwnProperty(M) && ae(e, t, M, null, l, d);
        for (o in l) if (d = l[o], y = a[o], l.hasOwnProperty(o) && d !== y && (d != null || y != null)) switch (o) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(N(137, t));
            break;
          default:
            ae(e, t, o, d, l, y);
        }
        return;
      default:
        if (Ks(t)) {
          for (var R in a) d = a[R], a.hasOwnProperty(R) && d !== void 0 && !l.hasOwnProperty(R) && Es(e, t, R, void 0, l, d);
          for (m in l) d = l[m], y = a[m], !l.hasOwnProperty(m) || d === y || d === void 0 && y === void 0 || Es(e, t, m, d, l, y);
          return;
        }
    }
    for (var f in a) d = a[f], a.hasOwnProperty(f) && d != null && !l.hasOwnProperty(f) && ae(e, t, f, null, l, d);
    for (r in l) d = l[r], y = a[r], !l.hasOwnProperty(r) || d === y || d == null && y == null || ae(e, t, r, d, l, y);
  }
  function mf(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function ag() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && mf(i)) {
          for (i = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var s = a[l], o = s.startTime;
            if (o > c) break;
            var m = s.transferSize, r = s.initiatorType;
            m && mf(r) && (s = s.responseEnd, i += m * (s < c ? 1 : (c - o) / (s - o)));
          }
          if (--l, t += 8 * (u + i) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var _s = null, Ts = null;
  function yi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function yf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bm(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function zs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = null;
  function lg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Cc ? false : (Cc = e, true) : (Cc = null, false);
  }
  var qm = typeof setTimeout == "function" ? setTimeout : void 0, ng = typeof clearTimeout == "function" ? clearTimeout : void 0, pf = typeof Promise == "function" ? Promise : void 0, ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof pf < "u" ? function(e) {
    return pf.resolve(null).then(e).catch(ig);
  } : qm;
  function ig(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Na(e) {
    return e === "head";
  }
  function gf(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (l === 0) {
          e.removeChild(n), Xl(t);
          return;
        }
        l--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") Cn(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, Cn(a);
        for (var u = a.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[$n] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = i;
        }
      } else a === "body" && Cn(e.ownerDocument.body);
      a = n;
    } while (a);
    Xl(t);
  }
  function vf(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") {
        if (e === 0) break;
        e--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function As(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          As(a), ks(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function cg(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[$n]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (e = gt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function sg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lm(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = gt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Rs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ms(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function rg(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Cs = null;
  function bf(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return gt(e.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Sf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ym(e, t, a) {
    switch (t = yi(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(N(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(N(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(N(454));
        return e;
      default:
        throw Error(N(451));
    }
  }
  function Cn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ks(e);
  }
  var vt = /* @__PURE__ */ new Map(), xf = /* @__PURE__ */ new Set();
  function pi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var aa = P.d;
  P.d = {
    f: og,
    r: fg,
    D: dg,
    C: hg,
    L: mg,
    m: yg,
    X: gg,
    S: pg,
    M: vg
  };
  function og() {
    var e = aa.f(), t = qi();
    return e || t;
  }
  function fg(e) {
    var t = Zl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Dh(t) : aa.r(e);
  }
  var $l = typeof document > "u" ? null : document;
  function Gm(e, t, a) {
    var l = $l;
    if (l && typeof t == "string" && t) {
      var n = ht(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), xf.has(n) || (xf.add(n), e = {
        rel: e,
        crossOrigin: a,
        href: t
      }, l.querySelector(n) === null && (t = l.createElement("link"), je(t, "link", e), Ae(t), l.head.appendChild(t)));
    }
  }
  function dg(e) {
    aa.D(e), Gm("dns-prefetch", e, null);
  }
  function hg(e, t) {
    aa.C(e, t), Gm("preconnect", e, t);
  }
  function mg(e, t, a) {
    aa.L(e, t, a);
    var l = $l;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ht(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ht(a.imageSizes) + '"]')) : n += '[href="' + ht(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Gl(e);
          break;
        case "script":
          u = Wl(e);
      }
      vt.has(u) || (e = re({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : e,
        as: t
      }, a), vt.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(tu(u)) || t === "script" && l.querySelector(au(u)) || (t = l.createElement("link"), je(t, "link", e), Ae(t), l.head.appendChild(t)));
    }
  }
  function yg(e, t) {
    aa.m(e, t);
    var a = $l;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + ht(l) + '"][href="' + ht(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wl(e);
      }
      if (!vt.has(u) && (e = re({
        rel: "modulepreload",
        href: e
      }, t), vt.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(au(u))) return;
        }
        l = a.createElement("link"), je(l, "link", e), Ae(l), a.head.appendChild(l);
      }
    }
  }
  function pg(e, t, a) {
    aa.S(e, t, a);
    var l = $l;
    if (l && e) {
      var n = Tl(l).hoistableStyles, u = Gl(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = l.querySelector(tu(u))) c.loading = 5;
        else {
          e = re({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, a), (a = vt.get(u)) && wr(e, a);
          var s = i = l.createElement("link");
          Ae(s), je(s, "link", e), s._p = new Promise(function(o, m) {
            s.onload = o, s.onerror = m;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Lu(i, t, l);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function gg(e, t) {
    aa.X(e, t);
    var a = $l;
    if (a && e) {
      var l = Tl(a).hoistableScripts, n = Wl(e), u = l.get(n);
      u || (u = a.querySelector(au(n)), u || (e = re({
        src: e,
        async: true
      }, t), (t = vt.get(n)) && Or(e, t), u = a.createElement("script"), Ae(u), je(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function vg(e, t) {
    aa.M(e, t);
    var a = $l;
    if (a && e) {
      var l = Tl(a).hoistableScripts, n = Wl(e), u = l.get(n);
      u || (u = a.querySelector(au(n)), u || (e = re({
        src: e,
        async: true,
        type: "module"
      }, t), (t = vt.get(n)) && Or(e, t), u = a.createElement("script"), Ae(u), je(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Ef(e, t, a, l) {
    var n = (n = pa.current) ? pi(n) : null;
    if (!n) throw Error(N(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Gl(a.href), a = Tl(n).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Gl(a.href);
          var u = Tl(n).hoistableStyles, i = u.get(e);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(e, i), (u = n.querySelector(tu(e))) && !u._p && (i.instance = u, i.state.loading = 5), vt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vt.set(e, a), u || bg(n, e, a, i.state))), t && l === null) throw Error(N(528, ""));
          return i;
        }
        if (t && l !== null) throw Error(N(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Wl(a), a = Tl(n).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(N(444, e));
    }
  }
  function Gl(e) {
    return 'href="' + ht(e) + '"';
  }
  function tu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xm(e) {
    return re({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function bg(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), je(t, "link", a), Ae(t), e.head.appendChild(t));
  }
  function Wl(e) {
    return '[src="' + ht(e) + '"]';
  }
  function au(e) {
    return "script[async]" + e;
  }
  function _f(e, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + ht(a.href) + '"]');
        if (l) return t.instance = l, Ae(l), l;
        var n = re({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return l = (e.ownerDocument || e).createElement("style"), Ae(l), je(l, "style", n), Lu(l, a.precedence, e), t.instance = l;
      case "stylesheet":
        n = Gl(a.href);
        var u = e.querySelector(tu(n));
        if (u) return t.state.loading |= 4, t.instance = u, Ae(u), u;
        l = Xm(a), (n = vt.get(n)) && wr(l, n), u = (e.ownerDocument || e).createElement("link"), Ae(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), je(u, "link", l), t.state.loading |= 4, Lu(u, a.precedence, e), t.instance = u;
      case "script":
        return u = Wl(a.src), (n = e.querySelector(au(u))) ? (t.instance = n, Ae(n), n) : (l = a, (n = vt.get(u)) && (l = re({}, a), Or(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ae(n), je(n, "link", l), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(N(443, t.type));
    }
    else t.type === "stylesheet" && !(t.state.loading & 4) && (l = t.instance, t.state.loading |= 4, Lu(l, a.precedence, e));
    return t.instance;
  }
  function Lu(e, t, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function wr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Or(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Yu = null;
  function Tf(e, t, a) {
    if (Yu === null) {
      var l = /* @__PURE__ */ new Map(), n = Yu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else n = Yu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[$n] || u[we] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var c = l.get(i);
        c ? c.push(u) : l.set(i, [
          u
        ]);
      }
    }
    return l;
  }
  function zf(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
  }
  function Sg(e, t, a) {
    if (a === 1 || t.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function Qm(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  function xg(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && !(a.state.loading & 4)) {
      if (a.instance === null) {
        var n = Gl(l.href), u = t.querySelector(tu(n));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gi.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, Ae(u);
          return;
        }
        u = t.ownerDocument || t, l = Xm(l), (n = vt.get(n)) && wr(l, n), u = u.createElement("link"), Ae(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), je(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && !(a.state.loading & 3) && (e.count++, a = gi.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Nc = 0;
  function Eg(e, t) {
    return e.stylesheets && e.count === 0 && Gu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Nc === 0 && (Nc = 62500 * ag());
      var n = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > Nc ? 50 : 800) + t);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function gi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Gu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vi = null;
  function Gu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vi = /* @__PURE__ */ new Map(), t.forEach(_g, e), vi = null, gi.call(e));
  }
  function _g(e, t) {
    if (!(t.state.loading & 4)) {
      var a = vi.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vi.set(e, a);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = gi.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Gn = {
    $$typeof: Vt,
    Provider: null,
    Consumer: null,
    _currentValue: La,
    _currentValue2: La,
    _threadCount: 0
  };
  function Tg(e, t, a, l, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ii(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ii(0), this.hiddenUpdates = Ii(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Vm(e, t, a, l, n, u, i, c, s, o, m, r) {
    return e = new Tg(e, t, a, i, s, o, m, r, c), t = 1, u === true && (t |= 24), u = Ie(3, null, null, t), e.current = u, u.stateNode = e, t = nr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, cr(u), e;
  }
  function Zm(e) {
    return e ? (e = Sl, e) : Sl;
  }
  function km(e, t, a, l, n, u) {
    n = Zm(n), l.context === null ? l.context = n : l.pendingContext = n, l = va(t), l.payload = {
      element: a
    }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = ba(e, l, t), a !== null && (ke(a, e, t), xn(a, e, t));
  }
  function Af(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Dr(e, t) {
    Af(e, t), (e = e.alternate) && Af(e, t);
  }
  function Km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pa(e, 67108864);
      t !== null && ke(t, e, 67108864), Dr(e, 67108864);
    }
  }
  function Rf(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = nt();
      t = Vs(t);
      var a = Pa(e, t);
      a !== null && ke(a, e, t), Dr(e, t);
    }
  }
  var bi = true;
  function zg(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 2, jr(e, t, a, l);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function Ag(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 8, jr(e, t, a, l);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function jr(e, t, a, l) {
    if (bi) {
      var n = Ns(l);
      if (n === null) Mc(e, t, l, Si, a), Mf(e, l);
      else if (Mg(n, e, t, a, l)) l.stopPropagation();
      else if (Mf(e, l), t & 4 && -1 < Rg.indexOf(e)) {
        for (; n !== null; ) {
          var u = Zl(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = Ha(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - lt(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  jt(u), !(F & 6) && (ri = tt() + 500, eu(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Pa(u, 2), c !== null && ke(c, u, 2), qi(), Dr(u, 2);
          }
          if (u = Ns(l), u === null && Mc(e, t, l, Si, a), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else Mc(e, t, l, null, a);
    }
  }
  function Ns(e) {
    return e = Js(e), Ur(e);
  }
  var Si = null;
  function Ur(e) {
    if (Si = null, e = ml(e), e !== null) {
      var t = Zn(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = hd(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = md(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Si = e, null;
  }
  function Jm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dy()) {
          case vd:
            return 2;
          case bd:
            return 8;
          case $u:
          case hy:
            return 32;
          case Sd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ws = false, Ea = null, _a = null, Ta = null, Xn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), oa = [], Rg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Mf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ea = null;
        break;
      case "dragenter":
      case "dragleave":
        _a = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
        break;
      case "pointerover":
      case "pointerout":
        Xn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function sn(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [
        n
      ]
    }, t !== null && (t = Zl(t), t !== null && Km(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Mg(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return Ea = sn(Ea, e, t, a, l, n), true;
      case "dragenter":
        return _a = sn(_a, e, t, a, l, n), true;
      case "mouseover":
        return Ta = sn(Ta, e, t, a, l, n), true;
      case "pointerover":
        var u = n.pointerId;
        return Xn.set(u, sn(Xn.get(u) || null, e, t, a, l, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, Qn.set(u, sn(Qn.get(u) || null, e, t, a, l, n)), true;
    }
    return false;
  }
  function $m(e) {
    var t = ml(e.target);
    if (t !== null) {
      var a = Zn(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = hd(a), t !== null) {
            e.blockedOn = t, oo(e.priority, function() {
              Rf(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = md(a), t !== null) {
            e.blockedOn = t, oo(e.priority, function() {
              Rf(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xu(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ns(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        $c = l, a.target.dispatchEvent(l), $c = null;
      } else return t = Zl(a), t !== null && Km(t), e.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function Cf(e, t, a) {
    Xu(e) && a.delete(t);
  }
  function Cg() {
    ws = false, Ea !== null && Xu(Ea) && (Ea = null), _a !== null && Xu(_a) && (_a = null), Ta !== null && Xu(Ta) && (Ta = null), Xn.forEach(Cf), Qn.forEach(Cf);
  }
  function _u(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ws || (ws = true, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Cg)));
  }
  var Tu = null;
  function Nf(e) {
    Tu !== e && (Tu = e, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, function() {
      Tu === e && (Tu = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t], l = e[t + 1], n = e[t + 2];
        if (typeof l != "function") {
          if (Ur(l || a) === null) continue;
          break;
        }
        var u = Zl(a);
        u !== null && (e.splice(t, 3), t -= 3, fs(u, {
          pending: true,
          data: n,
          method: a.method,
          action: l
        }, l, n));
      }
    }));
  }
  function Xl(e) {
    function t(s) {
      return _u(s, e);
    }
    Ea !== null && _u(Ea, e), _a !== null && _u(_a, e), Ta !== null && _u(Ta, e), Xn.forEach(t), Qn.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var l = oa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < oa.length && (a = oa[0], a.blockedOn === null); ) $m(a), a.blockedOn === null && oa.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
      var n = a[l], u = a[l + 1], i = n[Ke] || null;
      if (typeof u == "function") i || Nf(a);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[Ke] || null) c = i.formAction;
          else if (Ur(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), Nf(a);
      }
    }
  }
  function Wm() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = false, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Hr(e) {
    this._internalRoot = e;
  }
  Gi.prototype.render = Hr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    var a = t.current, l = nt();
    km(a, l, e, t, null, null);
  };
  Gi.prototype.unmount = Hr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      km(e.current, 2, null, e, null, null), qi(), t[Vl] = null;
    }
  };
  function Gi(e) {
    this._internalRoot = e;
  }
  Gi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = zd();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++) ;
      oa.splice(a, 0, e), a === 0 && $m(e);
    }
  };
  var wf = fd.version;
  if (wf !== "19.2.5") throw Error(N(527, wf, "19.2.5"));
  P.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = uy(t), e = e !== null ? yd(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Ng = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zu.isDisabled && zu.supportsFiber) try {
      kn = zu.inject(Ng), at = zu;
    } catch {
    }
  }
  Ti.createRoot = function(e, t) {
    if (!dd(e)) throw Error(N(299));
    var a = false, l = "", n = Gh, u = Xh, i = Qh;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Vm(e, 1, false, null, null, a, l, null, n, u, i, Wm), e[Vl] = t.current, Nr(e), new Hr(t);
  };
  Ti.hydrateRoot = function(e, t, a) {
    if (!dd(e)) throw Error(N(299));
    var l = false, n = "", u = Gh, i = Xh, c = Qh, s = null;
    return a != null && (a.unstable_strictMode === true && (l = true), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (s = a.formState)), t = Vm(e, 1, true, t, a ?? null, l, n, s, u, i, c, Wm), t.context = Zm(null), a = t.current, l = nt(), l = Vs(l), n = va(l), n.callback = null, ba(a, n, l), a = l, t.current.lanes = a, Jn(t, a), jt(t), e[Vl] = t.current, Nr(e), new Gi(t);
  };
  Ti.version = "19.2.5";
  function Fm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm);
    } catch (e) {
      console.error(e);
    }
  }
  Fm(), nd.exports = Ti;
  var wg = nd.exports;
  let Og, Dg, Of;
  Og = "modulepreload";
  Dg = function(e) {
    return "/" + e;
  };
  Of = {};
  wa = function(t, a, l) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(a.map((s) => {
        if (s = Dg(s), s in Of) return;
        Of[s] = true;
        const o = s.endsWith(".css"), m = o ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${m}`)) return;
        const r = document.createElement("link");
        if (r.rel = o ? "stylesheet" : Og, o || (r.as = "script"), r.crossOrigin = "", r.href = s, c && r.setAttribute("nonce", c), document.head.appendChild(r), o) return new Promise((d, y) => {
          r.addEventListener("load", d), r.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${s}`)));
        });
      }));
    }
    function u(i) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = i, window.dispatchEvent(c), !c.defaultPrevented) throw i;
    }
    return n.then((i) => {
      for (const c of i || []) c.status === "rejected" && u(c.reason);
      return t().catch(u);
    });
  };
  var Df = "popstate";
  function jf(e) {
    return typeof e == "object" && e != null && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
  }
  function jg(e = {}) {
    function t(l, n) {
      var _a2;
      let u = (_a2 = n.state) == null ? void 0 : _a2.masked, { pathname: i, search: c, hash: s } = u || l.location;
      return Os("", {
        pathname: i,
        search: c,
        hash: s
      }, n.state && n.state.usr || null, n.state && n.state.key || "default", u ? {
        pathname: l.location.pathname,
        search: l.location.search,
        hash: l.location.hash
      } : void 0);
    }
    function a(l, n) {
      return typeof n == "string" ? n : Vn(n);
    }
    return Hg(t, a, null, e);
  }
  function de(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function bt(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function Ug() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Uf(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t,
      masked: e.unstable_mask ? {
        pathname: e.pathname,
        search: e.search,
        hash: e.hash
      } : void 0
    };
  }
  function Os(e, t, a = null, l, n) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? Fl(t) : t,
      state: a,
      key: t && t.key || l || Ug(),
      unstable_mask: n
    };
  }
  function Vn({ pathname: e = "/", search: t = "", hash: a = "" }) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e;
  }
  function Fl(e) {
    let t = {};
    if (e) {
      let a = e.indexOf("#");
      a >= 0 && (t.hash = e.substring(a), e = e.substring(0, a));
      let l = e.indexOf("?");
      l >= 0 && (t.search = e.substring(l), e = e.substring(0, l)), e && (t.pathname = e);
    }
    return t;
  }
  function Hg(e, t, a, l = {}) {
    let { window: n = document.defaultView, v5Compat: u = false } = l, i = n.history, c = "POP", s = null, o = m();
    o == null && (o = 0, i.replaceState({
      ...i.state,
      idx: o
    }, ""));
    function m() {
      return (i.state || {
        idx: null
      }).idx;
    }
    function r() {
      c = "POP";
      let R = m(), f = R == null ? null : R - o;
      o = R, s && s({
        action: c,
        location: M.location,
        delta: f
      });
    }
    function d(R, f) {
      c = "PUSH";
      let h = jf(R) ? R : Os(M.location, R, f);
      o = m() + 1;
      let p = Uf(h, o), E = M.createHref(h.unstable_mask || h);
      try {
        i.pushState(p, "", E);
      } catch (D) {
        if (D instanceof DOMException && D.name === "DataCloneError") throw D;
        n.location.assign(E);
      }
      u && s && s({
        action: c,
        location: M.location,
        delta: 1
      });
    }
    function y(R, f) {
      c = "REPLACE";
      let h = jf(R) ? R : Os(M.location, R, f);
      o = m();
      let p = Uf(h, o), E = M.createHref(h.unstable_mask || h);
      i.replaceState(p, "", E), u && s && s({
        action: c,
        location: M.location,
        delta: 0
      });
    }
    function T(R) {
      return Bg(R);
    }
    let M = {
      get action() {
        return c;
      },
      get location() {
        return e(n, i);
      },
      listen(R) {
        if (s) throw new Error("A history only accepts one active listener");
        return n.addEventListener(Df, r), s = R, () => {
          n.removeEventListener(Df, r), s = null;
        };
      },
      createHref(R) {
        return t(n, R);
      },
      createURL: T,
      encodeLocation(R) {
        let f = T(R);
        return {
          pathname: f.pathname,
          search: f.search,
          hash: f.hash
        };
      },
      push: d,
      replace: y,
      go(R) {
        return i.go(R);
      }
    };
    return M;
  }
  function Bg(e, t = false) {
    let a = "http://localhost";
    typeof window < "u" && (a = window.location.origin !== "null" ? window.location.origin : window.location.href), de(a, "No window.location.(origin|href) available to create URL");
    let l = typeof e == "string" ? e : Vn(e);
    return l = l.replace(/ $/, "%20"), !t && l.startsWith("//") && (l = a + l), new URL(l, a);
  }
  function Pm(e, t, a = "/") {
    return qg(e, t, a, false);
  }
  function qg(e, t, a, l) {
    let n = typeof t == "string" ? Fl(t) : t, u = ta(n.pathname || "/", a);
    if (u == null) return null;
    let i = Im(e);
    Lg(i);
    let c = null;
    for (let s = 0; c == null && s < i.length; ++s) {
      let o = Wg(u);
      c = Jg(i[s], o, l);
    }
    return c;
  }
  function Im(e, t = [], a = [], l = "", n = false) {
    let u = (i, c, s = n, o) => {
      let m = {
        relativePath: o === void 0 ? i.path || "" : o,
        caseSensitive: i.caseSensitive === true,
        childrenIndex: c,
        route: i
      };
      if (m.relativePath.startsWith("/")) {
        if (!m.relativePath.startsWith(l) && s) return;
        de(m.relativePath.startsWith(l), `Absolute route path "${m.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), m.relativePath = m.relativePath.slice(l.length);
      }
      let r = Ot([
        l,
        m.relativePath
      ]), d = a.concat(m);
      i.children && i.children.length > 0 && (de(i.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${r}".`), Im(i.children, t, d, r, s)), !(i.path == null && !i.index) && t.push({
        path: r,
        score: kg(r, i.index),
        routesMeta: d
      });
    };
    return e.forEach((i, c) => {
      var _a2;
      if (i.path === "" || !((_a2 = i.path) == null ? void 0 : _a2.includes("?"))) u(i, c);
      else for (let s of e0(i.path)) u(i, c, true, s);
    }), t;
  }
  function e0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [a, ...l] = t, n = a.endsWith("?"), u = a.replace(/\?$/, "");
    if (l.length === 0) return n ? [
      u,
      ""
    ] : [
      u
    ];
    let i = e0(l.join("/")), c = [];
    return c.push(...i.map((s) => s === "" ? u : [
      u,
      s
    ].join("/"))), n && c.push(...i), c.map((s) => e.startsWith("/") && s === "" ? "/" : s);
  }
  function Lg(e) {
    e.sort((t, a) => t.score !== a.score ? a.score - t.score : Kg(t.routesMeta.map((l) => l.childrenIndex), a.routesMeta.map((l) => l.childrenIndex)));
  }
  var Yg = /^:[\w-]+$/, Gg = 3, Xg = 2, Qg = 1, Vg = 10, Zg = -2, Hf = (e) => e === "*";
  function kg(e, t) {
    let a = e.split("/"), l = a.length;
    return a.some(Hf) && (l += Zg), t && (l += Xg), a.filter((n) => !Hf(n)).reduce((n, u) => n + (Yg.test(u) ? Gg : u === "" ? Qg : Vg), l);
  }
  function Kg(e, t) {
    return e.length === t.length && e.slice(0, -1).every((l, n) => l === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function Jg(e, t, a = false) {
    let { routesMeta: l } = e, n = {}, u = "/", i = [];
    for (let c = 0; c < l.length; ++c) {
      let s = l[c], o = c === l.length - 1, m = u === "/" ? t : t.slice(u.length) || "/", r = xi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: o
      }, m), d = s.route;
      if (!r && o && a && !l[l.length - 1].route.index && (r = xi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: false
      }, m)), !r) return null;
      Object.assign(n, r.params), i.push({
        params: n,
        pathname: Ot([
          u,
          r.pathname
        ]),
        pathnameBase: ev(Ot([
          u,
          r.pathnameBase
        ])),
        route: d
      }), r.pathnameBase !== "/" && (u = Ot([
        u,
        r.pathnameBase
      ]));
    }
    return i;
  }
  function xi(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: false,
      end: true
    });
    let [a, l] = $g(e.path, e.caseSensitive, e.end), n = t.match(a);
    if (!n) return null;
    let u = n[0], i = u.replace(/(.)\/+$/, "$1"), c = n.slice(1);
    return {
      params: l.reduce((o, { paramName: m, isOptional: r }, d) => {
        if (m === "*") {
          let T = c[d] || "";
          i = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const y = c[d];
        return r && !y ? o[m] = void 0 : o[m] = (y || "").replace(/%2F/g, "/"), o;
      }, {}),
      pathname: u,
      pathnameBase: i,
      pattern: e
    };
  }
  function $g(e, t = false, a = true) {
    bt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let l = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, c, s, o, m) => {
      if (l.push({
        paramName: c,
        isOptional: s != null
      }), s) {
        let r = m.charAt(o + i.length);
        return r && r !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (l.push({
      paramName: "*"
    }), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [
      new RegExp(n, t ? void 0 : "i"),
      l
    ];
  }
  function Wg(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return bt(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
    }
  }
  function ta(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let a = t.endsWith("/") ? t.length - 1 : t.length, l = e.charAt(a);
    return l && l !== "/" ? null : e.slice(a) || "/";
  }
  var Fg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function Pg(e, t = "/") {
    let { pathname: a, search: l = "", hash: n = "" } = typeof e == "string" ? Fl(e) : e, u;
    return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? u = Bf(a.substring(1), "/") : u = Bf(a, t)) : u = t, {
      pathname: u,
      search: tv(l),
      hash: av(n)
    };
  }
  function Bf(e, t) {
    let a = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((n) => {
      n === ".." ? a.length > 1 && a.pop() : n !== "." && a.push(n);
    }), a.length > 1 ? a.join("/") : "/";
  }
  function wc(e, t, a, l) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Ig(e) {
    return e.filter((t, a) => a === 0 || t.route.path && t.route.path.length > 0);
  }
  function Br(e) {
    let t = Ig(e);
    return t.map((a, l) => l === t.length - 1 ? a.pathname : a.pathnameBase);
  }
  function Xi(e, t, a, l = false) {
    let n;
    typeof e == "string" ? n = Fl(e) : (n = {
      ...e
    }, de(!n.pathname || !n.pathname.includes("?"), wc("?", "pathname", "search", n)), de(!n.pathname || !n.pathname.includes("#"), wc("#", "pathname", "hash", n)), de(!n.search || !n.search.includes("#"), wc("#", "search", "hash", n)));
    let u = e === "" || n.pathname === "", i = u ? "/" : n.pathname, c;
    if (i == null) c = a;
    else {
      let r = t.length - 1;
      if (!l && i.startsWith("..")) {
        let d = i.split("/");
        for (; d[0] === ".."; ) d.shift(), r -= 1;
        n.pathname = d.join("/");
      }
      c = r >= 0 ? t[r] : "/";
    }
    let s = Pg(n, c), o = i && i !== "/" && i.endsWith("/"), m = (u || i === ".") && a.endsWith("/");
    return !s.pathname.endsWith("/") && (o || m) && (s.pathname += "/"), s;
  }
  var Ot = (e) => e.join("/").replace(/\/\/+/g, "/"), ev = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), tv = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, av = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, lv = class {
    constructor(e, t, a, l = false) {
      this.status = e, this.statusText = t || "", this.internal = l, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
    }
  };
  function nv(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  function uv(e) {
    return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var t0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function a0(e, t) {
    let a = e;
    if (typeof a != "string" || !Fg.test(a)) return {
      absoluteURL: void 0,
      isExternal: false,
      to: a
    };
    let l = a, n = false;
    if (t0) try {
      let u = new URL(window.location.href), i = a.startsWith("//") ? new URL(u.protocol + a) : new URL(a), c = ta(i.pathname, t);
      i.origin === u.origin && c != null ? a = c + i.search + i.hash : n = true;
    } catch {
      bt(false, `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return {
      absoluteURL: l,
      isExternal: n,
      to: a
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var l0 = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(l0);
  var iv = [
    "GET",
    ...l0
  ];
  new Set(iv);
  var Pl = v.createContext(null);
  Pl.displayName = "DataRouter";
  var Qi = v.createContext(null);
  Qi.displayName = "DataRouterState";
  var n0 = v.createContext(false);
  function cv() {
    return v.useContext(n0);
  }
  var u0 = v.createContext({
    isTransitioning: false
  });
  u0.displayName = "ViewTransition";
  var sv = v.createContext(/* @__PURE__ */ new Map());
  sv.displayName = "Fetchers";
  var rv = v.createContext(null);
  rv.displayName = "Await";
  var ct = v.createContext(null);
  ct.displayName = "Navigation";
  var lu = v.createContext(null);
  lu.displayName = "Location";
  var zt = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  zt.displayName = "Route";
  var qr = v.createContext(null);
  qr.displayName = "RouteError";
  var i0 = "REACT_ROUTER_ERROR", ov = "REDIRECT", fv = "ROUTE_ERROR_RESPONSE";
  function dv(e) {
    if (e.startsWith(`${i0}:${ov}:{`)) try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
    } catch {
    }
  }
  function hv(e) {
    if (e.startsWith(`${i0}:${fv}:{`)) try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new lv(t.status, t.statusText, t.data);
    } catch {
    }
  }
  function mv(e, { relative: t } = {}) {
    de(Il(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: a, navigator: l } = v.useContext(ct), { hash: n, pathname: u, search: i } = nu(e, {
      relative: t
    }), c = u;
    return a !== "/" && (c = u === "/" ? a : Ot([
      a,
      u
    ])), l.createHref({
      pathname: c,
      search: i,
      hash: n
    });
  }
  function Il() {
    return v.useContext(lu) != null;
  }
  At = function() {
    return de(Il(), "useLocation() may be used only in the context of a <Router> component."), v.useContext(lu).location;
  };
  var c0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function s0(e) {
    v.useContext(ct).static || v.useLayoutEffect(e);
  }
  Lr = function() {
    let { isDataRoute: e } = v.useContext(zt);
    return e ? Mv() : yv();
  };
  function yv() {
    de(Il(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = v.useContext(Pl), { basename: t, navigator: a } = v.useContext(ct), { matches: l } = v.useContext(zt), { pathname: n } = At(), u = JSON.stringify(Br(l)), i = v.useRef(false);
    return s0(() => {
      i.current = true;
    }), v.useCallback((s, o = {}) => {
      if (bt(i.current, c0), !i.current) return;
      if (typeof s == "number") {
        a.go(s);
        return;
      }
      let m = Xi(s, JSON.parse(u), n, o.relative === "path");
      e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Ot([
        t,
        m.pathname
      ])), (o.replace ? a.replace : a.push)(m, o.state, o);
    }, [
      t,
      a,
      u,
      n,
      e
    ]);
  }
  v.createContext(null);
  pv = function() {
    let { matches: e } = v.useContext(zt), t = e[e.length - 1];
    return t ? t.params : {};
  };
  function nu(e, { relative: t } = {}) {
    let { matches: a } = v.useContext(zt), { pathname: l } = At(), n = JSON.stringify(Br(a));
    return v.useMemo(() => Xi(e, JSON.parse(n), l, t === "path"), [
      e,
      n,
      l,
      t
    ]);
  }
  function gv(e, t) {
    return r0(e, t);
  }
  function r0(e, t, a) {
    var _a2;
    de(Il(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l } = v.useContext(ct), { matches: n } = v.useContext(zt), u = n[n.length - 1], i = u ? u.params : {}, c = u ? u.pathname : "/", s = u ? u.pathnameBase : "/", o = u && u.route;
    {
      let R = o && o.path || "";
      f0(c, !o || R.endsWith("*") || R.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`);
    }
    let m = At(), r;
    if (t) {
      let R = typeof t == "string" ? Fl(t) : t;
      de(s === "/" || ((_a2 = R.pathname) == null ? void 0 : _a2.startsWith(s)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${R.pathname}" was given in the \`location\` prop.`), r = R;
    } else r = m;
    let d = r.pathname || "/", y = d;
    if (s !== "/") {
      let R = s.replace(/^\//, "").split("/");
      y = "/" + d.replace(/^\//, "").split("/").slice(R.length).join("/");
    }
    let T = Pm(e, {
      pathname: y
    });
    bt(o || T != null, `No routes matched location "${r.pathname}${r.search}${r.hash}" `), bt(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, `Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = Ev(T && T.map((R) => Object.assign({}, R, {
      params: Object.assign({}, i, R.params),
      pathname: Ot([
        s,
        l.encodeLocation ? l.encodeLocation(R.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathname
      ]),
      pathnameBase: R.pathnameBase === "/" ? s : Ot([
        s,
        l.encodeLocation ? l.encodeLocation(R.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathnameBase
      ])
    })), n, a);
    return t && M ? v.createElement(lu.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          unstable_mask: void 0,
          ...r
        },
        navigationType: "POP"
      }
    }, M) : M;
  }
  function vv() {
    let e = Rv(), t = nv(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), a = e instanceof Error ? e.stack : null, l = "rgba(200,200,200, 0.5)", n = {
      padding: "0.5rem",
      backgroundColor: l
    }, u = {
      padding: "2px 4px",
      backgroundColor: l
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = v.createElement(v.Fragment, null, v.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", v.createElement("code", {
      style: u
    }, "ErrorBoundary"), " or", " ", v.createElement("code", {
      style: u
    }, "errorElement"), " prop on your route.")), v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), a ? v.createElement("pre", {
      style: n
    }, a) : null, i);
  }
  var bv = v.createElement(vv, null), o0 = class extends v.Component {
    constructor(e) {
      super(e), this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      } : {
        error: e.error !== void 0 ? e.error : t.error,
        location: t.location,
        revalidation: e.revalidation || t.revalidation
      };
    }
    componentDidCatch(e, t) {
      this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
    }
    render() {
      let e = this.state.error;
      if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
        const a = hv(e.digest);
        a && (e = a);
      }
      let t = e !== void 0 ? v.createElement(zt.Provider, {
        value: this.props.routeContext
      }, v.createElement(qr.Provider, {
        value: e,
        children: this.props.component
      })) : this.props.children;
      return this.context ? v.createElement(Sv, {
        error: e
      }, t) : t;
    }
  };
  o0.contextType = n0;
  var Oc = /* @__PURE__ */ new WeakMap();
  function Sv({ children: e, error: t }) {
    let { basename: a } = v.useContext(ct);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let l = dv(t.digest);
      if (l) {
        let n = Oc.get(t);
        if (n) throw n;
        let u = a0(l.location, a);
        if (t0 && !Oc.get(t)) if (u.isExternal || l.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const i = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
            replace: l.replace
          }));
          throw Oc.set(t, i), i;
        }
        return v.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${u.absoluteURL || u.to}`
        });
      }
    }
    return e;
  }
  function xv({ routeContext: e, match: t, children: a }) {
    let l = v.useContext(Pl);
    return l && l.static && l.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = t.route.id), v.createElement(zt.Provider, {
      value: e
    }, a);
  }
  function Ev(e, t = [], a) {
    let l = a == null ? void 0 : a.state;
    if (e == null) {
      if (!l) return null;
      if (l.errors) e = l.matches;
      else if (t.length === 0 && !l.initialized && l.matches.length > 0) e = l.matches;
      else return null;
    }
    let n = e, u = l == null ? void 0 : l.errors;
    if (u != null) {
      let m = n.findIndex((r) => r.route.id && (u == null ? void 0 : u[r.route.id]) !== void 0);
      de(m >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), n = n.slice(0, Math.min(n.length, m + 1));
    }
    let i = false, c = -1;
    if (a && l) {
      i = l.renderFallback;
      for (let m = 0; m < n.length; m++) {
        let r = n[m];
        if ((r.route.HydrateFallback || r.route.hydrateFallbackElement) && (c = m), r.route.id) {
          let { loaderData: d, errors: y } = l, T = r.route.loader && !d.hasOwnProperty(r.route.id) && (!y || y[r.route.id] === void 0);
          if (r.route.lazy || T) {
            a.isStatic && (i = true), c >= 0 ? n = n.slice(0, c + 1) : n = [
              n[0]
            ];
            break;
          }
        }
      }
    }
    let s = a == null ? void 0 : a.onError, o = l && s ? (m, r) => {
      var _a2, _b2;
      s(m, {
        location: l.location,
        params: ((_b2 = (_a2 = l.matches) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.params) ?? {},
        unstable_pattern: uv(l.matches),
        errorInfo: r
      });
    } : void 0;
    return n.reduceRight((m, r, d) => {
      let y, T = false, M = null, R = null;
      l && (y = u && r.route.id ? u[r.route.id] : void 0, M = r.route.errorElement || bv, i && (c < 0 && d === 0 ? (f0("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), T = true, R = null) : c === d && (T = true, R = r.route.hydrateFallbackElement || null)));
      let f = t.concat(n.slice(0, d + 1)), h = () => {
        let p;
        return y ? p = M : T ? p = R : r.route.Component ? p = v.createElement(r.route.Component, null) : r.route.element ? p = r.route.element : p = m, v.createElement(xv, {
          match: r,
          routeContext: {
            outlet: m,
            matches: f,
            isDataRoute: l != null
          },
          children: p
        });
      };
      return l && (r.route.ErrorBoundary || r.route.errorElement || d === 0) ? v.createElement(o0, {
        location: l.location,
        revalidation: l.revalidation,
        component: M,
        error: y,
        children: h(),
        routeContext: {
          outlet: null,
          matches: f,
          isDataRoute: true
        },
        onError: o
      }) : h();
    }, null);
  }
  function Yr(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function _v(e) {
    let t = v.useContext(Pl);
    return de(t, Yr(e)), t;
  }
  function Tv(e) {
    let t = v.useContext(Qi);
    return de(t, Yr(e)), t;
  }
  function zv(e) {
    let t = v.useContext(zt);
    return de(t, Yr(e)), t;
  }
  function Gr(e) {
    let t = zv(e), a = t.matches[t.matches.length - 1];
    return de(a.route.id, `${e} can only be used on routes that contain a unique "id"`), a.route.id;
  }
  function Av() {
    return Gr("useRouteId");
  }
  function Rv() {
    var _a2;
    let e = v.useContext(qr), t = Tv("useRouteError"), a = Gr("useRouteError");
    return e !== void 0 ? e : (_a2 = t.errors) == null ? void 0 : _a2[a];
  }
  function Mv() {
    let { router: e } = _v("useNavigate"), t = Gr("useNavigate"), a = v.useRef(false);
    return s0(() => {
      a.current = true;
    }), v.useCallback(async (n, u = {}) => {
      bt(a.current, c0), a.current && (typeof n == "number" ? await e.navigate(n) : await e.navigate(n, {
        fromRouteId: t,
        ...u
      }));
    }, [
      e,
      t
    ]);
  }
  var qf = {};
  function f0(e, t, a) {
    !t && !qf[e] && (qf[e] = true, bt(false, a));
  }
  v.memo(Cv);
  function Cv({ routes: e, future: t, state: a, isStatic: l, onError: n }) {
    return r0(e, void 0, {
      state: a,
      isStatic: l,
      onError: n
    });
  }
  function d0({ to: e, replace: t, state: a, relative: l }) {
    de(Il(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: n } = v.useContext(ct);
    bt(!n, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: u } = v.useContext(zt), { pathname: i } = At(), c = Lr(), s = Xi(e, Br(u), i, l === "path"), o = JSON.stringify(s);
    return v.useEffect(() => {
      c(JSON.parse(o), {
        replace: t,
        state: a,
        relative: l
      });
    }, [
      c,
      o,
      l,
      t,
      a
    ]), null;
  }
  function Xe(e) {
    de(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Nv({ basename: e = "/", children: t = null, location: a, navigationType: l = "POP", navigator: n, static: u = false, unstable_useTransitions: i }) {
    de(!Il(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let c = e.replace(/^\/*/, "/"), s = v.useMemo(() => ({
      basename: c,
      navigator: n,
      static: u,
      unstable_useTransitions: i,
      future: {}
    }), [
      c,
      n,
      u,
      i
    ]);
    typeof a == "string" && (a = Fl(a));
    let { pathname: o = "/", search: m = "", hash: r = "", state: d = null, key: y = "default", unstable_mask: T } = a, M = v.useMemo(() => {
      let R = ta(o, c);
      return R == null ? null : {
        location: {
          pathname: R,
          search: m,
          hash: r,
          state: d,
          key: y,
          unstable_mask: T
        },
        navigationType: l
      };
    }, [
      c,
      o,
      m,
      r,
      d,
      y,
      l,
      T
    ]);
    return bt(M != null, `<Router basename="${c}"> is not able to match the URL "${o}${m}${r}" because it does not start with the basename, so the <Router> won't render anything.`), M == null ? null : v.createElement(ct.Provider, {
      value: s
    }, v.createElement(lu.Provider, {
      children: t,
      value: M
    }));
  }
  function wv({ children: e, location: t }) {
    return gv(Ds(e), t);
  }
  function Ds(e, t = []) {
    let a = [];
    return v.Children.forEach(e, (l, n) => {
      if (!v.isValidElement(l)) return;
      let u = [
        ...t,
        n
      ];
      if (l.type === v.Fragment) {
        a.push.apply(a, Ds(l.props.children, u));
        return;
      }
      de(l.type === Xe, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), de(!l.props.index || !l.props.children, "An index route cannot have child routes.");
      let i = {
        id: l.props.id || u.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        middleware: l.props.middleware,
        loader: l.props.loader,
        action: l.props.action,
        hydrateFallbackElement: l.props.hydrateFallbackElement,
        HydrateFallback: l.props.HydrateFallback,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary: l.props.hasErrorBoundary === true || l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy
      };
      l.props.children && (i.children = Ds(l.props.children, u)), a.push(i);
    }), a;
  }
  var Qu = "get", Vu = "application/x-www-form-urlencoded";
  function Vi(e) {
    return typeof HTMLElement < "u" && e instanceof HTMLElement;
  }
  function Ov(e) {
    return Vi(e) && e.tagName.toLowerCase() === "button";
  }
  function Dv(e) {
    return Vi(e) && e.tagName.toLowerCase() === "form";
  }
  function jv(e) {
    return Vi(e) && e.tagName.toLowerCase() === "input";
  }
  function Uv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function Hv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Uv(e);
  }
  function js(e = "") {
    return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, a) => {
      let l = e[a];
      return t.concat(Array.isArray(l) ? l.map((n) => [
        a,
        n
      ]) : [
        [
          a,
          l
        ]
      ]);
    }, []));
  }
  function Bv(e, t) {
    let a = js(e);
    return t && t.forEach((l, n) => {
      a.has(n) || t.getAll(n).forEach((u) => {
        a.append(n, u);
      });
    }), a;
  }
  var Au = null;
  function qv() {
    if (Au === null) try {
      new FormData(document.createElement("form"), 0), Au = false;
    } catch {
      Au = true;
    }
    return Au;
  }
  var Lv = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Dc(e) {
    return e != null && !Lv.has(e) ? (bt(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vu}"`), null) : e;
  }
  function Yv(e, t) {
    let a, l, n, u, i;
    if (Dv(e)) {
      let c = e.getAttribute("action");
      l = c ? ta(c, t) : null, a = e.getAttribute("method") || Qu, n = Dc(e.getAttribute("enctype")) || Vu, u = new FormData(e);
    } else if (Ov(e) || jv(e) && (e.type === "submit" || e.type === "image")) {
      let c = e.form;
      if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = e.getAttribute("formaction") || c.getAttribute("action");
      if (l = s ? ta(s, t) : null, a = e.getAttribute("formmethod") || c.getAttribute("method") || Qu, n = Dc(e.getAttribute("formenctype")) || Dc(c.getAttribute("enctype")) || Vu, u = new FormData(c, e), !qv()) {
        let { name: o, type: m, value: r } = e;
        if (m === "image") {
          let d = o ? `${o}.` : "";
          u.append(`${d}x`, "0"), u.append(`${d}y`, "0");
        } else o && u.append(o, r);
      }
    } else {
      if (Vi(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      a = Qu, l = null, n = Vu, i = e;
    }
    return u && n === "text/plain" && (i = u, u = void 0), {
      action: l,
      method: a.toLowerCase(),
      encType: n,
      formData: u,
      body: i
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function Xr(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function h0(e, t, a, l) {
    let n = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return a ? n.pathname.endsWith("/") ? n.pathname = `${n.pathname}_.${l}` : n.pathname = `${n.pathname}.${l}` : n.pathname === "/" ? n.pathname = `_root.${l}` : t && ta(n.pathname, t) === "/" ? n.pathname = `${t.replace(/\/$/, "")}/_root.${l}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${l}`, n;
  }
  async function Gv(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let a = await import(e.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return t[e.id] = a, a;
    } catch (a) {
      return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function Xv(e) {
    return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
  }
  async function Qv(e, t, a) {
    let l = await Promise.all(e.map(async (n) => {
      let u = t.routes[n.route.id];
      if (u) {
        let i = await Gv(u, a);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return Kv(l.flat(1).filter(Xv).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? {
      ...n,
      rel: "prefetch",
      as: "style"
    } : {
      ...n,
      rel: "prefetch"
    }));
  }
  function Lf(e, t, a, l, n, u) {
    let i = (s, o) => a[o] ? s.route.id !== a[o].route.id : true, c = (s, o) => {
      var _a2;
      return a[o].pathname !== s.pathname || ((_a2 = a[o].route.path) == null ? void 0 : _a2.endsWith("*")) && a[o].params["*"] !== s.params["*"];
    };
    return u === "assets" ? t.filter((s, o) => i(s, o) || c(s, o)) : u === "data" ? t.filter((s, o) => {
      var _a2;
      let m = l.routes[s.route.id];
      if (!m || !m.hasLoader) return false;
      if (i(s, o) || c(s, o)) return true;
      if (s.route.shouldRevalidate) {
        let r = s.route.shouldRevalidate({
          currentUrl: new URL(n.pathname + n.search + n.hash, window.origin),
          currentParams: ((_a2 = a[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(e, window.origin),
          nextParams: s.params,
          defaultShouldRevalidate: true
        });
        if (typeof r == "boolean") return r;
      }
      return true;
    }) : [];
  }
  function Vv(e, t, { includeHydrateFallback: a } = {}) {
    return Zv(e.map((l) => {
      let n = t.routes[l.route.id];
      if (!n) return [];
      let u = [
        n.module
      ];
      return n.clientActionModule && (u = u.concat(n.clientActionModule)), n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)), a && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)), n.imports && (u = u.concat(n.imports)), u;
    }).flat(1));
  }
  function Zv(e) {
    return [
      ...new Set(e)
    ];
  }
  function kv(e) {
    let t = {}, a = Object.keys(e).sort();
    for (let l of a) t[l] = e[l];
    return t;
  }
  function Kv(e, t) {
    let a = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((l, n) => {
      let u = JSON.stringify(kv(n));
      return a.has(u) || (a.add(u), l.push({
        key: u,
        link: n
      })), l;
    }, []);
  }
  function Qr() {
    let e = v.useContext(Pl);
    return Xr(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
  }
  function Jv() {
    let e = v.useContext(Qi);
    return Xr(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
  }
  var Vr = v.createContext(void 0);
  Vr.displayName = "FrameworkContext";
  function Zr() {
    let e = v.useContext(Vr);
    return Xr(e, "You must render this element inside a <HydratedRouter> element"), e;
  }
  function $v(e, t) {
    let a = v.useContext(Vr), [l, n] = v.useState(false), [u, i] = v.useState(false), { onFocus: c, onBlur: s, onMouseEnter: o, onMouseLeave: m, onTouchStart: r } = t, d = v.useRef(null);
    v.useEffect(() => {
      if (e === "render" && i(true), e === "viewport") {
        let M = (f) => {
          f.forEach((h) => {
            i(h.isIntersecting);
          });
        }, R = new IntersectionObserver(M, {
          threshold: 0.5
        });
        return d.current && R.observe(d.current), () => {
          R.disconnect();
        };
      }
    }, [
      e
    ]), v.useEffect(() => {
      if (l) {
        let M = setTimeout(() => {
          i(true);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [
      l
    ]);
    let y = () => {
      n(true);
    }, T = () => {
      n(false), i(false);
    };
    return a ? e !== "intent" ? [
      u,
      d,
      {}
    ] : [
      u,
      d,
      {
        onFocus: rn(c, y),
        onBlur: rn(s, T),
        onMouseEnter: rn(o, y),
        onMouseLeave: rn(m, T),
        onTouchStart: rn(r, y)
      }
    ] : [
      false,
      d,
      {}
    ];
  }
  function rn(e, t) {
    return (a) => {
      e && e(a), a.defaultPrevented || t(a);
    };
  }
  function Wv({ page: e, ...t }) {
    let a = cv(), { router: l } = Qr(), n = v.useMemo(() => Pm(l.routes, e, l.basename), [
      l.routes,
      e,
      l.basename
    ]);
    return n ? a ? v.createElement(Pv, {
      page: e,
      matches: n,
      ...t
    }) : v.createElement(Iv, {
      page: e,
      matches: n,
      ...t
    }) : null;
  }
  function Fv(e) {
    let { manifest: t, routeModules: a } = Zr(), [l, n] = v.useState([]);
    return v.useEffect(() => {
      let u = false;
      return Qv(e, t, a).then((i) => {
        u || n(i);
      }), () => {
        u = true;
      };
    }, [
      e,
      t,
      a
    ]), l;
  }
  function Pv({ page: e, matches: t, ...a }) {
    let l = At(), { future: n } = Zr(), { basename: u } = Qr(), i = v.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let c = h0(e, u, n.unstable_trailingSlashAwareDataRequests, "rsc"), s = false, o = [];
      for (let m of t) typeof m.route.shouldRevalidate == "function" ? s = true : o.push(m.route.id);
      return s && o.length > 0 && c.searchParams.set("_routes", o.join(",")), [
        c.pathname + c.search
      ];
    }, [
      u,
      n.unstable_trailingSlashAwareDataRequests,
      e,
      l,
      t
    ]);
    return v.createElement(v.Fragment, null, i.map((c) => v.createElement("link", {
      key: c,
      rel: "prefetch",
      as: "fetch",
      href: c,
      ...a
    })));
  }
  function Iv({ page: e, matches: t, ...a }) {
    let l = At(), { future: n, manifest: u, routeModules: i } = Zr(), { basename: c } = Qr(), { loaderData: s, matches: o } = Jv(), m = v.useMemo(() => Lf(e, t, o, u, l, "data"), [
      e,
      t,
      o,
      u,
      l
    ]), r = v.useMemo(() => Lf(e, t, o, u, l, "assets"), [
      e,
      t,
      o,
      u,
      l
    ]), d = v.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let M = /* @__PURE__ */ new Set(), R = false;
      if (t.forEach((h) => {
        var _a2;
        let p = u.routes[h.route.id];
        !p || !p.hasLoader || (!m.some((E) => E.route.id === h.route.id) && h.route.id in s && ((_a2 = i[h.route.id]) == null ? void 0 : _a2.shouldRevalidate) || p.hasClientLoader ? R = true : M.add(h.route.id));
      }), M.size === 0) return [];
      let f = h0(e, c, n.unstable_trailingSlashAwareDataRequests, "data");
      return R && M.size > 0 && f.searchParams.set("_routes", t.filter((h) => M.has(h.route.id)).map((h) => h.route.id).join(",")), [
        f.pathname + f.search
      ];
    }, [
      c,
      n.unstable_trailingSlashAwareDataRequests,
      s,
      l,
      u,
      m,
      t,
      e,
      i
    ]), y = v.useMemo(() => Vv(r, u), [
      r,
      u
    ]), T = Fv(r);
    return v.createElement(v.Fragment, null, d.map((M) => v.createElement("link", {
      key: M,
      rel: "prefetch",
      as: "fetch",
      href: M,
      ...a
    })), y.map((M) => v.createElement("link", {
      key: M,
      rel: "modulepreload",
      href: M,
      ...a
    })), T.map(({ key: M, link: R }) => v.createElement("link", {
      key: M,
      nonce: a.nonce,
      ...R,
      crossOrigin: R.crossOrigin ?? a.crossOrigin
    })));
  }
  function eb(...e) {
    return (t) => {
      e.forEach((a) => {
        typeof a == "function" ? a(t) : a != null && (a.current = t);
      });
    };
  }
  var tb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    tb && (window.__reactRouterVersion = "7.14.0");
  } catch {
  }
  function ab({ basename: e, children: t, unstable_useTransitions: a, window: l }) {
    let n = v.useRef();
    n.current == null && (n.current = jg({
      window: l,
      v5Compat: true
    }));
    let u = n.current, [i, c] = v.useState({
      action: u.action,
      location: u.location
    }), s = v.useCallback((o) => {
      a === false ? c(o) : v.startTransition(() => c(o));
    }, [
      a
    ]);
    return v.useLayoutEffect(() => u.listen(s), [
      u,
      s
    ]), v.createElement(Nv, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: u,
      unstable_useTransitions: a
    });
  }
  let m0;
  m0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  wl = v.forwardRef(function({ onClick: t, discover: a = "render", prefetch: l = "none", relative: n, reloadDocument: u, replace: i, unstable_mask: c, state: s, target: o, to: m, preventScrollReset: r, viewTransition: d, unstable_defaultShouldRevalidate: y, ...T }, M) {
    let { basename: R, navigator: f, unstable_useTransitions: h } = v.useContext(ct), p = typeof m == "string" && m0.test(m), E = a0(m, R);
    m = E.to;
    let D = mv(m, {
      relative: n
    }), x = At(), _ = null;
    if (c) {
      let B = Xi(c, [], x.unstable_mask ? x.unstable_mask.pathname : "/", true);
      R !== "/" && (B.pathname = B.pathname === "/" ? R : Ot([
        R,
        B.pathname
      ])), _ = f.createHref(B);
    }
    let [C, A, g] = $v(l, T), b = ib(m, {
      replace: i,
      unstable_mask: c,
      state: s,
      target: o,
      preventScrollReset: r,
      relative: n,
      viewTransition: d,
      unstable_defaultShouldRevalidate: y,
      unstable_useTransitions: h
    });
    function w(B) {
      t && t(B), B.defaultPrevented || b(B);
    }
    let O = !(E.isExternal || u), H = v.createElement("a", {
      ...T,
      ...g,
      href: (O ? _ : void 0) || E.absoluteURL || D,
      onClick: O ? w : t,
      ref: eb(M, A),
      target: o,
      "data-discover": !p && a === "render" ? "true" : void 0
    });
    return C && !p ? v.createElement(v.Fragment, null, H, v.createElement(Wv, {
      page: D
    })) : H;
  });
  wl.displayName = "Link";
  var lb = v.forwardRef(function({ "aria-current": t = "page", caseSensitive: a = false, className: l = "", end: n = false, style: u, to: i, viewTransition: c, children: s, ...o }, m) {
    let r = nu(i, {
      relative: o.relative
    }), d = At(), y = v.useContext(Qi), { navigator: T, basename: M } = v.useContext(ct), R = y != null && fb(r) && c === true, f = T.encodeLocation ? T.encodeLocation(r).pathname : r.pathname, h = d.pathname, p = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    a || (h = h.toLowerCase(), p = p ? p.toLowerCase() : null, f = f.toLowerCase()), p && M && (p = ta(p, M) || p);
    const E = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let D = h === f || !n && h.startsWith(f) && h.charAt(E) === "/", x = p != null && (p === f || !n && p.startsWith(f) && p.charAt(f.length) === "/"), _ = {
      isActive: D,
      isPending: x,
      isTransitioning: R
    }, C = D ? t : void 0, A;
    typeof l == "function" ? A = l(_) : A = [
      l,
      D ? "active" : null,
      x ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let g = typeof u == "function" ? u(_) : u;
    return v.createElement(wl, {
      ...o,
      "aria-current": C,
      className: A,
      ref: m,
      style: g,
      to: i,
      viewTransition: c
    }, typeof s == "function" ? s(_) : s);
  });
  lb.displayName = "NavLink";
  var nb = v.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: a, reloadDocument: l, replace: n, state: u, method: i = Qu, action: c, onSubmit: s, relative: o, preventScrollReset: m, viewTransition: r, unstable_defaultShouldRevalidate: d, ...y }, T) => {
    let { unstable_useTransitions: M } = v.useContext(ct), R = rb(), f = ob(c, {
      relative: o
    }), h = i.toLowerCase() === "get" ? "get" : "post", p = typeof c == "string" && m0.test(c), E = (D) => {
      if (s && s(D), D.defaultPrevented) return;
      D.preventDefault();
      let x = D.nativeEvent.submitter, _ = (x == null ? void 0 : x.getAttribute("formmethod")) || i, C = () => R(x || D.currentTarget, {
        fetcherKey: t,
        method: _,
        navigate: a,
        replace: n,
        state: u,
        relative: o,
        preventScrollReset: m,
        viewTransition: r,
        unstable_defaultShouldRevalidate: d
      });
      M && a !== false ? v.startTransition(() => C()) : C();
    };
    return v.createElement("form", {
      ref: T,
      method: h,
      action: f,
      onSubmit: l ? s : E,
      ...y,
      "data-discover": !p && e === "render" ? "true" : void 0
    });
  });
  nb.displayName = "Form";
  function ub(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function y0(e) {
    let t = v.useContext(Pl);
    return de(t, ub(e)), t;
  }
  function ib(e, { target: t, replace: a, unstable_mask: l, state: n, preventScrollReset: u, relative: i, viewTransition: c, unstable_defaultShouldRevalidate: s, unstable_useTransitions: o } = {}) {
    let m = Lr(), r = At(), d = nu(e, {
      relative: i
    });
    return v.useCallback((y) => {
      if (Hv(y, t)) {
        y.preventDefault();
        let T = a !== void 0 ? a : Vn(r) === Vn(d), M = () => m(e, {
          replace: T,
          unstable_mask: l,
          state: n,
          preventScrollReset: u,
          relative: i,
          viewTransition: c,
          unstable_defaultShouldRevalidate: s
        });
        o ? v.startTransition(() => M()) : M();
      }
    }, [
      r,
      m,
      d,
      a,
      l,
      n,
      t,
      e,
      u,
      i,
      c,
      s,
      o
    ]);
  }
  b1 = function(e) {
    bt(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = v.useRef(js(e)), a = v.useRef(false), l = At(), n = v.useMemo(() => Bv(l.search, a.current ? null : t.current), [
      l.search
    ]), u = Lr(), i = v.useCallback((c, s) => {
      const o = js(typeof c == "function" ? c(new URLSearchParams(n)) : c);
      a.current = true, u("?" + o, s);
    }, [
      u,
      n
    ]);
    return [
      n,
      i
    ];
  };
  var cb = 0, sb = () => `__${String(++cb)}__`;
  function rb() {
    let { router: e } = y0("useSubmit"), { basename: t } = v.useContext(ct), a = Av(), l = e.fetch, n = e.navigate;
    return v.useCallback(async (u, i = {}) => {
      let { action: c, method: s, encType: o, formData: m, body: r } = Yv(u, t);
      if (i.navigate === false) {
        let d = i.fetcherKey || sb();
        await l(d, a, i.action || c, {
          unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: m,
          body: r,
          formMethod: i.method || s,
          formEncType: i.encType || o,
          flushSync: i.flushSync
        });
      } else await n(i.action || c, {
        unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
        preventScrollReset: i.preventScrollReset,
        formData: m,
        body: r,
        formMethod: i.method || s,
        formEncType: i.encType || o,
        replace: i.replace,
        state: i.state,
        fromRouteId: a,
        flushSync: i.flushSync,
        viewTransition: i.viewTransition
      });
    }, [
      l,
      n,
      t,
      a
    ]);
  }
  function ob(e, { relative: t } = {}) {
    let { basename: a } = v.useContext(ct), l = v.useContext(zt);
    de(l, "useFormAction must be used inside a RouteContext");
    let [n] = l.matches.slice(-1), u = {
      ...nu(e || ".", {
        relative: t
      })
    }, i = At();
    if (e == null) {
      u.search = i.search;
      let c = new URLSearchParams(u.search), s = c.getAll("index");
      if (s.some((m) => m === "")) {
        c.delete("index"), s.filter((r) => r).forEach((r) => c.append("index", r));
        let m = c.toString();
        u.search = m ? `?${m}` : "";
      }
    }
    return (!e || e === ".") && n.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (u.pathname = u.pathname === "/" ? a : Ot([
      a,
      u.pathname
    ])), Vn(u);
  }
  function fb(e, { relative: t } = {}) {
    let a = v.useContext(u0);
    de(a != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: l } = y0("useViewTransitionState"), n = nu(e, {
      relative: t
    });
    if (!a.isTransitioning) return false;
    let u = ta(a.currentLocation.pathname, l) || a.currentLocation.pathname, i = ta(a.nextLocation.pathname, l) || a.nextLocation.pathname;
    return xi(n.pathname, i) != null || xi(n.pathname, u) != null;
  }
  let db, Yf, p0, hb, kr, mb, yb, pb, gb, vb, bb, Sb, jc;
  db = (e, t, a, l, n, u, i, c) => {
    let s = document.documentElement, o = [
      "light",
      "dark"
    ];
    function m(y) {
      (Array.isArray(e) ? e : [
        e
      ]).forEach((T) => {
        let M = T === "class", R = M && u ? n.map((f) => u[f] || f) : n;
        M ? (s.classList.remove(...R), s.classList.add(u && u[y] ? u[y] : y)) : s.setAttribute(T, y);
      }), r(y);
    }
    function r(y) {
      c && o.includes(y) && (s.style.colorScheme = y);
    }
    function d() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (l) m(l);
    else try {
      let y = localStorage.getItem(t) || a, T = i && y === "system" ? d() : y;
      m(T);
    } catch {
    }
  };
  Yf = [
    "light",
    "dark"
  ];
  p0 = "(prefers-color-scheme: dark)";
  hb = typeof window > "u";
  kr = v.createContext(void 0);
  mb = {
    setTheme: (e) => {
    },
    themes: []
  };
  S1 = () => {
    var e;
    return (e = v.useContext(kr)) != null ? e : mb;
  };
  yb = (e) => v.useContext(kr) ? v.createElement(v.Fragment, null, e.children) : v.createElement(gb, {
    ...e
  });
  pb = [
    "light",
    "dark"
  ];
  gb = ({ forcedTheme: e, disableTransitionOnChange: t = false, enableSystem: a = true, enableColorScheme: l = true, storageKey: n = "theme", themes: u = pb, defaultTheme: i = a ? "system" : "light", attribute: c = "data-theme", value: s, children: o, nonce: m, scriptProps: r }) => {
    let [d, y] = v.useState(() => bb(n, i)), [T, M] = v.useState(() => d === "system" ? jc() : d), R = s ? Object.values(s) : u, f = v.useCallback((D) => {
      let x = D;
      if (!x) return;
      D === "system" && a && (x = jc());
      let _ = s ? s[x] : x, C = t ? Sb(m) : null, A = document.documentElement, g = (b) => {
        b === "class" ? (A.classList.remove(...R), _ && A.classList.add(_)) : b.startsWith("data-") && (_ ? A.setAttribute(b, _) : A.removeAttribute(b));
      };
      if (Array.isArray(c) ? c.forEach(g) : g(c), l) {
        let b = Yf.includes(i) ? i : null, w = Yf.includes(x) ? x : b;
        A.style.colorScheme = w;
      }
      C == null ? void 0 : C();
    }, [
      m
    ]), h = v.useCallback((D) => {
      let x = typeof D == "function" ? D(d) : D;
      y(x);
      try {
        localStorage.setItem(n, x);
      } catch {
      }
    }, [
      d
    ]), p = v.useCallback((D) => {
      let x = jc(D);
      M(x), d === "system" && a && !e && f("system");
    }, [
      d,
      e
    ]);
    v.useEffect(() => {
      let D = window.matchMedia(p0);
      return D.addListener(p), p(D), () => D.removeListener(p);
    }, [
      p
    ]), v.useEffect(() => {
      let D = (x) => {
        x.key === n && (x.newValue ? y(x.newValue) : h(i));
      };
      return window.addEventListener("storage", D), () => window.removeEventListener("storage", D);
    }, [
      h
    ]), v.useEffect(() => {
      f(e ?? d);
    }, [
      e,
      d
    ]);
    let E = v.useMemo(() => ({
      theme: d,
      setTheme: h,
      forcedTheme: e,
      resolvedTheme: d === "system" ? T : d,
      themes: a ? [
        ...u,
        "system"
      ] : u,
      systemTheme: a ? T : void 0
    }), [
      d,
      h,
      e,
      T,
      a,
      u
    ]);
    return v.createElement(kr.Provider, {
      value: E
    }, v.createElement(vb, {
      forcedTheme: e,
      storageKey: n,
      attribute: c,
      enableSystem: a,
      enableColorScheme: l,
      defaultTheme: i,
      value: s,
      themes: u,
      nonce: m,
      scriptProps: r
    }), o);
  };
  vb = v.memo(({ forcedTheme: e, storageKey: t, attribute: a, enableSystem: l, enableColorScheme: n, defaultTheme: u, value: i, themes: c, nonce: s, scriptProps: o }) => {
    let m = JSON.stringify([
      a,
      t,
      u,
      e,
      c,
      i,
      l,
      n
    ]).slice(1, -1);
    return v.createElement("script", {
      ...o,
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
      dangerouslySetInnerHTML: {
        __html: `(${db.toString()})(${m})`
      }
    });
  });
  bb = (e, t) => {
    if (hb) return;
    let a;
    try {
      a = localStorage.getItem(e) || void 0;
    } catch {
    }
    return a || t;
  };
  Sb = (e) => {
    let t = document.createElement("style");
    return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(t);
      }, 1);
    };
  };
  jc = (e) => (e || (e = window.matchMedia(p0)), e.matches ? "dark" : "light");
  function xb(e) {
    if (typeof document > "u") return;
    let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
  const Eb = (e) => {
    switch (e) {
      case "success":
        return zb;
      case "info":
        return Rb;
      case "warning":
        return Ab;
      case "error":
        return Mb;
      default:
        return null;
    }
  }, _b = Array(12).fill(0), Tb = ({ visible: e, className: t }) => U.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      t
    ].filter(Boolean).join(" "),
    "data-visible": e
  }, U.createElement("div", {
    className: "sonner-spinner"
  }, _b.map((a, l) => U.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${l}`
  })))), zb = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, U.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), Ab = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, U.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), Rb = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, U.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), Mb = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, U.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), Cb = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, U.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), U.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), Nb = () => {
    const [e, t] = U.useState(document.hidden);
    return U.useEffect(() => {
      const a = () => {
        t(document.hidden);
      };
      return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
    }, []), e;
  };
  let Us = 1;
  class wb {
    constructor() {
      this.subscribe = (t) => (this.subscribers.push(t), () => {
        const a = this.subscribers.indexOf(t);
        this.subscribers.splice(a, 1);
      }), this.publish = (t) => {
        this.subscribers.forEach((a) => a(t));
      }, this.addToast = (t) => {
        this.publish(t), this.toasts = [
          ...this.toasts,
          t
        ];
      }, this.create = (t) => {
        var a;
        const { message: l, ...n } = t, u = typeof (t == null ? void 0 : t.id) == "number" || ((a = t.id) == null ? void 0 : a.length) > 0 ? t.id : Us++, i = this.toasts.find((s) => s.id === u), c = t.dismissible === void 0 ? true : t.dismissible;
        return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), i ? this.toasts = this.toasts.map((s) => s.id === u ? (this.publish({
          ...s,
          ...t,
          id: u,
          title: l
        }), {
          ...s,
          ...t,
          id: u,
          dismissible: c,
          title: l
        }) : s) : this.addToast({
          title: l,
          ...n,
          dismissible: c,
          id: u
        }), u;
      }, this.dismiss = (t) => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach((a) => a({
        id: t,
        dismiss: true
      })))) : this.toasts.forEach((a) => {
        this.subscribers.forEach((l) => l({
          id: a.id,
          dismiss: true
        }));
      }), t), this.message = (t, a) => this.create({
        ...a,
        message: t
      }), this.error = (t, a) => this.create({
        ...a,
        message: t,
        type: "error"
      }), this.success = (t, a) => this.create({
        ...a,
        type: "success",
        message: t
      }), this.info = (t, a) => this.create({
        ...a,
        type: "info",
        message: t
      }), this.warning = (t, a) => this.create({
        ...a,
        type: "warning",
        message: t
      }), this.loading = (t, a) => this.create({
        ...a,
        type: "loading",
        message: t
      }), this.promise = (t, a) => {
        if (!a) return;
        let l;
        a.loading !== void 0 && (l = this.create({
          ...a,
          promise: t,
          type: "loading",
          message: a.loading,
          description: typeof a.description != "function" ? a.description : void 0
        }));
        const n = Promise.resolve(t instanceof Function ? t() : t);
        let u = l !== void 0, i;
        const c = n.then(async (o) => {
          if (i = [
            "resolve",
            o
          ], U.isValidElement(o)) u = false, this.create({
            id: l,
            type: "default",
            message: o
          });
          else if (Db(o) && !o.ok) {
            u = false;
            const r = typeof a.error == "function" ? await a.error(`HTTP error! status: ${o.status}`) : a.error, d = typeof a.description == "function" ? await a.description(`HTTP error! status: ${o.status}`) : a.description, T = typeof r == "object" && !U.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: l,
              type: "error",
              description: d,
              ...T
            });
          } else if (o instanceof Error) {
            u = false;
            const r = typeof a.error == "function" ? await a.error(o) : a.error, d = typeof a.description == "function" ? await a.description(o) : a.description, T = typeof r == "object" && !U.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: l,
              type: "error",
              description: d,
              ...T
            });
          } else if (a.success !== void 0) {
            u = false;
            const r = typeof a.success == "function" ? await a.success(o) : a.success, d = typeof a.description == "function" ? await a.description(o) : a.description, T = typeof r == "object" && !U.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: l,
              type: "success",
              description: d,
              ...T
            });
          }
        }).catch(async (o) => {
          if (i = [
            "reject",
            o
          ], a.error !== void 0) {
            u = false;
            const m = typeof a.error == "function" ? await a.error(o) : a.error, r = typeof a.description == "function" ? await a.description(o) : a.description, y = typeof m == "object" && !U.isValidElement(m) ? m : {
              message: m
            };
            this.create({
              id: l,
              type: "error",
              description: r,
              ...y
            });
          }
        }).finally(() => {
          u && (this.dismiss(l), l = void 0), a.finally == null || a.finally.call(a);
        }), s = () => new Promise((o, m) => c.then(() => i[0] === "reject" ? m(i[1]) : o(i[1])).catch(m));
        return typeof l != "string" && typeof l != "number" ? {
          unwrap: s
        } : Object.assign(l, {
          unwrap: s
        });
      }, this.custom = (t, a) => {
        const l = (a == null ? void 0 : a.id) || Us++;
        return this.create({
          jsx: t(l),
          id: l,
          ...a
        }), l;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Ze, Ob, Db, jb, Ub, Hb;
  Ze = new wb();
  Ob = (e, t) => {
    const a = (t == null ? void 0 : t.id) || Us++;
    return Ze.addToast({
      title: e,
      ...t,
      id: a
    }), a;
  };
  Db = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";
  jb = Ob;
  Ub = () => Ze.toasts;
  Hb = () => Ze.getActiveToasts();
  x1 = Object.assign(jb, {
    success: Ze.success,
    info: Ze.info,
    warning: Ze.warning,
    error: Ze.error,
    custom: Ze.custom,
    message: Ze.message,
    promise: Ze.promise,
    dismiss: Ze.dismiss,
    loading: Ze.loading
  }, {
    getHistory: Ub,
    getToasts: Hb
  });
  xb("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function Ru(e) {
    return e.label !== void 0;
  }
  const Bb = 3, qb = "24px", Lb = "16px", Gf = 4e3, Yb = 356, Gb = 14, Xb = 45, Qb = 200;
  function Rt(...e) {
    return e.filter(Boolean).join(" ");
  }
  function Vb(e) {
    const [t, a] = e.split("-"), l = [];
    return t && l.push(t), a && l.push(a), l;
  }
  const Zb = (e) => {
    var t, a, l, n, u, i, c, s, o;
    const { invert: m, toast: r, unstyled: d, interacting: y, setHeights: T, visibleToasts: M, heights: R, index: f, toasts: h, expanded: p, removeToast: E, defaultRichColors: D, closeButton: x, style: _, cancelButtonStyle: C, actionButtonStyle: A, className: g = "", descriptionClassName: b = "", duration: w, position: O, gap: H, expandByDefault: B, classNames: z, icons: j, closeButtonAriaLabel: q = "Close toast" } = e, [L, Z] = U.useState(null), [Me, ge] = U.useState(null), [G, k] = U.useState(false), [I, He] = U.useState(false), [el, oe] = U.useState(false), [tl, uu] = U.useState(false), [iu, al] = U.useState(false), [E0, Zi] = U.useState(0), [_0, Kr] = U.useState(0), en = U.useRef(r.duration || w || Gf), Jr = U.useRef(null), Ut = U.useRef(null), T0 = f === 0, z0 = f + 1 <= M, $e = r.type, ll = r.dismissible !== false, A0 = r.className || "", R0 = r.descriptionClassName || "", cu = U.useMemo(() => R.findIndex((V) => V.toastId === r.id) || 0, [
      R,
      r.id
    ]), M0 = U.useMemo(() => {
      var V;
      return (V = r.closeButton) != null ? V : x;
    }, [
      r.closeButton,
      x
    ]), $r = U.useMemo(() => r.duration || w || Gf, [
      r.duration,
      w
    ]), ki = U.useRef(0), nl = U.useRef(0), Wr = U.useRef(0), ul = U.useRef(null), [C0, N0] = O.split("-"), Fr = U.useMemo(() => R.reduce((V, Te, Ue) => Ue >= cu ? V : V + Te.height, 0), [
      R,
      cu
    ]), Pr = Nb(), w0 = r.invert || m, Ki = $e === "loading";
    nl.current = U.useMemo(() => cu * H + Fr, [
      cu,
      Fr
    ]), U.useEffect(() => {
      en.current = $r;
    }, [
      $r
    ]), U.useEffect(() => {
      k(true);
    }, []), U.useEffect(() => {
      const V = Ut.current;
      if (V) {
        const Te = V.getBoundingClientRect().height;
        return Kr(Te), T((Ue) => [
          {
            toastId: r.id,
            height: Te,
            position: r.position
          },
          ...Ue
        ]), () => T((Ue) => Ue.filter((We) => We.toastId !== r.id));
      }
    }, [
      T,
      r.id
    ]), U.useLayoutEffect(() => {
      if (!G) return;
      const V = Ut.current, Te = V.style.height;
      V.style.height = "auto";
      const Ue = V.getBoundingClientRect().height;
      V.style.height = Te, Kr(Ue), T((We) => We.find((Ce) => Ce.toastId === r.id) ? We.map((Ce) => Ce.toastId === r.id ? {
        ...Ce,
        height: Ue
      } : Ce) : [
        {
          toastId: r.id,
          height: Ue,
          position: r.position
        },
        ...We
      ]);
    }, [
      G,
      r.title,
      r.description,
      T,
      r.id,
      r.jsx,
      r.action,
      r.cancel
    ]);
    const la = U.useCallback(() => {
      He(true), Zi(nl.current), T((V) => V.filter((Te) => Te.toastId !== r.id)), setTimeout(() => {
        E(r);
      }, Qb);
    }, [
      r,
      E,
      T,
      nl
    ]);
    U.useEffect(() => {
      if (r.promise && $e === "loading" || r.duration === 1 / 0 || r.type === "loading") return;
      let V;
      return p || y || Pr ? (() => {
        if (Wr.current < ki.current) {
          const We = (/* @__PURE__ */ new Date()).getTime() - ki.current;
          en.current = en.current - We;
        }
        Wr.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        en.current !== 1 / 0 && (ki.current = (/* @__PURE__ */ new Date()).getTime(), V = setTimeout(() => {
          r.onAutoClose == null || r.onAutoClose.call(r, r), la();
        }, en.current));
      })(), () => clearTimeout(V);
    }, [
      p,
      y,
      r,
      $e,
      Pr,
      la
    ]), U.useEffect(() => {
      r.delete && (la(), r.onDismiss == null || r.onDismiss.call(r, r));
    }, [
      la,
      r.delete
    ]);
    function O0() {
      var V;
      if (j == null ? void 0 : j.loading) {
        var Te;
        return U.createElement("div", {
          className: Rt(z == null ? void 0 : z.loader, r == null || (Te = r.classNames) == null ? void 0 : Te.loader, "sonner-loader"),
          "data-visible": $e === "loading"
        }, j.loading);
      }
      return U.createElement(Tb, {
        className: Rt(z == null ? void 0 : z.loader, r == null || (V = r.classNames) == null ? void 0 : V.loader),
        visible: $e === "loading"
      });
    }
    const D0 = r.icon || (j == null ? void 0 : j[$e]) || Eb($e);
    var Ir, eo;
    return U.createElement("li", {
      tabIndex: 0,
      ref: Ut,
      className: Rt(g, A0, z == null ? void 0 : z.toast, r == null || (t = r.classNames) == null ? void 0 : t.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[$e], r == null || (a = r.classNames) == null ? void 0 : a[$e]),
      "data-sonner-toast": "",
      "data-rich-colors": (Ir = r.richColors) != null ? Ir : D,
      "data-styled": !(r.jsx || r.unstyled || d),
      "data-mounted": G,
      "data-promise": !!r.promise,
      "data-swiped": iu,
      "data-removed": I,
      "data-visible": z0,
      "data-y-position": C0,
      "data-x-position": N0,
      "data-index": f,
      "data-front": T0,
      "data-swiping": el,
      "data-dismissible": ll,
      "data-type": $e,
      "data-invert": w0,
      "data-swipe-out": tl,
      "data-swipe-direction": Me,
      "data-expanded": !!(p || B && G),
      "data-testid": r.testId,
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": h.length - f,
        "--offset": `${I ? E0 : nl.current}px`,
        "--initial-height": B ? "auto" : `${_0}px`,
        ..._,
        ...r.style
      },
      onDragEnd: () => {
        oe(false), Z(null), ul.current = null;
      },
      onPointerDown: (V) => {
        V.button !== 2 && (Ki || !ll || (Jr.current = /* @__PURE__ */ new Date(), Zi(nl.current), V.target.setPointerCapture(V.pointerId), V.target.tagName !== "BUTTON" && (oe(true), ul.current = {
          x: V.clientX,
          y: V.clientY
        })));
      },
      onPointerUp: () => {
        var V, Te, Ue;
        if (tl || !ll) return;
        ul.current = null;
        const We = Number(((V = Ut.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), su = Number(((Te = Ut.current) == null ? void 0 : Te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ce = (/* @__PURE__ */ new Date()).getTime() - ((Ue = Jr.current) == null ? void 0 : Ue.getTime()), st = L === "x" ? We : su, ru = Math.abs(st) / Ce;
        if (Math.abs(st) >= Xb || ru > 0.11) {
          Zi(nl.current), r.onDismiss == null || r.onDismiss.call(r, r), ge(L === "x" ? We > 0 ? "right" : "left" : su > 0 ? "down" : "up"), la(), uu(true);
          return;
        } else {
          var St, xt;
          (St = Ut.current) == null || St.style.setProperty("--swipe-amount-x", "0px"), (xt = Ut.current) == null || xt.style.setProperty("--swipe-amount-y", "0px");
        }
        al(false), oe(false), Z(null);
      },
      onPointerMove: (V) => {
        var Te, Ue, We;
        if (!ul.current || !ll || ((Te = window.getSelection()) == null ? void 0 : Te.toString().length) > 0) return;
        const Ce = V.clientY - ul.current.y, st = V.clientX - ul.current.x;
        var ru;
        const St = (ru = e.swipeDirections) != null ? ru : Vb(O);
        !L && (Math.abs(st) > 1 || Math.abs(Ce) > 1) && Z(Math.abs(st) > Math.abs(Ce) ? "x" : "y");
        let xt = {
          x: 0,
          y: 0
        };
        const to = (Oa) => 1 / (1.5 + Math.abs(Oa) / 20);
        if (L === "y") {
          if (St.includes("top") || St.includes("bottom")) if (St.includes("top") && Ce < 0 || St.includes("bottom") && Ce > 0) xt.y = Ce;
          else {
            const Oa = Ce * to(Ce);
            xt.y = Math.abs(Oa) < Math.abs(Ce) ? Oa : Ce;
          }
        } else if (L === "x" && (St.includes("left") || St.includes("right"))) if (St.includes("left") && st < 0 || St.includes("right") && st > 0) xt.x = st;
        else {
          const Oa = st * to(st);
          xt.x = Math.abs(Oa) < Math.abs(st) ? Oa : st;
        }
        (Math.abs(xt.x) > 0 || Math.abs(xt.y) > 0) && al(true), (Ue = Ut.current) == null || Ue.style.setProperty("--swipe-amount-x", `${xt.x}px`), (We = Ut.current) == null || We.style.setProperty("--swipe-amount-y", `${xt.y}px`);
      }
    }, M0 && !r.jsx && $e !== "loading" ? U.createElement("button", {
      "aria-label": q,
      "data-disabled": Ki,
      "data-close-button": true,
      onClick: Ki || !ll ? () => {
      } : () => {
        la(), r.onDismiss == null || r.onDismiss.call(r, r);
      },
      className: Rt(z == null ? void 0 : z.closeButton, r == null || (l = r.classNames) == null ? void 0 : l.closeButton)
    }, (eo = j == null ? void 0 : j.close) != null ? eo : Cb) : null, ($e || r.icon || r.promise) && r.icon !== null && ((j == null ? void 0 : j[$e]) !== null || r.icon) ? U.createElement("div", {
      "data-icon": "",
      className: Rt(z == null ? void 0 : z.icon, r == null || (n = r.classNames) == null ? void 0 : n.icon)
    }, r.promise || r.type === "loading" && !r.icon ? r.icon || O0() : null, r.type !== "loading" ? D0 : null) : null, U.createElement("div", {
      "data-content": "",
      className: Rt(z == null ? void 0 : z.content, r == null || (u = r.classNames) == null ? void 0 : u.content)
    }, U.createElement("div", {
      "data-title": "",
      className: Rt(z == null ? void 0 : z.title, r == null || (i = r.classNames) == null ? void 0 : i.title)
    }, r.jsx ? r.jsx : typeof r.title == "function" ? r.title() : r.title), r.description ? U.createElement("div", {
      "data-description": "",
      className: Rt(b, R0, z == null ? void 0 : z.description, r == null || (c = r.classNames) == null ? void 0 : c.description)
    }, typeof r.description == "function" ? r.description() : r.description) : null), U.isValidElement(r.cancel) ? r.cancel : r.cancel && Ru(r.cancel) ? U.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: r.cancelButtonStyle || C,
      onClick: (V) => {
        Ru(r.cancel) && ll && (r.cancel.onClick == null || r.cancel.onClick.call(r.cancel, V), la());
      },
      className: Rt(z == null ? void 0 : z.cancelButton, r == null || (s = r.classNames) == null ? void 0 : s.cancelButton)
    }, r.cancel.label) : null, U.isValidElement(r.action) ? r.action : r.action && Ru(r.action) ? U.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: r.actionButtonStyle || A,
      onClick: (V) => {
        Ru(r.action) && (r.action.onClick == null || r.action.onClick.call(r.action, V), !V.defaultPrevented && la());
      },
      className: Rt(z == null ? void 0 : z.actionButton, r == null || (o = r.classNames) == null ? void 0 : o.actionButton)
    }, r.action.label) : null);
  };
  function Xf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
  }
  function kb(e, t) {
    const a = {};
    return [
      e,
      t
    ].forEach((l, n) => {
      const u = n === 1, i = u ? "--mobile-offset" : "--offset", c = u ? Lb : qb;
      function s(o) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((m) => {
          a[`${i}-${m}`] = typeof o == "number" ? `${o}px` : o;
        });
      }
      typeof l == "number" || typeof l == "string" ? s(l) : typeof l == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((o) => {
        l[o] === void 0 ? a[`${i}-${o}`] = c : a[`${i}-${o}`] = typeof l[o] == "number" ? `${l[o]}px` : l[o];
      }) : s(c);
    }), a;
  }
  const Kb = U.forwardRef(function(t, a) {
    const { id: l, invert: n, position: u = "bottom-right", hotkey: i = [
      "altKey",
      "KeyT"
    ], expand: c, closeButton: s, className: o, offset: m, mobileOffset: r, theme: d = "light", richColors: y, duration: T, style: M, visibleToasts: R = Bb, toastOptions: f, dir: h = Xf(), gap: p = Gb, icons: E, containerAriaLabel: D = "Notifications" } = t, [x, _] = U.useState([]), C = U.useMemo(() => l ? x.filter((G) => G.toasterId === l) : x.filter((G) => !G.toasterId), [
      x,
      l
    ]), A = U.useMemo(() => Array.from(new Set([
      u
    ].concat(C.filter((G) => G.position).map((G) => G.position)))), [
      C,
      u
    ]), [g, b] = U.useState([]), [w, O] = U.useState(false), [H, B] = U.useState(false), [z, j] = U.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = U.useRef(null), L = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Z = U.useRef(null), Me = U.useRef(false), ge = U.useCallback((G) => {
      _((k) => {
        var I;
        return (I = k.find((He) => He.id === G.id)) != null && I.delete || Ze.dismiss(G.id), k.filter(({ id: He }) => He !== G.id);
      });
    }, []);
    return U.useEffect(() => Ze.subscribe((G) => {
      if (G.dismiss) {
        requestAnimationFrame(() => {
          _((k) => k.map((I) => I.id === G.id ? {
            ...I,
            delete: true
          } : I));
        });
        return;
      }
      setTimeout(() => {
        ly.flushSync(() => {
          _((k) => {
            const I = k.findIndex((He) => He.id === G.id);
            return I !== -1 ? [
              ...k.slice(0, I),
              {
                ...k[I],
                ...G
              },
              ...k.slice(I + 1)
            ] : [
              G,
              ...k
            ];
          });
        });
      });
    }), [
      x
    ]), U.useEffect(() => {
      if (d !== "system") {
        j(d);
        return;
      }
      if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? j("dark") : j("light")), typeof window > "u") return;
      const G = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        G.addEventListener("change", ({ matches: k }) => {
          j(k ? "dark" : "light");
        });
      } catch {
        G.addListener(({ matches: I }) => {
          try {
            j(I ? "dark" : "light");
          } catch (He) {
            console.error(He);
          }
        });
      }
    }, [
      d
    ]), U.useEffect(() => {
      x.length <= 1 && O(false);
    }, [
      x
    ]), U.useEffect(() => {
      const G = (k) => {
        var I;
        if (i.every((oe) => k[oe] || k.code === oe)) {
          var el;
          O(true), (el = q.current) == null || el.focus();
        }
        k.code === "Escape" && (document.activeElement === q.current || (I = q.current) != null && I.contains(document.activeElement)) && O(false);
      };
      return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
    }, [
      i
    ]), U.useEffect(() => {
      if (q.current) return () => {
        Z.current && (Z.current.focus({
          preventScroll: true
        }), Z.current = null, Me.current = false);
      };
    }, [
      q.current
    ]), U.createElement("section", {
      ref: a,
      "aria-label": `${D} ${L}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, A.map((G, k) => {
      var I;
      const [He, el] = G.split("-");
      return C.length ? U.createElement("ol", {
        key: G,
        dir: h === "auto" ? Xf() : h,
        tabIndex: -1,
        ref: q,
        className: o,
        "data-sonner-toaster": true,
        "data-sonner-theme": z,
        "data-y-position": He,
        "data-x-position": el,
        style: {
          "--front-toast-height": `${((I = g[0]) == null ? void 0 : I.height) || 0}px`,
          "--width": `${Yb}px`,
          "--gap": `${p}px`,
          ...M,
          ...kb(m, r)
        },
        onBlur: (oe) => {
          Me.current && !oe.currentTarget.contains(oe.relatedTarget) && (Me.current = false, Z.current && (Z.current.focus({
            preventScroll: true
          }), Z.current = null));
        },
        onFocus: (oe) => {
          oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || Me.current || (Me.current = true, Z.current = oe.relatedTarget);
        },
        onMouseEnter: () => O(true),
        onMouseMove: () => O(true),
        onMouseLeave: () => {
          H || O(false);
        },
        onDragEnd: () => O(false),
        onPointerDown: (oe) => {
          oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || B(true);
        },
        onPointerUp: () => B(false)
      }, C.filter((oe) => !oe.position && k === 0 || oe.position === G).map((oe, tl) => {
        var uu, iu;
        return U.createElement(Zb, {
          key: oe.id,
          icons: E,
          index: tl,
          toast: oe,
          defaultRichColors: y,
          duration: (uu = f == null ? void 0 : f.duration) != null ? uu : T,
          className: f == null ? void 0 : f.className,
          descriptionClassName: f == null ? void 0 : f.descriptionClassName,
          invert: n,
          visibleToasts: R,
          closeButton: (iu = f == null ? void 0 : f.closeButton) != null ? iu : s,
          interacting: H,
          position: G,
          style: f == null ? void 0 : f.style,
          unstyled: f == null ? void 0 : f.unstyled,
          classNames: f == null ? void 0 : f.classNames,
          cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
          actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
          closeButtonAriaLabel: f == null ? void 0 : f.closeButtonAriaLabel,
          removeToast: ge,
          toasts: C.filter((al) => al.position == oe.position),
          heights: g.filter((al) => al.position == oe.position),
          setHeights: b,
          expandByDefault: c,
          gap: p,
          expanded: w,
          swipeDirections: t.swipeDirections
        });
      })) : null;
    }));
  });
  g0 = function({ to: e = "/", label: t = "Back to hub" }) {
    return S.jsx(wl, {
      to: e,
      className: "floating-back",
      "aria-label": t,
      title: t,
      children: S.jsx("span", {
        className: "floating-back__glyph",
        "aria-hidden": true,
        children: "\u2190"
      })
    });
  };
  function on({ title: e, children: t }) {
    return S.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        S.jsx(g0, {
          label: `Back to hub \u2014 ${e}`
        }),
        S.jsx("div", {
          className: "iframe-stage iframe-stage--react",
          children: t
        })
      ]
    });
  }
  const Zu = [
    {
      id: "motherload",
      title: "Motherload",
      kind: "react",
      path: "/motherload"
    },
    {
      id: "checkers",
      title: "Checkers",
      kind: "react",
      path: "/checkers"
    },
    {
      id: "chess",
      title: "Chess",
      kind: "react",
      path: "/chess"
    },
    {
      id: "minesweeper",
      title: "Minesweeper",
      kind: "iframe",
      href: "/games/minesweeper/index.html"
    },
    {
      id: "snake",
      title: "Snake",
      kind: "react",
      path: "/snake"
    },
    {
      id: "typing",
      title: "Typing",
      kind: "react",
      path: "/typing"
    }
  ], Qf = [
    {
      id: "mp-snake",
      title: "Snake"
    },
    {
      id: "mp-chess",
      title: "Chess"
    },
    {
      id: "mp-checkers",
      title: "Checkers"
    },
    {
      id: "mp-fighter",
      title: "Fighter"
    }
  ], v0 = [
    {
      id: "fighting-game",
      title: "Fighting game",
      kind: "iframe",
      href: "/games/fighting-game/index.html"
    },
    {
      id: "kings-and-pigs",
      title: "Kings and pigs",
      kind: "iframe",
      href: "/games/kings-and-pigs/index.html"
    },
    {
      id: "sunnyland",
      title: "Sunnyland platformer",
      kind: "iframe",
      href: "/games/sunnyland-platformer/index.html"
    },
    {
      id: "tower-defense",
      title: "Tower defense",
      kind: "iframe",
      href: "/games/tower-defense/index.html"
    }
  ], Jb = [
    ...Zu,
    ...v0
  ], sl = [
    "hub-card--c0",
    "hub-card--c1",
    "hub-card--c2",
    "hub-card--c3",
    "hub-card--c4",
    "hub-card--c5",
    "hub-card--c6",
    "hub-card--c7",
    "hub-card--c8",
    "hub-card--c9",
    "hub-card--c10"
  ];
  function $b() {
    return S.jsx("div", {
      className: "app-root app-root--home hub-page",
      children: S.jsxs("div", {
        className: "hub",
        children: [
          S.jsxs("header", {
            className: "hub__header",
            children: [
              S.jsx("h1", {
                className: "hub__title hub__title--pixel",
                children: "WEB DEV EXPERIMENTS"
              }),
              S.jsx("p", {
                className: "hub__subtitle hub__subtitle--pixel",
                children: "CLIENT ONLY, STATIC WEBPAGE FOR HTML, JS, REACT IDEAS"
              })
            ]
          }),
          S.jsxs("section", {
            className: "hub__section",
            "aria-labelledby": "hub-personal-heading",
            children: [
              S.jsx("h2", {
                id: "hub-personal-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Single player gamers"
              }),
              S.jsx("div", {
                className: "hub__grid",
                children: Zu.map((e, t) => S.jsx(wl, {
                  to: e.kind === "iframe" ? `/play/${e.id}` : e.path,
                  className: `hub-card ${sl[t % sl.length]}`,
                  children: S.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          S.jsxs("section", {
            className: "hub__section",
            "aria-labelledby": "hub-multiplayer-heading",
            children: [
              S.jsx("h2", {
                id: "hub-multiplayer-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Online Multiplayer"
              }),
              S.jsx("div", {
                className: "hub__grid",
                children: Qf.map((e, t) => S.jsx(wl, {
                  to: "/multiplayer",
                  className: `hub-card ${sl[(Zu.length + t) % sl.length]}`,
                  children: S.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          S.jsxs("section", {
            className: "hub__section hub__section--tutorial",
            "aria-labelledby": "hub-chris-courses-heading",
            children: [
              S.jsx("h2", {
                id: "hub-chris-courses-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Chris Courses tutorials"
              }),
              S.jsxs("p", {
                className: "hub__credit",
                children: [
                  "Fighting game, Kings and Pigs, Sunnyland platformer, and Tower defence follow tutorials by",
                  " ",
                  S.jsx("a", {
                    href: "https://www.youtube.com/c/chriscourses",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Chris Courses"
                  }),
                  " ",
                  "on YouTube."
                ]
              }),
              S.jsx("div", {
                className: "hub__grid",
                children: v0.map((e, t) => S.jsx(wl, {
                  to: e.kind === "iframe" ? `/play/${e.id}` : e.path,
                  className: `hub-card ${sl[(Zu.length + Qf.length + t) % sl.length]}`,
                  children: S.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          S.jsxs("p", {
            className: "hub__repo hub__repo--pixel",
            children: [
              "PUBLIC REPO \u2014",
              " ",
              S.jsx("a", {
                href: "https://github.com/nicapotato/webdev-experiments",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "https://github.com/nicapotato/webdev-experiments"
              })
            ]
          })
        ]
      })
    });
  }
  function Wb() {
    const { id: e } = pv(), t = Jb.find((a) => a.id === e && a.kind === "iframe");
    return !t || t.kind !== "iframe" ? S.jsx(d0, {
      to: "/",
      replace: true
    }) : S.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        S.jsx(g0, {
          label: `Back to hub \u2014 ${t.title}`
        }),
        S.jsx("div", {
          className: "iframe-stage",
          children: S.jsx("iframe", {
            className: "game-frame",
            src: t.href,
            title: t.title
          })
        })
      ]
    });
  }
  let b0;
  Fb = 16;
  Pb = 2;
  Ib = 9;
  e1 = 8;
  b0 = ({ board: e, selectedSquare: t, possibleMoves: a = [], onSquareClick: l, sideImagesWidth: n = 0, isSidebarOpen: u = true, forcedCapture: i = false, mandatoryPieceSquares: c = [], singleLegalMoveHighlight: s = false, comboContinuePiece: o = null, checkSquare: m = null }) => {
    const [r, d] = v.useState(64), y = () => {
      if (typeof window < "u") {
        const g = window.innerHeight * 0.98, b = u ? 384 : 0, w = n || 0, O = (window.innerWidth - b - w) * 0.98, H = Math.min(g, O);
        return Math.floor(H / 8);
      }
      return 64;
    };
    v.useEffect(() => {
      const g = () => {
        d(y());
      };
      return g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
    }, [
      u,
      n
    ]);
    const T = (g) => {
      if (!g) return {};
      const b = {
        pawn: 0,
        knight: 1,
        queen: 2,
        king: 3,
        bishop: 4,
        rook: 5
      }, w = Fb, O = w * Pb, H = w * Ib, B = r / w, j = (g.color === "white" ? 0 : 1) * w, L = (g.type === "rook" && g.isKing ? e1 : b[g.type]) * w;
      return {
        backgroundImage: "url(/games/chess/chess-cat.png)",
        backgroundPosition: `${-j * B}px ${-L * B}px`,
        backgroundSize: `${O * B}px ${H * B}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%"
      };
    }, M = (g, b) => t && t.row === g && t.col === b, R = (g, b) => a.some((w) => w.row === g && w.col === b), f = (g, b) => a.find((w) => w.row === g && w.col === b), h = (g, b) => c.some((w) => w.row === g && w.col === b), p = (g, b) => o && o.row === g && o.col === b, E = (g, b) => m && m.row === g && m.col === b, D = (g, b) => {
      const w = (g + b) % 2 === 0, O = e[g][b], H = R(g, b), B = M(g, b), z = f(g, b), j = H && (z == null ? void 0 : z.isCapture) === true, q = h(g, b);
      let L = "flex items-center justify-center cursor-pointer relative select-none ";
      return w ? L += "bg-gray-300 " : L += "bg-gray-800 ", B ? E(g, b) ? L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] " : p(g, b) ? L += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : L += "ring-4 ring-blue-500 ring-inset " : H ? s && a.length === 1 ? L += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : i && j ? L += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : L += "ring-2 ring-green-400 ring-inset " : q && O && !B ? L += "ring-2 ring-orange-400 ring-inset " : E(g, b) && O && !B && (L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] "), L;
    }, x = () => ({
      width: `${r}px`,
      height: `${r}px`
    }), _ = (g, b) => {
      const w = e[g][b], O = R(g, b), H = f(g, b), B = O && (H == null ? void 0 : H.isCapture) === true, z = s && a.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : i && B ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", j = i && B ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
      return S.jsxs("div", {
        className: D(g, b),
        style: x(),
        onClick: () => l(g, b),
        children: [
          w && S.jsx("div", {
            className: "absolute inset-0 z-10 select-none pointer-events-none",
            style: T(w)
          }),
          O && !w && S.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center z-[5]",
            children: S.jsx("div", {
              className: z
            })
          }),
          O && w && S.jsx("div", {
            className: `absolute inset-0 rounded pointer-events-none z-[5] ${j}`
          })
        ]
      }, `${g}-${b}`);
    }, C = (g) => {
      const b = [];
      for (let w = 0; w < 8; w++) b.push(_(g, w));
      return S.jsx("div", {
        className: "flex",
        children: b
      }, g);
    }, A = () => {
      const g = [];
      for (let b = 0; b < 8; b++) g.push(C(b));
      return g;
    };
    return S.jsx("div", {
      className: "h-full w-full flex justify-center items-center overflow-visible select-none",
      children: S.jsx("div", {
        className: "border-8 border-gray-700 shadow-2xl select-none",
        style: {
          boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)"
        },
        children: S.jsx("div", {
          className: "flex flex-col",
          children: A()
        })
      })
    });
  };
  S0 = function(e) {
    return e.map((t) => [
      ...t
    ]);
  };
  const Vf = () => ({
    white: {
      kingSide: true,
      queenSide: true
    },
    black: {
      kingSide: true,
      queenSide: true
    }
  });
  function t1(e) {
    return {
      white: {
        ...e.white
      },
      black: {
        ...e.black
      }
    };
  }
  function a1(e, t, a, l, n) {
    const u = t1(e), i = l.color;
    return l.type === "king" && (u[i] = {
      kingSide: false,
      queenSide: false
    }), l.type === "rook" && (t.row === 7 && t.col === 7 && (u.white.kingSide = false), t.row === 7 && t.col === 0 && (u.white.queenSide = false), t.row === 0 && t.col === 7 && (u.black.kingSide = false), t.row === 0 && t.col === 0 && (u.black.queenSide = false)), (n == null ? void 0 : n.type) === "rook" && (a.row === 7 && a.col === 7 && (u.white.kingSide = false), a.row === 7 && a.col === 0 && (u.white.queenSide = false), a.row === 0 && a.col === 7 && (u.black.kingSide = false), a.row === 0 && a.col === 0 && (u.black.queenSide = false)), u;
  }
  function Zf(e, t, a, l, n) {
    if (t !== l && a !== n) return false;
    if (t === l) {
      const i = n > a ? 1 : -1;
      for (let c = a + i; c !== n; c += i) if (e[t][c]) return false;
      return true;
    }
    const u = l > t ? 1 : -1;
    for (let i = t + u; i !== l; i += u) if (e[i][a]) return false;
    return true;
  }
  function kf(e, t, a, l, n) {
    if (Math.abs(l - t) !== Math.abs(n - a) || t === l) return false;
    const u = l > t ? 1 : -1, i = n > a ? 1 : -1;
    let c = t + u, s = a + i;
    for (; c !== l || s !== n; ) {
      if (e[c][s]) return false;
      c += u, s += i;
    }
    return true;
  }
  function l1(e, t, a, l, n) {
    const u = e[t][a];
    if (!u) return false;
    switch (u.type) {
      case "pawn": {
        const i = u.color === "white" ? -1 : 1;
        return l === t + i && (n === a - 1 || n === a + 1);
      }
      case "knight": {
        const i = Math.abs(l - t), c = Math.abs(n - a);
        return i === 2 && c === 1 || i === 1 && c === 2;
      }
      case "king":
        return Math.abs(l - t) <= 1 && Math.abs(n - a) <= 1 && (l !== t || n !== a);
      case "rook":
        return Zf(e, t, a, l, n);
      case "bishop":
        return kf(e, t, a, l, n);
      case "queen":
        return Zf(e, t, a, l, n) || kf(e, t, a, l, n);
      default:
        return false;
    }
  }
  Gt = function(e, t, a, l) {
    for (let n = 0; n < 8; n++) for (let u = 0; u < 8; u++) {
      const i = e[n][u];
      if (i && i.color === l && l1(e, n, u, t, a)) return true;
    }
    return false;
  };
  function x0(e, t) {
    for (let a = 0; a < 8; a++) for (let l = 0; l < 8; l++) {
      const n = e[a][l];
      if ((n == null ? void 0 : n.type) === "king" && n.color === t) return {
        row: a,
        col: l
      };
    }
    return null;
  }
  ja = function(e, t) {
    const a = x0(t, e);
    if (!a) return false;
    const l = e === "white" ? "black" : "white";
    return Gt(t, a.row, a.col, l);
  };
  function Kf(e, t, a, l) {
    const n = S0(e), u = n[t.row][t.col], i = n[a.row][a.col];
    if (u.type === "king" && Math.abs(a.col - t.col) === 2) {
      const s = t.row;
      a.col > t.col ? (n[s][7] = null, n[s][5] = {
        type: "rook",
        color: u.color
      }) : (n[s][0] = null, n[s][3] = {
        type: "rook",
        color: u.color
      });
    }
    n[a.row][a.col] = u, n[t.row][t.col] = null;
    const c = a1(l, t, a, u, i);
    return {
      newBoard: n,
      captured: i,
      rights: c
    };
  }
  const n1 = () => {
    const [e, t] = v.useState({
      board: s(),
      currentPlayer: "white",
      selectedSquare: null,
      possibleMoves: [],
      gameStatus: "playing",
      capturedPieces: {
        white: [],
        black: []
      },
      moveHistory: [],
      pendingPromotion: null,
      castlingRights: Vf()
    }), [a, l] = v.useState(false), n = 360, i = n * 2 + 24 * 2, c = (x) => ({
      height: `calc(100vh${a ? "" : " - 10px"})`,
      width: n,
      filter: x ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: x ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000",
      WebkitUserDrag: "none"
    });
    function s() {
      const x = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let C = 0; C < 8; C++) x[1][C] = {
        type: "pawn",
        color: "black"
      }, x[6][C] = {
        type: "pawn",
        color: "white"
      };
      const _ = [
        "rook",
        "knight",
        "bishop",
        "queen",
        "king",
        "bishop",
        "knight",
        "rook"
      ];
      for (let C = 0; C < 8; C++) x[0][C] = {
        type: _[C],
        color: "black"
      }, x[7][C] = {
        type: _[C],
        color: "white"
      };
      return x;
    }
    const o = (x, _) => {
      if (e.gameStatus === "checkmate" || e.gameStatus === "stalemate") return;
      const C = e.board[x][_], A = e.selectedSquare ? e.board[e.selectedSquare.row][e.selectedSquare.col] : null;
      if (!(!e.selectedSquare && !C)) {
        if (C && C.color === e.currentPlayer) {
          const g = r(x, _, e.board, e.castlingRights);
          t((b) => ({
            ...b,
            selectedSquare: {
              row: x,
              col: _
            },
            possibleMoves: g
          }));
          return;
        }
        if (e.selectedSquare && e.possibleMoves.some((g) => g.row === x && g.col === _)) {
          const g = e.selectedSquare, { newBoard: b, captured: w, rights: O } = Kf(e.board, g, {
            row: x,
            col: _
          }, e.castlingRights);
          if (A.type === "pawn" && (A.color === "white" && x === 0 || A.color === "black" && x === 7)) {
            t((L) => ({
              ...L,
              board: b,
              castlingRights: O,
              selectedSquare: null,
              possibleMoves: [],
              pendingPromotion: {
                row: x,
                col: _,
                color: A.color,
                from: g
              }
            }));
            return;
          }
          const H = {
            ...e.capturedPieces
          };
          w && H[w.color].push(w);
          const B = e.currentPlayer === "white" ? "black" : "white", z = ja(B, b), j = h(B, b, O);
          let q = "playing";
          z ? q = j ? "check" : "checkmate" : j || (q = "stalemate"), t((L) => ({
            ...L,
            board: b,
            castlingRights: O,
            currentPlayer: L.currentPlayer === "white" ? "black" : "white",
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: q,
            capturedPieces: H,
            moveHistory: [
              ...L.moveHistory,
              {
                from: L.selectedSquare,
                to: {
                  row: x,
                  col: _
                },
                piece: A,
                captured: w
              }
            ]
          }));
          return;
        }
        t((g) => ({
          ...g,
          selectedSquare: null,
          possibleMoves: []
        }));
      }
    }, m = (x, _, C, A) => {
      const g = C[x][_];
      if (!g) return [];
      const b = [];
      switch (g.type) {
        case "pawn":
          b.push(...d(x, _, g.color, C));
          break;
        case "rook":
          b.push(...y(x, _, g.color, C));
          break;
        case "knight":
          b.push(...T(x, _, g.color, C));
          break;
        case "bishop":
          b.push(...M(x, _, g.color, C));
          break;
        case "queen":
          b.push(...R(x, _, g.color, C));
          break;
        case "king":
          b.push(...f(x, _, g.color, C, A));
          break;
      }
      return b;
    }, r = (x, _, C, A) => {
      const g = C[x][_];
      if (!g) return [];
      const b = m(x, _, C, A), w = g.color;
      return b.filter((O) => {
        const { newBoard: H } = Kf(C, {
          row: x,
          col: _
        }, O, A);
        let B = H;
        return g.type === "pawn" && (O.row === 0 || O.row === 7) && (B = S0(H), B[O.row][O.col] = {
          type: "queen",
          color: g.color
        }), !ja(w, B);
      });
    }, d = (x, _, C, A) => {
      const g = [], b = C === "white" ? -1 : 1, w = C === "white" ? 6 : 1;
      x + b >= 0 && x + b < 8 && !A[x + b][_] && (g.push({
        row: x + b,
        col: _
      }), x === w && !A[x + 2 * b][_] && g.push({
        row: x + 2 * b,
        col: _
      }));
      for (const O of [
        -1,
        1
      ]) {
        const H = _ + O;
        if (H >= 0 && H < 8 && x + b >= 0 && x + b < 8) {
          const B = A[x + b][H];
          B && B.color !== C && g.push({
            row: x + b,
            col: H
          });
        }
      }
      return g;
    }, y = (x, _, C, A) => {
      const g = [], b = [
        [
          0,
          1
        ],
        [
          0,
          -1
        ],
        [
          1,
          0
        ],
        [
          -1,
          0
        ]
      ];
      for (const [w, O] of b) for (let H = 1; H < 8; H++) {
        const B = x + w * H, z = _ + O * H;
        if (B < 0 || B >= 8 || z < 0 || z >= 8) break;
        const j = A[B][z];
        if (!j) g.push({
          row: B,
          col: z
        });
        else {
          j.color !== C && g.push({
            row: B,
            col: z
          });
          break;
        }
      }
      return g;
    }, T = (x, _, C, A) => {
      const g = [], b = [
        [
          -2,
          -1
        ],
        [
          -2,
          1
        ],
        [
          -1,
          -2
        ],
        [
          -1,
          2
        ],
        [
          1,
          -2
        ],
        [
          1,
          2
        ],
        [
          2,
          -1
        ],
        [
          2,
          1
        ]
      ];
      for (const [w, O] of b) {
        const H = x + w, B = _ + O;
        if (H >= 0 && H < 8 && B >= 0 && B < 8) {
          const z = A[H][B];
          (!z || z.color !== C) && g.push({
            row: H,
            col: B
          });
        }
      }
      return g;
    }, M = (x, _, C, A) => {
      const g = [], b = [
        [
          1,
          1
        ],
        [
          1,
          -1
        ],
        [
          -1,
          1
        ],
        [
          -1,
          -1
        ]
      ];
      for (const [w, O] of b) for (let H = 1; H < 8; H++) {
        const B = x + w * H, z = _ + O * H;
        if (B < 0 || B >= 8 || z < 0 || z >= 8) break;
        const j = A[B][z];
        if (!j) g.push({
          row: B,
          col: z
        });
        else {
          j.color !== C && g.push({
            row: B,
            col: z
          });
          break;
        }
      }
      return g;
    }, R = (x, _, C, A) => [
      ...y(x, _, C, A),
      ...M(x, _, C, A)
    ], f = (x, _, C, A, g) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
      const b = [], w = [
        [
          -1,
          -1
        ],
        [
          -1,
          0
        ],
        [
          -1,
          1
        ],
        [
          0,
          -1
        ],
        [
          0,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          0
        ],
        [
          1,
          1
        ]
      ];
      for (const [H, B] of w) {
        const z = x + H, j = _ + B;
        if (z >= 0 && z < 8 && j >= 0 && j < 8) {
          const q = A[z][j];
          (!q || q.color !== C) && b.push({
            row: z,
            col: j
          });
        }
      }
      const O = C === "white" ? "black" : "white";
      return C === "white" && x === 7 && _ === 4 && (g.white.kingSide && ((_a2 = A[7][7]) == null ? void 0 : _a2.type) === "rook" && ((_b2 = A[7][7]) == null ? void 0 : _b2.color) === "white" && !A[7][5] && !A[7][6] && !ja("white", A) && !Gt(A, 7, 5, O) && !Gt(A, 7, 6, O) && b.push({
        row: 7,
        col: 6
      }), g.white.queenSide && ((_c2 = A[7][0]) == null ? void 0 : _c2.type) === "rook" && ((_d2 = A[7][0]) == null ? void 0 : _d2.color) === "white" && !A[7][1] && !A[7][2] && !A[7][3] && !ja("white", A) && !Gt(A, 7, 3, O) && !Gt(A, 7, 2, O) && b.push({
        row: 7,
        col: 2
      })), C === "black" && x === 0 && _ === 4 && (g.black.kingSide && ((_e2 = A[0][7]) == null ? void 0 : _e2.type) === "rook" && ((_f2 = A[0][7]) == null ? void 0 : _f2.color) === "black" && !A[0][5] && !A[0][6] && !ja("black", A) && !Gt(A, 0, 5, O) && !Gt(A, 0, 6, O) && b.push({
        row: 0,
        col: 6
      }), g.black.queenSide && ((_g2 = A[0][0]) == null ? void 0 : _g2.type) === "rook" && ((_h2 = A[0][0]) == null ? void 0 : _h2.color) === "black" && !A[0][1] && !A[0][2] && !A[0][3] && !ja("black", A) && !Gt(A, 0, 3, O) && !Gt(A, 0, 2, O) && b.push({
        row: 0,
        col: 2
      })), b;
    }, h = (x, _, C) => {
      for (let A = 0; A < 8; A++) for (let g = 0; g < 8; g++) {
        const b = _[A][g];
        if (b && b.color === x && r(A, g, _, C).length > 0) return true;
      }
      return false;
    }, p = (x) => {
      if (!e.pendingPromotion) return;
      const { row: _, col: C, color: A, from: g } = e.pendingPromotion, b = e.board.map((z) => [
        ...z
      ]);
      b[_][C] = {
        type: x,
        color: A
      };
      const w = A === "white" ? "black" : "white", O = ja(w, b), H = h(w, b, e.castlingRights);
      let B = "playing";
      O ? B = H ? "check" : "checkmate" : H || (B = "stalemate"), t((z) => ({
        ...z,
        board: b,
        currentPlayer: z.currentPlayer === "white" ? "black" : "white",
        gameStatus: B,
        pendingPromotion: null,
        moveHistory: [
          ...z.moveHistory,
          {
            from: g,
            to: {
              row: _,
              col: C
            },
            piece: {
              type: x,
              color: A
            },
            captured: null,
            promotion: true
          }
        ]
      }));
    }, E = () => {
      t({
        board: s(),
        currentPlayer: "white",
        selectedSquare: null,
        possibleMoves: [],
        gameStatus: "playing",
        capturedPieces: {
          white: [],
          black: []
        },
        moveHistory: [],
        pendingPromotion: null,
        castlingRights: Vf()
      });
    }, D = e.gameStatus === "check" || e.gameStatus === "checkmate" ? x0(e.board, e.currentPlayer) : null;
    return S.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        S.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 144
        }),
        S.jsx("button", {
          onClick: () => l((x) => !x),
          className: "fixed top-4 right-4 z-[100] bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-xs",
          style: {
            fontSize: "10px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
          },
          "aria-pressed": a,
          "aria-label": a ? "Hide sidebar" : "Show sidebar",
          children: a ? "Hide Panel" : "Show Panel"
        }),
        S.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            S.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                S.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "black")
                }),
                S.jsx("div", {
                  children: S.jsx(b0, {
                    board: e.board,
                    selectedSquare: e.selectedSquare,
                    possibleMoves: e.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: a,
                    checkSquare: D
                  })
                }),
                S.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "White player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "white" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "white")
                })
              ]
            }),
            a && S.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                S.jsx("div", {
                  className: "mb-6",
                  children: S.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Chess Game"
                  })
                }),
                S.jsxs("div", {
                  className: "mb-6",
                  children: [
                    S.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        S.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${e.currentPlayer === "white" ? "bg-blue-600 border-blue-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            e.currentPlayer === "white" ? "White" : "Black",
                            " to move"
                          ]
                        }),
                        e.gameStatus === "check" && S.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Check!"
                        }),
                        e.gameStatus === "checkmate" && S.jsx("div", {
                          className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Checkmate!"
                        }),
                        e.gameStatus === "stalemate" && S.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Stalemate!"
                        })
                      ]
                    }),
                    S.jsx("button", {
                      onClick: E,
                      className: "w-full bg-green-600 border-2 border-green-400 hover:bg-green-500 px-6 py-3 text-xs text-white transition-colors",
                      style: {
                        fontSize: "10px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                      },
                      children: "New Game"
                    })
                  ]
                }),
                S.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    S.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        S.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        S.jsxs("div", {
                          className: "mb-4",
                          children: [
                            S.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "White:"
                            }),
                            S.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                e.capturedPieces.white.map((x, _) => S.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Uc(x)
                                }, _)),
                                e.capturedPieces.white.length === 0 && S.jsx("span", {
                                  className: "text-gray-500 text-xs",
                                  style: {
                                    fontSize: "8px",
                                    fontFamily: "'Press Start 2P', monospace"
                                  },
                                  children: "None"
                                })
                              ]
                            })
                          ]
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "Black:"
                            }),
                            S.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                e.capturedPieces.black.map((x, _) => S.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Uc(x)
                                }, _)),
                                e.capturedPieces.black.length === 0 && S.jsx("span", {
                                  className: "text-gray-500 text-xs",
                                  style: {
                                    fontSize: "8px",
                                    fontFamily: "'Press Start 2P', monospace"
                                  },
                                  children: "None"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    S.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        S.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        S.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            e.moveHistory.slice(-12).map((x, _) => S.jsxs("div", {
                              className: "mb-2 text-xs text-gray-200",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                x.piece.color,
                                " ",
                                x.piece.type,
                                ":",
                                " ",
                                String.fromCharCode(97 + x.from.col),
                                8 - x.from.row,
                                " \u2192",
                                " ",
                                String.fromCharCode(97 + x.to.col),
                                8 - x.to.row,
                                x.captured && ` (x${x.captured.type})`,
                                x.promotion && ` (=${x.piece.type})`
                              ]
                            }, _)),
                            e.moveHistory.length === 0 && S.jsx("div", {
                              className: "text-gray-500 italic text-xs",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "No moves yet"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        e.pendingPromotion && S.jsx("div", {
          className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
          children: S.jsxs("div", {
            className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg",
            style: {
              boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)"
            },
            children: [
              S.jsx("h3", {
                className: "text-sm font-bold mb-6 text-center text-green-400",
                style: {
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  textShadow: "2px 2px 0px #000"
                },
                children: "Choose promotion piece"
              }),
              S.jsx("div", {
                className: "flex gap-4 justify-center",
                children: [
                  "queen",
                  "rook",
                  "bishop",
                  "knight"
                ].map((x) => S.jsx("button", {
                  onClick: () => p(x),
                  className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors",
                  style: {
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000"
                  },
                  children: Uc({
                    type: x,
                    color: e.pendingPromotion.color
                  })
                }, x))
              })
            ]
          })
        })
      ]
    });
  }, Uc = (e) => ({
    king: {
      white: "\u2654",
      black: "\u265A"
    },
    queen: {
      white: "\u2655",
      black: "\u265B"
    },
    rook: {
      white: "\u2656",
      black: "\u265C"
    },
    bishop: {
      white: "\u2657",
      black: "\u265D"
    },
    knight: {
      white: "\u2658",
      black: "\u265E"
    },
    pawn: {
      white: "\u2659",
      black: "\u265F"
    }
  })[e.type][e.color], Ei = 8;
  u1 = function(e, t, a) {
    let l = 0;
    for (let n = 0; n < Ei; n++) for (let u = 0; u < Ei; u++) {
      const i = e[n][u];
      i && t(i, n, u) && (l += a(n, u, e).length);
    }
    return l;
  };
  i1 = function(e, t, a, l) {
    if (!t) return [];
    const n = [];
    for (let u = 0; u < Ei; u++) for (let i = 0; i < Ei; i++) {
      const c = e[u][i];
      c && a(c, u, i) && l(u, i, e).length > 0 && n.push({
        row: u,
        col: i
      });
    }
    return n;
  };
  const c1 = () => {
    const [e, t] = v.useState({
      board: s(),
      currentPlayer: "red",
      selectedSquare: null,
      possibleMoves: [],
      gameStatus: "playing",
      capturedPieces: {
        red: 0,
        black: 0
      },
      moveHistory: [],
      mustCapture: false,
      captureSequence: []
    }), [a, l] = v.useState(false), n = 360, i = n * 2 + 24 * 2, c = (g) => ({
      height: `calc(100vh${a ? "" : " - 10px"})`,
      width: n,
      filter: g ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: g ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000",
      WebkitUserDrag: "none"
    });
    function s() {
      const g = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let b = 0; b < 3; b++) for (let w = 0; w < 8; w++) (b + w) % 2 === 1 && (g[b][w] = {
        type: "checker",
        color: "red",
        isKing: false
      });
      for (let b = 5; b < 8; b++) for (let w = 0; w < 8; w++) (b + w) % 2 === 1 && (g[b][w] = {
        type: "checker",
        color: "black",
        isKing: false
      });
      return g;
    }
    const o = (g, b) => {
      const w = e.board[g][b];
      if (e.captureSequence.length > 0 && !e.selectedSquare) {
        const O = e.captureSequence[e.captureSequence.length - 1];
        if (O.to.row !== g || O.to.col !== b) return;
      }
      if (!e.selectedSquare && (!w || w.color === e.currentPlayer)) {
        if (w && w.color === e.currentPlayer) {
          const O = d(g, b, e.board);
          t((H) => ({
            ...H,
            selectedSquare: {
              row: g,
              col: b
            },
            possibleMoves: O
          }));
        }
        return;
      }
      if (e.selectedSquare && e.possibleMoves.some((O) => O.row === g && O.col === b)) {
        const O = e.board.map((z) => [
          ...z
        ]), H = O[e.selectedSquare.row][e.selectedSquare.col];
        if (Math.abs(g - e.selectedSquare.row) === 2) {
          const z = (e.selectedSquare.row + g) / 2, j = (e.selectedSquare.col + b) / 2, q = O[z][j];
          O[z][j] = null;
          const L = {
            ...e.capturedPieces
          };
          L[q.color]++, O[g][b] = H, O[e.selectedSquare.row][e.selectedSquare.col] = null, (H.color === "red" && g === 7 || H.color === "black" && g === 0) && !H.isKing && (O[g][b] = {
            ...H,
            isKing: true
          });
          const Me = m(g, b, O);
          if (Me.length > 0 && !e.captureSequence.length) {
            const ge = [
              ...e.captureSequence,
              {
                from: e.selectedSquare,
                to: {
                  row: g,
                  col: b
                },
                captured: q
              }
            ];
            t((G) => ({
              ...G,
              board: O,
              selectedSquare: {
                row: g,
                col: b
              },
              possibleMoves: Me,
              capturedPieces: L,
              captureSequence: ge
            }));
            return;
          } else if (e.captureSequence.length > 0) {
            const ge = [
              ...e.captureSequence,
              {
                from: e.selectedSquare,
                to: {
                  row: g,
                  col: b
                },
                captured: q
              }
            ], G = m(g, b, O);
            if (G.length > 0) {
              t((k) => ({
                ...k,
                board: O,
                selectedSquare: {
                  row: g,
                  col: b
                },
                possibleMoves: G,
                capturedPieces: L,
                captureSequence: ge
              }));
              return;
            } else {
              const k = e.currentPlayer === "red" ? "black" : "red", I = y(O, k);
              t((He) => ({
                ...He,
                board: O,
                currentPlayer: k,
                selectedSquare: null,
                possibleMoves: [],
                gameStatus: I,
                capturedPieces: L,
                captureSequence: [],
                moveHistory: [
                  ...He.moveHistory,
                  {
                    piece: H,
                    moves: ge
                  }
                ]
              }));
              return;
            }
          } else {
            const ge = e.currentPlayer === "red" ? "black" : "red", G = y(O, ge);
            t((k) => ({
              ...k,
              board: O,
              currentPlayer: ge,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus: G,
              capturedPieces: L,
              captureSequence: [],
              moveHistory: [
                ...k.moveHistory,
                {
                  piece: H,
                  moves: [
                    {
                      from: e.selectedSquare,
                      to: {
                        row: g,
                        col: b
                      },
                      captured: q
                    }
                  ]
                }
              ]
            }));
            return;
          }
        } else {
          O[g][b] = H, O[e.selectedSquare.row][e.selectedSquare.col] = null, (H.color === "red" && g === 7 || H.color === "black" && g === 0) && !H.isKing && (O[g][b] = {
            ...H,
            isKing: true
          });
          const j = e.currentPlayer === "red" ? "black" : "red", q = y(O, j);
          t((L) => ({
            ...L,
            board: O,
            currentPlayer: j,
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: q,
            captureSequence: [],
            moveHistory: [
              ...L.moveHistory,
              {
                piece: H,
                moves: [
                  {
                    from: L.selectedSquare,
                    to: {
                      row: g,
                      col: b
                    },
                    captured: null
                  }
                ]
              }
            ]
          }));
          return;
        }
      }
      t((O) => ({
        ...O,
        selectedSquare: null,
        possibleMoves: []
      }));
    }, m = (g, b, w) => {
      const O = w[g][b];
      if (!O || O.type !== "checker") return [];
      const H = [], B = O.isKing ? [
        [
          -1,
          -1
        ],
        [
          -1,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          1
        ]
      ] : O.color === "red" ? [
        [
          1,
          -1
        ],
        [
          1,
          1
        ]
      ] : [
        [
          -1,
          -1
        ],
        [
          -1,
          1
        ]
      ];
      for (const [z, j] of B) {
        const q = g + 2 * z, L = b + 2 * j, Z = g + z, Me = b + j;
        if (q >= 0 && q < 8 && L >= 0 && L < 8 && !w[q][L]) {
          const ge = w[Z][Me];
          ge && ge.color !== O.color && H.push({
            row: q,
            col: L,
            isCapture: true
          });
        }
      }
      return H;
    }, r = (g, b) => {
      for (let w = 0; w < 8; w++) for (let O = 0; O < 8; O++) {
        const H = g[w][O];
        if (H && H.color === b && m(w, O, g).length > 0) return true;
      }
      return false;
    }, d = (g, b, w) => {
      const O = w[g][b];
      if (!O || O.type !== "checker") return [];
      const H = m(g, b, w);
      if (r(w, O.color) || H.length > 0) return H;
      const B = [], z = O.isKing ? [
        [
          -1,
          -1
        ],
        [
          -1,
          1
        ],
        [
          1,
          -1
        ],
        [
          1,
          1
        ]
      ] : O.color === "red" ? [
        [
          1,
          -1
        ],
        [
          1,
          1
        ]
      ] : [
        [
          -1,
          -1
        ],
        [
          -1,
          1
        ]
      ];
      for (const [j, q] of z) {
        const L = g + j, Z = b + q;
        L >= 0 && L < 8 && Z >= 0 && Z < 8 && !w[L][Z] && B.push({
          row: L,
          col: Z
        });
      }
      return B;
    }, y = (g, b) => {
      let w = false, O = false;
      for (let H = 0; H < 8; H++) {
        for (let B = 0; B < 8; B++) {
          const z = g[H][B];
          if (z && z.color === b && (w = true, d(H, B, g).length > 0)) {
            O = true;
            break;
          }
        }
        if (O) break;
      }
      return !w || !O ? b === "red" ? "black_wins" : "red_wins" : "playing";
    }, T = () => {
      t({
        board: s(),
        currentPlayer: "red",
        selectedSquare: null,
        possibleMoves: [],
        gameStatus: "playing",
        capturedPieces: {
          red: 0,
          black: 0
        },
        moveHistory: [],
        mustCapture: false,
        captureSequence: []
      });
    }, R = ((g) => g.map((b) => b.map((w) => w ? {
      type: "rook",
      color: w.color === "red" ? "white" : "black",
      isKing: w.isKing
    } : null)))(e.board), f = e.gameStatus === "playing" && e.captureSequence.length > 0, h = f && e.captureSequence[e.captureSequence.length - 1].to, p = e.gameStatus === "playing" && e.captureSequence.length === 0, E = e.board, D = e.currentPlayer, x = f || p && r(E, D), _ = f && h ? [
      {
        row: h.row,
        col: h.col
      }
    ] : p ? i1(E, r(E, D), (g, b, w) => g && g.color === D, m) : [], C = p ? u1(E, (g, b, w) => g && g.color === D, d) : 0;
    let A = false;
    return e.gameStatus === "playing" && (e.captureSequence.length > 0 ? A = e.possibleMoves.length === 1 : A = C === 1), S.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        S.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 144
        }),
        S.jsx("button", {
          onClick: () => l((g) => !g),
          className: "fixed top-4 right-4 z-[100] bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-xs",
          style: {
            fontSize: "10px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
          },
          "aria-pressed": a,
          "aria-label": a ? "Hide sidebar" : "Show sidebar",
          children: a ? "Hide Panel" : "Show Panel"
        }),
        S.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            S.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                S.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "black")
                }),
                S.jsx("div", {
                  children: S.jsx(b0, {
                    board: R,
                    selectedSquare: e.selectedSquare,
                    possibleMoves: e.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: a,
                    forcedCapture: x,
                    mandatoryPieceSquares: _,
                    singleLegalMoveHighlight: A,
                    comboContinuePiece: f ? h : null
                  })
                }),
                S.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "Red player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "red" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "red")
                })
              ]
            }),
            a && S.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                S.jsx("div", {
                  className: "mb-6",
                  children: S.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Checkers Game"
                  })
                }),
                S.jsxs("div", {
                  className: "mb-6",
                  children: [
                    S.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        S.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${e.currentPlayer === "red" ? "bg-red-600 border-red-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            e.currentPlayer === "red" ? "Red" : "Black",
                            " to move"
                          ]
                        }),
                        e.gameStatus === "red_wins" && S.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Red Wins!"
                        }),
                        e.gameStatus === "black_wins" && S.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Black Wins!"
                        }),
                        e.gameStatus === "draw" && S.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Draw!"
                        }),
                        e.captureSequence.length > 0 && S.jsx("div", {
                          className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Continue jumping!"
                        })
                      ]
                    }),
                    S.jsx("button", {
                      onClick: T,
                      className: "w-full bg-green-600 border-2 border-green-400 hover:bg-green-500 px-6 py-3 text-xs text-white transition-colors",
                      style: {
                        fontSize: "10px",
                        fontFamily: "'Press Start 2P', monospace",
                        boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                      },
                      children: "New Game"
                    })
                  ]
                }),
                S.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    S.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        S.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        S.jsxs("div", {
                          className: "mb-4",
                          children: [
                            S.jsxs("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                "Red: ",
                                e.capturedPieces.red
                              ]
                            }),
                            S.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: e.capturedPieces.red
                                }, (g, b) => S.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u2656"
                                }, b)),
                                e.capturedPieces.red === 0 && S.jsx("span", {
                                  className: "text-gray-500 text-xs",
                                  style: {
                                    fontSize: "8px",
                                    fontFamily: "'Press Start 2P', monospace"
                                  },
                                  children: "None"
                                })
                              ]
                            })
                          ]
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsxs("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                "Black: ",
                                e.capturedPieces.black
                              ]
                            }),
                            S.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: e.capturedPieces.black
                                }, (g, b) => S.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u265C"
                                }, b)),
                                e.capturedPieces.black === 0 && S.jsx("span", {
                                  className: "text-gray-500 text-xs",
                                  style: {
                                    fontSize: "8px",
                                    fontFamily: "'Press Start 2P', monospace"
                                  },
                                  children: "None"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    S.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        S.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        S.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            e.moveHistory.slice(-12).map((g, b) => S.jsxs("div", {
                              className: "mb-2 text-xs text-gray-200",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                g.piece.color,
                                " ",
                                g.piece.isKing ? "King" : "Checker",
                                ":",
                                " ",
                                g.moves.map((w, O) => `${String.fromCharCode(97 + w.from.col)}${8 - w.from.row}\u2192${String.fromCharCode(97 + w.to.col)}${8 - w.to.row}${w.captured ? "x" : ""}`).join(", ")
                              ]
                            }, b)),
                            e.moveHistory.length === 0 && S.jsx("div", {
                              className: "text-gray-500 italic text-xs",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "No moves yet"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }, s1 = v.lazy(() => wa(() => import("./page-BGoSXjqp.js").then(async (m) => {
    await m.__tla;
    return m;
  }), [])), r1 = v.lazy(() => wa(() => import("./SnakeSinglePlayerPage-BXwBqR1L.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then((e) => ({
    default: e.default
  }))), o1 = v.lazy(() => wa(() => import("./TypingPage-k3ZT7Hld.js"), __vite__mapDeps([10,1,2]))), f1 = v.lazy(() => wa(() => import("./page-C0pb9wzg.js"), __vite__mapDeps([11,2,7,3,4,5,12,13,14,15,16,17]))), d1 = v.lazy(() => wa(() => import("./page-CimH6JAu.js"), __vite__mapDeps([18,1,2,4,5,19,15,6,17,7,16,9,20]))), h1 = v.lazy(() => wa(() => import("./page-CckUpzDj.js"), __vite__mapDeps([21,22,12,5,19,15]))), m1 = v.lazy(() => wa(() => import("./page-CItU7HtB.js"), __vite__mapDeps([23,22,12,5,13,19,15]))), y1 = v.lazy(() => wa(() => import("./page-ByYcrNb6.js"), __vite__mapDeps([24,1,2,14,5,19,15,7,20,8,16,9])));
  function p1() {
    return S.jsxs(yb, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      children: [
        S.jsx(ab, {
          basename: "/",
          children: S.jsx(v.Suspense, {
            fallback: null,
            children: S.jsxs(wv, {
              children: [
                S.jsx(Xe, {
                  path: "/",
                  element: S.jsx($b, {})
                }),
                S.jsx(Xe, {
                  path: "/play/:id",
                  element: S.jsx(Wb, {})
                }),
                S.jsx(Xe, {
                  path: "/motherload",
                  element: S.jsx(on, {
                    title: "Motherload",
                    children: S.jsx(v.Suspense, {
                      fallback: S.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: S.jsx(s1, {})
                    })
                  })
                }),
                S.jsx(Xe, {
                  path: "/chess",
                  element: S.jsx(on, {
                    title: "Chess",
                    children: S.jsx(n1, {})
                  })
                }),
                S.jsx(Xe, {
                  path: "/checkers",
                  element: S.jsx(on, {
                    title: "Checkers",
                    children: S.jsx(c1, {})
                  })
                }),
                S.jsx(Xe, {
                  path: "/snake",
                  element: S.jsx(on, {
                    title: "Snake",
                    children: S.jsx(r1, {})
                  })
                }),
                S.jsx(Xe, {
                  path: "/typing",
                  element: S.jsx(on, {
                    title: "Typing",
                    children: S.jsx(o1, {})
                  })
                }),
                S.jsx(Xe, {
                  path: "/multiplayer",
                  element: S.jsx(f1, {})
                }),
                S.jsx(Xe, {
                  path: "/multiplayer/:roomId/snake",
                  element: S.jsx(d1, {})
                }),
                S.jsx(Xe, {
                  path: "/multiplayer/:roomId/chess",
                  element: S.jsx(h1, {})
                }),
                S.jsx(Xe, {
                  path: "/multiplayer/:roomId/checkers",
                  element: S.jsx(m1, {})
                }),
                S.jsx(Xe, {
                  path: "/multiplayer/:roomId/fighter",
                  element: S.jsx(y1, {})
                }),
                S.jsx(Xe, {
                  path: "*",
                  element: S.jsx(d0, {
                    to: "/",
                    replace: true
                  })
                })
              ]
            })
          })
        }),
        S.jsx(Kb, {
          richColors: true,
          position: "top-center"
        })
      ]
    });
  }
  wg.createRoot(document.getElementById("root")).render(S.jsx(v.StrictMode, {
    children: S.jsx(p1, {})
  }));
})();
export {
  e1 as C,
  g0 as F,
  wl as L,
  U as R,
  Pb as S,
  wa as _,
  __tla,
  od as a,
  v1 as b,
  ly as c,
  b1 as d,
  At as e,
  S0 as f,
  Gt as g,
  i1 as h,
  ja as i,
  S as j,
  u1 as k,
  Ib as l,
  Fb as m,
  pv as n,
  v as r,
  x1 as t,
  Lr as u,
  S1 as z
};
