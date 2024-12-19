function Qc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i &&
                        Object.defineProperty(
                            e,
                            l,
                            i.get ? i : {enumerable: !0, get: () => r[l]}
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, {value: "Module"})
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, {childList: !0, subtree: !0});
    function n(l) {
        const i = {};
        return (
            l.integrity && (i.integrity = l.integrity),
            l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : l.crossOrigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i);
    }
})();
function Kc(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var ws = {exports: {}},
    pl = {},
    xs = {exports: {}},
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for("react.element"),
    Gc = Symbol.for("react.portal"),
    Yc = Symbol.for("react.fragment"),
    Xc = Symbol.for("react.strict_mode"),
    Jc = Symbol.for("react.profiler"),
    Zc = Symbol.for("react.provider"),
    qc = Symbol.for("react.context"),
    bc = Symbol.for("react.forward_ref"),
    ef = Symbol.for("react.suspense"),
    tf = Symbol.for("react.memo"),
    nf = Symbol.for("react.lazy"),
    eu = Symbol.iterator;
function rf(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (eu && e[eu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var ks = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Ss = Object.assign,
    Es = {};
function fn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Es),
        (this.updater = n || ks);
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cs() {}
Cs.prototype = fn.prototype;
function no(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Es),
        (this.updater = n || ks);
}
var ro = (no.prototype = new Cs());
ro.constructor = no;
Ss(ro, fn.prototype);
ro.isPureReactComponent = !0;
var tu = Array.isArray,
    _s = Object.prototype.hasOwnProperty,
    lo = {current: null},
    Ns = {key: !0, ref: !0, __self: !0, __source: !0};
function Ps(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            _s.call(t, r) && !Ns.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: rr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: lo.current,
    };
}
function lf(e, t) {
    return {
        $$typeof: rr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function io(e) {
    return typeof e == "object" && e !== null && e.$$typeof === rr;
}
function of(e) {
    var t = {"=": "=0", ":": "=2"};
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var nu = /\/+/g;
function Ml(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? of("" + e.key)
        : t.toString(36);
}
function jr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case rr:
                    case Gc:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (l = l(o)),
            (e = r === "" ? "." + Ml(o, 0) : r),
            tu(l)
                ? ((n = ""),
                  e != null && (n = e.replace(nu, "$&/") + "/"),
                  jr(l, t, n, "", function (a) {
                      return a;
                  }))
                : l != null &&
                  (io(l) &&
                      (l = lf(
                          l,
                          n +
                              (!l.key || (o && o.key === l.key)
                                  ? ""
                                  : ("" + l.key).replace(nu, "$&/") + "/") +
                              e
                      )),
                  t.push(l)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), tu(e)))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var s = r + Ml(i, u);
            o += jr(i, t, n, s, l);
        }
    else if (((s = rf(e)), typeof s == "function"))
        for (e = s.call(e), u = 0; !(i = e.next()).done; )
            (i = i.value), (s = r + Ml(i, u++)), (o += jr(i, t, n, s, l));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function fr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        jr(e, r, "", "", function (i) {
            return t.call(n, i, l++);
        }),
        r
    );
}
function uf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ae = {current: null},
    zr = {transition: null},
    sf = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: zr,
        ReactCurrentOwner: lo,
    };
function js() {
    throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
    map: fr,
    forEach: function (e, t, n) {
        fr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            fr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            fr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!io(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
R.Component = fn;
R.Fragment = Yc;
R.Profiler = Jc;
R.PureComponent = no;
R.StrictMode = Xc;
R.Suspense = ef;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sf;
R.act = js;
R.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Ss({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = lo.current)),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in t)
            _s.call(t, s) &&
                !Ns.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
        r.children = u;
    }
    return {$$typeof: rr, type: e.type, key: l, ref: i, props: r, _owner: o};
};
R.createContext = function (e) {
    return (
        (e = {
            $$typeof: qc,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = {$$typeof: Zc, _context: e}),
        (e.Consumer = e)
    );
};
R.createElement = Ps;
R.createFactory = function (e) {
    var t = Ps.bind(null, e);
    return (t.type = e), t;
};
R.createRef = function () {
    return {current: null};
};
R.forwardRef = function (e) {
    return {$$typeof: bc, render: e};
};
R.isValidElement = io;
R.lazy = function (e) {
    return {$$typeof: nf, _payload: {_status: -1, _result: e}, _init: uf};
};
R.memo = function (e, t) {
    return {$$typeof: tf, type: e, compare: t === void 0 ? null : t};
};
R.startTransition = function (e) {
    var t = zr.transition;
    zr.transition = {};
    try {
        e();
    } finally {
        zr.transition = t;
    }
};
R.unstable_act = js;
R.useCallback = function (e, t) {
    return ae.current.useCallback(e, t);
};
R.useContext = function (e) {
    return ae.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
    return ae.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
    return ae.current.useEffect(e, t);
};
R.useId = function () {
    return ae.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
    return ae.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
    return ae.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
    return ae.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
    return ae.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
    return ae.current.useReducer(e, t, n);
};
R.useRef = function (e) {
    return ae.current.useRef(e);
};
R.useState = function (e) {
    return ae.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
    return ae.current.useTransition();
};
R.version = "18.3.1";
xs.exports = R;
var E = xs.exports;
const af = Kc(E),
    cf = Qc({__proto__: null, default: af}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = E,
    df = Symbol.for("react.element"),
    pf = Symbol.for("react.fragment"),
    hf = Object.prototype.hasOwnProperty,
    mf =
        ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    vf = {key: !0, ref: !0, __self: !0, __source: !0};
function zs(e, t, n) {
    var r,
        l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t) hf.call(t, r) && !vf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: df,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: mf.current,
    };
}
pl.Fragment = pf;
pl.jsx = zs;
pl.jsxs = zs;
ws.exports = pl;
var g = ws.exports,
    Ls = {exports: {}},
    xe = {},
    Ts = {exports: {}},
    Rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(N, L) {
        var T = N.length;
        N.push(L);
        e: for (; 0 < T; ) {
            var Q = (T - 1) >>> 1,
                Z = N[Q];
            if (0 < l(Z, L)) (N[Q] = L), (N[T] = Z), (T = Q);
            else break e;
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0];
    }
    function r(N) {
        if (N.length === 0) return null;
        var L = N[0],
            T = N.pop();
        if (T !== L) {
            N[0] = T;
            e: for (var Q = 0, Z = N.length, ar = Z >>> 1; Q < ar; ) {
                var xt = 2 * (Q + 1) - 1,
                    Ol = N[xt],
                    kt = xt + 1,
                    cr = N[kt];
                if (0 > l(Ol, T))
                    kt < Z && 0 > l(cr, Ol)
                        ? ((N[Q] = cr), (N[kt] = T), (Q = kt))
                        : ((N[Q] = Ol), (N[xt] = T), (Q = xt));
                else if (kt < Z && 0 > l(cr, T))
                    (N[Q] = cr), (N[kt] = T), (Q = kt);
                else break e;
            }
        }
        return L;
    }
    function l(N, L) {
        var T = N.sortIndex - L.sortIndex;
        return T !== 0 ? T : N.id - L.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            u = o.now();
        e.unstable_now = function () {
            return o.now() - u;
        };
    }
    var s = [],
        a = [],
        h = 1,
        p = null,
        m = 3,
        y = !1,
        w = !1,
        x = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(N) {
        for (var L = n(a); L !== null; ) {
            if (L.callback === null) r(a);
            else if (L.startTime <= N)
                r(a), (L.sortIndex = L.expirationTime), t(s, L);
            else break;
            L = n(a);
        }
    }
    function v(N) {
        if (((x = !1), d(N), !w))
            if (n(s) !== null) (w = !0), Tl(S);
            else {
                var L = n(a);
                L !== null && Rl(v, L.startTime - N);
            }
    }
    function S(N, L) {
        (w = !1), x && ((x = !1), f(z), (z = -1)), (y = !0);
        var T = m;
        try {
            for (
                d(L), p = n(s);
                p !== null && (!(p.expirationTime > L) || (N && !je()));

            ) {
                var Q = p.callback;
                if (typeof Q == "function") {
                    (p.callback = null), (m = p.priorityLevel);
                    var Z = Q(p.expirationTime <= L);
                    (L = e.unstable_now()),
                        typeof Z == "function"
                            ? (p.callback = Z)
                            : p === n(s) && r(s),
                        d(L);
                } else r(s);
                p = n(s);
            }
            if (p !== null) var ar = !0;
            else {
                var xt = n(a);
                xt !== null && Rl(v, xt.startTime - L), (ar = !1);
            }
            return ar;
        } finally {
            (p = null), (m = T), (y = !1);
        }
    }
    var P = !1,
        j = null,
        z = -1,
        W = 5,
        O = -1;
    function je() {
        return !(e.unstable_now() - O < W);
    }
    function mn() {
        if (j !== null) {
            var N = e.unstable_now();
            O = N;
            var L = !0;
            try {
                L = j(!0, N);
            } finally {
                L ? vn() : ((P = !1), (j = null));
            }
        } else P = !1;
    }
    var vn;
    if (typeof c == "function")
        vn = function () {
            c(mn);
        };
    else if (typeof MessageChannel < "u") {
        var bo = new MessageChannel(),
            Wc = bo.port2;
        (bo.port1.onmessage = mn),
            (vn = function () {
                Wc.postMessage(null);
            });
    } else
        vn = function () {
            C(mn, 0);
        };
    function Tl(N) {
        (j = N), P || ((P = !0), vn());
    }
    function Rl(N, L) {
        z = C(function () {
            N(e.unstable_now());
        }, L);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (N) {
            N.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || y || ((w = !0), Tl(S));
        }),
        (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (W = 0 < N ? Math.floor(1e3 / N) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (N) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = m;
            }
            var T = m;
            m = L;
            try {
                return N();
            } finally {
                m = T;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (N, L) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3;
            }
            var T = m;
            m = N;
            try {
                return L();
            } finally {
                m = T;
            }
        }),
        (e.unstable_scheduleCallback = function (N, L, T) {
            var Q = e.unstable_now();
            switch (
                (typeof T == "object" && T !== null
                    ? ((T = T.delay),
                      (T = typeof T == "number" && 0 < T ? Q + T : Q))
                    : (T = Q),
                N)
            ) {
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
            return (
                (Z = T + Z),
                (N = {
                    id: h++,
                    callback: L,
                    priorityLevel: N,
                    startTime: T,
                    expirationTime: Z,
                    sortIndex: -1,
                }),
                T > Q
                    ? ((N.sortIndex = T),
                      t(a, N),
                      n(s) === null &&
                          N === n(a) &&
                          (x ? (f(z), (z = -1)) : (x = !0), Rl(v, T - Q)))
                    : ((N.sortIndex = Z), t(s, N), w || y || ((w = !0), Tl(S))),
                N
            );
        }),
        (e.unstable_shouldYield = je),
        (e.unstable_wrapCallback = function (N) {
            var L = m;
            return function () {
                var T = m;
                m = L;
                try {
                    return N.apply(this, arguments);
                } finally {
                    m = T;
                }
            };
        });
})(Rs);
Ts.exports = Rs;
var gf = Ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = E,
    we = gf;
