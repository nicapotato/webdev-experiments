const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OsrsMmgRankingsPage-Cm6Xu8by.js","assets/useOsrsData-BKPooMlN.js","assets/skillIconUrl-DBpzbTaR.js","assets/clsx-B-dksMZM.js","assets/tslib.es6-Xujj8YQZ.js","assets/womClient-DilnkhT5.js","assets/OsrsMmgCalculatorPage-CAXgUaBf.js","assets/OsrsCharacterPage-AnASGru7.js","assets/SnakeSinglePlayerPage-CRfXfdh4.js","assets/button-B8IOCvwu.js","assets/utils-C-0mohrB.js","assets/badge-Cpo2uX4o.js","assets/snake-game-multiplayer-CvBkv9C2.js","assets/gin-DHzzR3IR.js","assets/SnakePlayBackground-DYHqFIpl.js","assets/createLucideIcon--F0SZYBE.js","assets/rotate-ccw-D_BLgTe1.js","assets/grid-3x3-BTaPCe1Z.js","assets/TypingPage-CdUNI5Oi.js","assets/TickTackToePage-QzEeoLZQ.js","assets/page-DlmozDiB.js","assets/chess-game-multiplayer-XMnaIFi4.js","assets/checkers-game-multiplayer-BKVBYG5z.js","assets/fighter-game-multiplayer-DyF09_Ov.js","assets/multiplayer-join-gate-D9l8tTyz.js","assets/users-D1IRGeVa.js","assets/arrow-left-Babfy9Xg.js","assets/page-DsmbOxQQ.js","assets/player-utils-sDKa8flh.js","assets/wifi-BA8-nKCD.js","assets/page-Dt2uwtO2.js","assets/turn-notification-sound-ClLo_GQ1.js","assets/page-DCy19YTg.js","assets/page-CtT7Re-x.js"])))=>i.map(i=>d[i]);
let t1, g0, Ga, U, Ib, St, Yr, od, _1, T1, ly, z1, Jf, At, S0, v, Ha, Qt, c1, i1, e1, Pb, b, A1, pv, R1;
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
  _1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  Jf = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  var $f = {
    exports: {}
  }, Ti = {};
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
  Ti.Fragment = H0;
  Ti.jsx = Wf;
  Ti.jsxs = Wf;
  $f.exports = Ti;
  let Ff, X;
  v = $f.exports;
  Ff = {
    exports: {}
  };
  X = {};
  var Bs = Symbol.for("react.transitional.element"), B0 = Symbol.for("react.portal"), q0 = Symbol.for("react.fragment"), L0 = Symbol.for("react.strict_mode"), Y0 = Symbol.for("react.profiler"), G0 = Symbol.for("react.consumer"), X0 = Symbol.for("react.context"), Q0 = Symbol.for("react.forward_ref"), k0 = Symbol.for("react.suspense"), V0 = Symbol.for("react.memo"), Pf = Symbol.for("react.lazy"), Z0 = Symbol.for("react.activity"), lo = Symbol.iterator;
  function K0(e) {
    return e === null || typeof e != "object" ? null : (e = lo && e[lo] || e["@@iterator"], typeof e == "function" ? e : null);
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
  function kl(e, t, a) {
    this.props = e, this.context = t, this.refs = td, this.updater = a || If;
  }
  kl.prototype.isReactComponent = {};
  kl.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  kl.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function ad() {
  }
  ad.prototype = kl.prototype;
  function qs(e, t, a) {
    this.props = e, this.context = t, this.refs = td, this.updater = a || If;
  }
  var Ls = qs.prototype = new ad();
  Ls.constructor = qs;
  ed(Ls, kl.prototype);
  Ls.isPureReactComponent = true;
  var no = Array.isArray;
  function Bc() {
  }
  var se = {
    H: null,
    A: null,
    T: null,
    S: null
  }, ld = Object.prototype.hasOwnProperty;
  function Ys(e, t, a) {
    var l = a.ref;
    return {
      $$typeof: Bs,
      type: e,
      key: t,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  function J0(e, t) {
    return Ys(e.type, t, e.props);
  }
  function Gs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Bs;
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
  var uo = /\/+/g;
  function $i(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? $0("" + e.key) : t.toString(36);
  }
  function W0(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(Bc, Bc) : (e.status = "pending", e.then(function(t) {
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
  function fl(e, t, a, l, n) {
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
          case Bs:
          case B0:
            i = true;
            break;
          case Pf:
            return i = e._init, fl(i(e._payload), t, a, l, n);
        }
    }
    if (i) return n = n(e), i = l === "" ? "." + $i(e, 0) : l, no(n) ? (a = "", i != null && (a = i.replace(uo, "$&/") + "/"), fl(n, t, a, "", function(o) {
      return o;
    })) : n != null && (Gs(n) && (n = J0(n, a + (n.key == null || e && e.key === n.key ? "" : ("" + n.key).replace(uo, "$&/") + "/") + i)), t.push(n)), 1;
    i = 0;
    var c = l === "" ? "." : l + ":";
    if (no(e)) for (var s = 0; s < e.length; s++) l = e[s], u = c + $i(l, s), i += fl(l, t, a, u, n);
    else if (s = K0(e), typeof s == "function") for (e = s.call(e), s = 0; !(l = e.next()).done; ) l = l.value, u = c + $i(l, s++), i += fl(l, t, a, u, n);
    else if (u === "object") {
      if (typeof e.then == "function") return fl(W0(e), t, a, l, n);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return i;
  }
  function fu(e, t, a) {
    if (e == null) return e;
    var l = [], n = 0;
    return fl(e, l, "", "", function(u) {
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
  var io = typeof reportError == "function" ? reportError : function(e) {
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
    map: fu,
    forEach: function(e, t, a) {
      fu(e, function() {
        t.apply(this, arguments);
      }, a);
    },
    count: function(e) {
      var t = 0;
      return fu(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return fu(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!Gs(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  X.Activity = Z0;
  X.Children = P0;
  X.Component = kl;
  X.Fragment = q0;
  X.Profiler = Y0;
  X.PureComponent = qs;
  X.StrictMode = L0;
  X.Suspense = k0;
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
    return Ys(e.type, n, l);
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
    return Ys(e, u, n);
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
  X.isValidElement = Gs;
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
      $$typeof: V0,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  X.startTransition = function(e) {
    var t = se.T, a = {};
    se.T = a;
    try {
      var l = e(), n = se.S;
      n !== null && n(a, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(Bc, io);
    } catch (u) {
      io(u);
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
  b = Ff.exports;
  U = Jf(b);
  T1 = j0({
    __proto__: null,
    default: U
  }, [
    b
  ]);
  var nd = {
    exports: {}
  }, zi = {}, ud = {
    exports: {}
  }, id = {};
  (function(e) {
    function t(z, j) {
      var q = z.length;
      z.push(j);
      e: for (; 0 < q; ) {
        var L = q - 1 >>> 1, V = z[L];
        if (0 < n(V, j)) z[L] = j, z[q] = V, q = L;
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
        e: for (var L = 0, V = z.length, Ce = V >>> 1; L < Ce; ) {
          var ge = 2 * (L + 1) - 1, G = z[ge], Z = ge + 1, I = z[Z];
          if (0 > n(G, q)) Z < V && 0 > n(I, G) ? (z[L] = I, z[Z] = q, L = Z) : (z[L] = G, z[ge] = q, L = ge);
          else if (Z < V && 0 > n(I, q)) z[L] = I, z[Z] = q, L = Z;
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
    var s = [], o = [], m = 1, r = null, d = 3, y = false, T = false, M = false, A = false, f = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
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
    var x = false, _ = -1, C = 5, R = -1;
    function g() {
      return A ? true : !(e.unstable_now() - R < C);
    }
    function S() {
      if (A = false, x) {
        var z = e.unstable_now();
        R = z;
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
                    var V = L(r.expirationTime <= z);
                    if (z = e.unstable_now(), typeof V == "function") {
                      r.callback = V, E(z), j = true;
                      break t;
                    }
                    r === a(s) && l(s), E(z);
                  } else l(s);
                  r = a(s);
                }
                if (r !== null) j = true;
                else {
                  var Ce = a(o);
                  Ce !== null && B(D, Ce.startTime - z), j = false;
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
      p(S);
    };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), H = O.port2;
      O.port1.onmessage = S, w = function() {
        H.postMessage(null);
      };
    } else w = function() {
      f(S, 0);
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
      A = true;
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
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = q + V, z = {
        id: m++,
        callback: j,
        priorityLevel: z,
        startTime: q,
        expirationTime: V,
        sortIndex: -1
      }, q > L ? (z.sortIndex = q, t(o, z), a(s) === null && z === a(o) && (M ? (h(_), _ = -1) : M = true, B(D, q - L))) : (z.sortIndex = V, t(s, z), T || y || (T = true, x || (x = true, w()))), z;
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
  }, Ye = {};
  var ey = b;
  function sd(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ia() {
  }
  var Le = {
    d: {
      f: ia,
      r: function() {
        throw Error(sd(522));
      },
      D: ia,
      C: ia,
      L: ia,
      m: ia,
      X: ia,
      S: ia,
      M: ia
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
  var gn = ey.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ri(e, t) {
    if (e === "font") return "";
    if (typeof t == "string") return t === "use-credentials" ? t : "";
  }
  Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Le;
  Ye.createPortal = function(e, t) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(sd(299));
    return ay(e, t, null, a);
  };
  Ye.flushSync = function(e) {
    var t = gn.T, a = Le.p;
    try {
      if (gn.T = null, Le.p = 2, e) return e();
    } finally {
      gn.T = t, Le.p = a, Le.d.f();
    }
  };
  Ye.preconnect = function(e, t) {
    typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, Le.d.C(e, t));
  };
  Ye.prefetchDNS = function(e) {
    typeof e == "string" && Le.d.D(e);
  };
  Ye.preinit = function(e, t) {
    if (typeof e == "string" && t && typeof t.as == "string") {
      var a = t.as, l = Ri(a, t.crossOrigin), n = typeof t.integrity == "string" ? t.integrity : void 0, u = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      a === "style" ? Le.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u
      }) : a === "script" && Le.d.X(e, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0
      });
    }
  };
  Ye.preinitModule = function(e, t) {
    if (typeof e == "string") if (typeof t == "object" && t !== null) {
      if (t.as == null || t.as === "script") {
        var a = Ri(t.as, t.crossOrigin);
        Le.d.M(e, {
          crossOrigin: a,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0
        });
      }
    } else t == null && Le.d.M(e);
  };
  Ye.preload = function(e, t) {
    if (typeof e == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
      var a = t.as, l = Ri(a, t.crossOrigin);
      Le.d.L(e, a, {
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
  Ye.preloadModule = function(e, t) {
    if (typeof e == "string") if (t) {
      var a = Ri(t.as, t.crossOrigin);
      Le.d.m(e, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
        crossOrigin: a,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0
      });
    } else Le.d.m(e);
  };
  Ye.requestFormReset = function(e) {
    Le.d.r(e);
  };
  Ye.unstable_batchedUpdates = function(e, t) {
    return e(t);
  };
  Ye.useFormState = function(e, t, a) {
    return gn.H.useFormState(e, t, a);
  };
  Ye.useFormStatus = function() {
    return gn.H.useHostTransitionStatus();
  };
  Ye.version = "19.2.5";
  function rd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd);
    } catch (e) {
      console.error(e);
    }
  }
  rd(), cd.exports = Ye;
  od = cd.exports;
  ly = Jf(od);
  var _e = I0, fd = b, ny = od;
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
  function co(e) {
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
          if (u === a) return co(n), e;
          if (u === l) return co(n), t;
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
  var re = Object.assign, iy = Symbol.for("react.element"), du = Symbol.for("react.transitional.element"), fn = Symbol.for("react.portal"), ml = Symbol.for("react.fragment"), pd = Symbol.for("react.strict_mode"), qc = Symbol.for("react.profiler"), gd = Symbol.for("react.consumer"), Zt = Symbol.for("react.context"), Xs = Symbol.for("react.forward_ref"), Lc = Symbol.for("react.suspense"), Yc = Symbol.for("react.suspense_list"), Qs = Symbol.for("react.memo"), sa = Symbol.for("react.lazy"), Gc = Symbol.for("react.activity"), cy = Symbol.for("react.memo_cache_sentinel"), so = Symbol.iterator;
  function an(e) {
    return e === null || typeof e != "object" ? null : (e = so && e[so] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var sy = Symbol.for("react.client.reference");
  function Xc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === sy ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ml:
        return "Fragment";
      case qc:
        return "Profiler";
      case pd:
        return "StrictMode";
      case Lc:
        return "Suspense";
      case Yc:
        return "SuspenseList";
      case Gc:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case fn:
        return "Portal";
      case Zt:
        return e.displayName || "Context";
      case gd:
        return (e._context.displayName || "Context") + ".Consumer";
      case Xs:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Qs:
        return t = e.displayName || null, t !== null ? t : Xc(e.type) || "Memo";
      case sa:
        t = e._payload, e = e._init;
        try {
          return Xc(e(t));
        } catch {
        }
    }
    return null;
  }
  var dn = Array.isArray, Y = fd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = ny.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xa = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Qc = [], yl = -1;
  function jt(e) {
    return {
      current: e
    };
  }
  function Me(e) {
    0 > yl || (e.current = Qc[yl], Qc[yl] = null, yl--);
  }
  function ue(e, t) {
    yl++, Qc[yl] = e.current, e.current = t;
  }
  var Ot = jt(null), wn = jt(null), ba = jt(null), Ku = jt(null);
  function Ju(e, t) {
    switch (ue(ba, t), ue(wn, e), ue(Ot, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = pf(t), e = Bm(t, e);
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
    Me(Ot), ue(Ot, e);
  }
  function Dl() {
    Me(Ot), Me(wn), Me(ba);
  }
  function kc(e) {
    e.memoizedState !== null && ue(Ku, e);
    var t = Ot.current, a = Bm(t, e.type);
    t !== a && (ue(wn, e), ue(Ot, a));
  }
  function $u(e) {
    wn.current === e && (Me(Ot), Me(wn)), Ku.current === e && (Me(Ku), Xn._currentValue = Xa);
  }
  var Wi, ro;
  function Ba(e) {
    if (Wi === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Wi = t && t[1] || "", ro = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Wi + e + ro;
  }
  var Fi = false;
  function Pi(e, t) {
    if (!e || Fi) return "";
    Fi = true;
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
      Fi = false, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ba(a) : "";
  }
  function ry(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ba(e.type);
      case 16:
        return Ba("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ba("Suspense Fallback") : Ba("Suspense");
      case 19:
        return Ba("SuspenseList");
      case 0:
      case 15:
        return Pi(e.type, false);
      case 11:
        return Pi(e.type.render, false);
      case 1:
        return Pi(e.type, true);
      case 31:
        return Ba("Activity");
      default:
        return "";
    }
  }
  function oo(e) {
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
  var Vc = Object.prototype.hasOwnProperty, ks = _e.unstable_scheduleCallback, Ii = _e.unstable_cancelCallback, oy = _e.unstable_shouldYield, fy = _e.unstable_requestPaint, tt = _e.unstable_now, dy = _e.unstable_getCurrentPriorityLevel, vd = _e.unstable_ImmediatePriority, bd = _e.unstable_UserBlockingPriority, Wu = _e.unstable_NormalPriority, hy = _e.unstable_LowPriority, Sd = _e.unstable_IdlePriority, my = _e.log, yy = _e.unstable_setDisableYieldValue, Kn = null, at = null;
  function ma(e) {
    if (typeof my == "function" && yy(e), at && typeof at.setStrictMode == "function") try {
      at.setStrictMode(Kn, e);
    } catch {
    }
  }
  var lt = Math.clz32 ? Math.clz32 : vy, py = Math.log, gy = Math.LN2;
  function vy(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (py(e) / gy | 0) | 0;
  }
  var hu = 256, mu = 262144, yu = 4194304;
  function qa(e) {
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
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = qa(l) : (i &= c, i !== 0 ? n = qa(i) : a || (a = c & ~e, a !== 0 && (n = qa(a))))) : (c = l & ~u, c !== 0 ? n = qa(c) : i !== 0 ? n = qa(i) : a || (a = l & ~e, a !== 0 && (n = qa(a)))), n === 0 ? 0 : t !== 0 && t !== n && !(t & u) && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function Jn(e, t) {
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
    var e = yu;
    return yu <<= 1, !(yu & 62914560) && (yu = 4194304), e;
  }
  function ec(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function $n(e, t) {
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
  function fo(e, t) {
    var a = P.p;
    try {
      return P.p = e, t();
    } finally {
      P.p = a;
    }
  }
  var Oa = Math.random().toString(36).slice(2), Oe = "__reactFiber$" + Oa, Ke = "__reactProps$" + Oa, Vl = "__reactContainer$" + Oa, Zc = "__reactEvents$" + Oa, xy = "__reactListeners$" + Oa, Ey = "__reactHandles$" + Oa, ho = "__reactResources$" + Oa, Wn = "__reactMarker$" + Oa;
  function Ks(e) {
    delete e[Oe], delete e[Ke], delete e[Zc], delete e[xy], delete e[Ey];
  }
  function pl(e) {
    var t = e[Oe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Vl] || a[Oe]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = xf(e); e !== null; ) {
          if (a = e[Oe]) return a;
          e = xf(e);
        }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Zl(e) {
    if (e = e[Oe] || e[Vl]) {
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
  function Rl(e) {
    var t = e[ho];
    return t || (t = e[ho] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ae(e) {
    e[Wn] = true;
  }
  var Rd = /* @__PURE__ */ new Set(), Ad = {};
  function Pa(e, t) {
    jl(e, t), jl(e + "Capture", t);
  }
  function jl(e, t) {
    for (Ad[e] = t, e = 0; e < t.length; e++) Rd.add(t[e]);
  }
  var _y = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), mo = {}, yo = {};
  function Ty(e) {
    return Vc.call(yo, e) ? true : Vc.call(mo, e) ? false : _y.test(e) ? yo[e] = true : (mo[e] = true, false);
  }
  function Cu(e, t, a) {
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
  function pu(e, t, a) {
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
  function Bt(e, t, a, l) {
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
  function Kc(e) {
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
  function Fu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ry = /[\n"\\]/g;
  function ht(e) {
    return e.replace(Ry, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jc(e, t, a, l, n, u, i, c) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? $c(e, i, ot(t)) : a != null ? $c(e, i, ot(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.name = "" + ot(c) : e.removeAttribute("name");
  }
  function Nd(e, t, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Kc(e);
        return;
      }
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, c || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = c ? e.checked : !!l, e.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), Kc(e);
  }
  function $c(e, t, a) {
    t === "number" && Fu(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Al(e, t, a, l) {
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
    a = ot(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Kc(e);
  }
  function Ul(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ay = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function po(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ay.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Dd(e, t, a) {
    if (t != null && typeof t != "object") throw Error(N(62));
    if (e = e.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && po(e, n, l);
    } else for (var u in t) t.hasOwnProperty(u) && po(e, u, t[u]);
  }
  function Js(e) {
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
  function Nu(e) {
    return Cy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kt() {
  }
  var Wc = null;
  function $s(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gl = null, Ml = null;
  function go(e) {
    var t = Zl(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ke] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Jc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[Ke] || null;
                if (!n) throw Error(N(90));
                Jc(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && Cd(l);
          }
          break e;
        case "textarea":
          wd(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Al(e, !!a.multiple, t, false);
      }
    }
  }
  var tc = false;
  function jd(e, t, a) {
    if (tc) return e(t, a);
    tc = true;
    try {
      var l = e(t);
      return l;
    } finally {
      if (tc = false, (gl !== null || Ml !== null) && (Li(), gl && (t = gl, e = Ml, Ml = gl = null, go(t), e))) for (t = 0; t < e.length; t++) go(e[t]);
    }
  }
  function On(e, t) {
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
  var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fc = false;
  if (Pt) try {
    var ln = {};
    Object.defineProperty(ln, "passive", {
      get: function() {
        Fc = true;
      }
    }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
  } catch {
    Fc = false;
  }
  var ya = null, Ws = null, wu = null;
  function Ud() {
    if (wu) return wu;
    var e, t = Ws, a = t.length, l, n = "value" in ya ? ya.value : ya.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var i = a - e;
    for (l = 1; l <= i && t[a - l] === n[u - l]; l++) ;
    return wu = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Ou(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function gu() {
    return true;
  }
  function vo() {
    return false;
  }
  function Je(e) {
    function t(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in e) e.hasOwnProperty(c) && (a = e[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? gu : vo, this.isPropagationStopped = vo, this;
    }
    return re(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = gu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = gu);
      },
      persist: function() {
      },
      isPersistent: gu
    }), t;
  }
  var Ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Mi = Je(Ia), Fn = re({}, Ia, {
    view: 0,
    detail: 0
  }), Ny = Je(Fn), ac, lc, nn, Ci = re({}, Fn, {
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
    getModifierState: Fs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== nn && (nn && e.type === "mousemove" ? (ac = e.screenX - nn.screenX, lc = e.screenY - nn.screenY) : lc = ac = 0, nn = e), ac);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : lc;
    }
  }), bo = Je(Ci), wy = re({}, Ci, {
    dataTransfer: 0
  }), Oy = Je(wy), Dy = re({}, Fn, {
    relatedTarget: 0
  }), nc = Je(Dy), jy = re({}, Ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uy = Je(jy), Hy = re({}, Ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), By = Je(Hy), qy = re({}, Ia, {
    data: 0
  }), So = Je(qy), Ly = {
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
  function Fs() {
    return Xy;
  }
  var Qy = re({}, Fn, {
    key: function(e) {
      if (e.key) {
        var t = Ly[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ou(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fs,
    charCode: function(e) {
      return e.type === "keypress" ? Ou(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ou(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), ky = Je(Qy), Vy = re({}, Ci, {
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
  }), xo = Je(Vy), Zy = re({}, Fn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fs
  }), Ky = Je(Zy), Jy = re({}, Ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = Je(Jy), Wy = re({}, Ci, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = Je(Wy), Py = re({}, Ia, {
    newState: 0,
    oldState: 0
  }), Iy = Je(Py), ep = [
    9,
    13,
    27,
    32
  ], Ps = Pt && "CompositionEvent" in window, vn = null;
  Pt && "documentMode" in document && (vn = document.documentMode);
  var tp = Pt && "TextEvent" in window && !vn, Hd = Pt && (!Ps || vn && 8 < vn && 11 >= vn), Eo = " ", _o = false;
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
  var vl = false;
  function ap(e, t) {
    switch (e) {
      case "compositionend":
        return qd(t);
      case "keypress":
        return t.which !== 32 ? null : (_o = true, Eo);
      case "textInput":
        return e = t.data, e === Eo && _o ? null : e;
      default:
        return null;
    }
  }
  function lp(e, t) {
    if (vl) return e === "compositionend" || !Ps && Bd(e, t) ? (e = Ud(), wu = Ws = ya = null, vl = false, e) : null;
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
  function To(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!np[e.type] : t === "textarea";
  }
  function Ld(e, t, a, l) {
    gl ? Ml ? Ml.push(l) : Ml = [
      l
    ] : gl = l, t = yi(t, "onChange"), 0 < t.length && (a = new Mi("onChange", "change", null, a, l), e.push({
      event: a,
      listeners: t
    }));
  }
  var bn = null, Dn = null;
  function up(e) {
    jm(e, 0);
  }
  function Ni(e) {
    var t = hn(e);
    if (Cd(t)) return e;
  }
  function zo(e, t) {
    if (e === "change") return t;
  }
  var Yd = false;
  if (Pt) {
    var uc;
    if (Pt) {
      var ic = "oninput" in document;
      if (!ic) {
        var Ro = document.createElement("div");
        Ro.setAttribute("oninput", "return;"), ic = typeof Ro.oninput == "function";
      }
      uc = ic;
    } else uc = false;
    Yd = uc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    bn && (bn.detachEvent("onpropertychange", Gd), Dn = bn = null);
  }
  function Gd(e) {
    if (e.propertyName === "value" && Ni(Dn)) {
      var t = [];
      Ld(t, Dn, e, $s(e)), jd(up, t);
    }
  }
  function ip(e, t, a) {
    e === "focusin" ? (Ao(), bn = t, Dn = a, bn.attachEvent("onpropertychange", Gd)) : e === "focusout" && Ao();
  }
  function cp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ni(Dn);
  }
  function sp(e, t) {
    if (e === "click") return Ni(t);
  }
  function rp(e, t) {
    if (e === "input" || e === "change") return Ni(t);
  }
  function op(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : op;
  function jn(e, t) {
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
  function Mo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Co(e, t) {
    var a = Mo(e);
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
      a = Mo(a);
    }
  }
  function Xd(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Qd(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Fu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Fu(e.document);
    }
    return t;
  }
  function Is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var fp = Pt && "documentMode" in document && 11 >= document.documentMode, bl = null, Pc = null, Sn = null, Ic = false;
  function No(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ic || bl == null || bl !== Fu(l) || (l = bl, "selectionStart" in l && Is(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Sn && jn(Sn, l) || (Sn = l, l = yi(Pc, "onSelect"), 0 < l.length && (t = new Mi("onSelect", "select", null, t, a), e.push({
      event: t,
      listeners: l
    }), t.target = bl)));
  }
  function Ua(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Sl = {
    animationend: Ua("Animation", "AnimationEnd"),
    animationiteration: Ua("Animation", "AnimationIteration"),
    animationstart: Ua("Animation", "AnimationStart"),
    transitionrun: Ua("Transition", "TransitionRun"),
    transitionstart: Ua("Transition", "TransitionStart"),
    transitioncancel: Ua("Transition", "TransitionCancel"),
    transitionend: Ua("Transition", "TransitionEnd")
  }, cc = {}, kd = {};
  Pt && (kd = document.createElement("div").style, "AnimationEvent" in window || (delete Sl.animationend.animation, delete Sl.animationiteration.animation, delete Sl.animationstart.animation), "TransitionEvent" in window || delete Sl.transitionend.transition);
  function el(e) {
    if (cc[e]) return cc[e];
    if (!Sl[e]) return e;
    var t = Sl[e], a;
    for (a in t) if (t.hasOwnProperty(a) && a in kd) return cc[e] = t[a];
    return e;
  }
  var Vd = el("animationend"), Zd = el("animationiteration"), Kd = el("animationstart"), dp = el("transitionrun"), hp = el("transitionstart"), mp = el("transitioncancel"), Jd = el("transitionend"), $d = /* @__PURE__ */ new Map(), es = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  es.push("scrollEnd");
  function zt(e, t) {
    $d.set(e, t), Pa(t, [
      e
    ]);
  }
  var Pu = typeof reportError == "function" ? reportError : function(e) {
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
  }, rt = [], xl = 0, er = 0;
  function wi() {
    for (var e = xl, t = er = xl = 0; t < e; ) {
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
  function Oi(e, t, a, l) {
    rt[xl++] = e, rt[xl++] = t, rt[xl++] = a, rt[xl++] = l, er |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function tr(e, t, a, l) {
    return Oi(e, t, a, l), Iu(e);
  }
  function tl(e, t) {
    return Oi(e, null, null, t), Iu(e);
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
  function Iu(e) {
    if (50 < Cn) throw Cn = 0, xs = null, Error(N(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var El = {};
  function yp(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ie(e, t, a, l) {
    return new yp(e, t, a, l);
  }
  function ar(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $t(e, t) {
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
  function Du(e, t, a, l, n, u) {
    var i = 0;
    if (l = e, typeof e == "function") ar(e) && (i = 1);
    else if (typeof e == "string") i = Sg(e, a, Ot.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case Gc:
        return e = Ie(31, a, t, n), e.elementType = Gc, e.lanes = u, e;
      case ml:
        return Qa(a.children, n, u, t);
      case pd:
        i = 8, n |= 24;
        break;
      case qc:
        return e = Ie(12, a, t, n | 2), e.elementType = qc, e.lanes = u, e;
      case Lc:
        return e = Ie(13, a, t, n), e.elementType = Lc, e.lanes = u, e;
      case Yc:
        return e = Ie(19, a, t, n), e.elementType = Yc, e.lanes = u, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Zt:
            i = 10;
            break e;
          case gd:
            i = 9;
            break e;
          case Xs:
            i = 11;
            break e;
          case Qs:
            i = 14;
            break e;
          case sa:
            i = 16, l = null;
            break e;
        }
        i = 29, a = Error(N(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = Ie(i, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Qa(e, t, a, l) {
    return e = Ie(7, e, l, t), e.lanes = a, e;
  }
  function sc(e, t, a) {
    return e = Ie(6, e, null, t), e.lanes = a, e;
  }
  function Pd(e) {
    var t = Ie(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function rc(e, t, a) {
    return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var wo = /* @__PURE__ */ new WeakMap();
  function mt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = wo.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: oo(t)
      }, wo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: oo(t)
    };
  }
  var _l = [], Tl = 0, ei = null, Un = 0, ft = [], dt = 0, Ma = null, Ct = 1, Nt = "";
  function kt(e, t) {
    _l[Tl++] = Un, _l[Tl++] = ei, ei = e, Un = t;
  }
  function Id(e, t, a) {
    ft[dt++] = Ct, ft[dt++] = Nt, ft[dt++] = Ma, Ma = e;
    var l = Ct;
    e = Nt;
    var n = 32 - lt(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - lt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Ct = 1 << 32 - lt(t) + n | a << n | l, Nt = u + e;
    } else Ct = 1 << u | a << n | l, Nt = e;
  }
  function lr(e) {
    e.return !== null && (kt(e, 1), Id(e, 1, 0));
  }
  function nr(e) {
    for (; e === ei; ) ei = _l[--Tl], _l[Tl] = null, Un = _l[--Tl], _l[Tl] = null;
    for (; e === Ma; ) Ma = ft[--dt], ft[dt] = null, Nt = ft[--dt], ft[dt] = null, Ct = ft[--dt], ft[dt] = null;
  }
  function eh(e, t) {
    ft[dt++] = Ct, ft[dt++] = Nt, ft[dt++] = Ma, Ct = t.id, Nt = t.overflow, Ma = e;
  }
  var De = null, ce = null, W = false, Sa = null, yt = false, ts = Error(N(519));
  function Ca(e) {
    var t = Error(N(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Hn(mt(t, e)), ts;
  }
  function Oo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Oe] = e, t[Ke] = l, a) {
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
        for (a = 0; a < Yn.length; a++) K(Yn[a], t);
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
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === true || Hm(t.textContent, a) ? (l.popover != null && (K("beforetoggle", t), K("toggle", t)), l.onScroll != null && K("scroll", t), l.onScrollEnd != null && K("scrollend", t), l.onClick != null && (t.onclick = Kt), t = true) : t = false, t || Ca(e, true);
  }
  function Do(e) {
    for (De = e.return; De; ) switch (De.tag) {
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
        De = De.return;
    }
  }
  function rl(e) {
    if (e !== De) return false;
    if (!W) return Do(e), W = true, false;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Rs(e.type, e.memoizedProps)), a = !a), a && ce && Ca(e), Do(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
      ce = Sf(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
      ce = Sf(e);
    } else t === 27 ? (t = ce, Da(e.type) ? (e = Ns, Ns = null, ce = e) : ce = t) : ce = De ? gt(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ka() {
    ce = De = null, W = false;
  }
  function oc() {
    var e = Sa;
    return e !== null && (ke === null ? ke = e : ke.push.apply(ke, e), Sa = null), e;
  }
  function Hn(e) {
    Sa === null ? Sa = [
      e
    ] : Sa.push(e);
  }
  var as = jt(null), al = null, Jt = null;
  function oa(e, t, a) {
    ue(as, t._currentValue), t._currentValue = a;
  }
  function Wt(e) {
    e._currentValue = as.current, Me(as);
  }
  function ls(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function ns(e, t, a, l) {
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
            u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), ls(u.return, a, e), l || (i = null);
            break e;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(N(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), ls(i, a, e), i = null;
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
  function Kl(e, t, a, l) {
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
      } else if (n === Ku.current) {
        if (i = n.alternate, i === null) throw Error(N(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Xn) : e = [
          Xn
        ]);
      }
      n = n.return;
    }
    e !== null && ns(t, e, a, l), t.flags |= 262144;
  }
  function ti(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ut(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Ja(e) {
    al = e, Jt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function je(e) {
    return th(al, e);
  }
  function vu(e, t) {
    return al === null && Ja(e), th(e, t);
  }
  function th(e, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, Jt === null) {
      if (e === null) throw Error(N(308));
      Jt = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else Jt = Jt.next = t;
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
    $$typeof: Zt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ur() {
    return {
      controller: new pp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Pn(e) {
    e.refCount--, e.refCount === 0 && gp(vp, function() {
      e.controller.abort();
    });
  }
  var xn = null, us = 0, Hl = 0, Cl = null;
  function bp(e, t) {
    if (xn === null) {
      var a = xn = [];
      us = 0, Hl = Nr(), Cl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return us++, t.then(jo, jo), t;
  }
  function jo() {
    if (--us === 0 && xn !== null) {
      Cl !== null && (Cl.status = "fulfilled");
      var e = xn;
      xn = null, Hl = 0, Cl = null;
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
  var Uo = Y.S;
  Y.S = function(e, t) {
    ym = tt(), typeof t == "object" && t !== null && typeof t.then == "function" && bp(e, t), Uo !== null && Uo(e, t);
  };
  var ka = jt(null);
  function ir() {
    var e = ka.current;
    return e !== null ? e : ne.pooledCache;
  }
  function ju(e, t) {
    t === null ? ue(ka, ka.current) : ue(ka, t.pool);
  }
  function ah() {
    var e = ir();
    return e === null ? null : {
      parent: Se._currentValue,
      pool: e
    };
  }
  var Jl = Error(N(460)), cr = Error(N(474)), Di = Error(N(542)), ai = {
    then: function() {
    }
  };
  function Ho(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lh(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Kt, Kt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, qo(e), e;
      default:
        if (typeof t.status == "string") t.then(Kt, Kt);
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
            throw e = t.reason, qo(e), e;
        }
        throw Va = t, Jl;
    }
  }
  function La(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Va = a, Jl) : a;
    }
  }
  var Va = null;
  function Bo() {
    if (Va === null) throw Error(N(459));
    var e = Va;
    return Va = null, e;
  }
  function qo(e) {
    if (e === Jl || e === Di) throw Error(N(483));
  }
  var Nl = null, Bn = 0;
  function bu(e) {
    var t = Bn;
    return Bn += 1, Nl === null && (Nl = []), lh(Nl, e, t);
  }
  function un(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Su(e, t) {
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
      return f = $t(f, h), f.index = 0, f.sibling = null, f;
    }
    function u(f, h, p) {
      return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < h ? (f.flags |= 67108866, h) : p) : (f.flags |= 67108866, h)) : (f.flags |= 1048576, h);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 67108866), f;
    }
    function c(f, h, p, E) {
      return h === null || h.tag !== 6 ? (h = sc(p, f.mode, E), h.return = f, h) : (h = n(h, p), h.return = f, h);
    }
    function s(f, h, p, E) {
      var D = p.type;
      return D === ml ? m(f, h, p.props.children, E, p.key) : h !== null && (h.elementType === D || typeof D == "object" && D !== null && D.$$typeof === sa && La(D) === h.type) ? (h = n(h, p.props), un(h, p), h.return = f, h) : (h = Du(p.type, p.key, p.props, null, f.mode, E), un(h, p), h.return = f, h);
    }
    function o(f, h, p, E) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = rc(p, f.mode, E), h.return = f, h) : (h = n(h, p.children || []), h.return = f, h);
    }
    function m(f, h, p, E, D) {
      return h === null || h.tag !== 7 ? (h = Qa(p, f.mode, E, D), h.return = f, h) : (h = n(h, p), h.return = f, h);
    }
    function r(f, h, p) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = sc("" + h, f.mode, p), h.return = f, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case du:
            return p = Du(h.type, h.key, h.props, null, f.mode, p), un(p, h), p.return = f, p;
          case fn:
            return h = rc(h, f.mode, p), h.return = f, h;
          case sa:
            return h = La(h), r(f, h, p);
        }
        if (dn(h) || an(h)) return h = Qa(h, f.mode, p, null), h.return = f, h;
        if (typeof h.then == "function") return r(f, bu(h), p);
        if (h.$$typeof === Zt) return r(f, vu(f, h), p);
        Su(f, h);
      }
      return null;
    }
    function d(f, h, p, E) {
      var D = h !== null ? h.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return D !== null ? null : c(f, h, "" + p, E);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case du:
            return p.key === D ? s(f, h, p, E) : null;
          case fn:
            return p.key === D ? o(f, h, p, E) : null;
          case sa:
            return p = La(p), d(f, h, p, E);
        }
        if (dn(p) || an(p)) return D !== null ? null : m(f, h, p, E, null);
        if (typeof p.then == "function") return d(f, h, bu(p), E);
        if (p.$$typeof === Zt) return d(f, h, vu(f, p), E);
        Su(f, p);
      }
      return null;
    }
    function y(f, h, p, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return f = f.get(p) || null, c(h, f, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case du:
            return f = f.get(E.key === null ? p : E.key) || null, s(h, f, E, D);
          case fn:
            return f = f.get(E.key === null ? p : E.key) || null, o(h, f, E, D);
          case sa:
            return E = La(E), y(f, h, p, E, D);
        }
        if (dn(E) || an(E)) return f = f.get(p) || null, m(h, f, E, D, null);
        if (typeof E.then == "function") return y(f, h, p, bu(E), D);
        if (E.$$typeof === Zt) return y(f, h, p, vu(h, E), D);
        Su(h, E);
      }
      return null;
    }
    function T(f, h, p, E) {
      for (var D = null, x = null, _ = h, C = h = 0, R = null; _ !== null && C < p.length; C++) {
        _.index > C ? (R = _, _ = null) : R = _.sibling;
        var g = d(f, _, p[C], E);
        if (g === null) {
          _ === null && (_ = R);
          break;
        }
        e && _ && g.alternate === null && t(f, _), h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g, _ = R;
      }
      if (C === p.length) return a(f, _), W && kt(f, C), D;
      if (_ === null) {
        for (; C < p.length; C++) _ = r(f, p[C], E), _ !== null && (h = u(_, h, C), x === null ? D = _ : x.sibling = _, x = _);
        return W && kt(f, C), D;
      }
      for (_ = l(_); C < p.length; C++) R = y(_, f, C, p[C], E), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? C : R.key), h = u(R, h, C), x === null ? D = R : x.sibling = R, x = R);
      return e && _.forEach(function(S) {
        return t(f, S);
      }), W && kt(f, C), D;
    }
    function M(f, h, p, E) {
      if (p == null) throw Error(N(151));
      for (var D = null, x = null, _ = h, C = h = 0, R = null, g = p.next(); _ !== null && !g.done; C++, g = p.next()) {
        _.index > C ? (R = _, _ = null) : R = _.sibling;
        var S = d(f, _, g.value, E);
        if (S === null) {
          _ === null && (_ = R);
          break;
        }
        e && _ && S.alternate === null && t(f, _), h = u(S, h, C), x === null ? D = S : x.sibling = S, x = S, _ = R;
      }
      if (g.done) return a(f, _), W && kt(f, C), D;
      if (_ === null) {
        for (; !g.done; C++, g = p.next()) g = r(f, g.value, E), g !== null && (h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g);
        return W && kt(f, C), D;
      }
      for (_ = l(_); !g.done; C++, g = p.next()) g = y(_, f, C, g.value, E), g !== null && (e && g.alternate !== null && _.delete(g.key === null ? C : g.key), h = u(g, h, C), x === null ? D = g : x.sibling = g, x = g);
      return e && _.forEach(function(w) {
        return t(f, w);
      }), W && kt(f, C), D;
    }
    function A(f, h, p, E) {
      if (typeof p == "object" && p !== null && p.type === ml && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case du:
            e: {
              for (var D = p.key; h !== null; ) {
                if (h.key === D) {
                  if (D = p.type, D === ml) {
                    if (h.tag === 7) {
                      a(f, h.sibling), E = n(h, p.props.children), E.return = f, f = E;
                      break e;
                    }
                  } else if (h.elementType === D || typeof D == "object" && D !== null && D.$$typeof === sa && La(D) === h.type) {
                    a(f, h.sibling), E = n(h, p.props), un(E, p), E.return = f, f = E;
                    break e;
                  }
                  a(f, h);
                  break;
                } else t(f, h);
                h = h.sibling;
              }
              p.type === ml ? (E = Qa(p.props.children, f.mode, E, p.key), E.return = f, f = E) : (E = Du(p.type, p.key, p.props, null, f.mode, E), un(E, p), E.return = f, f = E);
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
              E = rc(p, f.mode, E), E.return = f, f = E;
            }
            return i(f);
          case sa:
            return p = La(p), A(f, h, p, E);
        }
        if (dn(p)) return T(f, h, p, E);
        if (an(p)) {
          if (D = an(p), typeof D != "function") throw Error(N(150));
          return p = D.call(p), M(f, h, p, E);
        }
        if (typeof p.then == "function") return A(f, h, bu(p), E);
        if (p.$$typeof === Zt) return A(f, h, vu(f, p), E);
        Su(f, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, h !== null && h.tag === 6 ? (a(f, h.sibling), E = n(h, p), E.return = f, f = E) : (a(f, h), E = sc(p, f.mode, E), E.return = f, f = E), i(f)) : a(f, h);
    }
    return function(f, h, p, E) {
      try {
        Bn = 0;
        var D = A(f, h, p, E);
        return Nl = null, D;
      } catch (_) {
        if (_ === Jl || _ === Di) throw _;
        var x = Ie(29, _, null, f.mode);
        return x.lanes = E, x.return = f, x;
      } finally {
      }
    };
  }
  var $a = nh(true), uh = nh(false), ra = false;
  function sr(e) {
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
  function is(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function xa(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Ea(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, F & 2) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Iu(e), Wd(e, null, a), t;
    }
    return Oi(e, l, t, a), Iu(e);
  }
  function En(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _d(e, a);
    }
  }
  function fc(e, t) {
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
  var cs = false;
  function _n() {
    if (cs) {
      var e = Cl;
      if (e !== null) throw e;
    }
  }
  function Tn(e, t, a, l) {
    cs = false;
    var n = e.updateQueue;
    ra = false;
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
          d !== 0 && d === Hl && (cs = true), m !== null && (m = m.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          e: {
            var T = e, M = c;
            d = t;
            var A = a;
            switch (M.tag) {
              case 1:
                if (T = M.payload, typeof T == "function") {
                  r = T.call(A, r, d);
                  break e;
                }
                r = T;
                break e;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = M.payload, d = typeof T == "function" ? T.call(A, r, d) : T, d == null) break e;
                r = re({}, r, d);
                break e;
              case 2:
                ra = true;
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
      m === null && (s = r), n.baseState = s, n.firstBaseUpdate = o, n.lastBaseUpdate = m, u === null && (n.shared.lanes = 0), wa |= i, e.lanes = i, e.memoizedState = r;
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
  var Bl = jt(null), li = jt(0);
  function Lo(e, t) {
    e = aa, ue(li, e), ue(Bl, t), aa = e | t.baseLanes;
  }
  function ss() {
    ue(li, aa), ue(Bl, Bl.current);
  }
  function rr() {
    aa = li.current, Me(Bl), Me(li);
  }
  var it = jt(null), pt = null;
  function fa(e) {
    var t = e.alternate;
    ue(ye, ye.current & 1), ue(it, e), pt === null && (t === null || Bl.current !== null || t.memoizedState !== null) && (pt = e);
  }
  function rs(e) {
    ue(ye, ye.current), ue(it, e), pt === null && (pt = e);
  }
  function sh(e) {
    e.tag === 22 ? (ue(ye, ye.current), ue(it, e), pt === null && (pt = e)) : da();
  }
  function da() {
    ue(ye, ye.current), ue(it, it.current);
  }
  function Pe(e) {
    Me(it), pt === e && (pt = null), Me(ye);
  }
  var ye = jt(0);
  function ni(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Ms(a) || Cs(a))) return t;
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
  var It = 0, Q = null, le = null, ve = null, ui = false, wl = false, Wa = false, ii = 0, qn = 0, Ol = null, xp = 0;
  function he() {
    throw Error(N(321));
  }
  function or(e, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < e.length; a++) if (!ut(e[a], t[a])) return false;
    return true;
  }
  function fr(e, t, a, l, n, u) {
    return It = u, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Lh : Er, Wa = false, u = a(l, n), Wa = false, wl && (u = oh(t, a, l, n)), rh(e), u;
  }
  function rh(e) {
    Y.H = Ln;
    var t = le !== null && le.next !== null;
    if (It = 0, ve = le = Q = null, ui = false, qn = 0, Ol = null, t) throw Error(N(300));
    e === null || xe || (e = e.dependencies, e !== null && ti(e) && (xe = true));
  }
  function oh(e, t, a, l) {
    Q = e;
    var n = 0;
    do {
      if (wl && (Ol = null), qn = 0, wl = false, 25 <= n) throw Error(N(301));
      if (n += 1, ve = le = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = Yh, u = t(a, l);
    } while (wl);
    return u;
  }
  function Ep() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? In(t) : t, e = e.useState()[0], (le !== null ? le.memoizedState : null) !== e && (Q.flags |= 1024), t;
  }
  function dr() {
    var e = ii !== 0;
    return ii = 0, e;
  }
  function hr(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function mr(e) {
    if (ui) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ui = false;
    }
    It = 0, ve = le = Q = null, wl = false, qn = ii = 0, Ol = null;
  }
  function qe() {
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
  function ji() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function In(e) {
    var t = qn;
    return qn += 1, Ol === null && (Ol = []), e = lh(Ol, e, t), t = Q, (ve === null ? t.memoizedState : ve.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Lh : Er), e;
  }
  function Ui(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return In(e);
      if (e.$$typeof === Zt) return je(e);
    }
    throw Error(N(438, String(e)));
  }
  function yr(e) {
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
    }), a === null && (a = ji(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = cy;
    return t.index++, a;
  }
  function ea(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Uu(e) {
    var t = pe();
    return pr(t, le, e);
  }
  function pr(e, t, a) {
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
        if (r !== o.lane ? ($ & r) === r : (It & r) === r) {
          var d = o.revertLane;
          if (d === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }), r === Hl && (m = true);
          else if ((It & d) === d) {
            o = o.next, d === Hl && (m = true);
            continue;
          } else r = {
            lane: 0,
            revertLane: o.revertLane,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, s === null ? (c = s = r, i = u) : s = s.next = r, Q.lanes |= d, wa |= d;
          r = o.action, Wa && a(u, r), u = o.hasEagerState ? o.eagerState : a(u, r);
        } else d = {
          lane: r,
          revertLane: o.revertLane,
          gesture: o.gesture,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null
        }, s === null ? (c = s = d, i = u) : s = s.next = d, Q.lanes |= r, wa |= r;
        o = o.next;
      } while (o !== null && o !== t);
      if (s === null ? i = u : s.next = c, !ut(u, e.memoizedState) && (xe = true, m && (a = Cl, a !== null))) throw a;
      e.memoizedState = u, e.baseState = i, e.baseQueue = s, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [
      e.memoizedState,
      l.dispatch
    ];
  }
  function dc(e) {
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
    if (i && (n.memoizedState = a, xe = true), n = n.queue, gr(mh.bind(null, l, n, e), [
      e
    ]), n.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
      if (l.flags |= 2048, ql(9, {
        destroy: void 0
      }, hh.bind(null, l, n, a, t), null), ne === null) throw Error(N(349));
      u || It & 127 || dh(l, t, a);
    }
    return a;
  }
  function dh(e, t, a) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: a
    }, t = Q.updateQueue, t === null ? (t = ji(), Q.updateQueue = t, t.stores = [
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
    var t = tl(e, 2);
    t !== null && Ze(t, e, 2);
  }
  function os(e) {
    var t = qe();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Wa) {
        ma(true);
        try {
          a();
        } finally {
          ma(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ea,
      lastRenderedState: e
    }, t;
  }
  function gh(e, t, a, l) {
    return e.baseState = a, pr(e, le, typeof l == "function" ? l : ea);
  }
  function _p(e, t, a, l, n) {
    if (Bi(e)) throw Error(N(485));
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
        s !== null && s(i, c), Yo(e, t, c);
      } catch (o) {
        fs(e, t, o);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), Y.T = u;
      }
    } else try {
      u = a(n, l), Yo(e, t, u);
    } catch (o) {
      fs(e, t, o);
    }
  }
  function Yo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      Go(e, t, l);
    }, function(l) {
      return fs(e, t, l);
    }) : Go(e, t, a);
  }
  function Go(e, t, a) {
    t.status = "fulfilled", t.value = a, bh(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, vh(e, a)));
  }
  function fs(e, t, a) {
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
  function Xo(e, t) {
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
            Ca(l);
          }
          l = false;
        }
        l && (t = a[0]);
      }
    }
    return a = qe(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sh,
      lastRenderedState: t
    }, a.queue = l, a = Hh.bind(null, Q, l), l.dispatch = a, l = os(false), u = xr.bind(null, Q, false, l.queue), l = qe(), n = {
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
  function Qo(e) {
    var t = pe();
    return xh(t, le, e);
  }
  function xh(e, t, a) {
    if (t = pr(e, t, Sh)[0], e = Uu(ea)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = In(t);
    } catch (i) {
      throw i === Jl ? Di : i;
    }
    else l = t;
    t = pe();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (Q.flags |= 2048, ql(9, {
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
  function ko(e) {
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
  function ql(e, t, a, l) {
    return e = {
      tag: e,
      create: a,
      deps: l,
      inst: t,
      next: null
    }, t = Q.updateQueue, t === null && (t = ji(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Eh() {
    return pe().memoizedState;
  }
  function Hu(e, t, a, l) {
    var n = qe();
    Q.flags |= e, n.memoizedState = ql(1 | t, {
      destroy: void 0
    }, a, l === void 0 ? null : l);
  }
  function Hi(e, t, a, l) {
    var n = pe();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    le !== null && l !== null && or(l, le.memoizedState.deps) ? n.memoizedState = ql(t, u, a, l) : (Q.flags |= e, n.memoizedState = ql(1 | t, u, a, l));
  }
  function Vo(e, t) {
    Hu(8390656, 8, e, t);
  }
  function gr(e, t) {
    Hi(2048, 8, e, t);
  }
  function zp(e) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) t = ji(), Q.updateQueue = t, t.events = [
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
    return Hi(4, 2, e, t);
  }
  function zh(e, t) {
    return Hi(4, 4, e, t);
  }
  function Rh(e, t) {
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
  function Ah(e, t, a) {
    a = a != null ? a.concat([
      e
    ]) : null, Hi(4, 4, Rh.bind(null, t, e), a);
  }
  function vr() {
  }
  function Mh(e, t) {
    var a = pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && or(t, l[1]) ? l[0] : (a.memoizedState = [
      e,
      t
    ], e);
  }
  function Ch(e, t) {
    var a = pe();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && or(t, l[1])) return l[0];
    if (l = e(), Wa) {
      ma(true);
      try {
        e();
      } finally {
        ma(false);
      }
    }
    return a.memoizedState = [
      l,
      t
    ], l;
  }
  function br(e, t, a) {
    return a === void 0 || It & 1073741824 && !($ & 261930) ? e.memoizedState = t : (e.memoizedState = a, e = gm(), Q.lanes |= e, wa |= e, a);
  }
  function Nh(e, t, a, l) {
    return ut(a, t) ? a : Bl.current !== null ? (e = br(e, a, l), ut(e, t) || (xe = true), e) : !(It & 42) || It & 1073741824 && !($ & 261930) ? (xe = true, e.memoizedState = a) : (e = gm(), Q.lanes |= e, wa |= e, t);
  }
  function wh(e, t, a, l, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = Y.T, c = {};
    Y.T = c, xr(e, false, t, a);
    try {
      var s = n(), o = Y.S;
      if (o !== null && o(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var m = Sp(s, l);
        zn(e, t, m, nt(e));
      } else zn(e, t, l, nt(e));
    } catch (r) {
      zn(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: r
      }, nt());
    } finally {
      P.p = u, i !== null && c.types !== null && (i.types = c.types), Y.T = i;
    }
  }
  function Rp() {
  }
  function ds(e, t, a, l) {
    if (e.tag !== 5) throw Error(N(476));
    var n = Oh(e).queue;
    wh(e, n, t, Xa, a === null ? Rp : function() {
      return Dh(e), a(l);
    });
  }
  function Oh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Xa,
      baseState: Xa,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ea,
        lastRenderedState: Xa
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
        lastRenderedReducer: ea,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Dh(e) {
    var t = Oh(e);
    t.next === null && (t = e.alternate.memoizedState), zn(e, t.next.queue, {}, nt());
  }
  function Sr() {
    return je(Xn);
  }
  function jh() {
    return pe().memoizedState;
  }
  function Uh() {
    return pe().memoizedState;
  }
  function Ap(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          e = xa(a);
          var l = Ea(t, e, a);
          l !== null && (Ze(l, t, a), En(l, t, a)), t = {
            cache: ur()
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
    }, Bi(e) ? Bh(t, a) : (a = tr(e, t, a, l), a !== null && (Ze(a, e, l), qh(a, t, l)));
  }
  function Hh(e, t, a) {
    var l = nt();
    zn(e, t, a, l);
  }
  function zn(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Bi(e)) Bh(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var i = t.lastRenderedState, c = u(i, a);
        if (n.hasEagerState = true, n.eagerState = c, ut(c, i)) return Oi(e, t, n, 0), ne === null && wi(), false;
      } catch {
      } finally {
      }
      if (a = tr(e, t, n, l), a !== null) return Ze(a, e, l), qh(a, t, l), true;
    }
    return false;
  }
  function xr(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Nr(),
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Bi(e)) {
      if (t) throw Error(N(479));
    } else t = tr(e, a, l, 2), t !== null && Ze(t, e, 2);
  }
  function Bi(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q;
  }
  function Bh(e, t) {
    wl = ui = true;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function qh(e, t, a) {
    if (a & 4194048) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, _d(e, a);
    }
  }
  var Ln = {
    readContext: je,
    use: Ui,
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
  Ln.useEffectEvent = he;
  var Lh = {
    readContext: je,
    use: Ui,
    useCallback: function(e, t) {
      return qe().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: je,
    useEffect: Vo,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([
        e
      ]) : null, Hu(4194308, 4, Rh.bind(null, t, e), a);
    },
    useLayoutEffect: function(e, t) {
      return Hu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Hu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = qe();
      t = t === void 0 ? null : t;
      var l = e();
      if (Wa) {
        ma(true);
        try {
          e();
        } finally {
          ma(false);
        }
      }
      return a.memoizedState = [
        l,
        t
      ], l;
    },
    useReducer: function(e, t, a) {
      var l = qe();
      if (a !== void 0) {
        var n = a(t);
        if (Wa) {
          ma(true);
          try {
            a(t);
          } finally {
            ma(false);
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
      var t = qe();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: function(e) {
      e = os(e);
      var t = e.queue, a = Hh.bind(null, Q, t);
      return t.dispatch = a, [
        e.memoizedState,
        a
      ];
    },
    useDebugValue: vr,
    useDeferredValue: function(e, t) {
      var a = qe();
      return br(a, e, t);
    },
    useTransition: function() {
      var e = os(false);
      return e = wh.bind(null, Q, e.queue, true, false), qe().memoizedState = e, [
        false,
        e
      ];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = Q, n = qe();
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
      ]), l.flags |= 2048, ql(9, {
        destroy: void 0
      }, hh.bind(null, l, u, a, t), null), a;
    },
    useId: function() {
      var e = qe(), t = ne.identifierPrefix;
      if (W) {
        var a = Nt, l = Ct;
        a = (l & ~(1 << 32 - lt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = ii++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = xp++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Sr,
    useFormState: Xo,
    useActionState: Xo,
    useOptimistic: function(e) {
      var t = qe();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = xr.bind(null, Q, true, a), a.dispatch = t, [
        e,
        t
      ];
    },
    useMemoCache: yr,
    useCacheRefresh: function() {
      return qe().memoizedState = Ap.bind(null, Q);
    },
    useEffectEvent: function(e) {
      var t = qe(), a = {
        impl: e
      };
      return t.memoizedState = a, function() {
        if (F & 2) throw Error(N(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Er = {
    readContext: je,
    use: Ui,
    useCallback: Mh,
    useContext: je,
    useEffect: gr,
    useImperativeHandle: Ah,
    useInsertionEffect: Th,
    useLayoutEffect: zh,
    useMemo: Ch,
    useReducer: Uu,
    useRef: Eh,
    useState: function() {
      return Uu(ea);
    },
    useDebugValue: vr,
    useDeferredValue: function(e, t) {
      var a = pe();
      return Nh(a, le.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Uu(ea)[0], t = pe().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: fh,
    useId: jh,
    useHostTransitionStatus: Sr,
    useFormState: Qo,
    useActionState: Qo,
    useOptimistic: function(e, t) {
      var a = pe();
      return gh(a, le, e, t);
    },
    useMemoCache: yr,
    useCacheRefresh: Uh
  };
  Er.useEffectEvent = _h;
  var Yh = {
    readContext: je,
    use: Ui,
    useCallback: Mh,
    useContext: je,
    useEffect: gr,
    useImperativeHandle: Ah,
    useInsertionEffect: Th,
    useLayoutEffect: zh,
    useMemo: Ch,
    useReducer: dc,
    useRef: Eh,
    useState: function() {
      return dc(ea);
    },
    useDebugValue: vr,
    useDeferredValue: function(e, t) {
      var a = pe();
      return le === null ? br(a, e, t) : Nh(a, le.memoizedState, e, t);
    },
    useTransition: function() {
      var e = dc(ea)[0], t = pe().memoizedState;
      return [
        typeof e == "boolean" ? e : In(e),
        t
      ];
    },
    useSyncExternalStore: fh,
    useId: jh,
    useHostTransitionStatus: Sr,
    useFormState: ko,
    useActionState: ko,
    useOptimistic: function(e, t) {
      var a = pe();
      return le !== null ? gh(a, le, e, t) : (a.baseState = e, [
        e,
        a.queue.dispatch
      ]);
    },
    useMemoCache: yr,
    useCacheRefresh: Uh
  };
  Yh.useEffectEvent = _h;
  function hc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : re({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var hs = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = nt(), n = xa(l);
      n.payload = t, a != null && (n.callback = a), t = Ea(e, n, l), t !== null && (Ze(t, e, l), En(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = nt(), n = xa(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ea(e, n, l), t !== null && (Ze(t, e, l), En(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = nt(), l = xa(a);
      l.tag = 2, t != null && (l.callback = t), t = Ea(e, l, a), t !== null && (Ze(t, e, a), En(t, e, a));
    }
  };
  function Zo(e, t, a, l, n, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, i) : t.prototype && t.prototype.isPureReactComponent ? !jn(a, l) || !jn(n, u) : true;
  }
  function Ko(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && hs.enqueueReplaceState(t, t.state, null);
  }
  function Fa(e, t) {
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
    Pu(e);
  }
  function Xh(e) {
    console.error(e);
  }
  function Qh(e) {
    Pu(e);
  }
  function ci(e, t) {
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
  function Jo(e, t, a) {
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
  function ms(e, t, a) {
    return a = xa(a), a.tag = 3, a.payload = {
      element: null
    }, a.callback = function() {
      ci(e, t);
    }, a;
  }
  function kh(e) {
    return e = xa(e), e.tag = 3, e;
  }
  function Vh(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        Jo(t, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      Jo(t, a, l), typeof n != "function" && (_a === null ? _a = /* @__PURE__ */ new Set([
        this
      ]) : _a.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Cp(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && Kl(t, a, n, true), a = it.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return pt === null ? di() : a.alternate === null && me === 0 && (me = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === ai ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([
              l
            ]) : t.add(l), Tc(e, l, n)), false;
          case 22:
            return a.flags |= 65536, l === ai ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                l
              ])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([
              l
            ]) : a.add(l)), Tc(e, l, n)), false;
        }
        throw Error(N(435, a.tag));
      }
      return Tc(e, l, n), di(), false;
    }
    if (W) return t = it.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== ts && (e = Error(N(422), {
      cause: l
    }), Hn(mt(e, a)))) : (l !== ts && (t = Error(N(423), {
      cause: l
    }), Hn(mt(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = mt(l, a), n = ms(e.stateNode, l, n), fc(e, n), me !== 4 && (me = 2)), false;
    var u = Error(N(520), {
      cause: l
    });
    if (u = mt(u, a), Mn === null ? Mn = [
      u
    ] : Mn.push(u), me !== 4 && (me = 2), t === null) return true;
    l = mt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = ms(a.stateNode, l, e), fc(a, e), false;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (_a === null || !_a.has(u)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = kh(n), Vh(n, e, a, l), fc(a, n), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var _r = Error(N(461)), xe = false;
  function we(e, t, a, l) {
    t.child = e === null ? uh(t, null, a, l) : $a(t, e.child, a, l);
  }
  function $o(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l) c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return Ja(t), l = fr(e, t, a, i, u, n), c = dr(), e !== null && !xe ? (hr(e, t, n), ta(e, t, n)) : (W && c && lr(t), t.flags |= 1, we(e, t, l, n), t.child);
  }
  function Wo(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !ar(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Zh(e, t, u, l, n)) : (e = Du(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Tr(e, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : jn, a(i, l) && e.ref === t.ref) return ta(e, t, n);
    }
    return t.flags |= 1, e = $t(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Zh(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (jn(u, l) && e.ref === t.ref) if (xe = false, t.pendingProps = l = u, Tr(e, n)) e.flags & 131072 && (xe = true);
      else return t.lanes = e.lanes, ta(e, t, n);
    }
    return ys(e, t, a, l, n);
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
        return Fo(e, t, u, a, l);
      }
      if (a & 536870912) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && ju(t, u !== null ? u.cachePool : null), u !== null ? Lo(t, u) : ss(), sh(t);
      else return l = t.lanes = 536870912, Fo(e, t, u !== null ? u.baseLanes | a : a, a, l);
    } else u !== null ? (ju(t, u.cachePool), Lo(t, u), da(), t.memoizedState = null) : (e !== null && ju(t, null), ss(), da());
    return we(e, t, n, a), t.child;
  }
  function mn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Fo(e, t, a, l, n) {
    var u = ir();
    return u = u === null ? null : {
      parent: Se._currentValue,
      pool: u
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && ju(t, null), ss(), sh(t), e !== null && Kl(e, t, l, true), t.childLanes = n, null;
  }
  function Bu(e, t) {
    return t = si({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Po(e, t, a) {
    return $a(t, e.child, null, a), e = Bu(t, t.pendingProps), e.flags |= 2, Pe(t), t.memoizedState = null, e;
  }
  function Np(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (W) {
        if (l.mode === "hidden") return e = Bu(t, l), t.lanes = 536870912, mn(null, e);
        if (rs(t), (e = ce) ? (e = Lm(e, yt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ma !== null ? {
            id: Ct,
            overflow: Nt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Pd(e), a.return = t, t.child = a, De = t, ce = null)) : e = null, e === null) throw Ca(t);
        return t.lanes = 536870912, null;
      }
      return Bu(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (rs(t), n) if (t.flags & 256) t.flags &= -257, t = Po(e, t, a);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(N(558));
      else if (xe || Kl(e, t, a, false), n = (a & e.childLanes) !== 0, xe || n) {
        if (l = ne, l !== null && (i = Td(l, a), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, tl(e, i), Ze(l, e, i), _r;
        di(), t = Po(e, t, a);
      } else e = u.treeContext, ce = gt(i.nextSibling), De = t, W = true, Sa = null, yt = false, e !== null && eh(t, e), t = Bu(t, l), t.flags |= 4096;
      return t;
    }
    return e = $t(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function qu(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(N(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ys(e, t, a, l, n) {
    return Ja(t), a = fr(e, t, a, l, void 0, n), l = dr(), e !== null && !xe ? (hr(e, t, n), ta(e, t, n)) : (W && l && lr(t), t.flags |= 1, we(e, t, a, n), t.child);
  }
  function Io(e, t, a, l, n, u) {
    return Ja(t), t.updateQueue = null, a = oh(t, l, a, n), rh(e), l = dr(), e !== null && !xe ? (hr(e, t, u), ta(e, t, u)) : (W && l && lr(t), t.flags |= 1, we(e, t, a, u), t.child);
  }
  function ef(e, t, a, l, n) {
    if (Ja(t), t.stateNode === null) {
      var u = El, i = a.contextType;
      typeof i == "object" && i !== null && (u = je(i)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, sr(t), i = a.contextType, u.context = typeof i == "object" && i !== null ? je(i) : El, u.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (hc(t, a, i, l), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && hs.enqueueReplaceState(u, u.state, null), Tn(t, l, u, n), _n(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = true;
    } else if (e === null) {
      u = t.stateNode;
      var c = t.memoizedProps, s = Fa(a, c);
      u.props = s;
      var o = u.context, m = a.contextType;
      i = El, typeof m == "object" && m !== null && (i = je(m));
      var r = a.getDerivedStateFromProps;
      m = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, m || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || o !== i) && Ko(t, u, l, i), ra = false;
      var d = t.memoizedState;
      u.state = d, Tn(t, l, u, n), _n(), o = t.memoizedState, c || d !== o || ra ? (typeof r == "function" && (hc(t, a, r, l), o = t.memoizedState), (s = ra || Zo(t, a, s, l, d, o, i)) ? (m || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = o), u.props = l, u.state = o, u.context = i, l = s) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = false);
    } else {
      u = t.stateNode, is(e, t), i = t.memoizedProps, m = Fa(a, i), u.props = m, r = t.pendingProps, d = u.context, o = a.contextType, s = El, typeof o == "object" && o !== null && (s = je(o)), c = a.getDerivedStateFromProps, (o = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || d !== s) && Ko(t, u, l, s), ra = false, d = t.memoizedState, u.state = d, Tn(t, l, u, n), _n();
      var y = t.memoizedState;
      i !== r || d !== y || ra || e !== null && e.dependencies !== null && ti(e.dependencies) ? (typeof c == "function" && (hc(t, a, c, l), y = t.memoizedState), (m = ra || Zo(t, a, m, l, d, y, s) || e !== null && e.dependencies !== null && ti(e.dependencies)) ? (o || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, y, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, y, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = y), u.props = l, u.state = y, u.context = s, l = m) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), l = false);
    }
    return u = l, qu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = $a(t, e.child, null, n), t.child = $a(t, null, a, n)) : we(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = ta(e, t, n), e;
  }
  function tf(e, t, a, l) {
    return Ka(), t.flags |= 256, we(e, t, a, l), t.child;
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(e) {
    return {
      baseLanes: e,
      cachePool: ah()
    };
  }
  function pc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= et), e;
  }
  function Jh(e, t, a) {
    var l = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (ye.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (W) {
        if (n ? fa(t) : da(), (e = ce) ? (e = Lm(e, yt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ma !== null ? {
            id: Ct,
            overflow: Nt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Pd(e), a.return = t, t.child = a, De = t, ce = null)) : e = null, e === null) throw Ca(t);
        return Cs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = l.children;
      return l = l.fallback, n ? (da(), n = t.mode, c = si({
        mode: "hidden",
        children: c
      }, n), l = Qa(l, n, a, null), c.return = t, l.return = t, c.sibling = l, t.child = c, l = t.child, l.memoizedState = yc(a), l.childLanes = pc(e, i, a), t.memoizedState = mc, mn(null, l)) : (fa(t), ps(t, c));
    }
    var s = e.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) t.flags & 256 ? (fa(t), t.flags &= -257, t = gc(e, t, a)) : t.memoizedState !== null ? (da(), t.child = e.child, t.flags |= 128, t = null) : (da(), c = l.fallback, n = t.mode, l = si({
        mode: "visible",
        children: l.children
      }, n), c = Qa(c, n, a, null), c.flags |= 2, l.return = t, c.return = t, l.sibling = c, t.child = l, $a(t, e.child, null, a), l = t.child, l.memoizedState = yc(a), l.childLanes = pc(e, i, a), t.memoizedState = mc, t = mn(null, l));
      else if (fa(t), Cs(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var o = i.dgst;
        i = o, l = Error(N(419)), l.stack = "", l.digest = i, Hn({
          value: l,
          source: null,
          stack: null
        }), t = gc(e, t, a);
      } else if (xe || Kl(e, t, a, false), i = (a & e.childLanes) !== 0, xe || i) {
        if (i = ne, i !== null && (l = Td(i, a), l !== 0 && l !== s.retryLane)) throw s.retryLane = l, tl(e, l), Ze(i, e, l), _r;
        Ms(c) || di(), t = gc(e, t, a);
      } else Ms(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, ce = gt(c.nextSibling), De = t, W = true, Sa = null, yt = false, e !== null && eh(t, e), t = ps(t, l.children), t.flags |= 4096);
      return t;
    }
    return n ? (da(), c = l.fallback, n = t.mode, s = e.child, o = s.sibling, l = $t(s, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = s.subtreeFlags & 65011712, o !== null ? c = $t(o, c) : (c = Qa(c, n, a, null), c.flags |= 2), c.return = t, l.return = t, l.sibling = c, t.child = l, mn(null, l), l = t.child, c = e.child.memoizedState, c === null ? c = yc(a) : (n = c.cachePool, n !== null ? (s = Se._currentValue, n = n.parent !== s ? {
      parent: s,
      pool: s
    } : n) : n = ah(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), l.memoizedState = c, l.childLanes = pc(e, i, a), t.memoizedState = mc, mn(e.child, l)) : (fa(t), a = e.child, e = a.sibling, a = $t(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [
      e
    ], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function ps(e, t) {
    return t = si({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function si(e, t) {
    return e = Ie(22, e, null, t), e.lanes = 0, e;
  }
  function gc(e, t, a) {
    return $a(t, e.child, null, a), e = ps(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function af(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ls(e.return, t, a);
  }
  function vc(e, t, a, l, n, u) {
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
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, ue(ye, i), we(e, t, l, a), l = W ? Un : 0, !c && e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && af(e, a, t);
      else if (e.tag === 19) af(e, a, t);
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
        for (a = t.child, n = null; a !== null; ) e = a.alternate, e !== null && ni(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), vc(t, false, n, a, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && ni(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        vc(t, true, a, null, u, l);
        break;
      case "together":
        vc(t, false, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ta(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), wa |= t.lanes, !(a & t.childLanes)) if (e !== null) {
      if (Kl(e, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
      for (e = t.child, a = $t(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; ) e = e.sibling, a = a.sibling = $t(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Tr(e, t) {
    return e.lanes & t ? true : (e = e.dependencies, !!(e !== null && ti(e)));
  }
  function wp(e, t, a) {
    switch (t.tag) {
      case 3:
        Ju(t, t.stateNode.containerInfo), oa(t, Se, e.memoizedState.cache), Ka();
        break;
      case 27:
      case 5:
        kc(t);
        break;
      case 4:
        Ju(t, t.stateNode.containerInfo);
        break;
      case 10:
        oa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, rs(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (fa(t), t.flags |= 128, null) : a & t.child.childLanes ? Jh(e, t, a) : (fa(t), e = ta(e, t, a), e !== null ? e.sibling : null);
        fa(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (Kl(e, t, a, false), l = (a & t.childLanes) !== 0), n) {
          if (l) return $h(e, t, a);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), ue(ye, ye.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Kh(e, t, a, t.pendingProps);
      case 24:
        oa(t, Se, e.memoizedState.cache);
    }
    return ta(e, t, a);
  }
  function Wh(e, t, a) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) xe = true;
    else {
      if (!Tr(e, a) && !(t.flags & 128)) return xe = false, wp(e, t, a);
      xe = !!(e.flags & 131072);
    }
    else xe = false, W && t.flags & 1048576 && Id(t, Un, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = La(t.elementType), t.type = e, typeof e == "function") ar(e) ? (l = Fa(e, l), t.tag = 1, t = ef(null, t, e, l, a)) : (t.tag = 0, t = ys(null, t, e, l, a));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Xs) {
                t.tag = 11, t = $o(null, t, e, l, a);
                break e;
              } else if (n === Qs) {
                t.tag = 14, t = Wo(null, t, e, l, a);
                break e;
              }
            }
            throw t = Xc(e) || e, Error(N(306, t, ""));
          }
        }
        return t;
      case 0:
        return ys(e, t, t.type, t.pendingProps, a);
      case 1:
        return l = t.type, n = Fa(l, t.pendingProps), ef(e, t, l, n, a);
      case 3:
        e: {
          if (Ju(t, t.stateNode.containerInfo), e === null) throw Error(N(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, is(e, t), Tn(t, l, null, a);
          var i = t.memoizedState;
          if (l = i.cache, oa(t, Se, l), l !== u.cache && ns(t, [
            Se
          ], a, true), _n(), l = i.element, u.isDehydrated) if (u = {
            element: l,
            isDehydrated: false,
            cache: i.cache
          }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = tf(e, t, l, a);
            break e;
          } else if (l !== n) {
            n = mt(Error(N(424)), t), Hn(n), t = tf(e, t, l, a);
            break e;
          } else {
            switch (e = t.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (ce = gt(e.firstChild), De = t, W = true, Sa = null, yt = true, a = uh(t, null, l, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Ka(), l === n) {
              t = ta(e, t, a);
              break e;
            }
            we(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return qu(e, t), e === null ? (a = _f(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : W || (a = t.type, e = t.pendingProps, l = pi(ba.current).createElement(a), l[Oe] = t, l[Ke] = e, Ue(l, a, e), Ae(l), t.stateNode = l) : t.memoizedState = _f(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return kc(t), e === null && W && (l = t.stateNode = Ym(t.type, t.pendingProps, ba.current), De = t, yt = true, n = ce, Da(t.type) ? (Ns = n, ce = gt(l.firstChild)) : ce = n), we(e, t, t.pendingProps.children, a), qu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && W && ((n = l = ce) && (l = cg(l, t.type, t.pendingProps, yt), l !== null ? (t.stateNode = l, De = t, ce = gt(l.firstChild), yt = false, n = true) : n = false), n || Ca(t)), kc(t), n = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = u.children, Rs(n, u) ? l = null : i !== null && Rs(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = fr(e, t, Ep, null, null, a), Xn._currentValue = n), qu(e, t), we(e, t, l, a), t.child;
      case 6:
        return e === null && W && ((e = a = ce) && (a = sg(a, t.pendingProps, yt), a !== null ? (t.stateNode = a, De = t, ce = null, e = true) : e = false), e || Ca(t)), null;
      case 13:
        return Jh(e, t, a);
      case 4:
        return Ju(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = $a(t, null, l, a) : we(e, t, l, a), t.child;
      case 11:
        return $o(e, t, t.type, t.pendingProps, a);
      case 7:
        return we(e, t, t.pendingProps, a), t.child;
      case 8:
        return we(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return we(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return l = t.pendingProps, oa(t, t.type, l.value), we(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, Ja(t), n = je(n), l = l(n), t.flags |= 1, we(e, t, l, a), t.child;
      case 14:
        return Wo(e, t, t.type, t.pendingProps, a);
      case 15:
        return Zh(e, t, t.type, t.pendingProps, a);
      case 19:
        return $h(e, t, a);
      case 31:
        return Np(e, t, a);
      case 22:
        return Kh(e, t, a, t.pendingProps);
      case 24:
        return Ja(t), l = je(Se), e === null ? (n = ir(), n === null && (n = ne, u = ur(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = {
          parent: l,
          cache: n
        }, sr(t), oa(t, Se, n)) : (e.lanes & a && (is(e, t), Tn(t, null, null, a), _n()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = {
          parent: l,
          cache: l
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), oa(t, Se, l)) : (l = u.cache, oa(t, Se, l), l !== n.cache && ns(t, [
          Se
        ], a, true))), we(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(N(156, t.tag));
  }
  function qt(e) {
    e.flags |= 4;
  }
  function bc(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
      else if (Sm()) e.flags |= 8192;
      else throw Va = ai, cr;
    } else e.flags &= -16777217;
  }
  function lf(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (e.flags |= 16777216, !Qm(t)) if (Sm()) e.flags |= 8192;
    else throw Va = ai, cr;
  }
  function xu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xd() : 536870912, e.lanes |= t, Ll |= t);
  }
  function cn(e, t) {
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
    switch (nr(t), t.tag) {
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
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Wt(Se), Dl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (rl(t) ? qt(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, oc())), ie(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (qt(t), u !== null ? (ie(t), lf(t, u)) : (ie(t), bc(t, n, null, l, a))) : u ? u !== e.memoizedState ? (qt(t), ie(t), lf(t, u)) : (ie(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && qt(t), ie(t), bc(t, n, e, l, a)), null;
      case 27:
        if ($u(t), a = ba.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && qt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(N(166));
            return ie(t), null;
          }
          e = Ot.current, rl(t) ? Oo(t) : (e = Ym(n, l, a), t.stateNode = e, qt(t));
        }
        return ie(t), null;
      case 5:
        if ($u(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && qt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(N(166));
            return ie(t), null;
          }
          if (u = Ot.current, rl(t)) Oo(t);
          else {
            var i = pi(ba.current);
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
            u[Oe] = t, u[Ke] = l;
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
            e: switch (Ue(u, n, l), n) {
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
            l && qt(t);
          }
        }
        return ie(t), bc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && qt(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(N(166));
          if (e = ba.current, rl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = De, n !== null) switch (n.tag) {
              case 27:
              case 5:
                l = n.memoizedProps;
            }
            e[Oe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === true || Hm(e.nodeValue, a)), e || Ca(t, true);
          } else e = pi(e).createTextNode(l), e[Oe] = t, t.stateNode = e;
        }
        return ie(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = rl(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(N(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(557));
              e[Oe] = t;
            } else Ka(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ie(t), e = false;
          } else a = oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = true;
          if (!e) return t.flags & 256 ? (Pe(t), t) : (Pe(t), null);
          if (t.flags & 128) throw Error(N(558));
        }
        return ie(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = rl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(N(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(N(317));
              n[Oe] = t;
            } else Ka(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            ie(t), n = false;
          } else n = oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
          if (!n) return t.flags & 256 ? (Pe(t), t) : (Pe(t), null);
        }
        return Pe(t), t.flags & 128 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), xu(t, t.updateQueue), ie(t), null);
      case 4:
        return Dl(), e === null && wr(t.stateNode.containerInfo), ie(t), null;
      case 10:
        return Wt(t.type), ie(t), null;
      case 19:
        if (Me(ye), l = t.memoizedState, l === null) return ie(t), null;
        if (n = (t.flags & 128) !== 0, u = l.rendering, u === null) if (n) cn(l, false);
        else {
          if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (u = ni(e), u !== null) {
              for (t.flags |= 128, cn(l, false), e = u.updateQueue, t.updateQueue = e, xu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; ) Fd(a, e), a = a.sibling;
              return ue(ye, ye.current & 1 | 2), W && kt(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && tt() > oi && (t.flags |= 128, n = true, cn(l, false), t.lanes = 4194304);
        }
        else {
          if (!n) if (e = ni(u), e !== null) {
            if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, xu(t, e), cn(l, true), l.tail === null && l.tailMode === "hidden" && !u.alternate && !W) return ie(t), null;
          } else 2 * tt() - l.renderingStartTime > oi && a !== 536870912 && (t.flags |= 128, n = true, cn(l, false), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = tt(), e.sibling = null, a = ye.current, ue(ye, n ? a & 1 | 2 : a & 1), W && kt(t, l.treeForkCount), e) : (ie(t), null);
      case 22:
      case 23:
        return Pe(t), rr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? a & 536870912 && !(t.flags & 128) && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), a = t.updateQueue, a !== null && xu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && Me(ka), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wt(Se), ie(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, t.tag));
  }
  function Dp(e, t) {
    switch (nr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Wt(Se), Dl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return $u(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Pe(t), t.alternate === null) throw Error(N(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Pe(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(N(340));
          Ka();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Me(ye), null;
      case 4:
        return Dl(), null;
      case 10:
        return Wt(t.type), null;
      case 22:
      case 23:
        return Pe(t), rr(), e !== null && Me(ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Wt(Se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fh(e, t) {
    switch (nr(t), t.tag) {
      case 3:
        Wt(Se), Dl();
        break;
      case 26:
      case 27:
      case 5:
        $u(t);
        break;
      case 4:
        Dl();
        break;
      case 31:
        t.memoizedState !== null && Pe(t);
        break;
      case 13:
        Pe(t);
        break;
      case 19:
        Me(ye);
        break;
      case 10:
        Wt(t.type);
        break;
      case 22:
      case 23:
        Pe(t), rr(), e !== null && Me(ka);
        break;
      case 24:
        Wt(Se);
    }
  }
  function eu(e, t) {
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
  function Na(e, t, a) {
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
    a.props = Fa(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      te(e, t, l);
    }
  }
  function Rn(e, t) {
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
  function wt(e, t) {
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
  function Sc(e, t, a) {
    try {
      var l = e.stateNode;
      tg(l, e.type, a, t), l[Ke] = t;
    } catch (n) {
      te(e, e.return, n);
    }
  }
  function tm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Da(e.type) || e.tag === 4;
  }
  function xc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Da(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Kt));
    else if (l !== 4 && (l === 27 && Da(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (gs(e, t, a), e = e.sibling; e !== null; ) gs(e, t, a), e = e.sibling;
  }
  function ri(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Da(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (ri(e, t, a), e = e.sibling; e !== null; ) ri(e, t, a), e = e.sibling;
  }
  function am(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Ue(t, l, a), t[Oe] = e, t[Ke] = a;
    } catch (u) {
      te(e, e.return, u);
    }
  }
  var Vt = false, be = false, Ec = false, nf = typeof WeakSet == "function" ? WeakSet : Set, Re = null;
  function jp(e, t) {
    if (e = e.containerInfo, Ts = Si, e = Qd(e), Is(e)) {
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
    for (zs = {
      focusedElem: e,
      selectionRange: a
    }, Si = false, Re = t; Re !== null; ) if (t = Re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Re = e;
    else for (; Re !== null; ) {
      switch (t = Re, u = t.alternate, e = t.flags, t.tag) {
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
              var T = Fa(a.type, n);
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
        e.return = t.return, Re = e;
        break;
      }
      Re = t.return;
    }
  }
  function lm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Yt(e, a), l & 4 && eu(5, a);
        break;
      case 1:
        if (Yt(e, a), l & 4) if (e = a.stateNode, t === null) try {
          e.componentDidMount();
        } catch (i) {
          te(a, a.return, i);
        }
        else {
          var n = Fa(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            te(a, a.return, i);
          }
        }
        l & 64 && Ph(a), l & 512 && Rn(a, a.return);
        break;
      case 3:
        if (Yt(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
        Yt(e, a), t === null && l & 4 && em(a), l & 512 && Rn(a, a.return);
        break;
      case 12:
        Yt(e, a);
        break;
      case 31:
        Yt(e, a), l & 4 && im(e, a);
        break;
      case 13:
        Yt(e, a), l & 4 && cm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Qp.bind(null, a), rg(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Vt, !l) {
          t = t !== null && t.memoizedState !== null || be, n = Vt;
          var u = be;
          Vt = l, (be = t) && !u ? Xt(e, a, (a.subtreeFlags & 8772) !== 0) : Yt(e, a), Vt = n, be = u;
        }
        break;
      case 30:
        break;
      default:
        Yt(e, a);
    }
  }
  function nm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ks(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var fe = null, Qe = false;
  function Lt(e, t, a) {
    for (a = a.child; a !== null; ) um(e, t, a), a = a.sibling;
  }
  function um(e, t, a) {
    if (at && typeof at.onCommitFiberUnmount == "function") try {
      at.onCommitFiberUnmount(Kn, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        be || wt(a, t), Lt(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        be || wt(a, t);
        var l = fe, n = Qe;
        Da(a.type) && (fe = a.stateNode, Qe = false), Lt(e, t, a), Nn(a.stateNode), fe = l, Qe = n;
        break;
      case 5:
        be || wt(a, t);
      case 6:
        if (l = fe, n = Qe, fe = null, Lt(e, t, a), fe = l, Qe = n, fe !== null) if (Qe) try {
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
        fe !== null && (Qe ? (e = fe, vf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Ql(e)) : vf(fe, a.stateNode));
        break;
      case 4:
        l = fe, n = Qe, fe = a.stateNode.containerInfo, Qe = true, Lt(e, t, a), fe = l, Qe = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Na(2, a, t), be || Na(4, a, t), Lt(e, t, a);
        break;
      case 1:
        be || (wt(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Ih(a, t, l)), Lt(e, t, a);
        break;
      case 21:
        Lt(e, t, a);
        break;
      case 22:
        be = (l = be) || a.memoizedState !== null, Lt(e, t, a), be = l;
        break;
      default:
        Lt(e, t, a);
    }
  }
  function im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ql(e);
      } catch (a) {
        te(t, t.return, a);
      }
    }
  }
  function cm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Ql(e);
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
        return t === null && (t = e.stateNode = new nf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new nf()), t;
      default:
        throw Error(N(435, e.tag));
    }
  }
  function Eu(e, t) {
    var a = Up(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = kp.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Ge(e, t) {
    var a = t.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var n = a[l], u = e, i = t, c = i;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Da(c.type)) {
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
  var Tt = null;
  function sm(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ge(t, e), Xe(e), l & 4 && (Na(3, e, e.return), eu(3, e), Na(5, e, e.return));
        break;
      case 1:
        Ge(t, e), Xe(e), l & 512 && (be || a === null || wt(a, a.return)), l & 64 && Vt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Tt;
        if (Ge(t, e), Xe(e), l & 512 && (be || a === null || wt(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
              t: switch (l) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[Wn] || u[Oe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(u, n.querySelector("head > title"))), Ue(u, l, a), u[Oe] = e, Ae(u), l = u;
                  break e;
                case "link":
                  var i = zf("link", "href", n).get(l + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(l), Ue(u, l, a), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = zf("meta", "content", n).get(l + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(l), Ue(u, l, a), n.head.appendChild(u);
                  break;
                default:
                  throw Error(N(468, l));
              }
              u[Oe] = e, Ae(u), l = u;
            }
            e.stateNode = l;
          } else Rf(n, e.type, e.stateNode);
          else e.stateNode = Tf(n, l, e.memoizedProps);
          else u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? Rf(n, e.type, e.stateNode) : Tf(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && Sc(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Ge(t, e), Xe(e), l & 512 && (be || a === null || wt(a, a.return)), a !== null && l & 4 && Sc(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Ge(t, e), Xe(e), l & 512 && (be || a === null || wt(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Ul(n, "");
          } catch (T) {
            te(e, e.return, T);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, Sc(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (Ec = true);
        break;
      case 6:
        if (Ge(t, e), Xe(e), l & 4) {
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
        if (Gu = null, n = Tt, Tt = gi(t.containerInfo), Ge(t, e), Tt = n, Xe(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Ql(t.containerInfo);
        } catch (T) {
          te(e, e.return, T);
        }
        Ec && (Ec = false, rm(e));
        break;
      case 4:
        l = Tt, Tt = gi(e.stateNode.containerInfo), Ge(t, e), Xe(e), Tt = l;
        break;
      case 12:
        Ge(t, e), Xe(e);
        break;
      case 31:
        Ge(t, e), Xe(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Eu(e, l)));
        break;
      case 13:
        Ge(t, e), Xe(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (qi = tt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Eu(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, o = Vt, m = be;
        if (Vt = o || n, be = m || s, Ge(t, e), be = m, Vt = o, Xe(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || s || Vt || be || Ya(e)), a = null, t = e; ; ) {
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
                n ? bf(y, true) : bf(s.stateNode, false);
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
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Eu(e, a))));
        break;
      case 19:
        Ge(t, e), Xe(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Eu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ge(t, e), Xe(e);
    }
  }
  function Xe(e) {
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
            var n = a.stateNode, u = xc(e);
            ri(e, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Ul(i, ""), a.flags &= -33);
            var c = xc(e);
            ri(e, c, i);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, o = xc(e);
            gs(e, o, s);
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
  function Yt(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) lm(e, t.alternate, t), t = t.sibling;
  }
  function Ya(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Na(4, t, t.return), Ya(t);
          break;
        case 1:
          wt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Ih(t, t.return, a), Ya(t);
          break;
        case 27:
          Nn(t.stateNode);
        case 26:
        case 5:
          wt(t, t.return), Ya(t);
          break;
        case 22:
          t.memoizedState === null && Ya(t);
          break;
        case 30:
          Ya(t);
          break;
        default:
          Ya(t);
      }
      e = e.sibling;
    }
  }
  function Xt(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Xt(n, u, a), eu(4, u);
          break;
        case 1:
          if (Xt(n, u, a), l = u, n = l.stateNode, typeof n.componentDidMount == "function") try {
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
          a && i & 64 && Ph(u), Rn(u, u.return);
          break;
        case 27:
          am(u);
        case 26:
        case 5:
          Xt(n, u, a), a && l === null && i & 4 && em(u), Rn(u, u.return);
          break;
        case 12:
          Xt(n, u, a);
          break;
        case 31:
          Xt(n, u, a), a && i & 4 && im(n, u);
          break;
        case 13:
          Xt(n, u, a), a && i & 4 && cm(n, u);
          break;
        case 22:
          u.memoizedState === null && Xt(n, u, a), Rn(u, u.return);
          break;
        case 30:
          break;
        default:
          Xt(n, u, a);
      }
      t = t.sibling;
    }
  }
  function zr(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Pn(a));
  }
  function Rr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pn(e));
  }
  function _t(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) om(e, t, a, l), t = t.sibling;
  }
  function om(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _t(e, t, a, l), n & 2048 && eu(9, t);
        break;
      case 1:
        _t(e, t, a, l);
        break;
      case 3:
        _t(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pn(e)));
        break;
      case 12:
        if (n & 2048) {
          _t(e, t, a, l), e = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (s) {
            te(t, t.return, s);
          }
        } else _t(e, t, a, l);
        break;
      case 31:
        _t(e, t, a, l);
        break;
      case 13:
        _t(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? _t(e, t, a, l) : An(e, t) : u._visibility & 2 ? _t(e, t, a, l) : (u._visibility |= 2, dl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && zr(i, t);
        break;
      case 24:
        _t(e, t, a, l), n & 2048 && Rr(t.alternate, t);
        break;
      default:
        _t(e, t, a, l);
    }
  }
  function dl(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = e, i = t, c = a, s = l, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          dl(u, i, c, s, n), eu(8, i);
          break;
        case 23:
          break;
        case 22:
          var m = i.stateNode;
          i.memoizedState !== null ? m._visibility & 2 ? dl(u, i, c, s, n) : An(u, i) : (m._visibility |= 2, dl(u, i, c, s, n)), n && o & 2048 && zr(i.alternate, i);
          break;
        case 24:
          dl(u, i, c, s, n), n && o & 2048 && Rr(i.alternate, i);
          break;
        default:
          dl(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function An(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = e, l = t, n = l.flags;
      switch (l.tag) {
        case 22:
          An(a, l), n & 2048 && zr(l.alternate, l);
          break;
        case 24:
          An(a, l), n & 2048 && Rr(l.alternate, l);
          break;
        default:
          An(a, l);
      }
      t = t.sibling;
    }
  }
  var yn = 8192;
  function ol(e, t, a) {
    if (e.subtreeFlags & yn) for (e = e.child; e !== null; ) fm(e, t, a), e = e.sibling;
  }
  function fm(e, t, a) {
    switch (e.tag) {
      case 26:
        ol(e, t, a), e.flags & yn && e.memoizedState !== null && xg(a, Tt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ol(e, t, a);
        break;
      case 3:
      case 4:
        var l = Tt;
        Tt = gi(e.stateNode.containerInfo), ol(e, t, a), Tt = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = yn, yn = 16777216, ol(e, t, a), yn = l) : ol(e, t, a));
        break;
      default:
        ol(e, t, a);
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
  function sn(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        Re = l, mm(l, e);
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
        sn(e), e.flags & 2048 && Na(9, e, e.return);
        break;
      case 3:
        sn(e);
        break;
      case 12:
        sn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Lu(e)) : sn(e);
        break;
      default:
        sn(e);
    }
  }
  function Lu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        Re = l, mm(l, e);
      }
      dm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, t, t.return), Lu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Lu(t));
          break;
        default:
          Lu(t);
      }
      e = e.sibling;
    }
  }
  function mm(e, t) {
    for (; Re !== null; ) {
      var a = Re;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Pn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Re = l;
      else e: for (a = e; Re !== null; ) {
        l = Re;
        var n = l.sibling, u = l.return;
        if (nm(l), l === a) {
          Re = null;
          break e;
        }
        if (n !== null) {
          n.return = u, Re = n;
          break e;
        }
        Re = u;
      }
    }
  }
  var Hp = {
    getCacheForType: function(e) {
      var t = je(Se), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return je(Se).controller.signal;
    }
  }, Bp = typeof WeakMap == "function" ? WeakMap : Map, F = 0, ne = null, J = null, $ = 0, ee = 0, Fe = null, pa = false, $l = false, Ar = false, aa = 0, me = 0, wa = 0, Za = 0, Mr = 0, et = 0, Ll = 0, Mn = null, ke = null, vs = false, qi = 0, ym = 0, oi = 1 / 0, fi = null, _a = null, Ee = 0, Ta = null, Yl = null, Ft = 0, bs = 0, Ss = null, pm = null, Cn = 0, xs = null;
  function nt() {
    return F & 2 && $ !== 0 ? $ & -$ : Y.T !== null ? Nr() : zd();
  }
  function gm() {
    if (et === 0) if (!($ & 536870912) || W) {
      var e = mu;
      mu <<= 1, !(mu & 3932160) && (mu = 262144), et = e;
    } else et = 536870912;
    return e = it.current, e !== null && (e.flags |= 32), et;
  }
  function Ze(e, t, a) {
    (e === ne && (ee === 2 || ee === 9) || e.cancelPendingCommit !== null) && (Gl(e, 0), ga(e, $, et, false)), $n(e, a), (!(F & 2) || e !== ne) && (e === ne && (!(F & 2) && (Za |= a), me === 4 && ga(e, $, et, false)), Ut(e));
  }
  function vm(e, t, a) {
    if (F & 6) throw Error(N(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), n = l ? Yp(e, t) : _c(e, t, true), u = l;
    do {
      if (n === 0) {
        $l && !l && ga(e, t, 0, false);
        break;
      } else {
        if (a = e.current.alternate, u && !qp(a)) {
          n = _c(e, t, false), u = false;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var i = 0;
          else i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            e: {
              var c = e;
              n = Mn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Gl(c, i).flags |= 256), i = _c(c, i, false), i !== 2) {
                if (Ar && !s) {
                  c.errorRecoveryDisabledLanes |= u, Za |= u, n = 4;
                  break e;
                }
                u = ke, ke = n, u !== null && (ke === null ? ke = u : ke.push.apply(ke, u));
              }
              n = i;
            }
            if (u = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          Gl(e, 0), ga(e, t, 0, true);
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
              ga(l, t, et, !pa);
              break e;
            case 2:
              ke = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((t & 62914560) === t && (n = qi + 300 - tt(), 10 < n)) {
            if (ga(l, t, et, !pa), Ai(l, 0, true) !== 0) break e;
            Ft = t, l.timeoutHandle = qm(uf.bind(null, l, a, ke, fi, vs, t, et, Za, Ll, pa, u, "Throttled", -0, 0), n);
            break e;
          }
          uf(l, a, ke, fi, vs, t, et, Za, Ll, pa, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    Ut(e);
  }
  function uf(e, t, a, l, n, u, i, c, s, o, m, r, d, y) {
    if (e.timeoutHandle = -1, r = t.subtreeFlags, r & 8192 || (r & 16785408) === 16785408) {
      r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: Kt
      }, fm(t, u, r);
      var T = (u & 62914560) === u ? qi - tt() : (u & 4194048) === u ? ym - tt() : 0;
      if (T = Eg(r, T), T !== null) {
        Ft = u, e.cancelPendingCommit = T(sf.bind(null, e, t, u, a, l, n, i, c, s, m, r, null, d, y)), ga(e, u, i, !o);
        return;
      }
    }
    sf(e, t, u, a, l, n, i, c, s);
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
  function ga(e, t, a, l) {
    t &= ~Mr, t &= ~Za, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - lt(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && Ed(e, a, t);
  }
  function Li() {
    return F & 6 ? true : (tu(0), false);
  }
  function Cr() {
    if (J !== null) {
      if (ee === 0) var e = J.return;
      else e = J, Jt = al = null, mr(e), Nl = null, Bn = 0, e = J;
      for (; e !== null; ) Fh(e.alternate, e), e = e.return;
      J = null;
    }
  }
  function Gl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, ng(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ft = 0, Cr(), ne = e, J = a = $t(e.current, null), $ = t, ee = 0, Fe = null, pa = false, $l = Jn(e, t), Ar = false, Ll = et = Mr = Za = wa = me = 0, ke = Mn = null, vs = false, t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var n = 31 - lt(l), u = 1 << n;
      t |= e[n], l &= ~u;
    }
    return aa = t, wi(), a;
  }
  function bm(e, t) {
    Q = null, Y.H = Ln, t === Jl || t === Di ? (t = Bo(), ee = 3) : t === cr ? (t = Bo(), ee = 4) : ee = t === _r ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Fe = t, J === null && (me = 1, ci(e, mt(t, e.current)));
  }
  function Sm() {
    var e = it.current;
    return e === null ? true : ($ & 4194048) === $ ? pt === null : ($ & 62914560) === $ || $ & 536870912 ? e === pt : false;
  }
  function xm() {
    var e = Y.H;
    return Y.H = Ln, e === null ? Ln : e;
  }
  function Em() {
    var e = Y.A;
    return Y.A = Hp, e;
  }
  function di() {
    me = 4, pa || ($ & 4194048) !== $ && it.current !== null || ($l = true), !(wa & 134217727) && !(Za & 134217727) || ne === null || ga(ne, $, et, false);
  }
  function _c(e, t, a) {
    var l = F;
    F |= 2;
    var n = xm(), u = Em();
    (ne !== e || $ !== t) && (fi = null, Gl(e, t)), t = false;
    var i = me;
    e: do
      try {
        if (ee !== 0 && J !== null) {
          var c = J, s = Fe;
          switch (ee) {
            case 8:
              Cr(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = true);
              var o = ee;
              if (ee = 0, Fe = null, zl(e, c, s, o), a && $l) {
                i = 0;
                break e;
              }
              break;
            default:
              o = ee, ee = 0, Fe = null, zl(e, c, s, o);
          }
        }
        Lp(), i = me;
        break;
      } catch (m) {
        bm(e, m);
      }
    while (true);
    return t && e.shellSuspendCounter++, Jt = al = null, F = l, Y.H = n, Y.A = u, J === null && (ne = null, $ = 0, wi()), i;
  }
  function Lp() {
    for (; J !== null; ) _m(J);
  }
  function Yp(e, t) {
    var a = F;
    F |= 2;
    var l = xm(), n = Em();
    ne !== e || $ !== t ? (fi = null, oi = tt() + 500, Gl(e, t)) : $l = Jn(e, t);
    e: do
      try {
        if (ee !== 0 && J !== null) {
          t = J;
          var u = Fe;
          t: switch (ee) {
            case 1:
              ee = 0, Fe = null, zl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Ho(u)) {
                ee = 0, Fe = null, cf(t);
                break;
              }
              t = function() {
                ee !== 2 && ee !== 9 || ne !== e || (ee = 7), Ut(e);
              }, u.then(t, t);
              break e;
            case 3:
              ee = 7;
              break e;
            case 4:
              ee = 5;
              break e;
            case 7:
              Ho(u) ? (ee = 0, Fe = null, cf(t)) : (ee = 0, Fe = null, zl(e, t, u, 7));
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
                      o !== null ? (J = o, Yi(o)) : J = null;
                    }
                    break t;
                  }
              }
              ee = 0, Fe = null, zl(e, t, u, 5);
              break;
            case 6:
              ee = 0, Fe = null, zl(e, t, u, 6);
              break;
            case 8:
              Cr(), me = 6;
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
    return Jt = al = null, Y.H = l, Y.A = n, F = a, J !== null ? 0 : (ne = null, $ = 0, wi(), me);
  }
  function Gp() {
    for (; J !== null && !oy(); ) _m(J);
  }
  function _m(e) {
    var t = Wh(e.alternate, e, aa);
    e.memoizedProps = e.pendingProps, t === null ? Yi(e) : J = t;
  }
  function cf(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Io(a, t, t.pendingProps, t.type, void 0, $);
        break;
      case 11:
        t = Io(a, t, t.pendingProps, t.type.render, t.ref, $);
        break;
      case 5:
        mr(t);
      default:
        Fh(a, t), t = J = Fd(t, aa), t = Wh(a, t, aa);
    }
    e.memoizedProps = e.pendingProps, t === null ? Yi(e) : J = t;
  }
  function zl(e, t, a, l) {
    Jt = al = null, mr(t), Nl = null, Bn = 0;
    var n = t.return;
    try {
      if (Cp(e, n, t, a, $)) {
        me = 1, ci(e, mt(a, e.current)), J = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw J = n, u;
      me = 1, ci(e, mt(a, e.current)), J = null;
      return;
    }
    t.flags & 32768 ? (W || l === 1 ? e = true : $l || $ & 536870912 ? e = false : (pa = e = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = it.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Tm(t, e)) : Yi(t);
  }
  function Yi(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Tm(t, pa);
        return;
      }
      e = t.return;
      var a = Op(t.alternate, t, aa);
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
  function sf(e, t, a, l, n, u, i, c, s) {
    e.cancelPendingCommit = null;
    do
      Gi();
    while (Ee !== 0);
    if (F & 6) throw Error(N(327));
    if (t !== null) {
      if (t === e.current) throw Error(N(177));
      if (u = t.lanes | t.childLanes, u |= er, Sy(e, a, u, i, c, s), e === ne && (J = ne = null, $ = 0), Yl = t, Ta = e, Ft = a, bs = u, Ss = n, pm = l, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Vp(Wu, function() {
        return Cm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, t.subtreeFlags & 13878 || l) {
        l = Y.T, Y.T = null, n = P.p, P.p = 2, i = F, F |= 4;
        try {
          jp(e, t, a);
        } finally {
          F = i, P.p = n, Y.T = l;
        }
      }
      Ee = 1, zm(), Rm(), Am();
    }
  }
  function zm() {
    if (Ee === 1) {
      Ee = 0;
      var e = Ta, t = Yl, a = (t.flags & 13878) !== 0;
      if (t.subtreeFlags & 13878 || a) {
        a = Y.T, Y.T = null;
        var l = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          sm(t, e);
          var u = zs, i = Qd(e.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Xd(c.ownerDocument.documentElement, c)) {
            if (s !== null && Is(c)) {
              var o = s.start, m = s.end;
              if (m === void 0 && (m = o), "selectionStart" in c) c.selectionStart = o, c.selectionEnd = Math.min(m, c.value.length);
              else {
                var r = c.ownerDocument || document, d = r && r.defaultView || window;
                if (d.getSelection) {
                  var y = d.getSelection(), T = c.textContent.length, M = Math.min(s.start, T), A = s.end === void 0 ? M : Math.min(s.end, T);
                  !y.extend && M > A && (i = A, A = M, M = i);
                  var f = Co(c, M), h = Co(c, A);
                  if (f && h && (y.rangeCount !== 1 || y.anchorNode !== f.node || y.anchorOffset !== f.offset || y.focusNode !== h.node || y.focusOffset !== h.offset)) {
                    var p = r.createRange();
                    p.setStart(f.node, f.offset), y.removeAllRanges(), M > A ? (y.addRange(p), y.extend(h.node, h.offset)) : (p.setEnd(h.node, h.offset), y.addRange(p));
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
          Si = !!Ts, zs = Ts = null;
        } finally {
          F = n, P.p = l, Y.T = a;
        }
      }
      e.current = t, Ee = 2;
    }
  }
  function Rm() {
    if (Ee === 2) {
      Ee = 0;
      var e = Ta, t = Yl, a = (t.flags & 8772) !== 0;
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
  function Am() {
    if (Ee === 4 || Ee === 3) {
      Ee = 0, fy();
      var e = Ta, t = Yl, a = Ft, l = pm;
      t.subtreeFlags & 10256 || t.flags & 10256 ? Ee = 5 : (Ee = 0, Yl = Ta = null, Mm(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (_a = null), Zs(a), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
        at.onCommitFiberRoot(Kn, t, void 0, (t.current.flags & 128) === 128);
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
      Ft & 3 && Gi(), Ut(e), n = e.pendingLanes, a & 261930 && n & 42 ? e === xs ? Cn++ : (Cn = 0, xs = e) : Cn = 0, tu(0);
    }
  }
  function Mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Pn(t)));
  }
  function Gi() {
    return zm(), Rm(), Am(), Cm();
  }
  function Cm() {
    if (Ee !== 5) return false;
    var e = Ta, t = bs;
    bs = 0;
    var a = Zs(Ft), l = Y.T, n = P.p;
    try {
      P.p = 32 > a ? 32 : a, Y.T = null, a = Ss, Ss = null;
      var u = Ta, i = Ft;
      if (Ee = 0, Yl = Ta = null, Ft = 0, F & 6) throw Error(N(331));
      var c = F;
      if (F |= 4, hm(u.current), om(u, u.current, i, a), F = c, tu(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
        at.onPostCommitFiberRoot(Kn, u);
      } catch {
      }
      return true;
    } finally {
      P.p = n, Y.T = l, Mm(e, t);
    }
  }
  function rf(e, t, a) {
    t = mt(a, t), t = ms(e.stateNode, t, 2), e = Ea(e, t, 2), e !== null && ($n(e, 2), Ut(e));
  }
  function te(e, t, a) {
    if (e.tag === 3) rf(e, e, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        rf(t, e, a);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (_a === null || !_a.has(l))) {
          e = mt(a, e), a = kh(2), l = Ea(t, a, 2), l !== null && (Vh(a, l, t, e), $n(l, 2), Ut(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function Tc(e, t, a) {
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
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ne === e && ($ & a) === a && (me === 4 || me === 3 && ($ & 62914560) === $ && 300 > tt() - qi ? !(F & 2) && Gl(e, 0) : Mr |= a, Ll === $ && (Ll = 0)), Ut(e);
  }
  function Nm(e, t) {
    t === 0 && (t = xd()), e = tl(e, t), e !== null && ($n(e, t), Ut(e));
  }
  function Qp(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Nm(e, a);
  }
  function kp(e, t) {
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
  function Vp(e, t) {
    return ks(e, t);
  }
  var hi = null, hl = null, Es = false, mi = false, zc = false, va = 0;
  function Ut(e) {
    e !== hl && e.next === null && (hl === null ? hi = hl = e : hl = hl.next = e), mi = true, Es || (Es = true, Kp());
  }
  function tu(e, t) {
    if (!zc && mi) {
      zc = true;
      do
        for (var a = false, l = hi; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - lt(42 | e) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = true, of(l, u));
          } else u = $, u = Ai(l, l === ne ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), !(u & 3) || Jn(l, u) || (a = true, of(l, u));
          l = l.next;
        }
      while (a);
      zc = false;
    }
  }
  function Zp() {
    wm();
  }
  function wm() {
    mi = Es = false;
    var e = 0;
    va !== 0 && lg() && (e = va);
    for (var t = tt(), a = null, l = hi; l !== null; ) {
      var n = l.next, u = Om(l, t);
      u === 0 ? (l.next = null, a === null ? hi = n : a.next = n, n === null && (hl = a)) : (a = l, (e !== 0 || u & 3) && (mi = true)), l = n;
    }
    Ee !== 0 && Ee !== 5 || tu(e), va !== 0 && (va = 0);
  }
  function Om(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - lt(u), c = 1 << i, s = n[i];
      s === -1 ? (!(c & a) || c & l) && (n[i] = by(c, t)) : s <= t && (e.expiredLanes |= c), u &= ~c;
    }
    if (t = ne, a = $, a = Ai(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (ee === 2 || ee === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Ii(l), e.callbackNode = null, e.callbackPriority = 0;
    if (!(a & 3) || Jn(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Ii(l), Zs(a)) {
        case 2:
        case 8:
          a = bd;
          break;
        case 32:
          a = Wu;
          break;
        case 268435456:
          a = Sd;
          break;
        default:
          a = Wu;
      }
      return l = Dm.bind(null, e), a = ks(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Ii(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Dm(e, t) {
    if (Ee !== 0 && Ee !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Gi() && e.callbackNode !== a) return null;
    var l = $;
    return l = Ai(e, e === ne ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (vm(e, l, t), Om(e, tt()), e.callbackNode != null && e.callbackNode === a ? Dm.bind(null, e) : null);
  }
  function of(e, t) {
    if (Gi()) return null;
    vm(e, t, true);
  }
  function Kp() {
    ug(function() {
      F & 6 ? ks(vd, Zp) : wm();
    });
  }
  function Nr() {
    if (va === 0) {
      var e = Hl;
      e === 0 && (e = hu, hu <<= 1, !(hu & 261888) && (hu = 256)), va = e;
    }
    return va;
  }
  function ff(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Nu("" + e);
  }
  function df(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Jp(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = ff((n[Ke] || null).action), i = l.submitter;
      i && (t = (t = i[Ke] || null) ? ff(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new Mi("action", "action", null, l, n);
      e.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (va !== 0) {
                  var s = i ? df(n, i) : new FormData(n);
                  ds(a, {
                    pending: true,
                    data: s,
                    method: n.method,
                    action: u
                  }, null, s);
                }
              } else typeof u == "function" && (c.preventDefault(), s = i ? df(n, i) : new FormData(n), ds(a, {
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
  for (var Rc = 0; Rc < es.length; Rc++) {
    var Ac = es[Rc], $p = Ac.toLowerCase(), Wp = Ac[0].toUpperCase() + Ac.slice(1);
    zt($p, "on" + Wp);
  }
  zt(Vd, "onAnimationEnd");
  zt(Zd, "onAnimationIteration");
  zt(Kd, "onAnimationStart");
  zt("dblclick", "onDoubleClick");
  zt("focusin", "onFocus");
  zt("focusout", "onBlur");
  zt(dp, "onTransitionRun");
  zt(hp, "onTransitionStart");
  zt(mp, "onTransitionCancel");
  zt(Jd, "onTransitionEnd");
  jl("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  jl("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  jl("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  jl("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Pa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Pa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Pa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Pa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Pa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Pa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yn));
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
            Pu(m);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < l.length; i++) {
          if (c = l[i], s = c.instance, o = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break e;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (m) {
            Pu(m);
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
  function Mc(e, t, a) {
    var l = 0;
    t && (l |= 4), Um(a, e, l, t);
  }
  var _u = "_reactListening" + Math.random().toString(36).slice(2);
  function wr(e) {
    if (!e[_u]) {
      e[_u] = true, Rd.forEach(function(a) {
        a !== "selectionchange" && (Fp.has(a) || Mc(a, false, e), Mc(a, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_u] || (t[_u] = true, Mc("selectionchange", false, t));
    }
  }
  function Um(e, t, a, l) {
    switch (Jm(t)) {
      case 2:
        var n = zg;
        break;
      case 8:
        n = Rg;
        break;
      default:
        n = Ur;
    }
    a = n.bind(null, t, a, e), n = void 0, !Fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: true,
      passive: n
    }) : e.addEventListener(t, a, true) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, false);
  }
  function Cc(e, t, a, l, n) {
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
          if (i = pl(c), i === null) return;
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
      var o = u, m = $s(a), r = [];
      e: {
        var d = $d.get(e);
        if (d !== void 0) {
          var y = Mi, T = e;
          switch (e) {
            case "keypress":
              if (Ou(a) === 0) break e;
            case "keydown":
            case "keyup":
              y = ky;
              break;
            case "focusin":
              T = "focus", y = nc;
              break;
            case "focusout":
              T = "blur", y = nc;
              break;
            case "beforeblur":
            case "afterblur":
              y = nc;
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
              y = bo;
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
            case Vd:
            case Zd:
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
              y = xo;
              break;
            case "toggle":
            case "beforetoggle":
              y = Iy;
          }
          var M = (t & 4) !== 0, A = !M && (e === "scroll" || e === "scrollend"), f = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var h = o, p; h !== null; ) {
            var E = h;
            if (p = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || p === null || f === null || (E = On(h, f), E != null && M.push(Gn(h, E, p))), A) break;
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
          if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && a !== Wc && (T = a.relatedTarget || a.fromElement) && (pl(T) || T[Vl])) break e;
          if ((y || d) && (d = m.window === m ? m : (d = m.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (T = a.relatedTarget || a.toElement, y = o, T = T ? pl(T) : null, T !== null && (A = Zn(T), M = T.tag, T !== A || M !== 5 && M !== 27 && M !== 6) && (T = null)) : (y = null, T = o), y !== T)) {
            if (M = bo, E = "onMouseLeave", f = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (M = xo, E = "onPointerLeave", f = "onPointerEnter", h = "pointer"), A = y == null ? d : hn(y), p = T == null ? d : hn(T), d = new M(E, h + "leave", y, a, m), d.target = A, d.relatedTarget = p, E = null, pl(m) === o && (M = new M(f, h + "enter", T, a, m), M.target = p, M.relatedTarget = A, E = M), A = E, y && T) t: {
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
            y !== null && hf(r, d, y, M, false), T !== null && A !== null && hf(r, A, T, M, true);
          }
        }
        e: {
          if (d = o ? hn(o) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file") var x = zo;
          else if (To(d)) if (Yd) x = rp;
          else {
            x = cp;
            var _ = ip;
          }
          else y = d.nodeName, !y || y.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? o && Js(o.elementType) && (x = zo) : x = sp;
          if (x && (x = x(e, o))) {
            Ld(r, x, a, m);
            break e;
          }
          _ && _(e, d, o), e === "focusout" && o && d.type === "number" && o.memoizedProps.value != null && $c(d, "number", d.value);
        }
        switch (_ = o ? hn(o) : window, e) {
          case "focusin":
            (To(_) || _.contentEditable === "true") && (bl = _, Pc = o, Sn = null);
            break;
          case "focusout":
            Sn = Pc = bl = null;
            break;
          case "mousedown":
            Ic = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ic = false, No(r, a, m);
            break;
          case "selectionchange":
            if (fp) break;
          case "keydown":
          case "keyup":
            No(r, a, m);
        }
        var C;
        if (Ps) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else vl ? Bd(e, a) && (R = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (R = "onCompositionStart");
        R && (Hd && a.locale !== "ko" && (vl || R !== "onCompositionStart" ? R === "onCompositionEnd" && vl && (C = Ud()) : (ya = m, Ws = "value" in ya ? ya.value : ya.textContent, vl = true)), _ = yi(o, R), 0 < _.length && (R = new So(R, e, null, a, m), r.push({
          event: R,
          listeners: _
        }), C ? R.data = C : (C = qd(a), C !== null && (R.data = C)))), (C = tp ? ap(e, a) : lp(e, a)) && (R = yi(o, "onBeforeInput"), 0 < R.length && (_ = new So("onBeforeInput", "beforeinput", null, a, m), r.push({
          event: _,
          listeners: R
        }), _.data = C)), Jp(r, e, o, a, m);
      }
      jm(r, t);
    });
  }
  function Gn(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function yi(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = On(e, a), n != null && l.unshift(Gn(e, n, u)), n = On(e, t), n != null && l.push(Gn(e, n, u))), e.tag === 3) return l;
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
  function hf(e, t, a, l, n) {
    for (var u = t._reactName, i = []; a !== null && a !== l; ) {
      var c = a, s = c.alternate, o = c.stateNode;
      if (c = c.tag, s !== null && s === l) break;
      c !== 5 && c !== 26 && c !== 27 || o === null || (s = o, n ? (o = On(a, u), o != null && i.unshift(Gn(a, o, s))) : n || (o = On(a, u), o != null && i.push(Gn(a, o, s)))), a = a.return;
    }
    i.length !== 0 && e.push({
      event: t,
      listeners: i
    });
  }
  var Ip = /\r\n?/g, eg = /\u0000|\uFFFD/g;
  function mf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ip, `
`).replace(eg, "");
  }
  function Hm(e, t) {
    return t = mf(t), mf(e) === t;
  }
  function ae(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Ul(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Ul(e, "" + l);
        break;
      case "className":
        pu(e, "class", l);
        break;
      case "tabIndex":
        pu(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pu(e, a, l);
        break;
      case "style":
        Dd(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          pu(e, "data", l);
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
        l = Nu("" + l), e.setAttribute(a, l);
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
        l = Nu("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = Kt);
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
        a = Nu("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
        K("beforetoggle", e), K("toggle", e), Cu(e, "popover", l);
        break;
      case "xlinkActuate":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Bt(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Bt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Cu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = My.get(a) || a, Cu(e, a, l));
    }
  }
  function _s(e, t, a, l, n, u) {
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
        typeof l == "string" ? Ul(e, l) : (typeof l == "number" || typeof l == "bigint") && Ul(e, "" + l);
        break;
      case "onScroll":
        l != null && K("scroll", e);
        break;
      case "onScrollEnd":
        l != null && K("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Kt);
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
        if (!Ad.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[Ke] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
            typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
            break e;
          }
          a in e ? e[a] = l : l === true ? e.setAttribute(a, "") : Cu(e, a, l);
        }
    }
  }
  function Ue(e, t, a) {
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
        t = u, a = i, e.multiple = !!l, t != null ? Al(e, !!l, t, false) : a != null && Al(e, !!l, a, true);
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
        for (l = 0; l < Yn.length; l++) K(Yn[l], e);
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
        if (Js(t)) {
          for (m in a) a.hasOwnProperty(m) && (l = a[m], l !== void 0 && _s(e, t, m, l, a, void 0));
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
        Jc(e, i, c, s, o, m, u, n);
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
        t = c, a = i, l = y, d != null ? Al(e, !!a, d, false) : !!l != !!a && (t != null ? Al(e, !!a, t, true) : Al(e, !!a, a ? [] : "", false));
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
        if (Js(t)) {
          for (var A in a) d = a[A], a.hasOwnProperty(A) && d !== void 0 && !l.hasOwnProperty(A) && _s(e, t, A, void 0, l, d);
          for (m in l) d = l[m], y = a[m], !l.hasOwnProperty(m) || d === y || d === void 0 && y === void 0 || _s(e, t, m, d, l, y);
          return;
        }
    }
    for (var f in a) d = a[f], a.hasOwnProperty(f) && d != null && !l.hasOwnProperty(f) && ae(e, t, f, null, l, d);
    for (r in l) d = l[r], y = a[r], !l.hasOwnProperty(r) || d === y || d == null && y == null || ae(e, t, r, d, l, y);
  }
  function yf(e) {
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
        if (u && c && yf(i)) {
          for (i = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var s = a[l], o = s.startTime;
            if (o > c) break;
            var m = s.transferSize, r = s.initiatorType;
            m && yf(r) && (s = s.responseEnd, i += m * (s < c ? 1 : (c - o) / (s - o)));
          }
          if (--l, t += 8 * (u + i) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ts = null, zs = null;
  function pi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function pf(e) {
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
  function Rs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nc = null;
  function lg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Nc ? false : (Nc = e, true) : (Nc = null, false);
  }
  var qm = typeof setTimeout == "function" ? setTimeout : void 0, ng = typeof clearTimeout == "function" ? clearTimeout : void 0, gf = typeof Promise == "function" ? Promise : void 0, ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof gf < "u" ? function(e) {
    return gf.resolve(null).then(e).catch(ig);
  } : qm;
  function ig(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Da(e) {
    return e === "head";
  }
  function vf(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (l === 0) {
          e.removeChild(n), Ql(t);
          return;
        }
        l--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") Nn(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, Nn(a);
        for (var u = a.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[Wn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = i;
        }
      } else a === "body" && Nn(e.ownerDocument.body);
      a = n;
    } while (a);
    Ql(t);
  }
  function bf(e, t) {
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
          As(a), Ks(a);
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
        if (!e[Wn]) switch (t) {
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
  function Ms(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Cs(e) {
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
  var Ns = null;
  function Sf(e) {
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
  function xf(e) {
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
    switch (t = pi(a), e) {
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
  function Nn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ks(e);
  }
  var vt = /* @__PURE__ */ new Map(), Ef = /* @__PURE__ */ new Set();
  function gi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var na = P.d;
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
    var e = na.f(), t = Li();
    return e || t;
  }
  function fg(e) {
    var t = Zl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Dh(t) : na.r(e);
  }
  var Wl = typeof document > "u" ? null : document;
  function Gm(e, t, a) {
    var l = Wl;
    if (l && typeof t == "string" && t) {
      var n = ht(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Ef.has(n) || (Ef.add(n), e = {
        rel: e,
        crossOrigin: a,
        href: t
      }, l.querySelector(n) === null && (t = l.createElement("link"), Ue(t, "link", e), Ae(t), l.head.appendChild(t)));
    }
  }
  function dg(e) {
    na.D(e), Gm("dns-prefetch", e, null);
  }
  function hg(e, t) {
    na.C(e, t), Gm("preconnect", e, t);
  }
  function mg(e, t, a) {
    na.L(e, t, a);
    var l = Wl;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ht(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ht(a.imageSizes) + '"]')) : n += '[href="' + ht(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Xl(e);
          break;
        case "script":
          u = Fl(e);
      }
      vt.has(u) || (e = re({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : e,
        as: t
      }, a), vt.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(au(u)) || t === "script" && l.querySelector(lu(u)) || (t = l.createElement("link"), Ue(t, "link", e), Ae(t), l.head.appendChild(t)));
    }
  }
  function yg(e, t) {
    na.m(e, t);
    var a = Wl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + ht(l) + '"][href="' + ht(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Fl(e);
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
            if (a.querySelector(lu(u))) return;
        }
        l = a.createElement("link"), Ue(l, "link", e), Ae(l), a.head.appendChild(l);
      }
    }
  }
  function pg(e, t, a) {
    na.S(e, t, a);
    var l = Wl;
    if (l && e) {
      var n = Rl(l).hoistableStyles, u = Xl(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = l.querySelector(au(u))) c.loading = 5;
        else {
          e = re({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, a), (a = vt.get(u)) && Or(e, a);
          var s = i = l.createElement("link");
          Ae(s), Ue(s, "link", e), s._p = new Promise(function(o, m) {
            s.onload = o, s.onerror = m;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Yu(i, t, l);
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
    na.X(e, t);
    var a = Wl;
    if (a && e) {
      var l = Rl(a).hoistableScripts, n = Fl(e), u = l.get(n);
      u || (u = a.querySelector(lu(n)), u || (e = re({
        src: e,
        async: true
      }, t), (t = vt.get(n)) && Dr(e, t), u = a.createElement("script"), Ae(u), Ue(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function vg(e, t) {
    na.M(e, t);
    var a = Wl;
    if (a && e) {
      var l = Rl(a).hoistableScripts, n = Fl(e), u = l.get(n);
      u || (u = a.querySelector(lu(n)), u || (e = re({
        src: e,
        async: true,
        type: "module"
      }, t), (t = vt.get(n)) && Dr(e, t), u = a.createElement("script"), Ae(u), Ue(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function _f(e, t, a, l) {
    var n = (n = ba.current) ? gi(n) : null;
    if (!n) throw Error(N(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Xl(a.href), a = Rl(n).hoistableStyles, l = a.get(t), l || (l = {
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
          e = Xl(a.href);
          var u = Rl(n).hoistableStyles, i = u.get(e);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(e, i), (u = n.querySelector(au(e))) && !u._p && (i.instance = u, i.state.loading = 5), vt.has(e) || (a = {
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Fl(a), a = Rl(n).hoistableScripts, l = a.get(t), l || (l = {
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
  function Xl(e) {
    return 'href="' + ht(e) + '"';
  }
  function au(e) {
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
    }), Ue(t, "link", a), Ae(t), e.head.appendChild(t));
  }
  function Fl(e) {
    return '[src="' + ht(e) + '"]';
  }
  function lu(e) {
    return "script[async]" + e;
  }
  function Tf(e, t, a) {
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
        return l = (e.ownerDocument || e).createElement("style"), Ae(l), Ue(l, "style", n), Yu(l, a.precedence, e), t.instance = l;
      case "stylesheet":
        n = Xl(a.href);
        var u = e.querySelector(au(n));
        if (u) return t.state.loading |= 4, t.instance = u, Ae(u), u;
        l = Xm(a), (n = vt.get(n)) && Or(l, n), u = (e.ownerDocument || e).createElement("link"), Ae(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Ue(u, "link", l), t.state.loading |= 4, Yu(u, a.precedence, e), t.instance = u;
      case "script":
        return u = Fl(a.src), (n = e.querySelector(lu(u))) ? (t.instance = n, Ae(n), n) : (l = a, (n = vt.get(u)) && (l = re({}, a), Dr(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ae(n), Ue(n, "link", l), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(N(443, t.type));
    }
    else t.type === "stylesheet" && !(t.state.loading & 4) && (l = t.instance, t.state.loading |= 4, Yu(l, a.precedence, e));
    return t.instance;
  }
  function Yu(e, t, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Or(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Dr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Gu = null;
  function zf(e, t, a) {
    if (Gu === null) {
      var l = /* @__PURE__ */ new Map(), n = Gu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else n = Gu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Wn] || u[Oe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Rf(e, t, a) {
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
        var n = Xl(l.href), u = t.querySelector(au(n));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = vi.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, Ae(u);
          return;
        }
        u = t.ownerDocument || t, l = Xm(l), (n = vt.get(n)) && Or(l, n), u = u.createElement("link"), Ae(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Ue(u, "link", l), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && !(a.state.loading & 3) && (e.count++, a = vi.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var wc = 0;
  function Eg(e, t) {
    return e.stylesheets && e.count === 0 && Xu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && wc === 0 && (wc = 62500 * ag());
      var n = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > wc ? 50 : 800) + t);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function vi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var bi = null;
  function Xu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, bi = /* @__PURE__ */ new Map(), t.forEach(_g, e), bi = null, vi.call(e));
  }
  function _g(e, t) {
    if (!(t.state.loading & 4)) {
      var a = bi.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), bi.set(e, a);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = vi.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Xn = {
    $$typeof: Zt,
    Provider: null,
    Consumer: null,
    _currentValue: Xa,
    _currentValue2: Xa,
    _threadCount: 0
  };
  function Tg(e, t, a, l, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ec(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ec(0), this.hiddenUpdates = ec(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function km(e, t, a, l, n, u, i, c, s, o, m, r) {
    return e = new Tg(e, t, a, i, s, o, m, r, c), t = 1, u === true && (t |= 24), u = Ie(3, null, null, t), e.current = u, u.stateNode = e, t = ur(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, sr(u), e;
  }
  function Vm(e) {
    return e ? (e = El, e) : El;
  }
  function Zm(e, t, a, l, n, u) {
    n = Vm(n), l.context === null ? l.context = n : l.pendingContext = n, l = xa(t), l.payload = {
      element: a
    }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Ea(e, l, t), a !== null && (Ze(a, e, t), En(a, e, t));
  }
  function Af(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function jr(e, t) {
    Af(e, t), (e = e.alternate) && Af(e, t);
  }
  function Km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = tl(e, 67108864);
      t !== null && Ze(t, e, 67108864), jr(e, 67108864);
    }
  }
  function Mf(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = nt();
      t = Vs(t);
      var a = tl(e, t);
      a !== null && Ze(a, e, t), jr(e, t);
    }
  }
  var Si = true;
  function zg(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 2, Ur(e, t, a, l);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function Rg(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 8, Ur(e, t, a, l);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function Ur(e, t, a, l) {
    if (Si) {
      var n = ws(l);
      if (n === null) Cc(e, t, l, xi, a), Cf(e, l);
      else if (Mg(n, e, t, a, l)) l.stopPropagation();
      else if (Cf(e, l), t & 4 && -1 < Ag.indexOf(e)) {
        for (; n !== null; ) {
          var u = Zl(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = qa(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - lt(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  Ut(u), !(F & 6) && (oi = tt() + 500, tu(0));
                }
              }
              break;
            case 31:
            case 13:
              c = tl(u, 2), c !== null && Ze(c, u, 2), Li(), jr(u, 2);
          }
          if (u = ws(l), u === null && Cc(e, t, l, xi, a), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else Cc(e, t, l, null, a);
    }
  }
  function ws(e) {
    return e = $s(e), Hr(e);
  }
  var xi = null;
  function Hr(e) {
    if (xi = null, e = pl(e), e !== null) {
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
    return xi = e, null;
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
          case Wu:
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
  var Os = false, za = null, Ra = null, Aa = null, Qn = /* @__PURE__ */ new Map(), kn = /* @__PURE__ */ new Map(), ha = [], Ag = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Cf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        za = null;
        break;
      case "dragenter":
      case "dragleave":
        Ra = null;
        break;
      case "mouseover":
      case "mouseout":
        Aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kn.delete(t.pointerId);
    }
  }
  function rn(e, t, a, l, n, u) {
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
        return za = rn(za, e, t, a, l, n), true;
      case "dragenter":
        return Ra = rn(Ra, e, t, a, l, n), true;
      case "mouseover":
        return Aa = rn(Aa, e, t, a, l, n), true;
      case "pointerover":
        var u = n.pointerId;
        return Qn.set(u, rn(Qn.get(u) || null, e, t, a, l, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, kn.set(u, rn(kn.get(u) || null, e, t, a, l, n)), true;
    }
    return false;
  }
  function $m(e) {
    var t = pl(e.target);
    if (t !== null) {
      var a = Zn(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = hd(a), t !== null) {
            e.blockedOn = t, fo(e.priority, function() {
              Mf(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = md(a), t !== null) {
            e.blockedOn = t, fo(e.priority, function() {
              Mf(a);
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
  function Qu(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = ws(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        Wc = l, a.target.dispatchEvent(l), Wc = null;
      } else return t = Zl(a), t !== null && Km(t), e.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function Nf(e, t, a) {
    Qu(e) && a.delete(t);
  }
  function Cg() {
    Os = false, za !== null && Qu(za) && (za = null), Ra !== null && Qu(Ra) && (Ra = null), Aa !== null && Qu(Aa) && (Aa = null), Qn.forEach(Nf), kn.forEach(Nf);
  }
  function Tu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Os || (Os = true, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Cg)));
  }
  var zu = null;
  function wf(e) {
    zu !== e && (zu = e, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, function() {
      zu === e && (zu = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t], l = e[t + 1], n = e[t + 2];
        if (typeof l != "function") {
          if (Hr(l || a) === null) continue;
          break;
        }
        var u = Zl(a);
        u !== null && (e.splice(t, 3), t -= 3, ds(u, {
          pending: true,
          data: n,
          method: a.method,
          action: l
        }, l, n));
      }
    }));
  }
  function Ql(e) {
    function t(s) {
      return Tu(s, e);
    }
    za !== null && Tu(za, e), Ra !== null && Tu(Ra, e), Aa !== null && Tu(Aa, e), Qn.forEach(t), kn.forEach(t);
    for (var a = 0; a < ha.length; a++) {
      var l = ha[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ha.length && (a = ha[0], a.blockedOn === null); ) $m(a), a.blockedOn === null && ha.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
      var n = a[l], u = a[l + 1], i = n[Ke] || null;
      if (typeof u == "function") i || wf(a);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[Ke] || null) c = i.formAction;
          else if (Hr(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), wf(a);
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
  function Br(e) {
    this._internalRoot = e;
  }
  Xi.prototype.render = Br.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    var a = t.current, l = nt();
    Zm(a, l, e, t, null, null);
  };
  Xi.prototype.unmount = Br.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Zm(e.current, 2, null, e, null, null), Li(), t[Vl] = null;
    }
  };
  function Xi(e) {
    this._internalRoot = e;
  }
  Xi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = zd();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var a = 0; a < ha.length && t !== 0 && t < ha[a].priority; a++) ;
      ha.splice(a, 0, e), a === 0 && $m(e);
    }
  };
  var Of = fd.version;
  if (Of !== "19.2.5") throw Error(N(527, Of, "19.2.5"));
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
    var Ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ru.isDisabled && Ru.supportsFiber) try {
      Kn = Ru.inject(Ng), at = Ru;
    } catch {
    }
  }
  zi.createRoot = function(e, t) {
    if (!dd(e)) throw Error(N(299));
    var a = false, l = "", n = Gh, u = Xh, i = Qh;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = km(e, 1, false, null, null, a, l, null, n, u, i, Wm), e[Vl] = t.current, wr(e), new Br(t);
  };
  zi.hydrateRoot = function(e, t, a) {
    if (!dd(e)) throw Error(N(299));
    var l = false, n = "", u = Gh, i = Xh, c = Qh, s = null;
    return a != null && (a.unstable_strictMode === true && (l = true), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (s = a.formState)), t = km(e, 1, true, t, a ?? null, l, n, s, u, i, c, Wm), t.context = Vm(null), a = t.current, l = nt(), l = Vs(l), n = xa(l), n.callback = null, Ea(a, n, l), a = l, t.current.lanes = a, $n(t, a), Ut(t), e[Vl] = t.current, wr(e), new Xi(t);
  };
  zi.version = "19.2.5";
  function Fm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm);
    } catch (e) {
      console.error(e);
    }
  }
  Fm(), nd.exports = zi;
  var wg = nd.exports;
  let Og, Dg, Df;
  Og = "modulepreload";
  Dg = function(e) {
    return "/" + e;
  };
  Df = {};
  St = function(t, a, l) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(a.map((s) => {
        if (s = Dg(s), s in Df) return;
        Df[s] = true;
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
  var jf = "popstate";
  function Uf(e) {
    return typeof e == "object" && e != null && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
  }
  function jg(e = {}) {
    function t(l, n) {
      var _a2;
      let u = (_a2 = n.state) == null ? void 0 : _a2.masked, { pathname: i, search: c, hash: s } = u || l.location;
      return Ds("", {
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
  function Hf(e, t) {
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
  function Ds(e, t, a = null, l, n) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? Pl(t) : t,
      state: a,
      key: t && t.key || l || Ug(),
      unstable_mask: n
    };
  }
  function Vn({ pathname: e = "/", search: t = "", hash: a = "" }) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e;
  }
  function Pl(e) {
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
      let A = m(), f = A == null ? null : A - o;
      o = A, s && s({
        action: c,
        location: M.location,
        delta: f
      });
    }
    function d(A, f) {
      c = "PUSH";
      let h = Uf(A) ? A : Ds(M.location, A, f);
      o = m() + 1;
      let p = Hf(h, o), E = M.createHref(h.unstable_mask || h);
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
    function y(A, f) {
      c = "REPLACE";
      let h = Uf(A) ? A : Ds(M.location, A, f);
      o = m();
      let p = Hf(h, o), E = M.createHref(h.unstable_mask || h);
      i.replaceState(p, "", E), u && s && s({
        action: c,
        location: M.location,
        delta: 0
      });
    }
    function T(A) {
      return Bg(A);
    }
    let M = {
      get action() {
        return c;
      },
      get location() {
        return e(n, i);
      },
      listen(A) {
        if (s) throw new Error("A history only accepts one active listener");
        return n.addEventListener(jf, r), s = A, () => {
          n.removeEventListener(jf, r), s = null;
        };
      },
      createHref(A) {
        return t(n, A);
      },
      createURL: T,
      encodeLocation(A) {
        let f = T(A);
        return {
          pathname: f.pathname,
          search: f.search,
          hash: f.hash
        };
      },
      push: d,
      replace: y,
      go(A) {
        return i.go(A);
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
    let n = typeof t == "string" ? Pl(t) : t, u = la(n.pathname || "/", a);
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
      let r = Dt([
        l,
        m.relativePath
      ]), d = a.concat(m);
      i.children && i.children.length > 0 && (de(i.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${r}".`), Im(i.children, t, d, r, s)), !(i.path == null && !i.index) && t.push({
        path: r,
        score: Zg(r, i.index),
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
  var Yg = /^:[\w-]+$/, Gg = 3, Xg = 2, Qg = 1, kg = 10, Vg = -2, Bf = (e) => e === "*";
  function Zg(e, t) {
    let a = e.split("/"), l = a.length;
    return a.some(Bf) && (l += Vg), t && (l += Xg), a.filter((n) => !Bf(n)).reduce((n, u) => n + (Yg.test(u) ? Gg : u === "" ? Qg : kg), l);
  }
  function Kg(e, t) {
    return e.length === t.length && e.slice(0, -1).every((l, n) => l === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function Jg(e, t, a = false) {
    let { routesMeta: l } = e, n = {}, u = "/", i = [];
    for (let c = 0; c < l.length; ++c) {
      let s = l[c], o = c === l.length - 1, m = u === "/" ? t : t.slice(u.length) || "/", r = Ei({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: o
      }, m), d = s.route;
      if (!r && o && a && !l[l.length - 1].route.index && (r = Ei({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: false
      }, m)), !r) return null;
      Object.assign(n, r.params), i.push({
        params: n,
        pathname: Dt([
          u,
          r.pathname
        ]),
        pathnameBase: ev(Dt([
          u,
          r.pathnameBase
        ])),
        route: d
      }), r.pathnameBase !== "/" && (u = Dt([
        u,
        r.pathnameBase
      ]));
    }
    return i;
  }
  function Ei(e, t) {
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
  function la(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let a = t.endsWith("/") ? t.length - 1 : t.length, l = e.charAt(a);
    return l && l !== "/" ? null : e.slice(a) || "/";
  }
  var Fg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function Pg(e, t = "/") {
    let { pathname: a, search: l = "", hash: n = "" } = typeof e == "string" ? Pl(e) : e, u;
    return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? u = qf(a.substring(1), "/") : u = qf(a, t)) : u = t, {
      pathname: u,
      search: tv(l),
      hash: av(n)
    };
  }
  function qf(e, t) {
    let a = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((n) => {
      n === ".." ? a.length > 1 && a.pop() : n !== "." && a.push(n);
    }), a.length > 1 ? a.join("/") : "/";
  }
  function Oc(e, t, a, l) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Ig(e) {
    return e.filter((t, a) => a === 0 || t.route.path && t.route.path.length > 0);
  }
  function qr(e) {
    let t = Ig(e);
    return t.map((a, l) => l === t.length - 1 ? a.pathname : a.pathnameBase);
  }
  function Qi(e, t, a, l = false) {
    let n;
    typeof e == "string" ? n = Pl(e) : (n = {
      ...e
    }, de(!n.pathname || !n.pathname.includes("?"), Oc("?", "pathname", "search", n)), de(!n.pathname || !n.pathname.includes("#"), Oc("#", "pathname", "hash", n)), de(!n.search || !n.search.includes("#"), Oc("#", "search", "hash", n)));
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
  var Dt = (e) => e.join("/").replace(/\/\/+/g, "/"), ev = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), tv = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, av = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, lv = class {
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
      let u = new URL(window.location.href), i = a.startsWith("//") ? new URL(u.protocol + a) : new URL(a), c = la(i.pathname, t);
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
  var Il = b.createContext(null);
  Il.displayName = "DataRouter";
  var ki = b.createContext(null);
  ki.displayName = "DataRouterState";
  var n0 = b.createContext(false);
  function cv() {
    return b.useContext(n0);
  }
  var u0 = b.createContext({
    isTransitioning: false
  });
  u0.displayName = "ViewTransition";
  var sv = b.createContext(/* @__PURE__ */ new Map());
  sv.displayName = "Fetchers";
  var rv = b.createContext(null);
  rv.displayName = "Await";
  var ct = b.createContext(null);
  ct.displayName = "Navigation";
  var nu = b.createContext(null);
  nu.displayName = "Location";
  var Rt = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  Rt.displayName = "Route";
  var Lr = b.createContext(null);
  Lr.displayName = "RouteError";
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
    de(en(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: a, navigator: l } = b.useContext(ct), { hash: n, pathname: u, search: i } = uu(e, {
      relative: t
    }), c = u;
    return a !== "/" && (c = u === "/" ? a : Dt([
      a,
      u
    ])), l.createHref({
      pathname: c,
      search: i,
      hash: n
    });
  }
  function en() {
    return b.useContext(nu) != null;
  }
  At = function() {
    return de(en(), "useLocation() may be used only in the context of a <Router> component."), b.useContext(nu).location;
  };
  var c0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function s0(e) {
    b.useContext(ct).static || b.useLayoutEffect(e);
  }
  Yr = function() {
    let { isDataRoute: e } = b.useContext(Rt);
    return e ? Mv() : yv();
  };
  function yv() {
    de(en(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = b.useContext(Il), { basename: t, navigator: a } = b.useContext(ct), { matches: l } = b.useContext(Rt), { pathname: n } = At(), u = JSON.stringify(qr(l)), i = b.useRef(false);
    return s0(() => {
      i.current = true;
    }), b.useCallback((s, o = {}) => {
      if (bt(i.current, c0), !i.current) return;
      if (typeof s == "number") {
        a.go(s);
        return;
      }
      let m = Qi(s, JSON.parse(u), n, o.relative === "path");
      e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Dt([
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
  b.createContext(null);
  pv = function() {
    let { matches: e } = b.useContext(Rt), t = e[e.length - 1];
    return t ? t.params : {};
  };
  function uu(e, { relative: t } = {}) {
    let { matches: a } = b.useContext(Rt), { pathname: l } = At(), n = JSON.stringify(qr(a));
    return b.useMemo(() => Qi(e, JSON.parse(n), l, t === "path"), [
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
    de(en(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l } = b.useContext(ct), { matches: n } = b.useContext(Rt), u = n[n.length - 1], i = u ? u.params : {}, c = u ? u.pathname : "/", s = u ? u.pathnameBase : "/", o = u && u.route;
    {
      let A = o && o.path || "";
      f0(c, !o || A.endsWith("*") || A.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === "/" ? "*" : `${A}/*`}">.`);
    }
    let m = At(), r;
    if (t) {
      let A = typeof t == "string" ? Pl(t) : t;
      de(s === "/" || ((_a2 = A.pathname) == null ? void 0 : _a2.startsWith(s)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${A.pathname}" was given in the \`location\` prop.`), r = A;
    } else r = m;
    let d = r.pathname || "/", y = d;
    if (s !== "/") {
      let A = s.replace(/^\//, "").split("/");
      y = "/" + d.replace(/^\//, "").split("/").slice(A.length).join("/");
    }
    let T = Pm(e, {
      pathname: y
    });
    bt(o || T != null, `No routes matched location "${r.pathname}${r.search}${r.hash}" `), bt(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, `Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = Ev(T && T.map((A) => Object.assign({}, A, {
      params: Object.assign({}, i, A.params),
      pathname: Dt([
        s,
        l.encodeLocation ? l.encodeLocation(A.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : A.pathname
      ]),
      pathnameBase: A.pathnameBase === "/" ? s : Dt([
        s,
        l.encodeLocation ? l.encodeLocation(A.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : A.pathnameBase
      ])
    })), n, a);
    return t && M ? b.createElement(nu.Provider, {
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
    let e = Av(), t = nv(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), a = e instanceof Error ? e.stack : null, l = "rgba(200,200,200, 0.5)", n = {
      padding: "0.5rem",
      backgroundColor: l
    }, u = {
      padding: "2px 4px",
      backgroundColor: l
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), i = b.createElement(b.Fragment, null, b.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), b.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", b.createElement("code", {
      style: u
    }, "ErrorBoundary"), " or", " ", b.createElement("code", {
      style: u
    }, "errorElement"), " prop on your route.")), b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), a ? b.createElement("pre", {
      style: n
    }, a) : null, i);
  }
  var bv = b.createElement(vv, null), o0 = class extends b.Component {
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
      let t = e !== void 0 ? b.createElement(Rt.Provider, {
        value: this.props.routeContext
      }, b.createElement(Lr.Provider, {
        value: e,
        children: this.props.component
      })) : this.props.children;
      return this.context ? b.createElement(Sv, {
        error: e
      }, t) : t;
    }
  };
  o0.contextType = n0;
  var Dc = /* @__PURE__ */ new WeakMap();
  function Sv({ children: e, error: t }) {
    let { basename: a } = b.useContext(ct);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let l = dv(t.digest);
      if (l) {
        let n = Dc.get(t);
        if (n) throw n;
        let u = a0(l.location, a);
        if (t0 && !Dc.get(t)) if (u.isExternal || l.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const i = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
            replace: l.replace
          }));
          throw Dc.set(t, i), i;
        }
        return b.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${u.absoluteURL || u.to}`
        });
      }
    }
    return e;
  }
  function xv({ routeContext: e, match: t, children: a }) {
    let l = b.useContext(Il);
    return l && l.static && l.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = t.route.id), b.createElement(Rt.Provider, {
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
      let y, T = false, M = null, A = null;
      l && (y = u && r.route.id ? u[r.route.id] : void 0, M = r.route.errorElement || bv, i && (c < 0 && d === 0 ? (f0("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), T = true, A = null) : c === d && (T = true, A = r.route.hydrateFallbackElement || null)));
      let f = t.concat(n.slice(0, d + 1)), h = () => {
        let p;
        return y ? p = M : T ? p = A : r.route.Component ? p = b.createElement(r.route.Component, null) : r.route.element ? p = r.route.element : p = m, b.createElement(xv, {
          match: r,
          routeContext: {
            outlet: m,
            matches: f,
            isDataRoute: l != null
          },
          children: p
        });
      };
      return l && (r.route.ErrorBoundary || r.route.errorElement || d === 0) ? b.createElement(o0, {
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
  function Gr(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function _v(e) {
    let t = b.useContext(Il);
    return de(t, Gr(e)), t;
  }
  function Tv(e) {
    let t = b.useContext(ki);
    return de(t, Gr(e)), t;
  }
  function zv(e) {
    let t = b.useContext(Rt);
    return de(t, Gr(e)), t;
  }
  function Xr(e) {
    let t = zv(e), a = t.matches[t.matches.length - 1];
    return de(a.route.id, `${e} can only be used on routes that contain a unique "id"`), a.route.id;
  }
  function Rv() {
    return Xr("useRouteId");
  }
  function Av() {
    var _a2;
    let e = b.useContext(Lr), t = Tv("useRouteError"), a = Xr("useRouteError");
    return e !== void 0 ? e : (_a2 = t.errors) == null ? void 0 : _a2[a];
  }
  function Mv() {
    let { router: e } = _v("useNavigate"), t = Xr("useNavigate"), a = b.useRef(false);
    return s0(() => {
      a.current = true;
    }), b.useCallback(async (n, u = {}) => {
      bt(a.current, c0), a.current && (typeof n == "number" ? await e.navigate(n) : await e.navigate(n, {
        fromRouteId: t,
        ...u
      }));
    }, [
      e,
      t
    ]);
  }
  var Lf = {};
  function f0(e, t, a) {
    !t && !Lf[e] && (Lf[e] = true, bt(false, a));
  }
  b.memo(Cv);
  function Cv({ routes: e, future: t, state: a, isStatic: l, onError: n }) {
    return r0(e, void 0, {
      state: a,
      isStatic: l,
      onError: n
    });
  }
  function d0({ to: e, replace: t, state: a, relative: l }) {
    de(en(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: n } = b.useContext(ct);
    bt(!n, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: u } = b.useContext(Rt), { pathname: i } = At(), c = Yr(), s = Qi(e, qr(u), i, l === "path"), o = JSON.stringify(s);
    return b.useEffect(() => {
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
  function ze(e) {
    de(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Nv({ basename: e = "/", children: t = null, location: a, navigationType: l = "POP", navigator: n, static: u = false, unstable_useTransitions: i }) {
    de(!en(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let c = e.replace(/^\/*/, "/"), s = b.useMemo(() => ({
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
    typeof a == "string" && (a = Pl(a));
    let { pathname: o = "/", search: m = "", hash: r = "", state: d = null, key: y = "default", unstable_mask: T } = a, M = b.useMemo(() => {
      let A = la(o, c);
      return A == null ? null : {
        location: {
          pathname: A,
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
    return bt(M != null, `<Router basename="${c}"> is not able to match the URL "${o}${m}${r}" because it does not start with the basename, so the <Router> won't render anything.`), M == null ? null : b.createElement(ct.Provider, {
      value: s
    }, b.createElement(nu.Provider, {
      children: t,
      value: M
    }));
  }
  function wv({ children: e, location: t }) {
    return gv(js(e), t);
  }
  function js(e, t = []) {
    let a = [];
    return b.Children.forEach(e, (l, n) => {
      if (!b.isValidElement(l)) return;
      let u = [
        ...t,
        n
      ];
      if (l.type === b.Fragment) {
        a.push.apply(a, js(l.props.children, u));
        return;
      }
      de(l.type === ze, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), de(!l.props.index || !l.props.children, "An index route cannot have child routes.");
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
      l.props.children && (i.children = js(l.props.children, u)), a.push(i);
    }), a;
  }
  var ku = "get", Vu = "application/x-www-form-urlencoded";
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
  function Us(e = "") {
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
    let a = Us(e);
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
  function jc(e) {
    return e != null && !Lv.has(e) ? (bt(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vu}"`), null) : e;
  }
  function Yv(e, t) {
    let a, l, n, u, i;
    if (Dv(e)) {
      let c = e.getAttribute("action");
      l = c ? la(c, t) : null, a = e.getAttribute("method") || ku, n = jc(e.getAttribute("enctype")) || Vu, u = new FormData(e);
    } else if (Ov(e) || jv(e) && (e.type === "submit" || e.type === "image")) {
      let c = e.form;
      if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = e.getAttribute("formaction") || c.getAttribute("action");
      if (l = s ? la(s, t) : null, a = e.getAttribute("formmethod") || c.getAttribute("method") || ku, n = jc(e.getAttribute("formenctype")) || jc(c.getAttribute("enctype")) || Vu, u = new FormData(c, e), !qv()) {
        let { name: o, type: m, value: r } = e;
        if (m === "image") {
          let d = o ? `${o}.` : "";
          u.append(`${d}x`, "0"), u.append(`${d}y`, "0");
        } else o && u.append(o, r);
      }
    } else {
      if (Vi(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      a = ku, l = null, n = Vu, i = e;
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
  function Qr(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function h0(e, t, a, l) {
    let n = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return a ? n.pathname.endsWith("/") ? n.pathname = `${n.pathname}_.${l}` : n.pathname = `${n.pathname}.${l}` : n.pathname === "/" ? n.pathname = `_root.${l}` : t && la(n.pathname, t) === "/" ? n.pathname = `${t.replace(/\/$/, "")}/_root.${l}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${l}`, n;
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
  function Yf(e, t, a, l, n, u) {
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
  function kv(e, t, { includeHydrateFallback: a } = {}) {
    return Vv(e.map((l) => {
      let n = t.routes[l.route.id];
      if (!n) return [];
      let u = [
        n.module
      ];
      return n.clientActionModule && (u = u.concat(n.clientActionModule)), n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)), a && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)), n.imports && (u = u.concat(n.imports)), u;
    }).flat(1));
  }
  function Vv(e) {
    return [
      ...new Set(e)
    ];
  }
  function Zv(e) {
    let t = {}, a = Object.keys(e).sort();
    for (let l of a) t[l] = e[l];
    return t;
  }
  function Kv(e, t) {
    let a = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((l, n) => {
      let u = JSON.stringify(Zv(n));
      return a.has(u) || (a.add(u), l.push({
        key: u,
        link: n
      })), l;
    }, []);
  }
  function kr() {
    let e = b.useContext(Il);
    return Qr(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
  }
  function Jv() {
    let e = b.useContext(ki);
    return Qr(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
  }
  var Vr = b.createContext(void 0);
  Vr.displayName = "FrameworkContext";
  function Zr() {
    let e = b.useContext(Vr);
    return Qr(e, "You must render this element inside a <HydratedRouter> element"), e;
  }
  function $v(e, t) {
    let a = b.useContext(Vr), [l, n] = b.useState(false), [u, i] = b.useState(false), { onFocus: c, onBlur: s, onMouseEnter: o, onMouseLeave: m, onTouchStart: r } = t, d = b.useRef(null);
    b.useEffect(() => {
      if (e === "render" && i(true), e === "viewport") {
        let M = (f) => {
          f.forEach((h) => {
            i(h.isIntersecting);
          });
        }, A = new IntersectionObserver(M, {
          threshold: 0.5
        });
        return d.current && A.observe(d.current), () => {
          A.disconnect();
        };
      }
    }, [
      e
    ]), b.useEffect(() => {
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
        onFocus: on(c, y),
        onBlur: on(s, T),
        onMouseEnter: on(o, y),
        onMouseLeave: on(m, T),
        onTouchStart: on(r, y)
      }
    ] : [
      false,
      d,
      {}
    ];
  }
  function on(e, t) {
    return (a) => {
      e && e(a), a.defaultPrevented || t(a);
    };
  }
  function Wv({ page: e, ...t }) {
    let a = cv(), { router: l } = kr(), n = b.useMemo(() => Pm(l.routes, e, l.basename), [
      l.routes,
      e,
      l.basename
    ]);
    return n ? a ? b.createElement(Pv, {
      page: e,
      matches: n,
      ...t
    }) : b.createElement(Iv, {
      page: e,
      matches: n,
      ...t
    }) : null;
  }
  function Fv(e) {
    let { manifest: t, routeModules: a } = Zr(), [l, n] = b.useState([]);
    return b.useEffect(() => {
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
    let l = At(), { future: n } = Zr(), { basename: u } = kr(), i = b.useMemo(() => {
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
    return b.createElement(b.Fragment, null, i.map((c) => b.createElement("link", {
      key: c,
      rel: "prefetch",
      as: "fetch",
      href: c,
      ...a
    })));
  }
  function Iv({ page: e, matches: t, ...a }) {
    let l = At(), { future: n, manifest: u, routeModules: i } = Zr(), { basename: c } = kr(), { loaderData: s, matches: o } = Jv(), m = b.useMemo(() => Yf(e, t, o, u, l, "data"), [
      e,
      t,
      o,
      u,
      l
    ]), r = b.useMemo(() => Yf(e, t, o, u, l, "assets"), [
      e,
      t,
      o,
      u,
      l
    ]), d = b.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let M = /* @__PURE__ */ new Set(), A = false;
      if (t.forEach((h) => {
        var _a2;
        let p = u.routes[h.route.id];
        !p || !p.hasLoader || (!m.some((E) => E.route.id === h.route.id) && h.route.id in s && ((_a2 = i[h.route.id]) == null ? void 0 : _a2.shouldRevalidate) || p.hasClientLoader ? A = true : M.add(h.route.id));
      }), M.size === 0) return [];
      let f = h0(e, c, n.unstable_trailingSlashAwareDataRequests, "data");
      return A && M.size > 0 && f.searchParams.set("_routes", t.filter((h) => M.has(h.route.id)).map((h) => h.route.id).join(",")), [
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
    ]), y = b.useMemo(() => kv(r, u), [
      r,
      u
    ]), T = Fv(r);
    return b.createElement(b.Fragment, null, d.map((M) => b.createElement("link", {
      key: M,
      rel: "prefetch",
      as: "fetch",
      href: M,
      ...a
    })), y.map((M) => b.createElement("link", {
      key: M,
      rel: "modulepreload",
      href: M,
      ...a
    })), T.map(({ key: M, link: A }) => b.createElement("link", {
      key: M,
      nonce: a.nonce,
      ...A,
      crossOrigin: A.crossOrigin ?? a.crossOrigin
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
    let n = b.useRef();
    n.current == null && (n.current = jg({
      window: l,
      v5Compat: true
    }));
    let u = n.current, [i, c] = b.useState({
      action: u.action,
      location: u.location
    }), s = b.useCallback((o) => {
      a === false ? c(o) : b.startTransition(() => c(o));
    }, [
      a
    ]);
    return b.useLayoutEffect(() => u.listen(s), [
      u,
      s
    ]), b.createElement(Nv, {
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
  Ga = b.forwardRef(function({ onClick: t, discover: a = "render", prefetch: l = "none", relative: n, reloadDocument: u, replace: i, unstable_mask: c, state: s, target: o, to: m, preventScrollReset: r, viewTransition: d, unstable_defaultShouldRevalidate: y, ...T }, M) {
    let { basename: A, navigator: f, unstable_useTransitions: h } = b.useContext(ct), p = typeof m == "string" && m0.test(m), E = a0(m, A);
    m = E.to;
    let D = mv(m, {
      relative: n
    }), x = At(), _ = null;
    if (c) {
      let B = Qi(c, [], x.unstable_mask ? x.unstable_mask.pathname : "/", true);
      A !== "/" && (B.pathname = B.pathname === "/" ? A : Dt([
        A,
        B.pathname
      ])), _ = f.createHref(B);
    }
    let [C, R, g] = $v(l, T), S = ib(m, {
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
      t && t(B), B.defaultPrevented || S(B);
    }
    let O = !(E.isExternal || u), H = b.createElement("a", {
      ...T,
      ...g,
      href: (O ? _ : void 0) || E.absoluteURL || D,
      onClick: O ? w : t,
      ref: eb(M, R),
      target: o,
      "data-discover": !p && a === "render" ? "true" : void 0
    });
    return C && !p ? b.createElement(b.Fragment, null, H, b.createElement(Wv, {
      page: D
    })) : H;
  });
  Ga.displayName = "Link";
  var lb = b.forwardRef(function({ "aria-current": t = "page", caseSensitive: a = false, className: l = "", end: n = false, style: u, to: i, viewTransition: c, children: s, ...o }, m) {
    let r = uu(i, {
      relative: o.relative
    }), d = At(), y = b.useContext(ki), { navigator: T, basename: M } = b.useContext(ct), A = y != null && fb(r) && c === true, f = T.encodeLocation ? T.encodeLocation(r).pathname : r.pathname, h = d.pathname, p = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    a || (h = h.toLowerCase(), p = p ? p.toLowerCase() : null, f = f.toLowerCase()), p && M && (p = la(p, M) || p);
    const E = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let D = h === f || !n && h.startsWith(f) && h.charAt(E) === "/", x = p != null && (p === f || !n && p.startsWith(f) && p.charAt(f.length) === "/"), _ = {
      isActive: D,
      isPending: x,
      isTransitioning: A
    }, C = D ? t : void 0, R;
    typeof l == "function" ? R = l(_) : R = [
      l,
      D ? "active" : null,
      x ? "pending" : null,
      A ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let g = typeof u == "function" ? u(_) : u;
    return b.createElement(Ga, {
      ...o,
      "aria-current": C,
      className: R,
      ref: m,
      style: g,
      to: i,
      viewTransition: c
    }, typeof s == "function" ? s(_) : s);
  });
  lb.displayName = "NavLink";
  var nb = b.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: a, reloadDocument: l, replace: n, state: u, method: i = ku, action: c, onSubmit: s, relative: o, preventScrollReset: m, viewTransition: r, unstable_defaultShouldRevalidate: d, ...y }, T) => {
    let { unstable_useTransitions: M } = b.useContext(ct), A = rb(), f = ob(c, {
      relative: o
    }), h = i.toLowerCase() === "get" ? "get" : "post", p = typeof c == "string" && m0.test(c), E = (D) => {
      if (s && s(D), D.defaultPrevented) return;
      D.preventDefault();
      let x = D.nativeEvent.submitter, _ = (x == null ? void 0 : x.getAttribute("formmethod")) || i, C = () => A(x || D.currentTarget, {
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
      M && a !== false ? b.startTransition(() => C()) : C();
    };
    return b.createElement("form", {
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
    let t = b.useContext(Il);
    return de(t, ub(e)), t;
  }
  function ib(e, { target: t, replace: a, unstable_mask: l, state: n, preventScrollReset: u, relative: i, viewTransition: c, unstable_defaultShouldRevalidate: s, unstable_useTransitions: o } = {}) {
    let m = Yr(), r = At(), d = uu(e, {
      relative: i
    });
    return b.useCallback((y) => {
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
        o ? b.startTransition(() => M()) : M();
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
  z1 = function(e) {
    bt(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = b.useRef(Us(e)), a = b.useRef(false), l = At(), n = b.useMemo(() => Bv(l.search, a.current ? null : t.current), [
      l.search
    ]), u = Yr(), i = b.useCallback((c, s) => {
      const o = Us(typeof c == "function" ? c(new URLSearchParams(n)) : c);
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
    let { router: e } = y0("useSubmit"), { basename: t } = b.useContext(ct), a = Rv(), l = e.fetch, n = e.navigate;
    return b.useCallback(async (u, i = {}) => {
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
    let { basename: a } = b.useContext(ct), l = b.useContext(Rt);
    de(l, "useFormAction must be used inside a RouteContext");
    let [n] = l.matches.slice(-1), u = {
      ...uu(e || ".", {
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
    return (!e || e === ".") && n.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (u.pathname = u.pathname === "/" ? a : Dt([
      a,
      u.pathname
    ])), Vn(u);
  }
  function fb(e, { relative: t } = {}) {
    let a = b.useContext(u0);
    de(a != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: l } = y0("useViewTransitionState"), n = uu(e, {
      relative: t
    });
    if (!a.isTransitioning) return false;
    let u = la(a.currentLocation.pathname, l) || a.currentLocation.pathname, i = la(a.nextLocation.pathname, l) || a.nextLocation.pathname;
    return Ei(n.pathname, i) != null || Ei(n.pathname, u) != null;
  }
  let db, Gf, p0, hb, Kr, mb, yb, pb, gb, vb, bb, Sb, Uc;
  db = (e, t, a, l, n, u, i, c) => {
    let s = document.documentElement, o = [
      "light",
      "dark"
    ];
    function m(y) {
      (Array.isArray(e) ? e : [
        e
      ]).forEach((T) => {
        let M = T === "class", A = M && u ? n.map((f) => u[f] || f) : n;
        M ? (s.classList.remove(...A), s.classList.add(u && u[y] ? u[y] : y)) : s.setAttribute(T, y);
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
  Gf = [
    "light",
    "dark"
  ];
  p0 = "(prefers-color-scheme: dark)";
  hb = typeof window > "u";
  Kr = b.createContext(void 0);
  mb = {
    setTheme: (e) => {
    },
    themes: []
  };
  R1 = () => {
    var e;
    return (e = b.useContext(Kr)) != null ? e : mb;
  };
  yb = (e) => b.useContext(Kr) ? b.createElement(b.Fragment, null, e.children) : b.createElement(gb, {
    ...e
  });
  pb = [
    "light",
    "dark"
  ];
  gb = ({ forcedTheme: e, disableTransitionOnChange: t = false, enableSystem: a = true, enableColorScheme: l = true, storageKey: n = "theme", themes: u = pb, defaultTheme: i = a ? "system" : "light", attribute: c = "data-theme", value: s, children: o, nonce: m, scriptProps: r }) => {
    let [d, y] = b.useState(() => bb(n, i)), [T, M] = b.useState(() => d === "system" ? Uc() : d), A = s ? Object.values(s) : u, f = b.useCallback((D) => {
      let x = D;
      if (!x) return;
      D === "system" && a && (x = Uc());
      let _ = s ? s[x] : x, C = t ? Sb(m) : null, R = document.documentElement, g = (S) => {
        S === "class" ? (R.classList.remove(...A), _ && R.classList.add(_)) : S.startsWith("data-") && (_ ? R.setAttribute(S, _) : R.removeAttribute(S));
      };
      if (Array.isArray(c) ? c.forEach(g) : g(c), l) {
        let S = Gf.includes(i) ? i : null, w = Gf.includes(x) ? x : S;
        R.style.colorScheme = w;
      }
      C == null ? void 0 : C();
    }, [
      m
    ]), h = b.useCallback((D) => {
      let x = typeof D == "function" ? D(d) : D;
      y(x);
      try {
        localStorage.setItem(n, x);
      } catch {
      }
    }, [
      d
    ]), p = b.useCallback((D) => {
      let x = Uc(D);
      M(x), d === "system" && a && !e && f("system");
    }, [
      d,
      e
    ]);
    b.useEffect(() => {
      let D = window.matchMedia(p0);
      return D.addListener(p), p(D), () => D.removeListener(p);
    }, [
      p
    ]), b.useEffect(() => {
      let D = (x) => {
        x.key === n && (x.newValue ? y(x.newValue) : h(i));
      };
      return window.addEventListener("storage", D), () => window.removeEventListener("storage", D);
    }, [
      h
    ]), b.useEffect(() => {
      f(e ?? d);
    }, [
      e,
      d
    ]);
    let E = b.useMemo(() => ({
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
    return b.createElement(Kr.Provider, {
      value: E
    }, b.createElement(vb, {
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
  vb = b.memo(({ forcedTheme: e, storageKey: t, attribute: a, enableSystem: l, enableColorScheme: n, defaultTheme: u, value: i, themes: c, nonce: s, scriptProps: o }) => {
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
    return b.createElement("script", {
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
  Uc = (e) => (e || (e = window.matchMedia(p0)), e.matches ? "dark" : "light");
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
        return Ab;
      case "warning":
        return Rb;
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
  })), Rb = U.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, U.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), Ab = U.createElement("svg", {
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
  let Hs = 1;
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
        const { message: l, ...n } = t, u = typeof (t == null ? void 0 : t.id) == "number" || ((a = t.id) == null ? void 0 : a.length) > 0 ? t.id : Hs++, i = this.toasts.find((s) => s.id === u), c = t.dismissible === void 0 ? true : t.dismissible;
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
        const l = (a == null ? void 0 : a.id) || Hs++;
        return this.create({
          jsx: t(l),
          id: l,
          ...a
        }), l;
      }, this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Ve, Ob, Db, jb, Ub, Hb;
  Ve = new wb();
  Ob = (e, t) => {
    const a = (t == null ? void 0 : t.id) || Hs++;
    return Ve.addToast({
      title: e,
      ...t,
      id: a
    }), a;
  };
  Db = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";
  jb = Ob;
  Ub = () => Ve.toasts;
  Hb = () => Ve.getActiveToasts();
  A1 = Object.assign(jb, {
    success: Ve.success,
    info: Ve.info,
    warning: Ve.warning,
    error: Ve.error,
    custom: Ve.custom,
    message: Ve.message,
    promise: Ve.promise,
    dismiss: Ve.dismiss,
    loading: Ve.loading
  }, {
    getHistory: Ub,
    getToasts: Hb
  });
  xb("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function Mu(e) {
    return e.label !== void 0;
  }
  const Bb = 3, qb = "24px", Lb = "16px", Xf = 4e3, Yb = 356, Gb = 14, Xb = 45, Qb = 200;
  function Mt(...e) {
    return e.filter(Boolean).join(" ");
  }
  function kb(e) {
    const [t, a] = e.split("-"), l = [];
    return t && l.push(t), a && l.push(a), l;
  }
  const Vb = (e) => {
    var t, a, l, n, u, i, c, s, o;
    const { invert: m, toast: r, unstyled: d, interacting: y, setHeights: T, visibleToasts: M, heights: A, index: f, toasts: h, expanded: p, removeToast: E, defaultRichColors: D, closeButton: x, style: _, cancelButtonStyle: C, actionButtonStyle: R, className: g = "", descriptionClassName: S = "", duration: w, position: O, gap: H, expandByDefault: B, classNames: z, icons: j, closeButtonAriaLabel: q = "Close toast" } = e, [L, V] = U.useState(null), [Ce, ge] = U.useState(null), [G, Z] = U.useState(false), [I, Be] = U.useState(false), [ll, oe] = U.useState(false), [nl, iu] = U.useState(false), [cu, ul] = U.useState(false), [E0, Zi] = U.useState(0), [_0, Jr] = U.useState(0), tn = U.useRef(r.duration || w || Xf), $r = U.useRef(null), Ht = U.useRef(null), T0 = f === 0, z0 = f + 1 <= M, $e = r.type, il = r.dismissible !== false, R0 = r.className || "", A0 = r.descriptionClassName || "", su = U.useMemo(() => A.findIndex((k) => k.toastId === r.id) || 0, [
      A,
      r.id
    ]), M0 = U.useMemo(() => {
      var k;
      return (k = r.closeButton) != null ? k : x;
    }, [
      r.closeButton,
      x
    ]), Wr = U.useMemo(() => r.duration || w || Xf, [
      r.duration,
      w
    ]), Ki = U.useRef(0), cl = U.useRef(0), Fr = U.useRef(0), sl = U.useRef(null), [C0, N0] = O.split("-"), Pr = U.useMemo(() => A.reduce((k, Te, He) => He >= su ? k : k + Te.height, 0), [
      A,
      su
    ]), Ir = Nb(), w0 = r.invert || m, Ji = $e === "loading";
    cl.current = U.useMemo(() => su * H + Pr, [
      su,
      Pr
    ]), U.useEffect(() => {
      tn.current = Wr;
    }, [
      Wr
    ]), U.useEffect(() => {
      Z(true);
    }, []), U.useEffect(() => {
      const k = Ht.current;
      if (k) {
        const Te = k.getBoundingClientRect().height;
        return Jr(Te), T((He) => [
          {
            toastId: r.id,
            height: Te,
            position: r.position
          },
          ...He
        ]), () => T((He) => He.filter((We) => We.toastId !== r.id));
      }
    }, [
      T,
      r.id
    ]), U.useLayoutEffect(() => {
      if (!G) return;
      const k = Ht.current, Te = k.style.height;
      k.style.height = "auto";
      const He = k.getBoundingClientRect().height;
      k.style.height = Te, Jr(He), T((We) => We.find((Ne) => Ne.toastId === r.id) ? We.map((Ne) => Ne.toastId === r.id ? {
        ...Ne,
        height: He
      } : Ne) : [
        {
          toastId: r.id,
          height: He,
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
    const ua = U.useCallback(() => {
      Be(true), Zi(cl.current), T((k) => k.filter((Te) => Te.toastId !== r.id)), setTimeout(() => {
        E(r);
      }, Qb);
    }, [
      r,
      E,
      T,
      cl
    ]);
    U.useEffect(() => {
      if (r.promise && $e === "loading" || r.duration === 1 / 0 || r.type === "loading") return;
      let k;
      return p || y || Ir ? (() => {
        if (Fr.current < Ki.current) {
          const We = (/* @__PURE__ */ new Date()).getTime() - Ki.current;
          tn.current = tn.current - We;
        }
        Fr.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        tn.current !== 1 / 0 && (Ki.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
          r.onAutoClose == null || r.onAutoClose.call(r, r), ua();
        }, tn.current));
      })(), () => clearTimeout(k);
    }, [
      p,
      y,
      r,
      $e,
      Ir,
      ua
    ]), U.useEffect(() => {
      r.delete && (ua(), r.onDismiss == null || r.onDismiss.call(r, r));
    }, [
      ua,
      r.delete
    ]);
    function O0() {
      var k;
      if (j == null ? void 0 : j.loading) {
        var Te;
        return U.createElement("div", {
          className: Mt(z == null ? void 0 : z.loader, r == null || (Te = r.classNames) == null ? void 0 : Te.loader, "sonner-loader"),
          "data-visible": $e === "loading"
        }, j.loading);
      }
      return U.createElement(Tb, {
        className: Mt(z == null ? void 0 : z.loader, r == null || (k = r.classNames) == null ? void 0 : k.loader),
        visible: $e === "loading"
      });
    }
    const D0 = r.icon || (j == null ? void 0 : j[$e]) || Eb($e);
    var eo, to;
    return U.createElement("li", {
      tabIndex: 0,
      ref: Ht,
      className: Mt(g, R0, z == null ? void 0 : z.toast, r == null || (t = r.classNames) == null ? void 0 : t.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[$e], r == null || (a = r.classNames) == null ? void 0 : a[$e]),
      "data-sonner-toast": "",
      "data-rich-colors": (eo = r.richColors) != null ? eo : D,
      "data-styled": !(r.jsx || r.unstyled || d),
      "data-mounted": G,
      "data-promise": !!r.promise,
      "data-swiped": cu,
      "data-removed": I,
      "data-visible": z0,
      "data-y-position": C0,
      "data-x-position": N0,
      "data-index": f,
      "data-front": T0,
      "data-swiping": ll,
      "data-dismissible": il,
      "data-type": $e,
      "data-invert": w0,
      "data-swipe-out": nl,
      "data-swipe-direction": Ce,
      "data-expanded": !!(p || B && G),
      "data-testid": r.testId,
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": h.length - f,
        "--offset": `${I ? E0 : cl.current}px`,
        "--initial-height": B ? "auto" : `${_0}px`,
        ..._,
        ...r.style
      },
      onDragEnd: () => {
        oe(false), V(null), sl.current = null;
      },
      onPointerDown: (k) => {
        k.button !== 2 && (Ji || !il || ($r.current = /* @__PURE__ */ new Date(), Zi(cl.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (oe(true), sl.current = {
          x: k.clientX,
          y: k.clientY
        })));
      },
      onPointerUp: () => {
        var k, Te, He;
        if (nl || !il) return;
        sl.current = null;
        const We = Number(((k = Ht.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ru = Number(((Te = Ht.current) == null ? void 0 : Te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ne = (/* @__PURE__ */ new Date()).getTime() - ((He = $r.current) == null ? void 0 : He.getTime()), st = L === "x" ? We : ru, ou = Math.abs(st) / Ne;
        if (Math.abs(st) >= Xb || ou > 0.11) {
          Zi(cl.current), r.onDismiss == null || r.onDismiss.call(r, r), ge(L === "x" ? We > 0 ? "right" : "left" : ru > 0 ? "down" : "up"), ua(), iu(true);
          return;
        } else {
          var xt, Et;
          (xt = Ht.current) == null || xt.style.setProperty("--swipe-amount-x", "0px"), (Et = Ht.current) == null || Et.style.setProperty("--swipe-amount-y", "0px");
        }
        ul(false), oe(false), V(null);
      },
      onPointerMove: (k) => {
        var Te, He, We;
        if (!sl.current || !il || ((Te = window.getSelection()) == null ? void 0 : Te.toString().length) > 0) return;
        const Ne = k.clientY - sl.current.y, st = k.clientX - sl.current.x;
        var ou;
        const xt = (ou = e.swipeDirections) != null ? ou : kb(O);
        !L && (Math.abs(st) > 1 || Math.abs(Ne) > 1) && V(Math.abs(st) > Math.abs(Ne) ? "x" : "y");
        let Et = {
          x: 0,
          y: 0
        };
        const ao = (ja) => 1 / (1.5 + Math.abs(ja) / 20);
        if (L === "y") {
          if (xt.includes("top") || xt.includes("bottom")) if (xt.includes("top") && Ne < 0 || xt.includes("bottom") && Ne > 0) Et.y = Ne;
          else {
            const ja = Ne * ao(Ne);
            Et.y = Math.abs(ja) < Math.abs(Ne) ? ja : Ne;
          }
        } else if (L === "x" && (xt.includes("left") || xt.includes("right"))) if (xt.includes("left") && st < 0 || xt.includes("right") && st > 0) Et.x = st;
        else {
          const ja = st * ao(st);
          Et.x = Math.abs(ja) < Math.abs(st) ? ja : st;
        }
        (Math.abs(Et.x) > 0 || Math.abs(Et.y) > 0) && ul(true), (He = Ht.current) == null || He.style.setProperty("--swipe-amount-x", `${Et.x}px`), (We = Ht.current) == null || We.style.setProperty("--swipe-amount-y", `${Et.y}px`);
      }
    }, M0 && !r.jsx && $e !== "loading" ? U.createElement("button", {
      "aria-label": q,
      "data-disabled": Ji,
      "data-close-button": true,
      onClick: Ji || !il ? () => {
      } : () => {
        ua(), r.onDismiss == null || r.onDismiss.call(r, r);
      },
      className: Mt(z == null ? void 0 : z.closeButton, r == null || (l = r.classNames) == null ? void 0 : l.closeButton)
    }, (to = j == null ? void 0 : j.close) != null ? to : Cb) : null, ($e || r.icon || r.promise) && r.icon !== null && ((j == null ? void 0 : j[$e]) !== null || r.icon) ? U.createElement("div", {
      "data-icon": "",
      className: Mt(z == null ? void 0 : z.icon, r == null || (n = r.classNames) == null ? void 0 : n.icon)
    }, r.promise || r.type === "loading" && !r.icon ? r.icon || O0() : null, r.type !== "loading" ? D0 : null) : null, U.createElement("div", {
      "data-content": "",
      className: Mt(z == null ? void 0 : z.content, r == null || (u = r.classNames) == null ? void 0 : u.content)
    }, U.createElement("div", {
      "data-title": "",
      className: Mt(z == null ? void 0 : z.title, r == null || (i = r.classNames) == null ? void 0 : i.title)
    }, r.jsx ? r.jsx : typeof r.title == "function" ? r.title() : r.title), r.description ? U.createElement("div", {
      "data-description": "",
      className: Mt(S, A0, z == null ? void 0 : z.description, r == null || (c = r.classNames) == null ? void 0 : c.description)
    }, typeof r.description == "function" ? r.description() : r.description) : null), U.isValidElement(r.cancel) ? r.cancel : r.cancel && Mu(r.cancel) ? U.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: r.cancelButtonStyle || C,
      onClick: (k) => {
        Mu(r.cancel) && il && (r.cancel.onClick == null || r.cancel.onClick.call(r.cancel, k), ua());
      },
      className: Mt(z == null ? void 0 : z.cancelButton, r == null || (s = r.classNames) == null ? void 0 : s.cancelButton)
    }, r.cancel.label) : null, U.isValidElement(r.action) ? r.action : r.action && Mu(r.action) ? U.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: r.actionButtonStyle || R,
      onClick: (k) => {
        Mu(r.action) && (r.action.onClick == null || r.action.onClick.call(r.action, k), !k.defaultPrevented && ua());
      },
      className: Mt(z == null ? void 0 : z.actionButton, r == null || (o = r.classNames) == null ? void 0 : o.actionButton)
    }, r.action.label) : null);
  };
  function Qf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
  }
  function Zb(e, t) {
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
    ], expand: c, closeButton: s, className: o, offset: m, mobileOffset: r, theme: d = "light", richColors: y, duration: T, style: M, visibleToasts: A = Bb, toastOptions: f, dir: h = Qf(), gap: p = Gb, icons: E, containerAriaLabel: D = "Notifications" } = t, [x, _] = U.useState([]), C = U.useMemo(() => l ? x.filter((G) => G.toasterId === l) : x.filter((G) => !G.toasterId), [
      x,
      l
    ]), R = U.useMemo(() => Array.from(new Set([
      u
    ].concat(C.filter((G) => G.position).map((G) => G.position)))), [
      C,
      u
    ]), [g, S] = U.useState([]), [w, O] = U.useState(false), [H, B] = U.useState(false), [z, j] = U.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = U.useRef(null), L = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), V = U.useRef(null), Ce = U.useRef(false), ge = U.useCallback((G) => {
      _((Z) => {
        var I;
        return (I = Z.find((Be) => Be.id === G.id)) != null && I.delete || Ve.dismiss(G.id), Z.filter(({ id: Be }) => Be !== G.id);
      });
    }, []);
    return U.useEffect(() => Ve.subscribe((G) => {
      if (G.dismiss) {
        requestAnimationFrame(() => {
          _((Z) => Z.map((I) => I.id === G.id ? {
            ...I,
            delete: true
          } : I));
        });
        return;
      }
      setTimeout(() => {
        ly.flushSync(() => {
          _((Z) => {
            const I = Z.findIndex((Be) => Be.id === G.id);
            return I !== -1 ? [
              ...Z.slice(0, I),
              {
                ...Z[I],
                ...G
              },
              ...Z.slice(I + 1)
            ] : [
              G,
              ...Z
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
        G.addEventListener("change", ({ matches: Z }) => {
          j(Z ? "dark" : "light");
        });
      } catch {
        G.addListener(({ matches: I }) => {
          try {
            j(I ? "dark" : "light");
          } catch (Be) {
            console.error(Be);
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
      const G = (Z) => {
        var I;
        if (i.every((oe) => Z[oe] || Z.code === oe)) {
          var ll;
          O(true), (ll = q.current) == null || ll.focus();
        }
        Z.code === "Escape" && (document.activeElement === q.current || (I = q.current) != null && I.contains(document.activeElement)) && O(false);
      };
      return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
    }, [
      i
    ]), U.useEffect(() => {
      if (q.current) return () => {
        V.current && (V.current.focus({
          preventScroll: true
        }), V.current = null, Ce.current = false);
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
    }, R.map((G, Z) => {
      var I;
      const [Be, ll] = G.split("-");
      return C.length ? U.createElement("ol", {
        key: G,
        dir: h === "auto" ? Qf() : h,
        tabIndex: -1,
        ref: q,
        className: o,
        "data-sonner-toaster": true,
        "data-sonner-theme": z,
        "data-y-position": Be,
        "data-x-position": ll,
        style: {
          "--front-toast-height": `${((I = g[0]) == null ? void 0 : I.height) || 0}px`,
          "--width": `${Yb}px`,
          "--gap": `${p}px`,
          ...M,
          ...Zb(m, r)
        },
        onBlur: (oe) => {
          Ce.current && !oe.currentTarget.contains(oe.relatedTarget) && (Ce.current = false, V.current && (V.current.focus({
            preventScroll: true
          }), V.current = null));
        },
        onFocus: (oe) => {
          oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || Ce.current || (Ce.current = true, V.current = oe.relatedTarget);
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
      }, C.filter((oe) => !oe.position && Z === 0 || oe.position === G).map((oe, nl) => {
        var iu, cu;
        return U.createElement(Vb, {
          key: oe.id,
          icons: E,
          index: nl,
          toast: oe,
          defaultRichColors: y,
          duration: (iu = f == null ? void 0 : f.duration) != null ? iu : T,
          className: f == null ? void 0 : f.className,
          descriptionClassName: f == null ? void 0 : f.descriptionClassName,
          invert: n,
          visibleToasts: A,
          closeButton: (cu = f == null ? void 0 : f.closeButton) != null ? cu : s,
          interacting: H,
          position: G,
          style: f == null ? void 0 : f.style,
          unstyled: f == null ? void 0 : f.unstyled,
          classNames: f == null ? void 0 : f.classNames,
          cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
          actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
          closeButtonAriaLabel: f == null ? void 0 : f.closeButtonAriaLabel,
          removeToast: ge,
          toasts: C.filter((ul) => ul.position == oe.position),
          heights: g.filter((ul) => ul.position == oe.position),
          setHeights: S,
          expandByDefault: c,
          gap: p,
          expanded: w,
          swipeDirections: t.swipeDirections
        });
      })) : null;
    }));
  });
  g0 = function({ to: e = "/", label: t = "Back to hub" }) {
    return v.jsx(Ga, {
      to: e,
      className: "floating-back",
      "aria-label": t,
      title: t,
      children: v.jsx("span", {
        className: "floating-back__glyph",
        "aria-hidden": true,
        children: "\u2190"
      })
    });
  };
  function Gt({ title: e, children: t }) {
    return v.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        v.jsx(g0, {
          label: `Back to hub \u2014 ${e}`
        }),
        v.jsx("div", {
          className: "iframe-stage iframe-stage--react",
          children: t
        })
      ]
    });
  }
  const pn = [
    {
      id: "osrs-mmg",
      title: "OSRS MMG Calculator",
      kind: "react",
      path: "/osrs-mmg"
    },
    {
      id: "osrs-character",
      title: "OSRS Character",
      kind: "react",
      path: "/osrs-mmg/c"
    }
  ], Zu = [
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
    },
    {
      id: "tick-tack-toe",
      title: "Tick Tack Toe",
      kind: "react",
      path: "/tick-tack-toe"
    }
  ], Jb = [
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
  ], $b = [
    ...pn,
    ...Zu,
    ...v0
  ], ca = [
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
  function Wb() {
    return v.jsx("div", {
      className: "app-root app-root--home hub-page",
      children: v.jsxs("div", {
        className: "hub",
        children: [
          v.jsxs("header", {
            className: "hub__header",
            children: [
              v.jsx("h1", {
                className: "hub__title hub__title--pixel",
                children: "WEB DEV EXPERIMENTS"
              }),
              v.jsx("p", {
                className: "hub__subtitle hub__subtitle--pixel",
                children: "CLIENT ONLY, STATIC WEBPAGE FOR HTML, JS, REACT IDEAS"
              })
            ]
          }),
          v.jsxs("section", {
            className: "hub__section",
            "aria-labelledby": "hub-apps-heading",
            children: [
              v.jsx("h2", {
                id: "hub-apps-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Apps"
              }),
              v.jsx("div", {
                className: "hub__grid",
                children: pn.map((e, t) => v.jsx(Ga, {
                  to: e.kind === "iframe" ? `/play/${e.id}` : e.path,
                  className: `hub-card ${ca[t % ca.length]}`,
                  children: v.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          v.jsxs("section", {
            className: "hub__section",
            "aria-labelledby": "hub-personal-heading",
            children: [
              v.jsx("h2", {
                id: "hub-personal-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Single player gamers"
              }),
              v.jsx("div", {
                className: "hub__grid",
                children: Zu.map((e, t) => v.jsx(Ga, {
                  to: e.kind === "iframe" ? `/play/${e.id}` : e.path,
                  className: `hub-card ${ca[(pn.length + t) % ca.length]}`,
                  children: v.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          v.jsxs("section", {
            className: "hub__section",
            "aria-labelledby": "hub-multiplayer-heading",
            children: [
              v.jsx("h2", {
                id: "hub-multiplayer-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Online Multiplayer"
              }),
              v.jsx("div", {
                className: "hub__grid",
                children: v.jsx(Ga, {
                  to: "/multiplayer",
                  className: `hub-card hub-card--multiplayer-cta ${ca[(pn.length + Zu.length) % ca.length]}`,
                  children: v.jsx("span", {
                    className: "hub-card__multiplayer-names",
                    children: Jb.map((e) => v.jsx("span", {
                      className: "hub-card__title",
                      children: e.title.toUpperCase()
                    }, e.id))
                  })
                })
              })
            ]
          }),
          v.jsxs("section", {
            className: "hub__section hub__section--tutorial",
            "aria-labelledby": "hub-chris-courses-heading",
            children: [
              v.jsx("h2", {
                id: "hub-chris-courses-heading",
                className: "hub__section-heading hub__subtitle--pixel",
                children: "Chris Courses tutorials"
              }),
              v.jsxs("p", {
                className: "hub__credit",
                children: [
                  "Fighting game, Kings and Pigs, Sunnyland platformer, and Tower defence follow tutorials by",
                  " ",
                  v.jsx("a", {
                    href: "https://www.youtube.com/c/chriscourses",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Chris Courses"
                  }),
                  " ",
                  "on YouTube."
                ]
              }),
              v.jsx("div", {
                className: "hub__grid",
                children: v0.map((e, t) => v.jsx(Ga, {
                  to: e.kind === "iframe" ? `/play/${e.id}` : e.path,
                  className: `hub-card ${ca[(pn.length + Zu.length + 1 + t) % ca.length]}`,
                  children: v.jsx("span", {
                    className: "hub-card__title",
                    children: e.title.toUpperCase()
                  })
                }, e.id))
              })
            ]
          }),
          v.jsxs("p", {
            className: "hub__repo hub__repo--pixel",
            children: [
              "PUBLIC REPO \u2014",
              " ",
              v.jsx("a", {
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
  function Fb() {
    const { id: e } = pv(), t = $b.find((a) => a.id === e && a.kind === "iframe");
    return !t || t.kind !== "iframe" ? v.jsx(d0, {
      to: "/",
      replace: true
    }) : v.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        v.jsx(g0, {
          label: `Back to hub \u2014 ${t.title}`
        }),
        v.jsx("div", {
          className: "iframe-stage",
          children: v.jsx("iframe", {
            className: "game-frame",
            src: t.href,
            title: t.title
          })
        })
      ]
    });
  }
  let b0;
  Pb = 16;
  Ib = 2;
  e1 = 9;
  t1 = 8;
  b0 = ({ board: e, selectedSquare: t, possibleMoves: a = [], onSquareClick: l, sideImagesWidth: n = 0, isSidebarOpen: u = true, forcedCapture: i = false, mandatoryPieceSquares: c = [], singleLegalMoveHighlight: s = false, comboContinuePiece: o = null, checkSquare: m = null }) => {
    const [r, d] = b.useState(64), y = () => {
      if (typeof window < "u") {
        const g = window.innerHeight * 0.98, S = u ? 384 : 0, w = n || 0, O = (window.innerWidth - S - w) * 0.98, H = Math.min(g, O);
        return Math.floor(H / 8);
      }
      return 64;
    };
    b.useEffect(() => {
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
      const S = {
        pawn: 0,
        knight: 1,
        queen: 2,
        king: 3,
        bishop: 4,
        rook: 5
      }, w = Pb, O = w * Ib, H = w * e1, B = r / w, j = (g.color === "white" ? 0 : 1) * w, L = (g.type === "rook" && g.isKing ? t1 : S[g.type]) * w;
      return {
        backgroundImage: "url(/games/chess/chess-cat.png)",
        backgroundPosition: `${-j * B}px ${-L * B}px`,
        backgroundSize: `${O * B}px ${H * B}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%"
      };
    }, M = (g, S) => t && t.row === g && t.col === S, A = (g, S) => a.some((w) => w.row === g && w.col === S), f = (g, S) => a.find((w) => w.row === g && w.col === S), h = (g, S) => c.some((w) => w.row === g && w.col === S), p = (g, S) => o && o.row === g && o.col === S, E = (g, S) => m && m.row === g && m.col === S, D = (g, S) => {
      const w = (g + S) % 2 === 0, O = e[g][S], H = A(g, S), B = M(g, S), z = f(g, S), j = H && (z == null ? void 0 : z.isCapture) === true, q = h(g, S);
      let L = "flex items-center justify-center cursor-pointer relative select-none ";
      return w ? L += "bg-gray-300 " : L += "bg-gray-800 ", B ? E(g, S) ? L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] " : p(g, S) ? L += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : L += "ring-4 ring-blue-500 ring-inset " : H ? s && a.length === 1 ? L += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : i && j ? L += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : L += "ring-2 ring-green-400 ring-inset " : q && O && !B ? L += "ring-2 ring-orange-400 ring-inset " : E(g, S) && O && !B && (L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] "), L;
    }, x = () => ({
      width: `${r}px`,
      height: `${r}px`
    }), _ = (g, S) => {
      const w = e[g][S], O = A(g, S), H = f(g, S), B = O && (H == null ? void 0 : H.isCapture) === true, z = s && a.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : i && B ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", j = i && B ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
      return v.jsxs("div", {
        className: D(g, S),
        style: x(),
        onClick: () => l(g, S),
        children: [
          w && v.jsx("div", {
            className: "absolute inset-0 z-10 select-none pointer-events-none",
            style: T(w)
          }),
          O && !w && v.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center z-[5]",
            children: v.jsx("div", {
              className: z
            })
          }),
          O && w && v.jsx("div", {
            className: `absolute inset-0 rounded pointer-events-none z-[5] ${j}`
          })
        ]
      }, `${g}-${S}`);
    }, C = (g) => {
      const S = [];
      for (let w = 0; w < 8; w++) S.push(_(g, w));
      return v.jsx("div", {
        className: "flex",
        children: S
      }, g);
    }, R = () => {
      const g = [];
      for (let S = 0; S < 8; S++) g.push(C(S));
      return g;
    };
    return v.jsx("div", {
      className: "h-full w-full flex justify-center items-center overflow-visible select-none",
      children: v.jsx("div", {
        className: "border-8 border-gray-700 shadow-2xl select-none",
        style: {
          boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)"
        },
        children: v.jsx("div", {
          className: "flex flex-col",
          children: R()
        })
      })
    });
  };
  S0 = function(e) {
    return e.map((t) => [
      ...t
    ]);
  };
  const kf = () => ({
    white: {
      kingSide: true,
      queenSide: true
    },
    black: {
      kingSide: true,
      queenSide: true
    }
  });
  function a1(e) {
    return {
      white: {
        ...e.white
      },
      black: {
        ...e.black
      }
    };
  }
  function l1(e, t, a, l, n) {
    const u = a1(e), i = l.color;
    return l.type === "king" && (u[i] = {
      kingSide: false,
      queenSide: false
    }), l.type === "rook" && (t.row === 7 && t.col === 7 && (u.white.kingSide = false), t.row === 7 && t.col === 0 && (u.white.queenSide = false), t.row === 0 && t.col === 7 && (u.black.kingSide = false), t.row === 0 && t.col === 0 && (u.black.queenSide = false)), (n == null ? void 0 : n.type) === "rook" && (a.row === 7 && a.col === 7 && (u.white.kingSide = false), a.row === 7 && a.col === 0 && (u.white.queenSide = false), a.row === 0 && a.col === 7 && (u.black.kingSide = false), a.row === 0 && a.col === 0 && (u.black.queenSide = false)), u;
  }
  function Vf(e, t, a, l, n) {
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
  function Zf(e, t, a, l, n) {
    if (Math.abs(l - t) !== Math.abs(n - a) || t === l) return false;
    const u = l > t ? 1 : -1, i = n > a ? 1 : -1;
    let c = t + u, s = a + i;
    for (; c !== l || s !== n; ) {
      if (e[c][s]) return false;
      c += u, s += i;
    }
    return true;
  }
  function n1(e, t, a, l, n) {
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
        return Vf(e, t, a, l, n);
      case "bishop":
        return Zf(e, t, a, l, n);
      case "queen":
        return Vf(e, t, a, l, n) || Zf(e, t, a, l, n);
      default:
        return false;
    }
  }
  Qt = function(e, t, a, l) {
    for (let n = 0; n < 8; n++) for (let u = 0; u < 8; u++) {
      const i = e[n][u];
      if (i && i.color === l && n1(e, n, u, t, a)) return true;
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
  Ha = function(e, t) {
    const a = x0(t, e);
    if (!a) return false;
    const l = e === "white" ? "black" : "white";
    return Qt(t, a.row, a.col, l);
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
    const c = l1(l, t, a, u, i);
    return {
      newBoard: n,
      captured: i,
      rights: c
    };
  }
  const u1 = () => {
    const [e, t] = b.useState({
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
      castlingRights: kf()
    }), [a, l] = b.useState(false), n = 360, i = n * 2 + 24 * 2, c = (x) => ({
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
      const C = e.board[x][_], R = e.selectedSquare ? e.board[e.selectedSquare.row][e.selectedSquare.col] : null;
      if (!(!e.selectedSquare && !C)) {
        if (C && C.color === e.currentPlayer) {
          const g = r(x, _, e.board, e.castlingRights);
          t((S) => ({
            ...S,
            selectedSquare: {
              row: x,
              col: _
            },
            possibleMoves: g
          }));
          return;
        }
        if (e.selectedSquare && e.possibleMoves.some((g) => g.row === x && g.col === _)) {
          const g = e.selectedSquare, { newBoard: S, captured: w, rights: O } = Kf(e.board, g, {
            row: x,
            col: _
          }, e.castlingRights);
          if (R.type === "pawn" && (R.color === "white" && x === 0 || R.color === "black" && x === 7)) {
            t((L) => ({
              ...L,
              board: S,
              castlingRights: O,
              selectedSquare: null,
              possibleMoves: [],
              pendingPromotion: {
                row: x,
                col: _,
                color: R.color,
                from: g
              }
            }));
            return;
          }
          const H = {
            ...e.capturedPieces
          };
          w && H[w.color].push(w);
          const B = e.currentPlayer === "white" ? "black" : "white", z = Ha(B, S), j = h(B, S, O);
          let q = "playing";
          z ? q = j ? "check" : "checkmate" : j || (q = "stalemate"), t((L) => ({
            ...L,
            board: S,
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
                piece: R,
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
    }, m = (x, _, C, R) => {
      const g = C[x][_];
      if (!g) return [];
      const S = [];
      switch (g.type) {
        case "pawn":
          S.push(...d(x, _, g.color, C));
          break;
        case "rook":
          S.push(...y(x, _, g.color, C));
          break;
        case "knight":
          S.push(...T(x, _, g.color, C));
          break;
        case "bishop":
          S.push(...M(x, _, g.color, C));
          break;
        case "queen":
          S.push(...A(x, _, g.color, C));
          break;
        case "king":
          S.push(...f(x, _, g.color, C, R));
          break;
      }
      return S;
    }, r = (x, _, C, R) => {
      const g = C[x][_];
      if (!g) return [];
      const S = m(x, _, C, R), w = g.color;
      return S.filter((O) => {
        const { newBoard: H } = Kf(C, {
          row: x,
          col: _
        }, O, R);
        let B = H;
        return g.type === "pawn" && (O.row === 0 || O.row === 7) && (B = S0(H), B[O.row][O.col] = {
          type: "queen",
          color: g.color
        }), !Ha(w, B);
      });
    }, d = (x, _, C, R) => {
      const g = [], S = C === "white" ? -1 : 1, w = C === "white" ? 6 : 1;
      x + S >= 0 && x + S < 8 && !R[x + S][_] && (g.push({
        row: x + S,
        col: _
      }), x === w && !R[x + 2 * S][_] && g.push({
        row: x + 2 * S,
        col: _
      }));
      for (const O of [
        -1,
        1
      ]) {
        const H = _ + O;
        if (H >= 0 && H < 8 && x + S >= 0 && x + S < 8) {
          const B = R[x + S][H];
          B && B.color !== C && g.push({
            row: x + S,
            col: H
          });
        }
      }
      return g;
    }, y = (x, _, C, R) => {
      const g = [], S = [
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
      for (const [w, O] of S) for (let H = 1; H < 8; H++) {
        const B = x + w * H, z = _ + O * H;
        if (B < 0 || B >= 8 || z < 0 || z >= 8) break;
        const j = R[B][z];
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
    }, T = (x, _, C, R) => {
      const g = [], S = [
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
      for (const [w, O] of S) {
        const H = x + w, B = _ + O;
        if (H >= 0 && H < 8 && B >= 0 && B < 8) {
          const z = R[H][B];
          (!z || z.color !== C) && g.push({
            row: H,
            col: B
          });
        }
      }
      return g;
    }, M = (x, _, C, R) => {
      const g = [], S = [
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
      for (const [w, O] of S) for (let H = 1; H < 8; H++) {
        const B = x + w * H, z = _ + O * H;
        if (B < 0 || B >= 8 || z < 0 || z >= 8) break;
        const j = R[B][z];
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
    }, A = (x, _, C, R) => [
      ...y(x, _, C, R),
      ...M(x, _, C, R)
    ], f = (x, _, C, R, g) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
      const S = [], w = [
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
          const q = R[z][j];
          (!q || q.color !== C) && S.push({
            row: z,
            col: j
          });
        }
      }
      const O = C === "white" ? "black" : "white";
      return C === "white" && x === 7 && _ === 4 && (g.white.kingSide && ((_a2 = R[7][7]) == null ? void 0 : _a2.type) === "rook" && ((_b2 = R[7][7]) == null ? void 0 : _b2.color) === "white" && !R[7][5] && !R[7][6] && !Ha("white", R) && !Qt(R, 7, 5, O) && !Qt(R, 7, 6, O) && S.push({
        row: 7,
        col: 6
      }), g.white.queenSide && ((_c2 = R[7][0]) == null ? void 0 : _c2.type) === "rook" && ((_d2 = R[7][0]) == null ? void 0 : _d2.color) === "white" && !R[7][1] && !R[7][2] && !R[7][3] && !Ha("white", R) && !Qt(R, 7, 3, O) && !Qt(R, 7, 2, O) && S.push({
        row: 7,
        col: 2
      })), C === "black" && x === 0 && _ === 4 && (g.black.kingSide && ((_e2 = R[0][7]) == null ? void 0 : _e2.type) === "rook" && ((_f2 = R[0][7]) == null ? void 0 : _f2.color) === "black" && !R[0][5] && !R[0][6] && !Ha("black", R) && !Qt(R, 0, 5, O) && !Qt(R, 0, 6, O) && S.push({
        row: 0,
        col: 6
      }), g.black.queenSide && ((_g2 = R[0][0]) == null ? void 0 : _g2.type) === "rook" && ((_h2 = R[0][0]) == null ? void 0 : _h2.color) === "black" && !R[0][1] && !R[0][2] && !R[0][3] && !Ha("black", R) && !Qt(R, 0, 3, O) && !Qt(R, 0, 2, O) && S.push({
        row: 0,
        col: 2
      })), S;
    }, h = (x, _, C) => {
      for (let R = 0; R < 8; R++) for (let g = 0; g < 8; g++) {
        const S = _[R][g];
        if (S && S.color === x && r(R, g, _, C).length > 0) return true;
      }
      return false;
    }, p = (x) => {
      if (!e.pendingPromotion) return;
      const { row: _, col: C, color: R, from: g } = e.pendingPromotion, S = e.board.map((z) => [
        ...z
      ]);
      S[_][C] = {
        type: x,
        color: R
      };
      const w = R === "white" ? "black" : "white", O = Ha(w, S), H = h(w, S, e.castlingRights);
      let B = "playing";
      O ? B = H ? "check" : "checkmate" : H || (B = "stalemate"), t((z) => ({
        ...z,
        board: S,
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
              color: R
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
        castlingRights: kf()
      });
    }, D = e.gameStatus === "check" || e.gameStatus === "checkmate" ? x0(e.board, e.currentPlayer) : null;
    return v.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        v.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 144
        }),
        v.jsx("button", {
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
        v.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            v.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                v.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "black")
                }),
                v.jsx("div", {
                  children: v.jsx(b0, {
                    board: e.board,
                    selectedSquare: e.selectedSquare,
                    possibleMoves: e.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: a,
                    checkSquare: D
                  })
                }),
                v.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "White player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "white" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "white")
                })
              ]
            }),
            a && v.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                v.jsx("div", {
                  className: "mb-6",
                  children: v.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Chess Game"
                  })
                }),
                v.jsxs("div", {
                  className: "mb-6",
                  children: [
                    v.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        v.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${e.currentPlayer === "white" ? "bg-blue-600 border-blue-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            e.currentPlayer === "white" ? "White" : "Black",
                            " to move"
                          ]
                        }),
                        e.gameStatus === "check" && v.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Check!"
                        }),
                        e.gameStatus === "checkmate" && v.jsx("div", {
                          className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Checkmate!"
                        }),
                        e.gameStatus === "stalemate" && v.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Stalemate!"
                        })
                      ]
                    }),
                    v.jsx("button", {
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
                v.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    v.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        v.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        v.jsxs("div", {
                          className: "mb-4",
                          children: [
                            v.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "White:"
                            }),
                            v.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                e.capturedPieces.white.map((x, _) => v.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Hc(x)
                                }, _)),
                                e.capturedPieces.white.length === 0 && v.jsx("span", {
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
                        v.jsxs("div", {
                          children: [
                            v.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "Black:"
                            }),
                            v.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                e.capturedPieces.black.map((x, _) => v.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Hc(x)
                                }, _)),
                                e.capturedPieces.black.length === 0 && v.jsx("span", {
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
                    v.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        v.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        v.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            e.moveHistory.slice(-12).map((x, _) => v.jsxs("div", {
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
                            e.moveHistory.length === 0 && v.jsx("div", {
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
        e.pendingPromotion && v.jsx("div", {
          className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
          children: v.jsxs("div", {
            className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg",
            style: {
              boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)"
            },
            children: [
              v.jsx("h3", {
                className: "text-sm font-bold mb-6 text-center text-green-400",
                style: {
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  textShadow: "2px 2px 0px #000"
                },
                children: "Choose promotion piece"
              }),
              v.jsx("div", {
                className: "flex gap-4 justify-center",
                children: [
                  "queen",
                  "rook",
                  "bishop",
                  "knight"
                ].map((x) => v.jsx("button", {
                  onClick: () => p(x),
                  className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors",
                  style: {
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000"
                  },
                  children: Hc({
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
  }, Hc = (e) => ({
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
  })[e.type][e.color], _i = 8;
  i1 = function(e, t, a) {
    let l = 0;
    for (let n = 0; n < _i; n++) for (let u = 0; u < _i; u++) {
      const i = e[n][u];
      i && t(i, n, u) && (l += a(n, u, e).length);
    }
    return l;
  };
  c1 = function(e, t, a, l) {
    if (!t) return [];
    const n = [];
    for (let u = 0; u < _i; u++) for (let i = 0; i < _i; i++) {
      const c = e[u][i];
      c && a(c, u, i) && l(u, i, e).length > 0 && n.push({
        row: u,
        col: i
      });
    }
    return n;
  };
  const s1 = () => {
    const [e, t] = b.useState({
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
    }), [a, l] = b.useState(false), n = 360, i = n * 2 + 24 * 2, c = (g) => ({
      height: `calc(100vh${a ? "" : " - 10px"})`,
      width: n,
      filter: g ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: g ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000",
      WebkitUserDrag: "none"
    });
    function s() {
      const g = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let S = 0; S < 3; S++) for (let w = 0; w < 8; w++) (S + w) % 2 === 1 && (g[S][w] = {
        type: "checker",
        color: "red",
        isKing: false
      });
      for (let S = 5; S < 8; S++) for (let w = 0; w < 8; w++) (S + w) % 2 === 1 && (g[S][w] = {
        type: "checker",
        color: "black",
        isKing: false
      });
      return g;
    }
    const o = (g, S) => {
      const w = e.board[g][S];
      if (e.captureSequence.length > 0 && !e.selectedSquare) {
        const O = e.captureSequence[e.captureSequence.length - 1];
        if (O.to.row !== g || O.to.col !== S) return;
      }
      if (!e.selectedSquare && (!w || w.color === e.currentPlayer)) {
        if (w && w.color === e.currentPlayer) {
          const O = d(g, S, e.board);
          t((H) => ({
            ...H,
            selectedSquare: {
              row: g,
              col: S
            },
            possibleMoves: O
          }));
        }
        return;
      }
      if (e.selectedSquare && e.possibleMoves.some((O) => O.row === g && O.col === S)) {
        const O = e.board.map((z) => [
          ...z
        ]), H = O[e.selectedSquare.row][e.selectedSquare.col];
        if (Math.abs(g - e.selectedSquare.row) === 2) {
          const z = (e.selectedSquare.row + g) / 2, j = (e.selectedSquare.col + S) / 2, q = O[z][j];
          O[z][j] = null;
          const L = {
            ...e.capturedPieces
          };
          L[q.color]++, O[g][S] = H, O[e.selectedSquare.row][e.selectedSquare.col] = null, (H.color === "red" && g === 7 || H.color === "black" && g === 0) && !H.isKing && (O[g][S] = {
            ...H,
            isKing: true
          });
          const Ce = m(g, S, O);
          if (Ce.length > 0 && !e.captureSequence.length) {
            const ge = [
              ...e.captureSequence,
              {
                from: e.selectedSquare,
                to: {
                  row: g,
                  col: S
                },
                captured: q
              }
            ];
            t((G) => ({
              ...G,
              board: O,
              selectedSquare: {
                row: g,
                col: S
              },
              possibleMoves: Ce,
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
                  col: S
                },
                captured: q
              }
            ], G = m(g, S, O);
            if (G.length > 0) {
              t((Z) => ({
                ...Z,
                board: O,
                selectedSquare: {
                  row: g,
                  col: S
                },
                possibleMoves: G,
                capturedPieces: L,
                captureSequence: ge
              }));
              return;
            } else {
              const Z = e.currentPlayer === "red" ? "black" : "red", I = y(O, Z);
              t((Be) => ({
                ...Be,
                board: O,
                currentPlayer: Z,
                selectedSquare: null,
                possibleMoves: [],
                gameStatus: I,
                capturedPieces: L,
                captureSequence: [],
                moveHistory: [
                  ...Be.moveHistory,
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
            t((Z) => ({
              ...Z,
              board: O,
              currentPlayer: ge,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus: G,
              capturedPieces: L,
              captureSequence: [],
              moveHistory: [
                ...Z.moveHistory,
                {
                  piece: H,
                  moves: [
                    {
                      from: e.selectedSquare,
                      to: {
                        row: g,
                        col: S
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
          O[g][S] = H, O[e.selectedSquare.row][e.selectedSquare.col] = null, (H.color === "red" && g === 7 || H.color === "black" && g === 0) && !H.isKing && (O[g][S] = {
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
                      col: S
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
    }, m = (g, S, w) => {
      const O = w[g][S];
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
        const q = g + 2 * z, L = S + 2 * j, V = g + z, Ce = S + j;
        if (q >= 0 && q < 8 && L >= 0 && L < 8 && !w[q][L]) {
          const ge = w[V][Ce];
          ge && ge.color !== O.color && H.push({
            row: q,
            col: L,
            isCapture: true
          });
        }
      }
      return H;
    }, r = (g, S) => {
      for (let w = 0; w < 8; w++) for (let O = 0; O < 8; O++) {
        const H = g[w][O];
        if (H && H.color === S && m(w, O, g).length > 0) return true;
      }
      return false;
    }, d = (g, S, w) => {
      const O = w[g][S];
      if (!O || O.type !== "checker") return [];
      const H = m(g, S, w);
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
        const L = g + j, V = S + q;
        L >= 0 && L < 8 && V >= 0 && V < 8 && !w[L][V] && B.push({
          row: L,
          col: V
        });
      }
      return B;
    }, y = (g, S) => {
      let w = false, O = false;
      for (let H = 0; H < 8; H++) {
        for (let B = 0; B < 8; B++) {
          const z = g[H][B];
          if (z && z.color === S && (w = true, d(H, B, g).length > 0)) {
            O = true;
            break;
          }
        }
        if (O) break;
      }
      return !w || !O ? S === "red" ? "black_wins" : "red_wins" : "playing";
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
    }, A = ((g) => g.map((S) => S.map((w) => w ? {
      type: "rook",
      color: w.color === "red" ? "white" : "black",
      isKing: w.isKing
    } : null)))(e.board), f = e.gameStatus === "playing" && e.captureSequence.length > 0, h = f && e.captureSequence[e.captureSequence.length - 1].to, p = e.gameStatus === "playing" && e.captureSequence.length === 0, E = e.board, D = e.currentPlayer, x = f || p && r(E, D), _ = f && h ? [
      {
        row: h.row,
        col: h.col
      }
    ] : p ? c1(E, r(E, D), (g, S, w) => g && g.color === D, m) : [], C = p ? i1(E, (g, S, w) => g && g.color === D, d) : 0;
    let R = false;
    return e.gameStatus === "playing" && (e.captureSequence.length > 0 ? R = e.possibleMoves.length === 1 : R = C === 1), v.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        v.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 144
        }),
        v.jsx("button", {
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
        v.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            v.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6 select-none",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                v.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "black")
                }),
                v.jsx("div", {
                  children: v.jsx(b0, {
                    board: A,
                    selectedSquare: e.selectedSquare,
                    possibleMoves: e.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: a,
                    forcedCapture: x,
                    mandatoryPieceSquares: _,
                    singleLegalMoveHighlight: R,
                    comboContinuePiece: f ? h : null
                  })
                }),
                v.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "Red player",
                  draggable: false,
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${e.currentPlayer === "red" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(e.currentPlayer === "red")
                })
              ]
            }),
            a && v.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                v.jsx("div", {
                  className: "mb-6",
                  children: v.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Checkers Game"
                  })
                }),
                v.jsxs("div", {
                  className: "mb-6",
                  children: [
                    v.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        v.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${e.currentPlayer === "red" ? "bg-red-600 border-red-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            e.currentPlayer === "red" ? "Red" : "Black",
                            " to move"
                          ]
                        }),
                        e.gameStatus === "red_wins" && v.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Red Wins!"
                        }),
                        e.gameStatus === "black_wins" && v.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Black Wins!"
                        }),
                        e.gameStatus === "draw" && v.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Draw!"
                        }),
                        e.captureSequence.length > 0 && v.jsx("div", {
                          className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Continue jumping!"
                        })
                      ]
                    }),
                    v.jsx("button", {
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
                v.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    v.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        v.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        v.jsxs("div", {
                          className: "mb-4",
                          children: [
                            v.jsxs("h4", {
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
                            v.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: e.capturedPieces.red
                                }, (g, S) => v.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u2656"
                                }, S)),
                                e.capturedPieces.red === 0 && v.jsx("span", {
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
                        v.jsxs("div", {
                          children: [
                            v.jsxs("h4", {
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
                            v.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: e.capturedPieces.black
                                }, (g, S) => v.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u265C"
                                }, S)),
                                e.capturedPieces.black === 0 && v.jsx("span", {
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
                    v.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        v.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        v.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            e.moveHistory.slice(-12).map((g, S) => v.jsxs("div", {
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
                            }, S)),
                            e.moveHistory.length === 0 && v.jsx("div", {
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
  }, r1 = b.lazy(() => St(() => import("./OsrsMmgRankingsPage-Cm6Xu8by.js"), __vite__mapDeps([0,1,2,3,4,5]))), o1 = b.lazy(() => St(() => import("./OsrsMmgCalculatorPage-CAXgUaBf.js"), __vite__mapDeps([6,1,2,3,4]))), f1 = b.lazy(() => St(() => import("./OsrsCharacterPage-AnASGru7.js"), __vite__mapDeps([7,2,5]))), d1 = b.lazy(() => St(() => import("./page-IkKIKi59.js").then(async (m) => {
    await m.__tla;
    return m;
  }), [])), h1 = b.lazy(() => St(() => import("./SnakeSinglePlayerPage-CRfXfdh4.js"), __vite__mapDeps([8,9,10,3,11,12,13,14,15,16,17])).then((e) => ({
    default: e.default
  }))), m1 = b.lazy(() => St(() => import("./TypingPage-CdUNI5Oi.js"), __vite__mapDeps([18,9,10,3]))), y1 = b.lazy(() => St(() => import("./TickTackToePage-QzEeoLZQ.js"), __vite__mapDeps([19,9,10,3]))), p1 = b.lazy(() => St(() => import("./page-DlmozDiB.js"), __vite__mapDeps([20,10,3,4,15,11,12,13,21,22,23,24,25,26]))), g1 = b.lazy(() => St(() => import("./page-DsmbOxQQ.js"), __vite__mapDeps([27,9,10,3,12,13,28,24,14,26,15,25,17,29]))), v1 = b.lazy(() => St(() => import("./page-Dt2uwtO2.js"), __vite__mapDeps([30,31,21,13,28,24]))), b1 = b.lazy(() => St(() => import("./page-DCy19YTg.js"), __vite__mapDeps([32,31,21,13,22,28,24]))), S1 = b.lazy(() => St(() => import("./page-CtT7Re-x.js"), __vite__mapDeps([33,9,10,3,23,13,28,24,15,29,16,25,17])));
  function x1() {
    return v.jsxs(yb, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      children: [
        v.jsx(ab, {
          basename: "/",
          children: v.jsx(b.Suspense, {
            fallback: null,
            children: v.jsxs(wv, {
              children: [
                v.jsx(ze, {
                  path: "/",
                  element: v.jsx(Wb, {})
                }),
                v.jsx(ze, {
                  path: "/play/:id",
                  element: v.jsx(Fb, {})
                }),
                v.jsx(ze, {
                  path: "/osrs-mmg",
                  element: v.jsx(Gt, {
                    title: "OSRS MMG Rankings",
                    children: v.jsx(b.Suspense, {
                      fallback: v.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: v.jsx(r1, {})
                    })
                  })
                }),
                v.jsx(ze, {
                  path: "/osrs-mmg/m/:methodId",
                  element: v.jsx(Gt, {
                    title: "OSRS MMG Calculator",
                    children: v.jsx(b.Suspense, {
                      fallback: v.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: v.jsx(o1, {})
                    })
                  })
                }),
                v.jsx(ze, {
                  path: "/osrs-mmg/c",
                  element: v.jsx(Gt, {
                    title: "OSRS Character",
                    children: v.jsx(b.Suspense, {
                      fallback: v.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: v.jsx(f1, {})
                    })
                  })
                }),
                v.jsx(ze, {
                  path: "/motherload",
                  element: v.jsx(Gt, {
                    title: "Motherload",
                    children: v.jsx(b.Suspense, {
                      fallback: v.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: v.jsx(d1, {})
                    })
                  })
                }),
                v.jsx(ze, {
                  path: "/chess",
                  element: v.jsx(Gt, {
                    title: "Chess",
                    children: v.jsx(u1, {})
                  })
                }),
                v.jsx(ze, {
                  path: "/checkers",
                  element: v.jsx(Gt, {
                    title: "Checkers",
                    children: v.jsx(s1, {})
                  })
                }),
                v.jsx(ze, {
                  path: "/snake",
                  element: v.jsx(Gt, {
                    title: "Snake",
                    children: v.jsx(h1, {})
                  })
                }),
                v.jsx(ze, {
                  path: "/typing",
                  element: v.jsx(Gt, {
                    title: "Typing",
                    children: v.jsx(m1, {})
                  })
                }),
                v.jsx(ze, {
                  path: "/tick-tack-toe",
                  element: v.jsx(Gt, {
                    title: "Tick Tack Toe",
                    children: v.jsx(y1, {})
                  })
                }),
                v.jsx(ze, {
                  path: "/multiplayer",
                  element: v.jsx(p1, {})
                }),
                v.jsx(ze, {
                  path: "/multiplayer/:roomId/snake",
                  element: v.jsx(g1, {})
                }),
                v.jsx(ze, {
                  path: "/multiplayer/:roomId/chess",
                  element: v.jsx(v1, {})
                }),
                v.jsx(ze, {
                  path: "/multiplayer/:roomId/checkers",
                  element: v.jsx(b1, {})
                }),
                v.jsx(ze, {
                  path: "/multiplayer/:roomId/fighter",
                  element: v.jsx(S1, {})
                }),
                v.jsx(ze, {
                  path: "*",
                  element: v.jsx(d0, {
                    to: "/",
                    replace: true
                  })
                })
              ]
            })
          })
        }),
        v.jsx(Kb, {
          richColors: true,
          position: "top-center"
        })
      ]
    });
  }
  wg.createRoot(document.getElementById("root")).render(v.jsx(b.StrictMode, {
    children: v.jsx(x1, {})
  }));
})();
export {
  t1 as C,
  g0 as F,
  Ga as L,
  U as R,
  Ib as S,
  St as _,
  __tla,
  Yr as a,
  od as b,
  _1 as c,
  T1 as d,
  ly as e,
  z1 as f,
  Jf as g,
  At as h,
  S0 as i,
  v as j,
  Ha as k,
  Qt as l,
  c1 as m,
  i1 as n,
  e1 as o,
  Pb as p,
  b as r,
  A1 as t,
  pv as u,
  R1 as z
};
