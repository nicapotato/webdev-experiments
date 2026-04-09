const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SnakeSinglePlayerPage-0YHfKr9x.js","assets/button-DoKDxYAf.js","assets/play-CqVgvNxU.js","assets/grid-3x3-DPN8fQzc.js","assets/snake-game-multiplayer-COxn6obF.js","assets/gin-DHzzR3IR.js","assets/TypingPage-DC01SJjs.js","assets/page-CoJYSckl.js","assets/chess-game-multiplayer-DB5exR2Z.js","assets/checkers-game-multiplayer-CFO-YGq1.js","assets/fighter-game-multiplayer-8EeYtQfV.js","assets/users-Bfb7UK6w.js","assets/page-BTW3rbuX.js","assets/player-utils-sDKa8flh.js","assets/wifi-qXXkt-ft.js","assets/page-DNc8LPmU.js","assets/ChessBoardMultiplayer-BZFSEMr_.js","assets/page-kCOWQVU1.js","assets/page-CLj-t71n.js"])))=>i.map(i=>d[i]);
let N, Nl, If, $1, Z0, ng, E, x, F1, Ph, W1;
let __tla = (async () => {
  function E0(t, e) {
    for (var l = 0; l < e.length; l++) {
      const a = e[l];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const n in a) if (n !== "default" && !(n in t)) {
          const u = Object.getOwnPropertyDescriptor(a, n);
          u && Object.defineProperty(t, n, u.get ? u : {
            enumerable: true,
            get: () => a[n]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  (function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
    new MutationObserver((n) => {
      for (const u of n) if (u.type === "childList") for (const i of u.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function l(n) {
      const u = {};
      return n.integrity && (u.integrity = n.integrity), n.referrerPolicy && (u.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? u.credentials = "include" : n.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function a(n) {
      if (n.ep) return;
      n.ep = true;
      const u = l(n);
      fetch(n.href, u);
    }
  })();
  function Bf(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var qf = {
    exports: {}
  }, vi = {};
  var T0 = Symbol.for("react.transitional.element"), z0 = Symbol.for("react.fragment");
  function Lf(t, e, l) {
    var a = null;
    if (l !== void 0 && (a = "" + l), e.key !== void 0 && (a = "" + e.key), "key" in e) {
      l = {};
      for (var n in e) n !== "key" && (l[n] = e[n]);
    } else l = e;
    return e = l.ref, {
      $$typeof: T0,
      type: t,
      key: a,
      ref: e !== void 0 ? e : null,
      props: l
    };
  }
  vi.Fragment = z0;
  vi.jsx = Lf;
  vi.jsxs = Lf;
  qf.exports = vi;
  let Yf, q;
  E = qf.exports;
  Yf = {
    exports: {}
  };
  q = {};
  var Ns = Symbol.for("react.transitional.element"), _0 = Symbol.for("react.portal"), A0 = Symbol.for("react.fragment"), R0 = Symbol.for("react.strict_mode"), M0 = Symbol.for("react.profiler"), C0 = Symbol.for("react.consumer"), N0 = Symbol.for("react.context"), O0 = Symbol.for("react.forward_ref"), D0 = Symbol.for("react.suspense"), w0 = Symbol.for("react.memo"), Gf = Symbol.for("react.lazy"), j0 = Symbol.for("react.activity"), $r = Symbol.iterator;
  function U0(t) {
    return t === null || typeof t != "object" ? null : (t = $r && t[$r] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Xf = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Qf = Object.assign, Vf = {};
  function La(t, e, l) {
    this.props = t, this.context = e, this.refs = Vf, this.updater = l || Xf;
  }
  La.prototype.isReactComponent = {};
  La.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  La.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Zf() {
  }
  Zf.prototype = La.prototype;
  function Os(t, e, l) {
    this.props = t, this.context = e, this.refs = Vf, this.updater = l || Xf;
  }
  var Ds = Os.prototype = new Zf();
  Ds.constructor = Os;
  Qf(Ds, La.prototype);
  Ds.isPureReactComponent = true;
  var Wr = Array.isArray;
  function Oc() {
  }
  var st = {
    H: null,
    A: null,
    T: null,
    S: null
  }, Kf = Object.prototype.hasOwnProperty;
  function ws(t, e, l) {
    var a = l.ref;
    return {
      $$typeof: Ns,
      type: t,
      key: e,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  function H0(t, e) {
    return ws(t.type, e, t.props);
  }
  function js(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ns;
  }
  function B0(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(l) {
      return e[l];
    });
  }
  var Fr = /\/+/g;
  function Qi(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? B0("" + t.key) : e.toString(36);
  }
  function q0(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Oc, Oc) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function ia(t, e, l, a, n) {
    var u = typeof t;
    (u === "undefined" || u === "boolean") && (t = null);
    var i = false;
    if (t === null) i = true;
    else switch (u) {
      case "bigint":
      case "string":
      case "number":
        i = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case Ns:
          case _0:
            i = true;
            break;
          case Gf:
            return i = t._init, ia(i(t._payload), e, l, a, n);
        }
    }
    if (i) return n = n(t), i = a === "" ? "." + Qi(t, 0) : a, Wr(n) ? (l = "", i != null && (l = i.replace(Fr, "$&/") + "/"), ia(n, e, l, "", function(d) {
      return d;
    })) : n != null && (js(n) && (n = H0(n, l + (n.key == null || t && t.key === n.key ? "" : ("" + n.key).replace(Fr, "$&/") + "/") + i)), e.push(n)), 1;
    i = 0;
    var c = a === "" ? "." : a + ":";
    if (Wr(t)) for (var s = 0; s < t.length; s++) a = t[s], u = c + Qi(a, s), i += ia(a, e, l, u, n);
    else if (s = U0(t), typeof s == "function") for (t = s.call(t), s = 0; !(a = t.next()).done; ) a = a.value, u = c + Qi(a, s++), i += ia(a, e, l, u, n);
    else if (u === "object") {
      if (typeof t.then == "function") return ia(q0(t), e, l, a, n);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return i;
  }
  function iu(t, e, l) {
    if (t == null) return t;
    var a = [], n = 0;
    return ia(t, a, "", "", function(u) {
      return e.call(l, u, n++);
    }), a;
  }
  function L0(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(l) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = l);
      }, function(l) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = l);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var Pr = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Y0 = {
    map: iu,
    forEach: function(t, e, l) {
      iu(t, function() {
        e.apply(this, arguments);
      }, l);
    },
    count: function(t) {
      var e = 0;
      return iu(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return iu(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!js(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  q.Activity = j0;
  q.Children = Y0;
  q.Component = La;
  q.Fragment = A0;
  q.Profiler = M0;
  q.PureComponent = Os;
  q.StrictMode = R0;
  q.Suspense = D0;
  q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = st;
  q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return st.H.useMemoCache(t);
    }
  };
  q.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  };
  q.cacheSignal = function() {
    return null;
  };
  q.cloneElement = function(t, e, l) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var a = Qf({}, t.props), n = t.key;
    if (e != null) for (u in e.key !== void 0 && (n = "" + e.key), e) !Kf.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (a[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) a.children = l;
    else if (1 < u) {
      for (var i = Array(u), c = 0; c < u; c++) i[c] = arguments[c + 2];
      a.children = i;
    }
    return ws(t.type, n, a);
  };
  q.createContext = function(t) {
    return t = {
      $$typeof: N0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: C0,
      _context: t
    }, t;
  };
  q.createElement = function(t, e, l) {
    var a, n = {}, u = null;
    if (e != null) for (a in e.key !== void 0 && (u = "" + e.key), e) Kf.call(e, a) && a !== "key" && a !== "__self" && a !== "__source" && (n[a] = e[a]);
    var i = arguments.length - 2;
    if (i === 1) n.children = l;
    else if (1 < i) {
      for (var c = Array(i), s = 0; s < i; s++) c[s] = arguments[s + 2];
      n.children = c;
    }
    if (t && t.defaultProps) for (a in i = t.defaultProps, i) n[a] === void 0 && (n[a] = i[a]);
    return ws(t, u, n);
  };
  q.createRef = function() {
    return {
      current: null
    };
  };
  q.forwardRef = function(t) {
    return {
      $$typeof: O0,
      render: t
    };
  };
  q.isValidElement = js;
  q.lazy = function(t) {
    return {
      $$typeof: Gf,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: L0
    };
  };
  q.memo = function(t, e) {
    return {
      $$typeof: w0,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  q.startTransition = function(t) {
    var e = st.T, l = {};
    st.T = l;
    try {
      var a = t(), n = st.S;
      n !== null && n(l, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(Oc, Pr);
    } catch (u) {
      Pr(u);
    } finally {
      e !== null && l.types !== null && (e.types = l.types), st.T = e;
    }
  };
  q.unstable_useCacheRefresh = function() {
    return st.H.useCacheRefresh();
  };
  q.use = function(t) {
    return st.H.use(t);
  };
  q.useActionState = function(t, e, l) {
    return st.H.useActionState(t, e, l);
  };
  q.useCallback = function(t, e) {
    return st.H.useCallback(t, e);
  };
  q.useContext = function(t) {
    return st.H.useContext(t);
  };
  q.useDebugValue = function() {
  };
  q.useDeferredValue = function(t, e) {
    return st.H.useDeferredValue(t, e);
  };
  q.useEffect = function(t, e) {
    return st.H.useEffect(t, e);
  };
  q.useEffectEvent = function(t) {
    return st.H.useEffectEvent(t);
  };
  q.useId = function() {
    return st.H.useId();
  };
  q.useImperativeHandle = function(t, e, l) {
    return st.H.useImperativeHandle(t, e, l);
  };
  q.useInsertionEffect = function(t, e) {
    return st.H.useInsertionEffect(t, e);
  };
  q.useLayoutEffect = function(t, e) {
    return st.H.useLayoutEffect(t, e);
  };
  q.useMemo = function(t, e) {
    return st.H.useMemo(t, e);
  };
  q.useOptimistic = function(t, e) {
    return st.H.useOptimistic(t, e);
  };
  q.useReducer = function(t, e, l) {
    return st.H.useReducer(t, e, l);
  };
  q.useRef = function(t) {
    return st.H.useRef(t);
  };
  q.useState = function(t) {
    return st.H.useState(t);
  };
  q.useSyncExternalStore = function(t, e, l) {
    return st.H.useSyncExternalStore(t, e, l);
  };
  q.useTransition = function() {
    return st.H.useTransition();
  };
  q.version = "19.2.5";
  Yf.exports = q;
  x = Yf.exports;
  N = Bf(x);
  $1 = E0({
    __proto__: null,
    default: N
  }, [
    x
  ]);
  var kf = {
    exports: {}
  }, gi = {}, Jf = {
    exports: {}
  }, $f = {};
  (function(t) {
    function e(C, U) {
      var B = C.length;
      C.push(U);
      t: for (; 0 < B; ) {
        var W = B - 1 >>> 1, $ = C[W];
        if (0 < n($, U)) C[W] = U, C[B] = $, B = W;
        else break t;
      }
    }
    function l(C) {
      return C.length === 0 ? null : C[0];
    }
    function a(C) {
      if (C.length === 0) return null;
      var U = C[0], B = C.pop();
      if (B !== U) {
        C[0] = B;
        t: for (var W = 0, $ = C.length, ue = $ >>> 1; W < ue; ) {
          var je = 2 * (W + 1) - 1, X = C[je], F = je + 1, at = C[F];
          if (0 > n(X, B)) F < $ && 0 > n(at, X) ? (C[W] = at, C[F] = B, W = F) : (C[W] = X, C[je] = B, W = je);
          else if (F < $ && 0 > n(at, B)) C[W] = at, C[F] = B, W = F;
          else break t;
        }
      }
      return U;
    }
    function n(C, U) {
      var B = C.sortIndex - U.sortIndex;
      return B !== 0 ? B : C.id - U.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var i = Date, c = i.now();
      t.unstable_now = function() {
        return i.now() - c;
      };
    }
    var s = [], d = [], p = 1, r = null, m = 3, v = false, z = false, b = false, g = false, f = typeof setTimeout == "function" ? setTimeout : null, o = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    function y(C) {
      for (var U = l(d); U !== null; ) {
        if (U.callback === null) a(d);
        else if (U.startTime <= C) a(d), U.sortIndex = U.expirationTime, e(s, U);
        else break;
        U = l(d);
      }
    }
    function S(C) {
      if (b = false, y(C), !z) if (l(s) !== null) z = true, A || (A = true, w());
      else {
        var U = l(d);
        U !== null && lt(S, U.startTime - C);
      }
    }
    var A = false, T = -1, _ = 5, M = -1;
    function O() {
      return g ? true : !(t.unstable_now() - M < _);
    }
    function D() {
      if (g = false, A) {
        var C = t.unstable_now();
        M = C;
        var U = true;
        try {
          t: {
            z = false, b && (b = false, o(T), T = -1), v = true;
            var B = m;
            try {
              e: {
                for (y(C), r = l(s); r !== null && !(r.expirationTime > C && O()); ) {
                  var W = r.callback;
                  if (typeof W == "function") {
                    r.callback = null, m = r.priorityLevel;
                    var $ = W(r.expirationTime <= C);
                    if (C = t.unstable_now(), typeof $ == "function") {
                      r.callback = $, y(C), U = true;
                      break e;
                    }
                    r === l(s) && a(s), y(C);
                  } else a(s);
                  r = l(s);
                }
                if (r !== null) U = true;
                else {
                  var ue = l(d);
                  ue !== null && lt(S, ue.startTime - C), U = false;
                }
              }
              break t;
            } finally {
              r = null, m = B, v = false;
            }
            U = void 0;
          }
        } finally {
          U ? w() : A = false;
        }
      }
    }
    var w;
    if (typeof h == "function") w = function() {
      h(D);
    };
    else if (typeof MessageChannel < "u") {
      var j = new MessageChannel(), G = j.port2;
      j.port1.onmessage = D, w = function() {
        G.postMessage(null);
      };
    } else w = function() {
      f(D, 0);
    };
    function lt(C, U) {
      T = f(function() {
        C(t.unstable_now());
      }, U);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, t.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < C ? Math.floor(1e3 / C) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, t.unstable_next = function(C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = m;
      }
      var B = m;
      m = U;
      try {
        return C();
      } finally {
        m = B;
      }
    }, t.unstable_requestPaint = function() {
      g = true;
    }, t.unstable_runWithPriority = function(C, U) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var B = m;
      m = C;
      try {
        return U();
      } finally {
        m = B;
      }
    }, t.unstable_scheduleCallback = function(C, U, B) {
      var W = t.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, C) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = B + $, C = {
        id: p++,
        callback: U,
        priorityLevel: C,
        startTime: B,
        expirationTime: $,
        sortIndex: -1
      }, B > W ? (C.sortIndex = B, e(d, C), l(s) === null && C === l(d) && (b ? (o(T), T = -1) : b = true, lt(S, B - W))) : (C.sortIndex = $, e(s, C), z || v || (z = true, A || (A = true, w()))), C;
    }, t.unstable_shouldYield = O, t.unstable_wrapCallback = function(C) {
      var U = m;
      return function() {
        var B = m;
        m = U;
        try {
          return C.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    };
  })($f);
  Jf.exports = $f;
  var G0 = Jf.exports, Wf = {
    exports: {}
  }, Ht = {};
  var X0 = x;
  function Ff(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function al() {
  }
  var Ut = {
    d: {
      f: al,
      r: function() {
        throw Error(Ff(522));
      },
      D: al,
      C: al,
      L: al,
      m: al,
      X: al,
      S: al,
      M: al
    },
    p: 0,
    findDOMNode: null
  }, Q0 = Symbol.for("react.portal");
  function V0(t, e, l) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q0,
      key: a == null ? null : "" + a,
      children: t,
      containerInfo: e,
      implementation: l
    };
  }
  var dn = X0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function bi(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ut;
  Ht.createPortal = function(t, e) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(Ff(299));
    return V0(t, e, null, l);
  };
  Ht.flushSync = function(t) {
    var e = dn.T, l = Ut.p;
    try {
      if (dn.T = null, Ut.p = 2, t) return t();
    } finally {
      dn.T = e, Ut.p = l, Ut.d.f();
    }
  };
  Ht.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, Ut.d.C(t, e));
  };
  Ht.prefetchDNS = function(t) {
    typeof t == "string" && Ut.d.D(t);
  };
  Ht.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var l = e.as, a = bi(l, e.crossOrigin), n = typeof e.integrity == "string" ? e.integrity : void 0, u = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      l === "style" ? Ut.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: a,
        integrity: n,
        fetchPriority: u
      }) : l === "script" && Ut.d.X(t, {
        crossOrigin: a,
        integrity: n,
        fetchPriority: u,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  Ht.preinitModule = function(t, e) {
    if (typeof t == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var l = bi(e.as, e.crossOrigin);
        Ut.d.M(t, {
          crossOrigin: l,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && Ut.d.M(t);
  };
  Ht.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var l = e.as, a = bi(l, e.crossOrigin);
      Ut.d.L(t, l, {
        crossOrigin: a,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0
      });
    }
  };
  Ht.preloadModule = function(t, e) {
    if (typeof t == "string") if (e) {
      var l = bi(e.as, e.crossOrigin);
      Ut.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: l,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else Ut.d.m(t);
  };
  Ht.requestFormReset = function(t) {
    Ut.d.r(t);
  };
  Ht.unstable_batchedUpdates = function(t, e) {
    return t(e);
  };
  Ht.useFormState = function(t, e, l) {
    return dn.H.useFormState(t, e, l);
  };
  Ht.useFormStatus = function() {
    return dn.H.useHostTransitionStatus();
  };
  Ht.version = "19.2.5";
  function Pf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pf);
    } catch (t) {
      console.error(t);
    }
  }
  Pf(), Wf.exports = Ht;
  If = Wf.exports;
  Z0 = Bf(If);
  var Et = G0, td = x, K0 = If;
  function R(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ed(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Gn(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, e.flags & 4098 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function ld(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function ad(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function Ir(t) {
    if (Gn(t) !== t) throw Error(R(188));
  }
  function k0(t) {
    var e = t.alternate;
    if (!e) {
      if (e = Gn(t), e === null) throw Error(R(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return Ir(n), t;
          if (u === a) return Ir(n), e;
          u = u.sibling;
        }
        throw Error(R(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = false, c = n.child; c; ) {
          if (c === l) {
            i = true, l = n, a = u;
            break;
          }
          if (c === a) {
            i = true, a = n, l = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === l) {
              i = true, l = u, a = n;
              break;
            }
            if (c === a) {
              i = true, a = u, l = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(R(189));
        }
      }
      if (l.alternate !== a) throw Error(R(190));
    }
    if (l.tag !== 3) throw Error(R(188));
    return l.stateNode.current === l ? t : e;
  }
  function nd(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = nd(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var rt = Object.assign, J0 = Symbol.for("react.element"), cu = Symbol.for("react.transitional.element"), cn = Symbol.for("react.portal"), ra = Symbol.for("react.fragment"), ud = Symbol.for("react.strict_mode"), Dc = Symbol.for("react.profiler"), id = Symbol.for("react.consumer"), Qe = Symbol.for("react.context"), Us = Symbol.for("react.forward_ref"), wc = Symbol.for("react.suspense"), jc = Symbol.for("react.suspense_list"), Hs = Symbol.for("react.memo"), nl = Symbol.for("react.lazy"), Uc = Symbol.for("react.activity"), $0 = Symbol.for("react.memo_cache_sentinel"), to = Symbol.iterator;
  function Fa(t) {
    return t === null || typeof t != "object" ? null : (t = to && t[to] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var W0 = Symbol.for("react.client.reference");
  function Hc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === W0 ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ra:
        return "Fragment";
      case Dc:
        return "Profiler";
      case ud:
        return "StrictMode";
      case wc:
        return "Suspense";
      case jc:
        return "SuspenseList";
      case Uc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case cn:
        return "Portal";
      case Qe:
        return t.displayName || "Context";
      case id:
        return (t._context.displayName || "Context") + ".Consumer";
      case Us:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Hs:
        return e = t.displayName || null, e !== null ? e : Hc(t.type) || "Memo";
      case nl:
        e = t._payload, t = t._init;
        try {
          return Hc(t(e));
        } catch {
        }
    }
    return null;
  }
  var sn = Array.isArray, H = td.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = K0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bl = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Bc = [], oa = -1;
  function Oe(t) {
    return {
      current: t
    };
  }
  function At(t) {
    0 > oa || (t.current = Bc[oa], Bc[oa] = null, oa--);
  }
  function ut(t, e) {
    oa++, Bc[oa] = t.current, t.current = e;
  }
  var Ce = Oe(null), An = Oe(null), yl = Oe(null), Gu = Oe(null);
  function Xu(t, e) {
    switch (ut(yl, e), ut(An, t), ut(Ce, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sf(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = sf(e), t = Ah(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    At(Ce), ut(Ce, t);
  }
  function Ma() {
    At(Ce), At(An), At(yl);
  }
  function qc(t) {
    t.memoizedState !== null && ut(Gu, t);
    var e = Ce.current, l = Ah(e, t.type);
    e !== l && (ut(An, t), ut(Ce, l));
  }
  function Qu(t) {
    An.current === t && (At(Ce), At(An)), Gu.current === t && (At(Gu), Bn._currentValue = Bl);
  }
  var Vi, eo;
  function wl(t) {
    if (Vi === void 0) try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      Vi = e && e[1] || "", eo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Vi + t + eo;
  }
  var Zi = false;
  function Ki(t, e) {
    if (!t || Zi) return "";
    Zi = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (v) {
                  var m = v;
                }
                Reflect.construct(t, [], r);
              } else {
                try {
                  r.call();
                } catch (v) {
                  m = v;
                }
                t.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (v) {
                m = v;
              }
              (r = t()) && typeof r.catch == "function" && r.catch(function() {
              });
            }
          } catch (v) {
            if (v && m && typeof v.stack == "string") return [
              v.stack,
              m.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), d = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < d.length && !d[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === s.length || n === d.length) for (a = s.length - 1, n = d.length - 1; 1 <= a && 0 <= n && s[a] !== d[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--) if (s[a] !== d[n]) {
          if (a !== 1 || n !== 1) do
            if (a--, n--, 0 > n || s[a] !== d[n]) {
              var p = `
` + s[a].replace(" at new ", " at ");
              return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
            }
          while (1 <= a && 0 <= n);
          break;
        }
      }
    } finally {
      Zi = false, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? wl(l) : "";
  }
  function F0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return wl(t.type);
      case 16:
        return wl("Lazy");
      case 13:
        return t.child !== e && e !== null ? wl("Suspense Fallback") : wl("Suspense");
      case 19:
        return wl("SuspenseList");
      case 0:
      case 15:
        return Ki(t.type, false);
      case 11:
        return Ki(t.type.render, false);
      case 1:
        return Ki(t.type, true);
      case 31:
        return wl("Activity");
      default:
        return "";
    }
  }
  function lo(t) {
    try {
      var e = "", l = null;
      do
        e += F0(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Lc = Object.prototype.hasOwnProperty, Bs = Et.unstable_scheduleCallback, ki = Et.unstable_cancelCallback, P0 = Et.unstable_shouldYield, I0 = Et.unstable_requestPaint, Pt = Et.unstable_now, ty = Et.unstable_getCurrentPriorityLevel, cd = Et.unstable_ImmediatePriority, sd = Et.unstable_UserBlockingPriority, Vu = Et.unstable_NormalPriority, ey = Et.unstable_LowPriority, rd = Et.unstable_IdlePriority, ly = Et.log, ay = Et.unstable_setDisableYieldValue, Xn = null, It = null;
  function ol(t) {
    if (typeof ly == "function" && ay(t), It && typeof It.setStrictMode == "function") try {
      It.setStrictMode(Xn, t);
    } catch {
    }
  }
  var te = Math.clz32 ? Math.clz32 : iy, ny = Math.log, uy = Math.LN2;
  function iy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ny(t) / uy | 0) | 0;
  }
  var su = 256, ru = 262144, ou = 4194304;
  function jl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Si(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = jl(a) : (i &= c, i !== 0 ? n = jl(i) : l || (l = c & ~t, l !== 0 && (n = jl(l))))) : (c = a & ~u, c !== 0 ? n = jl(c) : i !== 0 ? n = jl(i) : l || (l = a & ~t, l !== 0 && (n = jl(l)))), n === 0 ? 0 : e !== 0 && e !== n && !(e & u) && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Qn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function cy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function od() {
    var t = ou;
    return ou <<= 1, !(ou & 62914560) && (ou = 4194304), t;
  }
  function Ji(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Vn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function sy(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, d = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var p = 31 - te(l), r = 1 << p;
      c[p] = 0, s[p] = -1;
      var m = d[p];
      if (m !== null) for (d[p] = null, p = 0; p < m.length; p++) {
        var v = m[p];
        v !== null && (v.lane &= -536870913);
      }
      l &= ~r;
    }
    a !== 0 && fd(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function fd(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - te(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function dd(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - te(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function md(t, e) {
    var l = e & -e;
    return l = l & 42 ? 1 : qs(l), l & (t.suspendedLanes | e) ? 0 : l;
  }
  function qs(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ls(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function hd() {
    var t = J.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Bh(t.type));
  }
  function ao(t, e) {
    var l = J.p;
    try {
      return J.p = t, e();
    } finally {
      J.p = l;
    }
  }
  var Ml = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Ml, Vt = "__reactProps$" + Ml, Ya = "__reactContainer$" + Ml, Yc = "__reactEvents$" + Ml, ry = "__reactListeners$" + Ml, oy = "__reactHandles$" + Ml, no = "__reactResources$" + Ml, Zn = "__reactMarker$" + Ml;
  function Ys(t) {
    delete t[Ct], delete t[Vt], delete t[Yc], delete t[ry], delete t[oy];
  }
  function fa(t) {
    var e = t[Ct];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Ya] || l[Ct]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = mf(t); t !== null; ) {
          if (l = t[Ct]) return l;
          t = mf(t);
        }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Ga(t) {
    if (t = t[Ct] || t[Ya]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function rn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(R(33));
  }
  function xa(t) {
    var e = t[no];
    return e || (e = t[no] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function _t(t) {
    t[Zn] = true;
  }
  var yd = /* @__PURE__ */ new Set(), pd = {};
  function kl(t, e) {
    Ca(t, e), Ca(t + "Capture", e);
  }
  function Ca(t, e) {
    for (pd[t] = e, t = 0; t < e.length; t++) yd.add(e[t]);
  }
  var fy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), uo = {}, io = {};
  function dy(t) {
    return Lc.call(io, t) ? true : Lc.call(uo, t) ? false : fy.test(t) ? io[t] = true : (uo[t] = true, false);
  }
  function zu(t, e, l) {
    if (dy(e)) if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var a = e.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + l);
    }
  }
  function fu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function He(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function re(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function vd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function my(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: true,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Gc(t) {
    if (!t._valueTracker) {
      var e = vd(t) ? "checked" : "value";
      t._valueTracker = my(t, e, "" + t[e]);
    }
  }
  function gd(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var l = e.getValue(), a = "";
    return t && (a = vd(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
  }
  function Zu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var hy = /[\n"\\]/g;
  function de(t) {
    return t.replace(hy, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Xc(t, e, l, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + re(e)) : t.value !== "" + re(e) && (t.value = "" + re(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Qc(t, i, re(e)) : l != null ? Qc(t, i, re(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + re(c) : t.removeAttribute("name");
  }
  function bd(t, e, l, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Gc(t);
        return;
      }
      l = l != null ? "" + re(l) : "", e = e != null ? "" + re(e) : l, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Gc(t);
  }
  function Qc(t, e, l) {
    e === "number" && Zu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ea(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
      for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
    } else {
      for (l = "" + re(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = true, a && (t[n].defaultSelected = true);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = true);
    }
  }
  function Sd(t, e, l) {
    if (e != null && (e = "" + re(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + re(l) : "";
  }
  function xd(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(R(92));
        if (sn(a)) {
          if (1 < a.length) throw Error(R(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = re(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Gc(t);
  }
  function Na(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var yy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function co(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || yy.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Ed(t, e, l) {
    if (e != null && typeof e != "object") throw Error(R(62));
    if (t = t.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && co(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && co(t, u, e[u]);
  }
  function Gs(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
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
  var py = /* @__PURE__ */ new Map([
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
  ]), vy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _u(t) {
    return vy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ve() {
  }
  var Vc = null;
  function Xs(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var da = null, Ta = null;
  function so(t) {
    var e = Ga(t);
    if (e && (t = e.stateNode)) {
      var l = t[Vt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Xc(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + de("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Vt] || null;
                if (!n) throw Error(R(90));
                Xc(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && gd(a);
          }
          break t;
        case "textarea":
          Sd(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && Ea(t, !!l.multiple, e, false);
      }
    }
  }
  var $i = false;
  function Td(t, e, l) {
    if ($i) return t(e, l);
    $i = true;
    try {
      var a = t(e);
      return a;
    } finally {
      if ($i = false, (da !== null || Ta !== null) && (Di(), da && (e = da, t = Ta, Ta = da = null, so(e), t))) for (e = 0; e < t.length; e++) so(t[e]);
    }
  }
  function Rn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Vt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(R(231, e, typeof l));
    return l;
  }
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zc = false;
  if ($e) try {
    var Pa = {};
    Object.defineProperty(Pa, "passive", {
      get: function() {
        Zc = true;
      }
    }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
  } catch {
    Zc = false;
  }
  var fl = null, Qs = null, Au = null;
  function zd() {
    if (Au) return Au;
    var t, e = Qs, l = e.length, a, n = "value" in fl ? fl.value : fl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Au = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ru(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function du() {
    return true;
  }
  function ro() {
    return false;
  }
  function Zt(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t) t.hasOwnProperty(c) && (l = t[c], this[c] = l ? l(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? du : ro, this.isPropagationStopped = ro, this;
    }
    return rt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = du);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = du);
      },
      persist: function() {
      },
      isPersistent: du
    }), e;
  }
  var Jl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xi = Zt(Jl), Kn = rt({}, Jl, {
    view: 0,
    detail: 0
  }), gy = Zt(Kn), Wi, Fi, Ia, Ei = rt({}, Kn, {
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
    getModifierState: Vs,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ia && (Ia && t.type === "mousemove" ? (Wi = t.screenX - Ia.screenX, Fi = t.screenY - Ia.screenY) : Fi = Wi = 0, Ia = t), Wi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Fi;
    }
  }), oo = Zt(Ei), by = rt({}, Ei, {
    dataTransfer: 0
  }), Sy = Zt(by), xy = rt({}, Kn, {
    relatedTarget: 0
  }), Pi = Zt(xy), Ey = rt({}, Jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ty = Zt(Ey), zy = rt({}, Jl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), _y = Zt(zy), Ay = rt({}, Jl, {
    data: 0
  }), fo = Zt(Ay), Ry = {
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
  }, My = {
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
  }, Cy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ny(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Cy[t]) ? !!e[t] : false;
  }
  function Vs() {
    return Ny;
  }
  var Oy = rt({}, Kn, {
    key: function(t) {
      if (t.key) {
        var e = Ry[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ru(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? My[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vs,
    charCode: function(t) {
      return t.type === "keypress" ? Ru(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ru(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Dy = Zt(Oy), wy = rt({}, Ei, {
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
  }), mo = Zt(wy), jy = rt({}, Kn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vs
  }), Uy = Zt(jy), Hy = rt({}, Jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), By = Zt(Hy), qy = rt({}, Ei, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ly = Zt(qy), Yy = rt({}, Jl, {
    newState: 0,
    oldState: 0
  }), Gy = Zt(Yy), Xy = [
    9,
    13,
    27,
    32
  ], Zs = $e && "CompositionEvent" in window, mn = null;
  $e && "documentMode" in document && (mn = document.documentMode);
  var Qy = $e && "TextEvent" in window && !mn, _d = $e && (!Zs || mn && 8 < mn && 11 >= mn), ho = " ", yo = false;
  function Ad(t, e) {
    switch (t) {
      case "keyup":
        return Xy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Rd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ma = false;
  function Vy(t, e) {
    switch (t) {
      case "compositionend":
        return Rd(e);
      case "keypress":
        return e.which !== 32 ? null : (yo = true, ho);
      case "textInput":
        return t = e.data, t === ho && yo ? null : t;
      default:
        return null;
    }
  }
  function Zy(t, e) {
    if (ma) return t === "compositionend" || !Zs && Ad(t, e) ? (t = zd(), Au = Qs = fl = null, ma = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return _d && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ky = {
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
  function po(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ky[t.type] : e === "textarea";
  }
  function Md(t, e, l, a) {
    da ? Ta ? Ta.push(a) : Ta = [
      a
    ] : da = a, e = ri(e, "onChange"), 0 < e.length && (l = new xi("onChange", "change", null, l, a), t.push({
      event: l,
      listeners: e
    }));
  }
  var hn = null, Mn = null;
  function ky(t) {
    Th(t, 0);
  }
  function Ti(t) {
    var e = rn(t);
    if (gd(e)) return t;
  }
  function vo(t, e) {
    if (t === "change") return e;
  }
  var Cd = false;
  if ($e) {
    var Ii;
    if ($e) {
      var tc = "oninput" in document;
      if (!tc) {
        var go = document.createElement("div");
        go.setAttribute("oninput", "return;"), tc = typeof go.oninput == "function";
      }
      Ii = tc;
    } else Ii = false;
    Cd = Ii && (!document.documentMode || 9 < document.documentMode);
  }
  function bo() {
    hn && (hn.detachEvent("onpropertychange", Nd), Mn = hn = null);
  }
  function Nd(t) {
    if (t.propertyName === "value" && Ti(Mn)) {
      var e = [];
      Md(e, Mn, t, Xs(t)), Td(ky, e);
    }
  }
  function Jy(t, e, l) {
    t === "focusin" ? (bo(), hn = e, Mn = l, hn.attachEvent("onpropertychange", Nd)) : t === "focusout" && bo();
  }
  function $y(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ti(Mn);
  }
  function Wy(t, e) {
    if (t === "click") return Ti(e);
  }
  function Fy(t, e) {
    if (t === "input" || t === "change") return Ti(e);
  }
  function Py(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var le = typeof Object.is == "function" ? Object.is : Py;
  function Cn(t, e) {
    if (le(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return false;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Lc.call(e, n) || !le(t[n], e[n])) return false;
    }
    return true;
  }
  function So(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function xo(t, e) {
    var l = So(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e) return {
          node: l,
          offset: e - t
        };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = So(l);
    }
  }
  function Od(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Od(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Dd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Zu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Zu(t.document);
    }
    return e;
  }
  function Ks(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Iy = $e && "documentMode" in document && 11 >= document.documentMode, ha = null, Kc = null, yn = null, kc = false;
  function Eo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    kc || ha == null || ha !== Zu(a) || (a = ha, "selectionStart" in a && Ks(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), yn && Cn(yn, a) || (yn = a, a = ri(Kc, "onSelect"), 0 < a.length && (e = new xi("onSelect", "select", null, e, l), t.push({
      event: e,
      listeners: a
    }), e.target = ha)));
  }
  function Dl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ya = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionrun: Dl("Transition", "TransitionRun"),
    transitionstart: Dl("Transition", "TransitionStart"),
    transitioncancel: Dl("Transition", "TransitionCancel"),
    transitionend: Dl("Transition", "TransitionEnd")
  }, ec = {}, wd = {};
  $e && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
  function $l(t) {
    if (ec[t]) return ec[t];
    if (!ya[t]) return t;
    var e = ya[t], l;
    for (l in e) if (e.hasOwnProperty(l) && l in wd) return ec[t] = e[l];
    return t;
  }
  var jd = $l("animationend"), Ud = $l("animationiteration"), Hd = $l("animationstart"), tp = $l("transitionrun"), ep = $l("transitionstart"), lp = $l("transitioncancel"), Bd = $l("transitionend"), qd = /* @__PURE__ */ new Map(), Jc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Jc.push("scrollEnd");
  function Te(t, e) {
    qd.set(t, e), kl(e, [
      t
    ]);
  }
  var Ku = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, se = [], pa = 0, ks = 0;
  function zi() {
    for (var t = pa, e = ks = pa = 0; e < t; ) {
      var l = se[e];
      se[e++] = null;
      var a = se[e];
      se[e++] = null;
      var n = se[e];
      se[e++] = null;
      var u = se[e];
      if (se[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Ld(l, n, u);
    }
  }
  function _i(t, e, l, a) {
    se[pa++] = t, se[pa++] = e, se[pa++] = l, se[pa++] = a, ks |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Js(t, e, l, a) {
    return _i(t, e, l, a), ku(t);
  }
  function Wl(t, e) {
    return _i(t, null, null, e), ku(t);
  }
  function Ld(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - te(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
      e
    ] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function ku(t) {
    if (50 < zn) throw zn = 0, ys = null, Error(R(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var va = {};
  function ap(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wt(t, e, l, a) {
    return new ap(t, e, l, a);
  }
  function $s(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ke(t, e) {
    var l = t.alternate;
    return l === null ? (l = Wt(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Yd(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Mu(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") $s(t) && (i = 1);
    else if (typeof t == "string") i = sv(t, l, Ce.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Uc:
        return t = Wt(31, l, e, n), t.elementType = Uc, t.lanes = u, t;
      case ra:
        return ql(l.children, n, u, e);
      case ud:
        i = 8, n |= 24;
        break;
      case Dc:
        return t = Wt(12, l, e, n | 2), t.elementType = Dc, t.lanes = u, t;
      case wc:
        return t = Wt(13, l, e, n), t.elementType = wc, t.lanes = u, t;
      case jc:
        return t = Wt(19, l, e, n), t.elementType = jc, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Qe:
            i = 10;
            break t;
          case id:
            i = 9;
            break t;
          case Us:
            i = 11;
            break t;
          case Hs:
            i = 14;
            break t;
          case nl:
            i = 16, a = null;
            break t;
        }
        i = 29, l = Error(R(130, t === null ? "null" : typeof t, "")), a = null;
    }
    return e = Wt(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function ql(t, e, l, a) {
    return t = Wt(7, t, a, e), t.lanes = l, t;
  }
  function lc(t, e, l) {
    return t = Wt(6, t, null, e), t.lanes = l, t;
  }
  function Gd(t) {
    var e = Wt(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ac(t, e, l) {
    return e = Wt(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var To = /* @__PURE__ */ new WeakMap();
  function me(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = To.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: lo(e)
      }, To.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: lo(e)
    };
  }
  var ga = [], ba = 0, Ju = null, Nn = 0, oe = [], fe = 0, zl = null, Ae = 1, Re = "";
  function Ge(t, e) {
    ga[ba++] = Nn, ga[ba++] = Ju, Ju = t, Nn = e;
  }
  function Xd(t, e, l) {
    oe[fe++] = Ae, oe[fe++] = Re, oe[fe++] = zl, zl = t;
    var a = Ae;
    t = Re;
    var n = 32 - te(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - te(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Ae = 1 << 32 - te(e) + n | l << n | a, Re = u + t;
    } else Ae = 1 << u | l << n | a, Re = t;
  }
  function Ws(t) {
    t.return !== null && (Ge(t, 1), Xd(t, 1, 0));
  }
  function Fs(t) {
    for (; t === Ju; ) Ju = ga[--ba], ga[ba] = null, Nn = ga[--ba], ga[ba] = null;
    for (; t === zl; ) zl = oe[--fe], oe[fe] = null, Re = oe[--fe], oe[fe] = null, Ae = oe[--fe], oe[fe] = null;
  }
  function Qd(t, e) {
    oe[fe++] = Ae, oe[fe++] = Re, oe[fe++] = zl, Ae = e.id, Re = e.overflow, zl = t;
  }
  var Nt = null, ct = null, K = false, pl = null, he = false, $c = Error(R(519));
  function _l(t) {
    var e = Error(R(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw On(me(e, t)), $c;
  }
  function zo(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Ct] = t, e[Vt] = a, l) {
      case "dialog":
        Q("cancel", e), Q("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Un.length; l++) Q(Un[l], e);
        break;
      case "source":
        Q("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", e), Q("load", e);
        break;
      case "details":
        Q("toggle", e);
        break;
      case "input":
        Q("invalid", e), bd(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        Q("invalid", e);
        break;
      case "textarea":
        Q("invalid", e), xd(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || _h(e.textContent, l) ? (a.popover != null && (Q("beforetoggle", e), Q("toggle", e)), a.onScroll != null && Q("scroll", e), a.onScrollEnd != null && Q("scrollend", e), a.onClick != null && (e.onclick = Ve), e = true) : e = false, e || _l(t, true);
  }
  function _o(t) {
    for (Nt = t.return; Nt; ) switch (Nt.tag) {
      case 5:
      case 31:
      case 13:
        he = false;
        return;
      case 27:
      case 3:
        he = true;
        return;
      default:
        Nt = Nt.return;
    }
  }
  function na(t) {
    if (t !== Nt) return false;
    if (!K) return _o(t), K = true, false;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Ss(t.type, t.memoizedProps)), l = !l), l && ct && _l(t), _o(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(R(317));
      ct = df(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(R(317));
      ct = df(t);
    } else e === 27 ? (e = ct, Cl(t.type) ? (t = zs, zs = null, ct = t) : ct = e) : ct = Nt ? pe(t.stateNode.nextSibling) : null;
    return true;
  }
  function Xl() {
    ct = Nt = null, K = false;
  }
  function nc() {
    var t = pl;
    return t !== null && (Gt === null ? Gt = t : Gt.push.apply(Gt, t), pl = null), t;
  }
  function On(t) {
    pl === null ? pl = [
      t
    ] : pl.push(t);
  }
  var Wc = Oe(null), Fl = null, Ze = null;
  function il(t, e, l) {
    ut(Wc, e._currentValue), e._currentValue = l;
  }
  function ke(t) {
    t._currentValue = Wc.current, At(Wc);
  }
  function Fc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Pc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < e.length; s++) if (c.context === e[s]) {
            u.lanes |= l, c = u.alternate, c !== null && (c.lanes |= l), Fc(u.return, l, t), a || (i = null);
            break t;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(R(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Fc(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else for (i = n; i !== null; ) {
        if (i === t) {
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
  function Xa(t, e, l, a) {
    t = null;
    for (var n = e, u = false; n !== null; ) {
      if (!u) {
        if (n.flags & 524288) u = true;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(R(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          le(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
            c
          ]);
        }
      } else if (n === Gu.current) {
        if (i = n.alternate, i === null) throw Error(R(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Bn) : t = [
          Bn
        ]);
      }
      n = n.return;
    }
    t !== null && Pc(e, t, l, a), e.flags |= 262144;
  }
  function $u(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!le(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Ql(t) {
    Fl = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ot(t) {
    return Vd(Fl, t);
  }
  function mu(t, e) {
    return Fl === null && Ql(t), Vd(t, e);
  }
  function Vd(t, e) {
    var l = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: l,
      next: null
    }, Ze === null) {
      if (t === null) throw Error(R(308));
      Ze = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else Ze = Ze.next = e;
    return l;
  }
  var np = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: false,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = true, t.forEach(function(l) {
        return l();
      });
    };
  }, up = Et.unstable_scheduleCallback, ip = Et.unstable_NormalPriority, bt = {
    $$typeof: Qe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ps() {
    return {
      controller: new np(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function kn(t) {
    t.refCount--, t.refCount === 0 && up(ip, function() {
      t.controller.abort();
    });
  }
  var pn = null, Ic = 0, Oa = 0, za = null;
  function cp(t, e) {
    if (pn === null) {
      var l = pn = [];
      Ic = 0, Oa = Tr(), za = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Ic++, e.then(Ao, Ao), e;
  }
  function Ao() {
    if (--Ic === 0 && pn !== null) {
      za !== null && (za.status = "fulfilled");
      var t = pn;
      pn = null, Oa = 0, za = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function sp(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(function() {
      a.status = "fulfilled", a.value = e;
      for (var n = 0; n < l.length; n++) (0, l[n])(e);
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
    }), a;
  }
  var Ro = H.S;
  H.S = function(t, e) {
    nh = Pt(), typeof e == "object" && e !== null && typeof e.then == "function" && cp(t, e), Ro !== null && Ro(t, e);
  };
  var Ll = Oe(null);
  function Is() {
    var t = Ll.current;
    return t !== null ? t : nt.pooledCache;
  }
  function Cu(t, e) {
    e === null ? ut(Ll, Ll.current) : ut(Ll, e.pool);
  }
  function Zd() {
    var t = Is();
    return t === null ? null : {
      parent: bt._currentValue,
      pool: t
    };
  }
  var Qa = Error(R(460)), tr = Error(R(474)), Ai = Error(R(542)), Wu = {
    then: function() {
    }
  };
  function Mo(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Kd(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ve, Ve), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, No(t), t;
      default:
        if (typeof e.status == "string") e.then(Ve, Ve);
        else {
          if (t = nt, t !== null && 100 < t.shellSuspendCounter) throw Error(R(482));
          t = e, t.status = "pending", t.then(function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "fulfilled", n.value = a;
            }
          }, function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "rejected", n.reason = a;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, No(t), t;
        }
        throw Yl = e, Qa;
    }
  }
  function Ul(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Yl = l, Qa) : l;
    }
  }
  var Yl = null;
  function Co() {
    if (Yl === null) throw Error(R(459));
    var t = Yl;
    return Yl = null, t;
  }
  function No(t) {
    if (t === Qa || t === Ai) throw Error(R(483));
  }
  var _a = null, Dn = 0;
  function hu(t) {
    var e = Dn;
    return Dn += 1, _a === null && (_a = []), Kd(_a, t, e);
  }
  function tn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function yu(t, e) {
    throw e.$$typeof === J0 ? Error(R(525)) : (t = Object.prototype.toString.call(e), Error(R(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function kd(t) {
    function e(f, o) {
      if (t) {
        var h = f.deletions;
        h === null ? (f.deletions = [
          o
        ], f.flags |= 16) : h.push(o);
      }
    }
    function l(f, o) {
      if (!t) return null;
      for (; o !== null; ) e(f, o), o = o.sibling;
      return null;
    }
    function a(f) {
      for (var o = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? o.set(f.key, f) : o.set(f.index, f), f = f.sibling;
      return o;
    }
    function n(f, o) {
      return f = Ke(f, o), f.index = 0, f.sibling = null, f;
    }
    function u(f, o, h) {
      return f.index = h, t ? (h = f.alternate, h !== null ? (h = h.index, h < o ? (f.flags |= 67108866, o) : h) : (f.flags |= 67108866, o)) : (f.flags |= 1048576, o);
    }
    function i(f) {
      return t && f.alternate === null && (f.flags |= 67108866), f;
    }
    function c(f, o, h, y) {
      return o === null || o.tag !== 6 ? (o = lc(h, f.mode, y), o.return = f, o) : (o = n(o, h), o.return = f, o);
    }
    function s(f, o, h, y) {
      var S = h.type;
      return S === ra ? p(f, o, h.props.children, y, h.key) : o !== null && (o.elementType === S || typeof S == "object" && S !== null && S.$$typeof === nl && Ul(S) === o.type) ? (o = n(o, h.props), tn(o, h), o.return = f, o) : (o = Mu(h.type, h.key, h.props, null, f.mode, y), tn(o, h), o.return = f, o);
    }
    function d(f, o, h, y) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = ac(h, f.mode, y), o.return = f, o) : (o = n(o, h.children || []), o.return = f, o);
    }
    function p(f, o, h, y, S) {
      return o === null || o.tag !== 7 ? (o = ql(h, f.mode, y, S), o.return = f, o) : (o = n(o, h), o.return = f, o);
    }
    function r(f, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = lc("" + o, f.mode, h), o.return = f, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case cu:
            return h = Mu(o.type, o.key, o.props, null, f.mode, h), tn(h, o), h.return = f, h;
          case cn:
            return o = ac(o, f.mode, h), o.return = f, o;
          case nl:
            return o = Ul(o), r(f, o, h);
        }
        if (sn(o) || Fa(o)) return o = ql(o, f.mode, h, null), o.return = f, o;
        if (typeof o.then == "function") return r(f, hu(o), h);
        if (o.$$typeof === Qe) return r(f, mu(f, o), h);
        yu(f, o);
      }
      return null;
    }
    function m(f, o, h, y) {
      var S = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return S !== null ? null : c(f, o, "" + h, y);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case cu:
            return h.key === S ? s(f, o, h, y) : null;
          case cn:
            return h.key === S ? d(f, o, h, y) : null;
          case nl:
            return h = Ul(h), m(f, o, h, y);
        }
        if (sn(h) || Fa(h)) return S !== null ? null : p(f, o, h, y, null);
        if (typeof h.then == "function") return m(f, o, hu(h), y);
        if (h.$$typeof === Qe) return m(f, o, mu(f, h), y);
        yu(f, h);
      }
      return null;
    }
    function v(f, o, h, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return f = f.get(h) || null, c(o, f, "" + y, S);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case cu:
            return f = f.get(y.key === null ? h : y.key) || null, s(o, f, y, S);
          case cn:
            return f = f.get(y.key === null ? h : y.key) || null, d(o, f, y, S);
          case nl:
            return y = Ul(y), v(f, o, h, y, S);
        }
        if (sn(y) || Fa(y)) return f = f.get(h) || null, p(o, f, y, S, null);
        if (typeof y.then == "function") return v(f, o, h, hu(y), S);
        if (y.$$typeof === Qe) return v(f, o, h, mu(o, y), S);
        yu(o, y);
      }
      return null;
    }
    function z(f, o, h, y) {
      for (var S = null, A = null, T = o, _ = o = 0, M = null; T !== null && _ < h.length; _++) {
        T.index > _ ? (M = T, T = null) : M = T.sibling;
        var O = m(f, T, h[_], y);
        if (O === null) {
          T === null && (T = M);
          break;
        }
        t && T && O.alternate === null && e(f, T), o = u(O, o, _), A === null ? S = O : A.sibling = O, A = O, T = M;
      }
      if (_ === h.length) return l(f, T), K && Ge(f, _), S;
      if (T === null) {
        for (; _ < h.length; _++) T = r(f, h[_], y), T !== null && (o = u(T, o, _), A === null ? S = T : A.sibling = T, A = T);
        return K && Ge(f, _), S;
      }
      for (T = a(T); _ < h.length; _++) M = v(T, f, _, h[_], y), M !== null && (t && M.alternate !== null && T.delete(M.key === null ? _ : M.key), o = u(M, o, _), A === null ? S = M : A.sibling = M, A = M);
      return t && T.forEach(function(D) {
        return e(f, D);
      }), K && Ge(f, _), S;
    }
    function b(f, o, h, y) {
      if (h == null) throw Error(R(151));
      for (var S = null, A = null, T = o, _ = o = 0, M = null, O = h.next(); T !== null && !O.done; _++, O = h.next()) {
        T.index > _ ? (M = T, T = null) : M = T.sibling;
        var D = m(f, T, O.value, y);
        if (D === null) {
          T === null && (T = M);
          break;
        }
        t && T && D.alternate === null && e(f, T), o = u(D, o, _), A === null ? S = D : A.sibling = D, A = D, T = M;
      }
      if (O.done) return l(f, T), K && Ge(f, _), S;
      if (T === null) {
        for (; !O.done; _++, O = h.next()) O = r(f, O.value, y), O !== null && (o = u(O, o, _), A === null ? S = O : A.sibling = O, A = O);
        return K && Ge(f, _), S;
      }
      for (T = a(T); !O.done; _++, O = h.next()) O = v(T, f, _, O.value, y), O !== null && (t && O.alternate !== null && T.delete(O.key === null ? _ : O.key), o = u(O, o, _), A === null ? S = O : A.sibling = O, A = O);
      return t && T.forEach(function(w) {
        return e(f, w);
      }), K && Ge(f, _), S;
    }
    function g(f, o, h, y) {
      if (typeof h == "object" && h !== null && h.type === ra && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case cu:
            t: {
              for (var S = h.key; o !== null; ) {
                if (o.key === S) {
                  if (S = h.type, S === ra) {
                    if (o.tag === 7) {
                      l(f, o.sibling), y = n(o, h.props.children), y.return = f, f = y;
                      break t;
                    }
                  } else if (o.elementType === S || typeof S == "object" && S !== null && S.$$typeof === nl && Ul(S) === o.type) {
                    l(f, o.sibling), y = n(o, h.props), tn(y, h), y.return = f, f = y;
                    break t;
                  }
                  l(f, o);
                  break;
                } else e(f, o);
                o = o.sibling;
              }
              h.type === ra ? (y = ql(h.props.children, f.mode, y, h.key), y.return = f, f = y) : (y = Mu(h.type, h.key, h.props, null, f.mode, y), tn(y, h), y.return = f, f = y);
            }
            return i(f);
          case cn:
            t: {
              for (S = h.key; o !== null; ) {
                if (o.key === S) if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                  l(f, o.sibling), y = n(o, h.children || []), y.return = f, f = y;
                  break t;
                } else {
                  l(f, o);
                  break;
                }
                else e(f, o);
                o = o.sibling;
              }
              y = ac(h, f.mode, y), y.return = f, f = y;
            }
            return i(f);
          case nl:
            return h = Ul(h), g(f, o, h, y);
        }
        if (sn(h)) return z(f, o, h, y);
        if (Fa(h)) {
          if (S = Fa(h), typeof S != "function") throw Error(R(150));
          return h = S.call(h), b(f, o, h, y);
        }
        if (typeof h.then == "function") return g(f, o, hu(h), y);
        if (h.$$typeof === Qe) return g(f, o, mu(f, h), y);
        yu(f, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (l(f, o.sibling), y = n(o, h), y.return = f, f = y) : (l(f, o), y = lc(h, f.mode, y), y.return = f, f = y), i(f)) : l(f, o);
    }
    return function(f, o, h, y) {
      try {
        Dn = 0;
        var S = g(f, o, h, y);
        return _a = null, S;
      } catch (T) {
        if (T === Qa || T === Ai) throw T;
        var A = Wt(29, T, null, f.mode);
        return A.lanes = y, A.return = f, A;
      } finally {
      }
    };
  }
  var Vl = kd(true), Jd = kd(false), ul = false;
  function er(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
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
  function ts(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function vl(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function gl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, k & 2) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = ku(t), Ld(t, null, l), e;
    }
    return _i(t, a, e, l), ku(t);
  }
  function vn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, dd(t, l);
    }
  }
  function uc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var es = false;
  function gn() {
    if (es) {
      var t = za;
      if (t !== null) throw t;
    }
  }
  function bn(t, e, l, a) {
    es = false;
    var n = t.updateQueue;
    ul = false;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, d = s.next;
      s.next = null, i === null ? u = d : i.next = d, i = s;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = d : c.next = d, p.lastBaseUpdate = s));
    }
    if (u !== null) {
      var r = n.baseState;
      i = 0, p = d = s = null, c = u;
      do {
        var m = c.lane & -536870913, v = m !== c.lane;
        if (v ? (Z & m) === m : (a & m) === m) {
          m !== 0 && m === Oa && (es = true), p !== null && (p = p.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var z = t, b = c;
            m = e;
            var g = l;
            switch (b.tag) {
              case 1:
                if (z = b.payload, typeof z == "function") {
                  r = z.call(g, r, m);
                  break t;
                }
                r = z;
                break t;
              case 3:
                z.flags = z.flags & -65537 | 128;
              case 0:
                if (z = b.payload, m = typeof z == "function" ? z.call(g, r, m) : z, m == null) break t;
                r = rt({}, r, m);
                break t;
              case 2:
                ul = true;
            }
          }
          m = c.callback, m !== null && (t.flags |= 64, v && (t.flags |= 8192), v = n.callbacks, v === null ? n.callbacks = [
            m
          ] : v.push(m));
        } else v = {
          lane: m,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, p === null ? (d = p = v, s = r) : p = p.next = v, i |= m;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          v = c, c = v.next, v.next = null, n.lastBaseUpdate = v, n.shared.pending = null;
        }
      } while (true);
      p === null && (s = r), n.baseState = s, n.firstBaseUpdate = d, n.lastBaseUpdate = p, u === null && (n.shared.lanes = 0), Rl |= i, t.lanes = i, t.memoizedState = r;
    }
  }
  function $d(t, e) {
    if (typeof t != "function") throw Error(R(191, t));
    t.call(e);
  }
  function Wd(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) $d(l[t], e);
  }
  var Da = Oe(null), Fu = Oe(0);
  function Oo(t, e) {
    t = Ie, ut(Fu, t), ut(Da, e), Ie = t | e.baseLanes;
  }
  function ls() {
    ut(Fu, Ie), ut(Da, Da.current);
  }
  function lr() {
    Ie = Fu.current, At(Da), At(Fu);
  }
  var ae = Oe(null), ye = null;
  function cl(t) {
    var e = t.alternate;
    ut(yt, yt.current & 1), ut(ae, t), ye === null && (e === null || Da.current !== null || e.memoizedState !== null) && (ye = t);
  }
  function as(t) {
    ut(yt, yt.current), ut(ae, t), ye === null && (ye = t);
  }
  function Fd(t) {
    t.tag === 22 ? (ut(yt, yt.current), ut(ae, t), ye === null && (ye = t)) : sl();
  }
  function sl() {
    ut(yt, yt.current), ut(ae, ae.current);
  }
  function $t(t) {
    At(ae), ye === t && (ye = null), At(yt);
  }
  var yt = Oe(0);
  function Pu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Es(l) || Ts(l))) return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var We = 0, L = null, et = null, vt = null, Iu = false, Aa = false, Zl = false, ti = 0, wn = 0, Ra = null, rp = 0;
  function mt() {
    throw Error(R(321));
  }
  function ar(t, e) {
    if (e === null) return false;
    for (var l = 0; l < e.length && l < t.length; l++) if (!le(t[l], e[l])) return false;
    return true;
  }
  function nr(t, e, l, a, n, u) {
    return We = u, L = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? Mm : yr, Zl = false, u = l(a, n), Zl = false, Aa && (u = Id(e, l, a, n)), Pd(t), u;
  }
  function Pd(t) {
    H.H = jn;
    var e = et !== null && et.next !== null;
    if (We = 0, vt = et = L = null, Iu = false, wn = 0, Ra = null, e) throw Error(R(300));
    t === null || St || (t = t.dependencies, t !== null && $u(t) && (St = true));
  }
  function Id(t, e, l, a) {
    L = t;
    var n = 0;
    do {
      if (Aa && (Ra = null), wn = 0, Aa = false, 25 <= n) throw Error(R(301));
      if (n += 1, vt = et = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      H.H = Cm, u = e(l, a);
    } while (Aa);
    return u;
  }
  function op() {
    var t = H.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Jn(e) : e, t = t.useState()[0], (et !== null ? et.memoizedState : null) !== t && (L.flags |= 1024), e;
  }
  function ur() {
    var t = ti !== 0;
    return ti = 0, t;
  }
  function ir(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function cr(t) {
    if (Iu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Iu = false;
    }
    We = 0, vt = et = L = null, Aa = false, wn = ti = 0, Ra = null;
  }
  function jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? L.memoizedState = vt = t : vt = vt.next = t, vt;
  }
  function pt() {
    if (et === null) {
      var t = L.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = et.next;
    var e = vt === null ? L.memoizedState : vt.next;
    if (e !== null) vt = e, et = t;
    else {
      if (t === null) throw L.alternate === null ? Error(R(467)) : Error(R(310));
      et = t, t = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null
      }, vt === null ? L.memoizedState = vt = t : vt = vt.next = t;
    }
    return vt;
  }
  function Ri() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Jn(t) {
    var e = wn;
    return wn += 1, Ra === null && (Ra = []), t = Kd(Ra, t, e), e = L, (vt === null ? e.memoizedState : vt.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? Mm : yr), t;
  }
  function Mi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Jn(t);
      if (t.$$typeof === Qe) return Ot(t);
    }
    throw Error(R(438, String(t)));
  }
  function sr(t) {
    var e = null, l = L.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = L.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = {
      data: [],
      index: 0
    }), l === null && (l = Ri(), L.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = $0;
    return e.index++, l;
  }
  function Fe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Nu(t) {
    var e = pt();
    return rr(e, et, t);
  }
  function rr(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(R(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var c = i = null, s = null, d = e, p = false;
      do {
        var r = d.lane & -536870913;
        if (r !== d.lane ? (Z & r) === r : (We & r) === r) {
          var m = d.revertLane;
          if (m === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }), r === Oa && (p = true);
          else if ((We & m) === m) {
            d = d.next, m === Oa && (p = true);
            continue;
          } else r = {
            lane: 0,
            revertLane: d.revertLane,
            gesture: null,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, s === null ? (c = s = r, i = u) : s = s.next = r, L.lanes |= m, Rl |= m;
          r = d.action, Zl && l(u, r), u = d.hasEagerState ? d.eagerState : l(u, r);
        } else m = {
          lane: r,
          revertLane: d.revertLane,
          gesture: d.gesture,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        }, s === null ? (c = s = m, i = u) : s = s.next = m, L.lanes |= r, Rl |= r;
        d = d.next;
      } while (d !== null && d !== e);
      if (s === null ? i = u : s.next = c, !le(u, t.memoizedState) && (St = true, p && (l = za, l !== null))) throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [
      t.memoizedState,
      a.dispatch
    ];
  }
  function ic(t) {
    var e = pt(), l = e.queue;
    if (l === null) throw Error(R(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      le(u, e.memoizedState) || (St = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [
      u,
      a
    ];
  }
  function tm(t, e, l) {
    var a = L, n = pt(), u = K;
    if (u) {
      if (l === void 0) throw Error(R(407));
      l = l();
    } else l = e();
    var i = !le((et || n).memoizedState, l);
    if (i && (n.memoizedState = l, St = true), n = n.queue, or(am.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || vt !== null && vt.memoizedState.tag & 1) {
      if (a.flags |= 2048, wa(9, {
        destroy: void 0
      }, lm.bind(null, a, n, l, e), null), nt === null) throw Error(R(349));
      u || We & 127 || em(a, e, l);
    }
    return l;
  }
  function em(t, e, l) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: l
    }, e = L.updateQueue, e === null ? (e = Ri(), L.updateQueue = e, e.stores = [
      t
    ]) : (l = e.stores, l === null ? e.stores = [
      t
    ] : l.push(t));
  }
  function lm(t, e, l, a) {
    e.value = l, e.getSnapshot = a, nm(e) && um(t);
  }
  function am(t, e, l) {
    return l(function() {
      nm(e) && um(t);
    });
  }
  function nm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !le(t, l);
    } catch {
      return true;
    }
  }
  function um(t) {
    var e = Wl(t, 2);
    e !== null && Qt(e, t, 2);
  }
  function ns(t) {
    var e = jt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Zl) {
        ol(true);
        try {
          l();
        } finally {
          ol(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fe,
      lastRenderedState: t
    }, e;
  }
  function im(t, e, l, a) {
    return t.baseState = l, rr(t, et, typeof a == "function" ? a : Fe);
  }
  function fp(t, e, l, a, n) {
    if (Ni(t)) throw Error(R(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
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
      H.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, cm(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function cm(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = H.T, i = {};
      H.T = i;
      try {
        var c = l(n, a), s = H.S;
        s !== null && s(i, c), Do(t, e, c);
      } catch (d) {
        us(t, e, d);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), H.T = u;
      }
    } else try {
      u = l(n, a), Do(t, e, u);
    } catch (d) {
      us(t, e, d);
    }
  }
  function Do(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      wo(t, e, a);
    }, function(a) {
      return us(t, e, a);
    }) : wo(t, e, l);
  }
  function wo(t, e, l) {
    e.status = "fulfilled", e.value = l, sm(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, cm(t, l)));
  }
  function us(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, sm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function sm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rm(t, e) {
    return e;
  }
  function jo(t, e) {
    if (K) {
      var l = nt.formState;
      if (l !== null) {
        t: {
          var a = L;
          if (K) {
            if (ct) {
              e: {
                for (var n = ct, u = he; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = pe(n.nextSibling), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                ct = pe(n.nextSibling), a = n.data === "F!";
                break t;
              }
            }
            _l(a);
          }
          a = false;
        }
        a && (e = l[0]);
      }
    }
    return l = jt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rm,
      lastRenderedState: e
    }, l.queue = a, l = _m.bind(null, L, a), a.dispatch = l, a = ns(false), u = hr.bind(null, L, false, a.queue), a = jt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = fp.bind(null, L, n, u, l), n.dispatch = l, a.memoizedState = t, [
      e,
      l,
      false
    ];
  }
  function Uo(t) {
    var e = pt();
    return om(e, et, t);
  }
  function om(t, e, l) {
    if (e = rr(t, e, rm)[0], t = Nu(Fe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = Jn(e);
    } catch (i) {
      throw i === Qa ? Ai : i;
    }
    else a = e;
    e = pt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (L.flags |= 2048, wa(9, {
      destroy: void 0
    }, dp.bind(null, n, l), null)), [
      a,
      u,
      t
    ];
  }
  function dp(t, e) {
    t.action = e;
  }
  function Ho(t) {
    var e = pt(), l = et;
    if (l !== null) return om(e, l, t);
    pt(), e = e.memoizedState, l = pt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [
      e,
      a,
      false
    ];
  }
  function wa(t, e, l, a) {
    return t = {
      tag: t,
      create: l,
      deps: a,
      inst: e,
      next: null
    }, e = L.updateQueue, e === null && (e = Ri(), L.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function fm() {
    return pt().memoizedState;
  }
  function Ou(t, e, l, a) {
    var n = jt();
    L.flags |= t, n.memoizedState = wa(1 | e, {
      destroy: void 0
    }, l, a === void 0 ? null : a);
  }
  function Ci(t, e, l, a) {
    var n = pt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    et !== null && a !== null && ar(a, et.memoizedState.deps) ? n.memoizedState = wa(e, u, l, a) : (L.flags |= t, n.memoizedState = wa(1 | e, u, l, a));
  }
  function Bo(t, e) {
    Ou(8390656, 8, t, e);
  }
  function or(t, e) {
    Ci(2048, 8, t, e);
  }
  function mp(t) {
    L.flags |= 4;
    var e = L.updateQueue;
    if (e === null) e = Ri(), L.updateQueue = e, e.events = [
      t
    ];
    else {
      var l = e.events;
      l === null ? e.events = [
        t
      ] : l.push(t);
    }
  }
  function dm(t) {
    var e = pt().memoizedState;
    return mp({
      ref: e,
      nextImpl: t
    }), function() {
      if (k & 2) throw Error(R(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function mm(t, e) {
    return Ci(4, 2, t, e);
  }
  function hm(t, e) {
    return Ci(4, 4, t, e);
  }
  function ym(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function pm(t, e, l) {
    l = l != null ? l.concat([
      t
    ]) : null, Ci(4, 4, ym.bind(null, e, t), l);
  }
  function fr() {
  }
  function vm(t, e) {
    var l = pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && ar(e, a[1]) ? a[0] : (l.memoizedState = [
      t,
      e
    ], t);
  }
  function gm(t, e) {
    var l = pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && ar(e, a[1])) return a[0];
    if (a = t(), Zl) {
      ol(true);
      try {
        t();
      } finally {
        ol(false);
      }
    }
    return l.memoizedState = [
      a,
      e
    ], a;
  }
  function dr(t, e, l) {
    return l === void 0 || We & 1073741824 && !(Z & 261930) ? t.memoizedState = e : (t.memoizedState = l, t = ih(), L.lanes |= t, Rl |= t, l);
  }
  function bm(t, e, l, a) {
    return le(l, e) ? l : Da.current !== null ? (t = dr(t, l, a), le(t, e) || (St = true), t) : !(We & 42) || We & 1073741824 && !(Z & 261930) ? (St = true, t.memoizedState = l) : (t = ih(), L.lanes |= t, Rl |= t, e);
  }
  function Sm(t, e, l, a, n) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var i = H.T, c = {};
    H.T = c, hr(t, false, e, l);
    try {
      var s = n(), d = H.S;
      if (d !== null && d(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var p = sp(s, a);
        Sn(t, e, p, ee(t));
      } else Sn(t, e, a, ee(t));
    } catch (r) {
      Sn(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: r
      }, ee());
    } finally {
      J.p = u, i !== null && c.types !== null && (i.types = c.types), H.T = i;
    }
  }
  function hp() {
  }
  function is(t, e, l, a) {
    if (t.tag !== 5) throw Error(R(476));
    var n = xm(t).queue;
    Sm(t, n, e, Bl, l === null ? hp : function() {
      return Em(t), l(a);
    });
  }
  function xm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Bl,
      baseState: Bl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: Bl
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Em(t) {
    var e = xm(t);
    e.next === null && (e = t.alternate.memoizedState), Sn(t, e.next.queue, {}, ee());
  }
  function mr() {
    return Ot(Bn);
  }
  function Tm() {
    return pt().memoizedState;
  }
  function zm() {
    return pt().memoizedState;
  }
  function yp(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ee();
          t = vl(l);
          var a = gl(e, t, l);
          a !== null && (Qt(a, e, l), vn(a, e, l)), e = {
            cache: Ps()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function pp(t, e, l) {
    var a = ee();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Ni(t) ? Am(e, l) : (l = Js(t, e, l, a), l !== null && (Qt(l, t, a), Rm(l, e, a)));
  }
  function _m(t, e, l) {
    var a = ee();
    Sn(t, e, l, a);
  }
  function Sn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Ni(t)) Am(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var i = e.lastRenderedState, c = u(i, l);
        if (n.hasEagerState = true, n.eagerState = c, le(c, i)) return _i(t, e, n, 0), nt === null && zi(), false;
      } catch {
      } finally {
      }
      if (l = Js(t, e, n, a), l !== null) return Qt(l, t, a), Rm(l, e, a), true;
    }
    return false;
  }
  function hr(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Tr(),
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Ni(t)) {
      if (e) throw Error(R(479));
    } else e = Js(t, l, a, 2), e !== null && Qt(e, t, 2);
  }
  function Ni(t) {
    var e = t.alternate;
    return t === L || e !== null && e === L;
  }
  function Am(t, e) {
    Aa = Iu = true;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Rm(t, e, l) {
    if (l & 4194048) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, dd(t, l);
    }
  }
  var jn = {
    readContext: Ot,
    use: Mi,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useLayoutEffect: mt,
    useInsertionEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useSyncExternalStore: mt,
    useId: mt,
    useHostTransitionStatus: mt,
    useFormState: mt,
    useActionState: mt,
    useOptimistic: mt,
    useMemoCache: mt,
    useCacheRefresh: mt
  };
  jn.useEffectEvent = mt;
  var Mm = {
    readContext: Ot,
    use: Mi,
    useCallback: function(t, e) {
      return jt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Ot,
    useEffect: Bo,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, Ou(4194308, 4, ym.bind(null, e, t), l);
    },
    useLayoutEffect: function(t, e) {
      return Ou(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ou(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = jt();
      e = e === void 0 ? null : e;
      var a = t();
      if (Zl) {
        ol(true);
        try {
          t();
        } finally {
          ol(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    },
    useReducer: function(t, e, l) {
      var a = jt();
      if (l !== void 0) {
        var n = l(e);
        if (Zl) {
          ol(true);
          try {
            l(e);
          } finally {
            ol(false);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = pp.bind(null, L, t), [
        a.memoizedState,
        t
      ];
    },
    useRef: function(t) {
      var e = jt();
      return t = {
        current: t
      }, e.memoizedState = t;
    },
    useState: function(t) {
      t = ns(t);
      var e = t.queue, l = _m.bind(null, L, e);
      return e.dispatch = l, [
        t.memoizedState,
        l
      ];
    },
    useDebugValue: fr,
    useDeferredValue: function(t, e) {
      var l = jt();
      return dr(l, t, e);
    },
    useTransition: function() {
      var t = ns(false);
      return t = Sm.bind(null, L, t.queue, true, false), jt().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = L, n = jt();
      if (K) {
        if (l === void 0) throw Error(R(407));
        l = l();
      } else {
        if (l = e(), nt === null) throw Error(R(349));
        Z & 127 || em(a, e, l);
      }
      n.memoizedState = l;
      var u = {
        value: l,
        getSnapshot: e
      };
      return n.queue = u, Bo(am.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, wa(9, {
        destroy: void 0
      }, lm.bind(null, a, u, l, e), null), l;
    },
    useId: function() {
      var t = jt(), e = nt.identifierPrefix;
      if (K) {
        var l = Re, a = Ae;
        l = (a & ~(1 << 32 - te(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ti++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else l = rp++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: mr,
    useFormState: jo,
    useActionState: jo,
    useOptimistic: function(t) {
      var e = jt();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = hr.bind(null, L, true, l), l.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: sr,
    useCacheRefresh: function() {
      return jt().memoizedState = yp.bind(null, L);
    },
    useEffectEvent: function(t) {
      var e = jt(), l = {
        impl: t
      };
      return e.memoizedState = l, function() {
        if (k & 2) throw Error(R(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, yr = {
    readContext: Ot,
    use: Mi,
    useCallback: vm,
    useContext: Ot,
    useEffect: or,
    useImperativeHandle: pm,
    useInsertionEffect: mm,
    useLayoutEffect: hm,
    useMemo: gm,
    useReducer: Nu,
    useRef: fm,
    useState: function() {
      return Nu(Fe);
    },
    useDebugValue: fr,
    useDeferredValue: function(t, e) {
      var l = pt();
      return bm(l, et.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Nu(Fe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Jn(t),
        e
      ];
    },
    useSyncExternalStore: tm,
    useId: Tm,
    useHostTransitionStatus: mr,
    useFormState: Uo,
    useActionState: Uo,
    useOptimistic: function(t, e) {
      var l = pt();
      return im(l, et, t, e);
    },
    useMemoCache: sr,
    useCacheRefresh: zm
  };
  yr.useEffectEvent = dm;
  var Cm = {
    readContext: Ot,
    use: Mi,
    useCallback: vm,
    useContext: Ot,
    useEffect: or,
    useImperativeHandle: pm,
    useInsertionEffect: mm,
    useLayoutEffect: hm,
    useMemo: gm,
    useReducer: ic,
    useRef: fm,
    useState: function() {
      return ic(Fe);
    },
    useDebugValue: fr,
    useDeferredValue: function(t, e) {
      var l = pt();
      return et === null ? dr(l, t, e) : bm(l, et.memoizedState, t, e);
    },
    useTransition: function() {
      var t = ic(Fe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Jn(t),
        e
      ];
    },
    useSyncExternalStore: tm,
    useId: Tm,
    useHostTransitionStatus: mr,
    useFormState: Ho,
    useActionState: Ho,
    useOptimistic: function(t, e) {
      var l = pt();
      return et !== null ? im(l, et, t, e) : (l.baseState = t, [
        t,
        l.queue.dispatch
      ]);
    },
    useMemoCache: sr,
    useCacheRefresh: zm
  };
  Cm.useEffectEvent = dm;
  function cc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : rt({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var cs = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = ee(), n = vl(a);
      n.payload = e, l != null && (n.callback = l), e = gl(t, n, a), e !== null && (Qt(e, t, a), vn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = ee(), n = vl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = gl(t, n, a), e !== null && (Qt(e, t, a), vn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ee(), a = vl(l);
      a.tag = 2, e != null && (a.callback = e), e = gl(t, a, l), e !== null && (Qt(e, t, l), vn(e, t, l));
    }
  };
  function qo(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Cn(l, a) || !Cn(n, u) : true;
  }
  function Lo(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && cs.enqueueReplaceState(e, e.state, null);
  }
  function Kl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = rt({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Nm(t) {
    Ku(t);
  }
  function Om(t) {
    console.error(t);
  }
  function Dm(t) {
    Ku(t);
  }
  function ei(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, {
        componentStack: e.stack
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Yo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function ss(t, e, l) {
    return l = vl(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function() {
      ei(t, e);
    }, l;
  }
  function wm(t) {
    return t = vl(t), t.tag = 3, t;
  }
  function jm(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Yo(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Yo(e, l, a), typeof n != "function" && (bl === null ? bl = /* @__PURE__ */ new Set([
        this
      ]) : bl.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function vp(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Xa(e, l, n, true), l = ae.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return ye === null ? ii() : l.alternate === null && ht === 0 && (ht = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
              a
            ]) : e.add(a), gc(t, a, n)), false;
          case 22:
            return l.flags |= 65536, a === Wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                a
              ])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
              a
            ]) : l.add(a)), gc(t, a, n)), false;
        }
        throw Error(R(435, l.tag));
      }
      return gc(t, a, n), ii(), false;
    }
    if (K) return e = ae.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== $c && (t = Error(R(422), {
      cause: a
    }), On(me(t, l)))) : (a !== $c && (e = Error(R(423), {
      cause: a
    }), On(me(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = me(a, l), n = ss(t.stateNode, a, n), uc(t, n), ht !== 4 && (ht = 2)), false;
    var u = Error(R(520), {
      cause: a
    });
    if (u = me(u, l), Tn === null ? Tn = [
      u
    ] : Tn.push(u), ht !== 4 && (ht = 2), e === null) return true;
    a = me(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = ss(l.stateNode, a, t), uc(l, t), false;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (bl === null || !bl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = wm(n), jm(n, t, l, a), uc(l, n), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var pr = Error(R(461)), St = false;
  function Mt(t, e, l, a) {
    e.child = t === null ? Jd(e, null, l, a) : Vl(e, t.child, l, a);
  }
  function Go(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Ql(e), a = nr(t, e, l, i, u, n), c = ur(), t !== null && !St ? (ir(t, e, n), Pe(t, e, n)) : (K && c && Ws(e), e.flags |= 1, Mt(t, e, a, n), e.child);
  }
  function Xo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !$s(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Um(t, e, u, a, n)) : (t = Mu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !vr(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Cn, l(i, a) && t.ref === e.ref) return Pe(t, e, n);
    }
    return e.flags |= 1, t = Ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Um(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Cn(u, a) && t.ref === e.ref) if (St = false, e.pendingProps = a = u, vr(t, n)) t.flags & 131072 && (St = true);
      else return e.lanes = t.lanes, Pe(t, e, n);
    }
    return rs(t, e, l, a, n);
  }
  function Hm(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if (e.flags & 128) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return Qo(t, e, u, l, a);
      }
      if (l & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Cu(e, u !== null ? u.cachePool : null), u !== null ? Oo(e, u) : ls(), Fd(e);
      else return a = e.lanes = 536870912, Qo(t, e, u !== null ? u.baseLanes | l : l, l, a);
    } else u !== null ? (Cu(e, u.cachePool), Oo(e, u), sl(), e.memoizedState = null) : (t !== null && Cu(e, null), ls(), sl());
    return Mt(t, e, n, l), e.child;
  }
  function on(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Qo(t, e, l, a, n) {
    var u = Is();
    return u = u === null ? null : {
      parent: bt._currentValue,
      pool: u
    }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Cu(e, null), ls(), Fd(e), t !== null && Xa(t, e, a, true), e.childLanes = n, null;
  }
  function Du(t, e) {
    return e = li({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Vo(t, e, l) {
    return Vl(e, t.child, null, l), t = Du(e, e.pendingProps), t.flags |= 2, $t(e), e.memoizedState = null, t;
  }
  function gp(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (K) {
        if (a.mode === "hidden") return t = Du(e, a), e.lanes = 536870912, on(null, t);
        if (as(e), (t = ct) ? (t = Mh(t, he), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? {
            id: Ae,
            overflow: Re
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Gd(t), l.return = e, e.child = l, Nt = e, ct = null)) : t = null, t === null) throw _l(e);
        return e.lanes = 536870912, null;
      }
      return Du(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (as(e), n) if (e.flags & 256) e.flags &= -257, e = Vo(t, e, l);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(R(558));
      else if (St || Xa(t, e, l, false), n = (l & t.childLanes) !== 0, St || n) {
        if (a = nt, a !== null && (i = md(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Wl(t, i), Qt(a, t, i), pr;
        ii(), e = Vo(t, e, l);
      } else t = u.treeContext, ct = pe(i.nextSibling), Nt = e, K = true, pl = null, he = false, t !== null && Qd(e, t), e = Du(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ke(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(R(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function rs(t, e, l, a, n) {
    return Ql(e), l = nr(t, e, l, a, void 0, n), a = ur(), t !== null && !St ? (ir(t, e, n), Pe(t, e, n)) : (K && a && Ws(e), e.flags |= 1, Mt(t, e, l, n), e.child);
  }
  function Zo(t, e, l, a, n, u) {
    return Ql(e), e.updateQueue = null, l = Id(e, a, l, n), Pd(t), a = ur(), t !== null && !St ? (ir(t, e, u), Pe(t, e, u)) : (K && a && Ws(e), e.flags |= 1, Mt(t, e, l, u), e.child);
  }
  function Ko(t, e, l, a, n) {
    if (Ql(e), e.stateNode === null) {
      var u = va, i = l.contextType;
      typeof i == "object" && i !== null && (u = Ot(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = cs, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, er(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Ot(i) : va, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (cc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && cs.enqueueReplaceState(u, u.state, null), bn(e, a, u, n), gn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, s = Kl(l, c);
      u.props = s;
      var d = u.context, p = l.contextType;
      i = va, typeof p == "object" && p !== null && (i = Ot(p));
      var r = l.getDerivedStateFromProps;
      p = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, p || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || d !== i) && Lo(e, u, a, i), ul = false;
      var m = e.memoizedState;
      u.state = m, bn(e, a, u, n), gn(), d = e.memoizedState, c || m !== d || ul ? (typeof r == "function" && (cc(e, l, r, a), d = e.memoizedState), (s = ul || qo(e, l, s, a, m, d, i)) ? (p || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = d), u.props = a, u.state = d, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
    } else {
      u = e.stateNode, ts(t, e), i = e.memoizedProps, p = Kl(l, i), u.props = p, r = e.pendingProps, m = u.context, d = l.contextType, s = va, typeof d == "object" && d !== null && (s = Ot(d)), c = l.getDerivedStateFromProps, (d = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || m !== s) && Lo(e, u, a, s), ul = false, m = e.memoizedState, u.state = m, bn(e, a, u, n), gn();
      var v = e.memoizedState;
      i !== r || m !== v || ul || t !== null && t.dependencies !== null && $u(t.dependencies) ? (typeof c == "function" && (cc(e, l, c, a), v = e.memoizedState), (p = ul || qo(e, l, p, a, m, v, s) || t !== null && t.dependencies !== null && $u(t.dependencies)) ? (d || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, v, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, v, s)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = v), u.props = a, u.state = v, u.context = s, a = p) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), a = false);
    }
    return u = a, wu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Vl(e, t.child, null, n), e.child = Vl(e, null, l, n)) : Mt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Pe(t, e, n), t;
  }
  function ko(t, e, l, a) {
    return Xl(), e.flags |= 256, Mt(t, e, l, a), e.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rc(t) {
    return {
      baseLanes: t,
      cachePool: Zd()
    };
  }
  function oc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ft), t;
  }
  function Bm(t, e, l) {
    var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (yt.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (K) {
        if (n ? cl(e) : sl(), (t = ct) ? (t = Mh(t, he), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? {
            id: Ae,
            overflow: Re
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Gd(t), l.return = e, e.child = l, Nt = e, ct = null)) : t = null, t === null) throw _l(e);
        return Ts(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (sl(), n = e.mode, c = li({
        mode: "hidden",
        children: c
      }, n), a = ql(a, n, l, null), c.return = e, a.return = e, c.sibling = a, e.child = c, a = e.child, a.memoizedState = rc(l), a.childLanes = oc(t, i, l), e.memoizedState = sc, on(null, a)) : (cl(e), os(e, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) e.flags & 256 ? (cl(e), e.flags &= -257, e = fc(t, e, l)) : e.memoizedState !== null ? (sl(), e.child = t.child, e.flags |= 128, e = null) : (sl(), c = a.fallback, n = e.mode, a = li({
        mode: "visible",
        children: a.children
      }, n), c = ql(c, n, l, null), c.flags |= 2, a.return = e, c.return = e, a.sibling = c, e.child = a, Vl(e, t.child, null, l), a = e.child, a.memoizedState = rc(l), a.childLanes = oc(t, i, l), e.memoizedState = sc, e = on(null, a));
      else if (cl(e), Ts(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var d = i.dgst;
        i = d, a = Error(R(419)), a.stack = "", a.digest = i, On({
          value: a,
          source: null,
          stack: null
        }), e = fc(t, e, l);
      } else if (St || Xa(t, e, l, false), i = (l & t.childLanes) !== 0, St || i) {
        if (i = nt, i !== null && (a = md(i, l), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Wl(t, a), Qt(i, t, a), pr;
        Es(c) || ii(), e = fc(t, e, l);
      } else Es(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = s.treeContext, ct = pe(c.nextSibling), Nt = e, K = true, pl = null, he = false, t !== null && Qd(e, t), e = os(e, a.children), e.flags |= 4096);
      return e;
    }
    return n ? (sl(), c = a.fallback, n = e.mode, s = t.child, d = s.sibling, a = Ke(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, d !== null ? c = Ke(d, c) : (c = ql(c, n, l, null), c.flags |= 2), c.return = e, a.return = e, a.sibling = c, e.child = a, on(null, a), a = e.child, c = t.child.memoizedState, c === null ? c = rc(l) : (n = c.cachePool, n !== null ? (s = bt._currentValue, n = n.parent !== s ? {
      parent: s,
      pool: s
    } : n) : n = Zd(), c = {
      baseLanes: c.baseLanes | l,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = oc(t, i, l), e.memoizedState = sc, on(t.child, a)) : (cl(e), l = t.child, t = l.sibling, l = Ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
      t
    ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function os(t, e) {
    return e = li({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function li(t, e) {
    return t = Wt(22, t, null, e), t.lanes = 0, t;
  }
  function fc(t, e, l) {
    return Vl(e, t.child, null, l), t = os(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Jo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Fc(t.return, e, l);
  }
  function dc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function qm(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = yt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, ut(yt, i), Mt(t, e, a, l), a = K ? Nn : 0, !c && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Jo(t, l, e);
      else if (t.tag === 19) Jo(t, l, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && Pu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), dc(e, false, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Pu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        dc(e, true, l, null, u, a);
        break;
      case "together":
        dc(e, false, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Pe(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Rl |= e.lanes, !(l & e.childLanes)) if (t !== null) {
      if (Xa(t, e, l, false), (l & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(R(153));
    if (e.child !== null) {
      for (t = e.child, l = Ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Ke(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function vr(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && $u(t)));
  }
  function bp(t, e, l) {
    switch (e.tag) {
      case 3:
        Xu(e, e.stateNode.containerInfo), il(e, bt, t.memoizedState.cache), Xl();
        break;
      case 27:
      case 5:
        qc(e);
        break;
      case 4:
        Xu(e, e.stateNode.containerInfo);
        break;
      case 10:
        il(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, as(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (cl(e), e.flags |= 128, null) : l & e.child.childLanes ? Bm(t, e, l) : (cl(e), t = Pe(t, e, l), t !== null ? t.sibling : null);
        cl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Xa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
          if (a) return qm(t, e, l);
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), ut(yt, yt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Hm(t, e, l, e.pendingProps);
      case 24:
        il(e, bt, t.memoizedState.cache);
    }
    return Pe(t, e, l);
  }
  function Lm(t, e, l) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) St = true;
    else {
      if (!vr(t, l) && !(e.flags & 128)) return St = false, bp(t, e, l);
      St = !!(t.flags & 131072);
    }
    else St = false, K && e.flags & 1048576 && Xd(e, Nn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ul(e.elementType), e.type = t, typeof t == "function") $s(t) ? (a = Kl(t, a), e.tag = 1, e = Ko(null, e, t, a, l)) : (e.tag = 0, e = rs(null, e, t, a, l));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Us) {
                e.tag = 11, e = Go(null, e, t, a, l);
                break t;
              } else if (n === Hs) {
                e.tag = 14, e = Xo(null, e, t, a, l);
                break t;
              }
            }
            throw e = Hc(t) || t, Error(R(306, e, ""));
          }
        }
        return e;
      case 0:
        return rs(t, e, e.type, e.pendingProps, l);
      case 1:
        return a = e.type, n = Kl(a, e.pendingProps), Ko(t, e, a, n, l);
      case 3:
        t: {
          if (Xu(e, e.stateNode.containerInfo), t === null) throw Error(R(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, ts(t, e), bn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, il(e, bt, a), a !== u.cache && Pc(e, [
            bt
          ], l, true), gn(), a = i.element, u.isDehydrated) if (u = {
            element: a,
            isDehydrated: false,
            cache: i.cache
          }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
            e = ko(t, e, a, l);
            break t;
          } else if (a !== n) {
            n = me(Error(R(424)), e), On(n), e = ko(t, e, a, l);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (ct = pe(t.firstChild), Nt = e, K = true, pl = null, he = true, l = Jd(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          }
          else {
            if (Xl(), a === n) {
              e = Pe(t, e, l);
              break t;
            }
            Mt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return wu(t, e), t === null ? (l = yf(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : K || (l = e.type, t = e.pendingProps, a = oi(yl.current).createElement(l), a[Ct] = e, a[Vt] = t, Dt(a, l, t), _t(a), e.stateNode = a) : e.memoizedState = yf(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return qc(e), t === null && K && (a = e.stateNode = Ch(e.type, e.pendingProps, yl.current), Nt = e, he = true, n = ct, Cl(e.type) ? (zs = n, ct = pe(a.firstChild)) : ct = n), Mt(t, e, e.pendingProps.children, l), wu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && K && ((n = a = ct) && (a = $p(a, e.type, e.pendingProps, he), a !== null ? (e.stateNode = a, Nt = e, ct = pe(a.firstChild), he = false, n = true) : n = false), n || _l(e)), qc(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, Ss(n, u) ? a = null : i !== null && Ss(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = nr(t, e, op, null, null, l), Bn._currentValue = n), wu(t, e), Mt(t, e, a, l), e.child;
      case 6:
        return t === null && K && ((t = l = ct) && (l = Wp(l, e.pendingProps, he), l !== null ? (e.stateNode = l, Nt = e, ct = null, t = true) : t = false), t || _l(e)), null;
      case 13:
        return Bm(t, e, l);
      case 4:
        return Xu(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Vl(e, null, a, l) : Mt(t, e, a, l), e.child;
      case 11:
        return Go(t, e, e.type, e.pendingProps, l);
      case 7:
        return Mt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Mt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Mt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return a = e.pendingProps, il(e, e.type, a.value), Mt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Ql(e), n = Ot(n), a = a(n), e.flags |= 1, Mt(t, e, a, l), e.child;
      case 14:
        return Xo(t, e, e.type, e.pendingProps, l);
      case 15:
        return Um(t, e, e.type, e.pendingProps, l);
      case 19:
        return qm(t, e, l);
      case 31:
        return gp(t, e, l);
      case 22:
        return Hm(t, e, l, e.pendingProps);
      case 24:
        return Ql(e), a = Ot(bt), t === null ? (n = Is(), n === null && (n = nt, u = Ps(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
          parent: a,
          cache: n
        }, er(e), il(e, bt, n)) : (t.lanes & l && (ts(t, e), bn(e, null, null, l), gn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), il(e, bt, a)) : (a = u.cache, il(e, bt, a), a !== n.cache && Pc(e, [
          bt
        ], l, true))), Mt(t, e, e.pendingProps.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(R(156, e.tag));
  }
  function Be(t) {
    t.flags |= 4;
  }
  function mc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
      else if (rh()) t.flags |= 8192;
      else throw Yl = Wu, tr;
    } else t.flags &= -16777217;
  }
  function $o(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Dh(e)) if (rh()) t.flags |= 8192;
    else throw Yl = Wu, tr;
  }
  function pu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? od() : 536870912, t.lanes |= e, ja |= e);
  }
  function en(t, e) {
    if (!K) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
    }
  }
  function it(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function Sp(t, e, l) {
    var a = e.pendingProps;
    switch (Fs(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(e), null;
      case 1:
        return it(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ke(bt), Ma(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (na(e) ? Be(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, nc())), it(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Be(e), u !== null ? (it(e), $o(e, u)) : (it(e), mc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Be(e), it(e), $o(e, u)) : (it(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Be(e), it(e), mc(e, n, t, a, l)), null;
      case 27:
        if (Qu(e), l = yl.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(R(166));
            return it(e), null;
          }
          t = Ce.current, na(e) ? zo(e) : (t = Ch(n, a, l), e.stateNode = t, Be(e));
        }
        return it(e), null;
      case 5:
        if (Qu(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(R(166));
            return it(e), null;
          }
          if (u = Ce.current, na(e)) zo(e);
          else {
            var i = oi(yl.current);
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
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, {
                      is: a.is
                    }) : i.createElement(n);
                }
            }
            u[Ct] = e, u[Vt] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Dt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = true;
                break t;
              default:
                a = false;
            }
            a && Be(e);
          }
        }
        return it(e), mc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(R(166));
          if (t = yl.current, na(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Nt, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps;
            }
            t[Ct] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || _h(t.nodeValue, l)), t || _l(e, true);
          } else t = oi(t).createTextNode(a), t[Ct] = e, e.stateNode = t;
        }
        return it(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = na(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(R(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(R(557));
              t[Ct] = e;
            } else Xl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), t = false;
          } else l = nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
          if (!t) return e.flags & 256 ? ($t(e), e) : ($t(e), null);
          if (e.flags & 128) throw Error(R(558));
        }
        return it(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = na(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(R(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(R(317));
              n[Ct] = e;
            } else Xl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), n = false;
          } else n = nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
          if (!n) return e.flags & 256 ? ($t(e), e) : ($t(e), null);
        }
        return $t(e), e.flags & 128 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), pu(e, e.updateQueue), it(e), null);
      case 4:
        return Ma(), t === null && zr(e.stateNode.containerInfo), it(e), null;
      case 10:
        return ke(e.type), it(e), null;
      case 19:
        if (At(yt), a = e.memoizedState, a === null) return it(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) en(a, false);
        else {
          if (ht !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = Pu(t), u !== null) {
              for (e.flags |= 128, en(a, false), t = u.updateQueue, e.updateQueue = t, pu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Yd(l, t), l = l.sibling;
              return ut(yt, yt.current & 1 | 2), K && Ge(e, a.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          a.tail !== null && Pt() > ni && (e.flags |= 128, n = true, en(a, false), e.lanes = 4194304);
        }
        else {
          if (!n) if (t = Pu(u), t !== null) {
            if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, pu(e, t), en(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !K) return it(e), null;
          } else 2 * Pt() - a.renderingStartTime > ni && l !== 536870912 && (e.flags |= 128, n = true, en(a, false), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Pt(), t.sibling = null, l = yt.current, ut(yt, n ? l & 1 | 2 : l & 1), K && Ge(e, a.treeForkCount), t) : (it(e), null);
      case 22:
      case 23:
        return $t(e), lr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? l & 536870912 && !(e.flags & 128) && (it(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : it(e), l = e.updateQueue, l !== null && pu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && At(Ll), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ke(bt), it(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(R(156, e.tag));
  }
  function xp(t, e) {
    switch (Fs(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ke(bt), Ma(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Qu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ($t(e), e.alternate === null) throw Error(R(340));
          Xl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if ($t(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(R(340));
          Xl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return At(yt), null;
      case 4:
        return Ma(), null;
      case 10:
        return ke(e.type), null;
      case 22:
      case 23:
        return $t(e), lr(), t !== null && At(Ll), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ke(bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ym(t, e) {
    switch (Fs(e), e.tag) {
      case 3:
        ke(bt), Ma();
        break;
      case 26:
      case 27:
      case 5:
        Qu(e);
        break;
      case 4:
        Ma();
        break;
      case 31:
        e.memoizedState !== null && $t(e);
        break;
      case 13:
        $t(e);
        break;
      case 19:
        At(yt);
        break;
      case 10:
        ke(e.type);
        break;
      case 22:
      case 23:
        $t(e), lr(), t !== null && At(Ll);
        break;
      case 24:
        ke(bt);
    }
  }
  function $n(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (c) {
      I(e, e.return, c);
    }
  }
  function Al(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = e;
              var s = l, d = c;
              try {
                d();
              } catch (p) {
                I(n, s, p);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (p) {
      I(e, e.return, p);
    }
  }
  function Gm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Wd(e, l);
      } catch (a) {
        I(t, t.return, a);
      }
    }
  }
  function Xm(t, e, l) {
    l.props = Kl(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      I(t, e, a);
    }
  }
  function xn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      I(t, e, n);
    }
  }
  function Me(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null) if (typeof a == "function") try {
      a();
    } catch (n) {
      I(t, e, n);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (n) {
      I(t, e, n);
    }
    else l.current = null;
  }
  function Qm(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      I(t, t.return, n);
    }
  }
  function hc(t, e, l) {
    try {
      var a = t.stateNode;
      Qp(a, t.type, l, e), a[Vt] = e;
    } catch (n) {
      I(t, t.return, n);
    }
  }
  function Vm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Cl(t.type) || t.tag === 4;
  }
  function yc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Vm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Cl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fs(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ve));
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (fs(t, e, l), t = t.sibling; t !== null; ) fs(t, e, l), t = t.sibling;
  }
  function ai(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Cl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (ai(t, e, l), t = t.sibling; t !== null; ) ai(t, e, l), t = t.sibling;
  }
  function Zm(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      Dt(e, a, l), e[Ct] = t, e[Vt] = l;
    } catch (u) {
      I(t, t.return, u);
    }
  }
  var Xe = false, gt = false, pc = false, Wo = typeof WeakSet == "function" ? WeakSet : Set, zt = null;
  function Ep(t, e) {
    if (t = t.containerInfo, gs = hi, t = Dd(t), Ks(t)) {
      if ("selectionStart" in t) var l = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var n = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, u.nodeType;
          } catch {
            l = null;
            break t;
          }
          var i = 0, c = -1, s = -1, d = 0, p = 0, r = t, m = null;
          e: for (; ; ) {
            for (var v; r !== l || n !== 0 && r.nodeType !== 3 || (c = i + n), r !== u || a !== 0 && r.nodeType !== 3 || (s = i + a), r.nodeType === 3 && (i += r.nodeValue.length), (v = r.firstChild) !== null; ) m = r, r = v;
            for (; ; ) {
              if (r === t) break e;
              if (m === l && ++d === n && (c = i), m === u && ++p === a && (s = i), (v = r.nextSibling) !== null) break;
              r = m, m = r.parentNode;
            }
            r = v;
          }
          l = c === -1 || s === -1 ? null : {
            start: c,
            end: s
          };
        } else l = null;
      }
      l = l || {
        start: 0,
        end: 0
      };
    } else l = null;
    for (bs = {
      focusedElem: t,
      selectionRange: l
    }, hi = false, zt = e; zt !== null; ) if (e = zt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, zt = t;
    else for (; zt !== null; ) {
      switch (e = zt, u = e.alternate, t = e.flags, e.tag) {
        case 0:
          if (t & 4 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (t & 1024 && u !== null) {
            t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
            try {
              var z = Kl(l.type, n);
              t = a.getSnapshotBeforeUpdate(z, u), a.__reactInternalSnapshotBeforeUpdate = t;
            } catch (b) {
              I(l, l.return, b);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) xs(t);
            else if (l === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                xs(t);
                break;
              default:
                t.textContent = "";
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
          if (t & 1024) throw Error(R(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, zt = t;
        break;
      }
      zt = e.return;
    }
  }
  function Km(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Le(t, l), a & 4 && $n(5, l);
        break;
      case 1:
        if (Le(t, l), a & 4) if (t = l.stateNode, e === null) try {
          t.componentDidMount();
        } catch (i) {
          I(l, l.return, i);
        }
        else {
          var n = Kl(l.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            I(l, l.return, i);
          }
        }
        a & 64 && Gm(l), a & 512 && xn(l, l.return);
        break;
      case 3:
        if (Le(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              e = l.child.stateNode;
              break;
            case 1:
              e = l.child.stateNode;
          }
          try {
            Wd(t, e);
          } catch (i) {
            I(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Zm(l);
      case 26:
      case 5:
        Le(t, l), e === null && a & 4 && Qm(l), a & 512 && xn(l, l.return);
        break;
      case 12:
        Le(t, l);
        break;
      case 31:
        Le(t, l), a & 4 && $m(t, l);
        break;
      case 13:
        Le(t, l), a & 4 && Wm(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Op.bind(null, l), Fp(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Xe, !a) {
          e = e !== null && e.memoizedState !== null || gt, n = Xe;
          var u = gt;
          Xe = a, (gt = e) && !u ? Ye(t, l, (l.subtreeFlags & 8772) !== 0) : Le(t, l), Xe = n, gt = u;
        }
        break;
      case 30:
        break;
      default:
        Le(t, l);
    }
  }
  function km(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, km(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ys(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ft = null, Yt = false;
  function qe(t, e, l) {
    for (l = l.child; l !== null; ) Jm(t, e, l), l = l.sibling;
  }
  function Jm(t, e, l) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(Xn, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        gt || Me(l, e), qe(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        gt || Me(l, e);
        var a = ft, n = Yt;
        Cl(l.type) && (ft = l.stateNode, Yt = false), qe(t, e, l), _n(l.stateNode), ft = a, Yt = n;
        break;
      case 5:
        gt || Me(l, e);
      case 6:
        if (a = ft, n = Yt, ft = null, qe(t, e, l), ft = a, Yt = n, ft !== null) if (Yt) try {
          (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(l.stateNode);
        } catch (u) {
          I(l, e, u);
        }
        else try {
          ft.removeChild(l.stateNode);
        } catch (u) {
          I(l, e, u);
        }
        break;
      case 18:
        ft !== null && (Yt ? (t = ft, of(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), qa(t)) : of(ft, l.stateNode));
        break;
      case 4:
        a = ft, n = Yt, ft = l.stateNode.containerInfo, Yt = true, qe(t, e, l), ft = a, Yt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Al(2, l, e), gt || Al(4, l, e), qe(t, e, l);
        break;
      case 1:
        gt || (Me(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Xm(l, e, a)), qe(t, e, l);
        break;
      case 21:
        qe(t, e, l);
        break;
      case 22:
        gt = (a = gt) || l.memoizedState !== null, qe(t, e, l), gt = a;
        break;
      default:
        qe(t, e, l);
    }
  }
  function $m(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        qa(t);
      } catch (l) {
        I(e, e.return, l);
      }
    }
  }
  function Wm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      qa(t);
    } catch (l) {
      I(e, e.return, l);
    }
  }
  function Tp(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Wo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Wo()), e;
      default:
        throw Error(R(435, t.tag));
    }
  }
  function vu(t, e) {
    var l = Tp(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Dp.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Bt(t, e) {
    var l = e.deletions;
    if (l !== null) for (var a = 0; a < l.length; a++) {
      var n = l[a], u = t, i = e, c = i;
      t: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Cl(c.type)) {
              ft = c.stateNode, Yt = false;
              break t;
            }
            break;
          case 5:
            ft = c.stateNode, Yt = false;
            break t;
          case 3:
          case 4:
            ft = c.stateNode.containerInfo, Yt = true;
            break t;
        }
        c = c.return;
      }
      if (ft === null) throw Error(R(160));
      Jm(u, i, n), ft = null, Yt = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Fm(e, t), e = e.sibling;
  }
  var xe = null;
  function Fm(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Bt(e, t), qt(t), a & 4 && (Al(3, t, t.return), $n(3, t), Al(5, t, t.return));
        break;
      case 1:
        Bt(e, t), qt(t), a & 512 && (gt || l === null || Me(l, l.return)), a & 64 && Xe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = xe;
        if (Bt(e, t), qt(t), a & 512 && (gt || l === null || Me(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
            t: {
              a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
              e: switch (a) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[Zn] || u[Ct] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Dt(u, a, l), u[Ct] = t, _t(u), a = u;
                  break t;
                case "link":
                  var i = vf("link", "href", n).get(a + (l.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), Dt(u, a, l), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = vf("meta", "content", n).get(a + (l.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), Dt(u, a, l), n.head.appendChild(u);
                  break;
                default:
                  throw Error(R(468, a));
              }
              u[Ct] = t, _t(u), a = u;
            }
            t.stateNode = a;
          } else gf(n, t.type, t.stateNode);
          else t.stateNode = pf(n, a, t.memoizedProps);
          else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? gf(n, t.type, t.stateNode) : pf(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && hc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Bt(e, t), qt(t), a & 512 && (gt || l === null || Me(l, l.return)), l !== null && a & 4 && hc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (Bt(e, t), qt(t), a & 512 && (gt || l === null || Me(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Na(n, "");
          } catch (z) {
            I(t, t.return, z);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, hc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (pc = true);
        break;
      case 6:
        if (Bt(e, t), qt(t), a & 4) {
          if (t.stateNode === null) throw Error(R(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (z) {
            I(t, t.return, z);
          }
        }
        break;
      case 3:
        if (Hu = null, n = xe, xe = fi(e.containerInfo), Bt(e, t), xe = n, qt(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          qa(e.containerInfo);
        } catch (z) {
          I(t, t.return, z);
        }
        pc && (pc = false, Pm(t));
        break;
      case 4:
        a = xe, xe = fi(t.stateNode.containerInfo), Bt(e, t), qt(t), xe = a;
        break;
      case 12:
        Bt(e, t), qt(t);
        break;
      case 31:
        Bt(e, t), qt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vu(t, a)));
        break;
      case 13:
        Bt(e, t), qt(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Oi = Pt()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = l !== null && l.memoizedState !== null, d = Xe, p = gt;
        if (Xe = d || n, gt = p || s, Bt(e, t), gt = p, Xe = d, qt(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || s || Xe || gt || Hl(t)), l = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (l === null) {
              s = l = e;
              try {
                if (u = s.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var r = s.memoizedProps.style, m = r != null && r.hasOwnProperty("display") ? r.display : null;
                  c.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                }
              } catch (z) {
                I(s, s.return, z);
              }
            }
          } else if (e.tag === 6) {
            if (l === null) {
              s = e;
              try {
                s.stateNode.nodeValue = n ? "" : s.memoizedProps;
              } catch (z) {
                I(s, s.return, z);
              }
            }
          } else if (e.tag === 18) {
            if (l === null) {
              s = e;
              try {
                var v = s.stateNode;
                n ? ff(v, true) : ff(s.stateNode, false);
              } catch (z) {
                I(s, s.return, z);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            l === e && (l = null), e = e.return;
          }
          l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
        }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, vu(t, l))));
        break;
      case 19:
        Bt(e, t), qt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Bt(e, t), qt(t);
    }
  }
  function qt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Vm(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(R(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = yc(t);
            ai(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (Na(i, ""), l.flags &= -33);
            var c = yc(t);
            ai(t, c, i);
            break;
          case 3:
          case 4:
            var s = l.stateNode.containerInfo, d = yc(t);
            fs(t, d, s);
            break;
          default:
            throw Error(R(161));
        }
      } catch (p) {
        I(t, t.return, p);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Pm(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      Pm(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function Le(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Km(t, e.alternate, e), e = e.sibling;
  }
  function Hl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(4, e, e.return), Hl(e);
          break;
        case 1:
          Me(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Xm(e, e.return, l), Hl(e);
          break;
        case 27:
          _n(e.stateNode);
        case 26:
        case 5:
          Me(e, e.return), Hl(e);
          break;
        case 22:
          e.memoizedState === null && Hl(e);
          break;
        case 30:
          Hl(e);
          break;
        default:
          Hl(e);
      }
      t = t.sibling;
    }
  }
  function Ye(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ye(n, u, l), $n(4, u);
          break;
        case 1:
          if (Ye(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (d) {
            I(a, a.return, d);
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) $d(s[n], c);
            } catch (d) {
              I(a, a.return, d);
            }
          }
          l && i & 64 && Gm(u), xn(u, u.return);
          break;
        case 27:
          Zm(u);
        case 26:
        case 5:
          Ye(n, u, l), l && a === null && i & 4 && Qm(u), xn(u, u.return);
          break;
        case 12:
          Ye(n, u, l);
          break;
        case 31:
          Ye(n, u, l), l && i & 4 && $m(n, u);
          break;
        case 13:
          Ye(n, u, l), l && i & 4 && Wm(n, u);
          break;
        case 22:
          u.memoizedState === null && Ye(n, u, l), xn(u, u.return);
          break;
        case 30:
          break;
        default:
          Ye(n, u, l);
      }
      e = e.sibling;
    }
  }
  function gr(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && kn(l));
  }
  function br(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && kn(t));
  }
  function Se(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Im(t, e, l, a), e = e.sibling;
  }
  function Im(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Se(t, e, l, a), n & 2048 && $n(9, e);
        break;
      case 1:
        Se(t, e, l, a);
        break;
      case 3:
        Se(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && kn(t)));
        break;
      case 12:
        if (n & 2048) {
          Se(t, e, l, a), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (s) {
            I(e, e.return, s);
          }
        } else Se(t, e, l, a);
        break;
      case 31:
        Se(t, e, l, a);
        break;
      case 13:
        Se(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Se(t, e, l, a) : En(t, e) : u._visibility & 2 ? Se(t, e, l, a) : (u._visibility |= 2, ca(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && gr(i, e);
        break;
      case 24:
        Se(t, e, l, a), n & 2048 && br(e.alternate, e);
        break;
      default:
        Se(t, e, l, a);
    }
  }
  function ca(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var u = t, i = e, c = l, s = a, d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ca(u, i, c, s, n), $n(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? ca(u, i, c, s, n) : En(u, i) : (p._visibility |= 2, ca(u, i, c, s, n)), n && d & 2048 && gr(i.alternate, i);
          break;
        case 24:
          ca(u, i, c, s, n), n && d & 2048 && br(i.alternate, i);
          break;
        default:
          ca(u, i, c, s, n);
      }
      e = e.sibling;
    }
  }
  function En(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var l = t, a = e, n = a.flags;
      switch (a.tag) {
        case 22:
          En(l, a), n & 2048 && gr(a.alternate, a);
          break;
        case 24:
          En(l, a), n & 2048 && br(a.alternate, a);
          break;
        default:
          En(l, a);
      }
      e = e.sibling;
    }
  }
  var fn = 8192;
  function ua(t, e, l) {
    if (t.subtreeFlags & fn) for (t = t.child; t !== null; ) th(t, e, l), t = t.sibling;
  }
  function th(t, e, l) {
    switch (t.tag) {
      case 26:
        ua(t, e, l), t.flags & fn && t.memoizedState !== null && rv(l, xe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ua(t, e, l);
        break;
      case 3:
      case 4:
        var a = xe;
        xe = fi(t.stateNode.containerInfo), ua(t, e, l), xe = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = fn, fn = 16777216, ua(t, e, l), fn = a) : ua(t, e, l));
        break;
      default:
        ua(t, e, l);
    }
  }
  function eh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ln(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        zt = a, ah(a, t);
      }
      eh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) lh(t), t = t.sibling;
  }
  function lh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ln(t), t.flags & 2048 && Al(9, t, t.return);
        break;
      case 3:
        ln(t);
        break;
      case 12:
        ln(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ju(t)) : ln(t);
        break;
      default:
        ln(t);
    }
  }
  function ju(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        zt = a, ah(a, t);
      }
      eh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, e, e.return), ju(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, ju(e));
          break;
        default:
          ju(e);
      }
      t = t.sibling;
    }
  }
  function ah(t, e) {
    for (; zt !== null; ) {
      var l = zt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          kn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, zt = a;
      else t: for (l = t; zt !== null; ) {
        a = zt;
        var n = a.sibling, u = a.return;
        if (km(a), a === l) {
          zt = null;
          break t;
        }
        if (n !== null) {
          n.return = u, zt = n;
          break t;
        }
        zt = u;
      }
    }
  }
  var zp = {
    getCacheForType: function(t) {
      var e = Ot(bt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Ot(bt).controller.signal;
    }
  }, _p = typeof WeakMap == "function" ? WeakMap : Map, k = 0, nt = null, V = null, Z = 0, P = 0, Jt = null, dl = false, Va = false, Sr = false, Ie = 0, ht = 0, Rl = 0, Gl = 0, xr = 0, Ft = 0, ja = 0, Tn = null, Gt = null, ds = false, Oi = 0, nh = 0, ni = 1 / 0, ui = null, bl = null, xt = 0, Sl = null, Ua = null, Je = 0, ms = 0, hs = null, uh = null, zn = 0, ys = null;
  function ee() {
    return k & 2 && Z !== 0 ? Z & -Z : H.T !== null ? Tr() : hd();
  }
  function ih() {
    if (Ft === 0) if (!(Z & 536870912) || K) {
      var t = ru;
      ru <<= 1, !(ru & 3932160) && (ru = 262144), Ft = t;
    } else Ft = 536870912;
    return t = ae.current, t !== null && (t.flags |= 32), Ft;
  }
  function Qt(t, e, l) {
    (t === nt && (P === 2 || P === 9) || t.cancelPendingCommit !== null) && (Ha(t, 0), ml(t, Z, Ft, false)), Vn(t, l), (!(k & 2) || t !== nt) && (t === nt && (!(k & 2) && (Gl |= l), ht === 4 && ml(t, Z, Ft, false)), De(t));
  }
  function ch(t, e, l) {
    if (k & 6) throw Error(R(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Qn(t, e), n = a ? Mp(t, e) : vc(t, e, true), u = a;
    do {
      if (n === 0) {
        Va && !a && ml(t, e, 0, false);
        break;
      } else {
        if (l = t.current.alternate, u && !Ap(l)) {
          n = vc(t, e, false), u = false;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
          else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              n = Tn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Ha(c, i).flags |= 256), i = vc(c, i, false), i !== 2) {
                if (Sr && !s) {
                  c.errorRecoveryDisabledLanes |= u, Gl |= u, n = 4;
                  break t;
                }
                u = Gt, Gt = n, u !== null && (Gt === null ? Gt = u : Gt.push.apply(Gt, u));
              }
              n = i;
            }
            if (u = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ha(t, 0), ml(t, e, 0, true);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(R(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ml(a, e, Ft, !dl);
              break t;
            case 2:
              Gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(R(329));
          }
          if ((e & 62914560) === e && (n = Oi + 300 - Pt(), 10 < n)) {
            if (ml(a, e, Ft, !dl), Si(a, 0, true) !== 0) break t;
            Je = e, a.timeoutHandle = Rh(Fo.bind(null, a, l, Gt, ui, ds, e, Ft, Gl, ja, dl, u, "Throttled", -0, 0), n);
            break t;
          }
          Fo(a, l, Gt, ui, ds, e, Ft, Gl, ja, dl, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    De(t);
  }
  function Fo(t, e, l, a, n, u, i, c, s, d, p, r, m, v) {
    if (t.timeoutHandle = -1, r = e.subtreeFlags, r & 8192 || (r & 16785408) === 16785408) {
      r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: Ve
      }, th(e, u, r);
      var z = (u & 62914560) === u ? Oi - Pt() : (u & 4194048) === u ? nh - Pt() : 0;
      if (z = ov(r, z), z !== null) {
        Je = u, t.cancelPendingCommit = z(Io.bind(null, t, e, u, l, a, n, i, c, s, p, r, null, m, v)), ml(t, u, i, !d);
        return;
      }
    }
    Io(t, e, u, l, a, n, i, c, s);
  }
  function Ap(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = n.getSnapshot;
        n = n.value;
        try {
          if (!le(u(), n)) return false;
        } catch {
          return false;
        }
      }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function ml(t, e, l, a) {
    e &= ~xr, e &= ~Gl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - te(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && fd(t, l, e);
  }
  function Di() {
    return k & 6 ? true : (Wn(0), false);
  }
  function Er() {
    if (V !== null) {
      if (P === 0) var t = V.return;
      else t = V, Ze = Fl = null, cr(t), _a = null, Dn = 0, t = V;
      for (; t !== null; ) Ym(t.alternate, t), t = t.return;
      V = null;
    }
  }
  function Ha(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Kp(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Je = 0, Er(), nt = t, V = l = Ke(t.current, null), Z = e, P = 0, Jt = null, dl = false, Va = Qn(t, e), Sr = false, ja = Ft = xr = Gl = Rl = ht = 0, Gt = Tn = null, ds = false, e & 8 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
      var n = 31 - te(a), u = 1 << n;
      e |= t[n], a &= ~u;
    }
    return Ie = e, zi(), l;
  }
  function sh(t, e) {
    L = null, H.H = jn, e === Qa || e === Ai ? (e = Co(), P = 3) : e === tr ? (e = Co(), P = 4) : P = e === pr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Jt = e, V === null && (ht = 1, ei(t, me(e, t.current)));
  }
  function rh() {
    var t = ae.current;
    return t === null ? true : (Z & 4194048) === Z ? ye === null : (Z & 62914560) === Z || Z & 536870912 ? t === ye : false;
  }
  function oh() {
    var t = H.H;
    return H.H = jn, t === null ? jn : t;
  }
  function fh() {
    var t = H.A;
    return H.A = zp, t;
  }
  function ii() {
    ht = 4, dl || (Z & 4194048) !== Z && ae.current !== null || (Va = true), !(Rl & 134217727) && !(Gl & 134217727) || nt === null || ml(nt, Z, Ft, false);
  }
  function vc(t, e, l) {
    var a = k;
    k |= 2;
    var n = oh(), u = fh();
    (nt !== t || Z !== e) && (ui = null, Ha(t, e)), e = false;
    var i = ht;
    t: do
      try {
        if (P !== 0 && V !== null) {
          var c = V, s = Jt;
          switch (P) {
            case 8:
              Er(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ae.current === null && (e = true);
              var d = P;
              if (P = 0, Jt = null, Sa(t, c, s, d), l && Va) {
                i = 0;
                break t;
              }
              break;
            default:
              d = P, P = 0, Jt = null, Sa(t, c, s, d);
          }
        }
        Rp(), i = ht;
        break;
      } catch (p) {
        sh(t, p);
      }
    while (true);
    return e && t.shellSuspendCounter++, Ze = Fl = null, k = a, H.H = n, H.A = u, V === null && (nt = null, Z = 0, zi()), i;
  }
  function Rp() {
    for (; V !== null; ) dh(V);
  }
  function Mp(t, e) {
    var l = k;
    k |= 2;
    var a = oh(), n = fh();
    nt !== t || Z !== e ? (ui = null, ni = Pt() + 500, Ha(t, e)) : Va = Qn(t, e);
    t: do
      try {
        if (P !== 0 && V !== null) {
          e = V;
          var u = Jt;
          e: switch (P) {
            case 1:
              P = 0, Jt = null, Sa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Mo(u)) {
                P = 0, Jt = null, Po(e);
                break;
              }
              e = function() {
                P !== 2 && P !== 9 || nt !== t || (P = 7), De(t);
              }, u.then(e, e);
              break t;
            case 3:
              P = 7;
              break t;
            case 4:
              P = 5;
              break t;
            case 7:
              Mo(u) ? (P = 0, Jt = null, Po(e)) : (P = 0, Jt = null, Sa(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? Dh(i) : c.stateNode.complete) {
                    P = 0, Jt = null;
                    var s = c.sibling;
                    if (s !== null) V = s;
                    else {
                      var d = c.return;
                      d !== null ? (V = d, wi(d)) : V = null;
                    }
                    break e;
                  }
              }
              P = 0, Jt = null, Sa(t, e, u, 5);
              break;
            case 6:
              P = 0, Jt = null, Sa(t, e, u, 6);
              break;
            case 8:
              Er(), ht = 6;
              break t;
            default:
              throw Error(R(462));
          }
        }
        Cp();
        break;
      } catch (p) {
        sh(t, p);
      }
    while (true);
    return Ze = Fl = null, H.H = a, H.A = n, k = l, V !== null ? 0 : (nt = null, Z = 0, zi(), ht);
  }
  function Cp() {
    for (; V !== null && !P0(); ) dh(V);
  }
  function dh(t) {
    var e = Lm(t.alternate, t, Ie);
    t.memoizedProps = t.pendingProps, e === null ? wi(t) : V = e;
  }
  function Po(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Zo(l, e, e.pendingProps, e.type, void 0, Z);
        break;
      case 11:
        e = Zo(l, e, e.pendingProps, e.type.render, e.ref, Z);
        break;
      case 5:
        cr(e);
      default:
        Ym(l, e), e = V = Yd(e, Ie), e = Lm(l, e, Ie);
    }
    t.memoizedProps = t.pendingProps, e === null ? wi(t) : V = e;
  }
  function Sa(t, e, l, a) {
    Ze = Fl = null, cr(e), _a = null, Dn = 0;
    var n = e.return;
    try {
      if (vp(t, n, e, l, Z)) {
        ht = 1, ei(t, me(l, t.current)), V = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw V = n, u;
      ht = 1, ei(t, me(l, t.current)), V = null;
      return;
    }
    e.flags & 32768 ? (K || a === 1 ? t = true : Va || Z & 536870912 ? t = false : (dl = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ae.current, a !== null && a.tag === 13 && (a.flags |= 16384))), mh(e, t)) : wi(e);
  }
  function wi(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        mh(e, dl);
        return;
      }
      t = e.return;
      var l = Sp(e.alternate, e, Ie);
      if (l !== null) {
        V = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        V = e;
        return;
      }
      V = e = t;
    } while (e !== null);
    ht === 0 && (ht = 5);
  }
  function mh(t, e) {
    do {
      var l = xp(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, V = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    ht = 6, V = null;
  }
  function Io(t, e, l, a, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      ji();
    while (xt !== 0);
    if (k & 6) throw Error(R(327));
    if (e !== null) {
      if (e === t.current) throw Error(R(177));
      if (u = e.lanes | e.childLanes, u |= ks, sy(t, l, u, i, c, s), t === nt && (V = nt = null, Z = 0), Ua = e, Sl = t, Je = l, ms = u, hs = n, uh = a, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, wp(Vu, function() {
        return gh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || a) {
        a = H.T, H.T = null, n = J.p, J.p = 2, i = k, k |= 4;
        try {
          Ep(t, e, l);
        } finally {
          k = i, J.p = n, H.T = a;
        }
      }
      xt = 1, hh(), yh(), ph();
    }
  }
  function hh() {
    if (xt === 1) {
      xt = 0;
      var t = Sl, e = Ua, l = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || l) {
        l = H.T, H.T = null;
        var a = J.p;
        J.p = 2;
        var n = k;
        k |= 4;
        try {
          Fm(e, t);
          var u = bs, i = Dd(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Od(c.ownerDocument.documentElement, c)) {
            if (s !== null && Ks(c)) {
              var d = s.start, p = s.end;
              if (p === void 0 && (p = d), "selectionStart" in c) c.selectionStart = d, c.selectionEnd = Math.min(p, c.value.length);
              else {
                var r = c.ownerDocument || document, m = r && r.defaultView || window;
                if (m.getSelection) {
                  var v = m.getSelection(), z = c.textContent.length, b = Math.min(s.start, z), g = s.end === void 0 ? b : Math.min(s.end, z);
                  !v.extend && b > g && (i = g, g = b, b = i);
                  var f = xo(c, b), o = xo(c, g);
                  if (f && o && (v.rangeCount !== 1 || v.anchorNode !== f.node || v.anchorOffset !== f.offset || v.focusNode !== o.node || v.focusOffset !== o.offset)) {
                    var h = r.createRange();
                    h.setStart(f.node, f.offset), v.removeAllRanges(), b > g ? (v.addRange(h), v.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), v.addRange(h));
                  }
                }
              }
            }
            for (r = [], v = c; v = v.parentNode; ) v.nodeType === 1 && r.push({
              element: v,
              left: v.scrollLeft,
              top: v.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < r.length; c++) {
              var y = r[c];
              y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
            }
          }
          hi = !!gs, bs = gs = null;
        } finally {
          k = n, J.p = a, H.T = l;
        }
      }
      t.current = e, xt = 2;
    }
  }
  function yh() {
    if (xt === 2) {
      xt = 0;
      var t = Sl, e = Ua, l = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || l) {
        l = H.T, H.T = null;
        var a = J.p;
        J.p = 2;
        var n = k;
        k |= 4;
        try {
          Km(t, e.alternate, e);
        } finally {
          k = n, J.p = a, H.T = l;
        }
      }
      xt = 3;
    }
  }
  function ph() {
    if (xt === 4 || xt === 3) {
      xt = 0, I0();
      var t = Sl, e = Ua, l = Je, a = uh;
      e.subtreeFlags & 10256 || e.flags & 10256 ? xt = 5 : (xt = 0, Ua = Sl = null, vh(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (bl = null), Ls(l), e = e.stateNode, It && typeof It.onCommitFiberRoot == "function") try {
        It.onCommitFiberRoot(Xn, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        e = H.T, n = J.p, J.p = 2, H.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          H.T = e, J.p = n;
        }
      }
      Je & 3 && ji(), De(t), n = t.pendingLanes, l & 261930 && n & 42 ? t === ys ? zn++ : (zn = 0, ys = t) : zn = 0, Wn(0);
    }
  }
  function vh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, kn(e)));
  }
  function ji() {
    return hh(), yh(), ph(), gh();
  }
  function gh() {
    if (xt !== 5) return false;
    var t = Sl, e = ms;
    ms = 0;
    var l = Ls(Je), a = H.T, n = J.p;
    try {
      J.p = 32 > l ? 32 : l, H.T = null, l = hs, hs = null;
      var u = Sl, i = Je;
      if (xt = 0, Ua = Sl = null, Je = 0, k & 6) throw Error(R(331));
      var c = k;
      if (k |= 4, lh(u.current), Im(u, u.current, i, l), k = c, Wn(0, false), It && typeof It.onPostCommitFiberRoot == "function") try {
        It.onPostCommitFiberRoot(Xn, u);
      } catch {
      }
      return true;
    } finally {
      J.p = n, H.T = a, vh(t, e);
    }
  }
  function tf(t, e, l) {
    e = me(l, e), e = ss(t.stateNode, e, 2), t = gl(t, e, 2), t !== null && (Vn(t, 2), De(t));
  }
  function I(t, e, l) {
    if (t.tag === 3) tf(t, t, l);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        tf(e, t, l);
        break;
      } else if (e.tag === 1) {
        var a = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (bl === null || !bl.has(a))) {
          t = me(l, t), l = wm(2), a = gl(e, l, 2), a !== null && (jm(l, a, e, t), Vn(a, 2), De(a));
          break;
        }
      }
      e = e.return;
    }
  }
  function gc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new _p();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Sr = true, n.add(l), t = Np.bind(null, t, e, l), e.then(t, t));
  }
  function Np(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, nt === t && (Z & l) === l && (ht === 4 || ht === 3 && (Z & 62914560) === Z && 300 > Pt() - Oi ? !(k & 2) && Ha(t, 0) : xr |= l, ja === Z && (ja = 0)), De(t);
  }
  function bh(t, e) {
    e === 0 && (e = od()), t = Wl(t, e), t !== null && (Vn(t, e), De(t));
  }
  function Op(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), bh(t, l);
  }
  function Dp(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(R(314));
    }
    a !== null && a.delete(e), bh(t, l);
  }
  function wp(t, e) {
    return Bs(t, e);
  }
  var ci = null, sa = null, ps = false, si = false, bc = false, hl = 0;
  function De(t) {
    t !== sa && t.next === null && (sa === null ? ci = sa = t : sa = sa.next = t), si = true, ps || (ps = true, Up());
  }
  function Wn(t, e) {
    if (!bc && si) {
      bc = true;
      do
        for (var l = false, a = ci; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - te(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = true, ef(a, u));
          } else u = Z, u = Si(a, a === nt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), !(u & 3) || Qn(a, u) || (l = true, ef(a, u));
          a = a.next;
        }
      while (l);
      bc = false;
    }
  }
  function jp() {
    Sh();
  }
  function Sh() {
    si = ps = false;
    var t = 0;
    hl !== 0 && Zp() && (t = hl);
    for (var e = Pt(), l = null, a = ci; a !== null; ) {
      var n = a.next, u = xh(a, e);
      u === 0 ? (a.next = null, l === null ? ci = n : l.next = n, n === null && (sa = l)) : (l = a, (t !== 0 || u & 3) && (si = true)), a = n;
    }
    xt !== 0 && xt !== 5 || Wn(t), hl !== 0 && (hl = 0);
  }
  function xh(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - te(u), c = 1 << i, s = n[i];
      s === -1 ? (!(c & l) || c & a) && (n[i] = cy(c, e)) : s <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = nt, l = Z, l = Si(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (P === 2 || P === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && ki(a), t.callbackNode = null, t.callbackPriority = 0;
    if (!(l & 3) || Qn(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && ki(a), Ls(l)) {
        case 2:
        case 8:
          l = sd;
          break;
        case 32:
          l = Vu;
          break;
        case 268435456:
          l = rd;
          break;
        default:
          l = Vu;
      }
      return a = Eh.bind(null, t), l = Bs(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && ki(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Eh(t, e) {
    if (xt !== 0 && xt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ji() && t.callbackNode !== l) return null;
    var a = Z;
    return a = Si(t, t === nt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (ch(t, a, e), xh(t, Pt()), t.callbackNode != null && t.callbackNode === l ? Eh.bind(null, t) : null);
  }
  function ef(t, e) {
    if (ji()) return null;
    ch(t, e, true);
  }
  function Up() {
    kp(function() {
      k & 6 ? Bs(cd, jp) : Sh();
    });
  }
  function Tr() {
    if (hl === 0) {
      var t = Oa;
      t === 0 && (t = su, su <<= 1, !(su & 261888) && (su = 256)), hl = t;
    }
    return hl;
  }
  function lf(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _u("" + t);
  }
  function af(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Hp(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = lf((n[Vt] || null).action), i = a.submitter;
      i && (e = (e = i[Vt] || null) ? lf(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new xi("action", "action", null, a, n);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (hl !== 0) {
                  var s = i ? af(n, i) : new FormData(n);
                  is(l, {
                    pending: true,
                    data: s,
                    method: n.method,
                    action: u
                  }, null, s);
                }
              } else typeof u == "function" && (c.preventDefault(), s = i ? af(n, i) : new FormData(n), is(l, {
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
  for (var Sc = 0; Sc < Jc.length; Sc++) {
    var xc = Jc[Sc], Bp = xc.toLowerCase(), qp = xc[0].toUpperCase() + xc.slice(1);
    Te(Bp, "on" + qp);
  }
  Te(jd, "onAnimationEnd");
  Te(Ud, "onAnimationIteration");
  Te(Hd, "onAnimationStart");
  Te("dblclick", "onDoubleClick");
  Te("focusin", "onFocus");
  Te("focusout", "onBlur");
  Te(tp, "onTransitionRun");
  Te(ep, "onTransitionStart");
  Te(lp, "onTransitionCancel");
  Te(Bd, "onTransitionEnd");
  Ca("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Ca("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Ca("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Ca("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  kl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  kl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  kl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  kl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  kl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  kl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un));
  function Th(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e) for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i], s = c.instance, d = c.currentTarget;
          if (c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = d;
          try {
            u(n);
          } catch (p) {
            Ku(p);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < a.length; i++) {
          if (c = a[i], s = c.instance, d = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = d;
          try {
            u(n);
          } catch (p) {
            Ku(p);
          }
          n.currentTarget = null, u = s;
        }
      }
    }
  }
  function Q(t, e) {
    var l = e[Yc];
    l === void 0 && (l = e[Yc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (zh(e, t, 2, false), l.add(a));
  }
  function Ec(t, e, l) {
    var a = 0;
    e && (a |= 4), zh(l, t, a, e);
  }
  var gu = "_reactListening" + Math.random().toString(36).slice(2);
  function zr(t) {
    if (!t[gu]) {
      t[gu] = true, yd.forEach(function(l) {
        l !== "selectionchange" && (Lp.has(l) || Ec(l, false, t), Ec(l, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[gu] || (e[gu] = true, Ec("selectionchange", false, e));
    }
  }
  function zh(t, e, l, a) {
    switch (Bh(e)) {
      case 2:
        var n = mv;
        break;
      case 8:
        n = hv;
        break;
      default:
        n = Mr;
    }
    l = n.bind(null, e, l, t), n = void 0, !Zc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: true,
      passive: n
    }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, false);
  }
  function Tc(t, e, l, a, n) {
    var u = a;
    if (!(e & 1) && !(e & 2) && a !== null) t: for (; ; ) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4) for (i = a.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = fa(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            a = u = i;
            continue t;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    Td(function() {
      var d = u, p = Xs(l), r = [];
      t: {
        var m = qd.get(t);
        if (m !== void 0) {
          var v = xi, z = t;
          switch (t) {
            case "keypress":
              if (Ru(l) === 0) break t;
            case "keydown":
            case "keyup":
              v = Dy;
              break;
            case "focusin":
              z = "focus", v = Pi;
              break;
            case "focusout":
              z = "blur", v = Pi;
              break;
            case "beforeblur":
            case "afterblur":
              v = Pi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = oo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Sy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = Uy;
              break;
            case jd:
            case Ud:
            case Hd:
              v = Ty;
              break;
            case Bd:
              v = By;
              break;
            case "scroll":
            case "scrollend":
              v = gy;
              break;
            case "wheel":
              v = Ly;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = _y;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = mo;
              break;
            case "toggle":
            case "beforetoggle":
              v = Gy;
          }
          var b = (e & 4) !== 0, g = !b && (t === "scroll" || t === "scrollend"), f = b ? m !== null ? m + "Capture" : null : m;
          b = [];
          for (var o = d, h; o !== null; ) {
            var y = o;
            if (h = y.stateNode, y = y.tag, y !== 5 && y !== 26 && y !== 27 || h === null || f === null || (y = Rn(o, f), y != null && b.push(Hn(o, y, h))), g) break;
            o = o.return;
          }
          0 < b.length && (m = new v(m, z, null, l, p), r.push({
            event: m,
            listeners: b
          }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (m = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", m && l !== Vc && (z = l.relatedTarget || l.fromElement) && (fa(z) || z[Ya])) break t;
          if ((v || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (z = l.relatedTarget || l.toElement, v = d, z = z ? fa(z) : null, z !== null && (g = Gn(z), b = z.tag, z !== g || b !== 5 && b !== 27 && b !== 6) && (z = null)) : (v = null, z = d), v !== z)) {
            if (b = oo, y = "onMouseLeave", f = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (b = mo, y = "onPointerLeave", f = "onPointerEnter", o = "pointer"), g = v == null ? m : rn(v), h = z == null ? m : rn(z), m = new b(y, o + "leave", v, l, p), m.target = g, m.relatedTarget = h, y = null, fa(p) === d && (b = new b(f, o + "enter", z, l, p), b.target = h, b.relatedTarget = g, y = b), g = y, v && z) e: {
              for (b = Yp, f = v, o = z, h = 0, y = f; y; y = b(y)) h++;
              y = 0;
              for (var S = o; S; S = b(S)) y++;
              for (; 0 < h - y; ) f = b(f), h--;
              for (; 0 < y - h; ) o = b(o), y--;
              for (; h--; ) {
                if (f === o || o !== null && f === o.alternate) {
                  b = f;
                  break e;
                }
                f = b(f), o = b(o);
              }
              b = null;
            }
            else b = null;
            v !== null && nf(r, m, v, b, false), z !== null && g !== null && nf(r, g, z, b, true);
          }
        }
        t: {
          if (m = d ? rn(d) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var A = vo;
          else if (po(m)) if (Cd) A = Fy;
          else {
            A = $y;
            var T = Jy;
          }
          else v = m.nodeName, !v || v.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? d && Gs(d.elementType) && (A = vo) : A = Wy;
          if (A && (A = A(t, d))) {
            Md(r, A, l, p);
            break t;
          }
          T && T(t, m, d), t === "focusout" && d && m.type === "number" && d.memoizedProps.value != null && Qc(m, "number", m.value);
        }
        switch (T = d ? rn(d) : window, t) {
          case "focusin":
            (po(T) || T.contentEditable === "true") && (ha = T, Kc = d, yn = null);
            break;
          case "focusout":
            yn = Kc = ha = null;
            break;
          case "mousedown":
            kc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kc = false, Eo(r, l, p);
            break;
          case "selectionchange":
            if (Iy) break;
          case "keydown":
          case "keyup":
            Eo(r, l, p);
        }
        var _;
        if (Zs) t: {
          switch (t) {
            case "compositionstart":
              var M = "onCompositionStart";
              break t;
            case "compositionend":
              M = "onCompositionEnd";
              break t;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break t;
          }
          M = void 0;
        }
        else ma ? Ad(t, l) && (M = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (M = "onCompositionStart");
        M && (_d && l.locale !== "ko" && (ma || M !== "onCompositionStart" ? M === "onCompositionEnd" && ma && (_ = zd()) : (fl = p, Qs = "value" in fl ? fl.value : fl.textContent, ma = true)), T = ri(d, M), 0 < T.length && (M = new fo(M, t, null, l, p), r.push({
          event: M,
          listeners: T
        }), _ ? M.data = _ : (_ = Rd(l), _ !== null && (M.data = _)))), (_ = Qy ? Vy(t, l) : Zy(t, l)) && (M = ri(d, "onBeforeInput"), 0 < M.length && (T = new fo("onBeforeInput", "beforeinput", null, l, p), r.push({
          event: T,
          listeners: M
        }), T.data = _)), Hp(r, t, d, l, p);
      }
      Th(r, e);
    });
  }
  function Hn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ri(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Rn(t, l), n != null && a.unshift(Hn(t, n, u)), n = Rn(t, e), n != null && a.push(Hn(t, n, u))), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Yp(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function nf(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var c = l, s = c.alternate, d = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (s = d, n ? (d = Rn(l, u), d != null && i.unshift(Hn(l, d, s))) : n || (d = Rn(l, u), d != null && i.push(Hn(l, d, s)))), l = l.return;
    }
    i.length !== 0 && t.push({
      event: e,
      listeners: i
    });
  }
  var Gp = /\r\n?/g, Xp = /\u0000|\uFFFD/g;
  function uf(t) {
    return (typeof t == "string" ? t : "" + t).replace(Gp, `
`).replace(Xp, "");
  }
  function _h(t, e) {
    return e = uf(e), uf(t) === e;
  }
  function tt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Na(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Na(t, "" + a);
        break;
      case "className":
        fu(t, "class", a);
        break;
      case "tabIndex":
        fu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fu(t, l, a);
        break;
      case "style":
        Ed(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          fu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = _u("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (l === "formAction" ? (e !== "input" && tt(t, e, "name", n.name, n, null), tt(t, e, "formEncType", n.formEncType, n, null), tt(t, e, "formMethod", n.formMethod, n, null), tt(t, e, "formTarget", n.formTarget, n, null)) : (tt(t, e, "encType", n.encType, n, null), tt(t, e, "method", n.method, n, null), tt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = _u("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ve);
        break;
      case "onScroll":
        a != null && Q("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Q("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(R(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(R(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = _u("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === true ? t.setAttribute(l, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        Q("beforetoggle", t), Q("toggle", t), zu(t, "popover", a);
        break;
      case "xlinkActuate":
        He(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        He(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        He(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        He(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        He(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        He(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        zu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = py.get(l) || l, zu(t, l, a));
    }
  }
  function vs(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        Ed(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(R(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(R(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Na(t, a) : (typeof a == "number" || typeof a == "bigint") && Na(t, "" + a);
        break;
      case "onScroll":
        a != null && Q("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Q("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ve);
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
        if (!pd.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Vt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
            break t;
          }
          l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : zu(t, l, a);
        }
    }
  }
  function Dt(t, e, l) {
    switch (e) {
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
        Q("error", t), Q("load", t);
        var a = false, n = false, u;
        for (u in l) if (l.hasOwnProperty(u)) {
          var i = l[u];
          if (i != null) switch (u) {
            case "src":
              a = true;
              break;
            case "srcSet":
              n = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(R(137, e));
            default:
              tt(t, e, u, i, l, null);
          }
        }
        n && tt(t, e, "srcSet", l.srcSet, l, null), a && tt(t, e, "src", l.src, l, null);
        return;
      case "input":
        Q("invalid", t);
        var c = u = i = n = null, s = null, d = null;
        for (a in l) if (l.hasOwnProperty(a)) {
          var p = l[a];
          if (p != null) switch (a) {
            case "name":
              n = p;
              break;
            case "type":
              i = p;
              break;
            case "checked":
              s = p;
              break;
            case "defaultChecked":
              d = p;
              break;
            case "value":
              u = p;
              break;
            case "defaultValue":
              c = p;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (p != null) throw Error(R(137, e));
              break;
            default:
              tt(t, e, a, p, l, null);
          }
        }
        bd(t, u, c, s, d, i, n, false);
        return;
      case "select":
        Q("invalid", t), a = i = u = null;
        for (n in l) if (l.hasOwnProperty(n) && (c = l[n], c != null)) switch (n) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            a = c;
          default:
            tt(t, e, n, c, l, null);
        }
        e = u, l = i, t.multiple = !!a, e != null ? Ea(t, !!a, e, false) : l != null && Ea(t, !!a, l, true);
        return;
      case "textarea":
        Q("invalid", t), u = n = a = null;
        for (i in l) if (l.hasOwnProperty(i) && (c = l[i], c != null)) switch (i) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            n = c;
            break;
          case "children":
            u = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(R(91));
            break;
          default:
            tt(t, e, i, c, l, null);
        }
        xd(t, a, n, u);
        return;
      case "option":
        for (s in l) if (l.hasOwnProperty(s) && (a = l[s], a != null)) switch (s) {
          case "selected":
            t.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            tt(t, e, s, a, l, null);
        }
        return;
      case "dialog":
        Q("beforetoggle", t), Q("toggle", t), Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Un.length; a++) Q(Un[a], t);
        break;
      case "image":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", t), Q("load", t);
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
        for (d in l) if (l.hasOwnProperty(d) && (a = l[d], a != null)) switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(R(137, e));
          default:
            tt(t, e, d, a, l, null);
        }
        return;
      default:
        if (Gs(e)) {
          for (p in l) l.hasOwnProperty(p) && (a = l[p], a !== void 0 && vs(t, e, p, a, l, void 0));
          return;
        }
    }
    for (c in l) l.hasOwnProperty(c) && (a = l[c], a != null && tt(t, e, c, a, l, null));
  }
  function Qp(t, e, l, a) {
    switch (e) {
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
        var n = null, u = null, i = null, c = null, s = null, d = null, p = null;
        for (v in l) {
          var r = l[v];
          if (l.hasOwnProperty(v) && r != null) switch (v) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = r;
            default:
              a.hasOwnProperty(v) || tt(t, e, v, null, a, r);
          }
        }
        for (var m in a) {
          var v = a[m];
          if (r = l[m], a.hasOwnProperty(m) && (v != null || r != null)) switch (m) {
            case "type":
              u = v;
              break;
            case "name":
              n = v;
              break;
            case "checked":
              d = v;
              break;
            case "defaultChecked":
              p = v;
              break;
            case "value":
              i = v;
              break;
            case "defaultValue":
              c = v;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (v != null) throw Error(R(137, e));
              break;
            default:
              v !== r && tt(t, e, m, v, a, r);
          }
        }
        Xc(t, i, c, s, d, p, u, n);
        return;
      case "select":
        v = i = c = m = null;
        for (u in l) if (s = l[u], l.hasOwnProperty(u) && s != null) switch (u) {
          case "value":
            break;
          case "multiple":
            v = s;
          default:
            a.hasOwnProperty(u) || tt(t, e, u, null, a, s);
        }
        for (n in a) if (u = a[n], s = l[n], a.hasOwnProperty(n) && (u != null || s != null)) switch (n) {
          case "value":
            m = u;
            break;
          case "defaultValue":
            c = u;
            break;
          case "multiple":
            i = u;
          default:
            u !== s && tt(t, e, n, u, a, s);
        }
        e = c, l = i, a = v, m != null ? Ea(t, !!l, m, false) : !!a != !!l && (e != null ? Ea(t, !!l, e, true) : Ea(t, !!l, l ? [] : "", false));
        return;
      case "textarea":
        v = m = null;
        for (c in l) if (n = l[c], l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            tt(t, e, c, null, a, n);
        }
        for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            m = n;
            break;
          case "defaultValue":
            v = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(R(91));
            break;
          default:
            n !== u && tt(t, e, i, n, a, u);
        }
        Sd(t, m, v);
        return;
      case "option":
        for (var z in l) if (m = l[z], l.hasOwnProperty(z) && m != null && !a.hasOwnProperty(z)) switch (z) {
          case "selected":
            t.selected = false;
            break;
          default:
            tt(t, e, z, null, a, m);
        }
        for (s in a) if (m = a[s], v = l[s], a.hasOwnProperty(s) && m !== v && (m != null || v != null)) switch (s) {
          case "selected":
            t.selected = m && typeof m != "function" && typeof m != "symbol";
            break;
          default:
            tt(t, e, s, m, a, v);
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
        for (var b in l) m = l[b], l.hasOwnProperty(b) && m != null && !a.hasOwnProperty(b) && tt(t, e, b, null, a, m);
        for (d in a) if (m = a[d], v = l[d], a.hasOwnProperty(d) && m !== v && (m != null || v != null)) switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (m != null) throw Error(R(137, e));
            break;
          default:
            tt(t, e, d, m, a, v);
        }
        return;
      default:
        if (Gs(e)) {
          for (var g in l) m = l[g], l.hasOwnProperty(g) && m !== void 0 && !a.hasOwnProperty(g) && vs(t, e, g, void 0, a, m);
          for (p in a) m = a[p], v = l[p], !a.hasOwnProperty(p) || m === v || m === void 0 && v === void 0 || vs(t, e, p, m, a, v);
          return;
        }
    }
    for (var f in l) m = l[f], l.hasOwnProperty(f) && m != null && !a.hasOwnProperty(f) && tt(t, e, f, null, a, m);
    for (r in a) m = a[r], v = l[r], !a.hasOwnProperty(r) || m === v || m == null && v == null || tt(t, e, r, m, a, v);
  }
  function cf(t) {
    switch (t) {
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
  function Vp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && cf(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
            var s = l[a], d = s.startTime;
            if (d > c) break;
            var p = s.transferSize, r = s.initiatorType;
            p && cf(r) && (s = s.responseEnd, i += p * (s < c ? 1 : (c - d) / (s - d)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var gs = null, bs = null;
  function oi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sf(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ah(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ss(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var zc = null;
  function Zp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === zc ? false : (zc = t, true) : (zc = null, false);
  }
  var Rh = typeof setTimeout == "function" ? setTimeout : void 0, Kp = typeof clearTimeout == "function" ? clearTimeout : void 0, rf = typeof Promise == "function" ? Promise : void 0, kp = typeof queueMicrotask == "function" ? queueMicrotask : typeof rf < "u" ? function(t) {
    return rf.resolve(null).then(t).catch(Jp);
  } : Rh;
  function Jp(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cl(t) {
    return t === "head";
  }
  function of(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
        if (a === 0) {
          t.removeChild(n), qa(e);
          return;
        }
        a--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
      else if (l === "html") _n(t.ownerDocument.documentElement);
      else if (l === "head") {
        l = t.ownerDocument.head, _n(l);
        for (var u = l.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[Zn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
        }
      } else l === "body" && _n(t.ownerDocument.body);
      l = n;
    } while (l);
    qa(e);
  }
  function ff(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
        if (t === 0) break;
        t--;
      } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function xs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xs(l), Ys(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function $p(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Zn]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (t = pe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Wp(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = pe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Mh(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = pe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Es(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ts(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Fp(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function pe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var zs = null;
  function df(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return pe(t.nextSibling);
          e--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function mf(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Ch(t, e, l) {
    switch (e = oi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(R(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(R(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(R(454));
        return t;
      default:
        throw Error(R(451));
    }
  }
  function _n(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Ys(t);
  }
  var ve = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
  function fi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var el = J.d;
  J.d = {
    f: Pp,
    r: Ip,
    D: tv,
    C: ev,
    L: lv,
    m: av,
    X: uv,
    S: nv,
    M: iv
  };
  function Pp() {
    var t = el.f(), e = Di();
    return t || e;
  }
  function Ip(t) {
    var e = Ga(t);
    e !== null && e.tag === 5 && e.type === "form" ? Em(e) : el.r(t);
  }
  var Za = typeof document > "u" ? null : document;
  function Nh(t, e, l) {
    var a = Za;
    if (a && typeof e == "string" && e) {
      var n = de(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), hf.has(n) || (hf.add(n), t = {
        rel: t,
        crossOrigin: l,
        href: e
      }, a.querySelector(n) === null && (e = a.createElement("link"), Dt(e, "link", t), _t(e), a.head.appendChild(e)));
    }
  }
  function tv(t) {
    el.D(t), Nh("dns-prefetch", t, null);
  }
  function ev(t, e) {
    el.C(t, e), Nh("preconnect", t, e);
  }
  function lv(t, e, l) {
    el.L(t, e, l);
    var a = Za;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + de(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + de(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + de(l.imageSizes) + '"]')) : n += '[href="' + de(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Ba(t);
          break;
        case "script":
          u = Ka(t);
      }
      ve.has(u) || (t = rt({
        rel: "preload",
        href: e === "image" && l && l.imageSrcSet ? void 0 : t,
        as: e
      }, l), ve.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Fn(u)) || e === "script" && a.querySelector(Pn(u)) || (e = a.createElement("link"), Dt(e, "link", t), _t(e), a.head.appendChild(e)));
    }
  }
  function av(t, e) {
    el.m(t, e);
    var l = Za;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + de(a) + '"][href="' + de(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ka(t);
      }
      if (!ve.has(u) && (t = rt({
        rel: "modulepreload",
        href: t
      }, e), ve.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Pn(u))) return;
        }
        a = l.createElement("link"), Dt(a, "link", t), _t(a), l.head.appendChild(a);
      }
    }
  }
  function nv(t, e, l) {
    el.S(t, e, l);
    var a = Za;
    if (a && t) {
      var n = xa(a).hoistableStyles, u = Ba(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(Fn(u))) c.loading = 5;
        else {
          t = rt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, l), (l = ve.get(u)) && _r(t, l);
          var s = i = a.createElement("link");
          _t(s), Dt(s, "link", t), s._p = new Promise(function(d, p) {
            s.onload = d, s.onerror = p;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Uu(i, e, a);
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
  function uv(t, e) {
    el.X(t, e);
    var l = Za;
    if (l && t) {
      var a = xa(l).hoistableScripts, n = Ka(t), u = a.get(n);
      u || (u = l.querySelector(Pn(n)), u || (t = rt({
        src: t,
        async: true
      }, e), (e = ve.get(n)) && Ar(t, e), u = l.createElement("script"), _t(u), Dt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function iv(t, e) {
    el.M(t, e);
    var l = Za;
    if (l && t) {
      var a = xa(l).hoistableScripts, n = Ka(t), u = a.get(n);
      u || (u = l.querySelector(Pn(n)), u || (t = rt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = ve.get(n)) && Ar(t, e), u = l.createElement("script"), _t(u), Dt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function yf(t, e, l, a) {
    var n = (n = yl.current) ? fi(n) : null;
    if (!n) throw Error(R(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ba(l.href), l = xa(n).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ba(l.href);
          var u = xa(n).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(t, i), (u = n.querySelector(Fn(t))) && !u._p && (i.instance = u, i.state.loading = 5), ve.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ve.set(t, l), u || cv(n, t, l, i.state))), e && a === null) throw Error(R(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(R(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ka(l), l = xa(n).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(R(444, t));
    }
  }
  function Ba(t) {
    return 'href="' + de(t) + '"';
  }
  function Fn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Oh(t) {
    return rt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function cv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Dt(e, "link", l), _t(e), t.head.appendChild(e));
  }
  function Ka(t) {
    return '[src="' + de(t) + '"]';
  }
  function Pn(t) {
    return "script[async]" + t;
  }
  function pf(t, e, l) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + de(l.href) + '"]');
        if (a) return e.instance = a, _t(a), a;
        var n = rt({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (t.ownerDocument || t).createElement("style"), _t(a), Dt(a, "style", n), Uu(a, l.precedence, t), e.instance = a;
      case "stylesheet":
        n = Ba(l.href);
        var u = t.querySelector(Fn(n));
        if (u) return e.state.loading |= 4, e.instance = u, _t(u), u;
        a = Oh(l), (n = ve.get(n)) && _r(a, n), u = (t.ownerDocument || t).createElement("link"), _t(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Dt(u, "link", a), e.state.loading |= 4, Uu(u, l.precedence, t), e.instance = u;
      case "script":
        return u = Ka(l.src), (n = t.querySelector(Pn(u))) ? (e.instance = n, _t(n), n) : (a = l, (n = ve.get(u)) && (a = rt({}, l), Ar(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), _t(n), Dt(n, "link", a), t.head.appendChild(n), e.instance = n);
      case "void":
        return null;
      default:
        throw Error(R(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (a = e.instance, e.state.loading |= 4, Uu(a, l.precedence, t));
    return e.instance;
  }
  function Uu(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function _r(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ar(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Hu = null;
  function vf(t, e, l) {
    if (Hu === null) {
      var a = /* @__PURE__ */ new Map(), n = Hu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else n = Hu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Zn] || u[Ct] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [
          u
        ]);
      }
    }
    return a;
  }
  function gf(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
  }
  function sv(t, e, l) {
    if (l === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function Dh(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function rv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && !(l.state.loading & 4)) {
      if (l.instance === null) {
        var n = Ba(a.href), u = e.querySelector(Fn(n));
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = di.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, _t(u);
          return;
        }
        u = e.ownerDocument || e, a = Oh(a), (n = ve.get(n)) && _r(a, n), u = u.createElement("link"), _t(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Dt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && !(l.state.loading & 3) && (t.count++, l = di.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var _c = 0;
  function ov(t, e) {
    return t.stylesheets && t.count === 0 && Bu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Bu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && _c === 0 && (_c = 62500 * Vp());
      var n = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Bu(t, t.stylesheets), t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, (t.imgBytes > _c ? 50 : 800) + e);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function di() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Bu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var mi = null;
  function Bu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, mi = /* @__PURE__ */ new Map(), e.forEach(fv, t), mi = null, di.call(t));
  }
  function fv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = mi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), mi.set(t, l);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = di.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Bn = {
    $$typeof: Qe,
    Provider: null,
    Consumer: null,
    _currentValue: Bl,
    _currentValue2: Bl,
    _threadCount: 0
  };
  function dv(t, e, l, a, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.hiddenUpdates = Ji(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wh(t, e, l, a, n, u, i, c, s, d, p, r) {
    return t = new dv(t, e, l, i, s, d, p, r, c), e = 1, u === true && (e |= 24), u = Wt(3, null, null, e), t.current = u, u.stateNode = t, e = Ps(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, er(u), t;
  }
  function jh(t) {
    return t ? (t = va, t) : va;
  }
  function Uh(t, e, l, a, n, u) {
    n = jh(n), a.context === null ? a.context = n : a.pendingContext = n, a = vl(e), a.payload = {
      element: l
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = gl(t, a, e), l !== null && (Qt(l, t, e), vn(l, t, e));
  }
  function bf(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Rr(t, e) {
    bf(t, e), (t = t.alternate) && bf(t, e);
  }
  function Hh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Wl(t, 67108864);
      e !== null && Qt(e, t, 67108864), Rr(t, 67108864);
    }
  }
  function Sf(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ee();
      e = qs(e);
      var l = Wl(t, e);
      l !== null && Qt(l, t, e), Rr(t, e);
    }
  }
  var hi = true;
  function mv(t, e, l, a) {
    var n = H.T;
    H.T = null;
    var u = J.p;
    try {
      J.p = 2, Mr(t, e, l, a);
    } finally {
      J.p = u, H.T = n;
    }
  }
  function hv(t, e, l, a) {
    var n = H.T;
    H.T = null;
    var u = J.p;
    try {
      J.p = 8, Mr(t, e, l, a);
    } finally {
      J.p = u, H.T = n;
    }
  }
  function Mr(t, e, l, a) {
    if (hi) {
      var n = _s(a);
      if (n === null) Tc(t, e, a, yi, l), xf(t, a);
      else if (pv(n, t, e, l, a)) a.stopPropagation();
      else if (xf(t, a), e & 4 && -1 < yv.indexOf(t)) {
        for (; n !== null; ) {
          var u = Ga(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = jl(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - te(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  De(u), !(k & 6) && (ni = Pt() + 500, Wn(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Wl(u, 2), c !== null && Qt(c, u, 2), Di(), Rr(u, 2);
          }
          if (u = _s(a), u === null && Tc(t, e, a, yi, l), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Tc(t, e, a, null, l);
    }
  }
  function _s(t) {
    return t = Xs(t), Cr(t);
  }
  var yi = null;
  function Cr(t) {
    if (yi = null, t = fa(t), t !== null) {
      var e = Gn(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = ld(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = ad(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return yi = t, null;
  }
  function Bh(t) {
    switch (t) {
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
        switch (ty()) {
          case cd:
            return 2;
          case sd:
            return 8;
          case Vu:
          case ey:
            return 32;
          case rd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var As = false, xl = null, El = null, Tl = null, qn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), rl = [], yv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function xf(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xl = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(e.pointerId);
    }
  }
  function an(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [
        n
      ]
    }, e !== null && (e = Ga(e), e !== null && Hh(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function pv(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return xl = an(xl, t, e, l, a, n), true;
      case "dragenter":
        return El = an(El, t, e, l, a, n), true;
      case "mouseover":
        return Tl = an(Tl, t, e, l, a, n), true;
      case "pointerover":
        var u = n.pointerId;
        return qn.set(u, an(qn.get(u) || null, t, e, l, a, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, Ln.set(u, an(Ln.get(u) || null, t, e, l, a, n)), true;
    }
    return false;
  }
  function qh(t) {
    var e = fa(t.target);
    if (e !== null) {
      var l = Gn(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = ld(l), e !== null) {
            t.blockedOn = e, ao(t.priority, function() {
              Sf(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = ad(l), e !== null) {
            t.blockedOn = e, ao(t.priority, function() {
              Sf(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qu(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = _s(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        Vc = a, l.target.dispatchEvent(a), Vc = null;
      } else return e = Ga(l), e !== null && Hh(e), t.blockedOn = l, false;
      e.shift();
    }
    return true;
  }
  function Ef(t, e, l) {
    qu(t) && l.delete(e);
  }
  function vv() {
    As = false, xl !== null && qu(xl) && (xl = null), El !== null && qu(El) && (El = null), Tl !== null && qu(Tl) && (Tl = null), qn.forEach(Ef), Ln.forEach(Ef);
  }
  function bu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, As || (As = true, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, vv)));
  }
  var Su = null;
  function Tf(t) {
    Su !== t && (Su = t, Et.unstable_scheduleCallback(Et.unstable_NormalPriority, function() {
      Su === t && (Su = null);
      for (var e = 0; e < t.length; e += 3) {
        var l = t[e], a = t[e + 1], n = t[e + 2];
        if (typeof a != "function") {
          if (Cr(a || l) === null) continue;
          break;
        }
        var u = Ga(l);
        u !== null && (t.splice(e, 3), e -= 3, is(u, {
          pending: true,
          data: n,
          method: l.method,
          action: a
        }, a, n));
      }
    }));
  }
  function qa(t) {
    function e(s) {
      return bu(s, t);
    }
    xl !== null && bu(xl, t), El !== null && bu(El, t), Tl !== null && bu(Tl, t), qn.forEach(e), Ln.forEach(e);
    for (var l = 0; l < rl.length; l++) {
      var a = rl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < rl.length && (l = rl[0], l.blockedOn === null); ) qh(l), l.blockedOn === null && rl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
      var n = l[a], u = l[a + 1], i = n[Vt] || null;
      if (typeof u == "function") i || Tf(l);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[Vt] || null) c = i.formAction;
          else if (Cr(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? l[a + 1] = c : (l.splice(a, 3), a -= 3), Tf(l);
      }
    }
  }
  function Lh() {
    function t(u) {
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
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = false, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Nr(t) {
    this._internalRoot = t;
  }
  Ui.prototype.render = Nr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(R(409));
    var l = e.current, a = ee();
    Uh(l, a, t, e, null, null);
  };
  Ui.prototype.unmount = Nr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Uh(t.current, 2, null, t, null, null), Di(), e[Ya] = null;
    }
  };
  function Ui(t) {
    this._internalRoot = t;
  }
  Ui.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = hd();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var l = 0; l < rl.length && e !== 0 && e < rl[l].priority; l++) ;
      rl.splice(l, 0, t), l === 0 && qh(t);
    }
  };
  var zf = td.version;
  if (zf !== "19.2.5") throw Error(R(527, zf, "19.2.5"));
  J.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(R(188)) : (t = Object.keys(t).join(","), Error(R(268, t)));
    return t = k0(e), t = t !== null ? nd(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var gv = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xu.isDisabled && xu.supportsFiber) try {
      Xn = xu.inject(gv), It = xu;
    } catch {
    }
  }
  gi.createRoot = function(t, e) {
    if (!ed(t)) throw Error(R(299));
    var l = false, a = "", n = Nm, u = Om, i = Dm;
    return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = wh(t, 1, false, null, null, l, a, null, n, u, i, Lh), t[Ya] = e.current, zr(t), new Nr(e);
  };
  gi.hydrateRoot = function(t, e, l) {
    if (!ed(t)) throw Error(R(299));
    var a = false, n = "", u = Nm, i = Om, c = Dm, s = null;
    return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.formState !== void 0 && (s = l.formState)), e = wh(t, 1, true, e, l ?? null, a, n, s, u, i, c, Lh), e.context = jh(null), l = e.current, a = ee(), a = qs(a), n = vl(a), n.callback = null, gl(l, n, a), l = a, e.current.lanes = l, Vn(e, l), De(e), t[Ya] = e.current, zr(t), new Ui(e);
  };
  gi.version = "19.2.5";
  function Yh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yh);
    } catch (t) {
      console.error(t);
    }
  }
  Yh(), kf.exports = gi;
  var bv = kf.exports;
  let Sv, xv, _f;
  Sv = "modulepreload";
  xv = function(t) {
    return "/" + t;
  };
  _f = {};
  Nl = function(e, l, a) {
    let n = Promise.resolve();
    if (l && l.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(l.map((s) => {
        if (s = xv(s), s in _f) return;
        _f[s] = true;
        const d = s.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${p}`)) return;
        const r = document.createElement("link");
        if (r.rel = d ? "stylesheet" : Sv, d || (r.as = "script"), r.crossOrigin = "", r.href = s, c && r.setAttribute("nonce", c), document.head.appendChild(r), d) return new Promise((m, v) => {
          r.addEventListener("load", m), r.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${s}`)));
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
      return e().catch(u);
    });
  };
  var Af = "popstate";
  function Rf(t) {
    return typeof t == "object" && t != null && "pathname" in t && "search" in t && "hash" in t && "state" in t && "key" in t;
  }
  function Ev(t = {}) {
    function e(a, n) {
      var _a2;
      let u = (_a2 = n.state) == null ? void 0 : _a2.masked, { pathname: i, search: c, hash: s } = u || a.location;
      return Rs("", {
        pathname: i,
        search: c,
        hash: s
      }, n.state && n.state.usr || null, n.state && n.state.key || "default", u ? {
        pathname: a.location.pathname,
        search: a.location.search,
        hash: a.location.hash
      } : void 0);
    }
    function l(a, n) {
      return typeof n == "string" ? n : Yn(n);
    }
    return zv(e, l, null, t);
  }
  function dt(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function Ee(t, e) {
    if (!t) {
      typeof console < "u" && console.warn(e);
      try {
        throw new Error(e);
      } catch {
      }
    }
  }
  function Tv() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Mf(t, e) {
    return {
      usr: t.state,
      key: t.key,
      idx: e,
      masked: t.unstable_mask ? {
        pathname: t.pathname,
        search: t.search,
        hash: t.hash
      } : void 0
    };
  }
  function Rs(t, e, l = null, a, n) {
    return {
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: "",
      ...typeof e == "string" ? ka(e) : e,
      state: l,
      key: e && e.key || a || Tv(),
      unstable_mask: n
    };
  }
  function Yn({ pathname: t = "/", search: e = "", hash: l = "" }) {
    return e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e), l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l), t;
  }
  function ka(t) {
    let e = {};
    if (t) {
      let l = t.indexOf("#");
      l >= 0 && (e.hash = t.substring(l), t = t.substring(0, l));
      let a = t.indexOf("?");
      a >= 0 && (e.search = t.substring(a), t = t.substring(0, a)), t && (e.pathname = t);
    }
    return e;
  }
  function zv(t, e, l, a = {}) {
    let { window: n = document.defaultView, v5Compat: u = false } = a, i = n.history, c = "POP", s = null, d = p();
    d == null && (d = 0, i.replaceState({
      ...i.state,
      idx: d
    }, ""));
    function p() {
      return (i.state || {
        idx: null
      }).idx;
    }
    function r() {
      c = "POP";
      let g = p(), f = g == null ? null : g - d;
      d = g, s && s({
        action: c,
        location: b.location,
        delta: f
      });
    }
    function m(g, f) {
      c = "PUSH";
      let o = Rf(g) ? g : Rs(b.location, g, f);
      d = p() + 1;
      let h = Mf(o, d), y = b.createHref(o.unstable_mask || o);
      try {
        i.pushState(h, "", y);
      } catch (S) {
        if (S instanceof DOMException && S.name === "DataCloneError") throw S;
        n.location.assign(y);
      }
      u && s && s({
        action: c,
        location: b.location,
        delta: 1
      });
    }
    function v(g, f) {
      c = "REPLACE";
      let o = Rf(g) ? g : Rs(b.location, g, f);
      d = p();
      let h = Mf(o, d), y = b.createHref(o.unstable_mask || o);
      i.replaceState(h, "", y), u && s && s({
        action: c,
        location: b.location,
        delta: 0
      });
    }
    function z(g) {
      return _v(g);
    }
    let b = {
      get action() {
        return c;
      },
      get location() {
        return t(n, i);
      },
      listen(g) {
        if (s) throw new Error("A history only accepts one active listener");
        return n.addEventListener(Af, r), s = g, () => {
          n.removeEventListener(Af, r), s = null;
        };
      },
      createHref(g) {
        return e(n, g);
      },
      createURL: z,
      encodeLocation(g) {
        let f = z(g);
        return {
          pathname: f.pathname,
          search: f.search,
          hash: f.hash
        };
      },
      push: m,
      replace: v,
      go(g) {
        return i.go(g);
      }
    };
    return b;
  }
  function _v(t, e = false) {
    let l = "http://localhost";
    typeof window < "u" && (l = window.location.origin !== "null" ? window.location.origin : window.location.href), dt(l, "No window.location.(origin|href) available to create URL");
    let a = typeof t == "string" ? t : Yn(t);
    return a = a.replace(/ $/, "%20"), !e && a.startsWith("//") && (a = l + a), new URL(a, l);
  }
  function Gh(t, e, l = "/") {
    return Av(t, e, l, false);
  }
  function Av(t, e, l, a) {
    let n = typeof e == "string" ? ka(e) : e, u = tl(n.pathname || "/", l);
    if (u == null) return null;
    let i = Xh(t);
    Rv(i);
    let c = null;
    for (let s = 0; c == null && s < i.length; ++s) {
      let d = qv(u);
      c = Hv(i[s], d, a);
    }
    return c;
  }
  function Xh(t, e = [], l = [], a = "", n = false) {
    let u = (i, c, s = n, d) => {
      let p = {
        relativePath: d === void 0 ? i.path || "" : d,
        caseSensitive: i.caseSensitive === true,
        childrenIndex: c,
        route: i
      };
      if (p.relativePath.startsWith("/")) {
        if (!p.relativePath.startsWith(a) && s) return;
        dt(p.relativePath.startsWith(a), `Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(a.length);
      }
      let r = Ne([
        a,
        p.relativePath
      ]), m = l.concat(p);
      i.children && i.children.length > 0 && (dt(i.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${r}".`), Xh(i.children, e, m, r, s)), !(i.path == null && !i.index) && e.push({
        path: r,
        score: jv(r, i.index),
        routesMeta: m
      });
    };
    return t.forEach((i, c) => {
      var _a2;
      if (i.path === "" || !((_a2 = i.path) == null ? void 0 : _a2.includes("?"))) u(i, c);
      else for (let s of Qh(i.path)) u(i, c, true, s);
    }), e;
  }
  function Qh(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [l, ...a] = e, n = l.endsWith("?"), u = l.replace(/\?$/, "");
    if (a.length === 0) return n ? [
      u,
      ""
    ] : [
      u
    ];
    let i = Qh(a.join("/")), c = [];
    return c.push(...i.map((s) => s === "" ? u : [
      u,
      s
    ].join("/"))), n && c.push(...i), c.map((s) => t.startsWith("/") && s === "" ? "/" : s);
  }
  function Rv(t) {
    t.sort((e, l) => e.score !== l.score ? l.score - e.score : Uv(e.routesMeta.map((a) => a.childrenIndex), l.routesMeta.map((a) => a.childrenIndex)));
  }
  var Mv = /^:[\w-]+$/, Cv = 3, Nv = 2, Ov = 1, Dv = 10, wv = -2, Cf = (t) => t === "*";
  function jv(t, e) {
    let l = t.split("/"), a = l.length;
    return l.some(Cf) && (a += wv), e && (a += Nv), l.filter((n) => !Cf(n)).reduce((n, u) => n + (Mv.test(u) ? Cv : u === "" ? Ov : Dv), a);
  }
  function Uv(t, e) {
    return t.length === e.length && t.slice(0, -1).every((a, n) => a === e[n]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function Hv(t, e, l = false) {
    let { routesMeta: a } = t, n = {}, u = "/", i = [];
    for (let c = 0; c < a.length; ++c) {
      let s = a[c], d = c === a.length - 1, p = u === "/" ? e : e.slice(u.length) || "/", r = pi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: d
      }, p), m = s.route;
      if (!r && d && l && !a[a.length - 1].route.index && (r = pi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: false
      }, p)), !r) return null;
      Object.assign(n, r.params), i.push({
        params: n,
        pathname: Ne([
          u,
          r.pathname
        ]),
        pathnameBase: Xv(Ne([
          u,
          r.pathnameBase
        ])),
        route: m
      }), r.pathnameBase !== "/" && (u = Ne([
        u,
        r.pathnameBase
      ]));
    }
    return i;
  }
  function pi(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [l, a] = Bv(t.path, t.caseSensitive, t.end), n = e.match(l);
    if (!n) return null;
    let u = n[0], i = u.replace(/(.)\/+$/, "$1"), c = n.slice(1);
    return {
      params: a.reduce((d, { paramName: p, isOptional: r }, m) => {
        if (p === "*") {
          let z = c[m] || "";
          i = u.slice(0, u.length - z.length).replace(/(.)\/+$/, "$1");
        }
        const v = c[m];
        return r && !v ? d[p] = void 0 : d[p] = (v || "").replace(/%2F/g, "/"), d;
      }, {}),
      pathname: u,
      pathnameBase: i,
      pattern: t
    };
  }
  function Bv(t, e = false, l = true) {
    Ee(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let a = [], n = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, c, s, d, p) => {
      if (a.push({
        paramName: c,
        isOptional: s != null
      }), s) {
        let r = p.charAt(d + i.length);
        return r && r !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return t.endsWith("*") ? (a.push({
      paramName: "*"
    }), n += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : l ? n += "\\/*$" : t !== "" && t !== "/" && (n += "(?:(?=\\/|$))"), [
      new RegExp(n, e ? void 0 : "i"),
      a
    ];
  }
  function qv(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Ee(false, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`), t;
    }
  }
  function tl(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let l = e.endsWith("/") ? e.length - 1 : e.length, a = t.charAt(l);
    return a && a !== "/" ? null : t.slice(l) || "/";
  }
  var Lv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function Yv(t, e = "/") {
    let { pathname: l, search: a = "", hash: n = "" } = typeof t == "string" ? ka(t) : t, u;
    return l ? (l = l.replace(/\/\/+/g, "/"), l.startsWith("/") ? u = Nf(l.substring(1), "/") : u = Nf(l, e)) : u = e, {
      pathname: u,
      search: Qv(a),
      hash: Vv(n)
    };
  }
  function Nf(t, e) {
    let l = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((n) => {
      n === ".." ? l.length > 1 && l.pop() : n !== "." && l.push(n);
    }), l.length > 1 ? l.join("/") : "/";
  }
  function Ac(t, e, l, a) {
    return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Gv(t) {
    return t.filter((e, l) => l === 0 || e.route.path && e.route.path.length > 0);
  }
  function Or(t) {
    let e = Gv(t);
    return e.map((l, a) => a === e.length - 1 ? l.pathname : l.pathnameBase);
  }
  function Hi(t, e, l, a = false) {
    let n;
    typeof t == "string" ? n = ka(t) : (n = {
      ...t
    }, dt(!n.pathname || !n.pathname.includes("?"), Ac("?", "pathname", "search", n)), dt(!n.pathname || !n.pathname.includes("#"), Ac("#", "pathname", "hash", n)), dt(!n.search || !n.search.includes("#"), Ac("#", "search", "hash", n)));
    let u = t === "" || n.pathname === "", i = u ? "/" : n.pathname, c;
    if (i == null) c = l;
    else {
      let r = e.length - 1;
      if (!a && i.startsWith("..")) {
        let m = i.split("/");
        for (; m[0] === ".."; ) m.shift(), r -= 1;
        n.pathname = m.join("/");
      }
      c = r >= 0 ? e[r] : "/";
    }
    let s = Yv(n, c), d = i && i !== "/" && i.endsWith("/"), p = (u || i === ".") && l.endsWith("/");
    return !s.pathname.endsWith("/") && (d || p) && (s.pathname += "/"), s;
  }
  var Ne = (t) => t.join("/").replace(/\/\/+/g, "/"), Xv = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), Qv = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, Vv = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Zv = class {
    constructor(t, e, l, a = false) {
      this.status = t, this.statusText = e || "", this.internal = a, l instanceof Error ? (this.data = l.toString(), this.error = l) : this.data = l;
    }
  };
  function Kv(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  function kv(t) {
    return t.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var Vh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function Zh(t, e) {
    let l = t;
    if (typeof l != "string" || !Lv.test(l)) return {
      absoluteURL: void 0,
      isExternal: false,
      to: l
    };
    let a = l, n = false;
    if (Vh) try {
      let u = new URL(window.location.href), i = l.startsWith("//") ? new URL(u.protocol + l) : new URL(l), c = tl(i.pathname, e);
      i.origin === u.origin && c != null ? l = c + i.search + i.hash : n = true;
    } catch {
      Ee(false, `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return {
      absoluteURL: a,
      isExternal: n,
      to: l
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Kh = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(Kh);
  var Jv = [
    "GET",
    ...Kh
  ];
  new Set(Jv);
  var Ja = x.createContext(null);
  Ja.displayName = "DataRouter";
  var Bi = x.createContext(null);
  Bi.displayName = "DataRouterState";
  var kh = x.createContext(false);
  function $v() {
    return x.useContext(kh);
  }
  var Jh = x.createContext({
    isTransitioning: false
  });
  Jh.displayName = "ViewTransition";
  var Wv = x.createContext(/* @__PURE__ */ new Map());
  Wv.displayName = "Fetchers";
  var Fv = x.createContext(null);
  Fv.displayName = "Await";
  var ne = x.createContext(null);
  ne.displayName = "Navigation";
  var In = x.createContext(null);
  In.displayName = "Location";
  var ze = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  ze.displayName = "Route";
  var Dr = x.createContext(null);
  Dr.displayName = "RouteError";
  var $h = "REACT_ROUTER_ERROR", Pv = "REDIRECT", Iv = "ROUTE_ERROR_RESPONSE";
  function tg(t) {
    if (t.startsWith(`${$h}:${Pv}:{`)) try {
      let e = JSON.parse(t.slice(28));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.location == "string" && typeof e.reloadDocument == "boolean" && typeof e.replace == "boolean") return e;
    } catch {
    }
  }
  function eg(t) {
    if (t.startsWith(`${$h}:${Iv}:{`)) try {
      let e = JSON.parse(t.slice(40));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string") return new Zv(e.status, e.statusText, e.data);
    } catch {
    }
  }
  function lg(t, { relative: e } = {}) {
    dt($a(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: l, navigator: a } = x.useContext(ne), { hash: n, pathname: u, search: i } = tu(t, {
      relative: e
    }), c = u;
    return l !== "/" && (c = u === "/" ? l : Ne([
      l,
      u
    ])), a.createHref({
      pathname: c,
      search: i,
      hash: n
    });
  }
  function $a() {
    return x.useContext(In) != null;
  }
  function we() {
    return dt($a(), "useLocation() may be used only in the context of a <Router> component."), x.useContext(In).location;
  }
  var Wh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Fh(t) {
    x.useContext(ne).static || x.useLayoutEffect(t);
  }
  Ph = function() {
    let { isDataRoute: t } = x.useContext(ze);
    return t ? pg() : ag();
  };
  function ag() {
    dt($a(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = x.useContext(Ja), { basename: e, navigator: l } = x.useContext(ne), { matches: a } = x.useContext(ze), { pathname: n } = we(), u = JSON.stringify(Or(a)), i = x.useRef(false);
    return Fh(() => {
      i.current = true;
    }), x.useCallback((s, d = {}) => {
      if (Ee(i.current, Wh), !i.current) return;
      if (typeof s == "number") {
        l.go(s);
        return;
      }
      let p = Hi(s, JSON.parse(u), n, d.relative === "path");
      t == null && e !== "/" && (p.pathname = p.pathname === "/" ? e : Ne([
        e,
        p.pathname
      ])), (d.replace ? l.replace : l.push)(p, d.state, d);
    }, [
      e,
      l,
      u,
      n,
      t
    ]);
  }
  x.createContext(null);
  ng = function() {
    let { matches: t } = x.useContext(ze), e = t[t.length - 1];
    return e ? e.params : {};
  };
  function tu(t, { relative: e } = {}) {
    let { matches: l } = x.useContext(ze), { pathname: a } = we(), n = JSON.stringify(Or(l));
    return x.useMemo(() => Hi(t, JSON.parse(n), a, e === "path"), [
      t,
      n,
      a,
      e
    ]);
  }
  function ug(t, e) {
    return Ih(t, e);
  }
  function Ih(t, e, l) {
    var _a2;
    dt($a(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: a } = x.useContext(ne), { matches: n } = x.useContext(ze), u = n[n.length - 1], i = u ? u.params : {}, c = u ? u.pathname : "/", s = u ? u.pathnameBase : "/", d = u && u.route;
    {
      let g = d && d.path || "";
      e0(c, !d || g.endsWith("*") || g.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g === "/" ? "*" : `${g}/*`}">.`);
    }
    let p = we(), r;
    if (e) {
      let g = typeof e == "string" ? ka(e) : e;
      dt(s === "/" || ((_a2 = g.pathname) == null ? void 0 : _a2.startsWith(s)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${g.pathname}" was given in the \`location\` prop.`), r = g;
    } else r = p;
    let m = r.pathname || "/", v = m;
    if (s !== "/") {
      let g = s.replace(/^\//, "").split("/");
      v = "/" + m.replace(/^\//, "").split("/").slice(g.length).join("/");
    }
    let z = Gh(t, {
      pathname: v
    });
    Ee(d || z != null, `No routes matched location "${r.pathname}${r.search}${r.hash}" `), Ee(z == null || z[z.length - 1].route.element !== void 0 || z[z.length - 1].route.Component !== void 0 || z[z.length - 1].route.lazy !== void 0, `Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let b = og(z && z.map((g) => Object.assign({}, g, {
      params: Object.assign({}, i, g.params),
      pathname: Ne([
        s,
        a.encodeLocation ? a.encodeLocation(g.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathname
      ]),
      pathnameBase: g.pathnameBase === "/" ? s : Ne([
        s,
        a.encodeLocation ? a.encodeLocation(g.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : g.pathnameBase
      ])
    })), n, l);
    return e && b ? x.createElement(In.Provider, {
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
    }, b) : b;
  }
  function ig() {
    let t = yg(), e = Kv(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), l = t instanceof Error ? t.stack : null, a = "rgba(200,200,200, 0.5)", n = {
      padding: "0.5rem",
      backgroundColor: a
    }, u = {
      padding: "2px 4px",
      backgroundColor: a
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t), i = x.createElement(x.Fragment, null, x.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
      style: u
    }, "ErrorBoundary"), " or", " ", x.createElement("code", {
      style: u
    }, "errorElement"), " prop on your route.")), x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, e), l ? x.createElement("pre", {
      style: n
    }, l) : null, i);
  }
  var cg = x.createElement(ig, null), t0 = class extends x.Component {
    constructor(t) {
      super(t), this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error
      };
    }
    static getDerivedStateFromError(t) {
      return {
        error: t
      };
    }
    static getDerivedStateFromProps(t, e) {
      return e.location !== t.location || e.revalidation !== "idle" && t.revalidation === "idle" ? {
        error: t.error,
        location: t.location,
        revalidation: t.revalidation
      } : {
        error: t.error !== void 0 ? t.error : e.error,
        location: e.location,
        revalidation: t.revalidation || e.revalidation
      };
    }
    componentDidCatch(t, e) {
      this.props.onError ? this.props.onError(t, e) : console.error("React Router caught the following error during render", t);
    }
    render() {
      let t = this.state.error;
      if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
        const l = eg(t.digest);
        l && (t = l);
      }
      let e = t !== void 0 ? x.createElement(ze.Provider, {
        value: this.props.routeContext
      }, x.createElement(Dr.Provider, {
        value: t,
        children: this.props.component
      })) : this.props.children;
      return this.context ? x.createElement(sg, {
        error: t
      }, e) : e;
    }
  };
  t0.contextType = kh;
  var Rc = /* @__PURE__ */ new WeakMap();
  function sg({ children: t, error: e }) {
    let { basename: l } = x.useContext(ne);
    if (typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      let a = tg(e.digest);
      if (a) {
        let n = Rc.get(e);
        if (n) throw n;
        let u = Zh(a.location, l);
        if (Vh && !Rc.get(e)) if (u.isExternal || a.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const i = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
            replace: a.replace
          }));
          throw Rc.set(e, i), i;
        }
        return x.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${u.absoluteURL || u.to}`
        });
      }
    }
    return t;
  }
  function rg({ routeContext: t, match: e, children: l }) {
    let a = x.useContext(Ja);
    return a && a.static && a.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = e.route.id), x.createElement(ze.Provider, {
      value: t
    }, l);
  }
  function og(t, e = [], l) {
    let a = l == null ? void 0 : l.state;
    if (t == null) {
      if (!a) return null;
      if (a.errors) t = a.matches;
      else if (e.length === 0 && !a.initialized && a.matches.length > 0) t = a.matches;
      else return null;
    }
    let n = t, u = a == null ? void 0 : a.errors;
    if (u != null) {
      let p = n.findIndex((r) => r.route.id && (u == null ? void 0 : u[r.route.id]) !== void 0);
      dt(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), n = n.slice(0, Math.min(n.length, p + 1));
    }
    let i = false, c = -1;
    if (l && a) {
      i = a.renderFallback;
      for (let p = 0; p < n.length; p++) {
        let r = n[p];
        if ((r.route.HydrateFallback || r.route.hydrateFallbackElement) && (c = p), r.route.id) {
          let { loaderData: m, errors: v } = a, z = r.route.loader && !m.hasOwnProperty(r.route.id) && (!v || v[r.route.id] === void 0);
          if (r.route.lazy || z) {
            l.isStatic && (i = true), c >= 0 ? n = n.slice(0, c + 1) : n = [
              n[0]
            ];
            break;
          }
        }
      }
    }
    let s = l == null ? void 0 : l.onError, d = a && s ? (p, r) => {
      var _a2, _b;
      s(p, {
        location: a.location,
        params: ((_b = (_a2 = a.matches) == null ? void 0 : _a2[0]) == null ? void 0 : _b.params) ?? {},
        unstable_pattern: kv(a.matches),
        errorInfo: r
      });
    } : void 0;
    return n.reduceRight((p, r, m) => {
      let v, z = false, b = null, g = null;
      a && (v = u && r.route.id ? u[r.route.id] : void 0, b = r.route.errorElement || cg, i && (c < 0 && m === 0 ? (e0("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), z = true, g = null) : c === m && (z = true, g = r.route.hydrateFallbackElement || null)));
      let f = e.concat(n.slice(0, m + 1)), o = () => {
        let h;
        return v ? h = b : z ? h = g : r.route.Component ? h = x.createElement(r.route.Component, null) : r.route.element ? h = r.route.element : h = p, x.createElement(rg, {
          match: r,
          routeContext: {
            outlet: p,
            matches: f,
            isDataRoute: a != null
          },
          children: h
        });
      };
      return a && (r.route.ErrorBoundary || r.route.errorElement || m === 0) ? x.createElement(t0, {
        location: a.location,
        revalidation: a.revalidation,
        component: b,
        error: v,
        children: o(),
        routeContext: {
          outlet: null,
          matches: f,
          isDataRoute: true
        },
        onError: d
      }) : o();
    }, null);
  }
  function wr(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function fg(t) {
    let e = x.useContext(Ja);
    return dt(e, wr(t)), e;
  }
  function dg(t) {
    let e = x.useContext(Bi);
    return dt(e, wr(t)), e;
  }
  function mg(t) {
    let e = x.useContext(ze);
    return dt(e, wr(t)), e;
  }
  function jr(t) {
    let e = mg(t), l = e.matches[e.matches.length - 1];
    return dt(l.route.id, `${t} can only be used on routes that contain a unique "id"`), l.route.id;
  }
  function hg() {
    return jr("useRouteId");
  }
  function yg() {
    var _a2;
    let t = x.useContext(Dr), e = dg("useRouteError"), l = jr("useRouteError");
    return t !== void 0 ? t : (_a2 = e.errors) == null ? void 0 : _a2[l];
  }
  function pg() {
    let { router: t } = fg("useNavigate"), e = jr("useNavigate"), l = x.useRef(false);
    return Fh(() => {
      l.current = true;
    }), x.useCallback(async (n, u = {}) => {
      Ee(l.current, Wh), l.current && (typeof n == "number" ? await t.navigate(n) : await t.navigate(n, {
        fromRouteId: e,
        ...u
      }));
    }, [
      t,
      e
    ]);
  }
  var Of = {};
  function e0(t, e, l) {
    !e && !Of[t] && (Of[t] = true, Ee(false, l));
  }
  x.memo(vg);
  function vg({ routes: t, future: e, state: l, isStatic: a, onError: n }) {
    return Ih(t, void 0, {
      state: l,
      isStatic: a,
      onError: n
    });
  }
  function l0({ to: t, replace: e, state: l, relative: a }) {
    dt($a(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: n } = x.useContext(ne);
    Ee(!n, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: u } = x.useContext(ze), { pathname: i } = we(), c = Ph(), s = Hi(t, Or(u), i, a === "path"), d = JSON.stringify(s);
    return x.useEffect(() => {
      c(JSON.parse(d), {
        replace: e,
        state: l,
        relative: a
      });
    }, [
      c,
      d,
      a,
      e,
      l
    ]), null;
  }
  function Lt(t) {
    dt(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function gg({ basename: t = "/", children: e = null, location: l, navigationType: a = "POP", navigator: n, static: u = false, unstable_useTransitions: i }) {
    dt(!$a(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let c = t.replace(/^\/*/, "/"), s = x.useMemo(() => ({
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
    typeof l == "string" && (l = ka(l));
    let { pathname: d = "/", search: p = "", hash: r = "", state: m = null, key: v = "default", unstable_mask: z } = l, b = x.useMemo(() => {
      let g = tl(d, c);
      return g == null ? null : {
        location: {
          pathname: g,
          search: p,
          hash: r,
          state: m,
          key: v,
          unstable_mask: z
        },
        navigationType: a
      };
    }, [
      c,
      d,
      p,
      r,
      m,
      v,
      a,
      z
    ]);
    return Ee(b != null, `<Router basename="${c}"> is not able to match the URL "${d}${p}${r}" because it does not start with the basename, so the <Router> won't render anything.`), b == null ? null : x.createElement(ne.Provider, {
      value: s
    }, x.createElement(In.Provider, {
      children: e,
      value: b
    }));
  }
  function bg({ children: t, location: e }) {
    return ug(Ms(t), e);
  }
  function Ms(t, e = []) {
    let l = [];
    return x.Children.forEach(t, (a, n) => {
      if (!x.isValidElement(a)) return;
      let u = [
        ...e,
        n
      ];
      if (a.type === x.Fragment) {
        l.push.apply(l, Ms(a.props.children, u));
        return;
      }
      dt(a.type === Lt, `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), dt(!a.props.index || !a.props.children, "An index route cannot have child routes.");
      let i = {
        id: a.props.id || u.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        middleware: a.props.middleware,
        loader: a.props.loader,
        action: a.props.action,
        hydrateFallbackElement: a.props.hydrateFallbackElement,
        HydrateFallback: a.props.HydrateFallback,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary: a.props.hasErrorBoundary === true || a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy
      };
      a.props.children && (i.children = Ms(a.props.children, u)), l.push(i);
    }), l;
  }
  var Lu = "get", Yu = "application/x-www-form-urlencoded";
  function qi(t) {
    return typeof HTMLElement < "u" && t instanceof HTMLElement;
  }
  function Sg(t) {
    return qi(t) && t.tagName.toLowerCase() === "button";
  }
  function xg(t) {
    return qi(t) && t.tagName.toLowerCase() === "form";
  }
  function Eg(t) {
    return qi(t) && t.tagName.toLowerCase() === "input";
  }
  function Tg(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function zg(t, e) {
    return t.button === 0 && (!e || e === "_self") && !Tg(t);
  }
  var Eu = null;
  function _g() {
    if (Eu === null) try {
      new FormData(document.createElement("form"), 0), Eu = false;
    } catch {
      Eu = true;
    }
    return Eu;
  }
  var Ag = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Mc(t) {
    return t != null && !Ag.has(t) ? (Ee(false, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`), null) : t;
  }
  function Rg(t, e) {
    let l, a, n, u, i;
    if (xg(t)) {
      let c = t.getAttribute("action");
      a = c ? tl(c, e) : null, l = t.getAttribute("method") || Lu, n = Mc(t.getAttribute("enctype")) || Yu, u = new FormData(t);
    } else if (Sg(t) || Eg(t) && (t.type === "submit" || t.type === "image")) {
      let c = t.form;
      if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = t.getAttribute("formaction") || c.getAttribute("action");
      if (a = s ? tl(s, e) : null, l = t.getAttribute("formmethod") || c.getAttribute("method") || Lu, n = Mc(t.getAttribute("formenctype")) || Mc(c.getAttribute("enctype")) || Yu, u = new FormData(c, t), !_g()) {
        let { name: d, type: p, value: r } = t;
        if (p === "image") {
          let m = d ? `${d}.` : "";
          u.append(`${m}x`, "0"), u.append(`${m}y`, "0");
        } else d && u.append(d, r);
      }
    } else {
      if (qi(t)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      l = Lu, a = null, n = Yu, i = t;
    }
    return u && n === "text/plain" && (i = u, u = void 0), {
      action: a,
      method: l.toLowerCase(),
      encType: n,
      formData: u,
      body: i
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function Ur(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function a0(t, e, l, a) {
    let n = typeof t == "string" ? new URL(t, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return l ? n.pathname.endsWith("/") ? n.pathname = `${n.pathname}_.${a}` : n.pathname = `${n.pathname}.${a}` : n.pathname === "/" ? n.pathname = `_root.${a}` : e && tl(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.${a}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${a}`, n;
  }
  async function Mg(t, e) {
    if (t.id in e) return e[t.id];
    try {
      let l = await import(t.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return e[t.id] = l, l;
    } catch (l) {
      return console.error(`Error loading route module \`${t.module}\`, reloading page...`), console.error(l), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function Cg(t) {
    return t == null ? false : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
  }
  async function Ng(t, e, l) {
    let a = await Promise.all(t.map(async (n) => {
      let u = e.routes[n.route.id];
      if (u) {
        let i = await Mg(u, l);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return jg(a.flat(1).filter(Cg).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? {
      ...n,
      rel: "prefetch",
      as: "style"
    } : {
      ...n,
      rel: "prefetch"
    }));
  }
  function Df(t, e, l, a, n, u) {
    let i = (s, d) => l[d] ? s.route.id !== l[d].route.id : true, c = (s, d) => {
      var _a2;
      return l[d].pathname !== s.pathname || ((_a2 = l[d].route.path) == null ? void 0 : _a2.endsWith("*")) && l[d].params["*"] !== s.params["*"];
    };
    return u === "assets" ? e.filter((s, d) => i(s, d) || c(s, d)) : u === "data" ? e.filter((s, d) => {
      var _a2;
      let p = a.routes[s.route.id];
      if (!p || !p.hasLoader) return false;
      if (i(s, d) || c(s, d)) return true;
      if (s.route.shouldRevalidate) {
        let r = s.route.shouldRevalidate({
          currentUrl: new URL(n.pathname + n.search + n.hash, window.origin),
          currentParams: ((_a2 = l[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(t, window.origin),
          nextParams: s.params,
          defaultShouldRevalidate: true
        });
        if (typeof r == "boolean") return r;
      }
      return true;
    }) : [];
  }
  function Og(t, e, { includeHydrateFallback: l } = {}) {
    return Dg(t.map((a) => {
      let n = e.routes[a.route.id];
      if (!n) return [];
      let u = [
        n.module
      ];
      return n.clientActionModule && (u = u.concat(n.clientActionModule)), n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)), l && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)), n.imports && (u = u.concat(n.imports)), u;
    }).flat(1));
  }
  function Dg(t) {
    return [
      ...new Set(t)
    ];
  }
  function wg(t) {
    let e = {}, l = Object.keys(t).sort();
    for (let a of l) e[a] = t[a];
    return e;
  }
  function jg(t, e) {
    let l = /* @__PURE__ */ new Set();
    return new Set(e), t.reduce((a, n) => {
      let u = JSON.stringify(wg(n));
      return l.has(u) || (l.add(u), a.push({
        key: u,
        link: n
      })), a;
    }, []);
  }
  function Hr() {
    let t = x.useContext(Ja);
    return Ur(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
  }
  function Ug() {
    let t = x.useContext(Bi);
    return Ur(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
  }
  var Br = x.createContext(void 0);
  Br.displayName = "FrameworkContext";
  function qr() {
    let t = x.useContext(Br);
    return Ur(t, "You must render this element inside a <HydratedRouter> element"), t;
  }
  function Hg(t, e) {
    let l = x.useContext(Br), [a, n] = x.useState(false), [u, i] = x.useState(false), { onFocus: c, onBlur: s, onMouseEnter: d, onMouseLeave: p, onTouchStart: r } = e, m = x.useRef(null);
    x.useEffect(() => {
      if (t === "render" && i(true), t === "viewport") {
        let b = (f) => {
          f.forEach((o) => {
            i(o.isIntersecting);
          });
        }, g = new IntersectionObserver(b, {
          threshold: 0.5
        });
        return m.current && g.observe(m.current), () => {
          g.disconnect();
        };
      }
    }, [
      t
    ]), x.useEffect(() => {
      if (a) {
        let b = setTimeout(() => {
          i(true);
        }, 100);
        return () => {
          clearTimeout(b);
        };
      }
    }, [
      a
    ]);
    let v = () => {
      n(true);
    }, z = () => {
      n(false), i(false);
    };
    return l ? t !== "intent" ? [
      u,
      m,
      {}
    ] : [
      u,
      m,
      {
        onFocus: nn(c, v),
        onBlur: nn(s, z),
        onMouseEnter: nn(d, v),
        onMouseLeave: nn(p, z),
        onTouchStart: nn(r, v)
      }
    ] : [
      false,
      m,
      {}
    ];
  }
  function nn(t, e) {
    return (l) => {
      t && t(l), l.defaultPrevented || e(l);
    };
  }
  function Bg({ page: t, ...e }) {
    let l = $v(), { router: a } = Hr(), n = x.useMemo(() => Gh(a.routes, t, a.basename), [
      a.routes,
      t,
      a.basename
    ]);
    return n ? l ? x.createElement(Lg, {
      page: t,
      matches: n,
      ...e
    }) : x.createElement(Yg, {
      page: t,
      matches: n,
      ...e
    }) : null;
  }
  function qg(t) {
    let { manifest: e, routeModules: l } = qr(), [a, n] = x.useState([]);
    return x.useEffect(() => {
      let u = false;
      return Ng(t, e, l).then((i) => {
        u || n(i);
      }), () => {
        u = true;
      };
    }, [
      t,
      e,
      l
    ]), a;
  }
  function Lg({ page: t, matches: e, ...l }) {
    let a = we(), { future: n } = qr(), { basename: u } = Hr(), i = x.useMemo(() => {
      if (t === a.pathname + a.search + a.hash) return [];
      let c = a0(t, u, n.unstable_trailingSlashAwareDataRequests, "rsc"), s = false, d = [];
      for (let p of e) typeof p.route.shouldRevalidate == "function" ? s = true : d.push(p.route.id);
      return s && d.length > 0 && c.searchParams.set("_routes", d.join(",")), [
        c.pathname + c.search
      ];
    }, [
      u,
      n.unstable_trailingSlashAwareDataRequests,
      t,
      a,
      e
    ]);
    return x.createElement(x.Fragment, null, i.map((c) => x.createElement("link", {
      key: c,
      rel: "prefetch",
      as: "fetch",
      href: c,
      ...l
    })));
  }
  function Yg({ page: t, matches: e, ...l }) {
    let a = we(), { future: n, manifest: u, routeModules: i } = qr(), { basename: c } = Hr(), { loaderData: s, matches: d } = Ug(), p = x.useMemo(() => Df(t, e, d, u, a, "data"), [
      t,
      e,
      d,
      u,
      a
    ]), r = x.useMemo(() => Df(t, e, d, u, a, "assets"), [
      t,
      e,
      d,
      u,
      a
    ]), m = x.useMemo(() => {
      if (t === a.pathname + a.search + a.hash) return [];
      let b = /* @__PURE__ */ new Set(), g = false;
      if (e.forEach((o) => {
        var _a2;
        let h = u.routes[o.route.id];
        !h || !h.hasLoader || (!p.some((y) => y.route.id === o.route.id) && o.route.id in s && ((_a2 = i[o.route.id]) == null ? void 0 : _a2.shouldRevalidate) || h.hasClientLoader ? g = true : b.add(o.route.id));
      }), b.size === 0) return [];
      let f = a0(t, c, n.unstable_trailingSlashAwareDataRequests, "data");
      return g && b.size > 0 && f.searchParams.set("_routes", e.filter((o) => b.has(o.route.id)).map((o) => o.route.id).join(",")), [
        f.pathname + f.search
      ];
    }, [
      c,
      n.unstable_trailingSlashAwareDataRequests,
      s,
      a,
      u,
      p,
      e,
      t,
      i
    ]), v = x.useMemo(() => Og(r, u), [
      r,
      u
    ]), z = qg(r);
    return x.createElement(x.Fragment, null, m.map((b) => x.createElement("link", {
      key: b,
      rel: "prefetch",
      as: "fetch",
      href: b,
      ...l
    })), v.map((b) => x.createElement("link", {
      key: b,
      rel: "modulepreload",
      href: b,
      ...l
    })), z.map(({ key: b, link: g }) => x.createElement("link", {
      key: b,
      nonce: l.nonce,
      ...g,
      crossOrigin: g.crossOrigin ?? l.crossOrigin
    })));
  }
  function Gg(...t) {
    return (e) => {
      t.forEach((l) => {
        typeof l == "function" ? l(e) : l != null && (l.current = e);
      });
    };
  }
  var Xg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Xg && (window.__reactRouterVersion = "7.14.0");
  } catch {
  }
  function Qg({ basename: t, children: e, unstable_useTransitions: l, window: a }) {
    let n = x.useRef();
    n.current == null && (n.current = Ev({
      window: a,
      v5Compat: true
    }));
    let u = n.current, [i, c] = x.useState({
      action: u.action,
      location: u.location
    }), s = x.useCallback((d) => {
      l === false ? c(d) : x.startTransition(() => c(d));
    }, [
      l
    ]);
    return x.useLayoutEffect(() => u.listen(s), [
      u,
      s
    ]), x.createElement(gg, {
      basename: t,
      children: e,
      location: i.location,
      navigationType: i.action,
      navigator: u,
      unstable_useTransitions: l
    });
  }
  var n0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Li = x.forwardRef(function({ onClick: e, discover: l = "render", prefetch: a = "none", relative: n, reloadDocument: u, replace: i, unstable_mask: c, state: s, target: d, to: p, preventScrollReset: r, viewTransition: m, unstable_defaultShouldRevalidate: v, ...z }, b) {
    let { basename: g, navigator: f, unstable_useTransitions: o } = x.useContext(ne), h = typeof p == "string" && n0.test(p), y = Zh(p, g);
    p = y.to;
    let S = lg(p, {
      relative: n
    }), A = we(), T = null;
    if (c) {
      let lt = Hi(c, [], A.unstable_mask ? A.unstable_mask.pathname : "/", true);
      g !== "/" && (lt.pathname = lt.pathname === "/" ? g : Ne([
        g,
        lt.pathname
      ])), T = f.createHref(lt);
    }
    let [_, M, O] = Hg(a, z), D = kg(p, {
      replace: i,
      unstable_mask: c,
      state: s,
      target: d,
      preventScrollReset: r,
      relative: n,
      viewTransition: m,
      unstable_defaultShouldRevalidate: v,
      unstable_useTransitions: o
    });
    function w(lt) {
      e && e(lt), lt.defaultPrevented || D(lt);
    }
    let j = !(y.isExternal || u), G = x.createElement("a", {
      ...z,
      ...O,
      href: (j ? T : void 0) || y.absoluteURL || S,
      onClick: j ? w : e,
      ref: Gg(b, M),
      target: d,
      "data-discover": !h && l === "render" ? "true" : void 0
    });
    return _ && !h ? x.createElement(x.Fragment, null, G, x.createElement(Bg, {
      page: S
    })) : G;
  });
  Li.displayName = "Link";
  var Vg = x.forwardRef(function({ "aria-current": e = "page", caseSensitive: l = false, className: a = "", end: n = false, style: u, to: i, viewTransition: c, children: s, ...d }, p) {
    let r = tu(i, {
      relative: d.relative
    }), m = we(), v = x.useContext(Bi), { navigator: z, basename: b } = x.useContext(ne), g = v != null && Pg(r) && c === true, f = z.encodeLocation ? z.encodeLocation(r).pathname : r.pathname, o = m.pathname, h = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
    l || (o = o.toLowerCase(), h = h ? h.toLowerCase() : null, f = f.toLowerCase()), h && b && (h = tl(h, b) || h);
    const y = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let S = o === f || !n && o.startsWith(f) && o.charAt(y) === "/", A = h != null && (h === f || !n && h.startsWith(f) && h.charAt(f.length) === "/"), T = {
      isActive: S,
      isPending: A,
      isTransitioning: g
    }, _ = S ? e : void 0, M;
    typeof a == "function" ? M = a(T) : M = [
      a,
      S ? "active" : null,
      A ? "pending" : null,
      g ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let O = typeof u == "function" ? u(T) : u;
    return x.createElement(Li, {
      ...d,
      "aria-current": _,
      className: M,
      ref: p,
      style: O,
      to: i,
      viewTransition: c
    }, typeof s == "function" ? s(T) : s);
  });
  Vg.displayName = "NavLink";
  var Zg = x.forwardRef(({ discover: t = "render", fetcherKey: e, navigate: l, reloadDocument: a, replace: n, state: u, method: i = Lu, action: c, onSubmit: s, relative: d, preventScrollReset: p, viewTransition: r, unstable_defaultShouldRevalidate: m, ...v }, z) => {
    let { unstable_useTransitions: b } = x.useContext(ne), g = Wg(), f = Fg(c, {
      relative: d
    }), o = i.toLowerCase() === "get" ? "get" : "post", h = typeof c == "string" && n0.test(c), y = (S) => {
      if (s && s(S), S.defaultPrevented) return;
      S.preventDefault();
      let A = S.nativeEvent.submitter, T = (A == null ? void 0 : A.getAttribute("formmethod")) || i, _ = () => g(A || S.currentTarget, {
        fetcherKey: e,
        method: T,
        navigate: l,
        replace: n,
        state: u,
        relative: d,
        preventScrollReset: p,
        viewTransition: r,
        unstable_defaultShouldRevalidate: m
      });
      b && l !== false ? x.startTransition(() => _()) : _();
    };
    return x.createElement("form", {
      ref: z,
      method: o,
      action: f,
      onSubmit: a ? s : y,
      ...v,
      "data-discover": !h && t === "render" ? "true" : void 0
    });
  });
  Zg.displayName = "Form";
  function Kg(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function u0(t) {
    let e = x.useContext(Ja);
    return dt(e, Kg(t)), e;
  }
  function kg(t, { target: e, replace: l, unstable_mask: a, state: n, preventScrollReset: u, relative: i, viewTransition: c, unstable_defaultShouldRevalidate: s, unstable_useTransitions: d } = {}) {
    let p = Ph(), r = we(), m = tu(t, {
      relative: i
    });
    return x.useCallback((v) => {
      if (zg(v, e)) {
        v.preventDefault();
        let z = l !== void 0 ? l : Yn(r) === Yn(m), b = () => p(t, {
          replace: z,
          unstable_mask: a,
          state: n,
          preventScrollReset: u,
          relative: i,
          viewTransition: c,
          unstable_defaultShouldRevalidate: s
        });
        d ? x.startTransition(() => b()) : b();
      }
    }, [
      r,
      p,
      m,
      l,
      a,
      n,
      e,
      t,
      u,
      i,
      c,
      s,
      d
    ]);
  }
  var Jg = 0, $g = () => `__${String(++Jg)}__`;
  function Wg() {
    let { router: t } = u0("useSubmit"), { basename: e } = x.useContext(ne), l = hg(), a = t.fetch, n = t.navigate;
    return x.useCallback(async (u, i = {}) => {
      let { action: c, method: s, encType: d, formData: p, body: r } = Rg(u, e);
      if (i.navigate === false) {
        let m = i.fetcherKey || $g();
        await a(m, l, i.action || c, {
          unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: p,
          body: r,
          formMethod: i.method || s,
          formEncType: i.encType || d,
          flushSync: i.flushSync
        });
      } else await n(i.action || c, {
        unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
        preventScrollReset: i.preventScrollReset,
        formData: p,
        body: r,
        formMethod: i.method || s,
        formEncType: i.encType || d,
        replace: i.replace,
        state: i.state,
        fromRouteId: l,
        flushSync: i.flushSync,
        viewTransition: i.viewTransition
      });
    }, [
      a,
      n,
      e,
      l
    ]);
  }
  function Fg(t, { relative: e } = {}) {
    let { basename: l } = x.useContext(ne), a = x.useContext(ze);
    dt(a, "useFormAction must be used inside a RouteContext");
    let [n] = a.matches.slice(-1), u = {
      ...tu(t || ".", {
        relative: e
      })
    }, i = we();
    if (t == null) {
      u.search = i.search;
      let c = new URLSearchParams(u.search), s = c.getAll("index");
      if (s.some((p) => p === "")) {
        c.delete("index"), s.filter((r) => r).forEach((r) => c.append("index", r));
        let p = c.toString();
        u.search = p ? `?${p}` : "";
      }
    }
    return (!t || t === ".") && n.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (u.pathname = u.pathname === "/" ? l : Ne([
      l,
      u.pathname
    ])), Yn(u);
  }
  function Pg(t, { relative: e } = {}) {
    let l = x.useContext(Jh);
    dt(l != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: a } = u0("useViewTransitionState"), n = tu(t, {
      relative: e
    });
    if (!l.isTransitioning) return false;
    let u = tl(l.currentLocation.pathname, a) || l.currentLocation.pathname, i = tl(l.nextLocation.pathname, a) || l.nextLocation.pathname;
    return pi(n.pathname, i) != null || pi(n.pathname, u) != null;
  }
  let Ig, wf, i0, t1, Lr, e1, l1, a1, n1, u1, i1, c1, Cc;
  Ig = (t, e, l, a, n, u, i, c) => {
    let s = document.documentElement, d = [
      "light",
      "dark"
    ];
    function p(v) {
      (Array.isArray(t) ? t : [
        t
      ]).forEach((z) => {
        let b = z === "class", g = b && u ? n.map((f) => u[f] || f) : n;
        b ? (s.classList.remove(...g), s.classList.add(u && u[v] ? u[v] : v)) : s.setAttribute(z, v);
      }), r(v);
    }
    function r(v) {
      c && d.includes(v) && (s.style.colorScheme = v);
    }
    function m() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (a) p(a);
    else try {
      let v = localStorage.getItem(e) || l, z = i && v === "system" ? m() : v;
      p(z);
    } catch {
    }
  };
  wf = [
    "light",
    "dark"
  ];
  i0 = "(prefers-color-scheme: dark)";
  t1 = typeof window > "u";
  Lr = x.createContext(void 0);
  e1 = {
    setTheme: (t) => {
    },
    themes: []
  };
  W1 = () => {
    var t;
    return (t = x.useContext(Lr)) != null ? t : e1;
  };
  l1 = (t) => x.useContext(Lr) ? x.createElement(x.Fragment, null, t.children) : x.createElement(n1, {
    ...t
  });
  a1 = [
    "light",
    "dark"
  ];
  n1 = ({ forcedTheme: t, disableTransitionOnChange: e = false, enableSystem: l = true, enableColorScheme: a = true, storageKey: n = "theme", themes: u = a1, defaultTheme: i = l ? "system" : "light", attribute: c = "data-theme", value: s, children: d, nonce: p, scriptProps: r }) => {
    let [m, v] = x.useState(() => i1(n, i)), [z, b] = x.useState(() => m === "system" ? Cc() : m), g = s ? Object.values(s) : u, f = x.useCallback((S) => {
      let A = S;
      if (!A) return;
      S === "system" && l && (A = Cc());
      let T = s ? s[A] : A, _ = e ? c1(p) : null, M = document.documentElement, O = (D) => {
        D === "class" ? (M.classList.remove(...g), T && M.classList.add(T)) : D.startsWith("data-") && (T ? M.setAttribute(D, T) : M.removeAttribute(D));
      };
      if (Array.isArray(c) ? c.forEach(O) : O(c), a) {
        let D = wf.includes(i) ? i : null, w = wf.includes(A) ? A : D;
        M.style.colorScheme = w;
      }
      _ == null ? void 0 : _();
    }, [
      p
    ]), o = x.useCallback((S) => {
      let A = typeof S == "function" ? S(m) : S;
      v(A);
      try {
        localStorage.setItem(n, A);
      } catch {
      }
    }, [
      m
    ]), h = x.useCallback((S) => {
      let A = Cc(S);
      b(A), m === "system" && l && !t && f("system");
    }, [
      m,
      t
    ]);
    x.useEffect(() => {
      let S = window.matchMedia(i0);
      return S.addListener(h), h(S), () => S.removeListener(h);
    }, [
      h
    ]), x.useEffect(() => {
      let S = (A) => {
        A.key === n && (A.newValue ? v(A.newValue) : o(i));
      };
      return window.addEventListener("storage", S), () => window.removeEventListener("storage", S);
    }, [
      o
    ]), x.useEffect(() => {
      f(t ?? m);
    }, [
      t,
      m
    ]);
    let y = x.useMemo(() => ({
      theme: m,
      setTheme: o,
      forcedTheme: t,
      resolvedTheme: m === "system" ? z : m,
      themes: l ? [
        ...u,
        "system"
      ] : u,
      systemTheme: l ? z : void 0
    }), [
      m,
      o,
      t,
      z,
      l,
      u
    ]);
    return x.createElement(Lr.Provider, {
      value: y
    }, x.createElement(u1, {
      forcedTheme: t,
      storageKey: n,
      attribute: c,
      enableSystem: l,
      enableColorScheme: a,
      defaultTheme: i,
      value: s,
      themes: u,
      nonce: p,
      scriptProps: r
    }), d);
  };
  u1 = x.memo(({ forcedTheme: t, storageKey: e, attribute: l, enableSystem: a, enableColorScheme: n, defaultTheme: u, value: i, themes: c, nonce: s, scriptProps: d }) => {
    let p = JSON.stringify([
      l,
      e,
      u,
      t,
      c,
      i,
      a,
      n
    ]).slice(1, -1);
    return x.createElement("script", {
      ...d,
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
      dangerouslySetInnerHTML: {
        __html: `(${Ig.toString()})(${p})`
      }
    });
  });
  i1 = (t, e) => {
    if (t1) return;
    let l;
    try {
      l = localStorage.getItem(t) || void 0;
    } catch {
    }
    return l || e;
  };
  c1 = (t) => {
    let e = document.createElement("style");
    return t && e.setAttribute("nonce", t), e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(e);
      }, 1);
    };
  };
  Cc = (t) => (t || (t = window.matchMedia(i0)), t.matches ? "dark" : "light");
  function s1(t) {
    if (typeof document > "u") return;
    let e = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
    l.type = "text/css", e.appendChild(l), l.styleSheet ? l.styleSheet.cssText = t : l.appendChild(document.createTextNode(t));
  }
  const r1 = (t) => {
    switch (t) {
      case "success":
        return d1;
      case "info":
        return h1;
      case "warning":
        return m1;
      case "error":
        return y1;
      default:
        return null;
    }
  }, o1 = Array(12).fill(0), f1 = ({ visible: t, className: e }) => N.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, N.createElement("div", {
    className: "sonner-spinner"
  }, o1.map((l, a) => N.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${a}`
  })))), d1 = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, N.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), m1 = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, N.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), h1 = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), y1 = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, N.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), p1 = N.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, N.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), N.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), v1 = () => {
    const [t, e] = N.useState(document.hidden);
    return N.useEffect(() => {
      const l = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", l), () => window.removeEventListener("visibilitychange", l);
    }, []), t;
  };
  let Cs = 1;
  class g1 {
    constructor() {
      this.subscribe = (e) => (this.subscribers.push(e), () => {
        const l = this.subscribers.indexOf(e);
        this.subscribers.splice(l, 1);
      }), this.publish = (e) => {
        this.subscribers.forEach((l) => l(e));
      }, this.addToast = (e) => {
        this.publish(e), this.toasts = [
          ...this.toasts,
          e
        ];
      }, this.create = (e) => {
        var l;
        const { message: a, ...n } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((l = e.id) == null ? void 0 : l.length) > 0 ? e.id : Cs++, i = this.toasts.find((s) => s.id === u), c = e.dismissible === void 0 ? true : e.dismissible;
        return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), i ? this.toasts = this.toasts.map((s) => s.id === u ? (this.publish({
          ...s,
          ...e,
          id: u,
          title: a
        }), {
          ...s,
          ...e,
          id: u,
          dismissible: c,
          title: a
        }) : s) : this.addToast({
          title: a,
          ...n,
          dismissible: c,
          id: u
        }), u;
      }, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((l) => l({
        id: e,
        dismiss: true
      })))) : this.toasts.forEach((l) => {
        this.subscribers.forEach((a) => a({
          id: l.id,
          dismiss: true
        }));
      }), e), this.message = (e, l) => this.create({
        ...l,
        message: e
      }), this.error = (e, l) => this.create({
        ...l,
        message: e,
        type: "error"
      }), this.success = (e, l) => this.create({
        ...l,
        type: "success",
        message: e
      }), this.info = (e, l) => this.create({
        ...l,
        type: "info",
        message: e
      }), this.warning = (e, l) => this.create({
        ...l,
        type: "warning",
        message: e
      }), this.loading = (e, l) => this.create({
        ...l,
        type: "loading",
        message: e
      }), this.promise = (e, l) => {
        if (!l) return;
        let a;
        l.loading !== void 0 && (a = this.create({
          ...l,
          promise: e,
          type: "loading",
          message: l.loading,
          description: typeof l.description != "function" ? l.description : void 0
        }));
        const n = Promise.resolve(e instanceof Function ? e() : e);
        let u = a !== void 0, i;
        const c = n.then(async (d) => {
          if (i = [
            "resolve",
            d
          ], N.isValidElement(d)) u = false, this.create({
            id: a,
            type: "default",
            message: d
          });
          else if (S1(d) && !d.ok) {
            u = false;
            const r = typeof l.error == "function" ? await l.error(`HTTP error! status: ${d.status}`) : l.error, m = typeof l.description == "function" ? await l.description(`HTTP error! status: ${d.status}`) : l.description, z = typeof r == "object" && !N.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "error",
              description: m,
              ...z
            });
          } else if (d instanceof Error) {
            u = false;
            const r = typeof l.error == "function" ? await l.error(d) : l.error, m = typeof l.description == "function" ? await l.description(d) : l.description, z = typeof r == "object" && !N.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "error",
              description: m,
              ...z
            });
          } else if (l.success !== void 0) {
            u = false;
            const r = typeof l.success == "function" ? await l.success(d) : l.success, m = typeof l.description == "function" ? await l.description(d) : l.description, z = typeof r == "object" && !N.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "success",
              description: m,
              ...z
            });
          }
        }).catch(async (d) => {
          if (i = [
            "reject",
            d
          ], l.error !== void 0) {
            u = false;
            const p = typeof l.error == "function" ? await l.error(d) : l.error, r = typeof l.description == "function" ? await l.description(d) : l.description, v = typeof p == "object" && !N.isValidElement(p) ? p : {
              message: p
            };
            this.create({
              id: a,
              type: "error",
              description: r,
              ...v
            });
          }
        }).finally(() => {
          u && (this.dismiss(a), a = void 0), l.finally == null || l.finally.call(l);
        }), s = () => new Promise((d, p) => c.then(() => i[0] === "reject" ? p(i[1]) : d(i[1])).catch(p));
        return typeof a != "string" && typeof a != "number" ? {
          unwrap: s
        } : Object.assign(a, {
          unwrap: s
        });
      }, this.custom = (e, l) => {
        const a = (l == null ? void 0 : l.id) || Cs++;
        return this.create({
          jsx: e(a),
          id: a,
          ...l
        }), a;
      }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Xt, b1, S1, x1, E1, T1;
  Xt = new g1();
  b1 = (t, e) => {
    const l = (e == null ? void 0 : e.id) || Cs++;
    return Xt.addToast({
      title: t,
      ...e,
      id: l
    }), l;
  };
  S1 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
  x1 = b1;
  E1 = () => Xt.toasts;
  T1 = () => Xt.getActiveToasts();
  F1 = Object.assign(x1, {
    success: Xt.success,
    info: Xt.info,
    warning: Xt.warning,
    error: Xt.error,
    custom: Xt.custom,
    message: Xt.message,
    promise: Xt.promise,
    dismiss: Xt.dismiss,
    loading: Xt.loading
  }, {
    getHistory: E1,
    getToasts: T1
  });
  s1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function Tu(t) {
    return t.label !== void 0;
  }
  const z1 = 3, _1 = "24px", A1 = "16px", jf = 4e3, R1 = 356, M1 = 14, C1 = 45, N1 = 200;
  function _e(...t) {
    return t.filter(Boolean).join(" ");
  }
  function O1(t) {
    const [e, l] = t.split("-"), a = [];
    return e && a.push(e), l && a.push(l), a;
  }
  const D1 = (t) => {
    var e, l, a, n, u, i, c, s, d;
    const { invert: p, toast: r, unstyled: m, interacting: v, setHeights: z, visibleToasts: b, heights: g, index: f, toasts: o, expanded: h, removeToast: y, defaultRichColors: S, closeButton: A, style: T, cancelButtonStyle: _, actionButtonStyle: M, className: O = "", descriptionClassName: D = "", duration: w, position: j, gap: G, expandByDefault: lt, classNames: C, icons: U, closeButtonAriaLabel: B = "Close toast" } = t, [W, $] = N.useState(null), [ue, je] = N.useState(null), [X, F] = N.useState(false), [at, ie] = N.useState(false), [Pl, ot] = N.useState(false), [Il, eu] = N.useState(false), [lu, ta] = N.useState(false), [o0, Yi] = N.useState(0), [f0, Yr] = N.useState(0), Wa = N.useRef(r.duration || w || jf), Gr = N.useRef(null), Ue = N.useRef(null), d0 = f === 0, m0 = f + 1 <= b, Kt = r.type, ea = r.dismissible !== false, h0 = r.className || "", y0 = r.descriptionClassName || "", au = N.useMemo(() => g.findIndex((Y) => Y.toastId === r.id) || 0, [
      g,
      r.id
    ]), p0 = N.useMemo(() => {
      var Y;
      return (Y = r.closeButton) != null ? Y : A;
    }, [
      r.closeButton,
      A
    ]), Xr = N.useMemo(() => r.duration || w || jf, [
      r.duration,
      w
    ]), Gi = N.useRef(0), la = N.useRef(0), Qr = N.useRef(0), aa = N.useRef(null), [v0, g0] = j.split("-"), Vr = N.useMemo(() => g.reduce((Y, Tt, wt) => wt >= au ? Y : Y + Tt.height, 0), [
      g,
      au
    ]), Zr = v1(), b0 = r.invert || p, Xi = Kt === "loading";
    la.current = N.useMemo(() => au * G + Vr, [
      au,
      Vr
    ]), N.useEffect(() => {
      Wa.current = Xr;
    }, [
      Xr
    ]), N.useEffect(() => {
      F(true);
    }, []), N.useEffect(() => {
      const Y = Ue.current;
      if (Y) {
        const Tt = Y.getBoundingClientRect().height;
        return Yr(Tt), z((wt) => [
          {
            toastId: r.id,
            height: Tt,
            position: r.position
          },
          ...wt
        ]), () => z((wt) => wt.filter((kt) => kt.toastId !== r.id));
      }
    }, [
      z,
      r.id
    ]), N.useLayoutEffect(() => {
      if (!X) return;
      const Y = Ue.current, Tt = Y.style.height;
      Y.style.height = "auto";
      const wt = Y.getBoundingClientRect().height;
      Y.style.height = Tt, Yr(wt), z((kt) => kt.find((Rt) => Rt.toastId === r.id) ? kt.map((Rt) => Rt.toastId === r.id ? {
        ...Rt,
        height: wt
      } : Rt) : [
        {
          toastId: r.id,
          height: wt,
          position: r.position
        },
        ...kt
      ]);
    }, [
      X,
      r.title,
      r.description,
      z,
      r.id,
      r.jsx,
      r.action,
      r.cancel
    ]);
    const ll = N.useCallback(() => {
      ie(true), Yi(la.current), z((Y) => Y.filter((Tt) => Tt.toastId !== r.id)), setTimeout(() => {
        y(r);
      }, N1);
    }, [
      r,
      y,
      z,
      la
    ]);
    N.useEffect(() => {
      if (r.promise && Kt === "loading" || r.duration === 1 / 0 || r.type === "loading") return;
      let Y;
      return h || v || Zr ? (() => {
        if (Qr.current < Gi.current) {
          const kt = (/* @__PURE__ */ new Date()).getTime() - Gi.current;
          Wa.current = Wa.current - kt;
        }
        Qr.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        Wa.current !== 1 / 0 && (Gi.current = (/* @__PURE__ */ new Date()).getTime(), Y = setTimeout(() => {
          r.onAutoClose == null || r.onAutoClose.call(r, r), ll();
        }, Wa.current));
      })(), () => clearTimeout(Y);
    }, [
      h,
      v,
      r,
      Kt,
      Zr,
      ll
    ]), N.useEffect(() => {
      r.delete && (ll(), r.onDismiss == null || r.onDismiss.call(r, r));
    }, [
      ll,
      r.delete
    ]);
    function S0() {
      var Y;
      if (U == null ? void 0 : U.loading) {
        var Tt;
        return N.createElement("div", {
          className: _e(C == null ? void 0 : C.loader, r == null || (Tt = r.classNames) == null ? void 0 : Tt.loader, "sonner-loader"),
          "data-visible": Kt === "loading"
        }, U.loading);
      }
      return N.createElement(f1, {
        className: _e(C == null ? void 0 : C.loader, r == null || (Y = r.classNames) == null ? void 0 : Y.loader),
        visible: Kt === "loading"
      });
    }
    const x0 = r.icon || (U == null ? void 0 : U[Kt]) || r1(Kt);
    var Kr, kr;
    return N.createElement("li", {
      tabIndex: 0,
      ref: Ue,
      className: _e(O, h0, C == null ? void 0 : C.toast, r == null || (e = r.classNames) == null ? void 0 : e.toast, C == null ? void 0 : C.default, C == null ? void 0 : C[Kt], r == null || (l = r.classNames) == null ? void 0 : l[Kt]),
      "data-sonner-toast": "",
      "data-rich-colors": (Kr = r.richColors) != null ? Kr : S,
      "data-styled": !(r.jsx || r.unstyled || m),
      "data-mounted": X,
      "data-promise": !!r.promise,
      "data-swiped": lu,
      "data-removed": at,
      "data-visible": m0,
      "data-y-position": v0,
      "data-x-position": g0,
      "data-index": f,
      "data-front": d0,
      "data-swiping": Pl,
      "data-dismissible": ea,
      "data-type": Kt,
      "data-invert": b0,
      "data-swipe-out": Il,
      "data-swipe-direction": ue,
      "data-expanded": !!(h || lt && X),
      "data-testid": r.testId,
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": o.length - f,
        "--offset": `${at ? o0 : la.current}px`,
        "--initial-height": lt ? "auto" : `${f0}px`,
        ...T,
        ...r.style
      },
      onDragEnd: () => {
        ot(false), $(null), aa.current = null;
      },
      onPointerDown: (Y) => {
        Y.button !== 2 && (Xi || !ea || (Gr.current = /* @__PURE__ */ new Date(), Yi(la.current), Y.target.setPointerCapture(Y.pointerId), Y.target.tagName !== "BUTTON" && (ot(true), aa.current = {
          x: Y.clientX,
          y: Y.clientY
        })));
      },
      onPointerUp: () => {
        var Y, Tt, wt;
        if (Il || !ea) return;
        aa.current = null;
        const kt = Number(((Y = Ue.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), nu = Number(((Tt = Ue.current) == null ? void 0 : Tt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Rt = (/* @__PURE__ */ new Date()).getTime() - ((wt = Gr.current) == null ? void 0 : wt.getTime()), ce = W === "x" ? kt : nu, uu = Math.abs(ce) / Rt;
        if (Math.abs(ce) >= C1 || uu > 0.11) {
          Yi(la.current), r.onDismiss == null || r.onDismiss.call(r, r), je(W === "x" ? kt > 0 ? "right" : "left" : nu > 0 ? "down" : "up"), ll(), eu(true);
          return;
        } else {
          var ge, be;
          (ge = Ue.current) == null || ge.style.setProperty("--swipe-amount-x", "0px"), (be = Ue.current) == null || be.style.setProperty("--swipe-amount-y", "0px");
        }
        ta(false), ot(false), $(null);
      },
      onPointerMove: (Y) => {
        var Tt, wt, kt;
        if (!aa.current || !ea || ((Tt = window.getSelection()) == null ? void 0 : Tt.toString().length) > 0) return;
        const Rt = Y.clientY - aa.current.y, ce = Y.clientX - aa.current.x;
        var uu;
        const ge = (uu = t.swipeDirections) != null ? uu : O1(j);
        !W && (Math.abs(ce) > 1 || Math.abs(Rt) > 1) && $(Math.abs(ce) > Math.abs(Rt) ? "x" : "y");
        let be = {
          x: 0,
          y: 0
        };
        const Jr = (Ol) => 1 / (1.5 + Math.abs(Ol) / 20);
        if (W === "y") {
          if (ge.includes("top") || ge.includes("bottom")) if (ge.includes("top") && Rt < 0 || ge.includes("bottom") && Rt > 0) be.y = Rt;
          else {
            const Ol = Rt * Jr(Rt);
            be.y = Math.abs(Ol) < Math.abs(Rt) ? Ol : Rt;
          }
        } else if (W === "x" && (ge.includes("left") || ge.includes("right"))) if (ge.includes("left") && ce < 0 || ge.includes("right") && ce > 0) be.x = ce;
        else {
          const Ol = ce * Jr(ce);
          be.x = Math.abs(Ol) < Math.abs(ce) ? Ol : ce;
        }
        (Math.abs(be.x) > 0 || Math.abs(be.y) > 0) && ta(true), (wt = Ue.current) == null || wt.style.setProperty("--swipe-amount-x", `${be.x}px`), (kt = Ue.current) == null || kt.style.setProperty("--swipe-amount-y", `${be.y}px`);
      }
    }, p0 && !r.jsx && Kt !== "loading" ? N.createElement("button", {
      "aria-label": B,
      "data-disabled": Xi,
      "data-close-button": true,
      onClick: Xi || !ea ? () => {
      } : () => {
        ll(), r.onDismiss == null || r.onDismiss.call(r, r);
      },
      className: _e(C == null ? void 0 : C.closeButton, r == null || (a = r.classNames) == null ? void 0 : a.closeButton)
    }, (kr = U == null ? void 0 : U.close) != null ? kr : p1) : null, (Kt || r.icon || r.promise) && r.icon !== null && ((U == null ? void 0 : U[Kt]) !== null || r.icon) ? N.createElement("div", {
      "data-icon": "",
      className: _e(C == null ? void 0 : C.icon, r == null || (n = r.classNames) == null ? void 0 : n.icon)
    }, r.promise || r.type === "loading" && !r.icon ? r.icon || S0() : null, r.type !== "loading" ? x0 : null) : null, N.createElement("div", {
      "data-content": "",
      className: _e(C == null ? void 0 : C.content, r == null || (u = r.classNames) == null ? void 0 : u.content)
    }, N.createElement("div", {
      "data-title": "",
      className: _e(C == null ? void 0 : C.title, r == null || (i = r.classNames) == null ? void 0 : i.title)
    }, r.jsx ? r.jsx : typeof r.title == "function" ? r.title() : r.title), r.description ? N.createElement("div", {
      "data-description": "",
      className: _e(D, y0, C == null ? void 0 : C.description, r == null || (c = r.classNames) == null ? void 0 : c.description)
    }, typeof r.description == "function" ? r.description() : r.description) : null), N.isValidElement(r.cancel) ? r.cancel : r.cancel && Tu(r.cancel) ? N.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: r.cancelButtonStyle || _,
      onClick: (Y) => {
        Tu(r.cancel) && ea && (r.cancel.onClick == null || r.cancel.onClick.call(r.cancel, Y), ll());
      },
      className: _e(C == null ? void 0 : C.cancelButton, r == null || (s = r.classNames) == null ? void 0 : s.cancelButton)
    }, r.cancel.label) : null, N.isValidElement(r.action) ? r.action : r.action && Tu(r.action) ? N.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: r.actionButtonStyle || M,
      onClick: (Y) => {
        Tu(r.action) && (r.action.onClick == null || r.action.onClick.call(r.action, Y), !Y.defaultPrevented && ll());
      },
      className: _e(C == null ? void 0 : C.actionButton, r == null || (d = r.classNames) == null ? void 0 : d.actionButton)
    }, r.action.label) : null);
  };
  function Uf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function w1(t, e) {
    const l = {};
    return [
      t,
      e
    ].forEach((a, n) => {
      const u = n === 1, i = u ? "--mobile-offset" : "--offset", c = u ? A1 : _1;
      function s(d) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((p) => {
          l[`${i}-${p}`] = typeof d == "number" ? `${d}px` : d;
        });
      }
      typeof a == "number" || typeof a == "string" ? s(a) : typeof a == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((d) => {
        a[d] === void 0 ? l[`${i}-${d}`] = c : l[`${i}-${d}`] = typeof a[d] == "number" ? `${a[d]}px` : a[d];
      }) : s(c);
    }), l;
  }
  const j1 = N.forwardRef(function(e, l) {
    const { id: a, invert: n, position: u = "bottom-right", hotkey: i = [
      "altKey",
      "KeyT"
    ], expand: c, closeButton: s, className: d, offset: p, mobileOffset: r, theme: m = "light", richColors: v, duration: z, style: b, visibleToasts: g = z1, toastOptions: f, dir: o = Uf(), gap: h = M1, icons: y, containerAriaLabel: S = "Notifications" } = e, [A, T] = N.useState([]), _ = N.useMemo(() => a ? A.filter((X) => X.toasterId === a) : A.filter((X) => !X.toasterId), [
      A,
      a
    ]), M = N.useMemo(() => Array.from(new Set([
      u
    ].concat(_.filter((X) => X.position).map((X) => X.position)))), [
      _,
      u
    ]), [O, D] = N.useState([]), [w, j] = N.useState(false), [G, lt] = N.useState(false), [C, U] = N.useState(m !== "system" ? m : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = N.useRef(null), W = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = N.useRef(null), ue = N.useRef(false), je = N.useCallback((X) => {
      T((F) => {
        var at;
        return (at = F.find((ie) => ie.id === X.id)) != null && at.delete || Xt.dismiss(X.id), F.filter(({ id: ie }) => ie !== X.id);
      });
    }, []);
    return N.useEffect(() => Xt.subscribe((X) => {
      if (X.dismiss) {
        requestAnimationFrame(() => {
          T((F) => F.map((at) => at.id === X.id ? {
            ...at,
            delete: true
          } : at));
        });
        return;
      }
      setTimeout(() => {
        Z0.flushSync(() => {
          T((F) => {
            const at = F.findIndex((ie) => ie.id === X.id);
            return at !== -1 ? [
              ...F.slice(0, at),
              {
                ...F[at],
                ...X
              },
              ...F.slice(at + 1)
            ] : [
              X,
              ...F
            ];
          });
        });
      });
    }), [
      A
    ]), N.useEffect(() => {
      if (m !== "system") {
        U(m);
        return;
      }
      if (m === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")), typeof window > "u") return;
      const X = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        X.addEventListener("change", ({ matches: F }) => {
          U(F ? "dark" : "light");
        });
      } catch {
        X.addListener(({ matches: at }) => {
          try {
            U(at ? "dark" : "light");
          } catch (ie) {
            console.error(ie);
          }
        });
      }
    }, [
      m
    ]), N.useEffect(() => {
      A.length <= 1 && j(false);
    }, [
      A
    ]), N.useEffect(() => {
      const X = (F) => {
        var at;
        if (i.every((ot) => F[ot] || F.code === ot)) {
          var Pl;
          j(true), (Pl = B.current) == null || Pl.focus();
        }
        F.code === "Escape" && (document.activeElement === B.current || (at = B.current) != null && at.contains(document.activeElement)) && j(false);
      };
      return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
    }, [
      i
    ]), N.useEffect(() => {
      if (B.current) return () => {
        $.current && ($.current.focus({
          preventScroll: true
        }), $.current = null, ue.current = false);
      };
    }, [
      B.current
    ]), N.createElement("section", {
      ref: l,
      "aria-label": `${S} ${W}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, M.map((X, F) => {
      var at;
      const [ie, Pl] = X.split("-");
      return _.length ? N.createElement("ol", {
        key: X,
        dir: o === "auto" ? Uf() : o,
        tabIndex: -1,
        ref: B,
        className: d,
        "data-sonner-toaster": true,
        "data-sonner-theme": C,
        "data-y-position": ie,
        "data-x-position": Pl,
        style: {
          "--front-toast-height": `${((at = O[0]) == null ? void 0 : at.height) || 0}px`,
          "--width": `${R1}px`,
          "--gap": `${h}px`,
          ...b,
          ...w1(p, r)
        },
        onBlur: (ot) => {
          ue.current && !ot.currentTarget.contains(ot.relatedTarget) && (ue.current = false, $.current && ($.current.focus({
            preventScroll: true
          }), $.current = null));
        },
        onFocus: (ot) => {
          ot.target instanceof HTMLElement && ot.target.dataset.dismissible === "false" || ue.current || (ue.current = true, $.current = ot.relatedTarget);
        },
        onMouseEnter: () => j(true),
        onMouseMove: () => j(true),
        onMouseLeave: () => {
          G || j(false);
        },
        onDragEnd: () => j(false),
        onPointerDown: (ot) => {
          ot.target instanceof HTMLElement && ot.target.dataset.dismissible === "false" || lt(true);
        },
        onPointerUp: () => lt(false)
      }, _.filter((ot) => !ot.position && F === 0 || ot.position === X).map((ot, Il) => {
        var eu, lu;
        return N.createElement(D1, {
          key: ot.id,
          icons: y,
          index: Il,
          toast: ot,
          defaultRichColors: v,
          duration: (eu = f == null ? void 0 : f.duration) != null ? eu : z,
          className: f == null ? void 0 : f.className,
          descriptionClassName: f == null ? void 0 : f.descriptionClassName,
          invert: n,
          visibleToasts: g,
          closeButton: (lu = f == null ? void 0 : f.closeButton) != null ? lu : s,
          interacting: G,
          position: X,
          style: f == null ? void 0 : f.style,
          unstyled: f == null ? void 0 : f.unstyled,
          classNames: f == null ? void 0 : f.classNames,
          cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
          actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
          closeButtonAriaLabel: f == null ? void 0 : f.closeButtonAriaLabel,
          removeToast: je,
          toasts: _.filter((ta) => ta.position == ot.position),
          heights: O.filter((ta) => ta.position == ot.position),
          setHeights: D,
          expandByDefault: c,
          gap: h,
          expanded: w,
          swipeDirections: e.swipeDirections
        });
      })) : null;
    }));
  });
  function c0({ to: t = "/", label: e = "Back to hub" }) {
    return E.jsx(Li, {
      to: t,
      className: "floating-back",
      "aria-label": e,
      title: e,
      children: E.jsx("span", {
        className: "floating-back__glyph",
        "aria-hidden": true,
        children: "\u2190"
      })
    });
  }
  function un({ title: t, children: e }) {
    return E.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        E.jsx(c0, {
          label: `Back to hub \u2014 ${t}`
        }),
        E.jsx("div", {
          className: "iframe-stage iframe-stage--react",
          children: e
        })
      ]
    });
  }
  const s0 = [
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
      id: "motherload",
      title: "Motherload",
      kind: "react",
      path: "/motherload"
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
      title: "MindSweeper",
      kind: "iframe",
      href: "/games/minesweeper/index.html"
    },
    {
      id: "multiplayer",
      title: "Multiplayer games",
      kind: "react",
      path: "/multiplayer"
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
  ], Hf = [
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
  function U1() {
    return E.jsx("div", {
      className: "app-root app-root--home hub-page",
      children: E.jsxs("div", {
        className: "hub",
        children: [
          E.jsxs("header", {
            className: "hub__header",
            children: [
              E.jsx("h1", {
                className: "hub__title hub__title--pixel",
                children: "WEB DEV EXPERIMENTS"
              }),
              E.jsx("p", {
                className: "hub__subtitle hub__subtitle--pixel",
                children: "CLIENT ONLY, STATIC WEBPAGE FOR HTML, JS, REACT IDEAS"
              })
            ]
          }),
          E.jsx("div", {
            className: "hub__grid",
            children: s0.map((t, e) => E.jsx(Li, {
              to: t.kind === "iframe" ? `/play/${t.id}` : t.path,
              className: `hub-card ${Hf[e % Hf.length]}`,
              children: E.jsx("span", {
                className: "hub-card__title",
                children: t.title.toUpperCase()
              })
            }, t.id))
          }),
          E.jsxs("p", {
            className: "hub__repo hub__repo--pixel",
            children: [
              "PUBLIC REPO \u2014",
              " ",
              E.jsx("a", {
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
  function H1() {
    const { id: t } = ng(), e = s0.find((l) => l.id === t && l.kind === "iframe");
    return !e || e.kind !== "iframe" ? E.jsx(l0, {
      to: "/",
      replace: true
    }) : E.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        E.jsx(c0, {
          label: `Back to hub \u2014 ${e.title}`
        }),
        E.jsx("div", {
          className: "iframe-stage",
          children: E.jsx("iframe", {
            className: "game-frame",
            src: e.href,
            title: e.title
          })
        })
      ]
    });
  }
  const r0 = ({ board: t, selectedSquare: e, possibleMoves: l, onSquareClick: a, sideImagesWidth: n = 0, isSidebarOpen: u = true }) => {
    const [i, c] = x.useState(64), s = () => {
      if (typeof window < "u") {
        const f = window.innerHeight * 0.98, o = u ? 384 : 0, h = n || 0, y = (window.innerWidth - o - h) * 0.98, S = Math.min(f, y);
        return Math.floor(S / 8);
      }
      return 64;
    };
    x.useEffect(() => {
      const f = () => {
        c(s());
      };
      return f(), window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
    }, [
      u,
      n
    ]);
    const d = (f) => {
      if (!f) return {};
      const o = {
        pawn: 0,
        knight: 1,
        queen: 2,
        king: 3,
        bishop: 4,
        rook: 5
      }, h = 16, y = 2, S = 8, A = h * y, T = h * S, _ = i / h, O = (f.color === "white" ? 0 : 1) * h, D = o[f.type] * h;
      return {
        backgroundImage: "url(/games/chess/chess-cat.png)",
        backgroundPosition: `${-O * _}px ${-D * _}px`,
        backgroundSize: `${A * _}px ${T * _}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%"
      };
    }, p = (f, o) => e && e.row === f && e.col === o, r = (f, o) => l.some((h) => h.row === f && h.col === o), m = (f, o) => {
      const h = (f + o) % 2 === 0;
      let y = "flex items-center justify-center cursor-pointer relative ";
      return h ? y += "bg-gray-300 " : y += "bg-gray-800 ", p(f, o) && (y += "ring-4 ring-blue-500 ring-inset "), r(f, o) && (y += "ring-2 ring-green-400 ring-inset "), y;
    }, v = () => ({
      width: `${i}px`,
      height: `${i}px`
    }), z = (f, o) => {
      const h = t[f][o], y = r(f, o);
      return E.jsxs("div", {
        className: m(f, o),
        style: v(),
        onClick: () => a(f, o),
        children: [
          h && E.jsx("div", {
            className: "absolute inset-0 z-10 select-none pointer-events-none",
            style: d(h)
          }),
          y && !h && E.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: E.jsx("div", {
              className: "w-4 h-4 bg-green-500 rounded-full opacity-60"
            })
          }),
          y && h && E.jsx("div", {
            className: "absolute inset-0 border-4 border-red-500 rounded pointer-events-none"
          })
        ]
      }, `${f}-${o}`);
    }, b = (f) => {
      const o = [];
      for (let h = 0; h < 8; h++) o.push(z(f, h));
      return E.jsx("div", {
        className: "flex",
        children: o
      }, f);
    }, g = () => {
      const f = [];
      for (let o = 0; o < 8; o++) f.push(b(o));
      return f;
    };
    return E.jsx("div", {
      className: "h-full w-full flex justify-center items-center overflow-visible",
      children: E.jsx("div", {
        className: "border-8 border-gray-700 shadow-2xl",
        style: {
          boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.2)"
        },
        children: E.jsx("div", {
          className: "flex flex-col",
          children: g()
        })
      })
    });
  }, B1 = () => {
    const [t, e] = x.useState({
      board: c(),
      currentPlayer: "white",
      selectedSquare: null,
      possibleMoves: [],
      gameStatus: "playing",
      capturedPieces: {
        white: [],
        black: []
      },
      moveHistory: [],
      pendingPromotion: null
    }), [l, a] = x.useState(false), n = 360, i = n * 2 + 24 * 2;
    function c() {
      const y = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let A = 0; A < 8; A++) y[1][A] = {
        type: "pawn",
        color: "black"
      }, y[6][A] = {
        type: "pawn",
        color: "white"
      };
      const S = [
        "rook",
        "knight",
        "bishop",
        "queen",
        "king",
        "bishop",
        "knight",
        "rook"
      ];
      for (let A = 0; A < 8; A++) y[0][A] = {
        type: S[A],
        color: "black"
      }, y[7][A] = {
        type: S[A],
        color: "white"
      };
      return y;
    }
    const s = (y, S) => {
      const A = t.board[y][S], T = t.selectedSquare ? t.board[t.selectedSquare.row][t.selectedSquare.col] : null;
      if (!(!t.selectedSquare && !A)) {
        if (A && A.color === t.currentPlayer) {
          const _ = d(y, S, t.board);
          e((M) => ({
            ...M,
            selectedSquare: {
              row: y,
              col: S
            },
            possibleMoves: _
          }));
          return;
        }
        if (t.selectedSquare && t.possibleMoves.some((_) => _.row === y && _.col === S)) {
          const _ = t.board.map((G) => [
            ...G
          ]), M = _[y][S];
          if (_[y][S] = T, _[t.selectedSquare.row][t.selectedSquare.col] = null, T.type === "pawn" && (T.color === "white" && y === 0 || T.color === "black" && y === 7)) {
            e((G) => ({
              ...G,
              board: _,
              selectedSquare: null,
              possibleMoves: [],
              pendingPromotion: {
                row: y,
                col: S,
                color: T.color
              }
            }));
            return;
          }
          const O = {
            ...t.capturedPieces
          };
          M && O[M.color].push(M);
          const D = g(t.currentPlayer === "white" ? "black" : "white", _), w = f(t.currentPlayer === "white" ? "black" : "white", _);
          let j = "playing";
          D ? w ? j = "check" : j = "checkmate" : w || (j = "stalemate"), e((G) => ({
            ...G,
            board: _,
            currentPlayer: G.currentPlayer === "white" ? "black" : "white",
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: j,
            capturedPieces: O,
            moveHistory: [
              ...G.moveHistory,
              {
                from: G.selectedSquare,
                to: {
                  row: y,
                  col: S
                },
                piece: T,
                captured: M
              }
            ]
          }));
          return;
        }
        e((_) => ({
          ..._,
          selectedSquare: null,
          possibleMoves: []
        }));
      }
    }, d = (y, S, A) => {
      const T = A[y][S];
      if (!T) return [];
      const _ = [];
      switch (T.type) {
        case "pawn":
          _.push(...p(y, S, T.color, A));
          break;
        case "rook":
          _.push(...r(y, S, T.color, A));
          break;
        case "knight":
          _.push(...m(y, S, T.color, A));
          break;
        case "bishop":
          _.push(...v(y, S, T.color, A));
          break;
        case "queen":
          _.push(...z(y, S, T.color, A));
          break;
        case "king":
          _.push(...b(y, S, T.color, A));
          break;
      }
      return _;
    }, p = (y, S, A, T) => {
      const _ = [], M = A === "white" ? -1 : 1, O = A === "white" ? 6 : 1;
      y + M >= 0 && y + M < 8 && !T[y + M][S] && (_.push({
        row: y + M,
        col: S
      }), y === O && !T[y + 2 * M][S] && _.push({
        row: y + 2 * M,
        col: S
      }));
      for (const D of [
        -1,
        1
      ]) {
        const w = S + D;
        if (w >= 0 && w < 8 && y + M >= 0 && y + M < 8) {
          const j = T[y + M][w];
          j && j.color !== A && _.push({
            row: y + M,
            col: w
          });
        }
      }
      return _;
    }, r = (y, S, A, T) => {
      const _ = [], M = [
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
      for (const [O, D] of M) for (let w = 1; w < 8; w++) {
        const j = y + O * w, G = S + D * w;
        if (j < 0 || j >= 8 || G < 0 || G >= 8) break;
        const lt = T[j][G];
        if (!lt) _.push({
          row: j,
          col: G
        });
        else {
          lt.color !== A && _.push({
            row: j,
            col: G
          });
          break;
        }
      }
      return _;
    }, m = (y, S, A, T) => {
      const _ = [], M = [
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
      for (const [O, D] of M) {
        const w = y + O, j = S + D;
        if (w >= 0 && w < 8 && j >= 0 && j < 8) {
          const G = T[w][j];
          (!G || G.color !== A) && _.push({
            row: w,
            col: j
          });
        }
      }
      return _;
    }, v = (y, S, A, T) => {
      const _ = [], M = [
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
      for (const [O, D] of M) for (let w = 1; w < 8; w++) {
        const j = y + O * w, G = S + D * w;
        if (j < 0 || j >= 8 || G < 0 || G >= 8) break;
        const lt = T[j][G];
        if (!lt) _.push({
          row: j,
          col: G
        });
        else {
          lt.color !== A && _.push({
            row: j,
            col: G
          });
          break;
        }
      }
      return _;
    }, z = (y, S, A, T) => [
      ...r(y, S, A, T),
      ...v(y, S, A, T)
    ], b = (y, S, A, T) => {
      const _ = [], M = [
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
      for (const [O, D] of M) {
        const w = y + O, j = S + D;
        if (w >= 0 && w < 8 && j >= 0 && j < 8) {
          const G = T[w][j];
          (!G || G.color !== A) && _.push({
            row: w,
            col: j
          });
        }
      }
      return _;
    }, g = (y, S) => {
      let A, T;
      for (let M = 0; M < 8; M++) for (let O = 0; O < 8; O++) {
        const D = S[M][O];
        if (D && D.type === "king" && D.color === y) {
          A = M, T = O;
          break;
        }
      }
      const _ = y === "white" ? "black" : "white";
      for (let M = 0; M < 8; M++) for (let O = 0; O < 8; O++) {
        const D = S[M][O];
        if (D && D.color === _ && d(M, O, S).some((j) => j.row === A && j.col === T)) return true;
      }
      return false;
    }, f = (y, S) => {
      for (let A = 0; A < 8; A++) for (let T = 0; T < 8; T++) {
        const _ = S[A][T];
        if (_ && _.color === y && d(A, T, S).length > 0) return true;
      }
      return false;
    }, o = (y) => {
      if (!t.pendingPromotion) return;
      const { row: S, col: A, color: T } = t.pendingPromotion, _ = t.board.map((w) => [
        ...w
      ]);
      _[S][A] = {
        type: y,
        color: T
      };
      const M = g(T === "white" ? "black" : "white", _), O = f(T === "white" ? "black" : "white", _);
      let D = "playing";
      M ? O ? D = "check" : D = "checkmate" : O || (D = "stalemate"), e((w) => ({
        ...w,
        board: _,
        currentPlayer: w.currentPlayer === "white" ? "black" : "white",
        gameStatus: D,
        pendingPromotion: null,
        moveHistory: [
          ...w.moveHistory,
          {
            from: w.selectedSquare,
            to: {
              row: S,
              col: A
            },
            piece: {
              type: y,
              color: T
            },
            captured: null,
            promotion: true
          }
        ]
      }));
    }, h = () => {
      e({
        board: c(),
        currentPlayer: "white",
        selectedSquare: null,
        possibleMoves: [],
        gameStatus: "playing",
        capturedPieces: {
          white: [],
          black: []
        },
        moveHistory: [],
        pendingPromotion: null
      });
    };
    return E.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        E.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 128
        }),
        E.jsx("button", {
          onClick: () => a((y) => !y),
          className: "fixed top-4 right-4 z-[100] bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-xs",
          style: {
            fontSize: "10px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
          },
          "aria-pressed": l,
          "aria-label": l ? "Hide sidebar" : "Show sidebar",
          children: l ? "Hide Panel" : "Show Panel"
        }),
        E.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            E.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6",
              style: {
                height: "100vh",
                paddingTop: l ? 0 : 5,
                paddingBottom: l ? 0 : 5
              },
              children: [
                E.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "black" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${l ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                }),
                E.jsx("div", {
                  children: E.jsx(r0, {
                    board: t.board,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: s,
                    sideImagesWidth: i,
                    isSidebarOpen: l
                  })
                }),
                E.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "White player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "white" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${l ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                })
              ]
            }),
            l && E.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                E.jsx("div", {
                  className: "mb-6",
                  children: E.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Chess Game"
                  })
                }),
                E.jsxs("div", {
                  className: "mb-6",
                  children: [
                    E.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        E.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${t.currentPlayer === "white" ? "bg-blue-600 border-blue-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            t.currentPlayer === "white" ? "White" : "Black",
                            " to move"
                          ]
                        }),
                        t.gameStatus === "check" && E.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Check!"
                        }),
                        t.gameStatus === "checkmate" && E.jsx("div", {
                          className: "px-4 py-2 bg-red-800 border-2 border-red-500 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Checkmate!"
                        }),
                        t.gameStatus === "stalemate" && E.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Stalemate!"
                        })
                      ]
                    }),
                    E.jsx("button", {
                      onClick: h,
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
                E.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    E.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        E.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        E.jsxs("div", {
                          className: "mb-4",
                          children: [
                            E.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "White:"
                            }),
                            E.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                t.capturedPieces.white.map((y, S) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Nc(y)
                                }, S)),
                                t.capturedPieces.white.length === 0 && E.jsx("span", {
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
                        E.jsxs("div", {
                          children: [
                            E.jsx("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: "Black:"
                            }),
                            E.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                t.capturedPieces.black.map((y, S) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Nc(y)
                                }, S)),
                                t.capturedPieces.black.length === 0 && E.jsx("span", {
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
                    E.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        E.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        E.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            t.moveHistory.slice(-12).map((y, S) => E.jsxs("div", {
                              className: "mb-2 text-xs text-gray-200",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                y.piece.color,
                                " ",
                                y.piece.type,
                                ":",
                                " ",
                                String.fromCharCode(97 + y.from.col),
                                8 - y.from.row,
                                " \u2192",
                                " ",
                                String.fromCharCode(97 + y.to.col),
                                8 - y.to.row,
                                y.captured && ` (x${y.captured.type})`,
                                y.promotion && ` (=${y.piece.type})`
                              ]
                            }, S)),
                            t.moveHistory.length === 0 && E.jsx("div", {
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
        t.pendingPromotion && E.jsx("div", {
          className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
          children: E.jsxs("div", {
            className: "bg-gray-800 p-8 border-4 border-gray-600 rounded-lg",
            style: {
              boxShadow: "0 0 0 4px #000, 0 0 20px rgba(0, 255, 0, 0.3)"
            },
            children: [
              E.jsx("h3", {
                className: "text-sm font-bold mb-6 text-center text-green-400",
                style: {
                  fontSize: "10px",
                  fontFamily: "'Press Start 2P', monospace",
                  textShadow: "2px 2px 0px #000"
                },
                children: "Choose promotion piece"
              }),
              E.jsx("div", {
                className: "flex gap-4 justify-center",
                children: [
                  "queen",
                  "rook",
                  "bishop",
                  "knight"
                ].map((y) => E.jsx("button", {
                  onClick: () => o(y),
                  className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors",
                  style: {
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000"
                  },
                  children: Nc({
                    type: y,
                    color: t.pendingPromotion.color
                  })
                }, y))
              })
            ]
          })
        })
      ]
    });
  }, Nc = (t) => ({
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
  })[t.type][t.color], q1 = () => {
    const [t, e] = x.useState({
      board: c(),
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
    }), [l, a] = x.useState(false), n = 360, i = n * 2 + 24 * 2;
    function c() {
      const b = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let g = 0; g < 3; g++) for (let f = 0; f < 8; f++) (g + f) % 2 === 1 && (b[g][f] = {
        type: "checker",
        color: "red",
        isKing: false
      });
      for (let g = 5; g < 8; g++) for (let f = 0; f < 8; f++) (g + f) % 2 === 1 && (b[g][f] = {
        type: "checker",
        color: "black",
        isKing: false
      });
      return b;
    }
    const s = (b, g) => {
      const f = t.board[b][g];
      if (t.captureSequence.length > 0) {
        const o = t.captureSequence[t.captureSequence.length - 1];
        if (o.to.row !== b || o.to.col !== g) return;
      }
      if (!t.selectedSquare && (!f || f.color === t.currentPlayer)) {
        if (f && f.color === t.currentPlayer) {
          const o = d(b, g, t.board);
          e((h) => ({
            ...h,
            selectedSquare: {
              row: b,
              col: g
            },
            possibleMoves: o
          }));
        }
        return;
      }
      if (t.selectedSquare && t.possibleMoves.some((o) => o.row === b && o.col === g)) {
        const o = t.board.map((S) => [
          ...S
        ]), h = o[t.selectedSquare.row][t.selectedSquare.col];
        if (Math.abs(b - t.selectedSquare.row) === 2) {
          const S = (t.selectedSquare.row + b) / 2, A = (t.selectedSquare.col + g) / 2, T = o[S][A];
          o[S][A] = null;
          const _ = {
            ...t.capturedPieces
          };
          _[T.color]++, o[b][g] = h, o[t.selectedSquare.row][t.selectedSquare.col] = null, (h.color === "red" && b === 7 || h.color === "black" && b === 0) && !h.isKing && (o[b][g] = {
            ...h,
            isKing: true
          });
          const O = p(b, g, o);
          if (O.length > 0 && !t.captureSequence.length) {
            const D = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: b,
                  col: g
                },
                captured: T
              }
            ];
            e((w) => ({
              ...w,
              board: o,
              selectedSquare: {
                row: b,
                col: g
              },
              possibleMoves: O,
              capturedPieces: _,
              captureSequence: D
            }));
            return;
          } else if (t.captureSequence.length > 0) {
            const D = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: b,
                  col: g
                },
                captured: T
              }
            ], w = p(b, g, o);
            if (w.length > 0) {
              e((j) => ({
                ...j,
                board: o,
                selectedSquare: {
                  row: b,
                  col: g
                },
                possibleMoves: w,
                capturedPieces: _,
                captureSequence: D
              }));
              return;
            } else {
              const j = t.currentPlayer === "red" ? "black" : "red", G = r(o, j);
              e((lt) => ({
                ...lt,
                board: o,
                currentPlayer: j,
                selectedSquare: null,
                possibleMoves: [],
                gameStatus: G,
                capturedPieces: _,
                captureSequence: [],
                moveHistory: [
                  ...lt.moveHistory,
                  {
                    piece: h,
                    moves: D
                  }
                ]
              }));
              return;
            }
          } else {
            const D = t.currentPlayer === "red" ? "black" : "red", w = r(o, D);
            e((j) => ({
              ...j,
              board: o,
              currentPlayer: D,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus: w,
              capturedPieces: _,
              captureSequence: [],
              moveHistory: [
                ...j.moveHistory,
                {
                  piece: h,
                  moves: [
                    {
                      from: t.selectedSquare,
                      to: {
                        row: b,
                        col: g
                      },
                      captured: T
                    }
                  ]
                }
              ]
            }));
            return;
          }
        } else {
          o[b][g] = h, o[t.selectedSquare.row][t.selectedSquare.col] = null, (h.color === "red" && b === 7 || h.color === "black" && b === 0) && !h.isKing && (o[b][g] = {
            ...h,
            isKing: true
          });
          const A = t.currentPlayer === "red" ? "black" : "red", T = r(o, A);
          e((_) => ({
            ..._,
            board: o,
            currentPlayer: A,
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: T,
            captureSequence: [],
            moveHistory: [
              ..._.moveHistory,
              {
                piece: h,
                moves: [
                  {
                    from: _.selectedSquare,
                    to: {
                      row: b,
                      col: g
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
      e((o) => ({
        ...o,
        selectedSquare: null,
        possibleMoves: []
      }));
    }, d = (b, g, f) => {
      const o = f[b][g];
      if (!o || o.type !== "checker") return [];
      const h = [], y = p(b, g, f);
      if (y.length > 0) return y;
      const S = o.isKing ? [
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
      ] : o.color === "red" ? [
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
      for (const [A, T] of S) {
        const _ = b + A, M = g + T;
        _ >= 0 && _ < 8 && M >= 0 && M < 8 && !f[_][M] && h.push({
          row: _,
          col: M
        });
      }
      return h;
    }, p = (b, g, f) => {
      const o = f[b][g];
      if (!o || o.type !== "checker") return [];
      const h = [], y = o.isKing ? [
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
      ] : o.color === "red" ? [
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
      for (const [S, A] of y) {
        const T = b + 2 * S, _ = g + 2 * A, M = b + S, O = g + A;
        if (T >= 0 && T < 8 && _ >= 0 && _ < 8 && !f[T][_]) {
          const D = f[M][O];
          D && D.color !== o.color && h.push({
            row: T,
            col: _,
            isCapture: true
          });
        }
      }
      return h;
    }, r = (b, g) => {
      let f = false, o = false;
      for (let h = 0; h < 8; h++) {
        for (let y = 0; y < 8; y++) {
          const S = b[h][y];
          if (S && S.color === g && (f = true, d(h, y, b).length > 0)) {
            o = true;
            break;
          }
        }
        if (o) break;
      }
      return !f || !o ? g === "red" ? "black_wins" : "red_wins" : "playing";
    }, m = () => {
      e({
        board: c(),
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
    }, z = ((b) => b.map((g) => g.map((f) => f ? {
      type: "rook",
      color: f.color === "red" ? "white" : "black",
      isKing: f.isKing
    } : null)))(t.board);
    return E.jsxs("div", {
      className: "min-h-screen bg-gray-900 text-white flex flex-col",
      style: {
        fontFamily: "'Press Start 2P', monospace"
      },
      children: [
        E.jsx("img", {
          src: "/games/chess/chess-cat.png",
          alt: "chess sprites",
          className: "hidden",
          width: 32,
          height: 128
        }),
        E.jsx("button", {
          onClick: () => a((b) => !b),
          className: "fixed top-4 right-4 z-[100] bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-xs",
          style: {
            fontSize: "10px",
            fontFamily: "'Press Start 2P', monospace",
            boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
          },
          "aria-pressed": l,
          "aria-label": l ? "Hide sidebar" : "Show sidebar",
          children: l ? "Hide Panel" : "Show Panel"
        }),
        E.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            E.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6",
              style: {
                height: "100vh",
                paddingTop: l ? 0 : 5,
                paddingBottom: l ? 0 : 5
              },
              children: [
                E.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "black" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${l ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                }),
                E.jsx("div", {
                  children: E.jsx(r0, {
                    board: z,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: s,
                    sideImagesWidth: i,
                    isSidebarOpen: l
                  })
                }),
                E.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "Red player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "red" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${l ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                })
              ]
            }),
            l && E.jsxs("div", {
              className: "w-96 flex flex-col p-6 bg-gray-800 border-l-2 border-gray-600 overflow-y-auto",
              children: [
                E.jsx("div", {
                  className: "mb-6",
                  children: E.jsx("h1", {
                    className: "text-lg mb-2 text-green-400",
                    style: {
                      fontSize: "16px",
                      textShadow: "2px 2px 0px #000"
                    },
                    children: "Checkers Game"
                  })
                }),
                E.jsxs("div", {
                  className: "mb-6",
                  children: [
                    E.jsxs("div", {
                      className: "flex flex-col gap-3 mb-4",
                      children: [
                        E.jsxs("div", {
                          className: `px-4 py-2 text-center text-xs border-2 ${t.currentPlayer === "red" ? "bg-red-600 border-red-400 text-white" : "bg-gray-700 border-gray-500 text-gray-200"}`,
                          style: {
                            fontSize: "10px"
                          },
                          children: [
                            t.currentPlayer === "red" ? "Red" : "Black",
                            " to move"
                          ]
                        }),
                        t.gameStatus === "red_wins" && E.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Red Wins!"
                        }),
                        t.gameStatus === "black_wins" && E.jsx("div", {
                          className: "px-4 py-2 bg-red-600 border-2 border-red-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Black Wins!"
                        }),
                        t.gameStatus === "draw" && E.jsx("div", {
                          className: "px-4 py-2 bg-yellow-600 border-2 border-yellow-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Draw!"
                        }),
                        t.captureSequence.length > 0 && E.jsx("div", {
                          className: "px-4 py-2 bg-blue-600 border-2 border-blue-400 text-center text-xs text-white",
                          style: {
                            fontSize: "10px"
                          },
                          children: "Continue jumping!"
                        })
                      ]
                    }),
                    E.jsx("button", {
                      onClick: m,
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
                E.jsxs("div", {
                  className: "flex flex-col gap-4 flex-1",
                  children: [
                    E.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600",
                      children: [
                        E.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Captured Pieces"
                        }),
                        E.jsxs("div", {
                          className: "mb-4",
                          children: [
                            E.jsxs("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                "Red: ",
                                t.capturedPieces.red
                              ]
                            }),
                            E.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: t.capturedPieces.red
                                }, (b, g) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u2656"
                                }, g)),
                                t.capturedPieces.red === 0 && E.jsx("span", {
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
                        E.jsxs("div", {
                          children: [
                            E.jsxs("h4", {
                              className: "text-xs text-gray-300 mb-2",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                "Black: ",
                                t.capturedPieces.black
                              ]
                            }),
                            E.jsxs("div", {
                              className: "flex flex-wrap gap-1",
                              children: [
                                Array.from({
                                  length: t.capturedPieces.black
                                }, (b, g) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u265C"
                                }, g)),
                                t.capturedPieces.black === 0 && E.jsx("span", {
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
                    E.jsxs("div", {
                      className: "bg-gray-700 p-4 border-2 border-gray-600 flex-1",
                      children: [
                        E.jsx("h3", {
                          className: "text-xs mb-3 text-green-400",
                          style: {
                            fontSize: "10px",
                            fontFamily: "'Press Start 2P', monospace"
                          },
                          children: "Move History"
                        }),
                        E.jsxs("div", {
                          className: "overflow-y-auto max-h-64",
                          children: [
                            t.moveHistory.slice(-12).map((b, g) => E.jsxs("div", {
                              className: "mb-2 text-xs text-gray-200",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                b.piece.color,
                                " ",
                                b.piece.isKing ? "King" : "Checker",
                                ":",
                                " ",
                                b.moves.map((f, o) => `${String.fromCharCode(97 + f.from.col)}${8 - f.from.row}\u2192${String.fromCharCode(97 + f.to.col)}${8 - f.to.row}${f.captured ? "x" : ""}`).join(", ")
                              ]
                            }, g)),
                            t.moveHistory.length === 0 && E.jsx("div", {
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
  }, L1 = x.lazy(() => Nl(() => import("./page-DQUq5h2L.js").then(async (m) => {
    await m.__tla;
    return m;
  }), [])), Y1 = x.lazy(() => Nl(() => import("./SnakeSinglePlayerPage-0YHfKr9x.js"), __vite__mapDeps([0,1,2,3,4,5])).then((t) => ({
    default: t.default
  }))), G1 = x.lazy(() => Nl(() => import("./TypingPage-DC01SJjs.js"), __vite__mapDeps([6,1]))), X1 = x.lazy(() => Nl(() => import("./page-CoJYSckl.js"), __vite__mapDeps([7,1,2,3,4,5,8,9,10,11]))), Q1 = x.lazy(() => Nl(() => import("./page-BTW3rbuX.js"), __vite__mapDeps([12,1,4,5,13,3,11,14]))), V1 = x.lazy(() => Nl(() => import("./page-DNc8LPmU.js"), __vite__mapDeps([15,16,8,5,13]))), Z1 = x.lazy(() => Nl(() => import("./page-kCOWQVU1.js"), __vite__mapDeps([17,16,8,5,9,13]))), K1 = x.lazy(() => Nl(() => import("./page-CLj-t71n.js"), __vite__mapDeps([18,1,10,3,5,13,14,11])));
  function k1() {
    return E.jsxs(l1, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      children: [
        E.jsx(Qg, {
          basename: "/",
          children: E.jsx(x.Suspense, {
            fallback: null,
            children: E.jsxs(bg, {
              children: [
                E.jsx(Lt, {
                  path: "/",
                  element: E.jsx(U1, {})
                }),
                E.jsx(Lt, {
                  path: "/play/:id",
                  element: E.jsx(H1, {})
                }),
                E.jsx(Lt, {
                  path: "/motherload",
                  element: E.jsx(un, {
                    title: "Motherload",
                    children: E.jsx(x.Suspense, {
                      fallback: E.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: E.jsx(L1, {})
                    })
                  })
                }),
                E.jsx(Lt, {
                  path: "/chess",
                  element: E.jsx(un, {
                    title: "Chess",
                    children: E.jsx(B1, {})
                  })
                }),
                E.jsx(Lt, {
                  path: "/checkers",
                  element: E.jsx(un, {
                    title: "Checkers",
                    children: E.jsx(q1, {})
                  })
                }),
                E.jsx(Lt, {
                  path: "/snake",
                  element: E.jsx(un, {
                    title: "Snake",
                    children: E.jsx(Y1, {})
                  })
                }),
                E.jsx(Lt, {
                  path: "/typing",
                  element: E.jsx(un, {
                    title: "Typing",
                    children: E.jsx(G1, {})
                  })
                }),
                E.jsx(Lt, {
                  path: "/multiplayer",
                  element: E.jsx(X1, {})
                }),
                E.jsx(Lt, {
                  path: "/multiplayer/:roomId/snake",
                  element: E.jsx(Q1, {})
                }),
                E.jsx(Lt, {
                  path: "/multiplayer/:roomId/chess",
                  element: E.jsx(V1, {})
                }),
                E.jsx(Lt, {
                  path: "/multiplayer/:roomId/checkers",
                  element: E.jsx(Z1, {})
                }),
                E.jsx(Lt, {
                  path: "/multiplayer/:roomId/fighter",
                  element: E.jsx(K1, {})
                }),
                E.jsx(Lt, {
                  path: "*",
                  element: E.jsx(l0, {
                    to: "/",
                    replace: true
                  })
                })
              ]
            })
          })
        }),
        E.jsx(j1, {
          richColors: true,
          position: "top-center"
        })
      ]
    });
  }
  bv.createRoot(document.getElementById("root")).render(E.jsx(x.StrictMode, {
    children: E.jsx(k1, {})
  }));
})();
export {
  N as R,
  Nl as _,
  __tla,
  If as a,
  $1 as b,
  Z0 as c,
  ng as d,
  E as j,
  x as r,
  F1 as t,
  Ph as u,
  W1 as z
};