function k(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Os = new Set(),
    Un = {};
function Mt(e, t) {
    rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
    for (Un[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
}
var Ge = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    ui = Object.prototype.hasOwnProperty,
    wf =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ru = {},
    lu = {};
function xf(e) {
    return ui.call(lu, e)
        ? !0
        : ui.call(ru, e)
        ? !1
        : wf.test(e)
        ? (lu[e] = !0)
        : ((ru[e] = !0), !1);
}
function kf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Sf(e, t, n, r) {
    if (t === null || typeof t > "u" || kf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ce(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ne[e] = new ce(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var oo = /[\-:]([a-z])/g;
function uo(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(oo, uo);
        ne[t] = new ce(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(oo, uo);
        ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(oo, uo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function so(e, t, n, r) {
    var l = ne.hasOwnProperty(t) ? ne[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Sf(t, n, l, r) && (n = null),
        r || l === null
            ? xf(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((l = l.type),
                    (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    dr = Symbol.for("react.element"),
    Bt = Symbol.for("react.portal"),
    $t = Symbol.for("react.fragment"),
    ao = Symbol.for("react.strict_mode"),
    si = Symbol.for("react.profiler"),
    Ms = Symbol.for("react.provider"),
    Is = Symbol.for("react.context"),
    co = Symbol.for("react.forward_ref"),
    ai = Symbol.for("react.suspense"),
    ci = Symbol.for("react.suspense_list"),
    fo = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    Ds = Symbol.for("react.offscreen"),
    iu = Symbol.iterator;
function gn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (iu && e[iu]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var H = Object.assign,
    Il;
function _n(e) {
    if (Il === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Il = (t && t[1]) || "";
        }
    return (
        `
` +
        Il +
        e
    );
}
var Dl = !1;
function Fl(e, t) {
    if (!e || Dl) return "";
    Dl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (a) {
                r = a;
            }
            e();
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (
                var l = a.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = l.length - 1,
                    u = i.length - 1;
                1 <= o && 0 <= u && l[o] !== i[u];

            )
                u--;
            for (; 1 <= o && 0 <= u; o--, u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if ((o--, u--, 0 > u || l[o] !== i[u])) {
                                var s =
                                    `
` + l[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        s.includes("<anonymous>") &&
                                        (s = s.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= o && 0 <= u);
                    break;
                }
        }
    } finally {
        (Dl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Ef(e) {
    switch (e.tag) {
        case 5:
            return _n(e.type);
        case 16:
            return _n("Lazy");
        case 13:
            return _n("Suspense");
        case 19:
            return _n("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Fl(e.type, !1)), e;
        case 11:
            return (e = Fl(e.type.render, !1)), e;
        case 1:
            return (e = Fl(e.type, !0)), e;
        default:
            return "";
    }
}
function fi(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $t:
            return "Fragment";
        case Bt:
            return "Portal";
        case si:
            return "Profiler";
        case ao:
            return "StrictMode";
        case ai:
            return "Suspense";
        case ci:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Is:
                return (e.displayName || "Context") + ".Consumer";
            case Ms:
                return (e._context.displayName || "Context") + ".Provider";
            case co:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case fo:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : fi(e.type) || "Memo"
                );
            case be:
                (t = e._payload), (e = e._init);
                try {
                    return fi(e(t));
                } catch {}
        }
    return null;
}
function Cf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return fi(t);
        case 8:
            return t === ao ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function mt(e) {
    switch (typeof e) {
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
function Fs(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function _f(e) {
    var t = Fs(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var l = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(e, t, {enumerable: n.enumerable}),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function pr(e) {
    e._valueTracker || (e._valueTracker = _f(e));
}
function Us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Fs(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Ar(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function di(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function ou(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = mt(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function Bs(e, t) {
    (t = t.checked), t != null && so(e, "checked", t, !1);
}
function pi(e, t) {
    Bs(e, t);
    var n = mt(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? hi(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && hi(e, t.type, mt(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function hi(e, t, n) {
    (t !== "number" || Ar(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Zt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function mi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function su(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(k(92));
            if (Nn(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = {initialValue: mt(n)};
}
function $s(e, t) {
    var n = mt(t.value),
        r = mt(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function au(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function As(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function vi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? As(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var hr,
    Hs = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                hr = hr || document.createElement("div"),
                    hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = hr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Bn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var zn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
    Nf.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
    });
});
function Vs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (zn.hasOwnProperty(e) && zn[e])
        ? ("" + t).trim()
        : t + "px";
}
function Ws(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Vs(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var Pf = H(
    {menuitem: !0},
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function gi(e, t) {
    if (t) {
        if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(k(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
}
function yi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var wi = null;
function po(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var xi = null,
    qt = null,
    bt = null;
function cu(e) {
    if ((e = or(e))) {
        if (typeof xi != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = yl(t)), xi(e.stateNode, e.type, t));
    }
}
function Qs(e) {
    qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Ks() {
    if (qt) {
        var e = qt,
            t = bt;
        if (((bt = qt = null), cu(e), t))
            for (e = 0; e < t.length; e++) cu(t[e]);
    }
}
function Gs(e, t) {
    return e(t);
}
function Ys() {}
var Ul = !1;
function Xs(e, t, n) {
    if (Ul) return e(t, n);
    Ul = !0;
    try {
        return Gs(e, t, n);
    } finally {
        (Ul = !1), (qt !== null || bt !== null) && (Ys(), Ks());
    }
}
function $n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = yl(n);
    if (r === null) return null;
    n = r[t];
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
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
}
var ki = !1;
if (Ge)
    try {
        var yn = {};
        Object.defineProperty(yn, "passive", {
            get: function () {
                ki = !0;
            },
        }),
            window.addEventListener("test", yn, yn),
            window.removeEventListener("test", yn, yn);
    } catch {
        ki = !1;
    }
function jf(e, t, n, r, l, i, o, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a);
    } catch (h) {
        this.onError(h);
    }
}
var Ln = !1,
    Hr = null,
    Vr = !1,
    Si = null,
    zf = {
        onError: function (e) {
            (Ln = !0), (Hr = e);
        },
    };
function Lf(e, t, n, r, l, i, o, u, s) {
    (Ln = !1), (Hr = null), jf.apply(zf, arguments);
}
function Tf(e, t, n, r, l, i, o, u, s) {
    if ((Lf.apply(this, arguments), Ln)) {
        if (Ln) {
            var a = Hr;
            (Ln = !1), (Hr = null);
        } else throw Error(k(198));
        Vr || ((Vr = !0), (Si = a));
    }
}
function It(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Js(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function fu(e) {
    if (It(e) !== e) throw Error(k(188));
}
function Rf(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = It(e)), t === null)) throw Error(k(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n) return fu(l), e;
                if (i === r) return fu(l), t;
                i = i.sibling;
            }
            throw Error(k(188));
        }
        if (n.return !== r.return) (n = l), (r = i);
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    (o = !0), (n = l), (r = i);
                    break;
                }
                if (u === r) {
                    (o = !0), (r = l), (n = i);
                    break;
                }
                u = u.sibling;
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        (o = !0), (n = i), (r = l);
                        break;
                    }
                    if (u === r) {
                        (o = !0), (r = i), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!o) throw Error(k(189));
            }
        }
        if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
}
function Zs(e) {
    return (e = Rf(e)), e !== null ? qs(e) : null;
}
function qs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = qs(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var bs = we.unstable_scheduleCallback,
    du = we.unstable_cancelCallback,
    Of = we.unstable_shouldYield,
    Mf = we.unstable_requestPaint,
    K = we.unstable_now,
    If = we.unstable_getCurrentPriorityLevel,
    ho = we.unstable_ImmediatePriority,
    ea = we.unstable_UserBlockingPriority,
    Wr = we.unstable_NormalPriority,
    Df = we.unstable_LowPriority,
    ta = we.unstable_IdlePriority,
    hl = null,
    $e = null;
function Ff(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function")
        try {
            $e.onCommitFiberRoot(
                hl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : $f,
    Uf = Math.log,
    Bf = Math.LN2;
function $f(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Uf(e) / Bf) | 0)) | 0;
}
var mr = 64,
    vr = 4194304;
function Pn(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? (r = Pn(u)) : ((i &= o), i !== 0 && (r = Pn(i)));
    } else (o = n & ~l), o !== 0 ? (r = Pn(o)) : i !== 0 && (r = Pn(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (i = t & -t),
        l >= i || (l === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function Af(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Hf(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var o = 31 - Oe(i),
            u = 1 << o,
            s = l[o];
        s === -1
            ? (!(u & n) || u & r) && (l[o] = Af(u, t))
            : s <= t && (e.expiredLanes |= u),
            (i &= ~u);
    }
}
function Ei(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function na() {
    var e = mr;
    return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function Bl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function lr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Oe(t)),
        (e[t] = n);
}
function Vf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Oe(n),
            i = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
    }
}
function mo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Oe(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var I = 0;
function ra(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var la,
    vo,
    ia,
    oa,
    ua,
    Ci = !1,
    gr = [],
    ot = null,
    ut = null,
    st = null,
    An = new Map(),
    Hn = new Map(),
    tt = [],
    Wf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function pu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            ot = null;
            break;
        case "dragenter":
        case "dragleave":
            ut = null;
            break;
        case "mouseover":
        case "mouseout":
            st = null;
            break;
        case "pointerover":
        case "pointerout":
            An.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hn.delete(t.pointerId);
    }
}
function wn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [l],
          }),
          t !== null && ((t = or(t)), t !== null && vo(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function Qf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return (ot = wn(ot, e, t, n, r, l)), !0;
        case "dragenter":
            return (ut = wn(ut, e, t, n, r, l)), !0;
        case "mouseover":
            return (st = wn(st, e, t, n, r, l)), !0;
        case "pointerover":
            var i = l.pointerId;
            return An.set(i, wn(An.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return (
                (i = l.pointerId),
                Hn.set(i, wn(Hn.get(i) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function sa(e) {
    var t = Ct(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Js(n)), t !== null)) {
                    (e.blockedOn = t),
                        ua(e.priority, function () {
                            ia(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (wi = r), n.target.dispatchEvent(r), (wi = null);
        } else return (t = or(n)), t !== null && vo(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function hu(e, t, n) {
    Lr(e) && n.delete(t);
}
function Kf() {
    (Ci = !1),
        ot !== null && Lr(ot) && (ot = null),
        ut !== null && Lr(ut) && (ut = null),
        st !== null && Lr(st) && (st = null),
        An.forEach(hu),
        Hn.forEach(hu);
}
function xn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Ci ||
            ((Ci = !0),
            we.unstable_scheduleCallback(we.unstable_NormalPriority, Kf)));
}
function Vn(e) {
    function t(l) {
        return xn(l, e);
    }
    if (0 < gr.length) {
        xn(gr[0], e);
        for (var n = 1; n < gr.length; n++) {
            var r = gr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        ot !== null && xn(ot, e),
            ut !== null && xn(ut, e),
            st !== null && xn(st, e),
            An.forEach(t),
            Hn.forEach(t),
            n = 0;
        n < tt.length;
        n++
    )
        (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
        sa(n), n.blockedOn === null && tt.shift();
}
var en = Ze.ReactCurrentBatchConfig,
    Kr = !0;
function Gf(e, t, n, r) {
    var l = I,
        i = en.transition;
    en.transition = null;
    try {
        (I = 1), go(e, t, n, r);
    } finally {
        (I = l), (en.transition = i);
    }
}
function Yf(e, t, n, r) {
    var l = I,
        i = en.transition;
    en.transition = null;
    try {
        (I = 4), go(e, t, n, r);
    } finally {
        (I = l), (en.transition = i);
    }
}
function go(e, t, n, r) {
    if (Kr) {
        var l = _i(e, t, n, r);
        if (l === null) Xl(e, t, r, Gr, n), pu(e, r);
        else if (Qf(l, e, t, n, r)) r.stopPropagation();
        else if ((pu(e, r), t & 4 && -1 < Wf.indexOf(e))) {
            for (; l !== null; ) {
                var i = or(l);
                if (
                    (i !== null && la(i),
                    (i = _i(e, t, n, r)),
                    i === null && Xl(e, t, r, Gr, n),
                    i === l)
                )
                    break;
                l = i;
            }
            l !== null && r.stopPropagation();
        } else Xl(e, t, r, null, n);
    }
}
var Gr = null;
function _i(e, t, n, r) {
    if (((Gr = null), (e = po(r)), (e = Ct(e)), e !== null))
        if (((t = It(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Js(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Gr = e), null;
}
function aa(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (If()) {
                case ho:
                    return 1;
                case ea:
                    return 4;
                case Wr:
                case Df:
                    return 16;
                case ta:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var rt = null,
    yo = null,
    Tr = null;
function ca() {
    if (Tr) return Tr;
    var e,
        t = yo,
        n = t.length,
        r,
        l = "value" in rt ? rt.value : rt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function yr() {
    return !0;
}
function mu() {
    return !1;
}
function ke(e) {
    function t(n, r, l, i, o) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? yr
                : mu),
            (this.isPropagationStopped = mu),
            this
        );
    }
    return (
        H(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = yr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = yr));
            },
            persist: function () {},
            isPersistent: yr,
        }),
        t
    );
}
var dn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    wo = ke(dn),
    ir = H({}, dn, {view: 0, detail: 0}),
    Xf = ke(ir),
    $l,
    Al,
    kn,
    ml = H({}, ir, {
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
        getModifierState: xo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== kn &&
                      (kn && e.type === "mousemove"
                          ? (($l = e.screenX - kn.screenX),
                            (Al = e.screenY - kn.screenY))
                          : (Al = $l = 0),
                      (kn = e)),
                  $l);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Al;
        },
    }),
    vu = ke(ml),
    Jf = H({}, ml, {dataTransfer: 0}),
    Zf = ke(Jf),
    qf = H({}, ir, {relatedTarget: 0}),
    Hl = ke(qf),
    bf = H({}, dn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
    ed = ke(bf),
    td = H({}, dn, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    nd = ke(td),
    rd = H({}, dn, {data: 0}),
    gu = ke(rd),
    ld = {
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
        MozPrintableKey: "Unidentified",
    },
    id = {
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
        224: "Meta",
    },
    od = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function ud(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = od[e])
        ? !!t[e]
        : !1;
}
function xo() {
    return ud;
}
var sd = H({}, ir, {
        key: function (e) {
            if (e.key) {
                var t = ld[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? id[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xo,
        charCode: function (e) {
            return e.type === "keypress" ? Rr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Rr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    ad = ke(sd),
    cd = H({}, ml, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    yu = ke(cd),
    fd = H({}, ir, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xo,
    }),
    dd = ke(fd),
    pd = H({}, dn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
    hd = ke(pd),
    md = H({}, ml, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    vd = ke(md),
    gd = [9, 13, 27, 32],
    ko = Ge && "CompositionEvent" in window,
    Tn = null;
Ge && "documentMode" in document && (Tn = document.documentMode);
var yd = Ge && "TextEvent" in window && !Tn,
    fa = Ge && (!ko || (Tn && 8 < Tn && 11 >= Tn)),
    wu = " ",
    xu = !1;
function da(e, t) {
    switch (e) {
        case "keyup":
            return gd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function pa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function wd(e, t) {
    switch (e) {
        case "compositionend":
            return pa(t);
        case "keypress":
            return t.which !== 32 ? null : ((xu = !0), wu);
        case "textInput":
            return (e = t.data), e === wu && xu ? null : e;
        default:
            return null;
    }
}
function xd(e, t) {
    if (At)
        return e === "compositionend" || (!ko && da(e, t))
            ? ((e = ca()), (Tr = yo = rt = null), (At = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return fa && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var kd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kd[e.type] : t === "textarea";
}
function ha(e, t, n, r) {
    Qs(r),
        (t = Yr(t, "onChange")),
        0 < t.length &&
            ((n = new wo("onChange", "change", null, n, r)),
            e.push({event: n, listeners: t}));
}
var Rn = null,
    Wn = null;
function Sd(e) {
    _a(e, 0);
}
function vl(e) {
    var t = Wt(e);
    if (Us(t)) return e;
}
function Ed(e, t) {
    if (e === "change") return t;
}
var ma = !1;
if (Ge) {
    var Vl;
    if (Ge) {
        var Wl = "oninput" in document;
        if (!Wl) {
            var Su = document.createElement("div");
            Su.setAttribute("oninput", "return;"),
                (Wl = typeof Su.oninput == "function");
        }
        Vl = Wl;
    } else Vl = !1;
    ma = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
    Rn && (Rn.detachEvent("onpropertychange", va), (Wn = Rn = null));
}
function va(e) {
    if (e.propertyName === "value" && vl(Wn)) {
        var t = [];
        ha(t, Wn, e, po(e)), Xs(Sd, t);
    }
}
function Cd(e, t, n) {
    e === "focusin"
        ? (Eu(), (Rn = t), (Wn = n), Rn.attachEvent("onpropertychange", va))
        : e === "focusout" && Eu();
}
function _d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return vl(Wn);
}
function Nd(e, t) {
    if (e === "click") return vl(t);
}
function Pd(e, t) {
    if (e === "input" || e === "change") return vl(t);
}
function jd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : jd;
function Qn(e, t) {
    if (Ie(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ui.call(t, l) || !Ie(e[l], t[l])) return !1;
    }
    return !0;
}
function Cu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function _u(e, t) {
    var n = Cu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return {node: n, offset: t - e};
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Cu(n);
    }
}
function ga(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? ga(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function ya() {
    for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ar(e.document);
    }
    return t;
}
function So(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function zd(e) {
    var t = ya(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        ga(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && So(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                (r = r.end === void 0 ? i : Math.min(r.end, l)),
                    !e.extend && i > r && ((l = r), (r = i), (i = l)),
                    (l = _u(n, i));
                var o = _u(n, r);
                l &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Ld = Ge && "documentMode" in document && 11 >= document.documentMode,
    Ht = null,
    Ni = null,
    On = null,
    Pi = !1;
function Nu(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pi ||
        Ht == null ||
        Ht !== Ar(r) ||
        ((r = Ht),
        "selectionStart" in r && So(r)
            ? (r = {start: r.selectionStart, end: r.selectionEnd})
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (On && Qn(On, r)) ||
            ((On = r),
            (r = Yr(Ni, "onSelect")),
            0 < r.length &&
                ((t = new wo("onSelect", "select", null, t, n)),
                e.push({event: t, listeners: r}),
                (t.target = Ht))));
}
function wr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var Vt = {
        animationend: wr("Animation", "AnimationEnd"),
        animationiteration: wr("Animation", "AnimationIteration"),
        animationstart: wr("Animation", "AnimationStart"),
        transitionend: wr("Transition", "TransitionEnd"),
    },
    Ql = {},
    wa = {};
Ge &&
    ((wa = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Vt.animationend.animation,
        delete Vt.animationiteration.animation,
        delete Vt.animationstart.animation),
    "TransitionEvent" in window || delete Vt.transitionend.transition);
function gl(e) {
    if (Ql[e]) return Ql[e];
    if (!Vt[e]) return e;
    var t = Vt[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in wa) return (Ql[e] = t[n]);
    return e;
}
var xa = gl("animationend"),
    ka = gl("animationiteration"),
    Sa = gl("animationstart"),
    Ea = gl("transitionend"),
    Ca = new Map(),
    Pu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function gt(e, t) {
    Ca.set(e, t), Mt(t, [e]);
}
for (var Kl = 0; Kl < Pu.length; Kl++) {
    var Gl = Pu[Kl],
        Td = Gl.toLowerCase(),
        Rd = Gl[0].toUpperCase() + Gl.slice(1);
    gt(Td, "on" + Rd);
}
gt(xa, "onAnimationEnd");
gt(ka, "onAnimationIteration");
gt(Sa, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(Ea, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Mt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Od = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(jn)
    );
function ju(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Tf(r, t, void 0, e), (e.currentTarget = null);
}
function _a(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o],
                        s = u.instance,
                        a = u.currentTarget;
                    if (((u = u.listener), s !== i && l.isPropagationStopped()))
                        break e;
                    ju(l, u, a), (i = s);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((u = r[o]),
                        (s = u.instance),
                        (a = u.currentTarget),
                        (u = u.listener),
                        s !== i && l.isPropagationStopped())
                    )
                        break e;
                    ju(l, u, a), (i = s);
                }
        }
    }
    if (Vr) throw ((e = Si), (Vr = !1), (Si = null), e);
}
function F(e, t) {
    var n = t[Ri];
    n === void 0 && (n = t[Ri] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Na(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
    var r = 0;
    t && (r |= 4), Na(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
    if (!e[xr]) {
        (e[xr] = !0),
            Os.forEach(function (n) {
                n !== "selectionchange" &&
                    (Od.has(n) || Yl(n, !1, e), Yl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xr] || ((t[xr] = !0), Yl("selectionchange", !1, t));
    }
}
function Na(e, t, n, r) {
    switch (aa(t)) {
        case 1:
            var l = Gf;
            break;
        case 4:
            l = Yf;
            break;
        default:
            l = go;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !ki ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, {capture: !0, passive: l})
                : e.addEventListener(t, n, !0)
            : l !== void 0
            ? e.addEventListener(t, n, {passive: l})
            : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = o.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        o = o.return;
                    }
                for (; u !== null; ) {
                    if (((o = Ct(u)), o === null)) return;
                    if (((s = o.tag), s === 5 || s === 6)) {
                        r = i = o;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    Xs(function () {
        var a = i,
            h = po(n),
            p = [];
        e: {
            var m = Ca.get(e);
            if (m !== void 0) {
                var y = wo,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Rr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = ad;
                        break;
                    case "focusin":
                        (w = "focus"), (y = Hl);
                        break;
                    case "focusout":
                        (w = "blur"), (y = Hl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Hl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = vu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Zf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = dd;
                        break;
                    case xa:
                    case ka:
                    case Sa:
                        y = ed;
                        break;
                    case Ea:
                        y = hd;
                        break;
                    case "scroll":
                        y = Xf;
                        break;
                    case "wheel":
                        y = vd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = nd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = yu;
                }
                var x = (t & 4) !== 0,
                    C = !x && e === "scroll",
                    f = x ? (m !== null ? m + "Capture" : null) : m;
                x = [];
                for (var c = a, d; c !== null; ) {
                    d = c;
                    var v = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            v !== null &&
                            ((d = v),
                            f !== null &&
                                ((v = $n(c, f)),
                                v != null && x.push(Gn(c, v, d)))),
                        C)
                    )
                        break;
                    c = c.return;
                }
                0 < x.length &&
                    ((m = new y(m, w, null, n, h)),
                    p.push({event: m, listeners: x}));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (y = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== wi &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (Ct(w) || w[Ye]))
                )
                    break e;
                if (
                    (y || m) &&
                    ((m =
                        h.window === h
                            ? h
                            : (m = h.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    y
                        ? ((w = n.relatedTarget || n.toElement),
                          (y = a),
                          (w = w ? Ct(w) : null),
                          w !== null &&
                              ((C = It(w)),
                              w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((y = null), (w = a)),
                    y !== w)
                ) {
                    if (
                        ((x = vu),
                        (v = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((x = yu),
                            (v = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (c = "pointer")),
                        (C = y == null ? m : Wt(y)),
                        (d = w == null ? m : Wt(w)),
                        (m = new x(v, c + "leave", y, n, h)),
                        (m.target = C),
                        (m.relatedTarget = d),
                        (v = null),
                        Ct(h) === a &&
                            ((x = new x(f, c + "enter", w, n, h)),
                            (x.target = d),
                            (x.relatedTarget = C),
                            (v = x)),
                        (C = v),
                        y && w)
                    )
                        t: {
                            for (x = y, f = w, c = 0, d = x; d; d = Ut(d)) c++;
                            for (d = 0, v = f; v; v = Ut(v)) d++;
                            for (; 0 < c - d; ) (x = Ut(x)), c--;
                            for (; 0 < d - c; ) (f = Ut(f)), d--;
                            for (; c--; ) {
                                if (
                                    x === f ||
                                    (f !== null && x === f.alternate)
                                )
                                    break t;
                                (x = Ut(x)), (f = Ut(f));
                            }
                            x = null;
                        }
                    else x = null;
                    y !== null && zu(p, m, y, x, !1),
                        w !== null && C !== null && zu(p, C, w, x, !0);
                }
            }
            e: {
                if (
                    ((m = a ? Wt(a) : window),
                    (y = m.nodeName && m.nodeName.toLowerCase()),
                    y === "select" || (y === "input" && m.type === "file"))
                )
                    var S = Ed;
                else if (ku(m))
                    if (ma) S = Pd;
                    else {
                        S = _d;
                        var P = Cd;
                    }
                else
                    (y = m.nodeName) &&
                        y.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (S = Nd);
                if (S && (S = S(e, a))) {
                    ha(p, S, n, h);
                    break e;
                }
                P && P(e, m, a),
                    e === "focusout" &&
                        (P = m._wrapperState) &&
                        P.controlled &&
                        m.type === "number" &&
                        hi(m, "number", m.value);
            }
            switch (((P = a ? Wt(a) : window), e)) {
                case "focusin":
                    (ku(P) || P.contentEditable === "true") &&
                        ((Ht = P), (Ni = a), (On = null));
                    break;
                case "focusout":
                    On = Ni = Ht = null;
                    break;
                case "mousedown":
                    Pi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Pi = !1), Nu(p, n, h);
                    break;
                case "selectionchange":
                    if (Ld) break;
                case "keydown":
                case "keyup":
                    Nu(p, n, h);
            }
            var j;
            if (ko)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var z = "onCompositionStart";
                            break e;
                        case "compositionend":
                            z = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            z = "onCompositionUpdate";
                            break e;
                    }
                    z = void 0;
                }
            else
                At
                    ? da(e, n) && (z = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (z = "onCompositionStart");
            z &&
                (fa &&
                    n.locale !== "ko" &&
                    (At || z !== "onCompositionStart"
                        ? z === "onCompositionEnd" && At && (j = ca())
                        : ((rt = h),
                          (yo = "value" in rt ? rt.value : rt.textContent),
                          (At = !0))),
                (P = Yr(a, z)),
                0 < P.length &&
                    ((z = new gu(z, e, null, n, h)),
                    p.push({event: z, listeners: P}),
                    j
                        ? (z.data = j)
                        : ((j = pa(n)), j !== null && (z.data = j)))),
                (j = yd ? wd(e, n) : xd(e, n)) &&
                    ((a = Yr(a, "onBeforeInput")),
                    0 < a.length &&
                        ((h = new gu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            h
                        )),
                        p.push({event: h, listeners: a}),
                        (h.data = j)));
        }
        _a(p, t);
    });
}
function Gn(e, t, n) {
    return {instance: e, listener: t, currentTarget: n};
}
function Yr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 &&
            i !== null &&
            ((l = i),
            (i = $n(e, n)),
            i != null && r.unshift(Gn(e, i, l)),
            (i = $n(e, t)),
            i != null && r.push(Gn(e, i, l))),
            (e = e.return);
    }
    return r;
}
function Ut(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function zu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            a = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            a !== null &&
            ((u = a),
            l
                ? ((s = $n(n, i)), s != null && o.unshift(Gn(n, s, u)))
                : l || ((s = $n(n, i)), s != null && o.push(Gn(n, s, u)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({event: t, listeners: o});
}
var Md = /\r\n?/g,
    Id = /\u0000|\uFFFD/g;
function Lu(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Md,
            `
`
        )
        .replace(Id, "");
}
function kr(e, t, n) {
    if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(k(425));
}
function Xr() {}
var ji = null,
    zi = null;
function Li(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0,
    Dd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tu = typeof Promise == "function" ? Promise : void 0,
    Fd =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Tu < "u"
            ? function (e) {
                  return Tu.resolve(null).then(e).catch(Ud);
              }
            : Ti;
function Ud(e) {
    setTimeout(function () {
        throw e;
    });
}
function Jl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(l), Vn(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = l;
    } while (n);
    Vn(t);
}
function at(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Ru(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var pn = Math.random().toString(36).slice(2),
    Be = "__reactFiber$" + pn,
    Yn = "__reactProps$" + pn,
    Ye = "__reactContainer$" + pn,
    Ri = "__reactEvents$" + pn,
    Bd = "__reactListeners$" + pn,
    $d = "__reactHandles$" + pn;
function Ct(e) {
    var t = e[Be];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Ye] || n[Be])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Ru(e); e !== null; ) {
                    if ((n = e[Be])) return n;
                    e = Ru(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function or(e) {
    return (
        (e = e[Be] || e[Ye]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Wt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
}
function yl(e) {
    return e[Yn] || null;
}
var Oi = [],
    Qt = -1;
function yt(e) {
    return {current: e};
}
function U(e) {
    0 > Qt || ((e.current = Oi[Qt]), (Oi[Qt] = null), Qt--);
}
function D(e, t) {
    Qt++, (Oi[Qt] = e.current), (e.current = t);
}
var vt = {},
    oe = yt(vt),
    pe = yt(!1),
    zt = vt;
function ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function he(e) {
    return (e = e.childContextTypes), e != null;
}
function Jr() {
    U(pe), U(oe);
}
function Ou(e, t, n) {
    if (oe.current !== vt) throw Error(k(168));
    D(oe, t), D(pe, n);
}
function Pa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(k(108, Cf(e) || "Unknown", l));
    return H({}, n, r);
}
function Zr(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            vt),
        (zt = oe.current),
        D(oe, e),
        D(pe, pe.current),
        !0
    );
}
function Mu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
        ? ((e = Pa(e, t, zt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          U(pe),
          U(oe),
          D(oe, e))
        : U(pe),
        D(pe, n);
}
var Ve = null,
    wl = !1,
    Zl = !1;
function ja(e) {
    Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Ad(e) {
    (wl = !0), ja(e);
}
function wt() {
    if (!Zl && Ve !== null) {
        Zl = !0;
        var e = 0,
            t = I;
        try {
            var n = Ve;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ve = null), (wl = !1);
        } catch (l) {
            throw (Ve !== null && (Ve = Ve.slice(e + 1)), bs(ho, wt), l);
        } finally {
            (I = t), (Zl = !1);
        }
    }
    return null;
}
var Kt = [],
    Gt = 0,
    qr = null,
    br = 0,
    Se = [],
    Ee = 0,
    Lt = null,
    We = 1,
    Qe = "";
function St(e, t) {
    (Kt[Gt++] = br), (Kt[Gt++] = qr), (qr = e), (br = t);
}
function za(e, t, n) {
    (Se[Ee++] = We), (Se[Ee++] = Qe), (Se[Ee++] = Lt), (Lt = e);
    var r = We;
    e = Qe;
    var l = 32 - Oe(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var i = 32 - Oe(t) + l;
    if (30 < i) {
        var o = l - (l % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (l -= o),
            (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
            (Qe = i + e);
    } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function Eo(e) {
    e.return !== null && (St(e, 1), za(e, 1, 0));
}
function Co(e) {
    for (; e === qr; )
        (qr = Kt[--Gt]), (Kt[Gt] = null), (br = Kt[--Gt]), (Kt[Gt] = null);
    for (; e === Lt; )
        (Lt = Se[--Ee]),
            (Se[Ee] = null),
            (Qe = Se[--Ee]),
            (Se[Ee] = null),
            (We = Se[--Ee]),
            (Se[Ee] = null);
}
var ye = null,
    ge = null,
    B = !1,
    Re = null;
function La(e, t) {
    var n = Ce(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ye = e), (ge = at(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Lt !== null ? {id: We, overflow: Qe} : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ce(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ye = e),
                      (ge = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Mi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
    if (B) {
        var t = ge;
        if (t) {
            var n = t;
            if (!Iu(e, t)) {
                if (Mi(e)) throw Error(k(418));
                t = at(n.nextSibling);
                var r = ye;
                t && Iu(e, t)
                    ? La(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ye = e));
            }
        } else {
            if (Mi(e)) throw Error(k(418));
            (e.flags = (e.flags & -4097) | 2), (B = !1), (ye = e);
        }
    }
}
function Du(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ye = e;
}
function Sr(e) {
    if (e !== ye) return !1;
    if (!B) return Du(e), (B = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps))),
        t && (t = ge))
    ) {
        if (Mi(e)) throw (Ta(), Error(k(418)));
        for (; t; ) La(e, t), (t = at(t.nextSibling));
    }
    if ((Du(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = at(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            ge = null;
        }
    } else ge = ye ? at(e.stateNode.nextSibling) : null;
    return !0;
}
function Ta() {
    for (var e = ge; e; ) e = at(e.nextSibling);
}
function on() {
    (ge = ye = null), (B = !1);
}
function _o(e) {
    Re === null ? (Re = [e]) : Re.push(e);
}
var Hd = Ze.ReactCurrentBatchConfig;
function Sn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(k(147, e));
            var l = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var u = l.refs;
                      o === null ? delete u[i] : (u[i] = o);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e));
    }
    return e;
}
function Er(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            k(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Fu(e) {
    var t = e._init;
    return t(e._payload);
}
function Ra(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
        }
    }
    function n(f, c) {
        if (!e) return null;
        for (; c !== null; ) t(f, c), (c = c.sibling);
        return null;
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling);
        return f;
    }
    function l(f, c) {
        return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function i(f, c, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        );
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, c, d, v) {
        return c === null || c.tag !== 6
            ? ((c = li(d, f.mode, v)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function s(f, c, d, v) {
        var S = d.type;
        return S === $t
            ? h(f, c, d.props.children, v, d.key)
            : c !== null &&
              (c.elementType === S ||
                  (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === be &&
                      Fu(S) === c.type))
            ? ((v = l(c, d.props)), (v.ref = Sn(f, c, d)), (v.return = f), v)
            : ((v = Br(d.type, d.key, d.props, null, f.mode, v)),
              (v.ref = Sn(f, c, d)),
              (v.return = f),
              v);
    }
    function a(f, c, d, v) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== d.containerInfo ||
            c.stateNode.implementation !== d.implementation
            ? ((c = ii(d, f.mode, v)), (c.return = f), c)
            : ((c = l(c, d.children || [])), (c.return = f), c);
    }
    function h(f, c, d, v, S) {
        return c === null || c.tag !== 7
            ? ((c = jt(d, f.mode, v, S)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c);
    }
    function p(f, c, d) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = li("" + c, f.mode, d)), (c.return = f), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case dr:
                    return (
                        (d = Br(c.type, c.key, c.props, null, f.mode, d)),
                        (d.ref = Sn(f, null, c)),
                        (d.return = f),
                        d
                    );
                case Bt:
                    return (c = ii(c, f.mode, d)), (c.return = f), c;
                case be:
                    var v = c._init;
                    return p(f, v(c._payload), d);
            }
            if (Nn(c) || gn(c))
                return (c = jt(c, f.mode, d, null)), (c.return = f), c;
            Er(f, c);
        }
        return null;
    }
    function m(f, c, d, v) {
        var S = c !== null ? c.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return S !== null ? null : u(f, c, "" + d, v);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case dr:
                    return d.key === S ? s(f, c, d, v) : null;
                case Bt:
                    return d.key === S ? a(f, c, d, v) : null;
                case be:
                    return (S = d._init), m(f, c, S(d._payload), v);
            }
            if (Nn(d) || gn(d)) return S !== null ? null : h(f, c, d, v, null);
            Er(f, d);
        }
        return null;
    }
    function y(f, c, d, v, S) {
        if ((typeof v == "string" && v !== "") || typeof v == "number")
            return (f = f.get(d) || null), u(c, f, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case dr:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        s(c, f, v, S)
                    );
                case Bt:
                    return (
                        (f = f.get(v.key === null ? d : v.key) || null),
                        a(c, f, v, S)
                    );
                case be:
                    var P = v._init;
                    return y(f, c, d, P(v._payload), S);
            }
            if (Nn(v) || gn(v))
                return (f = f.get(d) || null), h(c, f, v, S, null);
            Er(c, v);
        }
        return null;
    }
    function w(f, c, d, v) {
        for (
            var S = null, P = null, j = c, z = (c = 0), W = null;
            j !== null && z < d.length;
            z++
        ) {
            j.index > z ? ((W = j), (j = null)) : (W = j.sibling);
            var O = m(f, j, d[z], v);
            if (O === null) {
                j === null && (j = W);
                break;
            }
            e && j && O.alternate === null && t(f, j),
                (c = i(O, c, z)),
                P === null ? (S = O) : (P.sibling = O),
                (P = O),
                (j = W);
        }
        if (z === d.length) return n(f, j), B && St(f, z), S;
        if (j === null) {
            for (; z < d.length; z++)
                (j = p(f, d[z], v)),
                    j !== null &&
                        ((c = i(j, c, z)),
                        P === null ? (S = j) : (P.sibling = j),
                        (P = j));
            return B && St(f, z), S;
        }
        for (j = r(f, j); z < d.length; z++)
            (W = y(j, f, z, d[z], v)),
                W !== null &&
                    (e &&
                        W.alternate !== null &&
                        j.delete(W.key === null ? z : W.key),
                    (c = i(W, c, z)),
                    P === null ? (S = W) : (P.sibling = W),
                    (P = W));
        return (
            e &&
                j.forEach(function (je) {
                    return t(f, je);
                }),
            B && St(f, z),
            S
        );
    }
    function x(f, c, d, v) {
        var S = gn(d);
        if (typeof S != "function") throw Error(k(150));
        if (((d = S.call(d)), d == null)) throw Error(k(151));
        for (
            var P = (S = null), j = c, z = (c = 0), W = null, O = d.next();
            j !== null && !O.done;
            z++, O = d.next()
        ) {
            j.index > z ? ((W = j), (j = null)) : (W = j.sibling);
            var je = m(f, j, O.value, v);
            if (je === null) {
                j === null && (j = W);
                break;
            }
            e && j && je.alternate === null && t(f, j),
                (c = i(je, c, z)),
                P === null ? (S = je) : (P.sibling = je),
                (P = je),
                (j = W);
        }
        if (O.done) return n(f, j), B && St(f, z), S;
        if (j === null) {
            for (; !O.done; z++, O = d.next())
                (O = p(f, O.value, v)),
                    O !== null &&
                        ((c = i(O, c, z)),
                        P === null ? (S = O) : (P.sibling = O),
                        (P = O));
            return B && St(f, z), S;
        }
        for (j = r(f, j); !O.done; z++, O = d.next())
            (O = y(j, f, z, O.value, v)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        j.delete(O.key === null ? z : O.key),
                    (c = i(O, c, z)),
                    P === null ? (S = O) : (P.sibling = O),
                    (P = O));
        return (
            e &&
                j.forEach(function (mn) {
                    return t(f, mn);
                }),
            B && St(f, z),
            S
        );
    }
    function C(f, c, d, v) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === $t &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case dr:
                    e: {
                        for (var S = d.key, P = c; P !== null; ) {
                            if (P.key === S) {
                                if (((S = d.type), S === $t)) {
                                    if (P.tag === 7) {
                                        n(f, P.sibling),
                                            (c = l(P, d.props.children)),
                                            (c.return = f),
                                            (f = c);
                                        break e;
                                    }
                                } else if (
                                    P.elementType === S ||
                                    (typeof S == "object" &&
                                        S !== null &&
                                        S.$$typeof === be &&
                                        Fu(S) === P.type)
                                ) {
                                    n(f, P.sibling),
                                        (c = l(P, d.props)),
                                        (c.ref = Sn(f, P, d)),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                }
                                n(f, P);
                                break;
                            } else t(f, P);
                            P = P.sibling;
                        }
                        d.type === $t
                            ? ((c = jt(d.props.children, f.mode, v, d.key)),
                              (c.return = f),
                              (f = c))
                            : ((v = Br(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  v
                              )),
                              (v.ref = Sn(f, c, d)),
                              (v.return = f),
                              (f = v));
                    }
                    return o(f);
                case Bt:
                    e: {
                        for (P = d.key; c !== null; ) {
                            if (c.key === P)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    c.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = l(c, d.children || [])),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                            else t(f, c);
                            c = c.sibling;
                        }
                        (c = ii(d, f.mode, v)), (c.return = f), (f = c);
                    }
                    return o(f);
                case be:
                    return (P = d._init), C(f, c, P(d._payload), v);
            }
            if (Nn(d)) return w(f, c, d, v);
            if (gn(d)) return x(f, c, d, v);
            Er(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
                  : (n(f, c), (c = li(d, f.mode, v)), (c.return = f), (f = c)),
              o(f))
            : n(f, c);
    }
    return C;
}
var un = Ra(!0),
    Oa = Ra(!1),
    el = yt(null),
    tl = null,
    Yt = null,
    No = null;
function Po() {
    No = Yt = tl = null;
}
function jo(e) {
    var t = el.current;
    U(el), (e._currentValue = t);
}
function Di(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function tn(e, t) {
    (tl = e),
        (No = Yt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ne(e) {
    var t = e._currentValue;
    if (No !== e)
        if (((e = {context: e, memoizedValue: t, next: null}), Yt === null)) {
            if (tl === null) throw Error(k(308));
            (Yt = e), (tl.dependencies = {lanes: 0, firstContext: e});
        } else Yt = Yt.next = e;
    return t;
}
var _t = null;
function zo(e) {
    _t === null ? (_t = [e]) : _t.push(e);
}
function Ma(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), zo(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        Xe(e, r)
    );
}
function Xe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function Lo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null,
    };
}
function Ia(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Ke(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function ct(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), M & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            Xe(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), zo(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        Xe(e, n)
    );
}
function Or(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
    }
}
function Uu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (l = i = t) : (i = i.next = t);
        } else l = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
    var l = e.updateQueue;
    et = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            a = s.next;
        (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (u = h.lastBaseUpdate),
            u !== o &&
                (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
                (h.lastBaseUpdate = s)));
    }
    if (i !== null) {
        var p = l.baseState;
        (o = 0), (h = a = s = null), (u = i);
        do {
            var m = u.lane,
                y = u.eventTime;
            if ((r & m) === m) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: y,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var w = e,
                        x = u;
                    switch (((m = t), (y = n), x.tag)) {
                        case 1:
                            if (((w = x.payload), typeof w == "function")) {
                                p = w.call(y, p, m);
                                break e;
                            }
                            p = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = x.payload),
                                (m =
                                    typeof w == "function"
                                        ? w.call(y, p, m)
                                        : w),
                                m == null)
                            )
                                break e;
                            p = H({}, p, m);
                            break e;
                        case 2:
                            et = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [u]) : m.push(u));
            } else
                (y = {
                    eventTime: y,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    h === null ? ((a = h = y), (s = p)) : (h = h.next = y),
                    (o |= m);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (m = u),
                    (u = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null);
            }
        } while (!0);
        if (
            (h === null && (s = p),
            (l.baseState = s),
            (l.firstBaseUpdate = a),
            (l.lastBaseUpdate = h),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (o |= l.lane), (l = l.next);
            while (l !== t);
        } else i === null && (l.shared.lanes = 0);
        (Rt |= o), (e.lanes = o), (e.memoizedState = p);
    }
}
function Bu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != "function"))
                    throw Error(k(191, l));
                l.call(r);
            }
        }
}
var ur = {},
    Ae = yt(ur),
    Xn = yt(ur),
    Jn = yt(ur);
function Nt(e) {
    if (e === ur) throw Error(k(174));
    return e;
}
function To(e, t) {
    switch ((D(Jn, t), D(Xn, e), D(Ae, ur), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = vi(t, e));
    }
    U(Ae), D(Ae, t);
}
function sn() {
    U(Ae), U(Xn), U(Jn);
}
function Da(e) {
    Nt(Jn.current);
    var t = Nt(Ae.current),
        n = vi(t, e.type);
    t !== n && (D(Xn, e), D(Ae, n));
}
function Ro(e) {
    Xn.current === e && (U(Ae), U(Xn));
}
var $ = yt(0);
function rl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ql = [];
function Oo() {
    for (var e = 0; e < ql.length; e++)
        ql[e]._workInProgressVersionPrimary = null;
    ql.length = 0;
}
var Mr = Ze.ReactCurrentDispatcher,
    bl = Ze.ReactCurrentBatchConfig,
    Tt = 0,
    A = null,
    X = null,
    q = null,
    ll = !1,
    Mn = !1,
    Zn = 0,
    Vd = 0;
function re() {
    throw Error(k(321));
}
function Mo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n])) return !1;
    return !0;
}
function Io(e, t, n, r, l, i) {
    if (
        ((Tt = i),
        (A = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Mr.current = e === null || e.memoizedState === null ? Gd : Yd),
        (e = n(r, l)),
        Mn)
    ) {
        i = 0;
        do {
            if (((Mn = !1), (Zn = 0), 25 <= i)) throw Error(k(301));
            (i += 1),
                (q = X = null),
                (t.updateQueue = null),
                (Mr.current = Xd),
                (e = n(r, l));
        } while (Mn);
    }
    if (
        ((Mr.current = il),
        (t = X !== null && X.next !== null),
        (Tt = 0),
        (q = X = A = null),
        (ll = !1),
        t)
    )
        throw Error(k(300));
    return e;
}
function Do() {
    var e = Zn !== 0;
    return (Zn = 0), e;
}
function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
    if (X === null) {
        var e = A.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = X.next;
    var t = q === null ? A.memoizedState : q.next;
    if (t !== null) (q = t), (X = e);
    else {
        if (e === null) throw Error(k(310));
        (X = e),
            (e = {
                memoizedState: X.memoizedState,
                baseState: X.baseState,
                baseQueue: X.baseQueue,
                queue: X.queue,
                next: null,
            }),
            q === null ? (A.memoizedState = q = e) : (q = q.next = e);
    }
    return q;
}
function qn(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function ei(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = X,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            (l.next = i.next), (i.next = o);
        }
        (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
        (i = l.next), (r = r.baseState);
        var u = (o = null),
            s = null,
            a = i;
        do {
            var h = a.lane;
            if ((Tt & h) === h)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : e(r, a.action));
            else {
                var p = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
                    (A.lanes |= h),
                    (Rt |= h);
            }
            a = a.next;
        } while (a !== null && a !== i);
        s === null ? (o = r) : (s.next = u),
            Ie(r, t.memoizedState) || (de = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (i = l.lane), (A.lanes |= i), (Rt |= i), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ti(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = (l = l.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== l);
        Ie(i, t.memoizedState) || (de = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Fa() {}
function Ua(e, t) {
    var n = A,
        r = Pe(),
        l = t(),
        i = !Ie(r.memoizedState, l);
    if (
        (i && ((r.memoizedState = l), (de = !0)),
        (r = r.queue),
        Fo(Aa.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            bn(9, $a.bind(null, n, r, l, t), void 0, null),
            b === null)
        )
            throw Error(k(349));
        Tt & 30 || Ba(n, t, l);
    }
    return l;
}
function Ba(e, t, n) {
    (e.flags |= 16384),
        (e = {getSnapshot: t, value: n}),
        (t = A.updateQueue),
        t === null
            ? ((t = {lastEffect: null, stores: null}),
              (A.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $a(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ha(t) && Va(e);
}
function Aa(e, t, n) {
    return n(function () {
        Ha(t) && Va(e);
    });
}
function Ha(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n);
    } catch {
        return !0;
    }
}
function Va(e) {
    var t = Xe(e, 1);
    t !== null && Me(t, e, 1, -1);
}
function $u(e) {
    var t = Ue();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qn,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Kd.bind(null, A, e)),
        [t.memoizedState, e]
    );
}
function bn(e, t, n, r) {
    return (
        (e = {tag: e, create: t, destroy: n, deps: r, next: null}),
        (t = A.updateQueue),
        t === null
            ? ((t = {lastEffect: null, stores: null}),
              (A.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Wa() {
    return Pe().memoizedState;
}
function Ir(e, t, n, r) {
    var l = Ue();
    (A.flags |= e),
        (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (X !== null) {
        var o = X.memoizedState;
        if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
            l.memoizedState = bn(t, n, i, r);
            return;
        }
    }
    (A.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function Au(e, t) {
    return Ir(8390656, 8, e, t);
}
function Fo(e, t) {
    return xl(2048, 8, e, t);
}
function Qa(e, t) {
    return xl(4, 2, e, t);
}
function Ka(e, t) {
    return xl(4, 4, e, t);
}
function Ga(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Ya(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), xl(4, 4, Ga.bind(null, t, e), n)
    );
}
function Uo() {}
function Xa(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Ja(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Za(e, t, n) {
    return Tt & 21
        ? (Ie(n, t) ||
              ((n = na()), (A.lanes |= n), (Rt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (de = !0)),
          (e.memoizedState = n));
}
function Wd(e, t) {
    var n = I;
    (I = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = bl.transition;
    bl.transition = {};
    try {
        e(!1), t();
    } finally {
        (I = n), (bl.transition = r);
    }
}
function qa() {
    return Pe().memoizedState;
}
function Qd(e, t, n) {
    var r = dt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        ba(e))
    )
        ec(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
        var l = se();
        Me(n, e, r, l), tc(n, t, r);
    }
}
function Kd(e, t, n) {
    var r = dt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (ba(e)) ec(t, l);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var o = t.lastRenderedState,
                    u = i(o, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
                    var s = t.interleaved;
                    s === null
                        ? ((l.next = l), zo(t))
                        : ((l.next = s.next), (s.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Ma(e, t, l, r)),
            n !== null && ((l = se()), Me(n, e, r, l), tc(n, t, r));
    }
}
function ba(e) {
    var t = e.alternate;
    return e === A || (t !== null && t === A);
}
function ec(e, t) {
    Mn = ll = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function tc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
    }
}
var il = {
        readContext: Ne,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1,
    },
    Gd = {
        readContext: Ne,
        useCallback: function (e, t) {
            return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ne,
        useEffect: Au,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Ir(4194308, 4, Ga.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Ir(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Ir(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ue();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Ue();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Qd.bind(null, A, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ue();
            return (e = {current: e}), (t.memoizedState = e);
        },
        useState: $u,
        useDebugValue: Uo,
        useDeferredValue: function (e) {
            return (Ue().memoizedState = e);
        },
        useTransition: function () {
            var e = $u(!1),
                t = e[0];
            return (e = Wd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = A,
                l = Ue();
            if (B) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (((n = t()), b === null)) throw Error(k(349));
                Tt & 30 || Ba(r, t, n);
            }
            l.memoizedState = n;
            var i = {value: n, getSnapshot: t};
            return (
                (l.queue = i),
                Au(Aa.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                bn(9, $a.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ue(),
                t = b.identifierPrefix;
            if (B) {
                var n = Qe,
                    r = We;
                (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Zn++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Vd++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Yd = {
        readContext: Ne,
        useCallback: Xa,
        useContext: Ne,
        useEffect: Fo,
        useImperativeHandle: Ya,
        useInsertionEffect: Qa,
        useLayoutEffect: Ka,
        useMemo: Ja,
        useReducer: ei,
        useRef: Wa,
        useState: function () {
            return ei(qn);
        },
        useDebugValue: Uo,
        useDeferredValue: function (e) {
            var t = Pe();
            return Za(t, X.memoizedState, e);
        },
        useTransition: function () {
            var e = ei(qn)[0],
                t = Pe().memoizedState;
            return [e, t];
        },
        useMutableSource: Fa,
        useSyncExternalStore: Ua,
        useId: qa,
        unstable_isNewReconciler: !1,
    },
    Xd = {
        readContext: Ne,
        useCallback: Xa,
        useContext: Ne,
        useEffect: Fo,
        useImperativeHandle: Ya,
        useInsertionEffect: Qa,
        useLayoutEffect: Ka,
        useMemo: Ja,
        useReducer: ti,
        useRef: Wa,
        useState: function () {
            return ti(qn);
        },
        useDebugValue: Uo,
        useDeferredValue: function (e) {
            var t = Pe();
            return X === null
                ? (t.memoizedState = e)
                : Za(t, X.memoizedState, e);
        },
        useTransition: function () {
            var e = ti(qn)[0],
                t = Pe().memoizedState;
            return [e, t];
        },
        useMutableSource: Fa,
        useSyncExternalStore: Ua,
        useId: qa,
        unstable_isNewReconciler: !1,
    };
function Le(e, t) {
    if (e && e.defaultProps) {
        (t = H({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Fi(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : H({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? It(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = dt(e),
            i = Ke(r, l);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = ct(e, i, l)),
            t !== null && (Me(t, e, l, r), Or(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = dt(e),
            i = Ke(r, l);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = ct(e, i, l)),
            t !== null && (Me(t, e, l, r), Or(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = se(),
            r = dt(e),
            l = Ke(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = ct(e, l, r)),
            t !== null && (Me(t, e, r, n), Or(t, e, r));
    },
};
function Hu(e, t, n, r, l, i, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Qn(n, r) || !Qn(l, i)
            : !0
    );
}
function nc(e, t, n) {
    var r = !1,
        l = vt,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ne(i))
            : ((l = he(t) ? zt : oe.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? ln(e, l) : vt)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = kl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Vu(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Lo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (l.context = Ne(i))
        : ((i = he(t) ? zt : oe.current), (l.context = ln(e, i))),
        (l.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Fi(e, t, i, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function" ||
            (typeof l.UNSAFE_componentWillMount != "function" &&
                typeof l.componentWillMount != "function") ||
            ((t = l.state),
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && kl.enqueueReplaceState(l, l.state, null),
            nl(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function an(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Ef(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (i) {
        l =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return {value: e, source: t, stack: l, digest: null};
}
function ni(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null};
}
function Bi(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Jd = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
    (n = Ke(-1, n)), (n.tag = 3), (n.payload = {element: null});
    var r = t.value;
    return (
        (n.callback = function () {
            ul || ((ul = !0), (Xi = r)), Bi(e, t);
        }),
        n
    );
}
function lc(e, t, n) {
    (n = Ke(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                Bi(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                Bi(e, t),
                    typeof r != "function" &&
                        (ft === null ? (ft = new Set([this])) : ft.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : "",
                });
            }),
        n
    );
}
function Wu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Jd();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = cp.bind(null, e, t, n)), t.then(e, e));
}
function Qu(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Ku(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Zd = Ze.ReactCurrentOwner,
    de = !1;
function ue(e, t, n, r) {
    t.child = e === null ? Oa(t, null, n, r) : un(t, e.child, n, r);
}
function Gu(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
        tn(t, l),
        (r = Io(e, t, n, r, i, l)),
        (n = Do()),
        e !== null && !de
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Je(e, t, l))
            : (B && n && Eo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
    );
}
function Yu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Ko(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), ic(e, t, i, r, l))
            : ((e = Br(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & l))) {
        var o = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Qn),
            n(o, r) && e.ref === t.ref)
        )
            return Je(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = pt(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function ic(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Qn(i, r) && e.ref === t.ref)
            if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
                e.flags & 131072 && (de = !0);
            else return (t.lanes = e.lanes), Je(e, t, l);
    }
    return $i(e, t, n, r, l);
}
function oc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                D(Jt, ve),
                (ve |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    D(Jt, ve),
                    (ve |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                D(Jt, ve),
                (ve |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            D(Jt, ve),
            (ve |= r);
    return ue(e, t, l, n), t.child;
}
function uc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function $i(e, t, n, r, l) {
    var i = he(n) ? zt : oe.current;
    return (
        (i = ln(t, i)),
        tn(t, l),
        (n = Io(e, t, n, r, i, l)),
        (r = Do()),
        e !== null && !de
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              Je(e, t, l))
            : (B && r && Eo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
    );
}
function Xu(e, t, n, r, l) {
    if (he(n)) {
        var i = !0;
        Zr(t);
    } else i = !1;
    if ((tn(t, l), t.stateNode === null))
        Dr(e, t), nc(t, n, r), Ui(t, n, r, l), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            u = t.memoizedProps;
        o.props = u;
        var s = o.context,
            a = n.contextType;
        typeof a == "object" && a !== null
            ? (a = Ne(a))
            : ((a = he(n) ? zt : oe.current), (a = ln(t, a)));
        var h = n.getDerivedStateFromProps,
            p =
                typeof h == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        p ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== r || s !== a) && Vu(t, o, r, a)),
            (et = !1);
        var m = t.memoizedState;
        (o.state = m),
            nl(t, r, o, l),
            (s = t.memoizedState),
            u !== r || m !== s || pe.current || et
                ? (typeof h == "function" &&
                      (Fi(t, n, h, r), (s = t.memoizedState)),
                  (u = et || Hu(t, n, u, r, m, s, a))
                      ? (p ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = a),
                  (r = u))
                : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (o = t.stateNode),
            Ia(e, t),
            (u = t.memoizedProps),
            (a = t.type === t.elementType ? u : Le(t.type, u)),
            (o.props = a),
            (p = t.pendingProps),
            (m = o.context),
            (s = n.contextType),
            typeof s == "object" && s !== null
                ? (s = Ne(s))
                : ((s = he(n) ? zt : oe.current), (s = ln(t, s)));
        var y = n.getDerivedStateFromProps;
        (h =
            typeof y == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((u !== p || m !== s) && Vu(t, o, r, s)),
            (et = !1),
            (m = t.memoizedState),
            (o.state = m),
            nl(t, r, o, l);
        var w = t.memoizedState;
        u !== p || m !== w || pe.current || et
            ? (typeof y == "function" &&
                  (Fi(t, n, y, r), (w = t.memoizedState)),
              (a = et || Hu(t, n, a, r, m, w, s) || !1)
                  ? (h ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(r, w, s),
                        typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(r, w, s)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (o.props = r),
              (o.state = w),
              (o.context = s),
              (r = a))
            : (typeof o.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Ai(e, t, n, r, i, l);
}
function Ai(e, t, n, r, l, i) {
    uc(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Mu(t, n, !1), Je(e, t, i);
    (r = t.stateNode), (Zd.current = t);
    var u =
        o && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = un(t, e.child, null, i)),
              (t.child = un(t, null, u, i)))
            : ue(e, t, u, i),
        (t.memoizedState = r.state),
        l && Mu(t, n, !0),
        t.child
    );
}
function sc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? Ou(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ou(e, t.context, !1),
        To(e, t.containerInfo);
}
function Ju(e, t, n, r, l) {
    return on(), _o(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Hi = {dehydrated: null, treeContext: null, retryLane: 0};
function Vi(e) {
    return {baseLanes: e, cachePool: null, transitions: null};
}
function ac(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        u;
    if (
        ((u = o) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        D($, l & 1),
        e === null)
    )
        return (
            Ii(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (o = {mode: "hidden", children: o}),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = o))
                            : (i = Cl(o, r, 0, null)),
                        (e = jt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Vi(n)),
                        (t.memoizedState = Hi),
                        e)
                      : Bo(t, o))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return qd(e, t, o, r, u, l, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
        var s = {mode: "hidden", children: r.children};
        return (
            !(o & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = pt(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (i = pt(u, i))
                : ((i = jt(i, o, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? Vi(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (i.memoizedState = o),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Hi),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = pt(i, {mode: "visible", children: r.children})),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Bo(e, t) {
    return (
        (t = Cl({mode: "visible", children: t}, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Cr(e, t, n, r) {
    return (
        r !== null && _o(r),
        un(t, e.child, null, n),
        (e = Bo(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function qd(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ni(Error(k(422)))), Cr(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (l = t.mode),
              (r = Cl({mode: "visible", children: r.children}, l, 0, null)),
              (i = jt(i, l, o, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && un(t, e.child, null, o),
              (t.child.memoizedState = Vi(o)),
              (t.memoizedState = Hi),
              i);
    if (!(t.mode & 1)) return Cr(e, t, o, null);
    if (l.data === "$!") {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (i = Error(k(419))), (r = ni(i, r, void 0)), Cr(e, t, o, r)
        );
    }
    if (((u = (o & e.childLanes) !== 0), de || u)) {
        if (((r = b), r !== null)) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | o) ? 0 : l),
                l !== 0 &&
                    l !== i.retryLane &&
                    ((i.retryLane = l), Xe(e, l), Me(r, e, l, -1));
        }
        return Qo(), (r = ni(Error(k(421)))), Cr(e, t, o, r);
    }
    return l.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = fp.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (ge = at(l.nextSibling)),
          (ye = t),
          (B = !0),
          (Re = null),
          e !== null &&
              ((Se[Ee++] = We),
              (Se[Ee++] = Qe),
              (Se[Ee++] = Lt),
              (We = e.id),
              (Qe = e.overflow),
              (Lt = t)),
          (t = Bo(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Zu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ri(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = l));
}
function cc(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if ((ue(e, t, r.children, n), (r = $.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
                else if (e.tag === 19) Zu(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((D($, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && rl(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    ri(t, !1, l, n, i);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && rl(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                ri(t, !0, n, null, i);
                break;
            case "together":
                ri(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Dr(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Rt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (
            e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = pt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function bd(e, t, n) {
    switch (t.tag) {
        case 3:
            sc(t), on();
            break;
        case 5:
            Da(t);
            break;
        case 1:
            he(t.type) && Zr(t);
            break;
        case 4:
            To(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            D(el, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (D($, $.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? ac(e, t, n)
                    : (D($, $.current & 1),
                      (e = Je(e, t, n)),
                      e !== null ? e.sibling : null);
            D($, $.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return cc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                D($, $.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), oc(e, t, n);
    }
    return Je(e, t, n);
}
var fc, Wi, dc, pc;
fc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Wi = function () {};
dc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), Nt(Ae.current);
        var i = null;
        switch (n) {
            case "input":
                (l = di(e, l)), (r = di(e, r)), (i = []);
                break;
            case "select":
                (l = H({}, l, {value: void 0})),
                    (r = H({}, r, {value: void 0})),
                    (i = []);
                break;
            case "textarea":
                (l = mi(e, l)), (r = mi(e, r)), (i = []);
                break;
            default:
                typeof l.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Xr);
        }
        gi(n, r);
        var o;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === "style") {
                    var u = l[a];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    a !== "dangerouslySetInnerHTML" &&
                        a !== "children" &&
                        a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (Un.hasOwnProperty(a)
                            ? i || (i = [])
                            : (i = i || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (
                ((u = l != null ? l[a] : void 0),
                r.hasOwnProperty(a) && s !== u && (s != null || u != null))
            )
                if (a === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) ||
                                (s && s.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in s)
                            s.hasOwnProperty(o) &&
                                u[o] !== s[o] &&
                                (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(a, n)), (n = s);
                else
                    a === "dangerouslySetInnerHTML"
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (i = i || []).push(a, s))
                        : a === "children"
                        ? (typeof s != "string" && typeof s != "number") ||
                          (i = i || []).push(a, "" + s)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          (Un.hasOwnProperty(a)
                              ? (s != null &&
                                    a === "onScroll" &&
                                    F("scroll", e),
                                i || u === s || (i = []))
                              : (i = i || []).push(a, s));
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4);
    }
};
pc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function En(e, t) {
    if (!B)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ep(e, t, n) {
    var r = t.pendingProps;
    switch ((Co(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return le(t), null;
        case 1:
            return he(t.type) && Jr(), le(t), null;
        case 3:
            return (
                (r = t.stateNode),
                sn(),
                U(pe),
                U(oe),
                Oo(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Sr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Re !== null && (qi(Re), (Re = null)))),
                Wi(e, t),
                le(t),
                null
            );
        case 5:
            Ro(t);
            var l = Nt(Jn.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                dc(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return le(t), null;
                }
                if (((e = Nt(Ae.current)), Sr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[Be] = t), (r[Yn] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            F("cancel", r), F("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            F("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < jn.length; l++) F(jn[l], r);
                            break;
                        case "source":
                            F("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F("error", r), F("load", r);
                            break;
                        case "details":
                            F("toggle", r);
                            break;
                        case "input":
                            ou(r, i), F("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = {wasMultiple: !!i.multiple}),
                                F("invalid", r);
                            break;
                        case "textarea":
                            su(r, i), F("invalid", r);
                    }
                    gi(n, i), (l = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var u = i[o];
                            o === "children"
                                ? typeof u == "string"
                                    ? r.textContent !== u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          kr(r.textContent, u, e),
                                      (l = ["children", u]))
                                    : typeof u == "number" &&
                                      r.textContent !== "" + u &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          kr(r.textContent, u, e),
                                      (l = ["children", "" + u]))
                                : Un.hasOwnProperty(o) &&
                                  u != null &&
                                  o === "onScroll" &&
                                  F("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            pr(r), uu(r, i, !0);
                            break;
                        case "textarea":
                            pr(r), au(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Xr);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = l.nodeType === 9 ? l : l.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = As(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = o.createElement(n, {is: r.is}))
                                : ((e = o.createElement(n)),
                                  n === "select" &&
                                      ((o = e),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Be] = t),
                        (e[Yn] = r),
                        fc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = yi(n, r)), n)) {
                            case "dialog":
                                F("cancel", e), F("close", e), (l = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", e), (l = r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < jn.length; l++) F(jn[l], e);
                                l = r;
                                break;
                            case "source":
                                F("error", e), (l = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", e), F("load", e), (l = r);
                                break;
                            case "details":
                                F("toggle", e), (l = r);
                                break;
                            case "input":
                                ou(e, r), (l = di(e, r)), F("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                (e._wrapperState = {wasMultiple: !!r.multiple}),
                                    (l = H({}, r, {value: void 0})),
                                    F("invalid", e);
                                break;
                            case "textarea":
                                su(e, r), (l = mi(e, r)), F("invalid", e);
                                break;
                            default:
                                l = r;
                        }
                        gi(n, l), (u = l);
                        for (i in u)
                            if (u.hasOwnProperty(i)) {
                                var s = u[i];
                                i === "style"
                                    ? Ws(e, s)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((s = s ? s.__html : void 0),
                                      s != null && Hs(e, s))
                                    : i === "children"
                                    ? typeof s == "string"
                                        ? (n !== "textarea" || s !== "") &&
                                          Bn(e, s)
                                        : typeof s == "number" && Bn(e, "" + s)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Un.hasOwnProperty(i)
                                          ? s != null &&
                                            i === "onScroll" &&
                                            F("scroll", e)
                                          : s != null && so(e, i, s, o));
                            }
                        switch (n) {
                            case "input":
                                pr(e), uu(e, r, !1);
                                break;
                            case "textarea":
                                pr(e), au(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + mt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Zt(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Zt(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == "function" &&
                                    (e.onclick = Xr);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(k(166));
                if (((n = Nt(Jn.current)), Nt(Ae.current), Sr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Be] = t),
                        (i = r.nodeValue !== n) && ((e = ye), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                kr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    kr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Be] = t),
                        (t.stateNode = r);
            }
            return le(t), null;
        case 13:
            if (
                (U($),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (B && ge !== null && t.mode & 1 && !(t.flags & 128))
                    Ta(), on(), (t.flags |= 98560), (i = !1);
                else if (((i = Sr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(k(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(k(317));
                        i[Be] = t;
                    } else
                        on(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    le(t), (i = !1);
                } else Re !== null && (qi(Re), (Re = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || $.current & 1
                              ? J === 0 && (J = 3)
                              : Qo())),
                  t.updateQueue !== null && (t.flags |= 4),
                  le(t),
                  null);
        case 4:
            return (
                sn(),
                Wi(e, t),
                e === null && Kn(t.stateNode.containerInfo),
                le(t),
                null
            );
        case 10:
            return jo(t.type._context), le(t), null;
        case 17:
            return he(t.type) && Jr(), le(t), null;
        case 19:
            if ((U($), (i = t.memoizedState), i === null)) return le(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) En(i, !1);
                else {
                    if (J !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = rl(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        En(i, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  o.memoizedProps),
                                              (i.memoizedState =
                                                  o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return D($, ($.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        K() > cn &&
                        ((t.flags |= 128),
                        (r = !0),
                        En(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = rl(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            En(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !o.alternate &&
                                !B)
                        )
                            return le(t), null;
                    } else
                        2 * K() - i.renderingStartTime > cn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            En(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (i.last = o));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = K()),
                  (t.sibling = null),
                  (n = $.current),
                  D($, r ? (n & 1) | 2 : n & 1),
                  t)
                : (le(t), null);
        case 22:
        case 23:
            return (
                Wo(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? ve & 1073741824 &&
                      (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : le(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(k(156, t.tag));
}
function tp(e, t) {
    switch ((Co(t), t.tag)) {
        case 1:
            return (
                he(t.type) && Jr(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                sn(),
                U(pe),
                U(oe),
                Oo(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Ro(t), null;
        case 13:
            if (
                (U($),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(k(340));
                on();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return U($), null;
        case 4:
            return sn(), null;
        case 10:
            return jo(t.type._context), null;
        case 22:
        case 23:
            return Wo(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var _r = !1,
    ie = !1,
    np = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
function Xt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                V(e, t, r);
            }
        else n.current = null;
}
function Qi(e, t, n) {
    try {
        n();
    } catch (r) {
        V(e, t, r);
    }
}
var qu = !1;
function rp(e, t) {
    if (((ji = Kr), (e = ya()), So(e))) {
        if ("selectionStart" in e)
            var n = {start: e.selectionStart, end: e.selectionEnd};
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        u = -1,
                        s = -1,
                        a = 0,
                        h = 0,
                        p = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var y;
                            p !== n ||
                                (l !== 0 && p.nodeType !== 3) ||
                                (u = o + l),
                                p !== i ||
                                    (r !== 0 && p.nodeType !== 3) ||
                                    (s = o + r),
                                p.nodeType === 3 && (o += p.nodeValue.length),
                                (y = p.firstChild) !== null;

                        )
                            (m = p), (p = y);
                        for (;;) {
                            if (p === e) break t;
                            if (
                                (m === n && ++a === l && (u = o),
                                m === i && ++h === r && (s = o),
                                (y = p.nextSibling) !== null)
                            )
                                break;
                            (p = m), (m = p.parentNode);
                        }
                        p = y;
                    }
                    n = u === -1 || s === -1 ? null : {start: u, end: s};
                } else n = null;
            }
        n = n || {start: 0, end: 0};
    } else n = null;
    for (zi = {focusedElem: e, selectionRange: n}, Kr = !1, _ = t; _ !== null; )
        if (
            ((t = _),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (_ = e);
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var x = w.memoizedProps,
                                        C = w.memoizedState,
                                        f = t.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? x
                                                : Le(t.type, x),
                                            C
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(k(163));
                        }
                } catch (v) {
                    V(t, t.return, v);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (_ = e);
                    break;
                }
                _ = t.return;
            }
    return (w = qu), (qu = !1), w;
}
function In(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                (l.destroy = void 0), i !== void 0 && Qi(t, n, i);
            }
            l = l.next;
        } while (l !== r);
    }
}
function Sl(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Ki(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function hc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), hc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Be],
                delete t[Yn],
                delete t[Ri],
                delete t[Bd],
                delete t[$d])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function mc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || mc(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Xr));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Gi(e, t, n), e = e.sibling; e !== null; )
            Gi(e, t, n), (e = e.sibling);
}
function Yi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Yi(e, t, n), e = e.sibling; e !== null; )
            Yi(e, t, n), (e = e.sibling);
}
var ee = null,
    Te = !1;
function qe(e, t, n) {
    for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
}
function vc(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
        try {
            $e.onCommitFiberUnmount(hl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ie || Xt(n, t);
        case 6:
            var r = ee,
                l = Te;
            (ee = null),
                qe(e, t, n),
                (ee = r),
                (Te = l),
                ee !== null &&
                    (Te
                        ? ((e = ee),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ee.removeChild(n.stateNode));
            break;
        case 18:
            ee !== null &&
                (Te
                    ? ((e = ee),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Jl(e.parentNode, n)
                          : e.nodeType === 1 && Jl(e, n),
                      Vn(e))
                    : Jl(ee, n.stateNode));
            break;
        case 4:
            (r = ee),
                (l = Te),
                (ee = n.stateNode.containerInfo),
                (Te = !0),
                qe(e, t, n),
                (ee = r),
                (Te = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !ie &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    (i = i.tag),
                        o !== void 0 && (i & 2 || i & 4) && Qi(n, t, o),
                        (l = l.next);
                } while (l !== r);
            }
            qe(e, t, n);
            break;
        case 1:
            if (
                !ie &&
                (Xt(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    V(n, t, u);
                }
            qe(e, t, n);
            break;
        case 21:
            qe(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((ie = (r = ie) || n.memoizedState !== null),
                  qe(e, t, n),
                  (ie = r))
                : qe(e, t, n);
            break;
        default:
            qe(e, t, n);
    }
}
function es(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new np()),
            t.forEach(function (r) {
                var l = dp.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (ee = u.stateNode), (Te = !1);
                            break e;
                        case 3:
                            (ee = u.stateNode.containerInfo), (Te = !0);
                            break e;
                        case 4:
                            (ee = u.stateNode.containerInfo), (Te = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (ee === null) throw Error(k(160));
                vc(i, o, l), (ee = null), (Te = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (a) {
                V(l, t, a);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(t, e), Fe(e), r & 4)) {
                try {
                    In(3, e, e.return), Sl(3, e);
                } catch (x) {
                    V(e, e.return, x);
                }
                try {
                    In(5, e, e.return);
                } catch (x) {
                    V(e, e.return, x);
                }
            }
            break;
        case 1:
            ze(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return);
            break;
        case 5:
            if (
                (ze(t, e),
                Fe(e),
                r & 512 && n !== null && Xt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Bn(l, "");
                } catch (x) {
                    V(e, e.return, x);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            Bs(l, i),
                            yi(u, o);
                        var a = yi(u, i);
                        for (o = 0; o < s.length; o += 2) {
                            var h = s[o],
                                p = s[o + 1];
                            h === "style"
                                ? Ws(l, p)
                                : h === "dangerouslySetInnerHTML"
                                ? Hs(l, p)
                                : h === "children"
                                ? Bn(l, p)
                                : so(l, h, p, a);
                        }
                        switch (u) {
                            case "input":
                                pi(l, i);
                                break;
                            case "textarea":
                                $s(l, i);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var y = i.value;
                                y != null
                                    ? Zt(l, !!i.multiple, y, !1)
                                    : m !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Zt(
                                                l,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Zt(
                                                l,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        l[Yn] = i;
                    } catch (x) {
                        V(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((ze(t, e), Fe(e), r & 4)) {
                if (e.stateNode === null) throw Error(k(162));
                (l = e.stateNode), (i = e.memoizedProps);
                try {
                    l.nodeValue = i;
                } catch (x) {
                    V(e, e.return, x);
                }
            }
            break;
        case 3:
            if (
                (ze(t, e),
                Fe(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Vn(t.containerInfo);
                } catch (x) {
                    V(e, e.return, x);
                }
            break;
        case 4:
            ze(t, e), Fe(e);
            break;
        case 13:
            ze(t, e),
                Fe(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((i = l.memoizedState !== null),
                    (l.stateNode.isHidden = i),
                    !i ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (Ho = K())),
                r & 4 && es(e);
            break;
        case 22:
            if (
                ((h = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((ie = (a = ie) || h), ze(t, e), (ie = a))
                    : ze(t, e),
                Fe(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !h && e.mode & 1)
                )
                    for (_ = e, h = e.child; h !== null; ) {
                        for (p = _ = h; _ !== null; ) {
                            switch (((m = _), (y = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    In(4, m, m.return);
                                    break;
                                case 1:
                                    Xt(m, m.return);
                                    var w = m.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (w.props = t.memoizedProps),
                                                (w.state = t.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (x) {
                                            V(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    Xt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        ns(p);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = m), (_ = y)) : ns(p);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, p = e; ; ) {
                    if (p.tag === 5) {
                        if (h === null) {
                            h = p;
                            try {
                                (l = p.stateNode),
                                    a
                                        ? ((i = l.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((u = p.stateNode),
                                          (s = p.memoizedProps.style),
                                          (o =
                                              s != null &&
                                              s.hasOwnProperty("display")
                                                  ? s.display
                                                  : null),
                                          (u.style.display = Vs("display", o)));
                            } catch (x) {
                                V(e, e.return, x);
                            }
                        }
                    } else if (p.tag === 6) {
                        if (h === null)
                            try {
                                p.stateNode.nodeValue = a
                                    ? ""
                                    : p.memoizedProps;
                            } catch (x) {
                                V(e, e.return, x);
                            }
                    } else if (
                        ((p.tag !== 22 && p.tag !== 23) ||
                            p.memoizedState === null ||
                            p === e) &&
                        p.child !== null
                    ) {
                        (p.child.return = p), (p = p.child);
                        continue;
                    }
                    if (p === e) break e;
                    for (; p.sibling === null; ) {
                        if (p.return === null || p.return === e) break e;
                        h === p && (h = null), (p = p.return);
                    }
                    h === p && (h = null),
                        (p.sibling.return = p.return),
                        (p = p.sibling);
                }
            }
            break;
        case 19:
            ze(t, e), Fe(e), r & 4 && es(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Fe(e);
    }
}
function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (mc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(k(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Bn(l, ""), (r.flags &= -33));
                    var i = bu(e);
                    Yi(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        u = bu(e);
                    Gi(e, u, o);
                    break;
                default:
                    throw Error(k(161));
            }
        } catch (s) {
            V(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function lp(e, t, n) {
    (_ = e), yc(e);
}
function yc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var l = _,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || _r;
            if (!o) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || ie;
                u = _r;
                var a = ie;
                if (((_r = o), (ie = s) && !a))
                    for (_ = l; _ !== null; )
                        (o = _),
                            (s = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? rs(l)
                                : s !== null
                                ? ((s.return = o), (_ = s))
                                : rs(l);
                for (; i !== null; ) (_ = i), yc(i), (i = i.sibling);
                (_ = l), (_r = u), (ie = a);
            }
            ts(e);
        } else
            l.subtreeFlags & 8772 && i !== null
                ? ((i.return = l), (_ = i))
                : ts(e);
    }
}
function ts(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ie || Sl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ie)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Le(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && Bu(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Bu(t, o, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate;
                                if (a !== null) {
                                    var h = a.memoizedState;
                                    if (h !== null) {
                                        var p = h.dehydrated;
                                        p !== null && Vn(p);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(k(163));
                    }
                ie || (t.flags & 512 && Ki(t));
            } catch (m) {
                V(t, t.return, m);
            }
        }
        if (t === e) {
            _ = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (_ = n);
            break;
        }
        _ = t.return;
    }
}
function ns(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (_ = n);
            break;
        }
        _ = t.return;
    }
}
function rs(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Sl(4, t);
                    } catch (s) {
                        V(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            V(t, l, s);
                        }
                    }
                    var i = t.return;
                    try {
                        Ki(t);
                    } catch (s) {
                        V(t, i, s);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ki(t);
                    } catch (s) {
                        V(t, o, s);
                    }
            }
        } catch (s) {
            V(t, t.return, s);
        }
        if (t === e) {
            _ = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (_ = u);
            break;
        }
        _ = t.return;
    }
}
var ip = Math.ceil,
    ol = Ze.ReactCurrentDispatcher,
    $o = Ze.ReactCurrentOwner,
    _e = Ze.ReactCurrentBatchConfig,
    M = 0,
    b = null,
    G = null,
    te = 0,
    ve = 0,
    Jt = yt(0),
    J = 0,
    er = null,
    Rt = 0,
    El = 0,
    Ao = 0,
    Dn = null,
    fe = null,
    Ho = 0,
    cn = 1 / 0,
    He = null,
    ul = !1,
    Xi = null,
    ft = null,
    Nr = !1,
    lt = null,
    sl = 0,
    Fn = 0,
    Ji = null,
    Fr = -1,
    Ur = 0;
function se() {
    return M & 6 ? K() : Fr !== -1 ? Fr : (Fr = K());
}
function dt(e) {
    return e.mode & 1
        ? M & 2 && te !== 0
            ? te & -te
            : Hd.transition !== null
            ? (Ur === 0 && (Ur = na()), Ur)
            : ((e = I),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : aa(e.type))),
              e)
        : 1;
}
function Me(e, t, n, r) {
    if (50 < Fn) throw ((Fn = 0), (Ji = null), Error(k(185)));
    lr(e, n, r),
        (!(M & 2) || e !== b) &&
            (e === b && (!(M & 2) && (El |= n), J === 4 && nt(e, te)),
            me(e, r),
            n === 1 &&
                M === 0 &&
                !(t.mode & 1) &&
                ((cn = K() + 500), wl && wt()));
}
function me(e, t) {
    var n = e.callbackNode;
    Hf(e, t);
    var r = Qr(e, e === b ? te : 0);
    if (r === 0)
        n !== null && du(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && du(n), t === 1))
            e.tag === 0 ? Ad(ls.bind(null, e)) : ja(ls.bind(null, e)),
                Fd(function () {
                    !(M & 6) && wt();
                }),
                (n = null);
        else {
            switch (ra(r)) {
                case 1:
                    n = ho;
                    break;
                case 4:
                    n = ea;
                    break;
                case 16:
                    n = Wr;
                    break;
                case 536870912:
                    n = ta;
                    break;
                default:
                    n = Wr;
            }
            n = Nc(n, wc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function wc(e, t) {
    if (((Fr = -1), (Ur = 0), M & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (nn() && e.callbackNode !== n) return null;
    var r = Qr(e, e === b ? te : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = kc();
        (b !== e || te !== t) && ((He = null), (cn = K() + 500), Pt(e, t));
        do
            try {
                sp();
                break;
            } catch (u) {
                xc(e, u);
            }
        while (!0);
        Po(),
            (ol.current = i),
            (M = l),
            G !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Ei(e)), l !== 0 && ((r = l), (t = Zi(e, l)))),
            t === 1)
        )
            throw ((n = er), Pt(e, 0), nt(e, r), me(e, K()), n);
        if (t === 6) nt(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !op(l) &&
                    ((t = al(e, r)),
                    t === 2 &&
                        ((i = Ei(e)), i !== 0 && ((r = i), (t = Zi(e, i)))),
                    t === 1))
            )
                throw ((n = er), Pt(e, 0), nt(e, r), me(e, K()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Et(e, fe, He);
                    break;
                case 3:
                    if (
                        (nt(e, r),
                        (r & 130023424) === r && ((t = Ho + 500 - K()), 10 < t))
                    ) {
                        if (Qr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            se(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = Ti(Et.bind(null, e, fe, He), t);
                        break;
                    }
                    Et(e, fe, He);
                    break;
                case 4:
                    if ((nt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var o = 31 - Oe(r);
                        (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
                    }
                    if (
                        ((r = l),
                        (r = K() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * ip(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ti(Et.bind(null, e, fe, He), r);
                        break;
                    }
                    Et(e, fe, He);
                    break;
                case 5:
                    Et(e, fe, He);
                    break;
                default:
                    throw Error(k(329));
            }
        }
    }
    return me(e, K()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function Zi(e, t) {
    var n = Dn;
    return (
        e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256),
        (e = al(e, t)),
        e !== 2 && ((t = fe), (fe = n), t !== null && qi(t)),
        e
    );
}
function qi(e) {
    fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function op(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ie(i(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function nt(e, t) {
    for (
        t &= ~Ao,
            t &= ~El,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Oe(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function ls(e) {
    if (M & 6) throw Error(k(327));
    nn();
    var t = Qr(e, 0);
    if (!(t & 1)) return me(e, K()), null;
    var n = al(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ei(e);
        r !== 0 && ((t = r), (n = Zi(e, r)));
    }
    if (n === 1) throw ((n = er), Pt(e, 0), nt(e, t), me(e, K()), n);
    if (n === 6) throw Error(k(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Et(e, fe, He),
        me(e, K()),
        null
    );
}
function Vo(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t);
    } finally {
        (M = n), M === 0 && ((cn = K() + 500), wl && wt());
    }
}
function Ot(e) {
    lt !== null && lt.tag === 0 && !(M & 6) && nn();
    var t = M;
    M |= 1;
    var n = _e.transition,
        r = I;
    try {
        if (((_e.transition = null), (I = 1), e)) return e();
    } finally {
        (I = r), (_e.transition = n), (M = t), !(M & 6) && wt();
    }
}
function Wo() {
    (ve = Jt.current), U(Jt);
}
function Pt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Dd(n)), G !== null))
        for (n = G.return; n !== null; ) {
            var r = n;
            switch ((Co(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Jr();
                    break;
                case 3:
                    sn(), U(pe), U(oe), Oo();
                    break;
                case 5:
                    Ro(r);
                    break;
                case 4:
                    sn();
                    break;
                case 13:
                    U($);
                    break;
                case 19:
                    U($);
                    break;
                case 10:
                    jo(r.type._context);
                    break;
                case 22:
                case 23:
                    Wo();
            }
            n = n.return;
        }
    if (
        ((b = e),
        (G = e = pt(e.current, null)),
        (te = ve = t),
        (J = 0),
        (er = null),
        (Ao = El = Rt = 0),
        (fe = Dn = null),
        _t !== null)
    ) {
        for (t = 0; t < _t.length; t++)
            if (((n = _t[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = l), (r.next = o);
                }
                n.pending = r;
            }
        _t = null;
    }
    return e;
}
function xc(e, t) {
    do {
        var n = G;
        try {
            if ((Po(), (Mr.current = il), ll)) {
                for (var r = A.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                ll = !1;
            }
            if (
                ((Tt = 0),
                (q = X = A = null),
                (Mn = !1),
                (Zn = 0),
                ($o.current = null),
                n === null || n.return === null)
            ) {
                (J = 1), (er = t), (G = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    u = n,
                    s = t;
                if (
                    ((t = te),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == "object" &&
                        typeof s.then == "function")
                ) {
                    var a = s,
                        h = u,
                        p = h.tag;
                    if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = h.alternate;
                        m
                            ? ((h.updateQueue = m.updateQueue),
                              (h.memoizedState = m.memoizedState),
                              (h.lanes = m.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var y = Qu(o);
                    if (y !== null) {
                        (y.flags &= -257),
                            Ku(y, o, u, i, t),
                            y.mode & 1 && Wu(i, a, t),
                            (t = y),
                            (s = a);
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set();
                            x.add(s), (t.updateQueue = x);
                        } else w.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Wu(i, a, t), Qo();
                            break e;
                        }
                        s = Error(k(426));
                    }
                } else if (B && u.mode & 1) {
                    var C = Qu(o);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                            Ku(C, o, u, i, t),
                            _o(an(s, u));
                        break e;
                    }
                }
                (i = s = an(s, u)),
                    J !== 4 && (J = 2),
                    Dn === null ? (Dn = [i]) : Dn.push(i),
                    (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var f = rc(i, s, t);
                            Uu(i, f);
                            break e;
                        case 1:
                            u = s;
                            var c = i.type,
                                d = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (ft === null || !ft.has(d))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var v = lc(i, u, t);
                                Uu(i, v);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Ec(n);
        } catch (S) {
            (t = S), G === n && n !== null && (G = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function kc() {
    var e = ol.current;
    return (ol.current = il), e === null ? il : e;
}
function Qo() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
        b === null || (!(Rt & 268435455) && !(El & 268435455)) || nt(b, te);
}
function al(e, t) {
    var n = M;
    M |= 2;
    var r = kc();
    (b !== e || te !== t) && ((He = null), Pt(e, t));
    do
        try {
            up();
            break;
        } catch (l) {
            xc(e, l);
        }
    while (!0);
    if ((Po(), (M = n), (ol.current = r), G !== null)) throw Error(k(261));
    return (b = null), (te = 0), J;
}
function up() {
    for (; G !== null; ) Sc(G);
}
function sp() {
    for (; G !== null && !Of(); ) Sc(G);
}
function Sc(e) {
    var t = _c(e.alternate, e, ve);
    (e.memoizedProps = e.pendingProps),
        t === null ? Ec(e) : (G = t),
        ($o.current = null);
}
function Ec(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = tp(n, t)), n !== null)) {
                (n.flags &= 32767), (G = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (J = 6), (G = null);
                return;
            }
        } else if (((n = ep(n, t, ve)), n !== null)) {
            G = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            G = t;
            return;
        }
        G = t = e;
    } while (t !== null);
    J === 0 && (J = 5);
}
function Et(e, t, n) {
    var r = I,
        l = _e.transition;
    try {
        (_e.transition = null), (I = 1), ap(e, t, n, r);
    } finally {
        (_e.transition = l), (I = r);
    }
    return null;
}
function ap(e, t, n, r) {
    do nn();
    while (lt !== null);
    if (M & 6) throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Vf(e, i),
        e === b && ((G = b = null), (te = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Nr ||
            ((Nr = !0),
            Nc(Wr, function () {
                return nn(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = _e.transition), (_e.transition = null);
        var o = I;
        I = 1;
        var u = M;
        (M |= 4),
            ($o.current = null),
            rp(e, n),
            gc(n, e),
            zd(zi),
            (Kr = !!ji),
            (zi = ji = null),
            (e.current = n),
            lp(n),
            Mf(),
            (M = u),
            (I = o),
            (_e.transition = i);
    } else e.current = n;
    if (
        (Nr && ((Nr = !1), (lt = e), (sl = l)),
        (i = e.pendingLanes),
        i === 0 && (ft = null),
        Ff(n.stateNode),
        me(e, K()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]), r(l.value, {componentStack: l.stack, digest: l.digest});
    if (ul) throw ((ul = !1), (e = Xi), (Xi = null), e);
    return (
        sl & 1 && e.tag !== 0 && nn(),
        (i = e.pendingLanes),
        i & 1 ? (e === Ji ? Fn++ : ((Fn = 0), (Ji = e))) : (Fn = 0),
        wt(),
        null
    );
}
function nn() {
    if (lt !== null) {
        var e = ra(sl),
            t = _e.transition,
            n = I;
        try {
            if (((_e.transition = null), (I = 16 > e ? 16 : e), lt === null))
                var r = !1;
            else {
                if (((e = lt), (lt = null), (sl = 0), M & 6))
                    throw Error(k(331));
                var l = M;
                for (M |= 4, _ = e.current; _ !== null; ) {
                    var i = _,
                        o = i.child;
                    if (_.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (_ = a; _ !== null; ) {
                                    var h = _;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            In(8, h, i);
                                    }
                                    var p = h.child;
                                    if (p !== null) (p.return = h), (_ = p);
                                    else
                                        for (; _ !== null; ) {
                                            h = _;
                                            var m = h.sibling,
                                                y = h.return;
                                            if ((hc(h), h === a)) {
                                                _ = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = y), (_ = m);
                                                break;
                                            }
                                            _ = y;
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var C = x.sibling;
                                        (x.sibling = null), (x = C);
                                    } while (x !== null);
                                }
                            }
                            _ = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        (o.return = i), (_ = o);
                    else
                        e: for (; _ !== null; ) {
                            if (((i = _), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        In(9, i, i.return);
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                (f.return = i.return), (_ = f);
                                break e;
                            }
                            _ = i.return;
                        }
                }
                var c = e.current;
                for (_ = c; _ !== null; ) {
                    o = _;
                    var d = o.child;
                    if (o.subtreeFlags & 2064 && d !== null)
                        (d.return = o), (_ = d);
                    else
                        e: for (o = c; _ !== null; ) {
                            if (((u = _), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Sl(9, u);
                                    }
                                } catch (S) {
                                    V(u, u.return, S);
                                }
                            if (u === o) {
                                _ = null;
                                break e;
                            }
                            var v = u.sibling;
                            if (v !== null) {
                                (v.return = u.return), (_ = v);
                                break e;
                            }
                            _ = u.return;
                        }
                }
                if (
                    ((M = l),
                    wt(),
                    $e && typeof $e.onPostCommitFiberRoot == "function")
                )
                    try {
                        $e.onPostCommitFiberRoot(hl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (I = n), (_e.transition = t);
        }
    }
    return !1;
}
function is(e, t, n) {
    (t = an(n, t)),
        (t = rc(e, t, 1)),
        (e = ct(e, t, 1)),
        (t = se()),
        e !== null && (lr(e, 1, t), me(e, t));
}
function V(e, t, n) {
    if (e.tag === 3) is(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                is(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (ft === null || !ft.has(r)))
                ) {
                    (e = an(n, e)),
                        (e = lc(t, e, 1)),
                        (t = ct(t, e, 1)),
                        (e = se()),
                        t !== null && (lr(t, 1, e), me(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function cp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = se()),
        (e.pingedLanes |= e.suspendedLanes & n),
        b === e &&
            (te & n) === n &&
            (J === 4 || (J === 3 && (te & 130023424) === te && 500 > K() - Ho)
                ? Pt(e, 0)
                : (Ao |= n)),
        me(e, t);
}
function Cc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
            : (t = 1));
    var n = se();
    (e = Xe(e, t)), e !== null && (lr(e, t, n), me(e, n));
}
function fp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Cc(e, n);
}
function dp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314));
    }
    r !== null && r.delete(t), Cc(e, n);
}
var _c;
_c = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (de = !1), bd(e, t, n);
            de = !!(e.flags & 131072);
        }
    else (de = !1), B && t.flags & 1048576 && za(t, br, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Dr(e, t), (e = t.pendingProps);
            var l = ln(t, oe.current);
            tn(t, n), (l = Io(null, t, r, e, l, n));
            var i = Do();
            return (
                (t.flags |= 1),
                typeof l == "object" &&
                l !== null &&
                typeof l.render == "function" &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      he(r) ? ((i = !0), Zr(t)) : (i = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      Lo(t),
                      (l.updater = kl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      Ui(t, r, e, n),
                      (t = Ai(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      B && i && Eo(t),
                      ue(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Dr(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = hp(r)),
                    (e = Le(r, e)),
                    l)
                ) {
                    case 0:
                        t = $i(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Xu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Gu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Yu(null, t, r, Le(r.type, e), n);
                        break e;
                }
                throw Error(k(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                $i(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                Xu(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((sc(t), e === null)) throw Error(k(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (l = i.element),
                    Ia(e, t),
                    nl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (l = an(Error(k(423)), t)), (t = Ju(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = an(Error(k(424)), t)), (t = Ju(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            ge = at(t.stateNode.containerInfo.firstChild),
                                ye = t,
                                B = !0,
                                Re = null,
                                n = Oa(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((on(), r === l)) {
                        t = Je(e, t, n);
                        break e;
                    }
                    ue(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Da(t),
                e === null && Ii(t),
                (r = t.type),
                (l = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = l.children),
                Li(r, l)
                    ? (o = null)
                    : i !== null && Li(r, i) && (t.flags |= 32),
                uc(e, t),
                ue(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && Ii(t), null;
        case 13:
            return ac(e, t, n);
        case 4:
            return (
                To(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                Gu(e, t, r, l, n)
            );
        case 7:
            return ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = l.value),
                    D(el, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (Ie(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            t = Je(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var u = i.dependencies;
                            if (u !== null) {
                                o = i.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (i.tag === 1) {
                                            (s = Ke(-1, n & -n)), (s.tag = 2);
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var h = a.pending;
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next),
                                                      (h.next = s)),
                                                    (a.pending = s);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (s = i.alternate),
                                            s !== null && (s.lanes |= n),
                                            Di(i.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (i.tag === 10)
                                o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null))
                                    throw Error(k(341));
                                (o.lanes |= n),
                                    (u = o.alternate),
                                    u !== null && (u.lanes |= n),
                                    Di(o, n, t),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                ue(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                tn(t, n),
                (l = Ne(l)),
                (r = r(l)),
                (t.flags |= 1),
                ue(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = Le(r, t.pendingProps)),
                (l = Le(r.type, l)),
                Yu(e, t, r, l, n)
            );
        case 15:
            return ic(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Le(r, l)),
                Dr(e, t),
                (t.tag = 1),
                he(r) ? ((e = !0), Zr(t)) : (e = !1),
                tn(t, n),
                nc(t, r, l),
                Ui(t, r, l, n),
                Ai(null, t, r, !0, e, n)
            );
        case 19:
            return cc(e, t, n);
        case 22:
            return oc(e, t, n);
    }
    throw Error(k(156, t.tag));
};
function Nc(e, t) {
    return bs(e, t);
}
function pp(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ce(e, t, n, r) {
    return new pp(e, t, n, r);
}
function Ko(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hp(e) {
    if (typeof e == "function") return Ko(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === co)) return 11;
        if (e === fo) return 14;
    }
    return 2;
}
function pt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ce(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Br(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) Ko(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case $t:
                return jt(n.children, l, i, t);
            case ao:
                (o = 8), (l |= 8);
                break;
            case si:
                return (
                    (e = Ce(12, n, t, l | 2)),
                    (e.elementType = si),
                    (e.lanes = i),
                    e
                );
            case ai:
                return (
                    (e = Ce(13, n, t, l)),
                    (e.elementType = ai),
                    (e.lanes = i),
                    e
                );
            case ci:
                return (
                    (e = Ce(19, n, t, l)),
                    (e.elementType = ci),
                    (e.lanes = i),
                    e
                );
            case Ds:
                return Cl(n, l, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Ms:
                            o = 10;
                            break e;
                        case Is:
                            o = 9;
                            break e;
                        case co:
                            o = 11;
                            break e;
                        case fo:
                            o = 14;
                            break e;
                        case be:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(k(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ce(o, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function jt(e, t, n, r) {
    return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
    return (
        (e = Ce(22, e, r, t)),
        (e.elementType = Ds),
        (e.lanes = n),
        (e.stateNode = {isHidden: !1}),
        e
    );
}
function li(e, t, n) {
    return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
    return (
        (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function mp(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Bl(0)),
        (this.expirationTimes = Bl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Bl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function Go(e, t, n, r, l, i, o, u, s) {
    return (
        (e = new mp(e, t, n, u, s)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Ce(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Lo(i),
        e
    );
}
function vp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Bt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Pc(e) {
    if (!e) return vt;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (he(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(k(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (he(n)) return Pa(e, n, t);
    }
    return t;
}
function jc(e, t, n, r, l, i, o, u, s) {
    return (
        (e = Go(n, r, !0, e, l, i, o, u, s)),
        (e.context = Pc(null)),
        (n = e.current),
        (r = se()),
        (l = dt(n)),
        (i = Ke(r, l)),
        (i.callback = t ?? null),
        ct(n, i, l),
        (e.current.lanes = l),
        lr(e, l, r),
        me(e, r),
        e
    );
}
function _l(e, t, n, r) {
    var l = t.current,
        i = se(),
        o = dt(l);
    return (
        (n = Pc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ke(i, o)),
        (t.payload = {element: e}),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = ct(l, t, o)),
        e !== null && (Me(e, l, o, i), Or(e, l, o)),
        o
    );
}
function cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function os(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Yo(e, t) {
    os(e, t), (e = e.alternate) && os(e, t);
}
function gp() {
    return null;
}
var zc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Xo(e) {
    this._internalRoot = e;
}
Nl.prototype.render = Xo.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    _l(e, t, null, null);
};
Nl.prototype.unmount = Xo.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ot(function () {
            _l(null, e, null, null);
        }),
            (t[Ye] = null);
    }
};
function Nl(e) {
    this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = oa();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
        tt.splice(n, 0, e), n === 0 && sa(e);
    }
};
function Jo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function us() {}
function yp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var a = cl(o);
                i.call(a);
            };
        }
        var o = jc(t, r, e, 0, null, !1, !1, "", us);
        return (
            (e._reactRootContainer = o),
            (e[Ye] = o.current),
            Kn(e.nodeType === 8 ? e.parentNode : e),
            Ot(),
            o
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var a = cl(s);
            u.call(a);
        };
    }
    var s = Go(e, 0, !1, null, null, !1, !1, "", us);
    return (
        (e._reactRootContainer = s),
        (e[Ye] = s.current),
        Kn(e.nodeType === 8 ? e.parentNode : e),
        Ot(function () {
            _l(t, s, n, r);
        }),
        s
    );
}
function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var s = cl(o);
                u.call(s);
            };
        }
        _l(t, o, e, l);
    } else o = yp(n, t, e, l, r);
    return cl(o);
}
la = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Pn(t.pendingLanes);
                n !== 0 &&
                    (mo(t, n | 1),
                    me(t, K()),
                    !(M & 6) && ((cn = K() + 500), wt()));
            }
            break;
        case 13:
            Ot(function () {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = se();
                    Me(r, e, 1, l);
                }
            }),
                Yo(e, 1);
    }
};
vo = function (e) {
    if (e.tag === 13) {
        var t = Xe(e, 134217728);
        if (t !== null) {
            var n = se();
            Me(t, e, 134217728, n);
        }
        Yo(e, 134217728);
    }
};
ia = function (e) {
    if (e.tag === 13) {
        var t = dt(e),
            n = Xe(e, t);
        if (n !== null) {
            var r = se();
            Me(n, e, t, r);
        }
        Yo(e, t);
    }
};
oa = function () {
    return I;
};
ua = function (e, t) {
    var n = I;
    try {
        return (I = e), t();
    } finally {
        I = n;
    }
};
xi = function (e, t, n) {
    switch (t) {
        case "input":
            if ((pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = yl(r);
                        if (!l) throw Error(k(90));
                        Us(r), pi(r, l);
                    }
                }
            }
            break;
        case "textarea":
            $s(e, n);
            break;
        case "select":
            (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
    }
};
Gs = Vo;
Ys = Ot;
var wp = {usingClientEntryPoint: !1, Events: [or, Wt, yl, Qs, Ks, Vo]},
    Cn = {
        findFiberByHostInstance: Ct,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    xp = {
        bundleType: Cn.bundleType,
        version: Cn.version,
        rendererPackageName: Cn.rendererPackageName,
        rendererConfig: Cn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Zs(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Cn.findFiberByHostInstance || gp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber)
        try {
            (hl = Pr.inject(xp)), ($e = Pr);
        } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wp;
xe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jo(t)) throw Error(k(200));
    return vp(e, t, null, n);
};
xe.createRoot = function (e, t) {
    if (!Jo(e)) throw Error(k(299));
    var n = !1,
        r = "",
        l = zc;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Go(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ye] = t.current),
        Kn(e.nodeType === 8 ? e.parentNode : e),
        new Xo(t)
    );
};
xe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(k(188))
            : ((e = Object.keys(e).join(",")), Error(k(268, e)));
    return (e = Zs(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
    return Ot(e);
};
xe.hydrate = function (e, t, n) {
    if (!Pl(t)) throw Error(k(200));
    return jl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
    if (!Jo(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = zc;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = jc(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Ye] = t.current),
        Kn(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new Nl(t);
};
xe.render = function (e, t, n) {
    if (!Pl(t)) throw Error(k(200));
    return jl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
    if (!Pl(e)) throw Error(k(40));
    return e._reactRootContainer
        ? (Ot(function () {
              jl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Ye] = null);
              });
          }),
          !0)
        : !1;
};
xe.unstable_batchedUpdates = Vo;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Pl(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return jl(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function Lc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc);
        } catch (e) {
            console.error(e);
        }
}
Lc(), (Ls.exports = xe);
var kp = Ls.exports,
    Tc,
    ss = kp;
(Tc = ss.createRoot), ss.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
    return (
        (tr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        tr.apply(this, arguments)
    );
}
var it;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const as = "popstate";
function Sp(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: i, search: o, hash: u} = r.location;
        return bi(
            "",
            {pathname: i, search: o, hash: u},
            (l.state && l.state.usr) || null,
            (l.state && l.state.key) || "default"
        );
    }
    function n(r, l) {
        return typeof l == "string" ? l : fl(l);
    }
    return Cp(t, n, null, e);
}
function Y(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rc(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function Ep() {
    return Math.random().toString(36).substr(2, 8);
}
function cs(e, t) {
    return {usr: e.state, key: e.key, idx: t};
}
function bi(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        tr(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? hn(t) : t,
            {state: n, key: (t && t.key) || r || Ep()}
        )
    );
}
function fl(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function hn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function Cp(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l = document.defaultView, v5Compat: i = !1} = r,
        o = l.history,
        u = it.Pop,
        s = null,
        a = h();
    a == null && ((a = 0), o.replaceState(tr({}, o.state, {idx: a}), ""));
    function h() {
        return (o.state || {idx: null}).idx;
    }
    function p() {
        u = it.Pop;
        let C = h(),
            f = C == null ? null : C - a;
        (a = C), s && s({action: u, location: x.location, delta: f});
    }
    function m(C, f) {
        u = it.Push;
        let c = bi(x.location, C, f);
        a = h() + 1;
        let d = cs(c, a),
            v = x.createHref(c);
        try {
            o.pushState(d, "", v);
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError")
                throw S;
            l.location.assign(v);
        }
        i && s && s({action: u, location: x.location, delta: 1});
    }
    function y(C, f) {
        u = it.Replace;
        let c = bi(x.location, C, f);
        a = h();
        let d = cs(c, a),
            v = x.createHref(c);
        o.replaceState(d, "", v),
            i && s && s({action: u, location: x.location, delta: 0});
    }
    function w(C) {
        let f =
                l.location.origin !== "null"
                    ? l.location.origin
                    : l.location.href,
            c = typeof C == "string" ? C : fl(C);
        return (
            (c = c.replace(/ $/, "%20")),
            Y(
                f,
                "No window.location.(origin|href) available to create URL for href: " +
                    c
            ),
            new URL(c, f)
        );
    }
    let x = {
        get action() {
            return u;
        },
        get location() {
            return e(l, o);
        },
        listen(C) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return (
                l.addEventListener(as, p),
                (s = C),
                () => {
                    l.removeEventListener(as, p), (s = null);
                }
            );
        },
        createHref(C) {
            return t(l, C);
        },
        createURL: w,
        encodeLocation(C) {
            let f = w(C);
            return {pathname: f.pathname, search: f.search, hash: f.hash};
        },
        push: m,
        replace: y,
        go(C) {
            return o.go(C);
        },
    };
    return x;
}
var fs;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(fs || (fs = {}));
function _p(e, t, n) {
    return n === void 0 && (n = "/"), Np(e, t, n, !1);
}
function Np(e, t, n, r) {
    let l = typeof t == "string" ? hn(t) : t,
        i = Zo(l.pathname || "/", n);
    if (i == null) return null;
    let o = Oc(e);
    Pp(o);
    let u = null;
    for (let s = 0; u == null && s < o.length; ++s) {
        let a = Up(i);
        u = Dp(o[s], a, r);
    }
    return u;
}
function Oc(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let l = (i, o, u) => {
        let s = {
            relativePath: u === void 0 ? i.path || "" : u,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i,
        };
        s.relativePath.startsWith("/") &&
            (Y(
                s.relativePath.startsWith(r),
                'Absolute route path "' +
                    s.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (s.relativePath = s.relativePath.slice(r.length)));
        let a = ht([r, s.relativePath]),
            h = n.concat(s);
        i.children &&
            i.children.length > 0 &&
            (Y(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + a + '".')
            ),
            Oc(i.children, t, h, a)),
            !(i.path == null && !i.index) &&
                t.push({path: a, score: Mp(a, i.index), routesMeta: h});
    };
    return (
        e.forEach((i, o) => {
            var u;
            if (i.path === "" || !((u = i.path) != null && u.includes("?")))
                l(i, o);
            else for (let s of Mc(i.path)) l(i, o, s);
        }),
        t
    );
}
function Mc(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        l = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = Mc(r.join("/")),
        u = [];
    return (
        u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
        l && u.push(...o),
        u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
    );
}
function Pp(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : Ip(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const jp = /^:[\w-]+$/,
    zp = 3,
    Lp = 2,
    Tp = 1,
    Rp = 10,
    Op = -2,
    ds = (e) => e === "*";
function Mp(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(ds) && (r += Op),
        t && (r += Lp),
        n
            .filter((l) => !ds(l))
            .reduce((l, i) => l + (jp.test(i) ? zp : i === "" ? Tp : Rp), r)
    );
}
function Ip(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function Dp(e, t, n) {
    let {routesMeta: r} = e,
        l = {},
        i = "/",
        o = [];
    for (let u = 0; u < r.length; ++u) {
        let s = r[u],
            a = u === r.length - 1,
            h = i === "/" ? t : t.slice(i.length) || "/",
            p = ps(
                {path: s.relativePath, caseSensitive: s.caseSensitive, end: a},
                h
            ),
            m = s.route;
        if (
            (!p &&
                a &&
                n &&
                !r[r.length - 1].route.index &&
                (p = ps(
                    {
                        path: s.relativePath,
                        caseSensitive: s.caseSensitive,
                        end: !1,
                    },
                    h
                )),
            !p)
        )
            return null;
        Object.assign(l, p.params),
            o.push({
                params: l,
                pathname: ht([i, p.pathname]),
                pathnameBase: Hp(ht([i, p.pathnameBase])),
                route: m,
            }),
            p.pathnameBase !== "/" && (i = ht([i, p.pathnameBase]));
    }
    return o;
}
function ps(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = Fp(e.path, e.caseSensitive, e.end),
        l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        u = l.slice(1);
    return {
        params: r.reduce((a, h, p) => {
            let {paramName: m, isOptional: y} = h;
            if (m === "*") {
                let x = u[p] || "";
                o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
            }
            const w = u[p];
            return (
                y && !w
                    ? (a[m] = void 0)
                    : (a[m] = (w || "").replace(/%2F/g, "/")),
                a
            );
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e,
    };
}
function Fp(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Rc(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        );
    let r = [],
        l =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (o, u, s) => (
                        r.push({paramName: u, isOptional: s != null}),
                        s ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                );
    return (
        e.endsWith("*")
            ? (r.push({paramName: "*"}),
              (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (l += "\\/*$")
            : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
        [new RegExp(l, t ? void 0 : "i"), r]
    );
}
function Up(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            Rc(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function Zo(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function Bp(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = "",
    } = typeof e == "string" ? hn(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : $p(n, t)) : t,
        search: Vp(r),
        hash: Wp(l),
    };
}
function $p(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((l) => {
            l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function oi(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Ap(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}
function Ic(e, t) {
    let n = Ap(e);
    return t
        ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase);
}
function Dc(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string"
        ? (l = hn(e))
        : ((l = tr({}, e)),
          Y(
              !l.pathname || !l.pathname.includes("?"),
              oi("?", "pathname", "search", l)
          ),
          Y(
              !l.pathname || !l.pathname.includes("#"),
              oi("#", "pathname", "hash", l)
          ),
          Y(
              !l.search || !l.search.includes("#"),
              oi("#", "search", "hash", l)
          ));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        u;
    if (o == null) u = n;
    else {
        let p = t.length - 1;
        if (!r && o.startsWith("..")) {
            let m = o.split("/");
            for (; m[0] === ".."; ) m.shift(), (p -= 1);
            l.pathname = m.join("/");
        }
        u = p >= 0 ? t[p] : "/";
    }
    let s = Bp(l, u),
        a = o && o !== "/" && o.endsWith("/"),
        h = (i || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Hp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Vp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    Wp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Qp(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const Fc = ["post", "put", "patch", "delete"];
new Set(Fc);
const Kp = ["get", ...Fc];
new Set(Kp);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
    return (
        (nr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        nr.apply(this, arguments)
    );
}
const qo = E.createContext(null),
    Gp = E.createContext(null),
    Dt = E.createContext(null),
    zl = E.createContext(null),
    Ft = E.createContext({outlet: null, matches: [], isDataRoute: !1}),
    Uc = E.createContext(null);
function Yp(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    sr() || Y(!1);
    let {basename: r, navigator: l} = E.useContext(Dt),
        {hash: i, pathname: o, search: u} = $c(e, {relative: n}),
        s = o;
    return (
        r !== "/" && (s = o === "/" ? r : ht([r, o])),
        l.createHref({pathname: s, search: u, hash: i})
    );
}
function sr() {
    return E.useContext(zl) != null;
}
function Ll() {
    return sr() || Y(!1), E.useContext(zl).location;
}
function Bc(e) {
    E.useContext(Dt).static || E.useLayoutEffect(e);
}
function Xp() {
    let {isDataRoute: e} = E.useContext(Ft);
    return e ? sh() : Jp();
}
function Jp() {
    sr() || Y(!1);
    let e = E.useContext(qo),
        {basename: t, future: n, navigator: r} = E.useContext(Dt),
        {matches: l} = E.useContext(Ft),
        {pathname: i} = Ll(),
        o = JSON.stringify(Ic(l, n.v7_relativeSplatPath)),
        u = E.useRef(!1);
    return (
        Bc(() => {
            u.current = !0;
        }),
        E.useCallback(
            function (a, h) {
                if ((h === void 0 && (h = {}), !u.current)) return;
                if (typeof a == "number") {
                    r.go(a);
                    return;
                }
                let p = Dc(a, JSON.parse(o), i, h.relative === "path");
                e == null &&
                    t !== "/" &&
                    (p.pathname = p.pathname === "/" ? t : ht([t, p.pathname])),
                    (h.replace ? r.replace : r.push)(p, h.state, h);
            },
            [t, r, o, i, e]
        )
    );
}
function $c(e, t) {
    let {relative: n} = t === void 0 ? {} : t,
        {future: r} = E.useContext(Dt),
        {matches: l} = E.useContext(Ft),
        {pathname: i} = Ll(),
        o = JSON.stringify(Ic(l, r.v7_relativeSplatPath));
    return E.useMemo(() => Dc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Zp(e, t) {
    return qp(e, t);
}
function qp(e, t, n, r) {
    sr() || Y(!1);
    let {navigator: l} = E.useContext(Dt),
        {matches: i} = E.useContext(Ft),
        o = i[i.length - 1],
        u = o ? o.params : {};
    o && o.pathname;
    let s = o ? o.pathnameBase : "/";
    o && o.route;
    let a = Ll(),
        h;
    if (t) {
        var p;
        let C = typeof t == "string" ? hn(t) : t;
        s === "/" || ((p = C.pathname) != null && p.startsWith(s)) || Y(!1),
            (h = C);
    } else h = a;
    let m = h.pathname || "/",
        y = m;
    if (s !== "/") {
        let C = s.replace(/^\//, "").split("/");
        y = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
    }
    let w = _p(e, {pathname: y}),
        x = rh(
            w &&
                w.map((C) =>
                    Object.assign({}, C, {
                        params: Object.assign({}, u, C.params),
                        pathname: ht([
                            s,
                            l.encodeLocation
                                ? l.encodeLocation(C.pathname).pathname
                                : C.pathname,
                        ]),
                        pathnameBase:
                            C.pathnameBase === "/"
                                ? s
                                : ht([
                                      s,
                                      l.encodeLocation
                                          ? l.encodeLocation(C.pathnameBase)
                                                .pathname
                                          : C.pathnameBase,
                                  ]),
                    })
                ),
            i,
            n,
            r
        );
    return t && x
        ? E.createElement(
              zl.Provider,
              {
                  value: {
                      location: nr(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          h
                      ),
                      navigationType: it.Pop,
                  },
              },
              x
          )
        : x;
}
function bp() {
    let e = uh(),
        t = Qp(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)"};
    return E.createElement(
        E.Fragment,
        null,
        E.createElement("h2", null, "Unexpected Application Error!"),
        E.createElement("h3", {style: {fontStyle: "italic"}}, t),
        n ? E.createElement("pre", {style: l}, n) : null,
        null
    );
}
const eh = E.createElement(bp, null);
class th extends E.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            });
    }
    static getDerivedStateFromError(t) {
        return {error: t};
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error !== void 0
            ? E.createElement(
                  Ft.Provider,
                  {value: this.props.routeContext},
                  E.createElement(Uc.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function nh(e) {
    let {routeContext: t, match: n, children: r} = e,
        l = E.useContext(qo);
    return (
        l &&
            l.static &&
            l.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = n.route.id),
        E.createElement(Ft.Provider, {value: t}, r)
    );
}
function rh(e, t, n, r) {
    var l;
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (
            (i = r) != null &&
            i.v7_partialHydration &&
            t.length === 0 &&
            !n.initialized &&
            n.matches.length > 0
        )
            e = n.matches;
        else return null;
    }
    let o = e,
        u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let h = o.findIndex(
            (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
        );
        h >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
    }
    let s = !1,
        a = -1;
    if (n && r && r.v7_partialHydration)
        for (let h = 0; h < o.length; h++) {
            let p = o[h];
            if (
                ((p.route.HydrateFallback || p.route.hydrateFallbackElement) &&
                    (a = h),
                p.route.id)
            ) {
                let {loaderData: m, errors: y} = n,
                    w =
                        p.route.loader &&
                        m[p.route.id] === void 0 &&
                        (!y || y[p.route.id] === void 0);
                if (p.route.lazy || w) {
                    (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
                    break;
                }
            }
        }
    return o.reduceRight((h, p, m) => {
        let y,
            w = !1,
            x = null,
            C = null;
        n &&
            ((y = u && p.route.id ? u[p.route.id] : void 0),
            (x = p.route.errorElement || eh),
            s &&
                (a < 0 && m === 0
                    ? ((w = !0), (C = null))
                    : a === m &&
                      ((w = !0),
                      (C = p.route.hydrateFallbackElement || null))));
        let f = t.concat(o.slice(0, m + 1)),
            c = () => {
                let d;
                return (
                    y
                        ? (d = x)
                        : w
                        ? (d = C)
                        : p.route.Component
                        ? (d = E.createElement(p.route.Component, null))
                        : p.route.element
                        ? (d = p.route.element)
                        : (d = h),
                    E.createElement(nh, {
                        match: p,
                        routeContext: {
                            outlet: h,
                            matches: f,
                            isDataRoute: n != null,
                        },
                        children: d,
                    })
                );
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
            ? E.createElement(th, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: x,
                  error: y,
                  children: c(),
                  routeContext: {outlet: null, matches: f, isDataRoute: !0},
              })
            : c();
    }, null);
}
var Ac = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(Ac || {}),
    dl = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(dl || {});
function lh(e) {
    let t = E.useContext(qo);
    return t || Y(!1), t;
}
function ih(e) {
    let t = E.useContext(Gp);
    return t || Y(!1), t;
}
function oh(e) {
    let t = E.useContext(Ft);
    return t || Y(!1), t;
}
function Hc(e) {
    let t = oh(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Y(!1), n.route.id;
}
function uh() {
    var e;
    let t = E.useContext(Uc),
        n = ih(dl.UseRouteError),
        r = Hc(dl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sh() {
    let {router: e} = lh(Ac.UseNavigateStable),
        t = Hc(dl.UseNavigateStable),
        n = E.useRef(!1);
    return (
        Bc(() => {
            n.current = !0;
        }),
        E.useCallback(
            function (l, i) {
                i === void 0 && (i = {}),
                    n.current &&
                        (typeof l == "number"
                            ? e.navigate(l)
                            : e.navigate(l, nr({fromRouteId: t}, i)));
            },
            [e, t]
        )
    );
}
function $r(e) {
    Y(!1);
}
function ah(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = it.Pop,
        navigator: i,
        static: o = !1,
        future: u,
    } = e;
    sr() && Y(!1);
    let s = t.replace(/^\/*/, "/"),
        a = E.useMemo(
            () => ({
                basename: s,
                navigator: i,
                static: o,
                future: nr({v7_relativeSplatPath: !1}, u),
            }),
            [s, u, i, o]
        );
    typeof r == "string" && (r = hn(r));
    let {
            pathname: h = "/",
            search: p = "",
            hash: m = "",
            state: y = null,
            key: w = "default",
        } = r,
        x = E.useMemo(() => {
            let C = Zo(h, s);
            return C == null
                ? null
                : {
                      location: {
                          pathname: C,
                          search: p,
                          hash: m,
                          state: y,
                          key: w,
                      },
                      navigationType: l,
                  };
        }, [s, h, p, m, y, w, l]);
    return x == null
        ? null
        : E.createElement(
              Dt.Provider,
              {value: a},
              E.createElement(zl.Provider, {children: n, value: x})
          );
}
function ch(e) {
    let {children: t, location: n} = e;
    return Zp(eo(t), n);
}
new Promise(() => {});
function eo(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        E.Children.forEach(e, (r, l) => {
            if (!E.isValidElement(r)) return;
            let i = [...t, l];
            if (r.type === E.Fragment) {
                n.push.apply(n, eo(r.props.children, i));
                return;
            }
            r.type !== $r && Y(!1),
                !r.props.index || !r.props.children || Y(!1);
            let o = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary:
                    r.props.ErrorBoundary != null ||
                    r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (o.children = eo(r.props.children, i)),
                n.push(o);
        }),
        n
    );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function to() {
    return (
        (to = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        to.apply(this, arguments)
    );
}
function fh(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l,
        i;
    for (i = 0; i < r.length; i++)
        (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n;
}
function dh(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ph(e, t) {
    return e.button === 0 && (!t || t === "_self") && !dh(e);
}
const hh = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
    ],
    mh = "6";
try {
    window.__reactRouterVersion = mh;
} catch {}
const vh = "startTransition",
    hs = cf[vh];
function gh(e) {
    let {basename: t, children: n, future: r, window: l} = e,
        i = E.useRef();
    i.current == null && (i.current = Sp({window: l, v5Compat: !0}));
    let o = i.current,
        [u, s] = E.useState({action: o.action, location: o.location}),
        {v7_startTransition: a} = r || {},
        h = E.useCallback(
            (p) => {
                a && hs ? hs(() => s(p)) : s(p);
            },
            [s, a]
        );
    return (
        E.useLayoutEffect(() => o.listen(h), [o, h]),
        E.createElement(ah, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: o,
            future: r,
        })
    );
}
const yh =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ms = E.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: l,
                reloadDocument: i,
                replace: o,
                state: u,
                target: s,
                to: a,
                preventScrollReset: h,
                unstable_viewTransition: p,
            } = t,
            m = fh(t, hh),
            {basename: y} = E.useContext(Dt),
            w,
            x = !1;
        if (typeof a == "string" && wh.test(a) && ((w = a), yh))
            try {
                let d = new URL(window.location.href),
                    v = a.startsWith("//")
                        ? new URL(d.protocol + a)
                        : new URL(a),
                    S = Zo(v.pathname, y);
                v.origin === d.origin && S != null
                    ? (a = S + v.search + v.hash)
                    : (x = !0);
            } catch {}
        let C = Yp(a, {relative: l}),
            f = xh(a, {
                replace: o,
                state: u,
                target: s,
                preventScrollReset: h,
                relative: l,
                unstable_viewTransition: p,
            });
        function c(d) {
            r && r(d), d.defaultPrevented || f(d);
        }
        return E.createElement(
            "a",
            to({}, m, {
                href: w || C,
                onClick: x || i ? r : c,
                ref: n,
                target: s,
            })
        );
    });
var vs;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(vs || (vs = {}));
var gs;
(function (e) {
    (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(gs || (gs = {}));
function xh(e, t) {
    let {
            target: n,
            replace: r,
            state: l,
            preventScrollReset: i,
            relative: o,
            unstable_viewTransition: u,
        } = t === void 0 ? {} : t,
        s = Xp(),
        a = Ll(),
        h = $c(e, {relative: o});
    return E.useCallback(
        (p) => {
            if (ph(p, n)) {
                p.preventDefault();
                let m = r !== void 0 ? r : fl(a) === fl(h);
                s(e, {
                    replace: m,
                    state: l,
                    preventScrollReset: i,
                    relative: o,
                    unstable_viewTransition: u,
                });
            }
        },
        [a, s, h, r, l, n, e, i, o, u]
    );
}
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Vc = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Sh = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eh = E.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: l = "",
            children: i,
            iconNode: o,
            ...u
        },
        s
    ) =>
        E.createElement(
            "svg",
            {
                ref: s,
                ...Sh,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: Vc("lucide", l),
                ...u,
            },
            [
                ...o.map(([a, h]) => E.createElement(a, h)),
                ...(Array.isArray(i) ? i : [i]),
            ]
        )
);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const De = (e, t) => {
    const n = E.forwardRef(({className: r, ...l}, i) =>
        E.createElement(Eh, {
            ref: i,
            iconNode: t,
            className: Vc(`lucide-${kh(e)}`, r),
            ...l,
        })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ch = De("BookA", [
    [
        "path",
        {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
            key: "k3hazp",
        },
    ],
    ["path", {d: "m8 13 4-7 4 7", key: "4rari8"}],
    ["path", {d: "M9.1 11h5.7", key: "1gkovt"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _h = De("Brush", [
    [
        "path",
        {
            d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
            key: "1styjt",
        },
    ],
    [
        "path",
        {
            d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
            key: "z0l1mu",
        },
    ],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nh = De("Clapperboard", [
    [
        "path",
        {
            d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
            key: "1tn4o7",
        },
    ],
    ["path", {d: "m6.2 5.3 3.1 3.9", key: "iuk76l"}],
    ["path", {d: "m12.4 3.4 3.1 4", key: "6hsd6n"}],
    ["path", {d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ph = De("Droplets", [
    [
        "path",
        {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
            key: "1ptgy4",
        },
    ],
    [
        "path",
        {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
            key: "1sl1rz",
        },
    ],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jh = De("Medal", [
    [
        "path",
        {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza",
        },
    ],
    ["path", {d: "M11 12 5.12 2.2", key: "qhuxz6"}],
    ["path", {d: "m13 12 5.88-9.8", key: "hbye0f"}],
    ["path", {d: "M8 7h8", key: "i86dvs"}],
    ["circle", {cx: "12", cy: "17", r: "5", key: "qbz8iq"}],
    ["path", {d: "M12 18v-2h-.5", key: "fawc4q"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = De("Menu", [
    ["line", {x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i"}],
    ["line", {x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3"}],
    ["line", {x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = De("MicVocal", [
    [
        "path",
        {
            d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
            key: "80a601",
        },
    ],
    [
        "path",
        {
            d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
            key: "j0ngtp",
        },
    ],
    ["circle", {cx: "16", cy: "7", r: "5", key: "d08jfb"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Th = De("PawPrint", [
    ["circle", {cx: "11", cy: "4", r: "2", key: "vol9p0"}],
    ["circle", {cx: "18", cy: "8", r: "2", key: "17gozi"}],
    ["circle", {cx: "20", cy: "16", r: "2", key: "1v9bxh"}],
    [
        "path",
        {
            d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
            key: "1ydw1z",
        },
    ],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = De("School", [
    ["path", {d: "M14 22v-4a2 2 0 1 0-4 0v4", key: "hhkicm"}],
    [
        "path",
        {d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw"},
    ],
    ["path", {d: "M18 5v17", key: "1sw6gf"}],
    ["path", {d: "m4 6 8-4 8 4", key: "1q0ilc"}],
    ["path", {d: "M6 5v17", key: "1xfsm0"}],
    ["circle", {cx: "12", cy: "9", r: "2", key: "1092wv"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oh = De("Trophy", [
    ["path", {d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7"}],
    ["path", {d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp"}],
    ["path", {d: "M4 22h16", key: "57wxv0"}],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq",
        },
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb",
        },
    ],
    ["path", {d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3"}],
]);
/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = De("X", [
        ["path", {d: "M18 6 6 18", key: "1bl5f8"}],
        ["path", {d: "m6 6 12 12", key: "d8bk6v"}],
    ]),
    Ih = "/assets/Logo-eRr5gQvh.svg",
    Dh = "/assets/Nitul_Das-BHeGbHrf.jpeg",
    Fh = "/assets/Samim_Aktar-s8J6ehpW.jpeg",
    Uh = "/assets/Bishal_Kashyap-CN1NViK9.jpg",
    Bh = "/assets/Partha_Pratim_Ingti-CtiWcyt3.jpg",
    $h = "/assets/Biswadeep_Mazumder-Tudaag_E.jpg",
    Ah = "/assets/Kundalkalyan_Boruah-DKyXQtk_.jpg",
    Hh = "/assets/Barnom_Kumar_Gohain-DaKrTnig.jpg",
    Vh = "/assets/Minhaz_Ali-BP1rLx1e.jpg",
    Wh = "/assets/Saruraj_Gohain-DKrC2bsw.jpeg",
    Qh = "/assets/Shekhar_Ghatuar-CvDtpicN.jpeg",
    Kh = "/assets/Debabrat_Deka-C7NqcFke.jpeg",
    ys = [
        {label: "Home", href: "/"},
        {label: "Boarders", href: "/boarders"},
        {label: "Facilities", href: "/facilities"},
        {label: "Achievements", href: "#achievements"},
        {label: "Gallery", href: "#gallery"},
        {label: "Contact", href: "#contact"},
    ],
    Gh = [
        {
            user: "Nitul Das",
            dept: "Computer Science & Engineering, 2022-26",
            image: Dh,
            text: "I have been a boarder of this hostel since October 2022. Over the past years, this place has become much more than just a residence; it has become a second home to me. The hostel has been a backdrop to countless memories and experiences, and it holds a special place in my heart. From the friendships I’ve formed to the support I've received, every corner of this place echoes with moments of joy and camaraderie. The emotional bond I have with this hostel is profound—it's where I’ve grown, learned, and found a sense of belonging. Truly, this hostel is 'Home away from Home' for me.",
        },
        {
            user: "Samim Aktar",
            dept: "Civil Engineering, 2021-25",
            image: Fh,
            text: "Dui mane Jui",
        },
        {
            user: "Bishal Kashyap",
            dept: "Mechanical Engineering, 2021-25",
            image: Uh,
            text: "Hostel 2 is like a home for me. Although parents are not here but friends, seniors, juniors are here to make a family. Enjoy staying at hostel these 4yrs would be your best moments of your life and really you wont regret it.",
        },
        {
            user: "Partha Pratim Ingti",
            dept: "Computer Science & Engineering, 2023-27",
            image: Bh,
            text: "Hostel 2 is the oldest hostel in JEC. It is the first hostel of JEC. It has a huge and great legacy. Living in this hostel is an eye opening experience for me. It teaches us how to balance independence with community, it teaches us to manage our time efficiently and many more . As a whole the experience of living in a hostel is great. Sharing a room with others from different backgrounds, making new friends, having late night conversations, sharing meals makes it feel like a second home. Of course there a challenges like missing the comfort of home and sometimes craving privacy but the sense of belonging and the friendship I have built  here makes it all worth it.",
        },
        {
            user: "Biswadeep Mazumder",
            dept: "Computer Science & Engineering, 2023-27",
            image: $h,
            text: "Hostel 2 has been a fantastic place to stay during my college years. The hostel features a well-maintained playground, perfect for indulging in all sorts of sports, which has greatly contributed to my overall college experience. Living here has helped me refine my time management skills, thanks to the various activities and responsibilities that come with hostel life. The supportive seniors at Hostel 2 were particularly helpful, guiding me through the challenges of my first year. Overall, Hostel 2 offers a nurturing environment that fosters growth both academically and personally.",
        },
        {
            user: "Kundalkalyan Boruah",
            dept: "Computer Science & Engineering, 2023-27",
            image: Ah,
            text: "Hostel 2 has profoundly shaped my life over the past year, becoming a significant part of my journey. The welcoming presence of seniors has left an indelible mark, and the experience has contributed immensely to my personal growth.",
        },
        {
            user: "Barnom Kumar Gohain",
            dept: "Mechanical Engineering, 2023-27",
            image: Hh,
            text: "I have been a boarder of this hostel for a year now and this has been the best year of my life so far. I would definitely recommend the freshers to choose this hostel as their abode for the next 4 years of their life. Trust me the experience will be worthwhile. You will definitely have a story to tell.",
        },
        {
            user: "Minhaz Ali",
            dept: "Civil Engineering, 2022-26",
            image: Vh,
            text: "I have been a boarder of this hostel since October 2022, and I must say, it has been a truly memorable experience. Staying in this hostel has taught me valuable lessons about life that I may not have learned otherwise. The camaraderie among the residents is heartwarming, as everyone treats each other with kindness and respect. We all live together as a supportive community, where every problem is solved by helping each other out. Whether it's studying for exams, sharing meals, or just needing someone to talk to, my fellow boarders have become like a second family to me. The hostel has become a home away from home, and I will always cherish the memories and experiences I've had here.",
        },
        {
            user: "Saruraj Buragohain",
            dept: "Civil Engineering, 2022-26",
            image: Wh,
            text: "Hostel 2 of Jorhat Engineering College (JEC) is one of the key residential facilities for students, offering a vibrant and conducive environment for academic growth and camaraderie. Situated within the scenic campus, the hostel is known for its well-maintained infrastructure, including comfortable rooms, common areas, and recreational facilities. The hostel fosters a stronger sense of community among students from diverse backgrounds, with various cultural and academic activities organized throughout the year. With a dedicated hostel administration ensuring safety and convenience, Hostel 2 provides a supportive home-away-from-home experience for students during their academic journey at JEC. We are actually like a family, hostel senti will develop through out the period and unforgettable memories are been created in our Hostel. It's like a rollercoaster which helps you to shape your ethics , character and behaviour which is essential for being a good engineer and foremost human being. I must definitely say that our hostel is one of the best hostels amongst Assam.",
        },
        {
            user: "Shekhar Jyoti Ghatuar",
            dept: "Civil Engineering, 2023-27",
            image: Qh,
            text: "One of the best hostel in JEC",
        },
        {
            user: "Debabrat Deka",
            dept: "Instrumentation Engineering, 2021-25",
            image: Kh,
            text: "Home away from home,this place is very close to my heart. Dui mane jui",
        },
    ],
    Yh = [
        {
            icon: g.jsx(Rh, {}),
            text: "Common Room",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero distinctio amet accusantium, in molestiae, fugiat quae perferendis aliquid quos dolore ut necessitatibus. Eveniet dicta ipsam ipsum quam aliquid voluptas ut.",
        },
        {
            icon: g.jsx(Ch, {}),
            text: "Reading Room",
            description:
                "Our hostel has a well organised reading room for quiet study and personal reading.",
        },
        {
            icon: g.jsx(Ph, {}),
            text: "Water Purifier (RO)",
            description:
                "Our hostel is equipped with a reliable RO water purifier system, ensuring clean and safe drinking water for all residents.",
        },
        {
            icon: g.jsx(Oh, {}),
            text: "Sporting Equipments",
            description:
                "We offer good facilities for table tennis, volleyball, and badminton.",
        },
        {
            icon: g.jsx(jh, {}),
            text: "Football Ground",
            description:
                "We have a large football ground at our hostel, making it ideal for practicing and playing football.",
        },
        {
            icon: g.jsx(_h, {}),
            text: "Art & Design",
            description:
                "⁠If you’re interested in art or design, the head of the Avant Garde Club is in our hostel.",
        },
        {
            icon: g.jsx(Lh, {}),
            text: "Debate & Quiz",
            description:
                "For those interested in quizzes or debates, our hostel provides good guidance and support.",
        },
        {
            icon: g.jsx(Nh, {}),
            text: "Acting & Drama",
            description:
                "If you’re into acting or drama, the Rongom Club core members are from our hostel.",
        },
        {
            icon: g.jsx(Th, {}),
            text: "⁠Anime & Cosplay",
            description:
                "If you're interested in anime or cosplay, the JEC Anime Society Club is based in our hostel.",
        },
    ],
    Xh = [
        {href: "https://www.instagram.com/hostel2.jec/", text: "Instagram"},
        {href: "https://www.facebook.com/HOSTEL2JEC", text: "Facebook"},
        {href: "mailto:hostel2.jec1960@gmail.com", text: "Gmail"},
    ],
    Jh = [
        {
            name: "Aadrit Bora",
            contact: "+91 60266 53644",
            designation: "Monitor",
        },
        {
            name: "Bishal Kashyap",
            contact: "+91 70027 46545",
            designation: "Sports Monitor",
        },
        {
            name: "Debabrat Deka",
            contact: "+91 91017 54123",
            designation: "Mess Monitor",
        },
    ],
    Zh = () => {
        const [e, t] = E.useState(!1),
            n = () => {
                t(!e);
            };
        return g.jsx("div", {
            children: g.jsx("nav", {
                className:
                    "fixed w-full top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80",
                children: g.jsxs("div", {
                    className: "container px-4 mx-auto relative text-sm",
                    children: [
                        g.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                                g.jsxs("div", {
                                    className:
                                        "flex items-center flex-shrink-0",
                                    children: [
                                        g.jsx("img", {
                                            className: "h-12 w-12 mr-2",
                                            src: Ih,
                                            alt: "LOGO",
                                        }),
                                        g.jsx("span", {
                                            className: "text-xl tracking-tight",
                                            children: "Hostel2",
                                        }),
                                    ],
                                }),
                                g.jsx("ul", {
                                    className:
                                        "hidden lg:flex ml-14 space-x-12",
                                    children: ys.map((r, l) =>
                                        g.jsx(
                                            "li",
                                            {
                                                children: g.jsx(ms, {
                                                    to: r.href,
                                                    children: r.label,
                                                }),
                                            },
                                            l
                                        )
                                    ),
                                }),
                                g.jsxs("div", {
                                    className:
                                        "hidden lg:flex justify-center space-x-12 items-center",
                                    children: [
                                        g.jsx("a", {
                                            href: "#",
                                            className:
                                                "py-2 px-2 border rounded-md",
                                            children: "Sign In",
                                        }),
                                        g.jsx("a", {
                                            href: "#",
                                            className:
                                                "bg-gradient-to-r from-red-400 to-red-700 px-1 py-2 rounded-md",
                                            children: "Create an Account",
                                        }),
                                    ],
                                }),
                                g.jsx("div", {
                                    className:
                                        "lg:hidden md:flex flex-col justify-end",
                                    children: g.jsx("button", {
                                        onClick: n,
                                        children: e
                                            ? g.jsx(Mh, {})
                                            : g.jsx(zh, {}),
                                    }),
                                }),
                            ],
                        }),
                        e &&
                            g.jsxs("div", {
                                className:
                                    "fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden",
                                children: [
                                    g.jsx("ul", {
                                        children: ys.map((r, l) =>
                                            g.jsx(
                                                "li",
                                                {
                                                    className: "py-4",
                                                    children: g.jsx(ms, {
                                                        to: r.href,
                                                        children: r.label,
                                                    }),
                                                },
                                                l
                                            )
                                        ),
                                    }),
                                    g.jsxs("div", {
                                        className:
                                            "flex justify-center items-end space-x-6",
                                        children: [
                                            g.jsx("a", {
                                                href: "#",
                                                className:
                                                    "py-2 px-2 border rounded-md",
                                                children: "SignIN",
                                            }),
                                            g.jsx("a", {
                                                href: "#",
                                                className:
                                                    "bg-gradient-to-r from-red-400 to-red-700 px-1 py-2 rounded-md",
                                                children: "Create an Account",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        });
    },
    qh = "/assets/h2Front-BB-39wOp.jpeg",
    bh = "/assets/h2Garden-JGAB8C3S.jpeg",
    em = () =>
        g.jsxs("div", {
            className: "flex flex-col items-center mt-6 lg:mt-10",
            children: [
                g.jsxs("h1", {
                    className:
                        "text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide",
                    children: [
                        "Welcome to",
                        g.jsxs("span", {
                            className:
                                "bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text",
                            children: [" ", "Hostel 2"],
                        }),
                    ],
                }),
                g.jsx("p", {
                    className:
                        "mt-10 text-sm sm:text-lg text-center text-neutral-500 max-w-4xl",
                    children:
                        "The walls of our hostel hold not just bricks but the dreams, aspirations, and transformations of countless souls from boy to man.",
                }),
                g.jsxs("div", {
                    className: "flex justify-center my-8 sm:my-10",
                    children: [
                        g.jsx("a", {
                            href: "#",
                            className:
                                "bg-gradient-to-r from-red-400 to-red-700 py-3 px-2 sm:px-4 mx-3 rounded-md",
                            children: "Contact Us",
                        }),
                        g.jsx("a", {
                            href: "#",
                            className: "py-3 px-4 mx-3 rounded-md border",
                            children: "Brief History",
                        }),
                    ],
                }),
                g.jsxs("div", {
                    className: "flex flex-wrap mt-7 sm:mt-10 justify-center",
                    children: [
                        g.jsx("img", {
                            src: qh,
                            alt: "Hostel 2 at Jorhat Engineering College",
                            className:
                                "rounded-lg w-1/2 sm:w-1/3 border border-red-500 shadow-sm shadow-red-300 mx-3",
                        }),
                        g.jsx("img", {
                            src: bh,
                            alt: "Hostel 2 at Jorhat Engineering College",
                            className:
                                "rounded-lg w-1/2 sm:w-1/3 border border-red-500 shadow-sm shadow-red-300 mx-3",
                        }),
                    ],
                }),
            ],
        }),
    tm = () =>
        g.jsxs("div", {
            className:
                "relative mt-10 border-b border-neutral-800 min-h-[800px]",
            children: [
                g.jsx("h2", {
                    className:
                        "text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent",
                    children: "Facilities",
                }),
                g.jsx("div", {
                    className: "flex flex-wrap mt-10 lg:mt-20",
                    children: Yh.map((e, t) =>
                        g.jsx(
                            "div",
                            {
                                className: "w-full sm:w-1/2 lg:w-1/3",
                                children: g.jsxs("div", {
                                    className: "flex",
                                    children: [
                                        g.jsx("div", {
                                            className:
                                                "flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full",
                                            children: e.icon,
                                        }),
                                        g.jsxs("div", {
                                            children: [
                                                g.jsx("h5", {
                                                    className:
                                                        "mt-1 mb-6 text-xl",
                                                    children: e.text,
                                                }),
                                                g.jsx("p", {
                                                    className:
                                                        "text-md p-2 mb-20 text-neutral-500",
                                                    children: e.description,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            },
                            t
                        )
                    ),
                }),
            ],
        }),
    nm = () =>
        g.jsxs("footer", {
            className: "mt-20 border-t py-10 border-neutral-700",
            children: [
                g.jsxs("div", {
                    className:
                        "grid grid-cols-1 lg:grid-cols-3 gap-4 mx-20 text-red-500",
                    children: [
                        g.jsxs("div", {
                            className: "text-left",
                            children: [
                                g.jsx("h3", {
                                    className: "text-md font-semibold mb-4",
                                    children: "Platform",
                                }),
                                g.jsx("ul", {
                                    className: "space-y-2",
                                    children: Xh.map((e, t) =>
                                        g.jsx(
                                            "li",
                                            {
                                                children: g.jsx("a", {
                                                    href: e.href,
                                                    className:
                                                        "text-neutral-300 hover:text-white",
                                                    children: e.text,
                                                }),
                                            },
                                            t
                                        )
                                    ),
                                }),
                            ],
                        }),
                        g.jsxs("div", {
                            className: "text-center text-neutral-300",
                            children: [
                                g.jsx("h3", {
                                    className:
                                        "text-md font-semibold mb-4 text-red-500",
                                    children: "Hostel Superintendent",
                                }),
                                g.jsx("p", {children: "Dhrubajyoti Baruah"}),
                                g.jsxs("p", {
                                    className: "text-sm text-neutral-400",
                                    children: [
                                        "Associate Professor, Masters of Computer Application",
                                        g.jsx("br", {}),
                                        "Jorhat Engineering College",
                                    ],
                                }),
                            ],
                        }),
                        g.jsxs("div", {
                            className: "text-right",
                            children: [
                                g.jsx("h3", {
                                    className: "text-md font-semibold mb-4",
                                    children: "Monitors",
                                }),
                                g.jsx("ul", {
                                    className: "space-y-2",
                                    children: Jh.map((e, t) =>
                                        g.jsxs(
                                            "li",
                                            {
                                                className: "text-neutral-300",
                                                children: [
                                                    g.jsx("span", {
                                                        className:
                                                            "font-semibold",
                                                        children: e.name,
                                                    }),
                                                    g.jsxs("span", {
                                                        className:
                                                            "text-sm text-neutral-400",
                                                        children: [
                                                            " ",
                                                            "(",
                                                            e.designation,
                                                            ")",
                                                        ],
                                                    }),
                                                    g.jsx("br", {}),
                                                    e.contact,
                                                ],
                                            },
                                            t
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                g.jsxs("div", {
                    className: "mt-8 text-center text-neutral-500",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Nitul Das. All rights reserved.",
                    ],
                }),
            ],
        }),
    rm = () => {
        const e = (t, n) => {
            const r = t.split(" ");
            return r.length > n ? r.slice(0, n).join(" ") + "..." : t;
        };
        return g.jsxs("div", {
            className: "mt-10 tracking-wide",
            children: [
                g.jsx("h2", {
                    className:
                        "text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent",
                    children: "Boarders of Hostel 2",
                }),
                g.jsx("div", {
                    className: "flex flex-wrap justify-center",
                    children: Gh.map((t, n) => {
                        const [r, l] = E.useState(!1);
                        return g.jsx(
                            "div",
                            {
                                className: "w-full sm:w-1/2 lg:w-1/3 px-4 py-2",
                                children: g.jsxs("div", {
                                    className:
                                        "bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin",
                                    children: [
                                        g.jsxs("p", {
                                            children: [
                                                g.jsx("span", {
                                                    children: r
                                                        ? t.text
                                                        : e(t.text, 20),
                                                }),
                                                g.jsx("button", {
                                                    onClick: () => l(!r),
                                                    className:
                                                        "text-red-500 ml-2 text-xs",
                                                    style: {display: "inline"},
                                                    children: r
                                                        ? "Show Less"
                                                        : "Read More",
                                                }),
                                            ],
                                        }),
                                        g.jsxs("div", {
                                            className: "flex mt-8 items-start",
                                            children: [
                                                g.jsx("img", {
                                                    className:
                                                        "w-12 h-12 mr-6 rounded-full border border-neutral-300",
                                                    src: t.image,
                                                    alt: "",
                                                }),
                                                g.jsxs("div", {
                                                    children: [
                                                        g.jsx("h6", {
                                                            children: t.user,
                                                        }),
                                                        g.jsx("span", {
                                                            className:
                                                                "text-sm font-normal italic text-neutral-600",
                                                            children: t.dept,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            },
                            n
                        );
                    }),
                }),
            ],
        });
    },
    lm = () =>
        g.jsxs(gh, {
            children: [
                g.jsx(Zh, {}),
                g.jsxs("div", {
                    className: "max-w-7xl mx-auto pt-20 px-6",
                    children: [
                        g.jsxs(ch, {
                            children: [
                                g.jsx($r, {path: "/", element: g.jsx(em, {})}),
                                g.jsx($r, {
                                    path: "/facilities",
                                    element: g.jsx(tm, {}),
                                }),
                                g.jsx($r, {
                                    path: "/boarders",
                                    element: g.jsx(rm, {}),
                                }),
                            ],
                        }),
                        g.jsx(nm, {}),
                    ],
                }),
            ],
        });
Tc(document.getElementById("root")).render(
    g.jsx(E.StrictMode, {children: g.jsx(lm, {})})
);
