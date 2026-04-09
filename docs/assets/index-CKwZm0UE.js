const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SnakeSinglePlayerPage--GeHxuKL.js","assets/button-Ch2qmtdg.js","assets/play-CCypM-3F.js","assets/grid-3x3-C0jISuKE.js","assets/snake-game-multiplayer-COxn6obF.js","assets/gin-DHzzR3IR.js","assets/TypingPage-BgmGI9g9.js","assets/page-B6FKxKlk.js","assets/chess-game-multiplayer-DB5exR2Z.js","assets/checkers-game-multiplayer-CFO-YGq1.js","assets/fighter-game-multiplayer-DmaeNXXY.js","assets/users-KZPYZR51.js","assets/page-DTAT5ZTH.js","assets/player-utils-sDKa8flh.js","assets/wifi-vut-xjJk.js","assets/page-BKGdZ1ko.js","assets/ChessBoardMultiplayer-Cmek3urE.js","assets/page-0DwRZQm3.js","assets/page-t32EER74.js"])))=>i.map(i=>d[i]);
let G1, j, L1, Na, td, ab, K0, uv, Q1, Y1, V1, q1, E, v, nb, Ih, lb;
let __tla = (async () => {
  function T0(t, e) {
    for (var a = 0; a < e.length; a++) {
      const l = e[a];
      if (typeof l != "string" && !Array.isArray(l)) {
        for (const n in l) if (n !== "default" && !(n in t)) {
          const u = Object.getOwnPropertyDescriptor(l, n);
          u && Object.defineProperty(t, n, u.get ? u : {
            enumerable: true,
            get: () => l[n]
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
  function qf(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Lf = {
    exports: {}
  }, vi = {};
  var _0 = Symbol.for("react.transitional.element"), z0 = Symbol.for("react.fragment");
  function Yf(t, e, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), e.key !== void 0 && (l = "" + e.key), "key" in e) {
      a = {};
      for (var n in e) n !== "key" && (a[n] = e[n]);
    } else a = e;
    return e = a.ref, {
      $$typeof: _0,
      type: t,
      key: l,
      ref: e !== void 0 ? e : null,
      props: a
    };
  }
  vi.Fragment = z0;
  vi.jsx = Yf;
  vi.jsxs = Yf;
  Lf.exports = vi;
  let Gf, G;
  E = Lf.exports;
  Gf = {
    exports: {}
  };
  G = {};
  var Os = Symbol.for("react.transitional.element"), A0 = Symbol.for("react.portal"), R0 = Symbol.for("react.fragment"), M0 = Symbol.for("react.strict_mode"), C0 = Symbol.for("react.profiler"), N0 = Symbol.for("react.consumer"), O0 = Symbol.for("react.context"), D0 = Symbol.for("react.forward_ref"), w0 = Symbol.for("react.suspense"), j0 = Symbol.for("react.memo"), Xf = Symbol.for("react.lazy"), H0 = Symbol.for("react.activity"), Wr = Symbol.iterator;
  function U0(t) {
    return t === null || typeof t != "object" ? null : (t = Wr && t[Wr] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Qf = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Vf = Object.assign, Zf = {};
  function Ll(t, e, a) {
    this.props = t, this.context = e, this.refs = Zf, this.updater = a || Qf;
  }
  Ll.prototype.isReactComponent = {};
  Ll.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  Ll.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Kf() {
  }
  Kf.prototype = Ll.prototype;
  function Ds(t, e, a) {
    this.props = t, this.context = e, this.refs = Zf, this.updater = a || Qf;
  }
  var ws = Ds.prototype = new Kf();
  ws.constructor = Ds;
  Vf(ws, Ll.prototype);
  ws.isPureReactComponent = true;
  var Fr = Array.isArray;
  function Dc() {
  }
  var st = {
    H: null,
    A: null,
    T: null,
    S: null
  }, kf = Object.prototype.hasOwnProperty;
  function js(t, e, a) {
    var l = a.ref;
    return {
      $$typeof: Os,
      type: t,
      key: e,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  function B0(t, e) {
    return js(t.type, e, t.props);
  }
  function Hs(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Os;
  }
  function q0(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(a) {
      return e[a];
    });
  }
  var Pr = /\/+/g;
  function Vi(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? q0("" + t.key) : e.toString(36);
  }
  function L0(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(Dc, Dc) : (t.status = "pending", t.then(function(e) {
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
  function il(t, e, a, l, n) {
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
          case Os:
          case A0:
            i = true;
            break;
          case Xf:
            return i = t._init, il(i(t._payload), e, a, l, n);
        }
    }
    if (i) return n = n(t), i = l === "" ? "." + Vi(t, 0) : l, Fr(n) ? (a = "", i != null && (a = i.replace(Pr, "$&/") + "/"), il(n, e, a, "", function(o) {
      return o;
    })) : n != null && (Hs(n) && (n = B0(n, a + (n.key == null || t && t.key === n.key ? "" : ("" + n.key).replace(Pr, "$&/") + "/") + i)), e.push(n)), 1;
    i = 0;
    var c = l === "" ? "." : l + ":";
    if (Fr(t)) for (var s = 0; s < t.length; s++) l = t[s], u = c + Vi(l, s), i += il(l, e, a, u, n);
    else if (s = U0(t), typeof s == "function") for (t = s.call(t), s = 0; !(l = t.next()).done; ) l = l.value, u = c + Vi(l, s++), i += il(l, e, a, u, n);
    else if (u === "object") {
      if (typeof t.then == "function") return il(L0(t), e, a, l, n);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return i;
  }
  function iu(t, e, a) {
    if (t == null) return t;
    var l = [], n = 0;
    return il(t, l, "", "", function(u) {
      return e.call(a, u, n++);
    }), l;
  }
  function Y0(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(a) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = a);
      }, function(a) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = a);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var Ir = typeof reportError == "function" ? reportError : function(t) {
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
  }, G0 = {
    map: iu,
    forEach: function(t, e, a) {
      iu(t, function() {
        e.apply(this, arguments);
      }, a);
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
      if (!Hs(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  G.Activity = H0;
  G.Children = G0;
  G.Component = Ll;
  G.Fragment = R0;
  G.Profiler = C0;
  G.PureComponent = Ds;
  G.StrictMode = M0;
  G.Suspense = w0;
  G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = st;
  G.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return st.H.useMemoCache(t);
    }
  };
  G.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  };
  G.cacheSignal = function() {
    return null;
  };
  G.cloneElement = function(t, e, a) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var l = Vf({}, t.props), n = t.key;
    if (e != null) for (u in e.key !== void 0 && (n = "" + e.key), e) !kf.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (l[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) l.children = a;
    else if (1 < u) {
      for (var i = Array(u), c = 0; c < u; c++) i[c] = arguments[c + 2];
      l.children = i;
    }
    return js(t.type, n, l);
  };
  G.createContext = function(t) {
    return t = {
      $$typeof: O0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: N0,
      _context: t
    }, t;
  };
  G.createElement = function(t, e, a) {
    var l, n = {}, u = null;
    if (e != null) for (l in e.key !== void 0 && (u = "" + e.key), e) kf.call(e, l) && l !== "key" && l !== "__self" && l !== "__source" && (n[l] = e[l]);
    var i = arguments.length - 2;
    if (i === 1) n.children = a;
    else if (1 < i) {
      for (var c = Array(i), s = 0; s < i; s++) c[s] = arguments[s + 2];
      n.children = c;
    }
    if (t && t.defaultProps) for (l in i = t.defaultProps, i) n[l] === void 0 && (n[l] = i[l]);
    return js(t, u, n);
  };
  G.createRef = function() {
    return {
      current: null
    };
  };
  G.forwardRef = function(t) {
    return {
      $$typeof: D0,
      render: t
    };
  };
  G.isValidElement = Hs;
  G.lazy = function(t) {
    return {
      $$typeof: Xf,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: Y0
    };
  };
  G.memo = function(t, e) {
    return {
      $$typeof: j0,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  G.startTransition = function(t) {
    var e = st.T, a = {};
    st.T = a;
    try {
      var l = t(), n = st.S;
      n !== null && n(a, l), typeof l == "object" && l !== null && typeof l.then == "function" && l.then(Dc, Ir);
    } catch (u) {
      Ir(u);
    } finally {
      e !== null && a.types !== null && (e.types = a.types), st.T = e;
    }
  };
  G.unstable_useCacheRefresh = function() {
    return st.H.useCacheRefresh();
  };
  G.use = function(t) {
    return st.H.use(t);
  };
  G.useActionState = function(t, e, a) {
    return st.H.useActionState(t, e, a);
  };
  G.useCallback = function(t, e) {
    return st.H.useCallback(t, e);
  };
  G.useContext = function(t) {
    return st.H.useContext(t);
  };
  G.useDebugValue = function() {
  };
  G.useDeferredValue = function(t, e) {
    return st.H.useDeferredValue(t, e);
  };
  G.useEffect = function(t, e) {
    return st.H.useEffect(t, e);
  };
  G.useEffectEvent = function(t) {
    return st.H.useEffectEvent(t);
  };
  G.useId = function() {
    return st.H.useId();
  };
  G.useImperativeHandle = function(t, e, a) {
    return st.H.useImperativeHandle(t, e, a);
  };
  G.useInsertionEffect = function(t, e) {
    return st.H.useInsertionEffect(t, e);
  };
  G.useLayoutEffect = function(t, e) {
    return st.H.useLayoutEffect(t, e);
  };
  G.useMemo = function(t, e) {
    return st.H.useMemo(t, e);
  };
  G.useOptimistic = function(t, e) {
    return st.H.useOptimistic(t, e);
  };
  G.useReducer = function(t, e, a) {
    return st.H.useReducer(t, e, a);
  };
  G.useRef = function(t) {
    return st.H.useRef(t);
  };
  G.useState = function(t) {
    return st.H.useState(t);
  };
  G.useSyncExternalStore = function(t, e, a) {
    return st.H.useSyncExternalStore(t, e, a);
  };
  G.useTransition = function() {
    return st.H.useTransition();
  };
  G.version = "19.2.5";
  Gf.exports = G;
  v = Gf.exports;
  j = qf(v);
  ab = T0({
    __proto__: null,
    default: j
  }, [
    v
  ]);
  var Jf = {
    exports: {}
  }, bi = {}, $f = {
    exports: {}
  }, Wf = {};
  (function(t) {
    function e(D, H) {
      var B = D.length;
      D.push(H);
      t: for (; 0 < B; ) {
        var q = B - 1 >>> 1, Z = D[q];
        if (0 < n(Z, H)) D[q] = H, D[B] = Z, B = q;
        else break t;
      }
    }
    function a(D) {
      return D.length === 0 ? null : D[0];
    }
    function l(D) {
      if (D.length === 0) return null;
      var H = D[0], B = D.pop();
      if (B !== H) {
        D[0] = B;
        t: for (var q = 0, Z = D.length, Mt = Z >>> 1; q < Mt; ) {
          var gt = 2 * (q + 1) - 1, Y = D[gt], K = gt + 1, I = D[K];
          if (0 > n(Y, B)) K < Z && 0 > n(I, Y) ? (D[q] = I, D[K] = B, q = K) : (D[q] = Y, D[gt] = B, q = gt);
          else if (K < Z && 0 > n(I, B)) D[q] = I, D[K] = B, q = K;
          else break t;
        }
      }
      return H;
    }
    function n(D, H) {
      var B = D.sortIndex - H.sortIndex;
      return B !== 0 ? B : D.id - H.id;
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
    var s = [], o = [], h = 1, r = null, d = 3, p = false, T = false, M = false, R = false, f = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    function y(D) {
      for (var H = a(o); H !== null; ) {
        if (H.callback === null) l(o);
        else if (H.startTime <= D) l(o), H.sortIndex = H.expirationTime, e(s, H);
        else break;
        H = a(o);
      }
    }
    function x(D) {
      if (M = false, y(D), !T) if (a(s) !== null) T = true, A || (A = true, w());
      else {
        var H = a(o);
        H !== null && Q(x, H.startTime - D);
      }
    }
    var A = false, _ = -1, S = 5, z = -1;
    function b() {
      return R ? true : !(t.unstable_now() - z < S);
    }
    function N() {
      if (R = false, A) {
        var D = t.unstable_now();
        z = D;
        var H = true;
        try {
          t: {
            T = false, M && (M = false, m(_), _ = -1), p = true;
            var B = d;
            try {
              e: {
                for (y(D), r = a(s); r !== null && !(r.expirationTime > D && b()); ) {
                  var q = r.callback;
                  if (typeof q == "function") {
                    r.callback = null, d = r.priorityLevel;
                    var Z = q(r.expirationTime <= D);
                    if (D = t.unstable_now(), typeof Z == "function") {
                      r.callback = Z, y(D), H = true;
                      break e;
                    }
                    r === a(s) && l(s), y(D);
                  } else l(s);
                  r = a(s);
                }
                if (r !== null) H = true;
                else {
                  var Mt = a(o);
                  Mt !== null && Q(x, Mt.startTime - D), H = false;
                }
              }
              break t;
            } finally {
              r = null, d = B, p = false;
            }
            H = void 0;
          }
        } finally {
          H ? w() : A = false;
        }
      }
    }
    var w;
    if (typeof g == "function") w = function() {
      g(N);
    };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), U = O.port2;
      O.port1.onmessage = N, w = function() {
        U.postMessage(null);
      };
    } else w = function() {
      f(N, 0);
    };
    function Q(D, H) {
      _ = f(function() {
        D(t.unstable_now());
      }, H);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, t.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < D ? Math.floor(1e3 / D) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, t.unstable_next = function(D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = d;
      }
      var B = d;
      d = H;
      try {
        return D();
      } finally {
        d = B;
      }
    }, t.unstable_requestPaint = function() {
      R = true;
    }, t.unstable_runWithPriority = function(D, H) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = d;
      d = D;
      try {
        return H();
      } finally {
        d = B;
      }
    }, t.unstable_scheduleCallback = function(D, H, B) {
      var q = t.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? q + B : q) : B = q, D) {
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
      return Z = B + Z, D = {
        id: h++,
        callback: H,
        priorityLevel: D,
        startTime: B,
        expirationTime: Z,
        sortIndex: -1
      }, B > q ? (D.sortIndex = B, e(o, D), a(s) === null && D === a(o) && (M ? (m(_), _ = -1) : M = true, Q(x, B - q))) : (D.sortIndex = Z, e(s, D), T || p || (T = true, A || (A = true, w()))), D;
    }, t.unstable_shouldYield = b, t.unstable_wrapCallback = function(D) {
      var H = d;
      return function() {
        var B = d;
        d = H;
        try {
          return D.apply(this, arguments);
        } finally {
          d = B;
        }
      };
    };
  })(Wf);
  $f.exports = Wf;
  var X0 = $f.exports, Ff = {
    exports: {}
  }, Lt = {};
  var Q0 = v;
  function Pf(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function la() {
  }
  var qt = {
    d: {
      f: la,
      r: function() {
        throw Error(Pf(522));
      },
      D: la,
      C: la,
      L: la,
      m: la,
      X: la,
      S: la,
      M: la
    },
    p: 0,
    findDOMNode: null
  }, V0 = Symbol.for("react.portal");
  function Z0(t, e, a) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V0,
      key: l == null ? null : "" + l,
      children: t,
      containerInfo: e,
      implementation: a
    };
  }
  var dn = Q0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Si(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = qt;
  Lt.createPortal = function(t, e) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(Pf(299));
    return Z0(t, e, null, a);
  };
  Lt.flushSync = function(t) {
    var e = dn.T, a = qt.p;
    try {
      if (dn.T = null, qt.p = 2, t) return t();
    } finally {
      dn.T = e, qt.p = a, qt.d.f();
    }
  };
  Lt.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, qt.d.C(t, e));
  };
  Lt.prefetchDNS = function(t) {
    typeof t == "string" && qt.d.D(t);
  };
  Lt.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var a = e.as, l = Si(a, e.crossOrigin), n = typeof e.integrity == "string" ? e.integrity : void 0, u = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      a === "style" ? qt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u
      }) : a === "script" && qt.d.X(t, {
        crossOrigin: l,
        integrity: n,
        fetchPriority: u,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  Lt.preinitModule = function(t, e) {
    if (typeof t == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var a = Si(e.as, e.crossOrigin);
        qt.d.M(t, {
          crossOrigin: a,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && qt.d.M(t);
  };
  Lt.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var a = e.as, l = Si(a, e.crossOrigin);
      qt.d.L(t, a, {
        crossOrigin: l,
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
  Lt.preloadModule = function(t, e) {
    if (typeof t == "string") if (e) {
      var a = Si(e.as, e.crossOrigin);
      qt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: a,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      });
    } else qt.d.m(t);
  };
  Lt.requestFormReset = function(t) {
    qt.d.r(t);
  };
  Lt.unstable_batchedUpdates = function(t, e) {
    return t(e);
  };
  Lt.useFormState = function(t, e, a) {
    return dn.H.useFormState(t, e, a);
  };
  Lt.useFormStatus = function() {
    return dn.H.useHostTransitionStatus();
  };
  Lt.version = "19.2.5";
  function If() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If);
    } catch (t) {
      console.error(t);
    }
  }
  If(), Ff.exports = Lt;
  td = Ff.exports;
  K0 = qf(td);
  var Tt = X0, ed = v, k0 = td;
  function C(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ad(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Gn(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, e.flags & 4098 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function ld(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function nd(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function to(t) {
    if (Gn(t) !== t) throw Error(C(188));
  }
  function J0(t) {
    var e = t.alternate;
    if (!e) {
      if (e = Gn(t), e === null) throw Error(C(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
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
          if (u === a) return to(n), t;
          if (u === l) return to(n), e;
          u = u.sibling;
        }
        throw Error(C(188));
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
          if (!i) throw Error(C(189));
        }
      }
      if (a.alternate !== l) throw Error(C(190));
    }
    if (a.tag !== 3) throw Error(C(188));
    return a.stateNode.current === a ? t : e;
  }
  function ud(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = ud(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var rt = Object.assign, $0 = Symbol.for("react.element"), cu = Symbol.for("react.transitional.element"), cn = Symbol.for("react.portal"), rl = Symbol.for("react.fragment"), id = Symbol.for("react.strict_mode"), wc = Symbol.for("react.profiler"), cd = Symbol.for("react.consumer"), Qe = Symbol.for("react.context"), Us = Symbol.for("react.forward_ref"), jc = Symbol.for("react.suspense"), Hc = Symbol.for("react.suspense_list"), Bs = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), Uc = Symbol.for("react.activity"), W0 = Symbol.for("react.memo_cache_sentinel"), eo = Symbol.iterator;
  function Fl(t) {
    return t === null || typeof t != "object" ? null : (t = eo && t[eo] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F0 = Symbol.for("react.client.reference");
  function Bc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === F0 ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case rl:
        return "Fragment";
      case wc:
        return "Profiler";
      case id:
        return "StrictMode";
      case jc:
        return "Suspense";
      case Hc:
        return "SuspenseList";
      case Uc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case cn:
        return "Portal";
      case Qe:
        return t.displayName || "Context";
      case cd:
        return (t._context.displayName || "Context") + ".Consumer";
      case Us:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Bs:
        return e = t.displayName || null, e !== null ? e : Bc(t.type) || "Memo";
      case na:
        e = t._payload, t = t._init;
        try {
          return Bc(t(e));
        } catch {
        }
    }
    return null;
  }
  var sn = Array.isArray, L = ed.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = k0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ba = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, qc = [], ol = -1;
  function De(t) {
    return {
      current: t
    };
  }
  function Rt(t) {
    0 > ol || (t.current = qc[ol], qc[ol] = null, ol--);
  }
  function ut(t, e) {
    ol++, qc[ol] = t.current, t.current = e;
  }
  var Ne = De(null), An = De(null), ya = De(null), Gu = De(null);
  function Xu(t, e) {
    switch (ut(ya, e), ut(An, t), ut(Ne, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? rf(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = rf(e), t = Rh(e, t);
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
    Rt(Ne), ut(Ne, t);
  }
  function Ml() {
    Rt(Ne), Rt(An), Rt(ya);
  }
  function Lc(t) {
    t.memoizedState !== null && ut(Gu, t);
    var e = Ne.current, a = Rh(e, t.type);
    e !== a && (ut(An, t), ut(Ne, a));
  }
  function Qu(t) {
    An.current === t && (Rt(Ne), Rt(An)), Gu.current === t && (Rt(Gu), Bn._currentValue = Ba);
  }
  var Zi, ao;
  function wa(t) {
    if (Zi === void 0) try {
      throw Error();
    } catch (a) {
      var e = a.stack.trim().match(/\n( *(at )?)/);
      Zi = e && e[1] || "", ao = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Zi + t + ao;
  }
  var Ki = false;
  function ki(t, e) {
    if (!t || Ki) return "";
    Ki = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
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
                } catch (p) {
                  var d = p;
                }
                Reflect.construct(t, [], r);
              } else {
                try {
                  r.call();
                } catch (p) {
                  d = p;
                }
                t.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                d = p;
              }
              (r = t()) && typeof r.catch == "function" && r.catch(function() {
              });
            }
          } catch (p) {
            if (p && d && typeof p.stack == "string") return [
              p.stack,
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
              var h = `
` + s[l].replace(" at new ", " at ");
              return t.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", t.displayName)), h;
            }
          while (1 <= l && 0 <= n);
          break;
        }
      }
    } finally {
      Ki = false, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? wa(a) : "";
  }
  function P0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return wa(t.type);
      case 16:
        return wa("Lazy");
      case 13:
        return t.child !== e && e !== null ? wa("Suspense Fallback") : wa("Suspense");
      case 19:
        return wa("SuspenseList");
      case 0:
      case 15:
        return ki(t.type, false);
      case 11:
        return ki(t.type.render, false);
      case 1:
        return ki(t.type, true);
      case 31:
        return wa("Activity");
      default:
        return "";
    }
  }
  function lo(t) {
    try {
      var e = "", a = null;
      do
        e += P0(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Yc = Object.prototype.hasOwnProperty, qs = Tt.unstable_scheduleCallback, Ji = Tt.unstable_cancelCallback, I0 = Tt.unstable_shouldYield, ty = Tt.unstable_requestPaint, ee = Tt.unstable_now, ey = Tt.unstable_getCurrentPriorityLevel, sd = Tt.unstable_ImmediatePriority, rd = Tt.unstable_UserBlockingPriority, Vu = Tt.unstable_NormalPriority, ay = Tt.unstable_LowPriority, od = Tt.unstable_IdlePriority, ly = Tt.log, ny = Tt.unstable_setDisableYieldValue, Xn = null, ae = null;
  function oa(t) {
    if (typeof ly == "function" && ny(t), ae && typeof ae.setStrictMode == "function") try {
      ae.setStrictMode(Xn, t);
    } catch {
    }
  }
  var le = Math.clz32 ? Math.clz32 : cy, uy = Math.log, iy = Math.LN2;
  function cy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (uy(t) / iy | 0) | 0;
  }
  var su = 256, ru = 262144, ou = 4194304;
  function ja(t) {
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
  function xi(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = ja(l) : (i &= c, i !== 0 ? n = ja(i) : a || (a = c & ~t, a !== 0 && (n = ja(a))))) : (c = l & ~u, c !== 0 ? n = ja(c) : i !== 0 ? n = ja(i) : a || (a = l & ~t, a !== 0 && (n = ja(a)))), n === 0 ? 0 : e !== 0 && e !== n && !(e & u) && (u = n & -n, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Qn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function sy(t, e) {
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
  function fd() {
    var t = ou;
    return ou <<= 1, !(ou & 62914560) && (ou = 4194304), t;
  }
  function $i(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Vn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function ry(t, e, a, l, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, o = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var h = 31 - le(a), r = 1 << h;
      c[h] = 0, s[h] = -1;
      var d = o[h];
      if (d !== null) for (o[h] = null, h = 0; h < d.length; h++) {
        var p = d[h];
        p !== null && (p.lane &= -536870913);
      }
      a &= ~r;
    }
    l !== 0 && dd(t, l, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function dd(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - le(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function md(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - le(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function hd(t, e) {
    var a = e & -e;
    return a = a & 42 ? 1 : Ls(a), a & (t.suspendedLanes | e) ? 0 : a;
  }
  function Ls(t) {
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
  function Ys(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function yd() {
    var t = P.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qh(t.type));
  }
  function no(t, e) {
    var a = P.p;
    try {
      return P.p = t, e();
    } finally {
      P.p = a;
    }
  }
  var Ma = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + Ma, kt = "__reactProps$" + Ma, Yl = "__reactContainer$" + Ma, Gc = "__reactEvents$" + Ma, oy = "__reactListeners$" + Ma, fy = "__reactHandles$" + Ma, uo = "__reactResources$" + Ma, Zn = "__reactMarker$" + Ma;
  function Gs(t) {
    delete t[Ot], delete t[kt], delete t[Gc], delete t[oy], delete t[fy];
  }
  function fl(t) {
    var e = t[Ot];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Yl] || a[Ot]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null) for (t = hf(t); t !== null; ) {
          if (a = t[Ot]) return a;
          t = hf(t);
        }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Gl(t) {
    if (t = t[Ot] || t[Yl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function rn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(C(33));
  }
  function xl(t) {
    var e = t[uo];
    return e || (e = t[uo] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function At(t) {
    t[Zn] = true;
  }
  var pd = /* @__PURE__ */ new Set(), gd = {};
  function ka(t, e) {
    Cl(t, e), Cl(t + "Capture", e);
  }
  function Cl(t, e) {
    for (gd[t] = e, t = 0; t < e.length; t++) pd.add(e[t]);
  }
  var dy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), io = {}, co = {};
  function my(t) {
    return Yc.call(co, t) ? true : Yc.call(io, t) ? false : dy.test(t) ? co[t] = true : (io[t] = true, false);
  }
  function _u(t, e, a) {
    if (my(e)) if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var l = e.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + a);
    }
  }
  function fu(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function Ue(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  function oe(t) {
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
  function hy(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(t, e, {
        configurable: true,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Xc(t) {
    if (!t._valueTracker) {
      var e = vd(t) ? "checked" : "value";
      t._valueTracker = hy(t, e, "" + t[e]);
    }
  }
  function bd(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var a = e.getValue(), l = "";
    return t && (l = vd(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), true) : false;
  }
  function Zu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var yy = /[\n"\\]/g;
  function me(t) {
    return t.replace(yy, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Qc(t, e, a, l, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + oe(e)) : t.value !== "" + oe(e) && (t.value = "" + oe(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Vc(t, i, oe(e)) : a != null ? Vc(t, i, oe(a)) : l != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + oe(c) : t.removeAttribute("name");
  }
  function Sd(t, e, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Xc(t);
        return;
      }
      a = a != null ? "" + oe(a) : "", e = e != null ? "" + oe(e) : a, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = c ? t.checked : !!l, t.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Xc(t);
  }
  function Vc(t, e, a) {
    e === "number" && Zu(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function El(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++) e["$" + a[n]] = true;
      for (a = 0; a < t.length; a++) n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = true);
    } else {
      for (a = "" + oe(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = true, l && (t[n].defaultSelected = true);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = true);
    }
  }
  function xd(t, e, a) {
    if (e != null && (e = "" + oe(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + oe(a) : "";
  }
  function Ed(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(C(92));
        if (sn(l)) {
          if (1 < l.length) throw Error(C(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = oe(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Xc(t);
  }
  function Nl(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var py = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function so(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || py.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function Td(t, e, a) {
    if (e != null && typeof e != "object") throw Error(C(62));
    if (t = t.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e) l = e[n], e.hasOwnProperty(n) && a[n] !== l && so(t, n, l);
    } else for (var u in e) e.hasOwnProperty(u) && so(t, u, e[u]);
  }
  function Xs(t) {
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
  var gy = /* @__PURE__ */ new Map([
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
  function zu(t) {
    return vy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ve() {
  }
  var Zc = null;
  function Qs(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var dl = null, Tl = null;
  function ro(t) {
    var e = Gl(t);
    if (e && (t = e.stateNode)) {
      var a = t[kt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Qc(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + me("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[kt] || null;
                if (!n) throw Error(C(90));
                Qc(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (e = 0; e < a.length; e++) l = a[e], l.form === t.form && bd(l);
          }
          break t;
        case "textarea":
          xd(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && El(t, !!a.multiple, e, false);
      }
    }
  }
  var Wi = false;
  function _d(t, e, a) {
    if (Wi) return t(e, a);
    Wi = true;
    try {
      var l = t(e);
      return l;
    } finally {
      if (Wi = false, (dl !== null || Tl !== null) && (wi(), dl && (e = dl, t = Tl, Tl = dl = null, ro(e), t))) for (e = 0; e < t.length; e++) ro(t[e]);
    }
  }
  function Rn(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[kt] || null;
    if (l === null) return null;
    a = l[e];
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(C(231, e, typeof a));
    return a;
  }
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kc = false;
  if ($e) try {
    var Pl = {};
    Object.defineProperty(Pl, "passive", {
      get: function() {
        Kc = true;
      }
    }), window.addEventListener("test", Pl, Pl), window.removeEventListener("test", Pl, Pl);
  } catch {
    Kc = false;
  }
  var fa = null, Vs = null, Au = null;
  function zd() {
    if (Au) return Au;
    var t, e = Vs, a = e.length, l, n = "value" in fa ? fa.value : fa.textContent, u = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var i = a - t;
    for (l = 1; l <= i && e[a - l] === n[u - l]; l++) ;
    return Au = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Ru(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function du() {
    return true;
  }
  function oo() {
    return false;
  }
  function Jt(t) {
    function e(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t) t.hasOwnProperty(c) && (a = t[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? du : oo, this.isPropagationStopped = oo, this;
    }
    return rt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = du);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = du);
      },
      persist: function() {
      },
      isPersistent: du
    }), e;
  }
  var Ja = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ei = Jt(Ja), Kn = rt({}, Ja, {
    view: 0,
    detail: 0
  }), by = Jt(Kn), Fi, Pi, Il, Ti = rt({}, Kn, {
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
    getModifierState: Zs,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Il && (Il && t.type === "mousemove" ? (Fi = t.screenX - Il.screenX, Pi = t.screenY - Il.screenY) : Pi = Fi = 0, Il = t), Fi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Pi;
    }
  }), fo = Jt(Ti), Sy = rt({}, Ti, {
    dataTransfer: 0
  }), xy = Jt(Sy), Ey = rt({}, Kn, {
    relatedTarget: 0
  }), Ii = Jt(Ey), Ty = rt({}, Ja, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _y = Jt(Ty), zy = rt({}, Ja, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Ay = Jt(zy), Ry = rt({}, Ja, {
    data: 0
  }), mo = Jt(Ry), My = {
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
  }, Cy = {
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
  }, Ny = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Oy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Ny[t]) ? !!e[t] : false;
  }
  function Zs() {
    return Oy;
  }
  var Dy = rt({}, Kn, {
    key: function(t) {
      if (t.key) {
        var e = My[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ru(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Cy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zs,
    charCode: function(t) {
      return t.type === "keypress" ? Ru(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ru(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), wy = Jt(Dy), jy = rt({}, Ti, {
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
  }), ho = Jt(jy), Hy = rt({}, Kn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zs
  }), Uy = Jt(Hy), By = rt({}, Ja, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qy = Jt(By), Ly = rt({}, Ti, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yy = Jt(Ly), Gy = rt({}, Ja, {
    newState: 0,
    oldState: 0
  }), Xy = Jt(Gy), Qy = [
    9,
    13,
    27,
    32
  ], Ks = $e && "CompositionEvent" in window, mn = null;
  $e && "documentMode" in document && (mn = document.documentMode);
  var Vy = $e && "TextEvent" in window && !mn, Ad = $e && (!Ks || mn && 8 < mn && 11 >= mn), yo = " ", po = false;
  function Rd(t, e) {
    switch (t) {
      case "keyup":
        return Qy.indexOf(e.keyCode) !== -1;
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
  function Md(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ml = false;
  function Zy(t, e) {
    switch (t) {
      case "compositionend":
        return Md(e);
      case "keypress":
        return e.which !== 32 ? null : (po = true, yo);
      case "textInput":
        return t = e.data, t === yo && po ? null : t;
      default:
        return null;
    }
  }
  function Ky(t, e) {
    if (ml) return t === "compositionend" || !Ks && Rd(t, e) ? (t = zd(), Au = Vs = fa = null, ml = false, t) : null;
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
        return Ad && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ky = {
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
  function go(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ky[t.type] : e === "textarea";
  }
  function Cd(t, e, a, l) {
    dl ? Tl ? Tl.push(l) : Tl = [
      l
    ] : dl = l, e = ri(e, "onChange"), 0 < e.length && (a = new Ei("onChange", "change", null, a, l), t.push({
      event: a,
      listeners: e
    }));
  }
  var hn = null, Mn = null;
  function Jy(t) {
    _h(t, 0);
  }
  function _i(t) {
    var e = rn(t);
    if (bd(e)) return t;
  }
  function vo(t, e) {
    if (t === "change") return e;
  }
  var Nd = false;
  if ($e) {
    var tc;
    if ($e) {
      var ec = "oninput" in document;
      if (!ec) {
        var bo = document.createElement("div");
        bo.setAttribute("oninput", "return;"), ec = typeof bo.oninput == "function";
      }
      tc = ec;
    } else tc = false;
    Nd = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    hn && (hn.detachEvent("onpropertychange", Od), Mn = hn = null);
  }
  function Od(t) {
    if (t.propertyName === "value" && _i(Mn)) {
      var e = [];
      Cd(e, Mn, t, Qs(t)), _d(Jy, e);
    }
  }
  function $y(t, e, a) {
    t === "focusin" ? (So(), hn = e, Mn = a, hn.attachEvent("onpropertychange", Od)) : t === "focusout" && So();
  }
  function Wy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return _i(Mn);
  }
  function Fy(t, e) {
    if (t === "click") return _i(e);
  }
  function Py(t, e) {
    if (t === "input" || t === "change") return _i(e);
  }
  function Iy(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ue = typeof Object.is == "function" ? Object.is : Iy;
  function Cn(t, e) {
    if (ue(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return false;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Yc.call(e, n) || !ue(t[n], e[n])) return false;
    }
    return true;
  }
  function xo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Eo(t, e) {
    var a = xo(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e) return {
          node: a,
          offset: e - t
        };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = xo(a);
    }
  }
  function Dd(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Dd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function wd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Zu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Zu(t.document);
    }
    return e;
  }
  function ks(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var tp = $e && "documentMode" in document && 11 >= document.documentMode, hl = null, kc = null, yn = null, Jc = false;
  function To(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Jc || hl == null || hl !== Zu(l) || (l = hl, "selectionStart" in l && ks(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), yn && Cn(yn, l) || (yn = l, l = ri(kc, "onSelect"), 0 < l.length && (e = new Ei("onSelect", "select", null, e, a), t.push({
      event: e,
      listeners: l
    }), e.target = hl)));
  }
  function Da(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var yl = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionrun: Da("Transition", "TransitionRun"),
    transitionstart: Da("Transition", "TransitionStart"),
    transitioncancel: Da("Transition", "TransitionCancel"),
    transitionend: Da("Transition", "TransitionEnd")
  }, ac = {}, jd = {};
  $e && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function $a(t) {
    if (ac[t]) return ac[t];
    if (!yl[t]) return t;
    var e = yl[t], a;
    for (a in e) if (e.hasOwnProperty(a) && a in jd) return ac[t] = e[a];
    return t;
  }
  var Hd = $a("animationend"), Ud = $a("animationiteration"), Bd = $a("animationstart"), ep = $a("transitionrun"), ap = $a("transitionstart"), lp = $a("transitioncancel"), qd = $a("transitionend"), Ld = /* @__PURE__ */ new Map(), $c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  $c.push("scrollEnd");
  function _e(t, e) {
    Ld.set(t, e), ka(e, [
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
  }, re = [], pl = 0, Js = 0;
  function zi() {
    for (var t = pl, e = Js = pl = 0; e < t; ) {
      var a = re[e];
      re[e++] = null;
      var l = re[e];
      re[e++] = null;
      var n = re[e];
      re[e++] = null;
      var u = re[e];
      if (re[e++] = null, l !== null && n !== null) {
        var i = l.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n;
      }
      u !== 0 && Yd(a, n, u);
    }
  }
  function Ai(t, e, a, l) {
    re[pl++] = t, re[pl++] = e, re[pl++] = a, re[pl++] = l, Js |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function $s(t, e, a, l) {
    return Ai(t, e, a, l), ku(t);
  }
  function Wa(t, e) {
    return Ai(t, null, null, e), ku(t);
  }
  function Yd(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = false, u = t.return; u !== null; ) u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - le(a), t = u.hiddenUpdates, l = t[n], l === null ? t[n] = [
      e
    ] : l.push(e), e.lane = a | 536870912), u) : null;
  }
  function ku(t) {
    if (50 < _n) throw _n = 0, ps = null, Error(C(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var gl = {};
  function np(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(t, e, a, l) {
    return new np(t, e, a, l);
  }
  function Ws(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ke(t, e) {
    var a = t.alternate;
    return a === null ? (a = It(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function Gd(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Mu(t, e, a, l, n, u) {
    var i = 0;
    if (l = t, typeof t == "function") Ws(t) && (i = 1);
    else if (typeof t == "string") i = rg(t, a, Ne.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Uc:
        return t = It(31, a, e, n), t.elementType = Uc, t.lanes = u, t;
      case rl:
        return qa(a.children, n, u, e);
      case id:
        i = 8, n |= 24;
        break;
      case wc:
        return t = It(12, a, e, n | 2), t.elementType = wc, t.lanes = u, t;
      case jc:
        return t = It(13, a, e, n), t.elementType = jc, t.lanes = u, t;
      case Hc:
        return t = It(19, a, e, n), t.elementType = Hc, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Qe:
            i = 10;
            break t;
          case cd:
            i = 9;
            break t;
          case Us:
            i = 11;
            break t;
          case Bs:
            i = 14;
            break t;
          case na:
            i = 16, l = null;
            break t;
        }
        i = 29, a = Error(C(130, t === null ? "null" : typeof t, "")), l = null;
    }
    return e = It(i, a, e, n), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function qa(t, e, a, l) {
    return t = It(7, t, l, e), t.lanes = a, t;
  }
  function lc(t, e, a) {
    return t = It(6, t, null, e), t.lanes = a, t;
  }
  function Xd(t) {
    var e = It(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function nc(t, e, a) {
    return e = It(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var _o = /* @__PURE__ */ new WeakMap();
  function he(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = _o.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: lo(e)
      }, _o.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: lo(e)
    };
  }
  var vl = [], bl = 0, Ju = null, Nn = 0, fe = [], de = 0, _a = null, Re = 1, Me = "";
  function Ge(t, e) {
    vl[bl++] = Nn, vl[bl++] = Ju, Ju = t, Nn = e;
  }
  function Qd(t, e, a) {
    fe[de++] = Re, fe[de++] = Me, fe[de++] = _a, _a = t;
    var l = Re;
    t = Me;
    var n = 32 - le(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - le(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Re = 1 << 32 - le(e) + n | a << n | l, Me = u + t;
    } else Re = 1 << u | a << n | l, Me = t;
  }
  function Fs(t) {
    t.return !== null && (Ge(t, 1), Qd(t, 1, 0));
  }
  function Ps(t) {
    for (; t === Ju; ) Ju = vl[--bl], vl[bl] = null, Nn = vl[--bl], vl[bl] = null;
    for (; t === _a; ) _a = fe[--de], fe[de] = null, Me = fe[--de], fe[de] = null, Re = fe[--de], fe[de] = null;
  }
  function Vd(t, e) {
    fe[de++] = Re, fe[de++] = Me, fe[de++] = _a, Re = e.id, Me = e.overflow, _a = t;
  }
  var Dt = null, ct = null, W = false, pa = null, ye = false, Wc = Error(C(519));
  function za(t) {
    var e = Error(C(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw On(he(e, t)), Wc;
  }
  function zo(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[Ot] = t, e[kt] = l, a) {
      case "dialog":
        k("cancel", e), k("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hn.length; a++) k(Hn[a], e);
        break;
      case "source":
        k("error", e);
        break;
      case "img":
      case "image":
      case "link":
        k("error", e), k("load", e);
        break;
      case "details":
        k("toggle", e);
        break;
      case "input":
        k("invalid", e), Sd(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true);
        break;
      case "select":
        k("invalid", e);
        break;
      case "textarea":
        k("invalid", e), Ed(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === true || Ah(e.textContent, a) ? (l.popover != null && (k("beforetoggle", e), k("toggle", e)), l.onScroll != null && k("scroll", e), l.onScrollEnd != null && k("scrollend", e), l.onClick != null && (e.onclick = Ve), e = true) : e = false, e || za(t, true);
  }
  function Ao(t) {
    for (Dt = t.return; Dt; ) switch (Dt.tag) {
      case 5:
      case 31:
      case 13:
        ye = false;
        return;
      case 27:
      case 3:
        ye = true;
        return;
      default:
        Dt = Dt.return;
    }
  }
  function nl(t) {
    if (t !== Dt) return false;
    if (!W) return Ao(t), W = true, false;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || xs(t.type, t.memoizedProps)), a = !a), a && ct && za(t), Ao(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(C(317));
      ct = mf(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(C(317));
      ct = mf(t);
    } else e === 27 ? (e = ct, Ca(t.type) ? (t = zs, zs = null, ct = t) : ct = e) : ct = Dt ? ge(t.stateNode.nextSibling) : null;
    return true;
  }
  function Xa() {
    ct = Dt = null, W = false;
  }
  function uc() {
    var t = pa;
    return t !== null && (Vt === null ? Vt = t : Vt.push.apply(Vt, t), pa = null), t;
  }
  function On(t) {
    pa === null ? pa = [
      t
    ] : pa.push(t);
  }
  var Fc = De(null), Fa = null, Ze = null;
  function ia(t, e, a) {
    ut(Fc, e._currentValue), e._currentValue = a;
  }
  function ke(t) {
    t._currentValue = Fc.current, Rt(Fc);
  }
  function Pc(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Ic(t, e, a, l) {
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
            u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), Pc(u.return, a, t), l || (i = null);
            break t;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(C(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Pc(i, a, t), i = null;
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
  function Xl(t, e, a, l) {
    t = null;
    for (var n = e, u = false; n !== null; ) {
      if (!u) {
        if (n.flags & 524288) u = true;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(C(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ue(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
            c
          ]);
        }
      } else if (n === Gu.current) {
        if (i = n.alternate, i === null) throw Error(C(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Bn) : t = [
          Bn
        ]);
      }
      n = n.return;
    }
    t !== null && Ic(e, t, a, l), e.flags |= 262144;
  }
  function $u(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Qa(t) {
    Fa = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function wt(t) {
    return Zd(Fa, t);
  }
  function mu(t, e) {
    return Fa === null && Qa(t), Zd(t, e);
  }
  function Zd(t, e) {
    var a = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: a,
      next: null
    }, Ze === null) {
      if (t === null) throw Error(C(308));
      Ze = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else Ze = Ze.next = e;
    return a;
  }
  var up = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: false,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = true, t.forEach(function(a) {
        return a();
      });
    };
  }, ip = Tt.unstable_scheduleCallback, cp = Tt.unstable_NormalPriority, St = {
    $$typeof: Qe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Is() {
    return {
      controller: new up(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function kn(t) {
    t.refCount--, t.refCount === 0 && ip(cp, function() {
      t.controller.abort();
    });
  }
  var pn = null, ts = 0, Ol = 0, _l = null;
  function sp(t, e) {
    if (pn === null) {
      var a = pn = [];
      ts = 0, Ol = _r(), _l = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return ts++, e.then(Ro, Ro), e;
  }
  function Ro() {
    if (--ts === 0 && pn !== null) {
      _l !== null && (_l.status = "fulfilled");
      var t = pn;
      pn = null, Ol = 0, _l = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rp(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(function() {
      l.status = "fulfilled", l.value = e;
      for (var n = 0; n < a.length; n++) (0, a[n])(e);
    }, function(n) {
      for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++) (0, a[n])(void 0);
    }), l;
  }
  var Mo = L.S;
  L.S = function(t, e) {
    uh = ee(), typeof e == "object" && e !== null && typeof e.then == "function" && sp(t, e), Mo !== null && Mo(t, e);
  };
  var La = De(null);
  function tr() {
    var t = La.current;
    return t !== null ? t : nt.pooledCache;
  }
  function Cu(t, e) {
    e === null ? ut(La, La.current) : ut(La, e.pool);
  }
  function Kd() {
    var t = tr();
    return t === null ? null : {
      parent: St._currentValue,
      pool: t
    };
  }
  var Ql = Error(C(460)), er = Error(C(474)), Ri = Error(C(542)), Wu = {
    then: function() {
    }
  };
  function Co(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function kd(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Ve, Ve), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Oo(t), t;
      default:
        if (typeof e.status == "string") e.then(Ve, Ve);
        else {
          if (t = nt, t !== null && 100 < t.shellSuspendCounter) throw Error(C(482));
          t = e, t.status = "pending", t.then(function(l) {
            if (e.status === "pending") {
              var n = e;
              n.status = "fulfilled", n.value = l;
            }
          }, function(l) {
            if (e.status === "pending") {
              var n = e;
              n.status = "rejected", n.reason = l;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Oo(t), t;
        }
        throw Ya = e, Ql;
    }
  }
  function Ha(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ya = a, Ql) : a;
    }
  }
  var Ya = null;
  function No() {
    if (Ya === null) throw Error(C(459));
    var t = Ya;
    return Ya = null, t;
  }
  function Oo(t) {
    if (t === Ql || t === Ri) throw Error(C(483));
  }
  var zl = null, Dn = 0;
  function hu(t) {
    var e = Dn;
    return Dn += 1, zl === null && (zl = []), kd(zl, t, e);
  }
  function tn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function yu(t, e) {
    throw e.$$typeof === $0 ? Error(C(525)) : (t = Object.prototype.toString.call(e), Error(C(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function Jd(t) {
    function e(f, m) {
      if (t) {
        var g = f.deletions;
        g === null ? (f.deletions = [
          m
        ], f.flags |= 16) : g.push(m);
      }
    }
    function a(f, m) {
      if (!t) return null;
      for (; m !== null; ) e(f, m), m = m.sibling;
      return null;
    }
    function l(f) {
      for (var m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
      return m;
    }
    function n(f, m) {
      return f = Ke(f, m), f.index = 0, f.sibling = null, f;
    }
    function u(f, m, g) {
      return f.index = g, t ? (g = f.alternate, g !== null ? (g = g.index, g < m ? (f.flags |= 67108866, m) : g) : (f.flags |= 67108866, m)) : (f.flags |= 1048576, m);
    }
    function i(f) {
      return t && f.alternate === null && (f.flags |= 67108866), f;
    }
    function c(f, m, g, y) {
      return m === null || m.tag !== 6 ? (m = lc(g, f.mode, y), m.return = f, m) : (m = n(m, g), m.return = f, m);
    }
    function s(f, m, g, y) {
      var x = g.type;
      return x === rl ? h(f, m, g.props.children, y, g.key) : m !== null && (m.elementType === x || typeof x == "object" && x !== null && x.$$typeof === na && Ha(x) === m.type) ? (m = n(m, g.props), tn(m, g), m.return = f, m) : (m = Mu(g.type, g.key, g.props, null, f.mode, y), tn(m, g), m.return = f, m);
    }
    function o(f, m, g, y) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = nc(g, f.mode, y), m.return = f, m) : (m = n(m, g.children || []), m.return = f, m);
    }
    function h(f, m, g, y, x) {
      return m === null || m.tag !== 7 ? (m = qa(g, f.mode, y, x), m.return = f, m) : (m = n(m, g), m.return = f, m);
    }
    function r(f, m, g) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = lc("" + m, f.mode, g), m.return = f, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case cu:
            return g = Mu(m.type, m.key, m.props, null, f.mode, g), tn(g, m), g.return = f, g;
          case cn:
            return m = nc(m, f.mode, g), m.return = f, m;
          case na:
            return m = Ha(m), r(f, m, g);
        }
        if (sn(m) || Fl(m)) return m = qa(m, f.mode, g, null), m.return = f, m;
        if (typeof m.then == "function") return r(f, hu(m), g);
        if (m.$$typeof === Qe) return r(f, mu(f, m), g);
        yu(f, m);
      }
      return null;
    }
    function d(f, m, g, y) {
      var x = m !== null ? m.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return x !== null ? null : c(f, m, "" + g, y);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case cu:
            return g.key === x ? s(f, m, g, y) : null;
          case cn:
            return g.key === x ? o(f, m, g, y) : null;
          case na:
            return g = Ha(g), d(f, m, g, y);
        }
        if (sn(g) || Fl(g)) return x !== null ? null : h(f, m, g, y, null);
        if (typeof g.then == "function") return d(f, m, hu(g), y);
        if (g.$$typeof === Qe) return d(f, m, mu(f, g), y);
        yu(f, g);
      }
      return null;
    }
    function p(f, m, g, y, x) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return f = f.get(g) || null, c(m, f, "" + y, x);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case cu:
            return f = f.get(y.key === null ? g : y.key) || null, s(m, f, y, x);
          case cn:
            return f = f.get(y.key === null ? g : y.key) || null, o(m, f, y, x);
          case na:
            return y = Ha(y), p(f, m, g, y, x);
        }
        if (sn(y) || Fl(y)) return f = f.get(g) || null, h(m, f, y, x, null);
        if (typeof y.then == "function") return p(f, m, g, hu(y), x);
        if (y.$$typeof === Qe) return p(f, m, g, mu(m, y), x);
        yu(m, y);
      }
      return null;
    }
    function T(f, m, g, y) {
      for (var x = null, A = null, _ = m, S = m = 0, z = null; _ !== null && S < g.length; S++) {
        _.index > S ? (z = _, _ = null) : z = _.sibling;
        var b = d(f, _, g[S], y);
        if (b === null) {
          _ === null && (_ = z);
          break;
        }
        t && _ && b.alternate === null && e(f, _), m = u(b, m, S), A === null ? x = b : A.sibling = b, A = b, _ = z;
      }
      if (S === g.length) return a(f, _), W && Ge(f, S), x;
      if (_ === null) {
        for (; S < g.length; S++) _ = r(f, g[S], y), _ !== null && (m = u(_, m, S), A === null ? x = _ : A.sibling = _, A = _);
        return W && Ge(f, S), x;
      }
      for (_ = l(_); S < g.length; S++) z = p(_, f, S, g[S], y), z !== null && (t && z.alternate !== null && _.delete(z.key === null ? S : z.key), m = u(z, m, S), A === null ? x = z : A.sibling = z, A = z);
      return t && _.forEach(function(N) {
        return e(f, N);
      }), W && Ge(f, S), x;
    }
    function M(f, m, g, y) {
      if (g == null) throw Error(C(151));
      for (var x = null, A = null, _ = m, S = m = 0, z = null, b = g.next(); _ !== null && !b.done; S++, b = g.next()) {
        _.index > S ? (z = _, _ = null) : z = _.sibling;
        var N = d(f, _, b.value, y);
        if (N === null) {
          _ === null && (_ = z);
          break;
        }
        t && _ && N.alternate === null && e(f, _), m = u(N, m, S), A === null ? x = N : A.sibling = N, A = N, _ = z;
      }
      if (b.done) return a(f, _), W && Ge(f, S), x;
      if (_ === null) {
        for (; !b.done; S++, b = g.next()) b = r(f, b.value, y), b !== null && (m = u(b, m, S), A === null ? x = b : A.sibling = b, A = b);
        return W && Ge(f, S), x;
      }
      for (_ = l(_); !b.done; S++, b = g.next()) b = p(_, f, S, b.value, y), b !== null && (t && b.alternate !== null && _.delete(b.key === null ? S : b.key), m = u(b, m, S), A === null ? x = b : A.sibling = b, A = b);
      return t && _.forEach(function(w) {
        return e(f, w);
      }), W && Ge(f, S), x;
    }
    function R(f, m, g, y) {
      if (typeof g == "object" && g !== null && g.type === rl && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case cu:
            t: {
              for (var x = g.key; m !== null; ) {
                if (m.key === x) {
                  if (x = g.type, x === rl) {
                    if (m.tag === 7) {
                      a(f, m.sibling), y = n(m, g.props.children), y.return = f, f = y;
                      break t;
                    }
                  } else if (m.elementType === x || typeof x == "object" && x !== null && x.$$typeof === na && Ha(x) === m.type) {
                    a(f, m.sibling), y = n(m, g.props), tn(y, g), y.return = f, f = y;
                    break t;
                  }
                  a(f, m);
                  break;
                } else e(f, m);
                m = m.sibling;
              }
              g.type === rl ? (y = qa(g.props.children, f.mode, y, g.key), y.return = f, f = y) : (y = Mu(g.type, g.key, g.props, null, f.mode, y), tn(y, g), y.return = f, f = y);
            }
            return i(f);
          case cn:
            t: {
              for (x = g.key; m !== null; ) {
                if (m.key === x) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                  a(f, m.sibling), y = n(m, g.children || []), y.return = f, f = y;
                  break t;
                } else {
                  a(f, m);
                  break;
                }
                else e(f, m);
                m = m.sibling;
              }
              y = nc(g, f.mode, y), y.return = f, f = y;
            }
            return i(f);
          case na:
            return g = Ha(g), R(f, m, g, y);
        }
        if (sn(g)) return T(f, m, g, y);
        if (Fl(g)) {
          if (x = Fl(g), typeof x != "function") throw Error(C(150));
          return g = x.call(g), M(f, m, g, y);
        }
        if (typeof g.then == "function") return R(f, m, hu(g), y);
        if (g.$$typeof === Qe) return R(f, m, mu(f, g), y);
        yu(f, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, m !== null && m.tag === 6 ? (a(f, m.sibling), y = n(m, g), y.return = f, f = y) : (a(f, m), y = lc(g, f.mode, y), y.return = f, f = y), i(f)) : a(f, m);
    }
    return function(f, m, g, y) {
      try {
        Dn = 0;
        var x = R(f, m, g, y);
        return zl = null, x;
      } catch (_) {
        if (_ === Ql || _ === Ri) throw _;
        var A = It(29, _, null, f.mode);
        return A.lanes = y, A.return = f, A;
      } finally {
      }
    };
  }
  var Va = Jd(true), $d = Jd(false), ua = false;
  function ar(t) {
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
  function es(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ga(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function va(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, F & 2) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = ku(t), Yd(t, null, a), e;
    }
    return Ai(t, l, e, a), ku(t);
  }
  function gn(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, md(t, a);
    }
  }
  function ic(t, e) {
    var a = t.updateQueue, l = t.alternate;
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
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var as = false;
  function vn() {
    if (as) {
      var t = _l;
      if (t !== null) throw t;
    }
  }
  function bn(t, e, a, l) {
    as = false;
    var n = t.updateQueue;
    ua = false;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, o = s.next;
      s.next = null, i === null ? u = o : i.next = o, i = s;
      var h = t.alternate;
      h !== null && (h = h.updateQueue, c = h.lastBaseUpdate, c !== i && (c === null ? h.firstBaseUpdate = o : c.next = o, h.lastBaseUpdate = s));
    }
    if (u !== null) {
      var r = n.baseState;
      i = 0, h = o = s = null, c = u;
      do {
        var d = c.lane & -536870913, p = d !== c.lane;
        if (p ? ($ & d) === d : (l & d) === d) {
          d !== 0 && d === Ol && (as = true), h !== null && (h = h.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var T = t, M = c;
            d = e;
            var R = a;
            switch (M.tag) {
              case 1:
                if (T = M.payload, typeof T == "function") {
                  r = T.call(R, r, d);
                  break t;
                }
                r = T;
                break t;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = M.payload, d = typeof T == "function" ? T.call(R, r, d) : T, d == null) break t;
                r = rt({}, r, d);
                break t;
              case 2:
                ua = true;
            }
          }
          d = c.callback, d !== null && (t.flags |= 64, p && (t.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [
            d
          ] : p.push(d));
        } else p = {
          lane: d,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, h === null ? (o = h = p, s = r) : h = h.next = p, i |= d;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
        }
      } while (true);
      h === null && (s = r), n.baseState = s, n.firstBaseUpdate = o, n.lastBaseUpdate = h, u === null && (n.shared.lanes = 0), Ra |= i, t.lanes = i, t.memoizedState = r;
    }
  }
  function Wd(t, e) {
    if (typeof t != "function") throw Error(C(191, t));
    t.call(e);
  }
  function Fd(t, e) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Wd(a[t], e);
  }
  var Dl = De(null), Fu = De(0);
  function Do(t, e) {
    t = Ie, ut(Fu, t), ut(Dl, e), Ie = t | e.baseLanes;
  }
  function ls() {
    ut(Fu, Ie), ut(Dl, Dl.current);
  }
  function lr() {
    Ie = Fu.current, Rt(Dl), Rt(Fu);
  }
  var ie = De(null), pe = null;
  function ca(t) {
    var e = t.alternate;
    ut(yt, yt.current & 1), ut(ie, t), pe === null && (e === null || Dl.current !== null || e.memoizedState !== null) && (pe = t);
  }
  function ns(t) {
    ut(yt, yt.current), ut(ie, t), pe === null && (pe = t);
  }
  function Pd(t) {
    t.tag === 22 ? (ut(yt, yt.current), ut(ie, t), pe === null && (pe = t)) : sa();
  }
  function sa() {
    ut(yt, yt.current), ut(ie, ie.current);
  }
  function Pt(t) {
    Rt(ie), pe === t && (pe = null), Rt(yt);
  }
  var yt = De(0);
  function Pu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Ts(a) || _s(a))) return e;
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
  var We = 0, X = null, lt = null, vt = null, Iu = false, Al = false, Za = false, ti = 0, wn = 0, Rl = null, op = 0;
  function mt() {
    throw Error(C(321));
  }
  function nr(t, e) {
    if (e === null) return false;
    for (var a = 0; a < e.length && a < t.length; a++) if (!ue(t[a], e[a])) return false;
    return true;
  }
  function ur(t, e, a, l, n, u) {
    return We = u, X = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, L.H = t === null || t.memoizedState === null ? Cm : pr, Za = false, u = a(l, n), Za = false, Al && (u = tm(e, a, l, n)), Id(t), u;
  }
  function Id(t) {
    L.H = jn;
    var e = lt !== null && lt.next !== null;
    if (We = 0, vt = lt = X = null, Iu = false, wn = 0, Rl = null, e) throw Error(C(300));
    t === null || xt || (t = t.dependencies, t !== null && $u(t) && (xt = true));
  }
  function tm(t, e, a, l) {
    X = t;
    var n = 0;
    do {
      if (Al && (Rl = null), wn = 0, Al = false, 25 <= n) throw Error(C(301));
      if (n += 1, vt = lt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      L.H = Nm, u = e(a, l);
    } while (Al);
    return u;
  }
  function fp() {
    var t = L.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Jn(e) : e, t = t.useState()[0], (lt !== null ? lt.memoizedState : null) !== t && (X.flags |= 1024), e;
  }
  function ir() {
    var t = ti !== 0;
    return ti = 0, t;
  }
  function cr(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function sr(t) {
    if (Iu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Iu = false;
    }
    We = 0, vt = lt = X = null, Al = false, wn = ti = 0, Rl = null;
  }
  function Bt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? X.memoizedState = vt = t : vt = vt.next = t, vt;
  }
  function pt() {
    if (lt === null) {
      var t = X.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = lt.next;
    var e = vt === null ? X.memoizedState : vt.next;
    if (e !== null) vt = e, lt = t;
    else {
      if (t === null) throw X.alternate === null ? Error(C(467)) : Error(C(310));
      lt = t, t = {
        memoizedState: lt.memoizedState,
        baseState: lt.baseState,
        baseQueue: lt.baseQueue,
        queue: lt.queue,
        next: null
      }, vt === null ? X.memoizedState = vt = t : vt = vt.next = t;
    }
    return vt;
  }
  function Mi() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Jn(t) {
    var e = wn;
    return wn += 1, Rl === null && (Rl = []), t = kd(Rl, t, e), e = X, (vt === null ? e.memoizedState : vt.next) === null && (e = e.alternate, L.H = e === null || e.memoizedState === null ? Cm : pr), t;
  }
  function Ci(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Jn(t);
      if (t.$$typeof === Qe) return wt(t);
    }
    throw Error(C(438, String(t)));
  }
  function rr(t) {
    var e = null, a = X.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = X.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = {
      data: [],
      index: 0
    }), a === null && (a = Mi(), X.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0) for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = W0;
    return e.index++, a;
  }
  function Fe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Nu(t) {
    var e = pt();
    return or(e, lt, t);
  }
  function or(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(C(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, l.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var c = i = null, s = null, o = e, h = false;
      do {
        var r = o.lane & -536870913;
        if (r !== o.lane ? ($ & r) === r : (We & r) === r) {
          var d = o.revertLane;
          if (d === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }), r === Ol && (h = true);
          else if ((We & d) === d) {
            o = o.next, d === Ol && (h = true);
            continue;
          } else r = {
            lane: 0,
            revertLane: o.revertLane,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, s === null ? (c = s = r, i = u) : s = s.next = r, X.lanes |= d, Ra |= d;
          r = o.action, Za && a(u, r), u = o.hasEagerState ? o.eagerState : a(u, r);
        } else d = {
          lane: r,
          revertLane: o.revertLane,
          gesture: o.gesture,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null
        }, s === null ? (c = s = d, i = u) : s = s.next = d, X.lanes |= r, Ra |= r;
        o = o.next;
      } while (o !== null && o !== e);
      if (s === null ? i = u : s.next = c, !ue(u, t.memoizedState) && (xt = true, h && (a = _l, a !== null))) throw a;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [
      t.memoizedState,
      l.dispatch
    ];
  }
  function cc(t) {
    var e = pt(), a = e.queue;
    if (a === null) throw Error(C(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, u = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ue(u, e.memoizedState) || (xt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u;
    }
    return [
      u,
      l
    ];
  }
  function em(t, e, a) {
    var l = X, n = pt(), u = W;
    if (u) {
      if (a === void 0) throw Error(C(407));
      a = a();
    } else a = e();
    var i = !ue((lt || n).memoizedState, a);
    if (i && (n.memoizedState = a, xt = true), n = n.queue, fr(nm.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || i || vt !== null && vt.memoizedState.tag & 1) {
      if (l.flags |= 2048, wl(9, {
        destroy: void 0
      }, lm.bind(null, l, n, a, e), null), nt === null) throw Error(C(349));
      u || We & 127 || am(l, e, a);
    }
    return a;
  }
  function am(t, e, a) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: a
    }, e = X.updateQueue, e === null ? (e = Mi(), X.updateQueue = e, e.stores = [
      t
    ]) : (a = e.stores, a === null ? e.stores = [
      t
    ] : a.push(t));
  }
  function lm(t, e, a, l) {
    e.value = a, e.getSnapshot = l, um(e) && im(t);
  }
  function nm(t, e, a) {
    return a(function() {
      um(e) && im(t);
    });
  }
  function um(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !ue(t, a);
    } catch {
      return true;
    }
  }
  function im(t) {
    var e = Wa(t, 2);
    e !== null && Kt(e, t, 2);
  }
  function us(t) {
    var e = Bt();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Za) {
        oa(true);
        try {
          a();
        } finally {
          oa(false);
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
  function cm(t, e, a, l) {
    return t.baseState = a, or(t, lt, typeof l == "function" ? l : Fe);
  }
  function dp(t, e, a, l, n) {
    if (Oi(t)) throw Error(C(485));
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
      L.T !== null ? a(true) : u.isTransition = false, l(u), a = e.pending, a === null ? (u.next = e.pending = u, sm(e, u)) : (u.next = a.next, e.pending = a.next = u);
    }
  }
  function sm(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var u = L.T, i = {};
      L.T = i;
      try {
        var c = a(n, l), s = L.S;
        s !== null && s(i, c), wo(t, e, c);
      } catch (o) {
        is(t, e, o);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), L.T = u;
      }
    } else try {
      u = a(n, l), wo(t, e, u);
    } catch (o) {
      is(t, e, o);
    }
  }
  function wo(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      jo(t, e, l);
    }, function(l) {
      return is(t, e, l);
    }) : jo(t, e, a);
  }
  function jo(t, e, a) {
    e.status = "fulfilled", e.value = a, rm(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, sm(t, a)));
  }
  function is(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, rm(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function rm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function om(t, e) {
    return e;
  }
  function Ho(t, e) {
    if (W) {
      var a = nt.formState;
      if (a !== null) {
        t: {
          var l = X;
          if (W) {
            if (ct) {
              e: {
                for (var n = ct, u = ye; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = ge(n.nextSibling), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                ct = ge(n.nextSibling), l = n.data === "F!";
                break t;
              }
            }
            za(l);
          }
          l = false;
        }
        l && (e = a[0]);
      }
    }
    return a = Bt(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: om,
      lastRenderedState: e
    }, a.queue = l, a = Am.bind(null, X, l), l.dispatch = a, l = us(false), u = yr.bind(null, X, false, l.queue), l = Bt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = dp.bind(null, X, n, u, a), n.dispatch = a, l.memoizedState = t, [
      e,
      a,
      false
    ];
  }
  function Uo(t) {
    var e = pt();
    return fm(e, lt, t);
  }
  function fm(t, e, a) {
    if (e = or(t, e, om)[0], t = Nu(Fe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var l = Jn(e);
    } catch (i) {
      throw i === Ql ? Ri : i;
    }
    else l = e;
    e = pt();
    var n = e.queue, u = n.dispatch;
    return a !== e.memoizedState && (X.flags |= 2048, wl(9, {
      destroy: void 0
    }, mp.bind(null, n, a), null)), [
      l,
      u,
      t
    ];
  }
  function mp(t, e) {
    t.action = e;
  }
  function Bo(t) {
    var e = pt(), a = lt;
    if (a !== null) return fm(e, a, t);
    pt(), e = e.memoizedState, a = pt();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [
      e,
      l,
      false
    ];
  }
  function wl(t, e, a, l) {
    return t = {
      tag: t,
      create: a,
      deps: l,
      inst: e,
      next: null
    }, e = X.updateQueue, e === null && (e = Mi(), X.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function dm() {
    return pt().memoizedState;
  }
  function Ou(t, e, a, l) {
    var n = Bt();
    X.flags |= t, n.memoizedState = wl(1 | e, {
      destroy: void 0
    }, a, l === void 0 ? null : l);
  }
  function Ni(t, e, a, l) {
    var n = pt();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    lt !== null && l !== null && nr(l, lt.memoizedState.deps) ? n.memoizedState = wl(e, u, a, l) : (X.flags |= t, n.memoizedState = wl(1 | e, u, a, l));
  }
  function qo(t, e) {
    Ou(8390656, 8, t, e);
  }
  function fr(t, e) {
    Ni(2048, 8, t, e);
  }
  function hp(t) {
    X.flags |= 4;
    var e = X.updateQueue;
    if (e === null) e = Mi(), X.updateQueue = e, e.events = [
      t
    ];
    else {
      var a = e.events;
      a === null ? e.events = [
        t
      ] : a.push(t);
    }
  }
  function mm(t) {
    var e = pt().memoizedState;
    return hp({
      ref: e,
      nextImpl: t
    }), function() {
      if (F & 2) throw Error(C(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function hm(t, e) {
    return Ni(4, 2, t, e);
  }
  function ym(t, e) {
    return Ni(4, 4, t, e);
  }
  function pm(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function gm(t, e, a) {
    a = a != null ? a.concat([
      t
    ]) : null, Ni(4, 4, pm.bind(null, e, t), a);
  }
  function dr() {
  }
  function vm(t, e) {
    var a = pt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && nr(e, l[1]) ? l[0] : (a.memoizedState = [
      t,
      e
    ], t);
  }
  function bm(t, e) {
    var a = pt();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && nr(e, l[1])) return l[0];
    if (l = t(), Za) {
      oa(true);
      try {
        t();
      } finally {
        oa(false);
      }
    }
    return a.memoizedState = [
      l,
      e
    ], l;
  }
  function mr(t, e, a) {
    return a === void 0 || We & 1073741824 && !($ & 261930) ? t.memoizedState = e : (t.memoizedState = a, t = ch(), X.lanes |= t, Ra |= t, a);
  }
  function Sm(t, e, a, l) {
    return ue(a, e) ? a : Dl.current !== null ? (t = mr(t, a, l), ue(t, e) || (xt = true), t) : !(We & 42) || We & 1073741824 && !($ & 261930) ? (xt = true, t.memoizedState = a) : (t = ch(), X.lanes |= t, Ra |= t, e);
  }
  function xm(t, e, a, l, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = L.T, c = {};
    L.T = c, yr(t, false, e, a);
    try {
      var s = n(), o = L.S;
      if (o !== null && o(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var h = rp(s, l);
        Sn(t, e, h, ne(t));
      } else Sn(t, e, l, ne(t));
    } catch (r) {
      Sn(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: r
      }, ne());
    } finally {
      P.p = u, i !== null && c.types !== null && (i.types = c.types), L.T = i;
    }
  }
  function yp() {
  }
  function cs(t, e, a, l) {
    if (t.tag !== 5) throw Error(C(476));
    var n = Em(t).queue;
    xm(t, n, e, Ba, a === null ? yp : function() {
      return Tm(t), a(l);
    });
  }
  function Em(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Ba,
      baseState: Ba,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: Ba
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Tm(t) {
    var e = Em(t);
    e.next === null && (e = t.alternate.memoizedState), Sn(t, e.next.queue, {}, ne());
  }
  function hr() {
    return wt(Bn);
  }
  function _m() {
    return pt().memoizedState;
  }
  function zm() {
    return pt().memoizedState;
  }
  function pp(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ne();
          t = ga(a);
          var l = va(e, t, a);
          l !== null && (Kt(l, e, a), gn(l, e, a)), e = {
            cache: Is()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function gp(t, e, a) {
    var l = ne();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Oi(t) ? Rm(e, a) : (a = $s(t, e, a, l), a !== null && (Kt(a, t, l), Mm(a, e, l)));
  }
  function Am(t, e, a) {
    var l = ne();
    Sn(t, e, a, l);
  }
  function Sn(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Oi(t)) Rm(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var i = e.lastRenderedState, c = u(i, a);
        if (n.hasEagerState = true, n.eagerState = c, ue(c, i)) return Ai(t, e, n, 0), nt === null && zi(), false;
      } catch {
      } finally {
      }
      if (a = $s(t, e, n, l), a !== null) return Kt(a, t, l), Mm(a, e, l), true;
    }
    return false;
  }
  function yr(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: _r(),
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Oi(t)) {
      if (e) throw Error(C(479));
    } else e = $s(t, a, l, 2), e !== null && Kt(e, t, 2);
  }
  function Oi(t) {
    var e = t.alternate;
    return t === X || e !== null && e === X;
  }
  function Rm(t, e) {
    Al = Iu = true;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function Mm(t, e, a) {
    if (a & 4194048) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, md(t, a);
    }
  }
  var jn = {
    readContext: wt,
    use: Ci,
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
  var Cm = {
    readContext: wt,
    use: Ci,
    useCallback: function(t, e) {
      return Bt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: wt,
    useEffect: qo,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([
        t
      ]) : null, Ou(4194308, 4, pm.bind(null, e, t), a);
    },
    useLayoutEffect: function(t, e) {
      return Ou(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ou(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Bt();
      e = e === void 0 ? null : e;
      var l = t();
      if (Za) {
        oa(true);
        try {
          t();
        } finally {
          oa(false);
        }
      }
      return a.memoizedState = [
        l,
        e
      ], l;
    },
    useReducer: function(t, e, a) {
      var l = Bt();
      if (a !== void 0) {
        var n = a(e);
        if (Za) {
          oa(true);
          try {
            a(e);
          } finally {
            oa(false);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = gp.bind(null, X, t), [
        l.memoizedState,
        t
      ];
    },
    useRef: function(t) {
      var e = Bt();
      return t = {
        current: t
      }, e.memoizedState = t;
    },
    useState: function(t) {
      t = us(t);
      var e = t.queue, a = Am.bind(null, X, e);
      return e.dispatch = a, [
        t.memoizedState,
        a
      ];
    },
    useDebugValue: dr,
    useDeferredValue: function(t, e) {
      var a = Bt();
      return mr(a, t, e);
    },
    useTransition: function() {
      var t = us(false);
      return t = xm.bind(null, X, t.queue, true, false), Bt().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = X, n = Bt();
      if (W) {
        if (a === void 0) throw Error(C(407));
        a = a();
      } else {
        if (a = e(), nt === null) throw Error(C(349));
        $ & 127 || am(l, e, a);
      }
      n.memoizedState = a;
      var u = {
        value: a,
        getSnapshot: e
      };
      return n.queue = u, qo(nm.bind(null, l, u, t), [
        t
      ]), l.flags |= 2048, wl(9, {
        destroy: void 0
      }, lm.bind(null, l, u, a, e), null), a;
    },
    useId: function() {
      var t = Bt(), e = nt.identifierPrefix;
      if (W) {
        var a = Me, l = Re;
        a = (l & ~(1 << 32 - le(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = ti++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else a = op++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: hr,
    useFormState: Ho,
    useActionState: Ho,
    useOptimistic: function(t) {
      var e = Bt();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = yr.bind(null, X, true, a), a.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: rr,
    useCacheRefresh: function() {
      return Bt().memoizedState = pp.bind(null, X);
    },
    useEffectEvent: function(t) {
      var e = Bt(), a = {
        impl: t
      };
      return e.memoizedState = a, function() {
        if (F & 2) throw Error(C(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, pr = {
    readContext: wt,
    use: Ci,
    useCallback: vm,
    useContext: wt,
    useEffect: fr,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: ym,
    useMemo: bm,
    useReducer: Nu,
    useRef: dm,
    useState: function() {
      return Nu(Fe);
    },
    useDebugValue: dr,
    useDeferredValue: function(t, e) {
      var a = pt();
      return Sm(a, lt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Nu(Fe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Jn(t),
        e
      ];
    },
    useSyncExternalStore: em,
    useId: _m,
    useHostTransitionStatus: hr,
    useFormState: Uo,
    useActionState: Uo,
    useOptimistic: function(t, e) {
      var a = pt();
      return cm(a, lt, t, e);
    },
    useMemoCache: rr,
    useCacheRefresh: zm
  };
  pr.useEffectEvent = mm;
  var Nm = {
    readContext: wt,
    use: Ci,
    useCallback: vm,
    useContext: wt,
    useEffect: fr,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: ym,
    useMemo: bm,
    useReducer: cc,
    useRef: dm,
    useState: function() {
      return cc(Fe);
    },
    useDebugValue: dr,
    useDeferredValue: function(t, e) {
      var a = pt();
      return lt === null ? mr(a, t, e) : Sm(a, lt.memoizedState, t, e);
    },
    useTransition: function() {
      var t = cc(Fe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Jn(t),
        e
      ];
    },
    useSyncExternalStore: em,
    useId: _m,
    useHostTransitionStatus: hr,
    useFormState: Bo,
    useActionState: Bo,
    useOptimistic: function(t, e) {
      var a = pt();
      return lt !== null ? cm(a, lt, t, e) : (a.baseState = t, [
        t,
        a.queue.dispatch
      ]);
    },
    useMemoCache: rr,
    useCacheRefresh: zm
  };
  Nm.useEffectEvent = mm;
  function sc(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : rt({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var ss = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = ne(), n = ga(l);
      n.payload = e, a != null && (n.callback = a), e = va(t, n, l), e !== null && (Kt(e, t, l), gn(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = ne(), n = ga(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = va(t, n, l), e !== null && (Kt(e, t, l), gn(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = ne(), l = ga(a);
      l.tag = 2, e != null && (l.callback = e), e = va(t, l, a), e !== null && (Kt(e, t, a), gn(e, t, a));
    }
  };
  function Lo(t, e, a, l, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Cn(a, l) || !Cn(n, u) : true;
  }
  function Yo(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && ss.enqueueReplaceState(e, e.state, null);
  }
  function Ka(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e) l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = rt({}, a));
      for (var n in t) a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function Om(t) {
    Ku(t);
  }
  function Dm(t) {
    console.error(t);
  }
  function wm(t) {
    Ku(t);
  }
  function ei(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, {
        componentStack: e.stack
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Go(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function rs(t, e, a) {
    return a = ga(a), a.tag = 3, a.payload = {
      element: null
    }, a.callback = function() {
      ei(t, e);
    }, a;
  }
  function jm(t) {
    return t = ga(t), t.tag = 3, t;
  }
  function Hm(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Go(e, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Go(e, a, l), typeof n != "function" && (ba === null ? ba = /* @__PURE__ */ new Set([
        this
      ]) : ba.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function vp(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && Xl(e, a, n, true), a = ie.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return pe === null ? ii() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Wu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([
              l
            ]) : e.add(l), bc(t, l, n)), false;
          case 22:
            return a.flags |= 65536, l === Wu ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                l
              ])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([
              l
            ]) : a.add(l)), bc(t, l, n)), false;
        }
        throw Error(C(435, a.tag));
      }
      return bc(t, l, n), ii(), false;
    }
    if (W) return e = ie.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Wc && (t = Error(C(422), {
      cause: l
    }), On(he(t, a)))) : (l !== Wc && (e = Error(C(423), {
      cause: l
    }), On(he(e, a))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = he(l, a), n = rs(t.stateNode, l, n), ic(t, n), ht !== 4 && (ht = 2)), false;
    var u = Error(C(520), {
      cause: l
    });
    if (u = he(u, a), Tn === null ? Tn = [
      u
    ] : Tn.push(u), ht !== 4 && (ht = 2), e === null) return true;
    l = he(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = rs(a.stateNode, l, t), ic(a, t), false;
        case 1:
          if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ba === null || !ba.has(u)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = jm(n), Hm(n, t, a, l), ic(a, n), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var gr = Error(C(461)), xt = false;
  function Nt(t, e, a, l) {
    e.child = t === null ? $d(e, null, a, l) : Va(e, t.child, a, l);
  }
  function Xo(t, e, a, l, n) {
    a = a.render;
    var u = e.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l) c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return Qa(e), l = ur(t, e, a, i, u, n), c = ir(), t !== null && !xt ? (cr(t, e, n), Pe(t, e, n)) : (W && c && Fs(e), e.flags |= 1, Nt(t, e, l, n), e.child);
  }
  function Qo(t, e, a, l, n) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" && !Ws(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Um(t, e, u, l, n)) : (t = Mu(a.type, null, l, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !vr(t, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Cn, a(i, l) && t.ref === e.ref) return Pe(t, e, n);
    }
    return e.flags |= 1, t = Ke(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Um(t, e, a, l, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Cn(u, l) && t.ref === e.ref) if (xt = false, e.pendingProps = l = u, vr(t, n)) t.flags & 131072 && (xt = true);
      else return e.lanes = t.lanes, Pe(t, e, n);
    }
    return os(t, e, a, l, n);
  }
  function Bm(t, e, a, l) {
    var n = l.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if (e.flags & 128) {
        if (u = u !== null ? u.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; ) n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~u;
        } else l = 0, e.child = null;
        return Vo(t, e, u, a, l);
      }
      if (a & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Cu(e, u !== null ? u.cachePool : null), u !== null ? Do(e, u) : ls(), Pd(e);
      else return l = e.lanes = 536870912, Vo(t, e, u !== null ? u.baseLanes | a : a, a, l);
    } else u !== null ? (Cu(e, u.cachePool), Do(e, u), sa(), e.memoizedState = null) : (t !== null && Cu(e, null), ls(), sa());
    return Nt(t, e, n, a), e.child;
  }
  function on(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Vo(t, e, a, l, n) {
    var u = tr();
    return u = u === null ? null : {
      parent: St._currentValue,
      pool: u
    }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Cu(e, null), ls(), Pd(e), t !== null && Xl(t, e, l, true), e.childLanes = n, null;
  }
  function Du(t, e) {
    return e = ai({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Zo(t, e, a) {
    return Va(e, t.child, null, a), t = Du(e, e.pendingProps), t.flags |= 2, Pt(e), e.memoizedState = null, t;
  }
  function bp(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (l.mode === "hidden") return t = Du(e, l), e.lanes = 536870912, on(null, t);
        if (ns(e), (t = ct) ? (t = Ch(t, ye), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: _a !== null ? {
            id: Re,
            overflow: Me
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xd(t), a.return = e, e.child = a, Dt = e, ct = null)) : t = null, t === null) throw za(e);
        return e.lanes = 536870912, null;
      }
      return Du(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ns(e), n) if (e.flags & 256) e.flags &= -257, e = Zo(t, e, a);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(C(558));
      else if (xt || Xl(t, e, a, false), n = (a & t.childLanes) !== 0, xt || n) {
        if (l = nt, l !== null && (i = hd(l, a), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Wa(t, i), Kt(l, t, i), gr;
        ii(), e = Zo(t, e, a);
      } else t = u.treeContext, ct = ge(i.nextSibling), Dt = e, W = true, pa = null, ye = false, t !== null && Vd(e, t), e = Du(e, l), e.flags |= 4096;
      return e;
    }
    return t = Ke(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wu(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(C(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function os(t, e, a, l, n) {
    return Qa(e), a = ur(t, e, a, l, void 0, n), l = ir(), t !== null && !xt ? (cr(t, e, n), Pe(t, e, n)) : (W && l && Fs(e), e.flags |= 1, Nt(t, e, a, n), e.child);
  }
  function Ko(t, e, a, l, n, u) {
    return Qa(e), e.updateQueue = null, a = tm(e, l, a, n), Id(t), l = ir(), t !== null && !xt ? (cr(t, e, u), Pe(t, e, u)) : (W && l && Fs(e), e.flags |= 1, Nt(t, e, a, u), e.child);
  }
  function ko(t, e, a, l, n) {
    if (Qa(e), e.stateNode === null) {
      var u = gl, i = a.contextType;
      typeof i == "object" && i !== null && (u = wt(i)), u = new a(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ss, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, ar(e), i = a.contextType, u.context = typeof i == "object" && i !== null ? wt(i) : gl, u.state = e.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (sc(e, a, i, l), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && ss.enqueueReplaceState(u, u.state, null), bn(e, l, u, n), vn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = true;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, s = Ka(a, c);
      u.props = s;
      var o = u.context, h = a.contextType;
      i = gl, typeof h == "object" && h !== null && (i = wt(h));
      var r = a.getDerivedStateFromProps;
      h = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || o !== i) && Yo(e, u, l, i), ua = false;
      var d = e.memoizedState;
      u.state = d, bn(e, l, u, n), vn(), o = e.memoizedState, c || d !== o || ua ? (typeof r == "function" && (sc(e, a, r, l), o = e.memoizedState), (s = ua || Lo(e, a, s, l, d, o, i)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = o), u.props = l, u.state = o, u.context = i, l = s) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = false);
    } else {
      u = e.stateNode, es(t, e), i = e.memoizedProps, h = Ka(a, i), u.props = h, r = e.pendingProps, d = u.context, o = a.contextType, s = gl, typeof o == "object" && o !== null && (s = wt(o)), c = a.getDerivedStateFromProps, (o = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || d !== s) && Yo(e, u, l, s), ua = false, d = e.memoizedState, u.state = d, bn(e, l, u, n), vn();
      var p = e.memoizedState;
      i !== r || d !== p || ua || t !== null && t.dependencies !== null && $u(t.dependencies) ? (typeof c == "function" && (sc(e, a, c, l), p = e.memoizedState), (h = ua || Lo(e, a, h, l, d, p, s) || t !== null && t.dependencies !== null && $u(t.dependencies)) ? (o || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, p, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, p, s)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = p), u.props = l, u.state = p, u.context = s, l = h) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), l = false);
    }
    return u = l, wu(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = Va(e, t.child, null, n), e.child = Va(e, null, a, n)) : Nt(t, e, a, n), e.memoizedState = u.state, t = e.child) : t = Pe(t, e, n), t;
  }
  function Jo(t, e, a, l) {
    return Xa(), e.flags |= 256, Nt(t, e, a, l), e.child;
  }
  var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function oc(t) {
    return {
      baseLanes: t,
      cachePool: Kd()
    };
  }
  function fc(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= te), t;
  }
  function qm(t, e, a) {
    var l = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (yt.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (n ? ca(e) : sa(), (t = ct) ? (t = Ch(t, ye), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: _a !== null ? {
            id: Re,
            overflow: Me
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xd(t), a.return = e, e.child = a, Dt = e, ct = null)) : t = null, t === null) throw za(e);
        return _s(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = l.children;
      return l = l.fallback, n ? (sa(), n = e.mode, c = ai({
        mode: "hidden",
        children: c
      }, n), l = qa(l, n, a, null), c.return = e, l.return = e, c.sibling = l, e.child = c, l = e.child, l.memoizedState = oc(a), l.childLanes = fc(t, i, a), e.memoizedState = rc, on(null, l)) : (ca(e), fs(e, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) e.flags & 256 ? (ca(e), e.flags &= -257, e = dc(t, e, a)) : e.memoizedState !== null ? (sa(), e.child = t.child, e.flags |= 128, e = null) : (sa(), c = l.fallback, n = e.mode, l = ai({
        mode: "visible",
        children: l.children
      }, n), c = qa(c, n, a, null), c.flags |= 2, l.return = e, c.return = e, l.sibling = c, e.child = l, Va(e, t.child, null, a), l = e.child, l.memoizedState = oc(a), l.childLanes = fc(t, i, a), e.memoizedState = rc, e = on(null, l));
      else if (ca(e), _s(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var o = i.dgst;
        i = o, l = Error(C(419)), l.stack = "", l.digest = i, On({
          value: l,
          source: null,
          stack: null
        }), e = dc(t, e, a);
      } else if (xt || Xl(t, e, a, false), i = (a & t.childLanes) !== 0, xt || i) {
        if (i = nt, i !== null && (l = hd(i, a), l !== 0 && l !== s.retryLane)) throw s.retryLane = l, Wa(t, l), Kt(i, t, l), gr;
        Ts(c) || ii(), e = dc(t, e, a);
      } else Ts(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = s.treeContext, ct = ge(c.nextSibling), Dt = e, W = true, pa = null, ye = false, t !== null && Vd(e, t), e = fs(e, l.children), e.flags |= 4096);
      return e;
    }
    return n ? (sa(), c = l.fallback, n = e.mode, s = t.child, o = s.sibling, l = Ke(s, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = s.subtreeFlags & 65011712, o !== null ? c = Ke(o, c) : (c = qa(c, n, a, null), c.flags |= 2), c.return = e, l.return = e, l.sibling = c, e.child = l, on(null, l), l = e.child, c = t.child.memoizedState, c === null ? c = oc(a) : (n = c.cachePool, n !== null ? (s = St._currentValue, n = n.parent !== s ? {
      parent: s,
      pool: s
    } : n) : n = Kd(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), l.memoizedState = c, l.childLanes = fc(t, i, a), e.memoizedState = rc, on(t.child, l)) : (ca(e), a = t.child, t = a.sibling, a = Ke(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
      t
    ], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function fs(t, e) {
    return e = ai({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function ai(t, e) {
    return t = It(22, t, null, e), t.lanes = 0, t;
  }
  function dc(t, e, a) {
    return Va(e, t.child, null, a), t = fs(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function $o(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Pc(t.return, e, a);
  }
  function mc(t, e, a, l, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = l, i.tail = a, i.tailMode = n, i.treeForkCount = u);
  }
  function Lm(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var i = yt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, ut(yt, i), Nt(t, e, l, a), l = W ? Nn : 0, !c && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && $o(t, a, e);
      else if (t.tag === 19) $o(t, a, e);
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
        for (a = e.child, n = null; a !== null; ) t = a.alternate, t !== null && Pu(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), mc(e, false, n, a, u, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && Pu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        mc(e, true, a, null, u, l);
        break;
      case "together":
        mc(e, false, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Pe(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), Ra |= e.lanes, !(a & e.childLanes)) if (t !== null) {
      if (Xl(t, e, a, false), (a & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(C(153));
    if (e.child !== null) {
      for (t = e.child, a = Ke(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; ) t = t.sibling, a = a.sibling = Ke(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function vr(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && $u(t)));
  }
  function Sp(t, e, a) {
    switch (e.tag) {
      case 3:
        Xu(e, e.stateNode.containerInfo), ia(e, St, t.memoizedState.cache), Xa();
        break;
      case 27:
      case 5:
        Lc(e);
        break;
      case 4:
        Xu(e, e.stateNode.containerInfo);
        break;
      case 10:
        ia(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, ns(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (ca(e), e.flags |= 128, null) : a & e.child.childLanes ? qm(t, e, a) : (ca(e), t = Pe(t, e, a), t !== null ? t.sibling : null);
        ca(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (Xl(t, e, a, false), l = (a & e.childLanes) !== 0), n) {
          if (l) return Lm(t, e, a);
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), ut(yt, yt.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Bm(t, e, a, e.pendingProps);
      case 24:
        ia(e, St, t.memoizedState.cache);
    }
    return Pe(t, e, a);
  }
  function Ym(t, e, a) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) xt = true;
    else {
      if (!vr(t, a) && !(e.flags & 128)) return xt = false, Sp(t, e, a);
      xt = !!(t.flags & 131072);
    }
    else xt = false, W && e.flags & 1048576 && Qd(e, Nn, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = Ha(e.elementType), e.type = t, typeof t == "function") Ws(t) ? (l = Ka(t, l), e.tag = 1, e = ko(null, e, t, l, a)) : (e.tag = 0, e = os(null, e, t, l, a));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Us) {
                e.tag = 11, e = Xo(null, e, t, l, a);
                break t;
              } else if (n === Bs) {
                e.tag = 14, e = Qo(null, e, t, l, a);
                break t;
              }
            }
            throw e = Bc(t) || t, Error(C(306, e, ""));
          }
        }
        return e;
      case 0:
        return os(t, e, e.type, e.pendingProps, a);
      case 1:
        return l = e.type, n = Ka(l, e.pendingProps), ko(t, e, l, n, a);
      case 3:
        t: {
          if (Xu(e, e.stateNode.containerInfo), t === null) throw Error(C(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, es(t, e), bn(e, l, null, a);
          var i = e.memoizedState;
          if (l = i.cache, ia(e, St, l), l !== u.cache && Ic(e, [
            St
          ], a, true), vn(), l = i.element, u.isDehydrated) if (u = {
            element: l,
            isDehydrated: false,
            cache: i.cache
          }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
            e = Jo(t, e, l, a);
            break t;
          } else if (l !== n) {
            n = he(Error(C(424)), e), On(n), e = Jo(t, e, l, a);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (ct = ge(t.firstChild), Dt = e, W = true, pa = null, ye = true, a = $d(e, null, l, a), e.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Xa(), l === n) {
              e = Pe(t, e, a);
              break t;
            }
            Nt(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return wu(t, e), t === null ? (a = pf(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : W || (a = e.type, t = e.pendingProps, l = oi(ya.current).createElement(a), l[Ot] = e, l[kt] = t, jt(l, a, t), At(l), e.stateNode = l) : e.memoizedState = pf(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Lc(e), t === null && W && (l = e.stateNode = Nh(e.type, e.pendingProps, ya.current), Dt = e, ye = true, n = ct, Ca(e.type) ? (zs = n, ct = ge(l.firstChild)) : ct = n), Nt(t, e, e.pendingProps.children, a), wu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((n = l = ct) && (l = Wp(l, e.type, e.pendingProps, ye), l !== null ? (e.stateNode = l, Dt = e, ct = ge(l.firstChild), ye = false, n = true) : n = false), n || za(e)), Lc(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, l = u.children, xs(n, u) ? l = null : i !== null && xs(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = ur(t, e, fp, null, null, a), Bn._currentValue = n), wu(t, e), Nt(t, e, l, a), e.child;
      case 6:
        return t === null && W && ((t = a = ct) && (a = Fp(a, e.pendingProps, ye), a !== null ? (e.stateNode = a, Dt = e, ct = null, t = true) : t = false), t || za(e)), null;
      case 13:
        return qm(t, e, a);
      case 4:
        return Xu(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = Va(e, null, l, a) : Nt(t, e, l, a), e.child;
      case 11:
        return Xo(t, e, e.type, e.pendingProps, a);
      case 7:
        return Nt(t, e, e.pendingProps, a), e.child;
      case 8:
        return Nt(t, e, e.pendingProps.children, a), e.child;
      case 12:
        return Nt(t, e, e.pendingProps.children, a), e.child;
      case 10:
        return l = e.pendingProps, ia(e, e.type, l.value), Nt(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, Qa(e), n = wt(n), l = l(n), e.flags |= 1, Nt(t, e, l, a), e.child;
      case 14:
        return Qo(t, e, e.type, e.pendingProps, a);
      case 15:
        return Um(t, e, e.type, e.pendingProps, a);
      case 19:
        return Lm(t, e, a);
      case 31:
        return bp(t, e, a);
      case 22:
        return Bm(t, e, a, e.pendingProps);
      case 24:
        return Qa(e), l = wt(St), t === null ? (n = tr(), n === null && (n = nt, u = Is(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), e.memoizedState = {
          parent: l,
          cache: n
        }, ar(e), ia(e, St, n)) : (t.lanes & a && (es(t, e), bn(e, null, null, a), vn()), n = t.memoizedState, u = e.memoizedState, n.parent !== l ? (n = {
          parent: l,
          cache: l
        }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ia(e, St, l)) : (l = u.cache, ia(e, St, l), l !== n.cache && Ic(e, [
          St
        ], a, true))), Nt(t, e, e.pendingProps.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(C(156, e.tag));
  }
  function Be(t) {
    t.flags |= 4;
  }
  function hc(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
      else if (oh()) t.flags |= 8192;
      else throw Ya = Wu, er;
    } else t.flags &= -16777217;
  }
  function Wo(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !wh(e)) if (oh()) t.flags |= 8192;
    else throw Ya = Wu, er;
  }
  function pu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? fd() : 536870912, t.lanes |= e, jl |= e);
  }
  function en(t, e) {
    if (!W) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = t.tail;
        for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
    }
  }
  function it(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e) for (var n = t.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
    else for (n = t.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function xp(t, e, a) {
    var l = e.pendingProps;
    switch (Ps(e), e.tag) {
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
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ke(St), Ml(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (nl(e) ? Be(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, uc())), it(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Be(e), u !== null ? (it(e), Wo(e, u)) : (it(e), hc(e, n, null, l, a))) : u ? u !== t.memoizedState ? (Be(e), it(e), Wo(e, u)) : (it(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Be(e), it(e), hc(e, n, t, l, a)), null;
      case 27:
        if (Qu(e), a = ya.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && Be(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(C(166));
            return it(e), null;
          }
          t = Ne.current, nl(e) ? zo(e) : (t = Nh(n, l, a), e.stateNode = t, Be(e));
        }
        return it(e), null;
      case 5:
        if (Qu(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && Be(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(C(166));
            return it(e), null;
          }
          if (u = Ne.current, nl(e)) zo(e);
          else {
            var i = oi(ya.current);
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
            u[Ot] = e, u[kt] = l;
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
            t: switch (jt(u, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = true;
                break t;
              default:
                l = false;
            }
            l && Be(e);
          }
        }
        return it(e), hc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && Be(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(C(166));
          if (t = ya.current, nl(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = Dt, n !== null) switch (n.tag) {
              case 27:
              case 5:
                l = n.memoizedProps;
            }
            t[Ot] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === true || Ah(t.nodeValue, a)), t || za(e, true);
          } else t = oi(t).createTextNode(l), t[Ot] = e, e.stateNode = t;
        }
        return it(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = nl(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(C(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(C(557));
              t[Ot] = e;
            } else Xa(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), t = false;
          } else a = uc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = true;
          if (!t) return e.flags & 256 ? (Pt(e), e) : (Pt(e), null);
          if (e.flags & 128) throw Error(C(558));
        }
        return it(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = nl(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(C(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(C(317));
              n[Ot] = e;
            } else Xa(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), n = false;
          } else n = uc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
          if (!n) return e.flags & 256 ? (Pt(e), e) : (Pt(e), null);
        }
        return Pt(e), e.flags & 128 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), pu(e, e.updateQueue), it(e), null);
      case 4:
        return Ml(), t === null && zr(e.stateNode.containerInfo), it(e), null;
      case 10:
        return ke(e.type), it(e), null;
      case 19:
        if (Rt(yt), l = e.memoizedState, l === null) return it(e), null;
        if (n = (e.flags & 128) !== 0, u = l.rendering, u === null) if (n) en(l, false);
        else {
          if (ht !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = Pu(t), u !== null) {
              for (e.flags |= 128, en(l, false), t = u.updateQueue, e.updateQueue = t, pu(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; ) Gd(a, t), a = a.sibling;
              return ut(yt, yt.current & 1 | 2), W && Ge(e, l.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          l.tail !== null && ee() > ni && (e.flags |= 128, n = true, en(l, false), e.lanes = 4194304);
        }
        else {
          if (!n) if (t = Pu(u), t !== null) {
            if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, pu(e, t), en(l, true), l.tail === null && l.tailMode === "hidden" && !u.alternate && !W) return it(e), null;
          } else 2 * ee() - l.renderingStartTime > ni && a !== 536870912 && (e.flags |= 128, n = true, en(l, false), e.lanes = 4194304);
          l.isBackwards ? (u.sibling = e.child, e.child = u) : (t = l.last, t !== null ? t.sibling = u : e.child = u, l.last = u);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ee(), t.sibling = null, a = yt.current, ut(yt, n ? a & 1 | 2 : a & 1), W && Ge(e, l.treeForkCount), t) : (it(e), null);
      case 22:
      case 23:
        return Pt(e), lr(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? a & 536870912 && !(e.flags & 128) && (it(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : it(e), a = e.updateQueue, a !== null && pu(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && Rt(La), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ke(St), it(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(C(156, e.tag));
  }
  function Ep(t, e) {
    switch (Ps(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ke(St), Ml(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Qu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Pt(e), e.alternate === null) throw Error(C(340));
          Xa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Pt(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(C(340));
          Xa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Rt(yt), null;
      case 4:
        return Ml(), null;
      case 10:
        return ke(e.type), null;
      case 22:
      case 23:
        return Pt(e), lr(), t !== null && Rt(La), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ke(St), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gm(t, e) {
    switch (Ps(e), e.tag) {
      case 3:
        ke(St), Ml();
        break;
      case 26:
      case 27:
      case 5:
        Qu(e);
        break;
      case 4:
        Ml();
        break;
      case 31:
        e.memoizedState !== null && Pt(e);
        break;
      case 13:
        Pt(e);
        break;
      case 19:
        Rt(yt);
        break;
      case 10:
        ke(e.type);
        break;
      case 22:
      case 23:
        Pt(e), lr(), t !== null && Rt(La);
        break;
      case 24:
        ke(St);
    }
  }
  function $n(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create, i = a.inst;
            l = u(), i.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Aa(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var i = l.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = e;
              var s = a, o = c;
              try {
                o();
              } catch (h) {
                et(n, s, h);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (h) {
      et(e, e.return, h);
    }
  }
  function Xm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Fd(e, a);
      } catch (l) {
        et(t, t.return, l);
      }
    }
  }
  function Qm(t, e, a) {
    a.props = Ka(t.type, t.memoizedProps), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      et(t, e, l);
    }
  }
  function xn(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      et(t, e, n);
    }
  }
  function Ce(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null) if (typeof l == "function") try {
      l();
    } catch (n) {
      et(t, e, n);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (n) {
      et(t, e, n);
    }
    else a.current = null;
  }
  function Vm(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      et(t, t.return, n);
    }
  }
  function yc(t, e, a) {
    try {
      var l = t.stateNode;
      Vp(l, t.type, a, e), l[kt] = e;
    } catch (n) {
      et(t, t.return, n);
    }
  }
  function Zm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ca(t.type) || t.tag === 4;
  }
  function pc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Zm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ca(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ds(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Ve));
    else if (l !== 4 && (l === 27 && Ca(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null)) for (ds(t, e, a), t = t.sibling; t !== null; ) ds(t, e, a), t = t.sibling;
  }
  function li(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6) t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && Ca(t.type) && (a = t.stateNode), t = t.child, t !== null)) for (li(t, e, a), t = t.sibling; t !== null; ) li(t, e, a), t = t.sibling;
  }
  function Km(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      jt(e, l, a), e[Ot] = t, e[kt] = a;
    } catch (u) {
      et(t, t.return, u);
    }
  }
  var Xe = false, bt = false, gc = false, Fo = typeof WeakSet == "function" ? WeakSet : Set, zt = null;
  function Tp(t, e) {
    if (t = t.containerInfo, bs = hi, t = wd(t), ks(t)) {
      if ("selectionStart" in t) var a = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        a = (a = t.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var n = l.anchorOffset, u = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, u.nodeType;
          } catch {
            a = null;
            break t;
          }
          var i = 0, c = -1, s = -1, o = 0, h = 0, r = t, d = null;
          e: for (; ; ) {
            for (var p; r !== a || n !== 0 && r.nodeType !== 3 || (c = i + n), r !== u || l !== 0 && r.nodeType !== 3 || (s = i + l), r.nodeType === 3 && (i += r.nodeValue.length), (p = r.firstChild) !== null; ) d = r, r = p;
            for (; ; ) {
              if (r === t) break e;
              if (d === a && ++o === n && (c = i), d === u && ++h === l && (s = i), (p = r.nextSibling) !== null) break;
              r = d, d = r.parentNode;
            }
            r = p;
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
    for (Ss = {
      focusedElem: t,
      selectionRange: a
    }, hi = false, zt = e; zt !== null; ) if (e = zt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, zt = t;
    else for (; zt !== null; ) {
      switch (e = zt, u = e.alternate, t = e.flags, e.tag) {
        case 0:
          if (t & 4 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (a = 0; a < t.length; a++) n = t[a], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if (t & 1024 && u !== null) {
            t = void 0, a = e, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
            try {
              var T = Ka(a.type, n);
              t = l.getSnapshotBeforeUpdate(T, u), l.__reactInternalSnapshotBeforeUpdate = t;
            } catch (M) {
              et(a, a.return, M);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9) Es(t);
            else if (a === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Es(t);
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
          if (t & 1024) throw Error(C(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, zt = t;
        break;
      }
      zt = e.return;
    }
  }
  function km(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Le(t, a), l & 4 && $n(5, a);
        break;
      case 1:
        if (Le(t, a), l & 4) if (t = a.stateNode, e === null) try {
          t.componentDidMount();
        } catch (i) {
          et(a, a.return, i);
        }
        else {
          var n = Ka(a.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            et(a, a.return, i);
          }
        }
        l & 64 && Xm(a), l & 512 && xn(a, a.return);
        break;
      case 3:
        if (Le(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              e = a.child.stateNode;
              break;
            case 1:
              e = a.child.stateNode;
          }
          try {
            Fd(t, e);
          } catch (i) {
            et(a, a.return, i);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Km(a);
      case 26:
      case 5:
        Le(t, a), e === null && l & 4 && Vm(a), l & 512 && xn(a, a.return);
        break;
      case 12:
        Le(t, a);
        break;
      case 31:
        Le(t, a), l & 4 && Wm(t, a);
        break;
      case 13:
        Le(t, a), l & 4 && Fm(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Dp.bind(null, a), Pp(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Xe, !l) {
          e = e !== null && e.memoizedState !== null || bt, n = Xe;
          var u = bt;
          Xe = l, (bt = e) && !u ? Ye(t, a, (a.subtreeFlags & 8772) !== 0) : Le(t, a), Xe = n, bt = u;
        }
        break;
      case 30:
        break;
      default:
        Le(t, a);
    }
  }
  function Jm(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Jm(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Gs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ft = null, Qt = false;
  function qe(t, e, a) {
    for (a = a.child; a !== null; ) $m(t, e, a), a = a.sibling;
  }
  function $m(t, e, a) {
    if (ae && typeof ae.onCommitFiberUnmount == "function") try {
      ae.onCommitFiberUnmount(Xn, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        bt || Ce(a, e), qe(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        bt || Ce(a, e);
        var l = ft, n = Qt;
        Ca(a.type) && (ft = a.stateNode, Qt = false), qe(t, e, a), zn(a.stateNode), ft = l, Qt = n;
        break;
      case 5:
        bt || Ce(a, e);
      case 6:
        if (l = ft, n = Qt, ft = null, qe(t, e, a), ft = l, Qt = n, ft !== null) if (Qt) try {
          (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(a.stateNode);
        } catch (u) {
          et(a, e, u);
        }
        else try {
          ft.removeChild(a.stateNode);
        } catch (u) {
          et(a, e, u);
        }
        break;
      case 18:
        ft !== null && (Qt ? (t = ft, ff(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), ql(t)) : ff(ft, a.stateNode));
        break;
      case 4:
        l = ft, n = Qt, ft = a.stateNode.containerInfo, Qt = true, qe(t, e, a), ft = l, Qt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Aa(2, a, e), bt || Aa(4, a, e), qe(t, e, a);
        break;
      case 1:
        bt || (Ce(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && Qm(a, e, l)), qe(t, e, a);
        break;
      case 21:
        qe(t, e, a);
        break;
      case 22:
        bt = (l = bt) || a.memoizedState !== null, qe(t, e, a), bt = l;
        break;
      default:
        qe(t, e, a);
    }
  }
  function Wm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ql(t);
      } catch (a) {
        et(e, e.return, a);
      }
    }
  }
  function Fm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      ql(t);
    } catch (a) {
      et(e, e.return, a);
    }
  }
  function _p(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Fo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Fo()), e;
      default:
        throw Error(C(435, t.tag));
    }
  }
  function gu(t, e) {
    var a = _p(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = wp.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function Yt(t, e) {
    var a = e.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var n = a[l], u = t, i = e, c = i;
      t: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Ca(c.type)) {
              ft = c.stateNode, Qt = false;
              break t;
            }
            break;
          case 5:
            ft = c.stateNode, Qt = false;
            break t;
          case 3:
          case 4:
            ft = c.stateNode.containerInfo, Qt = true;
            break t;
        }
        c = c.return;
      }
      if (ft === null) throw Error(C(160));
      $m(u, i, n), ft = null, Qt = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Pm(e, t), e = e.sibling;
  }
  var Ee = null;
  function Pm(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yt(e, t), Gt(t), l & 4 && (Aa(3, t, t.return), $n(3, t), Aa(5, t, t.return));
        break;
      case 1:
        Yt(e, t), Gt(t), l & 512 && (bt || a === null || Ce(a, a.return)), l & 64 && Xe && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Ee;
        if (Yt(e, t), Gt(t), l & 512 && (bt || a === null || Ce(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = t.memoizedState, a === null) if (l === null) if (t.stateNode === null) {
            t: {
              l = t.type, a = t.memoizedProps, n = n.ownerDocument || n;
              e: switch (l) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[Zn] || u[Ot] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(u, n.querySelector("head > title"))), jt(u, l, a), u[Ot] = t, At(u), l = u;
                  break t;
                case "link":
                  var i = vf("link", "href", n).get(l + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(l), jt(u, l, a), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = vf("meta", "content", n).get(l + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(l), jt(u, l, a), n.head.appendChild(u);
                  break;
                default:
                  throw Error(C(468, l));
              }
              u[Ot] = t, At(u), l = u;
            }
            t.stateNode = l;
          } else bf(n, t.type, t.stateNode);
          else t.stateNode = gf(n, l, t.memoizedProps);
          else u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? bf(n, t.type, t.stateNode) : gf(n, l, t.memoizedProps)) : l === null && t.stateNode !== null && yc(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Yt(e, t), Gt(t), l & 512 && (bt || a === null || Ce(a, a.return)), a !== null && l & 4 && yc(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Yt(e, t), Gt(t), l & 512 && (bt || a === null || Ce(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Nl(n, "");
          } catch (T) {
            et(t, t.return, T);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, yc(t, n, a !== null ? a.memoizedProps : n)), l & 1024 && (gc = true);
        break;
      case 6:
        if (Yt(e, t), Gt(t), l & 4) {
          if (t.stateNode === null) throw Error(C(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (T) {
            et(t, t.return, T);
          }
        }
        break;
      case 3:
        if (Uu = null, n = Ee, Ee = fi(e.containerInfo), Yt(e, t), Ee = n, Gt(t), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          ql(e.containerInfo);
        } catch (T) {
          et(t, t.return, T);
        }
        gc && (gc = false, Im(t));
        break;
      case 4:
        l = Ee, Ee = fi(t.stateNode.containerInfo), Yt(e, t), Gt(t), Ee = l;
        break;
      case 12:
        Yt(e, t), Gt(t);
        break;
      case 31:
        Yt(e, t), Gt(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, gu(t, l)));
        break;
      case 13:
        Yt(e, t), Gt(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Di = ee()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, gu(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, o = Xe, h = bt;
        if (Xe = o || n, bt = h || s, Yt(e, t), bt = h, Xe = o, Gt(t), l & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || s || Xe || bt || Ua(t)), a = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (a === null) {
              s = a = e;
              try {
                if (u = s.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var r = s.memoizedProps.style, d = r != null && r.hasOwnProperty("display") ? r.display : null;
                  c.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                }
              } catch (T) {
                et(s, s.return, T);
              }
            }
          } else if (e.tag === 6) {
            if (a === null) {
              s = e;
              try {
                s.stateNode.nodeValue = n ? "" : s.memoizedProps;
              } catch (T) {
                et(s, s.return, T);
              }
            }
          } else if (e.tag === 18) {
            if (a === null) {
              s = e;
              try {
                var p = s.stateNode;
                n ? df(p, true) : df(s.stateNode, false);
              } catch (T) {
                et(s, s.return, T);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            a === e && (a = null), e = e.return;
          }
          a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
        }
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, gu(t, a))));
        break;
      case 19:
        Yt(e, t), Gt(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, gu(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Yt(e, t), Gt(t);
    }
  }
  function Gt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Zm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(C(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = pc(t);
            li(t, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Nl(i, ""), a.flags &= -33);
            var c = pc(t);
            li(t, c, i);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, o = pc(t);
            ds(t, o, s);
            break;
          default:
            throw Error(C(161));
        }
      } catch (h) {
        et(t, t.return, h);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Im(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      Im(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function Le(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) km(t, e.alternate, e), e = e.sibling;
  }
  function Ua(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Aa(4, e, e.return), Ua(e);
          break;
        case 1:
          Ce(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Qm(e, e.return, a), Ua(e);
          break;
        case 27:
          zn(e.stateNode);
        case 26:
        case 5:
          Ce(e, e.return), Ua(e);
          break;
        case 22:
          e.memoizedState === null && Ua(e);
          break;
        case 30:
          Ua(e);
          break;
        default:
          Ua(e);
      }
      t = t.sibling;
    }
  }
  function Ye(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ye(n, u, a), $n(4, u);
          break;
        case 1:
          if (Ye(n, u, a), l = u, n = l.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (o) {
            et(l, l.return, o);
          }
          if (l = u, n = l.updateQueue, n !== null) {
            var c = l.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) Wd(s[n], c);
            } catch (o) {
              et(l, l.return, o);
            }
          }
          a && i & 64 && Xm(u), xn(u, u.return);
          break;
        case 27:
          Km(u);
        case 26:
        case 5:
          Ye(n, u, a), a && l === null && i & 4 && Vm(u), xn(u, u.return);
          break;
        case 12:
          Ye(n, u, a);
          break;
        case 31:
          Ye(n, u, a), a && i & 4 && Wm(n, u);
          break;
        case 13:
          Ye(n, u, a), a && i & 4 && Fm(n, u);
          break;
        case 22:
          u.memoizedState === null && Ye(n, u, a), xn(u, u.return);
          break;
        case 30:
          break;
        default:
          Ye(n, u, a);
      }
      e = e.sibling;
    }
  }
  function br(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && kn(a));
  }
  function Sr(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && kn(t));
  }
  function xe(t, e, a, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) th(t, e, a, l), e = e.sibling;
  }
  function th(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xe(t, e, a, l), n & 2048 && $n(9, e);
        break;
      case 1:
        xe(t, e, a, l);
        break;
      case 3:
        xe(t, e, a, l), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && kn(t)));
        break;
      case 12:
        if (n & 2048) {
          xe(t, e, a, l), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (s) {
            et(e, e.return, s);
          }
        } else xe(t, e, a, l);
        break;
      case 31:
        xe(t, e, a, l);
        break;
      case 13:
        xe(t, e, a, l);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? xe(t, e, a, l) : En(t, e) : u._visibility & 2 ? xe(t, e, a, l) : (u._visibility |= 2, cl(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && br(i, e);
        break;
      case 24:
        xe(t, e, a, l), n & 2048 && Sr(e.alternate, e);
        break;
      default:
        xe(t, e, a, l);
    }
  }
  function cl(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var u = t, i = e, c = a, s = l, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          cl(u, i, c, s, n), $n(8, i);
          break;
        case 23:
          break;
        case 22:
          var h = i.stateNode;
          i.memoizedState !== null ? h._visibility & 2 ? cl(u, i, c, s, n) : En(u, i) : (h._visibility |= 2, cl(u, i, c, s, n)), n && o & 2048 && br(i.alternate, i);
          break;
        case 24:
          cl(u, i, c, s, n), n && o & 2048 && Sr(i.alternate, i);
          break;
        default:
          cl(u, i, c, s, n);
      }
      e = e.sibling;
    }
  }
  function En(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var a = t, l = e, n = l.flags;
      switch (l.tag) {
        case 22:
          En(a, l), n & 2048 && br(l.alternate, l);
          break;
        case 24:
          En(a, l), n & 2048 && Sr(l.alternate, l);
          break;
        default:
          En(a, l);
      }
      e = e.sibling;
    }
  }
  var fn = 8192;
  function ul(t, e, a) {
    if (t.subtreeFlags & fn) for (t = t.child; t !== null; ) eh(t, e, a), t = t.sibling;
  }
  function eh(t, e, a) {
    switch (t.tag) {
      case 26:
        ul(t, e, a), t.flags & fn && t.memoizedState !== null && og(a, Ee, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ul(t, e, a);
        break;
      case 3:
      case 4:
        var l = Ee;
        Ee = fi(t.stateNode.containerInfo), ul(t, e, a), Ee = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = fn, fn = 16777216, ul(t, e, a), fn = l) : ul(t, e, a));
        break;
      default:
        ul(t, e, a);
    }
  }
  function ah(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function an(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var l = e[a];
        zt = l, nh(l, t);
      }
      ah(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) lh(t), t = t.sibling;
  }
  function lh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(t), t.flags & 2048 && Aa(9, t, t.return);
        break;
      case 3:
        an(t);
        break;
      case 12:
        an(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ju(t)) : an(t);
        break;
      default:
        an(t);
    }
  }
  function ju(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var l = e[a];
        zt = l, nh(l, t);
      }
      ah(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, e, e.return), ju(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, ju(e));
          break;
        default:
          ju(e);
      }
      t = t.sibling;
    }
  }
  function nh(t, e) {
    for (; zt !== null; ) {
      var a = zt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          kn(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, zt = l;
      else t: for (a = t; zt !== null; ) {
        l = zt;
        var n = l.sibling, u = l.return;
        if (Jm(l), l === a) {
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
      var e = wt(St), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return wt(St).controller.signal;
    }
  }, Ap = typeof WeakMap == "function" ? WeakMap : Map, F = 0, nt = null, J = null, $ = 0, tt = 0, Ft = null, da = false, Vl = false, xr = false, Ie = 0, ht = 0, Ra = 0, Ga = 0, Er = 0, te = 0, jl = 0, Tn = null, Vt = null, ms = false, Di = 0, uh = 0, ni = 1 / 0, ui = null, ba = null, Et = 0, Sa = null, Hl = null, Je = 0, hs = 0, ys = null, ih = null, _n = 0, ps = null;
  function ne() {
    return F & 2 && $ !== 0 ? $ & -$ : L.T !== null ? _r() : yd();
  }
  function ch() {
    if (te === 0) if (!($ & 536870912) || W) {
      var t = ru;
      ru <<= 1, !(ru & 3932160) && (ru = 262144), te = t;
    } else te = 536870912;
    return t = ie.current, t !== null && (t.flags |= 32), te;
  }
  function Kt(t, e, a) {
    (t === nt && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null) && (Ul(t, 0), ma(t, $, te, false)), Vn(t, a), (!(F & 2) || t !== nt) && (t === nt && (!(F & 2) && (Ga |= a), ht === 4 && ma(t, $, te, false)), we(t));
  }
  function sh(t, e, a) {
    if (F & 6) throw Error(C(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Qn(t, e), n = l ? Cp(t, e) : vc(t, e, true), u = l;
    do {
      if (n === 0) {
        Vl && !l && ma(t, e, 0, false);
        break;
      } else {
        if (a = t.current.alternate, u && !Rp(a)) {
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
              if (s && (Ul(c, i).flags |= 256), i = vc(c, i, false), i !== 2) {
                if (xr && !s) {
                  c.errorRecoveryDisabledLanes |= u, Ga |= u, n = 4;
                  break t;
                }
                u = Vt, Vt = n, u !== null && (Vt === null ? Vt = u : Vt.push.apply(Vt, u));
              }
              n = i;
            }
            if (u = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ul(t, 0), ma(t, e, 0, true);
          break;
        }
        t: {
          switch (l = t, u = n, u) {
            case 0:
            case 1:
              throw Error(C(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ma(l, e, te, !da);
              break t;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(C(329));
          }
          if ((e & 62914560) === e && (n = Di + 300 - ee(), 10 < n)) {
            if (ma(l, e, te, !da), xi(l, 0, true) !== 0) break t;
            Je = e, l.timeoutHandle = Mh(Po.bind(null, l, a, Vt, ui, ms, e, te, Ga, jl, da, u, "Throttled", -0, 0), n);
            break t;
          }
          Po(l, a, Vt, ui, ms, e, te, Ga, jl, da, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    we(t);
  }
  function Po(t, e, a, l, n, u, i, c, s, o, h, r, d, p) {
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
      }, eh(e, u, r);
      var T = (u & 62914560) === u ? Di - ee() : (u & 4194048) === u ? uh - ee() : 0;
      if (T = fg(r, T), T !== null) {
        Je = u, t.cancelPendingCommit = T(tf.bind(null, t, e, u, a, l, n, i, c, s, h, r, null, d, p)), ma(t, u, i, !o);
        return;
      }
    }
    tf(t, e, u, a, l, n, i, c, s);
  }
  function Rp(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
        var n = a[l], u = n.getSnapshot;
        n = n.value;
        try {
          if (!ue(u(), n)) return false;
        } catch {
          return false;
        }
      }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
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
  function ma(t, e, a, l) {
    e &= ~Er, e &= ~Ga, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - le(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && dd(t, a, e);
  }
  function wi() {
    return F & 6 ? true : (Wn(0), false);
  }
  function Tr() {
    if (J !== null) {
      if (tt === 0) var t = J.return;
      else t = J, Ze = Fa = null, sr(t), zl = null, Dn = 0, t = J;
      for (; t !== null; ) Gm(t.alternate, t), t = t.return;
      J = null;
    }
  }
  function Ul(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, kp(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Je = 0, Tr(), nt = t, J = a = Ke(t.current, null), $ = e, tt = 0, Ft = null, da = false, Vl = Qn(t, e), xr = false, jl = te = Er = Ga = Ra = ht = 0, Vt = Tn = null, ms = false, e & 8 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
      var n = 31 - le(l), u = 1 << n;
      e |= t[n], l &= ~u;
    }
    return Ie = e, zi(), a;
  }
  function rh(t, e) {
    X = null, L.H = jn, e === Ql || e === Ri ? (e = No(), tt = 3) : e === er ? (e = No(), tt = 4) : tt = e === gr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ft = e, J === null && (ht = 1, ei(t, he(e, t.current)));
  }
  function oh() {
    var t = ie.current;
    return t === null ? true : ($ & 4194048) === $ ? pe === null : ($ & 62914560) === $ || $ & 536870912 ? t === pe : false;
  }
  function fh() {
    var t = L.H;
    return L.H = jn, t === null ? jn : t;
  }
  function dh() {
    var t = L.A;
    return L.A = zp, t;
  }
  function ii() {
    ht = 4, da || ($ & 4194048) !== $ && ie.current !== null || (Vl = true), !(Ra & 134217727) && !(Ga & 134217727) || nt === null || ma(nt, $, te, false);
  }
  function vc(t, e, a) {
    var l = F;
    F |= 2;
    var n = fh(), u = dh();
    (nt !== t || $ !== e) && (ui = null, Ul(t, e)), e = false;
    var i = ht;
    t: do
      try {
        if (tt !== 0 && J !== null) {
          var c = J, s = Ft;
          switch (tt) {
            case 8:
              Tr(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ie.current === null && (e = true);
              var o = tt;
              if (tt = 0, Ft = null, Sl(t, c, s, o), a && Vl) {
                i = 0;
                break t;
              }
              break;
            default:
              o = tt, tt = 0, Ft = null, Sl(t, c, s, o);
          }
        }
        Mp(), i = ht;
        break;
      } catch (h) {
        rh(t, h);
      }
    while (true);
    return e && t.shellSuspendCounter++, Ze = Fa = null, F = l, L.H = n, L.A = u, J === null && (nt = null, $ = 0, zi()), i;
  }
  function Mp() {
    for (; J !== null; ) mh(J);
  }
  function Cp(t, e) {
    var a = F;
    F |= 2;
    var l = fh(), n = dh();
    nt !== t || $ !== e ? (ui = null, ni = ee() + 500, Ul(t, e)) : Vl = Qn(t, e);
    t: do
      try {
        if (tt !== 0 && J !== null) {
          e = J;
          var u = Ft;
          e: switch (tt) {
            case 1:
              tt = 0, Ft = null, Sl(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Co(u)) {
                tt = 0, Ft = null, Io(e);
                break;
              }
              e = function() {
                tt !== 2 && tt !== 9 || nt !== t || (tt = 7), we(t);
              }, u.then(e, e);
              break t;
            case 3:
              tt = 7;
              break t;
            case 4:
              tt = 5;
              break t;
            case 7:
              Co(u) ? (tt = 0, Ft = null, Io(e)) : (tt = 0, Ft = null, Sl(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (i ? wh(i) : c.stateNode.complete) {
                    tt = 0, Ft = null;
                    var s = c.sibling;
                    if (s !== null) J = s;
                    else {
                      var o = c.return;
                      o !== null ? (J = o, ji(o)) : J = null;
                    }
                    break e;
                  }
              }
              tt = 0, Ft = null, Sl(t, e, u, 5);
              break;
            case 6:
              tt = 0, Ft = null, Sl(t, e, u, 6);
              break;
            case 8:
              Tr(), ht = 6;
              break t;
            default:
              throw Error(C(462));
          }
        }
        Np();
        break;
      } catch (h) {
        rh(t, h);
      }
    while (true);
    return Ze = Fa = null, L.H = l, L.A = n, F = a, J !== null ? 0 : (nt = null, $ = 0, zi(), ht);
  }
  function Np() {
    for (; J !== null && !I0(); ) mh(J);
  }
  function mh(t) {
    var e = Ym(t.alternate, t, Ie);
    t.memoizedProps = t.pendingProps, e === null ? ji(t) : J = e;
  }
  function Io(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ko(a, e, e.pendingProps, e.type, void 0, $);
        break;
      case 11:
        e = Ko(a, e, e.pendingProps, e.type.render, e.ref, $);
        break;
      case 5:
        sr(e);
      default:
        Gm(a, e), e = J = Gd(e, Ie), e = Ym(a, e, Ie);
    }
    t.memoizedProps = t.pendingProps, e === null ? ji(t) : J = e;
  }
  function Sl(t, e, a, l) {
    Ze = Fa = null, sr(e), zl = null, Dn = 0;
    var n = e.return;
    try {
      if (vp(t, n, e, a, $)) {
        ht = 1, ei(t, he(a, t.current)), J = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw J = n, u;
      ht = 1, ei(t, he(a, t.current)), J = null;
      return;
    }
    e.flags & 32768 ? (W || l === 1 ? t = true : Vl || $ & 536870912 ? t = false : (da = t = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ie.current, l !== null && l.tag === 13 && (l.flags |= 16384))), hh(e, t)) : ji(e);
  }
  function ji(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        hh(e, da);
        return;
      }
      t = e.return;
      var a = xp(e.alternate, e, Ie);
      if (a !== null) {
        J = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        J = e;
        return;
      }
      J = e = t;
    } while (e !== null);
    ht === 0 && (ht = 5);
  }
  function hh(t, e) {
    do {
      var a = Ep(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, J = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        J = t;
        return;
      }
      J = t = a;
    } while (t !== null);
    ht = 6, J = null;
  }
  function tf(t, e, a, l, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      Hi();
    while (Et !== 0);
    if (F & 6) throw Error(C(327));
    if (e !== null) {
      if (e === t.current) throw Error(C(177));
      if (u = e.lanes | e.childLanes, u |= Js, ry(t, a, u, i, c, s), t === nt && (J = nt = null, $ = 0), Hl = e, Sa = t, Je = a, hs = u, ys = n, ih = l, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, jp(Vu, function() {
        return bh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || l) {
        l = L.T, L.T = null, n = P.p, P.p = 2, i = F, F |= 4;
        try {
          Tp(t, e, a);
        } finally {
          F = i, P.p = n, L.T = l;
        }
      }
      Et = 1, yh(), ph(), gh();
    }
  }
  function yh() {
    if (Et === 1) {
      Et = 0;
      var t = Sa, e = Hl, a = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || a) {
        a = L.T, L.T = null;
        var l = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          Pm(e, t);
          var u = Ss, i = wd(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Dd(c.ownerDocument.documentElement, c)) {
            if (s !== null && ks(c)) {
              var o = s.start, h = s.end;
              if (h === void 0 && (h = o), "selectionStart" in c) c.selectionStart = o, c.selectionEnd = Math.min(h, c.value.length);
              else {
                var r = c.ownerDocument || document, d = r && r.defaultView || window;
                if (d.getSelection) {
                  var p = d.getSelection(), T = c.textContent.length, M = Math.min(s.start, T), R = s.end === void 0 ? M : Math.min(s.end, T);
                  !p.extend && M > R && (i = R, R = M, M = i);
                  var f = Eo(c, M), m = Eo(c, R);
                  if (f && m && (p.rangeCount !== 1 || p.anchorNode !== f.node || p.anchorOffset !== f.offset || p.focusNode !== m.node || p.focusOffset !== m.offset)) {
                    var g = r.createRange();
                    g.setStart(f.node, f.offset), p.removeAllRanges(), M > R ? (p.addRange(g), p.extend(m.node, m.offset)) : (g.setEnd(m.node, m.offset), p.addRange(g));
                  }
                }
              }
            }
            for (r = [], p = c; p = p.parentNode; ) p.nodeType === 1 && r.push({
              element: p,
              left: p.scrollLeft,
              top: p.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < r.length; c++) {
              var y = r[c];
              y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
            }
          }
          hi = !!bs, Ss = bs = null;
        } finally {
          F = n, P.p = l, L.T = a;
        }
      }
      t.current = e, Et = 2;
    }
  }
  function ph() {
    if (Et === 2) {
      Et = 0;
      var t = Sa, e = Hl, a = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || a) {
        a = L.T, L.T = null;
        var l = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          km(t, e.alternate, e);
        } finally {
          F = n, P.p = l, L.T = a;
        }
      }
      Et = 3;
    }
  }
  function gh() {
    if (Et === 4 || Et === 3) {
      Et = 0, ty();
      var t = Sa, e = Hl, a = Je, l = ih;
      e.subtreeFlags & 10256 || e.flags & 10256 ? Et = 5 : (Et = 0, Hl = Sa = null, vh(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (ba = null), Ys(a), e = e.stateNode, ae && typeof ae.onCommitFiberRoot == "function") try {
        ae.onCommitFiberRoot(Xn, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        e = L.T, n = P.p, P.p = 2, L.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < l.length; i++) {
            var c = l[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          L.T = e, P.p = n;
        }
      }
      Je & 3 && Hi(), we(t), n = t.pendingLanes, a & 261930 && n & 42 ? t === ps ? _n++ : (_n = 0, ps = t) : _n = 0, Wn(0);
    }
  }
  function vh(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, kn(e)));
  }
  function Hi() {
    return yh(), ph(), gh(), bh();
  }
  function bh() {
    if (Et !== 5) return false;
    var t = Sa, e = hs;
    hs = 0;
    var a = Ys(Je), l = L.T, n = P.p;
    try {
      P.p = 32 > a ? 32 : a, L.T = null, a = ys, ys = null;
      var u = Sa, i = Je;
      if (Et = 0, Hl = Sa = null, Je = 0, F & 6) throw Error(C(331));
      var c = F;
      if (F |= 4, lh(u.current), th(u, u.current, i, a), F = c, Wn(0, false), ae && typeof ae.onPostCommitFiberRoot == "function") try {
        ae.onPostCommitFiberRoot(Xn, u);
      } catch {
      }
      return true;
    } finally {
      P.p = n, L.T = l, vh(t, e);
    }
  }
  function ef(t, e, a) {
    e = he(a, e), e = rs(t.stateNode, e, 2), t = va(t, e, 2), t !== null && (Vn(t, 2), we(t));
  }
  function et(t, e, a) {
    if (t.tag === 3) ef(t, t, a);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        ef(e, t, a);
        break;
      } else if (e.tag === 1) {
        var l = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ba === null || !ba.has(l))) {
          t = he(a, t), a = jm(2), l = va(e, a, 2), l !== null && (Hm(a, l, e, t), Vn(l, 2), we(l));
          break;
        }
      }
      e = e.return;
    }
  }
  function bc(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new Ap();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (xr = true, n.add(a), t = Op.bind(null, t, e, a), e.then(t, t));
  }
  function Op(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, nt === t && ($ & a) === a && (ht === 4 || ht === 3 && ($ & 62914560) === $ && 300 > ee() - Di ? !(F & 2) && Ul(t, 0) : Er |= a, jl === $ && (jl = 0)), we(t);
  }
  function Sh(t, e) {
    e === 0 && (e = fd()), t = Wa(t, e), t !== null && (Vn(t, e), we(t));
  }
  function Dp(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Sh(t, a);
  }
  function wp(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(C(314));
    }
    l !== null && l.delete(e), Sh(t, a);
  }
  function jp(t, e) {
    return qs(t, e);
  }
  var ci = null, sl = null, gs = false, si = false, Sc = false, ha = 0;
  function we(t) {
    t !== sl && t.next === null && (sl === null ? ci = sl = t : sl = sl.next = t), si = true, gs || (gs = true, Up());
  }
  function Wn(t, e) {
    if (!Sc && si) {
      Sc = true;
      do
        for (var a = false, l = ci; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - le(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = true, af(l, u));
          } else u = $, u = xi(l, l === nt ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), !(u & 3) || Qn(l, u) || (a = true, af(l, u));
          l = l.next;
        }
      while (a);
      Sc = false;
    }
  }
  function Hp() {
    xh();
  }
  function xh() {
    si = gs = false;
    var t = 0;
    ha !== 0 && Kp() && (t = ha);
    for (var e = ee(), a = null, l = ci; l !== null; ) {
      var n = l.next, u = Eh(l, e);
      u === 0 ? (l.next = null, a === null ? ci = n : a.next = n, n === null && (sl = a)) : (a = l, (t !== 0 || u & 3) && (si = true)), l = n;
    }
    Et !== 0 && Et !== 5 || Wn(t), ha !== 0 && (ha = 0);
  }
  function Eh(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - le(u), c = 1 << i, s = n[i];
      s === -1 ? (!(c & a) || c & l) && (n[i] = sy(c, e)) : s <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = nt, a = $, a = xi(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, a === 0 || t === e && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Ji(l), t.callbackNode = null, t.callbackPriority = 0;
    if (!(a & 3) || Qn(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && Ji(l), Ys(a)) {
        case 2:
        case 8:
          a = rd;
          break;
        case 32:
          a = Vu;
          break;
        case 268435456:
          a = od;
          break;
        default:
          a = Vu;
      }
      return l = Th.bind(null, t), a = qs(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && Ji(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Th(t, e) {
    if (Et !== 0 && Et !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Hi() && t.callbackNode !== a) return null;
    var l = $;
    return l = xi(t, t === nt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (sh(t, l, e), Eh(t, ee()), t.callbackNode != null && t.callbackNode === a ? Th.bind(null, t) : null);
  }
  function af(t, e) {
    if (Hi()) return null;
    sh(t, e, true);
  }
  function Up() {
    Jp(function() {
      F & 6 ? qs(sd, Hp) : xh();
    });
  }
  function _r() {
    if (ha === 0) {
      var t = Ol;
      t === 0 && (t = su, su <<= 1, !(su & 261888) && (su = 256)), ha = t;
    }
    return ha;
  }
  function lf(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zu("" + t);
  }
  function nf(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function Bp(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var u = lf((n[kt] || null).action), i = l.submitter;
      i && (e = (e = i[kt] || null) ? lf(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new Ei("action", "action", null, l, n);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ha !== 0) {
                  var s = i ? nf(n, i) : new FormData(n);
                  cs(a, {
                    pending: true,
                    data: s,
                    method: n.method,
                    action: u
                  }, null, s);
                }
              } else typeof u == "function" && (c.preventDefault(), s = i ? nf(n, i) : new FormData(n), cs(a, {
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
  for (var xc = 0; xc < $c.length; xc++) {
    var Ec = $c[xc], qp = Ec.toLowerCase(), Lp = Ec[0].toUpperCase() + Ec.slice(1);
    _e(qp, "on" + Lp);
  }
  _e(Hd, "onAnimationEnd");
  _e(Ud, "onAnimationIteration");
  _e(Bd, "onAnimationStart");
  _e("dblclick", "onDoubleClick");
  _e("focusin", "onFocus");
  _e("focusout", "onBlur");
  _e(ep, "onTransitionRun");
  _e(ap, "onTransitionStart");
  _e(lp, "onTransitionCancel");
  _e(qd, "onTransitionEnd");
  Cl("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Cl("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Cl("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Cl("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  ka("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  ka("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  ka("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  ka("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  ka("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  ka("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn));
  function _h(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e) for (var i = l.length - 1; 0 <= i; i--) {
          var c = l[i], s = c.instance, o = c.currentTarget;
          if (c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (h) {
            Ku(h);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < l.length; i++) {
          if (c = l[i], s = c.instance, o = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (h) {
            Ku(h);
          }
          n.currentTarget = null, u = s;
        }
      }
    }
  }
  function k(t, e) {
    var a = e[Gc];
    a === void 0 && (a = e[Gc] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (zh(e, t, 2, false), a.add(l));
  }
  function Tc(t, e, a) {
    var l = 0;
    e && (l |= 4), zh(a, t, l, e);
  }
  var vu = "_reactListening" + Math.random().toString(36).slice(2);
  function zr(t) {
    if (!t[vu]) {
      t[vu] = true, pd.forEach(function(a) {
        a !== "selectionchange" && (Yp.has(a) || Tc(a, false, t), Tc(a, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[vu] || (e[vu] = true, Tc("selectionchange", false, e));
    }
  }
  function zh(t, e, a, l) {
    switch (qh(e)) {
      case 2:
        var n = hg;
        break;
      case 8:
        n = yg;
        break;
      default:
        n = Cr;
    }
    a = n.bind(null, e, a, t), n = void 0, !Kc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: true,
      passive: n
    }) : t.addEventListener(e, a, true) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, false);
  }
  function _c(t, e, a, l, n) {
    var u = l;
    if (!(e & 1) && !(e & 2) && l !== null) t: for (; ; ) {
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
          if (i = fl(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            l = u = i;
            continue t;
          }
          c = c.parentNode;
        }
      }
      l = l.return;
    }
    _d(function() {
      var o = u, h = Qs(a), r = [];
      t: {
        var d = Ld.get(t);
        if (d !== void 0) {
          var p = Ei, T = t;
          switch (t) {
            case "keypress":
              if (Ru(a) === 0) break t;
            case "keydown":
            case "keyup":
              p = wy;
              break;
            case "focusin":
              T = "focus", p = Ii;
              break;
            case "focusout":
              T = "blur", p = Ii;
              break;
            case "beforeblur":
            case "afterblur":
              p = Ii;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = xy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Uy;
              break;
            case Hd:
            case Ud:
            case Bd:
              p = _y;
              break;
            case qd:
              p = qy;
              break;
            case "scroll":
            case "scrollend":
              p = by;
              break;
            case "wheel":
              p = Yy;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Ay;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = ho;
              break;
            case "toggle":
            case "beforetoggle":
              p = Xy;
          }
          var M = (e & 4) !== 0, R = !M && (t === "scroll" || t === "scrollend"), f = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var m = o, g; m !== null; ) {
            var y = m;
            if (g = y.stateNode, y = y.tag, y !== 5 && y !== 26 && y !== 27 || g === null || f === null || (y = Rn(m, f), y != null && M.push(Un(m, y, g))), R) break;
            m = m.return;
          }
          0 < M.length && (d = new p(d, T, null, a, h), r.push({
            event: d,
            listeners: M
          }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (d = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", d && a !== Zc && (T = a.relatedTarget || a.fromElement) && (fl(T) || T[Yl])) break t;
          if ((p || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, p ? (T = a.relatedTarget || a.toElement, p = o, T = T ? fl(T) : null, T !== null && (R = Gn(T), M = T.tag, T !== R || M !== 5 && M !== 27 && M !== 6) && (T = null)) : (p = null, T = o), p !== T)) {
            if (M = fo, y = "onMouseLeave", f = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (M = ho, y = "onPointerLeave", f = "onPointerEnter", m = "pointer"), R = p == null ? d : rn(p), g = T == null ? d : rn(T), d = new M(y, m + "leave", p, a, h), d.target = R, d.relatedTarget = g, y = null, fl(h) === o && (M = new M(f, m + "enter", T, a, h), M.target = g, M.relatedTarget = R, y = M), R = y, p && T) e: {
              for (M = Gp, f = p, m = T, g = 0, y = f; y; y = M(y)) g++;
              y = 0;
              for (var x = m; x; x = M(x)) y++;
              for (; 0 < g - y; ) f = M(f), g--;
              for (; 0 < y - g; ) m = M(m), y--;
              for (; g--; ) {
                if (f === m || m !== null && f === m.alternate) {
                  M = f;
                  break e;
                }
                f = M(f), m = M(m);
              }
              M = null;
            }
            else M = null;
            p !== null && uf(r, d, p, M, false), T !== null && R !== null && uf(r, R, T, M, true);
          }
        }
        t: {
          if (d = o ? rn(o) : window, p = d.nodeName && d.nodeName.toLowerCase(), p === "select" || p === "input" && d.type === "file") var A = vo;
          else if (go(d)) if (Nd) A = Py;
          else {
            A = Wy;
            var _ = $y;
          }
          else p = d.nodeName, !p || p.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? o && Xs(o.elementType) && (A = vo) : A = Fy;
          if (A && (A = A(t, o))) {
            Cd(r, A, a, h);
            break t;
          }
          _ && _(t, d, o), t === "focusout" && o && d.type === "number" && o.memoizedProps.value != null && Vc(d, "number", d.value);
        }
        switch (_ = o ? rn(o) : window, t) {
          case "focusin":
            (go(_) || _.contentEditable === "true") && (hl = _, kc = o, yn = null);
            break;
          case "focusout":
            yn = kc = hl = null;
            break;
          case "mousedown":
            Jc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jc = false, To(r, a, h);
            break;
          case "selectionchange":
            if (tp) break;
          case "keydown":
          case "keyup":
            To(r, a, h);
        }
        var S;
        if (Ks) t: {
          switch (t) {
            case "compositionstart":
              var z = "onCompositionStart";
              break t;
            case "compositionend":
              z = "onCompositionEnd";
              break t;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break t;
          }
          z = void 0;
        }
        else ml ? Rd(t, a) && (z = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (z = "onCompositionStart");
        z && (Ad && a.locale !== "ko" && (ml || z !== "onCompositionStart" ? z === "onCompositionEnd" && ml && (S = zd()) : (fa = h, Vs = "value" in fa ? fa.value : fa.textContent, ml = true)), _ = ri(o, z), 0 < _.length && (z = new mo(z, t, null, a, h), r.push({
          event: z,
          listeners: _
        }), S ? z.data = S : (S = Md(a), S !== null && (z.data = S)))), (S = Vy ? Zy(t, a) : Ky(t, a)) && (z = ri(o, "onBeforeInput"), 0 < z.length && (_ = new mo("onBeforeInput", "beforeinput", null, a, h), r.push({
          event: _,
          listeners: z
        }), _.data = S)), Bp(r, t, o, a, h);
      }
      _h(r, e);
    });
  }
  function Un(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function ri(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Rn(t, a), n != null && l.unshift(Un(t, n, u)), n = Rn(t, e), n != null && l.push(Un(t, n, u))), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Gp(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function uf(t, e, a, l, n) {
    for (var u = e._reactName, i = []; a !== null && a !== l; ) {
      var c = a, s = c.alternate, o = c.stateNode;
      if (c = c.tag, s !== null && s === l) break;
      c !== 5 && c !== 26 && c !== 27 || o === null || (s = o, n ? (o = Rn(a, u), o != null && i.unshift(Un(a, o, s))) : n || (o = Rn(a, u), o != null && i.push(Un(a, o, s)))), a = a.return;
    }
    i.length !== 0 && t.push({
      event: e,
      listeners: i
    });
  }
  var Xp = /\r\n?/g, Qp = /\u0000|\uFFFD/g;
  function cf(t) {
    return (typeof t == "string" ? t : "" + t).replace(Xp, `
`).replace(Qp, "");
  }
  function Ah(t, e) {
    return e = cf(e), cf(t) === e;
  }
  function at(t, e, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Nl(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Nl(t, "" + l);
        break;
      case "className":
        fu(t, "class", l);
        break;
      case "tabIndex":
        fu(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fu(t, a, l);
        break;
      case "style":
        Td(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          fu(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = zu("" + l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (a === "formAction" ? (e !== "input" && at(t, e, "name", n.name, n, null), at(t, e, "formEncType", n.formEncType, n, null), at(t, e, "formMethod", n.formMethod, n, null), at(t, e, "formTarget", n.formTarget, n, null)) : (at(t, e, "encType", n.encType, n, null), at(t, e, "method", n.method, n, null), at(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = zu("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = Ve);
        break;
      case "onScroll":
        l != null && k("scroll", t);
        break;
      case "onScrollEnd":
        l != null && k("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(C(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(C(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        a = zu("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === true ? t.setAttribute(a, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        k("beforetoggle", t), k("toggle", t), _u(t, "popover", l);
        break;
      case "xlinkActuate":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        _u(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = gy.get(a) || a, _u(t, a, l));
    }
  }
  function vs(t, e, a, l, n, u) {
    switch (a) {
      case "style":
        Td(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(C(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(C(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Nl(t, l) : (typeof l == "number" || typeof l == "bigint") && Nl(t, "" + l);
        break;
      case "onScroll":
        l != null && k("scroll", t);
        break;
      case "onScrollEnd":
        l != null && k("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = Ve);
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
        if (!gd.hasOwnProperty(a)) t: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), u = t[kt] || null, u = u != null ? u[a] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof l == "function")) {
            typeof u != "function" && u !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
            break t;
          }
          a in t ? t[a] = l : l === true ? t.setAttribute(a, "") : _u(t, a, l);
        }
    }
  }
  function jt(t, e, a) {
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
        k("error", t), k("load", t);
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
              throw Error(C(137, e));
            default:
              at(t, e, u, i, a, null);
          }
        }
        n && at(t, e, "srcSet", a.srcSet, a, null), l && at(t, e, "src", a.src, a, null);
        return;
      case "input":
        k("invalid", t);
        var c = u = i = n = null, s = null, o = null;
        for (l in a) if (a.hasOwnProperty(l)) {
          var h = a[l];
          if (h != null) switch (l) {
            case "name":
              n = h;
              break;
            case "type":
              i = h;
              break;
            case "checked":
              s = h;
              break;
            case "defaultChecked":
              o = h;
              break;
            case "value":
              u = h;
              break;
            case "defaultValue":
              c = h;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (h != null) throw Error(C(137, e));
              break;
            default:
              at(t, e, l, h, a, null);
          }
        }
        Sd(t, u, c, s, o, i, n, false);
        return;
      case "select":
        k("invalid", t), l = i = u = null;
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
            at(t, e, n, c, a, null);
        }
        e = u, a = i, t.multiple = !!l, e != null ? El(t, !!l, e, false) : a != null && El(t, !!l, a, true);
        return;
      case "textarea":
        k("invalid", t), u = n = l = null;
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
            if (c != null) throw Error(C(91));
            break;
          default:
            at(t, e, i, c, a, null);
        }
        Ed(t, l, n, u);
        return;
      case "option":
        for (s in a) if (a.hasOwnProperty(s) && (l = a[s], l != null)) switch (s) {
          case "selected":
            t.selected = l && typeof l != "function" && typeof l != "symbol";
            break;
          default:
            at(t, e, s, l, a, null);
        }
        return;
      case "dialog":
        k("beforetoggle", t), k("toggle", t), k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hn.length; l++) k(Hn[l], t);
        break;
      case "image":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", t), k("load", t);
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
            throw Error(C(137, e));
          default:
            at(t, e, o, l, a, null);
        }
        return;
      default:
        if (Xs(e)) {
          for (h in a) a.hasOwnProperty(h) && (l = a[h], l !== void 0 && vs(t, e, h, l, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (l = a[c], l != null && at(t, e, c, l, a, null));
  }
  function Vp(t, e, a, l) {
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
        var n = null, u = null, i = null, c = null, s = null, o = null, h = null;
        for (p in a) {
          var r = a[p];
          if (a.hasOwnProperty(p) && r != null) switch (p) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = r;
            default:
              l.hasOwnProperty(p) || at(t, e, p, null, l, r);
          }
        }
        for (var d in l) {
          var p = l[d];
          if (r = a[d], l.hasOwnProperty(d) && (p != null || r != null)) switch (d) {
            case "type":
              u = p;
              break;
            case "name":
              n = p;
              break;
            case "checked":
              o = p;
              break;
            case "defaultChecked":
              h = p;
              break;
            case "value":
              i = p;
              break;
            case "defaultValue":
              c = p;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (p != null) throw Error(C(137, e));
              break;
            default:
              p !== r && at(t, e, d, p, l, r);
          }
        }
        Qc(t, i, c, s, o, h, u, n);
        return;
      case "select":
        p = i = c = d = null;
        for (u in a) if (s = a[u], a.hasOwnProperty(u) && s != null) switch (u) {
          case "value":
            break;
          case "multiple":
            p = s;
          default:
            l.hasOwnProperty(u) || at(t, e, u, null, l, s);
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
            u !== s && at(t, e, n, u, l, s);
        }
        e = c, a = i, l = p, d != null ? El(t, !!a, d, false) : !!l != !!a && (e != null ? El(t, !!a, e, true) : El(t, !!a, a ? [] : "", false));
        return;
      case "textarea":
        p = d = null;
        for (c in a) if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            at(t, e, c, null, l, n);
        }
        for (i in l) if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            d = n;
            break;
          case "defaultValue":
            p = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(C(91));
            break;
          default:
            n !== u && at(t, e, i, n, l, u);
        }
        xd(t, d, p);
        return;
      case "option":
        for (var T in a) if (d = a[T], a.hasOwnProperty(T) && d != null && !l.hasOwnProperty(T)) switch (T) {
          case "selected":
            t.selected = false;
            break;
          default:
            at(t, e, T, null, l, d);
        }
        for (s in l) if (d = l[s], p = a[s], l.hasOwnProperty(s) && d !== p && (d != null || p != null)) switch (s) {
          case "selected":
            t.selected = d && typeof d != "function" && typeof d != "symbol";
            break;
          default:
            at(t, e, s, d, l, p);
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
        for (var M in a) d = a[M], a.hasOwnProperty(M) && d != null && !l.hasOwnProperty(M) && at(t, e, M, null, l, d);
        for (o in l) if (d = l[o], p = a[o], l.hasOwnProperty(o) && d !== p && (d != null || p != null)) switch (o) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(C(137, e));
            break;
          default:
            at(t, e, o, d, l, p);
        }
        return;
      default:
        if (Xs(e)) {
          for (var R in a) d = a[R], a.hasOwnProperty(R) && d !== void 0 && !l.hasOwnProperty(R) && vs(t, e, R, void 0, l, d);
          for (h in l) d = l[h], p = a[h], !l.hasOwnProperty(h) || d === p || d === void 0 && p === void 0 || vs(t, e, h, d, l, p);
          return;
        }
    }
    for (var f in a) d = a[f], a.hasOwnProperty(f) && d != null && !l.hasOwnProperty(f) && at(t, e, f, null, l, d);
    for (r in l) d = l[r], p = a[r], !l.hasOwnProperty(r) || d === p || d == null && p == null || at(t, e, r, d, l, p);
  }
  function sf(t) {
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
  function Zp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && sf(i)) {
          for (i = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var s = a[l], o = s.startTime;
            if (o > c) break;
            var h = s.transferSize, r = s.initiatorType;
            h && sf(r) && (s = s.responseEnd, i += h * (s < c ? 1 : (c - o) / (s - o)));
          }
          if (--l, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var bs = null, Ss = null;
  function oi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rf(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rh(t, e) {
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
  function xs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var zc = null;
  function Kp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === zc ? false : (zc = t, true) : (zc = null, false);
  }
  var Mh = typeof setTimeout == "function" ? setTimeout : void 0, kp = typeof clearTimeout == "function" ? clearTimeout : void 0, of = typeof Promise == "function" ? Promise : void 0, Jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof of < "u" ? function(t) {
    return of.resolve(null).then(t).catch($p);
  } : Mh;
  function $p(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ca(t) {
    return t === "head";
  }
  function ff(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (l === 0) {
          t.removeChild(n), ql(e);
          return;
        }
        l--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") zn(t.ownerDocument.documentElement);
      else if (a === "head") {
        a = t.ownerDocument.head, zn(a);
        for (var u = a.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[Zn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = i;
        }
      } else a === "body" && zn(t.ownerDocument.body);
      a = n;
    } while (a);
    ql(e);
  }
  function df(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") {
        if (t === 0) break;
        t--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function Es(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Es(a), Gs(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function Wp(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
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
      if (t = ge(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Fp(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = ge(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ch(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ge(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ts(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function _s(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Pp(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function ge(t) {
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
  function mf(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return ge(t.nextSibling);
          e--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function hf(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nh(t, e, a) {
    switch (e = oi(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(C(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(C(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(C(454));
        return t;
      default:
        throw Error(C(451));
    }
  }
  function zn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Gs(t);
  }
  var ve = /* @__PURE__ */ new Map(), yf = /* @__PURE__ */ new Set();
  function fi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ea = P.d;
  P.d = {
    f: Ip,
    r: tg,
    D: eg,
    C: ag,
    L: lg,
    m: ng,
    X: ig,
    S: ug,
    M: cg
  };
  function Ip() {
    var t = ea.f(), e = wi();
    return t || e;
  }
  function tg(t) {
    var e = Gl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Tm(e) : ea.r(t);
  }
  var Zl = typeof document > "u" ? null : document;
  function Oh(t, e, a) {
    var l = Zl;
    if (l && typeof e == "string" && e) {
      var n = me(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), yf.has(n) || (yf.add(n), t = {
        rel: t,
        crossOrigin: a,
        href: e
      }, l.querySelector(n) === null && (e = l.createElement("link"), jt(e, "link", t), At(e), l.head.appendChild(e)));
    }
  }
  function eg(t) {
    ea.D(t), Oh("dns-prefetch", t, null);
  }
  function ag(t, e) {
    ea.C(t, e), Oh("preconnect", t, e);
  }
  function lg(t, e, a) {
    ea.L(t, e, a);
    var l = Zl;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + me(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + me(a.imageSizes) + '"]')) : n += '[href="' + me(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Bl(t);
          break;
        case "script":
          u = Kl(t);
      }
      ve.has(u) || (t = rt({
        rel: "preload",
        href: e === "image" && a && a.imageSrcSet ? void 0 : t,
        as: e
      }, a), ve.set(u, t), l.querySelector(n) !== null || e === "style" && l.querySelector(Fn(u)) || e === "script" && l.querySelector(Pn(u)) || (e = l.createElement("link"), jt(e, "link", t), At(e), l.head.appendChild(e)));
    }
  }
  function ng(t, e) {
    ea.m(t, e);
    var a = Zl;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + me(l) + '"][href="' + me(t) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Kl(t);
      }
      if (!ve.has(u) && (t = rt({
        rel: "modulepreload",
        href: t
      }, e), ve.set(u, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Pn(u))) return;
        }
        l = a.createElement("link"), jt(l, "link", t), At(l), a.head.appendChild(l);
      }
    }
  }
  function ug(t, e, a) {
    ea.S(t, e, a);
    var l = Zl;
    if (l && t) {
      var n = xl(l).hoistableStyles, u = Bl(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = l.querySelector(Fn(u))) c.loading = 5;
        else {
          t = rt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, a), (a = ve.get(u)) && Ar(t, a);
          var s = i = l.createElement("link");
          At(s), jt(s, "link", t), s._p = new Promise(function(o, h) {
            s.onload = o, s.onerror = h;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Hu(i, e, l);
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
  function ig(t, e) {
    ea.X(t, e);
    var a = Zl;
    if (a && t) {
      var l = xl(a).hoistableScripts, n = Kl(t), u = l.get(n);
      u || (u = a.querySelector(Pn(n)), u || (t = rt({
        src: t,
        async: true
      }, e), (e = ve.get(n)) && Rr(t, e), u = a.createElement("script"), At(u), jt(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function cg(t, e) {
    ea.M(t, e);
    var a = Zl;
    if (a && t) {
      var l = xl(a).hoistableScripts, n = Kl(t), u = l.get(n);
      u || (u = a.querySelector(Pn(n)), u || (t = rt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = ve.get(n)) && Rr(t, e), u = a.createElement("script"), At(u), jt(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function pf(t, e, a, l) {
    var n = (n = ya.current) ? fi(n) : null;
    if (!n) throw Error(C(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Bl(a.href), a = xl(n).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Bl(a.href);
          var u = xl(n).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(t, i), (u = n.querySelector(Fn(t))) && !u._p && (i.instance = u, i.state.loading = 5), ve.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, ve.set(t, a), u || sg(n, t, a, i.state))), e && l === null) throw Error(C(528, ""));
          return i;
        }
        if (e && l !== null) throw Error(C(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Kl(a), a = xl(n).hoistableScripts, l = a.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(C(444, t));
    }
  }
  function Bl(t) {
    return 'href="' + me(t) + '"';
  }
  function Fn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Dh(t) {
    return rt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function sg(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), jt(e, "link", a), At(e), t.head.appendChild(e));
  }
  function Kl(t) {
    return '[src="' + me(t) + '"]';
  }
  function Pn(t) {
    return "script[async]" + t;
  }
  function gf(t, e, a) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var l = t.querySelector('style[data-href~="' + me(a.href) + '"]');
        if (l) return e.instance = l, At(l), l;
        var n = rt({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return l = (t.ownerDocument || t).createElement("style"), At(l), jt(l, "style", n), Hu(l, a.precedence, t), e.instance = l;
      case "stylesheet":
        n = Bl(a.href);
        var u = t.querySelector(Fn(n));
        if (u) return e.state.loading |= 4, e.instance = u, At(u), u;
        l = Dh(a), (n = ve.get(n)) && Ar(l, n), u = (t.ownerDocument || t).createElement("link"), At(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jt(u, "link", l), e.state.loading |= 4, Hu(u, a.precedence, t), e.instance = u;
      case "script":
        return u = Kl(a.src), (n = t.querySelector(Pn(u))) ? (e.instance = n, At(n), n) : (l = a, (n = ve.get(u)) && (l = rt({}, a), Rr(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), At(n), jt(n, "link", l), t.head.appendChild(n), e.instance = n);
      case "void":
        return null;
      default:
        throw Error(C(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (l = e.instance, e.state.loading |= 4, Hu(l, a.precedence, t));
    return e.instance;
  }
  function Hu(t, e, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Ar(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Rr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Uu = null;
  function vf(t, e, a) {
    if (Uu === null) {
      var l = /* @__PURE__ */ new Map(), n = Uu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else n = Uu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Zn] || u[Ot] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var c = l.get(i);
        c ? c.push(u) : l.set(i, [
          u
        ]);
      }
    }
    return l;
  }
  function bf(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null);
  }
  function rg(t, e, a) {
    if (a === 1 || e.itemProp != null) return false;
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
  function wh(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function og(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && !(a.state.loading & 4)) {
      if (a.instance === null) {
        var n = Bl(l.href), u = e.querySelector(Fn(n));
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = di.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = u, At(u);
          return;
        }
        u = e.ownerDocument || e, l = Dh(l), (n = ve.get(n)) && Ar(l, n), u = u.createElement("link"), At(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jt(u, "link", l), a.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && !(a.state.loading & 3) && (t.count++, a = di.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Ac = 0;
  function fg(t, e) {
    return t.stylesheets && t.count === 0 && Bu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && Bu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ac === 0 && (Ac = 62500 * Zp());
      var n = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Bu(t, t.stylesheets), t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, (t.imgBytes > Ac ? 50 : 800) + e);
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, mi = /* @__PURE__ */ new Map(), e.forEach(dg, t), mi = null, di.call(t));
  }
  function dg(t, e) {
    if (!(e.state.loading & 4)) {
      var a = mi.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), mi.set(t, a);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = di.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Bn = {
    $$typeof: Qe,
    Provider: null,
    Consumer: null,
    _currentValue: Ba,
    _currentValue2: Ba,
    _threadCount: 0
  };
  function mg(t, e, a, l, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $i(0), this.hiddenUpdates = $i(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jh(t, e, a, l, n, u, i, c, s, o, h, r) {
    return t = new mg(t, e, a, i, s, o, h, r, c), e = 1, u === true && (e |= 24), u = It(3, null, null, e), t.current = u, u.stateNode = t, e = Is(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, ar(u), t;
  }
  function Hh(t) {
    return t ? (t = gl, t) : gl;
  }
  function Uh(t, e, a, l, n, u) {
    n = Hh(n), l.context === null ? l.context = n : l.pendingContext = n, l = ga(e), l.payload = {
      element: a
    }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = va(t, l, e), a !== null && (Kt(a, t, e), gn(a, t, e));
  }
  function Sf(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Mr(t, e) {
    Sf(t, e), (t = t.alternate) && Sf(t, e);
  }
  function Bh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Wa(t, 67108864);
      e !== null && Kt(e, t, 67108864), Mr(t, 67108864);
    }
  }
  function xf(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ne();
      e = Ls(e);
      var a = Wa(t, e);
      a !== null && Kt(a, t, e), Mr(t, e);
    }
  }
  var hi = true;
  function hg(t, e, a, l) {
    var n = L.T;
    L.T = null;
    var u = P.p;
    try {
      P.p = 2, Cr(t, e, a, l);
    } finally {
      P.p = u, L.T = n;
    }
  }
  function yg(t, e, a, l) {
    var n = L.T;
    L.T = null;
    var u = P.p;
    try {
      P.p = 8, Cr(t, e, a, l);
    } finally {
      P.p = u, L.T = n;
    }
  }
  function Cr(t, e, a, l) {
    if (hi) {
      var n = As(l);
      if (n === null) _c(t, e, l, yi, a), Ef(t, l);
      else if (gg(n, t, e, a, l)) l.stopPropagation();
      else if (Ef(t, l), e & 4 && -1 < pg.indexOf(t)) {
        for (; n !== null; ) {
          var u = Gl(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = ja(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - le(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  we(u), !(F & 6) && (ni = ee() + 500, Wn(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Wa(u, 2), c !== null && Kt(c, u, 2), wi(), Mr(u, 2);
          }
          if (u = As(l), u === null && _c(t, e, l, yi, a), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else _c(t, e, l, null, a);
    }
  }
  function As(t) {
    return t = Qs(t), Nr(t);
  }
  var yi = null;
  function Nr(t) {
    if (yi = null, t = fl(t), t !== null) {
      var e = Gn(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = ld(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = nd(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return yi = t, null;
  }
  function qh(t) {
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
        switch (ey()) {
          case sd:
            return 2;
          case rd:
            return 8;
          case Vu:
          case ay:
            return 32;
          case od:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rs = false, xa = null, Ea = null, Ta = null, qn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), ra = [], pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Ef(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
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
  function ln(t, e, a, l, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [
        n
      ]
    }, e !== null && (e = Gl(e), e !== null && Bh(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function gg(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return xa = ln(xa, t, e, a, l, n), true;
      case "dragenter":
        return Ea = ln(Ea, t, e, a, l, n), true;
      case "mouseover":
        return Ta = ln(Ta, t, e, a, l, n), true;
      case "pointerover":
        var u = n.pointerId;
        return qn.set(u, ln(qn.get(u) || null, t, e, a, l, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, Ln.set(u, ln(Ln.get(u) || null, t, e, a, l, n)), true;
    }
    return false;
  }
  function Lh(t) {
    var e = fl(t.target);
    if (e !== null) {
      var a = Gn(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = ld(a), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              xf(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = nd(a), e !== null) {
            t.blockedOn = e, no(t.priority, function() {
              xf(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qu(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = As(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(a.type, a);
        Zc = l, a.target.dispatchEvent(l), Zc = null;
      } else return e = Gl(a), e !== null && Bh(e), t.blockedOn = a, false;
      e.shift();
    }
    return true;
  }
  function Tf(t, e, a) {
    qu(t) && a.delete(e);
  }
  function vg() {
    Rs = false, xa !== null && qu(xa) && (xa = null), Ea !== null && qu(Ea) && (Ea = null), Ta !== null && qu(Ta) && (Ta = null), qn.forEach(Tf), Ln.forEach(Tf);
  }
  function bu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Rs || (Rs = true, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, vg)));
  }
  var Su = null;
  function _f(t) {
    Su !== t && (Su = t, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, function() {
      Su === t && (Su = null);
      for (var e = 0; e < t.length; e += 3) {
        var a = t[e], l = t[e + 1], n = t[e + 2];
        if (typeof l != "function") {
          if (Nr(l || a) === null) continue;
          break;
        }
        var u = Gl(a);
        u !== null && (t.splice(e, 3), e -= 3, cs(u, {
          pending: true,
          data: n,
          method: a.method,
          action: l
        }, l, n));
      }
    }));
  }
  function ql(t) {
    function e(s) {
      return bu(s, t);
    }
    xa !== null && bu(xa, t), Ea !== null && bu(Ea, t), Ta !== null && bu(Ta, t), qn.forEach(e), Ln.forEach(e);
    for (var a = 0; a < ra.length; a++) {
      var l = ra[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ra.length && (a = ra[0], a.blockedOn === null); ) Lh(a), a.blockedOn === null && ra.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
      var n = a[l], u = a[l + 1], i = n[kt] || null;
      if (typeof u == "function") i || _f(a);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[kt] || null) c = i.formAction;
          else if (Nr(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), _f(a);
      }
    }
  }
  function Yh() {
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
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Or(t) {
    this._internalRoot = t;
  }
  Ui.prototype.render = Or.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(C(409));
    var a = e.current, l = ne();
    Uh(a, l, t, e, null, null);
  };
  Ui.prototype.unmount = Or.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Uh(t.current, 2, null, t, null, null), wi(), e[Yl] = null;
    }
  };
  function Ui(t) {
    this._internalRoot = t;
  }
  Ui.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = yd();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var a = 0; a < ra.length && e !== 0 && e < ra[a].priority; a++) ;
      ra.splice(a, 0, t), a === 0 && Lh(t);
    }
  };
  var zf = ed.version;
  if (zf !== "19.2.5") throw Error(C(527, zf, "19.2.5"));
  P.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(C(188)) : (t = Object.keys(t).join(","), Error(C(268, t)));
    return t = J0(e), t = t !== null ? ud(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var bg = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xu.isDisabled && xu.supportsFiber) try {
      Xn = xu.inject(bg), ae = xu;
    } catch {
    }
  }
  bi.createRoot = function(t, e) {
    if (!ad(t)) throw Error(C(299));
    var a = false, l = "", n = Om, u = Dm, i = wm;
    return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = jh(t, 1, false, null, null, a, l, null, n, u, i, Yh), t[Yl] = e.current, zr(t), new Or(e);
  };
  bi.hydrateRoot = function(t, e, a) {
    if (!ad(t)) throw Error(C(299));
    var l = false, n = "", u = Om, i = Dm, c = wm, s = null;
    return a != null && (a.unstable_strictMode === true && (l = true), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (s = a.formState)), e = jh(t, 1, true, e, a ?? null, l, n, s, u, i, c, Yh), e.context = Hh(null), a = e.current, l = ne(), l = Ls(l), n = ga(l), n.callback = null, va(a, n, l), a = l, e.current.lanes = a, Vn(e, a), we(e), t[Yl] = e.current, zr(t), new Ui(e);
  };
  bi.version = "19.2.5";
  function Gh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh);
    } catch (t) {
      console.error(t);
    }
  }
  Gh(), Jf.exports = bi;
  var Sg = Jf.exports;
  let xg, Eg, Af;
  xg = "modulepreload";
  Eg = function(t) {
    return "/" + t;
  };
  Af = {};
  Na = function(e, a, l) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(a.map((s) => {
        if (s = Eg(s), s in Af) return;
        Af[s] = true;
        const o = s.endsWith(".css"), h = o ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${h}`)) return;
        const r = document.createElement("link");
        if (r.rel = o ? "stylesheet" : xg, o || (r.as = "script"), r.crossOrigin = "", r.href = s, c && r.setAttribute("nonce", c), document.head.appendChild(r), o) return new Promise((d, p) => {
          r.addEventListener("load", d), r.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${s}`)));
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
  var Rf = "popstate";
  function Mf(t) {
    return typeof t == "object" && t != null && "pathname" in t && "search" in t && "hash" in t && "state" in t && "key" in t;
  }
  function Tg(t = {}) {
    function e(l, n) {
      var _a2;
      let u = (_a2 = n.state) == null ? void 0 : _a2.masked, { pathname: i, search: c, hash: s } = u || l.location;
      return Ms("", {
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
      return typeof n == "string" ? n : Yn(n);
    }
    return zg(e, a, null, t);
  }
  function dt(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function Te(t, e) {
    if (!t) {
      typeof console < "u" && console.warn(e);
      try {
        throw new Error(e);
      } catch {
      }
    }
  }
  function _g() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Cf(t, e) {
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
  function Ms(t, e, a = null, l, n) {
    return {
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: "",
      ...typeof e == "string" ? kl(e) : e,
      state: a,
      key: e && e.key || l || _g(),
      unstable_mask: n
    };
  }
  function Yn({ pathname: t = "/", search: e = "", hash: a = "" }) {
    return e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e), a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a), t;
  }
  function kl(t) {
    let e = {};
    if (t) {
      let a = t.indexOf("#");
      a >= 0 && (e.hash = t.substring(a), t = t.substring(0, a));
      let l = t.indexOf("?");
      l >= 0 && (e.search = t.substring(l), t = t.substring(0, l)), t && (e.pathname = t);
    }
    return e;
  }
  function zg(t, e, a, l = {}) {
    let { window: n = document.defaultView, v5Compat: u = false } = l, i = n.history, c = "POP", s = null, o = h();
    o == null && (o = 0, i.replaceState({
      ...i.state,
      idx: o
    }, ""));
    function h() {
      return (i.state || {
        idx: null
      }).idx;
    }
    function r() {
      c = "POP";
      let R = h(), f = R == null ? null : R - o;
      o = R, s && s({
        action: c,
        location: M.location,
        delta: f
      });
    }
    function d(R, f) {
      c = "PUSH";
      let m = Mf(R) ? R : Ms(M.location, R, f);
      o = h() + 1;
      let g = Cf(m, o), y = M.createHref(m.unstable_mask || m);
      try {
        i.pushState(g, "", y);
      } catch (x) {
        if (x instanceof DOMException && x.name === "DataCloneError") throw x;
        n.location.assign(y);
      }
      u && s && s({
        action: c,
        location: M.location,
        delta: 1
      });
    }
    function p(R, f) {
      c = "REPLACE";
      let m = Mf(R) ? R : Ms(M.location, R, f);
      o = h();
      let g = Cf(m, o), y = M.createHref(m.unstable_mask || m);
      i.replaceState(g, "", y), u && s && s({
        action: c,
        location: M.location,
        delta: 0
      });
    }
    function T(R) {
      return Ag(R);
    }
    let M = {
      get action() {
        return c;
      },
      get location() {
        return t(n, i);
      },
      listen(R) {
        if (s) throw new Error("A history only accepts one active listener");
        return n.addEventListener(Rf, r), s = R, () => {
          n.removeEventListener(Rf, r), s = null;
        };
      },
      createHref(R) {
        return e(n, R);
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
      replace: p,
      go(R) {
        return i.go(R);
      }
    };
    return M;
  }
  function Ag(t, e = false) {
    let a = "http://localhost";
    typeof window < "u" && (a = window.location.origin !== "null" ? window.location.origin : window.location.href), dt(a, "No window.location.(origin|href) available to create URL");
    let l = typeof t == "string" ? t : Yn(t);
    return l = l.replace(/ $/, "%20"), !e && l.startsWith("//") && (l = a + l), new URL(l, a);
  }
  function Xh(t, e, a = "/") {
    return Rg(t, e, a, false);
  }
  function Rg(t, e, a, l) {
    let n = typeof e == "string" ? kl(e) : e, u = ta(n.pathname || "/", a);
    if (u == null) return null;
    let i = Qh(t);
    Mg(i);
    let c = null;
    for (let s = 0; c == null && s < i.length; ++s) {
      let o = Lg(u);
      c = Bg(i[s], o, l);
    }
    return c;
  }
  function Qh(t, e = [], a = [], l = "", n = false) {
    let u = (i, c, s = n, o) => {
      let h = {
        relativePath: o === void 0 ? i.path || "" : o,
        caseSensitive: i.caseSensitive === true,
        childrenIndex: c,
        route: i
      };
      if (h.relativePath.startsWith("/")) {
        if (!h.relativePath.startsWith(l) && s) return;
        dt(h.relativePath.startsWith(l), `Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(l.length);
      }
      let r = Oe([
        l,
        h.relativePath
      ]), d = a.concat(h);
      i.children && i.children.length > 0 && (dt(i.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${r}".`), Qh(i.children, e, d, r, s)), !(i.path == null && !i.index) && e.push({
        path: r,
        score: Hg(r, i.index),
        routesMeta: d
      });
    };
    return t.forEach((i, c) => {
      var _a2;
      if (i.path === "" || !((_a2 = i.path) == null ? void 0 : _a2.includes("?"))) u(i, c);
      else for (let s of Vh(i.path)) u(i, c, true, s);
    }), e;
  }
  function Vh(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [a, ...l] = e, n = a.endsWith("?"), u = a.replace(/\?$/, "");
    if (l.length === 0) return n ? [
      u,
      ""
    ] : [
      u
    ];
    let i = Vh(l.join("/")), c = [];
    return c.push(...i.map((s) => s === "" ? u : [
      u,
      s
    ].join("/"))), n && c.push(...i), c.map((s) => t.startsWith("/") && s === "" ? "/" : s);
  }
  function Mg(t) {
    t.sort((e, a) => e.score !== a.score ? a.score - e.score : Ug(e.routesMeta.map((l) => l.childrenIndex), a.routesMeta.map((l) => l.childrenIndex)));
  }
  var Cg = /^:[\w-]+$/, Ng = 3, Og = 2, Dg = 1, wg = 10, jg = -2, Nf = (t) => t === "*";
  function Hg(t, e) {
    let a = t.split("/"), l = a.length;
    return a.some(Nf) && (l += jg), e && (l += Og), a.filter((n) => !Nf(n)).reduce((n, u) => n + (Cg.test(u) ? Ng : u === "" ? Dg : wg), l);
  }
  function Ug(t, e) {
    return t.length === e.length && t.slice(0, -1).every((l, n) => l === e[n]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function Bg(t, e, a = false) {
    let { routesMeta: l } = t, n = {}, u = "/", i = [];
    for (let c = 0; c < l.length; ++c) {
      let s = l[c], o = c === l.length - 1, h = u === "/" ? e : e.slice(u.length) || "/", r = pi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: o
      }, h), d = s.route;
      if (!r && o && a && !l[l.length - 1].route.index && (r = pi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: false
      }, h)), !r) return null;
      Object.assign(n, r.params), i.push({
        params: n,
        pathname: Oe([
          u,
          r.pathname
        ]),
        pathnameBase: Qg(Oe([
          u,
          r.pathnameBase
        ])),
        route: d
      }), r.pathnameBase !== "/" && (u = Oe([
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
    let [a, l] = qg(t.path, t.caseSensitive, t.end), n = e.match(a);
    if (!n) return null;
    let u = n[0], i = u.replace(/(.)\/+$/, "$1"), c = n.slice(1);
    return {
      params: l.reduce((o, { paramName: h, isOptional: r }, d) => {
        if (h === "*") {
          let T = c[d] || "";
          i = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const p = c[d];
        return r && !p ? o[h] = void 0 : o[h] = (p || "").replace(/%2F/g, "/"), o;
      }, {}),
      pathname: u,
      pathnameBase: i,
      pattern: t
    };
  }
  function qg(t, e = false, a = true) {
    Te(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let l = [], n = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, c, s, o, h) => {
      if (l.push({
        paramName: c,
        isOptional: s != null
      }), s) {
        let r = h.charAt(o + i.length);
        return r && r !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return t.endsWith("*") ? (l.push({
      paramName: "*"
    }), n += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? n += "\\/*$" : t !== "" && t !== "/" && (n += "(?:(?=\\/|$))"), [
      new RegExp(n, e ? void 0 : "i"),
      l
    ];
  }
  function Lg(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Te(false, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`), t;
    }
  }
  function ta(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let a = e.endsWith("/") ? e.length - 1 : e.length, l = t.charAt(a);
    return l && l !== "/" ? null : t.slice(a) || "/";
  }
  var Yg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function Gg(t, e = "/") {
    let { pathname: a, search: l = "", hash: n = "" } = typeof t == "string" ? kl(t) : t, u;
    return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? u = Of(a.substring(1), "/") : u = Of(a, e)) : u = e, {
      pathname: u,
      search: Vg(l),
      hash: Zg(n)
    };
  }
  function Of(t, e) {
    let a = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((n) => {
      n === ".." ? a.length > 1 && a.pop() : n !== "." && a.push(n);
    }), a.length > 1 ? a.join("/") : "/";
  }
  function Rc(t, e, a, l) {
    return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Xg(t) {
    return t.filter((e, a) => a === 0 || e.route.path && e.route.path.length > 0);
  }
  function Dr(t) {
    let e = Xg(t);
    return e.map((a, l) => l === e.length - 1 ? a.pathname : a.pathnameBase);
  }
  function Bi(t, e, a, l = false) {
    let n;
    typeof t == "string" ? n = kl(t) : (n = {
      ...t
    }, dt(!n.pathname || !n.pathname.includes("?"), Rc("?", "pathname", "search", n)), dt(!n.pathname || !n.pathname.includes("#"), Rc("#", "pathname", "hash", n)), dt(!n.search || !n.search.includes("#"), Rc("#", "search", "hash", n)));
    let u = t === "" || n.pathname === "", i = u ? "/" : n.pathname, c;
    if (i == null) c = a;
    else {
      let r = e.length - 1;
      if (!l && i.startsWith("..")) {
        let d = i.split("/");
        for (; d[0] === ".."; ) d.shift(), r -= 1;
        n.pathname = d.join("/");
      }
      c = r >= 0 ? e[r] : "/";
    }
    let s = Gg(n, c), o = i && i !== "/" && i.endsWith("/"), h = (u || i === ".") && a.endsWith("/");
    return !s.pathname.endsWith("/") && (o || h) && (s.pathname += "/"), s;
  }
  var Oe = (t) => t.join("/").replace(/\/\/+/g, "/"), Qg = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), Vg = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, Zg = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Kg = class {
    constructor(t, e, a, l = false) {
      this.status = t, this.statusText = e || "", this.internal = l, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
    }
  };
  function kg(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  function Jg(t) {
    return t.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var Zh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function Kh(t, e) {
    let a = t;
    if (typeof a != "string" || !Yg.test(a)) return {
      absoluteURL: void 0,
      isExternal: false,
      to: a
    };
    let l = a, n = false;
    if (Zh) try {
      let u = new URL(window.location.href), i = a.startsWith("//") ? new URL(u.protocol + a) : new URL(a), c = ta(i.pathname, e);
      i.origin === u.origin && c != null ? a = c + i.search + i.hash : n = true;
    } catch {
      Te(false, `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return {
      absoluteURL: l,
      isExternal: n,
      to: a
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var kh = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(kh);
  var $g = [
    "GET",
    ...kh
  ];
  new Set($g);
  var Jl = v.createContext(null);
  Jl.displayName = "DataRouter";
  var qi = v.createContext(null);
  qi.displayName = "DataRouterState";
  var Jh = v.createContext(false);
  function Wg() {
    return v.useContext(Jh);
  }
  var $h = v.createContext({
    isTransitioning: false
  });
  $h.displayName = "ViewTransition";
  var Fg = v.createContext(/* @__PURE__ */ new Map());
  Fg.displayName = "Fetchers";
  var Pg = v.createContext(null);
  Pg.displayName = "Await";
  var ce = v.createContext(null);
  ce.displayName = "Navigation";
  var In = v.createContext(null);
  In.displayName = "Location";
  var ze = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  ze.displayName = "Route";
  var wr = v.createContext(null);
  wr.displayName = "RouteError";
  var Wh = "REACT_ROUTER_ERROR", Ig = "REDIRECT", tv = "ROUTE_ERROR_RESPONSE";
  function ev(t) {
    if (t.startsWith(`${Wh}:${Ig}:{`)) try {
      let e = JSON.parse(t.slice(28));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.location == "string" && typeof e.reloadDocument == "boolean" && typeof e.replace == "boolean") return e;
    } catch {
    }
  }
  function av(t) {
    if (t.startsWith(`${Wh}:${tv}:{`)) try {
      let e = JSON.parse(t.slice(40));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string") return new Kg(e.status, e.statusText, e.data);
    } catch {
    }
  }
  function lv(t, { relative: e } = {}) {
    dt($l(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: a, navigator: l } = v.useContext(ce), { hash: n, pathname: u, search: i } = tu(t, {
      relative: e
    }), c = u;
    return a !== "/" && (c = u === "/" ? a : Oe([
      a,
      u
    ])), l.createHref({
      pathname: c,
      search: i,
      hash: n
    });
  }
  function $l() {
    return v.useContext(In) != null;
  }
  function je() {
    return dt($l(), "useLocation() may be used only in the context of a <Router> component."), v.useContext(In).location;
  }
  var Fh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Ph(t) {
    v.useContext(ce).static || v.useLayoutEffect(t);
  }
  Ih = function() {
    let { isDataRoute: t } = v.useContext(ze);
    return t ? gv() : nv();
  };
  function nv() {
    dt($l(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = v.useContext(Jl), { basename: e, navigator: a } = v.useContext(ce), { matches: l } = v.useContext(ze), { pathname: n } = je(), u = JSON.stringify(Dr(l)), i = v.useRef(false);
    return Ph(() => {
      i.current = true;
    }), v.useCallback((s, o = {}) => {
      if (Te(i.current, Fh), !i.current) return;
      if (typeof s == "number") {
        a.go(s);
        return;
      }
      let h = Bi(s, JSON.parse(u), n, o.relative === "path");
      t == null && e !== "/" && (h.pathname = h.pathname === "/" ? e : Oe([
        e,
        h.pathname
      ])), (o.replace ? a.replace : a.push)(h, o.state, o);
    }, [
      e,
      a,
      u,
      n,
      t
    ]);
  }
  v.createContext(null);
  uv = function() {
    let { matches: t } = v.useContext(ze), e = t[t.length - 1];
    return e ? e.params : {};
  };
  function tu(t, { relative: e } = {}) {
    let { matches: a } = v.useContext(ze), { pathname: l } = je(), n = JSON.stringify(Dr(a));
    return v.useMemo(() => Bi(t, JSON.parse(n), l, e === "path"), [
      t,
      n,
      l,
      e
    ]);
  }
  function iv(t, e) {
    return t0(t, e);
  }
  function t0(t, e, a) {
    var _a2;
    dt($l(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: l } = v.useContext(ce), { matches: n } = v.useContext(ze), u = n[n.length - 1], i = u ? u.params : {}, c = u ? u.pathname : "/", s = u ? u.pathnameBase : "/", o = u && u.route;
    {
      let R = o && o.path || "";
      a0(c, !o || R.endsWith("*") || R.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`);
    }
    let h = je(), r;
    if (e) {
      let R = typeof e == "string" ? kl(e) : e;
      dt(s === "/" || ((_a2 = R.pathname) == null ? void 0 : _a2.startsWith(s)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${R.pathname}" was given in the \`location\` prop.`), r = R;
    } else r = h;
    let d = r.pathname || "/", p = d;
    if (s !== "/") {
      let R = s.replace(/^\//, "").split("/");
      p = "/" + d.replace(/^\//, "").split("/").slice(R.length).join("/");
    }
    let T = Xh(t, {
      pathname: p
    });
    Te(o || T != null, `No routes matched location "${r.pathname}${r.search}${r.hash}" `), Te(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, `Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = fv(T && T.map((R) => Object.assign({}, R, {
      params: Object.assign({}, i, R.params),
      pathname: Oe([
        s,
        l.encodeLocation ? l.encodeLocation(R.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathname
      ]),
      pathnameBase: R.pathnameBase === "/" ? s : Oe([
        s,
        l.encodeLocation ? l.encodeLocation(R.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathnameBase
      ])
    })), n, a);
    return e && M ? v.createElement(In.Provider, {
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
  function cv() {
    let t = pv(), e = kg(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), a = t instanceof Error ? t.stack : null, l = "rgba(200,200,200, 0.5)", n = {
      padding: "0.5rem",
      backgroundColor: l
    }, u = {
      padding: "2px 4px",
      backgroundColor: l
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t), i = v.createElement(v.Fragment, null, v.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", v.createElement("code", {
      style: u
    }, "ErrorBoundary"), " or", " ", v.createElement("code", {
      style: u
    }, "errorElement"), " prop on your route.")), v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, e), a ? v.createElement("pre", {
      style: n
    }, a) : null, i);
  }
  var sv = v.createElement(cv, null), e0 = class extends v.Component {
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
        const a = av(t.digest);
        a && (t = a);
      }
      let e = t !== void 0 ? v.createElement(ze.Provider, {
        value: this.props.routeContext
      }, v.createElement(wr.Provider, {
        value: t,
        children: this.props.component
      })) : this.props.children;
      return this.context ? v.createElement(rv, {
        error: t
      }, e) : e;
    }
  };
  e0.contextType = Jh;
  var Mc = /* @__PURE__ */ new WeakMap();
  function rv({ children: t, error: e }) {
    let { basename: a } = v.useContext(ce);
    if (typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      let l = ev(e.digest);
      if (l) {
        let n = Mc.get(e);
        if (n) throw n;
        let u = Kh(l.location, a);
        if (Zh && !Mc.get(e)) if (u.isExternal || l.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const i = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
            replace: l.replace
          }));
          throw Mc.set(e, i), i;
        }
        return v.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${u.absoluteURL || u.to}`
        });
      }
    }
    return t;
  }
  function ov({ routeContext: t, match: e, children: a }) {
    let l = v.useContext(Jl);
    return l && l.static && l.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = e.route.id), v.createElement(ze.Provider, {
      value: t
    }, a);
  }
  function fv(t, e = [], a) {
    let l = a == null ? void 0 : a.state;
    if (t == null) {
      if (!l) return null;
      if (l.errors) t = l.matches;
      else if (e.length === 0 && !l.initialized && l.matches.length > 0) t = l.matches;
      else return null;
    }
    let n = t, u = l == null ? void 0 : l.errors;
    if (u != null) {
      let h = n.findIndex((r) => r.route.id && (u == null ? void 0 : u[r.route.id]) !== void 0);
      dt(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), n = n.slice(0, Math.min(n.length, h + 1));
    }
    let i = false, c = -1;
    if (a && l) {
      i = l.renderFallback;
      for (let h = 0; h < n.length; h++) {
        let r = n[h];
        if ((r.route.HydrateFallback || r.route.hydrateFallbackElement) && (c = h), r.route.id) {
          let { loaderData: d, errors: p } = l, T = r.route.loader && !d.hasOwnProperty(r.route.id) && (!p || p[r.route.id] === void 0);
          if (r.route.lazy || T) {
            a.isStatic && (i = true), c >= 0 ? n = n.slice(0, c + 1) : n = [
              n[0]
            ];
            break;
          }
        }
      }
    }
    let s = a == null ? void 0 : a.onError, o = l && s ? (h, r) => {
      var _a2, _b;
      s(h, {
        location: l.location,
        params: ((_b = (_a2 = l.matches) == null ? void 0 : _a2[0]) == null ? void 0 : _b.params) ?? {},
        unstable_pattern: Jg(l.matches),
        errorInfo: r
      });
    } : void 0;
    return n.reduceRight((h, r, d) => {
      let p, T = false, M = null, R = null;
      l && (p = u && r.route.id ? u[r.route.id] : void 0, M = r.route.errorElement || sv, i && (c < 0 && d === 0 ? (a0("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), T = true, R = null) : c === d && (T = true, R = r.route.hydrateFallbackElement || null)));
      let f = e.concat(n.slice(0, d + 1)), m = () => {
        let g;
        return p ? g = M : T ? g = R : r.route.Component ? g = v.createElement(r.route.Component, null) : r.route.element ? g = r.route.element : g = h, v.createElement(ov, {
          match: r,
          routeContext: {
            outlet: h,
            matches: f,
            isDataRoute: l != null
          },
          children: g
        });
      };
      return l && (r.route.ErrorBoundary || r.route.errorElement || d === 0) ? v.createElement(e0, {
        location: l.location,
        revalidation: l.revalidation,
        component: M,
        error: p,
        children: m(),
        routeContext: {
          outlet: null,
          matches: f,
          isDataRoute: true
        },
        onError: o
      }) : m();
    }, null);
  }
  function jr(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function dv(t) {
    let e = v.useContext(Jl);
    return dt(e, jr(t)), e;
  }
  function mv(t) {
    let e = v.useContext(qi);
    return dt(e, jr(t)), e;
  }
  function hv(t) {
    let e = v.useContext(ze);
    return dt(e, jr(t)), e;
  }
  function Hr(t) {
    let e = hv(t), a = e.matches[e.matches.length - 1];
    return dt(a.route.id, `${t} can only be used on routes that contain a unique "id"`), a.route.id;
  }
  function yv() {
    return Hr("useRouteId");
  }
  function pv() {
    var _a2;
    let t = v.useContext(wr), e = mv("useRouteError"), a = Hr("useRouteError");
    return t !== void 0 ? t : (_a2 = e.errors) == null ? void 0 : _a2[a];
  }
  function gv() {
    let { router: t } = dv("useNavigate"), e = Hr("useNavigate"), a = v.useRef(false);
    return Ph(() => {
      a.current = true;
    }), v.useCallback(async (n, u = {}) => {
      Te(a.current, Fh), a.current && (typeof n == "number" ? await t.navigate(n) : await t.navigate(n, {
        fromRouteId: e,
        ...u
      }));
    }, [
      t,
      e
    ]);
  }
  var Df = {};
  function a0(t, e, a) {
    !e && !Df[t] && (Df[t] = true, Te(false, a));
  }
  v.memo(vv);
  function vv({ routes: t, future: e, state: a, isStatic: l, onError: n }) {
    return t0(t, void 0, {
      state: a,
      isStatic: l,
      onError: n
    });
  }
  function l0({ to: t, replace: e, state: a, relative: l }) {
    dt($l(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: n } = v.useContext(ce);
    Te(!n, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: u } = v.useContext(ze), { pathname: i } = je(), c = Ih(), s = Bi(t, Dr(u), i, l === "path"), o = JSON.stringify(s);
    return v.useEffect(() => {
      c(JSON.parse(o), {
        replace: e,
        state: a,
        relative: l
      });
    }, [
      c,
      o,
      l,
      e,
      a
    ]), null;
  }
  function Xt(t) {
    dt(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function bv({ basename: t = "/", children: e = null, location: a, navigationType: l = "POP", navigator: n, static: u = false, unstable_useTransitions: i }) {
    dt(!$l(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let c = t.replace(/^\/*/, "/"), s = v.useMemo(() => ({
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
    typeof a == "string" && (a = kl(a));
    let { pathname: o = "/", search: h = "", hash: r = "", state: d = null, key: p = "default", unstable_mask: T } = a, M = v.useMemo(() => {
      let R = ta(o, c);
      return R == null ? null : {
        location: {
          pathname: R,
          search: h,
          hash: r,
          state: d,
          key: p,
          unstable_mask: T
        },
        navigationType: l
      };
    }, [
      c,
      o,
      h,
      r,
      d,
      p,
      l,
      T
    ]);
    return Te(M != null, `<Router basename="${c}"> is not able to match the URL "${o}${h}${r}" because it does not start with the basename, so the <Router> won't render anything.`), M == null ? null : v.createElement(ce.Provider, {
      value: s
    }, v.createElement(In.Provider, {
      children: e,
      value: M
    }));
  }
  function Sv({ children: t, location: e }) {
    return iv(Cs(t), e);
  }
  function Cs(t, e = []) {
    let a = [];
    return v.Children.forEach(t, (l, n) => {
      if (!v.isValidElement(l)) return;
      let u = [
        ...e,
        n
      ];
      if (l.type === v.Fragment) {
        a.push.apply(a, Cs(l.props.children, u));
        return;
      }
      dt(l.type === Xt, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), dt(!l.props.index || !l.props.children, "An index route cannot have child routes.");
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
      l.props.children && (i.children = Cs(l.props.children, u)), a.push(i);
    }), a;
  }
  var Lu = "get", Yu = "application/x-www-form-urlencoded";
  function Li(t) {
    return typeof HTMLElement < "u" && t instanceof HTMLElement;
  }
  function xv(t) {
    return Li(t) && t.tagName.toLowerCase() === "button";
  }
  function Ev(t) {
    return Li(t) && t.tagName.toLowerCase() === "form";
  }
  function Tv(t) {
    return Li(t) && t.tagName.toLowerCase() === "input";
  }
  function _v(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function zv(t, e) {
    return t.button === 0 && (!e || e === "_self") && !_v(t);
  }
  var Eu = null;
  function Av() {
    if (Eu === null) try {
      new FormData(document.createElement("form"), 0), Eu = false;
    } catch {
      Eu = true;
    }
    return Eu;
  }
  var Rv = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Cc(t) {
    return t != null && !Rv.has(t) ? (Te(false, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`), null) : t;
  }
  function Mv(t, e) {
    let a, l, n, u, i;
    if (Ev(t)) {
      let c = t.getAttribute("action");
      l = c ? ta(c, e) : null, a = t.getAttribute("method") || Lu, n = Cc(t.getAttribute("enctype")) || Yu, u = new FormData(t);
    } else if (xv(t) || Tv(t) && (t.type === "submit" || t.type === "image")) {
      let c = t.form;
      if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = t.getAttribute("formaction") || c.getAttribute("action");
      if (l = s ? ta(s, e) : null, a = t.getAttribute("formmethod") || c.getAttribute("method") || Lu, n = Cc(t.getAttribute("formenctype")) || Cc(c.getAttribute("enctype")) || Yu, u = new FormData(c, t), !Av()) {
        let { name: o, type: h, value: r } = t;
        if (h === "image") {
          let d = o ? `${o}.` : "";
          u.append(`${d}x`, "0"), u.append(`${d}y`, "0");
        } else o && u.append(o, r);
      }
    } else {
      if (Li(t)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      a = Lu, l = null, n = Yu, i = t;
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
  function Ur(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function n0(t, e, a, l) {
    let n = typeof t == "string" ? new URL(t, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return a ? n.pathname.endsWith("/") ? n.pathname = `${n.pathname}_.${l}` : n.pathname = `${n.pathname}.${l}` : n.pathname === "/" ? n.pathname = `_root.${l}` : e && ta(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.${l}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${l}`, n;
  }
  async function Cv(t, e) {
    if (t.id in e) return e[t.id];
    try {
      let a = await import(t.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return e[t.id] = a, a;
    } catch (a) {
      return console.error(`Error loading route module \`${t.module}\`, reloading page...`), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function Nv(t) {
    return t == null ? false : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
  }
  async function Ov(t, e, a) {
    let l = await Promise.all(t.map(async (n) => {
      let u = e.routes[n.route.id];
      if (u) {
        let i = await Cv(u, a);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return Hv(l.flat(1).filter(Nv).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? {
      ...n,
      rel: "prefetch",
      as: "style"
    } : {
      ...n,
      rel: "prefetch"
    }));
  }
  function wf(t, e, a, l, n, u) {
    let i = (s, o) => a[o] ? s.route.id !== a[o].route.id : true, c = (s, o) => {
      var _a2;
      return a[o].pathname !== s.pathname || ((_a2 = a[o].route.path) == null ? void 0 : _a2.endsWith("*")) && a[o].params["*"] !== s.params["*"];
    };
    return u === "assets" ? e.filter((s, o) => i(s, o) || c(s, o)) : u === "data" ? e.filter((s, o) => {
      var _a2;
      let h = l.routes[s.route.id];
      if (!h || !h.hasLoader) return false;
      if (i(s, o) || c(s, o)) return true;
      if (s.route.shouldRevalidate) {
        let r = s.route.shouldRevalidate({
          currentUrl: new URL(n.pathname + n.search + n.hash, window.origin),
          currentParams: ((_a2 = a[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(t, window.origin),
          nextParams: s.params,
          defaultShouldRevalidate: true
        });
        if (typeof r == "boolean") return r;
      }
      return true;
    }) : [];
  }
  function Dv(t, e, { includeHydrateFallback: a } = {}) {
    return wv(t.map((l) => {
      let n = e.routes[l.route.id];
      if (!n) return [];
      let u = [
        n.module
      ];
      return n.clientActionModule && (u = u.concat(n.clientActionModule)), n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)), a && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)), n.imports && (u = u.concat(n.imports)), u;
    }).flat(1));
  }
  function wv(t) {
    return [
      ...new Set(t)
    ];
  }
  function jv(t) {
    let e = {}, a = Object.keys(t).sort();
    for (let l of a) e[l] = t[l];
    return e;
  }
  function Hv(t, e) {
    let a = /* @__PURE__ */ new Set();
    return new Set(e), t.reduce((l, n) => {
      let u = JSON.stringify(jv(n));
      return a.has(u) || (a.add(u), l.push({
        key: u,
        link: n
      })), l;
    }, []);
  }
  function Br() {
    let t = v.useContext(Jl);
    return Ur(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
  }
  function Uv() {
    let t = v.useContext(qi);
    return Ur(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
  }
  var qr = v.createContext(void 0);
  qr.displayName = "FrameworkContext";
  function Lr() {
    let t = v.useContext(qr);
    return Ur(t, "You must render this element inside a <HydratedRouter> element"), t;
  }
  function Bv(t, e) {
    let a = v.useContext(qr), [l, n] = v.useState(false), [u, i] = v.useState(false), { onFocus: c, onBlur: s, onMouseEnter: o, onMouseLeave: h, onTouchStart: r } = e, d = v.useRef(null);
    v.useEffect(() => {
      if (t === "render" && i(true), t === "viewport") {
        let M = (f) => {
          f.forEach((m) => {
            i(m.isIntersecting);
          });
        }, R = new IntersectionObserver(M, {
          threshold: 0.5
        });
        return d.current && R.observe(d.current), () => {
          R.disconnect();
        };
      }
    }, [
      t
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
    let p = () => {
      n(true);
    }, T = () => {
      n(false), i(false);
    };
    return a ? t !== "intent" ? [
      u,
      d,
      {}
    ] : [
      u,
      d,
      {
        onFocus: nn(c, p),
        onBlur: nn(s, T),
        onMouseEnter: nn(o, p),
        onMouseLeave: nn(h, T),
        onTouchStart: nn(r, p)
      }
    ] : [
      false,
      d,
      {}
    ];
  }
  function nn(t, e) {
    return (a) => {
      t && t(a), a.defaultPrevented || e(a);
    };
  }
  function qv({ page: t, ...e }) {
    let a = Wg(), { router: l } = Br(), n = v.useMemo(() => Xh(l.routes, t, l.basename), [
      l.routes,
      t,
      l.basename
    ]);
    return n ? a ? v.createElement(Yv, {
      page: t,
      matches: n,
      ...e
    }) : v.createElement(Gv, {
      page: t,
      matches: n,
      ...e
    }) : null;
  }
  function Lv(t) {
    let { manifest: e, routeModules: a } = Lr(), [l, n] = v.useState([]);
    return v.useEffect(() => {
      let u = false;
      return Ov(t, e, a).then((i) => {
        u || n(i);
      }), () => {
        u = true;
      };
    }, [
      t,
      e,
      a
    ]), l;
  }
  function Yv({ page: t, matches: e, ...a }) {
    let l = je(), { future: n } = Lr(), { basename: u } = Br(), i = v.useMemo(() => {
      if (t === l.pathname + l.search + l.hash) return [];
      let c = n0(t, u, n.unstable_trailingSlashAwareDataRequests, "rsc"), s = false, o = [];
      for (let h of e) typeof h.route.shouldRevalidate == "function" ? s = true : o.push(h.route.id);
      return s && o.length > 0 && c.searchParams.set("_routes", o.join(",")), [
        c.pathname + c.search
      ];
    }, [
      u,
      n.unstable_trailingSlashAwareDataRequests,
      t,
      l,
      e
    ]);
    return v.createElement(v.Fragment, null, i.map((c) => v.createElement("link", {
      key: c,
      rel: "prefetch",
      as: "fetch",
      href: c,
      ...a
    })));
  }
  function Gv({ page: t, matches: e, ...a }) {
    let l = je(), { future: n, manifest: u, routeModules: i } = Lr(), { basename: c } = Br(), { loaderData: s, matches: o } = Uv(), h = v.useMemo(() => wf(t, e, o, u, l, "data"), [
      t,
      e,
      o,
      u,
      l
    ]), r = v.useMemo(() => wf(t, e, o, u, l, "assets"), [
      t,
      e,
      o,
      u,
      l
    ]), d = v.useMemo(() => {
      if (t === l.pathname + l.search + l.hash) return [];
      let M = /* @__PURE__ */ new Set(), R = false;
      if (e.forEach((m) => {
        var _a2;
        let g = u.routes[m.route.id];
        !g || !g.hasLoader || (!h.some((y) => y.route.id === m.route.id) && m.route.id in s && ((_a2 = i[m.route.id]) == null ? void 0 : _a2.shouldRevalidate) || g.hasClientLoader ? R = true : M.add(m.route.id));
      }), M.size === 0) return [];
      let f = n0(t, c, n.unstable_trailingSlashAwareDataRequests, "data");
      return R && M.size > 0 && f.searchParams.set("_routes", e.filter((m) => M.has(m.route.id)).map((m) => m.route.id).join(",")), [
        f.pathname + f.search
      ];
    }, [
      c,
      n.unstable_trailingSlashAwareDataRequests,
      s,
      l,
      u,
      h,
      e,
      t,
      i
    ]), p = v.useMemo(() => Dv(r, u), [
      r,
      u
    ]), T = Lv(r);
    return v.createElement(v.Fragment, null, d.map((M) => v.createElement("link", {
      key: M,
      rel: "prefetch",
      as: "fetch",
      href: M,
      ...a
    })), p.map((M) => v.createElement("link", {
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
  function Xv(...t) {
    return (e) => {
      t.forEach((a) => {
        typeof a == "function" ? a(e) : a != null && (a.current = e);
      });
    };
  }
  var Qv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Qv && (window.__reactRouterVersion = "7.14.0");
  } catch {
  }
  function Vv({ basename: t, children: e, unstable_useTransitions: a, window: l }) {
    let n = v.useRef();
    n.current == null && (n.current = Tg({
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
    ]), v.createElement(bv, {
      basename: t,
      children: e,
      location: i.location,
      navigationType: i.action,
      navigator: u,
      unstable_useTransitions: a
    });
  }
  var u0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Yi = v.forwardRef(function({ onClick: e, discover: a = "render", prefetch: l = "none", relative: n, reloadDocument: u, replace: i, unstable_mask: c, state: s, target: o, to: h, preventScrollReset: r, viewTransition: d, unstable_defaultShouldRevalidate: p, ...T }, M) {
    let { basename: R, navigator: f, unstable_useTransitions: m } = v.useContext(ce), g = typeof h == "string" && u0.test(h), y = Kh(h, R);
    h = y.to;
    let x = lv(h, {
      relative: n
    }), A = je(), _ = null;
    if (c) {
      let Q = Bi(c, [], A.unstable_mask ? A.unstable_mask.pathname : "/", true);
      R !== "/" && (Q.pathname = Q.pathname === "/" ? R : Oe([
        R,
        Q.pathname
      ])), _ = f.createHref(Q);
    }
    let [S, z, b] = Bv(l, T), N = Jv(h, {
      replace: i,
      unstable_mask: c,
      state: s,
      target: o,
      preventScrollReset: r,
      relative: n,
      viewTransition: d,
      unstable_defaultShouldRevalidate: p,
      unstable_useTransitions: m
    });
    function w(Q) {
      e && e(Q), Q.defaultPrevented || N(Q);
    }
    let O = !(y.isExternal || u), U = v.createElement("a", {
      ...T,
      ...b,
      href: (O ? _ : void 0) || y.absoluteURL || x,
      onClick: O ? w : e,
      ref: Xv(M, z),
      target: o,
      "data-discover": !g && a === "render" ? "true" : void 0
    });
    return S && !g ? v.createElement(v.Fragment, null, U, v.createElement(qv, {
      page: x
    })) : U;
  });
  Yi.displayName = "Link";
  var Zv = v.forwardRef(function({ "aria-current": e = "page", caseSensitive: a = false, className: l = "", end: n = false, style: u, to: i, viewTransition: c, children: s, ...o }, h) {
    let r = tu(i, {
      relative: o.relative
    }), d = je(), p = v.useContext(qi), { navigator: T, basename: M } = v.useContext(ce), R = p != null && Iv(r) && c === true, f = T.encodeLocation ? T.encodeLocation(r).pathname : r.pathname, m = d.pathname, g = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
    a || (m = m.toLowerCase(), g = g ? g.toLowerCase() : null, f = f.toLowerCase()), g && M && (g = ta(g, M) || g);
    const y = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let x = m === f || !n && m.startsWith(f) && m.charAt(y) === "/", A = g != null && (g === f || !n && g.startsWith(f) && g.charAt(f.length) === "/"), _ = {
      isActive: x,
      isPending: A,
      isTransitioning: R
    }, S = x ? e : void 0, z;
    typeof l == "function" ? z = l(_) : z = [
      l,
      x ? "active" : null,
      A ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let b = typeof u == "function" ? u(_) : u;
    return v.createElement(Yi, {
      ...o,
      "aria-current": S,
      className: z,
      ref: h,
      style: b,
      to: i,
      viewTransition: c
    }, typeof s == "function" ? s(_) : s);
  });
  Zv.displayName = "NavLink";
  var Kv = v.forwardRef(({ discover: t = "render", fetcherKey: e, navigate: a, reloadDocument: l, replace: n, state: u, method: i = Lu, action: c, onSubmit: s, relative: o, preventScrollReset: h, viewTransition: r, unstable_defaultShouldRevalidate: d, ...p }, T) => {
    let { unstable_useTransitions: M } = v.useContext(ce), R = Fv(), f = Pv(c, {
      relative: o
    }), m = i.toLowerCase() === "get" ? "get" : "post", g = typeof c == "string" && u0.test(c), y = (x) => {
      if (s && s(x), x.defaultPrevented) return;
      x.preventDefault();
      let A = x.nativeEvent.submitter, _ = (A == null ? void 0 : A.getAttribute("formmethod")) || i, S = () => R(A || x.currentTarget, {
        fetcherKey: e,
        method: _,
        navigate: a,
        replace: n,
        state: u,
        relative: o,
        preventScrollReset: h,
        viewTransition: r,
        unstable_defaultShouldRevalidate: d
      });
      M && a !== false ? v.startTransition(() => S()) : S();
    };
    return v.createElement("form", {
      ref: T,
      method: m,
      action: f,
      onSubmit: l ? s : y,
      ...p,
      "data-discover": !g && t === "render" ? "true" : void 0
    });
  });
  Kv.displayName = "Form";
  function kv(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function i0(t) {
    let e = v.useContext(Jl);
    return dt(e, kv(t)), e;
  }
  function Jv(t, { target: e, replace: a, unstable_mask: l, state: n, preventScrollReset: u, relative: i, viewTransition: c, unstable_defaultShouldRevalidate: s, unstable_useTransitions: o } = {}) {
    let h = Ih(), r = je(), d = tu(t, {
      relative: i
    });
    return v.useCallback((p) => {
      if (zv(p, e)) {
        p.preventDefault();
        let T = a !== void 0 ? a : Yn(r) === Yn(d), M = () => h(t, {
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
      h,
      d,
      a,
      l,
      n,
      e,
      t,
      u,
      i,
      c,
      s,
      o
    ]);
  }
  var $v = 0, Wv = () => `__${String(++$v)}__`;
  function Fv() {
    let { router: t } = i0("useSubmit"), { basename: e } = v.useContext(ce), a = yv(), l = t.fetch, n = t.navigate;
    return v.useCallback(async (u, i = {}) => {
      let { action: c, method: s, encType: o, formData: h, body: r } = Mv(u, e);
      if (i.navigate === false) {
        let d = i.fetcherKey || Wv();
        await l(d, a, i.action || c, {
          unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: h,
          body: r,
          formMethod: i.method || s,
          formEncType: i.encType || o,
          flushSync: i.flushSync
        });
      } else await n(i.action || c, {
        unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
        preventScrollReset: i.preventScrollReset,
        formData: h,
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
      e,
      a
    ]);
  }
  function Pv(t, { relative: e } = {}) {
    let { basename: a } = v.useContext(ce), l = v.useContext(ze);
    dt(l, "useFormAction must be used inside a RouteContext");
    let [n] = l.matches.slice(-1), u = {
      ...tu(t || ".", {
        relative: e
      })
    }, i = je();
    if (t == null) {
      u.search = i.search;
      let c = new URLSearchParams(u.search), s = c.getAll("index");
      if (s.some((h) => h === "")) {
        c.delete("index"), s.filter((r) => r).forEach((r) => c.append("index", r));
        let h = c.toString();
        u.search = h ? `?${h}` : "";
      }
    }
    return (!t || t === ".") && n.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (u.pathname = u.pathname === "/" ? a : Oe([
      a,
      u.pathname
    ])), Yn(u);
  }
  function Iv(t, { relative: e } = {}) {
    let a = v.useContext($h);
    dt(a != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: l } = i0("useViewTransitionState"), n = tu(t, {
      relative: e
    });
    if (!a.isTransitioning) return false;
    let u = ta(a.currentLocation.pathname, l) || a.currentLocation.pathname, i = ta(a.nextLocation.pathname, l) || a.nextLocation.pathname;
    return pi(n.pathname, i) != null || pi(n.pathname, u) != null;
  }
  let t1, jf, c0, e1, Yr, a1, l1, n1, u1, i1, c1, s1, Nc;
  t1 = (t, e, a, l, n, u, i, c) => {
    let s = document.documentElement, o = [
      "light",
      "dark"
    ];
    function h(p) {
      (Array.isArray(t) ? t : [
        t
      ]).forEach((T) => {
        let M = T === "class", R = M && u ? n.map((f) => u[f] || f) : n;
        M ? (s.classList.remove(...R), s.classList.add(u && u[p] ? u[p] : p)) : s.setAttribute(T, p);
      }), r(p);
    }
    function r(p) {
      c && o.includes(p) && (s.style.colorScheme = p);
    }
    function d() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (l) h(l);
    else try {
      let p = localStorage.getItem(e) || a, T = i && p === "system" ? d() : p;
      h(T);
    } catch {
    }
  };
  jf = [
    "light",
    "dark"
  ];
  c0 = "(prefers-color-scheme: dark)";
  e1 = typeof window > "u";
  Yr = v.createContext(void 0);
  a1 = {
    setTheme: (t) => {
    },
    themes: []
  };
  lb = () => {
    var t;
    return (t = v.useContext(Yr)) != null ? t : a1;
  };
  l1 = (t) => v.useContext(Yr) ? v.createElement(v.Fragment, null, t.children) : v.createElement(u1, {
    ...t
  });
  n1 = [
    "light",
    "dark"
  ];
  u1 = ({ forcedTheme: t, disableTransitionOnChange: e = false, enableSystem: a = true, enableColorScheme: l = true, storageKey: n = "theme", themes: u = n1, defaultTheme: i = a ? "system" : "light", attribute: c = "data-theme", value: s, children: o, nonce: h, scriptProps: r }) => {
    let [d, p] = v.useState(() => c1(n, i)), [T, M] = v.useState(() => d === "system" ? Nc() : d), R = s ? Object.values(s) : u, f = v.useCallback((x) => {
      let A = x;
      if (!A) return;
      x === "system" && a && (A = Nc());
      let _ = s ? s[A] : A, S = e ? s1(h) : null, z = document.documentElement, b = (N) => {
        N === "class" ? (z.classList.remove(...R), _ && z.classList.add(_)) : N.startsWith("data-") && (_ ? z.setAttribute(N, _) : z.removeAttribute(N));
      };
      if (Array.isArray(c) ? c.forEach(b) : b(c), l) {
        let N = jf.includes(i) ? i : null, w = jf.includes(A) ? A : N;
        z.style.colorScheme = w;
      }
      S == null ? void 0 : S();
    }, [
      h
    ]), m = v.useCallback((x) => {
      let A = typeof x == "function" ? x(d) : x;
      p(A);
      try {
        localStorage.setItem(n, A);
      } catch {
      }
    }, [
      d
    ]), g = v.useCallback((x) => {
      let A = Nc(x);
      M(A), d === "system" && a && !t && f("system");
    }, [
      d,
      t
    ]);
    v.useEffect(() => {
      let x = window.matchMedia(c0);
      return x.addListener(g), g(x), () => x.removeListener(g);
    }, [
      g
    ]), v.useEffect(() => {
      let x = (A) => {
        A.key === n && (A.newValue ? p(A.newValue) : m(i));
      };
      return window.addEventListener("storage", x), () => window.removeEventListener("storage", x);
    }, [
      m
    ]), v.useEffect(() => {
      f(t ?? d);
    }, [
      t,
      d
    ]);
    let y = v.useMemo(() => ({
      theme: d,
      setTheme: m,
      forcedTheme: t,
      resolvedTheme: d === "system" ? T : d,
      themes: a ? [
        ...u,
        "system"
      ] : u,
      systemTheme: a ? T : void 0
    }), [
      d,
      m,
      t,
      T,
      a,
      u
    ]);
    return v.createElement(Yr.Provider, {
      value: y
    }, v.createElement(i1, {
      forcedTheme: t,
      storageKey: n,
      attribute: c,
      enableSystem: a,
      enableColorScheme: l,
      defaultTheme: i,
      value: s,
      themes: u,
      nonce: h,
      scriptProps: r
    }), o);
  };
  i1 = v.memo(({ forcedTheme: t, storageKey: e, attribute: a, enableSystem: l, enableColorScheme: n, defaultTheme: u, value: i, themes: c, nonce: s, scriptProps: o }) => {
    let h = JSON.stringify([
      a,
      e,
      u,
      t,
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
        __html: `(${t1.toString()})(${h})`
      }
    });
  });
  c1 = (t, e) => {
    if (e1) return;
    let a;
    try {
      a = localStorage.getItem(t) || void 0;
    } catch {
    }
    return a || e;
  };
  s1 = (t) => {
    let e = document.createElement("style");
    return t && e.setAttribute("nonce", t), e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(e);
      }, 1);
    };
  };
  Nc = (t) => (t || (t = window.matchMedia(c0)), t.matches ? "dark" : "light");
  function r1(t) {
    if (typeof document > "u") return;
    let e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
  const o1 = (t) => {
    switch (t) {
      case "success":
        return m1;
      case "info":
        return y1;
      case "warning":
        return h1;
      case "error":
        return p1;
      default:
        return null;
    }
  }, f1 = Array(12).fill(0), d1 = ({ visible: t, className: e }) => j.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, j.createElement("div", {
    className: "sonner-spinner"
  }, f1.map((a, l) => j.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${l}`
  })))), m1 = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, j.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), h1 = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, j.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), y1 = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), p1 = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, j.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), g1 = j.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, j.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), j.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), v1 = () => {
    const [t, e] = j.useState(document.hidden);
    return j.useEffect(() => {
      const a = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
    }, []), t;
  };
  let Ns = 1;
  class b1 {
    constructor() {
      this.subscribe = (e) => (this.subscribers.push(e), () => {
        const a = this.subscribers.indexOf(e);
        this.subscribers.splice(a, 1);
      }), this.publish = (e) => {
        this.subscribers.forEach((a) => a(e));
      }, this.addToast = (e) => {
        this.publish(e), this.toasts = [
          ...this.toasts,
          e
        ];
      }, this.create = (e) => {
        var a;
        const { message: l, ...n } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((a = e.id) == null ? void 0 : a.length) > 0 ? e.id : Ns++, i = this.toasts.find((s) => s.id === u), c = e.dismissible === void 0 ? true : e.dismissible;
        return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), i ? this.toasts = this.toasts.map((s) => s.id === u ? (this.publish({
          ...s,
          ...e,
          id: u,
          title: l
        }), {
          ...s,
          ...e,
          id: u,
          dismissible: c,
          title: l
        }) : s) : this.addToast({
          title: l,
          ...n,
          dismissible: c,
          id: u
        }), u;
      }, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((a) => a({
        id: e,
        dismiss: true
      })))) : this.toasts.forEach((a) => {
        this.subscribers.forEach((l) => l({
          id: a.id,
          dismiss: true
        }));
      }), e), this.message = (e, a) => this.create({
        ...a,
        message: e
      }), this.error = (e, a) => this.create({
        ...a,
        message: e,
        type: "error"
      }), this.success = (e, a) => this.create({
        ...a,
        type: "success",
        message: e
      }), this.info = (e, a) => this.create({
        ...a,
        type: "info",
        message: e
      }), this.warning = (e, a) => this.create({
        ...a,
        type: "warning",
        message: e
      }), this.loading = (e, a) => this.create({
        ...a,
        type: "loading",
        message: e
      }), this.promise = (e, a) => {
        if (!a) return;
        let l;
        a.loading !== void 0 && (l = this.create({
          ...a,
          promise: e,
          type: "loading",
          message: a.loading,
          description: typeof a.description != "function" ? a.description : void 0
        }));
        const n = Promise.resolve(e instanceof Function ? e() : e);
        let u = l !== void 0, i;
        const c = n.then(async (o) => {
          if (i = [
            "resolve",
            o
          ], j.isValidElement(o)) u = false, this.create({
            id: l,
            type: "default",
            message: o
          });
          else if (x1(o) && !o.ok) {
            u = false;
            const r = typeof a.error == "function" ? await a.error(`HTTP error! status: ${o.status}`) : a.error, d = typeof a.description == "function" ? await a.description(`HTTP error! status: ${o.status}`) : a.description, T = typeof r == "object" && !j.isValidElement(r) ? r : {
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
            const r = typeof a.error == "function" ? await a.error(o) : a.error, d = typeof a.description == "function" ? await a.description(o) : a.description, T = typeof r == "object" && !j.isValidElement(r) ? r : {
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
            const r = typeof a.success == "function" ? await a.success(o) : a.success, d = typeof a.description == "function" ? await a.description(o) : a.description, T = typeof r == "object" && !j.isValidElement(r) ? r : {
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
            const h = typeof a.error == "function" ? await a.error(o) : a.error, r = typeof a.description == "function" ? await a.description(o) : a.description, p = typeof h == "object" && !j.isValidElement(h) ? h : {
              message: h
            };
            this.create({
              id: l,
              type: "error",
              description: r,
              ...p
            });
          }
        }).finally(() => {
          u && (this.dismiss(l), l = void 0), a.finally == null || a.finally.call(a);
        }), s = () => new Promise((o, h) => c.then(() => i[0] === "reject" ? h(i[1]) : o(i[1])).catch(h));
        return typeof l != "string" && typeof l != "number" ? {
          unwrap: s
        } : Object.assign(l, {
          unwrap: s
        });
      }, this.custom = (e, a) => {
        const l = (a == null ? void 0 : a.id) || Ns++;
        return this.create({
          jsx: e(l),
          id: l,
          ...a
        }), l;
      }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Zt, S1, x1, E1, T1, _1;
  Zt = new b1();
  S1 = (t, e) => {
    const a = (e == null ? void 0 : e.id) || Ns++;
    return Zt.addToast({
      title: t,
      ...e,
      id: a
    }), a;
  };
  x1 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
  E1 = S1;
  T1 = () => Zt.toasts;
  _1 = () => Zt.getActiveToasts();
  nb = Object.assign(E1, {
    success: Zt.success,
    info: Zt.info,
    warning: Zt.warning,
    error: Zt.error,
    custom: Zt.custom,
    message: Zt.message,
    promise: Zt.promise,
    dismiss: Zt.dismiss,
    loading: Zt.loading
  }, {
    getHistory: T1,
    getToasts: _1
  });
  r1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function Tu(t) {
    return t.label !== void 0;
  }
  const z1 = 3, A1 = "24px", R1 = "16px", Hf = 4e3, M1 = 356, C1 = 14, N1 = 45, O1 = 200;
  function Ae(...t) {
    return t.filter(Boolean).join(" ");
  }
  function D1(t) {
    const [e, a] = t.split("-"), l = [];
    return e && l.push(e), a && l.push(a), l;
  }
  const w1 = (t) => {
    var e, a, l, n, u, i, c, s, o;
    const { invert: h, toast: r, unstyled: d, interacting: p, setHeights: T, visibleToasts: M, heights: R, index: f, toasts: m, expanded: g, removeToast: y, defaultRichColors: x, closeButton: A, style: _, cancelButtonStyle: S, actionButtonStyle: z, className: b = "", descriptionClassName: N = "", duration: w, position: O, gap: U, expandByDefault: Q, classNames: D, icons: H, closeButtonAriaLabel: B = "Close toast" } = t, [q, Z] = j.useState(null), [Mt, gt] = j.useState(null), [Y, K] = j.useState(false), [I, Ut] = j.useState(false), [Pa, ot] = j.useState(false), [Ia, eu] = j.useState(false), [au, tl] = j.useState(false), [f0, Gi] = j.useState(0), [d0, Gr] = j.useState(0), Wl = j.useRef(r.duration || w || Hf), Xr = j.useRef(null), He = j.useRef(null), m0 = f === 0, h0 = f + 1 <= M, $t = r.type, el = r.dismissible !== false, y0 = r.className || "", p0 = r.descriptionClassName || "", lu = j.useMemo(() => R.findIndex((V) => V.toastId === r.id) || 0, [
      R,
      r.id
    ]), g0 = j.useMemo(() => {
      var V;
      return (V = r.closeButton) != null ? V : A;
    }, [
      r.closeButton,
      A
    ]), Qr = j.useMemo(() => r.duration || w || Hf, [
      r.duration,
      w
    ]), Xi = j.useRef(0), al = j.useRef(0), Vr = j.useRef(0), ll = j.useRef(null), [v0, b0] = O.split("-"), Zr = j.useMemo(() => R.reduce((V, _t, Ht) => Ht >= lu ? V : V + _t.height, 0), [
      R,
      lu
    ]), Kr = v1(), S0 = r.invert || h, Qi = $t === "loading";
    al.current = j.useMemo(() => lu * U + Zr, [
      lu,
      Zr
    ]), j.useEffect(() => {
      Wl.current = Qr;
    }, [
      Qr
    ]), j.useEffect(() => {
      K(true);
    }, []), j.useEffect(() => {
      const V = He.current;
      if (V) {
        const _t = V.getBoundingClientRect().height;
        return Gr(_t), T((Ht) => [
          {
            toastId: r.id,
            height: _t,
            position: r.position
          },
          ...Ht
        ]), () => T((Ht) => Ht.filter((Wt) => Wt.toastId !== r.id));
      }
    }, [
      T,
      r.id
    ]), j.useLayoutEffect(() => {
      if (!Y) return;
      const V = He.current, _t = V.style.height;
      V.style.height = "auto";
      const Ht = V.getBoundingClientRect().height;
      V.style.height = _t, Gr(Ht), T((Wt) => Wt.find((Ct) => Ct.toastId === r.id) ? Wt.map((Ct) => Ct.toastId === r.id ? {
        ...Ct,
        height: Ht
      } : Ct) : [
        {
          toastId: r.id,
          height: Ht,
          position: r.position
        },
        ...Wt
      ]);
    }, [
      Y,
      r.title,
      r.description,
      T,
      r.id,
      r.jsx,
      r.action,
      r.cancel
    ]);
    const aa = j.useCallback(() => {
      Ut(true), Gi(al.current), T((V) => V.filter((_t) => _t.toastId !== r.id)), setTimeout(() => {
        y(r);
      }, O1);
    }, [
      r,
      y,
      T,
      al
    ]);
    j.useEffect(() => {
      if (r.promise && $t === "loading" || r.duration === 1 / 0 || r.type === "loading") return;
      let V;
      return g || p || Kr ? (() => {
        if (Vr.current < Xi.current) {
          const Wt = (/* @__PURE__ */ new Date()).getTime() - Xi.current;
          Wl.current = Wl.current - Wt;
        }
        Vr.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        Wl.current !== 1 / 0 && (Xi.current = (/* @__PURE__ */ new Date()).getTime(), V = setTimeout(() => {
          r.onAutoClose == null || r.onAutoClose.call(r, r), aa();
        }, Wl.current));
      })(), () => clearTimeout(V);
    }, [
      g,
      p,
      r,
      $t,
      Kr,
      aa
    ]), j.useEffect(() => {
      r.delete && (aa(), r.onDismiss == null || r.onDismiss.call(r, r));
    }, [
      aa,
      r.delete
    ]);
    function x0() {
      var V;
      if (H == null ? void 0 : H.loading) {
        var _t;
        return j.createElement("div", {
          className: Ae(D == null ? void 0 : D.loader, r == null || (_t = r.classNames) == null ? void 0 : _t.loader, "sonner-loader"),
          "data-visible": $t === "loading"
        }, H.loading);
      }
      return j.createElement(d1, {
        className: Ae(D == null ? void 0 : D.loader, r == null || (V = r.classNames) == null ? void 0 : V.loader),
        visible: $t === "loading"
      });
    }
    const E0 = r.icon || (H == null ? void 0 : H[$t]) || o1($t);
    var kr, Jr;
    return j.createElement("li", {
      tabIndex: 0,
      ref: He,
      className: Ae(b, y0, D == null ? void 0 : D.toast, r == null || (e = r.classNames) == null ? void 0 : e.toast, D == null ? void 0 : D.default, D == null ? void 0 : D[$t], r == null || (a = r.classNames) == null ? void 0 : a[$t]),
      "data-sonner-toast": "",
      "data-rich-colors": (kr = r.richColors) != null ? kr : x,
      "data-styled": !(r.jsx || r.unstyled || d),
      "data-mounted": Y,
      "data-promise": !!r.promise,
      "data-swiped": au,
      "data-removed": I,
      "data-visible": h0,
      "data-y-position": v0,
      "data-x-position": b0,
      "data-index": f,
      "data-front": m0,
      "data-swiping": Pa,
      "data-dismissible": el,
      "data-type": $t,
      "data-invert": S0,
      "data-swipe-out": Ia,
      "data-swipe-direction": Mt,
      "data-expanded": !!(g || Q && Y),
      "data-testid": r.testId,
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": m.length - f,
        "--offset": `${I ? f0 : al.current}px`,
        "--initial-height": Q ? "auto" : `${d0}px`,
        ..._,
        ...r.style
      },
      onDragEnd: () => {
        ot(false), Z(null), ll.current = null;
      },
      onPointerDown: (V) => {
        V.button !== 2 && (Qi || !el || (Xr.current = /* @__PURE__ */ new Date(), Gi(al.current), V.target.setPointerCapture(V.pointerId), V.target.tagName !== "BUTTON" && (ot(true), ll.current = {
          x: V.clientX,
          y: V.clientY
        })));
      },
      onPointerUp: () => {
        var V, _t, Ht;
        if (Ia || !el) return;
        ll.current = null;
        const Wt = Number(((V = He.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), nu = Number(((_t = He.current) == null ? void 0 : _t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ct = (/* @__PURE__ */ new Date()).getTime() - ((Ht = Xr.current) == null ? void 0 : Ht.getTime()), se = q === "x" ? Wt : nu, uu = Math.abs(se) / Ct;
        if (Math.abs(se) >= N1 || uu > 0.11) {
          Gi(al.current), r.onDismiss == null || r.onDismiss.call(r, r), gt(q === "x" ? Wt > 0 ? "right" : "left" : nu > 0 ? "down" : "up"), aa(), eu(true);
          return;
        } else {
          var be, Se;
          (be = He.current) == null || be.style.setProperty("--swipe-amount-x", "0px"), (Se = He.current) == null || Se.style.setProperty("--swipe-amount-y", "0px");
        }
        tl(false), ot(false), Z(null);
      },
      onPointerMove: (V) => {
        var _t, Ht, Wt;
        if (!ll.current || !el || ((_t = window.getSelection()) == null ? void 0 : _t.toString().length) > 0) return;
        const Ct = V.clientY - ll.current.y, se = V.clientX - ll.current.x;
        var uu;
        const be = (uu = t.swipeDirections) != null ? uu : D1(O);
        !q && (Math.abs(se) > 1 || Math.abs(Ct) > 1) && Z(Math.abs(se) > Math.abs(Ct) ? "x" : "y");
        let Se = {
          x: 0,
          y: 0
        };
        const $r = (Oa) => 1 / (1.5 + Math.abs(Oa) / 20);
        if (q === "y") {
          if (be.includes("top") || be.includes("bottom")) if (be.includes("top") && Ct < 0 || be.includes("bottom") && Ct > 0) Se.y = Ct;
          else {
            const Oa = Ct * $r(Ct);
            Se.y = Math.abs(Oa) < Math.abs(Ct) ? Oa : Ct;
          }
        } else if (q === "x" && (be.includes("left") || be.includes("right"))) if (be.includes("left") && se < 0 || be.includes("right") && se > 0) Se.x = se;
        else {
          const Oa = se * $r(se);
          Se.x = Math.abs(Oa) < Math.abs(se) ? Oa : se;
        }
        (Math.abs(Se.x) > 0 || Math.abs(Se.y) > 0) && tl(true), (Ht = He.current) == null || Ht.style.setProperty("--swipe-amount-x", `${Se.x}px`), (Wt = He.current) == null || Wt.style.setProperty("--swipe-amount-y", `${Se.y}px`);
      }
    }, g0 && !r.jsx && $t !== "loading" ? j.createElement("button", {
      "aria-label": B,
      "data-disabled": Qi,
      "data-close-button": true,
      onClick: Qi || !el ? () => {
      } : () => {
        aa(), r.onDismiss == null || r.onDismiss.call(r, r);
      },
      className: Ae(D == null ? void 0 : D.closeButton, r == null || (l = r.classNames) == null ? void 0 : l.closeButton)
    }, (Jr = H == null ? void 0 : H.close) != null ? Jr : g1) : null, ($t || r.icon || r.promise) && r.icon !== null && ((H == null ? void 0 : H[$t]) !== null || r.icon) ? j.createElement("div", {
      "data-icon": "",
      className: Ae(D == null ? void 0 : D.icon, r == null || (n = r.classNames) == null ? void 0 : n.icon)
    }, r.promise || r.type === "loading" && !r.icon ? r.icon || x0() : null, r.type !== "loading" ? E0 : null) : null, j.createElement("div", {
      "data-content": "",
      className: Ae(D == null ? void 0 : D.content, r == null || (u = r.classNames) == null ? void 0 : u.content)
    }, j.createElement("div", {
      "data-title": "",
      className: Ae(D == null ? void 0 : D.title, r == null || (i = r.classNames) == null ? void 0 : i.title)
    }, r.jsx ? r.jsx : typeof r.title == "function" ? r.title() : r.title), r.description ? j.createElement("div", {
      "data-description": "",
      className: Ae(N, p0, D == null ? void 0 : D.description, r == null || (c = r.classNames) == null ? void 0 : c.description)
    }, typeof r.description == "function" ? r.description() : r.description) : null), j.isValidElement(r.cancel) ? r.cancel : r.cancel && Tu(r.cancel) ? j.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: r.cancelButtonStyle || S,
      onClick: (V) => {
        Tu(r.cancel) && el && (r.cancel.onClick == null || r.cancel.onClick.call(r.cancel, V), aa());
      },
      className: Ae(D == null ? void 0 : D.cancelButton, r == null || (s = r.classNames) == null ? void 0 : s.cancelButton)
    }, r.cancel.label) : null, j.isValidElement(r.action) ? r.action : r.action && Tu(r.action) ? j.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: r.actionButtonStyle || z,
      onClick: (V) => {
        Tu(r.action) && (r.action.onClick == null || r.action.onClick.call(r.action, V), !V.defaultPrevented && aa());
      },
      className: Ae(D == null ? void 0 : D.actionButton, r == null || (o = r.classNames) == null ? void 0 : o.actionButton)
    }, r.action.label) : null);
  };
  function Uf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function j1(t, e) {
    const a = {};
    return [
      t,
      e
    ].forEach((l, n) => {
      const u = n === 1, i = u ? "--mobile-offset" : "--offset", c = u ? R1 : A1;
      function s(o) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((h) => {
          a[`${i}-${h}`] = typeof o == "number" ? `${o}px` : o;
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
  const H1 = j.forwardRef(function(e, a) {
    const { id: l, invert: n, position: u = "bottom-right", hotkey: i = [
      "altKey",
      "KeyT"
    ], expand: c, closeButton: s, className: o, offset: h, mobileOffset: r, theme: d = "light", richColors: p, duration: T, style: M, visibleToasts: R = z1, toastOptions: f, dir: m = Uf(), gap: g = C1, icons: y, containerAriaLabel: x = "Notifications" } = e, [A, _] = j.useState([]), S = j.useMemo(() => l ? A.filter((Y) => Y.toasterId === l) : A.filter((Y) => !Y.toasterId), [
      A,
      l
    ]), z = j.useMemo(() => Array.from(new Set([
      u
    ].concat(S.filter((Y) => Y.position).map((Y) => Y.position)))), [
      S,
      u
    ]), [b, N] = j.useState([]), [w, O] = j.useState(false), [U, Q] = j.useState(false), [D, H] = j.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = j.useRef(null), q = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Z = j.useRef(null), Mt = j.useRef(false), gt = j.useCallback((Y) => {
      _((K) => {
        var I;
        return (I = K.find((Ut) => Ut.id === Y.id)) != null && I.delete || Zt.dismiss(Y.id), K.filter(({ id: Ut }) => Ut !== Y.id);
      });
    }, []);
    return j.useEffect(() => Zt.subscribe((Y) => {
      if (Y.dismiss) {
        requestAnimationFrame(() => {
          _((K) => K.map((I) => I.id === Y.id ? {
            ...I,
            delete: true
          } : I));
        });
        return;
      }
      setTimeout(() => {
        K0.flushSync(() => {
          _((K) => {
            const I = K.findIndex((Ut) => Ut.id === Y.id);
            return I !== -1 ? [
              ...K.slice(0, I),
              {
                ...K[I],
                ...Y
              },
              ...K.slice(I + 1)
            ] : [
              Y,
              ...K
            ];
          });
        });
      });
    }), [
      A
    ]), j.useEffect(() => {
      if (d !== "system") {
        H(d);
        return;
      }
      if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window > "u") return;
      const Y = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        Y.addEventListener("change", ({ matches: K }) => {
          H(K ? "dark" : "light");
        });
      } catch {
        Y.addListener(({ matches: I }) => {
          try {
            H(I ? "dark" : "light");
          } catch (Ut) {
            console.error(Ut);
          }
        });
      }
    }, [
      d
    ]), j.useEffect(() => {
      A.length <= 1 && O(false);
    }, [
      A
    ]), j.useEffect(() => {
      const Y = (K) => {
        var I;
        if (i.every((ot) => K[ot] || K.code === ot)) {
          var Pa;
          O(true), (Pa = B.current) == null || Pa.focus();
        }
        K.code === "Escape" && (document.activeElement === B.current || (I = B.current) != null && I.contains(document.activeElement)) && O(false);
      };
      return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
    }, [
      i
    ]), j.useEffect(() => {
      if (B.current) return () => {
        Z.current && (Z.current.focus({
          preventScroll: true
        }), Z.current = null, Mt.current = false);
      };
    }, [
      B.current
    ]), j.createElement("section", {
      ref: a,
      "aria-label": `${x} ${q}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, z.map((Y, K) => {
      var I;
      const [Ut, Pa] = Y.split("-");
      return S.length ? j.createElement("ol", {
        key: Y,
        dir: m === "auto" ? Uf() : m,
        tabIndex: -1,
        ref: B,
        className: o,
        "data-sonner-toaster": true,
        "data-sonner-theme": D,
        "data-y-position": Ut,
        "data-x-position": Pa,
        style: {
          "--front-toast-height": `${((I = b[0]) == null ? void 0 : I.height) || 0}px`,
          "--width": `${M1}px`,
          "--gap": `${g}px`,
          ...M,
          ...j1(h, r)
        },
        onBlur: (ot) => {
          Mt.current && !ot.currentTarget.contains(ot.relatedTarget) && (Mt.current = false, Z.current && (Z.current.focus({
            preventScroll: true
          }), Z.current = null));
        },
        onFocus: (ot) => {
          ot.target instanceof HTMLElement && ot.target.dataset.dismissible === "false" || Mt.current || (Mt.current = true, Z.current = ot.relatedTarget);
        },
        onMouseEnter: () => O(true),
        onMouseMove: () => O(true),
        onMouseLeave: () => {
          U || O(false);
        },
        onDragEnd: () => O(false),
        onPointerDown: (ot) => {
          ot.target instanceof HTMLElement && ot.target.dataset.dismissible === "false" || Q(true);
        },
        onPointerUp: () => Q(false)
      }, S.filter((ot) => !ot.position && K === 0 || ot.position === Y).map((ot, Ia) => {
        var eu, au;
        return j.createElement(w1, {
          key: ot.id,
          icons: y,
          index: Ia,
          toast: ot,
          defaultRichColors: p,
          duration: (eu = f == null ? void 0 : f.duration) != null ? eu : T,
          className: f == null ? void 0 : f.className,
          descriptionClassName: f == null ? void 0 : f.descriptionClassName,
          invert: n,
          visibleToasts: R,
          closeButton: (au = f == null ? void 0 : f.closeButton) != null ? au : s,
          interacting: U,
          position: Y,
          style: f == null ? void 0 : f.style,
          unstyled: f == null ? void 0 : f.unstyled,
          classNames: f == null ? void 0 : f.classNames,
          cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
          actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
          closeButtonAriaLabel: f == null ? void 0 : f.closeButtonAriaLabel,
          removeToast: gt,
          toasts: S.filter((tl) => tl.position == ot.position),
          heights: b.filter((tl) => tl.position == ot.position),
          setHeights: N,
          expandByDefault: c,
          gap: g,
          expanded: w,
          swipeDirections: e.swipeDirections
        });
      })) : null;
    }));
  });
  function s0({ to: t = "/", label: e = "Back to hub" }) {
    return E.jsx(Yi, {
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
        E.jsx(s0, {
          label: `Back to hub \u2014 ${t}`
        }),
        E.jsx("div", {
          className: "iframe-stage iframe-stage--react",
          children: e
        })
      ]
    });
  }
  const r0 = [
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
  ], Bf = [
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
            children: r0.map((t, e) => E.jsx(Yi, {
              to: t.kind === "iframe" ? `/play/${t.id}` : t.path,
              className: `hub-card ${Bf[e % Bf.length]}`,
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
  function B1() {
    const { id: t } = uv(), e = r0.find((a) => a.id === t && a.kind === "iframe");
    return !e || e.kind !== "iframe" ? E.jsx(l0, {
      to: "/",
      replace: true
    }) : E.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        E.jsx(s0, {
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
  let o0, X1, Oc, gi;
  q1 = 16;
  L1 = 2;
  Y1 = 9;
  G1 = 8;
  o0 = ({ board: t, selectedSquare: e, possibleMoves: a = [], onSquareClick: l, sideImagesWidth: n = 0, isSidebarOpen: u = true, forcedCapture: i = false, mandatoryPieceSquares: c = [], singleLegalMoveHighlight: s = false, comboContinuePiece: o = null }) => {
    const [h, r] = v.useState(64), d = () => {
      if (typeof window < "u") {
        const S = window.innerHeight * 0.98, z = u ? 384 : 0, b = n || 0, N = (window.innerWidth - z - b) * 0.98, w = Math.min(S, N);
        return Math.floor(w / 8);
      }
      return 64;
    };
    v.useEffect(() => {
      const S = () => {
        r(d());
      };
      return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
    }, [
      u,
      n
    ]);
    const p = (S) => {
      if (!S) return {};
      const z = {
        pawn: 0,
        knight: 1,
        queen: 2,
        king: 3,
        bishop: 4,
        rook: 5
      }, b = q1, N = b * L1, w = b * Y1, O = h / b, Q = (S.color === "white" ? 0 : 1) * b, H = (S.type === "rook" && S.isKing ? G1 : z[S.type]) * b;
      return {
        backgroundImage: "url(/games/chess/chess-cat.png)",
        backgroundPosition: `${-Q * O}px ${-H * O}px`,
        backgroundSize: `${N * O}px ${w * O}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%"
      };
    }, T = (S, z) => e && e.row === S && e.col === z, M = (S, z) => a.some((b) => b.row === S && b.col === z), R = (S, z) => a.find((b) => b.row === S && b.col === z), f = (S, z) => c.some((b) => b.row === S && b.col === z), m = (S, z) => o && o.row === S && o.col === z, g = (S, z) => {
      const b = (S + z) % 2 === 0, N = t[S][z], w = M(S, z), O = T(S, z), U = R(S, z), Q = w && (U == null ? void 0 : U.isCapture) === true, D = f(S, z);
      let H = "flex items-center justify-center cursor-pointer relative ";
      return b ? H += "bg-gray-300 " : H += "bg-gray-800 ", O ? m(S, z) ? H += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : H += "ring-4 ring-blue-500 ring-inset " : w ? s && a.length === 1 ? H += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : i && Q ? H += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : H += "ring-2 ring-green-400 ring-inset " : D && N && !O && (H += "ring-2 ring-orange-400 ring-inset "), H;
    }, y = () => ({
      width: `${h}px`,
      height: `${h}px`
    }), x = (S, z) => {
      const b = t[S][z], N = M(S, z), w = R(S, z), O = N && (w == null ? void 0 : w.isCapture) === true, U = s && a.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : i && O ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", Q = i && O ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
      return E.jsxs("div", {
        className: g(S, z),
        style: y(),
        onClick: () => l(S, z),
        children: [
          b && E.jsx("div", {
            className: "absolute inset-0 z-10 select-none pointer-events-none",
            style: p(b)
          }),
          N && !b && E.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center z-[5]",
            children: E.jsx("div", {
              className: U
            })
          }),
          N && b && E.jsx("div", {
            className: `absolute inset-0 rounded pointer-events-none z-[5] ${Q}`
          })
        ]
      }, `${S}-${z}`);
    }, A = (S) => {
      const z = [];
      for (let b = 0; b < 8; b++) z.push(x(S, b));
      return E.jsx("div", {
        className: "flex",
        children: z
      }, S);
    }, _ = () => {
      const S = [];
      for (let z = 0; z < 8; z++) S.push(A(z));
      return S;
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
          children: _()
        })
      })
    });
  };
  X1 = () => {
    const [t, e] = v.useState({
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
    }), [a, l] = v.useState(false), n = 360, i = n * 2 + 24 * 2;
    function c() {
      const y = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let A = 0; A < 8; A++) y[1][A] = {
        type: "pawn",
        color: "black"
      }, y[6][A] = {
        type: "pawn",
        color: "white"
      };
      const x = [
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
        type: x[A],
        color: "black"
      }, y[7][A] = {
        type: x[A],
        color: "white"
      };
      return y;
    }
    const s = (y, x) => {
      const A = t.board[y][x], _ = t.selectedSquare ? t.board[t.selectedSquare.row][t.selectedSquare.col] : null;
      if (!(!t.selectedSquare && !A)) {
        if (A && A.color === t.currentPlayer) {
          const S = o(y, x, t.board);
          e((z) => ({
            ...z,
            selectedSquare: {
              row: y,
              col: x
            },
            possibleMoves: S
          }));
          return;
        }
        if (t.selectedSquare && t.possibleMoves.some((S) => S.row === y && S.col === x)) {
          const S = t.board.map((U) => [
            ...U
          ]), z = S[y][x];
          if (S[y][x] = _, S[t.selectedSquare.row][t.selectedSquare.col] = null, _.type === "pawn" && (_.color === "white" && y === 0 || _.color === "black" && y === 7)) {
            e((U) => ({
              ...U,
              board: S,
              selectedSquare: null,
              possibleMoves: [],
              pendingPromotion: {
                row: y,
                col: x,
                color: _.color
              }
            }));
            return;
          }
          const b = {
            ...t.capturedPieces
          };
          z && b[z.color].push(z);
          const N = R(t.currentPlayer === "white" ? "black" : "white", S), w = f(t.currentPlayer === "white" ? "black" : "white", S);
          let O = "playing";
          N ? w ? O = "check" : O = "checkmate" : w || (O = "stalemate"), e((U) => ({
            ...U,
            board: S,
            currentPlayer: U.currentPlayer === "white" ? "black" : "white",
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: O,
            capturedPieces: b,
            moveHistory: [
              ...U.moveHistory,
              {
                from: U.selectedSquare,
                to: {
                  row: y,
                  col: x
                },
                piece: _,
                captured: z
              }
            ]
          }));
          return;
        }
        e((S) => ({
          ...S,
          selectedSquare: null,
          possibleMoves: []
        }));
      }
    }, o = (y, x, A) => {
      const _ = A[y][x];
      if (!_) return [];
      const S = [];
      switch (_.type) {
        case "pawn":
          S.push(...h(y, x, _.color, A));
          break;
        case "rook":
          S.push(...r(y, x, _.color, A));
          break;
        case "knight":
          S.push(...d(y, x, _.color, A));
          break;
        case "bishop":
          S.push(...p(y, x, _.color, A));
          break;
        case "queen":
          S.push(...T(y, x, _.color, A));
          break;
        case "king":
          S.push(...M(y, x, _.color, A));
          break;
      }
      return S;
    }, h = (y, x, A, _) => {
      const S = [], z = A === "white" ? -1 : 1, b = A === "white" ? 6 : 1;
      y + z >= 0 && y + z < 8 && !_[y + z][x] && (S.push({
        row: y + z,
        col: x
      }), y === b && !_[y + 2 * z][x] && S.push({
        row: y + 2 * z,
        col: x
      }));
      for (const N of [
        -1,
        1
      ]) {
        const w = x + N;
        if (w >= 0 && w < 8 && y + z >= 0 && y + z < 8) {
          const O = _[y + z][w];
          O && O.color !== A && S.push({
            row: y + z,
            col: w
          });
        }
      }
      return S;
    }, r = (y, x, A, _) => {
      const S = [], z = [
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
      for (const [b, N] of z) for (let w = 1; w < 8; w++) {
        const O = y + b * w, U = x + N * w;
        if (O < 0 || O >= 8 || U < 0 || U >= 8) break;
        const Q = _[O][U];
        if (!Q) S.push({
          row: O,
          col: U
        });
        else {
          Q.color !== A && S.push({
            row: O,
            col: U
          });
          break;
        }
      }
      return S;
    }, d = (y, x, A, _) => {
      const S = [], z = [
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
      for (const [b, N] of z) {
        const w = y + b, O = x + N;
        if (w >= 0 && w < 8 && O >= 0 && O < 8) {
          const U = _[w][O];
          (!U || U.color !== A) && S.push({
            row: w,
            col: O
          });
        }
      }
      return S;
    }, p = (y, x, A, _) => {
      const S = [], z = [
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
      for (const [b, N] of z) for (let w = 1; w < 8; w++) {
        const O = y + b * w, U = x + N * w;
        if (O < 0 || O >= 8 || U < 0 || U >= 8) break;
        const Q = _[O][U];
        if (!Q) S.push({
          row: O,
          col: U
        });
        else {
          Q.color !== A && S.push({
            row: O,
            col: U
          });
          break;
        }
      }
      return S;
    }, T = (y, x, A, _) => [
      ...r(y, x, A, _),
      ...p(y, x, A, _)
    ], M = (y, x, A, _) => {
      const S = [], z = [
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
      for (const [b, N] of z) {
        const w = y + b, O = x + N;
        if (w >= 0 && w < 8 && O >= 0 && O < 8) {
          const U = _[w][O];
          (!U || U.color !== A) && S.push({
            row: w,
            col: O
          });
        }
      }
      return S;
    }, R = (y, x) => {
      let A, _;
      for (let z = 0; z < 8; z++) for (let b = 0; b < 8; b++) {
        const N = x[z][b];
        if (N && N.type === "king" && N.color === y) {
          A = z, _ = b;
          break;
        }
      }
      const S = y === "white" ? "black" : "white";
      for (let z = 0; z < 8; z++) for (let b = 0; b < 8; b++) {
        const N = x[z][b];
        if (N && N.color === S && o(z, b, x).some((O) => O.row === A && O.col === _)) return true;
      }
      return false;
    }, f = (y, x) => {
      for (let A = 0; A < 8; A++) for (let _ = 0; _ < 8; _++) {
        const S = x[A][_];
        if (S && S.color === y && o(A, _, x).length > 0) return true;
      }
      return false;
    }, m = (y) => {
      if (!t.pendingPromotion) return;
      const { row: x, col: A, color: _ } = t.pendingPromotion, S = t.board.map((w) => [
        ...w
      ]);
      S[x][A] = {
        type: y,
        color: _
      };
      const z = R(_ === "white" ? "black" : "white", S), b = f(_ === "white" ? "black" : "white", S);
      let N = "playing";
      z ? b ? N = "check" : N = "checkmate" : b || (N = "stalemate"), e((w) => ({
        ...w,
        board: S,
        currentPlayer: w.currentPlayer === "white" ? "black" : "white",
        gameStatus: N,
        pendingPromotion: null,
        moveHistory: [
          ...w.moveHistory,
          {
            from: w.selectedSquare,
            to: {
              row: x,
              col: A
            },
            piece: {
              type: y,
              color: _
            },
            captured: null,
            promotion: true
          }
        ]
      }));
    }, g = () => {
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
          height: 144
        }),
        E.jsx("button", {
          onClick: () => l((y) => !y),
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
        E.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            E.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                E.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "black" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${a ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                }),
                E.jsx("div", {
                  children: E.jsx(o0, {
                    board: t.board,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: s,
                    sideImagesWidth: i,
                    isSidebarOpen: a
                  })
                }),
                E.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "White player",
                  className: `object-cover object-center border-4 ${t.currentPlayer === "white" ? "border-yellow-400" : "border-gray-700"}`,
                  style: {
                    height: `calc(100vh${a ? "" : " - 10px"})`,
                    width: n,
                    boxShadow: "0 0 0 2px #000, inset 0 0 0 1px #000"
                  }
                })
              ]
            }),
            a && E.jsxs("div", {
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
                      onClick: g,
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
                                t.capturedPieces.white.map((y, x) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Oc(y)
                                }, x)),
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
                                t.capturedPieces.black.map((y, x) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Oc(y)
                                }, x)),
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
                            t.moveHistory.slice(-12).map((y, x) => E.jsxs("div", {
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
                            }, x)),
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
                  onClick: () => m(y),
                  className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors",
                  style: {
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000"
                  },
                  children: Oc({
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
  };
  Oc = (t) => ({
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
  })[t.type][t.color];
  gi = 8;
  Q1 = function(t, e, a) {
    let l = 0;
    for (let n = 0; n < gi; n++) for (let u = 0; u < gi; u++) {
      const i = t[n][u];
      i && e(i, n, u) && (l += a(n, u, t).length);
    }
    return l;
  };
  V1 = function(t, e, a, l) {
    if (!e) return [];
    const n = [];
    for (let u = 0; u < gi; u++) for (let i = 0; i < gi; i++) {
      const c = t[u][i];
      c && a(c, u, i) && l(u, i, t).length > 0 && n.push({
        row: u,
        col: i
      });
    }
    return n;
  };
  const Z1 = () => {
    const [t, e] = v.useState({
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
    }), [a, l] = v.useState(false), n = 360, i = n * 2 + 24 * 2, c = (b) => ({
      height: `calc(100vh${a ? "" : " - 10px"})`,
      width: n,
      filter: b ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: b ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000"
    });
    function s() {
      const b = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let N = 0; N < 3; N++) for (let w = 0; w < 8; w++) (N + w) % 2 === 1 && (b[N][w] = {
        type: "checker",
        color: "red",
        isKing: false
      });
      for (let N = 5; N < 8; N++) for (let w = 0; w < 8; w++) (N + w) % 2 === 1 && (b[N][w] = {
        type: "checker",
        color: "black",
        isKing: false
      });
      return b;
    }
    const o = (b, N) => {
      const w = t.board[b][N];
      if (t.captureSequence.length > 0 && !t.selectedSquare) {
        const O = t.captureSequence[t.captureSequence.length - 1];
        if (O.to.row !== b || O.to.col !== N) return;
      }
      if (!t.selectedSquare && (!w || w.color === t.currentPlayer)) {
        if (w && w.color === t.currentPlayer) {
          const O = d(b, N, t.board);
          e((U) => ({
            ...U,
            selectedSquare: {
              row: b,
              col: N
            },
            possibleMoves: O
          }));
        }
        return;
      }
      if (t.selectedSquare && t.possibleMoves.some((O) => O.row === b && O.col === N)) {
        const O = t.board.map((D) => [
          ...D
        ]), U = O[t.selectedSquare.row][t.selectedSquare.col];
        if (Math.abs(b - t.selectedSquare.row) === 2) {
          const D = (t.selectedSquare.row + b) / 2, H = (t.selectedSquare.col + N) / 2, B = O[D][H];
          O[D][H] = null;
          const q = {
            ...t.capturedPieces
          };
          q[B.color]++, O[b][N] = U, O[t.selectedSquare.row][t.selectedSquare.col] = null, (U.color === "red" && b === 7 || U.color === "black" && b === 0) && !U.isKing && (O[b][N] = {
            ...U,
            isKing: true
          });
          const Mt = h(b, N, O);
          if (Mt.length > 0 && !t.captureSequence.length) {
            const gt = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: b,
                  col: N
                },
                captured: B
              }
            ];
            e((Y) => ({
              ...Y,
              board: O,
              selectedSquare: {
                row: b,
                col: N
              },
              possibleMoves: Mt,
              capturedPieces: q,
              captureSequence: gt
            }));
            return;
          } else if (t.captureSequence.length > 0) {
            const gt = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: b,
                  col: N
                },
                captured: B
              }
            ], Y = h(b, N, O);
            if (Y.length > 0) {
              e((K) => ({
                ...K,
                board: O,
                selectedSquare: {
                  row: b,
                  col: N
                },
                possibleMoves: Y,
                capturedPieces: q,
                captureSequence: gt
              }));
              return;
            } else {
              const K = t.currentPlayer === "red" ? "black" : "red", I = p(O, K);
              e((Ut) => ({
                ...Ut,
                board: O,
                currentPlayer: K,
                selectedSquare: null,
                possibleMoves: [],
                gameStatus: I,
                capturedPieces: q,
                captureSequence: [],
                moveHistory: [
                  ...Ut.moveHistory,
                  {
                    piece: U,
                    moves: gt
                  }
                ]
              }));
              return;
            }
          } else {
            const gt = t.currentPlayer === "red" ? "black" : "red", Y = p(O, gt);
            e((K) => ({
              ...K,
              board: O,
              currentPlayer: gt,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus: Y,
              capturedPieces: q,
              captureSequence: [],
              moveHistory: [
                ...K.moveHistory,
                {
                  piece: U,
                  moves: [
                    {
                      from: t.selectedSquare,
                      to: {
                        row: b,
                        col: N
                      },
                      captured: B
                    }
                  ]
                }
              ]
            }));
            return;
          }
        } else {
          O[b][N] = U, O[t.selectedSquare.row][t.selectedSquare.col] = null, (U.color === "red" && b === 7 || U.color === "black" && b === 0) && !U.isKing && (O[b][N] = {
            ...U,
            isKing: true
          });
          const H = t.currentPlayer === "red" ? "black" : "red", B = p(O, H);
          e((q) => ({
            ...q,
            board: O,
            currentPlayer: H,
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: B,
            captureSequence: [],
            moveHistory: [
              ...q.moveHistory,
              {
                piece: U,
                moves: [
                  {
                    from: q.selectedSquare,
                    to: {
                      row: b,
                      col: N
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
      e((O) => ({
        ...O,
        selectedSquare: null,
        possibleMoves: []
      }));
    }, h = (b, N, w) => {
      const O = w[b][N];
      if (!O || O.type !== "checker") return [];
      const U = [], Q = O.isKing ? [
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
      for (const [D, H] of Q) {
        const B = b + 2 * D, q = N + 2 * H, Z = b + D, Mt = N + H;
        if (B >= 0 && B < 8 && q >= 0 && q < 8 && !w[B][q]) {
          const gt = w[Z][Mt];
          gt && gt.color !== O.color && U.push({
            row: B,
            col: q,
            isCapture: true
          });
        }
      }
      return U;
    }, r = (b, N) => {
      for (let w = 0; w < 8; w++) for (let O = 0; O < 8; O++) {
        const U = b[w][O];
        if (U && U.color === N && h(w, O, b).length > 0) return true;
      }
      return false;
    }, d = (b, N, w) => {
      const O = w[b][N];
      if (!O || O.type !== "checker") return [];
      const U = h(b, N, w);
      if (r(w, O.color) || U.length > 0) return U;
      const Q = [], D = O.isKing ? [
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
      for (const [H, B] of D) {
        const q = b + H, Z = N + B;
        q >= 0 && q < 8 && Z >= 0 && Z < 8 && !w[q][Z] && Q.push({
          row: q,
          col: Z
        });
      }
      return Q;
    }, p = (b, N) => {
      let w = false, O = false;
      for (let U = 0; U < 8; U++) {
        for (let Q = 0; Q < 8; Q++) {
          const D = b[U][Q];
          if (D && D.color === N && (w = true, d(U, Q, b).length > 0)) {
            O = true;
            break;
          }
        }
        if (O) break;
      }
      return !w || !O ? N === "red" ? "black_wins" : "red_wins" : "playing";
    }, T = () => {
      e({
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
    }, R = ((b) => b.map((N) => N.map((w) => w ? {
      type: "rook",
      color: w.color === "red" ? "white" : "black",
      isKing: w.isKing
    } : null)))(t.board), f = t.gameStatus === "playing" && t.captureSequence.length > 0, m = f && t.captureSequence[t.captureSequence.length - 1].to, g = t.gameStatus === "playing" && t.captureSequence.length === 0, y = t.board, x = t.currentPlayer, A = f || g && r(y, x), _ = f && m ? [
      {
        row: m.row,
        col: m.col
      }
    ] : g ? V1(y, r(y, x), (b, N, w) => b && b.color === x, h) : [], S = g ? Q1(y, (b, N, w) => b && b.color === x, d) : 0;
    let z = false;
    return t.gameStatus === "playing" && (t.captureSequence.length > 0 ? z = t.possibleMoves.length === 1 : z = S === 1), E.jsxs("div", {
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
          height: 144
        }),
        E.jsx("button", {
          onClick: () => l((b) => !b),
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
        E.jsxs("div", {
          className: "flex flex-1 overflow-hidden",
          children: [
            E.jsxs("div", {
              className: "flex-1 flex items-center justify-center py-0 px-2 overflow-visible gap-6",
              style: {
                height: "100vh",
                paddingTop: a ? 0 : 5,
                paddingBottom: a ? 0 : 5
              },
              children: [
                E.jsx("img", {
                  src: "/games/chess/dark-cat.jpg",
                  alt: "Black player",
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${t.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(t.currentPlayer === "black")
                }),
                E.jsx("div", {
                  children: E.jsx(o0, {
                    board: R,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: a,
                    forcedCapture: A,
                    mandatoryPieceSquares: _,
                    singleLegalMoveHighlight: z,
                    comboContinuePiece: f ? m : null
                  })
                }),
                E.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "Red player",
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${t.currentPlayer === "red" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(t.currentPlayer === "red")
                })
              ]
            }),
            a && E.jsxs("div", {
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
                                }, (b, N) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u2656"
                                }, N)),
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
                                }, (b, N) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u265C"
                                }, N)),
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
                            t.moveHistory.slice(-12).map((b, N) => E.jsxs("div", {
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
                                b.moves.map((w, O) => `${String.fromCharCode(97 + w.from.col)}${8 - w.from.row}\u2192${String.fromCharCode(97 + w.to.col)}${8 - w.to.row}${w.captured ? "x" : ""}`).join(", ")
                              ]
                            }, N)),
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
  }, K1 = v.lazy(() => Na(() => import("./page-BXwmw0Pc.js").then(async (m) => {
    await m.__tla;
    return m;
  }), [])), k1 = v.lazy(() => Na(() => import("./SnakeSinglePlayerPage--GeHxuKL.js"), __vite__mapDeps([0,1,2,3,4,5])).then((t) => ({
    default: t.default
  }))), J1 = v.lazy(() => Na(() => import("./TypingPage-BgmGI9g9.js"), __vite__mapDeps([6,1]))), $1 = v.lazy(() => Na(() => import("./page-B6FKxKlk.js"), __vite__mapDeps([7,1,2,3,4,5,8,9,10,11]))), W1 = v.lazy(() => Na(() => import("./page-DTAT5ZTH.js"), __vite__mapDeps([12,1,4,5,13,3,11,14]))), F1 = v.lazy(() => Na(() => import("./page-BKGdZ1ko.js"), __vite__mapDeps([15,16,8,5,13]))), P1 = v.lazy(() => Na(() => import("./page-0DwRZQm3.js"), __vite__mapDeps([17,16,8,5,9,13]))), I1 = v.lazy(() => Na(() => import("./page-t32EER74.js"), __vite__mapDeps([18,1,10,3,5,13,14,11])));
  function tb() {
    return E.jsxs(l1, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      children: [
        E.jsx(Vv, {
          basename: "/",
          children: E.jsx(v.Suspense, {
            fallback: null,
            children: E.jsxs(Sv, {
              children: [
                E.jsx(Xt, {
                  path: "/",
                  element: E.jsx(U1, {})
                }),
                E.jsx(Xt, {
                  path: "/play/:id",
                  element: E.jsx(B1, {})
                }),
                E.jsx(Xt, {
                  path: "/motherload",
                  element: E.jsx(un, {
                    title: "Motherload",
                    children: E.jsx(v.Suspense, {
                      fallback: E.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: E.jsx(K1, {})
                    })
                  })
                }),
                E.jsx(Xt, {
                  path: "/chess",
                  element: E.jsx(un, {
                    title: "Chess",
                    children: E.jsx(X1, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/checkers",
                  element: E.jsx(un, {
                    title: "Checkers",
                    children: E.jsx(Z1, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/snake",
                  element: E.jsx(un, {
                    title: "Snake",
                    children: E.jsx(k1, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/typing",
                  element: E.jsx(un, {
                    title: "Typing",
                    children: E.jsx(J1, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/multiplayer",
                  element: E.jsx($1, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/snake",
                  element: E.jsx(W1, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/chess",
                  element: E.jsx(F1, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/checkers",
                  element: E.jsx(P1, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/fighter",
                  element: E.jsx(I1, {})
                }),
                E.jsx(Xt, {
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
        E.jsx(H1, {
          richColors: true,
          position: "top-center"
        })
      ]
    });
  }
  Sg.createRoot(document.getElementById("root")).render(E.jsx(v.StrictMode, {
    children: E.jsx(tb, {})
  }));
})();
export {
  G1 as C,
  j as R,
  L1 as S,
  Na as _,
  __tla,
  td as a,
  ab as b,
  K0 as c,
  uv as d,
  Q1 as e,
  Y1 as f,
  V1 as g,
  q1 as h,
  E as j,
  v as r,
  nb as t,
  Ih as u,
  lb as z
};
