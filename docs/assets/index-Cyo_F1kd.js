const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SnakeSinglePlayerPage-B3bk5GW6.js","assets/button-DEm5cEaQ.js","assets/play-DgzCMp61.js","assets/grid-3x3-CyhlQYng.js","assets/snake-game-multiplayer-COxn6obF.js","assets/gin-DHzzR3IR.js","assets/TypingPage-e6cBSfQ7.js","assets/page-CVXPpEuL.js","assets/chess-game-multiplayer-DB5exR2Z.js","assets/checkers-game-multiplayer-CFO-YGq1.js","assets/fighter-game-multiplayer-CSJI2MQX.js","assets/users-BVSUSNhu.js","assets/page-C5KCGQxk.js","assets/player-utils-sDKa8flh.js","assets/wifi-Cpkg8YYW.js","assets/page-BN26O1Ua.js","assets/ChessBoardMultiplayer-Dg9aZ6Hn.js","assets/page-DYMXoWE4.js","assets/page-Cip4vD9G.js"])))=>i.map(i=>d[i]);
let $1, H, K1, Nl, id, mb, ty, mv, tb, J1, eb, k1, E, b, yb, u0, hb;
let __tla = (async () => {
  function N0(t, e) {
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
  function Vf(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Zf = {
    exports: {}
  }, Si = {};
  var O0 = Symbol.for("react.transitional.element"), D0 = Symbol.for("react.fragment");
  function kf(t, e, l) {
    var a = null;
    if (l !== void 0 && (a = "" + l), e.key !== void 0 && (a = "" + e.key), "key" in e) {
      l = {};
      for (var n in e) n !== "key" && (l[n] = e[n]);
    } else l = e;
    return e = l.ref, {
      $$typeof: O0,
      type: t,
      key: a,
      ref: e !== void 0 ? e : null,
      props: l
    };
  }
  Si.Fragment = D0;
  Si.jsx = kf;
  Si.jsxs = kf;
  Zf.exports = Si;
  let Kf, X;
  E = Zf.exports;
  Kf = {
    exports: {}
  };
  X = {};
  var Ds = Symbol.for("react.transitional.element"), j0 = Symbol.for("react.portal"), H0 = Symbol.for("react.fragment"), U0 = Symbol.for("react.strict_mode"), B0 = Symbol.for("react.profiler"), q0 = Symbol.for("react.consumer"), L0 = Symbol.for("react.context"), Y0 = Symbol.for("react.forward_ref"), G0 = Symbol.for("react.suspense"), X0 = Symbol.for("react.memo"), Jf = Symbol.for("react.lazy"), Q0 = Symbol.for("react.activity"), Pr = Symbol.iterator;
  function V0(t) {
    return t === null || typeof t != "object" ? null : (t = Pr && t[Pr] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var $f = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Wf = Object.assign, Ff = {};
  function Ga(t, e, l) {
    this.props = t, this.context = e, this.refs = Ff, this.updater = l || $f;
  }
  Ga.prototype.isReactComponent = {};
  Ga.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  Ga.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Pf() {
  }
  Pf.prototype = Ga.prototype;
  function js(t, e, l) {
    this.props = t, this.context = e, this.refs = Ff, this.updater = l || $f;
  }
  var Hs = js.prototype = new Pf();
  Hs.constructor = js;
  Wf(Hs, Ga.prototype);
  Hs.isPureReactComponent = true;
  var Ir = Array.isArray;
  function jc() {
  }
  var st = {
    H: null,
    A: null,
    T: null,
    S: null
  }, If = Object.prototype.hasOwnProperty;
  function Us(t, e, l) {
    var a = l.ref;
    return {
      $$typeof: Ds,
      type: t,
      key: e,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  function Z0(t, e) {
    return Us(t.type, e, t.props);
  }
  function Bs(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ds;
  }
  function k0(t) {
    var e = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(l) {
      return e[l];
    });
  }
  var to = /\/+/g;
  function ki(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? k0("" + t.key) : e.toString(36);
  }
  function K0(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(jc, jc) : (t.status = "pending", t.then(function(e) {
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
  function sa(t, e, l, a, n) {
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
          case Ds:
          case j0:
            i = true;
            break;
          case Jf:
            return i = t._init, sa(i(t._payload), e, l, a, n);
        }
    }
    if (i) return n = n(t), i = a === "" ? "." + ki(t, 0) : a, Ir(n) ? (l = "", i != null && (l = i.replace(to, "$&/") + "/"), sa(n, e, l, "", function(o) {
      return o;
    })) : n != null && (Bs(n) && (n = Z0(n, l + (n.key == null || t && t.key === n.key ? "" : ("" + n.key).replace(to, "$&/") + "/") + i)), e.push(n)), 1;
    i = 0;
    var c = a === "" ? "." : a + ":";
    if (Ir(t)) for (var s = 0; s < t.length; s++) a = t[s], u = c + ki(a, s), i += sa(a, e, l, u, n);
    else if (s = V0(t), typeof s == "function") for (t = s.call(t), s = 0; !(a = t.next()).done; ) a = a.value, u = c + ki(a, s++), i += sa(a, e, l, u, n);
    else if (u === "object") {
      if (typeof t.then == "function") return sa(K0(t), e, l, a, n);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return i;
  }
  function su(t, e, l) {
    if (t == null) return t;
    var a = [], n = 0;
    return sa(t, a, "", "", function(u) {
      return e.call(l, u, n++);
    }), a;
  }
  function J0(t) {
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
  var eo = typeof reportError == "function" ? reportError : function(t) {
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
  }, $0 = {
    map: su,
    forEach: function(t, e, l) {
      su(t, function() {
        e.apply(this, arguments);
      }, l);
    },
    count: function(t) {
      var e = 0;
      return su(t, function() {
        e++;
      }), e;
    },
    toArray: function(t) {
      return su(t, function(e) {
        return e;
      }) || [];
    },
    only: function(t) {
      if (!Bs(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    }
  };
  X.Activity = Q0;
  X.Children = $0;
  X.Component = Ga;
  X.Fragment = H0;
  X.Profiler = B0;
  X.PureComponent = js;
  X.StrictMode = U0;
  X.Suspense = G0;
  X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = st;
  X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return st.H.useMemoCache(t);
    }
  };
  X.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  };
  X.cacheSignal = function() {
    return null;
  };
  X.cloneElement = function(t, e, l) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var a = Wf({}, t.props), n = t.key;
    if (e != null) for (u in e.key !== void 0 && (n = "" + e.key), e) !If.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (a[u] = e[u]);
    var u = arguments.length - 2;
    if (u === 1) a.children = l;
    else if (1 < u) {
      for (var i = Array(u), c = 0; c < u; c++) i[c] = arguments[c + 2];
      a.children = i;
    }
    return Us(t.type, n, a);
  };
  X.createContext = function(t) {
    return t = {
      $$typeof: L0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: q0,
      _context: t
    }, t;
  };
  X.createElement = function(t, e, l) {
    var a, n = {}, u = null;
    if (e != null) for (a in e.key !== void 0 && (u = "" + e.key), e) If.call(e, a) && a !== "key" && a !== "__self" && a !== "__source" && (n[a] = e[a]);
    var i = arguments.length - 2;
    if (i === 1) n.children = l;
    else if (1 < i) {
      for (var c = Array(i), s = 0; s < i; s++) c[s] = arguments[s + 2];
      n.children = c;
    }
    if (t && t.defaultProps) for (a in i = t.defaultProps, i) n[a] === void 0 && (n[a] = i[a]);
    return Us(t, u, n);
  };
  X.createRef = function() {
    return {
      current: null
    };
  };
  X.forwardRef = function(t) {
    return {
      $$typeof: Y0,
      render: t
    };
  };
  X.isValidElement = Bs;
  X.lazy = function(t) {
    return {
      $$typeof: Jf,
      _payload: {
        _status: -1,
        _result: t
      },
      _init: J0
    };
  };
  X.memo = function(t, e) {
    return {
      $$typeof: X0,
      type: t,
      compare: e === void 0 ? null : e
    };
  };
  X.startTransition = function(t) {
    var e = st.T, l = {};
    st.T = l;
    try {
      var a = t(), n = st.S;
      n !== null && n(l, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(jc, eo);
    } catch (u) {
      eo(u);
    } finally {
      e !== null && l.types !== null && (e.types = l.types), st.T = e;
    }
  };
  X.unstable_useCacheRefresh = function() {
    return st.H.useCacheRefresh();
  };
  X.use = function(t) {
    return st.H.use(t);
  };
  X.useActionState = function(t, e, l) {
    return st.H.useActionState(t, e, l);
  };
  X.useCallback = function(t, e) {
    return st.H.useCallback(t, e);
  };
  X.useContext = function(t) {
    return st.H.useContext(t);
  };
  X.useDebugValue = function() {
  };
  X.useDeferredValue = function(t, e) {
    return st.H.useDeferredValue(t, e);
  };
  X.useEffect = function(t, e) {
    return st.H.useEffect(t, e);
  };
  X.useEffectEvent = function(t) {
    return st.H.useEffectEvent(t);
  };
  X.useId = function() {
    return st.H.useId();
  };
  X.useImperativeHandle = function(t, e, l) {
    return st.H.useImperativeHandle(t, e, l);
  };
  X.useInsertionEffect = function(t, e) {
    return st.H.useInsertionEffect(t, e);
  };
  X.useLayoutEffect = function(t, e) {
    return st.H.useLayoutEffect(t, e);
  };
  X.useMemo = function(t, e) {
    return st.H.useMemo(t, e);
  };
  X.useOptimistic = function(t, e) {
    return st.H.useOptimistic(t, e);
  };
  X.useReducer = function(t, e, l) {
    return st.H.useReducer(t, e, l);
  };
  X.useRef = function(t) {
    return st.H.useRef(t);
  };
  X.useState = function(t) {
    return st.H.useState(t);
  };
  X.useSyncExternalStore = function(t, e, l) {
    return st.H.useSyncExternalStore(t, e, l);
  };
  X.useTransition = function() {
    return st.H.useTransition();
  };
  X.version = "19.2.5";
  Kf.exports = X;
  b = Kf.exports;
  H = Vf(b);
  mb = N0({
    __proto__: null,
    default: H
  }, [
    b
  ]);
  var td = {
    exports: {}
  }, xi = {}, ed = {
    exports: {}
  }, ld = {};
  (function(t) {
    function e(z, j) {
      var q = z.length;
      z.push(j);
      t: for (; 0 < q; ) {
        var L = q - 1 >>> 1, Z = z[L];
        if (0 < n(Z, j)) z[L] = j, z[q] = Z, q = L;
        else break t;
      }
    }
    function l(z) {
      return z.length === 0 ? null : z[0];
    }
    function a(z) {
      if (z.length === 0) return null;
      var j = z[0], q = z.pop();
      if (q !== j) {
        z[0] = q;
        t: for (var L = 0, Z = z.length, Mt = Z >>> 1; L < Mt; ) {
          var gt = 2 * (L + 1) - 1, G = z[gt], k = gt + 1, I = z[k];
          if (0 > n(G, q)) k < Z && 0 > n(I, G) ? (z[L] = I, z[k] = q, L = k) : (z[L] = G, z[gt] = q, L = gt);
          else if (k < Z && 0 > n(I, q)) z[L] = I, z[k] = q, L = k;
          else break t;
        }
      }
      return j;
    }
    function n(z, j) {
      var q = z.sortIndex - j.sortIndex;
      return q !== 0 ? q : z.id - j.id;
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
    var s = [], o = [], h = 1, r = null, d = 3, y = false, _ = false, M = false, R = false, f = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
    function x(z) {
      for (var j = l(o); j !== null; ) {
        if (j.callback === null) a(o);
        else if (j.startTime <= z) a(o), j.sortIndex = j.expirationTime, e(s, j);
        else break;
        j = l(o);
      }
    }
    function D(z) {
      if (M = false, x(z), !_) if (l(s) !== null) _ = true, S || (S = true, N());
      else {
        var j = l(o);
        j !== null && B(D, j.startTime - z);
      }
    }
    var S = false, T = -1, C = 5, A = -1;
    function g() {
      return R ? true : !(t.unstable_now() - A < C);
    }
    function v() {
      if (R = false, S) {
        var z = t.unstable_now();
        A = z;
        var j = true;
        try {
          t: {
            _ = false, M && (M = false, m(T), T = -1), y = true;
            var q = d;
            try {
              e: {
                for (x(z), r = l(s); r !== null && !(r.expirationTime > z && g()); ) {
                  var L = r.callback;
                  if (typeof L == "function") {
                    r.callback = null, d = r.priorityLevel;
                    var Z = L(r.expirationTime <= z);
                    if (z = t.unstable_now(), typeof Z == "function") {
                      r.callback = Z, x(z), j = true;
                      break e;
                    }
                    r === l(s) && a(s), x(z);
                  } else a(s);
                  r = l(s);
                }
                if (r !== null) j = true;
                else {
                  var Mt = l(o);
                  Mt !== null && B(D, Mt.startTime - z), j = false;
                }
              }
              break t;
            } finally {
              r = null, d = q, y = false;
            }
            j = void 0;
          }
        } finally {
          j ? N() : S = false;
        }
      }
    }
    var N;
    if (typeof p == "function") N = function() {
      p(v);
    };
    else if (typeof MessageChannel < "u") {
      var O = new MessageChannel(), U = O.port2;
      O.port1.onmessage = v, N = function() {
        U.postMessage(null);
      };
    } else N = function() {
      f(v, 0);
    };
    function B(z, j) {
      T = f(function() {
        z(t.unstable_now());
      }, j);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, t.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < z ? Math.floor(1e3 / z) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, t.unstable_next = function(z) {
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
    }, t.unstable_requestPaint = function() {
      R = true;
    }, t.unstable_runWithPriority = function(z, j) {
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
    }, t.unstable_scheduleCallback = function(z, j, q) {
      var L = t.unstable_now();
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
        id: h++,
        callback: j,
        priorityLevel: z,
        startTime: q,
        expirationTime: Z,
        sortIndex: -1
      }, q > L ? (z.sortIndex = q, e(o, z), l(s) === null && z === l(o) && (M ? (m(T), T = -1) : M = true, B(D, q - L))) : (z.sortIndex = Z, e(s, z), _ || y || (_ = true, S || (S = true, N()))), z;
    }, t.unstable_shouldYield = g, t.unstable_wrapCallback = function(z) {
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
  })(ld);
  ed.exports = ld;
  var W0 = ed.exports, ad = {
    exports: {}
  }, Lt = {};
  var F0 = b;
  function nd(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function nl() {
  }
  var qt = {
    d: {
      f: nl,
      r: function() {
        throw Error(nd(522));
      },
      D: nl,
      C: nl,
      L: nl,
      m: nl,
      X: nl,
      S: nl,
      M: nl
    },
    p: 0,
    findDOMNode: null
  }, P0 = Symbol.for("react.portal");
  function I0(t, e, l) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P0,
      key: a == null ? null : "" + a,
      children: t,
      containerInfo: e,
      implementation: l
    };
  }
  var hn = F0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ei(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = qt;
  Lt.createPortal = function(t, e) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(nd(299));
    return I0(t, e, null, l);
  };
  Lt.flushSync = function(t) {
    var e = hn.T, l = qt.p;
    try {
      if (hn.T = null, qt.p = 2, t) return t();
    } finally {
      hn.T = e, qt.p = l, qt.d.f();
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
      var l = e.as, a = Ei(l, e.crossOrigin), n = typeof e.integrity == "string" ? e.integrity : void 0, u = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      l === "style" ? qt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
        crossOrigin: a,
        integrity: n,
        fetchPriority: u
      }) : l === "script" && qt.d.X(t, {
        crossOrigin: a,
        integrity: n,
        fetchPriority: u,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      });
    }
  };
  Lt.preinitModule = function(t, e) {
    if (typeof t == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var l = Ei(e.as, e.crossOrigin);
        qt.d.M(t, {
          crossOrigin: l,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    } else e == null && qt.d.M(t);
  };
  Lt.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var l = e.as, a = Ei(l, e.crossOrigin);
      qt.d.L(t, l, {
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
  Lt.preloadModule = function(t, e) {
    if (typeof t == "string") if (e) {
      var l = Ei(e.as, e.crossOrigin);
      qt.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: l,
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
  Lt.useFormState = function(t, e, l) {
    return hn.H.useFormState(t, e, l);
  };
  Lt.useFormStatus = function() {
    return hn.H.useHostTransitionStatus();
  };
  Lt.version = "19.2.5";
  function ud() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (t) {
      console.error(t);
    }
  }
  ud(), ad.exports = Lt;
  id = ad.exports;
  ty = Vf(id);
  var Tt = W0, cd = b, ey = id;
  function w(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function sd(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Qn(t) {
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
  function rd(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function od(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function lo(t) {
    if (Qn(t) !== t) throw Error(w(188));
  }
  function ly(t) {
    var e = t.alternate;
    if (!e) {
      if (e = Qn(t), e === null) throw Error(w(188));
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
          if (u === l) return lo(n), t;
          if (u === a) return lo(n), e;
          u = u.sibling;
        }
        throw Error(w(188));
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
          if (!i) throw Error(w(189));
        }
      }
      if (l.alternate !== a) throw Error(w(190));
    }
    if (l.tag !== 3) throw Error(w(188));
    return l.stateNode.current === l ? t : e;
  }
  function fd(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = fd(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var rt = Object.assign, ay = Symbol.for("react.element"), ru = Symbol.for("react.transitional.element"), rn = Symbol.for("react.portal"), fa = Symbol.for("react.fragment"), dd = Symbol.for("react.strict_mode"), Hc = Symbol.for("react.profiler"), md = Symbol.for("react.consumer"), Ve = Symbol.for("react.context"), qs = Symbol.for("react.forward_ref"), Uc = Symbol.for("react.suspense"), Bc = Symbol.for("react.suspense_list"), Ls = Symbol.for("react.memo"), ul = Symbol.for("react.lazy"), qc = Symbol.for("react.activity"), ny = Symbol.for("react.memo_cache_sentinel"), ao = Symbol.iterator;
  function Ia(t) {
    return t === null || typeof t != "object" ? null : (t = ao && t[ao] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var uy = Symbol.for("react.client.reference");
  function Lc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === uy ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case fa:
        return "Fragment";
      case Hc:
        return "Profiler";
      case dd:
        return "StrictMode";
      case Uc:
        return "Suspense";
      case Bc:
        return "SuspenseList";
      case qc:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case rn:
        return "Portal";
      case Ve:
        return t.displayName || "Context";
      case md:
        return (t._context.displayName || "Context") + ".Consumer";
      case qs:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Ls:
        return e = t.displayName || null, e !== null ? e : Lc(t.type) || "Memo";
      case ul:
        e = t._payload, t = t._init;
        try {
          return Lc(t(e));
        } catch {
        }
    }
    return null;
  }
  var on = Array.isArray, Y = cd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = ey.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ll = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Yc = [], da = -1;
  function Oe(t) {
    return {
      current: t
    };
  }
  function Rt(t) {
    0 > da || (t.current = Yc[da], Yc[da] = null, da--);
  }
  function ut(t, e) {
    da++, Yc[da] = t.current, t.current = e;
  }
  var we = Oe(null), Mn = Oe(null), pl = Oe(null), Qu = Oe(null);
  function Vu(t, e) {
    switch (ut(pl, e), ut(Mn, t), ut(we, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ff(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = ff(e), t = Dh(e, t);
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
    Rt(we), ut(we, t);
  }
  function wa() {
    Rt(we), Rt(Mn), Rt(pl);
  }
  function Gc(t) {
    t.memoizedState !== null && ut(Qu, t);
    var e = we.current, l = Dh(e, t.type);
    e !== l && (ut(Mn, t), ut(we, l));
  }
  function Zu(t) {
    Mn.current === t && (Rt(we), Rt(Mn)), Qu.current === t && (Rt(Qu), Ln._currentValue = Ll);
  }
  var Ki, no;
  function Hl(t) {
    if (Ki === void 0) try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      Ki = e && e[1] || "", no = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ki + t + no;
  }
  var Ji = false;
  function $i(t, e) {
    if (!t || Ji) return "";
    Ji = true;
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
                } catch (y) {
                  var d = y;
                }
                Reflect.construct(t, [], r);
              } else {
                try {
                  r.call();
                } catch (y) {
                  d = y;
                }
                t.call(r.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                d = y;
              }
              (r = t()) && typeof r.catch == "function" && r.catch(function() {
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
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), o = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < o.length && !o[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === s.length || n === o.length) for (a = s.length - 1, n = o.length - 1; 1 <= a && 0 <= n && s[a] !== o[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--) if (s[a] !== o[n]) {
          if (a !== 1 || n !== 1) do
            if (a--, n--, 0 > n || s[a] !== o[n]) {
              var h = `
` + s[a].replace(" at new ", " at ");
              return t.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", t.displayName)), h;
            }
          while (1 <= a && 0 <= n);
          break;
        }
      }
    } finally {
      Ji = false, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Hl(l) : "";
  }
  function iy(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Hl(t.type);
      case 16:
        return Hl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Hl("Suspense Fallback") : Hl("Suspense");
      case 19:
        return Hl("SuspenseList");
      case 0:
      case 15:
        return $i(t.type, false);
      case 11:
        return $i(t.type.render, false);
      case 1:
        return $i(t.type, true);
      case 31:
        return Hl("Activity");
      default:
        return "";
    }
  }
  function uo(t) {
    try {
      var e = "", l = null;
      do
        e += iy(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Xc = Object.prototype.hasOwnProperty, Ys = Tt.unstable_scheduleCallback, Wi = Tt.unstable_cancelCallback, cy = Tt.unstable_shouldYield, sy = Tt.unstable_requestPaint, ee = Tt.unstable_now, ry = Tt.unstable_getCurrentPriorityLevel, hd = Tt.unstable_ImmediatePriority, yd = Tt.unstable_UserBlockingPriority, ku = Tt.unstable_NormalPriority, oy = Tt.unstable_LowPriority, pd = Tt.unstable_IdlePriority, fy = Tt.log, dy = Tt.unstable_setDisableYieldValue, Vn = null, le = null;
  function fl(t) {
    if (typeof fy == "function" && dy(t), le && typeof le.setStrictMode == "function") try {
      le.setStrictMode(Vn, t);
    } catch {
    }
  }
  var ae = Math.clz32 ? Math.clz32 : yy, my = Math.log, hy = Math.LN2;
  function yy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (my(t) / hy | 0) | 0;
  }
  var ou = 256, fu = 262144, du = 4194304;
  function Ul(t) {
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
  function Ti(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ul(a) : (i &= c, i !== 0 ? n = Ul(i) : l || (l = c & ~t, l !== 0 && (n = Ul(l))))) : (c = a & ~u, c !== 0 ? n = Ul(c) : i !== 0 ? n = Ul(i) : l || (l = a & ~t, l !== 0 && (n = Ul(l)))), n === 0 ? 0 : e !== 0 && e !== n && !(e & u) && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function Zn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function py(t, e) {
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
  function gd() {
    var t = du;
    return du <<= 1, !(du & 62914560) && (du = 4194304), t;
  }
  function Fi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function kn(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function gy(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, o = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var h = 31 - ae(l), r = 1 << h;
      c[h] = 0, s[h] = -1;
      var d = o[h];
      if (d !== null) for (o[h] = null, h = 0; h < d.length; h++) {
        var y = d[h];
        y !== null && (y.lane &= -536870913);
      }
      l &= ~r;
    }
    a !== 0 && vd(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function vd(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ae(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function bd(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ae(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function Sd(t, e) {
    var l = e & -e;
    return l = l & 42 ? 1 : Gs(l), l & (t.suspendedLanes | e) ? 0 : l;
  }
  function Gs(t) {
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
  function Xs(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function xd() {
    var t = P.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Vh(t.type));
  }
  function io(t, e) {
    var l = P.p;
    try {
      return P.p = t, e();
    } finally {
      P.p = l;
    }
  }
  var Cl = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + Cl, Kt = "__reactProps$" + Cl, Xa = "__reactContainer$" + Cl, Qc = "__reactEvents$" + Cl, vy = "__reactListeners$" + Cl, by = "__reactHandles$" + Cl, co = "__reactResources$" + Cl, Kn = "__reactMarker$" + Cl;
  function Qs(t) {
    delete t[Nt], delete t[Kt], delete t[Qc], delete t[vy], delete t[by];
  }
  function ma(t) {
    var e = t[Nt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Xa] || l[Nt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = pf(t); t !== null; ) {
          if (l = t[Nt]) return l;
          t = pf(t);
        }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Qa(t) {
    if (t = t[Nt] || t[Xa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function fn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(w(33));
  }
  function Ta(t) {
    var e = t[co];
    return e || (e = t[co] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), e;
  }
  function At(t) {
    t[Kn] = true;
  }
  var Ed = /* @__PURE__ */ new Set(), Td = {};
  function $l(t, e) {
    Na(t, e), Na(t + "Capture", e);
  }
  function Na(t, e) {
    for (Td[t] = e, t = 0; t < e.length; t++) Ed.add(e[t]);
  }
  var Sy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), so = {}, ro = {};
  function xy(t) {
    return Xc.call(ro, t) ? true : Xc.call(so, t) ? false : Sy.test(t) ? ro[t] = true : (so[t] = true, false);
  }
  function Au(t, e, l) {
    if (xy(e)) if (l === null) t.removeAttribute(e);
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
  function mu(t, e, l) {
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
  function Ue(t, e, l, a) {
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
  function _d(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ey(t, e, l) {
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
  function Vc(t) {
    if (!t._valueTracker) {
      var e = _d(t) ? "checked" : "value";
      t._valueTracker = Ey(t, e, "" + t[e]);
    }
  }
  function zd(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var l = e.getValue(), a = "";
    return t && (a = _d(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
  }
  function Ku(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ty = /[\n"\\]/g;
  function me(t) {
    return t.replace(Ty, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zc(t, e, l, a, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + oe(e)) : t.value !== "" + oe(e) && (t.value = "" + oe(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? kc(t, i, oe(e)) : l != null ? kc(t, i, oe(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + oe(c) : t.removeAttribute("name");
  }
  function Ad(t, e, l, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Vc(t);
        return;
      }
      l = l != null ? "" + oe(l) : "", e = e != null ? "" + oe(e) : l, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Vc(t);
  }
  function kc(t, e, l) {
    e === "number" && Ku(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function _a(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
      for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
    } else {
      for (l = "" + oe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = true, a && (t[n].defaultSelected = true);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = true);
    }
  }
  function Rd(t, e, l) {
    if (e != null && (e = "" + oe(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + oe(l) : "";
  }
  function Md(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(w(92));
        if (on(a)) {
          if (1 < a.length) throw Error(w(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = oe(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Vc(t);
  }
  function Oa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var _y = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function oo(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || _y.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Cd(t, e, l) {
    if (e != null && typeof e != "object") throw Error(w(62));
    if (t = t.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && oo(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && oo(t, u, e[u]);
  }
  function Vs(t) {
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
  var zy = /* @__PURE__ */ new Map([
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
  ]), Ay = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ru(t) {
    return Ay.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ze() {
  }
  var Kc = null;
  function Zs(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ha = null, za = null;
  function fo(t) {
    var e = Qa(t);
    if (e && (t = e.stateNode)) {
      var l = t[Kt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Zc(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + me("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Kt] || null;
                if (!n) throw Error(w(90));
                Zc(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && zd(a);
          }
          break t;
        case "textarea":
          Rd(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && _a(t, !!l.multiple, e, false);
      }
    }
  }
  var Pi = false;
  function wd(t, e, l) {
    if (Pi) return t(e, l);
    Pi = true;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Pi = false, (ha !== null || za !== null) && (Hi(), ha && (e = ha, t = za, za = ha = null, fo(e), t))) for (e = 0; e < t.length; e++) fo(t[e]);
    }
  }
  function Cn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Kt] || null;
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
    if (l && typeof l != "function") throw Error(w(231, e, typeof l));
    return l;
  }
  var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jc = false;
  if (We) try {
    var tn = {};
    Object.defineProperty(tn, "passive", {
      get: function() {
        Jc = true;
      }
    }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
  } catch {
    Jc = false;
  }
  var dl = null, ks = null, Mu = null;
  function Nd() {
    if (Mu) return Mu;
    var t, e = ks, l = e.length, a, n = "value" in dl ? dl.value : dl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Mu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Cu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function hu() {
    return true;
  }
  function mo() {
    return false;
  }
  function Jt(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t) t.hasOwnProperty(c) && (l = t[c], this[c] = l ? l(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? hu : mo, this.isPropagationStopped = mo, this;
    }
    return rt(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = hu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = hu);
      },
      persist: function() {
      },
      isPersistent: hu
    }), e;
  }
  var Wl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _i = Jt(Wl), Jn = rt({}, Wl, {
    view: 0,
    detail: 0
  }), Ry = Jt(Jn), Ii, tc, en, zi = rt({}, Jn, {
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
    getModifierState: Ks,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== en && (en && t.type === "mousemove" ? (Ii = t.screenX - en.screenX, tc = t.screenY - en.screenY) : tc = Ii = 0, en = t), Ii);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : tc;
    }
  }), ho = Jt(zi), My = rt({}, zi, {
    dataTransfer: 0
  }), Cy = Jt(My), wy = rt({}, Jn, {
    relatedTarget: 0
  }), ec = Jt(wy), Ny = rt({}, Wl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Oy = Jt(Ny), Dy = rt({}, Wl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), jy = Jt(Dy), Hy = rt({}, Wl, {
    data: 0
  }), yo = Jt(Hy), Uy = {
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
  }, By = {
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
  }, qy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ly(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = qy[t]) ? !!e[t] : false;
  }
  function Ks() {
    return Ly;
  }
  var Yy = rt({}, Jn, {
    key: function(t) {
      if (t.key) {
        var e = Uy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Cu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? By[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ks,
    charCode: function(t) {
      return t.type === "keypress" ? Cu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Cu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Gy = Jt(Yy), Xy = rt({}, zi, {
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
  }), po = Jt(Xy), Qy = rt({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ks
  }), Vy = Jt(Qy), Zy = rt({}, Wl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ky = Jt(Zy), Ky = rt({}, zi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jy = Jt(Ky), $y = rt({}, Wl, {
    newState: 0,
    oldState: 0
  }), Wy = Jt($y), Fy = [
    9,
    13,
    27,
    32
  ], Js = We && "CompositionEvent" in window, yn = null;
  We && "documentMode" in document && (yn = document.documentMode);
  var Py = We && "TextEvent" in window && !yn, Od = We && (!Js || yn && 8 < yn && 11 >= yn), go = " ", vo = false;
  function Dd(t, e) {
    switch (t) {
      case "keyup":
        return Fy.indexOf(e.keyCode) !== -1;
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
  function jd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ya = false;
  function Iy(t, e) {
    switch (t) {
      case "compositionend":
        return jd(e);
      case "keypress":
        return e.which !== 32 ? null : (vo = true, go);
      case "textInput":
        return t = e.data, t === go && vo ? null : t;
      default:
        return null;
    }
  }
  function tp(t, e) {
    if (ya) return t === "compositionend" || !Js && Dd(t, e) ? (t = Nd(), Mu = ks = dl = null, ya = false, t) : null;
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
        return Od && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ep = {
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
  function bo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ep[t.type] : e === "textarea";
  }
  function Hd(t, e, l, a) {
    ha ? za ? za.push(a) : za = [
      a
    ] : ha = a, e = fi(e, "onChange"), 0 < e.length && (l = new _i("onChange", "change", null, l, a), t.push({
      event: l,
      listeners: e
    }));
  }
  var pn = null, wn = null;
  function lp(t) {
    wh(t, 0);
  }
  function Ai(t) {
    var e = fn(t);
    if (zd(e)) return t;
  }
  function So(t, e) {
    if (t === "change") return e;
  }
  var Ud = false;
  if (We) {
    var lc;
    if (We) {
      var ac = "oninput" in document;
      if (!ac) {
        var xo = document.createElement("div");
        xo.setAttribute("oninput", "return;"), ac = typeof xo.oninput == "function";
      }
      lc = ac;
    } else lc = false;
    Ud = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Eo() {
    pn && (pn.detachEvent("onpropertychange", Bd), wn = pn = null);
  }
  function Bd(t) {
    if (t.propertyName === "value" && Ai(wn)) {
      var e = [];
      Hd(e, wn, t, Zs(t)), wd(lp, e);
    }
  }
  function ap(t, e, l) {
    t === "focusin" ? (Eo(), pn = e, wn = l, pn.attachEvent("onpropertychange", Bd)) : t === "focusout" && Eo();
  }
  function np(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ai(wn);
  }
  function up(t, e) {
    if (t === "click") return Ai(e);
  }
  function ip(t, e) {
    if (t === "input" || t === "change") return Ai(e);
  }
  function cp(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ue = typeof Object.is == "function" ? Object.is : cp;
  function Nn(t, e) {
    if (ue(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return false;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Xc.call(e, n) || !ue(t[n], e[n])) return false;
    }
    return true;
  }
  function To(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function _o(t, e) {
    var l = To(t);
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
      l = To(l);
    }
  }
  function qd(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? qd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Ld(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ku(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ku(t.document);
    }
    return e;
  }
  function $s(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var sp = We && "documentMode" in document && 11 >= document.documentMode, pa = null, $c = null, gn = null, Wc = false;
  function zo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wc || pa == null || pa !== Ku(a) || (a = pa, "selectionStart" in a && $s(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), gn && Nn(gn, a) || (gn = a, a = fi($c, "onSelect"), 0 < a.length && (e = new _i("onSelect", "select", null, e, l), t.push({
      event: e,
      listeners: a
    }), e.target = pa)));
  }
  function Dl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ga = {
    animationend: Dl("Animation", "AnimationEnd"),
    animationiteration: Dl("Animation", "AnimationIteration"),
    animationstart: Dl("Animation", "AnimationStart"),
    transitionrun: Dl("Transition", "TransitionRun"),
    transitionstart: Dl("Transition", "TransitionStart"),
    transitioncancel: Dl("Transition", "TransitionCancel"),
    transitionend: Dl("Transition", "TransitionEnd")
  }, nc = {}, Yd = {};
  We && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
  function Fl(t) {
    if (nc[t]) return nc[t];
    if (!ga[t]) return t;
    var e = ga[t], l;
    for (l in e) if (e.hasOwnProperty(l) && l in Yd) return nc[t] = e[l];
    return t;
  }
  var Gd = Fl("animationend"), Xd = Fl("animationiteration"), Qd = Fl("animationstart"), rp = Fl("transitionrun"), op = Fl("transitionstart"), fp = Fl("transitioncancel"), Vd = Fl("transitionend"), Zd = /* @__PURE__ */ new Map(), Fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Fc.push("scrollEnd");
  function _e(t, e) {
    Zd.set(t, e), $l(e, [
      t
    ]);
  }
  var Ju = typeof reportError == "function" ? reportError : function(t) {
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
  }, re = [], va = 0, Ws = 0;
  function Ri() {
    for (var t = va, e = Ws = va = 0; e < t; ) {
      var l = re[e];
      re[e++] = null;
      var a = re[e];
      re[e++] = null;
      var n = re[e];
      re[e++] = null;
      var u = re[e];
      if (re[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && kd(l, n, u);
    }
  }
  function Mi(t, e, l, a) {
    re[va++] = t, re[va++] = e, re[va++] = l, re[va++] = a, Ws |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Fs(t, e, l, a) {
    return Mi(t, e, l, a), $u(t);
  }
  function Pl(t, e) {
    return Mi(t, null, null, e), $u(t);
  }
  function kd(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ae(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
      e
    ] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function $u(t) {
    if (50 < An) throw An = 0, vs = null, Error(w(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ba = {};
  function dp(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(t, e, l, a) {
    return new dp(t, e, l, a);
  }
  function Ps(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ke(t, e) {
    var l = t.alternate;
    return l === null ? (l = It(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Kd(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function wu(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Ps(t) && (i = 1);
    else if (typeof t == "string") i = gg(t, l, we.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case qc:
        return t = It(31, l, e, n), t.elementType = qc, t.lanes = u, t;
      case fa:
        return Yl(l.children, n, u, e);
      case dd:
        i = 8, n |= 24;
        break;
      case Hc:
        return t = It(12, l, e, n | 2), t.elementType = Hc, t.lanes = u, t;
      case Uc:
        return t = It(13, l, e, n), t.elementType = Uc, t.lanes = u, t;
      case Bc:
        return t = It(19, l, e, n), t.elementType = Bc, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Ve:
            i = 10;
            break t;
          case md:
            i = 9;
            break t;
          case qs:
            i = 11;
            break t;
          case Ls:
            i = 14;
            break t;
          case ul:
            i = 16, a = null;
            break t;
        }
        i = 29, l = Error(w(130, t === null ? "null" : typeof t, "")), a = null;
    }
    return e = It(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Yl(t, e, l, a) {
    return t = It(7, t, a, e), t.lanes = l, t;
  }
  function uc(t, e, l) {
    return t = It(6, t, null, e), t.lanes = l, t;
  }
  function Jd(t) {
    var e = It(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ic(t, e, l) {
    return e = It(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ao = /* @__PURE__ */ new WeakMap();
  function he(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ao.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: uo(e)
      }, Ao.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: uo(e)
    };
  }
  var Sa = [], xa = 0, Wu = null, On = 0, fe = [], de = 0, zl = null, Re = 1, Me = "";
  function Xe(t, e) {
    Sa[xa++] = On, Sa[xa++] = Wu, Wu = t, On = e;
  }
  function $d(t, e, l) {
    fe[de++] = Re, fe[de++] = Me, fe[de++] = zl, zl = t;
    var a = Re;
    t = Me;
    var n = 32 - ae(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ae(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Re = 1 << 32 - ae(e) + n | l << n | a, Me = u + t;
    } else Re = 1 << u | l << n | a, Me = t;
  }
  function Is(t) {
    t.return !== null && (Xe(t, 1), $d(t, 1, 0));
  }
  function tr(t) {
    for (; t === Wu; ) Wu = Sa[--xa], Sa[xa] = null, On = Sa[--xa], Sa[xa] = null;
    for (; t === zl; ) zl = fe[--de], fe[de] = null, Me = fe[--de], fe[de] = null, Re = fe[--de], fe[de] = null;
  }
  function Wd(t, e) {
    fe[de++] = Re, fe[de++] = Me, fe[de++] = zl, Re = e.id, Me = e.overflow, zl = t;
  }
  var Ot = null, ct = null, W = false, gl = null, ye = false, Pc = Error(w(519));
  function Al(t) {
    var e = Error(w(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Dn(he(e, t)), Pc;
  }
  function Ro(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Nt] = t, e[Kt] = a, l) {
      case "dialog":
        K("cancel", e), K("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Bn.length; l++) K(Bn[l], e);
        break;
      case "source":
        K("error", e);
        break;
      case "img":
      case "image":
      case "link":
        K("error", e), K("load", e);
        break;
      case "details":
        K("toggle", e);
        break;
      case "input":
        K("invalid", e), Ad(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        K("invalid", e);
        break;
      case "textarea":
        K("invalid", e), Md(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || Oh(e.textContent, l) ? (a.popover != null && (K("beforetoggle", e), K("toggle", e)), a.onScroll != null && K("scroll", e), a.onScrollEnd != null && K("scrollend", e), a.onClick != null && (e.onclick = Ze), e = true) : e = false, e || Al(t, true);
  }
  function Mo(t) {
    for (Ot = t.return; Ot; ) switch (Ot.tag) {
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
        Ot = Ot.return;
    }
  }
  function ia(t) {
    if (t !== Ot) return false;
    if (!W) return Mo(t), W = true, false;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Ts(t.type, t.memoizedProps)), l = !l), l && ct && Al(t), Mo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(w(317));
      ct = yf(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(w(317));
      ct = yf(t);
    } else e === 27 ? (e = ct, wl(t.type) ? (t = Rs, Rs = null, ct = t) : ct = e) : ct = Ot ? ge(t.stateNode.nextSibling) : null;
    return true;
  }
  function Vl() {
    ct = Ot = null, W = false;
  }
  function cc() {
    var t = gl;
    return t !== null && (Vt === null ? Vt = t : Vt.push.apply(Vt, t), gl = null), t;
  }
  function Dn(t) {
    gl === null ? gl = [
      t
    ] : gl.push(t);
  }
  var Ic = Oe(null), Il = null, ke = null;
  function cl(t, e, l) {
    ut(Ic, e._currentValue), e._currentValue = l;
  }
  function Je(t) {
    t._currentValue = Ic.current, Rt(Ic);
  }
  function ts(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function es(t, e, l, a) {
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
            u.lanes |= l, c = u.alternate, c !== null && (c.lanes |= l), ts(u.return, l, t), a || (i = null);
            break t;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(w(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), ts(i, l, t), i = null;
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
  function Va(t, e, l, a) {
    t = null;
    for (var n = e, u = false; n !== null; ) {
      if (!u) {
        if (n.flags & 524288) u = true;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(w(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ue(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
            c
          ]);
        }
      } else if (n === Qu.current) {
        if (i = n.alternate, i === null) throw Error(w(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Ln) : t = [
          Ln
        ]);
      }
      n = n.return;
    }
    t !== null && es(e, t, l, a), e.flags |= 262144;
  }
  function Fu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Zl(t) {
    Il = t, ke = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Dt(t) {
    return Fd(Il, t);
  }
  function yu(t, e) {
    return Il === null && Zl(t), Fd(t, e);
  }
  function Fd(t, e) {
    var l = e._currentValue;
    if (e = {
      context: e,
      memoizedValue: l,
      next: null
    }, ke === null) {
      if (t === null) throw Error(w(308));
      ke = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288;
    } else ke = ke.next = e;
    return l;
  }
  var mp = typeof AbortController < "u" ? AbortController : function() {
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
  }, hp = Tt.unstable_scheduleCallback, yp = Tt.unstable_NormalPriority, St = {
    $$typeof: Ve,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function er() {
    return {
      controller: new mp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $n(t) {
    t.refCount--, t.refCount === 0 && hp(yp, function() {
      t.controller.abort();
    });
  }
  var vn = null, ls = 0, Da = 0, Aa = null;
  function pp(t, e) {
    if (vn === null) {
      var l = vn = [];
      ls = 0, Da = Ar(), Aa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ls++, e.then(Co, Co), e;
  }
  function Co() {
    if (--ls === 0 && vn !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var t = vn;
      vn = null, Da = 0, Aa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function gp(t, e) {
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
  var wo = Y.S;
  Y.S = function(t, e) {
    fh = ee(), typeof e == "object" && e !== null && typeof e.then == "function" && pp(t, e), wo !== null && wo(t, e);
  };
  var Gl = Oe(null);
  function lr() {
    var t = Gl.current;
    return t !== null ? t : nt.pooledCache;
  }
  function Nu(t, e) {
    e === null ? ut(Gl, Gl.current) : ut(Gl, e.pool);
  }
  function Pd() {
    var t = lr();
    return t === null ? null : {
      parent: St._currentValue,
      pool: t
    };
  }
  var Za = Error(w(460)), ar = Error(w(474)), Ci = Error(w(542)), Pu = {
    then: function() {
    }
  };
  function No(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Id(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ze, Ze), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Do(t), t;
      default:
        if (typeof e.status == "string") e.then(Ze, Ze);
        else {
          if (t = nt, t !== null && 100 < t.shellSuspendCounter) throw Error(w(482));
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
            throw t = e.reason, Do(t), t;
        }
        throw Xl = e, Za;
    }
  }
  function Bl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Xl = l, Za) : l;
    }
  }
  var Xl = null;
  function Oo() {
    if (Xl === null) throw Error(w(459));
    var t = Xl;
    return Xl = null, t;
  }
  function Do(t) {
    if (t === Za || t === Ci) throw Error(w(483));
  }
  var Ra = null, jn = 0;
  function pu(t) {
    var e = jn;
    return jn += 1, Ra === null && (Ra = []), Id(Ra, t, e);
  }
  function ln(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function gu(t, e) {
    throw e.$$typeof === ay ? Error(w(525)) : (t = Object.prototype.toString.call(e), Error(w(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function tm(t) {
    function e(f, m) {
      if (t) {
        var p = f.deletions;
        p === null ? (f.deletions = [
          m
        ], f.flags |= 16) : p.push(m);
      }
    }
    function l(f, m) {
      if (!t) return null;
      for (; m !== null; ) e(f, m), m = m.sibling;
      return null;
    }
    function a(f) {
      for (var m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
      return m;
    }
    function n(f, m) {
      return f = Ke(f, m), f.index = 0, f.sibling = null, f;
    }
    function u(f, m, p) {
      return f.index = p, t ? (p = f.alternate, p !== null ? (p = p.index, p < m ? (f.flags |= 67108866, m) : p) : (f.flags |= 67108866, m)) : (f.flags |= 1048576, m);
    }
    function i(f) {
      return t && f.alternate === null && (f.flags |= 67108866), f;
    }
    function c(f, m, p, x) {
      return m === null || m.tag !== 6 ? (m = uc(p, f.mode, x), m.return = f, m) : (m = n(m, p), m.return = f, m);
    }
    function s(f, m, p, x) {
      var D = p.type;
      return D === fa ? h(f, m, p.props.children, x, p.key) : m !== null && (m.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ul && Bl(D) === m.type) ? (m = n(m, p.props), ln(m, p), m.return = f, m) : (m = wu(p.type, p.key, p.props, null, f.mode, x), ln(m, p), m.return = f, m);
    }
    function o(f, m, p, x) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = ic(p, f.mode, x), m.return = f, m) : (m = n(m, p.children || []), m.return = f, m);
    }
    function h(f, m, p, x, D) {
      return m === null || m.tag !== 7 ? (m = Yl(p, f.mode, x, D), m.return = f, m) : (m = n(m, p), m.return = f, m);
    }
    function r(f, m, p) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return m = uc("" + m, f.mode, p), m.return = f, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ru:
            return p = wu(m.type, m.key, m.props, null, f.mode, p), ln(p, m), p.return = f, p;
          case rn:
            return m = ic(m, f.mode, p), m.return = f, m;
          case ul:
            return m = Bl(m), r(f, m, p);
        }
        if (on(m) || Ia(m)) return m = Yl(m, f.mode, p, null), m.return = f, m;
        if (typeof m.then == "function") return r(f, pu(m), p);
        if (m.$$typeof === Ve) return r(f, yu(f, m), p);
        gu(f, m);
      }
      return null;
    }
    function d(f, m, p, x) {
      var D = m !== null ? m.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return D !== null ? null : c(f, m, "" + p, x);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ru:
            return p.key === D ? s(f, m, p, x) : null;
          case rn:
            return p.key === D ? o(f, m, p, x) : null;
          case ul:
            return p = Bl(p), d(f, m, p, x);
        }
        if (on(p) || Ia(p)) return D !== null ? null : h(f, m, p, x, null);
        if (typeof p.then == "function") return d(f, m, pu(p), x);
        if (p.$$typeof === Ve) return d(f, m, yu(f, p), x);
        gu(f, p);
      }
      return null;
    }
    function y(f, m, p, x, D) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return f = f.get(p) || null, c(m, f, "" + x, D);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ru:
            return f = f.get(x.key === null ? p : x.key) || null, s(m, f, x, D);
          case rn:
            return f = f.get(x.key === null ? p : x.key) || null, o(m, f, x, D);
          case ul:
            return x = Bl(x), y(f, m, p, x, D);
        }
        if (on(x) || Ia(x)) return f = f.get(p) || null, h(m, f, x, D, null);
        if (typeof x.then == "function") return y(f, m, p, pu(x), D);
        if (x.$$typeof === Ve) return y(f, m, p, yu(m, x), D);
        gu(m, x);
      }
      return null;
    }
    function _(f, m, p, x) {
      for (var D = null, S = null, T = m, C = m = 0, A = null; T !== null && C < p.length; C++) {
        T.index > C ? (A = T, T = null) : A = T.sibling;
        var g = d(f, T, p[C], x);
        if (g === null) {
          T === null && (T = A);
          break;
        }
        t && T && g.alternate === null && e(f, T), m = u(g, m, C), S === null ? D = g : S.sibling = g, S = g, T = A;
      }
      if (C === p.length) return l(f, T), W && Xe(f, C), D;
      if (T === null) {
        for (; C < p.length; C++) T = r(f, p[C], x), T !== null && (m = u(T, m, C), S === null ? D = T : S.sibling = T, S = T);
        return W && Xe(f, C), D;
      }
      for (T = a(T); C < p.length; C++) A = y(T, f, C, p[C], x), A !== null && (t && A.alternate !== null && T.delete(A.key === null ? C : A.key), m = u(A, m, C), S === null ? D = A : S.sibling = A, S = A);
      return t && T.forEach(function(v) {
        return e(f, v);
      }), W && Xe(f, C), D;
    }
    function M(f, m, p, x) {
      if (p == null) throw Error(w(151));
      for (var D = null, S = null, T = m, C = m = 0, A = null, g = p.next(); T !== null && !g.done; C++, g = p.next()) {
        T.index > C ? (A = T, T = null) : A = T.sibling;
        var v = d(f, T, g.value, x);
        if (v === null) {
          T === null && (T = A);
          break;
        }
        t && T && v.alternate === null && e(f, T), m = u(v, m, C), S === null ? D = v : S.sibling = v, S = v, T = A;
      }
      if (g.done) return l(f, T), W && Xe(f, C), D;
      if (T === null) {
        for (; !g.done; C++, g = p.next()) g = r(f, g.value, x), g !== null && (m = u(g, m, C), S === null ? D = g : S.sibling = g, S = g);
        return W && Xe(f, C), D;
      }
      for (T = a(T); !g.done; C++, g = p.next()) g = y(T, f, C, g.value, x), g !== null && (t && g.alternate !== null && T.delete(g.key === null ? C : g.key), m = u(g, m, C), S === null ? D = g : S.sibling = g, S = g);
      return t && T.forEach(function(N) {
        return e(f, N);
      }), W && Xe(f, C), D;
    }
    function R(f, m, p, x) {
      if (typeof p == "object" && p !== null && p.type === fa && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ru:
            t: {
              for (var D = p.key; m !== null; ) {
                if (m.key === D) {
                  if (D = p.type, D === fa) {
                    if (m.tag === 7) {
                      l(f, m.sibling), x = n(m, p.props.children), x.return = f, f = x;
                      break t;
                    }
                  } else if (m.elementType === D || typeof D == "object" && D !== null && D.$$typeof === ul && Bl(D) === m.type) {
                    l(f, m.sibling), x = n(m, p.props), ln(x, p), x.return = f, f = x;
                    break t;
                  }
                  l(f, m);
                  break;
                } else e(f, m);
                m = m.sibling;
              }
              p.type === fa ? (x = Yl(p.props.children, f.mode, x, p.key), x.return = f, f = x) : (x = wu(p.type, p.key, p.props, null, f.mode, x), ln(x, p), x.return = f, f = x);
            }
            return i(f);
          case rn:
            t: {
              for (D = p.key; m !== null; ) {
                if (m.key === D) if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                  l(f, m.sibling), x = n(m, p.children || []), x.return = f, f = x;
                  break t;
                } else {
                  l(f, m);
                  break;
                }
                else e(f, m);
                m = m.sibling;
              }
              x = ic(p, f.mode, x), x.return = f, f = x;
            }
            return i(f);
          case ul:
            return p = Bl(p), R(f, m, p, x);
        }
        if (on(p)) return _(f, m, p, x);
        if (Ia(p)) {
          if (D = Ia(p), typeof D != "function") throw Error(w(150));
          return p = D.call(p), M(f, m, p, x);
        }
        if (typeof p.then == "function") return R(f, m, pu(p), x);
        if (p.$$typeof === Ve) return R(f, m, yu(f, p), x);
        gu(f, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, m !== null && m.tag === 6 ? (l(f, m.sibling), x = n(m, p), x.return = f, f = x) : (l(f, m), x = uc(p, f.mode, x), x.return = f, f = x), i(f)) : l(f, m);
    }
    return function(f, m, p, x) {
      try {
        jn = 0;
        var D = R(f, m, p, x);
        return Ra = null, D;
      } catch (T) {
        if (T === Za || T === Ci) throw T;
        var S = It(29, T, null, f.mode);
        return S.lanes = x, S.return = f, S;
      } finally {
      }
    };
  }
  var kl = tm(true), em = tm(false), il = false;
  function nr(t) {
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
  function as(t, e) {
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
  function bl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, F & 2) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = $u(t), kd(t, null, l), e;
    }
    return Mi(t, a, e, l), $u(t);
  }
  function bn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, bd(t, l);
    }
  }
  function sc(t, e) {
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
  var ns = false;
  function Sn() {
    if (ns) {
      var t = Aa;
      if (t !== null) throw t;
    }
  }
  function xn(t, e, l, a) {
    ns = false;
    var n = t.updateQueue;
    il = false;
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
        var d = c.lane & -536870913, y = d !== c.lane;
        if (y ? ($ & d) === d : (a & d) === d) {
          d !== 0 && d === Da && (ns = true), h !== null && (h = h.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var _ = t, M = c;
            d = e;
            var R = l;
            switch (M.tag) {
              case 1:
                if (_ = M.payload, typeof _ == "function") {
                  r = _.call(R, r, d);
                  break t;
                }
                r = _;
                break t;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = M.payload, d = typeof _ == "function" ? _.call(R, r, d) : _, d == null) break t;
                r = rt({}, r, d);
                break t;
              case 2:
                il = true;
            }
          }
          d = c.callback, d !== null && (t.flags |= 64, y && (t.flags |= 8192), y = n.callbacks, y === null ? n.callbacks = [
            d
          ] : y.push(d));
        } else y = {
          lane: d,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, h === null ? (o = h = y, s = r) : h = h.next = y, i |= d;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          y = c, c = y.next, y.next = null, n.lastBaseUpdate = y, n.shared.pending = null;
        }
      } while (true);
      h === null && (s = r), n.baseState = s, n.firstBaseUpdate = o, n.lastBaseUpdate = h, u === null && (n.shared.lanes = 0), Ml |= i, t.lanes = i, t.memoizedState = r;
    }
  }
  function lm(t, e) {
    if (typeof t != "function") throw Error(w(191, t));
    t.call(e);
  }
  function am(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) lm(l[t], e);
  }
  var ja = Oe(null), Iu = Oe(0);
  function jo(t, e) {
    t = tl, ut(Iu, t), ut(ja, e), tl = t | e.baseLanes;
  }
  function us() {
    ut(Iu, tl), ut(ja, ja.current);
  }
  function ur() {
    tl = Iu.current, Rt(ja), Rt(Iu);
  }
  var ie = Oe(null), pe = null;
  function sl(t) {
    var e = t.alternate;
    ut(yt, yt.current & 1), ut(ie, t), pe === null && (e === null || ja.current !== null || e.memoizedState !== null) && (pe = t);
  }
  function is(t) {
    ut(yt, yt.current), ut(ie, t), pe === null && (pe = t);
  }
  function nm(t) {
    t.tag === 22 ? (ut(yt, yt.current), ut(ie, t), pe === null && (pe = t)) : rl();
  }
  function rl() {
    ut(yt, yt.current), ut(ie, ie.current);
  }
  function Pt(t) {
    Rt(ie), pe === t && (pe = null), Rt(yt);
  }
  var yt = Oe(0);
  function ti(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || zs(l) || As(l))) return e;
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
  var Fe = 0, Q = null, at = null, vt = null, ei = false, Ma = false, Kl = false, li = 0, Hn = 0, Ca = null, vp = 0;
  function mt() {
    throw Error(w(321));
  }
  function ir(t, e) {
    if (e === null) return false;
    for (var l = 0; l < e.length && l < t.length; l++) if (!ue(t[l], e[l])) return false;
    return true;
  }
  function cr(t, e, l, a, n, u) {
    return Fe = u, Q = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Y.H = t === null || t.memoizedState === null ? Hm : vr, Kl = false, u = l(a, n), Kl = false, Ma && (u = im(e, l, a, n)), um(t), u;
  }
  function um(t) {
    Y.H = Un;
    var e = at !== null && at.next !== null;
    if (Fe = 0, vt = at = Q = null, ei = false, Hn = 0, Ca = null, e) throw Error(w(300));
    t === null || xt || (t = t.dependencies, t !== null && Fu(t) && (xt = true));
  }
  function im(t, e, l, a) {
    Q = t;
    var n = 0;
    do {
      if (Ma && (Ca = null), Hn = 0, Ma = false, 25 <= n) throw Error(w(301));
      if (n += 1, vt = at = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = Um, u = e(l, a);
    } while (Ma);
    return u;
  }
  function bp() {
    var t = Y.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Wn(e) : e, t = t.useState()[0], (at !== null ? at.memoizedState : null) !== t && (Q.flags |= 1024), e;
  }
  function sr() {
    var t = li !== 0;
    return li = 0, t;
  }
  function rr(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function or(t) {
    if (ei) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ei = false;
    }
    Fe = 0, vt = at = Q = null, Ma = false, Hn = li = 0, Ca = null;
  }
  function Bt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? Q.memoizedState = vt = t : vt = vt.next = t, vt;
  }
  function pt() {
    if (at === null) {
      var t = Q.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = at.next;
    var e = vt === null ? Q.memoizedState : vt.next;
    if (e !== null) vt = e, at = t;
    else {
      if (t === null) throw Q.alternate === null ? Error(w(467)) : Error(w(310));
      at = t, t = {
        memoizedState: at.memoizedState,
        baseState: at.baseState,
        baseQueue: at.baseQueue,
        queue: at.queue,
        next: null
      }, vt === null ? Q.memoizedState = vt = t : vt = vt.next = t;
    }
    return vt;
  }
  function wi() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Wn(t) {
    var e = Hn;
    return Hn += 1, Ca === null && (Ca = []), t = Id(Ca, t, e), e = Q, (vt === null ? e.memoizedState : vt.next) === null && (e = e.alternate, Y.H = e === null || e.memoizedState === null ? Hm : vr), t;
  }
  function Ni(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Wn(t);
      if (t.$$typeof === Ve) return Dt(t);
    }
    throw Error(w(438, String(t)));
  }
  function fr(t) {
    var e = null, l = Q.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = Q.alternate;
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
    }), l === null && (l = wi(), Q.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ny;
    return e.index++, l;
  }
  function Pe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ou(t) {
    var e = pt();
    return dr(e, at, t);
  }
  function dr(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(w(311));
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
      var c = i = null, s = null, o = e, h = false;
      do {
        var r = o.lane & -536870913;
        if (r !== o.lane ? ($ & r) === r : (Fe & r) === r) {
          var d = o.revertLane;
          if (d === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }), r === Da && (h = true);
          else if ((Fe & d) === d) {
            o = o.next, d === Da && (h = true);
            continue;
          } else r = {
            lane: 0,
            revertLane: o.revertLane,
            gesture: null,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, s === null ? (c = s = r, i = u) : s = s.next = r, Q.lanes |= d, Ml |= d;
          r = o.action, Kl && l(u, r), u = o.hasEagerState ? o.eagerState : l(u, r);
        } else d = {
          lane: r,
          revertLane: o.revertLane,
          gesture: o.gesture,
          action: o.action,
          hasEagerState: o.hasEagerState,
          eagerState: o.eagerState,
          next: null
        }, s === null ? (c = s = d, i = u) : s = s.next = d, Q.lanes |= r, Ml |= r;
        o = o.next;
      } while (o !== null && o !== e);
      if (s === null ? i = u : s.next = c, !ue(u, t.memoizedState) && (xt = true, h && (l = Aa, l !== null))) throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [
      t.memoizedState,
      a.dispatch
    ];
  }
  function rc(t) {
    var e = pt(), l = e.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ue(u, e.memoizedState) || (xt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [
      u,
      a
    ];
  }
  function cm(t, e, l) {
    var a = Q, n = pt(), u = W;
    if (u) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else l = e();
    var i = !ue((at || n).memoizedState, l);
    if (i && (n.memoizedState = l, xt = true), n = n.queue, mr(om.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || vt !== null && vt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ha(9, {
        destroy: void 0
      }, rm.bind(null, a, n, l, e), null), nt === null) throw Error(w(349));
      u || Fe & 127 || sm(a, e, l);
    }
    return l;
  }
  function sm(t, e, l) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: l
    }, e = Q.updateQueue, e === null ? (e = wi(), Q.updateQueue = e, e.stores = [
      t
    ]) : (l = e.stores, l === null ? e.stores = [
      t
    ] : l.push(t));
  }
  function rm(t, e, l, a) {
    e.value = l, e.getSnapshot = a, fm(e) && dm(t);
  }
  function om(t, e, l) {
    return l(function() {
      fm(e) && dm(t);
    });
  }
  function fm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ue(t, l);
    } catch {
      return true;
    }
  }
  function dm(t) {
    var e = Pl(t, 2);
    e !== null && kt(e, t, 2);
  }
  function cs(t) {
    var e = Bt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Kl) {
        fl(true);
        try {
          l();
        } finally {
          fl(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pe,
      lastRenderedState: t
    }, e;
  }
  function mm(t, e, l, a) {
    return t.baseState = l, dr(t, at, typeof a == "function" ? a : Pe);
  }
  function Sp(t, e, l, a, n) {
    if (Di(t)) throw Error(w(485));
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
      Y.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, hm(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function hm(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = Y.T, i = {};
      Y.T = i;
      try {
        var c = l(n, a), s = Y.S;
        s !== null && s(i, c), Ho(t, e, c);
      } catch (o) {
        ss(t, e, o);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), Y.T = u;
      }
    } else try {
      u = l(n, a), Ho(t, e, u);
    } catch (o) {
      ss(t, e, o);
    }
  }
  function Ho(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      Uo(t, e, a);
    }, function(a) {
      return ss(t, e, a);
    }) : Uo(t, e, l);
  }
  function Uo(t, e, l) {
    e.status = "fulfilled", e.value = l, ym(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, hm(t, l)));
  }
  function ss(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, ym(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function ym(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function pm(t, e) {
    return e;
  }
  function Bo(t, e) {
    if (W) {
      var l = nt.formState;
      if (l !== null) {
        t: {
          var a = Q;
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
                ct = ge(n.nextSibling), a = n.data === "F!";
                break t;
              }
            }
            Al(a);
          }
          a = false;
        }
        a && (e = l[0]);
      }
    }
    return l = Bt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pm,
      lastRenderedState: e
    }, l.queue = a, l = Om.bind(null, Q, a), a.dispatch = l, a = cs(false), u = gr.bind(null, Q, false, a.queue), a = Bt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = Sp.bind(null, Q, n, u, l), n.dispatch = l, a.memoizedState = t, [
      e,
      l,
      false
    ];
  }
  function qo(t) {
    var e = pt();
    return gm(e, at, t);
  }
  function gm(t, e, l) {
    if (e = dr(t, e, pm)[0], t = Ou(Pe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = Wn(e);
    } catch (i) {
      throw i === Za ? Ci : i;
    }
    else a = e;
    e = pt();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (Q.flags |= 2048, Ha(9, {
      destroy: void 0
    }, xp.bind(null, n, l), null)), [
      a,
      u,
      t
    ];
  }
  function xp(t, e) {
    t.action = e;
  }
  function Lo(t) {
    var e = pt(), l = at;
    if (l !== null) return gm(e, l, t);
    pt(), e = e.memoizedState, l = pt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [
      e,
      a,
      false
    ];
  }
  function Ha(t, e, l, a) {
    return t = {
      tag: t,
      create: l,
      deps: a,
      inst: e,
      next: null
    }, e = Q.updateQueue, e === null && (e = wi(), Q.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function vm() {
    return pt().memoizedState;
  }
  function Du(t, e, l, a) {
    var n = Bt();
    Q.flags |= t, n.memoizedState = Ha(1 | e, {
      destroy: void 0
    }, l, a === void 0 ? null : a);
  }
  function Oi(t, e, l, a) {
    var n = pt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    at !== null && a !== null && ir(a, at.memoizedState.deps) ? n.memoizedState = Ha(e, u, l, a) : (Q.flags |= t, n.memoizedState = Ha(1 | e, u, l, a));
  }
  function Yo(t, e) {
    Du(8390656, 8, t, e);
  }
  function mr(t, e) {
    Oi(2048, 8, t, e);
  }
  function Ep(t) {
    Q.flags |= 4;
    var e = Q.updateQueue;
    if (e === null) e = wi(), Q.updateQueue = e, e.events = [
      t
    ];
    else {
      var l = e.events;
      l === null ? e.events = [
        t
      ] : l.push(t);
    }
  }
  function bm(t) {
    var e = pt().memoizedState;
    return Ep({
      ref: e,
      nextImpl: t
    }), function() {
      if (F & 2) throw Error(w(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Sm(t, e) {
    return Oi(4, 2, t, e);
  }
  function xm(t, e) {
    return Oi(4, 4, t, e);
  }
  function Em(t, e) {
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
  function Tm(t, e, l) {
    l = l != null ? l.concat([
      t
    ]) : null, Oi(4, 4, Em.bind(null, e, t), l);
  }
  function hr() {
  }
  function _m(t, e) {
    var l = pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && ir(e, a[1]) ? a[0] : (l.memoizedState = [
      t,
      e
    ], t);
  }
  function zm(t, e) {
    var l = pt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && ir(e, a[1])) return a[0];
    if (a = t(), Kl) {
      fl(true);
      try {
        t();
      } finally {
        fl(false);
      }
    }
    return l.memoizedState = [
      a,
      e
    ], a;
  }
  function yr(t, e, l) {
    return l === void 0 || Fe & 1073741824 && !($ & 261930) ? t.memoizedState = e : (t.memoizedState = l, t = mh(), Q.lanes |= t, Ml |= t, l);
  }
  function Am(t, e, l, a) {
    return ue(l, e) ? l : ja.current !== null ? (t = yr(t, l, a), ue(t, e) || (xt = true), t) : !(Fe & 42) || Fe & 1073741824 && !($ & 261930) ? (xt = true, t.memoizedState = l) : (t = mh(), Q.lanes |= t, Ml |= t, e);
  }
  function Rm(t, e, l, a, n) {
    var u = P.p;
    P.p = u !== 0 && 8 > u ? u : 8;
    var i = Y.T, c = {};
    Y.T = c, gr(t, false, e, l);
    try {
      var s = n(), o = Y.S;
      if (o !== null && o(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var h = gp(s, a);
        En(t, e, h, ne(t));
      } else En(t, e, a, ne(t));
    } catch (r) {
      En(t, e, {
        then: function() {
        },
        status: "rejected",
        reason: r
      }, ne());
    } finally {
      P.p = u, i !== null && c.types !== null && (i.types = c.types), Y.T = i;
    }
  }
  function Tp() {
  }
  function rs(t, e, l, a) {
    if (t.tag !== 5) throw Error(w(476));
    var n = Mm(t).queue;
    Rm(t, n, e, Ll, l === null ? Tp : function() {
      return Cm(t), l(a);
    });
  }
  function Mm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Ll,
      baseState: Ll,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pe,
        lastRenderedState: Ll
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
        lastRenderedReducer: Pe,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Cm(t) {
    var e = Mm(t);
    e.next === null && (e = t.alternate.memoizedState), En(t, e.next.queue, {}, ne());
  }
  function pr() {
    return Dt(Ln);
  }
  function wm() {
    return pt().memoizedState;
  }
  function Nm() {
    return pt().memoizedState;
  }
  function _p(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ne();
          t = vl(l);
          var a = bl(e, t, l);
          a !== null && (kt(a, e, l), bn(a, e, l)), e = {
            cache: er()
          }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function zp(t, e, l) {
    var a = ne();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Di(t) ? Dm(e, l) : (l = Fs(t, e, l, a), l !== null && (kt(l, t, a), jm(l, e, a)));
  }
  function Om(t, e, l) {
    var a = ne();
    En(t, e, l, a);
  }
  function En(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Di(t)) Dm(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var i = e.lastRenderedState, c = u(i, l);
        if (n.hasEagerState = true, n.eagerState = c, ue(c, i)) return Mi(t, e, n, 0), nt === null && Ri(), false;
      } catch {
      } finally {
      }
      if (l = Fs(t, e, n, a), l !== null) return kt(l, t, a), jm(l, e, a), true;
    }
    return false;
  }
  function gr(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Ar(),
      gesture: null,
      action: a,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Di(t)) {
      if (e) throw Error(w(479));
    } else e = Fs(t, l, a, 2), e !== null && kt(e, t, 2);
  }
  function Di(t) {
    var e = t.alternate;
    return t === Q || e !== null && e === Q;
  }
  function Dm(t, e) {
    Ma = ei = true;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function jm(t, e, l) {
    if (l & 4194048) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, bd(t, l);
    }
  }
  var Un = {
    readContext: Dt,
    use: Ni,
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
  Un.useEffectEvent = mt;
  var Hm = {
    readContext: Dt,
    use: Ni,
    useCallback: function(t, e) {
      return Bt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Dt,
    useEffect: Yo,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, Du(4194308, 4, Em.bind(null, e, t), l);
    },
    useLayoutEffect: function(t, e) {
      return Du(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Du(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Bt();
      e = e === void 0 ? null : e;
      var a = t();
      if (Kl) {
        fl(true);
        try {
          t();
        } finally {
          fl(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    },
    useReducer: function(t, e, l) {
      var a = Bt();
      if (l !== void 0) {
        var n = l(e);
        if (Kl) {
          fl(true);
          try {
            l(e);
          } finally {
            fl(false);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = zp.bind(null, Q, t), [
        a.memoizedState,
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
      t = cs(t);
      var e = t.queue, l = Om.bind(null, Q, e);
      return e.dispatch = l, [
        t.memoizedState,
        l
      ];
    },
    useDebugValue: hr,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return yr(l, t, e);
    },
    useTransition: function() {
      var t = cs(false);
      return t = Rm.bind(null, Q, t.queue, true, false), Bt().memoizedState = t, [
        false,
        t
      ];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = Q, n = Bt();
      if (W) {
        if (l === void 0) throw Error(w(407));
        l = l();
      } else {
        if (l = e(), nt === null) throw Error(w(349));
        $ & 127 || sm(a, e, l);
      }
      n.memoizedState = l;
      var u = {
        value: l,
        getSnapshot: e
      };
      return n.queue = u, Yo(om.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ha(9, {
        destroy: void 0
      }, rm.bind(null, a, u, l, e), null), l;
    },
    useId: function() {
      var t = Bt(), e = nt.identifierPrefix;
      if (W) {
        var l = Me, a = Re;
        l = (a & ~(1 << 32 - ae(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = li++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else l = vp++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: pr,
    useFormState: Bo,
    useActionState: Bo,
    useOptimistic: function(t) {
      var e = Bt();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = gr.bind(null, Q, true, l), l.dispatch = e, [
        t,
        e
      ];
    },
    useMemoCache: fr,
    useCacheRefresh: function() {
      return Bt().memoizedState = _p.bind(null, Q);
    },
    useEffectEvent: function(t) {
      var e = Bt(), l = {
        impl: t
      };
      return e.memoizedState = l, function() {
        if (F & 2) throw Error(w(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, vr = {
    readContext: Dt,
    use: Ni,
    useCallback: _m,
    useContext: Dt,
    useEffect: mr,
    useImperativeHandle: Tm,
    useInsertionEffect: Sm,
    useLayoutEffect: xm,
    useMemo: zm,
    useReducer: Ou,
    useRef: vm,
    useState: function() {
      return Ou(Pe);
    },
    useDebugValue: hr,
    useDeferredValue: function(t, e) {
      var l = pt();
      return Am(l, at.memoizedState, t, e);
    },
    useTransition: function() {
      var t = Ou(Pe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Wn(t),
        e
      ];
    },
    useSyncExternalStore: cm,
    useId: wm,
    useHostTransitionStatus: pr,
    useFormState: qo,
    useActionState: qo,
    useOptimistic: function(t, e) {
      var l = pt();
      return mm(l, at, t, e);
    },
    useMemoCache: fr,
    useCacheRefresh: Nm
  };
  vr.useEffectEvent = bm;
  var Um = {
    readContext: Dt,
    use: Ni,
    useCallback: _m,
    useContext: Dt,
    useEffect: mr,
    useImperativeHandle: Tm,
    useInsertionEffect: Sm,
    useLayoutEffect: xm,
    useMemo: zm,
    useReducer: rc,
    useRef: vm,
    useState: function() {
      return rc(Pe);
    },
    useDebugValue: hr,
    useDeferredValue: function(t, e) {
      var l = pt();
      return at === null ? yr(l, t, e) : Am(l, at.memoizedState, t, e);
    },
    useTransition: function() {
      var t = rc(Pe)[0], e = pt().memoizedState;
      return [
        typeof t == "boolean" ? t : Wn(t),
        e
      ];
    },
    useSyncExternalStore: cm,
    useId: wm,
    useHostTransitionStatus: pr,
    useFormState: Lo,
    useActionState: Lo,
    useOptimistic: function(t, e) {
      var l = pt();
      return at !== null ? mm(l, at, t, e) : (l.baseState = t, [
        t,
        l.queue.dispatch
      ]);
    },
    useMemoCache: fr,
    useCacheRefresh: Nm
  };
  Um.useEffectEvent = bm;
  function oc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : rt({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var os = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = ne(), n = vl(a);
      n.payload = e, l != null && (n.callback = l), e = bl(t, n, a), e !== null && (kt(e, t, a), bn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = ne(), n = vl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = bl(t, n, a), e !== null && (kt(e, t, a), bn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ne(), a = vl(l);
      a.tag = 2, e != null && (a.callback = e), e = bl(t, a, l), e !== null && (kt(e, t, l), bn(e, t, l));
    }
  };
  function Go(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Nn(l, a) || !Nn(n, u) : true;
  }
  function Xo(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && os.enqueueReplaceState(e, e.state, null);
  }
  function Jl(t, e) {
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
  function Bm(t) {
    Ju(t);
  }
  function qm(t) {
    console.error(t);
  }
  function Lm(t) {
    Ju(t);
  }
  function ai(t, e) {
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
  function Qo(t, e, l) {
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
  function fs(t, e, l) {
    return l = vl(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function() {
      ai(t, e);
    }, l;
  }
  function Ym(t) {
    return t = vl(t), t.tag = 3, t;
  }
  function Gm(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        Qo(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      Qo(e, l, a), typeof n != "function" && (Sl === null ? Sl = /* @__PURE__ */ new Set([
        this
      ]) : Sl.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Ap(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Va(e, l, n, true), l = ie.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return pe === null ? si() : l.alternate === null && ht === 0 && (ht = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Pu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
              a
            ]) : e.add(a), xc(t, a, n)), false;
          case 22:
            return l.flags |= 65536, a === Pu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                a
              ])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
              a
            ]) : l.add(a)), xc(t, a, n)), false;
        }
        throw Error(w(435, l.tag));
      }
      return xc(t, a, n), si(), false;
    }
    if (W) return e = ie.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Pc && (t = Error(w(422), {
      cause: a
    }), Dn(he(t, l)))) : (a !== Pc && (e = Error(w(423), {
      cause: a
    }), Dn(he(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = he(a, l), n = fs(t.stateNode, a, n), sc(t, n), ht !== 4 && (ht = 2)), false;
    var u = Error(w(520), {
      cause: a
    });
    if (u = he(u, l), zn === null ? zn = [
      u
    ] : zn.push(u), ht !== 4 && (ht = 2), e === null) return true;
    a = he(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = fs(l.stateNode, a, t), sc(l, t), false;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sl === null || !Sl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = Ym(n), Gm(n, t, l, a), sc(l, n), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var br = Error(w(461)), xt = false;
  function wt(t, e, l, a) {
    e.child = t === null ? em(e, null, l, a) : kl(e, t.child, l, a);
  }
  function Vo(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Zl(e), a = cr(t, e, l, i, u, n), c = sr(), t !== null && !xt ? (rr(t, e, n), Ie(t, e, n)) : (W && c && Is(e), e.flags |= 1, wt(t, e, a, n), e.child);
  }
  function Zo(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Ps(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Xm(t, e, u, a, n)) : (t = wu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Sr(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Nn, l(i, a) && t.ref === e.ref) return Ie(t, e, n);
    }
    return e.flags |= 1, t = Ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Xm(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Nn(u, a) && t.ref === e.ref) if (xt = false, e.pendingProps = a = u, Sr(t, n)) t.flags & 131072 && (xt = true);
      else return e.lanes = t.lanes, Ie(t, e, n);
    }
    return ds(t, e, l, a, n);
  }
  function Qm(t, e, l, a) {
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
        return ko(t, e, u, l, a);
      }
      if (l & 536870912) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Nu(e, u !== null ? u.cachePool : null), u !== null ? jo(e, u) : us(), nm(e);
      else return a = e.lanes = 536870912, ko(t, e, u !== null ? u.baseLanes | l : l, l, a);
    } else u !== null ? (Nu(e, u.cachePool), jo(e, u), rl(), e.memoizedState = null) : (t !== null && Nu(e, null), us(), rl());
    return wt(t, e, n, l), e.child;
  }
  function dn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function ko(t, e, l, a, n) {
    var u = lr();
    return u = u === null ? null : {
      parent: St._currentValue,
      pool: u
    }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && Nu(e, null), us(), nm(e), t !== null && Va(t, e, a, true), e.childLanes = n, null;
  }
  function ju(t, e) {
    return e = ni({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ko(t, e, l) {
    return kl(e, t.child, null, l), t = ju(e, e.pendingProps), t.flags |= 2, Pt(e), e.memoizedState = null, t;
  }
  function Rp(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (a.mode === "hidden") return t = ju(e, a), e.lanes = 536870912, dn(null, t);
        if (is(e), (t = ct) ? (t = Hh(t, ye), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? {
            id: Re,
            overflow: Me
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Jd(t), l.return = e, e.child = l, Ot = e, ct = null)) : t = null, t === null) throw Al(e);
        return e.lanes = 536870912, null;
      }
      return ju(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (is(e), n) if (e.flags & 256) e.flags &= -257, e = Ko(t, e, l);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(w(558));
      else if (xt || Va(t, e, l, false), n = (l & t.childLanes) !== 0, xt || n) {
        if (a = nt, a !== null && (i = Sd(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Pl(t, i), kt(a, t, i), br;
        si(), e = Ko(t, e, l);
      } else t = u.treeContext, ct = ge(i.nextSibling), Ot = e, W = true, gl = null, ye = false, t !== null && Wd(e, t), e = ju(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ke(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Hu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(w(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function ds(t, e, l, a, n) {
    return Zl(e), l = cr(t, e, l, a, void 0, n), a = sr(), t !== null && !xt ? (rr(t, e, n), Ie(t, e, n)) : (W && a && Is(e), e.flags |= 1, wt(t, e, l, n), e.child);
  }
  function Jo(t, e, l, a, n, u) {
    return Zl(e), e.updateQueue = null, l = im(e, a, l, n), um(t), a = sr(), t !== null && !xt ? (rr(t, e, u), Ie(t, e, u)) : (W && a && Is(e), e.flags |= 1, wt(t, e, l, u), e.child);
  }
  function $o(t, e, l, a, n) {
    if (Zl(e), e.stateNode === null) {
      var u = ba, i = l.contextType;
      typeof i == "object" && i !== null && (u = Dt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = os, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, nr(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Dt(i) : ba, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (oc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && os.enqueueReplaceState(u, u.state, null), xn(e, a, u, n), Sn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, s = Jl(l, c);
      u.props = s;
      var o = u.context, h = l.contextType;
      i = ba, typeof h == "object" && h !== null && (i = Dt(h));
      var r = l.getDerivedStateFromProps;
      h = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || o !== i) && Xo(e, u, a, i), il = false;
      var d = e.memoizedState;
      u.state = d, xn(e, a, u, n), Sn(), o = e.memoizedState, c || d !== o || il ? (typeof r == "function" && (oc(e, l, r, a), o = e.memoizedState), (s = il || Go(e, l, s, a, d, o, i)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = o), u.props = a, u.state = o, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
    } else {
      u = e.stateNode, as(t, e), i = e.memoizedProps, h = Jl(l, i), u.props = h, r = e.pendingProps, d = u.context, o = l.contextType, s = ba, typeof o == "object" && o !== null && (s = Dt(o)), c = l.getDerivedStateFromProps, (o = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || d !== s) && Xo(e, u, a, s), il = false, d = e.memoizedState, u.state = d, xn(e, a, u, n), Sn();
      var y = e.memoizedState;
      i !== r || d !== y || il || t !== null && t.dependencies !== null && Fu(t.dependencies) ? (typeof c == "function" && (oc(e, l, c, a), y = e.memoizedState), (h = il || Go(e, l, h, a, d, y, s) || t !== null && t.dependencies !== null && Fu(t.dependencies)) ? (o || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, y, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, y, s)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = y), u.props = a, u.state = y, u.context = s, a = h) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), a = false);
    }
    return u = a, Hu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = kl(e, t.child, null, n), e.child = kl(e, null, l, n)) : wt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Ie(t, e, n), t;
  }
  function Wo(t, e, l, a) {
    return Vl(), e.flags |= 256, wt(t, e, l, a), e.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(t) {
    return {
      baseLanes: t,
      cachePool: Pd()
    };
  }
  function mc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= te), t;
  }
  function Vm(t, e, l) {
    var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (yt.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (n ? sl(e) : rl(), (t = ct) ? (t = Hh(t, ye), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: zl !== null ? {
            id: Re,
            overflow: Me
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Jd(t), l.return = e, e.child = l, Ot = e, ct = null)) : t = null, t === null) throw Al(e);
        return As(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (rl(), n = e.mode, c = ni({
        mode: "hidden",
        children: c
      }, n), a = Yl(a, n, l, null), c.return = e, a.return = e, c.sibling = a, e.child = c, a = e.child, a.memoizedState = dc(l), a.childLanes = mc(t, i, l), e.memoizedState = fc, dn(null, a)) : (sl(e), ms(e, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) e.flags & 256 ? (sl(e), e.flags &= -257, e = hc(t, e, l)) : e.memoizedState !== null ? (rl(), e.child = t.child, e.flags |= 128, e = null) : (rl(), c = a.fallback, n = e.mode, a = ni({
        mode: "visible",
        children: a.children
      }, n), c = Yl(c, n, l, null), c.flags |= 2, a.return = e, c.return = e, a.sibling = c, e.child = a, kl(e, t.child, null, l), a = e.child, a.memoizedState = dc(l), a.childLanes = mc(t, i, l), e.memoizedState = fc, e = dn(null, a));
      else if (sl(e), As(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var o = i.dgst;
        i = o, a = Error(w(419)), a.stack = "", a.digest = i, Dn({
          value: a,
          source: null,
          stack: null
        }), e = hc(t, e, l);
      } else if (xt || Va(t, e, l, false), i = (l & t.childLanes) !== 0, xt || i) {
        if (i = nt, i !== null && (a = Sd(i, l), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Pl(t, a), kt(i, t, a), br;
        zs(c) || si(), e = hc(t, e, l);
      } else zs(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = s.treeContext, ct = ge(c.nextSibling), Ot = e, W = true, gl = null, ye = false, t !== null && Wd(e, t), e = ms(e, a.children), e.flags |= 4096);
      return e;
    }
    return n ? (rl(), c = a.fallback, n = e.mode, s = t.child, o = s.sibling, a = Ke(s, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = s.subtreeFlags & 65011712, o !== null ? c = Ke(o, c) : (c = Yl(c, n, l, null), c.flags |= 2), c.return = e, a.return = e, a.sibling = c, e.child = a, dn(null, a), a = e.child, c = t.child.memoizedState, c === null ? c = dc(l) : (n = c.cachePool, n !== null ? (s = St._currentValue, n = n.parent !== s ? {
      parent: s,
      pool: s
    } : n) : n = Pd(), c = {
      baseLanes: c.baseLanes | l,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = mc(t, i, l), e.memoizedState = fc, dn(t.child, a)) : (sl(e), l = t.child, t = l.sibling, l = Ke(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
      t
    ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function ms(t, e) {
    return e = ni({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e;
  }
  function ni(t, e) {
    return t = It(22, t, null, e), t.lanes = 0, t;
  }
  function hc(t, e, l) {
    return kl(e, t.child, null, l), t = ms(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Fo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), ts(t.return, e, l);
  }
  function yc(t, e, l, a, n, u) {
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
  function Zm(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = yt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, ut(yt, i), wt(t, e, a, l), a = W ? On : 0, !c && t !== null && t.flags & 128) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Fo(t, l, e);
      else if (t.tag === 19) Fo(t, l, e);
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
        for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && ti(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), yc(e, false, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && ti(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        yc(e, true, l, null, u, a);
        break;
      case "together":
        yc(e, false, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ie(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Ml |= e.lanes, !(l & e.childLanes)) if (t !== null) {
      if (Va(t, e, l, false), (l & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(w(153));
    if (e.child !== null) {
      for (t = e.child, l = Ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Ke(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Sr(t, e) {
    return t.lanes & e ? true : (t = t.dependencies, !!(t !== null && Fu(t)));
  }
  function Mp(t, e, l) {
    switch (e.tag) {
      case 3:
        Vu(e, e.stateNode.containerInfo), cl(e, St, t.memoizedState.cache), Vl();
        break;
      case 27:
      case 5:
        Gc(e);
        break;
      case 4:
        Vu(e, e.stateNode.containerInfo);
        break;
      case 10:
        cl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, is(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (sl(e), e.flags |= 128, null) : l & e.child.childLanes ? Vm(t, e, l) : (sl(e), t = Ie(t, e, l), t !== null ? t.sibling : null);
        sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Va(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
          if (a) return Zm(t, e, l);
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), ut(yt, yt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Qm(t, e, l, e.pendingProps);
      case 24:
        cl(e, St, t.memoizedState.cache);
    }
    return Ie(t, e, l);
  }
  function km(t, e, l) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) xt = true;
    else {
      if (!Sr(t, l) && !(e.flags & 128)) return xt = false, Mp(t, e, l);
      xt = !!(t.flags & 131072);
    }
    else xt = false, W && e.flags & 1048576 && $d(e, On, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Bl(e.elementType), e.type = t, typeof t == "function") Ps(t) ? (a = Jl(t, a), e.tag = 1, e = $o(null, e, t, a, l)) : (e.tag = 0, e = ds(null, e, t, a, l));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === qs) {
                e.tag = 11, e = Vo(null, e, t, a, l);
                break t;
              } else if (n === Ls) {
                e.tag = 14, e = Zo(null, e, t, a, l);
                break t;
              }
            }
            throw e = Lc(t) || t, Error(w(306, e, ""));
          }
        }
        return e;
      case 0:
        return ds(t, e, e.type, e.pendingProps, l);
      case 1:
        return a = e.type, n = Jl(a, e.pendingProps), $o(t, e, a, n, l);
      case 3:
        t: {
          if (Vu(e, e.stateNode.containerInfo), t === null) throw Error(w(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, as(t, e), xn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, cl(e, St, a), a !== u.cache && es(e, [
            St
          ], l, true), Sn(), a = i.element, u.isDehydrated) if (u = {
            element: a,
            isDehydrated: false,
            cache: i.cache
          }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
            e = Wo(t, e, a, l);
            break t;
          } else if (a !== n) {
            n = he(Error(w(424)), e), Dn(n), e = Wo(t, e, a, l);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (ct = ge(t.firstChild), Ot = e, W = true, gl = null, ye = true, l = em(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          }
          else {
            if (Vl(), a === n) {
              e = Ie(t, e, l);
              break t;
            }
            wt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Hu(t, e), t === null ? (l = vf(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : W || (l = e.type, t = e.pendingProps, a = di(pl.current).createElement(l), a[Nt] = e, a[Kt] = t, jt(a, l, t), At(a), e.stateNode = a) : e.memoizedState = vf(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Gc(e), t === null && W && (a = e.stateNode = Uh(e.type, e.pendingProps, pl.current), Ot = e, ye = true, n = ct, wl(e.type) ? (Rs = n, ct = ge(a.firstChild)) : ct = n), wt(t, e, e.pendingProps.children, l), Hu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((n = a = ct) && (a = ng(a, e.type, e.pendingProps, ye), a !== null ? (e.stateNode = a, Ot = e, ct = ge(a.firstChild), ye = false, n = true) : n = false), n || Al(e)), Gc(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, Ts(n, u) ? a = null : i !== null && Ts(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = cr(t, e, bp, null, null, l), Ln._currentValue = n), Hu(t, e), wt(t, e, a, l), e.child;
      case 6:
        return t === null && W && ((t = l = ct) && (l = ug(l, e.pendingProps, ye), l !== null ? (e.stateNode = l, Ot = e, ct = null, t = true) : t = false), t || Al(e)), null;
      case 13:
        return Vm(t, e, l);
      case 4:
        return Vu(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = kl(e, null, a, l) : wt(t, e, a, l), e.child;
      case 11:
        return Vo(t, e, e.type, e.pendingProps, l);
      case 7:
        return wt(t, e, e.pendingProps, l), e.child;
      case 8:
        return wt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return wt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return a = e.pendingProps, cl(e, e.type, a.value), wt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Zl(e), n = Dt(n), a = a(n), e.flags |= 1, wt(t, e, a, l), e.child;
      case 14:
        return Zo(t, e, e.type, e.pendingProps, l);
      case 15:
        return Xm(t, e, e.type, e.pendingProps, l);
      case 19:
        return Zm(t, e, l);
      case 31:
        return Rp(t, e, l);
      case 22:
        return Qm(t, e, l, e.pendingProps);
      case 24:
        return Zl(e), a = Dt(St), t === null ? (n = lr(), n === null && (n = nt, u = er(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
          parent: a,
          cache: n
        }, nr(e), cl(e, St, n)) : (t.lanes & l && (as(t, e), xn(e, null, null, l), Sn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), cl(e, St, a)) : (a = u.cache, cl(e, St, a), a !== n.cache && es(e, [
          St
        ], l, true))), wt(t, e, e.pendingProps.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(w(156, e.tag));
  }
  function Be(t) {
    t.flags |= 4;
  }
  function pc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
      else if (ph()) t.flags |= 8192;
      else throw Xl = Pu, ar;
    } else t.flags &= -16777217;
  }
  function Po(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Lh(e)) if (ph()) t.flags |= 8192;
    else throw Xl = Pu, ar;
  }
  function vu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? gd() : 536870912, t.lanes |= e, Ua |= e);
  }
  function an(t, e) {
    if (!W) switch (t.tailMode) {
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
  function Cp(t, e, l) {
    var a = e.pendingProps;
    switch (tr(e), e.tag) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Je(St), wa(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ia(e) ? Be(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, cc())), it(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Be(e), u !== null ? (it(e), Po(e, u)) : (it(e), pc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Be(e), it(e), Po(e, u)) : (it(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Be(e), it(e), pc(e, n, t, a, l)), null;
      case 27:
        if (Zu(e), l = pl.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(w(166));
            return it(e), null;
          }
          t = we.current, ia(e) ? Ro(e) : (t = Uh(n, a, l), e.stateNode = t, Be(e));
        }
        return it(e), null;
      case 5:
        if (Zu(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(w(166));
            return it(e), null;
          }
          if (u = we.current, ia(e)) Ro(e);
          else {
            var i = di(pl.current);
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
            u[Nt] = e, u[Kt] = a;
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
            t: switch (jt(u, n, a), n) {
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
        return it(e), pc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Be(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(w(166));
          if (t = pl.current, ia(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ot, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps;
            }
            t[Nt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || Oh(t.nodeValue, l)), t || Al(e, true);
          } else t = di(t).createTextNode(a), t[Nt] = e, e.stateNode = t;
        }
        return it(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = ia(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(w(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(w(557));
              t[Nt] = e;
            } else Vl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), t = false;
          } else l = cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
          if (!t) return e.flags & 256 ? (Pt(e), e) : (Pt(e), null);
          if (e.flags & 128) throw Error(w(558));
        }
        return it(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = ia(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(w(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
              n[Nt] = e;
            } else Vl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            it(e), n = false;
          } else n = cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
          if (!n) return e.flags & 256 ? (Pt(e), e) : (Pt(e), null);
        }
        return Pt(e), e.flags & 128 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), vu(e, e.updateQueue), it(e), null);
      case 4:
        return wa(), t === null && Rr(e.stateNode.containerInfo), it(e), null;
      case 10:
        return Je(e.type), it(e), null;
      case 19:
        if (Rt(yt), a = e.memoizedState, a === null) return it(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) an(a, false);
        else {
          if (ht !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null; ) {
            if (u = ti(t), u !== null) {
              for (e.flags |= 128, an(a, false), t = u.updateQueue, e.updateQueue = t, vu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Kd(l, t), l = l.sibling;
              return ut(yt, yt.current & 1 | 2), W && Xe(e, a.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          a.tail !== null && ee() > ii && (e.flags |= 128, n = true, an(a, false), e.lanes = 4194304);
        }
        else {
          if (!n) if (t = ti(u), t !== null) {
            if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, vu(e, t), an(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !W) return it(e), null;
          } else 2 * ee() - a.renderingStartTime > ii && l !== 536870912 && (e.flags |= 128, n = true, an(a, false), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ee(), t.sibling = null, l = yt.current, ut(yt, n ? l & 1 | 2 : l & 1), W && Xe(e, a.treeForkCount), t) : (it(e), null);
      case 22:
      case 23:
        return Pt(e), ur(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? l & 536870912 && !(e.flags & 128) && (it(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : it(e), l = e.updateQueue, l !== null && vu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && Rt(Gl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Je(St), it(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(w(156, e.tag));
  }
  function wp(t, e) {
    switch (tr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Je(St), wa(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Zu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Pt(e), e.alternate === null) throw Error(w(340));
          Vl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Pt(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(w(340));
          Vl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Rt(yt), null;
      case 4:
        return wa(), null;
      case 10:
        return Je(e.type), null;
      case 22:
      case 23:
        return Pt(e), ur(), t !== null && Rt(Gl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Je(St), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Km(t, e) {
    switch (tr(e), e.tag) {
      case 3:
        Je(St), wa();
        break;
      case 26:
      case 27:
      case 5:
        Zu(e);
        break;
      case 4:
        wa();
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
        Je(e.type);
        break;
      case 22:
      case 23:
        Pt(e), ur(), t !== null && Rt(Gl);
        break;
      case 24:
        Je(St);
    }
  }
  function Fn(t, e) {
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
      et(e, e.return, c);
    }
  }
  function Rl(t, e, l) {
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
              var s = l, o = c;
              try {
                o();
              } catch (h) {
                et(n, s, h);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (h) {
      et(e, e.return, h);
    }
  }
  function Jm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        am(e, l);
      } catch (a) {
        et(t, t.return, a);
      }
    }
  }
  function $m(t, e, l) {
    l.props = Jl(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      et(t, e, a);
    }
  }
  function Tn(t, e) {
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
      et(t, e, n);
    }
  }
  function Ce(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null) if (typeof a == "function") try {
      a();
    } catch (n) {
      et(t, e, n);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (n) {
      et(t, e, n);
    }
    else l.current = null;
  }
  function Wm(t) {
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
      et(t, t.return, n);
    }
  }
  function gc(t, e, l) {
    try {
      var a = t.stateNode;
      Pp(a, t.type, l, e), a[Kt] = e;
    } catch (n) {
      et(t, t.return, n);
    }
  }
  function Fm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && wl(t.type) || t.tag === 4;
  }
  function vc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && wl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function hs(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ze));
    else if (a !== 4 && (a === 27 && wl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (hs(t, e, l), t = t.sibling; t !== null; ) hs(t, e, l), t = t.sibling;
  }
  function ui(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && wl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (ui(t, e, l), t = t.sibling; t !== null; ) ui(t, e, l), t = t.sibling;
  }
  function Pm(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
      jt(e, a, l), e[Nt] = t, e[Kt] = l;
    } catch (u) {
      et(t, t.return, u);
    }
  }
  var Qe = false, bt = false, bc = false, Io = typeof WeakSet == "function" ? WeakSet : Set, zt = null;
  function Np(t, e) {
    if (t = t.containerInfo, xs = pi, t = Ld(t), $s(t)) {
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
          var i = 0, c = -1, s = -1, o = 0, h = 0, r = t, d = null;
          e: for (; ; ) {
            for (var y; r !== l || n !== 0 && r.nodeType !== 3 || (c = i + n), r !== u || a !== 0 && r.nodeType !== 3 || (s = i + a), r.nodeType === 3 && (i += r.nodeValue.length), (y = r.firstChild) !== null; ) d = r, r = y;
            for (; ; ) {
              if (r === t) break e;
              if (d === l && ++o === n && (c = i), d === u && ++h === a && (s = i), (y = r.nextSibling) !== null) break;
              r = d, d = r.parentNode;
            }
            r = y;
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
    for (Es = {
      focusedElem: t,
      selectionRange: l
    }, pi = false, zt = e; zt !== null; ) if (e = zt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, zt = t;
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
              var _ = Jl(l.type, n);
              t = a.getSnapshotBeforeUpdate(_, u), a.__reactInternalSnapshotBeforeUpdate = t;
            } catch (M) {
              et(l, l.return, M);
            }
          }
          break;
        case 3:
          if (t & 1024) {
            if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) _s(t);
            else if (l === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                _s(t);
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
          if (t & 1024) throw Error(w(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, zt = t;
        break;
      }
      zt = e.return;
    }
  }
  function Im(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Le(t, l), a & 4 && Fn(5, l);
        break;
      case 1:
        if (Le(t, l), a & 4) if (t = l.stateNode, e === null) try {
          t.componentDidMount();
        } catch (i) {
          et(l, l.return, i);
        }
        else {
          var n = Jl(l.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            et(l, l.return, i);
          }
        }
        a & 64 && Jm(l), a & 512 && Tn(l, l.return);
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
            am(t, e);
          } catch (i) {
            et(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Pm(l);
      case 26:
      case 5:
        Le(t, l), e === null && a & 4 && Wm(l), a & 512 && Tn(l, l.return);
        break;
      case 12:
        Le(t, l);
        break;
      case 31:
        Le(t, l), a & 4 && lh(t, l);
        break;
      case 13:
        Le(t, l), a & 4 && ah(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Yp.bind(null, l), ig(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Qe, !a) {
          e = e !== null && e.memoizedState !== null || bt, n = Qe;
          var u = bt;
          Qe = a, (bt = e) && !u ? Ye(t, l, (l.subtreeFlags & 8772) !== 0) : Le(t, l), Qe = n, bt = u;
        }
        break;
      case 30:
        break;
      default:
        Le(t, l);
    }
  }
  function th(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, th(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Qs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ft = null, Qt = false;
  function qe(t, e, l) {
    for (l = l.child; l !== null; ) eh(t, e, l), l = l.sibling;
  }
  function eh(t, e, l) {
    if (le && typeof le.onCommitFiberUnmount == "function") try {
      le.onCommitFiberUnmount(Vn, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        bt || Ce(l, e), qe(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        bt || Ce(l, e);
        var a = ft, n = Qt;
        wl(l.type) && (ft = l.stateNode, Qt = false), qe(t, e, l), Rn(l.stateNode), ft = a, Qt = n;
        break;
      case 5:
        bt || Ce(l, e);
      case 6:
        if (a = ft, n = Qt, ft = null, qe(t, e, l), ft = a, Qt = n, ft !== null) if (Qt) try {
          (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(l.stateNode);
        } catch (u) {
          et(l, e, u);
        }
        else try {
          ft.removeChild(l.stateNode);
        } catch (u) {
          et(l, e, u);
        }
        break;
      case 18:
        ft !== null && (Qt ? (t = ft, mf(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ya(t)) : mf(ft, l.stateNode));
        break;
      case 4:
        a = ft, n = Qt, ft = l.stateNode.containerInfo, Qt = true, qe(t, e, l), ft = a, Qt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rl(2, l, e), bt || Rl(4, l, e), qe(t, e, l);
        break;
      case 1:
        bt || (Ce(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && $m(l, e, a)), qe(t, e, l);
        break;
      case 21:
        qe(t, e, l);
        break;
      case 22:
        bt = (a = bt) || l.memoizedState !== null, qe(t, e, l), bt = a;
        break;
      default:
        qe(t, e, l);
    }
  }
  function lh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ya(t);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function ah(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Ya(t);
    } catch (l) {
      et(e, e.return, l);
    }
  }
  function Op(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Io()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Io()), e;
      default:
        throw Error(w(435, t.tag));
    }
  }
  function bu(t, e) {
    var l = Op(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Gp.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Yt(t, e) {
    var l = e.deletions;
    if (l !== null) for (var a = 0; a < l.length; a++) {
      var n = l[a], u = t, i = e, c = i;
      t: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (wl(c.type)) {
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
      if (ft === null) throw Error(w(160));
      eh(u, i, n), ft = null, Qt = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) nh(e, t), e = e.sibling;
  }
  var Ee = null;
  function nh(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Yt(e, t), Gt(t), a & 4 && (Rl(3, t, t.return), Fn(3, t), Rl(5, t, t.return));
        break;
      case 1:
        Yt(e, t), Gt(t), a & 512 && (bt || l === null || Ce(l, l.return)), a & 64 && Qe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Ee;
        if (Yt(e, t), Gt(t), a & 512 && (bt || l === null || Ce(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
            t: {
              a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
              e: switch (a) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[Kn] || u[Nt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), jt(u, a, l), u[Nt] = t, At(u), a = u;
                  break t;
                case "link":
                  var i = Sf("link", "href", n).get(a + (l.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), jt(u, a, l), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = Sf("meta", "content", n).get(a + (l.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      i.splice(c, 1);
                      break e;
                    }
                  }
                  u = n.createElement(a), jt(u, a, l), n.head.appendChild(u);
                  break;
                default:
                  throw Error(w(468, a));
              }
              u[Nt] = t, At(u), a = u;
            }
            t.stateNode = a;
          } else xf(n, t.type, t.stateNode);
          else t.stateNode = bf(n, a, t.memoizedProps);
          else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? xf(n, t.type, t.stateNode) : bf(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && gc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Yt(e, t), Gt(t), a & 512 && (bt || l === null || Ce(l, l.return)), l !== null && a & 4 && gc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (Yt(e, t), Gt(t), a & 512 && (bt || l === null || Ce(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Oa(n, "");
          } catch (_) {
            et(t, t.return, _);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, gc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (bc = true);
        break;
      case 6:
        if (Yt(e, t), Gt(t), a & 4) {
          if (t.stateNode === null) throw Error(w(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (_) {
            et(t, t.return, _);
          }
        }
        break;
      case 3:
        if (qu = null, n = Ee, Ee = mi(e.containerInfo), Yt(e, t), Ee = n, Gt(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ya(e.containerInfo);
        } catch (_) {
          et(t, t.return, _);
        }
        bc && (bc = false, uh(t));
        break;
      case 4:
        a = Ee, Ee = mi(t.stateNode.containerInfo), Yt(e, t), Gt(t), Ee = a;
        break;
      case 12:
        Yt(e, t), Gt(t);
        break;
      case 31:
        Yt(e, t), Gt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bu(t, a)));
        break;
      case 13:
        Yt(e, t), Gt(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ji = ee()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = l !== null && l.memoizedState !== null, o = Qe, h = bt;
        if (Qe = o || n, bt = h || s, Yt(e, t), bt = h, Qe = o, Gt(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || s || Qe || bt || ql(t)), l = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (l === null) {
              s = l = e;
              try {
                if (u = s.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var r = s.memoizedProps.style, d = r != null && r.hasOwnProperty("display") ? r.display : null;
                  c.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                }
              } catch (_) {
                et(s, s.return, _);
              }
            }
          } else if (e.tag === 6) {
            if (l === null) {
              s = e;
              try {
                s.stateNode.nodeValue = n ? "" : s.memoizedProps;
              } catch (_) {
                et(s, s.return, _);
              }
            }
          } else if (e.tag === 18) {
            if (l === null) {
              s = e;
              try {
                var y = s.stateNode;
                n ? hf(y, true) : hf(s.stateNode, false);
              } catch (_) {
                et(s, s.return, _);
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
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, bu(t, l))));
        break;
      case 19:
        Yt(e, t), Gt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bu(t, a)));
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
        for (var l, a = t.return; a !== null; ) {
          if (Fm(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(w(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = vc(t);
            ui(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (Oa(i, ""), l.flags &= -33);
            var c = vc(t);
            ui(t, c, i);
            break;
          case 3:
          case 4:
            var s = l.stateNode.containerInfo, o = vc(t);
            hs(t, o, s);
            break;
          default:
            throw Error(w(161));
        }
      } catch (h) {
        et(t, t.return, h);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function uh(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      uh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function Le(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Im(t, e.alternate, e), e = e.sibling;
  }
  function ql(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rl(4, e, e.return), ql(e);
          break;
        case 1:
          Ce(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && $m(e, e.return, l), ql(e);
          break;
        case 27:
          Rn(e.stateNode);
        case 26:
        case 5:
          Ce(e, e.return), ql(e);
          break;
        case 22:
          e.memoizedState === null && ql(e);
          break;
        case 30:
          ql(e);
          break;
        default:
          ql(e);
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
          Ye(n, u, l), Fn(4, u);
          break;
        case 1:
          if (Ye(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (o) {
            et(a, a.return, o);
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) lm(s[n], c);
            } catch (o) {
              et(a, a.return, o);
            }
          }
          l && i & 64 && Jm(u), Tn(u, u.return);
          break;
        case 27:
          Pm(u);
        case 26:
        case 5:
          Ye(n, u, l), l && a === null && i & 4 && Wm(u), Tn(u, u.return);
          break;
        case 12:
          Ye(n, u, l);
          break;
        case 31:
          Ye(n, u, l), l && i & 4 && lh(n, u);
          break;
        case 13:
          Ye(n, u, l), l && i & 4 && ah(n, u);
          break;
        case 22:
          u.memoizedState === null && Ye(n, u, l), Tn(u, u.return);
          break;
        case 30:
          break;
        default:
          Ye(n, u, l);
      }
      e = e.sibling;
    }
  }
  function xr(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && $n(l));
  }
  function Er(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && $n(t));
  }
  function xe(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ih(t, e, l, a), e = e.sibling;
  }
  function ih(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xe(t, e, l, a), n & 2048 && Fn(9, e);
        break;
      case 1:
        xe(t, e, l, a);
        break;
      case 3:
        xe(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && $n(t)));
        break;
      case 12:
        if (n & 2048) {
          xe(t, e, l, a), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (s) {
            et(e, e.return, s);
          }
        } else xe(t, e, l, a);
        break;
      case 31:
        xe(t, e, l, a);
        break;
      case 13:
        xe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? xe(t, e, l, a) : _n(t, e) : u._visibility & 2 ? xe(t, e, l, a) : (u._visibility |= 2, ra(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && xr(i, e);
        break;
      case 24:
        xe(t, e, l, a), n & 2048 && Er(e.alternate, e);
        break;
      default:
        xe(t, e, l, a);
    }
  }
  function ra(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var u = t, i = e, c = l, s = a, o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ra(u, i, c, s, n), Fn(8, i);
          break;
        case 23:
          break;
        case 22:
          var h = i.stateNode;
          i.memoizedState !== null ? h._visibility & 2 ? ra(u, i, c, s, n) : _n(u, i) : (h._visibility |= 2, ra(u, i, c, s, n)), n && o & 2048 && xr(i.alternate, i);
          break;
        case 24:
          ra(u, i, c, s, n), n && o & 2048 && Er(i.alternate, i);
          break;
        default:
          ra(u, i, c, s, n);
      }
      e = e.sibling;
    }
  }
  function _n(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var l = t, a = e, n = a.flags;
      switch (a.tag) {
        case 22:
          _n(l, a), n & 2048 && xr(a.alternate, a);
          break;
        case 24:
          _n(l, a), n & 2048 && Er(a.alternate, a);
          break;
        default:
          _n(l, a);
      }
      e = e.sibling;
    }
  }
  var mn = 8192;
  function ca(t, e, l) {
    if (t.subtreeFlags & mn) for (t = t.child; t !== null; ) ch(t, e, l), t = t.sibling;
  }
  function ch(t, e, l) {
    switch (t.tag) {
      case 26:
        ca(t, e, l), t.flags & mn && t.memoizedState !== null && vg(l, Ee, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ca(t, e, l);
        break;
      case 3:
      case 4:
        var a = Ee;
        Ee = mi(t.stateNode.containerInfo), ca(t, e, l), Ee = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = mn, mn = 16777216, ca(t, e, l), mn = a) : ca(t, e, l));
        break;
      default:
        ca(t, e, l);
    }
  }
  function sh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function nn(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        zt = a, oh(a, t);
      }
      sh(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) rh(t), t = t.sibling;
  }
  function rh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        nn(t), t.flags & 2048 && Rl(9, t, t.return);
        break;
      case 3:
        nn(t);
        break;
      case 12:
        nn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Uu(t)) : nn(t);
        break;
      default:
        nn(t);
    }
  }
  function Uu(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var a = e[l];
        zt = a, oh(a, t);
      }
      sh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Rl(8, e, e.return), Uu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Uu(e));
          break;
        default:
          Uu(e);
      }
      t = t.sibling;
    }
  }
  function oh(t, e) {
    for (; zt !== null; ) {
      var l = zt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Rl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $n(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, zt = a;
      else t: for (l = t; zt !== null; ) {
        a = zt;
        var n = a.sibling, u = a.return;
        if (th(a), a === l) {
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
  var Dp = {
    getCacheForType: function(t) {
      var e = Dt(St), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Dt(St).controller.signal;
    }
  }, jp = typeof WeakMap == "function" ? WeakMap : Map, F = 0, nt = null, J = null, $ = 0, tt = 0, Ft = null, ml = false, ka = false, Tr = false, tl = 0, ht = 0, Ml = 0, Ql = 0, _r = 0, te = 0, Ua = 0, zn = null, Vt = null, ys = false, ji = 0, fh = 0, ii = 1 / 0, ci = null, Sl = null, Et = 0, xl = null, Ba = null, $e = 0, ps = 0, gs = null, dh = null, An = 0, vs = null;
  function ne() {
    return F & 2 && $ !== 0 ? $ & -$ : Y.T !== null ? Ar() : xd();
  }
  function mh() {
    if (te === 0) if (!($ & 536870912) || W) {
      var t = fu;
      fu <<= 1, !(fu & 3932160) && (fu = 262144), te = t;
    } else te = 536870912;
    return t = ie.current, t !== null && (t.flags |= 32), te;
  }
  function kt(t, e, l) {
    (t === nt && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null) && (qa(t, 0), hl(t, $, te, false)), kn(t, l), (!(F & 2) || t !== nt) && (t === nt && (!(F & 2) && (Ql |= l), ht === 4 && hl(t, $, te, false)), De(t));
  }
  function hh(t, e, l) {
    if (F & 6) throw Error(w(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Zn(t, e), n = a ? Bp(t, e) : Sc(t, e, true), u = a;
    do {
      if (n === 0) {
        ka && !a && hl(t, e, 0, false);
        break;
      } else {
        if (l = t.current.alternate, u && !Hp(l)) {
          n = Sc(t, e, false), u = false;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
          else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              n = zn;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (qa(c, i).flags |= 256), i = Sc(c, i, false), i !== 2) {
                if (Tr && !s) {
                  c.errorRecoveryDisabledLanes |= u, Ql |= u, n = 4;
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
          qa(t, 0), hl(t, e, 0, true);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(w(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              hl(a, e, te, !ml);
              break t;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(w(329));
          }
          if ((e & 62914560) === e && (n = ji + 300 - ee(), 10 < n)) {
            if (hl(a, e, te, !ml), Ti(a, 0, true) !== 0) break t;
            $e = e, a.timeoutHandle = jh(tf.bind(null, a, l, Vt, ci, ys, e, te, Ql, Ua, ml, u, "Throttled", -0, 0), n);
            break t;
          }
          tf(a, l, Vt, ci, ys, e, te, Ql, Ua, ml, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    De(t);
  }
  function tf(t, e, l, a, n, u, i, c, s, o, h, r, d, y) {
    if (t.timeoutHandle = -1, r = e.subtreeFlags, r & 8192 || (r & 16785408) === 16785408) {
      r = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: Ze
      }, ch(e, u, r);
      var _ = (u & 62914560) === u ? ji - ee() : (u & 4194048) === u ? fh - ee() : 0;
      if (_ = bg(r, _), _ !== null) {
        $e = u, t.cancelPendingCommit = _(lf.bind(null, t, e, u, l, a, n, i, c, s, h, r, null, d, y)), hl(t, u, i, !o);
        return;
      }
    }
    lf(t, e, u, l, a, n, i, c, s);
  }
  function Hp(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = n.getSnapshot;
        n = n.value;
        try {
          if (!ue(u(), n)) return false;
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
  function hl(t, e, l, a) {
    e &= ~_r, e &= ~Ql, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ae(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && vd(t, l, e);
  }
  function Hi() {
    return F & 6 ? true : (Pn(0), false);
  }
  function zr() {
    if (J !== null) {
      if (tt === 0) var t = J.return;
      else t = J, ke = Il = null, or(t), Ra = null, jn = 0, t = J;
      for (; t !== null; ) Km(t.alternate, t), t = t.return;
      J = null;
    }
  }
  function qa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, eg(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), $e = 0, zr(), nt = t, J = l = Ke(t.current, null), $ = e, tt = 0, Ft = null, ml = false, ka = Zn(t, e), Tr = false, Ua = te = _r = Ql = Ml = ht = 0, Vt = zn = null, ys = false, e & 8 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
      var n = 31 - ae(a), u = 1 << n;
      e |= t[n], a &= ~u;
    }
    return tl = e, Ri(), l;
  }
  function yh(t, e) {
    Q = null, Y.H = Un, e === Za || e === Ci ? (e = Oo(), tt = 3) : e === ar ? (e = Oo(), tt = 4) : tt = e === br ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ft = e, J === null && (ht = 1, ai(t, he(e, t.current)));
  }
  function ph() {
    var t = ie.current;
    return t === null ? true : ($ & 4194048) === $ ? pe === null : ($ & 62914560) === $ || $ & 536870912 ? t === pe : false;
  }
  function gh() {
    var t = Y.H;
    return Y.H = Un, t === null ? Un : t;
  }
  function vh() {
    var t = Y.A;
    return Y.A = Dp, t;
  }
  function si() {
    ht = 4, ml || ($ & 4194048) !== $ && ie.current !== null || (ka = true), !(Ml & 134217727) && !(Ql & 134217727) || nt === null || hl(nt, $, te, false);
  }
  function Sc(t, e, l) {
    var a = F;
    F |= 2;
    var n = gh(), u = vh();
    (nt !== t || $ !== e) && (ci = null, qa(t, e)), e = false;
    var i = ht;
    t: do
      try {
        if (tt !== 0 && J !== null) {
          var c = J, s = Ft;
          switch (tt) {
            case 8:
              zr(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ie.current === null && (e = true);
              var o = tt;
              if (tt = 0, Ft = null, Ea(t, c, s, o), l && ka) {
                i = 0;
                break t;
              }
              break;
            default:
              o = tt, tt = 0, Ft = null, Ea(t, c, s, o);
          }
        }
        Up(), i = ht;
        break;
      } catch (h) {
        yh(t, h);
      }
    while (true);
    return e && t.shellSuspendCounter++, ke = Il = null, F = a, Y.H = n, Y.A = u, J === null && (nt = null, $ = 0, Ri()), i;
  }
  function Up() {
    for (; J !== null; ) bh(J);
  }
  function Bp(t, e) {
    var l = F;
    F |= 2;
    var a = gh(), n = vh();
    nt !== t || $ !== e ? (ci = null, ii = ee() + 500, qa(t, e)) : ka = Zn(t, e);
    t: do
      try {
        if (tt !== 0 && J !== null) {
          e = J;
          var u = Ft;
          e: switch (tt) {
            case 1:
              tt = 0, Ft = null, Ea(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (No(u)) {
                tt = 0, Ft = null, ef(e);
                break;
              }
              e = function() {
                tt !== 2 && tt !== 9 || nt !== t || (tt = 7), De(t);
              }, u.then(e, e);
              break t;
            case 3:
              tt = 7;
              break t;
            case 4:
              tt = 5;
              break t;
            case 7:
              No(u) ? (tt = 0, Ft = null, ef(e)) : (tt = 0, Ft = null, Ea(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (i ? Lh(i) : c.stateNode.complete) {
                    tt = 0, Ft = null;
                    var s = c.sibling;
                    if (s !== null) J = s;
                    else {
                      var o = c.return;
                      o !== null ? (J = o, Ui(o)) : J = null;
                    }
                    break e;
                  }
              }
              tt = 0, Ft = null, Ea(t, e, u, 5);
              break;
            case 6:
              tt = 0, Ft = null, Ea(t, e, u, 6);
              break;
            case 8:
              zr(), ht = 6;
              break t;
            default:
              throw Error(w(462));
          }
        }
        qp();
        break;
      } catch (h) {
        yh(t, h);
      }
    while (true);
    return ke = Il = null, Y.H = a, Y.A = n, F = l, J !== null ? 0 : (nt = null, $ = 0, Ri(), ht);
  }
  function qp() {
    for (; J !== null && !cy(); ) bh(J);
  }
  function bh(t) {
    var e = km(t.alternate, t, tl);
    t.memoizedProps = t.pendingProps, e === null ? Ui(t) : J = e;
  }
  function ef(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jo(l, e, e.pendingProps, e.type, void 0, $);
        break;
      case 11:
        e = Jo(l, e, e.pendingProps, e.type.render, e.ref, $);
        break;
      case 5:
        or(e);
      default:
        Km(l, e), e = J = Kd(e, tl), e = km(l, e, tl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Ui(t) : J = e;
  }
  function Ea(t, e, l, a) {
    ke = Il = null, or(e), Ra = null, jn = 0;
    var n = e.return;
    try {
      if (Ap(t, n, e, l, $)) {
        ht = 1, ai(t, he(l, t.current)), J = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw J = n, u;
      ht = 1, ai(t, he(l, t.current)), J = null;
      return;
    }
    e.flags & 32768 ? (W || a === 1 ? t = true : ka || $ & 536870912 ? t = false : (ml = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ie.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sh(e, t)) : Ui(e);
  }
  function Ui(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        Sh(e, ml);
        return;
      }
      t = e.return;
      var l = Cp(e.alternate, e, tl);
      if (l !== null) {
        J = l;
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
  function Sh(t, e) {
    do {
      var l = wp(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, J = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    ht = 6, J = null;
  }
  function lf(t, e, l, a, n, u, i, c, s) {
    t.cancelPendingCommit = null;
    do
      Bi();
    while (Et !== 0);
    if (F & 6) throw Error(w(327));
    if (e !== null) {
      if (e === t.current) throw Error(w(177));
      if (u = e.lanes | e.childLanes, u |= Ws, gy(t, l, u, i, c, s), t === nt && (J = nt = null, $ = 0), Ba = e, xl = t, $e = l, ps = u, gs = n, dh = a, e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null, t.callbackPriority = 0, Xp(ku, function() {
        return zh(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, e.subtreeFlags & 13878 || a) {
        a = Y.T, Y.T = null, n = P.p, P.p = 2, i = F, F |= 4;
        try {
          Np(t, e, l);
        } finally {
          F = i, P.p = n, Y.T = a;
        }
      }
      Et = 1, xh(), Eh(), Th();
    }
  }
  function xh() {
    if (Et === 1) {
      Et = 0;
      var t = xl, e = Ba, l = (e.flags & 13878) !== 0;
      if (e.subtreeFlags & 13878 || l) {
        l = Y.T, Y.T = null;
        var a = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          nh(e, t);
          var u = Es, i = Ld(t.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && qd(c.ownerDocument.documentElement, c)) {
            if (s !== null && $s(c)) {
              var o = s.start, h = s.end;
              if (h === void 0 && (h = o), "selectionStart" in c) c.selectionStart = o, c.selectionEnd = Math.min(h, c.value.length);
              else {
                var r = c.ownerDocument || document, d = r && r.defaultView || window;
                if (d.getSelection) {
                  var y = d.getSelection(), _ = c.textContent.length, M = Math.min(s.start, _), R = s.end === void 0 ? M : Math.min(s.end, _);
                  !y.extend && M > R && (i = R, R = M, M = i);
                  var f = _o(c, M), m = _o(c, R);
                  if (f && m && (y.rangeCount !== 1 || y.anchorNode !== f.node || y.anchorOffset !== f.offset || y.focusNode !== m.node || y.focusOffset !== m.offset)) {
                    var p = r.createRange();
                    p.setStart(f.node, f.offset), y.removeAllRanges(), M > R ? (y.addRange(p), y.extend(m.node, m.offset)) : (p.setEnd(m.node, m.offset), y.addRange(p));
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
              var x = r[c];
              x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
            }
          }
          pi = !!xs, Es = xs = null;
        } finally {
          F = n, P.p = a, Y.T = l;
        }
      }
      t.current = e, Et = 2;
    }
  }
  function Eh() {
    if (Et === 2) {
      Et = 0;
      var t = xl, e = Ba, l = (e.flags & 8772) !== 0;
      if (e.subtreeFlags & 8772 || l) {
        l = Y.T, Y.T = null;
        var a = P.p;
        P.p = 2;
        var n = F;
        F |= 4;
        try {
          Im(t, e.alternate, e);
        } finally {
          F = n, P.p = a, Y.T = l;
        }
      }
      Et = 3;
    }
  }
  function Th() {
    if (Et === 4 || Et === 3) {
      Et = 0, sy();
      var t = xl, e = Ba, l = $e, a = dh;
      e.subtreeFlags & 10256 || e.flags & 10256 ? Et = 5 : (Et = 0, Ba = xl = null, _h(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Sl = null), Xs(l), e = e.stateNode, le && typeof le.onCommitFiberRoot == "function") try {
        le.onCommitFiberRoot(Vn, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        e = Y.T, n = P.p, P.p = 2, Y.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          Y.T = e, P.p = n;
        }
      }
      $e & 3 && Bi(), De(t), n = t.pendingLanes, l & 261930 && n & 42 ? t === vs ? An++ : (An = 0, vs = t) : An = 0, Pn(0);
    }
  }
  function _h(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, $n(e)));
  }
  function Bi() {
    return xh(), Eh(), Th(), zh();
  }
  function zh() {
    if (Et !== 5) return false;
    var t = xl, e = ps;
    ps = 0;
    var l = Xs($e), a = Y.T, n = P.p;
    try {
      P.p = 32 > l ? 32 : l, Y.T = null, l = gs, gs = null;
      var u = xl, i = $e;
      if (Et = 0, Ba = xl = null, $e = 0, F & 6) throw Error(w(331));
      var c = F;
      if (F |= 4, rh(u.current), ih(u, u.current, i, l), F = c, Pn(0, false), le && typeof le.onPostCommitFiberRoot == "function") try {
        le.onPostCommitFiberRoot(Vn, u);
      } catch {
      }
      return true;
    } finally {
      P.p = n, Y.T = a, _h(t, e);
    }
  }
  function af(t, e, l) {
    e = he(l, e), e = fs(t.stateNode, e, 2), t = bl(t, e, 2), t !== null && (kn(t, 2), De(t));
  }
  function et(t, e, l) {
    if (t.tag === 3) af(t, t, l);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        af(e, t, l);
        break;
      } else if (e.tag === 1) {
        var a = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Sl === null || !Sl.has(a))) {
          t = he(l, t), l = Ym(2), a = bl(e, l, 2), a !== null && (Gm(l, a, e, t), kn(a, 2), De(a));
          break;
        }
      }
      e = e.return;
    }
  }
  function xc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new jp();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Tr = true, n.add(l), t = Lp.bind(null, t, e, l), e.then(t, t));
  }
  function Lp(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, nt === t && ($ & l) === l && (ht === 4 || ht === 3 && ($ & 62914560) === $ && 300 > ee() - ji ? !(F & 2) && qa(t, 0) : _r |= l, Ua === $ && (Ua = 0)), De(t);
  }
  function Ah(t, e) {
    e === 0 && (e = gd()), t = Pl(t, e), t !== null && (kn(t, e), De(t));
  }
  function Yp(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Ah(t, l);
  }
  function Gp(t, e) {
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
        throw Error(w(314));
    }
    a !== null && a.delete(e), Ah(t, l);
  }
  function Xp(t, e) {
    return Ys(t, e);
  }
  var ri = null, oa = null, bs = false, oi = false, Ec = false, yl = 0;
  function De(t) {
    t !== oa && t.next === null && (oa === null ? ri = oa = t : oa = oa.next = t), oi = true, bs || (bs = true, Vp());
  }
  function Pn(t, e) {
    if (!Ec && oi) {
      Ec = true;
      do
        for (var l = false, a = ri; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - ae(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = true, nf(a, u));
          } else u = $, u = Ti(a, a === nt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), !(u & 3) || Zn(a, u) || (l = true, nf(a, u));
          a = a.next;
        }
      while (l);
      Ec = false;
    }
  }
  function Qp() {
    Rh();
  }
  function Rh() {
    oi = bs = false;
    var t = 0;
    yl !== 0 && tg() && (t = yl);
    for (var e = ee(), l = null, a = ri; a !== null; ) {
      var n = a.next, u = Mh(a, e);
      u === 0 ? (a.next = null, l === null ? ri = n : l.next = n, n === null && (oa = l)) : (l = a, (t !== 0 || u & 3) && (oi = true)), a = n;
    }
    Et !== 0 && Et !== 5 || Pn(t), yl !== 0 && (yl = 0);
  }
  function Mh(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ae(u), c = 1 << i, s = n[i];
      s === -1 ? (!(c & l) || c & a) && (n[i] = py(c, e)) : s <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = nt, l = $, l = Ti(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Wi(a), t.callbackNode = null, t.callbackPriority = 0;
    if (!(l & 3) || Zn(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Wi(a), Xs(l)) {
        case 2:
        case 8:
          l = yd;
          break;
        case 32:
          l = ku;
          break;
        case 268435456:
          l = pd;
          break;
        default:
          l = ku;
      }
      return a = Ch.bind(null, t), l = Ys(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Wi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ch(t, e) {
    if (Et !== 0 && Et !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Bi() && t.callbackNode !== l) return null;
    var a = $;
    return a = Ti(t, t === nt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (hh(t, a, e), Mh(t, ee()), t.callbackNode != null && t.callbackNode === l ? Ch.bind(null, t) : null);
  }
  function nf(t, e) {
    if (Bi()) return null;
    hh(t, e, true);
  }
  function Vp() {
    lg(function() {
      F & 6 ? Ys(hd, Qp) : Rh();
    });
  }
  function Ar() {
    if (yl === 0) {
      var t = Da;
      t === 0 && (t = ou, ou <<= 1, !(ou & 261888) && (ou = 256)), yl = t;
    }
    return yl;
  }
  function uf(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ru("" + t);
  }
  function cf(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Zp(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = uf((n[Kt] || null).action), i = a.submitter;
      i && (e = (e = i[Kt] || null) ? uf(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new _i("action", "action", null, a, n);
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (yl !== 0) {
                  var s = i ? cf(n, i) : new FormData(n);
                  rs(l, {
                    pending: true,
                    data: s,
                    method: n.method,
                    action: u
                  }, null, s);
                }
              } else typeof u == "function" && (c.preventDefault(), s = i ? cf(n, i) : new FormData(n), rs(l, {
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
  for (var Tc = 0; Tc < Fc.length; Tc++) {
    var _c = Fc[Tc], kp = _c.toLowerCase(), Kp = _c[0].toUpperCase() + _c.slice(1);
    _e(kp, "on" + Kp);
  }
  _e(Gd, "onAnimationEnd");
  _e(Xd, "onAnimationIteration");
  _e(Qd, "onAnimationStart");
  _e("dblclick", "onDoubleClick");
  _e("focusin", "onFocus");
  _e("focusout", "onBlur");
  _e(rp, "onTransitionRun");
  _e(op, "onTransitionStart");
  _e(fp, "onTransitionCancel");
  _e(Vd, "onTransitionEnd");
  Na("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  Na("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  Na("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  Na("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  $l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  $l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  $l("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  $l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  $l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  $l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bn));
  function wh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e) for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i], s = c.instance, o = c.currentTarget;
          if (c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (h) {
            Ju(h);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < a.length; i++) {
          if (c = a[i], s = c.instance, o = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break t;
          u = c, n.currentTarget = o;
          try {
            u(n);
          } catch (h) {
            Ju(h);
          }
          n.currentTarget = null, u = s;
        }
      }
    }
  }
  function K(t, e) {
    var l = e[Qc];
    l === void 0 && (l = e[Qc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Nh(e, t, 2, false), l.add(a));
  }
  function zc(t, e, l) {
    var a = 0;
    e && (a |= 4), Nh(l, t, a, e);
  }
  var Su = "_reactListening" + Math.random().toString(36).slice(2);
  function Rr(t) {
    if (!t[Su]) {
      t[Su] = true, Ed.forEach(function(l) {
        l !== "selectionchange" && (Jp.has(l) || zc(l, false, t), zc(l, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Su] || (e[Su] = true, zc("selectionchange", false, e));
    }
  }
  function Nh(t, e, l, a) {
    switch (Vh(e)) {
      case 2:
        var n = Eg;
        break;
      case 8:
        n = Tg;
        break;
      default:
        n = Nr;
    }
    l = n.bind(null, e, l, t), n = void 0, !Jc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: true,
      passive: n
    }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, false);
  }
  function Ac(t, e, l, a, n) {
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
          if (i = ma(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            a = u = i;
            continue t;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    wd(function() {
      var o = u, h = Zs(l), r = [];
      t: {
        var d = Zd.get(t);
        if (d !== void 0) {
          var y = _i, _ = t;
          switch (t) {
            case "keypress":
              if (Cu(l) === 0) break t;
            case "keydown":
            case "keyup":
              y = Gy;
              break;
            case "focusin":
              _ = "focus", y = ec;
              break;
            case "focusout":
              _ = "blur", y = ec;
              break;
            case "beforeblur":
            case "afterblur":
              y = ec;
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
              y = ho;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = Cy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = Vy;
              break;
            case Gd:
            case Xd:
            case Qd:
              y = Oy;
              break;
            case Vd:
              y = ky;
              break;
            case "scroll":
            case "scrollend":
              y = Ry;
              break;
            case "wheel":
              y = Jy;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = jy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = po;
              break;
            case "toggle":
            case "beforetoggle":
              y = Wy;
          }
          var M = (e & 4) !== 0, R = !M && (t === "scroll" || t === "scrollend"), f = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var m = o, p; m !== null; ) {
            var x = m;
            if (p = x.stateNode, x = x.tag, x !== 5 && x !== 26 && x !== 27 || p === null || f === null || (x = Cn(m, f), x != null && M.push(qn(m, x, p))), R) break;
            m = m.return;
          }
          0 < M.length && (d = new y(d, _, null, l, h), r.push({
            event: d,
            listeners: M
          }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (d = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout", d && l !== Kc && (_ = l.relatedTarget || l.fromElement) && (ma(_) || _[Xa])) break t;
          if ((y || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (_ = l.relatedTarget || l.toElement, y = o, _ = _ ? ma(_) : null, _ !== null && (R = Qn(_), M = _.tag, _ !== R || M !== 5 && M !== 27 && M !== 6) && (_ = null)) : (y = null, _ = o), y !== _)) {
            if (M = ho, x = "onMouseLeave", f = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (M = po, x = "onPointerLeave", f = "onPointerEnter", m = "pointer"), R = y == null ? d : fn(y), p = _ == null ? d : fn(_), d = new M(x, m + "leave", y, l, h), d.target = R, d.relatedTarget = p, x = null, ma(h) === o && (M = new M(f, m + "enter", _, l, h), M.target = p, M.relatedTarget = R, x = M), R = x, y && _) e: {
              for (M = $p, f = y, m = _, p = 0, x = f; x; x = M(x)) p++;
              x = 0;
              for (var D = m; D; D = M(D)) x++;
              for (; 0 < p - x; ) f = M(f), p--;
              for (; 0 < x - p; ) m = M(m), x--;
              for (; p--; ) {
                if (f === m || m !== null && f === m.alternate) {
                  M = f;
                  break e;
                }
                f = M(f), m = M(m);
              }
              M = null;
            }
            else M = null;
            y !== null && sf(r, d, y, M, false), _ !== null && R !== null && sf(r, R, _, M, true);
          }
        }
        t: {
          if (d = o ? fn(o) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file") var S = So;
          else if (bo(d)) if (Ud) S = ip;
          else {
            S = np;
            var T = ap;
          }
          else y = d.nodeName, !y || y.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? o && Vs(o.elementType) && (S = So) : S = up;
          if (S && (S = S(t, o))) {
            Hd(r, S, l, h);
            break t;
          }
          T && T(t, d, o), t === "focusout" && o && d.type === "number" && o.memoizedProps.value != null && kc(d, "number", d.value);
        }
        switch (T = o ? fn(o) : window, t) {
          case "focusin":
            (bo(T) || T.contentEditable === "true") && (pa = T, $c = o, gn = null);
            break;
          case "focusout":
            gn = $c = pa = null;
            break;
          case "mousedown":
            Wc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wc = false, zo(r, l, h);
            break;
          case "selectionchange":
            if (sp) break;
          case "keydown":
          case "keyup":
            zo(r, l, h);
        }
        var C;
        if (Js) t: {
          switch (t) {
            case "compositionstart":
              var A = "onCompositionStart";
              break t;
            case "compositionend":
              A = "onCompositionEnd";
              break t;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break t;
          }
          A = void 0;
        }
        else ya ? Dd(t, l) && (A = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (A = "onCompositionStart");
        A && (Od && l.locale !== "ko" && (ya || A !== "onCompositionStart" ? A === "onCompositionEnd" && ya && (C = Nd()) : (dl = h, ks = "value" in dl ? dl.value : dl.textContent, ya = true)), T = fi(o, A), 0 < T.length && (A = new yo(A, t, null, l, h), r.push({
          event: A,
          listeners: T
        }), C ? A.data = C : (C = jd(l), C !== null && (A.data = C)))), (C = Py ? Iy(t, l) : tp(t, l)) && (A = fi(o, "onBeforeInput"), 0 < A.length && (T = new yo("onBeforeInput", "beforeinput", null, l, h), r.push({
          event: T,
          listeners: A
        }), T.data = C)), Zp(r, t, o, l, h);
      }
      wh(r, e);
    });
  }
  function qn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function fi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Cn(t, l), n != null && a.unshift(qn(t, n, u)), n = Cn(t, e), n != null && a.push(qn(t, n, u))), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function $p(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sf(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var c = l, s = c.alternate, o = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || o === null || (s = o, n ? (o = Cn(l, u), o != null && i.unshift(qn(l, o, s))) : n || (o = Cn(l, u), o != null && i.push(qn(l, o, s)))), l = l.return;
    }
    i.length !== 0 && t.push({
      event: e,
      listeners: i
    });
  }
  var Wp = /\r\n?/g, Fp = /\u0000|\uFFFD/g;
  function rf(t) {
    return (typeof t == "string" ? t : "" + t).replace(Wp, `
`).replace(Fp, "");
  }
  function Oh(t, e) {
    return e = rf(e), rf(t) === e;
  }
  function lt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Oa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Oa(t, "" + a);
        break;
      case "className":
        mu(t, "class", a);
        break;
      case "tabIndex":
        mu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(t, l, a);
        break;
      case "style":
        Cd(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          mu(t, "data", a);
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
        a = Ru("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (l === "formAction" ? (e !== "input" && lt(t, e, "name", n.name, n, null), lt(t, e, "formEncType", n.formEncType, n, null), lt(t, e, "formMethod", n.formMethod, n, null), lt(t, e, "formTarget", n.formTarget, n, null)) : (lt(t, e, "encType", n.encType, n, null), lt(t, e, "method", n.method, n, null), lt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Ru("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ze);
        break;
      case "onScroll":
        a != null && K("scroll", t);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(w(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(w(60));
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
        l = Ru("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
        K("beforetoggle", t), K("toggle", t), Au(t, "popover", a);
        break;
      case "xlinkActuate":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Au(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = zy.get(l) || l, Au(t, l, a));
    }
  }
  function Ss(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        Cd(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(w(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(w(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Oa(t, a) : (typeof a == "number" || typeof a == "bigint") && Oa(t, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", t);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ze);
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
        if (!Td.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Kt] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
            break t;
          }
          l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : Au(t, l, a);
        }
    }
  }
  function jt(t, e, l) {
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
        K("error", t), K("load", t);
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
              throw Error(w(137, e));
            default:
              lt(t, e, u, i, l, null);
          }
        }
        n && lt(t, e, "srcSet", l.srcSet, l, null), a && lt(t, e, "src", l.src, l, null);
        return;
      case "input":
        K("invalid", t);
        var c = u = i = n = null, s = null, o = null;
        for (a in l) if (l.hasOwnProperty(a)) {
          var h = l[a];
          if (h != null) switch (a) {
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
              if (h != null) throw Error(w(137, e));
              break;
            default:
              lt(t, e, a, h, l, null);
          }
        }
        Ad(t, u, c, s, o, i, n, false);
        return;
      case "select":
        K("invalid", t), a = i = u = null;
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
            lt(t, e, n, c, l, null);
        }
        e = u, l = i, t.multiple = !!a, e != null ? _a(t, !!a, e, false) : l != null && _a(t, !!a, l, true);
        return;
      case "textarea":
        K("invalid", t), u = n = a = null;
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
            if (c != null) throw Error(w(91));
            break;
          default:
            lt(t, e, i, c, l, null);
        }
        Md(t, a, n, u);
        return;
      case "option":
        for (s in l) if (l.hasOwnProperty(s) && (a = l[s], a != null)) switch (s) {
          case "selected":
            t.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            lt(t, e, s, a, l, null);
        }
        return;
      case "dialog":
        K("beforetoggle", t), K("toggle", t), K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Bn.length; a++) K(Bn[a], t);
        break;
      case "image":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", t), K("load", t);
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
        for (o in l) if (l.hasOwnProperty(o) && (a = l[o], a != null)) switch (o) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(w(137, e));
          default:
            lt(t, e, o, a, l, null);
        }
        return;
      default:
        if (Vs(e)) {
          for (h in l) l.hasOwnProperty(h) && (a = l[h], a !== void 0 && Ss(t, e, h, a, l, void 0));
          return;
        }
    }
    for (c in l) l.hasOwnProperty(c) && (a = l[c], a != null && lt(t, e, c, a, l, null));
  }
  function Pp(t, e, l, a) {
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
        for (y in l) {
          var r = l[y];
          if (l.hasOwnProperty(y) && r != null) switch (y) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = r;
            default:
              a.hasOwnProperty(y) || lt(t, e, y, null, a, r);
          }
        }
        for (var d in a) {
          var y = a[d];
          if (r = l[d], a.hasOwnProperty(d) && (y != null || r != null)) switch (d) {
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
              h = y;
              break;
            case "value":
              i = y;
              break;
            case "defaultValue":
              c = y;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (y != null) throw Error(w(137, e));
              break;
            default:
              y !== r && lt(t, e, d, y, a, r);
          }
        }
        Zc(t, i, c, s, o, h, u, n);
        return;
      case "select":
        y = i = c = d = null;
        for (u in l) if (s = l[u], l.hasOwnProperty(u) && s != null) switch (u) {
          case "value":
            break;
          case "multiple":
            y = s;
          default:
            a.hasOwnProperty(u) || lt(t, e, u, null, a, s);
        }
        for (n in a) if (u = a[n], s = l[n], a.hasOwnProperty(n) && (u != null || s != null)) switch (n) {
          case "value":
            d = u;
            break;
          case "defaultValue":
            c = u;
            break;
          case "multiple":
            i = u;
          default:
            u !== s && lt(t, e, n, u, a, s);
        }
        e = c, l = i, a = y, d != null ? _a(t, !!l, d, false) : !!a != !!l && (e != null ? _a(t, !!l, e, true) : _a(t, !!l, l ? [] : "", false));
        return;
      case "textarea":
        y = d = null;
        for (c in l) if (n = l[c], l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            lt(t, e, c, null, a, n);
        }
        for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            d = n;
            break;
          case "defaultValue":
            y = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(w(91));
            break;
          default:
            n !== u && lt(t, e, i, n, a, u);
        }
        Rd(t, d, y);
        return;
      case "option":
        for (var _ in l) if (d = l[_], l.hasOwnProperty(_) && d != null && !a.hasOwnProperty(_)) switch (_) {
          case "selected":
            t.selected = false;
            break;
          default:
            lt(t, e, _, null, a, d);
        }
        for (s in a) if (d = a[s], y = l[s], a.hasOwnProperty(s) && d !== y && (d != null || y != null)) switch (s) {
          case "selected":
            t.selected = d && typeof d != "function" && typeof d != "symbol";
            break;
          default:
            lt(t, e, s, d, a, y);
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
        for (var M in l) d = l[M], l.hasOwnProperty(M) && d != null && !a.hasOwnProperty(M) && lt(t, e, M, null, a, d);
        for (o in a) if (d = a[o], y = l[o], a.hasOwnProperty(o) && d !== y && (d != null || y != null)) switch (o) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(w(137, e));
            break;
          default:
            lt(t, e, o, d, a, y);
        }
        return;
      default:
        if (Vs(e)) {
          for (var R in l) d = l[R], l.hasOwnProperty(R) && d !== void 0 && !a.hasOwnProperty(R) && Ss(t, e, R, void 0, a, d);
          for (h in a) d = a[h], y = l[h], !a.hasOwnProperty(h) || d === y || d === void 0 && y === void 0 || Ss(t, e, h, d, a, y);
          return;
        }
    }
    for (var f in l) d = l[f], l.hasOwnProperty(f) && d != null && !a.hasOwnProperty(f) && lt(t, e, f, null, a, d);
    for (r in a) d = a[r], y = l[r], !a.hasOwnProperty(r) || d === y || d == null && y == null || lt(t, e, r, d, a, y);
  }
  function of(t) {
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
  function Ip() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && of(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
            var s = l[a], o = s.startTime;
            if (o > c) break;
            var h = s.transferSize, r = s.initiatorType;
            h && of(r) && (s = s.responseEnd, i += h * (s < c ? 1 : (c - o) / (s - o)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var xs = null, Es = null;
  function di(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ff(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dh(t, e) {
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
  function Ts(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = null;
  function tg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Rc ? false : (Rc = t, true) : (Rc = null, false);
  }
  var jh = typeof setTimeout == "function" ? setTimeout : void 0, eg = typeof clearTimeout == "function" ? clearTimeout : void 0, df = typeof Promise == "function" ? Promise : void 0, lg = typeof queueMicrotask == "function" ? queueMicrotask : typeof df < "u" ? function(t) {
    return df.resolve(null).then(t).catch(ag);
  } : jh;
  function ag(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function wl(t) {
    return t === "head";
  }
  function mf(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
        if (a === 0) {
          t.removeChild(n), Ya(e);
          return;
        }
        a--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
      else if (l === "html") Rn(t.ownerDocument.documentElement);
      else if (l === "head") {
        l = t.ownerDocument.head, Rn(l);
        for (var u = l.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[Kn] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
        }
      } else l === "body" && Rn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ya(e);
  }
  function hf(t, e) {
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
  function _s(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _s(l), Qs(l);
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
  function ng(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Kn]) switch (e) {
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
  function ug(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = ge(t.nextSibling), t === null)) return null;
    return t;
  }
  function Hh(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ge(t.nextSibling), t === null)) return null;
    return t;
  }
  function zs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function As(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function ig(t, e) {
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
  var Rs = null;
  function yf(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return ge(t.nextSibling);
          e--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function pf(t) {
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
  function Uh(t, e, l) {
    switch (e = di(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(w(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(w(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(w(454));
        return t;
      default:
        throw Error(w(451));
    }
  }
  function Rn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Qs(t);
  }
  var ve = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new Set();
  function mi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ll = P.d;
  P.d = {
    f: cg,
    r: sg,
    D: rg,
    C: og,
    L: fg,
    m: dg,
    X: hg,
    S: mg,
    M: yg
  };
  function cg() {
    var t = ll.f(), e = Hi();
    return t || e;
  }
  function sg(t) {
    var e = Qa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Cm(e) : ll.r(t);
  }
  var Ka = typeof document > "u" ? null : document;
  function Bh(t, e, l) {
    var a = Ka;
    if (a && typeof e == "string" && e) {
      var n = me(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), gf.has(n) || (gf.add(n), t = {
        rel: t,
        crossOrigin: l,
        href: e
      }, a.querySelector(n) === null && (e = a.createElement("link"), jt(e, "link", t), At(e), a.head.appendChild(e)));
    }
  }
  function rg(t) {
    ll.D(t), Bh("dns-prefetch", t, null);
  }
  function og(t, e) {
    ll.C(t, e), Bh("preconnect", t, e);
  }
  function fg(t, e, l) {
    ll.L(t, e, l);
    var a = Ka;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + me(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + me(l.imageSizes) + '"]')) : n += '[href="' + me(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = La(t);
          break;
        case "script":
          u = Ja(t);
      }
      ve.has(u) || (t = rt({
        rel: "preload",
        href: e === "image" && l && l.imageSrcSet ? void 0 : t,
        as: e
      }, l), ve.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(In(u)) || e === "script" && a.querySelector(tu(u)) || (e = a.createElement("link"), jt(e, "link", t), At(e), a.head.appendChild(e)));
    }
  }
  function dg(t, e) {
    ll.m(t, e);
    var l = Ka;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ja(t);
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
            if (l.querySelector(tu(u))) return;
        }
        a = l.createElement("link"), jt(a, "link", t), At(a), l.head.appendChild(a);
      }
    }
  }
  function mg(t, e, l) {
    ll.S(t, e, l);
    var a = Ka;
    if (a && t) {
      var n = Ta(a).hoistableStyles, u = La(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(In(u))) c.loading = 5;
        else {
          t = rt({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, l), (l = ve.get(u)) && Mr(t, l);
          var s = i = a.createElement("link");
          At(s), jt(s, "link", t), s._p = new Promise(function(o, h) {
            s.onload = o, s.onerror = h;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Bu(i, e, a);
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
  function hg(t, e) {
    ll.X(t, e);
    var l = Ka;
    if (l && t) {
      var a = Ta(l).hoistableScripts, n = Ja(t), u = a.get(n);
      u || (u = l.querySelector(tu(n)), u || (t = rt({
        src: t,
        async: true
      }, e), (e = ve.get(n)) && Cr(t, e), u = l.createElement("script"), At(u), jt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function yg(t, e) {
    ll.M(t, e);
    var l = Ka;
    if (l && t) {
      var a = Ta(l).hoistableScripts, n = Ja(t), u = a.get(n);
      u || (u = l.querySelector(tu(n)), u || (t = rt({
        src: t,
        async: true,
        type: "module"
      }, e), (e = ve.get(n)) && Cr(t, e), u = l.createElement("script"), At(u), jt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function vf(t, e, l, a) {
    var n = (n = pl.current) ? mi(n) : null;
    if (!n) throw Error(w(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = La(l.href), l = Ta(n).hoistableStyles, a = l.get(e), a || (a = {
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
          t = La(l.href);
          var u = Ta(n).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(t, i), (u = n.querySelector(In(t))) && !u._p && (i.instance = u, i.state.loading = 5), ve.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ve.set(t, l), u || pg(n, t, l, i.state))), e && a === null) throw Error(w(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(w(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ja(l), l = Ta(n).hoistableScripts, a = l.get(e), a || (a = {
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
        throw Error(w(444, t));
    }
  }
  function La(t) {
    return 'href="' + me(t) + '"';
  }
  function In(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function qh(t) {
    return rt({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function pg(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), jt(e, "link", l), At(e), t.head.appendChild(e));
  }
  function Ja(t) {
    return '[src="' + me(t) + '"]';
  }
  function tu(t) {
    return "script[async]" + t;
  }
  function bf(t, e, l) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
        if (a) return e.instance = a, At(a), a;
        var n = rt({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (t.ownerDocument || t).createElement("style"), At(a), jt(a, "style", n), Bu(a, l.precedence, t), e.instance = a;
      case "stylesheet":
        n = La(l.href);
        var u = t.querySelector(In(n));
        if (u) return e.state.loading |= 4, e.instance = u, At(u), u;
        a = qh(l), (n = ve.get(n)) && Mr(a, n), u = (t.ownerDocument || t).createElement("link"), At(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jt(u, "link", a), e.state.loading |= 4, Bu(u, l.precedence, t), e.instance = u;
      case "script":
        return u = Ja(l.src), (n = t.querySelector(tu(u))) ? (e.instance = n, At(n), n) : (a = l, (n = ve.get(u)) && (a = rt({}, l), Cr(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), At(n), jt(n, "link", a), t.head.appendChild(n), e.instance = n);
      case "void":
        return null;
      default:
        throw Error(w(443, e.type));
    }
    else e.type === "stylesheet" && !(e.state.loading & 4) && (a = e.instance, e.state.loading |= 4, Bu(a, l.precedence, t));
    return e.instance;
  }
  function Bu(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Mr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Cr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var qu = null;
  function Sf(t, e, l) {
    if (qu === null) {
      var a = /* @__PURE__ */ new Map(), n = qu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else n = qu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Kn] || u[Nt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function xf(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
  }
  function gg(t, e, l) {
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
  function Lh(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  function vg(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && !(l.state.loading & 4)) {
      if (l.instance === null) {
        var n = La(a.href), u = e.querySelector(In(n));
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = hi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, At(u);
          return;
        }
        u = e.ownerDocument || e, a = qh(a), (n = ve.get(n)) && Mr(a, n), u = u.createElement("link"), At(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), jt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && !(l.state.loading & 3) && (t.count++, l = hi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Mc = 0;
  function bg(t, e) {
    return t.stylesheets && t.count === 0 && Lu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Lu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Mc === 0 && (Mc = 62500 * Ip());
      var n = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Lu(t, t.stylesheets), t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, (t.imgBytes > Mc ? 50 : 800) + e);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function hi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Lu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var yi = null;
  function Lu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, yi = /* @__PURE__ */ new Map(), e.forEach(Sg, t), yi = null, hi.call(t));
  }
  function Sg(t, e) {
    if (!(e.state.loading & 4)) {
      var l = yi.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), yi.set(t, l);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = hi.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ln = {
    $$typeof: Ve,
    Provider: null,
    Consumer: null,
    _currentValue: Ll,
    _currentValue2: Ll,
    _threadCount: 0
  };
  function xg(t, e, l, a, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.hiddenUpdates = Fi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yh(t, e, l, a, n, u, i, c, s, o, h, r) {
    return t = new xg(t, e, l, i, s, o, h, r, c), e = 1, u === true && (e |= 24), u = It(3, null, null, e), t.current = u, u.stateNode = t, e = er(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, nr(u), t;
  }
  function Gh(t) {
    return t ? (t = ba, t) : ba;
  }
  function Xh(t, e, l, a, n, u) {
    n = Gh(n), a.context === null ? a.context = n : a.pendingContext = n, a = vl(e), a.payload = {
      element: l
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = bl(t, a, e), l !== null && (kt(l, t, e), bn(l, t, e));
  }
  function Ef(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function wr(t, e) {
    Ef(t, e), (t = t.alternate) && Ef(t, e);
  }
  function Qh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pl(t, 67108864);
      e !== null && kt(e, t, 67108864), wr(t, 67108864);
    }
  }
  function Tf(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ne();
      e = Gs(e);
      var l = Pl(t, e);
      l !== null && kt(l, t, e), wr(t, e);
    }
  }
  var pi = true;
  function Eg(t, e, l, a) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 2, Nr(t, e, l, a);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function Tg(t, e, l, a) {
    var n = Y.T;
    Y.T = null;
    var u = P.p;
    try {
      P.p = 8, Nr(t, e, l, a);
    } finally {
      P.p = u, Y.T = n;
    }
  }
  function Nr(t, e, l, a) {
    if (pi) {
      var n = Ms(a);
      if (n === null) Ac(t, e, a, gi, l), _f(t, a);
      else if (zg(n, t, e, l, a)) a.stopPropagation();
      else if (_f(t, a), e & 4 && -1 < _g.indexOf(t)) {
        for (; n !== null; ) {
          var u = Qa(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = Ul(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - ae(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  De(u), !(F & 6) && (ii = ee() + 500, Pn(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Pl(u, 2), c !== null && kt(c, u, 2), Hi(), wr(u, 2);
          }
          if (u = Ms(a), u === null && Ac(t, e, a, gi, l), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Ac(t, e, a, null, l);
    }
  }
  function Ms(t) {
    return t = Zs(t), Or(t);
  }
  var gi = null;
  function Or(t) {
    if (gi = null, t = ma(t), t !== null) {
      var e = Qn(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = rd(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = od(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return gi = t, null;
  }
  function Vh(t) {
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
        switch (ry()) {
          case hd:
            return 2;
          case yd:
            return 8;
          case ku:
          case oy:
            return 32;
          case pd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cs = false, El = null, Tl = null, _l = null, Yn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), ol = [], _g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function _f(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        El = null;
        break;
      case "dragenter":
      case "dragleave":
        Tl = null;
        break;
      case "mouseover":
      case "mouseout":
        _l = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(e.pointerId);
    }
  }
  function un(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [
        n
      ]
    }, e !== null && (e = Qa(e), e !== null && Qh(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function zg(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return El = un(El, t, e, l, a, n), true;
      case "dragenter":
        return Tl = un(Tl, t, e, l, a, n), true;
      case "mouseover":
        return _l = un(_l, t, e, l, a, n), true;
      case "pointerover":
        var u = n.pointerId;
        return Yn.set(u, un(Yn.get(u) || null, t, e, l, a, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, Gn.set(u, un(Gn.get(u) || null, t, e, l, a, n)), true;
    }
    return false;
  }
  function Zh(t) {
    var e = ma(t.target);
    if (e !== null) {
      var l = Qn(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = rd(l), e !== null) {
            t.blockedOn = e, io(t.priority, function() {
              Tf(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = od(l), e !== null) {
            t.blockedOn = e, io(t.priority, function() {
              Tf(l);
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
  function Yu(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Ms(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        Kc = a, l.target.dispatchEvent(a), Kc = null;
      } else return e = Qa(l), e !== null && Qh(e), t.blockedOn = l, false;
      e.shift();
    }
    return true;
  }
  function zf(t, e, l) {
    Yu(t) && l.delete(e);
  }
  function Ag() {
    Cs = false, El !== null && Yu(El) && (El = null), Tl !== null && Yu(Tl) && (Tl = null), _l !== null && Yu(_l) && (_l = null), Yn.forEach(zf), Gn.forEach(zf);
  }
  function xu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Cs || (Cs = true, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, Ag)));
  }
  var Eu = null;
  function Af(t) {
    Eu !== t && (Eu = t, Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, function() {
      Eu === t && (Eu = null);
      for (var e = 0; e < t.length; e += 3) {
        var l = t[e], a = t[e + 1], n = t[e + 2];
        if (typeof a != "function") {
          if (Or(a || l) === null) continue;
          break;
        }
        var u = Qa(l);
        u !== null && (t.splice(e, 3), e -= 3, rs(u, {
          pending: true,
          data: n,
          method: l.method,
          action: a
        }, a, n));
      }
    }));
  }
  function Ya(t) {
    function e(s) {
      return xu(s, t);
    }
    El !== null && xu(El, t), Tl !== null && xu(Tl, t), _l !== null && xu(_l, t), Yn.forEach(e), Gn.forEach(e);
    for (var l = 0; l < ol.length; l++) {
      var a = ol[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ol.length && (l = ol[0], l.blockedOn === null); ) Zh(l), l.blockedOn === null && ol.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
      var n = l[a], u = l[a + 1], i = n[Kt] || null;
      if (typeof u == "function") i || Af(l);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[Kt] || null) c = i.formAction;
          else if (Or(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? l[a + 1] = c : (l.splice(a, 3), a -= 3), Af(l);
      }
    }
  }
  function kh() {
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
  function Dr(t) {
    this._internalRoot = t;
  }
  qi.prototype.render = Dr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(w(409));
    var l = e.current, a = ne();
    Xh(l, a, t, e, null, null);
  };
  qi.prototype.unmount = Dr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Xh(t.current, 2, null, t, null, null), Hi(), e[Xa] = null;
    }
  };
  function qi(t) {
    this._internalRoot = t;
  }
  qi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = xd();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var l = 0; l < ol.length && e !== 0 && e < ol[l].priority; l++) ;
      ol.splice(l, 0, t), l === 0 && Zh(t);
    }
  };
  var Rf = cd.version;
  if (Rf !== "19.2.5") throw Error(w(527, Rf, "19.2.5"));
  P.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(w(188)) : (t = Object.keys(t).join(","), Error(w(268, t)));
    return t = ly(e), t = t !== null ? fd(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Rg = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tu.isDisabled && Tu.supportsFiber) try {
      Vn = Tu.inject(Rg), le = Tu;
    } catch {
    }
  }
  xi.createRoot = function(t, e) {
    if (!sd(t)) throw Error(w(299));
    var l = false, a = "", n = Bm, u = qm, i = Lm;
    return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Yh(t, 1, false, null, null, l, a, null, n, u, i, kh), t[Xa] = e.current, Rr(t), new Dr(e);
  };
  xi.hydrateRoot = function(t, e, l) {
    if (!sd(t)) throw Error(w(299));
    var a = false, n = "", u = Bm, i = qm, c = Lm, s = null;
    return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.formState !== void 0 && (s = l.formState)), e = Yh(t, 1, true, e, l ?? null, a, n, s, u, i, c, kh), e.context = Gh(null), l = e.current, a = ne(), a = Gs(a), n = vl(a), n.callback = null, bl(l, n, a), l = a, e.current.lanes = l, kn(e, l), De(e), t[Xa] = e.current, Rr(t), new qi(e);
  };
  xi.version = "19.2.5";
  function Kh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh);
    } catch (t) {
      console.error(t);
    }
  }
  Kh(), td.exports = xi;
  var Mg = td.exports;
  let Cg, wg, Mf;
  Cg = "modulepreload";
  wg = function(t) {
    return "/" + t;
  };
  Mf = {};
  Nl = function(e, l, a) {
    let n = Promise.resolve();
    if (l && l.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(l.map((s) => {
        if (s = wg(s), s in Mf) return;
        Mf[s] = true;
        const o = s.endsWith(".css"), h = o ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${h}`)) return;
        const r = document.createElement("link");
        if (r.rel = o ? "stylesheet" : Cg, o || (r.as = "script"), r.crossOrigin = "", r.href = s, c && r.setAttribute("nonce", c), document.head.appendChild(r), o) return new Promise((d, y) => {
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
      return e().catch(u);
    });
  };
  var Cf = "popstate";
  function wf(t) {
    return typeof t == "object" && t != null && "pathname" in t && "search" in t && "hash" in t && "state" in t && "key" in t;
  }
  function Ng(t = {}) {
    function e(a, n) {
      var _a2;
      let u = (_a2 = n.state) == null ? void 0 : _a2.masked, { pathname: i, search: c, hash: s } = u || a.location;
      return ws("", {
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
      return typeof n == "string" ? n : Xn(n);
    }
    return Dg(e, l, null, t);
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
  function Og() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Nf(t, e) {
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
  function ws(t, e, l = null, a, n) {
    return {
      pathname: typeof t == "string" ? t : t.pathname,
      search: "",
      hash: "",
      ...typeof e == "string" ? $a(e) : e,
      state: l,
      key: e && e.key || a || Og(),
      unstable_mask: n
    };
  }
  function Xn({ pathname: t = "/", search: e = "", hash: l = "" }) {
    return e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e), l && l !== "#" && (t += l.charAt(0) === "#" ? l : "#" + l), t;
  }
  function $a(t) {
    let e = {};
    if (t) {
      let l = t.indexOf("#");
      l >= 0 && (e.hash = t.substring(l), t = t.substring(0, l));
      let a = t.indexOf("?");
      a >= 0 && (e.search = t.substring(a), t = t.substring(0, a)), t && (e.pathname = t);
    }
    return e;
  }
  function Dg(t, e, l, a = {}) {
    let { window: n = document.defaultView, v5Compat: u = false } = a, i = n.history, c = "POP", s = null, o = h();
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
      let m = wf(R) ? R : ws(M.location, R, f);
      o = h() + 1;
      let p = Nf(m, o), x = M.createHref(m.unstable_mask || m);
      try {
        i.pushState(p, "", x);
      } catch (D) {
        if (D instanceof DOMException && D.name === "DataCloneError") throw D;
        n.location.assign(x);
      }
      u && s && s({
        action: c,
        location: M.location,
        delta: 1
      });
    }
    function y(R, f) {
      c = "REPLACE";
      let m = wf(R) ? R : ws(M.location, R, f);
      o = h();
      let p = Nf(m, o), x = M.createHref(m.unstable_mask || m);
      i.replaceState(p, "", x), u && s && s({
        action: c,
        location: M.location,
        delta: 0
      });
    }
    function _(R) {
      return jg(R);
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
        return n.addEventListener(Cf, r), s = R, () => {
          n.removeEventListener(Cf, r), s = null;
        };
      },
      createHref(R) {
        return e(n, R);
      },
      createURL: _,
      encodeLocation(R) {
        let f = _(R);
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
  function jg(t, e = false) {
    let l = "http://localhost";
    typeof window < "u" && (l = window.location.origin !== "null" ? window.location.origin : window.location.href), dt(l, "No window.location.(origin|href) available to create URL");
    let a = typeof t == "string" ? t : Xn(t);
    return a = a.replace(/ $/, "%20"), !e && a.startsWith("//") && (a = l + a), new URL(a, l);
  }
  function Jh(t, e, l = "/") {
    return Hg(t, e, l, false);
  }
  function Hg(t, e, l, a) {
    let n = typeof e == "string" ? $a(e) : e, u = el(n.pathname || "/", l);
    if (u == null) return null;
    let i = $h(t);
    Ug(i);
    let c = null;
    for (let s = 0; c == null && s < i.length; ++s) {
      let o = Kg(u);
      c = Zg(i[s], o, a);
    }
    return c;
  }
  function $h(t, e = [], l = [], a = "", n = false) {
    let u = (i, c, s = n, o) => {
      let h = {
        relativePath: o === void 0 ? i.path || "" : o,
        caseSensitive: i.caseSensitive === true,
        childrenIndex: c,
        route: i
      };
      if (h.relativePath.startsWith("/")) {
        if (!h.relativePath.startsWith(a) && s) return;
        dt(h.relativePath.startsWith(a), `Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(a.length);
      }
      let r = Ne([
        a,
        h.relativePath
      ]), d = l.concat(h);
      i.children && i.children.length > 0 && (dt(i.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${r}".`), $h(i.children, e, d, r, s)), !(i.path == null && !i.index) && e.push({
        path: r,
        score: Qg(r, i.index),
        routesMeta: d
      });
    };
    return t.forEach((i, c) => {
      var _a2;
      if (i.path === "" || !((_a2 = i.path) == null ? void 0 : _a2.includes("?"))) u(i, c);
      else for (let s of Wh(i.path)) u(i, c, true, s);
    }), e;
  }
  function Wh(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [l, ...a] = e, n = l.endsWith("?"), u = l.replace(/\?$/, "");
    if (a.length === 0) return n ? [
      u,
      ""
    ] : [
      u
    ];
    let i = Wh(a.join("/")), c = [];
    return c.push(...i.map((s) => s === "" ? u : [
      u,
      s
    ].join("/"))), n && c.push(...i), c.map((s) => t.startsWith("/") && s === "" ? "/" : s);
  }
  function Ug(t) {
    t.sort((e, l) => e.score !== l.score ? l.score - e.score : Vg(e.routesMeta.map((a) => a.childrenIndex), l.routesMeta.map((a) => a.childrenIndex)));
  }
  var Bg = /^:[\w-]+$/, qg = 3, Lg = 2, Yg = 1, Gg = 10, Xg = -2, Of = (t) => t === "*";
  function Qg(t, e) {
    let l = t.split("/"), a = l.length;
    return l.some(Of) && (a += Xg), e && (a += Lg), l.filter((n) => !Of(n)).reduce((n, u) => n + (Bg.test(u) ? qg : u === "" ? Yg : Gg), a);
  }
  function Vg(t, e) {
    return t.length === e.length && t.slice(0, -1).every((a, n) => a === e[n]) ? t[t.length - 1] - e[e.length - 1] : 0;
  }
  function Zg(t, e, l = false) {
    let { routesMeta: a } = t, n = {}, u = "/", i = [];
    for (let c = 0; c < a.length; ++c) {
      let s = a[c], o = c === a.length - 1, h = u === "/" ? e : e.slice(u.length) || "/", r = vi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: o
      }, h), d = s.route;
      if (!r && o && l && !a[a.length - 1].route.index && (r = vi({
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: false
      }, h)), !r) return null;
      Object.assign(n, r.params), i.push({
        params: n,
        pathname: Ne([
          u,
          r.pathname
        ]),
        pathnameBase: Fg(Ne([
          u,
          r.pathnameBase
        ])),
        route: d
      }), r.pathnameBase !== "/" && (u = Ne([
        u,
        r.pathnameBase
      ]));
    }
    return i;
  }
  function vi(t, e) {
    typeof t == "string" && (t = {
      path: t,
      caseSensitive: false,
      end: true
    });
    let [l, a] = kg(t.path, t.caseSensitive, t.end), n = e.match(l);
    if (!n) return null;
    let u = n[0], i = u.replace(/(.)\/+$/, "$1"), c = n.slice(1);
    return {
      params: a.reduce((o, { paramName: h, isOptional: r }, d) => {
        if (h === "*") {
          let _ = c[d] || "";
          i = u.slice(0, u.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const y = c[d];
        return r && !y ? o[h] = void 0 : o[h] = (y || "").replace(/%2F/g, "/"), o;
      }, {}),
      pathname: u,
      pathnameBase: i,
      pattern: t
    };
  }
  function kg(t, e = false, l = true) {
    Te(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let a = [], n = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, c, s, o, h) => {
      if (a.push({
        paramName: c,
        isOptional: s != null
      }), s) {
        let r = h.charAt(o + i.length);
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
  function Kg(t) {
    try {
      return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
    } catch (e) {
      return Te(false, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`), t;
    }
  }
  function el(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let l = e.endsWith("/") ? e.length - 1 : e.length, a = t.charAt(l);
    return a && a !== "/" ? null : t.slice(l) || "/";
  }
  var Jg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  function $g(t, e = "/") {
    let { pathname: l, search: a = "", hash: n = "" } = typeof t == "string" ? $a(t) : t, u;
    return l ? (l = l.replace(/\/\/+/g, "/"), l.startsWith("/") ? u = Df(l.substring(1), "/") : u = Df(l, e)) : u = e, {
      pathname: u,
      search: Pg(a),
      hash: Ig(n)
    };
  }
  function Df(t, e) {
    let l = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach((n) => {
      n === ".." ? l.length > 1 && l.pop() : n !== "." && l.push(n);
    }), l.length > 1 ? l.join("/") : "/";
  }
  function Cc(t, e, l, a) {
    return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Wg(t) {
    return t.filter((e, l) => l === 0 || e.route.path && e.route.path.length > 0);
  }
  function jr(t) {
    let e = Wg(t);
    return e.map((l, a) => a === e.length - 1 ? l.pathname : l.pathnameBase);
  }
  function Li(t, e, l, a = false) {
    let n;
    typeof t == "string" ? n = $a(t) : (n = {
      ...t
    }, dt(!n.pathname || !n.pathname.includes("?"), Cc("?", "pathname", "search", n)), dt(!n.pathname || !n.pathname.includes("#"), Cc("#", "pathname", "hash", n)), dt(!n.search || !n.search.includes("#"), Cc("#", "search", "hash", n)));
    let u = t === "" || n.pathname === "", i = u ? "/" : n.pathname, c;
    if (i == null) c = l;
    else {
      let r = e.length - 1;
      if (!a && i.startsWith("..")) {
        let d = i.split("/");
        for (; d[0] === ".."; ) d.shift(), r -= 1;
        n.pathname = d.join("/");
      }
      c = r >= 0 ? e[r] : "/";
    }
    let s = $g(n, c), o = i && i !== "/" && i.endsWith("/"), h = (u || i === ".") && l.endsWith("/");
    return !s.pathname.endsWith("/") && (o || h) && (s.pathname += "/"), s;
  }
  var Ne = (t) => t.join("/").replace(/\/\/+/g, "/"), Fg = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), Pg = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, Ig = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, tv = class {
    constructor(t, e, l, a = false) {
      this.status = t, this.statusText = e || "", this.internal = a, l instanceof Error ? (this.data = l.toString(), this.error = l) : this.data = l;
    }
  };
  function ev(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
  }
  function lv(t) {
    return t.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var Fh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function Ph(t, e) {
    let l = t;
    if (typeof l != "string" || !Jg.test(l)) return {
      absoluteURL: void 0,
      isExternal: false,
      to: l
    };
    let a = l, n = false;
    if (Fh) try {
      let u = new URL(window.location.href), i = l.startsWith("//") ? new URL(u.protocol + l) : new URL(l), c = el(i.pathname, e);
      i.origin === u.origin && c != null ? l = c + i.search + i.hash : n = true;
    } catch {
      Te(false, `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return {
      absoluteURL: a,
      isExternal: n,
      to: l
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Ih = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(Ih);
  var av = [
    "GET",
    ...Ih
  ];
  new Set(av);
  var Wa = b.createContext(null);
  Wa.displayName = "DataRouter";
  var Yi = b.createContext(null);
  Yi.displayName = "DataRouterState";
  var t0 = b.createContext(false);
  function nv() {
    return b.useContext(t0);
  }
  var e0 = b.createContext({
    isTransitioning: false
  });
  e0.displayName = "ViewTransition";
  var uv = b.createContext(/* @__PURE__ */ new Map());
  uv.displayName = "Fetchers";
  var iv = b.createContext(null);
  iv.displayName = "Await";
  var ce = b.createContext(null);
  ce.displayName = "Navigation";
  var eu = b.createContext(null);
  eu.displayName = "Location";
  var ze = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  ze.displayName = "Route";
  var Hr = b.createContext(null);
  Hr.displayName = "RouteError";
  var l0 = "REACT_ROUTER_ERROR", cv = "REDIRECT", sv = "ROUTE_ERROR_RESPONSE";
  function rv(t) {
    if (t.startsWith(`${l0}:${cv}:{`)) try {
      let e = JSON.parse(t.slice(28));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.location == "string" && typeof e.reloadDocument == "boolean" && typeof e.replace == "boolean") return e;
    } catch {
    }
  }
  function ov(t) {
    if (t.startsWith(`${l0}:${sv}:{`)) try {
      let e = JSON.parse(t.slice(40));
      if (typeof e == "object" && e && typeof e.status == "number" && typeof e.statusText == "string") return new tv(e.status, e.statusText, e.data);
    } catch {
    }
  }
  function fv(t, { relative: e } = {}) {
    dt(Fa(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: l, navigator: a } = b.useContext(ce), { hash: n, pathname: u, search: i } = lu(t, {
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
  function Fa() {
    return b.useContext(eu) != null;
  }
  function je() {
    return dt(Fa(), "useLocation() may be used only in the context of a <Router> component."), b.useContext(eu).location;
  }
  var a0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function n0(t) {
    b.useContext(ce).static || b.useLayoutEffect(t);
  }
  u0 = function() {
    let { isDataRoute: t } = b.useContext(ze);
    return t ? zv() : dv();
  };
  function dv() {
    dt(Fa(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = b.useContext(Wa), { basename: e, navigator: l } = b.useContext(ce), { matches: a } = b.useContext(ze), { pathname: n } = je(), u = JSON.stringify(jr(a)), i = b.useRef(false);
    return n0(() => {
      i.current = true;
    }), b.useCallback((s, o = {}) => {
      if (Te(i.current, a0), !i.current) return;
      if (typeof s == "number") {
        l.go(s);
        return;
      }
      let h = Li(s, JSON.parse(u), n, o.relative === "path");
      t == null && e !== "/" && (h.pathname = h.pathname === "/" ? e : Ne([
        e,
        h.pathname
      ])), (o.replace ? l.replace : l.push)(h, o.state, o);
    }, [
      e,
      l,
      u,
      n,
      t
    ]);
  }
  b.createContext(null);
  mv = function() {
    let { matches: t } = b.useContext(ze), e = t[t.length - 1];
    return e ? e.params : {};
  };
  function lu(t, { relative: e } = {}) {
    let { matches: l } = b.useContext(ze), { pathname: a } = je(), n = JSON.stringify(jr(l));
    return b.useMemo(() => Li(t, JSON.parse(n), a, e === "path"), [
      t,
      n,
      a,
      e
    ]);
  }
  function hv(t, e) {
    return i0(t, e);
  }
  function i0(t, e, l) {
    var _a2;
    dt(Fa(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: a } = b.useContext(ce), { matches: n } = b.useContext(ze), u = n[n.length - 1], i = u ? u.params : {}, c = u ? u.pathname : "/", s = u ? u.pathnameBase : "/", o = u && u.route;
    {
      let R = o && o.path || "";
      s0(c, !o || R.endsWith("*") || R.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`);
    }
    let h = je(), r;
    if (e) {
      let R = typeof e == "string" ? $a(e) : e;
      dt(s === "/" || ((_a2 = R.pathname) == null ? void 0 : _a2.startsWith(s)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${R.pathname}" was given in the \`location\` prop.`), r = R;
    } else r = h;
    let d = r.pathname || "/", y = d;
    if (s !== "/") {
      let R = s.replace(/^\//, "").split("/");
      y = "/" + d.replace(/^\//, "").split("/").slice(R.length).join("/");
    }
    let _ = Jh(t, {
      pathname: y
    });
    Te(o || _ != null, `No routes matched location "${r.pathname}${r.search}${r.hash}" `), Te(_ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0, `Matched leaf route at location "${r.pathname}${r.search}${r.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = bv(_ && _.map((R) => Object.assign({}, R, {
      params: Object.assign({}, i, R.params),
      pathname: Ne([
        s,
        a.encodeLocation ? a.encodeLocation(R.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathname
      ]),
      pathnameBase: R.pathnameBase === "/" ? s : Ne([
        s,
        a.encodeLocation ? a.encodeLocation(R.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathnameBase
      ])
    })), n, l);
    return e && M ? b.createElement(eu.Provider, {
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
  function yv() {
    let t = _v(), e = ev(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), l = t instanceof Error ? t.stack : null, a = "rgba(200,200,200, 0.5)", n = {
      padding: "0.5rem",
      backgroundColor: a
    }, u = {
      padding: "2px 4px",
      backgroundColor: a
    }, i = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t), i = b.createElement(b.Fragment, null, b.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), b.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", b.createElement("code", {
      style: u
    }, "ErrorBoundary"), " or", " ", b.createElement("code", {
      style: u
    }, "errorElement"), " prop on your route.")), b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, e), l ? b.createElement("pre", {
      style: n
    }, l) : null, i);
  }
  var pv = b.createElement(yv, null), c0 = class extends b.Component {
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
        const l = ov(t.digest);
        l && (t = l);
      }
      let e = t !== void 0 ? b.createElement(ze.Provider, {
        value: this.props.routeContext
      }, b.createElement(Hr.Provider, {
        value: t,
        children: this.props.component
      })) : this.props.children;
      return this.context ? b.createElement(gv, {
        error: t
      }, e) : e;
    }
  };
  c0.contextType = t0;
  var wc = /* @__PURE__ */ new WeakMap();
  function gv({ children: t, error: e }) {
    let { basename: l } = b.useContext(ce);
    if (typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      let a = rv(e.digest);
      if (a) {
        let n = wc.get(e);
        if (n) throw n;
        let u = Ph(a.location, l);
        if (Fh && !wc.get(e)) if (u.isExternal || a.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const i = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {
            replace: a.replace
          }));
          throw wc.set(e, i), i;
        }
        return b.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${u.absoluteURL || u.to}`
        });
      }
    }
    return t;
  }
  function vv({ routeContext: t, match: e, children: l }) {
    let a = b.useContext(Wa);
    return a && a.static && a.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = e.route.id), b.createElement(ze.Provider, {
      value: t
    }, l);
  }
  function bv(t, e = [], l) {
    let a = l == null ? void 0 : l.state;
    if (t == null) {
      if (!a) return null;
      if (a.errors) t = a.matches;
      else if (e.length === 0 && !a.initialized && a.matches.length > 0) t = a.matches;
      else return null;
    }
    let n = t, u = a == null ? void 0 : a.errors;
    if (u != null) {
      let h = n.findIndex((r) => r.route.id && (u == null ? void 0 : u[r.route.id]) !== void 0);
      dt(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), n = n.slice(0, Math.min(n.length, h + 1));
    }
    let i = false, c = -1;
    if (l && a) {
      i = a.renderFallback;
      for (let h = 0; h < n.length; h++) {
        let r = n[h];
        if ((r.route.HydrateFallback || r.route.hydrateFallbackElement) && (c = h), r.route.id) {
          let { loaderData: d, errors: y } = a, _ = r.route.loader && !d.hasOwnProperty(r.route.id) && (!y || y[r.route.id] === void 0);
          if (r.route.lazy || _) {
            l.isStatic && (i = true), c >= 0 ? n = n.slice(0, c + 1) : n = [
              n[0]
            ];
            break;
          }
        }
      }
    }
    let s = l == null ? void 0 : l.onError, o = a && s ? (h, r) => {
      var _a2, _b;
      s(h, {
        location: a.location,
        params: ((_b = (_a2 = a.matches) == null ? void 0 : _a2[0]) == null ? void 0 : _b.params) ?? {},
        unstable_pattern: lv(a.matches),
        errorInfo: r
      });
    } : void 0;
    return n.reduceRight((h, r, d) => {
      let y, _ = false, M = null, R = null;
      a && (y = u && r.route.id ? u[r.route.id] : void 0, M = r.route.errorElement || pv, i && (c < 0 && d === 0 ? (s0("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), _ = true, R = null) : c === d && (_ = true, R = r.route.hydrateFallbackElement || null)));
      let f = e.concat(n.slice(0, d + 1)), m = () => {
        let p;
        return y ? p = M : _ ? p = R : r.route.Component ? p = b.createElement(r.route.Component, null) : r.route.element ? p = r.route.element : p = h, b.createElement(vv, {
          match: r,
          routeContext: {
            outlet: h,
            matches: f,
            isDataRoute: a != null
          },
          children: p
        });
      };
      return a && (r.route.ErrorBoundary || r.route.errorElement || d === 0) ? b.createElement(c0, {
        location: a.location,
        revalidation: a.revalidation,
        component: M,
        error: y,
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
  function Ur(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Sv(t) {
    let e = b.useContext(Wa);
    return dt(e, Ur(t)), e;
  }
  function xv(t) {
    let e = b.useContext(Yi);
    return dt(e, Ur(t)), e;
  }
  function Ev(t) {
    let e = b.useContext(ze);
    return dt(e, Ur(t)), e;
  }
  function Br(t) {
    let e = Ev(t), l = e.matches[e.matches.length - 1];
    return dt(l.route.id, `${t} can only be used on routes that contain a unique "id"`), l.route.id;
  }
  function Tv() {
    return Br("useRouteId");
  }
  function _v() {
    var _a2;
    let t = b.useContext(Hr), e = xv("useRouteError"), l = Br("useRouteError");
    return t !== void 0 ? t : (_a2 = e.errors) == null ? void 0 : _a2[l];
  }
  function zv() {
    let { router: t } = Sv("useNavigate"), e = Br("useNavigate"), l = b.useRef(false);
    return n0(() => {
      l.current = true;
    }), b.useCallback(async (n, u = {}) => {
      Te(l.current, a0), l.current && (typeof n == "number" ? await t.navigate(n) : await t.navigate(n, {
        fromRouteId: e,
        ...u
      }));
    }, [
      t,
      e
    ]);
  }
  var jf = {};
  function s0(t, e, l) {
    !e && !jf[t] && (jf[t] = true, Te(false, l));
  }
  b.memo(Av);
  function Av({ routes: t, future: e, state: l, isStatic: a, onError: n }) {
    return i0(t, void 0, {
      state: l,
      isStatic: a,
      onError: n
    });
  }
  function r0({ to: t, replace: e, state: l, relative: a }) {
    dt(Fa(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: n } = b.useContext(ce);
    Te(!n, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: u } = b.useContext(ze), { pathname: i } = je(), c = u0(), s = Li(t, jr(u), i, a === "path"), o = JSON.stringify(s);
    return b.useEffect(() => {
      c(JSON.parse(o), {
        replace: e,
        state: l,
        relative: a
      });
    }, [
      c,
      o,
      a,
      e,
      l
    ]), null;
  }
  function Xt(t) {
    dt(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function Rv({ basename: t = "/", children: e = null, location: l, navigationType: a = "POP", navigator: n, static: u = false, unstable_useTransitions: i }) {
    dt(!Fa(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let c = t.replace(/^\/*/, "/"), s = b.useMemo(() => ({
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
    typeof l == "string" && (l = $a(l));
    let { pathname: o = "/", search: h = "", hash: r = "", state: d = null, key: y = "default", unstable_mask: _ } = l, M = b.useMemo(() => {
      let R = el(o, c);
      return R == null ? null : {
        location: {
          pathname: R,
          search: h,
          hash: r,
          state: d,
          key: y,
          unstable_mask: _
        },
        navigationType: a
      };
    }, [
      c,
      o,
      h,
      r,
      d,
      y,
      a,
      _
    ]);
    return Te(M != null, `<Router basename="${c}"> is not able to match the URL "${o}${h}${r}" because it does not start with the basename, so the <Router> won't render anything.`), M == null ? null : b.createElement(ce.Provider, {
      value: s
    }, b.createElement(eu.Provider, {
      children: e,
      value: M
    }));
  }
  function Mv({ children: t, location: e }) {
    return hv(Ns(t), e);
  }
  function Ns(t, e = []) {
    let l = [];
    return b.Children.forEach(t, (a, n) => {
      if (!b.isValidElement(a)) return;
      let u = [
        ...e,
        n
      ];
      if (a.type === b.Fragment) {
        l.push.apply(l, Ns(a.props.children, u));
        return;
      }
      dt(a.type === Xt, `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), dt(!a.props.index || !a.props.children, "An index route cannot have child routes.");
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
      a.props.children && (i.children = Ns(a.props.children, u)), l.push(i);
    }), l;
  }
  var Gu = "get", Xu = "application/x-www-form-urlencoded";
  function Gi(t) {
    return typeof HTMLElement < "u" && t instanceof HTMLElement;
  }
  function Cv(t) {
    return Gi(t) && t.tagName.toLowerCase() === "button";
  }
  function wv(t) {
    return Gi(t) && t.tagName.toLowerCase() === "form";
  }
  function Nv(t) {
    return Gi(t) && t.tagName.toLowerCase() === "input";
  }
  function Ov(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
  }
  function Dv(t, e) {
    return t.button === 0 && (!e || e === "_self") && !Ov(t);
  }
  var _u = null;
  function jv() {
    if (_u === null) try {
      new FormData(document.createElement("form"), 0), _u = false;
    } catch {
      _u = true;
    }
    return _u;
  }
  var Hv = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Nc(t) {
    return t != null && !Hv.has(t) ? (Te(false, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xu}"`), null) : t;
  }
  function Uv(t, e) {
    let l, a, n, u, i;
    if (wv(t)) {
      let c = t.getAttribute("action");
      a = c ? el(c, e) : null, l = t.getAttribute("method") || Gu, n = Nc(t.getAttribute("enctype")) || Xu, u = new FormData(t);
    } else if (Cv(t) || Nv(t) && (t.type === "submit" || t.type === "image")) {
      let c = t.form;
      if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let s = t.getAttribute("formaction") || c.getAttribute("action");
      if (a = s ? el(s, e) : null, l = t.getAttribute("formmethod") || c.getAttribute("method") || Gu, n = Nc(t.getAttribute("formenctype")) || Nc(c.getAttribute("enctype")) || Xu, u = new FormData(c, t), !jv()) {
        let { name: o, type: h, value: r } = t;
        if (h === "image") {
          let d = o ? `${o}.` : "";
          u.append(`${d}x`, "0"), u.append(`${d}y`, "0");
        } else o && u.append(o, r);
      }
    } else {
      if (Gi(t)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      l = Gu, a = null, n = Xu, i = t;
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
  function qr(t, e) {
    if (t === false || t === null || typeof t > "u") throw new Error(e);
  }
  function o0(t, e, l, a) {
    let n = typeof t == "string" ? new URL(t, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return l ? n.pathname.endsWith("/") ? n.pathname = `${n.pathname}_.${a}` : n.pathname = `${n.pathname}.${a}` : n.pathname === "/" ? n.pathname = `_root.${a}` : e && el(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.${a}` : n.pathname = `${n.pathname.replace(/\/$/, "")}.${a}`, n;
  }
  async function Bv(t, e) {
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
  function qv(t) {
    return t == null ? false : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
  }
  async function Lv(t, e, l) {
    let a = await Promise.all(t.map(async (n) => {
      let u = e.routes[n.route.id];
      if (u) {
        let i = await Bv(u, l);
        return i.links ? i.links() : [];
      }
      return [];
    }));
    return Qv(a.flat(1).filter(qv).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map((n) => n.rel === "stylesheet" ? {
      ...n,
      rel: "prefetch",
      as: "style"
    } : {
      ...n,
      rel: "prefetch"
    }));
  }
  function Hf(t, e, l, a, n, u) {
    let i = (s, o) => l[o] ? s.route.id !== l[o].route.id : true, c = (s, o) => {
      var _a2;
      return l[o].pathname !== s.pathname || ((_a2 = l[o].route.path) == null ? void 0 : _a2.endsWith("*")) && l[o].params["*"] !== s.params["*"];
    };
    return u === "assets" ? e.filter((s, o) => i(s, o) || c(s, o)) : u === "data" ? e.filter((s, o) => {
      var _a2;
      let h = a.routes[s.route.id];
      if (!h || !h.hasLoader) return false;
      if (i(s, o) || c(s, o)) return true;
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
  function Yv(t, e, { includeHydrateFallback: l } = {}) {
    return Gv(t.map((a) => {
      let n = e.routes[a.route.id];
      if (!n) return [];
      let u = [
        n.module
      ];
      return n.clientActionModule && (u = u.concat(n.clientActionModule)), n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)), l && n.hydrateFallbackModule && (u = u.concat(n.hydrateFallbackModule)), n.imports && (u = u.concat(n.imports)), u;
    }).flat(1));
  }
  function Gv(t) {
    return [
      ...new Set(t)
    ];
  }
  function Xv(t) {
    let e = {}, l = Object.keys(t).sort();
    for (let a of l) e[a] = t[a];
    return e;
  }
  function Qv(t, e) {
    let l = /* @__PURE__ */ new Set();
    return new Set(e), t.reduce((a, n) => {
      let u = JSON.stringify(Xv(n));
      return l.has(u) || (l.add(u), a.push({
        key: u,
        link: n
      })), a;
    }, []);
  }
  function Lr() {
    let t = b.useContext(Wa);
    return qr(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
  }
  function Vv() {
    let t = b.useContext(Yi);
    return qr(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
  }
  var Yr = b.createContext(void 0);
  Yr.displayName = "FrameworkContext";
  function Gr() {
    let t = b.useContext(Yr);
    return qr(t, "You must render this element inside a <HydratedRouter> element"), t;
  }
  function Zv(t, e) {
    let l = b.useContext(Yr), [a, n] = b.useState(false), [u, i] = b.useState(false), { onFocus: c, onBlur: s, onMouseEnter: o, onMouseLeave: h, onTouchStart: r } = e, d = b.useRef(null);
    b.useEffect(() => {
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
    ]), b.useEffect(() => {
      if (a) {
        let M = setTimeout(() => {
          i(true);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [
      a
    ]);
    let y = () => {
      n(true);
    }, _ = () => {
      n(false), i(false);
    };
    return l ? t !== "intent" ? [
      u,
      d,
      {}
    ] : [
      u,
      d,
      {
        onFocus: cn(c, y),
        onBlur: cn(s, _),
        onMouseEnter: cn(o, y),
        onMouseLeave: cn(h, _),
        onTouchStart: cn(r, y)
      }
    ] : [
      false,
      d,
      {}
    ];
  }
  function cn(t, e) {
    return (l) => {
      t && t(l), l.defaultPrevented || e(l);
    };
  }
  function kv({ page: t, ...e }) {
    let l = nv(), { router: a } = Lr(), n = b.useMemo(() => Jh(a.routes, t, a.basename), [
      a.routes,
      t,
      a.basename
    ]);
    return n ? l ? b.createElement(Jv, {
      page: t,
      matches: n,
      ...e
    }) : b.createElement($v, {
      page: t,
      matches: n,
      ...e
    }) : null;
  }
  function Kv(t) {
    let { manifest: e, routeModules: l } = Gr(), [a, n] = b.useState([]);
    return b.useEffect(() => {
      let u = false;
      return Lv(t, e, l).then((i) => {
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
  function Jv({ page: t, matches: e, ...l }) {
    let a = je(), { future: n } = Gr(), { basename: u } = Lr(), i = b.useMemo(() => {
      if (t === a.pathname + a.search + a.hash) return [];
      let c = o0(t, u, n.unstable_trailingSlashAwareDataRequests, "rsc"), s = false, o = [];
      for (let h of e) typeof h.route.shouldRevalidate == "function" ? s = true : o.push(h.route.id);
      return s && o.length > 0 && c.searchParams.set("_routes", o.join(",")), [
        c.pathname + c.search
      ];
    }, [
      u,
      n.unstable_trailingSlashAwareDataRequests,
      t,
      a,
      e
    ]);
    return b.createElement(b.Fragment, null, i.map((c) => b.createElement("link", {
      key: c,
      rel: "prefetch",
      as: "fetch",
      href: c,
      ...l
    })));
  }
  function $v({ page: t, matches: e, ...l }) {
    let a = je(), { future: n, manifest: u, routeModules: i } = Gr(), { basename: c } = Lr(), { loaderData: s, matches: o } = Vv(), h = b.useMemo(() => Hf(t, e, o, u, a, "data"), [
      t,
      e,
      o,
      u,
      a
    ]), r = b.useMemo(() => Hf(t, e, o, u, a, "assets"), [
      t,
      e,
      o,
      u,
      a
    ]), d = b.useMemo(() => {
      if (t === a.pathname + a.search + a.hash) return [];
      let M = /* @__PURE__ */ new Set(), R = false;
      if (e.forEach((m) => {
        var _a2;
        let p = u.routes[m.route.id];
        !p || !p.hasLoader || (!h.some((x) => x.route.id === m.route.id) && m.route.id in s && ((_a2 = i[m.route.id]) == null ? void 0 : _a2.shouldRevalidate) || p.hasClientLoader ? R = true : M.add(m.route.id));
      }), M.size === 0) return [];
      let f = o0(t, c, n.unstable_trailingSlashAwareDataRequests, "data");
      return R && M.size > 0 && f.searchParams.set("_routes", e.filter((m) => M.has(m.route.id)).map((m) => m.route.id).join(",")), [
        f.pathname + f.search
      ];
    }, [
      c,
      n.unstable_trailingSlashAwareDataRequests,
      s,
      a,
      u,
      h,
      e,
      t,
      i
    ]), y = b.useMemo(() => Yv(r, u), [
      r,
      u
    ]), _ = Kv(r);
    return b.createElement(b.Fragment, null, d.map((M) => b.createElement("link", {
      key: M,
      rel: "prefetch",
      as: "fetch",
      href: M,
      ...l
    })), y.map((M) => b.createElement("link", {
      key: M,
      rel: "modulepreload",
      href: M,
      ...l
    })), _.map(({ key: M, link: R }) => b.createElement("link", {
      key: M,
      nonce: l.nonce,
      ...R,
      crossOrigin: R.crossOrigin ?? l.crossOrigin
    })));
  }
  function Wv(...t) {
    return (e) => {
      t.forEach((l) => {
        typeof l == "function" ? l(e) : l != null && (l.current = e);
      });
    };
  }
  var Fv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Fv && (window.__reactRouterVersion = "7.14.0");
  } catch {
  }
  function Pv({ basename: t, children: e, unstable_useTransitions: l, window: a }) {
    let n = b.useRef();
    n.current == null && (n.current = Ng({
      window: a,
      v5Compat: true
    }));
    let u = n.current, [i, c] = b.useState({
      action: u.action,
      location: u.location
    }), s = b.useCallback((o) => {
      l === false ? c(o) : b.startTransition(() => c(o));
    }, [
      l
    ]);
    return b.useLayoutEffect(() => u.listen(s), [
      u,
      s
    ]), b.createElement(Rv, {
      basename: t,
      children: e,
      location: i.location,
      navigationType: i.action,
      navigator: u,
      unstable_useTransitions: l
    });
  }
  var f0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Xi = b.forwardRef(function({ onClick: e, discover: l = "render", prefetch: a = "none", relative: n, reloadDocument: u, replace: i, unstable_mask: c, state: s, target: o, to: h, preventScrollReset: r, viewTransition: d, unstable_defaultShouldRevalidate: y, ..._ }, M) {
    let { basename: R, navigator: f, unstable_useTransitions: m } = b.useContext(ce), p = typeof h == "string" && f0.test(h), x = Ph(h, R);
    h = x.to;
    let D = fv(h, {
      relative: n
    }), S = je(), T = null;
    if (c) {
      let B = Li(c, [], S.unstable_mask ? S.unstable_mask.pathname : "/", true);
      R !== "/" && (B.pathname = B.pathname === "/" ? R : Ne([
        R,
        B.pathname
      ])), T = f.createHref(B);
    }
    let [C, A, g] = Zv(a, _), v = l1(h, {
      replace: i,
      unstable_mask: c,
      state: s,
      target: o,
      preventScrollReset: r,
      relative: n,
      viewTransition: d,
      unstable_defaultShouldRevalidate: y,
      unstable_useTransitions: m
    });
    function N(B) {
      e && e(B), B.defaultPrevented || v(B);
    }
    let O = !(x.isExternal || u), U = b.createElement("a", {
      ..._,
      ...g,
      href: (O ? T : void 0) || x.absoluteURL || D,
      onClick: O ? N : e,
      ref: Wv(M, A),
      target: o,
      "data-discover": !p && l === "render" ? "true" : void 0
    });
    return C && !p ? b.createElement(b.Fragment, null, U, b.createElement(kv, {
      page: D
    })) : U;
  });
  Xi.displayName = "Link";
  var Iv = b.forwardRef(function({ "aria-current": e = "page", caseSensitive: l = false, className: a = "", end: n = false, style: u, to: i, viewTransition: c, children: s, ...o }, h) {
    let r = lu(i, {
      relative: o.relative
    }), d = je(), y = b.useContext(Yi), { navigator: _, basename: M } = b.useContext(ce), R = y != null && c1(r) && c === true, f = _.encodeLocation ? _.encodeLocation(r).pathname : r.pathname, m = d.pathname, p = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    l || (m = m.toLowerCase(), p = p ? p.toLowerCase() : null, f = f.toLowerCase()), p && M && (p = el(p, M) || p);
    const x = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let D = m === f || !n && m.startsWith(f) && m.charAt(x) === "/", S = p != null && (p === f || !n && p.startsWith(f) && p.charAt(f.length) === "/"), T = {
      isActive: D,
      isPending: S,
      isTransitioning: R
    }, C = D ? e : void 0, A;
    typeof a == "function" ? A = a(T) : A = [
      a,
      D ? "active" : null,
      S ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let g = typeof u == "function" ? u(T) : u;
    return b.createElement(Xi, {
      ...o,
      "aria-current": C,
      className: A,
      ref: h,
      style: g,
      to: i,
      viewTransition: c
    }, typeof s == "function" ? s(T) : s);
  });
  Iv.displayName = "NavLink";
  var t1 = b.forwardRef(({ discover: t = "render", fetcherKey: e, navigate: l, reloadDocument: a, replace: n, state: u, method: i = Gu, action: c, onSubmit: s, relative: o, preventScrollReset: h, viewTransition: r, unstable_defaultShouldRevalidate: d, ...y }, _) => {
    let { unstable_useTransitions: M } = b.useContext(ce), R = u1(), f = i1(c, {
      relative: o
    }), m = i.toLowerCase() === "get" ? "get" : "post", p = typeof c == "string" && f0.test(c), x = (D) => {
      if (s && s(D), D.defaultPrevented) return;
      D.preventDefault();
      let S = D.nativeEvent.submitter, T = (S == null ? void 0 : S.getAttribute("formmethod")) || i, C = () => R(S || D.currentTarget, {
        fetcherKey: e,
        method: T,
        navigate: l,
        replace: n,
        state: u,
        relative: o,
        preventScrollReset: h,
        viewTransition: r,
        unstable_defaultShouldRevalidate: d
      });
      M && l !== false ? b.startTransition(() => C()) : C();
    };
    return b.createElement("form", {
      ref: _,
      method: m,
      action: f,
      onSubmit: a ? s : x,
      ...y,
      "data-discover": !p && t === "render" ? "true" : void 0
    });
  });
  t1.displayName = "Form";
  function e1(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function d0(t) {
    let e = b.useContext(Wa);
    return dt(e, e1(t)), e;
  }
  function l1(t, { target: e, replace: l, unstable_mask: a, state: n, preventScrollReset: u, relative: i, viewTransition: c, unstable_defaultShouldRevalidate: s, unstable_useTransitions: o } = {}) {
    let h = u0(), r = je(), d = lu(t, {
      relative: i
    });
    return b.useCallback((y) => {
      if (Dv(y, e)) {
        y.preventDefault();
        let _ = l !== void 0 ? l : Xn(r) === Xn(d), M = () => h(t, {
          replace: _,
          unstable_mask: a,
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
      h,
      d,
      l,
      a,
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
  var a1 = 0, n1 = () => `__${String(++a1)}__`;
  function u1() {
    let { router: t } = d0("useSubmit"), { basename: e } = b.useContext(ce), l = Tv(), a = t.fetch, n = t.navigate;
    return b.useCallback(async (u, i = {}) => {
      let { action: c, method: s, encType: o, formData: h, body: r } = Uv(u, e);
      if (i.navigate === false) {
        let d = i.fetcherKey || n1();
        await a(d, l, i.action || c, {
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
  function i1(t, { relative: e } = {}) {
    let { basename: l } = b.useContext(ce), a = b.useContext(ze);
    dt(a, "useFormAction must be used inside a RouteContext");
    let [n] = a.matches.slice(-1), u = {
      ...lu(t || ".", {
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
    return (!t || t === ".") && n.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), l !== "/" && (u.pathname = u.pathname === "/" ? l : Ne([
      l,
      u.pathname
    ])), Xn(u);
  }
  function c1(t, { relative: e } = {}) {
    let l = b.useContext(e0);
    dt(l != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: a } = d0("useViewTransitionState"), n = lu(t, {
      relative: e
    });
    if (!l.isTransitioning) return false;
    let u = el(l.currentLocation.pathname, a) || l.currentLocation.pathname, i = el(l.nextLocation.pathname, a) || l.nextLocation.pathname;
    return vi(n.pathname, i) != null || vi(n.pathname, u) != null;
  }
  let s1, Uf, m0, r1, Xr, o1, f1, d1, m1, h1, y1, p1, Oc;
  s1 = (t, e, l, a, n, u, i, c) => {
    let s = document.documentElement, o = [
      "light",
      "dark"
    ];
    function h(y) {
      (Array.isArray(t) ? t : [
        t
      ]).forEach((_) => {
        let M = _ === "class", R = M && u ? n.map((f) => u[f] || f) : n;
        M ? (s.classList.remove(...R), s.classList.add(u && u[y] ? u[y] : y)) : s.setAttribute(_, y);
      }), r(y);
    }
    function r(y) {
      c && o.includes(y) && (s.style.colorScheme = y);
    }
    function d() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (a) h(a);
    else try {
      let y = localStorage.getItem(e) || l, _ = i && y === "system" ? d() : y;
      h(_);
    } catch {
    }
  };
  Uf = [
    "light",
    "dark"
  ];
  m0 = "(prefers-color-scheme: dark)";
  r1 = typeof window > "u";
  Xr = b.createContext(void 0);
  o1 = {
    setTheme: (t) => {
    },
    themes: []
  };
  hb = () => {
    var t;
    return (t = b.useContext(Xr)) != null ? t : o1;
  };
  f1 = (t) => b.useContext(Xr) ? b.createElement(b.Fragment, null, t.children) : b.createElement(m1, {
    ...t
  });
  d1 = [
    "light",
    "dark"
  ];
  m1 = ({ forcedTheme: t, disableTransitionOnChange: e = false, enableSystem: l = true, enableColorScheme: a = true, storageKey: n = "theme", themes: u = d1, defaultTheme: i = l ? "system" : "light", attribute: c = "data-theme", value: s, children: o, nonce: h, scriptProps: r }) => {
    let [d, y] = b.useState(() => y1(n, i)), [_, M] = b.useState(() => d === "system" ? Oc() : d), R = s ? Object.values(s) : u, f = b.useCallback((D) => {
      let S = D;
      if (!S) return;
      D === "system" && l && (S = Oc());
      let T = s ? s[S] : S, C = e ? p1(h) : null, A = document.documentElement, g = (v) => {
        v === "class" ? (A.classList.remove(...R), T && A.classList.add(T)) : v.startsWith("data-") && (T ? A.setAttribute(v, T) : A.removeAttribute(v));
      };
      if (Array.isArray(c) ? c.forEach(g) : g(c), a) {
        let v = Uf.includes(i) ? i : null, N = Uf.includes(S) ? S : v;
        A.style.colorScheme = N;
      }
      C == null ? void 0 : C();
    }, [
      h
    ]), m = b.useCallback((D) => {
      let S = typeof D == "function" ? D(d) : D;
      y(S);
      try {
        localStorage.setItem(n, S);
      } catch {
      }
    }, [
      d
    ]), p = b.useCallback((D) => {
      let S = Oc(D);
      M(S), d === "system" && l && !t && f("system");
    }, [
      d,
      t
    ]);
    b.useEffect(() => {
      let D = window.matchMedia(m0);
      return D.addListener(p), p(D), () => D.removeListener(p);
    }, [
      p
    ]), b.useEffect(() => {
      let D = (S) => {
        S.key === n && (S.newValue ? y(S.newValue) : m(i));
      };
      return window.addEventListener("storage", D), () => window.removeEventListener("storage", D);
    }, [
      m
    ]), b.useEffect(() => {
      f(t ?? d);
    }, [
      t,
      d
    ]);
    let x = b.useMemo(() => ({
      theme: d,
      setTheme: m,
      forcedTheme: t,
      resolvedTheme: d === "system" ? _ : d,
      themes: l ? [
        ...u,
        "system"
      ] : u,
      systemTheme: l ? _ : void 0
    }), [
      d,
      m,
      t,
      _,
      l,
      u
    ]);
    return b.createElement(Xr.Provider, {
      value: x
    }, b.createElement(h1, {
      forcedTheme: t,
      storageKey: n,
      attribute: c,
      enableSystem: l,
      enableColorScheme: a,
      defaultTheme: i,
      value: s,
      themes: u,
      nonce: h,
      scriptProps: r
    }), o);
  };
  h1 = b.memo(({ forcedTheme: t, storageKey: e, attribute: l, enableSystem: a, enableColorScheme: n, defaultTheme: u, value: i, themes: c, nonce: s, scriptProps: o }) => {
    let h = JSON.stringify([
      l,
      e,
      u,
      t,
      c,
      i,
      a,
      n
    ]).slice(1, -1);
    return b.createElement("script", {
      ...o,
      suppressHydrationWarning: true,
      nonce: typeof window > "u" ? s : "",
      dangerouslySetInnerHTML: {
        __html: `(${s1.toString()})(${h})`
      }
    });
  });
  y1 = (t, e) => {
    if (r1) return;
    let l;
    try {
      l = localStorage.getItem(t) || void 0;
    } catch {
    }
    return l || e;
  };
  p1 = (t) => {
    let e = document.createElement("style");
    return t && e.setAttribute("nonce", t), e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
      window.getComputedStyle(document.body), setTimeout(() => {
        document.head.removeChild(e);
      }, 1);
    };
  };
  Oc = (t) => (t || (t = window.matchMedia(m0)), t.matches ? "dark" : "light");
  function g1(t) {
    if (typeof document > "u") return;
    let e = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
    l.type = "text/css", e.appendChild(l), l.styleSheet ? l.styleSheet.cssText = t : l.appendChild(document.createTextNode(t));
  }
  const v1 = (t) => {
    switch (t) {
      case "success":
        return x1;
      case "info":
        return T1;
      case "warning":
        return E1;
      case "error":
        return _1;
      default:
        return null;
    }
  }, b1 = Array(12).fill(0), S1 = ({ visible: t, className: e }) => H.createElement("div", {
    className: [
      "sonner-loading-wrapper",
      e
    ].filter(Boolean).join(" "),
    "data-visible": t
  }, H.createElement("div", {
    className: "sonner-spinner"
  }, b1.map((l, a) => H.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${a}`
  })))), x1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, H.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  })), E1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, H.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  })), T1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, H.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  })), _1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
  }, H.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  })), z1 = H.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, H.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), H.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })), A1 = () => {
    const [t, e] = H.useState(document.hidden);
    return H.useEffect(() => {
      const l = () => {
        e(document.hidden);
      };
      return document.addEventListener("visibilitychange", l), () => window.removeEventListener("visibilitychange", l);
    }, []), t;
  };
  let Os = 1;
  class R1 {
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
        const { message: a, ...n } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((l = e.id) == null ? void 0 : l.length) > 0 ? e.id : Os++, i = this.toasts.find((s) => s.id === u), c = e.dismissible === void 0 ? true : e.dismissible;
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
        const c = n.then(async (o) => {
          if (i = [
            "resolve",
            o
          ], H.isValidElement(o)) u = false, this.create({
            id: a,
            type: "default",
            message: o
          });
          else if (C1(o) && !o.ok) {
            u = false;
            const r = typeof l.error == "function" ? await l.error(`HTTP error! status: ${o.status}`) : l.error, d = typeof l.description == "function" ? await l.description(`HTTP error! status: ${o.status}`) : l.description, _ = typeof r == "object" && !H.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "error",
              description: d,
              ..._
            });
          } else if (o instanceof Error) {
            u = false;
            const r = typeof l.error == "function" ? await l.error(o) : l.error, d = typeof l.description == "function" ? await l.description(o) : l.description, _ = typeof r == "object" && !H.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "error",
              description: d,
              ..._
            });
          } else if (l.success !== void 0) {
            u = false;
            const r = typeof l.success == "function" ? await l.success(o) : l.success, d = typeof l.description == "function" ? await l.description(o) : l.description, _ = typeof r == "object" && !H.isValidElement(r) ? r : {
              message: r
            };
            this.create({
              id: a,
              type: "success",
              description: d,
              ..._
            });
          }
        }).catch(async (o) => {
          if (i = [
            "reject",
            o
          ], l.error !== void 0) {
            u = false;
            const h = typeof l.error == "function" ? await l.error(o) : l.error, r = typeof l.description == "function" ? await l.description(o) : l.description, y = typeof h == "object" && !H.isValidElement(h) ? h : {
              message: h
            };
            this.create({
              id: a,
              type: "error",
              description: r,
              ...y
            });
          }
        }).finally(() => {
          u && (this.dismiss(a), a = void 0), l.finally == null || l.finally.call(l);
        }), s = () => new Promise((o, h) => c.then(() => i[0] === "reject" ? h(i[1]) : o(i[1])).catch(h));
        return typeof a != "string" && typeof a != "number" ? {
          unwrap: s
        } : Object.assign(a, {
          unwrap: s
        });
      }, this.custom = (e, l) => {
        const a = (l == null ? void 0 : l.id) || Os++;
        return this.create({
          jsx: e(a),
          id: a,
          ...l
        }), a;
      }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
    }
  }
  let Zt, M1, C1, w1, N1, O1;
  Zt = new R1();
  M1 = (t, e) => {
    const l = (e == null ? void 0 : e.id) || Os++;
    return Zt.addToast({
      title: t,
      ...e,
      id: l
    }), l;
  };
  C1 = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
  w1 = M1;
  N1 = () => Zt.toasts;
  O1 = () => Zt.getActiveToasts();
  yb = Object.assign(w1, {
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
    getHistory: N1,
    getToasts: O1
  });
  g1("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
  function zu(t) {
    return t.label !== void 0;
  }
  const D1 = 3, j1 = "24px", H1 = "16px", Bf = 4e3, U1 = 356, B1 = 14, q1 = 45, L1 = 200;
  function Ae(...t) {
    return t.filter(Boolean).join(" ");
  }
  function Y1(t) {
    const [e, l] = t.split("-"), a = [];
    return e && a.push(e), l && a.push(l), a;
  }
  const G1 = (t) => {
    var e, l, a, n, u, i, c, s, o;
    const { invert: h, toast: r, unstyled: d, interacting: y, setHeights: _, visibleToasts: M, heights: R, index: f, toasts: m, expanded: p, removeToast: x, defaultRichColors: D, closeButton: S, style: T, cancelButtonStyle: C, actionButtonStyle: A, className: g = "", descriptionClassName: v = "", duration: N, position: O, gap: U, expandByDefault: B, classNames: z, icons: j, closeButtonAriaLabel: q = "Close toast" } = t, [L, Z] = H.useState(null), [Mt, gt] = H.useState(null), [G, k] = H.useState(false), [I, Ut] = H.useState(false), [ta, ot] = H.useState(false), [ea, au] = H.useState(false), [nu, la] = H.useState(false), [b0, Qi] = H.useState(0), [S0, Qr] = H.useState(0), Pa = H.useRef(r.duration || N || Bf), Vr = H.useRef(null), He = H.useRef(null), x0 = f === 0, E0 = f + 1 <= M, $t = r.type, aa = r.dismissible !== false, T0 = r.className || "", _0 = r.descriptionClassName || "", uu = H.useMemo(() => R.findIndex((V) => V.toastId === r.id) || 0, [
      R,
      r.id
    ]), z0 = H.useMemo(() => {
      var V;
      return (V = r.closeButton) != null ? V : S;
    }, [
      r.closeButton,
      S
    ]), Zr = H.useMemo(() => r.duration || N || Bf, [
      r.duration,
      N
    ]), Vi = H.useRef(0), na = H.useRef(0), kr = H.useRef(0), ua = H.useRef(null), [A0, R0] = O.split("-"), Kr = H.useMemo(() => R.reduce((V, _t, Ht) => Ht >= uu ? V : V + _t.height, 0), [
      R,
      uu
    ]), Jr = A1(), M0 = r.invert || h, Zi = $t === "loading";
    na.current = H.useMemo(() => uu * U + Kr, [
      uu,
      Kr
    ]), H.useEffect(() => {
      Pa.current = Zr;
    }, [
      Zr
    ]), H.useEffect(() => {
      k(true);
    }, []), H.useEffect(() => {
      const V = He.current;
      if (V) {
        const _t = V.getBoundingClientRect().height;
        return Qr(_t), _((Ht) => [
          {
            toastId: r.id,
            height: _t,
            position: r.position
          },
          ...Ht
        ]), () => _((Ht) => Ht.filter((Wt) => Wt.toastId !== r.id));
      }
    }, [
      _,
      r.id
    ]), H.useLayoutEffect(() => {
      if (!G) return;
      const V = He.current, _t = V.style.height;
      V.style.height = "auto";
      const Ht = V.getBoundingClientRect().height;
      V.style.height = _t, Qr(Ht), _((Wt) => Wt.find((Ct) => Ct.toastId === r.id) ? Wt.map((Ct) => Ct.toastId === r.id ? {
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
      G,
      r.title,
      r.description,
      _,
      r.id,
      r.jsx,
      r.action,
      r.cancel
    ]);
    const al = H.useCallback(() => {
      Ut(true), Qi(na.current), _((V) => V.filter((_t) => _t.toastId !== r.id)), setTimeout(() => {
        x(r);
      }, L1);
    }, [
      r,
      x,
      _,
      na
    ]);
    H.useEffect(() => {
      if (r.promise && $t === "loading" || r.duration === 1 / 0 || r.type === "loading") return;
      let V;
      return p || y || Jr ? (() => {
        if (kr.current < Vi.current) {
          const Wt = (/* @__PURE__ */ new Date()).getTime() - Vi.current;
          Pa.current = Pa.current - Wt;
        }
        kr.current = (/* @__PURE__ */ new Date()).getTime();
      })() : (() => {
        Pa.current !== 1 / 0 && (Vi.current = (/* @__PURE__ */ new Date()).getTime(), V = setTimeout(() => {
          r.onAutoClose == null || r.onAutoClose.call(r, r), al();
        }, Pa.current));
      })(), () => clearTimeout(V);
    }, [
      p,
      y,
      r,
      $t,
      Jr,
      al
    ]), H.useEffect(() => {
      r.delete && (al(), r.onDismiss == null || r.onDismiss.call(r, r));
    }, [
      al,
      r.delete
    ]);
    function C0() {
      var V;
      if (j == null ? void 0 : j.loading) {
        var _t;
        return H.createElement("div", {
          className: Ae(z == null ? void 0 : z.loader, r == null || (_t = r.classNames) == null ? void 0 : _t.loader, "sonner-loader"),
          "data-visible": $t === "loading"
        }, j.loading);
      }
      return H.createElement(S1, {
        className: Ae(z == null ? void 0 : z.loader, r == null || (V = r.classNames) == null ? void 0 : V.loader),
        visible: $t === "loading"
      });
    }
    const w0 = r.icon || (j == null ? void 0 : j[$t]) || v1($t);
    var $r, Wr;
    return H.createElement("li", {
      tabIndex: 0,
      ref: He,
      className: Ae(g, T0, z == null ? void 0 : z.toast, r == null || (e = r.classNames) == null ? void 0 : e.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[$t], r == null || (l = r.classNames) == null ? void 0 : l[$t]),
      "data-sonner-toast": "",
      "data-rich-colors": ($r = r.richColors) != null ? $r : D,
      "data-styled": !(r.jsx || r.unstyled || d),
      "data-mounted": G,
      "data-promise": !!r.promise,
      "data-swiped": nu,
      "data-removed": I,
      "data-visible": E0,
      "data-y-position": A0,
      "data-x-position": R0,
      "data-index": f,
      "data-front": x0,
      "data-swiping": ta,
      "data-dismissible": aa,
      "data-type": $t,
      "data-invert": M0,
      "data-swipe-out": ea,
      "data-swipe-direction": Mt,
      "data-expanded": !!(p || B && G),
      "data-testid": r.testId,
      style: {
        "--index": f,
        "--toasts-before": f,
        "--z-index": m.length - f,
        "--offset": `${I ? b0 : na.current}px`,
        "--initial-height": B ? "auto" : `${S0}px`,
        ...T,
        ...r.style
      },
      onDragEnd: () => {
        ot(false), Z(null), ua.current = null;
      },
      onPointerDown: (V) => {
        V.button !== 2 && (Zi || !aa || (Vr.current = /* @__PURE__ */ new Date(), Qi(na.current), V.target.setPointerCapture(V.pointerId), V.target.tagName !== "BUTTON" && (ot(true), ua.current = {
          x: V.clientX,
          y: V.clientY
        })));
      },
      onPointerUp: () => {
        var V, _t, Ht;
        if (ea || !aa) return;
        ua.current = null;
        const Wt = Number(((V = He.current) == null ? void 0 : V.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), iu = Number(((_t = He.current) == null ? void 0 : _t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Ct = (/* @__PURE__ */ new Date()).getTime() - ((Ht = Vr.current) == null ? void 0 : Ht.getTime()), se = L === "x" ? Wt : iu, cu = Math.abs(se) / Ct;
        if (Math.abs(se) >= q1 || cu > 0.11) {
          Qi(na.current), r.onDismiss == null || r.onDismiss.call(r, r), gt(L === "x" ? Wt > 0 ? "right" : "left" : iu > 0 ? "down" : "up"), al(), au(true);
          return;
        } else {
          var be, Se;
          (be = He.current) == null || be.style.setProperty("--swipe-amount-x", "0px"), (Se = He.current) == null || Se.style.setProperty("--swipe-amount-y", "0px");
        }
        la(false), ot(false), Z(null);
      },
      onPointerMove: (V) => {
        var _t, Ht, Wt;
        if (!ua.current || !aa || ((_t = window.getSelection()) == null ? void 0 : _t.toString().length) > 0) return;
        const Ct = V.clientY - ua.current.y, se = V.clientX - ua.current.x;
        var cu;
        const be = (cu = t.swipeDirections) != null ? cu : Y1(O);
        !L && (Math.abs(se) > 1 || Math.abs(Ct) > 1) && Z(Math.abs(se) > Math.abs(Ct) ? "x" : "y");
        let Se = {
          x: 0,
          y: 0
        };
        const Fr = (Ol) => 1 / (1.5 + Math.abs(Ol) / 20);
        if (L === "y") {
          if (be.includes("top") || be.includes("bottom")) if (be.includes("top") && Ct < 0 || be.includes("bottom") && Ct > 0) Se.y = Ct;
          else {
            const Ol = Ct * Fr(Ct);
            Se.y = Math.abs(Ol) < Math.abs(Ct) ? Ol : Ct;
          }
        } else if (L === "x" && (be.includes("left") || be.includes("right"))) if (be.includes("left") && se < 0 || be.includes("right") && se > 0) Se.x = se;
        else {
          const Ol = se * Fr(se);
          Se.x = Math.abs(Ol) < Math.abs(se) ? Ol : se;
        }
        (Math.abs(Se.x) > 0 || Math.abs(Se.y) > 0) && la(true), (Ht = He.current) == null || Ht.style.setProperty("--swipe-amount-x", `${Se.x}px`), (Wt = He.current) == null || Wt.style.setProperty("--swipe-amount-y", `${Se.y}px`);
      }
    }, z0 && !r.jsx && $t !== "loading" ? H.createElement("button", {
      "aria-label": q,
      "data-disabled": Zi,
      "data-close-button": true,
      onClick: Zi || !aa ? () => {
      } : () => {
        al(), r.onDismiss == null || r.onDismiss.call(r, r);
      },
      className: Ae(z == null ? void 0 : z.closeButton, r == null || (a = r.classNames) == null ? void 0 : a.closeButton)
    }, (Wr = j == null ? void 0 : j.close) != null ? Wr : z1) : null, ($t || r.icon || r.promise) && r.icon !== null && ((j == null ? void 0 : j[$t]) !== null || r.icon) ? H.createElement("div", {
      "data-icon": "",
      className: Ae(z == null ? void 0 : z.icon, r == null || (n = r.classNames) == null ? void 0 : n.icon)
    }, r.promise || r.type === "loading" && !r.icon ? r.icon || C0() : null, r.type !== "loading" ? w0 : null) : null, H.createElement("div", {
      "data-content": "",
      className: Ae(z == null ? void 0 : z.content, r == null || (u = r.classNames) == null ? void 0 : u.content)
    }, H.createElement("div", {
      "data-title": "",
      className: Ae(z == null ? void 0 : z.title, r == null || (i = r.classNames) == null ? void 0 : i.title)
    }, r.jsx ? r.jsx : typeof r.title == "function" ? r.title() : r.title), r.description ? H.createElement("div", {
      "data-description": "",
      className: Ae(v, _0, z == null ? void 0 : z.description, r == null || (c = r.classNames) == null ? void 0 : c.description)
    }, typeof r.description == "function" ? r.description() : r.description) : null), H.isValidElement(r.cancel) ? r.cancel : r.cancel && zu(r.cancel) ? H.createElement("button", {
      "data-button": true,
      "data-cancel": true,
      style: r.cancelButtonStyle || C,
      onClick: (V) => {
        zu(r.cancel) && aa && (r.cancel.onClick == null || r.cancel.onClick.call(r.cancel, V), al());
      },
      className: Ae(z == null ? void 0 : z.cancelButton, r == null || (s = r.classNames) == null ? void 0 : s.cancelButton)
    }, r.cancel.label) : null, H.isValidElement(r.action) ? r.action : r.action && zu(r.action) ? H.createElement("button", {
      "data-button": true,
      "data-action": true,
      style: r.actionButtonStyle || A,
      onClick: (V) => {
        zu(r.action) && (r.action.onClick == null || r.action.onClick.call(r.action, V), !V.defaultPrevented && al());
      },
      className: Ae(z == null ? void 0 : z.actionButton, r == null || (o = r.classNames) == null ? void 0 : o.actionButton)
    }, r.action.label) : null);
  };
  function qf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
  }
  function X1(t, e) {
    const l = {};
    return [
      t,
      e
    ].forEach((a, n) => {
      const u = n === 1, i = u ? "--mobile-offset" : "--offset", c = u ? H1 : j1;
      function s(o) {
        [
          "top",
          "right",
          "bottom",
          "left"
        ].forEach((h) => {
          l[`${i}-${h}`] = typeof o == "number" ? `${o}px` : o;
        });
      }
      typeof a == "number" || typeof a == "string" ? s(a) : typeof a == "object" ? [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((o) => {
        a[o] === void 0 ? l[`${i}-${o}`] = c : l[`${i}-${o}`] = typeof a[o] == "number" ? `${a[o]}px` : a[o];
      }) : s(c);
    }), l;
  }
  const Q1 = H.forwardRef(function(e, l) {
    const { id: a, invert: n, position: u = "bottom-right", hotkey: i = [
      "altKey",
      "KeyT"
    ], expand: c, closeButton: s, className: o, offset: h, mobileOffset: r, theme: d = "light", richColors: y, duration: _, style: M, visibleToasts: R = D1, toastOptions: f, dir: m = qf(), gap: p = B1, icons: x, containerAriaLabel: D = "Notifications" } = e, [S, T] = H.useState([]), C = H.useMemo(() => a ? S.filter((G) => G.toasterId === a) : S.filter((G) => !G.toasterId), [
      S,
      a
    ]), A = H.useMemo(() => Array.from(new Set([
      u
    ].concat(C.filter((G) => G.position).map((G) => G.position)))), [
      C,
      u
    ]), [g, v] = H.useState([]), [N, O] = H.useState(false), [U, B] = H.useState(false), [z, j] = H.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), q = H.useRef(null), L = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Z = H.useRef(null), Mt = H.useRef(false), gt = H.useCallback((G) => {
      T((k) => {
        var I;
        return (I = k.find((Ut) => Ut.id === G.id)) != null && I.delete || Zt.dismiss(G.id), k.filter(({ id: Ut }) => Ut !== G.id);
      });
    }, []);
    return H.useEffect(() => Zt.subscribe((G) => {
      if (G.dismiss) {
        requestAnimationFrame(() => {
          T((k) => k.map((I) => I.id === G.id ? {
            ...I,
            delete: true
          } : I));
        });
        return;
      }
      setTimeout(() => {
        ty.flushSync(() => {
          T((k) => {
            const I = k.findIndex((Ut) => Ut.id === G.id);
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
      S
    ]), H.useEffect(() => {
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
          } catch (Ut) {
            console.error(Ut);
          }
        });
      }
    }, [
      d
    ]), H.useEffect(() => {
      S.length <= 1 && O(false);
    }, [
      S
    ]), H.useEffect(() => {
      const G = (k) => {
        var I;
        if (i.every((ot) => k[ot] || k.code === ot)) {
          var ta;
          O(true), (ta = q.current) == null || ta.focus();
        }
        k.code === "Escape" && (document.activeElement === q.current || (I = q.current) != null && I.contains(document.activeElement)) && O(false);
      };
      return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
    }, [
      i
    ]), H.useEffect(() => {
      if (q.current) return () => {
        Z.current && (Z.current.focus({
          preventScroll: true
        }), Z.current = null, Mt.current = false);
      };
    }, [
      q.current
    ]), H.createElement("section", {
      ref: l,
      "aria-label": `${D} ${L}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: true
    }, A.map((G, k) => {
      var I;
      const [Ut, ta] = G.split("-");
      return C.length ? H.createElement("ol", {
        key: G,
        dir: m === "auto" ? qf() : m,
        tabIndex: -1,
        ref: q,
        className: o,
        "data-sonner-toaster": true,
        "data-sonner-theme": z,
        "data-y-position": Ut,
        "data-x-position": ta,
        style: {
          "--front-toast-height": `${((I = g[0]) == null ? void 0 : I.height) || 0}px`,
          "--width": `${U1}px`,
          "--gap": `${p}px`,
          ...M,
          ...X1(h, r)
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
          ot.target instanceof HTMLElement && ot.target.dataset.dismissible === "false" || B(true);
        },
        onPointerUp: () => B(false)
      }, C.filter((ot) => !ot.position && k === 0 || ot.position === G).map((ot, ea) => {
        var au, nu;
        return H.createElement(G1, {
          key: ot.id,
          icons: x,
          index: ea,
          toast: ot,
          defaultRichColors: y,
          duration: (au = f == null ? void 0 : f.duration) != null ? au : _,
          className: f == null ? void 0 : f.className,
          descriptionClassName: f == null ? void 0 : f.descriptionClassName,
          invert: n,
          visibleToasts: R,
          closeButton: (nu = f == null ? void 0 : f.closeButton) != null ? nu : s,
          interacting: U,
          position: G,
          style: f == null ? void 0 : f.style,
          unstyled: f == null ? void 0 : f.unstyled,
          classNames: f == null ? void 0 : f.classNames,
          cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
          actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
          closeButtonAriaLabel: f == null ? void 0 : f.closeButtonAriaLabel,
          removeToast: gt,
          toasts: C.filter((la) => la.position == ot.position),
          heights: g.filter((la) => la.position == ot.position),
          setHeights: v,
          expandByDefault: c,
          gap: p,
          expanded: N,
          swipeDirections: e.swipeDirections
        });
      })) : null;
    }));
  });
  function h0({ to: t = "/", label: e = "Back to hub" }) {
    return E.jsx(Xi, {
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
  function sn({ title: t, children: e }) {
    return E.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        E.jsx(h0, {
          label: `Back to hub \u2014 ${t}`
        }),
        E.jsx("div", {
          className: "iframe-stage iframe-stage--react",
          children: e
        })
      ]
    });
  }
  const y0 = [
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
      title: "Minesweeper",
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
  ], Lf = [
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
  function V1() {
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
            children: y0.map((t, e) => E.jsx(Xi, {
              to: t.kind === "iframe" ? `/play/${t.id}` : t.path,
              className: `hub-card ${Lf[e % Lf.length]}`,
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
  function Z1() {
    const { id: t } = mv(), e = y0.find((l) => l.id === t && l.kind === "iframe");
    return !e || e.kind !== "iframe" ? E.jsx(r0, {
      to: "/",
      replace: true
    }) : E.jsxs("div", {
      className: "app-root app-root--game",
      children: [
        E.jsx(h0, {
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
  let p0;
  k1 = 16;
  K1 = 2;
  J1 = 9;
  $1 = 8;
  p0 = ({ board: t, selectedSquare: e, possibleMoves: l = [], onSquareClick: a, sideImagesWidth: n = 0, isSidebarOpen: u = true, forcedCapture: i = false, mandatoryPieceSquares: c = [], singleLegalMoveHighlight: s = false, comboContinuePiece: o = null, checkSquare: h = null }) => {
    const [r, d] = b.useState(64), y = () => {
      if (typeof window < "u") {
        const g = window.innerHeight * 0.98, v = u ? 384 : 0, N = n || 0, O = (window.innerWidth - v - N) * 0.98, U = Math.min(g, O);
        return Math.floor(U / 8);
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
    const _ = (g) => {
      if (!g) return {};
      const v = {
        pawn: 0,
        knight: 1,
        queen: 2,
        king: 3,
        bishop: 4,
        rook: 5
      }, N = k1, O = N * K1, U = N * J1, B = r / N, j = (g.color === "white" ? 0 : 1) * N, L = (g.type === "rook" && g.isKing ? $1 : v[g.type]) * N;
      return {
        backgroundImage: "url(/games/chess/chess-cat.png)",
        backgroundPosition: `${-j * B}px ${-L * B}px`,
        backgroundSize: `${O * B}px ${U * B}px`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%"
      };
    }, M = (g, v) => e && e.row === g && e.col === v, R = (g, v) => l.some((N) => N.row === g && N.col === v), f = (g, v) => l.find((N) => N.row === g && N.col === v), m = (g, v) => c.some((N) => N.row === g && N.col === v), p = (g, v) => o && o.row === g && o.col === v, x = (g, v) => h && h.row === g && h.col === v, D = (g, v) => {
      const N = (g + v) % 2 === 0, O = t[g][v], U = R(g, v), B = M(g, v), z = f(g, v), j = U && (z == null ? void 0 : z.isCapture) === true, q = m(g, v);
      let L = "flex items-center justify-center cursor-pointer relative ";
      return N ? L += "bg-gray-300 " : L += "bg-gray-800 ", B ? x(g, v) ? L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.55)] " : p(g, v) ? L += "ring-4 ring-orange-400 ring-inset shadow-[inset_0_0_12px_rgba(251,146,60,0.45)] " : L += "ring-4 ring-blue-500 ring-inset " : U ? s && l.length === 1 ? L += "ring-4 ring-amber-400 ring-inset shadow-[inset_0_0_12px_rgba(251,191,36,0.5)] animate-pulse " : i && j ? L += "ring-4 ring-amber-300 ring-inset shadow-[inset_0_0_10px_rgba(252,211,77,0.45)] animate-pulse " : L += "ring-2 ring-green-400 ring-inset " : q && O && !B ? L += "ring-2 ring-orange-400 ring-inset " : x(g, v) && O && !B && (L += "ring-4 ring-red-500 ring-inset shadow-[inset_0_0_14px_rgba(239,68,68,0.45)] "), L;
    }, S = () => ({
      width: `${r}px`,
      height: `${r}px`
    }), T = (g, v) => {
      const N = t[g][v], O = R(g, v), U = f(g, v), B = O && (U == null ? void 0 : U.isCapture) === true, z = s && l.length === 1 ? "w-6 h-6 bg-amber-400 rounded-full opacity-90 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" : i && B ? "w-5 h-5 bg-amber-300 rounded-full opacity-85 shadow-[0_0_6px_rgba(252,211,77,0.85)]" : "w-4 h-4 bg-green-500 rounded-full opacity-60", j = i && B ? "border-4 border-amber-400 animate-pulse shadow-[inset_0_0_8px_rgba(251,191,36,0.5)]" : "border-4 border-red-500";
      return E.jsxs("div", {
        className: D(g, v),
        style: S(),
        onClick: () => a(g, v),
        children: [
          N && E.jsx("div", {
            className: "absolute inset-0 z-10 select-none pointer-events-none",
            style: _(N)
          }),
          O && !N && E.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center z-[5]",
            children: E.jsx("div", {
              className: z
            })
          }),
          O && N && E.jsx("div", {
            className: `absolute inset-0 rounded pointer-events-none z-[5] ${j}`
          })
        ]
      }, `${g}-${v}`);
    }, C = (g) => {
      const v = [];
      for (let N = 0; N < 8; N++) v.push(T(g, N));
      return E.jsx("div", {
        className: "flex",
        children: v
      }, g);
    }, A = () => {
      const g = [];
      for (let v = 0; v < 8; v++) g.push(C(v));
      return g;
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
          children: A()
        })
      })
    });
  };
  function g0(t) {
    return t.map((e) => [
      ...e
    ]);
  }
  const Yf = () => ({
    white: {
      kingSide: true,
      queenSide: true
    },
    black: {
      kingSide: true,
      queenSide: true
    }
  });
  function W1(t) {
    return {
      white: {
        ...t.white
      },
      black: {
        ...t.black
      }
    };
  }
  function F1(t, e, l, a, n) {
    const u = W1(t), i = a.color;
    return a.type === "king" && (u[i] = {
      kingSide: false,
      queenSide: false
    }), a.type === "rook" && (e.row === 7 && e.col === 7 && (u.white.kingSide = false), e.row === 7 && e.col === 0 && (u.white.queenSide = false), e.row === 0 && e.col === 7 && (u.black.kingSide = false), e.row === 0 && e.col === 0 && (u.black.queenSide = false)), (n == null ? void 0 : n.type) === "rook" && (l.row === 7 && l.col === 7 && (u.white.kingSide = false), l.row === 7 && l.col === 0 && (u.white.queenSide = false), l.row === 0 && l.col === 7 && (u.black.kingSide = false), l.row === 0 && l.col === 0 && (u.black.queenSide = false)), u;
  }
  function Gf(t, e, l, a, n) {
    if (e !== a && l !== n) return false;
    if (e === a) {
      const i = n > l ? 1 : -1;
      for (let c = l + i; c !== n; c += i) if (t[e][c]) return false;
      return true;
    }
    const u = a > e ? 1 : -1;
    for (let i = e + u; i !== a; i += u) if (t[i][l]) return false;
    return true;
  }
  function Xf(t, e, l, a, n) {
    if (Math.abs(a - e) !== Math.abs(n - l) || e === a) return false;
    const u = a > e ? 1 : -1, i = n > l ? 1 : -1;
    let c = e + u, s = l + i;
    for (; c !== a || s !== n; ) {
      if (t[c][s]) return false;
      c += u, s += i;
    }
    return true;
  }
  function P1(t, e, l, a, n) {
    const u = t[e][l];
    if (!u) return false;
    switch (u.type) {
      case "pawn": {
        const i = u.color === "white" ? -1 : 1;
        return a === e + i && (n === l - 1 || n === l + 1);
      }
      case "knight": {
        const i = Math.abs(a - e), c = Math.abs(n - l);
        return i === 2 && c === 1 || i === 1 && c === 2;
      }
      case "king":
        return Math.abs(a - e) <= 1 && Math.abs(n - l) <= 1 && (a !== e || n !== l);
      case "rook":
        return Gf(t, e, l, a, n);
      case "bishop":
        return Xf(t, e, l, a, n);
      case "queen":
        return Gf(t, e, l, a, n) || Xf(t, e, l, a, n);
      default:
        return false;
    }
  }
  function Ge(t, e, l, a) {
    for (let n = 0; n < 8; n++) for (let u = 0; u < 8; u++) {
      const i = t[n][u];
      if (i && i.color === a && P1(t, n, u, e, l)) return true;
    }
    return false;
  }
  function v0(t, e) {
    for (let l = 0; l < 8; l++) for (let a = 0; a < 8; a++) {
      const n = t[l][a];
      if ((n == null ? void 0 : n.type) === "king" && n.color === e) return {
        row: l,
        col: a
      };
    }
    return null;
  }
  function jl(t, e) {
    const l = v0(e, t);
    if (!l) return false;
    const a = t === "white" ? "black" : "white";
    return Ge(e, l.row, l.col, a);
  }
  function Qf(t, e, l, a) {
    const n = g0(t), u = n[e.row][e.col], i = n[l.row][l.col];
    if (u.type === "king" && Math.abs(l.col - e.col) === 2) {
      const s = e.row;
      l.col > e.col ? (n[s][7] = null, n[s][5] = {
        type: "rook",
        color: u.color
      }) : (n[s][0] = null, n[s][3] = {
        type: "rook",
        color: u.color
      });
    }
    n[l.row][l.col] = u, n[e.row][e.col] = null;
    const c = F1(a, e, l, u, i);
    return {
      newBoard: n,
      captured: i,
      rights: c
    };
  }
  const I1 = () => {
    const [t, e] = b.useState({
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
      castlingRights: Yf()
    }), [l, a] = b.useState(false), n = 360, i = n * 2 + 24 * 2, c = (S) => ({
      height: `calc(100vh${l ? "" : " - 10px"})`,
      width: n,
      filter: S ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: S ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000"
    });
    function s() {
      const S = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let C = 0; C < 8; C++) S[1][C] = {
        type: "pawn",
        color: "black"
      }, S[6][C] = {
        type: "pawn",
        color: "white"
      };
      const T = [
        "rook",
        "knight",
        "bishop",
        "queen",
        "king",
        "bishop",
        "knight",
        "rook"
      ];
      for (let C = 0; C < 8; C++) S[0][C] = {
        type: T[C],
        color: "black"
      }, S[7][C] = {
        type: T[C],
        color: "white"
      };
      return S;
    }
    const o = (S, T) => {
      if (t.gameStatus === "checkmate" || t.gameStatus === "stalemate") return;
      const C = t.board[S][T], A = t.selectedSquare ? t.board[t.selectedSquare.row][t.selectedSquare.col] : null;
      if (!(!t.selectedSquare && !C)) {
        if (C && C.color === t.currentPlayer) {
          const g = r(S, T, t.board, t.castlingRights);
          e((v) => ({
            ...v,
            selectedSquare: {
              row: S,
              col: T
            },
            possibleMoves: g
          }));
          return;
        }
        if (t.selectedSquare && t.possibleMoves.some((g) => g.row === S && g.col === T)) {
          const g = t.selectedSquare, { newBoard: v, captured: N, rights: O } = Qf(t.board, g, {
            row: S,
            col: T
          }, t.castlingRights);
          if (A.type === "pawn" && (A.color === "white" && S === 0 || A.color === "black" && S === 7)) {
            e((L) => ({
              ...L,
              board: v,
              castlingRights: O,
              selectedSquare: null,
              possibleMoves: [],
              pendingPromotion: {
                row: S,
                col: T,
                color: A.color,
                from: g
              }
            }));
            return;
          }
          const U = {
            ...t.capturedPieces
          };
          N && U[N.color].push(N);
          const B = t.currentPlayer === "white" ? "black" : "white", z = jl(B, v), j = m(B, v, O);
          let q = "playing";
          z ? q = j ? "check" : "checkmate" : j || (q = "stalemate"), e((L) => ({
            ...L,
            board: v,
            castlingRights: O,
            currentPlayer: L.currentPlayer === "white" ? "black" : "white",
            selectedSquare: null,
            possibleMoves: [],
            gameStatus: q,
            capturedPieces: U,
            moveHistory: [
              ...L.moveHistory,
              {
                from: L.selectedSquare,
                to: {
                  row: S,
                  col: T
                },
                piece: A,
                captured: N
              }
            ]
          }));
          return;
        }
        e((g) => ({
          ...g,
          selectedSquare: null,
          possibleMoves: []
        }));
      }
    }, h = (S, T, C, A) => {
      const g = C[S][T];
      if (!g) return [];
      const v = [];
      switch (g.type) {
        case "pawn":
          v.push(...d(S, T, g.color, C));
          break;
        case "rook":
          v.push(...y(S, T, g.color, C));
          break;
        case "knight":
          v.push(..._(S, T, g.color, C));
          break;
        case "bishop":
          v.push(...M(S, T, g.color, C));
          break;
        case "queen":
          v.push(...R(S, T, g.color, C));
          break;
        case "king":
          v.push(...f(S, T, g.color, C, A));
          break;
      }
      return v;
    }, r = (S, T, C, A) => {
      const g = C[S][T];
      if (!g) return [];
      const v = h(S, T, C, A), N = g.color;
      return v.filter((O) => {
        const { newBoard: U } = Qf(C, {
          row: S,
          col: T
        }, O, A);
        let B = U;
        return g.type === "pawn" && (O.row === 0 || O.row === 7) && (B = g0(U), B[O.row][O.col] = {
          type: "queen",
          color: g.color
        }), !jl(N, B);
      });
    }, d = (S, T, C, A) => {
      const g = [], v = C === "white" ? -1 : 1, N = C === "white" ? 6 : 1;
      S + v >= 0 && S + v < 8 && !A[S + v][T] && (g.push({
        row: S + v,
        col: T
      }), S === N && !A[S + 2 * v][T] && g.push({
        row: S + 2 * v,
        col: T
      }));
      for (const O of [
        -1,
        1
      ]) {
        const U = T + O;
        if (U >= 0 && U < 8 && S + v >= 0 && S + v < 8) {
          const B = A[S + v][U];
          B && B.color !== C && g.push({
            row: S + v,
            col: U
          });
        }
      }
      return g;
    }, y = (S, T, C, A) => {
      const g = [], v = [
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
      for (const [N, O] of v) for (let U = 1; U < 8; U++) {
        const B = S + N * U, z = T + O * U;
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
    }, _ = (S, T, C, A) => {
      const g = [], v = [
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
      for (const [N, O] of v) {
        const U = S + N, B = T + O;
        if (U >= 0 && U < 8 && B >= 0 && B < 8) {
          const z = A[U][B];
          (!z || z.color !== C) && g.push({
            row: U,
            col: B
          });
        }
      }
      return g;
    }, M = (S, T, C, A) => {
      const g = [], v = [
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
      for (const [N, O] of v) for (let U = 1; U < 8; U++) {
        const B = S + N * U, z = T + O * U;
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
    }, R = (S, T, C, A) => [
      ...y(S, T, C, A),
      ...M(S, T, C, A)
    ], f = (S, T, C, A, g) => {
      var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2;
      const v = [], N = [
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
      for (const [U, B] of N) {
        const z = S + U, j = T + B;
        if (z >= 0 && z < 8 && j >= 0 && j < 8) {
          const q = A[z][j];
          (!q || q.color !== C) && v.push({
            row: z,
            col: j
          });
        }
      }
      const O = C === "white" ? "black" : "white";
      return C === "white" && S === 7 && T === 4 && (g.white.kingSide && ((_a2 = A[7][7]) == null ? void 0 : _a2.type) === "rook" && ((_b = A[7][7]) == null ? void 0 : _b.color) === "white" && !A[7][5] && !A[7][6] && !jl("white", A) && !Ge(A, 7, 5, O) && !Ge(A, 7, 6, O) && v.push({
        row: 7,
        col: 6
      }), g.white.queenSide && ((_c2 = A[7][0]) == null ? void 0 : _c2.type) === "rook" && ((_d2 = A[7][0]) == null ? void 0 : _d2.color) === "white" && !A[7][1] && !A[7][2] && !A[7][3] && !jl("white", A) && !Ge(A, 7, 3, O) && !Ge(A, 7, 2, O) && v.push({
        row: 7,
        col: 2
      })), C === "black" && S === 0 && T === 4 && (g.black.kingSide && ((_e2 = A[0][7]) == null ? void 0 : _e2.type) === "rook" && ((_f2 = A[0][7]) == null ? void 0 : _f2.color) === "black" && !A[0][5] && !A[0][6] && !jl("black", A) && !Ge(A, 0, 5, O) && !Ge(A, 0, 6, O) && v.push({
        row: 0,
        col: 6
      }), g.black.queenSide && ((_g2 = A[0][0]) == null ? void 0 : _g2.type) === "rook" && ((_h2 = A[0][0]) == null ? void 0 : _h2.color) === "black" && !A[0][1] && !A[0][2] && !A[0][3] && !jl("black", A) && !Ge(A, 0, 3, O) && !Ge(A, 0, 2, O) && v.push({
        row: 0,
        col: 2
      })), v;
    }, m = (S, T, C) => {
      for (let A = 0; A < 8; A++) for (let g = 0; g < 8; g++) {
        const v = T[A][g];
        if (v && v.color === S && r(A, g, T, C).length > 0) return true;
      }
      return false;
    }, p = (S) => {
      if (!t.pendingPromotion) return;
      const { row: T, col: C, color: A, from: g } = t.pendingPromotion, v = t.board.map((z) => [
        ...z
      ]);
      v[T][C] = {
        type: S,
        color: A
      };
      const N = A === "white" ? "black" : "white", O = jl(N, v), U = m(N, v, t.castlingRights);
      let B = "playing";
      O ? B = U ? "check" : "checkmate" : U || (B = "stalemate"), e((z) => ({
        ...z,
        board: v,
        currentPlayer: z.currentPlayer === "white" ? "black" : "white",
        gameStatus: B,
        pendingPromotion: null,
        moveHistory: [
          ...z.moveHistory,
          {
            from: g,
            to: {
              row: T,
              col: C
            },
            piece: {
              type: S,
              color: A
            },
            captured: null,
            promotion: true
          }
        ]
      }));
    }, x = () => {
      e({
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
        castlingRights: Yf()
      });
    }, D = t.gameStatus === "check" || t.gameStatus === "checkmate" ? v0(t.board, t.currentPlayer) : null;
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
          onClick: () => a((S) => !S),
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
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${t.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(t.currentPlayer === "black")
                }),
                E.jsx("div", {
                  children: E.jsx(p0, {
                    board: t.board,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: l,
                    checkSquare: D
                  })
                }),
                E.jsx("img", {
                  src: "/games/chess/light-cat.jpg",
                  alt: "White player",
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${t.currentPlayer === "white" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(t.currentPlayer === "white")
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
                      onClick: x,
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
                                t.capturedPieces.white.map((S, T) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Dc(S)
                                }, T)),
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
                                t.capturedPieces.black.map((S, T) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: Dc(S)
                                }, T)),
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
                            t.moveHistory.slice(-12).map((S, T) => E.jsxs("div", {
                              className: "mb-2 text-xs text-gray-200",
                              style: {
                                fontSize: "8px",
                                fontFamily: "'Press Start 2P', monospace"
                              },
                              children: [
                                S.piece.color,
                                " ",
                                S.piece.type,
                                ":",
                                " ",
                                String.fromCharCode(97 + S.from.col),
                                8 - S.from.row,
                                " \u2192",
                                " ",
                                String.fromCharCode(97 + S.to.col),
                                8 - S.to.row,
                                S.captured && ` (x${S.captured.type})`,
                                S.promotion && ` (=${S.piece.type})`
                              ]
                            }, T)),
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
                ].map((S) => E.jsx("button", {
                  onClick: () => p(S),
                  className: "w-16 h-16 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400 rounded flex items-center justify-center text-2xl transition-colors",
                  style: {
                    fontSize: "20px",
                    filter: "drop-shadow(1px 1px 0px #000)",
                    boxShadow: "inset 0 0 0 1px #000"
                  },
                  children: Dc({
                    type: S,
                    color: t.pendingPromotion.color
                  })
                }, S))
              })
            ]
          })
        })
      ]
    });
  }, Dc = (t) => ({
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
  })[t.type][t.color], bi = 8;
  tb = function(t, e, l) {
    let a = 0;
    for (let n = 0; n < bi; n++) for (let u = 0; u < bi; u++) {
      const i = t[n][u];
      i && e(i, n, u) && (a += l(n, u, t).length);
    }
    return a;
  };
  eb = function(t, e, l, a) {
    if (!e) return [];
    const n = [];
    for (let u = 0; u < bi; u++) for (let i = 0; i < bi; i++) {
      const c = t[u][i];
      c && l(c, u, i) && a(u, i, t).length > 0 && n.push({
        row: u,
        col: i
      });
    }
    return n;
  };
  const lb = () => {
    const [t, e] = b.useState({
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
    }), [l, a] = b.useState(false), n = 360, i = n * 2 + 24 * 2, c = (g) => ({
      height: `calc(100vh${l ? "" : " - 10px"})`,
      width: n,
      filter: g ? "brightness(1.2)" : "brightness(0.5)",
      boxShadow: g ? "0 0 0 2px #000, inset 0 0 0 1px #000, 0 0 28px rgba(250, 204, 21, 0.55)" : "0 0 0 2px #000, inset 0 0 0 1px #000"
    });
    function s() {
      const g = Array(8).fill(null).map(() => Array(8).fill(null));
      for (let v = 0; v < 3; v++) for (let N = 0; N < 8; N++) (v + N) % 2 === 1 && (g[v][N] = {
        type: "checker",
        color: "red",
        isKing: false
      });
      for (let v = 5; v < 8; v++) for (let N = 0; N < 8; N++) (v + N) % 2 === 1 && (g[v][N] = {
        type: "checker",
        color: "black",
        isKing: false
      });
      return g;
    }
    const o = (g, v) => {
      const N = t.board[g][v];
      if (t.captureSequence.length > 0 && !t.selectedSquare) {
        const O = t.captureSequence[t.captureSequence.length - 1];
        if (O.to.row !== g || O.to.col !== v) return;
      }
      if (!t.selectedSquare && (!N || N.color === t.currentPlayer)) {
        if (N && N.color === t.currentPlayer) {
          const O = d(g, v, t.board);
          e((U) => ({
            ...U,
            selectedSquare: {
              row: g,
              col: v
            },
            possibleMoves: O
          }));
        }
        return;
      }
      if (t.selectedSquare && t.possibleMoves.some((O) => O.row === g && O.col === v)) {
        const O = t.board.map((z) => [
          ...z
        ]), U = O[t.selectedSquare.row][t.selectedSquare.col];
        if (Math.abs(g - t.selectedSquare.row) === 2) {
          const z = (t.selectedSquare.row + g) / 2, j = (t.selectedSquare.col + v) / 2, q = O[z][j];
          O[z][j] = null;
          const L = {
            ...t.capturedPieces
          };
          L[q.color]++, O[g][v] = U, O[t.selectedSquare.row][t.selectedSquare.col] = null, (U.color === "red" && g === 7 || U.color === "black" && g === 0) && !U.isKing && (O[g][v] = {
            ...U,
            isKing: true
          });
          const Mt = h(g, v, O);
          if (Mt.length > 0 && !t.captureSequence.length) {
            const gt = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: g,
                  col: v
                },
                captured: q
              }
            ];
            e((G) => ({
              ...G,
              board: O,
              selectedSquare: {
                row: g,
                col: v
              },
              possibleMoves: Mt,
              capturedPieces: L,
              captureSequence: gt
            }));
            return;
          } else if (t.captureSequence.length > 0) {
            const gt = [
              ...t.captureSequence,
              {
                from: t.selectedSquare,
                to: {
                  row: g,
                  col: v
                },
                captured: q
              }
            ], G = h(g, v, O);
            if (G.length > 0) {
              e((k) => ({
                ...k,
                board: O,
                selectedSquare: {
                  row: g,
                  col: v
                },
                possibleMoves: G,
                capturedPieces: L,
                captureSequence: gt
              }));
              return;
            } else {
              const k = t.currentPlayer === "red" ? "black" : "red", I = y(O, k);
              e((Ut) => ({
                ...Ut,
                board: O,
                currentPlayer: k,
                selectedSquare: null,
                possibleMoves: [],
                gameStatus: I,
                capturedPieces: L,
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
            const gt = t.currentPlayer === "red" ? "black" : "red", G = y(O, gt);
            e((k) => ({
              ...k,
              board: O,
              currentPlayer: gt,
              selectedSquare: null,
              possibleMoves: [],
              gameStatus: G,
              capturedPieces: L,
              captureSequence: [],
              moveHistory: [
                ...k.moveHistory,
                {
                  piece: U,
                  moves: [
                    {
                      from: t.selectedSquare,
                      to: {
                        row: g,
                        col: v
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
          O[g][v] = U, O[t.selectedSquare.row][t.selectedSquare.col] = null, (U.color === "red" && g === 7 || U.color === "black" && g === 0) && !U.isKing && (O[g][v] = {
            ...U,
            isKing: true
          });
          const j = t.currentPlayer === "red" ? "black" : "red", q = y(O, j);
          e((L) => ({
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
                piece: U,
                moves: [
                  {
                    from: L.selectedSquare,
                    to: {
                      row: g,
                      col: v
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
    }, h = (g, v, N) => {
      const O = N[g][v];
      if (!O || O.type !== "checker") return [];
      const U = [], B = O.isKing ? [
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
        const q = g + 2 * z, L = v + 2 * j, Z = g + z, Mt = v + j;
        if (q >= 0 && q < 8 && L >= 0 && L < 8 && !N[q][L]) {
          const gt = N[Z][Mt];
          gt && gt.color !== O.color && U.push({
            row: q,
            col: L,
            isCapture: true
          });
        }
      }
      return U;
    }, r = (g, v) => {
      for (let N = 0; N < 8; N++) for (let O = 0; O < 8; O++) {
        const U = g[N][O];
        if (U && U.color === v && h(N, O, g).length > 0) return true;
      }
      return false;
    }, d = (g, v, N) => {
      const O = N[g][v];
      if (!O || O.type !== "checker") return [];
      const U = h(g, v, N);
      if (r(N, O.color) || U.length > 0) return U;
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
        const L = g + j, Z = v + q;
        L >= 0 && L < 8 && Z >= 0 && Z < 8 && !N[L][Z] && B.push({
          row: L,
          col: Z
        });
      }
      return B;
    }, y = (g, v) => {
      let N = false, O = false;
      for (let U = 0; U < 8; U++) {
        for (let B = 0; B < 8; B++) {
          const z = g[U][B];
          if (z && z.color === v && (N = true, d(U, B, g).length > 0)) {
            O = true;
            break;
          }
        }
        if (O) break;
      }
      return !N || !O ? v === "red" ? "black_wins" : "red_wins" : "playing";
    }, _ = () => {
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
    }, R = ((g) => g.map((v) => v.map((N) => N ? {
      type: "rook",
      color: N.color === "red" ? "white" : "black",
      isKing: N.isKing
    } : null)))(t.board), f = t.gameStatus === "playing" && t.captureSequence.length > 0, m = f && t.captureSequence[t.captureSequence.length - 1].to, p = t.gameStatus === "playing" && t.captureSequence.length === 0, x = t.board, D = t.currentPlayer, S = f || p && r(x, D), T = f && m ? [
      {
        row: m.row,
        col: m.col
      }
    ] : p ? eb(x, r(x, D), (g, v, N) => g && g.color === D, h) : [], C = p ? tb(x, (g, v, N) => g && g.color === D, d) : 0;
    let A = false;
    return t.gameStatus === "playing" && (t.captureSequence.length > 0 ? A = t.possibleMoves.length === 1 : A = C === 1), E.jsxs("div", {
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
          onClick: () => a((g) => !g),
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
                  className: `object-cover object-center border-4 transition-[filter,box-shadow] duration-200 ${t.currentPlayer === "black" ? "border-yellow-300" : "border-gray-700"}`,
                  style: c(t.currentPlayer === "black")
                }),
                E.jsx("div", {
                  children: E.jsx(p0, {
                    board: R,
                    selectedSquare: t.selectedSquare,
                    possibleMoves: t.possibleMoves,
                    onSquareClick: o,
                    sideImagesWidth: i,
                    isSidebarOpen: l,
                    forcedCapture: S,
                    mandatoryPieceSquares: T,
                    singleLegalMoveHighlight: A,
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
                      onClick: _,
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
                                }, (g, v) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u2656"
                                }, v)),
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
                                }, (g, v) => E.jsx("div", {
                                  className: "text-lg",
                                  style: {
                                    fontSize: "14px",
                                    filter: "drop-shadow(1px 1px 0px #000)"
                                  },
                                  children: "\u265C"
                                }, v)),
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
                            t.moveHistory.slice(-12).map((g, v) => E.jsxs("div", {
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
                                g.moves.map((N, O) => `${String.fromCharCode(97 + N.from.col)}${8 - N.from.row}\u2192${String.fromCharCode(97 + N.to.col)}${8 - N.to.row}${N.captured ? "x" : ""}`).join(", ")
                              ]
                            }, v)),
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
  }, ab = b.lazy(() => Nl(() => import("./page-DORG_XLs.js").then(async (m) => {
    await m.__tla;
    return m;
  }), [])), nb = b.lazy(() => Nl(() => import("./SnakeSinglePlayerPage-B3bk5GW6.js"), __vite__mapDeps([0,1,2,3,4,5])).then((t) => ({
    default: t.default
  }))), ub = b.lazy(() => Nl(() => import("./TypingPage-e6cBSfQ7.js"), __vite__mapDeps([6,1]))), ib = b.lazy(() => Nl(() => import("./page-CVXPpEuL.js"), __vite__mapDeps([7,1,2,3,4,5,8,9,10,11]))), cb = b.lazy(() => Nl(() => import("./page-C5KCGQxk.js"), __vite__mapDeps([12,1,4,5,13,3,11,14]))), sb = b.lazy(() => Nl(() => import("./page-BN26O1Ua.js"), __vite__mapDeps([15,16,8,5,13]))), rb = b.lazy(() => Nl(() => import("./page-DYMXoWE4.js"), __vite__mapDeps([17,16,8,5,9,13]))), ob = b.lazy(() => Nl(() => import("./page-Cip4vD9G.js"), __vite__mapDeps([18,1,10,3,5,13,14,11])));
  function fb() {
    return E.jsxs(f1, {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      children: [
        E.jsx(Pv, {
          basename: "/",
          children: E.jsx(b.Suspense, {
            fallback: null,
            children: E.jsxs(Mv, {
              children: [
                E.jsx(Xt, {
                  path: "/",
                  element: E.jsx(V1, {})
                }),
                E.jsx(Xt, {
                  path: "/play/:id",
                  element: E.jsx(Z1, {})
                }),
                E.jsx(Xt, {
                  path: "/motherload",
                  element: E.jsx(sn, {
                    title: "Motherload",
                    children: E.jsx(b.Suspense, {
                      fallback: E.jsx("div", {
                        className: "flex flex-1 items-center justify-center bg-black text-white",
                        children: "Loading\u2026"
                      }),
                      children: E.jsx(ab, {})
                    })
                  })
                }),
                E.jsx(Xt, {
                  path: "/chess",
                  element: E.jsx(sn, {
                    title: "Chess",
                    children: E.jsx(I1, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/checkers",
                  element: E.jsx(sn, {
                    title: "Checkers",
                    children: E.jsx(lb, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/snake",
                  element: E.jsx(sn, {
                    title: "Snake",
                    children: E.jsx(nb, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/typing",
                  element: E.jsx(sn, {
                    title: "Typing",
                    children: E.jsx(ub, {})
                  })
                }),
                E.jsx(Xt, {
                  path: "/multiplayer",
                  element: E.jsx(ib, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/snake",
                  element: E.jsx(cb, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/chess",
                  element: E.jsx(sb, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/checkers",
                  element: E.jsx(rb, {})
                }),
                E.jsx(Xt, {
                  path: "/multiplayer/:roomId/fighter",
                  element: E.jsx(ob, {})
                }),
                E.jsx(Xt, {
                  path: "*",
                  element: E.jsx(r0, {
                    to: "/",
                    replace: true
                  })
                })
              ]
            })
          })
        }),
        E.jsx(Q1, {
          richColors: true,
          position: "top-center"
        })
      ]
    });
  }
  Mg.createRoot(document.getElementById("root")).render(E.jsx(b.StrictMode, {
    children: E.jsx(fb, {})
  }));
})();
export {
  $1 as C,
  H as R,
  K1 as S,
  Nl as _,
  __tla,
  id as a,
  mb as b,
  ty as c,
  mv as d,
  tb as e,
  J1 as f,
  eb as g,
  k1 as h,
  E as j,
  b as r,
  yb as t,
  u0 as u,
  hb as z
};
